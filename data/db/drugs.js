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
    short: 'Acts at benzodiazepine receptors (GABA system).',
    mechanism: 'Acts at **benzodiazepine receptors**; the receptor mechanism (GABA-A ion channels) is covered in Chapter 3.',
    nts: ['gaba'],
    chapters: [{ ch: 'ch01', pages: '6' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' }]
  },
  {
    id: 'alprazolam', name: 'Alprazolam', brand: 'Xanax', group: 'Benzodiazepine', cls: 'Benzodiazepine',
    short: 'Acts at benzodiazepine receptors (GABA system).',
    mechanism: 'Acts at **benzodiazepine receptors**; the receptor mechanism is covered in Chapter 3. The brain may even make “its own Xanax.”',
    nts: ['gaba'],
    chapters: [{ ch: 'ch01', pages: '5–6' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' }]
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
    facts: [{ ch: 'ch02', pages: '35', text: 'Binds **SV2A** in the synaptic vesicle membrane.', sec: 's2-vesicular' }]
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
];
