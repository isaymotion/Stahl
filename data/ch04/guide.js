/* Chapter 4 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 4 (pp. 77–158).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch04", "guide", {
  intro: "Psychosis is a **syndrome**, not a diagnosis: at minimum it means **delusions and hallucinations**, and it occurs in schizophrenia, mood disorders, Parkinson’s disease, the dementias and drug intoxications. This chapter builds the three neurotransmitter networks linked to psychosis (**dopamine**, **glutamate** and **serotonin**) from synthesis to receptors to pathways, then shows how all three hypotheses converge on one final common pathway: **too much dopamine in the mesolimbic/mesostriatal projection**. It closes with schizophrenia as the prototypical psychotic disorder (its five symptom dimensions, violence, causes, neurodevelopment and neurodegeneration) and the psychoses of Parkinson’s disease and dementia. Chapter 5’s drugs make sense only once these circuits are in place.",
  objectives: [
    "Define **psychosis**, **delusions** and **hallucinations**, and describe the **paranoid**, **disorganized/excited** and **depressive** clusters of psychotic symptoms.",
    "State the **three major hypotheses** of psychosis and use **Table 4-1** to contrast stimulant, dissociative and psychedelic psychoses.",
    "Trace dopamine from **tyrosine** to release and termination (**TOH, DDC, VMAT2, DAT, COMT, MAO, NET**), and contrast **D1-like** with **D2-like** receptors and **D2 vs D3** autoreceptors.",
    "Name the **five dopamine pathways**, their functions and what too much, too little or blocked dopamine does in each, including the **direct (go)** and **indirect (stop)** motor pathways.",
    "Explain **mesolimbic hyperdopaminergia**, **mesocortical hypodopaminergia** and the newer **integrative hub / mesostriatal** concept.",
    "Describe glutamate recycling, the cotransmitters **glycine** and **D-serine**, the glutamate receptor families (**Table 4-2**), the NMDA **coincidence detector**, and the **seven glutamate pathways**.",
    "Explain the **NMDA hypofunction hypothesis** at prefrontal **GABA interneurons** and how it drives **positive** (mesostriatal) and **negative** (mesocortical) symptoms.",
    "Describe serotonin synthesis, termination, **presynaptic autoreceptors** (5HT1A, 5HT2B, 5HT1B/D) and the downstream effects of **5HT1A, 1B, 2A, 2C, 3, 6 and 7** receptors.",
    "Explain the **serotonin hyperfunction hypothesis** in hallucinogen psychosis, **Parkinson’s disease psychosis** and **dementia-related psychosis**.",
    "Describe schizophrenia’s **five symptom dimensions** and their circuits, the **three types of violence**, the **nature–nurture** causes and the **neurodevelopmental/neurodegenerative** model."
  ],
  parts: [
    {
      title: "Psychosis and its three hypotheses",
      sections: [
        {
          id: "s4-symptoms",
          title: "What psychosis is",
          pages: "77–78",
          blocks: [
            { type: "p", text: "The word psychosis is often misused, by the media and by clinicians, and carries stigma. In diagnostic systems such as the **DSM** and **ICD** it is not a disorder in itself but a **syndrome**: a mixture of symptoms that can accompany many psychiatric disorders. The chapter therefore treats psychosis as a target for the drugs of Chapter 5 across many conditions, not only schizophrenia, and refers readers to the DSM and ICD for diagnostic criteria." },
            { type: "defs", items: [
              ["Delusion", "A **fixed belief**, often bizarre, with an inadequate rational basis that does **not yield** to argument or contrary evidence."],
              ["Hallucination", "A perception in **any sensory modality** (especially **auditory**) without a real external stimulus, as vivid as a normal perception but **not under voluntary control**."],
              ["Positive symptoms", "Delusions and hallucinations: the **hallmarks** of psychosis."],
              ["Other features", "Disorganized speech and behavior, gross distortions of reality testing, and **negative symptoms** such as diminished emotional expression and decreased motivation."]
            ] },
            { type: "p", text: "Psychosis of any cause can take one of three broad forms, and any form can carry **perceptual distortions** (accusing or threatening voices, visions, touch, taste or smell hallucinations, familiar people or things seeming changed) and **motor disturbances** (rigid postures, tension, inappropriate grins, repetitive gestures, muttering to oneself, glancing about as if hearing voices)." },
            { type: "table", caption: "Three clusters of psychotic symptoms (pp. 77–78)", head: ["Cluster", "Components", "Where it is typical"], rows: [
              ["**Paranoid**", "**Paranoid projection** (preoccupation with delusions; ideas that people talk about, persecute, conspire against or control one); **hostile belligerence** (disdain, sullenness, irritability, blaming, resentment, fault-finding, suspicion); **grandiose expansiveness** (superiority, praising voices, special powers, fame, divine mission)", "Schizophrenia and many **drug-induced** psychoses; grandiosity also in **manic** psychosis. **Parkinson’s disease psychosis**: a particular belief that the spouse is unfaithful or that loved ones are stealing"],
              ["**Disorganized/excited**", "**Conceptual disorganization** (irrelevant or incoherent answers, drifting, **neologisms**, repeated words); **disorientation** (place, season, year, own age); **excitement** (unrestrained feelings, hurried loud speech, elevated mood, self-dramatizing, overactivity)", "Disorganization in **any** psychotic disorder; disorientation in **dementia** and **drug-induced** states; excitement in **mania** or schizophrenia"],
              ["**Depressive**", "**Psychomotor retardation and apathy** (slowed speech and movement, fixed face, speech blocking, poor recent memory, slovenly appearance, whispered speech, not answering); **anxious self-punishment and blame** (self-condemnation, guilt, remorse, worthlessness, suicidal preoccupation)", "**Psychotic depression**; retardation and apathy can be hard to tell from **negative symptoms**"]
            ] },
            { type: "callout", kind: "key", title: "A description, not criteria", text: "These clusters describe kinds of behavioral disturbance that can appear in many psychotic illnesses. In sum, psychosis is a set of symptoms in which mental capacity, affective response and the capacity to **recognize reality, communicate and relate** to others are impaired." }
          ]
        },
        {
          id: "s4-three",
          title: "Three hypotheses, one final common pathway",
          pages: "78–79",
          blocks: [
            { type: "p", text: "The **dopamine hypothesis** is one of the most enduring ideas in psychopharmacology, but evidence now implicates **glutamate** and **serotonin** networks too, in schizophrenia and also in psychoses of **Parkinson’s disease**, **dementia** and **psychotomimetic drugs** (Figure 4-1)." },
            { type: "flow", title: "Figure 4-1 in brief: three routes to psychosis", steps: [
              ["Dopamine", "**Hyperactive D2** receptors in the **mesolimbic** pathway", "mech"],
              ["Glutamate", "**Hypoactive NMDA** receptors at critical **prefrontal** synapses → downstream mesolimbic dopamine excess", "drug"],
              ["Serotonin", "**Hyperactive 5HT2A** receptors in the **cortex** → downstream mesolimbic dopamine excess", "clin"]
            ], note: "One or more of these pathways is likely involved in any given psychosis." },
            { type: "table", caption: "Table 4-1: pharmacological models of psychosis", head: ["", "Psychostimulants (cocaine, amphetamine)", "Dissociative anesthetics (PCP, ketamine)", "Psychedelics (LSD, psilocybin)"], rows: [
              ["Proposed mechanism", "**D2 agonist**", "**NMDA antagonist**", "**5HT2A agonist** (and to a lesser extent 5HT2C)"],
              ["Main hallucinations", "**Auditory**", "**Visual**", "**Visual**"],
              ["Typical delusions", "Paranoid", "Paranoid", "**Mystical**"],
              ["Insight", "No", "No", "**Yes**"]
            ], note: "Stimulant psychosis is described as acting like D2 agonism because amphetamine and cocaine flood the synapse with dopamine (Chapter 2)." },
            { type: "callout", kind: "exam", title: "Model psychoses", text: "Match the drug class to its hypothesis: **amphetamine/cocaine** → dopamine (auditory, paranoid, no insight); **PCP/ketamine** → NMDA hypofunction (visual, paranoid, no insight); **LSD/psilocybin** → 5HT2A agonism (visual, **mystical**, insight **preserved**)." }
          ]
        }
      ]
    },
    {
      title: "The dopamine network",
      sections: [
        {
          id: "s4-da-synth",
          title: "Dopamine synthesis and termination",
          pages: "79–81",
          blocks: [
            { type: "p", text: "For about 50 years, the answer to “which neurotransmitter causes psychosis?” was dopamine, specifically **hyperactivity at D2 receptors in the mesolimbic pathway**. The idea fits two facts: dopamine release by **amphetamine** causes a paranoid psychosis much like schizophrenia, and **D2 blockers** have been the mainstay of treatment for essentially all psychoses for over five decades. It is so powerful that some still wrongly assume all positive symptoms come from mesolimbic dopamine and all treatments must block D2. Understanding the dopamine network comes first." },
            { type: "flow", title: "Figure 4-2: making dopamine", steps: [
              ["Tyrosine", "Taken up into the nerve terminal by a **tyrosine transporter**", "found"],
              ["DOPA", "Made by **tyrosine hydroxylase (TOH)**, the **rate-limiting** enzyme", "mech"],
              ["Dopamine", "Made by **DOPA decarboxylase (DDC)**", "mech"],
              ["Vesicle", "Packaged by **VMAT2** until released", "drug"]
            ] },
            { type: "table", caption: "Figure 4-3: how dopamine’s action ends", head: ["Mechanism", "Where", "Role"], rows: [
              ["**DAT** (dopamine transporter)", "Presynaptic terminals in the **striatum** and some other regions", "The **principal** inactivation route where present; returns dopamine for re-storage and reuse"],
              ["**COMT** (catechol-O-methyltransferase)", "**Extracellular**", "Secondary route in striatum; the **principal** route in **prefrontal cortex**, where DATs are sparse"],
              ["**MAO-A and MAO-B**", "Mitochondria inside the neuron and in other cells such as glia", "Destroy dopamine that escapes vesicular storage"],
              ["**NET** (norepinephrine transporter)", "Neighboring norepinephrine neurons", "Where DATs are absent, dopamine diffuses to NETs and is taken up as a **“false” substrate**"]
            ] },
            { type: "callout", kind: "pearl", title: "Prefrontal cortex is different", text: "With few DATs in the **prefrontal cortex**, dopamine there is cleared mainly by **COMT** (and MAO) or by diffusion to **NETs**. This is why drugs that block **NET** can raise prefrontal dopamine, a point that returns with the ADHD and depression chapters." }
          ]
        },
        {
          id: "s4-da-receptors",
          title: "Dopamine receptors and autoreceptors",
          pages: "81–84",
          blocks: [
            { type: "p", text: "Receptors are the key regulators of dopamine neurotransmission. DAT and VMAT2 are themselves receptors in the broad sense; beyond them there are at least **five pharmacological subtypes** and several molecular isoforms (Figure 4-4)." },
            { type: "compare", items: [
              { title: "D1-like: D1 and D5", color: "mech", points: ["**Excitatory**", "**Positively** linked to adenylate cyclase", "**D1** predominates postsynaptically in the **prefrontal cortex**", "D1 is the **least sensitive** to dopamine: needs higher concentrations"] },
              { title: "D2-like: D2, D3 and D4", color: "drug", points: ["**Inhibitory**", "**Negatively** linked to adenylate cyclase", "**D2 and D3** also sit **presynaptically** as autoreceptors", "**D3** is **more sensitive** to dopamine than D2"] }
            ] },
            { type: "p", text: "So dopamine can be **excitatory or inhibitory** depending on the receptor it binds. All five subtypes can be postsynaptic, but D2 and D3 receptors can also be **presynaptic autoreceptors** that brake further release (Figure 4-5). Because the **D3** autoreceptor is more sensitive, it shuts off release at a **lower** synaptic dopamine concentration; synapses with **D2** autoreceptors accumulate more dopamine before the brake engages." },
            { type: "callout", kind: "analogy", title: "The gatekeeper", text: "Presynaptic D2/D3 autoreceptors are pictured as **gatekeepers** (Figure 4-6). With no dopamine in hand, the gate is open and dopamine is released; once synaptic dopamine builds up and occupies the autoreceptor, the gate closes and release stops." },
            { type: "table", caption: "Where autoreceptors sit (Figures 4-7 and 4-8)", head: ["Location", "Effect of dopamine binding"], rows: [
              ["**Axon terminal**", "Inhibits further dopamine **release** from that terminal"],
              ["**Somatodendritic** (cell body and dendrites)", "Shuts off **neuronal impulse flow**, stopping release downstream"]
            ], note: "Both locations count as presynaptic and both provide negative-feedback braking." },
            { type: "compare", title: "Figure 4-9: mesocortical vs mesostriatal dopamine neurons", items: [
              { title: "Mesocortical (VTA → prefrontal cortex)", color: "clin", points: ["D2 or D3 autoreceptors on **cell bodies** in the VTA", "**Few** D2/D3 receptors and **few DATs** in the prefrontal cortex", "Release is not shut off at the terminal, so dopamine **diffuses widely** (a large “cloud”)", "Postsynaptic **D1** predominates and needs high dopamine, so wide diffusion suits it", "Allows **volume neurotransmission** ([[ch:ch01|Chapter 1]])"] },
              { title: "Mesostriatal (VTA/SN → striatum)", color: "mech", points: ["D2 or D3 receptors on **cell bodies**, **terminals** and postsynaptic sites", "**DATs** on striatal terminals", "Mesolimbic: **D3** autoreceptors in VTA and striatum; nigrostriatal: **D2** autoreceptors", "D2-autoreceptor terminals have a **wider** diffusion radius than D3 terminals", "D1, D2 and D3 receptors all postsynaptic in the striatum"] }
            ] }
          ]
        },
        {
          id: "s4-da-pathways",
          title: "The five classic dopamine pathways",
          pages: "84–89",
          blocks: [
            { type: "table", caption: "Figure 4-10: five dopamine pathways", head: ["Pathway", "From → to", "Normal role", "In untreated schizophrenia"], rows: [
              ["**Nigrostriatal**", "Substantia nigra → striatum (basal ganglia)", "Part of the **extrapyramidal** system; controls **movement** via CSTC loops", "Believed **normal**"],
              ["**Mesolimbic**", "VTA → **nucleus accumbens** (ventral striatum)", "Motivation, pleasure, **reward**; euphoria of drugs of abuse", "**Hyperactive** → positive symptoms"],
              ["**Mesocortical**", "VTA → prefrontal cortex (**DLPFC** and **VMPFC**)", "Cognition and executive function (DLPFC); emotion and affect (VMPFC)", "**Hypoactive** → cognitive, negative, affective symptoms"],
              ["**Tuberoinfundibular**", "Hypothalamus → **anterior pituitary**", "Tonically **inhibits prolactin** release", "Relatively **preserved**"],
              ["**Thalamic**", "Periaqueductal gray, ventral mesencephalon, hypothalamic nuclei, lateral parabrachial nucleus → thalamus", "Not well known; may gate thalamic traffic for **sleep and arousal**", "No evidence of abnormality"]
            ] },
            { type: "h", text: "Tuberoinfundibular pathway and prolactin" },
            { type: "p", text: "These neurons are normally **tonically active**, holding prolactin down. After childbirth their activity falls, so prolactin rises and **lactation** can occur during breastfeeding. If lesions or drugs disrupt the pathway, prolactin rises too, with **galactorrhea**, **gynecomastia** (especially in men), **amenorrhea** (loss of ovulation and periods) and possibly **sexual dysfunction**. Many D2-blocking drugs for psychosis do exactly this (Chapter 5)." },
            { type: "h", text: "Nigrostriatal pathway: direct and indirect motor loops" },
            { type: "p", text: "Classically the nigrostriatal pathway controls movement through **cortico-striato-thalamo-cortical (CSTC)** loops (Figure 4-13A). A finer model splits striatal output into two pathways that dopamine regulates in opposite ways but with the same net result." },
            { type: "compare", items: [
              { title: "Direct pathway: “go”", color: "clin", points: ["Populated with **excitatory D1** receptors", "Striatum → **globus pallidus interna (GPi)** directly", "Striatal GABA inhibits the GPi GABA neuron to the thalamus, freeing thalamic glutamate to the cortex: **movement**", "Dopamine at D1 says **“go more”**"] },
              { title: "Indirect pathway: “stop”", color: "drug", points: ["Populated with **inhibitory D2** receptors", "Striatum → **globus pallidus externa (GPe)** → **subthalamic nucleus** → GPi", "Net effect: GPi GABA inhibits the thalamus: **blocks movement**", "Dopamine at D2 inhibits the stop pathway: **“don’t stop”**"] }
            ] },
            { type: "callout", kind: "key", title: "Dopamine promotes movement through both loops", text: "Dopamine stimulates movement in **both** the direct (D1 go) and indirect (D2 don’t-stop) pathways; synchronizing the two outputs is thought to give smooth movement." },
            { type: "table", caption: "Nigrostriatal dopamine and movement disorders (pp. 86–89)", head: ["State", "Result"], rows: [
              ["**Too little** dopamine", "**Parkinson’s disease**: rigidity, akinesia/bradykinesia, tremor. Striatal deficiency may also underlie **akathisia** (restlessness) and **dystonia** (twisting, especially of face and neck)"],
              ["**D2 blockade** by drugs for psychosis", "Reproduces these: **drug-induced parkinsonism**, better known (less accurately) as **extrapyramidal symptoms (EPS)**"],
              ["**Too much** dopamine", "**Hyperkinetic** disorders: chorea, dyskinesias, tics (e.g., **Huntington’s disease**, **Tourette syndrome**)"],
              ["**Chronic D2 stimulation** (levodopa in Parkinson’s disease)", "**Levodopa-induced dyskinesias (LID)**"],
              ["**Chronic D2 blockade**", "**Tardive dyskinesia** (Chapter 5)"]
            ] },
            { type: "callout", kind: "caution", title: "EPS is a loose term", text: "The book prefers **drug-induced parkinsonism** to “extrapyramidal symptoms,” the better-known but less accurate label." }
          ]
        },
        {
          id: "s4-mesolimbic",
          title: "Mesolimbic pathway: reward and positive symptoms",
          pages: "89–92",
          blocks: [
            { type: "p", text: "The mesolimbic pathway runs from the **VTA** (mesencephalon) to the **nucleus accumbens** in the ventral striatum, part of the limbic system. Simplified, it may be the **final common pathway of all reward and reinforcement**: natural rewards (good food, orgasm, music) and the extremes on either side (Figure 4-14)." },
            { type: "table", caption: "Figure 4-14: mesolimbic dopamine tone", head: ["Mesolimbic dopamine", "Result"], rows: [
              ["**Normal**", "Motivation, pleasure, reward"],
              ["**Too high** (drug-induced)", "The artificial **“high”** of substance abuse (Chapter 13)"],
              ["**Too high** (illness)", "**Positive symptoms**: delusions and hallucinations"],
              ["**Too low**", "**Anhedonia, apathy, lack of energy**: unipolar and bipolar depression and the **negative symptoms** of schizophrenia"]
            ] },
            { type: "p", text: "**Classic dopamine hypothesis:** mesolimbic **hyperdopaminergia** is the final common pathway for positive symptoms, whether in schizophrenia, drug-induced psychosis, or psychosis accompanying mania, depression, Parkinson’s disease or dementia. It may also feed **impulsivity, agitation, aggression/violence and hostility** in any of these illnesses (Figure 4-15)." },
            { type: "callout", kind: "pearl", title: "Direct versus indirect causes", text: "Mesolimbic hyperactivity is a **direct** drug effect of psychostimulants such as **cocaine** and **methamphetamine**. In schizophrenia, mania, depression, Parkinson’s disease and dementias it may instead be an **indirect** consequence of dysregulated **prefrontal glutamate and serotonin** circuits, which is where the next two hypotheses come in." },
            { type: "update", year: "2024", title: "A non-D2 treatment reaches the clinic", text: "In September 2024 the FDA approved **xanomeline–trospium** (Cobenfy) for schizophrenia in adults: a muscarinic M1/M4 agonist paired with a peripherally restricted muscarinic antagonist, and the first drug for schizophrenia whose main mechanism is not dopamine D2 blockade. This supports the book’s point that there is “more to the treatment of psychosis than D2 antagonists.”", source: "FDA, September 26, 2024" }
          ]
        },
        {
          id: "s4-hub",
          title: "Integrative hub: mesostriatal hyperdopaminergia",
          pages: "92–95",
          blocks: [
            { type: "p", text: "Rodent anatomy and human drug studies suggested two parallel systems: a dorsal striatum for **movement** fed by the substantia nigra, and a ventral striatum for **emotion** fed by the VTA." },
            { type: "callout", kind: "analogy", title: "The neurologists’ and psychiatrists’ striatum", text: "The simple view gives neurologists the **dorsal (“upper”)** striatum for motor control and psychiatrists the **ventral (“lower”)** striatum for emotion (Figure 4-16A). Neuroimaging suggests the dorsal striatum is **not all motor** after all." },
            { type: "list", title: "What neuroimaging of unmedicated patients shows", items: [
              "Hyperdopaminergia is **not** found uniquely in the ventral striatum.",
              "It is especially present in an intermediate zone, the **associative striatum**, which receives input from the **substantia nigra**, not the VTA.",
              "Projections from the **medial and lateral substantia nigra** may matter for positive symptoms as much as those from the VTA.",
              "The dorsal striatum therefore has **emotional** components; **compulsions and habits** are also localized there (Chapter 13)."
            ] },
            { type: "callout", kind: "key", title: "New concept", text: "The **VTA–substantia nigra complex** acts as an **integrative hub**, and its projections are better called **mesostriatal** than nigrostriatal/mesolimbic. Schizophrenia’s hyperdopaminergia is **mesostriatal**, not purely mesolimbic (Figure 4-16B)." }
          ]
        },
        {
          id: "s4-mesocortical",
          title: "Mesocortical hypodopaminergia",
          pages: "95",
          blocks: [
            { type: "p", text: "The mesocortical pathway also starts in the VTA but projects to the **prefrontal cortex** (Figures 4-17 to 4-19). Its exact role is debated, but a widely held corollary of the dopamine hypothesis is that **too little** dopamine here underlies schizophrenia’s non-positive symptoms." },
            { type: "compare", items: [
              { title: "Mesocortical → DLPFC", color: "mech", points: ["Regulates **cognition** and **executive function**", "Deficit → **cognitive** and **some negative** symptoms"] },
              { title: "Mesocortical → VMPFC", color: "clin", points: ["Regulates **emotion** and **affect**", "Deficit → **affective** and **other negative** symptoms"] }
            ] },
            { type: "p", text: "The behavioral deficit of negative symptoms implies **underactivity** of mesocortical projections. A leading theory traces this to **neurodevelopmental abnormalities of NMDA glutamate** signaling, the subject of the next part." },
            { type: "callout", kind: "exam", title: "Same transmitter, opposite problems", text: "In schizophrenia, dopamine is hypothetically **too high** in the mesolimbic/mesostriatal pathway (positive symptoms) and **too low** in the mesocortical pathway (cognitive, negative, affective symptoms), while the **nigrostriatal** and **tuberoinfundibular** pathways are relatively normal until drugs block D2 there." }
          ]
        }
      ]
    },
    {
      title: "The glutamate network",
      sections: [
        {
          id: "s4-glu-hyp",
          title: "The glutamate hypothesis",
          pages: "95–96",
          blocks: [
            { type: "p", text: "The glutamate theory proposes that the **NMDA** subtype of glutamate receptor is **hypofunctional at critical synapses in the prefrontal cortex** (Figure 4-1, Table 4-1). The disruption can hypothetically arise from:" },
            { type: "list", items: [
              "**Neurodevelopmental** abnormalities in **schizophrenia**",
              "**Neurodegeneration** in **Alzheimer disease** and other dementias",
              "NMDA-blocking drugs: the dissociative anesthetics **ketamine** and **phencyclidine (PCP)**"
            ] },
            { type: "p", text: "Glutamate is also a key theoretical player in **depression** and a target of novel treatments for schizophrenia and depression." }
          ]
        },
        {
          id: "s4-glu-synth",
          title: "Glutamate: the master switch and its recycling",
          pages: "96–97",
          blocks: [
            { type: "p", text: "Glutamate is the **major excitatory neurotransmitter** of the CNS. Because it can excite virtually every neuron, it is sometimes called the brain’s **“master switch.”** Most glutamate is used not as a neurotransmitter but as an **amino acid building block** for proteins. Neurotransmitter glutamate is made from **glutamine** with the help of **glia**, which also recycle it." },
            { type: "flow", vertical: true, title: "Figure 4-20: the glutamate–glutamine cycle", steps: [
              ["Release", "Glutamate is released from vesicles and acts at its receptors", "found"],
              ["Uptake into glia", "**Excitatory amino acid transporters (EAATs)** carry it into glia; neuronal EAATs matter less for recycling", "mech"],
              ["Glutamine synthetase", "Converts glutamate to **glutamine** in glia, perhaps to keep it in the neurotransmitter pool rather than the protein pool", "mech"],
              ["Out of glia", "Glutamine leaves by **reverse transport** on a glial **SNAT** (specific neutral amino acid transporter); a glial **ASC-T** may also export it", "drug"],
              ["Into the neuron", "A neuronal **SNAT** takes glutamine up (inward, reuptake mode)", "drug"],
              ["Glutaminase", "A mitochondrial enzyme converts glutamine back to **glutamate**", "mech"],
              ["Vesicle", "**vGluT** packages glutamate for release", "clin"]
            ] },
            { type: "callout", kind: "key", title: "No enzyme ends glutamate’s signal", text: "Unlike other neurotransmitter systems, glutamate’s action is stopped **not by enzymatic breakdown** but by **removal via EAATs** on neurons or glia, after which the cycle begins again." }
          ]
        },
        {
          id: "s4-cotransmitters",
          title: "NMDA cotransmitters: glycine and D-serine",
          pages: "97–99",
          blocks: [
            { type: "p", text: "Glutamate systems are curious: the **NMDA** receptor needs a **cotransmitter** as well as glutamate, either the amino acid **glycine** or its close relative **D-serine** (Figures 4-21 and 4-22)." },
            { type: "h", text: "Glycine" },
            { type: "list", items: [
              "Glutamate neurons are **not known to make glycine**; they get it from glycine neurons or from glia.",
              "**Glycine neurons** contribute little: most of their glycine is taken back up by the **type 2 glycine transporter (GlyT2)** before it can diffuse to glutamate synapses.",
              "**Glia** are the main source. Glycine enters glia via **GlyT1** or a glial **SNAT**, or is made in glia from **L-serine** (imported by the **L-serine transporter, L-SER-T**) by **serine hydroxymethyl-transferase (SHMT)**, an enzyme that runs in both directions.",
              "Glycine is not known to be stored in glial vesicles; it escapes into the synapse on a **reversed GlyT1**.",
              "Inward **GlyT1** reuptake into glia is the **main mechanism terminating** synaptic glycine. GlyT1 is probably also on glutamate neurons, though their role is not well characterized."
            ] },
            { type: "h", text: "D-serine" },
            { type: "list", items: [
              "An unusual **D-amino acid**; the natural amino acids, including its mirror image **L-serine**, are L-forms.",
              "Has **high affinity for the glycine site** on NMDA receptors.",
              "Made in glia from L-serine by **D-serine racemase**, which interconverts D- and L-serine. L-serine comes via L-SER-T or from glycine via SHMT.",
              "May be stored in some kind of glial vesicle and released on a **reversed glial D-serine transporter (D-SER-T)**.",
              "Its action ends by **reuptake** via inward D-SER-T and by **D-amino acid oxidase (DAO)**, which converts it to inactive **hydroxypyruvate**.",
              "The brain also makes a **D-amino acid oxidase activator (DAOA)**, one of the schizophrenia susceptibility genes discussed later."
            ] },
            { type: "update", year: "2025", title: "GlyT1 inhibition fails in phase III", text: "Raising synaptic glycine by blocking GlyT1 was a long-standing strategy for schizophrenia. The GlyT1 inhibitor **iclepertin** did not meet its primary or key secondary endpoints for cognitive impairment associated with schizophrenia in the phase III CONNEX program.", source: "Boehringer Ingelheim, January 2025" }
          ]
        },
        {
          id: "s4-glu-receptors",
          title: "Glutamate receptors",
          pages: "99–102",
          blocks: [
            { type: "p", text: "Glutamate’s receptors include its transporters (**EAAT** and **vGluT**), **metabotropic** (G-protein-linked) receptors and three **ionotropic** (ligand-gated) receptors (Figure 4-23)." },
            { type: "table", caption: "Table 4-2: glutamate receptors", head: ["Class", "Subtypes / subunits", "Location and action"], rows: [
              "Metabotropic (G-protein-linked)",
              ["**Group I**", "mGluR1, mGluR5", "Mainly **postsynaptic**; hypothetically strengthen ionotropic responses during excitatory transmission"],
              ["**Group II**", "mGluR2, mGluR3", "Can be **presynaptic autoreceptors** that **block glutamate release** (Figure 4-24); agonists may reduce release"],
              ["**Group III**", "mGluR4, mGluR6, mGluR7, mGluR8", "Also **presynaptic autoreceptors** reducing release"],
              "Ionotropic (ligand-gated; ion-channel-linked)",
              ["**AMPA**", "GluR1–4", "Agonists glutamate, AMPA. Fast excitation via **sodium** entry; sustained glutamate desensitizes"],
              ["**Kainate**", "GluR5–7, KA1, KA2", "Agonists glutamate, kainate. Fast excitation"],
              ["**NMDA**", "NR1, NR2A–D", "Agonists glutamate, aspartate, NMDA; antagonists **MK801, ketamine, PCP**. Calcium channel"]
            ], note: "There are at least eight metabotropic subtypes in three groups. Each ionotropic receptor is named after the agonist that selectively binds it." },
            { type: "h", text: "The NMDA receptor as a coincidence detector" },
            { type: "p", text: "At rest, **magnesium** plugs the NMDA calcium channel and acts as a **negative allosteric modulator** (Figure 4-26). The channel opens to admit calcium only when **three things coincide** (Figures 4-26 and 4-27):" },
            { type: "steps", items: [
              ["Glutamate is bound", " to its site on the NMDA receptor."],
              ["Glycine or D-serine is bound", " to the cotransmitter site."],
              ["The membrane is depolarized", ", usually by neighboring **AMPA** receptors admitting sodium, which pops the **magnesium plug** out."]
            ] },
            { type: "p", text: "Calcium entry through NMDA receptors triggers important signals, including **long-term potentiation (LTP)** and synaptic plasticity, which may underlie long-term learning and synaptogenesis (and return when the causes of schizophrenia are discussed)." },
            { type: "callout", kind: "mnemonic", title: "Two keys and a push", text: "The NMDA channel needs **two keys** (glutamate and glycine/D-serine) and a **push** (depolarization to remove Mg²⁺). Missing any one, it stays shut." }
          ]
        },
        {
          id: "s4-glu-pathways",
          title: "Seven key glutamate pathways",
          pages: "102–105",
          blocks: [
            { type: "p", text: "Glutamate can excite nearly any neuron, but about half a dozen specific pathways matter most for psychopharmacology and schizophrenia (Figure 4-28)." },
            { type: "table", caption: "Figure 4-28: glutamate pathways", head: ["", "Pathway", "Course and function"], rows: [
              ["a", "**Cortico-brainstem**", "Prefrontal pyramidal neurons → **raphe** (5HT), **VTA and substantia nigra** (DA), **locus coeruleus** (NE). A key regulator of monoamine release: **direct** innervation **stimulates** release; **indirect** innervation through brainstem **GABA interneurons** **inhibits** it"],
              ["b", "**Cortico-striatal**", "Prefrontal cortex → striatal complex, ending on GABA neurons that project to the **globus pallidus**"],
              ["c", "**Hippocampal-accumbens**", "Ventral hippocampus → **nucleus accumbens**, also ending on GABA neurons that project to the globus pallidus; specifically linked to schizophrenia"],
              ["d", "**Thalamo-cortical**", "Thalamus → cortex, often carrying **sensory** information"],
              ["e", "**Cortico-thalamic**", "Prefrontal cortex → thalamus; may direct how neurons react to sensory information"],
              ["f", "**Direct cortico-cortical**", "Pyramidal neurons **excite** each other with glutamate"],
              ["g", "**Indirect cortico-cortical**", "One pyramidal neuron **inhibits** another via a **GABA interneuron**: the site of the NMDA hypofunction hypothesis"]
            ] },
            { type: "callout", kind: "exam", title: "Know pathway (a) and (g)", text: "The **cortico-brainstem** pathway is how prefrontal glutamate controls dopamine (and serotonin and norepinephrine) release, and the **indirect cortico-cortical** pathway through GABA interneurons is where NMDA hypofunction hypothetically starts. Together they link the glutamate and dopamine hypotheses." }
          ]
        },
        {
          id: "s4-nmda-hypo",
          title: "NMDA hypofunction at prefrontal GABA interneurons",
          pages: "105–110",
          blocks: [
            { type: "p", text: "NMDA receptors are everywhere, but the hypothesis places the fault at one site: glutamate synapses onto certain **GABA interneurons in the prefrontal cortex** (pathway g; Figure 4-29)." },
            { type: "flow", title: "Figure 4-29A: the normal circuit", steps: [
              ["Glutamate", "A pyramidal neuron excites a GABA interneuron through its **NMDA** receptor", "drug"],
              ["GABA", "The interneuron releases GABA onto **α2-subunit GABA-A** receptors on the **axon (initial segment)** of a second pyramidal neuron", "mech"],
              ["Inhibition", "The second pyramidal neuron is held in check: cortical glutamate output stays **normal**", "clin"]
            ] },
            { type: "flow", title: "Figure 4-29B: hypofunctional NMDA receptors", steps: [
              ["NMDA hypofunction", "From **neurodevelopment** (schizophrenia, 1A) or **drug toxicity** (ketamine/PCP, 1B)", "drug"],
              ["Less GABA", "The interneuron fails to release GABA onto the α2 GABA-A receptors", "mech"],
              ["Disinhibition", "The pyramidal neuron becomes **overactive**, releasing **excess glutamate** downstream", "upd"]
            ] },
            { type: "list", title: "Other GABA interneuron problems in schizophrenia", items: [
              "Reduced activity of **GAD67** (glutamic acid decarboxylase), the enzyme that makes the interneuron’s own GABA.",
              "A **compensatory increase** in postsynaptic **α2-containing GABA-A receptors** at the pyramidal neuron’s axon initial segment."
            ] },
            { type: "h", text: "Three routes to the same dysconnectivity" },
            { type: "table", head: ["Cause", "How NMDA signaling at the interneuron fails", "Course"], rows: [
              ["**Schizophrenia**", "Genetically and environmentally programmed **neurodevelopmental** abnormality", "Lasting"],
              ["**Ketamine/PCP**", "Both block NMDA receptors **inside the ion channel** (the **PCP site**, open-channel conformation; Figure 4-30) at the same interneuron sites", "**Acute and reversible**"],
              ["**Dementia**", "Plaques, tangles, Lewy bodies and strokes destroy **some** pyramidal neurons and interneurons while sparing others (Figure 4-29C)", "Progressive"]
            ] },
            { type: "p", text: "Ketamine and PCP produce a psychosis sharing features with schizophrenia (Table 4-1). In dementia, **up to half** of patients may experience psychosis at some point (Chapter 12). Why only some? Hypothetically, psychosis appears only when neurodegeneration knocks out GABA interneurons and some pyramidal neurons but **leaves intact** the glutamate neurons that **drive dopamine neurons downstream**." }
          ]
        },
        {
          id: "s4-glu-da",
          title: "Linking NMDA hypofunction to dopamine",
          pages: "110–111",
          blocks: [
            { type: "p", text: "The short answer to what NMDA hypofunction does to dopamine: it produces the **same dopamine hyperactivity** proposed by the dopamine hypothesis. Disinhibited glutamate neurons that directly innervate **VTA/mesostriatal** dopamine neurons drive **too much dopamine release** (Figures 4-31 to 4-34)." },
            { type: "compare", items: [
              { title: "Positive symptoms (Figures 4-31 to 4-34)", color: "upd", points: ["Disinhibited **cortico-brainstem** glutamate neurons **directly** excite **mesolimbic/mesostriatal** dopamine neurons", "Result: **excess dopamine** in the nucleus accumbens", "**Hippocampal** route (Figure 4-32): excess glutamate in the accumbens → GABA to globus pallidus ↑ → pallidal GABA to VTA ↓ → dopamine neurons **disinhibited**", "In dementia, excess glutamate in the **visual cortex** may add **visual hallucinations** (Figure 4-34)"] },
              { title: "Negative symptoms (Figure 4-35)", color: "mech", points: ["A second population of glutamate neurons projects to **mesocortical** dopamine neurons", "These synapse first on a **VTA GABA interneuron** (hypothetically absent for mesostriatal neurons)", "Glutamate excess → more GABA → **less dopamine** to prefrontal cortex", "Result: **negative, cognitive and affective** symptoms"] }
            ] },
            { type: "callout", kind: "key", title: "One upstream fault, two downstream errors", text: "NMDA hypofunction can hypothetically explain **both** halves of the dopamine picture in schizophrenia: **mesostriatal excess** (positive) and **mesocortical deficit** (negative, cognitive, affective). The difference is whether a **GABA interneuron** sits between the glutamate neuron and the dopamine neuron in the VTA." }
          ]
        }
      ]
    },
    {
      title: "The serotonin network",
      sections: [
        {
          id: "s4-5ht-hyp",
          title: "The serotonin hypothesis",
          pages: "111–113",
          blocks: [
            { type: "p", text: "The serotonin theory proposes that **hyperactivity or imbalance** of serotonin (5-hydroxytryptamine, 5HT), particularly at **5HT2A** receptors, can cause psychosis. Disrupted 5HT function can hypothetically arise from:" },
            { type: "list", items: [
              "**Neurodevelopmental** abnormalities in **schizophrenia**",
              "**Neurodegeneration** in **Parkinson’s disease**, **Alzheimer disease** and other dementias",
              "Hallucinogens: **LSD, mescaline and psilocybin**"
            ] },
            { type: "callout", kind: "exam", title: "Visual versus auditory", text: "Psychoses tied to **serotonin** imbalance tend to bring more **visual** hallucinations; those tied mainly to **dopamine** bring more **auditory** hallucinations." },
            { type: "p", text: "Serotonin regulates one of the networks most targeted by psychotropic drugs: many if not most drugs for psychosis and mood act on it in some way. Its receptors and pathways are reviewed next." }
          ]
        },
        {
          id: "s4-5ht-synth",
          title: "Serotonin synthesis and termination",
          pages: "113–115",
          blocks: [
            { type: "flow", title: "Figure 4-36: making serotonin", steps: [
              ["Tryptophan", "Transported from plasma into the brain as the precursor", "found"],
              ["5HTP", "**Tryptophan hydroxylase (TRY-OH)** makes 5-hydroxytryptophan", "mech"],
              ["5HT", "**Aromatic amino acid decarboxylase (AAADC)** makes serotonin", "mech"],
              ["Vesicle", "Stored by **VMAT2** until released", "drug"]
            ] },
            { type: "table", caption: "Figure 4-37: how serotonin’s action ends", head: ["Mechanism", "Notes"], rows: [
              ["**SERT** (serotonin transporter)", "Unique for 5HT; pumps it back into the terminal for re-storage. **All** 5HT neurons are thought to have SERTs, unlike dopamine neurons, some of which lack DAT"],
              ["**MAO** (MAO-B in 5HT neurons)", "Converts 5HT to an inactive metabolite. Serotonergic **MAO-B has low affinity** for 5HT, so it degrades 5HT only when intracellular concentrations are high"]
            ] },
            { type: "callout", kind: "pearl", title: "SERT polymorphisms", text: "Functional **polymorphisms** in the SERT gene change synaptic serotonin and may help predict which patients respond less well, or have more side effects, with SERT-blocking drugs for depression (Chapter 7)." }
          ]
        },
        {
          id: "s4-5ht-pre",
          title: "Presynaptic serotonin receptors",
          pages: "115–119",
          blocks: [
            { type: "p", text: "Serotonin has **more than a dozen** receptors, at least half clinically relevant (Figure 4-38). Only a few sit on the serotonin neuron itself (**5HT1A, 5HT1B/D, 5HT2B**) to regulate its firing, release and storage, though these, like all 5HT receptors, can also be postsynaptic." },
            { type: "callout", kind: "pearl", title: "Different receptors at each end", text: "Dopamine and norepinephrine neurons carry the **same** autoreceptors at both ends. The serotonin neuron is different: **5HT1B/D** at the **axon terminal**, but **5HT1A and 5HT2B** on the **soma and dendrites**." },
            { type: "table", caption: "Serotonin autoreceptors (Figures 4-39 to 4-41)", head: ["Receptor", "Location", "Effect", "Clinical note"], rows: [
              ["**5HT1A**", "Somatodendritic (midbrain raphe)", "**Negative feedback**: dendritically released 5HT slows impulse flow and reduces release from the terminal", "**Downregulation and desensitization** of these receptors is thought critical to antidepressant action of reuptake blockers (Chapter 7)"],
              ["**5HT2B**", "Somatodendritic", "**Feed-forward**: activates the neuron, increasing impulse flow and release", "Recently discovered; opposes 5HT1A. Which raphe neurons carry which receptor is still unclear"],
              ["**5HT1B/D**", "**Axon terminal** (“terminal autoreceptor”)", "Negative feedback: 5HT in the synapse **blocks further release**", "—"]
            ] },
            { type: "callout", kind: "key", title: "A balance at the cell body", text: "The balance between somatodendritic **5HT1A** (brake) and **5HT2B** (accelerator) actions likely sets how much serotonin is released at terminals throughout the brain. How dendrites release serotonin is still not fully understood." }
          ]
        },
        {
          id: "s4-5ht-network",
          title: "Neurotransmitter networks: how serotonin regulates everything else",
          pages: "119–122",
          blocks: [
            { type: "p", text: "Each neurotransmitter controls its own synthesis and release presynaptically, and also controls **other** neurotransmitters through postsynaptic actions in brain circuits. Neurotransmitters act **trans-synaptically**, not only synaptically." },
            { type: "callout", kind: "analogy", title: "Out of tune", text: "Stahl suggests that when neural networks process information **inefficiently** (“out of tune”), this partly mediates the symptoms of mental illness; drugs acting at receptor subtypes may **“tune”** these networks. He presents this as the next step beyond the dated idea of simple **“chemical imbalances”** at synapses, while urging humility (quoting Ambrose Bierce’s satirical definition of the mind as matter trying to understand itself with nothing but itself)." },
            { type: "p", text: "Serotonin projects from the **dorsal and median raphe** to cortex and to the cell-body regions of other transmitters: **locus coeruleus** (NE), **VTA** (DA), **tuberomammillary nucleus** (histamine) and **basal forebrain** (ACh) (Figure 4-43). Through these it modulates itself and directly or indirectly influences virtually every other network, which is why it regulates mood, sleep and appetite and is implicated in many disorders." },
            { type: "list", title: "What decides serotonin’s net effect at a site", items: [
              "Which **receptor subtype** it acts at (excitatory or inhibitory)",
              "Whether the receiving neuron releases **glutamate** (excitatory) or **GABA** (inhibitory)",
              "Whether the receptor is **expressed** there and how **densely**",
              "The receptor’s **sensitivity** to serotonin (some respond to low levels)",
              "How much serotonin is released and the neuron’s **firing rate**",
              "Whether the action is **direct** (e.g., on a glutamate neuron) or **indirect** (via a GABA interneuron that innervates the glutamate neuron)"
            ] },
            { type: "p", text: "Most 5HT receptor subtypes are **postsynaptic heteroreceptors** on neurons that release other transmitters. On glutamate pyramidal neurons, serotonin is excitatory at **5HT2A, 2C, 4, 6 and 7** and inhibitory at **5HT1A, 5HT5** and possibly postsynaptic **5HT1B** (Figure 4-42). With receptors on both pyramidal neurons and interneurons, serotonin seems to **tune glutamate output** and keep it in balance." },
            { type: "callout", kind: "pearl", title: "Why combinations can add or cancel", text: "Network organization explains why a drug acting first at one receptor can have profound net effects on many transmitters, and why giving drugs with two or more mechanisms (or two agents) can be **additive/synergistic** or **canceling/antagonistic**, for efficacy and for side effects." }
          ]
        },
        {
          id: "s4-5ht-post",
          title: "Postsynaptic serotonin receptors, one by one",
          pages: "122–131",
          blocks: [
            { type: "defs", items: [
              ["Heteroreceptor", "A receptor for a neurotransmitter other than the one the neuron itself uses (literally, “other receptor”), e.g., 5HT1B receptors on dopamine terminals."]
            ] },
            { type: "callout", kind: "key", title: "The interneuron rule", text: "A receptor’s own sign (excitatory or inhibitory) is only half the story. A receptor on a **GABA interneuron** flips the sign downstream: an **inhibitory** receptor there (5HT1A) **disinhibits** downstream release, and an **excitatory** receptor there (5HT2C, 5HT3, 5HT7) **inhibits** it." },
            { type: "table", wide: true, caption: "Postsynaptic 5HT receptors and their downstream effects (Figures 4-44 to 4-51)", head: ["Receptor", "Own sign", "Where", "Net downstream effect", "Drug relevance in the book"], rows: [
              ["**5HT1A**", "Always **inhibitory**", "Often on **prefrontal GABA interneurons**", "Reduces GABA → **increases NE, DA and ACh** release (net excitatory)", "Many drugs for psychosis, mood and anxiety are **5HT1A agonists or partial agonists**"],
              ["**5HT1B**", "Inhibitory", "Heteroreceptors on **NE, DA, HA and ACh** terminals in prefrontal cortex", "**Inhibits** release of those four", "A few **5HT1B antagonists** that may boost them treat depression (Chapter 7)"],
              ["**5HT2A**", "Always **excitatory**", "**Apical dendrites of glutamate** neurons, and **GABA interneurons**", "**Increases** glutamate release (on pyramidal neurons) or **decreases** it (via interneurons); net effect depends on density and local 5HT", "**5HT2A antagonists** treat psychosis and mood (Chapters 5, 7); most **hallucinogens are 5HT2A agonists** (Chapter 13)"],
              ["**5HT2C**", "Excitatory", "Mostly on **GABA interneurons**", "Net **inhibition**, e.g., **less NE and DA** in prefrontal cortex", "**Agonists** treat **obesity**; **antagonists** treat psychosis and mood disorders"],
              ["**5HT3**", "Excitatory (ion channel)", "**Chemoreceptor trigger zone** outside the blood–brain barrier; in cortex on **non-parvalbumin** GABA interneurons (regular-, late-spiking or bursting)", "Nausea and vomiting centrally; in cortex **inhibits ACh and NE** release and **reduces glutamate** output, which also weakens glutamate’s excitation of raphe 5HT neurons", "**5HT3 antagonists**, including some antidepressants, should **enhance ACh and NE** release (Chapter 7)"],
              ["**5HT6**", "—", "Postsynaptic", "May be a key regulator of **ACh** release and **cognition**", "Blockade improves learning and memory in animals: **5HT6 antagonists** proposed as **pro-cognitive** agents (schizophrenia, Alzheimer disease)"],
              ["**5HT7**", "Excitatory", "Cortical **GABA interneurons** on pyramidal apical dendrites; raphe GABA neurons fed by a **recurrent collateral**", "**Inhibits glutamate** release in cortex; when 5HT is high, **inhibits further 5HT release** in the raphe", "**5HT7 antagonists** treat psychosis and mood (Chapter 7)"]
            ] },
            { type: "callout", kind: "pearl", title: "Reciprocal regulation", text: "The 5HT3 circuit shows serotonin reducing glutamate release and glutamate, in turn, normally exciting serotonin neurons in the raphe. When serotonin damps prefrontal glutamate, it also damps the feedback that would drive more serotonin release: neurotransmitters regulate **each other**." },
            { type: "callout", kind: "mnemonic", title: "Receptors that ride on GABA interneurons", text: "**1A, 2C, 3, 7** are frequently on GABA interneurons. **1A** (inhibitory) → downstream **up**; **2C, 3, 7** (excitatory) → downstream **down**. 5HT2A is the two-faced one, on both pyramidal neurons and interneurons." }
          ]
        },
        {
          id: "s4-5ht-hyper",
          title: "The serotonin hyperfunction hypothesis",
          pages: "131–141",
          blocks: [
            { type: "p", text: "The dopamine hypothesis created a dilemma for patients with psychosis in **Parkinson’s disease** or **Alzheimer disease**: D2 blockers **worsen movement** in Parkinson’s disease and **increase stroke and death** risk in Alzheimer disease. Dogma once said all psychosis came from mesolimbic dopamine and all treatment must block D2, which left these patients with only relatively contraindicated drugs." },
            { type: "p", text: "The serotonin hypothesis proposes that psychosis can come from an **imbalance in excitatory 5HT2A stimulation** of the glutamate pyramidal neurons that directly innervate **VTA/mesostriatal** dopamine neurons and **visual cortex** neurons (Figures 4-52 to 4-55)." },
            { type: "table", wide: true, caption: "Three routes to 5HT2A-driven psychosis", head: ["Condition", "What goes wrong", "Evidence and treatment"], rows: [
              ["**Hallucinogens** (LSD, psilocybin, mescaline)", "Powerful **5HT2A agonists** overstimulate prefrontal and visual cortex 5HT2A receptors", "Psychosis, dissociation and especially **visual hallucinations**; **blocked by 5HT2A antagonists**, showing the mechanism"],
              ["**Parkinson’s disease psychosis (PDP)**", "Loss of nigrostriatal dopamine (motor symptoms) **and** of **serotonin terminals** in prefrontal and visual cortex → **upregulated 5HT2A** receptors; normal or even low 5HT now **overstimulates** them", "Postmortem and imaging evidence; **5HT2A antagonists** block PDP symptoms (Chapter 5)"],
              ["**Dementia-related psychosis**", "**No consistent 5HT2A upregulation**. Plaques, tangles, Lewy bodies and strokes remove **GABA inhibition** of surviving glutamate neurons, so **normal** 5HT2A stimulation is **unopposed**", "**Selective 5HT2A antagonism** reduces dementia-related psychosis, presumably by rebalancing surviving neurons (Chapters 5 and 12)"]
            ] },
            { type: "p", text: "PDP affects **up to half** of Parkinson’s patients, especially later in the illness. In every route, the excess glutamate reaching the **VTA** drives mesolimbic dopamine (delusions, **auditory** hallucinations), and excess glutamate in the **visual cortex** produces **visual** hallucinations." },
            { type: "update", year: "2022", title: "5HT2A antagonism in dementia: regulatory setbacks", text: "The selective 5HT2A inverse agonist **pimavanserin**, approved for Parkinson’s disease psychosis since 2016, was **not approved** for the broader indication of dementia-related psychosis (FDA complete response letter, April 2021). A narrower application for hallucinations and delusions of **Alzheimer disease psychosis** was also declined (complete response letter, August 2022) after an FDA advisory committee voted 9–3 that efficacy had not been shown.", source: "FDA actions reported April 2021 and August 4, 2022" }
          ]
        },
        {
          id: "s4-5ht-da",
          title: "Linking serotonin to dopamine, and the three hypotheses together",
          pages: "141",
          blocks: [
            { type: "p", text: "Excessive or imbalanced 5HT2A stimulation of pyramidal neurons leads to the **same downstream dopamine hyperactivity** as the dopamine and NMDA hypotheses. Glutamate neurons that lose their **serotonin input** (Parkinson’s disease) or their **GABA inhibition** (neurodegeneration of any cause) become hyperactive and drive too much mesostriatal dopamine release, just as in schizophrenia." },
            { type: "flow", title: "Three interconnected nodes linked to hallucinations and delusions", steps: [
              ["5HT2A excess", "Serotonin hyperactivity or imbalance at **5HT2A** receptors on cortical glutamate neurons", "clin"],
              ["NMDA deficit", "**NMDA** hypoactivity at prefrontal **GABA interneurons**, losing GABA inhibition", "drug"],
              ["D2 excess", "Dopamine hyperactivity at **D2** receptors in the **VTA/mesostriatal hub → ventral striatum** pathway", "mech"]
            ], note: "Both 5HT2A and NMDA actions can result in downstream mesolimbic dopamine hyperactivity. Targeting **any node** of this circuit could theoretically treat psychosis of many causes." },
            { type: "p", text: "These maps are collected on the [[page:circuits|Symptoms & circuits]] page." }
          ]
        }
      ]
    },
    {
      title: "Schizophrenia",
      sections: [
        {
          id: "s4-scz",
          title: "The prototypical psychotic disorder",
          pages: "141–143",
          blocks: [
            { type: "p", text: "Schizophrenia is the prototype because it is the **most common** and best known psychotic disorder. It affects about **1%** of people worldwide, begins in **adolescence or early adulthood**, runs a **chronic** course with lifelong disability, shortens life by **25–30 years**, carries a mortality **three to four times** that of the general population, and **5%** of patients complete suicide. Treatments improve symptoms but do not return most patients to normal functioning." },
            { type: "p", text: "By definition the disturbance lasts **6 months or longer**, including **at least 1 month** of positive symptoms (delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior) or negative symptoms." },
            { type: "compare", items: [
              { title: "Positive symptoms (Table 4-3)", color: "upd", points: ["An **excess or distortion** of normal function", "Delusions; hallucinations; distorted or exaggerated language and communication; **disorganized speech**; **disorganized behavior**; **catatonic behavior**; **agitation**", "Dramatic, can erupt in a psychotic **“break”**, bring patients to clinical and legal attention", "**Most effectively treated** by medication and the main drug target"] },
              { title: "Negative symptoms (Table 4-4)", color: "mech", points: ["A **reduction** of normal function", "Blunted affect; emotional withdrawal; poor rapport; passivity; apathetic social withdrawal; difficulty in abstract thinking; lack of spontaneity; stereotyped thinking; alogia; avolition; anhedonia; attentional impairment", "Linked to long hospitalizations and **poor social functioning**", "Can begin in the **prodrome** and persist between episodes"] }
            ] },
            { type: "p", text: "Delusions usually misinterpret perceptions or experiences; the commonest theme is **persecutory**, but **referential** (wrongly believing things refer to oneself), somatic, religious and grandiose themes occur. Hallucinations can involve any sense, but **auditory** hallucinations are by far the most common and characteristic." },
            { type: "table", caption: "Table 4-5: the five A’s of negative symptoms", head: ["Domain", "Term", "In plain terms"], rows: [
              ["Communication", "**Alogia**", "Poverty of speech: talks little, few words"],
              ["Affect", "**Affective blunting** (flattening)", "Reduced range and intensity of emotion: feels numb or empty, recalls few emotional experiences"],
              ["Socialization", "**Asociality**", "Reduced social drive: few friends, little sexual interest, little time with others"],
              ["Pleasure", "**Anhedonia**", "Reduced ability to experience pleasure: old hobbies no longer enjoyable"],
              ["Motivation", "**Avolition**", "Reduced desire and persistence: trouble starting and finishing daily tasks; poor hygiene"]
            ] },
            { type: "compare", title: "Spotting negative symptoms quickly (Figures 4-57 and 4-58)", items: [
              { title: "By observation alone", color: "guide", points: ["**Reduced speech** (few words, nonverbal answers, empty content)", "**Poor grooming** and hygiene", "**Limited eye contact**"] },
              { title: "With some questioning", color: "hy", points: ["**Reduced emotional responsiveness**", "**Reduced interest** in hobbies and life goals", "**Reduced social drive** and few close relationships"] }
            ] },
            { type: "callout", kind: "caution", title: "Hard to tell apart", text: "Negative symptoms overlap with **cognitive** symptoms, **affective** symptoms (especially depression) and **side effects** of drugs for psychosis (Chapter 5). Rating scales separate them in research; in practice, quick observation and simple questions are usually enough to monitor negative symptoms." }
          ]
        },
        {
          id: "s4-five",
          title: "Beyond positive and negative: five symptom dimensions",
          pages: "143–145",
          blocks: [
            { type: "p", text: "Though not formal diagnostic criteria, many studies divide schizophrenia into **five dimensions**, each hypothetically mediated by its own brain region (Figure 4-59)." },
            { type: "table", caption: "Figure 4-59: match each symptom domain to a circuit", head: ["Dimension", "Hypothetically malfunctioning region"], rows: [
              ["**Positive**", "**Mesolimbic** pathway (nucleus accumbens/striatum)"],
              ["**Negative**", "**Mesocortical/prefrontal cortex** and **nucleus accumbens reward** circuits"],
              ["**Cognitive**", "**Dorsolateral prefrontal cortex (DLPFC)**"],
              ["**Affective**", "**Ventromedial prefrontal cortex (VMPFC)**"],
              ["**Aggressive**", "**Orbitofrontal cortex**"]
            ] },
            { type: "h", text: "Cognitive symptoms" },
            { type: "p", text: "Impaired attention and information processing: poor **verbal fluency** (spontaneous speech), problems with **serial learning** (lists or sequences), and impaired **vigilance for executive functioning**. They are present **before** the first psychosis as **lower-than-expected IQ**, worsen in the **prodrome**, and keep worsening over the illness." },
            { type: "list", title: "Table 4-6: cognitive symptoms of schizophrenia", cols: 2, items: ["Representing and maintaining goals", "Allocating attentional resources", "Focusing attention", "Sustaining attention", "Evaluating functions", "Monitoring performance", "Prioritizing", "Modulating behavior by social cues", "Serial learning", "Verbal fluency", "Problem solving"] },
            { type: "callout", kind: "exam", title: "Executive, not amnestic", text: "Schizophrenia’s cognitive symptoms are **executive dysfunction**, not the **short-term memory** disturbance typical of dementia." },
            { type: "h", text: "Affective symptoms" },
            { type: "p", text: "Depressed or anxious mood, guilt, tension, irritability and worry often accompany schizophrenia without meeting criteria for a comorbid disorder. They also feature in many other conditions, and depressed mood, anhedonia and low motivation can be hard to separate from negative symptoms." },
            { type: "callout", kind: "pearl", title: "Treat affective symptoms", text: "There is **no drug for schizophrenia itself**, only for its symptoms. When affective symptoms persist despite drugs for positive symptoms, adding treatments for anxiety or depression (e.g., **SSRIs**) can relieve them and help **prevent suicide**, even below full criteria. These treatments help **little if at all** for **true negative symptoms**." }
          ]
        },
        {
          id: "s4-aggression",
          title: "Aggression, agitation and violence",
          pages: "145–148",
          blocks: [
            { type: "defs", items: [
              ["Aggression", "Tends to mean **intentional harm**: hostility, assault, frank violence, verbal abuse, sexual acting out, self-injury including suicide, arson and property damage."],
              ["Agitation", "A more **nonspecific, often nondirected** state of heightened psychomotor or verbal activity with unpleasant tension and irritability."]
            ] },
            { type: "p", text: "In schizophrenia both often accompany **uncontrolled positive symptoms** and improve when drugs reduce them. In **dementia**, agitation and aggression must be distinguished from psychosis because **treatments for dementia-related agitation are evolving separately** from those for dementia-related psychosis and from schizophrenia treatments (Chapters 5 and 12). Aggression also occurs in bipolar disorder, childhood psychosis, borderline and antisocial personality disorders, substance abuse, ADHD and conduct disorder." },
            { type: "callout", kind: "key", title: "Violence: stigma versus data", text: "The image of schizophrenia patients as frequent violent perpetrators (for example, of mass shootings) is an exaggeration that feeds stigma. **Most patients are not violent**, and they are **more likely to be victims** than perpetrators. Some studies find a modestly raised rate, often linked to **inadequate treatment** and **substance abuse**." },
            { type: "list", title: "Criminalization of serious mental illness in the US", items: [
              "The largest “mental health facilities” are now jails: the **Los Angeles County Jail** twin towers, **Rikers Island** (New York City) and the **Cook County** jail (Chicago).",
              "Up to **a quarter** of the roughly **2 million** US inmates have serious mental illness; correctional treatment is widely regarded as substandard and the setting is itself countertherapeutic.",
              "In California, felony defendants found incompetent to stand trial with **15 or more prior arrests** are increasing; **half** had no reimbursable mental health care in the prior 6 months and **half** were unsheltered.",
              "Stahl estimates perhaps **10%** of California’s schizophrenia patients are in jail or prison, and about **1%** in the five state forensic hospitals.",
              "**Diversion** programs modeled on one in **Miami** send patients to treatment with housing instead of jail."
            ] },
            { type: "list", title: "Violence in state forensic hospitals", items: [
              "Only about **a third** of patients commit a violent act during hospitalization, usually a **single event** within the **first 120 days**.",
              "About **3%** of patients commit about **40%** of the violence, roughly half against staff and half against other patients.",
              "Violence there is associated with **criminogenic risk** (institutionalization), not mainly with positive symptoms.",
              "The most difficult **frequent aggressors** have a psychotic illness, show psychotic or impulsive (not organized) violence, and have **cognitive deficits** beyond those usual in schizophrenia."
            ] },
            { type: "table", caption: "Figure 4-60: three types of violence in institutional settings", head: ["Type", "Share", "Features", "Management in the book"], rows: [
              ["**Impulsive**", "**54%** (most common)", "Reactive, affective or hostile aggression: **high autonomic arousal**, provoked, response to perceived stress, anger or fear (“hot-blooded”)", "Treat the psychotic illness; **behavioral** interventions that reduce provocations; **clozapine** or high doses may help"],
              ["**Organized (psychopathic)**", "**29%**", "Predatory, instrumental, proactive or premeditated: **planned** with clear goals, **no autonomic arousal** (“cold-blooded”); linked to psychopathic or antisocial traits and criminogenic behavior", "May need **confinement** rather than drugs"],
              ["**Psychotic**", "**17%** (least common)", "Driven by positive symptoms, typically **command hallucinations** and/or **delusions**", "Usually responds to treatment of positive symptoms; **clozapine** or high doses may help"]
            ] },
            { type: "callout", kind: "exam", title: "The counterintuitive point", text: "Even among institutionalized psychotic patients, **psychotic violence is the least common** type, presumably because positive symptoms are treated effectively there. Impulsive and organized violence are **less clearly tied to D2 overactivity**." },
            { type: "update", year: "2023", title: "First approved treatment for Alzheimer agitation", text: "In May 2023 the FDA approved **brexpiprazole** (Rexulti) for **agitation associated with dementia due to Alzheimer disease**, the first drug approved in the US for this indication, one of the “evolving” treatments for dementia-related agitation the book anticipates.", source: "FDA, May 10, 2023" }
          ]
        },
        {
          id: "s4-cause",
          title: "What causes schizophrenia? Nature and nurture",
          pages: "148–151",
          blocks: [
            { type: "p", text: "Is schizophrenia genetic or environmental, neurodevelopmental or neurodegenerative? The modern answer may be **“yes,” in part, to all**." },
            { type: "compare", items: [
              { title: "Classic theory (abandoned)", color: "upd", points: ["A **single abnormal gene** → abnormal product → neuronal malfunction → mental illness (Figure 4-61)", "No such gene has been found and none is expected"] },
              { title: "Current theory", color: "clin", points: ["Genes code for **proteins and epigenetic regulators**, not for illnesses, symptoms or personalities", "Many risk genes **“conspire”** with each other and with environmental stressors (Figure 4-62)", "People **inherit risk**, not the illness itself"] }
            ] },
            { type: "p", text: "A portfolio of **a few hundred** genes, each contributing **less than 1%**, may together confer risk. Their functions may involve neurotransmitter systems, synaptogenesis, neuroplasticity, neurodevelopment, cognition, the neurotoxicity of psychosis and stress vulnerability. Summing an individual’s risk variants gives a **polygenic risk score**, yet all known genes together explain only **part** of the risk." },
            { type: "table", caption: "Table 4-7: some candidate susceptibility genes", head: ["Function", "Gene", "Role"], rows: [
              "Glutamate neurotransmission and synaptic plasticity",
              ["", "**GRIA1**", "Ionotropic glutamate receptor for fast synaptic transmission"],
              ["", "**GRIN2A**", "Glutamate-gated ion channel protein; key mediator of synaptic plasticity"],
              ["", "**GRM3**", "Metabotropic glutamate receptor 3; explored as a drug target in schizophrenia"],
              "Calcium channels and signaling",
              ["", "**CACNA1C**", "An α1 subunit of voltage-sensitive calcium channels"],
              ["", "**CACNB2**", "A voltage-sensitive calcium channel"],
              "Neurogenesis",
              ["", "**SOX2**", "Transcription factor essential for neurogenesis"],
              ["", "**SATB2**", "Cognitive development and long-term plasticity"]
            ] },
            { type: "list", title: "Environmental stressors that make up the rest of the risk", items: [
              "**Cannabis** use: across Europe, if nobody used **high-potency cannabis**, about **12%** of first-episode psychosis cases would be prevented (estimated **32%** in **London** and **50%** in **Amsterdam**).",
              "Emotional **trauma**, early childhood **adversity**, **bullying**",
              "**Obstetric** events and **sleep deprivation**",
              "Being a **migrant**: psychosis incidence is higher in cities with many migrants; in London it falls by **one-third** when migrants and their children are excluded."
            ] },
            { type: "p", text: "The environment hypothetically **loads the circuits** where risk genes are expressed so that they fail under pressure, and stressors can make even **normal genes** misbehave by switching them on or off at the wrong time (**epigenetics**, [[ch:ch01|Chapter 1]]). The strongest evidence: only **about half** of identical twins of patients also have schizophrenia." }
          ]
        },
        {
          id: "s4-neurodev",
          title: "Neurodevelopment: making and pruning synapses",
          pages: "151–154",
          blocks: [
            { type: "p", text: "Signs before the first psychotic break (cognitive deficits, lower IQ, oddness, social deficits) suggest something is amiss from birth in how the brain **makes, keeps and revises synapses**." },
            { type: "flow", title: "Figure 4-63: normal neurodevelopment", steps: [
              ["Stem cells", "Differentiate into immature neurons", "found"],
              ["Selection", "Only a minority are kept; the rest die by **apoptosis**", "mech"],
              ["Migration", "Selected neurons migrate", "mech"],
              ["Differentiation", "Into neuronal types; myelination continues after birth", "drug"],
              ["Synaptogenesis", "Synapses form, especially from **birth to age 6**", "clin"],
              ["Competitive elimination", "Restructuring peaks in **puberty and adolescence**", "upd"]
            ] },
            { type: "p", text: "Most neurogenesis, selection and migration happen **before birth**, though some areas form neurons throughout life; differentiation, myelination and synaptogenesis continue lifelong. Faulty neuronal selection could contribute to neurodevelopmental disorders from autism, intellectual disability and schizophrenia at the severe end to **ADHD** and **dyslexia** at the mild-to-moderate end. Key genes include **DISC1** (disrupted in schizophrenia-1), **ErbB4**, **neuregulin**, **dysbindin**, **RGS4**, **DAOA** and **AMPA** receptor genes." },
            { type: "callout", kind: "pearl", title: "Pruning in adolescence", text: "Competitive elimination normally leaves only **half to two-thirds** of childhood synapses in adulthood. Psychotic breaks begin **just after** this peak period, which casts suspicion on abnormal pruning." },
            { type: "h", text: "Strong synapses survive, weak ones are eliminated" },
            { type: "flow", steps: [
              ["Active glutamate synapse", "NMDA receptors trigger **long-term potentiation (LTP)**", "drug"],
              ["Strengthening", "Gene products and neuroplasticity make the synapse more efficient, including **more AMPA receptors**", "mech"],
              ["Survival", "Strong synapses with many AMPA receptors are **kept** during competitive elimination", "clin"]
            ], note: "If genes regulating strengthening are faulty (plus environmental insults), NMDA receptors are hypoactive, LTP is ineffective and fewer AMPA receptors traffic in: a **weak** synapse that may be wrongly eliminated (Figure 4-65)." },
            { type: "callout", kind: "analogy", title: "Fire together, wire together", text: "Frequently used synapses develop frequent LTP and are strengthened, as in the old saying “nerves that **fire together wire together**.”" },
            { type: "callout", kind: "key", title: "Why onset comes in adolescence", text: "Genetically programmed dysconnectivity may be **masked** in childhood by an exuberance of extra weak connections. When normal adolescent pruning removes that compensation, along with **weak but critical** synapses, **schizophrenia emerges**. This is why the onset looks **neurodevelopmental**." }
          ]
        },
        {
          id: "s4-neurodegen",
          title: "Neurodegeneration and the course of illness",
          pages: "154–156",
          blocks: [
            { type: "p", text: "Many patients follow a **progressive, downhill** course, especially with inconsistent treatment and long **duration of untreated psychosis** (Figure 4-66). If adolescent pruning explains a neurodevelopmental onset, the methodical remaking of synapses throughout adult life could explain a **neurodegenerative** long-term course." },
            { type: "callout", kind: "pearl", title: "Synapses keep turning over", text: "In adulthood you may lose, and replace elsewhere, about **7% of cortical synapses every week**. Glutamate synapse strength is **activity-, use- or experience-dependent**: “**use it or lose it**.” In schizophrenia, critical synapses may fail to strengthen even when used, or the wrong synapses may be strengthened while critical ones are lost." },
            { type: "flow", vertical: true, title: "Figure 4-66: course of illness", steps: [
              ["Asymptomatic", "Deficient synapses perhaps laid down in the young brain", "found"],
              ["Prodrome", "Subsyndromal symptoms; cognition and IQ already declining", "hy"],
              ["First-break psychosis", "Synaptic remodeling accelerates; the brain may look grossly normal and **treatment response is often robust**", "mech"],
              ["Repeated episodes", "Often after **stopping medication**: declining treatment response and **progressive brain tissue loss** on imaging", "drug"],
              ["Late stage", "Pervasive **negative and cognitive** symptoms, relative **treatment resistance**, marked degeneration on imaging", "upd"]
            ] },
            { type: "callout", kind: "key", title: "Treat early and continuously", text: "Persistent untreated positive symptoms appear to **hasten tissue loss**. Shortening untreated psychosis may slow progression, and symptom-relieving treatments may be **disease modifying**. Prodromal prevention remains speculative, but **continuous treatment** after onset is the standard of care to reduce deterioration, tissue loss, a **tripling of suicide attempts**, and treatment resistance after repeated relapses." },
            { type: "p", text: "Not every psychosis follows this course. Severe schizophrenia and severe bipolar psychosis are sometimes grouped as **serious mental illness (SMI)**, with outcomes that can include homelessness, premature death and incarceration." },
            { type: "list", title: "The burden of schizophrenia (pp. 155–156)", items: [
              "Over **300,000** acute schizophrenic episodes per year in the US.",
              "**25–50%** of patients attempt suicide and **up to 10%** eventually succeed.",
              "Mortality about **eight times** the general population; life expectancy **20–30 years** shorter, from suicide and premature **cardiovascular disease**.",
              "Cardiovascular risk comes from genetics, smoking, poor diet and inactivity (obesity, diabetes) and, regrettably, **some drugs for psychosis** that raise obesity and diabetes.",
              "Over **20%** of US social security benefit days go to schizophrenia; direct and indirect costs reach tens of billions of dollars a year."
            ] },
            { type: "callout", kind: "caution", title: "The book’s figures do not agree", text: "On p. 141 the book gives **5%** completed suicide, a lifespan **25–30 years** shorter and mortality **three to four times** normal; on pp. 155–156 it gives **up to 10%** suicide, **20–30 years** shorter and **eight times** normal. Know that both sets appear; the take-home message is a dramatically raised mortality from suicide and cardiovascular disease." }
          ]
        }
      ]
    },
    {
      title: "Other psychotic illnesses",
      sections: [
        {
          id: "s4-other",
          title: "Psychosis as a defining or associated feature",
          pages: "156–157",
          blocks: [
            { type: "compare", items: [
              { title: "Psychosis is a defining feature (Table 4-8)", color: "mech", points: ["Schizophrenia", "Substance/medication-induced psychotic disorders", "Schizophreniform disorder", "Schizoaffective disorder", "Delusional disorder", "Brief psychotic disorder", "Shared psychotic disorder", "Psychotic disorder due to another medical condition", "Childhood psychotic disorder"] },
              { title: "Psychosis is an associated feature (Table 4-9)", color: "clin", points: ["Mania", "Depression", "Cognitive disorders", "Alzheimer disease and other dementias", "Parkinson’s disease (PDP)"] }
            ] },
            { type: "p", text: "Schizophrenia’s five symptom dimensions are not unique to it. **Positive** symptoms occur in Parkinson’s disease, bipolar disorder, schizoaffective disorder, psychotic depression, dementias, childhood psychoses and drug-induced psychoses. **Negative** symptoms occur especially in mood disorders and dementias. **Cognitive** symptoms occur in autism, vascular (post-stroke, multi-infarct) dementia, Alzheimer disease, Lewy body and frontotemporal (Pick’s) dementias, and major and bipolar depression." },
            { type: "callout", kind: "key", title: "Mood-related psychosis", text: "Schizophrenia can have affective symptoms and mood disorders can have psychotic symptoms. **Whenever** psychotic symptoms appear they need treatment, and **whenever** affective symptoms appear they need treatment too, partly to **prevent suicide**." }
          ]
        },
        {
          id: "s4-pdp",
          title: "Parkinson’s disease psychosis",
          pages: "157",
          blocks: [
            { type: "p", text: "Parkinson’s motor symptoms are attributed to **Lewy bodies containing α-synuclein** in the substantia nigra. In **over half** of cases, especially with dementia, the illness progresses to delusions and hallucinations: **Parkinson’s disease psychosis (PDP)**. The leading explanation is Lewy body accumulation in the **cerebral cortex** and in **serotonin cell bodies** of the midbrain **raphe**." },
            { type: "callout", kind: "caution", title: "A grave sign", text: "PDP is a major risk factor for hospital admission, nursing-home placement and death: mortality is about **40% within 3 years** of psychosis onset." },
            { type: "compare", title: "PDP is not schizophrenia in a Parkinson’s patient", items: [
              { title: "Parkinson’s disease psychosis", color: "clin", points: ["Hallucinations mostly **visual** (people, animals)", "Delusions of a particular persecutory type (a **loved one** harming, **stealing** or deceiving) or **jealousy** (partner cheating)", "**Insight initially retained**", "Serotonin–dopamine imbalance with **upregulated 5HT2A**; treated with **5HT2A antagonists**"] },
              { title: "Schizophrenia", color: "mech", points: ["Hallucinations mostly **auditory**", "Delusions mostly **persecutory**, also referential, somatic, religious, grandiose", "Insight typically **absent**", "Mesostriatal dopamine excess; D2 blockade is the mainstay"] }
            ] }
          ]
        },
        {
          id: "s4-drp",
          title: "Dementia-related psychosis",
          pages: "157–158",
          blocks: [
            { type: "p", text: "With an aging population and no disease-modifying treatment, the behavioral symptoms of dementia get more attention. **Agitation** and **psychosis** are common and disabling and can be hard to tell apart, but it matters, because their **pathways** and **evolving treatments** differ (agitation is covered in Chapter 12)." },
            { type: "list", items: [
              "In many dementias, especially **Alzheimer disease**, **delusions** are more common than hallucinations, with a 5-year period prevalence of **over 50%**.",
              "**Lewy body dementia** shows the **visual hallucinations and delusions** of PDP, fitting Lewy body deposition in cortex as a shared cause.",
              "Pharmacologically, **where** and **which** pathways are disrupted may matter more than **what** disrupts them. A plaque, tangle, small stroke or Lewy body that breaks glutamate–GABA or serotonin–glutamate connections and leads to downstream dopamine hyperactivity can cause psychosis; the same lesions elsewhere may cause memory loss or agitation instead."
            ] },
            { type: "list", title: "Evidence for a serotonin component in Alzheimer psychosis", items: [
              "Serotonin in the **presubiculum** is reportedly **lower** in psychotic than in nonpsychotic dementia.",
              "The **C102 allele** of the **5HT2A receptor gene** may be associated with Alzheimer psychosis.",
              "Psychotic patients have more **plaques and tangles** in the medial temporal–presubicular area and middle frontal cortex, and **five times** higher abnormal **paired helical filament-tau** in entorhinal and temporal cortex."
            ] }
          ]
        },
        {
          id: "s4-summary",
          title: "Summary",
          pages: "158",
          blocks: [
            { type: "list", items: [
              "Psychosis is a syndrome; the chapter explains its three principal theories, linked to **dopamine**, **glutamate** and **serotonin**, and the pathways of all three.",
              "**Mesolimbic dopamine overactivity** may mediate positive symptoms and may follow from **hypofunctioning NMDA receptors on parvalbumin-containing GABA interneurons** in prefrontal cortex and hippocampus.",
              "**Mesocortical dopamine underactivity** may mediate negative, cognitive and affective symptoms, possibly from NMDA hypofunction at **different** GABA interneurons.",
              "Excess **5HT2A** activity in cortex may explain **Parkinson’s disease psychosis**; loss of GABA inhibition with unopposed 5HT2A excitation may explain **dementia-related psychosis**, relieved by 5HT2A antagonists.",
              "**D2** receptors are targets for drugs that treat psychosis, and **5HT2A** receptors specifically for psychosis in Parkinson’s disease and dementia. NMDA receptors need **glutamate plus glycine or D-serine**.",
              "Abnormal **synapse formation** from genetic and environmental/epigenetic influences is a major hypothesis for schizophrenia, with upstream glutamate hyperactivity and NMDA hypofunction and downstream mesolimbic dopamine **increases** and mesocortical dopamine **decreases**."
            ] }
          ]
        },
        {
          id: "s4-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 4’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: the visiting children", text: "A 74-year-old with Parkinson’s disease of 10 years’ duration sees small children playing in his living room each evening. He knows they cannot be real, but lately he also suspects his wife is taking money from his wallet.", point: "Classic **PDP**: **visual** hallucinations, a theft/infidelity-type delusion about a loved one, and **initially retained insight**. The model is loss of cortical serotonin input with **upregulated 5HT2A** receptors; **5HT2A antagonism** treats it, while **D2 blockade** would worsen his parkinsonism." },
            { type: "case", title: "Clinical vignette: the party drug", text: "A 22-year-old is brought in after recreational ketamine use, convinced he is being followed and describing vivid visual distortions. His symptoms fade over the next day.", point: "Ketamine blocks NMDA receptors at the **PCP site** inside the open channel, hypothetically on prefrontal **GABA interneurons**. Disinhibited glutamate output drives **mesolimbic dopamine** excess. Unlike schizophrenia, this hypofunction is **acute and reversible** (Table 4-1: visual hallucinations, paranoid delusions, no insight)." },
            { type: "case", title: "Clinical vignette: milk without a baby", text: "A 28-year-old woman taking a D2 blocker for schizophrenia reports missed periods and breast discharge.", point: "D2 blockade in the **tuberoinfundibular** pathway removes dopamine’s tonic inhibition of **prolactin**, causing **galactorrhea** and **amenorrhea** (and gynecomastia or sexual dysfunction in others)." },
            { type: "case", title: "Clinical vignette: the quiet student", text: "A 19-year-old who was always slightly odd and below his siblings in school has withdrawn over 18 months, barely speaks, neglects hygiene and has stopped seeing friends. There are no hallucinations yet.", point: "This looks like a **prodrome** with **negative** (alogia, avolition, asociality) and **cognitive** symptoms, which precede psychosis as lower-than-expected IQ. Onset in late adolescence fits the **competitive elimination** model; prompt detection matters because a long **duration of untreated psychosis** may worsen the course." },
            { type: "case", title: "Clinical vignette: assault on the unit", text: "On a forensic unit, a patient whose hallucinations are well controlled punches a peer who took his seat in the dining room. Another patient plans for days to steal staff keys.", point: "The first is **impulsive** violence (the most common type, **54%**: provoked, high arousal); the second is **organized** violence (29%: planned, no arousal). Neither is **psychotic** violence (17%). Impulsive violence may respond to **behavioral** measures that reduce provocation, organized violence may need confinement, and neither is clearly driven by D2 overactivity." }
          ]
        }
      ]
    }
  ]
});
