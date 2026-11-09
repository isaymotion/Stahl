# Stahl Study Companion: handoff

## 1. Project and audience
Chapter-by-chapter review web app for psychiatry residents, built from **Stahl’s Essential Psychopharmacology, 5th ed.** (13 chapters). Owner: Isabella Navarro, MD (incoming psychiatry resident).
- Repo: `isaymotion/Stahl` (GitHub sometimes prints “repository moved”: harmless). `main` = the app (static, no build step). `dev-tools` = tools, tests, this doc.
- Live: https://isaymotion.github.io/Stahl/ (owner still needs to enable Pages: Settings → Pages → main, root). Shares the origin with her Kaplan & Sadock (`ks-companion-`) and DSM-5-TR (`dsm-companion-`) apps.

## 2. Fixed rules
- Content strictly from the book, **in the app’s own words**, with page refs; no verbatim passages, no reproduced figures (original diagrams only).
- Post-2021 info only in labeled, web-verified `update` blocks. Book errors flagged in `caution` callouts.
- Attribution verbatim: `App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com` (footer, PDFs: `ATTRIBUTION` const in js/app.js).
- Default theme dark. Keep Kaplan-style back/forward buttons, search, Backup Progress in footer.
- Service worker: `PREFIX = 'stahl-companion-'` never changes; only delete own caches.
- Every release: changelog entry + bump `VERSION` in `sw.js`.
- Commits: author `Isabella Navarro <isaymotion@gmail.com>`; end message with the Co-Authored-By/Claude-Session lines the session supplies.
- User wants short progress messages while working and a brief final report; asks before big ambiguous builds.

## 3. Architecture and data formats
Vanilla JS SPA, hash routes (`#/c/ch04/guide`, `#/drugs/fluoxetine`, `#/compare/ssri-snri/a,b`, `#/teach`, `#/print-all`, `#/nbn`…).
- `index.html`, `css/app.css` (later rules override earlier ones; phone fixes appended at end), `js/app.js` (~3,100 lines, IIFE, namespace `SP`), `js/pdf.js` + `js/pdf-fonts.js` (own PDF writer, lazy-loaded), `sw.js`, `manifest.webmanifest`, `icons/`.
- `data/chapters.js`: registry (`id, number, ready, pages, title, short, summary, files`) + `SP.extraFiles` (db files, changelog). `SP.add(chId, key, value)`.
- `data/chNN/`: `guide.js` (`{intro, parts:[{title, sections:[{id,title,pages,blocks:[…]}]}]}`; block types `p, list, defs, table, callout{variant: pearl|exam|caution|analogy|mnemonic|key}, case{title,text,point}, steps, flow, compare, update{year,title,text,source}`), `highyield.js` (`[{id, topic, items:["… **bold = blank** …"]}]`), `cards-mech|drugs|clinical.js` (`{id, tag, q, a}`), `cards-cases.js` (`{id, tag, q, choices[5], answer(0-4), why}`), `glossary.js` (`SP.glossary` rows `[term, def, "Ch N"]` + `SP.glossaryAliases`).
- Cross-refs in text: `[[drug:id|label]] [[target:id]] [[nt:id]] [[ch:chNN|label]] [[page:…]]`.
- `data/db/`: `drugs.js` (183; `id,name,brand,aka,group,cls,short,mechanism,nts,chapters:[{ch,pages}],targets:[{t,action,s(1-4),note}],uses,sideEffects:[{e,via}],pearls,nbn,facts,updates`), `targets.js` (105), `neurotransmitters.js` (16), `circuits.js` (83), `families.js` (17 drug types mapping `group` → family; used by Compare, drug DB, NbN, Name that drug).
- `data/changelog.js`: `SP.changelog = [{id, date, title, summary, items:[{type: chapter|feature|correction|update, text, href?, link?}]}, …]`, newest first.

## 4. Per-unit recipe (content pass on one chapter)
1. Extract text: `pdftotext -f P -l Q book.pdf -` (PDF page = printed page + 16).
2. Edit `data/chNN/*.js` (own words, page refs). For library changes write `work/chNN_patchX.js` and run `dbtool.js` after backing up `data/db`.
3. If new board questions: `shuffle_cases.js`.
4. `check_xrefs.js` → `problems 0`; glossary has no duplicate terms/aliases.
5. Changelog entry (next id below), bump `sw.js` VERSION suffix.
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
(cd ../stahl && node ../stahl-dev/tests/audit.js)       # content-depth table
```
Publish: `cd stahl && git add -A && git -c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com" commit -m "…" && git push origin main`.

## 6. Status (as of 2026-10-26, main = 74b1a0e)
| Area | State |
|---|---|
| Chapters 1–13 | Done: 247 guide sections, 1,102 high-yield points, 726 mech / 268 drug / 200 clinical cards, 608 board questions, 469 glossary terms |
| Library | 183 drugs, 105 targets, 16 NTs, 83 circuits, 17 drug types |
| QoL pass | Done: phone home layout, two-column PDF generator (chapter + all chapters), Compare drug-type filters, NbN by class, auto-hiding tab bar, phone overflow fixes, SW cache-prefix fix |
| Teaching mode | Done: session builder (6 presets, multi-chapter, counts, order), high-yield blanks, flashcards, board Qs, vignettes, Name that drug, countdown, room/two-team scoring, flags, text size, end-of-session review + PDF |
| Changelog | ids 1–19 used |

## 7. Next steps: agreed release plan (owner approved all A + B, order B1 → B4, 2026-11-09)
Next changelog id **20**; next SW VERSION e.g. `PREFIX + '<date>-<tag>'`. One release = one changelog id + SW bump + full test run + push + update this table.

| # | Release | Items | Book PDF? | Status |
|---|---|---|---|---|
| R1 | Quick wins | A1 report-error mailto, A2 text size, A4 iPhone hint, A3 home progress overview | no | pending |
| R2 | Practice engine | B3a confidence rating + cross-chapter topic tags on all cards/questions, then A6 quiz from mistakes, A7 exam by topic, weak-spot map | no | pending |
| R3 | Library depth 1 | B1: Ch 4–5 drugs (antipsychotics) | yes | pending |
| R4 | Library depth 2 | B1: Ch 6–7 drugs (mood, antidepressants) | yes | pending |
| R5 | Library depth 3 | B1: Ch 8–13 + remaining drugs | yes | pending |
| R6 | Cheat sheets | A5 drug-class cheat sheets + PDF (built on R3–R5) | no | pending |
| R7 | Rationales 1 | B2: why-each-wrong-answer + page ref, Ch 9–13 | yes | pending |
| R8 | Rationales 2 | B2: same, Ch 1–8 | yes | pending |
| R9 | Vignettes 1 | B2: ~15 two-step vignettes/ch, Ch 1–7 | yes | pending |
| R10 | Vignettes 2 | B2: same, Ch 8–13 | yes | pending |
| R11 | Learning features | B3 rest: mechanism-reasoning drill, warm-ups, "explain why" prompts | no | pending |
| R12 | Diagrams | B4: agonist slider, D2 occupancy meter, dopamine pathways, receptor ring | no | pending |
| R13 | Ch 8/9 depth | recheck vs book, expand guide | yes | pending |
| R14 | Housekeeping | errata page, "How current is this?" page, consistency checks, shareable assignment links | no | pending |

Working method: Claude does design, clinical/content decisions and final review of every item; subagents draft from extracted book pages (library fields, rationales, tags) and run test/screenshot passes. Suggest a fresh chat about every 3 releases (session-handoff skill).

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

## 9. Files to re-attach
- `Stahls_Essential_Psychopharmacology_5th_ed.pdf`: needed for any content work (B1, B2, Ch 8/9 depth, cheat-sheet facts). Not needed for pure feature work (A1–A4, A6, A7, B3 mechanics, B4).
