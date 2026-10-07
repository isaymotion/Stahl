/*
 * Receptors and other drug targets. `nt` links to a neurotransmitter id. `stim` and `block` power the
 * side-effect mapper: what stimulating or blocking the target does clinically, as the book describes.
 * Drugs acting at a target are computed from drugs.js. Families must match TARGET_FAMS in app.js.
 */
SP.targets = [
  {
    id: 'sert', name: 'Serotonin transporter (SERT)', short: 'SERT', family: 'Transporter', nt: 'serotonin',
    summary: 'The reuptake pump for serotonin. Antidepressants such as amitriptyline and fluoxetine act here; they were in use before the site was clarified at the molecular level.',
    facts: [{ ch: 'ch01', pages: '6', text: 'Elavil (amitriptyline) and Prozac (fluoxetine) entered practice **before molecular clarification of the serotonin transporter site**.', sec: 's1-nts' }]
  },
  {
    id: 'dat', name: 'Dopamine transporter (DAT)', short: 'DAT', family: 'Transporter', nt: 'dopamine',
    summary: 'The dopamine reuptake pump that terminates dopamine’s synaptic action. Scarce in the prefrontal cortex, abundant in the striatum.',
    location: 'Abundant in the **striatum**; **very few** in the **prefrontal cortex**',
    facts: [{ ch: 'ch01', pages: '8', text: 'Because the **prefrontal cortex has very few DATs**, dopamine released there spills over to neighboring receptors: the book’s main example of **volume neurotransmission**. The **striatum** has DATs in abundance.', sec: 's1-volume' }]
  },
  {
    id: 'd1', name: 'Dopamine D1 receptor', short: 'D1', family: 'G-protein-linked receptor', nt: 'dopamine',
    summary: 'A dopamine receptor shown in the book’s example of volume neurotransmission in the prefrontal cortex.',
    facts: [{ ch: 'ch01', pages: '8', text: 'In Figure 1-7, prefrontal dopamine diffuses from its synapse to reach **D1 receptors** outside the synapse on the same neuron and on a neighboring neuron.', sec: 's1-volume' }]
  },
  {
    id: 'cb1', name: 'Cannabinoid 1 receptor (CB1)', short: 'CB1', family: 'G-protein-linked receptor', nt: 'endocannabinoids',
    summary: 'The presynaptic receptor reached by retrograde endocannabinoid signaling.',
    location: '**Presynaptic** terminals',
    facts: [{ ch: 'ch01', pages: '6–7', text: 'Endocannabinoids made in the postsynaptic neuron diffuse back to **presynaptic cannabinoid receptors such as CB1**: the classic example of **retrograde neurotransmission**.', sec: 's1-classic' }]
  },
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
  }
];
