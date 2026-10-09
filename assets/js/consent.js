/* Consent-gated measurement: Google Analytics 4 and Meta Pixel load ONLY after the visitor
   taps "Accept" in the cookie bar (KVKK / GDPR opt-in). Reject or no answer = nothing loads.
   The choice is kept in localStorage (strictly necessary) and can be changed from the footer. */
(function () {
  var GA_ID = 'G-VB3XJQ3CNX';
  var PIXEL_ID = '2312794102811584';
  var KEY = 'fw-consent'; // 'granted' | 'denied'

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function loadTrackers() {
    if (loaded) return;
    loaded = true;

    // Google Analytics 4 (Consent Mode v2: everything granted, because the visitor said yes)
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
    gtag('js', new Date());
    gtag('config', GA_ID);
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(g);

    // Meta Pixel (official snippet, without the <noscript> image that would fire without consent)
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');
  }

  // Site events -> both tools (no-ops until consent).
  function track(name, params) {
    if (!loaded) return;
    if (window.gtag) gtag('event', name, params || {});
    if (window.fbq) fbq('trackCustom', name, params || {});
  }
  window.FWTrack = track;

  var bar = document.getElementById('consent');
  function show() { bar.hidden = false; requestAnimationFrame(function () { bar.classList.add('on'); }); }
  function hide() { bar.classList.remove('on'); setTimeout(function () { bar.hidden = true; }, 250); }

  bar.querySelector('[data-consent="accept"]').addEventListener('click', function () { write('granted'); hide(); loadTrackers(); });
  bar.querySelector('[data-consent="reject"]').addEventListener('click', function () {
    var was = read(); write('denied'); hide();
    if (was === 'granted') location.reload(); // trackers already running: reload so nothing stays loaded
  });
  document.querySelectorAll('[data-consent-open]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); show(); });
  });

  var state = read();
  if (state === 'granted') loadTrackers();
  else if (state !== 'denied') show();

  // What we measure: interest in the app, Instagram, language choice.
  document.addEventListener('click', function (e) {
    var t = e.target.closest('a, button, .btn');
    if (!t) return;
    if (t.matches('.btn-primary, .pill-soon')) track('app_store_interest', { location: t.closest('.closer') ? 'closer' : 'hero' });
    else if (t.matches('a[href*="instagram.com"]')) track('instagram_click', { location: t.closest('.nav') ? 'nav' : t.closest('.foot') ? 'footer' : t.closest('.closer') ? 'closer' : 'hero' });
    else if (t.matches('.lang button')) track('language_switch', { to: t.getAttribute('data-lang') });
  });
})();
