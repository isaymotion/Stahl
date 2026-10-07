/*
 * Neurotransmitter database. One entry per messenger; each chapter adds `facts` (with chapter and
 * book pages) and fills structured fields (synthesis, termination, pathways, roles, clinical).
 * Receptors and transporters live in targets.js and link back here through their `nt` field.
 * Families: 'Monoamine', 'Amino acid', 'Acetylcholine', 'Neuropeptide', 'Lipid (endocannabinoid)', 'Gas', 'Neurotrophin'.
 */
SP.nts = [
  {
    id: 'serotonin', name: 'Serotonin', abbr: '5HT', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs, and one of the monoamines. Antidepressants such as fluoxetine and amitriptyline act at its transporter.',
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** psychopharmacologists must know because psychotropic drugs target it.' },
      { ch: 'ch01', pages: '6', text: 'Amitriptyline (Elavil) and fluoxetine (Prozac) were in clinical use **before the serotonin transporter site was molecularly clarified**.' },
      { ch: 'ch01', pages: '8–9', text: 'As a monoamine, its neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal and receive neurotransmitter by dendritic release (volume neurotransmission); this regulation is linked to how many antidepressants work.' }
    ]
  },
  {
    id: 'norepinephrine', name: 'Norepinephrine', abbr: 'NE', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs, and one of the monoamines.',
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit their own release, a form of volume neurotransmission.' }
    ]
  },
  {
    id: 'dopamine', name: 'Dopamine', abbr: 'DA', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. In the prefrontal cortex, where dopamine transporters are scarce, it acts largely by volume neurotransmission.',
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8', text: 'The book’s main example of **volume neurotransmission**: the **prefrontal cortex has very few dopamine transporters (DATs)**, so dopamine released at a synapse spills over to neighboring receptors (such as D1) on the same and neighboring neurons.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8', text: 'In contrast, the **striatum** has DATs in abundance, which terminate dopamine’s action at the synapse.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal.' }
    ],
    clinical: ['Because drugs act wherever relevant receptors exist, prefrontal dopamine receptors outside synapses are reachable drug targets.']
  },
  {
    id: 'acetylcholine', name: 'Acetylcholine', abbr: 'ACh', family: 'Acetylcholine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs.',
    facts: [{ ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs; discussed in detail in the clinical chapters (especially dementia).' }]
  },
  {
    id: 'glutamate', name: 'Glutamate', abbr: 'Glu', family: 'Amino acid', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs.',
    facts: [{ ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' }]
  },
  {
    id: 'gaba', name: 'γ-Aminobutyric acid', abbr: 'GABA', family: 'Amino acid', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Benzodiazepines such as diazepam and alprazolam were prescribed before benzodiazepine receptors were discovered.',
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '6', text: 'Valium (diazepam) and Xanax (alprazolam) were prescribed **before benzodiazepine receptors were discovered**; the brain may even make “its own Xanax.”' }
    ]
  },
  {
    id: 'histamine', name: 'Histamine', abbr: 'HA', family: 'Monoamine', key6: false,
    summary: 'An important neurotransmitter and neuromodulator outside the key six, covered in the clinical chapters (especially sleep and wakefulness).',
    facts: [{ ch: 'ch01', pages: '5', text: 'Listed with neuropeptides and hormones as **other important neurotransmitters and neuromodulators**, mentioned in the relevant clinical chapters.' }]
  },
  {
    id: 'endorphin', name: 'β-Endorphin', abbr: 'β-END', family: 'Neuropeptide', key6: false,
    summary: 'The brain’s own morphine: a prime example of “God’s pharmacopeia.”',
    facts: [{ ch: 'ch01', pages: '5–6', text: 'The brain makes **its own morphine (β-endorphin)**. Morphine was used clinically **before β-endorphin was discovered**.', sec: 's1-nts' }]
  },
  {
    id: 'endocannabinoids', name: 'Endocannabinoids', abbr: 'EC', family: 'Lipid (endocannabinoid)', key6: false,
    summary: 'The brain’s own marijuana and the classic retrograde neurotransmitters: made in the postsynaptic neuron, they diffuse back to presynaptic CB1 receptors.',
    facts: [
      { ch: 'ch01', pages: '5–6', text: 'The brain makes **its own marijuana (endocannabinoids)**. Marijuana was smoked **before cannabinoid receptors and endocannabinoids were discovered**.', sec: 's1-nts' },
      { ch: 'ch01', pages: '6–7', text: 'A **retrograde neurotransmitter** (“endogenous marijuana”): **synthesized in the postsynaptic neuron**, released, and **diffuses to presynaptic cannabinoid receptors such as CB1**.', sec: 's1-classic' }
    ]
  },
  {
    id: 'nitric-oxide', name: 'Nitric oxide', abbr: 'NO', family: 'Gas', key6: false,
    summary: 'A gaseous retrograde neurotransmitter that diffuses across membranes to cGMP-sensitive presynaptic targets.',
    facts: [{ ch: 'ch01', pages: '6–7', text: 'A **gaseous retrograde neurotransmitter**: synthesized **postsynaptically**, it diffuses **out of the postsynaptic membrane and into the presynaptic membrane** to interact with **cyclic guanosine monophosphate (cGMP)-sensitive targets**.', sec: 's1-classic' }]
  },
  {
    id: 'neurotrophins', name: 'Neurotrophins', abbr: 'NGF', family: 'Neurotrophin', key6: false,
    summary: 'Growth factors such as nerve growth factor (NGF) that act as retrograde messengers and drive a kinase cascade regulating synaptogenesis and neuronal survival.',
    facts: [
      { ch: 'ch01', pages: '6–7', text: '**Neurotrophic factors such as nerve growth factor (NGF)** act as retrograde neurotransmitters: released from postsynaptic sites, taken up into presynaptic vesicles, and carried by **retrograde transport to the nucleus** to interact with the genome.', sec: 's1-classic' },
      { ch: 'ch01', pages: '11–12, 17', text: 'First messenger of the **neurotrophin-linked cascade**: Ras (a G protein) → Raf (a kinase) → MEK → ERK, RSK, MAPK or GSK-3 → gene expression controlling **synaptogenesis, neuronal survival**, learning, memory and disease expression.', sec: 's1-four' }
    ],
    roles: ['Synaptogenesis', 'Neuronal survival', 'Plastic changes underlying learning and memory']
  },
  {
    id: 'neuropeptides', name: 'Neuropeptides and hormones', abbr: 'NP', family: 'Neuropeptide', key6: false,
    summary: 'Neuromodulators mentioned in the clinical chapters; steroid and thyroid hormones act through hormone–nuclear receptor complexes that regulate genes directly.',
    facts: [
      { ch: 'ch01', pages: '5', text: 'Various **neuropeptides and hormones** are important neurotransmitters and neuromodulators mentioned throughout the clinical chapters.' },
      { ch: 'ch01', pages: '11, 17', text: 'Hormones such as **estrogen, thyroid hormone and cortisol** bind **cytoplasmic receptors**; the **hormone–nuclear receptor complex** moves to the nucleus and binds **hormone-response elements (HREs)** to activate genes.', sec: 's1-genes' }
    ]
  }
];
