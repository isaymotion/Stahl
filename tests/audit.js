global.window={};const fs=require('fs');const SP={chapters:{},add(ch,k,v){(this.chapters[ch]=this.chapters[ch]||{})[k]=v}};global.SP=SP;
for(const f of fs.readdirSync('data/db')){try{eval(fs.readFileSync('data/db/'+f,'utf8'))}catch(e){}}
for(const d of fs.readdirSync('data').filter(x=>/^ch\d+$/.test(x)).sort()){for(const f of fs.readdirSync('data/'+d)){try{eval(fs.readFileSync('data/'+d+'/'+f,'utf8'))}catch(e){console.log('ERR',d,f,e.message)}}}
let rows=[];
for(const [ch,c] of Object.entries(SP.chapters).sort()){
  const g=c.guide||{parts:[]};let secs=0,blocks={},words=0;
  g.parts.forEach(p=>p.sections.forEach(s=>{secs++;s.blocks.forEach(b=>{blocks[b.type]=(blocks[b.type]||0)+1;words+=JSON.stringify(b).split(/\s+/).length})}));
  const cases=c.cases||[];const tags={};cases.forEach(q=>tags[q.tag]=(tags[q.tag]||0)+1);
  const ansDist=[0,0,0,0,0];cases.forEach(q=>ansDist[q.answer]++);
  const whyLen=cases.length?Math.round(cases.reduce((a,q)=>a+(q.why||'').length,0)/cases.length):0;
  const stemLen=cases.length?Math.round(cases.reduce((a,q)=>a+(q.q||'').length,0)/cases.length):0;
  const vignette=cases.filter(q=>/year-old|\byo\b|presents|patient/i.test(q.q)).length;
  const hy=(c.highYield||[]).reduce((a,t)=>a+t.items.length,0);
  rows.push({ch,secs,words,hy,mech:(c.mech||[]).length,drugs:(c.drugs||[]).length,clin:(c.clinical||[]).length,mcq:cases.length,vignettePct:cases.length?Math.round(100*vignette/cases.length):0,stemLen,whyLen,ansDist:ansDist.join('/'),figs:(blocks.flow||0)+(blocks.steps||0),tables:blocks.table||0,compare:blocks.compare||0,cases:blocks.case||0,updates:blocks.update||0,caution:0});
}
console.table(rows);
const D=SP.drugs;const noStrength=D.filter(d=>(d.targets||[]).length&&(d.targets||[]).every(t=>!t.s)).length;
const noTargets=D.filter(d=>!(d.targets||[]).length).length;
const noSE=D.filter(d=>!(d.sideEffects||[]).length).length;const noUses=D.filter(d=>!(d.uses||[]).length).length;
const noPearl=D.filter(d=>!(d.pearls||[]).length).length;const noDose=D.filter(d=>d.dosing||d.dose).length;
console.log({drugs:D.length,noTargets,allStrengthUnknown:noStrength,noSideEffects:noSE,noUses,noPearls:noPearl,withDosing:noDose,keys:[...new Set(D.flatMap(Object.keys))].join(',')});
console.log('targets',SP.targets.length,'circuits',SP.circuits.length,'glossary',(SP.glossary||[]).length);
// image/figure use
console.log('figures/images in guide:', fs.readdirSync('.').includes('img')||fs.existsSync('icons')?fs.readdirSync('icons').length:0);
