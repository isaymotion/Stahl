// node show.js G : list new items of draft_G vs current_G, with mechanism/uses/facts context for duplicate spotting
const g = process.argv[2];
const d = require('./draft_' + g + '.json'), c = require('./current_' + g + '.json');
for (const id in d) {
  const o = c.find(x => x.id === id); if (!o) { console.log('?? ' + id); continue; }
  const lines = [];
  for (const k of ['sideEffects', 'pearls', 'uses']) {
    const old = new Set((o[k] || []).map(x => JSON.stringify(x)));
    (d[id][k] || []).forEach((p, i) => { if (!old.has(JSON.stringify(p))) lines.push('  ' + k[0] + ' ' + ((d[id].src || {})[k] || [])[i] + ' | ' + (typeof p === 'string' ? p : p.e + ' <- ' + p.via)); });
  }
  if (d[id].targets) lines.push('  T ' + JSON.stringify(d[id].targets.filter(t => !(o.targets||[]).some(x => x.t === t.t && x.s === t.s))));
  if (!lines.length) continue;
  console.log('## ' + id);
  console.log('  [M] ' + (o.mechanism || '').replace(/\*\*/g, '').slice(0, 220));
  console.log('  [U] ' + (o.uses || []).join(' / ').replace(/\*\*/g, '').slice(0, 220));
  console.log('  [F] ' + (o.facts || []).map(f => f.text).join(' / ').replace(/\*\*/g, '').slice(0, 260));
  console.log('  [SE] ' + (o.sideEffects || []).map(s => s.e).join(' / ').slice(0, 160));
  lines.forEach(l => console.log(l));
}
