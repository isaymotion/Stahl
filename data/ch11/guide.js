/* Chapter 11 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 11 (pp. 449–485).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch11", "guide", {
  intro: "ADHD is not only a disorder of “attention,” and it need not include “hyperactivity.” Stahl breaks it into **inattention** (selective and sustained), **impulsivity** and **hyperactivity**, and links each to a different **prefrontal circuit**. Underneath, he models ADHD as inefficient **“tuning”** of pyramidal neurons by **norepinephrine** (which boosts the signal through **α2A** receptors) and **dopamine** (which cuts the noise through **D1** receptors). Both work by gating **HCN channels** on dendritic spines. Tuning can be too low (classic ADHD) or too high (stress, anxiety, substance use). The treatment half explains why the same **DAT** target gives immediate benefit in ADHD, delayed benefit in depression, and euphoria and addiction in abuse: what matters is **how fast, how much and how long** the transporter is occupied. It then covers the stimulant families (**methylphenidate** and **amphetamine**), the **slow-dose versus pulsatile** idea, the NET inhibitor **atomoxetine**, the **α2A agonists** guanfacine and clonidine, and the pipeline.",
  objectives: [
    "Link **sustained attention** (DLPFC, n-back), **selective attention** (dACC, Stroop), **impulsivity** (OFC) and **hyperactivity** (prefrontal motor cortex) to their circuits, and comorbid oppositional, conduct and mood symptoms to the **VMPFC**.",
    "Contrast **tonic** and **phasic** NE and DA firing and explain receptor sensitivity: **α2A** before **α1/β1**; **D3**, then D2, then **D1**.",
    "Explain the **inverted U**: why both deficient and excessive NE/DA (stress, comorbidity) impair prefrontal function.",
    "Describe how **α2A (Gi, ↓cAMP)** closes and **D1 (Gs, ↑cAMP)** opens **HCN channels**, boosting signal and reducing noise.",
    "Summarize the **neurodevelopmental** model (≈75% heritability, synapse pruning, onset by age 12) and how symptoms change across the lifespan.",
    "Explain how to set **treatment priorities** in complex ADHD and why tics, anxiety and substance abuse complicate stimulant use.",
    "Contrast **methylphenidate** (allosteric DAT/NET blocker, no VMAT action) with **amphetamine** (competitive pseudosubstrate; VMAT2 and DAT reversal at high doses), including isomers and **lisdexamfetamine**.",
    "Apply the **DAT occupancy threshold** (~50–60%) and the **slow-dose vs pulsatile** distinction to choose and adjust formulations.",
    "Explain how **NET inhibitors** raise prefrontal NE and DA without nucleus accumbens action, and when they may be preferred.",
    "Compare **guanfacine** and **clonidine** (α2A selectivity, imidazoline receptors, sedation, hypotension) and their use alone or added to stimulants."
  ],
  parts: [
    {
      title: "Symptoms, circuits and neurobiology",
      sections: [
        {
          id: "s11-symptoms",
          title: "ADHD as a disorder of the prefrontal cortex",
          pages: "449–454",
          blocks: [
            { type: "p", text: "ADHD has a trio of core symptoms: **inattention**, **hyperactivity** and **impulsivity**. Inattention itself splits into problems of **selective attention** (focusing) and of **sustained attention and problem solving** (Figure 11-1). All are thought to arise from **inefficient information processing** in different prefrontal circuits, each a **cortico-striato-thalamo-cortical loop**." },
            { type: "table", caption: "Matching ADHD symptoms to prefrontal circuits (Figures 11-2 to 11-8)", head: ["Symptom domain", "Circuit", "Test that activates it", "Examples"], rows: [
              ["**Sustained attention / problem solving** (executive dysfunction)", "**Dorsolateral prefrontal cortex (DLPFC)** → striatum", "**n-back** test", "Does not finish, disorganized, avoids sustained mental effort"],
              ["**Selective attention** (focus)", "**Dorsal anterior cingulate cortex (dACC)** → striatum → thalamus", "**Stroop** task", "Careless mistakes, does not listen, loses things, distracted, forgetful"],
              ["**Impulsivity**", "**Orbitofrontal cortex (OFC)** → striatum → thalamus", "", "Talks excessively, blurts out, cannot wait turn, interrupts"],
              ["**Motor hyperactivity**", "**Prefrontal motor cortex / supplementary motor area** → **putamen** → thalamus", "", "Fidgets, leaves seat, runs and climbs, always on the go"],
              ["Comorbid symptoms", "**Ventromedial PFC (VMPFC)**", "", "Oppositional (tantrums, argumentative), conduct (cruelty, stealing), mood instability, anxiety"]
            ], wide: true },
            { type: "defs", items: [
              ["n-back test", "A number appears; in the 0-back version you name it, in the 1-back version you report the **previous** number, and higher “n” is harder. It loads the **DLPFC**; patients may under- or over-activate it."],
              ["Stroop task", "Name the **ink color** of a color word (the word “blue” printed in orange → say “orange”). It loads the **dACC**; ADHD patients may fail to activate it or do so only with great effort and quick fatigue."]
            ] },
            { type: "callout", kind: "key", title: "Symptoms cut across diagnoses", text: "Executive dysfunction from an inefficient DLPFC is not unique to ADHD: it appears in **schizophrenia, depression, mania, anxiety, pain and sleep disorders**. Likewise the OFC is linked to impulsivity in ADHD, violence in schizophrenia, **suicidality** in depression, impulsivity in mania and impulsivity/compulsivity in **substance use** (Chapter 13). This is why research is moving from categorical DSM/ICD syndromes toward **symptom dimensions** that map onto circuits, imaging, biomarkers and genetics." },
            { type: "callout", kind: "mnemonic", title: "Four regions, four symptoms", text: "**D**LPFC = **D**oesn’t finish (sustained). **dA**CC = **d**istr**A**cted (selective). **O**FC = **O**ut-of-turn blurting (impulsive). **Motor** cortex = **motor**-driven (hyperactive). The VMPFC carries the comorbid “**V**olatile” symptoms." }
          ]
        },
        {
          id: "s11-tonic-phasic",
          title: "Tonic and phasic NE and DA: receptor sensitivity",
          pages: "454–456",
          blocks: [
            { type: "p", text: "ADHD patients hypothetically fail to activate prefrontal areas properly during attention and problem-solving tasks. This may reflect **delayed maturation** of prefrontal synapses that leaves NE and DA tuning inefficient. These are the same **arousal** neurotransmitters described in Chapter 10: ADHD sits on the same dimmer switch, with cognitive dysfunction at both the under- and over-stimulated ends." },
            { type: "compare", items: [
              { title: "Tonic firing", color: "mech", points: ["Steady baseline “tone” of NE and DA release", "In the PFC, modest NE stimulates sensitive **α2A** receptors and modest DA stimulates **D1/D3**", "In ADHD, tonic tone is hypothetically **too low**"] },
              { title: "Phasic firing", color: "drug", points: ["Bursts of DA release in reward centers (**nucleus accumbens**) that recruit all DA receptor subtypes", "Reinforces **learning and reward**; motivates pursuit of natural rewards (school, career, relationships)", "Overactivated by **stress** or comorbidity, and **hijacked by drugs of abuse**"] }
            ] },
            { type: "table", caption: "Receptor sensitivity sets the order of recruitment", head: ["Transmitter", "Low levels stimulate", "Moderate levels add", "High levels add"], rows: [
              ["**Norepinephrine**", "Postsynaptic **α2A** (most sensitive): improves PFC function", "", "**α1** and **β1**: impair working memory"],
              ["**Dopamine**", "**D3** (most sensitive)", "**D2**", "**D1** (least sensitive), which predominates postsynaptically in the PFC"]
            ] },
            { type: "p", text: "Because **D1** receptors are the least sensitive, low dopamine tone leaves them under-stimulated, weakening downstream signaling and cognition. Raising DA modestly fills D3, then D2, then D1. The goal in ADHD is to enhance **tonic** signaling and only modestly boost **phasic** signaling, so tasks can be done efficiently without the excess that worsens cognition or invites abuse." },
            { type: "callout", kind: "pearl", title: "Moderation is the theme", text: "For both NE and DA, the best prefrontal function comes from **moderate** stimulation. Too little leaves α2A and D1 under-stimulated; too much recruits **α1/β1** and over-stimulates D1." }
          ]
        },
        {
          id: "s11-invertedu",
          title: "Too little or too much: the inverted U",
          pages: "455–457",
          blocks: [
            { type: "p", text: "Stahl describes **two kinds** of mistuning. In **deficient arousal**, low tonic NE and DA firing under-stimulates α2A and D1 receptors (Figures 11-11 and 11-12). In **excessive arousal**, NE and DA are driven too high by **stress** or comorbid **anxiety, substance abuse or mania** (Figures 11-13 and 11-14). Then α1 (and β1) receptors are recruited and D1 is over-stimulated, which also impairs working memory." },
            { type: "flow", title: "Figure 11-15: pyramidal cell function across the inverted U", steps: [
              ["D1 and α2A too low", "All incoming signals look the same: **unguided** attention", "mech"],
              ["Optimal D1 and α2A", "Top of the curve: focused, guided attention", "clin"],
              ["D1 and α2A too high, α1 recruited", "Signals jumbled: **misdirected** attention", "case"]
            ] },
            { type: "callout", kind: "analogy", title: "The dimmer switch again", text: "The arousal spectrum from Chapter 10 applies here: **inattentive** (understimulated) on one side, **hypervigilant** and anxious (overstimulated) on the other, with “awake, alert, problem solving” at the top. The same patient can move along it with stress." }
          ]
        },
        {
          id: "s11-hcn",
          title: "Signal and noise: α2A, D1 and HCN channels",
          pages: "457–463",
          blocks: [
            { type: "p", text: "In the PFC, **α2A** and **D1** receptors sit on the **dendritic spines** of pyramidal neurons, where they **gate** incoming signals. Both act through **cAMP**, which links them to [[target:hcn|hyperpolarization-activated cyclic nucleotide-gated (HCN) cation channels]]. An **open** HCN channel lowers membrane resistance and **shunts** the input out of the spine, so the signal leaks away. A **closed** channel lets the signal survive and travel down the neuron, strengthening connections with similar neurons." },
            { type: "compare", items: [
              { title: "NE at α2A: strengthens the signal", color: "clin", points: ["α2A is coupled to **Gi** → **↓cAMP**", "HCN channel **closes**", "Input survives → **signal increased**", "Source: **locus coeruleus**"] },
              { title: "DA at D1: weakens the signal (reduces noise)", color: "drug", points: ["D1 is coupled to **Gs** → **↑cAMP**", "HCN channel **opens**", "Excess opening leaks input → signal weakened or lost", "Moderate D1 stimulation **reduces noise** (blocks inappropriate connections)", "Source: **ventral tegmental area**"] }
            ] },
            { type: "flow", title: "Figures 11-20 and 11-21: tuned versus mistuned", steps: [
              ["Normal NE + normal DA", "**Signal up, noise down**: guided attention, focus, control of emotions and impulses", "clin"],
              ["Low NE + low DA (ADHD)", "**Signal down, noise up**: no coherent output", "case"],
              ["Symptoms depend on location", "Mistuned DLPFC, dACC, OFC or motor neurons give inattention, impulsivity or hyperactivity", "dx"]
            ], vertical: true, note: "If one transmitter is low and the other high, the symptom mix changes again. Knowing both levels and the region involved might one day predict a patient’s symptom profile." },
            { type: "callout", kind: "mnemonic", title: "NE = signal, DA = noise", text: "**N**orepinephrine **N**arrows the leak (α2A, Gi, closes HCN) → more **signal**. **D**opamine **D**ampens chatter (D1, Gs, opens HCN) → less **noise**, but too much D1 drains the signal too." },
            { type: "callout", kind: "exam", title: "Commonly tested", text: "α2A = **Gi**, ↓cAMP, HCN **closed**, signal **↑**. D1 = **Gs**, ↑cAMP, HCN **open**, noise **↓** (signal lost if excessive). Both receptors sit on **spines** of PFC pyramidal neurons." }
          ]
        },
        {
          id: "s11-neurodev",
          title: "Neurodevelopment and the lifespan",
          pages: "463–466",
          blocks: [
            { type: "p", text: "ADHD is now seen as a disorder that begins in **childhood** but often **persists into adulthood**, like most psychiatric disorders, whose onsets cluster in the years of critical brain maturation (Figures 11-22 and 11-23). ADHD has one of the **strongest genetic components** in psychiatry, about **75%**, with many genes and complex, multifactorial causation." },
            { type: "steps", title: "The delayed-maturation model", items: [
              ["Synapse overgrowth", "Prefrontal synapses increase rapidly up to about **age 6**, when inattentive symptoms become noticeable."],
              ["Pruning", "Up to **half** of these synapses are eliminated by adolescence. Errors in forming, and especially in **selecting synapses for removal**, may set up lifelong ADHD."],
              ["Late PFC maturation", "Sensorimotor and limbic regions mature first; the PFC matures last, and in ADHD cortical development is **delayed**."],
              ["Compensation", "People who form new compensating synapses after age 12 may “**grow out of**” ADHD, which is why adult prevalence is about **half** that in children."]
            ] },
            { type: "table", caption: "Figure 11-24: how ADHD changes with age", head: ["Feature", "Preschool", "School age to adolescence", "Adulthood"], rows: [
              ["**Inattention**", "Present but hard to identify (PFC too immature)", "Prominent", "**Persists**"],
              ["**Hyperactivity / impulsivity**", "Key symptoms", "Key symptoms, declining by adolescence", "Less overt (may be expressed differently)"],
              ["**Comorbidity**", "Low", "Rising", "**Skyrockets** (substance abuse, mood, anxiety)"],
              ["Consequences", "Behavioral disturbance", "Academic problems, social difficulty, self-esteem, smoking, injury", "Occupational, relationship and legal problems, accidents"]
            ], wide: true },
            { type: "list", title: "Adult ADHD is underdiagnosed", items: [
              "About **half** of affected children and adolescents are diagnosed and treated, but **fewer than one in five** adults.",
              "DSM-5 moved the onset requirement from before **age 7** (DSM-IV) to before **age 12**.",
              "Adults struggle to give accurate **retrospective** histories, especially if never identified as children.",
              "Experts debate **late-onset ADHD** (onset after 12, even up to 45): is it ADHD or executive dysfunction from depression, anxiety or a sleep disorder?",
              "Practical point: **screen for cognitive symptoms and treat them**, whether they belong to ADHD or a comorbidity."
            ] },
            { type: "callout", kind: "caution", title: "Preschool ADHD", text: "Treating preschool ADHD is **controversial**: most stimulant studies involve children **over age 6**." }
          ]
        }
      ]
    },
    {
      title: "Treatment principles",
      sections: [
        {
          id: "s11-priorities",
          title: "Which symptoms to treat first?",
          pages: "466–467",
          blocks: [
            { type: "p", text: "In complex patients it helps to **prioritize**, even if some comorbid symptoms wait or briefly worsen (Figure 11-25). There are no definitive studies; this is expert clinical experience." },
            { type: "flow", title: "Figure 11-25: a typical order of treatment in adults", steps: [
              ["Alcohol / stimulant / substance abuse", "Little progress is possible while abuse continues: manage it first", "case"],
              ["Mood disorders", "", "dx"],
              ["Anxiety disorders", "", "pharm"],
              ["ADHD", "Often a “fine-tune” added once mood and anxiety improve", "clin"],
              ["Nicotine dependence", "Address once cognitive symptoms are controlled", "mech"]
            ], vertical: true, note: "Treatment in **children** often **begins** at ADHD; treatment in **adults** often **ends** before reaching it." },
            { type: "compare", items: [
              { title: "The pitfall in children", color: "mech", points: ["ADHD is treated first, and comorbidities are evaluated only after a **poor stimulant response**"] },
              { title: "The pitfall in adults", color: "case", points: ["Substance, mood and anxiety disorders absorb all the attention; ADHD is an **afterthought** and rarely treated", "Adult ADHD without comorbidity is **rare**, so most adults with ADHD go untreated"] }
            ] },
            { type: "callout", kind: "pearl", title: "Keep a high index of suspicion", text: "In adults with mood, anxiety or substance use disorders, look for ADHD and aim for **full remission**. In practice that means using ADHD treatments as **augmenting agents** to first-line treatment of the comorbidity, rather than the other way around." },
            { type: "callout", kind: "key", title: "ADHD and smoking", text: "Adolescents and adults with ADHD smoke about as often as people with schizophrenia, roughly **twice** the US population rate. **Nicotine** releases dopamine and enhances arousal, so it may subjectively relieve ADHD symptoms, especially when ADHD is untreated. Smoking cessation is covered in Chapter 13." }
          ]
        },
        {
          id: "s11-stim-principles",
          title: "Stimulant principles: dialing NE and DA to the top of the curve",
          pages: "467–469",
          blocks: [
            { type: "p", text: "When NE and DA are both too low, prefrontal output is weak: **signal down** (NE low) and **noise up** (DA low). Clinically that looks like being unable to sit and focus, with fidgeting and shifting attention. Treatment **dials up both** NE and DA to the top of the inverted U (Figure 11-26). This can be done with **NE/DA reuptake-blocking stimulants** and with some **noradrenergic** agents." },
            { type: "flow", title: "Figure 11-27: chronic stress in ADHD", steps: [
              ["At first", "Stress adds to ADHD: **high** NE and DA, signal reduced, noise increased", "case"],
              ["Chronic stress", "NE and DA **deplete** and fall low, with still-poor output", "mech"],
              ["Treatment", "Raise NE and DA to optimal: signal up, noise down", "clin"]
            ] },
            { type: "list", title: "Hard combinations", items: [
              "**ADHD + tics**: tics reflect hypothetically **excess DA in the motor striatum** (needing DA blockade) while ADHD reflects **deficient cortical DA** (needing stimulants). Stimulants may help ADHD but **worsen tics**.",
              "**ADHD + conduct, oppositional, intermittent explosive, disruptive behavior, psychotic or bipolar disorders**: excess DA in some prefrontal circuits alongside deficient DA in others makes these among the **most challenging** patients.",
              "**ADHD + anxiety**: a stimulant may improve ADHD but **worsen anxiety**.",
              "**ADHD + substance abuse**: it makes little sense to give stimulants to drug abusers."
            ] },
            { type: "callout", kind: "caution", title: "Stimulant plus serotonin–dopamine antagonist", text: "In heroic cases, a stimulant can be combined with a **serotonin–dopamine antagonist**, which hypothetically **releases DA in the PFC** (helping D1 there) while **blocking limbic D2**. This is **controversial** and best left to experts for patients who fail monotherapy (mechanism in [[ch:ch05|Chapter 5]])." },
            { type: "callout", kind: "pearl", title: "Tonic activators for comorbid ADHD", text: "For ADHD with anxiety, depression or substance abuse, augment the antidepressant or anxiolytic with a **long-acting NET inhibitor** or an **α2A agonist** rather than a stimulant. Some NET inhibitor studies show improvement in both ADHD and **anxiety**, and in both ADHD and **heavy drinking**." }
          ]
        }
      ]
    },
    {
      title: "Stimulants",
      sections: [
        {
          id: "s11-mph",
          title: "Methylphenidate",
          pages: "469–471",
          blocks: [
            { type: "p", text: "The so-called stimulants are better described as **norepinephrine and dopamine reuptake blockers**. At clinical oral doses, [[drug:methylphenidate|methylphenidate]] blocks both **NET** and **DAT**. It binds **allosterically**, at a site separate from where the monoamine binds, much like antidepressant reuptake inhibitors. It simply **stops the pump**: methylphenidate is **not transported** into the neuron and has **no action on VMAT2**." },
            { type: "steps", title: "Figure 11-29A: normal dopamine handling", items: [
              ["Release", "DA is released and acts at postsynaptic receptors."],
              ["DAT", "DA is taken back into the terminal by the **dopamine transporter**."],
              ["VMAT2", "DA is packaged into vesicles, keeping synaptic and cytoplasmic DA below toxic levels."]
            ] },
            { type: "p", text: "Methylphenidate is a racemic mix of **D- and L-isomers**; the **D-isomer** is much more potent at both NET and DAT. The single enantiomer [[drug:dexmethylphenidate|D-methylphenidate]] is available in immediate- and controlled-release forms." },
            { type: "table", caption: "Table 11-1 (selected): D,L-methylphenidate formulations", head: ["Formulation", "Brand", "Profile", "Dosing"], rows: [
              ["IR tablet / oral solution", "Ritalin / Methylin", "Early peak, **3–4 h**", "Second dose at lunch"],
              ["ER tablet", "Ritalin SR, Methylin ER, Metadate ER", "Early peak, 3–8 h", "Lunch dose may be needed"],
              ["ER tablet (osmotic)", "**Concerta**", "Small early peak, **12 h**", "Once in the morning"],
              ["ER capsule", "Metadate CD", "Strong early peak, 8 h", "Once in the morning"],
              ["ER capsule", "Ritalin LA", "**Two** strong peaks (early and ~4 h), 6–8 h", "Once in the morning"],
              ["ER capsule", "Aptensio XR", "Up to 12 h", "Once in the morning"],
              ["ER suspension / chewable", "Quillivant XR / QuilliChew ER", "Peak 5 h; 12 h / 8 h", "Once in the morning"],
              ["Transdermal patch", "**Daytrana**", "Peak 7–10 h, 12 h", "Once in the morning"],
              ["ER orally disintegrating tablet", "Cotempla XR-ODT", "12 h", "Once in the morning"],
              ["Delayed-release ER capsule", "**Jornay PM**", "Absorption delayed **10 h**, single peak at 14 h", "Once in the **evening**"],
              ["ER capsule", "Adhansia XR", "Two peaks (1.5 h and 12 h)", "Once in the morning"]
            ], wide: true, note: "Most are approved from age 6. D-methylphenidate (Table 11-2): **Focalin** IR (4–6 h) and **Focalin XR** (two peaks at 1.5 and 6.5 h, 8–10 h; ages 6–17 and adults)." },
            { type: "callout", kind: "exam", title: "Methylphenidate in one line", text: "Allosteric, **non-competitive** DAT/NET blocker; **not transported**; **no VMAT2** action; **D > L** isomer." },
            { type: "update", year: "2021", title: "A methylphenidate prodrug combination", text: "**Azstarys** (serdexmethylphenidate, a prodrug of dexmethylphenidate, combined with immediate-release dexmethylphenidate) was approved by the FDA on March 2, 2021 for ADHD in patients aged 6 and older. The prodrug converts to dexmethylphenidate in the body, aiming for early onset with long duration.", source: "Drugs.com approval history; KemPharm, March 2021" }
          ]
        },
        {
          id: "s11-amph",
          title: "Amphetamine",
          pages: "472–475",
          blocks: [
            { type: "p", text: "[[drug:amphetamine|Amphetamine]] also blocks NET and DAT, but differently. It is a **competitive inhibitor and pseudosubstrate**: it binds the **same site** as the monoamine. At ADHD doses the clinical difference from methylphenidate can be **small**. At the **high doses** used by stimulant abusers, extra actions appear." },
            { type: "steps", title: "Figure 11-32: amphetamine at the DA terminal (the yin and the yang)", items: [
              ["Competitive inhibition", "Amphetamine occupies the DA site on DAT."],
              ["Transport in", "It **hitchhikes** into the terminal via DAT, which methylphenidate and antidepressants do not."],
              ["VMAT2", "In sufficient amounts (abuse doses) it is a competitive inhibitor of **VMAT2** and is carried into vesicles."],
              ["Displacement", "It displaces DA from vesicles into the cytoplasm."],
              ["Channels open", "High cytoplasmic DA opens presynaptic channels, dumping DA into the synapse."],
              ["DAT reversal", "DAT runs **backwards**, pumping DA out. The same happens at NE neurons."]
            ]},
            { type: "p", text: "Steps 3–6 (vesicle entry onward) are linked not to ADHD benefit but to **reinforcement, reward and euphoria** in abuse, alongside methamphetamine and cocaine (Chapter 13)." },
            { type: "compare", items: [
              { title: "D-amphetamine", color: "drug", points: ["**D > L** for DAT binding", "Relatively **more DAT** action at low ADHD doses"] },
              { title: "D,L mixed amphetamine salts", color: "pharm", points: ["D and L are roughly **equipotent at NET**", "Relatively more NET action than D-amphetamine, but still **more DAT than NET** overall"] }
            ] },
            { type: "p", text: "[[drug:lisdexamfetamine|Lisdexamfetamine]] is D-amphetamine linked to the amino acid **lysine**. It is inactive until the lysine is cleaved off, so D-amphetamine is released and absorbed **slowly** rather than rapidly." },
            { type: "callout", kind: "caution", title: "Where lisdexamfetamine is activated", text: "The book says lisdexamfetamine is cleaved “in the stomach.” In fact it is absorbed intact and converted to D-amphetamine mainly **in the blood**, by peptidases in **red blood cells**. The book’s key point stands: the prodrug delivers D-amphetamine slowly." },
            { type: "table", caption: "Tables 11-3 and 11-4 (selected): amphetamine formulations", head: ["Formulation", "Brand", "Duration", "Dosing"], rows: [
              "D,L-amphetamine",
              ["IR tablet", "Adderall; Evekeo", "4–6 h; 6 h", "Second dose at lunch (from **age 3**)"],
              ["ER capsule", "**Adderall XR**", "8–12 h", "Once in the morning"],
              ["ER capsule", "**Mydayis**", "Up to **16 h**", "Once in the morning (age 13+)"],
              ["ER ODT / suspension", "Adzenys XR-ODT; Dyanavel XR; Adzenys ER", "8–12 h; 10–12 h", "Once in the morning"],
              "D-amphetamine",
              ["IR tablet / solution", "Zenzedi; ProCentra", "4–6 h", "Second dose at lunch (ages 3–16)"],
              ["ER capsule (spansule)", "Dexedrine", "6–8 h", "Once in the morning"],
              ["Prodrug capsule", "**Vyvanse** (lisdexamfetamine)", "Up to **12 h**, peak 3.5 h", "Once in the morning (6–17 and adults)"]
            ], wide: true },
            { type: "update", year: "2022", title: "An amphetamine patch", text: "**Xelstrym** (dextroamphetamine transdermal system) was approved by the FDA on March 22, 2022 for ADHD in adults and children aged 6 and older. It is worn for **9 hours** once daily.", source: "Drugs.com approval history; Noven, March 23, 2022" },
            { type: "update", year: "2023", title: "Generic lisdexamfetamine", text: "The FDA approved the first **generic versions of Vyvanse** (lisdexamfetamine) in late August 2023, during a period of ongoing ADHD stimulant shortages.", source: "Psychiatric Times, August 29, 2023; Endpoints News" }
          ]
        },
        {
          id: "s11-dat",
          title: "The mysterious DAT and the therapeutic threshold",
          pages: "473–477",
          blocks: [
            { type: "p", text: "Targeting the **DAT** gives strikingly different outcomes depending on **how fast, how long and how much** it is engaged. Stahl solves the mystery in three parts." },
            { type: "table", caption: "One target, four outcomes", head: ["Outcome", "How the DAT is engaged", "Hypothetical basis"], rows: [
              ["**Delayed** antidepressant effect", "Continuous, round-the-clock occupancy for **weeks**", "Downstream molecular events (neurotrophic factors); improved **tonic** DA"],
              ["**Immediate** benefit in ADHD and sleepiness", "Occupancy above a **threshold (~50–60%)**; effect stops as soon as it falls below", "Controlled boost of **tonic** and judicious boost of **phasic** DA"],
              ["**Immediate** euphoria (abuse)", "**Rapid, high** occupancy", "Massive **phasic** DA release in the nucleus accumbens"],
              ["**Delayed** addiction", "Repeated pulsatile exposure", "Reward circuit hijacked (Chapter 13)"]
            ], wide: true },
            { type: "flow", title: "Figure 11-34: getting the timing right", steps: [
              ["Just right", "Above threshold on waking, through the day, below it by bedtime", "clin"],
              ["Too late or too short", "**Morning** symptoms or **late-afternoon/evening** symptoms", "mech"],
              ["Too long", "Evening side effects and **insomnia**", "case"],
              ["Rebound", "Levels drop too early in the evening: **hyperactivity** and insomnia", "dx"]
            ], note: "As with hypnotics (Chapter 10), the aim is the **Goldilocks** profile: not too hot, not too cold." },
            { type: "p", text: "The threshold effect is so strong that it has spawned **more than two dozen** versions of just two molecules, each aiming for rapid morning onset, enough duration and offset before bed with **once-daily** dosing. No single profile fits every patient, or even the same patient every day." },
            { type: "list", title: "Questions to fit the formulation to the patient", items: [
              "Should it last **6 hours or 16 hours**?",
              "How much effect is wanted in the **evening** before bed?",
              "Is **rapid morning onset** needed, or even waking up already above threshold (evening-dosed delayed release)?"
            ] },
            { type: "callout", kind: "exam", title: "Threshold numbers", text: "ADHD therapeutic action needs roughly **50–60% DAT occupancy**. Rapid, near-complete occupancy is what makes a DAT blocker **reinforcing**, whether methylphenidate, amphetamine, modafinil, methamphetamine or cocaine." }
          ]
        },
        {
          id: "s11-slowfast",
          title: "Slow-dose versus pulsatile stimulants",
          pages: "476–479",
          blocks: [
            { type: "p", text: "The faster and more completely a DAT blocker occupies its target, the more **reinforcing and abusable** it is. Speed of delivery rises from **oral** to **intranasal** to **intravenous** to **smoked**. High doses by these routes cause sudden, near-complete DAT blockade with a surge of synaptic DA, enough to **reverse** DAT. Gradual, sustained, lower occupancy is a different experience entirely." },
            { type: "compare", items: [
              { title: "Slow-dose stimulants (Figure 11-33)", color: "clin", points: ["OROS and LA methylphenidate, XR D-methylphenidate, **transdermal** methylphenidate, D-amphetamine spansules, XR mixed salts, **lisdexamfetamine**", "Slow onset, long duration: occupy prefrontal **NETs** enough to enhance **tonic** NE (α2A) and DA (D1)", "Do not occupy accumbens **DATs** fast or fully enough to boost **phasic** D2 signaling", "Hypothetically **lower abuse** potential"] },
              { title: "Pulsatile stimulants (Figure 11-35)", color: "case", points: ["**Immediate-release** oral forms, and any IV, intranasal or smoked stimulant (including cocaine, methamphetamine)", "Rapid rise amplifies **both tonic and phasic** NE and DA", "Rapid phasic DA in the **nucleus accumbens** = **euphoria and abuse**"] }
            ] },
            { type: "p", text: "Controlled-release preparations give a slowly rising, steady drug level, so DA firing stays mostly **tonic**. Some phasic firing is fine for learning and salience, but DA follows an inverted U: somewhat too much mimics **stress**, and much more mimics **drug abuse** (Figure 11-36). For this reason **immediate-release stimulants are increasingly avoided**, especially in adolescents and adults." },
            { type: "callout", kind: "key", title: "Use both transporters", text: "The best use of stimulants targets **NETs as well as DATs** instead of pushing the dose for mostly DAT effects. NET inhibition in the PFC raises both **NE** (α2A) and **DA** (D1), since prefrontal DA is cleared by NET. That gives benefit while occupying fewer accumbens DATs. The ideal: **slow onset, robust but sub-saturating** transporter blockade, **long duration**, symptom relief and **no euphoria**." },
            { type: "callout", kind: "pearl", title: "Abuse-resistant matrices", text: "Some newer controlled-release forms use a matrix that **resists crushing** for snorting, smoking or injecting." },
            { type: "update", year: "2023", title: "Stronger stimulant warnings", text: "In May 2023 the FDA required the **boxed warning** of all prescription stimulants to describe the risks of **misuse, abuse, addiction and overdose** consistently, to advise close monitoring, and to tell patients **never to share** their stimulants.", source: "FDA Drug Safety Communication, May 2023; APhA, May 15, 2023" }
          ]
        }
      ]
    },
    {
      title: "Noradrenergic treatments and the future",
      sections: [
        {
          id: "s11-nri",
          title: "Atomoxetine and other NET inhibitors",
          pages: "480–481",
          blocks: [
            { type: "p", text: "[[drug:atomoxetine|Atomoxetine]] is a **selective norepinephrine reuptake inhibitor (NRI)**. Blocking prefrontal **NETs** raises both **NE and DA** there, because NET also clears dopamine in the PFC. The **nucleus accumbens** has few NE neurons and NETs, so NRIs do not raise NE or DA there. That is why they are thought to lack **reinforcing, abuse or addiction** potential (Figure 11-38)." },
            { type: "compare", items: [
              { title: "NRI: atomoxetine", color: "clin", points: ["Blocks **NET** only", "↑ NE and DA in the **PFC**", "No accumbens action"] },
              { title: "NDRI: bupropion", color: "pharm", points: ["[[drug:bupropion|Bupropion]]: weak NET **and** weak DAT inhibitor", "Also reaches **DAT** in the accumbens (no DATs in the PFC)"] }
            ] },
            { type: "p", text: "Other agents with NRI actions have been used for ADHD with variable success: [[drug:reboxetine|reboxetine]], bupropion, the SNRIs (**venlafaxine, duloxetine, desvenlafaxine, milnacipran**) and the TCAs [[drug:desipramine|desipramine]] and [[drug:nortriptyline|nortriptyline]]. Only **atomoxetine** is well investigated and **approved** for ADHD in children and adults." },
            { type: "flow", title: "Figure 11-39: atomoxetine in stressed, comorbid ADHD", steps: [
              ["Excess phasic NE and DA", "Stress and comorbidity overdrive prefrontal circuits", "case"],
              ["Continuous NET blockade", "Slow onset, long duration, essentially perpetual", "drug"],
              ["Restore tone", "Tonic D1 and α2A signaling restored; phasic NE/DA turned down; receptors desensitized", "clin"],
              ["Possible bonus", "Less stress, with reductions in **anxiety, depression and heavy drinking**", "found"]
            ] },
            { type: "compare", items: [
              { title: "Stimulants", color: "drug", points: ["Effects follow momentary plasma levels and transporter occupancy", "Larger effect sizes in short-term trials"] },
              { title: "Selective NRIs", color: "mech", points: ["**24-hour** relief, like SSRIs/SNRIs in depression", "Smaller short-term effect sizes, especially without comorbidity", "Not necessarily inferior in **stimulant-naïve** patients or with long treatment (**over 8–11 weeks**)", "May be **preferred** with complex comorbidity, stimulant side effects or stimulant non-response"] }
            ] },
            { type: "callout", kind: "pearl", title: "Too much NRI", text: "α2 mechanisms dominate at low-to-moderate NE release, **α1** at high release. Low NRI doses first boost α2A and cognition; high doses can swamp the synapse and cause **sedation or cognitive impairment**. If that happens, **lower the dose**." }
          ]
        },
        {
          id: "s11-alpha2",
          title: "α2A agonists: guanfacine and clonidine",
          pages: "481–484",
          blocks: [
            { type: "table", caption: "α2-adrenergic receptor subtypes (Figure 11-42)", head: ["Subtype", "Main location", "Role"], rows: [
              ["**α2A**", "Widely distributed; high in **cortex** and **locus coeruleus**; most prevalent in the PFC", "Main mediator of NE effects in the PFC: inattention, hyperactivity, impulsivity"],
              ["**α2B**", "**Thalamus**", "**Sedation**"],
              ["**α2C**", "Densest in **striatum** (text); figure places it in the locus coeruleus", "Sedation and hypotension (figure)"],
              ["α1 (α1A, α1B, α1D)", "", "Generally oppose α2; dominate at **high** NE release (stress) and impair cognition"]
            ], note: "α2 receptors are dense in the **PFC** but sparse in the **nucleus accumbens**, which fits the lack of abuse potential of α2 agonists." },
            { type: "callout", kind: "caution", title: "Where is α2C?", text: "The text places α2C receptors **densest in the striatum**, while the Figure 11-42 legend places them in the **locus coeruleus** with few in the PFC. Expect the striatum answer if asked about density; either way, α2C contributes little in the PFC." },
            { type: "compare", items: [
              { title: "Guanfacine", color: "clin", points: ["[[drug:guanfacine|Guanfacine]]: relatively **selective α2A** agonist (**15–60×** α2A over α2B/α2C)", "**10× weaker** than clonidine at sedation and lowering blood pressure, yet **25× more potent** at enhancing PFC function", "**Guanfacine ER** (once daily, fewer peak-dose effects) is the form approved for ADHD", "Approved as **augmentation** for inadequate stimulant response"] },
              { title: "Clonidine", color: "drug", points: ["[[drug:clonidine|Clonidine]]: **nonselective** α2 agonist (α2A, α2B, α2C)", "Also binds [[target:imidazoline|imidazoline receptors]], adding **sedation and hypotension**", "Approved for hypertension; only **controlled-release** clonidine is approved for ADHD", "Extra receptor actions add side effects"] }
            ] },
            { type: "p", text: "Both drugs work by directly stimulating **postsynaptic** α2A receptors in the PFC, strengthening network inputs. Both, especially as ER forms, are used **off-label** for **conduct disorder, oppositional defiant disorder** and **Tourette syndrome**. Neither acts at postsynaptic DA receptors, which fits their lack of abuse potential." },
            { type: "flow", title: "Figure 11-43: who might respond to α2A monotherapy?", steps: [
              ["Low NE, DA normal", "Signal lost in background noise: hyperactivity, impulsivity, inattention", "case"],
              ["Selective α2A agonist", "Directly boosts the signal", "drug"],
              ["Result", "Sits still, behaves, pays attention", "clin"]
            ], note: "There is no way to identify these patients in advance except an **empiric trial of guanfacine ER**." },
            { type: "flow", title: "Figure 11-44: ADHD with oppositional symptoms", steps: [
              ["Untreated", "VMPFC: **very low NE** (signal much reduced) and **low DA** (noise up): tantrums, arguing, disobedience, aggression", "case"],
              ["Stimulant alone", "Noise reduced, but NE still low: **partial** improvement", "pharm"],
              ["Stimulant + α2A agonist", "NE optimized: signal increased; cooperates and behaves", "clin"]
            ], vertical: true },
            { type: "callout", kind: "exam", title: "Guanfacine vs clonidine", text: "Guanfacine = **α2A-selective**, less sedation and hypotension, ER approved alone **and as stimulant add-on**. Clonidine = **α2A/B/C + imidazoline**, more sedating and hypotensive, ER approved for ADHD. Both: no abuse potential, off-label for ODD, conduct disorder and **tics/Tourette**." },
            { type: "update", year: "2024", title: "A liquid clonidine for ADHD", text: "**Onyda XR** (clonidine extended-release oral suspension) was approved by the FDA in May 2024 for ADHD in children aged 6 and older, alone or added to stimulants. It is dosed once daily at **bedtime**, the first liquid nonstimulant for ADHD.", source: "Drugs.com approval history; Tris Pharma, May 29, 2024" }
          ]
        },
        {
          id: "s11-future",
          title: "Future treatments",
          pages: "484–485",
          blocks: [
            { type: "p", text: "New delivery technologies for **methylphenidate and amphetamine** keep coming. They allow custom durations, can be patented, and increasingly come in **abuse-resistant** matrices." },
            { type: "table", caption: "Pipeline agents in the book", head: ["Agent", "Mechanism", "Status in the book"], rows: [
              ["[[drug:viloxazine|Viloxazine ER]]", "**NET** inhibitor with actions at **5HT2B and 5HT2C**; formerly an antidepressant abroad, never marketed in the US", "Late-stage development for ADHD"],
              ["[[drug:mazindol|Mazindol]]", "**DAT** inhibitor, once approved for appetite suppression", "In testing"],
              ["[[drug:centanafadine|Centanafadine]]", "**Triple** (5HT–NE–DA) reuptake inhibitor", "In testing"]
            ] },
            { type: "update", year: "2021–2022", title: "Viloxazine approved", text: "**Viloxazine ER (Qelbree)** was approved by the FDA on April 2, 2021 for ADHD in patients aged 6–17, and on April 29, 2022 for **adults**. It is a **nonstimulant** and **not a controlled substance**; its label calls it a serotonin norepinephrine modulating agent and warns of **suicidal thoughts and behaviors**.", source: "Drugs.com approval history; Supernus, April 2022" },
            { type: "update", year: "2026", title: "Centanafadine approved", text: "**Centanafadine (Simtriyo)**, a norepinephrine, dopamine and serotonin reuptake inhibitor, was approved by the FDA on July 24, 2026 for ADHD in **adults and children aged 6 and older**, after four positive phase 3 trials (two adult, one adolescent, one pediatric). It is a once-daily extended-release capsule; at approval, launch was awaiting **DEA scheduling**.", source: "Otsuka, July 24, 2026; Psychiatric Times; ADDitude, July 29, 2026" }
          ]
        },
        {
          id: "s11-summary",
          title: "Summary and clinical vignettes",
          pages: "485",
          blocks: [
            { type: "list", title: "Take-home points", items: [
              "Core symptoms (**inattention, impulsivity, hyperactivity**) map to specific **prefrontal circuits**.",
              "ADHD is **NE/DA dysregulation** in the PFC: **deficient** in some patients, **excessive** (stress, comorbidity) in others.",
              "Treatment aims to restore efficient prefrontal processing: amplify **tonic** but not phasic NE and DA by controlling the **rate, degree and duration** of transporter occupancy.",
              "**NRIs** (atomoxetine) may suit adults with **chronic stress and comorbidity**; **α2A agonists** boost the signal directly.",
              "Children and adults differ in presentation and comorbidity and need different approaches."
            ] },
            { type: "case", title: "Clinical vignette: the afternoon crash", text: "A 9-year-old on IR methylphenidate in the morning focuses well until lunch, then becomes hyperactive and irritable in class; his evenings are chaotic.", point: "**Too cold** (too short above the DAT threshold), with **rebound**. Switch to a once-daily **slow-dose** formulation (e.g., OROS methylphenidate, ~12 h) rather than adding IR doses." },
            { type: "case", title: "Clinical vignette: can’t fall asleep", text: "A teenager on Mydayis (up to 16 h) takes it at 7 a.m. and is still wide awake at midnight.", point: "**Too hot / too long** above threshold: evening side effects and **insomnia**. Choose a shorter-acting formulation or move the dose earlier." },
            { type: "case", title: "Clinical vignette: ADHD, anxiety and drinking", text: "A 34-year-old accountant with generalized anxiety and heavy weekend drinking has lifelong disorganization and trouble finishing tasks.", point: "Prioritize the **alcohol** problem and the anxiety. For the ADHD, a **NET inhibitor** (atomoxetine) or **guanfacine ER** is preferred to a stimulant: no abuse potential and possible benefit for anxiety and heavy drinking." },
            { type: "case", title: "Clinical vignette: partial response with defiance", text: "An 11-year-old on lisdexamfetamine is less fidgety and more focused but still argues, defies and has tantrums.", point: "Hypothetically **NE still low in the VMPFC**. Add **guanfacine ER** (approved as stimulant augmentation, may help oppositional symptoms)." },
            { type: "case", title: "Clinical vignette: ADHD with tics", text: "A boy with ADHD develops worse motor tics after starting a stimulant.", point: "Excess **striatal DA** (tics) versus deficient **cortical DA** (ADHD). Consider an **α2 agonist** (guanfacine or clonidine, used off-label for Tourette) or a NET inhibitor instead of, or with, a lower stimulant dose." }
          ]
        }
      ]
    }
  ]
});
