// Generates en/index.html from index.html: English text baked into the HTML (crawlers and
// link-preview bots don't run JS), English meta/OG tags and og-en-1200x630.png, and asset paths one
// level up. Run after editing index.html or assets/js/i18n.js:  node tools/build-en.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('..', import.meta.url).pathname;
let html = readFileSync(root + 'index.html', 'utf8');
const js = readFileSync(root + 'assets/js/i18n.js', 'utf8');
const EN = vm.runInNewContext('(' + js.slice(js.indexOf('var EN = {') + 'var EN = '.length, js.indexOf('};', js.indexOf('var EN = {')) + 1) + ')');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => esc(s).replace(/"/g, '&quot;');
let missing = [];

// Text nodes: only elements whose content is plain text (no child tags).
html = html.replace(/(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, key, text, close) => {
  if (open.includes('data-count')) return m;
  if (!(key in EN)) { missing.push(key); return m; }
  return open + esc(EN[key]) + close;
});
// Translated attributes, e.g. aria-label.
html = html.replace(/(<[^>]*\bdata-i18n-attr="([\w-]+):([^"]+)"[^>]*>)/g, (m, tagStr, name, key) =>
  key in EN ? tagStr.replace(new RegExp(name + '="[^"]*"'), `${name}="${attr(EN[key])}"`) : m);
// Numbers in English format.
html = html.replace(/(data-count="(\d+)"[^>]*>)([\d.]+)</g, (m, open, n) => open + (+n).toLocaleString('en-US') + '<');

const head = {
  title: EN['meta.title'],
  desc: EN['meta.desc'],
  ogDesc: 'Your calorie target, macros and form score, worked out on your phone from your own data. For iPhone and Apple Watch. Coming soon to the App Store.',
  ogAlt: 'FitWinner: Calories, training and recovery. In one place. A phone showing the daily calorie target, form score and calories cards.',
};
html = html
  .replace('<html lang="tr">', '<html lang="en" data-lang="en">')
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(head.title)}</title>`)
  .replace(/(<meta name="description" content=")[^"]*/, `$1${attr(head.desc)}`)
  .replace('<link rel="canonical" href="https://fitwinner.app/">', '<link rel="canonical" href="https://fitwinner.app/en/">')
  .replace('<meta property="og:locale" content="tr_TR">\n<meta property="og:locale:alternate" content="en_US">', '<meta property="og:locale" content="en_US">\n<meta property="og:locale:alternate" content="tr_TR">')
  .replace('<meta property="og:url" content="https://fitwinner.app/">', '<meta property="og:url" content="https://fitwinner.app/en/">')
  .replace(/(<meta property="og:title" content=")[^"]*/, `$1${attr(head.title)}`)
  .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${attr(head.title)}`)
  .replace(/(<meta property="og:description" content=")[^"]*/, `$1${attr(head.ogDesc)}`)
  .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${attr(head.ogDesc)}`)
  .replace(/(<meta property="og:image:alt" content=")[^"]*/, `$1${attr(head.ogAlt)}`)
  .replace(/assets\/img\/og-tr-1200x630\.png/g, 'assets/img/og-en-1200x630.png')
  .replace(/(href|src)="assets\//g, '$1="../assets/');

writeFileSync(root + 'en/index.html'.replace(/^/, ''), html, { flag: 'w' }, mkdirSync(root + 'en', { recursive: true }));
console.log('en/index.html written' + (missing.length ? '; no English for: ' + [...new Set(missing)].join(', ') : ''));
