import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page(accept_downloads=True)
        await pg.goto(BASE+"/#/c/ch06/handout"); await pg.wait_for_timeout(1200)
        await pg.evaluate("document.querySelector('input[name=mode][value=blank]').click()")
        await pg.evaluate("document.querySelector('input[name=paper][value=letter]').click()")
        await pg.wait_for_function("(()=>{var b=document.querySelector('#ho-print');return b&&!b.disabled&&!/Checking/.test(document.querySelector('#ho-fit').textContent)})()")
        print(await pg.locator('#ho-fit').inner_text())
        async with pg.expect_download() as d: await pg.locator('#ho-print').click()
        await (await d.value).save_as(OUT+'/ws.pdf'); await b.close()
asyncio.run(main())
