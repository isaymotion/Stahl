
  /* ---------------- ligand-gated ion channels (Chapter 3) ---------------- */
  {
    id: 'gabaa', name: 'GABA-A receptor', short: 'GABA-A', family: 'Ligand-gated ion channel', nt: 'gaba',
    summary: 'A pentameric ligand-gated chloride channel. Benzodiazepines and Z drugs are PAMs (full agonists at their allosteric sites) mediating phasic inhibition; neuroactive steroids act at benzodiazepine-insensitive sites mediating tonic inhibition.',
    coupling: 'Opens a **chloride** channel; five subunits, each with four transmembrane regions (e.g., α1, γ, δ subunits)',
    stim: ['Benzodiazepine-site PAMs: **reduce anxiety, induce sleep, block convulsions, block short-term memory, relax muscles**', 'Nonbenzodiazepine PAM sites (Z drugs): **improve insomnia**', 'Neurosteroid sites (tonic inhibition): **postpartum depression**, rapid-acting antidepressant, anesthetic'],
    block: ['Benzodiazepine **inverse agonists** (NAMs; experimental only): **panic attacks, seizures**, some improvement in memory'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'A **pentameric** ligand-gated channel (Table 3-1); subtypes depend on which subunits (e.g., α1, γ, δ) are assembled.', sec: 's3-structure' },
      { ch: 'ch03', pages: '55', text: 'Table 3-2: **benzodiazepine** sites (anxiolytic) and **nonbenzodiazepine PAM** sites (Z drugs, insomnia) mediate **phasic** inhibition; **neurosteroid** sites (allopregnanolone) mediate **tonic** inhibition.', sec: 's3-drugs' },
      { ch: 'ch03', pages: '65–66', text: 'Benzodiazepines are the book’s example of **PAMs**: acting as **full agonists at the PAM site**, they amplify GABA’s opening of the chloride channel. The **same site** gives NAM actions with an **inverse agonist**.', sec: 's3-pam' }
    ],
    updates: [{ year: '2023', title: 'Oral neurosteroid approved', text: '**Zuranolone**, an oral GABA-A positive allosteric modulator, was approved in August 2023 for postpartum depression.', source: 'FDA, August 2023' }]
  },
  {
    id: 'nicotinic', name: 'Nicotinic acetylcholine receptors (α4β2, α7)', short: 'Nicotinic', family: 'Ligand-gated ion channel', nt: 'acetylcholine',
    summary: 'Pentameric ligand-gated channels for acetylcholine. Nicotine desensitizes and then inactivates them; the α4β2 partial agonist varenicline aids smoking cessation.',
    coupling: 'Pentameric ion channel (calcium-permeable, a different class from VSCCs)',
    stim: ['α4β2 **partial agonism** (varenicline): **smoking cessation**', 'Prolonged agonism (nicotine): **desensitization** within about one cigarette, then **inactivation** for hours'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'Pentameric (Table 3-1), with subtypes such as **α7** and **α4β2**.', sec: 's3-structure' },
      { ch: 'ch03', pages: '63–64', text: 'Inactivation is **best characterized** for nicotinic receptors. Acetylcholine is hydrolyzed too fast to desensitize them, but **nicotine** is not hydrolyzed by acetylcholinesterase: it desensitizes them in about the time of one cigarette and inactivates them for about the time between cigarettes.', sec: 's3-states' }
    ]
  },
  {
    id: '5ht3', name: 'Serotonin 5HT3 receptor', short: '5HT3', family: 'Ligand-gated ion channel', nt: 'serotonin',
    summary: 'The only ligand-gated serotonin receptor (pentameric). Antagonists are antiemetic; mirtazapine and vortioxetine block it as part of their profiles.',
    block: ['**Pro-cognitive** and **antidepressant** (mirtazapine, vortioxetine)', '**Antiemetic**: reduces chemotherapy-induced emesis'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'A **pentameric** ligand-gated ion channel (Table 3-1).', sec: 's3-structure' },
      { ch: 'ch03', pages: '55', text: '**Antagonists**: mirtazapine and vortioxetine (pro-cognitive, antidepressant); antiemetics for chemotherapy-induced emesis (Table 3-2).', sec: 's3-drugs' }
    ]
  },
  {
    id: 'glyr', name: 'Glycine receptor (strychnine-sensitive)', short: 'Glycine receptor', family: 'Ligand-gated ion channel', nt: 'glycine',
    summary: 'A pentameric ligand-gated glycine receptor, sensitive to strychnine.',
    facts: [{ ch: 'ch03', pages: '53', text: '**Strychnine-sensitive glycine receptors** are among the pentameric ligand-gated ion channels (Table 3-1).', sec: 's3-structure' }]
  },
  {
    id: 'nmda', name: 'NMDA glutamate receptor', short: 'NMDA', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor whose calcium channel opens with glutamate/glycine cotransmission. Memantine (Mg²⁺/NAM site) and open-channel blockers (PCP, ketamine, dextromethorphan, dextromethadone) act here.',
    coupling: 'Tetrameric; subunits NMDAR1, NMDAR2A–D, NMDAR3A; calcium channel opened by **glutamate with glycine** as cotransmitter',
    block: ['NAM/Mg²⁺ site antagonism (memantine): **pro-cognitive in Alzheimer disease**', 'Open-channel antagonism (PCP, ketamine, dextromethorphan, dextromethadone): **dissociative hallucinogen; anesthetic; pseudobulbar affect; agitation in Alzheimer disease; rapid-acting antidepressant; treatment-resistant depression**'],
    facts: [
      { ch: 'ch03', pages: '55–56', text: 'A **tetrameric** ionotropic glutamate receptor (Table 3-3); subtype-selective glutamate drugs are under investigation but not in clinical use.', sec: 's3-structure' },
      { ch: 'ch03', pages: '66', text: '**PCP and ketamine** are NAMs that bind **inside the calcium channel**, entering only **when the channel is open**, and prevent glutamate/glycine cotransmission from opening it.', sec: 's3-pam' }
    ],
    updates: [
      { year: '2022', title: 'Dextromethorphan–bupropion approved', text: 'Approved for major depressive disorder in August 2022 (Auvelity).', source: 'FDA, August 2022' },
      { year: '2025', title: 'Esketamine monotherapy', text: 'Esketamine nasal spray was approved as monotherapy for treatment-resistant depression in January 2025.', source: 'FDA, January 2025' }
    ]
  },
  {
    id: 'ampa', name: 'AMPA glutamate receptor', short: 'AMPA', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor (GluR1–4 subunits). No subtype-selective drugs are in clinical use.',
    facts: [{ ch: 'ch03', pages: '55–56', text: 'AMPA (α-amino-3-hydroxy-5-methyl-4-isoxazole-propionic acid) receptors are tetrameric, with **GluR1–4** subunits (Table 3-3).', sec: 's3-structure' }]
  },
  {
    id: 'kainate', name: 'Kainate glutamate receptor', short: 'Kainate', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor (GluR5–7, KA1–2 subunits). No subtype-selective drugs are in clinical use.',
    facts: [{ ch: 'ch03', pages: '55–56', text: 'Kainate receptors are tetrameric, with **GluR5–7** and **KA1–2** subunits (Table 3-3).', sec: 's3-structure' }]
  },
  {
    id: 'a2d', name: 'α2δ subunit of voltage-sensitive calcium channels', short: 'α2δ', family: 'Voltage-sensitive ion channel',
    summary: 'A protein flanking the α1 pore of VSCCs, with a transmembrane δ part and an extracellular α2 part. Target of pregabalin and gabapentin.',
    location: 'Presynaptic **N and P/Q** VSCCs (flanking the α1 pore)',
    block: ['Reduced neurotransmitter release in states of excess: **pain, seizures**, possibly **anxiety and sleep**'],
    facts: [{ ch: 'ch03', pages: '71', text: 'Has a **δ** part in the membrane and an **α2** part outside the cell; it is the target of **pregabalin and gabapentin** and may regulate how the channel opens and closes.', sec: 's3-vscc' }]
  },
