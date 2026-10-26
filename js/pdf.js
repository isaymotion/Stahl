/* PDF generator for the high-yield handouts. No libraries: lays text out in two columns and writes
   a real PDF with embedded Unicode fonts (js/pdf-fonts.js), so Greek letters and symbols print correctly
   and there is no browser header or footer. Loaded on demand by the app. */
(function () {
  'use strict';
  var PAPERS = { a4: [595.28, 841.89], letter: [612, 792] };
  var COL = { green: [0.122, 0.353, 0.267], amber: [0.659, 0.435, 0], pink: [0.788, 0.235, 0.431], gray: [0.33, 0.33, 0.33], light: [0.62, 0.62, 0.62], ink: [0.08, 0.08, 0.1], rule: [0.86, 0.9, 0.84] };

  function fonts() { return window.SP_PDF_FONTS; }
  function cw(f, cp) {
    var m = fonts()[f].map;
    var e = m[cp] || m[63] || [0, 500];
    return e[1];
  }
  function width(f, s, size) {
    var w = 0;
    for (var i = 0; i < s.length; i++) w += cw(f, s.charCodeAt(i));
    return w * size / 1000;
  }
  function clean(s) {
    // normalise characters that the fonts may not carry
    return String(s).replace(/[     ]/g, ' ').replace(/[​-‍﻿]/g, '');
  }

  /* ---------- inline markup: **bold**, *italic* ---------- */
  function segments(s) {
    s = clean(s);
    var out = [], re = /\*\*(.+?)\*\*|(^|[^*])\*([^*\s][^*]*?)\*/g, last = 0, m;
    while ((m = re.exec(s))) {
      if (m[1] !== undefined) {
        if (m.index > last) out.push([s.slice(last, m.index), 'r']);
        out.push([m[1], 'b']); last = m.index + m[0].length;
      } else {
        var start = m.index + m[2].length;
        if (start > last) out.push([s.slice(last, start), 'r']);
        out.push([m[3], 'i']); last = m.index + m[0].length;
      }
    }
    if (last < s.length) out.push([s.slice(last), 'r']);
    return out;
  }
  function tokens(s) {
    var toks = [], space = false;
    segments(s).forEach(function (seg) {
      seg[0].split(/(\s+)/).forEach(function (p) {
        if (!p) return;
        if (/^\s+$/.test(p)) { space = true; return; }
        toks.push({ t: p, f: seg[1], sp: space }); space = false;
      });
    });
    if (toks.length) toks[0].sp = false;
    return toks;
  }
  function wrap(s, size, maxW) {
    var toks = tokens(s), lines = [], cur = [], x = 0, sp = width('r', ' ', size);
    toks.forEach(function (tk) {
      var w = width(tk.f, tk.t, size), gap = cur.length && tk.sp ? sp : 0;
      if (cur.length && x + gap + w > maxW + 0.01) { lines.push(cur); cur = []; x = 0; gap = 0; }
      cur.push({ t: tk.t, f: tk.f, w: w, dx: gap }); x += gap + w;
    });
    if (cur.length) lines.push(cur);
    return lines;
  }

  /* ---------- layout ---------- */
  function layout(spec, size) {
    var paper = PAPERS[spec.paper] || PAPERS.a4, W = paper[0], H = paper[1];
    var M = 34, gut = 16, cols = 2, colW = (W - 2 * M - gut) / cols;
    var LH = 1.27, bodyLH = size * LH, indent = size * 1.1;
    var footH = 22, topBody = M, bottom = H - M - footH;
    var pages = [], page = null, y = 0, col = 0, chapterOf = [];
    var blank = !!spec.blank;

    function newPage(ch, first) {
      page = { ops: [], ch: ch, first: first };
      pages.push(page);
      var top = M;
      if (first) {
        var hs = 17;
        page.ops.push({ k: 't', f: 'h', s: 7.2, x: M, y: top + 6, c: COL.pink, str: ch.kicker.toUpperCase() });
        // title may be long: wrap it into the left 70% of the width
        var tl = wrap2(ch.title, 'h', hs, (W - 2 * M) * 0.68), ty = top + 6 + 4 + hs * 0.95;
        tl.forEach(function (ln, i) { page.ops.push({ k: 't', f: 'h', s: hs, x: M, y: ty + i * hs * 1.1, c: COL.green, str: ln }); });
        var srcLines = (ch.source || []).slice();
        if (blank && ch.idx === 0 || blank && spec.worksheetName) srcLines.push('Name ____________________  Date ________');
        srcLines.forEach(function (ln, i) { page.ops.push({ k: 't', f: 's', s: 7, x: W - M, y: top + 6 + i * 9.5, c: COL.gray, str: ln, right: true }); });
        var hy = Math.max(ty + (tl.length - 1) * hs * 1.1, top + 6 + srcLines.length * 9.5) + 7;
        page.ops.push({ k: 'r', x: M, y: hy, w: W - 2 * M, h: 1.2, c: COL.green });
        y = hy + 10;
      } else {
        page.ops.push({ k: 't', f: 's', s: 7, x: M, y: top + 5, c: COL.gray, str: ch.running });
        page.ops.push({ k: 'r', x: M, y: top + 9, w: W - 2 * M, h: 0.5, c: COL.light });
        y = top + 20;
      }
      col = 0; page.colTop = y;
    }
    function wrap2(s, f, sz, maxW) {
      var words = clean(s).split(/\s+/), lines = [], cur = '';
      words.forEach(function (w) {
        var t = cur ? cur + ' ' + w : w;
        if (cur && width(f, t, sz) > maxW) { lines.push(cur); cur = w; } else cur = t;
      });
      if (cur) lines.push(cur);
      return lines;
    }
    function colX() { return M + col * (colW + gut); }
    function advance(ch) {
      if (col + 1 < cols) { col++; y = page.colTop; }
      else { newPage(ch, false); }
    }
    function room(h) { return y + h <= bottom + 0.01; }

    (spec.chapters || []).forEach(function (ch, ci) {
      ch.idx = ci;
      newPage(ch, true);
      ch.topics.forEach(function (tp) {
        var hSize = size * 1.06, boxW = tp.box ? hSize * 1.27 : 0;
        // long headings wrap within the column (one line, as before, for short ones)
        var hl = wrap2(tp.topic, 'h', hSize, colW - boxW), hLead = hSize * 1.15, hExtra = (hl.length - 1) * hLead;
        var hH = hSize * 1.25 + 4 + hExtra;
        var itemLines = tp.items.map(function (it) { return wrap(it, size, colW - indent); });
        var first = itemLines[0] ? itemLines[0].length * bodyLH : 0;
        if (!room(hH + Math.min(first, bodyLH * 2) + 2)) advance(ch);
        // heading
        var hx = colX();
        if (tp.box) {
          // an empty tick box before the heading (checklists): four thin rules
          var bs = hSize * 0.82, bx = hx, byy = y + hSize * 0.2, t = 0.6;
          [[bx, byy, bs, t], [bx, byy + bs - t, bs, t], [bx, byy, t, bs], [bx + bs - t, byy, t, bs]].forEach(function (r) { page.ops.push({ k: 'r', x: r[0], y: r[1], w: r[2], h: r[3], c: COL.ink }); });
          hx += boxW;
        }
        hl.forEach(function (ln, li) { page.ops.push({ k: 't', f: 'h', s: hSize, x: hx, y: y + hSize + li * hLead, c: COL.green, str: ln }); });
        page.ops.push({ k: 'r', x: colX(), y: y + hSize + hExtra + 2.6, w: colW, h: 0.6, c: COL.amber });
        y += hH + 1;
        itemLines.forEach(function (lines, ii) {
          var h = lines.length * bodyLH + size * 0.2;
          // keep short items whole; split long ones
          if (!room(h) && (lines.length <= 5 || !room(bodyLH * 2))) advance(ch);
          lines.forEach(function (ln, li) {
            if (!room(bodyLH)) advance(ch);
            var x = colX() + indent, by = y + size * 0.98;
            if (li === 0) page.ops.push({ k: 't', f: 'b', s: size, x: colX() + indent * 0.2, y: by, c: COL.amber, str: '•' });
            ln.forEach(function (w) {
              x += w.dx;
              if (blank && w.f === 'b') {
                page.ops.push({ k: 'r', x: x, y: by + 1.3, w: w.w, h: 0.6, c: COL.ink });
              } else page.ops.push({ k: 't', f: w.f, s: size, x: x, y: by, c: COL.ink, str: w.t });
              x += w.w;
            });
            y += bodyLH;
          });
          y += size * 0.2;
        });
        y += size * 0.55;
      });
    });
    // footers with page numbers
    var total = pages.length;
    pages.forEach(function (p, i) {
      p.ops.push({ k: 'r', x: M, y: H - M - footH + 6, w: W - 2 * M, h: 0.5, c: COL.light });
      p.ops.push({ k: 't', f: 's', s: 6.8, x: M, y: H - M - footH + 16, c: COL.gray, str: spec.footer });
      p.ops.push({ k: 't', f: 's', s: 6.8, x: W - M, y: H - M - footH + 16, c: COL.gray, str: 'Page ' + (i + 1) + ' of ' + total, right: true });
    });
    return { pages: pages, W: W, H: H, count: total };
  }

  /* pick the largest type size (down to a floor) that fits within maxPages */
  function plan(spec) {
    var minPt = spec.minPt || 6.5, maxPt = spec.maxPt || 10.5, fixed = spec.fontSize;
    if (fixed) { var one = layout(spec, fixed); one.size = fixed; one.ok = !spec.maxPages || one.count <= spec.maxPages; return one; }
    var lo = minPt, hi = maxPt, best = null, r;
    r = layout(spec, hi);
    if (!spec.maxPages || r.count <= spec.maxPages) { r.size = hi; r.ok = true; return r; }
    r = layout(spec, lo);
    if (r.count > spec.maxPages) { r.size = lo; r.ok = false; return r; }
    best = r; best.size = lo;
    for (var k = 0; k < 12; k++) {
      var mid = (lo + hi) / 2, t = layout(spec, mid);
      if (t.count <= spec.maxPages) { lo = mid; best = t; best.size = mid; } else hi = mid;
    }
    var sz = Math.floor(best.size * 20) / 20;
    var fin = layout(spec, sz);
    if (fin.count > spec.maxPages) fin = best; else fin.size = sz;
    fin.ok = true;
    return fin;
  }

  /* ---------- PDF writer ---------- */
  function b64bytes(b) { var s = atob(b), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
  function hex4(n) { return ('0000' + n.toString(16)).slice(-4).toUpperCase(); }
  function num(n) { return (Math.round(n * 100) / 100).toString(); }
  function utf16hex(s) { var h = 'FEFF'; for (var i = 0; i < s.length; i++) h += hex4(s.charCodeAt(i)); return '<' + h + '>'; }

  function maybeDeflate(bytes) {
    if (typeof CompressionStream === 'undefined') return Promise.resolve({ bytes: bytes, flate: false });
    try {
      var cs = new CompressionStream('deflate');
      var out = new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer();
      return out.then(function (b) { return { bytes: new Uint8Array(b), flate: true }; }, function () { return { bytes: bytes, flate: false }; });
    } catch (e) { return Promise.resolve({ bytes: bytes, flate: false }); }
  }

  function write(spec, pl) {
    var F = fonts(), keys = ['r', 'b', 'i', 'h', 's'];
    var used = {};  // font -> {gid: cp}
    keys.forEach(function (k) { used[k] = {}; });
    function glyphs(f, str) {
      var m = F[f].map, h = '';
      for (var i = 0; i < str.length; i++) {
        var cp = str.charCodeAt(i), e = m[cp] || m[63];
        h += hex4(e ? e[0] : 0); if (e) used[f][e[0]] = m[cp] ? cp : 63;
      }
      return h;
    }
    var pageStreams = pl.pages.map(function (p) {
      var s = '';
      p.ops.forEach(function (o) {
        if (o.k === 'r') {
          s += o.c[0] + ' ' + o.c[1] + ' ' + o.c[2] + ' rg ' + num(o.x) + ' ' + num(pl.H - o.y - o.h) + ' ' + num(o.w) + ' ' + num(o.h) + ' re f\n';
        } else {
          var x = o.x;
          if (o.right) x = o.x - width(o.f, o.str, o.s);
          s += 'BT /' + o.f.toUpperCase() + ' ' + num(o.s) + ' Tf ' + o.c[0] + ' ' + o.c[1] + ' ' + o.c[2] + ' rg ' + num(x) + ' ' + num(pl.H - o.y) + ' Td <' + glyphs(o.f, o.str) + '> Tj ET\n';
        }
      });
      return s;
    });
    var enc = new TextEncoder();
    var jobs = pageStreams.map(function (s) { return maybeDeflate(enc.encode(s)); });
    var fontJobs = keys.map(function (k) { return maybeDeflate(b64bytes(F[k].ttf)); });
    return Promise.all([Promise.all(jobs), Promise.all(fontJobs)]).then(function (res) {
      var pageData = res[0], fontData = res[1];
      var chunks = [], offsets = [], pos = 0, objCount = 0;
      function push(x) { var b = typeof x === 'string' ? enc.encode(x) : x; chunks.push(b); pos += b.length; }
      function begin(n) { offsets[n] = pos; push(n + ' 0 obj\n'); }
      // object numbering: 1 catalog, 2 pages, 3 info, then fonts (5 each), then pages (2 each)
      var FBASE = 4, fontObj = {};
      keys.forEach(function (k, i) { fontObj[k] = FBASE + i * 5; });
      var PBASE = FBASE + keys.length * 5, n = pl.pages.length;
      objCount = PBASE + n * 2;
      push('%PDF-1.5\n%\xE2\xE3\xCF\xD3\n');
      begin(1); push('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
      var kids = []; for (var i = 0; i < n; i++) kids.push((PBASE + i * 2) + ' 0 R');
      begin(2); push('<< /Type /Pages /Count ' + n + ' /Kids [' + kids.join(' ') + '] >>\nendobj\n');
      var d = new Date(), pad = function (v) { return ('0' + v).slice(-2); };
      var stamp = 'D:' + d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
      begin(3); push('<< /Title ' + utf16hex(spec.title || 'High-yield handout') + ' /Author (Isabella Navarro, MD) /Creator (Stahl Study Companion) /CreationDate (' + stamp + ') >>\nendobj\n');
      keys.forEach(function (k, fi) {
        var o = fontObj[k], f = F[k], fd = fontData[fi];
        var base = 'ABCDEF+DejaVu' + k.toUpperCase();
        var ws = '', gids = Object.keys(used[k]).map(Number).sort(function (a, b) { return a - b; });
        gids.forEach(function (g) { var cp = used[k][g]; ws += g + ' [' + cw(k, cp) + '] '; });
        begin(o); push('<< /Type /Font /Subtype /Type0 /BaseFont /' + base + ' /Encoding /Identity-H /DescendantFonts [' + (o + 1) + ' 0 R] /ToUnicode ' + (o + 4) + ' 0 R >>\nendobj\n');
        begin(o + 1); push('<< /Type /Font /Subtype /CIDFontType2 /BaseFont /' + base + ' /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ' + (o + 2) + ' 0 R /CIDToGIDMap /Identity /DW 500 /W [' + ws + '] >>\nendobj\n');
        begin(o + 2); push('<< /Type /FontDescriptor /FontName /' + base + ' /Flags 4 /FontBBox [' + f.bbox.join(' ') + '] /ItalicAngle ' + (k === 'i' ? -11 : 0) + ' /Ascent ' + f.asc + ' /Descent ' + f.desc + ' /CapHeight 729 /StemV 80 /FontFile2 ' + (o + 3) + ' 0 R >>\nendobj\n');
        begin(o + 3); push('<< /Length ' + fd.bytes.length + (fd.flate ? ' /Filter /FlateDecode' : '') + ' /Length1 ' + b64bytes(f.ttf).length + ' >>\nstream\n'); push(fd.bytes); push('\nendstream\nendobj\n');
        var cm = '/CIDInit /ProcSet findresource begin 12 dict begin begincmap /CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def /CMapName /Adobe-Identity-UCS def /CMapType 2 def 1 begincodespacerange <0000> <FFFF> endcodespacerange\n';
        for (var a = 0; a < gids.length; a += 100) {
          var part = gids.slice(a, a + 100);
          cm += part.length + ' beginbfchar\n' + part.map(function (g) { return '<' + hex4(g) + '> <' + hex4(used[k][g]) + '>'; }).join('\n') + '\nendbfchar\n';
        }
        cm += 'endcmap CMapName currentdict /CMap defineresource pop end end';
        begin(o + 4); push('<< /Length ' + cm.length + ' >>\nstream\n' + cm + '\nendstream\nendobj\n');
      });
      var fontRes = keys.map(function (k) { return '/' + k.toUpperCase() + ' ' + fontObj[k] + ' 0 R'; }).join(' ');
      pl.pages.forEach(function (p, i) {
        var po = PBASE + i * 2, pd = pageData[i];
        begin(po); push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + num(pl.W) + ' ' + num(pl.H) + '] /Resources << /Font << ' + fontRes + ' >> >> /Contents ' + (po + 1) + ' 0 R >>\nendobj\n');
        begin(po + 1); push('<< /Length ' + pd.bytes.length + (pd.flate ? ' /Filter /FlateDecode' : '') + ' >>\nstream\n'); push(pd.bytes); push('\nendstream\nendobj\n');
      });
      var xref = pos;
      var x = 'xref\n0 ' + (objCount + 1) + '\n0000000000 65535 f \n';
      for (var j = 1; j <= objCount; j++) x += ('0000000000' + offsets[j]).slice(-10) + ' 00000 n \n';
      push(x + 'trailer\n<< /Size ' + (objCount + 1) + ' /Root 1 0 R /Info 3 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
      return new Blob(chunks, { type: 'application/pdf' });
    });
  }

  function generate(spec) {
    var pl = plan(spec);
    return write(spec, pl).then(function (blob) { return { blob: blob, pages: pl.count, size: pl.size }; });
  }
  function save(blob, filename) {
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = filename; a.rel = 'noopener';
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); }, 0);
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }

  window.SP_PDF = { plan: plan, generate: generate, save: save, layout: layout };
})();
