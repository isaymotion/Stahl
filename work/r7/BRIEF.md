# R7 drafting brief: board-question rationales, Stahl 5th ed. Ch 9–13

You are drafting explanations for single-best-answer board questions in a psychiatry-resident study app built
strictly from **Stahl's Essential Psychopharmacology, 5th edition (2021)**. The lead reviews every line against the book.

## Inputs
- Your chapter's questions: `/home/claude/stahl-dev/work/r7/current_chNN.json`
  (array of `{id, tag, q, choices[5], answer (0-based index of correct choice), why}`).
- Book text, one file per PRINTED page: `/home/claude/book/pages/p<N>.txt`.
  Ch 9 = p379–400, Ch 10 = p401–448, Ch 11 = p449–484, Ch 12 = p485–536, Ch 13 = p537–624.
  Find pages with `grep -il "<term>" /home/claude/book/pages/p{START..END}.txt` and READ the pages you cite.
  A wrong choice that is a real concept from another chapter may be cited to that page (grep all pages).

## What to produce, per question
1. `pages`: printed page(s) where the CORRECT answer is taught, e.g. `"538"` or `"538–539"` (en dash). Max 2 pages.
2. `whyNot`: array of exactly 5 strings in the SAME ORDER as `choices`; `""` at the `answer` index.
   Each wrong choice: ONE sentence, ideally 8–22 words (hard max 28), saying why that option is wrong **as an answer to this stem**,
   in terms the book supports. Good patterns: "That is X (what it actually is/does), not Y."; "Applies to A, not B, per the book.";
   "Opposite direction: ...". Bold (`**...**`) the one key word or two. Don't just say "incorrect" or "not mentioned".
   For an obviously absurd distractor, still give the useful contrast (what that structure/drug actually does, from the book).
3. `whyNotPages`: array of 5 strings, `""` at the answer index; for each wrong choice the printed page supporting
   that rationale (often the same as `pages`; a different page when the distractor is taught elsewhere).
4. `why` (only if the current `why` is under 80 characters, or wrong): a rewrite as 1–2 full sentences, 120–260 characters,
   explaining WHY the correct answer is right (mechanism/reasoning, not just restating it). Keep the existing key
   idea and **bold** style; keep a mnemonic if it has one. If the current `why` is ≥80 chars and correct, omit `why`.

## Rules (strict)
1. Only what the book says. No post-2021 facts. No invented numbers.
2. Own words: never copy a run of 8+ consecutive words from the book (a checker enforces this); aim for under 6.
3. No page numbers inside any text (pages go only in `pages` / `whyNotPages`).
4. Do not change `q`, `choices` or `answer`. If you think the keyed answer is wrong, ambiguous (two defensible answers),
   or the book contradicts the question, write the best rationales you can AND flag it in notes.
5. Don't repeat the correct-answer explanation in every whyNot; each rationale should be about its own option.

## Output (write these two files, nothing else)
- `/home/claude/stahl-dev/work/r7/draft_chNN.json`:
  `{ "<qid>": { "pages": "538", "whyNot": [5], "whyNotPages": [5], "why"?: "..." }, ... }` — every question in the file.
- `/home/claude/stahl-dev/work/r7/notes_chNN.md`: flags only (question id + one line), plus any question where the book
  barely covers the topic.
Then run: `node /home/claude/stahl-dev/work/r7/check_drafts.js /home/claude/stahl /home/claude/book/pages chNN`
and fix every `!!` line until it prints `problems 0`.
Final reply: under 100 words: questions done, how many `why` rewritten, flags.
