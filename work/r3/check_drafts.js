// Validate R3 drafts: structure, src alignment, target ids, verbatim runs vs book text (8+ words).
// Usage: node check_drafts.js <appdir> <bookPagesDir> [groups...]
const fs = require('fs'), path = require('path');
const [root, pagesDir, ...groups] = process.argv.slice(2);
const SP = {}; for (const f of ['drugs', 'targets']) new Function('SP', fs.readFileSync(path.join(root, 'data/db', f + '.js'), 'utf8'))(SP);
const tids = new Set(SP.targets.map(t => t.id));
const norm = s => String(s).toLowerCase().replace(/\*\*|\*/g, '').replace(/[’‘]/g, "'").replace(/[^a-z0-9α-ω' ]+/g, ' ').split(/\s+/).filter(Boolean);
const N = 8, grams = new Set();
for (const f of fs.readdirSync(pagesDir)) { const w = norm(fs.readFileSync(path.join(pagesDir, f), 'utf8')); for (let i = 0; i + N <= w.length; i++) grams.add(w.slice(i, i + N).join(' ')); }
let problems = 0; const say = m => { problems++; console.log('  !! ' + m); };
for (const g of groups) {
  const file = path.join(__dirname, 'draft_' + g + '.json'); if (!fs.existsSync(file)) { console.log(g + ': missing'); continue; }
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  const cur = JSON.parse(fs.readFileSync(path.join(__dirname, 'current_' + g + '.json'), 'utf8'));
  console.log('== group ' + g);
  for (const id in d) {
    const e = d[id], c = cur.find(x => x.id === id); if (!c) { say(id + ': not in group'); continue; }
    const add = k => (e[k] || []).length - (c[k] || []).length;
    console.log(id.padEnd(18) + ' se ' + (c.sideEffects || []).length + '→' + (e.sideEffects || []).length + '  pearls ' + (c.pearls || []).length + '→' + (e.pearls || []).length + (e.uses ? '  uses ' + (c.uses || []).length + '→' + e.uses.length : '') + (e.targets ? '  targets ' + c.targets.length + '→' + e.targets.length : ''));
    for (const k of ['sideEffects', 'pearls', 'uses']) {
      if (!e[k]) continue; const src = (e.src || {})[k] || [];
      if (src.length !== e[k].length) say(id + '.' + k + ': src length ' + src.length + ' vs ' + e[k].length);
      e[k].forEach((it, i) => {
        const txt = typeof it === 'string' ? it : it.e + ' ' + (it.via || '');
        if (typeof it !== 'string' && (!it.e || !it.via)) say(id + '.' + k + '[' + i + ']: needs e and via');
        const w = norm(txt); for (let j = 0; j + N <= w.length; j++) if (grams.has(w.slice(j, j + N).join(' '))) { say(id + '.' + k + '[' + i + '] verbatim: "' + w.slice(j, j + N).join(' ') + '"'); break; }
      });
    }
    (e.targets || []).forEach(t => { if (!tids.has(t.t)) say(id + ': bad target ' + t.t); if (t.s != null && !(t.s >= 1 && t.s <= 4)) say(id + ': bad s ' + t.t); });
    for (const k of ['sideEffects', 'pearls']) { const old = (c[k] || []).map(x => JSON.stringify(x)); const now = (e[k] || []).map(x => JSON.stringify(x)); old.forEach(o => { if (!now.includes(o)) console.log('     ~ ' + id + '.' + k + ' changed/removed: ' + o.slice(0, 90)); }); }
  }
}
console.log('problems ' + problems);
