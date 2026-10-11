// Generates en/index.html from index.html: English text baked into the HTML (crawlers and
// link-preview bots don't run JS), English meta/OG tags and the og-en-1200x630-*.jpg preview image, and asset paths one
// level up. Run after editing index.html or assets/js/i18n.js:  node tools/build-en.mjs
// Also (re)writes the schema.org JSON-LD block in BOTH index.html and en/index.html from the visible FAQ
// and meta text, so structured data always matches what the page shows.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('..', import.meta.url).pathname;
let html = readFileSync(root + 'index.html', 'utf8');
const js = readFileSync(root + 'assets/js/i18n.js', 'utf8');
const EN = vm.runInNewContext('(' + js.slice(js.indexOf('var EN = {') + 'var EN = '.length, js.indexOf('};', js.indexOf('var EN = {')) + 1) + ')');

// --- schema.org JSON-LD (only facts visible on the page) ---
const unent = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const metaOf = (h, re) => unent((h.match(re) || [])[1] || '');
function ld(lang, pageUrl, title, desc, faq) {
  const site = 'https://fitwinner.app/';
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': site + '#org', name: 'EK Digital Technologies OÜ', email: 'enis@ekdigital.tech' },
      { '@type': 'WebSite', '@id': site + '#website', url: site, name: 'FitWinner', inLanguage: ['tr', 'en'], publisher: { '@id': site + '#org' } },
      { '@type': 'MobileApplication', '@id': site + '#app', name: 'FitWinner', url: pageUrl, description: desc,
        operatingSystem: 'iOS', applicationCategory: 'HealthApplication', availableOnDevice: ['iPhone', 'Apple Watch'],
        image: site + 'assets/img/icon-512.png', sameAs: ['https://www.instagram.com/fitwinner.app/'],
        offers: { '@type': 'Offer', price: '0', priceCurrency: lang === 'tr' ? 'TRY' : 'USD' },
        publisher: { '@id': site + '#org' } },
      { '@type': 'WebPage', '@id': pageUrl + '#page', url: pageUrl, name: title, inLanguage: lang,
        isPartOf: { '@id': site + '#website' }, about: { '@id': site + '#app' } },
      { '@type': 'FAQPage', '@id': pageUrl + '#faq', inLanguage: lang, isPartOf: { '@id': pageUrl + '#page' },
        mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
  return '<script type="application/ld+json" id="ld">' + JSON.stringify(data).replace(/</g, '\\u003c') + '</script>';
}
const putLd = (h, block) => h.includes('id="ld"')
  ? h.replace(/<script type="application\/ld\+json" id="ld">[\s\S]*?<\/script>/, () => block)
  : h.replace('</head>', block + '\n</head>');
const faqKeys = [...html.matchAll(/<summary data-i18n="(q\d+)">/g)].map(m => m[1]);
const faqTR = faqKeys.map(q => {
  const a = 'a' + q.slice(1);
  const qt = html.match(new RegExp('data-i18n="' + q + '">([^<]*)<'))[1];
  const at = html.match(new RegExp('data-i18n="' + a + '">([^<]*)<'))[1];
  return [unent(qt), unent(at)];
});
const faqEN = faqKeys.map(q => [EN[q], EN['a' + q.slice(1)]]);
html = putLd(html, ld('tr', 'https://fitwinner.app/', metaOf(html, /<title>([^<]*)</), metaOf(html, /<meta name="description" content="([^"]*)"/), faqTR));
writeFileSync(root + 'index.html', html);

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
  ogDesc: 'Your daily calorie target, training plan and form score are calculated right on your phone, based on what you share during setup and your daily logs. If you\'d like, the AI interprets the results for you in plain language.',
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
  .replace(/assets\/img\/og-tr-(1200x630[\w-]*\.jpg)/g, 'assets/img/og-en-$1') // any suffix: og-tr-…-c.jpg -> og-en-…-c.jpg
  .replace(/(href|src)="assets\//g, '$1="../assets/');

html = putLd(html, ld('en', 'https://fitwinner.app/en/', head.title, head.desc, faqEN));
writeFileSync(root + 'en/index.html'.replace(/^/, ''), html, { flag: 'w' }, mkdirSync(root + 'en', { recursive: true }));
console.log('en/index.html written' + (missing.length ? '; no English for: ' + [...new Set(missing)].join(', ') : ''));
