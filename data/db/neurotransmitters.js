/*
 * Neurotransmitter database. One entry per messenger; each chapter adds `facts` (with chapter and
 * book pages) and fills structured fields (synthesis, termination, pathways, roles, clinical).
 * Receptors and transporters live in targets.js and link back here through their `nt` field.
 */
SP.nts = [
  {
    id: 'serotonin', name: 'Serotonin', abbr: '5HT', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Its reuptake pump SERT is the target of SSRIs and many other drugs; its many receptor subtypes (5HT1A, 1B/1D, 2A, 2C, 6, 7) are major drug targets.',
    termination: ['Reuptake by the presynaptic **serotonin transporter (SERT)**, an SLC6 sodium-dependent cotransporter', 'Packaged into vesicles by **VMAT2**'],
    clinical: ['Blocking SERT enhances synaptic serotonin: the basis of SSRIs, used for depression, anxiety disorders, OCD, PTSD, eating disorders and pain', 'MDMA is carried by SERT and releases serotonin'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** psychopharmacologists must know because psychotropic drugs target it.' },
      { ch: 'ch01', pages: '6', text: 'Amitriptyline (Elavil) and fluoxetine (Prozac) were in clinical use **before the serotonin transporter site was molecularly clarified**.' },
      { ch: 'ch01', pages: '8–9', text: 'As a monoamine, its neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal and receive neurotransmitter by dendritic release (volume neurotransmission); this regulation is linked to how many antidepressants work.' },
      { ch: 'ch02', pages: '31–33', text: 'Recaptured by **SERT** (which also carries MDMA) and stored by **VMAT2**. SSRIs bind an **allosteric** site on SERT and block reuptake.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '39–40', text: 'Receptor subtypes targeted by drugs: **5HT1A** (partial agonist), **5HT1B/1D**, **5HT2A** (antagonist/inverse agonist or agonist), **5HT2C**, **5HT6** and **5HT7** (Tables 2-4 and 2-5).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'norepinephrine', name: 'Norepinephrine', abbr: 'NE', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Its reuptake pump NET also carries dopamine; α1 and α2 receptors are important drug targets.',
    termination: ['Reuptake by the **norepinephrine transporter (NET)**, which also has high affinity for dopamine', 'Packaged into vesicles by **VMAT2**', 'Destroyed by **monoamine oxidase (MAO)**'],
    clinical: ['NET inhibition: antidepressant, neuropathic pain, ADHD', 'α2 antagonism is antidepressant; α2 agonism helps ADHD; α1 antagonism helps nightmares but causes orthostatic hypotension'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit their own release, a form of volume neurotransmission.' },
      { ch: 'ch02', pages: '31', text: '**NET** carries dopamine, epinephrine and amphetamine as well as norepinephrine.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '40', text: 'Norepinephrine reuptake inhibition stimulates **all norepinephrine receptors** indirectly: antidepressant, neuropathic pain, ADHD (Table 2-5).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'dopamine', name: 'Dopamine', abbr: 'DA', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Recaptured by DAT (scarce in prefrontal cortex), stored by VMAT2; D2 is the key target of so-called antipsychotics.',
    termination: ['Reuptake by the **dopamine transporter (DAT)**: abundant in the striatum, scarce in the prefrontal cortex', 'Also carried by **NET**, which has high affinity for dopamine', 'Packaged into vesicles by **VMAT2**'],
    clinical: ['Because drugs act wherever relevant receptors exist, prefrontal dopamine receptors outside synapses are reachable drug targets.', 'DAT and NET blockade by stimulants (methylphenidate, amphetamine) improves ADHD, depression and wakefulness', 'D2 antagonism or partial agonism is antipsychotic and antimanic', 'VMAT2 inhibitors (tetrabenazine, deutetrabenazine, valbenazine) treat movement disorders such as tardive dyskinesia'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8', text: 'The book’s main example of **volume neurotransmission**: the **prefrontal cortex has very few dopamine transporters (DATs)**, so dopamine released at a synapse spills over to neighboring receptors (such as D1) on the same and neighboring neurons.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8', text: 'In contrast, the **striatum** has DATs in abundance, which terminate dopamine’s action at the synapse.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal.' },
      { ch: 'ch02', pages: '31–32', text: '**DAT** carries norepinephrine, epinephrine and amphetamine as well as dopamine; **NET** also has high affinity for dopamine.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: 'VMATs in **dopamine neurons** are targeted by amphetamine (substrate) and by tetrabenazine, deutetrabenazine and valbenazine (inhibitors).', sec: 's2-vesicular' }
    ]
  },
  {
    id: 'acetylcholine', name: 'Acetylcholine', abbr: 'ACh', family: 'Acetylcholine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Made from choline, packaged by VAChT, destroyed by acetylcholinesterase; muscarinic receptors (M1–M5) are drug targets.',
    synthesis: [['Choline', 'Taken up by the presynaptic **choline transporter**'], ['Acetylcholine', 'Packaged into vesicles by **VAChT**']],
    termination: ['Destroyed by **acetylcholinesterase**', 'No drug targets the choline transporter or VAChT'],
    clinical: ['Acetylcholinesterase inhibitors raise acetylcholine and improve cognition in Alzheimer disease', 'M1 agonism pro-cognitive and antipsychotic; M4 agonism antipsychotic', 'M1 antagonism: sedation, memory disturbance; M2/M3 antagonism: dry mouth, blurred vision, constipation, urinary retention'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch02', pages: '34–35', text: 'Its precursor **choline** has a presynaptic transporter, and acetylcholine is packaged by **VAChT** (SLC18); no drugs target either.', sec: 's2-other' },
      { ch: 'ch02', pages: '40', text: 'Muscarinic receptors **M1, M4, M2/M3** are drug targets (Table 2-4); **acetylcholinesterase inhibition** boosts acetylcholine at all its receptors (Table 2-5).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'glutamate', name: 'Glutamate', abbr: 'Glu', family: 'Amino acid', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Recaptured mainly into glia by EAATs and recycled via glutamine; packaged by vGluT1–3.',
    termination: ['Uptake by **excitatory amino acid transporters (EAAT1–5)**, SLC1 family, especially **into glia**', 'In glia converted to **glutamine**, which returns to the neuron and is converted back to glutamate', 'Packaged into vesicles by **vGluT1–3** (SLC17)'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch02', pages: '34–35', text: 'Glutamate transporters (EAAT1–5) are a unique **SLC1** family: no chloride cotransport, almost always potassium countertransport, perhaps trimers. **No drugs** target them, and since reducing glutamate is often the goal their future as targets is unclear.', sec: 's2-other' }
    ]
  },
  {
    id: 'gaba', name: 'γ-Aminobutyric acid', abbr: 'GABA', family: 'Amino acid', key6: true,
    summary: 'The ubiquitous inhibitory neurotransmitter and one of the six key systems. Recaptured by GAT1–4 (GAT1 blocked by tiagabine), packaged by VIAAT; GABA-B is its G-protein-linked receptor.',
    termination: ['Reuptake by **GABA transporters GAT1–4** (SLC6); **GAT1** is a key presynaptic transporter', 'Packaged into vesicles by **VIAAT** (SLC32)'],
    clinical: ['Tiagabine blocks GAT1: anticonvulsant, possibly anxiety, sleep and pain', 'GABA-B agonism treats cataplexy and sleepiness in narcolepsy'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '6', text: 'Valium (diazepam) and Xanax (alprazolam) were prescribed **before benzodiazepine receptors were discovered**; the brain may even make “its own Xanax.”' },
      { ch: 'ch02', pages: '34', text: 'Called the **ubiquitous inhibitory neurotransmitter**. GAT1 is selectively blocked by **tiagabine**, increasing synaptic GABA.', sec: 's2-other' },
      { ch: 'ch02', pages: '39', text: '**GABA-B** agonism: cataplexy, sleepiness in narcolepsy, possibly slow-wave sleep, chronic pain and alcohol use disorder (Table 2-4).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'glycine', name: 'Glycine', abbr: 'Gly', family: 'Amino acid', key6: false,
    summary: 'An amino acid neurotransmitter recaptured by glycine transporters GlyT1 and GlyT2; no clinically used drug blocks them.',
    termination: ['Reuptake by **GlyT1** (mostly glial) and **GlyT2** (neuronal), SLC6 family'],
    facts: [{ ch: 'ch02', pages: '31, 34', text: 'Glycine transporters are SLC6 members with structure similar to the monoamine transporters; **no drugs** in clinical practice block them, though agents were in trials for schizophrenia.', sec: 's2-other' }],
    updates: [{ year: '2025', title: 'GlyT1 inhibitor fails phase III', text: 'Iclepertin, a GlyT1 inhibitor, did not meet its primary endpoints for cognitive impairment associated with schizophrenia (CONNEX program, January 2025).', source: 'Boehringer Ingelheim, January 2025' }]
  },
  {
    id: 'histamine', name: 'Histamine', abbr: 'HA', family: 'Monoamine', key6: false,
    summary: 'An important neurotransmitter and neuromodulator outside the key six. It has no presynaptic reuptake transporter and is inactivated enzymatically; H1 and H3 receptors are drug targets.',
    termination: ['**No presynaptic transporter**: inactivation thought to be **entirely enzymatic**', 'Packaged into vesicles by **VMAT2**, like the monoamines'],
    clinical: ['H1 antagonism: therapeutic for anxiety and insomnia; side effects of sedation and weight gain', 'H3 antagonism/inverse agonism: improves daytime sleepiness'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'Listed with neuropeptides and hormones as **other important neurotransmitters and neuromodulators**, mentioned in the relevant clinical chapters.' },
      { ch: 'ch02', pages: '35', text: 'Apparently has **no presynaptic transporter**, though it is packaged by **VMAT2**; inactivation is thought to be **entirely enzymatic**.', sec: 's2-missing' },
      { ch: 'ch02', pages: '40', text: '**H1** antagonism and **H3** antagonism/inverse agonism are drug actions in Table 2-4.', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'melatonin', name: 'Melatonin', abbr: 'MT', family: 'Hormone', key6: false,
    summary: 'Acts at MT1 and MT2 receptors; agonists improve insomnia and circadian rhythms.',
    clinical: ['MT1/MT2 agonism improves insomnia and circadian rhythms'],
    facts: [{ ch: 'ch02', pages: '39', text: '**MT1 and MT2** agonist actions improve insomnia and circadian rhythms (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'orexin', name: 'Orexin', abbr: 'OX', family: 'Neuropeptide', key6: false,
    summary: 'Orexin A and B act at OX1 and OX2 receptors; antagonists are hypnotics for insomnia (Chapter 10).',
    clinical: ['OX1/OX2 antagonism is hypnotic for insomnia'],
    facts: [{ ch: 'ch02', pages: '40', text: '**Orexin A and B** act at **OX1 and OX2**; antagonists are hypnotics for insomnia (Table 2-4).', sec: 's2-receptor-tables' }]
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
    summary: 'Growth factors such as nerve growth factor (NGF) that act as retrograde messengers and drive a kinase cascade regulating synaptogenesis and neuronal survival; some signal through GSK-3, which lithium may inhibit.',
    roles: ['Synaptogenesis', 'Neuronal survival', 'Plastic changes underlying learning and memory'],
    facts: [
      { ch: 'ch01', pages: '6–7', text: '**Neurotrophic factors such as nerve growth factor (NGF)** act as retrograde neurotransmitters: released from postsynaptic sites, taken up into presynaptic vesicles, and carried by **retrograde transport to the nucleus** to interact with the genome.', sec: 's1-classic' },
      { ch: 'ch01', pages: '11–12, 17', text: 'First messenger of the **neurotrophin-linked cascade**: Ras (a G protein) → Raf (a kinase) → MEK → ERK, RSK, MAPK or GSK-3 → gene expression controlling **synaptogenesis, neuronal survival**, learning, memory and disease expression.', sec: 's1-four' },
      { ch: 'ch02', pages: '48', text: 'Some neurotrophins (with insulin, IGF-1 and Wnt glycoproteins) act through **GSK-3** to promote cell death; **lithium** may inhibit GSK-3.', sec: 's2-enzymes' }
    ]
  },
  {
    id: 'neuropeptides', name: 'Neuropeptides and hormones', abbr: 'NP', family: 'Neuropeptide', key6: false,
    summary: 'Neuromodulators mentioned in the clinical chapters. Neuropeptides have no reuptake transporters; steroid and thyroid hormones act through hormone–nuclear receptor complexes that regulate genes directly.',
    termination: ['**No reuptake pumps or presynaptic transporters** known', 'Inactivated by **diffusion, sequestration and enzymatic destruction**'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'Various **neuropeptides and hormones** are important neurotransmitters and neuromodulators mentioned throughout the clinical chapters.' },
      { ch: 'ch01', pages: '11, 17', text: 'Hormones such as **estrogen, thyroid hormone and cortisol** bind **cytoplasmic receptors**; the **hormone–nuclear receptor complex** moves to the nucleus and binds **hormone-response elements (HREs)** to activate genes.', sec: 's1-genes' },
      { ch: 'ch02', pages: '35', text: 'Neuropeptides lack presynaptic transporters and are inactivated by **diffusion, sequestration and enzymatic destruction**.', sec: 's2-missing' }
    ]
  }
];
