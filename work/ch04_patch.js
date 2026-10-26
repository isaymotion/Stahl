// Chapter 4 library enrichment: neurotransmitters, targets, drugs and the first symptom-circuit maps.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch04', pages, text, sec });

  /* ---------------- neurotransmitters ---------------- */
  h.set('nts', 'dopamine', {
    synthesis: [['Tyrosine', 'Taken into the terminal by a **tyrosine transporter**'], ['DOPA', '**Tyrosine hydroxylase (TOH)**, the rate-limiting enzyme'], ['Dopamine', '**DOPA decarboxylase (DDC)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    termination: ['Reuptake by the **dopamine transporter (DAT)**: the principal route where present (striatum); scarce in the prefrontal cortex', 'Extracellular breakdown by **COMT**: secondary in striatum, principal in prefrontal cortex', 'Intracellular breakdown of unstored dopamine by **MAO-A and MAO-B** (mitochondria of neurons and glia)', 'Uptake by **NET** on neighboring norepinephrine neurons as a “false” substrate where DATs are absent', 'Packaged into vesicles by **VMAT2**'],
    pathways: [
      { name: 'Nigrostriatal', route: 'Substantia nigra → striatum', role: 'Movement via CSTC loops (direct D1 “go” and indirect D2 “stop” pathways); deficiency → parkinsonism, excess → chorea, tics, dyskinesia' },
      { name: 'Mesolimbic', route: 'VTA → nucleus accumbens (ventral striatum)', role: 'Motivation, pleasure and reward; excess → positive symptoms and drug highs; deficiency → anhedonia, apathy' },
      { name: 'Mesocortical', route: 'VTA → prefrontal cortex (DLPFC, VMPFC)', role: 'Cognition and executive function (DLPFC), emotion and affect (VMPFC); deficiency → cognitive, negative, affective symptoms' },
      { name: 'Tuberoinfundibular', route: 'Hypothalamus → anterior pituitary', role: 'Tonically inhibits prolactin release' },
      { name: 'Thalamic', route: 'Periaqueductal gray, ventral mesencephalon, hypothalamic nuclei, lateral parabrachial nucleus → thalamus', role: 'Not well known; possibly sleep and arousal' },
      { name: 'Mesostriatal (integrative hub)', route: 'VTA–substantia nigra complex → whole striatum, including the associative striatum', role: 'Newer concept: site of schizophrenia’s hyperdopaminergia' }
    ],
    roles: ['Reward and reinforcement (mesolimbic “final common pathway”)', 'Motor control: promotes movement through both direct and indirect striatal pathways', 'Prolactin inhibition', 'Cognition, executive function and affect via prefrontal cortex'],
    receptors: undefined
  });
  delete h.get('nts', 'dopamine').receptors;
  h.push('nts', 'dopamine', 'clinical', ['**Mesolimbic/mesostriatal excess** hypothetically causes positive symptoms; **mesocortical deficit**, negative, cognitive and affective symptoms (Chapter 4)', 'D2 blockade: hyperprolactinemia (tuberoinfundibular), drug-induced parkinsonism and tardive dyskinesia (nigrostriatal)']);
  h.facts('nts', 'dopamine', [
    F('79', 'For over 50 years the dominant theory of psychosis: **hyperactivity at D2 receptors in the mesolimbic pathway**, supported by amphetamine psychosis and the efficacy of D2 blockers.', 's4-da-synth'),
    F('81–82', 'Receptors fall into **D1-like** (D1, D5; excitatory, positively linked to adenylate cyclase) and **D2-like** (D2, D3, D4; inhibitory, negatively linked).', 's4-da-receptors'),
    F('82–84', '**D2 and D3** serve as presynaptic autoreceptors (“gatekeepers”); **D3 is more sensitive**, braking release at lower concentrations.', 's4-da-receptors'),
    F('84–85', 'In prefrontal cortex, few DATs and autoreceptors let dopamine diffuse widely to **D1** receptors (volume transmission); mesostriatal terminals have DATs and D2/D3 autoreceptors.', 's4-da-receptors'),
    F('92–95', 'Imaging places schizophrenia’s hyperdopaminergia in the **associative striatum** (nigral input): the VTA–substantia nigra **integrative hub** is mesostriatal.', 's4-hub'),
    F('110–111', 'NMDA hypofunction and 5HT2A excess both converge on **downstream mesostriatal dopamine hyperactivity**.', 's4-glu-da')
  ]);

  h.set('nts', 'glutamate', {
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
    roles: ['The brain’s **“master switch”**: excites virtually all CNS neurons', 'Mostly used as a protein building block; transmitter glutamate comes from glutamine', 'NMDA calcium entry drives long-term potentiation, synaptic plasticity and synaptogenesis']
  });
  h.push('nts', 'glutamate', 'termination', ['Action ends by **EAAT removal**, not enzymatic breakdown (Chapter 4)']);
  h.push('nts', 'glutamate', 'clinical', ['**NMDA hypofunction** at prefrontal GABA interneurons is a leading hypothesis of psychosis (schizophrenia, ketamine/PCP, dementia)', 'A key target of novel treatments for schizophrenia and depression']);
  h.facts('nts', 'glutamate', [
    F('96–97', 'Recycled through the **glutamate–glutamine cycle**: EAATs into glia, glutamine synthetase, SNAT export and import, glutaminase, vGluT.', 's4-glu-synth'),
    F('97–99', 'NMDA receptors need a **cotransmitter**: glycine or D-serine, both mainly supplied by glia.', 's4-cotransmitters'),
    F('99–102', 'Receptors (Table 4-2): metabotropic groups I (mGluR1, 5), II (mGluR2, 3) and III (mGluR4, 6, 7, 8); ionotropic **AMPA** (GluR1–4), **kainate** (GluR5–7, KA1–2) and **NMDA** (NR1, NR2A–D).', 's4-glu-receptors'),
    F('105–110', 'The **NMDA hypofunction** hypothesis: faulty NMDA signaling on prefrontal GABA interneurons disinhibits pyramidal neurons, leading downstream to dopamine excess (positive) and deficit (negative).', 's4-nmda-hypo')
  ]);

  h.set('nts', 'serotonin', {
    synthesis: [['Tryptophan', 'Transported from plasma into the brain'], ['5HTP', '**Tryptophan hydroxylase (TRY-OH)**'], ['5HT', '**Aromatic amino acid decarboxylase (AAADC)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    pathways: [
      { name: 'Raphe projections', route: 'Dorsal and median raphe → prefrontal cortex and widespread cortical/subcortical areas', role: 'Mood, sleep, appetite; tuning of glutamate output' },
      { name: 'To other transmitter centers', route: 'Raphe → locus coeruleus (NE), VTA (DA), tuberomammillary nucleus (HA), basal forebrain (ACh)', role: 'Regulates virtually all other neurotransmitter networks' }
    ],
    roles: ['Regulates mood, sleep and appetite', 'Tunes cortical glutamate output via receptors on pyramidal neurons and GABA interneurons', 'Excess or imbalance at **5HT2A** is linked to psychosis']
  });
  h.push('nts', 'serotonin', 'termination', ['Destroyed by **MAO**; serotonergic **MAO-B** has low affinity, so only at high intracellular levels (Chapter 4)', '**All** 5HT neurons are thought to express SERT']);
  h.push('nts', 'serotonin', 'clinical', ['**5HT2A** excess or imbalance: hallucinogen psychosis, Parkinson’s disease psychosis, dementia-related psychosis; treated with 5HT2A antagonists', 'SERT polymorphisms may predict response and side effects with SERT blockers']);
  h.facts('nts', 'serotonin', [
    F('115–119', 'Autoreceptors: somatodendritic **5HT1A** (negative feedback) and **5HT2B** (feed-forward), terminal **5HT1B/D**. Unlike dopamine and NE neurons, the two ends carry different autoreceptors.', 's4-5ht-pre'),
    F('122–131', 'Postsynaptic receptors on GABA interneurons flip the sign downstream: 5HT1A **raises** NE, DA and ACh; 5HT2C, 5HT3 and 5HT7 **lower** downstream release.', 's4-5ht-post'),
    F('131–141', 'The **serotonin hyperfunction** hypothesis: 5HT2A excess or imbalance on cortical glutamate neurons drives VTA dopamine (delusions, auditory hallucinations) and visual cortex (visual hallucinations).', 's4-5ht-hyper')
  ]);

  h.facts('nts', 'glycine', [
    F('97–99', 'At glutamate synapses glycine comes mostly from **glia**: imported by GlyT1 or SNAT or made from L-serine by **SHMT**, released on reversed **GlyT1**, and terminated by inward GlyT1. Glycine neurons contribute little because **GlyT2** recaptures their glycine.', 's4-cotransmitters')
  ]);
  h.facts('nts', 'gaba', [
    F('105–110', 'Prefrontal **GABA interneurons** are central to the NMDA hypofunction hypothesis: in schizophrenia they show reduced **GAD67** and their targets show compensatory **α2 GABA-A** upregulation.', 's4-nmda-hypo'),
    F('122–131', 'Many serotonin receptors (5HT1A, 2A, 2C, 3, 7) sit on GABA interneurons, so serotonin’s downstream effect depends on whether it excites or inhibits these cells.', 's4-5ht-post')
  ]);
  h.facts('nts', 'norepinephrine', [F('80–81', 'Where DATs are absent (e.g., prefrontal cortex), **NET** takes up dopamine as a “false” substrate.', 's4-da-synth')]);
  h.upsert('nts', {
    id: 'dserine', name: 'D-serine', abbr: 'D-Ser', family: 'Amino acid',
    summary: 'A D-amino acid that acts at the glycine site of NMDA receptors as a cotransmitter with glutamate. Made and released by glia.',
    synthesis: [['L-serine', 'Imported into glia by **L-SER-T**, or made from glycine by **SHMT**'], ['D-serine', '**D-serine racemase** (interconverts D- and L-serine)'], ['Release', 'Possibly stored in glial vesicles; released on a reversed **D-SER-T**']],
    termination: ['Reuptake into glia by the inward **D-serine transporter (D-SER-T)**', 'Destroyed by **D-amino acid oxidase (DAO)** to inactive hydroxypyruvate', 'DAO is activated by **DAOA**, a schizophrenia susceptibility gene'],
    facts: [F('98–99', 'Unusual as a **D**-amino acid; it has **high affinity** for the NMDA glycine site.', 's4-cotransmitters')]
  }, { after: 'glycine' });

  /* ---------------- targets ---------------- */
  h.facts('targets', 'd1', [F('81–85', '**D1-like** (with D5): excitatory, positively linked to adenylate cyclase. The **least sensitive** dopamine receptor and the predominant postsynaptic one in **prefrontal cortex**; populates the striatal **direct (“go”)** pathway.', 's4-da-receptors')]);
  h.set('targets', 'd1', { summary: 'An excitatory D1-like receptor (positively linked to adenylate cyclase). Predominant in prefrontal cortex, where it is reached by volume transmission, and on the striatal direct (“go”) pathway.', location: 'Postsynaptic; predominant in **prefrontal cortex**; striatal **direct pathway** neurons' });
  h.set('targets', 'd2', {
    summary: 'The key target of so-called antipsychotics. An inhibitory D2-like receptor, postsynaptic in the striatum (indirect “stop” pathway) and a presynaptic autoreceptor on nigrostriatal neurons. Mesolimbic D2 hyperactivity is the classic hypothesis of positive symptoms.',
    location: 'Postsynaptic in striatum (indirect pathway) and pituitary; presynaptic **autoreceptors** (terminal and somatodendritic)',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase'
  });
  h.push('targets', 'd2', 'block', ['Mesolimbic blockade: reduces **positive symptoms**', 'Tuberoinfundibular blockade: **hyperprolactinemia** (galactorrhea, gynecomastia, amenorrhea, sexual dysfunction)', 'Nigrostriatal blockade: **drug-induced parkinsonism**, possibly akathisia and dystonia; chronically **tardive dyskinesia**', 'Worsens movement in **Parkinson’s disease**; increases stroke and death risk in **dementia**']);
  h.push('targets', 'd2', 'stim', ['Indirect stimulation by **amphetamine/cocaine** (dopamine excess): paranoid psychosis with auditory hallucinations', 'Chronic stimulation by **levodopa**: levodopa-induced dyskinesias']);
  h.facts('targets', 'd2', [
    F('79', 'Classic hypothesis: **hyperactivity at mesolimbic D2** receptors causes positive symptoms; D2 blockers have been the mainstay for over 50 years.', 's4-da-synth'),
    F('82–84', 'As an **autoreceptor**, D2 is **less sensitive** than D3, so synapses with D2 autoreceptors accumulate more dopamine and have a wider diffusion radius.', 's4-da-receptors'),
    F('86–89', 'Populates the striatal **indirect (“stop”)** pathway; dopamine at D2 inhibits it (“don’t stop”).', 's4-da-pathways')
  ]);
  h.upsert('targets', {
    id: 'd3', name: 'Dopamine D3 receptor', short: 'D3', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An inhibitory D2-like receptor. As a presynaptic autoreceptor it is more sensitive to dopamine than D2, braking release at lower concentrations; it regulates mesolimbic dopamine neurons.',
    location: 'Presynaptic **autoreceptors** on mesolimbic neurons (VTA cell bodies and striatal terminals); postsynaptic in striatum',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase',
    facts: [F('81–85', '**More sensitive** to dopamine than D2, so a lower synaptic concentration turns off further release; mesolimbic neurons carry D3 autoreceptors.', 's4-da-receptors')]
  }, { after: 'd2' });
  h.upsert('targets', {
    id: 'd4', name: 'Dopamine D4 receptor', short: 'D4', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An inhibitory D2-like receptor (negatively linked to adenylate cyclase).',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase',
    facts: [F('81', 'One of the three **D2-like** receptors (D2, D3, D4).', 's4-da-receptors')]
  }, { after: 'd3' });
  h.upsert('targets', {
    id: 'd5', name: 'Dopamine D5 receptor', short: 'D5', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An excitatory D1-like receptor (positively linked to adenylate cyclase).',
    coupling: 'D1-like: **excitatory**, positively linked to adenylate cyclase',
    facts: [F('81', 'One of the two **D1-like** receptors (D1, D5).', 's4-da-receptors')]
  }, { after: 'd4' });
  h.facts('targets', '5ht1a', [
    F('115–119', 'As a **somatodendritic autoreceptor** in the raphe it provides negative feedback; its **downregulation/desensitization** is thought critical to reuptake-blocker antidepressant action.', 's4-5ht-pre'),
    F('122–125', 'Always inhibitory, but often on **prefrontal GABA interneurons**, so stimulation **increases NE, DA and ACh** release. Many drugs for psychosis, mood and anxiety are 5HT1A agonists or partial agonists.', 's4-5ht-post')
  ]);
  h.push('targets', '5ht1a', 'stim', ['On prefrontal GABA interneurons: **disinhibits NE, DA and ACh** release (Chapter 4)']);
  h.facts('targets', '5ht1b1d', [
    F('117–119', '**5HT1B/D** is the serotonin neuron’s **terminal autoreceptor**: synaptic 5HT shuts off further release.', 's4-5ht-pre'),
    F('125', '5HT1B **heteroreceptors** on NE, DA, histamine and ACh terminals **inhibit** their release; a few 5HT1B antagonists that may boost these transmitters treat depression.', 's4-5ht-post')
  ]);
  h.push('targets', '5ht1b1d', 'stim', ['Terminal autoreceptor: **shuts off 5HT release**; heteroreceptors: **less NE, DA, HA and ACh** release (Chapter 4)']);
  h.facts('targets', '5ht2a', [
    F('125–126', 'Always excitatory: on **apical dendrites of pyramidal neurons** it raises glutamate output; on **GABA interneurons** it lowers it. Most hallucinogens are 5HT2A agonists.', 's4-5ht-post'),
    F('131–141', 'Central to the **serotonin hyperfunction** hypothesis: overstimulated by LSD, psilocybin and mescaline; **upregulated** in Parkinson’s disease psychosis; **unopposed** after loss of GABA inhibition in dementia. 5HT2A antagonists treat PDP and dementia-related psychosis.', 's4-5ht-hyper')
  ]);
  h.push('targets', '5ht2a', 'stim', ['Agonism by **LSD, psilocybin, mescaline**: psychosis, dissociation, **visual hallucinations** (Chapter 4)']);
  h.facts('targets', '5ht2c', [F('126–127', 'Excitatory, postsynaptic and mostly on **GABA interneurons**, so serotonin here **inhibits NE and DA** release in prefrontal cortex. Agonists treat **obesity**; antagonists treat psychosis and mood disorders.', 's4-5ht-post')]);
  h.push('targets', '5ht2c', 'stim', ['Agonism: treats **obesity**; on GABA interneurons, **reduces prefrontal NE and DA** (Chapter 4)']);
  h.push('targets', '5ht2c', 'block', ['Antagonism: treats **psychosis and mood disorders** (Chapter 4)']);
  h.upsert('targets', {
    id: '5ht2b', name: 'Serotonin 5HT2B receptor', short: '5HT2B', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A recently recognized somatodendritic autoreceptor on serotonin neurons that acts as a feed-forward accelerator, opposing 5HT1A.',
    location: 'Somatodendritic (raphe serotonin neurons); can also be postsynaptic',
    stim: ['Increases serotonin neuron **firing** and **5HT release** (feed-forward)'],
    facts: [F('117–119', 'Activates the serotonin neuron, increasing impulse flow and release: **feed-forward**, whereas 5HT1A is negative feedback. Which raphe neurons carry which receptor is not yet clear.', 's4-5ht-pre')]
  }, { after: '5ht2a' });
  h.upsert('targets', {
    id: '5ht4', name: 'Serotonin 5HT4 receptor', short: '5HT4', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A postsynaptic serotonin receptor that is excitatory on cortical glutamate pyramidal neurons.',
    facts: [F('120–121', 'One of the receptors through which serotonin **excites** glutamate pyramidal neurons (with 5HT2A, 2C, 6 and 7).', 's4-5ht-network')]
  }, { after: '5ht2c' });
  h.upsert('targets', {
    id: '5ht5', name: 'Serotonin 5HT5 receptor', short: '5HT5', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A postsynaptic serotonin receptor that is inhibitory on cortical glutamate pyramidal neurons.',
    facts: [F('120–121', 'One of the receptors through which serotonin **inhibits** glutamate pyramidal neurons (with 5HT1A and possibly postsynaptic 5HT1B).', 's4-5ht-network')]
  }, { after: '5ht4' });
  h.facts('targets', '5ht6', [F('130', 'Postsynaptic; may be a key regulator of **ACh release** and cognition. Blockade improves learning and memory in animals, so **5HT6 antagonists** are proposed **pro-cognitive** agents for schizophrenia and Alzheimer disease.', 's4-5ht-post')]);
  h.set('targets', '5ht6', { summary: 'A postsynaptic serotonin receptor that may regulate acetylcholine release and cognition; antagonists are proposed as pro-cognitive agents.', block: ['Antagonism: proposed **pro-cognitive** action (animals: improved learning and memory) (Chapter 4)'] });
  h.facts('targets', '5ht7', [F('130–131', 'Excitatory and frequently on **GABA interneurons**: in cortex it **inhibits glutamate** release; in the raphe, a recurrent collateral acting at 5HT7 on GABA neurons **inhibits further 5HT release**. 5HT7 antagonists treat psychosis and mood.', 's4-5ht-post')]);
  h.push('targets', '5ht7', 'stim', ['On cortical GABA interneurons: **less glutamate** release; in raphe: **less 5HT** release (Chapter 4)']);
  h.push('targets', '5ht7', 'block', ['Antagonism: used for **psychosis and mood** (Chapter 4)']);
  h.facts('targets', '5ht3', [F('127–130', 'In the **chemoreceptor trigger zone** (outside the blood–brain barrier) it mediates nausea and vomiting; in cortex it sits on **non-parvalbumin GABA interneurons**, so serotonin here **inhibits ACh and NE** release and glutamate output. Antagonists should enhance ACh and NE release.', 's4-5ht-post')]);
  h.push('targets', '5ht3', 'stim', ['Nausea and vomiting (CTZ); in cortex **less ACh, NE and glutamate** release (Chapter 4)']);
  h.facts('targets', 'nmda', [
    F('100–101', 'A **coincidence detector**: opens only with glutamate bound, **glycine or D-serine** bound, and depolarization removing the **Mg²⁺** plug (Mg²⁺ acts as a NAM). Calcium entry drives **long-term potentiation**.', 's4-glu-receptors'),
    F('105–110', '**Hypofunction** at prefrontal **GABA interneurons** (from neurodevelopment, ketamine/PCP or neurodegeneration) is a leading hypothesis of psychosis.', 's4-nmda-hypo')
  ]);
  h.push('targets', 'nmda', 'block', ['Blockade on prefrontal GABA interneurons (ketamine, PCP): **psychosis** with visual hallucinations and paranoid delusions via downstream dopamine excess (Chapter 4)']);
  h.facts('targets', 'ampa', [F('100–101, 151–154', 'Mediates **fast excitation** by admitting sodium; its depolarization helps unplug NMDA channels. LTP increases synaptic AMPA receptors, “strengthening” synapses; weak synapses with few AMPA receptors may be eliminated.', 's4-glu-receptors')]);
  h.facts('targets', 'kainate', [F('100–101', 'With AMPA, mediates **fast excitatory** neurotransmission via sodium entry.', 's4-glu-receptors')]);
  h.facts('targets', 'gabaa', [F('105–108', '**α2-subunit** GABA-A receptors on the pyramidal neuron’s **axon initial segment** receive interneuron GABA; they are compensatorily **increased** in schizophrenia.', 's4-nmda-hypo')]);
  h.facts('targets', 'glyt', [F('97–99', '**GlyT2** recaptures glycine into glycine neurons; glial **GlyT1** releases glycine (reversed) and is the **main terminator** of synaptic glycine at NMDA synapses (inward).', 's4-cotransmitters')]);
  h.facts('targets', 'eaat', [F('96–97', 'Terminates glutamate’s action (there is **no enzymatic breakdown**); glial EAATs matter most for recycling.', 's4-glu-synth')]);
  h.facts('targets', 'vglut', [F('97', 'Packages regenerated glutamate into vesicles at the end of the glutamate–glutamine cycle.', 's4-glu-synth')]);
  h.facts('targets', 'dat', [F('80–81', 'The **principal** route of dopamine inactivation where present (striatum), with COMT secondary. Some dopamine neurons lack DAT, unlike serotonin neurons, which are all thought to have SERT.', 's4-da-synth')]);
  h.facts('targets', 'net', [F('80–81', 'Takes up dopamine that diffuses from DAT-poor synapses (e.g., prefrontal cortex) as a **“false” substrate**.', 's4-da-synth')]);
  h.facts('targets', 'sert', [F('114–115', 'All 5HT neurons are thought to contain SERT; functional **polymorphisms** of its gene may predict response and side effects with SERT blockers.', 's4-5ht-synth')]);
  h.facts('targets', 'vmat2', [F('79–80, 114', 'Packages newly made **dopamine** and **serotonin** into vesicles.', 's4-da-synth')]);
  h.facts('targets', 'mao', [F('80, 114', '**MAO-A and MAO-B** destroy unstored dopamine; serotonergic **MAO-B** has low affinity for 5HT and degrades it only at high intracellular levels.', 's4-5ht-synth')]);

  const mglu = (id, name, short, subs, summary, extra) => Object.assign({ id, name, short, family: 'G-protein-linked receptor', nt: 'glutamate', summary, facts: [F('99–102', subs, 's4-glu-receptors')] }, extra || {});
  h.upsert('targets', mglu('mglur-g1', 'Group I metabotropic glutamate receptors (mGluR1, mGluR5)', 'mGluR I', 'Group I (mGluR1, 5) are mainly **postsynaptic**, hypothetically strengthening ionotropic glutamate responses.', 'G-protein-linked glutamate receptors located mainly postsynaptically, where they hypothetically facilitate responses mediated by ionotropic glutamate receptors.', { location: 'Mainly **postsynaptic**' }), { after: 'm2m3' });
  h.upsert('targets', mglu('mglur-g2', 'Group II metabotropic glutamate receptors (mGluR2, mGluR3)', 'mGluR II', 'Group II (mGluR2, 3) can be **presynaptic autoreceptors** that block glutamate release; agonists might reduce release. **GRM3** (mGluR3) is a schizophrenia risk gene explored as a drug target.', 'G-protein-linked glutamate receptors that can act as presynaptic autoreceptors to reduce glutamate release.', { location: '**Presynaptic** autoreceptors (also elsewhere)', stim: ['Agonism at presynaptic autoreceptors: **reduces glutamate release**'] }), { after: 'mglur-g1' });
  h.upsert('targets', mglu('mglur-g3', 'Group III metabotropic glutamate receptors (mGluR4, 6, 7, 8)', 'mGluR III', 'Group III (mGluR4, 6, 7, 8) can also act as **presynaptic autoreceptors** reducing glutamate release.', 'G-protein-linked glutamate receptors that can act as presynaptic autoreceptors to reduce glutamate release.', { location: '**Presynaptic** autoreceptors', stim: ['Agonism at presynaptic autoreceptors: **reduces glutamate release**'] }), { after: 'mglur-g2' });

  h.upsert('targets', {
    id: 'snat', name: 'Specific neutral amino acid transporters (SNAT)', short: 'SNAT', family: 'Transporter', nt: 'glutamate',
    summary: 'Transporters that carry glutamine out of glia (reversed) and into glutamate neurons, completing the glutamate–glutamine cycle; glial SNATs also import glycine.',
    location: 'Glia (export of glutamine by reverse transport; glycine import) and glutamate neurons (glutamine import)',
    facts: [F('96–98', 'Glial SNATs run in **reverse** to release glutamine, which a neuronal SNAT takes up; a glial **ASC-T** may also export glutamine.', 's4-glu-synth')]
  }, { after: 'eaat' });
  h.upsert('targets', {
    id: 'dsert', name: 'D-serine transporter (D-SER-T)', short: 'D-SER-T', family: 'Transporter', nt: 'dserine',
    summary: 'The glial transporter that releases D-serine into glutamate synapses (reversed) and takes it back up (inward).',
    location: 'Glia',
    facts: [F('98–99', 'Releases D-serine by reverse transport and terminates its action by reuptake, along with **DAO**.', 's4-cotransmitters')]
  }, { after: 'snat' });

  const enz = (id, name, short, nt, summary, pages, text, sec, extra) => Object.assign({ id, name, short, family: 'Enzyme', nt, summary, facts: [F(pages, text, sec)] }, extra || {});
  h.upsert('targets', enz('toh', 'Tyrosine hydroxylase (TOH)', 'TOH', 'dopamine', 'The rate-limiting enzyme of dopamine synthesis, converting tyrosine to DOPA.', '79–80', 'Converts tyrosine to **DOPA**: the **rate-limiting** step in dopamine synthesis.', 's4-da-synth'), { after: 'mao' });
  h.upsert('targets', enz('ddc', 'DOPA decarboxylase / aromatic amino acid decarboxylase (DDC, AAADC)', 'DDC/AAADC', null, 'Converts DOPA to dopamine and 5-hydroxytryptophan to serotonin.', '79–80, 114', 'Called **DDC** in dopamine synthesis (DOPA → dopamine) and **AAADC** in serotonin synthesis (5HTP → 5HT).', 's4-5ht-synth', { ntLabel: 'Dopamine, serotonin' }), { after: 'toh' });
  delete h.get('targets', 'ddc').nt;
  h.upsert('targets', enz('comt', 'Catechol-O-methyltransferase (COMT)', 'COMT', 'dopamine', 'An extracellular enzyme that breaks down dopamine: secondary to DAT in striatum, the principal route in prefrontal cortex.', '80–81', 'Secondary inactivation where DATs exist; the **principal** route of dopamine inactivation in **prefrontal cortex**, where DATs are sparse.', 's4-da-synth'), { after: 'ddc' });
  h.upsert('targets', enz('tph', 'Tryptophan hydroxylase (TRY-OH)', 'TRY-OH', 'serotonin', 'The first enzyme of serotonin synthesis, converting tryptophan to 5-hydroxytryptophan.', '114', 'Converts **tryptophan** to **5HTP**, which AAADC converts to serotonin.', 's4-5ht-synth'), { after: 'comt' });
  h.upsert('targets', enz('gad', 'Glutamic acid decarboxylase (GAD67)', 'GAD67', 'gaba', 'The enzyme that makes GABA; reduced in prefrontal GABA interneurons in schizophrenia.', '105–108', 'Decreased **GAD67** activity in schizophrenia GABA interneurons, with compensatory increases in postsynaptic α2 GABA-A receptors.', 's4-nmda-hypo'), { after: 'tph' });
  h.upsert('targets', enz('gs', 'Glutamine synthetase', 'Gln synthetase', 'glutamate', 'The glial enzyme that converts recaptured glutamate into glutamine.', '96', 'Converts glutamate to **glutamine** in glia, perhaps keeping it in the neurotransmitter pool rather than the protein pool.', 's4-glu-synth'), { after: 'gad' });
  h.upsert('targets', enz('gls', 'Glutaminase', 'Glutaminase', 'glutamate', 'A mitochondrial enzyme in glutamate neurons that converts glutamine back into glutamate.', '97', 'Regenerates **glutamate** from glutamine in neuronal mitochondria before vGluT packages it.', 's4-glu-synth'), { after: 'gs' });
  h.upsert('targets', enz('shmt', 'Serine hydroxymethyl-transferase (SHMT)', 'SHMT', 'glycine', 'A glial enzyme that interconverts L-serine and glycine, supplying NMDA cotransmitters.', '98–99', 'Makes **glycine** from L-serine (and the reverse), feeding both glycine and D-serine production.', 's4-cotransmitters'), { after: 'gls' });
  h.upsert('targets', enz('srr', 'Serine racemase', 'Serine racemase', 'dserine', 'The glial enzyme that converts L-serine into D-serine.', '98–99', 'Interconverts L- and **D-serine**, producing the NMDA cotransmitter.', 's4-cotransmitters'), { after: 'shmt' });
  h.upsert('targets', enz('dao', 'D-amino acid oxidase (DAO)', 'DAO', 'dserine', 'Destroys D-serine by converting it to hydroxypyruvate; activated by DAOA, a schizophrenia susceptibility gene.', '98–99, 152', 'Converts D-serine to inactive **hydroxypyruvate**; its activator **DAOA** is among the neurodevelopmental susceptibility genes.', 's4-cotransmitters'), { after: 'srr' });

  /* ---------------- drugs ---------------- */
  h.facts('drugs', 'amphetamine', [F('79', 'Dopamine release by amphetamine causes a **paranoid psychosis** much like schizophrenia: a cornerstone of the dopamine hypothesis. Table 4-1 lists psychostimulants as **D2 agonist** models with auditory hallucinations, paranoid delusions and no insight.', 's4-three')]);
  h.chapter('amphetamine', 'ch04', '78–79');
  h.facts('drugs', 'cocaine', [F('78, 90', 'A psychostimulant model of psychosis (Table 4-1: auditory hallucinations, paranoid delusions, no insight) that causes mesolimbic dopamine hyperactivity **directly**.', 's4-mesolimbic')]);
  h.chapter('cocaine', 'ch04', '78, 90');
  h.facts('drugs', 'ketamine', [F('78, 105–110', 'A model of NMDA-hypofunction psychosis (Table 4-1: **visual** hallucinations, paranoid delusions, no insight). Blocking NMDA receptors on prefrontal GABA interneurons is **acute and reversible**, unlike the neurodevelopmental defect of schizophrenia.', 's4-nmda-hypo')]);
  h.push('drugs', 'ketamine', 'sideEffects', [{ e: 'Psychosis (visual hallucinations, paranoia)', via: 'NMDA blockade on prefrontal GABA interneurons → glutamate and dopamine excess' }]);
  h.chapter('ketamine', 'ch04', '78, 105–110');
  h.facts('drugs', 'pcp', [F('78, 105–110', 'Causes a psychosis sharing features with schizophrenia by blocking NMDA receptors at the **PCP site** on prefrontal GABA interneurons (Table 4-1: visual hallucinations, paranoid delusions, no insight).', 's4-nmda-hypo')]);
  h.push('drugs', 'pcp', 'sideEffects', [{ e: 'Psychosis', via: 'NMDA blockade on prefrontal GABA interneurons' }]);
  h.chapter('pcp', 'ch04', '78, 105–110');

  h.upsert('drugs', {
    id: 'methamphetamine', name: 'Methamphetamine', group: 'Drug of abuse', cls: 'Stimulant drug of abuse',
    short: 'Psychostimulant that causes mesolimbic dopamine hyperactivity directly.',
    mechanism: 'A psychostimulant whose mesolimbic dopamine hyperactivity is a **direct** pharmacological effect; its abuse is covered in Chapter 13.',
    nts: ['dopamine'],
    sideEffects: [{ e: 'Paranoid psychosis', via: 'Mesolimbic dopamine excess' }],
    chapters: [{ ch: 'ch04', pages: '90' }],
    facts: [F('90', 'With cocaine, the book’s example of a drug that produces mesolimbic hyperdopaminergia **directly**, unlike the indirect mechanisms of schizophrenia and other psychoses.', 's4-mesolimbic')]
  }, { after: 'cocaine' });
  h.upsert('drugs', {
    id: 'levodopa', name: 'Levodopa', aka: ['L-DOPA'], group: 'Parkinson’s disease treatment', cls: 'Dopamine precursor',
    short: 'Dopamine precursor for Parkinson’s disease; chronic use causes dyskinesias.',
    mechanism: 'A dopamine precursor used to treat **Parkinson’s disease**. Chronic stimulation of nigrostriatal **D2** receptors is thought to cause **levodopa-induced dyskinesias (LID)**.',
    nts: ['dopamine'],
    targets: [{ t: 'd2', action: 'agonist', note: 'Indirect, via dopamine formed from levodopa' }],
    uses: ['**Parkinson’s disease**'],
    sideEffects: [{ e: 'Levodopa-induced dyskinesias', via: 'Chronic nigrostriatal D2 stimulation' }],
    chapters: [{ ch: 'ch04', pages: '88–89' }],
    facts: [F('88–89', 'Chronic D2 stimulation by levodopa produces abnormal hyperkinetic movements (**LID**); chronic D2 **blockade** produces tardive dyskinesia.', 's4-da-pathways')]
  }, { after: 'methamphetamine' });
  const psychedelic = (id, name, aka, pages, extra) => Object.assign({
    id, name, aka, group: 'Hallucinogen', cls: 'Psychedelic hallucinogen',
    nbn: 'Serotonin 5HT2A receptor agonist',
    short: '5HT2A agonist hallucinogen; model of serotonin-driven psychosis.',
    mechanism: 'A powerful **5HT2A agonist** that overstimulates prefrontal and visual cortex 5HT2A receptors on glutamate pyramidal neurons, causing psychosis, dissociative experiences and especially **visual hallucinations**. These effects are **blocked by 5HT2A antagonists**. Drugs of abuse are covered in Chapter 13.',
    nts: ['serotonin'],
    targets: [{ t: '5ht2a', action: 'agonist' }],
    sideEffects: [{ e: 'Visual hallucinations', via: '5HT2A agonism in visual cortex' }, { e: 'Psychosis, delusions', via: '5HT2A-driven glutamate output to VTA → dopamine excess' }],
    chapters: [{ ch: 'ch04', pages }]
  }, extra);
  h.upsert('drugs', psychedelic('lsd', 'LSD (lysergic acid diethylamide)', ['lysergic acid diethylamide'], '78, 111, 131–133', {
    targets: [{ t: '5ht2a', action: 'agonist' }, { t: '5ht2c', action: 'agonist', note: 'To a lesser extent (Table 4-1)' }],
    facts: [F('78', 'Table 4-1 psychedelic model: **5HT2A agonist** (and to a lesser extent 5HT2C), visual hallucinations, **mystical** delusions, **insight preserved**.', 's4-three'), F('131–133', 'Hallucinogen psychosis is blocked by **5HT2A antagonists**, showing that it arises from 5HT2A stimulation.', 's4-5ht-hyper')]
  }), { after: 'pcp' });
  h.upsert('drugs', psychedelic('psilocybin', 'Psilocybin', undefined, '78, 111, 131–133', {
    facts: [F('78, 131–133', 'Listed with LSD as a psychedelic model of psychosis (Table 4-1) and as a 5HT2A agonist whose effects are blocked by 5HT2A antagonists.', 's4-5ht-hyper')]
  }), { after: 'lsd' });
  delete h.get('drugs', 'psilocybin').aka;
  h.upsert('drugs', psychedelic('mescaline', 'Mescaline', undefined, '111, 131–133', {
    facts: [F('111, 131–133', 'One of the three hallucinogens named as powerful **5HT2A agonists** that induce psychosis and visual hallucinations.', 's4-5ht-hyper')]
  }), { after: 'psilocybin' });
  delete h.get('drugs', 'mescaline').aka;
  h.upsert('drugs', {
    id: 'cannabis', name: 'Cannabis', aka: ['marijuana'], group: 'Drug of abuse', cls: 'Cannabinoid drug of abuse',
    short: 'An environmental risk factor for psychosis, especially high-potency forms.',
    mechanism: 'Acts on the endocannabinoid system (Chapter 13). In Chapter 4 it appears as an **environmental stressor** that can unmask schizophrenia in people with genetic risk.',
    nts: ['endocannabinoids'],
    targets: [{ t: 'cb1', action: 'agonist', note: 'Pharmacology covered in Chapter 13' }],
    sideEffects: [{ e: 'Increased risk of psychosis', via: 'Environmental stressor acting on genetic risk' }],
    chapters: [{ ch: 'ch04', pages: '150–151' }],
    facts: [F('150–151', 'Psychosis rates track cannabis use across European cities. Without **high-potency cannabis**, an estimated **12%** of first-episode psychosis across Europe would be prevented (**32%** in London, **50%** in Amsterdam).', 's4-cause')]
  }, { after: 'mescaline' });
  h.upsert('drugs', {
    id: 'clozapine', name: 'Clozapine', group: 'Drug for psychosis', cls: 'Atypical antipsychotic',
    short: 'Drug for psychosis that may help psychotic or impulsive violence.',
    mechanism: 'A drug for psychosis whose full receptor profile is covered in Chapter 5.',
    nts: ['dopamine', 'serotonin'],
    uses: ['Schizophrenia (Chapter 5)', 'May be useful for **psychotic or impulsive violence** in psychotic disorders'],
    chapters: [{ ch: 'ch04', pages: '147' }],
    facts: [F('147', 'With high doses of standard drugs for schizophrenia, may help **psychotic or impulsive violence**; behavioral measures help impulsive violence and organized violence may need confinement.', 's4-aggression')]
  }, { after: 'vortioxetine' });
  h.upsert('drugs', {
    id: 'pimavanserin', name: 'Pimavanserin', group: 'Drug for psychosis', cls: 'Selective 5HT2A antagonist/inverse agonist',
    nbn: 'Serotonin 5HT2A receptor antagonist (inverse agonist)',
    short: 'Selective 5HT2A antagonist for Parkinson’s disease psychosis.',
    mechanism: 'Chapter 4 describes, without naming a drug, how **selective 5HT2A antagonism** treats Parkinson’s disease psychosis (blocking overstimulated, upregulated 5HT2A receptors) and dementia-related psychosis (rebalancing surviving glutamate neurons that lost GABA inhibition). Pimavanserin is the selective agent detailed in Chapter 5.',
    nts: ['serotonin'],
    targets: [{ t: '5ht2a', action: 'antagonist', note: 'Selective; inverse agonist (Chapter 5)' }],
    uses: ['**Parkinson’s disease psychosis**', 'Studied for dementia-related psychosis (see update)'],
    chapters: [{ ch: 'ch04', pages: '131–141, 157' }],
    facts: [F('131–141', 'The 5HT2A mechanism avoids the D2 blockade that **worsens movement** in Parkinson’s disease and raises **stroke and death** risk in dementia.', 's4-5ht-hyper')],
    updates: [{ year: '2022', title: 'Not approved for dementia-related psychosis', text: 'The FDA issued complete response letters for dementia-related psychosis (April 2021) and for hallucinations and delusions of Alzheimer disease psychosis (August 2022, after a 9–3 advisory committee vote against efficacy). Its US approval remains for Parkinson’s disease psychosis.', source: 'FDA actions reported April 2021 and August 4, 2022' }]
  }, { after: 'clozapine' });
  h.upsert('drugs', {
    id: 'brexpiprazole', name: 'Brexpiprazole', brand: 'Rexulti', group: 'Drug for psychosis', cls: 'Atypical antipsychotic (D2 partial agonist)',
    short: 'Drug for psychosis; later approved for Alzheimer agitation.',
    mechanism: 'Receptor profile covered in Chapter 5. Listed here for its post-publication approval in dementia-related agitation, which Chapter 4 distinguishes from dementia-related psychosis.',
    nts: ['dopamine', 'serotonin'],
    chapters: [{ ch: 'ch04', pages: '146' }],
    facts: [F('146', 'Chapter 4 notes that **treatments for agitation in dementia are evolving separately** from those for psychosis in dementia and in schizophrenia.', 's4-aggression')],
    updates: [{ year: '2023', title: 'Approved for Alzheimer agitation', text: 'Approved by the FDA for **agitation associated with dementia due to Alzheimer disease**, the first drug approved for this indication in the US.', source: 'FDA, May 10, 2023' }]
  }, { after: 'pimavanserin' });

  /* ---------------- symptom → circuit maps ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch04', pages });
  db.circuits.push(
    C('scz-positive', 'Schizophrenia', 'Positive symptoms (delusions, hallucinations)', '**Mesolimbic/mesostriatal** dopamine pathway (nucleus accumbens; associative striatum via the VTA–substantia nigra hub)', ['Dopamine (excess)', 'Glutamate (upstream NMDA hypofunction)', 'Serotonin (5HT2A)'], ['D2 antagonism or partial agonism (Chapter 5)', 'Targeting any node: D2, NMDA, 5HT2A'], '89–95, 144'),
    C('scz-negative', 'Schizophrenia', 'Negative symptoms (alogia, blunted affect, asociality, anhedonia, avolition)', '**Mesocortical/prefrontal cortex** and **nucleus accumbens reward** circuits', ['Dopamine (deficit)', 'Glutamate (NMDA hypofunction via VTA GABA interneurons)'], ['Not much helped by drugs for depression or anxiety (Chapter 4)', 'Drug options in Chapter 5'], '95, 110–111, 144'),
    C('scz-cognitive', 'Schizophrenia', 'Cognitive symptoms (executive dysfunction, attention, verbal fluency, serial learning)', '**Dorsolateral prefrontal cortex** (mesocortical projection)', ['Dopamine (deficit)', 'Glutamate'], ['Proposed: 5HT6 antagonists as pro-cognitive agents (Chapter 4)'], '95, 144–145'),
    C('scz-affective', 'Schizophrenia', 'Affective symptoms (depressed or anxious mood, guilt, tension, irritability)', '**Ventromedial prefrontal cortex** (mesocortical projection)', ['Dopamine (deficit)', 'Serotonin'], ['Add drugs for depression or anxiety, e.g., SSRIs, also to prevent suicide'], '95, 144–145'),
    C('scz-aggressive', 'Schizophrenia', 'Aggressive symptoms (hostility, assault, violence)', '**Orbitofrontal cortex**; psychotic violence also tied to mesolimbic D2 overactivity', ['Dopamine'], ['Clozapine or high doses for psychotic or impulsive violence', 'Behavioral measures for impulsive violence', 'Confinement for organized violence'], '144–148'),
    C('pdp', 'Parkinson’s disease psychosis', 'Visual hallucinations; delusions of theft or infidelity', 'Loss of raphe serotonin terminals in **prefrontal and visual cortex** → upregulated **5HT2A** on glutamate neurons → VTA dopamine excess and visual cortex overactivity', ['Serotonin (5HT2A)', 'Glutamate', 'Dopamine'], ['5HT2A antagonism', 'Avoid D2 blockade (worsens movement)'], '133–141, 157'),
    C('drp', 'Dementia-related psychosis', 'Delusions (common in Alzheimer disease) and hallucinations', 'Neurodegeneration removes cortical **GABA inhibition**; unopposed **5HT2A** excitation of surviving glutamate neurons → VTA dopamine excess and visual cortex overactivity', ['Serotonin (5HT2A)', 'Glutamate', 'GABA', 'Dopamine'], ['Selective 5HT2A antagonism', 'D2 blockers raise stroke and death risk'], '105–110, 136–141, 157–158'),
    C('hallucinogen', 'Drug-induced psychosis', 'Visual hallucinations, mystical delusions (insight preserved): LSD, psilocybin, mescaline', '**5HT2A** agonism on prefrontal and visual cortex glutamate neurons', ['Serotonin (5HT2A)', 'Glutamate', 'Dopamine'], ['Blocked by 5HT2A antagonists'], '78, 131–133'),
    C('ketamine-psychosis', 'Drug-induced psychosis', 'Visual hallucinations, paranoid delusions: ketamine, PCP', '**NMDA** blockade on prefrontal **GABA interneurons** → disinhibited glutamate → mesostriatal dopamine excess', ['Glutamate (NMDA)', 'GABA', 'Dopamine'], ['Acute and reversible'], '78, 105–110'),
    C('stimulant-psychosis', 'Drug-induced psychosis', 'Auditory hallucinations, paranoid delusions: cocaine, amphetamine, methamphetamine', '**Mesolimbic** dopamine excess caused directly', ['Dopamine'], ['D2 blockade (Chapter 5)'], '78–79, 90'),
    C('mesolimbic-deficit', 'Depression and negative symptoms', 'Anhedonia, apathy, lack of energy', '**Mesolimbic** reward pathway (too little dopamine)', ['Dopamine (deficit)'], ['Covered in Chapters 6–7'], '89–90'),
    C('dp-hyperkinetic', 'Movement disorders', 'Chorea, tics, dyskinesias (Huntington’s disease, Tourette syndrome, LID, tardive dyskinesia)', '**Nigrostriatal** pathway (dopamine excess or chronic D2 stimulation/blockade)', ['Dopamine'], ['Chapter 5 covers tardive dyskinesia treatment'], '86–89')
  );
};
