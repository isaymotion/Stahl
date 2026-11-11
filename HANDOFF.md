# Stahl Study Companion: handoff

## 1. Project and audience
Chapter-by-chapter review web app for psychiatry residents, built from **Stahl’s Essential Psychopharmacology, 5th ed.** (13 chapters). Owner: Isabella Navarro, MD (incoming psychiatry resident).
- Repo: `isaymotion/Stahl` (GitHub sometimes prints “repository moved”: harmless). `main` = the app (static, no build step). `dev-tools` = tools, tests, this doc.
- Live: https://isaymotion.github.io/Stahl/ (owner still needs to enable Pages: Settings → Pages → main, root). Shares the origin with her Kaplan & Sadock (`ks-companion-`) and DSM-5-TR (`dsm-companion-`) apps.

## 2. Fixed rules
- Content strictly from the book, **in the app’s own words**, with page refs; no verbatim passages, no reproduced figures (original diagrams only).
- Post-2021 info only in labeled, web-verified `update` blocks. Book errors flagged in `caution` callouts.
- Attribution verbatim: `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com` (now November 2026): `index.html` footer, `data/app-meta.js` (`attribution`, used by PDFs), README.
- Theme: match device / light / dark (design refresh 22.0.0 replaced dark-by-default). Keep back/forward buttons, search, Backup Progress in footer. Shell UI strings go through `t()` / `data/strings.js` (en + draft tl).
- Service worker: `PREFIX = 'stahl-companion-'` never changes; only delete own caches.
- Every release: new top entry in `data/changelog.js` (`version` semver `N.0.0`, ISO date) + same version in `data/app-meta.js` and `sw.js` VERSION (`PREFIX + 'N.0.0'`) + a README line.
- Commits: author `Isabella Navarro <isaymotion@gmail.com>`; end message with the Co-Authored-By/Claude-Session lines the session supplies.
- User wants short progress messages while working and a brief final report; asks before big ambiguous builds.

## 3. Architecture and data formats
Vanilla JS SPA, hash routes (`#/c/ch04/guide`, `#/drugs/fluoxetine`, `#/compare/ssri-snri/a,b`, `#/teach`, `#/print-all`, `#/nbn`…).
- `index.html`, `css/app.css` (later rules override earlier ones; phone fixes appended at end), `js/app.js` (~3,100 lines, IIFE, namespace `SP`), `js/pdf.js` + `js/pdf-fonts.js` (own PDF writer, lazy-loaded), `sw.js`, `manifest.webmanifest`, `icons/`.
- `data/chapters.js`: registry (`id, number, ready, pages, title, short, summary, files`) + `SP.extraFiles` (db files, changelog). `SP.add(chId, key, value)`.
- `data/chNN/`: (Ch 1–7 also `cards-vignettes.js`, loaded via `SP.VIGNETTE_FILES` in `data/chapters.js`; add ch08–13 there in R10) `guide.js` (`{intro, parts:[{title, sections:[{id,title,pages,blocks:[…]}]}]}`; block types `p, list, defs, table, callout{variant: pearl|exam|caution|analogy|mnemonic|key}, case{title,text,point}, steps, flow, compare, update{year,title,text,source}`), `highyield.js` (`[{id, topic, items:["… **bold = blank** …"]}]`), `cards-mech|drugs|clinical.js` (`{id, tag, q, a}`), `cards-cases.js` (`{id, tag, q, choices[5], answer(0-4), why}`), `cards-vignettes.js` (`{id, tag, stem, steps:[q1, q2]}`, each step a board-question object `{q, choices, answer, why, pages, whyNot, whyNotPages}`, step 2 also `lead`), `glossary.js` (`SP.glossary` rows `[term, def, "Ch N"]` + `SP.glossaryAliases`).
- Cross-refs in text: `[[drug:id|label]] [[target:id]] [[nt:id]] [[ch:chNN|label]] [[page:…]]`.
- `data/db/`: `drugs.js` (183; `id,name,brand,aka,group,cls,short,mechanism,nts,chapters:[{ch,pages}],targets:[{t,action,s(1-4),note}],uses,sideEffects:[{e,via}],pearls,nbn,facts,updates`), `targets.js` (105), `neurotransmitters.js` (16), `circuits.js` (83), `families.js` (17 drug types mapping `group` → family; used by Compare, drug DB, NbN, Name that drug).
- `data/changelog.js`: `window.APP_CHANGELOG = [{version, date, title, summary, items:[{type: chapter|feature|correction|update|content, text, ch?, href?, link?}]}, …]`, newest first.
- `data/app-meta.js` (name, version, attribution, APP_LINKS), `data/strings.js` (shell strings en/tl), `data/hospital.js`.

## 4. Per-unit recipe (content pass on one chapter)
1. Extract text: `pdftotext -f P -l Q book.pdf -` (PDF page = printed page + 16).
2. Edit `data/chNN/*.js` (own words, page refs). For library changes write `work/chNN_patchX.js` and run `dbtool.js` after backing up `data/db`.
3. If new board questions: `shuffle_cases.js`.
4. `check_xrefs.js` → `problems 0`; glossary has no duplicate terms/aliases.
5. Changelog entry (next version below), bump app-meta + `sw.js` VERSION.
6. Serve, run `routes.py` (no `!!`), `overflow.py` (all 390), relevant tests; screenshot phone (390) + desktop.
7. Commit + push `main`; update this doc on `dev-tools`.

## 5. Commands
```bash
git clone https://github.com/isaymotion/Stahl.git stahl && git -C stahl worktree add ../stahl-dev dev-tools
cd stahl && (nohup python3 -m http.server 8766 >/dev/null 2>&1 &)     # restart if curl fails
cd ../stahl-dev
node tools/check_xrefs.js ../stahl                      # expect: glossary terms 469 drugs 183 nts 16 targets 105 problems 0
timeout 600 python3 tools/routes.py http://localhost:8766 /tmp/shots | grep '!!'   # expect nothing
python3 -u tests/overflow.py ; python3 -u tests/tabbar.py   # expect widths 390, ERRORS: []
python3 -u tests/r1_home.py                             # progress panel, report links, iOS hint; ERRORS: []
python3 -u tests/r2_practice.py                         # confidence, topics, exam by topic/mistakes, phone 390; ERRORS: []
python3 -u tests/r6_cheat.py                            # 17 cheat sheets, PDFs, links, phone 390; ERRORS: []
python3 -u tests/r7_rationales.py                       # rationales: exam review, card toggle, teaching, phone 390; ERRORS: []
python3 -u tests/r9_vignettes.py                        # vignettes: practice steps, exam pairs/lock/score, teaching steps, phone 390; ERRORS: []
                                                        # defaults to all 13 chapters; CHS="ch01 ch09" to limit it
(cd ../stahl && node ../stahl-dev/tests/audit.js)       # content-depth table
```
Publish: `cd stahl && git add -A && git -c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com" commit -m "…" && git push origin main`.
If a session cannot push (git proxy 403), hand over a bundle: `git -C stahl bundle create stahl-<ver>.bundle main dev-tools`; the owner (or a session with push access) runs `git fetch stahl-<ver>.bundle main:main dev-tools:dev-tools && git push origin main dev-tools`.

## 6. Status (as of 2026-11-11, main = 5282e4b, version 31.0.0)

Committed 2026-11-11 (main 5282e4b, dev-tools: this commit). **Not yet pushed:** the session's git proxy refused push access to isaymotion/Stahl. Both branches were handed to the owner as a git bundle (`stahl-31.0.0.bundle`); if `origin/main` is still 9421574, push from the bundle first (see the bundle note at the end of §5).

| Area | State |
|---|---|
| Chapters 1–13 | Done: 247 guide sections, 1,102 high-yield points, 726 mech / 268 drug / 200 clinical cards, 608 board questions (all with wrong-answer rationales: 2,432 in total), 469 glossary terms |
| Library | 183 drugs, 105 targets, 16 NTs, 83 circuits, 17 drug types. B1 pass done (R3–R5): 271 pearls + 65 side effects added; 63 drugs still have no pearls because the book has nothing more on them |
| QoL pass | Done: phone home layout, two-column PDF generator (chapter + all chapters), Compare drug-type filters, NbN by class, auto-hiding tab bar, phone overflow fixes, SW cache-prefix fix |
| Teaching mode | Done: session builder (6 presets, multi-chapter, counts, order), high-yield blanks, flashcards, board Qs, vignettes, Name that drug, countdown, room/two-team scoring, flags, text size, end-of-session review + PDF |
| Since 10-26 | 31.0.0 = R9, 29.0.0 = R7, 30.0.0 = R8, 20.0.0 Monitoring checklists (`#/monitoring`), 21.0.0 Text size (Aa), 22.0.0 Design refresh (semver changelog, About page, match-device theme, Tagalog draft strings), 23.0.0 = R1, 24.0.0 = R2, 25.0.0 = R3, 26.0.0 = R4, 27.0.0 = R5, 28.0.0 = R6, 29.0.0 = R7, 30.0.0 = R8 |
| Cheat sheets (R6) | `#/cheat` index + `#/cheat/<familyId>` (17), section "drug-class cheat sheets" in `js/app.js` before the NT section. Built only from library fields: at-a-glance (subgroups, chapters, shared targets = targets ≥ half the class and ≥2 drugs act on, majority action with "also …" for others), binding grid (only if ≥3 drugs have `s`: antipsychotics, SSRI/SNRI, NMDA; columns = targets with `s` in ≥2 drugs, max 12), drug-by-drug table (Key points = `CHEAT_KEY` 4 targets/3 uses/3 SEs/2 pearls, or Everything; subgroup chips; stacks to cards under 640px). PDF via `cheatPdfSpec` → `js/pdf.js` (pages = layout count at 7 pt, then `plan` enlarges up to 9.5 pt). Prefs `cheatPrefs` {detail, paper, gf[fam]}. Links: drug page Same class box (`.side-cheat`), drug DB `#dcheat`, Compare `.cmp-cheat`, library tile `nav.cheat`, search kind `cheat`. CSS block at end of `app.css` (`.cheat-*`, `.act`, `.mx`, `.sdots`). Test `tests/r6_cheat.py`. |
| Two-step vignettes (R9) | **Ch 1–7**: 90 vignettes (10 each Ch 1–3, 15 each Ch 4–7), 180 questions, 720 rationales. Data shape above; deck key `vignettes` (MODES, css `c-vig`, `--m-vig`). Helpers `isVig`, `isQuestion`, `qWeight`, `examQ`, `vigConf` after `deckKeys` in `js/app.js`. Practice (`Player`): `st.step/picks/confs`; step 1 locks on the front (`.vig__done`, `#vig-next`), step 2 shows `lead`; back reviews both (`.vig__rev`); suggested rating = steps right (both → Good, Hard if unsure); one SRS/att/mistake key per vignette. Exam: pref `examVig` (default on, `#ex-vig`); `takeQ`/`weightOf` count questions; a vignette expands to items `{k, s:0}`,`{k, s:1}` (adjacent); `gated()`/`frozen()`/`goTo()` lock step 1 (`lk`) when you leave it answered; history items keep `s`; submit records one attempt/mistake per key. Teaching: type/preset `vig` (`mcqHTML()`, `st.step`, `nextStep()`), `S.res`/`S.team`/`S.pk` hold per-step arrays for vignettes (`resList`/`teamList`/`setStepVal`). Search kind `vignettes`. `.flashcard.is-vig` takes the hidden face out of grid sizing. Test `tests/r9_vignettes.py`. |
| Rationales (R7, R8) | **All 13 chapters** (608 questions, 2,432 reasons). Board questions carry `pages` (printed page of the right answer), `whyNot` (one line per choice, `''` at the answer) and `whyNotPages`. Shown by `whyNotLine()` / `whyBlock()` / `pageChip()` in `js/app.js` (section before `renderExamReview`): exam review lists a reason under every wrong choice (your pick gets `.is-mine`); practice `choiceList(c, chosen)` shows your pick's reason and folds the rest behind "Why not the others" (pref `whyNotOpen`); teaching mode shows the room's pick + `#t-others`, and `S.pk[id]` carries the pick into the end-of-session review and PDF. `pageChip()` resolves a printed page → chapter → guide section via `chapterOfPage`/`sectionOfPage` and links `#/c/chNN/guide/<sec>`. Rationale text is in the search index. CSS at end of `app.css` (`.whynot`, `.choice__body`, `.pg-chip`, `.teach__others`; block layout under 640px). Test `tests/r7_rationales.py`. |
| Practice engine (R2) | `data/topics.js`: 28 topics (`SP.topics`), all 1,892 items mapped (1,802 cards/questions + 90 vignettes) (`SP.topicMap`, key `chNN/deck/id`); edit `work/r2/topics_vocab.json` + `topic_map.json`, then `node tools/build_topics.js ../stahl`. localStorage `att` = per-item last 8 outcomes (upper = right; S/U/G = sure/unsure/guess, R/W = no rating); `confAsk` pref; `MISTAKES[k].sure`. Routes `#/topics`, `#/topics/<id>`, `#/topics/<id>/cards`, `#/exam/topic/<id>`, `#/exam/mistakes`. Topic strength needs ≥5 practised items. |

## 7. Next steps: agreed release plan (owner approved all A + B, order B1 → B4, 2026-11-09)
Next version **32.0.0** (R10: vignettes Ch 8–13, ~15 each). One release = one changelog id + SW bump + full test run + push + update this table.
R10 starting point: copy `work/r9/` method (BRIEF.md, `check_drafts.js` — add ch08–13 to its `COUNT` map; `RANGE` already has them — `triage.js`, `show.js`, `build_final.js`), point `SP.VIGNETTE_FILES` at ch08–13 in `data/chapters.js`, then `node tools/apply_vignettes.js ../stahl work/r10 ch08…` (writes the chapter files, balances answer positions A–E, writes topic keys) and `node tools/build_topics.js ../stahl`. The UI needs no change. Update the exam checkbox text ("Chapters 1–7 so far") in `renderExamSetup`. Needs the book PDF re-attached and the pages re-extracted.

| # | Release | Items | Book PDF? | Status |
|---|---|---|---|---|
| R1 | Quick wins | A1 report-error mailto, A2 text size (already in 21.0.0), A4 iPhone hint, A3 home progress overview | no | **done 23.0.0** |
| R2 | Practice engine | B3a confidence rating + cross-chapter topic tags on all cards/questions, then A6 quiz from mistakes, A7 exam by topic, weak-spot map | no | **done 24.0.0** |
| R3 | Library depth 1 | B1: Ch 4–5 drugs (antipsychotics) | yes | **done 25.0.0** (68 pearls/32 drugs; see R3 method below) |
| R4 | Library depth 2 | B1: Ch 6–7 drugs (mood, antidepressants) | yes | **done 26.0.0** (78 pearls/37 drugs; `work/r4/`) |
| R5 | Library depth 3 | B1: Ch 8–13 + remaining drugs | yes | **done 27.0.0** (125 pearls + 61 SEs/55 drugs; `work/r5/`) |
| R6 | Cheat sheets | A5 drug-class cheat sheets + PDF (built on R3–R5) | no | **done 28.0.0** (17 sheets, binding grid, PDF) |
| R7 | Rationales 1 | B2: why-each-wrong-answer + page ref, Ch 9–13 | yes | **done 29.0.0** (920 rationales/230 questions, 210 `why` expanded; `work/r7/`) |
| R8 | Rationales 2 | B2: same, Ch 1–8 | yes | **done 30.0.0** (1,512 rationales/378 questions, 117 `why` expanded; `work/r8/`) |
| R9 | Vignettes 1 | B2: ~15 two-step vignettes/ch, Ch 1–7 | yes | **done 31.0.0** (90 vignettes/180 questions/720 rationales; `work/r9/`) |
| R10 | Vignettes 2 | B2: same, Ch 8–13 | yes | pending |
| R11 | Learning features | B3 rest: mechanism-reasoning drill, warm-ups, "explain why" prompts | no | pending |
| R12 | Diagrams | B4: agonist slider, D2 occupancy meter, dopamine pathways, receptor ring | no | pending |
| R13 | Ch 8/9 depth | recheck vs book, expand guide | yes | pending |
| R14 | Housekeeping | errata page, "How current is this?" page, consistency checks, shareable assignment links. Known items: aducanumab/lecanemab/donanemab `sideEffects` (ARIA, infusion reactions) are post-book, move into their `updates`; existing book-error notes kept as facts (topiramate + bupropion p352, fentanyl not reversible by naloxone p560, lisdexamfetamine cleavage site) could become `caution` callouts / errata | no | pending |

Working method: Claude does design, clinical/content decisions and final review of every item; subagents draft from extracted book pages (library fields, rationales, tags) and run test/screenshot passes. Suggest a fresh chat about every 3 releases (session-handoff skill).

R3–R5 method (library depth, done; reuse only if R13/R14 touch `data/db`): `work/rN/BRIEF.md` → `current_<G>.json` → subagents write `draft_<G>.json` + `notes_<G>.md` → `check_drafts.js` → lead verifies and writes `final_<G>.json` → back up `data/db`, then `node tools/dbtool.js ../stahl work/rN/patch.js`. Groups and page ranges are recorded in each `work/r3|r4|r5/` folder.
R3–R5 findings worth keeping: the book’s per-drug side-effect detail was mostly already in the library, so gains were in pearls; the 11 FGAs listed only in Table 5-1 (p183) have no further book detail, leave them; benzodiazepines (diazepam, alprazolam) carry class points as the library’s representatives; 63 drugs still have no pearls because the book has nothing more on them. Draft faults to cut: pearls that restate the entry’s own mechanism/uses, class points applied to one drug, “still unclear” pearls, binding claims inferred from absence in a figure, page numbers inside pearl text. Book error kept as a flagged fact: topiramate “with bupropion” for weight loss (p352).
R7/R8 method (rationales, done; the template for any per-question content pass such as R9/R10 vignettes): `work/rN/BRIEF.md` → `current_chNN.json` (dump) → one subagent per chapter writes `draft_chNN.json` + `notes_chNN.md` → `node work/rN/check_drafts.js ../stahl /home/claude/book/pages chNN` (8-word verbatim check, field shape, pages exist and in range, word counts, no page numbers in text; `--final` re-checks the finals) → lead triages with `node work/r8/triage.js chNN…` (flags rationales whose words barely appear on the cited page, bare “not covered in the book” phrasings, and every all/none-of-the-above or EXCEPT question) and `show.js chNN draft|final [from] [to]` → lead writes sparse `fix_chNN.json` (`{qid: {why?, pages?, whyNot: {idx: str}, whyNotPages: {idx: str}}}`) → `node build_final.js chNN…` merges → `node tools/apply_rationales.js ../stahl work/rN chNN…` writes the chapter files. Copy and re-range `check_drafts.js` (its `RANGE` map) and the BRIEF page list for a new chapter set.
R7/R8 findings: `tools/shuffle_cases.js` shuffles choice *indices*, so `whyNot`/`whyNotPages` stay aligned — any new per-choice field must be added to its list. Putting the known faults in the BRIEF worked: R7 needed 15 lead fixes across 5 chapters, R8 only 9 across 8 chapters. Faults to keep listing in any new brief: an all/none/EXCEPT rationale that restates the answer instead of saying why that option fails; bare “X is not mentioned” with no contrast; a rewritten `why` that copies 8+ words from the book; post-2021 facts smuggled into the text as if the book said them (q12-53 lecanemab/donanemab ARIA now says so openly and cites the app’s own update block — such questions stay tagged `Updates`). Also verify numeric claims appear verbatim on the cited page (a one-off node check; all 378 R8 questions passed). Book inconsistencies found, kept as teaching points and candidates for R14 `caution` callouts: Figure 2-16’s caption says “five” CYP450 enzymes then names six (stated in q2-43’s explanation); Ch 6 running text says “only one of which is depressed mood” while Figure 6-1 says depressed mood **or** loss of interest (q6-01 follows the figure, which is DSM-correct).

R9 method (two-step vignettes, done): owner approved the shape on 2026-11-11: new deck, step 2 linear and locked (always follows the correct step-1 answer, no branching), 1 exam point per step, ~10 mechanism-style vignettes for Ch 1–3. `work/r9/BRIEF.md` → one subagent per chapter writes `draft_chNN.json` (array of vignettes incl. `topic`) + `notes_chNN.md` → `node work/r9/check_drafts.js /home/claude/book/pages chNN` (shape, ids, counts, 8-word verbatim on every field, pages, word counts, no page numbers, no all/none/EXCEPT, `~` warnings for step 2 not naming the step-1 answer and stems close to existing questions) → lead runs `node work/r9/triage.js chNN` (rationale words vs cited page ±1, numbers on page) and `node work/r9/show.js chNN draft [from] [to] [--full]`, greps the claims, writes sparse `fix_chNN.json` (`{vid: {stem?, tag?, topic?, steps: {"0"|"1": {field: value, choices|whyNot|whyNotPages: [..] or {idx: str}}}}}`) → `node work/r9/build_final.js chNN…` → `check_drafts.js … --final` → `node tools/apply_vignettes.js ../stahl work/r9 chNN…` (`--src draft` to preview drafts in the app).
R9 findings: drafts were good (lead fixed 13 of 90 vignettes, 23 fields). Faults found: a citation one page off (NGF p6 → p6–7, norquetiapine p229 → p227), an explanation stronger than the book ("no other GAT1 inhibitor", "the only agent" for lurasidone when the book's claim is about a unipolar mixed-features trial, cariprazine "most potent D3 of any agent" when blonanserin shares it), a distractor that the book also endorses (early-evening melatonin for phase delay), a lead repeated inside the question, awkward scenery. Subagents put every answer at A: `apply_vignettes.js` reshuffles. Book errors found (R14 errata/`caution` candidates): p224 says clozapine sialorrhea is mitigated by **pro-cholinergic** treatment, while p225 attributes salivation to muscarinic blockade; clinical practice uses anticholinergics (v5-10 step 2 was rewritten to test neutropenia monitoring instead). p66 says ketamine/PCP bind inside "the calcium channel" (means the NMDA channel).

Reference (original wording of the items):
- A1–A7 as above. B1: 139/183 drugs lack binding strength, 78 lack side effects, 168 lack pearls. B2: ~7% vignettes, explanations shrink to ~50 chars by Ch 13, no wrong-answer rationales. B3: confidence rating, topic tags (interleaving, weak-spot map, exam by topic), mechanism drill from library, warm-ups, explain-why. B4: original interactive diagrams.

## 8. Pitfalls learned
- Router drops empty path segments (`#/compare/tca/` → `tca`); parse family ids explicitly.
- `classList.remove` of an absent class still fires a MutationObserver → infinite loop; guard with `contains`.
- npm/cdnjs/jsdelivr/unpkg blocked; no external libs. PDF is a hand-written writer (`js/pdf.js`) with embedded subset fonts; regenerate fonts with `mkfonts.py`.
- `pkill -f playwright` inside a compound command can kill the shell itself; run it alone.
- Local server dies sometimes: test with `curl -m 3` and restart.
- Phone overflow: long `<select>` option text widens the page; give selects `width:100%; min-width:0` under 640px. Check with `overflow.py` after any UI change.
- Steps/list blocks don't support `note`; put the note in a `p` block.
- Glossary aliases: avoid common words (they auto-link everywhere).
- Python output via `| tail` buffers; use `python3 -u`.
- Segmented radios (`.seg`): the hidden input sits over its label, so Playwright clicks on `input + span` time out; click `label:has(input[...])`.
- `store` caches prefs in memory: after setting localStorage in a test, `reload()` (a hash change is not enough).
- New cards/questions need a topic: add keys to `work/r2/topic_map.json` and rebuild `data/topics.js`, or they drop out of topics and exam-by-topic.
- Board questions with rationales: `whyNot` must stay index-aligned with `choices` (`''` at `answer`). Anything that reorders choices must reorder both arrays; `apply_rationales.js` refuses a mismatch.
- The exam asks for a confidence rating before each answer: in Playwright press `s` before the letter key, or `#ex-submit` never becomes reachable. Starting a new exam over one in progress fires a `window.confirm` — register a dialog handler.
- Teaching sessions: `S.res`, `S.team`, `S.pk` are a single value per slide, or a two-item array (one per step) for vignettes; use `resList`/`teamList`, never `S.res[id] === 1`.
- Search `KIND` map (`renderSearch`) needs an entry for every deck key, or search results throw (`reading 'css'`).
- Drug families: the `other` family also catches drugs whose `group` is in no family (`familyOf` fallback), so its sheet can hold more than its listed groups.

## 9. Files to re-attach
- `Stahls_Essential_Psychopharmacology_5th_ed.pdf`: needed for content work (R10 vignettes, R13 Ch 8/9 depth). Not needed for R11, R12 or R14 (R6–R9 are done). Used and re-extracted 2026-11-11 for R7, R8 and R9.
- After attaching, re-extract the pages (never committed: copyrighted). PDF page = printed page + 16:
```bash
mkdir -p /home/claude/book/pages && cd /home/claude/book && cp /mnt/user-data/uploads/<file>.pdf book.pdf
for p in $(seq 1 624); do pdftotext -layout -f $((p+16)) -l $((p+16)) book.pdf pages/p$p.txt; done
# sanity: pages/p379.txt should be the first page of Chapter 9
```
