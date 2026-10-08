# fitwinner.app

FitWinner tanıtım sitesi — tek sayfa, TR + EN, statik (GitHub Pages).

- `index.html` — içerik (TR; JS olmadan da tam okunur)
- `assets/js/i18n.js` — EN metinleri; dil `?lang=en|tr` ya da tarayıcı dili, hiçbir şey saklanmaz
- `assets/js/site.js` — hareket katmanı (GSAP + ScrollTrigger + Lenis); "Hareketi azalt" açıksa çalışmaz
- `assets/vendor/` — GSAP 3.12.5, ScrollTrigger 3.12.5, Lenis 1.1.13 (kendi sunucumuzdan; dış CDN/çerez/analiz yok)

Yerel önizleme: `python3 -m http.server 8765` → http://127.0.0.1:8765/
Hareketi azalt açık bir makinede animasyonu test etmek için: `?motion=1`

Yasal sayfalar ayrı repoda: ekdigitaltech-ui/fitwinner-legal.
App Store'a çıkınca: "Yakında App Store'da" yerlerini Apple'ın resmi rozeti + uygulama bağlantısıyla değiştir.
