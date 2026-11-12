# R9 two-step vignettes: data shape, practice (step 1 locks, continue, step 2, review of both), exam (two items per
# vignette, step 2 gated until step 1 locks, locked step 1, scoring per step, review shows stem + lead), teaching mode
# (step 1 reveal -> Next step -> step 2, per-step room marks, end review), search, phone 390 overflow.
# Usage: CHS="ch05" python3 -u tests/r9_vignettes.py   (defaults to all 13 chapters)
import asyncio, os, json
from playwright.async_api import async_playwright
BASE = os.environ.get('STAHL_BASE', 'http://localhost:8766').rstrip('/') + '/'
CHS = os.environ.get('CHS', ' '.join('ch%02d' % i for i in range(1, 14))).split()
OUT = '/tmp/r9'; os.makedirs(OUT, exist_ok=True)
ERR = []
def check(ok, msg):
    if not ok: ERR.append(msg); print('  !!', msg)

async def ls(pg, k):
    return await pg.evaluate("(k)=>{const key=Object.keys(localStorage).find(x=>x.endsWith(':'+k));return key?JSON.parse(localStorage.getItem(key)):null}", k)

async def run(p, w, h, tag):
    b = await p.chromium.launch(); pg = await b.new_page(viewport={'width': w, 'height': h})
    pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
    pg.on('pageerror', lambda e: ERR.append(tag + ' pageerror ' + str(e)))
    await pg.goto(BASE + '#/'); await pg.wait_for_timeout(1500)
    bad = await pg.evaluate("""(chs)=>{const out=[];chs.forEach(ch=>{(SP.chapters[ch].vignettes||[]).forEach(v=>{
        if(!v.stem||!v.steps||v.steps.length!==2){out.push(v.id+' shape');return;}
        if(!v.steps[1].lead) out.push(v.id+' lead');
        v.steps.forEach((c,i)=>{ if(c.choices.length!==5||c.whyNot.length!==5||c.whyNot[c.answer]!==''||c.whyNot.filter(x=>x).length!==4) out.push(v.id+'.'+i+' whyNot');
          if(!c.pages||!c.whyNotPages.every((p,j)=>j===c.answer?p==='':/^\\d/.test(p))) out.push(v.id+'.'+i+' pages');
          if(!SP.topicMap[ch+'/vignettes/'+v.id]) out.push(v.id+' topic'); });});});return out;}""", CHS)
    check(not bad, tag + ' data: ' + ', '.join(bad[:8]))
    ch = None
    for c in CHS:
        if await pg.evaluate("(c)=>(SP.chapters[c].vignettes||[]).length", c): ch = c; break
    # --- practice
    await pg.goto(BASE + '#/c/' + ch + '/cards/vignettes'); await pg.wait_for_selector('#fc')
    check(await pg.locator('.face--front .vig__stem').count() == 1, tag + ' practice stem')
    v = await pg.evaluate("""(ch)=>{const s=document.querySelector('.face--front .vig__stem').textContent.trim();
        return SP.chapters[ch].vignettes.find(x=>s.startsWith(x.stem.replace(/\\*\\*/g,'').slice(0,30)))}""", ch)
    check(v is not None, tag + ' practice vignette found')
    a0 = v['steps'][0]['answer']; wrong = 1 if a0 == 0 else 0
    await pg.keyboard.press('s'); await pg.keyboard.press('abcde'[wrong]); await pg.wait_for_timeout(300)
    check(await pg.locator('.face--front .vig__done .vig__res.is-wrong').count() == 1, tag + ' step 1 locks with verdict')
    check(await pg.locator('#fc.is-flipped').count() == 0, tag + ' not flipped after step 1')
    check(await pg.locator('.face--front .vig__done .whynot.is-mine').count() == 1, tag + ' step 1 own reason')
    await pg.screenshot(path=f'{OUT}/practice1_{tag}.png', full_page=True)
    await pg.locator('#vig-next').click(); await pg.wait_for_timeout(300)
    check(await pg.locator('.face--front .vig__lead').count() == 1 and await pg.locator('.face--front .vig__prev').count() == 1, tag + ' step 2 lead shown')
    a1 = v['steps'][1]['answer']
    await pg.keyboard.press('abcde'[a1]); await pg.wait_for_timeout(700)
    check(await pg.locator('#fc.is-flipped').count() == 1, tag + ' flipped after step 2')
    revs = await pg.locator('.face--back .vig__rev').count()
    verdict = (await pg.locator('.face--back .verdict').text_content()).strip()
    sug = await pg.locator('.rate__b.is-suggested').get_attribute('data-rate')
    print(tag, 'practice: reviews', revs, 'verdict', verdict, 'suggested', sug)
    check(revs == 2 and verdict == 'One of two steps right' and sug == '2', tag + ' practice back')
    att = await ls(pg, 'att'); mk = await ls(pg, 'mistakes'); key = ch + '/vignettes/' + v['id']
    check(att and key in att and att[key]['h'][-1] == 's', tag + f' attempt recorded as confident miss {att and att.get(key)}')
    check(mk and key in mk, tag + ' vignette in mistakes')
    await pg.screenshot(path=f'{OUT}/practice2_{tag}.png', full_page=True)
    await pg.locator('[data-rate="2"]').click(); await pg.wait_for_timeout(300)
    check(await pg.locator('.face--front .vig__stem').count() == 1, tag + ' next card renders')
    # --- exam: only this chapter, include vignettes
    await pg.goto(BASE + '#/exam'); await pg.wait_for_selector('#ex-form')
    check(await pg.locator('#ex-vig').is_checked(), tag + ' exam includes vignettes by default')
    await pg.evaluate("(ch)=>document.querySelectorAll('input[name=ch]').forEach(i=>{if(i.checked!==(i.value===ch)) i.click();})", ch)
    await pg.click('label:has(input[name=count][value="0"])'); await pg.click('label:has(input[name=timed][value="0"])')
    await pg.click('#ex-start'); await pg.wait_for_selector('#ex-q')
    ex = await ls(pg, 'exam'); items = ex['items']
    nv = await pg.evaluate("(ch)=>SP.chapters[ch].vignettes.length", ch); nc = await pg.evaluate("(ch)=>SP.chapters[ch].cases.length", ch)
    s0 = [i for i, x in enumerate(items) if x.get('s') == 0]
    pairs_ok = all(items[i + 1].get('s') == 1 and items[i + 1]['k'] == items[i]['k'] for i in s0)
    print(tag, 'exam items', len(items), 'vignettes', nv, 'cases', nc)
    check(len(items) == nc + 2 * nv and len(s0) == nv and pairs_ok, tag + ' exam expands vignettes into step pairs')
    i0 = s0[0]
    await pg.locator(f'[data-go="{i0 + 1}"]').first.click(); await pg.wait_for_timeout(200)
    check(await pg.locator('.vig__gate').count() == 1, tag + ' step 2 gated before step 1')
    await pg.locator('.vig__gate [data-go]').click(); await pg.wait_for_timeout(200)
    check(await pg.locator('.vig__note').count() == 1, tag + ' step 1 lock notice')
    await pg.keyboard.press('s'); await pg.keyboard.press('a'); await pg.keyboard.press('ArrowRight'); await pg.wait_for_timeout(200)
    check(await pg.locator('#ex-q .vig__lead').count() == 1, tag + ' exam step 2 shows lead')
    await pg.screenshot(path=f'{OUT}/exam2_{tag}.png', full_page=True)
    await pg.keyboard.press('ArrowLeft'); await pg.wait_for_timeout(200)
    dis = await pg.locator('#ex-q .choice[disabled]').count()
    before = (await ls(pg, 'exam'))['items'][i0]['a']
    await pg.keyboard.press('b'); await pg.wait_for_timeout(100)
    after = (await ls(pg, 'exam'))['items'][i0]['a']
    check(dis == 5 and before == after, tag + f' step 1 locked after moving on (disabled {dis})')
    # answer everything with A, then submit
    await pg.locator('[data-go="0"]').first.click()
    for i in range(len(items)):
        await pg.keyboard.press('s'); await pg.keyboard.press('a')
        if i < len(items) - 1: await pg.keyboard.press('ArrowRight')
    await pg.click('#ex-submit'); await pg.wait_for_selector('.exam-results')
    hist = (await ls(pg, 'examHistory'))[0]
    exp = await pg.evaluate("""(it)=>{let n=0;it.forEach(x=>{const r=SP.chapters[x.k.split('/')[0]][x.k.split('/')[1]].find(c=>c.id===x.k.split('/')[2]);const q=x.s!=null?r.steps[x.s]:r;if(x.a===q.answer)n++;});return n}""", hist['items'])
    print(tag, 'exam score', hist['score'], '/', hist['total'], 'expected', exp)
    check(hist['score'] == exp and hist['total'] == len(items) and all('s' in x for x in hist['items'] if x['k'].split('/')[1] == 'vignettes'), tag + ' exam scoring per step')
    await pg.click('text=All questions'); await pg.wait_for_selector('.review-q')
    await pg.goto(BASE + '#/exam/review/' + hist['id'] + '/all/' + str(i0 + 1)); await pg.wait_for_timeout(400)
    check(await pg.locator('.review-q .vig__lead').count() == 1 and await pg.locator('.review-q .vig__stem').count() == 1, tag + ' exam review step 2 shows stem + lead')
    await pg.screenshot(path=f'{OUT}/review_{tag}.png', full_page=True)
    # --- teaching
    await pg.goto(BASE + '#/c/' + ch + '/cards/vignettes'); await pg.wait_for_selector('#fc')
    await pg.locator('#opt-teach').click(); await pg.wait_for_timeout(600)
    await pg.locator('#t-start').click(); await pg.wait_for_timeout(600)
    kick = await pg.locator('.teach__kicker').first.text_content()
    check('Step 1 of 2' in kick, tag + ' teaching step 1 kicker: ' + kick)
    stem = (await pg.locator('.teach__vstem').text_content()).strip()
    tv = await pg.evaluate("(a)=>SP.chapters[a[0]].vignettes.find(x=>a[1].startsWith(x.stem.replace(/\\*\\*/g,'').slice(0,30)))", [ch, stem])
    t0 = tv['steps'][0]['answer']
    await pg.keyboard.press('abcde'[t0]); await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)
    check(await pg.locator('.teach__answer').count() == 1 and (await pg.locator('#t-reveal').text_content()).strip() == 'Next step', tag + ' teaching step 1 revealed')
    await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)
    check(await pg.locator('.teach__vlead').count() == 1 and 'Step 2 of 2' in await pg.locator('.teach__kicker').first.text_content(), tag + ' teaching step 2')
    await pg.keyboard.press('b' if tv['steps'][1]['answer'] == 0 else 'a'); await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)
    await pg.screenshot(path=f'{OUT}/teach_{tag}.png')
    S = await ls(pg, 'teach'); tid = 'vig:' + ch + '/' + tv['id']
    print(tag, 'teach res', S['res'].get(tid), 'pk', S.get('pk', {}).get(tid), 'score', await pg.locator('.teach__score').text_content())
    check(S['res'].get(tid) == [1, 0], tag + ' teaching per-step marks')
    check('Room 1/2' in (await pg.locator('.teach__score').text_content()), tag + ' teaching score counts steps')
    await pg.evaluate("(()=>{const k=Object.keys(localStorage).find(x=>x.endsWith(':teach'));const S=JSON.parse(localStorage.getItem(k));S.pos=S.order.length;localStorage.setItem(k,JSON.stringify(S));})()")
    await pg.reload(); await pg.wait_for_timeout(800)
    endTxt = await pg.locator('.tend').text_content()
    check('Step 2:' in endTxt and 'Room chose' in endTxt, tag + ' teaching end review lists both steps')
    await pg.screenshot(path=f'{OUT}/teach_end_{tag}.png', full_page=True)
    # overflow on vignette pages
    if w <= 400:
        for hsh in ['#/c/' + ch + '/cards/vignettes', '#/exam', '#/teach']:
            await pg.goto(BASE + hsh); await pg.wait_for_timeout(700)
            sw = await pg.evaluate('document.documentElement.scrollWidth')
            check(sw <= w, tag + f' overflow {hsh} {sw}')
    await b.close()

async def main():
    async with async_playwright() as p:
        await run(p, 390, 844, 'phone')
        await run(p, 1280, 860, 'desk')
    print('ERRORS:', ERR)
asyncio.run(main())
