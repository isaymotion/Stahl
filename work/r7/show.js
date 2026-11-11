// Review aid: node show.js chNN [draft|final] [from] [to]  — prints each question with rationale, cited page, and
// key-word support score (share of the rationale's content words found on the cited page; low = check closely).
const fs = require('fs'), path = require('path');
const [ch, kind = 'draft', from = 0, to = 999] = process.argv.slice(2);
const cur = JSON.parse(fs.readFileSync(path.join(__dirname, 'current_' + ch + '.json'), 'utf8'));
const d = JSON.parse(fs.readFileSync(path.join(__dirname, kind + '_' + ch + '.json'), 'utf8'));
const STOP = new Set('the a an of to in and or is are be by for with that this not as on it its at from than but which can into only more most less one also was were has have does do so no'.split(' '));
const words = s => String(s).toLowerCase().replace(/\*\*/g, '').replace(/[^a-z0-9α-ω]+/g, ' ').split(' ').filter(w => w.length > 3 && !STOP.has(w));
const pageText = p => String(p).split('–').map(Number).map(n => { const f = '/home/claude/book/pages/p' + n + '.txt'; return fs.existsSync(f) ? fs.readFileSync(f, 'utf8').toLowerCase() : ''; }).join(' ');
const score = (t, p) => { const w = words(t); if (!w.length) return 0; const pt = pageText(p); return Math.round(100 * w.filter(x => pt.includes(x.slice(0, 6))).length / w.length); };
cur.slice(+from, +to).forEach(c => {
  const e = d[c.id]; if (!e) return console.log(c.id + ' MISSING');
  console.log('\n## ' + c.id + ' [' + c.tag + '] p' + e.pages + '  ' + c.q);
  c.choices.forEach((x, i) => console.log((i === c.answer ? ' * ' : '   ') + 'ABCDE'[i] + ') ' + x + (i === c.answer ? '' : '\n        → ' + e.whyNot[i] + '  [p' + e.whyNotPages[i] + ' ' + score(e.whyNot[i], e.whyNotPages[i]) + '%]')));
  console.log('   why: ' + (e.why ? e.why + '  [' + score(e.why, e.pages) + '%]' : '(kept) ' + c.why));
});
