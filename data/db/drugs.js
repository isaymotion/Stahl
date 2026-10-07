/*
 * Drug database. Entries are created when a chapter first discusses a drug and enriched by later chapters.
 *   targets: [{ t: target id, action: 'inhibitor' | 'antagonist' | 'agonist' | 'partial agonist' | 'substrate' | ..., s: 1-4 relative strength, note }]
 *   sideEffects: [{ e: effect, via: mechanism }]   facts: [{ ch, pages, text, sec }]   updates: [{ year, title, text, source }]
 * `s` is only set where the book describes relative strength; otherwise the bar is drawn striped.
 */
SP.drugs = [
  {
    id: 'morphine', name: 'Morphine', group: 'Opioid', cls: 'Opioid',
    short: 'Mimics the brain’s own morphine, β-endorphin.',
    mechanism: 'Mimics the endogenous opioid **β-endorphin**, the brain’s own morphine. Its receptor pharmacology is covered in later chapters.',
    nts: ['endorphin'],
    chapters: [{ ch: 'ch01', pages: '5–6' }],
    facts: [{ ch: 'ch01', pages: '5–6', text: 'Used clinically **before β-endorphin was discovered**: an example of a drug preceding knowledge of its natural counterpart (“God’s pharmacopeia”).', sec: 's1-nts' }]
  },
  {
    id: 'diazepam', name: 'Diazepam', brand: 'Valium', group: 'Benzodiazepine', cls: 'Benzodiazepine',
    short: 'PAM at the benzodiazepine site of GABA-A receptors.',
    mechanism: 'Acts as a **full agonist at the benzodiazepine (PAM) site** of **GABA-A** receptors: with GABA bound, it opens the **chloride** channel further and more often, amplifying GABA’s inhibition (**phasic** inhibition). Clinically this reduces anxiety, induces sleep, blocks convulsions, blocks short-term memory and relaxes muscles. Onset can be almost immediate because ion flow changes at once.',
    nbn: 'GABA-A positive allosteric modulator (benzodiazepine site)',
    nts: ['gaba'],
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Benzodiazepine site; phasic inhibition' }],
    uses: ['**Anxiolytic**', 'Also sleep induction, anticonvulsant and muscle relaxant actions (Chapter 3)'],
    sideEffects: [{ e: 'Blocks short-term memory', via: 'GABA-A PAM action' }, { e: 'Sedation (sleep induction)', via: 'GABA-A PAM action' }],
    chapters: [{ ch: 'ch01', pages: '6' }, { ch: 'ch03', pages: '55, 65' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' }, { ch: 'ch03', pages: '65', text: 'The book’s example of a **positive allosteric modulator**: a full agonist at the benzodiazepine site that boosts GABA’s chloride flux.', sec: 's3-pam' }]
  },
  {
    id: 'alprazolam', name: 'Alprazolam', brand: 'Xanax', group: 'Benzodiazepine', cls: 'Benzodiazepine',
    short: 'PAM at the benzodiazepine site of GABA-A receptors.',
    mechanism: 'Acts as a **full agonist at the benzodiazepine (PAM) site** of **GABA-A** receptors: with GABA bound, it opens the **chloride** channel further and more often, amplifying GABA’s inhibition (**phasic** inhibition). Clinically this reduces anxiety, induces sleep, blocks convulsions, blocks short-term memory and relaxes muscles. Onset can be almost immediate because ion flow changes at once.',
    nbn: 'GABA-A positive allosteric modulator (benzodiazepine site)',
    nts: ['gaba'],
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Benzodiazepine site; phasic inhibition' }],
    uses: ['**Anxiolytic**', 'Also sleep induction, anticonvulsant and muscle relaxant actions (Chapter 3)'],
    sideEffects: [{ e: 'Blocks short-term memory', via: 'GABA-A PAM action' }, { e: 'Sedation (sleep induction)', via: 'GABA-A PAM action' }],
    chapters: [{ ch: 'ch01', pages: '5–6' }, { ch: 'ch03', pages: '55, 65' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' }, { ch: 'ch03', pages: '65', text: 'The book’s example of a **positive allosteric modulator**: a full agonist at the benzodiazepine site that boosts GABA’s chloride flux.', sec: 's3-pam' }]
  },
  {
    id: 'amitriptyline', name: 'Amitriptyline', brand: 'Elavil', group: 'Antidepressant', cls: 'Tricyclic antidepressant',
    short: 'Acts at the serotonin transporter, among other targets.',
    mechanism: 'Acts at the **serotonin transporter** site; its full multi-receptor profile is covered in the antidepressant chapter.',
    targets: [{ t: 'sert', action: 'inhibitor', note: 'Strength and other targets added with Chapter 7' }],
    chapters: [{ ch: 'ch01', pages: '6' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' }]
  },
  {
    id: 'fluoxetine', name: 'Fluoxetine', brand: 'Prozac', group: 'Antidepressant', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    nbn: 'Serotonin transport (SERT) inhibitor',
    short: 'Allosteric inhibitor of the serotonin transporter (SERT).',
    mechanism: 'Binds an **allosteric** (“other”) site on the **serotonin transporter (SERT)**, not the substrate site, and is **not transported** into the neuron. This lowers SERT’s affinity for serotonin, blocking reuptake so synaptic serotonin action is enhanced. In Stahl’s wagon analogy, fluoxetine sits in the **front seat** and keeps serotonin off. The brain may even make “its own Prozac.”',
    targets: [{ t: 'sert', action: 'inhibitor', note: 'Allosteric; strength and other actions added with Chapter 7' }],
    uses: ['Unipolar depression (SSRIs are first-line for many depressions)', 'As a SERT blocker, part of the class used for anxiety disorders, OCD, PTSD, eating disorders and other conditions (Chapter 2 overview)'],
    chapters: [{ ch: 'ch01', pages: '5–6' }, { ch: 'ch02', pages: '33' }],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' },
      { ch: 'ch02', pages: '33', text: 'The book’s example of an SSRI at SERT’s **inhibitory allosteric site** (the “front seat” of the transporter wagon), reducing SERT’s affinity for serotonin.', sec: 's2-monoamine' }
    ]
  },
  {
    id: 'methylphenidate', name: 'Methylphenidate', group: 'Stimulant', cls: 'Stimulant (ADHD)',
    nbn: 'Dopamine and norepinephrine transport (DAT/NET) inhibitor',
    short: 'Blocks DAT and NET; acts only at the transporters.',
    mechanism: 'Blocks the **dopamine (DAT)** and **norepinephrine (NET)** transporters, enhancing synaptic dopamine and norepinephrine. Unlike amphetamine it targets **only the monoamine transporters**, much as SSRIs act at SERT.',
    targets: [{ t: 'dat', action: 'inhibitor', note: 'Strength added with Chapter 11' }, { t: 'net', action: 'inhibitor' }],
    uses: ['ADHD', 'Indirect dopamine agonism also improves depression and wakefulness (Table 2-5)'],
    chapters: [{ ch: 'ch02', pages: '34–35, 40' }],
    facts: [
      { ch: 'ch02', pages: '34', text: 'A “stimulant” for ADHD that acts on **DAT and NET**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: 'Targets **only the monoamine transporters** (not VMATs), in contrast to amphetamine.', sec: 's2-vesicular' }
    ]
  },
  {
    id: 'amphetamine', name: 'Amphetamine', group: 'Stimulant', cls: 'Stimulant (ADHD)',
    nbn: 'Dopamine and norepinephrine releaser (DAT/NET and VMAT2 substrate)',
    short: 'A transported substrate of DAT, NET and VMAT2: two targets.',
    mechanism: 'A **false substrate** carried into the neuron by **DAT and NET** (DAT has high affinity for amphetamines), and also a **transported substrate of VMAT2** in synaptic vesicles. Amphetamine therefore has **two targets**: the monoamine transporters and VMATs. Reuptake inhibition and release of dopamine stimulate D1–D5 receptors indirectly.',
    targets: [{ t: 'dat', action: 'substrate', note: 'Transported (“false substrate”)' }, { t: 'net', action: 'substrate' }, { t: 'vmat2', action: 'substrate', note: 'Transported into vesicles' }],
    uses: ['ADHD', 'Indirect dopamine agonism improves depression and wakefulness (Table 2-5)'],
    chapters: [{ ch: 'ch02', pages: '31–35, 40' }],
    facts: [
      { ch: 'ch02', pages: '31', text: 'Listed in Table 2-1 as a false substrate of both **NET and DAT**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: '**Amphetamine has two targets**: monoamine transporters and VMATs (as a transported substrate).', sec: 's2-vesicular' }
    ]
  },
  {
    id: 'cocaine', name: 'Cocaine', group: 'Drug of abuse', cls: 'Stimulant drug of abuse',
    short: 'Blocks DAT and NET; acts only at the transporters.',
    mechanism: 'Acts on **DAT and NET**, blocking reuptake. Like methylphenidate, it targets **only the monoamine transporters**, not VMATs.',
    targets: [{ t: 'dat', action: 'inhibitor' }, { t: 'net', action: 'inhibitor' }],
    chapters: [{ ch: 'ch02', pages: '34–35' }],
    facts: [{ ch: 'ch02', pages: '34–35', text: 'The “stimulant” drug of abuse cocaine acts on **DAT and NET** in much the same manner as SSRIs at SERT.', sec: 's2-vesicular' }]
  },
  {
    id: 'mdma', name: 'MDMA', brand: '“Ecstasy”', aka: ['3,4-methylenedioxymethamphetamine', 'midomafetamine'], group: 'Drug of abuse', cls: 'Empathogen; drug of abuse',
    short: 'A false substrate of SERT that releases serotonin.',
    mechanism: 'Carried into serotonin neurons by **SERT** as a false substrate, and **releases serotonin**, which indirectly stimulates **5HT2A/2C** receptors.',
    targets: [{ t: 'sert', action: 'substrate', note: 'Transported (“false substrate”)' }],
    uses: ['“Empathogen”: experimental treatment of PTSD, especially with psychotherapy (at publication)'],
    chapters: [{ ch: 'ch02', pages: '31–33, 40' }],
    facts: [
      { ch: 'ch02', pages: '31–33', text: 'SERT has high affinity for transporting **Ecstasy (MDMA)** as well as serotonin (Table 2-1).', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '40', text: 'Serotonin release by MDMA produces **indirect 5HT2A/2C agonism**: “empathogen,” experimental for PTSD with psychotherapy (Table 2-5).', sec: 's2-receptor-tables' }
    ],
    updates: [{ year: '2024', title: 'Not approved for PTSD', text: 'In August 2024 the FDA issued a **complete response letter** declining approval of MDMA-assisted therapy (midomafetamine) for PTSD and requested another phase III trial.', source: 'FDA complete response letter to Lykos Therapeutics, August 9, 2024' }]
  },
  {
    id: 'tiagabine', name: 'Tiagabine', group: 'Anticonvulsant', cls: 'Anticonvulsant',
    nbn: 'GABA transport (GAT1) inhibitor',
    short: 'The only clinical drug that blocks a GABA transporter (GAT1).',
    mechanism: 'Selectively blocks the presynaptic **GABA transporter GAT1**, increasing synaptic GABA. It is the **only** clinically used psychotropic drug known to bind any of the non-monoamine neurotransmitter transporters.',
    targets: [{ t: 'gat', action: 'inhibitor', note: 'Selective for GAT1' }],
    uses: ['Anticonvulsant', 'May have therapeutic actions in anxiety, sleep disorders and pain'],
    chapters: [{ ch: 'ch02', pages: '34' }],
    facts: [{ ch: 'ch02', pages: '34', text: 'GAT1 is **selectively blocked by tiagabine**; no other GAT inhibitor is available clinically.', sec: 's2-other' }]
  },
  {
    id: 'levetiracetam', name: 'Levetiracetam', group: 'Anticonvulsant', cls: 'Anticonvulsant',
    nbn: 'Synaptic vesicle protein 2A (SV2A) ligand',
    short: 'Binds the synaptic vesicle protein SV2A.',
    mechanism: 'Binds **SV2A**, a 12-transmembrane synaptic vesicle transporter of uncertain mechanism and substrate, perhaps **interfering with neurotransmitter release** and thereby reducing seizures.',
    targets: [{ t: 'sv2a', action: 'modulator', note: 'Binds; mechanism uncertain' }],
    uses: ['Anticonvulsant'],
    chapters: [{ ch: 'ch02', pages: '35' }],
    facts: [{ ch: 'ch02', pages: '35', text: 'Binds **SV2A** in the synaptic vesicle membrane.', sec: 's2-vesicular' }, { ch: 'ch03', pages: '72', text: 'SV2A is drawn on the synaptic vesicle beside the **snare proteins** that tie vesicles to N and P/Q calcium channels (Figure 3-24).', sec: 's3-vscc' }]
  },
  {
    id: 'tetrabenazine', name: 'Tetrabenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'Inhibits VMAT2, especially in dopamine neurons.',
    mechanism: '**Inhibits VMAT2**, the vesicular monoamine transporter, particularly in **dopamine neurons**, so monoamines are not packaged for release. Details in Chapter 5.',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['Movement disorders such as tardive dyskinesia (class use; Chapter 5)'],
    chapters: [{ ch: 'ch02', pages: '35, 50' }],
    facts: [{ ch: 'ch02', pages: '35', text: 'With its derivatives deutetrabenazine and valbenazine, an **inhibitor of VMATs**.', sec: 's2-vesicular' }]
  },
  {
    id: 'deutetrabenazine', name: 'Deutetrabenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'A tetrabenazine derivative that inhibits VMAT2.',
    mechanism: 'A derivative of tetrabenazine that **inhibits VMAT2**. Details in Chapter 5.',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['Movement disorders such as tardive dyskinesia (Chapter 5)'],
    chapters: [{ ch: 'ch02', pages: '35, 50' }],
    facts: [{ ch: 'ch02', pages: '35', text: 'A tetrabenazine derivative acting as a **VMAT inhibitor**.', sec: 's2-vesicular' }]
  },
  {
    id: 'valbenazine', name: 'Valbenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'A tetrabenazine derivative that inhibits VMAT2.',
    mechanism: 'A derivative of tetrabenazine that **inhibits VMAT2**. Details in Chapter 5.',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['Movement disorders such as tardive dyskinesia (Chapter 5)'],
    chapters: [{ ch: 'ch02', pages: '35, 50' }],
    facts: [{ ch: 'ch02', pages: '35', text: 'A tetrabenazine derivative acting as a **VMAT inhibitor**.', sec: 's2-vesicular' }],
    updates: [{ year: '2023', title: 'Huntington’s disease chorea', text: 'Approved by the FDA in August 2023 for **chorea associated with Huntington’s disease**, in addition to tardive dyskinesia.', source: 'Neurocrine Biosciences / FDA, August 2023' }]
  },
  {
    id: 'lithium', name: 'Lithium', group: 'Mood stabilizer', cls: 'Mood stabilizer (antimanic)',
    short: 'May inhibit the enzyme GSK-3.',
    mechanism: 'May **inhibit glycogen synthase kinase-3 (GSK-3)**, a proapoptotic enzyme downstream of neurotrophins, insulin, IGF-1 and Wnt signaling. Inhibition could be neuroprotective, promote long-term plasticity, and contribute to lithium’s **antimanic and mood-stabilizing** actions. Full mechanism in Chapter 7.',
    targets: [{ t: 'gsk3', action: 'inhibitor', note: 'Possible mechanism' }],
    uses: ['Antimanic; mood stabilizer'],
    chapters: [{ ch: 'ch02', pages: '48' }],
    facts: [{ ch: 'ch02', pages: '48', text: 'The antimanic agent lithium **may target GSK-3**, one of only three enzymes targeted by psychotropic drugs.', sec: 's2-enzymes' }]
  },
  {
    id: 'valproate', name: 'Valproate', group: 'Mood stabilizer', cls: 'Anticonvulsant; antimanic',
    short: 'May act on GSK-3 (possible).',
    mechanism: 'Like ECT, it **may act on GSK-3**, alongside other mechanisms covered in Chapters 3 and 7.',
    targets: [{ t: 'gsk3', action: 'inhibitor', note: 'Possible (“?” in Figure 2-14)' }],
    uses: ['Antimanic'],
    chapters: [{ ch: 'ch02', pages: '48' }],
    facts: [{ ch: 'ch02', pages: '48', text: 'The antimanic agent valproate **may** have actions on GSK-3 (marked with a question mark in Figure 2-14).', sec: 's2-enzymes' }]
  }
  ,{
    id: 'varenicline', name: 'Varenicline', group: 'Nicotinic partial agonist', cls: 'Nicotinic receptor partial agonist (NRPA)',
    nbn: 'Acetylcholine nicotinic α4β2 receptor partial agonist',
    short: 'Partial agonist at α4β2 nicotinic receptors.',
    mechanism: 'A **partial agonist** at **α4β2 nicotinic** acetylcholine receptors, one of the first partial agonists at a ligand-gated channel in clinical use. As a partial agonist it is a **net agonist** when nicotine is absent and a **net antagonist** when nicotine is present. Details in Chapter 13.',
    targets: [{ t: 'nicotinic', action: 'partial agonist', note: 'α4β2 subtype' }],
    uses: ['**Smoking cessation**'],
    chapters: [{ ch: 'ch03', pages: '55, 61' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'Listed in Table 3-2 as the nicotinic receptor partial agonist (NRPA) for **smoking cessation**.', sec: 's3-drugs' }]
  },
  {
    id: 'nicotine', name: 'Nicotine', group: 'Drug of abuse', cls: 'Nicotinic agonist; drug of abuse',
    short: 'Nicotinic agonist that desensitizes and inactivates its receptors.',
    mechanism: 'Stimulates **nicotinic** acetylcholine receptors. Unlike acetylcholine it is **not hydrolyzed by acetylcholinesterase**, so it stimulates the receptors so profoundly and enduringly that they are **desensitized** within about one cigarette and **inactivated** for about the time between cigarettes.',
    targets: [{ t: 'nicotinic', action: 'agonist' }],
    chapters: [{ ch: 'ch03', pages: '63–64' }],
    facts: [{ ch: 'ch03', pages: '64', text: 'Explains why most smokers smoke about **a pack a day (20 cigarettes) over about 16 waking hours**: dosing is matched to receptor desensitization and inactivation.', sec: 's3-states' }]
  },
  {
    id: 'zolpidem', name: 'Zolpidem', group: 'Z-drug hypnotic', cls: 'Nonbenzodiazepine hypnotic (“Z drug”)',
    nbn: 'GABA-A positive allosteric modulator',
    short: 'PAM at nonbenzodiazepine sites on GABA-A receptors.',
    mechanism: 'A **full agonist at nonbenzodiazepine PAM sites** on GABA-A receptors, enhancing **phasic** inhibition. Details in Chapter 10.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Nonbenzodiazepine PAM site' }],
    uses: ['**Insomnia**'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'One of the four “Z drugs” in Table 3-2 that improve insomnia.', sec: 's3-drugs' }]
  },
  {
    id: 'zaleplon', name: 'Zaleplon', group: 'Z-drug hypnotic', cls: 'Nonbenzodiazepine hypnotic (“Z drug”)',
    nbn: 'GABA-A positive allosteric modulator',
    short: 'PAM at nonbenzodiazepine sites on GABA-A receptors.',
    mechanism: 'A **full agonist at nonbenzodiazepine PAM sites** on GABA-A receptors (phasic inhibition). Details in Chapter 10.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Nonbenzodiazepine PAM site' }],
    uses: ['**Insomnia**'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'One of the four “Z drugs” in Table 3-2.', sec: 's3-drugs' }]
  },
  {
    id: 'zopiclone', name: 'Zopiclone', group: 'Z-drug hypnotic', cls: 'Nonbenzodiazepine hypnotic (“Z drug”)',
    nbn: 'GABA-A positive allosteric modulator',
    short: 'PAM at nonbenzodiazepine sites on GABA-A receptors.',
    mechanism: 'A **full agonist at nonbenzodiazepine PAM sites** on GABA-A receptors (phasic inhibition). Details in Chapter 10.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Nonbenzodiazepine PAM site' }],
    uses: ['**Insomnia**'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'One of the four “Z drugs” in Table 3-2.', sec: 's3-drugs' }]
  },
  {
    id: 'eszopiclone', name: 'Eszopiclone', group: 'Z-drug hypnotic', cls: 'Nonbenzodiazepine hypnotic (“Z drug”)',
    nbn: 'GABA-A positive allosteric modulator',
    short: 'PAM at nonbenzodiazepine sites on GABA-A receptors.',
    mechanism: 'A **full agonist at nonbenzodiazepine PAM sites** on GABA-A receptors (phasic inhibition). Details in Chapter 10.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Nonbenzodiazepine PAM site' }],
    uses: ['**Insomnia**'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'One of the four “Z drugs” in Table 3-2.', sec: 's3-drugs' }]
  },
  {
    id: 'allopregnanolone', name: 'Allopregnanolone', aka: ['brexanolone'], group: 'Neuroactive steroid', cls: 'Neuroactive steroid',
    nbn: 'GABA-A positive allosteric modulator (neurosteroid site)',
    short: 'Acts at benzodiazepine-insensitive neurosteroid sites on GABA-A (tonic inhibition).',
    mechanism: 'A **neuroactive steroid** acting as a full agonist at **benzodiazepine-insensitive neurosteroid sites** on GABA-A receptors, which mediate **tonic** inhibition. Details in Chapter 7.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Neurosteroid site; tonic inhibition' }],
    uses: ['**Postpartum depression**', 'Rapid-acting antidepressant', 'Anesthetic'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'The neuroactive steroid listed in Table 3-2 for postpartum depression, rapid antidepressant and anesthetic actions.', sec: 's3-drugs' }],
    updates: [{ year: '2023', title: 'An oral neurosteroid', text: '**Zuranolone**, an oral neuroactive steroid GABA-A PAM, was approved in August 2023 as the first oral treatment for postpartum depression.', source: 'FDA, August 4, 2023' }]
  },
  {
    id: 'memantine', name: 'Memantine', group: 'Dementia treatment', cls: 'NMDA glutamate antagonist',
    nbn: 'Glutamate NMDA receptor antagonist',
    short: 'NMDA antagonist at NAM/Mg²⁺ sites; pro-cognitive in Alzheimer disease.',
    mechanism: 'An **antagonist** at the **NAM channel/Mg²⁺ sites** of NMDA glutamate receptors. Details in Chapter 12.',
    targets: [{ t: 'nmda', action: 'antagonist', note: 'NAM channel / Mg²⁺ site' }],
    uses: ['**Pro-cognitive in Alzheimer disease**'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'Listed in Table 3-2 as the NMDA glutamate antagonist that is pro-cognitive in Alzheimer disease.', sec: 's3-drugs' }]
  },
  {
    id: 'pcp', name: 'Phencyclidine (PCP)', aka: ['angel dust'], group: 'Drug of abuse', cls: 'Dissociative hallucinogen',
    short: 'Open-channel NMDA blocker (NAM).',
    mechanism: 'A **NAM** at NMDA receptors that binds **inside the calcium channel**, getting in only **when the channel is open**, and prevents glutamate/glycine cotransmission from opening it.',
    targets: [{ t: 'nmda', action: 'negative allosteric modulator', note: 'Open-channel site' }],
    uses: ['Dissociative hallucinogen (drug of abuse)'],
    chapters: [{ ch: 'ch03', pages: '55, 66' }],
    facts: [{ ch: 'ch03', pages: '66', text: 'Also called **“angel dust”**; structurally related to the anesthetic ketamine.', sec: 's3-pam' }]
  },
  {
    id: 'ketamine', name: 'Ketamine', group: 'NMDA antagonist', cls: 'Anesthetic; rapid-acting antidepressant',
    nbn: 'Glutamate NMDA receptor antagonist (open-channel)',
    short: 'Open-channel NMDA blocker; anesthetic and rapid-acting antidepressant.',
    mechanism: 'Structurally related to PCP, ketamine is a **NAM** at NMDA receptors: it binds **inside the calcium channel**, can enter only **when the channel is open**, and prevents glutamate/glycine cotransmission from opening it. Details in Chapter 7.',
    targets: [{ t: 'nmda', action: 'negative allosteric modulator', note: 'Open-channel site' }],
    uses: ['Anesthetic', '**Treatment-resistant depression** and **suicidal thoughts**', 'Rapid-acting antidepressant'],
    chapters: [{ ch: 'ch03', pages: '55, 66' }],
    facts: [{ ch: 'ch03', pages: '66', text: 'Used as a treatment for **resistant depression and suicidal thoughts**.', sec: 's3-pam' }],
    updates: [{ year: '2025', title: 'Esketamine monotherapy', text: 'Esketamine (the S-enantiomer of ketamine) nasal spray, approved in 2019 as add-on treatment, was approved in January 2025 as **monotherapy** for treatment-resistant depression.', source: 'FDA, January 2025' }]
  },
  {
    id: 'dextromethorphan', name: 'Dextromethorphan', group: 'NMDA antagonist', cls: 'NMDA antagonist',
    nbn: 'Glutamate NMDA receptor antagonist (open-channel)',
    short: 'Open-channel NMDA antagonist.',
    mechanism: 'An **antagonist at NMDA open-channel sites** (Table 3-2). Further actions are covered in Chapter 7.',
    targets: [{ t: 'nmda', action: 'antagonist', note: 'Open-channel site' }],
    uses: ['**Pseudobulbar affect**', 'Agitation in Alzheimer disease', 'Rapid-acting antidepressant (Table 3-2 class actions)'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'Listed with PCP, ketamine and dextromethadone at NMDA open-channel sites (Table 3-2).', sec: 's3-drugs' }],
    updates: [{ year: '2022', title: 'Approved for depression', text: '**Dextromethorphan–bupropion** (Auvelity) was approved for major depressive disorder in adults in August 2022.', source: 'FDA, August 2022' }]
  },
  {
    id: 'dextromethadone', name: 'Dextromethadone', aka: ['esmethadone', 'REL-1017'], group: 'NMDA antagonist', cls: 'NMDA antagonist (investigational at publication)',
    short: 'Open-channel NMDA antagonist studied as a rapid antidepressant.',
    mechanism: 'An **antagonist at NMDA open-channel sites** (Table 3-2), studied as a rapid-acting antidepressant.',
    targets: [{ t: 'nmda', action: 'antagonist', note: 'Open-channel site' }],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'Listed among the NMDA open-channel antagonists in Table 3-2.', sec: 's3-drugs' }],
    updates: [{ year: '2024', title: 'Development halted', text: 'Relmada stopped its phase III trials of esmethadone (REL-1017) for adjunctive treatment of major depression in December 2024 after interim results showed little chance of success.', source: 'Relmada Therapeutics, December 2024' }]
  },
  {
    id: 'mirtazapine', name: 'Mirtazapine', group: 'Antidepressant', cls: 'Antidepressant',
    short: 'Among its actions, a 5HT3 antagonist.',
    mechanism: 'Blocks **5HT3** receptors as part of a multi-receptor profile covered in Chapter 7.',
    targets: [{ t: '5ht3', action: 'antagonist', note: 'Other actions added with Chapter 7' }],
    uses: ['Antidepressant; possibly pro-cognitive (Table 3-2)'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' }]
  },
  {
    id: 'vortioxetine', name: 'Vortioxetine', group: 'Antidepressant', cls: 'Antidepressant',
    short: 'Among its actions, a 5HT3 antagonist.',
    mechanism: 'Blocks **5HT3** receptors as part of a multimodal profile covered in Chapter 7.',
    targets: [{ t: '5ht3', action: 'antagonist', note: 'Other actions added with Chapter 7' }],
    uses: ['Antidepressant; possibly pro-cognitive (Table 3-2)'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' }]
  },
  {
    id: 'pregabalin', name: 'Pregabalin', group: 'Anticonvulsant', cls: 'Anticonvulsant (α2δ ligand)',
    nbn: 'Voltage-sensitive calcium channel α2δ ligand',
    short: 'Binds the α2δ subunit of presynaptic calcium channels.',
    mechanism: 'Binds the **α2δ** protein of voltage-sensitive calcium channels, which may regulate how the channel opens and closes. Reducing calcium entry at presynaptic N and P/Q channels can keep vesicles tethered and reduce release in states of excessive neurotransmission. Details in Chapters 8–10.',
    targets: [{ t: 'a2d', action: 'modulator', note: 'Binds α2δ' }],
    uses: ['Anticonvulsant', 'Class uses in chronic pain and possibly anxiety and sleep (Chapter 3 overview)'],
    chapters: [{ ch: 'ch03', pages: '71' }],
    facts: [{ ch: 'ch03', pages: '71', text: 'The α2δ protein is **the target of pregabalin and gabapentin**.', sec: 's3-vscc' }]
  },
  {
    id: 'gabapentin', name: 'Gabapentin', group: 'Anticonvulsant', cls: 'Anticonvulsant (α2δ ligand)',
    nbn: 'Voltage-sensitive calcium channel α2δ ligand',
    short: 'Binds the α2δ subunit of presynaptic calcium channels.',
    mechanism: 'Binds the **α2δ** protein of voltage-sensitive calcium channels, like pregabalin. Details in Chapters 8–10.',
    targets: [{ t: 'a2d', action: 'modulator', note: 'Binds α2δ' }],
    uses: ['Anticonvulsant', 'Class uses in chronic pain and possibly anxiety and sleep (Chapter 3 overview)'],
    chapters: [{ ch: 'ch03', pages: '71' }],
    facts: [{ ch: 'ch03', pages: '71', text: 'The α2δ protein is **the target of pregabalin and gabapentin**.', sec: 's3-vscc' }]
  }

];
