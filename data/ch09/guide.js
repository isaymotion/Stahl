/* Chapter 9 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 9 (pp. 379–400).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch09", "guide", {
  intro: "Pain is a psychiatric **vital sign**. This chapter traces the **nociceptive pathway** from primary afferent fibers to the dorsal horn and up to the brain, then explains how pain becomes **neuropathic** through **central sensitization** in the spinal cord (segmental) or brain (suprasegmental). It places **fibromyalgia** and the **painful physical symptoms** of depression and anxiety on one spectrum with diabetic neuropathy, low back pain and osteoarthritis, and shows why the same two drug classes work across all of them: **SNRIs**, which boost **descending noradrenergic and serotonergic inhibition**, and **α2δ ligands**, which quiet **overactive calcium channels**. It ends with how to target the ancillary symptoms of fibromyalgia.",
  objectives: [
    "Define **pain, acute and chronic pain, neuropathic pain, nociception, allodynia, hyperalgesia** and the parts of the pain pathway (Table 9-1).",
    "Trace the **nociceptive pathway** from Aβ, Aδ and C fibers through the **dorsal horn** to the **sensory/discriminatory** and **emotional/motivational** pathways (Figures 9-1 to 9-3).",
    "Distinguish **peripheral** from **central** mechanisms of neuropathic pain and **segmental** from **suprasegmental** central sensitization (Figures 9-4, 9-5).",
    "Explain the **spectrum** linking mood and anxiety disorders with chronic neuropathic pain syndromes (Figure 9-6).",
    "Describe **fibromyalgia**, its diagnosis, its symptom-to-circuit map and possible **gray-matter loss** (Figures 9-7 to 9-10).",
    "Explain **descending inhibition** by opioid, noradrenergic and serotonergic pathways and why **SNRIs** but not **SSRIs** reliably treat pain (Figures 9-11 to 9-13).",
    "Explain how **α2δ ligands** selectively block **open, overactive** VSCCs, and the case for **early, aggressive** pain treatment (Figures 9-14 to 9-18).",
    "List treatments for the **ancillary symptoms** of fibromyalgia and second-line options."
  ],
  parts: [
    {
      title: "From nociception to pain",
      sections: [
        {
          id: "s9-pain",
          title: "What is pain?",
          pages: "379–381",
          blocks: [
            { type: "p", text: "Acute pain is vital: it makes us aware of damage and makes us **rest** the injured part. But peripheral pain that becomes **chronic** (osteoarthritis, low back pain, diabetic peripheral neuropathic pain) can change **central** pain mechanisms that amplify it and generate pain centrally. That is why drugs acting on **central** mechanisms help pain of peripheral origin. Other chronic pain starts **centrally** with no peripheral cause, especially the multiple unexplained painful physical symptoms of **depression, anxiety** and **fibromyalgia**, once dismissed as not “real.” These are now seen as forms of **chronic neuropathic pain** and treated with the same agents: **SNRIs** and **α2δ ligands**." },
            { type: "table", wide: true, caption: "Table 9-1: useful definitions (in brief)", head: ["Term", "Meaning"], rows: [
              ["**Pain**", "An unpleasant sensory and emotional experience tied to actual or potential tissue damage, or described as such"],
              ["**Acute pain**", "Short; resolves with healing"],
              ["**Chronic pain**", "Lasts longer than expected; an arbitrary cut-off (e.g., 1 month) is not appropriate"],
              ["**Neuropathic pain**", "Arises from damage to or dysfunction of **any part** of the peripheral or central nervous system"],
              ["**Nociception**", "Noxious stimuli produce activity in sensory pathways carrying “painful” information; a nociceptor detects the stimulus and fires toward higher centers"],
              ["**Allodynia**", "Pain from a stimulus that does **not normally** provoke pain"],
              ["**Hyperalgesia**", "An **increased** response to a stimulus (see caution below)"],
              ["**Analgesia**", "Reduces pain sensation without affecting normal **touch**"],
              ["**Local anesthesia**", "Blocks **all** sensation, innocuous and painful, in a local area"],
              ["**Primary afferent neuron (PAN)**", "First neuron of the pathway; detects mechanical, thermal or chemical stimuli; cell body in the **dorsal root ganglion**"],
              ["**Nociceptor**", "A primary afferent neuron activated **only** by noxious stimuli"],
              ["**Interneuron**", "Wholly within the cord; excitatory (glutamate) or inhibitory (GABA)"],
              ["**Projection neuron**", "Dorsal horn neuron that receives PAN/interneuron input and projects up the cord"],
              ["**Spinothalamic / spinobulbar tracts**", "Spinal cord → thalamus; spinal cord → brainstem nuclei"],
              ["**Somatosensory cortex**", "Topographically arranged cortex receiving mainly cutaneous input"]
            ] },
            { type: "callout", kind: "caution", title: "A definition to check", text: "The book defines hyperalgesia as an increased response to a stimulus that is **not normally painful**, which overlaps its own definition of allodynia. The standard (IASP) usage is: **allodynia** = pain from a normally non-painful stimulus; **hyperalgesia** = **more** pain than expected from a **normally painful** stimulus (the book later uses it this way for “wind-up”)." },
            { type: "callout", kind: "key", title: "Pain as a psychiatric vital sign", text: "Because pain accompanies many psychiatric disorders and psychotropics treat many pain conditions, pain should be **assessed and treated routinely**. Eliminating pain is increasingly seen as necessary for **full remission** of many psychiatric disorders." }
          ]
        },
        {
          id: "s9-nociception",
          title: "Normal pain: activating nociceptive fibers",
          pages: "381–382",
          blocks: [
            { type: "p", text: "**Primary afferent neurons** have cell bodies in the **dorsal root ganglion**, outside the CNS, so they are **peripheral** neurons. Nociception begins with **transduction**: membrane proteins on peripheral terminals detect a stimulus and change voltage; a strong enough depolarization opens **[[target:vssc|voltage-sensitive sodium channels]]** and fires an action potential to the spinal cord. Local anesthetics such as [[drug:lidocaine|lidocaine]] block VSSCs and stop the impulse. Channel and receptor content sets each fiber’s properties: a **stretch-activated** channel makes a neuron mechanosensitive; the **vanilloid receptor 1 (VR1)** channel responds to **capsaicin** (chili peppers) and noxious **heat**, hence the burning." },
            { type: "table", caption: "Figure 9-1: three fiber types", head: ["Fiber", "Responds to"], rows: [
              ["**Aβ**", "**Non-noxious** stimuli: small movements, light touch, hair movement, vibration"],
              ["**Aδ**", "Noxious **mechanical** stimuli and sub-noxious **thermal** stimuli"],
              ["**C**", "Bare nerve endings activated **only** by noxious mechanical, thermal or chemical stimuli"]
            ] },
            { type: "compare", title: "Pain from a sprained ankle or a tooth extraction", items: [
              { title: "NSAIDs", color: "drug", points: ["Reduce painful input from primary afferent neurons", "Presumably through **peripheral** actions"] },
              { title: "Opiates", color: "mech", points: ["Also reduce such pain", "Through **central** actions (dorsal horn, periaqueductal gray)"] }
            ] },
            { type: "update", year: "2025", title: "A first-in-class peripheral sodium channel blocker", text: "**Suzetrigine** (Journavx), a selective inhibitor of the **NaV1.8** sodium channel subtype that carries pain signals in peripheral sensory nerves, was approved by the FDA on January 30, 2025 for moderate-to-severe **acute** pain in adults: a non-opioid analgesic acting at the first step described here.", source: "Vertex Pharmaceuticals/FDA, January 30, 2025 (PharmExec)" }
          ]
        },
        {
          id: "s9-ascending",
          title: "The dorsal horn and the pathways to the brain",
          pages: "382–383",
          blocks: [
            { type: "p", text: "Primary afferents synapse in the **dorsal horn** on **projection neurons**, the first neurons of the pathway lying **entirely within the CNS**, and so a key site of modulation. Dorsal horn neurotransmitters come from primary afferents, descending neurons and interneurons. Some are targets of known pain drugs (**opiates, SNRIs, α2δ ligands**); all are potential targets for new ones." },
            { type: "table", wide: true, caption: "Figure 9-2: neurotransmitters in the dorsal horn", head: ["Neurotransmitter", "Receptors shown"], rows: [
              "Best studied in pain transmission",
              ["**Substance P**", "NK1, NK2, NK3"],
              ["**Endorphins**", "**μ-opioid**"],
              ["**Norepinephrine**", "**α2** adrenoceptors"],
              ["**Serotonin**", "**5HT1B/D** and **5HT3**"],
              "Also present",
              ["Glutamate", "AMPA, NMDA"],
              ["GABA", "GABA-A, GABA-B"],
              ["CGRP (calcitonin gene-related peptide)", "CGRP-R"],
              ["Cholecystokinin", "CCK-A, CCK-B"],
              ["Somatostatin; VIP; nitric oxide; glycine", "SR; VIPR; —; NMDA (glycine site)"]
            ], note: "The book expands VIP as “vasopressin inhibitory protein”; VIP usually stands for **vasoactive intestinal peptide**." },
            { type: "compare", title: "Figure 9-3: two ascending pathways", items: [
              { title: "Sensory/discriminatory", color: "mech", points: ["**Spinothalamic** tract → thalamus → **primary somatosensory cortex**", "Conveys **location and intensity**"] },
              { title: "Emotional/motivational", color: "case", points: ["**Spinobulbar** tracts → brainstem nuclei → thalamus and **limbic** structures", "Conveys the **affective** component"] }
            ] },
            { type: "callout", kind: "key", title: "When is it “pain”?", text: "Only when the sensory and emotional streams **combine** is the subjective experience of pain (“**ouch**”) formed. Before that it is **nociceptive neuronal activity**, not pain." }
          ]
        }
      ]
    },
    {
      title: "Neuropathic pain and the pain spectrum",
      sections: [
        {
          id: "s9-neuropathic",
          title: "Neuropathic pain and central sensitization",
          pages: "382–386",
          blocks: [
            { type: "p", text: "**Neuropathic pain** comes from damage or dysfunction of the nervous system; “normal” **nociceptive** pain comes from activating nociceptive fibers. **Peripheral sensitization**: damage by disease or trauma alters firing, allows cross-talk and starts inflammation, so signaling continues without a noxious stimulus (not emphasized here). The chapter focuses on **central sensitization**: at every relay the signal can be damped or amplified, in the dorsal horn and in the brain." },
            { type: "table", wide: true, caption: "Figures 9-4 and 9-5", head: ["", "Segmental central sensitization", "Suprasegmental central sensitization"], rows: [
              ["Where", "**Dorsal horn** of the spinal cord segment receiving the injured area", "Brain sites in the pain pathway, especially **thalamus and cortex**"],
              ["Mechanism", "**Activity-dependent** (use-dependent) plasticity from constant firing; **phosphorylation** of receptors and channels raises synaptic efficiency and trips a “master switch” that **opens the gate**", "The brain “**learns**” pain and keeps, enhances and makes it permanent; or activates its pain pathways **spontaneously**"],
              ["Results", "**Wind-up** (exaggerated or prolonged response to noxious input = hyperalgesia) and **allodynia**; pain without peripheral input", "Amplified or self-generated pain"],
              ["Examples", "Phantom limb pain; “mixed” states added to **low back pain, diabetic peripheral neuropathic pain, shingles**", "After peripheral injury (osteoarthritis, back pain, DPNP, shingles), or with **no trigger**: **fibromyalgia**, chronic widespread pain, painful physical symptoms of depression and anxiety (especially **PTSD**)"]
            ] },
            { type: "callout", kind: "analogy", title: "The gate theory", text: "The pain gate can also **close**: innocuous stimulation away from an injury (**acupuncture, vibration, rubbing**) can reduce perceived pain." },
            { type: "callout", kind: "pearl", title: "A great opportunity", text: "Getting the CNS to “**forget**” molecular pain memories may be one of the biggest opportunities in psychopharmacology, and the same idea may apply to progression in schizophrenia, stress-related anxiety and mood disorders, and addiction." }
          ]
        },
        {
          id: "s9-spectrum",
          title: "The mood–anxiety–pain spectrum",
          pages: "387",
          blocks: [
            { type: "p", text: "Pain without emotional symptoms was seen as neurological; with them, psychiatric. Now pain is mapped to **inefficient information processing in the pain circuit** and treated as the **same symptom with the same treatments** wherever it appears (Figure 9-6)." },
            { type: "flow", title: "Figure 9-6: one spectrum", steps: [
              ["Anxiety and mood disorders", "MDD, GAD, PTSD, mixed anxiety subtypes", "dx"],
              ["Shared physical symptoms", "Fatigue, sleep, cognition, worry", "mech"],
              ["Painful physical symptoms", "Of depression and anxiety; fibromyalgia; chronic widespread pain", "case"],
              ["Chronic neuropathic pain syndromes", "Diabetic neuropathy, shingles, osteoarthritis, low back pain", "pharm"]
            ], note: "Wherever pain occurs on this spectrum, it must be treated, and the treatments are the same: **SNRIs and α2δ ligands**." }
          ]
        },
        {
          id: "s9-fibromyalgia",
          title: "Fibromyalgia and gray-matter loss",
          pages: "387–390",
          blocks: [
            { type: "list", title: "Fibromyalgia in brief", items: [
              "A chronic, **widespread** pain syndrome with **tenderness** but no structural pathology in muscles, ligaments or joints.",
              "Associated with **fatigue** and **nonrestorative sleep**.",
              "Diagnosed by the **widespread pain index** (number of painful body areas) plus severity of fatigue, waking unrefreshed, cognitive and other somatic symptoms (Figure 9-7).",
              "The **second most common** diagnosis in rheumatology clinics; may affect **2–4%** of people.",
              "Chronic and debilitating but **not necessarily progressive**; no known cause."
            ] },
            { type: "table", caption: "Figure 9-9: fibromyalgia symptoms matched to circuits", head: ["Symptom", "Hypothesized region"], rows: [
              ["**Pain**", "**Thalamus** (T)"],
              ["Physical fatigue", "**Striatum** (S) and **spinal cord** (SC)"],
              ["“**Fibro-fog**” (concentration, lack of interest), mental fatigue", "**Dorsolateral PFC**"],
              ["Fatigue, low energy, lack of interest", "Also **nucleus accumbens**"],
              ["Sleep and appetite", "**Hypothalamus**"],
              ["Depressed mood", "**Amygdala** and **orbitofrontal cortex**"],
              ["Anxiety", "**Amygdala**"]
            ] },
            { type: "p", text: "Preliminary reports suggest chronic pain may “**shrink the brain**”: gray-matter loss in the **DLPFC, thalamus** and **temporal cortex** in fibromyalgia and chronic low back pain (Figure 9-10), regions different from those in depression; gray matter may increase elsewhere. One hypothesis: persistent pain **overuses DLPFC neurons**, causing excitotoxic death and loss of the **cortico-thalamic brake** on pain, so pain rises and executive function falls (fibro-fog). Stress-related HPA changes and reduced growth factors may contribute. **DLPFC** deficits (regulated by dopamine) may explain cognitive problems; **thalamic** changes may explain poor, nonrestorative sleep." }
          ]
        }
      ]
    },
    {
      title: "How pain drugs work",
      sections: [
        {
          id: "s9-descending",
          title: "Descending inhibition: opioids, norepinephrine and serotonin",
          pages: "390–395",
          blocks: [
            { type: "p", text: "The **periaqueductal gray** (PAG) is the origin and regulator of much **descending inhibition**. It integrates nociceptive and limbic input (amygdala, limbic cortex) and drives brainstem nuclei and the **rostroventromedial medulla**." },
            { type: "table", wide: true, caption: "Figures 9-2 and 9-11 to 9-13: three descending systems", head: ["System", "Origin", "Action in the dorsal horn", "Drugs"], rows: [
              ["**Opioid**", "PAG-driven pathways releasing **endorphins**", "Mostly presynaptic **μ-opioid** receptors inhibit nociceptive primary afferents. **Enkephalins** (δ) are antinociceptive; **dynorphins** (κ) can be anti- or pronociceptive", "Opioid analgesics act at spinal and PAG μ receptors; they spare normal sensation because **Aβ fibers lack μ receptors**"],
              ["**Noradrenergic**", "**Locus coeruleus**, especially caudal brainstem (lateral tegmental cell system)", "Presynaptic **α2** receptors inhibit release from primary afferents; postsynaptic α2 inhibits dorsal horn neurons", "**SNRIs**; direct α2 agonists such as [[drug:clonidine|clonidine]]"],
              ["**Serotonergic**", "**Nucleus raphe magnus** (rostroventromedial medulla) and caudal raphe (magnus, pallidus, obscurus)", "**Inhibits** via **5HT1B/D** but also **facilitates** pain via excitatory **5HT3** receptors on some afferent terminals", "SNRIs; SSRIs inconsistent"]
            ] },
            { type: "callout", kind: "exam", title: "Why SNRIs, not SSRIs, treat pain", text: "Serotonin both **inhibits** (5HT1B/D) and **facilitates** (5HT3) pain, so boosting serotonin alone (**SSRIs**) is inconsistent. **SNRIs** boost both 5HT and **NE**, and are proven in diabetic peripheral neuropathic pain and fibromyalgia; the **noradrenergic** effect may matter more." },
            { type: "callout", kind: "caution", title: "Opiates are not the answer for chronic neuropathic pain", text: "Opiates are generally **no more effective** than SNRIs or α2δ ligands for chronic neuropathic pain, and in **fibromyalgia** they are **not proven effective at all**." },
            { type: "flow", title: "Figures 9-12 and 9-13: masking irrelevant input", steps: [
              ["At rest", "Descending NE and 5HT inhibition **masks** irrelevant input from joints, muscles, back posture and digestion", "mech"],
              ["Deficient inhibition", "Normal bodily input is perceived as **pain** (fibromyalgia, depression, irritable bowel syndrome, anxiety)", "case"],
              ["SNRI", "Restores descending inhibition; the input is **ignored** again", "drug"]
            ] },
            { type: "p", text: "SNRIs in the book: [[drug:duloxetine|duloxetine]], [[drug:milnacipran|milnacipran]], [[drug:levomilnacipran|levomilnacipran]], [[drug:venlafaxine|venlafaxine]], [[drug:desvenlafaxine|desvenlafaxine]] and some **TCAs**." },
            { type: "compare", title: "Adaptive descending control", items: [
              { title: "Danger or severe injury", color: "case", points: ["Nociceptive input and limbic “conflict” trigger release of **opioids, 5HT and NE**", "Pain is dulled so the person can **escape** (sports field, battlefield)"] },
              { title: "Back in safety", color: "mech", points: ["**Descending facilitation** replaces inhibition", "More awareness of the injury forces **rest**", "Maladaptive versions maintain pain without injury"] }
            ] },
            { type: "callout", kind: "pearl", title: "Placebo and endorphins", text: "Placebo pain relief can be **reversed by naloxone** ([[drug:naloxone|naloxone]], a μ-opioid antagonist), suggesting it involves endogenous opioid release by descending neurons." }
          ]
        },
        {
          id: "s9-a2d",
          title: "Targeting sensitized circuits: α2δ ligands",
          pages: "395–399",
          blocks: [
            { type: "p", text: "Neurotransmitter release in the pain pathway needs presynaptic depolarization and opening of **N- and P/Q-type** VSCCs: in the **dorsal horn** releasing glutamate, aspartate, **substance P** and **CGRP**; in **thalamus and cortex** mostly glutamate." },
            { type: "steps", title: "Figures 9-14 and 9-15: activity-dependent nociception", items: [
              ["Low release", "Too little transmitter to stimulate postsynaptic receptors: **no pain**."],
              ["Normal release", "A stronger action potential keeps VSCCs open longer: full nociceptive activity and **acute pain**."],
              ["Excessive release", "Strong or repetitive firing causes prolonged channel opening, excessive transmitter release, then molecular, synaptic and structural change including **sprouting**: **central sensitization** and **neuropathic pain**."],
              ["α2δ ligand", "[[drug:gabapentin|Gabapentin]] or [[drug:pregabalin|pregabalin]] binds the **[[target:a2d|α2δ subunit]]**, changes channel conformation, reduces calcium influx and excessive stimulation, in the dorsal horn and in thalamus and cortex."]
            ] },
            { type: "callout", kind: "exam", title: "Use-dependent selectivity (Figure 9-18)", text: "α2δ ligands bind the **open-channel** conformation best, so they block the **most active** channels, those carrying sensitized pain, and leave **closed** channels and normal neurotransmission alone." },
            { type: "callout", kind: "key", title: "Pay for pain early", text: "Early, aggressive treatment might stop pain from **imprinting** itself on the CNS by **intercepting** central sensitization. The same mechanisms that relieve chronic neuropathic pain (SNRIs, α2δ ligands) might prevent progression to permanent pain, and treating painful symptoms in depression, anxiety and fibromyalgia improves the chance of **full remission**. Whether early treatment prevents relapse, resistance or brain atrophy still needs testing." }
          ]
        },
        {
          id: "s9-ancillary",
          title: "Targeting ancillary symptoms in fibromyalgia",
          pages: "399–400",
          blocks: [
            { type: "p", text: "Both α2δ ligands (gabapentin, pregabalin) and SNRIs (duloxetine, milnacipran, venlafaxine, desvenlafaxine) treat fibromyalgia pain. They are rarely studied together, but are often **combined** in practice, with anecdotal **additive** benefit and broader relief because each helps different ancillary symptoms." },
            { type: "table", wide: true, head: ["Symptom", "Options in the book"], rows: [
              ["**Anxiety**", "**α2δ ligands**; SNRIs"],
              ["**Slow-wave sleep** disorder", "**α2δ ligands**; benzodiazepines, hypnotics, [[drug:trazodone|trazodone]]; [[drug:sodium-oxybate|sodium oxybate (GHB)]] with extreme caution"],
              ["**Depression**", "**SNRIs**"],
              ["**Fibro-fog** (executive dysfunction)", "**SNRIs** (raise DA in the DLPFC), especially milnacipran and levomilnacipran, or higher doses of duloxetine, venlafaxine, desvenlafaxine; [[drug:modafinil|modafinil]], [[drug:armodafinil|armodafinil]], [[drug:atomoxetine|atomoxetine]], [[drug:bupropion|bupropion]], and cautiously **stimulants**"],
              ["**Physical and mental fatigue**", "SNRIs, sometimes augmented with **modafinil, stimulants or bupropion**"]
            ] },
            { type: "list", title: "Second-line options for fibromyalgia pain", items: [
              "Sedating drugs for depression: [[drug:mirtazapine|mirtazapine]] and **TCAs**.",
              "The tricyclic muscle relaxant [[drug:cyclobenzaprine|cyclobenzaprine]] (spelled “cyclobenzapine” in the book).",
              "**Sodium oxybate (GHB)**: approved for narcolepsy, enhances slow-wave sleep; accumulating evidence; reserved for **heroic** cases by experts because of **diversion and abuse**.",
              "Anticonvulsants acting on **voltage-gated sodium channels** rather than calcium channels: a different mechanism that may help when α2δ ligands fail."
            ] },
            { type: "update", year: "2025", title: "Sublingual cyclobenzaprine approved for fibromyalgia", text: "**Tonmya**, a once-nightly **sublingual** cyclobenzaprine tablet, was approved by the FDA on August 15, 2025 for fibromyalgia in adults: the first new fibromyalgia drug approved in more than 15 years.", source: "FDA approval reported by Healio, August 15, 2025" }
          ]
        },
        {
          id: "s9-summary",
          title: "Putting it together",
          pages: "400",
          blocks: [
            { type: "list", items: [
              "Nociceptive activity becomes **pain** only when sensory and emotional pathways combine.",
              "Neuropathic pain can arise peripherally or through **central sensitization**, segmental (dorsal horn) or suprasegmental (brain).",
              "**Descending** serotonin and norepinephrine inhibition explains why **SNRIs** relieve pain from depression to fibromyalgia, diabetic neuropathy, low back pain and osteoarthritis.",
              "**VSCCs** explain why **α2δ ligands** relieve diabetic neuropathy, fibromyalgia, painful physical symptoms of depression and anxiety, and shingles.",
              "Mood, anxiety and pain disorders form **one spectrum**."
            ] },
            { type: "case", title: "Clinical vignette: the aching depressive", text: "A 48-year-old with recurrent depression complains mainly of back and joint aches. Exams and imaging are normal. She has improved only partly on escitalopram.", point: "Painful physical symptoms reflect **deficient descending inhibition**. An **SNRI** (e.g., duloxetine) boosts **NE** as well as 5HT; SSRIs are inconsistent for pain. Treating pain is part of reaching **remission**." },
            { type: "case", title: "Clinical vignette: everything hurts, nothing shows", text: "A 39-year-old has widespread pain, tenderness, unrefreshing sleep, exhaustion and “fog.” Rheumatologic workup is negative. Her previous doctor offered opioids.", point: "**Fibromyalgia**, a suprasegmental central sensitization syndrome. Opioids are **not proven effective** here. Use **α2δ ligands** (pain, anxiety, slow-wave sleep) and/or **SNRIs** (pain, mood, fatigue, fibro-fog), often in combination." },
            { type: "case", title: "Clinical vignette: the burning feet", text: "A man with long-standing diabetes has burning feet, and bedsheets touching his skin are painful.", point: "**Diabetic peripheral neuropathic pain** with **allodynia**: segmental central sensitization on top of peripheral injury. **Pregabalin/gabapentin** (use-dependent block of open VSCCs) or **duloxetine**." },
            { type: "case", title: "Clinical vignette: pain after the battle", text: "A soldier barely noticed a shrapnel wound until he reached safety, when it suddenly became excruciating.", point: "**Adaptive descending control**: danger triggered descending opioid, 5HT and NE inhibition; safety brought **descending facilitation** to force rest." }
          ]
        }
      ]
    }
  ]
});
