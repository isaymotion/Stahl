/* Chapter 13 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 13 (pp. 538–578).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch13", "guide", {
  intro: "The final chapter treats **impulsivity** and **compulsivity** as symptom dimensions that cut across addiction, OCD, binge eating, impulse control disorders and violence. Impulsivity is the inability to **stop starting** an action, run by a **ventral** striatal reward loop. Compulsivity is the inability to **stop an ongoing** action, run by a **dorsal** striatal habit loop. Addiction is the story of control **migrating from ventral to dorsal**, until drug taking becomes a Pavlovian habit. The chapter then works through each class of abused substance (stimulants, nicotine, alcohol, sedative hypnotics, GHB, opioids, cannabis, hallucinogens, empathogens, dissociatives) with its mechanism and treatments. It closes with Stahl’s provocative “**abuse your way to abstinence**” extinction idea, psychedelic-assisted psychotherapy, binge eating disorder, OCD and violence.",
  objectives: [
    "Define **impulsivity** and **compulsivity** and explain how habits form and why addiction behaves like a **Pavlovian** conditioned response.",
    "Map the **ventral** (impulsive: ventral striatum, VMPFC, ACC) and **dorsal** (compulsive: dorsal striatum, OFC) loops and the ventral-to-dorsal migration of control.",
    "Explain the **dopamine theory** of addiction and the brain’s own “pharmacy” of reward transmitters.",
    "Explain why **speed of entry** determines a stimulant’s reinforcement, and describe stimulant progression to burnout.",
    "Describe **nicotine’s** actions at α4β2 receptors (desensitization, upregulation, craving) and the treatments: nicotine replacement, **varenicline**, **bupropion**.",
    "Describe **alcohol’s** GABA, glutamate and opioid actions and the treatments **naltrexone, nalmefene, acamprosate, disulfiram**.",
    "Outline the endogenous **opioid** systems, opioid tolerance and withdrawal, and treatment with **methadone, buprenorphine**, α2 agonists and **injectable naltrexone**.",
    "Describe the **endocannabinoid** system, THC versus CBD, and the approved cannabinoid drugs.",
    "Compare **hallucinogens** (5HT2A agonists), **empathogens** (MDMA at SERT) and **dissociatives** (NMDA antagonists).",
    "Explain the **extinction** approach (Sinclair method) and the rationale for ketamine-, psilocybin- and MDMA-assisted psychotherapy.",
    "Describe **binge eating disorder**, gambling, **OCD** treatment and the types of **violence** within the impulsive–compulsive framework."
  ],
  parts: [
    {
      title: "Impulsivity, compulsivity and reward",
      sections: [
        {
          id: "s13-concepts",
          title: "What are impulsivity and compulsivity?",
          pages: "538–539",
          blocks: [
            { type: "compare", items: [
              { title: "Impulsivity", color: "drug", points: ["A tendency to **rapid, unplanned** reactions with little regard for consequences", "Action **without forethought**; prefers **immediate** over larger delayed reward", "Failure of motor inhibition; risky choices", "Inability to **stop initiating** actions", "Classically linked to **risk seeking**"] },
              { title: "Compulsivity", color: "mech", points: ["**Repetitive**, impairing behavior with no adaptive function", "Performed habitually, by rigid rules or to avoid feared consequences", "Persists despite undesirable results; **can’t adapt after negative feedback**", "Inability to **terminate ongoing** actions", "Classically linked to **harm avoidance**"] }
            ] },
            { type: "p", text: "Once seen as opposites, the two are now understood to share **cognitive inflexibility** and a profound sense of **loss of control**. Put simply, both are symptoms of a brain that has trouble saying “**no**.”" },
            { type: "compare", title: "Goal-directed behavior versus habit", items: [
              { title: "Goal-directed", color: "clin", points: ["Driven by knowledge of and **desire for the outcome**", "Cognitively demanding"] },
              { title: "Habit (a type of compulsion)", color: "case", points: ["Triggered by **external stimuli** through stimulus–response associations stamped in by repetition", "Automatic and **insensitive to outcome**", "Adaptive for routines; maladaptive in impulsive–compulsive disorders"] }
            ] },
            { type: "callout", kind: "analogy", title: "Addiction as a Pavlovian dog", text: "Drug seeking becomes a **conditioned response** to conditioned stimuli: people, places and paraphernalia linked to the drug, or craving and withdrawal. Just as Pavlov’s dogs salivated at the bell, the addicted person seeks drugs reflexively. The “habit” of addiction is a perverse form of learning, “almost as though one has learned how to have a psychiatric disorder.”" }
          ]
        },
        {
          id: "s13-circuits",
          title: "Ventral and dorsal loops: from impulse to compulsion",
          pages: "539–541",
          blocks: [
            { type: "compare", items: [
              { title: "Impulsivity and reward loop (Figure 13-1)", color: "drug", points: ["**Ventral striatum** → thalamus → **VMPFC and ACC** → ventral striatum", "An **action–outcome**, reward-driven learning system", "Restrained top-down by the prefrontal cortex"] },
              { title: "Compulsivity and motor inhibition loop (Figure 13-2)", color: "mech", points: ["**Dorsal striatum** → thalamus → **OFC** → dorsal striatum", "The **habit** system", "Restrained top-down by the OFC"] }
            ] },
            { type: "flow", title: "Figure 13-3: how an impulse becomes a compulsion", steps: [
              ["Impulse", "Behavior begins in the **ventral** loop, driven by reward and motivation", "drug"],
              ["Repetition", "Neuroadaptation and neuroplasticity engage the **dorsal** habit system", "pharm"],
              ["Compulsion", "Control migrates **ventral → dorsal**; the act is now a habit", "case"]
            ], note: "Useful in daily life (frees the brain for novel tasks); disastrous when it runs amok. The therapeutic goal is to stop or **reverse** the spiral." },
            { type: "table", caption: "Table 13-1 (abridged): the impulsive–compulsive disorders", head: ["Group", "Examples"], rows: [
              ["Substance addictions", "Cannabis, nicotine, alcohol, opioids, stimulants, hallucinogens, empathogens, dissociatives"],
              ["Behavioral addictions", "**Binge eating disorder**, gambling disorder, internet gaming disorder"],
              ["Obsessive–compulsive related", "**OCD**, body dysmorphic disorder, trichotillomania, skin picking, hoarding, shopping, hypochondriasis, somatization"],
              ["Impulse control and other", "Agitation in AD; ADHD; mania; DMDD; pyromania; kleptomania; paraphilias; hypersexual disorder; autism; Tourette and tics; borderline PD; self-harm; conduct, antisocial and oppositional disorders; intermittent explosive disorder; **impulsive, psychotic and psychopathic violence**"]
            ] },
            { type: "callout", kind: "key", title: "Where the brake fails", text: "In **Alzheimer disease**, top-down control **degenerates** (agitation). In **ADHD**, top-down control is **developmentally delayed**. In other disorders, the fault may be at either striatal node (which drives) or either prefrontal node (which restrains), and problems spill from one loop to the other." },
            { type: "callout", kind: "caution", title: "A chapter cross-reference", text: "The chapter opening refers to “mania (Chapter 4)”; mania is covered in [[ch:ch06|Chapter 6]]." }
          ]
        },
        {
          id: "s13-dopamine",
          title: "The dopamine theory of addiction",
          pages: "542–544",
          blocks: [
            { type: "p", text: "For more than 40 years the leading theory has held that the **mesolimbic dopamine pathway** (VTA → nucleus accumbens) is the **final common pathway** of reward for anything pleasurable: the “pathway of hedonic pleasure.” The theory is an oversimplification: it fits drugs with big dopamine effects (**stimulants, nicotine**) better than **cannabis and opioids**." },
            { type: "table", caption: "Figure 13-5: the brain’s own pharmacy of reward", head: ["Natural transmitter", "Drug it resembles"], rows: [
              ["**Endorphins**", "Morphine, heroin"],
              ["**Anandamide** (endocannabinoids)", "Marijuana"],
              ["**Acetylcholine**", "Nicotine"],
              ["**Dopamine** itself", "Cocaine, amphetamine"]
            ] },
            { type: "compare", items: [
              { title: "Natural highs", color: "clin", points: ["Intellectual or athletic success, music, orgasm", "Earned; modest dopamine release"] },
              { title: "Drug-induced highs", color: "case", points: ["Drugs **bypass** natural transmitters and hit the same receptors directly", "More **explosive**, on demand", "Can start the cascade into **habit**"] }
            ] },
            { type: "flow", title: "From fun to habit", steps: [
              ["Early use", "Dopamine release in the **ventral striatum**, increased ACC activity: reward", "drug"],
              ["Addiction", "Ventral DA neurons stop responding to the drug itself; **dorsal** DA neurons fire to **cues** (the syringe, the pipe, the casino) before the drug is taken", "pharm"],
              ["Compulsive state", "Aroused only by drug seeking; withdrawn and apathetic otherwise: a habit, not mere temptation", "case"]
            ] },
            { type: "callout", kind: "key", title: "What treatment needs to do", text: "Few addiction treatments work well because we do not know how to suppress the **habit circuit**. The goal would be to wrest control back to voluntary systems, perhaps by neuroplasticity that **reverse-migrates** control from dorsal to ventral." }
          ]
        }
      ]
    },
    {
      title: "Substance addictions",
      sections: [
        {
          id: "s13-stimulants",
          title: "Stimulants",
          pages: "544–547",
          blocks: [
            { type: "p", text: "Prescribed for ADHD, stimulants give steady levels that boost **tonic** dopamine in the PFC at moderate DAT/NET occupancy ([[ch:ch11|Chapter 11]]). Abused, the same drugs are taken in higher doses by faster routes, **blasting** mesolimbic DATs and boosting **phasic** dopamine in the nucleus accumbens (Figure 13-6)." },
            { type: "callout", kind: "key", title: "Speed of entry = size of the high", text: "The faster a stimulant enters the brain, the stronger the **high** and the reinforcement (Figure 13-7): the self-reported high from IV cocaine tracks the **rate and extent** of DAT blockade. Oral absorption slows entry. **Smoking** is fastest: it bypasses first-pass liver metabolism and acts almost like an intra-carotid bolus across the lung’s huge surface." },
            { type: "callout", kind: "caution", title: "Intranasal cocaine is not faster than IV", text: "The text says snorted cocaine can “have a more rapid onset than even with intravenous administration” and that cocaine is “not even active orally.” The book’s own Figure 13-7 caption ranks **IV and smoking fastest, then snorting**. Oral cocaine is absorbed, just slowly and less reinforcingly." },
            { type: "table", caption: "Stimulant mechanisms", head: ["Drug", "Mechanism"], rows: [
              ["**Amphetamine, methamphetamine**", "DAT and NET inhibitors (and releasers; Chapter 11)"],
              ["[[drug:cocaine|Cocaine]]", "Inhibits **DAT, NET and SERT**; also a **local anesthetic** (Freud used it for his tongue cancer)"],
              ["“**Bath salts**” ([[drug:mdpv|MDPV]], mephedrone, methylone)", "Synthetic stimulants disguised as Epsom salts or “plant food”; agitation, paranoia, hallucinations, suicidality, chest pain"],
              ["**Inhalants** (“huffing” toluene, glue, aerosols, freon)", "Thought to release dopamine in the accumbens; alcohol-like intoxication; sudden death (cardiac arrest, aspiration, suffocation); freon can freeze the lungs; not detected by drug tests"]
            ] },
            { type: "list", title: "Dose-related toxicity", items: [
              "High doses: tremor, emotional lability, restlessness, irritability, panic, **stereotyped** behavior.",
              "Higher repeated doses: **paranoia and hallucinations** resembling schizophrenia; hypertension, tachycardia, ventricular irritability, hyperthermia, respiratory depression.",
              "Overdose: acute heart failure, **stroke**, **seizures**."
            ] },
            { type: "steps", title: "Figure 13-8: progression of stimulant abuse", items: [
              ["Initial use", "Pleasurable **phasic** dopamine firing."],
              ["Conditioning", "Craving between doses; residual tonic firing without pleasurable phasic bursts (“where’s my dopamine?”)."],
              ["Escalation", "Higher and higher doses needed for the high (addicted)."],
              ["Crash", "The higher the high, the lower the low: withdrawal with **sleepiness and anhedonia**."],
              ["Compulsion", "Compulsive use and dangerous behavior to secure supply (marathon sex, paranoia, violence)."],
              ["Burnout", "Lasting dopamine **depletion** and axonal degeneration, with enduring cognitive loss."]
            ] },
            { type: "p", text: "**Treatment**: no drug is approved for stimulant addiction; many dopamine- and serotonin-linked treatments have failed. A **cocaine vaccine** that removes the drug before it reaches the brain is a future possibility." },
            { type: "update", year: "2021", title: "Naltrexone plus bupropion for methamphetamine use disorder", text: "The NIDA-funded **ADAPT-2** trial (New England Journal of Medicine, January 2021) found that **extended-release injectable naltrexone plus oral bupropion** produced a small but significant increase in response (methamphetamine-negative urines) versus placebo. The combination is not FDA-approved for this use, and no medication is approved for stimulant use disorder.", source: "NIDA, January 2021" }
          ]
        },
        {
          id: "s13-nicotine",
          title: "Nicotine",
          pages: "547–553",
          blocks: [
            { type: "table", caption: "How common is smoking?", head: ["Group", "Smokers"], rows: [
              ["US general population", "About **16–20%**"],
              ["People seeing general physicians", "About 25%"],
              ["Psychopharmacology practice patients", "**40–50%**"],
              ["ADHD, schizophrenia, bipolar disorder", "**60–85%**"]
            ], note: "More than half of all cigarettes may be smoked by people with a psychiatric disorder, yet only about **10%** of smokers report being offered treatment proactively." },
            { type: "flow", title: "Figure 13-9: three ways nicotine releases dopamine", steps: [
              ["Direct", "Stimulates postsynaptic **α4β2** receptors on VTA dopamine neurons (the addiction-relevant action)", "drug"],
              ["Indirect via glutamate", "Stimulates presynaptic (α7) nicotinic receptors on glutamate neurons, whose glutamate releases dopamine", "pharm"],
              ["Disinhibition", "**Desensitizes** α4β2 receptors on VTA **GABA** interneurons, removing their brake on dopamine neurons", "mech"]
            ], note: "Postsynaptic **α7** receptors in the PFC may mediate nicotine’s pro-cognitive, alerting effects but not addiction." },
            { type: "steps", title: "Figure 13-10: why cigarettes and packs are the size they are", items: [
              ["Open", "Nicotine opens resting α4β2 receptors → dopamine release and reward."],
              ["Desensitize", "By the time the cigarette is finished, receptors are desensitized: a cigarette lasts about as long as desensitization takes."],
              ["Resensitize = craving", "As receptors recover (about **45 minutes**), craving and withdrawal begin; 20 cigarettes over 16 waking hours keeps them desensitized all day."],
              ["Upregulate", "Chronic desensitization makes neurons **upregulate** α4β2 receptors, which only **amplifies** craving as they resensitize."]
            ] },
            { type: "callout", kind: "pearl", title: "From pleasure to preventing craving", text: "At first the goal of smoking is maximum dopamine release; eventually it is mostly to **prevent craving**. PET confirms each cigarette delivers about enough nicotine, for about long enough, to do this. Addiction may begin with the **first cigarette**, and a “**molecular memory**” of nicotine may last a lifetime even in long-abstinent ex-smokers." },
            { type: "callout", kind: "caution", title: "Ventral to dorsal, not the reverse", text: "The book describes the lasting “diabolical learning” of nicotine as “dorsal to ventral migration of control from impulsive to compulsive circuits.” Throughout the chapter, impulsive control is **ventral** and compulsive control **dorsal**, so the migration is **ventral to dorsal**." },
            { type: "table", caption: "Treatments for nicotine addiction", head: ["Treatment", "Mechanism", "Effectiveness"], rows: [
              ["**Nicotine replacement** (gum, lozenge, nasal spray, inhaler, patch)", "Steady nicotine without pulsatile blasts: desensitizes craving receptors without much reinforcement", "Quit rates similar to bupropion"],
              ["[[drug:varenicline|Varenicline]]", "Selective **α4β2 nicotinic partial agonist**: holds the channel in an intermediate, non-desensitized state; reduces reward if the patient smokes and eases withdrawal", "**Triples to quadruples** quit rates vs placebo, yet only about **10%** abstinent at 1 year; 12 weeks may be too short"],
              ["[[drug:bupropion|Bupropion]]", "NDRI: returns a bit of dopamine to craving accumbens D2 receptors (takes the edge off)", "About **half** varenicline’s quit rate"]
            ], wide: true },
            { type: "compare", title: "Figure 13-11: three ways to act on a nicotinic channel", items: [
              { title: "Full agonist", color: "case", points: ["ACh (very short-acting), nicotine (long-acting)", "Channel opens fully and frequently"] },
              { title: "Partial agonist (NPA)", color: "clin", points: ["Varenicline", "Intermediate, **not desensitized** state; opens less often than a full agonist"] },
              { title: "Antagonist", color: "mech", points: ["Stabilizes the channel **closed**, not desensitized"] }
            ] },
            { type: "callout", kind: "exam", title: "The numbers on quitting", text: "About two-thirds of smokers want to quit, a third try, and only **2–3%** succeed long term. Tobacco has the highest chance of producing dependence after a single try: arguably the most addicting substance known." },
            { type: "update", year: "2026", title: "Cytisinicline: complete response letter", text: "**Cytisinicline**, a plant-derived nicotinic partial agonist related to varenicline, succeeded in two phase 3 trials (ORCA-2, ORCA-3). On June 22, 2026 its developer reported an FDA **complete response letter** citing manufacturing inspection findings and unfinished labeling, with **no** deficiencies in efficacy or safety. It was not approved as of that date.", source: "Drugs.com; Achieve Life Sciences, June 22, 2026" }
          ]
        },
        {
          id: "s13-alcohol",
          title: "Alcohol",
          pages: "553–556",
          blocks: [
            { type: "p", text: "Many people with psychiatric disorders **self-medicate** with alcohol (van Gogh: “If the storm within gets too loud, I take a glass too much to stun myself”). About **85%** of alcoholics also smoke, and many abuse benzodiazepines, cannabis or opioids." },
            { type: "table", caption: "Figure 13-15: alcohol’s hypothesized actions in the VTA", head: ["System", "Action"], rows: [
              ["**GABA**", "Enhances GABA release by blocking presynaptic **GABA-B**; positively modulates postsynaptic **GABA-A**, especially **δ-subunit** receptors (neurosteroid-sensitive, benzodiazepine-insensitive)"],
              ["**Glutamate**", "Inhibits release via presynaptic **mGluRs** and **VSCCs**; may reduce postsynaptic **NMDA** and mGluR actions"],
              ["**Opioid**", "Acts on **μ-opioid** receptors directly or releases **β-endorphin**/enkephalin from arcuate nucleus neurons → dopamine release (the reinforcing part)"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Alcohol in one line", text: "**More GABA, less glutamate, plus opioids**. Treatments mirror this: block the **opioid** reward (naltrexone), mimic the **GABA/glutamate** balance (acamprosate), or punish drinking (**disulfiram**)." },
            { type: "table", caption: "Treatments for alcohol use disorder", head: ["Drug", "Mechanism", "Notes"], rows: [
              ["[[drug:naltrexone|Naltrexone]]", "**μ-opioid antagonist**: blocks the euphoria of drinking", "Oral or **30-day injection**; reduces **heavy drinking days** (≥ 5 drinks/day men, ≥ 4 women) and increases abstinence. The injection solves adherence but is rarely prescribed"],
              ["[[drug:nalmefene|Nalmefene]]", "μ-opioid antagonist", "Approved **outside the US** for alcohol"],
              ["[[drug:acamprosate|Acamprosate]]", "Taurine derivative: blocks **mGluRs** (mGlu5, perhaps mGlu2) to reduce withdrawal glutamate release; GABA and NMDA effects likely indirect: “**artificial alcohol**”", "Approved but seldom prescribed"],
              ["[[drug:disulfiram|Disulfiram]]", "**Irreversible** inhibitor of [[target:aldh|aldehyde dehydrogenase]] → toxic **acetaldehyde** if alcohol is drunk", "Flushing, nausea, vomiting, hypotension; adherence problems; occasionally dangerous; little used now"],
              ["Topiramate, [[drug:ondansetron|ondansetron]]", "Anticonvulsant; 5HT3 antagonist", "**Unapproved** but may help"]
            ], wide: true },
            { type: "callout", kind: "pearl", title: "Integrate care", text: "Drug treatment of alcoholism works best combined with treatment of comorbid psychiatric disorders and structured programs such as 12-step approaches." }
          ]
        },
        {
          id: "s13-sedatives",
          title: "Sedative hypnotics and GHB",
          pages: "556–559",
          blocks: [
            { type: "p", text: "**Sedative hypnotics** include **barbiturates** and related agents (ethchlorvynol, ethinamate), chloral hydrate and derivatives, and piperidinediones (glutethimide, methyprylon). Experts often add alcohol, **benzodiazepines** and **Z drugs**. All act as **PAMs** at benzodiazepine-sensitive and/or benzodiazepine-insensitive GABA-A receptors (Figure 13-14)." },
            { type: "compare", title: "Figure 13-14: different GABA-A receptors, different drugs", items: [
              { title: "Benzodiazepine-sensitive", color: "mech", points: ["**α1, α2, α3, α5** with **γ** subunits", "Benzodiazepines and **barbiturates** (at separate sites)"] },
              { title: "Benzodiazepine-insensitive", color: "pharm", points: ["**α4, α6** with **δ** subunits", "**Alcohol**, neuroactive steroids, general anesthetics"] }
            ] },
            { type: "callout", kind: "caution", title: "Why barbiturates are rarely used", text: "Compared with benzodiazepines, barbiturates are **much less safe in overdose**, cause dependence and abuse more often, and produce **far more dangerous withdrawal**." },
            { type: "p", text: "**GHB** (γ-hydroxybutyrate; [[drug:sodium-oxybate|sodium oxybate]]) treats narcolepsy and cataplexy (Chapter 10) but is also abused to get high and as a **“date rape” drug**. It is an agonist at its own **GHB receptors** and at **GABA-B** receptors." }
          ]
        },
        {
          id: "s13-opioids",
          title: "Opioids: the endogenous system and addiction",
          pages: "559–560",
          blocks: [
            { type: "compare", items: [
              { title: "Opiates", color: "found", points: ["Derived from the **opium poppy**", "Heroin, morphine, codeine"] },
              { title: "Opioids", color: "drug", points: ["**Any** natural or synthetic substance acting at opioid receptors (includes opiates)", "Hydrocodone, oxycodone, **fentanyl**, methadone"] }
            ] },
            { type: "table", caption: "Figure 13-18: three endogenous opioid systems", head: ["Precursor", "Peptide", "Receptor"], rows: [
              ["**POMC** (pro-opiomelanocortin)", "**β-endorphin** (“the brain’s own morphine”)", "[[target:mor|μ (mu)]]"],
              ["**Proenkephalin**", "**Enkephalin**", "[[target:dor|δ (delta)]]"],
              ["**Prodynorphin**", "**Dynorphin**", "[[target:kor|κ (kappa)]]"]
            ] },
            { type: "list", title: "The opioid epidemic (book’s figures)", items: [
              "The US consumes about **85%** of the world’s opioids; more than 60 million Americans fill an opioid prescription each year; about 20% misuse them, 20% share pills, and over **2 million** become iatrogenically addicted.",
              "Patients move from pills to cheaper **heroin**, increasingly laced with **fentanyl** (100× morphine); **carfentanil** is 10,000× morphine.",
              "The epidemic disproved the idea that oral **controlled-release** forms reduce addiction, and suggested opioids lose analgesic power within **days to weeks**; prescriptions are now limited in amount and duration."
            ] },
            { type: "callout", kind: "caution", title: "Naloxone does reverse fentanyl", text: "The book states that fentanyl and its derivatives are “unable to be reversed” by naloxone. Naloxone **does** reverse fentanyl overdose; potent synthetic opioids may need **larger or repeated doses** and prompt airway support. Never withhold naloxone because fentanyl is suspected." },
            { type: "flow", title: "The opioid experience", steps: [
              ["Rush", "Intense, brief **euphoria**", "drug"],
              ["Calm", "Hours of profound **tranquility**", "clin"],
              ["Nodding", "Drowsiness, mood swings, mental clouding, apathy, slowed movement", "pharm"],
              ["Overdose", "**Respiratory depression**, coma; reversed by [[drug:naloxone|naloxone]] (which can precipitate withdrawal)", "case"]
            ] },
            { type: "p", text: "Opioids release **less dopamine** than stimulants in the accumbens yet give no less pleasure, so how the opioid high is produced is not fully clear. Receptors adapt readily, causing **tolerance** (rising doses, narrowing the gap between euphoria and overdose) and **dependence**. **Withdrawal** brings dysphoria, craving, irritability, autonomic hyperactivity (tachycardia, tremor, sweating) and **piloerection** (“cold turkey”). What began as a quest for relief or euphoria ends as a quest to avoid withdrawal." },
            { type: "update", year: "2023", title: "Naloxone over the counter; nalmefene nasal spray", text: "On March 29, 2023 the FDA approved **Narcan** (naloxone 4 mg nasal spray) for **over-the-counter** sale, the first OTC opioid-overdose reversal agent. In May 2023 it approved **Opvee**, a prescription **nalmefene** nasal spray, a longer-acting opioid antagonist for emergency treatment of overdose.", source: "FDA via BioSpace, March 29, 2023; NPR, May 22, 2023" },
            { type: "update", year: "2025", title: "Overdose deaths falling", text: "US overdose deaths fell for the **third straight year**: provisional CDC estimates were about **81,300** deaths in 2024 and about **70,000** in 2025 (down ~14%), with opioid-involved deaths down about 19% (to ~44,600). Fentanyl and other synthetic opioids still dominate overdose deaths. The book’s “60,000 opioid deaths, one-third from fentanyl” figure is out of date.", source: "CDC National Center for Health Statistics, May 13, 2026" }
          ]
        },
        {
          id: "s13-oud-tx",
          title: "Treating opioid addiction",
          pages: "560–563",
          blocks: [
            { type: "compare", title: "Substitution: avoiding withdrawal with a known, non-IV opioid", items: [
              { title: "Methadone", color: "drug", points: ["[[drug:methadone|Methadone]]: **full μ agonist**", "Oral; suppresses withdrawal completely", "Usually dispensed **daily at a clinic**"] },
              { title: "Buprenorphine", color: "clin", points: ["[[drug:buprenorphine|Buprenorphine]]: **μ partial agonist**", "Sublingual (poor oral absorption); best started once **mild withdrawal** has begun", "Several-day supplies as an outpatient", "Usually combined with **naloxone** (inactive sublingually, but injection gives no high and may precipitate withdrawal: deters IV diversion)", "Also a **6-month implant** and **1-month depot**"] }
            ] },
            { type: "list", title: "Why tapering to abstinence usually fails", items: [
              "After 30–90 days of drug-free residential treatment, relapse may reach **60–80% within a month** and **90–95% by 3 months**.",
              "Re-exposure to cues (people, places, paraphernalia) rings the Pavlovian bell; the **habit circuit** overrides willpower.",
              "This happens whether stopping methadone, buprenorphine or street opioids."
            ] },
            { type: "table", caption: "Figure 13-19: withdrawal follows half-life", head: ["Drug", "Peak", "Duration", "Severity"], rows: [
              ["**Morphine/heroin**", "36–72 h", "7–10 days", "Most intense"],
              ["**Methadone**", "72–96 h", "**14+ days**", "Less intense, much longer"],
              ["**Buprenorphine**", "~72 h (after a few days)", "About a week", "Less intense, similar length to heroin"]
            ] },
            { type: "steps", title: "Improving detoxification (Figures 13-20, 13-21)", items: [
              ["Add an α2 agonist", "[[drug:lofexidine|Lofexidine]] or [[drug:clonidine|clonidine]] reduces the **intensity** (autonomic symptoms) but not the duration of withdrawal."],
              ["Add naltrexone", "An α2 agonist **plus naltrexone** reduces both severity **and duration**."],
              ["Maintain on injectable naltrexone", "Monthly [[drug:naltrexone|naltrexone]] injection keeps levels therapeutic all day (unlike oral), needs one decision per 30 days instead of 30, and cannot be stopped impulsively to relapse."]
            ] },
            { type: "callout", kind: "key", title: "The best treatments are underused", text: "**Medication-assisted therapy** (methadone or buprenorphine) and injectable naltrexone work best in structured programs with urine screening and psychological, medical and vocational support. Yet only a minority of people with opioid addiction enter treatment, a minority of those get MAT, and almost none get injectable naltrexone." },
            { type: "update", year: "2023", title: "Easier buprenorphine prescribing; weekly and monthly injections", text: "The Consolidated Appropriations Act of 2023 **eliminated the DATA (“X”) waiver**, so since January 2023 any clinician with a standard DEA registration covering Schedule III drugs can prescribe buprenorphine for opioid use disorder. On May 23, 2023 the FDA approved **Brixadi**, an extended-release buprenorphine injection given **weekly or monthly**.", source: "DEA/SAMHSA, January 2023; Braeburn via BioSpace, May 23, 2023" }
          ]
        },
        {
          id: "s13-cannabis",
          title: "Cannabis",
          pages: "563–567",
          blocks: [
            { type: "p", text: "The brain makes its own cannabinoids, **anandamide** and **2-arachidonoylglycerol (2-AG)**, acting at [[target:cb1|CB1]] and [[target:cb2|CB2]] receptors. Classic neurotransmission triggers synthesis of endocannabinoids from postsynaptic membrane lipids. They travel **retrograde** to presynaptic CB1 receptors and **inhibit** further transmitter release (Figure 13-24)." },
            { type: "table", caption: "Figure 13-23: endocannabinoid receptors and ligands", head: ["Receptor", "Location", "2-AG", "Anandamide"], rows: [
              ["**CB1**", "Neuron terminals throughout CNS and PNS (most abundant)", "High-efficacy agonist", "Low-efficacy agonist"],
              ["**CB2**", "Mainly **immune cells**; some glia and brainstem", "High-efficacy agonist", "Very low-efficacy agonist"]
            ] },
            { type: "compare", title: "Figure 13-25: THC vs CBD", items: [
              { title: "THC (tetrahydrocannabinol)", color: "case", points: ["**Partial agonist** at CB1 and CB2", "**Psychoactive**, euphoric, **anxiogenic**", "Low-CBD cannabis: more hallucinations, delusions, memory impairment, earlier psychosis onset"] },
              { title: "CBD (cannabidiol)", color: "clin", points: ["Isomer of THC; little CB1/CB2 activity; mechanism unknown (perhaps serotonergic)", "**Not psychoactive**; anxiolytic, anticonvulsant", "Pure CBD may be **antipsychotic** and anxiolytic"] }
            ] },
            { type: "callout", kind: "caution", title: "Potency and psychosis", text: "Cannabis has grown more potent (**more THC, less CBD**). One influential study estimated that without high-potency cannabis, **12%** of first-episode psychosis across Europe would be prevented (**32%** in London, **50%** in Amsterdam). Vulnerable people can’t be identified in advance, and cannabis worsens existing psychosis." },
            { type: "list", title: "Effects", items: [
              "Usual doses: well-being, relaxation, friendliness, distorted time sense, slowed thinking, impaired **short-term memory**, feelings of special insight.",
              "High doses: panic, toxic delirium, psychosis.",
              "Heavy daily use: **amotivational syndrome** (low drive, short attention, poor judgment, distractibility, introversion, deteriorating habits, depersonalization)."
            ] },
            { type: "table", caption: "Tables 13-2 and 13-4 (selected): evidence and approved products", head: ["", "Details"], rows: [
              "Substantial evidence (Table 13-2)",
              ["Benefits", "**Chronic pain**, chemotherapy nausea, patient-reported MS spasticity"],
              ["Risks", "Respiratory symptoms, **motor vehicle crashes**, lower birth weight, **psychosis**"],
              "Approved products (Table 13-4)",
              ["[[drug:dronabinol|Dronabinol]] (synthetic THC)", "Chemotherapy nausea; AIDS wasting appetite (US)"],
              ["[[drug:nabilone|Nabilone]] (THC analogue)", "Chemotherapy nausea (US); **Schedule II**"],
              ["[[drug:nabiximols|Nabiximols]] (~1:1 THC:CBD spray)", "MS spasticity and pain (outside the US)"],
              ["[[drug:cannabidiol|Epidiolex]] (purified CBD)", "Seizures in **Lennox–Gastaut** and **Dravet** syndromes from age 2 (US); not controlled"]
            ] },
            { type: "callout", kind: "key", title: "Why “medical marijuana” isn’t a prescription drug", text: "A raw plant with about 500 chemicals and 100+ cannabinoids, varying from plant to plant, with possible pesticide and fungal contamination and unregulated dosing, cannot meet prescription standards of purity, defined PK and randomized-trial evidence. Pure THC and CBD products can, and have been approved." },
            { type: "update", year: "2026", title: "Partial rescheduling of marijuana", text: "Effective April 28, 2026, the DEA moved marijuana in **FDA-approved products** and marijuana under **state medical-marijuana licenses** from Schedule I to **Schedule III**. A hearing on rescheduling all other marijuana ran June 29–July 15, 2026; as of late September 2026 no final decision had been issued.", source: "Gibson Dunn, April 2026; Morgan Lewis, September 24, 2026" }
          ]
        },
        {
          id: "s13-hallucinogens",
          title: "Hallucinogens, empathogens and dissociatives",
          pages: "567–571",
          blocks: [
            { type: "table", caption: "Three classes of mind-altering drugs", head: ["Class", "Examples", "Main mechanism"], rows: [
              ["**Hallucinogens**", "Tryptamines ([[drug:psilocybin|psilocybin]]), ergolines ([[drug:lsd|LSD]]), phenethylamines ([[drug:mescaline|mescaline]])", "**5HT2A agonism**, plus many other 5HT receptors"],
              ["**Empathogens** (entactogens)", "[[drug:mdma|MDMA]] (“Ecstasy,” “Molly”)", "**SERT** competitive inhibitor and pseudosubstrate → serotonin release (mostly onto 5HT2A)"],
              ["**Dissociatives**", "[[drug:pcp|PCP]], [[drug:ketamine|ketamine]]", "**NMDA** antagonists at the same channel site"]
            ], wide: true },
            { type: "list", title: "Hallucinogens", items: [
              "**5HT2A antagonists** (not D2 antagonists) can reverse their effects, supporting 5HT2A agonism as the main action.",
              "Rapid **tolerance**, even after one dose, from 5HT2A desensitization.",
              "**Flashbacks** (mostly LSD): brief recurrences days to months later, perhaps long-lasting serotonergic adaptation or emotional conditioning in the **amygdala** (like PTSD re-experiencing).",
              "They cause mostly **illusions** rather than true hallucinations, with clear consciousness: visual trails, macropsia/micropsia, **synesthesia**, slowed time, depersonalization and derealization.",
              "**Psychedelic** (mind-expanding, union, religious feeling) and **psychotomimetic**, but the resemblance to psychosis is superficial: stimulants and **PCP** mimic psychosis far better.",
              "Risks: “**bad trip**” (panic), delirium, and uncommonly frank psychosis; tachycardia, raised BP and temperature."
            ] },
            { type: "callout", kind: "caution", title: "Psilocybin and psilocin chemistry", text: "The book names psilocybin “4-diphosphoryloxy-N,N-dimethyltryptamine” and psilocin “N,N-dimethyltryptamine or DMT.” Psilocybin is **4-phosphoryloxy**-DMT, and its active metabolite psilocin is **4-hydroxy**-DMT. DMT itself is a different hallucinogen." },
            { type: "steps", title: "Figure 13-28: MDMA at the serotonin terminal (like amphetamine at DA)", items: [
              ["Competitive inhibition", "Binds SERT at the serotonin site (more selective for SERT than DAT/NET, unlike amphetamine)."],
              ["Transport in", "Hitchhikes into the terminal via SERT."],
              ["VMAT", "Competitively inhibits VMAT and enters vesicles."],
              ["Displacement", "Displaces serotonin into the cytoplasm."],
              ["Release", "Channels open and **SERT reverses**, flooding the synapse with serotonin."]
            ] },
            { type: "list", title: "MDMA", items: [
              "Effects are **blocked by SSRIs**, showing it works by riding in on SERT.",
              "Well-being, euphoria, closeness and sociability; sometimes visual distortions, synesthesia, altered time; sometimes mania-like states or anxious derealization.",
              "Deaths from **hyperthermia** and dehydration at raves."
            ] },
            { type: "list", title: "Dissociatives", items: [
              "Developed as anesthetics: **dissociative anesthesia** with catalepsy, amnesia and analgesia, often without loss of consciousness.",
              "Dissociation: detachment from environment and body, depersonalization and derealization, dream-like trance.",
              "**PCP**: schizophrenia-like psychosis (the NMDA hypofunction model), **vertical nystagmus**, catatonia, analgesia; overdose with coma, hyperthermia, seizures, **rhabdomyolysis**.",
              "**Ketamine** (“special K”): far less psychotomimetic; still used as an anesthetic (especially in children) and in veterinary medicine; subanesthetic ketamine and **esketamine** treat resistant depression (Chapter 7)."
            ] }
          ]
        }
      ]
    },
    {
      title: "Rethinking addiction treatment",
      sections: [
        {
          id: "s13-extinction",
          title: "Abuse your way to abstinence?",
          pages: "571–574",
          blocks: [
            { type: "p", text: "Current treatments block the acute rewarding effects of nicotine, alcohol or opioids, targeting the **liking and wanting** of the impulsive phase. None can block the **ventral-to-dorsal** migration of control, because its mechanism is unknown. Worse, patients usually seek help in the **compulsive** phase, once conditioning is complete." },
            { type: "flow", title: "Figure 13-29A: liking, wanting and habit", steps: [
              ["Normal", "Salient stimulus → favorable outcome → reward. **Liking** (learning the reward) is **opioid**-dependent; **wanting** (anticipating it) is **dopamine**-dependent", "clin"],
              ["Impulsivity", "Wanting outweighs consequences; a **binge–abstinence–anticipation** cycle builds", "drug"],
              ["Compulsivity", "Reward no longer matters; behavior is driven by the **stimulus** alone: habit", "case"]
            ] },
            { type: "callout", kind: "analogy", title: "You’re not a rider until you’ve fallen off seven times", text: "Relapse is part of recovery. Stahl’s idea is to **use** inevitable slips: if the drug is blocked when taken, each relapse teaches the brain that the drug **no longer rewards**, extinguishing the habit, like Pavlov’s dog once the bell no longer brings food." },
            { type: "table", caption: "Pharmacological extinction", head: ["Approach", "How it works"], rows: [
              ["**Drink your way to sobriety** (Sinclair method)", "Take oral **naltrexone or nalmefene ~1 hour before drinking**; alcohol stops being rewarding, so repeated drinking extinguishes the habit. Opioid antagonists work **best paired with drinking**, poorly during abstinence; they reduce heavy drinking more than they produce abstinence"],
              ["**Inject your way to heroin abstinence**", "Trying to “inject over” **long-acting naltrexone** gives no high; repeated failures extinguish the conditioned response"],
              ["**Smoke your way to quitting**", "Smokers can “smoke over” a nicotine patch or bupropion, but **not varenicline**, which has higher affinity for nicotinic receptors than nicotine; smoking stops being reinforcing"]
            ], wide: true },
            { type: "callout", kind: "pearl", title: "Craving outlasts detox", text: "Detoxification and deprivation do **not** stop alcohol craving; they can increase later drinking. Recovered drinkers may feel a burst of craving driving past their old bar years later, a sign of an incompletely extinguished habit." }
          ]
        },
        {
          id: "s13-assisted",
          title: "“Therapeutic” dissociation, hallucinations and empathy",
          pages: "574–575",
          blocks: [
            { type: "p", text: "Mystical-like experiences (oceanic boundlessness, unity, sacredness, **noetic** insight, transcendence of time and space, ineffability) have been used in healing for centuries. Now they are being induced in a controlled setting and guided with **psychotherapy** for treatment-resistant disorders. These are early days, and the key variables (**set, setting and cast**, therapist relationship, preparation, drug and dose) are still being defined." },
            { type: "table", caption: "Three drug-assisted psychotherapies", head: ["Approach", "Rationale", "Targets studied"], rows: [
              ["**Ketamine**", "Promote **prefrontal neuroplasticity** to reverse ventral-to-dorsal migration, guided by a therapist", "Craving and use of cocaine, nicotine, alcohol"],
              ["**Psilocybin**", "Mystical state; possible 5HT2A-triggered plasticity (unproven)", "Cancer-related anxiety, resistant anxiety and **depression**; OCD, pain, addictions, cluster headache, others"],
              ["**MDMA**", "An **empathic** state that makes painful memories easier to explore; may block or weaken **reconsolidation** of traumatic memories", "**PTSD** when exposure therapy fails or is too painful"]
            ], wide: true },
            { type: "update", year: "2024", title: "MDMA-assisted therapy not approved", text: "In August 2024 the FDA issued a complete response letter declining approval of MDMA-assisted therapy (midomafetamine) for PTSD and requested another phase III trial.", source: "FDA complete response letter to Lykos Therapeutics, August 9, 2024" },
            { type: "update", year: "2026", title: "Psilocybin (COMP360) nears an FDA filing", text: "Compass Pathways reported positive phase 3 results for its psilocybin formulation **COMP360** in treatment-resistant depression. As of its May 2026 report a rolling new drug application was under way, with completion planned for the fourth quarter of 2026; psilocybin was not yet approved.", source: "Compass Pathways first-quarter 2026 report, May 13, 2026" }
          ]
        }
      ]
    },
    {
      title: "Behavioral addictions and related disorders",
      sections: [
        {
          id: "s13-bed",
          title: "Binge eating disorder and other behavioral addictions",
          pages: "575–576",
          blocks: [
            { type: "p", text: "“Food addiction” is not a formal diagnosis, but **binge eating disorder (BED)** is: recurrent discrete binges of more food than most people would eat, with **loss of control** and marked distress. Eating driven by external triggers despite satiety and harm is a **compulsion** and a habit, paralleling drug addiction. Compulsive rejection of food in **anorexia** is its mirror image." },
            { type: "list", title: "BED facts", items: [
              "The **most common** eating disorder, yet often undiagnosed; clinicians may avoid asking obese patients.",
              "About **half** of people with BED are obese, but not everyone with obesity has BED.",
              "**80%** meet criteria for a mood, anxiety, substance use disorder or ADHD, and usually present for that: **ask about binge eating**.",
              "[[drug:lisdexamfetamine|Lisdexamfetamine]] is the **only approved** treatment; off-label options (topiramate, antidepressants, naltrexone) have limited efficacy.",
              "It may work less by suppressing appetite (no longer the driver once eating is compulsive) than by promoting **striatal neuroplasticity** that reverses ventral-to-dorsal migration.",
              "Adding psychotherapy enhances drug efficacy."
            ] },
            { type: "compare", items: [
              { title: "Gambling disorder", color: "drug", points: ["Repeated failed efforts to stop, **tolerance** (bigger bets), withdrawal and relief on resuming", "Many experts would class it with addictions", "Can be triggered by **dopamine agonists and partial agonists**"] },
              { title: "Internet gaming", color: "pharm", points: ["Inability to stop, tolerance, withdrawal, relief on resuming", "Not yet formally recognized as an addiction"] }
            ] }
          ]
        },
        {
          id: "s13-ocd",
          title: "Obsessive–compulsive and related disorders",
          pages: "576–577",
          blocks: [
            { type: "p", text: "**OCD**, once an anxiety disorder, now has its own DSM-5 category. Patients feel intense urges to perform rituals, most often **checking and cleaning**, despite full insight that they are senseless. Rather than goal-directed efforts to reduce anxiety, compulsions may be **habits** triggered mindlessly by environmental stimuli. **Obsessions** may even be after-the-fact rationalizations of inexplicable compulsive urges. OCD patients show inefficient **OFC** processing and cognitive inflexibility, like addicts." },
            { type: "compare", items: [
              { title: "SSRIs (first-line drugs)", color: "drug", points: ["Modest efficacy; about **half** respond poorly", "**Suppress** abnormal circuitry: relapse when stopped"] },
              { title: "Exposure and response prevention", color: "clin", points: ["Often **more effective** than serotonergic drugs", "May **reverse** the circuitry (dorsal back to ventral): gains persist after stopping", "Less effective in drug and behavioral addictions"] }
            ] },
            { type: "list", title: "After several SSRIs fail", items: [
              "**Very high-dose SSRI** or SSRI + **serotonin–dopamine blocker** augmentation (often the best option)",
              "[[drug:clomipramine|Clomipramine]], SNRIs or MAOIs",
              "SSRI + benzodiazepine, lithium or buspirone",
              "**rTMS** (approved for OCD)",
              "Experimental: **deep brain stimulation**, stereotactic ablation for the most resistant"
            ] },
            { type: "callout", kind: "pearl", title: "Related disorders", text: "Hoarding, compulsive shopping, skin picking and **body dysmorphic disorder** may respond somewhat to SSRIs; **trichotillomania** usually does not. None has an approved drug. Some experts consider the preoccupations of hypochondriasis and somatization to be obsessions." }
          ]
        },
        {
          id: "s13-impulse",
          title: "Impulse control disorders and violence",
          pages: "577–578",
          blocks: [
            { type: "p", text: "No impulse control disorder in Table 13-1 has an approved treatment for its impulsivity. The hope is that what works for one impulsive–compulsive disorder may work across the spectrum, though this risks oversimplifying very different conditions. One testable principle: **stop frequent repetition** of short-term rewarding impulsive acts before they become long-term habits." },
            { type: "table", caption: "Figure 13-31: the heterogeneity of violence", head: ["Type", "Share", "Features"], rows: [
              ["**Impulsive**", "**63%**", "Most common, especially in institutions and in psychotic illness; failed top-down control"],
              ["**Psychotic**", "~**20%**", "Needs standard or aggressive treatment of the psychosis"],
              ["**Psychopathic**", "~**17%**", "Cold and calculated; least common, **most lethal**, least treatable"]
            ] },
            { type: "callout", kind: "key", title: "Violence as habit", text: "Impulsive violence occurs in drug-induced psychosis, schizophrenia, mania, **borderline personality disorder** and other impulsive–compulsive disorders. Treat the underlying condition (often with drugs for psychosis). When impulsive aggression becomes compulsive rather than planned, it may be a **habit** that needs behavioral extinction, not drugs alone." }
          ]
        },
        {
          id: "s13-summary",
          title: "Summary and clinical vignettes",
          pages: "578",
          blocks: [
            { type: "list", title: "Take-home points", items: [
              "**Impulsivity** (ventral reward loop) can transition to **compulsivity** (dorsal habit loop) when a rewarding behavior becomes a habit maintained to relieve tension and withdrawal.",
              "Failed balance of **top-down inhibition** and **bottom-up drive** underlies both.",
              "Each drug of abuse has a distinct mechanism; treatments include **varenicline**, **opioid replacement**, and **opioid antagonists** for alcohol and opioids.",
              "**Habit extinction** and **drug-assisted psychotherapy** are evolving approaches; **BED** is the prototypical behavioral addiction."
            ] },
            { type: "case", title: "Clinical vignette: the smoker with schizophrenia", text: "A 40-year-old man with stable schizophrenia smokes two packs a day and has never been offered help.", point: "Smoking affects **60–85%** of patients with schizophrenia; only ~10% of smokers are offered treatment. Offer **varenicline** (smoking on it is not reinforcing), with bupropion or nicotine replacement as alternatives, and keep treating for longer than 12 weeks if needed." },
            { type: "case", title: "Clinical vignette: heavy drinking, not ready to stop", text: "A 52-year-old drinks 8 beers most nights. He refuses abstinence but wants to cut down.", point: "**Naltrexone** (oral or monthly injection) reduces **heavy drinking days**. The Sinclair-style approach of taking it before drinking aims to **extinguish** the reward. Acamprosate is an option once abstinent." },
            { type: "case", title: "Clinical vignette: opioid relapse after rehab", text: "A woman completed 60 days of drug-free residential rehab for heroin and relapsed within two weeks of returning home.", point: "Expected: relapse is **60–80% within a month** without medication. Offer **buprenorphine** (sublingual, depot or weekly/monthly injection) or **methadone**, or after detox **monthly injectable naltrexone**. Make sure she has **naloxone**." },
            { type: "case", title: "Clinical vignette: the binges he never mentions", text: "A man treated for depression and ADHD has gained 20 kg; on direct questioning he describes nightly out-of-control binges.", point: "**Binge eating disorder** (80% have comorbidity; ask). **Lisdexamfetamine** is the only approved drug and also treats his ADHD; add psychotherapy." },
            { type: "case", title: "Clinical vignette: the new gambler", text: "A 64-year-old started pramipexole for restless legs and has since lost his savings at casinos.", point: "**Dopamine agonists** can induce gambling by stimulating mesolimbic reward. Stop or reduce the agonist." }
          ]
        }
      ]
    }
  ]
});
