// Chapter 12 library enrichment: acetylcholine network, dementia drugs, anti-amyloid antibodies, dementia symptom circuits.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch12', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };
  const ariaSE = [{ e: 'ARIA-E (brain edema) and ARIA-H (microbleeds), rarely fatal', via: 'Amyloid removal from vessel walls; higher risk in APOE4 carriers' }, { e: 'Infusion reactions', via: 'Antibody infusion' }];

  /* ---------------- acetylcholine ---------------- */
  h.set('nts', 'acetylcholine', {
    synthesis: [['Choline + acetyl coenzyme A', 'Choline from diet and neuronal sources (recycled by the **choline transporter**); acetyl-CoA from glucose in mitochondria'], ['Acetylcholine', '**Choline acetyltransferase (ChAT)**; packaged into vesicles by **VAChT**']],
    pathways: [
      { name: 'Brainstem cholinergic', route: 'Brainstem → PFC, **basal forebrain**, thalamus, hypothalamus, amygdala, hippocampus', role: 'Arousal and widespread modulation' },
      { name: 'Basal forebrain cholinergic', route: '**Basal forebrain (nucleus basalis)** → PFC, amygdala, hippocampus', role: '**Memory**; lost early in Alzheimer disease' }
    ],
    roles: ['**Memory** and cognition (M1, α7 nicotinic)', 'Regulates VTA dopamine (M4 reduces it; α4β2 increases accumbens DA)', 'Arousal across the sleep/wake cycle (Chapter 10)']
  });
  h.push('nts', 'acetylcholine', 'termination', ['**Butyrylcholinesterase** (mainly glial) also hydrolyzes ACh; ACh is destroyed too fast to be taken back up intact, so **choline** is recycled (Chapter 12)']);
  h.facts('nts', 'acetylcholine', [
    F('505–507', '**M1, M3, M5** are stimulatory and postsynaptic; **M2 and M4** are inhibitory presynaptic autoreceptors (M4 also postsynaptic) and heteroreceptors that brake GABA and glutamate release.', 's12-ach'),
    F('507–509', '**α4β2** nicotinic receptors drive accumbens DA (nicotine’s target); **α7** receptors mediate PFC cognition, feed-forward ACh release and heteroreceptor release of DA and glutamate. Nicotinic receptors have **PAM** sites.', 's12-ach'),
    F('509–510', 'Early loss of **nucleus basalis** cholinergic neurons with surviving postsynaptic targets is why cholinesterase inhibitors help early AD.', 's12-ache')
  ]);
  h.facts('nts', 'glutamate', [F('515–518', 'In AD, plaques and tangles may cause a steady glutamate **leak** (partly through loss of GABA interneurons): tonic NMDA activation blurs memory signaling and, at higher levels, kills neurons by **excitotoxicity**.', 's12-memantine')]);
  h.facts('nts', 'serotonin', [F('524–528', 'In dementia psychosis, excitatory **5HT2A** input to glutamate neurons that have lost GABA inhibition drives hallucinations and delusions; pimavanserin blocks it.', 's12-psychosis')]);

  /* ---------------- targets ---------------- */
  h.upsert('targets', { id: 'buche', name: 'Butyrylcholinesterase (BuChE)', short: 'BuChE', family: 'Enzyme', nt: 'acetylcholine',
    summary: 'A second enzyme that hydrolyzes acetylcholine (“pseudocholinesterase”), found mainly in glia in the brain and in plasma, liver and gut. Rivastigmine inhibits it; donepezil does not.',
    block: ['Raises ACh, especially as **gliosis** increases BuChE activity in advancing AD (rivastigmine)'],
    facts: [F('505–506', 'Encoded by a separate gene from AChE with different tissue distribution; in brain mainly **glial**, possibly in **plaques**; takes over ACh breakdown when ACh diffuses to glia.', 's12-ach'), F('510–511', '**Rivastigmine** inhibits BuChE as well as AChE; donepezil spares it.', 's12-ache')] }, { after: 'ache' });
  h.upsert('targets', { id: 'chat', name: 'Choline acetyltransferase (ChAT)', short: 'ChAT', family: 'Enzyme', nt: 'acetylcholine',
    summary: 'The enzyme that synthesizes acetylcholine from choline and acetyl coenzyme A in cholinergic neurons.',
    facts: [F('505', 'Joins **choline** and **acetyl-CoA** (from glucose in mitochondria) to make ACh.', 's12-ach')] }, { after: 'hdc' });
  h.upsert('targets', { id: 'abeta', name: 'Amyloid-β (Aβ)', short: 'Aβ', family: 'Other', ntLabel: 'Pathological protein (Alzheimer disease)',
    summary: 'Peptides of 38–43 amino acids cut from amyloid precursor protein by β- then γ-secretase; Aβ42 aggregates into toxic oligomers and plaques. The target of anti-amyloid antibodies.',
    block: ['Antibody-mediated removal of plaque **modestly slows** decline in early AD (post-2021 approvals); risk of **ARIA**'],
    facts: [
      F('496–497', '**α-secretase** cuts within Aβ (non-amyloidogenic); **β- then γ-secretase** release Aβ. **Aβ40** is most common; **Aβ42** more aggregation-prone and toxic; Aβ43 rarest and most prone.', 's12-amyloid'),
      F('497–499', 'Table 12-6 strategies: antibodies, active immunization, β- and γ-secretase inhibitors, α-secretase promoters, aggregation inhibitors: all **ineffective or unsafe** as of the book.', 's12-amyloid'),
      F('499–502', 'Amyloid PET positive and **CSF Aβ low** in presymptomatic AD; about a quarter of cognitively normal elderly are Aβ-positive.', 's12-stages')
    ] }, { after: 'ghb' });
  h.upsert('targets', { id: 'secretase', name: 'β- and γ-secretase', short: 'Secretases', family: 'Enzyme', ntLabel: 'Amyloid precursor protein processing',
    summary: 'Enzymes that cut amyloid precursor protein: β-secretase then γ-secretase produce Aβ; α-secretase cuts within Aβ and prevents it. Inhibitors have failed in trials.',
    block: ['β- and γ-secretase inhibitors: tested for AD, **ineffective or unsafe**'],
    facts: [F('496–497', 'β-secretase cuts at the amino border of Aβ; γ-secretase then releases Aβ38–43. α-secretase promoters were also tried (Table 12-6).', 's12-amyloid')] }, { after: 'gabat' });
  h.facts('targets', 'ache', [
    F('505–506', 'The **key** enzyme at cholinergic synapses, high in neurons receiving ACh; also in gut, muscle, red cells, lymphocytes and platelets.', 's12-ach'),
    F('509–514', 'Inhibitors (**donepezil**, rivastigmine, galantamine) raise ACh at surviving postsynaptic receptors in early AD, usually **slowing decline**; benefit fades as targets die. Peripheral inhibition causes **GI** effects.', 's12-ache')
  ]);
  h.facts('targets', 'nicotinic', [F('507–509', '**α4β2**: postsynaptic, accumbens DA release (nicotine). **α7**: postsynaptic PFC cognition; presynaptic feed-forward ACh release and heteroreceptors boosting DA and glutamate. **Galantamine** is a nicotinic PAM.', 's12-ach')]);
  h.facts('targets', 'm1', [F('507', 'Key to **memory** in hippocampus and neocortex, where it may facilitate DA release; M1 agonism could help cognition in AD.', 's12-ach')]);
  h.facts('targets', 'm4', [F('506–507', 'Presynaptic inhibitory autoreceptor (also postsynaptic); regulates **VTA** dopamine to reduce psychosis. Xanomeline (M4/M1) could in theory help psychosis and cognition in AD.', 's12-ach')]);
  h.facts('targets', 'm2m3', [F('506–507', '**M2** is an inhibitory presynaptic autoreceptor and heteroreceptor (brakes GABA and glutamate release); **M3** is stimulatory and postsynaptic.', 's12-ach')]);
  h.facts('targets', 'cht', [F('505', 'Recycles **choline** produced by ACh breakdown back into the cholinergic terminal for resynthesis.', 's12-ach')]);
  h.facts('targets', 'nmda', [
    F('515–516', 'A **coincidence detector**: opens with depolarization (removing Mg²⁺), glutamate and glycine. Tonic glutamate leak in AD may cause excitotoxicity.', 's12-memantine'),
    F('516–518', '**Memantine** plugs the open channel at the Mg²⁺ site with low affinity and fast kinetics; **dextromethorphan** is a more robust blocker used for AD agitation.', 's12-memantine')
  ]);
  h.facts('targets', '5ht2a', [F('526–528', 'Blocking 5HT2A on glutamate neurons that lost GABA inhibition reduces dementia psychosis (**pimavanserin**); 5HT2A antagonism also part of **brexpiprazole** for agitation.', 's12-psychosis')]);
  h.facts('targets', 'alpha1', [F('531–533', 'Brexpiprazole’s α1 (and α2C) antagonism on pyramidal dendrites blocks locus coeruleus NE, reducing arousal in **AD agitation**.', 's12-agitation')]);
  h.facts('targets', 'alpha2', [F('531–533', 'Brexpiprazole blocks postsynaptic **α2C** on pyramidal dendrites as part of its anti-agitation action.', 's12-agitation')]);

  /* ---------------- cholinesterase inhibitors ---------------- */
  const DT = 'Dementia treatment';
  const cheiSE = [{ e: 'Nausea, vomiting, diarrhea (usually transient)', via: 'Peripheral AChE inhibition in the gut' }];
  h.upsert('drugs', { id: 'donepezil', name: 'Donepezil', brand: 'Aricept', group: DT, cls: 'Cholinesterase inhibitor', nbn: 'Acetylcholine enzyme inhibitor (AChE)', nts: ['acetylcholine'], chapters: [{ ch: 'ch12', pages: '509–510' }],
    short: 'Reversible, long-acting, AChE-selective cholinesterase inhibitor.',
    mechanism: 'A **reversible, long-acting, selective AChE inhibitor** with no BuChE inhibition. Raises ACh at surviving postsynaptic cholinergic receptors in cortex and hippocampus.',
    targets: [T('ache', 'inhibitor', null, 'Reversible; selective (no BuChE)')],
    uses: ['Cognitive symptoms of **Alzheimer disease**'], sideEffects: cheiSE,
    facts: [F('510', 'Easy to dose; side effects mostly **GI** and transient.', 's12-ache')],
    updates: [{ year: '2022', title: 'A weekly donepezil patch', text: '**Adlarity** (donepezil transdermal system, once weekly) was approved in March 2022; it was later listed as discontinued.', source: 'Drugs.com approval history' }] }, { after: 'memantine' });
  h.upsert('drugs', { id: 'rivastigmine', name: 'Rivastigmine', brand: 'Exelon', group: DT, cls: 'Cholinesterase inhibitor', nbn: 'Acetylcholine enzyme inhibitor (AChE, BuChE)', nts: ['acetylcholine'], chapters: [{ ch: 'ch12', pages: '510–513' }],
    short: 'Pseudoirreversible AChE and BuChE inhibitor; patch available.',
    mechanism: 'A **pseudoirreversible** (reverses over hours), intermediate-acting inhibitor of **AChE and BuChE**, possibly selective for cortical and hippocampal AChE. Glial BuChE inhibition may matter more as gliosis advances.',
    targets: [T('ache', 'inhibitor', null, 'Pseudoirreversible'), T('buche', 'inhibitor', null, 'Glial BuChE')],
    uses: ['Cognitive symptoms of **Alzheimer disease**'], sideEffects: [{ e: 'More GI effects orally than donepezil', via: 'PK profile; peripheral AChE and BuChE inhibition' }],
    facts: [F('510–511', 'Comparable efficacy and safety to donepezil; the **transdermal patch** greatly reduces GI effects by lowering peaks. (The book also calls it “selective for AChE over BuChE”; it is a dual inhibitor.)', 's12-ache')] }, { after: 'donepezil' });
  h.upsert('drugs', { id: 'galantamine', name: 'Galantamine', brand: 'Razadyne', group: DT, cls: 'Cholinesterase inhibitor', nbn: 'Acetylcholine enzyme inhibitor (AChE); nicotinic PAM', nts: ['acetylcholine'], chapters: [{ ch: 'ch12', pages: '514' }],
    short: 'AChE inhibitor and nicotinic positive allosteric modulator.',
    mechanism: 'Inhibits **AChE** and is a **positive allosteric modulator** of nicotinic receptors, theoretically amplifying the extra ACh at nicotinic sites; clinical advantage unproven.',
    targets: [T('ache', 'inhibitor'), T('nicotinic', 'positive allosteric modulator')],
    uses: ['Cognitive symptoms of **Alzheimer disease**'], sideEffects: cheiSE,
    facts: [F('514', 'Found in **snowdrops and daffodils**.', 's12-ache')] }, { after: 'rivastigmine' });

  /* ---------------- memantine ---------------- */
  const mem = h.get('drugs', 'memantine');
  mem.brand = mem.brand || 'Namenda';
  mem.targets = [T('nmda', 'antagonist', null, 'Uncompetitive open-channel block at the Mg²⁺ site; low affinity'), T('sigma', 'binds', null, 'Relevance unclear'), T('5ht3', 'antagonist', null, 'Weak')];
  h.facts('drugs', 'memantine', [
    F('516–518', 'An **uncompetitive, open-channel** NMDA antagonist with low-to-moderate affinity, **voltage dependence** and fast on/off kinetics: blocks tonic excitotoxic glutamate but is expelled by phasic bursts, so learning continues and there are no psychotomimetic effects (“**artificial magnesium**”).', 's12-memantine'),
    F('518', 'Usually given **with** a cholinesterase inhibitor for additive benefit; not effective (or tested) for agitation.', 's12-memantine')
  ]);
  h.chapter('memantine', 'ch12', '515–521, 533');

  /* ---------------- anti-amyloid antibodies ---------------- */
  const AB = 'Anti-amyloid antibody';
  const abFact = F('497–499', 'Anti-amyloid antibodies are listed in Table 12-6 among disease-modifying strategies that had not shown clinical benefit when the book was written.', 's12-status');
  h.upsert('drugs', { id: 'aducanumab', name: 'Aducanumab', brand: 'Aduhelm', group: AB, cls: 'Anti-amyloid monoclonal antibody', nbn: 'Amyloid-β antibody', nts: [], chapters: [{ ch: 'ch12', pages: '497–499' }],
    short: 'First anti-amyloid antibody approved (2021); discontinued 2024.',
    mechanism: 'Monoclonal antibody that binds aggregated **Aβ** and removes plaque.',
    targets: [T('abeta', 'binds', null, 'Aggregated Aβ')], uses: ['Early Alzheimer disease (accelerated approval; discontinued)'], sideEffects: ariaSE, facts: [abFact],
    updates: [{ year: '2021', title: 'Approved, then discontinued', text: 'Accelerated approval on June 7, 2021 based on plaque reduction; Biogen discontinued it on January 31, 2024, citing reasons unrelated to safety or efficacy.', source: 'Drugs.com approval history; Biogen, January 2024' }] }, { after: 'galantamine' });
  h.upsert('drugs', { id: 'lecanemab', name: 'Lecanemab', brand: 'Leqembi; Leqembi Iqlik', group: AB, cls: 'Anti-amyloid monoclonal antibody', nbn: 'Amyloid-β antibody', nts: [], chapters: [{ ch: 'ch12', pages: '497–499' }],
    short: 'Anti-Aβ protofibril antibody for early AD; IV or subcutaneous.',
    mechanism: 'Monoclonal antibody against soluble Aβ **protofibrils** and plaque; clears amyloid and modestly slows decline in early AD.',
    targets: [T('abeta', 'binds', null, 'Protofibrils')], uses: ['**Early Alzheimer disease** (MCI or mild dementia with confirmed amyloid)'], sideEffects: ariaSE, facts: [abFact],
    updates: [{ year: '2023', title: 'Traditional approval and new forms', text: 'Accelerated approval January 6, 2023; traditional approval July 2023; IV maintenance dosing January 2025; subcutaneous autoinjector (Leqembi Iqlik) for maintenance August 2025 and for starting treatment July 2026. Boxed warning for ARIA; test APOE4 before treatment.', source: 'Drugs.com approval history; Eisai/Biogen, July 2026' }] }, { after: 'aducanumab' });
  h.upsert('drugs', { id: 'donanemab', name: 'Donanemab', brand: 'Kisunla', group: AB, cls: 'Anti-amyloid monoclonal antibody', nbn: 'Amyloid-β antibody', nts: [], chapters: [{ ch: 'ch12', pages: '497–499' }],
    short: 'Anti-plaque antibody for early AD; can stop after plaque clearance.',
    mechanism: 'Monoclonal antibody against a modified form of Aβ in **deposited plaque**; treatment can stop once plaque is cleared.',
    targets: [T('abeta', 'binds', null, 'Plaque-deposited Aβ')], uses: ['**Early symptomatic Alzheimer disease**'], sideEffects: ariaSE, facts: [abFact],
    updates: [{ year: '2024', title: 'Donanemab approved', text: 'Approved July 2, 2024 for early symptomatic AD, IV every 4 weeks; boxed warning for ARIA; label updated with modified titration in July 2025.', source: 'Drugs.com approval history; Eli Lilly' }] }, { after: 'lecanemab' });

  /* ---------------- psychosis and agitation drugs ---------------- */
  h.facts('drugs', 'pimavanserin', [F('526–528', 'In dementia psychosis it blocks excitatory **5HT2A** input to surviving glutamate neurons that lost GABA inhibition, normalizing visual cortex (hallucinations) and VTA dopamine (delusions) output. Approved for PD psychosis.', 's12-psychosis')]);
  h.chapter('pimavanserin', 'ch12', '524–528');
  h.facts('drugs', 'brexpiprazole', [F('530–533', 'For AD agitation: **D2 and 5HT1A partial agonism**, **5HT2A** antagonism and **α1/α2C** antagonism act synergistically on the agitation network; lower doses than for schizophrenia.', 's12-agitation')]);
  h.chapter('brexpiprazole', 'ch12', '530–533');
  h.facts('drugs', 'dextromethorphan', [
    F('533–534', 'A more robust NMDA antagonist than memantine; with **bupropion** (CYP2D6 inhibitor) it blocks NMDA receptors across the agitation network (cortex, thalamus, amygdala, VTA, LC) for **AD agitation**.', 's12-agitation'),
    F('535–536', 'With **quinidine**, approved for **pseudobulbar affect** (NMDA and σ actions).', 's12-pba-apathy')
  ]);
  h.chapter('dextromethorphan', 'ch12', '533–536');
  h.facts('drugs', 'quinidine', [F('534–536', 'Combined with dextromethorphan for **pseudobulbar affect**, by inhibiting CYP2D6.', 's12-pba-apathy')]);
  h.chapter('quinidine', 'ch12', '534–536');
  h.facts('drugs', 'bupropion', [F('533–537', 'Boosts dextromethorphan via **CYP2D6** inhibition for AD agitation; also suggested for **apathy** as a pro-dopaminergic agent.', 's12-agitation')]);
  h.chapter('bupropion', 'ch12', '533–537');
  h.facts('drugs', 'xanomeline', [F('507', 'As an M4/M1 agonist it could theoretically reduce both psychotic and cognitive symptoms in AD.', 's12-ach')]);
  h.chapter('xanomeline', 'ch12', '507');
  h.facts('drugs', 'carbamazepine', [F('530', 'Perhaps the most effective unapproved drug for neuropsychiatric symptoms of dementia, but side effects and **drug interactions** limit it in the elderly.', 's12-agitation')]);
  h.chapter('carbamazepine', 'ch12', '530');
  ['risperidone', 'olanzapine', 'aripiprazole', 'haloperidol'].forEach(id => { h.facts('drugs', id, [F('524', 'Used cautiously **off-label** for agitation/psychosis in dementia despite the boxed warning for stroke and death.', 's12-d2')]); h.chapter(id, 'ch12', '524'); });
  h.facts('drugs', 'quetiapine', [F('524', 'The book does **not** list quetiapine among the D2 blockers used off-label in dementia.', 's12-d2')]);
  h.facts('drugs', 'trazodone', [F('535', 'In dementia, low-dose nightly trazodone (half-life **6–8 h**) improves sleep without daytime effects; may help behavior in **FTD** more than AD.', 's12-depression')]);
  h.chapter('trazodone', 'ch12', '535');
  h.facts('drugs', 'citalopram', [F('534–535', 'Limited efficacy for depression in dementia; may help **agitation**, but prolongs **QT**.', 's12-depression')]);
  h.chapter('citalopram', 'ch12', '534–535');
  h.facts('drugs', 'escitalopram', [F('534–535', 'May match citalopram in dementia without **QT** prolongation; SSRIs/SNRIs may help apathy in FTD.', 's12-depression')]);
  h.chapter('escitalopram', 'ch12', '534–537');
  h.facts('drugs', 'levodopa', [F('509, 537', 'Cholinesterase inhibitors are compared to levodopa in PD (boosting transmitter at surviving targets); levodopa is also suggested for **apathy**.', 's12-ache')]);

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch12', pages });
  db.circuits.push(
    C('dem-memory', 'Dementia', 'Memory and cognitive decline', '**Basal forebrain** cholinergic projections → neocortex and hippocampus; glutamate excitotoxicity', ['Acetylcholine (deficit)', 'Glutamate (excess)'], ['[[drug:donepezil|Donepezil]], [[drug:rivastigmine|rivastigmine]], [[drug:galantamine|galantamine]]', '[[drug:memantine|Memantine]], often combined', 'Early AD: anti-amyloid antibodies ([[drug:lecanemab|lecanemab]], [[drug:donanemab|donanemab]]; post-2021)'], '505–521'),
    C('dem-psychosis', 'Dementia', 'Delusions and hallucinations (dementia-related psychosis)', 'Loss of cortical **GABA interneurons** → 5HT2A-driven glutamate → visual cortex (hallucinations) and **VTA → striatum** (delusions)', ['Serotonin', 'Glutamate', 'Dopamine', 'GABA (deficit)'], ['[[drug:pimavanserin|Pimavanserin]] (approved for PD psychosis)', 'D2 blockers off-label, with **stroke/death** warning', 'Non-drug care first'], '524–528'),
    C('dem-agitation', 'Dementia', 'Agitation and aggression', 'Loss of **top-down** cortical inhibition; failed thalamic filter (cortex → striatum → GABA → thalamus); amygdala → VTA, LC, cortex', ['Glutamate', 'Norepinephrine', 'Dopamine', 'Serotonin'], ['Treat pain and triggers first', '[[drug:brexpiprazole|Brexpiprazole]] (2023)', '[[drug:dextromethorphan|Dextromethorphan]]–bupropion (2026)', 'SSRIs/SNRIs; β blockers, carbamazepine'], '528–534'),
    C('dem-apathy', 'Dementia', 'Apathy (ABC model)', 'Affective: **VMPFC/OFC**; behavioral: **motor/DMPFC**; cognitive: **DLPFC**, all linked to basal ganglia reward centers', ['Dopamine', 'Acetylcholine'], ['Cholinesterase inhibitors (first consideration in AD)', '[[drug:bupropion|Bupropion]], levodopa, stimulants', 'SSRIs/SNRIs in FTD'], '536–537'),
    C('dem-pba', 'Dementia and neurological disease', 'Pseudobulbar affect (pathological laughing and crying)', 'Disrupted **top-down** control of emotional expression', ['Glutamate', 'Serotonin'], ['[[drug:dextromethorphan|Dextromethorphan]]–[[drug:quinidine|quinidine]]', 'SSRIs off-label'], '535–536')
  );
};
