/*
 * Receptors and other drug targets. `nt` links to a neurotransmitter id. `stim` and `block` power the
 * side-effect mapper: what stimulating or blocking the target does clinically, as the book describes.
 * Drugs acting at a target are computed from drugs.js. Families must match TARGET_FAMS in app.js.
 */
SP.targets = [
  /* ---------------- transporters (12 transmembrane regions) ---------------- */
  {
    id: 'sert', name: 'Serotonin transporter (SERT)', short: 'SERT', family: 'Transporter', nt: 'serotonin',
    summary: 'The presynaptic reuptake pump for serotonin (SLC6 family). Most drugs for unipolar depression act at SERT, NET, DAT or a combination; SSRIs inhibit it allosterically.',
    coupling: 'Sodium-dependent cotransporter (with chloride; potassium countertransport); powered by the sodium–potassium ATPase',
    block: ['Enhances synaptic serotonin action: the basis of SSRIs and related drugs', 'Treats unipolar depression and many anxiety disorders, OCD, PTSD, eating and impulsive–compulsive disorders, and neuropathic pain', 'Indirectly stimulates 5HT1A somatodendritic autoreceptors and postsynaptic serotonin receptors (Table 2-5)'],
    facts: [
      { ch: 'ch01', pages: '6', text: 'Elavil (amitriptyline) and Prozac (fluoxetine) entered practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' },
      { ch: 'ch02', pages: '31–33', text: 'Member of the **SLC6** gene family. Besides serotonin it carries **Ecstasy (MDMA)**, a “false substrate.”', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '33', text: 'Stahl’s **wagon** analogy: sodium inflates the tires so serotonin can bind; an SSRI such as fluoxetine sits in the **allosteric “front seat”**, lowering affinity for serotonin. SSRIs do not bind the substrate site and are **not transported**.', sec: 's2-monoamine' },
      { ch: 'ch04', pages: '114–115', text: 'All 5HT neurons are thought to contain SERT; functional **polymorphisms** of its gene may predict response and side effects with SERT blockers.', sec: 's4-5ht-synth' },
      { ch: 'ch05', pages: '237', text: '**Lumateperone** binds SERT about as potently as D2; ziprasidone binds it weakly.', sec: 's5-dones' },
      { ch: 'ch07', pages: '289–292', text: 'SSRIs must occupy perhaps **80–90%** of SERTs to work. Blocking SERT raises 5HT first at the **somatodendritic** area; delayed 5HT1A autoreceptor desensitization then disinhibits release at terminals.', sec: 's7-ssri' },
      { ch: 'ch07', pages: '292–296', text: 'All six SSRIs share selective SERT inhibition; their **secondary properties** differ (Figures 7-16 to 7-21).', sec: 's7-ssri-agents' },
      { ch: 'ch08', pages: '368', text: 'Most SERT-blocking drugs (SSRIs, SNRIs) reduce fear and anxiety in GAD, panic disorder, social anxiety disorder, PTSD and OCD.', sec: 's8-serotonin' }
    ]
  },
  {
    id: 'net', name: 'Norepinephrine transporter (NET)', short: 'NET', family: 'Transporter', nt: 'norepinephrine',
    summary: 'The presynaptic reuptake pump for norepinephrine (SLC6 family), with high affinity for dopamine too. Target of ADHD stimulants, cocaine and many drugs for depression and pain.',
    coupling: 'Sodium-dependent cotransporter powered by the sodium–potassium ATPase',
    block: ['Enhances synaptic norepinephrine action, indirectly stimulating all norepinephrine receptors', 'Antidepressant; neuropathic pain; ADHD (Table 2-5)'],
    facts: [
      { ch: 'ch02', pages: '31', text: 'Carries **dopamine, epinephrine and amphetamine** as well as norepinephrine; NET has **high affinity for dopamine**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '34', text: '“Stimulants” for ADHD (**methylphenidate, amphetamine**) and **cocaine** act on **DAT and NET**.', sec: 's2-monoamine' },
      { ch: 'ch04', pages: '80–81', text: 'Takes up dopamine that diffuses from DAT-poor synapses (e.g., prefrontal cortex) as a **“false” substrate**.', sec: 's4-da-synth' },
      { ch: 'ch05', pages: '227–229', text: '**Norquetiapine** inhibits NET, a key part of quetiapine’s antidepressant action; ziprasidone and zotepine weakly inhibit NET.', sec: 's5-pines' },
      { ch: 'ch06', pages: '253–254', text: 'The NE “vacuum cleaner” that removes NE from the synapse without destroying it.', sec: 's6-ne' },
      { ch: 'ch07', pages: '299–301', text: 'The PFC has few DATs, so DA is cleared there by **NET** (which has higher affinity for DA than NE) or COMT. NET inhibition therefore raises **NE and DA in the PFC**: the “half” of SNRIs’ two-and-a-half actions.', sec: 's7-snri' },
      { ch: 'ch07', pages: '305', text: 'Therapeutic and NE-mediated side effects may appear with perhaps as little as **50%** NET occupancy.', sec: 's7-ndri' },
      { ch: 'ch08', pages: '370', text: 'NET inhibitors can **transiently worsen** anxiety, then reduce fear and worry as β1 receptors downregulate.', sec: 's8-ne' }
    ]
  },
  {
    id: 'dat', name: 'Dopamine transporter (DAT)', short: 'DAT', family: 'Transporter', nt: 'dopamine',
    summary: 'The dopamine reuptake pump (SLC6 family) that terminates dopamine’s synaptic action. Scarce in the prefrontal cortex, abundant in the striatum. Target of stimulants and cocaine.',
    location: 'Abundant in the **striatum**; **very few** in the **prefrontal cortex**',
    coupling: 'Sodium-dependent cotransporter powered by the sodium–potassium ATPase',
    block: ['Enhances synaptic dopamine, indirectly stimulating D1–D5 receptors', 'Improves ADHD, depression and wakefulness (Table 2-5)'],
    facts: [
      { ch: 'ch01', pages: '8', text: 'Because the **prefrontal cortex has very few DATs**, dopamine released there spills over to neighboring receptors: the book’s main example of **volume neurotransmission**. The **striatum** has DATs in abundance.', sec: 's1-volume' },
      { ch: 'ch02', pages: '31–32', text: 'Carries **norepinephrine, epinephrine and amphetamine** as well as dopamine; DAT has **high affinity for amphetamines**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '34', text: 'Methylphenidate, amphetamine and cocaine all act on **DAT and NET**.', sec: 's2-monoamine' },
      { ch: 'ch04', pages: '80–81', text: 'The **principal** route of dopamine inactivation where present (striatum), with COMT secondary. Some dopamine neurons lack DAT, unlike serotonin neurons, which are all thought to have SERT.', sec: 's4-da-synth' },
      { ch: 'ch07', pages: '304–306', text: 'Rapid, brief **≥ 50%** DAT occupancy causes euphoria and reinforcement (cocaine); slow, long-lasting occupancy is less abusable. Bupropion occupies only about **10–30%** of striatal DATs.', sec: 's7-ndri' }
    ]
  },
  {
    id: 'gat', name: 'GABA transporters (GAT1–4)', short: 'GAT1–4', family: 'Transporter', nt: 'gaba',
    summary: 'SLC6 transporters for GABA. GAT1 is a key presynaptic GABA transporter and the only one targeted by a drug, tiagabine.',
    location: 'GAT1 and GAT2 neuronal and glial; GAT3 mostly glial; GAT4 (betaine transporter, BGT1) neuronal and glial',
    block: ['GAT1 blockade raises synaptic GABA: anticonvulsant', 'May help anxiety, sleep disorders and pain'],
    facts: [
      { ch: 'ch02', pages: '31, 34', text: 'GAT2 and GAT3 also carry **beta-alanine**; GAT4 (also called the **betaine transporter, BGT1**) carries **betaine**.', sec: 's2-other' },
      { ch: 'ch02', pages: '34', text: '**GAT1** is selectively blocked by the anticonvulsant **tiagabine**, increasing synaptic GABA; no other GAT inhibitor is in clinical use.', sec: 's2-other' },
      { ch: 'ch06', pages: '258', text: 'Terminates GABA action by reuptake; inside the neuron GABA may then be destroyed by **GABA-T**.', sec: 's6-gaba' }
    ]
  },
  {
    id: 'glyt', name: 'Glycine transporters (GlyT1, GlyT2)', short: 'GlyT1–2', family: 'Transporter', nt: 'glycine',
    summary: 'SLC6 transporters for glycine. No clinically used drug blocks them; GlyT1 inhibitors were tested in schizophrenia.',
    location: 'GlyT1 mostly glial; GlyT2 neuronal',
    facts: [
      { ch: 'ch02', pages: '34', text: 'No drugs in clinical practice block glycine transporters, though new agents were **in clinical trials for schizophrenia** at publication.', sec: 's2-other' },
      { ch: 'ch04', pages: '97–99', text: '**GlyT2** recaptures glycine into glycine neurons; glial **GlyT1** releases glycine (reversed) and is the **main terminator** of synaptic glycine at NMDA synapses (inward).', sec: 's4-cotransmitters' }
    ],
    updates: [{ year: '2025', title: 'GlyT1 inhibitor fails phase III', text: 'The GlyT1 inhibitor **iclepertin** did not meet its primary or key secondary endpoints for cognitive impairment associated with schizophrenia in the phase III CONNEX program (January 2025).', source: 'Boehringer Ingelheim, January 2025' }]
  },
  {
    id: 'eaat', name: 'Excitatory amino acid transporters (EAAT1–5)', short: 'EAAT1–5', family: 'Transporter', nt: 'glutamate',
    summary: 'The high-affinity glutamate transporters (SLC1 family). Glial uptake recaptures glutamate, which is recycled through glutamine. No drugs target them.',
    coupling: 'Sodium cotransport without chloride; almost always potassium countertransport; may work as trimers',
    facts: [
      { ch: 'ch02', pages: '31, 34', text: 'Carry **L-glutamate and L-aspartate**. Uptake **into glia** converts glutamate to **glutamine**, which enters the presynaptic neuron to be turned back into glutamate.', sec: 's2-other' },
      { ch: 'ch02', pages: '35', text: 'Differ from SLC6 transporters: **no chloride** cotransport, **almost always potassium** countertransport, and perhaps **trimers** rather than dimers. Because reducing glutamate is often the goal, their future as targets is unclear.', sec: 's2-other' },
      { ch: 'ch04', pages: '96–97', text: 'Terminates glutamate’s action (there is **no enzymatic breakdown**); glial EAATs matter most for recycling.', sec: 's4-glu-synth' }
    ]
  },
  {
    id: 'snat', name: 'Specific neutral amino acid transporters (SNAT)', short: 'SNAT', family: 'Transporter', nt: 'glutamate',
    summary: 'Transporters that carry glutamine out of glia (reversed) and into glutamate neurons, completing the glutamate–glutamine cycle; glial SNATs also import glycine.',
    location: 'Glia (export of glutamine by reverse transport; glycine import) and glutamate neurons (glutamine import)',
    facts: [{ ch: 'ch04', pages: '96–98', text: 'Glial SNATs run in **reverse** to release glutamine, which a neuronal SNAT takes up; a glial **ASC-T** may also export glutamine.', sec: 's4-glu-synth' }]
  },
  {
    id: 'dsert', name: 'D-serine transporter (D-SER-T)', short: 'D-SER-T', family: 'Transporter', nt: 'dserine',
    summary: 'The glial transporter that releases D-serine into glutamate synapses (reversed) and takes it back up (inward).',
    location: 'Glia',
    facts: [{ ch: 'ch04', pages: '98–99', text: 'Releases D-serine by reverse transport and terminates its action by reuptake, along with **DAO**.', sec: 's4-cotransmitters' }]
  },
  {
    id: 'cht', name: 'Choline transporter', short: 'Choline transporter', family: 'Transporter', nt: 'acetylcholine',
    summary: 'The presynaptic transporter for choline, the precursor of acetylcholine (SLC6 family). No known drug targets it.',
    facts: [{ ch: 'ch02', pages: '34', text: 'A presynaptic transporter for **choline**, the precursor to acetylcholine; **no known drugs** target it.', sec: 's2-other' }]
  },
  {
    id: 'vmat2', name: 'Vesicular monoamine transporters (VMAT1, VMAT2)', short: 'VMAT2', family: 'Transporter', nt: 'dopamine', ntLabel: 'Monoamines and histamine',
    summary: 'The SLC18 vesicular transporter that packages serotonin, norepinephrine, dopamine and histamine into synaptic vesicles. Amphetamine is a substrate; tetrabenazine, deutetrabenazine and valbenazine inhibit it.',
    location: 'Synaptic vesicle membrane of serotonin, norepinephrine, dopamine and histamine neurons',
    coupling: 'Antiporter driven by a **proton pump** (proton ATPase): neurotransmitter goes in as protons go out',
    block: ['VMAT2 inhibition (tetrabenazine and derivatives) treats movement disorders such as tardive dyskinesia (Chapter 5)', 'Treats **tardive dyskinesia** by trimming dopamine “go” in direct and indirect pathways (Chapter 5)', 'Tetrabenazine: peak-dose **sedation** and **DIP**, depression/suicide risk in Huntington’s', 'Reserpine (with VMAT1): orthostatic hypotension, stuffy nose, itching, GI effects'],
    facts: [
      { ch: 'ch02', pages: '31', text: 'All three monoamine neurons share **the same vesicular transporter, VMAT2**, which also packages **histamine**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: 'Targeted especially in **dopamine neurons**: **amphetamine** as a transported substrate; **tetrabenazine, deutetrabenazine and valbenazine** as inhibitors.', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '79–80, 114', text: 'Packages newly made **dopamine** and **serotonin** into vesicles.', sec: 's4-da-synth' },
      { ch: 'ch05', pages: '174–179', text: 'Only in **CNS** neurons (VMAT1 is also peripheral). **Reserpine** irreversibly blocks both; tetrabenazine-type drugs reversibly block only VMAT2 and preferentially deplete **dopamine**. Perhaps **> 90%** inhibition is needed to treat TD.', sec: 's5-vmat2' }
    ]
  },
  {
    id: 'vacht', name: 'Vesicular acetylcholine transporter (VAChT)', short: 'VAChT', family: 'Transporter', nt: 'acetylcholine',
    summary: 'The SLC18 transporter that packages acetylcholine into vesicles. No drug used in humans targets it.',
    facts: [{ ch: 'ch02', pages: '35', text: 'Member of the **SLC18** family; **not known to be targeted** by any drug used in humans.', sec: 's2-vesicular' }]
  },
  {
    id: 'viaat', name: 'Vesicular inhibitory amino acid transporter (VIAAT)', short: 'VIAAT', family: 'Transporter', nt: 'gaba',
    summary: 'The SLC32 transporter that packages GABA into vesicles. No drug used in humans targets it.',
    facts: [
      { ch: 'ch02', pages: '35', text: 'The GABA vesicular transporter (**SLC32**); not known to be targeted by any drug used in humans.', sec: 's2-vesicular' },
      { ch: 'ch06', pages: '256', text: 'Packages GABA made by GAD into synaptic vesicles.', sec: 's6-gaba' }
    ]
  },
  {
    id: 'vglut', name: 'Vesicular glutamate transporters (vGluT1–3)', short: 'vGluT1–3', family: 'Transporter', nt: 'glutamate',
    summary: 'The SLC17 transporters that package glutamate into vesicles. No drug used in humans targets them.',
    facts: [
      { ch: 'ch02', pages: '35', text: 'Members of the **SLC17** family; not known to be targeted by any drug used in humans.', sec: 's2-vesicular' },
      { ch: 'ch04', pages: '97', text: 'Packages regenerated glutamate into vesicles at the end of the glutamate–glutamine cycle.', sec: 's4-glu-synth' }
    ]
  },
  {
    id: 'sv2a', name: 'Synaptic vesicle protein 2A (SV2A)', short: 'SV2A', family: 'Transporter',
    summary: 'A 12-transmembrane synaptic vesicle transporter of uncertain mechanism and substrate that binds levetiracetam.',
    location: 'Synaptic vesicle membrane',
    facts: [
      { ch: 'ch02', pages: '35', text: 'Binds the anticonvulsant **levetiracetam**, perhaps interfering with neurotransmitter release and thereby reducing seizures.', sec: 's2-vesicular' },
      { ch: 'ch03', pages: '72', text: 'Shown in Figure 3-24 on the synaptic vesicle alongside the **snare proteins** that link vesicles to presynaptic N and P/Q calcium channels.', sec: 's3-vscc' }
    ]
  },
  /* ---------------- G-protein-linked receptors (7 transmembrane regions) ---------------- */
  {
    id: 'd1', name: 'Dopamine D1 receptor', short: 'D1', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An excitatory D1-like receptor (positively linked to adenylate cyclase). Predominant in prefrontal cortex, where it is reached by volume transmission, and on the striatal direct (“go”) pathway.',
    stim: ['Indirect agonism at D1–D5 via dopamine reuptake inhibition or release (methylphenidate, amphetamine) improves ADHD, depression and wakefulness'],
    facts: [
      { ch: 'ch01', pages: '8', text: 'In Figure 1-7, prefrontal dopamine diffuses from its synapse to reach **D1 receptors** outside the synapse on the same neuron and on a neighboring neuron.', sec: 's1-volume' },
      { ch: 'ch02', pages: '40', text: 'Stimulated **indirectly** (with D2–D5) when methylphenidate or amphetamine block reuptake or release dopamine (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '81–85', text: '**D1-like** (with D5): excitatory, positively linked to adenylate cyclase. The **least sensitive** dopamine receptor and the predominant postsynaptic one in **prefrontal cortex**; populates the striatal **direct (“go”)** pathway.', sec: 's4-da-receptors' }
    ],
    location: 'Postsynaptic; predominant in **prefrontal cortex**; striatal **direct pathway** neurons'
  },
  {
    id: 'd2', name: 'Dopamine D2 receptor', short: 'D2', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'The key target of so-called antipsychotics. An inhibitory D2-like receptor, postsynaptic in the striatum (indirect “stop” pathway) and a presynaptic autoreceptor on nigrostriatal neurons. Mesolimbic D2 hyperactivity is the classic hypothesis of positive symptoms.',
    block: ['Antagonism or partial agonism: **antipsychotic** and **antimanic** actions', 'Mesolimbic blockade: reduces **positive symptoms**', 'Tuberoinfundibular blockade: **hyperprolactinemia** (galactorrhea, gynecomastia, amenorrhea, sexual dysfunction)', 'Nigrostriatal blockade: **drug-induced parkinsonism**, possibly akathisia and dystonia; chronically **tardive dyskinesia**', 'Worsens movement in **Parkinson’s disease**; increases stroke and death risk in **dementia**', 'Mesolimbic reward blockade: **secondary negative symptoms** (neuroleptic-induced deficit syndrome)', 'Acute nigrostriatal blockade: **acute dystonia**, **akathisia**, rarely **NMS**'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Directly targeted as an **antagonist or partial agonist** for antipsychotic and antimanic actions (Table 2-4); detailed in Chapter 5.', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '79', text: 'Classic hypothesis: **hyperactivity at mesolimbic D2** receptors causes positive symptoms; D2 blockers have been the mainstay for over 50 years.', sec: 's4-da-synth' },
      { ch: 'ch04', pages: '82–84', text: 'As an **autoreceptor**, D2 is **less sensitive** than D3, so synapses with D2 autoreceptors accumulate more dopamine and have a wider diffusion radius.', sec: 's4-da-receptors' },
      { ch: 'ch04', pages: '86–89', text: 'Populates the striatal **indirect (“stop”)** pathway; dopamine at D2 inhibits it (“don’t stop”).', sec: 's4-da-pathways' },
      { ch: 'ch05', pages: '161–162', text: 'By the 1970s, **D2 antagonism** in the mesolimbic/mesostriatal pathway was recognized as the key property of all neuroleptics.', sec: 's5-history' },
      { ch: 'ch05', pages: '170–174', text: 'Chronic blockade causes **upregulated, supersensitive** indirect-pathway D2 receptors: the proposed mechanism of **tardive dyskinesia** (too much “go”).', sec: 's5-td' },
      { ch: 'ch05', pages: '189–193', text: '**Partial agonists** for psychosis sit just next to antagonists on the spectrum; a tiny amount of intrinsic activity reduces motor effects, and lactotroph D2 receptors read them as agonists (prolactin **falls**).', sec: 's5-pa' },
      { ch: 'ch05', pages: '195, 201', text: 'Drugs are dosed to occupy **60–80%** of D2 receptors for psychosis (about 80% in the emotional striatum); lumateperone, quetiapine and clozapine work below 60%.', sec: 's5-binding' }
    ],
    location: 'Postsynaptic in striatum (indirect pathway) and pituitary; presynaptic **autoreceptors** (terminal and somatodendritic)',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase',
    stim: ['Indirect stimulation by **amphetamine/cocaine** (dopamine excess): paranoid psychosis with auditory hallucinations', 'Chronic stimulation by **levodopa**: levodopa-induced dyskinesias', '**Partial agonism** (aripiprazole, brexpiprazole, cariprazine): antipsychotic with less DIP and **lower prolactin**; some **akathisia**']
  },
  {
    id: 'd3', name: 'Dopamine D3 receptor', short: 'D3', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An inhibitory D2-like receptor. As a presynaptic autoreceptor it is more sensitive to dopamine than D2, braking release at lower concentrations; it regulates mesolimbic dopamine neurons.',
    location: 'Presynaptic **autoreceptors** on mesolimbic neurons (VTA cell bodies and striatal terminals); postsynaptic in striatum',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase',
    facts: [
      { ch: 'ch04', pages: '81–85', text: '**More sensitive** to dopamine than D2, so a lower synaptic concentration turns off further release; mesolimbic neurons carry D3 autoreceptors.', sec: 's4-da-receptors' },
      { ch: 'ch05', pages: '202–203, 239–241', text: '**Cariprazine** and **blonanserin** have higher affinity for D3 than dopamine itself; sulpiride and amisulpride add D3 antagonist actions. D3 antagonism/partial agonism may improve **negative, affective and cognitive** symptoms by raising prefrontal dopamine.', sec: 's5-pips' },
      { ch: 'ch07', pages: '343–345', text: 'Only **cariprazine** and **blonanserin** bind D3 with affinity orders of magnitude above dopamine’s. Blocking presynaptic D3 autoreceptors in the **VTA** releases DA onto prefrontal **D1** receptors: a proposed antidepressant mechanism (Figures 7-72, 7-73).', sec: 's7-bipolar-depression' }
    ],
    stim: ['**Partial agonism** (cariprazine): may improve **negative symptoms**, mood, cognition and reward/substance use (preclinical)'],
    block: ['Antagonism of limbic D3: may reduce emotional-striatum overactivity; at somatodendritic D3: more **prefrontal dopamine**', 'Candidate **antidepressant** mechanism (sulpiride, amisulpride; Chapter 7)']
  },
  {
    id: 'd4', name: 'Dopamine D4 receptor', short: 'D4', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An inhibitory D2-like receptor (negatively linked to adenylate cyclase).',
    coupling: 'D2-like: **inhibitory**, negatively linked to adenylate cyclase',
    facts: [
      { ch: 'ch04', pages: '81', text: 'One of the three **D2-like** receptors (D2, D3, D4).', sec: 's4-da-receptors' },
      { ch: 'ch05', pages: '236–237', text: '**Lurasidone** binds D4 most potently of all its targets; the effects of D4 binding are **not well understood**.', sec: 's5-dones' }
    ]
  },
  {
    id: 'd5', name: 'Dopamine D5 receptor', short: 'D5', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'An excitatory D1-like receptor (positively linked to adenylate cyclase).',
    coupling: 'D1-like: **excitatory**, positively linked to adenylate cyclase',
    facts: [{ ch: 'ch04', pages: '81', text: 'One of the two **D1-like** receptors (D1, D5).', sec: 's4-da-receptors' }]
  },
  {
    id: '5ht1a', name: 'Serotonin 5HT1A receptor', short: '5HT1A', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'Found as somatodendritic autoreceptors and postsynaptically. Partial agonism is anxiolytic and boosts SSRIs; SSRIs stimulate it indirectly.',
    stim: ['Partial agonism: **less drug-induced parkinsonism**, **anxiolytic**, **boosts** SSRI/SNRI antidepressant action', 'Indirect agonism at somatodendritic autoreceptors via SSRIs/SNRIs: antidepressant, anxiolytic', 'On prefrontal GABA interneurons: **disinhibits NE, DA and ACh** release (Chapter 4)'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**Partial agonist** actions: reduced drug-induced parkinsonism, anxiolytic, booster of SSRI/SNRI antidepressant action (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '40', text: 'Stimulated **indirectly** at presynaptic somatodendritic autoreceptors when SSRIs or SNRIs block serotonin reuptake (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '115–119', text: 'As a **somatodendritic autoreceptor** in the raphe it provides negative feedback; its **downregulation/desensitization** is thought critical to reuptake-blocker antidepressant action.', sec: 's4-5ht-pre' },
      { ch: 'ch04', pages: '122–125', text: 'Always inhibitory, but often on **prefrontal GABA interneurons**, so stimulation **increases NE, DA and ACh** release. Many drugs for psychosis, mood and anxiety are 5HT1A agonists or partial agonists.', sec: 's4-5ht-post' },
      { ch: 'ch05', pages: '193–195', text: 'The **brake** on cortical glutamate neurons (5HT2A is the accelerator): partial agonism releases dopamine in motor striatum and prefrontal cortex, reducing motor effects and helping negative and affective symptoms. Brexpiprazole’s most potent property.', sec: 's5-5ht1a' },
      { ch: 'ch07', pages: '289–292', text: 'Desensitization of **somatodendritic 5HT1A autoreceptors** times the onset of SSRI action.', sec: 's7-ssri' },
      { ch: 'ch07', pages: '296–298', text: 'Adding 5HT1A partial agonism to SERT inhibition (SPARI) speeds autoreceptor desensitization; downstream DA release may reduce sexual dysfunction.', sec: 's7-spari' },
      { ch: 'ch08', pages: '368–370', text: '**Buspirone**’s partial agonism at pre- and postsynaptic 5HT1A receptors may enhance serotonergic input to the amygdala and CSTC circuits; its onset is **delayed**, implying receptor adaptation.', sec: 's8-serotonin' }
    ]
  },
  {
    id: '5ht1b1d', name: 'Serotonin 5HT1B/1D receptors', short: '5HT1B/1D', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'Serotonin receptors where antagonism or partial agonism may be pro-cognitive and antidepressant.',
    block: ['Antagonism or partial agonism: possible **pro-cognitive** and **antidepressant** actions'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Antagonist or partial agonist actions: possible pro-cognitive and antidepressant effects (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '117–119', text: '**5HT1B/D** is the serotonin neuron’s **terminal autoreceptor**: synaptic 5HT shuts off further release.', sec: 's4-5ht-pre' },
      { ch: 'ch04', pages: '125', text: '5HT1B **heteroreceptors** on NE, DA, histamine and ACh terminals **inhibit** their release; a few 5HT1B antagonists that may boost these transmitters treat depression.', sec: 's4-5ht-post' },
      { ch: 'ch07', pages: '317–318', text: 'Presynaptic **5HT1B/D autoreceptors** blunt 5HT build-up after SERT blockade; 5HT1B **heteroreceptors** on ACh, HA, DA and NE terminals inhibit their release. Vortioxetine’s partial agonism/antagonism removes both brakes.', sec: 's7-vortioxetine' }
    ],
    stim: ['Terminal autoreceptor: **shuts off 5HT release**; heteroreceptors: **less NE, DA, HA and ACh** release (Chapter 4)']
  },
  {
    id: '5ht2a', name: 'Serotonin 5HT2A receptor', short: '5HT2A', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A pivotal serotonin receptor. Antagonism (or inverse agonism) is antipsychotic and reduces drug-induced parkinsonism; agonism is psychotomimetic.',
    block: ['Antipsychotic actions in **Parkinson’s disease psychosis** and **dementia-related psychosis**', '**Reduced drug-induced parkinsonism**', 'Possible reduction of negative symptoms in schizophrenia', 'Possible mood-stabilizing and antidepressant actions in bipolar disorder', 'Improves **insomnia and anxiety**', 'Added to D2 blockade: **less DIP**, **less prolactin**, possible gains in positive and **negative** symptoms (Chapter 5)', 'Helps **akathisia**'],
    stim: ['**Psychotomimetic** actions', 'Experimental treatment of refractory depression and other disorders, especially accompanying psychotherapy', 'Indirect 5HT2A/2C agonism via serotonin release by MDMA: “empathogen”', 'Agonism by **LSD, psilocybin, mescaline**: psychosis, dissociation, **visual hallucinations** (Chapter 4)'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Antagonist or **inverse agonist** actions listed in Table 2-4; agonist actions are psychotomimetic and experimental for refractory depression.', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '45', text: 'Drugs long considered **5HT2A antagonists** may turn out to be **inverse agonists** in some brain areas.', sec: 's2-spectrum' },
      { ch: 'ch04', pages: '125–126', text: 'Always excitatory: on **apical dendrites of pyramidal neurons** it raises glutamate output; on **GABA interneurons** it lowers it. Most hallucinogens are 5HT2A agonists.', sec: 's4-5ht-post' },
      { ch: 'ch04', pages: '131–141', text: 'Central to the **serotonin hyperfunction** hypothesis: overstimulated by LSD, psilocybin and mescaline; **upregulated** in Parkinson’s disease psychosis; **unopposed** after loss of GABA inhibition in dementia. 5HT2A antagonists treat PDP and dementia-related psychosis.', sec: 's4-5ht-hyper' },
      { ch: 'ch05', pages: '184–187', text: 'On three populations of cortical glutamate neurons: blocking them **lowers** mesostriatal dopamine (antipsychotic), but **raises** nigrostriatal (fewer motor effects) and mesocortical dopamine (negative/cognitive/affective benefit).', sec: 's5-three-pathways' },
      { ch: 'ch05', pages: '187–189', text: 'On pituitary **lactotrophs**, serotonin at 5HT2A stimulates prolactin, so 5HT2A antagonism offsets D2-blocker hyperprolactinemia.', sec: 's5-5ht2a-prolactin' },
      { ch: 'ch05', pages: '204–222', text: 'Almost all drugs for psychosis bind **5HT2A more potently than D2**, except the D2 partial agonists.', sec: 's5-binding' },
      { ch: 'ch07', pages: '311–314', text: 'SSRI-raised 5HT at 5HT2A (and 5HT2C) receptors may cause **sexual dysfunction, insomnia and anxiety**; SARIs block it. 5HT2A antagonism increases **slow-wave sleep**.', sec: 's7-sari' }
    ]
  },
  {
    id: '5ht2b', name: 'Serotonin 5HT2B receptor', short: '5HT2B', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A recently recognized somatodendritic autoreceptor on serotonin neurons that acts as a feed-forward accelerator, opposing 5HT1A.',
    location: 'Somatodendritic (raphe serotonin neurons); can also be postsynaptic',
    stim: ['Increases serotonin neuron **firing** and **5HT release** (feed-forward)'],
    facts: [{ ch: 'ch04', pages: '117–119', text: 'Activates the serotonin neuron, increasing impulse flow and release: **feed-forward**, whereas 5HT1A is negative feedback. Which raphe neurons carry which receptor is not yet clear.', sec: 's4-5ht-pre' }]
  },
  {
    id: '5ht2c', name: 'Serotonin 5HT2C receptor', short: '5HT2C', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A serotonin receptor where antagonism has antidepressant actions.',
    block: ['Antagonism: **antidepressant**', 'Antagonism: treats **psychosis and mood disorders** (Chapter 4)', 'With H1 antagonism: **weight gain** (Chapter 5)'],
    stim: ['Indirect agonism via serotonin release by MDMA (with 5HT2A)', 'Agonism: treats **obesity**; on GABA interneurons, **reduces prefrontal NE and DA** (Chapter 4)'],
    facts: [
      { ch: 'ch02', pages: '39–40', text: '**Antagonist** actions are antidepressant (Table 2-4); stimulated indirectly by MDMA-induced serotonin release (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '126–127', text: 'Excitatory, postsynaptic and mostly on **GABA interneurons**, so serotonin here **inhibits NE and DA** release in prefrontal cortex. Agonists treat **obesity**; antagonists treat psychosis and mood disorders.', sec: 's4-5ht-post' },
      { ch: 'ch05', pages: '198–199', text: 'With **H1** antagonism, 5HT2C antagonism is linked to **weight gain** (clozapine, olanzapine, quetiapine, mirtazapine); it is also a candidate antidepressant property.', sec: 's5-metabolic' },
      { ch: 'ch07', pages: '293, 306–308', text: 'On brainstem **GABA interneurons**, 5HT2C receptors inhibit NE and DA release to the PFC; antagonists (fluoxetine, agomelatine, mirtazapine, trazodone, some TCAs, olanzapine, quetiapine) disinhibit them. 5HT2C receptors in the **SCN** fluctuate in a circadian way, high at night.', sec: 's7-agomelatine' }
    ]
  },
  {
    id: '5ht4', name: 'Serotonin 5HT4 receptor', short: '5HT4', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A postsynaptic serotonin receptor that is excitatory on cortical glutamate pyramidal neurons.',
    facts: [{ ch: 'ch04', pages: '120–121', text: 'One of the receptors through which serotonin **excites** glutamate pyramidal neurons (with 5HT2A, 2C, 6 and 7).', sec: 's4-5ht-network' }]
  },
  {
    id: '5ht5', name: 'Serotonin 5HT5 receptor', short: '5HT5', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A postsynaptic serotonin receptor that is inhibitory on cortical glutamate pyramidal neurons.',
    facts: [{ ch: 'ch04', pages: '120–121', text: 'One of the receptors through which serotonin **inhibits** glutamate pyramidal neurons (with 5HT1A and possibly postsynaptic 5HT1B).', sec: 's4-5ht-network' }]
  },
  {
    id: '5ht6', name: 'Serotonin 5HT6 receptor', short: '5HT6', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A postsynaptic serotonin receptor that may regulate acetylcholine release and cognition; antagonists are proposed as pro-cognitive agents.',
    facts: [
      { ch: 'ch02', pages: '39', text: 'Pharmacological and therapeutic actions are marked **“?”** in Table 2-4; possibly stimulated postsynaptically by SSRIs (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '130', text: 'Postsynaptic; may be a key regulator of **ACh release** and cognition. Blockade improves learning and memory in animals, so **5HT6 antagonists** are proposed **pro-cognitive** agents for schizophrenia and Alzheimer disease.', sec: 's4-5ht-post' },
      { ch: 'ch05', pages: '213', text: 'Clozapine, olanzapine, asenapine and zotepine bind 5HT6 about as potently as or more than D2; ziprasidone and iloperidone also bind it.', sec: 's5-binding' }
    ],
    block: ['Antagonism: proposed **pro-cognitive** action (animals: improved learning and memory) (Chapter 4)']
  },
  {
    id: '5ht7', name: 'Serotonin 5HT7 receptor', short: '5HT7', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A serotonin receptor where antagonism may be pro-cognitive and antidepressant.',
    block: ['Antagonism: possible **pro-cognitive** and **antidepressant** actions', 'Antagonism: used for **psychosis and mood** (Chapter 4)'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Antagonist actions: possible pro-cognitive and antidepressant effects (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch04', pages: '130–131', text: 'Excitatory and frequently on **GABA interneurons**: in cortex it **inhibits glutamate** release; in the raphe, a recurrent collateral acting at 5HT7 on GABA neurons **inhibits further 5HT release**. 5HT7 antagonists treat psychosis and mood.', sec: 's4-5ht-post' },
      { ch: 'ch05', pages: '195, 236', text: '5HT7 antagonism is a candidate antidepressant mechanism; **lurasidone** binds 5HT7 more potently than D2.', sec: 's5-dones' },
      { ch: 'ch07', pages: '318–319', text: '5HT7 receptors on raphe **GABA** neurons inhibit 5HT release and on PFC GABA interneurons restrain glutamate; antagonists (vortioxetine, trazodone, quetiapine, brexpiprazole, aripiprazole, lurasidone) disinhibit both.', sec: 's7-vortioxetine' }
    ],
    stim: ['On cortical GABA interneurons: **less glutamate** release; in raphe: **less 5HT** release (Chapter 4)']
  },
  {
    id: 'alpha2', name: 'α2-adrenergic receptor', short: 'α2', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'A norepinephrine receptor targeted in both directions: antagonism is antidepressant, agonism helps ADHD.',
    block: ['Antagonism: **antidepressant** actions'],
    stim: ['Agonism: improved **cognition and behavioral disturbance in ADHD**'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Antagonists have antidepressant actions; agonists improve cognition and behavior in ADHD (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '195, 208', text: 'α2 antagonism is a candidate **antidepressant** property of several drugs for psychosis (risperidone, quetiapine via norquetiapine, brexpiprazole), though α1 blockade can cancel it.', sec: 's5-mania-dep' },
      { ch: 'ch06', pages: '254–255', text: 'The only NE receptor that can be a **presynaptic autoreceptor**: on axon terminals (gatekeepers that halt release) and somatodendritic (shut off firing). Agonists step on the brake; antagonists **cut the brake cable**.', sec: 's6-ne' },
      { ch: 'ch07', pages: '309', text: 'α2 **heteroreceptors** on serotonin neurons let NE brake 5HT release; α2 antagonists (mirtazapine, mianserin) therefore release **both NE and 5HT**, synergizing with reuptake inhibitors.', sec: 's7-mirtazapine' }
    ]
  },
  {
    id: 'alpha1', name: 'α1-adrenergic receptor', short: 'α1', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'A norepinephrine receptor whose blockade helps nightmares and agitation but causes orthostatic hypotension.',
    block: ['Improved sleep (**nightmares**)', 'Improved **agitation in Alzheimer disease**', 'Side effects: **orthostatic hypotension** and possibly **sedation**'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**Antagonist** actions: improved sleep (nightmares), improved agitation in Alzheimer disease; side effects of orthostatic hypotension and possibly sedation (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '181, 236', text: 'α1 blockade adds **sedation** and **orthostatic hypotension** (iloperidone, paliperidone, clozapine, quetiapine); it may also lower DIP risk (iloperidone) and help agitation (brexpiprazole).', sec: 's5-fga' },
      { ch: 'ch07', pages: '327–328', text: 'α1 receptors are **colocalized** with 5HT2A on pyramidal neurons; blocking both releases DA in the striatum (less DIP) and PFC (antidepressant). Bladder α1 stimulation causes urinary hesitancy (milnacipran), relieved by an α1 antagonist.', sec: 's7-augment-sda' },
      { ch: 'ch08', pages: '370', text: 'Excess NE at postsynaptic α1 receptors in the amygdala may cause **nightmares and hyperarousal**; α1 antagonists (prazosin) at night reduce them in PTSD.', sec: 's8-ne' }
    ]
  },
  {
    id: 'beta-ar', name: 'β-adrenergic receptors (β1, β2, β3)', short: 'β1–β3', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'Postsynaptic norepinephrine receptors (β1, β2, β3). β-blockers are among the treatments for akathisia (Chapter 5).',
    location: 'Postsynaptic only (never presynaptic autoreceptors)',
    block: ['β-adrenergic blockers: treat **akathisia** (Chapter 5)', 'β blockers: **performance anxiety**; investigational prevention of fear consolidation/reconsolidation (Chapter 8)'],
    facts: [
      { ch: 'ch06', pages: '254', text: 'Postsynaptic NE receptors that convert NE occupancy into signal transduction and gene expression changes.', sec: 's6-ne' },
      { ch: 'ch08', pages: '370', text: 'Excess NE at **β1** receptors in the amygdala and PFC may drive fear, panic and worry; sustained NET inhibition **downregulates β1** receptors.', sec: 's8-ne' },
      { ch: 'ch08', pages: '375–376', text: '**β blockers** given soon after trauma may block **consolidation** of fear memories (reducing PTSD risk) and may disrupt **reconsolidation**; also used for **performance anxiety**.', sec: 's8-novel' }
    ]
  },
  {
    id: 'gabab', name: 'GABA-B receptor', short: 'GABA-B', family: 'G-protein-linked receptor', nt: 'gaba',
    summary: 'The G-protein-linked GABA receptor; agonism treats cataplexy and sleepiness in narcolepsy, among other possible uses.',
    stim: ['**Cataplexy** and **sleepiness in narcolepsy**', 'Possibly enhanced slow-wave sleep', 'Pain reduction in chronic pain and fibromyalgia', 'Possible use in alcohol use disorder and withdrawal'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**Agonist** actions listed in Table 2-4 (cataplexy, sleepiness in narcolepsy, slow-wave sleep, pain, alcohol).', sec: 's2-receptor-tables' },
      { ch: 'ch06', pages: '258', text: 'The G-protein-linked GABA receptor, possibly coupled to calcium or potassium channels.', sec: 's6-gaba' }
    ]
  },
  {
    id: 'mt1mt2', name: 'Melatonin MT1 and MT2 receptors', short: 'MT1/MT2', family: 'G-protein-linked receptor', nt: 'melatonin',
    summary: 'Melatonin receptors; agonists improve insomnia and circadian rhythms.',
    stim: ['Improvement of **insomnia** and **circadian rhythms**'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**Agonist** actions at both MT1 and MT2 improve insomnia and circadian rhythms (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch06', pages: '274–275', text: 'Melatonin acting on the **SCN** resets circadian rhythms; early-evening melatonin may correct the phase delay of depression.', sec: 's6-circadian' },
      { ch: 'ch07', pages: '306–308', text: '**Agomelatine** is an MT1/MT2 agonist; the so-called MT3 receptor is really the enzyme **NRH–quinone oxidoreductase 2**.', sec: 's7-agomelatine' }
    ]
  },
  {
    id: 'h1', name: 'Histamine H1 receptor', short: 'H1', family: 'G-protein-linked receptor', nt: 'histamine',
    summary: 'Blocking H1 is therapeutic for anxiety and insomnia but causes sedation and weight gain. Antihistamines may be inverse agonists in some areas.',
    block: ['Therapeutic for **anxiety and insomnia**', 'Side effects: **sedation** and **weight gain**'],
    facts: [
      { ch: 'ch02', pages: '40', text: '**Antagonist** actions: therapeutic for anxiety and insomnia; side effects of sedation and weight gain (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '45', text: '**H1 antagonists/antihistamines** may turn out to be **inverse agonists** in some brain areas.', sec: 's2-spectrum' },
      { ch: 'ch05', pages: '181, 198', text: 'Blocking H1 adds **weight gain and sedation**; with 5HT2C blockade it drives appetite on the metabolic highway. Quetiapine at 50 mg acts almost only here.', sec: 's5-fga' },
      { ch: 'ch07', pages: '308–312, 335', text: 'H1 antagonism causes sedation and weight gain with mirtazapine and TCAs, and contributes to low-dose **trazodone**’s hypnotic action.', sec: 's7-sari' }
    ]
  },
  {
    id: 'h3', name: 'Histamine H3 receptor', short: 'H3', family: 'G-protein-linked receptor', nt: 'histamine',
    summary: 'Antagonism or inverse agonism at H3 improves daytime sleepiness.',
    block: ['Antagonism/inverse agonism: improvement of **daytime sleepiness**'],
    facts: [{ ch: 'ch02', pages: '40', text: 'Antagonist/inverse agonist actions improve daytime sleepiness (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'm1', name: 'Muscarinic M1 receptor', short: 'M1', family: 'G-protein-linked receptor', nt: 'acetylcholine',
    summary: 'Agonism is pro-cognitive and antipsychotic; antagonism causes sedation and memory disturbance. Acetylcholinesterase inhibitors stimulate it indirectly.',
    stim: ['**Pro-cognitive** and **antipsychotic**', 'Indirect agonism via acetylcholinesterase inhibition: cognition in Alzheimer disease'],
    block: ['Side effects: **sedation** and **memory disturbance**', 'Treats **drug-induced parkinsonism** and **acute dystonia** (Chapter 5)', 'Strong muscarinic binding: **clozapine, olanzapine, quetiapine**; constipation, **paralytic ileus**, sialorrhea (clozapine)'],
    facts: [
      { ch: 'ch02', pages: '40', text: 'Agonist: pro-cognitive and antipsychotic. Antagonist: sedation and memory disturbance (Table 2-4). Stimulated indirectly by acetylcholinesterase inhibitors (Table 2-5).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '166–169', text: 'Blocking **M1** relieves **drug-induced parkinsonism** by restoring the striatal dopamine–acetylcholine balance, at the cost of anticholinergic burden; an IM anticholinergic relieves **acute dystonia**.', sec: 's5-motor' },
      { ch: 'ch07', pages: '294–295, 335', text: '**Paroxetine** has mild M1 antagonism (calming; withdrawal rebound); all **TCAs** block muscarinic receptors.', sec: 's7-tca' }
    ],
    updates: [{ year: '2024', title: 'First M1/M4 agonist approved', text: '**Xanomeline–trospium** (Cobenfy), with the M1/M4-preferring agonist xanomeline, was approved for schizophrenia in September 2024.', source: 'FDA, September 2024' }]
  },
  {
    id: 'm4', name: 'Muscarinic M4 receptor', short: 'M4', family: 'G-protein-linked receptor', nt: 'acetylcholine',
    summary: 'Agonism at M4 is listed as antipsychotic.',
    stim: ['**Antipsychotic**'],
    facts: [
      { ch: 'ch02', pages: '40', text: '**Agonist** actions are antipsychotic (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '242', text: '**Xanomeline** (M4/M1 agonist) lowers VTA dopamine firing and raises prefrontal dopamine; combined with peripheral **trospium**.', sec: 's5-future' }
    ],
    updates: [{ year: '2024', title: 'First M1/M4 agonist approved', text: '**Xanomeline–trospium** (Cobenfy) was approved for schizophrenia in September 2024.', source: 'FDA, September 2024' }]
  },
  {
    id: 'm2m3', name: 'Muscarinic M2 and M3 receptors', short: 'M2/M3', family: 'G-protein-linked receptor', nt: 'acetylcholine',
    summary: 'Blocking these produces classic peripheral anticholinergic side effects and may contribute to metabolic dysregulation.',
    block: ['**Dry mouth, blurred vision, constipation, urinary retention**', 'May contribute to **metabolic dysregulation** (dyslipidemia and diabetes)'],
    facts: [
      { ch: 'ch02', pages: '40', text: '**Antagonist** actions cause dry mouth, blurred vision, constipation and urinary retention, and may contribute to metabolic dysregulation (Table 2-4). M5 actions are marked unknown.', sec: 's2-receptor-tables' },
      { ch: 'ch05', pages: '242', text: '**Trospium**, which does not enter the brain, blocks peripheral M2/M3 effects of xanomeline.', sec: 's5-future' }
    ]
  },
  {
    id: 'mglur-g1', name: 'Group I metabotropic glutamate receptors (mGluR1, mGluR5)', short: 'mGluR I', family: 'G-protein-linked receptor', nt: 'glutamate',
    summary: 'G-protein-linked glutamate receptors located mainly postsynaptically, where they hypothetically facilitate responses mediated by ionotropic glutamate receptors.',
    facts: [{ ch: 'ch04', pages: '99–102', text: 'Group I (mGluR1, 5) are mainly **postsynaptic**, hypothetically strengthening ionotropic glutamate responses.', sec: 's4-glu-receptors' }],
    location: 'Mainly **postsynaptic**'
  },
  {
    id: 'mglur-g2', name: 'Group II metabotropic glutamate receptors (mGluR2, mGluR3)', short: 'mGluR II', family: 'G-protein-linked receptor', nt: 'glutamate',
    summary: 'G-protein-linked glutamate receptors that can act as presynaptic autoreceptors to reduce glutamate release.',
    facts: [{ ch: 'ch04', pages: '99–102', text: 'Group II (mGluR2, 3) can be **presynaptic autoreceptors** that block glutamate release; agonists might reduce release. **GRM3** (mGluR3) is a schizophrenia risk gene explored as a drug target.', sec: 's4-glu-receptors' }],
    location: '**Presynaptic** autoreceptors (also elsewhere)',
    stim: ['Agonism at presynaptic autoreceptors: **reduces glutamate release**']
  },
  {
    id: 'mglur-g3', name: 'Group III metabotropic glutamate receptors (mGluR4, 6, 7, 8)', short: 'mGluR III', family: 'G-protein-linked receptor', nt: 'glutamate',
    summary: 'G-protein-linked glutamate receptors that can act as presynaptic autoreceptors to reduce glutamate release.',
    facts: [{ ch: 'ch04', pages: '99–102', text: 'Group III (mGluR4, 6, 7, 8) can also act as **presynaptic autoreceptors** reducing glutamate release.', sec: 's4-glu-receptors' }],
    location: '**Presynaptic** autoreceptors',
    stim: ['Agonism at presynaptic autoreceptors: **reduces glutamate release**']
  },
  {
    id: 'ox', name: 'Orexin receptors (OX1, OX2)', short: 'OX1/OX2', family: 'G-protein-linked receptor', nt: 'orexin',
    summary: 'Receptors for orexin A and B; antagonists are hypnotics for insomnia.',
    block: ['**Hypnotic** for insomnia'],
    facts: [{ ch: 'ch02', pages: '40', text: '**Antagonist** actions at OX1 and OX2 are hypnotic for insomnia (Table 2-4); detailed in Chapter 10.', sec: 's2-receptor-tables' }]
  },
  {
    id: 'crf', name: 'Corticotropin-releasing factor (CRF) receptors', short: 'CRF-R', family: 'G-protein-linked receptor', ntLabel: 'Neuropeptide (CRF)',
    summary: 'Receptors for hypothalamic CRF, which starts the HPA stress response; antagonists are in testing for depression and stress-related illness.',
    block: ['Antagonists in testing to halt or reverse **HPA-axis hyperactivity** in depression'],
    facts: [
      { ch: 'ch06', pages: '270–271', text: 'Hypothalamic CRF → pituitary ACTH → adrenal glucocorticoid; in depression the axis is overactive and insensitive to feedback.', sec: 's6-hpa' },
      { ch: 'ch08', pages: '365–367', text: '**CRF/HPA** is one of the regulators of the amygdala fear circuit; the amygdala–hypothalamus connection drives the endocrine output of fear.', sec: 's8-amygdala' }
    ]
  },
  {
    id: 'v1b', name: 'Vasopressin 1B receptor', short: 'V1B', family: 'G-protein-linked receptor', ntLabel: 'Neuropeptide (vasopressin)',
    summary: 'A stress-axis receptor targeted by novel treatments in testing for depression.',
    block: ['Antagonists in testing for **HPA-axis** abnormalities in depression'],
    facts: [{ ch: 'ch06', pages: '270–271', text: 'Listed with CRF and glucocorticoid receptors as novel targets for stress-related illness.', sec: 's6-hpa' }]
  },
  {
    id: 'taar1', name: 'Trace amine-associated receptor 1 (TAAR1)', short: 'TAAR1', family: 'G-protein-linked receptor', ntLabel: 'Trace amines',
    summary: 'The main human receptor for trace amines, expressed in monoamine brainstem centers and projection areas. Agonists are a proposed antipsychotic mechanism that tames dopamine without blocking D2.',
    location: 'Dorsal raphe, VTA and monoamine projection areas',
    stim: ['Heterodimerizes with **D2** and biases signaling toward **Gi**: less presynaptic dopamine synthesis and release', 'Postsynaptically less **β-arrestin 2/GSK-3** signaling', 'Proposed **antipsychotic** (and antimanic) action without D2 blockade'],
    facts: [{ ch: 'ch05', pages: '241–242', text: 'Trace amines (β-phenylethylamine, p-tyramine, tryptamine, p-octopamine, p-synephrine) form when the tyrosine or tryptophan hydroxylase step is skipped, are not stored in vesicles and are not released on firing; they are called the **“rheostat”** of dopamine, glutamate and serotonin transmission. Six human TAARs exist (1, 2, 5, 6, 8, 9); TAAR1 is the main one.', sec: 's5-future' }]
  },
  {
    id: 'cb1', name: 'Cannabinoid 1 receptor (CB1)', short: 'CB1', family: 'G-protein-linked receptor', nt: 'endocannabinoids',
    summary: 'The presynaptic receptor reached by retrograde endocannabinoid signaling.',
    location: '**Presynaptic** terminals',
    facts: [{ ch: 'ch01', pages: '6–7', text: 'Endocannabinoids made in the postsynaptic neuron diffuse back to **presynaptic cannabinoid receptors such as CB1**: the classic example of **retrograde neurotransmission**.', sec: 's1-classic' }]
  },
  {
    id: 'mor', name: 'μ-Opioid receptor', short: 'μ-opioid', family: 'G-protein-linked receptor', nt: 'endorphin',
    summary: 'The receptor for β-endorphin and morphine. In Chapter 5 its antagonist samidorphan is paired with olanzapine to limit weight gain; opioid pharmacology is covered later.',
    block: ['**Samidorphan** with olanzapine: reduces olanzapine-induced **weight gain** (Chapter 5)'],
    facts: [
      { ch: 'ch05', pages: '201', text: 'The μ-opioid antagonist **samidorphan** combined with olanzapine was a new agent on the horizon to reduce olanzapine-induced weight gain.', sec: 's5-metabolic' },
      { ch: 'ch07', pages: '328, 355', text: 'Possible μ-opioid contributions to the antidepressant effects of **ketamine** and **dextromethadone** are debated.', sec: 's7-dxm' },
      { ch: 'ch08', pages: '375', text: '**Opioids** given soon after trauma may mitigate consolidation of the traumatic memory and reduce the chance of PTSD.', sec: 's8-novel' }
    ]
  },
  /* ---------------- ligand-gated ion channels ---------------- */
  {
    id: 'gabaa', name: 'GABA-A receptor', short: 'GABA-A', family: 'Ligand-gated ion channel', nt: 'gaba',
    summary: 'A pentameric ligand-gated chloride channel. Benzodiazepines and Z drugs are PAMs (full agonists at their allosteric sites) mediating phasic inhibition; neuroactive steroids act at benzodiazepine-insensitive sites mediating tonic inhibition.',
    coupling: 'Opens a **chloride** channel; five subunits, each with four transmembrane regions (e.g., α1, γ, δ subunits)',
    stim: ['Benzodiazepine-site PAMs: **reduce anxiety, induce sleep, block convulsions, block short-term memory, relax muscles**', 'Nonbenzodiazepine PAM sites (Z drugs): **improve insomnia**', 'Neurosteroid sites (tonic inhibition): **postpartum depression**, rapid-acting antidepressant, anesthetic'],
    block: ['Benzodiazepine **inverse agonists** (NAMs; experimental only): **panic attacks, seizures**, some improvement in memory', 'Neutral antagonism at the benzodiazepine site (**flumazenil**): reverses benzodiazepine sedation and overdose'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'A **pentameric** ligand-gated channel (Table 3-1); subtypes depend on which subunits (e.g., α1, γ, δ) are assembled.', sec: 's3-structure' },
      { ch: 'ch03', pages: '55', text: 'Table 3-2: **benzodiazepine** sites (anxiolytic) and **nonbenzodiazepine PAM** sites (Z drugs, insomnia) mediate **phasic** inhibition; **neurosteroid** sites (allopregnanolone) mediate **tonic** inhibition.', sec: 's3-drugs' },
      { ch: 'ch03', pages: '65–66', text: 'Benzodiazepines are the book’s example of **PAMs**: acting as **full agonists at the PAM site**, they amplify GABA’s opening of the chloride channel. The **same site** gives NAM actions with an **inverse agonist**.', sec: 's3-pam' },
      { ch: 'ch04', pages: '105–108', text: '**α2-subunit** GABA-A receptors on the pyramidal neuron’s **axon initial segment** receive interneuron GABA; they are compensatorily **increased** in schizophrenia.', sec: 's4-nmda-hypo' },
      { ch: 'ch06', pages: '259–262', text: 'Benzodiazepine-sensitive receptors need **two β, γ2 or γ3, and two α1–3**; one benzodiazepine binds between γ and α, two GABA molecules between α and β. **α1** subunits relate to **sleep**, **α2/α3** to **anxiety**; current benzodiazepines are nonselective.', sec: 's6-gabaa' },
      { ch: 'ch06', pages: '262–264', text: 'Benzodiazepine-insensitive receptors (α4, α6, γ1 or δ) are **extrasynaptic** and mediate **tonic** inhibition; **neuroactive steroids** bind between α and δ. Abnormal γ2, α2 or δ expression is linked to **epilepsy**.', sec: 's6-neurosteroids' },
      { ch: 'ch07', pages: '320–322', text: 'Neuroactive steroids (brexanolone) act at both benzodiazepine-sensitive and **benzodiazepine-insensitive** GABA-A receptors; the latter (extrasynaptic, tonic) are thought to carry the antidepressant effect.', sec: 's7-neurosteroids' },
      { ch: 'ch08', pages: '366–367', text: 'Benzodiazepines enhance **phasic** inhibition at postsynaptic GABA-A receptors **in the amygdala** (less fear) and on CSTC **inhibitory interneurons** (less worry); they act **immediately**.', sec: 's8-bzd' }
    ],
    updates: [{ year: '2023', title: 'Oral neurosteroid approved', text: '**Zuranolone**, an oral GABA-A positive allosteric modulator, was approved in August 2023 for postpartum depression.', source: 'FDA, August 2023' }]
  },
  {
    id: 'gabac', name: 'GABA-C receptor', short: 'GABA-C', family: 'Ligand-gated ion channel', nt: 'gaba',
    summary: 'A ligand-gated chloride-channel GABA receptor, one of the three major GABA receptor types.',
    facts: [{ ch: 'ch06', pages: '258–259', text: 'Like GABA-A, a **ligand-gated ion channel** forming part of an inhibitory chloride channel complex.', sec: 's6-gaba' }]
  },
  {
    id: 'nicotinic', name: 'Nicotinic acetylcholine receptors (α4β2, α7)', short: 'Nicotinic', family: 'Ligand-gated ion channel', nt: 'acetylcholine',
    summary: 'Pentameric ligand-gated channels for acetylcholine. Nicotine desensitizes and then inactivates them; the α4β2 partial agonist varenicline aids smoking cessation.',
    coupling: 'Pentameric ion channel (calcium-permeable, a different class from VSCCs)',
    stim: ['α4β2 **partial agonism** (varenicline): **smoking cessation**', 'Prolonged agonism (nicotine): **desensitization** within about one cigarette, then **inactivation** for hours'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'Pentameric (Table 3-1), with subtypes such as **α7** and **α4β2**.', sec: 's3-structure' },
      { ch: 'ch03', pages: '63–64', text: 'Inactivation is **best characterized** for nicotinic receptors. Acetylcholine is hydrolyzed too fast to desensitize them, but **nicotine** is not hydrolyzed by acetylcholinesterase: it desensitizes them in about the time of one cigarette and inactivates them for about the time between cigarettes.', sec: 's3-states' }
    ]
  },
  {
    id: '5ht3', name: 'Serotonin 5HT3 receptor', short: '5HT3', family: 'Ligand-gated ion channel', nt: 'serotonin',
    summary: 'The only ligand-gated serotonin receptor (pentameric). Antagonists are antiemetic; mirtazapine and vortioxetine block it as part of their profiles.',
    block: ['**Pro-cognitive** and **antidepressant** (mirtazapine, vortioxetine)', '**Antiemetic**: reduces chemotherapy-induced emesis'],
    facts: [
      { ch: 'ch03', pages: '53', text: 'A **pentameric** ligand-gated ion channel (Table 3-1).', sec: 's3-structure' },
      { ch: 'ch03', pages: '55', text: '**Antagonists**: mirtazapine and vortioxetine (pro-cognitive, antidepressant); antiemetics for chemotherapy-induced emesis (Table 3-2).', sec: 's3-drugs' },
      { ch: 'ch04', pages: '127–130', text: 'In the **chemoreceptor trigger zone** (outside the blood–brain barrier) it mediates nausea and vomiting; in cortex it sits on **non-parvalbumin GABA interneurons**, so serotonin here **inhibits ACh and NE** release and glutamate output. Antagonists should enhance ACh and NE release.', sec: 's4-5ht-post' },
      { ch: 'ch05', pages: '212', text: 'The pines bind 5HT3 weakly; the dones not at all; aripiprazole weakly. 5HT3 antagonism is a candidate antidepressant property.', sec: 's5-binding' },
      { ch: 'ch07', pages: '309–311', text: 'Peripheral 5HT3 receptors (chemoreceptor trigger zone, gut) mediate nausea, vomiting and diarrhea; brain 5HT3 receptors on **GABA interneurons** are excitatory, so antagonists (mirtazapine, **vortioxetine**) release glutamate, ACh and NE.', sec: 's7-mirtazapine' }
    ],
    stim: ['Nausea and vomiting (CTZ); in cortex **less ACh, NE and glutamate** release (Chapter 4)']
  },
  {
    id: 'glyr', name: 'Glycine receptor (strychnine-sensitive)', short: 'Glycine receptor', family: 'Ligand-gated ion channel', nt: 'glycine',
    summary: 'A pentameric ligand-gated glycine receptor, sensitive to strychnine.',
    facts: [{ ch: 'ch03', pages: '53', text: '**Strychnine-sensitive glycine receptors** are among the pentameric ligand-gated ion channels (Table 3-1).', sec: 's3-structure' }]
  },
  {
    id: 'nmda', name: 'NMDA glutamate receptor', short: 'NMDA', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor whose calcium channel opens with glutamate/glycine cotransmission. Memantine (Mg²⁺/NAM site) and open-channel blockers (PCP, ketamine, dextromethorphan, dextromethadone) act here.',
    coupling: 'Tetrameric; subunits NMDAR1, NMDAR2A–D, NMDAR3A; calcium channel opened by **glutamate with glycine** as cotransmitter',
    block: ['NAM/Mg²⁺ site antagonism (memantine): **pro-cognitive in Alzheimer disease**', 'Open-channel antagonism (PCP, ketamine, dextromethorphan, dextromethadone): **dissociative hallucinogen; anesthetic; pseudobulbar affect; agitation in Alzheimer disease; rapid-acting antidepressant; treatment-resistant depression**', 'Blockade on prefrontal GABA interneurons (ketamine, PCP): **psychosis** with visual hallucinations and paranoid delusions via downstream dopamine excess (Chapter 4)'],
    facts: [
      { ch: 'ch03', pages: '55–56', text: 'A **tetrameric** ionotropic glutamate receptor (Table 3-3); subtype-selective glutamate drugs are under investigation but not in clinical use.', sec: 's3-structure' },
      { ch: 'ch03', pages: '66', text: '**PCP and ketamine** are NAMs that bind **inside the calcium channel**, entering only **when the channel is open**, and prevent glutamate/glycine cotransmission from opening it.', sec: 's3-pam' },
      { ch: 'ch04', pages: '100–101', text: 'A **coincidence detector**: opens only with glutamate bound, **glycine or D-serine** bound, and depolarization removing the **Mg²⁺** plug (Mg²⁺ acts as a NAM). Calcium entry drives **long-term potentiation**.', sec: 's4-glu-receptors' },
      { ch: 'ch04', pages: '105–110', text: '**Hypofunction** at prefrontal **GABA interneurons** (from neurodevelopment, ketamine/PCP or neurodegeneration) is a leading hypothesis of psychosis.', sec: 's4-nmda-hypo' },
      { ch: 'ch05', pages: '169, 237', text: '**Amantadine**’s weak NMDA antagonism may explain its benefit in DIP; NRX101 pairs the glycine-site agent **D-cycloserine** with lurasidone.', sec: 's5-motor' },
      { ch: 'ch07', pages: '328–332', text: 'Ketamine blocks NMDA at the open-channel **PCP site**: NMDA block on GABA interneurons → glutamate burst → **AMPA** → mTOR or BDNF/VEGF → rapid synaptogenesis.', sec: 's7-ketamine' },
      { ch: 'ch08', pages: '372–375', text: 'NMDA receptors embed **fear conditioning** via LTP in the lateral and central amygdala; boosting NMDA action during **exposure therapy** might strengthen **fear extinction** instead.', sec: 's8-novel' }
    ],
    updates: [
      { year: '2022', title: 'Dextromethorphan–bupropion approved', text: 'Approved for major depressive disorder in August 2022 (Auvelity).', source: 'FDA, August 2022' },
      { year: '2025', title: 'Esketamine monotherapy', text: 'Esketamine nasal spray was approved as monotherapy for treatment-resistant depression in January 2025.', source: 'FDA, January 2025' }
    ]
  },
  {
    id: 'ampa', name: 'AMPA glutamate receptor', short: 'AMPA', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor (GluR1–4 subunits). No subtype-selective drugs are in clinical use.',
    facts: [
      { ch: 'ch03', pages: '55–56', text: 'AMPA (α-amino-3-hydroxy-5-methyl-4-isoxazole-propionic acid) receptors are tetrameric, with **GluR1–4** subunits (Table 3-3).', sec: 's3-structure' },
      { ch: 'ch04', pages: '100–101, 151–154', text: 'Mediates **fast excitation** by admitting sodium; its depolarization helps unplug NMDA channels. LTP increases synaptic AMPA receptors, “strengthening” synapses; weak synapses with few AMPA receptors may be eliminated.', sec: 's4-glu-receptors' },
      { ch: 'ch07', pages: '330–331', text: 'Glutamate released after ketamine stimulates AMPA receptors while NMDA receptors are blocked, triggering **ERK/AKT → mTOR** or **VSCC → BDNF/VEGF** signaling.', sec: 's7-ketamine' }
    ]
  },
  {
    id: 'kainate', name: 'Kainate glutamate receptor', short: 'Kainate', family: 'Ligand-gated ion channel', nt: 'glutamate',
    summary: 'A tetrameric ionotropic glutamate receptor (GluR5–7, KA1–2 subunits). No subtype-selective drugs are in clinical use.',
    facts: [
      { ch: 'ch03', pages: '55–56', text: 'Kainate receptors are tetrameric, with **GluR5–7** and **KA1–2** subunits (Table 3-3).', sec: 's3-structure' },
      { ch: 'ch04', pages: '100–101', text: 'With AMPA, mediates **fast excitatory** neurotransmission via sodium entry.', sec: 's4-glu-receptors' }
    ]
  },
  /* ---------------- voltage-sensitive ion channels ---------------- */
  {
    id: 'a2d', name: 'α2δ subunit of voltage-sensitive calcium channels', short: 'α2δ', family: 'Voltage-sensitive ion channel',
    summary: 'A protein flanking the α1 pore of VSCCs, with a transmembrane δ part and an extracellular α2 part. Target of pregabalin and gabapentin.',
    location: 'Presynaptic **N and P/Q** VSCCs (flanking the α1 pore)',
    block: ['Reduced neurotransmitter release in states of excess: **pain, seizures**, possibly **anxiety and sleep**', '**Anxiolytic** actions (social anxiety, panic; approved for anxiety outside the US) (Chapter 8)'],
    facts: [
      { ch: 'ch03', pages: '71', text: 'Has a **δ** part in the membrane and an **α2** part outside the cell; it is the target of **pregabalin and gabapentin** and may regulate how the channel opens and closes.', sec: 's3-vscc' },
      { ch: 'ch08', pages: '366–368', text: 'α2δ ligands bind **open, overly active** N and P/Q channels in the amygdala and CSTC loops, cutting excess **glutamate** release to reduce fear and worry; anxiolytic in social anxiety and panic disorder.', sec: 's8-a2d' }
    ]
  },
  {
    id: 'vssc', name: 'Voltage-sensitive sodium channel (VSSC)', short: 'VSSC', family: 'Voltage-sensitive ion channel',
    summary: 'Opens when membrane charge changes, letting sodium in so the action potential travels along the axon. Four six-segment subunits form the α pore; segment 4 is the voltmeter and the III–IV loop plugs the pore. Site of action of several anticonvulsants.',
    coupling: 'α pore of **four subunits** × **six** transmembrane segments; flanked by regulatory **β** units',
    block: ['Sites of several **anticonvulsants**, some also **mood stabilizers** or treatments for **chronic pain** (Chapters 7 and 9)'],
    facts: [
      { ch: 'ch01', pages: '9', text: 'In **excitation–secretion coupling**, electrical impulses open VSSCs; **sodium flows in** and the action potential moves along the axon to the presynaptic terminal.', sec: 's1-coupling' },
      { ch: 'ch03', pages: '67–68', text: '**Segment 4** is the **voltmeter**; the **5–6 extracellular loop** is the **ionic filter** (colander); the **III–IV cytoplasmic loop** is the **pore inactivator** plug.', sec: 's3-vssc' },
      { ch: 'ch03', pages: '68–69', text: 'Three states: **open**, **inactivated** (plugged before it closes) and **closed and inactivated**. β units and the α unit may be phosphoproteins regulated by signal transduction.', sec: 's3-vssc' },
      { ch: 'ch03', pages: '69–70', text: 'There are many sodium channel subtypes; most anticonvulsants probably act at **multiple sites** on multiple types of channel.', sec: 's3-vssc' },
      { ch: 'ch07', pages: '335–336', text: 'All TCAs block VSSCs in heart and brain; in overdose this causes **coma, seizures, arrhythmia and death**.', sec: 's7-tca' },
      { ch: 'ch07', pages: '347–353', text: 'Valproate may alter VSSC sensitivity; **carbamazepine**, oxcarbazepine/eslicarbazepine and **lamotrigine** bind the open-channel **α subunit**; lamotrigine and riluzole may thereby reduce **glutamate release**.', sec: 's7-valproate-cbz' }
    ]
  },
  {
    id: 'vscc', name: 'Voltage-sensitive calcium channel (VSCC)', short: 'VSCC', family: 'Voltage-sensitive ion channel',
    summary: 'Opens at the presynaptic terminal; calcium entry makes snared vesicles release their neurotransmitter. The α1 pore is flanked by γ, β and α2δ units; presynaptic N and P/Q channels are the subtypes of most interest.',
    location: '**Presynaptic nerve terminal** (N and P/Q types); L, R and T types elsewhere (Table 3-4)',
    coupling: 'α1 pore of four six-segment subunits; **II–III loop snare** hooks synaptic vesicles',
    block: ['Keeping vesicles tethered reduces release in **pain, seizures, mania and anxiety** (certain anticonvulsants)', 'L-channel blockade on vascular smooth muscle (**dihydropyridines**) lowers blood pressure'],
    facts: [
      { ch: 'ch01', pages: '9', text: 'When the action potential reaches the terminal it opens VSCCs; **calcium influx** causes synaptic vesicles anchored to the inner membrane to **spill their contents** into the synapse.', sec: 's1-coupling' },
      { ch: 'ch03', pages: '70–71', text: 'The **II–III loop** of the α1 unit is a **snare** linking the channel to synaptic vesicles via SNAP 25, synaptobrevin, syntaxin and synaptotagmin: a “cocked gun.”', sec: 's3-vscc' },
      { ch: 'ch03', pages: '71–73', text: 'Subtypes (Table 3-4): **L** (Cav1.2/1.3), **N** (Cav2.2), **P/Q** (Cav2.1), **R** (Cav2.3), **T** (Cav3.1–3.3). **N and P/Q** are presynaptic and regulate transmitter release.', sec: 's3-vscc' },
      { ch: 'ch07', pages: '352', text: '**L-type** calcium channels on vascular smooth muscle are targets of antihypertensive “calcium channel blockers”; anecdotal evidence suggests dihydropyridines may help some bipolar patients.', sec: 's7-lamotrigine' }
    ]
  },
  /* ---------------- enzymes ---------------- */
  {
    id: 'mao', name: 'Monoamine oxidase (MAO)', short: 'MAO', family: 'Enzyme', ntLabel: 'Monoamines',
    summary: 'An enzyme that destroys monoamines. MAO inhibitors raise monoamine levels, acting as indirect agonists.',
    block: ['Indirect full agonist action by blocking enzymatic destruction of monoamines (details in Chapter 7)', '**MAO-A**: antidepressant; **MAO-B**: boosts levodopa in Parkinson’s disease (Chapter 7)'],
    facts: [
      { ch: 'ch02', pages: '41, 48', text: 'One of only **three enzymes** targeted by psychotropic drugs; inhibiting it produces **indirect full agonist** action.', sec: 's2-enzymes' },
      { ch: 'ch04', pages: '80, 114', text: '**MAO-A and MAO-B** destroy unstored dopamine; serotonergic **MAO-B** has low affinity for 5HT and degrades it only at high intracellular levels.', sec: 's4-5ht-synth' },
      { ch: 'ch06', pages: '253', text: 'MAO-A or MAO-B in mitochondria destroys norepinephrine in the presynaptic neuron and elsewhere.', sec: 's6-ne' },
      { ch: 'ch07', pages: '336–338', text: '**MAO-A** prefers 5HT and NE (major form outside the brain); **MAO-B** prefers trace amines (serotonin neurons, platelets, lymphocytes); both destroy DA and **tyramine**. Brain MAO-A must be inhibited for antidepressant action; inhibiting both raises DA too.', sec: 's7-maoi' },
      { ch: 'ch07', pages: '336', text: 'Phenelzine, tranylcypromine, isocarboxazid and selegiline inhibit MAO **irreversibly**: activity returns only after new enzyme is made, about **2–3 weeks**.', sec: 's7-maoi' },
      { ch: 'ch08', pages: '377', text: 'MAOIs are much neglected but can be **powerful in treatment-resistant panic disorder**.', sec: 's8-panic' }
    ]
  },
  {
    id: 'nos', name: 'Nitric oxide synthase (NOS)', short: 'NOS', family: 'Enzyme', nt: 'nitric-oxide',
    summary: 'The enzyme that makes the gas neurotransmitter nitric oxide. Paroxetine inhibits it, which may add to sexual dysfunction.',
    block: ['Possible contribution to **sexual dysfunction**, especially in men (paroxetine)'],
    facts: [{ ch: 'ch07', pages: '294–295', text: '**Paroxetine** inhibits nitric oxide synthase, which could theoretically contribute to sexual dysfunction, especially in men.', sec: 's7-ssri-agents' }]
  },
  {
    id: 'toh', name: 'Tyrosine hydroxylase (TOH)', short: 'TOH', family: 'Enzyme', nt: 'dopamine',
    summary: 'The rate-limiting enzyme of dopamine synthesis, converting tyrosine to DOPA.',
    facts: [
      { ch: 'ch04', pages: '79–80', text: 'Converts tyrosine to **DOPA**: the **rate-limiting** step in dopamine synthesis.', sec: 's4-da-synth' },
      { ch: 'ch06', pages: '253', text: 'Also the rate-limiting and most important regulatory enzyme of **norepinephrine** synthesis.', sec: 's6-ne' }
    ]
  },
  {
    id: 'ddc', name: 'DOPA decarboxylase / aromatic amino acid decarboxylase (DDC, AAADC)', short: 'DDC/AAADC', family: 'Enzyme', ntLabel: 'Dopamine, serotonin',
    summary: 'Converts DOPA to dopamine and 5-hydroxytryptophan to serotonin.',
    facts: [
      { ch: 'ch04', pages: '79–80, 114', text: 'Called **DDC** in dopamine synthesis (DOPA → dopamine) and **AAADC** in serotonin synthesis (5HTP → 5HT).', sec: 's4-5ht-synth' },
      { ch: 'ch06', pages: '253', text: 'Converts DOPA to dopamine, the precursor of norepinephrine in noradrenergic neurons.', sec: 's6-ne' }
    ]
  },
  {
    id: 'dbh', name: 'Dopamine β-hydroxylase (DBH)', short: 'DBH', family: 'Enzyme', nt: 'norepinephrine',
    summary: 'The third and final enzyme of norepinephrine synthesis, converting dopamine into norepinephrine.',
    facts: [{ ch: 'ch06', pages: '253', text: 'In noradrenergic neurons dopamine is only a precursor; DBH converts it to NE, which is then stored in vesicles.', sec: 's6-ne' }]
  },
  {
    id: 'comt', name: 'Catechol-O-methyltransferase (COMT)', short: 'COMT', family: 'Enzyme', nt: 'dopamine',
    summary: 'An extracellular enzyme that breaks down dopamine: secondary to DAT in striatum, the principal route in prefrontal cortex.',
    facts: [
      { ch: 'ch04', pages: '80–81', text: 'Secondary inactivation where DATs exist; the **principal** route of dopamine inactivation in **prefrontal cortex**, where DATs are sparse.', sec: 's4-da-synth' },
      { ch: 'ch06', pages: '253', text: 'Also destroys **norepinephrine**, largely outside the presynaptic terminal.', sec: 's6-ne' }
    ]
  },
  {
    id: 'tph', name: 'Tryptophan hydroxylase (TRY-OH)', short: 'TRY-OH', family: 'Enzyme', nt: 'serotonin',
    summary: 'The first enzyme of serotonin synthesis, converting tryptophan to 5-hydroxytryptophan.',
    facts: [{ ch: 'ch04', pages: '114', text: 'Converts **tryptophan** to **5HTP**, which AAADC converts to serotonin.', sec: 's4-5ht-synth' }]
  },
  {
    id: 'gad', name: 'Glutamic acid decarboxylase (GAD67)', short: 'GAD67', family: 'Enzyme', nt: 'gaba',
    summary: 'The enzyme that makes GABA; reduced in prefrontal GABA interneurons in schizophrenia.',
    facts: [
      { ch: 'ch04', pages: '105–108', text: 'Decreased **GAD67** activity in schizophrenia GABA interneurons, with compensatory increases in postsynaptic α2 GABA-A receptors.', sec: 's4-nmda-hypo' },
      { ch: 'ch06', pages: '256', text: 'Makes GABA from glutamate in GABA neurons.', sec: 's6-gaba' }
    ]
  },
  {
    id: 'gabat', name: 'GABA transaminase (GABA-T)', short: 'GABA-T', family: 'Enzyme', nt: 'gaba',
    summary: 'The enzyme that converts GABA into an inactive substance, terminating its action after reuptake.',
    facts: [{ ch: 'ch06', pages: '258', text: 'One of two ways GABA action ends, with reuptake by GAT.', sec: 's6-gaba' }]
  },
  {
    id: 'gs', name: 'Glutamine synthetase', short: 'Gln synthetase', family: 'Enzyme', nt: 'glutamate',
    summary: 'The glial enzyme that converts recaptured glutamate into glutamine.',
    facts: [{ ch: 'ch04', pages: '96', text: 'Converts glutamate to **glutamine** in glia, perhaps keeping it in the neurotransmitter pool rather than the protein pool.', sec: 's4-glu-synth' }]
  },
  {
    id: 'gls', name: 'Glutaminase', short: 'Glutaminase', family: 'Enzyme', nt: 'glutamate',
    summary: 'A mitochondrial enzyme in glutamate neurons that converts glutamine back into glutamate.',
    facts: [{ ch: 'ch04', pages: '97', text: 'Regenerates **glutamate** from glutamine in neuronal mitochondria before vGluT packages it.', sec: 's4-glu-synth' }]
  },
  {
    id: 'shmt', name: 'Serine hydroxymethyl-transferase (SHMT)', short: 'SHMT', family: 'Enzyme', nt: 'glycine',
    summary: 'A glial enzyme that interconverts L-serine and glycine, supplying NMDA cotransmitters.',
    facts: [{ ch: 'ch04', pages: '98–99', text: 'Makes **glycine** from L-serine (and the reverse), feeding both glycine and D-serine production.', sec: 's4-cotransmitters' }]
  },
  {
    id: 'srr', name: 'Serine racemase', short: 'Serine racemase', family: 'Enzyme', nt: 'dserine',
    summary: 'The glial enzyme that converts L-serine into D-serine.',
    facts: [{ ch: 'ch04', pages: '98–99', text: 'Interconverts L- and **D-serine**, producing the NMDA cotransmitter.', sec: 's4-cotransmitters' }]
  },
  {
    id: 'dao', name: 'D-amino acid oxidase (DAO)', short: 'DAO', family: 'Enzyme', nt: 'dserine',
    summary: 'Destroys D-serine by converting it to hydroxypyruvate; activated by DAOA, a schizophrenia susceptibility gene.',
    facts: [
      { ch: 'ch04', pages: '98–99, 152', text: 'Converts D-serine to inactive **hydroxypyruvate**; its activator **DAOA** is among the neurodevelopmental susceptibility genes.', sec: 's4-cotransmitters' },
      { ch: 'ch05', pages: '242', text: 'Inhibiting DAO to boost D-serine and NMDA function is still being pursued for schizophrenia.', sec: 's5-future' }
    ]
  },
  {
    id: 'pde', name: 'Phosphodiesterase types 9 and 10', short: 'PDE9/10', family: 'Enzyme', nt: 'dopamine',
    summary: 'Second-messenger enzymes downstream of D1 and D2 receptors; inhibitors are in development as a novel way to blunt hyperactive dopamine signaling.',
    block: ['Proposed: effects downstream similar to **D2 blockade**, perhaps more selective for hyperactive dopamine neurons'],
    facts: [{ ch: 'ch05', pages: '242', text: 'Inhibiting PDE9/10 alters the signal transduction cascade of dopamine at **D1 and D2** receptors; several drugs are in development.', sec: 's5-future' }]
  },
  {
    id: 'ache', name: 'Acetylcholinesterase', short: 'AChE', family: 'Enzyme', nt: 'acetylcholine',
    summary: 'The enzyme that destroys acetylcholine. Its inhibitors increase acetylcholine at all its receptors and improve cognition in Alzheimer disease.',
    block: ['Raises acetylcholine at all acetylcholine receptors (indirect M1, possibly M2–M5, agonism)', 'Improves **cognition in Alzheimer disease** (Chapter 12)'],
    facts: [{ ch: 'ch02', pages: '40–41, 48', text: 'Acetylcholinesterase inhibition is an **indirect agonist** mechanism (Table 2-5) and one of the three enzyme targets of psychotropic drugs.', sec: 's2-enzymes' }]
  },
  {
    id: 'gsk3', name: 'Glycogen synthase kinase-3 (GSK-3)', short: 'GSK-3', family: 'Enzyme', nt: 'neurotrophins', ntLabel: 'Neurotrophin signaling',
    summary: 'A kinase downstream of neurotrophins, insulin, IGF-1 and Wnt signals that promotes cell death. Lithium may inhibit it.',
    block: ['Possible **neuroprotective** actions and **long-term plasticity**', 'May contribute to **antimanic and mood-stabilizing** actions (lithium; possibly valproate and ECT)'],
    facts: [
      { ch: 'ch01', pages: '17', text: 'One of the kinases at the end of the **neurotrophin signal transduction cascade** (Ras → Raf → MEK → ERK/RSK/MAPK/GSK-3).', sec: 's1-genes' },
      { ch: 'ch02', pages: '48', text: 'Some neurotrophins, growth factors and other pathways act through GSK-3 to promote **cell death (proapoptotic)**. **Lithium** may inhibit it; **valproate** and **ECT** possibly too. Novel GSK-3 inhibitors are in development.', sec: 's2-enzymes' },
      { ch: 'ch05', pages: '241–242', text: 'Postsynaptic D2 overstimulation signals through **β-arrestin 2** to GSK-3; too much GSK-3 may be linked to mania and psychosis, and TAAR1 agonism may reduce it.', sec: 's5-future' },
      { ch: 'ch07', pages: '345–349', text: 'Lithium may inhibit GSK-3 and protein kinase C; **valproate** may also inhibit GSK-3.', sec: 's7-lithium' }
    ]
  },
  {
    id: 'impase', name: 'Inositol monophosphatase', short: 'IMPase', family: 'Enzyme', ntLabel: 'Phosphatidylinositol second-messenger system',
    summary: 'An enzyme of the phosphatidylinositol second-messenger system; one candidate target of lithium.',
    block: ['Possible **antimanic** action of lithium'],
    facts: [{ ch: 'ch07', pages: '345–346', text: 'Lithium **inhibits inositol monophosphatase**, one of several candidate signal-transduction mechanisms for its antimanic action (Figure 7-74).', sec: 's7-lithium' }]
  },
  {
    id: 'pkc', name: 'Protein kinase C (PKC)', short: 'PKC', family: 'Enzyme', ntLabel: 'Signal transduction',
    summary: 'A kinase in downstream signal transduction cascades; lithium and valproate may inhibit it.',
    block: ['Possible **antimanic** action of lithium and valproate'],
    facts: [{ ch: 'ch07', pages: '346, 349', text: 'Lithium may inhibit **GSK-3 and protein kinase C**; valproate may inhibit **PKC** and **MARCKS** while activating ERK, BCL2 and GAP43 (Figures 7-74, 7-78).', sec: 's7-valproate-cbz' }]
  },
  {
    id: 'cyp1a2', name: 'Cytochrome P450 1A2', short: 'CYP1A2', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism. In the name, “1” is the family, “A” the subtype and “2” the gene product.', sec: 's2-cyp' }]
  },
  {
    id: 'cyp2b6', name: 'Cytochrome P450 2B6', short: 'CYP2B6', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }]
  },
  {
    id: 'cyp2d6', name: 'Cytochrome P450 2D6', short: 'CYP2D6', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [
      { ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' },
      { ch: 'ch05', pages: '175–176', text: 'Inactivates tetrabenazine’s dihydro metabolites; **deuteration** makes deutetrabenazine a poorer 2D6 substrate, and tetrabenazine dosing above standard levels needs 2D6 genotyping.', sec: 's5-vmat2' },
      { ch: 'ch07', pages: '302, 354', text: 'Converts **venlafaxine** to desvenlafaxine; rapidly metabolizes **dextromethorphan**, which is therefore combined with 2D6 inhibitors (**bupropion**, **quinidine**).', sec: 's7-dxm' }
    ]
  },
  {
    id: 'cyp2c9', name: 'Cytochrome P450 2C9', short: 'CYP2C9', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }]
  },
  {
    id: 'cyp2c19', name: 'Cytochrome P450 2C19', short: 'CYP2C19', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }]
  },
  {
    id: 'cyp3a4', name: 'Cytochrome P450 3A4', short: 'CYP3A4', family: 'Enzyme',
    summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.',
    facts: [
      { ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' },
      { ch: 'ch07', pages: '350', text: '**Carbamazepine** notably induces CYP3A4; oxcarbazepine has fewer 3A4 interactions.', sec: 's7-valproate-cbz' }
    ]
  },
  /* ---------------- intracellular receptors ---------------- */
  {
    id: 'gr', name: 'Glucocorticoid receptor', short: 'GR', family: 'Intracellular receptor', ntLabel: 'Glucocorticoids (cortisol)',
    summary: 'The receptor for adrenal glucocorticoids that mediates HPA feedback; antagonists are in testing for depression.',
    block: ['Antagonists in testing to reverse **HPA-axis** abnormalities in depression'],
    facts: [{ ch: 'ch06', pages: '270–271', text: 'Depression shows elevated glucocorticoids and **insensitivity** to feedback inhibition; high glucocorticoids may be toxic to hippocampal neurons.', sec: 's6-hpa' }]
  },
  {
    id: 'thr', name: 'Thyroid hormone receptor', short: 'Thyroid receptor', family: 'Intracellular receptor', ntLabel: 'Thyroid hormones',
    summary: 'A nuclear receptor: thyroid hormones bind it to form a ligand-activated transcription factor. Used to augment drugs for depression.',
    stim: ['Possible **augmentation** of antidepressant action or faster onset (now out of favor)'],
    facts: [{ ch: 'ch07', pages: '333', text: 'Thyroid hormones regulate neuronal organization, arborization and synapse formation, which may boost monoamine neurotransmission and explain augmentation.', sec: 's7-other-augment' }]
  },
  /* ---------------- neurotrophin receptors ---------------- */
  {
    id: 'trkb', name: 'BDNF and its receptor TrkB', short: 'BDNF/TrkB', family: 'Neurotrophin receptor', nt: 'neurotrophins',
    summary: 'Brain-derived neurotrophic factor supports neuronal growth, survival and synapses; its loss is central to the neuroprogression hypothesis of depression.',
    stim: ['Increased BDNF signaling (downstream of effective antidepressants via CREB): synapse maintenance and possibly **restoration of lost synapses**'],
    facts: [
      { ch: 'ch06', pages: '266–270', text: 'Monoamine signaling releases BDNF; stress, inflammation and adversity may silence BDNF genes, leading to loss of spines, synapses and eventually neurons.', sec: 's6-neuroplasticity' },
      { ch: 'ch07', pages: '329–331', text: 'Ketamine may rapidly raise **BDNF**, acting at TRKB, to restore dendritic spines.', sec: 's7-ketamine' }
    ]
  },
  {
    id: 'vegf', name: 'VEGF and its receptor FLK1', short: 'VEGF/FLK1', family: 'Neurotrophin receptor', nt: 'neurotrophins',
    summary: 'Vascular endothelial growth factor, a growth factor reduced by chronic stress and depression and raised by ketamine; it acts at FLK1 (fetal liver kinase 1).',
    stim: ['Hypothetically **synaptogenesis** and reversal of depression-related atrophy'],
    facts: [{ ch: 'ch07', pages: '329–331', text: 'Loss of BDNF and VEGF is linked to neuronal atrophy in PFC and hippocampus; stress and depression also reduce their receptors **TRKB and FLK1**. Ketamine increases both growth factors (Figure 7-62).', sec: 's7-ketamine' }]
  },
  /* ---------------- other targets ---------------- */
  {
    id: 'sigma', name: 'Sigma (σ) receptors', short: 'σ', family: 'Other', ntLabel: 'None (non-opioid binding sites)',
    summary: 'Binding sites shown on the strips of haloperidol (σ) and roluperidone (σ2 antagonism).',
    facts: [
      { ch: 'ch05', pages: '204, 241', text: 'Haloperidol binds a site labelled **σ** in Figure 5-29 (the caption calls it “omega”); **roluperidone** combines 5HT2A antagonism with **σ2** antagonism.', sec: 's5-first-agents' },
      { ch: 'ch07', pages: '294–295', text: '**Sertraline** and, more potently, **fluvoxamine** (possibly an agonist) bind σ1; the function of σ1 sites is the “sigma enigma.” Ketamine, dextromethorphan and dextromethadone also bind σ.', sec: 's7-ssri-agents' }
    ]
  }
];
