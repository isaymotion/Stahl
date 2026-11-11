// Merge lead fixes into drafts: draft_chNN.json + fix_chNN.json -> final_chNN.json
// fix shape: { vid: { stem?, tag?, topic?, steps: { "0"|"1": { field: value, choices|whyNot|whyNotPages: [..] or {idx: str} } } } }
const fs = require('fs'), path = require('path');
for (const ch of process.argv.slice(2)) {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, 'draft_' + ch + '.json'), 'utf8'));
  const fp = path.join(__dirname, 'fix_' + ch + '.json'), fx = fs.existsSync(fp) ? JSON.parse(fs.readFileSync(fp, 'utf8')) : {};
  let n = 0;
  for (const [vid, f] of Object.entries(fx)) {
    const v = d.find(x => x.id === vid); if (!v) throw new Error(ch + ': no ' + vid);
    for (const k of ['stem', 'tag', 'topic']) if (f[k] != null) { v[k] = f[k]; n++; }
    for (const [si, sf] of Object.entries(f.steps || {})) {
      const s = v.steps[+si];
      for (const [k, val] of Object.entries(sf)) {
        if (['choices', 'whyNot', 'whyNotPages'].includes(k) && !Array.isArray(val)) { for (const [i, t] of Object.entries(val)) s[k][+i] = t; }
        else s[k] = val;
        n++;
      }
    }
  }
  fs.writeFileSync(path.join(__dirname, 'final_' + ch + '.json'), JSON.stringify(d, null, 1));
  console.log(ch + ': ' + d.length + ' vignettes, ' + n + ' fields fixed');
}
