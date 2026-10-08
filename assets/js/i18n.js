/* TR is authored in index.html (works without JS). EN lives here.
   Language: ?lang=en|tr in the URL, otherwise the browser language. Nothing is stored. */
(function () {
  var EN = {
    'meta.title': 'FitWinner — Calories, training and recovery',
    'meta.desc': 'FitWinner calculates your daily calorie target, training plan and form score from your own data, on your device. For iPhone and Apple Watch. Coming soon to the App Store.',
    skip: 'Skip to content',
    'nav.how': 'How it works', 'nav.privacy': 'Privacy', 'nav.faq': 'FAQ',
    soon: 'Coming soon to the App Store',
    igbtn: 'Follow on Instagram',
    'hero.eyebrow': 'For iPhone and Apple Watch',
    'hero.t1': 'Calories, training', 'hero.t2': 'and recovery.', 'hero.t3': 'In one place.',
    'hero.lede': 'FitWinner calculates your daily calorie target, training plan and form score from your own data, on your device. Calculated, not guessed.',
    'hero.how': 'How it works',
    'hero.f1': 'No account', 'hero.f2': 'Works offline', 'hero.f3': 'Data stays on device',
    'hero.sample': 'Sample data',
    'm.target': 'Daily target', 'm.protein': 'Protein', 'm.carbs': 'Carbs', 'm.fat': 'Fat',
    'm.form': 'Form', 'm.good': 'good', 'm.calories': 'Calories', 'm.calendar': 'Calendar',
    'm.week': '4 sessions planned this week · match on Saturday',
    'fc.left': 'Left', 'fc.hrv': 'HRV · 7 days', 'fc.next': 'Up next', 'fc.session': 'Mobility · 30 min',
    'nav.sports': 'Sports',
    'sp.football': 'Football', 'sp.running': 'Running', 'sp.basketball': 'Basketball', 'sp.swimming': 'Swimming',
    'sp.tennis': 'Tennis', 'sp.cycling': 'Cycling', 'sp.boxing': 'Boxing', 'sp.volleyball': 'Volleyball',
    'sp.crossfit': 'CrossFit', 'sp.handball': 'Handball', 'sp.climbing': 'Climbing', 'sp.fitness': 'Gym',
    'sp.yoga': 'Yoga', 'sp.hiit': 'HIIT', 'sp.rowing': 'Rowing', 'sp.pilates': 'Pilates',
    'sp.martial': 'Martial arts', 'sp.hiking': 'Hiking', 'sp.dance': 'Dance', 'sp.badminton': 'Badminton',
    'sp.skiing': 'Skiing', 'sp.mobility': 'Mobility',
    'sx.eyebrow': 'From football to yoga',
    'sx.title': 'Every session shows up in your daily target.',
    'sx.lede': 'Every workout you do or plan, from football to yoga, is added to that day\u2019s calorie target, and every session gets a timely notification.',
    'cx.t': 'Session \u2192 calorie target',
    'cx.p': 'Sport, duration and effort (RPE) set the session\u2019s energy. If Apple Watch heart rate is available the calculation uses it, and calories the watch already measured are never counted twice.',
    'cx.sport': 'Sport', 'cx.dur': 'Duration', 'cx.min': 'min', 'cx.rpe': 'Effort (RPE)',
    'cx.session': 'This session', 'cx.base': 'Rest-day target', 'cx.today': 'Today\u2019s target',
    'cx.note': 'Example: 75 kg. Session energy = (MET \u00d7 effort factor \u2212 1) \u00d7 weight \u00d7 hours.',
    'nx.t': 'A notification for every session',
    'nx.p': 'With notifications on, you choose how early the session reminder arrives: 30, 60, 90 or 120 minutes. Meal reminders around your training time, carb loading on match eve and electrolyte reminders on hot days are set too. Skipped sessions get no notification, and the schedule is rebuilt whenever the plan changes.',
    'nx.day': 'Friday',
    'nx.1t': 'Pre-training meal', 'nx.1p': 'Prep session at 18:00. A good time for a light meal.',
    'nx.3t': 'Session in 1 hour', 'nx.3p': 'Prep · light · 30 min',
    'nx.4t': 'Recovery meal', 'nx.4p': 'Session done. Recover with protein and carbs.',
    'nx.5t': 'Match tomorrow', 'nx.5p': 'Match eve: a carb-loading meal this evening.',
    'nx.note': 'Sample notifications. All of them are scheduled locally on your phone; nothing is pushed from a server.',
    'how.eyebrow': 'How it works', 'how.title': 'Every number knows where it came from.',
    's1.t': 'Calories that fit your day',
    's1.p': 'Your target is calculated from your age, weight, job and training load. Active calories and workouts from Apple Watch are added automatically. You can see the calculation line by line.',
    's2.nav': 'Food log', 's3.nav': 'Form score', 's4.nav': 'Weekly plan',
    's1.scr': 'Energy breakdown', 's1.bmr': 'Basal metabolism', 's1.job': 'Job and daily movement', 's1.train': 'Planned training', 's1.goal': 'Goal adjustment',
    's2.t': 'Food logging that knows Turkish cuisine',
    's2.p': 'Search thousands of local and international foods and pick a portion. Add a recipe’s ingredients and the totals come from the database. Estimated values are marked as estimated.',
    's2.scr': 'Today', 's2.q': 'lentil', 's2.p1': '1 bowl · 250 g', 's2.p2': '4 pieces · 120 g', 's2.p3': '1 serving · 150 g', 's2.p4': '1 glass · 200 ml',
    's3.t': 'Recovery and form score',
    's3.p': 'Your sleep, fatigue and soreness check-in, plus resting heart rate and HRV if Apple Watch is connected. Every day, a form score against your own 28-day baseline. When recovery drops, you get a suggestion to reduce volume.',
    's3.band': 'Good · steady', 's3.c1': 'Sleep', 's3.c2': 'Fatigue', 's3.c3': 'Soreness',
    's4.t': 'A weekly plan, ready for match day',
    's4.p': 'Training calendar, weekly plan and load tracking. The run-up to a match or race is marked. Food suggestions follow the day’s training and your remaining calories.',
    's4.scr': 'This week', 's4.d1': 'Mon', 's4.d2': 'Tue', 's4.d3': 'Wed', 's4.d4': 'Thu', 's4.d5': 'Fri', 's4.d6': 'Sat',
    's4.x1': 'Strength', 's4.x2': 'Sport-specific', 's4.x3': 'Active recovery', 's4.x4': 'Plyometric', 's4.x5': 'Taper · light', 's4.x6': 'Match',
    'su.eyebrow': 'Quick setup', 'su.title': 'Eight short steps. No account.',
    'su.lede': 'What you enter during setup goes into every line of your target. At the end, the summary screen shows how your target was calculated.',
    'su.1t': 'Basics', 'su.1p': 'Birth year and biological sex. The app is for people 18 and over.',
    'su.2t': 'Privacy and consent', 'su.2p': 'Accept the terms; separate, optional consents for health data and AI. Change any of them later in Profile.',
    'su.3t': 'Body', 'su.3p': 'Height and weight, in kg/cm or lb/ft-in.',
    'su.4t': 'Goal', 'su.4p': 'Fat loss, maintenance, muscle gain, performance or general health. Weight loss is capped at 1% a week.',
    'su.5t': 'Job', 'su.5p': 'Your working days and hours. Desk, field or construction site; your job is added to your daily energy.',
    'su.6t': 'Training', 'su.6p': 'Your sports, sessions per week and duration. Your weekly plan is built from this.',
    'su.7t': 'Food and health', 'su.7p': 'Foods you avoid and an optional health screening.',
    'su.8t': 'Summary', 'su.8p': 'Your daily target with a line-by-line breakdown.',
    'ai.eyebrow': 'AI analysis', 'ai.title': 'Commentary in two points: what affects it, what to do.',
    'ai.lede': 'Every commentary says what affects your form most and gives one focus for the next 1–3 days. In the Calendar, “How your week is going” sums up your week the same way.',
    'ai.l1': 'It doesn’t calculate numbers; it interprets the score and plan from your device.',
    'ai.l2': 'Form commentary, plan rationale and nutrition estimates for foods that aren’t in the database.',
    'ai.l3': 'Every output passes a safety review before it reaches you; if a medical topic comes up, it refers you to a doctor.',
    'ai.free': 'On-device commentary · free', 'ai.pro': 'Detailed AI commentary · optional, Premium',
    'ai.card': 'AI commentary', 'ai.load': 'Training load',
    'ai.sample': 'Your sleep has been below your normal for three days — make room for recovery before adding load.',
    'ai.p1t': 'What affects it?', 'ai.p1v': 'Sleep — the biggest driver',
    'ai.p2t': 'What to do?', 'ai.p2v': 'Next 1–3 days: mobility, lower volume',
    'ai.week': 'How your week is going', 'ai.weekSample': 'This week has 3 sessions and 1 light day; the load eases before Saturday’s match.',
    'ch.1': 'How many calories do I have left today?', 'ch.2': 'How’s my form, should I train today?', 'ch.3': 'What’s my next session?',
    'ch.4': 'How much water have I had today?', 'ch.5': 'How is my week going?', 'ch.6': 'What should I eat now?', 'ch.7': 'How did I sleep?',
    'ch.8': 'How are my macros today?', 'ch.9': 'How is my weight trending?', 'ch.10': 'Which supplements suit me?',
    'co.card': 'Coach', 'co.where': 'Home ▸ top right', 'co.eyebrow': 'Coach', 'co.title': 'Stuck? Ask the Coach.',
    'co.lede': 'The Coach sums up your day and answers your questions with your own data. You can add water and food without leaving the chat. Answers are created on your device.',
    'co.reply': 'Here are a few foods that fit today’s training; tap one to choose a portion.',
    'co.f2': 'Chicken skewers', 'co.f3': 'Oats', 'co.q2': 'Add 250 ml water', 'co.r2': 'Added. 1,750 ml today, 70% of your target.',
    'mo.eyebrow': 'And more', 'mo.title': 'The rest of your day, covered.',
    'mo.m.t': 'Meal ideas for your goal', 'mo.meal3': 'Oats with yogurt',
    'mo.m.p': 'Suggestions follow your training and the calories you have left. They’re picked from the food database, never from foods you avoid. Refresh for a new list.',
    'mo.f.t': 'Fluid tracking', 'mo.d1': 'Water', 'mo.d2': 'Tea', 'mo.d3': 'Coffee', 'mo.d4': 'Ayran',
    'mo.f.p': 'Water, tea, coffee, mineral water and caloric drinks. Ayran, milk or juice is written to your food log too.',
    'mo.h.t': 'Works with Apple Health', 'mo.h1': 'Workouts', 'mo.h2': 'Steps & active energy', 'mo.h4': 'Heart rate & HRV', 'mo.h5': 'Weight',
    'mo.h.p': 'If you allow it, your workouts, steps, sleep, heart rate and weight come in automatically. Read-only; you choose each data type to share.',
    'mo.k.t': 'Supplements, with the evidence', 'mo.k1': 'Creatine', 'mo.ev1': 'Strong evidence', 'mo.ev2': 'Moderate evidence', 'mo.no': 'Not needed',
    'mo.k.p': 'Each supplement comes with its evidence level: see what helps your goal and what you don’t need. Anything that doesn’t suit your health profile is never suggested.',
    'mo.a.t': 'Tap “Done” in the notification', 'mo.n1': 'Football in 1 hour', 'mo.n1b': 'Eat something light and drink water.',
    'mo.done': 'Done', 'mo.snooze': 'Snooze', 'mo.n2': 'Weigh-in time', 'mo.n2b': 'In the morning, before breakfast.',
    'mo.a.p': 'Tap “Done” on a session reminder and the session is logged and your target updates; “Snooze” moves it later. Weigh-in reminders follow your plan too.',
    'mo.p.t': 'Your own programs', 'mo.p3': 'Pull-up',
    'mo.p.p': 'Build your own training programs with sets and reps, adding exercises quickly from the exercise database.',
    'mo.s.t': 'Health screening, free in every version',
    'mo.s.p': 'It never diagnoses. Your answers only narrow your goals in the safe direction; for example, no calorie deficit during pregnancy, and it points you to a specialist when needed.',
    'pv.eyebrow': 'Privacy comes first',
    'pv.title': 'The math happens on your device. No internet needed. Raw health data never leaves your phone.',
    'pv.a.t': 'No account', 'pv.a.p': 'You don’t need an account to use the app. Your data is kept on your device.',
    'pv.b.t': 'Deterministic core', 'pv.b.p': 'Calorie target, macros and form score come from calculation engines on your device. Same input, same result, every time.',
    'pv.c.t': 'AI only with permission', 'pv.c.p': 'Commentary is generated from an anonymous summary, and only if you allow it. Withdraw permission any time and the commentary made from that data is deleted too.',
    'faq.eyebrow': 'Frequently asked', 'faq.title': 'In short.',
    q1: 'When does it launch?', a1: 'FitWinner is in closed beta testing right now. We’ll announce it on this page when it reaches the App Store.',
    q2: 'Do I need an Apple Watch?', a2: 'No. Calories, food logging and the training plan work without a watch. Connect Apple Watch or Apple Health and resting heart rate, HRV and sleep feed into your form score.',
    q3: 'What does the AI do?', a3: 'Only if you allow it, it writes short commentary on your form score and plan. It doesn’t calculate the numbers; calorie target, macros and form score come from on-device calculations.',
    q4: 'Is it medical advice?', a4: 'No. FitWinner is for people 18 and over. It isn’t a medical device and doesn’t diagnose or treat. If you have a health condition, talk to your doctor about your goals.',
    q5: 'Which languages are supported?', a5: 'The app is available in 11 languages: Turkish, English, French, Dutch, Spanish, Italian, Portuguese, Polish, Greek, Czech and Estonian. This site is in Turkish and English.',
    'cl.title': 'Rely on your own data, not guesses.',
    'ft.legal': 'Legal', 'ft.privacy': 'Privacy Policy', 'ft.terms': 'Terms of Use', 'ft.kvkk': 'KVKK Notice', 'ft.contact': 'Contact',
    'ft.tm': 'Apple, iPhone, Apple Watch and App Store are trademarks of Apple Inc., registered in the U.S. and other countries. This site uses no cookies or analytics.'
  };

  var TR = {}; // captured from the DOM on first run
  var current = 'tr';

  function nodes() { return document.querySelectorAll('[data-i18n]'); }

  function capture() {
    nodes().forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in TR)) TR[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var p = el.getAttribute('data-i18n-attr').split(':');
      TR[p[1]] = el.getAttribute(p[0]);
    });
    TR['meta.title'] = document.title;
    TR['meta.desc'] = document.querySelector('meta[name="description"]').content;
  }

  function apply(lang) {
    var dict = lang === 'en' ? EN : TR;
    current = lang;
    document.documentElement.lang = lang;
    nodes().forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v == null) return;
      // Number nodes keep their own text; only the label around them changes.
      if (el.hasAttribute('data-count')) return;
      el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var p = el.getAttribute('data-i18n-attr').split(':');
      if (dict[p[1]] != null) el.setAttribute(p[0], dict[p[1]]);
    });
    document.title = dict['meta.title'];
    document.querySelector('meta[name="description"]').content = dict['meta.desc'];
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.dispatchEvent(new CustomEvent('fw:lang', { detail: lang }));
  }

  function initial() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'tr') return q;
    var langs = navigator.languages || [navigator.language || 'tr'];
    return /^tr\b/i.test(langs[0] || '') ? 'tr' : 'en';
  }

  window.FWI18n = {
    lang: function () { return current; },
    set: function (lang) {
      apply(lang);
      var url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }
  };

  capture();
  var start = initial();
  if (start !== 'tr') apply(start);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { window.FWI18n.set(b.getAttribute('data-lang')); });
  });
})();
