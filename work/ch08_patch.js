// Chapter 8 library enrichment: anxiety and trauma circuits and treatments.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch08', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };

  /* ---------------- targets ---------------- */
  h.facts('targets', 'gabaa', [F('366–367', 'Benzodiazepines enhance **phasic** inhibition at postsynaptic GABA-A receptors **in the amygdala** (less fear) and on CSTC **inhibitory interneurons** (less worry); they act **immediately**.', 's8-bzd')]);
  h.facts('targets', 'a2d', [F('366–368', 'α2δ ligands bind **open, overly active** N and P/Q channels in the amygdala and CSTC loops, cutting excess **glutamate** release to reduce fear and worry; anxiolytic in social anxiety and panic disorder.', 's8-a2d')]);
  h.push('targets', 'a2d', 'block', ['**Anxiolytic** actions (social anxiety, panic; approved for anxiety outside the US) (Chapter 8)']);
  h.facts('targets', '5ht1a', [F('368–370', '**Buspirone**’s partial agonism at pre- and postsynaptic 5HT1A receptors may enhance serotonergic input to the amygdala and CSTC circuits; its onset is **delayed**, implying receptor adaptation.', 's8-serotonin')]);
  h.facts('targets', 'alpha1', [F('370', 'Excess NE at postsynaptic α1 receptors in the amygdala may cause **nightmares and hyperarousal**; α1 antagonists (prazosin) at night reduce them in PTSD.', 's8-ne')]);
  h.facts('targets', 'beta-ar', [
    F('370', 'Excess NE at **β1** receptors in the amygdala and PFC may drive fear, panic and worry; sustained NET inhibition **downregulates β1** receptors.', 's8-ne'),
    F('375–376', '**β blockers** given soon after trauma may block **consolidation** of fear memories (reducing PTSD risk) and may disrupt **reconsolidation**; also used for **performance anxiety**.', 's8-novel')
  ]);
  h.push('targets', 'beta-ar', 'block', ['β blockers: **performance anxiety**; investigational prevention of fear consolidation/reconsolidation (Chapter 8)']);
  h.facts('targets', 'net', [F('370', 'NET inhibitors can **transiently worsen** anxiety, then reduce fear and worry as β1 receptors downregulate.', 's8-ne')]);
  h.facts('targets', 'sert', [F('368', 'Most SERT-blocking drugs (SSRIs, SNRIs) reduce fear and anxiety in GAD, panic disorder, social anxiety disorder, PTSD and OCD.', 's8-serotonin')]);
  h.facts('targets', 'nmda', [F('372–375', 'NMDA receptors embed **fear conditioning** via LTP in the lateral and central amygdala; boosting NMDA action during **exposure therapy** might strengthen **fear extinction** instead.', 's8-novel')]);
  h.facts('targets', 'crf', [F('365–367', '**CRF/HPA** is one of the regulators of the amygdala fear circuit; the amygdala–hypothalamus connection drives the endocrine output of fear.', 's8-amygdala')]);
  h.facts('targets', 'mor', [F('375', '**Opioids** given soon after trauma may mitigate consolidation of the traumatic memory and reduce the chance of PTSD.', 's8-novel')]);
  h.facts('targets', 'mao', [F('377', 'MAOIs are much neglected but can be **powerful in treatment-resistant panic disorder**.', 's8-panic')]);

  /* ---------------- neurotransmitters ---------------- */
  h.facts('nts', 'serotonin', [F('368', 'Serotonin innervates the **amygdala** and the whole **CSTC** loop, so serotonergic drugs can reduce both fear and worry.', 's8-serotonin')]);
  h.facts('nts', 'norepinephrine', [F('370', 'Locus coeruleus overactivity drives autonomic overdrive, **nightmares, hyperarousal, flashbacks and panic**, via α1 and β1 receptors.', 's8-ne')]);
  h.facts('nts', 'gaba', [F('366–367, 373', 'GABA regulates both fear and worry circuits; GABA interneurons of the **intercalated cell mass** gate fear output during **extinction**.', 's8-extinction')]);
  h.facts('nts', 'glutamate', [F('372–373', 'Fear conditioning strengthens **glutamate** synapses in the lateral and central amygdala; α2δ ligands reduce excess glutamate release in fear and worry circuits.', 's8-conditioning')]);
  h.push('nts', 'gaba', 'clinical', ['**Anxiety**: benzodiazepines boost GABA in amygdala and CSTC circuits (Chapter 8)']);

  /* ---------------- drugs ---------------- */
  const bzdFact = F('366–367, 377', 'Reduces fear in the amygdala and worry in CSTC loops by enhancing **phasic** GABA-A inhibition. In GAD: short term when starting an SSRI/SNRI, to “top up” a partial response, or intermittently for surges; avoid with **alcohol/substance abuse**. Less accepted in social anxiety; use with caution in PTSD.', 's8-gad');
  ['diazepam', 'alprazolam'].forEach(id => { h.facts('drugs', id, [bzdFact]); h.chapter(id, 'ch08', '366–367, 377'); });
  h.push('drugs', 'alprazolam', 'uses', ['GAD and panic disorder (Chapter 8)']);
  ['pregabalin', 'gabapentin'].forEach(id => {
    h.push('drugs', id, 'uses', ['**Anxiety**: shown in social anxiety and panic disorder; approved for anxiety in Europe and other countries, not the US; off-label add-on or alternative to benzodiazepines']);
    h.facts('drugs', id, [F('366–368, 377', 'Binds open, overactive N and P/Q channels in amygdala and CSTC circuits to block excess glutamate; useful when SSRIs/SNRIs or benzodiazepines fail, or combined with them in partial responders.', 's8-a2d')]);
    h.chapter(id, 'ch08', '366–368, 377');
  });
  h.set('drugs', 'buspirone', { uses: ['**Generalized anxiety disorder** (not the other anxiety/trauma disorders)', 'Augmentation of SSRIs/SNRIs in unipolar depression (not approved; less used than other 5HT1A agents)'] });
  h.facts('drugs', 'buspirone', [F('368–370', 'Anxiolytic onset is **delayed**, like SSRIs, implying adaptive receptor changes rather than acute occupancy.', 's8-serotonin')]);
  h.chapter('buspirone', 'ch08', '368–370, 377');
  h.facts('drugs', 'vilazodone', [F('368–370, 377', 'Should theoretically be **anxiolytic** (SERT inhibition + 5HT1A partial agonism); an off-label option for anxiety.', 's8-gad')]);
  h.chapter('vilazodone', 'ch08', '368–370, 377');
  ['mirtazapine', 'trazodone'].forEach(id => { h.facts('drugs', id, [F('377', 'Off-label option for **GAD** and for **panic attacks**.', 's8-gad')]); h.chapter(id, 'ch08', '377'); });
  h.facts('drugs', 'phenelzine', [F('377', 'MAOIs are much neglected but powerful in **treatment-resistant panic disorder**.', 's8-panic')]);
  h.chapter('phenelzine', 'ch08', '377');
  h.facts('drugs', 'sertraline', [F('377–378', 'Combined with **brexpiprazole** for PTSD in testing at publication.', 's8-ptsd')]);
  h.chapter('sertraline', 'ch08', '377–378');
  h.facts('drugs', 'brexpiprazole', [F('377–378', 'In testing with **sertraline** for PTSD at publication, with promising initial findings.', 's8-ptsd')]);
  h.chapter('brexpiprazole', 'ch08', '377–378');
  ['mdma', 'psilocybin', 'ketamine'].forEach(id => { h.facts('drugs', id, [F('376–377', 'Studied to **disrupt reconsolidation** of reactivated fear memories during psychotherapy (PTSD, anxiety, existential distress in terminal illness).', 's8-novel')]); h.chapter(id, 'ch08', '376–378'); });
  h.facts('drugs', 'morphine', [F('375', 'Opioids given soon after trauma may mitigate consolidation of the traumatic memory and reduce PTSD risk (investigational).', 's8-novel')]);
  h.chapter('morphine', 'ch08', '375');

  h.upsert('drugs', {
    id: 'prazosin', name: 'Prazosin', brand: 'Minipress', group: 'α1 antagonist', cls: 'α1-adrenergic antagonist', nbn: 'Norepinephrine α1 receptor antagonist', nts: ['norepinephrine'],
    chapters: [{ ch: 'ch08', pages: '370, 378' }],
    short: 'α1 blocker given at night for PTSD nightmares.',
    mechanism: 'Blocks postsynaptic **α1-adrenergic** receptors, through which excess norepinephrine in the amygdala may cause **nightmares** and hyperarousal.',
    targets: [T('alpha1', 'antagonist')],
    uses: ['**PTSD nightmares** and hyperarousal (given at night)'],
    facts: [F('370', 'The book spells it “prazocin.” A unique PTSD treatment: an α1 antagonist at night to prevent nightmares (p. 378).', 's8-ne')]
  }, { after: 'modafinil' });
  h.upsert('drugs', {
    id: 'hydroxyzine', name: 'Hydroxyzine', brand: 'Atarax; Vistaril', group: 'Antihistamine', cls: 'Sedating antihistamine', nbn: 'Histamine H1 receptor antagonist', nts: ['histamine'],
    chapters: [{ ch: 'ch08', pages: '377' }],
    short: 'Sedating antihistamine used off-label for anxiety.',
    mechanism: 'A **sedating antihistamine** (H1 antagonist).',
    targets: [T('h1', 'antagonist')],
    uses: ['Off-label treatment of **anxiety** (GAD)'],
    sideEffects: [{ e: 'Sedation', via: 'H1 antagonism' }]
  }, { after: 'prazosin' });

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch08', pages });
  db.circuits.push(
    C('anx-fear', 'Anxiety disorders and PTSD', 'Fear (panic, phobia)', '**Amygdala**-centered circuit', ['Serotonin', 'GABA', 'Glutamate', 'CRF', 'Norepinephrine'], ['Benzodiazepines (GABA-A)', 'α2δ ligands: [[drug:pregabalin|pregabalin]], [[drug:gabapentin|gabapentin]]', 'SSRIs/SNRIs; [[drug:buspirone|buspirone]] (GAD)'], '362–368'),
    C('anx-worry', 'Anxiety disorders and PTSD', 'Worry (anxious misery, apprehensive expectation, obsessions)', '**CSTC** loop from the **DLPFC** through striatum and thalamus', ['Serotonin', 'GABA', 'Dopamine', 'Norepinephrine', 'Glutamate'], ['Benzodiazepines', 'α2δ ligands', 'SSRIs/SNRIs', 'NET inhibitors (delayed, via β1 downregulation)'], '365–370'),
    C('anx-affect', 'Anxiety disorders and PTSD', 'Feeling of fear', 'Amygdala ↔ **orbitofrontal** and **anterior cingulate** cortex', ['Serotonin', 'GABA', 'Norepinephrine'], ['Anxiolytics that dampen amygdala output'], '364'),
    C('anx-avoidance', 'Anxiety disorders and PTSD', 'Avoidance, freezing, fight or flight', 'Amygdala ↔ **periaqueductal gray**', ['GABA', 'Glutamate'], ['Anxiolytics', 'Exposure-based CBT'], '364'),
    C('anx-endocrine', 'Anxiety disorders and PTSD', 'Cortisol surge (chronic: cardiometabolic risk)', 'Amygdala → **hypothalamus** (HPA axis)', ['CRF'], ['Reduce chronic fear activation'], '364'),
    C('anx-breathing', 'Panic and anxiety', 'Shortness of breath, smothering, asthma exacerbation', 'Amygdala → **parabrachial nucleus**', ['Glutamate', 'GABA'], ['Anxiolytics for panic: SSRIs/SNRIs, benzodiazepines, α2δ ligands'], '364'),
    C('anx-autonomic', 'Anxiety disorders and PTSD', 'Tachycardia, raised BP, sweating, tremor', 'Amygdala ↔ **locus coeruleus**', ['Norepinephrine'], ['NET inhibitors (delayed)', 'β blockers for performance anxiety'], '364–365, 370'),
    C('ptsd-reexperiencing', 'PTSD', 'Re-experiencing, flashbacks', '**Hippocampus** → amygdala', ['Norepinephrine', 'Glutamate'], ['Exposure therapy', 'SSRIs; investigational reconsolidation blockade (MDMA, β blockers)'], '364–365, 376–378'),
    C('ptsd-nightmares', 'PTSD', 'Nightmares and hyperarousal', 'Locus coeruleus → amygdala **α1/β1** receptors', ['Norepinephrine'], ['[[drug:prazosin|Prazosin]] (α1 antagonist) at night'], '370, 378')
  );
};
