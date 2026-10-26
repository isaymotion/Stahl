import sys, asyncio
from playwright.async_api import async_playwright
url, out = sys.argv[1], sys.argv[2]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(accept_downloads=True, viewport={'width':1000,'height':900})
        pg.on('console', lambda m: print('console:', m.text) if m.type=='error' and 'TUNNEL' not in m.text else None)
        pg.on('pageerror', lambda e: print('PAGEERR', e))
        await pg.goto(url); await pg.wait_for_timeout(1500)
        btn = pg.locator('#ho-print, #pa-print')
        await pg.wait_for_function("(()=>{var b=document.querySelector('#ho-print,#pa-print');return b&&!b.disabled})()", timeout=20000)
        print('msg:', await pg.locator('#ho-fit, #pa-msg').inner_text())
        async with pg.expect_download(timeout=60000) as d:
            await btn.click()
        dl = await d.value
        await dl.save_as(out); print('saved', dl.suggested_filename)
        await pg.wait_for_timeout(500)
        print('msg after:', await pg.locator('#ho-fit, #pa-msg').inner_text())
        await b.close()
asyncio.run(main())
