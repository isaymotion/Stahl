# R4 drafting brief: drug library depth, Stahl 5th ed. Ch 6–7

You are drafting additions to drug entries of a psychiatry-resident study app built strictly from
**Stahl's Essential Psychopharmacology, 5th edition (2021)**. A reviewer (the lead) will check every line.

## Inputs
- Your group's current entries: `/home/claude/stahl-dev/work/r4/current_<G>.json` (array of drug objects).
- Book text, one file per PRINTED page: `/home/claude/book/pages/p<N>.txt` (Ch 6 = p245–282 mood disorders, NE and GABA;
  Ch 7 = p283–358 treatments for mood disorders: SSRIs/SNRIs, NDRI, mirtazapine/trazodone/vortioxetine etc., TCAs, MAOIs,
  augmentation, bipolar treatments incl. lithium and anticonvulsants, rapid-acting agents (ketamine, dextromethorphan,
  neurosteroids)). Use `grep -il <drug> /home/claude/book/pages/p2[4-9]*.txt /home/claude/book/pages/p3[0-5]*.txt` to find
  every page in Ch 6–7 that mentions a drug (also try its class name), then READ those pages fully. Figure legends
  ("X's pharmacological and binding profile ...") often carry drug-specific points.
  You may grep other chapters only to confirm a fact; do NOT add content whose only source is outside Ch 6–7
  (other chapters get their own pass), except to correct an error.
- Valid target ids (for `targets[].t`): see list at end.

## What to produce
For EACH drug in your group, the FULL new value of these fields (existing items kept unless wrong):
- `sideEffects`: array of `{ "e": effect, "via": mechanism }`. Aim for the side effects the book actually attributes to
  this drug (or explicitly to its class in a way that applies to it), with the mechanism the book gives
  (e.g. "H1 antagonism", "Nigrostriatal D2 blockade", "Unknown mechanism"). Typically 3–7. Don't pad.
- `pearls`: array of short strings: practical, exam-useful points the book makes about THIS drug (dosing quirks,
  formulations, food/CYP issues, what it's distinctive for, monitoring, comparisons). Typically 2–5. Don't pad.
- `uses`: only if you add/correct something (else omit the key).
- `targets`: only if the book gives information missing from the entry (a target not listed, or a relative strength `s`
  1–4 where the book's text/figures clearly indicate relative potency, 4 = strongest). Never invent strengths.
  If you change targets, give the full array. Keep existing `s` values unless the book clearly contradicts them (then flag).
- `pages`: for every NEW item, cite the printed page(s) it came from.

## Rules (strict)
1. Only what the book says. If the book says nothing more about a drug, add nothing and say so in notes.
2. Write in your own words: short, clinical, no sentence copied from the book (no run of more than ~6 words verbatim).
   Use `**bold**` for the key word or two in each item, matching the existing style.
3. Do not add post-2021 information.
4. Do not duplicate what is already in `mechanism`, `short` or existing items; don't restate class generalities
   on every drug unless the book ties them to that drug.
5. If you find an existing item that the book contradicts, do NOT silently change it: keep it and flag it in notes.

## Output (write these two files, nothing else)
- `/home/claude/stahl-dev/work/r4/draft_<G>.json`:
  `{ "<drugId>": { "sideEffects": [...], "pearls": [...], "uses"?: [...], "targets"?: [...],
     "src": { "sideEffects": ["p290", ...one per item, same order], "pearls": [...], "uses"?: [...], "targets"?: "p.." } }, ... }`
  For kept existing items put `"existing"` in src.
- `/home/claude/stahl-dev/work/r4/notes_<G>.md`: per drug, one or two lines: what you added, anything flagged, or
  "book has nothing further".
Final reply: under 120 words: counts of items added per drug and any flags.

## Valid target ids
sert net dat gat glyt eaat snat dsert cht vmat2 vacht viaat vglut sv2a d1 d2 d3 d4 d5 5ht1a 5ht1b1d 5ht2a 5ht2b 5ht2c 5ht4
5ht5 5ht6 5ht7 alpha2 alpha1 beta-ar gabab mt1mt2 h1 h2 h3 adenosine m1 m4 m2m3 mglur-g1 mglur-g2 mglur-g3 ox crf nk cgrp
v1b taar1 cb1 cb2 mor dor kor gabaa gabac nicotinic vr1 5ht3 glyr nmda ampa kainate a2d vssc vscc hcn mao nos toh ddc dbh
comt tph gad hdc chat gabat aldh secretase gs gls shmt srr dao pde ache buche gsk3 impase pkc cyp1a2 cyp2b6 cyp2d6 cyp2c9
cyp2c19 cyp3a4 gr thr trkb vegf sigma ghb abeta imidazoline
