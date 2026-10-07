/* Chapter 5 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 5 (pp. 159–243).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch05", "guide", {
  intro: "This chapter turns Chapter 4’s circuits into drug actions. It explains why blocking **D2 receptors** treats psychosis, and why the same blockade in other dopamine pathways causes **secondary negative symptoms**, **hyperprolactinemia**, **drug-induced parkinsonism** and **tardive dyskinesia** (now treatable with **VMAT2 inhibitors**). It then shows how adding **5HT2A antagonism**, swapping in **D2 partial agonism** or adding **5HT1A partial agonism** changes efficacy and side effects, explores uses beyond psychosis (mania, depression, anxiety, agitation, sleep) and **cardiometabolic risk**, and tours two dozen individual agents through their binding profiles: the **pines**, **many dones and a rone**, **two pips and a rip**, the selective 5HT2A antagonist **pimavanserin**, and future mechanisms such as **TAAR1** and **muscarinic** agonists.",
  objectives: [
    "Explain why the book avoids the term “antipsychotic” and name the **four mechanisms** of drugs for psychosis (Figure 5-1).",
    "Link D2 blockade in each dopamine pathway to its effect: **antipsychotic** (mesolimbic), **secondary negative symptoms** (mesolimbic and mesocortical), **hyperprolactinemia** (tuberoinfundibular) and **motor side effects** (nigrostriatal).",
    "Distinguish **drug-induced parkinsonism, acute dystonia, akathisia, NMS and tardive dyskinesia** by mechanism and treatment, including the **dopamine–acetylcholine balance**.",
    "Explain the **supersensitivity** model of TD (too much “go”) and how **tetrabenazine, deutetrabenazine and valbenazine** work.",
    "Explain how **5HT2A antagonism** at three glutamate neuron populations changes dopamine release in the mesostriatal, nigrostriatal and mesocortical pathways, and how it lowers prolactin.",
    "Explain **D2 partial agonism** (the Goldilocks idea, intrinsic activity, the agonist spectrum) and why **5HT1A partial agonism** acts like 5HT2A antagonism.",
    "Describe uses beyond psychosis (**mania, depression, anxiety/PTSD, dementia agitation, sedation**) and the receptor actions behind them.",
    "Describe the **metabolic highway**, the **H1/5HT2C** and **“receptor X”** mechanisms, the metabolic risk tiers and the **four-parameter** monitoring kit.",
    "Read a **binding strip** and compare the **pines, dones, pips and rip** at 5HT2A, 5HT1A, monoamine transporters, α2, D3, 5HT2C, 5HT3, 5HT6/7, 5HT1B/D, H1/M1 and α1.",
    "Recall the distinguishing features of each individual agent and the future mechanisms (**roluperidone, D3 antagonists, TAAR1 agonists, muscarinic agonists, DAO and PDE inhibitors**)."
  ],
  parts: [
    {
      title: "Targeting D2 receptors",
      sections: [
        {
          id: "s5-intro",
          title: "So-called antipsychotics: naming and scope",
          pages: "159–161",
          blocks: [
            { type: "p", text: "The drugs in this chapter target **dopamine receptors, serotonin receptors, or both**, plus many other receptors. They began as treatments for psychosis but are now prescribed even more often for **mania, bipolar depression and treatment-resistant unipolar depression**, with possible future uses in **PTSD** and **agitation in dementia**. Because they are used more for mood disorders than for psychosis yet are not called “antidepressants,” the book follows **neuroscience-based nomenclature**: they have “antipsychotic action” but are not called “antipsychotics.”" },
            { type: "p", text: "The chapter emphasizes **mechanism of action**, not practical prescribing (for which Stahl points to the companion *Prescriber’s Guide*). The goal is to match each drug’s receptor actions to a patient’s therapeutic and tolerability needs: the drugs form one large class, yet each has a **unique** binding profile." },
            { type: "compare", title: "Figure 5-1: four therapeutic mechanisms for psychosis", items: [
              { title: "D2 antagonism", color: "mech", points: ["The **first** mechanism found; for decades the only one", "So-called first-generation, conventional or typical agents"] },
              { title: "5HT2A/D2 antagonism", color: "drug", points: ["D2 antagonism **plus potent 5HT2A antagonism**", "So-called second-generation or atypical agents"] },
              { title: "D2/5HT1A partial agonism", color: "clin", points: ["**D2 partial agonism** replaces antagonism", "Plus **5HT1A partial agonism**"] },
              { title: "5HT2A antagonism alone", color: "hy", points: ["Drops D2 targeting entirely", "The most recent mechanism (pimavanserin)"] }
            ] }
          ]
        },
        {
          id: "s5-history",
          title: "How D2 blockade was discovered",
          pages: "161–162",
          blocks: [
            { type: "p", text: "The first effective drugs for psychosis came from **serendipity** about 70 years ago, not from knowledge of the disease. In the **1950s** **chlorpromazine**, a drug with antihistamine properties, was found to improve psychosis out of proportion to its sedation. Its antihistamine action is **not** what treats psychosis: experiments identified **D2 receptor antagonism** as the mechanism." },
            { type: "defs", items: [
              ["Neurolepsis", "Extreme slowness or absence of movement plus behavioral indifference that early drugs produced in animals; the drugs were largely discovered by this effect, hence the name **“neuroleptics.”**"],
              ["Human counterpart", "Psychomotor slowing, emotional quieting and affective indifference: **“secondary” negative symptoms**, because they mimic the illness’s primary negative symptoms (Tables 4-4 and 4-5)."]
            ] },
            { type: "p", text: "By the **1970s** the key property of all neuroleptics was recognized as **blocking D2 receptors**, specifically in the **mesolimbic/mesostriatal** pathway (Figure 5-2). Newer agents keep D2 action but add potent **5HT2A antagonism** and/or **5HT1A partial agonism**, substitute **D2 partial agonism**, or drop D2 targeting altogether." },
            { type: "callout", kind: "key", title: "A cost of doing business", text: "Blocking mesolimbic D2 receptors that mediate **positive symptoms** (excess dopamine) inevitably also blocks D2 receptors that mediate **motivation and reward**. Neurolepsis and secondary negative symptoms are the undesired price." }
          ]
        },
        {
          id: "s5-negative",
          title: "Secondary negative symptoms",
          pages: "162–164",
          blocks: [
            { type: "h", text: "Mesolimbic D2 blockade" },
            { type: "p", text: "The **nucleus accumbens**, the main target of mesolimbic/mesostriatal neurons in the ventral “emotional” striatum, is widely called the brain’s **“pleasure center,”** and the pathway may be the final common pathway of all reward. If normal D2 stimulation there means pleasure and excess means positive symptoms, then D2 antagonism or partial agonism can reduce positive symptoms **and** block reward at the same time (Figure 5-2B)." },
            { type: "list", items: [
              "Patients may feel **apathetic, anhedonic**, lacking motivation, interest and joy in social contact: a state resembling negative symptoms but **caused by the drug**.",
              "This is sometimes called the **neuroleptic-induced deficit syndrome**, the human echo of neurolepsis.",
              "The near shutdown of the pathway sometimes needed for positive symptoms may help explain the high rates of **smoking and drug abuse** in schizophrenia, as patients try to overcome anhedonia.",
              "Emotional flattening may lead patients to **stop** their D2 blockers."
            ] },
            { type: "callout", kind: "pearl", title: "Managing secondary negative symptoms", text: "**Lower the dose** or **switch** to a better-tolerated D2 blocker. Some adjuncts, including **drugs for depression**, can help. Agents in development include **5HT2A antagonists** and **D3 partial agonists**." },
            { type: "h", text: "Mesocortical D2 blockade" },
            { type: "p", text: "D2 blockers also act in the **mesocortical** pathway, where dopamine is already hypothetically **deficient** in schizophrenia (Figure 5-3). Even though cortical D2 density is **low**, this can cause or worsen **negative**, **cognitive** and **affective** symptoms." }
          ]
        },
        {
          id: "s5-prolactin",
          title: "Tuberoinfundibular D2 blockade: hyperprolactinemia",
          pages: "164–165",
          blocks: [
            { type: "p", text: "The tuberoinfundibular pathway is **normal** in untreated schizophrenia, but D2 antagonists block its receptors and plasma **prolactin rises** (Figure 5-4)." },
            { type: "table", caption: "Consequences of hyperprolactinemia", head: ["Effect", "Notes"], rows: [
              ["**Gynecomastia**", "Breast enlargement, in **men as well as women**"],
              ["**Galactorrhea**", "Breast secretions, in women"],
              ["**Amenorrhea**", "Irregular or absent periods; may interfere with **fertility**, especially in women"],
              ["**Bone demineralization**", "Possibly faster, especially in **postmenopausal** women not on estrogen replacement"],
              ["Sexual dysfunction, weight gain", "Possible; prolactin’s role is **not clear**"]
            ] }
          ]
        },
        {
          id: "s5-motor",
          title: "Nigrostriatal D2 blockade: acute motor side effects",
          pages: "165–170",
          blocks: [
            { type: "p", text: "Blocking D2 receptors in the **nigrostriatal** pathway, the pathway that degenerates in Parkinson’s disease, causes motor side effects (Figure 5-5). These are often lumped together as **extrapyramidal symptoms (EPS)**, an **old-fashioned, imprecise** term. Lumping them hides the fact that they look different and have **vastly different treatments**." },
            { type: "table", caption: "D2 blocker motor syndromes", head: ["Syndrome", "Timing", "Features", "Treatment in the book"], rows: [
              ["**Drug-induced parkinsonism (DIP)**", "Acute; the **most common** side effect of D2-targeting drugs", "Tremor, rigidity, **bradykinesia/akinesia**", "**Anticholinergics** (M1 blockade); **amantadine**; switch to a drug without anticholinergic burden"],
              ["**Acute dystonia**", "Often on **first exposure**, especially to D2 blockers with **neither serotonergic nor anticholinergic** properties", "Intermittent or sustained involuntary contraction of face, neck, trunk, pelvis, limbs or **eyes**; frightening", "**IM anticholinergic**: nearly always works within **20 minutes**"],
              ["**Akathisia**", "Common after D2 blockers", "**Subjective** inner restlessness, unease, dysphoria; **objective** rocking foot to foot, marching in place, pacing", "Not very responsive to anticholinergics; **β-blockers** or **benzodiazepines**; **5HT2A antagonists** can help"],
              ["**Neuroleptic malignant syndrome (NMS)**", "Rare, potentially fatal", "Extreme **rigidity**, high **fever**, coma, death", "**Medical emergency**: stop the D2 blocker, **dantrolene**, **dopamine agonists**, intensive supportive care"],
              ["**Tardive dyskinesia (TD)**", "**Chronic** (months to years); can be **irreversible**", "Continuous involuntary face and tongue movements (chewing, tongue protrusion, grimacing); quick, jerky or **choreiform** limb movements", "**VMAT2 inhibitors** (next sections)"]
            ] },
            { type: "callout", kind: "caution", title: "DIP and TD are opposites", text: "DIP and TD are often lumped together as EPS, yet they have **essentially opposite pharmacologies** and very different treatments. Now that both are treatable, telling them apart matters more than ever. Inadequate relief of motor side effects is a **major reason patients stop** their medication." },
            { type: "h", text: "The dopamine–acetylcholine balance" },
            { type: "flow", title: "Figure 5-7: why anticholinergics treat DIP", steps: [
              ["Normal", "Nigrostriatal dopamine at **D2** on striatal cholinergic interneurons **suppresses acetylcholine** release", "found"],
              ["D2 blockade", "Dopamine can no longer suppress them: **acetylcholine release is disinhibited**", "upd"],
              ["DIP", "Excess ACh at **muscarinic** receptors on medium spiny GABA neurons inhibits movement: akinesia, bradykinesia, rigidity, tremor", "drug"],
              ["Anticholinergic", "Blocking **M1** receptors partly restores the DA–ACh balance and reduces DIP", "clin"]
            ] },
            { type: "callout", kind: "caution", title: "Total anticholinergic burden", text: "Anticholinergics such as **benztropine** cause **dry mouth, blurred vision, urinary retention, constipation**, plus **drowsiness** and cognitive problems (memory, concentration, slowed processing) (Figure 5-8). Many drugs for psychosis, and many concomitant medications, are anticholinergic themselves. Watch the **total burden**, which can lead to life-threatening **paralytic ileus**. Stahl notes that many patients on D2 blockers are **overmedicated** with anticholinergics." },
            { type: "p", text: "**Amantadine** lacks anticholinergic properties but can relieve DIP; its mechanism is thought to be **weak NMDA antagonism**, possibly changing dopamine activity in the direct and indirect motor pathways. It also has some evidence in **TD** and in **levodopa-induced dyskinesia**." },
            { type: "p", text: "Chronic D2 blockade can also cause **late-onset (tardive) dystonia**, a form of TD that needs TD treatment: anticholinergics rarely help and can make it **worse**." },
            { type: "callout", kind: "exam", title: "Match the motor syndrome to its fix", text: "DIP → **anticholinergic or amantadine**; acute dystonia → **IM anticholinergic**; akathisia → **β-blocker, benzodiazepine or 5HT2A antagonist**; NMS → **stop drug, dantrolene, dopamine agonist**; TD and tardive dystonia → **VMAT2 inhibitor** (not anticholinergics)." }
          ]
        },
        {
          id: "s5-td",
          title: "Tardive dyskinesia: how the brain “learns” it",
          pages: "170–174",
          blocks: [
            { type: "table", caption: "How common is TD?", head: ["Population", "Risk in the book"], rows: [
              ["Adults on D2 antagonists with little or no serotonin action", "About **5% per year**, about **25% by 5 years**"],
              ["**Elderly** patients", "As high as **25% within the first year**"],
              ["Patients only ever on **5HT2A/D2 antagonists** or **D2/5HT1A partial agonists**", "Perhaps about **half** the rate of the older drugs"]
            ], note: "Newer agents may mitigate DIP through 5HT2A antagonism and 5HT1A partial agonism, and perhaps the same mechanisms lower TD risk." },
            { type: "list", title: "Who gets TD, and why", items: [
              "Patients **most vulnerable to DIP** with acute blockade may also be most vulnerable to TD with chronic blockade.",
              "The most blockade-sensitive nigrostriatal D2 receptors may trigger an undesirable neuroplasticity: **supersensitivity**.",
              "If blockade is removed **early enough**, D2 receptors may **reset** and TD may reverse; after long-term treatment they sometimes cannot, and TD becomes **irreversible**.",
              "Chronic **levodopa** in Parkinson’s disease causes dyskinesias that look like TD, perhaps through similar aberrant striatal plasticity and neuronal “learning.”"
            ] },
            { type: "callout", kind: "analogy", title: "Don’t mess with your motor striatum", text: "Chronic **blockade** (D2 drugs) and chronic **stimulation** (levodopa) of motor striatal D2 receptors produce similar dyskinesias. Stahl’s lesson: tamper with dopamine receptors in the motor striatum and consequences may follow." },
            { type: "flow", vertical: true, title: "Figures 5-9A to 5-9C: from “go” to “stop” to “go, go, go”", steps: [
              ["Normal", "Dopamine at inhibitory **D2** receptors in the **indirect (stop)** pathway inhibits “stop”: dopamine says **“go”**", "found"],
              ["Acute D2 blockade", "Dopamine can no longer inhibit “stop”: the drug effectively says **“stop”**; too much stop = **slow, rigid DIP**", "drug"],
              ["Chronic D2 blockade", "Indirect-pathway D2 receptors **proliferate** and become **supersensitive** (a futile attempt to overcome blockade); animal and **PET** data support this, most in TD patients", "mech"],
              ["Tardive dyskinesia", "Now **too much** dopamine at too many D2 receptors: excessive inhibition of “stop” → **not enough stop, too much go** → hyperkinetic movements", "upd"]
            ] },
            { type: "callout", kind: "exam", title: "The flip", text: "DIP = **too much stop** (not enough inhibition of the indirect pathway). TD = **too much go** (excessive inhibition of the indirect pathway by upregulated, supersensitive D2 receptors). Neuronal traffic out of the striatum loses its “speed limit.”" },
            { type: "callout", kind: "pearl", title: "Monitor movements in everyone", text: "Screen periodically with a neurological exam and a scale such as the **AIMS** (Abnormal Involuntary Movement Scale). This is often neglected, especially in patients treated for **depression**, who may be at **greater** risk. These are the same drugs no matter whom they are given to." },
            { type: "table", caption: "Options once TD has appeared", head: ["Option", "Problem"], rows: [
              ["**Raise the D2 antagonist dose** to block the new receptors", "May work short term, but brings more immediate side effects and may make TD **worse** later"],
              ["**Stop** the D2 blocker", "Most patients with psychosis cannot tolerate it; the brain does not “forget” well; reversal mainly if stopped **soon after onset**; most patients have **immediate worsening** when blockade is removed"],
              ["**VMAT2 inhibition**", "Lowers dopamine stimulation **without blocking D2** receptors (next section)"]
            ] }
          ]
        },
        {
          id: "s5-vmat2",
          title: "Treating TD with VMAT2 inhibitors",
          pages: "174–179",
          blocks: [
            { type: "p", text: "**VMAT2** sits on synaptic vesicles inside **dopamine, norepinephrine, serotonin and histamine** neurons and stores monoamines until release (Figure 5-10A; [[ch:ch02|Chapter 2]]). Vesicles keep a **low internal pH** with an energy-requiring proton pump, which drives transmitter sequestration. VMAT2 also carries **false substrates** such as **amphetamine** and **MDMA**." },
            { type: "compare", items: [
              { title: "VMAT1", color: "guide", points: ["On vesicles of neurons in **peripheral and central** nervous systems", "Inhibited **irreversibly** by **reserpine** (with VMAT2)"] },
              { title: "VMAT2", color: "mech", points: ["Only in **CNS** neurons", "Inhibited **reversibly** and **selectively** by **tetrabenazine-related** drugs"] }
            ] },
            { type: "p", text: "That is why **reserpine** (once used for hypertension) causes frequent **peripheral** side effects (orthostatic hypotension, stuffy nose, itching, GI effects) and tetrabenazine-related drugs do not. Although VMAT2 carries several monoamines, **tetrabenazine preferentially affects dopamine** at clinical doses: dopamine left outside vesicles is destroyed by **MAO**, depleting dopamine in proportion to VMAT2 inhibition (Figure 5-10B)." },
            { type: "table", wide: true, caption: "Figure 5-11: three forms of tetrabenazine", head: ["", "Tetrabenazine", "Deutetrabenazine", "Valbenazine"], rows: [
              ["Chemistry", "**Inactive prodrug** → four active **dihydro** metabolites via **carbonyl reductase**; all inactivated by **CYP2D6**", "**Deuterated** tetrabenazine: some hydrogens replaced with **deuterium** (heavy hydrogen: one proton + one neutron), a poorer **CYP2D6** substrate; same metabolites", "**Valine** linked to **+α-tetrabenazine**; hydrolyzed, then converted to the single **+α-dihydro** metabolite"],
              ["Main active species", "**+β-dihydro** (most VMAT2 potency among its metabolites); **–α and –β** add **5HT7** and lesser **D2** antagonism", "Same as tetrabenazine", "**+α-dihydro**: the most **selective and potent** VMAT2 inhibitor of the four"],
              ["Dosing", "Short half-life: **three times daily**", "**Twice daily**, **with food**", "Slow hydrolysis: long half-life, **once daily**, no food requirement"],
              ["Approval in the book", "**Huntington’s chorea** (not TD)", "**TD and Huntington’s disease**", "**TD**"],
              ["Other issues", "Peak-dose **sedation** and **DIP**; **CYP2D6 genotyping** to go to higher doses; risk of **depression and suicide** in Huntington’s", "Lower peaks; no genotyping for full dose range; no suicide warning for TD", "No genotyping; **no suicide warning**"]
            ] },
            { type: "callout", kind: "analogy", title: "A clever trick", text: "**Deuteration** makes a drug a less favorable CYP2D6 substrate, giving a longer half-life, less frequent dosing and lower peaks. Commercially, it can also **restart patent life**." },
            { type: "p", text: "A high degree of VMAT2 inhibition, perhaps **over 90%**, may often be needed for the best balance of efficacy and tolerability in TD." },
            { type: "compare", title: "Figure 5-12: VMAT2 inhibition “trims” go in both pathways", items: [
              { title: "Indirect pathway (where TD lives)", color: "upd", points: ["Less dopamine reaches the **upregulated D2** receptors", "Less inhibition of “stop”: more stop signal", "Directly counters the abnormal learning"] },
              { title: "Direct pathway (normal)", color: "clin", points: ["Less dopamine at excitatory **D1** receptors", "Less “go” signal", "Not the site of pathology, but trimming it helps reduce hyperkinetic output"] }
            ] },
            { type: "p", text: "Whether VMAT2 inhibition will prove **disease modifying**, reversing rather than just suppressing movements, awaits long-term studies." }
          ]
        }
      ]
    },
    {
      title: "Three classes of drugs for psychosis",
      sections: [
        {
          id: "s5-fga",
          title: "D2 antagonists: the so-called first generation",
          pages: "179–183",
          blocks: [
            { type: "p", text: "The earliest agents (Table 5-1) are rarely first line but are still used when patients fail newer drugs, when **injections** are needed (immediate and long-acting), and by clinicians who prefer them in treatment-resistant or difficult cases. Beyond psychosis they treat **bipolar and psychotic mania, psychotic depression, Tourette syndrome**, and GI problems such as **reflux, diabetic gastroparesis and nausea/vomiting** (including from chemotherapy). Hence the modern name: **D2 antagonists**, the mechanism common to all their uses." },
            { type: "table", caption: "Table 5-1: earliest agents used to treat psychosis", head: ["Drug (brand)", "Comment in the book"], rows: [
              ["Chlorpromazine (Thorazine)", "Low potency"],
              ["Cyamemazine (Tercian)", "Popular in France; not available in the US"],
              ["Flupenthixol (Depixol)", "Depot; not available in the US"],
              ["Fluphenazine (Prolixin)", "High potency; depot"],
              ["Haloperidol (Haldol)", "High potency; depot"],
              ["Loxapine (Loxitane)", "—"],
              ["Mesoridazine (Serentil)", "Low potency; QTc issues; discontinued"],
              ["Perphenazine (Trilafon)", "High potency"],
              ["Pimozide (Orap)", "High potency; Tourette syndrome; QTc issues; second line"],
              ["Pipothiazine (Piportil)", "Depot; not available in the US"],
              ["Sulpiride (Dolmatil)", "Not available in the US"],
              ["Thioridazine (Mellaril)", "Low potency; QTc issues; second line"],
              ["Thiothixene (Navane)", "High potency"],
              ["Trifluoperazine (Stelazine)", "High potency"],
              ["Zuclopenthixol (Clopixol)", "Depot; not available in the US"]
            ] },
            { type: "table", caption: "Off-target actions of D2 antagonists drive side effects (Figures 5-8, 5-13, 5-14)", head: ["Receptor blocked", "Side effects"], rows: [
              ["**Muscarinic (M1)**", "Dry mouth, blurred vision, constipation and risk of **paralytic ileus**; drowsiness, cognitive dulling"],
              ["**Histamine H1**", "**Weight gain** and **sedation**"],
              ["**α1-adrenergic**", "**Sedation**, dizziness and **orthostatic hypotension**"]
            ] },
            { type: "callout", kind: "pearl", title: "Sedation from three directions", text: "ACh, histamine and NE all drive **cortical arousal** via the thalamus, hypothalamus and basal forebrain (Figure 5-14). Drugs that block **M1, H1 and α1** together (such as **chlorpromazine**) are very sedating, which is sometimes wanted on top of antipsychotic action, but not always." },
            { type: "callout", kind: "exam", title: "Built-in anticholinergic", text: "D2 antagonists with **weak** anticholinergic action (e.g., **haloperidol**, which has little anticholinergic or antihistamine binding) cause **more DIP**. Those with **strong** anticholinergic action cause **less DIP** but more **constipation and paralytic ileus**, especially with other anticholinergics. The drugs differ in side effects much more than in therapeutic profile." }
          ]
        },
        {
          id: "s5-5ht2a",
          title: "Adding 5HT2A antagonism",
          pages: "183–184",
          blocks: [
            { type: "p", text: "To improve on D2 antagonists, a newer class combines **D2 antagonism with 5HT2A antagonism** (the so-called second-generation or atypical antipsychotics); the book calls them **5HT2A/D2 antagonists**. An even newer class has **5HT2A antagonism without D2** action. Preclinical data suggest all known 5HT2A antagonists may really be **inverse agonists** ([[ch:ch02|Chapter 2]]), but since the clinical difference is unclear the book keeps the simpler term “antagonist.”" },
            { type: "table", caption: "What 5HT2A antagonism adds", head: ["Domain", "Effect"], rows: [
              ["**Positive symptoms** (schizophrenia)", "Adding selective 5HT2A antagonists to D2 drugs may improve them; the more potent a drug is at 5HT2A relative to D2, the **less D2 antagonism** may be needed and the better tolerated it may be"],
              ["**Parkinson’s and dementia psychosis**", "5HT2A antagonism **alone** is enough as monotherapy, avoiding D2 side effects entirely"],
              ["**Negative symptoms**", "Selective 5HT2A antagonists alone or added to D2 drugs may improve them"],
              ["**Motor side effects**", "**Less DIP**"],
              ["**Hyperprolactinemia**", "**Less** prolactin elevation"]
            ] },
            { type: "callout", kind: "key", title: "The short answer", text: "5HT2A antagonism **opposes** D2 antagonism in some pathways by **releasing more dopamine** there (reversing unwanted D2 blockade and its side effects), but **enhances** D2 antagonism in another circuit (improving positive symptoms). The difference lies in how the circuits are wired." },
            { type: "table", caption: "Figure 5-15: where drugs for psychosis lie on the agonist spectrum", head: ["Receptor", "Position"], rows: [
              ["**D2**", "Antagonists at the silent end; D2 partial agonists for psychosis **just next to** antagonists; dopamine partial agonists for **Parkinson’s disease** near the **full agonist** end (would be psychotomimetic)"],
              ["**5HT2A**", "Antagonists, possibly **inverse agonists**"],
              ["**5HT1A**", "**Partial agonists**, a common property of many of these drugs, especially the D2 partial agonists"]
            ] }
          ]
        },
        {
          id: "s5-three-pathways",
          title: "5HT2A receptors and three downstream dopamine pathways",
          pages: "184–187",
          blocks: [
            { type: "p", text: "All 5HT2A receptors are **postsynaptic and excitatory**. The crucial ones sit on **three separate populations** of cortical glutamate pyramidal neurons, each regulating a different dopamine pathway (Figures 5-16 and 5-17). What matters is whether the glutamate neuron reaches the dopamine neuron **directly** or through a **GABA interneuron**." },
            { type: "table", wide: true, caption: "Figures 5-16 and 5-17", head: ["", "Wiring", "Excess 5HT2A stimulation", "5HT2A antagonism"], rows: [
              ["**A. Mesolimbic/mesostriatal** (emotional striatum)", "Glutamate neuron **directly** excites VTA/medial SN dopamine neurons: the final common pathway of positive symptoms from schizophrenia, dementia, PDP and hallucinogens", "More dopamine → **positive symptoms**", "**Less** dopamine in emotional striatum: an **independent antipsychotic** action that adds to D2 blockade"],
              ["**B. Nigrostriatal** (motor striatum)", "Glutamate → **GABA interneuron in SN** → nigrostriatal dopamine neuron (polarity flipped)", "**Less** dopamine in motor striatum → **DIP**", "**More** dopamine competes with the D2 blocker → **fewer motor side effects**, less need for anticholinergics"],
              ["**C. Mesocortical** (prefrontal cortex)", "Glutamate → **GABA interneuron in VTA** → mesocortical dopamine neuron", "**Less** prefrontal dopamine → cognitive dysfunction, emotional blunting, flat affect", "**More** prefrontal dopamine → may improve **negative, cognitive and affective** symptoms"]
            ] },
            { type: "callout", kind: "pearl", title: "Why the benefit is inconsistent", text: "The prefrontal benefit is not robust across all 5HT2A/D2 antagonists because their **5HT2A:D2 potency ratios** differ and some have **interfering** properties such as anticholinergic and antihistamine actions. A better approach may be adding a **selective 5HT2A antagonist** to D2 drugs; trials are testing whether this improves positive symptoms or allows lower D2 doses." },
            { type: "p", text: "In **dementia** and **Parkinson’s disease** psychosis, where D2 blockade causes problems or danger, 5HT2A antagonism alone gives a sufficiently robust antipsychotic effect." }
          ]
        },
        {
          id: "s5-5ht2a-prolactin",
          title: "How 5HT2A antagonism lowers prolactin",
          pages: "187–189",
          blocks: [
            { type: "p", text: "Pituitary **lactotrophs** carry both **D2** and **5HT2A** receptors, and the two transmitters act **reciprocally** (Figure 5-18)." },
            { type: "flow", steps: [
              ["Dopamine at D2", "**Inhibits** prolactin release", "mech"],
              ["Serotonin at 5HT2A", "**Stimulates** prolactin release", "drug"],
              ["D2 antagonist alone", "Dopamine’s brake is removed: **prolactin rises**", "upd"],
              ["Add 5HT2A antagonism", "Serotonin’s accelerator is also removed: the two **cancel**, mitigating hyperprolactinemia", "clin"]
            ] },
            { type: "callout", kind: "caution", title: "Theory versus practice", text: "Not all 5HT2A/D2 antagonists lower prolactin elevations to the same extent, and some **do not reduce them at all**, possibly because of other off-target properties (risperidone, for example, raises prolactin even at low doses)." }
          ]
        },
        {
          id: "s5-pa",
          title: "D2 partial agonism",
          pages: "189–193",
          blocks: [
            { type: "p", text: "Another way to improve D2 antagonists is to **substitute D2 partial agonism** and add **5HT1A partial agonism**. Partial agonists stabilize D2 signaling in a state between complete silent antagonism and full agonism (Figures 5-19 to 5-21; [[ch:ch02|Chapter 2]])." },
            { type: "callout", kind: "analogy", title: "Goldilocks drugs", text: "D2 antagonists are **“too cold”**: antipsychotic but with DIP and high prolactin. Dopamine itself (or amphetamine, which releases it) is **“too hot”**: positive symptoms. A partial agonist is hoped to be **“just right.”** Stahl warns the picture is oversimplified: each drug’s balance differs and there is **no perfect** Goldilocks solution." },
            { type: "p", text: "More precisely, a partial agonist produces **intermediate signal transduction** (the volume is partly up, Figure 5-20) by inducing a receptor conformation between that of a full agonist and a silent antagonist (Figure 5-21). Many degrees of partial agonism are possible." },
            { type: "callout", kind: "key", title: "Almost antagonists", text: "D2 partial agonists for psychosis lie **very close to the antagonist end** of the spectrum, “almost” antagonists with **just a whiff** of intrinsic activity. Dopamine partial agonists for **Parkinson’s disease** lie near the **full agonist** end. Using one class for the other’s disorder would make the illness worse, so **do not lump all partial agonists together**." },
            { type: "p", text: "Only a **very small** amount of D2 signal transduction in the striatum is needed to reduce **motor side effects**, especially DIP. Small moves along the spectrum have big clinical effects:" },
            { type: "table", caption: "Darts thrown along the D2 partial agonist spectrum", head: ["Agent", "Outcome"], rows: [
              ["**OPC4392** (related to aripiprazole and brexpiprazole)", "Too much agonist: improved negative symptoms with few motor effects, but **worsened positive symptoms**; never marketed"],
              ["**Bifeprunox**", "Less agonist but still too much: **nausea and vomiting**, weaker on positive symptoms; **not approved** by the FDA"],
              ["**Aripiprazole** (the original “pip”)", "Closer to antagonist: improves positive symptoms without severe motor effects, but some **akathisia**; some question its efficacy in the most severe psychosis (never proven)"],
              ["**Brexpiprazole** (second pip) and **cariprazine** (the “rip”)", "Similar spectrum position to aripiprazole; antipsychotic, low motor effects, some akathisia; differ mainly in **other receptor** actions"]
            ] },
            { type: "callout", kind: "pearl", title: "Partial agonists lower prolactin", text: "Lactotroph D2 receptors are **more sensitive** to the intrinsic activity of D2 partial agonists than other pathways: all three partial agonists in clinical use **reduce** prolactin rather than raise it, presumably because lactotrophs “see” them more as agonists. Adding one to a patient with hyperprolactinemia on a D2 antagonist can **reverse** it." }
          ]
        },
        {
          id: "s5-5ht1a",
          title: "5HT1A partial agonism",
          pages: "193–195",
          blocks: [
            { type: "p", text: "5HT1A partial agonism, especially nearer full agonism on the spectrum, has **similar effects to 5HT2A antagonism**: it releases more dopamine in side-effect pathways, reverses some unwanted D2 effects, and helps **negative and affective** symptoms (Figure 5-22). There is less evidence that it enhances efficacy for **positive** symptoms." },
            { type: "callout", kind: "analogy", title: "Accelerator and brake", text: "The pyramidal neuron has an **accelerator** (excitatory 5HT2A receptors) and a **brake** (inhibitory 5HT1A receptors, which can be presynaptic on 5HT neurons or postsynaptic on these same glutamate neurons). **Taking your foot off the accelerator** (5HT2A antagonism) works much like **stepping on the brake** (5HT1A partial agonism), especially when done together." },
            { type: "compare", items: [
              { title: "Nigrostriatal (Figure 5-22A)", color: "mech", points: ["5HT1A partial agonism reduces glutamate drive to SN **GABA interneurons**", "Dopamine release **disinhibited** in motor striatum", "**Fewer motor side effects**, though **akathisia** still commonly occurs with D2/5HT1A partial agonists"] },
              { title: "Mesocortical (Figure 5-22B)", color: "clin", points: ["Same mechanism via **VTA** GABA interneurons", "**More prefrontal dopamine**", "May help **negative, cognitive and affective/depressive** symptoms, perhaps especially in **bipolar and unipolar depression**"] }
            ] }
          ]
        }
      ]
    },
    {
      title: "Beyond psychosis: other actions and side effects",
      sections: [
        {
          id: "s5-mania-dep",
          title: "Mania and depression",
          pages: "195–196",
          blocks: [
            { type: "p", text: "These drugs bind many receptors and are prescribed **more often for indications other than psychosis** than for psychosis itself, one key reason the book does not call them “antipsychotics.”" },
            { type: "callout", kind: "mnemonic", title: "Mania treatment for free", text: "Essentially every drug with D2 antagonist or partial agonist action treats **acute mania** (psychotic or not) and prevents recurrence. The old saying: if it treats positive symptoms, **“you get mania treatment for free,”** perhaps because mania also reflects excess **mesolimbic/mesostriatal** dopamine." },
            { type: "p", text: "The **most common** use of 5HT2A/D2 antagonists and D2/5HT1A partial agonists is **unipolar major depression and bipolar depression**, at **lower** doses. Psychosis needs about **80%** D2 occupancy in the emotional striatum; depression doses are lower and probably **insufficient** to block D2 robustly. So how do they work? **5HT2A antagonism** and **5HT1A partial agonism**, with the resulting rise in **prefrontal dopamine**, are thought to be key." },
            { type: "list", title: "Other binding properties that may be antidepressant (detailed in Chapters 6–7)", cols: 2, items: ["Monoamine **reuptake** blockade", "**α2** antagonism", "**D3** partial agonism", "**5HT2C** antagonism", "**5HT3** antagonism", "**5HT7** antagonism", "Possibly **5HT1B/D** antagonism"] },
            { type: "callout", kind: "pearl", title: "Why one works and another doesn’t", text: "No two agents share exactly the same binding profile, which may partly explain why a patient’s depression responds to **one** drug in the group and not another, and why some are approved for unipolar or bipolar depression and others are not." }
          ]
        },
        {
          id: "s5-other-uses",
          title: "Anxiety, PTSD, dementia agitation and sedation",
          pages: "196–198",
          blocks: [
            { type: "table", head: ["Use", "What the book says"], rows: [
              ["**Anxiety disorders**", "Controversial: some studies support monotherapy in **generalized anxiety disorder** and augmentation in others; **antihistamine and anticholinergic** sedation may be calming; mixed studies and side effects make the risk:benefit ratio uncertain versus alternatives"],
              ["**PTSD**", "Also controversial; a promising exception is a positive study of **brexpiprazole with sertraline** (Chapter 8)"],
              ["**Agitation in dementia**", "Controversial: no clear efficacy signal in most studies and a **safety warning** for cardiovascular events and **death** in elderly dementia patients; positive results for **brexpiprazole**, which may have a satisfactory risk:benefit profile (Chapter 12)"],
              ["**Sedation**", "**Both good and bad**: desirable short term (early treatment, hospitalization, aggression, agitation, sleep induction); undesirable long term, because reduced arousal impairs **cognition** and functional outcome"]
            ] },
            { type: "update", year: "2025", title: "Brexpiprazole: approved for Alzheimer agitation, not for PTSD", text: "Brexpiprazole was approved by the FDA for agitation associated with dementia due to Alzheimer disease in May 2023. The application for brexpiprazole combined with sertraline for adults with PTSD received a complete response letter (not approved) in September 2025.", source: "FDA, May 10, 2023; Otsuka/Lundbeck, September 2025" }
          ]
        },
        {
          id: "s5-metabolic",
          title: "Cardiometabolic actions",
          pages: "198–201",
          blocks: [
            { type: "p", text: "All D2/5HT2A/5HT1A drugs for psychosis carry a **class warning** for weight gain, obesity, dyslipidemia and hyperglycemia/diabetes, but risk varies along a spectrum." },
            { type: "table", caption: "Metabolic risk tiers (p. 198)", head: ["Risk", "Agents"], rows: [
              ["**High**", "**Clozapine, olanzapine**"],
              ["**Moderate**", "Risperidone, paliperidone, quetiapine, asenapine, iloperidone"],
              ["**Low**", "Lurasidone, cariprazine, lumateperone, ziprasidone, pimavanserin, aripiprazole, brexpiprazole"]
            ] },
            { type: "flow", title: "Figure 5-23: the metabolic highway", steps: [
              ["On-ramp", "**Increased appetite and weight gain** → raised BMI → obesity", "hy"],
              ["Insulin resistance", "Dyslipidemia with raised **fasting triglycerides**; hyperinsulinemia", "mech"],
              ["β-cell failure", "Prediabetes → **diabetes**", "drug"],
              ["Destination", "Cardiovascular events and **premature death** (loss of 20–30 years of life)", "upd"]
            ] },
            { type: "compare", title: "Two mechanisms of metabolic harm", items: [
              { title: "Appetite and weight gain", color: "drug", points: ["Linked to **H1** and **5HT2C** antagonism, especially **together**", "Most relevant for **clozapine, olanzapine, quetiapine** (and the antidepressant **mirtazapine**)", "Cannot explain everything: many H1 or 5HT2C blockers cause little weight gain, and some weight-gaining drugs lack both"] },
              { title: "Immediate insulin resistance", color: "upd", points: ["Rise in **fasting triglycerides** that occurs **before** significant weight gain and falls rapidly when the drug is stopped", "Suggests an acute action at an **unknown receptor**, pictured as **“receptor X”** in adipose tissue, liver and skeletal muscle (Figure 5-24)", "Present in high- and moderate-risk agents, absent in low-risk ones"] }
            ] },
            { type: "callout", kind: "caution", title: "DKA and HHS", text: "Rarely, serotonin/dopamine agents are associated with sudden **diabetic ketoacidosis** or **hyperglycemic hyperosmolar syndrome**, perhaps by decompensating patients with undiagnosed insulin resistance, prediabetes or diabetes. Know where the patient is on the highway **before** prescribing." },
            { type: "list", title: "The metabolic monitoring tool kit (Figure 5-25): four parameters", cols: 2, items: ["**Weight / BMI**", "**Fasting triglycerides** (before and after starting)", "**Fasting glucose**", "**Blood pressure**"] },
            { type: "p", text: "In obese, dyslipidemic, prediabetic or diabetic patients also track **waist circumference**. If BMI or fasting triglycerides rise significantly, consider switching, especially to a **low-risk** agent. These parameters are often not monitored, especially in patients treated for **depression**, who are frequently not monitored for TD either." },
            { type: "callout", kind: "key", title: "Same drug, same monitoring", text: "Mechanism dictates **safety** as well as efficacy. The drugs are often monitored rigorously for psychosis (inpatients) and loosely for depression (outpatients), but they are **the same drugs no matter where or in whom they are used**." },
            { type: "table", caption: "Figure 5-26: what can the psychopharmacologist manage?", head: ["Factor", "Manageability"], rows: [
              ["**Genetics, age**", "Unmanageable"],
              ["**Lifestyle**: diet, exercise, stopping smoking", "Modestly manageable"],
              ["**Choice of medication** and switching to one shown to lower risk", "**Most manageable**"]
            ] },
            { type: "p", text: "Co-therapies: **metformin** produced weight loss after drug-induced gain and reduced gain when starting a high- or moderate-risk agent; **topiramate** had less consistent results; the **μ-opioid antagonist samidorphan** combined with olanzapine was on the horizon to reduce olanzapine-induced weight gain." },
            { type: "update", year: "2021", title: "Olanzapine–samidorphan approved", text: "The combination of olanzapine and samidorphan (Lybalvi) was approved by the FDA for schizophrenia and bipolar I disorder in May 2021.", source: "FDA, May 28, 2021" }
          ]
        }
      ]
    },
    {
      title: "Individual agents",
      sections: [
        {
          id: "s5-binding",
          title: "Reading binding profiles",
          pages: "201, 204–222",
          blocks: [
            { type: "p", text: "Each drug’s binding is drawn as a **strip** of boxes, one per receptor, ranked from most potent (left) to least potent (right), with a dotted line through **D2**. Boxes are semi-quantitative (plus signs reflect potency on a standard Ki scale) and are a **consensus** that varies by laboratory, species and method, and evolves over time. The library’s drug pages convert these strips into bars." },
            { type: "list", title: "Rules for reading a strip", items: [
              "Drugs are dosed for psychosis to occupy at least **60–80%** of D2 receptors.",
              "So receptors **left of D2** are occupied **60% or more** at antipsychotic doses; those to the right, **less than 60%**.",
              "Only receptors bound within about **an order of magnitude** of D2 affinity are likely clinically relevant at antipsychotic doses, and perhaps **not at all** at lower depression doses."
            ] },
            { type: "callout", kind: "analogy", title: "“Our similarities are different”", text: "Asked whether he and his son were alike, baseball’s **Yogi Berra** answered yes, but their similarities were different. So with these drugs: alike in **D2** binding plus some **5HT2A** and/or **5HT1A** action, then different in nearly everything else." },
            { type: "p", text: "Almost all agents bind **5HT2A more potently than D2** (Figure 5-32). The exceptions are the **D2 partial agonists**, which instead bind **5HT1A** about as potently as D2 (Figure 5-33). The wider the 5HT2A–D2 separation, the **less D2 occupancy** may be needed: **lumateperone, quetiapine and clozapine** have the widest separation and the lowest D2 occupancy at antipsychotic doses, **below 60%**." },
            { type: "table", wide: true, caption: "Figures 5-32 to 5-42: how the groups compare, receptor by receptor", head: ["Receptor", "The pines", "Dones and a rone", "Two pips and a rip"], rows: [
              ["**5HT2A**", "All bind much **more potently than D2**", "More or as potent as D2", "Aripiprazole and cariprazine **less** than D2; brexpiprazole similar"],
              ["**5HT1A**", "Clozapine and quetiapine **more** than D2; asenapine, zotepine less; **olanzapine none**", "All dones less than D2; **lumateperone none**", "All about **equal to D2**; it is **brexpiprazole’s most potent** property"],
              ["**Monoamine transporters**", "Only **quetiapine** (via norquetiapine): **NET** about as potent as 5HT2A, more than D2", "**Ziprasidone**: NET and SERT (less than D2); **lumateperone**: **SERT** about equal to D2", "None"],
              ["**α2**", "All, variably; clozapine and quetiapine more than D2 at some subtypes", "Dones variably; risperidone and paliperidone **α2C** ≈ D2; lumateperone none", "Aripiprazole less than D2; brexpiprazole **α2C**; cariprazine some **α2A**"],
              ["**D3**", "All, variably", "All dones, variably; **lumateperone none**", "**Cariprazine’s most potent** property; aripiprazole and brexpiprazole less than D2"],
              ["**5HT2C**", "All **more potent than D2**", "Some affinity; only **ziprasidone** comparable to D2", "All relatively **weak**"],
              ["**5HT3**", "All weaker than D2", "**None**", "Aripiprazole weakly"],
              ["**5HT6 / 5HT7**", "5HT7 ≥ D2: clozapine, quetiapine, asenapine, zotepine; 5HT6 ≥ D2: clozapine, olanzapine, asenapine, zotepine", "Risperidone, paliperidone, ziprasidone, lurasidone bind **5HT7** potently (**lurasidone 5HT7 > D2**); ziprasidone and iloperidone also 5HT6", "All bind 5HT7, none more than D2"],
              ["**5HT1B/D**", "Weak (quetiapine only 1D)", "Risperidone, paliperidone, ziprasidone, iloperidone; **ziprasidone ≈ D2**; lurasidone and lumateperone none", "Weak (aripiprazole 1B and 1D, brexpiprazole 1B); **cariprazine none**"],
              ["**H1 / muscarinic**", "Strong H1: clozapine, olanzapine, quetiapine, zotepine; strong **muscarinic**: **clozapine, olanzapine, quetiapine**; asenapine some H1, weak muscarinic", "**No anticholinergic** properties; some H1 (e.g., ziprasidone, iloperidone)", "H1 less than D2; **no muscarinic**"],
              ["**α1**", "Clozapine, quetiapine, zotepine **more** than D2; asenapine similar", "All bind; **paliperidone and iloperidone more** than D2", "Some α1 binding"]
            ], note: "Antidepressant-linked properties: Figures 5-34 to 5-40. Side-effect-linked properties: H1/muscarinic (5-41) and α1 (5-42)." },
            { type: "callout", kind: "mnemonic", title: "Three whimsical groups", text: "**The pines (“peens”)**: clozapine, olanzapine, quetiapine, asenapine, zotepine. **Many dones and a rone**: risperidone, paliperidone, ziprasidone, iloperidone, lurasidone, and lumateperone. **Two pips and a rip**: aripiprazole, brexpiprazole, and cariprazine." }
          ]
        },
        {
          id: "s5-first-agents",
          title: "Selected first-generation D2 antagonists",
          pages: "201–204",
          blocks: [
            { type: "table", wide: true, caption: "Figures 5-27 to 5-31", head: ["Agent", "Binding highlights", "Clinical points in the book"], rows: [
              ["[[drug:chlorpromazine|Chlorpromazine]]", "Phenothiazine. Potent **α1, D3, H1** with D2, plus 5HT2A, D4, 5HT2C, 5HT6, 5HT7, muscarinic (M1, M3–M5) and others", "Branded **“Largactil”** for its large number of actions. Sedating (M, α1, H1); used short term orally or as short-acting **IM** for agitation or sudden worsening, often on top of a daily drug"],
              ["[[drug:fluphenazine|Fluphenazine]]", "Phenothiazine; potent **D2, D3, 5HT7, α1**", "More potent and **less sedating** than chlorpromazine; **short- and long-acting** forms; plasma levels may be useful"],
              ["[[drug:haloperidol|Haloperidol]]", "One of the **most potent D2** antagonists; also σ (labelled “omega” in the caption), D3, α1", "Less sedating; short- and long-acting forms; plasma levels may be useful; **little anticholinergic or antihistamine** action"],
              ["[[drug:sulpiride|Sulpiride]]", "D2 antagonist with **D3 antagonist/partial agonist** actions", "Motor effects and prolactin at usual doses; at **lower** doses may be activating with efficacy for **negative symptoms and depression** (D3 a candidate reason); popular outside the US (e.g., UK)"],
              ["[[drug:amisulpride|Amisulpride]]", "Related to sulpiride; D2, **D3**, 5HT2B and weak **5HT7**", "May favor **mesolimbic** over nigrostriatal receptors (fewer motor effects); reported benefit for negative symptoms and depression at **low** doses; marketed outside the US; its active isomer in early US testing"]
            ] }
          ]
        },
        {
          id: "s5-pines",
          title: "The pines",
          pages: "222–234",
          blocks: [
            { type: "h", text: "Clozapine" },
            { type: "list", items: [
              "The **gold standard** for efficacy in schizophrenia when other drugs fail; the **only** antipsychotic documented to **reduce suicide** risk in schizophrenia; a possible niche for **aggression and violence**.",
              "Its special efficacy is unlikely to come from D2 antagonism, since it occupies **fewer D2 receptors** than other drugs: an unknown, **non-D2** mechanism. Most of its many binding properties are **more potent than D2** (Figure 5-43).",
              "Rarely, an **“awakening”** (in Oliver Sacks’s sense): return to near-normal cognitive, interpersonal and vocational functioning, which gives hope that wellness might someday be reached.",
              "Good news: little motor effect, **does not seem to cause TD** and may even treat it, **no prolactin** elevation.",
              "Not first line because of side effects; use is **too low** given how many patients respond inadequately to other drugs. Point-of-care **finger-stick** blood counts reduce one barrier; **plasma levels** help dosing (*The Clozapine Handbook*)."
            ] },
            { type: "table", caption: "Table 5-2: clozapine side effects requiring expert management", head: ["Side effect", "Mechanism or note in the book"], rows: [
              ["**Neutropenia**", "Life-threatening, occasionally fatal; blood counts monitored as long as treated; mechanism **unknown**"],
              ["**Constipation / paralytic ileus**", "Profound **muscarinic** blockade; worse with benztropine or chlorpromazine"],
              ["**Sedation, orthostasis, tachycardia**", "Sedation from potent **M1, H1 and α1** antagonism"],
              ["**Sialorrhea**", "Muscarinic action at higher doses; pro-cholinergic treatment or local **botulinum toxin** for severe cases"],
              ["**Seizures**", "Especially at **high doses**"],
              ["**Weight gain, dyslipidemia, hyperglycemia**", "Greatest weight gain and possibly greatest cardiometabolic risk; partly **H1 + 5HT2C** blockade"],
              ["**Myocarditis, cardiomyopathy, interstitial nephritis**", "Mechanism of myocarditis **unknown**"],
              ["**DRESS, serositis**", "Drug reaction with eosinophilia and systemic symptoms"]
            ] },
            { type: "update", year: "2025", title: "Clozapine REMS removed", text: "The FDA eliminated the clozapine Risk Evaluation and Mitigation Strategy (REMS) in 2025, so pharmacies and prescribers no longer have to report absolute neutrophil counts to a REMS program before dispensing. The FDA still advises monitoring ANC according to the prescribing information.", source: "FDA Drug Safety Communication; REMS eliminated effective June 13, 2025" },
            { type: "h", text: "Olanzapine" },
            { type: "p", text: "A 5HT2A/D2 antagonist widely considered (by experience rather than definitive trials) the **next most effective** after clozapine, with **higher metabolic risk**. Its strongest binding is at **H1 and 5HT2A** (Figure 5-44); **5HT2C** antagonism may aid mood and cognition but, with H1, adds to **weight gain**. Often used at **higher** doses than originally approved, guided by plasma levels. Approved for schizophrenia and maintenance (13+), **IM** agitation in schizophrenia or mania, acute and mixed mania and maintenance (13+), and **with fluoxetine** for bipolar depression and treatment-resistant unipolar depression (5HT2C antagonism of both drugs may contribute). Formulations: orally disintegrating, acute IM, **4-week depot**; inhaled form in late development." },
            { type: "h", text: "Quetiapine" },
            { type: "p", text: "A 5HT2A/D2 antagonist whose net actions combine the parent drug and its active metabolite **norquetiapine**, which adds **NET inhibition** and, with quetiapine, **5HT7, 5HT2C and α2 antagonism** and **5HT1A partial agonism** (Figure 5-45). D2 binding is **not particularly potent**. It is prescribed far more for insomnia, depression, anxiety, **Parkinson’s disease psychosis** or as an adjunct than for psychosis. Virtually **no motor effects or prolactin elevation**, but at least **moderate** metabolic risk." },
            { type: "table", caption: "Figure 5-46: Goldilocks and the three bears", head: ["Dose", "Bear", "Dominant pharmacology", "Use"], rows: [
              ["**50 mg**", "Baby Bear", "**H1 antagonism** only", "Sleep (not approved as a hypnotic; metabolic risk makes it not first line); too little 5HT2C/NET or D2 action for depression or psychosis"],
              ["**300 mg**", "Mama Bear", "**NET inhibition, 5HT1A partial agonism, 5HT2A, α2, 5HT2C and 5HT7 antagonism**, plus H1", "Robust **antidepressant** action (more DA and NE; 5HT release via 5HT7); with SSRIs/SNRIs a triple-monoamine effect; approved for **bipolar depression** and **augmentation** in unipolar depression"],
              ["**800 mg**", "Papa Bear", "Saturates **H1 and 5HT2A**; D2 occupancy above 60% **inconsistent** between doses", "Schizophrenia and maintenance (13+); mania, mixed mania, maintenance (10+)"]
            ] },
            { type: "h", text: "Asenapine and zotepine" },
            { type: "compare", items: [
              { title: "Asenapine", color: "drug", points: ["Structurally related to **mirtazapine**: shares **5HT2A, 5HT2C, H1, α2** antagonism, plus D2 and many 5HT subtypes", "Antidepressant action suggested but only antipsychotic/antimanic **proven**", "**Sublingual** (not absorbed if swallowed); dose limited by oral surface, so usually **twice daily** despite long half-life; **no food or drink for 10 minutes**", "Rapid peak: usable as a **rapid-acting oral PRN** “top-up” instead of an injection", "Oral **hypoesthesia**; sedating at first; moderate weight, metabolic and motor risk; **transdermal** form", "Approved: schizophrenia and maintenance (adults), bipolar mania (10+)"] },
              { title: "Zotepine", color: "hy", points: ["Available in **Japan and Europe**, not the US", "5HT2A/D2 antagonist; dosed **three times daily**", "Possible elevated **seizure** risk", "5HT2C, α1 and 5HT7 antagonist, weak 5HT1A partial agonist and weak **NET** inhibitor: potential antidepressant effects not well established"] }
            ] }
          ]
        },
        {
          id: "s5-dones",
          title: "Many dones and a rone",
          pages: "234–239",
          blocks: [
            { type: "table", wide: true, caption: "Figures 5-49 to 5-54", head: ["Agent", "Pharmacology", "Clinical profile in the book"], rows: [
              ["[[drug:risperidone|Risperidone]]", "The original “done”: 5HT2A/D2 antagonist; α2 antagonism may aid depression but **α1** antagonism can cancel it and causes orthostasis and sedation", "Schizophrenia/maintenance (13+), bipolar mania/maintenance (10+), **irritability in autism** (5–16). Low-dose off-label use in dementia agitation/psychosis is controversial (**black box** warning). Depot every **2 or 4 weeks**; plasma levels of risperidone + paliperidone useful. Fewer motor effects at low doses but **raises prolactin even at low doses**; moderate weight/lipid risk, a particular problem in **children**"],
              ["[[drug:paliperidone|Paliperidone]]", "**9-hydroxy-risperidone**, the active metabolite; shares risperidone’s binding", "**Not hepatically metabolized**: urinary excretion, few interactions. **Sustained-release** oral form allows once-daily dosing (and is easily **underdosed**); smoother levels may give **less sedation, orthostasis and motor effects** (anecdotal). Moderate metabolic risk. Schizophrenia/maintenance (12+). Long-acting injectable is easier to load and dose: **1-month and 3-month**, 6-month in study"],
              ["[[drug:ziprasidone|Ziprasidone]]", "5HT2A/D2 antagonist; also 5HT1B/1D ≈ D2, 5HT2C, NET and SERT", "Little or **no weight gain or metabolic** risk; short acting, more than once daily, **with food**. QTc concerns now seem **exaggerated**: unlike iloperidone, zotepine, sertindole and amisulpride, no **dose-dependent** QTc prolongation, and few drugs raise its levels. **IM** form. Schizophrenia and bipolar mania/maintenance"],
              ["[[drug:iloperidone|Iloperidone]]", "One of the **simplest** profiles, closest to a pure serotonin–dopamine antagonist; **potent α1** antagonism", "**Very low motor** effects (α1 may help), low dyslipidemia, moderate weight gain. Orthostasis and sedation require **slow titration** and usually twice-daily dosing despite an 18- to 33-hour half-life, delaying onset: often a **switch** agent in non-urgent settings. Schizophrenia/maintenance"],
              ["[[drug:lurasidone|Lurasidone]]", "Relatively simple: most potent at **D4** and **5HT7**; high 5HT2A; moderate 5HT1A and α2; minimal **H1 and M1**", "Low weight and metabolic risk; motor effects and sedation lessened by **dosing at night**. Highly effective and popular for **bipolar depression** (10+); schizophrenia/maintenance; often preferred for **children**. **NRX101** combines it with D-cycloserine (NMDA glycine-site antagonist) for acute suicidality and bipolar depression"],
              ["[[drug:lumateperone|Lumateperone]]", "The “rone”: very high **5HT2A** affinity; moderate **D2, D1, α1** and **SERT**; low H1", "Schizophrenia without titration, little or no weight gain or DIP/akathisia. **Widest 5HT2A–D2 separation**: antipsychotic at **low D2 occupancy**. SERT inhibition suggests antidepressant potential; bipolar depression trials promising"]
            ] },
            { type: "h", text: "Lumateperone’s possible presynaptic trick" },
            { type: "flow", title: "Figure 5-55", steps: [
              ["Psychosis", "PET shows **enhanced presynaptic dopamine synthesis and release**", "upd"],
              ["Usual D2 blockers", "Block **presynaptic** D2 autoreceptors too, **disinhibiting** release; overcome only by very full postsynaptic blockade", "drug"],
              ["Lumateperone (preclinical)", "May be a **presynaptic partial agonist** but **postsynaptic antagonist**, reducing dopamine synthesis (tyrosine hydroxylase phosphorylation or glutamate currents)", "clin"],
              ["Result", "Less postsynaptic D2 blockade needed; low motor and metabolic effects; still to be proven", "mech"]
            ] },
            { type: "update", year: "2025", title: "New approvals for paliperidone and lumateperone", text: "A **6-month** paliperidone palmitate long-acting injection (Invega Hafyera) was approved in August 2021. Lumateperone was approved for **bipolar I and II depression** (monotherapy and adjunct to lithium or valproate) in December 2021 and as an **adjunct for major depressive disorder** in November 2025.", source: "FDA, August 30, 2021; December 2021; November 6, 2025" }
          ]
        },
        {
          id: "s5-pips",
          title: "Two pips and a rip",
          pages: "239–240",
          blocks: [
            { type: "compare", items: [
              { title: "Aripiprazole (the original pip)", color: "mech", points: ["**D2/5HT1A partial agonist**; moderate 5HT2A, higher 5HT1A affinity; its most potent binding in the strip is 5HT2B", "Low motor effects, **mostly akathisia**; **lowers prolactin**", "Not sedating (no muscarinic or H1 action); little or no weight gain (but some, including children)", "Schizophrenia/maintenance (13+), IM agitation, bipolar mania/maintenance (10+), autism irritability (5–17), **Tourette syndrome** (6–18)", "**Adjunct to SSRIs/SNRIs in major depression**: by far its main US use; off-label in bipolar depression (5HT1A, 5HT2C, 5HT7 at low doses)", "Oral, liquid, orally disintegrating; **4-week** and **4- to 8-week** long-acting injections (the latter with a day-1 loading injection)"] },
              { title: "Brexpiprazole (second pip)", color: "drug", points: ["Related to aripiprazole but relatively more potent **5HT2A** antagonism, **5HT1A** partial agonism (its most potent action) and **α1** antagonism versus D2", "Theoretically less motor effect and akathisia (some indication, not proven head to head)", "Schizophrenia; **not** indicated for acute mania", "More α1 and **α2** binding than aripiprazole: possible antidepressant mechanisms", "Positive late-stage studies in **agitation in dementia** (α1 may help); preliminary data with **sertraline in PTSD**"] },
              { title: "Cariprazine (the rip)", color: "clin", points: ["D2/5HT1A partial agonist; most potent action **D3 partial agonism** (higher D3 affinity than dopamine itself); also 5HT2B, α1, α2A; weaker 5HT2A and H1", "Low DIP, some **akathisia** (reduced by slow titration)", "Two long-lived active metabolites: a possible weekly to monthly **“oral depot”**", "Schizophrenia and acute mania; highly effective, well tolerated in **bipolar depression** at lower doses; very low weight/metabolic risk", "**Superior to a D2/5HT2A antagonist for negative symptoms**"] }
            ] },
            { type: "callout", kind: "key", title: "Why D3 partial agonism matters", text: "Blocking postsynaptic **limbic D3** receptors may reduce dopamine overactivity in the emotional striatum, while acting at somatodendritic **D3 autoreceptors** in the VTA/mesostriatal hub may **increase prefrontal dopamine**, improving negative, affective and cognitive symptoms. Preclinical data link D3 partial agonism to cognition, mood, emotion, reward and substance use (Chapter 7)." },
            { type: "update", year: "2022", title: "Cariprazine approved for adjunctive treatment of depression", text: "Cariprazine was approved by the FDA as an adjunct to antidepressants for major depressive disorder in adults in December 2022.", source: "AbbVie/FDA, December 16, 2022" }
          ]
        },
        {
          id: "s5-others",
          title: "Pimavanserin and the others",
          pages: "240–241",
          blocks: [
            { type: "p", text: "**[[drug:pimavanserin|Pimavanserin]]** is the **only** known drug with proven antipsychotic efficacy that **does not bind D2**. It is a potent **5HT2A antagonist** (sometimes called inverse agonist) with lesser **5HT2C** antagonism, which might raise dopamine release in depression and negative symptoms. Approved for **psychosis in Parkinson’s disease**; in late-stage testing for dementia-related psychosis; early positive results as an adjunct in major depression and for negative symptoms." },
            { type: "table", head: ["Agent", "Notes in the book"], rows: [
              ["[[drug:sertindole|Sertindole]]", "5HT2A/D2 antagonist, potent α1; approved in parts of Europe, **withdrawn** for cardiac/QTc testing, then **reintroduced** as second line with close cardiac and interaction monitoring"],
              ["[[drug:perospirone|Perospirone]]", "5HT2A/D2 antagonist in **Asia**; 5HT1A partial agonism may help efficacy or tolerability; metabolic effects poorly studied; three times daily; more experience in schizophrenia than mania"],
              ["[[drug:blonanserin|Blonanserin]]", "5HT2A/D2 antagonist in **Asia**, twice daily; like cariprazine, **higher D3 affinity than dopamine**, suggesting use in negative symptoms and bipolar depression (not yet well studied)"]
            ] },
            { type: "update", year: "2022", title: "Pimavanserin beyond Parkinson’s disease psychosis", text: "The FDA did not approve pimavanserin for dementia-related psychosis (April 2021) or for Alzheimer disease psychosis (August 2022).", source: "FDA actions reported April 2021 and August 4, 2022" }
          ]
        }
      ]
    },
    {
      title: "Future treatments",
      sections: [
        {
          id: "s5-future",
          title: "New mechanisms for psychosis",
          pages: "241–243",
          blocks: [
            { type: "table", head: ["Approach", "Agent(s)", "Idea in the book"], rows: [
              ["**5HT2A + σ2 antagonism**", "[[drug:roluperidone|Roluperidone]] (MIN-101)", "Early evidence for **negative symptoms**"],
              ["**Selective D3 antagonism/partial agonism**", "F17464 (plus cariprazine, blonanserin)", "More selective for D3 than D2 or 5HT1A; early efficacy in schizophrenia"],
              ["**TAAR1 agonism**", "[[drug:ulotaront|SEP-363856]]", "Found serendipitously; early antipsychotic efficacy with few side effects; breakthrough status"],
              ["**Muscarinic agonism**", "[[drug:xanomeline|Xanomeline]] + trospium", "**M4** agonism may reduce psychosis, **M1** may aid cognition; peripheral **trospium** blocks M2/M3 side effects"],
              ["**DAO inhibition**", "—", "Boost D-serine and NMDA function (most glutamate agents so far inconsistent)"],
              ["**PDE9/10 inhibition**", "—", "Alters D1/D2 second-messenger signaling, perhaps selectively in hyperactive dopamine neurons"]
            ] },
            { type: "h", text: "Trace amines and TAAR1" },
            { type: "list", items: [
              "Trace amines form when the **tyrosine hydroxylase** or **tryptophan hydroxylase** step is skipped; they exist in trace amounts, are **not stored** in vesicles and are **not released** on firing.",
              "Table 5-3: five principal human trace amines (**β-phenylethylamine, p-tyramine, tryptamine, p-octopamine, p-synephrine**) and six human receptors (**TAAR1**, the main one, plus TAAR2, 5, 6, 8, 9).",
              "TAAR1 sits in monoamine brainstem centers (dorsal raphe, VTA) and projection areas; trace amines are called the **“rheostat”** of dopamine, glutamate and serotonin transmission."
            ] },
            { type: "flow", title: "Figure 5-65: how a TAAR1 agonist tames dopamine without blocking D2", steps: [
              ["Agonist binds TAAR1", "TAAR1 moves to the membrane and **heterodimerizes** with D2", "mech"],
              ["Biased signaling", "D2 signaling shifts **toward Gi** and away from **β-arrestin 2**", "drug"],
              ["Presynaptic", "Amplified Gi: **less dopamine synthesis and release**", "clin"],
              ["Postsynaptic", "Less β-arrestin 2 → less **GSK-3** activation (linked to mania and psychosis)", "hy"]
            ] },
            { type: "p", text: "**Xanomeline**, an M4/M1 central agonist, lowers VTA dopamine firing (positive symptoms) and raises prefrontal dopamine (cognitive, negative, affective symptoms). It also binds several serotonin receptors (Figure 5-67)." },
            { type: "update", year: "2024", title: "Xanomeline–trospium approved; other muscarinic and TAAR1 news", text: "Xanomeline–trospium (Cobenfy) was approved for schizophrenia in adults in September 2024, the first approved drug for schizophrenia whose main mechanism is not D2 blockade. As an add-on to other antipsychotics it did not meet its primary endpoint in the phase III ARISE trial (April 2025). The M4 positive allosteric modulator **emraclidine** failed its phase II EMPOWER trials (November 2024).", source: "FDA, September 26, 2024; Bristol Myers Squibb, April 2025; AbbVie, November 2024" },
            { type: "update", year: "2024", title: "TAAR1 and roluperidone setbacks", text: "SEP-363856 (**ulotaront**) did not separate from placebo in the phase III DIAMOND 1 and 2 trials (July 2023), with a high placebo response cited. **Roluperidone** received an FDA complete response letter for negative symptoms of schizophrenia in February 2024, which asked for an additional positive controlled study.", source: "Sumitomo/Otsuka, July 31, 2023; Minerva Neurosciences, February 27, 2024" }
          ]
        },
        {
          id: "s5-summary",
          title: "Summary",
          pages: "243",
          blocks: [
            { type: "list", items: [
              "The chapter avoids the term “antipsychotics” because the same agents are used more for **unipolar and bipolar depression**; it explores the mechanism of **antipsychotic action** instead.",
              "Drug groups: predominantly **D2 antagonists**, **5HT2A/D2 antagonists**, **D2/5HT1A partial agonists** and **selective 5HT2A antagonists**.",
              "Actions at dopamine and serotonin receptor subtypes explain **therapeutic effects** and **side effects**; many other receptor actions explain further effects, especially **antidepressant** actions and additional side effects.",
              "About **two dozen** marketed or late-stage drugs are profiled, and new mechanisms at **trace amine-associated** and **muscarinic** receptors are emerging."
            ] }
          ]
        },
        {
          id: "s5-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 5’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: the stiff first day", text: "A 19-year-old given IM haloperidol for acute agitation develops sustained neck twisting and upward eye deviation a few hours later.", point: "**Acute dystonia**, typical on first exposure to a D2 blocker without serotonergic or anticholinergic properties. An **IM anticholinergic** nearly always works within about 20 minutes, reflecting the striatal **dopamine–acetylcholine** balance." },
            { type: "case", title: "Clinical vignette: pacing the hall", text: "Two weeks after starting aripiprazole, a patient feels an unbearable inner restlessness and cannot stop shifting from foot to foot.", point: "**Akathisia**, the typical motor effect of D2 partial agonists. Anticholinergics help little; **β-blockers**, **benzodiazepines** or **5HT2A antagonism** are the book’s options." },
            { type: "case", title: "Clinical vignette: the chewing grandmother", text: "A 72-year-old on a conventional D2 antagonist for many years has constant chewing and tongue protrusion. Her psychiatrist considers stopping the drug.", point: "**TD** from upregulated, supersensitive indirect-pathway D2 receptors (“too much go”). Stopping often causes **immediate worsening** and rarely reverses long-standing TD; a **VMAT2 inhibitor** lowers dopamine without blocking D2. The elderly may reach **25% risk in the first year**." },
            { type: "case", title: "Clinical vignette: triglycerides before the scale moves", text: "Two weeks after starting olanzapine, a patient’s fasting triglycerides have doubled although her weight is unchanged.", point: "An early rise in triglycerides signals **insulin resistance** via the hypothetical **“receptor X,”** separate from H1/5HT2C-driven weight gain. Track **BMI, fasting triglycerides, fasting glucose and blood pressure**, and consider a **low-risk** agent." },
            { type: "case", title: "Clinical vignette: one drug, three doses", text: "A resident sees quetiapine prescribed at 50 mg for sleep, 300 mg for bipolar depression and 800 mg for schizophrenia, and asks how one drug can do all three.", point: "**Goldilocks and the three bears**: H1 antagonism alone at 50 mg; NET inhibition (norquetiapine), 5HT1A partial agonism and 5HT2A/2C/α2/5HT7 antagonism at 300 mg; D2 occupancy only at 800 mg." },
            { type: "case", title: "Clinical vignette: breast discharge on risperidone", text: "A woman with schizophrenia stable on risperidone develops galactorrhea and amenorrhea but does not want to change drugs.", point: "Risperidone **raises prolactin even at low doses**. Lactotroph D2 receptors read D2 **partial agonists** as agonists, so adding one can **reverse** hyperprolactinemia." }
          ]
        }
      ]
    }
  ]
});
