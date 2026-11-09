// R4: apply reviewed drafts (draft_A..D.json) to the drug library. Run: node tools/dbtool.js ../stahl work/r4/r4_patch.js
const fs = require('fs'), path = require('path');
module.exports = function (db, h) {
  let n = 0;
  for (const g of ['A', 'B', 'C', 'D', 'E', 'F']) {
    const f = path.join(__dirname, 'final_' + g + '.json'); if (!fs.existsSync(f)) continue;
    const d = JSON.parse(fs.readFileSync(f, 'utf8'));
    for (const id in d) {
      const e = d[id], fields = {};
      for (const k of ['sideEffects', 'pearls', 'uses', 'targets']) if (e[k]) fields[k] = e[k];
      h.set('drugs', id, fields); n++;
    }
  }
  console.log('r4 patched drugs: ' + n);
};
