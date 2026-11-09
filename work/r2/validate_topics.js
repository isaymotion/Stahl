// Usage: node validate_topics.js
global.window=global;global.SP={d:{},add:(ch,k,v)=>((SP.d[ch]=SP.d[ch]||{})[k]=v)};
const fs=require('fs'),path=require('path');
const root='/home/claude/stahl/data';
const map=JSON.parse(fs.readFileSync(path.join(__dirname,'topic_map.json'),'utf8'));
const voc=JSON.parse(fs.readFileSync(path.join(__dirname,'topics_vocab.json'),'utf8')).map(t=>t.id);
const keys=[];
for(let n=1;n<=13;n++){const ch='ch'+String(n).padStart(2,'0');
 for(const k of ['mech','drugs','clinical','cases']){const f=`${root}/${ch}/cards-${k}.js`;if(fs.existsSync(f))eval(fs.readFileSync(f,'utf8'));}
 for(const k in SP.d[ch]||{})for(const it of SP.d[ch][k])keys.push(`${ch}/${k}/${it.id}`);}
const vs=new Set(voc);let missing=0,unknown=0;const cnt={},cc={};
for(const k of keys){const t=map[k];if(!t){missing++;continue}if(!vs.has(t)){unknown++;continue}
 cnt[t]=(cnt[t]||0)+1;const ch=k.slice(0,4);(cc[t]=cc[t]||{})[ch]=(cc[t][ch]||0)+1;}
const extra=Object.keys(map).filter(k=>!keys.includes(k));
console.log('Total items:',keys.length);console.log('Missing topic:',missing);console.log('Unknown topic ids:',unknown);console.log('Map keys not in cards:',extra.length);
const chs=[...Array(13)].map((_,i)=>'ch'+String(i+1).padStart(2,'0'));
console.log('\ntopic'.padEnd(21)+'total  '+chs.map(c=>c.slice(2)).join('  '));
for(const t of voc)console.log(t.padEnd(20)+String(cnt[t]||0).padStart(5)+'  '+chs.map(c=>String((cc[t]||{})[c]||0).padStart(2)).join('  '));
