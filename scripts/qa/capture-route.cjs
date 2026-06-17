#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node CommonJS QA tool, not bundled app code */
/*
 * scripts/qa/capture-route.cjs
 * Durable, zero-dependency local visual QA capture for the Sentinel site.
 *
 * Drives the locally-installed Chrome (or Edge) via the Chrome DevTools Protocol
 * using Node's built-in WebSocket + fetch (Node >= 22). No Playwright, no Puppeteer,
 * no network install, no runtime dependency added to the repo. Captures REAL pixels,
 * so a computed-style report can never contradict the screenshot.
 *
 * Examples:
 *   node scripts/qa/capture-route.cjs --url=http://127.0.0.1:3000/pl?pathway=private-use-only --full --out=tmp/home.png
 *   node scripts/qa/capture-route.cjs --url=... --regionFrom=.page-final-cta --regionTo=footer --pad=220 --out=tmp/cta.png
 *   node scripts/qa/capture-route.cjs --url=... --mobile --width=390 --height=844 --dpr=2 --expect=.page-final-cta,footer --out=tmp/m.png
 *
 * Viewport:
 *   --width=1440 --height=1400     CSS px
 *   --dpr=1                        device scale factor (output multiplier)
 *   --mobile                       mobile emulation (touch + mobile flag)
 * Capture mode (default = current viewport):
 *   --full                         full page (captureBeyondViewport)
 *   --region=<sel>                 bounding box of one element (+ --pad)
 *   --regionFrom=<sel> --regionTo=<sel>   full-width span: top of A .. bottom of B (+ --pad)
 *   --clip=x,y,w,h                 explicit rectangle (full-page coords)
 * Probe / report:
 *   --expect=sel1,sel2,...         report presence of each selector
 *   --scrollY=<px>                 scroll before capture
 *   --wait=2000                    settle ms after the load event
 *   --out=<png>                    screenshot path (default %TEMP%/sentinel-qa/shot.png)
 *   --report=<json>                report path (default: <out>.report.json)
 *   --chrome=<path>                browser exe (default: installed Chrome, else Edge)
 *
 * Exit 0 = captured; non-zero = failure (message on stderr). Always prints a JSON report.
 */
const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const argv = process.argv.slice(2);
const arg = (n, d) => { const p = `--${n}=`; const a = argv.find(s => s.startsWith(p)); return a ? a.slice(p.length) : d; };
const flag = n => argv.includes(`--${n}`);

const BROWSER_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

if (flag('help') || flag('h')) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(0); }

const URL_ = arg('url', 'http://127.0.0.1:3000/pl?pathway=private-use-only');
const OUT = path.resolve(arg('out', path.join(os.tmpdir(), 'sentinel-qa', 'shot.png')));
const REPORT = path.resolve(arg('report', OUT.replace(/\.png$/i, '') + '.report.json'));
const WIDTH = parseInt(arg('width', '1440'), 10);
const HEIGHT = parseInt(arg('height', '1400'), 10);
const DPR = parseFloat(arg('dpr', '1'));
const MOBILE = flag('mobile');
const FULL = flag('full');
const CLIP = arg('clip', null);
const REGION = arg('region', null);
const REGION_FROM = arg('regionFrom', null);
const REGION_TO = arg('regionTo', null);
const PAD = parseInt(arg('pad', '24'), 10);
const SCROLLY = arg('scrollY', null);
const WAIT = parseInt(arg('wait', '2000'), 10);
const EXPECT = (arg('expect', '') || '').split(',').map(s => s.trim()).filter(Boolean);
const CHROME = arg('chrome', BROWSER_CANDIDATES.find(p => fs.existsSync(p)) || BROWSER_CANDIDATES[0]);

const sleep = ms => new Promise(r => setTimeout(r, ms));
const sleepSync = ms => { try { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms); } catch {} };
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sentinel-cdp-'));

const chromeArgs = [
  '--headless=new', '--disable-gpu', '--disable-gpu-compositing', '--disable-dev-shm-usage',
  '--disable-extensions', '--no-first-run', '--no-default-browser-check', '--mute-audio',
  '--hide-scrollbars', '--force-color-profile=srgb',
  `--user-data-dir=${userDataDir}`, '--remote-debugging-port=0',
  `--window-size=${WIDTH},${HEIGHT}`, 'about:blank',
];
const proc = spawn(CHROME, chromeArgs, { stdio: 'ignore' });

function cleanup() {
  try { spawnSync('taskkill', ['/pid', String(proc.pid), '/T', '/F'], { stdio: 'ignore' }); } catch {}
  for (let i = 0; i < 12; i++) { try { fs.rmSync(userDataDir, { recursive: true, force: true }); break; } catch { sleepSync(250); } }
}
const hardTimeout = setTimeout(() => { console.error('ERROR: hard timeout (60s)'); cleanup(); process.exit(2); }, 60000);

async function devToolsPort() {
  const f = path.join(userDataDir, 'DevToolsActivePort');
  for (let i = 0; i < 100; i++) {
    if (fs.existsSync(f)) { const t = fs.readFileSync(f, 'utf8').trim().split('\n'); if (t[0]) return parseInt(t[0], 10); }
    await sleep(100);
  }
  throw new Error('DevToolsActivePort not written (browser failed to expose CDP)');
}

async function main() {
  if (!fs.existsSync(CHROME)) throw new Error(`browser not found: ${CHROME} (pass --chrome=<path>)`);
  const port = await devToolsPort();
  let wsUrl;
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = list.find(t => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) { wsUrl = page.webSocketDebuggerUrl; break; }
    } catch {}
    await sleep(100);
  }
  if (!wsUrl) throw new Error('no CDP page target found');

  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('ws open failed')); });

  let idc = 0; const pending = new Map();
  let loadFired = false;
  const consoleMsgs = [], failed = [], badStatus = [], reqUrl = new Map();

  ws.onmessage = ev => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error))); else resolve(msg.result);
      return;
    }
    const m = msg.method, p = msg.params || {};
    if (m === 'Page.loadEventFired') loadFired = true;
    else if (m === 'Network.requestWillBeSent') reqUrl.set(p.requestId, p.request && p.request.url);
    else if (m === 'Network.loadingFailed' && !p.canceled) failed.push({ url: reqUrl.get(p.requestId) || p.requestId, error: p.errorText, type: p.type });
    else if (m === 'Network.responseReceived' && p.response && p.response.status >= 400) badStatus.push({ url: p.response.url, status: p.response.status, type: p.type });
    else if (m === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(p.type)) consoleMsgs.push({ level: p.type, text: (p.args || []).map(a => a.value ?? a.description ?? '').join(' ').slice(0, 400) });
    else if (m === 'Log.entryAdded' && ['error', 'warning'].includes(p.entry.level)) consoleMsgs.push({ level: p.entry.level, text: String(p.entry.text).slice(0, 400), url: p.entry.url });
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => { const id = ++idc; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Log.enable');
  if (MOBILE || DPR !== 1) await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: DPR, mobile: MOBILE });

  await send('Page.navigate', { url: URL_ });
  for (let i = 0; i < 400 && !loadFired; i++) await sleep(50); // up to 20s for load
  await sleep(WAIT); // fixed settle — do NOT wait on network idle (dev keeps an HMR socket open forever)
  if (SCROLLY != null) { await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${parseInt(SCROLLY, 10)})` }); await sleep(400); }

  const measExpr = `(()=>{const d=document.documentElement;return JSON.stringify({clientWidth:d.clientWidth,scrollWidth:d.scrollWidth,innerWidth:window.innerWidth,scrollHeight:d.scrollHeight,title:document.title,h1:(document.querySelector('h1')||{}).innerText||null});})()`;
  let metrics = {};
  try { metrics = JSON.parse((await send('Runtime.evaluate', { expression: measExpr, returnByValue: true })).result.value); } catch {}

  let selectorsPresent = {};
  if (EXPECT.length) {
    const expr = `(()=>{const s=${JSON.stringify(EXPECT)};const r={};for(const x of s)r[x]=!!document.querySelector(x);return JSON.stringify(r);})()`;
    try { selectorsPresent = JSON.parse((await send('Runtime.evaluate', { expression: expr, returnByValue: true })).result.value); } catch {}
  }

  const shotParams = { format: 'png' };
  if (REGION_FROM && REGION_TO) {
    const expr = `(()=>{const a=document.querySelector(${JSON.stringify(REGION_FROM)});const b=document.querySelector(${JSON.stringify(REGION_TO)});if(!a||!b)return null;const ra=a.getBoundingClientRect();const rb=b.getBoundingClientRect();return JSON.stringify({top:ra.top+scrollY,bottom:rb.bottom+scrollY,width:document.documentElement.clientWidth});})()`;
    const v = (await send('Runtime.evaluate', { expression: expr, returnByValue: true })).result.value;
    if (!v) throw new Error(`regionFrom/regionTo not found: ${REGION_FROM} .. ${REGION_TO}`);
    const s = JSON.parse(v);
    shotParams.clip = { x: 0, y: Math.max(0, s.top - PAD), width: s.width, height: (s.bottom - s.top) + PAD * 2, scale: DPR };
    shotParams.captureBeyondViewport = true;
  } else if (REGION) {
    const r = (await send('Runtime.evaluate', { expression: `(()=>{const e=document.querySelector(${JSON.stringify(REGION)});if(!e)return null;const b=e.getBoundingClientRect();return JSON.stringify({x:b.left+scrollX,y:b.top+scrollY,w:b.width,h:b.height});})()`, returnByValue: true })).result.value;
    if (!r) throw new Error(`--region not found: ${REGION}`);
    const b = JSON.parse(r);
    shotParams.clip = { x: Math.max(0, b.x - PAD), y: Math.max(0, b.y - PAD), width: b.w + PAD * 2, height: b.h + PAD * 2, scale: DPR };
    shotParams.captureBeyondViewport = true;
  } else if (CLIP) {
    const [x, y, w, h] = CLIP.split(',').map(Number);
    shotParams.clip = { x, y, width: w, height: h, scale: DPR };
    shotParams.captureBeyondViewport = true;
  } else if (FULL) {
    shotParams.captureBeyondViewport = true;
  }

  const shot = await send('Page.captureScreenshot', shotParams);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, Buffer.from(shot.data, 'base64'));

  const overflow = (metrics.scrollWidth || 0) - (metrics.clientWidth || 0);
  const report = {
    url: URL_, out: OUT, bytes: fs.statSync(OUT).size, browser: CHROME,
    viewport: { width: WIDTH, height: HEIGHT, dpr: DPR, mobile: MOBILE, mode: (REGION_FROM && REGION_TO) ? `span:${REGION_FROM}..${REGION_TO}` : REGION ? `region:${REGION}` : CLIP ? 'clip' : FULL ? 'full' : 'viewport' },
    clip: shotParams.clip || null,
    loadFired, title: metrics.title || null, h1: metrics.h1 || null,
    clientWidth: metrics.clientWidth ?? null, scrollWidth: metrics.scrollWidth ?? null, overflowPx: overflow, overflowOK: overflow <= 0,
    selectorsPresent,
    consoleErrors: consoleMsgs, failedRequests: failed, http4xx5xx: badStatus,
  };
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));

  try { ws.close(); } catch {}
  clearTimeout(hardTimeout);
  cleanup();
  process.exit(0);
}

main().catch(e => { console.error('ERROR:', e.message); clearTimeout(hardTimeout); cleanup(); process.exit(1); });
