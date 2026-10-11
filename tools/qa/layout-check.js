// Layout regression check. Paste into the console of a page that embeds the site in iframes, or
// run via tools/qa/README. Returns a list of problems per viewport.
window.FW_LAYOUT_CHECK = function (doc, win) {
  const issues = [];
  const R = el => el.getBoundingClientRect();
  const textRect = el => { const r = doc.createRange(); r.selectNodeContents(el); return r.getBoundingClientRect(); };
  const hit = (a, b, pad = 2) => a.width && b.width && a.left < b.right - pad && b.left < a.right - pad && a.top < b.bottom - pad && b.top < a.bottom - pad;
  const vis = el => { const s = win.getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  // 1. horizontal overflow
  if (doc.documentElement.scrollWidth > win.innerWidth + 1) issues.push(`horizontal overflow ${doc.documentElement.scrollWidth}>${win.innerWidth}`);
  // 2. hero title vs phone stage
  const title = [...doc.querySelectorAll('.hero-title .line')].map(textRect);
  const phone = R(doc.querySelector('.hero-phone'));
  const stageWide = win.innerWidth > 980;
  if (stageWide) title.forEach((t, i) => { if (t.right > phone.left - 8 && t.bottom > phone.top && t.top < phone.bottom) issues.push(`hero title line ${i + 1} reaches phone (${Math.round(t.right)}>${Math.round(phone.left)})`); });
  // 3. float cards covering phone data
  const data = [...doc.querySelectorAll('.hero-phone .w-h, .hero-phone .big, .hero-phone .mid, .hero-phone .macros > div, .hero-phone .w-p, .hero-phone .spark')];
  doc.querySelectorAll('.float-card').forEach(fc => { const f = R(fc); data.forEach(d => { if (hit(f, R(d))) issues.push(`${fc.className.split(' ')[1]} covers "${d.textContent.trim().slice(0, 18) || d.className}"`); }); });
  doc.querySelectorAll('.float-card').forEach(fc => { const f = R(fc); if (f.right > win.innerWidth + 1 || f.left < -1) issues.push(`${fc.className.split(' ')[1]} off-screen`); });
  // 4. float cards vs hero copy (title, lede, buttons, facts)
  const copy = [...doc.querySelectorAll('.hero-title .line, .lede, .hero-cta .btn, .hero-facts li, .hero .eyebrow')];
  doc.querySelectorAll('.float-card').forEach(fc => { const f = R(fc); copy.forEach(c => { const t = c.classList.contains('line') ? textRect(c) : R(c); if (hit(f, t)) issues.push(`${fc.className.split(' ')[1]} overlaps hero text "${c.textContent.trim().slice(0, 18)}"`); }); });
  // 5. sticky showcase fits viewport
  const left = doc.querySelector('.pinned .sc-left');
  if (left && R(left).height > win.innerHeight - 70) issues.push(`how-it-works column ${Math.round(R(left).height)}px taller than viewport ${win.innerHeight}`);
  const stepsBox = doc.querySelector('.pinned .sc-steps');
  if (stepsBox) doc.querySelectorAll('.pinned .step').forEach((s, i) => { const t = textRect(s); if (t.height > R(stepsBox).height + 2) issues.push(`step ${i + 1} text taller than its box`); });
  const pinnedPhone = doc.querySelector('.pinned .sc-phone');
  if (pinnedPhone && R(pinnedPhone).height > win.innerHeight) issues.push('how-it-works phone taller than viewport');
  // 6. sports cards sticky: lock screen visible when stuck
  const grid = doc.querySelector('.sx-grid'), lock = doc.querySelector('.lock');
  if (grid && lock && grid.style.top) { const top = parseFloat(grid.style.top); const lockTopStuck = R(lock).top - R(grid).top + top; if (lockTopStuck < 60) issues.push(`lock screen hidden under nav when stuck (${Math.round(lockTopStuck)}px)`); }
  // 7. contained visuals: children must stay inside
  [['.health-vis', '.hk'], ['.kb-vis', '.sup'], ['.meals-vis', '.mcard'], ['.act-vis', '.an'], ['.prog-vis', '.set'], ['.lock', '.n'], ['.fluid-vis', '.drinks span'], ['.chat', '.bubble']].forEach(([box, kid]) => {
    doc.querySelectorAll(box).forEach(b => { const br = R(b); b.querySelectorAll(kid).forEach(k => { if (!vis(k)) return; const kr = R(k); if (kr.left < br.left - 1 || kr.right > br.right + 1) issues.push(`${kid} spills out of ${box} horizontally`); }); });
  });
  // 8. text overflowing its own box (single-line labels)
  doc.querySelectorAll('.chips button, .pill, .btn, .tier, .lang button, .ev, .stamp, .n-h, .sup, .set, .mcard, .d, .r').forEach(el => { if (vis(el) && el.scrollWidth > el.clientWidth + 2) issues.push(`text overflows ${el.className || el.tagName}: "${el.textContent.trim().slice(0, 24)}"`); });
  // 9. hero labels overlapping each other (facts / CTA)
  const ctas = [...doc.querySelectorAll('.hero-cta .btn')].map(R);
  if (ctas.length === 2 && hit(ctas[0], ctas[1])) issues.push('hero buttons overlap');
  // 10. nav fits
  const nav = doc.querySelector('.nav-inner'); if (nav && nav.scrollWidth > nav.clientWidth + 1) issues.push('nav overflows');
  return [...new Set(issues)];
};
