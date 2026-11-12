/* Validate the mechanism-reasoning question bank (R11). Usage: node tools/check_reason.js ../stahl [--show kind [n]] */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '../stahl');
const ctx = { console }; ctx.window = ctx; ctx.globalThis = ctx; ctx.SP = { add() {} }; vm.createContext(ctx);
for (const f of ['data/db/drugs.js', 'data/db/targets.js', 'data/db/neurotransmitters.js', 'data/db/families.js', 'data/db/circuits.js', 'data/mechgrid.js', 'js/reason.js'])
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const SP = ctx.SP, bank = SP.reason.build(), again = SP.reason.build();
let problems = 0; const bad = (m) => { problems++; console.log('!! ' + m); };
const count = {}, keys = new Set();
const EFF = Object.fromEntries(SP.mechEffects.map(e => [e.id, e])), MECH = Object.fromEntries(SP.mechGrid.map(m => [m.id, m]));
const byLabel = Object.fromEntries(SP.mechGrid.map(m => [m.label, m]));
SP.mechGrid.forEach(m => { m.effects.concat(m.also || []).forEach(e => { if (!EFF[e]) bad('grid ' + m.id + ': unknown effect ' + e); }); (m.kin || []).forEach(k => { if (!MECH[k]) bad('grid ' + m.id + ': unknown kin ' + k); }); m.t.forEach(t => { if (!SP.targets.some(x => x.id === t)) bad('grid ' + m.id + ': unknown target ' + t); }); if (!m.how || !m.pages) bad('grid ' + m.id + ': no how/pages'); });
Object.keys(SP.circuitQ).forEach(id => { if (!SP.circuits.some(c => c.id === id)) bad('circuitQ: unknown circuit ' + id); });
bank.items.forEach((it, i) => {
  count[it.kind] = (count[it.kind] || 0) + 1;
  if (keys.has(it.key)) bad('duplicate key ' + it.key); keys.add(it.key);
  if (JSON.stringify(it) !== JSON.stringify(again.items[i])) bad('not deterministic: ' + it.key);
  if (it.choices.length !== 5 || new Set(it.choices).size !== 5) bad(it.key + ': needs 5 distinct choices');
  if (!(it.answer >= 0 && it.answer < 5)) bad(it.key + ': answer index');
  if (it.whyNot.length !== 5 || it.whyNot[it.answer] !== '' || it.whyNot.some((w, j) => j !== it.answer && !w)) bad(it.key + ': whyNot alignment');
  if (!it.q || !it.why || !it.pages || !it.chs || !it.chs.length) bad(it.key + ': missing q/why/pages/chs');
  if (/undefined|null|\[object/.test(JSON.stringify(it))) bad(it.key + ': undefined in text');
  if (it.kind === 'se' || it.kind === 'cmp') {            // no wrong answer may also explain the effect
    const d = SP.drugs.find(x => x.id === it.drug), m = MECH[it.mech];
    const effs = it.key.split('/')[it.kind === 'se' ? 3 : 99];
    it.choices.forEach((c, j) => { if (j === it.answer) return; const w = byLabel[c]; if (!w) return bad(it.key + ': unknown mechanism choice ' + c);
      const itemEff = SP.mechEffects.filter(e => e.re.test(it.chain[2])).map(e => e.id);
      if (w.effects.concat(w.also || []).some(e => itemEff.includes(e))) bad(it.key + ': distractor ' + w.id + ' also explains the effect');
      if ((m.kin || []).includes(w.id)) bad(it.key + ': kin distractor ' + w.id); });
  }
  if (it.kind === 'pred') { const m = MECH[it.mech]; it.choices.forEach((c, j) => { if (j === it.answer) return; const e = SP.mechEffects.find(x => x.label === c); if (m.effects.concat(m.also || []).includes(e.id)) bad(it.key + ': distractor effect ' + e.id + ' is true'); }); }
  if (it.kind === 'spot') { it.choices.forEach((c, j) => { if (j === it.answer) return; const d = SP.drugs.find(x => x.name === c); if (d.targets.some(x => x.t === it.target)) bad(it.key + ': distractor ' + d.id + ' acts at ' + it.target); }); }
  if (it.kind === 'cmp') { const B = SP.drugs.find(x => x.id === it.drug2), m = MECH[it.mech]; if (B.targets.some(x => m.t.includes(x.t))) bad(it.key + ': B has the target'); }
});
const ans = [0, 0, 0, 0, 0]; bank.items.forEach(it => ans[it.answer]++);
console.log('reason items', bank.items.length, JSON.stringify(count), 'answer spread', ans.join('/'), 'problems', problems);
const si = process.argv.indexOf('--show');
if (si > -1) {
  const kind = process.argv[si + 1], n = parseInt(process.argv[si + 2] || '6', 10);
  const list = bank.items.filter(it => it.kind === kind || it.key.indexOf(kind) === 0);
  const step = Math.max(1, Math.floor(list.length / n));
  for (let i = 0; i < list.length && i / step < n; i += step) { const it = list[i];
    console.log('\n[' + it.key + '] p' + it.pages + '\nQ: ' + it.q); it.choices.forEach((c, j) => console.log('  ' + (j === it.answer ? '*' : ' ') + 'ABCDE'[j] + '. ' + c + (it.whyNot[j] ? '   <- ' + it.whyNot[j] : ''))); console.log('WHY: ' + it.why + '\nCHAIN: ' + it.chain.join(' → ')); }
}
process.exit(problems ? 1 : 0);
