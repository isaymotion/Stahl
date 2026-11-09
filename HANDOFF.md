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
- `data/chNN/`: `guide.js` (`{intro, parts:[{title, sections:[{id,title,pages,blocks:[…]}]}]}`; block types `p, list, defs, table, callout{variant: pearl|exam|caution|analogy|mnemonic|key}, case{title,text,point}, steps, flow, compare, update{year,title,text,source}`), `highyield.js` (`[{id, topic, items:["… **bold = blank** …"]}]`), `cards-mech|drugs|clinical.js` (`{id, tag, q, a}`), `cards-cases.js` (`{id, tag, q, choices[5], answer(0-4), why}`), `glossary.js` (`SP.glossary` rows `[term, def, "Ch N"]` + `SP.glossaryAliases`).
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
(cd ../stahl && node ../stahl-dev/tests/audit.js)       # content-depth table
```
Publish: `cd stahl && git add -A && git -c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com" commit -m "…" && git push origin main`.

## 6. Status (as of 2026-11-09, main = 815e009, version 26.0.0)
| Area | State |
|---|---|
| Chapters 1–13 | Done: 247 guide sections, 1,102 high-yield points, 726 mech / 268 drug / 200 clinical cards, 608 board questions, 469 glossary terms |
| Library | 183 drugs, 105 targets, 16 NTs, 83 circuits, 17 drug types |
| QoL pass | Done: phone home layout, two-column PDF generator (chapter + all chapters), Compare drug-type filters, NbN by class, auto-hiding tab bar, phone overflow fixes, SW cache-prefix fix |
| Teaching mode | Done: session builder (6 presets, multi-chapter, counts, order), high-yield blanks, flashcards, board Qs, vignettes, Name that drug, countdown, room/two-team scoring, flags, text size, end-of-session review + PDF |
| Since 10-26 | 20.0.0 Monitoring checklists (`#/monitoring`), 21.0.0 Text size (Aa), 22.0.0 Design refresh (semver changelog, About page, match-device theme, Tagalog draft strings), 23.0.0 = R1, 24.0.0 = R2, 25.0.0 = R3, 26.0.0 = R4 |
| Practice engine (R2) | `data/topics.js`: 28 topics (`SP.topics`), all 1,802 items mapped (`SP.topicMap`, key `chNN/deck/id`); edit `work/r2/topics_vocab.json` + `topic_map.json`, then `node tools/build_topics.js ../stahl`. localStorage `att` = per-item last 8 outcomes (upper = right; S/U/G = sure/unsure/guess, R/W = no rating); `confAsk` pref; `MISTAKES[k].sure`. Routes `#/topics`, `#/topics/<id>`, `#/topics/<id>/cards`, `#/exam/topic/<id>`, `#/exam/mistakes`. Topic strength needs ≥5 practised items. |

## 7. Next steps: agreed release plan (owner approved all A + B, order B1 → B4, 2026-11-09)
Next version **27.0.0** (R5). One release = one changelog id + SW bump + full test run + push + update this table.

| # | Release | Items | Book PDF? | Status |
|---|---|---|---|---|
| R1 | Quick wins | A1 report-error mailto, A2 text size (already in 21.0.0), A4 iPhone hint, A3 home progress overview | no | **done 23.0.0** |
| R2 | Practice engine | B3a confidence rating + cross-chapter topic tags on all cards/questions, then A6 quiz from mistakes, A7 exam by topic, weak-spot map | no | **done 24.0.0** |
| R3 | Library depth 1 | B1: Ch 4–5 drugs (antipsychotics) | yes | **done 25.0.0** (68 pearls/32 drugs; see R3 method below) |
| R4 | Library depth 2 | B1: Ch 6–7 drugs (mood, antidepressants) | yes | **done 26.0.0** (78 pearls/37 drugs; `work/r4/`) |
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

R3 method (reuse for R4/R5): `work/r3/BRIEF.md` (drafting rules for subagents) → `current_<G>.json` (dump of the group's entries) → subagents write `draft_<G>.json` + `notes_<G>.md` → `node work/r3/check_drafts.js ../stahl /home/claude/book/pages <G…>` (8-word verbatim check vs book, src alignment, target ids) → lead verifies claims in the page files and writes `final_<G>.json` → back up `data/db`, `node tools/dbtool.js ../stahl work/r3/r3_patch.js` (applies finals). Book pages extracted per printed page: `pdftotext -layout -f $((p+16)) -l $((p+16))` into `/home/claude/book/pages/p<N>.txt`.
R3 findings: the book's per-drug side-effect detail is mostly already in the library (only 3 SEs added); gains are in pearls. The 11 FGAs listed only in Table 5-1 (p183) have no further book detail: leave as is. Rejected from drafts: "does not bind X" inferred from absence in a figure; pearls that restate the entry's own mechanism/facts. Hallucinogens, stimulants, ketamine, fluoxetine, mirtazapine also appear in Ch 4–5 but belong to R4/R5.
R4 (same method, `work/r4/`, groups A–F): Ch 6 = p245–282, Ch 7 = p283–358 (pages extracted). Deferred to R5 although in Ch 7: amphetamine, MDMA, modafinil, pregabalin, gabapentin, psilocybin. Most TCAs, desvenlafaxine, milnacipran, levomilnacipran, nefazodone, iproniazid, flumazenil, brexanolone, zuranolone: book adds nothing. Book error kept as flagged fact: topiramate "with bupropion" for weight loss (p352). Common draft faults to cut: pearls repeating `mechanism`/`uses`, class points applied to one drug, "still unclear" pearls.

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

## 9. Files to re-attach
- `Stahls_Essential_Psychopharmacology_5th_ed.pdf`: needed for any content work (B1, B2, Ch 8/9 depth, cheat-sheet facts). Not needed for pure feature work (A1–A4, A6, A7, B3 mechanics, B4).
