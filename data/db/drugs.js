/*
 * Drug database. Entries are created when a chapter first discusses a drug and enriched by later chapters.
 *   targets: [{ t: target id, action: 'inhibitor' | 'antagonist' | 'agonist' | 'partial agonist' | ..., s: 1-4 relative strength, note }]
 *   sideEffects: [{ e: effect, via: mechanism }]   facts: [{ ch, pages, text, sec }]   updates: [{ year, title, text, source }]
 * `s` is only set where the book describes relative strength; a binding profile appears once targets exist.
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
    targets: [{ t: 'sert', action: 'inhibitor', note: 'Strength and other targets added with Chapters 2 and 7' }],
    chapters: [{ ch: 'ch01', pages: '6' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' }]
  },
  {
    id: 'fluoxetine', name: 'Fluoxetine', brand: 'Prozac', group: 'Antidepressant', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    short: 'Inhibits the serotonin transporter (SERT).',
    mechanism: 'Acts at the **serotonin transporter (SERT)**. The brain may even make “its own Prozac.” Its full profile is covered in the antidepressant chapter.',
    targets: [{ t: 'sert', action: 'inhibitor', note: 'Strength and other targets added with Chapters 2 and 7' }],
    chapters: [{ ch: 'ch01', pages: '5–6' }],
    facts: [{ ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' }]
  }
];
