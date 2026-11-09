global.window=global;global.SP={d:{},add:(ch,k,v)=>((SP.d[ch]=SP.d[ch]||{})[k]=v)};
const fs=require('fs');
exports.load=function(){const items=[];
for(let n=1;n<=13;n++){const ch='ch'+String(n).padStart(2,'0');
for(const k of ['mech','drugs','clinical','cases']){const f=`/home/claude/stahl/data/${ch}/cards-${k}.js`;if(fs.existsSync(f))eval(fs.readFileSync(f,'utf8'));}
for(const k in SP.d[ch]||{})for(const it of SP.d[ch][k])items.push({key:`${ch}/${k}/${it.id}`,ch,deck:k,tag:it.tag,q:it.q,a:it.a||(it.choices?JSON.stringify(it.choices)+' '+it.answer+' '+(it.why||''):'')});}
return items;}
