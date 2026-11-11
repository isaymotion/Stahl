// Deterministically reorder answer choices so correct answers are spread across A-E. Usage: node shuffle_cases.js file chId
const fs = require('fs'); const [file, chId] = process.argv.slice(2);
const SP = { add: (id, k, v) => { SP.out = v; } };
new Function('SP', fs.readFileSync(file, 'utf8'))(SP);
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const head = fs.readFileSync(file, 'utf8').split('\n').filter(l => l.startsWith('/*') || l.startsWith('   ')).join('\n');
const counts = [0,0,0,0,0]; let perm;
const items = SP.out.map((c, idx) => {
  if (idx % 5 === 0) { perm = [0,1,2,3,4]; for (let i = 4; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; } }
  const target = Math.min(perm[idx % 5], c.choices.length - 1);
  // shuffle original indices so per-choice fields (whyNot, whyNotPages) move with their choice
  const others = c.choices.map((_, i) => i).filter(i => i !== c.answer);
  for (let i = others.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [others[i], others[j]] = [others[j], others[i]]; }
  others.splice(target, 0, c.answer);
  const allIdx = others.findIndex(i => /^(all|none) of (these|the above)/i.test(c.choices[i]));
  if (allIdx > -1 && allIdx !== others.length - 1) others.push(others.splice(allIdx, 1)[0]);
  const fin = others.indexOf(c.answer); counts[fin]++;
  const out = Object.assign({}, c, { choices: others.map(i => c.choices[i]), answer: fin });
  for (const k of ['whyNot', 'whyNotPages']) if (Array.isArray(c[k])) out[k] = others.map(i => c[k][i]);
  return out;
});
const body = items.map(c => '  ' + JSON.stringify(c).replace(/[\u007f-￿]/g, ch => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'))).join(',\n');
fs.writeFileSync(file, head + '\nSP.add("' + chId + '", "cases", [\n' + body + '\n]);\n');
console.log('answer positions A-E:', counts.join(' '));
