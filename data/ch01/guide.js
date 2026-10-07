/* Chapter 1 study guide. Source: Stahl's Essential Psychopharmacology, 5th ed., Chapter 1 (pp. 1–28).
   Written in the app's own words from the book. Cross-references use [[type:id|label]]. */
SP.add("ch01", "guide", {
  intro: "Modern psychopharmacology is largely the story of **chemical neurotransmission**. To understand how drugs act on the brain, how diseases affect the central nervous system, and why psychiatric medicines have the behavioral effects they do, you need to be fluent in its language. Stahl calls this chapter the foundation and roadmap for the entire book: every later chapter builds on the ideas here.",
  objectives: [
    "Contrast the **anatomically addressed** and the **chemically addressed** nervous system, and name the synapse types.",
    "Describe the parts of a neuron and an enlarged synapse, and explain why communication *within* a neuron is electrical but *between* neurons is chemical.",
    "Name the **six key neurotransmitter systems** targeted by psychotropic drugs and explain “God’s pharmacopeia.”",
    "Distinguish **classic**, **retrograde** and **volume** neurotransmission, with the examples Stahl gives for each.",
    "Explain **excitation–secretion coupling** step by step, including the roles of sodium and calcium channels.",
    "Trace a **signal transduction cascade** from first messenger to gene, and compare the **four key cascades** (G-protein, ion-channel, hormone and neurotrophin).",
    "Explain how **kinases** and **phosphatases** oppose each other, and how **CREB**, **immediate early genes** and **late genes** turn neurotransmission into gene expression.",
    "Describe the molecular machinery of **epigenetics** (methylation, acetylation, DNMTs, HDACs, SAMe) and of **alternative splicing** and **RNA interference**.",
    "Explain why a brief puff of neurotransmitter can produce effects that take hours to days to develop and last days, weeks or a lifetime."
  ],
  parts: [
    {
      title: "The architecture of neurotransmission",
      sections: [
        {
          id: "s1-anatomy",
          title: "Anatomical versus chemical basis of neurotransmission",
          pages: "1–3",
          blocks: [
            { type: "p", text: "Neurotransmission can be described in three ways: **anatomically, chemically and electrically**. Its anatomical basis is neurons and the connections between them, the **synapses**." },
            { type: "defs", items: [
              ["Anatomically addressed nervous system", "The complex of **“hard-wired” synaptic connections** between neurons: a wiring diagram that ferries electrical impulses to wherever the “wire” is plugged in, at a synapse."],
              ["Chemically addressed nervous system", "The **chemical basis** of neurotransmission: how chemical signals are **coded, decoded, transduced and sent** along the way. It is complementary to the anatomical system, and it is where drugs act."]
            ] },
            { type: "callout", kind: "analogy", text: "The anatomically addressed brain is like **millions of telephone wires within thousands of cables**. A neurotransmitter is packaged in the presynaptic terminal **like ammunition in a loaded gun**, then fired at the postsynaptic neuron to target its receptors." },
            { type: "h", text: "Where synapses form" },
            { type: "table", caption: "Synapse types (Figure 1-2)", head: ["Synapse", "From", "To"], rows: [
              ["**Axodendritic**", "Axon of neuron 1", "Dendrite of neuron 2 (often on a dendritic spine)"],
              ["**Axosomatic**", "Axon of neuron 1", "Soma (cell body) of neuron 2"],
              ["**Axoaxonic**", "Axon of neuron 1", "Axon of neuron 2, especially at its **beginning (initial segment)** and its **end (terminal)**"]
            ] },
            { type: "p", text: "These synapses are **asymmetric**: communication is structurally designed to run in **one direction**, **anterograde**, from the axon of the first neuron to the dendrite, soma or axon of the second. So **presynaptic elements differ from postsynaptic elements**." },
            { type: "h", text: "Scale" },
            { type: "list", items: [
              "The human brain has **tens of billions of neurons**, each linked to **thousands** of other neurons, giving **trillions** of synapses. (Later in the chapter Stahl puts it as a hundred billion neurons making an estimated trillion chemically neurotransmitting synapses.)",
              "Neurons come in many **sizes, lengths and shapes** that determine their functions, and their **location** in the brain also determines function.",
              "When neurons malfunction, **behavioral symptoms** may occur. When drugs alter neuronal function, symptoms may be **relieved, worsened or produced**."
            ] },
            { type: "p", text: "Understanding the chemically addressed nervous system is a prerequisite for grasping how psychopharmacological agents work, because they **target key molecules involved in neurotransmission** (the drug targets themselves are covered in [[ch:ch02|Chapter 2]] and Chapter 3). It is also what makes a clinician **“neurobiologically informed”**: able to translate new findings on brain circuitry, functional neuroimaging and genetics into how psychiatric disorders are diagnosed and treated." },
            { type: "compare", items: [
              { title: "Anatomically addressed", color: "drug", points: ["Neurons and synapses", "“Hard-wired” connections", "Telephone wires in cables", "Signal goes where the wire is plugged in"] },
              { title: "Chemically addressed", color: "mech", points: ["Chemical coding, decoding and transduction", "Includes diffusion beyond synapses", "Cell phones within range of a tower", "Where psychotropic drugs act"] }
            ] }
          ]
        },
        {
          id: "s1-neuron",
          title: "General structure of a neuron and the synapse",
          pages: "2–5",
          blocks: [
            { type: "p", text: "The book often draws a generic neuron, but many neurons have **unique structures** depending on where they sit in the brain and what they do. All of them share a common plan." },
            { type: "defs", title: "Parts of a neuron (Figure 1-1)", items: [
              ["Soma (cell body)", "The **command center** of the nerve; it contains the **nucleus**."],
              ["Dendrites", "Receive information from other neurons, sometimes via **dendritic spines**, often through an elaborately branching **dendritic tree**."],
              ["Axon", "Sends information to other neurons by forming **presynaptic terminals**."],
              ["En passant terminals", "Presynaptic terminals formed **as the axon passes by** a target."],
              ["Presynaptic axon terminals", "Terminals formed **where the axon ends**."]
            ] },
            { type: "h", text: "The enlarged synapse (Figure 1-4)" },
            { type: "list", items: [
              "The **presynaptic neuron** sends its axon terminal to form a synapse with a **postsynaptic neuron**.",
              "**Mitochondria** in the presynaptic terminal provide the **energy** for neurotransmission.",
              "Neurotransmitters are stored in small **synaptic vesicles**, ready for release when the presynaptic neuron fires.",
              "The **synaptic cleft** is the gap between the two neurons. It contains proteins, scaffolding and molecular forms of **“synaptic glue”** that reinforce the connection.",
              "**Receptors are present on both sides of the cleft** and are key elements of chemical neurotransmission."
            ] },
            { type: "h", text: "Classic synaptic neurotransmission (Figure 1-3)" },
            { type: "flow", title: "From stimulus to postsynaptic signal", steps: [
              ["Reception", "Neuron A is stimulated by neurotransmitters, light, drugs, hormones or nerve impulses", "guide"],
              ["Integration", "Inputs are combined in neuron A", "hy"],
              ["Electrical encoding", "An electrical impulse travels down the axon", "drug"],
              ["Chemical encoding", "At the terminal the impulse becomes a released neurotransmitter", "mech"],
              ["Signal transduction", "Neuron B’s receptors receive and pass on the message", "clin"]
            ] },
            { type: "callout", kind: "key", text: "Communication **within** a neuron can be **electrical**, but communication **between** neurons is **chemical**." }
          ]
        }
      ]
    },
    {
      title: "Principles of chemical neurotransmission",
      sections: [
        {
          id: "s1-nts",
          title: "Neurotransmitters and “God’s pharmacopeia”",
          pages: "5–6",
          blocks: [
            { type: "p", text: "There are **more than a dozen** known or suspected neurotransmitters in the brain. For psychopharmacologists, six systems matter most because they are the ones **targeted by psychotropic drugs**. Each is covered in detail in the clinical chapters about the drugs that target it." },
            { type: "list", title: "The six key neurotransmitter systems", cols: true, items: [
              "[[nt:serotonin|Serotonin]]",
              "[[nt:norepinephrine|Norepinephrine]]",
              "[[nt:dopamine|Dopamine]]",
              "[[nt:acetylcholine|Acetylcholine]]",
              "[[nt:glutamate|Glutamate]]",
              "[[nt:gaba|GABA]] (γ-aminobutyric acid)"
            ] },
            { type: "p", text: "Other important neurotransmitters and **neuromodulators**, such as [[nt:histamine|histamine]] and various **neuropeptides and hormones**, are covered briefly in the relevant clinical chapters." },
            { type: "callout", kind: "mnemonic", text: "**SNaD** plus **AGG**: **S**erotonin, **N**orepinephrine, **D**opamine (the three monoamines) plus **A**cetylcholine, **G**lutamate, **G**ABA." },
            { type: "h", text: "God’s pharmacopeia" },
            { type: "p", text: "Some neurotransmitters are so similar to drugs that they have been called **“God’s pharmacopeia.”** The brain makes **its own morphine** ([[nt:endorphin|β-endorphin]]) and **its own marijuana** ([[nt:endocannabinoids|endocannabinoids]]). It may even make its own Prozac, its own Xanax and its own hallucinogens." },
            { type: "table", caption: "Drugs that came before the natural transmitter or target was found", head: ["Drug used first", "Natural counterpart discovered later"], rows: [
              ["[[drug:morphine|Morphine]]", "**β-endorphin**, the brain’s own morphine"],
              ["Marijuana (smoked)", "**Cannabinoid receptors** and **endocannabinoids**"],
              ["[[drug:diazepam|Valium (diazepam)]] and [[drug:alprazolam|Xanax (alprazolam)]]", "**Benzodiazepine receptors**"],
              ["[[drug:amitriptyline|Elavil (amitriptyline)]] and [[drug:fluoxetine|Prozac (fluoxetine)]]", "Molecular clarification of the **serotonin transporter** site ([[target:sert|SERT]])"]
            ] },
            { type: "callout", kind: "key", text: "The **great majority** of drugs that act in the central nervous system act on the **process of neurotransmission**, sometimes in a way that **mimics the brain’s own chemicals**." },
            { type: "h", text: "Why this matters for treatment" },
            { type: "p", text: "Input to any neuron can involve **many different neurotransmitters** coming from **many different circuits**. Understanding these inputs gives a **rational basis for selecting and combining** drugs. To influence abnormal neurotransmission, it may be necessary to **target neurons in specific circuits**. Because those circuits use several neurotransmitters, it may be not only rational but **necessary to use multiple drugs with multiple neurotransmitter actions**, especially when single agents with single mechanisms do not relieve symptoms. This theme recurs in every disorder chapter." }
          ]
        },
        {
          id: "s1-classic",
          title: "Classic and retrograde neurotransmission",
          pages: "6–7",
          blocks: [
            { type: "h", text: "Classic (anterograde) neurotransmission" },
            { type: "steps", items: [
              ["Electrical within the first neuron", "Neurons send electrical impulses from one part of the cell to another via their **axons**. These impulses do **not jump directly** to other neurons."],
              ["Chemical across the synapse", "The first neuron hurls a chemical messenger (a **neurotransmitter**) at the receptors of a second neuron. This happens frequently, but **not exclusively**, at synapses. The conversion of the electrical impulse into a chemical signal is **excitation–secretion coupling**, the **first stage** of chemical neurotransmission."],
              ["Mostly one direction", "Predominantly, but not exclusively, from the **presynaptic axon terminal** to the **postsynaptic neuron**."],
              ["Continued in the second neuron", "Either the chemical information is converted **back into an electrical impulse**, or, perhaps more elegantly, it triggers a **cascade of further chemical messages** that changes the second neuron’s **molecular and genetic functioning**."]
            ] },
            { type: "h", text: "Retrograde neurotransmission (Figure 1-5)" },
            { type: "p", text: "Postsynaptic neurons can also **“talk back”** to their presynaptic neurons, from the bottom to the top. Three kinds of chemical are produced specifically as retrograde neurotransmitters at some synapses:" },
            { type: "table", caption: "The retrograde neurotransmitters", head: ["Messenger", "Made where", "How it reaches the presynaptic neuron", "Presynaptic target"], rows: [
              ["[[nt:endocannabinoids|Endocannabinoids]] (EC, “endogenous marijuana”)", "Synthesized in the **postsynaptic** neuron", "Released and **diffuse** back", "Presynaptic **cannabinoid receptors** such as [[target:cb1|CB1]]"],
              ["[[nt:nitric-oxide|Nitric oxide (NO)]], a **gaseous** neurotransmitter", "Synthesized **postsynaptically**", "Diffuses **out of the postsynaptic membrane and into the presynaptic membrane**", "**cGMP-sensitive** targets (cyclic guanosine monophosphate)"],
              ["[[nt:neurotrophins|Neurotrophic factors]] such as **nerve growth factor (NGF)**", "Released from **postsynaptic** sites", "Diffuses to the presynaptic neuron, is **taken up into vesicles** and carried by **retrograde transport** all the way back to the cell nucleus", "The **genome**"]
            ] },
            { type: "p", text: "What these messengers tell the presynaptic neuron, and how they regulate the conversation between the two neurons, are subjects of **intense active investigation**." }
          ]
        },
        {
          id: "s1-volume",
          title: "Volume neurotransmission",
          pages: "6–9",
          blocks: [
            { type: "p", text: "Some neurotransmission does not need a synapse at all. Neurotransmission without a synapse is called **volume neurotransmission** or **nonsynaptic diffusion neurotransmission**." },
            { type: "steps", title: "How it works (Figure 1-6)", items: [
              ["Spillover", "A chemical messenger sent by one neuron to another can **spill over by diffusion** to sites distant from its synapse, if it diffuses away before it is destroyed."],
              ["Any compatible receptor", "Neurotransmission can occur at **any compatible receptor within the diffusion radius** of the neurotransmitter."],
              ["Only matching receptors respond", "If the neurotransmitter reaches a receptor that **cannot recognize it**, nothing happens, even though it has diffused there."]
            ] },
            { type: "callout", kind: "analogy", text: "Volume neurotransmission is like **cellular telephones**, which work anywhere within the transmitting radius of a cell tower. Neurotransmission happens in chemical **“puffs,”** and the brain is not only a collection of wires but also a sophisticated **“chemical soup.”**" },
            { type: "callout", kind: "pearl", text: "This is especially important for **drug action**: a drug acts **wherever there are relevant receptors**, not just where those receptors are innervated by synapses. **Modifying volume neurotransmission may be a major way several psychotropic drugs work.**" },
            { type: "h", text: "Example 1: dopamine in the prefrontal cortex (Figure 1-7)" },
            { type: "p", text: "The prefrontal cortex has **very few dopamine reuptake pumps** ([[target:dat|dopamine transporters, DATs]]) to end the action of released [[nt:dopamine|dopamine]]. The **striatum**, by contrast, has DATs **in abundance**. So dopamine released at a prefrontal synapse is free to spill over and stimulate neighboring receptors, such as [[target:d1|D1 receptors]], even where there is no synapse: on the same neuron outside the synapse, on neighboring dendrites, and on extrasynaptic receptors of a neighboring neuron." },
            { type: "h", text: "Example 2: monoamine autoreceptors (Figure 1-8)" },
            { type: "list", items: [
              "**Somatodendritic autoreceptors** sit on the dendrites and soma of monoamine neurons and **inhibit release** of neurotransmitter from the **axonal end** of the same neuron, inhibiting impulse flow from top to bottom.",
              "Some recurrent axon collaterals and other monoamine neurons may innervate these receptors directly, but they also appear to receive neurotransmitter from **dendritic release**.",
              "There is **no synapse and no synaptic vesicle** here, just neurotransmitter apparently **“leaked” from the neuron’s own dendrites** onto its own receptors, by a mechanism still being clarified.",
              "Regulation by somatodendritic autoreceptors is theoretically linked to the **mechanism of action of many antidepressants** (Chapter 7)."
            ] },
            { type: "callout", kind: "key", text: "**Not all chemical neurotransmission occurs at synapses.**" },
            { type: "compare", title: "Three ways neurons communicate", items: [
              { title: "Classic", color: "drug", points: ["Presynaptic → postsynaptic", "At synapses", "Asymmetric, anterograde"] },
              { title: "Retrograde", color: "guide", points: ["Postsynaptic → presynaptic", "Endocannabinoids, NO, NGF", "Postsynaptic neuron “talks back”"] },
              { title: "Volume", color: "mech", points: ["No synapse needed", "Diffusion to any compatible receptor", "PFC dopamine; somatodendritic autoreceptors"] }
            ] }
          ]
        },
        {
          id: "s1-coupling",
          title: "Excitation–secretion coupling",
          pages: "8–9",
          blocks: [
            { type: "p", text: "**Excitation–secretion coupling** is how a neuron **transduces an electrical stimulus into a chemical event**. When an electrical impulse invades the presynaptic axon terminal, it causes release of the chemical neurotransmitter stored there." },
            { type: "flow", title: "Step by step", steps: [
              ["Action potential", "Electrical impulses change the ionic charge across the membrane", "drug"],
              ["Sodium in", "[[target:vssc|Voltage-sensitive sodium channels (VSSCs)]] open; Na⁺ flows in and the charge moves along the axon", "mech"],
              ["Calcium in", "At the terminal, [[target:vscc|voltage-sensitive calcium channels (VSCCs)]] open", "guide"],
              ["Vesicles release", "Ca²⁺ influx makes vesicles anchored to the inner membrane **spill their contents** into the synapse", "hy"],
              ["Postsynaptic receptors", "Neurotransmitter acts on receptors of the next neuron", "clin"]
            ] },
            { type: "list", items: [
              "The way is paved by **prior synthesis and storage** of neurotransmitter in the presynaptic terminal.",
              "This happens **very quickly** once the impulse enters the terminal.",
              "The reverse also happens quickly: a neurotransmitter can be converted **back into an electrical message** in the postsynaptic neuron by **opening ion channels linked to neurotransmitters**, changing the flow of charge and ultimately firing action potentials."
            ] },
            { type: "callout", kind: "key", text: "Neurotransmission is **constantly transducing chemical signals into electrical signals, and electrical signals back into chemical signals.**" }
          ]
        }
      ]
    },
    {
      title: "Signal transduction cascades",
      sections: [
        {
          id: "s1-cascade",
          title: "Overview: the molecular pony express",
          pages: "9–11",
          blocks: [
            { type: "p", text: "Neurotransmission is part of a much larger process than one axon talking to one neuron. It can be seen as communication from the **genome of the presynaptic neuron** to the **genome of the postsynaptic neuron**, and then **back again** via retrograde neurotransmission. This involves long strings of chemical messages inside both neurons, called **signal transduction cascades**." },
            { type: "callout", kind: "analogy", text: "Signal transduction is a **molecular “pony express”**: specialized molecules act as a **sequence of riders**, each handing the message to the next, until it reaches a functional destination such as **gene expression** or activation of otherwise **“sleeping”** inactive molecules." },
            { type: "h", text: "Two opposing cascades (Figure 1-9)" },
            { type: "compare", items: [
              { title: "Kinase cascade (left)", color: "clin", points: ["First-messenger neurotransmitter", "Produces a chemical **second messenger**", "Activates a third-messenger **kinase**", "Kinase **adds phosphate** groups to fourth-messenger proteins (phosphoproteins)"] },
              { title: "Phosphatase cascade (right)", color: "guide", points: ["A different neurotransmitter **opens an ion channel**", "**Calcium** enters and is the second messenger", "Activates a third-messenger **phosphatase**", "Phosphatase **removes phosphate** groups, reversing the kinase"] }
            ] },
            { type: "p", text: "The **balance between kinase and phosphatase activity**, signaled by the balance between the two neurotransmitters that activate them, determines how much downstream activity becomes **active fourth messengers** able to trigger diverse biological responses such as **gene expression and synaptogenesis**." },
            { type: "callout", kind: "pearl", text: "**Each molecular site** in a cascade is a potential location for a **malfunction** associated with mental illness, and a potential **target for a psychotropic drug**." },
            { type: "h", text: "Time course of signal transduction (Figure 1-10)" },
            { type: "table", caption: "From first messenger to long-term effects", head: ["Stage", "Timing in the book"], rows: [
              ["Binding of the first messenger", "The start; initial events happen in **less than a second**"],
              ["Activation of ion channels or enzymatic formation of second messengers", "Within seconds"],
              ["Activation of third and fourth messengers (often phosphoproteins)", "Downstream, after the second messenger"],
              ["Activation of **immediate early genes**", "Begin within about **15 minutes**; their products last only **half an hour to an hour**"],
              ["Activation of **late genes**", "Hours; gene expression after receptor occupancy usually takes **hours**"],
              ["Long-term effects of late gene products", "Take **hours to days** to activate and can last **many days, or the lifetime** of a synapse or neuron"]
            ] },
            { type: "callout", kind: "key", text: "The ultimate effects of chemical neurotransmission are **not only delayed but also long-lasting**." }
          ]
        },
        {
          id: "s1-four",
          title: "The four key signal transduction cascades",
          pages: "11–12",
          blocks: [
            { type: "p", text: "Four of the most important cascades in the brain are the **G-protein-linked**, **ion-channel-linked**, **hormone-linked** and **neurotrophin-linked** systems (Figure 1-11). Each begins with a different first messenger binding to a unique receptor and activates very different downstream messengers. Having many cascades lets neurons respond in amazingly diverse ways." },
            { type: "table", wide: true, caption: "The four cascades compared", head: ["System", "First messenger", "Second messenger", "Third messenger", "To the genes"], rows: [
              ["**G-protein-linked**", "Neurotransmitter", "**cAMP** (made by an enzyme)", "**Protein kinase A**", "Phosphorylates **CREB**"],
              ["**Ion-channel-linked**", "Neurotransmitter", "**Calcium** (Ca²⁺)", "**Calcium/calmodulin kinase (CaMK)**", "Phosphorylates **CREB**"],
              ["**Hormone-linked**", "Hormone (e.g., **estrogen** and other steroids)", "**Hormone–nuclear receptor complex**, formed when the hormone binds its receptor in the **cytoplasm**", "The complex itself enters the nucleus", "Binds **hormone-response elements (HREs)**"],
              ["**Neurotrophin-linked**", "Neurotrophin", "**Ras** (a G protein), **Raf** (a kinase), **MEK**", "**ERK, RSK, MAPK, GSK-3** (a series of kinases)", "Gene expression controlling **synaptogenesis and neuronal survival**"]
            ] },
            { type: "callout", kind: "exam", text: "The **G-protein-linked** and **ion-channel-linked** cascades are the two triggered by **neurotransmitters**, and **many psychotropic drugs target one of these two**. Drugs acting on G-protein-linked systems are covered in [[ch:ch02|Chapter 2]]; drugs acting on ion-channel-linked systems in Chapter 3." },
            { type: "p", text: "In Figure 1-11 the G-protein and ion-channel systems **work together**, both producing activated kinases that phosphorylate CREB. In Figures 1-9 and 1-16 to 1-19 the same two kinds of system **work in opposition** (kinase versus phosphatase). The net effect always depends on the specific cascade and phosphoproteins involved." }
          ]
        },
        {
          id: "s1-second",
          title: "Forming a second messenger: the G-protein system",
          pages: "11–13",
          blocks: [
            { type: "p", text: "Every cascade passes its message from an **extracellular first messenger** to an **intracellular second messenger**. The second messenger differs by system:" },
            { type: "defs", items: [
              ["G-protein-linked", "A **chemical** (for example cAMP)."],
              ["Ion-channel-linked", "An **ion** such as **calcium**."],
              ["Hormone-linked", "The **hormone–nuclear receptor complex** formed when a hormone finds its receptor in the cytoplasm."],
              ["Neurotrophin-linked", "A complex set of second messengers, including **kinase enzymes** with an “alphabet soup” of names."]
            ] },
            { type: "h", text: "The four elements of the G-protein-linked system (Figure 1-12)" },
            { type: "list", ordered: true, items: [
              "The **first-messenger** neurotransmitter.",
              "A **receptor** belonging to the superfamily with **seven transmembrane regions** (the “7” on the receptor in the figures).",
              "A **G protein**, a connecting protein that can bind both to certain conformations of the receptor and to an enzyme system.",
              "The **enzyme system (E)** that synthesizes the second messenger."
            ] },
            { type: "flow", title: "How the second messenger is made (Figures 1-13 to 1-15)", steps: [
              ["Neurotransmitter binds", "The receptor changes conformation so it can fit the G protein", "drug"],
              ["G protein binds", "Binding to the binary neurotransmitter–receptor complex changes the G protein’s shape", "mech"],
              ["Enzyme binds", "The ternary neurotransmitter–receptor–G protein complex binds **adenylate cyclase**", "guide"],
              ["cAMP is made", "The **quaternary complex** activates the enzyme, which synthesizes the second messenger **cAMP**", "clin"]
            ] },
            { type: "p", text: "The neurotransmitter receptor and the G protein **cooperate**: the G protein can be thought of as **another type of receptor** associated with the inner membrane of the cell. Information passes from first to second messenger through **receptor–G protein–enzyme intermediaries**." },
            { type: "defs", title: "Complex vocabulary", items: [
              ["Binary complex", "Neurotransmitter + receptor."],
              ["Ternary complex", "Neurotransmitter + receptor + G protein."],
              ["Quaternary complex", "Neurotransmitter + receptor + G protein + enzyme; this is what produces the second messenger."]
            ] }
          ]
        },
        {
          id: "s1-phospho",
          title: "Beyond the second messenger: kinases versus phosphatases",
          pages: "13–15",
          blocks: [
            { type: "p", text: "Signal transduction has **two major ultimate targets: phosphoproteins and genes**. Many intermediate targets on the way to the gene are **phosphoproteins** that lie dormant until signal transduction wakes them up." },
            { type: "h", text: "Activating a third-messenger kinase through cAMP (Figure 1-16)" },
            { type: "steps", items: [
              ["Dormant state", "An inactive protein kinase exists as a **dimer** (two copies of the enzyme) bound to **regulatory units (R)**, which hold it in an inactive conformation."],
              ["cAMP arrives", "**Two copies of cAMP** bind to **each regulatory unit**."],
              ["Dissociation", "The regulatory units dissociate from the enzyme, and the dimer separates into **two active protein kinases**."],
              ["Ready to fire", "Each kinase is now ready to phosphorylate proteins. Stahl draws it with a **bow and arrow** shooting phosphate groups into “unsuspecting” fourth-messenger phosphoproteins."]
            ] },
            { type: "h", text: "Activating a third-messenger phosphatase through calcium (Figure 1-17)" },
            { type: "p", text: "Meanwhile, the kinase’s **nemesis** forms. Another first messenger opens an **ion channel**, letting **calcium** in as second messenger. Calcium binds the inactive phosphatase **calcineurin** and activates it. Stahl draws it with **scissors** ready to rip phosphate groups off fourth-messenger phosphoproteins." },
            { type: "h", text: "The clash: what phosphorylation does (Figures 1-18 and 1-19)" },
            { type: "list", items: [
              "Fourth-messenger phosphoproteins include **ligand-gated ion channels**, **voltage-gated ion channels** and **regulatory enzymes**.",
              "Kinases **put phosphates on**; phosphatases **take them off**.",
              "For some phosphoproteins **phosphorylation activates**; for others **dephosphorylation activates**.",
              "Activated phosphoproteins can **change neurotransmitter synthesis**, **alter neurotransmitter release**, **change ion conductance**, and keep the neurotransmission apparatus in a state of **readiness or dormancy**."
            ] },
            { type: "callout", kind: "caution", title: "Calcium cuts both ways", text: "Calcium can activate **both kinases** (calcium/calmodulin kinases) **and phosphatases** (calcineurin). The net result of calcium depends on **which substrates** are activated, because different kinases and phosphatases target very different substrates. Always ask which cascade and which phosphoproteins are involved." }
          ]
        }
      ]
    },
    {
      title: "From neurotransmission to gene expression",
      sections: [
        {
          id: "s1-genes",
          title: "Phosphoprotein cascades that trigger gene expression",
          pages: "15–18",
          blocks: [
            { type: "p", text: "The ultimate cellular function neurotransmission often seeks to modify is **gene expression**: turning a gene **on** or **off**. All four cascades end with the last molecule **influencing gene transcription**." },
            { type: "h", text: "CREB: where the two neurotransmitter cascades meet" },
            { type: "list", items: [
              "**CREB** (cAMP response element-binding protein) is a **transcription factor in the cell nucleus** that activates genes, especially **immediate early genes**. It responds to **phosphorylation** of its regulatory units.",
              "**G-protein route:** activated **protein kinase A** translocates into the nucleus and puts a phosphate on CREB, activating it; the nearby gene is expressed, first as RNA and then as protein.",
              "**Ion-channel route:** calcium entering the neuron interacts with **calmodulin**, activating **calcium/calmodulin-dependent protein kinases**. This is a **kinase, not the phosphatase** of Figures 1-9, 1-17 and 1-19. It too translocates to the nucleus and phosphorylates CREB."
            ] },
            { type: "h", text: "Hormones" },
            { type: "p", text: "Some hormones, such as **estrogen, thyroid hormone and cortisol**, act at **cytoplasmic receptors**. The **hormone–nuclear receptor complex** translocates to the nucleus, finds **hormone-response elements (HREs)** in genes, and acts as a **transcription factor** to activate nearby genes." },
            { type: "h", text: "Neurotrophins" },
            { type: "flow", title: "The neurotrophin kinase cascade", steps: [
              ["Neurotrophin", "First messenger", "clin"],
              ["Ras", "A **G protein**", "drug"],
              ["Raf", "A **kinase**; phosphorylates MEK", "mech"],
              ["MEK", "MAPK kinase / ERK kinase", "guide"],
              ["ERK, RSK, MAPK or GSK-3", "Further kinases", "hy"],
              ["Gene expression", "A transcription factor is phosphorylated", "case"]
            ] },
            { type: "callout", kind: "exam", text: "You do **not** need the names. Remember the take-home point: **neurotrophins trigger a cascade of kinase after kinase that ultimately changes gene expression**, regulating **synaptogenesis, cell survival** and the plastic changes needed for **learning, memory and even disease expression** in brain circuits." },
            { type: "h", text: "What genes, and what for" },
            { type: "p", text: "A very wide variety of genes are targeted by all four pathways: genes for **neurotransmitter synthetic enzymes, growth factors, cytoskeleton proteins, cell adhesion proteins, ion channels, receptors** and the **intracellular signaling proteins** themselves. Expression can mean **more or fewer copies** of any of these proteins." },
            { type: "compare", items: [
              { title: "Neuronal responses", color: "mech", points: ["Synaptogenesis", "Strengthening of a synapse", "Neurogenesis", "Apoptosis", "More or less efficient information processing in cortical circuits"] },
              { title: "Behavioral responses", color: "clin", points: ["Learning and memory", "**Antidepressant responses** to antidepressants", "**Symptom reduction by psychotherapy**", "Possibly even the production of a mental illness"] }
            ] },
            { type: "p", text: "These same factors of gene expression are thought to underlie both the **actions of psychopharmacological drugs** and the **mechanisms of psychiatric disorders**." }
          ]
        },
        {
          id: "s1-expression",
          title: "Molecular mechanism of gene expression",
          pages: "18–19",
          blocks: [
            { type: "p", text: "Because the most powerful way for a neuron to alter its function is to **change which genes are turned on or off**, it is worth knowing how neurotransmission regulates gene expression." },
            { type: "h", text: "How many genes?" },
            { type: "list", items: [
              "The human genome contains about **20,000 genes** on **23 chromosomes**.",
              "Genes occupy only **a few percent** of the DNA. The other **96%** used to be called **“junk” DNA** because it does not code proteins; it is now known to be **critical for structure and for regulating** whether a gene is expressed or silent.",
              "What matters is not just how many genes we have but **whether, when, how often and under which circumstances** they are expressed."
            ] },
            { type: "callout", kind: "caution", title: "A note on the numbers", text: "The book states that the genes lie “within 3 million base pairs of DNA.” The human genome is usually given as about **3 billion** base pairs, so read that figure with care. The point that matters, that only a small fraction of DNA codes for protein, is unaffected." },
            { type: "h", text: "Anatomy of a gene (Figure 1-20)" },
            { type: "defs", items: [
              ["Coding region", "The direct template for its RNA. It is **transcribed** into RNA by **RNA polymerase**, which must be activated or it will not work."],
              ["Regulatory region", "Contains an **enhancer** element and a **promoter** element that can initiate gene expression with the help of **transcription factors**."]
            ] },
            { type: "flow", title: "Turning a gene on (Figures 1-20 to 1-22)", steps: [
              ["Gene is off", "The transcription factor has not been activated", "drug"],
              ["Phosphorylation", "Protein kinase phosphorylates the transcription factor", "mech"],
              ["Binding", "The activated transcription factor binds the regulatory region", "guide"],
              ["Transcription", "RNA polymerase is activated; the coding region becomes **messenger RNA (mRNA)**", "hy"],
              ["Translation", "mRNA is translated into the gene’s **protein**", "clin"]
            ] },
            { type: "p", text: "A great deal of RNA is **never translated** into protein and instead has **regulatory** functions (see “A brief word about RNA” below)." }
          ]
        },
        {
          id: "s1-early-late",
          title: "Immediate early genes and late genes",
          pages: "19–23",
          blocks: [
            { type: "p", text: "Some genes are **immediate early genes** (Figure 1-23). They have names like **cJun** and **cFos** and belong to a family called **“leucine zippers.”** They are rapid responders to a neurotransmitter’s input." },
            { type: "callout", kind: "analogy", text: "Immediate early genes are like **special ops troops** sent into combat quickly, ahead of the full army. Their products, **Fos and Jun**, then wake up the much larger army of inactive **“late” soldier genes**." },
            { type: "list", items: [
              "Fos and Jun are **nuclear proteins**: they live and work in the nucleus.",
              "They start within **15 minutes** of neurotransmission but last only **half an hour to an hour**.",
              "When Fos and Jun **team up**, they form a **leucine zipper** transcription factor (Figure 1-25), which activates **later-onset genes** (Figures 1-26, 1-27, 1-29).",
              "Which late genes are drafted depends on **which neurotransmitter** sends the message, **how frequently**, and whether it works **in concert or in opposition** with other neurotransmitters acting on the same neuron.",
              "Late gene products can be **anything**: enzymes, receptors, structural proteins, transport factors, growth factors, ion channels (Figure 1-27). They modify neuronal function for **many hours or days**."
            ] },
            { type: "h", text: "The full chain of messengers (Figures 1-28 and 1-29)" },
            { type: "table", caption: "From neurotransmitter to biological response", head: ["Messenger", "Molecule", "Job"], rows: [
              ["**1st**", "Neurotransmitter", "Occupies its receptor outside the cell"],
              ["**2nd**", "cAMP", "Binds and wakes up the sleeping protein kinase"],
              ["**3rd**", "Protein kinase", "Travels to the nucleus and phosphorylates a sleeping transcription factor"],
              ["**4th**", "Activated transcription factor", "Binds genes and causes synthesis of an immediate early gene product"],
              ["**5th**", "Fos and Jun (early gene products)", "Partner with each other"],
              ["**6th**", "Fos–Jun leucine zipper", "A new transcription factor that activates a late gene"],
              ["**7th**", "Late gene protein product", "Mediates a biological response important to the neuron"]
            ] },
            { type: "h", text: "Genes modify behavior, and behavior modifies genes" },
            { type: "p", text: "Neurotransmitter-induced cascades change the synthesis not only of a neuron’s own receptors but of many postsynaptic proteins, including enzymes and receptors for **other** neurotransmitters. If gene expression changes connections and their functions, **genes can modify behavior**. In the other direction, **learning and experience**, including **education and even psychotherapy**, can alter which genes are expressed, changing the distribution and strength of synaptic connections and producing long-term changes in behavior." },
            { type: "callout", kind: "key", text: "Genes do **not** directly regulate neuronal functioning. They regulate the **proteins** that create neuronal functioning, so changes in function must **wait for changes in protein synthesis**." }
          ]
        }
      ]
    },
    {
      title: "Epigenetics and RNA",
      sections: [
        {
          id: "s1-epi",
          title: "Epigenetics: which genes are read",
          pages: "23–24",
          blocks: [
            { type: "p", text: "**Genetics** is the DNA code for what a cell *can* transcribe into RNA or translate into protein. **Epigenetics** is a **parallel system** that determines whether any given gene is **actually made** into its RNA and protein, or is **ignored or silenced**. Having about 20,000 genes does not mean every gene is expressed, even in the brain." },
            { type: "callout", kind: "analogy", text: "If the genome is a **lexicon** of all protein “words,” the epigenome is the **story** that arranges those words into a coherent tale." },
            { type: "list", items: [
              "The genomic lexicon is the **same in every one of the 100+ billion neurons** and in all **200+ cell types** in the body.",
              "What makes a neuron a neuron and not a liver cell, and what turns a normal neuron into a malfunctioning one in a psychiatric disorder, is **which genes are expressed or silenced**.",
              "Malfunctioning neurons can also be affected by **inherited genes with abnormal nucleotide sequences**, which contribute to mental disorders if expressed.",
              "**Neurotransmission, genes, drugs and the environment** all regulate which genes are expressed or silenced. The result may be a compelling narrative (**learning and memory**), a tragedy (**drug abuse, stress reactions, psychiatric disorders**), or **therapeutic improvement** from medication or psychotherapy."
            ] },
            { type: "h", text: "Molecular mechanisms (Figure 1-30)" },
            { type: "p", text: "Epigenetic mechanisms turn genes on and off by **modifying the structure of chromatin**. **Chromatin** is made of **nucleosomes**, each an **octet of histone proteins** with DNA wrapped around it. The chemical modifications include **methylation, acetylation, phosphorylation** and others, all regulated by **neurotransmission, drugs and the environment**." },
            { type: "table", caption: "Epigenetic enzymes and their effects", head: ["Change", "Enzyme", "Effect on the gene"], rows: [
              "Methylation",
              ["Histone methylation", "**Histone methyltransferases**", "**Silences**"],
              ["Histone demethylation", "**Histone demethylases**", "**Activates**"],
              ["DNA methylation", "**DNA methyltransferases (DNMTs)**", "**Silences**"],
              ["DNA demethylation", "**DNA demethylases**", "**Activates**"],
              "Acetylation",
              ["Histone acetylation", "**Histone acetyltransferases**", "**Activates**"],
              ["Histone deacetylation", "**Histone deacetylases (HDACs)**", "**Silences**"]
            ] },
            { type: "list", items: [
              "All methyltransferases tag their substrates with **methyl groups donated from L-methylfolate via S-adenosyl-methionine (SAMe)**.",
              "**DNA methylation can eventually lead to histone deacetylation**, by activating HDACs.",
              "Methylated DNA or histones **compact chromatin**, closing off transcription factors’ access to promoter regions, so **no RNA or protein** is made. Silenced DNA represents features that are **not part of that cell’s “personality.”**"
            ] },
            { type: "compare", title: "The molecular gate", items: [
              { title: "Gate closed: gene silenced", color: "guide", points: ["**Methylation** (of DNA or histones)", "**Deacetylation** of histones (HDACs)", "Chromatin compressed", "Transcription factors cannot reach promoters"] },
              { title: "Gate open: gene activated", color: "clin", points: ["**Demethylation**", "**Acetylation** of histones", "Chromatin decompressed", "Transcription factors reach promoters and activate the gene"] }
            ] },
            { type: "callout", kind: "mnemonic", text: "**Methyl mutes, acetyl activates.** Adding methyl groups (or removing acetyl groups) closes the gate; removing methyl groups (or adding acetyl groups) opens it." }
          ]
        },
        {
          id: "s1-epi-change",
          title: "How epigenetics maintains or changes the status quo",
          pages: "24–26",
          blocks: [
            { type: "h", text: "Maintaining the status quo" },
            { type: "p", text: "Enzymes such as **DNMT1** (DNA methyltransferase 1) **maintain methylation** of specific DNA regions and keep various genes **quiet for a lifetime**. This keeps a neuron always a neuron and a liver cell always a liver cell, **including when a cell divides**. Methylation is presumably maintained at genes one cell does not need, even though another cell type might." },
            { type: "h", text: "Changing the status quo" },
            { type: "list", items: [
              "It used to be thought that a cell’s epigenetic pattern was **fixed after differentiation**. It is now known that epigenetics **can change in mature, differentiated neurons**.",
              "The initial pattern is set during **neurodevelopment**, giving each neuron a lifelong “personality,” but some neurons respond to experience with a **changing character arc**: **de novo** alterations in their epigenome.",
              "Triggers include **child abuse, adult stress, dietary deficiencies, productive new encounters, psychotherapy, drugs of abuse and psychotropic medications**. Previously silent genes can be activated and active genes silenced.",
              "**De novo DNA methylation** by **DNMT2 or DNMT3** silences genes that were previously active in a mature neuron. **Deacetylation by HDACs** does the same. **Demethylation or acetylation** reactivates previously silent genes."
            ] },
            { type: "compare", items: [
              { title: "Favorable epigenetic change", color: "clin", points: ["Learning (e.g., **spatial memory formation**)", "The **therapeutic actions** of psychopharmacological agents"] },
              { title: "Unfavorable epigenetic change", color: "guide", points: ["Becoming **addicted** to drugs of abuse", "“Abnormal learning”: **fear conditioning**, an **anxiety disorder**, a **chronic pain** condition"] }
            ] },
            { type: "h", text: "An unsolved mystery, and a hope" },
            { type: "p", text: "How a neuron knows **which** of its thousands of genes to silence or activate in response to stress, drugs and diet, and how this goes wrong when a psychiatric disorder develops, remains unknown. The hope is that epigenetic mechanisms could be harnessed to **treat addictions, extinguish fear, prevent chronic pain states**, and perhaps even **prevent progression of disorders such as schizophrenia** by identifying high-risk individuals before the disorder is irreversibly established." }
          ]
        },
        {
          id: "s1-rna",
          title: "A brief word about RNA",
          pages: "26–28",
          blocks: [
            { type: "h", text: "Alternative splicing (Figure 1-31)" },
            { type: "p", text: "The RNA that encodes our 20,000 genes is **messenger RNA (mRNA)**, the intermediate between DNA and protein. You might expect 20,000 genes to make 20,000 proteins, but they make far more." },
            { type: "steps", items: [
              ["Primary transcript", "DNA is transcribed into a “first draft” of RNA, the **primary transcript**."],
              ["Splicing", "Often the raw transcript is not translated directly. It can be **spliced**: sections are reorganized into different sequences, and some are removed and **not translated** into protein."],
              ["More proteins than genes", "**Alternative splicing** means **one gene can give rise to many proteins**, so the true molecular diversity of the brain is **greater than our 20,000 genes**."]
            ] },
            { type: "callout", kind: "analogy", text: "Splicing is like a **movie producer editing film**: the raw footage is cut, reordered and partly left on the cutting-room floor, so one shoot can yield different endings or a short trailer." },
            { type: "h", text: "Noncoding RNA and RNA interference (Figure 1-32)" },
            { type: "p", text: "Several forms of RNA do **not code for protein** and instead have **direct regulatory functions**: **ribosomal RNA (rRNA)**, **transfer RNA (tRNA)**, **small nuclear RNA (snRNA)**, and many other noncoding RNAs such as **small hairpin RNAs** (shRNA, sometimes called **microRNA, miRNA**), **interference RNA (iRNA)** and **small interfering RNA (siRNA)**." },
            { type: "flow", title: "RNA interference", steps: [
              ["Transcribed, not translated", "miRNA is made from DNA but never becomes protein", "drug"],
              ["Hairpin", "It folds into **hairpin loops**", "mech"],
              ["Exportin", "The enzyme **exportin** moves it to the cytoplasm", "guide"],
              ["Dicer", "The enzyme **dicer** chops it into pieces", "hy"],
              ["RISC", "Pieces bind the protein complex **RISC**, which binds mRNA", "clin"],
              ["No translation", "Protein synthesis from that mRNA is **inhibited**", "case"]
            ] },
            { type: "p", text: "So forms of RNA can lead **both to protein synthesis and to blocking it**. Future therapeutics may use iRNAs to **inhibit protein synthesis in genetic disorders such as Huntington’s disease**." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s1-summary",
          title: "Summary: genome talking to genome",
          pages: "28",
          blocks: [
            { type: "p", text: "The function of chemical neurotransmission is not so much for a presynaptic neurotransmitter to talk to its postsynaptic receptors, but for a **presynaptic genome to converse with a postsynaptic genome**: DNA to DNA, presynaptic “command center” to postsynaptic “command center” and back." },
            { type: "list", ordered: true, title: "The three molecular pony express routes", items: [
              "**Presynaptic synthesis route:** from the presynaptic genome to the synthesis and packaging of neurotransmitter and its supporting enzymes and receptors.",
              "**Postsynaptic route to the genome:** from receptor occupancy through second messengers all the way to the genome, turning on postsynaptic genes.",
              "**Postsynaptic route from the genome:** from newly expressed genes, as a molecular cascade of biochemical consequences throughout the postsynaptic neuron."
            ] },
            { type: "table", caption: "Why effects are delayed and long-lasting", head: ["Event", "Timescale"], rows: [
              ["Neurotransmitter binding, ion flows, second messengers", "Start and end within **milliseconds to seconds**"],
              ["From receptor occupancy to gene expression", "Usually **hours**"],
              ["Biochemical events set off by gene activation", "Begin **many hours to days** later; last **days or weeks**"],
              ["Overall", "A **brief puff** of neurotransmitter can trigger a postsynaptic reaction that takes **hours to days** to develop and lasts **days to weeks or even a lifetime**"]
            ] },
            { type: "callout", kind: "key", text: "**Every component** of chemical neurotransmission is a candidate for drug action. Most psychotropic drugs today act on **neurotransmitters, their enzymes and especially their receptors**. Future drugs will likely act directly on **biochemical cascades** and on the elements that **control pre- and postsynaptic gene expression**. Mental and neurological illnesses affect these same processes." },
            { type: "p", text: "The neuron keeps **modifying its synaptic connections throughout life** in response to learning, life experiences, genetic programming, epigenetic changes, drugs and diseases, with chemical neurotransmission underlying all of them." },
            { type: "table", caption: "Where Chapter 1 leads", head: ["Idea introduced here", "Developed in"], rows: [
              ["Drugs that act on G-protein-linked receptors, transporters and enzymes", "[[ch:ch02|Chapter 2]]"],
              ["Drugs that act on ion channels (ligand-gated and voltage-sensitive)", "Chapter 3"],
              ["Dopamine, serotonin and glutamate networks", "Chapter 4"],
              ["Somatodendritic autoreceptors and antidepressant action", "Chapter 7"],
              ["Epigenetics in fear conditioning, chronic pain and addiction", "Chapters 8, 9 and 13"]
            ] }
          ]
        },
        {
          id: "s1-vignettes",
          title: "Clinical vignettes: applying the chapter",
          blocks: [
            { type: "p", text: "Short illustrative scenarios written for this app to show how Chapter 1’s principles appear in practice. They are teaching devices, not cases from the book." },
            { type: "case", title: "Clinical vignette: “Why isn’t it working yet?”", text: "A patient started on an antidepressant two days ago asks why she feels no better, since the drug “reached her brain” within hours.", point: "Receptor binding happens in seconds, but drug effects mediated by gene expression unfold over **hours to days** and can last much longer. The book lists **antidepressant responses** among the behavioral results of gene expression triggered by signal transduction." },
            { type: "case", title: "Clinical vignette: adding a second mechanism", text: "A patient has had only a partial response to a medication with a single mechanism. The attending adds a second drug acting on a different neurotransmitter system and explains the reasoning to the team.", point: "Neurons in a circuit receive input from **many neurotransmitters**. When a single mechanism is not enough, Stahl argues it can be rational, even necessary, to use **multiple drugs with multiple neurotransmitter actions**." },
            { type: "case", title: "Clinical vignette: “Can talking change my brain?”", text: "A skeptical patient asks whether psychotherapy can have any biological effect.", point: "**Behavior modifies genes**: learning, experience and **psychotherapy** can change which genes are expressed, including through **epigenetic** mechanisms, altering the strength of synaptic connections." },
            { type: "case", title: "Clinical vignette: a drug where there is no synapse", text: "A student asks how a drug can affect prefrontal dopamine receptors that are not part of any synapse.", point: "**Volume neurotransmission**: in the prefrontal cortex, **few DATs** let dopamine diffuse to extrasynaptic receptors, and drugs act **wherever relevant receptors exist**, not only at synapses." }
          ]
        }
      ]
    }
  ]
});
