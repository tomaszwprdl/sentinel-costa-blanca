#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node CommonJS QA tool, not bundled app code */
/*
 * scripts/qa/capture-route.cjs
 * Durable local visual QA capture for the Sentinel site.
 *
 * Drives the locally-installed Chrome (or Edge) through puppeteer-core. The repo
 * owns the protocol client but does not download or bundle a browser. Captures
 * REAL pixels, so a computed-style report can never contradict the screenshot.
 *
 * Examples:
 *   node scripts/qa/capture-route.cjs --url=http://127.0.0.1:3100/pl?pathway=private-use-only --full --out=tmp/home.png
 *   node scripts/qa/capture-route.cjs --url=... --regionFrom=.page-final-cta --regionTo=footer --pad=220 --out=tmp/cta.png
 *   node scripts/qa/capture-route.cjs --url=... --mobile --width=390 --height=844 --dpr=2 --expect=.page-final-cta,footer --out=tmp/m.png
 *
 * Viewport:
 *   --width=1440 --height=1400     CSS px
 *   --dpr=1                        device scale factor (output multiplier)
 *   --mobile                       mobile emulation (touch + mobile flag)
 * Capture mode (default = current viewport):
 *   --full                         full page
 *   --region=<sel>                 bounding box of one element (+ --pad)
 *   --regionFrom=<sel> --regionTo=<sel>   full-width span: top of A .. bottom of B (+ --pad)
 *   --clip=x,y,w,h                 explicit rectangle (full-page coords)
 * Probe / report:
 *   --expect=sel1,sel2,...         report presence of each selector
 *   --scrollY=<px>                 scroll before capture
 *   --wait=2000                    settle ms after DOM/content load
 *   --out=<png>                    screenshot path (default %TEMP%/sentinel-qa/shot.png)
 *   --report=<json>                report path (default: <out>.report.json)
 *   --chrome=<path>                browser exe (default: installed Chrome, else Edge)
 *
 * Exit 0 = captured; non-zero = failure (message on stderr). Always prints a JSON report on success.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer-core');

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

const URL_ = arg('url', 'http://127.0.0.1:3100/pl?pathway=private-use-only');
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

function jsonReport(partial) {
  const report = {
    url: URL_,
    out: OUT,
    bytes: fs.existsSync(OUT) ? fs.statSync(OUT).size : 0,
    browser: CHROME,
    viewport: {
      width: WIDTH,
      height: HEIGHT,
      dpr: DPR,
      mobile: MOBILE,
      mode: (REGION_FROM && REGION_TO) ? `span:${REGION_FROM}..${REGION_TO}` : REGION ? `region:${REGION}` : CLIP ? 'clip' : FULL ? 'full' : 'viewport',
    },
    ...partial,
  };
  return report;
}

async function main() {
  if (!fs.existsSync(CHROME)) throw new Error(`browser not found: ${CHROME} (pass --chrome=<path>)`);

  const consoleMsgs = [];
  const failed = [];
  const badStatus = [];

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    timeout: 20000,
    defaultViewport: {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: DPR,
      isMobile: MOBILE,
      hasTouch: MOBILE,
    },
    args: [
      '--disable-gpu',
      '--disable-gpu-compositing',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-features=VizDisplayCompositor,CalculateNativeWinOcclusion',
      '--no-first-run',
      '--no-default-browser-check',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-color-profile=srgb',
      '--mute-audio',
      `--window-size=${WIDTH},${HEIGHT}`,
    ],
  });

  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(20000);
    page.setDefaultNavigationTimeout(30000);

    page.on('console', msg => {
      if (['error', 'warning'].includes(msg.type())) {
        consoleMsgs.push({ level: msg.type(), text: msg.text().slice(0, 400) });
      }
    });
    page.on('requestfailed', request => {
      failed.push({
        url: request.url(),
        error: request.failure()?.errorText || 'request failed',
        type: request.resourceType(),
      });
    });
    page.on('response', response => {
      if (response.status() >= 400) {
        badStatus.push({ url: response.url(), status: response.status(), type: response.request().resourceType() });
      }
    });

    const response = await page.goto(URL_, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await sleep(WAIT);
    if (SCROLLY != null) {
      await page.evaluate(y => window.scrollTo(0, y), parseInt(SCROLLY, 10));
      await sleep(400);
    }

    const metrics = await page.evaluate(() => {
      const d = document.documentElement;
      return {
        clientWidth: d.clientWidth,
        scrollWidth: d.scrollWidth,
        innerWidth: window.innerWidth,
        scrollHeight: d.scrollHeight,
        title: document.title,
        h1: document.querySelector('h1')?.innerText || null,
      };
    });

    const selectorsPresent = {};
    for (const selector of EXPECT) selectorsPresent[selector] = !!(await page.$(selector));

    let clip = null;
    if (REGION_FROM && REGION_TO) {
      clip = await page.evaluate(({ from, to, pad }) => {
        const a = document.querySelector(from);
        const b = document.querySelector(to);
        if (!a || !b) return null;
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        const top = ra.top + scrollY;
        const bottom = rb.bottom + scrollY;
        return {
          x: 0,
          y: Math.max(0, top - pad),
          width: document.documentElement.clientWidth,
          height: (bottom - top) + pad * 2,
        };
      }, { from: REGION_FROM, to: REGION_TO, pad: PAD });
      if (!clip) throw new Error(`regionFrom/regionTo not found: ${REGION_FROM} .. ${REGION_TO}`);
    } else if (REGION) {
      clip = await page.evaluate(({ selector, pad }) => {
        const e = document.querySelector(selector);
        if (!e) return null;
        const b = e.getBoundingClientRect();
        return {
          x: Math.max(0, b.left + scrollX - pad),
          y: Math.max(0, b.top + scrollY - pad),
          width: b.width + pad * 2,
          height: b.height + pad * 2,
        };
      }, { selector: REGION, pad: PAD });
      if (!clip) throw new Error(`--region not found: ${REGION}`);
    } else if (CLIP) {
      const [x, y, width, height] = CLIP.split(',').map(Number);
      clip = { x, y, width, height };
    }

    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    await page.screenshot({
      path: OUT,
      type: 'png',
      fullPage: FULL && !clip,
      clip: clip || undefined,
    });

    const overflow = (metrics.scrollWidth || 0) - (metrics.clientWidth || 0);
    const report = jsonReport({
      clip,
      loadFired: !!response,
      title: metrics.title || null,
      h1: metrics.h1 || null,
      clientWidth: metrics.clientWidth ?? null,
      scrollWidth: metrics.scrollWidth ?? null,
      overflowPx: overflow,
      overflowOK: overflow <= 0,
      selectorsPresent,
      consoleErrors: consoleMsgs,
      failedRequests: failed,
      http4xx5xx: badStatus,
    });
    fs.mkdirSync(path.dirname(REPORT), { recursive: true });
    fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
