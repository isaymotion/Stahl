// Chapter 6 library enrichment: norepinephrine and GABA networks, stress/inflammation targets, mood circuits.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch06', pages, text, sec });

  /* ---------------- neurotransmitters ---------------- */
  h.set('nts', 'norepinephrine', {
    synthesis: [['Tyrosine', 'Actively transported from blood into the neuron'], ['DOPA', '**Tyrosine hydroxylase (TOH)**, rate-limiting'], ['Dopamine', '**DOPA decarboxylase (DDC)**; only a precursor here'], ['Norepinephrine', '**Dopamine β-hydroxylase (DBH)**'], ['Vesicle', 'Packaged by **VMAT2**']],
    termination: ['Reuptake by the **norepinephrine transporter (NET)**, which also has high affinity for dopamine; NE can then be re-stored or destroyed', 'Destroyed by **MAO-A or MAO-B** in mitochondria of the presynaptic neuron and elsewhere', 'Destroyed by **COMT**, largely outside the presynaptic terminal', 'Packaged into vesicles by **VMAT2**'],
    pathways: [
      { name: 'Ascending noradrenergic', route: '**Locus coeruleus** → prefrontal cortex, basal forebrain, thalamus, hypothalamus, amygdala, hippocampus, cerebellum and more', role: 'Mood, arousal, cognition' },
      { name: 'Descending noradrenergic', route: 'Brainstem → spinal cord', role: 'Regulates **pain** pathways' }
    ],
    roles: ['Mood, arousal and cognition', 'Involved in both **reduced positive affect** and **increased negative affect** in depression', 'With ACh and histamine, a driver of cortical arousal', 'Descending modulation of pain']
  });
  h.facts('nts', 'norepinephrine', [
    F('253–256', 'Receptors: **NET**, **VMAT2**, **α1, α2A/B/C, β1/β2/β3**. Only **α2** can be presynaptic autoreceptors (terminal and somatodendritic): the neuron’s **brake**.', 's6-ne'),
    F('277–281', 'Boosting NE (with DA) targets residual **fatigue** and **problems concentrating** in depression.', 's6-algorithm')
  ]);
  h.set('nts', 'gaba', {
    synthesis: [['Glutamate', 'The amino acid precursor'], ['GABA', '**Glutamic acid decarboxylase (GAD)**'], ['Vesicle', 'Packaged by **VIAAT**']],
    roles: ['The principal **inhibitory** neurotransmitter, reducing the activity of many neurons', '**Phasic** inhibition at synaptic benzodiazepine-sensitive GABA-A receptors', '**Tonic** inhibition at extrasynaptic δ-containing GABA-A receptors sets neuronal excitability']
  });
  h.push('nts', 'gaba', 'termination', ['Converted to an inactive substance by **GABA transaminase (GABA-T)** (Chapter 6)']);
  h.push('nts', 'gaba', 'clinical', ['Loss of **tonic inhibition** may underlie some depression, e.g., after the postpartum fall in neuroactive steroids', 'Insomnia as a residual depressive symptom: boost GABA (Chapter 6)']);
  h.facts('nts', 'gaba', [
    F('258–259', 'Three receptor types: **GABA-A** and **GABA-C** (ligand-gated chloride channels) and **GABA-B** (G-protein-linked).', 's6-gaba'),
    F('259–263', 'GABA-A subunits α1–6, β1–3, γ1–3, δ, ε, π, θ, ρ1–3. Benzodiazepine-sensitive (γ2/3 + α1–3) receptors are synaptic and **phasic**; δ-containing receptors with α4/α6 are extrasynaptic, **tonic** and bind **neuroactive steroids**.', 's6-gabaa')
  ]);
  h.facts('nts', 'dopamine', [F('277–278', 'Diffuse dopamine dysfunction is linked mainly to **reduced positive affect**: loss of joy, interest, pleasure, energy, alertness and self-confidence.', 's6-circuits')]);
  h.facts('nts', 'serotonin', [F('277–278', 'Diffuse serotonin dysfunction is linked mainly to **increased negative affect**: guilt, disgust, fear, anxiety, hostility, irritability, loneliness. Ascending raphe projections regulate mood, anxiety and sleep; descending ones regulate pain.', 's6-circuits')]);
  h.facts('nts', 'neurotrophins', [F('266–270', '**BDNF** loss from stress, inflammation, early adversity, microbiome changes and poor sleep (via epigenetic silencing) may drive **neuroprogression**: lost synapses, then lost neurons. Effective antidepressants may raise BDNF via **CREB**.', 's6-neuroplasticity')]);
  h.facts('nts', 'melatonin', [F('271–275', 'In depression the nighttime **melatonin peak is lost**; early-evening melatonin can help reset a **phase-delayed** clock.', 's6-circadian')]);

  /* ---------------- targets ---------------- */
  h.facts('targets', 'alpha2', [F('254–255', 'The only NE receptor that can be a **presynaptic autoreceptor**: on axon terminals (gatekeepers that halt release) and somatodendritic (shut off firing). Agonists step on the brake; antagonists **cut the brake cable**.', 's6-ne')]);
  h.facts('targets', 'net', [F('253–254', 'The NE “vacuum cleaner” that removes NE from the synapse without destroying it.', 's6-ne')]);
  h.facts('targets', 'gabaa', [
    F('259–262', 'Benzodiazepine-sensitive receptors need **two β, γ2 or γ3, and two α1–3**; one benzodiazepine binds between γ and α, two GABA molecules between α and β. **α1** subunits relate to **sleep**, **α2/α3** to **anxiety**; current benzodiazepines are nonselective.', 's6-gabaa'),
    F('262–264', 'Benzodiazepine-insensitive receptors (α4, α6, γ1 or δ) are **extrasynaptic** and mediate **tonic** inhibition; **neuroactive steroids** bind between α and δ. Abnormal γ2, α2 or δ expression is linked to **epilepsy**.', 's6-neurosteroids')
  ]);
  h.push('targets', 'gabaa', 'block', ['Neutral antagonism at the benzodiazepine site (**flumazenil**): reverses benzodiazepine sedation and overdose']);
  h.facts('targets', 'gabab', [F('258', 'The G-protein-linked GABA receptor, possibly coupled to calcium or potassium channels.', 's6-gaba')]);
  h.facts('targets', 'gat', [F('258', 'Terminates GABA action by reuptake; inside the neuron GABA may then be destroyed by **GABA-T**.', 's6-gaba')]);
  h.facts('targets', 'viaat', [F('256', 'Packages GABA made by GAD into synaptic vesicles.', 's6-gaba')]);
  h.facts('targets', 'gad', [F('256', 'Makes GABA from glutamate in GABA neurons.', 's6-gaba')]);
  h.facts('targets', 'toh', [F('253', 'Also the rate-limiting and most important regulatory enzyme of **norepinephrine** synthesis.', 's6-ne')]);
  h.facts('targets', 'comt', [F('253', 'Also destroys **norepinephrine**, largely outside the presynaptic terminal.', 's6-ne')]);
  h.facts('targets', 'mao', [F('253', 'MAO-A or MAO-B in mitochondria destroys norepinephrine in the presynaptic neuron and elsewhere.', 's6-ne')]);
  h.facts('targets', 'ddc', [F('253', 'Converts DOPA to dopamine, the precursor of norepinephrine in noradrenergic neurons.', 's6-ne')]);
  h.facts('targets', 'mt1mt2', [F('274–275', 'Melatonin acting on the **SCN** resets circadian rhythms; early-evening melatonin may correct the phase delay of depression.', 's6-circadian')]);

  h.upsert('targets', {
    id: 'gabac', name: 'GABA-C receptor', short: 'GABA-C', family: 'Ligand-gated ion channel', nt: 'gaba',
    summary: 'A ligand-gated chloride-channel GABA receptor, one of the three major GABA receptor types.',
    facts: [F('258–259', 'Like GABA-A, a **ligand-gated ion channel** forming part of an inhibitory chloride channel complex.', 's6-gaba')]
  }, { after: 'gabaa' });
  h.upsert('targets', {
    id: 'beta-ar', name: 'β-adrenergic receptors (β1, β2, β3)', short: 'β1–β3', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'Postsynaptic norepinephrine receptors (β1, β2, β3). β-blockers are among the treatments for akathisia (Chapter 5).',
    location: 'Postsynaptic only (never presynaptic autoreceptors)',
    block: ['β-adrenergic blockers: treat **akathisia** (Chapter 5)'],
    facts: [F('254', 'Postsynaptic NE receptors that convert NE occupancy into signal transduction and gene expression changes.', 's6-ne')]
  }, { after: 'alpha1' });
  h.upsert('targets', {
    id: 'dbh', name: 'Dopamine β-hydroxylase (DBH)', short: 'DBH', family: 'Enzyme', nt: 'norepinephrine',
    summary: 'The third and final enzyme of norepinephrine synthesis, converting dopamine into norepinephrine.',
    facts: [F('253', 'In noradrenergic neurons dopamine is only a precursor; DBH converts it to NE, which is then stored in vesicles.', 's6-ne')]
  }, { after: 'ddc' });
  h.upsert('targets', {
    id: 'gabat', name: 'GABA transaminase (GABA-T)', short: 'GABA-T', family: 'Enzyme', nt: 'gaba',
    summary: 'The enzyme that converts GABA into an inactive substance, terminating its action after reuptake.',
    facts: [F('258', 'One of two ways GABA action ends, with reuptake by GAT.', 's6-gaba')]
  }, { after: 'gad' });
  h.upsert('targets', {
    id: 'crf', name: 'Corticotropin-releasing factor (CRF) receptors', short: 'CRF-R', family: 'G-protein-linked receptor', ntLabel: 'Neuropeptide (CRF)',
    summary: 'Receptors for hypothalamic CRF, which starts the HPA stress response; antagonists are in testing for depression and stress-related illness.',
    block: ['Antagonists in testing to halt or reverse **HPA-axis hyperactivity** in depression'],
    facts: [F('270–271', 'Hypothalamic CRF → pituitary ACTH → adrenal glucocorticoid; in depression the axis is overactive and insensitive to feedback.', 's6-hpa')]
  }, { after: 'ox' });
  h.upsert('targets', {
    id: 'v1b', name: 'Vasopressin 1B receptor', short: 'V1B', family: 'G-protein-linked receptor', ntLabel: 'Neuropeptide (vasopressin)',
    summary: 'A stress-axis receptor targeted by novel treatments in testing for depression.',
    block: ['Antagonists in testing for **HPA-axis** abnormalities in depression'],
    facts: [F('270–271', 'Listed with CRF and glucocorticoid receptors as novel targets for stress-related illness.', 's6-hpa')]
  }, { after: 'crf' });
  h.upsert('targets', {
    id: 'gr', name: 'Glucocorticoid receptor', short: 'GR', family: 'Intracellular receptor', ntLabel: 'Glucocorticoids (cortisol)',
    summary: 'The receptor for adrenal glucocorticoids that mediates HPA feedback; antagonists are in testing for depression.',
    block: ['Antagonists in testing to reverse **HPA-axis** abnormalities in depression'],
    facts: [F('270–271', 'Depression shows elevated glucocorticoids and **insensitivity** to feedback inhibition; high glucocorticoids may be toxic to hippocampal neurons.', 's6-hpa')]
  });
  h.upsert('targets', {
    id: 'trkb', name: 'BDNF and its receptor TrkB', short: 'BDNF/TrkB', family: 'Neurotrophin receptor', nt: 'neurotrophins',
    summary: 'Brain-derived neurotrophic factor supports neuronal growth, survival and synapses; its loss is central to the neuroprogression hypothesis of depression.',
    stim: ['Increased BDNF signaling (downstream of effective antidepressants via CREB): synapse maintenance and possibly **restoration of lost synapses**'],
    facts: [F('266–270', 'Monoamine signaling releases BDNF; stress, inflammation and adversity may silence BDNF genes, leading to loss of spines, synapses and eventually neurons.', 's6-neuroplasticity')]
  });

  /* ---------------- drugs ---------------- */
  h.upsert('drugs', {
    id: 'flumazenil', name: 'Flumazenil', group: 'Benzodiazepine antagonist', cls: 'Benzodiazepine receptor antagonist',
    nbn: 'GABA-A benzodiazepine-site antagonist',
    short: 'Neutral antagonist that reverses benzodiazepines.',
    mechanism: 'A **neutral antagonist** at the benzodiazepine (PAM) site of GABA-A receptors. Its ability to reverse benzodiazepines shows that benzodiazepines act as **agonists** at their allosteric site (Figure 6-23).',
    nts: ['gaba'], targets: [{ t: 'gabaa', action: 'antagonist', note: 'Benzodiazepine site; neutral antagonist' }],
    uses: ['Reversal of benzodiazepine **anesthesia**', 'Benzodiazepine **overdose**'],
    chapters: [{ ch: 'ch06', pages: '261–262' }],
    facts: [F('261–262', 'Reverses a full-agonist benzodiazepine acting at its site on the GABA-A receptor.', 's6-gabaa')]
  }, { after: 'alprazolam' });
  h.facts('drugs', 'allopregnanolone', [F('263–264', 'A neuroactive steroid acting mainly at **extrasynaptic δ** GABA-A sites (tonic inhibition). Postpartum depression may follow the **fall** in neurosteroids after delivery; a **60-hour IV infusion** may reverse it.', 's6-neurosteroids')]);
  h.chapter('allopregnanolone', 'ch06', '263–264');
  h.facts('drugs', 'diazepam', [F('259–262', 'Nonselective PAM at **α1, α2 and α3** benzodiazepine-sensitive GABA-A receptors (phasic inhibition); reversed by **flumazenil**.', 's6-gabaa')]);
  h.facts('drugs', 'alprazolam', [F('259–262', 'Nonselective PAM at **α1–3** GABA-A receptors; α2/α3 actions are thought anxiolytic, α1 actions sedating.', 's6-gabaa')]);

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch06', pages });
  db.circuits.push(
    C('mde-mood', 'Major depressive episode', 'Depressed mood', '**Ventromedial PFC**, **amygdala**', ['Serotonin', 'Norepinephrine', 'Dopamine'], ['Monoamine-boosting treatments (Chapter 7)'], '277'),
    C('mde-interest', 'Major depressive episode', 'Loss of interest/pleasure', '**Prefrontal cortex**, **nucleus accumbens/striatum**', ['Dopamine', 'Norepinephrine'], ['Boost DA and NE'], '277, 281'),
    C('mde-concentration', 'Major depressive episode', 'Problems concentrating (executive dysfunction)', '**Dorsolateral prefrontal cortex**', ['Norepinephrine', 'Dopamine'], ['Boost NE or DA', 'Consider whether a serotonergic drug contributes'], '277, 281'),
    C('mde-fatigue', 'Major depressive episode', 'Fatigue (mental and physical)', 'PFC (mental); **striatum, NA, spinal cord** (physical)', ['Norepinephrine', 'Dopamine'], ['Boost NE or DA'], '277, 281'),
    C('mde-psychomotor', 'Major depressive episode', 'Psychomotor agitation or retardation', 'PFC, **striatum**, **cerebellum**, spinal cord', ['Dopamine', 'Norepinephrine'], ['Chapter 7'], '277'),
    C('mde-guilt', 'Major depressive episode', 'Guilt, worthlessness, suicidality', '**Ventromedial PFC**, **amygdala**', ['Serotonin', 'Norepinephrine'], ['Boost 5HT (and NE)'], '277'),
    C('mde-sleep', 'Major depressive episode', 'Insomnia or hypersomnia; appetite and weight change', '**Hypothalamus**', ['Serotonin', 'GABA', 'Histamine'], ['Boost GABA', 'Block 5HT or histamine'], '277, 281'),
    C('affect-positive', 'Major depressive episode', 'Reduced positive affect (loss of joy, interest, energy, alertness, confidence)', 'Diffuse monoamine projections', ['Dopamine', 'Norepinephrine'], ['Enhance DA and possibly NE'], '278–280'),
    C('affect-negative', 'Major depressive episode', 'Increased negative affect (guilt, fear, anxiety, hostility, irritability, loneliness)', 'Diffuse monoamine projections', ['Serotonin', 'Norepinephrine'], ['Enhance 5HT and possibly NE', 'Both clusters: triple-action treatment'], '278–280'),
    C('mania-thought', 'Manic episode', 'Racing thoughts, grandiosity, distractibility, pressured speech', '**Prefrontal cortex** (including orbitofrontal/ventral PFC for risk taking)', ['Dopamine', 'Norepinephrine', 'Serotonin', 'Glutamate'], ['Chapter 7: treatments for mania'], '278'),
    C('mania-goal', 'Manic episode', 'Goal-directed activity, motor agitation', '**Nucleus accumbens/striatum**', ['Dopamine'], ['D2 antagonists/partial agonists (Chapter 5)'], '278'),
    C('mania-mood', 'Manic episode', 'Elevated or irritable mood', '**Ventromedial PFC**, **amygdala**', ['Dopamine', 'Serotonin', 'Norepinephrine'], ['Chapter 7'], '278'),
    C('mania-sleep', 'Manic episode', 'Decreased need for sleep/arousal', '**Hypothalamus, thalamus, basal forebrain**', ['Histamine', 'Norepinephrine', 'Acetylcholine', 'GABA'], ['Chapter 7'], '278'),
    C('depression-circadian', 'Major depressive episode', 'Phase-delayed sleep–wake cycle', '**Suprachiasmatic nucleus** (circadian clock) and pineal', ['Melatonin'], ['Morning bright light', 'Evening melatonin', 'Phase advance/delay, sleep deprivation'], '271–275')
  );
};
