const fs=require('fs');
const STOP=new Set('the a an of to in and or is are be by for with that this not as on it its at from than but which can into only more most less one also was were has have does do so no'.split(' '));
const words=s=>String(s).toLowerCase().replace(/\*\*/g,'').replace(/[^a-z0-9α-ω]+/g,' ').split(' ').filter(w=>w.length>3&&!STOP.has(w));
const ptxt=p=>String(p).split('–').map(Number).map(n=>{const f='/home/claude/book/pages/p'+n+'.txt';return fs.existsSync(f)?fs.readFileSync(f,'utf8').toLowerCase():'';}).join(' ');
const score=(t,p)=>{const w=words(t);if(!w.length)return 100;const x=ptxt(p);return Math.round(100*w.filter(y=>x.includes(y.slice(0,6))).length/w.length);};
const NOTCOV=/\b(not (discussed|covered|mentioned|named|addressed|described|in the book)|book (is )?(silent|does not|never))/i;
const META=/^(all|none) of (these|the above)|\bexcept\b|\bnot\b.*\b(true|correct|associated)/i;
let low=[],nc=[],meta=[];
for(const ch of process.argv.slice(2)){
  const cur=JSON.parse(fs.readFileSync('current_'+ch+'.json','utf8'));
  const d=JSON.parse(fs.readFileSync('draft_'+ch+'.json','utf8'));
  cur.forEach(c=>{const e=d[c.id];if(!e)return;
    if(META.test(c.q)||c.choices.some(x=>/^(all|none) of (these|the above)/i.test(x))) meta.push(c.id);
    e.whyNot.forEach((t,i)=>{if(!t)return;
      const s=score(t,e.whyNotPages[i]);
      if(NOTCOV.test(t)) nc.push(c.id+'['+'ABCDE'[i]+'] '+t);
      else if(s<40) low.push(s+'% '+c.id+'['+'ABCDE'[i]+'] p'+e.whyNotPages[i]+' '+t);});
    if(e.why&&score(e.why,e.pages)<40) low.push(score(e.why,e.pages)+'% '+c.id+'[why] p'+e.pages+' '+e.why);});
}
low.sort((a,b)=>parseInt(a)-parseInt(b));
console.log('=== not-covered phrasing ('+nc.length+')');nc.forEach(x=>console.log('  '+x));
console.log('\n=== all/none/EXCEPT questions ('+meta.length+'): '+meta.join(' '));
console.log('\n=== lowest support ('+low.length+' under 40%)');low.slice(0,30).forEach(x=>console.log('  '+x));
