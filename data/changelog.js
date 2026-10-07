/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
  {
    id: 6,
    date: "2026-10-08",
    title: "Chapter 6: Mood Disorders, Norepinephrine and GABA",
    summary: "Chapter 6 adds the mood spectrum, the norepinephrine and GABA networks, the neurobiology of depression, and symptom-to-circuit maps for depression and mania.",
    items: [
      { type: "chapter", ch: "ch06", text: "Chapter 6: study guide (17 sections), high-yield summary, mechanism, drug and clinical cards, and 44 board-style questions.", href: "#/c/ch06/guide", link: "Open Chapter 6" },
      { type: "feature", text: "Symptoms & circuits: 14 maps for the symptoms of major depression and mania, positive and negative affect, and circadian phase delay.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Library: norepinephrine and GABA now have synthesis, termination and pathway entries; new targets (GABA-C, β-adrenergic receptors, DBH, GABA-T, CRF, vasopressin 1B, glucocorticoid receptor, BDNF/TrkB) and flumazenil.", href: "#/nt/norepinephrine", link: "Norepinephrine" },
      { type: "update", text: "Post-publication update box: oral zuranolone for postpartum depression (2023).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 5,
    date: "2026-10-07",
    title: "Chapter 5: So-Called “Antipsychotics”",
    summary: "Chapter 5 adds the drugs for psychosis, with binding profiles for two dozen agents drawn from the book’s binding strips.",
    items: [
      { type: "chapter", ch: "ch05", text: "Chapter 5: study guide (25 sections), high-yield summary, mechanism, drug and clinical cards, and 52 board-style questions.", href: "#/c/ch05/guide", link: "Open Chapter 5" },
      { type: "update", text: "Drug database: 40 new entries, including every Table 5-1 agent, the pines, dones, pips and rip, pimavanserin, sertindole, perospirone, blonanserin, roluperidone, ulotaront, xanomeline, and benztropine, amantadine, dantrolene, reserpine, metformin and samidorphan. Binding bars follow the plus signs on the book’s strips.", href: "#/compare/clozapine,olanzapine,aripiprazole", link: "Compare three agents" },
      { type: "feature", text: "Symptoms & circuits: nine maps for the effects of D2 blockers, from secondary negative symptoms and prolactin to tardive dyskinesia and metabolic risk.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: clozapine REMS removed (2025), olanzapine–samidorphan (2021), 6-month paliperidone (2021), lumateperone and cariprazine depression approvals, iloperidone for bipolar I (2024), brexpiprazole PTSD decision (2025), and results for xanomeline–trospium, emraclidine, ulotaront and roluperidone.", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 4,
    date: "2026-10-07",
    title: "Chapter 4: Psychosis and Schizophrenia",
    summary: "Chapter 4 builds the dopamine, glutamate and serotonin networks behind psychosis, and the Symptoms & circuits page gets its first maps.",
    items: [
      { type: "chapter", ch: "ch04", text: "Chapter 4: study guide (33 sections), high-yield summary, mechanism, drug and clinical cards, and 52 board-style questions.", href: "#/c/ch04/guide", link: "Open Chapter 4" },
      { type: "feature", text: "Symptoms & circuits: 12 symptom-to-circuit maps for schizophrenia’s five dimensions, Parkinson’s and dementia psychosis, and drug-induced psychoses.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Library: dopamine, glutamate and serotonin entries now have synthesis, termination and pathway tables; a new D-serine entry; 21 new targets (D3–D5, 5HT2B, 5HT4, 5HT5, metabotropic glutamate groups, COMT, tyrosine hydroxylase, DAO, serine racemase and more); 9 new drugs (levodopa, LSD, psilocybin, mescaline, methamphetamine, cannabis, clozapine, pimavanserin, brexpiprazole).", href: "#/nt/dopamine", link: "Dopamine" },
      { type: "update", text: "Post-publication update boxes: pimavanserin not approved for dementia-related or Alzheimer psychosis (2021, 2022) and brexpiprazole approved for Alzheimer agitation (2023), with xanomeline–trospium and iclepertin linked into the psychosis chapter.", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 3,
    date: "2026-10-07",
    title: "Chapter 3: Ion Channels",
    summary: "Chapter 3 adds ligand-gated and voltage-sensitive ion channels, with the benzodiazepines, Z drugs, NMDA blockers and anticonvulsants that act on them.",
    items: [
      { type: "chapter", ch: "ch03", text: "Chapter 3: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.", href: "#/c/ch03/guide", link: "Open Chapter 3" },
      { type: "update", text: "Library: 16 new drugs (varenicline, the Z drugs, allopregnanolone, memantine, ketamine, dextromethorphan, pregabalin, gabapentin and more), new GABA-A, nicotinic, 5HT3, glutamate and \u03b12\u03b4 targets, and fuller sodium and calcium channel entries. Benzodiazepine entries now explain their PAM mechanism.", href: "#/targets/gabaa", link: "GABA-A receptor" },
      { type: "update", text: "Post-publication update boxes: zuranolone for postpartum depression (2023), dextromethorphan\u2013bupropion for depression (2022), esketamine monotherapy (2025) and esmethadone development halted (2024).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 2,
    date: "2026-10-07",
    title: "Chapter 2: Transporters, Receptors, and Enzymes",
    summary: "Chapter 2 is in, and the reference library grows with it: the drug database, neurotransmitters, receptors and side-effect mapper fill in from Tables 2-4 and 2-5.",
    items: [
      { type: "chapter", ch: "ch02", text: "Chapter 2: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.", href: "#/c/ch02/guide", link: "Open Chapter 2" },
      { type: "update", text: "Library: 11 new drugs (stimulants, VMAT2 inhibitors, tiagabine, levetiracetam, lithium and more), about 35 new receptors, transporters and enzymes with side-effect mapping, and glycine, melatonin and orexin entries.", href: "#/targets", link: "Receptors and targets" },
      { type: "update", text: "Post-publication update boxes: xanomeline–trospium approval (2024), MDMA-assisted therapy not approved (2024), valbenazine for Huntington’s chorea (2023), and the GlyT1 inhibitor iclepertin phase III results (2025).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 1,
    date: "2026-10-07",
    title: "First release: Chapter 1, Chemical Neurotransmission",
    summary: "The Stahl Study Companion launches with Chapter 1 and the full set of study tools. New chapters are added in book order.",
    items: [
      { type: "chapter", ch: "ch01", text: "Chapter 1: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.", href: "#/c/ch01/guide", link: "Open Chapter 1" },
      { type: "feature", text: "Reference library: drugs, neurotransmitters, receptors and targets, drug comparison, symptoms and circuits, nomenclature, glossary and post-publication updates.", href: "#/library", link: "Open the library" },
      { type: "feature", text: "New menu: a sidebar with every chapter and tool on wide screens, a slide-in menu and bottom tabs on phones, and previous/next chapter buttons on every chapter page." },
      { type: "feature", text: "Bookmarks for guide sections and library entries, and a print-all option for every chapter’s high-yield list.", href: "#/bookmarks", link: "Bookmarks" }
    ]
  }
];
