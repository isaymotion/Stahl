// Compact view of R9 vignettes for lead review. Usage: node show.js chNN [draft|final] [from] [to] [--full]
const fs = require('fs'), path = require('path');
const [ch, src = 'draft', from, to] = process.argv.slice(2).filter(a => !a.startsWith('--')); const full = process.argv.includes('--full');
const d = JSON.parse(fs.readFileSync(path.join(__dirname, src + '_' + ch + '.json'), 'utf8'));
const L = 'ABCDE', strip = s => String(s).replace(/\*\*/g, '');
d.slice(from ? +from - 1 : 0, to ? +to : undefined).forEach(v => {
  console.log('\n## ' + v.id + ' [' + v.tag + ' | ' + v.topic + '] ' + strip(v.stem));
  v.steps.forEach((s, i) => {
    console.log(' S' + (i + 1) + (s.lead ? ' (' + strip(s.lead) + ')' : '') + ' ' + strip(s.q) + '  [p' + s.pages + ']');
    s.choices.forEach((c, j) => console.log('   ' + (j === s.answer ? '*' : ' ') + L[j] + ' ' + strip(c) + (full && j !== s.answer ? '  — ' + strip(s.whyNot[j]) + ' (p' + s.whyNotPages[j] + ')' : '')));
    console.log('   why: ' + strip(s.why));
  });
});
