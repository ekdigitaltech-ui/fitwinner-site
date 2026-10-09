/* TR is authored in index.html (works without JS). EN lives here.
   Language: ?lang=en|tr in the URL, otherwise the browser language. Nothing is stored. */
(function () {
  var EN = {
    'meta.title': 'FitWinner — Calories, training and recovery',
    'meta.desc': 'FitWinner works out your daily calorie target, training plan and form score from your own data, right on your phone. For iPhone and Apple Watch. Coming soon to the App Store.',
    skip: 'Skip to content',
    'nav.how': 'How it works', 'nav.privacy': 'Privacy', 'nav.faq': 'FAQ',
    soon: 'Coming soon to the App Store',
    igbtn: 'Follow on Instagram',
    'hero.eyebrow': 'For iPhone and Apple Watch',
    'hero.t1': 'Calories, training,', 'hero.t2': 'recovery.', 'hero.t3': 'One app,', 'hero.t4': 'with AI insights.',
    'hero.lede': 'FitWinner works out your daily calorie target, training plan and form score from your own data, right on your phone. No guesswork, just science-based calculations. Want more? Let the AI tell you what to do next.',
    'hero.how': 'How it works',
    'hero.f1': 'No account needed', 'hero.f2': 'Works offline', 'hero.f3': 'Your data stays on your phone',
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
    'sx.title': 'Every workout counts.',
    'sx.lede': 'Football, running or yoga, it\'s all the same: every workout you do or plan goes into that day\'s calorie target. And you get a heads-up before each one, so nothing slips your mind.',
    'cx.t': 'Workout → calorie target',
    'cx.p': 'What you do, for how long and how hard you go decides how many calories you burn. If your Apple Watch tracked your heart rate, we use that, and calories your watch already counted never get counted twice.',
    'cx.sport': 'Sport', 'cx.dur': 'Duration', 'cx.min': 'min', 'cx.rpe': 'Effort',
    'cx.session': 'This workout', 'cx.base': 'Rest-day target', 'cx.today': 'Today\u2019s target',
    'cx.note': 'Example: someone who weighs 75 kg. Formula: (MET × effort factor − 1) × weight × hours.',
    'nx.t': 'A heads-up before every workout',
    'nx.p': 'Turn notifications on and pick how early you want the heads-up: 30, 60, 90 or 120 minutes before. It also tells you when to eat, nudges you to load up on carbs the night before a match and reminds you about electrolytes on hot days. Skip a workout and it won\'t bug you; change your plan and the reminders sort themselves out.',
    'nx.day': 'Friday',
    'nx.1t': 'Pre-training meal', 'nx.1p': 'Prep session at 18:00. Perfect time for a light snack.',
    'nx.3t': 'Session in 1 hour', 'nx.3p': 'Prep · light · 30 min',
    'nx.4t': 'Recovery meal', 'nx.4p': 'Workout done, nice job. Refuel with some protein and carbs.',
    'nx.5t': 'Match tomorrow', 'nx.5p': 'Match tomorrow: add more carbs to dinner tonight.',
    'nx.note': 'Sample notifications. They\'re all set up right on your phone; nothing gets pushed from a server.',
    'how.eyebrow': 'How it works', 'how.title': 'Every number, out in the open.',
    's1.t': 'Calories that fit your day',
    's1.p': 'Your target is based on your age, weight, job and how much you train. Calories and workouts from your Apple Watch get added automatically, and the math is right there, line by line.',
    's2.nav': 'Food log', 's3.nav': 'Form score', 's4.nav': 'Weekly plan',
    's1.scr': 'Energy breakdown', 's1.bmr': 'Basal metabolism', 's1.job': 'Job and daily movement', 's1.train': 'Planned training', 's1.goal': 'Goal adjustment',
    's2.t': 'Food logging that gets Turkish cooking',
    's2.p': 'Search thousands of local and international foods and pick your portion. Add a recipe\'s ingredients and the calories and macros add up on their own. Anything that\'s an estimate says so.',
    's2.scr': 'Today', 's2.q': 'lentil', 's2.p1': '1 bowl · 250 g', 's2.p2': '4 pieces · 120 g', 's2.p3': '1 serving · 150 g', 's2.p4': '1 glass · 200 ml',
    's3.t': 'Recovery and form score',
    's3.p': 'Check in on your sleep, fatigue and soreness each day, and if your Apple Watch is connected, your resting heart rate and HRV come in too. You get a daily form score measured against your own last 28 days. Running on empty? It\'ll tell you to take it easy.',
    's3.band': 'Good · steady', 's3.c1': 'Sleep', 's3.c2': 'Fatigue', 's3.c3': 'Soreness',
    's4.t': 'A weekly plan, ready for match day',
    's4.p': 'Your training calendar, weekly plan and training load, all in one place. The days before a match or race are marked. Food ideas change with that day\'s workout and the calories you have left.',
    's4.scr': 'This week', 's4.d1': 'Mon', 's4.d2': 'Tue', 's4.d3': 'Wed', 's4.d4': 'Thu', 's4.d5': 'Fri', 's4.d6': 'Sat',
    's4.x1': 'Strength', 's4.x2': 'Sport-specific', 's4.x3': 'Active recovery', 's4.x4': 'Plyometric', 's4.x5': 'Taper · light', 's4.x6': 'Match',
    'su.eyebrow': 'Quick setup', 'su.title': 'Eight quick steps. No sign-up.',
    'su.lede': 'Everything you enter during setup feeds into your target. At the end, the summary shows exactly how it was worked out.',
    'su.1t': 'Basics', 'su.1p': 'Your birth year and biological sex. The app is for people 18 and up.',
    'su.2t': 'Privacy and permissions', 'su.2p': 'Accept the terms, then decide separately whether to allow health data and AI, or skip both. You can change any of it later in Profile.',
    'su.3t': 'Body', 'su.3p': 'Your height and weight, in kg/cm or lb/ft-in.',
    'su.4t': 'Goal', 'su.4p': 'Lose fat, maintain, build muscle, perform better or just stay healthy. No crash diets: weight loss tops out at 1% a week.',
    'su.5t': 'Job', 'su.5p': 'Which days and hours do you work? Sitting at a desk, working in the field or on a building site changes how much energy you use.',
    'su.6t': 'Training', 'su.6p': 'Which sports do you play, how often and for how long? Your weekly plan is built from this.',
    'su.7t': 'Food and health', 'su.7p': 'Foods you don\'t eat, plus an optional quick health check.',
    'su.8t': 'Summary', 'su.8p': 'Your daily target and how it was worked out, line by line.',
    'ai.eyebrow': 'AI insights', 'ai.title': 'Straight to the point: what\'s affecting you and what to do now.',
    'ai.lede': 'No need to crunch the numbers yourself. In a few lines, the AI tells you what\'s affecting your form most and what to focus on over the next 1–3 days. “How your week is going” in the Calendar sums up your week the same way.',
    'ai.l1': 'Your phone does the math, the AI explains it. It doesn\'t make up numbers.',
    'ai.l2': 'It comments on your form and explains why your plan looks the way it does. Type in a food that isn\'t in the database and it estimates the values, clearly marked as an estimate.',
    'ai.l3': 'Everything it writes is safety-checked before it reaches you. If something health-related comes up, it points you to a doctor.',
    'ai.free': 'On-phone comments · free', 'ai.pro': 'Detailed AI comments · optional, Premium',
    'ai.card': 'AI commentary', 'ai.load': 'Training load',
    'ai.sample': 'You\'ve slept less than usual for three days. Take it easy before you add more training.',
    'ai.p1t': 'What\'s affecting you?', 'ai.p1v': 'Sleep, the biggest factor',
    'ai.p2t': 'What to do now?', 'ai.p2v': 'Next 1–3 days: mobility, lighter training',
    'ai.week': 'How your week is going', 'ai.weekSample': '3 workouts and 1 easy day this week; things ease off before Saturday\'s match.',
    'ch.1': 'How many calories do I have left today?', 'ch.2': 'How’s my form, should I train today?', 'ch.3': 'What’s my next session?',
    'ch.4': 'How much water have I had today?', 'ch.5': 'How is my week going?', 'ch.6': 'What should I eat now?', 'ch.7': 'How did I sleep?',
    'ch.8': 'How are my macros today?', 'ch.9': 'How is my weight trending?', 'ch.10': 'Which supplements suit me?',
    'co.card': 'Coach', 'co.where': 'Home ▸ top right', 'co.eyebrow': 'Coach', 'co.title': 'Got a question? Ask the Coach.',
    'co.lede': 'The Coach sums up how your day\'s going and answers your questions from your own data. Log water and food without leaving the chat. Answers are put together on your phone; nothing goes online.',
    'co.reply': 'Here are a few foods that fit today’s training; tap one to choose a portion.',
    'co.f2': 'Chicken skewers', 'co.f3': 'Oats', 'co.q2': 'Add 250 ml water', 'co.r2': 'Added. 1,750 ml today, 70% of your target.',
    'mo.eyebrow': 'And more', 'mo.title': 'The rest of your day, sorted.',
    'mo.m.t': 'Meal ideas that fit your goal', 'mo.meal3': 'Oats with yogurt',
    'mo.m.p': 'Ideas change with your workout and the calories you have left. They all come from the food database, and stuff you don\'t eat never shows up. Hit refresh for a new list.',
    'mo.f.t': 'Fluid tracking', 'mo.d1': 'Water', 'mo.d2': 'Tea', 'mo.d3': 'Coffee', 'mo.d4': 'Ayran',
    'mo.f.p': 'Water, tea, coffee, mineral water and drinks with calories. If you have ayran, milk or juice, it goes into your food log too.',
    'mo.h.t': 'Works with Apple Health', 'mo.h1': 'Workouts', 'mo.h2': 'Steps & active energy', 'mo.h4': 'Heart rate & HRV', 'mo.h5': 'Weight',
    'mo.h.p': 'Say yes and your workouts, steps, sleep, heart rate and weight come in automatically. FitWinner only reads them, and you choose what to share, one by one.',
    'mo.k.t': 'Supplements, with the evidence', 'mo.k1': 'Creatine', 'mo.ev1': 'Strong evidence', 'mo.ev2': 'Moderate evidence', 'mo.no': 'Not needed',
    'mo.k.p': 'See how much evidence backs each supplement: what\'s actually worth it and what\'s a waste of money. Anything that doesn\'t suit your health never gets suggested.',
    'mo.a.t': 'Tap “Done” in the notification', 'mo.n1': 'Football in 1 hour', 'mo.n1b': 'Eat something light and drink water.',
    'mo.done': 'Done', 'mo.snooze': 'Snooze', 'mo.n2': 'Weigh-in time', 'mo.n2b': 'In the morning, before breakfast.',
    'mo.a.p': 'Tap “Done” on a workout reminder and it\'s logged and your target updates. Not now? Hit “Snooze”. Weigh-in reminders follow your plan too.',
    'mo.p.t': 'Your own programs', 'mo.p3': 'Pull-up',
    'mo.p.p': 'Build your own workouts with sets and reps, and add moves quickly from the exercise list.',
    'mo.s.t': 'Free health check in every version',
    'mo.s.p': 'It never diagnoses anything. Your answers just make your goals safer; for example, no calorie deficit if you\'re pregnant. If needed, it points you to a specialist.',
    'pv.eyebrow': 'Privacy comes first',
    'pv.title': 'The math happens on your phone. No internet needed. Your raw health data never leaves your phone.',
    'pv.a.t': 'No account needed', 'pv.a.p': 'You don\'t need an account to use the app. Your data stays on your phone.',
    'pv.b.t': 'Same input, same answer', 'pv.b.p': 'Your calorie target, macros and form score are worked out on your phone. Enter the same details and you\'ll get the same result every time. No surprises.',
    'pv.c.t': 'AI only if you say so', 'pv.c.p': 'Comments are written only if you allow it, from a summary with your name and identity stripped out. Change your mind any time and the comments made from that data are deleted too.',
    'faq.eyebrow': 'Frequently asked', 'faq.title': 'The short version.',
    q1: 'When does it launch?', a1: 'FitWinner is in closed beta right now. You\'ll hear it here first when it lands on the App Store.',
    q2: 'Do I need an Apple Watch?', a2: 'Nope. Calorie tracking, food logging and your training plan all work without one. Connect Apple Watch or Apple Health and your resting heart rate, HRV and sleep feed into your form score.',
    q3: 'What exactly does the AI do?', a3: 'Only if you allow it, it adds short notes on your form score and plan, and estimates foods that aren\'t in the database. It doesn\'t do the math: your calorie target, macros and form score come from calculations on your phone.',
    q4: 'Is it medical advice?', a4: 'No. FitWinner is for people 18 and up. It\'s not a medical device and it doesn\'t diagnose or treat anything. If you have a health condition, talk to your doctor about your goals.',
    q5: 'What languages is it in?', a5: 'The app is available in 11 languages: Turkish, English, French, Dutch, Spanish, Italian, Portuguese, Polish, Greek, Czech and Estonian. This site is in Turkish and English for now.',
    'ai.l4': 'When it isn\'t sure, it says so. No bluffing.',
    'ai.l5': 'It never makes up sources and never oversells the evidence.',
    'ai.l6': 'Your name and email never reach it. Only if you say yes, it works from a short summary with your identity stripped out.',
    'q6': 'What data does the AI get?',
    'a6': 'Not your name, email or account info (there\'s no account anyway). If you say yes, it gets a short, anonymous summary of what it needs, like workout type and length and your recent form scores. Take your permission back and the comments made from that data are deleted too.',
    'q7': 'Does the AI cost extra?',
    'a7': 'On-phone comments are free. Detailed AI comments, plan explanations and food estimates are part of Premium, and all of it is optional.',
    'cl.title': 'Trust your own data, not guesswork.',
    'ft.legal': 'Legal', 'ft.privacy': 'Privacy Policy', 'ft.terms': 'Terms of Use', 'ft.kvkk': 'KVKK Notice', 'ft.contact': 'Contact',
    'ft.tm': 'Apple, iPhone, Apple Watch and App Store are trademarks of Apple Inc., registered in the U.S. and other countries. This site doesn\'t use cookies or analytics.'
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

  // /en/ is a separate, pre-translated page (so link previews can be English); it pins its
  // language, and switching to Turkish goes to the Turkish page.
  var pinned = document.documentElement.getAttribute('data-lang');

  function initial() {
    if (pinned) return pinned;
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'tr') return q;
    var langs = navigator.languages || [navigator.language || 'tr'];
    return /^tr\b/i.test(langs[0] || '') ? 'tr' : 'en';
  }

  window.FWI18n = {
    lang: function () { return current; },
    set: function (lang) {
      if (pinned && lang !== pinned) { location.href = lang === 'tr' ? '/?lang=tr' : '/en/'; return; }
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
