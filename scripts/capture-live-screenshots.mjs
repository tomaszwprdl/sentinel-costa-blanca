import puppeteer from 'puppeteer-core';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://sentinelcostablanca.netlify.app';
const OUT_DIR = path.resolve('screenshots-live-30d2fea');
const COMMIT = '30d2fea';
const CHROME =
  process.env.CHROME_PATH ??
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const shots = [
  { file: 'pl_desktop_1440.png', path: '/pl', width: 1440, height: 900 },
  { file: 'pl_mobile_390.png', path: '/pl', width: 390, height: 844 },
  { file: 'pl_services_desktop_1440.png', path: '/pl/services', width: 1440, height: 900 },
  { file: 'pl_services_mobile_390.png', path: '/pl/services', width: 390, height: 844 },
  { file: 'pl_contact_desktop_1440.png', path: '/pl/contact', width: 1440, height: 900 },
  { file: 'pl_contact_mobile_390.png', path: '/pl/contact', width: 390, height: 844 },
];

await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

try {
  for (const shot of shots) {
    const page = await browser.newPage();
    await page.setViewport({
      width: shot.width,
      height: shot.height,
      deviceScaleFactor: 1,
    });
    await page.goto(`${BASE}${shot.path}`, {
      waitUntil: 'networkidle2',
      timeout: 90000,
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const outPath = path.join(OUT_DIR, shot.file);
    await page.screenshot({ path: outPath, fullPage: true });
    await page.close();
    console.log(`Saved ${outPath}`);
  }
} finally {
  await browser.close();
}

const manifest = {
  commit: COMMIT,
  baseUrl: BASE,
  capturedAt: new Date().toISOString(),
  files: shots.map((s) => s.file),
};

await writeFile(
  path.join(OUT_DIR, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8'
);

console.log('Done');
