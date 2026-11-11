# R9 drafting brief: two-step vignettes, Stahl 5th ed. Ch 1–7

You are writing NEW two-step clinical vignettes for a psychiatry-resident study app built strictly from
**Stahl's Essential Psychopharmacology, 5th edition (2021)**. The lead reviews every line against the book.

## What a two-step vignette is
A short clinical stem, then two single-best-answer questions. **Step 2 turns on the correct answer to step 1**:
its `lead` (1–2 sentences) reveals or assumes the step-1 answer and adds new information, and step 2 cannot be
answered well without knowing step 1. Step 2 always follows the CORRECT step-1 answer (no branching).
Good patterns:
- choose a drug (step 1) → its adverse effect / mechanism of that effect / what to do next (step 2)
- identify the mechanism behind a presentation → predict a consequence or pick the drug that targets it
- recognise the syndrome/circuit → pick the treatment the book links to it
- spot an interaction or PK problem → predict the resulting change or the fix
Bad: two unrelated questions on the same patient; step 2 answerable without step 1; step 2 that merely repeats step 1.

For **Ch 1–3** (basic neuroscience) write **mechanism-style** vignettes: a brief clinical hook (a patient on a
named drug, a lab finding, a drug effect), step 1 identifies the mechanism/target, step 2 predicts its consequence
or applies it to a second drug. Clinical detail must stay plausible, but the teaching is the mechanism.

## Inputs
- Book text, one file per PRINTED page: `/home/claude/book/pages/p<N>.txt`.
  Ch 1 = p1–28, Ch 2 = p29–50, Ch 3 = p51–76, Ch 4 = p77–158, Ch 5 = p159–243, Ch 6 = p244–282, Ch 7 = p283–358.
  Find pages with `grep -il "<term>" /home/claude/book/pages/p{START..END}.txt` and READ the pages you cite.
  Read your whole chapter first and spread the vignettes across its main sections.
- Existing app questions for your chapter (do NOT duplicate their stems; you may cover the same facts from a new angle):
  `/home/claude/stahl/data/chNN/cards-cases.js`.
- Topic ids (pick one per vignette): see `/home/claude/stahl-dev/work/r2/topics_vocab.json` (`id`, `scope`).

## Count
Ch 1, 2, 3: **10** vignettes each. Ch 4, 5, 6, 7: **15** each. Ids `v<chapter>-01`, `v<chapter>-02`, … (e.g. `v4-07`).

## Shape (one object per vignette)
```json
{ "id": "v4-01", "tag": "Antipsychotics", "topic": "antipsychotic-se",
  "stem": "A 24-year-old man ... (2–4 sentences, 35–90 words: age/sex, presentation, relevant history/drugs)",
  "steps": [
    { "q": "Which ...? (one sentence)", "choices": ["5 options"], "answer": 0,
      "why": "1–2 sentences, 120–260 chars: WHY the answer is right (mechanism/reasoning), **bold** key words",
      "pages": "84", "whyNot": ["", "...", "...", "...", "..."], "whyNotPages": ["", "84", "90", "84", "112"] },
    { "lead": "1–2 sentences, 12–50 words: what happened next, which reveals/assumes the step-1 answer.",
      "q": "...", "choices": [5], "answer": 3, "why": "...", "pages": "...", "whyNot": [5], "whyNotPages": [5] }
  ] }
```
- `tag`: short label (1–3 words) in the style of the chapter's existing `tag`s.
- `choices`: exactly 5, parallel in form and similar length, all plausible to a resident; no "all/none of the above",
  no EXCEPT/NOT questions. Put the correct answer anywhere (the lead reshuffles later; keep whyNot aligned).
- `pages`: printed page(s) where the correct answer is taught, `"84"` or `"84–85"` (en dash), max 2 pages.
- `whyNot`: exactly 5 strings in the SAME ORDER as `choices`, `""` at `answer`. Each wrong choice: ONE sentence,
  8–22 words (hard max 28), why that option is wrong for THIS stem, in book-supported terms
  ("That is X, not Y."; "Applies to A, not B."; "Opposite direction: ..."). **Bold** one or two key words.
- `whyNotPages`: 5 strings, `""` at `answer`; the printed page supporting each rationale.

## Rules (strict)
1. Only what the book says. No post-2021 facts, no newer drugs/approvals, no invented numbers, no doses the book
   doesn't give. Clinical scenery (age, setting) is fine; every tested FACT must be on the cited page.
2. Own words: never copy a run of 8+ consecutive words from the book (the checker enforces this on every field);
   aim for under 6. Copying happens most in `why` and in stems that paraphrase a figure caption.
3. No page numbers inside any text.
4. Step 2 `lead` must make step 2 depend on step 1 (it may name the step-1 answer outright, e.g. "Haloperidol is started.").
   Step 1's question must not be given away by the stem.
5. One correct answer per step, defensible from the book; distractors clearly wrong on a careful reading.
6. Don't repeat the correct-answer explanation in every whyNot; each rationale is about its own option.
7. Use generic drug names; `[[...]]` link syntax is NOT needed.

## Faults found in earlier passes (R7/R8) — avoid these
1. Bare "X is not mentioned in the book" — always give the real contrast (what X actually is/does, per the book).
2. A `why` that copies 8+ words from the book.
3. Post-2021 facts written as if the book said them.
4. Page numbers inside sentences.
5. Rationales whose words barely appear on the cited page — cite the page that actually teaches the contrast.
6. Numbers (percentages, half-lives, occupancy thresholds) must appear on the cited page exactly as you state them.

## Output (write these two files, nothing else)
- `/home/claude/stahl-dev/work/r9/draft_chNN.json`: a JSON array of the vignette objects above.
- `/home/claude/stahl-dev/work/r9/notes_chNN.md`: one line per vignette: id — what step 1 and step 2 test — pages;
  then flags (anything you were unsure about, thin book coverage).
Then run: `node /home/claude/stahl-dev/work/r9/check_drafts.js /home/claude/book/pages chNN`
and fix every `!!` line until it prints `problems 0`. Look at `~` warnings too (step 2 may not depend on step 1).
Final reply: under 100 words: vignettes done, flags.
