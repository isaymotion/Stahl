/*
 * Chapter registry.
 * Every chapter of the book is listed so the menu shows the whole roadmap. Set `ready: true`
 * once data/chNN/ exists; only ready chapters are loaded. `pages` are the book's printed page numbers.
 */
window.SP = window.SP || {};
SP.chapters = SP.chapters || {};
SP.add = function (id, key, value) {
  (SP.chapters[id] = SP.chapters[id] || {})[key] = value;
};
SP.BOOK = "Stahl’s Essential Psychopharmacology, 5th ed.";
SP.CHAPTER_FILES = ['guide', 'highyield', 'cards-mech', 'cards-drugs', 'cards-clinical', 'cards-cases', 'glossary'];

SP.manifest = [
  {
    id: 'ch01', number: 1, ready: true, pages: '1–28',
    title: 'Chemical Neurotransmission',
    short: 'Chemical neurotransmission',
    summary: 'The anatomically and chemically addressed nervous system; classic, retrograde and volume neurotransmission; excitation–secretion coupling; the four signal transduction cascades from first messenger to gene; immediate early and late genes; epigenetics; and RNA splicing and interference.',
    files: SP.CHAPTER_FILES
  },
  {
    id: 'ch02', number: 2, ready: true, pages: '29–50',
    title: 'Transporters, Receptors, and Enzymes as Targets of Psychopharmacological Drug Action',
    short: 'Transporters, receptors and enzymes',
    summary: 'The five molecular targets of psychotropic drugs; SLC transporter families, SERT/NET/DAT and how SSRIs and stimulants block them; vesicular transporters and VMAT2 inhibitors; G-protein-linked receptors and the agonist spectrum; enzyme inhibitors, GSK-3 and lithium; and CYP450 metabolism and pharmacogenomics.',
    files: SP.CHAPTER_FILES
  },
  {
    id: 'ch03', number: 3, ready: true, pages: '51–76',
    title: 'Ion Channels as Targets of Psychopharmacological Drug Action',
    short: 'Ion channels',
    summary: 'Ligand-gated (ionotropic) channels: pentameric GABA-A, nicotinic, 5HT3 and glycine receptors and tetrameric glutamate receptors; the drugs of Table 3-2; the agonist spectrum, five channel states and nicotine; PAMs and NAMs; and voltage-sensitive sodium and calcium channels, α2δ, snares and excitation–secretion coupling.',
    files: SP.CHAPTER_FILES
  },
  {
    id: 'ch04', number: 4, ready: true, pages: '77–158',
    title: 'Psychosis, Schizophrenia, and the Neurotransmitter Networks Dopamine, Serotonin, and Glutamate',
    short: 'Psychosis and schizophrenia',
    summary: 'Psychosis as a syndrome and its three hypotheses; the dopamine network (synthesis, D1–D5, five pathways, direct and indirect motor loops, the mesostriatal hub); glutamate recycling, glycine and D-serine, NMDA hypofunction at GABA interneurons; serotonin synthesis, autoreceptors and receptor-by-receptor network effects; 5HT2A in hallucinogen, Parkinson’s and dementia psychosis; and schizophrenia’s five dimensions, violence, causes and course.',
    files: SP.CHAPTER_FILES
  },
  {
    id: 'ch05', number: 5, ready: true, pages: '159–243',
    title: 'Targeting Dopamine and Serotonin Receptors for Psychosis, Mood, and Beyond: So-Called “Antipsychotics”',
    short: 'So-called “antipsychotics”',
    summary: 'D2 blockade pathway by pathway: antipsychotic action, secondary negative symptoms, prolactin and motor side effects; tardive dyskinesia and VMAT2 inhibitors; first-generation D2 antagonists; how 5HT2A antagonism, D2 partial agonism and 5HT1A partial agonism change the picture; mania, depression, agitation, sedation and cardiometabolic risk; binding profiles of the pines, dones, pips and rip; and future mechanisms (TAAR1, muscarinic).',
    files: SP.CHAPTER_FILES
  },
  { id: 'ch06', number: 6, ready: false, pages: '244–282', title: 'Mood Disorders and the Neurotransmitter Networks Norepinephrine and γ-Aminobutyric Acid (GABA)', short: 'Mood disorders, NE and GABA', summary: 'The mood spectrum, norepinephrine and GABA networks, and the neurobiology of depression and mania.' },
  { id: 'ch07', number: 7, ready: false, pages: '283–358', title: 'Treatments for Mood Disorders: So-Called “Antidepressants” and “Mood Stabilizers”', short: 'Antidepressants and mood stabilizers', summary: 'Mechanisms of antidepressants and mood stabilizers, rapid-acting agents, combinations and treatment strategy.' },
  { id: 'ch08', number: 8, ready: false, pages: '359–378', title: 'Anxiety, Trauma, and Treatment', short: 'Anxiety and trauma', summary: 'Fear circuits, anxiety and trauma-related disorders, and their treatments.' },
  { id: 'ch09', number: 9, ready: false, pages: '379–400', title: 'Chronic Pain and Its Treatment', short: 'Chronic pain', summary: 'Pain pathways, central sensitization, and treatments that target them.' },
  { id: 'ch10', number: 10, ready: false, pages: '401–448', title: 'Disorders of Sleep and Wakefulness and Their Treatment: Neurotransmitter Networks for Histamine and Orexin', short: 'Sleep and wakefulness', summary: 'The sleep–wake circuitry, histamine and orexin, insomnia and excessive sleepiness, and their treatments.' },
  { id: 'ch11', number: 11, ready: false, pages: '449–485', title: 'Attention Deficit Hyperactivity Disorder and Its Treatment', short: 'ADHD', summary: 'Prefrontal circuits in ADHD and how stimulants and nonstimulants act on them.' },
  { id: 'ch12', number: 12, ready: false, pages: '486–537', title: 'Dementia: Causes, Symptomatic Treatments, and the Neurotransmitter Network Acetylcholine', short: 'Dementia and acetylcholine', summary: 'Causes of dementia, acetylcholine, and treatments for cognitive and behavioral symptoms.' },
  { id: 'ch13', number: 13, ready: false, pages: '538–578', title: 'Impulsivity, Compulsivity, and Addiction', short: 'Impulsivity, compulsivity and addiction', summary: 'Reward circuits, impulsive–compulsive disorders, substances of abuse and their treatments.' }
];

/* Shared data loaded with the chapters: databases and release notes. */
SP.extraFiles = [
  'data/db/neurotransmitters.js',
  'data/db/targets.js',
  'data/db/drugs.js',
  'data/db/circuits.js',
  'data/changelog.js'
];
