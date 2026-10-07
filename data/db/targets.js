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
      { ch: 'ch02', pages: '33', text: 'Stahl’s **wagon** analogy: sodium inflates the tires so serotonin can bind; an SSRI such as fluoxetine sits in the **allosteric “front seat”**, lowering affinity for serotonin. SSRIs do not bind the substrate site and are **not transported**.', sec: 's2-monoamine' }
    ]
  },
  {
    id: 'net', name: 'Norepinephrine transporter (NET)', short: 'NET', family: 'Transporter', nt: 'norepinephrine',
    summary: 'The presynaptic reuptake pump for norepinephrine (SLC6 family), with high affinity for dopamine too. Target of ADHD stimulants, cocaine and many drugs for depression and pain.',
    coupling: 'Sodium-dependent cotransporter powered by the sodium–potassium ATPase',
    block: ['Enhances synaptic norepinephrine action, indirectly stimulating all norepinephrine receptors', 'Antidepressant; neuropathic pain; ADHD (Table 2-5)'],
    facts: [
      { ch: 'ch02', pages: '31', text: 'Carries **dopamine, epinephrine and amphetamine** as well as norepinephrine; NET has **high affinity for dopamine**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '34', text: '“Stimulants” for ADHD (**methylphenidate, amphetamine**) and **cocaine** act on **DAT and NET**.', sec: 's2-monoamine' }
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
      { ch: 'ch02', pages: '34', text: 'Methylphenidate, amphetamine and cocaine all act on **DAT and NET**.', sec: 's2-monoamine' }
    ]
  },
  {
    id: 'gat', name: 'GABA transporters (GAT1–4)', short: 'GAT1–4', family: 'Transporter', nt: 'gaba',
    summary: 'SLC6 transporters for GABA. GAT1 is a key presynaptic GABA transporter and the only one targeted by a drug, tiagabine.',
    location: 'GAT1 and GAT2 neuronal and glial; GAT3 mostly glial; GAT4 (betaine transporter, BGT1) neuronal and glial',
    block: ['GAT1 blockade raises synaptic GABA: anticonvulsant', 'May help anxiety, sleep disorders and pain'],
    facts: [
      { ch: 'ch02', pages: '31, 34', text: 'GAT2 and GAT3 also carry **beta-alanine**; GAT4 (also called the **betaine transporter, BGT1**) carries **betaine**.', sec: 's2-other' },
      { ch: 'ch02', pages: '34', text: '**GAT1** is selectively blocked by the anticonvulsant **tiagabine**, increasing synaptic GABA; no other GAT inhibitor is in clinical use.', sec: 's2-other' }
    ]
  },
  {
    id: 'glyt', name: 'Glycine transporters (GlyT1, GlyT2)', short: 'GlyT1–2', family: 'Transporter', nt: 'glycine',
    summary: 'SLC6 transporters for glycine. No clinically used drug blocks them; GlyT1 inhibitors were tested in schizophrenia.',
    location: 'GlyT1 mostly glial; GlyT2 neuronal',
    facts: [{ ch: 'ch02', pages: '34', text: 'No drugs in clinical practice block glycine transporters, though new agents were **in clinical trials for schizophrenia** at publication.', sec: 's2-other' }],
    updates: [{ year: '2025', title: 'GlyT1 inhibitor fails phase III', text: 'The GlyT1 inhibitor **iclepertin** did not meet its primary or key secondary endpoints for cognitive impairment associated with schizophrenia in the phase III CONNEX program (January 2025).', source: 'Boehringer Ingelheim, January 2025' }]
  },
  {
    id: 'eaat', name: 'Excitatory amino acid transporters (EAAT1–5)', short: 'EAAT1–5', family: 'Transporter', nt: 'glutamate',
    summary: 'The high-affinity glutamate transporters (SLC1 family). Glial uptake recaptures glutamate, which is recycled through glutamine. No drugs target them.',
    coupling: 'Sodium cotransport without chloride; almost always potassium countertransport; may work as trimers',
    facts: [
      { ch: 'ch02', pages: '31, 34', text: 'Carry **L-glutamate and L-aspartate**. Uptake **into glia** converts glutamate to **glutamine**, which enters the presynaptic neuron to be turned back into glutamate.', sec: 's2-other' },
      { ch: 'ch02', pages: '35', text: 'Differ from SLC6 transporters: **no chloride** cotransport, **almost always potassium** countertransport, and perhaps **trimers** rather than dimers. Because reducing glutamate is often the goal, their future as targets is unclear.', sec: 's2-other' }
    ]
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
    block: ['VMAT2 inhibition (tetrabenazine and derivatives) treats movement disorders such as tardive dyskinesia (Chapter 5)'],
    facts: [
      { ch: 'ch02', pages: '31', text: 'All three monoamine neurons share **the same vesicular transporter, VMAT2**, which also packages **histamine**.', sec: 's2-monoamine' },
      { ch: 'ch02', pages: '35', text: 'Targeted especially in **dopamine neurons**: **amphetamine** as a transported substrate; **tetrabenazine, deutetrabenazine and valbenazine** as inhibitors.', sec: 's2-vesicular' }
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
    facts: [{ ch: 'ch02', pages: '35', text: 'The GABA vesicular transporter (**SLC32**); not known to be targeted by any drug used in humans.', sec: 's2-vesicular' }]
  },
  {
    id: 'vglut', name: 'Vesicular glutamate transporters (vGluT1–3)', short: 'vGluT1–3', family: 'Transporter', nt: 'glutamate',
    summary: 'The SLC17 transporters that package glutamate into vesicles. No drug used in humans targets them.',
    facts: [{ ch: 'ch02', pages: '35', text: 'Members of the **SLC17** family; not known to be targeted by any drug used in humans.', sec: 's2-vesicular' }]
  },
  {
    id: 'sv2a', name: 'Synaptic vesicle protein 2A (SV2A)', short: 'SV2A', family: 'Transporter',
    summary: 'A 12-transmembrane synaptic vesicle transporter of uncertain mechanism and substrate that binds levetiracetam.',
    location: 'Synaptic vesicle membrane',
    facts: [{ ch: 'ch02', pages: '35', text: 'Binds the anticonvulsant **levetiracetam**, perhaps interfering with neurotransmitter release and thereby reducing seizures.', sec: 's2-vesicular' }]
  },

  /* ---------------- G-protein-linked receptors (7 transmembrane regions) ---------------- */
  {
    id: 'd1', name: 'Dopamine D1 receptor', short: 'D1', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'A dopamine receptor shown in the book’s example of volume neurotransmission in the prefrontal cortex. Stimulated indirectly when stimulants raise dopamine.',
    stim: ['Indirect agonism at D1–D5 via dopamine reuptake inhibition or release (methylphenidate, amphetamine) improves ADHD, depression and wakefulness'],
    facts: [
      { ch: 'ch01', pages: '8', text: 'In Figure 1-7, prefrontal dopamine diffuses from its synapse to reach **D1 receptors** outside the synapse on the same neuron and on a neighboring neuron.', sec: 's1-volume' },
      { ch: 'ch02', pages: '40', text: 'Stimulated **indirectly** (with D2–D5) when methylphenidate or amphetamine block reuptake or release dopamine (Table 2-5).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: 'd2', name: 'Dopamine D2 receptor', short: 'D2', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'The key target of so-called antipsychotics, which act as antagonists or partial agonists here.',
    block: ['Antagonism or partial agonism: **antipsychotic** and **antimanic** actions'],
    facts: [{ ch: 'ch02', pages: '39', text: 'Directly targeted as an **antagonist or partial agonist** for antipsychotic and antimanic actions (Table 2-4); detailed in Chapter 5.', sec: 's2-receptor-tables' }]
  },
  {
    id: '5ht1a', name: 'Serotonin 5HT1A receptor', short: '5HT1A', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'Found as somatodendritic autoreceptors and postsynaptically. Partial agonism is anxiolytic and boosts SSRIs; SSRIs stimulate it indirectly.',
    stim: ['Partial agonism: **less drug-induced parkinsonism**, **anxiolytic**, **boosts** SSRI/SNRI antidepressant action', 'Indirect agonism at somatodendritic autoreceptors via SSRIs/SNRIs: antidepressant, anxiolytic'],
    facts: [
      { ch: 'ch02', pages: '39', text: '**Partial agonist** actions: reduced drug-induced parkinsonism, anxiolytic, booster of SSRI/SNRI antidepressant action (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '40', text: 'Stimulated **indirectly** at presynaptic somatodendritic autoreceptors when SSRIs or SNRIs block serotonin reuptake (Table 2-5).', sec: 's2-receptor-tables' }
    ]
  },
  {
    id: '5ht1b1d', name: 'Serotonin 5HT1B/1D receptors', short: '5HT1B/1D', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'Serotonin receptors where antagonism or partial agonism may be pro-cognitive and antidepressant.',
    block: ['Antagonism or partial agonism: possible **pro-cognitive** and **antidepressant** actions'],
    facts: [{ ch: 'ch02', pages: '39', text: 'Antagonist or partial agonist actions: possible pro-cognitive and antidepressant effects (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: '5ht2a', name: 'Serotonin 5HT2A receptor', short: '5HT2A', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A pivotal serotonin receptor. Antagonism (or inverse agonism) is antipsychotic and reduces drug-induced parkinsonism; agonism is psychotomimetic.',
    block: ['Antipsychotic actions in **Parkinson’s disease psychosis** and **dementia-related psychosis**', '**Reduced drug-induced parkinsonism**', 'Possible reduction of negative symptoms in schizophrenia', 'Possible mood-stabilizing and antidepressant actions in bipolar disorder', 'Improves **insomnia and anxiety**'],
    stim: ['**Psychotomimetic** actions', 'Experimental treatment of refractory depression and other disorders, especially accompanying psychotherapy', 'Indirect 5HT2A/2C agonism via serotonin release by MDMA: “empathogen”'],
    facts: [
      { ch: 'ch02', pages: '39', text: 'Antagonist or **inverse agonist** actions listed in Table 2-4; agonist actions are psychotomimetic and experimental for refractory depression.', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '45', text: 'Drugs long considered **5HT2A antagonists** may turn out to be **inverse agonists** in some brain areas.', sec: 's2-spectrum' }
    ]
  },
  {
    id: '5ht2c', name: 'Serotonin 5HT2C receptor', short: '5HT2C', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A serotonin receptor where antagonism has antidepressant actions.',
    block: ['Antagonism: **antidepressant**'],
    stim: ['Indirect agonism via serotonin release by MDMA (with 5HT2A)'],
    facts: [{ ch: 'ch02', pages: '39–40', text: '**Antagonist** actions are antidepressant (Table 2-4); stimulated indirectly by MDMA-induced serotonin release (Table 2-5).', sec: 's2-receptor-tables' }]
  },
  {
    id: '5ht6', name: 'Serotonin 5HT6 receptor', short: '5HT6', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A serotonin receptor whose drug actions and therapeutic role are listed as unknown in Table 2-4.',
    facts: [{ ch: 'ch02', pages: '39', text: 'Pharmacological and therapeutic actions are marked **“?”** in Table 2-4; possibly stimulated postsynaptically by SSRIs (Table 2-5).', sec: 's2-receptor-tables' }]
  },
  {
    id: '5ht7', name: 'Serotonin 5HT7 receptor', short: '5HT7', family: 'G-protein-linked receptor', nt: 'serotonin',
    summary: 'A serotonin receptor where antagonism may be pro-cognitive and antidepressant.',
    block: ['Antagonism: possible **pro-cognitive** and **antidepressant** actions'],
    facts: [{ ch: 'ch02', pages: '39', text: 'Antagonist actions: possible pro-cognitive and antidepressant effects (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'alpha2', name: 'α2-adrenergic receptor', short: 'α2', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'A norepinephrine receptor targeted in both directions: antagonism is antidepressant, agonism helps ADHD.',
    block: ['Antagonism: **antidepressant** actions'],
    stim: ['Agonism: improved **cognition and behavioral disturbance in ADHD**'],
    facts: [{ ch: 'ch02', pages: '39', text: 'Antagonists have antidepressant actions; agonists improve cognition and behavior in ADHD (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'alpha1', name: 'α1-adrenergic receptor', short: 'α1', family: 'G-protein-linked receptor', nt: 'norepinephrine',
    summary: 'A norepinephrine receptor whose blockade helps nightmares and agitation but causes orthostatic hypotension.',
    block: ['Improved sleep (**nightmares**)', 'Improved **agitation in Alzheimer disease**', 'Side effects: **orthostatic hypotension** and possibly **sedation**'],
    facts: [{ ch: 'ch02', pages: '39', text: '**Antagonist** actions: improved sleep (nightmares), improved agitation in Alzheimer disease; side effects of orthostatic hypotension and possibly sedation (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'gabab', name: 'GABA-B receptor', short: 'GABA-B', family: 'G-protein-linked receptor', nt: 'gaba',
    summary: 'The G-protein-linked GABA receptor; agonism treats cataplexy and sleepiness in narcolepsy, among other possible uses.',
    stim: ['**Cataplexy** and **sleepiness in narcolepsy**', 'Possibly enhanced slow-wave sleep', 'Pain reduction in chronic pain and fibromyalgia', 'Possible use in alcohol use disorder and withdrawal'],
    facts: [{ ch: 'ch02', pages: '39', text: '**Agonist** actions listed in Table 2-4 (cataplexy, sleepiness in narcolepsy, slow-wave sleep, pain, alcohol).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'mt1mt2', name: 'Melatonin MT1 and MT2 receptors', short: 'MT1/MT2', family: 'G-protein-linked receptor', nt: 'melatonin',
    summary: 'Melatonin receptors; agonists improve insomnia and circadian rhythms.',
    stim: ['Improvement of **insomnia** and **circadian rhythms**'],
    facts: [{ ch: 'ch02', pages: '39', text: '**Agonist** actions at both MT1 and MT2 improve insomnia and circadian rhythms (Table 2-4).', sec: 's2-receptor-tables' }]
  },
  {
    id: 'h1', name: 'Histamine H1 receptor', short: 'H1', family: 'G-protein-linked receptor', nt: 'histamine',
    summary: 'Blocking H1 is therapeutic for anxiety and insomnia but causes sedation and weight gain. Antihistamines may be inverse agonists in some areas.',
    block: ['Therapeutic for **anxiety and insomnia**', 'Side effects: **sedation** and **weight gain**'],
    facts: [
      { ch: 'ch02', pages: '40', text: '**Antagonist** actions: therapeutic for anxiety and insomnia; side effects of sedation and weight gain (Table 2-4).', sec: 's2-receptor-tables' },
      { ch: 'ch02', pages: '45', text: '**H1 antagonists/antihistamines** may turn out to be **inverse agonists** in some brain areas.', sec: 's2-spectrum' }
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
    block: ['Side effects: **sedation** and **memory disturbance**'],
    facts: [{ ch: 'ch02', pages: '40', text: 'Agonist: pro-cognitive and antipsychotic. Antagonist: sedation and memory disturbance (Table 2-4). Stimulated indirectly by acetylcholinesterase inhibitors (Table 2-5).', sec: 's2-receptor-tables' }],
    updates: [{ year: '2024', title: 'First M1/M4 agonist approved', text: '**Xanomeline–trospium** (Cobenfy), with the M1/M4-preferring agonist xanomeline, was approved for schizophrenia in September 2024.', source: 'FDA, September 2024' }]
  },
  {
    id: 'm4', name: 'Muscarinic M4 receptor', short: 'M4', family: 'G-protein-linked receptor', nt: 'acetylcholine',
    summary: 'Agonism at M4 is listed as antipsychotic.',
    stim: ['**Antipsychotic**'],
    facts: [{ ch: 'ch02', pages: '40', text: '**Agonist** actions are antipsychotic (Table 2-4).', sec: 's2-receptor-tables' }],
    updates: [{ year: '2024', title: 'First M1/M4 agonist approved', text: '**Xanomeline–trospium** (Cobenfy) was approved for schizophrenia in September 2024.', source: 'FDA, September 2024' }]
  },
  {
    id: 'm2m3', name: 'Muscarinic M2 and M3 receptors', short: 'M2/M3', family: 'G-protein-linked receptor', nt: 'acetylcholine',
    summary: 'Blocking these produces classic peripheral anticholinergic side effects and may contribute to metabolic dysregulation.',
    block: ['**Dry mouth, blurred vision, constipation, urinary retention**', 'May contribute to **metabolic dysregulation** (dyslipidemia and diabetes)'],
    facts: [{ ch: 'ch02', pages: '40', text: '**Antagonist** actions cause dry mouth, blurred vision, constipation and urinary retention, and may contribute to metabolic dysregulation (Table 2-4). M5 actions are marked unknown.', sec: 's2-receptor-tables' }]
  },
  {
    id: 'ox', name: 'Orexin receptors (OX1, OX2)', short: 'OX1/OX2', family: 'G-protein-linked receptor', nt: 'orexin',
    summary: 'Receptors for orexin A and B; antagonists are hypnotics for insomnia.',
    block: ['**Hypnotic** for insomnia'],
    facts: [{ ch: 'ch02', pages: '40', text: '**Antagonist** actions at OX1 and OX2 are hypnotic for insomnia (Table 2-4); detailed in Chapter 10.', sec: 's2-receptor-tables' }]
  },
  {
    id: 'cb1', name: 'Cannabinoid 1 receptor (CB1)', short: 'CB1', family: 'G-protein-linked receptor', nt: 'endocannabinoids',
    summary: 'The presynaptic receptor reached by retrograde endocannabinoid signaling.',
    location: '**Presynaptic** terminals',
    facts: [{ ch: 'ch01', pages: '6–7', text: 'Endocannabinoids made in the postsynaptic neuron diffuse back to **presynaptic cannabinoid receptors such as CB1**: the classic example of **retrograde neurotransmission**.', sec: 's1-classic' }]
  },

  /* ---------------- voltage-sensitive ion channels ---------------- */
  {
    id: 'vssc', name: 'Voltage-sensitive sodium channel (VSSC)', short: 'VSSC', family: 'Voltage-sensitive ion channel',
    summary: 'Opens when membrane charge changes, letting sodium in so the action potential travels along the axon.',
    facts: [{ ch: 'ch01', pages: '9', text: 'In **excitation–secretion coupling**, electrical impulses open VSSCs; **sodium flows in** and the action potential moves along the axon to the presynaptic terminal.', sec: 's1-coupling' }]
  },
  {
    id: 'vscc', name: 'Voltage-sensitive calcium channel (VSCC)', short: 'VSCC', family: 'Voltage-sensitive ion channel',
    summary: 'Opens at the presynaptic terminal; calcium entry makes anchored vesicles release their neurotransmitter.',
    location: '**Presynaptic nerve terminal**',
    facts: [{ ch: 'ch01', pages: '9', text: 'When the action potential reaches the terminal it opens VSCCs; **calcium influx** causes synaptic vesicles anchored to the inner membrane to **spill their contents** into the synapse.', sec: 's1-coupling' }]
  },

  /* ---------------- enzymes ---------------- */
  {
    id: 'mao', name: 'Monoamine oxidase (MAO)', short: 'MAO', family: 'Enzyme', ntLabel: 'Monoamines',
    summary: 'An enzyme that destroys monoamines. MAO inhibitors raise monoamine levels, acting as indirect agonists.',
    block: ['Indirect full agonist action by blocking enzymatic destruction of monoamines (details in Chapter 7)'],
    facts: [{ ch: 'ch02', pages: '41, 48', text: 'One of only **three enzymes** targeted by psychotropic drugs; inhibiting it produces **indirect full agonist** action.', sec: 's2-enzymes' }]
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
      { ch: 'ch02', pages: '48', text: 'Some neurotrophins, growth factors and other pathways act through GSK-3 to promote **cell death (proapoptotic)**. **Lithium** may inhibit it; **valproate** and **ECT** possibly too. Novel GSK-3 inhibitors are in development.', sec: 's2-enzymes' }
    ]
  },
  { id: 'cyp1a2', name: 'Cytochrome P450 1A2', short: 'CYP1A2', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism. In the name, “1” is the family, “A” the subtype and “2” the gene product.', sec: 's2-cyp' }] },
  { id: 'cyp2b6', name: 'Cytochrome P450 2B6', short: 'CYP2B6', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }] },
  { id: 'cyp2d6', name: 'Cytochrome P450 2D6', short: 'CYP2D6', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }] },
  { id: 'cyp2c9', name: 'Cytochrome P450 2C9', short: 'CYP2C9', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }] },
  { id: 'cyp2c19', name: 'Cytochrome P450 2C19', short: 'CYP2C19', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }] },
  { id: 'cyp3a4', name: 'Cytochrome P450 3A4', short: 'CYP3A4', family: 'Enzyme', summary: 'One of the six most important CYP450 drug-metabolizing enzymes for psychotropic drugs.', facts: [{ ch: 'ch02', pages: '49', text: 'One of six key CYP450 enzymes in psychotropic metabolism (Figure 2-16).', sec: 's2-cyp' }] }
];
