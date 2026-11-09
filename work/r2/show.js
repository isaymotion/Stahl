const {classify}=require('./classify.js');const L=require('./load.js').load();
const [t,ch]=process.argv.slice(2);
L.filter(x=>classify(x)===t&&(!ch||x.ch===ch)).forEach(x=>console.log(x.key.replace(/^ch/,''),x.tag,'|',x.q.slice(0,90).replace(/\n/g,' '),'=>',x.a.slice(0,70).replace(/\n/g,' ')));
