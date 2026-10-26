import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width':390,'height':700}, is_mobile=True, has_touch=True)
        pg = await ctx.new_page(); pg.set_default_timeout(8000)
        for h in ['#/compare','#/compare/ssri-snri/fluoxetine','#/teach','#/nbn','#/drugs','#/targets','#/nt','#/glossary','#/circuits','#/library','#/review','#/exam','#/mistakes','#/print-all','#/c/ch02/handout','#/']:
            await pg.goto(BASE+"/"+h); await pg.wait_for_timeout(1500)
            print(h, await pg.evaluate('document.documentElement.scrollWidth'), await pg.evaluate("[...document.querySelectorAll('main *, .wrap *')].filter(e=>e.getBoundingClientRect().right>392 && !e.closest('.fam-chips') && !e.closest('.table-wrap')).slice(0,8).map(e=>e.tagName+'.'+e.className+' '+Math.round(e.getBoundingClientRect().width))"))
        await b.close()
asyncio.run(main())
