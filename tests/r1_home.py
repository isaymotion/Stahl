import asyncio, json, sys
from playwright.async_api import async_playwright
BASE='http://localhost:8766/'
SEED = """
(() => {
  const P='sp:v1:'; const ids=Object.keys(SP.chapters).sort();
  const srs={}, items=[]; let n=0;
  ids.forEach((id,ci)=>{ const c=SP.chapters[id];
    (c.mech||[]).slice(0, 10+ci*3).forEach((x,i)=>{ srs[id+'/mech/'+x.id]={i: i%2?30:3,e:2.5,r:2,l:0,d:99999}; });
    (c.cases||[]).slice(0,6).forEach((q,i)=>{ items.push({k:id+'/cases/'+q.id, o:[0,1,2,3,4], a: (ci===4 ? (q.answer+1)%5 : (i%3? q.answer : (q.answer+1)%5)), f:false}); });
  });
  localStorage.setItem(P+'srs', JSON.stringify(srs));
  localStorage.setItem(P+'examHistory', JSON.stringify([{id:'t1',at:Date.now(),chapters:ids,timed:false,limit:0,used:100,expired:false,score:0,total:items.length,items}]));
})()
"""
async def main():
    errs=[]
    async with async_playwright() as p:
        b=await p.chromium.launch()
        # 1. empty state, desktop
        ctx=await b.new_context(viewport={'width':1280,'height':900}); pg=await ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(BASE+'#/'); await pg.wait_for_selector('.prog')
        print('empty:', await pg.locator('.prog__empty').count(), 'ios hint on desktop:', await pg.locator('.ios-hint').count())
        await pg.evaluate(SEED); await pg.reload(); await pg.wait_for_selector('.prog__tiles')
        print('tiles:', await pg.locator('.prog__tile').all_inner_texts())
        print('weak:', await pg.locator('.prog__ch.is-weak').get_attribute('aria-label'), '|', await pg.locator('.prog__tip').first.inner_text())
        for theme in ['light','dark']:
            await pg.evaluate(f"document.documentElement.setAttribute('data-theme','{theme}')")
            await pg.locator('.prog').screenshot(path=f'/tmp/r1_prog_desk_{theme}.png')
        # footer link
        await pg.goto(BASE+'#/drugs/clozapine'); await pg.wait_for_selector('.report-link')
        print('drug report href:', (await pg.locator('.lib-side .report-link').get_attribute('href'))[:160])
        await pg.evaluate("document.getElementById('report-foot').addEventListener('click', e=>e.preventDefault())")
        await pg.click('#report-foot'); print('foot href:', (await pg.get_attribute('#report-foot','href'))[:140])
        await pg.goto(BASE+'#/c/ch05/guide'); await pg.wait_for_selector('.g-sec')
        print('guide report links:', await pg.locator('.g-sec .report-row').count(), '/', await pg.locator('.g-sec').count())
        await pg.goto(BASE+'#/c/ch05/cards/mech'); await pg.wait_for_selector('#fc')
        print('card before flip:', await pg.locator('.report-link').count())
        await pg.click('#flip'); print('card after flip:', await pg.locator('.report-row .report-link').count(), (await pg.locator('.report-row .report-link').get_attribute('href'))[:120])
        await pg.goto(BASE+'#/exam/review/t1/all/0'); await pg.wait_for_selector('.review-q')
        print('exam review link:', await pg.locator('.review-q .report-link').count())
        await ctx.close()
        # 2. iPhone
        ua='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
        ctx=await b.new_context(viewport={'width':390,'height':844}, user_agent=ua, is_mobile=True, has_touch=True, device_scale_factor=2); pg=await ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto(BASE+'#/'); await pg.evaluate(SEED); await pg.reload(); await pg.wait_for_selector('.ios-hint')
        await pg.locator('.ios-hint-wrap').screenshot(path='/tmp/r1_ios.png')
        await pg.locator('.prog').screenshot(path='/tmp/r1_prog_phone.png')
        sw=await pg.evaluate('document.documentElement.scrollWidth'); print('phone scrollWidth', sw)
        await pg.click('#ios-hint-ok'); print('hint after ok:', await pg.locator('.ios-hint').count())
        await pg.reload(); await pg.wait_for_selector('.prog'); print('hint after reload:', await pg.locator('.ios-hint').count())
        await pg.evaluate("localStorage.setItem('sp:v1:lang', JSON.stringify('tl'))"); await pg.reload(); await pg.wait_for_selector('.prog')
        print('tl foot:', await pg.inner_text('#report-foot'))
        await b.close()
    print('ERRORS:', errs)
asyncio.run(main())
