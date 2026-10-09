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

## Ölçüm (GA4 + Meta Pixel)
`assets/js/consent.js`: GA4 `G-VB3XJQ3CNX` ve Meta Pixel `2312794102811584` YALNIZ çerez şeridinde
"Kabul et" sonrası yüklenir (KVKK/GDPR açık rıza). Tercih `localStorage['fw-consent']`; alt bilgideki
"Çerez tercihleri" şeridi yeniden açar. Olaylar: `app_store_interest`, `instagram_click`, `language_switch`
(GA4 event + Meta trackCustom). Pixel'in `<noscript>` görseli bilerek yok (rızasız istek atar).
