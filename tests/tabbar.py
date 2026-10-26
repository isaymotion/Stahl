import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width':390,'height':700}, is_mobile=True, has_touch=True, device_scale_factor=2)
        pg = await ctx.new_page(); errs=[]
        pg.on('console', lambda m: errs.append(m.text) if m.type=='error' and 'TUNNEL' not in m.text else None)
        pg.on('pageerror', lambda e: errs.append('PAGEERR '+str(e)))
        await pg.goto(BASE+"/#/c/ch02/guide"); await pg.wait_for_timeout(1800)
        hid = "document.body.classList.contains('tabbar-hidden')"
        async def top(): return await pg.evaluate("Math.round(document.querySelector('.tabbar').getBoundingClientRect().top)")
        async def scroll_by(dy):
            await pg.evaluate(f"window.scrollBy(0,{dy})"); await pg.wait_for_timeout(120)
        print('doc height', await pg.evaluate("document.documentElement.scrollHeight"))
        print('top of page: hidden?', await pg.evaluate(hid), 'bar top', await top())
        for i in range(6): await scroll_by(60)
        await pg.wait_for_timeout(350)
        print('after scrolling down 360: hidden?', await pg.evaluate(hid), 'bar top', await top(), 'scrollY', await pg.evaluate("scrollY"))
        await pg.screenshot(path=OUT+'/tb_hidden.png')
        await scroll_by(-8); await pg.wait_for_timeout(350)
        print('scroll up 8: hidden?', await pg.evaluate(hid), 'bar top', await top())
        await scroll_by(-3); await pg.wait_for_timeout(100)
        for i in range(3): await scroll_by(40)
        await pg.wait_for_timeout(350); print('down again: hidden?', await pg.evaluate(hid))
        await scroll_by(-3); await pg.wait_for_timeout(300); print('tiny up 3 (jitter): hidden?', await pg.evaluate(hid))
        await scroll_by(4); await scroll_by(-4); await pg.wait_for_timeout(300); print('jitter +4/-4: hidden?', await pg.evaluate(hid))
        # menu open
        await pg.evaluate("document.getElementById('menu-btn').click()"); await pg.wait_for_timeout(400)
        print('drawer open: hidden?', await pg.evaluate(hid)); await pg.evaluate("document.getElementById('nav-close').click()"); await pg.wait_for_timeout(300)
        # hide again, then focus search
        for i in range(4): await scroll_by(60)
        await pg.wait_for_timeout(300); print('hidden again?', await pg.evaluate(hid))
        await pg.evaluate("document.getElementById('q').focus()"); await pg.wait_for_timeout(300); print('focus input: hidden?', await pg.evaluate(hid))
        await pg.evaluate("document.getElementById('q').blur()")
        # hashchange
        for i in range(4): await scroll_by(60)
        await pg.wait_for_timeout(300); print('hidden before hashchange?', await pg.evaluate(hid))
        await pg.evaluate("location.hash='#/c/ch03/guide'"); await pg.wait_for_timeout(500); print('after hashchange: hidden?', await pg.evaluate(hid))
        # jump to bottom
        await pg.wait_for_timeout(800)
        for i in range(5): await scroll_by(80)
        await pg.wait_for_timeout(300); print('mid-page hidden?', await pg.evaluate(hid))
        await pg.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"); await pg.wait_for_timeout(500)
        print('bottom: hidden?', await pg.evaluate(hid), 'bar top', await top())
        r = await pg.evaluate("(()=>{var f=document.querySelector('.site-foot__inner'); var kids=[...document.querySelectorAll('.site-foot *')].filter(e=>e.getBoundingClientRect().height>0); var lastBottom=Math.max(...kids.map(e=>e.getBoundingClientRect().bottom)); return {lastBottom:Math.round(lastBottom), barTop:Math.round(document.querySelector('.tabbar').getBoundingClientRect().top), vh:innerHeight}})()")
        print('last content bottom vs bar top:', r)
        await pg.screenshot(path=OUT+'/tb_bottom.png')
        # teaching mode
        await pg.goto(BASE+"/#/teach"); await pg.wait_for_timeout(1000)
        print('teach setup bar top', await top())
        await pg.locator('#t-start').click(); await pg.wait_for_timeout(500)
        print('teaching: hidden class?', await pg.evaluate(hid), 'bar display', await pg.evaluate("getComputedStyle(document.querySelector('.tabbar')).display"))
        print('ERRORS:', errs)
        await b.close()
asyncio.run(main())
