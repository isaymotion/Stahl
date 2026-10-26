// Chapter 7 library enrichment: drugs for unipolar depression, treatment resistance, bipolar disorder and future agents.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch07', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };
  const add = (obj, after) => h.upsert('drugs', Object.assign({ chapters: [{ ch: 'ch07', pages: obj.pages }] }, obj, { pages: undefined }), after ? { after } : undefined);
  const clean = () => db.drugs.forEach(d => { if (d.pages === undefined) delete d.pages; });

  /* ---------------- new targets ---------------- */
  h.upsert('targets', {
    id: 'nos', name: 'Nitric oxide synthase (NOS)', short: 'NOS', family: 'Enzyme', nt: 'nitric-oxide',
    summary: 'The enzyme that makes the gas neurotransmitter nitric oxide. Paroxetine inhibits it, which may add to sexual dysfunction.',
    block: ['Possible contribution to **sexual dysfunction**, especially in men (paroxetine)'],
    facts: [F('294–295', '**Paroxetine** inhibits nitric oxide synthase, which could theoretically contribute to sexual dysfunction, especially in men.', 's7-ssri-agents')]
  }, { after: 'mao' });
  h.upsert('targets', {
    id: 'impase', name: 'Inositol monophosphatase', short: 'IMPase', family: 'Enzyme', ntLabel: 'Phosphatidylinositol second-messenger system',
    summary: 'An enzyme of the phosphatidylinositol second-messenger system; one candidate target of lithium.',
    block: ['Possible **antimanic** action of lithium'],
    facts: [F('345–346', 'Lithium **inhibits inositol monophosphatase**, one of several candidate signal-transduction mechanisms for its antimanic action (Figure 7-74).', 's7-lithium')]
  }, { after: 'gsk3' });
  h.upsert('targets', {
    id: 'pkc', name: 'Protein kinase C (PKC)', short: 'PKC', family: 'Enzyme', ntLabel: 'Signal transduction',
    summary: 'A kinase in downstream signal transduction cascades; lithium and valproate may inhibit it.',
    block: ['Possible **antimanic** action of lithium and valproate'],
    facts: [F('346, 349', 'Lithium may inhibit **GSK-3 and protein kinase C**; valproate may inhibit **PKC** and **MARCKS** while activating ERK, BCL2 and GAP43 (Figures 7-74, 7-78).', 's7-valproate-cbz')]
  }, { after: 'impase' });
  h.upsert('targets', {
    id: 'thr', name: 'Thyroid hormone receptor', short: 'Thyroid receptor', family: 'Intracellular receptor', ntLabel: 'Thyroid hormones',
    summary: 'A nuclear receptor: thyroid hormones bind it to form a ligand-activated transcription factor. Used to augment drugs for depression.',
    stim: ['Possible **augmentation** of antidepressant action or faster onset (now out of favor)'],
    facts: [F('333', 'Thyroid hormones regulate neuronal organization, arborization and synapse formation, which may boost monoamine neurotransmission and explain augmentation.', 's7-other-augment')]
  }, { after: 'gr' });
  h.upsert('targets', {
    id: 'vegf', name: 'VEGF and its receptor FLK1', short: 'VEGF/FLK1', family: 'Neurotrophin receptor', nt: 'neurotrophins',
    summary: 'Vascular endothelial growth factor, a growth factor reduced by chronic stress and depression and raised by ketamine; it acts at FLK1 (fetal liver kinase 1).',
    stim: ['Hypothetically **synaptogenesis** and reversal of depression-related atrophy'],
    facts: [F('329–331', 'Loss of BDNF and VEGF is linked to neuronal atrophy in PFC and hippocampus; stress and depression also reduce their receptors **TRKB and FLK1**. Ketamine increases both growth factors (Figure 7-62).', 's7-ketamine')]
  }, { after: 'trkb' });

  /* ---------------- target facts ---------------- */
  h.facts('targets', 'sert', [
    F('289–292', 'SSRIs must occupy perhaps **80–90%** of SERTs to work. Blocking SERT raises 5HT first at the **somatodendritic** area; delayed 5HT1A autoreceptor desensitization then disinhibits release at terminals.', 's7-ssri'),
    F('292–296', 'All six SSRIs share selective SERT inhibition; their **secondary properties** differ (Figures 7-16 to 7-21).', 's7-ssri-agents')
  ]);
  h.facts('targets', 'net', [
    F('299–301', 'The PFC has few DATs, so DA is cleared there by **NET** (which has higher affinity for DA than NE) or COMT. NET inhibition therefore raises **NE and DA in the PFC**: the “half” of SNRIs’ two-and-a-half actions.', 's7-snri'),
    F('305', 'Therapeutic and NE-mediated side effects may appear with perhaps as little as **50%** NET occupancy.', 's7-ndri')
  ]);
  h.facts('targets', 'dat', [F('304–306', 'Rapid, brief **≥ 50%** DAT occupancy causes euphoria and reinforcement (cocaine); slow, long-lasting occupancy is less abusable. Bupropion occupies only about **10–30%** of striatal DATs.', 's7-ndri')]);
  h.facts('targets', '5ht1a', [
    F('289–292', 'Desensitization of **somatodendritic 5HT1A autoreceptors** times the onset of SSRI action.', 's7-ssri'),
    F('296–298', 'Adding 5HT1A partial agonism to SERT inhibition (SPARI) speeds autoreceptor desensitization; downstream DA release may reduce sexual dysfunction.', 's7-spari')
  ]);
  h.facts('targets', '5ht2c', [F('293, 306–308', 'On brainstem **GABA interneurons**, 5HT2C receptors inhibit NE and DA release to the PFC; antagonists (fluoxetine, agomelatine, mirtazapine, trazodone, some TCAs, olanzapine, quetiapine) disinhibit them. 5HT2C receptors in the **SCN** fluctuate in a circadian way, high at night.', 's7-agomelatine')]);
  h.facts('targets', '5ht2a', [F('311–314', 'SSRI-raised 5HT at 5HT2A (and 5HT2C) receptors may cause **sexual dysfunction, insomnia and anxiety**; SARIs block it. 5HT2A antagonism increases **slow-wave sleep**.', 's7-sari')]);
  h.facts('targets', '5ht3', [F('309–311', 'Peripheral 5HT3 receptors (chemoreceptor trigger zone, gut) mediate nausea, vomiting and diarrhea; brain 5HT3 receptors on **GABA interneurons** are excitatory, so antagonists (mirtazapine, **vortioxetine**) release glutamate, ACh and NE.', 's7-mirtazapine')]);
  h.facts('targets', '5ht7', [F('318–319', '5HT7 receptors on raphe **GABA** neurons inhibit 5HT release and on PFC GABA interneurons restrain glutamate; antagonists (vortioxetine, trazodone, quetiapine, brexpiprazole, aripiprazole, lurasidone) disinhibit both.', 's7-vortioxetine')]);
  h.facts('targets', '5ht1b1d', [F('317–318', 'Presynaptic **5HT1B/D autoreceptors** blunt 5HT build-up after SERT blockade; 5HT1B **heteroreceptors** on ACh, HA, DA and NE terminals inhibit their release. Vortioxetine’s partial agonism/antagonism removes both brakes.', 's7-vortioxetine')]);
  h.facts('targets', 'alpha2', [F('309', 'α2 **heteroreceptors** on serotonin neurons let NE brake 5HT release; α2 antagonists (mirtazapine, mianserin) therefore release **both NE and 5HT**, synergizing with reuptake inhibitors.', 's7-mirtazapine')]);
  h.facts('targets', 'alpha1', [F('327–328', 'α1 receptors are **colocalized** with 5HT2A on pyramidal neurons; blocking both releases DA in the striatum (less DIP) and PFC (antidepressant). Bladder α1 stimulation causes urinary hesitancy (milnacipran), relieved by an α1 antagonist.', 's7-augment-sda')]);
  h.facts('targets', 'mt1mt2', [F('306–308', '**Agomelatine** is an MT1/MT2 agonist; the so-called MT3 receptor is really the enzyme **NRH–quinone oxidoreductase 2**.', 's7-agomelatine')]);
  h.facts('targets', 'd3', [F('343–345', 'Only **cariprazine** and **blonanserin** bind D3 with affinity orders of magnitude above dopamine’s. Blocking presynaptic D3 autoreceptors in the **VTA** releases DA onto prefrontal **D1** receptors: a proposed antidepressant mechanism (Figures 7-72, 7-73).', 's7-bipolar-depression')]);
  h.facts('targets', 'nmda', [F('328–332', 'Ketamine blocks NMDA at the open-channel **PCP site**: NMDA block on GABA interneurons → glutamate burst → **AMPA** → mTOR or BDNF/VEGF → rapid synaptogenesis.', 's7-ketamine')]);
  h.facts('targets', 'ampa', [F('330–331', 'Glutamate released after ketamine stimulates AMPA receptors while NMDA receptors are blocked, triggering **ERK/AKT → mTOR** or **VSCC → BDNF/VEGF** signaling.', 's7-ketamine')]);
  h.facts('targets', 'gabaa', [F('320–322', 'Neuroactive steroids (brexanolone) act at both benzodiazepine-sensitive and **benzodiazepine-insensitive** GABA-A receptors; the latter (extrasynaptic, tonic) are thought to carry the antidepressant effect.', 's7-neurosteroids')]);
  h.facts('targets', 'mao', [
    F('336–338', '**MAO-A** prefers 5HT and NE (major form outside the brain); **MAO-B** prefers trace amines (serotonin neurons, platelets, lymphocytes); both destroy DA and **tyramine**. Brain MAO-A must be inhibited for antidepressant action; inhibiting both raises DA too.', 's7-maoi'),
    F('336', 'Phenelzine, tranylcypromine, isocarboxazid and selegiline inhibit MAO **irreversibly**: activity returns only after new enzyme is made, about **2–3 weeks**.', 's7-maoi')
  ]);
  h.push('targets', 'mao', 'block', ['**MAO-A**: antidepressant; **MAO-B**: boosts levodopa in Parkinson’s disease (Chapter 7)']);
  h.facts('targets', 'vssc', [
    F('335–336', 'All TCAs block VSSCs in heart and brain; in overdose this causes **coma, seizures, arrhythmia and death**.', 's7-tca'),
    F('347–353', 'Valproate may alter VSSC sensitivity; **carbamazepine**, oxcarbazepine/eslicarbazepine and **lamotrigine** bind the open-channel **α subunit**; lamotrigine and riluzole may thereby reduce **glutamate release**.', 's7-valproate-cbz')
  ]);
  h.facts('targets', 'vscc', [F('352', '**L-type** calcium channels on vascular smooth muscle are targets of antihypertensive “calcium channel blockers”; anecdotal evidence suggests dihydropyridines may help some bipolar patients.', 's7-lamotrigine')]);
  h.facts('targets', 'gsk3', [F('345–349', 'Lithium may inhibit GSK-3 and protein kinase C; **valproate** may also inhibit GSK-3.', 's7-lithium')]);
  h.facts('targets', 'trkb', [F('329–331', 'Ketamine may rapidly raise **BDNF**, acting at TRKB, to restore dendritic spines.', 's7-ketamine')]);
  h.facts('targets', 'cyp2d6', [F('302, 354', 'Converts **venlafaxine** to desvenlafaxine; rapidly metabolizes **dextromethorphan**, which is therefore combined with 2D6 inhibitors (**bupropion**, **quinidine**).', 's7-dxm')]);
  h.facts('targets', 'cyp3a4', [F('350', '**Carbamazepine** notably induces CYP3A4; oxcarbazepine has fewer 3A4 interactions.', 's7-valproate-cbz')]);
  h.facts('targets', 'sigma', [F('294–295', '**Sertraline** and, more potently, **fluvoxamine** (possibly an agonist) bind σ1; the function of σ1 sites is the “sigma enigma.” Ketamine, dextromethorphan and dextromethadone also bind σ.', 's7-ssri-agents')]);
  h.facts('targets', 'mor', [F('328, 355', 'Possible μ-opioid contributions to the antidepressant effects of **ketamine** and **dextromethadone** are debated.', 's7-dxm')]);
  h.facts('targets', 'm1', [F('294–295, 335', '**Paroxetine** has mild M1 antagonism (calming; withdrawal rebound); all **TCAs** block muscarinic receptors.', 's7-tca')]);
  h.facts('targets', 'h1', [F('308–312, 335', 'H1 antagonism causes sedation and weight gain with mirtazapine and TCAs, and contributes to low-dose **trazodone**’s hypnotic action.', 's7-sari')]);

  /* ---------------- neurotransmitter facts ---------------- */
  h.facts('nts', 'serotonin', [F('289–292', 'SSRIs act through delayed **disinhibition** of serotonin release after somatodendritic 5HT1A autoreceptors desensitize.', 's7-ssri')]);
  h.facts('nts', 'norepinephrine', [F('309', 'α2 antagonism “cuts the brake cable” on NE and, via heteroreceptors, 5HT release.', 's7-mirtazapine')]);
  h.facts('nts', 'dopamine', [F('299–301', 'In the PFC, DA is cleared by **NET**, so NET inhibitors raise prefrontal DA; only MAO-A + MAO-B inhibition or DA-acting drugs raise DA elsewhere in depression.', 's7-snri')]);
  h.facts('nts', 'glutamate', [F('328–331', 'Ketamine’s rapid antidepressant effect is thought to come from a **burst of glutamate** acting at AMPA receptors; lamotrigine and riluzole may reduce glutamate release.', 's7-ketamine')]);
  h.facts('nts', 'gaba', [F('320–322', 'GABA is low in plasma, CSF and brain in depression; GABA interneurons are reduced. Neuroactive steroids boost GABA-A function for rapid antidepressant effects.', 's7-neurosteroids')]);
  h.facts('nts', 'melatonin', [F('306–308', 'Agomelatine acts as “substitute melatonin” at SCN MT1/MT2 receptors to resynchronize circadian rhythms.', 's7-agomelatine')]);
  h.facts('nts', 'neurotrophins', [F('329–331', 'Ketamine may raise **BDNF** and **VEGF** within minutes to hours, whereas monoamine drugs take weeks.', 's7-ketamine')]);

  /* ---------------- SSRIs ---------------- */
  const SSRI = 'SSRI', ssriCls = 'Selective serotonin reuptake inhibitor (SSRI)', ssriNbn = 'Serotonin transport (SERT) inhibitor';
  const ssriUses = ['Unipolar major depression', 'Anxiety disorders, PTSD, OCD, premenstrual dysphoric disorder, eating disorders (class uses)'];
  const ssriSE = [{ e: 'Early side effects that fade with time', via: 'Acute 5HT at unwanted receptors; tolerance as postsynaptic receptors desensitize' }, { e: 'Sexual dysfunction, insomnia, activation/anxiety', via: '5HT at 5HT2A and 5HT2C receptors' }, { e: 'Nausea, GI effects', via: 'Peripheral 5HT3 stimulation' }];
  h.set('drugs', 'fluoxetine', {
    group: SSRI, short: 'An activating SSRI with 5HT2C antagonism and a very long half-life.',
    mechanism: 'Blocks **SERT**; also a **5HT2C antagonist**, which disinhibits NE and DA release and makes it **activating** from the first dose; weak **NET** inhibition only at very high doses. Half-life **2–3 days**; active metabolite about **2 weeks**.',
    targets: [T('sert', 'inhibitor', null, 'Allosteric site (Chapter 2)'), T('5ht2c', 'antagonist'), T('net', 'inhibitor', null, 'Weak; relevant only at very high doses')]
  });
  h.push('drugs', 'fluoxetine', 'uses', ['Only SSRI approved for **bulimia** (higher doses)', 'With **olanzapine**: treatment-resistant unipolar and bipolar depression', 'Best matched to reduced positive affect, hypersomnia, psychomotor retardation, apathy, fatigue']);
  h.push('drugs', 'fluoxetine', 'sideEffects', [{ e: 'Unwanted activation, even panic, in agitated, anxious or insomniac patients', via: '5HT2C antagonism' }]);
  h.facts('drugs', 'fluoxetine', [F('293–294', 'Long half-life reduces **withdrawal** reactions but means slow washout before starting drugs such as an **MAOI**; available once daily and **once weekly**.', 's7-ssri-agents')]);
  h.chapter('fluoxetine', 'ch07', '289–294, 325–326, 343');

  add({ id: 'sertraline', name: 'Sertraline', brand: 'Zoloft', group: SSRI, cls: ssriCls, nbn: ssriNbn, nts: ['serotonin', 'dopamine'], pages: '292–295',
    short: 'SSRI with weak DAT inhibition and σ1 binding.',
    mechanism: 'Blocks **SERT**; also weakly inhibits **DAT** (clinical relevance debated, though a little DAT inhibition may aid energy, motivation and concentration) and binds **σ1** receptors.',
    targets: [T('sert', 'inhibitor'), T('dat', 'inhibitor', null, 'Weak; relevance debated'), T('sigma', 'binds', null, 'σ1')],
    uses: ssriUses.concat(['Mild activation may help **atypical depression** (hypersomnia, low energy, mood reactivity)', 'Possible advantage in **psychotic/delusional depression** (σ1)', 'With bupropion (“Well-oft”)']),
    sideEffects: ssriSE.concat([{ e: 'Overactivation of some **panic** patients (titrate slowly)', via: 'Weak DAT inhibition' }]),
    facts: [F('294–295', 'σ1 actions may contribute to anxiolytic effects and benefit in psychotic and delusional depression.', 's7-ssri-agents')] }, 'fluoxetine');
  add({ id: 'paroxetine', name: 'Paroxetine', brand: 'Paxil', group: SSRI, cls: ssriCls, nbn: ssriNbn, nts: ['serotonin', 'norepinephrine', 'acetylcholine'], pages: '294–295',
    short: 'Calming SSRI with mild anticholinergic, weak NET and NOS-inhibiting actions.',
    mechanism: 'Blocks **SERT**; mild **M1** antagonism (calming, even sedating early), weak **NET** inhibition (may add antidepressant action at high doses) and inhibition of **nitric oxide synthase**.',
    targets: [T('sert', 'inhibitor'), T('m1', 'antagonist', null, 'Mild'), T('net', 'inhibitor', null, 'Weak to moderate'), T('nos', 'inhibitor')],
    uses: ssriUses,
    sideEffects: ssriSE.concat([{ e: 'Sexual dysfunction, especially in men', via: 'NOS inhibition plus 5HT2A/2C stimulation' }, { e: 'Notorious **withdrawal**: akathisia, restlessness, GI upset, dizziness, tingling', via: 'SERT inhibition plus **anticholinergic rebound**' }]),
    facts: [F('295', 'A **controlled-release** form may reduce side effects including discontinuation reactions.', 's7-ssri-agents')] }, 'sertraline');
  add({ id: 'fluvoxamine', name: 'Fluvoxamine', brand: 'Luvox', group: SSRI, cls: ssriCls, nbn: ssriNbn, nts: ['serotonin'], pages: '295',
    short: 'SSRI with potent σ1 binding; an OCD drug in the US.',
    mechanism: 'Blocks **SERT** and binds **σ1** sites more potently than sertraline; preclinical data suggest it may be a σ1 **agonist**, possibly adding anxiolytic action.',
    targets: [T('sert', 'inhibitor'), T('sigma', 'binds', null, 'σ1; possibly agonist')],
    uses: ['**OCD** (never approved for depression in the US)', 'Depression elsewhere; one of the first SSRIs launched worldwide', 'Psychotic/delusional depression', 'CR form: high remission in **OCD** and **social anxiety disorder**'],
    sideEffects: ssriSE,
    facts: [F('295', 'The **controlled-release** form allows once-daily dosing (IR often twice daily) and may cause less peak-dose sedation.', 's7-ssri-agents')] }, 'paroxetine');
  add({ id: 'citalopram', name: 'Citalopram', brand: 'Celexa', group: SSRI, cls: ssriCls, nbn: ssriNbn, nts: ['serotonin'], pages: '295–296',
    short: 'Racemic SSRI; the R enantiomer adds antihistamine action and may hinder SERT inhibition.',
    mechanism: 'A racemic mixture of **R and S** enantiomers. S inhibits **SERT**; R carries weak **antihistamine** action and may act at SERT in a way that **interferes** with S, reducing net SERT inhibition, especially at low doses.',
    targets: [T('sert', 'inhibitor', null, 'S enantiomer'), T('h1', 'antagonist', null, 'Weak; R enantiomer')],
    uses: ['Unipolar depression; favorable findings in the **elderly**'],
    sideEffects: ssriSE.concat([{ e: '**QTc prolongation** at higher doses (limits dose increases)', via: 'Dose-related' }]),
    facts: [F('295–296', 'Generally well tolerated but somewhat **inconsistent** at the lowest dose, often needing a dose increase that QTc concerns limit.', 's7-ssri-agents')] }, 'fluvoxamine');
  add({ id: 'escitalopram', name: 'Escitalopram', brand: 'Lexapro', group: SSRI, cls: ssriCls, nbn: ssriNbn, nts: ['serotonin'], pages: '296',
    short: 'The pure S enantiomer of citalopram: the “quintessential SSRI.”',
    mechanism: 'The active **S enantiomer** of citalopram, without the R enantiomer. **Pure SERT inhibition** explains almost all of its actions.',
    targets: [T('sert', 'inhibitor')],
    uses: ssriUses,
    sideEffects: ssriSE,
    facts: [F('296', 'No antihistamine action, no higher-dose **QTc** restriction, lowest dose predictably effective; perhaps the **best-tolerated** SSRI with the **fewest CYP450 interactions**.', 's7-ssri-agents')] }, 'citalopram');

  /* ---------------- SPARI, SNRIs, NDRI ---------------- */
  const AD = 'Antidepressant';
  add({ id: 'vilazodone', name: 'Vilazodone', brand: 'Viibryd', group: AD, cls: 'Serotonin partial agonist reuptake inhibitor (SPARI)', nbn: 'Serotonin reuptake inhibitor and 5HT1A partial agonist', nts: ['serotonin', 'dopamine'], pages: '296–298',
    short: 'SPARI: SERT inhibition plus 5HT1A partial agonism in one molecule.',
    mechanism: 'Inhibits **SERT** and is a **5HT1A partial agonist**. About half of SERTs and half of 5HT1A receptors are occupied immediately; partial agonism at somatodendritic autoreceptors speeds their **desensitization**, and postsynaptic 5HT1A action may release **dopamine** downstream.',
    targets: [T('sert', 'inhibitor'), T('5ht1a', 'partial agonist')],
    uses: ['Unipolar depression'],
    sideEffects: [{ e: 'Less sexual dysfunction and weight gain (observed)', via: 'Downstream DA release from 5HT1A partial agonism' }],
    facts: [F('296', 'Recreates in one drug the long-used strategy of adding a 5HT1A partial agonist (buspirone, aripiprazole, brexpiprazole, cariprazine, quetiapine) to an SSRI, avoiding drug interactions and off-target effects.', 's7-spari')] }, 'escitalopram');
  const SNRI = 'SNRI', snriCls = 'Serotonin–norepinephrine reuptake inhibitor (SNRI)', snriNbn = 'Serotonin and norepinephrine reuptake inhibitor (SERT/NET)';
  const snriSE = [{ e: 'Sweating, raised blood pressure', via: 'NET inhibition' }, { e: 'Nausea and other serotonergic effects', via: 'SERT inhibition' }];
  add({ id: 'venlafaxine', name: 'Venlafaxine', brand: 'Effexor XR', group: SNRI, cls: snriCls, nbn: snriNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '298–302',
    short: 'SNRI whose NET inhibition grows with dose; CYP2D6 converts it to desvenlafaxine.',
    mechanism: 'Inhibits **SERT** potently even at low doses and **NET** with moderate potency, robustly only at **higher doses**; no significant other receptor actions. **CYP2D6** converts it to **desvenlafaxine**, normally about twice the plasma level of parent drug.',
    targets: [T('sert', 'inhibitor', 3, 'Robust at low doses'), T('net', 'inhibitor', 2, 'Recruited at higher doses'), T('cyp2d6', 'substrate', null, 'Converted to desvenlafaxine')],
    uses: ['Unipolar depression; efficacy often rises with dose (noradrenergic boost)', 'Several **anxiety disorders**'],
    sideEffects: snriSE.concat([{ e: 'Bothersome **withdrawal**, especially after high-dose long-term use', via: 'Sudden discontinuation' }, { e: 'Nausea, worse with the IR form', via: 'IR formulation (now little used)' }]),
    facts: [F('302', '2D6 inhibitors and **poor metabolizers** shift the ratio toward parent venlafaxine, reducing NET inhibition: how much NET inhibition a dose gives is **unpredictable**. The XR form is a considerable improvement over IR.', 's7-snri-agents')] }, 'vilazodone');
  add({ id: 'desvenlafaxine', name: 'Desvenlafaxine', brand: 'Pristiq', group: SNRI, cls: snriCls, nbn: snriNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '302',
    short: 'Active metabolite of venlafaxine with more consistent NET inhibition.',
    mechanism: 'Inhibits **SERT and NET**, with **more NET relative to SERT** than venlafaxine but still more potent at SERT. As a separate drug it gives more consistent NET inhibition across patients.',
    targets: [T('sert', 'inhibitor', 3), T('net', 'inhibitor', 2, 'Relatively greater than venlafaxine')],
    uses: ['Unipolar depression'], sideEffects: snriSE,
    facts: [F('302', 'Less need for dose titration than venlafaxine because NET inhibition does not depend on CYP2D6 conversion.', 's7-snri-agents')] }, 'venlafaxine');
  add({ id: 'duloxetine', name: 'Duloxetine', brand: 'Cymbalta', group: SNRI, cls: snriCls, nbn: snriNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '299, 302–303',
    short: 'SNRI that treats depression, pain and painful physical symptoms.',
    mechanism: 'Inhibits **SERT slightly more potently than NET**. NET inhibition seems critical for pain relief and, via raised PFC NE and DA, for cognitive symptoms.',
    targets: [T('sert', 'inhibitor', 3), T('net', 'inhibitor', 2, 'Slightly weaker than SERT')],
    uses: ['Unipolar depression, including **painful physical symptoms**', 'Diabetic peripheral **neuropathic pain**, **fibromyalgia**, chronic **musculoskeletal pain** (osteoarthritis, low back)', '**Cognitive symptoms** of geriatric depression'],
    sideEffects: snriSE,
    facts: [F('302–303', 'Showed that somatic pain is a legitimate symptom of depression. Usually started **twice daily**; once daily after tolerance. Less hypertension and milder withdrawal than venlafaxine.', 's7-snri-agents')] }, 'desvenlafaxine');
  add({ id: 'milnacipran', name: 'Milnacipran', brand: 'Savella; Ixel', group: SNRI, cls: snriCls, nbn: snriNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '300, 303',
    short: 'SNRI that is more potent at NET than SERT; for fibromyalgia in the US.',
    mechanism: 'A racemic SNRI that is **more potent at NET than SERT**, unlike venlafaxine and duloxetine. The S (levo) enantiomer is the active one.',
    targets: [T('net', 'inhibitor', 3), T('sert', 'inhibitor', 2)],
    uses: ['**Fibromyalgia** (US); **depression** (Europe, Japan)', 'Possibly painful physical symptoms, neuropathic pain and cognitive symptoms (“**fibro-fog**”)'],
    sideEffects: [{ e: 'More **sweating** and **urinary hesitancy**', via: 'Robust NET inhibition (bladder α1)' }, { e: 'Energizing/activating', via: 'NET inhibition' }],
    facts: [F('303', 'The first SNRI in Japan and many European countries. Needs **twice-daily** dosing (short half-life). An α1 antagonist relieves urinary hesitancy.', 's7-snri-agents')] }, 'duloxetine');
  add({ id: 'levomilnacipran', name: 'Levomilnacipran', brand: 'Fetzima', group: SNRI, cls: snriCls, nbn: snriNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '300, 303',
    short: 'The active S enantiomer of milnacipran; once-daily SNRI for MDD.',
    mechanism: 'The active **S enantiomer** of milnacipran, with **greater NET than SERT** inhibition, in a controlled-release once-daily form.',
    targets: [T('net', 'inhibitor', 3), T('sert', 'inhibitor', 2)],
    uses: ['Unipolar major depressive disorder (US); may target **fatigue and low energy**'],
    sideEffects: snriSE,
    facts: [F('303', 'Unlike racemic milnacipran it is given **once daily**.', 's7-snri-agents')] }, 'milnacipran');
  add({ id: 'bupropion', name: 'Bupropion', brand: 'Wellbutrin', group: AD, cls: 'Norepinephrine–dopamine reuptake inhibitor (NDRI)', nbn: 'Norepinephrine and dopamine reuptake inhibitor (NET/DAT)', nts: ['norepinephrine', 'dopamine'], pages: '303–306, 333, 353–354',
    short: 'NDRI with low, slow DAT occupancy; activating, no sexual dysfunction.',
    mechanism: 'Weakly inhibits **DAT** and **NET**; active metabolites (most potently **radafaxine**, the + enantiomer of 6-hydroxy-bupropion) are more potent at NET, equally potent at DAT and concentrated in brain. PET shows only **10–30%** striatal DAT occupancy: **low, slow and long-lasting**, enough to help without abuse. Also a **CYP2D6 inhibitor**.',
    targets: [T('dat', 'inhibitor', null, 'Weak; metabolites contribute'), T('net', 'inhibitor', null, 'Weak; metabolites more potent'), T('cyp2d6', 'inhibitor')],
    uses: ['Unipolar depression, especially **reduced positive affect** (“dopamine deficiency syndrome”)', 'Augmenting or replacing SSRIs/SNRIs (residual or drug-induced low energy, interest)', '**Smoking cessation**', 'With **naltrexone**: obesity', 'With **dextromethorphan**: depression and Alzheimer agitation (in trials at publication)'],
    sideEffects: [{ e: '**Seizures** at peak plasma levels (reduced by SR and XL)', via: 'Peak drug levels' }, { e: 'Activation, stimulation', via: 'NE and DA reuptake inhibition' }, { e: 'No significant sexual dysfunction', via: 'No serotonergic component' }],
    facts: [F('306', 'IR (three times daily) → SR (twice daily) → **XL** (once daily); IR is all but abandoned.', 's7-ndri'), F('333–334', 'SSRI or SNRI + bupropion = **triple-action** combination, among the most popular in the US.', 's7-combos')],
    updates: [{ year: '2022', title: 'Combined with dextromethorphan for depression', text: '**Dextromethorphan–bupropion** (Auvelity) was approved for major depressive disorder in adults in August 2022, and for agitation associated with Alzheimer dementia in April 2026.', source: 'FDA, August 2022; Axsome Therapeutics, April 30, 2026' }] }, 'levomilnacipran');

  /* ---------------- receptor-based agents ---------------- */
  add({ id: 'agomelatine', name: 'Agomelatine', brand: 'Valdoxan', group: AD, cls: 'Melatonergic agonist and 5HT2C antagonist', nbn: 'Melatonin MT1/MT2 receptor agonist and serotonin 5HT2C receptor antagonist', nts: ['melatonin', 'serotonin', 'norepinephrine', 'dopamine'], pages: '306–308',
    short: 'MT1/MT2 agonist and 5HT2C/5HT2B antagonist that may reset circadian rhythms.',
    mechanism: 'An **MT1/MT2 agonist** (“substitute melatonin” in the SCN) and a **5HT2C** and 5HT2B **antagonist**. 5HT2C blockade disinhibits **NE and DA** release in the PFC; combined SCN actions may **resynchronize** circadian rhythms and reverse the phase delay of depression.',
    targets: [T('mt1mt2', 'agonist'), T('5ht2c', 'antagonist'), T('5ht2b', 'antagonist')],
    uses: ['Unipolar depression (many countries **outside the US**)'],
    facts: [F('307–308', 'Melatonin and 5HT2C receptors in the SCN are expressed most at night; agomelatine acts on both to reset rhythms (Figure 7-39).', 's7-agomelatine')] }, 'bupropion');
  h.set('drugs', 'mirtazapine', {
    brand: 'Remeron', cls: 'α2 antagonist (NaSSA)', nbn: 'Norepinephrine and serotonin receptor antagonist (α2, 5HT2A, 5HT2C, 5HT3, H1)',
    short: 'α2 antagonist that also blocks 5HT2A, 5HT2C, 5HT3 and H1; blocks no transporter.',
    mechanism: 'Blocks **no monoamine transporter**. **α2 antagonism** disinhibits both **NE** (autoreceptors) and **5HT** (heteroreceptors) release; **5HT2A** and **5HT2C** antagonism release DA and NE in the PFC and improve sleep; **5HT3** antagonism disinhibits glutamate, ACh and NE; **H1** antagonism sedates.',
    targets: [T('alpha2', 'antagonist', null, 'Primary therapeutic action'), T('5ht2a', 'antagonist'), T('5ht2c', 'antagonist'), T('5ht3', 'antagonist'), T('h1', 'antagonist')],
    nts: ['norepinephrine', 'serotonin', 'histamine']
  });
  h.push('drugs', 'mirtazapine', 'uses', ['Unipolar depression worldwide', 'With an **SNRI** (“**California rocket fuel**”) for nonresponse to an SNRI alone']);
  h.push('drugs', 'mirtazapine', 'sideEffects', [{ e: 'Sedation, weight gain', via: 'H1 antagonism' }]);
  h.facts('drugs', 'mirtazapine', [F('308–311', 'Five principal actions: **α2, 5HT2A, 5HT2C, 5HT3 and H1** antagonism. α2 antagonism gives a dual 5HT–NE action like an SNRI’s by a different mechanism, synergistic with reuptake blockade.', 's7-mirtazapine')]);
  h.chapter('mirtazapine', 'ch07', '308–311, 333–334');
  add({ id: 'mianserin', name: 'Mianserin', group: AD, cls: 'α2 antagonist', nbn: 'Norepinephrine receptor antagonist (α2, α1) with 5HT2A, 5HT2C, 5HT3 and H1 antagonism', nts: ['norepinephrine', 'serotonin', 'histamine'], pages: '308–309',
    short: 'Mirtazapine-like α2 antagonist with added α1 blockade; not in the US.',
    mechanism: 'Like mirtazapine (**α2, 5HT2A, 5HT2C, 5HT3, H1** antagonism) but with potent **α1 antagonism**, which mitigates serotonergic enhancement, so it boosts mainly **noradrenergic** transmission.',
    targets: [T('alpha2', 'antagonist'), T('alpha1', 'antagonist', null, 'Potent'), T('5ht2a', 'antagonist'), T('5ht2c', 'antagonist'), T('5ht3', 'antagonist'), T('h1', 'antagonist')],
    uses: ['Depression (worldwide **except the US**)'],
    facts: [F('308–309', 'Another α2 antagonist, **setiptiline**, is marketed in Japan.', 's7-mirtazapine')] }, 'mirtazapine');
  add({ id: 'trazodone', name: 'Trazodone', brand: 'Desyrel; Oleptro', group: AD, cls: 'Serotonin antagonist/reuptake inhibitor (SARI)', nbn: 'Serotonin receptor antagonist (5HT2A/2C) and reuptake inhibitor', nts: ['serotonin', 'norepinephrine', 'histamine'], pages: '311–315, 327',
    short: 'SARI: a hypnotic at low doses and an antidepressant at high doses.',
    mechanism: 'Blocks **5HT2A** and **5HT2C** receptors and **SERT**, plus 5HT1D, 5HT2B, 5HT7, **α1A/α1B**, α2B/α2C and **H1** receptors, with **5HT1A agonism**. Low doses engage only the highest-affinity targets (5HT2A, α1, H1: **hypnotic**); 150–600 mg saturates SERT and recruits the rest (**antidepressant**).',
    targets: [T('5ht2a', 'antagonist', 4), T('alpha1', 'antagonist', 4, 'α1B highest; α1A high'), T('5ht1b1d', 'antagonist', 4, '5HT1D high; 5HT1B low'), T('5ht2b', 'antagonist', 3), T('5ht1a', 'agonist', 3), T('h1', 'antagonist', 2), T('sert', 'inhibitor', 2, 'Saturated at 150–600 mg'), T('5ht2c', 'antagonist', 2), T('alpha2', 'antagonist', 2, 'α2C, α2B'), T('5ht7', 'antagonist', 2), T('d3', 'binds', 1), T('vssc', 'binds', 1, 'Rat sodium channel'), T('d2', 'binds', 1), T('d1', 'binds', 1), T('sigma', 'binds', 1, 'Nonselective σ')],
    uses: ['**Insomnia**, especially residual insomnia after SSRIs/SNRIs (25–150 mg, immediate release)', 'Unipolar depression (150–600 mg; once-nightly **XR** reduces daytime sedation)'],
    sideEffects: [{ e: 'Daytime **sedation** at peak levels with IR antidepressant dosing', via: 'H1, α1, 5HT2A antagonism' }, { e: 'No sexual dysfunction or weight gain; less insomnia and anxiety than SSRIs', via: '5HT2A/5HT2C blockade' }],
    facts: [F('314', 'Bars follow the affinity (Ki) ranking in **Figure 7-45**, highest to lowest; actions beyond those named in the text are shown as “binds.”', 's7-sari'), F('312–313', '300 mg **XR** once nightly gives levels that never fall below the antidepressant minimum, with a peak similar to 100 mg IR (Figure 7-47).', 's7-sari')] }, 'mianserin');
  add({ id: 'nefazodone', name: 'Nefazodone', group: AD, cls: 'Serotonin antagonist/reuptake inhibitor (SARI)', nbn: 'Serotonin receptor antagonist (5HT2A) and reuptake inhibitor', nts: ['serotonin', 'norepinephrine'], pages: '311, 314',
    short: 'SARI with robust 5HT2A antagonism; rarely used because of liver toxicity.',
    mechanism: 'Robust **5HT2A** antagonism with weaker **5HT2C** antagonism and **SERT** inhibition; its icon also shows **NET** inhibition and **α1** antagonism.',
    targets: [T('5ht2a', 'antagonist', null, 'Robust'), T('5ht2c', 'antagonist', null, 'Weaker'), T('sert', 'inhibitor', null, 'Weaker'), T('net', 'inhibitor'), T('alpha1', 'antagonist')],
    uses: ['Unipolar depression (rarely used now)'],
    sideEffects: [{ e: 'Rare **liver toxicity**', via: 'Idiosyncratic' }] }, 'trazodone');
  h.set('drugs', 'vortioxetine', {
    brand: 'Trintellix', cls: 'Multimodal serotonergic agent', nbn: 'Serotonin reuptake inhibitor and receptor modulator (multimodal)',
    short: 'SERT inhibitor with 5HT3/5HT7 antagonism, 5HT1A agonism and 5HT1B/D partial agonism; pro-cognitive.',
    mechanism: 'Inhibits **SERT**; **5HT3** antagonist (one of its most potent actions) and **5HT7** antagonist; **5HT1A agonist**; weak **5HT1B/D** partial agonist/antagonist. Some actions raise 5HT further (SERT, 5HT1B/D, 5HT7), others release **DA, NE, ACh and histamine** (5HT1A, 5HT1B heteroreceptors, 5HT3).',
    targets: [T('sert', 'inhibitor'), T('5ht3', 'antagonist', null, 'One of its most potent actions'), T('5ht7', 'antagonist'), T('5ht1a', 'agonist'), T('5ht1b1d', 'partial agonist', null, 'Weak partial agonist to antagonist')],
    nts: ['serotonin', 'norepinephrine', 'dopamine', 'acetylcholine', 'histamine']
  });
  h.push('drugs', 'vortioxetine', 'uses', ['Unipolar depression with **cognitive symptoms**: superior on the **DSST** (processing speed)']);
  h.facts('drugs', 'vortioxetine', [F('315–320', 'The DSST samples attention, executive function, memory and mostly **processing speed** (the “Fab Four”); vortioxetine improves it more than other antidepressants.', 's7-vortioxetine')]);
  h.chapter('vortioxetine', 'ch07', '315–320');

  /* ---------------- neuroactive steroids ---------------- */
  h.facts('drugs', 'allopregnanolone', [F('320–322', 'Given IV as **brexanolone** for postpartum depression; neuroactive steroids act at both benzodiazepine-sensitive and **benzodiazepine-insensitive** GABA-A receptors.', 's7-neurosteroids')]);
  h.chapter('allopregnanolone', 'ch07', '320–322');
  add({ id: 'brexanolone', name: 'Brexanolone', brand: 'Zulresso', group: 'Neuroactive steroid', cls: 'Neuroactive steroid (IV allopregnanolone)', nbn: 'GABA-A positive allosteric modulator (neurosteroid site)', nts: ['gaba'], pages: '320–322',
    short: 'Cyclodextrin-based IV allopregnanolone; a 60-hour infusion for postpartum depression.',
    mechanism: 'A **cyclodextrin-based intravenous** formulation of **allopregnanolone**, a PAM at the neuroactive steroid site of **benzodiazepine-sensitive and -insensitive** GABA-A receptors. Restoring neurosteroid levels after their postpartum fall rapidly reverses depression.',
    targets: [T('gabaa', 'positive allosteric modulator', null, 'Neurosteroid site; synaptic and extrasynaptic')],
    uses: ['**Postpartum depression**: 60-hour continuous IV infusion, rapid and sustained effect'],
    facts: [F('320–321', 'The 60-hour duration seems to give patients time to accommodate to lower neurosteroid levels without relapse.', 's7-neurosteroids')],
    updates: [{ year: '2025', title: 'Withdrawn from the market', text: 'At Sage Therapeutics’ request, the FDA withdrew approval of Zulresso (brexanolone) effective April 14, 2025; the company said it was no longer marketed.', source: 'Federal Register, March 14, 2025' }] }, 'allopregnanolone');
  add({ id: 'zuranolone', name: 'Zuranolone (SAGE-217)', brand: 'Zurzuvae', aka: ['SAGE-217'], group: 'Neuroactive steroid', cls: 'Oral neuroactive steroid', nbn: 'GABA-A positive allosteric modulator (neurosteroid site)', nts: ['gaba'], pages: '322',
    short: 'Synthetic oral allopregnanolone analogue (SAGE-217 in the book).',
    mechanism: 'A synthetic, **orally active allopregnanolone analogue**; like brexanolone it enhances GABA at GABA-A receptors via the neuroactive steroid site.',
    targets: [T('gabaa', 'positive allosteric modulator', null, 'Neurosteroid site')],
    uses: ['In testing (at publication) as a **rapid-onset** treatment for major depressive disorder'],
    updates: [{ year: '2023', title: 'Approved for postpartum depression', text: 'Approved in August 2023 as the first oral treatment for postpartum depression (once daily for 14 days); the major depressive disorder application received a complete response letter.', source: 'FDA, August 4, 2023' }] }, 'brexanolone');

  /* ---------------- augmentation and rapid-acting ---------------- */
  h.set('drugs', 'ketamine', {
    mechanism: 'A racemic (**R + S**) **NMDA antagonist** at the open-channel **PCP site**, with **σ1** binding; weak NET, μ-opioid and SERT actions are proposed but disputed. Subanesthetic infusions block NMDA on GABA interneurons, releasing a **burst of glutamate** that stimulates **AMPA** receptors and, via **mTOR** or **BDNF/VEGF** release, rapidly builds dendritic spines.',
    targets: [T('nmda', 'negative allosteric modulator', 1, 'Open-channel PCP site'), T('sigma', 'binds', 1, 'σ1'), T('net', 'inhibitor', null, 'Weak; disputed'), T('mor', 'binds', null, 'Weak; disputed role'), T('sert', 'inhibitor', null, 'Weak')]
  });
  h.facts('drugs', 'ketamine', [F('328–331', 'Rapid, sometimes **anti-suicidal**, effects in patients failing many monoamine drugs; benefit usually fades over **a few days** but can be re-triggered by repeated infusions or extended by monoamine drugs. Used **off-label** after multiple failures.', 's7-ketamine')]);
  h.chapter('ketamine', 'ch07', '328–331, 353');
  add({ id: 'esketamine', name: 'Esketamine', brand: 'Spravato', group: 'NMDA antagonist', cls: 'Rapid-acting antidepressant (S-ketamine)', nbn: 'Glutamate NMDA receptor antagonist (open-channel)', nts: ['glutamate'], pages: '331–332',
    short: 'Intranasal S-ketamine for treatment-resistant depression.',
    mechanism: 'The **S enantiomer** of ketamine: an NMDA antagonist (with σ binding) given **intranasally**, rapidly active without IV infusion.',
    targets: [T('nmda', 'antagonist', 1, 'Open-channel site'), T('sigma', 'binds', 1)],
    uses: ['**Treatment-resistant depression** as an augmenting agent: twice weekly at first, then weekly or every other week'],
    facts: [F('332', 'A study of up to a year of esketamine plus a switch to an untried oral monoamine drug showed sustained improvement and acceptable safety.', 's7-ketamine')],
    updates: [{ year: '2025', title: 'Monotherapy approval', text: 'Approved in 2019 as add-on treatment, esketamine nasal spray was approved in January 2025 as **monotherapy** for treatment-resistant depression.', source: 'FDA, January 2025' }] }, 'ketamine');
  add({ id: 'buspirone', name: 'Buspirone', brand: 'BuSpar', group: '5HT1A partial agonist', cls: 'Anxiolytic (5HT1A partial agonist)', nbn: 'Serotonin 5HT1A receptor partial agonist', nts: ['serotonin'], pages: '296, 333',
    short: '5HT1A partial agonist sometimes added to SSRIs/SNRIs.',
    mechanism: 'A **5HT1A partial agonist** (anxiolytic, Chapter 8). Adding it to an SSRI/SNRI resembles giving vilazodone or vortioxetine.',
    targets: [T('5ht1a', 'partial agonist')],
    uses: ['Anxiety (Chapter 8)', 'Augmentation of SSRIs/SNRIs in unipolar depression (not approved; less used than other 5HT1A agents)'],
    updates: [{ year: '2023', title: 'A buspirone analogue approved for depression', text: 'Extended-release **gepirone** (Exxua), a pharmacologic analogue of buspirone and selective 5HT1A agonist, was approved for major depressive disorder in adults in September 2023.', source: 'FDA approval announced September 2023 (Psychiatric Times, September 29, 2023)' }] }, 'zuranolone');
  add({ id: 'thyroid-hormone', name: 'Thyroid hormones', group: 'Hormone', cls: 'Augmenting agent', nbn: 'Thyroid hormone receptor agonist', nts: [], pages: '333',
    short: 'Nuclear-receptor hormones once used to augment drugs for depression.',
    mechanism: 'Bind **nuclear receptors** to form ligand-activated **transcription factors**; regulation of neuronal organization, arborization and synapse formation may boost monoamine transmission.',
    targets: [T('thr', 'agonist')],
    uses: ['Augmentation of unipolar or bipolar depression treatment, to boost efficacy or speed onset (**out of favor**)'] }, 'buspirone');
  add({ id: 'modafinil', name: 'Modafinil', brand: 'Provigil', group: 'Wake-promoting agent', cls: 'Wake-promoting agent (DAT inhibitor)', nbn: 'Dopamine reuptake inhibitor (DAT)', nts: ['dopamine'], pages: '333, 335',
    short: 'A DAT inhibitor used with an SNRI as an “arousal combo.”',
    mechanism: 'Described in Chapter 7 as **another DAT inhibitor**; fuller pharmacology appears in the sleep chapter.',
    targets: [T('dat', 'inhibitor')],
    uses: ['With an SNRI for residual **fatigue, low energy and poor concentration/alertness** in depression (arousal combo)'] }, 'thyroid-hormone');

  /* ---------------- tricyclics ---------------- */
  const TCA = 'Tricyclic antidepressant', tcaNbn = 'Norepinephrine (and serotonin) reuptake inhibitor with multiple receptor antagonism';
  const tcaCore = [T('h1', 'antagonist'), T('alpha1', 'antagonist'), T('m1', 'antagonist', null, 'Muscarinic cholinergic receptors'), T('vssc', 'blocker', null, 'Weak at therapeutic doses; lethal in overdose')];
  const tcaSE = [{ e: 'Sedation, weight gain', via: 'H1 antagonism' }, { e: 'Dry mouth, blurred vision, urinary retention, constipation', via: 'Muscarinic antagonism' }, { e: 'Orthostatic hypotension, dizziness', via: 'α1 antagonism' }, { e: 'Overdose: coma, seizures, arrhythmia, cardiac arrest (lethal dose ≈ 30-day supply)', via: 'Voltage-sensitive sodium channel blockade' }];
  const tcaUses = ['Unipolar depression (second line, for treatment resistance)', 'Anti-panic effects at antidepressant doses; low doses for neuropathic and low back pain (class)'];
  const tca = (id, name, brand, after, extra) => add(Object.assign({ id, name, brand, group: TCA, cls: 'Tricyclic antidepressant (TCA)', nbn: tcaNbn, nts: ['norepinephrine', 'serotonin', 'histamine', 'acetylcholine'], pages: '333–336', uses: tcaUses, sideEffects: tcaSE, facts: [F('335', 'Listed in **Table 7-2** (TCAs still in use); trade names: ' + brand + '.', 's7-tca')] }, extra), after);
  h.set('drugs', 'amitriptyline', {
    group: TCA, brand: 'Elavil', aka: ['Endep', 'Tryptizol', 'Laroxyl'], cls: 'Tricyclic antidepressant (TCA)', nbn: tcaNbn,
    short: 'A tricyclic blocking NET and SERT plus H1, α1, muscarinic receptors and sodium channels.',
    mechanism: 'Like most TCAs it blocks both **NET** and **SERT** to some extent, plus the four unwanted TCA actions: **H1, muscarinic, α1** and **voltage-sensitive sodium channel** blockade.',
    targets: [T('net', 'inhibitor'), T('sert', 'inhibitor', null, 'Most TCAs block both to some extent')].concat(tcaCore)
  });
  h.push('drugs', 'amitriptyline', 'uses', tcaUses);
  h.push('drugs', 'amitriptyline', 'sideEffects', tcaSE);
  h.facts('drugs', 'amitriptyline', [F('335', 'Listed in **Table 7-2** (Elavil; Endep; Tryptizol; Laroxyl).', 's7-tca')]);
  h.chapter('amitriptyline', 'ch07', '333–336');
  tca('clomipramine', 'Clomipramine', 'Anafranil', 'amitriptyline', { short: 'TCA with the strongest SERT inhibition; treats OCD.', mechanism: 'A TCA with **equal or greater potency at SERT** than NET, plus the shared H1, muscarinic, α1 and sodium channel blockade.', targets: [T('sert', 'inhibitor', null, 'Equal or greater than NET'), T('net', 'inhibitor')].concat(tcaCore), uses: ['**Obsessive–compulsive disorder**'].concat(tcaUses) });
  tca('imipramine', 'Imipramine', 'Tofranil', 'clomipramine', { short: 'Classic TCA blocking NET and SERT.', mechanism: 'A classic TCA blocking **NET** and, to some extent, **SERT**, with the shared H1, muscarinic, α1 and sodium channel blockade.', targets: [T('net', 'inhibitor'), T('sert', 'inhibitor')].concat(tcaCore) });
  const netSel = (id, name, brand, after) => tca(id, name, brand, after, { short: 'Relatively NET-selective TCA.', mechanism: 'A TCA **more selective for NET** than SERT, with the shared H1, muscarinic, α1 and sodium channel blockade.', targets: [T('net', 'inhibitor', null, 'Relatively selective')].concat(tcaCore), nts: ['norepinephrine', 'histamine', 'acetylcholine'] });
  netSel('desipramine', 'Desipramine', 'Norpramin; Pertofran', 'imipramine');
  netSel('nortriptyline', 'Nortriptyline', 'Pamelor; Aventyl', 'desipramine');
  netSel('protriptyline', 'Protriptyline', 'Vivactil', 'nortriptyline');
  netSel('maprotiline', 'Maprotiline', 'Ludiomil', 'protriptyline');
  const gen = (id, name, brand, after) => tca(id, name, brand, after, { short: 'Tricyclic listed in Table 7-2.', mechanism: 'Listed among TCAs still in use. The book describes TCAs as a class: all block **NET** (many also SERT) and share H1, muscarinic, α1 and sodium channel blockade; individual profiles are not detailed.', targets: [T('net', 'inhibitor', null, 'Class property')].concat(tcaCore) });
  gen('amoxapine', 'Amoxapine', 'Asendin', 'maprotiline');
  gen('doxepin', 'Doxepin', 'Sinequan; Adapin', 'amoxapine');
  gen('trimipramine', 'Trimipramine', 'Surmontil', 'doxepin');
  gen('dothiepin', 'Dothiepin', 'Prothiaden', 'trimipramine');
  gen('lofepramine', 'Lofepramine', 'Deprimyl; Gamanil', 'dothiepin');
  add({ id: 'tianeptine', name: 'Tianeptine', brand: 'Coaxil; Stablon', group: TCA, cls: 'Listed with the tricyclics (Table 7-2)', pages: '335', nts: [],
    short: 'Listed in Table 7-2 among tricyclics still in use; pharmacology not described.',
    mechanism: 'Appears in the book’s table of tricyclics still in use; Chapter 7 does not describe its pharmacology.',
    uses: ['Depression (outside the US)'],
    facts: [F('335', 'Listed in **Table 7-2** (Coaxil; Stablon).', 's7-tca')] }, 'lofepramine');

  /* ---------------- MAOIs ---------------- */
  const MAOI = 'MAO inhibitor', maoiNbn = 'Monoamine oxidase inhibitor (MAO-A and MAO-B, irreversible)';
  const maoiSE = [{ e: '**Hypertensive crisis** with dietary tyramine', via: 'MAO-A inhibition prevents breakdown of tyramine-released NE' }, { e: 'Blood pressure rise with sympathomimetic drugs', via: 'Drug interaction' }, { e: 'Potentially fatal **serotonin syndrome** with serotonin reuptake inhibitors', via: 'Drug interaction' }];
  const maoiUses = ['Treatment-resistant unipolar depression (among the most powerful options)', '**Panic disorder** and **social anxiety disorder**'];
  const maoi = (id, name, brand, after, extra) => add(Object.assign({ id, name, brand, group: MAOI, cls: 'Irreversible MAO inhibitor', nbn: maoiNbn, nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '336–338', targets: [T('mao', 'inhibitor', null, 'Irreversible; MAO-A and MAO-B')], uses: maoiUses, sideEffects: maoiSE }, extra), after);
  maoi('phenelzine', 'Phenelzine', 'Nardil', 'tianeptine', { short: 'Classic irreversible MAOI.', mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; enzyme activity returns only after new enzyme is synthesized (about 2–3 weeks). Inhibiting both raises 5HT, NE **and DA**.' });
  maoi('tranylcypromine', 'Tranylcypromine', 'Parnate', 'phenelzine', { short: 'Irreversible MAOI modeled on amphetamine.', mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; its structure is modeled on **amphetamine**, so it also has amphetamine-like **dopamine-releasing** properties.' });
  maoi('isocarboxazid', 'Isocarboxazid', 'Marplan', 'tranylcypromine', { short: 'Classic irreversible MAOI.', mechanism: 'Irreversibly inhibits **MAO-A and MAO-B**; activity returns after about 2–3 weeks.' });
  maoi('selegiline', 'Selegiline', 'Emsam; Eldepryl', 'isocarboxazid', { cls: 'Irreversible MAO inhibitor (MAO-B selective at low doses)', short: 'MAOI metabolized to l-amphetamine and l-methamphetamine; MAO-B selective at low doses.', mechanism: 'An irreversible MAOI. At **selective MAO-B** doses it boosts levodopa in Parkinson’s disease but is not antidepressant; inhibiting both forms is needed for depression. Has no amphetamine-like action itself but is metabolized to **l-amphetamine and l-methamphetamine**.', uses: ['Depression (when MAO-A is also inhibited)', '**Parkinson’s disease** (MAO-B selective doses)'] });
  add({ id: 'rasagiline', name: 'Rasagiline', brand: 'Azilect', group: 'Parkinson’s disease treatment', cls: 'MAO-B inhibitor', nbn: 'Monoamine oxidase B inhibitor', nts: ['dopamine'], pages: '338',
    short: 'Selective MAO-B inhibitor for Parkinson’s disease; not antidepressant.',
    mechanism: 'Selectively inhibits **MAO-B**, boosting concomitant **levodopa** and reducing on/off fluctuations; at selective doses it does not treat depression.',
    targets: [T('mao', 'inhibitor', null, 'MAO-B selective')], uses: ['**Parkinson’s disease**'] }, 'selegiline');
  add({ id: 'safinamide', name: 'Safinamide', brand: 'Xadago', group: 'Parkinson’s disease treatment', cls: 'MAO-B inhibitor', nbn: 'Monoamine oxidase B inhibitor', nts: ['dopamine'], pages: '338',
    short: 'Selective MAO-B inhibitor for Parkinson’s disease; not antidepressant.',
    mechanism: 'Selectively inhibits **MAO-B**; approved for Parkinson’s disease, not effective for depression at selective doses.',
    targets: [T('mao', 'inhibitor', null, 'MAO-B selective')], uses: ['**Parkinson’s disease**'] }, 'rasagiline');
  add({ id: 'iproniazid', name: 'Iproniazid', group: MAOI, cls: 'MAO inhibitor (historical)', nbn: 'Monoamine oxidase inhibitor', nts: ['serotonin', 'norepinephrine', 'dopamine'], pages: '336',
    short: 'The anti-tuberculosis drug that became the first antidepressant.',
    mechanism: 'An anti-tuberculosis drug found by accident to improve depression in tuberculosis patients; its antidepressant action was due to **MAO inhibition**, unrelated to its antitubercular effect.',
    targets: [T('mao', 'inhibitor')], uses: ['Historical: the **first** clinically effective drug for depression'] }, 'safinamide');
  h.facts('drugs', 'amphetamine', [F('337', 'Amphetamine is also a **weak, reversible MAO inhibitor**; some MAOIs (tranylcypromine, selegiline via metabolites) are closely linked to amphetamine.', 's7-maoi')]);
  h.chapter('amphetamine', 'ch07', '337, 356');

  /* ---------------- bipolar: serotonin/dopamine agents (Table 7-1) ---------------- */
  const t71 = {
    aripiprazole: ['325–327', 'Table 7-1: approved for **bipolar mania** and **maintenance** and as an **adjunct for MDD**; one of the most prescribed augmenters in the US; **5HT1A partial agonism** (plus D3, 5HT7, 5HT2C, α2) may explain antidepressant action; some **akathisia**; not approved for bipolar depression.', 's7-augment-sda'],
    asenapine: ['326', 'Table 7-1: approved for **bipolar mania** and **maintenance**; evidence in **mania with mixed features**.', 's7-sda-mania'],
    brexpiprazole: ['327–328', 'Table 7-1: approved as an **adjunct for MDD** only. Stronger 5HT2A, 5HT1A and **α1** binding than aripiprazole (possibly less akathisia); α1 + 5HT2A synergy may aid antidepressant action and evidence in Alzheimer agitation and PTSD.', 's7-augment-sda'],
    cariprazine: ['343–345', 'Table 7-1: approved for **bipolar mania** and **bipolar depression**; evidence in mania with mixed features and depression with mixed features. The most potent **D3** binder: VTA D3 blockade releases DA onto prefrontal D1 receptors.', 's7-bipolar-depression'],
    lurasidone: ['343', 'Table 7-1: approved for **bipolar depression**; never tested in mania. The only agent with a large randomized trial in **unipolar depression with mixed features**; used at lower doses than for psychosis.', 's7-bipolar-depression'],
    olanzapine: ['325–326, 343', 'Table 7-1: mania, maintenance; with **fluoxetine** for bipolar depression and treatment-resistant MDD; post hoc evidence in mania with mixed features. The combination acts as a potent SERT/5HT2C inhibitor but causes weight gain.', 's7-augment-sda'],
    quetiapine: ['326, 343', 'Table 7-1: mania, maintenance, **bipolar depression** and **adjunct for MDD**; antidepressant action may come from norquetiapine at NET and 5HT2C plus 5HT2A, 5HT7, α2A antagonism and 5HT1A agonism.', 's7-augment-sda'],
    risperidone: ['326', 'Table 7-1: approved for **bipolar mania** and **maintenance**.', 's7-sda-mania'],
    ziprasidone: ['326', 'Table 7-1: approved for **bipolar mania** and **maintenance**; evidence in **mania with mixed features**.', 's7-sda-mania']
  };
  Object.keys(t71).forEach(id => { const [p, txt, sec] = t71[id]; h.facts('drugs', id, [F(p, txt, sec)]); h.chapter(id, 'ch07', p); });
  h.facts('drugs', 'blonanserin', [F('344', 'With cariprazine, one of only two agents whose **D3 affinity** is orders of magnitude higher than dopamine’s (Figure 7-72).', 's7-bipolar-depression')]);
  h.chapter('blonanserin', 'ch07', '344');
  h.facts('drugs', 'iloperidone', [F('328', 'Among the agents with the lowest DIP, attributed to robust **α1 + 5HT2A** antagonism.', 's7-augment-sda')]);
  h.facts('drugs', 'clozapine', [F('328', 'Among the agents with the lowest DIP, attributed to robust **α1 + 5HT2A** antagonism.', 's7-augment-sda')]);

  /* ---------------- lithium and anticonvulsants ---------------- */
  h.set('drugs', 'lithium', {
    short: 'An ion with uncertain mechanism; proven in mania and in preventing suicide.',
    mechanism: 'An **ion** whose mechanism is uncertain. Candidates are in signal transduction: inhibition of **inositol monophosphatase**, modulation of **G proteins**, and regulation of growth-factor and plasticity genes via cascades including inhibition of **GSK-3** and **protein kinase C**.',
    targets: [T('gsk3', 'inhibitor', null, 'Possible mechanism'), T('impase', 'inhibitor', null, 'Possible mechanism'), T('pkc', 'inhibitor', null, 'Possible mechanism')],
    uses: ['**Manic episodes** and prevention of recurrence, especially of mania (perhaps less for depression)', 'Well established to help **prevent suicide** in mood disorders', 'Bipolar depression and augmentation in unipolar depression (not approved; lower doses; out of favor)', 'Added to serotonin/dopamine agents in mania']
  });
  h.push('drugs', 'lithium', 'sideEffects', [{ e: 'GI upset: dyspepsia, nausea, vomiting, diarrhea', via: 'Lithium' }, { e: 'Weight gain, hair loss, acne, tremor, sedation, decreased cognition, incoordination', via: 'Lithium' }, { e: 'Long-term **thyroid** and **kidney** effects', via: 'Lithium' }, { e: 'Toxicity risk: **narrow therapeutic window**; monitor plasma levels', via: 'Pharmacokinetics' }]);
  h.facts('drugs', 'lithium', [F('345–346', 'Used for more than 50 years. Modern expert use: one member of a **portfolio**, often **once daily** and at **lower doses** combined with other agents, rather than high-dose monotherapy for euphoric mania.', 's7-lithium')]);
  h.chapter('lithium', 'ch07', '332, 345–346, 353');
  h.set('drugs', 'valproate', {
    aka: ['Valproic acid', 'Sodium valproate'], short: 'Mania-minded anticonvulsant with uncertain mechanism (VSSC, GABA, signal transduction).',
    mechanism: 'Mechanism uncertain. Three hypotheses: altering **VSSC** sensitivity (binding channel or regulatory units, or inhibiting phosphorylating enzymes) to reduce glutamate release; **enhancing GABA** (more release, less reuptake or slower breakdown by GABA-T); and regulating **signal transduction** (inhibiting GSK-3, PKC and MARCKS; activating ERK, BCL2 and GAP43). May also act at calcium channels and indirectly block glutamate.',
    targets: [T('vssc', 'modulator', null, 'Possible; site unknown'), T('gabat', 'inhibitor', null, 'One possible way it enhances GABA'), T('gsk3', 'inhibitor', null, 'Possible'), T('pkc', 'inhibitor', null, 'Possible'), T('vscc', 'modulator', null, 'Possible; poorly characterized')],
    uses: ['**Acute mania** (proven); commonly long term to prevent mania (less established)', 'Possibly **rapid cycling** and **mixed** episodes (some experts), usually in combination', 'Epilepsy; **migraine**']
  });
  h.push('drugs', 'valproate', 'sideEffects', [{ e: 'Hair loss, weight gain, sedation', via: 'Dose-related; harm adherence' }, { e: 'Bone marrow, liver and pancreatic toxicity; monitor counts and platelets', via: 'Chronic exposure' }, { e: '**Neural-tube defects** and other fetal toxicity', via: 'Teratogenic' }, { e: 'Amenorrhea, **polycystic ovaries**, hyperandrogenism, obesity, insulin resistance in women', via: 'Valproate exposure' }]);
  h.facts('drugs', 'valproate', [F('349', 'Raises **lamotrigine** levels, increasing rash risk unless lamotrigine is titrated slowly (p. 352).', 's7-lamotrigine')]);
  h.chapter('valproate', 'ch07', '346–350, 353');
  const AC = 'Anticonvulsant';
  add({ id: 'carbamazepine', name: 'Carbamazepine', brand: 'Tegretol; Equetro', group: 'Mood stabilizer', cls: 'Anticonvulsant; antimanic', nbn: 'Voltage-sensitive sodium channel blocker', nts: ['glutamate'], pages: '346–347, 350',
    short: 'Mania-minded anticonvulsant blocking the VSSC α subunit; CYP3A4 inducer.',
    mechanism: 'Thought to bind a site **within the α subunit** of **voltage-sensitive sodium channels** in the open conformation, unlike valproate; may also act at calcium and potassium channels and thereby enhance GABA’s inhibitory actions.',
    targets: [T('vssc', 'blocker', null, 'α subunit, open channel'), T('cyp3a4', 'inducer', null, 'Notable inducer')],
    uses: ['**Acute mania** (first anticonvulsant shown to work; FDA-approved later as a once-daily controlled-release form)', 'Epilepsy; **neuropathic pain**'],
    sideEffects: [{ e: 'Profound early **bone marrow suppression**: monitor blood counts', via: 'Carbamazepine' }, { e: 'Drug interactions', via: '**CYP3A4 induction**' }, { e: 'Sedation', via: 'Ion channel actions' }, { e: '**Neural-tube defects**', via: 'Teratogenic' }],
    facts: [F('347', 'Table 7-3: epilepsy ++++, treat from above ++++, stabilize from above ++, treat from below +, stabilize from below +/−.', 's7-anticonvulsants')] }, 'valproate');
  add({ id: 'lamotrigine', name: 'Lamotrigine', brand: 'Lamictal', group: 'Mood stabilizer', cls: 'Anticonvulsant; depression-minded mood stabilizer', nbn: 'Voltage-sensitive sodium channel blocker; glutamate release inhibitor', nts: ['glutamate'], pages: '346–347, 350–353',
    short: 'Depression-minded anticonvulsant that prevents recurrence of both poles; rash risk.',
    mechanism: 'Binds the **open-channel VSSC α subunit** (like carbamazepine) and may also act at calcium and potassium channels. Uniquely, it may **reduce glutamate release**, via VSSCs or an unidentified synaptic action, which could explain why it treats and stabilizes **from below**.',
    targets: [T('vssc', 'blocker', null, 'α subunit, open channel')],
    uses: ['Prevention of **recurrence of mania and depression** in bipolar disorder (approved)', '**Bipolar depression** (believed effective by experts; not FDA-approved)', 'Added to serotonin/dopamine agents when depression is not controlled'],
    sideEffects: [{ e: '**Rash**, rarely **Stevens–Johnson syndrome** (toxic epidermal necrolysis)', via: 'Minimized by very slow titration and managing interactions (e.g., **valproate** raises levels)' }],
    facts: [F('347', 'Table 7-3: epilepsy ++++, treat from above +/−, stabilize from above ++++, treat from below +++, stabilize from below ++++.', 's7-anticonvulsants'), F('351–352', 'Not approved for mania, perhaps because its sodium channel action is too weak or its long **titration** prevents the quick action mania needs.', 's7-lamotrigine')] }, 'carbamazepine');
  add({ id: 'oxcarbazepine', name: 'Oxcarbazepine', brand: 'Trileptal', group: AC, cls: 'Anticonvulsant (prodrug of licarbazepine)', nbn: 'Voltage-sensitive sodium channel blocker', nts: ['glutamate'], pages: '347, 352',
    short: 'Carbamazepine relative and prodrug; better tolerated but unproven in bipolar disorder.',
    mechanism: 'Structurally related to, but not a metabolite of, carbamazepine. A **prodrug** converted to the 10-hydroxy (monohydroxy) derivative **licarbazepine**, whose active S form is **eslicarbazepine**; presumed to bind the open-channel VSSC α subunit.',
    targets: [T('vssc', 'blocker', null, 'Via licarbazepine; α subunit')],
    uses: ['Epilepsy', 'Used **off-label**, especially for mania, despite never being proven in acute mania or depression'],
    sideEffects: [{ e: 'Less sedation, bone marrow toxicity and CYP3A4 interaction than carbamazepine', via: 'Different metabolism' }],
    facts: [F('347', 'Table 7-3 (oxcarbazepine/licarbazepine): epilepsy ++++, treat from above ++, stabilize from above +, treat and stabilize from below +/−.', 's7-anticonvulsants')] }, 'lamotrigine');
  add({ id: 'eslicarbazepine', name: 'Eslicarbazepine', brand: 'Aptiom', group: AC, cls: 'Anticonvulsant (active S-licarbazepine)', nbn: 'Voltage-sensitive sodium channel blocker', nts: ['glutamate'], pages: '350, 352',
    short: 'The active S enantiomer of licarbazepine, oxcarbazepine’s active form.',
    mechanism: 'The active **S enantiomer of licarbazepine**, through which oxcarbazepine works; presumed VSSC α-subunit binding like carbamazepine.',
    targets: [T('vssc', 'blocker', null, 'α subunit')],
    uses: ['Anticonvulsant; used off-label, especially for mania'] }, 'oxcarbazepine');
  add({ id: 'topiramate', name: 'Topiramate', brand: 'Topamax', group: AC, cls: 'Anticonvulsant', nts: [], pages: '347, 352',
    short: 'Anticonvulsant with ambiguous bipolar results; causes weight loss.',
    mechanism: 'An anticonvulsant also approved for migraine; Chapter 7 does not detail its mechanism.',
    uses: ['Epilepsy; **migraine**', 'Adjunct to drugs that cause weight gain (**weight loss**)', 'Tested in stimulant and alcohol use disorders', 'Bipolar disorder: **ambiguous** trials; not clearly a mood stabilizer'],
    sideEffects: [{ e: 'Weight loss', via: 'Topiramate' }, { e: 'Unacceptable sedation in some', via: 'Topiramate' }],
    facts: [F('347', 'Table 7-3: epilepsy ++++, treat and stabilize from above +/−.', 's7-anticonvulsants'), F('352', 'The book says it is combined with **bupropion** for weight loss; the marketed weight-loss combinations pair bupropion with naltrexone and topiramate with phentermine.', 's7-lamotrigine')] }, 'eslicarbazepine');
  add({ id: 'riluzole', name: 'Riluzole', brand: 'Rilutek', group: 'Glutamate modulator', cls: 'Glutamate release inhibitor (ALS drug)', nbn: 'Voltage-sensitive sodium channel blocker; glutamate release inhibitor', nts: ['glutamate'], pages: '347, 352–353',
    short: 'ALS drug that may reduce glutamate release like lamotrigine.',
    mechanism: 'Developed to slow **ALS**; theoretically binds **VSSCs** and prevents **glutamate release**, like the action postulated for lamotrigine, to reduce excitotoxicity.',
    targets: [T('vssc', 'blocker', null, 'Theoretical')],
    uses: ['**Amyotrophic lateral sclerosis**', 'Bipolar depression: theoretical rationale (excess glutamate)'],
    facts: [F('347', 'Table 7-3: epilepsy +, treat from below +, stabilize from below +/−.', 's7-anticonvulsants')] }, 'topiramate');
  h.facts('drugs', 'gabapentin', [F('347, 352', 'Table 7-3: little or no mood-stabilizing action (+/− from above) but robust for **pain** and **anxiety**.', 's7-lamotrigine')]);
  h.chapter('gabapentin', 'ch07', '347, 352');
  h.facts('drugs', 'pregabalin', [F('347, 352', 'Table 7-3: little or no mood-stabilizing action (+/− from above) but robust for **pain** and **anxiety**.', 's7-lamotrigine')]);
  h.chapter('pregabalin', 'ch07', '347, 352');

  /* ---------------- future treatments ---------------- */
  h.set('drugs', 'dextromethorphan', {
    mechanism: 'A **weak NMDA antagonist** with stronger binding at **SERT** and **σ1** (also α1D and weak μ-opioid). It is rapidly metabolized by **CYP2D6**, so it is combined with a 2D6 inhibitor: **bupropion** (also an NDRI, with possible synergy) or **quinidine**. A **deuterated** form extends its half-life.',
    targets: [T('sert', 'inhibitor', 2), T('sigma', 'binds', 1, 'σ1'), T('nmda', 'antagonist', 1, 'Open-channel site'), T('alpha1', 'binds', 1, 'α1D'), T('mor', 'binds', null, 'Weak'), T('cyp2d6', 'substrate', null, 'Rapid metabolism')]
  });
  h.facts('drugs', 'dextromethorphan', [F('353–354', 'With **quinidine**: approved for **pseudobulbar affect**. With **bupropion** (AXS-05): FDA breakthrough therapy for MDD and fast track for TRD and Alzheimer agitation (at publication). Bars follow the plus signs in **Figure 7-84**.', 's7-dxm')]);
  h.push('drugs', 'dextromethorphan', 'updates', [
    { year: '2026', title: 'Approved for Alzheimer agitation', text: 'Axsome announced FDA approval of dextromethorphan–bupropion (Auvelity) for agitation associated with dementia due to Alzheimer disease on April 30, 2026.', source: 'Axsome Therapeutics, April 30, 2026' },
    { year: '2024', title: 'Deuterated dextromethorphan–quinidine trial failed', text: 'AVP-786 (deuterated dextromethorphan with quinidine) missed its primary agitation endpoint in a phase 3 Alzheimer dementia trial reported in February 2024.', source: 'Otsuka, February 12, 2024' }
  ]);
  h.chapter('dextromethorphan', 'ch07', '353–355');
  add({ id: 'quinidine', name: 'Quinidine', group: 'CYP2D6 inhibitor', cls: 'CYP2D6 inhibitor (antiarrhythmic)', nts: [], pages: '353–354',
    short: 'CYP2D6 inhibitor that boosts dextromethorphan levels.',
    mechanism: 'Inhibits **CYP2D6** at doses below those with cardiovascular actions, preventing rapid breakdown of dextromethorphan.',
    targets: [T('cyp2d6', 'inhibitor')],
    uses: ['With dextromethorphan: **pseudobulbar affect** (approved); depression and Alzheimer agitation (in trials at publication)'] }, 'dextromethorphan');
  h.set('drugs', 'dextromethadone', {
    aka: ['Esmethadone', 'REL-1017'],
    mechanism: 'The **dextro** enantiomer of methadone: a relatively more potent **NMDA antagonist** with much weaker μ-opioid agonism than levomethadone. Other binding (5HT2A, δ-opioid, SERT, σ) is less well characterized; μ action might enhance NMDA blockade via **NMDA–μ receptor dimers** (speculative).',
    targets: [T('mor', 'agonist', 2, 'Weaker than levomethadone'), T('5ht2a', 'binds', 1), T('nmda', 'antagonist', 1), T('sert', 'inhibitor', 1), T('sigma', 'binds', 1)]
  });
  h.facts('drugs', 'dextromethadone', [F('355', 'In clinical development (at publication) as a **rapid-onset** treatment for major depression with promising early results. Bars follow **Figure 7-86**; δ-opioid binding (+) has no separate target entry.', 's7-dxm')]);
  h.chapter('dextromethadone', 'ch07', '355');
  h.set('drugs', 'mdma', { mechanism: 'An amphetamine derivative: a powerful **SERT inhibitor** with **VMAT2** inhibition (it is a false substrate), so it releases **serotonin** (and dopamine). Released 5HT acts at all serotonin receptors, especially **5HT2A**.' });
  h.push('drugs', 'mdma', 'sideEffects', [{ e: '**Hyperthermia**, organ damage, death (especially dancing all night, dehydrated)', via: 'Possibly 5HT2A stimulation' }, { e: 'Distorted sensory and time perception, hallucinations', via: '5HT2A stimulation' }]);
  h.facts('drugs', 'mdma', [F('356–357', 'In hallucinogen-assisted psychotherapy it may promote **trust, closeness**, energy and emotional warmth. Tested for PTSD, existential distress in terminal illness, social anxiety in autism, refractory depression and substance abuse. Street MDMA is often contaminated.', 's7-psychedelics')]);
  h.chapter('mdma', 'ch07', '355–358');
  h.set('drugs', 'psilocybin', {
    mechanism: 'A prodrug rapidly **dephosphorylated** to **psilocin**. Both bind several serotonin receptors (5HT1A, 5HT2A, 5HT2C and others); hallucinations are linked to **5HT2A agonism**, reversed by 5HT2A antagonists but not selective D2 antagonists.',
    targets: [T('5ht2a', 'agonist', 3), T('5ht2b', 'binds', 2), T('5ht6', 'binds', 1), T('5ht7', 'binds', 1)]
  });
  h.facts('drugs', 'psilocybin', [
    F('357', 'Bars follow psilocybin’s strip in **Figure 7-88** (5HT1E omitted). Psilocin’s strip differs: **5HT7 +++, 5HT2B +++, 5HT2A ++**, and + at 5HT1D, 5HT1E, 5HT2C, 5HT6, 5HT5, 5HT1B and 5HT1A.', 's7-psychedelics'),
    F('358', 'FDA **breakthrough therapy** designation for depression; studied for existential distress in terminal illness, substance abuse and PTSD.', 's7-psychedelics')
  ]);
  h.push('drugs', 'psilocybin', 'updates', [{ year: '2026', title: 'Phase 3 program and filing', text: 'Compass Pathways reported positive phase 3 results for psilocybin (COMP360) in treatment-resistant depression; as of May 2026 a rolling new drug application was under way, with completion planned for late 2026. Not yet approved at that time.', source: 'Compass Pathways first-quarter 2026 report, May 13, 2026' }]);
  h.chapter('psilocybin', 'ch07', '355–358');

  /* ---------------- circuits: fill Chapter 6 placeholders and add treatment maps ---------------- */
  const cx = id => db.circuits.find(c => c.id === id);
  const fill = (id, treat) => { const c = cx(id); if (!c) throw new Error('no circuit ' + id); c.treat = treat; };
  fill('mde-mood', ['Monoamine reuptake inhibitors: [[drug:escitalopram|SSRIs]], [[drug:duloxetine|SNRIs]] (Ch 7)', 'Depressed mood is among the symptoms that respond best (Figure 7-5)']);
  fill('mde-psychomotor', ['Retardation: activating agents such as [[drug:fluoxetine|fluoxetine]] (5HT2C) or [[drug:bupropion|bupropion]] (Ch 7)', 'Retardation usually responds well to drugs for depression']);
  fill('mania-thought', ['Treat from above (Ch 7): serotonin/dopamine blockers, [[drug:lithium|lithium]], [[drug:valproate|valproate]], [[drug:carbamazepine|carbamazepine]]']);
  fill('mania-mood', ['Treat from above (Ch 7): serotonin/dopamine blockers, [[drug:lithium|lithium]], [[drug:valproate|valproate]], [[drug:carbamazepine|carbamazepine]]']);
  fill('mania-sleep', ['Mania-minded treatments (Ch 7) for the episode as a whole; the book does not single out a treatment for this symptom']);
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch07', pages });
  db.circuits.push(
    C('res-insomnia', 'Residual symptoms after SSRI/SNRI', 'Residual insomnia', 'Hypothalamus and arousal centers (Chapter 6)', ['Histamine', 'Norepinephrine', 'Serotonin', 'GABA'], ['Add a hypnotic: low-dose [[drug:trazodone|trazodone]] (5HT2A, α1, H1 antagonism)'], '312'),
    C('res-fatigue', 'Residual symptoms after SSRI/SNRI', 'Residual fatigue, low energy, poor concentration', 'Prefrontal cortex, striatum (Chapter 6)', ['Dopamine', 'Norepinephrine'], ['Add [[drug:bupropion|bupropion]] (triple action)', 'Arousal combo: SNRI + stimulant or [[drug:modafinil|modafinil]]'], '306, 333–335'),
    C('res-pain', 'Residual symptoms after SSRI/SNRI', 'Painful physical symptoms', 'Descending pain pathways (Chapter 6)', ['Norepinephrine', 'Serotonin'], ['SNRIs: [[drug:duloxetine|duloxetine]], [[drug:milnacipran|milnacipran]] (NET inhibition seems critical)'], '302–303'),
    C('res-cognition', 'Residual symptoms after SSRI/SNRI', 'Slowed processing speed and other cognitive symptoms', 'Prefrontal cortex networks', ['Serotonin', 'Dopamine', 'Norepinephrine', 'Acetylcholine', 'Histamine'], ['[[drug:vortioxetine|Vortioxetine]] (best on DSST)', 'NET inhibition (duloxetine, milnacipran)'], '303, 315–320'),
    C('res-positive', 'Residual symptoms after SSRI/SNRI', 'Reduced positive affect (loss of joy, interest, energy)', 'Mesocortical and mesostriatal dopamine', ['Dopamine', 'Norepinephrine'], ['Switch to or add [[drug:bupropion|bupropion]]', 'D3 antagonism/partial agonism ([[drug:cariprazine|cariprazine]])', 'MAO-A + MAO-B inhibition for refractory cases'], '306, 338, 344'),
    C('bp-depression', 'Bipolar depression', 'Depressive episode in bipolar disorder (treat from below)', 'Mood circuits (Chapter 6)', ['Serotonin', 'Dopamine', 'Norepinephrine', 'Glutamate'], ['First line: [[drug:quetiapine|quetiapine]], [[drug:lurasidone|lurasidone]], [[drug:cariprazine|cariprazine]], olanzapine–fluoxetine', 'Add [[drug:lamotrigine|lamotrigine]]; reuptake inhibitors only second line'], '342–345, 353'),
    C('mixed-depression', 'Depression with mixed features', 'Depression plus subthreshold manic symptoms', 'Mood circuits (Chapter 6)', ['Dopamine', 'Serotonin', 'Norepinephrine'], ['Serotonin/dopamine agents approved for bipolar depression, e.g., [[drug:lurasidone|lurasidone]], [[drug:cariprazine|cariprazine]]', 'Avoid relying on reuptake inhibitors (activation, mania, suicidality)'], '342–345'),
    C('postpartum', 'Postpartum depression', 'Sudden depression after delivery', 'GABA-A tonic inhibition after the fall in neuroactive steroids', ['GABA'], ['[[drug:brexanolone|Brexanolone]] 60-hour IV infusion'], '320–322')
  );
  clean();
};
