# Stahl Study Companion

A chapter-by-chapter study app for psychiatry residents, built from *Stahl's Essential Psychopharmacology*, 5th edition (2021). It runs entirely in the browser, works offline after the first visit, and can be installed on phones and desktops.

**Live site:** https://isaymotion.github.io/Stahl/ (after GitHub Pages is switched on; see below)

## What's in each chapter

- **Study guide**: the whole chapter reorganized for learning, in the app's own words, with book page references on every section, comparison tables, step-by-step flow diagrams, Stahl's analogies, clinical pearls, exam tips, memory hooks and short clinical vignettes.
- **High yield**: the must-know facts. Switch on *Hide key facts* to turn every bold fact into a blank for self-testing. Each chapter has a **printable summary** (one to four pages, A4 or Letter, answer key or fill-in worksheet).
- **Flashcards** in three decks: **Mechanisms**, **Drugs** and **Clinical**, with spaced repetition (rate each card *Again*, *Hard*, *Good* or *Easy*).
- **Board questions**: single-best-answer questions with explanations. They feed the timed exam, the mistakes pile and teaching mode.

## Across the app

- **Menu**: a sidebar listing every chapter (current chapter expanded to its study modes) and the reference library on wide screens; a slide-in menu plus bottom tabs (Home, Chapters, Review, Exam, Library) on phones and tablets. Every chapter page has previous/next chapter buttons and an *All chapters* menu.
- **Back and forward buttons** in the top bar (also Alt+Left and Alt+Right) and **search** across chapters, cards, questions, library entries and glossary (press `/`).
- **Daily review**, **board-style exam** (timed or untimed, scored by topic and chapter), **mistakes**, **bookmarks**.
- **Reference library**, cross-linked and growing with each chapter:
  - **Drugs**: mechanism, binding profile (relative strength bars), uses, side effects with the receptor behind each, pearls, chapter references.
  - **Neurotransmitters**: synthesis, termination, receptors, pathways, roles, and every chapter's facts with page numbers.
  - **Receptors and targets**: receptors, transporters, enzymes and ion channels, with a **side-effect mapper** (what stimulating or blocking each target does) and the drugs that act there.
  - **Compare drugs** (two or three side by side), **Symptoms and circuits** (Stahl's symptom-based approach), **Nomenclature (NbN)**, **Glossary** (tap any dotted term anywhere), and **Post-publication updates**.
- **Post-publication updates**: the book is from 2021. Anything newer appears only in clearly labeled update boxes, never mixed into the book-based content.
- **For educators**: teaching mode (full-screen questions or vignettes for group sessions), printable summaries, print-all high yield, and a *What's new* page.
- Dark theme by default, with a light theme on the theme button.

Progress (review schedule, mistakes, exams, bookmarks, settings) is saved in the browser on each device.

## Publish on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://isaymotion.github.io/Stahl/`.

There is no build step and no dependencies. To preview locally, run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Folder structure

```
index.html              App shell (top bar, sidebar menu, bottom tabs)
css/app.css             Styles (dark and light themes)
js/app.js               Router, menu, study guide, high yield, flashcards and spaced repetition,
                        review, exam, mistakes, glossary, library, search, printing, teaching mode
data/chapters.js        Chapter registry (all 13 chapters; `ready: true` for those built)
data/chNN/              Chapter content
  guide.js              Study guide
  highyield.js          High-yield topics
  cards-mech.js         Mechanism deck
  cards-drugs.js        Drug deck
  cards-clinical.js     Clinical deck
  cards-cases.js        Board questions
  glossary.js           Terms defined in the chapter
data/db/                Reference library: drugs.js, neurotransmitters.js, targets.js, circuits.js
data/changelog.js       What's new entries
icons/                  App icons
manifest.webmanifest    Install metadata
sw.js                   Offline cache
```

## Adding a chapter

1. Create `data/chNN/` with the same seven files as `data/ch01/`.
2. In `data/chapters.js`, set the chapter's `ready: true` and add `files: SP.CHAPTER_FILES`.
3. Add or enrich entries in `data/db/` (each fact carries its chapter and book pages).
4. Add an entry to the top of `data/changelog.js`, and change `VERSION` in `sw.js` so returning users get the new content.

### Content conventions

- `**bold**` and `*italic*` work in all text. In high-yield items, bold marks the fact that becomes a blank, so bold the answer, not the topic.
- Cross-references: `[[drug:fluoxetine]]`, `[[nt:dopamine|DA]]`, `[[target:sert]]`, `[[ch:ch02|Chapter 2]]`.
- Study guide block types: `p`, `h`, `list`, `defs`, `table`, `callout` (`pearl`, `exam`, `caution`, `analogy`, `mnemonic`, `key`), `case`, `steps`, `flow`, `compare`, `update` (post-publication boxes: `year`, `title`, `text`, `source`).
- Board questions use `choices` and a zero-based `answer` index, plus `why`; their `tag` is the topic used in exam scoring.
- Card `id`s are the key for each card's review schedule, so keep them stable when editing content.

## Attribution

App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com

An independent study aid built from *Stahl's Essential Psychopharmacology*, 5th edition. Not affiliated with or endorsed by the author or publisher. Study content is written in the app's own words with page references; no figures or passages from the book are reproduced. Always confirm doses and prescribing details against current product labeling.
