# dev-tools (not published)

Build, patch and test tools for the Stahl Study Companion. This branch is separate from `main` so none of it is served on GitHub Pages. Read `HANDOFF.md` first.

## Restore

```bash
git clone https://github.com/isaymotion/Stahl.git stahl            # main = the app
git -C stahl worktree add ../stahl-dev dev-tools                    # this branch
# Work on the app in ./stahl; run tools from ./stahl-dev
```

No absolute paths are required. Tools take the app folder as an argument; tests read `STAHL_BASE` (default `http://localhost:8766`) and `OUT` (default `./out`).

## tools/
| File | Use |
|---|---|
| `check_xrefs.js` | `node tools/check_xrefs.js <app>`: every `[[drug:…]]`, `[[target:…]]`, `[[nt:…]]`, `[[ch:…]]`, glossary alias resolves. Passing: `problems 0`. |
| `dbtool.js` | `node tools/dbtool.js <app> work/chNN_patch.js`: applies a library patch to `data/db/*.js` and re-serializes in house style. Back up `data/db` first. |
| `shuffle_cases.js` | `node tools/shuffle_cases.js <app>/data/chNN/cards-cases.js chNN`: balances correct-answer positions A–E. |
| `routes.py` | `python3 tools/routes.py <baseURL> <outdir>`: visits ~190 routes, prints the first line of each page and any `!!` error. Passing: no `!!` lines. |
| `shot.py` | `python3 tools/shot.py URL out.png W H full(0/1) [key=value theme] [js]`: one screenshot. |
| `mkfonts.py` | `python3 tools/mkfonts.py <app>`: rebuilds `js/pdf-fonts.js` (subset DejaVu Condensed, needs fonttools + system DejaVu fonts). |
| `pdftest.py` | Downloads the PDF from a handout or print-all page (edit URL inside). |
| `findpage.sh` | `tools/findpage.sh <dir-of-page-txt> 16 "phrase"…`: prints the printed page of each phrase. |
| `strips.py`, `render_icons.py` | One-off helpers used for binding-strip strengths and app icons. |

## work/
`chNN_patch.js` (plus `ch03_drugs.js`, `ch03_targets.js`): the library patches applied per chapter, in the app's own words. Kept for reference and re-runs. `app-icon-source.png`: icon source art.

## tests/ (Playwright, Chromium preinstalled)
| File | Checks |
|---|---|
| `tabbar.py` | Auto-hiding tab bar at 390×700 mobile: hide on scroll down, show on up/top/bottom/menu/focus/hashchange; last content above bar; no console errors. |
| `overflow.py` | No page wider than 390px on phone (prints scrollWidth per route; all must be 390). |
| `teach_t.py`, `teach3.py` | Teaching mode: builder counts, high-yield blanks, countdown, Name that drug, teams, end slide, review PDF. |
| `ws.py` | Fill-in worksheet PDF (Letter). |
| `chip.py` | Compare drugs: drug-type filter chips. |
| `swtest.py` | Service worker deletes only `stahl-companion-*` caches, never other apps'. |
| `audit.js` | `node tests/audit.js` from the app folder: content-depth table per chapter + drug-library gaps. |

Never commit book text, page images or the PDF here (`chNN.txt`, `chNNp/`, `figs/`, `img*/`).
