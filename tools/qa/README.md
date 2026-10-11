# Düzen taraması

`layout-check.js`, sayfayı bir iframe içinde açıp `FW_LAYOUT_CHECK(doc, win)` ile şunları denetler:
yatay taşma, başlığın telefon görseline binmesi, yan kartların telefondaki verileri ya da giriş
metnini kapatması, "Nasıl çalışır" sütununun ekrana sığması, bildirim kartları yapışıkken kilit
ekranının menünün altında kalması, kart içi görsellerin taşması, tek satırlık etiketlerin sığmaması.

Kullanım (yerel sunucu `python3 -m http.server 8765` açıkken, aynı kökenden bir sayfanın konsolunda):
iframe'i `width`/`height` niteliği VE `min-height` ile oluşturun (yoksa yükseklik 150 px'e düşer ve
"viewport 150" diye sahte uyarılar çıkar), yüklenince `win.eval(src)` ile betiği verin, kaydırmaya bağlı
olmayan animasyonları `gsap.globalTimeline.getChildren(true,true,false).forEach(t => !t.scrollTrigger && t.progress(1))`
ile bitirin ve `FW_LAYOUT_CHECK` sonucunu okuyun. Denenen boyutlar: 320×568 … 2000×1150 (16 boyut, TR + EN).
