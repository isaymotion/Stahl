/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
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
