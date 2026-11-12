// R12 (34.0.0): consistency check for data/diagrams.js.   node tools/check_diagrams.js ../stahl
// Every chapter/section, drug, target and circuit id resolves; page refs sit inside the section (or chapter) they cite;
// bands tile 0–100; slider marks ascend; ring sectors are real targets and cover every rated target; questions are well formed.
const path = require('path'), fs = require('fs'), root = path.resolve(process.argv[2] || '.');
global.window = global; const G = {}; global.SP = { add(c, k, v) { (G[c] = G[c] || {})[k] = v; }, extraFiles: [] };
require(root + '/data/chapters.js'); SP.add = (c, k, v) => { (G[c] = G[c] || {})[k] = v; };
for (const f of ['targets', 'drugs', 'circuits']) require(root + '/data/db/' + f + '.js');
require(root + '/data/diagrams.js'); require(root + '/js/diagrams.js');
const D = SP.diagrams, P = []; const bad = m => P.push(m);
const chs = SP.manifest || SP.chapters || [];
const secs = {}; const chPages = {};
for (const c of chs) { if (!fs.existsSync(`${root}/data/${c.id}/guide.js`)) continue; require(`${root}/data/${c.id}/guide.js`); chPages[c.id] = c.pages; G[c.id].guide.parts.forEach(p => p.sections.forEach(s => { secs[c.id + '/' + s.id] = s; })); }
const nums = s => String(s || '').split(',').flatMap(x => { const m = x.trim().split(/[–-]/).map(Number); return m.length > 1 ? [m[0], m[1]] : [m[0]]; });
const span = s => { const n = nums(s); return [Math.min(...n), Math.max(...n)]; };
function src(where, o, strictSec) {
  if (!o.ch || !chPages[o.ch]) return bad(where + ': chapter ' + o.ch);
  if (!secs[o.ch + '/' + o.sec]) return bad(where + ': no section ' + o.ch + '/' + o.sec);
  if (!o.pages || nums(o.pages).some(isNaN)) return bad(where + ': pages ' + o.pages);
  if (strictSec) { const [a, b] = span(secs[o.ch + '/' + o.sec].pages); const outside = nums(o.pages).filter(n => n < a || n > b); if (outside.length) bad(where + ': pages ' + o.pages + ' outside section ' + o.sec + ' (' + secs[o.ch + '/' + o.sec].pages + ')'); }
}
const drug = id => SP.drugs.find(d => d.id === id), target = id => SP.targets.find(t => t.id === id), circuit = id => SP.circuits.find(c => c.id === id);
const xrefs = (where, text) => { String(text || '').replace(/\[\[(\w+):([^|\]]+)/g, (m, k, id) => { if (k === 'drug' && !drug(id)) bad(where + ': ' + m); if (k === 'target' && !target(id)) bad(where + ': ' + m); }); };
// spectrum
src('spectrum', D.spectrum, true);
if (D.spectrum.zones.map(z => z.id).join() !== 'inverse,antagonist,partial,full') bad('spectrum zones');
for (const [k, p] of Object.entries(D.spectrum.presets)) {
  src('preset ' + k, p, true); if (!target(k)) bad('preset ' + k + ': not a target id');
  p.marks.forEach((m, i) => { if (m.v < 0 || m.v > 1 || (i && m.v <= p.marks[i - 1].v)) bad('preset ' + k + ' mark order ' + m.label); (m.drugs || []).forEach(id => drug(id) || bad('preset drug ' + id)); });
}
// occupancy
for (const [k, o] of Object.entries(D.occupancy)) {
  if (!target(k)) bad('occupancy ' + k + ': not a target id'); src('occupancy ' + k, o, false);
  let at = 0; o.bands.forEach(b => { if (b.from !== at || b.to <= b.from) bad('occupancy ' + k + ' band ' + b.label); at = b.to; }); if (at !== 100) bad('occupancy ' + k + ' bands end at ' + at);
  if (!(o.start >= 0 && o.start <= 100)) bad('occupancy ' + k + ' start');
  (o.marks || []).forEach(m => { if (!o.bands.some(b => b.from === m.at || b.to === m.at)) bad('occupancy ' + k + ' mark ' + m.at + ' is not a band edge'); });
  (o.notes || []).concat(o.bands.map(b => b.text)).forEach(t => xrefs('occupancy ' + k, t));
}
// pathways
src('pathways', D.pathways, true);
const pids = D.pathways.paths.map(p => p.id);
for (const s of D.pathways.states) {
  src('state ' + s.id, s, false);
  if (Object.keys(s.p).sort().join() !== pids.slice().sort().join()) bad('state ' + s.id + ' pathways');
  for (const [k, e] of Object.entries(s.p)) { if (!D.pathways.levels[e.lv]) bad('state ' + s.id + '/' + k + ' level ' + e.lv); (e.cx || []).forEach(id => circuit(id) || bad('state ' + s.id + '/' + k + ' circuit ' + id)); }
}
// ring
const ringT = D.ring.groups.flatMap(g => g.targets); ringT.forEach(t => target(t) || bad('ring target ' + t));
if (new Set(ringT).size !== ringT.length) bad('ring: duplicate target');
const ringDrugs = SP.dia.ringDrugs();
ringDrugs.forEach(d => d.targets.filter(t => t.s != null).forEach(t => ringT.includes(t.t) || bad('ring: ' + d.id + ' has a strength at ' + t.t + ', which has no sector')));
if (!ringDrugs.some(d => d.id === D.ring.start)) bad('ring start ' + D.ring.start);
// questions
const keys = new Set();
for (const q of D.questions) {
  const w = 'question ' + q.key;
  if (keys.has(q.key)) bad(w + ': duplicate key'); keys.add(q.key);
  if (!q.chs || !q.chs.length || q.chs.some(c => !chPages[c])) bad(w + ': chs');
  if (!q.choices || q.choices.length !== 5 || new Set(q.choices).size !== 5) bad(w + ': choices');
  if (!(q.answer >= 0 && q.answer < 5)) bad(w + ': answer');
  if (!q.whyNot || q.whyNot.length !== 5 || q.whyNot[q.answer] !== '' || q.whyNot.some((x, i) => i !== q.answer && !x)) bad(w + ': whyNot');
  if (!q.why || !q.tag || !q.pages) bad(w + ': why/tag/pages');
  else { const lo = Math.min(...q.chs.map(c => span(chPages[c])[0])), hi = Math.max(...q.chs.map(c => span(chPages[c])[1])); if (nums(q.pages).some(n => isNaN(n) || n < lo || n > hi)) bad(w + ': pages ' + q.pages + ' outside its chapters'); }
  const d = q.dia || {};
  if (d.kind === 'spectrum') { if (d.preset && !D.spectrum.presets[d.preset]) bad(w + ': preset'); if (typeof d.v !== 'number') bad(w + ': v'); }
  else if (d.kind === 'occupancy') { if (!D.occupancy[d.target]) bad(w + ': target'); }
  else if (d.kind === 'pathways') { if (!D.pathways.states.some(s => s.id === d.state) || (d.path && !pids.includes(d.path))) bad(w + ': state/path'); }
  else bad(w + ': dia kind');
  if (!SP.dia.html(Object.assign({}, d, { blind: true })) || !SP.dia.html(d)) bad(w + ': does not draw');
}
// guide blocks
let blocks = 0;
for (const [k, s] of Object.entries(secs)) s.blocks.forEach(b => { if (b.type !== 'diagram') return; blocks++; if (!b.label) bad(k + ': diagram block without label'); if (!SP.dia.html(b.dia)) bad(k + ': diagram block does not draw'); if (b.dia.kind === 'ring' && !SP.dia.hasRing(b.dia.drug)) bad(k + ': ring drug ' + b.dia.drug); if (b.dia.kind === 'occupancy' && !D.occupancy[b.dia.target]) bad(k + ': occupancy target'); if (b.dia.kind === 'pathways' && !D.pathways.states.some(x => x.id === b.dia.state)) bad(k + ': state'); });
P.forEach(p => console.log('!! ' + p));
console.log(`diagrams: presets ${Object.keys(D.spectrum.presets).length} occupancy ${Object.keys(D.occupancy).length} states ${D.pathways.states.length} ring drugs ${ringDrugs.length} ring sectors ${ringT.length} questions ${D.questions.length} guide blocks ${blocks} problems ${P.length}`);
process.exit(P.length ? 1 : 0);
