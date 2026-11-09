const L=require('./load.js').load();
const R=(s)=>new RegExp(s,'i');
// [chapterRegex, tagRegex|null, textRegex|null, topic] ; first match wins
const rules=[
// global text overrides
['ch0[2-9]|ch1[0-2]',null,'Q:cyp\\d|cytochrome|pharmacogenom|metaboliz|inducer|serotonin syndrome|half-life|pharmacokinetic','pk-interactions'],
['ch05',null,'long-acting|\\bLAIs?\\b|depot|palmitate|decanoate|injectable','pk-interactions'],
// ch01
['ch01','Synapses?|Neuron|Classic|Retrograde|Volume|Coupling|Basis|Synapse structure|Neurotransmitters','', 'neurotransmission'],
['ch01','Transduction|Time course|Cascades|Second messenger|Phospho|Kinases|Phosphatases|Four cascades|Signal','', 'neurotransmission'],
['ch01','Genes|Early genes|Epigenetics|RNA|Behavior and genes','','genes-development'],
['ch01',null,'','circuits'],
// ch02
['ch02','Transporters|Monoamines|Other transporters|Missing transporters|Vesicular|VMAT2|Transporter|Monoamine transporters|Indirect','','transporters'],
['ch02','GPCR|Agonist spectrum|Partial agonists|Inverse agonists|Receptor drugs','','receptors'],
['ch02','Glutamate','','glutamate'],
['ch02','CYP450|Pharmacokinetics','','pk-interactions'],
['ch02','Enzymes|GSK-3|Enzyme inhibitors','','neurotransmission'],
['ch02','SSRIs','','antidepressants'],
['ch02','Stimulants','','adhd'],
['ch02','Anticonvulsants|Mood stabilizers','','mood-stabilizers'],
['ch02','Drugs of abuse','','addiction'],
['ch02',null,'','receptors'],
// ch03
['ch03','Classes|Structure|Spectrum|States|Allosteric|Terminology|PAM/NAM|Partial agonists|Table 3-2|Timing|Onset|Excess','','ion-channels'],
['ch03','GABA-A|Benzodiazepines','','gaba'],
['ch03','NMDA','','glutamate'],
['ch03','VSSC|VSCC|Action potential|Coupling|Anticonvulsants','','ion-channels'],
['ch03','Nicotinic|Nicotine','','acetylcholine'],
['ch03','5HT3','','serotonin'],
['ch03','Addiction','','addiction'],
['ch03','Depression','','antidepressants'],
['ch03','Dementia','','dementia'],
['ch03','Pain','','pain'],
['ch03',null,'','ion-channels'],
// ch04
['ch04','Dopamine|Receptors|Pathways|Motor|Mesolimbic|Hub|Mesocortical|D2 blockers|Levodopa|PDP|Prolactin','','dopamine'],
['ch04','Glutamate|Cotransmitters|NMDA|NMDA hypofunction|NMDA antagonists|Linking','','glutamate'],
['ch04','Serotonin|5HT receptors|Serotonin drugs|5HT2A antagonists|5HT psychosis|Hallucinogens','','serotonin'],
['ch04','Dementia','','dementia'],
['ch04','Stimulants|Cannabis','','addiction'],
['ch04','Metabolic','','antipsychotic-se'],
['ch04','Mood|Affective','','depression'],
['ch04','Neurodevelopment|Genetics','','genes-development'],
['ch04',null,'','psychosis'],
// ch05
['ch05','Prolactin|Motor|TD|VMAT2|Metabolic|Sedation','','antipsychotic-se'],
['ch05','Dementia','','dementia'],
['ch05','Uses','','antipsychotics'],
['ch05',null,'','antipsychotics'],
// ch06
['ch06','NE','','norepinephrine'],
['ch06','GABA|GABA-A|Neurosteroids','','gaba'],
['ch06','BDNF|Neuroprogression|Plasticity','','genes-development'],
['ch06','Rapid-acting','','antidepressants'],
['ch06',null,'','depression'],
// ch07
['ch07','Mood stabilizers|Bipolar|Lithium|Anticonvulsants|Valproate|Carbamazepine|Lamotrigine|Oxcarbazepine','','mood-stabilizers'],
['ch07',null,'','antidepressants'],
// ch08
['ch08','Benzodiazepines','','gaba'],
['ch08','α2δ','','ion-channels'],
['ch08','NE','','norepinephrine'],
['ch08','Serotonin|5HT1A','','serotonin'],
['ch08',null,'','anxiety-trauma'],
// ch09
['ch09','Opioids','','opioid-cannabinoid'],
['ch09','α2δ','','ion-channels'],
['ch09','Sleep','','sleep'],
['ch09','Depression','','antidepressants'],
['ch09',null,'','pain'],
// ch10
['ch10','Histamine|Orexin|Arousal|Antihistamines|DORAs','','histamine-orexin'],
['ch10','GABA-A|Benzodiazepines|Z drugs','','gaba'],
['ch10','Serotonergic|Trazodone|Depression','','sleep'],
['ch10',null,'','sleep'],
// ch11
['ch11',null,'','adhd'],
// ch12
['ch12','ACh|Muscarinic|Cholinesterase inhibitors|AChEI','','acetylcholine'],
['ch12','Glutamate','','glutamate'],
['ch12',null,'','dementia'],
// ch13
['ch13','Opioids','','opioid-cannabinoid'],
['ch13','Cannabis','','opioid-cannabinoid'],
['ch13','OCD|BED|Gambling|Behavioral','','impulse-compulsive'],
['ch13','Violence','','psychosis'],
['ch13','Extinction','','addiction'],
['ch13',null,'','addiction'],
];
const rr=rules.map(r=>[r[0]&&R('^('+r[0]+')$'),r[1]&&R('^('+r[1]+')(?![A-Za-z])'),r[2]&&[r[2].startsWith('Q:'),R(r[2].replace(/^Q:/,''))],r[3]]);
exports.classify=function(x){const txt=x.q+' '+x.a;
 for(const [c,t,tx,top] of rr){ if(c&&!c.test(x.ch))continue; if(t&&!t.test(x.tag))continue; if(tx&&!tx[1].test(tx[0]?x.q:txt))continue; return top;}
 return 'circuits';};
