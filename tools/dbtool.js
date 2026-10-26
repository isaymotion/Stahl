// Apply a chapter patch to the library databases and re-serialize them in the house style.
// Usage: node dbtool.js <appdir> <patch.js>
// The patch module exports function (db, h) { ... } where db = { drugs, nts, targets, circuits }.
const fs = require('fs'), path = require('path');
const [root, patchFile] = process.argv.slice(2);
const dbDir = path.join(root, 'data/db');
const files = { nts: 'neurotransmitters.js', targets: 'targets.js', drugs: 'drugs.js', circuits: 'circuits.js' };
const vars = { nts: 'SP.nts', targets: 'SP.targets', drugs: 'SP.drugs', circuits: 'SP.circuits' };
const SP = {};
const headers = {};
for (const k in files) {
  const src = fs.readFileSync(path.join(dbDir, files[k]), 'utf8');
  headers[k] = src.slice(0, src.indexOf(vars[k] + ' ='));
  new Function('SP', src)(SP);
}
const db = { nts: SP.nts, targets: SP.targets, drugs: SP.drugs, circuits: SP.circuits };
const h = {
  get(kind, id) { const e = db[kind].find(x => x.id === id); if (!e) throw new Error('no ' + kind + ' ' + id); return e; },
  has(kind, id) { return db[kind].some(x => x.id === id); },
  facts(kind, id, list) { const e = h.get(kind, id); e.facts = (e.facts || []).concat(list); return e; },
  upsert(kind, obj, opts) {
    const i = db[kind].findIndex(x => x.id === obj.id);
    if (i > -1) { db[kind][i] = Object.assign(db[kind][i], obj); return db[kind][i]; }
    if (opts && opts.after) { const j = db[kind].findIndex(x => x.id === opts.after); if (j < 0) throw new Error('no after ' + opts.after); db[kind].splice(j + 1, 0, obj); }
    else db[kind].push(obj);
    return obj;
  },
  chapter(id, ch, pages) { const e = h.get('drugs', id); e.chapters = e.chapters || []; if (!e.chapters.some(c => c.ch === ch)) e.chapters.push({ ch, pages }); return e; },
  push(kind, id, key, list) { const e = h.get(kind, id); e[key] = (e[key] || []).concat(list); return e; },
  set(kind, id, fields) { return Object.assign(h.get(kind, id), fields); }
};
require(path.resolve(patchFile))(db, h);

const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
function lit(v) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) return '[' + v.map(lit).join(', ') + ']';
  return '{ ' + Object.keys(v).map(k => key(k) + ': ' + lit(v[k])).join(', ') + ' }';
}
const key = k => /^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k);
const HEAD = ['id', 'name', 'brand', 'aka', 'abbr', 'short', 'group', 'cls', 'family', 'nt', 'ntLabel', 'key6'];
const HEAD_LINE = { drugs: ['id', 'name', 'brand', 'aka', 'group', 'cls'], targets: ['id', 'name', 'short', 'family', 'nt', 'ntLabel'], nts: ['id', 'name', 'abbr', 'family', 'key6'] };
function entry(kind, e) {
  if (kind === 'circuits') return '  ' + lit(e);
  const headKeys = HEAD_LINE[kind].filter(k => e[k] !== undefined);
  const lines = ['  {', '    ' + headKeys.map(k => k + ': ' + lit(e[k])).join(', ') + ','];
  Object.keys(e).filter(k => !headKeys.includes(k)).forEach(k => {
    const v = e[k];
    if (Array.isArray(v) && v.length > 1 && v.some(x => x && typeof x === 'object' && !Array.isArray(x)) ) {
      lines.push('    ' + key(k) + ': [');
      lines.push(v.map(x => '      ' + lit(x)).join(',\n'));
      lines.push('    ],');
    } else lines.push('    ' + key(k) + ': ' + lit(v) + ',');
  });
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('  }');
  return lines.join('\n');
}
const FAM_ORDER = [['Transporter', 'transporters (12 transmembrane regions)'], ['G-protein-linked receptor', 'G-protein-linked receptors (7 transmembrane regions)'], ['Ligand-gated ion channel', 'ligand-gated ion channels'], ['Voltage-sensitive ion channel', 'voltage-sensitive ion channels'], ['Enzyme', 'enzymes'], ['Intracellular receptor', 'intracellular receptors'], ['Neurotrophin receptor', 'neurotrophin receptors'], ['Other', 'other targets']];
for (const k in files) {
  let body;
  if (k === 'targets') {
    const parts = [];
    FAM_ORDER.forEach(([fam, label]) => {
      const es = db.targets.filter(t => t.family === fam);
      if (es.length) parts.push('  /* ---------------- ' + label + ' ---------------- */\n' + es.map(e => entry(k, e)).join(',\n'));
    });
    const unknown = db.targets.filter(t => !FAM_ORDER.some(f => f[0] === t.family));
    if (unknown.length) throw new Error('unknown family: ' + unknown.map(t => t.id + ':' + t.family).join(' '));
    body = parts.join(',\n');
  } else body = db[k].map(e => entry(k, e)).join(',\n');
  const out = headers[k] + vars[k] + ' = [' + (body ? '\n' + body + '\n' : '') + '];\n';
  fs.writeFileSync(path.join(dbDir, files[k]), out);
}
console.log('drugs', db.drugs.length, 'nts', db.nts.length, 'targets', db.targets.length, 'circuits', db.circuits.length);
