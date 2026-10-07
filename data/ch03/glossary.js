/* Chapter 3 glossary terms: [term, definition in the app's own words, source chapter]. */
SP.glossary = (SP.glossary || []).concat([
  ["α2δ subunit", "A protein flanking the pore of voltage-sensitive calcium channels, with a transmembrane δ part and an extracellular α2 part; the target of pregabalin and gabapentin.", "Ch 3"],
  ["action potential", "The electrical impulse of a neuron: sodium enters through VSSCs, then calcium through VSCCs, followed by recovery of the resting ionic balance.", "Ch 3"],
  ["AMPA receptor", "A tetrameric ionotropic glutamate receptor built from GluR1–4 subunits.", "Ch 3"],
  ["desensitization", "An adaptive state in which a ligand-gated channel stops responding to an agonist that is still bound; reversed fairly quickly when the agonist is removed.", "Ch 3"],
  ["GABA-A receptor", "A pentameric ligand-gated chloride channel; benzodiazepines, Z drugs and neurosteroids act as positive allosteric modulators at distinct sites on it.", "Ch 3"],
  ["inactivation", "A state in which an ion channel is stabilized closed and unresponsive; after prolonged agonist exposure it takes hours to reverse.", "Ch 3"],
  ["ionic filter", "The extracellular loop between segments 5 and 6 of a voltage-gated channel subunit, which lets only the right ion through.", "Ch 3"],
  ["ionotropic receptor", "Another name for a ligand-gated ion channel: a receptor that is itself an ion channel.", "Ch 3"],
  ["kainate receptor", "A tetrameric ionotropic glutamate receptor built from GluR5–7 and KA1–2 subunits.", "Ch 3"],
  ["ligand", "Any neurotransmitter, drug or hormone that binds to a receptor (literally, “tying”).", "Ch 3"],
  ["ligand-gated ion channel", "An ion channel opened when a neurotransmitter binds its gatekeeper receptor; also called an ionotropic or ion-channel-linked receptor.", "Ch 3"],
  ["N and P/Q channels", "Presynaptic voltage-sensitive calcium channels (Cav2.2 and Cav2.1) snared to synaptic vesicles that trigger neurotransmitter release.", "Ch 3"],
  ["negative allosteric modulator", "NAM: a ligand at an allosteric site that reduces the neurotransmitter’s action but does nothing alone, e.g., PCP and ketamine at NMDA receptors.", "Ch 3"],
  ["neuroactive steroid", "A steroid such as allopregnanolone that acts at benzodiazepine-insensitive GABA-A sites mediating tonic inhibition.", "Ch 3"],
  ["nicotinic receptor", "A pentameric ligand-gated acetylcholine receptor (e.g., α7, α4β2); nicotine desensitizes and inactivates it.", "Ch 3"],
  ["NMDA receptor", "A tetrameric ionotropic glutamate receptor whose calcium channel opens with glutamate and glycine; target of memantine, ketamine and related drugs.", "Ch 3"],
  ["open-channel blocker", "A drug, such as ketamine or PCP, that can bind inside an ion channel only when the channel is open.", "Ch 3"],
  ["pentameric", "Made of five subunits; describes GABA-A, nicotinic, 5HT3 and glycine receptors.", "Ch 3"],
  ["phasic inhibition", "Brief, synaptic GABA-A inhibition mediated by benzodiazepine-sensitive receptors.", "Ch 3"],
  ["pore inactivator", "Amino acids on the loop between subunits III and IV of a sodium channel that plug the pore from inside, like a bathtub plug.", "Ch 3"],
  ["positive allosteric modulator", "PAM: a ligand at an allosteric site that boosts the neurotransmitter’s action but does nothing alone, e.g., benzodiazepines at GABA-A.", "Ch 3"],
  ["snare proteins", "Proteins (SNAP 25, synaptobrevin, syntaxin, synaptotagmin) that tether synaptic vesicles to presynaptic calcium channels and drive release.", "Ch 3"],
  ["tetrameric", "Made of four subunits; describes the ionotropic glutamate receptors AMPA, kainate and NMDA.", "Ch 3"],
  ["tonic inhibition", "Sustained GABA-A inhibition mediated by benzodiazepine-insensitive receptors that neurosteroids act on.", "Ch 3"],
  ["voltage-sensitive ion channel", "An ion channel opened or closed by the voltage across the membrane, such as VSSCs and VSCCs; also called voltage-gated.", "Ch 3"],
  ["voltmeter", "Stahl’s term for transmembrane segment 4 of a voltage-gated channel subunit, which senses membrane charge.", "Ch 3"],
  ["Z drugs", "Nonbenzodiazepine hypnotics (zolpidem, zaleplon, zopiclone, eszopiclone) acting at GABA-A PAM sites to improve insomnia.", "Ch 3"]
]);
SP.glossaryAliases = Object.assign(SP.glossaryAliases || {}, {
  "pams": "positive allosteric modulator", "pam": "positive allosteric modulator", "nams": "negative allosteric modulator", "nam": "negative allosteric modulator",
  "ionotropic receptors": "ionotropic receptor", "ligand-gated ion channels": "ligand-gated ion channel", "voltage-gated ion channel": "voltage-sensitive ion channel",
  "voltage-sensitive ion channels": "voltage-sensitive ion channel", "voltage-gated ion channels": "voltage-sensitive ion channel", "gabaa receptors": "gaba-a receptor", "gaba-a receptors": "gaba-a receptor",
  "nicotinic receptors": "nicotinic receptor", "nmda receptors": "nmda receptor", "ampa receptors": "ampa receptor", "neuroactive steroids": "neuroactive steroid", "neurosteroids": "neuroactive steroid",
  "α2δ": "α2δ subunit", "z drug": "z drugs"
});
