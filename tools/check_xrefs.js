const fs=require('fs'),path=require('path');const root=process.argv[2];
global.window={};const SP={chapters:{},add:(id,k,v)=>{(SP.chapters[id]=SP.chapters[id]||{})[k]=v}};global.SP=SP;window.SP=SP;
const load=f=>new Function('SP','window',fs.readFileSync(path.join(root,f),'utf8'))(SP,window);
load('data/chapters.js');Object.assign(SP,window.SP||{});
['data/db/neurotransmitters.js','data/db/targets.js','data/db/drugs.js','data/db/circuits.js'].forEach(load);
SP.manifest.filter(m=>m.ready).forEach(m=>m.files.forEach(f=>load('data/'+m.id+'/'+f+'.js')));
const ids={drug:new Set(SP.drugs.map(d=>d.id)),nt:new Set(SP.nts.map(n=>n.id)),target:new Set(SP.targets.map(t=>t.id)),ch:new Set(SP.manifest.filter(m=>m.ready).map(m=>m.id)),page:new Set(['nbn','drugs','nt','targets','compare','circuits','glossary','updates','library'])};
const all=JSON.stringify([SP.chapters,SP.drugs,SP.nts,SP.targets]);let bad=0;
for(const m of all.matchAll(/\[\[(drug|nt|target|ch|gl|page):([^|\]]+)(?:\|[^\]]+)?\]\]/g)){if(m[1]!=='gl'&&!ids[m[1]].has(m[2])){console.log('BROKEN',m[0]);bad++}}
SP.drugs.forEach(d=>(d.targets||[]).forEach(t=>{if(!ids.target.has(t.t)){console.log('drug',d.id,'unknown target',t.t);bad++}}));
SP.targets.forEach(t=>{if(t.nt&&!ids.nt.has(t.nt)){console.log('target',t.id,'unknown nt',t.nt);bad++}});
// duplicate card ids
Object.entries(SP.chapters).forEach(([ch,d])=>{const seen=new Set();['mech','drugs','clinical','cases'].forEach(k=>(d[k]||[]).forEach(c=>{if(seen.has(c.id)){console.log('dup id',ch,c.id);bad++}seen.add(c.id); if(c.choices&&(c.answer<0||c.answer>=c.choices.length)){console.log('bad answer',c.id);bad++}}))});
console.log('glossary terms',SP.glossary.length,'drugs',SP.drugs.length,'nts',SP.nts.length,'targets',SP.targets.length,'problems',bad);
