const {classify}=require("./classify.js");const L=require("./load.js").load();
const [ch,deck]=process.argv.slice(2);
L.filter(x=>x.ch==ch&&(!deck||x.deck==deck)).forEach(x=>console.log(x.key.slice(5).replace(/^(mech|drugs|clinical|cases)\//,m=>m[0]+"/"),classify(x).slice(0,7),x.tag.slice(0,10),"|",x.q.slice(0,72).replace(/\n/g," ")))
