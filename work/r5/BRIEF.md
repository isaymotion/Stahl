# R5 drafting brief: drug library depth, Stahl 5th ed. Ch 8–13 (+ Ch 2)

You are drafting additions to drug entries of a psychiatry-resident study app built strictly from
**Stahl's Essential Psychopharmacology, 5th edition (2021)**. A reviewer (the lead) will check every line.

## Inputs
- Your group's current entries: `/home/claude/stahl-dev/work/r5/current_<G>.json` (array of drug objects).
- Book text, one file per PRINTED page: `/home/claude/book/pages/p<N>.txt`. Chapter ranges (printed pages):
  Ch 2 = p~19–46 (only for tiagabine/levetiracetam: not extracted; grep p77+ instead and check the drug's `chapters` field),
  Ch 7 = p283–358, Ch 8 anxiety/trauma = p359–378, Ch 9 pain = p379–400, Ch 10 sleep/wake = p401–448,
  Ch 11 ADHD = p449–484, Ch 12 dementia = p485–536, Ch 13 impulsivity/addiction = p537–624.
  Use `grep -il <drug> /home/claude/book/pages/*.txt` to find every page that mentions a drug (also try brand names and
  its class name), then READ those pages fully, prioritizing the chapters listed in the entry's `chapters` field.
  Figure legends and tables (e.g. hypnotic half-life tables, stimulant formulation tables) often carry drug-specific points.
  Content may come from any chapter of the book.
- Pearls already in earlier releases followed this style: one fact per pearl, practical/exam-useful, no restating of the
  entry's `mechanism`, `short`, `uses` or `facts`. READ those fields of each entry first and do not repeat them.
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
- `/home/claude/stahl-dev/work/r5/draft_<G>.json`:
  `{ "<drugId>": { "sideEffects": [...], "pearls": [...], "uses"?: [...], "targets"?: [...],
     "src": { "sideEffects": ["p410", ...one per item, same order], "pearls": [...], "uses"?: [...], "targets"?: "p.." } }, ... }`
  For kept existing items put `"existing"` in src.
- `/home/claude/stahl-dev/work/r5/notes_<G>.md`: per drug, one or two lines: what you added, anything flagged, or
  "book has nothing further".
Final reply: under 120 words: counts of items added per drug and any flags.

## Valid target ids
sert net dat gat glyt eaat snat dsert cht vmat2 vacht viaat vglut sv2a d1 d2 d3 d4 d5 5ht1a 5ht1b1d 5ht2a 5ht2b 5ht2c 5ht4
5ht5 5ht6 5ht7 alpha2 alpha1 beta-ar gabab mt1mt2 h1 h2 h3 adenosine m1 m4 m2m3 mglur-g1 mglur-g2 mglur-g3 ox crf nk cgrp
v1b taar1 cb1 cb2 mor dor kor gabaa gabac nicotinic vr1 5ht3 glyr nmda ampa kainate a2d vssc vscc hcn mao nos toh ddc dbh
comt tph gad hdc chat gabat aldh secretase gs gls shmt srr dao pde ache buche gsk3 impase pkc cyp1a2 cyp2b6 cyp2d6 cyp2c9
cyp2c19 cyp3a4 gr thr trkb vegf sigma ghb abeta imidazoline
