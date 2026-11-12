// Insert { type: "diagram" } blocks into guide sections. node embed.js ../../../stahl  (idempotent: skips a section that already has the same label)
const fs = require('fs'), root = process.argv[2];
const J = [
  ['ch02', 's2-spectrum', 'end', { kind: 'spectrum' }, 'Agonist slider: inverse agonist, antagonist, partial agonist, full agonist'],
  ['ch04', 's4-da-pathways', 1, { kind: 'pathways', state: 'scz' }, 'Dopamine pathways drawing: the five pathways in untreated schizophrenia'],
  ['ch05', 's5-prolactin', 'end', { kind: 'pathways', state: 'd2', path: 'tubero' }, 'Dopamine pathways drawing: D2 antagonist, tuberoinfundibular pathway'],
  ['ch05', 's5-motor', 1, { kind: 'pathways', state: 'd2', path: 'nigrostriatal' }, 'Dopamine pathways drawing: D2 antagonist, nigrostriatal pathway'],
  ['ch05', 's5-three-pathways', 'end', { kind: 'pathways', state: '5ht2a' }, 'Dopamine pathways drawing: D2 antagonist with 5HT2A antagonism'],
  ['ch05', 's5-pa', 'end', { kind: 'spectrum', preset: 'd2' }, 'Agonist slider: D2 partial agonists on the spectrum'],
  ['ch05', 's5-binding', 1, { kind: 'occupancy', target: 'd2' }, 'Occupancy meter: D2 receptor occupancy'],
  ['ch05', 's5-binding', 'end', { kind: 'ring', drug: 'clozapine' }, 'Receptor ring: binding profile of clozapine']
];
let n = 0;
for (const [ch, sec, at, dia, label] of J) {
  const f = `${root}/data/${ch}/guide.js`, L = fs.readFileSync(f, 'utf8').split('\n');
  const s = L.findIndex(l => l.includes(`id: "${sec}"`)); if (s < 0) throw new Error('no section ' + sec);
  const b = L.findIndex((l, i) => i > s && /^ {10}blocks: \[\s*$/.test(l)); if (b < 0 || b > s + 5) throw new Error('no blocks ' + sec);
  const e = L.findIndex((l, i) => i > b && /^ {10}\]/.test(l));
  if (L.slice(b, e).some(l => l.includes(JSON.stringify(label)))) { console.log('skip', sec, label); continue; }
  const starts = []; for (let i = b + 1; i < e; i++) if (/^ {12}\{ type:/.test(L[i])) starts.push(i);
  const line = `            { type: "diagram", label: ${JSON.stringify(label)}, dia: ${JSON.stringify(dia).replace(/"(\w+)":/g, '$1: ').replace(/,/g, ', ')} }`;
  if (at === 'end') {
    let last = e - 1; while (!L[last].trim()) last--;
    if (!/,\s*$/.test(L[last])) L[last] += ',';
    L.splice(e, 0, line);
  } else { if (!starts[at]) throw new Error('no block ' + at + ' in ' + sec); L.splice(starts[at], 0, line + ','); }
  fs.writeFileSync(f, L.join('\n')); n++; console.log('added', ch, sec, at);
}
console.log('inserted', n);
