"""R12 (34.0.0): diagrams.
Diagrams page (#/diagrams and the four kinds), the controls of each drawing (slider, chips, checkbox, selects,
pathway buttons), guide/drug/target embeds, library tile, search, Teaching-mode diagram questions (hidden until
revealed), on desktop and phone (390, no overflow), light and dark."""
import asyncio, os
from playwright.async_api import async_playwright
BASE = 'http://localhost:8766/'
OUT = '/tmp/r12t'; os.makedirs(OUT, exist_ok=True)
errs = []
def check(ok, msg):
    if not ok: errs.append(msg)

async def run(p, tag, w, h, theme):
    b = await p.chromium.launch()
    pg = await b.new_page(viewport={'width': w, 'height': h})
    pg.on('pageerror', lambda e: errs.append(tag + ' PAGEERR ' + str(e)))
    pg.on('console', lambda m: errs.append(tag + ' CONSOLE ' + m.text) if m.type == 'error' and 'TUNNEL' not in m.text else None)
    await pg.add_init_script("try{localStorage.setItem('sp:v1:theme','\"%s\"')}catch(e){}" % theme)
    async def go(route, sel='figure.dia'):
        await pg.goto(BASE + '#/library'); await pg.wait_for_selector('.tools--lib')
        await pg.evaluate("h=>{location.hash=h}", route); await pg.wait_for_selector(sel)
    async def width(where):
        sw = await pg.evaluate("document.documentElement.scrollWidth")
        if w <= 400: check(sw <= w, f'{tag} overflow {sw} at {where}')
        # nothing inside a figure may stick out of it
        out = await pg.evaluate("""()=>{let n=0;document.querySelectorAll('figure.dia').forEach(f=>{const r=f.getBoundingClientRect();f.querySelectorAll('button,select,input,p,svg').forEach(e=>{const q=e.getBoundingClientRect();if(q.width&&(q.right>r.right+1||q.left<r.left-1))n++})});return n}""")
        check(out == 0, f'{tag} {out} elements outside their figure at {where}')
    read = lambda: pg.inner_text('figure.dia .dia__read')

    # library tile and index
    await pg.goto(BASE + '#/library'); await pg.wait_for_selector('.tools--lib')
    check(await pg.locator('.tool--lib[href="#/diagrams"]').count() == 1 and '4 diagrams' in await pg.inner_text('.tool--lib[href="#/diagrams"]'), tag + ' library tile')
    await go('#/diagrams', '.dia-grid')
    check(await pg.locator('.dia-grid .cheat-card').count() == 4, tag + ' index cards'); await width('index')
    await pg.screenshot(path=f'{OUT}/{tag}_index.png', full_page=True)

    # 1. agonist slider
    await go('#/diagrams/spectrum')
    check('Partial agonist' in await read(), tag + ' spectrum starts as partial agonist')
    await pg.locator('figure.dia input[type=range]').fill('-20'); await pg.wait_for_timeout(100)
    t = await read(); check('Inverse agonist' in t and 'below baseline' in t, tag + ' slider to inverse: ' + t[:60])
    check(await pg.locator('figure.dia .dia__chip[aria-pressed=true]').inner_text() == 'Inverse agonist', tag + ' chip follows the slider')
    await pg.locator('figure.dia input[type=checkbox]').check(); await pg.wait_for_timeout(100)
    check('looks like an antagonist' in await read(), tag + ' no constitutive activity')
    await pg.locator('figure.dia .dia__chip', has_text='Full agonist').click(); await pg.wait_for_timeout(100)
    check('Maximum' in await read(), tag + ' full agonist chip')
    await pg.locator('figure.dia input[type=range]').focus(); await pg.keyboard.press('ArrowLeft'); await pg.wait_for_timeout(100)
    check('Partial agonist' in await read(), tag + ' keyboard moves the slider')
    await width('spectrum'); await pg.locator('figure.dia').screenshot(path=f'{OUT}/{tag}_spectrum.png')
    await pg.locator('.dia-switch a', has_text='D2 partial').click(); await pg.wait_for_selector('figure.dia .dia__chip >> text=Bifeprunox')
    check(await pg.locator('figure.dia .dia__chips .dia__chip').count() == 6, tag + ' six D2 marks')
    check('akathisia' in await read() and await pg.locator('figure.dia .dia__read a.ref-chip').count() == 3, tag + ' D2 preset starts on the three partial agonists')
    await pg.locator('figure.dia .dia__chip', has_text='OPC4392').click(); await pg.wait_for_timeout(100)
    check('positive symptoms worsened' in await read(), tag + ' OPC4392 mark')
    await pg.locator('figure.dia input[type=range]').fill('97'); await pg.locator('figure.dia input[type=range]').dispatch_event('change'); await pg.wait_for_timeout(100)
    check('too hot' in (await read()).lower() and await pg.locator('figure.dia input[type=range]').input_value() == '100', tag + ' preset slider snaps to the nearest mark')
    await width('spectrum d2'); await pg.locator('figure.dia').screenshot(path=f'{OUT}/{tag}_spectrum_d2.png')

    # 2. occupancy meter
    await go('#/diagrams/occupancy')
    keys = await pg.evaluate("Object.keys(SP.diagrams.occupancy)")
    check(await pg.locator('figure.dia .dia__chips--pick .dia__chip').count() == len(keys), tag + ' one chip per occupancy target')
    check('70% occupied' in await read() and '60–80%' in await read(), tag + ' D2 starts in range')
    await pg.locator('figure.dia input[type=range]').fill('45'); await pg.wait_for_timeout(100)
    check('Below 60%' in await read() and await pg.locator('figure.dia .dia-rec.is-on').count() == 45, tag + ' 45 receptors filled')
    for k in keys:
        await go('#/diagrams/occupancy/' + k)
        o = await pg.evaluate("k=>SP.diagrams.occupancy[k]", k)
        check(o['title'] in await pg.inner_text('figure.dia .dia__title'), f'{tag} occupancy {k} title')
        check(await pg.locator('figure.dia .dia-rec.is-on').count() == o['start'], f'{tag} occupancy {k} start')
        await width('occupancy ' + k)
    await go('#/diagrams/occupancy/d2'); await pg.locator('figure.dia').screenshot(path=f'{OUT}/{tag}_occupancy.png')
    await pg.locator('figure.dia .dia__chip', has_text='SERT').click(); await pg.wait_for_timeout(150)
    check('Serotonin transporter' in await pg.inner_text('figure.dia .dia__title') and pg.url.endswith('/occupancy/sert'), tag + ' target chip switches the meter and the address')

    # 3. dopamine pathways
    await go('#/diagrams/pathways')
    check(await pg.locator('figure.dia .dia__chips--pick .dia__chip').count() == 4 and await pg.locator('figure.dia .dia__pathbtn').count() == 5, tag + ' four conditions, five pathways')
    await pg.locator('figure.dia .dia__pathbtn', has_text='Mesolimbic').click(); await pg.wait_for_timeout(100)
    check('positive symptoms' in await read(), tag + ' mesolimbic in schizophrenia')
    await pg.locator('figure.dia .dia__chip', has_text='D2 partial agonist').click(); await pg.wait_for_timeout(100)
    check('positive symptoms improve' in await read() and await pg.locator('figure.dia .dia-path.is-sel').count() == 1, tag + ' condition change keeps the pathway')
    await pg.locator('figure.dia .dia-path[data-dia-set="path:tubero"] .dia-path__hit').click(force=True); await pg.wait_for_timeout(100)
    check('prolactin' in await read(), tag + ' tapping a pathway in the drawing')
    for s in await pg.evaluate("SP.diagrams.pathways.states.map(s=>s.id)"):
        await go('#/diagrams/pathways/' + s); await width('pathways ' + s)
        await pg.locator('figure.dia').screenshot(path=f'{OUT}/{tag}_pathways_{s}.png')

    # 4. receptor ring
    await go('#/diagrams/ring')
    n = await pg.evaluate("SP.dia.ringDrugs().length")
    check(n == 21 and await pg.locator('figure.dia select[data-dia-sel=drug] option').count() == n, tag + f' ring drugs {n}')
    check(await pg.locator('figure.dia svg').count() == 1 and 'Clozapine' in await pg.inner_text('figure.dia .dia__ringcap'), tag + ' ring starts on clozapine')
    await pg.select_option('figure.dia select[data-dia-sel=vs]', 'haloperidol'); await pg.wait_for_timeout(150)
    check(await pg.locator('figure.dia svg').count() == 2 and pg.url.endswith('/ring/clozapine,haloperidol'), tag + ' compare adds a second ring: ' + pg.url)
    on = await pg.evaluate("[...document.querySelectorAll('figure.dia svg')].map(s=>s.querySelectorAll('.dia-cell.is-on').length)")
    want = await pg.evaluate("['clozapine','haloperidol'].map(id=>SP.drugs.find(d=>d.id===id).targets.filter(t=>t.s).reduce((a,t)=>a+t.s,0))")
    check(on == want, tag + f' ring cells {on} match strengths {want}')
    await width('ring two'); await pg.locator('figure.dia').screenshot(path=f'{OUT}/{tag}_ring.png')
    for d in await pg.evaluate("SP.dia.ringDrugs().map(d=>d.id)"):
        await pg.select_option('figure.dia select[data-dia-sel=drug]', d); await pg.wait_for_timeout(60)
        check(await pg.locator('figure.dia .dia__ring').count() >= 1, tag + ' ring ' + d)
    await width('ring all')

    # embeds: guide, drug page, target page
    for route, n in [('#/c/ch02/guide/s2-spectrum', 1), ('#/c/ch04/guide/s4-da-pathways', 1), ('#/c/ch05/guide/s5-binding', 6)]:
        await go(route); c = await pg.locator('.g-dia figure.dia').count()
        check(c == n, f'{tag} {route}: {c} diagrams'); await width(route)
    await pg.locator('#s5-binding .g-dia').first.scroll_into_view_if_needed(); await pg.screenshot(path=f'{OUT}/{tag}_guide.png')
    check(await pg.locator('.g-dia .dia__open').count() == 6, tag + ' guide diagrams link to the Diagrams page')
    await go('#/drugs/clozapine'); check(await pg.locator('.lib-sec--dia figure.dia--ring').count() == 1, tag + ' ring on a drug page'); await width('drug page')
    await go('#/drugs/venlafaxine', '.lib-sec'); check(await pg.locator('figure.dia').count() == 0, tag + ' no ring for a drug with two strengths')
    await go('#/targets/d2'); check(await pg.locator('.lib-sec--dia figure.dia').count() == 2, tag + ' D2 target page has meter and slider'); await width('target page')
    await go('#/targets/sert'); check(await pg.locator('.lib-sec--dia figure.dia--occupancy').count() == 1, tag + ' SERT target page has a meter')
    await go('#/targets/m1', '.lib-sec'); check(await pg.locator('figure.dia').count() == 0, tag + ' no diagram on other targets')

    # search
    await go('#/search/occupancy', '.result, .results, main')
    await pg.wait_for_timeout(400)
    check(await pg.locator('a[href="#/diagrams/occupancy"]').count() >= 1, tag + ' search finds the occupancy meter')

    # teaching mode: diagram questions hide the answer until revealed
    await pg.goto(BASE + '#/teach'); await pg.wait_for_selector('#t-start')
    await pg.click('[data-preset="dia"]'); await pg.wait_for_timeout(150)
    nq = await pg.evaluate("SP.diagrams.questions.length")
    check(f'{nq} diagram question' in await pg.inner_text('#t-count'), tag + ' teach preset: ' + await pg.inner_text('#t-count'))
    await width('teach setup')
    await pg.click('#t-start'); await pg.wait_for_selector('.teach__dia figure.dia')
    for i in range(nq):
        await pg.wait_for_selector('.teach__dia figure.dia.is-blind')
        check(await pg.locator('.teach__dia .dia__read strong, .teach__dia .dia__big, .teach__dia .dia__lv, .teach__dia .dia-badge, .teach__dia .dia-rec.is-on, .teach__dia .dia-fill').count() == 0, f'{tag} slide {i + 1} shows its answer before reveal')
        check(await pg.locator('.teach__dia input[type=range]:not([disabled])').count() == 0, f'{tag} slide {i + 1} slider is live before reveal')
        if i in (0, 4, 8, 12): await width(f'teach slide {i + 1}'); await pg.screenshot(path=f'{OUT}/{tag}_teach_{i + 1}_q.png')
        await pg.keyboard.press(' '); await pg.wait_for_selector('.teach__dia figure.dia:not(.is-blind)')
        check(await pg.locator('.teach__why').count() == 1, f'{tag} slide {i + 1} reveal shows the reasoning')
        if i in (0, 4, 8, 12): await width(f'teach slide {i + 1} revealed'); await pg.screenshot(path=f'{OUT}/{tag}_teach_{i + 1}_a.png')
        await pg.keyboard.press('ArrowRight'); await pg.wait_for_timeout(120)
    await b.close()

async def main():
    async with async_playwright() as p:
        await run(p, 'desk', 1366, 900, 'light')
        await run(p, 'phone', 390, 800, 'dark')
    print('ERRORS:', errs)
asyncio.run(main())
