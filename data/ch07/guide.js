/* Chapter 7 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 7 (pp. 283–358).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch07", "guide", {
  intro: "The longest chapter in the book turns the circuits and symptoms of Chapter 6 into treatment. It starts by redefining goals (**remission**, not just response) and labels (no more “antidepressants” or “mood stabilizers”: drugs are named for their mechanism). It then works through every major mechanism for **unipolar depression**: the six **SSRIs**, the **SPARI** vilazodone, the **SNRIs**, the **NDRI** bupropion, **agomelatine**, **mirtazapine**, the **SARIs**, **vortioxetine** and the **neuroactive steroids**. Next comes **treatment resistance**: genetic testing, augmentation with **serotonin/dopamine** agents, **ketamine and esketamine**, classic add-ons and popular combinations, and the second-line **TCAs** and **MAOIs**. The bipolar half explains why serotonin/dopamine agents now lead treatment of mania, **bipolar depression** and **mixed features**, and covers **lithium**, the **anticonvulsants** and combination treatment. It ends with future agents: **dextromethorphan** combinations, **dextromethadone**, and **hallucinogen-assisted psychotherapy** with MDMA and psilocybin.",
  objectives: [
    "Define **response, remission, recovery, relapse** and **recurrence**, and explain why remission is the goal and why relapse rises with each treatment step (Figures 7-1 to 7-6).",
    "Explain the **treat/stabilize from above and below** framework that replaces the term “mood stabilizer” (Figures 7-7 and 7-8).",
    "Describe the **delayed cascade** by which SSRIs act (somatodendritic 5HT1A desensitization, disinhibited firing, postsynaptic desensitization) and link each step to onset of efficacy or tolerance to side effects.",
    "Distinguish the six SSRIs by their **secondary properties** and explain how **SPARIs** add 5HT1A partial agonism.",
    "Explain why SNRIs have **“two-and-a-half” actions** (NET inhibition raises dopamine in the prefrontal cortex) and compare the five SNRIs.",
    "Explain bupropion’s **low, slow DAT occupancy**, and the mechanisms of **agomelatine, mirtazapine, trazodone** and **vortioxetine** (5HT2C, α2, 5HT3, 5HT7, 5HT1B/D, MT1/MT2).",
    "Describe how **neuroactive steroids** and **ketamine/esketamine** produce rapid antidepressant effects (GABA-A tonic inhibition; NMDA blockade → glutamate burst → AMPA → mTOR and BDNF/VEGF).",
    "Outline the main **augmentation** strategies and **combinations** for treatment-resistant unipolar depression, and the place of **TCAs** and **MAOIs**.",
    "Use **Table 7-1** to state which serotonin/dopamine agents are approved for mania, maintenance, bipolar depression and adjunctive MDD, and explain the role of **D3 partial agonism**.",
    "Compare **lithium, valproate, carbamazepine** and **lamotrigine** by mechanism, phase of bipolar illness treated (Table 7-3) and key safety issues, and describe standard **bipolar combinations**.",
    "Summarize the future treatments described: **dextromethorphan combinations, dextromethadone, MDMA** and **psilocybin**, and know what has happened since publication."
  ],
  parts: [
    {
      title: "Goals and labels",
      sections: [
        {
          id: "s7-naming",
          title: "So-called “antidepressants” and “mood stabilizers”",
          pages: "283–284",
          blocks: [
            { type: "p", text: "The book drops the old class labels. Many classic “antidepressants” are **not** used for every depression (notably **bipolar depression** and **depression with mixed features**) and are used for many non-mood conditions: anxiety, trauma, OCD and impulsive disorders, eating disorders and pain. Meanwhile, many drugs for psychosis (Chapter 5) are used even more often for unipolar, bipolar and mixed depression and for mania. Following **neuroscience-based nomenclature**, drugs here have **antidepressant action** or **antimanic action**, and are described by their mechanism rather than called “antidepressants” or “mood stabilizers.”" },
            { type: "compare", title: "Two different treatment philosophies", items: [
              { title: "Schizophrenia (Chapter 5)", color: "dx", points: ["**Single** drugs are the rule", "Expected improvement may be only **20–30%** symptom reduction", "Few patients become truly **asymptomatic**"] },
              { title: "Mood disorders (Chapter 7)", color: "mech", points: ["A real chance of **sustained, symptom-free remission**", "A **portfolio** of two or more mechanisms, often more than one drug, for nonresponders", "Hence the need to learn many mechanisms and the rationale for combining them"] }
            ] },
            { type: "callout", kind: "key", title: "Conceptual, not a dosing manual", text: "The chapter explains mechanisms. For doses, side effects and interactions the book refers readers to its companion **Prescriber’s Guide**." }
          ]
        },
        {
          id: "s7-outcomes",
          title: "Response, remission, relapse and recurrence",
          pages: "284–285",
          blocks: [
            { type: "defs", items: [
              ["Response", "At least **50% reduction** in symptoms (Figure 7-1). The patient is better but **not well**. This used to be the goal."],
              ["Remission", "Essentially **all symptoms gone** (Figure 7-2). Called remission for the first several months."],
              ["Recovery", "Remission **sustained** beyond several months. The patient is well, but **not cured**: depression can return."],
              ["Relapse", "Depression returns **before full remission**, or within the first several months after remission (Figure 7-3)."],
              ["Recurrence", "Depression returns **after recovery**."]
            ] },
            { type: "flow", title: "Figure 7-3: phases of treatment", steps: [["Acute", "6–12 weeks: aim for remission", "mech"], ["Continuation", "4–9 months: prevent relapse", "pharm"], ["Maintenance", "1 or more years: prevent recurrence", "clin"]] },
            { type: "callout", kind: "exam", title: "The modern goal", text: "The goal is **complete remission** maintained over time, not response. Remission is usually **not** reached with the first drug, so options must be used aggressively and early." }
          ]
        },
        {
          id: "s7-effectiveness",
          title: "How well do monoamine reuptake blockers work?",
          pages: "285–288",
          blocks: [
            { type: "table", caption: "Figures 7-4 to 7-6: real-world numbers", head: ["Question", "Answer in the book"], rows: [
              ["Remission on the **first** treatment", "About **one-third** of patients"],
              ["Remission after **four** sequential 12-week treatments (about a year)", "Only about **two-thirds** ever remit; the chance falls with each new trial"],
              ["Relapse in **non-remitters**", "From **60%** at 12 months after one treatment to **70%** at 6 months after four"],
              ["Relapse in **remitters**", "From only **33%** at 12 months after one treatment to **70%** at 6 months after four"]
            ] },
            { type: "callout", kind: "exam", title: "Remission protects, until it doesn’t", text: "Remitters relapse less than non-remitters, but the protection of remission **virtually disappears** once **four** treatments were needed to reach it." },
            { type: "compare", title: "Figure 7-5: what responds and what lingers", items: [
              { title: "Most common residual symptoms", color: "case", points: ["**Insomnia**", "**Fatigue**", "Multiple **painful physical** complaints (not in the formal criteria)", "**Problems concentrating** and other cognitive problems", "**Lack of interest** or motivation"] },
              { title: "Least common residual symptoms", color: "mech", points: ["**Depressed mood**", "**Suicidal ideation**", "**Psychomotor retardation**", "Drugs for unipolar depression seem to work better on these"] }
            ] },
            { type: "p", text: "Why chase the last few symptoms? Persistent symptoms may drive **neuroprogression** (Chapter 6: lost synapses, then neurons, then treatment resistance), and relapses come **faster and more often** the more treatments are needed. The idea that aggressive treatment to full remission could **modify the course** of the illness is unproven but intuitively appealing." }
          ]
        },
        {
          id: "s7-moodstab",
          title: "Redefining “mood stabilizers”: a labile label",
          pages: "288–289",
          blocks: [
            { type: "compare", items: [
              { title: "“There is no such thing as a mood stabilizer.”", color: "dx", points: ["The **US FDA** view", "Regulators recognize drugs that treat one or more of **four phases** of bipolar illness"] },
              { title: "“Long live the mood stabilizers.”", color: "drug", points: ["The **prescribers’** view", "The term has meant anything from “acts like lithium” to an anticonvulsant or antipsychotic used in bipolar disorder, to “stabilizes both poles”"] }
            ] },
            { type: "table", caption: "Figures 7-7 and 7-8: four possible therapeutic actions in bipolar disorder", head: ["Action", "Meaning"], rows: [
              "Mania-minded",
              ["**Treat from above**", "Reduce symptoms of **mania**"],
              ["**Stabilize from above**", "Prevent relapse and recurrence of **mania**"],
              "Depression-minded",
              ["**Treat from below**", "Reduce symptoms of **bipolar depression**"],
              ["**Stabilize from below**", "Prevent relapse and recurrence of **depression**"]
            ] },
            { type: "callout", kind: "key", title: "Originally", text: "A mood stabilizer was a drug that **treated mania and prevented its recurrence**: it stabilized the manic pole. Few drugs have all four actions, so the book names drugs by mechanism instead." }
          ]
        }
      ]
    },
    {
      title: "Drugs for unipolar depression",
      sections: [
        {
          id: "s7-ssri",
          title: "SSRIs: what the six share",
          pages: "289–292",
          blocks: [
            { type: "p", text: "Few drug classes have changed a field as much. US prescriptions run at about **7 per second**, over **225 million a year**, and uses extend from unipolar depression to anxiety disorders, **PTSD, OCD, premenstrual dysphoric disorder** and eating disorders. All six principal agents share selective, potent **[[target:sert|SERT]] inhibition**, but the key events may happen at the **somatodendritic** end of the serotonin neuron, not the axon terminal." },
            { type: "steps", title: "Figures 7-11 to 7-15: the delayed cascade", items: [
              ["Depressed state", "Monoamine hypothesis: **low 5HT** at somatodendritic areas and synapses. Receptor hypothesis: **upregulated** 5HT receptors, including presynaptic **5HT1A autoreceptors**."],
              ["SSRI given", "SERT is blocked at once, but 5HT rises first in the **raphe** (somatodendritic area), not at axon terminals. It stimulates **5HT1A autoreceptors**. These immediate actions cannot explain delayed benefit but may explain **early side effects**."],
              ["Autoreceptors desensitize", "Persistent 5HT at somatodendritic 5HT1A autoreceptors signals the nucleus to **downregulate/desensitize** them. The time course matches **onset of therapeutic action**."],
              ["Firing disinhibited", "With the brake off, impulse flow increases and **5HT pours out** at axon terminals throughout the serotonin projections: the hypothesized therapeutic event."],
              ["Postsynaptic desensitization", "Synaptic 5HT then makes **postsynaptic** receptors desensitize too. This matches the development of **tolerance to side effects**."]
            ] },
            { type: "callout", kind: "exam", title: "Two timelines", text: "**Onset of efficacy** tracks desensitization of **somatodendritic 5HT1A autoreceptors**. **Tolerance to side effects** tracks desensitization of **postsynaptic** 5HT receptors. Side effects come from acute 5HT action at **unwanted receptors in unwanted pathways**." }
          ]
        },
        {
          id: "s7-ssri-agents",
          title: "The not-so-selective SSRIs",
          pages: "292–296",
          blocks: [
            { type: "p", text: "Large trials rarely show differences between SSRIs, but individual patients often respond to or tolerate one and not another. Each SSRI has **secondary properties** not shared by the others (Figures 7-16 to 7-21). Whether these explain individual differences is unproven, but they give a rational basis for trying **more than one** SSRI instead of assuming they are all the same." },
            { type: "table", wide: true, caption: "Figures 7-16 to 7-21: the six SSRIs", head: ["SSRI", "Secondary properties", "Clinical consequences in the book"], rows: [
              ["[[drug:fluoxetine|Fluoxetine]]", "**5HT2C antagonism**; weak **NET** inhibition (only at very high doses)", "**Activating** from the first dose (energy, less fatigue, better concentration): suits reduced positive affect, hypersomnia, psychomotor retardation, apathy. May overactivate agitated, anxious or insomniac patients. Only SSRI approved for **bulimia**. Combined with **olanzapine**. Half-life **2–3 days**, active metabolite about **2 weeks**: fewer withdrawal reactions but slow washout (e.g., before an MAOI). **Once-weekly** form."],
              ["[[drug:sertraline|Sertraline]]", "Weak **DAT** inhibition (controversial); **σ1** binding", "Mild, desirable activation in **atypical depression**; may overactivate **panic** patients (titrate slowly). σ1 may aid **psychotic/delusional depression** and anxiety. Combined with bupropion (“**Well-oft**”)."],
              ["[[drug:paroxetine|Paroxetine]]", "Mild **M1** anticholinergic; weak **NET** inhibition; inhibits **nitric oxide synthase**", "**Calming**, even sedating early. NOS inhibition may add **sexual dysfunction** (especially men). Notorious **withdrawal** (akathisia, restlessness, GI upset, dizziness, tingling), partly **anticholinergic rebound**. Controlled-release form."],
              ["[[drug:fluvoxamine|Fluvoxamine]]", "**σ1** binding, more potent than sertraline’s; possibly a σ1 **agonist**", "Never approved for depression in the **US**; seen as an **OCD** drug there. Anxiolytic; helpful in psychotic depression. Controlled-release form allows **once-daily** dosing with impressive remission in OCD and social anxiety disorder."],
              ["[[drug:citalopram|Citalopram]]", "Racemic **R + S**; the R enantiomer has weak **antihistamine** action and may **interfere** with S at SERT", "Well tolerated, good in the **elderly**, but inconsistent at the lowest dose; dose increases are limited by **QTc prolongation**."],
              ["[[drug:escitalopram|Escitalopram]]", "Pure **S** enantiomer", "The **“quintessential SSRI”**: almost all action explained by SERT inhibition; no antihistamine action or high-dose QTc restriction; lowest dose predictably effective; perhaps the **best tolerated** with the **fewest CYP450 interactions**."]
            ] },
            { type: "callout", kind: "mnemonic", title: "The odd one out in each", text: "Fluoxetine **2C**, sertraline **DAT + σ**, paroxetine **M1 + NET + NOS**, fluvoxamine **σ**, citalopram **R enantiomer**, escitalopram **nothing extra**." },
            { type: "p", text: "Other drugs with **5HT2C antagonism** include trazodone, mirtazapine, agomelatine, some TCAs, and the 5HT2A/D2 antagonists **quetiapine** and **olanzapine**. Blocking 5HT2C **disinhibits NE and DA** release (Figure 6-24B)." }
          ]
        },
        {
          id: "s7-spari",
          title: "SPARIs: vilazodone",
          pages: "296–298",
          blocks: [
            { type: "p", text: "[[drug:vilazodone|Vilazodone]] is a **serotonin partial agonist reuptake inhibitor (SPARI)**: SERT inhibition plus **[[target:5ht1a|5HT1A]] partial agonism** in one molecule. Clinicians have long boosted SSRIs/SNRIs with 5HT1A partial agonists ([[drug:buspirone|buspirone]], [[drug:aripiprazole|aripiprazole]], [[drug:brexpiprazole|brexpiprazole]], [[drug:cariprazine|cariprazine]], or [[drug:quetiapine|quetiapine]]); one drug avoids interactions and unwanted off-target actions." },
            { type: "steps", title: "Figures 7-23 to 7-27: the SPARI sequence", items: [
              ["Immediately", "About **half of SERTs** and **half of 5HT1A** receptors are occupied."],
              ["Faster 5HT1A action", "The partial agonist acts as “**artificial serotonin**” at somatodendritic autoreceptors at once, adding to the 5HT rise from SERT blockade: faster, more robust **autoreceptor desensitization**."],
              ["Disinhibition", "Firing and **synaptic 5HT** rise faster and more robustly than with an SSRI alone (shown in animal models)."],
              ["Postsynaptic 5HT1A", "Partial agonism there is **immediate** and differs from serotonin’s delayed full agonism; downstream **dopamine release** may add antidepressant and pro-cognitive effects."]
            ] },
            { type: "callout", kind: "pearl", title: "Tolerability", text: "Downstream **DA release** from 5HT1A partial agonism may explain the observed **reduced sexual dysfunction** and relative **lack of weight gain** with vilazodone." },
            { type: "update", year: "2023", title: "A selective 5HT1A agonist for depression", text: "Extended-release **gepirone** (Exxua), a buspirone analogue described as the first oral selective 5HT1A receptor agonist for major depressive disorder, was approved by the FDA in September 2023 after several earlier rejections. Its labeling does not list sexual dysfunction or weight gain as adverse reactions; dizziness and nausea were most common.", source: "FDA approval announced by Fabre-Kramer, September 2023 (Psychiatric Times, September 29, 2023)" }
          ]
        },
        {
          id: "s7-snri",
          title: "SNRIs: two-and-a-half actions",
          pages: "298–301",
          blocks: [
            { type: "p", text: "SNRIs add varying degrees of **[[target:net|NET]] inhibition** to SSRI-like SERT inhibition, widening reach to the norepinephrine system. A hint that dual action adds efficacy: **venlafaxine** often works better as the dose rises and recruits NET (the “noradrenergic boost”). Whether SNRIs beat SSRIs for remission or resistance is debated, but one area is clear: SNRIs, **not SSRIs**, have established efficacy for **pain**." },
            { type: "flow", title: "Figure 7-33: why NET inhibition raises dopamine in the prefrontal cortex", steps: [
              ["Few DATs in PFC", "Released DA diffuses widely; its diffusion radius is larger than NE’s", "mech"],
              ["DA cleared by NET or COMT", "NET has **higher affinity for DA than NE**, so it pumps DA into NE terminals", "pharm"],
              ["Block NET", "Both **NE and DA** rise in the PFC (not in other DA areas)", "drug"]
            ] },
            { type: "callout", kind: "exam", title: "“Two-and-a-half actions”", text: "SNRIs boost **5HT throughout the brain**, **NE throughout the brain**, and **DA only in the prefrontal cortex**. They are not true triple-action drugs because they do not block **DAT** at clinical doses." },
            { type: "callout", kind: "key", title: "Occupancy differs by transporter", text: "SSRIs need roughly **80–90% SERT** occupancy. SNRIs at those doses occupy far fewer NETs, yet therapeutic and NE-mediated side effects appear with perhaps as little as **50% NET** occupancy." }
          ]
        },
        {
          id: "s7-snri-agents",
          title: "Five SNRIs compared",
          pages: "301–303",
          blocks: [
            { type: "table", wide: true, caption: "Figures 7-28 to 7-31", head: ["SNRI", "SERT vs NET", "Points to remember"], rows: [
              ["[[drug:venlafaxine|Venlafaxine]]", "SERT at **low** doses; NET recruited as **dose increases**", "No significant other receptor actions. NET adds **sweating** and **raised blood pressure**. The **XR** form reduces nausea and allows once-daily dosing; IR is barely used. Can cause bothersome **withdrawal**. Converted by **CYP2D6** to desvenlafaxine; plasma venlafaxine is normally about **half** the desvenlafaxine level, but 2D6 inhibitors or **poor metabolizers** shift the ratio toward parent drug and less NET inhibition, so NET effect is **unpredictable**. Also approved for several anxiety disorders."],
              ["[[drug:desvenlafaxine|Desvenlafaxine]]", "More NET relative to SERT than venlafaxine, but still more potent at SERT", "Developed as a separate drug: **more consistent** NET inhibition across patients with less titration."],
              ["[[drug:duloxetine|Duloxetine]]", "**Slightly** more SERT than NET", "Relieves depression without pain **and pain without depression**: diabetic peripheral **neuropathic pain**, **fibromyalgia**, chronic **musculoskeletal** pain (osteoarthritis, low back). Treats **painful physical symptoms** of depression and **cognitive symptoms** of geriatric depression. Start **twice daily**; once daily after tolerance. Less **hypertension** and milder **withdrawal** than venlafaxine."],
              ["[[drug:milnacipran|Milnacipran]]", "More potent at **NET than SERT**", "First SNRI in Japan and much of Europe. Approved for **depression in Europe** and for **fibromyalgia in the US** (the reverse is not approved). May help **“fibro-fog”** and other cognitive symptoms; **energizing**. More **sweating** and **urinary hesitancy** (an **α1 antagonist** helps). **Twice daily** (short half-life). Racemic: S (levo) is the active enantiomer."],
              ["[[drug:levomilnacipran|Levomilnacipran]]", "**NET > SERT**", "The S enantiomer, developed for **MDD** in the US; may target **fatigue and low energy**; controlled-release, **once daily**."]
            ] },
            { type: "callout", kind: "pearl", title: "Pain is a real symptom of depression", text: "Duloxetine’s results showed that **painful physical (somatic) symptoms** are legitimate symptoms of depression, not just emotional pain, and a leading **residual** symptom. **NET inhibition** seems critical for relieving them." }
          ]
        },
        {
          id: "s7-ndri",
          title: "NDRIs: bupropion",
          pages: "303–306",
          blocks: [
            { type: "p", text: "[[drug:bupropion|Bupropion]] itself only weakly inhibits **[[target:dat|DAT]]** and **[[target:net|NET]]**, yet its effects seem stronger than that. It is partly a **prodrug**: several metabolites are more potent NET inhibitors, equally potent DAT inhibitors and **concentrated in brain**; the most potent is the **+ enantiomer of 6-hydroxy-bupropion (radafaxine)**." },
            { type: "compare", title: "How much transporter occupancy is enough?", items: [
              { title: "What PET shows", color: "mech", points: ["Only **10–15%**, perhaps at most **20–30%**, of striatal DATs occupied at therapeutic doses", "NET occupancy likely similar", "SSRIs need **80–90%** SERT occupancy; NE effects may need only about **50%** NET"] },
              { title: "Too much, too fast", color: "case", points: ["**≥ 50% DAT** occupancy reached **rapidly and briefly** → euphoria and reinforcement (cocaine)", "≥ 50% reached **slowly and long-lasting** (controlled release) → less abusable, useful for **ADHD**", "Bupropion: **low, slow, long** occupancy, enough to reduce **nicotine craving** but not to be abused; not scheduled"] }
            ] },
            { type: "list", title: "Clinical profile", items: [
              "Formulations: IR **three times daily** → **SR** twice daily → **XL** once daily, which reduced **seizures** at peak plasma levels and improved adherence; IR is all but abandoned.",
              "Generally **activating**, even stimulating.",
              "**No significant sexual dysfunction** (no serotonergic component); useful when SSRIs are not tolerated or do not work.",
              "Targets the **“dopamine deficiency syndrome”** of **reduced positive affect**: loss of happiness, joy, interest, pleasure, energy, enthusiasm, alertness and self-confidence.",
              "Switching to or **adding** bupropion helps residual or SSRI-induced reduced positive affect; SSRI/SNRI + bupropion covers reduced positive **and** increased negative affect.",
              "Proven for **smoking cessation** (Chapter 13).",
              "With **naltrexone**: approved for **obesity**. With **dextromethorphan**: in late-stage trials for depression and Alzheimer agitation (see future treatments)."
            ] }
          ]
        },
        {
          id: "s7-agomelatine",
          title: "Agomelatine: melatonin and 5HT2C",
          pages: "306–308",
          blocks: [
            { type: "p", text: "[[drug:agomelatine|Agomelatine]] is approved for depression in many countries **outside the US**. It is an **agonist at MT1 and MT2** melatonin receptors and an **antagonist at 5HT2C** (and 5HT2B) receptors. The so-called **MT3** receptor is actually an enzyme, **NRH–quinone oxidoreductase 2**, not thought to be involved in sleep." },
            { type: "compare", items: [
              { title: "5HT2C antagonism (Figure 7-38)", color: "mech", points: ["5HT2C receptors on **GABA interneurons** in the brainstem normally inhibit NE and DA release to the PFC", "Blocking them **disinhibits NE and DA** in the prefrontal cortex"] },
              { title: "Circadian resynchronization (Figure 7-39)", color: "pharm", points: ["MT1/MT2 and 5HT2C receptors in the **SCN** rise at **night** and fall by day", "Depression: rhythms out of sync, **low night melatonin**, **phase delay**", "Acting as “**substitute melatonin**” plus blocking SCN 5HT2C may **reset** rhythms and reverse the phase delay"] }
            ] }
          ]
        },
        {
          id: "s7-mirtazapine",
          title: "Mirtazapine and α2 antagonism",
          pages: "308–311",
          blocks: [
            { type: "p", text: "Unlike almost every other drug for unipolar depression, [[drug:mirtazapine|mirtazapine]] blocks **no monoamine transporter**. It has five main actions: antagonism of **α2, 5HT2A, 5HT2C, 5HT3** and **H1** receptors (sometimes called a NaSSA, noradrenergic and specific serotonergic antidepressant). Two other α2 antagonists are sold outside the US: [[drug:mianserin|mianserin]] (which adds potent **α1** antagonism, so it mainly boosts NE) and **setiptiline** (Japan)." },
            { type: "table", caption: "What each of mirtazapine’s actions does", head: ["Action", "Effect"], rows: [
              ["**H1** antagonism", "Sedation and weight gain"],
              ["**5HT2A** antagonism", "Downstream **DA release** in the PFC; improves sleep, especially **slow-wave sleep**"],
              ["**5HT2C** antagonism", "Disinhibits **NE and DA** release in the PFC"],
              ["**α2** antagonism", "Cuts the brake on both **NE** and **5HT** release"],
              ["**5HT3** antagonism", "Disinhibits **glutamate**, **ACh** and **NE** release; may also protect against serotonin-induced nausea"]
            ] },
            { type: "steps", title: "Figure 7-41: α2 antagonism cuts two brake cables", items: [
              ["NE brake on NE", "NE turns off its own release via presynaptic **α2 autoreceptors**."],
              ["NE brake on 5HT", "NE also inhibits serotonin release via **α2 heteroreceptors** on serotonin neurons (5HT also brakes itself via **5HT1B/D** autoreceptors)."],
              ["Block α2", "Both **NE and 5HT** release are disinhibited: a dual 5HT–NE action like an SNRI’s, by a completely different mechanism."]
            ] },
            { type: "callout", kind: "pearl", title: "“California rocket fuel”", text: "Transporter blockade and α2 antagonism are **synergistic**, so mirtazapine is often added to an **SNRI** when the SNRI alone fails, a combination nicknamed **California rocket fuel**." },
            { type: "compare", title: "Two homes for 5HT3 receptors", items: [
              { title: "Periphery and brainstem", color: "case", points: ["**Chemoreceptor trigger zone**: nausea and vomiting (e.g., chemotherapy)", "**Gut**: nausea, vomiting, diarrhea/motility, including from SSRI/SNRI-raised peripheral 5HT", "Blocking them protects against these"] },
              { title: "Brain (Figures 7-42, 7-43)", color: "mech", points: ["On **GABA interneurons**; always **excitatory**", "5HT → more GABA → less glutamate, ACh and NE", "5HT3 antagonism **disinhibits** them: antidepressant action (mirtazapine, **vortioxetine**)"] }
            ] }
          ]
        },
        {
          id: "s7-sari",
          title: "SARIs: trazodone, one drug at two doses",
          pages: "311–315",
          blocks: [
            { type: "p", text: "[[drug:trazodone|Trazodone]] is the prototype **serotonin antagonist/reuptake inhibitor (SARI)**: it blocks **5HT2A** and **5HT2C** receptors and **SERT**. [[drug:nefazodone|Nefazodone]] is another SARI (robust 5HT2A, weaker 5HT2C and SERT, plus α1 and NET in its icon) now rarely used because of rare **liver toxicity**. Like quetiapine, trazodone behaves like different drugs at different doses and delivery rates." },
            { type: "table", caption: "Figure 7-45: trazodone’s affinities, highest to lowest", head: ["Affinity tier", "Targets"], rows: [
              ["Highest", "**5HT2A**, **α1B**, **5HT1D**, 5HT2B"],
              ["High", "**5HT1A** (agonist), **α1A**, **H1**"],
              ["Moderate", "α2C, **SERT**, **5HT2C**, 5HT7, α2B"],
              ["Low", "D3, sodium channel, D2, 5HT1B, D1, σ"]
            ], note: "Low doses act mainly through the highest-affinity targets; higher doses recruit the rest." },
            { type: "compare", title: "Figures 7-46 and 7-47", items: [
              { title: "Low dose (25–150 mg): hypnotic", color: "pharm", points: ["Does **not** saturate SERT", "Blocks **5HT2A** (more slow-wave sleep), **α1** and **H1** (reduce monoamine arousal)", "Best delivered as **immediate release**: fast peak, gone by morning", "Popular add-on for **residual insomnia** after SSRIs/SNRIs, which may also improve energy and mood and raise remission rates"] },
              { title: "High dose (150–600 mg): antidepressant", color: "mech", points: ["Saturates **SERT**; adds 5HT1D, 5HT2C, 5HT7 and α2 antagonism and 5HT1A agonism", "IR needed several daily doses with **daytime peak sedation**", "**Once-nightly XR** (e.g., 300 mg) blunts peaks: levels never fall below antidepressant range, and its peak equals that of 100 mg IR", "No sexual dysfunction or weight gain"] }
            ] },
            { type: "callout", kind: "exam", title: "Figure 7-48: SSRI versus SARI", text: "SSRIs raise 5HT at **all** receptors: 5HT1A gives antidepressant action, but 5HT2A and 5HT2C stimulation causes **sexual dysfunction, insomnia and activation/anxiety**. A SARI raises 5HT at 5HT1A while **blocking 5HT2A and 5HT2C**, so it lacks those side effects and can even improve sleep and anxiety, with rapid first-dose hypnotic benefit." }
          ]
        },
        {
          id: "s7-vortioxetine",
          title: "Vortioxetine: multimodal and pro-cognitive",
          pages: "315–320",
          blocks: [
            { type: "p", text: "[[drug:vortioxetine|Vortioxetine]] inhibits **SERT**, is an **antagonist at 5HT3 and 5HT7**, an **agonist at 5HT1A**, and a weak **partial agonist/antagonist at 5HT1B/D** receptors (Figure 7-49). The result is downstream release of many neurotransmitters and an antidepressant effect with robust **pro-cognitive** action, especially on **processing speed**." },
            { type: "table", caption: "The Fab Four of cognition (Figure 7-50)", head: ["Beatle", "Cognitive domain"], rows: [
              ["John (wanted the attention)", "**Attention** / concentration"],
              ["Paul (wrote the songs)", "**Executive function** / problem solving"],
              ["George (quiet culture carrier)", "**Memory** (short-term, long-term, verbal…)"],
              ["Ringo (the drummer)", "**Processing speed** / pace"]
            ], note: "If one member is out of sync, the music falls apart. The **DSST** (digit symbol substitution test) samples all four but mostly **processing speed**; vortioxetine beats other antidepressants on it." },
            { type: "table", wide: true, caption: "Figures 7-51 to 7-54: how each action releases neurotransmitters", head: ["Action", "Mechanism", "Result"], rows: [
              ["SERT inhibition + **5HT1A agonism**", "As for SSRIs and SPARIs", "More 5HT; downstream **DA, ACh, NE**"],
              ["SERT inhibition + **5HT1B/D** presynaptic antagonism", "Removes the autoreceptor brake that blunts 5HT build-up after SERT blockade", "**Even more 5HT**"],
              ["**5HT1B** heteroreceptor partial agonism/antagonism", "5HT1B on ACh, HA, DA and NE terminals in the PFC normally inhibits their release", "More **ACh, HA, DA, NE**"],
              ["**5HT3** antagonism", "Removes GABA inhibition (one of its **most potent** actions)", "More **ACh, NE**, glutamate and DA"],
              ["**5HT7** antagonism", "5HT7 on raphe GABA neurons inhibits 5HT release; in PFC GABA interneurons it restrains glutamate", "More **5HT** and **glutamate** with downstream monoamines"]
            ] },
            { type: "callout", kind: "key", title: "Treat cognition early", text: "Cognitive symptoms (Chapter 6) may reflect potentially reversible **synapse loss**. Recognize and treat them soon after they emerge, before neurons are lost and changes become irreversible. Other drugs with **5HT7 antagonism** that may help depression and cognition: trazodone, quetiapine, brexpiprazole, aripiprazole, lurasidone." }
          ]
        },
        {
          id: "s7-neurosteroids",
          title: "Neuroactive steroids: brexanolone and SAGE-217",
          pages: "320–323",
          blocks: [
            { type: "p", text: "[[drug:brexanolone|Brexanolone]] is a **cyclodextrin-based IV** formulation of the natural neurosteroid [[drug:allopregnanolone|allopregnanolone]], given as a **60-hour infusion** for **postpartum depression**, with rapid and sustained benefit." },
            { type: "flow", title: "The postpartum hypothesis", steps: [
              ["Pregnancy", "High circulating (presumably brain) allopregnanolone", "found"],
              ["Delivery", "Precipitous fall in neuroactive steroids", "case"],
              ["Vulnerable women", "Sudden major depressive episode", "dx"],
              ["60-hour infusion", "Restores levels and gives time to adapt to lower levels without relapse", "drug"]
            ] },
            { type: "compare", title: "Figure 7-56: where neuroactive steroids act", items: [
              { title: "Benzodiazepine-sensitive GABA-A", color: "pharm", points: ["Targeted by both benzodiazepines and neuroactive steroids", "Synaptic, **phasic** inhibition", "Benzodiazepines have **no** antidepressant action"] },
              { title: "Benzodiazepine-insensitive GABA-A", color: "mech", points: ["Targeted by neuroactive steroids, **not** benzodiazepines", "**Extrasynaptic**, **tonic** inhibition", "Thought to be the **primary antidepressant mechanism**; how it works is unknown"] }
            ] },
            { type: "list", title: "Clues that boosting GABA could help depression", items: ["**Low GABA** in plasma, spinal fluid and brain of depressed patients", "**Fewer GABA interneurons** in depressed brains", "Deficient mRNA for benzodiazepine-insensitive GABA-A **subunits** in depressed patients who died by suicide", "General anesthetics (propofol, etomidate, alphaxolone, alfadalone) bind the same site at much higher doses"] },
            { type: "p", text: "**SAGE-217** ([[drug:zuranolone|zuranolone]]) is a synthetic **oral** allopregnanolone analogue that was in testing as a rapid-onset treatment for major depressive disorder, with promising preliminary results." },
            { type: "update", year: "2023", title: "SAGE-217 became zuranolone", text: "**Zuranolone** (Zurzuvae) was approved in August 2023 as the first **oral** treatment for postpartum depression, taken once daily for 14 days. The application for major depressive disorder received a complete response letter.", source: "FDA, August 4, 2023" },
            { type: "update", year: "2025", title: "Brexanolone withdrawn from the market", text: "At the request of Sage Therapeutics, which said the product was no longer marketed, the FDA withdrew approval of **Zulresso** (brexanolone) injection effective April 14, 2025.", source: "Federal Register, March 14, 2025" }
          ]
        }
      ]
    },
    {
      title: "Treatment-resistant depression",
      sections: [
        {
          id: "s7-genetics",
          title: "Choosing treatment with genetic testing",
          pages: "323–325",
          blocks: [
            { type: "p", text: "Genetic testing may help choose a drug, especially after several first-line treatments have failed or not been tolerated. Laboratories offer variants of genes that regulate **drug metabolism** (pharmacokinetic genes, such as several **CYP450** enzymes) and genes that may regulate **efficacy and side effects** (pharmacodynamic genes)." },
            { type: "compare", items: [
              { title: "Genotyping", color: "mech", points: ["CYP450 variants predict **high levels** (side effects) or **low levels** (lack of efficacy)"] },
              { title: "Phenotyping", color: "pharm", points: ["The **actual plasma drug level**", "Together with genotype, may explain side effects or nonresponse"] }
            ] },
            { type: "callout", kind: "key", title: "Weight of the evidence, not a verdict", text: "Responses are not all-or-none. Genetics will shift the **likelihood** of response or side effects but will not tell the clinician with certainty which drug to use. With past treatment history, it **enriches** the decision (“weight of the evidence” or “equipoise”) and pushes prescribers toward neurobiologically based hypotheses rather than random selection." }
          ]
        },
        {
          id: "s7-augment-sda",
          title: "Augmenting with serotonin/dopamine agents",
          pages: "325–328",
          blocks: [
            { type: "p", text: "Because returns diminish with each new monotherapy, combinations are used earlier. Serotonin/dopamine agents developed for psychosis are now among the **most common add-ons** to SSRIs/SNRIs after one or more inadequate trials." },
            { type: "table", wide: true, caption: "The main augmenting agents", head: ["Agent", "Why it may work for depression", "Drawbacks and notes"], rows: [
              ["[[drug:olanzapine|Olanzapine]] + [[drug:fluoxetine|fluoxetine]]", "5HT2A antagonism (olanzapine) plus SERT inhibition and **combined 5HT2C antagonism** from both drugs: effectively a potent **SERT/5HT2C inhibitor**. D2 antagonism explains approval in schizophrenia and mania.", "Highly efficacious for treatment-resistant unipolar and for bipolar depression, but often unacceptable **weight gain** and metabolic effects."],
              ["[[drug:quetiapine|Quetiapine]]", "Quetiapine and **norquetiapine** at **5HT2C** and **NET**, plus 5HT2A, 5HT7 and α2A antagonism and 5HT1A agonism: a powerful theoretical synergy.", "Much **sedation**, moderate weight gain and metabolic effects. Also approved for bipolar depression."],
              ["[[drug:aripiprazole|Aripiprazole]]", "D2 partial agonism for psychosis/mania; prominent **5HT1A partial agonism** (plus D3, 5HT7, 5HT2C, α2) for depression.", "One of the **most prescribed** augmenters in the US; little weight gain; some **akathisia**. Not approved for bipolar depression."],
              ["[[drug:brexpiprazole|Brexpiprazole]]", "Stronger **5HT2A, 5HT1A and α1** binding than aripiprazole, plus more potent α2, 5HT7 and D3 actions.", "Possibly **less akathisia** (not proven head to head). Not approved for bipolar depression."],
              ["[[drug:cariprazine|Cariprazine]]", "D3/D2/5HT1A partial agonist; 5HT2A, α1, α2 antagonist.", "Approved for mania and bipolar depression; adjunctive MDD evidence (see bipolar section)."]
            ] },
            { type: "flow", title: "Figure 7-58: α1 antagonism works like 5HT2A antagonism", steps: [
              ["α1 and 5HT2A", "Both **excitatory**, postsynaptic and **colocalized** on the same pyramidal neurons", "mech"],
              ["Block either", "Less glutamate output to brainstem dopamine centers", "pharm"],
              ["Substantia nigra", "Disinhibited nigrostriatal DA: **less drug-induced parkinsonism**", "drug"],
              ["VTA", "Disinhibited mesocortical DA: **antidepressant**, better affective and cognitive symptoms", "clin"]
            ], note: "Blocking both receptors is more powerful than either alone. The lowest DIP rates are with **brexpiprazole, quetiapine, clozapine and iloperidone**; the α1 + 5HT2A synergy may contribute to antidepressant action of brexpiprazole, quetiapine and trazodone, and to brexpiprazole’s evidence in **Alzheimer agitation** and **PTSD** (with sertraline)." },
            { type: "callout", kind: "caution", title: "Sedation versus α1 alone", text: "α1 antagonism contributes to **sedation** when combined with muscarinic and histamine blockade in the arousal system (Chapter 5); **without** those actions, α1 antagonism in the PFC may instead aid antidepressant effects and reduce motor side effects." },
            { type: "update", year: "2022", title: "Cariprazine approved as an adjunct for MDD", text: "Cariprazine was approved as an adjunct to antidepressants for major depressive disorder in adults in December 2022.", source: "AbbVie/FDA, December 16, 2022" },
            { type: "update", year: "2025", title: "Lumateperone approved as an adjunct for MDD", text: "**Lumateperone** (Chapter 5) was approved as an adjunct to antidepressants for major depressive disorder in November 2025, adding to its 2021 bipolar depression approvals.", source: "FDA, November 6, 2025" },
            { type: "update", year: "2025", title: "Brexpiprazole: Alzheimer agitation yes, PTSD no", text: "Brexpiprazole was approved for **agitation associated with dementia due to Alzheimer disease** in May 2023. The application for brexpiprazole with sertraline in adults with **PTSD** received a complete response letter in September 2025.", source: "FDA, May 10, 2023; Otsuka/Lundbeck, September 2025" }
          ]
        },
        {
          id: "s7-ketamine",
          title: "Ketamine and esketamine",
          pages: "328–332",
          blocks: [
            { type: "p", text: "Subanesthetic IV infusions of [[drug:ketamine|ketamine]] can improve depression **almost immediately**, sometimes with specific **anti-suicidal** effects, in patients who failed many monoamine drugs (“nonmonoaminergic” depressions). Ketamine is an approved anesthetic used **off-label**; it tends to be given after **multiple** failures, whereas serotonin/dopamine augmenters are used after one or two. The effect usually **fades over a few days**, but can be re-triggered by repeated infusions or extended by monoamine drugs." },
            { type: "p", text: "Racemic ketamine (R + S) blocks the **[[target:nmda|NMDA]]** receptor at the open-channel **PCP site** (the leading hypothesis) and binds **σ1**. Weak NET, μ-opioid and SERT actions are proposed but disputed, including a possible role for **μ-opioid** action in its antidepressant effect." },
            { type: "flow", title: "Figures 7-60 to 7-62: from NMDA blockade to new synapses", steps: [
              ["Block NMDA on GABA interneurons", "The interneuron goes quiet", "mech"],
              ["Disinhibit pyramidal neurons", "A **burst of glutamate** downstream", "pharm"],
              ["Stimulate AMPA receptors", "While NMDA receptors are still blocked", "drug"],
              ["Hypothesis 1", "**ERK/AKT → mTOR** → synaptic proteins → more **dendritic spines**", "clin"],
              ["Hypothesis 2", "**VSCCs** open → calcium → **BDNF** and **VEGF** release → TRKB and FLK1 → spines", "found"]
            ], vertical: true, note: "Spine growth appears within minutes to hours in animals: ketamine may reverse depression-related synaptic atrophy almost immediately. Monoamine drugs restore growth factors only after weeks." },
            { type: "callout", kind: "caution", title: "Ketamine and psychosis", text: "At high doses and acute administration ketamine produces a **schizophrenia-like** syndrome (Chapter 4). Infused over time at **subanesthetic** doses for depression, it does not induce psychosis." },
            { type: "p", text: "[[drug:esketamine|Esketamine]], the **S enantiomer**, is approved as an **intranasal** spray for treatment-resistant depression, avoiding long IV infusions. After **twice-weekly** initiation it is given weekly or every other week as an **augmenting** agent. A study of up to a year of esketamine plus a switch to a new oral monoamine drug showed sustained improvement and acceptable safety." },
            { type: "update", year: "2025", title: "Esketamine as monotherapy", text: "Esketamine nasal spray, approved in 2019 as add-on treatment, was approved in January 2025 as **monotherapy** for treatment-resistant depression.", source: "FDA, January 2025" }
          ]
        },
        {
          id: "s7-other-augment",
          title: "Lithium, buspirone and thyroid hormone",
          pages: "332–333",
          blocks: [
            { type: "p", text: "Some add-ons have little antidepressant action alone but can improve monoamine drugs. **None** of these strategies is specifically approved." },
            { type: "table", head: ["Add-on", "Rationale", "Status in the book"], rows: [
              ["[[drug:lithium|Lithium]]", "Classically added to **TCAs** and other reuptake inhibitors", "Given at **lower doses** than for mania; has **fallen out of favor**"],
              ["[[drug:buspirone|Buspirone]]", "**5HT1A partial agonist**: SSRI/SNRI + buspirone resembles vilazodone or vortioxetine", "5HT1A augmentation is favored, but **other agents** with 5HT1A action are now used more often than buspirone"],
              ["[[drug:thyroid-hormone|Thyroid hormones]]", "Bind **nuclear receptors** to form ligand-activated transcription factors; may boost monoamines via effects on neuronal organization, arborization and synapses; used to boost efficacy or **speed onset**", "Also **fallen out of favor** for unipolar and bipolar depression"]
            ] }
          ]
        },
        {
          id: "s7-combos",
          title: "Combining two drugs for depression",
          pages: "333–335",
          blocks: [
            { type: "p", text: "Combining two drugs each approved for unipolar depression to create pharmacological **synergy** is very popular and often effective, though not specifically approved." },
            { type: "table", wide: true, caption: "Figures 7-64 to 7-66", head: ["Combination", "5HT", "NE", "DA", "Notes"], rows: [
              ["**SSRI + NDRI**", "Single boost", "Single boost", "Single boost", "**Triple action**; among the most popular US combinations (e.g., “Well-oft”)"],
              ["**SNRI + NDRI**", "Single", "**Double**", "Single", "Even more NE and DA action"],
              ["**SNRI + mirtazapine** (“California rocket fuel”)", "**Quadruple** (reuptake block, α2, 5HT2A, 5HT2C)", "**Quadruple**", "Possibly double (5HT2A, 5HT2C; plus PFC NET block)", "Great theoretical synergy; very powerful for some patients"],
              ["**SNRI + stimulant**", "Single", "**Double**", "Single", "“Arousal combo” for residual fatigue, low energy, motivation, libido, concentration and alertness"],
              ["**SNRI + modafinil**", "Single", "Single", "Single (modafinil is another **DAT inhibitor**)", "Arousal combo"]
            ] },
            { type: "callout", kind: "analogy", title: "If one is good…", text: "…and two is better, maybe **three boosted monoamines** is best. That is the logic of triple-action combinations." }
          ]
        },
        {
          id: "s7-tca",
          title: "Second line: tricyclic antidepressants",
          pages: "333–336",
          blocks: [
            { type: "p", text: "TCAs are named for their **three-ring** structure. Made around the time of the three-ringed phenothiazines, they failed as drugs for psychosis but were found by serendipity to treat depression. Beyond depression: **clomipramine** treats **OCD**, many have **anti-panic** effects at antidepressant doses, and low doses help **neuropathic and low back pain**. Their reuptake blockade was discovered long after their clinical effects." },
            { type: "compare", items: [
              { title: "Therapeutic actions", color: "mech", points: ["All block **NET**", "Some equal or greater **SERT** potency (e.g., **clomipramine**)", "NET-selective: **desipramine, maprotiline, nortriptyline, protriptyline**", "Some block **5HT2A and 5HT2C**"] },
              { title: "Four unwanted actions shared by all", color: "case", points: ["**H1** block: sedation, weight gain", "**Muscarinic** block: dry mouth, blurred vision, urinary retention, constipation", "**α1** block: orthostatic hypotension, dizziness", "**Voltage-sensitive sodium channel** block (heart and brain)"] }
            ] },
            { type: "callout", kind: "caution", title: "A loaded gun", text: "In overdose, sodium channel blockade causes **coma and seizures** (brain) and **arrhythmias, cardiac arrest and death** (heart) (Figure 7-68). The lethal dose is only about a **30-day supply**, a real danger in an illness with high suicide risk. TCAs are effective; their problem is **safety**, so they are reserved for patients who fail first-line drugs." },
            { type: "table", caption: "Table 7-2: some TCAs still in use", head: ["Generic", "Trade names"], rows: [
              ["[[drug:clomipramine|Clomipramine]]", "Anafranil"], ["[[drug:imipramine|Imipramine]]", "Tofranil"], ["[[drug:amitriptyline|Amitriptyline]]", "Elavil; Endep; Tryptizol; Laroxyl"], ["[[drug:nortriptyline|Nortriptyline]]", "Pamelor; Aventyl"], ["[[drug:protriptyline|Protriptyline]]", "Vivactil"], ["[[drug:maprotiline|Maprotiline]]", "Ludiomil"], ["[[drug:amoxapine|Amoxapine]]", "Asendin"], ["[[drug:doxepin|Doxepin]]", "Sinequan; Adapin"], ["[[drug:desipramine|Desipramine]]", "Norpramin; Pertofran"], ["[[drug:trimipramine|Trimipramine]]", "Surmontil"], ["[[drug:dothiepin|Dothiepin]]", "Prothiaden"], ["[[drug:lofepramine|Lofepramine]]", "Deprimyl; Gamanil"], ["[[drug:tianeptine|Tianeptine]]", "Coaxil; Stablon"]
            ] }
          ]
        },
        {
          id: "s7-maoi",
          title: "Second line: MAO inhibitors",
          pages: "336–338",
          blocks: [
            { type: "p", text: "MAOIs were the **first** effective drugs for depression, found by accident when the anti-tuberculosis drug [[drug:iproniazid|iproniazid]] improved depression in tuberculosis patients (its MAO inhibition was unrelated to its antitubercular action). They are also highly effective for **panic disorder** and **social anxiety disorder**. Today only about **1 in 3,000–5,000** prescriptions for depression is an MAOI: a “**lost art**,” yet among the most powerful treatments, sometimes working when nothing else does." },
            { type: "list", title: "Key facts", items: [
              "[[drug:phenelzine|Phenelzine]], [[drug:tranylcypromine|tranylcypromine]], [[drug:isocarboxazid|isocarboxazid]] and [[drug:selegiline|selegiline]] are **irreversible**: activity returns only when new enzyme is made, about **2–3 weeks** later.",
              "**Amphetamine** is a weak, reversible MAOI. **Tranylcypromine** is modeled on amphetamine and also releases DA. **Selegiline** has no amphetamine-like action itself but is metabolized to **l-amphetamine and l-methamphetamine**."
            ] },
            { type: "table", wide: true, caption: "Figures 7-69 to 7-71: MAO-A and MAO-B", head: ["", "MAO-A", "MAO-B"], rows: [
              ["Preferred substrates", "**5HT and NE**; also DA and tyramine", "**Trace amines** (phenethylamine); also DA and tyramine; 5HT and NE only at high concentrations"],
              ["Location", "NE and DA neurons (perhaps predominant); the major form **outside the brain**", "NE and DA neurons; **serotonin neurons** (only MAO-B); **platelets and lymphocytes**"],
              ["Selective inhibition", "**Antidepressant** (raises 5HT, NE; DA less, since MAO-B still clears it)", "**Not antidepressant**; boosts **levodopa** in Parkinson’s and reduces on/off fluctuations ([[drug:selegiline|selegiline]], [[drug:rasagiline|rasagiline]], [[drug:safinamide|safinamide]])"],
              ["Both inhibited", "Robust rise of **5HT, NE and DA**: the most powerful antidepressant profile", "One of the few ways to raise DA for refractory **reduced positive affect**"]
            ] },
            { type: "compare", title: "Two interaction types to know", items: [
              { title: "Dietary tyramine", color: "case", points: ["Tyramine (classically in **cheese**) releases NE", "Normally MAO-A destroys it harmlessly", "With MAO-A inhibited: **hypertensive crisis** risk", "Counsel on diet; keep up to date on food tyramine content"] },
              { title: "Drug–drug interactions", color: "dx", points: ["Probably **more important** and more common than diet", "**Sympathomimetic** drugs: raise blood pressure", "**Serotonin reuptake inhibitors**: potentially fatal **serotonin syndrome**", "Patients will need cough, cold and pain treatments: know what is safe"] }
            ] }
          ]
        }
      ]
    },
    {
      title: "Drugs for the bipolar spectrum",
      sections: [
        {
          id: "s7-sda-mania",
          title: "Serotonin/dopamine blockers in mania",
          pages: "338–342",
          blocks: [
            { type: "p", text: "That D2 blockers treat **psychotic** mania was expected. More surprising: they treat the **core nonpsychotic** symptoms of mania and **prevent recurrence**, like lithium and anticonvulsants that work by very different mechanisms. Even more surprising, some treat **bipolar depression**, augment SSRIs/SNRIs in **unipolar** depression, and help depression with **mixed features**." },
            { type: "table", wide: true, caption: "Table 7-1: serotonin/dopamine blockers across the bipolar spectrum (US FDA, at publication)", head: ["Agent", "Mixed features evidence", "Bipolar depression", "Bipolar mania", "Bipolar maintenance", "MDD"], rows: [
              ["[[drug:aripiprazole|Aripiprazole]]", "", "", "Yes", "Yes", "Yes (adjunct)"],
              ["[[drug:asenapine|Asenapine]]", "Yes, MMX", "", "Yes", "Yes", ""],
              ["[[drug:brexpiprazole|Brexpiprazole]]", "", "", "", "", "Yes (adjunct)"],
              ["[[drug:cariprazine|Cariprazine]]", "Yes, MMX, DMX", "Yes", "Yes", "", ""],
              ["[[drug:lurasidone|Lurasidone]]", "Yes, DMX*", "Yes", "", "", ""],
              ["[[drug:olanzapine|Olanzapine]]", "Yes, MMX", "Yes (with fluoxetine)", "Yes", "Yes", "Yes (with fluoxetine)"],
              ["[[drug:quetiapine|Quetiapine]]", "Yes, MMX", "Yes", "Yes", "Yes", "Yes (adjunct)"],
              ["[[drug:risperidone|Risperidone]]", "", "", "Yes", "Yes", ""],
              ["[[drug:ziprasidone|Ziprasidone]]", "Yes, MMX", "", "Yes", "Yes", ""]
            ], note: "MMX = mania with mixed features; DMX = depression with mixed features; * unipolar and bipolar depression. Blank = not listed in the table." },
            { type: "p", text: "**How do they work in mania?** Nobody really knows. PET shows the same **excess presynaptic dopamine** in mesostriatal neurons in acute mania as in acute psychosis, so D2 blockade should be as antimanic as it is antipsychotic. Mania is treated much like acute psychosis, with similar dosing and onset within **minutes to hours**. Not every agent approved for schizophrenia is approved for mania or maintenance: binding differences or **commercial** decisions may explain this." },
            { type: "callout", kind: "exam", title: "Lithium and valproate: yes in mania, no in schizophrenia", text: "Lithium or valproate are commonly **added** to serotonin/dopamine blockers to enhance antimanic response and prevent relapse. This is **not** done in schizophrenia, where they do not clearly augment these drugs." }
          ]
        },
        {
          id: "s7-bipolar-depression",
          title: "Bipolar depression and mixed features",
          pages: "342–345",
          blocks: [
            { type: "p", text: "A **paradigm shift**: “Don’t we treat all depression with reuptake inhibitors?” is increasingly answered **No**. Guidelines and FDA approvals are moving first-line treatment of **bipolar depression** and **depression with mixed features** to the **specifically approved serotonin/dopamine agents**. Reuptake inhibitors are reserved for unipolar depression **without** mixed features, and for bipolar depression as **second-line add-ons**. This remains controversial; some studies show benefit, and **fluoxetine + olanzapine** is approved for bipolar depression." },
            { type: "callout", kind: "caution", title: "Why avoid reuptake inhibitors here", text: "They often **fail** in bipolar or mixed depression and can cause intolerable **activation**, **manic episodes** and **suicidality**. **No** agent is approved for depression with mixed features; evidence favors serotonin/dopamine agents approved for bipolar depression." },
            { type: "table", wide: true, caption: "Proposed antidepressant mechanisms in bipolar depression (“treat from below”)", head: ["Agent", "Candidate mechanisms", "Mixed features and notes"], rows: [
              ["[[drug:olanzapine|Olanzapine]]–[[drug:fluoxetine|fluoxetine]]", "**5HT2A + 5HT2C** antagonism", "Post hoc efficacy in mania with mixed depressive features; depression with mixed features not studied"],
              ["[[drug:quetiapine|Quetiapine]]", "5HT2A, **5HT2C** and **α2** antagonism; **5HT1A** agonism", "Post hoc efficacy in mania with mixed features; DMX not studied"],
              ["[[drug:lurasidone|Lurasidone]]", "5HT2A, **5HT7** and **α2** antagonism; 5HT1A agonism", "Never tested in mania. Bipolar depression with mixed features responds as well as without. The **only** agent with a large randomized trial in **unipolar depression with mixed features**: robust efficacy without inducing mania. Lower doses than for psychosis; little weight or metabolic effect; among the most prescribed for bipolar depression"],
              ["[[drug:cariprazine|Cariprazine]]", "5HT1A partial agonism, α1 and α2 antagonism and, uniquely, **potent D3 partial agonism**", "Approved for mania and bipolar depression; post hoc gains in **mania with mixed depression and depression with mixed mania**; early adjunctive MDD evidence: some of the **broadest efficacy** across the bipolar spectrum"]
            ], note: "For the first two, **D2 antagonism** may “keep the lid on” treatment from below so it does not spill over into activation and mania." },
            { type: "flow", title: "Figures 7-72 and 7-73: why D3 matters", steps: [
              ["Competing with dopamine", "Only **cariprazine** and **blonanserin** bind D3 with affinity orders of magnitude **higher than dopamine** itself", "pharm"],
              ["Presynaptic D3 in the VTA", "Somatodendritic D3 autoreceptors on mesocortical neurons detect DA and **inhibit** its release", "mech"],
              ["Block or partially stimulate D3", "Mesocortical neurons are **disinhibited**", "drug"],
              ["Prefrontal cortex", "No D3 there; released DA acts at **D1** receptors: better mood, motivation, cognition", "clin"]
            ], note: "This may also explain cariprazine’s stronger effect on **negative symptoms** of schizophrenia. D3 antagonism is linked to improved energy, motivation and “brightening,” and in animals to pro-cognitive effects and less substance abuse." },
            { type: "update", year: "2021", title: "Lumateperone for bipolar depression", text: "**Lumateperone** (Chapter 5) was approved for depressive episodes of bipolar I and II disorder, as monotherapy and as an adjunct to lithium or valproate, in December 2021.", source: "FDA, December 2021" }
          ]
        },
        {
          id: "s7-lithium",
          title: "Lithium, the classic antimanic",
          pages: "345–346",
          blocks: [
            { type: "p", text: "[[drug:lithium|Lithium]], an **ion**, has treated mania for more than 50 years, but its mechanism is uncertain. Candidates lie in **signal transduction** beyond receptors (Figure 7-74)." },
            { type: "list", title: "Possible mechanisms", items: ["Inhibition of **inositol monophosphatase** in the phosphatidylinositol second-messenger system", "Modulation of **G proteins**", "Regulation of growth-factor and plasticity genes through cascades, including inhibition of **[[target:gsk3|GSK-3]]** and **protein kinase C**"] },
            { type: "compare", items: [
              { title: "What lithium does", color: "mech", points: ["Proven in **manic episodes** and in preventing recurrence, especially of **mania** (perhaps less for depression)", "Well established to help **prevent suicide** in mood disorders", "Used, though not approved, for **bipolar depression** and to **augment** treatment of unipolar depression"] },
              { title: "Side effects and burden", color: "case", points: ["GI: dyspepsia, nausea, vomiting, diarrhea", "**Weight gain**, hair loss, acne, **tremor**, sedation, decreased cognition, incoordination", "Long-term risks to **thyroid** and **kidney**", "**Narrow therapeutic window**: plasma level monitoring"] }
            ] },
            { type: "callout", kind: "pearl", title: "An unfortunate decline", text: "New options, side effects and monitoring have reduced lithium use. Experts now often use it as **one member of a portfolio**, at **lower doses** and **once daily**, rather than as high-dose monotherapy for euphoric mania." }
          ]
        },
        {
          id: "s7-anticonvulsants",
          title: "Anticonvulsants as “mood stabilizers”",
          pages: "346–347",
          blocks: [
            { type: "p", text: "The idea that mania may **kindle** further mania, as seizures kindle seizures, plus the success of **carbamazepine** and **valproate** in mania, led to the assumption that **any** anticonvulsant would stabilize mood. It does not: anticonvulsants act by **different mechanisms**, so they are better classified by their action at **ion channels**." },
            { type: "table", wide: true, caption: "Table 7-3: anticonvulsant mood stabilizers (putative clinical actions)", head: ["Agent", "Epilepsy", "Treat from above", "Stabilize from above", "Treat from below", "Stabilize from below"], rows: [
              ["[[drug:valproate|Valproate]]", "++++", "++++", "++", "+", "+/−"],
              ["[[drug:carbamazepine|Carbamazepine]]", "++++", "++++", "++", "+", "+/−"],
              ["[[drug:lamotrigine|Lamotrigine]]", "++++", "+/−", "++++", "+++", "++++"],
              ["[[drug:oxcarbazepine|Oxcarbazepine]]/licarbazepine", "++++", "++", "+", "+/−", "+/−"],
              ["[[drug:riluzole|Riluzole]]", "+", "", "", "+", "+/−"],
              ["[[drug:topiramate|Topiramate]]", "++++", "+/−", "+/−", "", ""],
              ["[[drug:gabapentin|Gabapentin]]", "++++", "+/−", "+/−", "", ""],
              ["[[drug:pregabalin|Pregabalin]]", "++++", "+/−", "+/−", "", ""]
            ], note: "Treat/stabilize from above = mania-minded; from below = depression-minded." },
            { type: "callout", kind: "mnemonic", title: "Read Table 7-3 as two columns", text: "**Valproate and carbamazepine** are mania-minded (from **above**). **Lamotrigine** is depression-minded (from **below**) and stabilizes both poles. The rest are weak or doubtful in bipolar disorder." }
          ]
        },
        {
          id: "s7-valproate-cbz",
          title: "Valproate and carbamazepine",
          pages: "347–350",
          blocks: [
            { type: "p", text: "Even less is known about [[drug:valproate|valproate]]’s mechanism than about other anticonvulsants. Three hypotheses, none proven to explain its mood, anticonvulsant, anti-migraine or adverse effects (Figures 7-75 to 7-78):" },
            { type: "table", head: ["Hypothesis", "Details"], rows: [
              ["**VSSC** inhibition", "Not a specific site: may change sodium channel **sensitivity** by binding channel or regulatory units or by inhibiting **phosphorylating enzymes**; less sodium entry, less **glutamate** release"],
              ["**GABA** enhancement", "More release, less reuptake, or slower breakdown by **GABA-T**; the direct site is unknown, but the net effect is more inhibition"],
              ["**Signal transduction**", "Inhibits **GSK-3** (like lithium), **PKC** and **MARCKS**; activates neuroprotective/plasticity signals **ERK**, **BCL2**, **GAP43**"]
            ], note: "It may also act on voltage-sensitive calcium channels and indirectly block glutamate." },
            { type: "compare", title: "Valproate in practice", items: [
              { title: "Efficacy", color: "mech", points: ["Proven for **acute mania**", "Common long-term to prevent mania, but prophylaxis is less established than acute effect", "Antidepressant and depression-preventing actions **not well established**", "Some experts think it beats lithium for **rapid cycling** and **mixed** episodes, which usually need combinations (lithium + valproate + serotonin/dopamine blocker)"] },
              { title: "Tolerability and safety", color: "case", points: ["Pushing the dose helps, but adherence suffers: **hair loss, weight gain, sedation**", "Warnings: **bone marrow, liver, pancreas**, and **fetal** toxicity (**neural-tube defects**)", "Weight gain and metabolic complications", "Women of child-bearing potential: **amenorrhea, polycystic ovaries**, hyperandrogenism, obesity, insulin resistance"] }
            ] },
            { type: "p", text: "[[drug:carbamazepine|Carbamazepine]] was actually the **first** anticonvulsant shown to work in mania, but was FDA-approved for it only recently as a **once-daily controlled-release** form. It is thought to block **VSSCs** at a site within the channel’s **α subunit** in its open conformation, unlike valproate, and perhaps like **oxcarbazepine** and **eslicarbazepine**." },
            { type: "table", caption: "Two mania-minded anticonvulsants compared", head: ["", "Valproate", "Carbamazepine"], rows: [
              ["Mechanism", "Uncertain; several hypotheses", "VSSC **α subunit**, open channel"],
              ["Other proven use", "**Migraine**", "**Neuropathic pain**"],
              ["Bone marrow", "Monitor blood counts and platelets periodically", "More profound **immediate** suppression: monitor counts at the start"],
              ["CYP450", "", "Notable **CYP3A4 induction**"],
              ["Shared", "Sedation; **neural-tube defects**", "Sedation; **neural-tube defects**"]
            ] }
          ]
        },
        {
          id: "s7-lamotrigine",
          title: "Lamotrigine and the doubtful anticonvulsants",
          pages: "350–353",
          blocks: [
            { type: "p", text: "[[drug:lamotrigine|Lamotrigine]] proves that anticonvulsants are not interchangeable. It is **not approved** to treat mania or depression, but **is approved to prevent recurrence of both**. Most experts believe it treats **bipolar depression** even though the FDA has not approved that use." },
            { type: "list", title: "Curious features", items: [
              "Shares **open-channel VSSC** binding with carbamazepine, yet is **not** approved for mania: perhaps too weak at sodium channels, or its long **titration** makes it impractical for mania, which needs fast-acting drugs.",
              "May uniquely **reduce glutamate release**, either via VSSCs or an unidentified synaptic action; reducing excessive glutamate during bipolar depression may explain why it **treats and stabilizes from below**.",
              "Generally well tolerated except for **rash**, rarely **Stevens–Johnson syndrome** (toxic epidermal necrolysis)."
            ] },
            { type: "callout", kind: "caution", title: "Minimizing rash", text: "Titrate **very slowly** at the start, avoid or manage interactions (especially **valproate**, which raises lamotrigine levels), and learn to tell serious from benign rashes." },
            { type: "table", wide: true, caption: "Anticonvulsants with uncertain or doubtful efficacy in bipolar disorder", head: ["Agent", "Points in the book"], rows: [
              ["[[drug:oxcarbazepine|Oxcarbazepine]] / [[drug:eslicarbazepine|eslicarbazepine]]", "Related to, but not a metabolite of, carbamazepine. A **prodrug** converted to the 10-hydroxy (monohydroxy) derivative **licarbazepine**; its active S form is **eslicarbazepine**. Same presumed VSSC mechanism, but **less sedation, bone marrow toxicity and CYP3A4 interaction**. **Never proven** in acute mania or depression, yet used off-label, especially for mania."],
              ["[[drug:topiramate|Topiramate]]", "Approved for epilepsy and migraine, and with **bupropion** for weight loss (as written in the book). **Ambiguous** results in bipolar disorder; causes **weight loss**, so used as an adjunct to weight-gaining drugs; can be too sedating. Tested in stimulant and alcohol use disorders."],
              ["[[drug:gabapentin|Gabapentin]] and [[drug:pregabalin|pregabalin]]", "Little or no mood-stabilizing action, but robust for **pain** (neuropathic pain, fibromyalgia) and **anxiety** (Chapters 8 and 9)."],
              ["**L-type calcium channel blockers**", "L channels on vascular smooth muscle are targeted by antihypertensives and antiarrhythmics; their neuronal role is debated. **Anecdotal** evidence for **dihydropyridine** types in some bipolar patients."],
              ["[[drug:riluzole|Riluzole]]", "Developed to slow **ALS**. May bind VSSCs and **reduce glutamate release** like lamotrigine; excess glutamate may occur in bipolar depression too."]
            ] },
            { type: "callout", kind: "caution", title: "A detail to check", text: "The book says topiramate is combined with **bupropion** for weight loss. The marketed weight-loss combination with bupropion contains **naltrexone** (as the book itself says on p. 306); topiramate’s marketed weight-loss partner is phentermine. Treat this sentence with care." }
          ]
        },
        {
          id: "s7-bipolar-combos",
          title: "Combinations are the standard in bipolar disorder",
          pages: "353",
          blocks: [
            { type: "p", text: "Few bipolar patients do well on monotherapy, so combinations are **the rule, not the exception**. First line is often a **serotonin/dopamine agent**; the goal is all four actions: treat and stabilize from above and from below." },
            { type: "compare", title: "Figure 7-83", items: [
              { title: "Mania not controlled (evidence-based)", color: "mech", points: ["5HT/DA blocker + **lithium**", "5HT/DA blocker + **valproate**"] },
              { title: "Depression not controlled (practice-based)", color: "pharm", points: ["5HT/DA blocker + **lamotrigine**", "Controversially, 5HT/DA blocker + a **monoamine reuptake inhibitor**"] }
            ] }
          ]
        }
      ]
    },
    {
      title: "Future treatments",
      sections: [
        {
          id: "s7-dxm",
          title: "Oral NMDA antagonists: dextromethorphan and dextromethadone",
          pages: "353–355",
          blocks: [
            { type: "p", text: "Ketamine and esketamine act fast and reduce suicidal thoughts, but effects often last only days. The search is for **oral ketamine-like** agents with rapid onset, sustained benefit, easier use and better tolerability, mostly **NMDA antagonists** with additional properties." },
            { type: "p", text: "[[drug:dextromethorphan|Dextromethorphan]] has clinically relevant **NMDA** affinity and stronger binding at **SERT** and **σ1** (plus α1D and weak μ-opioid; Figure 7-84). It is rapidly destroyed by **CYP2D6**, so oral use needs a 2D6 inhibitor. Which NMDA subtypes matter, and the roles of σ1 and μ-opioid binding, are unclear." },
            { type: "table", wide: true, caption: "Figures 7-84 and 7-85: three combinations", head: ["Product", "Partner", "Status in the book"], rows: [
              ["**Dextromethorphan–bupropion** (AXS-05)", "[[drug:bupropion|Bupropion]]: a **2D6 inhibitor** and an **NDRI**, with possible synergy with NMDA antagonism", "FDA **breakthrough therapy** for MDD; **fast track** for treatment-resistant depression and for **Alzheimer agitation** (Chapter 12)"],
              ["**Dextromethorphan–quinidine**", "[[drug:quinidine|Quinidine]]: 2D6 inhibitor at doses below its cardiovascular actions", "Already approved for **pseudobulbar affect** (pathological laughing and crying); in trials for depression and Alzheimer agitation"],
              ["**Deuterated dextromethorphan–quinidine**", "Deuteration extends half-life (and allows re-patenting), changing the quinidine dose", "In development"]
            ] },
            { type: "p", text: "[[drug:dextromethadone|Dextromethadone]]: methadone is racemic. The **levo** form carries most **μ-opioid** agonism; the **dextro** form is a relatively more potent **NMDA antagonist** with weaker μ action, and was in development as a rapid-onset treatment for depression (other bindings: 5HT2A, δ, SERT, σ). A speculative idea: some μ-agonism might “shepherd” **NMDA–μ receptor dimers** so NMDA blockade is stronger in the presence of μ stimulation." },
            { type: "update", year: "2022", title: "Dextromethorphan–bupropion approved for depression", text: "**Dextromethorphan–bupropion** (Auvelity) was approved for major depressive disorder in adults in August 2022.", source: "FDA, August 2022" },
            { type: "update", year: "2026", title: "Dextromethorphan–bupropion approved for Alzheimer agitation", text: "Axsome announced on April 30, 2026 that the FDA approved Auvelity for **agitation associated with dementia due to Alzheimer disease**. One of the four pivotal trials (ADVANCE-2) missed its primary endpoint; the randomized-withdrawal trial ACCORD-2 showed delayed relapse.", source: "Axsome Therapeutics, April 30, 2026 (Psychiatric Times)" },
            { type: "update", year: "2024", title: "Deuterated dextromethorphan–quinidine trial failed", text: "Otsuka reported in February 2024 that AVP-786 did not separate from placebo on agitation (CMAI) at 12 weeks in its phase 3 trial in Alzheimer dementia.", source: "Otsuka, February 12, 2024" },
            { type: "update", year: "2024", title: "Dextromethadone (esmethadone) halted", text: "Relmada stopped its phase III trials of esmethadone (REL-1017) for adjunctive treatment of major depression in December 2024 after interim results showed little chance of success.", source: "Relmada Therapeutics, December 2024" }
          ]
        },
        {
          id: "s7-psychedelics",
          title: "Hallucinogen-assisted psychotherapy",
          pages: "355–358",
          blocks: [
            { type: "p", text: "Psychotherapy and medication are increasingly seen as **complementary**, perhaps because both change brain circuits: psychotherapy is a form of **learning** that can cause **epigenetic** changes. A recent revival uses hallucinogens to induce a **dissociative** state in which patients may be more open to therapy." },
            { type: "list", title: "Two rationales", items: ["Gain insight and clarity into **suppressed memories**.", "Re-experience memories in therapy while interfering with their **reconsolidation**: reactivated memories become **labile**, and if not reconsolidated they might be **erased**. Agents tried range from **ketamine** to **MDMA** and **psilocybin**."] },
            { type: "compare", items: [
              { title: "[[drug:mdma|MDMA]] (Figure 7-87)", color: "drug", points: ["An **amphetamine derivative**: amphetamine is an NDRI + VMAT2 inhibitor releasing DA; MDMA is a more powerful **SERT inhibitor + VMAT2** inhibitor releasing **5HT**", "Released 5HT acts strongly at **5HT2A**", "Energy, pleasure, emotional warmth, **trust and closeness**; distorted sensory and time perception", "“Ecstasy”/“Molly”; 5HT2A action may drive **hyperthermia**, organ damage and death (dancing, dehydration)", "Street supply often contaminated (bath salts, methamphetamine, dextromethorphan, ketamine, cocaine)", "In testing for **PTSD**, anxiety/existential distress in terminal illness, social anxiety in **autism**, refractory depression, substance abuse"] },
              { title: "[[drug:psilocybin|Psilocybin]] (Figure 7-88)", color: "mech", points: ["“**Magic mushrooms**”; structure like LSD", "Rapidly **dephosphorylated** to the active **psilocin**", "Binds 5HT1A, **5HT2A**, 5HT2C and others; hallucinations linked to **5HT2A agonism** (reversed by 5HT2A antagonists, not D2 antagonists)", "FDA **breakthrough therapy** designation for depression", "Studied for anxiety/existential distress in terminal illness, substance abuse, PTSD and more"] }
            ] },
            { type: "update", year: "2024", title: "MDMA-assisted therapy not approved", text: "In August 2024 the FDA issued a complete response letter declining approval of MDMA-assisted therapy (midomafetamine) for PTSD and requested another phase III trial.", source: "FDA complete response letter to Lykos Therapeutics, August 9, 2024" },
            { type: "update", year: "2026", title: "Psilocybin (COMP360) nears an FDA filing", text: "Compass Pathways reported positive phase 3 results for its psilocybin formulation **COMP360** in treatment-resistant depression. As of its May 2026 report a rolling new drug application was under way, with completion planned for the fourth quarter of 2026; psilocybin was not yet approved.", source: "Compass Pathways first-quarter 2026 report, May 13, 2026" }
          ]
        },
        {
          id: "s7-summary",
          title: "Putting it together",
          pages: "358",
          blocks: [
            { type: "list", items: [
              "Most drugs for **unipolar** depression act on **monoamines**: SERT, NET, DAT and monoamine receptors (5HT1A, 5HT2A, 5HT2C, 5HT3, 5HT7, α2, MT1/MT2).",
              "Newer agents act **outside** the monoamines, on **glutamate** (ketamine, esketamine, dextromethorphan) and **GABA** (neuroactive steroids), and work **fast**.",
              "For resistance: **augment** (serotonin/dopamine agents, lithium, buspirone, thyroid), **combine** monoamine drugs, or use **TCAs/MAOIs**.",
              "**Bipolar** treatment mostly uses **different** drugs: serotonin/dopamine agents, lithium and anticonvulsants, usually **in combination**; avoid relying on reuptake inhibitors in bipolar or mixed depression.",
              "Match drug actions to **symptoms and circuits** (Chapter 6): e.g., bupropion for reduced positive affect, SNRIs for painful physical symptoms, trazodone for residual insomnia, vortioxetine for processing speed."
            ] },
            { type: "case", title: "Clinical vignette: better but not well", text: "After 12 weeks of escitalopram, a teacher’s mood has lifted and her suicidal thoughts are gone, but she is exhausted, cannot concentrate in lessons and sleeps poorly.", point: "A **response** without **remission**. Fatigue, poor concentration and insomnia are the **most common residual symptoms**. Options include adding **bupropion** (NE/DA, triple action), an **arousal combo**, or low-dose **trazodone** for sleep. Remission matters because relapse is far more common without it." },
            { type: "case", title: "Clinical vignette: the dull rocket", text: "A man on maximal venlafaxine XR has improved only partly. His psychiatrist adds mirtazapine at night.", point: "**California rocket fuel**: SNRI transporter blockade plus **α2 antagonism** (cutting the brakes on both NE and 5HT release), with 5HT2A/5HT2C antagonism possibly adding DA. Expect sedation and weight gain from **H1** blockade." },
            { type: "case", title: "Clinical vignette: depressed with racing thoughts", text: "A 26-year-old with recurrent depression now has depressed mood plus racing thoughts, pressured speech and decreased need for sleep, but no prior mania. Her family wants an SSRI.", point: "**Depression with mixed features**. Reuptake inhibitors may fail and can induce **activation, mania or suicidality**. Evidence favors serotonin/dopamine agents: **lurasidone** (positive in unipolar depression with mixed features) or **cariprazine**." },
            { type: "case", title: "Clinical vignette: the rash at week three", text: "A woman with bipolar II depression is started on lamotrigine and quickly titrated because she is also taking valproate. She develops a widespread rash with mucosal sores.", point: "Possible **Stevens–Johnson syndrome**. **Valproate raises lamotrigine levels**; lamotrigine needs **very slow** titration, especially with valproate. Stop the drug and treat urgently." },
            { type: "case", title: "Clinical vignette: cheese and the cold remedy", text: "A patient on phenelzine for refractory depression asks whether she can eat aged cheese and take an over-the-counter decongestant.", point: "**Tyramine** can cause a **hypertensive crisis** with MAO-A inhibited, and **sympathomimetic** decongestants raise blood pressure. Serotonin reuptake inhibitors risk **serotonin syndrome**. Counsel on both diet and drug interactions." }
          ]
        }
      ]
    }
  ]
});
