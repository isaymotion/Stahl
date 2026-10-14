/* Chapter 12 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 12 (pp. 486–537).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch12", "guide", {
  intro: "Dementia is exploding in number while disease-modifying treatment has been elusive. This chapter first sorts out **MCI** from dementia and the four major causes: **Alzheimer disease, vascular dementia, Lewy body dementias** and **frontotemporal dementia**, with mixed pathology being the rule. It then explains the **amyloid cascade hypothesis** (APP, secretases, Aβ42, APOE4) and the **three stages** of AD defined by biomarkers. The treatment half follows Stahl’s network approach: each symptom (memory, psychosis, agitation) arises from a different damaged circuit and is treated at a different node. It covers the **acetylcholine** system and the **cholinesterase inhibitors**, **memantine**, the controversy over **D2 blockers**, **pimavanserin** for psychosis, **brexpiprazole** and **dextromethorphan–bupropion** for agitation, and depression, **pseudobulbar affect** and **apathy**. The book went to press just before the first anti-amyloid antibody approvals, so this chapter carries more update boxes than any so far.",
  objectives: [
    "Distinguish **dementia** from **MCI** and subjective memory complaints, and know MCI’s conversion rates.",
    "Compare the clinical and imaging features of **AD, vascular dementia, DLB/PDD** and **FTD** (Tables 12-2 and 12-3), including the **1-year rule** and the PD–AD spectrum.",
    "Describe **APP processing** (α- vs β/γ-secretase), the **Aβ isoforms**, **APOE** risk and the arguments for and against the **amyloid cascade hypothesis**.",
    "Outline the **three stages** of AD and the biomarkers of **amyloidosis** (amyloid PET, low CSF Aβ) versus **neurodegeneration** (CSF tau, NfL, FDG PET, MRI).",
    "Describe **ACh** synthesis (ChAT), breakdown (**AChE, BuChE**), receptors (M1–M5; **α7, α4β2** nicotinic) and the basal forebrain pathways.",
    "Compare **donepezil, rivastigmine** and **galantamine**, and explain why cholinesterase inhibitors lose efficacy as AD progresses.",
    "Explain why **memantine**, a low-affinity, voltage-dependent **open-channel** NMDA antagonist, can quiet excitotoxicity without blocking learning.",
    "Distinguish **agitation** from **psychosis** in dementia, and explain the **D2 blocker** boxed-warning dilemma.",
    "Explain the **psychosis network** (loss of GABA interneurons, 5HT2A, glutamate, dopamine) and the rationale for **pimavanserin**.",
    "Describe the **top-down/bottom-up** agitation network and the mechanisms of **brexpiprazole** and **dextromethorphan–bupropion**.",
    "Outline the management of **depression, pseudobulbar affect** and **apathy** in dementia, and the primacy of non-drug approaches."
  ],
  parts: [
    {
      title: "Dementia: diagnosis and causes",
      sections: [
        {
          id: "s12-mci",
          title: "Dementia versus mild cognitive impairment",
          pages: "487–488",
          blocks: [
            { type: "p", text: "**Dementia** means cognitive and neuropsychiatric symptoms severe enough to **interfere with usual activities**, with a definite **decline** from prior functioning, not explained by delirium or a major psychiatric disorder (Table 12-1). Impairment, documented by testing or an informant, involves at least **two** of: acquiring or retaining new information, reasoning, visuospatial ability, and personality or behavior." },
            { type: "p", text: "**Mild cognitive impairment (MCI)** is mild cognitive decline that does **not yet** significantly affect activities of daily living. It is often a precursor of dementia but is **not** dementia, and where MCI ends and normal aging begins is debated. About **15–20%** of people over 65 have MCI." },
            { type: "list", title: "The four common subjective memory complaints of aging", items: [
              "Remembering **names**",
              "Finding the right **word**",
              "Remembering where **objects** are",
              "**Concentrating**"
            ] },
            { type: "p", text: "When these occur without dementia, depression, anxiety, a sleep/wake or pain disorder, or ADHD, many experts call them MCI. Others reserve the term for the earliest stage of AD (“MCI due to AD,” “prodromal AD”). Without biomarkers it is not possible to tell who will progress." },
            { type: "table", caption: "How often MCI progresses (clinical grounds alone)", head: ["Time frame", "Outcome"], rows: [
              ["Each year", "**6–15%** convert to dementia"],
              ["3 years", "About **35%** develop AD (Figure 12-1)"],
              ["5 years", "About **half** meet dementia criteria"],
              ["10 years or autopsy", "Up to **80%** prove to have AD"]
            ] },
            { type: "callout", kind: "pearl", title: "Look for the reversible", text: "MCI is often, but not always, a prodrome of dementia. Pursue **reversible and treatable** causes vigorously, such as depression and sleep disorders." }
          ]
        },
        {
          id: "s12-ad",
          title: "Alzheimer disease",
          pages: "488–490",
          blocks: [
            { type: "p", text: "More than **35 million** people worldwide have dementia. **Alzheimer disease (AD)** is the most common cause: an estimated **5.4 million** Americans, expected to exceed 14 million by 2050 without disease-modifying treatment." },
            { type: "list", title: "The three pathological hallmarks of AD", items: [
              "**Amyloid-β (Aβ)** aggregated into **plaques**",
              "**Neurofibrillary tangles** of **hyperphosphorylated tau**",
              "Substantial **neuronal loss**, often visible to the naked eye at autopsy, hitting limbic and cortical regions and especially **cholinergic** neurons"
            ] },
            { type: "compare", items: [
              { title: "FDG PET (glucose metabolism)", color: "mech", points: ["Normal brain: robust metabolism", "MCI: reduced in posterior **temporo-parietal** cortex", "AD: posterior hypometabolism more and more evident", "Reflects accumulating **neurodegeneration**; informative but **not diagnostic**"] },
              { title: "MRI (structure)", color: "pharm", points: ["**Medial temporal** atrophy", "Even mild AD: **20–30%** loss of entorhinal and **15–25%** loss of hippocampal volume", "Ventricular enlargement, thinner cortex", "Informative but **not diagnostic**"] }
            ] },
            { type: "callout", kind: "key", title: "Too late by the time of symptoms", text: "By the time even mild dementia appears, brain damage may already be **extensive and irreversible**. This is the central problem for disease-modifying treatment." }
          ]
        },
        {
          id: "s12-vascular",
          title: "Vascular dementia",
          pages: "490–492",
          blocks: [
            { type: "p", text: "**Vascular dementia** is the **second** most common dementia (about **20%** of cases). It is the brain’s manifestation of cardiovascular disease: reduced cerebral blood flow from atherosclerosis, infarcts, white-matter changes, microbleeds and **Aβ deposition in vessel walls**. About **30%** of elderly stroke patients develop post-stroke cognitive impairment or dementia. Risk factors mirror heart disease: **hypertension, smoking, heart disease, high cholesterol, diabetes**." },
            { type: "compare", items: [
              { title: "AD on FDG PET", color: "mech", points: ["Posterior **temporo-parietal** hypometabolism"] },
              { title: "“Pure” vascular dementia on FDG PET", color: "case", points: ["Hypometabolism in **sensorimotor and subcortical** areas", "Relative sparing of association cortex", "MRI: increasing **white-matter hyperintensities**"] }
            ] },
            { type: "callout", kind: "key", title: "AD and vascular disease feed each other", text: "Many AD patients also have vascular pathology (Figure 12-7). Aβ deposited in vessels raises vascular risk, and a leaky **blood–brain barrier** may increase Aβ production or reduce its clearance." }
          ]
        },
        {
          id: "s12-lbd",
          title: "Lewy body dementias",
          pages: "492–494",
          blocks: [
            { type: "p", text: "**Dementia with Lewy bodies (DLB)** and **Parkinson’s disease dementia (PDD)** together are the **Lewy body dementias (LBD)**, about **10–15%** of dementia. Both are **synucleinopathies**: **α-synuclein** aggregates into oligomers and then **Lewy bodies** and **Lewy neurites**, which may also contain neurofilaments, parkin and ubiquitin. Only about **20%** have pure LBD; about **80%** also have other pathology, especially AD." },
            { type: "table", caption: "Table 12-4: diagnosing DLB (dementia must be present)", head: ["Category", "Features"], rows: [
              ["**Core**", "**Fluctuating** attention and concentration; recurrent well-formed **visual hallucinations**; spontaneous **parkinsonism**"],
              ["**Suggestive**", "**REM sleep behavior disorder**; **severe neuroleptic sensitivity**; low basal ganglia **DAT** uptake on SPECT/PET"],
              ["Supportive", "Repeated falls, transient loss of consciousness, other hallucinations, severe autonomic dysfunction, depression, delusions, syncope"],
              ["Less likely if", "Cerebrovascular disease; another illness explains the picture; parkinsonism first appears only at severe dementia"]
            ] },
            { type: "list", title: "Parkinson’s disease dementia", items: [
              "About **80%** of PD patients develop cognitive dysfunction; average time from PD diagnosis to dementia is about **10 years**.",
              "Death follows on average about **4 years** after PDD onset; MCI is often the harbinger.",
              "Symptoms: memory (including recognition), executive dysfunction, attention deficits, altered visual perception.",
              "Degeneration in the **thalamus, caudate and hippocampus**; dementia severity tracks α-synuclein (and amyloid and tau) in **limbic** regions."
            ] },
            { type: "compare", title: "The 1-year rule (Figure 12-10)", items: [
              { title: "PDD", color: "drug", points: ["**Motor symptoms precede dementia by ≥ 1 year**"] },
              { title: "DLB", color: "dx", points: ["Dementia comes **at the same time as, or before**, parkinsonism"] }
            ] },
            { type: "callout", kind: "key", title: "The PD–AD spectrum", text: "Up to **70%** of AD patients eventually show parkinsonism, and Lewy bodies are found in about **30%** of AD brains. About half of PD patients develop dementia, often with AD-type pathology. Some propose that AD and PD sit at opposite ends of a spectrum with **DLB in between**. Where a patient lands would depend on the mix of pathological proteins and whether the damage is cortical or subcortical. Many consider the 1-year rule arbitrary for treatment purposes." },
            { type: "callout", kind: "caution", title: "Neuroleptic sensitivity", text: "**Severe sensitivity to D2 blockers** is a suggestive feature of DLB. Think twice before using a dopamine blocker for hallucinations in a patient with fluctuating cognition and parkinsonism." }
          ]
        },
        {
          id: "s12-ftd",
          title: "Frontotemporal dementia and mixed dementia",
          pages: "494–496",
          blocks: [
            { type: "p", text: "**Frontotemporal dementia (FTD)** is about as common as LBD, with an average onset at **50–65** years. It has four subtypes: the **behavioral variant (bvFTD)**, the most common, and three **primary progressive aphasias** (semantic, non-fluent and logopenic variants)." },
            { type: "table", caption: "Table 12-5: behavioral variant FTD", head: ["Domain", "Features"], rows: [
              ["Personality", "Progressive **disinhibition**, **apathy**, loss of sympathy and empathy"],
              ["Behavior", "**Hyperorality**; perseverative or compulsive behaviors; often **unaware** of inappropriate behavior"],
              ["Cognition", "Later deficits; **cued memory and visuospatial** abilities relatively spared; no rapid memory loss as in AD"],
              ["Atrophy", "Prefrontal cortex, insula, anterior cingulate, striatum, thalamus; **non-dominant** hemisphere more affected"]
            ] },
            { type: "p", text: "**Frontotemporal lobar degeneration (FTLD)** is an umbrella term for disorders with varied clinical pictures, genetics and pathology. Tau tangles are a hallmark of AD, but mutations in the tau gene (**MAPT**) cause forms of **FTLD**, not AD. They typically shift the ratio of **3R and 4R** tau isoforms (Figure 12-13). FTD can often be told from AD by the **absence of AD biomarkers**." },
            { type: "callout", kind: "caution", title: "Reading the FTD prevalence figure", text: "The book gives FTD a “worldwide prevalence of 3–26% in individuals aged 65 and older.” That range only makes sense as FTD’s **share of dementia cases** in older adults, not the proportion of all people over 65 (all-cause dementia affects only about 1 in 10 of them)." },
            { type: "table", caption: "Table 12-3: imaging across the four dementias", head: ["", "AD", "Vascular", "LBD", "FTD"], rows: [
              ["MRI", "Medial temporal atrophy", "Medial temporal atrophy + **white-matter** abnormalities", "Medial temporal atrophy", "Medial temporal atrophy"],
              ["FDG PET hypometabolism", "**Temporo-parietal**", "**Fronto-subcortical** networks", "**Parieto-occipital** and temporo-parietal", "**Frontotemporal**"]
            ], wide: true },
            { type: "callout", kind: "key", title: "Mixed dementia is the rule", text: "Pure single-pathology dementia is the **exception**. In one community study **56%** of dementia patients had multiple pathologies (AD plus LBD, vascular injury or both) and were nearly **three times** more likely to develop dementia than those with one pathology. Another found Lewy bodies or vascular injury in **59–68%** of brains with AD pathology. Many patients may eventually need more than one kind of treatment." }
          ]
        }
      ]
    },
    {
      title: "Amyloid and the stages of Alzheimer disease",
      sections: [
        {
          id: "s12-amyloid",
          title: "The amyloid cascade hypothesis",
          pages: "496–499",
          blocks: [
            { type: "p", text: "The **amyloid cascade hypothesis** says toxic **Aβ** accumulates into plaques, leading to tau hyperphosphorylation, tangles, synaptic dysfunction, neuron loss and dementia, much as cholesterol deposits drive atherosclerosis. The corollary: block the cascade and AD might be **prevented, halted or reversed**." },
            { type: "compare", title: "Figure 12-16: two ways to cut amyloid precursor protein (APP)", items: [
              { title: "Non-amyloidogenic pathway", color: "clin", points: ["**α-secretase** cuts **inside** the Aβ sequence", "Aβ **cannot** be formed"] },
              { title: "Amyloidogenic pathway", color: "case", points: ["**β-secretase** cuts at the amino border of Aβ", "Then **γ-secretase** releases Aβ peptides of **38–43** amino acids"] }
            ] },
            { type: "table", caption: "Figure 12-17: Aβ isoforms", head: ["Isoform", "Frequency", "Aggregation"], rows: [
              ["**Aβ40**", "Most common", "Least prone"],
              ["**Aβ42**", "Less common", "More prone; considered the **more toxic** form"],
              ["**Aβ43**", "Rare", "**Most** prone"]
            ] },
            { type: "table", caption: "Table 12-6: disease-modifying strategies tried", head: ["Targeting Aβ", "Targeting tau"], rows: [
              ["Anti-amyloid antibodies; active Aβ immunization", "Anti-tau antibodies; active tau immunization"],
              ["β-secretase and γ-secretase inhibitors; α-secretase promoters", "Tau aggregation inhibitors; microtubule stabilizers"],
              ["Aβ aggregation inhibitors", "Tau phosphorylation inhibitors"]
            ], rowHeads: false, note: "As of the book, these approaches had been **ineffective, unsafe or both**." },
            { type: "table", caption: "Figure 12-18: APOE and AD risk", head: ["Allele", "Effect on AD risk"], rows: [
              ["**APOE2**", "Some **protection**"],
              ["**APOE3**", "Most common; intermediate risk"],
              ["**APOE4**", "One copy: about **3×** risk; two copies: about **10×** risk"]
            ], note: "About **15%** of the general population carry APOE4, but **44%** of people with AD do. ApoE transports cholesterol for synapse and dendrite formation, LTP and axon guidance, and is linked to Aβ metabolism and deposition. Mutations in several AD genes also push APP toward the amyloidogenic pathway, supporting the hypothesis." },
            { type: "callout", kind: "mnemonic", title: "α saves, β–γ makes", text: "**α**-secretase cuts through the middle of Aβ (**a**voids amyloid). **β then γ** builds it. Of the isoforms, **42** is the troublemaker (and 43 is worse)." }
          ]
        },
        {
          id: "s12-status",
          title: "Is the amyloid hypothesis right?",
          pages: "499",
          blocks: [
            { type: "p", text: "For more than 30 years the hypothesis drove a search for anti-Aβ treatments. Many drugs engaged their Aβ targets, but **none had shown clinical benefit** when the book was written." },
            { type: "compare", items: [
              { title: "Skeptics: Aβ is a “tombstone”", color: "case", points: ["Aβ may be an **epiphenomenon** forming alongside neurodegeneration", "Removing tombstones does not stop people dying; removing Aβ may not stop neurons degenerating"] },
              { title: "Proponents: treatment came too late", color: "clin", points: ["Trials enrolled patients with **MCI or AD**, after irreversible damage", "Once started, the cascade (oxidative stress, inflammation, tangles, synaptic loss) may become **self-perpetuating**", "Anti-Aβ treatment must start at the **earliest** sign of Aβ, before symptoms"] }
            ] },
            { type: "update", year: "2021", title: "First anti-amyloid antibody approved, then withdrawn", text: "**Aducanumab** (Aduhelm) received FDA **accelerated approval** on June 7, 2021, based on reducing amyloid plaque, amid controversy over whether clinical benefit was shown. Biogen **discontinued** it on January 31, 2024, stating the decision was not related to safety or efficacy.", source: "Drugs.com approval history; Biogen, January 31, 2024" },
            { type: "update", year: "2023", title: "Lecanemab: the first traditional approval", text: "**Lecanemab** (Leqembi), an antibody against Aβ protofibrils, received accelerated approval on January 6, 2023 and **traditional approval** in July 2023 for **early AD** (MCI or mild dementia with confirmed amyloid). Later approvals added IV maintenance dosing (January 2025), a **subcutaneous autoinjector** for maintenance (Leqembi Iqlik, August 2025) and, in July 2026, for starting treatment. The boxed warning covers **ARIA** (amyloid-related imaging abnormalities: brain edema and microbleeds, occasionally fatal), with higher risk in **APOE4** carriers, who should be tested before treatment.", source: "Drugs.com approval history; Eisai/Biogen, July 2026" },
            { type: "update", year: "2024", title: "Donanemab approved", text: "**Donanemab** (Kisunla), an antibody against plaque-deposited Aβ, was approved on July 2, 2024 for **early symptomatic AD**. It is given IV every 4 weeks, can be **stopped once plaque is cleared**, and carries a boxed warning for **ARIA**. A July 2025 label update changed the dosing titration.", source: "Drugs.com approval history; Eli Lilly, July 2024 and July 2025" },
            { type: "callout", kind: "key", title: "What the antibodies mean for the hypothesis", text: "The approved antibodies clear amyloid and **modestly slow** decline in early AD. That supports proponents’ “treat early” argument but does not stop progression. ARIA risk, MRI monitoring and biomarker confirmation of amyloid are now part of practice." }
          ]
        },
        {
          id: "s12-stages",
          title: "The three stages of Alzheimer disease and their biomarkers",
          pages: "499–503",
          blocks: [
            { type: "flow", title: "Figure 12-19: three stages of AD", steps: [
              ["Stage 1: presymptomatic (asymptomatic amyloidosis)", "Cognition intact; **amyloid PET positive**, **CSF Aβ low**", "mech"],
              ["Stage 2: MCI (prodromal AD, MCI due to AD)", "Episodic memory deficits **plus neurodegeneration**: ↑ CSF tau, CSF/plasma **NfL**, atrophy on MRI, FDG PET hypometabolism", "pharm"],
              ["Stage 3: dementia", "Severe deficits; where diagnosis and symptomatic treatment usually **begin**, long after true onset", "case"]
            ], vertical: true },
            { type: "list", title: "Stage 1: the fuse may be lit", items: [
              "Aβ is **rarely** found under age 50; most cognitively normal elderly have none.",
              "About **a quarter** of cognitively normal elderly are Aβ-positive: presymptomatic AD.",
              "CSF Aβ is **low** because Aβ is deposited in the brain instead of leaving it.",
              "About **25–35%** of people with brain Aβ test normal cognitively (Figure 12-21); some think they would all develop dementia if they lived long enough."
            ] },
            { type: "steps", title: "Figure 12-22: how tau goes wrong", items: [
              ["Normal tau", "Binds and **stabilizes microtubules** in axons, the tracks on which vesicles travel to the synapse."],
              ["Hyperphosphorylated tau", "Lets go of microtubules, which destabilize: **synaptic dysfunction**."],
              ["Tangles", "Phosphorylated tau forms **paired helical filaments** that aggregate into **neurofibrillary tangles**; CSF tau rises as neurons die."]
            ] },
            { type: "list", title: "Stage 2 numbers", items: [
              "About **half** of MCI patients have **no** Aβ: their MCI has another cause (depression, another dementia).",
              "Almost **100%** of clinically probable AD shows heavy Aβ deposition.",
              "About half of **Aβ-positive** MCI patients progress to dementia within a year, and **80%** within 3 years.",
              "Hypometabolic FDG PET in MCI predicts progression in **80–90%** within 1–1.5 years.",
              "It is **neurodegeneration**, not amyloidosis itself, that is thought to drive progression from stage 1 to 2 to 3."
            ] },
            { type: "p", text: "To diagnose **probable AD** clinically, the patient must meet all-cause dementia criteria, with **insidious onset**, clearly worsening cognition, and either an **amnestic** presentation (learning and recall) or a **non-amnestic** one (language, visuospatial, executive). “Probable AD with evidence of the pathophysiological process” adds positive biomarkers of amyloidosis or downstream neurodegeneration." },
            { type: "callout", kind: "exam", title: "Biomarker direction", text: "Amyloidosis: **amyloid PET ↑**, **CSF Aβ ↓**. Neurodegeneration: **CSF tau ↑**, **NfL ↑**, **FDG PET ↓** (temporo-parietal), **MRI atrophy** (hippocampus, entorhinal cortex)." },
            { type: "update", year: "2025", title: "A blood test for amyloid", text: "On May 16, 2025 the FDA cleared the first blood test to aid AD diagnosis, the **Lumipulse G pTau217/β-amyloid 1-42 plasma ratio**, for adults **55 and older with cognitive symptoms** in specialty care. In its study about 92% of positives had amyloid confirmed by PET or CSF, and about 97% of negatives were amyloid-negative. It is **not** for screening or for use as a stand-alone test.", source: "FDA via HMP Global, May 19, 2025" },
            { type: "update", year: "2024", title: "Revised criteria define AD biologically", text: "In 2024 an Alzheimer’s Association workgroup published revised criteria that define AD by **core biomarkers** of amyloid and tau (amyloid PET, CSF, or validated plasma tests such as p-tau217), with separate biological and clinical staging. The proposal is influential but **not universally accepted**, particularly for diagnosing cognitively normal people.", source: "Alzheimer’s Association, June 2024 (Jack et al., Alzheimer’s & Dementia)" }
          ]
        }
      ]
    },
    {
      title: "Treating memory and cognition",
      sections: [
        {
          id: "s12-networks",
          title: "Symptom networks in dementia",
          pages: "503–505",
          blocks: [
            { type: "p", text: "The approved drugs for AD treat **symptoms**; they do not halt neurodegeneration. As hopes for disease modification faded, drug development **pivoted back** to symptoms, to relieve patients and caregivers. Stahl’s principle: each symptom comes from damage to a **particular network**, whatever the cause of the damage. So psychosis can appear in dementia as in schizophrenia when the same circuit fails, and visual versus auditory hallucinations, delusions, memory loss and agitation each reflect different cortical damage." },
            { type: "table", caption: "Figure 12-23: three treatable symptom networks", head: ["Network", "Nodes targeted", "Drugs (book)"], rows: [
              ["**Memory**", "Acetylcholine and glutamate", "**Cholinesterase inhibitors**; NMDA antagonist **memantine**"],
              ["**Psychosis**", "Serotonin node (and dopamine node)", "5HT2A antagonist **pimavanserin**"],
              ["**Agitation**", "Multimodal: NE, 5HT, DA and glutamate", "**Brexpiprazole** (α1, α2, D2, 5HT1A, 5HT2A); **dextromethorphan–bupropion** (NMDA)"]
            ], wide: true },
            { type: "callout", kind: "analogy", title: "Nodes in a network", text: "Each network links glutamate, GABA, serotonin and dopamine neurons at **nodes** (synapses). A drug acting at one node changes not only the neuron it touches but the **whole network** downstream, which is why psychosis can be treated at the serotonin node as well as the dopamine node." }
          ]
        },
        {
          id: "s12-ach",
          title: "Acetylcholine: synthesis, receptors and pathways",
          pages: "505–509",
          blocks: [
            { type: "steps", title: "Making and breaking acetylcholine (Figures 12-24, 12-25)", items: [
              ["Precursors", "**Choline** (diet and neuronal sources) plus **acetyl coenzyme A** (made from glucose in mitochondria)."],
              ["Synthesis", "[[target:chat|Choline acetyltransferase (ChAT)]] joins them into ACh."],
              ["Storage", "[[target:vacht|VAChT]] packages ACh into vesicles."],
              ["Destruction", "[[target:ache|AChE]] (or [[target:buche|BuChE]]) converts ACh to choline. ACh is destroyed too fast to be taken back up intact."],
              ["Recycling", "**Choline** returns to the terminal via the [[target:cht|choline transporter]]."]
            ] },
            { type: "compare", items: [
              { title: "Acetylcholinesterase (AChE)", color: "mech", points: ["The **key** enzyme at cholinergic synapses", "High in brain, especially neurons receiving ACh", "Also gut, skeletal muscle, red cells, lymphocytes, platelets"] },
              { title: "Butyrylcholinesterase (BuChE)", color: "pharm", points: ["“Pseudocholinesterase” / nonspecific cholinesterase", "In brain mainly in **glia**; takes over if ACh diffuses to glia", "Also gut, plasma, muscle, placenta, liver; possibly in **plaques**", "Separate gene and substrate pattern"] }
            ] },
            { type: "table", caption: "Cholinergic receptors", head: ["Receptor", "Type", "Location and role"], rows: [
              "Muscarinic (G-protein-linked; blocked by atropine, scopolamine)",
              ["**M1**", "Stimulatory, postsynaptic", "Key to **memory** in hippocampus and neocortex; agonism pro-cognitive"],
              ["**M3, M5**", "Stimulatory, postsynaptic", ""],
              ["**M2**", "Inhibitory, presynaptic **autoreceptor**", "Also heteroreceptors that brake GABA and glutamate release"],
              ["**M4**", "Inhibitory, presynaptic autoreceptor (also postsynaptic)", "Regulates VTA dopamine to **reduce psychosis**; heteroreceptor role too"],
              "Nicotinic (ligand-gated, excitatory, fast; blocked by curare)",
              ["**α4β2**", "Postsynaptic", "Regulates **dopamine release in the nucleus accumbens**; main target of nicotine (Chapter 13)"],
              ["**α7**", "Pre- or postsynaptic", "Postsynaptic: **cognition** in the PFC. Presynaptic: **feed-forward** ACh release and heteroreceptors that boost DA and glutamate release"]
            ], wide: true },
            { type: "p", text: "Nicotinic receptors, like GABA-A and NMDA receptors, have **positive allosteric modulator** sites that increase how often the channel opens when ACh is bound (Figure 12-30); galantamine is one such PAM. [[drug:xanomeline|Xanomeline]], an M4/M1 agonist, reduces VTA dopamine firing and could in theory help **both psychosis and cognition** in AD." },
            { type: "compare", title: "Cholinergic pathways (Figures 12-31, 12-32)", items: [
              { title: "From the brainstem", color: "found", points: ["To PFC, **basal forebrain**, thalamus, hypothalamus, amygdala, hippocampus"] },
              { title: "From the basal forebrain", color: "mech", points: ["To PFC, amygdala and hippocampus", "Particularly important for **memory**"] }
            ] },
            { type: "callout", kind: "exam", title: "Commonly tested", text: "ACh = choline + acetyl-CoA via **ChAT**. AChE (neurons) and BuChE (**glia**). M1/M3/M5 excitatory; **M2/M4** inhibitory autoreceptors. **α4β2** = accumbens DA (nicotine); **α7** = PFC cognition and feed-forward release." }
          ]
        },
        {
          id: "s12-ache",
          title: "Cholinesterase inhibitors",
          pages: "509–515",
          blocks: [
            { type: "flow", title: "Figure 12-33: why cholinesterase inhibitors help early and fade later", steps: [
              ["Normal", "Basal forebrain (**nucleus basalis**) projects to neocortex and hippocampus", "clin"],
              ["Early AD / MCI", "Cholinergic **inputs lost**, but **postsynaptic targets remain**", "pharm"],
              ["Cholinesterase inhibitor", "More ACh at surviving receptors restores some function (like **levodopa** in PD)", "drug"],
              ["Later AD", "Cortical and hippocampal neurons die, so the **targets are lost** and the drugs lose effect", "case"]
            ] },
            { type: "p", text: "More ACh is proven to help cognition in AD, sometimes improving memory but more often **slowing decline** by holding current function. Peripheral AChE inhibition, mainly in the gut, causes **GI side effects**." },
            { type: "table", caption: "The three cholinesterase inhibitors", head: ["Drug", "Mechanism", "Key points"], rows: [
              ["[[drug:donepezil|Donepezil]]", "**Reversible, long-acting, selective AChE** inhibitor; no BuChE inhibition", "Easy to dose; mostly **transient GI** side effects"],
              ["[[drug:rivastigmine|Rivastigmine]]", "**Pseudoirreversible** (reverses over hours), intermediate-acting; inhibits **AChE and BuChE**; possibly selective for cortical and hippocampal AChE", "BuChE inhibition in glia may matter more as **gliosis** grows; oral form has more GI effects; the **transdermal patch** greatly reduces them"],
              ["[[drug:galantamine|Galantamine]]", "AChE inhibitor **plus nicotinic PAM**", "From snowdrops and daffodils; dual action is theoretically synergistic but **not proven** clinically superior"]
            ], wide: true },
            { type: "callout", kind: "caution", title: "Rivastigmine and BuChE", text: "The book calls rivastigmine “selective for AChE over BuChE” and in the next sentence says it also inhibits BuChE. Rivastigmine is a **dual AChE and BuChE inhibitor**; that is its distinguishing feature versus donepezil, which spares BuChE." },
            { type: "callout", kind: "mnemonic", title: "D-R-G", text: "**D**onepezil = **D**edicated to AChE (reversible, long). **R**ivastigmine = **R**eaches both (AChE + BuChE; patch). **G**alantamine = **G**ives a nicotinic boost (PAM)." },
            { type: "update", year: "2022", title: "A weekly donepezil patch", text: "**Adlarity**, a once-weekly **donepezil transdermal system**, was approved in March 2022 for Alzheimer-type dementia; it was later listed as discontinued.", source: "Drugs.com approval history" }
          ]
        },
        {
          id: "s12-memantine",
          title: "Memantine and glutamate",
          pages: "515–521",
          blocks: [
            { type: "p", text: "Cholinergic loss is not the only problem: **glutamate** circuits degenerate too. Plaques and tangles may make glutamate neurons **leak** glutamate, partly by killing the GABA interneurons that normally restrain them." },
            { type: "flow", title: "Figure 12-37: glutamate at the NMDA receptor in AD", steps: [
              ["Resting state", "NMDA channel blocked by **magnesium**", "found"],
              ["Normal transmission", "Coincidence of **depolarization** (via AMPA), **glutamate** and **glycine** opens the channel: LTP, learning, memory", "clin"],
              ["Alzheimer excitotoxicity", "Steady glutamate **leak** blurs signaling (memory problems); higher tonic levels cause calcium overload, **free radicals**, dendrite and neuron death", "case"],
              ["With memantine", "Memantine plugs the open channel: a **new resting state** despite the leak", "drug"],
              ["Phasic burst", "Strong depolarization **expels** memantine, so normal transmission and learning continue", "mech"]
            ], vertical: true },
            { type: "p", text: "Blocking NMDA receptors strongly would impair memory and plasticity, and could cause a schizophrenia-like state. [[drug:memantine|Memantine]] avoids this. It is an **uncompetitive, open-channel** NMDA antagonist with **low-to-moderate affinity**, **voltage dependence** and **fast on/off** kinetics, binding at the magnesium site only when the channel is open." },
            { type: "callout", kind: "analogy", title: "Artificial magnesium", text: "Memantine works like **artificial magnesium**: stronger than physiological magnesium (which tonic glutamate overwhelms) but weaker than **PCP or ketamine**, so the glutamate system is never shut down. No psychotomimetic effects and no block of new learning: having your cake and eating it too." },
            { type: "list", items: [
              "Also has **σ** binding and weak **5HT3** antagonism (relevance unclear).",
              "Usually given **with** a cholinesterase inhibitor for additive effects, since the mechanisms differ."
            ] },
            { type: "callout", kind: "caution", title: "Uncompetitive, not noncompetitive", text: "The text correctly calls memantine an **uncompetitive** open-channel blocker; the Figure 12-37D and 12-38 captions say “noncompetitive.” An uncompetitive antagonist needs the agonist to open the channel first, which is why memantine’s block depends on use and voltage." }
          ]
        }
      ]
    },
    {
      title: "Behavioral symptoms of dementia",
      sections: [
        {
          id: "s12-defs",
          title: "Defining agitation and psychosis",
          pages: "521–523",
          blocks: [
            { type: "p", text: "Dementia also brings **apathy, depression, aggression, sleep problems, anxiety, irritability, appetite changes, aberrant motor behavior, delusions, disinhibition, hallucinations** and euphoria (Table 12-7), each hypothetically from a separate network. **Agitation**, especially physical aggression, raises the most alarm." },
            { type: "compare", items: [
              { title: "Agitation (IPA definition)", color: "case", points: ["In a patient with cognitive impairment or dementia", "Behavior consistent with **emotional distress**", "**Excessive motor activity, verbal or physical aggression**", "Causes excess disability; not solely due to another disorder"] },
              { title: "Dementia-related psychosis", color: "dx", points: ["**Delusions or hallucinations** after the onset of cognitive decline", "Lasting **at least 1 month**", "Not better explained by delirium or other mental illness"] }
            ] },
            { type: "callout", kind: "key", title: "Why the distinction matters", text: "Agitation and psychosis are easily confused but arise from **different networks** and now have **different treatments**: psychosis drugs are not proven for agitation, and vice versa. Hallucinations and paranoid delusions can also **trigger** agitation, so some patients need treatment for both." },
            { type: "table", caption: "Table 12-8 (selected): Cohen–Mansfield Agitation Inventory", head: ["Physical / aggressive", "Physical / non-aggressive", "Verbal / aggressive", "Verbal / non-aggressive"], rows: [
              ["Hitting, kicking, biting, pushing, throwing, spitting", "Pacing, wandering, disrobing, hoarding, repetitive mannerisms", "Screaming, cursing, verbal sexual advances", "Repetitive questions, complaining, negativism, constant requests for attention"]
            ], rowHeads: false, wide: true },
            { type: "list", title: "Before any drug: look for reversible precipitants", items: [
              "**Pain**", "**Nicotine withdrawal**", "**Medication side effects**", "Undiagnosed medical or neurological illness", "An environment that is **too stimulating or not stimulating enough**"
            ], cols: true },
            { type: "list", title: "Table 12-9: non-drug options", items: [
              "Address unmet needs (hunger, thirst, pain, boredom)", "Modify environmental and routine stressors", "Caregiver support and training", "Behavior modification, problem solving, distraction", "Exercise and activities for pent-up energy", "Avoid triggers; increase social engagement", "Relaxation, reminiscence, music, aroma and pet therapy"
            ], cols: true }
          ]
        },
        {
          id: "s12-d2",
          title: "Dopamine blockers: the controversy",
          pages: "523–524",
          blocks: [
            { type: "p", text: "When the book was written, **no drug was approved** for psychosis or agitation in dementia, and both were often treated off-label with D2 blockers. Few topics in dementia care are more contentious." },
            { type: "compare", items: [
              { title: "Against D2 blockers", color: "case", points: ["Risk of **“chemical straitjacket”** over-sedation", "**Boxed warning**: increased **stroke and death**", "Deaths from stroke, thromboembolism, **falls**, QT-related cardiac events, **pneumonia** (aspiration, worse with other sedatives)", "Modest efficacy in controlled trials with high placebo response"] },
              { title: "For cautious use", color: "clin", points: ["Small trials and clinical experience often find **more benefit** than large trials", "**Not treating** also has risks: early institutionalization, danger to the patient and others", "After weighing risks and benefits: **risperidone, olanzapine, aripiprazole** and **haloperidol** (but not quetiapine or others)"] }
            ] },
            { type: "callout", kind: "pearl", title: "The way out", text: "The bind between needing to treat and the boxed warning drove a search for drugs that target **only** the psychosis network (pimavanserin) or **only** the agitation network (brexpiprazole, dextromethorphan–bupropion)." }
          ]
        },
        {
          id: "s12-psychosis",
          title: "Dementia-related psychosis and pimavanserin",
          pages: "524–528",
          blocks: [
            { type: "table", caption: "Table 12-10: psychosis prevalence ranges (%)", head: ["", "AD", "Vascular", "DLB", "PDD", "FTD"], rows: [
              ["Delusions", "10–39", "14–27", "40–57", "28–50", "2.3–6"],
              ["Hallucinations", "11–17", "5–14", "**55–78**", "32–63", "1.2–13"]
            ], wide: true, note: "Overall psychosis ranges from about **10%** (FTD) to **75%** (DLB). More than 2 million Americans are estimated to have dementia-related psychosis." },
            { type: "compare", title: "Figure 12-40: psychosis in AD vs LBD", items: [
              { title: "Alzheimer disease", color: "mech", points: ["**Delusions** more common", "Especially **persecutory** (theft, infidelity) and **misidentification** (sometimes seen as a memory deficit)"] },
              { title: "Lewy body dementias", color: "dx", points: ["**Hallucinations** more common", "Especially **visual**"] }
            ] },
            { type: "list", title: "Parkinson’s disease psychosis", items: [
              "Psychosis often heralds dementia in PD, and vice versa.",
              "Hallucinations in **50–70%** with PDD vs about 10% with PD without dementia.",
              "About **85%** have hallucinations only, 7.5% both, 7.5% delusions only.",
              "Hallucination types: visual 62.5%, auditory 45%, tactile 22.5%, “minor” (passage, presence) 45%."
            ] },
            { type: "callout", kind: "caution", title: "Persecution, not “misinformation”", text: "The Figure 12-40 caption says AD delusions are “of persecution or misinformation”; the figure and text make clear the second type is **misidentification**." },
            { type: "flow", title: "Figure 12-42: the psychosis network in dementia", steps: [
              ["Damage", "Plaques, tangles, Lewy bodies or **strokes** destroy some pyramidal neurons and **GABA interneurons**", "case"],
              ["Lost brake", "Excitatory **5HT2A** input to surviving glutamate neurons is no longer balanced by GABA", "mech"],
              ["Visual cortex", "Excess glutamate → **visual hallucinations**", "dx"],
              ["VTA → striatum", "Excess glutamate drives mesolimbic **dopamine** → **delusions** and auditory hallucinations", "drug"]
            ], vertical: true, note: "Psychosis appears only when neurodegeneration has knocked out regulatory neurons in the **psychosis** network, not just the memory network. That explains how very different dementias can all cause psychosis, yet not every patient gets it." },
            { type: "p", text: "There is no practical way to target the GABA or glutamate nodes, and D2 blockers raise stroke and death. Instead, [[drug:pimavanserin|pimavanserin]] blocks the **normal excitatory serotonin input at 5HT2A** receptors on surviving glutamate neurons, compensating for lost GABA inhibition. Glutamate output normalizes downstream in the visual cortex (fewer **visual hallucinations**) and the VTA (normal dopamine, fewer **delusions**). It is approved for **Parkinson’s disease psychosis**, and the book reported positive trials in dementia-related psychosis of all causes." },
            { type: "callout", kind: "pearl", title: "Psychosis worsens prognosis", text: "Dementia-related psychosis is linked to **greater caregiver burden** and faster progression to severe dementia, institutionalization and death. It is more frequent in **advanced** dementia." },
            { type: "update", year: "2021–2022", title: "Pimavanserin not approved for dementia psychosis", text: "The FDA did **not approve** pimavanserin for **dementia-related psychosis** (complete response letter, April 2021) or for the narrower **Alzheimer disease psychosis** (complete response letter, August 2022, after an advisory committee voted 9–3 that efficacy was not shown). It remains approved for Parkinson’s disease psychosis.", source: "FDA actions reported April 2021 and August 4, 2022" }
          ]
        },
        {
          id: "s12-agitation",
          title: "Networks and treatment of agitation",
          pages: "528–534",
          blocks: [
            { type: "compare", title: "Figure 12-43: the simple model", items: [
              { title: "Healthy", color: "clin", points: ["**Top-down** cortical brakes balance **bottom-up** limbic drives"] },
              { title: "Alzheimer disease", color: "case", points: ["Neurodegeneration destroys top-down inhibitory neurons", "Bottom-up drives proceed unchecked → **agitation**"] }
            ] },
            { type: "p", text: "The same imbalance is invoked for psychotic agitation, mania, ADHD impulsivity and impulsive–compulsive disorders (Chapter 13). In AD, **sensory, emotional and motor cortex survive** while top-down inhibitory neurons degenerate, so patients can still act and emote but cannot inhibit." },
            { type: "callout", kind: "caution", title: "A chapter cross-reference", text: "The text points to “ADHD (discussed in Chapter 10)”; ADHD is [[ch:ch11|Chapter 11]]." },
            { type: "steps", title: "Figures 12-45 and 12-46: the thalamic-filter model", items: [
              ["Normal filtering", "Cortical glutamate neurons drive the **striatum**, which sends **GABA to the thalamus**, filtering sensory and emotional input."],
              ["Filter fails", "Plaques and tangles destroy the cortico-striatal neurons; thalamic GABA falls and input floods through."],
              ["Motor agitation", "Unfiltered sensory input reaches the cortex directly and via the amygdala: **reflexive motor** responses."],
              ["Emotional agitation", "Unfiltered emotional input fires the **amygdala**: to the **VTA** (dopamine further weakens the filter), to the **locus coeruleus** (NE arousal) and directly to cortex."]
            ] },
            { type: "table", caption: "Agitation treatments in the book (before approvals)", head: ["Line", "Options", "Notes"], rows: [
              ["First line (many experts)", "**SSRIs, SNRIs**", "Help some patients"],
              ["Second line", "**β blockers, carbamazepine**, perhaps gabapentin and pregabalin", "Carbamazepine perhaps most effective, but side effects and **interactions**"],
              ["Not recommended", "Valproate, topiramate, oxcarbazepine, **benzodiazepines**", ""],
              ["Little benefit", "Cholinesterase inhibitors", "Except in **Lewy body** dementias"],
              ["Untested", "Memantine", "Weak, low-potency NMDA block; no anecdotal benefit"]
            ], wide: true },
            { type: "compare", title: "New multimodal agents", items: [
              { title: "Brexpiprazole (Figure 12-47)", color: "drug", points: ["[[drug:brexpiprazole|Brexpiprazole]]: **D2 partial agonist + 5HT1A partial agonist + 5HT2A antagonist + α1 and α2 antagonist** (five actions)", "↓ VTA dopamine restores thalamic filtering", "Blocks LC **NE** at α1/α2C on pyramidal dendrites: less arousal", "5HT2A block and 5HT1A partial agonism quiet limbic drive", "Lower doses than in schizophrenia may widen the safety margin, despite the dementia mortality warning"] },
              { title: "Dextromethorphan–bupropion (Figure 12-48)", color: "pharm", points: ["[[drug:dextromethorphan|Dextromethorphan]]: a more robust **NMDA antagonist** than memantine", "[[drug:bupropion|Bupropion]] (NDRI) inhibits **CYP2D6**, boosting dextromethorphan levels", "Blocks NMDA receptors in cortex, thalamus, amygdala, VTA and LC", "Other forms tested: **deuterated** dextromethorphan and dextromethorphan–**quinidine**"] }
            ] },
            { type: "update", year: "2023", title: "Brexpiprazole approved for Alzheimer agitation", text: "In May 2023 the FDA approved **brexpiprazole** (Rexulti) for **agitation associated with dementia due to Alzheimer disease**, the first US approval for this indication. The label keeps the boxed warning on increased mortality in elderly patients with dementia-related psychosis.", source: "FDA, May 10, 2023" },
            { type: "update", year: "2026", title: "Dextromethorphan–bupropion approved for Alzheimer agitation", text: "Axsome announced on April 30, 2026 that the FDA approved **Auvelity** for **agitation associated with dementia due to Alzheimer disease**. One of the four pivotal trials (ADVANCE-2) missed its primary endpoint; the randomized-withdrawal trial ACCORD-2 showed delayed relapse.", source: "Axsome Therapeutics, April 30, 2026 (Psychiatric Times)" },
            { type: "update", year: "2024", title: "Deuterated dextromethorphan–quinidine failed", text: "Otsuka reported in February 2024 that **AVP-786** did not separate from placebo on agitation (CMAI) at 12 weeks in its phase 3 trial in Alzheimer dementia.", source: "Otsuka, February 12, 2024" }
          ]
        },
        {
          id: "s12-depression",
          title: "Depression in dementia",
          pages: "534–535",
          blocks: [
            { type: "list", title: "Figure 12-49: how depression and dementia may relate", items: [
              "Depression as a **risk factor** (a history of MDD about **doubles** dementia risk, especially vascular)",
              "Depression as a **prodrome** (late-onset MDD may signal AD)",
              "Shared risk factors or biology",
              "Cognitive impairment as a feature of depression (“**pseudodementia**,” sometimes reversible)",
              "Depression as a reaction to cognitive decline"
            ] },
            { type: "p", text: "Depressive symptoms affect at least **50%** of people with dementia, harm quality of life and may speed cognitive decline, so they should be treated. Psychosocial measures are always worth trying. Standard antidepressants often work **poorly**, perhaps because the circuits they act on have degenerated. Medications for physical illnesses and their interactions add complexity." },
            { type: "table", caption: "Drug options for depression in dementia", head: ["Drug", "Notes"], rows: [
              ["**SSRIs** (sertraline, citalopram, escitalopram, fluoxetine)", "Limited efficacy; may also help **agitation**. **Citalopram** prolongs QT; **escitalopram** may work similarly without it. Risks: **falls**, osteoporosis, interactions; may worsen restless legs, periodic limb movements and RBD in PD"],
              ["[[drug:trazodone|Trazodone]]", "SERT block at antidepressant doses; 5HT2A/2C, H1, α1 block makes it **sedating**. Short half-life (**6–8 h**): low dose at night helps **sleep** without daytime effects; may help behavior in **FTD** more than AD"],
              ["**Vortioxetine**, duloxetine", "Pro-cognitive effects (processing speed) in elderly depression, **not shown** specifically in dementia"]
            ], wide: true },
            { type: "callout", kind: "pearl", title: "Start low, monitor", text: "Long-term antidepressant use is associated with lower dementia risk and slower decline, but efficacy data are inconclusive. Use the **lowest effective dose** and monitor continuously." }
          ]
        },
        {
          id: "s12-pba-apathy",
          title: "Pseudobulbar affect, apathy and non-drug care",
          pages: "535–537",
          blocks: [
            { type: "p", text: "**Pseudobulbar affect (PBA)** is uncontrolled **laughing or crying** out of proportion to, or inconsistent with, mood. It is a disorder of **expressing** affect, not of mood itself, and occurs in AD and other dementias, MS, ALS and traumatic brain injury, hypothetically from loss of top-down control of emotional expression. Treatment: **dextromethorphan–quinidine** (NMDA and σ actions; [[drug:quinidine|quinidine]] blocks CYP2D6), or SSRIs off-label." },
            { type: "p", text: "**Apathy** (reduced motivation and goal-directed behavior, with blunted emotion) affects about **90%** of dementia patients over the disease course. It predicts worsening and adds greatly to caregiver burden, and it also appears in schizophrenia and depression." },
            { type: "table", caption: "Figure 12-51: the ABC model of apathy", head: ["Type", "Region", "Features"], rows: [
              ["**A**ffective", "**VMPFC and OFC**", "Can’t use emotional context to guide behavior; emotional blunting; altered social interaction (more common in **bvFTD**)"],
              ["**B**ehavioral", "**Motor areas and DMPFC**", "Trouble initiating and maintaining movement"],
              ["**C**ognitive", "**DLPFC**", "Loss of interest and motivation; trouble planning and executing"]
            ], note: "All connect to reward centers in the **basal ganglia**. Another subtyping: lack of initiative, lack of interest, emotional blunting." },
            { type: "compare", items: [
              { title: "Apathy is not depression", color: "mech", points: ["No **guilt, worthlessness or hopelessness**", "That is why antidepressants work poorly for it", "Often the opposite of agitation"] },
              { title: "Possible treatments (none approved, none robust)", color: "drug", points: ["Dopaminergic: **bupropion**, levodopa, stimulants", "**Cholinesterase inhibitors**: first-line consideration in AD, perhaps better for **prevention**", "**SSRIs/SNRIs** may help in FTD"] }
            ] },
            { type: "callout", kind: "caution", title: "Bupropion is not a dopamine agonist", text: "The book lists “dopamine agonists such as bupropion, levodopa, and stimulants.” Bupropion is a **norepinephrine–dopamine reuptake inhibitor**, and stimulants are reuptake inhibitors or releasers; levodopa is a dopamine precursor. The intended category is **pro-dopaminergic** drugs." },
            { type: "callout", kind: "key", title: "Non-drug care first, always", text: "Because of drug risks, limited approvals and modest efficacy, **non-pharmacological** approaches are first line, even now that drugs are approved. Patients with dementia, like small children, may not be able to report **pain, infection or local irritation**. Treating the source, even with simple **acetaminophen**, can calm agitation that psychotropics would not." }
          ]
        },
        {
          id: "s12-summary",
          title: "Summary and clinical vignettes",
          pages: "537",
          blocks: [
            { type: "list", title: "Take-home points", items: [
              "AD is the most common dementia; vascular, Lewy body and frontotemporal dementias differ in pathology, presentation and imaging, and **mixed** pathology is the norm.",
              "The **amyloid cascade** has driven 30 years of mostly failed trials; AD is now staged as **presymptomatic, MCI and dementia**.",
              "Memory and cognition: **cholinesterase inhibitors** (cholinergic hypothesis) and **memantine** (glutamate hypothesis).",
              "Psychosis: **5HT2A antagonism** (pimavanserin). Agitation: **brexpiprazole** and **dextromethorphan–bupropion**."
            ] },
            { type: "case", title: "Clinical vignette: forgetful but functioning", text: "A 72-year-old retired teacher forgets names and misplaces keys; she still manages her finances and household without help. Her mood is low and she sleeps poorly.", point: "**MCI**, not dementia (ADLs intact). First rule out **reversible** causes: depression, sleep disorder, medications. Biomarkers (amyloid PET, CSF or a plasma p-tau217 test) can show whether this is likely **MCI due to AD**." },
            { type: "case", title: "Clinical vignette: the man who sees children", text: "A 74-year-old with fluctuating alertness sees small children in his living room, acts out dreams, and has a mild shuffle. He became rigid and confused after haloperidol in the ER.", point: "**DLB** (fluctuations, visual hallucinations, parkinsonism, RBD, **neuroleptic sensitivity**). Avoid D2 blockers; cholinesterase inhibitors may help behavior in **Lewy body** dementias." },
            { type: "case", title: "Clinical vignette: the new disinhibition", text: "A 58-year-old accountant has become tactless, eats compulsively, hoards sweets and shows no concern for his wife’s distress. Memory testing with cues is near normal.", point: "**bvFTD**: disinhibition, hyperorality, loss of empathy, spared cued memory; frontal and anterior temporal atrophy; **AD biomarkers absent**. SSRIs or trazodone may help behavior." },
            { type: "case", title: "Clinical vignette: night-time agitation", text: "A woman with moderate AD has begun hitting aides during evening care. She grimaces when her knee is moved.", point: "Look for **pain** first: scheduled **acetaminophen** may resolve it. Then non-drug measures; if needed, **brexpiprazole** (approved for AD agitation, 2023) or **dextromethorphan–bupropion** (2026), weighing the dementia mortality warning." },
            { type: "case", title: "Clinical vignette: the stolen purse", text: "A man with AD insists his daughter steals his purse and that his wife is an impostor; he is not agitated otherwise.", point: "**Dementia-related psychosis** (persecutory and misidentification delusions), distinct from agitation. Non-drug approaches first; D2 blockers carry the **stroke/death** warning, and pimavanserin is approved only for **Parkinson’s** psychosis." }
          ]
        }
      ]
    }
  ]
});
