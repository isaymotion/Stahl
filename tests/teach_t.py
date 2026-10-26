import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page(viewport={'width':1280,'height':800})
        pg.on('pageerror', lambda e: print('PAGEERR', e))
        await pg.goto(BASE+"/#/teach"); await pg.wait_for_timeout(1200)
        await pg.screenshot(path=OUT+'/t_setup.png', full_page=True)
        print(await pg.locator('#t-count').inner_text())
        # HY lecture for ch 3
        await pg.locator('[data-preset=hy]').click(); await pg.locator('[data-ch=ch03]').click(); await pg.wait_for_timeout(200)
        print(await pg.locator('#t-count').inner_text())
        await pg.locator('#t-start').click(); await pg.wait_for_timeout(700)
        await pg.screenshot(path=OUT+'/t_topic.png')
        await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)   # topic -> next
        await pg.screenshot(path=OUT+'/t_hy0.png')
        await pg.keyboard.press('Space'); await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT+'/t_hy1.png')
        await pg.locator('#t-all').click() if await pg.locator('#t-all').count() else None
        await pg.wait_for_timeout(300); await pg.keyboard.press('y'); await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT+'/t_hy2.png')
        # warm-up with timer
        await pg.goto(BASE+"/#/teach"); await pg.wait_for_timeout(800)
        await pg.locator('[data-preset=warm]').click(); await pg.locator('[data-ch=all]').click(); await pg.wait_for_timeout(200)
        print(await pg.locator('#t-count').inner_text())
        await pg.locator('#t-start').click(); await pg.wait_for_timeout(3000)
        await pg.screenshot(path=OUT+'/t_warm.png')
        # find a card slide
        for i in range(18):
            m = await pg.locator('.teach__meta').inner_text()
            if 'card' in m.lower(): break
            await pg.keyboard.press('ArrowRight'); await pg.wait_for_timeout(150)
        print('meta', m, await pg.locator('#t-timer').inner_text())
        await pg.wait_for_timeout(21000)
        await pg.screenshot(path=OUT+'/t_card.png')
        await pg.set_viewport_size({'width':390,'height':844}); await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT+'/t_card_m.png')
        await pg.goto(BASE+"/#/teach"); await pg.wait_for_timeout(800)
        await pg.screenshot(path=OUT+'/t_setup_m.png', full_page=True)
        await b.close()
asyncio.run(main())
