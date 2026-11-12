# R11 learning features (33.0.0): reasoning drill (bank shape, session, chain, stats, retry missed, drug link),
# daily warm-up (six items, schedule/mistake writes, week dots), chapter pre-test (kept apart, before/after),
# "explain why" (smart timing, ask -> reveal -> key points, guess downgrade, saved text, flashcards, setting),
# teaching mode (reasoning slides, explain pause), backup includes the new stores, phone 390 overflow.
# Usage: python3 -u tests/r11_learning.py
import asyncio, os, json
from playwright.async_api import async_playwright
BASE = os.environ.get('STAHL_BASE', 'http://localhost:8766').rstrip('/') + '/'
OUT = '/tmp/r11t'; os.makedirs(OUT, exist_ok=True)
ERR = []
def check(ok, msg):
    if not ok: ERR.append(msg); print('  !!', msg)
LS = "(k)=>JSON.parse(localStorage.getItem('sp:v1:'+k)||'null')"

async def answer_quiz(pg, right=True, shot=None):
    """Work through a Quiz runner to its end; returns the item types seen."""
    seen = []
    for _ in range(40):
        if await pg.locator('#qz').count() == 0: break
        if await pg.locator('#qz [data-pick]').count():
            ans = await pg.evaluate("""()=>{const q=document.querySelector('#qz');return q?[...q.querySelectorAll('[data-pick]')].length:0}""")
            seen.append('mcq')
            # the right choice is not in the DOM before answering: pick A, then read the verdict
            await pg.keyboard.press('a'); await pg.wait_for_selector('#qz-next')
            if shot and len(seen) == 1: await pg.screenshot(path=OUT + '/' + shot, full_page=True)
            await pg.click('#qz-next')
        elif await pg.locator('#qz .quiz__blank').count():
            seen.append('blank'); await pg.click('#qz-show'); await pg.click('[data-self="1"]')
        else:
            seen.append('flash'); await pg.click('#qz-show'); await pg.click('[data-rate="3"]')
        await pg.wait_for_timeout(60)
    return seen

async def run(p, w, h, tag):
    b = await p.chromium.launch(); pg = await b.new_page(viewport={'width': w, 'height': h})
    pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
    pg.on('pageerror', lambda e: ERR.append(tag + ' pageerror ' + str(e)))
    async def width(where):
        sw = await pg.evaluate('document.documentElement.scrollWidth')
        check(sw <= w, f'{tag} overflow at {where}: {sw}')
    await pg.goto(BASE + '#/'); await pg.wait_for_selector('.warm-card')

    # --- question bank
    bank = await pg.evaluate("""()=>{const b=SP.reason.all(), out={n:b.items.length,kinds:{},bad:[]};
      b.items.forEach(it=>{out.kinds[it.kind]=(out.kinds[it.kind]||0)+1;
        if(it.choices.length!==5||new Set(it.choices).size!==5||it.whyNot.length!==5||it.whyNot[it.answer]!==''||!it.why||!it.pages||!it.chain||it.chain.length<2) out.bad.push(it.key);});
      return out;}""")
    print(tag, 'bank', bank['n'], bank['kinds'])
    check(bank['n'] >= 300 and len(bank['kinds']) == 5 and not bank['bad'], tag + ' bank shape ' + str(bank['bad'][:5]))

    # --- home card and nav
    check(await pg.locator('.warm-week li').count() == 7 and await pg.locator('.warm-week li.is-today').count() == 1, tag + ' home week dots')
    check(await pg.locator('[data-nav="warmup"]').count() == 1 and await pg.locator('[data-nav="reason"]').count() == 1, tag + ' nav items')
    await width('home')

    # --- reasoning drill
    await pg.goto(BASE + '#/reason'); await pg.wait_for_selector('#rs-start')
    check(await pg.locator('[data-kind]').count() == 5, tag + ' five kinds')
    await width('reason setup')
    await pg.click('[data-kind="spot"]'); await pg.click('[data-kind="circ"]'); await pg.click('[data-kind="pred"]'); await pg.click('[data-kind="cmp"]')
    txt = await pg.inner_text('#rs-count'); check(txt.startswith(str(bank['kinds']['se'])), tag + ' kind filter count: ' + txt)
    await pg.select_option('#rs-fam', 'antipsychotic'); t2 = await pg.inner_text('#rs-count')
    check(0 < int(t2.split()[0]) < bank['kinds']['se'], tag + ' family filter: ' + t2)
    await pg.select_option('#rs-fam', 'all')
    for k in ['spot', 'circ', 'pred', 'cmp']: await pg.click(f'[data-kind="{k}"]')
    await pg.click('#rs-start'); await pg.wait_for_selector('#qz [data-pick]')
    check(not await pg.locator('.rs-setup').is_visible(), tag + ' setup hidden while running')
    await pg.keyboard.press('b'); await pg.wait_for_selector('#qz-next')
    check(await pg.locator('#qz .chain li').count() >= 2, tag + ' chain shown')
    check(await pg.locator('#qz .whynot').count() == 4, tag + ' four why-nots')
    check(await pg.locator('#qz .face__why .pg-chip').count() == 1, tag + ' page chip')
    await width('reason answered'); await pg.screenshot(path=f'{OUT}/{tag}_reason.png', full_page=True)
    await pg.click('#qz-next')
    kinds_seen = set()
    for i in range(9):
        await pg.wait_for_selector('#qz [data-pick]')
        kinds_seen.add((await pg.inner_text('#qz .exam-q__meta')).split(' · ')[1])
        await pg.keyboard.press('a'); await pg.click('#qz-next')
    await pg.wait_for_selector('.empty h2')
    rs = await pg.evaluate(LS, 'reason'); vals = list(rs.values())
    print(tag, 'drill: answered', len(rs), 'kinds seen', len(kinds_seen), 'wrong', sum(v.endswith('W') for v in vals))
    check(len(rs) == 10 and len(kinds_seen) >= 3, tag + ' drill session of 10 across kinds')
    check(await pg.evaluate(LS, 'mistakes') in (None, {}), tag + ' drill leaves Mistakes alone')
    nmiss = sum(v.endswith('W') for v in vals)
    if nmiss:
        await pg.goto(BASE + '#/reason/missed'); await pg.wait_for_selector('#qz [data-pick]')
        check((await pg.inner_text('#qz .exam-q__meta')).startswith('1 of ' + str(min(nmiss, 20))), tag + ' retry missed length')
    await pg.goto(BASE + '#/library'); await pg.goto(BASE + '#/reason'); await pg.wait_for_selector('.rs-stats')
    check(await pg.locator('.rs-rows .rs-row').count() >= 5, tag + ' stats rows'); await width('reason stats')
    await pg.goto(BASE + '#/drugs/olanzapine'); await pg.wait_for_selector('.side-reason a')
    await pg.click('.side-reason a'); await pg.wait_for_selector('#qz [data-pick]')
    check('lanzapine' in await pg.inner_text('#qz'), tag + ' drug preset asks about the drug')

    # --- daily warm-up
    await pg.goto(BASE + '#/warmup'); await pg.wait_for_selector('#qz')
    check((await pg.inner_text('#qz .exam-q__meta')).startswith('1 of 6'), tag + ' warm-up has six items')
    seen = await answer_quiz(pg, shot=f'{tag}_warm_mcq.png')
    await pg.wait_for_selector('.empty h2')
    print(tag, 'warm-up items', seen)
    check(seen == ['flash', 'flash', 'blank', 'mcq', 'mcq', 'mcq'], tag + ' warm-up mix ' + str(seen))
    warm = await pg.evaluate(LS, 'warm'); srs = await pg.evaluate(LS, 'srs')
    check(len(warm['days']) == 1 and list(warm['days'].values())[0][1] == 6 and len(srs) == 2, tag + ' warm-up saved day and two ratings')
    await pg.goto(BASE + '#/'); await pg.wait_for_selector('.warm-card')
    check(await pg.locator('.warm-week li.is-done').count() == 1 and '1 day this week' in await pg.inner_text('.warm-card'), tag + ' home shows the day done')

    # --- chapter pre-test: kept apart from attempts, before/after
    att0 = len(await pg.evaluate(LS, 'att') or {}); mk0 = len(await pg.evaluate(LS, 'mistakes') or {})
    await pg.goto(BASE + '#/c/ch05/guide'); await pg.wait_for_selector('.ch-head__warm')
    check('Test yourself first' in await pg.inner_text('.ch-head__warm'), tag + ' chapter link'); await width('chapter head')
    await pg.click('.ch-head__warm'); await pg.wait_for_selector('#pt-new'); await width('pretest')
    await pg.click('#pt-new'); await pg.wait_for_selector('#qz [data-pick]')
    check((await pg.inner_text('#qz .exam-q__meta')).startswith('1 of 5'), tag + ' pre-test has five')
    await answer_quiz(pg); await pg.wait_for_selector('.empty .pre-sum')
    pre = (await pg.evaluate(LS, 'warm'))['pre']['ch05']
    check(pre['n'] == 5 and len(pre['keys']) == 5, tag + ' pre-test saved')
    check(len(await pg.evaluate(LS, 'att') or {}) == att0 and len(await pg.evaluate(LS, 'mistakes') or {}) == mk0, tag + ' pre-test kept apart from attempts and mistakes')
    await pg.goto(BASE + '#/library'); await pg.goto(BASE + '#/warmup/ch05'); await pg.wait_for_selector('#pt-retake')
    await pg.click('#pt-retake'); await pg.wait_for_selector('#qz [data-pick]'); await answer_quiz(pg); await pg.wait_for_selector('.empty .pre-sum__arrow')
    await pg.screenshot(path=f'{OUT}/{tag}_pretest.png', full_page=True); await width('pretest result')
    await pg.goto(BASE + '#/c/ch05/guide'); await pg.wait_for_selector('.ch-head__warm')
    check('→' in await pg.inner_text('.ch-head__warm'), tag + ' chapter head shows before and after')

    # --- explain why: Always
    await pg.goto(BASE + '#/about'); await pg.wait_for_selector('input[name=explainAsk]')
    check(await pg.evaluate("document.querySelector('input[name=explainAsk]:checked').value") == 'smart', tag + ' default is smart')
    await pg.click('label:has(input[name=explainAsk][value="always"])'); await width('about')
    check(await pg.evaluate(LS, 'explainAsk') == 'always', tag + ' setting saved')
    await pg.goto(BASE + '#/c/ch05/cards/cases'); await pg.wait_for_selector('#fc')
    await pg.select_option('#opt-mode', 'order'); await pg.wait_for_selector('#fc [data-choice]')
    ans = await pg.evaluate("SP.chapters.ch05.cases[0].answer")
    await pg.keyboard.press('s'); await pg.keyboard.press('abcde'[ans]); await pg.wait_for_selector('.xw--ask')
    check(await pg.locator('.face--back .face__why').count() == 0, tag + ' explanation held back')
    check(await pg.locator('[data-rate]').count() == 0, tag + ' no rating while asking')
    check(not await pg.locator('.face--back .whynot').first.is_visible() if await pg.locator('.face--back .whynot').count() else True, tag + ' why-nots hidden while asking')
    await pg.fill('#xw-text', 'because of the receptor profile'); await width('explain ask')
    await pg.screenshot(path=f'{OUT}/{tag}_xw_ask.png')
    await pg.click('#xw-show'); await pg.wait_for_selector('.xw--done')
    check(await pg.locator('.face--back .face__why').count() == 1 and await pg.locator('[data-rate]').count() == 4, tag + ' reasoning and rating after reveal')
    check('because of the receptor profile' in await pg.inner_text('.xw__mine'), tag + ' typed text shown')
    key = await pg.evaluate("'ch05/cases/'+SP.chapters.ch05.cases[0].id")
    npts = await pg.locator('[data-xp]').count()
    print(tag, 'explain: key points', npts, await pg.evaluate("[...document.querySelectorAll('.xw__pts span')].map(x=>x.textContent)"))
    check((await pg.evaluate(LS, 'att'))[key]['h'][-1] == 'S', tag + ' attempt recorded sure and right')
    await pg.click('[data-xr="missed"]'); await pg.wait_for_selector('.xw__verdict.is-missed')
    check((await pg.evaluate(LS, 'att'))[key]['h'][-1] == 'G', tag + ' missed reasoning re-recorded as a guess')
    if npts:
        await pg.click('[data-xp="0"]'); await pg.wait_for_timeout(80)
        check((await pg.evaluate(LS, 'att'))[key]['h'][-1] == 'S', tag + ' ticking a point restores the outcome')
        ex = (await pg.evaluate(LS, 'explain'))[key]
        check(ex['t'].startswith('because') and ex['r'] in ('matched', 'partly'), tag + ' explanation saved ' + str(ex))
    await width('explain done'); await pg.screenshot(path=f'{OUT}/{tag}_xw_done.png', full_page=True)
    await pg.reload(); await pg.wait_for_selector('#fc [data-choice]')
    await pg.keyboard.press('abcde'[ans]); await pg.wait_for_selector('.xw--ask')
    check('because of the receptor profile' in await pg.inner_text('.xw__last'), tag + ' last explanation shown next time')
    await pg.keyboard.press(' '); await pg.wait_for_selector('.xw--done')            # Space reveals
    # vignette: only step 2 is held
    await pg.goto(BASE + '#/c/ch05/cards/vignettes'); await pg.wait_for_selector('#fc')
    await pg.select_option('#opt-mode', 'order'); await pg.wait_for_selector('#fc [data-choice]')
    await pg.keyboard.press('a'); await pg.wait_for_selector('#vig-next'); await pg.click('#vig-next'); await pg.wait_for_selector('#fc [data-choice]')
    await pg.keyboard.press('a'); await pg.wait_for_selector('.xw--ask')
    check(await pg.locator('.face--back .vig__rev').count() == 2 and await pg.locator('.face--back .face__why').count() == 1, tag + ' vignette: step 1 explained, step 2 held')
    await pg.click('#xw-show'); await pg.wait_for_selector('.xw--done')
    check(await pg.locator('.face--back .face__why').count() == 2, tag + ' vignette: both explained after reveal'); await width('vignette explain')
    # mechanism flashcard: explain before flipping
    await pg.goto(BASE + '#/c/ch05/cards/mech'); await pg.wait_for_selector('#fc')
    await pg.select_option('#opt-mode', 'order'); await pg.wait_for_selector('.xw--front')
    await pg.fill('#xw-text', 'my own words'); await pg.click('#flip'); await pg.wait_for_selector('.face--back .xw__mine')
    check('my own words' in await pg.inner_text('.face--back .xw__mine') and await pg.locator('[data-rate]').count() == 4, tag + ' flashcard explain-first')
    await width('flashcard explain')
    # Smart: unsure and right asks; wrong does not
    await pg.evaluate("localStorage.setItem('sp:v1:explainAsk', JSON.stringify('smart')); localStorage.removeItem('sp:v1:explainN')"); await pg.reload()
    await pg.goto(BASE + '#/c/ch05/cards/cases'); await pg.wait_for_selector('#fc'); await pg.select_option('#opt-mode', 'order'); await pg.wait_for_selector('#fc [data-choice]')
    await pg.keyboard.press('u'); await pg.keyboard.press('abcde'[ans]); await pg.wait_for_selector('.xw--ask')
    await pg.click('#xw-show'); await pg.click('[data-rate="3"]'); await pg.wait_for_selector('#fc [data-choice]')
    ans2 = await pg.evaluate("SP.chapters.ch05.cases[1].answer")
    await pg.keyboard.press('abcde'[(ans2 + 1) % 5]); await pg.wait_for_selector('.face--back .face__why')
    check(await pg.locator('.xw').count() == 0, tag + ' smart: no prompt after a wrong answer')
    # Off
    await pg.evaluate("localStorage.setItem('sp:v1:explainAsk', JSON.stringify('off'))"); await pg.reload(); await pg.wait_for_selector('#fc [data-choice]')
    await pg.keyboard.press('u'); await pg.keyboard.press('a'); await pg.wait_for_selector('.face--back .face__why')
    check(await pg.locator('.xw').count() == 0, tag + ' off: never asks')

    # --- backup holds the new stores
    keys = await pg.evaluate("Object.keys(localStorage).filter(k=>k.startsWith('sp:v1:')).map(k=>k.slice(6))")
    check(all(k in keys for k in ['reason', 'warm', 'explain', 'explainAsk']), tag + ' stores present for backup ' + str(sorted(keys)))

    # --- teaching mode: reasoning slides and the explain pause
    await pg.goto(BASE + '#/teach'); await pg.wait_for_selector('#t-start')
    await pg.click('[data-preset="rsn"]'); await pg.wait_for_timeout(150)
    check('10 reasoning question' in await pg.inner_text('#t-count'), tag + ' teach preset: ' + await pg.inner_text('#t-count'))
    await pg.click('label:has(input[name=xw][value="1"])'); await width('teach setup')
    await pg.click('#t-start'); await pg.wait_for_selector('.teach__choices')
    check('Mechanism reasoning' in await pg.inner_text('#teach'), tag + ' teach slide meta')
    await pg.keyboard.press('a'); await pg.keyboard.press(' '); await pg.wait_for_selector('.teach__xw')
    check(await pg.locator('.teach__why').count() == 0 and 'Show the reasoning' in await pg.inner_text('#t-reveal'), tag + ' teach pause holds the reasoning')
    await pg.screenshot(path=f'{OUT}/{tag}_teach_pause.png')
    await pg.keyboard.press(' '); await pg.wait_for_selector('.teach__why')
    check(await pg.locator('.teach__xw').count() == 0, tag + ' teach reasoning after second press'); await width('teach slide')
    await pg.keyboard.press('Escape')
    await b.close()

async def main():
    async with async_playwright() as p:
        await run(p, 390, 844, 'phone'); await run(p, 1280, 900, 'desk')
    print('ERRORS:', ERR)
asyncio.run(main())
