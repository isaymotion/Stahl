/* Chapter 8 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 8 (pp. 359–378).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch08", "guide", {
  intro: "A short chapter with a big idea: every anxiety disorder, and PTSD, can be **deconstructed** into two core symptoms, **fear** and **worry**, each driven by its own circuit. Fear lives in an **amygdala-centered** network whose outputs explain the feelings, behaviors, hormones, breathing and heartbeat of fear; worry lives in **cortico-striato-thalamo-cortical (CSTC) loops**. The drugs that work (**benzodiazepines, α2δ ligands, serotonergic agents** and **noradrenergic** agents) all act on the neurotransmitters that regulate these circuits. The chapter then explains **fear conditioning**, **fear extinction** and **reconsolidation**, the basis for combining psychotherapy with drugs, and closes with practical treatment choices for **GAD, panic disorder, social anxiety disorder** and **PTSD**.",
  objectives: [
    "Explain when anxiety becomes a disorder and list the symptoms anxiety disorders share with **major depression** (Figure 8-1).",
    "Describe the core and associated symptoms of **GAD, panic disorder, social anxiety disorder** and **PTSD**, and why the book favors a **symptom-based** strategy (Figures 8-2 to 8-5).",
    "Deconstruct anxiety into **fear** (amygdala-centered circuit) and **worry** (CSTC loop), and state how malfunction differs across disorders (Figures 8-6, 8-7).",
    "Name the six **amygdala connections** and the fear output each produces (Figures 8-8 to 8-13).",
    "List the neurotransmitters regulating the fear and worry circuits (Figures 8-14, 8-15).",
    "Explain how **benzodiazepines**, **α2δ ligands**, **serotonergic agents** (including buspirone) and **NET inhibitors/α1 antagonists** reduce fear and worry, and contrast their **timing** (Figures 8-17 to 8-20).",
    "Describe **fear conditioning**, **fear extinction** and **renewal** in amygdala circuitry (Figure 8-21).",
    "Explain the two novel strategies: **facilitating extinction** (boosting NMDA during exposure therapy) and **blocking consolidation/reconsolidation** (β blockers, opioids, hallucinogens) (Figures 8-22, 8-23).",
    "Outline the book’s treatment options for **GAD, panic disorder, social anxiety disorder** and **PTSD**."
  ],
  parts: [
    {
      title: "Symptoms and the spectrum",
      sections: [
        {
          id: "s8-disorder",
          title: "When is anxiety an anxiety disorder?",
          pages: "359–362",
          blocks: [
            { type: "p", text: "Anxiety is a **normal** emotion under threat, part of the evolutionary **fight-or-flight** reaction: adaptive when a saber-tooth tiger (or its modern equivalent) attacks, a disorder when **maladaptive or excessive**. Anxiety disorders are defined by core symptoms of excessive **fear** and **worry**, whereas major depression is defined by **depressed mood** or **loss of interest**. Some diagnostic manuals no longer classify **OCD** (covered in Chapter 13) or **PTSD** (covered here) as anxiety disorders." },
            { type: "compare", title: "Figure 8-1: two puzzles that share pieces", items: [
              { title: "Core symptoms differ", color: "dx", points: ["**Major depression**: depressed mood, loss of interest/pleasure; also guilt/worthlessness, suicidality, appetite/weight", "**Anxiety disorders**: anxiety/fear and worry; also panic attacks, phobic avoidance, irritability, muscle tension, compulsions"] },
              { title: "Shared symptoms", color: "mech", points: ["**Sleep** disturbance", "Problems **concentrating**", "**Fatigue**", "**Psychomotor/arousal** symptoms"] }
            ] },
            { type: "list", title: "Why the boundaries blur", items: [
              "Gaining or losing a few symptoms can **morph** a depressive episode into an anxiety disorder, or one anxiety disorder into another.",
              "Anxiety disorders are extensively **comorbid** with depression and with each other: many patients accumulate a second or third.",
              "Also comorbid with **substance abuse, ADHD, bipolar disorder, pain** and **sleep** disorders.",
              "Over time they swing between full syndromes and **subsyndromal** symptoms, reappearing as the same, a different anxiety disorder, or depression.",
              "They are mostly treated with the **same drugs**, many of them the same drugs used for depression."
            ] },
            { type: "callout", kind: "key", title: "The brain is not organized by the DSM", text: "Specific diagnoses help track patients over time, but treatment is increasingly **symptom-based**: deconstruct the disorder into symptoms, match each to a malfunctioning **circuit** and its **neurotransmitters**, then choose and combine drugs to restore efficient information processing and reach **remission** (the approach of Chapter 6)." }
          ]
        },
        {
          id: "s8-subtypes",
          title: "The four disorders as symptom sets",
          pages: "361–363",
          blocks: [
            { type: "table", wide: true, caption: "Figures 8-2 to 8-5", head: ["Disorder", "Core symptoms", "Associated symptoms"], rows: [
              ["**Generalized anxiety disorder**", "Generalized anxiety/fear and **worry**", "Arousal, **fatigue**, difficulty **concentrating**, **sleep** problems, **irritability**, **muscle tension**"],
              ["**Panic disorder**", "**Anticipatory** anxiety/fear; worry about panic attacks", "**Unexpected** panic attacks; phobic avoidance or other behavioral change"],
              ["**Social anxiety disorder**", "Social/performance anxiety or fear; worry about **exposure**", "**Expected** panic attacks in social situations; phobic avoidance; arousal, fatigue, concentration, sleep"],
              ["**PTSD**", "Anxiety while **re-experiencing** the trauma; worry about having the other symptoms", "Increased **arousal** and startle, **sleep** problems including **nightmares**, **avoidance**"]
            ], note: "PTSD is now classed as a **stress-related disorder** and considered a disorder of **hyperarousal**." },
            { type: "callout", kind: "exam", title: "Panic: expected or not?", text: "**Unexpected** panic attacks point to **panic disorder**; panic attacks that are **predictable** in social situations point to **social anxiety disorder**." }
          ]
        },
        {
          id: "s8-fear-worry",
          title: "Fear and worry: two symptoms, two circuits",
          pages: "362–364",
          blocks: [
            { type: "flow", title: "Figures 8-6 and 8-7: deconstruct the syndrome", steps: [
              ["Anxiety", "The syndrome", "dx"],
              ["Fear", "Panic, phobia → **amygdala-centered** circuit", "case"],
              ["Worry", "Anxious misery, apprehensive expectation, obsessions → **CSTC** circuit", "mech"]
            ] },
            { type: "p", text: "What separates one anxiety disorder from another may be not **where** the problem is or **which** neurotransmitters are involved, but **how** these same circuits malfunction:" },
            { type: "table", head: ["Disorder", "Hypothesized circuit malfunction"], rows: [
              ["GAD", "**Persistent and unremitting**, yet not severe"],
              ["Panic disorder", "**Intermittent**, catastrophic and **unexpected**"],
              ["Social anxiety disorder", "Intermittent, catastrophic and **expected**"],
              ["PTSD", "**Traumatic** in origin and **conditioned**"]
            ] }
          ]
        }
      ]
    },
    {
      title: "The circuits of fear and worry",
      sections: [
        {
          id: "s8-amygdala",
          title: "The amygdala and the neurobiology of fear",
          pages: "364–365",
          blocks: [
            { type: "p", text: "The **amygdala**, an almond-shaped center near the hippocampus, integrates sensory and cognitive information and decides whether there will be a **fear response**. Fear is not just a feeling: each output of the amygdala produces a different part of the response." },
            { type: "table", wide: true, caption: "Figures 8-8 to 8-13: the amygdala’s outputs", head: ["Connection", "Fear output", "When excessive or chronic"], rows: [
              ["**Orbitofrontal** and **anterior cingulate** cortex (reciprocal)", "The **affect** (feeling) of fear", "Feelings of fear"],
              ["**Periaqueductal gray** (brainstem)", "**Motor** responses: fight, flight, **freezing**; avoidance", "Avoidance behavior"],
              ["**Hypothalamus** (HPA axis)", "**Endocrine**: a quick cortisol boost helps survive short threats", "Coronary artery disease, **type 2 diabetes**, **stroke**; possibly **hippocampal atrophy**"],
              ["**Parabrachial nucleus** (brainstem)", "**Breathing**: faster respiratory rate", "Shortness of breath, **asthma** exacerbation, a false sense of **smothering** (common in panic)"],
              ["**Locus coeruleus** (noradrenergic)", "**Autonomic/cardiovascular**: higher pulse and blood pressure", "Atherosclerosis, cardiac ischemia, BP change, **reduced heart rate variability**, MI, even **sudden death**"],
              ["**Hippocampus**", "Traumatic memories stored there trigger the amygdala from **within**: **re-experiencing**", "A particular feature of **PTSD**"]
            ] },
            { type: "callout", kind: "pearl", title: "“Scared to death”", text: "Repeated, inappropriate or chronic autonomic activation in anxiety disorders can raise cardiac risk to the point of sudden death, so the phrase may not always be an exaggeration." },
            { type: "p", text: "Each connection uses specific neurotransmitters, and known anxiolytics act on them. Regulators of the amygdala circuit (Figure 8-14): **[[nt:serotonin|serotonin]]**, **[[nt:gaba|GABA]]**, **[[nt:glutamate|glutamate]]**, **CRF/HPA**, **[[nt:norepinephrine|norepinephrine]]** and **voltage-gated ion channels**." }
          ]
        },
        {
          id: "s8-cstc",
          title: "CSTC loops and the neurobiology of worry",
          pages: "365–366",
          blocks: [
            { type: "p", text: "Worry (anxious misery, apprehensive expectations, **catastrophic thinking**, obsessions) is linked to **CSTC feedback loops** from the prefrontal cortex. Figure 8-16 shows a loop that begins and ends in the **dorsolateral prefrontal cortex**, passing through the **striatum** and **thalamus**; its overactivation may cause worry or obsessions. Some experts think similar loops drive **ruminations, obsessions and delusions**, all types of recurrent thoughts." },
            { type: "compare", title: "Figures 8-14 and 8-15: regulators of each circuit", items: [
              { title: "Fear (amygdala-centered)", color: "case", points: ["5HT", "GABA", "Glutamate", "**CRF/HPA**", "NE", "Voltage-gated ion channels"] },
              { title: "Worry (CSTC “worry loop”)", color: "mech", points: ["5HT", "GABA", "**Dopamine**", "NE", "Glutamate", "Voltage-gated ion channels"] }
            ] },
            { type: "callout", kind: "key", title: "Heavy overlap", text: "The two circuits share most regulators, which is why the same anxiolytics reduce both fear and worry." }
          ]
        }
      ]
    },
    {
      title: "How the drugs work",
      sections: [
        {
          id: "s8-bzd",
          title: "Benzodiazepines",
          pages: "366–367",
          blocks: [
            { type: "p", text: "Benzodiazepines such as [[drug:diazepam|diazepam]] and [[drug:alprazolam|alprazolam]] enhance **phasic** GABA inhibition by **positive allosteric modulation** of postsynaptic **[[target:gabaa|GABA-A]]** receptors (Chapter 6)." },
            { type: "compare", items: [
              { title: "Fear (Figure 8-17B)", color: "case", points: ["Act at GABA-A receptors **within the amygdala**", "Blunt fear-associated outputs, reducing **fear**"] },
              { title: "Worry (Figure 8-18B)", color: "mech", points: ["Enhance **inhibitory interneurons** in CSTC circuits (prefrontal cortex)", "Reduce **worry**"] }
            ] },
            { type: "callout", kind: "exam", title: "Immediate, not delayed", text: "Benzodiazepines act **acutely**, by occupying benzodiazepine receptors, unlike serotonergic agents and buspirone, whose effects depend on delayed **receptor adaptation**." }
          ]
        },
        {
          id: "s8-a2d",
          title: "α2δ ligands",
          pages: "366–368",
          blocks: [
            { type: "p", text: "[[drug:gabapentin|Gabapentin]] and [[drug:pregabalin|pregabalin]] bind the **[[target:a2d|α2δ subunit]]** of presynaptic **N and P/Q** voltage-sensitive calcium channels. They block release of excitatory neurotransmitters such as **glutamate** when neurotransmission is **excessive**: binding **open, overly active** channels in the amygdala (reducing fear, Figure 8-17C) and in CSTC circuits (reducing worry, Figure 8-18C)." },
            { type: "list", title: "Clinical points", items: [
              "Anxiolytic actions shown in **social anxiety disorder** and **panic disorder**.",
              "Approved for anxiety in **some countries** (Europe and others), **not the US**.",
              "Also effective for **epilepsy** and pain conditions including **neuropathic pain** and **fibromyalgia** (Chapter 9).",
              "A **different mechanism** from SSRIs or benzodiazepines: useful when SSRIs/SNRIs or benzodiazepines fail, or **combined** with them in partial responders."
            ] }
          ]
        },
        {
          id: "s8-serotonin",
          title: "Serotonin and anxiety; buspirone",
          pages: "368–370",
          blocks: [
            { type: "p", text: "Because anxiety and depression share symptoms, circuits and neurotransmitters, the leading treatments for anxiety disorders are increasingly drugs **developed for depression**. Serotonin innervates the **amygdala** and every part of the CSTC loop (**prefrontal cortex, striatum, thalamus**), so it can regulate both fear and worry. Most SERT-blocking drugs (**SSRIs** and **SNRIs**, Chapter 7) reduce fear and anxiety in one or another of GAD, panic disorder, social anxiety disorder, PTSD and OCD." },
            { type: "p", text: "[[drug:buspirone|Buspirone]], a **[[target:5ht1a|5HT1A]] partial agonist**, is recognized for **GAD** but not for the other anxiety/trauma disorders. Partial agonism at presynaptic and postsynaptic 5HT1A receptors may enhance serotonergic input to the amygdala (Figure 8-17D) and CSTC circuits (Figure 8-18D). [[drug:vilazodone|Vilazodone]] (a SPARI) should theoretically be anxiolytic too, and several drugs for psychosis have 5HT1A partial agonism." },
            { type: "callout", kind: "exam", title: "Delayed like an antidepressant", text: "Buspirone’s anxiolytic onset is **delayed**, like SSRIs and SNRIs, suggesting it works through **adaptive neuronal and receptor changes**, not simply acute receptor occupancy." }
          ]
        },
        {
          id: "s8-ne",
          title: "Noradrenergic hyperactivity",
          pages: "370",
          blocks: [
            { type: "p", text: "Excess output from the **locus coeruleus** causes peripheral autonomic overdrive and central symptoms: **nightmares, hyperarousal, flashbacks, panic attacks**, tremor, sweating, tachycardia. In the prefrontal cortex it reduces efficiency of information processing and may cause **worry**. These effects may be mediated by excess NE at postsynaptic **α1** and **β1** receptors in the amygdala and prefrontal cortex." },
            { type: "table", caption: "Figures 8-19 and 8-20: two ways to calm noradrenergic overdrive", head: ["Approach", "Mechanism", "What improves"], rows: [
              ["**α1 antagonist** (e.g., [[drug:prazosin|prazosin]])", "Blocks postsynaptic **α1** receptors", "**Nightmares** and hyperarousal"],
              ["**NET inhibitor** (SNRI or selective NET inhibitor)", "Sustained NE excess **downregulates and desensitizes β1** receptors", "**Fear** and **worry**, after a delay"]
            ] },
            { type: "callout", kind: "caution", title: "Worse before better", text: "Anxiety can be **transiently worse** right after starting an SNRI or NET inhibitor, while NE activity rises before postsynaptic receptors adapt." },
            { type: "callout", kind: "caution", title: "Spelling", text: "The book writes “**prazocin**”; the drug is **prazosin**." }
          ]
        }
      ]
    },
    {
      title: "Fear learning and novel treatments",
      sections: [
        {
          id: "s8-conditioning",
          title: "Fear conditioning",
          pages: "370–374",
          blocks: [
            { type: "p", text: "As with **Pavlov’s dogs** (a bell paired with footshock comes to evoke fear), humans “learn” fear during stressful, emotionally traumatic experiences, shaped by **genetic** predisposition and prior **stress sensitization** (e.g., child abuse). Fear conditioning is well conserved because some fears are vital, but fears that are learned and **not forgotten** may progress to anxiety disorders or depression. Almost **30%** of people will develop an anxiety disorder, driven largely by stressful environments: early adversity, war, natural disasters, abusive relationships." },
            { type: "list", title: "Conditioned fear in each disorder", items: ["**PTSD**: a sensory reminder (an explosion, burning rubber, a wounded civilian, flood waters) triggers re-experiencing, hyperarousal and fear.", "**Social anxiety disorder**: panic in social situations “teaches” panic in social situations.", "**Panic disorder**: an attack that happens in a crowd, on a bridge or in a shopping center makes the same place trigger the next one."] },
            { type: "flow", title: "Figure 8-21: how the amygdala learns fear", steps: [
              ["Sensory input", "From **thalamus** or **sensory cortex**", "found"],
              ["Lateral amygdala", "Glutamate synapse made more efficient", "mech"],
              ["Central amygdala", "A second glutamate synapse strengthened; fear **output**", "case"],
              ["Made lasting", "**NMDA** receptors trigger **long-term potentiation** and plasticity", "pharm"]
            ], note: "The **ventromedial PFC** can suppress fear before it reaches the amygdala; if it fails, conditioning proceeds. The **hippocampus** remembers the **context** and ensures fear is triggered when the stimulus and its associations recur." },
            { type: "callout", kind: "key", title: "Why current drugs are not cures", text: "Most current anxiolytics **suppress fear output** from the amygdala, leaving the underlying learning in place. Approaches that help the brain **unlearn** fear offer hope of longer-lasting relief." }
          ]
        },
        {
          id: "s8-extinction",
          title: "Fear extinction and renewal",
          pages: "373–374",
          blocks: [
            { type: "p", text: "**Fear extinction** is the progressive reduction of the response to a feared stimulus presented again and again **without adverse consequence**. The original conditioning is **not forgotten**: extinction is **new learning** that inhibits it." },
            { type: "steps", title: "Figure 8-21: the amygdala gate", items: [
              ["Repeated safe exposure", "During exposure therapy, the VMPFC activates the amygdala repeatedly without fear; the **hippocampus** learns the new, safe **context**."],
              ["New inhibitory pathway", "VMPFC and hippocampal inputs activate lateral amygdala glutamate neurons that synapse on **GABA interneurons** in the **intercalated cell mass**."],
              ["A gate in the central amygdala", "Fear output occurs if the conditioning circuit is stronger; **no** output if the extinction circuit wins (stronger GABAergic drive with its own LTP)."]
            ] },
            { type: "compare", title: "Why fear tends to come back", items: [
              { title: "Conditioning", color: "case", points: ["Often has the **upper hand** over time"] },
              { title: "Extinction", color: "mech", points: ["More **labile**; tends to reverse", "**Renewal**: fear returns when the stimulus appears in a **different context** from the one in which extinction was learned"] }
            ] }
          ]
        },
        {
          id: "s8-novel",
          title: "Novel approaches: boosting extinction, blocking reconsolidation",
          pages: "374–377",
          blocks: [
            { type: "p", text: "Two ways to neutralize established fear: **facilitate extinction** or **block reconsolidation**. Research targets patients who fail serotonergic, benzodiazepine and α2δ drugs or standard therapies (exposure, CBT). Preventing stress, especially early-life adversity, is also studied but hard to implement." },
            { type: "compare", title: "Facilitating extinction (Figure 8-22)", items: [
              { title: "The problem", color: "case", points: ["**Exposure-based CBT** comes closest to teaching extinction", "But the hippocampus remembers the **context**, so gains may not generalize outside the therapist’s office (renewal)", "Therapy research looks at using contextual cues to generalize learning"] },
              { title: "The drug idea", color: "drug", points: ["Boost **[[target:nmda|NMDA]]** receptor activation **exactly during** exposure sessions (the figure shows **glycine** from a glial cell enhancing NMDA action)", "Disproportionate **LTP** at the activated extinction synapses (lateral amygdala, intercalated GABA cells)", "Animal data support it; early clinical studies are encouraging but **inconsistent**", "Meanwhile, combine current anxiolytics with **psychotherapy**"] }
            ] },
            { type: "table", wide: true, caption: "Figure 8-23: blocking consolidation and reconsolidation", head: ["Target process", "What it is", "Agents studied"], rows: [
              ["**Consolidation**", "The molecular process that first stores conditioned fear, once thought permanent", "**β blockers** and **opioids** given **immediately after trauma** may reduce the chance of developing **PTSD**"],
              ["**Reconsolidation**", "Reactivating a consolidated fear memory makes it **labile**; **protein synthesis** is needed to restore it, with any changes", "**β blockers**; hallucinogens, dissociatives and entactogens ([[drug:psilocybin|psilocybin]], [[drug:mdma|MDMA]], [[drug:ketamine|ketamine]]) given during psychotherapy to disrupt reconsolidation"]
            ] },
            { type: "callout", kind: "key", title: "Early days", text: "Blocking reconsolidation could let patients “forget” traumatic memories, and existential distress in terminal illness is another target. The idea supports the growing view that **psychotherapy and psychopharmacology are synergistic**." },
            { type: "update", year: "2024", title: "MDMA-assisted therapy for PTSD not approved", text: "In August 2024 the FDA issued a complete response letter declining approval of MDMA-assisted therapy (midomafetamine) for PTSD and requested another phase III trial.", source: "FDA complete response letter to Lykos Therapeutics, August 9, 2024" },
            { type: "update", year: "2024", title: "An LSD formulation for generalized anxiety disorder", text: "The FDA granted breakthrough therapy designation to **MM120** (lysergide, an LSD formulation) for GAD in March 2024, after a phase 2b trial in which a single 100 µg dose reduced anxiety scores by about 7.6 points more than placebo at 4 weeks, with effects lasting to 12 weeks. Phase 3 trials followed.", source: "MindMed, March 7, 2024 (Drug Topics)" }
          ]
        }
      ]
    },
    {
      title: "Treating each disorder",
      sections: [
        {
          id: "s8-gad",
          title: "Generalized anxiety disorder",
          pages: "377",
          blocks: [
            { type: "list", title: "Options in the book", items: [
              "**SSRIs** and **SNRIs**",
              "**Benzodiazepines**",
              "[[drug:buspirone|Buspirone]]",
              "**α2δ ligands**: [[drug:pregabalin|pregabalin]], [[drug:gabapentin|gabapentin]] (approved for anxiety in Europe and elsewhere, not the US; useful off-label as add-ons; a good alternative to benzodiazepines)",
              "Off-label: [[drug:mirtazapine|mirtazapine]], [[drug:trazodone|trazodone]], [[drug:vilazodone|vilazodone]], **TCAs**, sedating antihistamines such as [[drug:hydroxyzine|hydroxyzine]]"
            ] },
            { type: "table", caption: "Three good uses of benzodiazepines in GAD (non-substance-abusers)", head: ["Use", "Why"], rows: [
              ["**Short term when starting an SSRI/SNRI**", "Serotonergic drugs are often **activating**, hard to tolerate early, and **slow** to work"],
              ["**“Top up”** a stable but partial SSRI/SNRI response", "Adds relief to partial benefit"],
              ["**Occasional intermittent** use", "When symptoms surge and sudden relief is needed"]
            ] },
            { type: "callout", kind: "caution", title: "Not with substance abuse", text: "Do not prescribe benzodiazepines to a GAD patient who is abusing other substances, particularly **alcohol**." }
          ]
        },
        {
          id: "s8-panic",
          title: "Panic disorder",
          pages: "377",
          blocks: [
            { type: "p", text: "Panic attacks occur in many conditions, and panic disorder is often comorbid with other anxiety disorders and depression, so treatments overlap: **SSRIs, SNRIs, benzodiazepines** and **α2δ ligands**; off-label **mirtazapine** and **trazodone**." },
            { type: "callout", kind: "pearl", title: "Don’t forget MAOIs", text: "**MAOIs** (Chapter 7) are much neglected but can have **powerful efficacy** in panic and should be considered when other agents fail, especially in treatment-resistant panic disorder." },
            { type: "p", text: "**Cognitive behavioral therapy** is an alternative or an add-on: it modifies cognitive distortions and, through **exposure**, reduces phobic avoidance." }
          ]
        },
        {
          id: "s8-social",
          title: "Social anxiety disorder",
          pages: "377",
          blocks: [
            { type: "table", head: ["Option", "Book’s view"], rows: [
              ["**SSRIs, SNRIs, α2δ ligands**", "Certainly useful"],
              ["**Benzodiazepines**", "Utility **less widely accepted** than in GAD or panic disorder"],
              ["Older drugs for depression", "**Less evidence** than in panic disorder"],
              ["**β blockers**, sometimes with benzodiazepines", "For discrete types such as **performance anxiety**"],
              ["**Alcohol**", "Unfortunately quite effective, but **obviously should not be used**; many patients self-medicate with it before seeking treatment"],
              ["**CBT**", "Powerful, sometimes better than drugs; often helpful **combined** with drugs"]
            ] },
            { type: "update", year: "2025", title: "A nasal-spray approach did not pass phase 3", text: "**Fasedienol** (PH94B), an intranasal agent for acute treatment of social anxiety disorder, did not meet its primary endpoint in the phase 3 PALISADE-3 public-speaking challenge study (distress score change 13.6 vs 14.0 for placebo).", source: "Vistagen, December 17, 2025 (Psychiatric Times)" }
          ]
        },
        {
          id: "s8-ptsd",
          title: "PTSD",
          pages: "377–378",
          blocks: [
            { type: "list", title: "Key points", items: [
              "Some **SSRIs** are approved, but drugs work **less well** in PTSD than in anxiety disorders.",
              "PTSD is highly **comorbid**, so many drugs are better aimed at **depression, insomnia, substance abuse and pain** than at core symptoms.",
              "SSRIs often leave **residual symptoms**, including sleep problems, so most patients take **more than one** drug.",
              "**Benzodiazepines**: use with caution (limited trial evidence; frequent alcohol and substance abuse).",
              "A unique treatment: an **α1 antagonist at night** to prevent **nightmares**.",
              "**Psychotherapy** treats core symptoms; **exposure therapy** is perhaps most effective; many CBT forms are used.",
              "In testing at publication: blocking reconsolidation with psychotherapy plus drugs (especially **MDMA**), and [[drug:brexpiprazole|brexpiprazole]] with [[drug:sertraline|sertraline]], with promising initial findings."
            ] },
            { type: "update", year: "2025", title: "Brexpiprazole with sertraline not approved for PTSD", text: "The supplemental application for brexpiprazole with sertraline in adults with PTSD received an FDA complete response letter in September 2025.", source: "Otsuka/Lundbeck, September 2025" },
            { type: "case", title: "Clinical vignette: the 3 a.m. firefight", text: "A veteran on sertraline has fewer daytime symptoms but wakes nightly from combat nightmares, drenched in sweat. He drinks to get back to sleep.", point: "Noradrenergic hyperarousal at **α1** receptors: an **α1 antagonist at night** (prazosin) is the book’s unique PTSD treatment. Avoid **benzodiazepines** given his drinking, and treat comorbid **substance use** and **insomnia**." }
          ]
        },
        {
          id: "s8-summary",
          title: "Putting it together",
          pages: "378",
          blocks: [
            { type: "list", items: [
              "Fear and worry cut across the whole spectrum: **GAD, panic, social anxiety, PTSD**.",
              "The **amygdala** drives fear; **CSTC loops** drive worry.",
              "Serotonin, norepinephrine, GABA and α2δ-sensitive calcium channels regulate both circuits, and effective drugs target exactly these.",
              "**Conditioning vs extinction** inside the amygdala explains how symptoms persist and how psychotherapy plus drugs might reverse them.",
              "Disrupting **reconsolidation** of fear memories is being tested as a new approach."
            ] },
            { type: "case", title: "Clinical vignette: the first two weeks", text: "A 35-year-old with GAD starts escitalopram and calls on day 4 feeling jittery and unable to sleep. She has no history of substance use.", point: "Serotonergic drugs are often **activating** early and act with a **delay**. A **short-term benzodiazepine** while the SSRI takes effect is one of the book’s accepted uses; an **α2δ ligand** is an alternative." },
            { type: "case", title: "Clinical vignette: the bridge", text: "After a panic attack on a bridge, a commuter now panics on every bridge and has started taking long detours. Two SSRIs and an SNRI have failed.", point: "**Fear conditioning** to the place of the first attack, with **phobic avoidance**. Add **CBT with exposure** to build **fear extinction**, and consider an **MAOI**, much neglected but powerful in resistant panic." },
            { type: "case", title: "Clinical vignette: the recital", text: "A violinist with no other anxiety symptoms freezes, trembles and sweats only before performances.", point: "**Performance anxiety**, a discrete form of social anxiety: a **β blocker**, sometimes with a benzodiazepine, can help. Warn against using **alcohol**." },
            { type: "case", title: "Clinical vignette: fear that comes home", text: "After successful exposure therapy in the clinic, a patient’s fear of dogs returns when he meets one in a park.", point: "**Renewal**: extinction is context-specific because the **hippocampus** encodes the context; the original conditioning was inhibited, not erased." }
          ]
        }
      ]
    }
  ]
});
