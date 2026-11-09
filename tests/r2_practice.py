# R2 practice engine: confidence, topics, weak-spot map, exam by topic / from mistakes.
import asyncio, json
from playwright.async_api import async_playwright
BASE='http://localhost:8766/'
SEED = """
(() => {
  const P='sp:v1:'; const att={}; const keys=Object.keys(SP.topicMap);
  keys.forEach((k,i)=>{ if (i%3) return; const t=SP.topicMap[k];
    const weak = t==='pk-interactions' || t==='norepinephrine';
    att[k]={h: weak ? (i%2?'sWU':'wus') : (i%5? 'SSS':'SUw'), t: Date.now()-i}; });
  localStorage.setItem(P+'att', JSON.stringify(att));
})()
"""
async def main():
    errs=[]
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(viewport={'width':1280,'height':900}); pg=await ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
        await pg.goto(BASE+'#/topics'); await pg.wait_for_selector('.tp-grid')
        print('topics empty: tiles', await pg.locator('.tp').count(), 'none-band', await pg.locator('.tp--none').count(), '|', (await pg.inner_text('.tp-weak'))[:80])
        print('nav item:', await pg.locator('[data-nav="topics"]').count())
        # confidence in a deck: mark sure, answer wrong
        await pg.goto(BASE+'#/c/ch05/cards/cases'); await pg.wait_for_selector('#fc .conf')
        await pg.keyboard.press('s'); print('sure pressed:', await pg.get_attribute('.face--front [data-conf=sure]','aria-pressed'))
        ans = await pg.evaluate("(()=>{const k=document.querySelector('#fc');return null})()")
        q = await pg.evaluate("""(()=>{ const id=document.querySelector('.report-row')?null:null; return 1 })()""")
        # pick a wrong answer: find the current card's answer through the app data
        wrong = await pg.evaluate("""(()=>{ const t=document.querySelector('.face--front .face__q').textContent; const c=SP.chapters.ch05.cases.find(x=>t.indexOf(x.q.replace(/\\*\\*/g,'').slice(0,30))>-1)||SP.chapters.ch05.cases[0]; return [(c.answer+1)%5, c.id]; })()""")
        await pg.click(f'.face--front [data-choice="{wrong[0]}"]')
        print('confident-miss note:', await pg.locator('.face--back .conf-note.is-warn').count(), '| topic link:', await pg.locator('.face--back .face__topic').first.inner_text())
        st = await pg.evaluate("[JSON.parse(localStorage.getItem('sp:v1:att')||'{}'), JSON.parse(localStorage.getItem('sp:v1:mistakes')||'{}')]")
        print('att:', st[0], 'mistake sure:', [ (k,v.get('sure')) for k,v in st[1].items()])
        await pg.goto(BASE+'#/mistakes'); await pg.wait_for_selector('.mk-list')
        print('mistakes bar:', await pg.inner_text('.deck-bar'), '| badge:', await pg.locator('.mk .tp__warn').count())
        # seeded weak-spot map
        await pg.evaluate(SEED); await pg.goto(BASE+'#/'); await pg.reload(); await pg.wait_for_selector('.prog__tiles')
        print('home tips:', [t[:110] for t in await pg.locator('.prog__tip').all_inner_texts()])
        await pg.goto(BASE+'#/topics'); await pg.wait_for_selector('.tp-weak .btn')
        print('weakest:', await pg.inner_text('.tp-weak p'))
        print('bands:', {c: await pg.locator('.tp--'+c).count() for c in ['good','mid','low','none']})
        await pg.screenshot(path='/tmp/r2_topics_desk.png', full_page=False)
        await pg.select_option('#tp-sort','weak'); await pg.wait_for_timeout(100)
        print('first when weak-sorted:', (await pg.locator('.tp__name').first.inner_text()))
        await pg.select_option('#tp-sort','book')
        await pg.goto(BASE+'#/topics/pk-interactions'); await pg.wait_for_selector('.topic-page')
        print('topic page tiles:', [t.replace('\n',' ') for t in await pg.locator('.tp-tiles .prog__tile').all_inner_texts()])
        print('fix items:', await pg.locator('.tp-fix li').count(), 'chapter rows:', await pg.locator('.topic-page tbody tr').count())
        await pg.screenshot(path='/tmp/r2_topic_desk.png', full_page=True)
        await pg.click('text=Practise this topic'); await pg.wait_for_selector('#fc')
        print('topic practice count:', await pg.inner_text('.deck-bar__count'), '| src:', await pg.locator('.face--front .face__src').first.inner_text())
        # exam by topic, weakest preset
        await pg.goto(BASE+'#/exam'); await pg.wait_for_selector('#ex-form')
        await pg.click('label:has(input[name=by][value=topics])'); await pg.click('#ex-weak')
        print('exam sum:', await pg.inner_text('#ex-sum'), '| checked:', await pg.locator('input[name=tp]:checked').count())
        await pg.click('label:has(input[name=count][value="10"])'); await pg.click('label:has(input[name=timed][value="0"])')
        await pg.click('#ex-start'); await pg.wait_for_selector('#ex-q .conf')
        ex = await pg.evaluate("JSON.parse(localStorage.getItem('sp:v1:exam'))")
        print('exam src:', ex['src'], 'n', len(ex['items']), 'chapters', ex['chapters'])
        for i in range(len(ex['items'])):
            await pg.keyboard.press('s'); await pg.keyboard.press('b' if i%2 else 'a')
            if i < len(ex['items'])-1: await pg.keyboard.press('ArrowRight')
        await pg.click('#ex-submit'); await pg.wait_for_selector('.exam-results')
        print('results actions:', await pg.locator('.results-actions .btn').all_inner_texts())
        print('conf table rows:', await pg.locator('.results-sec:has(h2:text("Confidence")) tbody tr').all_inner_texts())
        print('topic rows linked:', await pg.locator('.results-sec:has(h2:text("Score by topic")) tbody a').count())
        hist = await pg.evaluate("JSON.parse(localStorage.getItem('sp:v1:examHistory'))[0]")
        sure_wrong = [x for x in hist['items'] if x.get('c')=='sure']
        print('items with conf:', len(sure_wrong))
        if await pg.locator('text=Confident misses (').count():
            await pg.click('text=Confident misses ('); await pg.wait_for_selector('.review-q')
            print('review:', await pg.inner_text('.exam-review h1'), '|', await pg.inner_text('.review-q .verdict'))
        # exam from mistakes, answer all correctly -> clears
        before = await pg.evaluate("Object.keys(JSON.parse(localStorage.getItem('sp:v1:mistakes'))).length")
        await pg.goto(BASE+'#/exam/mistakes'); await pg.wait_for_selector('#ex-form')
        print('preset by:', await pg.locator('input[name=by]:checked').get_attribute('value'), '|', await pg.inner_text('#ex-sum'))
        await pg.uncheck('#ex-related'); await pg.click('label:has(input[name=count][value="0"])'); await pg.click('#ex-start'); await pg.wait_for_selector('#ex-q')
        ex = await pg.evaluate("JSON.parse(localStorage.getItem('sp:v1:exam'))")
        await pg.evaluate("""(()=>{const ex=JSON.parse(localStorage.getItem('sp:v1:exam')); ex.items.forEach(it=>{const [ch,d,id]=it.k.split('/'); it.a=SP.chapters[ch][d].find(c=>c.id===id).answer;}); localStorage.setItem('sp:v1:exam',JSON.stringify(ex));})()""")
        await pg.reload(); await pg.wait_for_selector('#ex-submit'); await pg.click('#ex-submit'); await pg.wait_for_selector('.exam-results')
        after = await pg.evaluate("Object.keys(JSON.parse(localStorage.getItem('sp:v1:mistakes'))).length")
        print('mistakes before/after mistakes-exam:', before, after, '| history from:', await pg.evaluate("JSON.parse(localStorage.getItem('sp:v1:examHistory'))[0].src"))
        await pg.goto(BASE+'#/exam'); await pg.wait_for_selector('.exam-hist')
        print('history from col:', await pg.locator('.exam-hist tbody td:nth-child(2)').all_inner_texts())
        # turning confidence off
        await pg.uncheck('#ex-conf'); await pg.goto(BASE+'#/c/ch04/cards/cases'); await pg.wait_for_selector('#fc')
        print('conf chips with pref off:', await pg.locator('#fc .conf').count())
        await pg.evaluate("localStorage.setItem('sp:v1:confAsk','true')")
        for theme in ['light','dark']:
            await pg.goto(BASE+'#/c/ch04/cards/cases'); await pg.reload(); await pg.wait_for_selector('#fc .conf')
            await pg.evaluate(f"document.documentElement.setAttribute('data-theme','{theme}')")
            await pg.click('.face--front [data-conf=unsure]')
            await pg.locator('.stage').screenshot(path=f'/tmp/r2_card_{theme}.png')
        await ctx.close()
        # phone
        ctx=await b.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True, device_scale_factor=2); pg=await ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(BASE+'#/'); await pg.evaluate(SEED)
        widths={}
        for h,sel in [('#/topics','.tp-grid'),('#/topics/antidepressants','.topic-page'),('#/topics/antidepressants/cards','#fc'),('#/exam','#ex-form'),('#/mistakes','.page'),('#/c/ch07/cards/cases','#fc .conf')]:
            await pg.goto(BASE+h); await pg.reload(); await pg.wait_for_selector(sel)
            if h=='#/exam': await pg.click('label:has(input[name=by][value=topics])')
            widths[h]=await pg.evaluate('document.documentElement.scrollWidth')
            await pg.screenshot(path='/tmp/r2_phone_'+h.strip('#/').replace('/','_')+'.png', full_page=False)
        print('phone widths:', widths)
        await pg.goto(BASE+'#/exam'); await pg.wait_for_selector('#ex-form'); await pg.click('#ex-start'); await pg.wait_for_selector('#ex-q .conf')
        print('phone exam run width:', await pg.evaluate('document.documentElement.scrollWidth')); await pg.screenshot(path='/tmp/r2_phone_examrun.png')
        await b.close()
    print('ERRORS:', errs)
asyncio.run(main())
