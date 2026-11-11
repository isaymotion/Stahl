// Write two-step vignettes into the app: work/r9/<src>_chNN.json -> <app>/data/chNN/cards-vignettes.js
// Shuffles each step's choices deterministically so correct answers spread over A-E (whyNot/whyNotPages move with
// their choice), moves `topic` into work/r2/topic_map.json (key chNN/vignettes/<id>), then rebuild data/topics.js.
// Usage: node tools/apply_vignettes.js ../stahl work/r9 [--src draft|final] chNN...
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const si = args.indexOf('--src'); const src = si > -1 ? args.splice(si, 2)[1] : 'final';
const [app, workDir, ...chs] = args;
const mapFile = path.join(__dirname, '../work/r2/topic_map.json');
const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
const esc = s => s.replace(/[\u007f-￿]/g, ch => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'));
for (const ch of chs) {
  const d = JSON.parse(fs.readFileSync(path.join(workDir, src + '_' + ch + '.json'), 'utf8'));
  let seed = 11 + parseInt(ch.slice(2), 10); const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const counts = [0, 0, 0, 0, 0]; let perm = null, n = 0;
  const out = d.map(v => {
    const steps = v.steps.map(s => {
      if (s.whyNot.length !== s.choices.length || s.whyNot[s.answer] !== '') throw new Error(v.id + ': whyNot misaligned');
      if (n % 5 === 0) { perm = [0, 1, 2, 3, 4]; for (let i = 4; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; } }
      const target = perm[n++ % 5];
      const others = s.choices.map((_, i) => i).filter(i => i !== s.answer);
      for (let i = others.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [others[i], others[j]] = [others[j], others[i]]; }
      others.splice(target, 0, s.answer);
      const o = {}; if (s.lead) o.lead = s.lead;
      Object.assign(o, { q: s.q, choices: others.map(i => s.choices[i]), answer: others.indexOf(s.answer), why: s.why, pages: s.pages,
        whyNot: others.map(i => s.whyNot[i]), whyNotPages: others.map(i => s.whyNotPages[i]) });
      counts[o.answer]++; return o;
    });
    if (v.topic) map[ch + '/vignettes/' + v.id] = v.topic;
    return { id: v.id, tag: v.tag, stem: v.stem, steps };
  });
  for (const k of Object.keys(map)) if (k.startsWith(ch + '/vignettes/') && !out.find(v => k.endsWith('/' + v.id))) delete map[k];
  const body = '/* Chapter ' + parseInt(ch.slice(2), 10) + ' two-step vignettes (31.0.0): a clinical stem, then two board questions; step 2 builds on the\n' +
    '   correct step-1 answer. Each step: `answer` = zero-based index of the correct choice; `whyNot` one line per choice. */\n' +
    'SP.add("' + ch + '", "vignettes", [\n' + out.map(v => '  ' + esc(JSON.stringify(v))).join(',\n') + '\n]);\n';
  fs.writeFileSync(path.join(app, 'data', ch, 'cards-vignettes.js'), body);
  console.log(ch + ': ' + out.length + ' vignettes, answer positions A-E ' + counts.join(' '));
}
const sorted = {}; Object.keys(map).sort().forEach(k => { sorted[k] = map[k]; });
fs.writeFileSync(mapFile, JSON.stringify(sorted, null, 1) + '\n');
