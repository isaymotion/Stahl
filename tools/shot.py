import sys, asyncio
from playwright.async_api import async_playwright
# usage: shot.py url out.png width height full(0/1) [theme] [js-before-shot]
async def main():
    url,out,w,h,full=sys.argv[1:6]
    theme=sys.argv[6] if len(sys.argv)>6 else ''
    js=sys.argv[7] if len(sys.argv)>7 else ''
    async with async_playwright() as p:
        b=await p.chromium.launch()
        pg=await b.new_page(viewport={'width':int(w),'height':int(h)})
        errs=[]
        pg.on('pageerror',lambda e: errs.append(str(e)))
        pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
        if theme:
            await pg.add_init_script("try{localStorage.setItem('%s','\"%s\"')}catch(e){}" % (theme.split('=')[0], theme.split('=')[1]))
        await pg.goto(url); await pg.wait_for_timeout(1200)
        if js:
            await pg.evaluate(js); await pg.wait_for_timeout(600)
        await pg.screenshot(path=out, full_page=full=='1')
        if errs: print('ERRORS:', *errs, sep='\n')
        await b.close()
asyncio.run(main())
