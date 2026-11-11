// Validate R9 two-step vignette drafts: shape, counts, ids, pages in book/chapter, word counts, no page numbers in text,
// 8-word verbatim vs book on every field, step-2 dependence heuristic, duplicate stems vs existing board questions.
// Usage: node check_drafts.js <bookPagesDir> [chNN...] [--final]   (reads draft_chNN.json, or final_chNN.json with --final)
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2), final = args.includes('--final');
const [pagesDir, ...chs] = args.filter(a => a !== '--final');
const RANGE = { ch01: [1, 28], ch02: [29, 50], ch03: [51, 76], ch04: [77, 158], ch05: [159, 243], ch06: [244, 282], ch07: [283, 358], ch08: [359, 378], ch09: [379, 400], ch10: [401, 448], ch11: [449, 485], ch12: [486, 537], ch13: [538, 578] };
const COUNT = { ch01: 10, ch02: 10, ch03: 10, ch04: 15, ch05: 15, ch06: 15, ch07: 15 };
const TOPICS = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, '../r2/topics_vocab.json'), 'utf8')).map(t => t.id));
const norm = s => String(s).toLowerCase().replace(/\*\*|\*/g, '').replace(/[’‘]/g, "'").replace(/[^a-z0-9α-ω' ]+/g, ' ').split(/\s+/).filter(Boolean);
const N = 8, grams = new Set();
for (const f of fs.readdirSync(pagesDir)) { const w = norm(fs.readFileSync(path.join(pagesDir, f), 'utf8')); for (let i = 0; i + N <= w.length; i++) grams.add(w.slice(i, i + N).join(' ')); }
let problems = 0, warns = 0; const say = m => { problems++; console.log('  !! ' + m); }, warn = m => { warns++; console.log('  ~ ' + m); };
const pageOk = (p, where) => {
  if (!/^\d{1,3}(–\d{1,3})?$/.test(p || '')) return say(where + ': bad page "' + p + '"');
  for (const n of p.split('–').map(Number)) if (n < 1 || n > 624 || !fs.existsSync(path.join(pagesDir, 'p' + n + '.txt'))) say(where + ': page out of book ' + n);
};
const verb = (txt, where) => { const w = norm(txt); for (let j = 0; j + N <= w.length; j++) if (grams.has(w.slice(j, j + N).join(' '))) return say(where + ' verbatim: "' + w.slice(j, j + N).join(' ') + '"'); };
const noPg = (txt, where) => { if (/\bp\.?\s?\d{2,3}\b|\bpages?\s\d/i.test(txt)) say(where + ': page number in text'); };
const words = t => String(t).replace(/\*\*/g, '').split(/\s+/).filter(Boolean).length;
const STOP = new Set('which what with that this from their there these those about into than then them they have been were will would should could after before while because between other others drug drugs patient patients effect effects receptor receptors most best likely more less'.split(' '));
const content = t => norm(t).filter(w => w.length >= 5 && !STOP.has(w));
for (const ch of chs) {
  const file = path.join(__dirname, (final ? 'final_' : 'draft_') + ch + '.json'); if (!fs.existsSync(file)) { console.log(ch + ': missing'); continue; }
  let d; try { d = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { say(ch + ': JSON parse ' + e.message); continue; }
  if (!Array.isArray(d)) { say(ch + ': not an array'); continue; }
  const num = +ch.slice(2), [a, b] = RANGE[ch];
  if (COUNT[ch] && d.length !== COUNT[ch]) warn(ch + ': ' + d.length + ' vignettes (target ' + COUNT[ch] + ')');
  const existing = (() => { try { const SP = { add: (x, k, v) => { SP.v = v; } }; new Function('SP', fs.readFileSync(path.join(__dirname, '../../../stahl/data', ch, 'cards-cases.js'), 'utf8'))(SP); return SP.v || []; } catch (e) { return []; } })();
  const seen = new Set(); let nq = 0, nr = 0, inR = 0; const pos = [0, 0, 0, 0, 0];
  d.forEach((v, vi) => {
    const id = v.id, want = 'v' + num + '-' + String(vi + 1).padStart(2, '0');
    if (id !== want) say((id || '#' + vi) + ': id should be ' + want);
    if (seen.has(id)) say(id + ': duplicate id'); seen.add(id);
    if (!v.tag || words(v.tag) > 4) say(id + ': tag missing or long');
    if (!final && !TOPICS.has(v.topic)) say(id + ': unknown topic "' + v.topic + '"');
    const sw = words(v.stem || ''); if (sw < 25 || sw > 110) say(id + '.stem: ' + sw + ' words'); noPg(v.stem || '', id + '.stem'); verb(v.stem || '', id + '.stem');
    for (const ex of existing) { const A = new Set(content(ex.q)), B = content(v.stem + ' ' + ((v.steps || [])[0] || {}).q); const hit = B.filter(w => A.has(w)).length; if (A.size >= 6 && hit / A.size > 0.7) warn(id + ': stem close to existing ' + ex.id); }
    if (!Array.isArray(v.steps) || v.steps.length !== 2) return say(id + ': needs exactly 2 steps');
    v.steps.forEach((s, si) => {
      const w = id + '.s' + (si + 1); nq++;
      if (si === 1) { const lw = words(s.lead || ''); if (lw < 8 || lw > 60) say(w + '.lead: ' + lw + ' words'); noPg(s.lead || '', w + '.lead'); verb(s.lead || '', w + '.lead'); }
      else if (s.lead) say(w + ': step 1 must not have a lead');
      if (!s.q || words(s.q) > 45) say(w + '.q missing or long'); noPg(s.q || '', w + '.q'); verb(s.q || '', w + '.q');
      if (/\b(EXCEPT|NOT)\b/.test(s.q || '')) say(w + ': EXCEPT/NOT question');
      if (!Array.isArray(s.choices) || s.choices.length !== 5) return say(w + ': choices must be 5');
      s.choices.forEach((c, i) => { if (/^(all|none|both) of/i.test(c)) say(w + '.choices[' + i + ']: all/none option'); if (words(c) > 22) say(w + '.choices[' + i + ']: long'); });
      if (new Set(s.choices.map(c => c.toLowerCase())).size !== 5) say(w + ': duplicate choices');
      if (!(Number.isInteger(s.answer) && s.answer >= 0 && s.answer <= 4)) return say(w + ': bad answer');
      pos[s.answer]++;
      pageOk(s.pages, w + '.pages'); const p0 = +String(s.pages).split('–')[0]; if (p0 < a || p0 > b) warn(w + ': pages ' + s.pages + ' outside chapter');
      if (!s.why || s.why.length < 90 || s.why.length > 320) say(w + '.why length ' + (s.why || '').length); noPg(s.why || '', w + '.why'); verb(s.why || '', w + '.why');
      if (!Array.isArray(s.whyNot) || s.whyNot.length !== 5) return say(w + ': whyNot length');
      if (!Array.isArray(s.whyNotPages) || s.whyNotPages.length !== 5) return say(w + ': whyNotPages length');
      s.whyNot.forEach((t, i) => {
        const ww = w + '.whyNot[' + i + ']';
        if (i === s.answer) { if (t !== '' || s.whyNotPages[i] !== '') say(ww + ': answer slot must be ""'); return; }
        if (!t || !t.trim()) return say(ww + ': empty');
        const n = words(t); if (n > 28) say(ww + ': ' + n + ' words'); if (n < 5) say(ww + ': too short');
        if (/not (mentioned|discussed|covered)/i.test(t)) warn(ww + ': bare not-covered phrasing');
        noPg(t, ww); verb(t, ww); pageOk(s.whyNotPages[i], ww + ' page'); nr++;
        const pp = +String(s.whyNotPages[i]).split('–')[0]; if (pp >= a && pp <= b) inR++;
      });
      ['q', 'why'].forEach(k => {}); verb(s.choices.join(' . '), w + '.choices');
    });
    // step-2 dependence heuristic: a content word of the step-1 correct choice appears in lead or step-2 question/why
    const s1 = v.steps[0], s2 = v.steps[1]; if (s1 && s2 && s1.choices) {
      const key = content(s1.choices[s1.answer]); const txt = new Set(content((s2.lead || '') + ' ' + s2.q + ' ' + s2.why));
      if (key.length && !key.some(k => txt.has(k))) warn(id + ': step 2 does not mention the step-1 answer ("' + s1.choices[s1.answer] + '")');
    }
  });
  console.log(ch + ': ' + d.length + ' vignettes, ' + nq + ' questions, ' + nr + ' rationales (' + inR + ' cited in chapter), answer positions A-E ' + pos.join(' '));
}
console.log('problems ' + problems + (warns ? ', warnings ' + warns : ''));
