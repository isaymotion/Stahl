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

## 7. Next steps (owner has not yet chosen order; ask her)
Next changelog id **20**; next SW VERSION e.g. `PREFIX + '2026-10-26-<tag>'`.

**A. Approved “7 extras”** (owner said yes):
1. “Report an error” mailto per guide section (chapter, section, page prefilled).
2. Text-size setting per device.
3. Home progress overview (mastery per chapter, due cards, streak).
4. iPhone “Add to Home Screen” hint (once).
5. Drug-class cheat sheets from library (+ PDF).
6. Quiz from mistakes.
7. Exam by topic across chapters.

**B. Recommended content upgrades** (from `audit.js`; proposed, awaiting her pick). Proposed order: B1 → B2 → B3 → B4.
- **B1 Drug library depth:** 139/183 drugs lack binding strength, 78 lack side effects, 168 lack pearls. Fill from book; feeds Compare, Name that drug, teaching slides, cheat sheets.
- **B2 Question bank:** only ~7% vignettes, stems 60–90 chars; explanations shrink from ~150 chars (Ch1) to ~50 (Ch13); no wrong-answer rationales. Add why-each-distractor-is-wrong + page ref (start Ch 9–13), then ~15 two-step vignettes per chapter.
- **B3 Learning features:** confidence rating (sure/unsure/guess), cross-chapter topic tags (interleaving, weak-spot map, exam by topic), mechanism-reasoning drill generated from library, prerequisite warm-ups, “explain why” prompts.
- **B4 Original interactive diagrams:** agonist-spectrum slider, D2 occupancy meter, dopamine pathways, drug “receptor ring”.
- **Other ideas:** Ch 8 and Ch 9 are thin (≈2,300–2,500 words; recheck vs book); shareable assignment links (session encoded in URL, score code back); errata page of all caution callouts; “How current is this?” page of update boxes; automated consistency checks (library vs chapter text, duplicates).

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
