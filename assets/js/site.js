/* Motion layer. The page is complete without it: the CSS default is the final state,
   and this script only animates toward it. Skipped entirely under reduced motion
   or if GSAP failed to load. */
(function () {
  var html = document.documentElement;
  var nav = document.querySelector('.nav');

  function lang() { return window.FWI18n ? window.FWI18n.lang() : 'tr'; }
  function fmt(n) { return Math.round(n).toLocaleString(lang() === 'en' ? 'en-US' : 'tr-TR'); }

  // Numbers follow the page language even without motion.
  function formatAll() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = fmt(+el.getAttribute('data-count'));
    });
  }
  document.addEventListener('fw:lang', function () {
    formatAll();
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
  formatAll();

  // Nav background after first scroll — cheap, works without GSAP.
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ?motion=1 forces motion for testing on machines with Reduce Motion turned on.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches && !/[?&]motion=1\b/.test(location.search);
  if (reduce || !window.gsap || !window.ScrollTrigger) return;

  var gsap = window.gsap, ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);

  // Desktop pins the showcase and swaps screens inside one phone; small screens keep
  // the card layout (a pinned phone doesn't fit short viewports). Decided once at load.
  var pinned = window.matchMedia('(min-width: 981px)').matches;
  var screensHost = document.querySelector('.sc-screens');
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  if (pinned) {
    steps.forEach(function (s) {
      var scr = s.querySelector('.mini-phone .scr');
      if (scr) screensHost.appendChild(scr);
    });
    html.classList.add('pinned');
  }
  html.classList.add('motion');

  // Smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
  var lenis = null;
  if (window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        var target = id === '#top' ? 0 : document.querySelector(id);
        if (target === null) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: id === '#how' ? -10 : -70, duration: 1.4 });
      });
    });
  }

  function countUp(el, delay) {
    var end = +el.getAttribute('data-count');
    var o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.4, delay: delay || 0, ease: 'power3.out',
      onUpdate: function () { el.textContent = fmt(o.v); } });
  }

  /* ---- hero intro ---- */
  var intro = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });
  intro.from('.hero .eyebrow', { y: 20, opacity: 0 })
    .from('.hero-title .line', { yPercent: 110, opacity: 0, stagger: 0.09, duration: 1.3 }, '-=1')
    .from('.lede, .hero-cta, .hero-facts', { y: 24, opacity: 0, stagger: 0.08 }, '-=1')
    .from('.hero-phone', { y: 120, rotateX: 18, opacity: 0, duration: 1.6 }, 0.15)
    .from('.float-card', { y: 60, scale: 0.85, opacity: 0, stagger: 0.12, duration: 1.2 }, 0.6)
    .from('.ring-deco', { scale: 0.6, opacity: 0, duration: 2 }, 0.1)
    .add(function () {
      document.querySelectorAll('.hero [data-count]:not([data-static])').forEach(function (el, i) { countUp(el, i * 0.08); });
    }, 0.7)
    .from('.hero .macros i, .hero .bar i', { scaleX: 0, transformOrigin: 'left', stagger: 0.06, duration: 1 }, 0.9)
    .fromTo('.hero .spark path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.9);

  /* ---- hero parallax: scroll depth ---- */
  gsap.utils.toArray('.hero [data-depth]').forEach(function (el) {
    var d = parseFloat(el.getAttribute('data-depth'));
    gsap.to(el, { yPercent: -d * 160, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  });
  gsap.to('.hero-copy', { y: -80, opacity: 0.2, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.aurora:not(.small)', { yPercent: 30, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* ---- hero parallax: pointer tilt (fine pointers only) ---- */
  if (window.matchMedia('(pointer: fine)').matches) {
    var stage = document.querySelector('.stage-tilt');
    var rx = gsap.quickTo(stage, 'rotationX', { duration: 0.8, ease: 'power3' });
    var ry = gsap.quickTo(stage, 'rotationY', { duration: 0.8, ease: 'power3' });
    var layers = gsap.utils.toArray('.stage-tilt [data-depth]').map(function (el) {
      return { d: parseFloat(el.getAttribute('data-depth')),
        x: gsap.quickTo(el, 'x', { duration: 1, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 1, ease: 'power3' }) };
    });
    document.querySelector('.hero').addEventListener('pointermove', function (e) {
      var px = e.clientX / window.innerWidth - 0.5, py = e.clientY / window.innerHeight - 0.5;
      rx(-py * 8); ry(px * 10);
      layers.forEach(function (l) { l.x(px * l.d * 90); l.y(py * l.d * 60); });
    });
  }

  /* ---- marquee: scroll-linked horizontal drift ---- */
  gsap.utils.toArray('.mq-row').forEach(function (row) {
    var dir = +row.getAttribute('data-dir');
    var track = row.querySelector('.mq-track');
    track.innerHTML += track.innerHTML; // seamless length
    gsap.fromTo(track, { xPercent: dir < 0 ? 0 : -30 }, { xPercent: dir < 0 ? -30 : 0, ease: 'none',
      scrollTrigger: { trigger: '.marquee', start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });

  /* ---- generic reveals ---- */
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  /* ---- pinned showcase ---- */
  var screens = steps.map(function (s, i) { return pinned ? screensHost.children[i] : s.querySelector('.scr'); });
  var counted = [];
  function enterScreen(i) {
    if (counted[i]) return;
    counted[i] = true;
    var s = screens[i];
    s.querySelectorAll('[data-count]').forEach(function (el, k) { countUp(el, 0.1 + k * 0.08); });
    gsap.from(s.querySelectorAll('.r, .d, .comp div, .search, .scr-title'), { y: 18, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out' });
    gsap.fromTo(s.querySelectorAll('.d-fg'), { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power3.out' });
  }

  if (!pinned) {
    steps.forEach(function (step, i) {
      var scr = step.querySelector('.scr');
      gsap.from(step, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: step, start: 'top 85%', once: true } });
      ST.create({ trigger: scr, start: 'top 80%', once: true, onEnter: function () { enterScreen(i); } });
    });
  } else {
    var n = steps.length;
    var tl = gsap.timeline({
      defaults: { ease: 'power2.inOut', duration: 0.5 },
      scrollTrigger: {
        trigger: '.showcase', start: 'top top', end: '+=' + (n * 85) + '%', pin: true, scrub: 0.8,
        anticipatePin: 1,
        onUpdate: function (self) {
          var i = Math.min(n - 1, Math.floor(self.progress * n + 0.15));
          enterScreen(i);
        },
        onEnter: function () { enterScreen(0); }
      }
    });
    tl.to('.sc-progress i', { scaleX: 1, ease: 'none', duration: n }, 0);
    for (var i = 1; i < n; i++) {
      var at = i - 0.25;
      tl.to(steps[i - 1], { autoAlpha: 0, y: -40 }, at)
        .fromTo(steps[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, immediateRender: false }, at + 0.15)
        .to(screens[i - 1], { autoAlpha: 0, scale: 0.94, yPercent: -6 }, at)
        .fromTo(screens[i], { autoAlpha: 0, scale: 1.06, yPercent: 6 }, { autoAlpha: 1, scale: 1, yPercent: 0, immediateRender: false }, at + 0.1);
    }
    tl.to({}, { duration: 0.4 }); // hold on the last step
  }

  /* ---- privacy: word-by-word statement + orbit parallax ---- */
  var statement = document.querySelector('[data-words]');
  var wordTween;
  function splitWords() {
    var text = statement.textContent;
    statement.setAttribute('aria-label', text);
    statement.innerHTML = text.split(/\s+/).map(function (w) {
      return '<span class="wd" aria-hidden="true">' + w.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }) + '</span>';
    }).join(' ');
    if (wordTween) { wordTween.scrollTrigger.kill(); wordTween.kill(); }
    wordTween = gsap.fromTo(statement.querySelectorAll('.wd'), { opacity: 0.15 }, { opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: statement, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  }
  splitWords();
  document.addEventListener('fw:lang', function () {
    // i18n.js rewrote textContent; re-split so the word animation keeps working.
    splitWords();
  });
  gsap.to('.orbit', { yPercent: -25, rotate: 20, ease: 'none',
    scrollTrigger: { trigger: '.privacy', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.o-core', { scale: 0.5, opacity: 0, duration: 1.2, ease: 'back.out(1.6)',
    scrollTrigger: { trigger: '.privacy', start: 'top 70%', once: true } });

  /* ---- closer ---- */
  gsap.from('.closer-icon', { y: 60, rotate: -12, scale: 0.8, duration: 1.4, ease: 'expo.out',
    scrollTrigger: { trigger: '.closer', start: 'top 75%', once: true } });

  window.addEventListener('load', function () { ST.refresh(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
