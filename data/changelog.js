/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
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
