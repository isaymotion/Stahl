/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
  {
    id: 20,
    date: "2026-10-26",
    title: "Monitoring checklists",
    summary: "A new library page of monitoring checklists: what to check, when, and why, for lithium, valproate, clozapine and the antipsychotics.",
    items: [
      { type: "feature", text: "Monitoring checklists: one checklist per drug or drug class, with a tick box, the parameter, why it matters, and when to check it (baseline, early, ongoing) and what to act on. Tick boxes are a self-check only; nothing is saved.", href: "#/monitoring", link: "Monitoring checklists" },
      { type: "feature", text: "Two clearly separated layers: **From the book** (what Stahl says, with chapter and page chips that open the study guide) and **Standard schedule** (dashed boxes; not from the book, summarized from product labeling and published consensus guidelines, with the source named on each row). Switch *Show standard schedules* off to see the book layer alone." },
      { type: "feature", text: "Drug pages now have a **Monitoring** button when a checklist covers that drug or its class, and checklists appear in search." },
      { type: "feature", text: "Print checklist: creates an A4 PDF with tick boxes, one checklist per page; the overview page can print all checklists at once." }
    ]
  },
  {
    id: 19,
    date: "2026-10-15",
    title: "Auto-hiding tab bar and phone layout fixes",
    summary: "On phones and tablets the bottom tab bar now slides away while you read down the page and returns as soon as you scroll up.",
    items: [
      { type: "feature", text: "Auto-hiding tab bar (phones and tablets): it hides as you scroll down for more reading room and comes back on any scroll up, near the top or bottom of a page, when the menu is open, when you tap a search or form field, and when you change pages." },
      { type: "correction", text: "Fixed pages that were wider than the screen on iPhone (Teaching mode setup, Compare drugs and the Drug database), which made them wobble sideways." }
    ]
  },
  {
    id: 18,
    date: "2026-10-15",
    title: "Offline storage fix",
    summary: "Updating this app no longer wipes the offline copies of the other study apps on the same site.",
    items: [
      { type: "correction", text: "Offline storage no longer clears the other study apps’ offline copies." }
    ]
  },
  {
    id: 17,
    date: "2026-10-14",
    title: "Teaching mode: Name that drug, two teams, flags and an end-of-session review",
    summary: "A clue game built from the drug library, team scoring, flags, three text sizes for projectors, and a final slide listing what the group missed, which you can present again or save as a PDF.",
    items: [
      { type: "feature", text: "Name that drug: clues appear one at a time (mechanism, binding profile, a side effect, a use) with the drug’s own names hidden, until someone names it. Works across the 171 library drugs with enough clues, or within one drug type.", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "Two-team scoring: after each reveal, award the point to Team A, Team B or nobody (keys 1, 2, 0); the score sits in the top bar and the final slide names the winner.", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "Flag any slide to revisit (R), and switch text size between Normal, Large and Huge (+) for projectors.", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "End-of-session review: a final slide lists what the group missed and what you flagged, with answers. Present just those slides again, or save the review as a two-column PDF.", href: "#/teach", link: "Teaching mode" }
    ]
  },
  {
    id: 16,
    date: "2026-10-14",
    title: "Teaching mode: high-yield slides, flashcards, lightning rounds and a session builder",
    summary: "Teaching mode is now a full slide presenter. Build a session from any chapters and any mix of high-yield points, flashcards, board questions and vignettes, with an optional countdown per slide.",
    items: [
      { type: "feature", text: "High-yield slides: each point appears with its bold facts blanked; tap a blank or press Space to reveal them one at a time. In book order every topic gets a title slide.", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "Flashcard slides: mechanism, drug and clinical cards, question on screen and answer on reveal, with a “Did the room get it?” tally shown as a running room score.", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "Lightning rounds: a 10, 20, 30 or 60-second countdown per slide that reveals the answer when time runs out (P pauses).", href: "#/teach", link: "Teaching mode" },
      { type: "feature", text: "Session builder: pick several chapters and how many of each type (3, 5, 10, 20 or all), in book order, shuffled, or mixed together; quick-start presets include a High-yield lecture and a Lightning warm-up. “Present” buttons on high-yield pages and every card deck open it pre-set to that chapter.", href: "#/teach", link: "Build a session" }
    ]
  },
  {
    id: 15,
    date: "2026-10-14",
    title: "Quality-of-life update: phone layout, PDF handouts, drug-type filters",
    summary: "Four fixes: a roomier home screen on iPhone, real two-column PDFs for the high-yield summaries, drug-type filters when comparing, and a Nomenclature page organized by drug class.",
    items: [
      { type: "feature", text: "Home screen on phones: the hero is now a single full-width column, with the Continue button first and compact study-mode rows.", href: "#/", link: "Home" },
      { type: "feature", text: "High-yield PDF replaces the print dialog: a two-column PDF with page numbers and no browser header or footer. Choose A4 or Letter, answer key or fill-in worksheet, and one to four pages; Greek letters and symbols are embedded.", href: "#/c/ch01/handout", link: "Make a PDF" },
      { type: "feature", text: "All 13 chapters’ high-yield lists now download as one PDF, each chapter starting on a new page.", href: "#/print-all", link: "All high-yield (PDF)" },
      { type: "feature", text: "Compare drugs: filter by drug type (17 types, such as SSRIs and SNRIs or benzodiazepines and Z-drugs), type to narrow the lists, and the Compare button on a drug page opens that drug’s own class.", href: "#/compare", link: "Compare drugs" },
      { type: "correction", text: "Fixed: the drug-type filter buttons in Compare drugs did not respond on first release.", href: "#/compare", link: "Compare drugs" },
      { type: "feature", text: "Drug database: the Class dropdown is now a Drug type filter using the same 17 types.", href: "#/drugs", link: "Drug database" },
      { type: "feature", text: "Nomenclature page: organized by drug type with a jump bar, sub-headings by class, and stacked cards on phones.", href: "#/nbn", link: "Nomenclature" }
    ]
  },
  {
    id: 14,
    date: "2026-10-14",
    title: "Chapter 13: Impulsivity, compulsivity and addiction (all 13 chapters complete)",
    summary: "The final chapter is here: reward circuits, every class of abused substance and its treatment, behavioral addictions, OCD and violence. The whole book is now covered.",
    items: [
      { type: "chapter", ch: "ch13", text: "Chapter 13: study guide (17 sections), high-yield summary, mechanism, drug and clinical cards, and 55 board-style questions.", href: "#/c/ch13/guide", link: "Open Chapter 13" },
      { type: "update", text: "Library: 17 new agents (alcohol, naltrexone, nalmefene, acamprosate, disulfiram, ondansetron, methadone, buprenorphine, fentanyl, lofexidine, dronabinol, nabilone, nabiximols, cannabidiol, MDPV and more); β-endorphin and endocannabinoids expanded; new targets CB2 and aldehyde dehydrogenase.", href: "#/drugs/buprenorphine", link: "Buprenorphine" },
      { type: "feature", text: "Symptoms & circuits: six maps for impulsivity, compulsivity, drug reward, opioid withdrawal, OCD and binge eating.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: OTC naloxone and nalmefene spray (2023), the end of the X-waiver and weekly/monthly buprenorphine (2023), falling overdose deaths (2025), marijuana rescheduling (2026), cytisinicline (2026), ADAPT-2, and the MDMA and psilocybin decisions.", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 13,
    date: "2026-10-14",
    title: "Chapter 12: Dementia and acetylcholine",
    summary: "Chapter 12 covers the four major dementias, the amyloid cascade and AD staging, the acetylcholine network and every symptomatic treatment for memory, psychosis and agitation.",
    items: [
      { type: "chapter", ch: "ch12", text: "Chapter 12: study guide (19 sections), high-yield summary, mechanism, drug and clinical cards, and 53 board-style questions.", href: "#/c/ch12/guide", link: "Open Chapter 12" },
      { type: "update", text: "Library: acetylcholine now has pathways and full synthesis; 6 new drugs (donepezil, rivastigmine, galantamine, aducanumab, lecanemab, donanemab); memantine, pimavanserin, brexpiprazole and dextromethorphan expanded; new targets butyrylcholinesterase, ChAT, amyloid-β and secretases.", href: "#/nt/acetylcholine", link: "Acetylcholine" },
      { type: "feature", text: "Symptoms & circuits: five dementia maps for memory, psychosis, agitation, apathy and pseudobulbar affect.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: aducanumab (2021–2024), lecanemab (2023–2026), donanemab (2024), the first amyloid blood test (2025), revised AD criteria (2024), the donepezil patch (2022), and the pimavanserin, brexpiprazole, AVP-786 and dextromethorphan–bupropion decisions.", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 12,
    date: "2026-10-14",
    title: "Chapter 11: ADHD",
    summary: "Chapter 11 maps ADHD symptoms to prefrontal circuits, explains NE/DA tuning and the DAT threshold, and covers every stimulant and nonstimulant class.",
    items: [
      { type: "chapter", ch: "ch11", text: "Chapter 11: study guide (14 sections), high-yield summary, mechanism, drug and clinical cards, and 50 board-style questions.", href: "#/c/ch11/guide", link: "Open Chapter 11" },
      { type: "update", text: "Library: 7 new drugs (dexmethylphenidate, lisdexamfetamine, guanfacine, reboxetine, viloxazine, mazindol, centanafadine); methylphenidate, amphetamine, atomoxetine and clonidine expanded; new targets HCN channel and imidazoline receptor.", href: "#/drugs/guanfacine", link: "Guanfacine" },
      { type: "feature", text: "Symptoms & circuits: five ADHD maps for sustained and selective attention, impulsivity, hyperactivity and comorbid oppositional symptoms.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: Azstarys and viloxazine (2021), Xelstrym and adult viloxazine (2022), stimulant boxed warnings and generic lisdexamfetamine (2023), Onyda XR (2024) and centanafadine (2026).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 11,
    date: "2026-10-14",
    title: "Chapter 10: Sleep and Wakefulness",
    summary: "Chapter 10 adds the histamine and orexin networks, every class of hypnotic and wake-promoting agent, and the disorders of insomnia and sleepiness.",
    items: [
      { type: "chapter", ch: "ch10", text: "Chapter 10: study guide (19 sections), high-yield summary, mechanism, drug and clinical cards, and 42 board-style questions.", href: "#/c/ch10/guide", link: "Open Chapter 10" },
      { type: "update", text: "Library: histamine and orexin now have synthesis, termination and pathway entries; 16 new drugs (the five benzodiazepine hypnotics, suvorexant, lemborexant, daridorexant, diphenhydramine, doxylamine, ramelteon, tasimelteon, caffeine, solriamfetol, pitolisant, oveporexton); new targets H2, adenosine receptors, GHB receptor and histidine decarboxylase.", href: "#/nt/orexin", link: "Orexin" },
      { type: "feature", text: "Symptoms & circuits: seven maps for insomnia onset and maintenance, daytime sleepiness, cataplexy and the circadian rhythm disorders.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: daridorexant (2022), once-nightly sodium oxybate (2023), tirzepatide for OSA (2024), pitolisant for children (2024) and oveporexton, the first orexin agonist (2026).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 10,
    date: "2026-10-08",
    title: "Backup progress",
    summary: "Move your study progress between devices with a backup file.",
    items: [
      { type: "feature", text: "Backup progress, in the footer of every page: Export backup saves your card reviews, bookmarks, mistakes, exam history and settings to a file; Import backup restores it on another phone, tablet or computer. An import can be undone.", href: "#backup", link: "Backup progress" }
    ]
  },
  {
    id: 9,
    date: "2026-10-08",
    title: "Chapter 9: Chronic Pain and Its Treatment",
    summary: "Chapter 9 adds the pain pathway, central sensitization, fibromyalgia, and why SNRIs and α2δ ligands treat pain across psychiatry.",
    items: [
      { type: "chapter", ch: "ch09", text: "Chapter 9: study guide (9 sections), high-yield summary, mechanism, drug and clinical cards, and 30 board-style questions.", href: "#/c/ch09/guide", link: "Open Chapter 9" },
      { type: "feature", text: "Symptoms & circuits: eight maps for segmental and suprasegmental pain, painful symptoms of depression and the symptoms of fibromyalgia.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Library: lidocaine, clonidine, naloxone, cyclobenzaprine, sodium oxybate, armodafinil and atomoxetine; new targets VR1, NK1–3, CGRP, δ- and κ-opioid receptors; descending pain pathways added to norepinephrine.", href: "#/targets/vr1", link: "VR1" },
      { type: "update", text: "Post-publication update boxes: suzetrigine for acute pain (2025) and sublingual cyclobenzaprine for fibromyalgia (2025).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 8,
    date: "2026-10-08",
    title: "Chapter 8: Anxiety, Trauma, and Treatment",
    summary: "Chapter 8 adds the fear and worry circuits behind anxiety disorders and PTSD, fear conditioning and extinction, and treatment by disorder.",
    items: [
      { type: "chapter", ch: "ch08", text: "Chapter 8: study guide (16 sections), high-yield summary, mechanism, drug and clinical cards, and 35 board-style questions.", href: "#/c/ch08/guide", link: "Open Chapter 8" },
      { type: "feature", text: "Symptoms & circuits: nine maps for fear, worry, the amygdala’s outputs, PTSD re-experiencing and nightmares.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Library: prazosin and hydroxyzine added; anxiety uses and mechanisms added to benzodiazepines, pregabalin, gabapentin, buspirone and others; fear-learning facts for NMDA, β-adrenergic and α1 receptors.", href: "#/drugs/prazosin", link: "Prazosin" },
      { type: "update", text: "Post-publication update boxes: MDMA (2024) and brexpiprazole–sertraline (2025) not approved for PTSD, an LSD formulation for GAD (2024), and fasedienol for social anxiety (2025).", href: "#/updates", link: "See updates" }
    ]
  },
  {
    id: 7,
    date: "2026-10-08",
    title: "Chapter 7: Treatments for Mood Disorders",
    summary: "Chapter 7 adds every major drug mechanism for unipolar depression, treatment resistance, and the bipolar spectrum, with 48 new drug entries.",
    items: [
      { type: "chapter", ch: "ch07", text: "Chapter 7: study guide (32 sections), high-yield summary, mechanism, drug and clinical cards, and 60 board-style questions.", href: "#/c/ch07/guide", link: "Open Chapter 7" },
      { type: "update", text: "Drug database: the six SSRIs, vilazodone, five SNRIs, bupropion, agomelatine, mianserin, trazodone, nefazodone, brexanolone, zuranolone, esketamine, buspirone, all Table 7-2 tricyclics, the MAOIs, carbamazepine, lamotrigine, oxcarbazepine, eslicarbazepine, topiramate, riluzole, modafinil and quinidine; fuller profiles for fluoxetine, mirtazapine, vortioxetine, lithium, valproate, ketamine, dextromethorphan, dextromethadone, MDMA and psilocybin. New targets: nitric oxide synthase, inositol monophosphatase, protein kinase C, thyroid hormone receptor and VEGF.", href: "#/compare/escitalopram,duloxetine,bupropion", link: "Compare three agents" },
      { type: "feature", text: "Symptoms & circuits: eight treatment maps for residual symptoms, bipolar depression, mixed features and postpartum depression, and Chapter 6 mood and mania maps now list Chapter 7 treatments.", href: "#/circuits", link: "Symptoms & circuits" },
      { type: "update", text: "Post-publication update boxes: gepirone (2023), zuranolone and brexanolone, esketamine monotherapy (2025), cariprazine and lumateperone depression approvals, brexpiprazole decisions, dextromethorphan–bupropion for depression (2022) and Alzheimer agitation (2026), AVP-786 and esmethadone results, MDMA (2024) and psilocybin (2026).", href: "#/updates", link: "See updates" }
    ]
  },
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
