// Chapter 5 library enrichment: drugs for psychosis with binding profiles, movement-disorder drugs, targets, circuits.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch05', pages, text, sec });
  const MAP = { D1: 'd1', D2: 'd2', D3: 'd3', D4: 'd4', D5: 'd5', '5HT1A': '5ht1a', '5HT1B': '5ht1b1d', '5HT1D': '5ht1b1d', '5HT2A': '5ht2a', '5HT2B': '5ht2b', '5HT2C': '5ht2c',
    '5HT3': '5ht3', '5HT4': '5ht4', '5HT5': '5ht5', '5HT5A': '5ht5', '5HT6': '5ht6', '5HT7': '5ht7', H1: 'h1', M1: 'm1', M2: 'm2m3', M3: 'm2m3', M4: 'm4',
    NET: 'net', SERT: 'sert', DAT: 'dat', 'σ': 'sigma', 'σ2': 'sigma', TAAR1: 'taar1' };
  const SKIP = ['5HT1E', '5HT1F', 'H2', 'M5'];
  // Parse a strip like "D2:3 α1A:3" into merged targets with book-derived strength (plus signs → 1–4).
  function P(spec, act) {
    const out = {}, order = [];
    spec.trim().split(/\s+/).forEach(tok => {
      const [lab, sRaw] = tok.split(':');
      if (SKIP.includes(lab)) return;
      let id = MAP[lab];
      if (!id && /^α1/.test(lab)) id = 'alpha1';
      if (!id && /^α2/.test(lab)) id = 'alpha2';
      if (!id) throw new Error('unmapped ' + lab);
      const s = sRaw ? Math.min(4, +sRaw) : undefined;
      if (!out[id]) { out[id] = { labs: [], s }; order.push(id); }
      out[id].labs.push(lab);
      if (s != null && (out[id].s == null || s > out[id].s)) out[id].s = s;
    });
    return order.map(id => {
      const o = out[id];
      const a = (act && act[id]) || (['net', 'sert', 'dat'].includes(id) ? 'inhibitor' : id === '5ht1a' ? 'partial agonist' : id === 'taar1' ? 'agonist' : 'antagonist');
      const labs = [...new Set(o.labs)];
      const subNote = ['alpha1', 'alpha2', '5ht1b1d', 'm2m3'].includes(id) && labs.some(l => /[A-D]$|^5HT1[BD]$|^M[23]$/.test(l)) ? labs.join(', ') : '';
      const note = [subNote, act && act['note:' + id]].filter(Boolean).join('; ');
      const r = { t: id, action: a };
      if (o.s != null) r.s = o.s;
      if (note) r.note = note;
      return r;
    });
  }

  /* ---------------- new and enriched targets ---------------- */
  h.upsert('targets', {
    id: 'taar1', name: 'Trace amine-associated receptor 1 (TAAR1)', short: 'TAAR1', family: 'G-protein-linked receptor', ntLabel: 'Trace amines',
    summary: 'The main human receptor for trace amines, expressed in monoamine brainstem centers and projection areas. Agonists are a proposed antipsychotic mechanism that tames dopamine without blocking D2.',
    location: 'Dorsal raphe, VTA and monoamine projection areas',
    stim: ['Heterodimerizes with **D2** and biases signaling toward **Gi**: less presynaptic dopamine synthesis and release', 'Postsynaptically less **β-arrestin 2/GSK-3** signaling', 'Proposed **antipsychotic** (and antimanic) action without D2 blockade'],
    facts: [F('241–242', 'Trace amines (β-phenylethylamine, p-tyramine, tryptamine, p-octopamine, p-synephrine) form when the tyrosine or tryptophan hydroxylase step is skipped, are not stored in vesicles and are not released on firing; they are called the **“rheostat”** of dopamine, glutamate and serotonin transmission. Six human TAARs exist (1, 2, 5, 6, 8, 9); TAAR1 is the main one.', 's5-future')]
  }, { after: 'ox' });
  h.upsert('targets', {
    id: 'sigma', name: 'Sigma (σ) receptors', short: 'σ', family: 'Other', ntLabel: 'None (non-opioid binding sites)',
    summary: 'Binding sites shown on the strips of haloperidol (σ) and roluperidone (σ2 antagonism).',
    facts: [F('204, 241', 'Haloperidol binds a site labelled **σ** in Figure 5-29 (the caption calls it “omega”); **roluperidone** combines 5HT2A antagonism with **σ2** antagonism.', 's5-first-agents')]
  });
  h.upsert('targets', {
    id: 'mor', name: 'μ-Opioid receptor', short: 'μ-opioid', family: 'G-protein-linked receptor', nt: 'endorphin',
    summary: 'The receptor for β-endorphin and morphine. In Chapter 5 its antagonist samidorphan is paired with olanzapine to limit weight gain; opioid pharmacology is covered later.',
    block: ['**Samidorphan** with olanzapine: reduces olanzapine-induced **weight gain** (Chapter 5)'],
    facts: [F('201', 'The μ-opioid antagonist **samidorphan** combined with olanzapine was a new agent on the horizon to reduce olanzapine-induced weight gain.', 's5-metabolic')]
  }, { after: 'cb1' });
  h.upsert('targets', {
    id: 'pde', name: 'Phosphodiesterase types 9 and 10', short: 'PDE9/10', family: 'Enzyme', nt: 'dopamine',
    summary: 'Second-messenger enzymes downstream of D1 and D2 receptors; inhibitors are in development as a novel way to blunt hyperactive dopamine signaling.',
    block: ['Proposed: effects downstream similar to **D2 blockade**, perhaps more selective for hyperactive dopamine neurons'],
    facts: [F('242', 'Inhibiting PDE9/10 alters the signal transduction cascade of dopamine at **D1 and D2** receptors; several drugs are in development.', 's5-future')]
  }, { after: 'dao' });

  h.facts('targets', 'd2', [
    F('161–162', 'By the 1970s, **D2 antagonism** in the mesolimbic/mesostriatal pathway was recognized as the key property of all neuroleptics.', 's5-history'),
    F('170–174', 'Chronic blockade causes **upregulated, supersensitive** indirect-pathway D2 receptors: the proposed mechanism of **tardive dyskinesia** (too much “go”).', 's5-td'),
    F('189–193', '**Partial agonists** for psychosis sit just next to antagonists on the spectrum; a tiny amount of intrinsic activity reduces motor effects, and lactotroph D2 receptors read them as agonists (prolactin **falls**).', 's5-pa'),
    F('195, 201', 'Drugs are dosed to occupy **60–80%** of D2 receptors for psychosis (about 80% in the emotional striatum); lumateperone, quetiapine and clozapine work below 60%.', 's5-binding')
  ]);
  h.push('targets', 'd2', 'block', ['Mesolimbic reward blockade: **secondary negative symptoms** (neuroleptic-induced deficit syndrome)', 'Acute nigrostriatal blockade: **acute dystonia**, **akathisia**, rarely **NMS**']);
  h.push('targets', 'd2', 'stim', ['**Partial agonism** (aripiprazole, brexpiprazole, cariprazine): antipsychotic with less DIP and **lower prolactin**; some **akathisia**']);
  h.facts('targets', 'd3', [F('202–203, 239–241', '**Cariprazine** and **blonanserin** have higher affinity for D3 than dopamine itself; sulpiride and amisulpride add D3 antagonist actions. D3 antagonism/partial agonism may improve **negative, affective and cognitive** symptoms by raising prefrontal dopamine.', 's5-pips')]);
  h.set('targets', 'd3', { stim: ['**Partial agonism** (cariprazine): may improve **negative symptoms**, mood, cognition and reward/substance use (preclinical)'], block: ['Antagonism of limbic D3: may reduce emotional-striatum overactivity; at somatodendritic D3: more **prefrontal dopamine**', 'Candidate **antidepressant** mechanism (sulpiride, amisulpride; Chapter 7)'] });
  h.facts('targets', 'd4', [F('236–237', '**Lurasidone** binds D4 most potently of all its targets; the effects of D4 binding are **not well understood**.', 's5-dones')]);
  h.facts('targets', '5ht2a', [
    F('184–187', 'On three populations of cortical glutamate neurons: blocking them **lowers** mesostriatal dopamine (antipsychotic), but **raises** nigrostriatal (fewer motor effects) and mesocortical dopamine (negative/cognitive/affective benefit).', 's5-three-pathways'),
    F('187–189', 'On pituitary **lactotrophs**, serotonin at 5HT2A stimulates prolactin, so 5HT2A antagonism offsets D2-blocker hyperprolactinemia.', 's5-5ht2a-prolactin'),
    F('204–222', 'Almost all drugs for psychosis bind **5HT2A more potently than D2**, except the D2 partial agonists.', 's5-binding')
  ]);
  h.push('targets', '5ht2a', 'block', ['Added to D2 blockade: **less DIP**, **less prolactin**, possible gains in positive and **negative** symptoms (Chapter 5)', 'Helps **akathisia**']);
  h.facts('targets', '5ht1a', [F('193–195', 'The **brake** on cortical glutamate neurons (5HT2A is the accelerator): partial agonism releases dopamine in motor striatum and prefrontal cortex, reducing motor effects and helping negative and affective symptoms. Brexpiprazole’s most potent property.', 's5-5ht1a')]);
  h.facts('targets', '5ht2c', [F('198–199', 'With **H1** antagonism, 5HT2C antagonism is linked to **weight gain** (clozapine, olanzapine, quetiapine, mirtazapine); it is also a candidate antidepressant property.', 's5-metabolic')]);
  h.push('targets', '5ht2c', 'block', ['With H1 antagonism: **weight gain** (Chapter 5)']);
  h.facts('targets', 'h1', [F('181, 198', 'Blocking H1 adds **weight gain and sedation**; with 5HT2C blockade it drives appetite on the metabolic highway. Quetiapine at 50 mg acts almost only here.', 's5-fga')]);
  h.facts('targets', 'm1', [F('166–169', 'Blocking **M1** relieves **drug-induced parkinsonism** by restoring the striatal dopamine–acetylcholine balance, at the cost of anticholinergic burden; an IM anticholinergic relieves **acute dystonia**.', 's5-motor')]);
  h.push('targets', 'm1', 'block', ['Treats **drug-induced parkinsonism** and **acute dystonia** (Chapter 5)', 'Strong muscarinic binding: **clozapine, olanzapine, quetiapine**; constipation, **paralytic ileus**, sialorrhea (clozapine)']);
  h.facts('targets', 'm4', [F('242', '**Xanomeline** (M4/M1 agonist) lowers VTA dopamine firing and raises prefrontal dopamine; combined with peripheral **trospium**.', 's5-future')]);
  h.facts('targets', 'm2m3', [F('242', '**Trospium**, which does not enter the brain, blocks peripheral M2/M3 effects of xanomeline.', 's5-future')]);
  h.facts('targets', 'alpha1', [F('181, 236', 'α1 blockade adds **sedation** and **orthostatic hypotension** (iloperidone, paliperidone, clozapine, quetiapine); it may also lower DIP risk (iloperidone) and help agitation (brexpiprazole).', 's5-fga')]);
  h.facts('targets', 'alpha2', [F('195, 208', 'α2 antagonism is a candidate **antidepressant** property of several drugs for psychosis (risperidone, quetiapine via norquetiapine, brexpiprazole), though α1 blockade can cancel it.', 's5-mania-dep')]);
  h.facts('targets', '5ht7', [F('195, 236', '5HT7 antagonism is a candidate antidepressant mechanism; **lurasidone** binds 5HT7 more potently than D2.', 's5-dones')]);
  h.facts('targets', '5ht6', [F('213', 'Clozapine, olanzapine, asenapine and zotepine bind 5HT6 about as potently as or more than D2; ziprasidone and iloperidone also bind it.', 's5-binding')]);
  h.facts('targets', '5ht3', [F('212', 'The pines bind 5HT3 weakly; the dones not at all; aripiprazole weakly. 5HT3 antagonism is a candidate antidepressant property.', 's5-binding')]);
  h.facts('targets', 'net', [F('227–229', '**Norquetiapine** inhibits NET, a key part of quetiapine’s antidepressant action; ziprasidone and zotepine weakly inhibit NET.', 's5-pines')]);
  h.facts('targets', 'sert', [F('237', '**Lumateperone** binds SERT about as potently as D2; ziprasidone binds it weakly.', 's5-dones')]);
  h.facts('targets', 'vmat2', [
    F('174–179', 'Only in **CNS** neurons (VMAT1 is also peripheral). **Reserpine** irreversibly blocks both; tetrabenazine-type drugs reversibly block only VMAT2 and preferentially deplete **dopamine**. Perhaps **> 90%** inhibition is needed to treat TD.', 's5-vmat2')
  ]);
  h.push('targets', 'vmat2', 'block', ['Treats **tardive dyskinesia** by trimming dopamine “go” in direct and indirect pathways (Chapter 5)', 'Tetrabenazine: peak-dose **sedation** and **DIP**, depression/suicide risk in Huntington’s', 'Reserpine (with VMAT1): orthostatic hypotension, stuffy nose, itching, GI effects']);
  h.facts('targets', 'nmda', [F('169, 237', '**Amantadine**’s weak NMDA antagonism may explain its benefit in DIP; NRX101 pairs the glycine-site agent **D-cycloserine** with lurasidone.', 's5-motor')]);
  h.facts('targets', 'cyp2d6', [F('175–176', 'Inactivates tetrabenazine’s dihydro metabolites; **deuteration** makes deutetrabenazine a poorer 2D6 substrate, and tetrabenazine dosing above standard levels needs 2D6 genotyping.', 's5-vmat2')]);
  h.facts('targets', 'gsk3', [F('241–242', 'Postsynaptic D2 overstimulation signals through **β-arrestin 2** to GSK-3; too much GSK-3 may be linked to mania and psychosis, and TAAR1 agonism may reduce it.', 's5-future')]);
  h.facts('targets', 'dao', [F('242', 'Inhibiting DAO to boost D-serine and NMDA function is still being pursued for schizophrenia.', 's5-future')]);

  /* ---------------- neurotransmitters ---------------- */
  h.facts('nts', 'dopamine', [
    F('161–170', 'D2 blockade in each pathway: mesolimbic → antipsychotic and **secondary negative symptoms**; mesocortical → worse negative/cognitive symptoms; tuberoinfundibular → **hyperprolactinemia**; nigrostriatal → **DIP, dystonia, akathisia, NMS, TD**.', 's5-negative'),
    F('166–167', 'In the motor striatum dopamine and **acetylcholine** are reciprocal: dopamine at D2 suppresses ACh release from cholinergic interneurons.', 's5-motor')
  ]);
  h.facts('nts', 'acetylcholine', [F('166–169', 'D2 blockade **disinhibits** striatal ACh release, contributing to DIP; anticholinergics restore the balance. Xanomeline’s M4/M1 agonism is a new antipsychotic mechanism.', 's5-motor')]);
  h.facts('nts', 'histamine', [F('181–182', 'With ACh and NE, histamine drives **cortical arousal**; H1 blockade by drugs for psychosis causes sedation and weight gain.', 's5-fga')]);
  h.facts('nts', 'serotonin', [F('184–195', '5HT2A antagonism and 5HT1A partial agonism at cortical glutamate neurons reshape downstream dopamine release: the basis of the so-called atypical drugs.', 's5-three-pathways')]);

  /* ---------------- drugs ---------------- */
  const FGA = 'D2 antagonist (first generation)', SDA = '5HT2A/D2 antagonist', DPA = 'D2/5HT1A partial agonist';
  const fgaSE = [{ e: 'Drug-induced parkinsonism, dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' }, { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' }, { e: 'Secondary negative symptoms', via: 'Mesolimbic/mesocortical D2 blockade' }];
  function fga(id, name, brand, comment, extra) {
    return Object.assign({ id, name, brand, group: FGA, cls: 'Conventional (first-generation) antipsychotic', nbn: 'Dopamine D2 receptor antagonist',
      short: 'Early D2 antagonist (Table 5-1): ' + comment + '.',
      mechanism: 'A D2 antagonist from the earliest generation of drugs for psychosis (Table 5-1). Its antipsychotic action comes from blocking mesolimbic/mesostriatal **D2** receptors; side effects reflect D2 blockade in other pathways plus off-target M1, H1 and α1 actions.',
      nts: ['dopamine'], targets: [{ t: 'd2', action: 'antagonist' }], uses: ['Psychosis (schizophrenia) and other D2-antagonist uses'], sideEffects: fgaSE,
      chapters: [{ ch: 'ch05', pages: '179–181' }], facts: [F('180', 'Table 5-1: ' + comment + '.', 's5-fga')] }, extra || {});
  }
  h.upsert('drugs', fga('chlorpromazine', 'Chlorpromazine', 'Thorazine', 'low potency', {
    aka: ['Largactil'], short: 'The first D2 antagonist; a sedating phenothiazine with many receptor actions.',
    mechanism: 'A **phenothiazine** discovered by serendipity in the 1950s while being tested as an antihistamine; its antipsychotic action is **D2 antagonism**. Originally branded **Largactil** for its large number of actions: potent **α1, D3 and H1** binding plus many serotonin and muscarinic receptors (Figure 5-27).',
    targets: P('α1:3 D3:3 H1:3 D2:3 5HT2A:2 D4:2 5HT2C:2 5HT6:2 5HT7:2 M5:2 M1:2 M3:2 M4:2 D1:2 5HT5A:1 D5:1 H2:1 M2:1 5HT1E:1 5HT1D:1 α2:1'),
    uses: ['Psychosis', 'Short-term oral or short-acting **IM** use for **agitation** or sudden worsening, often on top of a daily drug, exploiting its sedation'],
    sideEffects: fgaSE.concat([{ e: 'Marked sedation', via: 'M1 + H1 + α1 antagonism' }, { e: 'Anticholinergic effects; ileus risk (e.g., with clozapine)', via: 'Muscarinic antagonism' }, { e: 'Weight gain', via: 'H1 antagonism' }, { e: 'Orthostatic hypotension', via: 'α1 antagonism' }]),
    chapters: [{ ch: 'ch05', pages: '161, 180–182, 201–202' }],
    facts: [F('161', 'Its observed improvement of psychosis out of proportion to sedation led to the discovery of **D2 antagonism** as the antipsychotic mechanism.', 's5-history'), F('180', 'Table 5-1: low potency.', 's5-fga'), F('201–202', 'Often prescribed to exploit its **sedation**, short term orally or IM for agitation.', 's5-first-agents')]
  }), { after: 'mirtazapine' });
  h.upsert('drugs', fga('cyamemazine', 'Cyamemazine', 'Tercian', 'popular in France; not available in the US'), { after: 'chlorpromazine' });
  h.upsert('drugs', fga('flupenthixol', 'Flupenthixol', 'Depixol', 'depot; not available in the US'), { after: 'cyamemazine' });
  h.upsert('drugs', fga('fluphenazine', 'Fluphenazine', 'Prolixin', 'high potency; depot', {
    short: 'High-potency phenothiazine D2 antagonist with short- and long-acting forms.',
    mechanism: 'A **phenothiazine** D2 antagonist, more potent and **less sedating** than chlorpromazine, with potent **D3, 5HT7 and α1** actions (Figure 5-28).',
    targets: P('D2:4 D3:4 5HT7:3 α1:3 D5:2 5HT2A:2 α2C:2 H1:2 5HT6:2 D4:2 D1:2 α2B:2 α2A:1 5HT1B:1 5HT1D:1 M5:1 5HT1E:1 H2:1 5HT1A:1 5HT2C:1', { '5ht1a': 'antagonist' }),
    uses: ['Psychosis; short- and **long-acting** (depot) formulations', '**Plasma level** monitoring may be useful'],
    chapters: [{ ch: 'ch05', pages: '180, 202–203' }],
    facts: [F('180', 'Table 5-1: high potency; depot.', 's5-fga'), F('202–203', 'Has short- and long-acting formulations; one of the agents for which plasma drug levels may be useful.', 's5-first-agents')]
  }), { after: 'flupenthixol' });
  h.upsert('drugs', fga('haloperidol', 'Haloperidol', 'Haldol', 'high potency; depot', {
    short: 'One of the most potent D2 antagonists; little anticholinergic action, so more DIP.',
    mechanism: 'One of the **most potent D2 antagonists**, also binding σ, D3 and α1 sites (Figure 5-29). It has **relatively little anticholinergic or antihistamine** binding, so it is less sedating but more likely to cause drug-induced parkinsonism.',
    targets: P('D2:3 σ:3 D3:3 α1:3 D4:2 5HT2A:1 D1:1 5HT1B:1 α2C:1 α2B:1 M5:1 5HT7:1 α2A:1', { sigma: 'binds', 'note:sigma': 'Labelled σ in Figure 5-29; the caption says “omega”; action not specified' }),
    uses: ['Psychosis; short- and **long-acting** (depot) formulations', '**Plasma level** monitoring may be useful'],
    sideEffects: [{ e: 'Drug-induced parkinsonism (more likely)', via: 'Potent D2 blockade with little built-in anticholinergic action' }, { e: 'Acute dystonia, akathisia; TD with chronic use', via: 'Nigrostriatal D2 blockade' }, { e: 'Hyperprolactinemia', via: 'Tuberoinfundibular D2 blockade' }],
    chapters: [{ ch: 'ch05', pages: '180–181, 202–204' }],
    facts: [F('180', 'Table 5-1: high potency; depot.', 's5-fga'), F('181', 'Has relatively little anticholinergic or antihistaminic binding, illustrating why D2 antagonists differ in side effects more than in efficacy.', 's5-fga'), F('202', 'Less sedating than some others; plasma levels may be useful.', 's5-first-agents')]
  }), { after: 'fluphenazine' });
  h.upsert('drugs', fga('loxapine', 'Loxapine', 'Loxitane', 'listed among the earliest agents'), { after: 'haloperidol' });
  h.upsert('drugs', fga('mesoridazine', 'Mesoridazine', 'Serentil', 'low potency; QTc issues; discontinued'), { after: 'loxapine' });
  h.upsert('drugs', fga('perphenazine', 'Perphenazine', 'Trilafon', 'high potency'), { after: 'mesoridazine' });
  h.upsert('drugs', fga('pimozide', 'Pimozide', 'Orap', 'high potency; Tourette syndrome; QTc issues; second line', { uses: ['**Tourette syndrome**; psychosis (second line)'] }), { after: 'perphenazine' });
  h.upsert('drugs', fga('pipothiazine', 'Pipothiazine', 'Piportil', 'depot; not available in the US'), { after: 'pimozide' });
  h.upsert('drugs', fga('sulpiride', 'Sulpiride', 'Dolmatil', 'not available in the US', {
    short: 'D2 antagonist with D3 antagonist/partial agonist actions; popular outside the US.',
    mechanism: 'A D2 antagonist with **D3 antagonist/partial agonist** actions (Figure 5-30). At usual doses it causes motor effects and prolactin elevation; at **lower** doses it may be activating and help **negative symptoms and depression**, with D3 action a candidate explanation.',
    targets: P('D3:2 D2:2', { d3: 'antagonist', 'note:d3': 'Antagonist/partial agonist' }),
    uses: ['Psychosis (popular in countries such as the **UK**; may be better tolerated than other original agents)', 'Possibly **negative symptoms** and **depression** at low doses'],
    chapters: [{ ch: 'ch05', pages: '180, 202–205' }],
    facts: [F('202–203', 'May be activating at lower doses with efficacy for negative symptoms and depression for unclear reasons; D3 antagonism/partial agonism is a candidate explanation.', 's5-first-agents')]
  }), { after: 'pipothiazine' });
  h.upsert('drugs', fga('thioridazine', 'Thioridazine', 'Mellaril', 'low potency; QTc issues; second line'), { after: 'sulpiride' });
  h.upsert('drugs', fga('thiothixene', 'Thiothixene', 'Navane', 'high potency'), { after: 'thioridazine' });
  h.upsert('drugs', fga('trifluoperazine', 'Trifluoperazine', 'Stelazine', 'high potency'), { after: 'thiothixene' });
  h.upsert('drugs', fga('zuclopenthixol', 'Zuclopenthixol', 'Clopixol', 'depot; not available in the US'), { after: 'trifluoperazine' });
  h.upsert('drugs', {
    id: 'amisulpride', name: 'Amisulpride', group: FGA, cls: 'Benzamide D2/D3 antagonist', nbn: 'Dopamine D2/D3 receptor antagonist',
    short: 'Sulpiride relative with D3 and weak 5HT7 actions; marketed outside the US.',
    mechanism: 'Structurally related to sulpiride. A D2 antagonist with some **D3 antagonist** and weak **5HT7 antagonist** actions (Figure 5-31). Early preclinical data suggest it may favor **mesolimbic/mesostriatal** over nigrostriatal receptors, which might mean fewer motor side effects.',
    nts: ['dopamine'], targets: P('D2:3 D3:3 5HT2B:2 5HT7:1'),
    uses: ['Psychosis (outside the US)', 'Reported efficacy for **negative symptoms** and **depression** at low doses'],
    sideEffects: [{ e: 'Dose-dependent QTc prolongation', via: 'Noted alongside iloperidone, zotepine and sertindole' }],
    chapters: [{ ch: 'ch05', pages: '203, 205, 236' }],
    facts: [F('203', 'D3 antagonism and 5HT7 antagonism may explain its negative-symptom and antidepressant actions; its active isomer is in early clinical testing in the US.', 's5-first-agents')]
  }, { after: 'zuclopenthixol' });

  // ---- the pines ----
  h.set('drugs', 'clozapine', {
    group: SDA, cls: 'Atypical antipsychotic (a “pine”)', nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist (multimodal)',
    short: 'Gold standard for treatment-resistant schizophrenia; the only antipsychotic shown to reduce suicide.',
    mechanism: 'A 5HT2A/D2 antagonist whose many other binding properties are mostly **more potent than D2** (α1, 5HT2B, M1, H1, 5HT2A, 5HT6, 5HT2C, M4 and others; Figure 5-43). It occupies **fewer D2 receptors** than other drugs at therapeutic doses, so its gold-standard efficacy probably comes from an unknown **non-D2** mechanism.',
    targets: P('α1A:3 α1B:3 5HT2B:3 M1:3 H1:2 5HT2A:2 5HT6:2 5HT2C:2 M4:2 α2C:2 α2B:2 D4:2 M3:2 5HT7:2 M2:1 α2A:1 5HT1A:1 D2:1 5HT3:1 D1:1 D3:1 5HT1B:1 5HT1E:1 5HT1D:1', { m4: 'binds', 'note:m4': 'Action not specified in the book' }),
    uses: ['**Treatment-resistant schizophrenia** (gold standard)', 'Reduces **suicide** risk in schizophrenia', 'May help **aggression and violence** in psychotic patients (Chapter 4)', 'May **treat tardive dyskinesia**'],
    sideEffects: [{ e: '**Neutropenia** (blood count monitoring)', via: 'Unknown mechanism' }, { e: 'Constipation, **paralytic ileus**, **sialorrhea**', via: 'Profound muscarinic blockade' }, { e: 'Sedation, orthostasis, tachycardia', via: 'M1, H1 and α1 antagonism' }, { e: '**Seizures** (high doses)', via: 'Dose-related' }, { e: 'Greatest **weight gain** and cardiometabolic risk', via: 'H1 + 5HT2C antagonism plus insulin resistance' }, { e: '**Myocarditis**, cardiomyopathy, interstitial nephritis; DRESS, serositis', via: 'Unknown mechanism' }],
    pearls: ['Little motor effect, **no prolactin** elevation, does not seem to cause TD', 'Rare “awakenings” to near-normal function', 'Underused; finger-stick point-of-care counts and **plasma levels** help'],
    updates: [{ year: '2025', title: 'Clozapine REMS removed', text: 'The FDA eliminated the clozapine REMS in 2025; ANC reporting to a REMS program is no longer required before dispensing, but the FDA still advises ANC monitoring per the prescribing information.', source: 'FDA; REMS eliminated effective June 13, 2025' }]
  });
  h.facts('drugs', 'clozapine', [F('222–225', 'Table 5-2 lists side effects needing expert management: neutropenia, constipation/paralytic ileus, sedation/orthostasis/tachycardia, sialorrhea, seizures, weight gain/dyslipidemia/hyperglycemia, myocarditis/cardiomyopathy/interstitial nephritis, DRESS/serositis.', 's5-pines'), F('219', 'One of the three agents with the widest 5HT2A–D2 separation and **D2 occupancy below 60%** at antipsychotic doses.', 's5-binding')]);
  h.chapter('clozapine', 'ch05', '222–225');
  const pine = (id, name, brand, extra) => Object.assign({ id, name, brand, group: SDA, cls: 'Atypical antipsychotic (a “pine”)', nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist', nts: ['dopamine', 'serotonin'] }, extra);
  h.upsert('drugs', pine('olanzapine', 'Olanzapine', 'Zyprexa', {
    short: 'Probably the next most effective after clozapine; high metabolic risk.',
    mechanism: 'A **5HT2A/D2 antagonist** whose strongest binding is at **H1 and 5HT2A** (Figure 5-44). **5HT2C** antagonism may help mood and cognition, and with H1 antagonism contributes to **weight gain**. Strong muscarinic binding.',
    targets: P('H1:3 5HT2A:3 5HT6:2 5HT2B:2 5HT2C:2 M1:2 D4:2 D2:2 D3:2 D1:2 M3:2 α2C:2 α1A:1 α2B:1 5HT3:1 M2:1 M4:1 5HT7:1 α2A:1 α1B:1 5HT1B:1 5HT1D:1'),
    uses: ['Schizophrenia and maintenance (13+)', '**IM** agitation in schizophrenia or bipolar mania', 'Acute mania/mixed mania and maintenance (13+)', 'With **fluoxetine**: bipolar depression and treatment-resistant unipolar depression (US)'],
    sideEffects: [{ e: '**High** metabolic risk (weight gain, dyslipidemia, diabetes)', via: 'H1 + 5HT2C antagonism; insulin resistance' }, { e: 'Sedation', via: 'H1 and M1 antagonism' }, { e: 'Anticholinergic effects', via: 'Muscarinic antagonism' }],
    pearls: ['Often used at **higher** doses than approved, guided by plasma levels', 'Forms: orally disintegrating, acute IM, **4-week depot**; inhaled form in development', 'Combination with **samidorphan** to limit weight gain'],
    chapters: [{ ch: 'ch05', pages: '198, 225–226' }],
    facts: [F('225–226', 'Widely considered, by clinical experience rather than definitive trials, the **next most effective** after clozapine; 5HT2C plus weaker α2 antagonism, especially with fluoxetine’s 5HT2C antagonism, may explain efficacy in depression.', 's5-pines')],
    updates: [{ year: '2021', title: 'Olanzapine–samidorphan approved', text: 'Olanzapine combined with the μ-opioid antagonist samidorphan (Lybalvi) was approved for schizophrenia and bipolar I disorder in May 2021.', source: 'FDA, May 28, 2021' }]
  }), { after: 'clozapine' });
  h.upsert('drugs', pine('quetiapine', 'Quetiapine', 'Seroquel', {
    short: 'A “different drug at different doses”: sleep at 50 mg, depression at 300 mg, psychosis at 800 mg.',
    mechanism: 'A **5HT2A/D2 antagonist** with **weak D2** binding. Its net actions combine the parent drug and the active metabolite **norquetiapine**, which adds **NET inhibition**; together they have **5HT7, 5HT2C and α2** antagonism and **5HT1A** partial agonism (Figure 5-45). Its most potent action is **H1** antagonism.',
    targets: P('H1:3 5HT2B:2 M3:2 α1A:2 M1:2 α1B:2 5HT2A:2 NET:2 5HT7:2 5HT1E:1 5HT2C:1 D1:1 M4:1 5HT1A:1 α2C:1 α2A:1 D2:1 5HT1D:1 α2B:1 5HT3:1 5HT6:1 M2:1 D3:1 5HT5:1', { 'note:net': 'Mainly via norquetiapine' }),
    uses: ['Schizophrenia and maintenance (13+)', 'Mania/mixed mania and maintenance (10+)', '**Bipolar depression**; **augmentation** of SSRIs/SNRIs in unipolar depression (US)', 'Often used for insomnia (not approved), anxiety, **Parkinson’s disease psychosis**, or as an adjunct'],
    sideEffects: [{ e: 'Sedation (daytime)', via: 'H1, M1 and α1 antagonism' }, { e: 'Weight gain, **moderate** metabolic risk', via: 'H1 + 5HT2C antagonism' }, { e: 'Virtually no motor effects or prolactin elevation', via: 'Weak D2 binding' }],
    pearls: ['**Baby Bear 50 mg**: H1 only; **Mama Bear 300 mg**: antidepressant mix; **Papa Bear 800 mg**: saturates H1 and 5HT2A, inconsistent >60% D2 occupancy'],
    chapters: [{ ch: 'ch05', pages: '219–220, 226–231' }],
    facts: [F('227–231', 'Goldilocks and the three bears: different pharmacology at 50, 300 and 800 mg (Figure 5-46). Low D2 occupancy (< 60%) at antipsychotic doses.', 's5-pines')]
  }), { after: 'olanzapine' });
  h.upsert('drugs', pine('asenapine', 'Asenapine', 'Saphris', {
    short: 'Sublingual pine related to mirtazapine; usable as a rapid oral PRN.',
    mechanism: 'Structurally related to **mirtazapine** and shares its **5HT2A, 5HT2C, H1 and α2** antagonism, plus **D2** antagonism and many other serotonin and dopamine actions (Figure 5-47). Antidepressant action is suggested, but only antipsychotic/antimanic action is proven.',
    targets: P('5HT2C:4 5HT2A:4 5HT7:4 5HT6:3 D2:3 D3:3 D4:3 D1:3 α1B:3 5HT5:3 α1A:3 5HT1B:3 H1:3 5HT2B:3 α2B:3 α2A:3 5HT1D:3 α2C:2 5HT1E:2 5HT1A:2 5HT3:1 M1:1 M2:1'),
    uses: ['Schizophrenia/maintenance (adults)', 'Bipolar mania (10+, US)', 'Rapid-acting **oral PRN** “top-up” instead of an injection'],
    sideEffects: [{ e: 'Oral **hypoesthesia**', via: 'Sublingual administration' }, { e: 'Sedation (especially at first)', via: 'H1 antagonism' }, { e: 'Moderate weight gain, metabolic and motor effects', via: 'Class actions' }],
    pearls: ['**Not absorbed if swallowed**: sublingual, usually twice daily; no food or drink for **10 minutes**', 'Also a **transdermal** formulation'],
    chapters: [{ ch: 'ch05', pages: '198, 232–233' }],
    facts: [F('232–233', 'Rapid sublingual absorption gives rapid peak levels, unlike orally dissolving tablets that are absorbed later.', 's5-pines')]
  }), { after: 'quetiapine' });
  h.upsert('drugs', pine('zotepine', 'Zotepine', undefined, {
    short: 'Pine available in Japan and Europe; three times daily; possible seizure risk.',
    mechanism: 'A **5HT2A/D2 antagonist** that is also a **5HT2C, α1 and 5HT7** antagonist, a weak **5HT1A** partial agonist and a weak **NET** inhibitor, suggesting antidepressant potential not yet established (Figure 5-48).',
    targets: P('5HT2A:3 H1:3 D3:3 5HT2C:3 5HT6:3 α1:3 5HT7:3 D2:2 M1:2 D4:2 D1:2 5HT1B:2 5HT1D:1 M2:1 α2:1 5HT1A:1 5HT3:1 H2:1 NET:1 SERT:1 5HT1E:1'),
    uses: ['Schizophrenia (Japan and Europe; not the US)'],
    sideEffects: [{ e: 'Possible elevated **seizure** risk', via: 'Not specified' }, { e: 'Dose-dependent QTc prolongation', via: 'Noted with iloperidone, sertindole, amisulpride' }],
    chapters: [{ ch: 'ch05', pages: '233–234, 236' }],
    facts: [F('233', 'Less popular because it must be given **three times a day**.', 's5-pines')]
  }), { after: 'asenapine' });
  delete h.get('drugs', 'zotepine').brand;

  // ---- dones and a rone ----
  const done = (id, name, brand, extra) => Object.assign({ id, name, brand, group: SDA, cls: 'Atypical antipsychotic (a “done”)', nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist', nts: ['dopamine', 'serotonin'] }, extra);
  h.upsert('drugs', done('risperidone', 'Risperidone', 'Risperdal', {
    short: 'The original “done”; raises prolactin even at low doses.',
    mechanism: 'A **5HT2A/D2 antagonist** with a different structure and profile from the pines (Figure 5-49). **α2** antagonism may contribute to antidepressant action, but simultaneous **α1** antagonism can cancel it and causes orthostasis and sedation.',
    targets: P('5HT2A:3 D2:3 5HT7:3 α2C:3 α1A:3 D3:3 D4:3 α1B:3 H1:2 5HT2C:2 5HT1B:2 5HT2B:2 5HT1D:2 α2B:2 α2A:2 5HT5:1 D1:1 5HT1A:1'),
    uses: ['Schizophrenia/maintenance (13+)', 'Bipolar mania/maintenance (10+)', '**Irritability associated with autistic disorder** (5–16)', 'Low-dose off-label use in dementia agitation/psychosis is controversial (**black box** warning)'],
    sideEffects: [{ e: '**Prolactin elevation** even at low doses', via: 'D2 blockade not offset by its 5HT2A action' }, { e: 'Moderate weight gain and dyslipidemia (especially in **children**)', via: 'Class actions' }, { e: 'Orthostasis, sedation', via: 'α1 antagonism' }, { e: 'Fewer motor effects at lower doses', via: 'D2 dose-dependence' }],
    pearls: ['Depot injections lasting **2 or 4 weeks**; monitor plasma levels of risperidone + paliperidone', 'Orally disintegrating tablet and liquid'],
    chapters: [{ ch: 'ch05', pages: '198, 234–235' }],
    facts: [F('234–235', 'Some prefer it for children and adolescents; it may need twice-daily dosing at initiation (especially in children or the elderly) to avoid sedation and orthostasis.', 's5-dones')]
  }), { after: 'zotepine' });
  h.upsert('drugs', done('paliperidone', 'Paliperidone', 'Invega', {
    aka: ['9-hydroxy-risperidone'],
    short: 'Risperidone’s active metabolite: renally cleared, sustained release, long-interval injections.',
    mechanism: 'The active metabolite of risperidone, sharing its **5HT2A/D2** antagonism and binding (Figure 5-50). **Not hepatically metabolized** (urinary excretion), so few pharmacokinetic interactions.',
    targets: P('α1B:4 5HT2A:3 α1A:3 D3:3 5HT7:3 D2:3 α2C:3 H1:2 α2A:2 α2B:2 D1:2 5HT1B:2 5HT2C:2 D4:2 5HT2B:2 5HT1D:2 5HT5:1 5HT1A:1'),
    uses: ['Schizophrenia/maintenance (12+)', 'Long-acting injectable: **1-month and 3-month** (6-month in study at publication)'],
    sideEffects: [{ e: 'Moderate weight gain and metabolic risk', via: 'Class actions' }, { e: 'Perhaps less sedation, orthostasis and motor effects than risperidone (anecdotal)', via: 'Smoother sustained-release levels' }],
    pearls: ['Sustained-release oral form: **once daily**, but easily **underdosed**', 'LAI is easier to load and dose than risperidone’s'],
    chapters: [{ ch: 'ch05', pages: '198, 235–236' }],
    facts: [F('235', 'Rapid absorption and high peaks of risperidone may cause some of its side effects; paliperidone’s controlled release removes these.', 's5-dones')],
    updates: [{ year: '2021', title: 'Six-month injection approved', text: 'A 6-month paliperidone palmitate long-acting injection (Invega Hafyera) was approved for adults with schizophrenia after adequate treatment with the 1- or 3-month formulations.', source: 'FDA, August 30, 2021' }]
  }), { after: 'risperidone' });
  h.upsert('drugs', done('ziprasidone', 'Ziprasidone', 'Geodon', {
    short: '5HT2A/D2 antagonist with little or no weight gain; take with food.',
    mechanism: 'A **5HT2A/D2 antagonist** that also binds 5HT1B/1D about as potently as D2, plus 5HT2C, 5HT7, D3, α1 and weak **NET and SERT** (Figure 5-51). It lacks the actions linked to weight gain, insulin resistance and significant sedation.',
    targets: P('5HT2A:4 5HT1B:3 5HT2C:3 D2:3 5HT1D:3 5HT7:3 D3:3 α1B:3 α1A:2 5HT1A:2 5HT2B:2 NET:2 H1:2 α2B:2 5HT6:2 α2C:2 D1:2 α2A:1 D4:1 5HT5:1 SERT:1 5HT1E:1'),
    uses: ['Schizophrenia/maintenance', 'Bipolar mania/maintenance', '**IM** form for urgent use'],
    sideEffects: [{ e: 'Little or no weight gain or metabolic effect', via: 'Lacks H1/5HT2C and “receptor X” liability' }],
    pearls: ['Short acting: more than once daily, **with food**', 'QTc concerns now seem **exaggerated**: no dose-dependent QTc prolongation, few drugs raise its levels'],
    chapters: [{ ch: 'ch05', pages: '198, 236' }],
    facts: [F('236', 'Unlike iloperidone, zotepine, sertindole and amisulpride, ziprasidone does **not** cause dose-dependent QTc prolongation.', 's5-dones')]
  }), { after: 'paliperidone' });
  h.upsert('drugs', done('iloperidone', 'Iloperidone', 'Fanapt', {
    short: 'Simple profile with potent α1 antagonism: very low motor effects, slow titration.',
    mechanism: 'A **5HT2A/D2 antagonist** with one of the **simplest** profiles, closest to a pure serotonin–dopamine antagonist; its most potent property is **α1 antagonism** (Figure 5-52).',
    targets: P('α1:4 5HT2A:3 D2:3 D3:2 H1:2 D4:2 5HT1D:2 α2C:2 5HT6:2 5HT1A:2 5HT1B:2 5HT2C:1 5HT7:1 D1:1 α2A:1 α2B:1'),
    uses: ['Schizophrenia/maintenance (US); often a **switch** agent in non-urgent settings'],
    sideEffects: [{ e: '**Orthostatic hypotension**, sedation', via: 'Potent α1 antagonism' }, { e: 'Very low **motor** effects', via: 'Possibly helped by α1 antagonism' }, { e: 'Moderate weight gain; low dyslipidemia', via: 'Class actions' }, { e: 'Dose-dependent QTc prolongation', via: 'Noted in the book' }],
    pearls: ['18- to 33-hour half-life, but usually twice daily with **slow titration**, which delays onset'],
    chapters: [{ ch: 'ch05', pages: '198, 236' }],
    facts: [F('236', 'Its distinguishing features are very low motor side effects, low dyslipidemia, moderate weight gain and potent α1 antagonism.', 's5-dones')],
    updates: [{ year: '2024', title: 'Bipolar I indication', text: 'Iloperidone was approved for acute treatment of manic or mixed episodes of bipolar I disorder in adults in April 2024.', source: 'FDA, April 2, 2024' }]
  }), { after: 'ziprasidone' });
  h.upsert('drugs', done('lurasidone', 'Lurasidone', 'Latuda', {
    short: 'D4 and 5HT7 most potent; low metabolic risk; preferred for bipolar depression.',
    mechanism: 'A **5HT2A/D2 antagonist** with a relatively simple profile: most potent at **D4** and **5HT7**, high 5HT2A, moderate **5HT1A** and **α2**, minimal **H1 and M1** (Figure 5-53). These may explain its antidepressant profile.',
    targets: P('D4:4 5HT7:4 D2:3 5HT2A:3 5HT1A:3 α2C:2 D3:2 α2A:2 α1:2 5HT2C:1'),
    uses: ['**Bipolar depression** (10+): highly effective and a preferred agent', 'Schizophrenia/maintenance; often preferred for **children**'],
    sideEffects: [{ e: 'Low weight gain and metabolic risk', via: 'Minimal H1/M1 actions' }, { e: 'Motor effects and sedation (less if dosed at night)', via: 'D2 blockade' }],
    pearls: ['**NRX101** (Cyclurad) adds D-cycloserine for acute suicidality and bipolar depression (early positive findings)'],
    chapters: [{ ch: 'ch05', pages: '198, 236–237' }],
    facts: [F('236–237', 'Synergy among several potential antidepressant properties with good tolerability makes it one of the preferred bipolar-depression agents where approved.', 's5-dones')]
  }), { after: 'iloperidone' });
  h.upsert('drugs', done('lumateperone', 'Lumateperone', 'Caplyta', {
    cls: 'Atypical antipsychotic (the “rone”)',
    short: 'Very potent 5HT2A, modest D2, SERT binding and possible presynaptic D2 partial agonism.',
    mechanism: 'A **5HT2A/D2 antagonist** with very high **5HT2A** affinity, moderate **D2, D1, α1** and **SERT** affinity, and low H1 (Figure 5-54). The **widest 5HT2A–D2 separation** may explain antipsychotic action at **low D2 occupancy**. Preclinical evidence suggests **presynaptic D2 partial agonism** with postsynaptic antagonism, turning down dopamine synthesis (Figure 5-55).',
    targets: P('5HT2A:4 D2:2 D1:2 SERT:2 α1:2 5HT2C:1', { 'note:d2': 'Postsynaptic antagonist; possibly presynaptic partial agonist (preclinical)' }),
    uses: ['Schizophrenia (no titration needed)', 'Bipolar depression trials promising at publication'],
    sideEffects: [{ e: 'Little or no weight gain or metabolic disturbance', via: 'Low H1; low-risk tier' }, { e: 'Little or no DIP or akathisia', via: 'Low D2 occupancy' }],
    chapters: [{ ch: 'ch05', pages: '198, 219, 237–239' }],
    facts: [F('237–239', 'SERT binding suggests antidepressant potential; if presynaptic D2 agonism is proven, less postsynaptic blockade would be needed for an antipsychotic effect.', 's5-dones')],
    updates: [{ year: '2025', title: 'Depression indications', text: 'Approved for bipolar I and II depression (monotherapy and adjunct to lithium or valproate) in December 2021 and as an adjunct for major depressive disorder in November 2025.', source: 'FDA, December 2021; November 6, 2025' }]
  }), { after: 'lurasidone' });

  // ---- pips and a rip ----
  const pip = (id, name, brand, extra) => Object.assign({ id, name, brand, group: DPA, cls: 'Atypical antipsychotic (D2 partial agonist)', nbn: 'Dopamine D2 and serotonin 5HT1A receptor partial agonist', nts: ['dopamine', 'serotonin'] }, extra);
  h.upsert('drugs', pip('aripiprazole', 'Aripiprazole', 'Abilify', {
    cls: 'Atypical antipsychotic (the original “pip”)',
    short: 'The original D2/5HT1A partial agonist: low motor effects except akathisia; lowers prolactin.',
    mechanism: 'A **D2 partial agonist** close to the antagonist end of the spectrum, with **5HT1A** partial agonism (higher affinity than its moderate **5HT2A** antagonism), plus **5HT7** and **5HT2C** antagonism (Figure 5-56). It lacks muscarinic and H1 actions associated with sedation, and the actions associated with metabolic risk.',
    targets: P('5HT2B:4 D2:3 5HT1A:3 D3:2 5HT7:2 α1A:2 5HT2C:2 α1B:2 H1:2 α2C:2 5HT2A:2 5HT1D:2 α2A:2 α2B:1 D4:1 5HT6:1 5HT3:1 5HT1B:1', { d2: 'partial agonist', d3: 'partial agonist' }),
    uses: ['Schizophrenia/maintenance (13+); **IM** agitation', 'Bipolar mania/maintenance (10+)', 'Autism-related irritability (5–17); **Tourette syndrome** (6–18)', '**Adjunct to SSRIs/SNRIs in major depression**: its main US use', 'Off-label in bipolar depression'],
    sideEffects: [{ e: '**Akathisia** (main motor effect)', via: 'D2 partial agonism' }, { e: 'Lowers prolactin', via: 'Lactotrophs read it as an agonist' }, { e: 'Not generally sedating; little or no weight gain (some in children)', via: 'No M1/H1-type actions' }],
    pearls: ['Oral, liquid, orally disintegrating; **4-week** and **4- to 8-week** long-acting injections (the latter with a day-1 loading injection)'],
    chapters: [{ ch: 'ch05', pages: '193, 239' }],
    facts: [F('193', 'The result of “throwing a dart” closer to the antagonist end after OPC4392 and bifeprunox were too agonistic; some question its efficacy in the most severe psychosis (never proven).', 's5-pa'), F('239', '5HT1A partial agonism and 5HT2C/5HT7 antagonism at low doses are theoretical antidepressant mechanisms.', 's5-pips')]
  }), { after: 'lumateperone' });
  h.set('drugs', 'brexpiprazole', Object.assign(pip('brexpiprazole', 'Brexpiprazole', 'Rexulti', {}), {
    cls: 'Atypical antipsychotic (the second “pip”)',
    short: 'Aripiprazole relative with more potent 5HT1A, 5HT2A and α1 action; approved later for Alzheimer agitation.',
    mechanism: 'A **D2 partial agonist** related to aripiprazole but with relatively more potent **5HT2A** antagonism, **5HT1A** partial agonism (its most potent action) and **α1** antagonism versus D2 (Figure 5-57), which should theoretically reduce motor effects and akathisia. Higher α1 and α2 binding than aripiprazole may add antidepressant actions; α1 actions may help explain efficacy in **agitation in dementia**.',
    targets: P('5HT1A:4 α1B:4 D2:4 5HT2A:4 α2C:4 D3:3 5HT2B:3 α1D:3 5HT7:3 α1A:3 D4:3 5HT2C:2 H1:2 5HT1B:2 5HT6:2 D1:1', { d2: 'partial agonist', d3: 'partial agonist' }),
    uses: ['Schizophrenia (not indicated for acute mania)', 'Positive late-stage studies in **agitation in dementia** (approved 2023, see update)', 'Preliminary data with **sertraline for PTSD**'],
    sideEffects: [{ e: 'Some akathisia (perhaps less than aripiprazole; not proven head to head)', via: 'D2 partial agonism' }, { e: 'Low metabolic risk, little sedation', via: 'Lacks the relevant receptor actions' }]
  }));
  h.facts('drugs', 'brexpiprazole', [F('197, 239–240', 'Positive results for agitation in dementia suggest it may have a satisfactory risk:benefit profile; a positive study with sertraline in PTSD was a promising exception among anxiety/PTSD uses.', 's5-pips')]);
  h.chapter('brexpiprazole', 'ch05', '197, 239–240');
  h.push('drugs', 'brexpiprazole', 'updates', [{ year: '2025', title: 'PTSD application not approved', text: 'The supplemental application for brexpiprazole with sertraline in adults with PTSD received an FDA complete response letter in September 2025.', source: 'Otsuka/Lundbeck, September 2025' }]);
  h.upsert('drugs', pip('cariprazine', 'Cariprazine', 'Vraylar', {
    cls: 'Atypical antipsychotic (the “rip”)',
    short: 'D2/5HT1A partial agonist whose most potent action is D3 partial agonism.',
    mechanism: 'A **D2/5HT1A partial agonist** whose most potent binding is **D3 partial agonism**, with higher D3 affinity than dopamine itself; also potent **5HT2B**, α1 and α2A, with weaker **5HT2A** and H1 (Figure 5-58). D3 action may block limbic D3 receptors and, at VTA somatodendritic D3 receptors, raise prefrontal dopamine.',
    targets: P('D3:4 5HT2B:4 D2:4 5HT1A:3 α1B:3 α2A:3 α1D:3 α1A:3 5HT2A:2 H1:2 5HT7:1 5HT2C:1', { d2: 'partial agonist', d3: 'partial agonist' }),
    uses: ['Schizophrenia; **superior to a D2/5HT2A antagonist for negative symptoms**', 'Acute bipolar mania', '**Bipolar depression** at lower doses; broad efficacy across mixtures of mania and depression'],
    sideEffects: [{ e: 'Some **akathisia** (reduced by slow titration); low DIP', via: 'D2 partial agonism with potent 5HT1A' }, { e: 'Very low weight gain or metabolic disturbance', via: 'Low-risk tier' }],
    pearls: ['Two long-lived active metabolites: potential weekly to monthly **“oral depot”**'],
    chapters: [{ ch: 'ch05', pages: '193, 198, 240' }],
    facts: [F('240', 'D3 partial agonism shows preclinical promise for cognition, mood, emotion, reward/substance use and negative symptoms.', 's5-pips')],
    updates: [{ year: '2022', title: 'Adjunctive treatment of depression', text: 'Approved as an adjunct to antidepressants for major depressive disorder in adults in December 2022.', source: 'AbbVie/FDA, December 16, 2022' }]
  }), { after: 'brexpiprazole' });

  // ---- pimavanserin and others ----
  h.set('drugs', 'pimavanserin', {
    group: 'Selective 5HT2A antagonist',
    short: 'The only proven antipsychotic that does not bind D2; approved for Parkinson’s disease psychosis.',
    mechanism: 'A potent **5HT2A antagonist** (sometimes called inverse agonist) with lesser **5HT2C** antagonism and **no D2** binding (Figure 5-59). 5HT2C antagonism might raise dopamine release in depression and negative symptoms. It blocks the overstimulated, upregulated 5HT2A receptors of Parkinson’s disease psychosis without the motor worsening of D2 blockade.',
    targets: P('5HT2A:4 5HT2C:3', { '5ht2a': 'inverse agonist' }),
    uses: ['**Psychosis in Parkinson’s disease**', 'Dementia-related psychosis (late-stage testing at publication; see updates)', 'Early positive adjunctive results in major depression and negative symptoms']
  });
  h.facts('drugs', 'pimavanserin', [F('240', 'The **only** known drug with proven antipsychotic efficacy that lacks D2 antagonist/partial agonist actions; in the low metabolic risk tier.', 's5-others')]);
  h.chapter('pimavanserin', 'ch05', '198, 240');
  h.upsert('drugs', {
    id: 'sertindole', name: 'Sertindole', group: SDA, cls: 'Atypical antipsychotic', nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    short: '5HT2A/D2 antagonist withdrawn and reintroduced over QTc concerns.',
    mechanism: 'A **5HT2A/D2 antagonist** with potent **α1** antagonism that may account for some side effects (Figure 5-60).',
    nts: ['dopamine', 'serotonin'], targets: P('5HT2A:4 5HT2C:3 D2:3 5HT6:3 α1:3 D4:2 D1:2 5HT7:2 5HT1D:2 5HT1B:2 DAT:1 5HT1F:1 5HT1E:1 α2B:1 α2C:1 5HT1A:1 M1:1 α2A:1'),
    uses: ['Second-line agent in some countries, with close cardiac and drug-interaction monitoring'],
    sideEffects: [{ e: 'QTc prolongation (dose-dependent)', via: 'Cardiac safety concerns led to withdrawal' }],
    chapters: [{ ch: 'ch05', pages: '236, 240–241' }],
    facts: [F('240–241', 'Originally approved in some European countries, then withdrawn for cardiac/QTc testing and reintroduced as a second-line agent.', 's5-others')]
  }, { after: 'ziprasidone' });
  h.upsert('drugs', {
    id: 'perospirone', name: 'Perospirone', group: SDA, cls: 'Atypical antipsychotic', nbn: 'Serotonin 5HT2A/dopamine D2 receptor antagonist',
    short: '5HT2A/D2 antagonist with 5HT1A partial agonism, used in Asia.',
    mechanism: 'A **5HT2A and D2** antagonist with **5HT1A** partial agonist actions that may contribute to efficacy or tolerability (Figure 5-61).',
    nts: ['dopamine', 'serotonin'], targets: P('D4:4 D2:4 5HT2A:4 5HT1A:3 α1:2 D1:2 α2:1'),
    uses: ['Schizophrenia (Asia); more experience in schizophrenia than mania'],
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [F('241', 'Usually given three times a day; its potential for weight gain, dyslipidemia, insulin resistance and diabetes is not well investigated.', 's5-others')]
  }, { after: 'sertindole' });
  h.upsert('drugs', {
    id: 'blonanserin', name: 'Blonanserin', group: SDA, cls: 'Atypical antipsychotic', nbn: 'Dopamine D2/D3 and serotonin 5HT2A receptor antagonist',
    short: '5HT2A/D2 antagonist with higher D3 affinity than dopamine, used in Asia.',
    mechanism: 'A **5HT2A/D2 antagonist** with high **D3** affinity, higher than dopamine’s own (like cariprazine), suggesting possible use for negative symptoms and bipolar depression (Figure 5-62).',
    nts: ['dopamine', 'serotonin'], targets: P('D3:4 D2:4 5HT2A:4'),
    uses: ['Schizophrenia (Asia), twice daily'],
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [F('241', 'Its D3 potency suggests utility for negative symptoms and bipolar depression, not yet well studied.', 's5-others')]
  }, { after: 'perospirone' });

  // ---- investigational ----
  h.upsert('drugs', {
    id: 'roluperidone', name: 'Roluperidone', aka: ['MIN-101'], group: 'Investigational drug for psychosis', cls: '5HT2A/σ2 antagonist (investigational)',
    short: '5HT2A antagonist with σ2 antagonism, studied for negative symptoms.',
    mechanism: 'A **5HT2A antagonist** with additional **σ2** antagonist actions (Figure 5-63), in study for schizophrenia with early signs of efficacy for **negative symptoms**.',
    nts: ['serotonin'], targets: P('σ2:4 5HT2A:4', { 'note:sigma': 'σ2' }),
    chapters: [{ ch: 'ch05', pages: '241' }],
    facts: [F('241', 'Early studies suggest possible efficacy for negative symptoms; trials ongoing at publication.', 's5-future')],
    updates: [{ year: '2024', title: 'FDA complete response letter', text: 'The FDA declined approval for negative symptoms of schizophrenia in February 2024, citing insufficient evidence that the change was clinically meaningful and asking for at least one additional positive controlled study.', source: 'Minerva Neurosciences, February 27, 2024' }]
  }, { after: 'blonanserin' });
  h.upsert('drugs', {
    id: 'ulotaront', name: 'Ulotaront (SEP-363856)', aka: ['SEP-363856'], group: 'Investigational drug for psychosis', cls: 'TAAR1 agonist (investigational)',
    short: 'TAAR1 agonist found serendipitously; a non-D2-blocking candidate for psychosis.',
    mechanism: 'An agonist with weak affinity at **TAAR1**, plus weaker **5HT1D** and **5HT7** antagonist and **5HT1A** agonist actions (Figure 5-66). Antipsychotic effects in animals were found first; the TAAR1 mechanism was discovered afterwards. TAAR1 agonism biases D2 signaling toward Gi without blocking D2.',
    nts: ['dopamine', 'serotonin'], targets: P('TAAR1 5HT1D 5HT1A 5HT7', { '5ht1a': 'agonist', '5ht1b1d': 'antagonist' }),
    chapters: [{ ch: 'ch05', pages: '242' }],
    facts: [F('242', 'An early study in schizophrenia confirmed antipsychotic action with few side effects, and regulators granted **breakthrough** status.', 's5-future')],
    updates: [{ year: '2023', title: 'Phase III trials negative', text: 'Ulotaront did not separate from placebo in the phase III DIAMOND 1 and DIAMOND 2 schizophrenia trials; the companies cited a high placebo response.', source: 'Sumitomo Pharma/Otsuka, July 31, 2023' }]
  }, { after: 'roluperidone' });
  h.upsert('drugs', {
    id: 'xanomeline', name: 'Xanomeline (with trospium)', aka: ['xanomeline–trospium', 'KarXT', 'Cobenfy'], group: 'Muscarinic agonist', cls: 'Central M4/M1 muscarinic agonist with peripheral antagonist',
    nbn: 'Muscarinic M1/M4 receptor agonist',
    short: 'Central M4/M1 agonist paired with peripheral trospium: a non-D2 mechanism for psychosis.',
    mechanism: 'A central **M4/M1 agonist**: M4 agonism may reduce psychosis by lowering VTA dopamine firing, and M1 agonism may improve cognition; it also raises prefrontal dopamine. It binds several serotonin receptors (Figure 5-67). **Trospium**, an anticholinergic that does not enter the brain, blocks peripheral **M2/M3** side effects.',
    nts: ['acetylcholine', 'dopamine'], targets: P('5HT1D:3 M4:2 5HT2B:2 M3:2 5HT2C:2 5HT1B:2 5HT1A:2 M1:2 5HT2A:1 5HT7:1 M2:1 5HT4:1 5HT1E:1 D3:1', { m4: 'agonist', m1: 'agonist', m2m3: 'binds', '5ht1b1d': 'binds', '5ht2b': 'binds', '5ht2c': 'binds', '5ht1a': 'binds', '5ht2a': 'binds', '5ht7': 'binds', '5ht4': 'binds', d3: 'binds', 'note:m2m3': 'Peripheral M2/M3 effects blocked by trospium' }),
    uses: ['Schizophrenia (in advanced trials at publication; approved 2024)'],
    chapters: [{ ch: 'ch05', pages: '242' }],
    facts: [F('242', 'With trospium, showed promising efficacy and tolerability for psychotic symptoms of schizophrenia and was progressing as a potential breakthrough.', 's5-future')],
    updates: [{ year: '2024', title: 'Approved for schizophrenia', text: 'Xanomeline–trospium (Cobenfy) was approved for schizophrenia in adults in September 2024. As an add-on to other antipsychotics it missed its primary endpoint in the phase III ARISE trial (April 2025).', source: 'FDA, September 26, 2024; Bristol Myers Squibb, April 2025' }]
  }, { after: 'ulotaront' });

  // ---- movement-disorder and adjunct drugs ----
  h.set('drugs', 'tetrabenazine', {
    mechanism: 'A **reversible VMAT2** inhibitor that preferentially depletes **dopamine** at clinical doses. An **inactive prodrug**: carbonyl reductase makes four active dihydro metabolites (mostly the **+β** enantiomer; –α and –β add 5HT7 and some D2 antagonism), all inactivated by **CYP2D6** (Figure 5-11A).',
    uses: ['**Chorea of Huntington’s disease** (not approved for TD in the book)'],
    sideEffects: [{ e: 'Peak-dose **sedation** and **drug-induced parkinsonism**', via: 'Dopamine depletion' }, { e: 'Depression and **suicide** risk (Huntington’s)', via: 'Monoamine depletion' }],
    pearls: ['Short half-life: **three times daily**', '**CYP2D6 genotyping** needed to go to higher doses']
  });
  h.facts('drugs', 'tetrabenazine', [F('174–176', 'Reversibly inhibits only VMAT2 (unlike reserpine), so lacks reserpine’s peripheral side effects.', 's5-vmat2')]);
  h.chapter('tetrabenazine', 'ch05', '174–179');
  h.set('drugs', 'deutetrabenazine', {
    mechanism: '**Deuterated** tetrabenazine: some hydrogens are replaced by deuterium, making it a poorer **CYP2D6** substrate, with a longer half-life, lower peaks and fewer peak-dose side effects. Its metabolites are the same as tetrabenazine’s (Figure 5-11B).',
    uses: ['**Tardive dyskinesia**', '**Huntington’s disease** chorea'],
    pearls: ['**Twice daily, with food**', 'No genotyping needed for the full dose range; no suicide warning for TD']
  });
  h.facts('drugs', 'deutetrabenazine', [F('175–176', 'Deuteration can also restart patent life, creating incentives for drug development.', 's5-vmat2')]);
  h.chapter('deutetrabenazine', 'ch05', '175–176');
  h.set('drugs', 'valbenazine', {
    mechanism: 'Tetrabenazine’s **+α enantiomer linked to valine**. After slow hydrolysis, carbonyl reductase yields only **+α-dihydrotetrabenazine**, the most selective and potent VMAT2 inhibitor of the four metabolites (Figure 5-11C).',
    uses: ['**Tardive dyskinesia**'],
    pearls: ['Long half-life: **once daily**', 'No genotyping, no food requirement, **no suicide warning**']
  });
  h.facts('drugs', 'valbenazine', [F('176', 'Slow hydrolysis gives a long half-life and once-daily dosing.', 's5-vmat2')]);
  h.chapter('valbenazine', 'ch05', '176');
  h.upsert('drugs', {
    id: 'reserpine', name: 'Reserpine', group: 'VMAT inhibitor', cls: 'Irreversible VMAT1/VMAT2 inhibitor',
    short: 'Irreversible VMAT1 and VMAT2 inhibitor; once used for hypertension.',
    mechanism: 'Inhibits both **VMAT1 and VMAT2** irreversibly, depleting monoamines centrally and peripherally.',
    targets: [{ t: 'vmat2', action: 'inhibitor', note: 'Irreversible; also VMAT1' }],
    uses: ['Formerly hypertension'],
    sideEffects: [{ e: 'Orthostatic hypotension, stuffy nose, itching, GI effects', via: 'Peripheral VMAT1 inhibition' }],
    chapters: [{ ch: 'ch05', pages: '174–175' }],
    facts: [F('174–175', 'Its peripheral side effects contrast with tetrabenazine-related drugs, which spare VMAT1.', 's5-vmat2')]
  }, { after: 'valbenazine' });
  h.upsert('drugs', {
    id: 'benztropine', name: 'Benztropine', group: 'Anticholinergic', cls: 'Muscarinic antagonist (anticholinergic)',
    short: 'Commonly used anticholinergic for drug-induced parkinsonism.',
    mechanism: 'Blocks **muscarinic** (especially M1) receptors, offsetting the excess striatal acetylcholine released when D2 receptors are blocked, partly restoring the dopamine–acetylcholine balance (Figure 5-7C).',
    nts: ['acetylcholine'], targets: [{ t: 'm1', action: 'antagonist' }, { t: 'm2m3', action: 'antagonist', note: 'Peripheral side effects' }],
    uses: ['**Drug-induced parkinsonism**', 'IM anticholinergic for **acute dystonia**'],
    sideEffects: [{ e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Peripheral muscarinic blockade' }, { e: 'Drowsiness; memory, concentration and processing problems', via: 'Central muscarinic blockade' }, { e: '**Paralytic ileus** with other anticholinergics (e.g., clozapine)', via: 'Total anticholinergic burden' }],
    pearls: ['Does not help **akathisia** much and may worsen **tardive dystonia**'],
    chapters: [{ ch: 'ch05', pages: '166–169, 225' }],
    facts: [F('166–169', 'Stahl warns that many patients on D2 blockers are overmedicated with total anticholinergic burden; alternatives should often be sought.', 's5-motor')]
  }, { after: 'reserpine' });
  h.upsert('drugs', {
    id: 'amantadine', name: 'Amantadine', group: 'Movement disorder treatment', cls: 'Weak NMDA antagonist',
    short: 'Non-anticholinergic option for drug-induced parkinsonism.',
    mechanism: 'Thought to be a **weak NMDA antagonist**, possibly changing dopamine activity downstream in the direct and indirect striatal motor pathways; it lacks anticholinergic properties.',
    nts: ['glutamate', 'dopamine'], targets: [{ t: 'nmda', action: 'antagonist', note: 'Weak' }],
    uses: ['**Drug-induced parkinsonism**', 'Some evidence in **tardive dyskinesia** and **levodopa-induced dyskinesia**'],
    chapters: [{ ch: 'ch05', pages: '169' }],
    facts: [F('169', 'Useful whatever its actual mechanism; an alternative to adding anticholinergic burden.', 's5-motor')]
  }, { after: 'benztropine' });
  h.upsert('drugs', {
    id: 'dantrolene', name: 'Dantrolene', group: 'Muscle relaxant', cls: 'Muscle relaxant',
    short: 'Muscle relaxant used in neuroleptic malignant syndrome.',
    mechanism: 'A **muscle-relaxing** agent used, with dopamine agonists and intensive support, after withdrawing the D2 blocker in **neuroleptic malignant syndrome**.',
    uses: ['**Neuroleptic malignant syndrome**'],
    chapters: [{ ch: 'ch05', pages: '169–170' }],
    facts: [F('169–170', 'NMS is a medical emergency requiring withdrawal of the D2 blocker, dantrolene and dopamine agonists, and intensive supportive care.', 's5-motor')]
  }, { after: 'amantadine' });
  h.upsert('drugs', {
    id: 'metformin', name: 'Metformin', group: 'Metabolic adjunct', cls: 'Antidiabetic',
    short: 'Antidiabetic that can limit weight gain from drugs for psychosis.',
    mechanism: 'An anti-diabetes drug; in Chapter 5 it is a co-therapy for drug-induced weight gain.',
    uses: ['Weight loss after drug-induced weight gain; **reduces weight gain** when starting a high- or moderate-risk agent'],
    chapters: [{ ch: 'ch05', pages: '201' }],
    facts: [F('201', 'Shown in several studies to reduce weight gain with high- or moderate-metabolic-risk agents.', 's5-metabolic')]
  }, { after: 'dantrolene' });
  h.upsert('drugs', {
    id: 'samidorphan', name: 'Samidorphan', group: 'Metabolic adjunct', cls: 'μ-Opioid antagonist',
    short: 'μ-Opioid antagonist combined with olanzapine to reduce weight gain.',
    mechanism: 'A **μ-opioid antagonist** combined with olanzapine to mitigate weight gain and metabolic disturbance.',
    nts: ['endorphin'], targets: [{ t: 'mor', action: 'antagonist' }],
    uses: ['With **olanzapine**, to reduce olanzapine-induced weight gain'],
    chapters: [{ ch: 'ch05', pages: '201, 226' }],
    facts: [F('201, 226', 'In late-stage testing with olanzapine at publication.', 's5-metabolic')],
    updates: [{ year: '2021', title: 'Olanzapine–samidorphan approved', text: 'Approved with olanzapine (Lybalvi) for schizophrenia and bipolar I disorder in May 2021.', source: 'FDA, May 28, 2021' }]
  }, { after: 'metformin' });
  h.facts('drugs', 'levodopa', [F('171', 'Chronic levodopa causes dyskinesias that look like TD, perhaps through the same aberrant striatal plasticity; amantadine has some evidence for LID.', 's5-td')]);
  h.chapter('levodopa', 'ch05', '171');
  h.facts('drugs', 'mirtazapine', [F('199, 232', 'Combined **H1 + 5HT2C** antagonism links it to weight gain; asenapine is structurally related and shares several of its binding properties.', 's5-metabolic')]);
  h.chapter('mirtazapine', 'ch05', '199, 232');
  h.facts('drugs', 'fluoxetine', [F('226', 'Combined with **olanzapine** for bipolar depression and treatment-resistant unipolar depression; 5HT2C antagonism of both may contribute.', 's5-pines')]);
  h.chapter('fluoxetine', 'ch05', '226');
  h.facts('drugs', 'amphetamine', [F('174', 'A false substrate of **VMAT2** that competes with natural transmitters; dopamine or amphetamine are the “too hot” end of the Goldilocks analogy.', 's5-vmat2')]);
  h.facts('drugs', 'mdma', [F('174', 'Like amphetamine, carried by VMAT2 as a **false substrate**.', 's5-vmat2')]);

  /* ---------------- circuits: drug effects ---------------- */
  const C = (id, symptom, circuit, nts, treat, pages) => ({ id, disorder: 'Effects of drugs that block D2', symptom, circuit, nts, treat, ch: 'ch05', pages });
  db.circuits.push(
    C('d2-antipsychotic', 'Antipsychotic (positive symptoms improve)', 'Blocked **mesolimbic/mesostriatal** D2; 5HT2A antagonism reduces direct glutamate drive to the same dopamine neurons', ['Dopamine', 'Serotonin', 'Glutamate'], ['D2 antagonism or partial agonism', 'Adding 5HT2A antagonism'], '161, 184–187'),
    C('secondary-negative', 'Secondary negative symptoms (apathy, anhedonia, flattening)', '**Mesolimbic** reward D2 blockade and **mesocortical** D2 blockade', ['Dopamine'], ['Lower the dose or switch', 'Adjuncts such as drugs for depression', '5HT2A antagonism or 5HT1A partial agonism (more prefrontal dopamine)'], '162–164'),
    C('hyperprolactinemia', 'Galactorrhea, amenorrhea, gynecomastia', '**Tuberoinfundibular** D2 blockade at pituitary lactotrophs', ['Dopamine', 'Serotonin'], ['5HT2A antagonism offsets (variably)', 'D2 partial agonists lower prolactin'], '164–165, 187–193'),
    C('dip', 'Drug-induced parkinsonism', '**Nigrostriatal** indirect (stop) pathway: too much stop; disinhibited striatal acetylcholine', ['Dopamine', 'Acetylcholine'], ['Anticholinergics (M1)', 'Amantadine', '5HT2A antagonism / 5HT1A partial agonism raise nigrostriatal dopamine'], '165–169, 184–187'),
    C('dystonia', 'Acute dystonia', '**Nigrostriatal** dopamine–acetylcholine imbalance on first exposure', ['Dopamine', 'Acetylcholine'], ['IM anticholinergic (within 20 minutes)'], '169'),
    C('akathisia', 'Akathisia', '**Nigrostriatal** D2 blockade (common with partial agonists too)', ['Dopamine', 'Norepinephrine', 'GABA', 'Serotonin'], ['β-blockers', 'Benzodiazepines', '5HT2A antagonists'], '169'),
    C('td', 'Tardive dyskinesia', 'Upregulated, supersensitive D2 in the **indirect pathway** of the motor striatum: too much go', ['Dopamine'], ['VMAT2 inhibitors (valbenazine, deutetrabenazine)', 'Monitor with AIMS'], '170–179'),
    C('sedation', 'Sedation', 'Blocked **arousal** inputs: ACh, histamine and NE to thalamus, hypothalamus, basal forebrain and cortex', ['Acetylcholine', 'Histamine', 'Norepinephrine'], ['Choose agents without M1/H1/α1 actions for long-term use'], '181–182, 197–198'),
    C('weight-metabolic', 'Weight gain, insulin resistance, dyslipidemia', '**H1 + 5HT2C** antagonism (appetite) and an unknown **“receptor X”** in adipose, liver and muscle', ['Histamine', 'Serotonin'], ['Monitor BMI, fasting triglycerides, glucose, BP', 'Switch to a low-risk agent', 'Metformin'], '198–201')
  );
};
