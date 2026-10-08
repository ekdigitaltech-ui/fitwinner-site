/* Motion layer. The page is complete without it: the CSS default is the final state,
   and this script only animates toward it. Skipped if GSAP failed to load. */
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

  // Session → calorie target calculator. Same formula as the app's ExerciseEnergy:
  // kcal = (baseMET × RPE factor − 1) × kg × hours, RPE factor = 0.6 + 0.08 × RPE (METTable).
  var calc = document.querySelector('.calc');
  var WEIGHT = 75, REST_DAY = 1750; // rest day = BMR 1640 + job 410 − goal 300 (showcase step 1)
  var calcState = { met: 8, dur: 60, rpe: 7 };
  function paintRange(r) { r.style.setProperty('--p', ((r.value - r.min) / (r.max - r.min) * 100) + '%'); }
  function updateCalc() {
    var kcal = (calcState.met * (0.6 + 0.08 * calcState.rpe) - 1) * WEIGHT * calcState.dur / 60;
    kcal = Math.max(0, Math.round(kcal));
    document.getElementById('cx-kcal').textContent = fmt(kcal);
    document.getElementById('cx-base').textContent = fmt(REST_DAY);
    document.getElementById('cx-total').textContent = fmt(REST_DAY + kcal);
    var scale = 3500; // bar full width
    calc.querySelector('.cx-base').style.flexBasis = (REST_DAY / scale * 100) + '%';
    calc.querySelector('.cx-add').style.flexBasis = (kcal / scale * 100) + '%';
  }
  if (calc) {
    calc.querySelectorAll('.chips button').forEach(function (b) {
      b.addEventListener('click', function () {
        calc.querySelectorAll('.chips button').forEach(function (x) { x.setAttribute('aria-checked', String(x === b)); });
        calcState.met = parseFloat(b.getAttribute('data-met'));
        updateCalc();
      });
    });
    [['cx-dur', 'dur'], ['cx-rpe', 'rpe']].forEach(function (p) {
      var r = document.getElementById(p[0]), o = document.getElementById(p[0] + '-o');
      paintRange(r);
      r.addEventListener('input', function () { calcState[p[1]] = +r.value; o.textContent = r.value; paintRange(r); updateCalc(); });
    });
    updateCalc();
    document.addEventListener('fw:lang', updateCalc);
  }

  // Product decision (2026-10-08): full motion for everyone; the OS "Reduce Motion" setting is
  // not honoured. The page still works without GSAP (CSS default is the final state).
  if (!window.gsap || !window.ScrollTrigger) return;

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

  // Native scrolling (no Lenis): a smooth-scroll layer kept its own scroll position, and on
  // zoom/resize ScrollTrigger's re-measure could snap the page to the top or leave the
  // "How it works" steps measured at the wrong place. Anchor links use CSS smooth scrolling.

  function countUp(el, delay) {
    var end = +el.getAttribute('data-count');
    var o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.4, delay: delay || 0, ease: 'power3.out',
      onUpdate: function () { el.textContent = fmt(o.v); } });
  }

  /* ---- hero intro ---- */
  // Text plays on load. The phone stage has its own timeline: on a phone the stage sits below
  // the fold, so it waits until it scrolls into view (otherwise it finished before anyone saw it).
  var intro = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });
  intro.from('.hero .eyebrow', { y: 20, opacity: 0 })
    .from('.hero-title .line', { yPercent: 110, opacity: 0, stagger: 0.09, duration: 1.3 }, '-=1')
    .from('.lede, .hero-cta, .hero-facts', { y: 24, opacity: 0, stagger: 0.08 }, '-=1');

  // Desktop: the stage plays once on load. Phones (< 981px): the stage is driven by scroll
  // from the very top of the page — it builds up as you scroll down and reverses as you
  // scroll back, so it never runs unseen below the fold.
  var stageEl = document.querySelector('.hero-stage');
  var heroCounts = Array.prototype.slice.call(document.querySelectorAll('.hero [data-count]:not([data-static])'));
  var scrubStage = window.matchMedia('(max-width: 980px)').matches;
  var counter = { p: 0 };
  var stageTl = gsap.timeline({ paused: true, defaults: { ease: scrubStage ? 'none' : 'expo.out', duration: 1.2 } });
  stageTl.from('.hero-phone', { y: 120, rotateX: 18, opacity: 0, duration: 1.6 }, 0)
    .from('.float-card', { y: 60, scale: 0.85, opacity: 0, stagger: 0.12, duration: 1.2 }, 0.45)
    .from('.ring-deco', { scale: 0.6, opacity: 0, duration: 2 }, 0)
    .from('.hero .macros i, .hero .bar i', { scaleX: 0, transformOrigin: 'left', stagger: 0.06, duration: 1 }, 0.75)
    .fromTo('.hero .spark path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.75);
  // Initialise every tween now so the stage starts hidden on the very first paint
  // (a paused timeline otherwise leaves the "from" states unapplied until a later frame).
  stageTl.progress(1, true).progress(0, true);
  if (scrubStage) {
    stageTl.to(counter, { p: 1, duration: 1.4, onUpdate: function () {
      heroCounts.forEach(function (el) { el.textContent = fmt(+el.getAttribute('data-count') * counter.p); });
    } }, 0.55);
    heroCounts.forEach(function (el) { el.textContent = fmt(0); });
    ST.create({
      animation: stageTl, trigger: '.hero', start: 0, scrub: 0.6,
      // Fully built when the stage's middle reaches the middle of the screen.
      end: function () {
        var r = stageEl.getBoundingClientRect();
        return Math.max(160, r.top + window.scrollY + r.height * 0.5 - window.innerHeight * 0.5);
      }
      // No invalidateOnRefresh: it wipes the recorded "from" states, and the end function is
      // re-evaluated on every refresh anyway.
    });
  } else {
    stageTl.add(function () { heroCounts.forEach(function (el, i) { countUp(el, i * 0.08); }); }, 0.55);
    gsap.delayedCall(0.15, function () { stageTl.play(); });
  }

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

  /* ---- notifications: the cards hold still while scrolling brings them in ---- */
  var lock = document.querySelector('.lock');
  var sxGrid = document.querySelector('.sx-grid');
  if (lock && sxGrid) {
    // Like iOS: the newest notification lands on top and nudges the older ones down (the
    // markup is newest-first, so they arrive in reverse DOM order). The cards are sticky inside
    // a taller box; while they're stuck, scrolling only advances the notifications, so the page
    // doesn't move on until all of them are in. Scrolling back up plays them out in reverse.
    var clock = lock.querySelector('.lock-time');
    var notifs = gsap.utils.toArray('.lock .n').reverse(); // oldest first = arrival order
    var STEP = 0.9;
    lock.style.height = lock.offsetHeight + 'px'; // final size, measured while every notification is laid out
    var ntl = gsap.timeline({ paused: true });
    notifs.forEach(function (n, i) {
      ntl.fromTo(n, { height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, opacity: 0, scale: 0.9 },
          { height: 'auto', marginBottom: 8, paddingTop: 11, paddingBottom: 11, duration: 0.45, ease: 'power3.out' }, i * STEP)
        .to(n, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.8)' }, i * STEP + 0.15);
    });
    ntl.to({}, { duration: 0.5 }); // a beat with everything visible before the page moves on
    ntl.progress(1, true).progress(0, true);

    var hold = document.createElement('div');
    hold.className = 'sx-hold';
    sxGrid.parentNode.insertBefore(hold, sxGrid);
    hold.appendChild(sxGrid);
    var spacer = document.createElement('div');
    hold.appendChild(spacer);
    var stickTop = 0;
    function layoutHold() {
      // Stick so the bottom of the cards (where the lock screen is) stays on screen, even when
      // the cards are taller than the viewport (then the top offset goes negative).
      stickTop = Math.min(90, window.innerHeight - sxGrid.offsetHeight - 16);
      sxGrid.style.top = stickTop + 'px';
      spacer.style.height = Math.round(window.innerHeight * 0.32 * notifs.length) + 'px';
    }
    layoutHold();
    ST.addEventListener('refreshInit', layoutHold);
    function setClock() {
      var shown = notifs.filter(function (n, i) { return ntl.time() >= i * STEP + 0.1; }).length;
      clock.textContent = shown ? notifs[shown - 1].getAttribute('data-t') : '15:58';
    }
    clock.textContent = '15:58';
    ST.create({
      animation: ntl, trigger: hold, scrub: 0.4,
      start: function () { return 'top ' + stickTop + 'px'; },
      end: function () { return '+=' + spacer.offsetHeight; },
      onUpdate: setClock, onRefresh: setClock
    });
  }

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
    // Sticky, not pinned: the browser keeps .showcase-inner inside its own (tall) .showcase box,
    // so zoom/resize or a fast scroll can never leave a step stuck over another section.
    // Scroll only picks WHICH step is active; the change itself is a short, complete transition,
    // so there are no half-faded overlaps and a fast scroll can't skip past a step unseen.
    var n = steps.length;
    var showcase = document.querySelector('.showcase');
    showcase.style.setProperty('--steps', n);
    var navBtns = Array.prototype.slice.call(document.querySelectorAll('.sc-nav button'));
    var bar = document.querySelector('.sc-progress i');
    var current = -1;
    function show(i, instant) {
      if (i === current) return;
      var dir = i > current ? 1 : -1;
      current = i;
      steps.forEach(function (st, k) {
        var on = k === i;
        gsap.killTweensOf([st, screens[k]]);
        if (instant) {
          gsap.set(st, { autoAlpha: on ? 1 : 0, y: 0 });
          gsap.set(screens[k], { autoAlpha: on ? 1 : 0, scale: 1, yPercent: 0 });
        } else if (on) {
          gsap.fromTo(st, { autoAlpha: 0, y: 30 * dir }, { autoAlpha: 1, y: 0, duration: 0.55, delay: 0.12, ease: 'power3.out' });
          gsap.fromTo(screens[k], { autoAlpha: 0, scale: 1.05, yPercent: 5 * dir }, { autoAlpha: 1, scale: 1, yPercent: 0, duration: 0.6, delay: 0.08, ease: 'power3.out' });
        } else {
          gsap.to(st, { autoAlpha: 0, y: -24 * dir, duration: 0.2, ease: 'power2.in' });
          gsap.to(screens[k], { autoAlpha: 0, scale: 0.96, duration: 0.2, ease: 'power2.in' });
        }
        if (navBtns[k]) navBtns[k].classList.toggle('on', on);
      });
      enterScreen(i);
    }
    show(0, true);
    var sct = ST.create({
      trigger: showcase, start: 'top top', end: 'bottom bottom',
      onUpdate: function (self) {
        gsap.set(bar, { scaleX: self.progress });
        show(Math.min(n - 1, Math.floor(self.progress * n)));
      },
      onRefresh: function (self) { show(Math.min(n - 1, Math.floor(self.progress * n)), true); }
    });
    navBtns.forEach(function (b, k) {
      b.addEventListener('click', function () {
        var y = sct.start + (sct.end - sct.start) * (k + 0.5) / n;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  }

  /* ---- setup: the track fills with scroll, steps light up as the line reaches them ---- */
  var track = document.querySelector('.track');
  if (track) {
    var fill = document.createElement('i');
    fill.className = 'track-fill';
    track.appendChild(fill);
    var items = gsap.utils.toArray('.track li');
    gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: track, start: 'top 65%', end: 'bottom 65%', scrub: 0.4 } });
    items.forEach(function (li) {
      gsap.from(li, { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: li, start: 'top 85%', once: true } });
      ST.create({ trigger: li, start: 'top 65%', onEnter: function () { li.classList.add('on'); }, onLeaveBack: function () { li.classList.remove('on'); } });
    });
  }

  /* ---- AI card: typewriter quote, driver bars, two points, weekly note ---- */
  var aiCard = document.querySelector('.ai-card');
  if (aiCard) {
    var typed = aiCard.querySelector('.typed-text');
    function splitChars() {
      var t = typed.textContent;
      typed.innerHTML = Array.prototype.map.call(t, function (c) {
        return '<span class="ch">' + (c === '<' ? '&lt;' : c === '&' ? '&amp;' : c) + '</span>';
      }).join('');
      return typed.querySelectorAll('.ch');
    }
    var aiTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    aiTl.from(aiCard, { y: 60, opacity: 0, rotateX: 8, duration: 1 })
      .add(function () {
        var chars = splitChars();
        gsap.to(chars, { opacity: 1, duration: 0.01, stagger: 0.022, ease: 'none' });
      }, 0.4)
      .from('.drv i', { scaleX: 0, transformOrigin: 'left', stagger: 0.12, duration: 0.9 }, 0.9)
      .fromTo('.drv.hot i', { boxShadow: '0 0 0 rgba(255,55,95,0)' }, { boxShadow: '0 0 18px rgba(255,55,95,.7)', repeat: 3, yoyo: true, duration: 0.6 }, 1.6)
      .from('.pt', { y: 24, opacity: 0, scale: 0.95, stagger: 0.25, duration: 0.7 }, 2)
      .from('.ai-week', { y: 16, opacity: 0, duration: 0.7 }, 2.6);
    ST.create({ trigger: aiCard, start: 'top 75%', once: true, onEnter: function () { aiTl.play(); } });
    gsap.to('.ai-glow', { yPercent: 40, xPercent: -10, ease: 'none',
      scrollTrigger: { trigger: '.ai', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.to(aiCard, { yPercent: -8, ease: 'none',
      scrollTrigger: { trigger: '.ai', start: 'top bottom', end: 'bottom top', scrub: true } });
  }

  /* ---- coach: question chips drift with scroll, chat plays like a conversation ---- */
  gsap.utils.toArray('.cr-row').forEach(function (row) {
    var dir = +row.getAttribute('data-dir');
    var tr = row.querySelector('.cr-track');
    tr.innerHTML += tr.innerHTML;
    gsap.fromTo(tr, { xPercent: dir < 0 ? 0 : -25 }, { xPercent: dir < 0 ? -25 : 0, ease: 'none',
      scrollTrigger: { trigger: '.coach', start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
  var chat = document.querySelector('.chat');
  if (chat) {
    var b = chat.querySelectorAll('.bubble:not(.typing)');
    var typing = chat.querySelector('.typing');
    var pop = { y: 16, opacity: 0, scale: 0.9, duration: 0.5, ease: 'back.out(1.8)' };
    gsap.set(b, { opacity: 0 });
    var ctl = gsap.timeline({ paused: true });
    ctl.fromTo(b[0], pop, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)', transformOrigin: 'right bottom' })
      .add(function () { typing.style.display = 'flex'; }, '+=0.2')
      .fromTo(typing, { opacity: 0 }, { opacity: 1, duration: 0.2 })
      .add(function () { typing.style.display = 'none'; }, '+=1')
      .fromTo(b[1], pop, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)', transformOrigin: 'left bottom' })
      .from(b[1].querySelectorAll('.food-chips span'), { scale: 0, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(2)' }, '-=0.1')
      .fromTo(b[2], pop, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)', transformOrigin: 'right bottom' }, '+=0.6')
      .fromTo(b[3], pop, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)', transformOrigin: 'left bottom' }, '+=0.7')
      .from(b[3].querySelector('.mini-glass i'), { scaleY: 0, transformOrigin: 'bottom', duration: 0.9, ease: 'power2.out' }, '-=0.2');
    ST.create({ trigger: chat, start: 'top 70%', once: true, onEnter: function () { ctl.play(); } });
  }

  /* ---- bento visuals ---- */
  var meals = document.querySelector('.meals-vis');
  if (meals) {
    // Rotate the suggestion list like the in-app refresh button.
    var refreshBtn = meals.querySelector('.refresh');
    var shuffle = function () {
      var cards = meals.querySelectorAll('.mcard');
      gsap.to(refreshBtn, { rotate: '+=360', duration: 0.6, ease: 'power2.inOut' });
      gsap.to(cards, { x: 30, opacity: 0, stagger: 0.05, duration: 0.25, ease: 'power2.in' });
      gsap.delayedCall(0.45, function () {
        meals.insertBefore(cards[cards.length - 1], cards[0]);
        gsap.fromTo(meals.querySelectorAll('.mcard'), { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: 'power3.out' });
      });
    };
    var mealLoop;
    ST.create({ trigger: meals, start: 'top 90%', end: 'bottom 10%',
      onToggle: function (self) {
        if (self.isActive) { mealLoop = setInterval(shuffle, 2600); } else { clearInterval(mealLoop); }
      } });
  }
  var glassWater = document.querySelector('.glass .water');
  if (glassWater) {
    gsap.from(glassWater, { height: 0, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.glass', start: 'top 85%', once: true, onEnter: function () {
        countUp(document.querySelector('.glass [data-count]'), 0);
      } } });
    gsap.from('.drinks span', { y: 14, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'back.out(2)',
      scrollTrigger: { trigger: '.glass', start: 'top 85%', once: true } });
  }
  gsap.from('.hk', { opacity: 0, filter: 'blur(6px)', stagger: 0.12, duration: 0.6, ease: 'power2.out', // transform holds the ellipse position
    scrollTrigger: { trigger: '.health-vis', start: 'top 85%', once: true } });
  gsap.to('.hk-core', { scale: 1.12, repeat: -1, yoyo: true, duration: 0.7, ease: 'sine.inOut' });
  gsap.from('.sup', { x: -24, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: '.kb-vis', start: 'top 85%', once: true } });
  gsap.from('.stamp', { scale: 2.6, opacity: 0, rotate: -30, duration: 0.45, delay: 0.6, ease: 'power4.in',
    scrollTrigger: { trigger: '.kb-vis', start: 'top 85%', once: true } });
  gsap.from('.an', { y: -30, opacity: 0, stagger: 0.25, duration: 0.6, ease: 'back.out(1.6)',
    scrollTrigger: { trigger: '.act-vis', start: 'top 85%', once: true } });
  gsap.to('.an-act .done', { scale: 0.92, repeat: -1, repeatDelay: 1.6, yoyo: true, duration: 0.18, ease: 'power2.inOut',
    scrollTrigger: { trigger: '.act-vis', start: 'top 85%' } });
  gsap.from('.set', { x: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: '.prog-vis', start: 'top 85%', once: true } });
  gsap.from('.shield', { scale: 0.3, rotate: -20, opacity: 0, duration: 1, ease: 'elastic.out(1, .5)',
    scrollTrigger: { trigger: '.safe-vis', start: 'top 85%', once: true } });

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
