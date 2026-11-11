// Validate R7 drafts: coverage, whyNot shape, pages in range/exist, lengths, no page numbers in text, 8-word verbatim vs book.
// Usage: node check_drafts.js <appdir> <bookPagesDir> [chNN...]   (reads draft_chNN.json, or final_chNN.json with --final)
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2), final = args.includes('--final');
const [root, pagesDir, ...chs] = args.filter(a => a !== '--final');
const RANGE = { ch09: [379, 400], ch10: [401, 448], ch11: [449, 484], ch12: [485, 536], ch13: [537, 624] };
const norm = s => String(s).toLowerCase().replace(/\*\*|\*/g, '').replace(/[’‘]/g, "'").replace(/[^a-z0-9α-ω' ]+/g, ' ').split(/\s+/).filter(Boolean);
const N = 8, grams = new Set();
for (const f of fs.readdirSync(pagesDir)) { const w = norm(fs.readFileSync(path.join(pagesDir, f), 'utf8')); for (let i = 0; i + N <= w.length; i++) grams.add(w.slice(i, i + N).join(' ')); }
let problems = 0; const say = m => { problems++; console.log('  !! ' + m); };
const pageOk = (p, where) => {
  if (!/^\d{1,3}(–\d{1,3})?$/.test(p || '')) return say(where + ': bad page "' + p + '"');
  for (const n of p.split('–').map(Number)) if (!fs.existsSync(path.join(pagesDir, 'p' + n + '.txt')) || n < 1 || n > 624) say(where + ': page out of book ' + n);
};
const verb = (txt, where) => { const w = norm(txt); for (let j = 0; j + N <= w.length; j++) if (grams.has(w.slice(j, j + N).join(' '))) return say(where + ' verbatim: "' + w.slice(j, j + N).join(' ') + '"'); };
const noPg = (txt, where) => { if (/\bp\.?\s?\d{2,3}\b|\bpages?\s\d/i.test(txt)) say(where + ': page number in text'); };
for (const ch of chs) {
  const file = path.join(__dirname, (final ? 'final_' : 'draft_') + ch + '.json'); if (!fs.existsSync(file)) { console.log(ch + ': missing'); continue; }
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  const cur = JSON.parse(fs.readFileSync(path.join(__dirname, 'current_' + ch + '.json'), 'utf8'));
  let rw = 0, inR = 0, tot = 0;
  for (const c of cur) {
    const e = d[c.id]; if (!e) { say(c.id + ': missing'); continue; }
    pageOk(e.pages, c.id + '.pages');
    const [a, b] = RANGE[ch]; const p0 = +String(e.pages).split('–')[0]; if (p0 < a || p0 > b) console.log('  ~ ' + c.id + ': pages ' + e.pages + ' outside chapter');
    if (!Array.isArray(e.whyNot) || e.whyNot.length !== c.choices.length) { say(c.id + ': whyNot length'); continue; }
    if (!Array.isArray(e.whyNotPages) || e.whyNotPages.length !== c.choices.length) { say(c.id + ': whyNotPages length'); continue; }
    e.whyNot.forEach((t, i) => {
      const w = c.id + '.whyNot[' + i + ']';
      if (i === c.answer) { if (t !== '' || e.whyNotPages[i] !== '') say(w + ': answer slot must be ""'); return; }
      if (!t || !t.trim()) return say(w + ': empty');
      const n = t.replace(/\*\*/g, '').split(/\s+/).length; if (n > 28) say(w + ': ' + n + ' words'); if (n < 5) say(w + ': too short');
      noPg(t, w); verb(t, w); pageOk(e.whyNotPages[i], w + ' page'); tot++;
      const pp = +String(e.whyNotPages[i]).split('–')[0]; if (pp >= a && pp <= b) inR++;
    });
    if (e.why != null) { rw++; if (e.why.length < 90 || e.why.length > 320) say(c.id + '.why length ' + e.why.length); noPg(e.why, c.id + '.why'); verb(e.why, c.id + '.why'); }
    else if (c.why.length < 80) say(c.id + ': why under 80 chars not rewritten');
  }
  for (const id in d) if (!cur.find(c => c.id === id)) say(id + ': not in chapter');
  console.log(ch + ': ' + cur.length + ' questions, ' + tot + ' rationales (' + inR + ' cited in chapter), ' + rw + ' why rewritten');
}
console.log('problems ' + problems);
