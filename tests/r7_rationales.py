# R7 wrong-answer rationales: exam review (all reasons + page chips), practice card back (own pick + toggle that persists),
# teaching mode (room's pick + discuss others, review text), phone 390 overflow. Usage: CHS="ch09 ch13" python3 -u tests/r7_rationales.py
import asyncio, os
from playwright.async_api import async_playwright
BASE = os.environ.get('STAHL_BASE', 'http://localhost:8766').rstrip('/') + '/'
CHS = os.environ.get('CHS', 'ch09 ch10 ch11 ch12 ch13').split()
OUT = '/tmp/r7'; os.makedirs(OUT, exist_ok=True)
ERR = []
def check(ok, msg):
    if not ok: ERR.append(msg); print('  !!', msg)

async def run(p, w, h, tag):
    b = await p.chromium.launch(); pg = await b.new_page(viewport={'width': w, 'height': h})
    pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
    pg.on('pageerror', lambda e: ERR.append(tag + ' pageerror ' + str(e)))
    await pg.goto(BASE + '#/'); await pg.wait_for_timeout(1500)
    # data shape in every chapter that has rationales
    bad = await pg.evaluate("""(chs)=>{const out=[];chs.forEach(ch=>{(SP.chapters[ch].cases||[]).forEach(c=>{
        if(!c.whyNot){out.push(c.id+' none');return;}
        if(c.whyNot.length!==c.choices.length||c.whyNot[c.answer]!==''||c.whyNot.filter(x=>x).length!==c.choices.length-1) out.push(c.id+' shape');
        if(!c.pages||!(c.whyNotPages||[]).every((p,i)=>i===c.answer?p==='':/^\\d/.test(p))) out.push(c.id+' pages');});});return out;}""", CHS)
    check(not bad, tag + ' data: ' + ', '.join(bad[:8]))
    ch = CHS[0]
    # --- exam review
    await pg.goto(BASE + '#/exam'); await pg.wait_for_selector('#ex-form')
    await pg.evaluate("(ch)=>document.querySelectorAll('input[name=ch]').forEach(i=>{if(i.checked!==(i.value===ch)) i.click();})", ch)
    await pg.click('label:has(input[name=count][value="10"])'); await pg.click('label:has(input[name=timed][value="0"])')
    await pg.click('#ex-start'); await pg.wait_for_selector('#ex-q')
    n = await pg.evaluate("JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k=>k.endsWith(':exam')))).items.length")
    for i in range(n):
        await pg.keyboard.press('s'); await pg.keyboard.press('a')
        if i < n - 1: await pg.keyboard.press('ArrowRight')
    await pg.click('#ex-submit'); await pg.wait_for_selector('.exam-results')
    await pg.click('text=All questions'); await pg.wait_for_selector('.review-q')
    wn = await pg.locator('.review-q .whynot').count(); mine = await pg.locator('.review-q .whynot.is-mine').count()
    wrong = await pg.locator('.review-q .choice.is-wrong').count()
    chips = await pg.locator('.review-q .pg-chip').count()
    href = await pg.locator('.review-q .face__why .pg-chip').first.get_attribute('href')
    print(tag, 'review: whynot', wn, 'mine', mine, 'wrong', wrong, 'chips', chips, 'why chip', href)
    check(wn == 4 and mine == wrong and chips == 5 and href and href.startswith('#/c/'), tag + ' exam review rationales')
    await pg.screenshot(path=f'{OUT}/review_{tag}.png', full_page=True)
    if wrong == 0:  # find a missed one for the screenshot
        await pg.goto(pg.url.replace('/all/', '/wrong/')); await pg.wait_for_timeout(300)
    await pg.locator('.review-q .face__why .pg-chip').first.click(); await pg.wait_for_timeout(500)
    check('/guide' in pg.url, tag + ' page chip opens guide: ' + pg.url)
    # --- practice card back
    await pg.goto(BASE + '#/c/' + ch + '/cards/cases'); await pg.wait_for_selector('#fc')
    await pg.evaluate("localStorage.setItem(Object.keys(localStorage)[0].split(':').slice(0,2).join(':')+':whyNotOpen','false')"); await pg.reload(); await pg.wait_for_selector('#fc')
    ans = await pg.evaluate("(()=>{const q=document.querySelector('.face--front .face__q').textContent;return 0;})()")
    # choose a wrong answer: pick the first choice that is not the answer
    a = await pg.evaluate("""(ch)=>{const q=document.querySelector('.face--front .face__q').textContent.trim();
        const c=SP.chapters[ch].cases.find(x=>q.startsWith(x.q.replace(/\\*\\*/g,'').slice(0,30)));return c?c.answer:-1;}""", ch)
    pick = 1 if a == 0 else 0
    await pg.locator(f'.face--front [data-choice="{pick}"]').click(); await pg.wait_for_timeout(700)
    vis = await pg.locator('.face--back .whynot:visible').count()
    print(tag, 'practice: answer', a, 'visible reasons', vis)
    check(vis == 1 and await pg.locator('.face--back .whynot.is-mine:visible').count() == 1, tag + ' practice shows own pick only')
    await pg.screenshot(path=f'{OUT}/card_{tag}.png', full_page=True)
    await pg.locator('.whynot-tg').click(); await pg.wait_for_timeout(200)
    vis2 = await pg.locator('.face--back .whynot:visible').count()
    flipped = await pg.locator('#fc.is-flipped').count()
    check(vis2 == 4 and flipped == 1, tag + f' toggle opens others ({vis2}, flipped {flipped})')
    await pg.screenshot(path=f'{OUT}/card_open_{tag}.png', full_page=True)
    # --- teaching mode
    await pg.goto(BASE + '#/c/' + ch + '/cards/cases'); await pg.wait_for_selector('#fc')
    if await pg.locator('#opt-teach').count():
        await pg.locator('#opt-teach').click(); await pg.wait_for_timeout(600)
        await pg.locator('#t-start').click(); await pg.wait_for_timeout(600)
        a = await pg.evaluate("(()=>{const b=[...document.querySelectorAll('.tchoice')];return b.length})()")
        ans = await pg.evaluate("""(ch)=>{const s=document.querySelector('.teach__stem').textContent.trim();const c=SP.chapters[ch].cases.find(x=>s.startsWith(x.q.replace(/\\*\\*/g,'').slice(0,30)));return c?c.answer:-1;}""", ch)
        await pg.keyboard.press('b' if ans == 0 else 'a'); await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)
        t1 = await pg.locator('.teach__answer .whynot.is-mine').count()
        await pg.locator('#t-others').click(); await pg.wait_for_timeout(200)
        t2 = await pg.locator('.teach__others .whynot').count()
        print(tag, 'teach: mine', t1, 'others', t2)
        check(t1 == 1 and t2 == 3, tag + ' teaching rationales')
        await pg.screenshot(path=f'{OUT}/teach_{tag}.png')
    else:
        check(False, tag + ' no #opt-teach')
    # phone overflow on the review page
    if w <= 400:
        await pg.goto(BASE + '#/exam/results'); await pg.wait_for_timeout(300)
    sw = await pg.evaluate('document.documentElement.scrollWidth')
    check(sw <= w, tag + f' overflow {sw}')
    await b.close()

async def main():
    async with async_playwright() as p:
        await run(p, 390, 844, 'phone')
        await run(p, 1280, 860, 'desk')
    print('ERRORS:', ERR)
asyncio.run(main())
