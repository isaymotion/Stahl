import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page()
        pg.on('pageerror', lambda e: print('PAGEERR', e))
        for start in ["#/compare", "#/compare/fluoxetine"]:
            await pg.goto(BASE+"/"+start); await pg.wait_for_timeout(1200)
            await pg.locator('[data-fam="tca"]').click(); await pg.wait_for_timeout(800)
            print(start, '->', await pg.evaluate("location.hash"), await pg.evaluate("document.querySelector('[data-fam][aria-pressed=true]')&&document.querySelector('[data-fam][aria-pressed=true]').dataset.fam"), await pg.evaluate("document.querySelector('[data-slot=\"1\"]').options.length"))
        await b.close()
asyncio.run(main())
