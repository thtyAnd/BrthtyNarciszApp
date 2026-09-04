/**
 * LinkedIn borító renderelő.
 *
 * A brand/linkedin-cover/cover.html-t rendereli PNG-be fej nélküli Chromiummal.
 * A szöveget a cover.html tetején lévő CONFIG blokkban kell szerkeszteni.
 *
 * Futtatás a repo gyökeréből:
 *   node brand/tools/render-cover.mjs
 *
 * Előfeltétel: playwright + Chromium. Ha a playwright globálisan van telepítve:
 *   NODE_PATH=$(npm root -g) node brand/tools/render-cover.mjs
 */
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';

/** playwright betöltése: helyi node_modules, majd globális npm root. */
async function loadChromium() {
  try {
    return (await import('playwright')).chromium;
  } catch {
    const root = execSync('npm root -g', { encoding: 'utf8' }).trim();
    const req = createRequire(resolve(root, 'noop.js'));
    return req('playwright').chromium;
  }
}
const chromium = await loadChromium();

const HERE   = dirname(fileURLToPath(import.meta.url));
const SRC    = resolve(HERE, '../linkedin-cover/cover.html');
const OUT    = resolve(HERE, '../linkedin-cover');

/** A LinkedIn személyes profil borító natív mérete. */
const W = 1584;
const H = 396;

const VARIANTS = [
  { file: 'linkedin-cover-dark-1584x396.png',     theme: 'dark',  lang: 'hu', scale: 1 },
  { file: 'linkedin-cover-dark-3168x792.png',     theme: 'dark',  lang: 'hu', scale: 2 },
  { file: 'linkedin-cover-light-1584x396.png',    theme: 'light', lang: 'hu', scale: 1 },
  { file: 'linkedin-cover-light-3168x792.png',    theme: 'light', lang: 'hu', scale: 2 },
  { file: 'linkedin-cover-dark-en-3168x792.png',  theme: 'dark',  lang: 'en', scale: 2 },
  { file: 'linkedin-cover-light-en-3168x792.png', theme: 'light', lang: 'en', scale: 2 },
  { file: 'guide-safezone-1584x396.png',          theme: 'dark',  lang: 'hu', scale: 1, safezone: 1 },
];

const browser = await chromium.launch({
  args: ['--no-sandbox', '--font-render-hinting=none', '--disable-lcd-text'],
});

await mkdir(OUT, { recursive: true });

for (const v of VARIANTS) {
  const page = await browser.newPage({
    viewport: { width: W, height: H },
    deviceScaleFactor: v.scale,
  });

  const q = new URLSearchParams({ theme: v.theme, lang: v.lang });
  if (v.safezone) q.set('safezone', '1');

  await page.goto(`file://${SRC}?${q}`, { waitUntil: 'load' });
  // a cover.html a betűk betöltése után teszi ki a data-ready jelzőt
  await page.waitForSelector('html[data-ready="1"]', { timeout: 15_000 });

  await page.screenshot({
    path: resolve(OUT, v.file),
    clip: { x: 0, y: 0, width: W, height: H },
  });
  await page.close();

  console.log(`✓ ${v.file.padEnd(42)} ${W * v.scale}×${H * v.scale}`);
}

await browser.close();
