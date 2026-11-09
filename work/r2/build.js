const fs=require('fs');const {classify}=require('./classify.js');const L=require('./load.js').load();
const ov=fs.readFileSync(__dirname+'/ov.txt','utf8').split('\n').filter(l=>l&&l[0]!='#').map(l=>{const [p,t]=l.split('\t');return [new RegExp('^('+p+')$'),t.trim()]});
const voc=new Set(require('./topics_vocab.json').map(t=>t.id));
const m={};
for(const x of L){let t=classify(x);for(const [re,tt] of ov)if(re.test(x.key))t=tt;if(!voc.has(t))throw new Error(x.key+' '+t);m[x.key]=t;}
fs.writeFileSync(__dirname+'/topic_map.json',JSON.stringify(m,null,1));
const c={};Object.values(m).forEach(t=>c[t]=(c[t]||0)+1);console.log(Object.keys(m).length,c);
