import asyncio, sys
from playwright.async_api import async_playwright
jobs=[('icon.svg','icon-192.png',192),('icon.svg','icon-512.png',512),('icon.svg','apple-touch-icon.png',180),('icon.svg','favicon-32.png',32),('icon-maskable.svg','icon-maskable-192.png',192),('icon-maskable.svg','icon-maskable-512.png',512)]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for src,out,size in jobs:
            svg=open(src).read()
            pg=await b.new_page(viewport={'width':size,'height':size})
            await pg.set_content(f'<html><body style="margin:0;background:transparent">{svg.replace("<svg ","<svg width=%d height=%d "%(size,size),1)}</body></html>')
            await pg.screenshot(path=out, omit_background=True, clip={'x':0,'y':0,'width':size,'height':size})
            await pg.close()
        await b.close()
asyncio.run(main())
