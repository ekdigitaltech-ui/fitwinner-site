# fitwinner.app

FitWinner tanıtım sitesi — tek sayfa, TR + EN, statik (GitHub Pages).

- `index.html` — içerik (TR; JS olmadan da tam okunur)
- `assets/js/i18n.js` — EN metinleri; dil `?lang=en|tr` ya da tarayıcı dili, hiçbir şey saklanmaz
- `assets/js/site.js` — hareket katmanı (GSAP + ScrollTrigger; yumuşak kaydırma kütüphanesi yok, yerel kaydırma); ürün kararıyla (2026-10-08) "Hareketi azalt" ayarı yok sayılır, herkes tam animasyonu görür
- `assets/vendor/` — GSAP 3.12.5, ScrollTrigger 3.12.5 (kendi sunucumuzdan; dış CDN/çerez/analiz yok)

Yerel önizleme: `python3 -m http.server 8765` → http://127.0.0.1:8765/

Yasal sayfalar ayrı repoda: ekdigitaltech-ui/fitwinner-legal.
App Store'a çıkınca: "Yakında App Store'da" yerlerini Apple'ın resmi rozeti + uygulama bağlantısıyla değiştir.

## İngilizce sayfa (/en/)
`en/index.html` elle düzenlenmez; `index.html` ya da `assets/js/i18n.js` değişince yeniden üret:
`node tools/build-en.mjs`. Sayfa İngilizce metni HTML'de taşır (önizleme botları JS çalıştırmaz)
ve `assets/img/og-en-1200x630.jpg` paylaşım görselini kullanır. İngilizce paylaşımlarda https://fitwinner.app/en/ linkini kullan.

## Ölçüm
Yok. Google Analytics ve Meta Pixel 22 Kasım 2026'da kaldırıldı (veri sorumlusu kararı); site çerez koymaz,
üçüncü taraf betiği yüklemez, çerez şeridi yoktur. `assets/js/site.js` başındaki blok, eski sürümün izin vermiş
ziyaretçide bıraktığı tercih kaydını ve izleyici çerezlerini siler. Yeniden ölçüm eklenmeden önce yasal metinler
ve işleme kaydı güncellenir.

## Paylaşım görselleri
Kaynak `tools/og/og-tr.html`, `og-en.html` (+ `og.css`). Yeniden üretmek: `sh tools/og/render.sh <yeni-ek>`;
dosya adı her seferinde değişmeli (önizleme önbellekleri ada bakar), sonra index.html'deki etiketleri
güncelle; tools/build-en.mjs eki kendisi yakalar. Apple logosu kullanılmaz (yalnız resmi rozette serbest).

## SEO / AI görünürlük dosyaları

- `robots.txt` (tüm botlara açık + Sitemap satırı), `sitemap.xml` (TR + /en/, hreflang), `llms.txt` (olgu özeti, EN+TR), `404.html` (noindex).
- schema.org JSON-LD (`<script id="ld">`: Organization, WebSite, MobileApplication, WebPage, FAQPage) `node tools/build-en.mjs` tarafından **iki sayfaya da** sayfadaki görünür SSS ve meta metinlerinden yazılır — elle düzenleme.
- İçerik değişince: `sitemap.xml` içindeki `lastmod` tarihini güncelle; uygulama özellikleri/fiyat/yayın durumu değişince `llms.txt`'i güncelle (yalnız doğru bilgi).
- App Store'a çıkınca: JSON-LD'ye App Store bağlantısı (`sameAs`/`installUrl`), `<meta name="apple-itunes-app" content="app-id=…">`, llms.txt'te durum.
- DNS Cloudflare'de (proxied). Cloudflare "Managed robots.txt" açıksa bu dosyanın başına içerik sinyali yorumları ekler.
