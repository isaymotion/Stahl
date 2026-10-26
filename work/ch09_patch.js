// Chapter 9 library enrichment: pain pathways, descending inhibition, SNRIs and α2δ ligands.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch09', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };

  /* ---------------- new targets ---------------- */
  h.upsert('targets', {
    id: 'vr1', name: 'Vanilloid receptor 1 (VR1)', short: 'VR1', family: 'Ligand-gated ion channel', ntLabel: 'Capsaicin, noxious heat',
    summary: 'An ion channel on some primary afferent neurons, activated by capsaicin (chili peppers) and noxious heat: the source of the burning sensation.',
    stim: ['**Burning** pain from capsaicin or heat'],
    facts: [F('381', 'Neurons expressing VR1 respond to **capsaicin** and **noxious heat**; channel content defines each primary afferent’s response properties.', 's9-nociception')]
  }, { after: 'nicotinic' });
  h.upsert('targets', {
    id: 'nk', name: 'Neurokinin receptors (NK1, NK2, NK3)', short: 'NK1–3', family: 'G-protein-linked receptor', ntLabel: 'Substance P',
    summary: 'Receptors for substance P, one of the best-studied pain transmitters in the dorsal horn.',
    facts: [F('382–383', '**Substance P** acts at NK1, NK2 and NK3 receptors in the dorsal horn (Figure 9-2); its release depends on N and P/Q calcium channels.', 's9-ascending')]
  }, { after: 'crf' });
  h.upsert('targets', {
    id: 'cgrp', name: 'CGRP receptor', short: 'CGRP-R', family: 'G-protein-linked receptor', ntLabel: 'Calcitonin gene-related peptide',
    summary: 'Receptor for calcitonin gene-related peptide, a pain transmitter released in the dorsal horn.',
    facts: [F('382–383, 395', 'CGRP is released in the dorsal horn with glutamate, aspartate and substance P via N and P/Q VSCCs.', 's9-a2d')]
  }, { after: 'nk' });
  h.upsert('targets', {
    id: 'dor', name: 'δ-Opioid receptor', short: 'δ-opioid', family: 'G-protein-linked receptor', nt: 'endorphin',
    summary: 'Opioid receptor for enkephalins, which are antinociceptive.',
    facts: [F('390', '**Enkephalins** acting via δ-opioid receptors are antinociceptive. Dextromethadone also binds δ (Figure 7-86).', 's9-descending')]
  }, { after: 'mor' });
  h.upsert('targets', {
    id: 'kor', name: 'κ-Opioid receptor', short: 'κ-opioid', family: 'G-protein-linked receptor', nt: 'endorphin',
    summary: 'Opioid receptor for dynorphins, which can be either anti- or pronociceptive.',
    facts: [F('390', '**Dynorphins** acting at κ-opioid receptors can be anti- or **pronociceptive**.', 's9-descending')]
  }, { after: 'dor' });

  /* ---------------- target facts ---------------- */
  h.facts('targets', 'mor', [F('390', 'Descending pathways release **endorphins** acting at mostly **presynaptic** μ receptors on nociceptive afferents; opioid analgesics act there and in the **PAG**. **Aβ fibers lack μ receptors**, so opioids spare touch.', 's9-descending')]);
  h.push('targets', 'mor', 'stim', ['**Analgesia** via spinal and periaqueductal gray μ receptors (Chapter 9)']);
  h.facts('targets', 'alpha2', [F('390–391', 'Descending NE from the **locus coeruleus** inhibits pain via presynaptic α2 on primary afferents and postsynaptic α2 on dorsal horn neurons; direct α2 agonists (clonidine) can relieve pain.', 's9-descending')]);
  h.facts('targets', '5ht1b1d', [F('390–391', 'Descending serotonin **inhibits** primary afferent terminals via 5HT1B/D receptors.', 's9-descending')]);
  h.facts('targets', '5ht3', [F('390–391', 'Serotonin **facilitates** pain via excitatory 5HT3 receptors on some primary afferent terminals; this dual role makes SSRIs inconsistent for pain.', 's9-descending')]);
  h.facts('targets', 'net', [F('390–393', 'Boosting descending **NE** with SNRIs restores masking of irrelevant bodily input; the noradrenergic action may matter more than the serotonergic one for pain.', 's9-descending')]);
  h.facts('targets', 'vssc', [F('381, 399', 'Nociceptive action potentials need **VSSCs**; local anesthetics (lidocaine) block them; second-line anticonvulsants for neuropathic pain also target sodium channels.', 's9-nociception')]);
  h.facts('targets', 'vscc', [F('395–399', 'Pain transmitter release (glutamate, aspartate, substance P, CGRP) requires **N- and P/Q-type** VSCCs in the dorsal horn, thalamus and cortex; excessive release drives central sensitization.', 's9-a2d')]);
  h.facts('targets', 'a2d', [F('395–399', 'α2δ ligands bind the **open-channel** conformation, giving use-dependent block of the most active channels in sensitized pain pathways while sparing normal transmission.', 's9-a2d')]);
  h.push('targets', 'a2d', 'block', ['**Neuropathic pain**: diabetic neuropathy, fibromyalgia, shingles, painful symptoms of depression/anxiety (Chapter 9)']);
  h.facts('targets', 'nmda', [F('382–383', 'Glutamate acts at NMDA and AMPA receptors in the dorsal horn; glycine acts at the NMDA glycine site (Figure 9-2).', 's9-ascending')]);

  /* ---------------- neurotransmitters ---------------- */
  h.facts('nts', 'norepinephrine', [F('390–393', 'The descending spinal NE pathway from the locus coeruleus (caudal lateral tegmental cells) inhibits pain via **α2** receptors in the dorsal horn.', 's9-descending')]);
  h.push('nts', 'norepinephrine', 'pathways', [{ name: 'Descending spinal (pain)', route: '**Locus coeruleus** and caudal lateral tegmental cells → dorsal horn', role: 'Inhibits pain via α2 receptors (Chapter 9)' }]);
  h.facts('nts', 'serotonin', [F('390–393', 'The descending spinal 5HT pathway from the **raphe magnus** inhibits pain via 5HT1B/D but facilitates it via 5HT3.', 's9-descending')]);
  h.facts('nts', 'endorphin', [F('390–392', 'Descending PAG-driven pathways release **endorphins** at μ receptors in the dorsal horn; placebo analgesia is reversed by naloxone.', 's9-descending')]);
  h.facts('nts', 'glutamate', [F('395', 'The main transmitter released in **suprasegmental** central sensitization (thalamus, cortex).', 's9-a2d')]);

  /* ---------------- drugs ---------------- */
  const snriPain = F('390–399', 'Boosts descending **NE and 5HT** inhibition in the dorsal horn, so irrelevant input from joints, muscles and gut is ignored again; treats pain across the spectrum from depression to fibromyalgia, diabetic neuropathy, low back pain and osteoarthritis.', 's9-descending');
  ['duloxetine', 'milnacipran', 'levomilnacipran', 'venlafaxine', 'desvenlafaxine'].forEach(id => { h.facts('drugs', id, [snriPain]); h.chapter(id, 'ch09', '390–400'); });
  ['milnacipran', 'levomilnacipran'].forEach(id => h.facts('drugs', id, [F('399', 'Potent NET binding at **all** clinically effective doses may make it especially useful for **fibro-fog**.', 's9-ancillary')]));
  h.push('drugs', 'venlafaxine', 'uses', ['Neuropathic pain and fibromyalgia pain (Chapter 9)']);
  h.push('drugs', 'desvenlafaxine', 'uses', ['Neuropathic pain and fibromyalgia pain (Chapter 9)']);
  ['pregabalin', 'gabapentin'].forEach(id => {
    h.facts('drugs', id, [F('395–400', 'Binds the α2δ subunit of open, overactive N and P/Q VSCCs in the dorsal horn, thalamus and cortex: proven for diabetic neuropathy, fibromyalgia, shingles and painful symptoms of depression/anxiety; may also help **anxiety** and **slow-wave sleep** in fibromyalgia.', 's9-a2d')]);
    h.push('drugs', id, 'uses', ['**Neuropathic pain**: diabetic peripheral neuropathy, fibromyalgia, shingles; painful physical symptoms of depression/anxiety']);
    h.chapter(id, 'ch09', '395–400');
  });
  h.facts('drugs', 'morphine', [F('382, 390', 'Opiates reduce acute pain through **central** actions at spinal and PAG μ receptors, but are no better than SNRIs or α2δ ligands for chronic neuropathic pain and are not proven in fibromyalgia.', 's9-descending')]);
  h.chapter('morphine', 'ch09', '382, 390');
  ['mirtazapine', 'trazodone', 'bupropion', 'modafinil'].forEach(id => { h.facts('drugs', id, [F('399–400', 'Used for ancillary symptoms of **fibromyalgia** (see Chapter 9 table).', 's9-ancillary')]); h.chapter(id, 'ch09', '399–400'); });

  const add = (o, after) => h.upsert('drugs', o, { after });
  add({ id: 'lidocaine', name: 'Lidocaine', brand: 'Xylocaine', group: 'Local anesthetic', cls: 'Local anesthetic', nbn: 'Voltage-sensitive sodium channel blocker', nts: [], chapters: [{ ch: 'ch09', pages: '381' }],
    short: 'Local anesthetic that blocks sodium channels on primary afferents.',
    mechanism: 'Blocks **voltage-sensitive sodium channels** on primary afferent neurons, stopping nociceptive impulses from entering the CNS.',
    targets: [T('vssc', 'blocker')], uses: ['Local anesthesia (peripherally administered)'] }, 'hydroxyzine');
  add({ id: 'clonidine', name: 'Clonidine', brand: 'Catapres', group: 'α2 agonist', cls: 'α2-adrenergic agonist', nbn: 'Norepinephrine α2 receptor agonist', nts: ['norepinephrine'], chapters: [{ ch: 'ch09', pages: '390' }],
    short: 'Direct α2 agonist that can relieve pain by mimicking descending NE inhibition.',
    mechanism: 'A **direct-acting α2 agonist**: mimics descending noradrenergic inhibition at α2 receptors in the dorsal horn.',
    targets: [T('alpha2', 'agonist')], uses: ['Pain relief in some patients (Chapter 9); other uses in later chapters'] }, 'lidocaine');
  add({ id: 'naloxone', name: 'Naloxone', brand: 'Narcan', group: 'Opioid antagonist', cls: 'μ-opioid antagonist', nbn: 'Opioid μ receptor antagonist', nts: ['endorphin'], chapters: [{ ch: 'ch09', pages: '392' }],
    short: 'μ-opioid antagonist that reverses placebo analgesia.',
    mechanism: 'Blocks **μ-opioid** receptors. Its ability to reverse placebo pain relief suggests placebo analgesia involves endogenous opioid release.',
    targets: [T('mor', 'antagonist')], uses: ['Opioid reversal (later chapters)'] }, 'clonidine');
  add({ id: 'cyclobenzaprine', name: 'Cyclobenzaprine', brand: 'Flexeril; Tonmya', group: 'Muscle relaxant', cls: 'Tricyclic muscle relaxant', nts: [], chapters: [{ ch: 'ch09', pages: '399' }],
    short: 'Tricyclic muscle relaxant used second line for fibromyalgia.',
    mechanism: 'A **tricyclic** muscle relaxant; the book does not detail its pharmacology.',
    uses: ['Second-line treatment of **fibromyalgia** pain'],
    facts: [F('399', 'Spelled “cyclobenzapine” in the book.', 's9-ancillary')],
    updates: [{ year: '2025', title: 'Sublingual form approved for fibromyalgia', text: 'Tonmya, a once-nightly sublingual cyclobenzaprine tablet, was approved for fibromyalgia in adults on August 15, 2025, the first new fibromyalgia drug in more than 15 years.', source: 'FDA approval reported by Healio, August 15, 2025' }] }, 'naloxone');
  add({ id: 'sodium-oxybate', name: 'Sodium oxybate (GHB)', brand: 'Xyrem', aka: ['γ-Hydroxybutyrate', 'GHB'], group: 'Hypnotic', cls: 'Slow-wave sleep enhancer', nts: ['gaba'], chapters: [{ ch: 'ch09', pages: '399' }],
    short: 'Narcolepsy drug that enhances slow-wave sleep; abuse and diversion risk.',
    mechanism: 'Enhances **slow-wave sleep**; mechanism covered in Chapter 10.',
    uses: ['**Narcolepsy** (approved)', 'Severe, treatment-resistant **fibromyalgia** in expert hands (heroic cases)'],
    sideEffects: [{ e: '**Diversion and abuse** potential', via: 'GHB' }] }, 'cyclobenzaprine');
  add({ id: 'armodafinil', name: 'Armodafinil', brand: 'Nuvigil', group: 'Wake-promoting agent', cls: 'Wake-promoting agent', nts: ['dopamine'], chapters: [{ ch: 'ch09', pages: '399' }],
    short: 'Wake-promoting agent used for fibro-fog and fatigue.',
    mechanism: 'Related to modafinil; pharmacology covered in the sleep chapter.',
    uses: ['**Fibro-fog** and fatigue in fibromyalgia (as for cognitive dysfunction in depression)'] }, 'modafinil');
  add({ id: 'atomoxetine', name: 'Atomoxetine', brand: 'Strattera', group: 'NRI', cls: 'Selective norepinephrine reuptake inhibitor (NRI)', nbn: 'Norepinephrine reuptake inhibitor (NET)', nts: ['norepinephrine', 'dopamine'], chapters: [{ ch: 'ch09', pages: '399' }],
    short: 'Selective NET inhibitor used for fibro-fog (and ADHD, Chapter 11).',
    mechanism: 'A **selective NET inhibitor**, which also raises **dopamine in the prefrontal cortex**.',
    targets: [T('net', 'inhibitor')], uses: ['**Fibro-fog** in fibromyalgia', 'ADHD (Chapter 11)'] }, 'armodafinil');

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch09', pages });
  db.circuits.push(
    C('pain-segmental', 'Chronic neuropathic pain', 'Pain with allodynia/wind-up after peripheral injury (diabetic neuropathy, shingles, back pain)', '**Dorsal horn** (segmental central sensitization)', ['Glutamate', 'Substance P', 'CGRP', 'Norepinephrine', 'Serotonin'], ['α2δ ligands: [[drug:pregabalin|pregabalin]], [[drug:gabapentin|gabapentin]]', 'SNRIs: [[drug:duloxetine|duloxetine]]'], '382–386, 395'),
    C('pain-suprasegmental', 'Chronic neuropathic pain', 'Pain generated by the brain (fibromyalgia, chronic widespread pain)', '**Thalamus** and **cortex** (suprasegmental sensitization)', ['Glutamate', 'Norepinephrine', 'Serotonin'], ['α2δ ligands and SNRIs, often combined', 'Opioids not proven in fibromyalgia'], '384–390, 395–399'),
    C('pain-somatic-depression', 'Depression and anxiety', 'Painful physical symptoms (back, joint, gut)', 'Deficient **descending inhibition** to the dorsal horn', ['Norepinephrine', 'Serotonin'], ['SNRIs boost descending NE and 5HT', 'SSRIs inconsistent'], '390–393'),
    C('fibro-pain', 'Fibromyalgia', 'Pain', '**Thalamus**', ['Glutamate', 'Norepinephrine', 'Serotonin'], ['α2δ ligands, SNRIs', 'Second line: mirtazapine, TCAs, [[drug:cyclobenzaprine|cyclobenzaprine]]'], '389, 399'),
    C('fibro-fog', 'Fibromyalgia', 'Fibro-fog and mental fatigue', '**Dorsolateral PFC**', ['Dopamine', 'Norepinephrine'], ['SNRIs (milnacipran, levomilnacipran)', '[[drug:modafinil|Modafinil]], [[drug:armodafinil|armodafinil]], [[drug:atomoxetine|atomoxetine]], [[drug:bupropion|bupropion]], cautious stimulants'], '389, 399'),
    C('fibro-fatigue', 'Fibromyalgia', 'Physical fatigue', '**Striatum** and **spinal cord**; nucleus accumbens', ['Dopamine', 'Norepinephrine'], ['SNRIs ± modafinil, stimulants or bupropion'], '389, 399'),
    C('fibro-sleep', 'Fibromyalgia', 'Nonrestorative (slow-wave) sleep', '**Hypothalamus**; thalamus', ['GABA', 'Histamine'], ['α2δ ligands', 'Benzodiazepines, hypnotics, trazodone', '[[drug:sodium-oxybate|Sodium oxybate]] with extreme caution'], '389–390, 399'),
    C('fibro-mood', 'Fibromyalgia', 'Depressed mood and anxiety', '**Amygdala** and orbitofrontal cortex', ['Serotonin', 'Norepinephrine', 'GABA'], ['SNRIs (mood, anxiety)', 'α2δ ligands (anxiety)'], '389, 399')
  );
};
