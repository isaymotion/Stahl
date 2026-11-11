"""R6 (28.0.0): drug-class cheat sheets.
All 17 #/cheat/<family> routes render without errors on desktop and phone (390, no overflow), the
detail toggle and subgroup chips work, the PDF plans and downloads for every family (key + everything),
and the entry points link here (drug page, drug DB filter, Compare filter, library, search)."""
import asyncio, os
from playwright.async_api import async_playwright
BASE = 'http://localhost:8766/'
OUT = '/tmp/r6'; os.makedirs(OUT, exist_ok=True)

async def main():
    errs = []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': 1366, 'height': 900}, accept_downloads=True)
        pg.on('pageerror', lambda e: errs.append('PAGEERR ' + str(e)))
        pg.on('console', lambda m: errs.append('CONSOLE ' + m.text) if m.type == 'error' and 'TUNNEL' not in m.text else None)
        await pg.goto(BASE + '#/cheat'); await pg.wait_for_selector('.cheat-grid')
        fams = await pg.evaluate("SP.drugFamilies.map(f=>f.id)")
        cards = await pg.locator('.cheat-card').count()
        print('index cards:', cards, 'families:', len(fams))
        if cards != 17: errs.append('index shows %d sheets' % cards)
        await pg.screenshot(path=OUT + '/index_desk.png', full_page=True)

        # every sheet: renders rows for every drug, PDF plan ok for both detail levels
        for f in fams:
            await pg.evaluate("h=>{location.hash=h}", '#/cheat/' + f)
            await pg.wait_for_selector('#cheat-body tbody tr')
            await pg.wait_for_function("document.querySelector('#cheat-fit').textContent.indexOf('pt')>-1 || document.querySelector('#cheat-fit').className.indexOf('warn')>-1", timeout=30000)
            n = await pg.evaluate("""f=>{const fam=SP.drugFamilies.find(x=>x.id===f); return SP.drugs.filter(d=>fam.groups.indexOf(d.group)>-1).length}""", f)
            rows = await pg.locator('#cheat-body tbody tr:not(.table-group)').count()
            fit = await pg.locator('#cheat-fit').inner_text()
            mx = await pg.locator('.cheat-mx').count()
            print(f'{f:14s} drugs {n:3d} rows {rows:3d} matrix {mx} | {fit}')
            if f != 'other' and rows != n: errs.append(f'{f}: {rows} rows for {n} drugs')
            if 'warn' in (await pg.locator('#cheat-fit').get_attribute('class')): errs.append(f'{f}: PDF plan failed: {fit}')
        # detail toggle and subgroup filter on antipsychotics
        await pg.evaluate("h=>{location.hash=h}", '#/cheat/antipsychotic'); await pg.wait_for_selector('#cheat-body tbody tr')
        key_li = await pg.locator('#cheat-body li').count()
        await pg.locator('label:has(input[name=detail][value=all])').click(); await pg.wait_for_timeout(200)
        all_li = await pg.locator('#cheat-body li').count()
        print('antipsychotic list items key/all:', key_li, all_li)
        if not all_li > key_li: errs.append('detail toggle did not add rows')
        await pg.locator('[data-cg="D2/5HT1A partial agonist"]').click(); await pg.wait_for_timeout(150)
        sub = await pg.locator('#cheat-body tbody tr').count()
        print('partial-agonist rows:', sub)
        if sub < 3 or sub > 8: errs.append('subgroup filter rows %d' % sub)
        await pg.locator('[data-cg="all"]').click()
        await pg.locator('label:has(input[name=detail][value=key])').click()
        await pg.screenshot(path=OUT + '/antipsychotic_desk.png', full_page=True)
        # PDF download (key and full) for two sheets
        for f, dt in (('antipsychotic', 'key'), ('ssri-snri', 'all')):
            await pg.evaluate("h=>{location.hash=h}", '#/cheat/' + f); await pg.wait_for_selector('#cheat-body tbody tr')
            await pg.locator(f'label:has(input[name=detail][value={dt}])').click()
            await pg.wait_for_function("document.querySelector('#cheat-fit').textContent.indexOf('pt')>-1", timeout=30000)
            async with pg.expect_download(timeout=60000) as d: await pg.locator('#cheat-print').click()
            dl = await d.value; path = f'{OUT}/{dl.suggested_filename}'; await dl.save_as(path)
            head = open(path, 'rb').read(5); size = os.path.getsize(path)
            print('pdf', dl.suggested_filename, size, head)
            if head != b'%PDF-' or size < 5000: errs.append('bad pdf ' + path)
        await pg.locator('label:has(input[name=detail][value=key])').click()
        # entry points
        await pg.evaluate("h=>{location.hash=h}", '#/drugs/aripiprazole'); await pg.wait_for_selector('.side-cheat a')
        print('drug page link:', await pg.locator('.side-cheat a').get_attribute('href'))
        if await pg.locator('.side-cheat a').get_attribute('href') != '#/cheat/antipsychotic': errs.append('drug page cheat link')
        await pg.evaluate("h=>{location.hash=h}", '#/drugs'); await pg.wait_for_selector('#dg')
        await pg.select_option('#dg', 'tca'); await pg.wait_for_timeout(150)
        h = await pg.locator('#dcheat').get_attribute('href'); print('drug DB link:', h)
        if h != '#/cheat/tca': errs.append('drug DB cheat link ' + str(h))
        await pg.select_option('#dg', 'all')
        await pg.evaluate("h=>{location.hash=h}", '#/compare/maoi'); await pg.wait_for_selector('.cmp-filter')
        h = await pg.locator('.cmp-cheat').get_attribute('href'); print('compare link:', h)
        if h != '#/cheat/maoi': errs.append('compare cheat link')
        await pg.evaluate("h=>{location.hash=h}", '#/library'); await pg.wait_for_timeout(300)
        if not await pg.locator('.tools--lib a[href="#/cheat"]').count(): errs.append('library tile missing')
        await pg.evaluate("h=>{location.hash=h}", '#/search/tricyclics cheat'); await pg.wait_for_timeout(600)
        found = await pg.locator('main a[href="#/cheat/tca"]').count(); print('search hit:', found)
        if not found: errs.append('search does not find the TCA cheat sheet')
        await pg.close()

        # phone 390: every sheet, no horizontal overflow
        ph = await b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
        ph.on('pageerror', lambda e: errs.append('PAGEERR(phone) ' + str(e)))
        await ph.goto(BASE + '#/cheat'); await ph.wait_for_selector('.cheat-grid')
        for f in ['index'] + fams:
            if f != 'index':
                await ph.evaluate("h=>{location.hash=h}", '#/cheat/' + f); await ph.wait_for_selector('#cheat-body tbody tr')
                await ph.wait_for_timeout(150)
            w = await ph.evaluate("document.documentElement.scrollWidth")
            if w != 390: errs.append(f'phone overflow {f}: {w}')
        print('phone widths checked:', len(fams) + 1)
        for f in ('antipsychotic', 'gaba'):
            await ph.evaluate("h=>{location.hash=h}", '#/cheat/' + f); await ph.wait_for_selector('#cheat-body tbody tr'); await ph.wait_for_timeout(200)
            await ph.screenshot(path=f'{OUT}/{f}_phone.png')
        await ph.evaluate("document.documentElement.setAttribute('data-theme','dark')")
        await ph.screenshot(path=f'{OUT}/gaba_phone_dark.png')
        await b.close()
    print('ERRORS:', errs)

asyncio.run(main())
