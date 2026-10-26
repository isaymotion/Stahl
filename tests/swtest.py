import os
BASE=os.environ.get('STAHL_BASE','http://localhost:8766').rstrip('/')
OUT=os.environ.get('OUT','out'); os.makedirs(OUT, exist_ok=True)
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); ctx = await b.new_context(); pg = await ctx.new_page()
        await pg.goto(BASE+"/sw-blank-test-404"); 
        await pg.evaluate("Promise.all(['ks-companion-2026-10-01','dsm-companion-2026-10-02','stahl-companion-2026-10-14-teach2','other-thing'].map(n=>caches.open(n)))")
        print('before:', sorted(await pg.evaluate("caches.keys()")))
        await pg.goto(BASE+"/"); await pg.wait_for_timeout(1500)
        await pg.evaluate("navigator.serviceWorker.ready.then(()=>1)"); await pg.wait_for_timeout(1500)
        print('after: ', sorted(await pg.evaluate("caches.keys()")))
        await b.close()
asyncio.run(main())
