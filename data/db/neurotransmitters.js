/*
 * Neurotransmitter database. One entry per messenger; each chapter adds `facts` (with chapter and
 * book pages) and fills structured fields (synthesis, termination, pathways, roles, clinical).
 * Receptors and transporters live in targets.js and link back here through their `nt` field.
 */
SP.nts = [
  {
    id: 'serotonin', name: 'Serotonin', abbr: '5HT', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Its reuptake pump SERT is the target of SSRIs and many other drugs; its many receptor subtypes (5HT1A, 1B/1D, 2A, 2C, 6, 7) are major drug targets.',
    termination: ['Reuptake by the presynaptic **serotonin transporter (SERT)**, an SLC6 sodium-dependent cotransporter', 'Packaged into vesicles by **VMAT2**', 'Destroyed by **MAO**; serotonergic **MAO-B** has low affinity, so only at high intracellular levels (Chapter 4)', '**All** 5HT neurons are thought to express SERT'],
    clinical: ['Blocking SERT enhances synaptic serotonin: the basis of SSRIs, used for depression, anxiety disorders, OCD, PTSD, eating disorders and pain', 'MDMA is carried by SERT and releases serotonin', '**5HT2A** excess or imbalance: hallucinogen psychosis, Parkinson’s disease psychosis, dementia-related psychosis; treated with 5HT2A antagonists', 'SERT polymorphisms may predict response and side effects with SERT blockers'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** psychopharmacologists must know because psychotropic drugs target it.' },
      { ch: 'ch01', pages: '6', text: 'Amitriptyline (Elavil) and fluoxetine (Prozac) were in clinical use **before the serotonin transporter site was molecularly clarified**.' },
      { ch: 'ch01', pages: '8–9', text: 'As a monoamine, its neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal and receive neurotransmitter by dendritic release (volume neurotransmission); this regulation is linked to how many antidepressants work.' },
      { ch: 'ch02', pages: '31–33', text: 'Recaptured by **SERT** (which also carries MDMA) and stored by **VMAT2**. SSRIs bind an **allosteric** site on SERT and block reuptake.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '39–40', text: 'Receptor subtypes targeted by drugs: **5HT1A** (partial agonist), **5HT1B/1D**, **5HT2A** (antagonist/inverse agonist or agonist), **5HT2C**, **5HT6** and **5HT7** (Tables 2-4 and 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch03', pages: '53, 55', text: '**5HT3** is a pentameric ligand-gated channel; antagonists include mirtazapine and vortioxetine (pro-cognitive, antidepressant) and antiemetics.', sec: 's3-drugs' },
      { ch: 'ch04', pages: '115–119', text: 'Autoreceptors: somatodendritic **5HT1A** (negative feedback) and **5HT2B** (feed-forward), terminal **5HT1B/D**. Unlike dopamine and NE neurons, the two ends carry different autoreceptors.', sec: 's4-5ht-pre' },
      { ch: 'ch04', pages: '122–131', text: 'Postsynaptic receptors on GABA interneurons flip the sign downstream: 5HT1A **raises** NE, DA and ACh; 5HT2C, 5HT3 and 5HT7 **lower** downstream release.', sec: 's4-5ht-post' },
      { ch: 'ch04', pages: '131–141', text: 'The **serotonin hyperfunction** hypothesis: 5HT2A excess or imbalance on cortical glutamate neurons drives VTA dopamine (delusions, auditory hallucinations) and visual cortex (visual hallucinations).', sec: 's4-5ht-hyper' },
      { ch: 'ch05', pages: '184–195', text: '5HT2A antagonism and 5HT1A partial agonism at cortical glutamate neurons reshape downstream dopamine release: the basis of the so-called atypical drugs.', sec: 's5-three-pathways' },
      { ch: 'ch06', pages: '277–278', text: 'Diffuse serotonin dysfunction is linked mainly to **increased negative affect**: guilt, disgust, fear, anxiety, hostility, irritability, loneliness. Ascending raphe projections regulate mood, anxiety and sleep; descending ones regulate pain.', sec: 's6-circuits' },
      { ch: 'ch07', pages: '289–292', text: 'SSRIs act through delayed **disinhibition** of serotonin release after somatodendritic 5HT1A autoreceptors desensitize.', sec: 's7-ssri' },
      { ch: 'ch08', pages: '368', text: 'Serotonin innervates the **amygdala** and the whole **CSTC** loop, so serotonergic drugs can reduce both fear and worry.', sec: 's8-serotonin' }
    ],
    synthesis: [['Tryptophan', 'Transported from plasma into the brain'], ['5HTP', '**Tryptophan hydroxylase (TRY-OH)**'], ['5HT', '**Aromatic amino acid decarboxylase (AAADC)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    pathways: [
      { name: 'Raphe projections', route: 'Dorsal and median raphe → prefrontal cortex and widespread cortical/subcortical areas', role: 'Mood, sleep, appetite; tuning of glutamate output' },
      { name: 'To other transmitter centers', route: 'Raphe → locus coeruleus (NE), VTA (DA), tuberomammillary nucleus (HA), basal forebrain (ACh)', role: 'Regulates virtually all other neurotransmitter networks' }
    ],
    roles: ['Regulates mood, sleep and appetite', 'Tunes cortical glutamate output via receptors on pyramidal neurons and GABA interneurons', 'Excess or imbalance at **5HT2A** is linked to psychosis']
  },
  {
    id: 'norepinephrine', name: 'Norepinephrine', abbr: 'NE', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Its reuptake pump NET also carries dopamine; α1 and α2 receptors are important drug targets.',
    termination: ['Reuptake by the **norepinephrine transporter (NET)**, which also has high affinity for dopamine; NE can then be re-stored or destroyed', 'Destroyed by **MAO-A or MAO-B** in mitochondria of the presynaptic neuron and elsewhere', 'Destroyed by **COMT**, largely outside the presynaptic terminal', 'Packaged into vesicles by **VMAT2**'],
    clinical: ['NET inhibition: antidepressant, neuropathic pain, ADHD', 'α2 antagonism is antidepressant; α2 agonism helps ADHD; α1 antagonism helps nightmares but causes orthostatic hypotension'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit their own release, a form of volume neurotransmission.' },
      { ch: 'ch02', pages: '31', text: '**NET** carries dopamine, epinephrine and amphetamine as well as norepinephrine.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '40', text: 'Norepinephrine reuptake inhibition stimulates **all norepinephrine receptors** indirectly: antidepressant, neuropathic pain, ADHD (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '80–81', text: 'Where DATs are absent (e.g., prefrontal cortex), **NET** takes up dopamine as a “false” substrate.', sec: 's4-da-synth' },
      { ch: 'ch06', pages: '253–256', text: 'Receptors: **NET**, **VMAT2**, **α1, α2A/B/C, β1/β2/β3**. Only **α2** can be presynaptic autoreceptors (terminal and somatodendritic): the neuron’s **brake**.', sec: 's6-ne' },
      { ch: 'ch06', pages: '277–281', text: 'Boosting NE (with DA) targets residual **fatigue** and **problems concentrating** in depression.', sec: 's6-algorithm' },
      { ch: 'ch07', pages: '309', text: 'α2 antagonism “cuts the brake cable” on NE and, via heteroreceptors, 5HT release.', sec: 's7-mirtazapine' },
      { ch: 'ch08', pages: '370', text: 'Locus coeruleus overactivity drives autonomic overdrive, **nightmares, hyperarousal, flashbacks and panic**, via α1 and β1 receptors.', sec: 's8-ne' }
    ],
    synthesis: [['Tyrosine', 'Actively transported from blood into the neuron'], ['DOPA', '**Tyrosine hydroxylase (TOH)**, rate-limiting'], ['Dopamine', '**DOPA decarboxylase (DDC)**; only a precursor here'], ['Norepinephrine', '**Dopamine β-hydroxylase (DBH)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    pathways: [
      { name: 'Ascending noradrenergic', route: '**Locus coeruleus** → prefrontal cortex, basal forebrain, thalamus, hypothalamus, amygdala, hippocampus, cerebellum and more', role: 'Mood, arousal, cognition' },
      { name: 'Descending noradrenergic', route: 'Brainstem → spinal cord', role: 'Regulates **pain** pathways' }
    ],
    roles: ['Mood, arousal and cognition', 'Involved in both **reduced positive affect** and **increased negative affect** in depression', 'With ACh and histamine, a driver of cortical arousal', 'Descending modulation of pain']
  },
  {
    id: 'dopamine', name: 'Dopamine', abbr: 'DA', family: 'Monoamine', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Recaptured by DAT (scarce in prefrontal cortex), stored by VMAT2; D2 is the key target of so-called antipsychotics.',
    termination: ['Reuptake by the **dopamine transporter (DAT)**: the principal route where present (striatum); scarce in the prefrontal cortex', 'Extracellular breakdown by **COMT**: secondary in striatum, principal in prefrontal cortex', 'Intracellular breakdown of unstored dopamine by **MAO-A and MAO-B** (mitochondria of neurons and glia)', 'Uptake by **NET** on neighboring norepinephrine neurons as a “false” substrate where DATs are absent', 'Packaged into vesicles by **VMAT2**'],
    clinical: ['Because drugs act wherever relevant receptors exist, prefrontal dopamine receptors outside synapses are reachable drug targets.', 'DAT and NET blockade by stimulants (methylphenidate, amphetamine) improves ADHD, depression and wakefulness', 'D2 antagonism or partial agonism is antipsychotic and antimanic', 'VMAT2 inhibitors (tetrabenazine, deutetrabenazine, valbenazine) treat movement disorders such as tardive dyskinesia', '**Mesolimbic/mesostriatal excess** hypothetically causes positive symptoms; **mesocortical deficit**, negative, cognitive and affective symptoms (Chapter 4)', 'D2 blockade: hyperprolactinemia (tuberoinfundibular), drug-induced parkinsonism and tardive dyskinesia (nigrostriatal)'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '8', text: 'The book’s main example of **volume neurotransmission**: the **prefrontal cortex has very few dopamine transporters (DATs)**, so dopamine released at a synapse spills over to neighboring receptors (such as D1) on the same and neighboring neurons.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8', text: 'In contrast, the **striatum** has DATs in abundance, which terminate dopamine’s action at the synapse.', sec: 's1-volume' },
      { ch: 'ch01', pages: '8–9', text: 'Monoamine neurons carry **somatodendritic autoreceptors** that inhibit release from the axon terminal.' },
      { ch: 'ch02', pages: '31–32', text: '**DAT** carries norepinephrine, epinephrine and amphetamine as well as dopamine; **NET** also has high affinity for dopamine.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: 'VMATs in **dopamine neurons** are targeted by amphetamine (substrate) and by tetrabenazine, deutetrabenazine and valbenazine (inhibitors).', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '79', text: 'For over 50 years the dominant theory of psychosis: **hyperactivity at D2 receptors in the mesolimbic pathway**, supported by amphetamine psychosis and the efficacy of D2 blockers.', sec: 's4-da-synth' },
      { ch: 'ch04', pages: '81–82', text: 'Receptors fall into **D1-like** (D1, D5; excitatory, positively linked to adenylate cyclase) and **D2-like** (D2, D3, D4; inhibitory, negatively linked).', sec: 's4-da-receptors' },
      { ch: 'ch04', pages: '82–84', text: '**D2 and D3** serve as presynaptic autoreceptors (“gatekeepers”); **D3 is more sensitive**, braking release at lower concentrations.', sec: 's4-da-receptors' },
      { ch: 'ch04', pages: '84–85', text: 'In prefrontal cortex, few DATs and autoreceptors let dopamine diffuse widely to **D1** receptors (volume transmission); mesostriatal terminals have DATs and D2/D3 autoreceptors.', sec: 's4-da-receptors' },
      { ch: 'ch04', pages: '92–95', text: 'Imaging places schizophrenia’s hyperdopaminergia in the **associative striatum** (nigral input): the VTA–substantia nigra **integrative hub** is mesostriatal.', sec: 's4-hub' },
      { ch: 'ch04', pages: '110–111', text: 'NMDA hypofunction and 5HT2A excess both converge on **downstream mesostriatal dopamine hyperactivity**.', sec: 's4-glu-da' },
      { ch: 'ch05', pages: '161–170', text: 'D2 blockade in each pathway: mesolimbic → antipsychotic and **secondary negative symptoms**; mesocortical → worse negative/cognitive symptoms; tuberoinfundibular → **hyperprolactinemia**; nigrostriatal → **DIP, dystonia, akathisia, NMS, TD**.', sec: 's5-negative' },
      { ch: 'ch05', pages: '166–167', text: 'In the motor striatum dopamine and **acetylcholine** are reciprocal: dopamine at D2 suppresses ACh release from cholinergic interneurons.', sec: 's5-motor' },
      { ch: 'ch06', pages: '277–278', text: 'Diffuse dopamine dysfunction is linked mainly to **reduced positive affect**: loss of joy, interest, pleasure, energy, alertness and self-confidence.', sec: 's6-circuits' },
      { ch: 'ch07', pages: '299–301', text: 'In the PFC, DA is cleared by **NET**, so NET inhibitors raise prefrontal DA; only MAO-A + MAO-B inhibition or DA-acting drugs raise DA elsewhere in depression.', sec: 's7-snri' }
    ],
    synthesis: [['Tyrosine', 'Taken into the terminal by a **tyrosine transporter**'], ['DOPA', '**Tyrosine hydroxylase (TOH)**, the rate-limiting enzyme'], ['Dopamine', '**DOPA decarboxylase (DDC)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    pathways: [
      { name: 'Nigrostriatal', route: 'Substantia nigra → striatum', role: 'Movement via CSTC loops (direct D1 “go” and indirect D2 “stop” pathways); deficiency → parkinsonism, excess → chorea, tics, dyskinesia' },
      { name: 'Mesolimbic', route: 'VTA → nucleus accumbens (ventral striatum)', role: 'Motivation, pleasure and reward; excess → positive symptoms and drug highs; deficiency → anhedonia, apathy' },
      { name: 'Mesocortical', route: 'VTA → prefrontal cortex (DLPFC, VMPFC)', role: 'Cognition and executive function (DLPFC), emotion and affect (VMPFC); deficiency → cognitive, negative, affective symptoms' },
      { name: 'Tuberoinfundibular', route: 'Hypothalamus → anterior pituitary', role: 'Tonically inhibits prolactin release' },
      { name: 'Thalamic', route: 'Periaqueductal gray, ventral mesencephalon, hypothalamic nuclei, lateral parabrachial nucleus → thalamus', role: 'Not well known; possibly sleep and arousal' },
      { name: 'Mesostriatal (integrative hub)', route: 'VTA–substantia nigra complex → whole striatum, including the associative striatum', role: 'Newer concept: site of schizophrenia’s hyperdopaminergia' }
    ],
    roles: ['Reward and reinforcement (mesolimbic “final common pathway”)', 'Motor control: promotes movement through both direct and indirect striatal pathways', 'Prolactin inhibition', 'Cognition, executive function and affect via prefrontal cortex']
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
      { ch: 'ch02', pages: '40', text: 'Muscarinic receptors **M1, M4, M2/M3** are drug targets (Table 2-4); **acetylcholinesterase inhibition** boosts acetylcholine at all its receptors (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch03', pages: '53, 63–64', text: '**Nicotinic** receptors (α7, α4β2) are pentameric ligand-gated channels. Acetylcholine is hydrolyzed so quickly by abundant acetylcholinesterase that it rarely desensitizes them; nicotine is not, and does.', sec: 's3-states' },
      { ch: 'ch05', pages: '166–169', text: 'D2 blockade **disinhibits** striatal ACh release, contributing to DIP; anticholinergics restore the balance. Xanomeline’s M4/M1 agonism is a new antipsychotic mechanism.', sec: 's5-motor' }
    ]
  },
  {
    id: 'glutamate', name: 'Glutamate', abbr: 'Glu', family: 'Amino acid', key6: true,
    summary: 'One of the six key neurotransmitter systems targeted by psychotropic drugs. Recaptured mainly into glia by EAATs and recycled via glutamine; packaged by vGluT1–3.',
    termination: ['Uptake by **excitatory amino acid transporters (EAAT1–5)**, SLC1 family, especially **into glia**', 'In glia converted to **glutamine**, which returns to the neuron and is converted back to glutamate', 'Packaged into vesicles by **vGluT1–3** (SLC17)', 'Action ends by **EAAT removal**, not enzymatic breakdown (Chapter 4)'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch02', pages: '34–35', text: 'Glutamate transporters (EAAT1–5) are a unique **SLC1** family: no chloride cotransport, almost always potassium countertransport, perhaps trimers. **No drugs** target them, and since reducing glutamate is often the goal their future as targets is unclear.', sec: 's2-other' },
      { ch: 'ch03', pages: '55–56', text: 'Its ionotropic receptors **AMPA, kainate and NMDA** are **tetrameric** (three transmembrane regions plus a re-entrant loop per subunit). NMDA channels open with **glutamate/glycine cotransmission**.', sec: 's3-structure' },
      { ch: 'ch03', pages: '76', text: 'At the postsynaptic neuron, ligand-gated channels translate the glutamate signal into a nerve impulse and into **long-term potentiation**.', sec: 's3-together' },
      { ch: 'ch04', pages: '96–97', text: 'Recycled through the **glutamate–glutamine cycle**: EAATs into glia, glutamine synthetase, SNAT export and import, glutaminase, vGluT.', sec: 's4-glu-synth' },
      { ch: 'ch04', pages: '97–99', text: 'NMDA receptors need a **cotransmitter**: glycine or D-serine, both mainly supplied by glia.', sec: 's4-cotransmitters' },
      { ch: 'ch04', pages: '99–102', text: 'Receptors (Table 4-2): metabotropic groups I (mGluR1, 5), II (mGluR2, 3) and III (mGluR4, 6, 7, 8); ionotropic **AMPA** (GluR1–4), **kainate** (GluR5–7, KA1–2) and **NMDA** (NR1, NR2A–D).', sec: 's4-glu-receptors' },
      { ch: 'ch04', pages: '105–110', text: 'The **NMDA hypofunction** hypothesis: faulty NMDA signaling on prefrontal GABA interneurons disinhibits pyramidal neurons, leading downstream to dopamine excess (positive) and deficit (negative).', sec: 's4-nmda-hypo' },
      { ch: 'ch07', pages: '328–331', text: 'Ketamine’s rapid antidepressant effect is thought to come from a **burst of glutamate** acting at AMPA receptors; lamotrigine and riluzole may reduce glutamate release.', sec: 's7-ketamine' },
      { ch: 'ch08', pages: '372–373', text: 'Fear conditioning strengthens **glutamate** synapses in the lateral and central amygdala; α2δ ligands reduce excess glutamate release in fear and worry circuits.', sec: 's8-conditioning' }
    ],
    synthesis: [['Glutamine (glia)', 'Recaptured glutamate is converted by **glutamine synthetase**'], ['Export', 'Glutamine leaves glia on a reversed **SNAT** (or ASC-T)'], ['Neuronal uptake', 'A neuronal **SNAT** imports glutamine'], ['Glutamate', 'Mitochondrial **glutaminase**'], ['Vesicle', 'Packaged by **vGluT**']],
    pathways: [
      { name: 'Cortico-brainstem', route: 'Prefrontal pyramidal neurons → raphe, VTA/substantia nigra, locus coeruleus', role: 'Regulates monoamine release: direct innervation stimulates, indirect (via GABA interneurons) inhibits' },
      { name: 'Cortico-striatal', route: 'Prefrontal cortex → striatum (GABA neurons to globus pallidus)', role: 'Cortical input to the striatal complex' },
      { name: 'Hippocampal-accumbens', route: 'Ventral hippocampus → nucleus accumbens (GABA neurons to globus pallidus)', role: 'Specifically linked to schizophrenia' },
      { name: 'Thalamo-cortical', route: 'Thalamus → cortex', role: 'Brings sensory information to cortex' },
      { name: 'Cortico-thalamic', route: 'Prefrontal cortex → thalamus', role: 'May direct how neurons react to sensory information' },
      { name: 'Direct cortico-cortical', route: 'Pyramidal neuron → pyramidal neuron', role: 'Excitatory' },
      { name: 'Indirect cortico-cortical', route: 'Pyramidal neuron → GABA interneuron → pyramidal neuron', role: 'Inhibitory; site of the NMDA hypofunction hypothesis' }
    ],
    roles: ['The brain’s **“master switch”**: excites virtually all CNS neurons', 'Mostly used as a protein building block; transmitter glutamate comes from glutamine', 'NMDA calcium entry drives long-term potentiation, synaptic plasticity and synaptogenesis'],
    clinical: ['**NMDA hypofunction** at prefrontal GABA interneurons is a leading hypothesis of psychosis (schizophrenia, ketamine/PCP, dementia)', 'A key target of novel treatments for schizophrenia and depression']
  },
  {
    id: 'gaba', name: 'γ-Aminobutyric acid', abbr: 'GABA', family: 'Amino acid', key6: true,
    summary: 'The ubiquitous inhibitory neurotransmitter and one of the six key systems. Recaptured by GAT1–4 (GAT1 blocked by tiagabine), packaged by VIAAT; GABA-B is its G-protein-linked receptor.',
    termination: ['Reuptake by **GABA transporters GAT1–4** (SLC6); **GAT1** is a key presynaptic transporter', 'Packaged into vesicles by **VIAAT** (SLC32)', 'Converted to an inactive substance by **GABA transaminase (GABA-T)** (Chapter 6)'],
    clinical: ['Tiagabine blocks GAT1: anticonvulsant, possibly anxiety, sleep and pain', 'GABA-B agonism treats cataplexy and sleepiness in narcolepsy', 'Loss of **tonic inhibition** may underlie some depression, e.g., after the postpartum fall in neuroactive steroids', 'Insomnia as a residual depressive symptom: boost GABA (Chapter 6)', '**Anxiety**: benzodiazepines boost GABA in amygdala and CSTC circuits (Chapter 8)'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'One of the **six key neurotransmitter systems** targeted by psychotropic drugs.' },
      { ch: 'ch01', pages: '6', text: 'Valium (diazepam) and Xanax (alprazolam) were prescribed **before benzodiazepine receptors were discovered**; the brain may even make “its own Xanax.”' },
      { ch: 'ch02', pages: '34', text: 'Called the **ubiquitous inhibitory neurotransmitter**. GAT1 is selectively blocked by **tiagabine**, increasing synaptic GABA.', sec: 's2-other' },
      { ch: 'ch02', pages: '39', text: '**GABA-B** agonism: cataplexy, sleepiness in narcolepsy, possibly slow-wave sleep, chronic pain and alcohol use disorder (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch03', pages: '53, 55, 65', text: '**GABA-A** receptors are pentameric **chloride** channels. Benzodiazepines and Z drugs are PAMs at sites mediating **phasic** inhibition; neurosteroids act at benzodiazepine-insensitive sites mediating **tonic** inhibition.', sec: 's3-drugs' },
      { ch: 'ch04', pages: '105–110', text: 'Prefrontal **GABA interneurons** are central to the NMDA hypofunction hypothesis: in schizophrenia they show reduced **GAD67** and their targets show compensatory **α2 GABA-A** upregulation.', sec: 's4-nmda-hypo' },
      { ch: 'ch04', pages: '122–131', text: 'Many serotonin receptors (5HT1A, 2A, 2C, 3, 7) sit on GABA interneurons, so serotonin’s downstream effect depends on whether it excites or inhibits these cells.', sec: 's4-5ht-post' },
      { ch: 'ch06', pages: '258–259', text: 'Three receptor types: **GABA-A** and **GABA-C** (ligand-gated chloride channels) and **GABA-B** (G-protein-linked).', sec: 's6-gaba' },
      { ch: 'ch06', pages: '259–263', text: 'GABA-A subunits α1–6, β1–3, γ1–3, δ, ε, π, θ, ρ1–3. Benzodiazepine-sensitive (γ2/3 + α1–3) receptors are synaptic and **phasic**; δ-containing receptors with α4/α6 are extrasynaptic, **tonic** and bind **neuroactive steroids**.', sec: 's6-gabaa' },
      { ch: 'ch07', pages: '320–322', text: 'GABA is low in plasma, CSF and brain in depression; GABA interneurons are reduced. Neuroactive steroids boost GABA-A function for rapid antidepressant effects.', sec: 's7-neurosteroids' },
      { ch: 'ch08', pages: '366–367, 373', text: 'GABA regulates both fear and worry circuits; GABA interneurons of the **intercalated cell mass** gate fear output during **extinction**.', sec: 's8-extinction' }
    ],
    synthesis: [['Glutamate', 'The amino acid precursor'], ['GABA', '**Glutamic acid decarboxylase (GAD)**'], ['Vesicle', 'Packaged by **VIAAT**']],
    roles: ['The principal **inhibitory** neurotransmitter, reducing the activity of many neurons', '**Phasic** inhibition at synaptic benzodiazepine-sensitive GABA-A receptors', '**Tonic** inhibition at extrasynaptic δ-containing GABA-A receptors sets neuronal excitability']
  },
  {
    id: 'glycine', name: 'Glycine', abbr: 'Gly', family: 'Amino acid', key6: false,
    summary: 'An amino acid neurotransmitter recaptured by glycine transporters GlyT1 and GlyT2; no clinically used drug blocks them.',
    termination: ['Reuptake by **GlyT1** (mostly glial) and **GlyT2** (neuronal), SLC6 family'],
    facts: [
      { ch: 'ch02', pages: '31, 34', text: 'Glycine transporters are SLC6 members with structure similar to the monoamine transporters; **no drugs** in clinical practice block them, though agents were in trials for schizophrenia.', sec: 's2-other' },
      { ch: 'ch03', pages: '53, 66', text: 'Acts at pentameric **strychnine-sensitive glycine receptors** and as the **cotransmitter with glutamate** at NMDA receptors.', sec: 's3-pam' },
      { ch: 'ch04', pages: '97–99', text: 'At glutamate synapses glycine comes mostly from **glia**: imported by GlyT1 or SNAT or made from L-serine by **SHMT**, released on reversed **GlyT1**, and terminated by inward GlyT1. Glycine neurons contribute little because **GlyT2** recaptures their glycine.', sec: 's4-cotransmitters' }
    ],
    updates: [{ year: '2025', title: 'GlyT1 inhibitor fails phase III', text: 'Iclepertin, a GlyT1 inhibitor, did not meet its primary endpoints for cognitive impairment associated with schizophrenia (CONNEX program, January 2025).', source: 'Boehringer Ingelheim, January 2025' }]
  },
  {
    id: 'dserine', name: 'D-serine', abbr: 'D-Ser', family: 'Amino acid',
    summary: 'A D-amino acid that acts at the glycine site of NMDA receptors as a cotransmitter with glutamate. Made and released by glia.',
    synthesis: [['L-serine', 'Imported into glia by **L-SER-T**, or made from glycine by **SHMT**'], ['D-serine', '**D-serine racemase** (interconverts D- and L-serine)'], ['Release', 'Possibly stored in glial vesicles; released on a reversed **D-SER-T**']],
    termination: ['Reuptake into glia by the inward **D-serine transporter (D-SER-T)**', 'Destroyed by **D-amino acid oxidase (DAO)** to inactive hydroxypyruvate', 'DAO is activated by **DAOA**, a schizophrenia susceptibility gene'],
    facts: [{ ch: 'ch04', pages: '98–99', text: 'Unusual as a **D**-amino acid; it has **high affinity** for the NMDA glycine site.', sec: 's4-cotransmitters' }]
  },
  {
    id: 'histamine', name: 'Histamine', abbr: 'HA', family: 'Monoamine', key6: false,
    summary: 'An important neurotransmitter and neuromodulator outside the key six. It has no presynaptic reuptake transporter and is inactivated enzymatically; H1 and H3 receptors are drug targets.',
    termination: ['**No presynaptic transporter**: inactivation thought to be **entirely enzymatic**', 'Packaged into vesicles by **VMAT2**, like the monoamines'],
    clinical: ['H1 antagonism: therapeutic for anxiety and insomnia; side effects of sedation and weight gain', 'H3 antagonism/inverse agonism: improves daytime sleepiness'],
    facts: [
      { ch: 'ch01', pages: '5', text: 'Listed with neuropeptides and hormones as **other important neurotransmitters and neuromodulators**, mentioned in the relevant clinical chapters.' },
      { ch: 'ch02', pages: '35', text: 'Apparently has **no presynaptic transporter**, though it is packaged by **VMAT2**; inactivation is thought to be **entirely enzymatic**.', sec: 's2-missing' },
      { ch: 'ch02', pages: '40', text: '**H1** antagonism and **H3** antagonism/inverse agonism are drug actions in Table 2-4.', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '181–182', text: 'With ACh and NE, histamine drives **cortical arousal**; H1 blockade by drugs for psychosis causes sedation and weight gain.', sec: 's5-fga' }
    ]
  },
  {
    id: 'melatonin', name: 'Melatonin', abbr: 'MT', family: 'Hormone', key6: false,
    summary: 'Acts at MT1 and MT2 receptors; agonists improve insomnia and circadian rhythms.',
    clinical: ['MT1/MT2 agonism improves insomnia and circadian rhythms'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**MT1 and MT2** agonist actions improve insomnia and circadian rhythms (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch06', pages: '271–275', text: 'In depression the nighttime **melatonin peak is lost**; early-evening melatonin can help reset a **phase-delayed** clock.', sec: 's6-circadian' },
      { ch: 'ch07', pages: '306–308', text: 'Agomelatine acts as “substitute melatonin” at SCN MT1/MT2 receptors to resynchronize circadian rhythms.', sec: 's7-agomelatine' }
    ]
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
      { ch: 'ch02', pages: '48', text: 'Some neurotrophins (with insulin, IGF-1 and Wnt glycoproteins) act through **GSK-3** to promote cell death; **lithium** may inhibit GSK-3.', sec: 's2-enzymes' },
      { ch: 'ch06', pages: '266–270', text: '**BDNF** loss from stress, inflammation, early adversity, microbiome changes and poor sleep (via epigenetic silencing) may drive **neuroprogression**: lost synapses, then lost neurons. Effective antidepressants may raise BDNF via **CREB**.', sec: 's6-neuroplasticity' },
      { ch: 'ch07', pages: '329–331', text: 'Ketamine may raise **BDNF** and **VEGF** within minutes to hours, whereas monoamine drugs take weeks.', sec: 's7-ketamine' }
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
