/* What's new. Newest entry FIRST. version = semver string (also the key for the unseen badge),
   date = ISO YYYY-MM-DD, title, optional summary, items: [{ type, text }].
   Item types: "chapter", "feature", "correction", "update", "content".
   Optional per item: `ch` (chapter id: tags that chapter "Updated" on the home page while the entry is unseen),
   `href` (link into the app, e.g. "#/c/ch05/guide") and `link` (link text, defaults to "Open").
   Every entry below the newest is a release listed in the app before the design refresh: dates, titles and
   text unchanged; each old integer id n became version "n.0.0" (same date order), so id 21 is the release before this one.
   For every release: add an entry at the top, then bump APP_META.version (data/app-meta.js), VERSION in sw.js,
   and "Latest version <Month YYYY>" in the footer (index.html), data/app-meta.js and README.md. */
window.APP_CHANGELOG = [
  {
    "version": "32.0.0",
    "date": "2026-11-12",
    "title": "Two-step vignettes for every chapter",
    "summary": "Chapters 8\u201313 get two-step vignettes too: 80 new clinical cases, so all 13 chapters now have them (170 in total).",
    "items": [
      {
        "type": "feature",
        "text": "New two-step vignettes for Chapters 8\u201313 (10 each for Chapters 8 and 9, 15 each for 10\u201313): anxiety and trauma, pain, sleep and wakefulness, ADHD, dementia, and impulsivity, compulsivity and addiction. Every choice has its reason and book page.",
        "ch": "ch12",
        "href": "#/c/ch12/cards/vignettes",
        "link": "Try Chapter 12"
      },
      {
        "type": "feature",
        "text": "Exams that include vignettes now draw them from any chapter you pick, and teaching mode's Two-step vignettes preset covers all 13 chapters.",
        "href": "#/exam",
        "link": "Take an exam"
      }
    ]
  },
  {
    "version": "31.0.0",
    "date": "2026-11-11",
    "title": "Two-step vignettes for Chapters 1\u20137",
    "summary": "90 new clinical cases, each in two linked questions: step two builds on the correct answer to step one. In practice, exams and teaching mode.",
    "items": [
      {
        "type": "feature",
        "text": "New deck on Chapters 1\u20137: Two-step vignettes (10 each for Chapters 1\u20133, 15 each for 4\u20137). Answer step 1, see why, then continue to step 2, which tells you what happened next. Every choice has its reason and book page, as with board questions.",
        "ch": "ch05",
        "href": "#/c/ch05/cards/vignettes",
        "link": "Try Chapter 5"
      },
      {
        "type": "feature",
        "text": "Exams can include the vignettes (on by default; untick \u201cInclude two-step vignettes\u201d to leave them out). Each vignette counts as two questions, and step 1 locks once you move on to step 2.",
        "href": "#/exam",
        "link": "Take an exam"
      },
      {
        "type": "feature",
        "text": "Teaching mode has a Two-step vignettes slide type and preset: the room answers step 1, you reveal it, then Next step shows step 2. Each step is scored, and both appear in the end-of-session review and PDF.",
        "href": "#/teach",
        "link": "Open teaching mode"
      },
      {
        "type": "feature",
        "text": "Vignettes join daily review, My mistakes, topics, the weak-spot map and search, like every other card."
      },
      {
        "type": "correction",
        "text": "Daily review on phones: a long topic label no longer makes the flashcard wider than the screen."
      }
    ]
  },
  {
    "version": "30.0.0",
    "date": "2026-11-11",
    "title": "Why each wrong answer is wrong \u2014 now every chapter",
    "summary": "Chapters 1\u20138 join the rest: all 608 board questions in the app now explain each wrong choice and cite the book page.",
    "items": [
      {
        "type": "feature",
        "text": "Board questions in Chapters 1\u20138 (378 of them) now carry a reason for every wrong choice with the book page beside it, the same as Chapters 9\u201313. Every board question in the app is now covered: 2,432 reasons in all.",
        "href": "#/exam",
        "link": "Take an exam"
      },
      {
        "type": "content",
        "text": "Explanations in Chapters 1\u20138 that were only a few words are now full sentences: 117 questions were rewritten, and every question names the page that teaches its answer.",
        "ch": "ch06"
      },
      {
        "type": "correction",
        "text": "Chapter 2: the CYP450 question now notes that the book\u2019s own figure caption says \u201cfive\u201d enzymes and then names six.",
        "ch": "ch02",
        "href": "#/c/ch02/guide"
      }
    ]
  },
  {
    "version": "29.0.0",
    "date": "2026-11-11",
    "title": "Why each wrong answer is wrong (Chapters 9\u201313)",
    "summary": "Every board question in Chapters 9\u201313 now explains each wrong choice and links to the book page it comes from.",
    "items": [
      {
        "type": "feature",
        "text": "Board questions in Chapters 9\u201313 carry a short reason for every wrong choice, with the book page beside it. In exam review each wrong choice shows its reason, and the one you picked stands out; on a practice card the reason for your answer appears first, with \u201cWhy not the others\u201d for the rest; in teaching mode the room\u2019s answer gets its reason and a button opens the others for discussion.",
        "href": "#/exam",
        "link": "Take an exam"
      },
      {
        "type": "content",
        "text": "Page chips on the answer and on each reason open the study-guide section that teaches that page.",
        "ch": "ch09"
      },
      {
        "type": "content",
        "text": "Explanations in Chapters 9\u201313 that were only a few words are now full sentences: 210 of the 230 questions were rewritten, and every one names its book page.",
        "ch": "ch13"
      },
      {
        "type": "correction",
        "text": "Chapter 12: the pimavanserin question\u2019s explanation kept post-book FDA decisions in the question itself; those now stay in the labeled update box, where post-2021 facts belong.",
        "ch": "ch12",
        "href": "#/c/ch12/guide/s12-psychosis"
      }
    ]
  },
  {
    "version": "28.0.0",
    "date": "2026-11-11",
    "title": "Drug-class cheat sheets",
    "summary": "One sheet per type of drug (17), built from the drug database, each with a two-column PDF.",
    "items": [
      {
        "type": "feature",
        "text": "Cheat sheets: what each class shares (targets most of its drugs act on, chapters), a binding-strength grid for classes where the book gives strengths (antipsychotics, SSRIs and SNRIs, NMDA antagonists), and a drug-by-drug table of key targets, uses, side effects with the reason, and pearls. Choose Key points or Everything, and filter by subgroup.",
        "href": "#/cheat",
        "link": "Cheat sheets"
      },
      {
        "type": "feature",
        "text": "Download any sheet as a two-column PDF (A4 or Letter) that uses the largest type that keeps it to the fewest pages. Each drug page's Same class box, the drug database's type filter and Compare now link to the matching sheet, and search finds them."
      }
    ]
  },
  {
    "version": "27.0.0",
    "date": "2026-11-10",
    "title": "Drug library: anxiety, pain, sleep, ADHD, dementia and addiction drugs in more depth",
    "summary": "125 new pearls and 61 side effects across 55 drugs from Chapters 8 to 13, each checked against the book. Completes the library pass.",
    "items": [
      {
        "type": "content",
        "text": "Sleep and wake: where each hypnotic sits on the half-life spectrum and what to do about early waking or a morning hangover, the orexin antagonists (receptor occupancy needed, dosing by effect rather than half-life), ramelteon and tasimelteon, diphenhydramine's anticholinergic action, modafinil and armodafinil, caffeine and sodium oxybate.",
        "ch": "ch10",
        "href": "#/drugs",
        "link": "Drug database"
      },
      {
        "type": "content",
        "text": "ADHD: stimulant side effects tied to DAT occupancy (late insomnia, evening rebound, tics, abuse with fast delivery), formulation durations, atomoxetine's dose-dependent effects, and when an NET inhibitor or α2A agonist is preferred. Anxiety and pain: benzodiazepine subtype roles and cautions, prazosin, pregabalin and gabapentin, clonidine.",
        "ch": "ch11"
      },
      {
        "type": "content",
        "text": "Addiction: stimulants, nicotine and varenicline, PCP, the classic hallucinogens, MDMA and psilocybin in therapy, cannabis risks and the cannabinoid medicines, opioids (morphine, methadone, buprenorphine, fentanyl), naloxone, naltrexone, nalmefene, acamprosate and lofexidine. Dementia: donepezil and memantine.",
        "ch": "ch13"
      },
      {
        "type": "content",
        "text": "Nothing was added where the book has nothing beyond the entry already: for example, hydroxyzine, tiagabine, levetiracetam, lidocaine, solriamfetol, pitolisant, daridorexant, rivastigmine, galantamine, the anti-amyloid antibodies, dexmethylphenidate, viloxazine, disulfiram and ondansetron."
      }
    ]
  },
  {
    "version": "26.0.0",
    "date": "2026-11-09",
    "title": "Drug library: antidepressants and mood stabilizers in more depth",
    "summary": "78 new pearls across 37 drugs from Chapters 6 and 7, each checked against the book.",
    "items": [
      {
        "type": "content",
        "text": "Antidepressant pearls: what sets each SSRI apart (fluoxetine's long half-life, escitalopram's tolerability and dosing versus citalopram's QTc ceiling, fluvoxamine in delusional depression), SNRIs, bupropion, mirtazapine and trazodone (including trazodone as a hypnotic), agomelatine, vilazodone and vortioxetine, and the MAOIs (interactions versus diet, MAO-A versus MAO-B).",
        "ch": "ch07",
        "href": "#/drugs",
        "link": "Drug database"
      },
      {
        "type": "content",
        "text": "Mood-stabilizer pearls: lithium's place in mania combinations, valproate and carbamazepine compared (migraine versus neuropathic pain, dosing trade-offs, blood counts), lamotrigine's role and rash, oxcarbazepine and eslicarbazepine. Rapid-acting agents: ketamine, esketamine, dextromethorphan with its boosters (quinidine or bupropion), dextromethadone and allopregnanolone.",
        "ch": "ch07"
      },
      {
        "type": "correction",
        "text": "Tianeptine: the book only lists it among tricyclics still in use (Table 7-2); the unsupported \"outside the US\" wording is removed.",
        "href": "#/drugs/tianeptine",
        "link": "Tianeptine"
      },
      {
        "type": "content",
        "text": "Most tricyclics, desvenlafaxine, milnacipran, levomilnacipran, nefazodone and the neurosteroid products are unchanged: Chapters 6 and 7 add nothing beyond what their entries already say."
      }
    ]
  },
  {
    "version": "25.0.0",
    "date": "2026-11-09",
    "title": "Drug library: antipsychotics and movement-disorder drugs in more depth",
    "summary": "68 new pearls across 32 drugs from Chapters 4 and 5, each checked against the book.",
    "items": [
      {
        "type": "content",
        "text": "Pearls for the antipsychotics: dosing and formulation details, monitoring, what makes each agent distinctive, and where each newer agent sits on the book's metabolic-risk spectrum (high, moderate or low). Covers clozapine, olanzapine, quetiapine, asenapine, risperidone, paliperidone, ziprasidone, iloperidone, lurasidone, lumateperone, aripiprazole, brexpiprazole, cariprazine, sertindole, perospirone, pimavanserin, chlorpromazine, fluphenazine, haloperidol, sulpiride and amisulpride.",
        "ch": "ch05",
        "href": "#/drugs",
        "link": "Drug database"
      },
      {
        "type": "content",
        "text": "Movement-disorder and metabolic drugs (tetrabenazine, reserpine, benztropine, dantrolene, metformin, samidorphan) and the investigational agents roluperidone, ulotaront and xanomeline now have pearls too. Lumateperone's low H1 affinity is added to its binding profile.",
        "ch": "ch05"
      },
      {
        "type": "correction",
        "text": "Aripiprazole's second long-acting injection is given every 4 to 6 to 8 weeks (it said 4 to 8). Lurasidone's schizophrenia approval is from age 10. Risperidone's prolactin rise is now attributed to D2 blockade in the tuberoinfundibular pathway, as in the book.",
        "href": "#/drugs/aripiprazole",
        "link": "Aripiprazole"
      },
      {
        "type": "content",
        "text": "The older first-generation agents listed only in Table 5-1 (loxapine, perphenazine, pimozide, thioridazine and others) are unchanged: the book has no further detail on them individually."
      }
    ]
  },
  {
    "version": "24.0.0",
    "date": "2026-11-09",
    "title": "Practice engine: confidence, topics and weak spots",
    "summary": "Mark how sure you are, see your strength by topic across all chapters, and build exams from topics or from your own mistakes.",
    "items": [
      {
        "type": "feature",
        "text": "How sure are you? On every board question, in the decks and in exams, you can mark Sure, Unsure or Guessing before you answer (keys S, U, G). A wrong answer you were sure of is flagged as a confident miss: a misconception, not a slip. Confident misses come first in your mistakes pile and get their own row in exam results. Turn the question off on the exam page if you prefer."
      },
      {
        "type": "feature",
        "text": "Topics and weak spots: every flashcard and board question now belongs to one of 28 topics that run across chapters (for example, GABA pulls questions from seven chapters, from anxiety to sleep to addiction). The map shows your strength in each topic from your last few tries, with your weakest topics on the home page.",
        "href": "#/topics",
        "link": "Open the map"
      },
      {
        "type": "feature",
        "text": "Practise a topic: cards and questions from every chapter that covers it, mixed together, weak and due items first. Mixing chapters this way makes review stick better than one chapter at a time."
      },
      {
        "type": "feature",
        "text": "Exam by topic or from your mistakes: the exam page can now build an exam from the topics you choose (or your weakest three in one tap) or from your mistakes pile, optionally with fresh questions on the same topics. A correct answer clears the question from the pile.",
        "href": "#/exam",
        "link": "Exam"
      }
    ]
  },
  {
    "version": "23.0.0",
    "date": "2026-11-09",
    "title": "Your progress, error reports, iPhone install hint",
    "summary": "A progress overview on the home page, a quick way to report a mistake, and a one-time install tip on iPhone and iPad.",
    "items": [
      {
        "type": "feature",
        "text": "Your progress on the home page: cards mastered and in progress, exam accuracy over your last five exams, the mistakes pile, and a bar for every chapter with its exam accuracy. The chapter you score lowest on (at least five exam questions) is outlined so you know where to go next.",
        "href": "#/",
        "link": "Home"
      },
      {
        "type": "feature",
        "text": "Report an error: a small link at the end of every study-guide section, under every flashcard answer, in exam review and on every drug page (plus one in the footer). It opens an email already filled in with where you were, so you only need to say what looks wrong."
      },
      {
        "type": "feature",
        "text": "On iPhone and iPad, the home page shows once how to add the app to your Home Screen so it opens full screen and works offline. Tap Got it to hide it."
      }
    ]
  },
  {
    "version": "22.0.0",
    "date": "2026-11-05",
    "title": "Design refresh",
    "items": [
      {
        "type": "feature",
        "text": "Match-device theme option, Alt+arrow back/forward, and your scroll position kept when you go back — the same controls as the other isaymotion apps."
      },
      {
        "type": "feature",
        "text": "Language switch on the About page (Tagalog interface strings are a draft)."
      }
    ]
  },
  {
    "version": "21.0.0",
    "date": "2026-11-02",
    "title": "Text size",
    "summary": "Make the text smaller or larger to suit your screen and eyes.",
    "items": [
      {
        "type": "feature",
        "text": "Text size: tap Aa in the top bar to make text smaller or larger. Your choice is saved on this device."
      }
    ]
  },
  {
    "version": "20.0.0",
    "date": "2026-10-26",
    "title": "Monitoring checklists",
    "summary": "A new library page of monitoring checklists: what to check, when, and why, for lithium, valproate, clozapine and the antipsychotics.",
    "items": [
      {
        "type": "feature",
        "text": "Monitoring checklists: one checklist per drug or drug class, with a tick box, the parameter, why it matters, and when to check it (baseline, early, ongoing) and what to act on. Tick boxes are a self-check only; nothing is saved.",
        "href": "#/monitoring",
        "link": "Monitoring checklists"
      },
      {
        "type": "feature",
        "text": "Two clearly separated layers: **From the book** (what Stahl says, with chapter and page chips that open the study guide) and **Standard schedule** (dashed boxes; not from the book, summarized from product labeling and published consensus guidelines, with the source named on each row). Switch *Show standard schedules* off to see the book layer alone."
      },
      {
        "type": "feature",
        "text": "Drug pages now have a **Monitoring** button when a checklist covers that drug or its class, and checklists appear in search."
      },
      {
        "type": "feature",
        "text": "Print checklist: creates an A4 PDF with tick boxes, one checklist per page; the overview page can print all checklists at once."
      }
    ]
  },
  {
    "version": "19.0.0",
    "date": "2026-10-15",
    "title": "Auto-hiding tab bar and phone layout fixes",
    "summary": "On phones and tablets the bottom tab bar now slides away while you read down the page and returns as soon as you scroll up.",
    "items": [
      {
        "type": "feature",
        "text": "Auto-hiding tab bar (phones and tablets): it hides as you scroll down for more reading room and comes back on any scroll up, near the top or bottom of a page, when the menu is open, when you tap a search or form field, and when you change pages."
      },
      {
        "type": "correction",
        "text": "Fixed pages that were wider than the screen on iPhone (Teaching mode setup, Compare drugs and the Drug database), which made them wobble sideways."
      }
    ]
  },
  {
    "version": "18.0.0",
    "date": "2026-10-15",
    "title": "Offline storage fix",
    "summary": "Updating this app no longer wipes the offline copies of the other study apps on the same site.",
    "items": [
      {
        "type": "correction",
        "text": "Offline storage no longer clears the other study apps’ offline copies."
      }
    ]
  },
  {
    "version": "17.0.0",
    "date": "2026-10-14",
    "title": "Teaching mode: Name that drug, two teams, flags and an end-of-session review",
    "summary": "A clue game built from the drug library, team scoring, flags, three text sizes for projectors, and a final slide listing what the group missed, which you can present again or save as a PDF.",
    "items": [
      {
        "type": "feature",
        "text": "Name that drug: clues appear one at a time (mechanism, binding profile, a side effect, a use) with the drug’s own names hidden, until someone names it. Works across the 171 library drugs with enough clues, or within one drug type.",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "Two-team scoring: after each reveal, award the point to Team A, Team B or nobody (keys 1, 2, 0); the score sits in the top bar and the final slide names the winner.",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "Flag any slide to revisit (R), and switch text size between Normal, Large and Huge (+) for projectors.",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "End-of-session review: a final slide lists what the group missed and what you flagged, with answers. Present just those slides again, or save the review as a two-column PDF.",
        "href": "#/teach",
        "link": "Teaching mode"
      }
    ]
  },
  {
    "version": "16.0.0",
    "date": "2026-10-14",
    "title": "Teaching mode: high-yield slides, flashcards, lightning rounds and a session builder",
    "summary": "Teaching mode is now a full slide presenter. Build a session from any chapters and any mix of high-yield points, flashcards, board questions and vignettes, with an optional countdown per slide.",
    "items": [
      {
        "type": "feature",
        "text": "High-yield slides: each point appears with its bold facts blanked; tap a blank or press Space to reveal them one at a time. In book order every topic gets a title slide.",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "Flashcard slides: mechanism, drug and clinical cards, question on screen and answer on reveal, with a “Did the room get it?” tally shown as a running room score.",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "Lightning rounds: a 10, 20, 30 or 60-second countdown per slide that reveals the answer when time runs out (P pauses).",
        "href": "#/teach",
        "link": "Teaching mode"
      },
      {
        "type": "feature",
        "text": "Session builder: pick several chapters and how many of each type (3, 5, 10, 20 or all), in book order, shuffled, or mixed together; quick-start presets include a High-yield lecture and a Lightning warm-up. “Present” buttons on high-yield pages and every card deck open it pre-set to that chapter.",
        "href": "#/teach",
        "link": "Build a session"
      }
    ]
  },
  {
    "version": "15.0.0",
    "date": "2026-10-14",
    "title": "Quality-of-life update: phone layout, PDF handouts, drug-type filters",
    "summary": "Four fixes: a roomier home screen on iPhone, real two-column PDFs for the high-yield summaries, drug-type filters when comparing, and a Nomenclature page organized by drug class.",
    "items": [
      {
        "type": "feature",
        "text": "Home screen on phones: the hero is now a single full-width column, with the Continue button first and compact study-mode rows.",
        "href": "#/",
        "link": "Home"
      },
      {
        "type": "feature",
        "text": "High-yield PDF replaces the print dialog: a two-column PDF with page numbers and no browser header or footer. Choose A4 or Letter, answer key or fill-in worksheet, and one to four pages; Greek letters and symbols are embedded.",
        "href": "#/c/ch01/handout",
        "link": "Make a PDF"
      },
      {
        "type": "feature",
        "text": "All 13 chapters’ high-yield lists now download as one PDF, each chapter starting on a new page.",
        "href": "#/print-all",
        "link": "All high-yield (PDF)"
      },
      {
        "type": "feature",
        "text": "Compare drugs: filter by drug type (17 types, such as SSRIs and SNRIs or benzodiazepines and Z-drugs), type to narrow the lists, and the Compare button on a drug page opens that drug’s own class.",
        "href": "#/compare",
        "link": "Compare drugs"
      },
      {
        "type": "correction",
        "text": "Fixed: the drug-type filter buttons in Compare drugs did not respond on first release.",
        "href": "#/compare",
        "link": "Compare drugs"
      },
      {
        "type": "feature",
        "text": "Drug database: the Class dropdown is now a Drug type filter using the same 17 types.",
        "href": "#/drugs",
        "link": "Drug database"
      },
      {
        "type": "feature",
        "text": "Nomenclature page: organized by drug type with a jump bar, sub-headings by class, and stacked cards on phones.",
        "href": "#/nbn",
        "link": "Nomenclature"
      }
    ]
  },
  {
    "version": "14.0.0",
    "date": "2026-10-14",
    "title": "Chapter 13: Impulsivity, compulsivity and addiction (all 13 chapters complete)",
    "summary": "The final chapter is here: reward circuits, every class of abused substance and its treatment, behavioral addictions, OCD and violence. The whole book is now covered.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch13",
        "text": "Chapter 13: study guide (17 sections), high-yield summary, mechanism, drug and clinical cards, and 55 board-style questions.",
        "href": "#/c/ch13/guide",
        "link": "Open Chapter 13"
      },
      {
        "type": "update",
        "text": "Library: 17 new agents (alcohol, naltrexone, nalmefene, acamprosate, disulfiram, ondansetron, methadone, buprenorphine, fentanyl, lofexidine, dronabinol, nabilone, nabiximols, cannabidiol, MDPV and more); β-endorphin and endocannabinoids expanded; new targets CB2 and aldehyde dehydrogenase.",
        "href": "#/drugs/buprenorphine",
        "link": "Buprenorphine"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: six maps for impulsivity, compulsivity, drug reward, opioid withdrawal, OCD and binge eating.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: OTC naloxone and nalmefene spray (2023), the end of the X-waiver and weekly/monthly buprenorphine (2023), falling overdose deaths (2025), marijuana rescheduling (2026), cytisinicline (2026), ADAPT-2, and the MDMA and psilocybin decisions.",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "13.0.0",
    "date": "2026-10-14",
    "title": "Chapter 12: Dementia and acetylcholine",
    "summary": "Chapter 12 covers the four major dementias, the amyloid cascade and AD staging, the acetylcholine network and every symptomatic treatment for memory, psychosis and agitation.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch12",
        "text": "Chapter 12: study guide (19 sections), high-yield summary, mechanism, drug and clinical cards, and 53 board-style questions.",
        "href": "#/c/ch12/guide",
        "link": "Open Chapter 12"
      },
      {
        "type": "update",
        "text": "Library: acetylcholine now has pathways and full synthesis; 6 new drugs (donepezil, rivastigmine, galantamine, aducanumab, lecanemab, donanemab); memantine, pimavanserin, brexpiprazole and dextromethorphan expanded; new targets butyrylcholinesterase, ChAT, amyloid-β and secretases.",
        "href": "#/nt/acetylcholine",
        "link": "Acetylcholine"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: five dementia maps for memory, psychosis, agitation, apathy and pseudobulbar affect.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: aducanumab (2021–2024), lecanemab (2023–2026), donanemab (2024), the first amyloid blood test (2025), revised AD criteria (2024), the donepezil patch (2022), and the pimavanserin, brexpiprazole, AVP-786 and dextromethorphan–bupropion decisions.",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "12.0.0",
    "date": "2026-10-14",
    "title": "Chapter 11: ADHD",
    "summary": "Chapter 11 maps ADHD symptoms to prefrontal circuits, explains NE/DA tuning and the DAT threshold, and covers every stimulant and nonstimulant class.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch11",
        "text": "Chapter 11: study guide (14 sections), high-yield summary, mechanism, drug and clinical cards, and 50 board-style questions.",
        "href": "#/c/ch11/guide",
        "link": "Open Chapter 11"
      },
      {
        "type": "update",
        "text": "Library: 7 new drugs (dexmethylphenidate, lisdexamfetamine, guanfacine, reboxetine, viloxazine, mazindol, centanafadine); methylphenidate, amphetamine, atomoxetine and clonidine expanded; new targets HCN channel and imidazoline receptor.",
        "href": "#/drugs/guanfacine",
        "link": "Guanfacine"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: five ADHD maps for sustained and selective attention, impulsivity, hyperactivity and comorbid oppositional symptoms.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: Azstarys and viloxazine (2021), Xelstrym and adult viloxazine (2022), stimulant boxed warnings and generic lisdexamfetamine (2023), Onyda XR (2024) and centanafadine (2026).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "11.0.0",
    "date": "2026-10-14",
    "title": "Chapter 10: Sleep and Wakefulness",
    "summary": "Chapter 10 adds the histamine and orexin networks, every class of hypnotic and wake-promoting agent, and the disorders of insomnia and sleepiness.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch10",
        "text": "Chapter 10: study guide (19 sections), high-yield summary, mechanism, drug and clinical cards, and 42 board-style questions.",
        "href": "#/c/ch10/guide",
        "link": "Open Chapter 10"
      },
      {
        "type": "update",
        "text": "Library: histamine and orexin now have synthesis, termination and pathway entries; 16 new drugs (the five benzodiazepine hypnotics, suvorexant, lemborexant, daridorexant, diphenhydramine, doxylamine, ramelteon, tasimelteon, caffeine, solriamfetol, pitolisant, oveporexton); new targets H2, adenosine receptors, GHB receptor and histidine decarboxylase.",
        "href": "#/nt/orexin",
        "link": "Orexin"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: seven maps for insomnia onset and maintenance, daytime sleepiness, cataplexy and the circadian rhythm disorders.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: daridorexant (2022), once-nightly sodium oxybate (2023), tirzepatide for OSA (2024), pitolisant for children (2024) and oveporexton, the first orexin agonist (2026).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "10.0.0",
    "date": "2026-10-08",
    "title": "Backup progress",
    "summary": "Move your study progress between devices with a backup file.",
    "items": [
      {
        "type": "feature",
        "text": "Backup progress, in the footer of every page: Export backup saves your card reviews, bookmarks, mistakes, exam history and settings to a file; Import backup restores it on another phone, tablet or computer. An import can be undone.",
        "href": "#backup",
        "link": "Backup progress"
      }
    ]
  },
  {
    "version": "9.0.0",
    "date": "2026-10-08",
    "title": "Chapter 9: Chronic Pain and Its Treatment",
    "summary": "Chapter 9 adds the pain pathway, central sensitization, fibromyalgia, and why SNRIs and α2δ ligands treat pain across psychiatry.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch09",
        "text": "Chapter 9: study guide (9 sections), high-yield summary, mechanism, drug and clinical cards, and 30 board-style questions.",
        "href": "#/c/ch09/guide",
        "link": "Open Chapter 9"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: eight maps for segmental and suprasegmental pain, painful symptoms of depression and the symptoms of fibromyalgia.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Library: lidocaine, clonidine, naloxone, cyclobenzaprine, sodium oxybate, armodafinil and atomoxetine; new targets VR1, NK1–3, CGRP, δ- and κ-opioid receptors; descending pain pathways added to norepinephrine.",
        "href": "#/targets/vr1",
        "link": "VR1"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: suzetrigine for acute pain (2025) and sublingual cyclobenzaprine for fibromyalgia (2025).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "8.0.0",
    "date": "2026-10-08",
    "title": "Chapter 8: Anxiety, Trauma, and Treatment",
    "summary": "Chapter 8 adds the fear and worry circuits behind anxiety disorders and PTSD, fear conditioning and extinction, and treatment by disorder.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch08",
        "text": "Chapter 8: study guide (16 sections), high-yield summary, mechanism, drug and clinical cards, and 35 board-style questions.",
        "href": "#/c/ch08/guide",
        "link": "Open Chapter 8"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: nine maps for fear, worry, the amygdala’s outputs, PTSD re-experiencing and nightmares.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Library: prazosin and hydroxyzine added; anxiety uses and mechanisms added to benzodiazepines, pregabalin, gabapentin, buspirone and others; fear-learning facts for NMDA, β-adrenergic and α1 receptors.",
        "href": "#/drugs/prazosin",
        "link": "Prazosin"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: MDMA (2024) and brexpiprazole–sertraline (2025) not approved for PTSD, an LSD formulation for GAD (2024), and fasedienol for social anxiety (2025).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "7.0.0",
    "date": "2026-10-08",
    "title": "Chapter 7: Treatments for Mood Disorders",
    "summary": "Chapter 7 adds every major drug mechanism for unipolar depression, treatment resistance, and the bipolar spectrum, with 48 new drug entries.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch07",
        "text": "Chapter 7: study guide (32 sections), high-yield summary, mechanism, drug and clinical cards, and 60 board-style questions.",
        "href": "#/c/ch07/guide",
        "link": "Open Chapter 7"
      },
      {
        "type": "update",
        "text": "Drug database: the six SSRIs, vilazodone, five SNRIs, bupropion, agomelatine, mianserin, trazodone, nefazodone, brexanolone, zuranolone, esketamine, buspirone, all Table 7-2 tricyclics, the MAOIs, carbamazepine, lamotrigine, oxcarbazepine, eslicarbazepine, topiramate, riluzole, modafinil and quinidine; fuller profiles for fluoxetine, mirtazapine, vortioxetine, lithium, valproate, ketamine, dextromethorphan, dextromethadone, MDMA and psilocybin. New targets: nitric oxide synthase, inositol monophosphatase, protein kinase C, thyroid hormone receptor and VEGF.",
        "href": "#/compare/escitalopram,duloxetine,bupropion",
        "link": "Compare three agents"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: eight treatment maps for residual symptoms, bipolar depression, mixed features and postpartum depression, and Chapter 6 mood and mania maps now list Chapter 7 treatments.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: gepirone (2023), zuranolone and brexanolone, esketamine monotherapy (2025), cariprazine and lumateperone depression approvals, brexpiprazole decisions, dextromethorphan–bupropion for depression (2022) and Alzheimer agitation (2026), AVP-786 and esmethadone results, MDMA (2024) and psilocybin (2026).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "6.0.0",
    "date": "2026-10-08",
    "title": "Chapter 6: Mood Disorders, Norepinephrine and GABA",
    "summary": "Chapter 6 adds the mood spectrum, the norepinephrine and GABA networks, the neurobiology of depression, and symptom-to-circuit maps for depression and mania.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch06",
        "text": "Chapter 6: study guide (17 sections), high-yield summary, mechanism, drug and clinical cards, and 44 board-style questions.",
        "href": "#/c/ch06/guide",
        "link": "Open Chapter 6"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: 14 maps for the symptoms of major depression and mania, positive and negative affect, and circadian phase delay.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Library: norepinephrine and GABA now have synthesis, termination and pathway entries; new targets (GABA-C, β-adrenergic receptors, DBH, GABA-T, CRF, vasopressin 1B, glucocorticoid receptor, BDNF/TrkB) and flumazenil.",
        "href": "#/nt/norepinephrine",
        "link": "Norepinephrine"
      },
      {
        "type": "update",
        "text": "Post-publication update box: oral zuranolone for postpartum depression (2023).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "5.0.0",
    "date": "2026-10-07",
    "title": "Chapter 5: So-Called “Antipsychotics”",
    "summary": "Chapter 5 adds the drugs for psychosis, with binding profiles for two dozen agents drawn from the book’s binding strips.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch05",
        "text": "Chapter 5: study guide (25 sections), high-yield summary, mechanism, drug and clinical cards, and 52 board-style questions.",
        "href": "#/c/ch05/guide",
        "link": "Open Chapter 5"
      },
      {
        "type": "update",
        "text": "Drug database: 40 new entries, including every Table 5-1 agent, the pines, dones, pips and rip, pimavanserin, sertindole, perospirone, blonanserin, roluperidone, ulotaront, xanomeline, and benztropine, amantadine, dantrolene, reserpine, metformin and samidorphan. Binding bars follow the plus signs on the book’s strips.",
        "href": "#/compare/clozapine,olanzapine,aripiprazole",
        "link": "Compare three agents"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: nine maps for the effects of D2 blockers, from secondary negative symptoms and prolactin to tardive dyskinesia and metabolic risk.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: clozapine REMS removed (2025), olanzapine–samidorphan (2021), 6-month paliperidone (2021), lumateperone and cariprazine depression approvals, iloperidone for bipolar I (2024), brexpiprazole PTSD decision (2025), and results for xanomeline–trospium, emraclidine, ulotaront and roluperidone.",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "4.0.0",
    "date": "2026-10-07",
    "title": "Chapter 4: Psychosis and Schizophrenia",
    "summary": "Chapter 4 builds the dopamine, glutamate and serotonin networks behind psychosis, and the Symptoms & circuits page gets its first maps.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch04",
        "text": "Chapter 4: study guide (33 sections), high-yield summary, mechanism, drug and clinical cards, and 52 board-style questions.",
        "href": "#/c/ch04/guide",
        "link": "Open Chapter 4"
      },
      {
        "type": "feature",
        "text": "Symptoms & circuits: 12 symptom-to-circuit maps for schizophrenia’s five dimensions, Parkinson’s and dementia psychosis, and drug-induced psychoses.",
        "href": "#/circuits",
        "link": "Symptoms & circuits"
      },
      {
        "type": "update",
        "text": "Library: dopamine, glutamate and serotonin entries now have synthesis, termination and pathway tables; a new D-serine entry; 21 new targets (D3–D5, 5HT2B, 5HT4, 5HT5, metabotropic glutamate groups, COMT, tyrosine hydroxylase, DAO, serine racemase and more); 9 new drugs (levodopa, LSD, psilocybin, mescaline, methamphetamine, cannabis, clozapine, pimavanserin, brexpiprazole).",
        "href": "#/nt/dopamine",
        "link": "Dopamine"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: pimavanserin not approved for dementia-related or Alzheimer psychosis (2021, 2022) and brexpiprazole approved for Alzheimer agitation (2023), with xanomeline–trospium and iclepertin linked into the psychosis chapter.",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "3.0.0",
    "date": "2026-10-07",
    "title": "Chapter 3: Ion Channels",
    "summary": "Chapter 3 adds ligand-gated and voltage-sensitive ion channels, with the benzodiazepines, Z drugs, NMDA blockers and anticonvulsants that act on them.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch03",
        "text": "Chapter 3: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.",
        "href": "#/c/ch03/guide",
        "link": "Open Chapter 3"
      },
      {
        "type": "update",
        "text": "Library: 16 new drugs (varenicline, the Z drugs, allopregnanolone, memantine, ketamine, dextromethorphan, pregabalin, gabapentin and more), new GABA-A, nicotinic, 5HT3, glutamate and α2δ targets, and fuller sodium and calcium channel entries. Benzodiazepine entries now explain their PAM mechanism.",
        "href": "#/targets/gabaa",
        "link": "GABA-A receptor"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: zuranolone for postpartum depression (2023), dextromethorphan–bupropion for depression (2022), esketamine monotherapy (2025) and esmethadone development halted (2024).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "2.0.0",
    "date": "2026-10-07",
    "title": "Chapter 2: Transporters, Receptors, and Enzymes",
    "summary": "Chapter 2 is in, and the reference library grows with it: the drug database, neurotransmitters, receptors and side-effect mapper fill in from Tables 2-4 and 2-5.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch02",
        "text": "Chapter 2: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.",
        "href": "#/c/ch02/guide",
        "link": "Open Chapter 2"
      },
      {
        "type": "update",
        "text": "Library: 11 new drugs (stimulants, VMAT2 inhibitors, tiagabine, levetiracetam, lithium and more), about 35 new receptors, transporters and enzymes with side-effect mapping, and glycine, melatonin and orexin entries.",
        "href": "#/targets",
        "link": "Receptors and targets"
      },
      {
        "type": "update",
        "text": "Post-publication update boxes: xanomeline–trospium approval (2024), MDMA-assisted therapy not approved (2024), valbenazine for Huntington’s chorea (2023), and the GlyT1 inhibitor iclepertin phase III results (2025).",
        "href": "#/updates",
        "link": "See updates"
      }
    ]
  },
  {
    "version": "1.0.0",
    "date": "2026-10-07",
    "title": "First release: Chapter 1, Chemical Neurotransmission",
    "summary": "The Stahl Study Companion launches with Chapter 1 and the full set of study tools. New chapters are added in book order.",
    "items": [
      {
        "type": "chapter",
        "ch": "ch01",
        "text": "Chapter 1: study guide, high-yield summary, mechanism, drug and clinical cards, and board-style questions.",
        "href": "#/c/ch01/guide",
        "link": "Open Chapter 1"
      },
      {
        "type": "feature",
        "text": "Reference library: drugs, neurotransmitters, receptors and targets, drug comparison, symptoms and circuits, nomenclature, glossary and post-publication updates.",
        "href": "#/library",
        "link": "Open the library"
      },
      {
        "type": "feature",
        "text": "New menu: a sidebar with every chapter and tool on wide screens, a slide-in menu and bottom tabs on phones, and previous/next chapter buttons on every chapter page."
      },
      {
        "type": "feature",
        "text": "Bookmarks for guide sections and library entries, and a print-all option for every chapter’s high-yield list.",
        "href": "#/bookmarks",
        "link": "Bookmarks"
      }
    ]
  }
];
