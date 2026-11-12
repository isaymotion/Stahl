/* Diagrams (34.0.0): four original interactive drawings, built from data/diagrams.js and the drug library.
 *   spectrum   agonist slider (Ch 2), with a D2 preset (Ch 5)
 *   occupancy  occupancy meter, one per target the book gives a figure for
 *   pathways   the five dopamine pathways under four conditions
 *   ring       receptor ring drawn from a drug's binding strengths (`targets[].s`)
 * SP.dia.html(spec) returns a <figure class="dia" data-dia="{json}">. All state lives in that attribute and
 * the handlers below are delegated from document, so a figure works wherever its HTML is inserted.
 * A click redraws the whole figure; dragging a slider redraws only `.dia__out` so the slider keeps focus.
 * `blind: true` hides whatever would answer a teaching-mode question until it is revealed.
 * No drawing is copied from the book: positions are schematic and say so. */
(function () {
  'use strict';
  var SP = window.SP = window.SP || {};
  var dia = SP.dia = {};

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(s) { return dia.fmt ? dia.fmt(s) : esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function plain(s) { return String(s == null ? '' : s).replace(/\[\[\w+:[^|\]]+\|([^\]]+)\]\]/g, '$1').replace(/\*\*/g, ''); }
  function data() { return SP.diagrams || {}; }
  function byId(list, id) { list = list || []; for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function tname(id) { var t = byId(SP.targets, id); return t ? (t.short || t.name) : id; }
  function r1(n) { return Math.round(n * 10) / 10; }
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function chip(set, label, on, extra) { return '<button type="button" class="filter dia__chip" data-dia-set="' + esc(set) + '" aria-pressed="' + (on ? 'true' : 'false') + '"' + (extra || '') + '>' + label + '</button>'; }
  function chNum(ch) { return parseInt(String(ch || '').replace(/\D/g, ''), 10) || ''; }
  function srcLine(spec, src, extra) {
    var bits = [];
    if (src && src.pages) bits.push('Book p' + (/[–,-]/.test(src.pages) ? 'p' : '') + '. ' + esc(src.pages));
    if (src && src.ch && src.sec && !spec.blind) bits.push('<a href="#/c/' + src.ch + '/guide/' + src.sec + '">Chapter ' + chNum(src.ch) + ' study guide</a>');
    if (extra) bits.push(extra);
    if (!spec.full && !spec.blind) bits.push('<a class="dia__open" href="' + dia.href(spec) + '">Open in Diagrams</a>');
    return bits.length ? '<p class="dia__src">' + bits.join(' · ') + '</p>' : '';
  }

  /* ================= 1. agonist slider ================= */
  var BASE = 0.22;   // illustrative height of constitutive (baseline) activity
  function zoneOf(v) { return v <= -0.025 ? 'inverse' : v < 0.025 ? 'antagonist' : v >= 0.975 ? 'full' : 'partial'; }
  function signal(v, base) { return v >= 0 ? base + v * (1 - base) : base * (1 + v); }
  function presetOf(spec) { var s = data().spectrum; return spec.preset && s && s.presets ? s.presets[spec.preset] : null; }
  function nearestMark(marks, v) { var best = 0; marks.forEach(function (m, i) { if (Math.abs(m.v - v) < Math.abs(marks[best].v - v)) best = i; }); return best; }
  function moveWord(from, to) { return Math.abs(to - from) < 0.012 ? 'no change' : to > from ? 'rises' : 'falls'; }

  function spectrumSVG(spec) {
    var base = spec.flat ? 0 : BASE, L = signal(spec.v, base), zone = zoneOf(spec.v);
    var x0 = 24, x1 = 336, X = function (l) { return r1(x0 + l * (x1 - x0)); };
    function row(y, label, start) {
      var s = '<text class="dia-t dia-t--row" x="' + x0 + '" y="' + (y - 14) + '">' + label + (spec.blind ? '' : ': <tspan class="dia-t--res">' + moveWord(start, L) + '</tspan>') + '</text>' +
        '<rect class="dia-track" x="' + x0 + '" y="' + (y - 8) + '" width="' + (x1 - x0) + '" height="16" rx="8"/>';
      if (spec.blind) return s + '<text class="dia-t dia-t--q" x="180" y="' + (y + 4.5) + '" text-anchor="middle">?</text>';
      if (L > 0.005) s += '<rect class="dia-fill dia-fill--' + zone + '" x="' + x0 + '" y="' + (y - 8) + '" width="' + r1(Math.max(16, X(L) - x0)) + '" height="16" rx="8"/>';
      var a = X(start), b = X(L);
      if (Math.abs(b - a) > 10) s += '<line class="dia-arrow" x1="' + a + '" y1="' + (y + 16) + '" x2="' + (b + (b > a ? -6 : 6)) + '" y2="' + (y + 16) + '"/><path class="dia-head" d="M' + b + ' ' + (y + 16) + 'l' + (b > a ? -7 : 7) + ' -4v8z"/>';
      s += '<circle class="dia-start" cx="' + a + '" cy="' + y + '" r="5"/><circle class="dia-end" cx="' + b + '" cy="' + y + '" r="6.5"/>';
      return s;
    }
    var bx = X(base);
    return '<svg class="dia__svg" viewBox="0 0 360 168" role="img" aria-label="' + esc(spec.blind ? 'Signal transduction, hidden until the answer is shown' : 'Signal transduction: ' + zoneLabel(zone) + '. Added alone, signaling ' + moveWord(base, L) + '; added to the natural full agonist, signaling ' + moveWord(1, L) + '.') + '">' +
      row(36, 'Added alone', base) + row(98, 'Added to the natural full agonist', 1) +
      (base > 0 ? '<line class="dia-base" x1="' + bx + '" y1="20" x2="' + bx + '" y2="124"/>' : '') +
      '<text class="dia-t dia-t--axis" x="' + x0 + '" y="146">no signal</text>' +
      (base > 0 ? '<text class="dia-t dia-t--axis" x="' + bx + '" y="160" text-anchor="middle">baseline</text>' : '') +
      '<text class="dia-t dia-t--axis" x="' + x1 + '" y="146" text-anchor="end">maximum</text>' +
      (spec.blind ? '' : '<circle class="dia-start" cx="' + (x0 + 110) + '" cy="142" r="4"/><text class="dia-t dia-t--axis" x="' + (x0 + 118) + '" y="146">start</text><circle class="dia-end" cx="' + (x0 + 160) + '" cy="142" r="5"/><text class="dia-t dia-t--axis" x="' + (x0 + 169) + '" y="146">result</text>') +
      '</svg>';
  }
  function zoneLabel(id) { var z = byId((data().spectrum || {}).zones, id); return z ? z.label : id; }
  function spectrumOut(spec) {
    var S = data().spectrum, P = presetOf(spec), zone = zoneOf(spec.v), z = byId(S.zones, zone), read = '';
    if (spec.blind) read = '<p class="dia__hint">The signal is hidden until the answer is revealed.</p>';
    else if (P) {
      var i = nearestMark(P.marks, spec.v), m = P.marks[i];
      read = '<p class="dia__big">' + esc(m.label) + '</p><p>' + fmt(m.text) + '</p>' +
        (m.drugs ? '<p class="dia__links">' + m.drugs.map(function (id) { var d = byId(SP.drugs, id); return d ? '<a class="ref-chip" href="#/drugs/' + id + '">' + esc(d.name) + '</a>' : ''; }).join('') + '</p>' : '');
    } else {
      read = '<p class="dia__big">' + esc(z.label) + '</p>' +
        '<p><b>Alone:</b> ' + fmt(spec.flat && z.flat ? z.flat : z.alone) + '</p><p><b>With the natural agonist:</b> ' + fmt(z.withAg) + '</p>';
    }
    return spectrumSVG(spec) + '<div class="dia__read" aria-live="polite">' + read + '</div>';
  }
  function spectrumHTML(spec) {
    var S = data().spectrum, P = presetOf(spec), dis = spec.blind ? ' disabled' : '';
    var ctl;
    if (P) {
      var cur = nearestMark(P.marks, spec.v);
      ctl = '<label class="dia__lab" for="' + spec.uid + '-r">Slide from pure antagonist to full agonist</label>' +
        '<div class="dia__slide"><input type="range" id="' + spec.uid + '-r" min="0" max="100" step="1" value="' + Math.round(spec.v * 100) + '" data-dia-in="v100" data-dia-snap="1" aria-valuetext="' + esc(spec.blind ? 'position marked' : P.marks[cur].label) + '"' + dis + '>' +
        '<div class="dia__ticks" aria-hidden="true">' + P.marks.map(function (m) { return '<i style="--f:' + m.v + '"></i>'; }).join('') + '</div>' +
        '<div class="dia__ends" aria-hidden="true"><span>Antagonist</span><span>Full agonist</span></div></div>' +
        (spec.blind ? '' : '<div class="dia__chips">' + P.marks.map(function (m, i) { return chip('v:' + m.v, esc(m.label), i === cur); }).join('') + '</div>');
    } else {
      var zone = zoneOf(spec.v), jump = { inverse: -1, antagonist: 0, partial: 0.5, full: 1 };
      ctl = '<label class="dia__lab" for="' + spec.uid + '-r">Slide from inverse agonist to full agonist</label>' +
        '<div class="dia__slide"><input type="range" id="' + spec.uid + '-r" min="-20" max="20" step="1" value="' + Math.round(spec.v * 20) + '" data-dia-in="v20" aria-valuetext="' + esc(spec.blind ? 'position marked' : zoneLabel(zone)) + '"' + dis + '>' +
        '<div class="dia__ticks" aria-hidden="true"><i style="--f:0"></i><i style="--f:.5"></i><i style="--f:1"></i></div>' +
        '<div class="dia__ends dia__ends--3" aria-hidden="true"><span>Inverse agonist</span><span>Antagonist</span><span>Full agonist</span></div></div>' +
        (spec.blind ? '' : '<div class="dia__chips">' + S.zones.map(function (z) { return chip('v:' + jump[z.id], esc(z.label), z.id === zone); }).join('') + '</div>') +
        (spec.blind && !spec.flat ? '' : '<label class="dia__check"><input type="checkbox" data-dia-in="flat"' + (spec.flat ? ' checked' : '') + dis + '> No constitutive activity (baseline at zero)</label>');
    }
    var src = P || S;
    return '<figcaption class="dia__title">' + esc(spec.title || src.title) + '</figcaption>' +
      '<div class="dia__ctl">' + ctl + '</div><div class="dia__out">' + spectrumOut(spec) + '</div>' +
      '<p class="dia__note">' + esc(src.note) + '</p>' + srcLine(spec, src);
  }

  /* ================= 2. occupancy meter ================= */
  function occOf(spec) { return (data().occupancy || {})[spec.target]; }
  function bandAt(o, v) { for (var i = 0; i < o.bands.length; i++) { var b = o.bands[i]; if (v >= b.from && (v < b.to || (i === o.bands.length - 1 && v <= b.to))) return i; } return o.bands.length - 1; }
  function occSVG(spec) {
    var o = occOf(spec), v = Math.round(spec.v), n = spec.blind ? 0 : v, s = '', c, r;
    for (c = 0; c < 20; c++) for (r = 0; r < 5; r++) {
      var idx = c * 5 + (4 - r);             // fill each column from the bottom, columns left to right
      s += '<circle class="dia-rec' + (idx < n ? ' is-on' : '') + '" cx="' + (28 + c * 16) + '" cy="' + (14 + r * 16) + '" r="5.5"/>';
    }
    var X = function (p) { return r1(20 + p * 3.2); };
    if (spec.blind) return '<svg class="dia__svg" viewBox="0 0 360 132" role="img" aria-label="One hundred receptors; the occupancy is hidden until the answer is shown">' + s +
      '<rect class="dia-track" x="20" y="96" width="320" height="12" rx="6"/><text class="dia-t dia-t--q" x="180" y="126" text-anchor="middle">?</text></svg>';
    var cur = bandAt(o, v);
    o.bands.forEach(function (b, i) { s += '<rect class="dia-band' + (i === cur ? ' is-on' : '') + (i % 2 ? ' is-alt' : '') + '" x="' + X(b.from) + '" y="96" width="' + r1((b.to - b.from) * 3.2) + '" height="12"/>'; });
    s += '<rect class="dia-track dia-track--line" x="20" y="96" width="320" height="12" rx="2"/>';
    var near0 = false, near100 = false;
    (o.marks || []).forEach(function (m) {
      if (m.at < 13) near0 = true; if (m.at > 87) near100 = true;
      s += '<line class="dia-mark" x1="' + X(m.at) + '" y1="92" x2="' + X(m.at) + '" y2="112"/><text class="dia-t dia-t--axis" x="' + X(m.at) + '" y="126" text-anchor="middle">' + esc(m.label) + '</text>';
    });
    if (!near0) s += '<text class="dia-t dia-t--axis" x="20" y="126">0%</text>';
    if (!near100) s += '<text class="dia-t dia-t--axis" x="340" y="126" text-anchor="end">100%</text>';
    s += '<path class="dia-ptr" d="M' + X(v) + ' 95l-6 -8h12z"/>';
    return '<svg class="dia__svg" viewBox="0 0 360 132" role="img" aria-label="' + esc(v + ' of 100 ' + (o.what || 'receptors') + ' ' + (o.unit || 'occupied') + ': ' + o.bands[cur].label) + '">' + s + '</svg>';
  }
  function occOut(spec) {
    var o = occOf(spec), v = Math.round(spec.v);
    if (spec.blind) return occSVG(spec) + '<div class="dia__read"><p class="dia__hint">The meter is hidden until the answer is revealed.</p></div>';
    var b = o.bands[bandAt(o, v)];
    return occSVG(spec) + '<div class="dia__read" aria-live="polite"><p class="dia__big">' + v + '% ' + esc(o.unit || 'occupied') + ' <span class="dia__band">' + esc(b.label) + '</span></p><p>' + fmt(b.text) + '</p></div>';
  }
  function occHTML(spec) {
    var o = occOf(spec), all = data().occupancy || {};
    var pick = spec.pick && !spec.blind ? '<div class="dia__chips dia__chips--pick" role="group" aria-label="Target">' + Object.keys(all).map(function (k) { return chip('target:' + k, esc(all[k].chip || tname(k)), k === spec.target); }).join('') + '</div>' : '';
    return '<figcaption class="dia__title">' + esc(spec.title || o.title) + '</figcaption>' + pick +
      '<div class="dia__ctl"><label class="dia__lab" for="' + spec.uid + '-r">' + esc(o.slide || 'Slide to change how many are ' + (o.unit || 'occupied')) + '</label>' +
      '<div class="dia__slide dia__slide--occ"><input type="range" id="' + spec.uid + '-r" min="0" max="100" step="1" value="' + Math.round(spec.v) + '" data-dia-in="v" aria-valuetext="' + (spec.blind ? 'hidden' : Math.round(spec.v) + ' percent') + '"' + (spec.blind ? ' disabled' : '') + '></div></div>' +
      '<div class="dia__out">' + occOut(spec) + '</div>' +
      (o.notes && !spec.blind ? '<ul class="dia__notes">' + o.notes.map(function (n) { return '<li>' + fmt(n) + '</li>'; }).join('') + '</ul>' : '') +
      '<p class="dia__note">' + esc(o.note || 'The figures are the book’s thresholds. The book gives no occupancy for individual drugs or doses beyond those noted here, so this is not a dosing tool.') + '</p>' +
      srcLine(spec, o);
  }

  /* ================= 3. dopamine pathways ================= */
  var NODES = {
    pfc: [66, 100, 'Prefrontal cortex', -2, -13, 'start'], nac: [122, 128, 'Nucleus accumbens', -9, 3, 'end'], str: [156, 104, 'Striatum', -9, -1, 'end'],
    thal: [216, 98, 'Thalamus', 10, -2, 'start'], hyp: [172, 166, 'Hypothalamus', -9, 4, 'end'], pit: [160, 200, 'Pituitary', -11, 4, 'end'],
    vta: [206, 172, 'VTA', -6, 15, 'end'], sn: [224, 190, 'Substantia nigra', 10, 4, 'start'], bs: [220, 228, 'Brainstem sites', 10, 4, 'start']
  };
  var PATHS = {
    mesolimbic: { a: 'vta', b: 'nac', d: 'M206 172 Q165 125 122 128' },
    mesocortical: { a: 'vta', b: 'pfc', d: 'M206 172 C206 70 110 36 66 100' },
    nigrostriatal: { a: 'sn', b: 'str', d: 'M224 190 C244 150 200 112 156 104' },
    tubero: { a: 'hyp', b: 'pit', d: 'M172 166 L160 200' },
    thalamic: { a: 'bs', b: 'thal', d: 'M220 228 C270 196 258 124 216 98' }
  };
  var LEVELS = {
    high: { sym: '▲', w: 5.5 }, low: { sym: '▼', w: 2, dash: '6 4' }, normal: { sym: '●', w: 3 }, blocked: { sym: '✕', w: 3 },
    eased: { sym: '◐', w: 3, dash: '10 3' }, tuned: { sym: '≈', w: 3 }, unknown: { sym: '?', w: 2, dash: '2 5' }
  };
  function stateOf(spec) { return byId((data().pathways || {}).states, spec.state); }
  function pathSVG(spec) {
    var P = data().pathways, st = stateOf(spec), s = '';
    s += '<path class="dia-brain" d="M36 124C26 66 96 22 186 24C270 26 332 66 332 122C332 156 302 176 262 178C244 179 232 176 222 170L190 164C170 160 152 172 124 172C82 172 44 162 36 124Z"/>' +
      '<ellipse class="dia-brain" cx="276" cy="196" rx="40" ry="22"/>' +
      '<path class="dia-brain dia-brain--stem" d="M190 162L224 168C230 196 232 222 230 246L204 246C206 220 200 190 190 162Z"/>';
    P.paths.forEach(function (p) {
      var g = PATHS[p.id], lv = st.p[p.id].lv, L = LEVELS[lv], sel = spec.path === p.id, dim = spec.path && !sel;
      var cls = spec.blind ? 'neutral' : lv, w = spec.blind ? 3 : L.w, dash = spec.blind ? '' : (L.dash || '');
      s += '<g class="dia-path dia-path--' + cls + (sel ? ' is-sel' : '') + (dim ? ' is-dim' : '') + '" data-dia-set="path:' + p.id + '">' +
        '<path class="dia-path__hit" d="' + g.d + '"/><path class="dia-path__line" d="' + g.d + '" stroke-width="' + (w + (sel ? 1.5 : 0)) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>' +
        '<title>' + esc(p.label + (spec.blind ? '' : ': ' + P.levels[lv])) + '</title></g>';
    });
    Object.keys(NODES).forEach(function (k) {
      var n = NODES[k], used = P.paths.filter(function (p) { return PATHS[p.id].a === k || PATHS[p.id].b === k; });
      var on = !spec.path || used.some(function (p) { return p.id === spec.path; });
      s += '<g class="dia-node' + (on ? '' : ' is-dim') + '"><circle cx="' + n[0] + '" cy="' + n[1] + '" r="5"/><text class="dia-t dia-t--node" x="' + (n[0] + n[3]) + '" y="' + (n[1] + n[4]) + '" text-anchor="' + n[5] + '">' + esc(n[2]) + '</text></g>';
    });
    if (!spec.blind) P.paths.forEach(function (p) {
      var b = NODES[PATHS[p.id].b], lv = st.p[p.id].lv, dim = spec.path && spec.path !== p.id;
      s += '<g class="dia-badge dia-badge--' + lv + (dim ? ' is-dim' : '') + '" aria-hidden="true"><circle cx="' + b[0] + '" cy="' + b[1] + '" r="8.5"/><text x="' + b[0] + '" y="' + (b[1] + 3.6) + '" text-anchor="middle">' + LEVELS[lv].sym + '</text></g>';
    });
    return '<svg class="dia__svg dia__svg--brain" viewBox="0 0 360 256" role="img" aria-label="' + esc('Schematic side view of the brain with the five dopamine pathways' + (spec.blind ? '' : ': ' + st.label)) + '">' + s + '</svg>';
  }
  function pathOut(spec) {
    var P = data().pathways, st = stateOf(spec);
    var list = '<ul class="dia__paths">' + P.paths.map(function (p) {
      var lv = st.p[p.id].lv, sel = spec.path === p.id;
      return '<li><button type="button" class="dia__pathbtn' + (sel ? ' is-sel' : '') + '" data-dia-set="path:' + p.id + '" aria-pressed="' + (sel ? 'true' : 'false') + '">' +
        (spec.blind ? '' : '<span class="dia__lv dia__lv--' + lv + '"><i aria-hidden="true">' + LEVELS[lv].sym + '</i>' + esc(P.levels[lv]) + '</span>') +
        '<b>' + esc(p.label) + '</b><span class="dia__route">' + esc(p.from) + ' → ' + esc(p.to) + '</span></button></li>';
    }).join('') + '</ul>';
    var read = '';
    if (spec.path) {
      var p = byId(P.paths, spec.path), e = st.p[spec.path];
      read = spec.blind ? '<p class="dia__hint">' + esc(p.label) + ' pathway: what it does and its state here are hidden until the answer is revealed.</p>' :
        '<p class="dia__big">' + esc(p.label) + ' pathway</p><p><b>Normally:</b> ' + fmt(p.role) + '</p>' +
          '<p><b>' + esc(st.label) + ':</b> ' + fmt(e.text) + '</p>' +
          (e.cx && e.cx.length ? '<p class="dia__links">' + e.cx.map(function (id) { var c = byId(SP.circuits, id); return c ? '<a class="ref-chip" href="#/circuits/' + id + '">' + esc(c.symptom) + '</a>' : ''; }).join('') + '</p>' : '');
    } else read = '<p class="dia__hint">Tap a pathway, in the drawing or in the list, to see what it does and what happens to it here.</p>';
    return pathSVG(spec) + list + '<div class="dia__read" aria-live="polite">' + read + '</div>';
  }
  function pathHTML(spec) {
    var P = data().pathways, st = stateOf(spec);
    return '<figcaption class="dia__title">' + esc(spec.title || P.title) + '</figcaption>' +
      (spec.blind ? '' : '<div class="dia__chips dia__chips--pick" role="group" aria-label="Condition">' + P.states.map(function (x) { return chip('state:' + x.id, esc(x.label), x.id === spec.state); }).join('') + '</div>') +
      '<div class="dia__out">' + pathOut(spec) + '</div>' +
      '<p class="dia__note">' + esc(P.note || 'An original schematic: positions are approximate and the brain is not drawn to scale.') + '</p>' +
      srcLine(spec, spec.blind ? P : st);
  }

  /* ================= 4. receptor ring ================= */
  var ACT = [[/partial agonist/, 'partial'], [/antagonist|inverse|inhibitor|blocker|negative/, 'block'], [/agonist|releaser/, 'stim']];
  function actCss(a) { a = String(a || '').toLowerCase(); for (var i = 0; i < ACT.length; i++) if (ACT[i][0].test(a)) return ACT[i][1]; return 'mod'; }
  function rated(d) { return (d.targets || []).filter(function (x) { return x.s != null; }); }
  dia.ringDrugs = function () {
    var min = (data().ring || {}).min || 7;
    return (SP.drugs || []).filter(function (d) { return rated(d).length >= min; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
  };
  dia.hasRing = function (id) { return dia.ringDrugs().some(function (d) { return d.id === id; }); };
  function arc(cx, cy, ra, rb, a0, a1) {
    function pt(r, a) { return r1(cx + r * Math.cos(a)) + ' ' + r1(cy + r * Math.sin(a)); }
    return 'M' + pt(ra, a0) + 'A' + ra + ' ' + ra + ' 0 0 1 ' + pt(ra, a1) + 'L' + pt(rb, a1) + 'A' + rb + ' ' + rb + ' 0 0 0 ' + pt(rb, a0) + 'Z';
  }
  function ringSVG(d) {
    var R = data().ring, gap = 0.7, slots = 0, s = '', cx = 180, cy = 180, r0 = 40, dr = 20;
    R.groups.forEach(function (g) { slots += g.targets.length + gap; });
    var step = Math.PI * 2 / slots, pos = gap / 2, best = [];
    var mine = {}; (d.targets || []).forEach(function (x) { if (!mine[x.t] || (x.s || 0) > (mine[x.t].s || 0)) mine[x.t] = x; });
    var top = 0; Object.keys(mine).forEach(function (k) { if ((mine[k].s || 0) > top) top = mine[k].s; });   // strongest = this drug's own highest strength
    R.groups.forEach(function (g) {
      var ga0 = -Math.PI / 2 + pos * step, ga1 = -Math.PI / 2 + (pos + g.targets.length) * step;
      s += '<path class="dia-garc" d="' + arc(cx, cy, 34, 31, ga0 + 0.02, ga1 - 0.02) + '"><title>' + esc(g.label) + '</title></path>';
      g.targets.forEach(function (t) {
        var a0 = -Math.PI / 2 + pos * step + 0.012, a1 = -Math.PI / 2 + (pos + 1) * step - 0.012, x = mine[t], st = x && x.s != null ? clamp(x.s, 1, 4) : 0, css = x ? actCss(x.action) : '';
        var tip = tname(t) + ': ' + (x ? String(x.action || 'acts here') + (st ? ', strength ' + st + ' of 4' : ', strength not given') : 'not listed for this drug');
        s += '<g class="dia-sec"><title>' + esc(tip) + '</title>';
        for (var k = 1; k <= 4; k++) s += '<path class="dia-cell' + (k <= st ? ' is-on dia-cell--' + css : '') + '" d="' + arc(cx, cy, r0 + k * dr - 1, r0 + (k - 1) * dr, a0, a1) + '"/>';
        if (x && !st) s += '<circle class="dia-cell--nos" cx="' + r1(cx + (r0 + 10) * Math.cos((a0 + a1) / 2)) + '" cy="' + r1(cy + (r0 + 10) * Math.sin((a0 + a1) / 2)) + '" r="2.6"/>';
        var am = (a0 + a1) / 2, deg = am * 180 / Math.PI, flip = Math.cos(am) < 0, lx = cx + 125 * Math.cos(am), ly = cy + 125 * Math.sin(am);
        s += '<text class="dia-t dia-t--ring' + (st ? '' : ' is-off') + '" x="' + r1(lx) + '" y="' + r1(ly) + '" text-anchor="' + (flip ? 'end' : 'start') + '" dominant-baseline="central" transform="rotate(' + r1(flip ? deg + 180 : deg) + ' ' + r1(lx) + ' ' + r1(ly) + ')">' + esc(tname(t)) + '</text></g>';
        if (st && st === top) best.push(tname(t));
        pos += 1;
      });
      pos += gap;
    });
    var words = d.name.split(' ');
    s += '<text class="dia-t dia-t--hub" x="' + cx + '" y="' + (cy + (words.length > 1 ? -2 : 4)) + '" text-anchor="middle"' + (d.name.length > 11 ? ' textLength="62" lengthAdjust="spacingAndGlyphs"' : '') + '>' + esc(words[0]) + '</text>' +
      (words.length > 1 ? '<text class="dia-t dia-t--hub" x="' + cx + '" y="' + (cy + 11) + '" text-anchor="middle">' + esc(words.slice(1).join(' ')) + '</text>' : '');
    return { svg: '<svg class="dia__svg dia__svg--ring" viewBox="0 0 360 360" role="img" aria-label="' + esc('Receptor ring for ' + d.name + (best.length ? '. Strongest binding: ' + best.join(', ') : '')) + '">' + s + '</svg>', best: best };
  }
  function ringOne(d) {
    var r = ringSVG(d);
    return '<div class="dia__ring">' + r.svg + '<p class="dia__ringcap"><a href="#/drugs/' + d.id + '"><b>' + esc(d.name) + '</b></a>' + (r.best.length ? ': strongest at ' + esc(r.best.join(', ')) : '') + '</p></div>';
  }
  function ringOut(spec) {
    var a = byId(SP.drugs, spec.drug), b = spec.vs ? byId(SP.drugs, spec.vs) : null;
    return '<div class="dia__rings' + (b ? ' is-two' : '') + '">' + ringOne(a) + (b ? ringOne(b) : '') + '</div>';
  }
  function ringHTML(spec) {
    var R = data().ring, a = byId(SP.drugs, spec.drug), list = dia.ringDrugs();
    function sel(name, cur, none) {
      return '<select data-dia-sel="' + name + '" aria-label="' + (name === 'drug' ? 'Drug' : 'Compare with') + '">' + (none ? '<option value="">' + none + '</option>' : '') +
        list.map(function (d) { return '<option value="' + d.id + '"' + (d.id === cur ? ' selected' : '') + '>' + esc(d.name) + '</option>'; }).join('') + '</select>';
    }
    var ctl = spec.pick ? '<div class="dia__ctl dia__ctl--sel"><label><span>Drug</span>' + sel('drug', spec.drug) + '</label><label><span>Compare with</span>' + sel('vs', spec.vs, 'No second drug') + '</label></div>' : '';
    return '<figcaption class="dia__title">' + esc(spec.title || 'Receptor ring' + (spec.pick ? '' : ': ' + a.name)) + '</figcaption>' + ctl +
      '<div class="dia__out">' + ringOut(spec) + '</div>' +
      '<p class="dia__key"><span class="pkey pkey--block"></span>Blocks or inhibits <span class="pkey pkey--stim"></span>Stimulates <span class="pkey pkey--partial"></span>Partial agonist <span class="pkey pkey--mod"></span>Modulates</p>' +
      '<p class="dia__note">Each spoke is one target; more filled rings mean stronger binding (1 to 4, as in the binding profile). Clockwise from the top: ' + esc(R.groups.map(function (g) { return g.label.toLowerCase(); }).join(', ')) + '. Every drug uses the same order, so two rings can be compared spoke by spoke. A small dot marks a target the drug acts on with no strength given.</p>' +
      srcLine(spec, null, spec.pick ? '' : '<a href="' + dia.href({ kind: 'ring', drug: spec.drug }) + '">Compare with another drug</a>');
  }

  /* ================= shared ================= */
  var KINDS = {
    spectrum: { html: spectrumHTML, out: spectrumOut },
    occupancy: { html: occHTML, out: occOut },
    pathways: { html: pathHTML, out: pathOut },
    ring: { html: ringHTML, out: ringOut }
  };
  var uid = 0;
  function norm(spec) {
    var D = data(), s = {}, k;
    if (!spec || !KINDS[spec.kind] || !D[spec.kind]) return null;
    for (k in spec) if (Object.prototype.hasOwnProperty.call(spec, k)) s[k] = spec[k];
    if (s.kind === 'spectrum') {
      if (s.preset && !presetOf(s)) s.preset = null;
      var P = presetOf(s);
      if (typeof s.v !== 'number') s.v = P ? P.marks[Math.min(1, P.marks.length - 1)].v : 0.5;
      s.v = clamp(s.v, P ? 0 : -1, 1);
      if (P) s.flat = false;
    } else if (s.kind === 'occupancy') {
      if (!D.occupancy[s.target]) s.target = Object.keys(D.occupancy)[0];
      if (typeof s.v !== 'number') s.v = D.occupancy[s.target].start;
      s.v = clamp(s.v, 0, 100);
    } else if (s.kind === 'pathways') {
      if (!byId(D.pathways.states, s.state)) s.state = D.pathways.states[0].id;
      if (s.path && !byId(D.pathways.paths, s.path)) s.path = null;
    } else if (s.kind === 'ring') {
      var list = dia.ringDrugs();
      if (!list.length) return null;
      if (!dia.hasRing(s.drug)) s.drug = (byId(list, D.ring.start) || list[0]).id;
      if (s.vs && (!dia.hasRing(s.vs) || s.vs === s.drug)) s.vs = null;
    }
    if (!s.uid) s.uid = 'dia' + (++uid);
    return s;
  }
  dia.html = function (spec) {
    var s = norm(spec);
    if (!s) return '';
    return '<figure class="dia dia--' + s.kind + (s.blind ? ' is-blind' : '') + (s.full ? ' is-full' : '') + '" data-dia="' + esc(JSON.stringify(s)) + '">' + KINDS[s.kind].html(s) + '</figure>';
  };
  dia.href = function (spec) {
    var h = '#/diagrams/' + spec.kind;
    if (spec.kind === 'spectrum' && spec.preset) h += '/' + spec.preset;
    if (spec.kind === 'occupancy' && spec.target) h += '/' + spec.target;
    if (spec.kind === 'pathways' && spec.state) h += '/' + spec.state;
    if (spec.kind === 'ring' && spec.drug) h += '/' + spec.drug + (spec.vs ? ',' + spec.vs : '');
    return h;
  };
  /* the four diagrams, for the Diagrams page, the library tile and search */
  dia.list = function () {
    var D = data(), out = [];
    if (D.spectrum) out.push({ kind: 'spectrum', title: 'Agonist slider', css: 'mech', blurb: 'Slide a drug from inverse agonist to full agonist and watch what it does alone and on top of the natural transmitter. Includes the D2 partial agonists.', text: plain(D.spectrum.zones.map(function (z) { return z.label + ' ' + z.alone + ' ' + z.withAg; }).join(' ')) + ' ' + Object.keys(D.spectrum.presets || {}).map(function (k) { return D.spectrum.presets[k].marks.map(function (m) { return m.label + ' ' + plain(m.text); }).join(' '); }).join(' ') });
    if (D.occupancy) out.push({ kind: 'occupancy', title: 'Occupancy meter', css: 'drug', blurb: 'How much of a receptor or transporter has to be occupied before a drug works, for each target the book gives a figure for.', text: Object.keys(D.occupancy).map(function (k) { var o = D.occupancy[k]; return o.title + ' ' + o.bands.map(function (b) { return b.label + ' ' + plain(b.text); }).join(' '); }).join(' ') });
    if (D.pathways) out.push({ kind: 'pathways', title: 'Dopamine pathways', css: 'clin', blurb: 'The five dopamine pathways in untreated schizophrenia, under a D2 antagonist, with 5HT2A antagonism added, and under a D2 partial agonist.', text: D.pathways.paths.map(function (p) { return p.label + ' ' + p.from + ' ' + p.to + ' ' + p.role; }).join(' ') + ' ' + D.pathways.states.map(function (s) { return s.label + ' ' + Object.keys(s.p).map(function (k) { return plain(s.p[k].text); }).join(' '); }).join(' ') });
    if (D.ring && dia.ringDrugs().length) out.push({ kind: 'ring', title: 'Receptor ring', css: 'guide', blurb: 'One drug’s whole binding profile as a ring, in the same order for every drug, so two drugs can be compared at a glance.', text: 'binding profile receptor ring ' + dia.ringDrugs().map(function (d) { return d.name; }).join(' ') });
    return out;
  };
  dia.questions = function () { return (data().questions || []).slice(); };

  function figOf(el) { return el && el.closest ? el.closest('figure.dia') : null; }
  function specOf(fig) { try { return JSON.parse(fig.getAttribute('data-dia')); } catch (e) { return null; } }
  function save(fig, spec) {
    fig.setAttribute('data-dia', JSON.stringify(spec));
    if (spec.full && window.history && history.replaceState) { try { history.replaceState(history.state, '', dia.href(spec)); } catch (e) { /* file: pages */ } }
  }
  function redraw(fig, spec, focusSel) {
    spec = norm(spec);
    save(fig, spec);
    fig.innerHTML = KINDS[spec.kind].html(spec);
    if (focusSel) { var el = fig.querySelector(focusSel); if (el) { try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); } } }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-dia-set]') : null, fig = figOf(el);
      if (!fig) return;
      var spec = specOf(fig), kv = el.getAttribute('data-dia-set'), i = kv.indexOf(':'), k = kv.slice(0, i), v = kv.slice(i + 1);
      if (!spec) return;
      if (k === 'v') spec.v = parseFloat(v);
      else if (k === 'target') { spec.target = v; spec.v = null; }
      else if (k === 'state') spec.state = v;
      else if (k === 'path') spec.path = spec.path === v && !spec.blind ? null : v;
      redraw(fig, spec, 'button[data-dia-set="' + kv.replace(/"/g, '\\"') + '"]');
    });
    var onInput = function (e, done) {
      var el = e.target, fig = figOf(el);
      if (!fig || !el.getAttribute) return;
      var how = el.getAttribute('data-dia-in'), spec = specOf(fig);
      if (!how || !spec) return;
      if (how === 'flat') { spec.flat = el.checked; return redraw(fig, spec, 'input[data-dia-in="flat"]'); }
      var n = parseFloat(el.value);
      spec.v = how === 'v20' ? n / 20 : how === 'v100' ? n / 100 : n;
      if (done && el.getAttribute('data-dia-snap')) { var P = presetOf(spec); if (P) spec.v = P.marks[nearestMark(P.marks, spec.v)].v; return redraw(fig, spec, 'input[type="range"]'); }
      spec = norm(spec);
      save(fig, spec);
      fig.querySelector('.dia__out').innerHTML = KINDS[spec.kind].out(spec);
      var P2 = presetOf(spec);
      if (spec.kind === 'spectrum') {
        el.setAttribute('aria-valuetext', P2 ? P2.marks[nearestMark(P2.marks, spec.v)].label : zoneLabel(zoneOf(spec.v)));
        var cur = P2 ? 'v:' + P2.marks[nearestMark(P2.marks, spec.v)].v : null, zone = zoneOf(spec.v), zi = 0;
        Array.prototype.forEach.call(fig.querySelectorAll('.dia__ctl .dia__chip'), function (b) {
          var on = P2 ? b.getAttribute('data-dia-set') === cur : data().spectrum.zones[zi].id === zone; zi++;
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      } else el.setAttribute('aria-valuetext', Math.round(spec.v) + ' percent');
    };
    document.addEventListener('input', function (e) { onInput(e, false); });
    document.addEventListener('change', function (e) {
      var el = e.target, fig = figOf(el);
      if (!fig || !el.getAttribute) return;
      var which = el.getAttribute('data-dia-sel');
      if (which) { var spec = specOf(fig); if (!spec) return; spec[which] = el.value || null; return redraw(fig, spec, 'select[data-dia-sel="' + which + '"]'); }
      if (el.getAttribute('data-dia-in') && el.type === 'range') onInput(e, true);
    });
  }
})();
