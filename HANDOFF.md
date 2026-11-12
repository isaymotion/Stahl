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
Vanilla JS SPA, hash routes (`#/c/ch04/guide`, `#/drugs/fluoxetine`, `#/compare/ssri-snri/a,b`, `#/teach`, `#/print-all`, `#/nbn`, `#/reason`, `#/warmup`…).
- `index.html`, `css/app.css` (later rules override earlier ones; phone fixes appended at end), `js/app.js` (~4,700 lines, IIFE, namespace `SP`), `js/reason.js` (reasoning-question generator, pure data in/out, also runs under Node), `js/diagrams.js` (R12 drawings, `SP.dia`, inline SVG, also loads under Node), `js/pdf.js` + `js/pdf-fonts.js` (own PDF writer, lazy-loaded), `sw.js`, `manifest.webmanifest`, `icons/`.
- `data/chapters.js`: registry (`id, number, ready, pages, title, short, summary, files`) + `SP.extraFiles` (db files, changelog). `SP.add(chId, key, value)`.
- `data/chNN/`: (every chapter also has `cards-vignettes.js`, loaded via `SP.VIGNETTE_FILES` in `data/chapters.js`) `guide.js` (`{intro, parts:[{title, sections:[{id,title,pages,blocks:[…]}]}]}`; block types `p, list, defs, table, diagram{label, dia:{spec}}, callout{variant: pearl|exam|caution|analogy|mnemonic|key}, case{title,text,point}, steps, flow, compare, update{year,title,text,source}`), `highyield.js` (`[{id, topic, items:["… **bold = blank** …"]}]`), `cards-mech|drugs|clinical.js` (`{id, tag, q, a}`), `cards-cases.js` (`{id, tag, q, choices[5], answer(0-4), why}`), `cards-vignettes.js` (`{id, tag, stem, steps:[q1, q2]}`, each step a board-question object `{q, choices, answer, why, pages, whyNot, whyNotPages}`, step 2 also `lead`), `glossary.js` (`SP.glossary` rows `[term, def, "Ch N"]` + `SP.glossaryAliases`).
- Cross-refs in text: `[[drug:id|label]] [[target:id]] [[nt:id]] [[ch:chNN|label]] [[page:…]]`.
- `data/db/`: `drugs.js` (183; `id,name,brand,aka,group,cls,short,mechanism,nts,chapters:[{ch,pages}],targets:[{t,action,s(1-4),note}],uses,sideEffects:[{e,via}],pearls,nbn,facts,updates`), `targets.js` (105), `neurotransmitters.js` (16), `circuits.js` (83), `families.js` (17 drug types mapping `group` → family; used by Compare, drug DB, NbN, Name that drug).
- `data/mechgrid.js` (R11; loaded via `SP.extraFiles`): `SP.mechEffects` (20 effects, each with a regex that recognises it in side-effect text), `SP.mechGrid` (23 mechanisms: `label, t` target ids, `act` action regex, `re`/`need` regex over a side effect's `via`, `effects` asked about, `also` effects never offered as wrong answers, `kin`, `how` chain text, `pages`, optional `howBy[effect]`, `noPredict`), `SP.circuitQ` (34 circuit ids → answer label `a`, region `tags`, optional `stem`).
- `data/diagrams.js` (R12; loaded via `SP.extraFiles`): `SP.diagrams` = `spectrum` (4 `zones` with `alone`/`withAg`/`flat` text; `presets.<targetId>` with ascending `marks[{v 0–1, label, text, drugs?}]`), `occupancy.<targetId>` (`title, ch, sec, pages, start, bands[{from,to,label,text}]` tiling 0–100, `marks`, `notes`, optional `unit`), `pathways` (`levels`, 5 `paths`, `states[{id,label,ch,sec,pages,p:{pathId:{lv,text,cx:[circuit ids]}}}]`), `ring` (`min` rated targets for a ring, `start`, sector `groups`), `questions` (board-question shape + `key, chs, tag, dia:{spec}`).
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
node tools/check_diagrams.js ../stahl                   # expect: presets 1 occupancy 8 states 4 ring drugs 21 ring sectors 29 questions 18 guide blocks 8 problems 0
node tools/check_reason.js ../stahl                     # expect: reason items 382 {se 176, pred 29, cmp 20, spot 123, circ 34} problems 0
                                                        # add `--show se 6` (kind or key prefix, count) to read sample questions
timeout 600 python3 tools/routes.py http://localhost:8766 /tmp/shots | grep '!!'   # expect nothing
python3 -u tests/overflow.py ; python3 -u tests/tabbar.py   # expect widths 390, ERRORS: []
python3 -u tests/r1_home.py                             # progress panel, report links, iOS hint; ERRORS: []
python3 -u tests/r2_practice.py                         # confidence, topics, exam by topic/mistakes, phone 390; ERRORS: []
python3 -u tests/r6_cheat.py                            # 17 cheat sheets, PDFs, links, phone 390; ERRORS: []
python3 -u tests/r7_rationales.py                       # rationales: exam review, card toggle, teaching, phone 390; ERRORS: []
python3 -u tests/r9_vignettes.py                        # vignettes: practice steps, exam pairs/lock/score, teaching steps, phone 390; ERRORS: []
                                                        # defaults to all 13 chapters; CHS="ch01 ch09" to limit it
python3 -u tests/r11_learning.py                        # reasoning drill, warm-up, pre-test, explain-why, teaching pause, phone 390; ERRORS: []
python3 -u tests/r12_diagrams.py                        # diagrams page, controls, embeds, search, teaching slides hidden until reveal, desktop light + phone 390 dark; ERRORS: []
python3 tools/figshot.py /tmp/f.png 390 light "#/diagrams/pathways/d2@figure.dia svg"   # close-up (2x) of one element per route → /tmp/f_0.png
(cd ../stahl && node ../stahl-dev/tests/audit.js)       # content-depth table
```
Publish: `cd stahl && git add -A && git -c user.name="Isabella Navarro" -c user.email="isaymotion@gmail.com" commit -m "…" && git push origin main`.
If a session cannot push (git proxy 403), hand over a bundle: `git -C stahl bundle create stahl-<ver>.bundle main dev-tools`; the owner (or a session with push access) runs `git fetch stahl-<ver>.bundle main:main dev-tools:dev-tools && git push origin main dev-tools`.

## 6. Status (as of 2026-11-12, main = 22e0734, version 34.0.0)

Pushed 2026-11-12 (main 22e0734 = 34.0.0; dev-tools: this commit). A new session's first push returns 403 from the git proxy until isaymotion/Stahl is attached to the session with push access (the session's add-repo tool did it in one call, no re-clone needed); if that is not available, ask the owner to add the repo, or hand over a bundle (end of §5).

| Area | State |
|---|---|
| Chapters 1–13 | Done: 247 guide sections, 1,102 high-yield points, 726 mech / 268 drug / 200 clinical cards, 608 board questions (all with wrong-answer rationales: 2,432 in total), 469 glossary terms |
| Library | 183 drugs, 105 targets, 16 NTs, 83 circuits, 17 drug types. B1 pass done (R3–R5): 271 pearls + 65 side effects added; 63 drugs still have no pearls because the book has nothing more on them |
| QoL pass | Done: phone home layout, two-column PDF generator (chapter + all chapters), Compare drug-type filters, NbN by class, auto-hiding tab bar, phone overflow fixes, SW cache-prefix fix |
| Teaching mode | Done: session builder (6 presets, multi-chapter, counts, order), high-yield blanks, flashcards, board Qs, vignettes, Name that drug, countdown, room/two-team scoring, flags, text size, end-of-session review + PDF |
| Since 10-26 | 34.0.0 = R12, 33.0.0 = R11, 32.0.0 = R10, 31.0.0 = R9, 29.0.0 = R7, 30.0.0 = R8, 20.0.0 Monitoring checklists (`#/monitoring`), 21.0.0 Text size (Aa), 22.0.0 Design refresh (semver changelog, About page, match-device theme, Tagalog draft strings), 23.0.0 = R1, 24.0.0 = R2, 25.0.0 = R3, 26.0.0 = R4, 27.0.0 = R5, 28.0.0 = R6, 29.0.0 = R7, 30.0.0 = R8 |
| Learning features (R11) | Owner's decisions 2026-11-12: reasoning misses stay out of Mistakes; explain-why default Smart; chapter warm-up included; typed explanations saved and backed up; all seven suggested improvements in. **Reasoning drill** `#/reason` (`#/reason/missed`, `#/reason/drug/<id>`): `SP.reason.all()` → 382 items `{key, kind se|pred|cmp|spot|circ, mech, drug, chs, tag, q, choices[5], answer, why, whyNot, pages, chain}`, seeded by key (same key = same question). Distractor rules: a mechanism is never offered against an effect in its `effects`/`also` or its `kin`; spot distractors need a full binding profile (`s`) or a drug group with no member at the target, and no mention in the drug's or target's text; spot answers skip weak bindings (`s` < 3) and notes like weak/indirect/possible; cmp needs drug B with a full profile, no action at the target and no such side effect listed (max 3 per mechanism–B pair); circuits never share a region tag. localStorage `reason` {key: last 8 as R/W}; `reasonPick()` = missed first (≤ half), then unseen, kinds in turn, one mechanism-and-effect pairing per session; strength rows need ≥3 tried. **Quiz runner** `Quiz(area, items, o)` (types `mcq`, `flash`, `blank`) is shared by the drill, warm-up and pre-test. **Warm-ups**: `#/warmup` = 2 flashcards (due first; rated into SRS), 1 high-yield blank, 2 board questions (mistakes → weakest topics), 1 reasoning item (missed first); `warm.days[dayNumber] = [right, n]`, home card `warmCardHTML()` with Monday-start week dots. `#/warmup/chNN` = 5-question pre-test, `warm.pre[ch] = {d, keys, right, n, re:[right, n, d]}`, not written to `att`/mistakes/SRS; link in `chapterHead` (`.ch-head__warm`, shows `pretestLine`). **Explain why**: pref `explainAsk` smart|always|off (`explainDue`: smart = right and unsure/guess, plus every 4th other right answer via `explainN`); Player `st.xw` null|ask|done, `xwBlock()` holds the explanation (vignettes: step 2 only), `keyPoints(q)` = bold terms then library names in `why` (max 3; none → Matched/Partly/Missed buttons); right + missed reasoning rewrites the last `att` outcome to `G` (`setLastOutcome`); text in `explain[key] = {t, d, r}`; mechanism flashcards last answered wrong (all, when Always) get an explain-first box. Setting under About. **Teaching**: type/preset `rsn` (catalog items are `kind: 'mcq'` with `rsn: true`, id `rsn:<key>`), pref `xw` → `S.xw`, `st.hold` shows the answer and holds `.teach__reason` until the next press. CSS block at end of `app.css` (`.xw*`, `.quiz*`, `.chain`, `.rs-*`, `.warm-*`, `.pre-sum*`). Tests `tests/r11_learning.py`, `tools/check_reason.js`. Not built: typed prompt inside the drill (it always shows the chain instead); warm-up board questions use `cases` only, not vignette steps; no search entries for the new pages. |
| Diagrams (R12) | Owner's decisions 2026-11-12: embedded where taught **and** a Diagrams page; extra occupancy targets only where the guide already states the figure (all 8 passed); teaching slides in; the earlier draft data reused after a fact-check against the guide text (a subagent listed discrepancies, lead fixed them: SERT/NET figures live in `s7-snri`, bupropion DAT 10–15% (20–30% at most) is Ch 7, the 80% emotional-striatum figure is `s5-mania-dep`). **`SP.dia.html(spec)`** returns `<figure class="dia dia--<kind>" data-dia='{json}'>`; all state is in that attribute and handlers are delegated from `document`, so a figure works wherever its HTML is inserted. Specs: `{kind:'spectrum', preset?, v, flat?}` (v −1…1, or 0…1 with a preset; preset slider snaps to marks on `change`), `{kind:'occupancy', target, v}`, `{kind:'pathways', state, path?}`, `{kind:'ring', drug, vs?}`; flags `full` (Diagrams page: writes the address with `history.replaceState`), `pick` (target chips / drug selects), `blind` (teaching: hides fills, levels, badges, readout and disables the slider). A click redraws the whole figure; dragging redraws only `.dia__out` so the slider keeps focus. Routes `#/diagrams`, `#/diagrams/spectrum[/d2]`, `/occupancy/<target>`, `/pathways/<state>`, `/ring/<drug>[,<drug2>]` (`renderDiagrams`, `diaSpec` in `js/app.js`, section "diagrams" before the cheat sheets). Embeds: guide block `diagram` (8 blocks: s2-spectrum, s4-da-pathways, s5-prolactin, s5-motor, s5-three-pathways, s5-pa, s5-binding ×2; added by `work/r12/embed.js`, idempotent), drug page `.lib-sec--dia` when `SP.dia.hasRing(id)` (21 drugs with ≥7 rated targets), target page `targetDiagrams(t)` (meter if `occupancy[t.id]`, slider if `presets[t.id]`), library tile `nav.diagrams`, search kind `diagram`. Teaching: type/preset `dia` (catalog items `kind:'mcq'` with `dia:true`, id `dia:<key>`), `teachDiagram(q, open)`; on ≥1000px the drawing floats right of the choices. Ring: sector order fixed in `ring.groups`; colour = action (`ACT` regexes, partial agonist tested first), filled cells = `s`; "strongest at" = the drug's own top strength. Pathway geometry (`NODES`, `PATHS`) is hand-placed in a 360×256 viewBox; labels have a halo so lines may pass behind them. CSS block at end of `app.css` (`.dia*`, `.dia-*` svg parts, `.g-dia`, `.teach__dia`). Tests `tests/r12_diagrams.py`, `tools/check_diagrams.js`. Not built: diagrams in PDFs; rings for the 15 drugs with fewer than seven rated targets; an overlay of two rings (they sit side by side); spectrum presets for receptors other than D2. |
| Cheat sheets (R6) | `#/cheat` index + `#/cheat/<familyId>` (17), section "drug-class cheat sheets" in `js/app.js` before the NT section. Built only from library fields: at-a-glance (subgroups, chapters, shared targets = targets ≥ half the class and ≥2 drugs act on, majority action with "also …" for others), binding grid (only if ≥3 drugs have `s`: antipsychotics, SSRI/SNRI, NMDA; columns = targets with `s` in ≥2 drugs, max 12), drug-by-drug table (Key points = `CHEAT_KEY` 4 targets/3 uses/3 SEs/2 pearls, or Everything; subgroup chips; stacks to cards under 640px). PDF via `cheatPdfSpec` → `js/pdf.js` (pages = layout count at 7 pt, then `plan` enlarges up to 9.5 pt). Prefs `cheatPrefs` {detail, paper, gf[fam]}. Links: drug page Same class box (`.side-cheat`), drug DB `#dcheat`, Compare `.cmp-cheat`, library tile `nav.cheat`, search kind `cheat`. CSS block at end of `app.css` (`.cheat-*`, `.act`, `.mx`, `.sdots`). Test `tests/r6_cheat.py`. |
| Two-step vignettes (R9, R10) | **All 13 chapters**: 170 vignettes (10 each Ch 1–3 and 8–9, 15 each Ch 4–7 and 10–13), 340 questions, 1,360 rationales. Data shape above; deck key `vignettes` (MODES, css `c-vig`, `--m-vig`). Helpers `isVig`, `isQuestion`, `qWeight`, `examQ`, `vigConf` after `deckKeys` in `js/app.js`. Practice (`Player`): `st.step/picks/confs`; step 1 locks on the front (`.vig__done`, `#vig-next`), step 2 shows `lead`; back reviews both (`.vig__rev`); suggested rating = steps right (both → Good, Hard if unsure); one SRS/att/mistake key per vignette. Exam: pref `examVig` (default on, `#ex-vig`); `takeQ`/`weightOf` count questions; a vignette expands to items `{k, s:0}`,`{k, s:1}` (adjacent); `gated()`/`frozen()`/`goTo()` lock step 1 (`lk`) when you leave it answered; history items keep `s`; submit records one attempt/mistake per key. Teaching: type/preset `vig` (`mcqHTML()`, `st.step`, `nextStep()`), `S.res`/`S.team`/`S.pk` hold per-step arrays for vignettes (`resList`/`teamList`/`setStepVal`). Search kind `vignettes`. `.flashcard.is-vig` takes the hidden face out of grid sizing. Test `tests/r9_vignettes.py`. |
| Rationales (R7, R8) | **All 13 chapters** (608 questions, 2,432 reasons). Board questions carry `pages` (printed page of the right answer), `whyNot` (one line per choice, `''` at the answer) and `whyNotPages`. Shown by `whyNotLine()` / `whyBlock()` / `pageChip()` in `js/app.js` (section before `renderExamReview`): exam review lists a reason under every wrong choice (your pick gets `.is-mine`); practice `choiceList(c, chosen)` shows your pick's reason and folds the rest behind "Why not the others" (pref `whyNotOpen`); teaching mode shows the room's pick + `#t-others`, and `S.pk[id]` carries the pick into the end-of-session review and PDF. `pageChip()` resolves a printed page → chapter → guide section via `chapterOfPage`/`sectionOfPage` and links `#/c/chNN/guide/<sec>`. Rationale text is in the search index. CSS at end of `app.css` (`.whynot`, `.choice__body`, `.pg-chip`, `.teach__others`; block layout under 640px). Test `tests/r7_rationales.py`. |
| Practice engine (R2) | `data/topics.js`: 28 topics (`SP.topics`), all 1,972 items mapped (1,802 cards/questions + 170 vignettes) (`SP.topicMap`, key `chNN/deck/id`); edit `work/r2/topics_vocab.json` + `topic_map.json`, then `node tools/build_topics.js ../stahl`. localStorage `att` = per-item last 8 outcomes (upper = right; S/U/G = sure/unsure/guess, R/W = no rating); `confAsk` pref; `MISTAKES[k].sure`. Routes `#/topics`, `#/topics/<id>`, `#/topics/<id>/cards`, `#/exam/topic/<id>`, `#/exam/mistakes`. Topic strength needs ≥5 practised items. |

## 7. Next steps: agreed release plan (owner approved all A + B, order B1 → B4, 2026-11-09)
Next version **35.0.0** (R13: Ch 8/9 depth — recheck both chapters against the book and expand the guides; **needs the book PDF re-attached**, see §9). One release = one changelog id + SW bump + full test run + push + update this table. All vignette work is done; for any later vignettes reuse `work/r9|r10/` (BRIEF, `check_drafts.js` with its `COUNT`/`RANGE` maps, `triage.js`, `show.js`, `build_final.js`, then `node tools/apply_vignettes.js ../stahl work/rN chNN…` and `node tools/build_topics.js ../stahl`).

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
| R10 | Vignettes 2 | B2: same, Ch 8–13 | yes | **done 32.0.0** (80 vignettes/160 questions/640 rationales; `work/r10/`) |
| R11 | Learning features | B3 rest: mechanism-reasoning drill, warm-ups, "explain why" prompts | no | **done 33.0.0** (382 reasoning questions in 5 kinds, daily warm-up + chapter pre-test, explain-why with key points, teaching slides + pause) |
| R12 | Diagrams | B4: agonist slider, D2 occupancy meter, dopamine pathways, receptor ring | no | **done 34.0.0** (4 drawings, 8 occupancy targets, 4 pathway states, 21 rings, 8 guide embeds, 18 teaching questions) |
| R13 | Ch 8/9 depth | recheck vs book, expand guide | yes | pending |
| R14 | Housekeeping | errata page, "How current is this?" page, consistency checks, shareable assignment links. Known items: aducanumab/lecanemab/donanemab `sideEffects` (ARIA, infusion reactions) are post-book, move into their `updates`; existing book-error notes kept as facts (topiramate + bupropion p352, fentanyl not reversible by naloxone p560, lisdexamfetamine cleavage site) could become `caution` callouts / errata | no | pending |

Working method: Claude does design, clinical/content decisions and final review of every item; subagents draft from extracted book pages (library fields, rationales, tags) and run test/screenshot passes. Suggest a fresh chat about every 3 releases (session-handoff skill).

Content-pass methods and findings (R3–R10) are in **`METHODS.md`** on dev-tools: library depth (`work/r3–r5`, `tools/dbtool.js`), rationales (`work/r7–r8`, `tools/apply_rationales.js`), two-step vignettes (`work/r9–r10`, `tools/apply_vignettes.js`). Read it before any content pass. Key points:
- Pipeline: BRIEF listing known faults → one subagent per chapter drafts from extracted pages → `check_drafts.js` (8-word verbatim, shape, pages, counts) → lead triage (`triage.js`, `show.js`, grep every claim on its page) → sparse `fix_chNN.json` → `build_final.js` → `--final` check → apply tool.
- Faults to keep listing in briefs: overstated "only/most" claims, distractors the book also endorses, citations a page off, invented details (doses, timing), bare "not mentioned", 8+ copied words, post-2021 facts or **trial/approval status as of 2021** stated as current, page numbers in text, untestable book errors.
- Book errors found, for R14 errata/`caution` callouts: p224 clozapine sialorrhea "pro-cholinergic" (contradicts p225), p66 ketamine "calcium channel" (= NMDA), p438 "ASPD" (= DSPD), "prazocin", Ch 11 oppositional DA excess (p468) vs low (p484), p483 caption α2C vs p481 α2B, Fig 2-16 "five" CYP enzymes names six, Ch 6 "only one of which is depressed mood" vs Fig 6-1, topiramate + bupropion p352, fentanyl/naloxone p560.

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
- Same-hash navigation does not re-render: in tests go to another route first (`#/library`) before returning to `#/reason` or `#/warmup/chNN`.
- A `[hidden]` attribute loses to any `display:` rule (`.tb`, `.empty__actions`): add an explicit `[hidden] { display: none }` for that page.
- New links on drug pages must not reuse `.side-cheat` (tests locate `.side-cheat a` strictly).
- Explain-why and older tests: with the default Smart setting every fourth sure-and-right practice answer shows the prompt before `.face__why`; a Player test that answers many questions should set `sp:v1:explainAsk` to `"off"` first (r7/r9 pass today because they answer few).
- Action regexes: `/agonist/` also matches “antagonist”; anchor them (`/^(full |partial )?agonist$/`).
- Reasoning questions must stay true beyond the library: when adding a mechanism or effect to `data/mechgrid.js`, list well-known effects under `also` even if the book does not, so they are never offered as wrong answers; rerun `check_reason.js --show`.
- Diagrams: anything that would answer a teaching question must be skipped when `spec.blind` (r12 test counts fills, badges, levels, bold readout text on every unrevealed slide). In-text page numbers stay out of `data/diagrams.js`; a second source goes in as a `[[ch:chNN|Chapter N]]` link. `tests/overflow.py` lists elements past 392px, and chapter guide pages always list the mode-tab scroller there (by design), so guide routes are checked in `r12_diagrams.py` instead.
- An interrupted turn can leave uncommitted work in `/home/claude/stahl`: run `git status` in both checkouts before starting and review anything found rather than trusting or discarding it.
- Drug families: the `other` family also catches drugs whose `group` is in no family (`familyOf` fallback), so its sheet can hold more than its listed groups.

## 9. Files to re-attach
- `Stahls_Essential_Psychopharmacology_5th_ed.pdf`: needed for content work (R13 Ch 8/9 depth). Not needed for R14 (R6–R12 are done). Used and re-extracted 2026-11-11 for R7, R8, R9 and R10.
- After attaching, re-extract the pages (never committed: copyrighted). PDF page = printed page + 16:
```bash
mkdir -p /home/claude/book/pages && cd /home/claude/book && cp /mnt/user-data/uploads/<file>.pdf book.pdf
for p in $(seq 1 624); do pdftotext -layout -f $((p+16)) -l $((p+16)) book.pdf pages/p$p.txt; done
# sanity: pages/p379.txt should be the first page of Chapter 9
```
