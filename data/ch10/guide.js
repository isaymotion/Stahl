/* Chapter 10 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 10 (pp. 401–448).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch10", "guide", {
  intro: "Sleep, like pain, is a psychiatric **vital sign**. This chapter places insomnia and sleepiness on one **arousal spectrum**: insomnia is **too much arousal at night**, excessive daytime sleepiness is **too little arousal by day**. It adds two neurotransmitter networks, **histamine** (made only in the tuberomammillary nucleus) and **orexin/hypocretin** (which stabilizes wakefulness), and explains the **sleep/wake switch**, the homeostatic and circadian drives, and the **ultradian** cycle. Then it covers every class of hypnotic (benzodiazepines, **Z drugs**, **DORAs**, trazodone, antihistamines, α2δ ligands, melatonergic agents) and why **time above a receptor-occupancy threshold** matters more than half-life. The last third covers sleepiness: **OSA**, **narcolepsy**, idiopathic hypersomnia, **circadian rhythm disorders**, and the wake-promoting agents caffeine, stimulants, **modafinil/armodafinil**, **solriamfetol**, **pitolisant** and **sodium oxybate**.",
  objectives: [
    "Describe the **arousal spectrum** and the neurotransmitters of the ascending reticular activating system (Figure 10-1).",
    "Trace **histamine** synthesis (histidine decarboxylase), termination (HNMT then MAO-B; no reuptake pump), receptors (**H1, H2, H3**, NMDA polyamine site) and the **TMN** projections.",
    "Describe **orexin A and B**, the **OX1** and **OX2** receptors, and how orexin **stabilizes** wakefulness through every arousal neurotransmitter.",
    "Explain the **homeostatic** (adenosine) and **circadian** (SCN, light) drives, the **VLPO** sleep switch, the **ultradian** cycle, and how each neurotransmitter changes across sleep stages.",
    "Define insomnia as **hyperarousal**, list its comorbidities and suggested objective criteria, and explain the DSM-5 shift away from “secondary” insomnia.",
    "Compare hypnotics that **enhance sleep drive** (GABA-A PAMs) with those that **reduce arousal** (DORAs, 5HT2A/α1/H1 antagonists), including α-subunit selectivity and dependence risks.",
    "Apply the **receptor-occupancy threshold** concept (25–30%, 65%, ~80%) and the **Goldilocks** half-life idea to choose and adjust hypnotics.",
    "Describe **OSA, idiopathic hypersomnia, narcolepsy** (with cataplexy and orexin loss) and the **circadian rhythm disorders**, with their light and melatonin treatments.",
    "Explain the mechanisms of **caffeine, amphetamine, methylphenidate, modafinil/armodafinil, solriamfetol, pitolisant** and **sodium oxybate**, and their approved uses."
  ],
  parts: [
    {
      title: "Neurobiology of sleep and wakefulness",
      sections: [
        {
          id: "s10-arousal",
          title: "The arousal spectrum",
          pages: "401–402",
          blocks: [
            { type: "p", text: "Sleep problems cut across so many psychiatric conditions that eliminating them is needed for full **symptomatic and functional remission**: sleep is a psychiatric **vital sign**, like pain (Chapter 9). Rather than starting from separate disorders, think of insomnia and sleepiness as symptoms on a single **arousal spectrum**, like a dimmer switch." },
            { type: "flow", title: "Figure 10-1: from too little to too much arousal", steps: [
              ["Asleep", "", "found"],
              ["Excessive daytime sleepiness", "Drowsiness, sedation, sleep attacks", "mech"],
              ["Inattentive", "Cognitive dysfunction from **understimulation**", "pharm"],
              ["Awake, alert, creative", "Baseline: the right balance", "clin"],
              ["Hypervigilant", "By day; **insomnia** at night", "drug"],
              ["Cognitive dysfunction", "From **overstimulation**", "case"],
              ["Panic, hallucinations, psychosis", "Extreme overactivation", "dx"]
            ], vertical: true, note: "Cognition suffers at **both** ends: cortical pyramidal neurons need to be optimally “tuned.” The spectrum is set by **histamine, dopamine, norepinephrine, serotonin, acetylcholine**, plus **GABA** and **orexin**; several form the **ascending reticular activating system**." },
            { type: "compare", items: [
              { title: "Insomnia = excessive arousal", color: "case", points: ["Hypnotic drugs move the patient from **too much arousal** to sleep"] },
              { title: "Sleepiness = deficient arousal", color: "mech", points: ["Wake-promoting drugs move the patient from **too little arousal** to normal alertness"] }
            ] }
          ]
        },
        {
          id: "s10-histamine",
          title: "Histamine",
          pages: "402–406",
          blocks: [
            { type: "p", text: "[[nt:histamine|Histamine]] is a key wakefulness transmitter and the ultimate target of many **wake-promoting** drugs (which increase its release) and **sleep-promoting** drugs (antihistamines blocking H1)." },
            { type: "flow", title: "Figures 10-2 and 10-3: making and ending histamine", steps: [
              ["Histidine", "Taken up by a histidine transporter", "found"],
              ["Histamine", "**Histidine decarboxylase (HDC)**; stored in vesicles", "mech"],
              ["N-methylhistamine", "**Histamine N-methyltransferase (HNMT)**", "pharm"],
              ["N-MIAA (inactive)", "**MAO-B**", "drug"]
            ], note: "**No reuptake pump**, so histamine diffuses widely, like dopamine in the PFC. Diamine oxidase also inactivates it outside the brain." },
            { type: "table", caption: "Figures 10-4 to 10-7: histamine receptors", head: ["Receptor", "Location and signaling", "Function"], rows: [
              ["**[[target:h1|H1]]**", "Postsynaptic; G protein → **phosphatidylinositol** → **cFOS**", "**Wakefulness**, alertness, pro-cognitive. Blocking it (antihistamines) causes sedation and sleep"],
              ["**[[target:h2|H2]]**", "Postsynaptic; G protein → cAMP → PKA → CREB", "Gastric acid (anti-ulcer drugs); brain role unclear, **not directly** linked to wakefulness"],
              ["**[[target:h3|H3]]**", "**Presynaptic autoreceptor** (gatekeeper)", "Histamine binding **turns off** further release; blocking H3 **releases** histamine (wake-promoting, pro-cognitive)"],
              ["H4", "Not known in brain", "—"],
              ["**NMDA polyamine site**", "Allosteric site on glutamate NMDA receptors", "Histamine diffusing to glutamate synapses may modulate NMDA; role unclear"]
            ] },
            { type: "callout", kind: "key", title: "One source", text: "All brain histamine neurons arise from the **tuberomammillary nucleus (TMN)** of the hypothalamus, which projects to most brain regions (prefrontal cortex, basal forebrain, thalamus, brainstem centers, VLPO, lateral hypothalamus) and the spinal cord." }
          ]
        },
        {
          id: "s10-orexin",
          title: "Orexins/hypocretins",
          pages: "406–408",
          blocks: [
            { type: "p", text: "Two names for one system: one group found hypothalamic peptides resembling the gut hormone secretin (“**hypocretin**”); another named them “**orexins**” for their appetite-stimulating effect. Convention: **hypocretin** for the gene (HCRT), **orexin** for the peptides and pharmacology (OX). One precursor yields **orexin A** (33 amino acids) and **orexin B** (28), excitatory peptides with about 50% sequence identity." },
            { type: "table", caption: "Figure 10-11: orexin receptors", head: ["", "OX1 receptor", "OX2 receptor"], rows: [
              ["Ligands", "**Orexin A** only", "**Orexin A and B**"],
              ["Signaling", "↑ Intracellular **calcium**; activates the sodium/calcium exchanger", "↑ **NMDA** receptor expression; inactivates **GIRK** potassium channels"],
              ["Where expressed highly", "Noradrenergic **locus coeruleus**", "Histaminergic **TMN**"]
            ] },
            { type: "list", title: "Key facts", items: [
              "Orexin neurons live only in the **lateral hypothalamus, perifornical area and posterior hypothalamus**, and project widely, especially to brainstem monoamine centers.",
              "They **degenerate in narcolepsy**, so wakefulness cannot be stabilized: daytime sleep attacks.",
              "Orexin’s wake effect is thought to act largely through **OX2 receptors on TMN histamine neurons**.",
              "Orexins are less arousal transmitters themselves than **stabilizers** of wakefulness: they drive ACh (basal forebrain, **PPT/LDT**), DA (**VTA**), NE (**LC**), 5HT (**raphe**) and histamine (**TMN**).",
              "Awake: **tonic** firing maintains arousal. A stimulus (hunger, cold, raised CO2, escapable stress, drug withdrawal, emotional cues) triggers **phasic burst** firing that drives adaptive, goal-directed behavior: eating, thermogenesis, breathing, HPA activation, drug seeking, attention and learning (Figure 10-12)."
            ] }
          ]
        },
        {
          id: "s10-sleepwake",
          title: "The sleep/wake cycle and its switch",
          pages: "408–413",
          blocks: [
            { type: "compare", title: "Figure 10-18: two opposing drives", items: [
              { title: "Homeostatic sleep drive", color: "pharm", points: ["Builds the longer you are awake", "Depends on accumulating **adenosine**", "Disinhibits the **VLPO**, releasing **GABA** onto wake centers"] },
              { title: "Circadian wake drive", color: "drug", points: ["**Light** (plus melatonin and activity) acting on the **suprachiasmatic nucleus**", "Stimulates **orexin** release to stabilize wakefulness", "Wanes as the day ends"] }
            ] },
            { type: "steps", title: "A day in the switch", items: [
              ["Daylight", "TMN histamine reaches the cortex and the VLPO, **inhibiting GABA** release, and stimulates orexin release from the lateral hypothalamus."],
              ["Orexin knock-on", "Orexin releases **ACh** (basal forebrain → cortex; PPT/LDT → thalamus), **DA** (VTA → cortex), **NE** (LC → cortex) and **5HT** (raphe → basal forebrain and thalamus)."],
              ["Light fades", "NE and 5HT build up on lateral hypothalamic neurons and **feed back** to inhibit orexin release."],
              ["Sleep", "Without orexin, wakefulness is no longer stabilized; the **VLPO and GABA** suppress all arousal centers; **melatonin** is secreted in the dark."],
              ["Morning", "Rest restores the homeostatic account; light restarts the wake transmitters."]
            ] },
            { type: "callout", kind: "key", title: "The sleep circuit (Figure 10-17)", text: "**GABA** from the **ventrolateral preoptic (VLPO)** nucleus inhibits the TMN, lateral hypothalamus, basal forebrain and brainstem arousal centers to induce sleep." }
          ]
        },
        {
          id: "s10-ultradian",
          title: "Ultradian cycles and neurotransmitters",
          pages: "413–414",
          blocks: [
            { type: "list", title: "The ultradian sleep cycle", items: [
              "One complete cycle (non-REM + REM) lasts about **90 minutes** and repeats **4–5 times** a night.",
              "Stages 1 and 2 are non-REM; stages 3 and 4 are deeper **slow-wave** sleep.",
              "Across the night, non-REM time **shrinks** and REM time **grows**.",
              "**REM**: wake-like fast EEG, eye movements, muscle **atonia**, dreaming; PET shows active thalamus, visual cortex and limbic areas but quiet DLPFC and parietal cortex. Non-REM: overall reduced activity."
            ] },
            { type: "table", caption: "Figures 10-19 to 10-22: neurotransmitters across the night", head: ["Neurotransmitter", "Pattern"], rows: [
              ["**GABA**", "Rises over the first hours, plateaus, declines before waking (on all night)"],
              ["**Orexin**", "The mirror image: drops in the first hour, plateaus, rises before waking"],
              ["**Acetylcholine**", "Lowest in **stage 4**, peaks in **REM**, swinging every cycle"],
              ["**DA, NE, 5HT, histamine**", "Peak in **stage 2**, lowest in **REM**"]
            ] }
          ]
        },
        {
          id: "s10-whysleep",
          title: "Why do we sleep?",
          pages: "414–418",
          blocks: [
            { type: "p", text: "Whether sleep serves **synaptic growth** or **synaptic pruning** (or both) is debated, but disturbed sleep clearly harms body and mind." },
            { type: "table", head: ["Domain", "Consequences in the book"], rows: [
              ["Cognition", "24 hours awake or chronic **4–5 hours** a night ≈ impairment of **legal alcohol intoxication**; poor attention, memory, new learning; impaired **hippocampal neurogenesis**. **REM** consolidates affective memory; **non-REM** declarative and procedural memory"],
              ["Metabolism", "↓ **leptin** (appetite-inhibiting), ↑ **ghrelin** (appetite-stimulating), gut microbiota **dysbiosis** → obesity, type 2 diabetes, cardiovascular disease"],
              ["Health and costs", "Psychiatric (depression, anxiety) and neurological illness (Alzheimer disease, chronic pain), cardiometabolic disease, **cancer**, immune and endocrine (HPA) dysfunction; absence, lost productivity, accidents"]
            ] }
          ]
        }
      ]
    },
    {
      title: "Insomnia",
      sections: [
        {
          id: "s10-insomnia",
          title: "What is insomnia?",
          pages: "418–421",
          blocks: [
            { type: "p", text: "Insomnia can be seen as **hyperarousal at night**. Imaging suggests the problem is less an inability to switch **on** VLPO sleep circuits than an inability to switch **off** arousal circuits. Some patients are hyperaroused and anxious by day too and do not feel sleepy despite poor sleep." },
            { type: "list", cols: 2, title: "Facts and associations", items: [
              "About **40 million** Americans have chronic and **20 million** episodic insomnia; up to **70%** do not tell their clinician.",
              "Associated with poor sleep hygiene, medical illness, other sleep disorders (circadian disorders, **restless legs**, **sleep apnea**), medications, substances and psychiatric disorders.",
              "Self-perpetuating: waking in bed becomes linked with anxiety.",
              "Biology (Figure 10-28): autonomic activation, abnormal glucose metabolism, ↓ GABA, ↓ night melatonin, inflammation (IL-6), ↓ BDNF, reduced gray matter (left OFC, hippocampus); genes (CLOCK, GABA-A, SERT, HLA) and epigenetics.",
              "Insomnia raises later risk of **anxiety (2×)**, **depression (4×)** and **substance use disorders (7×)** over 3–5 years (Figure 10-29).",
              "About **70%** of depressed patients have insomnia, which predicts worse response, more episodes and worse outcome."
            ] },
            { type: "compare", title: "Figure 10-30: from symptom to comorbidity", items: [
              { title: "Old view", color: "dx", points: ["“**Secondary**” insomnia: a symptom of another illness", "“**Primary**” insomnia: no other cause"] },
              { title: "DSM-5 view", color: "mech", points: ["Insomnia is often a **comorbidity**", "A **two-way**, perpetuating relationship with psychiatric and medical illness"] }
            ] },
            { type: "table", caption: "Figure 10-31: suggested criteria for insomnia", head: ["Measure", "Threshold"], rows: [
              ["Sleep latency", "> **30 min**"],
              ["Wakefulness after sleep onset (WASO)", "> **30 min**"],
              ["Sleep efficiency", "< **85%**"],
              ["Total sleep time", "< **6.5 hours**"]
            ], note: "Polysomnography is not routinely needed but can rule out narcolepsy, restless legs or OSA. Subjective short sleep matters: it predicts persistent, hard-to-treat insomnia, so treat both the **subjective symptom** and the **objective arousal disorder**." }
          ]
        },
        {
          id: "s10-gaba-hypnotics",
          title: "GABA-A PAMs: benzodiazepines and Z drugs",
          pages: "421–423",
          blocks: [
            { type: "compare", title: "Figure 10-32: two ways to promote sleep", items: [
              { title: "Enhance sleep drive", color: "pharm", points: ["**GABA-A PAMs** acting in VLPO sleep circuits", "Benzodiazepines and Z drugs"] },
              { title: "Reduce arousal", color: "drug", points: ["Block **orexin** (DORAs)", "Block **histamine** (H1)", "Block **serotonin** (5HT2A)", "Block **norepinephrine** (α1)"] }
            ] },
            { type: "p", text: "If insomnia is too much arousal rather than too little sleep drive, boosting sleep drive may not be the best approach. Both benzodiazepines and Z drugs target **benzodiazepine-sensitive** GABA-A receptors: **synaptic**, **phasic**, with **two β, a γ2 or γ3, and two α1–3** subunits. They bind an allosteric site distinct from GABA’s. δ-containing extrasynaptic receptors are insensitive to them." },
            { type: "table", wide: true, caption: "Figure 10-33: five benzodiazepines approved for insomnia in the US", head: ["Drug", "Half-life (figure)", "Comment"], rows: [
              ["[[drug:flurazepam|Flurazepam]] (Dalmane)", "**2–6 days**", "Ultra-long: accumulates (toxicity, falls)"],
              ["[[drug:quazepam|Quazepam]] (Doral)", "**2–5 days**", "Ultra-long"],
              ["[[drug:triazolam|Triazolam]] (Halcion)", "**1–2 hours**", "Ultra-short: may lose sleep maintenance"],
              ["[[drug:estazolam|Estazolam]] (ProSom)", "**12–30 hours**", "Moderate: possible hangover"],
              ["[[drug:temazepam|Temazepam]] (Restoril)", "**4–20 hours**", "Moderate"]
            ], note: "All are **nonselective** across α1, α2, α3 and α5 subunits." },
            { type: "callout", kind: "caution", title: "Second line for insomnia", text: "Benzodiazepines can cause **tolerance** and **withdrawal**, including **rebound insomnia** worse than the original. They are second-line hypnotics, but still useful for **severe, treatment-resistant** insomnia when first-line agents fail." },
            { type: "table", wide: true, caption: "Figure 10-34: Z drugs", head: ["Drug", "α selectivity", "Notes"], rows: [
              ["[[drug:zolpidem|Zolpidem]] (Ambien)", "**α1-selective**", "IR lasts about 2–4 h; **CR** extends to 6–8 h for maintenance; a low-dose **sublingual** form for **middle-of-the-night** waking"],
              ["[[drug:zaleplon|Zaleplon]] (Sonata)", "**α1-selective**", "Ultra-short"],
              ["[[drug:zopiclone|Zopiclone]] (racemic; not in US)", "α1, α2, α3, α5 (like benzodiazepines)", "R + S mixture"],
              ["[[drug:eszopiclone|Eszopiclone]] (Lunesta)", "α1, α2, α3, α5", "The S enantiomer, available in the US; differences from racemate debated"]
            ], note: "Whether Z drugs bind a different site or the same site differently is debated; α1 selectivity might mean less tolerance and dependence (unproven)." },
            { type: "table", caption: "What each α subunit does", head: ["Subunit", "Linked to"], rows: [
              ["**α1**", "**Sedation** (targeted by every effective GABA-A hypnotic), daytime sedation, anticonvulsant action, possibly **amnesia**; adaptation → tolerance and withdrawal"],
              ["**α2, α3**", "**Anti-anxiety**, muscle relaxation, **alcohol potentiation**"],
              ["**α5**", "Mostly hippocampal; possibly **cognition**"]
            ] },
            { type: "callout", kind: "caution", title: "A brand name to check", text: "Figure 10-34 labels racemic zopiclone as “Stilnox”; Stilnox is a brand of **zolpidem**. Zopiclone is sold as Imovane/Zimovane." }
          ]
        },
        {
          id: "s10-dora",
          title: "Dual orexin receptor antagonists (DORAs)",
          pages: "423–424",
          blocks: [
            { type: "p", text: "DORAs block **OX1 and OX2** receptors (especially OX2), so orexin can no longer drive histamine, ACh, NE, DA and 5HT release: arousal is not enhanced, wakefulness is not stabilized, and the patient sleeps. They **reduce arousal** rather than boosting GABA." },
            { type: "compare", items: [
              { title: "[[drug:suvorexant|Suvorexant]] (Belsomra)", color: "mech", points: ["**Comparable** affinity for OX1 and OX2"] },
              { title: "[[drug:lemborexant|Lemborexant]] (Dayvigo)", color: "drug", points: ["**Higher** affinity for OX2 than OX1", "Much **faster association/dissociation** at OX2: perhaps faster reversal in the morning (clinical meaning uncertain)"] }
            ] },
            { type: "list", title: "Shared features", items: [
              "Improve sleep **onset and maintenance**.",
              "Lack benzodiazepine/Z-drug problems: **no dependence, withdrawal, rebound**, unsteady gait, falls, confusion, amnesia or respiratory depression.",
              "**Reversible, competitive** inhibitors: orexin’s affinity is in the same range as theirs, so at night (low orexin) the drug:orexin ratio is high; by morning orexin rises as drug falls and blockade is reversed.",
              "Because of this competition, **half-life is not very clinically relevant**: raise the dose for early waking or possibly high orexin states; lower it for morning carryover.",
              "No head-to-head trials; if one does not work well, the other might.",
              "Other DORAs (e.g., **daridorexant**) and selective OX1 or OX2 antagonists were in development."
            ] },
            { type: "update", year: "2022", title: "A third DORA approved", text: "**Daridorexant** (Quviviq) was approved by the FDA in January 2022 (25 and 50 mg) for adults with insomnia characterized by difficulty with sleep onset and/or maintenance.", source: "Idorsia, January 10, 2022" }
          ]
        },
        {
          id: "s10-arousal-blockers",
          title: "Trazodone, antihistamines and α2δ ligands",
          pages: "424–426",
          blocks: [
            { type: "p", text: "[[drug:trazodone|Trazodone]], a **5HT2A/α1/H1 antagonist**, is the **most commonly prescribed sleep agent in the world** though not approved for insomnia. It reduces arousal by blocking serotonin, norepinephrine and histamine; **5HT2A antagonism** specifically deepens **slow-wave** sleep, which correlates with restorative sleep and even less daytime pain and fatigue. Low-dose immediate-release trazodone at night was a serendipitous discovery after high-dose IR caused daytime sedation; for depression it needs a once-daily controlled-release form. It has **no tolerance, withdrawal, dependence or rebound**." },
            { type: "compare", title: "Figures 10-38 to 10-40: not all antihistamines are alike", items: [
              { title: "[[drug:diphenhydramine|Diphenhydramine]] (and [[drug:doxylamine|doxylamine]])", color: "case", points: ["Popular **over-the-counter** sleep aids", "Diphenhydramine also blocks **M1**: blurred vision, constipation, memory problems, dry mouth", "Many “antihistamine” side effects (anticholinergic effects, hangover, tolerance, weight gain) come from **additional** actions, as with chlorpromazine, quetiapine and TCAs"] },
              { title: "Low-dose [[drug:doxepin|doxepin]]", color: "mech", points: ["Very high H1 affinity", "At **1–6 mg** it is a relatively **selective H1 antagonist**, without anticholinergic or reuptake actions (antidepressant dose **150–300 mg**)", "So selective it is used in trace doses as a **PET ligand** for H1", "Proven hypnotic"] }
            ] },
            { type: "p", text: "H1 antagonists have only anecdotal links to tolerance, and none to withdrawal, dependence or rebound. **Anticonvulsants** are not approved for insomnia, but **[[drug:gabapentin|gabapentin]]** and **[[drug:pregabalin|pregabalin]]** are used off-label: not very sedating, they **enhance slow-wave, restorative sleep** and help pain." }
          ]
        },
        {
          id: "s10-pk",
          title: "Your sleep is at the mercy of your drug levels",
          pages: "426–430",
          blocks: [
            { type: "p", text: "For hypnotics, the **immediate** pharmacological action **is** the therapeutic action. You sleep while the drug is above a **receptor-occupancy threshold** and wake when it falls below. What matters is **time above threshold**, not half-life as such." },
            { type: "table", caption: "Figure 10-41A: occupancy thresholds for sleep", head: ["Drug class", "Threshold"], rows: [
              ["GABA-A PAMs", "About **25–30%**"],
              ["DORAs", "About **65%**"],
              ["Serotonin or histamine antagonists", "Probably about **80%** for one receptor; less if several are blocked"]
            ] },
            { type: "table", wide: true, caption: "Figures 10-41A–D: Goldilocks and the hypnotics", head: ["Profile", "Time above threshold", "Result", "Examples in the figure"], rows: [
              ["**Just right**", "About **8 hours**", "Sleep onset and maintenance, no hangover", "Eszopiclone, zolpidem CR, low-dose trazodone, low-dose doxepin, suvorexant, lemborexant"],
              ["**Way too hot**", "**24–150 hours** (ultra-long half-life)", "Accumulation, toxicity, **falls** in the elderly", "Flurazepam, quazepam"],
              ["**Still too hot**", "**15–30 hours**", "**Hangover**: sedation, memory problems", "Estazolam, temazepam, most TCAs, mirtazapine, chlorpromazine"],
              ["**Too cold**", "Half-life **1–3 hours**", "**Early waking** (lost maintenance)", "Triazolam, zaleplon, zolpidem, melatonin, ramelteon"]
            ] },
            { type: "table", caption: "Troubleshooting by threshold", head: ["Problem", "Theory", "Options"], rows: [
              ["Slow to fall asleep", "Threshold reached too slowly", "Take **earlier**; avoid taking with **food**; raise dose; change mechanism"],
              ["Wakes too early", "Threshold lost too soon", "**Raise dose** or switch to longer time above threshold"],
              ["Groggy in the morning", "Still near threshold at rising", "**Lower dose**, take earlier, or switch to shorter-acting agent"]
            ] },
            { type: "callout", kind: "exam", title: "Why DORAs are different", text: "No endogenous ligand competes cyclically at the GABA PAM site, and normal 5HT, NE and histamine levels cannot reverse antagonist binding. But **orexin competes** with DORAs, so their effect depends on both drug and orexin levels." }
          ]
        },
        {
          id: "s10-behavioral",
          title: "Behavioral treatments of insomnia",
          pages: "430",
          blocks: [
            { type: "table", caption: "Figures 10-42 and 10-43", head: ["Approach", "What it involves"], rows: [
              ["**Sleep hygiene**", "Bed only for sleep; no stimulants (alcohol, caffeine, nicotine) or strenuous exercise before bed; get up if not asleep within **20 minutes**; no clock-watching; regular habits; dark, cool, quiet room; avoid light at night"],
              ["**Relaxation training**", "Reduce somatic tension and intrusive thoughts"],
              ["**Stimulus control therapy**", "Get out of bed if not sleepy; bed only for sleep; no naps"],
              ["**Sleep restriction therapy**", "Limit time in bed to cause mild deprivation and consolidate sleep"],
              ["**Intensive sleep retraining**", "25-hour deprivation with **50 sleep-onset trials**, waking after 3 minutes of sleep"],
              ["**CBT**", "Reduce negative attitudes and misconceptions about sleep"]
            ], note: "These can be very effective, should often be considered **before** hypnotics, and help as add-ons when drugs alone are not enough." }
          ]
        }
      ]
    },
    {
      title: "Excessive daytime sleepiness",
      sections: [
        {
          id: "s10-sleepiness",
          title: "Sleepiness, OSA, idiopathic hypersomnia and narcolepsy",
          pages: "430–435",
          blocks: [
            { type: "p", text: "The commonest cause of sleepiness is **sleep deprivation**, treated with sleep. But sleepiness is **not benign**: lost sleep impairs performance like legal alcohol intoxication and causes traffic deaths. Patients often do not complain, so ask the **bed partner**. Tools: the **Epworth Sleepiness Scale**, overnight **polysomnography**, next-day **multiple sleep latency testing (MSLT)** and/or maintenance of wakefulness testing, sleep diaries and **actigraphy**." },
            { type: "list", title: "Hypersomnia in numbers", items: ["Up to **6%** of people; up to **25%** of them have a mood disorder.", "First treat **secondary** causes: OSA, psychiatric illness, medications.", "About **1 in 15** adults has moderate **OSA**; up to **75%** of people with insomnia have a sleep-related breathing disorder."] },
            { type: "compare", title: "Figure 10-49: obstructive sleep apnea", items: [
              { title: "Clinical features", color: "case", points: ["Loud snoring, obesity, hypertension", "Neck > 17 inches; enlarged tonsils", "Excessive daytime sleepiness, fatigue, loss of interest, depression", "Can cause **insomnia at night and hypersomnia by day**; nearly **doubles** medical costs (cardiovascular disease)"] },
              { title: "Pathophysiology", color: "mech", points: ["Complete (**apnea**) or partial (**hypopnea**) upper airway collapse at different levels", "Falling oxygen saturation; episodes end with **arousal**", "Metabolic abnormalities in frontal white matter and hippocampus"] }
            ] },
            { type: "table", wide: true, caption: "Figures 10-45 to 10-48: central disorders of hypersomnolence", head: ["Disorder", "Features", "Diagnosis in the book"], rows: [
              ["**Idiopathic hypersomnia**", "Long (> 10 h) or normal sleep with constant sleepiness, non-refreshing sleep, **sleep drunkenness**, memory/attention problems, GI symptoms, depression, anxiety", "Sleepiness ≥ **3 months**, short sleep latency, **fewer than 2 SOREMPs**; CSF histamine may be low; orexin usually normal"],
              ["**Narcolepsy**", "Sleepiness, **sleep intrusions** into waking, abnormal REM (SOREMPs), **hypnagogic hallucinations**; with or without **cataplexy** (emotion-triggered loss of muscle tone)", "CSF orexin **< 110 pg/mL** (often normal, especially without cataplexy); or **≥ 2 SOREMPs** on MSLT or 1 on PSG plus mean sleep latency **≤ 8 min**; **HLA DQB1-0602** in about **90%** vs 20% of the population"],
              ["**Recurrent hypersomnia**", "Listed among central disorders", "Neuropathology largely unknown"]
            ] },
            { type: "callout", kind: "key", title: "Why orexin loss causes cataplexy", text: "Narcolepsy with cataplexy reflects profound loss of **lateral hypothalamic orexin neurons**. Orexin normally stabilizes wakefulness **and** motor tone: high by day (normal movement), low at night (motor inhibition, especially in REM). Without daytime orexin, REM-type **motor inhibition intrudes** into waking: cataplexy." },
            { type: "update", year: "2024", title: "A drug approved for obstructive sleep apnea", text: "**Tirzepatide** (Zepbound) was approved in December 2024 for adults with moderate-to-severe **OSA and obesity**, with diet and exercise: the first medication approved to treat OSA itself rather than its sleepiness.", source: "Eli Lilly, December 20, 2024" }
          ]
        },
        {
          id: "s10-circadian",
          title: "Circadian rhythm disorders and melatonergic agents",
          pages: "435–440",
          blocks: [
            { type: "p", text: "Circadian rhythm disorders arise from **dyssynchrony** between the internal clock and external day/night cues, causing insomnia, sleepiness or both with impaired functioning." },
            { type: "table", wide: true, caption: "Figures 10-50 to 10-54", head: ["Disorder", "Features", "Notes"], rows: [
              ["**Shift work disorder**", "Insomnia or sleepiness tied to a recurring schedule overlapping usual sleep time, ≥ 1 month, confirmed by ≥ 7 days of logs/actigraphy", "Shift work = **6 pm–7 am**; **15–25%** of the US workforce; **10–32%** of shift workers develop SWD (up to **9.1%** severe); youth and “eveningness” protect; ↑ cardiometabolic disease, cancer, GI disease, mood disorders"],
              ["**Advanced sleep phase disorder**", "Sleepy and waking **earlier** than desired, often by up to 6 hours; normal sleep amount and quality", "**PER2** polymorphisms; autosomal-dominant **familial ASPS**; diagnose with diary/actigraphy ≥ 1 week and the **Morningness–Eveningness Questionnaire**; common mildly in **normal elderly**"],
              ["**Delayed sleep phase disorder**", "Cannot fall asleep until early morning; wakes late morning/afternoon; normal sleep amount and quality", "The **most common** circadian disorder; **CLOCK** polymorphisms"],
              ["**Non-24-hour sleep–wake disorder**", "Irregular, free-running sleep/wake pattern", "Mainly in the **blind**: no light input to the SCN via the retinohypothalamic tract"]
            ] },
            { type: "callout", kind: "caution", title: "A typo in the book", text: "The book says many normal **teens** and many **depressed** patients have a mild form of **ASPD**. In context (and elsewhere in the book) these groups have **delayed** phase (DSPD)." },
            { type: "table", caption: "Figures 10-55 and 10-56: resetting the clock", head: ["Condition", "Light", "Melatonin"], rows: [
              ["Delayed phase (DSPD), depression, shift work, normal teens", "**Morning** bright light", "**Evening** melatonin"],
              ["Advanced phase (ASPD), normal elderly", "**Early evening** bright light", "**Early morning** melatonin"],
              ["Non-24-hour disorder", "—", "**Tasimelteon** synchronizes rhythms"]
            ], note: "Bright light: **10,000 lux** blue light for 30 minutes, timed about **8 hours after evening melatonin secretion** or by a phase-response curve; **dawn simulation** gives slowly rising light at the end of sleep. Circadian treatments also augment drugs for depression and modafinil/armodafinil in shift work." },
            { type: "table", wide: true, caption: "Figure 10-57: melatonergic agents", head: ["Agent", "Actions", "Use"], rows: [
              ["**Melatonin** (OTC)", "MT1, MT2 and the “MT3” site (really **NRH–quinone oxidoreductase 2**, not involved in sleep)", "Shifts phase-delayed rhythms when taken at the desired bedtime (depression, DSPD, teens, **jet lag**); helps sleep onset"],
              ["[[drug:ramelteon|Ramelteon]]", "MT1/MT2 agonist", "**Insomnia** (sleep onset)"],
              ["[[drug:tasimelteon|Tasimelteon]]", "MT1/MT2 agonist (MT2 retrains the clock)", "**Non-24-hour** sleep–wake disorder"],
              ["[[drug:agomelatine|Agomelatine]]", "MT1/MT2 agonist + 5HT2C/5HT2B antagonist", "Depression outside the US (Chapter 7)"]
            ], note: "**MT1** inhibition of SCN neurons may dampen its alerting signal and promote sleep; **MT2** mediates **phase shifting**. Ramelteon and tasimelteon help **sleep onset** (sometimes better after several days), not maintenance." }
          ]
        },
        {
          id: "s10-caffeine-stimulants",
          title: "Caffeine, amphetamine and methylphenidate",
          pages: "440–442",
          blocks: [
            { type: "p", text: "Wake-promoting agents **increase arousal**, mostly by enhancing release of **dopamine** and **histamine** (Figure 10-58)." },
            { type: "flow", title: "Figure 10-59: caffeine, the world’s most used psychoactive drug", steps: [
              ["Adenosine builds up", "The “**accountant**” of fatigue: tracks the homeostatic sleep drive", "found"],
              ["Adenosine–D2 coupling", "Adenosine receptors heterodimerize with **D2** receptors and lower their affinity for DA", "mech"],
              ["Caffeine blocks adenosine", "D2 affinity for DA is restored; DA action rises", "drug"],
              ["Result", "Wake promotion, less fatigue", "clin"]
            ] },
            { type: "list", title: "Amphetamine and methylphenidate (Figure 10-60)", items: [
              "Both are **NE and DA reuptake inhibitors**; amphetamine is also a **DA releaser** and competitive **VMAT2** inhibitor.",
              "**D-amphetamine, DL-amphetamine and methylphenidate** are approved for sleepiness in **narcolepsy**, not OSA or shift work (used off-label).",
              "Dosed for narcolepsy, they raise synaptic DA and NE without significant reinforcement, but they are **controlled substances** (abuse, diversion, psychosis, mania, hypertension, especially at higher doses).",
              "**Highly effective** for wakefulness in narcolepsy; formulations covered in Chapter 11."
            ] }
          ]
        },
        {
          id: "s10-modafinil",
          title: "Modafinil and armodafinil",
          pages: "442–444",
          blocks: [
            { type: "p", text: "[[drug:modafinil|Modafinil]] (racemic) and [[drug:armodafinil|armodafinil]] (the **R** enantiomer) are approved for **narcolepsy** and as adjuncts for **OSA** and **shift work disorder**. They act mainly as **DAT inhibitors**: weak affinity but high plasma levels give substantial occupancy." },
            { type: "flow", title: "Figures 10-62 and 10-63: how modafinil wakes you", steps: [
              ["Slow rise, sustained levels", "6–8 hours; **incomplete** DAT occupancy", "pharm"],
              ["Tonic DA ↑", "Wake-promoting, not phasic (reinforcing) DA", "mech"],
              ["Cortical arousal", "Downstream **histamine** release from the TMN", "drug"],
              ["Lateral hypothalamus", "**Orexin** release stabilizes wakefulness (secondary)", "clin"]
            ], note: "Orexin release is not required: modafinil still works in narcolepsy patients who have **lost orexin neurons**." },
            { type: "list", title: "Clinical points", items: [
              "**Armodafinil**: later peak, longer half-life, higher levels 6–14 hours after dosing; may avoid the second daily dose racemic modafinil often needs.",
              "In narcolepsy, possibly **less powerful** than amphetamine/methylphenidate (no head-to-head trials) but with much **lower abuse potential** and milder side effects.",
              "**OSA**: first line is **CPAP** (effective, but adherence about **54%**); alternatives include BPAP, APAP, oral appliances, surgery, weight loss to **BMI < 25**, exercise, avoiding alcohol/sedatives at bedtime, positional therapy. Modafinil/armodafinil are approved as **adjuncts** for residual sleepiness, sometimes used off-label alone when CPAP is not tolerated.",
              "**Shift work disorder**: modafinil/armodafinil help alertness; add circadian treatment (morning light; timed light and melatonin)."
            ] }
          ]
        },
        {
          id: "s10-newer",
          title: "Solriamfetol and pitolisant",
          pages: "444–446",
          blocks: [
            { type: "compare", items: [
              { title: "[[drug:solriamfetol|Solriamfetol]]: a wake-promoting NDRI", color: "drug", points: ["Approved for sleepiness in **narcolepsy** and as an adjunct in **OSA**", "**NE and DA reuptake inhibitor**: more potent than bupropion, less potent but more tolerable and **less abusable** than stimulants", "**Short half-life**: morning dose wears off by bedtime"] },
              { title: "[[drug:pitolisant|Pitolisant]]: an H3 antagonist", color: "mech", points: ["Blocks presynaptic **H3 autoreceptors**, disinhibiting **histamine release**", "Approved for **narcolepsy**; anecdotally may help cataplexy; in testing for OSA sleepiness", "**Not controlled**; no known abuse potential", "Can be overly activating (anxiety, insomnia)", "About as effective as modafinil, perhaps less than stimulants"] }
            ] },
            { type: "update", year: "2024", title: "Pitolisant approved for children", text: "Pitolisant (Wakix) was approved in June 2024 for excessive daytime sleepiness in **pediatric patients aged 6 and older** with narcolepsy.", source: "Harmony Biosciences, June 24, 2024 (AASM)" },
            { type: "update", year: "2026", title: "The first orexin receptor agonist", text: "**Oveporexton** (Orzeyful), an oral **orexin 2 receptor agonist**, was approved by the FDA on August 5, 2026 for adults with **narcolepsy type 1** (with cataplexy), treating the orexin deficiency itself. Phase 3 trials improved sleepiness, cataplexy and quality of life; insomnia and urinary frequency were common side effects.", source: "Takeda, August 5, 2026 (AJMC)" }
          ]
        },
        {
          id: "s10-oxybate",
          title: "Sodium oxybate for narcolepsy and cataplexy",
          pages: "446–448",
          blocks: [
            { type: "p", text: "[[drug:sodium-oxybate|Sodium oxybate]] (γ-hydroxybutyrate, **GHB**) is a natural brain product formed from GABA. It is a **full agonist at GHB receptors** and a **partial agonist at [[target:gabab|GABA-B]]** receptors: an antagonist when GABA is high, an agonist when GABA is low. GABA-B actions are thought to increase **slow-wave sleep** and improve **cataplexy**." },
            { type: "list", title: "Clinical points", items: [
              "Approved for **cataplexy** and **excessive sleepiness**; reduces hypnagogic hallucinations and **sleep paralysis**.",
              "Unlike every other treatment for sleepiness, it does not boost wake transmitters: it makes night sleep so restorative (slow-wave sleep) that the patient is less sleepy by day.",
              "**Controlled** substance distributed through a **central pharmacy** in the US because of abuse potential; dubbed a “**date rape**” drug when combined with alcohol (sedation, amnesia).",
              "Abused by athletes in the 1980s for the **growth hormone** surge of slow-wave sleep.",
              "Used for **alcoholism** in some European countries; tested in **fibromyalgia** and occasionally used off-label for refractory cases."
            ] },
            { type: "update", year: "2023", title: "A once-nightly oxybate", text: "**Lumryz**, an extended-release sodium oxybate taken **once at bedtime** (avoiding the middle-of-the-night second dose of twice-nightly Xyrem), was approved in May 2023 for cataplexy or excessive daytime sleepiness in adults with narcolepsy.", source: "FDA approval reported May 1, 2023 (NeurologyLive)" }
          ]
        },
        {
          id: "s10-summary",
          title: "Putting it together",
          pages: "448",
          blocks: [
            { type: "list", items: [
              "Wakefulness uses five arousal transmitters (**histamine, DA, NE, ACh, 5HT**) plus wake-stabilizing **orexin**.",
              "The hypothalamic switch: **TMN histamine** (wake) versus **VLPO GABA** (sleep).",
              "Hypnotics either **boost GABA** (benzodiazepines, Z drugs) or **block arousal** (DORAs, trazodone, antihistamines); melatonergic agents shift the clock.",
              "Choose and adjust hypnotics by **time above threshold**.",
              "Wake-promoting drugs mostly raise **dopamine and histamine**; sodium oxybate works by deepening night sleep."
            ] },
            { type: "case", title: "Clinical vignette: the 4 a.m. awakener", text: "A 52-year-old falls asleep quickly on zaleplon but is wide awake at 4 a.m. every night.", point: "**Too cold**: zaleplon’s 1–3 hour profile loses **sleep maintenance**. Options: a drug with about 8 hours above threshold (**zolpidem CR, eszopiclone**, a **DORA**, low-dose **doxepin** or trazodone), or low-dose sublingual zolpidem for middle-of-the-night waking." },
            { type: "case", title: "Clinical vignette: groggy grandmother", text: "An 80-year-old taking flurazepam nightly for years has fallen twice and seems confused by afternoon.", point: "**Way too hot**: ultra-long half-life (2–6 days) causes **accumulation** and falls. Taper carefully (risk of **rebound insomnia**) and consider a non-GABA option or **CBT for insomnia**." },
            { type: "case", title: "Clinical vignette: laughing and falling", text: "A 22-year-old student falls asleep in lectures, sees vivid images as she drifts off, and her knees buckle when she laughs.", point: "**Narcolepsy with cataplexy** (orexin neuron loss). Check **MSLT** (short latency, ≥ 2 SOREMPs). Options: modafinil/armodafinil, stimulants, solriamfetol, **pitolisant**, and **sodium oxybate** for cataplexy." },
            { type: "case", title: "Clinical vignette: the night-shift nurse", text: "A nurse on rotating nights fights sleep on shift and cannot sleep after it.", point: "**Shift work disorder**: **modafinil/armodafinil** for alertness on shift plus circadian treatment (timed **bright light** and melatonin) and sleep hygiene." },
            { type: "case", title: "Clinical vignette: the snoring husband", text: "A man with a 19-inch neck and hypertension snores loudly, gasps at night per his wife, and dozes at red lights.", point: "Probable **OSA**: get a sleep study; first line **CPAP**, plus weight loss and avoiding alcohol at night. **Modafinil/armodafinil** or **solriamfetol** only as adjuncts for residual sleepiness." }
          ]
        }
      ]
    }
  ]
});
