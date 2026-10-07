/* Chapter 3 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 3 (pp. 51–76).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch03", "guide", {
  intro: "Many important psychotropic drugs act on **ion channels**. There are two major classes: **ligand-gated ion channels**, opened by neurotransmitters, and **voltage-sensitive ion channels**, opened by the charge across the membrane. About a fifth of psychotropic drugs, including the **benzodiazepines** and **Z-drug hypnotics**, act at ligand-gated channels, which is why many anxiety and sleep drugs work almost **immediately**. Many **anticonvulsants**, some also used as mood stabilizers and pain treatments, act at voltage-sensitive sodium and calcium channels.",
  objectives: [
    "Explain why **ligand-gated ion channel**, **ionotropic receptor** and **ion-channel-linked receptor** are three names for the same complex, and contrast it with **voltage-sensitive** channels.",
    "Describe the **pentameric** (GABA-A, nicotinic, 5HT3, glycine) and **tetrameric** (AMPA, kainate, NMDA) structures.",
    "Use **Table 3-2** to link each ligand-gated channel target to its drugs and therapeutic actions.",
    "Apply the **agonist spectrum** to ion channels and explain why drugs here can act within minutes.",
    "Describe the **five states** of ligand-gated channels, and use nicotine to explain **desensitization** and **inactivation**.",
    "Define **PAMs** and **NAMs**, with benzodiazepines, benzodiazepine inverse agonists and ketamine/PCP as examples.",
    "Build a **voltage-sensitive sodium channel** and **calcium channel** from their parts: segment 4 voltmeter, ionic filter, pore inactivator, snare and the **α2δ** subunit.",
    "Name the **VSCC subtypes**, identify the presynaptic **N and P/Q** channels, and explain how blocking them reduces neurotransmitter release.",
    "Trace **excitation–secretion coupling** through VSSCs and VSCCs and on to postsynaptic ligand-gated channels."
  ],
  parts: [
    {
      title: "Ligand-gated ion channels",
      sections: [
        {
          id: "s3-intro",
          title: "Two classes of ion channels",
          pages: "51–53",
          blocks: [
            { type: "p", text: "Ions cannot cross membranes on their own because of their **charge**, so neuronal membranes are decorated with ion channels that control access. The most important in psychopharmacology regulate **calcium, sodium, chloride and potassium**." },
            { type: "compare", items: [
              { title: "Ligand-gated ion channels", color: "mech", points: ["Opened by **neurotransmitters** binding a gatekeeper receptor", "Also called **ionotropic receptors** and **ion-channel-linked receptors**", "Both a **receptor** and an **ion channel**", "About **a fifth** of psychotropic drugs act here"] },
              { title: "Voltage-sensitive ion channels", color: "drug", points: ["Opened by the **charge (voltage)** across the membrane", "Also called **voltage-gated** ion channels", "Mediate nerve conduction, action potentials and transmitter release", "Targets of many **anticonvulsants**"] }
            ] },
            { type: "defs", items: [
              ["Ligand", "Any neurotransmitter, drug or hormone that binds a receptor (literally, “tying”)."],
              ["Gatekeeper", "The receptor part of the channel: when a neurotransmitter binds, the receptor changes shape and **opens** the channel; otherwise it keeps it **closed** (Figure 3-1)."]
            ] },
            { type: "p", text: "Drugs act at many sites around these receptor/ion-channel complexes. They change ion flow **immediately** and, with a delay, change the **downstream** signal transduction described in [[ch:ch01|Chapter 1]]: phosphoproteins, enzyme activity, receptor sensitivity, channel conductivity and gene expression." },
            { type: "callout", kind: "pearl", title: "Why some drugs work fast", text: "Because ionotropic receptors change ion flow **at once**, drugs acting there can have an **almost immediate** effect, which is why many anxiety and sleep drugs (such as the **benzodiazepines**) have immediate clinical onset. Many drugs at **G-protein-linked receptors** ([[ch:ch02|Chapter 2]]) have effects, such as on mood, that are **delayed** while the signal transduction cascade changes cellular functions." }
          ]
        },
        {
          id: "s3-structure",
          title: "Structure: pentameric and tetrameric channels",
          pages: "53–56",
          blocks: [
            { type: "p", text: "Ligand-gated channels are built from long amino acid subunits arranged around a central pore. They carry **multiple binding sites**: for ions passing through or binding the channel, for one neurotransmitter or two **cotransmitters**, and for many **allosteric modulators** that raise or lower the sensitivity of channel opening." },
            { type: "compare", items: [
              { title: "Pentameric (Figure 3-2, Table 3-1)", color: "mech", points: ["**Five** subunits", "Each subunit has **four** transmembrane regions", "[[target:gabaa|GABA-A receptors]] (α1, γ, δ subunits)", "[[target:nicotinic|Nicotinic receptors]] (α7; α4β2)", "[[target:5ht3|5HT3 receptors]]", "[[target:glyr|Strychnine-sensitive glycine receptors]]"] },
              { title: "Tetrameric (Figure 3-3, Table 3-3)", color: "clin", points: ["**Four** subunits", "Each subunit has **three** full transmembrane regions plus a **re-entrant loop** that lines the pore", "The ionotropic **glutamate** receptors:", "[[target:ampa|AMPA]] (GluR1–4)", "[[target:kainate|Kainate]] (GluR5–7, KA1–2)", "[[target:nmda|NMDA]] (NMDAR1, NMDAR2A–D, NMDAR3A)"] }
            ] },
            { type: "list", items: [
              "Binding sites sit on **every subunit**, some **inside** the channel but many **outside** it.",
              "Pentameric receptors come in many **subtypes**, defined by **which version of each subunit** is assembled. The natural neurotransmitter binds every subtype, but some drugs bind **selectively** to one or more, which may matter clinically.",
              "Subtype-selective drugs for ionotropic **glutamate** receptors are under investigation but **not in clinical use**."
            ] },
            { type: "callout", kind: "mnemonic", text: "**Pentameric = 5 × 4**: five subunits, four transmembrane regions each. **Tetrameric = 4 × (3 + loop)**: four glutamate subunits, each three transmembrane regions and a re-entrant loop. Glutamate is the odd one out." }
          ]
        },
        {
          id: "s3-drugs",
          title: "Drugs that act directly at ligand-gated channels",
          pages: "55",
          blocks: [
            { type: "table", wide: true, caption: "Key ligand-gated ion channels targeted by psychotropic drugs (Table 3-2)", head: ["Channel and site", "Drug action", "Drugs", "Therapeutic action"], rows: [
              "Acetylcholine",
              ["[[target:nicotinic|α4β2 nicotinic]]", "**Partial agonist**", "Nicotinic receptor partial agonist (NRPA): [[drug:varenicline|varenicline]]", "**Smoking cessation**"],
              "GABA",
              ["[[target:gabaa|GABA-A]] benzodiazepine sites", "Full agonist (PAM), **phasic** inhibition", "**Benzodiazepines** ([[drug:diazepam|diazepam]], [[drug:alprazolam|alprazolam]])", "**Anxiolytic**"],
              ["[[target:gabaa|GABA-A]] nonbenzodiazepine PAM sites", "Full agonist (PAM), **phasic** inhibition", "**“Z drugs”**: [[drug:zolpidem|zolpidem]], [[drug:zaleplon|zaleplon]], [[drug:zopiclone|zopiclone]], [[drug:eszopiclone|eszopiclone]]", "**Improves insomnia**"],
              ["[[target:gabaa|GABA-A]] neurosteroid sites (benzodiazepine-insensitive)", "Full agonist, **tonic** inhibition", "Neuroactive steroids ([[drug:allopregnanolone|allopregnanolone]])", "**Postpartum depression**; rapid-acting antidepressant; anesthetic"],
              "Glutamate",
              ["[[target:nmda|NMDA]] NAM channel sites / Mg²⁺ sites", "Antagonist", "[[drug:memantine|Memantine]]", "**Pro-cognitive in Alzheimer disease**"],
              ["[[target:nmda|NMDA]] open-channel sites", "Antagonist", "[[drug:pcp|PCP (phencyclidine)]], [[drug:ketamine|ketamine]], [[drug:dextromethorphan|dextromethorphan]], [[drug:dextromethadone|dextromethadone]]", "Dissociative hallucinogen; anesthetic; **pseudobulbar affect**; agitation in Alzheimer disease; **rapid-acting antidepressant**; **treatment-resistant depression**"],
              "Serotonin",
              ["[[target:5ht3|5HT3]]", "Antagonist", "[[drug:mirtazapine|Mirtazapine]], [[drug:vortioxetine|vortioxetine]]", "Pro-cognitive; antidepressant"],
              ["[[target:5ht3|5HT3]]", "Antagonist", "5HT3 antagonist antiemetics", "Reduce **chemotherapy-induced emesis**"]
            ], note: "PAM, positive allosteric modulator; NAM, negative allosteric modulator; NMDA, N-methyl-D-aspartate." },
            { type: "callout", kind: "exam", text: "**Phasic vs tonic**: benzodiazepines and Z drugs act at GABA-A sites that mediate **phasic** inhibition; neurosteroids act at **benzodiazepine-insensitive** sites that mediate **tonic** inhibition." },
            { type: "update", year: "2023", title: "An oral neuroactive steroid for postpartum depression", text: "In August 2023 the FDA approved **zuranolone**, an oral GABA-A positive allosteric modulator (neuroactive steroid), as the first **oral** treatment for **postpartum depression** in adults, given as a 14-day course.", source: "FDA approval, August 4, 2023" },
            { type: "update", year: "2022", title: "Dextromethorphan for depression", text: "In August 2022 the FDA approved **dextromethorphan–bupropion** (Auvelity) for **major depressive disorder** in adults. Dextromethorphan is an NMDA receptor antagonist; bupropion is added partly to slow dextromethorphan’s metabolism by CYP2D6.", source: "FDA approval, August 2022" },
            { type: "update", year: "2025", title: "Esketamine as monotherapy", text: "Esketamine nasal spray (Spravato), the S-enantiomer of ketamine, was approved in 2019 as an add-on for treatment-resistant depression. In January 2025 the FDA approved it as **monotherapy** for adults with treatment-resistant depression.", source: "FDA approval, January 2025" },
            { type: "update", year: "2024", title: "Dextromethadone (esmethadone) development stopped", text: "In December 2024 Relmada halted its phase III trials of **esmethadone** (dextromethadone, REL-1017) as adjunctive treatment for major depression after interim results showed little chance of success; it is not approved.", source: "Relmada Therapeutics, December 2024" }
          ]
        },
        {
          id: "s3-spectrum",
          title: "The agonist spectrum at ion channels",
          pages: "56–62",
          blocks: [
            { type: "p", text: "The agonist spectrum from [[ch:ch02|Chapter 2]] applies equally to ligand-gated ion channels (Figure 3-4), with **frequency of channel opening** taking the place of second-messenger output." },
            { type: "table", caption: "The spectrum at an ion channel", head: ["Ligand", "Effect on the channel", "Figure"], rows: [
              ["**Full agonist**", "Opens the channel at the **maximal frequency allowed by that binding site**; maximal downstream signaling from that site", "3-5"],
              ["**Full agonist + PAM**", "Opens it **even more** (more frequently) than the agonist alone, via a second site", "3-16"],
              ["**Partial agonist**", "Opens it more than the resting state, **less than a full agonist**", "3-8"],
              ["**Antagonist**", "Keeps the **resting state**: infrequent opening (constitutive activity) continues", "3-6"],
              ["**Inverse agonist**", "**Closes** the channel, then stabilizes it in an **inactive** state (the padlock)", "3-11"]
            ] },
            { type: "h", text: "Antagonists" },
            { type: "list", items: [
              "Stabilize the **resting state**, identical to the state with no agonist, so they are **neutral or silent**.",
              "The resting state is **not fully closed**: occasional opening lets some ions through even with an antagonist present (**constitutive activity**).",
              "They **reverse** agonists and partial agonists, returning the channel to rest, but do **not** block constitutive activity.",
              "They also reverse **inverse agonists**. So an antagonist **decreases** opening in the presence of an agonist but **increases** opening in the presence of an inverse agonist, despite doing nothing on its own (Figure 3-12)."
            ] },
            { type: "h", text: "Partial agonists" },
            { type: "list", items: [
              "Where a partial agonist sits between full agonist and silent antagonist determines its downstream impact. The ideal is the **“Goldilocks”** solution, which may vary by clinical situation.",
              "They are **stabilizers**: a **net agonist** when natural agonist is absent and a **net antagonist** when it is present (Figure 3-9), so they could treat deficiency, excess, or a mixture.",
              "Partial agonists at ligand-gated channels are **just beginning to enter practice** (Table 3-2: [[drug:varenicline|varenicline]]), with more in development."
            ] },
            { type: "h", text: "Inverse agonists" },
            { type: "list", items: [
              "Neither neutral nor silent: they **first close** the channel and then **stabilize it in an inactive form**, cutting ion flow below the resting state.",
              "Antagonists stabilize the **resting** state; inverse agonists stabilize an **inactivated** state.",
              "Whether this inactivated state can be distinguished **clinically** from an antagonist’s resting state is **not yet clear**."
            ] }
          ]
        },
        {
          id: "s3-states",
          title: "Five states of ligand-gated channels, and nicotine",
          pages: "63–64",
          blocks: [
            { type: "p", text: "Acute drug actions across the agonist spectrum are only part of the story: receptors **adapt** over time, especially with chronic or excessive exposure (Figure 3-14)." },
            { type: "table", caption: "The five states", head: ["State", "What happens"], rows: [
              ["**Resting**", "Opens infrequently (constitutive activity), which may or may not give detectable signaling"],
              ["**Open**", "Ions flow through, producing signal transduction"],
              ["**Closed**", "No ion flow; signaling falls below the resting level"],
              ["**Desensitized**", "An adaptive state: the receptor **stops responding** to agonist even though agonist is still bound"],
              ["**Inactivated**", "A closed channel that over time becomes **stabilized in an inactive conformation**"]
            ] },
            { type: "flow", title: "From agonist to inactivation (Figure 3-15)", steps: [
              ["Resting", "Before agonist", "hy"],
              ["Open", "Acute agonist", "clin"],
              ["Desensitized", "Prolonged agonist; reversed fairly quickly if agonist is removed", "mech"],
              ["Inactivated", "Agonist present for hours; takes hours to recover even after removal", "guide"]
            ] },
            { type: "p", text: "Desensitization may be how receptors **protect themselves from overstimulation**." },
            { type: "h", text: "Nicotine and the length of a cigarette" },
            { type: "list", items: [
              "Inactivation is best characterized for **nicotinic cholinergic receptors**.",
              "**Acetylcholine** is quickly hydrolyzed by abundant **acetylcholinesterase**, so it rarely gets the chance to desensitize or inactivate its receptors.",
              "**Nicotine** is **not** hydrolyzed by acetylcholinesterase. It stimulates nicotinic receptors so profoundly and enduringly that they are **desensitized in about the time it takes to smoke one cigarette** and **inactivated for about the time between cigarettes**."
            ] },
            { type: "callout", kind: "analogy", text: "Ever wonder why cigarettes are the length they are, and why most smokers smoke **about a pack a day (20 cigarettes) over about 16 waking hours**? Stahl explains that smokers are adjusting their nicotine dosing to the desensitization and inactivation cycle of nicotinic receptors. Addiction is covered in Chapter 13." }
          ]
        },
        {
          id: "s3-pam",
          title: "Allosteric modulation: PAMs and NAMs",
          pages: "64–66",
          blocks: [
            { type: "p", text: "Ligand-gated channels are regulated by more than their neurotransmitters. Molecules binding at **allosteric** (“other”) sites are **allosteric modulators**: they have little or no activity on their own and work **only in the presence of the neurotransmitter**." },
            { type: "compare", items: [
              { title: "Positive allosteric modulator (PAM)", color: "clin", points: ["Boosts what the neurotransmitter does", "With the neurotransmitter bound, opens the channel **further and more often than a full agonist alone**", "Does nothing without the neurotransmitter", "Example: **benzodiazepines** at GABA-A"] },
              { title: "Negative allosteric modulator (NAM)", color: "guide", points: ["Blocks or reduces what the neurotransmitter does", "With the neurotransmitter bound, the channel opens **less often**", "Does nothing without the neurotransmitter", "Examples: **benzodiazepine inverse agonists**; **PCP and ketamine** at NMDA"] }
            ] },
            { type: "h", text: "Benzodiazepines: PAMs at GABA-A" },
            { type: "p", text: "GABA binding to GABA-A receptors opens the **chloride** channel. Benzodiazepines, acting as **full agonists at the benzodiazepine (PAM) site** elsewhere on the complex, **amplify** GABA’s effect on chloride flux by opening the channel more, or more often." },
            { type: "compare", title: "Same site, opposite ligands", items: [
              { title: "Benzodiazepine full agonist (PAM)", color: "clin", points: ["**Reduces anxiety**", "**Induces sleep**", "**Blocks convulsions**", "**Blocks short-term memory**", "**Relaxes muscles**"] },
              { title: "Benzodiazepine inverse agonist (NAM, experimental only)", color: "guide", points: ["Diminishes chloride conductance", "Causes **panic attacks**", "Causes **seizures**", "Some **improvement in memory**"] }
            ] },
            { type: "callout", kind: "key", text: "The **same allosteric site** can have **PAM or NAM** actions depending on whether the ligand is a **full agonist** or an **inverse agonist** at that site." },
            { type: "h", text: "PCP and ketamine: NAMs at NMDA receptors" },
            { type: "list", items: [
              "[[drug:pcp|Phencyclidine (PCP, “angel dust”)]] and its structurally related anesthetic [[drug:ketamine|ketamine]] are NAMs at NMDA receptors. Ketamine is also used for **treatment-resistant depression and suicidal thoughts**.",
              "They bind a site **inside the calcium channel**, and can get in to block it **only when the channel is open**.",
              "Once bound, they prevent **glutamate/glycine cotransmission** from opening the channel."
            ] }
          ]
        }
      ]
    },
    {
      title: "Voltage-sensitive ion channels",
      sections: [
        {
          id: "s3-ap",
          title: "The action potential",
          pages: "66–67",
          blocks: [
            { type: "p", text: "Nerve conduction, action potentials and neurotransmitter release are mediated by ion channels opened and closed by the **voltage across the membrane**. The **action potential** is triggered by summation of the neurochemical and electrical events of neurotransmission." },
            { type: "flow", title: "Ionic components of an action potential (Figure 3-18)", steps: [
              ["Sodium in", "[[target:vssc|VSSCs]] open; sodium rushes “downhill” into the negatively charged, sodium-poor interior", "drug"],
              ["Calcium in", "A few milliseconds later, the voltage change opens [[target:vscc|VSCCs]]", "guide"],
              ["Recovery", "Potassium moves back into the cell as sodium is pumped out, restoring the baseline", "hy"]
            ] },
            { type: "callout", kind: "caution", title: "A note on potassium", text: "Physiology texts describe repolarization itself as potassium flowing **out** through voltage-gated potassium channels. The inward movement of potassium shown in Figure 3-18C corresponds to the **sodium–potassium pump** restoring the ion gradients during recovery." },
            { type: "p", text: "Several psychotropic drugs are known or suspected to act on **VSSCs** and **VSCCs**. **Potassium channels** are less well known as psychotropic targets and are not emphasized." }
          ]
        },
        {
          id: "s3-vssc",
          title: "Voltage-sensitive sodium channels (VSSCs)",
          pages: "67–70",
          blocks: [
            { type: "p", text: "Voltage-gated channels are more than a hole in the membrane. Stahl builds one from scratch:" },
            { type: "steps", items: [
              ["The subunit", "Each pore-forming subunit has **six transmembrane segments** (Figure 3-19)."],
              ["Segment 4: the voltmeter", "**Transmembrane segment 4** detects the charge difference across the membrane. When it senses a change, it alerts the rest of the protein, which changes shape to **open or close** the channel."],
              ["Segments 5–6 loop: the ionic filter", "The **extracellular loop between segments 5 and 6** covers the outside of the pore and acts as an **ionic filter**, drawn as a **colander** that lets only sodium through."],
              ["Four subunits make the pore", "Four copies are strung together to form the **α pore unit** of a VSSC (Figure 3-20)."],
              ["The pore inactivator", "Amino acids on the **cytoplasmic loop between subunits III and IV** act as a **plug**, like a ball on a chain or an old-fashioned **bathtub plug**, stopping up the pore from the inside."],
              ["Regulatory β units", "**β units** flank the α pore. Their role is unclear; they may modify the α unit and may be **phosphoproteins** whose phosphorylation tunes their influence."]
            ] },
            { type: "p", text: "The α unit itself may be a phosphoprotein regulated by signal transduction, so ion channels can act as **third, fourth or later messengers** ([[ch:ch01|Chapter 1]]). Both β and α units carry sites where psychotropic drugs act, especially **anticonvulsants**, some also used as **mood stabilizers** or for **chronic pain**." },
            { type: "table", caption: "Three states of a VSSC (Figure 3-21)", head: ["State", "What happens"], rows: [
              ["**Open (active)**", "Maximum sodium flow through the α unit"],
              ["**Inactivated**", "The **pore inactivator flips into place** so fast that the channel has **not yet closed**; possibly fast inactivation"],
              ["**Closed and inactivated**", "Conformational change actually **closes** the channel; possibly a more **stable** inactivation"]
            ] },
            { type: "list", items: [
              "Sodium is kept out when the channel is closed or inactivated; when open, sodium flows **into** the neuron.",
              "There are **many subtypes** of sodium channel, but how they differ in location, function and drug action is only beginning to be clarified.",
              "Most current anticonvulsants probably have **multiple sites of action**, at multiple types of ion channel."
            ] },
            { type: "callout", kind: "caution", title: "Orientation in the figures", text: "Many texts draw the outside of the cell at the top. The book often draws channels on **presynaptic** membranes with the **inside of the neuron up** and the synapse down (Figure 3-20C), so check which way up a figure is." }
          ]
        },
        {
          id: "s3-vscc",
          title: "Voltage-sensitive calcium channels (VSCCs)",
          pages: "70–73",
          blocks: [
            { type: "p", text: "VSCCs share the VSSC plan: subunits with **six transmembrane segments**, **segment 4** as voltmeter and the **5–6 loop** as an ionic filter, this time a colander that lets **calcium** through. Four subunits form the pore, called the **α1 unit** (Figure 3-22)." },
            { type: "compare", title: "VSSC versus VSCC", items: [
              { title: "Sodium channel (VSSC)", color: "drug", points: ["Pore = **α unit**", "Loop **III–IV**: **pore inactivator** (plug)", "Flanked by **β** units"] },
              { title: "Calcium channel (VSCC)", color: "guide", points: ["Pore = **α1 unit**", "Loop **II–III**: a **snare** that hooks synaptic vesicles and regulates release", "Flanked by **γ** (transmembrane), **β** (cytoplasmic) and **α2δ** units"] }
            ] },
            { type: "h", text: "The α2δ subunit" },
            { type: "p", text: "[[target:a2d|α2δ]] has two parts: a **δ part in the membrane** and an **α2 part outside the cell**. It is the target of the anticonvulsants [[drug:pregabalin|pregabalin]] and [[drug:gabapentin|gabapentin]], and may regulate the conformational changes that open and close the channel." },
            { type: "h", text: "VSCC subtypes (Table 3-4)" },
            { type: "table", caption: "Subtypes of voltage-sensitive calcium channels", head: ["Type", "Pore-forming unit", "Location", "Function"], rows: [
              ["**L**", "Cav1.2, 1.3", "Cell bodies, dendrites", "Gene expression, synaptic integration"],
              ["**N**", "Cav2.2", "**Nerve terminals**; dendrites, cell bodies", "**Transmitter release**; synaptic integration"],
              ["**P/Q**", "Cav2.1", "**Nerve terminals**; dendrites, cell bodies", "**Transmitter release**; synaptic integration"],
              ["**R**", "Cav2.3", "Nerve terminals; cell bodies, dendrites", "Transmitter release; repetitive firing, synaptic integration"],
              ["**T**", "Cav3.1, 3.2, 3.3", "Cell bodies, dendrites", "Pacemaking, repetitive firing, synaptic integration"]
            ] },
            { type: "list", items: [
              "The VSCCs of most interest are the **presynaptic N and P/Q channels**, which regulate neurotransmitter release and are targeted by certain psychotropic drugs.",
              "**L channels** exist in the CNS (functions still being clarified) and on **vascular smooth muscle**, where **dihydropyridine “calcium channel blockers”** lower blood pressure.",
              "**R and T** channels interest researchers too; some anticonvulsants may act there.",
              "“Calcium channel” is too general a term: the calcium-permeable **ligand-gated** channels (glutamate, nicotinic) are an entirely different class from VSCCs."
            ] },
            { type: "h", text: "Snares and neurotransmitter release (Figures 3-23 and 3-24)" },
            { type: "p", text: "N and P/Q channels are literally **hooked to synaptic vesicles** by molecular snares. The snare proteins include **SNAP 25**, **synaptobrevin**, **syntaxin** and **synaptotagmin**; the vesicle also carries [[target:vmat2|VMAT]] and [[target:sv2a|SV2A]] (the levetiracetam site)." },
            { type: "callout", kind: "analogy", text: "Some experts picture the snared VSCC as a **cocked gun**, loaded with a synaptic vesicle “bullet” of neurotransmitter, ready to fire at the postsynaptic neuron the moment a nerve impulse arrives." },
            { type: "callout", kind: "pearl", text: "If a drug stops the channel opening and admitting calcium, the vesicle **stays tethered** and neurotransmission is prevented. That may be desirable in states of **excessive neurotransmission** such as **pain, seizures, mania or anxiety**, and may explain how certain anticonvulsants work." },
            { type: "p", text: "Anticonvulsants acting at VSSCs and VSCCs have many psychopharmacological uses: **chronic pain, migraine, bipolar mania, bipolar depression, bipolar maintenance**, and possibly **anxiety and sleep**. These are covered in the clinical chapters." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s3-together",
          title: "Ion channels working together in neurotransmission",
          pages: "73–76",
          blocks: [
            { type: "p", text: "Ligand-gated and voltage-gated channels are presented separately but work **cooperatively**: brain communication is “a magical mix of electrical and chemical messages made possible by ion channels.”" },
            { type: "callout", kind: "analogy", text: "The action potential is like **lighting a fuse** that burns from the initial segment of the axon to the terminal. The burning edge is a sequence of **VSSCs** opening one after another, each letting sodium in and passing the impulse to the next." },
            { type: "flow", vertical: true, title: "Excitation–secretion coupling in detail (Figure 3-26)", labels: ["A", "B", "C", "D", "E", "F", "G"], steps: [
              ["Impulse approaches", "The action potential travels down the axon via VSSCs toward a closed VSSC beside a closed VSCC snared to its vesicle", "drug"],
              ["Sodium wave arrives", "Positive charge from upstream sodium channels is detected by the terminal VSSC’s **voltmeter**", "drug"],
              ["VSSC opens", "Sodium enters the terminal", "drug"],
              ["VSCC senses it", "The local charge change is detected by the **VSCC’s voltmeter**", "guide"],
              ["VSCC opens", "Calcium enters: neurotransmission is now **irreversibly triggered**", "guide"],
              ["Calcium rises", "Local calcium rises near the vesicle and release machinery", "hy"],
              ["Release", "The vesicle docks, merges with the membrane and spews neurotransmitter into the synapse", "clin"]
            ] },
            { type: "p", text: "This happens almost **instantaneously** and **simultaneously** at many VSCCs and vesicles. It is only half the story (Figure 3-25):" },
            { type: "list", ordered: true, items: [
              "**VSSCs** in presynaptic neuron A propagate the impulse.",
              "**VSCCs** in neuron A release the neurotransmitter (here **glutamate**).",
              "**Ligand-gated ion channels** on the dendrites of neuron B receive the chemical message and translate it back into a nerve impulse, which **VSSCs** in neuron B propagate.",
              "Ligand-gated channels in neuron B can also translate the glutamate signal into **long-term potentiation**, changing neuron B’s function."
            ] }
          ]
        },
        {
          id: "s3-summary",
          title: "Summary",
          pages: "76",
          blocks: [
            { type: "list", items: [
              "Ion channels are key drug targets because they are key regulators of **chemical neurotransmission and signal transduction**.",
              "**Ligand-gated** channels are opened by neurotransmitters; **voltage-gated** channels by membrane charge.",
              "Ligand-gated channels are both channels and receptors (**ionotropic**, **ion-channel-linked**). **Pentameric**: GABA-A, nicotinic, 5HT3, some glycine receptors. **Tetrameric**: glutamate AMPA, kainate and NMDA receptors.",
              "Ligands act across the **agonist spectrum**, and **PAMs** and **NAMs** at other sites boost or reduce neurotransmitter action. The channels exist in **open, resting, closed, inactivated and desensitized** states.",
              "Of the voltage-gated channels, **VSSCs** and **VSCCs** matter most. Numerous **anticonvulsants** bind them, which may explain their anticonvulsant, mood-stabilizing, pain, anxiety and sleep effects."
            ] }
          ]
        },
        {
          id: "s3-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 3’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: fast versus slow", text: "A patient with an anxiety disorder notices that a benzodiazepine calmed her within the hour, while the SSRI started the same week has not yet helped. She asks why.", point: "Drugs at **ionotropic receptors** change ion flow at once, so onset can be **almost immediate**. Many drugs at **G-protein-linked** receptors work through **signal transduction** cascades, with effects on mood that are **delayed**." },
            { type: "case", title: "Clinical vignette: a pack a day", text: "A smoker says he lights up about every 45 minutes while awake and feels he “needs” the next cigarette just as the last one wears off.", point: "Nicotine, unlike acetylcholine, is not hydrolyzed by acetylcholinesterase: it **desensitizes** nicotinic receptors within about one cigarette and **inactivates** them for about the interval between cigarettes. The partial agonist **varenicline** treats smoking cessation." },
            { type: "case", title: "Clinical vignette: a seizure drug for pain", text: "A patient asks why an anticonvulsant has been prescribed for her neuropathic pain.", point: "**Gabapentin and pregabalin** bind the **α2δ** subunit of presynaptic N and P/Q **VSCCs**. Keeping vesicles tethered can reduce release in states of **excessive neurotransmission** such as pain, seizures, mania or anxiety." },
            { type: "case", title: "Clinical vignette: the open-channel blocker", text: "A student asks why ketamine affects active glutamate synapses more than quiet ones.", point: "**Ketamine and PCP** bind **inside** the NMDA receptor’s calcium channel and can enter only **when the channel is open**, then prevent glutamate/glycine cotransmission from opening it." }
          ]
        }
      ]
    }
  ]
});
