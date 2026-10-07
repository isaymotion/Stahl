/* Chapter 2 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 2 (pp. 29–50).
   Written in the app's own words from the book. Post-publication updates are boxed separately. */
SP.add("ch02", "guide", {
  intro: "Over a hundred psychotropic drugs are used in practice, yet they act at only a **handful of molecular sites**. About a third target a **neurotransmitter transporter**, another third a **G-protein-linked receptor**, and perhaps a tenth an **enzyme**; the rest act on ion channels (Chapter 3). Master these few targets and you can understand the proposed mechanism of virtually every psychopharmacological agent. This chapter also introduces the **agonist spectrum**, the single most useful idea for predicting what a drug at a receptor will do.",
  objectives: [
    "Name the **five molecular targets** of psychotropic drugs and the approximate share of drugs acting at each.",
    "Explain why the book uses **neuroscience-based nomenclature** (naming by mechanism, not indication) and define **pharmacogenomics**.",
    "Classify neurotransmitter transporters by **gene family** (SLC6, SLC1, SLC18, SLC32, SLC17) and match each transporter to its substrate.",
    "Describe how **SERT, NET and DAT** move monoamines using the sodium gradient, and how **allosteric** inhibitors such as SSRIs block them.",
    "List the drugs that act at **GAT1, SV2A and VMAT2**, and explain why histamine and neuropeptides have no reuptake transporter.",
    "Describe the **agonist spectrum**: constitutive activity, full agonist, antagonist, partial agonist and inverse agonist, with the light-rheostat analogy.",
    "Use Tables 2-4 and 2-5 to link key **G-protein-linked receptors** to drug actions, therapeutic effects and side effects.",
    "Contrast **reversible** and **irreversible** enzyme inhibitors and name the three enzymes targeted by psychotropic drugs, including **GSK-3** and lithium.",
    "Explain the **CYP450** system, the six key enzymes, and how **metabolizer status**, genotyping and drug monitoring guide dosing."
  ],
  parts: [
    {
      title: "The few targets of many drugs",
      sections: [
        {
          id: "s2-targets",
          title: "Five molecular targets for over 100 drugs",
          pages: "29–30",
          blocks: [
            { type: "p", text: "Psychotropic drugs have many mechanisms, but they all act at **specific molecular sites** that strongly affect neurotransmission. There are **over 100 essential psychotropic drugs** in practice but **only a few sites of action** (Figure 2-1)." },
            { type: "table", caption: "The five molecular targets (Figure 2-1)", head: ["Target", "Structure", "Share of psychotropic drugs", "Covered in"], rows: [
              ["**Neurotransmitter transporter**", "**12** transmembrane regions", "About **30%** (a third)", "This chapter"],
              ["**G-protein-linked receptor**", "**7** transmembrane regions", "About **30%** (a third)", "This chapter"],
              ["**Enzyme**", "—", "About **10%**", "This chapter"],
              ["**Ligand-gated ion channel**", "**4** transmembrane regions", "About **20%**", "Chapter 3"],
              ["**Voltage-gated ion channel**", "**6** transmembrane regions", "About **10%**", "Chapter 3"]
            ] },
            { type: "callout", kind: "mnemonic", text: "**12 – 7 – 4 – 6**: transporters span the membrane **12** times, G-protein-linked receptors **7**, ligand-gated channels **4** and voltage-gated channels **6**. Transporters and G-protein receptors each carry about a third of all drugs." },
            { type: "h", text: "Naming drugs by mechanism" },
            { type: "p", text: "There is a modern movement to name psychotropic drugs for their **pharmacological mechanism** (for example, “serotonin transport inhibitor” or “dopamine D2 and serotonin 5HT2A antagonist”) rather than their **therapeutic indication** (“antidepressant,” “antipsychotic”). Naming by indication has caused **endless confusion** because many drugs are used far beyond their original use, such as so-called antipsychotics used for depression. The book therefore uses **neuroscience-based nomenclature** wherever possible." },
            { type: "h", text: "Pharmacogenomics" },
            { type: "p", text: "Many drug targets have **genetic variants**. **Pharmacogenomics** is the effort to learn how far such variants raise or lower the odds of a good response or of side effects with drugs that engage that target. The science is still evolving; the book mentions current insights as each target comes up." },
            { type: "p", text: "See the [[page:nbn|nomenclature table]] in the library for traditional class names paired with mechanism-based names as drugs are added." }
          ]
        }
      ]
    },
    {
      title: "Neurotransmitter transporters",
      sections: [
        {
          id: "s2-classes",
          title: "Classification and structure of transporters",
          pages: "29–31",
          blocks: [
            { type: "p", text: "Neuronal membranes act as barriers, but they must be **selectively permeable**. Neurotransmitters are a good example: they are released during neurotransmission and, in many cases, **transported back into the presynaptic neuron** (recapture, or **reuptake**) so they can be **reused**. Once inside, most are transported again into **synaptic vesicles** for **storage, protection from metabolism and immediate use** in future neurotransmission." },
            { type: "list", items: [
              "Both kinds of transport, **presynaptic reuptake** and **vesicular storage**, use transporters from a **superfamily of 12-transmembrane-region proteins**.",
              "Transporters are a **type of receptor**: they bind the neurotransmitter before carrying it across the membrane.",
              "Some plasma membrane transporters are **presynaptic**; others are on **glial** membranes."
            ] },
            { type: "table", wide: true, caption: "Transporter families (Tables 2-1 to 2-3)", head: ["Location", "Gene family", "Transporters", "Substrates"], rows: [
              "Plasma membrane",
              ["Plasma membrane (presynaptic or glial)", "**SLC6** (sodium/chloride-coupled)", "[[target:sert|SERT]], [[target:net|NET]], [[target:dat|DAT]]; [[target:gat|GAT1–4]]; [[target:glyt|GlyT1–2]]; choline transporter", "Monoamines; GABA; glycine; choline"],
              ["Plasma membrane (high-affinity glutamate)", "**SLC1**", "[[target:eaat|EAAT1–5]]", "L-glutamate, L-aspartate"],
              "Synaptic vesicle",
              ["Vesicle", "**SLC18**", "[[target:vmat2|VMAT1 and VMAT2]]; [[target:vacht|VAChT]]", "Serotonin, norepinephrine, dopamine, histamine; acetylcholine"],
              ["Vesicle", "**SLC32**", "[[target:viaat|VIAAT]]", "GABA"],
              ["Vesicle", "**SLC17**", "[[target:vglut|vGluT1–3]]", "Glutamate"]
            ] },
            { type: "callout", kind: "exam", text: "Two subclasses of **plasma membrane** transporters (SLC6, SLC1) and three subclasses of **vesicular** transporters (SLC18, SLC32, SLC17)." }
          ]
        },
        {
          id: "s2-monoamine",
          title: "Monoamine transporters: SERT, NET and DAT",
          pages: "31–34",
          blocks: [
            { type: "p", text: "Each monoamine neuron has its **own unique presynaptic transporter**, but all three (plus histamine neurons) share the **same vesicular transporter**, [[target:vmat2|VMAT2]]." },
            { type: "table", caption: "Presynaptic monoamine transporters (Table 2-1)", head: ["Transporter", "Gene family", "Endogenous substrate", "Other substrates it carries (“false substrates”)"], rows: [
              ["[[target:sert|SERT]] (serotonin transporter)", "SLC6", "Serotonin", "**Ecstasy** ([[drug:mdma|MDMA]])"],
              ["[[target:net|NET]] (norepinephrine transporter)", "SLC6", "Norepinephrine", "**Dopamine**, epinephrine, [[drug:amphetamine|amphetamine]]"],
              ["[[target:dat|DAT]] (dopamine transporter)", "SLC6", "Dopamine", "Norepinephrine, epinephrine, **amphetamine**"]
            ] },
            { type: "p", text: "Although each transporter has a unique sequence, each has appreciable affinity for **other amines** too. Other transportable neurotransmitters or drugs nearby can **“hitchhike”** into the neuron. NET has **high affinity for dopamine** as well as norepinephrine; DAT for **amphetamines**; SERT for **MDMA**." },
            { type: "h", text: "How monoamines are moved" },
            { type: "steps", items: [
              ["Energy is needed", "Concentrating monoamines inside the neuron is **uphill**, so it is not passive."],
              ["The sodium pump builds a gradient", "**Sodium–potassium ATPase** (the “sodium pump”) continuously pumps sodium **out** of the neuron."],
              ["Downhill sodium drives uphill transport", "SLC6 transporters couple the **downhill** movement of sodium into the cell with the **uphill** movement of the monoamine. They are really **sodium-dependent cotransporters**, usually also **cotransporting chloride** and sometimes **countertransporting potassium**."],
              ["Binding sites", "The transporter has a site for the **monoamine** and for **two sodium ions**; transporters may work as **dimers**."]
            ] },
            { type: "callout", kind: "analogy", text: "Stahl draws SERT as a **wagon**. Without sodium the **tires are flat**: the transporter has low affinity for serotonin and nothing binds. When sodium binds, the **tires inflate** and serotonin can climb onto its substrate seat for the ride into the neuron. A drug such as fluoxetine sits in the **front seat**, an **allosteric** site, which lowers the wagon’s affinity for serotonin and keeps it off." },
            { type: "h", text: "How SSRIs and related drugs block transport" },
            { type: "list", items: [
              "Drugs such as the **selective serotonin reuptake inhibitors (SSRIs)** bind to other, poorly defined sites on the transporter.",
              "They **do not bind the substrate site** and are **not transported** into the neuron; they are **allosteric** (“other site”) inhibitors.",
              "Binding at the allosteric site **reduces the transporter’s affinity for its substrate**, preventing reuptake."
            ] },
            { type: "h", text: "Why blocking transporters matters" },
            { type: "p", text: "After release, neurotransmitters normally get only **“a brief dance on their synaptic receptors”** before climbing back into the presynaptic neuron. Blocking the transporter lets them accumulate, **enhancing (or restoring) synaptic monoamine action**. This is thought to underlie the clinical effects of **all** drugs that block monoamine transporters." },
            { type: "compare", items: [
              { title: "DAT and NET blockers", color: "drug", points: ["“Stimulants” for ADHD: [[drug:methylphenidate|methylphenidate]] and [[drug:amphetamine|amphetamine]]", "The drug of abuse [[drug:cocaine|cocaine]]", "Most ADHD drugs act by blocking monoamine transporters"] },
              { title: "SERT, NET and DAT blockers", color: "mech", points: ["Most drugs that treat **unipolar depression** act at SERT, NET, DAT or a combination", "About **a third** of the essential 100 psychotropics target one or more monoamine transporters", "A monoamine transport inhibitor is prescribed **every second** in the US"] }
            ] },
            { type: "h", text: "“Antidepressant” is a misnomer" },
            { type: "p", text: "Drugs that block monoamine transporters treat far more than unipolar depression, and they are **not first-line** for every depression:" },
            { type: "list", cols: true, items: [
              "**Anxiety**: generalized, social anxiety and panic disorder",
              "**Neuropathic pain**: fibromyalgia, postherpetic neuralgia, diabetic peripheral neuropathic pain",
              "**Eating disorders**",
              "**Impulsive–compulsive disorders** and **OCD**",
              "**Trauma- and stress-related disorders** such as PTSD",
              "**Not** first-line for **bipolar depression** or **depression with mixed features**"
            ] }
          ]
        },
        {
          id: "s2-other",
          title: "Other transporters: GABA, glycine and glutamate",
          pages: "34–35",
          blocks: [
            { type: "p", text: "There are about a dozen further transporters for neurotransmitters or their precursors, but **only one clinically used psychotropic drug** is known to bind any of them." },
            { type: "table", caption: "Non-monoamine plasma membrane transporters", head: ["Transporter", "Family", "Drugs that target it"], rows: [
              ["**Choline transporter** (precursor of acetylcholine)", "SLC6", "None known"],
              ["[[target:gat|GAT1–4]] (GABA)", "SLC6", "**GAT1** is selectively blocked by the anticonvulsant [[drug:tiagabine|tiagabine]], raising synaptic GABA"],
              ["[[target:glyt|GlyT1 and GlyT2]] (glycine)", "SLC6", "None in practice; new agents were in **clinical trials** for schizophrenia"],
              ["[[target:eaat|EAAT1–5]] (glutamate)", "**SLC1**", "None known"]
            ] },
            { type: "p", text: "Besides its anticonvulsant action, the extra synaptic GABA from **tiagabine** may have therapeutic actions in **anxiety, sleep disorders and pain**. No other GAT inhibitor is available." },
            { type: "update", year: "2025", title: "Glycine transporter inhibitors in schizophrenia", text: "The most advanced GlyT1 inhibitor, **iclepertin** (BI 425809), was tested for cognitive impairment associated with schizophrenia in the phase III **CONNEX** program. In January 2025 Boehringer Ingelheim reported that the trials **did not meet their primary or key secondary endpoints**. No GlyT1 inhibitor is approved.", source: "Boehringer Ingelheim CONNEX top-line results, January 2025" },
            { type: "h", text: "Glutamate transporters and the glia" },
            { type: "list", items: [
              "Uptake of glutamate **into glia** is a key system for recapturing it for reuse.",
              "In glia, glutamate is converted to **glutamine**; glutamine enters the presynaptic neuron and is converted **back into glutamate**.",
              "Exactly which EAATs sit on presynaptic neurons, postsynaptic neurons or glia is still being worked out."
            ] },
            { type: "compare", title: "How SLC1 (glutamate) transporters differ from SLC6", items: [
              { title: "SLC6 (monoamines, GABA, glycine)", color: "drug", points: ["Cotransport **chloride** with sodium", "Potassium countertransport **only sometimes**", "Seem to work as **dimers**"] },
              { title: "SLC1 (glutamate)", color: "clin", points: ["**No chloride** cotransport", "**Almost always** countertransport potassium", "May work as **trimers**"] }
            ] },
            { type: "p", text: "Because it is often desirable to **reduce** rather than enhance glutamate neurotransmission, the future value of glutamate transporters as drug targets is unclear." }
          ]
        },
        {
          id: "s2-missing",
          title: "Where are the transporters for histamine and neuropeptides?",
          pages: "35",
          blocks: [
            { type: "p", text: "Not every neurotransmitter is regulated by a reuptake transporter." },
            { type: "compare", items: [
              { title: "Histamine", color: "hy", points: ["**No presynaptic transporter**", "But it **is** packaged into vesicles by **VMAT2**", "Inactivation is thought to be **entirely enzymatic**"] },
              { title: "Neuropeptides", color: "mech", points: ["**No reuptake pumps or presynaptic transporters** found", "Inactivated by **diffusion, sequestration and enzymatic destruction**", "Not by presynaptic transport"] }
            ] },
            { type: "p", text: "A transporter may yet be discovered for some of these, but none is known at present." }
          ]
        },
        {
          id: "s2-vesicular",
          title: "Vesicular transporters and the drugs that target them",
          pages: "35",
          blocks: [
            { type: "h", text: "The vesicular transporters (Table 2-3)" },
            { type: "defs", items: [
              ["[[target:vmat2|VMAT1 and VMAT2]] (SLC18)", "Package **serotonin, norepinephrine, dopamine and histamine**."],
              ["[[target:vacht|VAChT]] (SLC18)", "Packages **acetylcholine**."],
              ["[[target:viaat|VIAAT]] (SLC32)", "The vesicular inhibitory amino acid transporter; packages **GABA**."],
              ["[[target:vglut|vGluT1–3]] (SLC17)", "Package **glutamate**."],
              ["[[target:sv2a|SV2A]]", "A novel 12-transmembrane vesicle protein of uncertain mechanism and substrate. It binds the anticonvulsant [[drug:levetiracetam|levetiracetam]], perhaps interfering with neurotransmitter release and so reducing seizures."]
            ] },
            { type: "h", text: "How neurotransmitters get into vesicles" },
            { type: "compare", items: [
              { title: "Plasma membrane transporter (Figure 2-2A)", color: "drug", points: ["Powered by **sodium–potassium ATPase** (sodium pump)", "Monoamine **cotransported** with sodium (and chloride)"] },
              { title: "Vesicular transporter (Figure 2-2B)", color: "guide", points: ["Powered by a **proton ATPase** (“proton pump”)", "Protons are pumped **out** of the vesicle", "Neurotransmitter is **antiported** in, swapping its positive charge for the proton’s so charge inside stays constant"] }
            ] },
            { type: "h", text: "Vesicular transporters as drug targets" },
            { type: "list", items: [
              "VAChT, VIAAT and vGluTs are **not known to be targeted** by any drug used in humans.",
              "**VMATs**, especially in **dopamine neurons**, are targeted by several drugs: [[drug:amphetamine|amphetamine]] as a **transported substrate**, and [[drug:tetrabenazine|tetrabenazine]] and its derivatives [[drug:deutetrabenazine|deutetrabenazine]] and [[drug:valbenazine|valbenazine]] as **inhibitors** (Chapter 5), drugs introduced for movement disorders such as **tardive dyskinesia**."
            ] },
            { type: "callout", kind: "pearl", text: "**Amphetamine has two targets**: the monoamine transporters **and** VMATs. In contrast, [[drug:methylphenidate|methylphenidate]] and [[drug:cocaine|cocaine]] target **only the monoamine transporters**, much as SSRIs act at SERT." },
            { type: "update", year: "2023", title: "Valbenazine for Huntington’s disease chorea", text: "In August 2023 the FDA approved **valbenazine** for **chorea associated with Huntington’s disease**, in addition to tardive dyskinesia.", source: "FDA approval announced by Neurocrine Biosciences, August 2023" }
          ]
        }
      ]
    },
    {
      title: "G-protein-linked receptors and the agonist spectrum",
      sections: [
        {
          id: "s2-gpcr",
          title: "G-protein-linked receptors: structure and function",
          pages: "36–37",
          blocks: [
            { type: "list", items: [
              "All have **seven transmembrane regions** clustered around a **central core** that holds the neurotransmitter binding site.",
              "Drugs act at the **neurotransmitter site** or at **allosteric sites**, mimicking or blocking the neurotransmitter **partially or fully**.",
              "Drug actions here change **downstream** events: which phosphoproteins (and so which enzymes, receptors or ion channels) are modified, and **which genes are expressed or silenced**, from synaptogenesis to receptor synthesis to signaling onward."
            ] },
            { type: "callout", kind: "key", text: "The **single most common action** of psychotropic drugs is to modify one or more **G-protein-linked receptors**, producing therapeutic effects or side effects. More than a dozen are drug targets in the clinical chapters." },
            { type: "h", text: "Pharmacological subtypes" },
            { type: "p", text: "Of the many ways to subtype these receptors, **pharmacological subtypes** matter most clinically. The natural neurotransmitter acts at **all** of its receptor subtypes, but many drugs are **more selective** and so define a pharmacological subtype." },
            { type: "callout", kind: "analogy", text: "The neurotransmitter is a **master key** that opens every door; a selective drug is a **specific key** that opens only one." }
          ]
        },
        {
          id: "s2-spectrum",
          title: "The agonist spectrum",
          pages: "36–45",
          blocks: [
            { type: "flow", title: "From most to least signal (Figures 2-3 and 2-10)", steps: [
              ["Full agonist", "Maximum signal transduction", "clin"],
              ["Partial agonist", "More than baseline, less than full", "mech"],
              ["No agonist / silent antagonist", "Baseline: constitutive activity only", "hy"],
              ["Inverse agonist", "Below baseline: even constitutive activity is shut off", "guide"]
            ] },
            { type: "h", text: "No agonist: constitutive activity (Figure 2-4)" },
            { type: "p", text: "The absence of agonist does not mean nothing is happening. The conformational change that agonists cause may still occur spontaneously at **very low frequency**: **constitutive activity**. Where receptor **density is high**, low-frequency events across many receptors can produce **detectable** signal transduction." },
            { type: "h", text: "Full agonists (Figure 2-5)" },
            { type: "list", items: [
              "Produce the conformational change that turns on second-messenger synthesis **to the greatest extent possible**: downstream proteins are **maximally phosphorylated** and genes **maximally affected**.",
              "The full agonist is generally the **natural neurotransmitter**, though some drugs act as fully.",
              "Agonists that restore lost action could help where **reduced signal transduction** causes symptoms."
            ] },
            { type: "compare", title: "Two ways to get full agonist action", items: [
              { title: "Direct-acting agonists (Table 2-4)", color: "clin", points: ["Drug binds the **neurotransmitter site** itself", "Produces the full array of signal transduction"] },
              { title: "Indirect agonists (Table 2-5)", color: "drug", points: ["Drug **boosts the natural neurotransmitter**, which then acts", "By **blocking reuptake**: SERT, NET, DAT, GAT1", "By **blocking enzymatic destruction**: MAO and acetylcholinesterase inhibitors"] }
            ] },
            { type: "h", text: "Antagonists (Figure 2-6)" },
            { type: "list", items: [
              "Useful when full agonism is **“too much of a good thing”**, as in overstimulation.",
              "Produce a conformation that causes **no change** in signal transduction, including **no change in constitutive activity**. True antagonists are **neutral** and, having no action of their own, **“silent.”**",
              "They block **everything** on the spectrum: in the presence of a full agonist, a partial agonist or an inverse agonist, an antagonist returns the receptor to the **baseline (no agonist)** state.",
              "There are **many more antagonists** than direct full agonists in practice; they mediate both **therapeutic actions and side effects**. Some may prove to be inverse agonists."
            ] },
            { type: "callout", kind: "caution", title: "A common misconception", text: "Antagonists are **not** the opposite of agonists. They prevent agonist action but have **no activity of their own**. The true opposite of an agonist is an **inverse agonist**." },
            { type: "h", text: "Partial agonists (Figure 2-7)" },
            { type: "list", items: [
              "Produce signal transduction **more than an antagonist but less than a full agonist**: turning the gain **down** from full agonism, or **up** from silent antagonism.",
              "Where a partial agonist sits on the spectrum determines its downstream impact; the ideal degree of “partiality” is a matter of **debate and trial and error**.",
              "The ideal may be the **“Goldilocks”** solution: not too hot, not too cold, but just right, and this may vary between clinical situations.",
              "Also called **“stabilizers”**: when “out-of-tune” neurons mediate symptoms, a partial agonist can stabilize output between too much and too little.",
              "Sometimes called **“weak,”** implying partial efficacy. That may be true of some agents, but it is more sophisticated to understand their **stabilizing and tuning** actions."
            ] },
            { type: "callout", kind: "analogy", title: "Stahl’s analogy: the light rheostat (Figure 2-8)", text: "Receptors work less like an on/off **light switch** and more like a **rheostat**. A **full agonist** turns the light fully on; with **no agonist** the room is dark; a **partial agonist** turns it on only partway, to its own built-in set point that **no dose can exceed**. Add a partial agonist to a **dark** room and the light goes up (**net agonist**). Add it to a **brightly lit** room and the light dims to the same intermediate level (**net antagonist**). Both rooms end up equally lit." },
            { type: "callout", kind: "key", text: "A partial agonist is a **net agonist when natural agonist is absent** and a **net antagonist when natural agonist is present**. It can boost deficient activity and block excessive activity at the same time, and might even treat states that mix excess and deficiency." },
            { type: "h", text: "Inverse agonists (Figure 2-9)" },
            { type: "list", items: [
              "Stabilize the receptor in a **totally inactive** form, reducing signal transduction **below** that seen with no agonist or a silent antagonist: they shut down even **constitutive activity**.",
              "They do the **opposite of agonists**.",
              "If a receptor system has **no constitutive activity** (for example, at low receptor density), an inverse agonist will **look like an antagonist**.",
              "Clinically, the difference from a silent antagonist is **unclear**. Some drugs long called antagonists, such as **5HT2A antagonists** and **H1 antihistamines**, may turn out to be **inverse agonists** in some brain areas."
            ] },
            { type: "table", caption: "The agonist spectrum at a glance", head: ["Drug type", "Alone (no natural agonist)", "With natural agonist present", "Effect on constitutive activity"], rows: [
              ["**Full agonist**", "Maximum signaling", "Maximum signaling", "Exceeds it"],
              ["**Partial agonist**", "Increases signaling (net agonist)", "Reduces signaling to its set point (net antagonist)", "Exceeds it, partially"],
              ["**Antagonist**", "No effect (“silent”)", "Blocks agonist; back to baseline", "Leaves it unchanged"],
              ["**Inverse agonist**", "Reduces signaling below baseline", "Blocks agonist and goes below baseline", "Abolishes it"]
            ] }
          ]
        },
        {
          id: "s2-receptor-tables",
          title: "Key G-protein-linked receptors targeted by drugs",
          pages: "39–40",
          blocks: [
            { type: "p", text: "Tables 2-4 and 2-5 are the roadmap for the clinical chapters. Each receptor below links to its library page, where the **side-effect mapper** shows what stimulating or blocking it does." },
            { type: "table", wide: true, caption: "Receptors targeted directly (Table 2-4)", head: ["Receptor", "Drug action", "Therapeutic action or side effect"], rows: [
              "Dopamine",
              ["[[target:d2|D2]]", "Antagonist or partial agonist", "Antipsychotic; antimanic"],
              "Serotonin",
              ["[[target:5ht2a|5HT2A]]", "Antagonist or inverse agonist", "Antipsychotic in **Parkinson’s disease psychosis** and **dementia-related psychosis**; **less drug-induced parkinsonism**; possibly fewer negative symptoms; possible mood-stabilizing and antidepressant actions in bipolar disorder; better **insomnia and anxiety**"],
              ["[[target:5ht2a|5HT2A]]", "Agonist", "**Psychotomimetic**; experimental treatment of refractory depression and other disorders, especially with psychotherapy"],
              ["[[target:5ht1b1d|5HT1B/1D]]", "Antagonist or partial agonist", "Possible pro-cognitive and antidepressant actions"],
              ["[[target:5ht2c|5HT2C]]", "Antagonist", "Antidepressant"],
              ["[[target:5ht6|5HT6]]", "?", "?"],
              ["[[target:5ht7|5HT7]]", "Antagonist", "Possible pro-cognitive and antidepressant actions"],
              ["[[target:5ht1a|5HT1A]]", "Partial agonist", "**Less drug-induced parkinsonism**; **anxiolytic**; **boosts** SSRI/SNRI antidepressant action"],
              "Norepinephrine",
              ["[[target:alpha2|α2]]", "Antagonist", "Antidepressant"],
              ["[[target:alpha2|α2]]", "Agonist", "Better cognition and behavior in **ADHD**"],
              ["[[target:alpha1|α1]]", "Antagonist", "Better sleep (**nightmares**); less **agitation in Alzheimer disease**; side effects of **orthostatic hypotension** and possibly sedation"],
              "GABA",
              ["[[target:gabab|GABA-B]]", "Agonist", "**Cataplexy** and **sleepiness in narcolepsy**; possibly more slow-wave sleep; pain reduction in chronic pain and fibromyalgia; possibly alcohol use disorder and withdrawal"],
              "Melatonin",
              ["[[target:mt1mt2|MT1 and MT2]]", "Agonist", "Better **insomnia** and **circadian rhythms**"],
              "Histamine",
              ["[[target:h1|H1]]", "Antagonist", "Therapeutic for **anxiety and insomnia**; side effects of **sedation and weight gain**"],
              ["[[target:h3|H3]]", "Antagonist or inverse agonist", "Less **daytime sleepiness**"],
              "Acetylcholine",
              ["[[target:m1|M1]]", "Agonist", "Pro-cognitive and antipsychotic"],
              ["[[target:m1|M1]]", "Antagonist", "Side effects of **sedation and memory disturbance**"],
              ["[[target:m4|M4]]", "Agonist", "Antipsychotic"],
              ["[[target:m2m3|M2 and M3]]", "Antagonist", "**Dry mouth, blurred vision, constipation, urinary retention**; may contribute to **metabolic dysregulation** (dyslipidemia, diabetes)"],
              ["M5", "?", "?"],
              "Orexin",
              ["[[target:ox|OX1 and OX2]]", "Antagonist", "**Hypnotic** for insomnia"]
            ] },
            { type: "update", year: "2024", title: "A muscarinic agonist is now approved for schizophrenia", text: "Table 2-4 lists M1 and M4 **agonism** as antipsychotic. In September 2024 the FDA approved **xanomeline–trospium** (Cobenfy) for schizophrenia in adults: xanomeline is an M1/M4-preferring muscarinic agonist, and trospium is a peripherally restricted muscarinic antagonist added to reduce peripheral cholinergic side effects. It is the first approved antipsychotic that does not act directly at dopamine D2 receptors.", source: "FDA approval, September 26, 2024" },
            { type: "table", wide: true, caption: "Receptors targeted indirectly (Table 2-5)", head: ["Receptor action produced", "How the drug produces it", "Therapeutic action"], rows: [
              ["Agonism at **D1–D5**", "Dopamine reuptake inhibition or release by **methylphenidate** or **amphetamine**", "ADHD, depression, wakefulness"],
              ["Agonism at **5HT1A** somatodendritic autoreceptors (and postsynaptic 5HT receptors)", "Serotonin reuptake inhibition by **SSRIs and SNRIs**", "Antidepressant, anxiolytic"],
              ["Agonism at **5HT2A/2C**", "Serotonin release by **MDMA**", "“Empathogen”; experimental treatment of PTSD, especially with psychotherapy"],
              ["Agonism at **all norepinephrine receptors**", "Norepinephrine reuptake inhibition", "Antidepressant; neuropathic pain; ADHD"],
              ["Agonism at **M1** (possibly M2–M5)", "More acetylcholine via **acetylcholinesterase inhibition**", "Cognition in Alzheimer disease"]
            ] },
            { type: "update", year: "2024", title: "MDMA-assisted therapy for PTSD", text: "In August 2024 the FDA issued a **complete response letter** declining to approve MDMA-assisted therapy (midomafetamine) for PTSD and requested an additional phase III trial. MDMA remains unapproved for any indication.", source: "FDA complete response letter to Lykos Therapeutics, August 9, 2024" }
          ]
        }
      ]
    },
    {
      title: "Enzymes as drug targets",
      sections: [
        {
          id: "s2-enzymes",
          title: "Enzyme inhibitors: reversible and irreversible",
          pages: "45–48",
          blocks: [
            { type: "p", text: "Every enzyme is in theory a target for an inhibitor, but in practice only a **minority** of psychotropic drugs are enzyme inhibitors." },
            { type: "flow", title: "Enzyme activity (Figure 2-11)", steps: [
              ["Substrate", "A very selective molecule", "drug"],
              ["Active site", "The substrate binds the enzyme here", "mech"],
              ["Product", "The substrate leaves as a changed molecule", "clin"]
            ] },
            { type: "p", text: "Inhibitors are also very **selective** for one enzyme over another. With an inhibitor bound, the enzyme **cannot bind its substrate**." },
            { type: "compare", items: [
              { title: "Irreversible inhibitor (Figure 2-12)", color: "guide", points: ["Binds **covalently**, drawn as **chains** the substrate’s scissors cannot cut", "Cannot be displaced by substrate", "Called a **“suicide inhibitor”**: the enzyme is permanently disabled", "Activity returns **only when new enzyme is synthesized**"] },
              { title: "Reversible inhibitor (Figure 2-13)", color: "clin", points: ["Drawn as **strings** that the substrate can cut", "Substrate **competes** and can shove the inhibitor off", "Who wins depends on **affinity and concentration**"] }
            ] },
            { type: "h", text: "The three enzymes targeted by psychotropic drugs" },
            { type: "table", caption: "Enzyme targets", head: ["Enzyme", "Drugs", "Covered in"], rows: [
              ["[[target:mao|Monoamine oxidase (MAO)]]", "MAO inhibitors", "Chapter 7"],
              ["[[target:ache|Acetylcholinesterase]]", "Acetylcholinesterase inhibitors", "Chapter 12"],
              ["[[target:gsk3|Glycogen synthase kinase-3 (GSK-3)]]", "[[drug:lithium|Lithium]]; possibly [[drug:valproate|valproate]] and ECT", "Here and Chapter 7"]
            ] },
            { type: "h", text: "GSK-3 and lithium (Figure 2-14)" },
            { type: "steps", items: [
              ["Signals converge on GSK-3", "Some **neurotrophins, growth factors** (insulin, IGF-1) and **Wnt glycoproteins** signal through the downstream phosphoprotein enzyme **GSK-3**."],
              ["GSK-3 is proapoptotic", "Its action **promotes cell death**."],
              ["Lithium inhibits it", "**Lithium** can inhibit GSK-3, which could produce **neuroprotective** actions and **long-term plasticity**, and may contribute to its **antimanic and mood-stabilizing** effects."],
              ["Possibly others", "**Valproate** and **electroconvulsive therapy (ECT)** may also act on GSK-3. Novel GSK-3 inhibitors are in development."]
            ] },
            { type: "p", text: "Recall from [[ch:ch01|Chapter 1]] that GSK-3 is one of the kinases in the **neurotrophin signal transduction cascade**." }
          ]
        },
        {
          id: "s2-cyp",
          title: "Cytochrome P450 drug-metabolizing enzymes",
          pages: "49–50",
          blocks: [
            { type: "compare", items: [
              { title: "Pharmacodynamics", color: "mech", points: ["Drug actions at its **targets**: transporters, receptors, enzymes, ion channels", "The **mechanism of action**", "Accounts for **therapeutic effects and side effects**", "The main emphasis of the book"] },
              { title: "Pharmacokinetics", color: "drug", points: ["How **the body acts on the drug**: absorption, distribution, metabolism, excretion", "Mediated largely by **CYP450** enzymes in the **gut wall and liver**", "Most psychotropics are CYP450 **substrates, inhibitors and/or inducers**"] }
            ] },
            { type: "p", text: "CYP450 enzymes follow the same substrate-to-product principles as other enzymes (Figure 2-15). A drug absorbed through the gut wall is biotransformed by CYP450 enzymes in the gut wall or liver, so it reaches the bloodstream **partly unchanged and partly as biotransformed product**, which is then excreted (via the kidney)." },
            { type: "h", text: "The key enzymes (Figure 2-16)" },
            { type: "list", items: [
              "There are **over 30** known CYP450 enzymes, and probably more awaiting discovery.",
              "Six of the most important for psychotropic drugs: [[target:cyp1a2|1A2]], [[target:cyp2b6|2B6]], [[target:cyp2d6|2D6]], [[target:cyp2c9|2C9]], [[target:cyp2c19|2C19]] and [[target:cyp3a4|3A4]].",
              "Naming: in **CYP1A2**, “**1**” is the **family**, “**A**” the **subtype** and “**2**” the **gene product**."
            ] },
            { type: "callout", kind: "caution", title: "A note on the figure", text: "The caption of Figure 2-16 says “five of the most important” enzymes but lists six; the text correctly says six." },
            { type: "h", text: "Genetic variation in drug metabolism" },
            { type: "table", caption: "Metabolizer types", head: ["Type", "Enzyme activity", "Consequence at standard doses", "Implication"], rows: [
              ["**Extensive** (normal) metabolizer", "Normal", "Expected levels", "Most people; **standard doses are set for them**"],
              ["**Intermediate** or **poor** metabolizer", "Reduced", "**Higher drug levels**, more **drug–drug interactions**, fewer **active metabolites**", "May need **lower** than standard doses"],
              ["**Ultra-rapid** metabolizer", "Elevated", "**Subtherapeutic levels** and **poor efficacy**", "May need higher doses"]
            ] },
            { type: "list", items: [
              "**Genotyping** the patient for pharmacogenomic use can predict who needs dose adjustment, especially patients who **do not respond to or do not tolerate** standard doses.",
              "Pairing genotyping with **therapeutic drug monitoring** (measuring actual blood levels, sometimes called **phenotyping**) confirms the prediction and helps particularly with **treatment-resistant** patients.",
              "CYP450 interactions are constantly being discovered; check an **up-to-date reference** (such as the companion *Prescriber’s Guide*) before combining drugs."
            ] }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s2-summary",
          title: "Summary",
          pages: "50",
          blocks: [
            { type: "list", items: [
              "Nearly **a third** of psychotropic drugs bind a **neurotransmitter transporter** and another third bind **G-protein-linked receptors**.",
              "There are **two plasma membrane** and **three vesicular** transporter subclasses. **SERT, NET and DAT** are key targets for most drugs treating unipolar depression, ADHD and many other disorders from anxiety to pain.",
              "**VMAT2** stores monoamines and histamine in vesicles and is **inhibited by drugs for movement disorders** such as tardive dyskinesia.",
              "G-protein-linked receptors are the **most common** targets. Natural neurotransmitters and some drugs are **full agonists**, but **most** directly acting drugs are **antagonists**; a few are partial agonists and some inverse agonists.",
              "Each drug’s conformational change defines **where it sits on the agonist spectrum**, which predicts downstream signal transduction and clinical actions.",
              "Only **three enzymes** (MAO, acetylcholinesterase, GSK-3) are therapeutic targets, but many drugs interact with **CYP450** enzymes, which shapes their **pharmacokinetic** rather than pharmacodynamic profile."
            ] }
          ]
        },
        {
          id: "s2-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 2’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: the “antidepressant” for panic", text: "A patient with panic disorder is surprised to be offered an “antidepressant” and asks whether her doctor thinks she is depressed.", point: "Drugs that block monoamine transporters treat **anxiety disorders**, pain, OCD, PTSD and more. Naming them by mechanism (e.g., **serotonin transport inhibitor**) avoids exactly this confusion." },
            { type: "case", title: "Clinical vignette: the partial agonist in two rooms", text: "A student asks how one drug at a receptor could reduce symptoms of excess activity in one patient and of deficient activity in another.", point: "A **partial agonist** acts as a **net antagonist** when natural agonist is abundant and a **net agonist** when it is scarce: the **rheostat** analogy." },
            { type: "case", title: "Clinical vignette: high levels at a normal dose", text: "A patient develops marked side effects at a standard dose of a drug that is cleared by CYP2D6.", point: "She may be a **poor or intermediate metabolizer**, with reduced enzyme activity and higher drug levels. **Genotyping**, ideally with **therapeutic drug monitoring**, can guide a lower dose." },
            { type: "case", title: "Clinical vignette: one drug, two targets", text: "A resident asks why amphetamine and methylphenidate are grouped together for ADHD yet described differently.", point: "Both act at **DAT and NET**, but **amphetamine** is also a **transported substrate** and acts at **VMAT2**; methylphenidate (like cocaine) acts **only at the transporters**." }
          ]
        }
      ]
    }
  ]
});
