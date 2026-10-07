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
    chapters: [
      { ch: 'ch01', pages: '5–6' },
      { ch: 'ch02', pages: '33' },
      { ch: 'ch05', pages: '226' }
    ],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Entered clinical practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' },
      { ch: 'ch02', pages: '33', text: 'The book’s example of an SSRI at SERT’s **inhibitory allosteric site** (the “front seat” of the transporter wagon), reducing SERT’s affinity for serotonin.', sec: 's2-monoamine' },
      { ch: 'ch05', pages: '226', text: 'Combined with **olanzapine** for bipolar depression and treatment-resistant unipolar depression; 5HT2C antagonism of both may contribute.', sec: 's5-pines' }
    ]
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
      { ch: 'ch04', pages: '78–79' }
    ],
    facts: [
      { ch: 'ch02', pages: '31', text: 'Listed in Table 2-1 as a false substrate of both **NET and DAT**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: '**Amphetamine has two targets**: monoamine transporters and VMATs (as a transported substrate).', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '79', text: 'Dopamine release by amphetamine causes a **paranoid psychosis** much like schizophrenia: a cornerstone of the dopamine hypothesis. Table 4-1 lists psychostimulants as **D2 agonist** models with auditory hallucinations, paranoid delusions and no insight.', sec: 's4-three' },
      { ch: 'ch05', pages: '174', text: 'A false substrate of **VMAT2** that competes with natural transmitters; dopamine or amphetamine are the “too hot” end of the Goldilocks analogy.', sec: 's5-vmat2' }
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
    mechanism: 'Carried into serotonin neurons by **SERT** as a false substrate, and **releases serotonin**, which indirectly stimulates **5HT2A/2C** receptors.',
    targets: [{ t: 'sert', action: 'substrate', note: 'Transported (“false substrate”)' }],
    uses: ['“Empathogen”: experimental treatment of PTSD, especially with psychotherapy (at publication)'],
    chapters: [{ ch: 'ch02', pages: '31–33, 40' }],
    facts: [
      { ch: 'ch02', pages: '31–33', text: 'SERT has high affinity for transporting **Ecstasy (MDMA)** as well as serotonin (Table 2-1).', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '40', text: 'Serotonin release by MDMA produces **indirect 5HT2A/2C agonism**: “empathogen,” experimental for PTSD with psychotherapy (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '174', text: 'Like amphetamine, carried by VMAT2 as a **false substrate**.', sec: 's5-vmat2' }
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
      { ch: 'ch06', pages: '263–264' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'The neuroactive steroid listed in Table 3-2 for postpartum depression, rapid antidepressant and anesthetic actions.', sec: 's3-drugs' },
      { ch: 'ch06', pages: '263–264', text: 'A neuroactive steroid acting mainly at **extrasynaptic δ** GABA-A sites (tonic inhibition). Postpartum depression may follow the **fall** in neurosteroids after delivery; a **60-hour IV infusion** may reverse it.', sec: 's6-neurosteroids' }
    ],
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
    mechanism: 'A powerful **5HT2A agonist** that overstimulates prefrontal and visual cortex 5HT2A receptors on glutamate pyramidal neurons, causing psychosis, dissociative experiences and especially **visual hallucinations**. These effects are **blocked by 5HT2A antagonists**. Drugs of abuse are covered in Chapter 13.',
    nts: ['serotonin'],
    targets: [{ t: '5ht2a', action: 'agonist' }],
    sideEffects: [
      { e: 'Visual hallucinations', via: '5HT2A agonism in visual cortex' },
      { e: 'Psychosis, delusions', via: '5HT2A-driven glutamate output to VTA → dopamine excess' }
    ],
    chapters: [{ ch: 'ch04', pages: '78, 111, 131–133' }],
    facts: [{ ch: 'ch04', pages: '78, 131–133', text: 'Listed with LSD as a psychedelic model of psychosis (Table 4-1) and as a 5HT2A agonist whose effects are blocked by 5HT2A antagonists.', sec: 's4-5ht-hyper' }]
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
    mechanism: 'Structurally related to PCP, ketamine is a **NAM** at NMDA receptors: it binds **inside the calcium channel**, can enter only **when the channel is open**, and prevents glutamate/glycine cotransmission from opening it. Details in Chapter 7.',
    targets: [{ t: 'nmda', action: 'negative allosteric modulator', note: 'Open-channel site' }],
    uses: ['Anesthetic', '**Treatment-resistant depression** and **suicidal thoughts**', 'Rapid-acting antidepressant'],
    chapters: [
      { ch: 'ch03', pages: '55, 66' },
      { ch: 'ch04', pages: '78, 105–110' }
    ],
    facts: [
      { ch: 'ch03', pages: '66', text: 'Used as a treatment for **resistant depression and suicidal thoughts**.', sec: 's3-pam' },
      { ch: 'ch04', pages: '78, 105–110', text: 'A model of NMDA-hypofunction psychosis (Table 4-1: **visual** hallucinations, paranoid delusions, no insight). Blocking NMDA receptors on prefrontal GABA interneurons is **acute and reversible**, unlike the neurodevelopmental defect of schizophrenia.', sec: 's4-nmda-hypo' }
    ],
    updates: [{ year: '2025', title: 'Esketamine monotherapy', text: 'Esketamine (the S-enantiomer of ketamine) nasal spray, approved in 2019 as add-on treatment, was approved in January 2025 as **monotherapy** for treatment-resistant depression.', source: 'FDA, January 2025' }],
    sideEffects: [{ e: 'Psychosis (visual hallucinations, paranoia)', via: 'NMDA blockade on prefrontal GABA interneurons → glutamate and dopamine excess' }]
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
    chapters: [
      { ch: 'ch03', pages: '55' },
      { ch: 'ch05', pages: '199, 232' }
    ],
    facts: [
      { ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' },
      { ch: 'ch05', pages: '199, 232', text: 'Combined **H1 + 5HT2C** antagonism links it to weight gain; asenapine is structurally related and shares several of its binding properties.', sec: 's5-metabolic' }
    ]
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
    id: 'vortioxetine', name: 'Vortioxetine', group: 'Antidepressant', cls: 'Antidepressant',
    short: 'Among its actions, a 5HT3 antagonist.',
    mechanism: 'Blocks **5HT3** receptors as part of a multimodal profile covered in Chapter 7.',
    targets: [{ t: '5ht3', action: 'antagonist', note: 'Other actions added with Chapter 7' }],
    uses: ['Antidepressant; possibly pro-cognitive (Table 3-2)'],
    chapters: [{ ch: 'ch03', pages: '55' }],
    facts: [{ ch: 'ch03', pages: '55', text: 'A **5HT3 antagonist** with pro-cognitive and antidepressant actions (Table 3-2).', sec: 's3-drugs' }]
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
      { ch: 'ch05', pages: '219', text: 'One of the three agents with the widest 5HT2A–D2 separation and **D2 occupancy below 60%** at antipsychotic doses.', sec: 's5-binding' }
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
    chapters: [{ ch: 'ch05', pages: '198, 225–226' }],
    facts: [{ ch: 'ch05', pages: '225–226', text: 'Widely considered, by clinical experience rather than definitive trials, the **next most effective** after clozapine; 5HT2C plus weaker α2 antagonism, especially with fluoxetine’s 5HT2C antagonism, may explain efficacy in depression.', sec: 's5-pines' }],
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
    chapters: [{ ch: 'ch05', pages: '219–220, 226–231' }],
    facts: [{ ch: 'ch05', pages: '227–231', text: 'Goldilocks and the three bears: different pharmacology at 50, 300 and 800 mg (Figure 5-46). Low D2 occupancy (< 60%) at antipsychotic doses.', sec: 's5-pines' }]
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
    chapters: [{ ch: 'ch05', pages: '198, 232–233' }],
    facts: [{ ch: 'ch05', pages: '232–233', text: 'Rapid sublingual absorption gives rapid peak levels, unlike orally dissolving tablets that are absorbed later.', sec: 's5-pines' }]
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
    chapters: [{ ch: 'ch05', pages: '198, 234–235' }],
    facts: [{ ch: 'ch05', pages: '234–235', text: 'Some prefer it for children and adolescents; it may need twice-daily dosing at initiation (especially in children or the elderly) to avoid sedation and orthostasis.', sec: 's5-dones' }]
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
    chapters: [{ ch: 'ch05', pages: '198, 236' }],
    facts: [{ ch: 'ch05', pages: '236', text: 'Unlike iloperidone, zotepine, sertindole and amisulpride, ziprasidone does **not** cause dose-dependent QTc prolongation.', sec: 's5-dones' }]
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
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [{ ch: 'ch05', pages: '241', text: 'Its D3 potency suggests utility for negative symptoms and bipolar depression, not yet well studied.', sec: 's5-others' }]
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
    facts: [{ ch: 'ch05', pages: '236', text: 'Its distinguishing features are very low motor side effects, low dyslipidemia, moderate weight gain and potent α1 antagonism.', sec: 's5-dones' }],
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
    chapters: [{ ch: 'ch05', pages: '198, 236–237' }],
    facts: [{ ch: 'ch05', pages: '236–237', text: 'Synergy among several potential antidepressant properties with good tolerability makes it one of the preferred bipolar-depression agents where approved.', sec: 's5-dones' }]
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
    chapters: [{ ch: 'ch05', pages: '193, 239' }],
    facts: [
      { ch: 'ch05', pages: '193', text: 'The result of “throwing a dart” closer to the antagonist end after OPC4392 and bifeprunox were too agonistic; some question its efficacy in the most severe psychosis (never proven).', sec: 's5-pa' },
      { ch: 'ch05', pages: '239', text: '5HT1A partial agonism and 5HT2C/5HT7 antagonism at low doses are theoretical antidepressant mechanisms.', sec: 's5-pips' }
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
      { ch: 'ch05', pages: '197, 239–240' }
    ],
    facts: [
      { ch: 'ch04', pages: '146', text: 'Chapter 4 notes that **treatments for agitation in dementia are evolving separately** from those for psychosis in dementia and in schizophrenia.', sec: 's4-aggression' },
      { ch: 'ch05', pages: '197, 239–240', text: 'Positive results for agitation in dementia suggest it may have a satisfactory risk:benefit profile; a positive study with sertraline in PTSD was a promising exception among anxiety/PTSD uses.', sec: 's5-pips' }
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
    chapters: [{ ch: 'ch05', pages: '193, 198, 240' }],
    facts: [{ ch: 'ch05', pages: '240', text: 'D3 partial agonism shows preclinical promise for cognition, mood, emotion, reward/substance use and negative symptoms.', sec: 's5-pips' }],
    updates: [{ year: '2022', title: 'Adjunctive treatment of depression', text: 'Approved as an adjunct to antidepressants for major depressive disorder in adults in December 2022.', source: 'AbbVie/FDA, December 16, 2022' }]
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
