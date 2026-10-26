// Chapter 10 library enrichment: histamine and orexin networks, hypnotics and wake-promoting agents.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch10', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };

  /* ---------------- neurotransmitters ---------------- */
  h.set('nts', 'histamine', {
    synthesis: [['Histidine', 'Taken up by a **histidine transporter**'], ['Histamine', '**Histidine decarboxylase (HDC)**; packaged into vesicles']],
    pathways: [{ name: 'Tuberomammillary', route: '**TMN** (hypothalamus) → prefrontal cortex, basal forebrain, thalamus, brainstem centers, VLPO, lateral hypothalamus, spinal cord', role: '**Arousal** and wakefulness; inhibits VLPO GABA by day' }],
    roles: ['A key **wake-promoting** neurotransmitter of the ascending arousal system', 'Ultimate target of many wake-promoting drugs (↑ release) and hypnotics (H1 blockade)']
  });
  h.push('nts', 'histamine', 'termination', ['**Histamine N-methyltransferase** → N-methylhistamine, then **MAO-B** → inactive **N-MIAA**; diamine oxidase outside the brain (Chapter 10)', 'With no reuptake pump, histamine **diffuses widely**, like dopamine in the PFC']);
  h.facts('nts', 'histamine', [F('402–406', 'Receptors: **H1** (postsynaptic, PI/cFOS, wakefulness), **H2** (cAMP/PKA/CREB, brain role unclear), **H3** (presynaptic autoreceptor), H4 (not in brain), and the **NMDA polyamine site**.', 's10-histamine')]);
  h.set('nts', 'orexin', {
    aka: ['Hypocretin'],
    summary: 'Orexin A and B (hypocretins) are excitatory hypothalamic peptides that stabilize wakefulness by driving every arousal neurotransmitter; their loss causes narcolepsy with cataplexy.',
    synthesis: [['Prepro-orexin', 'One precursor protein (gene **HCRT**)'], ['Orexin A (33 aa) and orexin B (28 aa)', 'Cleaved peptides with ~50% sequence identity']],
    pathways: [{ name: 'Lateral hypothalamic', route: 'Lateral, perifornical and posterior **hypothalamus** → TMN, basal forebrain, thalamus, LC, raphe, VTA, PPT/LDT and widely', role: '**Stabilizes wakefulness**; feeding, motivation, reward' }],
    roles: ['Stabilizes wakefulness through histamine, ACh, DA, NE and 5HT release', '**Tonic** firing maintains arousal; **phasic** bursts drive adaptive behavior (feeding, thermogenesis, breathing, HPA activation, drug seeking)', 'Stabilizes **motor tone** by day']
  });
  h.push('nts', 'orexin', 'clinical', ['**Narcolepsy with cataplexy**: loss of orexin neurons', 'DORAs block orexin receptors to treat insomnia']);
  h.facts('nts', 'orexin', [F('406–413', 'Orexin A binds **OX1 and OX2**; orexin B only **OX2**. OX1 is high in the locus coeruleus, OX2 in the TMN. Levels fall early in sleep, plateau, then rise before waking.', 's10-orexin')]);
  h.facts('nts', 'gaba', [F('408–414', 'GABA from the **VLPO** is the sleep switch; GABA rises through the first hours of sleep and declines before waking.', 's10-sleepwake')]);
  h.facts('nts', 'acetylcholine', [F('410–414', 'Orexin releases ACh from the **basal forebrain** (cortex) and **PPT/LDT** (thalamus); ACh is lowest in stage 4 and peaks in **REM**.', 's10-ultradian')]);
  h.facts('nts', 'melatonin', [F('438–440', 'Melatonin acts at MT1 (SCN inhibition, sleep), MT2 (**phase shifting**) and the “MT3” enzyme site; evening melatonin corrects delayed phase, morning melatonin advanced phase.', 's10-circadian')]);
  h.facts('nts', 'dopamine', [F('440–444', 'Most wake-promoting drugs raise **dopamine** (stimulants, modafinil, solriamfetol; caffeine indirectly via adenosine–D2 coupling).', 's10-caffeine-stimulants')]);

  /* ---------------- targets ---------------- */
  h.upsert('targets', { id: 'h2', name: 'Histamine H2 receptor', short: 'H2', family: 'G-protein-linked receptor', nt: 'histamine',
    summary: 'Postsynaptic receptor (cAMP/PKA/CREB) best known for gastric acid secretion; its brain role is unclear and not directly linked to wakefulness.',
    facts: [F('402–404', 'Target of anti-ulcer drugs; present in brain but **not directly** linked to wakefulness.', 's10-histamine')] }, { after: 'h1' });
  h.upsert('targets', { id: 'adenosine', name: 'Adenosine receptors', short: 'Adenosine-R', family: 'G-protein-linked receptor', ntLabel: 'Adenosine (purine)',
    summary: 'Receptors for adenosine, which accumulates with wakefulness (homeostatic sleep drive) and heterodimerizes with D2 receptors to reduce their dopamine affinity. Caffeine blocks them.',
    block: ['**Wake promotion** and less fatigue (caffeine)'],
    facts: [F('408, 440–441', 'Adenosine is the “**accountant**” of fatigue; adenosine–D2 heterodimers lower D2 affinity for DA, and **caffeine** restores it.', 's10-caffeine-stimulants')] }, { after: 'h3' });
  h.upsert('targets', { id: 'ghb', name: 'GHB receptor', short: 'GHB-R', family: 'Other', ntLabel: 'γ-Hydroxybutyrate (formed from GABA)',
    summary: 'The receptor for naturally occurring γ-hydroxybutyrate; sodium oxybate is a full agonist here.',
    facts: [F('446–447', 'GHB is a natural brain product formed from GABA with its own receptors; sodium oxybate is a **full agonist** at them.', 's10-oxybate')] });
  h.upsert('targets', { id: 'hdc', name: 'Histidine decarboxylase (HDC)', short: 'HDC', family: 'Enzyme', nt: 'histamine',
    summary: 'The enzyme that makes histamine from histidine.',
    facts: [F('402–404', 'Converts histidine to histamine in TMN neurons.', 's10-histamine')] }, { after: 'gad' });
  h.facts('targets', 'h1', [F('402–404, 425–426', 'H1 → PI → **cFOS**: wakefulness and alertness. **Diphenhydramine** (with M1 block) and low-dose **doxepin** (selective) are H1-antagonist hypnotics; ~80% occupancy may be needed for sleep.', 's10-arousal-blockers')]);
  h.facts('targets', 'h3', [F('404, 444–446', 'Presynaptic **autoreceptor** gatekeeper: histamine binding turns off release. **Pitolisant** blocks it to release histamine for narcolepsy.', 's10-newer')]);
  h.push('targets', 'h3', 'block', ['**Pitolisant**: approved for narcolepsy (Chapter 10)']);
  h.set('targets', 'ox', { summary: 'Receptors for orexin A and B. OX1 (orexin A only) is high in the locus coeruleus; OX2 (orexin A and B) is high in the TMN and carries most of orexin’s wake effect. Antagonists (DORAs) are hypnotics.' });
  h.facts('targets', 'ox', [
    F('407–408', '**OX1**: ↑ calcium, Na/Ca exchanger. **OX2**: ↑ NMDA expression, GIRK inactivation.', 's10-orexin'),
    F('423–424, 428–430', '**DORAs** (suvorexant: OX1 = OX2; lemborexant: OX2 > OX1) need about **65%** occupancy; endogenous orexin competes with them.', 's10-dora')
  ]);
  h.facts('targets', 'gabaa', [F('421–423', 'Hypnotic GABA-A PAMs need about **25–30%** occupancy. **α1** = sedation, amnesia, tolerance; α2/α3 = anxiolysis, muscle relaxation; α5 = cognition. Zolpidem and zaleplon are α1-selective.', 's10-gaba-hypnotics')]);
  h.facts('targets', 'gabab', [F('446–447', '**Sodium oxybate** is a GABA-B **partial agonist** (antagonist when GABA is high, agonist when low), improving slow-wave sleep and cataplexy.', 's10-oxybate')]);
  h.facts('targets', 'mt1mt2', [F('439–440', '**MT1** inhibition of SCN neurons may promote sleep; **MT2** mediates phase shifting. Ramelteon (insomnia) and tasimelteon (non-24) are MT1/MT2 agonists.', 's10-circadian')]);
  h.facts('targets', 'dat', [F('442–444', 'Modafinil/armodafinil: weak affinity but high levels give slow, sustained, **incomplete** DAT occupancy that raises **tonic** DA for wakefulness.', 's10-modafinil')]);
  h.facts('targets', '5ht2a', [F('424–425', '5HT2A antagonism (trazodone) specifically enhances **slow-wave** sleep.', 's10-arousal-blockers')]);
  h.facts('targets', 'mao', [F('403', '**MAO-B** converts N-methylhistamine to inactive N-MIAA.', 's10-histamine')]);
  h.facts('targets', 'nmda', [F('404–406', 'Histamine can act at the NMDA **polyamine** allosteric site; OX2 stimulation increases NMDA receptor expression.', 's10-histamine')]);

  /* ---------------- drugs: existing ---------------- */
  const zf = (id, txt, pages) => { h.facts('drugs', id, [F(pages, txt, 's10-gaba-hypnotics')]); h.chapter(id, 'ch10', pages); };
  h.set('drugs', 'zolpidem', { brand: 'Ambien; Ambien CR', targets: [T('gabaa', 'positive allosteric modulator', null, 'α1-selective; benzodiazepine-sensitive receptors')] });
  zf('zolpidem', '**α1-selective**. IR lasts ~2–4 h (too cold: early waking); **CR** extends to 6–8 h (just right); low-dose **sublingual** form for middle-of-the-night waking.', '422–423, 427–428');
  h.set('drugs', 'zaleplon', { brand: 'Sonata', targets: [T('gabaa', 'positive allosteric modulator', null, 'α1-selective')] });
  zf('zaleplon', '**α1-selective**, ultra-short (1–3 h): good for onset, may lose maintenance.', '422, 428');
  h.set('drugs', 'zopiclone', { targets: [T('gabaa', 'positive allosteric modulator', null, 'α1, α2, α3, α5 (not α1-selective)')] });
  zf('zopiclone', 'Racemic R + S zopiclone, available outside the US; binds α1, α2, α3 and α5 like benzodiazepines. (Figure 10-34 labels it “Stilnox,” a zolpidem brand.)', '422–423');
  h.set('drugs', 'eszopiclone', { brand: 'Lunesta', targets: [T('gabaa', 'positive allosteric modulator', null, 'α1, α2, α3, α5')] });
  zf('eszopiclone', 'The **S enantiomer** of zopiclone, available in the US; about 8 h above threshold (“just right”).', '422–423, 427');
  h.facts('drugs', 'doxepin', [F('425–427', 'At **1–6 mg** a relatively **selective H1 antagonist** hypnotic without anticholinergic or reuptake actions (antidepressant dose 150–300 mg); used in trace doses as an H1 PET ligand.', 's10-arousal-blockers')]);
  h.push('drugs', 'doxepin', 'uses', ['**Insomnia** at low doses (1–6 mg)']);
  h.chapter('doxepin', 'ch10', '425–427');
  h.facts('drugs', 'trazodone', [F('424–425', 'The **most commonly prescribed** sleep agent worldwide (not approved for insomnia); reduces arousal by blocking 5HT2A, α1 and H1; no tolerance, withdrawal, dependence or rebound.', 's10-arousal-blockers')]);
  h.chapter('trazodone', 'ch10', '424–425, 427');
  ['gabapentin', 'pregabalin'].forEach(id => { h.facts('drugs', id, [F('426', 'Used off-label for sleep: not very sedating, but enhances **slow-wave**, restorative sleep and helps pain.', 's10-arousal-blockers')]); h.chapter(id, 'ch10', '426'); });
  ['diazepam', 'alprazolam'].forEach(id => h.facts('drugs', id, [F('421–422', 'Benzodiazepines approved for anxiety are often used for insomnia; as hypnotics they are second line (tolerance, withdrawal, **rebound insomnia**).', 's10-gaba-hypnotics')]));
  h.facts('drugs', 'agomelatine', [F('439–440', 'Also an MT1/MT2 agonist acting on circadian rhythms (Figure 10-57).', 's10-circadian')]);
  h.chapter('agomelatine', 'ch10', '439–440');
  ['mirtazapine', 'chlorpromazine', 'quetiapine'].forEach(id => { h.facts('drugs', id, [F('425, 428', 'Sedating via H1 (with other) blockade; mirtazapine and chlorpromazine fall in the “still too hot” (hangover) category of Figure 10-41C.', 's10-pk')]); h.chapter(id, 'ch10', '425, 428'); });
  h.set('drugs', 'modafinil', { brand: 'Provigil', mechanism: 'Racemic wake-promoting agent acting mainly as a **DAT inhibitor**: weak affinity but high plasma levels give slow, sustained (6–8 h), incomplete DAT occupancy that raises **tonic** dopamine, then downstream **histamine** (TMN) and **orexin** release. Works even without orexin neurons.' });
  h.push('drugs', 'modafinil', 'uses', ['**Narcolepsy**; adjunct for **OSA**; **shift work disorder** (approved)']);
  h.facts('drugs', 'modafinil', [F('442–444', 'Possibly less powerful than stimulants in narcolepsy but with much lower abuse potential; often needs a second daily dose.', 's10-modafinil')]);
  h.chapter('modafinil', 'ch10', '442–444');
  h.set('drugs', 'armodafinil', { mechanism: 'The **R enantiomer** of modafinil: a DAT inhibitor with later peak, longer half-life and higher plasma levels 6–14 h after dosing, possibly avoiding a second daily dose.', targets: [T('dat', 'inhibitor')] });
  h.push('drugs', 'armodafinil', 'uses', ['**Narcolepsy**; adjunct for **OSA**; **shift work disorder** (approved)']);
  h.chapter('armodafinil', 'ch10', '442–444');
  ['amphetamine', 'methylphenidate'].forEach(id => { h.facts('drugs', id, [F('441–442', 'Approved for sleepiness in **narcolepsy** (not OSA or shift work, used off-label); highly effective but controlled (abuse, diversion, psychosis, mania, hypertension).', 's10-caffeine-stimulants')]); h.chapter(id, 'ch10', '441–442'); });
  h.set('drugs', 'sodium-oxybate', { mechanism: '**Full agonist at GHB receptors** and **partial agonist at GABA-B** receptors (antagonist when GABA is high, agonist when low). Increases **slow-wave sleep** and reduces cataplexy via GABA-B, so patients sleep so well at night they are less sleepy by day.', targets: [T('ghb', 'full agonist'), T('gabab', 'partial agonist')] });
  h.set('drugs', 'sodium-oxybate', { uses: ['**Cataplexy** and **excessive sleepiness** in narcolepsy (approved); reduces hypnagogic hallucinations and sleep paralysis', 'Alcoholism (some European countries)', 'Severe, treatment-resistant **fibromyalgia** in expert hands (heroic cases)'] });
  h.push('drugs', 'sodium-oxybate', 'sideEffects', [{ e: '“Date rape” misuse with alcohol (sedation, amnesia); abuse by athletes for growth hormone surge', via: 'Profound sedation; slow-wave sleep' }]);
  h.push('drugs', 'sodium-oxybate', 'updates', [{ year: '2023', title: 'Once-nightly formulation', text: 'Lumryz, an extended-release sodium oxybate taken once at bedtime, was approved in May 2023 for cataplexy or excessive daytime sleepiness in adults with narcolepsy.', source: 'FDA approval reported May 1, 2023 (NeurologyLive)' }]);
  h.chapter('sodium-oxybate', 'ch10', '446–448');

  /* ---------------- drugs: new ---------------- */
  const BZ = 'Benzodiazepine', bzNbn = 'GABA-A positive allosteric modulator (benzodiazepine site)';
  const bzSE = [{ e: 'Tolerance, withdrawal, **rebound insomnia**', via: 'Adaptation of α1 GABA-A receptors' }, { e: 'Sedation, amnesia, falls', via: 'α1 GABA-A PAM action' }];
  const bz = (id, name, brand, hl, cat, after) => h.upsert('drugs', { id, name, brand, group: BZ, cls: 'Benzodiazepine hypnotic', nbn: bzNbn, nts: ['gaba'], chapters: [{ ch: 'ch10', pages: '421–423, 427–428' }],
    short: 'Benzodiazepine approved for insomnia; half-life ' + hl + '.',
    mechanism: 'A nonselective **GABA-A PAM** (α1, α2, α3, α5) at benzodiazepine-sensitive receptors, facilitating GABA in VLPO sleep circuits. Half-life in Figure 10-33: **' + hl + '**.',
    targets: [T('gabaa', 'positive allosteric modulator', null, 'Nonselective α1, α2, α3, α5')], uses: ['**Insomnia** (second line; severe or resistant cases)'], sideEffects: bzSE,
    facts: [F('423, 427–428', 'In the Goldilocks figure: ' + cat + '.', 's10-pk')] }, { after });
  bz('flurazepam', 'Flurazepam', 'Dalmane', '2–6 days', '“**way too hot**”: accumulation and falls', 'alprazolam');
  bz('quazepam', 'Quazepam', 'Doral', '2–5 days', '“**way too hot**”: accumulation and falls', 'flurazepam');
  bz('triazolam', 'Triazolam', 'Halcion', '1–2 hours', '“**too cold**”: may lose sleep maintenance', 'quazepam');
  bz('estazolam', 'Estazolam', 'ProSom', '12–30 hours', '“**still too hot**”: possible hangover', 'triazolam');
  bz('temazepam', 'Temazepam', 'Restoril', '4–20 hours', '“**still too hot**”: possible hangover', 'estazolam');

  const DORA = 'Orexin antagonist', doraNbn = 'Orexin OX1/OX2 receptor antagonist';
  const doraSE = [{ e: 'No dependence, withdrawal, rebound, falls, amnesia or respiratory depression (compared with GABA-A PAMs)', via: 'Reduces arousal rather than enhancing GABA' }, { e: 'Morning carryover in some patients (lower the dose)', via: 'Residual orexin blockade' }];
  h.upsert('drugs', { id: 'suvorexant', name: 'Suvorexant', brand: 'Belsomra', group: DORA, cls: 'Dual orexin receptor antagonist (DORA)', nbn: doraNbn, nts: ['orexin'], chapters: [{ ch: 'ch10', pages: '423–424, 427–430' }],
    short: 'DORA with comparable OX1 and OX2 affinity.',
    mechanism: 'A reversible, competitive antagonist with **comparable affinity for OX1 and OX2**; blocks orexin’s stabilization of wakefulness so the patient sleeps. Orexin rising in the morning reverses the block.',
    targets: [T('ox', 'antagonist', null, 'OX1 = OX2')], uses: ['**Insomnia**: sleep onset and maintenance'], sideEffects: doraSE }, { after: 'zaleplon' });
  h.upsert('drugs', { id: 'lemborexant', name: 'Lemborexant', brand: 'Dayvigo', group: DORA, cls: 'Dual orexin receptor antagonist (DORA)', nbn: doraNbn, nts: ['orexin'], chapters: [{ ch: 'ch10', pages: '423–424, 427–430' }],
    short: 'DORA with higher OX2 affinity and fast kinetics.',
    mechanism: 'A reversible DORA with **higher affinity for OX2 than OX1** and much **faster association/dissociation** at OX2, perhaps reversing faster as morning orexin rises.',
    targets: [T('ox', 'antagonist', null, 'OX2 > OX1')], uses: ['**Insomnia**: sleep onset and maintenance'], sideEffects: doraSE }, { after: 'suvorexant' });
  h.upsert('drugs', { id: 'daridorexant', name: 'Daridorexant', brand: 'Quviviq', group: DORA, cls: 'Dual orexin receptor antagonist (DORA)', nbn: doraNbn, nts: ['orexin'], chapters: [{ ch: 'ch10', pages: '424' }],
    short: 'DORA in development at publication; later approved for insomnia.',
    mechanism: 'A dual orexin receptor antagonist mentioned in the book as in development.',
    targets: [T('ox', 'antagonist')], uses: ['Insomnia'],
    updates: [{ year: '2022', title: 'Approved for insomnia', text: 'Approved by the FDA in January 2022 (25 and 50 mg) for adults with insomnia with difficulty in sleep onset and/or maintenance.', source: 'Idorsia, January 10, 2022' }] }, { after: 'lemborexant' });
  h.upsert('drugs', { id: 'diphenhydramine', name: 'Diphenhydramine', brand: 'Benadryl', group: 'Antihistamine', cls: 'Sedating antihistamine', nbn: 'Histamine H1 and muscarinic M1 receptor antagonist', nts: ['histamine', 'acetylcholine'], chapters: [{ ch: 'ch10', pages: '425–426' }],
    short: 'OTC antihistamine sleep aid that also blocks M1.',
    mechanism: 'Blocks **H1** (sedation) and also **M1** receptors.',
    targets: [T('h1', 'antagonist'), T('m1', 'antagonist')], uses: ['Over-the-counter **sleep aid**; allergies'],
    sideEffects: [{ e: 'Blurred vision, constipation, memory problems, dry mouth', via: 'M1 antagonism' }, { e: 'Sedation', via: 'H1 antagonism' }] }, { after: 'hydroxyzine' });
  h.upsert('drugs', { id: 'doxylamine', name: 'Doxylamine', group: 'Antihistamine', cls: 'Sedating antihistamine', nbn: 'Histamine H1 receptor antagonist', nts: ['histamine'], chapters: [{ ch: 'ch10', pages: '425' }],
    short: 'OTC antihistamine sleep aid.', mechanism: 'A sedating **H1 antagonist** used in over-the-counter sleep aids.',
    targets: [T('h1', 'antagonist')], uses: ['Over-the-counter **sleep aid**'] }, { after: 'diphenhydramine' });
  const MEL = 'Melatonergic agent';
  h.upsert('drugs', { id: 'ramelteon', name: 'Ramelteon', brand: 'Rozerem', group: MEL, cls: 'Melatonin MT1/MT2 agonist', nbn: 'Melatonin MT1/MT2 receptor agonist', nts: ['melatonin'], chapters: [{ ch: 'ch10', pages: '428, 439–440' }],
    short: 'MT1/MT2 agonist for sleep-onset insomnia.', mechanism: '**MT1/MT2 agonist**; improves **sleep onset** (sometimes better after several days), not maintenance; short time above threshold.',
    targets: [T('mt1mt2', 'agonist')], uses: ['**Insomnia** (sleep onset)'] }, { after: 'doxylamine' });
  h.upsert('drugs', { id: 'tasimelteon', name: 'Tasimelteon', brand: 'Hetlioz', group: MEL, cls: 'Melatonin MT1/MT2 agonist', nbn: 'Melatonin MT1/MT2 receptor agonist', nts: ['melatonin'], chapters: [{ ch: 'ch10', pages: '439–440' }],
    short: 'MT1/MT2 agonist for non-24-hour sleep–wake disorder.', mechanism: 'A powerful **MT1/MT2 agonist**; MT2 action retrains the circadian clock.',
    targets: [T('mt1mt2', 'agonist')], uses: ['**Non-24-hour sleep–wake disorder** (mostly in the blind)'] }, { after: 'ramelteon' });
  h.upsert('drugs', { id: 'caffeine', name: 'Caffeine', group: 'Wake-promoting agent', cls: 'Adenosine receptor antagonist', nbn: 'Adenosine receptor antagonist', nts: ['dopamine'], chapters: [{ ch: 'ch10', pages: '440–441' }],
    short: 'The world’s most used psychoactive drug: an adenosine antagonist.',
    mechanism: 'Blocks **adenosine** receptors. Adenosine (the “accountant” of fatigue) heterodimerizes its receptors with **D2** receptors and lowers their dopamine affinity; caffeine restores it, enhancing DA action.',
    targets: [T('adenosine', 'antagonist')], uses: ['Wake promotion; reduces fatigue'] }, { after: 'armodafinil' });
  h.upsert('drugs', { id: 'solriamfetol', name: 'Solriamfetol', brand: 'Sunosi', group: 'Wake-promoting agent', cls: 'Wake-promoting NDRI', nbn: 'Norepinephrine and dopamine reuptake inhibitor (NET/DAT)', nts: ['norepinephrine', 'dopamine'], chapters: [{ ch: 'ch10', pages: '444' }],
    short: 'Wake-promoting NDRI for narcolepsy and OSA.',
    mechanism: 'An **NE and DA reuptake inhibitor**: more potent than bupropion, less potent but more tolerable and **less abusable** than stimulants; short half-life wears off by bedtime.',
    targets: [T('dat', 'inhibitor'), T('net', 'inhibitor')], uses: ['Sleepiness in **narcolepsy**', 'Adjunct for sleepiness in **OSA**'] }, { after: 'caffeine' });
  h.upsert('drugs', { id: 'pitolisant', name: 'Pitolisant', brand: 'Wakix', group: 'Wake-promoting agent', cls: 'H3 antagonist', nbn: 'Histamine H3 receptor antagonist', nts: ['histamine'], chapters: [{ ch: 'ch10', pages: '444–446' }],
    short: 'H3 autoreceptor antagonist for narcolepsy; not controlled.',
    mechanism: 'Blocks presynaptic **H3 autoreceptors**, disinhibiting **histamine release** to promote wakefulness.',
    targets: [T('h3', 'antagonist')], uses: ['Sleepiness in **narcolepsy**; anecdotally cataplexy', 'In testing for OSA sleepiness (at publication)'],
    sideEffects: [{ e: 'Overactivation: anxiety, insomnia', via: 'Histamine release' }, { e: 'No known abuse potential; not a controlled substance', via: '—' }],
    facts: [F('446', 'About as effective as modafinil, perhaps less than stimulants.', 's10-newer')],
    updates: [{ year: '2024', title: 'Pediatric approval', text: 'Approved in June 2024 for excessive daytime sleepiness in children aged 6 and older with narcolepsy.', source: 'Harmony Biosciences, June 24, 2024' }] }, { after: 'solriamfetol' });
  h.upsert('drugs', { id: 'oveporexton', name: 'Oveporexton', brand: 'Orzeyful', group: 'Wake-promoting agent', cls: 'Orexin 2 receptor agonist', nbn: 'Orexin OX2 receptor agonist', nts: ['orexin'], chapters: [{ ch: 'ch10', pages: '444–446' }],
    short: 'First orexin receptor agonist (post-publication), for narcolepsy type 1.',
    mechanism: 'Not in the book: an oral **OX2 agonist** that replaces the missing orexin signal in narcolepsy type 1. Listed here because Chapter 10 explains why orexin loss causes narcolepsy.',
    targets: [T('ox', 'agonist', null, 'OX2-selective')], uses: ['Narcolepsy type 1 (adults)'],
    updates: [{ year: '2026', title: 'Approved for narcolepsy type 1', text: 'Approved by the FDA on August 5, 2026 for adults with narcolepsy type 1; phase 3 trials improved sleepiness, cataplexy and quality of life; insomnia and urinary frequency were common.', source: 'Takeda, August 5, 2026 (AJMC)' }] }, { after: 'pitolisant' });

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch10', pages });
  db.circuits.push(
    C('sleep-insomnia-onset', 'Insomnia', 'Difficulty falling asleep (nighttime hyperarousal)', 'Arousal centers fail to switch off (TMN, LC, raphe, basal forebrain, lateral hypothalamus)', ['Histamine', 'Orexin', 'Norepinephrine', 'Serotonin', 'GABA'], ['Reduce arousal: DORAs, low-dose [[drug:doxepin|doxepin]], [[drug:trazodone|trazodone]]', 'Enhance sleep drive: Z drugs', '[[drug:ramelteon|Ramelteon]] for onset', 'CBT-I, sleep hygiene'], '418–430'),
    C('sleep-insomnia-maintenance', 'Insomnia', 'Waking during the night or too early', 'Hypnotic falls below threshold too soon; arousal returns', ['GABA', 'Orexin', 'Histamine'], ['~8 h above threshold: [[drug:eszopiclone|eszopiclone]], [[drug:zolpidem|zolpidem]] CR, [[drug:suvorexant|suvorexant]], [[drug:lemborexant|lemborexant]], low-dose doxepin', 'Sublingual zolpidem for middle-of-the-night waking'], '426–430'),
    C('sleep-eds', 'Excessive daytime sleepiness', 'Daytime sleepiness (deficient arousal)', 'Ascending arousal system: TMN, VTA, LC, raphe, basal forebrain', ['Dopamine', 'Histamine', 'Norepinephrine', 'Orexin'], ['Treat cause (sleep deprivation, OSA, circadian)', '[[drug:modafinil|Modafinil]]/[[drug:armodafinil|armodafinil]], [[drug:solriamfetol|solriamfetol]], [[drug:pitolisant|pitolisant]], stimulants'], '430–446'),
    C('sleep-cataplexy', 'Narcolepsy', 'Cataplexy (emotion-triggered loss of tone)', 'Loss of **lateral hypothalamic orexin** neurons; REM motor inhibition intrudes', ['Orexin', 'GABA'], ['[[drug:sodium-oxybate|Sodium oxybate]] (GABA-B partial agonist)', 'Pitolisant (anecdotal)'], '433–435, 446–448'),
    C('sleep-delayed-phase', 'Circadian rhythm disorders', 'Delayed sleep phase (late sleep and waking)', '**Suprachiasmatic nucleus** clock (CLOCK gene)', ['Melatonin'], ['Morning bright light', 'Evening melatonin'], '435–440'),
    C('sleep-advanced-phase', 'Circadian rhythm disorders', 'Advanced sleep phase (early sleep and waking)', '**Suprachiasmatic nucleus** clock (PER2 gene)', ['Melatonin'], ['Early evening bright light', 'Early morning melatonin'], '435–440'),
    C('sleep-shiftwork', 'Circadian rhythm disorders', 'Sleepy on shift, insomnia after', 'Clock misaligned with work schedule', ['Dopamine', 'Melatonin'], ['[[drug:modafinil|Modafinil]]/[[drug:armodafinil|armodafinil]]', 'Timed bright light and melatonin'], '435–444')
  );
};
