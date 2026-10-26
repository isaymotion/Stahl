// Chapter 11 library enrichment: ADHD circuits, stimulants, NET inhibitors and α2A agonists.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch11', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };
  const boxed = { year: '2023', title: 'Stronger stimulant warnings', text: 'In May 2023 the FDA required the boxed warning of all prescription stimulants to describe the risks of **misuse, abuse, addiction and overdose** consistently and to tell patients never to share them.', source: 'FDA Drug Safety Communication, May 2023' };

  /* ---------------- neurotransmitters ---------------- */
  h.facts('nts', 'norepinephrine', [
    F('454–457', 'In the PFC, modest NE stimulates the most sensitive postsynaptic **α2A** receptors and improves function; high NE (stress, comorbidity) recruits **α1 and β1** and impairs working memory.', 's11-tonic-phasic'),
    F('457–463', 'NE at α2A (Gi, ↓cAMP) **closes HCN channels** on pyramidal spines, **strengthening the signal**; input arrives from the **locus coeruleus**.', 's11-hcn')
  ]);
  h.facts('nts', 'dopamine', [
    F('454–457', 'Receptor sensitivity **D3 > D2 > D1**; **D1** predominates in the PFC, so low tonic DA leaves it under-stimulated. **Phasic** bursts in the accumbens drive reward learning and are hijacked by drugs.', 's11-tonic-phasic'),
    F('457–463', 'DA at D1 (Gs, ↑cAMP) opens HCN channels: moderate stimulation **reduces noise**, excess loses the signal; input arrives from the **VTA**.', 's11-hcn'),
    F('480', 'In the PFC, DA is cleared largely by **NET**, so NET inhibitors raise prefrontal DA.', 's11-nri')
  ]);

  /* ---------------- targets ---------------- */
  h.upsert('targets', { id: 'hcn', name: 'HCN channel (hyperpolarization-activated cyclic nucleotide-gated cation channel)', short: 'HCN', family: 'Voltage-sensitive ion channel',
    summary: 'Cation channels on the dendritic spines of prefrontal pyramidal neurons, gated by cAMP. Open channels shunt incoming signals out of the spine; closed channels let the signal pass. α2A (Gi) closes them and D1 (Gs) opens them.',
    location: '**Dendritic spines** of prefrontal pyramidal neurons, alongside α2A and D1 receptors',
    coupling: 'Gated by **cAMP**: ↓cAMP (α2A/Gi) closes, ↑cAMP (D1/Gs) opens',
    facts: [F('457–463', 'Open HCN → low membrane resistance → **signal leaks out**. NE at α2A closes them (signal up); DA at D1 opens them (noise down, signal lost if excessive).', 's11-hcn')] }, { after: 'vscc' });
  h.upsert('targets', { id: 'imidazoline', name: 'Imidazoline receptor', short: 'I-receptor', family: 'Other', ntLabel: 'No classic monoamine ligand',
    summary: 'A non-adrenergic receptor bound by clonidine (not guanfacine), thought to contribute to clonidine’s sedation and hypotension.',
    stim: ['**Sedation** and **hypotension** (clonidine)'],
    facts: [F('482', 'Clonidine’s imidazoline actions add **sedating and hypotensive** effects that guanfacine lacks.', 's11-alpha2')] }, { after: 'ghb' });
  h.facts('targets', 'alpha2', [
    F('458–463', 'Postsynaptic **α2A** on PFC pyramidal spines is coupled to **Gi**: ↓cAMP closes HCN channels and **strengthens the signal**.', 's11-hcn'),
    F('481–482', 'Subtypes: **α2A** (cortex and LC; main PFC mediator), **α2B** (thalamus; sedation), **α2C** (densest in striatum in the text; LC in Figure 11-42). Dense in the PFC, sparse in the accumbens.', 's11-alpha2'),
    F('482', '**Guanfacine** is 15–60× α2A-selective; **clonidine** hits α2A, α2B, α2C plus imidazoline receptors. Only ER forms are approved for ADHD.', 's11-alpha2')
  ]);
  h.facts('targets', 'alpha1', [F('455–457, 481', 'Recruited when NE release is **high** (stress, comorbidity, high-dose NRIs): opposes α2 and **impairs working memory**.', 's11-invertedu')]);
  h.facts('targets', 'beta-ar', [F('455–457', '**β1** receptors join α1 at high NE levels, impairing working memory.', 's11-invertedu')]);
  h.facts('targets', 'd1', [
    F('455–457', 'The **least sensitive** DA receptor (D3 > D2 > D1) and the main postsynaptic DA receptor in the PFC: best function at **moderate** stimulation.', 's11-tonic-phasic'),
    F('458–463', 'Coupled to **Gs**: ↑cAMP opens HCN channels; moderate D1 stimulation **reduces noise**, excess dissipates the signal.', 's11-hcn')
  ]);
  h.facts('targets', 'd3', [F('455', 'The **most sensitive** DA receptor: low tonic DA stimulates D3 before D2 and D1.', 's11-tonic-phasic')]);
  h.facts('targets', 'dat', [
    F('469–473', '**Methylphenidate** binds DAT **allosterically** and is not transported; **amphetamine** is a **competitive pseudosubstrate**, transported in, and at high doses reverses DAT.', 's11-amph'),
    F('473–477', 'The “**mysterious DAT**”: continuous occupancy for weeks (antidepressant), **≥ 50–60%** occupancy for immediate ADHD/wake effects, rapid high occupancy for euphoria, repeated pulses for addiction.', 's11-dat'),
    F('476–479', 'The faster and more complete the DAT blockade (oral < intranasal < IV < smoked), the more **reinforcing** the drug.', 's11-slowfast')
  ]);
  h.facts('targets', 'net', [
    F('478–481', 'NET inhibition in the PFC raises **NE (α2A) and DA (D1)**; few NETs in the **nucleus accumbens**, so NET inhibitors lack abuse potential.', 's11-nri')
  ]);
  h.facts('targets', 'vmat2', [F('472–473', 'Amphetamine at high (abused) doses competitively inhibits VMAT2, enters vesicles and **displaces DA**; methylphenidate has **no VMAT2 action**.', 's11-amph')]);

  /* ---------------- drugs: methylphenidate family ---------------- */
  const mph = h.get('drugs', 'methylphenidate');
  mph.brand = 'Ritalin; Concerta; others';
  mph.targets = [T('dat', 'inhibitor', null, 'Allosteric (non-competitive); D >> L isomer'), T('net', 'inhibitor', null, 'Allosteric; D >> L isomer')];
  h.facts('drugs', 'methylphenidate', [
    F('469–470', 'Blocks NET and DAT **allosterically** (a site distinct from the monoamine site), like antidepressant reuptake inhibitors: stops the pump, is **not transported** and has **no VMAT2** action.', 's11-mph'),
    F('470', 'Racemic: the **D-isomer** is much more potent than L at both NET and DAT; single-enantiomer **dexmethylphenidate** also available.', 's11-mph'),
    F('470–471', 'Table 11-1 formulations: IR Ritalin/Methylin (3–4 h), Concerta (12 h), Ritalin LA (two peaks), Metadate CD, Aptensio XR, Quillivant XR, QuilliChew ER, Daytrana patch, Cotempla XR-ODT, **Jornay PM** (evening dose, delayed 10 h), Adhansia XR.', 's11-mph'),
    F('477–479', 'OROS, LA and transdermal forms are **slow-dose** stimulants (tonic signaling, lower abuse); IR is **pulsatile**.', 's11-slowfast')
  ]);
  h.chapter('methylphenidate', 'ch11', '469–479');
  h.push('drugs', 'methylphenidate', 'updates', [boxed]);
  h.upsert('drugs', { id: 'dexmethylphenidate', name: 'Dexmethylphenidate (D-methylphenidate)', brand: 'Focalin; Focalin XR', group: 'Stimulant', cls: 'Stimulant (ADHD)', nbn: 'Dopamine and norepinephrine transport (DAT/NET) inhibitor', nts: ['dopamine', 'norepinephrine'], chapters: [{ ch: 'ch11', pages: '469–471' }],
    short: 'The more potent D-enantiomer of methylphenidate.',
    mechanism: 'The single **D-enantiomer** of methylphenidate, much more potent than the L form at both **NET and DAT**; blocks them allosterically without VMAT2 action.',
    targets: [T('dat', 'inhibitor', null, 'Allosteric'), T('net', 'inhibitor', null, 'Allosteric')],
    uses: ['**ADHD**'],
    facts: [F('471', 'Table 11-2: **Focalin** IR (early peak, 4–6 h; ages 6–17) and **Focalin XR** (peaks at 1.5 and 6.5 h, 8–10 h; ages 6–17 and adults).', 's11-mph'), F('477', 'XR D-methylphenidate is a **slow-dose** stimulant.', 's11-slowfast')],
    updates: [{ year: '2021', title: 'A prodrug combination', text: '**Azstarys** (serdexmethylphenidate, a dexmethylphenidate prodrug, plus IR dexmethylphenidate) was approved on March 2, 2021 for ADHD from age 6.', source: 'Drugs.com approval history; KemPharm, March 2021' }] }, { after: 'methylphenidate' });

  /* ---------------- amphetamine family ---------------- */
  const amph = h.get('drugs', 'amphetamine');
  amph.brand = amph.brand || 'Adderall; Dexedrine; others';
  amph.targets = [T('dat', 'substrate', null, 'Competitive pseudosubstrate; transported; D > L'), T('net', 'substrate', null, 'Competitive pseudosubstrate; D ≈ L'), T('vmat2', 'substrate', null, 'Competitive inhibitor/substrate at high doses; displaces DA')];
  h.facts('drugs', 'amphetamine', [
    F('472', 'A **competitive inhibitor and pseudosubstrate** at NET and DAT. At ADHD doses the difference from methylphenidate is small; at abused doses it enters vesicles via VMAT2, displaces DA, opens channels and **reverses DAT**, causing euphoria.', 's11-amph'),
    F('472–473', '**D-amphetamine**: D > L at DAT, so relatively more DAT action. **Mixed D,L salts**: D ≈ L at NET, so more NET action than D-amphetamine, but still DAT > NET.', 's11-amph'),
    F('474–475', 'Tables 11-3/11-4: Adderall and Evekeo IR (from age 3), Adderall XR, **Mydayis** (up to 16 h), Adzenys XR-ODT/ER, Dyanavel XR; D-amphetamine Zenzedi, ProCentra, Dexedrine spansule.', 's11-amph'),
    F('477–479', 'Spansules and XR mixed salts are **slow-dose**; IR forms are **pulsatile**, with more abuse potential.', 's11-slowfast')
  ]);
  h.chapter('amphetamine', 'ch11', '472–479');
  h.push('drugs', 'amphetamine', 'updates', [
    { year: '2022', title: 'An amphetamine patch', text: '**Xelstrym** (dextroamphetamine transdermal system), worn 9 hours once daily, was approved on March 22, 2022 for ADHD in adults and children aged 6 and older.', source: 'Drugs.com approval history; Noven, March 2022' },
    boxed
  ]);
  h.upsert('drugs', { id: 'lisdexamfetamine', name: 'Lisdexamfetamine', brand: 'Vyvanse', group: 'Stimulant', cls: 'Stimulant prodrug (ADHD)', nbn: 'Dopamine and norepinephrine releaser (DAT/NET and VMAT2 substrate)', nts: ['dopamine', 'norepinephrine'], chapters: [{ ch: 'ch11', pages: '473–479' }],
    short: 'Lysine-linked prodrug of D-amphetamine: a slow-dose stimulant.',
    mechanism: '**D-amphetamine linked to lysine**: inactive until the lysine is cleaved, releasing D-amphetamine slowly for gradual, sustained transporter occupancy. (The book says cleavage occurs in the stomach; it actually occurs mainly in **red blood cells**.)',
    targets: [T('dat', 'substrate', null, 'As D-amphetamine'), T('net', 'substrate', null, 'As D-amphetamine'), T('vmat2', 'substrate', null, 'As D-amphetamine')],
    uses: ['**ADHD** (ages 6–17 and adults)'],
    facts: [F('473', 'Not absorbed as active drug until slowly converted to D-amphetamine plus L-lysine, so it rises **slowly rather than rapidly**.', 's11-amph'), F('475', 'Table 11-4: lasts up to **12 h**, peak 3.5 h, once in the morning.', 's11-amph'), F('477', 'A **slow-dose** stimulant: enhances tonic NE/DA with hypothetically lower abuse potential.', 's11-slowfast')],
    updates: [{ year: '2023', title: 'Generic lisdexamfetamine', text: 'The FDA approved the first **generic** versions of Vyvanse in late August 2023, amid ADHD stimulant shortages.', source: 'Psychiatric Times, August 29, 2023' }, boxed] }, { after: 'amphetamine' });

  /* ---------------- NET inhibitors ---------------- */
  const ato = h.get('drugs', 'atomoxetine');
  ato.short = 'Selective NET inhibitor approved for ADHD in children and adults; no abuse potential.';
  ato.mechanism = 'A **selective NET inhibitor (NRI)**. Blocking prefrontal NET raises **both NE and DA** there (NET clears DA in the PFC); few NETs in the **nucleus accumbens** means no rise in DA there and **no abuse potential**. Continuous blockade restores tonic α2A/D1 signaling and dampens phasic NE/DA.';
  ato.uses = ['**ADHD** in children and adults (the only well-studied, approved NRI)', '**Fibro-fog** in fibromyalgia (Chapter 9)'];
  ato.chapters = ato.chapters || [];
  h.facts('drugs', 'atomoxetine', [
    F('480', 'Raises prefrontal NE and DA but **not** accumbens DA: hence no reinforcing, abuse or addiction potential.', 's11-nri'),
    F('480–481', 'In stressed, comorbid ADHD, chronic use may restore tonic signaling, downregulate phasic NE/DA and desensitize receptors, possibly easing **anxiety, depression and heavy drinking**.', 's11-nri'),
    F('481', '24-hour relief; smaller short-term effect sizes than stimulants, but not necessarily inferior in **stimulant-naïve** patients or after 8–11 weeks. High doses may cause **sedation or cognitive impairment** (α1): lower the dose.', 's11-nri')
  ]);
  h.chapter('atomoxetine', 'ch11', '480–481');
  h.upsert('drugs', { id: 'reboxetine', name: 'Reboxetine', group: 'NRI', cls: 'Selective norepinephrine reuptake inhibitor (NRI)', nbn: 'Norepinephrine reuptake inhibitor (NET)', nts: ['norepinephrine', 'dopamine'], chapters: [{ ch: 'ch11', pages: '480–481' }],
    short: 'Selective NRI listed among NET inhibitors used for ADHD.',
    mechanism: 'A **selective NET inhibitor**: like atomoxetine, raises NE and DA in the PFC but not in the nucleus accumbens.',
    targets: [T('net', 'inhibitor')], uses: ['Listed among NET inhibitors used for ADHD with variable success (Figure 11-38); not approved for ADHD'],
    facts: [F('480–481', 'One of several NRI-acting drugs used for ADHD with varying success; only atomoxetine is well investigated and approved.', 's11-nri')] }, { after: 'atomoxetine' });
  h.upsert('drugs', { id: 'viloxazine', name: 'Viloxazine ER', brand: 'Qelbree', group: 'NRI', cls: 'NET inhibitor with 5HT2B/5HT2C actions', nbn: 'Norepinephrine reuptake inhibitor; serotonin receptor actions', nts: ['norepinephrine', 'serotonin'], chapters: [{ ch: 'ch11', pages: '485' }],
    short: 'NET inhibitor with 5HT2B/2C actions; a nonstimulant for ADHD.',
    mechanism: 'Inhibits the **norepinephrine transporter** and also acts at **5HT2B and 5HT2C** receptors. Once marketed abroad for depression but never in the US; repurposed as a controlled-release form for ADHD.',
    targets: [T('net', 'inhibitor'), T('5ht2b', 'binds', null, 'Action noted in Figure 11-45'), T('5ht2c', 'binds', null, 'Action noted in Figure 11-45')],
    uses: ['**ADHD** (book: late-stage development)'],
    facts: [F('485', 'A selective NRI in late-stage development for ADHD as a controlled-release formulation (Figure 11-45).', 's11-future')],
    updates: [{ year: '2021–2022', title: 'Viloxazine approved', text: '**Qelbree** was approved on April 2, 2021 for ADHD in ages 6–17 and on April 29, 2022 for adults. Nonstimulant, not controlled; the label calls it a serotonin norepinephrine modulating agent and warns of suicidal thoughts and behaviors.', source: 'Drugs.com approval history; Supernus, April 2022' }] }, { after: 'reboxetine' });
  h.upsert('drugs', { id: 'mazindol', name: 'Mazindol', group: 'Investigational drug for ADHD', cls: 'DAT inhibitor', nbn: 'Dopamine reuptake inhibitor (DAT)', nts: ['dopamine'], chapters: [{ ch: 'ch11', pages: '485' }],
    short: 'DAT inhibitor once approved for appetite suppression; tested in ADHD.',
    mechanism: 'A **DAT inhibitor**, formerly approved as an appetite suppressant.',
    targets: [T('dat', 'inhibitor')], uses: ['In testing for **ADHD** (book)'],
    facts: [F('485', 'Listed as a future ADHD treatment in testing.', 's11-future')] }, { after: 'viloxazine' });
  h.upsert('drugs', { id: 'centanafadine', name: 'Centanafadine', brand: 'Simtriyo', group: 'Investigational drug for ADHD', cls: 'Triple (5HT–NE–DA) reuptake inhibitor', nbn: 'Serotonin, norepinephrine and dopamine reuptake inhibitor (SERT/NET/DAT)', nts: ['serotonin', 'norepinephrine', 'dopamine'], chapters: [{ ch: 'ch11', pages: '485' }],
    short: 'Triple reuptake inhibitor for ADHD (approved 2026).',
    mechanism: 'Inhibits the **serotonin, norepinephrine and dopamine** transporters.',
    targets: [T('net', 'inhibitor'), T('dat', 'inhibitor'), T('sert', 'inhibitor')], uses: ['**ADHD** (book: in testing)'],
    facts: [F('485', 'A triple (5HT–NE–DA) reuptake inhibitor in testing for ADHD.', 's11-future')],
    updates: [{ year: '2026', title: 'Centanafadine approved', text: '**Simtriyo** was approved on July 24, 2026 for ADHD in adults and children aged 6 and older (once-daily ER capsule), after four positive phase 3 trials; launch awaited DEA scheduling.', source: 'Otsuka, July 24, 2026; Psychiatric Times; ADDitude' }] }, { after: 'mazindol' });
  const nriFact = F('480', 'Has NET-inhibiting actions and has been used for ADHD with varying success; only atomoxetine is approved.', 's11-nri');
  ['bupropion', 'desipramine', 'nortriptyline', 'venlafaxine', 'duloxetine', 'desvenlafaxine', 'milnacipran'].forEach(id => { if (h.has('drugs', id)) { h.facts('drugs', id, [nriFact]); h.chapter(id, 'ch11', '480'); } });
  h.facts('drugs', 'bupropion', [F('480', 'An **NDRI**: weak NET plus weak DAT inhibition, so unlike atomoxetine it also reaches accumbens DATs (Figure 11-37).', 's11-nri')]);

  /* ---------------- α2A agonists ---------------- */
  const clo = h.get('drugs', 'clonidine');
  clo.short = 'Nonselective α2 agonist (plus imidazoline); ER form approved for ADHD.';
  clo.mechanism = 'A **direct-acting, nonselective α2 agonist** (α2A, α2B, α2C) that also binds **imidazoline** receptors. Postsynaptic α2A stimulation in the PFC strengthens the signal; α2B, α2C and imidazoline actions add **sedation and hypotension**. In the spinal cord it mimics descending noradrenergic pain inhibition.';
  clo.targets = [T('alpha2', 'agonist', null, 'α2A, α2B and α2C'), T('imidazoline', 'agonist', null, 'Sedation, hypotension')];
  clo.uses = ['**ADHD** (controlled-release form only)', 'Hypertension', 'Off-label: conduct disorder, ODD, **Tourette syndrome**', 'Pain relief in some patients (Chapter 9)'];
  h.facts('drugs', 'clonidine', [F('482', 'Approved for hypertension; only **controlled-release** clonidine is approved for ADHD. Guanfacine is 10× weaker at sedation/hypotension and 25× more potent on PFC function.', 's11-alpha2')]);
  h.chapter('clonidine', 'ch11', '481–484');
  h.push('drugs', 'clonidine', 'updates', [{ year: '2024', title: 'A liquid clonidine for ADHD', text: '**Onyda XR** (clonidine ER oral suspension) was approved in May 2024 for ADHD from age 6, alone or with stimulants, dosed once daily at bedtime.', source: 'Drugs.com approval history; Tris Pharma, May 29, 2024' }]);
  h.upsert('drugs', { id: 'guanfacine', name: 'Guanfacine', brand: 'Intuniv (ER); Tenex (IR)', group: 'α2 agonist', cls: 'Selective α2A-adrenergic agonist', nbn: 'Norepinephrine α2A receptor agonist', nts: ['norepinephrine'], chapters: [{ ch: 'ch11', pages: '481–484' }],
    short: 'α2A-selective agonist; ER form approved for ADHD alone or with stimulants.',
    mechanism: 'A **direct α2A agonist**, **15–60×** more selective for α2A than α2B/α2C. Stimulates postsynaptic α2A receptors on PFC pyramidal spines (Gi, ↓cAMP, HCN closed), **strengthening the signal**. No DA receptor action, hence no abuse potential.',
    targets: [T('alpha2', 'agonist', null, 'α2A-selective (15–60×)')],
    uses: ['**ADHD** (ER form), alone or as **augmentation** of stimulants', 'Off-label: conduct disorder, ODD, **Tourette syndrome**'],
    sideEffects: [{ e: 'Sedation (less than clonidine)', via: 'α2B/α2C' }, { e: 'Hypotension (less than clonidine)', via: 'α2' }],
    facts: [
      F('482', '**10× weaker** than clonidine at sedation and lowering blood pressure, yet **25× more potent** at enhancing PFC function. ER form allows once-daily dosing with fewer peak-dose effects; only the ER form is approved for ADHD.', 's11-alpha2'),
      F('482–484', 'Best monotherapy candidates may have low prefrontal **NE** with normal DA; no predictor beyond an **empiric trial**.', 's11-alpha2'),
      F('484', 'Approved as an **augmenting agent** after inadequate stimulant response; may especially help **oppositional** symptoms (low VMPFC NE).', 's11-alpha2')
    ] }, { after: 'clonidine' });

  /* ---------------- other drugs ---------------- */
  h.facts('drugs', 'nicotine', [F('467', 'ADHD patients smoke at about **twice** the general rate; nicotine releases DA and raises arousal, subjectively easing ADHD symptoms.', 's11-priorities')]);
  h.chapter('nicotine', 'ch11', '467');
  ['cocaine', 'methamphetamine'].forEach(id => { if (h.has('drugs', id)) { h.facts('drugs', id, [F('476–478', 'A DAT blocker whose **rapid, complete** occupancy (especially intranasal, IV or smoked) gives a pulsatile phasic DA surge: euphoria and abuse.', 's11-slowfast')]); h.chapter(id, 'ch11', '476–478'); } });
  h.facts('drugs', 'modafinil', [F('476', 'Also a DAT blocker: the more rapidly and completely the DAT is blocked, the more reinforcing a drug becomes.', 's11-dat')]);

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch11', pages });
  const stim = '[[drug:methylphenidate|Methylphenidate]] or [[drug:amphetamine|amphetamine]] (slow-dose forms, e.g. [[drug:lisdexamfetamine|lisdexamfetamine]])';
  db.circuits.push(
    C('adhd-sustained', 'ADHD', 'Sustained attention and problem solving (executive dysfunction)', '**DLPFC** → striatum → thalamus (n-back test)', ['Norepinephrine', 'Dopamine'], [stim, '[[drug:atomoxetine|Atomoxetine]]', '[[drug:guanfacine|Guanfacine ER]]'], '449–451'),
    C('adhd-selective', 'ADHD', 'Selective attention (distractible, careless, forgetful)', '**Dorsal anterior cingulate cortex** → striatum → thalamus (Stroop task)', ['Norepinephrine', 'Dopamine'], [stim, '[[drug:atomoxetine|Atomoxetine]]'], '450–451'),
    C('adhd-impulsivity', 'ADHD', 'Impulsivity (blurting, interrupting, can’t wait turn)', '**Orbitofrontal cortex** → striatum → thalamus', ['Norepinephrine', 'Dopamine'], [stim, '[[drug:guanfacine|Guanfacine ER]], [[drug:clonidine|clonidine ER]]'], '452–454'),
    C('adhd-hyperactivity', 'ADHD', 'Motor hyperactivity (fidgeting, leaving seat, climbing)', '**Prefrontal motor cortex / supplementary motor area** → putamen → thalamus', ['Norepinephrine', 'Dopamine'], [stim, '[[drug:guanfacine|Guanfacine ER]], [[drug:clonidine|clonidine ER]]'], '452–454'),
    C('adhd-oppositional', 'ADHD', 'Comorbid oppositional, conduct and mood symptoms', '**Ventromedial prefrontal cortex** (very low NE, low DA)', ['Norepinephrine', 'Dopamine'], ['Stimulant **plus** [[drug:guanfacine|guanfacine ER]] (augmentation)', 'α2 agonists off-label for ODD and conduct disorder'], '453, 484')
  );
};
