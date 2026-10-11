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
    'hero.lede': 'FitWinner calculates your daily calorie target, your training plan and a form score that reflects your recovery directly on your phone, using the information you share during setup and your daily logs. These calculations aren\'t guesses; they rely on methods used in sports science and nutrition research. If you\'d like, the AI can also interpret these results for you and explain, in plain language, what you might focus on over the coming days.',
    'hero.how': 'How it works',
    'hero.f1': 'No account required', 'hero.f2': 'Works offline', 'hero.f3': 'Calculations happen on your phone',
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
    'sx.title': 'Every workout you do is added to that day\'s calorie target.',
    'sx.lede': 'Whether it\'s football, running, yoga or a session at the gym, every workout you complete or add to your calendar updates that day\'s calorie target. On training days you see the energy your body needs, and on rest days a more balanced target. Once you turn on workout reminders, you get a notification 30, 60, 90 or 120 minutes before each workout in your calendar (whichever you choose), and from that notification you can log the workout as “Done” or snooze it for 15 minutes.',
    'cx.t': 'Workout → calorie target',
    'cx.p': 'The energy a workout uses is calculated from the type of sport, how long it lasted and how hard you pushed yourself. If your Apple Watch measured your heart rate during the session, that measurement is used. Active calories your watch has already recorded are never added a second time, so the same activity doesn\'t count toward your target twice.',
    'cx.sport': 'Sport', 'cx.dur': 'Duration', 'cx.min': 'min', 'cx.rpe': 'Effort',
    'cx.session': 'This workout', 'cx.base': 'Rest-day target', 'cx.today': 'Today\u2019s target',
    'cx.note': 'The values in this calculator are an example for someone weighing 75 kg. The app uses the same formula with your own weight: (MET × effort factor − 1) × weight × hours.',
    'nx.t': 'A timely reminder for every workout',
    'nx.p': 'Once you turn on workout reminders in the Calendar, you can choose whether they arrive 30, 60, 90 or 120 minutes before a workout. The workout time comes from the time you entered for that day when adding it to the calendar, or from your general training time if you didn\'t. Nutrition reminders are set around the same time: a light meal about two hours before training, fluids at the start of workouts longer than 60 minutes, a recovery meal half an hour after you finish and a carb-loading reminder the evening before a match. You can choose to receive electrolyte reminders in the summer months, always or never. Skipped workouts don\'t get notifications, and when your plan changes the reminders are rearranged automatically.',
    'nx.day': 'Friday',
    'nx.1t': 'Pre-training meal', 'nx.1p': 'Prep session at 18:00. A good time for a light meal.',
    'nx.3t': 'Session in 1 hour', 'nx.3p': 'Prep · light · 30 min',
    'nx.4t': 'Recovery meal', 'nx.4p': 'Your workout is complete. Some protein and carbohydrates will help you recover.',
    'nx.5t': 'Match tomorrow', 'nx.5p': 'Match tomorrow. You may want to add a few more carbohydrates to dinner tonight.',
    'nx.note': 'These are sample notifications. They are all scheduled on your phone; nothing is sent from a server.',
    'how.eyebrow': 'How it works', 'how.title': 'You can see where every number comes from.',
    's1.t': 'Calories that fit your day',
    's1.p': 'Your daily calorie target is calculated from your age, weight, height, occupation and training load using widely used formulas. Active calories and workouts measured by your Apple Watch are added automatically, and you can clearly see every line of the calculation, from your basal metabolism to the contribution of your training.',
    's2.nav': 'Food log', 's3.nav': 'Form score', 's4.nav': 'Weekly plan',
    's1.scr': 'Energy breakdown', 's1.bmr': 'Basal metabolism', 's1.job': 'Job and daily movement', 's1.train': 'Planned training', 's1.goal': 'Goal adjustment',
    's2.t': 'Food logging that knows Turkish cuisine',
    's2.p': 'You can search thousands of foods from Turkish and international cuisines and choose your portion in bowls, pieces or grams. When you add the ingredients of a recipe you\'ve made at home, total calories and macros are calculated from the values in the database. Values that aren\'t exact are marked as estimates in the app.',
    's2.scr': 'Today', 's2.q': 'lentil', 's2.p1': '1 bowl · 250 g', 's2.p2': '4 pieces · 120 g', 's2.p3': '1 serving · 150 g', 's2.p4': '1 glass · 200 ml',
    's3.t': 'Recovery and form score',
    's3.p': 'Each day, a short check-in lets you note your sleep duration and quality, fatigue, muscle soreness and stress; if your Apple Watch is connected, your resting heart rate and HRV are taken into account too. Today\'s values are compared with your own values from the last 28 days rather than with other people\'s, the balance of your training load over the past week is added with a smaller weight, and the result becomes a form score between 0 and 100. Your first score appears after at least seven days of check-ins and is shown with lower confidence during the first two weeks. On days when the score is low, that day\'s workout is made lighter.',
    's3.band': 'Good · steady', 's3.c1': 'Sleep', 's3.c2': 'Fatigue', 's3.c3': 'Soreness',
    's4.t': 'A weekly plan that prepares you for match day',
    's4.p': 'Your training calendar, weekly plan and training load sit together on a single screen. In the days before a match or race you\'ve added to your calendar, the training load is gradually reduced and those days are marked in your plan. Food suggestions also adapt to that day\'s workout and your remaining calories.',
    's4.scr': 'This week', 's4.d1': 'Mon', 's4.d2': 'Tue', 's4.d3': 'Wed', 's4.d4': 'Thu', 's4.d5': 'Fri', 's4.d6': 'Sat',
    's4.x1': 'Strength', 's4.x2': 'Sport-specific', 's4.x3': 'Active recovery', 's4.x4': 'Plyometric', 's4.x5': 'Taper · light', 's4.x6': 'Match',
    'su.eyebrow': 'Quick setup', 'su.title': 'Eight short steps, no account required.',
    'su.lede': 'Every piece of information you share during setup is used to calculate your daily target, and none of it is tied to an account. In the final step, the summary shows line by line which information your target is based on and how it was put together.',
    'su.1t': 'Basics', 'su.1p': 'Your birth year and biological sex. The app is for people aged 18 and over.',
    'su.2t': 'Privacy and permissions', 'su.2p': 'You accept the terms of use. You can grant or decline permission for health data and AI separately, and change these choices later in Profile.',
    'su.3t': 'Body', 'su.3p': 'Your height and weight, in kg/cm or lb/ft-in.',
    'su.4t': 'Goal', 'su.4p': 'Fat loss, maintaining your weight, building muscle, performance or general health. When losing weight, the weekly target is limited to at most 1% of your body weight.',
    'su.5t': 'Job', 'su.5p': 'Which days and how many hours you work. Working at a desk, in the field or on a building site changes your daily energy needs.',
    'su.6t': 'Training', 'su.6p': 'The sports you do, how often and for how long. Your weekly plan is built from this information.',
    'su.7t': 'Food and health', 'su.7p': 'Foods you don\'t eat and, if you wish, a short health screening.',
    'su.8t': 'Summary', 'su.8p': 'Your daily target and how it was worked out, line by line.',
    'ai.eyebrow': 'AI insights', 'ai.title': 'It explains what\'s affecting you and your next step, in plain language.',
    'ai.lede': 'Your form score is built from several components, such as sleep, fatigue, muscle soreness, stress and training load, and these numbers aren\'t always easy to interpret one by one. The AI identifies what is affecting your form most and explains, in a few sentences, what you might focus on over the next one to three days. “How your week is going” in the Calendar summarises your weekly plan in the same way.',
    'ai.l1': 'All calculations are done by the calculation engines on your phone; the AI only interprets the results and never produces new numbers of its own.',
    'ai.l2': 'It interprets your form and explains why your weekly plan is structured the way it is. When you enter a food that isn\'t in the database, it estimates the nutritional values and the app clearly marks them as estimates.',
    'ai.l3': 'Everything it writes passes an automatic safety review before it reaches you. If an illness, medication or clinical symptom comes up, it doesn\'t give advice and instead suggests speaking with a doctor.',
    'ai.free': 'On-phone comments · free', 'ai.pro': 'Detailed AI comments · optional, Premium',
    'ai.card': 'AI commentary', 'ai.load': 'Training load',
    'ai.sample': 'You\'ve slept less than usual for the past three days. It may help to rest a little before adding more training.',
    'ai.p1t': 'What\'s affecting you?', 'ai.p1v': 'Sleep, the most noticeable factor',
    'ai.p2t': 'Your next step', 'ai.p2v': 'Next 1–3 days: mobility and lighter training',
    'ai.week': 'How your week is going', 'ai.weekSample': 'This week has 3 workouts and 1 light day; the load eases before Saturday\'s match.',
    'ch.1': 'How many calories do I have left today?', 'ch.2': 'How’s my form, should I train today?', 'ch.3': 'What’s my next session?',
    'ch.4': 'How much water have I had today?', 'ch.5': 'How is my week going?', 'ch.6': 'What should I eat now?', 'ch.7': 'How did I sleep?',
    'ch.8': 'How are my macros today?', 'ch.9': 'How is my weight trending?', 'ch.10': 'Which supplements suit me?',
    'co.card': 'Coach', 'co.where': 'Home ▸ top right', 'co.eyebrow': 'Coach', 'co.title': 'You can ask the Coach anything about your day.',
    'co.lede': 'The Coach summarises how your day is going and, when you ask about your remaining calories, your sleep, your next workout or how your week is going, answers based on your own data. You can log the water you drink and the food you eat without leaving the chat. The Coach\'s answers are prepared directly on your phone, without being sent online.',
    'co.reply': 'Here are a few foods that fit today’s training; tap one to choose a portion.',
    'co.f2': 'Chicken skewers', 'co.f3': 'Oats', 'co.q2': 'Add 250 ml water', 'co.r2': 'Added. 1,750 ml today, 70% of your target.',
    'mo.eyebrow': 'And more', 'mo.title': 'Features that support you beyond your workouts.',
    'mo.m.t': 'Meal suggestions that suit your goal', 'mo.meal3': 'Oats with yogurt',
    'mo.m.p': 'Suggestions change with your workout and remaining calories. They are all chosen from the food database, and foods you\'ve said you avoid are never suggested. Refresh the list to see different options.',
    'mo.f.t': 'Fluid tracking', 'mo.d1': 'Water', 'mo.d2': 'Tea', 'mo.d3': 'Coffee', 'mo.d4': 'Ayran',
    'mo.f.p': 'Log water, tea, coffee, mineral water and drinks with calories. Drinks such as ayran, milk or juice are added to your food log as well.',
    'mo.h.t': 'Works with Apple Health', 'mo.h1': 'Workouts', 'mo.h2': 'Steps & active energy', 'mo.h4': 'Heart rate & HRV', 'mo.h5': 'Weight',
    'mo.h.p': 'With your permission, your workouts, steps, sleep, heart rate and weight are brought in automatically. FitWinner only reads this data, and you choose which types to share, one by one.',
    'mo.k.t': 'Supplements, with the evidence', 'mo.k1': 'Performance supplements', 'mo.ev1': 'Strong evidence', 'mo.ev2': 'Moderate evidence', 'mo.no': 'Not needed',
    'mo.k.p': 'In the knowledge base, each supplement is described together with the strength of the scientific evidence behind it, so you can see which may be relevant to your goal and which you may not need. Supplements that don\'t suit your health aren\'t listed. We recommend talking to a healthcare professional before using any supplement.',
    'mo.a.t': '“Done” or “Snooze” from the notification', 'mo.n1': 'Football in 1 hour', 'mo.n1b': 'Eat something light and drink water.',
    'mo.done': 'Done', 'mo.snooze': 'Snooze 15 min', 'mo.n2': 'Weigh-in time', 'mo.n2b': 'In the morning, before breakfast.',
    'mo.a.p': 'When you press and hold a workout reminder, the options “Done” and “Snooze 15 min” appear. Tapping “Done” logs the planned workout and updates your daily target; snoozing brings the same reminder back 15 minutes later. Weigh-in reminders offer a direct “Weigh in now” option.',
    'mo.p.t': 'Your own programs', 'mo.p3': 'Pull-up',
    'mo.p.p': 'Create your own training programs with sets and reps, and add exercises easily from the exercise list.',
    'mo.s.t': 'Health screening, free in every version',
    'mo.s.p': 'It never makes a diagnosis. Your answers are only used to make your goals safer; for example, no calorie deficit is applied during pregnancy. When appropriate, it refers you to a specialist.',
    'pv.eyebrow': 'Your privacy comes first',
    'pv.title': 'All calculations happen on your phone, so no internet connection is needed and your raw health data never leaves your phone.',
    'pv.a.t': 'No account required', 'pv.a.p': 'You don\'t need to create an account or share your email address to use the app. The information you enter and your logs are stored on your phone; only with your permission is a short, anonymous summary sent for AI comments.',
    'pv.b.t': 'Consistent, transparent calculations', 'pv.b.p': 'Your calorie target, macros and form score are determined by the calculation engines on your phone. Because these calculations follow the same rules every time, entering the same information always gives the same result, and you can see how that result was reached.',
    'pv.c.t': 'AI only with your permission', 'pv.c.p': 'Comments are prepared only with your permission, from a summary with your name and identifying details removed. You can withdraw permission at any time, and comments made from that data are deleted too.',
    'faq.eyebrow': 'Frequently asked questions', 'faq.title': 'Questions you may have.',
    q1: 'When will FitWinner be available?', a1: 'FitWinner is currently in closed beta. We\'ll announce it on this page when it becomes available on the App Store.',
    q2: 'Do I need an Apple Watch?', a2: 'No, it isn\'t required. Calorie tracking, food logging and your training plan all work without one. If you connect Apple Watch or Apple Health, your resting heart rate, HRV and sleep are included in your form score.',
    q3: 'What does the AI do?', a3: 'Only with your permission, it interprets your form score and plan in short notes and estimates foods that aren\'t in the database. The AI doesn\'t perform the calculations; your calorie target, macros and form score come from calculations on your phone.',
    q4: 'Does it give medical advice?', a4: 'No. FitWinner is for people aged 18 and over. It isn\'t a medical device; it doesn\'t diagnose or recommend treatment. If you have a health condition, we recommend discussing your goals with your doctor.',
    q5: 'Which languages are available?', a5: 'The app is available in 11 languages: Turkish, English, French, Dutch, Spanish, Italian, Portuguese, Polish, Greek, Czech and Estonian. This site is currently available in Turkish and English.',
    'ai.l4': 'When the available information isn\'t enough to reach a conclusion, it says so clearly, and the app also shows you that the comment is uncertain.',
    'ai.l5': 'It doesn\'t invent sources or name specific studies, and it never presents information as more certain than the scientific evidence allows.',
    'ai.l6': 'Your name, email address and any other information that could identify you are never shared with the AI. It works only with your permission, from a short, anonymous summary containing what it needs for the comment.',
    'q6': 'What information is shared with the AI?',
    'a6': 'Your name, email address and account details are never shared, and the app doesn\'t use accounts at all. With your permission, a short, anonymous summary is sent, such as workout type and duration and your recent form scores. If you withdraw permission, comments made from that data are deleted too.',
    'q7': 'Are the AI features paid?',
    'a7': 'Comments prepared on your phone are free. Detailed AI comments, plan explanations and food estimates are part of Premium, and all of them are optional.',
    'ck.title': 'Your cookie choice', 'ck.text': 'We use Google Analytics and Meta Pixel cookies to understand how the site is used and to measure our ads, only if you allow it.',
    'ck.more': 'Privacy Policy', 'ck.reject': 'Decline', 'ck.accept': 'Accept', 'ft.cookies': 'Cookie preferences',
    'mo.k2': 'General health supplements', 'mo.k3': 'Popular but unnecessary ones',
    'cl.title': 'Set your goals based on your own data rather than guesses.',
    'ft.legal': 'Legal', 'ft.privacy': 'Privacy Policy', 'ft.terms': 'Terms of Use', 'ft.kvkk': 'KVKK Notice', 'ft.contact': 'Contact',
    'ft.tm': 'Apple, iPhone, Apple Watch and App Store are trademarks of Apple Inc., registered in the U.S. and other countries. Analytics and advertising cookies are used only with your permission. FitWinner is for general information and does not replace medical advice.'
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
