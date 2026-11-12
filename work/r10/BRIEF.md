# R10 drafting brief: two-step vignettes, Stahl 5th ed. Ch 8–13

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

All Ch 8–13 chapters are clinical; write clinical vignettes throughout (a mechanism step is fine where the chapter teaches one).

## Inputs
- Book text, one file per PRINTED page: `/home/claude/book/pages/p<N>.txt`.
  Ch 8 = p359–378, Ch 9 = p379–400, Ch 10 = p401–448, Ch 11 = p449–485, Ch 12 = p486–537, Ch 13 = p538–578.
  Find pages with `grep -il "<term>" /home/claude/book/pages/p{START..END}.txt` and READ the pages you cite.
  Read your whole chapter first and spread the vignettes across its main sections.
- Existing app questions for your chapter (do NOT duplicate their stems; you may cover the same facts from a new angle):
  `/home/claude/stahl/data/chNN/cards-cases.js`.
- Topic ids (pick one per vignette): see `/home/claude/stahl-dev/work/r2/topics_vocab.json` (`id`, `scope`).

## Count
Ch 8, 9: **10** vignettes each. Ch 10, 11, 12, 13: **15** each. Ids `v<chapter>-01`, … (e.g. `v10-07`, `v8-03`).

## Shape (one object per vignette)
```json
{ "id": "v10-01", "tag": "Antipsychotics", "topic": "antipsychotic-se",
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
7. Explanations stronger than the book: "the only agent", "no other drug", "most potent of any" — use them only if the
   cited page says exactly that, for the same population (e.g. a claim about a unipolar trial is not a bipolar claim).
8. A distractor that the book ALSO recommends or describes as correct (even as a second option) — replace it.
9. A citation one page off: open the page and confirm the fact is on it; cite two pages (e.g. "224–225") if it spans.
10. A step-2 `lead` repeated inside the step-2 question; keep the question short ("What is the expected result?").
11. Odd scenery (the clinician's own relatives, implausible settings). Keep stems realistic and brief.
12. If the book itself seems wrong on a point (contradicts itself or standard practice), do NOT test it; note it in your notes file.
13. Post-2021 drugs/approvals: the book is 2021; anything newer stays out.

## Output (write these two files, nothing else)
- `/home/claude/stahl-dev/work/r10/draft_chNN.json`: a JSON array of the vignette objects above.
- `/home/claude/stahl-dev/work/r10/notes_chNN.md`: one line per vignette: id — what step 1 and step 2 test — pages;
  then flags (anything you were unsure about, thin book coverage).
Then run: `node /home/claude/stahl-dev/work/r10/check_drafts.js /home/claude/book/pages chNN`
and fix every `!!` line until it prints `problems 0`. Look at `~` warnings too (step 2 may not depend on step 1).
Final reply: under 100 words: vignettes done, flags.
