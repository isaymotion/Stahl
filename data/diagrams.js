/*
 * Diagrams (34.0.0). Data for the four original interactive drawings in js/diagrams.js:
 *   SP.diagrams.spectrum   agonist slider (Ch 2) and its D2 preset (Ch 5)
 *   SP.diagrams.occupancy  occupancy meter, one entry per target id that the book gives a figure for
 *   SP.diagrams.pathways   the five dopamine pathways and four scenarios
 *   SP.diagrams.ring       sector order of the receptor ring (filled from each drug's `targets[].s`)
 *   SP.diagrams.questions  teaching-mode slides (board-question shape + `dia` = the drawing to show)
 * Every statement is from the book, in the app's own words, with printed pages. Positions on the slider are
 * rank order only: the book gives no numbers for intrinsic activity. Occupancy figures are the book's only.
 */
SP.diagrams = {

  spectrum: {
    title: 'The agonist spectrum',
    ch: 'ch02', sec: 's2-spectrum', pages: '36–45',
    note: 'A schematic of the book’s spectrum. The height of the baseline is illustrative, not measured.',
    zones: [
      { id: 'inverse', label: 'Inverse agonist', alone: 'Reduces signaling **below baseline**: even constitutive activity is shut off.', withAg: 'Blocks the agonist **and** goes below baseline.', flat: 'With no constitutive activity to remove, it **looks like an antagonist**.' },
      { id: 'antagonist', label: 'Silent antagonist', alone: '**No effect** of its own: baseline (constitutive) activity is unchanged.', withAg: 'Blocks the agonist: signaling returns to **baseline**. It does the same to a partial or an inverse agonist.' },
      { id: 'partial', label: 'Partial agonist', alone: 'Raises signaling above baseline, to its own set point: a **net agonist**.', withAg: 'Lowers signaling to the same set point: a **net antagonist**. No dose can push it higher.' },
      { id: 'full', label: 'Full agonist', alone: '**Maximum** signal transduction, like the natural neurotransmitter.', withAg: 'Signaling stays at **maximum**.' }
    ],
    presets: {
      d2: {
        title: 'D2 partial agonists on the spectrum',
        ch: 'ch05', sec: 's5-pa', pages: '189–193',
        note: 'Order is from the book; the spacing is schematic, because the book gives no values.',
        marks: [
          { v: 0, label: 'D2 antagonists', text: '**“Too cold”**: antipsychotic, but with drug-induced parkinsonism and high prolactin.' },
          { v: 0.14, label: 'Aripiprazole, brexpiprazole, cariprazine', drugs: ['aripiprazole', 'brexpiprazole', 'cariprazine'], text: '**Almost antagonists**, with just a whiff of intrinsic activity: positive symptoms improve without severe motor effects, though some **akathisia** occurs. All three **lower** prolactin.' },
          { v: 0.3, label: 'Bifeprunox', text: 'Still too much agonist: **nausea and vomiting**, weaker on positive symptoms; **not approved**.' },
          { v: 0.44, label: 'OPC4392', text: 'Too much agonist: negative symptoms improved with few motor effects, but **positive symptoms worsened**; never marketed.' },
          { v: 0.82, label: 'Partial agonists for Parkinson’s disease', text: 'Sit near the **full agonist** end. Used for psychosis they would make it worse: do not lump all partial agonists together.' },
          { v: 1, label: 'Dopamine', text: '**“Too hot”** when in excess (or released by amphetamine): positive symptoms.' }
        ]
      }
    }
  },

  occupancy: {
    d2: {
      title: 'D2 receptor occupancy', ch: 'ch05', sec: 's5-binding', pages: '195, 201, 227–231', start: 70,
      bands: [
        { from: 0, to: 60, label: 'Below 60%', text: 'Below the usual range for psychosis. **Lumateperone, quetiapine and clozapine** are antipsychotic here: they have the widest 5HT2A–D2 separation. The lower doses used for **depression** are probably too low to block D2 robustly.' },
        { from: 60, to: 80, label: '60–80%', text: 'The range D2-targeting drugs for psychosis are **dosed to reach**. On a binding strip, receptors to the left of D2 are occupied 60% or more at these doses.' },
        { from: 80, to: 100, label: 'About 80% and above', text: 'Psychosis needs about **80%** occupancy in the **emotional striatum**.' }
      ],
      marks: [{ at: 60, label: '60%' }, { at: 80, label: '80%' }],
      notes: ['[[drug:quetiapine|Quetiapine]]: D2 occupancy above 60% comes only at about **800 mg**, and even then inconsistently between doses; at 50 mg it acts as an H1 antagonist alone.', 'The **80%** figure and the point about depression doses are from the section on mania and depression.']
    },
    sert: {
      title: 'Serotonin transporter occupancy', ch: 'ch07', sec: 's7-snri', pages: '298–301', start: 85,
      bands: [
        { from: 0, to: 80, label: 'Below 80%', text: 'Below what the book suggests SSRIs need.' },
        { from: 80, to: 90, label: '80–90%', text: 'SSRIs must occupy perhaps **80–90%** of serotonin transporters to work.' },
        { from: 90, to: 100, label: 'Above 90%', text: 'Above the range the book describes.' }
      ],
      marks: [{ at: 80, label: '80%' }, { at: 90, label: '90%' }]
    },
    net: {
      title: 'Norepinephrine transporter occupancy', ch: 'ch07', sec: 's7-snri', pages: '298–301', start: 50,
      bands: [
        { from: 0, to: 50, label: 'Below 50%', text: 'Below the level the book links to clinical effects.' },
        { from: 50, to: 100, label: 'About 50% and above', text: 'Therapeutic actions and norepinephrine-mediated side effects may appear with perhaps as little as **50%** occupancy.' }
      ],
      marks: [{ at: 50, label: '50%' }]
    },
    dat: {
      title: 'Dopamine transporter occupancy', ch: 'ch11', sec: 's11-dat', pages: '473–477', start: 55,
      bands: [
        { from: 0, to: 10, label: 'Below 10%', text: 'Below the range the book describes.' },
        { from: 10, to: 30, label: '10–30%', text: '**Bupropion** occupies only about 10–15% of striatal transporters at therapeutic doses, perhaps 20–30% at most: enough to reduce nicotine craving, but not enough to be abused (see [[ch:ch07|Chapter 7]], on bupropion).' },
        { from: 30, to: 50, label: '30–50%', text: 'Between bupropion’s range and the threshold for immediate effects.' },
        { from: 50, to: 100, label: '50% and above', text: 'Above a threshold of about **50–60%** comes immediate benefit in ADHD and sleepiness. **Speed matters as much as the number**: reached rapidly and briefly it causes euphoria and reinforcement (cocaine); reached slowly and held, it is less abusable.' }
      ],
      marks: [{ at: 10, label: '10%' }, { at: 30, label: '30%' }, { at: 50, label: '50%' }]
    },
    h1: {
      title: 'H1 receptor occupancy', ch: 'ch10', sec: 's10-pk', pages: '426–430', start: 80,
      bands: [
        { from: 0, to: 80, label: 'Below 80%', text: 'Below what the book suggests is needed for sleep.' },
        { from: 80, to: 100, label: 'About 80% and above', text: 'A histamine or serotonin antagonist probably needs about **80%** occupancy of one receptor to work as a hypnotic; less if it blocks several receptors.' }
      ],
      marks: [{ at: 80, label: '80%' }]
    },
    ox: {
      title: 'Orexin receptor occupancy', ch: 'ch10', sec: 's10-pk', pages: '426–430', start: 65,
      bands: [
        { from: 0, to: 65, label: 'Below 65%', text: 'Below the level the book gives for dual orexin receptor antagonists.' },
        { from: 65, to: 100, label: 'About 65% and above', text: 'Dual orexin receptor antagonists need about **65%** occupancy. Endogenous orexin competes with them.' }
      ],
      marks: [{ at: 65, label: '65%' }]
    },
    gabaa: {
      title: 'GABA-A receptor occupancy', ch: 'ch10', sec: 's10-pk', pages: '426–430', start: 28,
      bands: [
        { from: 0, to: 25, label: 'Below 25%', text: 'Below the level the book gives for a hypnotic effect.' },
        { from: 25, to: 30, label: '25–30%', text: 'Hypnotic GABA-A positive allosteric modulators need only about **25–30%** occupancy.' },
        { from: 30, to: 100, label: 'Above 30%', text: 'More than a hypnotic effect needs.' }
      ],
      marks: [{ at: 25, label: '25%' }, { at: 30, label: '30%' }]
    },
    vmat2: {
      title: 'VMAT2 inhibition', ch: 'ch05', sec: 's5-vmat2', pages: '174–179', start: 90, unit: 'inhibited',
      bands: [
        { from: 0, to: 90, label: 'Below 90%', text: 'Below what the book suggests tardive dyskinesia often needs.' },
        { from: 90, to: 100, label: 'Over 90%', text: 'A high degree of inhibition, perhaps **over 90%**, may often be needed for the best balance of efficacy and tolerability in tardive dyskinesia.' }
      ],
      marks: [{ at: 90, label: '90%' }]
    }
  },

  pathways: {
    title: 'The five dopamine pathways',
    ch: 'ch04', sec: 's4-da-pathways', pages: '84–89',
    levels: {
      high: 'Overactive', low: 'Underactive', normal: 'Normal', blocked: 'D2 blocked', eased: 'Eased', tuned: 'Stabilized', unknown: 'Not described'
    },
    paths: [
      { id: 'mesolimbic', label: 'Mesolimbic', from: 'VTA', to: 'nucleus accumbens (ventral striatum)', role: 'Motivation, pleasure and reward.' },
      { id: 'mesocortical', label: 'Mesocortical', from: 'VTA', to: 'prefrontal cortex (DLPFC and VMPFC)', role: 'Cognition and executive function (DLPFC); emotion and affect (VMPFC).' },
      { id: 'nigrostriatal', label: 'Nigrostriatal', from: 'substantia nigra', to: 'striatum (basal ganglia)', role: 'Part of the extrapyramidal system: controls movement.' },
      { id: 'tubero', label: 'Tuberoinfundibular', from: 'hypothalamus', to: 'anterior pituitary', role: 'Tonically inhibits prolactin release.' },
      { id: 'thalamic', label: 'Thalamic', from: 'periaqueductal gray, ventral mesencephalon, hypothalamic nuclei and lateral parabrachial nucleus', to: 'thalamus', role: 'Not well known; may gate thalamic traffic for sleep and arousal.' }
    ],
    states: [
      { id: 'scz', label: 'Untreated schizophrenia', ch: 'ch04', sec: 's4-da-pathways', pages: '84–95',
        p: {
          mesolimbic: { lv: 'high', text: 'Hyperactive: **positive symptoms** (delusions, hallucinations).', cx: ['scz-positive'] },
          mesocortical: { lv: 'low', text: 'Hypoactive: **cognitive, negative and affective** symptoms.', cx: ['scz-negative', 'scz-cognitive', 'scz-affective'] },
          nigrostriatal: { lv: 'normal', text: 'Believed normal.' },
          tubero: { lv: 'normal', text: 'Relatively preserved: prolactin is held down as usual.' },
          thalamic: { lv: 'normal', text: 'No evidence of abnormality.' }
        } },
      { id: 'd2', label: 'D2 antagonist', ch: 'ch05', sec: 's5-negative', pages: '161–170',
        p: {
          mesolimbic: { lv: 'blocked', text: 'Positive symptoms improve, but reward is blocked too: apathy and anhedonia, the **secondary negative symptoms**.', cx: ['d2-antipsychotic', 'secondary-negative'] },
          mesocortical: { lv: 'blocked', text: 'Dopamine is already low here; blocking D2 can cause or worsen **negative, cognitive and affective** symptoms.', cx: ['secondary-negative'] },
          nigrostriatal: { lv: 'blocked', text: '**Drug-induced parkinsonism**, acute dystonia and akathisia; chronic blockade can lead to **tardive dyskinesia**.', cx: ['dip', 'dystonia', 'akathisia', 'td'] },
          tubero: { lv: 'blocked', text: 'Dopamine’s brake on prolactin is lost: **hyperprolactinemia** (galactorrhea, amenorrhea, gynecomastia).', cx: ['hyperprolactinemia'] },
          thalamic: { lv: 'unknown', text: 'The book describes no effect here.' }
        } },
      { id: '5ht2a', label: 'D2 antagonist + 5HT2A antagonism', ch: 'ch05', sec: 's5-three-pathways', pages: '184–189',
        p: {
          mesolimbic: { lv: 'blocked', text: '5HT2A antagonism lowers dopamine release in the emotional striatum: an antipsychotic action **independent** of D2 blockade.', cx: ['d2-antipsychotic'] },
          mesocortical: { lv: 'eased', text: '**More prefrontal dopamine**: may improve negative, cognitive and affective symptoms, though not robustly with every agent.' },
          nigrostriatal: { lv: 'eased', text: 'More dopamine is released and **competes with the D2 blocker**: fewer motor side effects.', cx: ['dip'] },
          tubero: { lv: 'eased', text: 'Serotonin’s push on prolactin is removed too, which **mitigates** the rise. Not with every agent: risperidone still raises prolactin.', cx: ['hyperprolactinemia'] },
          thalamic: { lv: 'unknown', text: 'The book describes no effect here.' }
        } },
      { id: 'pa', label: 'D2 partial agonist', ch: 'ch05', sec: 's5-pa', pages: '189–195',
        p: {
          mesolimbic: { lv: 'tuned', text: 'These agents sit close to the antagonist end, so excess signaling falls: **positive symptoms improve**.', cx: ['d2-antipsychotic'] },
          mesocortical: { lv: 'eased', text: 'Their **5HT1A partial agonism** raises prefrontal dopamine: may help negative, cognitive and affective symptoms.' },
          nigrostriatal: { lv: 'tuned', text: 'Only a very small amount of D2 signaling is needed to reduce **drug-induced parkinsonism**; **akathisia** is still common.', cx: ['akathisia'] },
          tubero: { lv: 'tuned', text: 'Lactotrophs are especially sensitive to the intrinsic activity: prolactin **falls** rather than rises.', cx: ['hyperprolactinemia'] },
          thalamic: { lv: 'unknown', text: 'The book describes no effect here.' }
        } }
    ]
  },

  /* Receptor ring: fixed sector order so any two rings line up. Only targets with a strength (`s`) are drawn. */
  ring: {
    min: 7,            // a drug gets a ring when at least this many of its targets have a strength
    start: 'clozapine',
    groups: [
      { id: '5ht', label: 'Serotonin', targets: ['5ht1a', '5ht1b1d', '5ht2a', '5ht2b', '5ht2c', '5ht3', '5ht4', '5ht5', '5ht6', '5ht7'] },
      { id: 'da', label: 'Dopamine', targets: ['d1', 'd2', 'd3', 'd4', 'd5'] },
      { id: 'ne', label: 'Adrenergic', targets: ['alpha1', 'alpha2'] },
      { id: 'hm', label: 'Histamine and muscarinic', targets: ['h1', 'm1', 'm2m3', 'm4'] },
      { id: 'tr', label: 'Transporters', targets: ['sert', 'net', 'dat'] },
      { id: 'ot', label: 'Other', targets: ['nmda', 'sigma', 'mor', 'dor', 'vssc'] }
    ]
  },

  questions: [
    { key: 'sp-antag', chs: ['ch02'], tag: 'Agonist spectrum', pages: '36–45',
      dia: { kind: 'spectrum', v: 0, agonist: true },
      q: 'A silent antagonist is added to a receptor that the natural full agonist is already stimulating. What happens to signal transduction?',
      choices: ['It falls below baseline', 'It returns to baseline', 'It stays at maximum', 'It settles at an intermediate set point', 'It stops completely, with no constitutive activity'],
      answer: 1,
      why: 'An antagonist has **no activity of its own**: it blocks the agonist and the receptor returns to the **baseline (no agonist)** state, constitutive activity unchanged.',
      whyNot: ['Going below baseline is what an **inverse agonist** does.', '', 'Maximum signaling would need the agonist to keep acting; the antagonist blocks it.', 'An intermediate set point is the mark of a **partial agonist**.', 'A silent antagonist leaves constitutive activity **unchanged**; only an inverse agonist abolishes it.'] },
    { key: 'sp-partial-bright', chs: ['ch02'], tag: 'Agonist spectrum', pages: '36–45',
      dia: { kind: 'spectrum', v: 0.5, agonist: true },
      q: 'In Stahl’s rheostat analogy, a partial agonist is added to a brightly lit room (abundant natural agonist). The partial agonist acts as a:',
      choices: ['Full agonist', 'Net agonist', 'Net antagonist', 'Inverse agonist', 'Silent antagonist'],
      answer: 2,
      why: 'With natural agonist present, a partial agonist **dims** signaling down to its own set point: a **net antagonist**.',
      whyNot: ['It can never reach maximum: no dose exceeds its built-in set point.', 'It is a net agonist only in the **dark** room, when natural agonist is absent.', '', 'An inverse agonist takes signaling **below baseline**; a partial agonist stays above it.', 'A silent antagonist returns the receptor to baseline; a partial agonist leaves signaling partway up.'] },
    { key: 'sp-inverse-flat', chs: ['ch02'], tag: 'Agonist spectrum', pages: '36–45',
      dia: { kind: 'spectrum', v: -1, agonist: false, flat: true },
      q: 'A receptor system has no constitutive activity, for example because receptor density is low. An inverse agonist there will look like:',
      choices: ['A partial agonist', 'A full agonist', 'An indirect agonist', 'An antagonist', 'A stabilizer'],
      answer: 3,
      why: 'With **no constitutive activity** to shut off, an inverse agonist has nothing to reduce and **looks like an antagonist**.',
      whyNot: ['A partial agonist raises signaling above baseline; an inverse agonist never does.', 'A full agonist gives maximum signaling: the opposite direction.', 'Indirect agonists boost the natural transmitter by blocking reuptake or breakdown.', '', '“Stabilizer” is another name for a **partial agonist**.'] },
    { key: 'sp-opposite', chs: ['ch02'], tag: 'Agonist spectrum', pages: '36–45',
      dia: { kind: 'spectrum', v: 1, agonist: false },
      q: 'Which drug type is the true opposite of an agonist?',
      choices: ['Inverse agonist', 'Silent antagonist', 'Partial agonist', 'Indirect agonist', 'Reuptake inhibitor'],
      answer: 0,
      why: 'An **inverse agonist** stabilizes the receptor in a totally inactive form and lowers signaling below baseline: the opposite of an agonist.',
      whyNot: ['', 'A common misconception: antagonists only **prevent** agonist action and have no activity of their own.', 'A partial agonist still raises signaling, only less than a full agonist.', 'An indirect agonist produces agonist action by boosting the natural transmitter.', 'Blocking reuptake is one way of acting as an **indirect agonist**.'] },
    { key: 'd2-almost', chs: ['ch05'], tag: 'D2 partial agonists', pages: '189–193',
      dia: { kind: 'spectrum', preset: 'd2', v: 0.14, agonist: true },
      q: 'Where on the D2 agonist spectrum do the partial agonists used for psychosis sit?',
      choices: ['Near the full agonist end', 'Exactly midway', 'Below baseline, as inverse agonists', 'At the full agonist end, like dopamine', 'Very close to the antagonist end'],
      answer: 4,
      why: 'They are **“almost” antagonists**, with just a whiff of intrinsic activity, which is enough to reduce motor side effects.',
      whyNot: ['That is where dopamine partial agonists for **Parkinson’s disease** sit.', 'Agents with more agonism than aripiprazole (bifeprunox, OPC4392) failed.', 'They keep a little intrinsic activity, so they stay above baseline.', 'Full agonism is “too hot”: it would worsen positive symptoms.', ''] },
    { key: 'd2-opc', chs: ['ch05'], tag: 'D2 partial agonists', pages: '189–193',
      dia: { kind: 'spectrum', preset: 'd2', v: 0.44, agonist: true },
      q: 'OPC4392 sat further toward the agonist end than aripiprazole. What happened in testing?',
      choices: ['Severe drug-induced parkinsonism', 'Positive symptoms worsened', 'Marked hyperprolactinemia', 'No effect on negative symptoms', 'It was approved for bipolar mania'],
      answer: 1,
      why: 'Too much agonist: negative symptoms improved with few motor effects, but **positive symptoms worsened**, and it was never marketed.',
      whyNot: ['It caused **few** motor effects; too much D2 block causes parkinsonism, not too much agonism.', '', 'Hyperprolactinemia follows D2 **blockade**; partial agonists lower prolactin.', 'Negative symptoms actually **improved**.', 'It was never marketed.'] },
    { key: 'd2-bif', chs: ['ch05'], tag: 'D2 partial agonists', pages: '189–193',
      dia: { kind: 'spectrum', preset: 'd2', v: 0.3, agonist: true },
      q: 'Bifeprunox had less agonist activity than OPC4392 but still more than aripiprazole. Why did it fail?',
      choices: ['Tardive dyskinesia', 'Agranulocytosis', 'Nausea and vomiting, with weaker effect on positive symptoms', 'QTc prolongation', 'Severe sedation'],
      answer: 2,
      why: 'Still too much agonist: **nausea and vomiting** and weaker efficacy for positive symptoms; the FDA did not approve it.',
      whyNot: ['Tardive dyskinesia follows chronic D2 **blockade**, not excess agonism.', 'Neutropenia is the hazard tied to **clozapine**, not a result of excess D2 agonism.', '', 'QTc problems are noted for other agents, not as the reason bifeprunox failed.', 'Sedation comes from H1, M1 and α1 blockade, not D2 agonism.'] },
    { key: 'd2-prl', chs: ['ch05'], tag: 'Prolactin', pages: '189–193',
      dia: { kind: 'pathways', state: 'pa', path: 'tubero' },
      q: 'A patient on a D2 antagonist has hyperprolactinemia. A D2 partial agonist is added. What does the book predict for prolactin?',
      choices: ['It rises further', 'It is unchanged', 'It rises, then plateaus', 'It falls', 'It falls only if an anticholinergic is added'],
      answer: 3,
      why: 'Lactotroph D2 receptors “see” partial agonists more as **agonists**, so all three in clinical use **lower** prolactin and can reverse the rise from a D2 antagonist.',
      whyNot: ['A further rise would need more D2 blockade at the lactotroph.', 'The intrinsic activity is enough to act on lactotrophs.', 'The book describes a reduction, not a plateau.', '', 'Anticholinergics are used for drug-induced parkinsonism, a nigrostriatal problem.'] },
    { key: 'oc-d2-range', chs: ['ch05'], tag: 'D2 occupancy', pages: '195–196, 201',
      dia: { kind: 'occupancy', target: 'd2', v: 70 },
      q: 'D2-targeting drugs for psychosis are dosed to occupy at least what share of D2 receptors?',
      choices: ['10–30%', '25–30%', '40–50%', '60–80%', 'Over 95%'],
      answer: 3,
      why: 'Dosing for psychosis aims for **60–80%** D2 occupancy, about 80% in the emotional striatum.',
      whyNot: ['10–30% is bupropion’s occupancy of striatal **dopamine transporters**.', '25–30% is what hypnotic **GABA-A** modulators need.', 'Lower than the 60–80% range the book gives for most agents.', '', 'Far above the range: the figure given for psychosis is about 80%, in the emotional striatum.'] },
    { key: 'oc-d2-low', chs: ['ch05'], tag: 'D2 occupancy', pages: '201',
      dia: { kind: 'occupancy', target: 'd2', v: 45 },
      q: 'Which three agents are antipsychotic at D2 occupancy below 60%?',
      choices: ['Haloperidol, fluphenazine, perphenazine', 'Lumateperone, quetiapine, clozapine', 'Risperidone, paliperidone, iloperidone', 'Aripiprazole, brexpiprazole, cariprazine', 'Olanzapine, asenapine, ziprasidone'],
      answer: 1,
      why: 'These three have the **widest 5HT2A–D2 separation**, so less D2 occupancy may be needed.',
      whyNot: ['These are high-potency D2 antagonists, not among the three agents named.', '', 'Not among the three agents named for the widest 5HT2A–D2 separation.', 'The partial agonists are not among the three agents named for the widest 5HT2A–D2 separation.', 'Not among the three agents named for the widest 5HT2A–D2 separation.'] },
    { key: 'oc-sert', chs: ['ch07'], tag: 'Transporter occupancy', pages: '298–301',
      dia: { kind: 'occupancy', target: 'sert', v: 85 },
      q: 'About how much of the serotonin transporter must an SSRI occupy to work?',
      choices: ['80–90%', '10–30%', '25–30%', 'About 50%', 'About 65%'],
      answer: 0,
      why: 'SSRIs must occupy perhaps **80–90%** of serotonin transporters.',
      whyNot: ['', '10–30% is bupropion at the dopamine transporter.', '25–30% is the figure for hypnotic GABA-A modulators.', 'About 50% is the figure for the **norepinephrine** transporter.', 'About 65% is the figure for dual orexin receptor antagonists.'] },
    { key: 'oc-hypnotic', chs: ['ch10'], tag: 'Hypnotic occupancy', pages: '426–430',
      dia: { kind: 'occupancy', target: 'gabaa', v: 28 },
      q: 'Which hypnotic mechanism needs the lowest receptor occupancy?',
      choices: ['Histamine H1 antagonism', 'Dual orexin receptor antagonism', 'GABA-A positive allosteric modulation', 'Serotonin antagonism', 'All need the same occupancy'],
      answer: 2,
      why: 'Hypnotic GABA-A modulators need only about **25–30%** occupancy, against about 65% for orexin antagonists and probably about 80% for histamine or serotonin antagonists.',
      whyNot: ['Histamine antagonists probably need about **80%** of one receptor.', 'Dual orexin receptor antagonists need about **65%**.', '', 'Serotonin antagonists, like histamine antagonists, probably need about **80%**.', 'The three thresholds differ: about 25–30%, 65% and 80%.'] },
    { key: 'pw-tubero', chs: ['ch04', 'ch05'], tag: 'Dopamine pathways', pages: '164–165',
      dia: { kind: 'pathways', state: 'd2', path: 'tubero' },
      q: 'D2 blockade in the highlighted pathway (hypothalamus to anterior pituitary) causes which effect?',
      choices: ['Drug-induced parkinsonism', 'Relief of positive symptoms', 'Emotional blunting', 'Tardive dyskinesia', 'Galactorrhea and amenorrhea'],
      answer: 4,
      why: 'The **tuberoinfundibular** pathway tonically inhibits prolactin; blocking its D2 receptors raises prolactin.',
      whyNot: ['Parkinsonism follows blockade in the **nigrostriatal** pathway.', 'Positive symptoms improve through the **mesolimbic** pathway.', 'Blunting follows mesolimbic and mesocortical blockade.', 'Tardive dyskinesia follows **chronic nigrostriatal** blockade.', ''] },
    { key: 'pw-nigro', chs: ['ch04', 'ch05'], tag: 'Dopamine pathways', pages: '165–170',
      dia: { kind: 'pathways', state: 'd2', path: 'nigrostriatal' },
      q: 'Acute D2 blockade in the highlighted pathway (substantia nigra to striatum) most commonly causes:',
      choices: ['Drug-induced parkinsonism', 'Hyperprolactinemia', 'Anhedonia', 'Weight gain', 'Sedation'],
      answer: 0,
      why: 'Blocking **nigrostriatal** D2 receptors reproduces Parkinson’s disease: tremor, rigidity and bradykinesia, the most common side effect of D2-targeting drugs.',
      whyNot: ['', 'Prolactin rises through the **tuberoinfundibular** pathway.', 'Anhedonia follows blockade of **mesolimbic** reward.', 'Weight gain is linked to **H1** and **5HT2C** blockade, off-target actions.', 'Sedation comes from **M1, H1 and α1** blockade.'] },
    { key: 'pw-mesolimbic', chs: ['ch04'], tag: 'Dopamine pathways', pages: '89–92',
      dia: { kind: 'pathways', state: 'scz', path: 'mesolimbic' },
      q: 'In the classic dopamine hypothesis, overactivity of the highlighted pathway (VTA to nucleus accumbens) produces:',
      choices: ['Cognitive symptoms', 'Negative symptoms', 'Positive symptoms', 'Hyperprolactinemia', 'Parkinsonism'],
      answer: 2,
      why: '**Mesolimbic** D2 hyperactivity is the classic explanation for delusions and hallucinations.',
      whyNot: ['Cognitive symptoms are tied to **low** mesocortical dopamine in the DLPFC.', 'Negative symptoms are tied to **low** mesocortical dopamine.', '', 'Prolactin is controlled by the tuberoinfundibular pathway, which is preserved.', 'Parkinsonism reflects too little nigrostriatal dopamine.'] },
    { key: 'pw-mesocortical', chs: ['ch04'], tag: 'Dopamine pathways', pages: '95',
      dia: { kind: 'pathways', state: 'scz', path: 'mesocortical' },
      q: 'Underactivity of the highlighted pathway (VTA to prefrontal cortex) is thought to underlie:',
      choices: ['Hallucinations and delusions', 'Tics and chorea', 'Galactorrhea', 'Cognitive, negative and affective symptoms', 'Sleep disturbance'],
      answer: 3,
      why: '**Mesocortical** hypodopaminergia: DLPFC for cognition and executive function, VMPFC for emotion and affect.',
      whyNot: ['Those are positive symptoms, from mesolimbic **over**activity.', 'Hyperkinetic movements reflect **too much** nigrostriatal dopamine.', 'That follows loss of tuberoinfundibular inhibition of prolactin.', '', 'Sleep and arousal are loosely linked to the **thalamic** pathway.'] },
    { key: 'pw-5ht2a-nigro', chs: ['ch05'], tag: '5HT2A antagonism', pages: '184–187',
      dia: { kind: 'pathways', state: '5ht2a', path: 'nigrostriatal' },
      q: 'Adding 5HT2A antagonism to D2 blockade does what in the highlighted nigrostriatal pathway?',
      choices: ['Lowers dopamine release, adding to the D2 block', 'Blocks D1 receptors in the direct pathway', 'Depletes dopamine by inhibiting VMAT2', 'Has no effect on dopamine', 'Raises dopamine release, which competes with the D2 blocker'],
      answer: 4,
      why: 'Here the glutamate neuron acts through a **GABA interneuron**, so 5HT2A antagonism **raises** dopamine in the motor striatum: fewer motor side effects.',
      whyNot: ['That is its effect in the **mesolimbic** pathway, where the wiring is direct.', 'The effect described runs through 5HT2A receptors on **glutamate** neurons, not through D1 receptors.', 'VMAT2 inhibition is the treatment for tardive dyskinesia, a different mechanism.', 'It changes dopamine in three pathways, in different directions.', ''] },
    { key: 'pw-secondary', chs: ['ch05'], tag: 'Dopamine pathways', pages: '162–164',
      dia: { kind: 'pathways', state: 'd2', path: 'mesolimbic' },
      q: 'Besides relieving positive symptoms, D2 blockade in the highlighted mesolimbic pathway can cause:',
      choices: ['Acute dystonia', 'Apathy and anhedonia', 'Gynecomastia', 'Orthostatic hypotension', 'Dry mouth and constipation'],
      answer: 1,
      why: 'The nucleus accumbens is the “pleasure center”: blocking D2 there also blocks reward, giving **secondary negative symptoms**.',
      whyNot: ['Dystonia follows **nigrostriatal** blockade.', '', 'Gynecomastia follows **tuberoinfundibular** blockade and high prolactin.', 'Orthostasis comes from **α1** blockade.', 'Those are **anticholinergic** (muscarinic) effects.'] }
  ]
};
