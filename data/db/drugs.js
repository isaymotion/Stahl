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
    sideEffects: [
      { e: 'Blocks short-term memory', via: 'GABA-A PAM action' },
      { e: 'Sedation (sleep induction)', via: 'GABA-A PAM action' }
    ],
    chapters: [
      { ch: 'ch01', pages: '6' },
      { ch: 'ch03', pages: '55, 65' }
    ],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' },
      { ch: 'ch03', pages: '65', text: 'The book’s example of a **positive allosteric modulator**: a full agonist at the benzodiazepine site that boosts GABA’s chloride flux.', sec: 's3-pam' },
      { ch: 'ch06', pages: '259–262', text: 'Nonselective PAM at **α1, α2 and α3** benzodiazepine-sensitive GABA-A receptors (phasic inhibition); reversed by **flumazenil**.', sec: 's6-gabaa' }
    ]
  },
  {
    id: 'alprazolam', name: 'Alprazolam', brand: 'Xanax', group: 'Benzodiazepine', cls: 'Benzodiazepine',
    short: 'PAM at the benzodiazepine site of GABA-A receptors.',
    mechanism: 'Acts as a **full agonist at the benzodiazepine (PAM) site** of **GABA-A** receptors: with GABA bound, it opens the **chloride** channel further and more often, amplifying GABA’s inhibition (**phasic** inhibition). Clinically this reduces anxiety, induces sleep, blocks convulsions, blocks short-term memory and relaxes muscles. Onset can be almost immediate because ion flow changes at once.',
    nbn: 'GABA-A positive allosteric modulator (benzodiazepine site)',
    nts: ['gaba'],
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Benzodiazepine site; phasic inhibition' }],
    uses: ['**Anxiolytic**', 'Also sleep induction, anticonvulsant and muscle relaxant actions (Chapter 3)'],
    sideEffects: [
      { e: 'Blocks short-term memory', via: 'GABA-A PAM action' },
      { e: 'Sedation (sleep induction)', via: 'GABA-A PAM action' }
    ],
    chapters: [
      { ch: 'ch01', pages: '5–6' },
      { ch: 'ch03', pages: '55, 65' }
    ],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Prescribed **before benzodiazepine receptors were discovered**.', sec: 's1-nts' },
      { ch: 'ch03', pages: '65', text: 'The book’s example of a **positive allosteric modulator**: a full agonist at the benzodiazepine site that boosts GABA’s chloride flux.', sec: 's3-pam' },
      { ch: 'ch06', pages: '259–262', text: 'Nonselective PAM at **α1–3** GABA-A receptors; α2/α3 actions are thought anxiolytic, α1 actions sedating.', sec: 's6-gabaa' }
    ]
  },
  {
    id: 'flumazenil', name: 'Flumazenil', group: 'Benzodiazepine antagonist', cls: 'Benzodiazepine receptor antagonist',
    nbn: 'GABA-A benzodiazepine-site antagonist',
    short: 'Neutral antagonist that reverses benzodiazepines.',
    mechanism: 'A **neutral antagonist** at the benzodiazepine (PAM) site of GABA-A receptors. Its ability to reverse benzodiazepines shows that benzodiazepines act as **agonists** at their allosteric site (Figure 6-23).',
    nts: ['gaba'],
    targets: [{ t: 'gabaa', action: 'antagonist', note: 'Benzodiazepine site; neutral antagonist' }],
    uses: ['Reversal of benzodiazepine **anesthesia**', 'Benzodiazepine **overdose**'],
    chapters: [{ ch: 'ch06', pages: '261–262' }],
    facts: [{ ch: 'ch06', pages: '261–262', text: 'Reverses a full-agonist benzodiazepine acting at its site on the GABA-A receptor.', sec: 's6-gabaa' }]
  },
  {
    id: 'amitriptyline', name: 'Amitriptyline', brand: 'Elavil', aka: ['Endep', 'Tryptizol', 'Laroxyl'], group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    short: 'A tricyclic blocking NET and SERT plus H1, α1, muscarinic receptors and sodium channels.',
    mechanism: 'Like most TCAs it blocks both **NET** and **SERT** to some extent, plus the four unwanted TCA actions: **H1, muscarinic, α1** and **voltage-sensitive sodium channel** blockade.',
    targets: [
      { t: 'net', action: 'inhibitor' },
      { t: 'sert', action: 'inhibitor', note: 'Most TCAs block both to some extent' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ],
    chapters: [
      { ch: 'ch01', pages: '6' },
      { ch: 'ch07', pages: '333–336' }
    ],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' },
      { ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (Elavil; Endep; Tryptizol; Laroxyl).', sec: 's7-tca' }
    ],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ]
  },
  {
    id: 'clomipramine', name: 'Clomipramine', brand: 'Anafranil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['**Obsessive–compulsive disorder**', 'Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Anafranil.', sec: 's7-tca' }],
    short: 'TCA with the strongest SERT inhibition; treats OCD.',
    mechanism: 'A TCA with **equal or greater potency at SERT** than NET, plus the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'sert', action: 'inhibitor', note: 'Equal or greater than NET' },
      { t: 'net', action: 'inhibitor' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'imipramine', name: 'Imipramine', brand: 'Tofranil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Tofranil.', sec: 's7-tca' }],
    short: 'Classic TCA blocking NET and SERT.',
    mechanism: 'A classic TCA blocking **NET** and, to some extent, **SERT**, with the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'net', action: 'inhibitor' },
      { t: 'sert', action: 'inhibitor' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'desipramine', name: 'Desipramine', brand: 'Norpramin; Pertofran', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Norpramin; Pertofran.', sec: 's7-tca' }],
    short: 'Relatively NET-selective TCA.',
    mechanism: 'A TCA **more selective for NET** than SERT, with the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Relatively selective' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'nortriptyline', name: 'Nortriptyline', brand: 'Pamelor; Aventyl', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Pamelor; Aventyl.', sec: 's7-tca' }],
    short: 'Relatively NET-selective TCA.',
    mechanism: 'A TCA **more selective for NET** than SERT, with the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Relatively selective' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'protriptyline', name: 'Protriptyline', brand: 'Vivactil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Vivactil.', sec: 's7-tca' }],
    short: 'Relatively NET-selective TCA.',
    mechanism: 'A TCA **more selective for NET** than SERT, with the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Relatively selective' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'maprotiline', name: 'Maprotiline', brand: 'Ludiomil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Ludiomil.', sec: 's7-tca' }],
    short: 'Relatively NET-selective TCA.',
    mechanism: 'A TCA **more selective for NET** than SERT, with the shared H1, muscarinic, α1 and sodium channel blockade.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Relatively selective' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'amoxapine', name: 'Amoxapine', brand: 'Asendin', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Asendin.', sec: 's7-tca' }],
    short: 'Tricyclic listed in Table 7-2.',
    mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Class property' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'doxepin', name: 'Doxepin', brand: 'Sinequan; Adapin', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Sinequan; Adapin.', sec: 's7-tca' }],
    short: 'Tricyclic listed in Table 7-2.',
    mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Class property' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'trimipramine', name: 'Trimipramine', brand: 'Surmontil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Surmontil.', sec: 's7-tca' }],
    short: 'Tricyclic listed in Table 7-2.',
    mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Class property' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'dothiepin', name: 'Dothiepin', brand: 'Prothiaden', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Prothiaden.', sec: 's7-tca' }],
    short: 'Tricyclic listed in Table 7-2.',
    mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Class property' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'lofepramine', name: 'Lofepramine', brand: 'Deprimyl; Gamanil', group: 'Tricyclic antidepressant', cls: 'Tricyclic antidepressant (TCA)',
    chapters: [{ ch: 'ch07', pages: '333–336' }],
    nbn: 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'],
    uses: ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'],
    sideEffects: [
      { e: 'Sedation, weight gain', via: 'H1 antagonism' },
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' },
      { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' },
      { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }
    ],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (TCAs still in use); trade names: Deprimyl; Gamanil.', sec: 's7-tca' }],
    short: 'Tricyclic listed in Table 7-2.',
    mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.',
    targets: [
      { t: 'net', action: 'inhibitor', note: 'Class property' },
      { t: 'h1', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist' },
      { t: 'm1', action: 'antagonist', note: 'Muscarinic cholinergic receptors' },
      { t: 'vssc', action: 'blocker', note: 'Weak at therapeutic doses; lethal in overdose' }
    ]
  },
  {
    id: 'tianeptine', name: 'Tianeptine', brand: 'Coaxil; Stablon', group: 'Tricyclic antidepressant', cls: 'Listed with the tricyclics (Table 7-2)',
    chapters: [{ ch: 'ch07', pages: '335' }],
    nts: [],
    short: 'Listed in Table 7-2 among tricyclics still in use; pharmacology not described.',
    mechanism: 'Appears in the book’s table of tricyclics still in use; Chapter 7 does not describe its pharmacology.',
    uses: ['Depression (outside the US)'],
    facts: [{ ch: 'ch07', pages: '335', text: 'Listed in **Table 7-2** (Coaxil; Stablon).', sec: 's7-tca' }]
  },
  {
    id: 'phenelzine', name: 'Phenelzine', brand: 'Nardil', group: 'MAO inhibitor', cls: 'Irreversible MAO inhibitor',
    chapters: [{ ch: 'ch07', pages: '336–338' }],
    nbn: 'Monoamine oxidase inhibitor (MAO-A and MAO-B, irreversible)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    targets: [{ t: 'mao', action: 'inhibitor', note: 'Irreversible; MAO-A and MAO-B' }],
    uses: ['Treatment-resistant unipolar depression (among the most powerful options)', '**Panic disorder** and **social anxiety disorder**'],
    sideEffects: [
      { e: '**Hypertensive crisis** with dietary tyramine', via: 'MAO-A inhibition prevents breakdown of tyramine-released NE' },
      { e: 'Blood pressure rise with sympathomimetic drugs', via: 'Drug interaction' },
      { e: 'Potentially fatal **serotonin syndrome** with serotonin reuptake inhibitors', via: 'Drug interaction' }
    ],
    short: 'Classic irreversible MAOI.',
    mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; enzyme activity returns only after new enzyme is synthesized (about 2–3 weeks). Inhibiting both raises 5HT, NE **and DA**.'
  },
  {
    id: 'tranylcypromine', name: 'Tranylcypromine', brand: 'Parnate', group: 'MAO inhibitor', cls: 'Irreversible MAO inhibitor',
    chapters: [{ ch: 'ch07', pages: '336–338' }],
    nbn: 'Monoamine oxidase inhibitor (MAO-A and MAO-B, irreversible)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    targets: [{ t: 'mao', action: 'inhibitor', note: 'Irreversible; MAO-A and MAO-B' }],
    uses: ['Treatment-resistant unipolar depression (among the most powerful options)', '**Panic disorder** and **social anxiety disorder**'],
    sideEffects: [
      { e: '**Hypertensive crisis** with dietary tyramine', via: 'MAO-A inhibition prevents breakdown of tyramine-released NE' },
      { e: 'Blood pressure rise with sympathomimetic drugs', via: 'Drug interaction' },
      { e: 'Potentially fatal **serotonin syndrome** with serotonin reuptake inhibitors', via: 'Drug interaction' }
    ],
    short: 'Irreversible MAOI modeled on amphetamine.',
    mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; its structure is modeled on **amphetamine**, so it also has amphetamine-like **dopamine-releasing** properties.'
  },
  {
    id: 'isocarboxazid', name: 'Isocarboxazid', brand: 'Marplan', group: 'MAO inhibitor', cls: 'Irreversible MAO inhibitor',
    chapters: [{ ch: 'ch07', pages: '336–338' }],
    nbn: 'Monoamine oxidase inhibitor (MAO-A and MAO-B, irreversible)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    targets: [{ t: 'mao', action: 'inhibitor', note: 'Irreversible; MAO-A and MAO-B' }],
    uses: ['Treatment-resistant unipolar depression (among the most powerful options)', '**Panic disorder** and **social anxiety disorder**'],
    sideEffects: [
      { e: '**Hypertensive crisis** with dietary tyramine', via: 'MAO-A inhibition prevents breakdown of tyramine-released NE' },
      { e: 'Blood pressure rise with sympathomimetic drugs', via: 'Drug interaction' },
      { e: 'Potentially fatal **serotonin syndrome** with serotonin reuptake inhibitors', via: 'Drug interaction' }
    ],
    short: 'Classic irreversible MAOI.',
    mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; activity returns after about 2–3 weeks.'
  },
  {
    id: 'selegiline', name: 'Selegiline', brand: 'Emsam; Eldepryl', group: 'MAO inhibitor', cls: 'Irreversible MAO inhibitor (MAO-B selective at low doses)',
    chapters: [{ ch: 'ch07', pages: '336–338' }],
    nbn: 'Monoamine oxidase inhibitor (MAO-A and MAO-B, irreversible)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    targets: [{ t: 'mao', action: 'inhibitor', note: 'Irreversible; MAO-A and MAO-B' }],
    uses: ['Depression (when MAO-A is also inhibited)', '**Parkinson’s disease** (MAO-B selective doses)'],
    sideEffects: [
      { e: '**Hypertensive crisis** with dietary tyramine', via: 'MAO-A inhibition prevents breakdown of tyramine-released NE' },
      { e: 'Blood pressure rise with sympathomimetic drugs', via: 'Drug interaction' },
      { e: 'Potentially fatal **serotonin syndrome** with serotonin reuptake inhibitors', via: 'Drug interaction' }
    ],
    short: 'MAOI metabolized to l-amphetamine and l-methamphetamine; MAO-B selective at low doses.',
    mechanism: 'An irreversible MAOI. At **selective MAO-B** doses it boosts levodopa in Parkinson’s disease but is not antidepressant; inhibiting both forms is needed for depression. Has no amphetamine-like action itself but is metabolized to **l-amphetamine and l-methamphetamine**.'
  },
  {
    id: 'rasagiline', name: 'Rasagiline', brand: 'Azilect', group: 'Parkinson’s disease treatment', cls: 'MAO-B inhibitor',
    chapters: [{ ch: 'ch07', pages: '338' }],
    nbn: 'Monoamine oxidase B inhibitor',
    nts: ['dopamine'],
    short: 'Selective MAO-B inhibitor for Parkinson’s disease; not antidepressant.',
    mechanism: 'Selectively inhibits **MAO-B**, boosting concomitant **levodopa** and reducing on/off fluctuations; at selective doses it does not treat depression.',
    targets: [{ t: 'mao', action: 'inhibitor', note: 'MAO-B selective' }],
    uses: ['**Parkinson’s disease**']
  },
  {
    id: 'safinamide', name: 'Safinamide', brand: 'Xadago', group: 'Parkinson’s disease treatment', cls: 'MAO-B inhibitor',
    chapters: [{ ch: 'ch07', pages: '338' }],
    nbn: 'Monoamine oxidase B inhibitor',
    nts: ['dopamine'],
    short: 'Selective MAO-B inhibitor for Parkinson’s disease; not antidepressant.',
    mechanism: 'Selectively inhibits **MAO-B**; approved for Parkinson’s disease, not effective for depression at selective doses.',
    targets: [{ t: 'mao', action: 'inhibitor', note: 'MAO-B selective' }],
    uses: ['**Parkinson’s disease**']
  },
  {
    id: 'iproniazid', name: 'Iproniazid', group: 'MAO inhibitor', cls: 'MAO inhibitor (historical)',
    chapters: [{ ch: 'ch07', pages: '336' }],
    nbn: 'Monoamine oxidase inhibitor',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'The anti-tuberculosis drug that became the first antidepressant.',
    mechanism: 'An anti-tuberculosis drug found by accident to improve depression in tuberculosis patients; its antidepressant action was due to **MAO inhibition**, unrelated to its antitubercular effect.',
    targets: [{ t: 'mao', action: 'inhibitor' }],
    uses: ['Historical: the **first** clinically effective drug for depression']
  },
  {
    id: 'fluoxetine', name: 'Fluoxetine', brand: 'Prozac', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    nbn: 'Serotonin transport (SERT) inhibitor',
    short: 'An activating SSRI with 5HT2C antagonism and a very long half-life.',
    mechanism: 'Blocks **SERT**; also a **5HT2C antagonist**, which disinhibits NE and DA release and makes it **activating** from the first dose; weak **NET** inhibition only at very high doses. Half-life **2–3 days**; active metabolite about **2 weeks**.',
    targets: [
      { t: 'sert', action: 'inhibitor', note: 'Allosteric site (Chapter 2)' },
      { t: '5ht2c', action: 'antagonist' },
      { t: 'net', action: 'inhibitor', note: 'Weak; relevant only at very high doses' }
    ],
    uses: ['Unipolar depression (SSRIs are first-line for many depressions)', 'As a SERT blocker, part of the class used for anxiety disorders, OCD, PTSD, eating disorders and other conditions (Chapter 2 overview)', 'Only SSRI approved for **bulimia** (higher doses)', 'With **olanzapine**: treatment-resistant unipolar and bipolar depression', 'Best matched to reduced positive affect, hypersomnia, psychomotor retardation, apathy, fatigue'],
    chapters: [
      { ch: 'ch01', pages: '5–6' },
      { ch: 'ch02', pages: '33' },
      { ch: 'ch05', pages: '226' },
      { ch: 'ch07', pages: '289–294, 325–326, 343' }
    ],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' },
      { ch: 'ch02', pages: '33', text: 'The book’s example of an SSRI at SERT’s **inhibitory allosteric site** (the “front seat” of the transporter wagon), reducing SERT’s affinity for serotonin.', sec: 's2-monoamine' },
      { ch: 'ch05', pages: '226', text: 'Combined with **olanzapine** for bipolar depression and treatment-resistant unipolar depression; 5HT2C antagonism of both may contribute.', sec: 's5-pines' },
      { ch: 'ch07', pages: '293–294', text: 'Long half-life reduces **withdrawal** reactions but means slow washout before starting drugs such as an **MAOI**; available once daily and **once weekly**.', sec: 's7-ssri-agents' }
    ],
    sideEffects: [{ e: 'Unwanted activation, even panic, in agitated, anxious or insomniac patients', via: '5HT2C antagonism' }]
  },
  {
    id: 'sertraline', name: 'Sertraline', brand: 'Zoloft', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    chapters: [{ ch: 'ch07', pages: '292–295' }],
    nbn: 'Serotonin transport (SERT) inhibitor',
    nts: ['serotonin', 'dopamine'],
    short: 'SSRI with weak DAT inhibition and σ1 binding.',
    mechanism: 'Blocks **SERT**; also weakly inhibits **DAT** (clinical relevance debated, though a little DAT inhibition may aid energy, motivation and concentration) and binds **σ1** receptors.',
    targets: [
      { t: 'sert', action: 'inhibitor' },
      { t: 'dat', action: 'inhibitor', note: 'Weak; relevance debated' },
      { t: 'sigma', action: 'binds', note: 'σ1' }
    ],
    uses: ['Unipolar major depression', 'Anxiety disorders, PTSD, OCD, premenstrual dysphoric disorder, eating disorders (class uses)', 'Mild activation may help **atypical depression** (hypersomnia, low energy, mood reactivity)', 'Possible advantage in **psychotic/delusional depression** (σ1)', 'With bupropion (“Well-oft”)'],
    sideEffects: [
      { e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' },
      { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' },
      { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' },
      { e: 'Overactivation of some **panic** patients (titrate slowly)', via: 'Weak DAT inhibition' }
    ],
    facts: [{ ch: 'ch07', pages: '294–295', text: 'σ1 actions may contribute to anxiolytic effects and benefit in psychotic and delusional depression.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'paroxetine', name: 'Paroxetine', brand: 'Paxil', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    chapters: [{ ch: 'ch07', pages: '294–295' }],
    nbn: 'Serotonin transport (SERT) inhibitor',
    nts: ['serotonin', 'norepinephrine', 'acetylcholine'],
    short: 'Calming SSRI with mild anticholinergic, weak NET and NOS-inhibiting actions.',
    mechanism: 'Blocks **SERT**; mild **M1** antagonism (calming, even sedating early), weak **NET** inhibition (may add antidepressant action at high doses) and inhibition of **nitric oxide synthase**.',
    targets: [
      { t: 'sert', action: 'inhibitor' },
      { t: 'm1', action: 'antagonist', note: 'Mild' },
      { t: 'net', action: 'inhibitor', note: 'Weak to moderate' },
      { t: 'nos', action: 'inhibitor' }
    ],
    uses: ['Unipolar major depression', 'Anxiety disorders, PTSD, OCD, premenstrual dysphoric disorder, eating disorders (class uses)'],
    sideEffects: [
      { e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' },
      { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' },
      { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' },
      { e: 'Sexual dysfunction, especially in men', via: 'NOS inhibition plus 5HT2A/2C stimulation' },
      { e: 'Notorious **withdrawal**: akathisia, restlessness, GI upset, dizziness, tingling', via: 'SERT inhibition plus **anticholinergic rebound**' }
    ],
    facts: [{ ch: 'ch07', pages: '295', text: 'A **controlled-release** form may reduce side effects including discontinuation reactions.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'fluvoxamine', name: 'Fluvoxamine', brand: 'Luvox', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    chapters: [{ ch: 'ch07', pages: '295' }],
    nbn: 'Serotonin transport (SERT) inhibitor',
    nts: ['serotonin'],
    short: 'SSRI with potent σ1 binding; an OCD drug in the US.',
    mechanism: 'Blocks **SERT** and binds **σ1** sites more potently than sertraline; preclinical data suggest it may be a σ1 **agonist**, possibly adding anxiolytic action.',
    targets: [
      { t: 'sert', action: 'inhibitor' },
      { t: 'sigma', action: 'binds', note: 'σ1; possibly agonist' }
    ],
    uses: ['**OCD** (never approved for depression in the US)', 'Depression elsewhere; one of the first SSRIs launched worldwide', 'Psychotic/delusional depression', 'CR form: high remission in **OCD** and **social anxiety disorder**'],
    sideEffects: [
      { e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' },
      { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' },
      { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' }
    ],
    facts: [{ ch: 'ch07', pages: '295', text: 'The **controlled-release** form allows once-daily dosing (IR often twice daily) and may cause less peak-dose sedation.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'citalopram', name: 'Citalopram', brand: 'Celexa', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    chapters: [{ ch: 'ch07', pages: '295–296' }],
    nbn: 'Serotonin transport (SERT) inhibitor',
    nts: ['serotonin'],
    short: 'Racemic SSRI; the R enantiomer adds antihistamine action and may hinder SERT inhibition.',
    mechanism: 'A racemic mixture of **R and S** enantiomers. S inhibits **SERT**; R carries weak **antihistamine** action and may act at SERT in a way that **interferes** with S, reducing net SERT inhibition, especially at low doses.',
    targets: [
      { t: 'sert', action: 'inhibitor', note: 'S enantiomer' },
      { t: 'h1', action: 'antagonist', note: 'Weak; R enantiomer' }
    ],
    uses: ['Unipolar depression; favorable findings in the **elderly**'],
    sideEffects: [
      { e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' },
      { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' },
      { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' },
      { e: '**QTc prolongation** at higher doses (limits dose increases)', via: 'Dose-related' }
    ],
    facts: [{ ch: 'ch07', pages: '295–296', text: 'Generally well tolerated but somewhat **inconsistent** at the lowest dose, often needing a dose increase that QTc concerns limit.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'escitalopram', name: 'Escitalopram', brand: 'Lexapro', group: 'SSRI', cls: 'Selective serotonin reuptake inhibitor (SSRI)',
    chapters: [{ ch: 'ch07', pages: '296' }],
    nbn: 'Serotonin transport (SERT) inhibitor',
    nts: ['serotonin'],
    short: 'The pure S enantiomer of citalopram: the “quintessential SSRI.”',
    mechanism: 'The active **S enantiomer** of citalopram, without the R enantiomer. **Pure SERT inhibition** explains almost all of its actions.',
    targets: [{ t: 'sert', action: 'inhibitor' }],
    uses: ['Unipolar major depression', 'Anxiety disorders, PTSD, OCD, premenstrual dysphoric disorder, eating disorders (class uses)'],
    sideEffects: [
      { e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' },
      { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' },
      { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' }
    ],
    facts: [{ ch: 'ch07', pages: '296', text: 'No antihistamine action, no higher-dose **QTc** restriction, lowest dose predictably effective; perhaps the **best-tolerated** SSRI with the **fewest CYP450 interactions**.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'vilazodone', name: 'Vilazodone', brand: 'Viibryd', group: 'Antidepressant', cls: 'Serotonin partial agonist reuptake inhibitor (SPARI)',
    chapters: [{ ch: 'ch07', pages: '296–298' }],
    nbn: 'Serotonin reuptake inhibitor and 5HT1A partial agonist',
    nts: ['serotonin', 'dopamine'],
    short: 'SPARI: SERT inhibition plus 5HT1A partial agonism in one molecule.',
    mechanism: 'Inhibits **SERT** and is a **5HT1A partial agonist**. About half of SERTs and half of 5HT1A receptors are occupied immediately; partial agonism at somatodendritic autoreceptors speeds their **desensitization**, and postsynaptic 5HT1A action may release **dopamine** downstream.',
    targets: [
      { t: 'sert', action: 'inhibitor' },
      { t: '5ht1a', action: 'partial agonist' }
    ],
    uses: ['Unipolar depression'],
    sideEffects: [{ e: 'Less sexual dysfunction and weight gain (observed)', via: 'Downstream DA release from 5HT1A partial agonism' }],
    facts: [{ ch: 'ch07', pages: '296', text: 'Recreates in one drug the long-used strategy of adding a 5HT1A partial agonist (buspirone, aripiprazole, brexpiprazole, cariprazine, quetiapine) to an SSRI, avoiding drug interactions and off-target effects.', sec: 's7-spari' }]
  },
  {
    id: 'venlafaxine', name: 'Venlafaxine', brand: 'Effexor XR', group: 'SNRI', cls: 'Serotonin–norepinephrine reuptake inhibitor (SNRI)',
    chapters: [{ ch: 'ch07', pages: '298–302' }],
    nbn: 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'SNRI whose NET inhibition grows with dose; CYP2D6 converts it to desvenlafaxine.',
    mechanism: 'Inhibits **SERT** potently even at low doses and **NET** with moderate potency, robustly only at **higher doses**; no significant other receptor actions. **CYP2D6** converts it to **desvenlafaxine**, normally about twice the plasma level of parent drug.',
    targets: [
      { t: 'sert', action: 'inhibitor', s: 3, note: 'Robust at low doses' },
      { t: 'net', action: 'inhibitor', s: 2, note: 'Recruited at higher doses' },
      { t: 'cyp2d6', action: 'substrate', note: 'Converted to desvenlafaxine' }
    ],
    uses: ['Unipolar depression; efficacy often rises with dose (noradrenergic boost)', 'Several **anxiety disorders**'],
    sideEffects: [
      { e: 'Sweating, raised blood pressure', via: 'NET inhibition' },
      { e: 'Nausea and other serotonergic effects', via: 'SERT inhibition' },
      { e: 'Bothersome **withdrawal**, especially after high-dose long-term use', via: 'Sudden discontinuation' },
      { e: 'Nausea, worse with the IR form', via: 'IR formulation (now little used)' }
    ],
    facts: [{ ch: 'ch07', pages: '302', text: '2D6 inhibitors and **poor metabolizers** shift the ratio toward parent venlafaxine, reducing NET inhibition: how much NET inhibition a dose gives is **unpredictable**. The XR form is a considerable improvement over IR.', sec: 's7-snri-agents' }]
  },
  {
    id: 'desvenlafaxine', name: 'Desvenlafaxine', brand: 'Pristiq', group: 'SNRI', cls: 'Serotonin–norepinephrine reuptake inhibitor (SNRI)',
    chapters: [{ ch: 'ch07', pages: '302' }],
    nbn: 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'Active metabolite of venlafaxine with more consistent NET inhibition.',
    mechanism: 'Inhibits **SERT and NET**, with **more NET relative to SERT** than venlafaxine but still more potent at SERT. As a separate drug it gives more consistent NET inhibition across patients.',
    targets: [
      { t: 'sert', action: 'inhibitor', s: 3 },
      { t: 'net', action: 'inhibitor', s: 2, note: 'Relatively greater than venlafaxine' }
    ],
    uses: ['Unipolar depression'],
    sideEffects: [
      { e: 'Sweating, raised blood pressure', via: 'NET inhibition' },
      { e: 'Nausea and other serotonergic effects', via: 'SERT inhibition' }
    ],
    facts: [{ ch: 'ch07', pages: '302', text: 'Less need for dose titration than venlafaxine because NET inhibition does not depend on CYP2D6 conversion.', sec: 's7-snri-agents' }]
  },
  {
    id: 'duloxetine', name: 'Duloxetine', brand: 'Cymbalta', group: 'SNRI', cls: 'Serotonin–norepinephrine reuptake inhibitor (SNRI)',
    chapters: [{ ch: 'ch07', pages: '299, 302–303' }],
    nbn: 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'SNRI that treats depression, pain and painful physical symptoms.',
    mechanism: 'Inhibits **SERT slightly more potently than NET**. NET inhibition seems critical for pain relief and, via raised PFC NE and DA, for cognitive symptoms.',
    targets: [
      { t: 'sert', action: 'inhibitor', s: 3 },
      { t: 'net', action: 'inhibitor', s: 2, note: 'Slightly weaker than SERT' }
    ],
    uses: ['Unipolar depression, including **painful physical symptoms**', 'Diabetic peripheral **neuropathic pain**, **fibromyalgia**, chronic **musculoskeletal pain** (osteoarthritis, low back)', '**Cognitive symptoms** of geriatric depression'],
    sideEffects: [
      { e: 'Sweating, raised blood pressure', via: 'NET inhibition' },
      { e: 'Nausea and other serotonergic effects', via: 'SERT inhibition' }
    ],
    facts: [{ ch: 'ch07', pages: '302–303', text: 'Showed that somatic pain is a legitimate symptom of depression. Usually started **twice daily**; once daily after tolerance. Less hypertension and milder withdrawal than venlafaxine.', sec: 's7-snri-agents' }]
  },
  {
    id: 'milnacipran', name: 'Milnacipran', brand: 'Savella; Ixel', group: 'SNRI', cls: 'Serotonin–norepinephrine reuptake inhibitor (SNRI)',
    chapters: [{ ch: 'ch07', pages: '300, 303' }],
    nbn: 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'SNRI that is more potent at NET than SERT; for fibromyalgia in the US.',
    mechanism: 'A racemic SNRI that is **more potent at NET than SERT**, unlike venlafaxine and duloxetine. The S (levo) enantiomer is the active one.',
    targets: [
      { t: 'net', action: 'inhibitor', s: 3 },
      { t: 'sert', action: 'inhibitor', s: 2 }
    ],
    uses: ['**Fibromyalgia** (US); **depression** (Europe, Japan)', 'Possibly painful physical symptoms, neuropathic pain and cognitive symptoms (“**fibro-fog**”)'],
    sideEffects: [
      { e: 'More **sweating** and **urinary hesitancy**', via: 'Robust NET inhibition (bladder α1)' },
      { e: 'Energizing/activating', via: 'NET inhibition' }
    ],
    facts: [{ ch: 'ch07', pages: '303', text: 'The first SNRI in Japan and many European countries. Needs **twice-daily** dosing (short half-life). An α1 antagonist relieves urinary hesitancy.', sec: 's7-snri-agents' }]
  },
  {
    id: 'levomilnacipran', name: 'Levomilnacipran', brand: 'Fetzima', group: 'SNRI', cls: 'Serotonin–norepinephrine reuptake inhibitor (SNRI)',
    chapters: [{ ch: 'ch07', pages: '300, 303' }],
    nbn: 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)',
    nts: ['serotonin', 'norepinephrine', 'dopamine'],
    short: 'The active S enantiomer of milnacipran; once-daily SNRI for MDD.',
    mechanism: 'The active **S enantiomer** of milnacipran, with **greater NET than SERT** inhibition, in a controlled-release once-daily form.',
    targets: [
      { t: 'net', action: 'inhibitor', s: 3 },
      { t: 'sert', action: 'inhibitor', s: 2 }
    ],
    uses: ['Unipolar major depressive disorder (US); may target **fatigue and low energy**'],
    sideEffects: [
      { e: 'Sweating, raised blood pressure', via: 'NET inhibition' },
      { e: 'Nausea and other serotonergic effects', via: 'SERT inhibition' }
    ],
    facts: [{ ch: 'ch07', pages: '303', text: 'Unlike racemic milnacipran it is given **once daily**.', sec: 's7-snri-agents' }]
  },
  {
    id: 'bupropion', name: 'Bupropion', brand: 'Wellbutrin', group: 'Antidepressant', cls: 'Norepinephrine–dopamine reuptake inhibitor (NDRI)',
    chapters: [{ ch: 'ch07', pages: '303–306, 333, 353–354' }],
    nbn: 'Norepinephrine and dopamine reuptake inhibitor (NET/DAT)',
    nts: ['norepinephrine', 'dopamine'],
    short: 'NDRI with low, slow DAT occupancy; activating, no sexual dysfunction.',
    mechanism: 'Weakly inhibits **DAT** and **NET**; active metabolites (most potently **radafaxine**, the + enantiomer of 6-hydroxy-bupropion) are more potent at NET, equally potent at DAT and concentrated in brain. PET shows only **10–30%** striatal DAT occupancy: **low, slow and long-lasting**, enough to help without abuse. Also a **CYP2D6 inhibitor**.',
    targets: [
      { t: 'dat', action: 'inhibitor', note: 'Weak; metabolites contribute' },
      { t: 'net', action: 'inhibitor', note: 'Weak; metabolites more potent' },
      { t: 'cyp2d6', action: 'inhibitor' }
    ],
    uses: ['Unipolar depression, especially **reduced positive affect** (“dopamine deficiency syndrome”)', 'Augmenting or replacing SSRIs/SNRIs (residual or drug-induced low energy, interest)', '**Smoking cessation**', 'With **naltrexone**: obesity', 'With **dextromethorphan**: depression and Alzheimer agitation (in trials at publication)'],
    sideEffects: [
      { e: '**Seizures** at peak plasma levels (reduced by SR and XL)', via: 'Peak drug levels' },
      { e: 'Activation, stimulation', via: 'NE and DA reuptake inhibition' },
      { e: 'No significant sexual dysfunction', via: 'No serotonergic component' }
    ],
    facts: [
      { ch: 'ch07', pages: '306', text: 'IR (three times daily) → SR (twice daily) → **XL** (once daily); IR is all but abandoned.', sec: 's7-ndri' },
      { ch: 'ch07', pages: '333–334', text: 'SSRI or SNRI + bupropion = **triple-action** combination, among the most popular in the US.', sec: 's7-combos' }
    ],
    updates: [{ year: '2022', title: 'Combined with dextromethorphan for depression', text: '**Dextromethorphan–bupropion** (Auvelity) was approved for major depressive disorder in adults in August 2022, and for agitation associated with Alzheimer dementia in April 2026.', source: 'FDA, August 2022; Axsome Therapeutics, April 30, 2026' }]
  },
  {
    id: 'agomelatine', name: 'Agomelatine', brand: 'Valdoxan', group: 'Antidepressant', cls: 'Melatonergic agonist and 5HT2C antagonist',
    chapters: [{ ch: 'ch07', pages: '306–308' }],
    nbn: 'Melatonin MT1/MT2 receptor agonist and serotonin 5HT2C receptor antagonist',
    nts: ['melatonin', 'serotonin', 'norepinephrine', 'dopamine'],
    short: 'MT1/MT2 agonist and 5HT2C/5HT2B antagonist that may reset circadian rhythms.',
    mechanism: 'An **MT1/MT2 agonist** (“substitute melatonin” in the SCN) and a **5HT2C** and 5HT2B **antagonist**. 5HT2C blockade disinhibits **NE and DA** release in the PFC; combined SCN actions may **resynchronize** circadian rhythms and reverse the phase delay of depression.',
    targets: [
      { t: 'mt1mt2', action: 'agonist' },
      { t: '5ht2c', action: 'antagonist' },
      { t: '5ht2b', action: 'antagonist' }
    ],
    uses: ['Unipolar depression (many countries **outside the US**)'],
    facts: [{ ch: 'ch07', pages: '307–308', text: 'Melatonin and 5HT2C receptors in the SCN are expressed most at night; agomelatine acts on both to reset rhythms (Figure 7-39).', sec: 's7-agomelatine' }]
  },
  {
    id: 'methylphenidate', name: 'Methylphenidate', group: 'Stimulant', cls: 'Stimulant (ADHD)',
    nbn: 'Dopamine and norepinephrine transport (DAT/NET) inhibitor',
    short: 'Blocks DAT and NET; acts only at the transporters.',
    mechanism: 'Blocks the **dopamine (DAT)** and **norepinephrine (NET)** transporters, enhancing synaptic dopamine and norepinephrine. Unlike amphetamine it targets **only the monoamine transporters**, much as SSRIs act at SERT.',
    targets: [
      { t: 'dat', action: 'inhibitor', note: 'Strength added with Chapter 11' },
      { t: 'net', action: 'inhibitor' }
    ],
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
    targets: [
      { t: 'dat', action: 'substrate', note: 'Transported (“false substrate”)' },
      { t: 'net', action: 'substrate' },
      { t: 'vmat2', action: 'substrate', note: 'Transported into vesicles' }
    ],
    uses: ['ADHD', 'Indirect dopamine agonism improves depression and wakefulness (Table 2-5)'],
    chapters: [
      { ch: 'ch02', pages: '31–35, 40' },
      { ch: 'ch04', pages: '78–79' },
      { ch: 'ch07', pages: '337, 356' }
    ],
    facts: [
      { ch: 'ch02', pages: '31', text: 'Listed in Table 2-1 as a false substrate of both **NET and DAT**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: '**Amphetamine has two targets**: monoamine transporters and VMATs (as a transported substrate).', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '79', text: 'Dopamine release by amphetamine causes a **paranoid psychosis** much like schizophrenia: a cornerstone of the dopamine hypothesis. Table 4-1 lists psychostimulants as **D2 agonist** models with auditory hallucinations, paranoid delusions and no insight.', sec: 's4-three' },
      { ch: 'ch05', pages: '174', text: 'A false substrate of **VMAT2** that competes with natural transmitters; dopamine or amphetamine are the “too hot” end of the Goldilocks analogy.', sec: 's5-vmat2' },
      { ch: 'ch07', pages: '337', text: 'Amphetamine is also a **weak, reversible MAO inhibitor**; some MAOIs (tranylcypromine, selegiline via metabolites) are closely linked to amphetamine.', sec: 's7-maoi' }
    ]
  },
  {
    id: 'cocaine', name: 'Cocaine', group: 'Drug of abuse', cls: 'Stimulant drug of abuse',
    short: 'Blocks DAT and NET; acts only at the transporters.',
    mechanism: 'Acts on **DAT and NET**, blocking reuptake. Like methylphenidate, it targets **only the monoamine transporters**, not VMATs.',
    targets: [
      { t: 'dat', action: 'inhibitor' },
      { t: 'net', action: 'inhibitor' }
    ],
    chapters: [
      { ch: 'ch02', pages: '34–35' },
      { ch: 'ch04', pages: '78, 90' }
    ],
    facts: [
      { ch: 'ch02', pages: '34–35', text: 'The “stimulant” drug of abuse cocaine acts on **DAT and NET** in much the same manner as SSRIs at SERT.', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '78, 90', text: 'A psychostimulant model of psychosis (Table 4-1: auditory hallucinations, paranoid delusions, no insight) that causes mesolimbic dopamine hyperactivity **directly**.', sec: 's4-mesolimbic' }
    ]
  },
  {
    id: 'methamphetamine', name: 'Methamphetamine', group: 'Drug of abuse', cls: 'Stimulant drug of abuse',
    short: 'Psychostimulant that causes mesolimbic dopamine hyperactivity directly.',
    mechanism: 'A psychostimulant whose mesolimbic dopamine hyperactivity is a **direct** pharmacological effect; its abuse is covered in Chapter 13.',
    nts: ['dopamine'],
    sideEffects: [{ e: 'Paranoid psychosis', via: 'Mesolimbic dopamine excess' }],
    chapters: [{ ch: 'ch04', pages: '90' }],
    facts: [{ ch: 'ch04', pages: '90', text: 'With cocaine, the book’s example of a drug that produces mesolimbic hyperdopaminergia **directly**, unlike the indirect mechanisms of schizophrenia and other psychoses.', sec: 's4-mesolimbic' }]
  },
  {
    id: 'levodopa', name: 'Levodopa', aka: ['L-DOPA'], group: 'Parkinson’s disease treatment', cls: 'Dopamine precursor',
    short: 'Dopamine precursor for Parkinson’s disease; chronic use causes dyskinesias.',
    mechanism: 'A dopamine precursor used to treat **Parkinson’s disease**. Chronic stimulation of nigrostriatal **D2** receptors is thought to cause **levodopa-induced dyskinesias (LID)**.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'agonist', note: 'Indirect, via dopamine formed from levodopa' }],
    uses: ['**Parkinson’s disease**'],
    sideEffects: [{ e: 'Levodopa-induced dyskinesias', via: 'Chronic nigrostriatal D2 stimulation' }],
    chapters: [
      { ch: 'ch04', pages: '88–89' },
      { ch: 'ch05', pages: '171' }
    ],
    facts: [
      { ch: 'ch04', pages: '88–89', text: 'Chronic D2 stimulation by levodopa produces abnormal hyperkinetic movements (**LID**); chronic D2 **blockade** produces tardive dyskinesia.', sec: 's4-da-pathways' },
      { ch: 'ch05', pages: '171', text: 'Chronic levodopa causes dyskinesias that look like TD, perhaps through the same aberrant striatal plasticity; amantadine has some evidence for LID.', sec: 's5-td' }
    ]
  },
  {
    id: 'mdma', name: 'MDMA', brand: '“Ecstasy”', aka: ['3,4-methylenedioxymethamphetamine', 'midomafetamine'], group: 'Drug of abuse', cls: 'Empathogen; drug of abuse',
    short: 'A false substrate of SERT that releases serotonin.',
    mechanism: 'An amphetamine derivative: a powerful **SERT inhibitor** with **VMAT2** inhibition (it is a false substrate), so it releases **serotonin** (and dopamine). Released 5HT acts at all serotonin receptors, especially **5HT2A**.',
    targets: [{ t: 'sert', action: 'substrate', note: 'Transported (“false substrate”)' }],
    uses: ['“Empathogen”: experimental treatment of PTSD, especially with psychotherapy (at publication)'],
    chapters: [
      { ch: 'ch02', pages: '31–33, 40' },
      { ch: 'ch07', pages: '355–358' }
    ],
    facts: [
      { ch: 'ch02', pages: '31–33', text: 'SERT has high affinity for transporting **Ecstasy (MDMA)** as well as serotonin (Table 2-1).', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '40', text: 'Serotonin release by MDMA produces **indirect 5HT2A/2C agonism**: “empathogen,” experimental for PTSD with psychotherapy (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '174', text: 'Like amphetamine, carried by VMAT2 as a **false substrate**.', sec: 's5-vmat2' },
      { ch: 'ch07', pages: '356–357', text: 'In hallucinogen-assisted psychotherapy it may promote **trust, closeness**, energy and emotional warmth. Tested for PTSD, existential distress in terminal illness, social anxiety in autism, refractory depression and substance abuse. Street MDMA is often contaminated.', sec: 's7-psychedelics' }
    ],
    updates: [{ year: '2024', title: 'Not approved for PTSD', text: 'In August 2024 the FDA issued a **complete response letter** declining approval of MDMA-assisted therapy (midomafetamine) for PTSD and requested another phase III trial.', source: 'FDA complete response letter to Lykos Therapeutics, August 9, 2024' }],
    sideEffects: [
      { e: '**Hyperthermia**, organ damage, death (especially dancing all night, dehydrated)', via: 'Possibly 5HT2A stimulation' },
      { e: 'Distorted sensory and time perception, hallucinations', via: '5HT2A stimulation' }
    ]
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
    facts: [
      { ch: 'ch02', pages: '35', text: 'Binds **SV2A** in the synaptic vesicle membrane.', sec: 's2-vesicular' },
      { ch: 'ch03', pages: '72', text: 'SV2A is drawn on the synaptic vesicle beside the **snare proteins** that tie vesicles to N and P/Q calcium channels (Figure 3-24).', sec: 's3-vscc' }
    ]
  },
  {
    id: 'tetrabenazine', name: 'Tetrabenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'Inhibits VMAT2, especially in dopamine neurons.',
    mechanism: 'A **reversible VMAT2** inhibitor that preferentially depletes **dopamine** at clinical doses. An **inactive prodrug**: carbonyl reductase makes four active dihydro metabolites (mostly the **+β** enantiomer; –α and –β add 5HT7 and some D2 antagonism), all inactivated by **CYP2D6** (Figure 5-11A).',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['**Chorea of Huntington’s disease** (not approved for TD in the book)'],
    chapters: [
      { ch: 'ch02', pages: '35, 50' },
      { ch: 'ch05', pages: '174–179' }
    ],
    facts: [
      { ch: 'ch02', pages: '35', text: 'With its derivatives deutetrabenazine and valbenazine, an **inhibitor of VMATs**.', sec: 's2-vesicular' },
      { ch: 'ch05', pages: '174–176', text: 'Reversibly inhibits only VMAT2 (unlike reserpine), so lacks reserpine’s peripheral side effects.', sec: 's5-vmat2' }
    ],
    sideEffects: [
      { e: 'Peak-dose **sedation** and **drug-induced parkinsonism**', via: 'Dopamine depletion' },
      { e: 'Depression and **suicide** risk (Huntington’s)', via: 'Monoamine depletion' }
    ],
    pearls: ['Short half-life: **three times daily**', '**CYP2D6 genotyping** needed to go to higher doses']
  },
  {
    id: 'deutetrabenazine', name: 'Deutetrabenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'A tetrabenazine derivative that inhibits VMAT2.',
    mechanism: '**Deuterated** tetrabenazine: some hydrogens are replaced by deuterium, making it a poorer **CYP2D6** substrate, with a longer half-life, lower peaks and fewer peak-dose side effects. Its metabolites are the same as tetrabenazine’s (Figure 5-11B).',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['**Tardive dyskinesia**', '**Huntington’s disease** chorea'],
    chapters: [
      { ch: 'ch02', pages: '35, 50' },
      { ch: 'ch05', pages: '175–176' }
    ],
    facts: [
      { ch: 'ch02', pages: '35', text: 'A tetrabenazine derivative acting as a **VMAT inhibitor**.', sec: 's2-vesicular' },
      { ch: 'ch05', pages: '175–176', text: 'Deuteration can also restart patent life, creating incentives for drug development.', sec: 's5-vmat2' }
    ],
    pearls: ['**Twice daily, with food**', 'No genotyping needed for the full dose range; no suicide warning for TD']
  },
  {
    id: 'valbenazine', name: 'Valbenazine', group: 'VMAT2 inhibitor', cls: 'VMAT2 inhibitor',
    nbn: 'Vesicular monoamine transporter 2 (VMAT2) inhibitor',
    short: 'A tetrabenazine derivative that inhibits VMAT2.',
    mechanism: 'Tetrabenazine’s **+α enantiomer linked to valine**. After slow hydrolysis, carbonyl reductase yields only **+α-dihydrotetrabenazine**, the most selective and potent VMAT2 inhibitor of the four metabolites (Figure 5-11C).',
    targets: [{ t: 'vmat2', action: 'inhibitor' }],
    uses: ['**Tardive dyskinesia**'],
    chapters: [
      { ch: 'ch02', pages: '35, 50' },
      { ch: 'ch05', pages: '176' }
    ],
    facts: [
      { ch: 'ch02', pages: '35', text: 'A tetrabenazine derivative acting as a **VMAT inhibitor**.', sec: 's2-vesicular' },
      { ch: 'ch05', pages: '176', text: 'Slow hydrolysis gives a long half-life and once-daily dosing.', sec: 's5-vmat2' }
    ],
    updates: [{ year: '2023', title: 'Huntington’s disease chorea', text: 'Approved by the FDA in August 2023 for **chorea associated with Huntington’s disease**, in addition to tardive dyskinesia.', source: 'Neurocrine Biosciences / FDA, August 2023' }],
    pearls: ['Long half-life: **once daily**', 'No genotyping, no food requirement, **no suicide warning**']
  },
  {
    id: 'reserpine', name: 'Reserpine', group: 'VMAT inhibitor', cls: 'Irreversible VMAT1/VMAT2 inhibitor',
    short: 'Irreversible VMAT1 and VMAT2 inhibitor; once used for hypertension.',
    mechanism: 'Inhibits both **VMAT1 and VMAT2** irreversibly, depleting monoamines centrally and peripherally.',
    targets: [{ t: 'vmat2', action: 'inhibitor', note: 'Irreversible; also VMAT1' }],
    uses: ['Formerly hypertension'],
    sideEffects: [{ e: 'Orthostatic hypotension, stuffy nose, itching, GI effects', via: 'Peripheral VMAT1 inhibition' }],
    chapters: [{ ch: 'ch05', pages: '174–175' }],
    facts: [{ ch: 'ch05', pages: '174–175', text: 'Its peripheral side effects contrast with tetrabenazine-related drugs, which spare VMAT1.', sec: 's5-vmat2' }]
  },
  {
    id: 'benztropine', name: 'Benztropine', group: 'Anticholinergic', cls: 'Muscarinic antagonist (anticholinergic)',
    short: 'Commonly used anticholinergic for drug-induced parkinsonism.',
    mechanism: 'Blocks **muscarinic** (especially M1) receptors, offsetting the excess striatal acetylcholine released when D2 receptors are blocked, partly restoring the dopamine–acetylcholine balance (Figure 5-7C).',
    nts: ['acetylcholine'],
    targets: [
      { t: 'm1', action: 'antagonist' },
      { t: 'm2m3', action: 'antagonist', note: 'Peripheral side effects' }
    ],
    uses: ['**Drug-induced parkinsonism**', 'IM anticholinergic for **acute dystonia**'],
    sideEffects: [
      { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Peripheral muscarinic blockade' },
      { e: 'Drowsiness; memory, concentration and processing problems', via: 'Central muscarinic blockade' },
      { e: '**Paralytic ileus** with other anticholinergics (e.g., clozapine)', via: 'Total anticholinergic burden' }
    ],
    pearls: ['Does not help **akathisia** much and may worsen **tardive dystonia**'],
    chapters: [{ ch: 'ch05', pages: '166–169, 225' }],
    facts: [{ ch: 'ch05', pages: '166–169', text: 'Stahl warns that many patients on D2 blockers are overmedicated with total anticholinergic burden; alternatives should often be sought.', sec: 's5-motor' }]
  },
  {
    id: 'amantadine', name: 'Amantadine', group: 'Movement disorder treatment', cls: 'Weak NMDA antagonist',
    short: 'Non-anticholinergic option for drug-induced parkinsonism.',
    mechanism: 'Thought to be a **weak NMDA antagonist**, possibly changing dopamine activity downstream in the direct and indirect striatal motor pathways; it lacks anticholinergic properties.',
    nts: ['glutamate', 'dopamine'],
    targets: [{ t: 'nmda', action: 'antagonist', note: 'Weak' }],
    uses: ['**Drug-induced parkinsonism**', 'Some evidence in **tardive dyskinesia** and **levodopa-induced dyskinesia**'],
    chapters: [{ ch: 'ch05', pages: '169' }],
    facts: [{ ch: 'ch05', pages: '169', text: 'Useful whatever its actual mechanism; an alternative to adding anticholinergic burden.', sec: 's5-motor' }]
  },
  {
    id: 'dantrolene', name: 'Dantrolene', group: 'Muscle relaxant', cls: 'Muscle relaxant',
    short: 'Muscle relaxant used in neuroleptic malignant syndrome.',
    mechanism: 'A **muscle-relaxing** agent used, with dopamine agonists and intensive support, after withdrawing the D2 blocker in **neuroleptic malignant syndrome**.',
    uses: ['**Neuroleptic malignant syndrome**'],
    chapters: [{ ch: 'ch05', pages: '169–170' }],
    facts: [{ ch: 'ch05', pages: '169–170', text: 'NMS is a medical emergency requiring withdrawal of the D2 blocker, dantrolene and dopamine agonists, and intensive supportive care.', sec: 's5-motor' }]
  },
  {
    id: 'metformin', name: 'Metformin', group: 'Metabolic adjunct', cls: 'Antidiabetic',
    short: 'Antidiabetic that can limit weight gain from drugs for psychosis.',
    mechanism: 'An anti-diabetes drug; in Chapter 5 it is a co-therapy for drug-induced weight gain.',
    uses: ['Weight loss after drug-induced weight gain; **reduces weight gain** when starting a high- or moderate-risk agent'],
    chapters: [{ ch: 'ch05', pages: '201' }],
    facts: [{ ch: 'ch05', pages: '201', text: 'Shown in several studies to reduce weight gain with high- or moderate-metabolic-risk agents.', sec: 's5-metabolic' }]
  },
  {
    id: 'samidorphan', name: 'Samidorphan', group: 'Metabolic adjunct', cls: 'μ-Opioid antagonist',
    short: 'μ-Opioid antagonist combined with olanzapine to reduce weight gain.',
    mechanism: 'A **μ-opioid antagonist** combined with olanzapine to mitigate weight gain and metabolic disturbance.',
    nts: ['endorphin'],
    targets: [{ t: 'mor', action: 'antagonist' }],
    uses: ['With **olanzapine**, to reduce olanzapine-induced weight gain'],
    chapters: [{ ch: 'ch05', pages: '201, 226' }],
    facts: [{ ch: 'ch05', pages: '201, 226', text: 'In late-stage testing with olanzapine at publication.', sec: 's5-metabolic' }],
    updates: [{ year: '2021', title: 'Olanzapine–samidorphan approved', text: 'Approved with olanzapine (Lybalvi) for schizophrenia and bipolar I disorder in May 2021.', source: 'FDA, May 28, 2021' }]
  },
  {
    id: 'lithium', name: 'Lithium', group: 'Mood stabilizer', cls: 'Mood stabilizer (antimanic)',
    short: 'An ion with uncertain mechanism; proven in mania and in preventing suicide.',
    mechanism: 'An **ion** whose mechanism is uncertain. Candidates are in signal transduction: inhibition of **inositol monophosphatase**, modulation of **G proteins**, and regulation of growth-factor and plasticity genes via cascades including inhibition of **GSK-3** and **protein kinase C**.',
    targets: [
      { t: 'gsk3', action: 'inhibitor', note: 'Possible mechanism' },
      { t: 'impase', action: 'inhibitor', note: 'Possible mechanism' },
      { t: 'pkc', action: 'inhibitor', note: 'Possible mechanism' }
    ],
    uses: ['**Manic episodes** and prevention of recurrence, especially of mania (perhaps less for depression)', 'Well established to help **prevent suicide** in mood disorders', 'Bipolar depression and augmentation in unipolar depression (not approved; lower doses; out of favor)', 'Added to serotonin/dopamine agents in mania'],
    chapters: [
      { ch: 'ch02', pages: '48' },
      { ch: 'ch07', pages: '332, 345–346, 353' }
    ],
    facts: [
      { ch: 'ch02', pages: '48', text: 'The antimanic agent lithium **may target GSK-3**, one of only three enzymes targeted by psychotropic drugs.', sec: 's2-enzymes' },
      { ch: 'ch07', pages: '345–346', text: 'Used for more than 50 years. Modern expert use: one member of a **portfolio**, often **once daily** and at **lower doses** combined with other agents, rather than high-dose monotherapy for euphoric mania.', sec: 's7-lithium' }
    ],
    sideEffects: [
      { e: 'GI upset: dyspepsia, nausea, vomiting, diarrhea', via: 'Lithium' },
      { e: 'Weight gain, hair loss, acne, tremor, sedation, decreased cognition, incoordination', via: 'Lithium' },
      { e: 'Long-term **thyroid** and **kidney** effects', via: 'Lithium' },
      { e: 'Toxicity risk: **narrow therapeutic window**; monitor plasma levels', via: 'Pharmacokinetics' }
    ]
  },
  {
    id: 'valproate', name: 'Valproate', aka: ['Valproic acid', 'Sodium valproate'], group: 'Mood stabilizer', cls: 'Anticonvulsant; antimanic',
    short: 'Mania-minded anticonvulsant with uncertain mechanism (VSSC, GABA, signal transduction).',
    mechanism: 'Mechanism uncertain. Three hypotheses: altering **VSSC** sensitivity (binding channel or regulatory units, or inhibiting phosphorylating enzymes) to reduce glutamate release; **enhancing GABA** (more release, less reuptake or slower breakdown by GABA-T); and regulating **signal transduction** (inhibiting GSK-3, PKC and MARCKS; activating ERK, BCL2 and GAP43). May also act at calcium channels and indirectly block glutamate.',
    targets: [
      { t: 'vssc', action: 'modulator', note: 'Possible; site unknown' },
      { t: 'gabat', action: 'inhibitor', note: 'One possible way it enhances GABA' },
      { t: 'gsk3', action: 'inhibitor', note: 'Possible' },
      { t: 'pkc', action: 'inhibitor', note: 'Possible' },
      { t: 'vscc', action: 'modulator', note: 'Possible; poorly characterized' }
    ],
    uses: ['**Acute mania** (proven); commonly long term to prevent mania (less established)', 'Possibly **rapid cycling** and **mixed** episodes (some experts), usually in combination', 'Epilepsy; **migraine**'],
    chapters: [
      { ch: 'ch02', pages: '48' },
      { ch: 'ch07', pages: '346–350, 353' }
    ],
    facts: [
      { ch: 'ch02', pages: '48', text: 'The antimanic agent valproate **may** have actions on GSK-3 (marked with a question mark in Figure 2-14).', sec: 's2-enzymes' },
      { ch: 'ch07', pages: '349', text: 'Raises **lamotrigine** levels, increasing rash risk unless lamotrigine is titrated slowly (p. 352).', sec: 's7-lamotrigine' }
    ],
    sideEffects: [
      { e: 'Hair loss, weight gain, sedation', via: 'Dose-related; harm adherence' },
      { e: 'Bone marrow, liver and pancreatic toxicity; monitor counts and platelets', via: 'Chronic exposure' },
      { e: '**Neural-tube defects** and other fetal toxicity', via: 'Teratogenic' },
      { e: 'Amenorrhea, **polycystic ovaries**, hyperandrogenism, obesity, insulin resistance in women', via: 'Valproate exposure' }
    ]
  },
  {
    id: 'carbamazepine', name: 'Carbamazepine', brand: 'Tegretol; Equetro', group: 'Mood stabilizer', cls: 'Anticonvulsant; antimanic',
    chapters: [{ ch: 'ch07', pages: '346–347, 350' }],
    nbn: 'Voltage-sensitive sodium channel blocker',
    nts: ['glutamate'],
    short: 'Mania-minded anticonvulsant blocking the VSSC α subunit; CYP3A4 inducer.',
    mechanism: 'Thought to bind a site **within the α subunit** of **voltage-sensitive sodium channels** in the open conformation, unlike valproate; may also act at calcium and potassium channels and thereby enhance GABA’s inhibitory actions.',
    targets: [
      { t: 'vssc', action: 'blocker', note: 'α subunit, open channel' },
      { t: 'cyp3a4', action: 'inducer', note: 'Notable inducer' }
    ],
    uses: ['**Acute mania** (first anticonvulsant shown to work; FDA-approved later as a once-daily controlled-release form)', 'Epilepsy; **neuropathic pain**'],
    sideEffects: [
      { e: 'Profound early **bone marrow suppression**: monitor blood counts', via: 'Carbamazepine' },
      { e: 'Drug interactions', via: '**CYP3A4 induction**' },
      { e: 'Sedation', via: 'Ion channel actions' },
      { e: '**Neural-tube defects**', via: 'Teratogenic' }
    ],
    facts: [{ ch: 'ch07', pages: '347', text: 'Table 7-3: epilepsy ++++, treat from above ++++, stabilize from above ++, treat from below +, stabilize from below +/−.', sec: 's7-anticonvulsants' }]
  },
  {
    id: 'lamotrigine', name: 'Lamotrigine', brand: 'Lamictal', group: 'Mood stabilizer', cls: 'Anticonvulsant; depression-minded mood stabilizer',
    chapters: [{ ch: 'ch07', pages: '346–347, 350–353' }],
    nbn: 'Voltage-sensitive sodium channel blocker; glutamate release inhibitor',
    nts: ['glutamate'],
    short: 'Depression-minded anticonvulsant that prevents recurrence of both poles; rash risk.',
    mechanism: 'Binds the **open-channel VSSC α subunit** (like carbamazepine) and may also act at calcium and potassium channels. Uniquely, it may **reduce glutamate release**, via VSSCs or an unidentified synaptic action, which could explain why it treats and stabilizes **from below**.',
    targets: [{ t: 'vssc', action: 'blocker', note: 'α subunit, open channel' }],
    uses: ['Prevention of **recurrence of mania and depression** in bipolar disorder (approved)', '**Bipolar depression** (believed effective by experts; not FDA-approved)', 'Added to serotonin/dopamine agents when depression is not controlled'],
    sideEffects: [{ e: '**Rash**, rarely **Stevens–Johnson syndrome** (toxic epidermal necrolysis)', via: 'Minimized by very slow titration and managing interactions (e.g., **valproate** raises levels)' }],
    facts: [
      { ch: 'ch07', pages: '347', text: 'Table 7-3: epilepsy ++++, treat from above +/−, stabilize from above ++++, treat from below +++, stabilize from below ++++.', sec: 's7-anticonvulsants' },
      { ch: 'ch07', pages: '351–352', text: 'Not approved for mania, perhaps because its sodium channel action is too weak or its long **titration** prevents the quick action mania needs.', sec: 's7-lamotrigine' }
    ]
  },
  {
    id: 'oxcarbazepine', name: 'Oxcarbazepine', brand: 'Trileptal', group: 'Anticonvulsant', cls: 'Anticonvulsant (prodrug of licarbazepine)',
    chapters: [{ ch: 'ch07', pages: '347, 352' }],
    nbn: 'Voltage-sensitive sodium channel blocker',
    nts: ['glutamate'],
    short: 'Carbamazepine relative and prodrug; better tolerated but unproven in bipolar disorder.',
    mechanism: 'Structurally related to, but not a metabolite of, carbamazepine. A **prodrug** converted to the 10-hydroxy (monohydroxy) derivative **licarbazepine**, whose active S form is **eslicarbazepine**; presumed to bind the open-channel VSSC α subunit.',
    targets: [{ t: 'vssc', action: 'blocker', note: 'Via licarbazepine; α subunit' }],
    uses: ['Epilepsy', 'Used **off-label**, especially for mania, despite never being proven in acute mania or depression'],
    sideEffects: [{ e: 'Less sedation, bone marrow toxicity and CYP3A4 interaction than carbamazepine', via: 'Different metabolism' }],
    facts: [{ ch: 'ch07', pages: '347', text: 'Table 7-3 (oxcarbazepine/licarbazepine): epilepsy ++++, treat from above ++, stabilize from above +, treat and stabilize from below +/−.', sec: 's7-anticonvulsants' }]
  },
  {
    id: 'eslicarbazepine', name: 'Eslicarbazepine', brand: 'Aptiom', group: 'Anticonvulsant', cls: 'Anticonvulsant (active S-licarbazepine)',
    chapters: [{ ch: 'ch07', pages: '350, 352' }],
    nbn: 'Voltage-sensitive sodium channel blocker',
    nts: ['glutamate'],
    short: 'The active S enantiomer of licarbazepine, oxcarbazepine’s active form.',
    mechanism: 'The active **S enantiomer of licarbazepine**, through which oxcarbazepine works; presumed VSSC α-subunit binding like carbamazepine.',
    targets: [{ t: 'vssc', action: 'blocker', note: 'α subunit' }],
    uses: ['Anticonvulsant; used off-label, especially for mania']
  },
  {
    id: 'topiramate', name: 'Topiramate', brand: 'Topamax', group: 'Anticonvulsant', cls: 'Anticonvulsant',
    chapters: [{ ch: 'ch07', pages: '347, 352' }],
    nts: [],
    short: 'Anticonvulsant with ambiguous bipolar results; causes weight loss.',
    mechanism: 'An anticonvulsant also approved for migraine; Chapter 7 does not detail its mechanism.',
    uses: ['Epilepsy; **migraine**', 'Adjunct to drugs that cause weight gain (**weight loss**)', 'Tested in stimulant and alcohol use disorders', 'Bipolar disorder: **ambiguous** trials; not clearly a mood stabilizer'],
    sideEffects: [
      { e: 'Weight loss', via: 'Topiramate' },
      { e: 'Unacceptable sedation in some', via: 'Topiramate' }
    ],
    facts: [
      { ch: 'ch07', pages: '347', text: 'Table 7-3: epilepsy ++++, treat and stabilize from above +/−.', sec: 's7-anticonvulsants' },
      { ch: 'ch07', pages: '352', text: 'The book says it is combined with **bupropion** for weight loss; the marketed weight-loss combinations pair bupropion with naltrexone and topiramate with phentermine.', sec: 's7-lamotrigine' }
    ]
  },
  {
    id: 'riluzole', name: 'Riluzole', brand: 'Rilutek', group: 'Glutamate modulator', cls: 'Glutamate release inhibitor (ALS drug)',
    chapters: [{ ch: 'ch07', pages: '347, 352–353' }],
    nbn: 'Voltage-sensitive sodium channel blocker; glutamate release inhibitor',
    nts: ['glutamate'],
    short: 'ALS drug that may reduce glutamate release like lamotrigine.',
    mechanism: 'Developed to slow **ALS**; theoretically binds **VSSCs** and prevents **glutamate release**, like the action postulated for lamotrigine, to reduce excitotoxicity.',
    targets: [{ t: 'vssc', action: 'blocker', note: 'Theoretical' }],
    uses: ['**Amyotrophic lateral sclerosis**', 'Bipolar depression: theoretical rationale (excess glutamate)'],
    facts: [{ ch: 'ch07', pages: '347', text: 'Table 7-3: epilepsy +, treat from below +, stabilize from below +/−.', sec: 's7-anticonvulsants' }]
  },
  {
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
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch06', pages: '263–264' },
      { ch: 'ch07', pages: '320–322' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'The neuroactive steroid listed in Table 3-2 for postpartum depression, rapid antidepressant and anesthetic actions.', sec: 's3-drugs' },
      { ch: 'ch06', pages: '263–264', text: 'A neuroactive steroid acting mainly at **extrasynaptic δ** GABA-A sites (tonic inhibition). Postpartum depression may follow the **fall** in neurosteroids after delivery; a **60-hour IV infusion** may reverse it.', sec: 's6-neurosteroids' },
      { ch: 'ch07', pages: '320–322', text: 'Given IV as **brexanolone** for postpartum depression; neuroactive steroids act at both benzodiazepine-sensitive and **benzodiazepine-insensitive** GABA-A receptors.', sec: 's7-neurosteroids' }
    ],
    updates: [{ year: '2023', title: 'An oral neurosteroid', text: '**Zuranolone**, an oral neuroactive steroid GABA-A PAM, was approved in August 2023 as the first oral treatment for postpartum depression.', source: 'FDA, August 4, 2023' }]
  },
  {
    id: 'brexanolone', name: 'Brexanolone', brand: 'Zulresso', group: 'Neuroactive steroid', cls: 'Neuroactive steroid (IV allopregnanolone)',
    chapters: [{ ch: 'ch07', pages: '320–322' }],
    nbn: 'GABA-A positive allosteric modulator (neurosteroid site)',
    nts: ['gaba'],
    short: 'Cyclodextrin-based IV allopregnanolone; a 60-hour infusion for postpartum depression.',
    mechanism: 'A **cyclodextrin-based intravenous** formulation of **allopregnanolone**, a PAM at the neuroactive steroid site of **benzodiazepine-sensitive and -insensitive** GABA-A receptors. Restoring neurosteroid levels after their postpartum fall rapidly reverses depression.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Neurosteroid site; synaptic and extrasynaptic' }],
    uses: ['**Postpartum depression**: 60-hour continuous IV infusion, rapid and sustained effect'],
    facts: [{ ch: 'ch07', pages: '320–321', text: 'The 60-hour duration seems to give patients time to accommodate to lower neurosteroid levels without relapse.', sec: 's7-neurosteroids' }],
    updates: [{ year: '2025', title: 'Withdrawn from the market', text: 'At Sage Therapeutics’ request, the FDA withdrew approval of Zulresso (brexanolone) effective April 14, 2025; the company said it was no longer marketed.', source: 'Federal Register, March 14, 2025' }]
  },
  {
    id: 'zuranolone', name: 'Zuranolone (SAGE-217)', brand: 'Zurzuvae', aka: ['SAGE-217'], group: 'Neuroactive steroid', cls: 'Oral neuroactive steroid',
    chapters: [{ ch: 'ch07', pages: '322' }],
    nbn: 'GABA-A positive allosteric modulator (neurosteroid site)',
    nts: ['gaba'],
    short: 'Synthetic oral allopregnanolone analogue (SAGE-217 in the book).',
    mechanism: 'A synthetic, **orally active allopregnanolone analogue**; like brexanolone it enhances GABA at GABA-A receptors via the neuroactive steroid site.',
    targets: [{ t: 'gabaa', action: 'positive allosteric modulator', note: 'Neurosteroid site' }],
    uses: ['In testing (at publication) as a **rapid-onset** treatment for major depressive disorder'],
    updates: [{ year: '2023', title: 'Approved for postpartum depression', text: 'Approved in August 2023 as the first oral treatment for postpartum depression (once daily for 14 days); the major depressive disorder application received a complete response letter.', source: 'FDA, August 4, 2023' }]
  },
  {
    id: 'buspirone', name: 'Buspirone', brand: 'BuSpar', group: '5HT1A partial agonist', cls: 'Anxiolytic (5HT1A partial agonist)',
    chapters: [{ ch: 'ch07', pages: '296, 333' }],
    nbn: 'Serotonin 5HT1A receptor partial agonist',
    nts: ['serotonin'],
    short: '5HT1A partial agonist sometimes added to SSRIs/SNRIs.',
    mechanism: 'A **5HT1A partial agonist** (anxiolytic, Chapter 8). Adding it to an SSRI/SNRI resembles giving vilazodone or vortioxetine.',
    targets: [{ t: '5ht1a', action: 'partial agonist' }],
    uses: ['Anxiety (Chapter 8)', 'Augmentation of SSRIs/SNRIs in unipolar depression (not approved; less used than other 5HT1A agents)'],
    updates: [{ year: '2023', title: 'A buspirone analogue approved for depression', text: 'Extended-release **gepirone** (Exxua), a pharmacologic analogue of buspirone and selective 5HT1A agonist, was approved for major depressive disorder in adults in September 2023.', source: 'FDA approval announced September 2023 (Psychiatric Times, September 29, 2023)' }]
  },
  {
    id: 'thyroid-hormone', name: 'Thyroid hormones', group: 'Hormone', cls: 'Augmenting agent',
    chapters: [{ ch: 'ch07', pages: '333' }],
    nbn: 'Thyroid hormone receptor agonist',
    nts: [],
    short: 'Nuclear-receptor hormones once used to augment drugs for depression.',
    mechanism: 'Bind **nuclear receptors** to form ligand-activated **transcription factors**; regulation of neuronal organization, arborization and synapse formation may boost monoamine transmission.',
    targets: [{ t: 'thr', action: 'agonist' }],
    uses: ['Augmentation of unipolar or bipolar depression treatment, to boost efficacy or speed onset (**out of favor**)']
  },
  {
    id: 'modafinil', name: 'Modafinil', brand: 'Provigil', group: 'Wake-promoting agent', cls: 'Wake-promoting agent (DAT inhibitor)',
    chapters: [{ ch: 'ch07', pages: '333, 335' }],
    nbn: 'Dopamine reuptake inhibitor (DAT)',
    nts: ['dopamine'],
    short: 'A DAT inhibitor used with an SNRI as an “arousal combo.”',
    mechanism: 'Described in Chapter 7 as **another DAT inhibitor**; fuller pharmacology appears in the sleep chapter.',
    targets: [{ t: 'dat', action: 'inhibitor' }],
    uses: ['With an SNRI for residual **fatigue, low energy and poor concentration/alertness** in depression (arousal combo)']
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
    chapters: [
      { ch: 'ch03', pages: '55, 66' },
      { ch: 'ch04', pages: '78, 105–110' }
    ],
    facts: [
      { ch: 'ch03', pages: '66', text: 'Also called **“angel dust”**; structurally related to the anesthetic ketamine.', sec: 's3-pam' },
      { ch: 'ch04', pages: '78, 105–110', text: 'Causes a psychosis sharing features with schizophrenia by blocking NMDA receptors at the **PCP site** on prefrontal GABA interneurons (Table 4-1: visual hallucinations, paranoid delusions, no insight).', sec: 's4-nmda-hypo' }
    ],
    sideEffects: [{ e: 'Psychosis', via: 'NMDA blockade on prefrontal GABA interneurons' }]
  },
  {
    id: 'lsd', name: 'LSD (lysergic acid diethylamide)', aka: ['lysergic acid diethylamide'], group: 'Hallucinogen', cls: 'Psychedelic hallucinogen',
    nbn: 'Serotonin 5HT2A receptor agonist',
    short: '5HT2A agonist hallucinogen; model of serotonin-driven psychosis.',
    mechanism: 'A powerful **5HT2A agonist** that overstimulates prefrontal and visual cortex 5HT2A receptors on glutamate pyramidal neurons, causing psychosis, dissociative experiences and especially **visual hallucinations**. These effects are **blocked by 5HT2A antagonists**. Drugs of abuse are covered in Chapter 13.',
    nts: ['serotonin'],
    targets: [
      { t: '5ht2a', action: 'agonist' },
      { t: '5ht2c', action: 'agonist', note: 'To a lesser extent (Table 4-1)' }
    ],
    sideEffects: [
      { e: 'Visual hallucinations', via: '5HT2A agonism in visual cortex' },
      { e: 'Psychosis, delusions', via: '5HT2A-driven glutamate output to VTA → dopamine excess' }
    ],
    chapters: [{ ch: 'ch04', pages: '78, 111, 131–133' }],
    facts: [
      { ch: 'ch04', pages: '78', text: 'Table 4-1 psychedelic model: **5HT2A agonist** (and to a lesser extent 5HT2C), visual hallucinations, **mystical** delusions, **insight preserved**.', sec: 's4-three' },
      { ch: 'ch04', pages: '131–133', text: 'Hallucinogen psychosis is blocked by **5HT2A antagonists**, showing that it arises from 5HT2A stimulation.', sec: 's4-5ht-hyper' }
    ]
  },
  {
    id: 'psilocybin', name: 'Psilocybin', group: 'Hallucinogen', cls: 'Psychedelic hallucinogen',
    nbn: 'Serotonin 5HT2A receptor agonist',
    short: '5HT2A agonist hallucinogen; model of serotonin-driven psychosis.',
    mechanism: 'A prodrug rapidly **dephosphorylated** to **psilocin**. Both bind several serotonin receptors (5HT1A, 5HT2A, 5HT2C and others); hallucinations are linked to **5HT2A agonism**, reversed by 5HT2A antagonists but not selective D2 antagonists.',
    nts: ['serotonin'],
    targets: [
      { t: '5ht2a', action: 'agonist', s: 3 },
      { t: '5ht2b', action: 'binds', s: 2 },
      { t: '5ht6', action: 'binds', s: 1 },
      { t: '5ht7', action: 'binds', s: 1 }
    ],
    sideEffects: [
      { e: 'Visual hallucinations', via: '5HT2A agonism in visual cortex' },
      { e: 'Psychosis, delusions', via: '5HT2A-driven glutamate output to VTA → dopamine excess' }
    ],
    chapters: [
      { ch: 'ch04', pages: '78, 111, 131–133' },
      { ch: 'ch07', pages: '355–358' }
    ],
    facts: [
      { ch: 'ch04', pages: '78, 131–133', text: 'Listed with LSD as a psychedelic model of psychosis (Table 4-1) and as a 5HT2A agonist whose effects are blocked by 5HT2A antagonists.', sec: 's4-5ht-hyper' },
      { ch: 'ch07', pages: '357', text: 'Bars follow psilocybin’s strip in **Figure 7-88** (5HT1E omitted). Psilocin’s strip differs: **5HT7 +++, 5HT2B +++, 5HT2A ++**, and + at 5HT1D, 5HT1E, 5HT2C, 5HT6, 5HT5, 5HT1B and 5HT1A.', sec: 's7-psychedelics' },
      { ch: 'ch07', pages: '358', text: 'FDA **breakthrough therapy** designation for depression; studied for existential distress in terminal illness, substance abuse and PTSD.', sec: 's7-psychedelics' }
    ],
    updates: [{ year: '2026', title: 'Phase 3 program and filing', text: 'Compass Pathways reported positive phase 3 results for psilocybin (COMP360) in treatment-resistant depression; as of May 2026 a rolling new drug application was under way, with completion planned for late 2026. Not yet approved at that time.', source: 'Compass Pathways first-quarter 2026 report, May 13, 2026' }]
  },
  {
    id: 'mescaline', name: 'Mescaline', group: 'Hallucinogen', cls: 'Psychedelic hallucinogen',
    nbn: 'Serotonin 5HT2A receptor agonist',
    short: '5HT2A agonist hallucinogen; model of serotonin-driven psychosis.',
    mechanism: 'A powerful **5HT2A agonist** that overstimulates prefrontal and visual cortex 5HT2A receptors on glutamate pyramidal neurons, causing psychosis, dissociative experiences and especially **visual hallucinations**. These effects are **blocked by 5HT2A antagonists**. Drugs of abuse are covered in Chapter 13.',
    nts: ['serotonin'],
    targets: [{ t: '5ht2a', action: 'agonist' }],
    sideEffects: [
      { e: 'Visual hallucinations', via: '5HT2A agonism in visual cortex' },
      { e: 'Psychosis, delusions', via: '5HT2A-driven glutamate output to VTA → dopamine excess' }
    ],
    chapters: [{ ch: 'ch04', pages: '111, 131–133' }],
    facts: [{ ch: 'ch04', pages: '111, 131–133', text: 'One of the three hallucinogens named as powerful **5HT2A agonists** that induce psychosis and visual hallucinations.', sec: 's4-5ht-hyper' }]
  },
  {
    id: 'cannabis', name: 'Cannabis', aka: ['marijuana'], group: 'Drug of abuse', cls: 'Cannabinoid drug of abuse',
    short: 'An environmental risk factor for psychosis, especially high-potency forms.',
    mechanism: 'Acts on the endocannabinoid system (Chapter 13). In Chapter 4 it appears as an **environmental stressor** that can unmask schizophrenia in people with genetic risk.',
    nts: ['endocannabinoids'],
    targets: [{ t: 'cb1', action: 'agonist', note: 'Pharmacology covered in Chapter 13' }],
    sideEffects: [{ e: 'Increased risk of psychosis', via: 'Environmental stressor acting on genetic risk' }],
    chapters: [{ ch: 'ch04', pages: '150–151' }],
    facts: [{ ch: 'ch04', pages: '150–151', text: 'Psychosis rates track cannabis use across European cities. Without **high-potency cannabis**, an estimated **12%** of first-episode psychosis across Europe would be prevented (**32%** in London, **50%** in Amsterdam).', sec: 's4-cause' }]
  },
  {
    id: 'ketamine', name: 'Ketamine', group: 'NMDA antagonist', cls: 'Anesthetic; rapid-acting antidepressant',
    nbn: 'Glutamate NMDA receptor antagonist (open-channel)',
    short: 'Open-channel NMDA blocker; anesthetic and rapid-acting antidepressant.',
    mechanism: 'A racemic (**R + S**) **NMDA antagonist** at the open-channel **PCP site**, with **σ1** binding; weak NET, μ-opioid and SERT actions are proposed but disputed. Subanesthetic infusions block NMDA on GABA interneurons, releasing a **burst of glutamate** that stimulates **AMPA** receptors and, via **mTOR** or **BDNF/VEGF** release, rapidly builds dendritic spines.',
    targets: [
      { t: 'nmda', action: 'negative allosteric modulator', s: 1, note: 'Open-channel PCP site' },
      { t: 'sigma', action: 'binds', s: 1, note: 'σ1' },
      { t: 'net', action: 'inhibitor', note: 'Weak; disputed' },
      { t: 'mor', action: 'binds', note: 'Weak; disputed role' },
      { t: 'sert', action: 'inhibitor', note: 'Weak' }
    ],
    uses: ['Anesthetic', '**Treatment-resistant depression** and **suicidal thoughts**', 'Rapid-acting antidepressant'],
    chapters: [
      { ch: 'ch03', pages: '55, 66' },
      { ch: 'ch04', pages: '78, 105–110' },
      { ch: 'ch07', pages: '328–331, 353' }
    ],
    facts: [
      { ch: 'ch03', pages: '66', text: 'Used as a treatment for **resistant depression and suicidal thoughts**.', sec: 's3-pam' },
      { ch: 'ch04', pages: '78, 105–110', text: 'A model of NMDA-hypofunction psychosis (Table 4-1: **visual** hallucinations, paranoid delusions, no insight). Blocking NMDA receptors on prefrontal GABA interneurons is **acute and reversible**, unlike the neurodevelopmental defect of schizophrenia.', sec: 's4-nmda-hypo' },
      { ch: 'ch07', pages: '328–331', text: 'Rapid, sometimes **anti-suicidal**, effects in patients failing many monoamine drugs; benefit usually fades over **a few days** but can be re-triggered by repeated infusions or extended by monoamine drugs. Used **off-label** after multiple failures.', sec: 's7-ketamine' }
    ],
    updates: [{ year: '2025', title: 'Esketamine monotherapy', text: 'Esketamine (the S-enantiomer of ketamine) nasal spray, approved in 2019 as add-on treatment, was approved in January 2025 as **monotherapy** for treatment-resistant depression.', source: 'FDA, January 2025' }],
    sideEffects: [{ e: 'Psychosis (visual hallucinations, paranoia)', via: 'NMDA blockade on prefrontal GABA interneurons → glutamate and dopamine excess' }]
  },
  {
    id: 'esketamine', name: 'Esketamine', brand: 'Spravato', group: 'NMDA antagonist', cls: 'Rapid-acting antidepressant (S-ketamine)',
    chapters: [{ ch: 'ch07', pages: '331–332' }],
    nbn: 'Glutamate NMDA receptor antagonist (open-channel)',
    nts: ['glutamate'],
    short: 'Intranasal S-ketamine for treatment-resistant depression.',
    mechanism: 'The **S enantiomer** of ketamine: an NMDA antagonist (with σ binding) given **intranasally**, rapidly active without IV infusion.',
    targets: [
      { t: 'nmda', action: 'antagonist', s: 1, note: 'Open-channel site' },
      { t: 'sigma', action: 'binds', s: 1 }
    ],
    uses: ['**Treatment-resistant depression** as an augmenting agent: twice weekly at first, then weekly or every other week'],
    facts: [{ ch: 'ch07', pages: '332', text: 'A study of up to a year of esketamine plus a switch to an untried oral monoamine drug showed sustained improvement and acceptable safety.', sec: 's7-ketamine' }],
    updates: [{ year: '2025', title: 'Monotherapy approval', text: 'Approved in 2019 as add-on treatment, esketamine nasal spray was approved in January 2025 as **monotherapy** for treatment-resistant depression.', source: 'FDA, January 2025' }]
  },
  {
    id: 'dextromethorphan', name: 'Dextromethorphan', group: 'NMDA antagonist', cls: 'NMDA antagonist',
    nbn: 'Glutamate NMDA receptor antagonist (open-channel)',
    short: 'Open-channel NMDA antagonist.',
    mechanism: 'A **weak NMDA antagonist** with stronger binding at **SERT** and **σ1** (also α1D and weak μ-opioid). It is rapidly metabolized by **CYP2D6**, so it is combined with a 2D6 inhibitor: **bupropion** (also an NDRI, with possible synergy) or **quinidine**. A **deuterated** form extends its half-life.',
    targets: [
      { t: 'sert', action: 'inhibitor', s: 2 },
      { t: 'sigma', action: 'binds', s: 1, note: 'σ1' },
      { t: 'nmda', action: 'antagonist', s: 1, note: 'Open-channel site' },
      { t: 'alpha1', action: 'binds', s: 1, note: 'α1D' },
      { t: 'mor', action: 'binds', note: 'Weak' },
      { t: 'cyp2d6', action: 'substrate', note: 'Rapid metabolism' }
    ],
    uses: ['**Pseudobulbar affect**', 'Agitation in Alzheimer disease', 'Rapid-acting antidepressant (Table 3-2 class actions)'],
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch07', pages: '353–355' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'Listed with PCP, ketamine and dextromethadone at NMDA open-channel sites (Table 3-2).', sec: 's3-drugs' },
      { ch: 'ch07', pages: '353–354', text: 'With **quinidine**: approved for **pseudobulbar affect**. With **bupropion** (AXS-05): FDA breakthrough therapy for MDD and fast track for TRD and Alzheimer agitation (at publication). Bars follow the plus signs in **Figure 7-84**.', sec: 's7-dxm' }
    ],
    updates: [
      { year: '2022', title: 'Approved for depression', text: '**Dextromethorphan–bupropion** (Auvelity) was approved for major depressive disorder in adults in August 2022.', source: 'FDA, August 2022' },
      { year: '2026', title: 'Approved for Alzheimer agitation', text: 'Axsome announced FDA approval of dextromethorphan–bupropion (Auvelity) for agitation associated with dementia due to Alzheimer disease on April 30, 2026.', source: 'Axsome Therapeutics, April 30, 2026' },
      { year: '2024', title: 'Deuterated dextromethorphan–quinidine trial failed', text: 'AVP-786 (deuterated dextromethorphan with quinidine) missed its primary agitation endpoint in a phase 3 Alzheimer dementia trial reported in February 2024.', source: 'Otsuka, February 12, 2024' }
    ]
  },
  {
    id: 'quinidine', name: 'Quinidine', group: 'CYP2D6 inhibitor', cls: 'CYP2D6 inhibitor (antiarrhythmic)',
    chapters: [{ ch: 'ch07', pages: '353–354' }],
    nts: [],
    short: 'CYP2D6 inhibitor that boosts dextromethorphan levels.',
    mechanism: 'Inhibits **CYP2D6** at doses below those with cardiovascular actions, preventing rapid breakdown of dextromethorphan.',
    targets: [{ t: 'cyp2d6', action: 'inhibitor' }],
    uses: ['With dextromethorphan: **pseudobulbar affect** (approved); depression and Alzheimer agitation (in trials at publication)']
  },
  {
    id: 'dextromethadone', name: 'Dextromethadone', aka: ['Esmethadone', 'REL-1017'], group: 'NMDA antagonist', cls: 'NMDA antagonist (investigational at publication)',
    short: 'Open-channel NMDA antagonist studied as a rapid antidepressant.',
    mechanism: 'The **dextro** enantiomer of methadone: a relatively more potent **NMDA antagonist** with much weaker μ-opioid agonism than levomethadone. Other binding (5HT2A, δ-opioid, SERT, σ) is less well characterized; μ action might enhance NMDA blockade via **NMDA–μ receptor dimers** (speculative).',
    targets: [
      { t: 'mor', action: 'agonist', s: 2, note: 'Weaker than levomethadone' },
      { t: '5ht2a', action: 'binds', s: 1 },
      { t: 'nmda', action: 'antagonist', s: 1 },
      { t: 'sert', action: 'inhibitor', s: 1 },
      { t: 'sigma', action: 'binds', s: 1 }
    ],
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch07', pages: '355' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'Listed among the NMDA open-channel antagonists in Table 3-2.', sec: 's3-drugs' },
      { ch: 'ch07', pages: '355', text: 'In clinical development (at publication) as a **rapid-onset** treatment for major depression with promising early results. Bars follow **Figure 7-86**; δ-opioid binding (+) has no separate target entry.', sec: 's7-dxm' }
    ],
    updates: [{ year: '2024', title: 'Development halted', text: 'Relmada stopped its phase III trials of esmethadone (REL-1017) for adjunctive treatment of major depression in December 2024 after interim results showed little chance of success.', source: 'Relmada Therapeutics, December 2024' }]
  },
  {
    id: 'mirtazapine', name: 'Mirtazapine', brand: 'Remeron', group: 'Antidepressant', cls: 'α2 antagonist (NaSSA)',
    short: 'α2 antagonist that also blocks 5HT2A, 5HT2C, 5HT3 and H1; blocks no transporter.',
    mechanism: 'Blocks **no monoamine transporter**. **α2 antagonism** disinhibits both **NE** (autoreceptors) and **5HT** (heteroreceptors) release; **5HT2A** and **5HT2C** antagonism release DA and NE in the PFC and improve sleep; **5HT3** antagonism disinhibits glutamate, ACh and NE; **H1** antagonism sedates.',
    targets: [
      { t: 'alpha2', action: 'antagonist', note: 'Primary therapeutic action' },
      { t: '5ht2a', action: 'antagonist' },
      { t: '5ht2c', action: 'antagonist' },
      { t: '5ht3', action: 'antagonist' },
      { t: 'h1', action: 'antagonist' }
    ],
    uses: ['Antidepressant; possibly pro-cognitive (Table 3-2)', 'Unipolar depression worldwide', 'With an **SNRI** (“**California rocket fuel**”) for nonresponse to an SNRI alone'],
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch05', pages: '199, 232' },
      { ch: 'ch07', pages: '308–311, 333–334' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' },
      { ch: 'ch05', pages: '199, 232', text: 'Combined **H1 + 5HT2C** antagonism links it to weight gain; asenapine is structurally related and shares several of its binding properties.', sec: 's5-metabolic' },
      { ch: 'ch07', pages: '308–311', text: 'Five principal actions: **α2, 5HT2A, 5HT2C, 5HT3 and H1** antagonism. α2 antagonism gives a dual 5HT–NE action like an SNRI’s by a different mechanism, synergistic with reuptake blockade.', sec: 's7-mirtazapine' }
    ],
    nbn: 'Norepinephrine and serotonin receptor antagonist (α2, 5HT2A, 5HT2C, 5HT3, H1)',
    nts: ['norepinephrine', 'serotonin', 'histamine'],
    sideEffects: [{ e: 'Sedation, weight gain', via: 'H1 antagonism' }]
  },
  {
    id: 'mianserin', name: 'Mianserin', group: 'Antidepressant', cls: 'α2 antagonist',
    chapters: [{ ch: 'ch07', pages: '308–309' }],
    nbn: 'Norepinephrine receptor antagonist (α2, α1) with 5HT2A, 5HT2C, 5HT3 and H1 antagonism',
    nts: ['norepinephrine', 'serotonin', 'histamine'],
    short: 'Mirtazapine-like α2 antagonist with added α1 blockade; not in the US.',
    mechanism: 'Like mirtazapine (**α2, 5HT2A, 5HT2C, 5HT3, H1** antagonism) but with potent **α1 antagonism**, which mitigates serotonergic enhancement, so it boosts mainly **noradrenergic** transmission.',
    targets: [
      { t: 'alpha2', action: 'antagonist' },
      { t: 'alpha1', action: 'antagonist', note: 'Potent' },
      { t: '5ht2a', action: 'antagonist' },
      { t: '5ht2c', action: 'antagonist' },
      { t: '5ht3', action: 'antagonist' },
      { t: 'h1', action: 'antagonist' }
    ],
    uses: ['Depression (worldwide **except the US**)'],
    facts: [{ ch: 'ch07', pages: '308–309', text: 'Another α2 antagonist, **setiptiline**, is marketed in Japan.', sec: 's7-mirtazapine' }]
  },
  {
    id: 'trazodone', name: 'Trazodone', brand: 'Desyrel; Oleptro', group: 'Antidepressant', cls: 'Serotonin antagonist/reuptake inhibitor (SARI)',
    chapters: [{ ch: 'ch07', pages: '311–315, 327' }],
    nbn: 'Serotonin receptor antagonist (5HT2A/2C) and reuptake inhibitor',
    nts: ['serotonin', 'norepinephrine', 'histamine'],
    short: 'SARI: a hypnotic at low doses and an antidepressant at high doses.',
    mechanism: 'Blocks **5HT2A** and **5HT2C** receptors and **SERT**, plus 5HT1D, 5HT2B, 5HT7, **α1A/α1B**, α2B/α2C and **H1** receptors, with **5HT1A agonism**. Low doses engage only the highest-affinity targets (5HT2A, α1, H1: **hypnotic**); 150–600 mg saturates SERT and recruits the rest (**antidepressant**).',
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: 'alpha1', action: 'antagonist', s: 4, note: 'α1B highest; α1A high' },
      { t: '5ht1b1d', action: 'antagonist', s: 4, note: '5HT1D high; 5HT1B low' },
      { t: '5ht2b', action: 'antagonist', s: 3 },
      { t: '5ht1a', action: 'agonist', s: 3 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: 'sert', action: 'inhibitor', s: 2, note: 'Saturated at 150–600 mg' },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2B' },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: 'd3', action: 'binds', s: 1 },
      { t: 'vssc', action: 'binds', s: 1, note: 'Rat sodium channel' },
      { t: 'd2', action: 'binds', s: 1 },
      { t: 'd1', action: 'binds', s: 1 },
      { t: 'sigma', action: 'binds', s: 1, note: 'Nonselective σ' }
    ],
    uses: ['**Insomnia**, especially residual insomnia after SSRIs/SNRIs (25–150 mg, immediate release)', 'Unipolar depression (150–600 mg; once-nightly **XR** reduces daytime sedation)'],
    sideEffects: [
      { e: 'Daytime **sedation** at peak levels with IR antidepressant dosing', via: 'H1, α1, 5HT2A antagonism' },
      { e: 'No sexual dysfunction or weight gain; less insomnia and anxiety than SSRIs', via: '5HT2A/5HT2C blockade' }
    ],
    facts: [
      { ch: 'ch07', pages: '314', text: 'Bars follow the affinity (Ki) ranking in **Figure 7-45**, highest to lowest; actions beyond those named in the text are shown as “binds.”', sec: 's7-sari' },
      { ch: 'ch07', pages: '312–313', text: '300 mg **XR** once nightly gives levels that never fall below the antidepressant minimum, with a peak similar to 100 mg IR (Figure 7-47).', sec: 's7-sari' }
    ]
  },
  {
    id: 'nefazodone', name: 'Nefazodone', group: 'Antidepressant', cls: 'Serotonin antagonist/reuptake inhibitor (SARI)',
    chapters: [{ ch: 'ch07', pages: '311, 314' }],
    nbn: 'Serotonin receptor antagonist (5HT2A) and reuptake inhibitor',
    nts: ['serotonin', 'norepinephrine'],
    short: 'SARI with robust 5HT2A antagonism; rarely used because of liver toxicity.',
    mechanism: 'Robust **5HT2A** antagonism with weaker **5HT2C** antagonism and **SERT** inhibition; its icon also shows **NET** inhibition and **α1** antagonism.',
    targets: [
      { t: '5ht2a', action: 'antagonist', note: 'Robust' },
      { t: '5ht2c', action: 'antagonist', note: 'Weaker' },
      { t: 'sert', action: 'inhibitor', note: 'Weaker' },
      { t: 'net', action: 'inhibitor' },
      { t: 'alpha1', action: 'antagonist' }
    ],
    uses: ['Unipolar depression (rarely used now)'],
    sideEffects: [{ e: 'Rare **liver toxicity**', via: 'Idiosyncratic' }]
  },
  {
    id: 'chlorpromazine', name: 'Chlorpromazine', brand: 'Thorazine', aka: ['Largactil'], group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'The first D2 antagonist; a sedating phenothiazine with many receptor actions.',
    mechanism: 'A **phenothiazine** discovered by serendipity in the 1950s while being tested as an antihistamine; its antipsychotic action is **D2 antagonism**. Originally branded **Largactil** for its large number of actions: potent **α1, D3 and H1** binding plus many serotonin and muscarinic receptors (Figure 5-27).',
    nts: ['dopamine'],
    targets: [
      { t: 'alpha1', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: 'h1', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: 'm1', action: 'antagonist', s: 2 },
      { t: 'm2m3', action: 'antagonist', s: 2, note: 'M3, M2' },
      { t: 'm4', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: '5ht5', action: 'antagonist', s: 1 },
      { t: 'd5', action: 'antagonist', s: 1 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1D' },
      { t: 'alpha2', action: 'antagonist', s: 1 }
    ],
    uses: ['Psychosis', 'Short-term oral or short-acting **IM** use for **agitation** or sudden worsening, often on top of a daily drug, exploiting its sedation'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' },
      { e: 'Marked sedation', via: 'M1 + H1 + α1 antagonism' },
      { e: 'Anticholinergic effects; ileus risk (e.g., with clozapine)', via: 'Muscarinic antagonism' },
      { e: 'Weight gain', via: 'H1 antagonism' },
      { e: 'Orthostatic hypotension', via: 'α1 antagonism' }
    ],
    chapters: [{ ch: 'ch05', pages: '161, 180–182, 201–202' }],
    facts: [
      { ch: 'ch05', pages: '161', text: 'Its observed improvement of psychosis out of proportion to sedation led to the discovery of **D2 antagonism** as the antipsychotic mechanism.', sec: 's5-history' },
      { ch: 'ch05', pages: '180', text: 'Table 5-1: low potency.', sec: 's5-fga' },
      { ch: 'ch05', pages: '201–202', text: 'Often prescribed to exploit its **sedation**, short term orally or IM for agitation.', sec: 's5-first-agents' }
    ]
  },
  {
    id: 'cyamemazine', name: 'Cyamemazine', brand: 'Tercian', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): popular in France; not available in the US.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: popular in France; not available in the US.', sec: 's5-fga' }]
  },
  {
    id: 'flupenthixol', name: 'Flupenthixol', brand: 'Depixol', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): depot; not available in the US.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: depot; not available in the US.', sec: 's5-fga' }]
  },
  {
    id: 'fluphenazine', name: 'Fluphenazine', brand: 'Prolixin', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'High-potency phenothiazine D2 antagonist with short- and long-acting forms.',
    mechanism: 'A **phenothiazine** D2 antagonist, more potent and **less sedating** than chlorpromazine, with potent **D3, 5HT7 and α1** actions (Figure 5-28).',
    nts: ['dopamine'],
    targets: [
      { t: 'd2', action: 'antagonist', s: 4 },
      { t: 'd3', action: 'antagonist', s: 4 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3 },
      { t: 'd5', action: 'antagonist', s: 2 },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2B, α2A' },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1B, 5HT1D' },
      { t: '5ht1a', action: 'antagonist', s: 1 },
      { t: '5ht2c', action: 'antagonist', s: 1 }
    ],
    uses: ['Psychosis; short- and **long-acting** (depot) formulations', '**Plasma level** monitoring may be useful'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '180, 202–203' }],
    facts: [
      { ch: 'ch05', pages: '180', text: 'Table 5-1: high potency; depot.', sec: 's5-fga' },
      { ch: 'ch05', pages: '202–203', text: 'Has short- and long-acting formulations; one of the agents for which plasma drug levels may be useful.', sec: 's5-first-agents' }
    ]
  },
  {
    id: 'haloperidol', name: 'Haloperidol', brand: 'Haldol', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'One of the most potent D2 antagonists; little anticholinergic action, so more DIP.',
    mechanism: 'One of the **most potent D2 antagonists**, also binding σ, D3 and α1 sites (Figure 5-29). It has **relatively little anticholinergic or antihistamine** binding, so it is less sedating but more likely to cause drug-induced parkinsonism.',
    nts: ['dopamine'],
    targets: [
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: 'sigma', action: 'binds', s: 3, note: 'Labelled σ in Figure 5-29; the caption says “omega”; action not specified' },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: '5ht2a', action: 'antagonist', s: 1 },
      { t: 'd1', action: 'antagonist', s: 1 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1B' },
      { t: 'alpha2', action: 'antagonist', s: 1, note: 'α2C, α2B, α2A' },
      { t: '5ht7', action: 'antagonist', s: 1 }
    ],
    uses: ['Psychosis; short- and **long-acting** (depot) formulations', '**Plasma level** monitoring may be useful'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism (more likely)', via: 'Potent D2 blockade with little built-in anticholinergic action' },
      { e: 'Acute dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '180–181, 202–204' }],
    facts: [
      { ch: 'ch05', pages: '180', text: 'Table 5-1: high potency; depot.', sec: 's5-fga' },
      { ch: 'ch05', pages: '181', text: 'Has relatively little anticholinergic or antihistaminic binding, illustrating why D2 antagonists differ in side effects more than in efficacy.', sec: 's5-fga' },
      { ch: 'ch05', pages: '202', text: 'Less sedating than some others; plasma levels may be useful.', sec: 's5-first-agents' }
    ]
  },
  {
    id: 'loxapine', name: 'Loxapine', brand: 'Loxitane', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): listed among the earliest agents.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: listed among the earliest agents.', sec: 's5-fga' }]
  },
  {
    id: 'mesoridazine', name: 'Mesoridazine', brand: 'Serentil', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): low potency; QTc issues; discontinued.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: low potency; QTc issues; discontinued.', sec: 's5-fga' }]
  },
  {
    id: 'perphenazine', name: 'Perphenazine', brand: 'Trilafon', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): high potency.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: high potency.', sec: 's5-fga' }]
  },
  {
    id: 'pimozide', name: 'Pimozide', brand: 'Orap', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): high potency; Tourette syndrome; QTc issues; second line.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['**Tourette syndrome**; psychosis (second line)'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: high potency; Tourette syndrome; QTc issues; second line.', sec: 's5-fga' }]
  },
  {
    id: 'pipothiazine', name: 'Pipothiazine', brand: 'Piportil', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): depot; not available in the US.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: depot; not available in the US.', sec: 's5-fga' }]
  },
  {
    id: 'sulpiride', name: 'Sulpiride', brand: 'Dolmatil', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'D2 antagonist with D3 antagonist/partial agonist actions; popular outside the US.',
    mechanism: 'A D2 antagonist with **D3 antagonist/partial agonist** actions (Figure 5-30). At usual doses it causes motor effects and prolactin elevation; at **lower** doses it may be activating and help **negative symptoms and depression**, with D3 action a candidate explanation.',
    nts: ['dopamine'],
    targets: [
      { t: 'd3', action: 'antagonist', s: 2, note: 'Antagonist/partial agonist' },
      { t: 'd2', action: 'antagonist', s: 2 }
    ],
    uses: ['Psychosis (popular in countries such as the **UK**; may be better tolerated than other original agents)', 'Possibly **negative symptoms** and **depression** at low doses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '180, 202–205' }],
    facts: [{ ch: 'ch05', pages: '202–203', text: 'May be activating at lower doses with efficacy for negative symptoms and depression for unclear reasons; D3 antagonism/partial agonism is a candidate explanation.', sec: 's5-first-agents' }]
  },
  {
    id: 'thioridazine', name: 'Thioridazine', brand: 'Mellaril', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): low potency; QTc issues; second line.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: low potency; QTc issues; second line.', sec: 's5-fga' }]
  },
  {
    id: 'thiothixene', name: 'Thiothixene', brand: 'Navane', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): high potency.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: high potency.', sec: 's5-fga' }]
  },
  {
    id: 'trifluoperazine', name: 'Trifluoperazine', brand: 'Stelazine', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): high potency.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: high potency.', sec: 's5-fga' }]
  },
  {
    id: 'zuclopenthixol', name: 'Zuclopenthixol', brand: 'Clopixol', group: 'D2 antagonist (first generation)', cls: 'Conventional (first-generation) antipsychotic',
    nbn: 'Dopamine D2 receptor antagonist',
    short: 'Early D2 antagonist (Table 5-1): depot; not available in the US.',
    mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'antagonist' }],
    uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'],
    sideEffects: [
      { e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' },
      { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' },
      { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }
    ],
    chapters: [{ ch: 'ch05', pages: '179–181' }],
    facts: [{ ch: 'ch05', pages: '180', text: 'Table 5-1: depot; not available in the US.', sec: 's5-fga' }]
  },
  {
    id: 'amisulpride', name: 'Amisulpride', group: 'D2 antagonist (first generation)', cls: 'Benzamide D2/D3 antagonist',
    nbn: 'Dopamine D2/D3 receptor antagonist',
    short: 'Sulpiride relative with D3 and weak 5HT7 actions; marketed outside the US.',
    mechanism: 'Structurally related to sulpiride. A D2 antagonist with some **D3 antagonist** and weak **5HT7 antagonist** actions (Figure 5-31). Early preclinical data suggest it may favor **mesolimbic/mesostriatal** over nigrostriatal receptors, which might mean fewer motor side effects.',
    nts: ['dopamine'],
    targets: [
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: '5ht7', action: 'antagonist', s: 1 }
    ],
    uses: ['Psychosis (outside the US)', 'Reported efficacy for **negative symptoms** and **depression** at low doses'],
    sideEffects: [{ e: 'Dose-dependent QTc prolongation', via: 'Noted alongside iloperidone, zotepine and sertindole' }],
    chapters: [{ ch: 'ch05', pages: '203, 205, 236' }],
    facts: [{ ch: 'ch05', pages: '203', text: 'D3 antagonism and 5HT7 antagonism may explain its negative-symptom and antidepressant actions; its active isomer is in early clinical testing in the US.', sec: 's5-first-agents' }]
  },
  {
    id: 'vortioxetine', name: 'Vortioxetine', brand: 'Trintellix', group: 'Antidepressant', cls: 'Multimodal serotonergic agent',
    short: 'SERT inhibitor with 5HT3/5HT7 antagonism, 5HT1A agonism and 5HT1B/D partial agonism; pro-cognitive.',
    mechanism: 'Inhibits **SERT**; **5HT3** antagonist (one of its most potent actions) and **5HT7** antagonist; **5HT1A agonist**; weak **5HT1B/D** partial agonist/antagonist. Some actions raise 5HT further (SERT, 5HT1B/D, 5HT7), others release **DA, NE, ACh and histamine** (5HT1A, 5HT1B heteroreceptors, 5HT3).',
    targets: [
      { t: 'sert', action: 'inhibitor' },
      { t: '5ht3', action: 'antagonist', note: 'One of its most potent actions' },
      { t: '5ht7', action: 'antagonist' },
      { t: '5ht1a', action: 'agonist' },
      { t: '5ht1b1d', action: 'partial agonist', note: 'Weak partial agonist to antagonist' }
    ],
    uses: ['Antidepressant; possibly pro-cognitive (Table 3-2)', 'Unipolar depression with **cognitive symptoms**: superior on the **DSST** (processing speed)'],
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch07', pages: '315–320' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' },
      { ch: 'ch07', pages: '315–320', text: 'The DSST samples attention, executive function, memory and mostly **processing speed** (the “Fab Four”); vortioxetine improves it more than other antidepressants.', sec: 's7-vortioxetine' }
    ],
    nbn: 'Serotonin reuptake inhibitor and receptor modulator (multimodal)',
    nts: ['serotonin', 'norepinephrine', 'dopamine', 'acetylcholine', 'histamine']
  },
  {
    id: 'clozapine', name: 'Clozapine', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “pine”)',
    short: 'Gold standard for treatment-resistant schizophrenia; the only antipsychotic shown to reduce suicide.',
    mechanism: 'A 5HT2A/D2 antagonist whose many other binding properties are mostly **more potent than D2** (α1, 5HT2B, M1, H1, 5HT2A, 5HT6, 5HT2C, M4 and others; Figure 5-43). It occupies **fewer D2 receptors** than other drugs at therapeutic doses, so its gold-standard efficacy probably comes from an unknown **non-D2** mechanism.',
    nts: ['dopamine', 'serotonin'],
    uses: ['**Treatment-resistant schizophrenia** (gold standard)', 'Reduces **suicide** risk in schizophrenia', 'May help **aggression and violence** in psychotic patients (Chapter 4)', 'May **treat tardive dyskinesia**'],
    chapters: [
      { ch: 'ch04', pages: '147' },
      { ch: 'ch05', pages: '222–225' }
    ],
    facts: [
      { ch: 'ch04', pages: '147', text: 'With high doses of standard drugs for schizophrenia, may help **psychotic or impulsive violence**; behavioral measures help impulsive violence and organized violence may need confinement.', sec: 's4-aggression' },
      { ch: 'ch05', pages: '222–225', text: 'Table 5-2 lists side effects needing expert management: neutropenia, constipation/paralytic ileus, sedation/orthostasis/tachycardia, sialorrhea, seizures, weight gain/dyslipidemia/hyperglycemia, myocarditis/cardiomyopathy/interstitial nephritis, DRESS/serositis.', sec: 's5-pines' },
      { ch: 'ch05', pages: '219', text: 'One of the three agents with the widest 5HT2A–D2 separation and **D2 occupancy below 60%** at antipsychotic doses.', sec: 's5-binding' },
      { ch: 'ch07', pages: '328', text: 'Among the agents with the lowest DIP, attributed to robust **α1 + 5HT2A** antagonism.', sec: 's7-augment-sda' }
    ],
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist (multimodal)',
    targets: [
      { t: 'alpha1', action: 'antagonist', s: 3, note: 'α1A, α1B' },
      { t: '5ht2b', action: 'antagonist', s: 3 },
      { t: 'm1', action: 'antagonist', s: 3 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'm4', action: 'binds', s: 2, note: 'Action not specified in the book' },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2B, α2A' },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: 'm2m3', action: 'antagonist', s: 2, note: 'M3, M2' },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: '5ht1a', action: 'partial agonist', s: 1 },
      { t: 'd2', action: 'antagonist', s: 1 },
      { t: '5ht3', action: 'antagonist', s: 1 },
      { t: 'd1', action: 'antagonist', s: 1 },
      { t: 'd3', action: 'antagonist', s: 1 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1B, 5HT1D' }
    ],
    sideEffects: [
      { e: '**Neutropenia** (blood count monitoring)', via: 'Unknown mechanism' },
      { e: 'Constipation, **paralytic ileus**, **sialorrhea**', via: 'Profound muscarinic blockade' },
      { e: 'Sedation, orthostasis, tachycardia', via: 'M1, H1 and α1 antagonism' },
      { e: '**Seizures** (high doses)', via: 'Dose-related' },
      { e: 'Greatest **weight gain** and cardiometabolic risk', via: 'H1 + 5HT2C antagonism plus insulin resistance' },
      { e: '**Myocarditis**, cardiomyopathy, interstitial nephritis; DRESS, serositis', via: 'Unknown mechanism' }
    ],
    pearls: ['Little motor effect, **no prolactin** elevation, does not seem to cause TD', 'Rare “awakenings” to near-normal function', 'Underused; finger-stick point-of-care counts and **plasma levels** help'],
    updates: [{ year: '2025', title: 'Clozapine REMS removed', text: 'The FDA eliminated the clozapine REMS in 2025; ANC reporting to a REMS program is no longer required before dispensing, but the FDA still advises ANC monitoring per the prescribing information.', source: 'FDA; REMS eliminated effective June 13, 2025' }]
  },
  {
    id: 'olanzapine', name: 'Olanzapine', brand: 'Zyprexa', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “pine”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Probably the next most effective after clozapine; high metabolic risk.',
    mechanism: 'A **5HT2A/D2 antagonist** whose strongest binding is at **H1 and 5HT2A** (Figure 5-44). **5HT2C** antagonism may help mood and cognition, and with H1 antagonism contributes to **weight gain**. Strong muscarinic binding.',
    targets: [
      { t: 'h1', action: 'antagonist', s: 3 },
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'm1', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: 'd2', action: 'antagonist', s: 2 },
      { t: 'd3', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: 'm2m3', action: 'antagonist', s: 2, note: 'M3, M2' },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2B, α2A' },
      { t: 'alpha1', action: 'antagonist', s: 1, note: 'α1A, α1B' },
      { t: '5ht3', action: 'antagonist', s: 1 },
      { t: 'm4', action: 'antagonist', s: 1 },
      { t: '5ht7', action: 'antagonist', s: 1 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1B, 5HT1D' }
    ],
    uses: ['Schizophrenia and maintenance (13+)', '**IM** agitation in schizophrenia or bipolar mania', 'Acute mania/mixed mania and maintenance (13+)', 'With **fluoxetine**: bipolar depression and treatment-resistant unipolar depression (US)'],
    sideEffects: [
      { e: '**High** metabolic risk (weight gain, dyslipidemia, diabetes)', via: 'H1 + 5HT2C antagonism; insulin resistance' },
      { e: 'Sedation', via: 'H1 and M1 antagonism' },
      { e: 'Anticholinergic effects', via: 'Muscarinic antagonism' }
    ],
    pearls: ['Often used at **higher** doses than approved, guided by plasma levels', 'Forms: orally disintegrating, acute IM, **4-week depot**; inhaled form in development', 'Combination with **samidorphan** to limit weight gain'],
    chapters: [
      { ch: 'ch05', pages: '198, 225–226' },
      { ch: 'ch07', pages: '325–326, 343' }
    ],
    facts: [
      { ch: 'ch05', pages: '225–226', text: 'Widely considered, by clinical experience rather than definitive trials, the **next most effective** after clozapine; 5HT2C plus weaker α2 antagonism, especially with fluoxetine’s 5HT2C antagonism, may explain efficacy in depression.', sec: 's5-pines' },
      { ch: 'ch07', pages: '325–326, 343', text: 'Table 7-1: mania, maintenance; with **fluoxetine** for bipolar depression and treatment-resistant MDD; post hoc evidence in mania with mixed features. The combination acts as a potent SERT/5HT2C inhibitor but causes weight gain.', sec: 's7-augment-sda' }
    ],
    updates: [{ year: '2021', title: 'Olanzapine–samidorphan approved', text: 'Olanzapine combined with the μ-opioid antagonist samidorphan (Lybalvi) was approved for schizophrenia and bipolar I disorder in May 2021.', source: 'FDA, May 28, 2021' }]
  },
  {
    id: 'quetiapine', name: 'Quetiapine', brand: 'Seroquel', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “pine”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'A “different drug at different doses”: sleep at 50 mg, depression at 300 mg, psychosis at 800 mg.',
    mechanism: 'A **5HT2A/D2 antagonist** with **weak D2** binding. Its net actions combine the parent drug and the active metabolite **norquetiapine**, which adds **NET inhibition**; together they have **5HT7, 5HT2C and α2** antagonism and **5HT1A** partial agonism (Figure 5-45). Its most potent action is **H1** antagonism.',
    targets: [
      { t: 'h1', action: 'antagonist', s: 3 },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: 'm2m3', action: 'antagonist', s: 2, note: 'M3, M2' },
      { t: 'alpha1', action: 'antagonist', s: 2, note: 'α1A, α1B' },
      { t: 'm1', action: 'antagonist', s: 2 },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: 'net', action: 'inhibitor', s: 2, note: 'Mainly via norquetiapine' },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 1 },
      { t: 'd1', action: 'antagonist', s: 1 },
      { t: 'm4', action: 'antagonist', s: 1 },
      { t: '5ht1a', action: 'partial agonist', s: 1 },
      { t: 'alpha2', action: 'antagonist', s: 1, note: 'α2C, α2A, α2B' },
      { t: 'd2', action: 'antagonist', s: 1 },
      { t: '5ht1b1d', action: 'antagonist', s: 1, note: '5HT1D' },
      { t: '5ht3', action: 'antagonist', s: 1 },
      { t: '5ht6', action: 'antagonist', s: 1 },
      { t: 'd3', action: 'antagonist', s: 1 },
      { t: '5ht5', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia and maintenance (13+)', 'Mania/mixed mania and maintenance (10+)', '**Bipolar depression**; **augmentation** of SSRIs/SNRIs in unipolar depression (US)', 'Often used for insomnia (not approved), anxiety, **Parkinson’s disease psychosis**, or as an adjunct'],
    sideEffects: [
      { e: 'Sedation (daytime)', via: 'H1, M1 and α1 antagonism' },
      { e: 'Weight gain, **moderate** metabolic risk', via: 'H1 + 5HT2C antagonism' },
      { e: 'Virtually no motor effects or prolactin elevation', via: 'Weak D2 binding' }
    ],
    pearls: ['**Baby Bear 50 mg**: H1 only; **Mama Bear 300 mg**: antidepressant mix; **Papa Bear 800 mg**: saturates H1 and 5HT2A, inconsistent >60% D2 occupancy'],
    chapters: [
      { ch: 'ch05', pages: '219–220, 226–231' },
      { ch: 'ch07', pages: '326, 343' }
    ],
    facts: [
      { ch: 'ch05', pages: '227–231', text: 'Goldilocks and the three bears: different pharmacology at 50, 300 and 800 mg (Figure 5-46). Low D2 occupancy (< 60%) at antipsychotic doses.', sec: 's5-pines' },
      { ch: 'ch07', pages: '326, 343', text: 'Table 7-1: mania, maintenance, **bipolar depression** and **adjunct for MDD**; antidepressant action may come from norquetiapine at NET and 5HT2C plus 5HT2A, 5HT7, α2A antagonism and 5HT1A agonism.', sec: 's7-augment-sda' }
    ]
  },
  {
    id: 'asenapine', name: 'Asenapine', brand: 'Saphris', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “pine”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Sublingual pine related to mirtazapine; usable as a rapid oral PRN.',
    mechanism: 'Structurally related to **mirtazapine** and shares its **5HT2A, 5HT2C, H1 and α2** antagonism, plus **D2** antagonism and many other serotonin and dopamine actions (Figure 5-47). Antidepressant action is suggested, but only antipsychotic/antimanic action is proven.',
    targets: [
      { t: '5ht2c', action: 'antagonist', s: 4 },
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: '5ht7', action: 'antagonist', s: 4 },
      { t: '5ht6', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: 'd4', action: 'antagonist', s: 3 },
      { t: 'd1', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3, note: 'α1B, α1A' },
      { t: '5ht5', action: 'antagonist', s: 3 },
      { t: '5ht1b1d', action: 'antagonist', s: 3, note: '5HT1B, 5HT1D' },
      { t: 'h1', action: 'antagonist', s: 3 },
      { t: '5ht2b', action: 'antagonist', s: 3 },
      { t: 'alpha2', action: 'antagonist', s: 3, note: 'α2B, α2A, α2C' },
      { t: '5ht1a', action: 'partial agonist', s: 2 },
      { t: '5ht3', action: 'antagonist', s: 1 },
      { t: 'm1', action: 'antagonist', s: 1 },
      { t: 'm2m3', action: 'antagonist', s: 1, note: 'M2' }
    ],
    uses: ['Schizophrenia/maintenance (adults)', 'Bipolar mania (10+, US)', 'Rapid-acting **oral PRN** “top-up” instead of an injection'],
    sideEffects: [
      { e: 'Oral **hypoesthesia**', via: 'Sublingual administration' },
      { e: 'Sedation (especially at first)', via: 'H1 antagonism' },
      { e: 'Moderate weight gain, metabolic and motor effects', via: 'Class actions' }
    ],
    pearls: ['**Not absorbed if swallowed**: sublingual, usually twice daily; no food or drink for **10 minutes**', 'Also a **transdermal** formulation'],
    chapters: [
      { ch: 'ch05', pages: '198, 232–233' },
      { ch: 'ch07', pages: '326' }
    ],
    facts: [
      { ch: 'ch05', pages: '232–233', text: 'Rapid sublingual absorption gives rapid peak levels, unlike orally dissolving tablets that are absorbed later.', sec: 's5-pines' },
      { ch: 'ch07', pages: '326', text: 'Table 7-1: approved for **bipolar mania** and **maintenance**; evidence in **mania with mixed features**.', sec: 's7-sda-mania' }
    ]
  },
  {
    id: 'zotepine', name: 'Zotepine', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “pine”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Pine available in Japan and Europe; three times daily; possible seizure risk.',
    mechanism: 'A **5HT2A/D2 antagonist** that is also a **5HT2C, α1 and 5HT7** antagonist, a weak **5HT1A** partial agonist and a weak **NET** inhibitor, suggesting antidepressant potential not yet established (Figure 5-48).',
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: 'h1', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: '5ht2c', action: 'antagonist', s: 3 },
      { t: '5ht6', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 2 },
      { t: 'm1', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1B, 5HT1D' },
      { t: 'm2m3', action: 'antagonist', s: 1, note: 'M2' },
      { t: 'alpha2', action: 'antagonist', s: 1 },
      { t: '5ht1a', action: 'partial agonist', s: 1 },
      { t: '5ht3', action: 'antagonist', s: 1 },
      { t: 'net', action: 'inhibitor', s: 1 },
      { t: 'sert', action: 'inhibitor', s: 1 }
    ],
    uses: ['Schizophrenia (Japan and Europe; not the US)'],
    sideEffects: [
      { e: 'Possible elevated **seizure** risk', via: 'Not specified' },
      { e: 'Dose-dependent QTc prolongation', via: 'Noted with iloperidone, sertindole, amisulpride' }
    ],
    chapters: [{ ch: 'ch05', pages: '233–234, 236' }],
    facts: [{ ch: 'ch05', pages: '233', text: 'Less popular because it must be given **three times a day**.', sec: 's5-pines' }]
  },
  {
    id: 'risperidone', name: 'Risperidone', brand: 'Risperdal', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “done”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'The original “done”; raises prolactin even at low doses.',
    mechanism: 'A **5HT2A/D2 antagonist** with a different structure and profile from the pines (Figure 5-49). **α2** antagonism may contribute to antidepressant action, but simultaneous **α1** antagonism can cancel it and causes orthostasis and sedation.',
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'alpha2', action: 'antagonist', s: 3, note: 'α2C, α2B, α2A' },
      { t: 'alpha1', action: 'antagonist', s: 3, note: 'α1A, α1B' },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: 'd4', action: 'antagonist', s: 3 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1B, 5HT1D' },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: '5ht5', action: 'antagonist', s: 1 },
      { t: 'd1', action: 'antagonist', s: 1 },
      { t: '5ht1a', action: 'partial agonist', s: 1 }
    ],
    uses: ['Schizophrenia/maintenance (13+)', 'Bipolar mania/maintenance (10+)', '**Irritability associated with autistic disorder** (5–16)', 'Low-dose off-label use in dementia agitation/psychosis is controversial (**black box** warning)'],
    sideEffects: [
      { e: '**Prolactin elevation** even at low doses', via: 'D2 blockade not offset by its 5HT2A action' },
      { e: 'Moderate weight gain and dyslipidemia (especially in **children**)', via: 'Class actions' },
      { e: 'Orthostasis, sedation', via: 'α1 antagonism' },
      { e: 'Fewer motor effects at lower doses', via: 'D2 dose-dependence' }
    ],
    pearls: ['Depot injections lasting **2 or 4 weeks**; monitor plasma levels of risperidone + paliperidone', 'Orally disintegrating tablet and liquid'],
    chapters: [
      { ch: 'ch05', pages: '198, 234–235' },
      { ch: 'ch07', pages: '326' }
    ],
    facts: [
      { ch: 'ch05', pages: '234–235', text: 'Some prefer it for children and adolescents; it may need twice-daily dosing at initiation (especially in children or the elderly) to avoid sedation and orthostasis.', sec: 's5-dones' },
      { ch: 'ch07', pages: '326', text: 'Table 7-1: approved for **bipolar mania** and **maintenance**.', sec: 's7-sda-mania' }
    ]
  },
  {
    id: 'paliperidone', name: 'Paliperidone', brand: 'Invega', aka: ['9-hydroxy-risperidone'], group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “done”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Risperidone’s active metabolite: renally cleared, sustained release, long-interval injections.',
    mechanism: 'The active metabolite of risperidone, sharing its **5HT2A/D2** antagonism and binding (Figure 5-50). **Not hepatically metabolized** (urinary excretion), so few pharmacokinetic interactions.',
    targets: [
      { t: 'alpha1', action: 'antagonist', s: 4, note: 'α1B, α1A' },
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: 'alpha2', action: 'antagonist', s: 3, note: 'α2C, α2A, α2B' },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1B, 5HT1D' },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: '5ht5', action: 'antagonist', s: 1 },
      { t: '5ht1a', action: 'partial agonist', s: 1 }
    ],
    uses: ['Schizophrenia/maintenance (12+)', 'Long-acting injectable: **1-month and 3-month** (6-month in study at publication)'],
    sideEffects: [
      { e: 'Moderate weight gain and metabolic risk', via: 'Class actions' },
      { e: 'Perhaps less sedation, orthostasis and motor effects than risperidone (anecdotal)', via: 'Smoother sustained-release levels' }
    ],
    pearls: ['Sustained-release oral form: **once daily**, but easily **underdosed**', 'LAI is easier to load and dose than risperidone’s'],
    chapters: [{ ch: 'ch05', pages: '198, 235–236' }],
    facts: [{ ch: 'ch05', pages: '235', text: 'Rapid absorption and high peaks of risperidone may cause some of its side effects; paliperidone’s controlled release removes these.', sec: 's5-dones' }],
    updates: [{ year: '2021', title: 'Six-month injection approved', text: 'A 6-month paliperidone palmitate long-acting injection (Invega Hafyera) was approved for adults with schizophrenia after adequate treatment with the 1- or 3-month formulations.', source: 'FDA, August 30, 2021' }]
  },
  {
    id: 'ziprasidone', name: 'Ziprasidone', brand: 'Geodon', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “done”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: '5HT2A/D2 antagonist with little or no weight gain; take with food.',
    mechanism: 'A **5HT2A/D2 antagonist** that also binds 5HT1B/1D about as potently as D2, plus 5HT2C, 5HT7, D3, α1 and weak **NET and SERT** (Figure 5-51). It lacks the actions linked to weight gain, insulin resistance and significant sedation.',
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: '5ht1b1d', action: 'antagonist', s: 3, note: '5HT1B, 5HT1D' },
      { t: '5ht2c', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3, note: 'α1B, α1A' },
      { t: '5ht1a', action: 'partial agonist', s: 2 },
      { t: '5ht2b', action: 'antagonist', s: 2 },
      { t: 'net', action: 'inhibitor', s: 2 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2B, α2C, α2A' },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 1 },
      { t: '5ht5', action: 'antagonist', s: 1 },
      { t: 'sert', action: 'inhibitor', s: 1 }
    ],
    uses: ['Schizophrenia/maintenance', 'Bipolar mania/maintenance', '**IM** form for urgent use'],
    sideEffects: [{ e: 'Little or no weight gain or metabolic effect', via: 'Lacks H1/5HT2C and “receptor X” liability' }],
    pearls: ['Short acting: more than once daily, **with food**', 'QTc concerns now seem **exaggerated**: no dose-dependent QTc prolongation, few drugs raise its levels'],
    chapters: [
      { ch: 'ch05', pages: '198, 236' },
      { ch: 'ch07', pages: '326' }
    ],
    facts: [
      { ch: 'ch05', pages: '236', text: 'Unlike iloperidone, zotepine, sertindole and amisulpride, ziprasidone does **not** cause dose-dependent QTc prolongation.', sec: 's5-dones' },
      { ch: 'ch07', pages: '326', text: 'Table 7-1: approved for **bipolar mania** and **maintenance**; evidence in **mania with mixed features**.', sec: 's7-sda-mania' }
    ]
  },
  {
    id: 'sertindole', name: 'Sertindole', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    short: '5HT2A/D2 antagonist withdrawn and reintroduced over QTc concerns.',
    mechanism: 'A **5HT2A/D2 antagonist** with potent **α1** antagonism that may account for some side effects (Figure 5-60).',
    nts: ['dopamine', 'serotonin'],
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: '5ht2c', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: '5ht6', action: 'antagonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1D, 5HT1B' },
      { t: 'dat', action: 'inhibitor', s: 1 },
      { t: 'alpha2', action: 'antagonist', s: 1, note: 'α2B, α2C, α2A' },
      { t: '5ht1a', action: 'partial agonist', s: 1 },
      { t: 'm1', action: 'antagonist', s: 1 }
    ],
    uses: ['Second-line agent in some countries, with close cardiac and drug-interaction monitoring'],
    sideEffects: [{ e: 'QTc prolongation (dose-dependent)', via: 'Cardiac safety concerns led to withdrawal' }],
    chapters: [{ ch: 'ch05', pages: '236, 240–241' }],
    facts: [{ ch: 'ch05', pages: '240–241', text: 'Originally approved in some European countries, then withdrawn for cardiac/QTc testing and reintroduced as a second-line agent.', sec: 's5-others' }]
  },
  {
    id: 'perospirone', name: 'Perospirone', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    short: '5HT2A/D2 antagonist with 5HT1A partial agonism, used in Asia.',
    mechanism: 'A **5HT2A and D2** antagonist with **5HT1A** partial agonist actions that may contribute to efficacy or tolerability (Figure 5-61).',
    nts: ['dopamine', 'serotonin'],
    targets: [
      { t: 'd4', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'antagonist', s: 4 },
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: '5ht1a', action: 'partial agonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: 'alpha2', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia (Asia); more experience in schizophrenia than mania'],
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [{ ch: 'ch05', pages: '241', text: 'Usually given three times a day; its potential for weight gain, dyslipidemia, insulin resistance and diabetes is not well investigated.', sec: 's5-others' }]
  },
  {
    id: 'blonanserin', name: 'Blonanserin', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic',
    nbn: 'Dopamine D2/D3 and serotonin 5HT2A receptor antagonist',
    short: '5HT2A/D2 antagonist with higher D3 affinity than dopamine, used in Asia.',
    mechanism: 'A **5HT2A/D2 antagonist** with high **D3** affinity, higher than dopamine’s own (like cariprazine), suggesting possible use for negative symptoms and bipolar depression (Figure 5-62).',
    nts: ['dopamine', 'serotonin'],
    targets: [
      { t: 'd3', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'antagonist', s: 4 },
      { t: '5ht2a', action: 'antagonist', s: 4 }
    ],
    uses: ['Schizophrenia (Asia), twice daily'],
    chapters: [
      { ch: 'ch05', pages: '241' },
      { ch: 'ch07', pages: '344' }
    ],
    facts: [
      { ch: 'ch05', pages: '241', text: 'Its D3 potency suggests utility for negative symptoms and bipolar depression, not yet well studied.', sec: 's5-others' },
      { ch: 'ch07', pages: '344', text: 'With cariprazine, one of only two agents whose **D3 affinity** is orders of magnitude higher than dopamine’s (Figure 7-72).', sec: 's7-bipolar-depression' }
    ]
  },
  {
    id: 'roluperidone', name: 'Roluperidone', aka: ['MIN-101'], group: 'Investigational drug for psychosis', cls: '5HT2A/σ2 antagonist (investigational)',
    short: '5HT2A antagonist with σ2 antagonism, studied for negative symptoms.',
    mechanism: 'A **5HT2A antagonist** with additional **σ2** antagonist actions (Figure 5-63), in study for schizophrenia with early signs of efficacy for **negative symptoms**.',
    nts: ['serotonin'],
    targets: [
      { t: 'sigma', action: 'antagonist', s: 4, note: 'σ2' },
      { t: '5ht2a', action: 'antagonist', s: 4 }
    ],
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [{ ch: 'ch05', pages: '241', text: 'Early studies suggest possible efficacy for negative symptoms; trials ongoing at publication.', sec: 's5-future' }],
    updates: [{ year: '2024', title: 'FDA complete response letter', text: 'The FDA declined approval for negative symptoms of schizophrenia in February 2024, citing insufficient evidence that the change was clinically meaningful and asking for at least one additional positive controlled study.', source: 'Minerva Neurosciences, February 27, 2024' }]
  },
  {
    id: 'ulotaront', name: 'Ulotaront (SEP-363856)', aka: ['SEP-363856'], group: 'Investigational drug for psychosis', cls: 'TAAR1 agonist (investigational)',
    short: 'TAAR1 agonist found serendipitously; a non-D2-blocking candidate for psychosis.',
    mechanism: 'An agonist with weak affinity at **TAAR1**, plus weaker **5HT1D** and **5HT7** antagonist and **5HT1A** agonist actions (Figure 5-66). Antipsychotic effects in animals were found first; the TAAR1 mechanism was discovered afterwards. TAAR1 agonism biases D2 signaling toward Gi without blocking D2.',
    nts: ['dopamine', 'serotonin'],
    targets: [
      { t: 'taar1', action: 'agonist' },
      { t: '5ht1b1d', action: 'antagonist', note: '5HT1D' },
      { t: '5ht1a', action: 'agonist' },
      { t: '5ht7', action: 'antagonist' }
    ],
    chapters: [{ ch: 'ch05', pages: '242' }],
    facts: [{ ch: 'ch05', pages: '242', text: 'An early study in schizophrenia confirmed antipsychotic action with few side effects, and regulators granted **breakthrough** status.', sec: 's5-future' }],
    updates: [{ year: '2023', title: 'Phase III trials negative', text: 'Ulotaront did not separate from placebo in the phase III DIAMOND 1 and DIAMOND 2 schizophrenia trials; the companies cited a high placebo response.', source: 'Sumitomo Pharma/Otsuka, July 31, 2023' }]
  },
  {
    id: 'xanomeline', name: 'Xanomeline (with trospium)', aka: ['xanomeline–trospium', 'KarXT', 'Cobenfy'], group: 'Muscarinic agonist', cls: 'Central M4/M1 muscarinic agonist with peripheral antagonist',
    nbn: 'Muscarinic M1/M4 receptor agonist',
    short: 'Central M4/M1 agonist paired with peripheral trospium: a non-D2 mechanism for psychosis.',
    mechanism: 'A central **M4/M1 agonist**: M4 agonism may reduce psychosis by lowering VTA dopamine firing, and M1 agonism may improve cognition; it also raises prefrontal dopamine. It binds several serotonin receptors (Figure 5-67). **Trospium**, an anticholinergic that does not enter the brain, blocks peripheral **M2/M3** side effects.',
    nts: ['acetylcholine', 'dopamine'],
    targets: [
      { t: '5ht1b1d', action: 'binds', s: 3, note: '5HT1D, 5HT1B' },
      { t: 'm4', action: 'agonist', s: 2 },
      { t: '5ht2b', action: 'binds', s: 2 },
      { t: 'm2m3', action: 'binds', s: 2, note: 'M3, M2; Peripheral M2/M3 effects blocked by trospium' },
      { t: '5ht2c', action: 'binds', s: 2 },
      { t: '5ht1a', action: 'binds', s: 2 },
      { t: 'm1', action: 'agonist', s: 2 },
      { t: '5ht2a', action: 'binds', s: 1 },
      { t: '5ht7', action: 'binds', s: 1 },
      { t: '5ht4', action: 'binds', s: 1 },
      { t: 'd3', action: 'binds', s: 1 }
    ],
    uses: ['Schizophrenia (in advanced trials at publication; approved 2024)'],
    chapters: [{ ch: 'ch05', pages: '242' }],
    facts: [{ ch: 'ch05', pages: '242', text: 'With trospium, showed promising efficacy and tolerability for psychotic symptoms of schizophrenia and was progressing as a potential breakthrough.', sec: 's5-future' }],
    updates: [{ year: '2024', title: 'Approved for schizophrenia', text: 'Xanomeline–trospium (Cobenfy) was approved for schizophrenia in adults in September 2024. As an add-on to other antipsychotics it missed its primary endpoint in the phase III ARISE trial (April 2025).', source: 'FDA, September 26, 2024; Bristol Myers Squibb, April 2025' }]
  },
  {
    id: 'iloperidone', name: 'Iloperidone', brand: 'Fanapt', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “done”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Simple profile with potent α1 antagonism: very low motor effects, slow titration.',
    mechanism: 'A **5HT2A/D2 antagonist** with one of the **simplest** profiles, closest to a pure serotonin–dopamine antagonist; its most potent property is **α1 antagonism** (Figure 5-52).',
    targets: [
      { t: 'alpha1', action: 'antagonist', s: 4 },
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: 'd3', action: 'antagonist', s: 2 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: 'd4', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1D, 5HT1B' },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2A, α2B' },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: '5ht1a', action: 'partial agonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 1 },
      { t: '5ht7', action: 'antagonist', s: 1 },
      { t: 'd1', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia/maintenance (US); often a **switch** agent in non-urgent settings'],
    sideEffects: [
      { e: '**Orthostatic hypotension**, sedation', via: 'Potent α1 antagonism' },
      { e: 'Very low **motor** effects', via: 'Possibly helped by α1 antagonism' },
      { e: 'Moderate weight gain; low dyslipidemia', via: 'Class actions' },
      { e: 'Dose-dependent QTc prolongation', via: 'Noted in the book' }
    ],
    pearls: ['18- to 33-hour half-life, but usually twice daily with **slow titration**, which delays onset'],
    chapters: [{ ch: 'ch05', pages: '198, 236' }],
    facts: [
      { ch: 'ch05', pages: '236', text: 'Its distinguishing features are very low motor side effects, low dyslipidemia, moderate weight gain and potent α1 antagonism.', sec: 's5-dones' },
      { ch: 'ch07', pages: '328', text: 'Among the agents with the lowest DIP, attributed to robust **α1 + 5HT2A** antagonism.', sec: 's7-augment-sda' }
    ],
    updates: [{ year: '2024', title: 'Bipolar I indication', text: 'Iloperidone was approved for acute treatment of manic or mixed episodes of bipolar I disorder in adults in April 2024.', source: 'FDA, April 2, 2024' }]
  },
  {
    id: 'lurasidone', name: 'Lurasidone', brand: 'Latuda', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (a “done”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'D4 and 5HT7 most potent; low metabolic risk; preferred for bipolar depression.',
    mechanism: 'A **5HT2A/D2 antagonist** with a relatively simple profile: most potent at **D4** and **5HT7**, high 5HT2A, moderate **5HT1A** and **α2**, minimal **H1 and M1** (Figure 5-53). These may explain its antidepressant profile.',
    targets: [
      { t: 'd4', action: 'antagonist', s: 4 },
      { t: '5ht7', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'antagonist', s: 3 },
      { t: '5ht2a', action: 'antagonist', s: 3 },
      { t: '5ht1a', action: 'partial agonist', s: 3 },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2A' },
      { t: 'd3', action: 'antagonist', s: 2 },
      { t: 'alpha1', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 1 }
    ],
    uses: ['**Bipolar depression** (10+): highly effective and a preferred agent', 'Schizophrenia/maintenance; often preferred for **children**'],
    sideEffects: [
      { e: 'Low weight gain and metabolic risk', via: 'Minimal H1/M1 actions' },
      { e: 'Motor effects and sedation (less if dosed at night)', via: 'D2 blockade' }
    ],
    pearls: ['**NRX101** (Cyclurad) adds D-cycloserine for acute suicidality and bipolar depression (early positive findings)'],
    chapters: [
      { ch: 'ch05', pages: '198, 236–237' },
      { ch: 'ch07', pages: '343' }
    ],
    facts: [
      { ch: 'ch05', pages: '236–237', text: 'Synergy among several potential antidepressant properties with good tolerability makes it one of the preferred bipolar-depression agents where approved.', sec: 's5-dones' },
      { ch: 'ch07', pages: '343', text: 'Table 7-1: approved for **bipolar depression**; never tested in mania. The only agent with a large randomized trial in **unipolar depression with mixed features**; used at lower doses than for psychosis.', sec: 's7-bipolar-depression' }
    ]
  },
  {
    id: 'lumateperone', name: 'Lumateperone', brand: 'Caplyta', group: '5HT2A/D2 antagonist', cls: 'Atypical antipsychotic (the “rone”)',
    nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    nts: ['dopamine', 'serotonin'],
    short: 'Very potent 5HT2A, modest D2, SERT binding and possible presynaptic D2 partial agonism.',
    mechanism: 'A **5HT2A/D2 antagonist** with very high **5HT2A** affinity, moderate **D2, D1, α1** and **SERT** affinity, and low H1 (Figure 5-54). The **widest 5HT2A–D2 separation** may explain antipsychotic action at **low D2 occupancy**. Preclinical evidence suggests **presynaptic D2 partial agonism** with postsynaptic antagonism, turning down dopamine synthesis (Figure 5-55).',
    targets: [
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'antagonist', s: 2, note: 'Postsynaptic antagonist; possibly presynaptic partial agonist (preclinical)' },
      { t: 'd1', action: 'antagonist', s: 2 },
      { t: 'sert', action: 'inhibitor', s: 2 },
      { t: 'alpha1', action: 'antagonist', s: 2 },
      { t: '5ht2c', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia (no titration needed)', 'Bipolar depression trials promising at publication'],
    sideEffects: [
      { e: 'Little or no weight gain or metabolic disturbance', via: 'Low H1; low-risk tier' },
      { e: 'Little or no DIP or akathisia', via: 'Low D2 occupancy' }
    ],
    chapters: [{ ch: 'ch05', pages: '198, 219, 237–239' }],
    facts: [{ ch: 'ch05', pages: '237–239', text: 'SERT binding suggests antidepressant potential; if presynaptic D2 agonism is proven, less postsynaptic blockade would be needed for an antipsychotic effect.', sec: 's5-dones' }],
    updates: [{ year: '2025', title: 'Depression indications', text: 'Approved for bipolar I and II depression (monotherapy and adjunct to lithium or valproate) in December 2021 and as an adjunct for major depressive disorder in November 2025.', source: 'FDA, December 2021; November 6, 2025' }]
  },
  {
    id: 'aripiprazole', name: 'Aripiprazole', brand: 'Abilify', group: 'D2/5HT1A partial agonist', cls: 'Atypical antipsychotic (the original “pip”)',
    nbn: 'Dopamine D2 and serotonin 5HT1A receptor partial agonist',
    nts: ['dopamine', 'serotonin'],
    short: 'The original D2/5HT1A partial agonist: low motor effects except akathisia; lowers prolactin.',
    mechanism: 'A **D2 partial agonist** close to the antagonist end of the spectrum, with **5HT1A** partial agonism (higher affinity than its moderate **5HT2A** antagonism), plus **5HT7** and **5HT2C** antagonism (Figure 5-56). It lacks muscarinic and H1 actions associated with sedation, and the actions associated with metabolic risk.',
    targets: [
      { t: '5ht2b', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'partial agonist', s: 3 },
      { t: '5ht1a', action: 'partial agonist', s: 3 },
      { t: 'd3', action: 'partial agonist', s: 2 },
      { t: '5ht7', action: 'antagonist', s: 2 },
      { t: 'alpha1', action: 'antagonist', s: 2, note: 'α1A, α1B' },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: 'alpha2', action: 'antagonist', s: 2, note: 'α2C, α2A, α2B' },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1D, 5HT1B' },
      { t: 'd4', action: 'antagonist', s: 1 },
      { t: '5ht6', action: 'antagonist', s: 1 },
      { t: '5ht3', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia/maintenance (13+); **IM** agitation', 'Bipolar mania/maintenance (10+)', 'Autism-related irritability (5–17); **Tourette syndrome** (6–18)', '**Adjunct to SSRIs/SNRIs in major depression**: its main US use', 'Off-label in bipolar depression'],
    sideEffects: [
      { e: '**Akathisia** (main motor effect)', via: 'D2 partial agonism' },
      { e: 'Lowers prolactin', via: 'Lactotrophs read it as an agonist' },
      { e: 'Not generally sedating; little or no weight gain (some in children)', via: 'No M1/H1-type actions' }
    ],
    pearls: ['Oral, liquid, orally disintegrating; **4-week** and **4- to 8-week** long-acting injections (the latter with a day-1 loading injection)'],
    chapters: [
      { ch: 'ch05', pages: '193, 239' },
      { ch: 'ch07', pages: '325–327' }
    ],
    facts: [
      { ch: 'ch05', pages: '193', text: 'The result of “throwing a dart” closer to the antagonist end after OPC4392 and bifeprunox were too agonistic; some question its efficacy in the most severe psychosis (never proven).', sec: 's5-pa' },
      { ch: 'ch05', pages: '239', text: '5HT1A partial agonism and 5HT2C/5HT7 antagonism at low doses are theoretical antidepressant mechanisms.', sec: 's5-pips' },
      { ch: 'ch07', pages: '325–327', text: 'Table 7-1: approved for **bipolar mania** and **maintenance** and as an **adjunct for MDD**; one of the most prescribed augmenters in the US; **5HT1A partial agonism** (plus D3, 5HT7, 5HT2C, α2) may explain antidepressant action; some **akathisia**; not approved for bipolar depression.', sec: 's7-augment-sda' }
    ]
  },
  {
    id: 'pimavanserin', name: 'Pimavanserin', group: 'Selective 5HT2A antagonist', cls: 'Selective 5HT2A antagonist/inverse agonist',
    nbn: 'Serotonin 5HT2A receptor antagonist (inverse agonist)',
    short: 'The only proven antipsychotic that does not bind D2; approved for Parkinson’s disease psychosis.',
    mechanism: 'A potent **5HT2A antagonist** (sometimes called inverse agonist) with lesser **5HT2C** antagonism and **no D2** binding (Figure 5-59). 5HT2C antagonism might raise dopamine release in depression and negative symptoms. It blocks the overstimulated, upregulated 5HT2A receptors of Parkinson’s disease psychosis without the motor worsening of D2 blockade.',
    nts: ['serotonin'],
    targets: [
      { t: '5ht2a', action: 'inverse agonist', s: 4 },
      { t: '5ht2c', action: 'antagonist', s: 3 }
    ],
    uses: ['**Psychosis in Parkinson’s disease**', 'Dementia-related psychosis (late-stage testing at publication; see updates)', 'Early positive adjunctive results in major depression and negative symptoms'],
    chapters: [
      { ch: 'ch04', pages: '131–141, 157' },
      { ch: 'ch05', pages: '198, 240' }
    ],
    facts: [
      { ch: 'ch04', pages: '131–141', text: 'The 5HT2A mechanism avoids the D2 blockade that **worsens movement** in Parkinson’s disease and raises **stroke and death** risk in dementia.', sec: 's4-5ht-hyper' },
      { ch: 'ch05', pages: '240', text: 'The **only** known drug with proven antipsychotic efficacy that lacks D2 antagonist/partial agonist actions; in the low metabolic risk tier.', sec: 's5-others' }
    ],
    updates: [{ year: '2022', title: 'Not approved for dementia-related psychosis', text: 'The FDA issued complete response letters for dementia-related psychosis (April 2021) and for hallucinations and delusions of Alzheimer disease psychosis (August 2022, after a 9–3 advisory committee vote against efficacy). Its US approval remains for Parkinson’s disease psychosis.', source: 'FDA actions reported April 2021 and August 4, 2022' }]
  },
  {
    id: 'brexpiprazole', name: 'Brexpiprazole', brand: 'Rexulti', group: 'D2/5HT1A partial agonist', cls: 'Atypical antipsychotic (the second “pip”)',
    short: 'Aripiprazole relative with more potent 5HT1A, 5HT2A and α1 action; approved later for Alzheimer agitation.',
    mechanism: 'A **D2 partial agonist** related to aripiprazole but with relatively more potent **5HT2A** antagonism, **5HT1A** partial agonism (its most potent action) and **α1** antagonism versus D2 (Figure 5-57), which should theoretically reduce motor effects and akathisia. Higher α1 and α2 binding than aripiprazole may add antidepressant actions; α1 actions may help explain efficacy in **agitation in dementia**.',
    nts: ['dopamine', 'serotonin'],
    chapters: [
      { ch: 'ch04', pages: '146' },
      { ch: 'ch05', pages: '197, 239–240' },
      { ch: 'ch07', pages: '327–328' }
    ],
    facts: [
      { ch: 'ch04', pages: '146', text: 'Chapter 4 notes that **treatments for agitation in dementia are evolving separately** from those for psychosis in dementia and in schizophrenia.', sec: 's4-aggression' },
      { ch: 'ch05', pages: '197, 239–240', text: 'Positive results for agitation in dementia suggest it may have a satisfactory risk:benefit profile; a positive study with sertraline in PTSD was a promising exception among anxiety/PTSD uses.', sec: 's5-pips' },
      { ch: 'ch07', pages: '327–328', text: 'Table 7-1: approved as an **adjunct for MDD** only. Stronger 5HT2A, 5HT1A and **α1** binding than aripiprazole (possibly less akathisia); α1 + 5HT2A synergy may aid antidepressant action and evidence in Alzheimer agitation and PTSD.', sec: 's7-augment-sda' }
    ],
    updates: [
      { year: '2023', title: 'Approved for Alzheimer agitation', text: 'Approved by the FDA for **agitation associated with dementia due to Alzheimer disease**, the first drug approved for this indication in the US.', source: 'FDA, May 10, 2023' },
      { year: '2025', title: 'PTSD application not approved', text: 'The supplemental application for brexpiprazole with sertraline in adults with PTSD received an FDA complete response letter in September 2025.', source: 'Otsuka/Lundbeck, September 2025' }
    ],
    nbn: 'Dopamine D2 and serotonin 5HT1A receptor partial agonist',
    targets: [
      { t: '5ht1a', action: 'partial agonist', s: 4 },
      { t: 'alpha1', action: 'antagonist', s: 4, note: 'α1B, α1D, α1A' },
      { t: 'd2', action: 'partial agonist', s: 4 },
      { t: '5ht2a', action: 'antagonist', s: 4 },
      { t: 'alpha2', action: 'antagonist', s: 4, note: 'α2C' },
      { t: 'd3', action: 'partial agonist', s: 3 },
      { t: '5ht2b', action: 'antagonist', s: 3 },
      { t: '5ht7', action: 'antagonist', s: 3 },
      { t: 'd4', action: 'antagonist', s: 3 },
      { t: '5ht2c', action: 'antagonist', s: 2 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: '5ht1b1d', action: 'antagonist', s: 2, note: '5HT1B' },
      { t: '5ht6', action: 'antagonist', s: 2 },
      { t: 'd1', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia (not indicated for acute mania)', 'Positive late-stage studies in **agitation in dementia** (approved 2023, see update)', 'Preliminary data with **sertraline for PTSD**'],
    sideEffects: [
      { e: 'Some akathisia (perhaps less than aripiprazole; not proven head to head)', via: 'D2 partial agonism' },
      { e: 'Low metabolic risk, little sedation', via: 'Lacks the relevant receptor actions' }
    ]
  },
  {
    id: 'cariprazine', name: 'Cariprazine', brand: 'Vraylar', group: 'D2/5HT1A partial agonist', cls: 'Atypical antipsychotic (the “rip”)',
    nbn: 'Dopamine D2 and serotonin 5HT1A receptor partial agonist',
    nts: ['dopamine', 'serotonin'],
    short: 'D2/5HT1A partial agonist whose most potent action is D3 partial agonism.',
    mechanism: 'A **D2/5HT1A partial agonist** whose most potent binding is **D3 partial agonism**, with higher D3 affinity than dopamine itself; also potent **5HT2B**, α1 and α2A, with weaker **5HT2A** and H1 (Figure 5-58). D3 action may block limbic D3 receptors and, at VTA somatodendritic D3 receptors, raise prefrontal dopamine.',
    targets: [
      { t: 'd3', action: 'partial agonist', s: 4 },
      { t: '5ht2b', action: 'antagonist', s: 4 },
      { t: 'd2', action: 'partial agonist', s: 4 },
      { t: '5ht1a', action: 'partial agonist', s: 3 },
      { t: 'alpha1', action: 'antagonist', s: 3, note: 'α1B, α1D, α1A' },
      { t: 'alpha2', action: 'antagonist', s: 3, note: 'α2A' },
      { t: '5ht2a', action: 'antagonist', s: 2 },
      { t: 'h1', action: 'antagonist', s: 2 },
      { t: '5ht7', action: 'antagonist', s: 1 },
      { t: '5ht2c', action: 'antagonist', s: 1 }
    ],
    uses: ['Schizophrenia; **superior to a D2/5HT2A antagonist for negative symptoms**', 'Acute bipolar mania', '**Bipolar depression** at lower doses; broad efficacy across mixtures of mania and depression'],
    sideEffects: [
      { e: 'Some **akathisia** (reduced by slow titration); low DIP', via: 'D2 partial agonism with potent 5HT1A' },
      { e: 'Very low weight gain or metabolic disturbance', via: 'Low-risk tier' }
    ],
    pearls: ['Two long-lived active metabolites: potential weekly to monthly **“oral depot”**'],
    chapters: [
      { ch: 'ch05', pages: '193, 198, 240' },
      { ch: 'ch07', pages: '343–345' }
    ],
    facts: [
      { ch: 'ch05', pages: '240', text: 'D3 partial agonism shows preclinical promise for cognition, mood, emotion, reward/substance use and negative symptoms.', sec: 's5-pips' },
      { ch: 'ch07', pages: '343–345', text: 'Table 7-1: approved for **bipolar mania** and **bipolar depression**; evidence in mania with mixed features and depression with mixed features. The most potent **D3** binder: VTA D3 blockade releases DA onto prefrontal D1 receptors.', sec: 's7-bipolar-depression' }
    ],
    updates: [{ year: '2022', title: 'Adjunctive treatment of depression', text: 'Approved as an adjunct to antidepressants for major depressive disorder in adults in December 2022.', source: 'AbbVie/FDA, December 16, 2022' }]
  },
  {
    id: 'pregabalin', name: 'Pregabalin', group: 'Anticonvulsant', cls: 'Anticonvulsant (α2δ ligand)',
    nbn: 'Voltage-sensitive calcium channel α2δ ligand',
    short: 'Binds the α2δ subunit of presynaptic calcium channels.',
    mechanism: 'Binds the **α2δ** protein of voltage-sensitive calcium channels, which may regulate how the channel opens and closes. Reducing calcium entry at presynaptic N and P/Q channels can keep vesicles tethered and reduce release in states of excessive neurotransmission. Details in Chapters 8–10.',
    targets: [{ t: 'a2d', action: 'modulator', note: 'Binds α2δ' }],
    uses: ['Anticonvulsant', 'Class uses in chronic pain and possibly anxiety and sleep (Chapter 3 overview)'],
    chapters: [
      { ch: 'ch03', pages: '71' },
      { ch: 'ch07', pages: '347, 352' }
    ],
    facts: [
      { ch: 'ch03', pages: '71', text: 'The α2δ protein is **the target of pregabalin and gabapentin**.', sec: 's3-vscc' },
      { ch: 'ch07', pages: '347, 352', text: 'Table 7-3: little or no mood-stabilizing action (+/− from above) but robust for **pain** and **anxiety**.', sec: 's7-lamotrigine' }
    ]
  },
  {
    id: 'gabapentin', name: 'Gabapentin', group: 'Anticonvulsant', cls: 'Anticonvulsant (α2δ ligand)',
    nbn: 'Voltage-sensitive calcium channel α2δ ligand',
    short: 'Binds the α2δ subunit of presynaptic calcium channels.',
    mechanism: 'Binds the **α2δ** protein of voltage-sensitive calcium channels, like pregabalin. Details in Chapters 8–10.',
    targets: [{ t: 'a2d', action: 'modulator', note: 'Binds α2δ' }],
    uses: ['Anticonvulsant', 'Class uses in chronic pain and possibly anxiety and sleep (Chapter 3 overview)'],
    chapters: [
      { ch: 'ch03', pages: '71' },
      { ch: 'ch07', pages: '347, 352' }
    ],
    facts: [
      { ch: 'ch03', pages: '71', text: 'The α2δ protein is **the target of pregabalin and gabapentin**.', sec: 's3-vscc' },
      { ch: 'ch07', pages: '347, 352', text: 'Table 7-3: little or no mood-stabilizing action (+/− from above) but robust for **pain** and **anxiety**.', sec: 's7-lamotrigine' }
    ]
  }
];
