// Merge draft_chNN.json + lead fixes fix_chNN.json -> final_chNN.json.
// fix format: { qid: { why?: str, pages?: str, whyNot?: {idx: str}, whyNotPages?: {idx: str} } }
const fs = require('fs'), path = require('path');
for (const ch of process.argv.slice(2)) {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, 'draft_' + ch + '.json'), 'utf8'));
  const ff = path.join(__dirname, 'fix_' + ch + '.json'), fx = fs.existsSync(ff) ? JSON.parse(fs.readFileSync(ff, 'utf8')) : {};
  let n = 0;
  for (const id in fx) {
    const e = d[id], f = fx[id]; if (!e) throw new Error('fix for unknown ' + id);
    if (f.why != null) e.why = f.why; if (f.pages) e.pages = f.pages;
    for (const k of ['whyNot', 'whyNotPages']) for (const i in f[k] || {}) { e[k][+i] = f[k][i]; n++; }
  }
  fs.writeFileSync(path.join(__dirname, 'final_' + ch + '.json'), JSON.stringify(d, null, 1));
  console.log(ch + ': ' + Object.keys(fx).length + ' questions fixed, ' + n + ' fields');
}
