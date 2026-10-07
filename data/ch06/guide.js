/* Chapter 6 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 6 (pp. 244–282).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch06", "guide", {
  intro: "Mood disorders are not only about mood. This chapter lays out the **mood spectrum** from pure depression through **mixed features** to pure mania, explains why telling **unipolar from bipolar** depression matters so much, and adds two neurotransmitter networks to the dopamine, serotonin and glutamate networks of Chapter 4: **norepinephrine** and **GABA** (including the GABA-A subtypes behind **phasic** and **tonic** inhibition). It then moves from the classic **monoamine hypothesis** through the **receptor** hypothesis to **neuroplasticity and neuroprogression**: growth factors, the **HPA axis**, **neuroinflammation** and **circadian rhythms**. Finally it maps every symptom of depression and mania onto a brain circuit and its neurotransmitters, the basis for the **symptom-based treatment** approach of Chapter 7.",
  objectives: [
    "List the symptoms required for a **major depressive episode** and a **manic episode**, and define **bipolar I, bipolar II** and **mixed features** (Table 6-1).",
    "Explain why missing **bipolar depression** is common and harmful, and use **Figure 6-10** and the two questions of **Table 6-2** to raise suspicion of it.",
    "Describe the evidence that mood disorders may be **progressive** and why mixed features change prognosis, suicide risk and treatment.",
    "Trace **norepinephrine** synthesis (TOH, DDC, **DBH**), termination (NET, MAO, COMT) and receptors, and explain **α2 autoreceptors** as the brake.",
    "Describe **GABA** synthesis (GAD), termination (GAT, **GABA-T**) and the **GABA-A, GABA-B, GABA-C** receptors.",
    "Contrast **benzodiazepine-sensitive** (γ, α1–3; synaptic; phasic) and **benzodiazepine-insensitive** (δ, α4/α6; extrasynaptic; tonic) GABA-A receptors, and link **α1** to sleep and **α2/α3** to anxiety.",
    "Explain the proposed role of **neuroactive steroids** and **tonic inhibition** in depression, including postpartum depression.",
    "Critique the **monoamine** and **monoamine receptor** hypotheses and explain the **delayed onset** of antidepressant effects.",
    "Describe the **neuroplasticity/neuroprogression** model: BDNF loss, HPA-axis hyperactivity, neuroinflammation and circadian disruption, and their outcomes.",
    "Map each symptom of depression and mania to a **brain circuit**, link **positive and negative affect** to monoamines, and outline the **symptom-based algorithm**."
  ],
  parts: [
    {
      title: "The mood spectrum",
      sections: [
        {
          id: "s6-spectrum",
          title: "Mood is more than mood: episodes and the spectrum",
          pages: "244–249",
          blocks: [
            { type: "p", text: "Mood disorders are also called **affective disorders**: **affect** is the external display of an emotion that is felt internally as **mood**. The chapter mentions diagnostic criteria only in passing; the approach is to **construct** a diagnosis from a patient’s symptoms, then **deconstruct** it into symptoms, match each to a hypothetically malfunctioning **circuit** and its neurotransmitters, and choose drugs that target them." },
            { type: "compare", items: [
              { title: "Major depressive episode (Figure 6-1)", color: "mech", points: ["At least **five** symptoms, only **one** of which is mood", "Must include **depressed mood** or **loss of interest**", "Others: weight/appetite change, **insomnia or hypersomnia**, psychomotor agitation or retardation, **fatigue**, guilt or worthlessness, **executive dysfunction** (concentration), **suicidal ideation**"] },
              { title: "Manic episode (Figure 6-2)", color: "upd", points: ["**Elevated/expansive** or **irritable** mood", "Plus at least **three** others (**four** if mood is only irritable)", "Grandiosity, increased goal-directed activity or agitation, **risk taking**, **decreased need for sleep**, distractibility, **pressured speech**, racing thoughts/**flight of ideas**"] }
            ] },
            { type: "table", caption: "Figures 6-3 to 6-6: unipolar and bipolar", head: ["Disorder", "Defining episodes"], rows: [
              ["**Major depressive disorder** (unipolar)", "At least one major depressive episode; most patients have **recurrent** episodes; only the “down” pole"],
              ["**Bipolar I**", "At least one **manic** episode; depressive episodes typical but **not required**; mania with mixed depressive features is common"],
              ["**Bipolar II**", "One or more major depressive episodes and at least one **hypomanic** episode"]
            ] },
            { type: "h", text: "Mixed features" },
            { type: "p", text: "Depression and mania can occur **at the same time**, a “mixed” state or, in DSM-5, **mixed features**. The specifier moved the field away from treating depression and mania as separate categories toward **opposite ends of a spectrum** with every degree of mixture in between (Figure 6-7). Many real patients are neither purely depressed nor purely manic, and the mix shifts over the illness." },
            { type: "table", caption: "Table 6-1: DSM-5 mixed features", head: ["Episode", "Requirement"], rows: [
              ["**Manic or hypomanic** episode with mixed features", "Full manic/hypomanic criteria **plus at least three** depressive symptoms: depressed mood; loss of interest or pleasure; psychomotor retardation; fatigue; worthlessness or guilt; thoughts of death or suicide"],
              ["**Depressive** episode with mixed features", "Full major depressive criteria **plus at least three** manic/hypomanic symptoms: elevated mood; grandiosity; talkativeness or pressured speech; flight of ideas/racing thoughts; more energy or goal-directed activity; risky activities; decreased need for sleep"]
            ], note: "Not counted as mixed features: **psychomotor agitation, irritability and distractibility** (they overlap both poles)." },
            { type: "compare", title: "Figures 6-8 and 6-9: schizophrenia and bipolar disorder", items: [
              { title: "Old dichotomous model", color: "guide", points: ["Schizophrenia: chronic, unremitting psychosis, **poor** outcome", "Bipolar disorder: cyclical mood episodes, **good** outcome", "Schizoaffective disorder as a third, separate disorder"] },
              { title: "Continuum model", color: "clin", points: ["One spectrum from **pure psychotic** to **pure mood** disorder", "Psychotic depression and schizoaffective disorder in the **middle**", "Largely replaces the dichotomous model"] }
            ] }
          ]
        },
        {
          id: "s6-uni-bi",
          title: "Unipolar or bipolar depression?",
          pages: "249–251",
          blocks: [
            { type: "p", text: "Apart from a history of mania or hypomania, unipolar and bipolar depressive episodes are diagnosed with the **same symptom criteria**, yet they have different long-term outcomes and need **different treatments**. Missed or delayed diagnosis of bipolar depression is common:" },
            { type: "list", items: [
              "Over **a third** of patients with unipolar depression are eventually re-diagnosed with **bipolar disorder**.",
              "Up to **60%** of depressed patients with **bipolar II** are first diagnosed with unipolar depression.",
              "Reasons: depressive episodes may come **before** any mania; patients usually present when **depressed**; and past **hypomania is often pleasant** and goes unmentioned."
            ] },
            { type: "callout", kind: "caution", title: "Why it matters", text: "Treating bipolar depression as unipolar may be **ineffective or even dangerous**. Delaying appropriate treatment can increase **mood cycling, relapse and suicide**, and may even reduce the chance of responding to bipolar treatments later." },
            { type: "p", text: "Can you tell them apart in the depressed state without a history of mania? **No**, but certain features make a bipolar episode **more likely** (Figure 6-10):" },
            { type: "list", cols: 2, title: "Figure 6-10: clues to bipolar depression", items: ["Family history of **bipolar disorder**", "Family history of **substance abuse**", "Comorbid substance abuse", "**Suicide attempts**", "Early onset (**< 25 years**)", "**Irritability**", "**Psychotic** symptoms", "Mood reactivity", "Restlessness", "Psychomotor **agitation** (bipolar II)", "Psychomotor **retardation** (bipolar I)", "**Shorter** depressive episodes", "**More** previous depressive episodes", "Guilt", "Melancholia"] },
            { type: "table", caption: "Table 6-2: two questions to ask", head: ["Question", "What it means"], rows: [
              ["**“Who’s your daddy?”**", "What is your **family history**: mood disorder, psychiatric hospitalizations, suicide, relatives who took lithium, mood stabilizers or drugs for psychosis or depression, or received **ECT**?"],
              ["**“Where’s your mama?”**", "Get **collateral history** from someone close (mother, spouse): patients lack insight into manic symptoms and **under-report** them"]
            ] },
            { type: "callout", kind: "pearl", title: "Family history", text: "Most patients with bipolar depression have **no** family history of bipolar disorder, but when present it is arguably the **most robust** risk factor: a first-degree relative raises risk **8- to 10-fold**." }
          ]
        },
        {
          id: "s6-mixed",
          title: "Mixed features: are mood disorders progressive?",
          pages: "251–252",
          blocks: [
            { type: "flow", title: "Figure 6-11: a possible march toward a bad outcome", steps: [
              ["Unipolar depression", "Recurrent episodes", "mech"],
              ["Mixed features", "Subthreshold manic symptoms appear", "hy"],
              ["Bipolar spectrum", "Conversion to bipolar disorder", "drug"],
              ["Treatment resistance", "", "upd"]
            ], note: "Even subthreshold manic symptoms are strongly linked to conversion: **each manic symptom raises risk by about 30%**. Early, complete treatment of all symptoms may be the best chance to halt the march (unproven)." },
            { type: "table", caption: "Mixed features in numbers (p. 251)", head: ["Finding", "Figure in the book"], rows: [
              ["Unipolar depression with subsyndromal mania", "About **a quarter**; higher in **children and adolescents**"],
              ["Bipolar I or II depression with subsyndromal mania", "About **a third**"],
              ["Suicide: bipolar vs unipolar depression", "**Twice** as high"],
              ["Suicide: bipolar disorder vs general population", "Up to **20 times** higher"],
              ["Bipolar patients who attempt suicide", "Up to **a third**; **10–20%** succeed"],
              ["Suicidality with mixed features (unipolar or bipolar)", "**Fourfold** increase"]
            ] },
            { type: "callout", kind: "caution", title: "A recipe for suicidality", text: "**Non-euphoric** manic symptoms (psychomotor agitation, impulsivity, irritability, racing or crowded thoughts) combined with depressive symptoms are especially dangerous." },
            { type: "callout", kind: "exam", title: "Mixed features change treatment", text: "Neither unipolar nor bipolar depression **with mixed features** is treated first line with **monoamine reuptake inhibitors**; instead the **serotonin/dopamine antagonists and partial agonists** of [[ch:ch05|Chapter 5]] are used (details in Chapter 7). Every depressive episode should be classified as **unipolar or bipolar** and **with or without mixed features**." }
          ]
        }
      ]
    },
    {
      title: "Norepinephrine and GABA",
      sections: [
        {
          id: "s6-ne",
          title: "The norepinephrine neuron",
          pages: "252–256",
          blocks: [
            { type: "p", text: "Mood disorders have long been linked to the monoamines **norepinephrine, dopamine and serotonin**, and more recently to **glutamate** and **GABA** and their ion channels; every known mood treatment acts on one or more of them. Dopamine, serotonin and glutamate were covered in [[ch:ch04|Chapter 4]] and ion channels in [[ch:ch03|Chapter 3]]; this chapter adds norepinephrine and GABA." },
            { type: "flow", title: "Figure 6-12: making norepinephrine", steps: [
              ["Tyrosine", "Actively transported from blood into the neuron", "found"],
              ["DOPA", "**Tyrosine hydroxylase (TOH)**: the rate-limiting, most important regulatory enzyme", "mech"],
              ["Dopamine", "**DOPA decarboxylase (DDC)**; in NE neurons dopamine is only a precursor", "mech"],
              ["Norepinephrine", "**Dopamine β-hydroxylase (DBH)**, the third and final enzyme", "drug"],
              ["Vesicle", "Stored via **VMAT2** until released", "clin"]
            ] },
            { type: "table", caption: "Figure 6-13: ending norepinephrine’s action", head: ["Mechanism", "Notes"], rows: [
              ["**NET** (norepinephrine transporter, reuptake pump)", "A presynaptic “**vacuum cleaner**” that removes NE without destroying it, so it can be re-stored or destroyed inside the neuron"],
              ["**MAO-A or MAO-B**", "In mitochondria of the presynaptic neuron and elsewhere"],
              ["**COMT**", "Thought to act largely **outside** the presynaptic terminal"]
            ] },
            { type: "p", text: "Norepinephrine receptors include **NET** and **VMAT2**, plus **α1, α2A, α2B, α2C, β1, β2 and β3** (Figure 6-14). All can be postsynaptic, but **only α2 receptors** can be **presynaptic autoreceptors**." },
            { type: "table", caption: "Figures 6-15 and 6-16: α2 autoreceptors", head: ["Location", "Effect of NE binding"], rows: [
              ["**Axon terminal**", "“Gatekeepers”: closing the gate **halts NE release**"],
              ["**Somatodendritic**", "Shuts off **neuronal impulse flow**, decreasing firing and NE release"]
            ] },
            { type: "callout", kind: "analogy", title: "The brake", text: "α2 autoreceptors are the noradrenergic neuron’s **brake**, giving **negative feedback** that probably prevents over-firing. Drugs that **stimulate** α2 mimic stepping on the brake; drugs that **block** α2 **cut the brake cable**, enhancing NE release." }
          ]
        },
        {
          id: "s6-gaba",
          title: "GABA: synthesis, termination and receptor types",
          pages: "256–259",
          blocks: [
            { type: "p", text: "GABA is the brain’s principal **inhibitory** neurotransmitter, regulating and reducing the activity of many neurons." },
            { type: "flow", steps: [
              ["Glutamate", "The amino acid precursor", "found"],
              ["GABA", "Made by **glutamic acid decarboxylase (GAD)** (Figure 6-17)", "mech"],
              ["Vesicle", "Packaged by **vesicular inhibitory amino acid transporters (VIAATs)**", "drug"],
              ["Termination", "Reuptake by the **GABA transporter (GAT)**; inside the neuron **GABA transaminase (GABA-T)** converts it to an inactive substance (Figure 6-18)", "clin"]
            ] },
            { type: "table", caption: "Figure 6-19: three major GABA receptor types", head: ["Receptor", "Type", "Notes"], rows: [
              ["**GABA-A**", "Ligand-gated ion channel", "Inhibitory **chloride** channel; many subtypes; target of benzodiazepines, Z drugs and neuroactive steroids"],
              ["**GABA-B**", "**G-protein-linked**", "May be coupled to calcium or potassium channels"],
              ["**GABA-C**", "Ligand-gated ion channel", "Also part of an inhibitory chloride channel complex"]
            ] }
          ]
        },
        {
          id: "s6-gabaa",
          title: "GABA-A subtypes: phasic and tonic inhibition",
          pages: "259–263",
          blocks: [
            { type: "p", text: "Each GABA-A subunit has **four transmembrane regions**; **five** subunits form the receptor around a central **chloride** channel (Figure 6-20). Subunits (isoforms) include **α1–α6, β1–β3, γ1–γ3, δ, ε, π, θ and ρ1–ρ3**, and which ones are present strongly changes the receptor’s function." },
            { type: "compare", title: "Figures 6-20C and 6-21: two families of GABA-A receptors", items: [
              { title: "Benzodiazepine-sensitive", color: "mech", points: ["**Two β + one γ2 or γ3 + two α (α1, α2 or α3)**", "**Synaptic/postsynaptic**", "**Phasic** inhibition: bursts triggered by **peak** synaptic GABA", "One benzodiazepine binds between the **γ2/γ3 and α1–3** subunits", "**α1**: sleep (hypnotics; some Z drugs are α1-selective)", "**α2/α3**: anxiety (anxiolytic benzodiazepines)"] },
              { title: "Benzodiazepine-insensitive", color: "clin", points: ["Contain **α4, α6, γ1 or δ** (typically **δ** with α4 or α6)", "**Extrasynaptic**", "**Tonic** inhibition from **ambient** GABA that escaped reuptake and destruction", "Bind **neuroactive steroids** (site between **α and δ**), possibly **alcohol** and some **general anesthetics**", "Capture GABA diffusing from synapses and neurosteroids released by **glia**"] }
            ] },
            { type: "p", text: "In both families, **two GABA molecules** bind the **orthosteric** sites between the **α and β** subunits. GABA alone increases the **frequency** of channel opening only to a limited extent (Figure 6-22)." },
            { type: "callout", kind: "key", title: "Positive allosteric modulation", text: "Benzodiazepines bind a different (**allosteric**) site and make GABA more effective, increasing the frequency of chloride channel opening: they are **GABA-A PAMs**. A PAM does **nothing without GABA** present. Their effects are those of an **agonist** at the allosteric site, because the neutral antagonist **flumazenil** reverses them (Figure 6-23)." },
            { type: "list", items: [
              "**Flumazenil** is used to reverse benzodiazepine anesthesia or **overdose**.",
              "Currently available benzodiazepines are **nonselective** for GABA-A receptors with different α subunits.",
              "Abnormal expression of **γ2, α2 or δ** subunits is associated with different types of **epilepsy**.",
              "Subunit expression can change with chronic benzodiazepine use and **withdrawal**, and could differ in subgroups of depression.",
              "Tonic inhibition sets the overall **tone and excitability** of the neuron, such as how often it fires in response to excitatory input."
            ] }
          ]
        },
        {
          id: "s6-neurosteroids",
          title: "Neuroactive steroids and depression",
          pages: "263–264",
          blocks: [
            { type: "p", text: "Because neuroactive steroids have **antidepressant** properties, some depressed patients may hypothetically lack normal **tonic inhibition**, leaving some circuits **too excitable**. Neuroactive steroids could calm these circuits and may also be anxiolytic." },
            { type: "flow", title: "A theory of postpartum depression", steps: [
              ["Pregnancy", "High circulating, and presumably brain, **neuroactive steroid** levels", "found"],
              ["Delivery", "A **precipitous decline**: tonic inhibition is lost", "upd"],
              ["Depression", "Hypothetically triggers a sudden major depressive episode", "drug"],
              ["Treatment", "Restoring neurosteroids with **60 hours of IV infusion** may reverse it and give time to adapt to lower levels", "clin"]
            ], note: "A reasonable but **unproven** theory. Why neurosteroids treat other depressions, and quickly, is harder to explain." },
            { type: "callout", kind: "exam", title: "Which GABA-A site matters?", text: "Neuroactive steroids act at **both** benzodiazepine-sensitive and -insensitive receptors, but their **unique** action is at **extrasynaptic, benzodiazepine-insensitive (δ)** sites. Benzodiazepines acting at synaptic sites do **not** have robust antidepressant action, which points to the extrasynaptic sites as the antidepressant target." },
            { type: "update", year: "2023", title: "An oral neuroactive steroid for postpartum depression", text: "The oral neuroactive steroid **zuranolone** (Zurzuvae), a GABA-A PAM, was approved by the FDA in August 2023 for postpartum depression in adults, given once daily for 14 days, an oral alternative to the 60-hour intravenous infusion described in the book.", source: "FDA, August 4, 2023" }
          ]
        }
      ]
    },
    {
      title: "The neurobiology of mood disorders",
      sections: [
        {
          id: "s6-monoamine",
          title: "Monoamine and receptor hypotheses",
          pages: "264–266",
          blocks: [
            { type: "compare", items: [
              { title: "Monoamine hypothesis (Figure 6-24B)", color: "mech", points: ["Depression = **deficient** monoamine transmission; mania perhaps the **excess**", "Based on monoamine-depleting drugs inducing depression and all older antidepressants boosting NE, 5HT or DA", "A simplistic **“chemical imbalance”** idea", "Searches in the **1970s–1980s** gave **mixed** results; direct evidence still largely lacking"] },
              { title: "Monoamine receptor hypothesis (Figure 6-24C)", color: "drug", points: ["Depletion causes compensatory **upregulation** of postsynaptic receptors, which causes depression", "Direct evidence also generally lacking", "Postmortem: consistently **more 5HT2 receptors** in frontal cortex of people who die by **suicide**", "Imaging of 5HT receptors has not given consistent, replicable lesions"] }
            ] },
            { type: "callout", kind: "key", title: "Wrong but useful", text: "There is no clear evidence of a “real” monoamine deficit or receptor abnormality in depression, even though all classic antidepressants raise monoamines. Still, the hypothesis focused attention on **NE, DA and 5HT**, improving understanding of their physiology and yielding many treatments (Chapter 7). Attention then shifted to receptors, downstream **gene expression**, **growth factors**, and **nature (genes) plus nurture (stress, epigenetics)**." }
          ]
        },
        {
          id: "s6-neuroplasticity",
          title: "Neuroplasticity and neuroprogression",
          pages: "266–270",
          blocks: [
            { type: "callout", kind: "pearl", title: "The clue: delayed onset", text: "Classic antidepressants raise monoamines **almost immediately**, but clinical improvement takes **weeks** (Figure 6-25). Events that match the delay include **downregulation** of neurotransmitter receptors (which also matches the onset of **tolerance to side effects**) and downstream synthesis of growth factors such as **BDNF** (Figures 6-26 and 6-27)." },
            { type: "p", text: "**BDNF** (brain-derived neurotrophic factor) promotes growth of immature neurons, including monoamine neurons, supports survival and function of adult neurons and maintains synapses. Monoamine signaling triggers cascades that release BDNF, so reuptake inhibitors may raise neurotrophic factors on a timescale matching clinical effects." },
            { type: "flow", vertical: true, title: "Figures 6-28 to 6-30: from stress to lost neurons", steps: [
              ["Triggers", "Chronic **stress**, **inflammation**, chronic illness, **early life adversity**, the **microbiome**, altered sleep", "hy"],
              ["Epigenetic silencing", "Genes for **BDNF** turned off; growth factors lost", "mech"],
              ["Synaptic loss", "Lack of synaptic maintenance, then loss of **synapses, dendritic spines and arborization**", "drug"],
              ["Neuronal loss", "Apoptosis: at this point **neuroprogression becomes irreversible**", "upd"]
            ], note: "Synaptic and neuronal loss can be seen on structural MRI (e.g., hippocampal volume), and functional connectivity is abnormal." },
            { type: "p", text: "Neuroprogression is **multifactorial** (Figure 6-31): inflammation, oxidative stress and **HPA-axis** dysregulation feed neurotrophic dysregulation and epigenetic changes, which feed back on each other, damaging synapses and neurons and producing **functional and structural** abnormalities and **vulnerability to relapse**." }
          ]
        },
        {
          id: "s6-hpa",
          title: "Stress and the HPA axis",
          pages: "270–271",
          blocks: [
            { type: "flow", title: "Figure 6-32A: the normal stress response", steps: [
              ["Hypothalamus", "Releases **CRF** (corticotropin-releasing factor)", "mech"],
              ["Pituitary", "Releases **ACTH**", "drug"],
              ["Adrenal", "Releases **glucocorticoid**", "clin"],
              ["Feedback", "Glucocorticoid inhibits CRF; **hippocampus and amygdala** also suppress the HPA axis", "found"]
            ] },
            { type: "p", text: "If stress causes **hippocampal and amygdala atrophy**, their inhibitory input to the hypothalamus is lost and the HPA axis becomes **overactive** (Figure 6-32B). Depression has long been linked to **elevated glucocorticoids** and **insensitivity to feedback inhibition**, and high glucocorticoid levels may even be **toxic** to neurons under chronic stress, a vicious circle." },
            { type: "callout", kind: "pearl", title: "Targets in testing", text: "Novel treatments target **CRF receptors**, **vasopressin 1B receptors** and **glucocorticoid receptors** to halt or reverse HPA abnormalities in depression and other stress-related illnesses." }
          ]
        },
        {
          id: "s6-inflammation",
          title: "Neuroinflammation",
          pages: "270–273",
          blocks: [
            { type: "flow", vertical: true, title: "Figure 6-33: how inflammation may damage the depressed brain", steps: [
              ["Contributors", "Chronic **stress**, **obesity**, early life adversity, **microbiome** disruption, chronic sleep problems, chronic **inflammatory** illnesses", "hy"],
              ["Microglia", "Activated **microglia** release proinflammatory **cytokines**", "mech"],
              ["Immune cells", "Cytokines attract **monocytes and macrophages** into the brain", "drug"],
              ["Damage", "Disrupted neurotransmission, **oxidative stress**, mitochondrial dysfunction, HPA dysfunction, less neurotrophic support, unwanted **epigenetic** changes → lost synapses and dead neurons", "upd"]
            ], note: "Hypothesized for at least a **subset** of patients with depression." }
          ]
        },
        {
          id: "s6-circadian",
          title: "Circadian rhythms",
          pages: "271–275",
          blocks: [
            { type: "p", text: "For some patients depression may be a **circadian rhythm disorder** with a **phase delay** of the sleep–wake cycle (Figure 6-34): wakefulness is not promoted in the morning, so they sleep later, struggle to fall asleep at night and feel sleepy by day. The degree of delay **correlates with severity**." },
            { type: "table", caption: "Figure 6-35: altered circadian measures in depression", head: ["Measure", "Change"], rows: [
              ["Body temperature", "**Flattened** daily cycle (less fluctuation)"],
              ["Cortisol", "Same pattern but **elevated** throughout the 24 hours"],
              ["Melatonin", "**Loss** of the nighttime peak"],
              ["BDNF and neurogenesis", "Reduced (normally peak at night)"]
            ] },
            { type: "p", text: "Desynchronization can be so pervasive that depression may be seen as fundamentally a **circadian illness** with a “broken” clock. Light-sensitive **clock genes** have been linked to mood disorders." },
            { type: "compare", title: "Figure 6-36: resetting the clock", items: [
              { title: "Light", color: "hy", points: ["The most powerful synchronizer", "Retina → **retinohypothalamic tract** → **suprachiasmatic nucleus (SCN)** → pineal turns **off** melatonin", "**Bright light** in the early morning may reset the rhythm"] },
              { title: "Darkness and melatonin", color: "clin", points: ["No retinal input: SCN lets the pineal **make melatonin**", "Melatonin acts back on the SCN to reset rhythms", "**Melatonin** in the early evening may help"] }
            ] },
            { type: "p", text: "Other circadian treatments with therapeutic effects in these patients include **phase advance, phase delay** and even **sleep deprivation**." }
          ]
        },
        {
          id: "s6-outcomes",
          title: "Cognitive decline and other unwanted outcomes",
          pages: "273–276",
          blocks: [
            { type: "list", title: "Three unwanted outcomes of neuroprogression", items: [
              "**Enduring cognitive decline**",
              "Increased **vulnerability to further episodes**",
              "**Resistance** to monoamine treatments"
            ] },
            { type: "list", title: "Cognition in depression", items: [
              "Sad mood has the strongest link to impaired functioning; **cognitive symptoms** have the **second strongest**.",
              "Depressed patients show **more activation** of cognitive-control regions (**DLPFC, anterior cingulate**): thinking takes more **effort**.",
              "Hippocampal decline correlates with **duration of untreated depression**; smaller hippocampi predict **worse outcomes**.",
              "Memory worsens with the **number of previous episodes**; cognitive dysfunction tracks the number and **duration** of past episodes, not current severity, as if damage were cumulative.",
              "Cognitive symptoms are among the most common **residual** symptoms and can **outlast** mood symptoms.",
              "The impairment may equal a night of **sleep deprivation**, legal **alcohol intoxication**, or a high dose of a benzodiazepine or antihistamine.",
              "Similar cognitive dysfunction occurs across bipolar disorder, schizophrenia, anxiety, trauma and impulsive disorders, ADHD and more."
            ] },
            { type: "callout", kind: "key", title: "Treat early and completely", text: "The best current chance to prevent cognitive and functional decline is to **treat early and completely**. Changes may be **reversible** while synapses, but not neurons, are lost: **rapid-acting** glutamate and GABA drugs may trigger new synapse formation within **minutes to hours** (Chapter 7), and effective drugs of any mechanism may raise BDNF; in the **hippocampus** even neurogenesis may replace lost neurons." },
            { type: "p", text: "Downstream (Figure 6-37), monoamine reuptake inhibitors and novel glutamate or GABA agents activate signaling cascades converging on **CREB**, which turns on neuroplasticity genes including **BDNF**. CREB also increases **AMPA** subunit expression and downregulates NMDA receptors; raising the **AMPA:NMDA ratio** may restore glutamate homeostasis and plasticity." }
          ]
        }
      ]
    },
    {
      title: "Symptoms, circuits and treatment selection",
      sections: [
        {
          id: "s6-circuits",
          title: "Matching symptoms to circuits",
          pages: "277–279",
          blocks: [
            { type: "p", text: "A major hypothesis is that each psychiatric symptom reflects **inefficient information processing** in particular brain regions (**nodes**) and circuits (**networks**). Though possibly reductionistic, mapping the **nine** symptoms of a major depressive episode and of a manic episode onto circuits helps explain presenting and **residual** symptoms and supports a rational path to **complete remission**." },
            { type: "table", wide: true, caption: "Figure 6-38: major depressive episode symptoms and circuits", head: ["Symptom", "Hypothetically malfunctioning region"], rows: [
              ["Concentration (executive function)", "**Prefrontal cortex** (dorsolateral)"],
              ["Interest/pleasure", "**Prefrontal cortex**, **striatum/nucleus accumbens**"],
              ["Fatigue/energy", "PFC (mental fatigue), **striatum/NA**, **spinal cord** (physical fatigue)"],
              ["Psychomotor", "PFC (mental), **striatum**, **cerebellum**, spinal cord"],
              ["Guilt, worthlessness, suicidality", "**Ventromedial PFC** and **amygdala**"],
              ["Mood", "**Ventromedial PFC**, **amygdala**"],
              ["Sleep, appetite", "**Hypothalamus**"]
            ] },
            { type: "table", wide: true, caption: "Figure 6-39: manic episode symptoms and circuits", head: ["Symptom", "Hypothetically malfunctioning region"], rows: [
              ["Racing thoughts, grandiosity, distractibility, pressured speech", "**Prefrontal cortex**"],
              ["Risks, grandiosity, pressured speech, racing thoughts", "**Orbitofrontal/ventral PFC**"],
              ["Goal-directed activity, racing thoughts, grandiosity", "**Nucleus accumbens/striatum**"],
              ["Motor activity/agitation", "**Striatum**"],
              ["Mood", "**Ventromedial PFC**, **amygdala**"],
              ["Decreased sleep/arousal", "**Hypothalamus, thalamus, basal forebrain**"]
            ] },
            { type: "table", caption: "Figure 6-40: monoamine projections", head: ["Monoamine", "Origin", "Projections and functions"], rows: [
              ["**Dopamine**", "VTA and substantia nigra (plus thalamic system)", "Via hypothalamus to PFC, basal forebrain, striatum, NA: movement, **pleasure and reward**, cognition, psychosis; thalamic DA for arousal and sleep"],
              ["**Norepinephrine**", "**Locus coeruleus**", "**Ascending**: mood, arousal, cognition. **Descending** spinal cord: **pain**"],
              ["**Serotonin**", "**Raphe** nuclei", "**Ascending** to many of the same regions: mood, anxiety, sleep. **Descending**: pain"]
            ], note: "Glutamate and GABA are present throughout essentially every brain area." },
            { type: "compare", title: "Figure 6-41: positive and negative affect", items: [
              { title: "Reduced positive affect", color: "drug", points: ["Depressed mood; loss of happiness/joy, interest, pleasure, **energy/enthusiasm**, alertness, self-confidence", "Mainly **dopamine** dysfunction (perhaps NE too)", "Treat by **boosting DA** (and possibly NE)"] },
              { title: "Increased negative affect", color: "upd", points: ["Depressed mood; **guilt**, disgust, **fear, anxiety**, hostility, **irritability**, loneliness", "Mainly **serotonin** dysfunction (perhaps NE too)", "Treat by **boosting 5HT** (and possibly NE)"] }
            ] },
            { type: "p", text: "Patients with both clusters may need **triple-action** treatment boosting all three monoamines." },
            { type: "callout", kind: "key", title: "Chaos, not just too much or too little", text: "Mania is not simply the opposite of depression: manic and depressive symptoms coexist across the spectrum. Each node is connected by vast **bundles** of neurons, some perhaps up, some down, some normal and some **vacillating chaotically**. Treatment therefore needs to **stabilize**, not just raise or lower, neurotransmission." }
          ]
        },
        {
          id: "s6-algorithm",
          title: "Symptom-based treatment selection",
          pages: "279–282",
          blocks: [
            { type: "steps", title: "Figures 6-42 to 6-44: the algorithm", items: [
              ["Construct the diagnosis", " from all symptoms."],
              ["Deconstruct it", " into the patient’s individual symptoms (Figure 6-42)."],
              ["Match each symptom to its circuit", " (Figure 6-43)."],
              ["Match each circuit to its regulating neurotransmitters", " (Figure 6-44)."],
              ["Choose mechanisms that target them", ", eliminating symptoms one by one; add or switch mechanisms for symptoms that persist, building a **portfolio** until sustained remission."]
            ] },
            { type: "table", caption: "Most common residual symptoms of depression (Figures 6-42 to 6-44)", head: ["Residual symptom", "Circuit", "Neurotransmitters", "Strategy"], rows: [
              ["**Problems concentrating**", "Dorsolateral PFC", "NE, DA", "**Boost NE or DA**; consider stopping a serotonergic drug if it contributes"],
              ["**Reduced interest**", "PFC, nucleus accumbens", "DA (NE)", "Boost DA/NE"],
              ["**Fatigue**", "PFC (mental); striatum, NA, spinal cord (physical)", "NE, DA", "**Boost NE or DA**"],
              ["**Insomnia/sleep disturbance**", "Hypothalamus", "5HT, GABA, histamine", "**Boost GABA** or **block 5HT or histamine**"]
            ] },
            { type: "callout", kind: "pearl", title: "Unproven but rational", text: "No evidence proves this approach superior, but it matches clinical intuition and neurobiology and individualizes treatment rather than treating every patient with a diagnosis the same way. Clinicians joke that remission requires treating at least **a dozen of the nine** symptoms: associated symptoms like **anxiety** and **pain** count too." },
            { type: "callout", kind: "key", title: "Drugs do not respect diagnoses", text: "A mechanism that treats a symptom in one disorder can treat the same symptom in another: **serotonin and GABA** mechanisms proven in anxiety disorders can reduce anxiety in depression (Chapter 8), and **SNRIs** can treat painful physical symptoms (Chapter 9)." }
          ]
        },
        {
          id: "s6-summary",
          title: "Summary",
          pages: "282",
          blocks: [
            { type: "list", items: [
              "Mood disorders run on a **spectrum** from depression to mania with many **mixed** states; distinguish **unipolar from bipolar** depression and detect **mixed features**.",
              "Several symptoms beyond mood are needed to diagnose a major depressive or manic episode.",
              "The **monoamine hypothesis** has expanded to include **neurotrophic factors, sleep and circadian rhythms, neuroinflammation, stress, genes and environment**.",
              "Mood disorders may be **progressive**, especially when inadequately treated.",
              "Each symptom can be matched to a malfunctioning **circuit**; targeting its neurotransmitters may restore efficient information processing, with the goal of **remission**."
            ] }
          ]
        },
        {
          id: "s6-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 6’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: the happy summer", text: "A 23-year-old with her third depressive episode in four years denies ever being “high.” Her mother recalls a summer when she slept 3 hours a night, started two businesses and spent her savings. Her uncle took lithium.", point: "“**Where’s your mama?**” (collateral history) uncovers hypomania that the patient found pleasant; “**Who’s your daddy?**” reveals a relative on lithium. Early onset, recurrent short episodes and family history all point to **bipolar** depression." },
            { type: "case", title: "Clinical vignette: depressed but revved up", text: "A man with major depression also reports racing thoughts, irritability, more talking than usual and needing little sleep, without euphoria.", point: "Depression **with mixed features** carries about a **fourfold** suicidality risk. First-line treatment is a **serotonin/dopamine antagonist or partial agonist**, not a monoamine reuptake inhibitor." },
            { type: "case", title: "Clinical vignette: better but foggy", text: "After an SSRI lifts her mood, a teacher still cannot concentrate and feels exhausted by midday.", point: "**Concentration** and **fatigue** are the most common residual symptoms, linked to **DLPFC** and striatal/spinal circuits regulated by **NE and DA**. The symptom-based approach adds an NE/DA-boosting mechanism and asks whether the serotonergic drug contributes." },
            { type: "case", title: "Clinical vignette: the late sleeper", text: "A student with depression cannot fall asleep before 3 a.m. and cannot get up for morning classes.", point: "A **phase-delayed** circadian rhythm, whose degree correlates with severity. **Morning bright light** and **early-evening melatonin** can help reset the clock." },
            { type: "case", title: "Clinical vignette: two weeks after delivery", text: "A woman develops severe depression shortly after childbirth.", point: "The neurosteroid theory: the post-delivery **fall in neuroactive steroids** removes **tonic** inhibition at extrasynaptic **δ-containing** GABA-A receptors. A neuroactive steroid PAM (IV infusion in the book; oral zuranolone since 2023) targets these sites." }
          ]
        }
      ]
    }
  ]
});
