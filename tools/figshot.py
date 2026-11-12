import sys, asyncio
from playwright.async_api import async_playwright
# usage: figshot.py out.png width theme route [route...] : screenshots the first figure.dia svg area of each route, side by side files out_N.png
async def main():
    out, w, theme = sys.argv[1], int(sys.argv[2]), sys.argv[3]
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': w, 'height': 900}, device_scale_factor=2)
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.add_init_script("try{localStorage.setItem('sp:v1:theme','\"%s\"')}catch(e){}" % theme)
        for i, r in enumerate(sys.argv[4:]):
            sel = 'figure.dia'
            if '@' in r: r, sel = r.split('@')
            await pg.goto('http://localhost:8766/#/library'); await pg.wait_for_timeout(300)
            await pg.goto('http://localhost:8766/' + r); await pg.wait_for_timeout(900)
            el = pg.locator(sel).first
            await el.screenshot(path=out.replace('.png', '_%d.png' % i))
        print('ERRORS:', errs)
        await b.close()
asyncio.run(main())
