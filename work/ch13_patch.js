// Chapter 13 library enrichment: reward circuits, drugs of abuse, addiction treatments, impulsive–compulsive circuits.
module.exports = function (db, h) {
  const F = (pages, text, sec) => ({ ch: 'ch13', pages, text, sec });
  const T = (t, action, s, note) => { const o = { t, action }; if (s) o.s = s; if (note) o.note = note; return o; };

  /* ---------------- neurotransmitters ---------------- */
  h.set('nts', 'endorphin', { synthesis: [['POMC (pro-opiomelanocortin)', 'Precursor protein in opioid neurons (e.g., arcuate nucleus)'], ['β-Endorphin', 'Cleaved from POMC; acts at **μ** receptors']],
    pathways: [{ name: 'Arcuate → VTA', route: '**Arcuate nucleus** opioid neurons → VTA glutamate and GABA neurons', role: 'Reward: drives mesolimbic dopamine release; alcohol reward' }],
    roles: ['Reward and reinforcement (“liking”)', 'Analgesia (descending pathways, Chapter 9)'] });
  h.facts('nts', 'endorphin', [
    F('559', 'Three parallel opioid systems: **POMC → β-endorphin → μ**; proenkephalin → **enkephalin → δ**; prodynorphin → **dynorphin → κ**.', 's13-opioids'),
    F('554–556', 'Alcohol may release β-endorphin (or act at μ directly) in the VTA, driving dopamine release: the rationale for **naltrexone**.', 's13-alcohol')
  ]);
  h.set('nts', 'endocannabinoids', {
    synthesis: [['Membrane lipid precursors', 'Stored in the **postsynaptic** membrane'], ['Anandamide and 2-AG', 'Made **on demand** when the postsynaptic neuron is activated']],
    roles: ['**Retrograde** inhibition of presynaptic transmitter release via CB1', 'Modulate mesolimbic reward (“the brain’s own marijuana”)', 'Immune modulation via CB2']
  });
  h.facts('nts', 'endocannabinoids', [F('563', '**2-AG** is a high-efficacy agonist at CB1 and CB2; **anandamide** is low-efficacy at CB1 and very low at CB2. CB1 is the dominant brain receptor; CB2 is mainly on immune cells.', 's13-cannabis')]);
  h.facts('nts', 'dopamine', [
    F('542–544', 'The **mesolimbic** pathway (VTA → nucleus accumbens) is the proposed final common pathway of reward; in addiction, dorsal striatal DA neurons come to fire to **cues** rather than the drug.', 's13-dopamine'),
    F('573–574', '“**Wanting**” (anticipation of reward) is dopamine-dependent; “liking” is opioid-dependent.', 's13-extinction')
  ]);
  h.facts('nts', 'acetylcholine', [F('548', 'The “brain’s own nicotine”: ACh at **α4β2** receptors on VTA dopamine neurons is the target nicotine hijacks.', 's13-nicotine')]);
  h.facts('nts', 'gaba', [F('554–558', 'Alcohol and sedative hypnotics enhance GABA: alcohol blocks presynaptic GABA-B and modulates **δ-subunit** GABA-A receptors; barbiturates and benzodiazepines are GABA-A PAMs at separate sites.', 's13-sedatives')]);
  h.facts('nts', 'glutamate', [F('554–556', 'Alcohol reduces glutamate release (mGluRs, VSCCs) and NMDA actions; withdrawal leaves **glutamate excess**, which acamprosate counters.', 's13-alcohol')]);

  /* ---------------- targets ---------------- */
  h.upsert('targets', { id: 'cb2', name: 'Cannabinoid 2 receptor (CB2)', short: 'CB2', family: 'G-protein-linked receptor', nt: 'endocannabinoids',
    summary: 'A cannabinoid receptor found mainly on immune cells (and some glia and brainstem), modulating cell migration and cytokine release.',
    facts: [F('563', 'Binds **2-AG** (high efficacy) and **anandamide** (very low efficacy); THC is a partial agonist.', 's13-cannabis')] }, { after: 'cb1' });
  h.upsert('targets', { id: 'aldh', name: 'Aldehyde dehydrogenase (ALDH)', short: 'ALDH', family: 'Enzyme', ntLabel: 'Alcohol metabolism (liver)',
    summary: 'The liver enzyme that clears acetaldehyde formed from alcohol. Disulfiram irreversibly inhibits it.',
    block: ['**Disulfiram**: acetaldehyde builds up if alcohol is drunk (flushing, nausea, vomiting, hypotension)'],
    facts: [F('556', 'Irreversibly inhibited by **disulfiram**, producing an aversive acetaldehyde reaction.', 's13-alcohol')] }, { after: 'gabat' });
  h.set('targets', 'cb1', { summary: 'The main brain cannabinoid receptor, presynaptic at neuron terminals throughout the CNS and PNS; endocannabinoids reach it by retrograde signaling to inhibit transmitter release. THC is a partial agonist.' });
  h.facts('targets', 'cb1', [F('563–564', '**2-AG** high efficacy, **anandamide** low efficacy; **THC** partial agonist (psychoactive, anxiogenic); CBD has little activity here.', 's13-cannabis')]);
  h.facts('targets', 'mor', [
    F('554–556', 'Alcohol acts at μ receptors or releases β-endorphin in the VTA → dopamine: blocked by **naltrexone/nalmefene**.', 's13-alcohol'),
    F('560–563', '**Methadone** (full agonist) and **buprenorphine** (partial agonist) substitute for abused opioids; **naloxone** and **naltrexone** are antagonists.', 's13-oud-tx')
  ]);
  h.facts('targets', 'dor', [F('559', 'Receptor for **enkephalin** (from proenkephalin).', 's13-opioids')]);
  h.facts('targets', 'kor', [F('559', 'Receptor for **dynorphin** (from prodynorphin).', 's13-opioids')]);
  h.facts('targets', 'nicotinic', [
    F('548', 'Nicotine’s addictive action is at postsynaptic **α4β2** on VTA DA neurons; it also releases glutamate (presynaptic α7) and **desensitizes** α4β2 on GABA interneurons.', 's13-nicotine'),
    F('548–551', 'α4β2 receptors desensitize over about one cigarette, resensitize in ~45 min (craving) and **upregulate** with chronic smoking. **Varenicline** holds them in an intermediate, non-desensitized state.', 's13-nicotine')
  ]);
  h.facts('targets', 'gabaa', [F('556–558', 'Benzodiazepine-sensitive receptors: **α1, 2, 3, 5 + γ**. Benzodiazepine-insensitive **α4/α6 + δ** receptors respond to **alcohol**, neurosteroids and anesthetics. Barbiturates bind a separate PAM site.', 's13-sedatives')]);
  h.facts('targets', 'gabab', [F('554, 559', 'Alcohol **blocks** presynaptic GABA-B (increasing GABA release); **GHB** acts at GABA-B as well as GHB receptors.', 's13-alcohol')]);
  h.facts('targets', 'mglur-g1', [F('556', '**Acamprosate** blocks mGlu5 (and perhaps mGlu2) to reduce glutamate release in alcohol withdrawal.', 's13-alcohol')]);
  h.facts('targets', 'dat', [F('544–546', 'Stimulant abuse = sudden, massive **mesolimbic DAT** blockade; the faster the entry (smoked, IV), the bigger the high.', 's13-stimulants')]);
  h.facts('targets', 'sert', [F('569', '**MDMA** is a SERT competitive inhibitor and pseudosubstrate that reverses SERT to release serotonin; SSRIs block its effects. Cocaine also inhibits SERT.', 's13-hallucinogens')]);
  h.facts('targets', '5ht2a', [F('567–568', 'The main target of **hallucinogens** (psilocybin, LSD, mescaline) as agonists; 5HT2A antagonists reverse hallucinogen effects; desensitization explains rapid tolerance.', 's13-hallucinogens')]);
  h.facts('targets', 'nmda', [F('569–571', '**Dissociatives** PCP and ketamine block the NMDA channel at the same site; alcohol may also reduce NMDA actions.', 's13-hallucinogens')]);
  h.facts('targets', 'alpha2', [F('561', '**Lofexidine** and clonidine reduce the autonomic intensity of opioid withdrawal.', 's13-oud-tx')]);
  h.facts('targets', '5ht3', [F('556', '**Ondansetron** (5HT3 antagonist) may help alcoholism (unapproved).', 's13-alcohol')]);

  /* ---------------- existing drugs ---------------- */
  h.facts('drugs', 'cocaine', [F('544–547', 'Inhibits **DAT, NET and SERT** and is a **local anesthetic**. Snorting, IV use or smoking crack gives rapid DAT blockade and phasic DA; no approved treatment; a vaccine is a future possibility.', 's13-stimulants')]);
  h.chapter('cocaine', 'ch13', '544–547');
  const meth = h.get('drugs', 'methamphetamine');
  meth.targets = meth.targets && meth.targets.length ? meth.targets : [T('dat', 'inhibitor', null, 'Also releaser (like amphetamine)'), T('net', 'inhibitor')];
  meth.mechanism = 'A psychostimulant that inhibits **DAT and NET** (and, like amphetamine, releases dopamine); rapid routes produce massive phasic mesolimbic dopamine, euphoria and addiction.';
  h.facts('drugs', 'methamphetamine', [F('545–547', 'Progression: phasic highs → craving → escalation → crash (sleepiness, anhedonia) → compulsive use (paranoia, violence) → **burnout**. No approved treatment.', 's13-stimulants')]);
  h.chapter('methamphetamine', 'ch13', '544–547');
  h.push('drugs', 'methamphetamine', 'updates', [{ year: '2021', title: 'Naltrexone plus bupropion (ADAPT-2)', text: 'Extended-release injectable naltrexone plus oral bupropion modestly increased response vs placebo in methamphetamine use disorder (NEJM, January 2021); not FDA-approved for this use.', source: 'NIDA, January 2021' }]);
  h.facts('drugs', 'amphetamine', [F('544–545', 'Abused amphetamine (high dose, fast routes) blasts mesolimbic DATs; therapeutic doses boost tonic PFC dopamine.', 's13-stimulants')]);
  h.chapter('amphetamine', 'ch13', '544–545');
  h.facts('drugs', 'nicotine', [
    F('548', 'Releases DA three ways: α4β2 on VTA DA neurons, glutamate release, and desensitizing α4β2 on GABA interneurons. α7 in PFC = alerting, not addiction.', 's13-nicotine'),
    F('548–551', 'Receptors desensitize over one cigarette and resensitize in ~45 min (craving); chronic smoking **upregulates** them. Possibly the most addicting substance; only 2–3% quit long term.', 's13-nicotine'),
    F('551', 'Replacement (gum, lozenge, spray, inhaler, patch) gives steady, non-pulsatile nicotine: about the same quit rate as bupropion.', 's13-nicotine')
  ]);
  h.chapter('nicotine', 'ch13', '547–553');
  const vare = h.get('drugs', 'varenicline');
  vare.brand = vare.brand || 'Chantix';
  h.facts('drugs', 'varenicline', [
    F('551', 'Stabilizes α4β2 channels in an intermediate, **non-desensitized** state: reduces reward if the patient smokes and eases withdrawal. Triples–quadruples quit rates; ~10% abstinent at 1 year; 12 weeks may be too short.', 's13-nicotine'),
    F('573–574', 'Higher affinity than nicotine, so patients cannot “**smoke over**” it: smoking stops being reinforcing (extinction).', 's13-extinction')
  ]);
  h.chapter('varenicline', 'ch13', '551–553, 573–574');
  h.push('drugs', 'varenicline', 'updates', [{ year: '2026', title: 'A related partial agonist not yet approved', text: '**Cytisinicline**, a nicotinic partial agonist, received an FDA complete response letter on June 22, 2026 for manufacturing and labeling issues, with no efficacy or safety deficiencies cited.', source: 'Drugs.com; Achieve Life Sciences, June 2026' }]);
  h.facts('drugs', 'bupropion', [F('551–553', 'For smoking cessation, returns a little dopamine to craving accumbens D2 receptors; quit rate about **half** that of varenicline.', 's13-nicotine')]);
  h.chapter('bupropion', 'ch13', '551–553');
  h.facts('drugs', 'topiramate', [F('556, 575', 'Unapproved but may help **alcoholism**; used off-label for **binge eating disorder** with limited efficacy.', 's13-alcohol')]);
  h.chapter('topiramate', 'ch13', '556, 575');
  h.facts('drugs', 'sodium-oxybate', [F('559', 'As GHB it is abused to get high and as a “**date rape**” drug; agonist at GHB and GABA-B receptors.', 's13-sedatives')]);
  h.chapter('sodium-oxybate', 'ch13', '559');
  h.facts('drugs', 'morphine', [F('559–561', 'An **opiate** (poppy-derived). Short half-life: withdrawal peaks at 36–72 h and lasts 7–10 days.', 's13-opioids')]);
  h.chapter('morphine', 'ch13', '559–561');
  h.facts('drugs', 'naloxone', [
    F('560', 'Competitive μ antagonist that reverses opioid overdose and can precipitate withdrawal. (The book claims fentanyl cannot be reversed; it can, though larger or repeated doses may be needed.)', 's13-opioids'),
    F('560', 'Combined with **buprenorphine**: inactive sublingually but blocks the high if the tablet is injected.', 's13-oud-tx')
  ]);
  h.chapter('naloxone', 'ch13', '560');
  h.push('drugs', 'naloxone', 'updates', [{ year: '2023', title: 'Naloxone over the counter', text: 'Narcan 4 mg nasal spray was approved for **over-the-counter** sale on March 29, 2023.', source: 'FDA via BioSpace, March 29, 2023' }]);
  h.facts('drugs', 'clonidine', [F('561', 'Reduces the **intensity** (autonomic symptoms) but not the duration of opioid withdrawal.', 's13-oud-tx')]);
  h.chapter('clonidine', 'ch13', '561');
  const can = h.get('drugs', 'cannabis');
  can.mechanism = 'A mixture of hundreds of chemicals and 100+ cannabinoids. **THC** is a **partial agonist at CB1 and CB2** (psychoactive, anxiogenic); **CBD** has little CB activity and is non-psychoactive. Higher THC/lower CBD raises the risk of psychosis, anxiety and memory impairment.';
  can.targets = [T('cb1', 'partial agonist', null, 'THC'), T('cb2', 'partial agonist', null, 'THC')];
  h.facts('drugs', 'cannabis', [
    F('563', 'High-potency cannabis: an estimated **12%** of first-episode psychosis in Europe (32% London, 50% Amsterdam) would be prevented without it; worsens existing psychosis.', 's13-cannabis'),
    F('563–564', 'Effects: well-being, relaxation, distorted time, impaired short-term memory; high doses panic, delirium, psychosis; heavy use **amotivational syndrome**.', 's13-cannabis'),
    F('564–567', 'Substantial evidence of benefit for chronic pain, chemo nausea and MS spasticity; risks include psychosis, crashes, respiratory symptoms, low birth weight.', 's13-cannabis')
  ]);
  h.chapter('cannabis', 'ch13', '563–567');
  h.push('drugs', 'cannabis', 'updates', [{ year: '2026', title: 'Partial rescheduling', text: 'Effective April 28, 2026 the DEA moved marijuana in FDA-approved products and under state medical licenses to **Schedule III**; a decision on all other marijuana was still pending in late September 2026.', source: 'Gibson Dunn, April 2026; Morgan Lewis, September 2026' }]);
  ['psilocybin', 'lsd', 'mescaline'].forEach(id => { h.facts('drugs', id, [F('567–569', 'A **5HT2A agonist** hallucinogen: rapid tolerance (5HT2A desensitization); mostly illusions with clear consciousness; flashbacks (mostly LSD); reversed by 5HT2A antagonists.', 's13-hallucinogens')]); h.chapter(id, 'ch13', '567–569'); });
  h.facts('drugs', 'psilocybin', [
    F('567', 'A **tryptamine**; both active itself and a prodrug for psilocin (4-hydroxy-DMT; the book mislabels psilocin as DMT).', 's13-hallucinogens'),
    F('574', 'Psilocybin-assisted psychotherapy studied for cancer-related anxiety, resistant anxiety and depression, OCD, addictions and more.', 's13-assisted')
  ]);
  const mdma = h.get('drugs', 'mdma');
  mdma.targets = [T('sert', 'substrate', null, 'Competitive pseudosubstrate; reverses SERT; more selective for SERT than DAT/NET'), T('vmat2', 'substrate', null, 'Displaces vesicular serotonin')];
  h.facts('drugs', 'mdma', [
    F('569', 'An **empathogen**: SERT pseudosubstrate → VMAT → serotonin displacement → **SERT reversal**; released 5HT acts mostly at 5HT2A. Blocked by **SSRIs**. Hyperthermia deaths at raves.', 's13-hallucinogens'),
    F('574–575', 'MDMA-assisted psychotherapy for **PTSD** aims to weaken reconsolidation of traumatic memories in a safe, empathic state.', 's13-assisted')
  ]);
  h.chapter('mdma', 'ch13', '569, 574–575');
  h.facts('drugs', 'pcp', [F('569–571', 'Dissociative NMDA antagonist: schizophrenia-like psychosis, **vertical nystagmus**, catatonia, analgesia; overdose with coma, hyperthermia, seizures, **rhabdomyolysis**.', 's13-hallucinogens')]);
  h.chapter('pcp', 'ch13', '569–571');
  h.facts('drugs', 'ketamine', [
    F('569–571', 'Dissociative anesthetic (especially in children, and veterinary use); abused as “special K”; far less psychotomimetic than PCP; dissociation (depersonalization, derealization) at antidepressant doses.', 's13-hallucinogens'),
    F('574', 'Ketamine-assisted psychotherapy explored for craving and use of cocaine, nicotine and alcohol, perhaps by promoting prefrontal plasticity.', 's13-assisted')
  ]);
  h.chapter('ketamine', 'ch13', '569–574');
  h.facts('drugs', 'esketamine', [F('571', 'Subanesthetic nasal esketamine for resistant depression; dissociative effects may be harnessed in psychotherapy.', 's13-hallucinogens')]);
  h.chapter('esketamine', 'ch13', '571');
  h.facts('drugs', 'lisdexamfetamine', [F('575', 'The **only approved** treatment for **binge eating disorder**, perhaps via striatal neuroplasticity rather than appetite suppression.', 's13-bed')]);
  h.push('drugs', 'lisdexamfetamine', 'uses', ['**Binge eating disorder** (only approved drug)']);
  h.chapter('lisdexamfetamine', 'ch13', '575');
  h.facts('drugs', 'clomipramine', [F('577', 'A second-line option for **OCD** after SSRIs.', 's13-ocd')]);
  h.chapter('clomipramine', 'ch13', '577');
  h.facts('drugs', 'aripiprazole', [F('575', 'Gambling has been observed after dopamine agonists and **partial agonists**.', 's13-bed')]);

  /* ---------------- new drugs ---------------- */
  const AT = 'Addiction treatment';
  const DA = 'Drug of abuse';
  h.upsert('drugs', { id: 'alcohol', name: 'Alcohol (ethanol)', aka: ['ethanol'], group: DA, cls: 'Sedative drug of abuse', nbn: 'GABA-A PAM (δ subunit); glutamate reducer; opioid releaser', nts: ['gaba', 'glutamate', 'endorphin', 'dopamine'], chapters: [{ ch: 'ch13', pages: '553–556' }],
    short: 'More GABA, less glutamate, plus opioid-driven reward.',
    mechanism: 'Hypothetically enhances GABA (blocks presynaptic **GABA-B**, PAM at **δ-subunit GABA-A** receptors), reduces glutamate (presynaptic mGluRs and VSCCs; NMDA and postsynaptic mGluRs), and acts at **μ-opioid** receptors or releases β-endorphin in the VTA, driving dopamine release.',
    targets: [T('gabaa', 'positive allosteric modulator', null, 'δ-subunit (benzodiazepine-insensitive) receptors'), T('gabab', 'antagonist', null, 'Presynaptic: increases GABA release'), T('nmda', 'antagonist', null, 'Possible'), T('mor', 'agonist', null, 'Direct or via β-endorphin release')],
    uses: [], sideEffects: [{ e: 'Withdrawal: glutamate excess, GABA deficiency', via: 'Adaptation of GABA and glutamate systems' }],
    facts: [F('553', 'About **85%** of alcoholics smoke; self-medication of psychiatric disorders is common.', 's13-alcohol')] }, { after: 'methamphetamine' });
  h.upsert('drugs', { id: 'naltrexone', name: 'Naltrexone', brand: 'Revia (oral); Vivitrol (monthly injection)', group: AT, cls: 'μ-opioid antagonist', nbn: 'Opioid receptor antagonist (μ)', nts: ['endorphin'], chapters: [{ ch: 'ch13', pages: '556, 561–563, 571–574' }],
    short: 'μ-opioid antagonist for alcohol and opioid use disorders; oral or monthly injection.',
    mechanism: 'Blocks **μ-opioid** receptors, removing the opioid-mediated reward of alcohol and opioids.',
    targets: [T('mor', 'antagonist')],
    uses: ['**Alcohol use disorder**: fewer heavy drinking days, more abstinence', '**Opioid use disorder** maintenance after detoxification (monthly injection)', 'Off-label: binge eating disorder (limited)'],
    facts: [
      F('556', 'Oral or **30-day injection** (380 mg IM); the injection solves adherence but is rarely prescribed.', 's13-alcohol'),
      F('561', 'Added to an α2 agonist, shortens opioid withdrawal; monthly injection means one decision per 30 days and can’t be stopped impulsively.', 's13-oud-tx'),
      F('573', 'Basis of the **Sinclair method**: taken ~1 h before drinking to extinguish the drinking habit; works best paired with use.', 's13-extinction')
    ] }, { after: 'naloxone' });
  h.upsert('drugs', { id: 'nalmefene', name: 'Nalmefene', brand: 'Selincro (alcohol, ex-US); Opvee (nasal, overdose)', group: AT, cls: 'μ-opioid antagonist', nbn: 'Opioid receptor antagonist (μ)', nts: ['endorphin'], chapters: [{ ch: 'ch13', pages: '556, 573' }],
    short: 'μ-opioid antagonist approved for alcohol outside the US.',
    mechanism: 'Blocks μ-opioid receptors to blunt alcohol reward.', targets: [T('mor', 'antagonist')],
    uses: ['Alcohol use disorder (outside the US); Sinclair-type extinction'],
    facts: [F('556', 'Like naltrexone, reduces the euphoria of heavy drinking; approved outside the US.', 's13-alcohol')],
    updates: [{ year: '2023', title: 'Nalmefene nasal spray for overdose', text: 'In May 2023 the FDA approved **Opvee**, a prescription nalmefene nasal spray for emergency treatment of opioid overdose.', source: 'NPR, May 22, 2023' }] }, { after: 'naltrexone' });
  h.upsert('drugs', { id: 'acamprosate', name: 'Acamprosate', brand: 'Campral', group: AT, cls: 'Glutamate modulator for alcohol dependence', nbn: 'Glutamate receptor antagonist (mGluR)', nts: ['glutamate', 'gaba'], chapters: [{ ch: 'ch13', pages: '556' }],
    short: 'Taurine derivative; “artificial alcohol” that quiets withdrawal glutamate.',
    mechanism: 'A taurine derivative that blocks **mGluRs** (mGlu5, perhaps mGlu2), reducing glutamate release in alcohol withdrawal; NMDA and GABA effects are probably indirect.',
    targets: [T('mglur-g1', 'antagonist', null, 'mGlu5'), T('mglur-g2', 'antagonist', null, 'Perhaps mGlu2')],
    uses: ['Maintaining abstinence in **alcohol dependence**'],
    facts: [F('556', 'Approved but **not prescribed very often**.', 's13-alcohol')] }, { after: 'nalmefene' });
  h.upsert('drugs', { id: 'disulfiram', name: 'Disulfiram', brand: 'Antabuse', group: AT, cls: 'Aldehyde dehydrogenase inhibitor', nbn: 'Enzyme inhibitor (aldehyde dehydrogenase)', nts: [], chapters: [{ ch: 'ch13', pages: '556' }],
    short: 'Makes drinking aversive by blocking acetaldehyde clearance.',
    mechanism: '**Irreversibly** inhibits liver aldehyde dehydrogenase, so alcohol produces toxic **acetaldehyde**: an aversive, conditioning reaction.',
    targets: [T('aldh', 'inhibitor', null, 'Irreversible')], uses: ['Alcohol use disorder (now little used)'],
    sideEffects: [{ e: 'Flushing, nausea, vomiting, hypotension with alcohol (occasionally dangerous)', via: 'Acetaldehyde accumulation' }],
    facts: [F('556', 'The classic alcoholism drug; adherence is the problem.', 's13-alcohol')] }, { after: 'acamprosate' });
  h.upsert('drugs', { id: 'ondansetron', name: 'Ondansetron', brand: 'Zofran', group: 'Antiemetic', cls: '5HT3 antagonist', nbn: 'Serotonin 5HT3 receptor antagonist', nts: ['serotonin'], chapters: [{ ch: 'ch13', pages: '556' }],
    short: '5HT3 antagonist that may help alcoholism (unapproved).', mechanism: 'Blocks **5HT3** receptors.', targets: [T('5ht3', 'antagonist')],
    uses: ['Antiemetic', 'Unapproved: may help **alcoholism**'], facts: [F('556', 'Listed with topiramate as unapproved agents that may help alcoholism.', 's13-alcohol')] }, { after: 'disulfiram' });
  h.upsert('drugs', { id: 'methadone', name: 'Methadone', group: 'Opioid', cls: 'μ-opioid full agonist', nbn: 'Opioid receptor agonist (μ)', nts: ['endorphin'], chapters: [{ ch: 'ch13', pages: '559–563' }],
    short: 'Long-acting full μ agonist for opioid maintenance, usually at a clinic.',
    mechanism: 'A long-acting **full μ-opioid agonist** that fully suppresses withdrawal given orally.', targets: [T('mor', 'full agonist')],
    uses: ['**Opioid use disorder** (medication-assisted therapy)', 'Pain (a synthetic opioid)'],
    facts: [F('560', 'Usually dispensed **daily at a clinic**.', 's13-oud-tx'), F('561', 'Withdrawal peaks at **72–96 h** and lasts **14+ days**: less intense but much longer than heroin.', 's13-oud-tx')] }, { after: 'morphine' });
  h.upsert('drugs', { id: 'buprenorphine', name: 'Buprenorphine', brand: 'Suboxone (with naloxone); Sublocade; Brixadi', group: 'Opioid', cls: 'μ-opioid partial agonist', nbn: 'Opioid receptor partial agonist (μ)', nts: ['endorphin'], chapters: [{ ch: 'ch13', pages: '560–563' }],
    short: 'μ partial agonist for opioid maintenance; sublingual with naloxone, implant or depot.',
    mechanism: 'A **μ-opioid partial agonist**: weaker agonist effects than full agonists, yet suppresses withdrawal, especially once mild withdrawal has begun.',
    targets: [T('mor', 'partial agonist')], uses: ['**Opioid use disorder** (MAT)'],
    facts: [F('560', 'Sublingual (poor oral absorption), usually with **naloxone** to deter injection; several-day outpatient supplies; also a **6-month implant** and **1-month depot**.', 's13-oud-tx'), F('561', 'Withdrawal peaks ~72 h and lasts about a week; less intense than heroin.', 's13-oud-tx')],
    updates: [{ year: '2023', title: 'X-waiver gone; weekly/monthly injection', text: 'Since January 2023 no special DATA (“X”) waiver is needed to prescribe buprenorphine for OUD. **Brixadi**, a weekly or monthly extended-release injection, was approved May 23, 2023.', source: 'DEA/SAMHSA, January 2023; Braeburn, May 2023' }] }, { after: 'methadone' });
  h.upsert('drugs', { id: 'fentanyl', name: 'Fentanyl', group: 'Opioid', cls: 'Synthetic μ-opioid agonist', nbn: 'Opioid receptor agonist (μ)', nts: ['endorphin'], chapters: [{ ch: 'ch13', pages: '559–560' }],
    short: 'Synthetic opioid ~100× morphine; drives most overdose deaths.',
    mechanism: 'A very potent synthetic **μ agonist** (~100× morphine); derivatives like carfentanil are ~10,000× morphine.', targets: [T('mor', 'full agonist')],
    uses: ['Anesthesia and severe pain (prescribed)'], sideEffects: [{ e: 'Respiratory depression and overdose death', via: 'μ agonism' }],
    facts: [F('559–560', 'Increasingly laced into street heroin. The book claims naloxone cannot reverse fentanyl; it can, though larger or repeated doses may be needed.', 's13-opioids')],
    updates: [{ year: '2025', title: 'Overdose deaths falling', text: 'US overdose deaths fell for a third straight year to about 70,000 in 2025 (provisional), with opioid-involved deaths down about 19%; synthetic opioids still dominate.', source: 'CDC NCHS, May 13, 2026' }] }, { after: 'buprenorphine' });
  h.upsert('drugs', { id: 'lofexidine', name: 'Lofexidine', brand: 'Lucemyra', group: 'α2 agonist', cls: 'α2-adrenergic agonist', nbn: 'Norepinephrine α2 receptor agonist', nts: ['norepinephrine'], chapters: [{ ch: 'ch13', pages: '561–562' }],
    short: 'α2 agonist that eases autonomic opioid withdrawal symptoms.',
    mechanism: 'An **α2-adrenergic agonist** that reduces autonomic hyperactivity during opioid withdrawal.', targets: [T('alpha2', 'agonist')],
    uses: ['**Opioid withdrawal** (intensity, not duration)'],
    facts: [F('561–562', 'Combined with **naltrexone**, reduces both the severity and the duration of withdrawal after methadone or buprenorphine (Figures 13-20, 13-21).', 's13-oud-tx')] }, { after: 'guanfacine' });
  const cbF = (p, t) => [F(p, t, 's13-cannabis')];
  h.upsert('drugs', { id: 'dronabinol', name: 'Dronabinol', brand: 'Marinol; Syndros', group: 'Cannabinoid', cls: 'Synthetic THC', nbn: 'Cannabinoid receptor partial agonist (CB1/CB2)', nts: ['endocannabinoids'], chapters: [{ ch: 'ch13', pages: '567' }],
    short: 'Synthetic THC for chemotherapy nausea and AIDS wasting.', mechanism: 'Synthetic **THC**: partial agonist at CB1 and CB2.', targets: [T('cb1', 'partial agonist'), T('cb2', 'partial agonist')],
    uses: ['Chemotherapy-induced nausea and vomiting', 'Appetite in AIDS wasting (US)'], facts: cbF('567', 'Oral capsule or solution (Table 13-4).') }, { after: 'cannabis' });
  h.upsert('drugs', { id: 'nabilone', name: 'Nabilone', brand: 'Cesamet', group: 'Cannabinoid', cls: 'Synthetic THC analogue', nbn: 'Cannabinoid receptor partial agonist (CB1/CB2)', nts: ['endocannabinoids'], chapters: [{ ch: 'ch13', pages: '567' }],
    short: 'THC analogue for chemotherapy nausea; Schedule II.', mechanism: 'A synthetic **THC analogue** at CB1/CB2.', targets: [T('cb1', 'partial agonist')],
    uses: ['Chemotherapy-induced nausea and vomiting (US)'], facts: cbF('567', '**Schedule II** because of its potency.') }, { after: 'dronabinol' });
  h.upsert('drugs', { id: 'nabiximols', name: 'Nabiximols', brand: 'Sativex', group: 'Cannabinoid', cls: 'THC:CBD oromucosal spray', nbn: 'Cannabinoid receptor partial agonist (CB1/CB2)', nts: ['endocannabinoids'], chapters: [{ ch: 'ch13', pages: '567' }],
    short: '~1:1 THC:CBD spray for MS spasticity (outside the US).', mechanism: 'Purified ~1:1 **THC and CBD**.', targets: [T('cb1', 'partial agonist', null, 'THC component')],
    uses: ['MS spasticity (UK, Canada, Europe, Australia, NZ, Israel)', 'Pain in MS and cancer (Canada, Israel)'], facts: cbF('567', 'Not approved in the US (Table 13-4).') }, { after: 'nabilone' });
  h.upsert('drugs', { id: 'cannabidiol', name: 'Cannabidiol (CBD)', brand: 'Epidiolex', group: 'Cannabinoid', cls: 'Purified cannabidiol', nbn: 'Mechanism unclear', nts: ['endocannabinoids'], chapters: [{ ch: 'ch13', pages: '563–567' }],
    short: 'Non-psychoactive cannabinoid; Epidiolex treats rare epilepsies.',
    mechanism: 'An isomer of THC with little CB1/CB2 activity; mechanism unknown (perhaps serotonergic). **Not psychoactive**; anxiolytic, anticonvulsant, possibly antipsychotic.',
    targets: [], uses: ['Seizures in **Lennox–Gastaut** and **Dravet** syndromes from age 2 (US)'],
    facts: cbF('563–567', 'Higher CBD content lowers the risk of hallucinations, delusions and memory impairment; Epidiolex is **not a controlled substance**.') }, { after: 'nabiximols' });
  h.upsert('drugs', { id: 'mdpv', name: 'MDPV (“bath salts”)', aka: ['methylenedioxypyrovalerone'], group: DA, cls: 'Synthetic stimulant (cathinone)', nbn: 'Dopamine and norepinephrine reuptake inhibitor', nts: ['dopamine', 'norepinephrine'], chapters: [{ ch: 'ch13', pages: '546–547' }],
    short: 'Synthetic stimulant sold as “bath salts” or “plant food.”',
    mechanism: 'A synthetic stimulant; bath salts may also contain mephedrone or methylone.', targets: [],
    uses: [], sideEffects: [{ e: 'Agitation, paranoia, hallucinations, suicidality, chest pain', via: 'Stimulant actions' }],
    facts: [F('546–547', 'Packaged like Epsom salts and labeled “not for human consumption” to evade drug laws.', 's13-stimulants')] }, { after: 'cocaine' });

  /* ---------------- circuits ---------------- */
  const C = (id, disorder, symptom, circuit, nts, treat, pages) => ({ id, disorder, symptom, circuit, nts, treat, ch: 'ch13', pages });
  db.circuits.push(
    C('ic-impulsivity', 'Impulsive–compulsive disorders', 'Impulsivity (can’t stop starting; immediate reward)', '**Ventral striatum** → thalamus → **VMPFC/ACC** loop, under top-down prefrontal control', ['Dopamine', 'Glutamate', 'Opioids'], ['Treat the specific disorder; block drug reward early (naltrexone, varenicline)'], '539–541'),
    C('ic-compulsivity', 'Impulsive–compulsive disorders', 'Compulsivity and habits (can’t stop ongoing actions)', '**Dorsal striatum** → thalamus → **OFC** habit loop', ['Dopamine', 'Serotonin', 'Glutamate'], ['Extinction: blocked drug use ([[drug:naltrexone|naltrexone]], [[drug:varenicline|varenicline]])', 'ERP for OCD'], '539–541, 571–574'),
    C('add-reward', 'Substance addiction', 'Drug reward and craving', '**Mesolimbic** VTA → nucleus accumbens dopamine, fed by opioid, endocannabinoid, nicotinic and GABA/glutamate inputs', ['Dopamine', 'Endorphin', 'Endocannabinoids', 'Acetylcholine'], ['Nicotine: [[drug:varenicline|varenicline]], [[drug:bupropion|bupropion]], NRT', 'Alcohol: [[drug:naltrexone|naltrexone]], [[drug:acamprosate|acamprosate]], [[drug:disulfiram|disulfiram]]', 'Opioids: [[drug:methadone|methadone]], [[drug:buprenorphine|buprenorphine]], naltrexone', 'Stimulants: none approved'], '542–563'),
    C('add-opioid-withdrawal', 'Opioid use disorder', 'Opioid withdrawal (dysphoria, autonomic hyperactivity)', 'Adapted **μ-opioid** receptors; noradrenergic (locus coeruleus) hyperactivity', ['Endorphin', 'Norepinephrine'], ['Substitute [[drug:methadone|methadone]] or [[drug:buprenorphine|buprenorphine]]', '[[drug:lofexidine|Lofexidine]] or [[drug:clonidine|clonidine]] for intensity; add naltrexone to shorten'], '560–562'),
    C('ocd-compulsions', 'Obsessive–compulsive disorder', 'Compulsions (checking, cleaning) and obsessions', 'Inefficient **OFC**; dorsal striatal habit loop', ['Serotonin', 'Dopamine'], ['SSRIs (high dose); augment with a serotonin–dopamine blocker', '[[drug:clomipramine|Clomipramine]]', 'Exposure and response prevention; rTMS'], '576–577'),
    C('bed-binge', 'Binge eating disorder', 'Compulsive binge eating', 'Food-related control migrated from **ventral to dorsal** striatum', ['Dopamine'], ['[[drug:lisdexamfetamine|Lisdexamfetamine]] (only approved)', 'Psychotherapy'], '575')
  );
};
