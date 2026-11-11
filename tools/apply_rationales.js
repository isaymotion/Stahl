// Write reviewed rationales into data/chNN/cards-cases.js.
// Usage: node apply_rationales.js <appdir> <finalsDir> chNN...   (reads <finalsDir>/final_chNN.json)
// Sets why (if given), pages, whyNot, whyNotPages; keeps the file header and one-question-per-line layout.
const fs = require('fs'), path = require('path');
const [root, dir, ...chs] = process.argv.slice(2);
const ORDER = ['id', 'tag', 'q', 'choices', 'answer', 'why', 'pages', 'whyNot', 'whyNotPages'];
for (const ch of chs) {
  const file = path.join(root, 'data', ch, 'cards-cases.js'), src = fs.readFileSync(file, 'utf8');
  const SP = { add: (id, k, v) => { SP.out = v; } }; new Function('SP', src)(SP);
  const fin = JSON.parse(fs.readFileSync(path.join(dir, 'final_' + ch + '.json'), 'utf8'));
  let n = 0;
  const items = SP.out.map(c => {
    const f = fin[c.id]; if (!f) return c;
    if (f.whyNot.length !== c.choices.length || f.whyNot[c.answer] !== '') throw new Error(c.id + ': whyNot does not fit');
    const o = Object.assign({}, c, f.why ? { why: f.why } : {}, { pages: f.pages, whyNot: f.whyNot, whyNotPages: f.whyNotPages }); n++;
    const out = {}; ORDER.concat(Object.keys(o)).forEach(k => { if (k in o && !(k in out)) out[k] = o[k]; }); return out;
  });
  const head = src.split('\n').filter(l => l.startsWith('/*') || l.startsWith('   ')).join('\n');
  const body = items.map(c => '  ' + JSON.stringify(c).replace(/[\u007f-￿]/g, ch2 => '\\u' + ch2.charCodeAt(0).toString(16).padStart(4, '0'))).join(',\n');
  fs.writeFileSync(file, head + '\nSP.add("' + ch + '", "cases", [\n' + body + '\n]);\n');
  console.log(ch + ': ' + n + '/' + items.length + ' questions updated');
}
