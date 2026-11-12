// Lead triage for R9 drafts: rationale/why words vs cited page (±1), numbers present on cited pages, same-answer leaks.
// Usage: node triage.js [--final] chNN...
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2), final = args.includes('--final'), chs = args.filter(a => a !== '--final');
const P = n => { try { return fs.readFileSync('/home/claude/book/pages/p' + n + '.txt', 'utf8').toLowerCase(); } catch (e) { return ''; } };
const near = pg => { const [a, b] = String(pg).split('–').map(Number); let t = ''; for (let n = a - 1; n <= (b || a) + 1; n++) t += P(n) + ' '; return t.replace(/-\s*\n\s*/g, '').replace(/\s+/g, ' '); };
const W = t => String(t).toLowerCase().replace(/\*\*/g, '').match(/[a-z][a-z0-9-]{4,}/g) || [];
const STOP = new Set('which would their there these those about because rather other drugs patient patients effect effects option answer choice instead though while being cause causes caused there where after before since without within'.split(' '));
for (const ch of chs) {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, (final ? 'final_' : 'draft_') + ch + '.json'), 'utf8'));
  for (const v of d) v.steps.forEach((s, si) => {
    const tag = v.id + '.s' + (si + 1);
    const look = (txt, pg, what) => {
      const pt = near(pg), ws = W(txt).filter(w => !STOP.has(w)); if (!ws.length) return;
      const hit = ws.filter(w => pt.includes(w.replace(/s$/, ''))).length / ws.length;
      if (hit < 0.45) console.log('  low ' + Math.round(hit * 100) + '% ' + tag + ' ' + what + ' p' + pg + ': ' + txt.replace(/\*\*/g, '').slice(0, 150));
      for (const num of String(txt).match(/\d+(\.\d+)?%?/g) || []) if (!pt.includes(num.replace('%', ''))) console.log('  num ' + tag + ' ' + what + ' "' + num + '" not on p' + pg);
    };
    look(s.why, s.pages, 'why');
    s.whyNot.forEach((t, i) => { if (t) look(t, s.whyNotPages[i], 'wn' + i); });
    (s.q + ' ' + (s.lead || '') + ' ' + s.choices.join(' ')).match(/\d+(\.\d+)?%/g)?.forEach(num => { if (!near(s.pages).includes(num.replace('%', ''))) console.log('  num ' + tag + ' stem/choice "' + num + '" not on p' + s.pages); });
  });
}
