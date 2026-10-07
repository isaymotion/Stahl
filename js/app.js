/* Stahl Study Companion — app logic (no build step, no dependencies). */
(function () {
  'use strict';

  var SP = window.SP;
  var main = document.getElementById('main');
  var qInput = document.getElementById('q');
  var suggestBox = document.getElementById('suggest');

  /* ---------- storage ---------- */
  var PREFIX = 'sp:v1:';
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ }
    },
    del: function (k) { try { localStorage.removeItem(PREFIX + k); } catch (e) {} }
  };

  /* ---------- modes ---------- */
  var MODES = [
    { key: 'guide', label: 'Study guide', short: 'Study guide', css: 'guide', blurb: 'The whole chapter, explained and organized for learning.' },
    { key: 'high-yield', label: 'High yield', short: 'High yield', css: 'hy', blurb: 'The must-know facts, with a printable summary.' },
    { key: 'mech', label: 'Mechanism cards', short: 'Mechanisms', css: 'mech', deck: true, blurb: 'Neuroscience, receptors and how drugs act.' },
    { key: 'drugs', label: 'Drug cards', short: 'Drugs', css: 'drug', deck: true, blurb: 'Agents, binding profiles and side effects.' },
    { key: 'clinical', label: 'Clinical cards', short: 'Clinical', css: 'clin', deck: true, blurb: 'Symptoms, circuits and treatment strategy.' },
    { key: 'cases', label: 'Board questions', short: 'Board questions', css: 'case', deck: true, blurb: 'Single-best-answer questions with explanations.' }
  ];
  var DECKS = MODES.filter(function (m) { return m.deck; });
  function modeBy(k) { for (var i = 0; i < MODES.length; i++) if (MODES[i].key === k) return MODES[i]; return null; }
  function modeHref(ch, m) { return m.deck ? '#/c/' + ch.id + '/cards/' + m.key : '#/c/' + ch.id + '/' + m.key; }
  function chapterModes(ch) { return MODES.filter(function (m) { return !m.deck || (ch[m.key] || []).length; }); }
  var BOOK = SP.BOOK || 'Stahl’s Essential Psychopharmacology, 5th ed.';
  var APP = 'Stahl Study Companion';

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* Cross-references in content: [[drug:fluoxetine]], [[nt:dopamine|DA]], [[target:sert]], [[ch:ch02|Chapter 2]] */
  var XREF_RE = /\[\[(drug|nt|target|ch|gl|page):([^|\]]+)(?:\|([^\]]+))?\]\]/g;
  var XREF_HREF = { drug: '#/drugs/', nt: '#/nt/', target: '#/targets/', ch: '#/c/', gl: '#/glossary/', page: '#/' };
  function xrefLabel(type, id, label) {
    if (label) return label;
    var list = type === 'drug' ? SP.drugs : type === 'nt' ? SP.nts : type === 'target' ? SP.targets : null;
    if (list) for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].name;
    return id;
  }
  function fmt(s) {
    return esc(s)
      .replace(XREF_RE, function (m, type, id, label) { return '<a class="xref xref--' + type + '" href="' + XREF_HREF[type] + id + (type === 'ch' ? '/guide' : '') + '">' + xrefLabel(type, id, label) + '</a>'; })
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
  }
  function plain(s) { return String(s == null ? '' : s).replace(XREF_RE, function (m, type, id, label) { return xrefLabel(type, id, label); }).replace(/\*\*/g, '').replace(/\*/g, ''); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function slug(s) { return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function fmtDate(t) { try { return new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); } catch (e) { return ''; } }
  function fmtClock(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function shuffle(a) { for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---------- data loading ---------- */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }
  function loadAll() {
    var jobs = [];
    SP.manifest.forEach(function (ch) {
      if (!ch.ready) return;
      (ch.files || []).forEach(function (f) { jobs.push(loadScript('data/' + ch.id + '/' + f + '.js')); });
    });
    (SP.extraFiles || []).forEach(function (f) { jobs.push(loadScript(f)); });
    return Promise.all(jobs);
  }
  var CHAPTERS = {};
  function chapter(id) {
    if (CHAPTERS[id]) return CHAPTERS[id];
    var meta = null;
    SP.manifest.forEach(function (c) { if (c.id === id) meta = c; });
    if (!meta || !meta.ready) return null;
    var d = SP.chapters[id] || {};
    var ch = {};
    Object.keys(meta).forEach(function (k) { ch[k] = meta[k]; });
    Object.keys(d).forEach(function (k) { ch[k] = d[k]; });
    CHAPTERS[id] = ch;
    return ch;
  }
  function allChapters() { return SP.manifest.filter(function (m) { return m.ready; }).map(function (m) { return chapter(m.id); }); }
  function plannedChapters() { return SP.manifest.slice(); }
  function sectionCount(ch) { var n = 0; (ch.guide && ch.guide.parts || []).forEach(function (p) { n += p.sections.length; }); return n; }
  function hyCount(ch) { var n = 0; (ch.highYield || []).forEach(function (t) { n += t.items.length; }); return n; }
  function cardCount(ch) { var n = 0; DECKS.forEach(function (d) { n += (ch[d.key] || []).length; }); return n; }

  /* Every card in the app, keyed "chapterId/deck/cardId". */
  var CARDS = {}, CARD_LIST = [];
  function indexCards() {
    CARDS = {}; CARD_LIST = [];
    allChapters().forEach(function (ch) {
      DECKS.forEach(function (d) {
        (ch[d.key] || []).forEach(function (c, i) {
          var key = ch.id + '/' + d.key + '/' + c.id;
          var rec = { key: key, ch: ch, deck: d, c: c, i: i };
          CARDS[key] = rec; CARD_LIST.push(rec);
        });
      });
    });
  }
  function deckKeys(ch, deckKey) { return (ch[deckKey] || []).map(function (c) { return ch.id + '/' + deckKey + '/' + c.id; }); }

  /* ---------- spaced repetition ----------
     Each reviewed card stores { i: interval in days, e: ease, r: successful reps, l: lapses, d: due day }.
     Cards with no record are new. Ratings: 1 Again, 2 Hard, 3 Good, 4 Easy (an SM-2 style schedule). */
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  var SRS = store.get('srs', null);
  (function migrate() {
    if (SRS) return;
    SRS = {};
    var old = store.get('cards', {});
    Object.keys(old).forEach(function (k) {
      if (old[k] === 'known') SRS[k] = { i: 3, e: 2.5, r: 2, l: 0, d: today() + 3 };
      else if (old[k] === 'learning') SRS[k] = { i: 0, e: 2.3, r: 0, l: 1, d: today() };
    });
    store.set('srs', SRS);
  })();
  function saveSRS() { store.set('srs', SRS); }
  function srsNext(s, g) {
    s = s || { i: 0, e: 2.5, r: 0, l: 0 };
    var e = s.e, i, r = s.r, l = s.l || 0;
    if (g === 1) { e = Math.max(1.3, e - 0.2); i = 0; r = 0; l++; }
    else if (g === 2) { e = Math.max(1.3, e - 0.15); i = r === 0 ? 1 : Math.max(s.i + 1, Math.round(s.i * 1.2)); r++; }
    else if (g === 3) { i = r === 0 ? 2 : r === 1 ? 5 : Math.max(s.i + 1, Math.round(s.i * e)); r++; }
    else { e = e + 0.15; i = r === 0 ? 4 : Math.max(s.i + 2, Math.round(s.i * e * 1.3)); r++; }
    return { i: i, e: Math.round(e * 100) / 100, r: r, l: l, d: today() + i };
  }
  function ivLabel(i) { return i === 0 ? 'Today' : i === 1 ? '1 day' : i < 30 ? i + ' days' : i < 365 ? Math.round(i / 30) + ' mo' : (i / 365).toFixed(1) + ' yr'; }
  function cardStatus(key) {
    var s = SRS[key];
    if (!s) return 'new';
    return s.i >= 21 ? 'mastered' : 'learning';
  }
  function isDue(key) { var s = SRS[key]; return !!s && s.d <= today(); }
  var NEW_KEY = 'newToday';
  function newSeenToday() { var n = store.get(NEW_KEY, null); return n && n.day === today() ? n.n : 0; }
  function bumpNewSeen() { store.set(NEW_KEY, { day: today(), n: newSeenToday() + 1 }); }
  function rateCard(key, g) {
    var wasNew = !SRS[key];
    SRS[key] = srsNext(SRS[key], g);
    saveSRS();
    if (wasNew) bumpNewSeen();
    updateNavBadges();
  }
  function tallyKeys(keys) {
    var t = { total: keys.length, fresh: 0, learning: 0, mastered: 0, due: 0 };
    keys.forEach(function (k) {
      var st = cardStatus(k);
      if (st === 'new') t.fresh++; else if (st === 'mastered') t.mastered++; else t.learning++;
      if (isDue(k)) t.due++;
    });
    return t;
  }
  function reviewPrefs() { return store.get('reviewPrefs', { newPerDay: 20, scope: 'all' }); }
  function dueSummary(scope) {
    var due = 0, fresh = 0;
    CARD_LIST.forEach(function (r) {
      if (scope && scope !== 'all' && r.ch.id !== scope) return;
      if (isDue(r.key)) due++; else if (!SRS[r.key]) fresh++;
    });
    var quota = Math.max(0, reviewPrefs().newPerDay - newSeenToday());
    return { due: due, fresh: fresh, newToday: Math.min(quota, fresh) };
  }

  /* ---------- mistakes ---------- */
  var MISTAKES = store.get('mistakes', {});
  function saveMistakes() { store.set('mistakes', MISTAKES); updateNavBadges(); }
  function addMistake(key, src) {
    var m = MISTAKES[key] || { n: 0 };
    m.n++; m.t = Date.now(); m.src = src;
    MISTAKES[key] = m; saveMistakes();
  }
  function clearMistake(key) { if (MISTAKES[key]) { delete MISTAKES[key]; saveMistakes(); } }
  function mistakeKeys() { return Object.keys(MISTAKES).filter(function (k) { return CARDS[k]; }).sort(function (a, b) { return MISTAKES[b].t - MISTAKES[a].t; }); }

  /* ---------- router ---------- */
  var view = { key: null, focus: null, cleanup: null };

  function parts() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
  }

  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }
    closeGloss();
    view.key = key;
    view.focus = focusFn || null;
    main.innerHTML = html;
    if (!(opts && opts.keepScroll)) window.scrollTo(0, 0);
    var modes = main.querySelector('.modes'), act = modes && modes.querySelector('.is-active');
    if (act && modes.scrollWidth > modes.clientWidth) modes.scrollLeft = act.offsetLeft - (modes.clientWidth - act.offsetWidth) / 2;
    buildNav();
  }

  function route() {
    closeSuggest();
    closeDrawer();
    var p = parts();
    if (!p.length) return renderHome();
    switch (p[0]) {
      case 'search': var q = p.slice(1).join('/'); qInput.value = q; return renderSearch(q);
      case 'library': return renderLibrary();
      case 'drugs': return p[1] ? renderDrug(p[1]) : renderDrugs();
      case 'nt': return p[1] ? renderNT(p[1]) : renderNTs();
      case 'targets': return p[1] ? renderTarget(p[1]) : renderTargets();
      case 'compare': return renderCompare(p.slice(1).join('/'));
      case 'circuits': return renderCircuits(p[1]);
      case 'nbn': return renderNbN();
      case 'updates': return renderUpdates();
      case 'bookmarks': return renderBookmarks();
      case 'print-all': return renderPrintAll();
      case 'soon': return renderSoon(p[1]);
      case 'review': return renderReview(p[1]);
      case 'mistakes': return renderMistakes();
      case 'exam':
        if (p[1] === 'run') return renderExamRun();
        if (p[1] === 'results') return renderExamResults(p[2]);
        if (p[1] === 'review') return renderExamReview(p[2], p[3] || 'missed', parseInt(p[4] || '0', 10));
        return renderExamSetup();
      case 'glossary': return renderGlossary(p[1]);
      case 'helpers': return p[1] ? renderHelper(p[1]) : renderHelpers();
      case 'teach': return p[1] === 'run' ? renderTeachRun() : renderTeachSetup();
      case 'whats-new': return renderNews();
      case 'c':
        var ch = chapter(p[1]);
        if (!ch) return planned(p[1]) ? renderSoon(p[1]) : renderMissing();
        var mode = p[2] || 'guide';
        if (mode === 'handout') return renderHandout(ch);
        store.set('last', { hash: location.hash, ch: ch.id, mode: mode === 'cards' ? (p[3] || 'mech') : mode });
        if (mode === 'guide') return renderGuide(ch, p[3]);
        if (mode === 'high-yield') return renderHY(ch, p[3]);
        if (mode === 'cards') return renderCards(ch, p[3] || 'mech', p[4]);
    }
    renderMissing();
  }

  function planned(id) { var m = null; SP.manifest.forEach(function (c) { if (c.id === id) m = c; }); return m; }

  function renderMissing() {
    setView('missing', '<div class="wrap empty" style="margin-top:48px"><h2>That page is not in the app</h2><p>The link may point to something that has not been added yet.</p><a class="btn btn--solid" href="#/">Go home</a></div>');
    document.title = 'Not found — ' + APP;
  }

  function renderSoon(id) {
    var m = planned(id);
    if (!m) return renderMissing();
    var ready = allChapters();
    setView('soon:' + id, '<div class="wrap page"><div class="soon">' +
      '<p class="soon__kicker">Chapter ' + m.number + ' · book pages ' + esc(m.pages) + '</p>' +
      '<h1>' + esc(m.title) + '</h1><p class="soon__sum">' + esc(m.summary) + '</p>' +
      '<p class="soon__note">This chapter is being written and will appear here with its study guide, high-yield summary, flashcards, board questions and database entries. Chapters are added in book order.</p>' +
      '<div class="empty__actions" style="justify-content:flex-start">' + (ready.length ? '<a class="btn btn--solid" href="#/c/' + ready[ready.length - 1].id + '/guide">Open Chapter ' + ready[ready.length - 1].number + '</a>' : '') + '<a class="btn" href="#/whats-new">What’s new</a></div>' +
      '</div></div>');
    document.title = 'Chapter ' + m.number + ' (coming soon) — ' + APP;
  }

  /* ---------- site navigation ----------
     One menu for every screen size: a persistent sidebar on wide screens (collapsible) and a
     slide-in drawer on phones and tablets, opened from the menu button or the Chapters tab. */
  var LIBRARY = [
    { key: 'drugs', href: '#/drugs', label: 'Drugs', blurb: 'Every agent: mechanism, binding profile, uses, side effects, pearls.', css: 'drug' },
    { key: 'nt', href: '#/nt', label: 'Neurotransmitters', blurb: 'Synthesis, termination, receptors, pathways and the drugs that act on each.', css: 'mech' },
    { key: 'targets', href: '#/targets', label: 'Receptors & targets', blurb: 'Receptors, transporters, enzymes and channels, and what hitting each one does.', css: 'guide' },
    { key: 'compare', href: '#/compare', label: 'Compare drugs', blurb: 'Two or three agents side by side.', css: 'case' },
    { key: 'circuits', href: '#/circuits', label: 'Symptoms & circuits', blurb: 'Symptom → malfunctioning circuit → targeted mechanism.', css: 'clin' },
    { key: 'nbn', href: '#/nbn', label: 'Nomenclature (NbN)', blurb: 'Traditional class names mapped to mechanism-based names.', css: 'hy' },
    { key: 'glossary', href: '#/glossary', label: 'Glossary', blurb: 'Terms defined in the chapters, tap-to-define everywhere.', css: 'gloss' },
    { key: 'updates', href: '#/updates', label: 'Post-publication updates', blurb: 'Every labeled update box: what changed after the 2021 edition.', css: 'upd' }
  ];
  function navIcon(name) {
    var p = {
      home: 'M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z',
      review: 'M4 7h12v13H4z M8 4h12v12',
      exam: 'M12 6a7 7 0 1 0 0 14a7 7 0 1 0 0-14z M12 10v3.5l2.5 2 M10 3h4',
      mistakes: 'M12 4l9 16H3z M12 10v4 M12 17v.5',
      bookmarks: 'M7 4h10v16l-5-4-5 4z',
      teach: 'M4 5h16v11H4z M9 20h6 M12 16v4',
      print: 'M7 9V4h10v5 M6 17H4V9h16v8h-2 M7 14h10v6H7z',
      news: 'M5 5h11v14H7a2 2 0 0 1-2-2z M16 9h3v8a2 2 0 0 1-2 2'
    }[name];
    return '<svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="' + p + '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function buildNav() {
    var body = document.getElementById('sidenav-body');
    if (!body) return;
    var cur = parts();
    var curCh = cur[0] === 'c' || cur[0] === 'soon' ? cur[1] : null;
    var chList = plannedChapters().map(function (m) {
      var ch = m.ready ? chapter(m.id) : null;
      var open = curCh === m.id && ch;
      var sub = '';
      if (open) {
        var active = cur[2] === 'cards' ? cur[3] : (cur[2] || 'guide');
        sub = '<ul class="nav-modes">' + chapterModes(ch).map(function (md) {
          return '<li><a class="nav-mode c-' + md.css + (md.key === active ? ' is-active' : '') + '" href="' + modeHref(ch, md) + '"' + (md.key === active ? ' aria-current="page"' : '') + '>' + esc(md.short) + '</a></li>';
        }).join('') + '<li><a class="nav-mode c-hy' + (active === 'handout' ? ' is-active' : '') + '" href="#/c/' + ch.id + '/handout">Printable summary</a></li></ul>';
      }
      var href = m.ready ? '#/c/' + m.id + '/guide' : '#/soon/' + m.id;
      return '<li class="nav-ch' + (m.ready ? '' : ' is-soon') + (open ? ' is-open' : '') + (curCh === m.id ? ' is-current' : '') + '">' +
        '<a href="' + href + '" data-navch="' + m.id + '"' + (curCh === m.id ? ' aria-current="true"' : '') + '><span class="nav-ch__n">' + m.number + '</span><span class="nav-ch__t">' + esc(m.short) + '</span>' + (m.ready ? '' : '<span class="nav-soon">Soon</span>') + '</a>' + sub + '</li>';
    }).join('');
    function item(href, key, label, icon, badge) {
      return '<li><a class="nav-item" href="' + href + '" data-nav="' + key + '">' + navIcon(icon) + '<span>' + label + '</span>' + (badge ? '<span class="badge" data-badge="' + badge + '" hidden></span>' : '') + '</a></li>';
    }
    body.innerHTML =
      '<div class="nav-group"><ul>' +
        item('#/', 'home', 'Home', 'home') +
        item('#/review', 'review', 'Daily review', 'review', 'review') +
        item('#/exam', 'exam', 'Board-style exam', 'exam') +
        item('#/mistakes', 'mistakes', 'Mistakes', 'mistakes', 'mistakes') +
        item('#/bookmarks', 'bookmarks', 'Bookmarks', 'bookmarks') +
      '</ul></div>' +
      '<div class="nav-group"><p class="nav-label">Chapters</p><ol class="nav-chapters">' + chList + '</ol></div>' +
      '<div class="nav-group"><p class="nav-label"><a href="#/library" data-nav="library">Reference library</a></p><ul>' +
        LIBRARY.map(function (l) { return '<li><a class="nav-item nav-item--lib c-' + l.css + '" href="' + l.href + '" data-nav="' + l.key + '"><span class="nav-dot"></span><span>' + esc(l.label) + '</span></a></li>'; }).join('') +
      '</ul></div>' +
      '<div class="nav-group"><p class="nav-label">For educators</p><ul>' +
        item('#/teach', 'teach', 'Teaching mode', 'teach') +
        item('#/print-all', 'print-all', 'Print all high-yield', 'print') +
        item('#/whats-new', 'whats-new', 'What’s new', 'news', 'news-nav') +
      '</ul></div>';
    markNav();
    updateNavBadges();
  }
  function markNav() {
    var p = parts()[0] || 'home';
    var map = { c: 'chapters', soon: 'chapters', search: '' };
    var key = map[p] != null ? map[p] : p;
    if (key === 'helpers') key = '';
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === key;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else if (!a.hasAttribute('data-navch')) a.removeAttribute('aria-current');
    });
    var libKeys = LIBRARY.map(function (l) { return l.key; }).concat(['library']);
    var tab = p === 'home' ? 'home' : p === 'review' ? 'review' : p === 'exam' ? 'exam' : libKeys.indexOf(p) > -1 ? 'library' : (p === 'c' || p === 'soon') ? 'chapters' : '';
    document.querySelectorAll('.tabbar [data-tab]').forEach(function (t) {
      var on = t.getAttribute('data-tab') === tab;
      t.classList.toggle('is-active', on);
      if (t.tagName === 'A') { if (on) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current'); }
    });
  }
  function updateNavBadges() {
    var s = CARD_LIST.length ? dueSummary('all') : null, n = s ? s.due + s.newToday : 0;
    document.querySelectorAll('[data-badge="review"], [data-badge="review-tab"]').forEach(function (b) { b.textContent = n; b.hidden = !n; });
    var u = SP.changelog ? unseenNews().length : 0;
    document.querySelectorAll('[data-badge="news"], [data-badge="news-nav"]').forEach(function (b) { b.textContent = u; b.hidden = !u; });
    var k = mistakeKeys().length;
    document.querySelectorAll('[data-badge="mistakes"]').forEach(function (b) { b.textContent = k; b.hidden = !k; });
  }

  /* drawer (phones and tablets) and collapsible sidebar (wide screens) */
  var sidenav = document.getElementById('sidenav'), backdrop = document.getElementById('nav-backdrop');
  var menuBtn = document.getElementById('menu-btn'), tabCh = document.getElementById('tab-chapters');
  function isDrawerMode() { return window.matchMedia('(max-width: 1099px)').matches; }
  function openDrawer(focusChapters) {
    if (!isDrawerMode()) return;
    document.body.classList.add('drawer-open');
    backdrop.hidden = false;
    [menuBtn, tabCh].forEach(function (b) { if (b) b.setAttribute('aria-expanded', 'true'); });
    var target = focusChapters ? sidenav.querySelector('.nav-ch.is-current a, .nav-chapters a') : sidenav.querySelector('.sidenav__close');
    if (focusChapters) { var g = sidenav.querySelector('.nav-chapters'); if (g) g.parentNode.scrollIntoView({ block: 'start' }); }
    setTimeout(function () { if (target) target.focus({ preventScroll: !!focusChapters }); }, 60);
  }
  function closeDrawer() {
    if (!document.body.classList.contains('drawer-open')) return;
    document.body.classList.remove('drawer-open');
    backdrop.hidden = true;
    [menuBtn, tabCh].forEach(function (b) { if (b) b.setAttribute('aria-expanded', 'false'); });
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { openDrawer(false); });
  if (tabCh) tabCh.addEventListener('click', function () { if (document.body.classList.contains('drawer-open')) closeDrawer(); else openDrawer(true); });
  document.getElementById('nav-close').addEventListener('click', function () { closeDrawer(); if (menuBtn) menuBtn.focus(); });
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('drawer-open')) { closeDrawer(); if (menuBtn) menuBtn.focus(); } });
  sidenav.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a && a.getAttribute('href') === location.hash) closeDrawer(); });
  var collapseBtn = document.getElementById('collapse-btn');
  function labelCollapse() { var c = document.documentElement.classList.contains('nav-collapsed'); collapseBtn.setAttribute('aria-label', c ? 'Show the sidebar' : 'Hide the sidebar'); collapseBtn.setAttribute('aria-expanded', String(!c)); }
  collapseBtn.addEventListener('click', function () {
    var c = !document.documentElement.classList.contains('nav-collapsed');
    document.documentElement.classList.toggle('nav-collapsed', c);
    store.set('navCollapsed', c); labelCollapse(); setTopVar();
  });
  labelCollapse();

  /* ---------- home ---------- */
  function branchSVG(n) {
    /* A neuron whose dendrites end in spring buds, one per study mode (an original drawing). */
    var h = n * 100, mid = h / 2;
    var out = '<svg class="bloom__svg" viewBox="0 0 220 ' + h + '" preserveAspectRatio="none" aria-hidden="true">';
    for (var i = 0; i < n; i++) {
      var y = 50 + i * 100;
      out += '<path d="M0 ' + mid + ' C 70 ' + mid + ' 110 ' + y + ' 214 ' + y + '" stroke="var(--leaf-ink)" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".55" vector-effect="non-scaling-stroke"/>';
    }
    return out + '</svg>';
  }
  function budSVG() {
    return '<img class="bloom__soma" src="icons/home-brain.png" alt="" width="120" height="120">';
  }


  function renderHome() {
    var chs = allChapters();
    var last = store.get('last', null);
    var lastCh = last && chapter(last.ch);
    var focus = lastCh || chs[chs.length - 1];
    var lastMode = last && modeBy(last.mode);
    var cont = lastCh
      ? '<a class="btn btn--solid" href="' + esc(last.hash) + '">Continue Chapter ' + lastCh.number + ' ' + esc(lastMode ? lastMode.label.toLowerCase() : 'study') + '</a>'
      : '<a class="btn btn--solid" href="#/c/' + focus.id + '/guide">Start Chapter ' + focus.number + '</a>';

    var spectrum = chapterModes(focus).map(function (m) {
      return '<li><a class="c-' + m.css + '" href="' + modeHref(focus, m) + '"><span class="bloom__bud"></span><span class="spectrum__label">' + esc(m.label) + '</span><span class="spectrum__blurb">' + esc(m.blurb) + '</span></a></li>';
    }).join('');

    var s = dueSummary('all');
    var perCh = chs.map(function (ch) {
      var d = dueSummary(ch.id);
      return '<li><a href="#/review/' + ch.id + '"><span>Chapter ' + ch.number + '</span><span class="today__n">' + d.due + ' due</span></a></li>';
    }).join('');
    var mk = mistakeKeys().length;
    var hist = store.get('examHistory', []);
    var lastExam = hist[0];
    var nDrugs = (SP.drugs || []).length, nNT = (SP.nts || []).length, nT = (SP.targets || []).length;
    var todayPanel =
      '<section class="wrap home-section today" aria-labelledby="today-h">' +
        '<div class="today__main">' +
          '<h2 id="today-h">Today’s review</h2>' +
          '<p class="today__big"><span>' + s.due + '</span> ' + (s.due === 1 ? 'card' : 'cards') + ' due' + (s.newToday ? ' and <span>' + s.newToday + '</span> new' : '') + '</p>' +
          '<p class="today__sub">Spaced repetition brings each card back just before you are likely to forget it. Rate every card honestly and the schedule takes care of the rest.</p>' +
          '<a class="btn btn--solid" href="#/review">' + (s.due + s.newToday ? 'Start review' : 'Open review') + '</a>' +
          '<ul class="today__chapters">' + perCh + '</ul>' +
        '</div>' +
        '<div class="tools">' +
          '<a class="tool" href="#/exam"><span class="tool__name">Board-style exam</span><span class="tool__meta">' + (lastExam ? 'Last score ' + pct(lastExam.score, lastExam.total) + '%' : 'Timed questions from the chapters you choose') + '</span></a>' +
          '<a class="tool" href="#/mistakes"><span class="tool__name">Mistakes</span><span class="tool__meta">' + (mk ? plural(mk, 'question') + ' to revisit' : 'Questions you miss collect here') + '</span></a>' +
          '<a class="tool c-drug" href="#/drugs"><span class="tool__name">Drug database</span><span class="tool__meta">' + (nDrugs ? plural(nDrugs, 'agent') + ' so far' : 'Fills in from Chapter 2 onward') + '</span></a>' +
          '<a class="tool c-mech" href="#/nt"><span class="tool__name">Neurotransmitters</span><span class="tool__meta">' + plural(nNT, 'messenger') + ', ' + plural(nT, 'target') + '</span></a>' +
        '</div>' +
      '</section>';

    var unseen = unseenNews(), upd = updatedChapters();
    var newsStrip = unseen.length
      ? '<div class="wrap news-strip-wrap"><a class="news-strip" href="#/whats-new"><span class="news-strip__tag">New</span><span class="news-strip__text">' + esc(unseen[0].title) + (unseen.length > 1 ? ' and ' + plural(unseen.length - 1, 'more update') : '') + '</span><span class="news-strip__go">See what changed</span></a></div>'
      : '';
    var rows = plannedChapters().map(function (m) {
      if (!m.ready) {
        return '<li><a class="chapter-row is-soon" href="#/soon/' + m.id + '"><span class="chapter-row__num" aria-hidden="true">' + m.number + '</span>' +
          '<div><h3><span class="sr-only">Chapter ' + m.number + ': </span>' + esc(m.title) + ' <span class="soon-tag">Coming soon</span></h3><p>' + esc(m.summary) + '</p></div><span></span></a></li>';
      }
      var ch = chapter(m.id);
      var keys = [];
      DECKS.forEach(function (d) { keys = keys.concat(deckKeys(ch, d.key)); });
      var t = tallyKeys(keys);
      var started = t.total - t.fresh;
      return '<li><a class="chapter-row" href="#/c/' + ch.id + '/guide">' +
        '<span class="chapter-row__num" aria-hidden="true">' + ch.number + '</span>' +
        '<div><h3><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + (upd[ch.id] ? ' <span class="upd">Updated</span>' : '') + '</h3><p>' + esc(ch.summary) + '</p>' +
        '<div class="chapter-row__stats"><span><b>' + sectionCount(ch) + '</b> guide sections</span><span><b>' + hyCount(ch) + '</b> high-yield points</span><span><b>' + t.total + '</b> cards and questions</span><span>Book pp. ' + esc(ch.pages) + '</span></div></div>' +
        '<div class="meter"><div class="meter__label">' + t.mastered + ' mastered, ' + started + ' started</div><div class="meter__bar"><span style="width:' + pct(t.mastered, t.total) + '%"></span><span class="meter__learn" style="width:' + pct(t.learning, t.total) + '%"></span></div></div>' +
        '</a></li>';
    }).join('');

    var html =
      '<section class="hero"><div class="wrap hero__grid">' +
        '<div><p class="hero__kicker">Essential Psychopharmacology, 5th edition</p><h1>Stahl, one chapter at a time</h1>' +
        '<p class="hero__lede">Study guides, high-yield summaries, flashcards, board-style questions and linked drug, neurotransmitter and receptor databases for psychiatry residents, built chapter by chapter from Stahl’s Essential Psychopharmacology.</p>' +
        '<div class="hero__actions">' + cont + '<a class="btn" href="#/library">Open the reference library</a></div></div>' +
        '<nav class="bloom" aria-label="Study modes for Chapter ' + focus.number + '">' +
          '<p class="bloom__for">Chapter ' + focus.number + ': <a href="#/c/' + focus.id + '/guide">' + esc(focus.short || focus.title) + '</a></p>' +
          '<div class="bloom__art">' + budSVG() + branchSVG(chapterModes(focus).length) + '</div><ul class="spectrum">' + spectrum + '</ul>' +
        '</nav>' +
      '</div></section>' +
      newsStrip + todayPanel +
      '<section class="wrap home-section"><h2>Chapters</h2><ul class="chapter-list">' + rows + '</ul></section>' +
      '<section class="wrap home-section"><h2>Reference library</h2><div class="tools tools--lib">' +
        LIBRARY.map(function (l) { return '<a class="tool tool--lib c-' + l.css + '" href="' + l.href + '"><span class="tool__name">' + esc(l.label) + '</span><span class="tool__meta">' + esc(l.blurb) + '</span></a>'; }).join('') +
      '</div></section>' +
      '<section class="wrap home-section"><h2>How to study a chapter</h2><div class="howto">' +
        '<div><h3>Read the study guide</h3><p>Work through it once, end to end. Tap any dotted term for its definition, and follow drug and receptor links into the library.</p></div>' +
        '<div><h3>Test yourself on high yield</h3><p>Switch on “Hide key facts” and recall each blank before you tap it. Print the one-page summary for the night before.</p></div>' +
        '<div><h3>Review a little every day</h3><p>Do the day’s due cards, sit a timed exam each week, and clear your mistakes pile. Progress stays on this device.</p></div>' +
      '</div></section>';
    setView('home', html);
    document.title = APP;
  }

  /* ---------- library hub ---------- */
  function renderLibrary() {
    var counts = { drugs: (SP.drugs || []).length, nt: (SP.nts || []).length, targets: (SP.targets || []).length, circuits: (SP.circuits || []).length, glossary: (SP.glossary || []).length, updates: collectUpdates().length, nbn: (SP.drugs || []).filter(function (d) { return d.nbn; }).length, compare: (SP.drugs || []).length };
    var unit = { drugs: 'agent', nt: 'messenger', targets: 'target', circuits: 'symptom map', glossary: 'term', updates: 'update', nbn: 'mapped agent', compare: 'agent' };
    var html = '<div class="wrap page"><header class="page__head"><h1>Reference library</h1><p>Cross-linked databases that grow as each chapter is added. Every entry cites the chapter and book pages it comes from; anything from outside the book is boxed as a post-publication update.</p></header>' +
      '<div class="tools tools--lib">' + LIBRARY.map(function (l) {
        return '<a class="tool tool--lib c-' + l.css + '" href="' + l.href + '"><span class="tool__name">' + esc(l.label) + '</span><span class="tool__meta">' + esc(l.blurb) + '</span><span class="tool__ch">' + plural(counts[l.key] || 0, unit[l.key]) + (l.key === 'compare' ? ' to compare' : '') + '</span></a>';
      }).join('') + '</div></div>';
    setView('library', html);
    document.title = 'Reference library — ' + APP;
  }

  /* ---------- chapter header ---------- */
  function chapterHead(ch, active) {
    var tabs = chapterModes(ch).map(function (m) {
      var on = m.key === active;
      return '<a class="mode c-' + m.css + (on ? ' is-active' : '') + '" href="' + modeHref(ch, m) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        esc(m.short) + (m.deck ? '<span class="mode__count">' + (ch[m.key] || []).length + '</span>' : '') + '</a>';
    }).join('');
    var all = plannedChapters(), idx = -1;
    all.forEach(function (m, i) { if (m.id === ch.id) idx = i; });
    var prev = all[idx - 1], next = all[idx + 1];
    function chLink(m, dir) {
      if (!m) return '<span class="chnav__btn is-off" aria-hidden="true"></span>';
      var href = m.ready ? '#/c/' + m.id + '/' + (active === 'handout' ? 'handout' : (modeBy(active) && !modeBy(active).deck ? active : 'guide')) : '#/soon/' + m.id;
      return '<a class="chnav__btn" href="' + href + '" title="Chapter ' + m.number + ': ' + esc(m.short) + '"><span aria-hidden="true">' + (dir < 0 ? '‹' : '›') + '</span><span class="sr-only">' + (dir < 0 ? 'Previous' : 'Next') + ' chapter: </span><span class="chnav__lbl">Ch ' + m.number + '</span></a>';
    }
    var menu = '<details class="chnav__menu"><summary>All chapters</summary><ol>' + all.map(function (m) {
      return '<li><a href="' + (m.ready ? '#/c/' + m.id + '/guide' : '#/soon/' + m.id) + '" class="' + (m.id === ch.id ? 'is-current' : '') + (m.ready ? '' : ' is-soon') + '"><span>' + m.number + '</span>' + esc(m.short) + (m.ready ? '' : ' <em>soon</em>') + '</a></li>';
    }).join('') + '</ol></details>';
    return '<header class="ch-head"><div class="wrap ch-head__inner">' +
      '<div class="chnav" role="navigation" aria-label="Chapters">' + chLink(prev, -1) + menu + chLink(next, 1) + '</div>' +
      '<div class="ch-head__title"><span class="ch-num" aria-hidden="true">' + ch.number + '</span><div><h1><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + '</h1><p class="ch-head__pages">Book pages ' + esc(ch.pages) + '</p></div></div>' +
      '</div><nav class="modes wrap" aria-label="Study modes">' + tabs + '</nav></header>';
  }

  /* ---------- study guide ---------- */
  function blockHTML(b, id) {
    var cls = 'g-block' + (b.type === 'table' && b.wide ? ' is-wide' : '');
    var open = '<div class="' + cls + '" id="' + id + '">';
    var close = '</div>';
    switch (b.type) {
      case 'p': return '<p class="g-block" id="' + id + '">' + fmt(b.text) + '</p>';
      case 'h': return '<h4 class="g-block" id="' + id + '">' + fmt(b.text) + '</h4>';
      case 'list':
        var tag = b.ordered ? 'ol' : 'ul';
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<' + tag + (b.cols ? ' class="cols"' : '') + '>' +
          b.items.map(function (it) { return '<li>' + fmt(it) + '</li>'; }).join('') + '</' + tag + '>' + close;
      case 'defs':
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<dl class="defs">' +
          b.items.map(function (d) { return '<dt>' + fmt(d[0]) + '</dt><dd>' + fmt(d[1]) + '</dd>'; }).join('') + '</dl>' + close;
      case 'callout':
        var titles = { pearl: 'Clinical pearl', exam: 'Exam tip', caution: 'Watch for', analogy: 'Stahl’s analogy', mnemonic: 'Memory hook', key: 'Take-home point' };
        return '<aside class="g-block callout callout--' + b.kind + '" id="' + id + '"><p class="callout__title">' + esc(b.title || titles[b.kind]) + '</p><p>' + fmt(b.text) + '</p></aside>';
      case 'update':
        return '<aside class="g-block update-box" id="' + id + '"><p class="update-box__tag">Post-publication update' + (b.year ? ' · ' + esc(b.year) : '') + '</p>' +
          (b.title ? '<p class="update-box__title">' + fmt(b.title) + '</p>' : '') + '<p>' + fmt(b.text) + '</p>' +
          '<p class="update-box__note">Not from the 2021 book. ' + (b.source ? 'Source: ' + fmt(b.source) + '. ' : '') + 'Confirm against current labeling.</p></aside>';
      case 'flow':
        return '<figure class="g-block flow' + (b.vertical ? ' flow--v' : '') + '" id="' + id + '">' + (b.title ? '<figcaption class="flow__title">' + fmt(b.title) + '</figcaption>' : '') +
          '<ol class="flow__steps">' + b.steps.map(function (s, i) {
            return '<li class="flow__step"' + (s[2] ? ' style="--c:var(--m-' + s[2] + ')"' : '') + '><span class="flow__n">' + (b.labels ? esc(b.labels[i]) : (i + 1)) + '</span><b>' + fmt(s[0]) + '</b>' + (s[1] ? '<span>' + fmt(s[1]) + '</span>' : '') + '</li>';
          }).join('') + '</ol>' + (b.note ? '<p class="flow__note">' + fmt(b.note) + '</p>' : '') + '</figure>';
      case 'compare':
        return '<div class="g-block compare-cards" id="' + id + '">' + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<div class="compare-cards__grid">' + b.items.map(function (it) {
          return '<div class="cmp-card"' + (it.color ? ' style="--c:var(--m-' + it.color + ')"' : '') + '><p class="cmp-card__t">' + fmt(it.title) + '</p><ul>' + it.points.map(function (pt) { return '<li>' + fmt(pt) + '</li>'; }).join('') + '</ul></div>';
        }).join('') + '</div></div>';
      case 'case':
        return '<figure class="g-block case" id="' + id + '"><figcaption>' + fmt(b.title) + '</figcaption><p>' + fmt(b.text) + '</p>' +
          (b.point ? '<p class="case__point"><b>Teaching point:</b> ' + fmt(b.point) + '</p>' : '') + '</figure>';
      case 'table':
        var head = b.head ? '<thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + fmt(h) + '</th>'; }).join('') + '</tr></thead>' : '';
        var body = '<tbody>' + b.rows.map(function (r) {
          if (typeof r === 'string') return '<tr class="table-group"><td colspan="' + (b.head ? b.head.length : 2) + '">' + fmt(r) + '</td></tr>';
          return '<tr>' + r.map(function (c, i) { return i === 0 && b.rowHeads !== false ? '<th scope="row">' + fmt(c) + '</th>' : '<td>' + fmt(c) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody>';
        return open + '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(plain(b.caption || 'Table')) + '"><table>' +
          (b.caption ? '<caption>' + fmt(b.caption) + '</caption>' : '') + head + body + '</table>' +
          (b.note ? '<p class="table-note">' + fmt(b.note) + '</p>' : '') + '</div>' + close;
      case 'timeline':
        var g = '<div class="timeline__grid"><span></span>' + b.cols.map(function (c) { return '<span class="timeline__head">' + esc(c) + '</span>'; }).join('');
        b.rows.forEach(function (r) {
          g += '<span class="timeline__label">' + esc(r.label) + '</span>' +
            '<span class="timeline__bar c-' + r.color + '" style="grid-column:' + (r.from + 2) + ' / ' + (r.to + 2) + '">' + esc(r.bar) + '</span>';
          if (r.from > 0) { /* fill grid cells before the bar */ }
          if (r.note) g += '<span class="timeline__note">' + fmt(r.note) + '</span>';
        });
        return '<div class="g-block timeline" id="' + id + '">' + (b.title ? '<p class="timeline__title">' + fmt(b.title) + '</p>' : '') + g + '</div></div>';
      case 'steps':
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<ol class="steps">' +
          b.items.map(function (s) { return '<li><b>' + fmt(s[0]) + '</b>' + fmt(s[1]) + '</li>'; }).join('') + '</ol>' + close;
      default: return '';
    }
  }

  function blockText(b) {
    switch (b.type) {
      case 'p': case 'h': return plain(b.text);
      case 'list': return plain((b.title || '') + ' ' + b.items.join(' '));
      case 'defs': return plain((b.title || '') + ' ' + b.items.map(function (d) { return d[0] + ': ' + d[1]; }).join(' '));
      case 'callout': return plain((b.title || '') + ' ' + b.text);
      case 'case': return plain(b.title + ' ' + b.text + ' ' + (b.point || ''));
      case 'table': return plain((b.caption || '') + ' ' + (b.head || []).join(' ') + ' ' + b.rows.map(function (r) { return typeof r === 'string' ? r : r.join(' '); }).join(' '));
      case 'timeline': return plain((b.title || '') + ' ' + b.rows.map(function (r) { return r.label + ' ' + r.bar + ' ' + (r.note || ''); }).join(' '));
      case 'steps': return plain((b.title || '') + ' ' + b.items.map(function (s) { return s[0] + ' ' + s[1]; }).join(' '));
      case 'update': return plain('Post-publication update ' + (b.title || '') + ' ' + b.text);
      case 'flow': return plain((b.title || '') + ' ' + b.steps.map(function (s) { return s[0] + ' ' + (s[1] || ''); }).join(' ') + ' ' + (b.note || ''));
      case 'compare': return plain((b.title || '') + ' ' + b.items.map(function (it) { return it.title + ' ' + it.points.join(' '); }).join(' '));
    }
    return '';
  }

  function tocHTML(ch) {
    var n = 0;
    return ch.guide.parts.map(function (pt) {
      return '<p class="toc__part">' + esc(pt.title) + '</p><ol>' + pt.sections.map(function (s) {
        n++;
        return '<li><a href="#/c/' + ch.id + '/guide/' + s.id + '" data-sec="' + s.id + '"><span class="toc__n">' + ch.number + '.' + n + '</span><span>' + esc(s.title) + '</span></a></li>';
      }).join('') + '</ol>';
    }).join('');
  }

  function renderGuide(ch, target) {
    var key = 'guide:' + ch.id;
    if (view.key === key) { focusTarget(target); return; }
    var n = 0;
    var body = ch.guide.parts.map(function (pt, pi) {
      return '<div class="g-part"><p>Part ' + (pi + 1) + '</p><h2>' + esc(pt.title) + '</h2></div>' +
        pt.sections.map(function (s) {
          n++;
          var bk = 'g:' + ch.id + '/' + s.id;
          return '<section class="g-sec" id="' + s.id + '" aria-labelledby="' + s.id + '-h"><div class="g-sec__head"><h3 id="' + s.id + '-h"><span class="g-n">' + ch.number + '.' + n + '</span><span>' + esc(s.title) + '</span></h3>' +
            bookmarkBtn(bk, '#/c/' + ch.id + '/guide/' + s.id, s.title, 'Chapter ' + ch.number + ' study guide') + '</div>' +
            (s.pages ? '<p class="g-pages">Book p' + (String(s.pages).match(/[–-]/) ? 'p' : '') + '. ' + esc(s.pages) + '</p>' : '') +
            s.blocks.map(function (b, i) { return blockHTML(b, s.id + '--' + i); }).join('') + '</section>';
        }).join('');
    }).join('');
    var g = ch.guide;
    var intro = '<p class="reading__intro">' + fmt(g.intro) + '</p>' +
      (g.objectives ? '<div class="objectives"><h2>By the end of this chapter you should be able to</h2><ul>' + g.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></div>' : '');
    var html = chapterHead(ch, 'guide') +
      '<div class="wrap guide">' +
        '<nav class="toc" aria-label="Chapter sections">' + tocHTML(ch) + '</nav>' +
        '<div class="reading">' +
          '<div class="toc-mobile"><details><summary>Jump to a section</summary><nav class="toc" aria-label="Chapter sections">' + tocHTML(ch) + '</nav></details></div>' +
          intro + body +
        '</div>' +
      '</div>';
    setView(key, html, focusTarget);
    bindBookmarks(main);
    document.title = 'Ch ' + ch.number + ' study guide — Stahl Study Companion';
    main.querySelectorAll('.reading__intro, .objectives, .g-sec').forEach(function (s) { linkTerms(s); });

    // close the mobile TOC after choosing a section
    main.querySelectorAll('.toc-mobile a').forEach(function (a) {
      a.addEventListener('click', function () { var d = a.closest('details'); if (d) d.open = false; });
    });

    // scrollspy
    if ('IntersectionObserver' in window) {
      var links = main.querySelectorAll('.toc a[data-sec]');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle('is-current', a.getAttribute('data-sec') === e.target.id); });
          }
        });
      }, { rootMargin: '-' + (headerH() + 10) + 'px 0px -70% 0px' });
      main.querySelectorAll('.g-sec').forEach(function (s) { io.observe(s); });
      view.cleanup = function () { io.disconnect(); };
    }
    if (target) setTimeout(function () { focusTarget(target); }, 30);
  }

  function headerH() { var t = document.querySelector('.topbar'); return t ? t.offsetHeight : 64; }

  function focusTarget(target) {
    if (!target) return;
    var el = document.getElementById(target);
    if (!el) return;
    var tocm = main.querySelector('.toc-mobile');
    var extra = tocm && getComputedStyle(tocm).display !== 'none' ? tocm.offsetHeight : 0;
    var y = el.getBoundingClientRect().top + window.pageYOffset - headerH() - extra - 24;
    window.scrollTo({ top: y, behavior: reduceMotion() ? 'auto' : 'smooth' });
    if (target.indexOf('--') > -1) {
      el.classList.add('is-flash');
      setTimeout(function () { el.classList.remove('is-flash'); }, 1800);
    }
  }


  /* ---------- high yield ---------- */
  function renderHY(ch, target) {
    var key = 'hy:' + ch.id;
    if (view.key === key) { focusTarget(target); return; }
    var quiz = store.get('hyQuiz', false);
    var topics = (ch.highYield || []).map(function (t) {
      return '<section class="hy-topic" id="' + t.id + '"><h2>' + esc(t.topic) + '</h2><ul>' +
        t.items.map(function (it, i) { return '<li id="' + t.id + '--' + i + '">' + fmt(it) + '</li>'; }).join('') + '</ul></section>';
    }).join('');
    var html = chapterHead(ch, 'high-yield') +
      '<div class="wrap hy-page' + (quiz ? ' quiz-on' : '') + '">' +
        '<div class="hy-tools"><label class="switch"><input type="checkbox" id="hy-quiz"' + (quiz ? ' checked' : '') + '> Hide key facts</label>' +
        '<p>With key facts hidden, each bold fact becomes a blank. Say the answer, then tap the blank to check.</p>' +
        '<a class="btn hy-tools__print" href="#/c/' + ch.id + '/handout">Printable summary</a></div>' +
        '<div class="hy-grid">' + topics + '</div>' +
      '</div>';
    setView(key, html, focusTarget);
    document.title = 'Ch ' + ch.number + ' high yield — Stahl Study Companion';
    main.querySelectorAll('.hy-topic').forEach(function (t) { linkTerms(t, { skip: 'strong' }); });
    var page = main.querySelector('.hy-page');
    var toggle = main.querySelector('#hy-quiz');
    function applyQuiz(on) {
      page.classList.toggle('quiz-on', on);
      page.querySelectorAll('.hy-topic strong').forEach(function (s) {
        s.classList.remove('is-revealed');
        if (on) { s.setAttribute('tabindex', '0'); s.setAttribute('role', 'button'); s.setAttribute('aria-label', 'Hidden fact, press to reveal'); }
        else { s.removeAttribute('tabindex'); s.removeAttribute('role'); s.removeAttribute('aria-label'); }
      });
    }
    applyQuiz(quiz);
    toggle.addEventListener('change', function () { store.set('hyQuiz', toggle.checked); applyQuiz(toggle.checked); });
    function reveal(s) { s.classList.toggle('is-revealed'); if (s.classList.contains('is-revealed')) s.removeAttribute('aria-label'); }
    page.addEventListener('click', function (e) {
      var s = e.target.closest('strong');
      if (s && page.classList.contains('quiz-on')) reveal(s);
    });
    page.addEventListener('keydown', function (e) {
      var s = e.target.closest && e.target.closest('strong');
      if (s && page.classList.contains('quiz-on') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); reveal(s); }
    });
    if (target) setTimeout(function () { focusTarget(target); }, 30);
  }


  /* ---------- card player (decks, daily review, mistakes) ----------
     o.queue    array of card keys (mutated when o.consume is true)
     o.consume  true: rated cards leave the queue (Again puts them back a few cards later)
     o.mode     'srs' rates with Again/Hard/Good/Easy; 'mistakes' clears a case when answered correctly
     o.source   show the chapter and deck on each card
     o.done     function(stats) returning the end-of-session HTML
     o.after    called after every change (to refresh tallies) */
  var LETTERS = 'ABCDE';
  function Player(area, o) {
    var st = { pos: o.pos || 0, flipped: false, chosen: null };
    var stats = { rated: 0, again: 0, right: 0, wrong: 0, cleared: 0 };

    function cur() { return CARDS[o.queue[st.pos]]; }
    function statusLabel(key) {
      var s = SRS[key];
      if (!s) return 'New';
      if (s.d <= today()) return 'Due';
      return cardStatus(key) === 'mastered' ? 'Mastered' : 'Learning';
    }

    function draw() {
      if (o.after) o.after();
      if (!o.queue.length || st.pos >= o.queue.length) {
        area.innerHTML = o.done(stats);
        var again = area.querySelector('[data-restart]');
        if (again) again.addEventListener('click', function () { st.pos = 0; st.flipped = false; st.chosen = null; draw(); });
        var rr = area.querySelector('[data-rerender]');
        if (rr) rr.addEventListener('click', function () { route(); });
        return;
      }
      var r = cur(), c = r.c, key = r.key, isCase = !!c.choices;
      var front, back;
      if (isCase) {
        front = '<p class="face__q">' + fmt(c.q) + '</p><ul class="choices">' + c.choices.map(function (ch2, i) {
          return '<li><button class="choice" type="button" data-choice="' + i + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + '</span></button></li>';
        }).join('') + '</ul><p class="face__hint">Choose an answer to turn the card.</p>';
        var right = st.chosen === c.answer;
        var verdict = st.chosen == null ? '<p class="verdict">Answer</p>' :
          '<p class="verdict ' + (right ? 'is-right">Correct' : 'is-wrong">Not quite. You chose ' + LETTERS[st.chosen]) + '</p>';
        back = verdict + '<p class="face__recap">' + fmt(c.q) + '</p>' + choiceList(c.choices, c.answer, st.chosen) + '<p class="face__why">' + fmt(c.why) + '</p>';
      } else {
        front = '<p class="face__q">' + fmt(c.q) + '</p><p class="face__hint">Tap the card or press Space to see the answer.</p>';
        back = '<p class="face__q face__q--small">' + fmt(c.q) + '</p><p class="face__a">' + fmt(c.a) + '</p>' + (c.why ? '<p class="face__why">' + fmt(c.why) + '</p>' : '');
      }
      var src = o.source ? '<span class="face__src">Ch ' + r.ch.number + ', ' + esc(r.deck.short) + '</span>' : '';
      var top = '<div class="face__top"><span class="face__tag c-' + r.deck.css + '">' + esc(c.tag || r.deck.short) + '</span>' + src + '<span class="face__status">' + esc(o.mode === 'mistakes' ? 'Missed ' + plural((MISTAKES[key] || { n: 1 }).n, 'time') : statusLabel(key)) + '</span></div>';

      var controls;
      if (!st.flipped) {
        controls = '<button class="btn btn--solid" type="button" id="flip">' + (isCase ? 'Show answer' : 'Flip card') + '</button>';
      } else if (o.mode === 'mistakes') {
        var ok = st.chosen === c.answer;
        controls = '<p class="cleared ' + (ok ? 'is-right' : 'is-wrong') + '">' + (ok ? 'Cleared from your mistakes.' : 'This question stays in your mistakes.') + '</p><button class="btn btn--solid" type="button" id="next-m">Next question</button>';
      } else {
        var s = SRS[key];
        var suggest = isCase && st.chosen != null ? (st.chosen === c.answer ? 3 : 1) : 0;
        controls = '<div class="rate" role="group" aria-label="How well did you know this?">' + [[1, 'Again'], [2, 'Hard'], [3, 'Good'], [4, 'Easy']].map(function (g) {
          return '<button class="btn rate__b rate__b--' + g[0] + (suggest === g[0] ? ' is-suggested' : '') + '" type="button" data-rate="' + g[0] + '"><span>' + g[1] + '</span><small>' + ivLabel(srsNext(s, g[0]).i) + '</small></button>';
        }).join('') + '</div>';
      }
      var canPrev = !o.consume && st.pos > 0;
      var canNext = !o.consume && st.pos < o.queue.length - 1;
      area.innerHTML =
        '<div class="stage"><div class="flashcard' + (st.flipped ? ' is-flipped' : '') + '" id="fc" tabindex="0" role="group" aria-roledescription="flashcard" aria-label="Card ' + (st.pos + 1) + ' of ' + o.queue.length + (st.flipped ? ', answer side' : ', question side') + '">' +
          '<div class="face face--front c-' + r.deck.css + '"' + (st.flipped ? ' aria-hidden="true"' : '') + '>' + top + front + '</div>' +
          '<div class="face face--back c-' + r.deck.css + '"' + (st.flipped ? '' : ' aria-hidden="true"') + '>' + top + back + '</div>' +
        '</div></div>' +
        '<div class="card-nav">' +
          (o.consume ? '<span class="card-nav__pos">' + plural(o.queue.length - st.pos, 'card') + ' left</span>' :
            '<button class="btn" type="button" id="prev"' + (canPrev ? '' : ' disabled') + '>Previous</button><span class="card-nav__pos">Card ' + (st.pos + 1) + ' of ' + o.queue.length + '</span>') +
          '<div class="card-nav__main">' + controls + '</div>' +
          (o.consume ? '' : '<button class="btn" type="button" id="next"' + (canNext ? '' : ' disabled') + '>Next</button>') +
        '</div>';
      area.querySelectorAll('.face').forEach(function (f) { linkTerms(f, { skip: '.choice, .face__top, .verdict' }); });

      var fc = area.querySelector('#fc');
      fc.addEventListener('click', function (e) {
        if (e.target.closest('.gl')) return;
        var b = e.target.closest('[data-choice]');
        if (b) { choose(parseInt(b.getAttribute('data-choice'), 10)); return; }
        if (isCase && !st.flipped) return;
        if (o.mode === 'mistakes' && st.flipped) return;
        flip();
      });
      bind('#prev', function () { go(-1); });
      bind('#next', function () { go(1); });
      bind('#flip', function () { if (isCase && !st.flipped) { st.flipped = true; st.chosen = null; draw(); refocus(); } else flip(); });
      bind('#next-m', advanceMistake);
      area.querySelectorAll('[data-rate]').forEach(function (b) { b.addEventListener('click', function () { rate(parseInt(b.getAttribute('data-rate'), 10)); }); });
    }
    function choiceList(choices, answer, chosen) {
      return '<ul class="choices choices--static">' + choices.map(function (ch2, i) {
        var cls = i === answer ? ' is-correct' : (i === chosen ? ' is-wrong' : '');
        var note = i === answer ? '<span class="choice__note">Correct answer</span>' : (i === chosen ? '<span class="choice__note">Your answer</span>' : '');
        return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + note + '</span></div></li>';
      }).join('') + '</ul>';
    }
    function bind(sel, fn) { var el = area.querySelector(sel); if (el) el.addEventListener('click', fn); }
    function flip() { st.flipped = !st.flipped; draw(); refocus(); }
    function choose(i) {
      var r = cur(); st.chosen = i; st.flipped = true;
      var ok = i === r.c.answer;
      if (ok) stats.right++; else stats.wrong++;
      if (o.mode === 'mistakes') {
        if (ok) { clearMistake(r.key); stats.cleared++; rateCard(r.key, 3); }
        else { addMistake(r.key, 'mistakes'); rateCard(r.key, 1); }
      } else if (!ok) addMistake(r.key, 'cards');
      draw(); refocus();
    }
    function go(d) {
      var np = st.pos + d;
      if (np < 0 || np >= o.queue.length) return;
      st.pos = np; st.flipped = false; st.chosen = null; draw(); refocus();
    }
    function rate(g) {
      var r = cur(); if (!r) return;
      rateCard(r.key, g);
      stats.rated++; if (g === 1) stats.again++;
      st.flipped = false; st.chosen = null;
      if (o.consume) {
        var k = o.queue.splice(st.pos, 1)[0];
        if (g === 1) o.queue.splice(Math.min(st.pos + 4, o.queue.length), 0, k);
      } else {
        st.pos++;
      }
      draw(); refocus();
    }
    function advanceMistake() {
      st.flipped = false; st.chosen = null;
      o.queue.splice(st.pos, 1);
      draw(); refocus();
    }
    function refocus() { var fc = area.querySelector('#fc'); if (fc) fc.focus({ preventScroll: true }); }

    function onKey(e) {
      if (e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var r = cur(); if (!r) return;
      var c = r.c, k = e.key;
      if (k === ' ' || k === 'Enter') {
        if (e.target.closest && e.target.closest('button, a, .gl') && e.target.id !== 'fc') return;
        if (o.mode === 'mistakes' && st.flipped) { e.preventDefault(); advanceMistake(); return; }
        if (c.choices && !st.flipped) return;
        e.preventDefault(); flip();
      } else if (k === 'ArrowRight') {
        if (o.mode === 'mistakes' && st.flipped) { e.preventDefault(); advanceMistake(); }
        else if (!o.consume) { e.preventDefault(); go(1); }
      } else if (k === 'ArrowLeft' && !o.consume) { e.preventDefault(); go(-1); }
      else if (c.choices && !st.flipped && /^[a-e]$/i.test(k)) {
        var i = 'abcde'.indexOf(k.toLowerCase()); if (i < c.choices.length) { e.preventDefault(); choose(i); }
      } else if (st.flipped && o.mode !== 'mistakes' && /^[1-4]$/.test(k)) { e.preventDefault(); rate(parseInt(k, 10)); }
    }
    document.addEventListener('keydown', onKey);
    draw();
    return { destroy: function () { document.removeEventListener('keydown', onKey); }, redraw: draw };
  }

  function tallyHTML(t, label) {
    var tot = t.total || 1;
    return '<span><b>' + t.fresh + '</b> new</span><span><b>' + t.learning + '</b> learning</span><span><b>' + t.mastered + '</b> mastered</span>' +
      '<div class="tally__bar" role="img" aria-label="' + esc(label || '') + ' ' + t.mastered + ' mastered and ' + t.learning + ' learning out of ' + t.total + '"><span class="tally__known" style="width:' + (t.mastered / tot * 100) + '%"></span><span class="tally__learn" style="width:' + (t.learning / tot * 100) + '%"></span></div>' +
      '<span><b>' + t.due + '</b> due today</span>';
  }
  function kbdHelp(cases) {
    return '<p class="kbd-help"><kbd>Space</kbd> flip' + (cases ? ' <kbd>A</kbd>\u2013<kbd>E</kbd> answer' : '') + ' <kbd>1</kbd>\u2013<kbd>4</kbd> rate Again, Hard, Good, Easy</p>';
  }

  /* ---------- deck view ---------- */
  var deckSessions = {};
  function renderCards(ch, deckKey, cardId) {
    var deck = modeBy(deckKey);
    if (!deck || !deck.deck) return renderMissing();
    var keys = deckKeys(ch, deck.key);
    var sKey = ch.id + '/' + deck.key;
    var prefs = store.get('deckPrefs', { mode: 'study' });
    if (prefs.mode !== 'study' && prefs.mode !== 'order' && prefs.mode !== 'shuffle') prefs.mode = 'study';
    var S = deckSessions[sKey] || (deckSessions[sKey] = { mode: prefs.mode, queue: null, pos: 0 });

    function build() {
      if (S.mode === 'study') {
        var due = keys.filter(isDue).sort(function (a, b) { return SRS[a].d - SRS[b].d; });
        var fresh = keys.filter(function (k) { return !SRS[k]; });
        S.queue = due.concat(fresh);
      } else if (S.mode === 'shuffle') S.queue = shuffle(keys.slice());
      else S.queue = keys.slice();
      S.pos = 0;
    }
    if (cardId) {
      var want = sKey + '/' + cardId;
      if (keys.indexOf(want) > -1) { S.mode = 'order'; S.queue = keys.slice(); S.pos = keys.indexOf(want); }
    } else if (!S.queue) build();

    var key = 'cards:' + sKey;
    var html = chapterHead(ch, deck.key) +
      '<div class="wrap cards-page c-' + deck.css + '">' +
        '<div class="deck-bar"><div class="deck-bar__opts">' +
          '<label class="select"><span>Show</span><select id="opt-mode">' +
            '<option value="study"' + (S.mode === 'study' ? ' selected' : '') + '>Due and new cards</option>' +
            '<option value="order"' + (S.mode === 'order' ? ' selected' : '') + '>All cards in order</option>' +
            '<option value="shuffle"' + (S.mode === 'shuffle' ? ' selected' : '') + '>All cards, shuffled</option>' +
          '</select></label>' +
        '</div><div class="deck-bar__right">' + (deck.key === 'cases' ? '<a class="btn btn--small" href="#/teach" id="opt-teach">Present in teaching mode</a>' : '') + '<button class="link-btn" type="button" id="opt-reset">Reset this deck</button></div></div>' +
        '<div class="tally" id="tally"></div>' +
        '<div id="card-area" aria-live="polite"></div>' + kbdHelp(deck.key === 'cases') +
      '</div>';
    setView(key, html, null, { keepScroll: view.key === key });
    document.title = 'Ch ' + ch.number + ' ' + deck.label.toLowerCase() + ' — Stahl Study Companion';
    var tally = main.querySelector('#tally');
    var player;
    function start() {
      if (player) player.destroy();
      player = Player(main.querySelector('#card-area'), {
        queue: S.queue, pos: S.pos, consume: S.mode === 'study', mode: 'srs',
        after: function () { tally.innerHTML = tallyHTML(tallyKeys(keys), deck.label); },
        done: function (stats) {
          if (S.mode === 'study') {
            var t = tallyKeys(keys);
            return '<div class="empty"><h2>' + (stats.rated ? 'Deck done for today' : 'Nothing due in this deck') + '</h2><p>' +
              (stats.rated ? 'You reviewed ' + plural(stats.rated, 'card') + '. ' : '') + 'Cards come back when they are due. ' +
              (t.total - t.fresh ? 'Switch to \u201cAll cards\u201d to keep practicing.' : '') + '</p><a class="btn btn--solid" href="#/review">Go to daily review</a></div>';
          }
          return '<div class="empty"><h2>End of the deck</h2><p>You went through all ' + keys.length + ' cards.</p><button class="btn btn--solid" type="button" data-restart>Start again</button></div>';
        }
      });
    }
    start();
    main.querySelector('#opt-mode').addEventListener('change', function (e) {
      S.mode = e.target.value; store.set('deckPrefs', { mode: S.mode }); build(); start();
    });
    var tl = main.querySelector('#opt-teach');
    if (tl) tl.addEventListener('click', function () { var tp = teachPrefs(); tp.scope = ch.id; tp.kind = 'mcq'; store.set('teachPrefs', tp); });
    main.querySelector('#opt-reset').addEventListener('click', function () {
      if (!window.confirm('Clear the review schedule for every card in this deck? They will all become new cards again.')) return;
      keys.forEach(function (k) { delete SRS[k]; }); saveSRS(); updateNavBadges(); build(); start();
    });
    view.cleanup = function () { if (player) player.destroy(); };
  }

  /* ---------- daily review ---------- */
  function newCardsFor(scope) {
    var out = [];
    allChapters().forEach(function (ch) {
      if (scope !== 'all' && ch.id !== scope) return;
      var lists = DECKS.map(function (d) { return deckKeys(ch, d.key).filter(function (k) { return !SRS[k]; }); });
      var more = true, i = 0;
      while (more) { more = false; lists.forEach(function (l) { if (i < l.length) { out.push(l[i]); more = true; } }); i++; }
    });
    return out;
  }
  function renderReview(scopeArg) {
    var prefs = reviewPrefs();
    if (scopeArg) { prefs.scope = chapter(scopeArg) ? scopeArg : 'all'; store.set('reviewPrefs', prefs); }
    var scope = prefs.scope || 'all';
    if (scope !== 'all' && !chapter(scope)) scope = 'all';
    function inScope(r) { return scope === 'all' || r.ch.id === scope; }
    var due = CARD_LIST.filter(function (r) { return inScope(r) && isDue(r.key); }).map(function (r) { return r.key; });
    shuffle(due); due.sort(function (a, b) { return SRS[a].d - SRS[b].d; });
    var quota = Math.max(0, prefs.newPerDay - newSeenToday());
    var fresh = newCardsFor(scope).slice(0, quota);
    var queue = due.concat(fresh);
    var scopeOpts = '<option value="all"' + (scope === 'all' ? ' selected' : '') + '>All chapters</option>' + allChapters().map(function (ch) {
      return '<option value="' + ch.id + '"' + (scope === ch.id ? ' selected' : '') + '>Chapter ' + ch.number + '</option>';
    }).join('');
    var newOpts = [0, 10, 20, 40, 80].map(function (n) { return '<option value="' + n + '"' + (prefs.newPerDay === n ? ' selected' : '') + '>' + n + ' new a day</option>'; }).join('');
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Daily review</h1><p>Cards that are due come first, then new cards up to your daily limit. Rate how well you knew each one: <b>Again</b> brings it back in a few cards, <b>Hard</b>, <b>Good</b> and <b>Easy</b> push it further into the future.</p></header>' +
      '<div class="deck-bar"><div class="deck-bar__opts">' +
        '<label class="select"><span>Chapters</span><select id="rv-scope">' + scopeOpts + '</select></label>' +
        '<label class="select"><span>New cards</span><select id="rv-new">' + newOpts + '</select></label>' +
      '</div><span class="deck-bar__count">' + plural(due.length, 'due card') + ', ' + plural(fresh.length, 'new card') + '</span></div>' +
      '<div id="card-area" aria-live="polite"></div>' + kbdHelp(true) + '</div>';
    setView('review:' + scope, html);
    document.title = 'Daily review — Stahl Study Companion';
    var player = Player(main.querySelector('#card-area'), {
      queue: queue, consume: true, mode: 'srs', source: true,
      done: function (stats) {
        var next = null;
        CARD_LIST.forEach(function (r) { if (inScope(r) && SRS[r.key] && SRS[r.key].d > today() && (next === null || SRS[r.key].d < next)) next = SRS[r.key].d; });
        var when = next === null ? '' : 'Your next cards are due ' + (next - today() === 1 ? 'tomorrow' : 'in ' + (next - today()) + ' days') + '. ';
        var remainingNew = newCardsFor(scope).length;
        return '<div class="empty"><h2>' + (stats.rated ? 'Review complete' : 'Nothing due right now') + '</h2><p>' +
          (stats.rated ? 'You reviewed ' + plural(stats.rated, 'card') + (stats.again ? ' and marked ' + stats.again + ' to see again' : '') + '. ' : '') + when +
          (remainingNew && !quota ? 'You have reached today’s new-card limit; raise it above to keep going.' : '') + '</p>' +
          '<div class="empty__actions"><a class="btn btn--solid" href="#/exam">Take a practice exam</a><a class="btn" href="#/mistakes">Review mistakes</a></div></div>';
      }
    });
    view.cleanup = function () { player.destroy(); };
    main.querySelector('#rv-scope').addEventListener('change', function (e) {
      var p = reviewPrefs(); p.scope = e.target.value; store.set('reviewPrefs', p);
      var target = '#/review' + (e.target.value === 'all' ? '' : '/' + e.target.value);
      if (location.hash === target) renderReview(); else location.hash = target;
    });
    main.querySelector('#rv-new').addEventListener('change', function (e) { var p = reviewPrefs(); p.newPerDay = parseInt(e.target.value, 10); store.set('reviewPrefs', p); updateNavBadges(); renderReview(); });
  }

  /* ---------- mistakes ---------- */
  function renderMistakes() {
    var keys = mistakeKeys();
    var list = keys.map(function (k) {
      var r = CARDS[k];
      return '<li class="mk"><div class="mk__meta"><span class="kind c-case">Ch ' + r.ch.number + ', ' + esc(r.c.tag || 'Case') + '</span><span>Missed ' + plural(MISTAKES[k].n, 'time') + '</span></div>' +
        '<p class="mk__q">' + esc(plain(r.c.q)) + '</p><button class="link-btn" type="button" data-remove="' + esc(k) + '">Remove</button></li>';
    }).join('');
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Mistakes</h1><p>Every board question you answer incorrectly, in the decks, daily review or an exam, lands here. Answer it correctly to clear it.</p></header>' +
      (keys.length ? '<div class="deck-bar"><span class="deck-bar__count">' + plural(keys.length, 'question') + ' to revisit</span><button class="link-btn" type="button" id="mk-clear">Clear all mistakes</button></div><div id="card-area" aria-live="polite"></div>' +
        '<details class="mk-list"><summary>See all ' + plural(keys.length, 'missed question') + '</summary><ul>' + list + '</ul></details>'
        : '<div class="empty"><h2>No mistakes yet</h2><p>Questions you get wrong will collect here so you can come back to them.</p><div class="empty__actions"><a class="btn btn--solid" href="#/exam">Take a practice exam</a><a class="btn" href="#/review">Daily review</a></div></div>') +
      '</div>';
    setView('mistakes', html);
    document.title = 'Mistakes — Stahl Study Companion';
    if (!keys.length) return;
    var queue = shuffle(keys.slice());
    var player = Player(main.querySelector('#card-area'), {
      queue: queue, consume: true, mode: 'mistakes', source: true,
      done: function (stats) {
        var left = mistakeKeys().length;
        return '<div class="empty"><h2>' + (left ? 'Round finished' : 'Mistakes cleared') + '</h2><p>You cleared ' + plural(stats.cleared, 'question') + (left ? '; ' + plural(left, 'question') + ' still to revisit.' : '.') + '</p>' +
          (left ? '<button class="btn btn--solid" type="button" data-rerender>Go again</button>' : '<a class="btn btn--solid" href="#/exam">Take a practice exam</a>') + '</div>';
      }
    });
    view.cleanup = function () { player.destroy(); };
    main.querySelector('#mk-clear').addEventListener('click', function () {
      if (!window.confirm('Remove every case from your mistakes?')) return;
      MISTAKES = {}; saveMistakes(); renderMistakes();
    });
    main.querySelectorAll('[data-remove]').forEach(function (b) {
      b.addEventListener('click', function () { clearMistake(b.getAttribute('data-remove')); b.closest('li').remove(); });
    });
  }

  /* ---------- exam mode ---------- */
  var SECS_PER_Q = 90;
  function caseKeys(chIds) {
    var out = [];
    chIds.forEach(function (id) { var ch = chapter(id); if (ch) out = out.concat(deckKeys(ch, 'cases')); });
    return out;
  }
  function renderExamSetup() {
    var chs = allChapters();
    var active = store.get('exam', null);
    var hist = store.get('examHistory', []);
    var prefs = store.get('examPrefs', { chapters: chs.map(function (c) { return c.id; }), count: 20, timed: true });
    var html = '<div class="wrap page exam-setup">' +
      '<header class="page__head"><h1>Board-style exam</h1><p>Single-best-answer board questions drawn at random from the chapters you choose. Answer choices are shuffled. Timed exams allow ' + SECS_PER_Q + ' seconds per question, about board pace.</p></header>' +
      (active ? '<div class="banner"><p>You have an exam in progress: ' + plural(active.items.length, 'question') + ', ' + active.items.filter(function (x) { return x.a != null; }).length + ' answered.</p><div class="empty__actions"><a class="btn btn--solid" href="#/exam/run">Resume exam</a><button class="btn" type="button" id="ex-discard">Discard it</button></div></div>' : '') +
      '<form class="exam-form" id="ex-form" onsubmit="return false">' +
        '<fieldset><legend>Chapters</legend>' + chs.map(function (ch) {
          return '<label class="check"><input type="checkbox" name="ch" value="' + ch.id + '"' + (prefs.chapters.indexOf(ch.id) > -1 ? ' checked' : '') + '> Chapter ' + ch.number + ': ' + esc(ch.short || ch.title) + ' <span class="muted">(' + (ch.cases || []).length + ' questions)</span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Questions</legend><div class="seg">' + [10, 20, 40, 0].map(function (n) {
          return '<label><input type="radio" name="count" value="' + n + '"' + (prefs.count === n ? ' checked' : '') + '><span>' + (n ? n : 'All') + '</span></label>';
        }).join('') + '</div></fieldset>' +
        '<fieldset><legend>Timing</legend><div class="seg">' +
          '<label><input type="radio" name="timed" value="1"' + (prefs.timed ? ' checked' : '') + '><span>Timed</span></label>' +
          '<label><input type="radio" name="timed" value="0"' + (!prefs.timed ? ' checked' : '') + '><span>Untimed</span></label>' +
        '</div></fieldset>' +
        '<p class="exam-form__sum" id="ex-sum"></p>' +
        '<button class="btn btn--solid" type="button" id="ex-start">Start exam</button>' +
      '</form>' +
      (hist.length ? '<section class="exam-hist"><h2>Past exams</h2><div class="table-wrap"><table><thead><tr><th scope="col">Date</th><th scope="col">Chapters</th><th scope="col">Score</th><th scope="col">Time</th><th scope="col"><span class="sr-only">Results</span></th></tr></thead><tbody>' +
        hist.map(function (h) {
          return '<tr><td>' + fmtDate(h.at) + '</td><td>' + h.chapters.map(function (id) { var c = chapter(id); return c ? c.number : id; }).join(', ') + '</td><td><b>' + pct(h.score, h.total) + '%</b> (' + h.score + '/' + h.total + ')</td><td>' + fmtClock(h.used) + '</td><td><a href="#/exam/results/' + h.id + '">Results</a></td></tr>';
        }).join('') + '</tbody></table></div></section>' : '') +
      '</div>';
    setView('exam', html);
    document.title = 'Exam — Stahl Study Companion';
    var form = main.querySelector('#ex-form');
    function read() {
      var sel = Array.prototype.map.call(form.querySelectorAll('input[name=ch]:checked'), function (i) { return i.value; });
      var count = parseInt(form.querySelector('input[name=count]:checked').value, 10);
      var timed = form.querySelector('input[name=timed]:checked').value === '1';
      var pool = caseKeys(sel).length;
      var n = count ? Math.min(count, pool) : pool;
      return { chapters: sel, count: count, timed: timed, n: n, pool: pool };
    }
    function summary() {
      var r = read();
      main.querySelector('#ex-sum').textContent = r.pool ? plural(r.n, 'question') + ' from ' + plural(r.chapters.length, 'chapter') + (r.timed ? ', ' + fmtClock(r.n * SECS_PER_Q) + ' on the clock.' : ', no time limit.') : 'Choose at least one chapter.';
      main.querySelector('#ex-start').disabled = !r.pool;
    }
    form.addEventListener('change', summary); summary();
    main.querySelector('#ex-start').addEventListener('click', function () {
      var r = read(); if (!r.pool) return;
      if (store.get('exam', null) && !window.confirm('Starting a new exam discards the one in progress. Continue?')) return;
      store.set('examPrefs', { chapters: r.chapters, count: r.count, timed: r.timed });
      var picks = shuffle(caseKeys(r.chapters)).slice(0, r.n);
      var exam = {
        id: 'e' + Date.now().toString(36), at: Date.now(), chapters: r.chapters, timed: r.timed,
        limit: r.timed ? r.n * SECS_PER_Q : 0, cur: 0,
        items: picks.map(function (k) { return { k: k, o: shuffle(CARDS[k].c.choices.map(function (_, i) { return i; })), a: null, f: false }; })
      };
      store.set('exam', exam);
      location.hash = '#/exam/run';
    });
    var dis = main.querySelector('#ex-discard');
    if (dis) dis.addEventListener('click', function () { if (window.confirm('Discard the exam in progress?')) { store.del('exam'); renderExamSetup(); } });
  }

  function renderExamRun() {
    var ex = store.get('exam', null);
    if (!ex) { location.hash = '#/exam'; return; }
    ex.items = ex.items.filter(function (it) { return CARDS[it.k]; });
    var timer = null;
    var html = '<div class="wrap page exam-run">' +
      '<div class="exam-bar"><span class="exam-bar__pos" id="ex-pos"></span><span class="exam-bar__clock" id="ex-clock" role="timer" aria-live="off"></span>' +
        '<button class="btn" type="button" id="ex-flag" aria-pressed="false">Flag</button><button class="btn btn--solid" type="button" id="ex-submit">Submit<span class="lg"> exam</span></button></div>' +
      '<div class="exam-grid"><div class="exam-q" id="ex-q" aria-live="polite"></div><nav class="exam-nav" aria-label="Questions"><p class="exam-nav__title">Questions</p><div id="ex-nav" class="exam-nav__grid"></div>' +
        '<p class="exam-nav__key"><span class="dot dot--answered"></span>Answered <span class="dot dot--flag"></span>Flagged</p></nav></div></div>';
    setView('exam-run', html);
    document.title = 'Exam in progress — Stahl Study Companion';
    function save() { store.set('exam', ex); }
    function remaining() { return ex.limit - (Date.now() - ex.at) / 1000; }
    function draw() {
      var it = ex.items[ex.cur], r = CARDS[it.k], c = r.c;
      main.querySelector('#ex-pos').innerHTML = '<span class="lg">Question </span>' + (ex.cur + 1) + ' of ' + ex.items.length;
      var flag = main.querySelector('#ex-flag');
      flag.setAttribute('aria-pressed', String(it.f)); flag.textContent = it.f ? 'Flagged' : 'Flag';
      main.querySelector('#ex-q').innerHTML =
        '<p class="exam-q__meta">Chapter ' + r.ch.number + '</p><p class="exam-q__stem">' + fmt(c.q) + '</p>' +
        '<ul class="choices" role="radiogroup" aria-label="Answer choices">' + it.o.map(function (orig, i) {
          var on = it.a === orig;
          return '<li><button class="choice' + (on ? ' is-picked' : '') + '" type="button" role="radio" aria-checked="' + on + '" data-pick="' + orig + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + '</span></button></li>';
        }).join('') + '</ul>' +
        '<div class="card-nav"><button class="btn" type="button" id="ex-prev"' + (ex.cur ? '' : ' disabled') + '>Previous</button>' +
        '<button class="btn btn--solid" type="button" id="ex-next">' + (ex.cur < ex.items.length - 1 ? 'Next' : 'Review and submit') + '</button></div>';
      linkTerms(main.querySelector('.exam-q__stem'));
      main.querySelector('#ex-nav').innerHTML = ex.items.map(function (x, i) {
        return '<button type="button" class="qn' + (x.a != null ? ' is-answered' : '') + (x.f ? ' is-flagged' : '') + (i === ex.cur ? ' is-current' : '') + '" data-go="' + i + '" aria-label="Question ' + (i + 1) + (x.a != null ? ', answered' : '') + (x.f ? ', flagged' : '') + '"' + (i === ex.cur ? ' aria-current="step"' : '') + '>' + (i + 1) + '</button>';
      }).join('');
      main.querySelectorAll('[data-pick]').forEach(function (b) {
        b.addEventListener('click', function () { it.a = parseInt(b.getAttribute('data-pick'), 10); save(); draw(); });
      });
      main.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { ex.cur = parseInt(b.getAttribute('data-go'), 10); save(); draw(); }); });
      main.querySelector('#ex-prev').addEventListener('click', function () { if (ex.cur) { ex.cur--; save(); draw(); } });
      main.querySelector('#ex-next').addEventListener('click', function () { if (ex.cur < ex.items.length - 1) { ex.cur++; save(); draw(); } else submit(false); });
    }
    function tick() {
      var el = main.querySelector('#ex-clock'); if (!el) return;
      if (!ex.limit) { el.textContent = 'Untimed, ' + fmtClock((Date.now() - ex.at) / 1000) + ' elapsed'; return; }
      var rem = remaining();
      el.innerHTML = fmtClock(rem) + '<span class="lg"> left</span>';
      el.classList.toggle('is-low', rem < 60);
      if (rem <= 0) submit(true);
    }
    function submit(expired) {
      if (!expired) {
        var open = ex.items.filter(function (x) { return x.a == null; }).length;
        var flagged = ex.items.filter(function (x) { return x.f; }).length;
        var msg = 'Submit the exam now?' + (open ? '\n' + plural(open, 'question') + ' unanswered.' : '') + (flagged ? '\n' + plural(flagged, 'question') + ' flagged.' : '');
        if (!window.confirm(msg)) return;
      }
      clearInterval(timer);
      var score = 0;
      ex.items.forEach(function (x) { if (x.a === CARDS[x.k].c.answer) score++; else addMistake(x.k, 'exam'); });
      var used = Math.round((Date.now() - ex.at) / 1000);
      if (ex.limit) used = Math.min(used, ex.limit);
      var rec = { id: ex.id, at: ex.at, chapters: ex.chapters, timed: ex.timed, limit: ex.limit, used: used, expired: !!expired, score: score, total: ex.items.length, items: ex.items.map(function (x) { return { k: x.k, o: x.o, a: x.a, f: x.f }; }) };
      var hist = store.get('examHistory', []);
      hist.unshift(rec); store.set('examHistory', hist.slice(0, 20));
      store.del('exam');
      location.hash = '#/exam/results/' + ex.id;
    }
    main.querySelector('#ex-flag').addEventListener('click', function () { var it = ex.items[ex.cur]; it.f = !it.f; save(); draw(); });
    main.querySelector('#ex-submit').addEventListener('click', function () { submit(false); });
    function onKey(e) {
      if (e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var it = ex.items[ex.cur];
      if (/^[a-e]$/i.test(e.key)) { var i = 'abcde'.indexOf(e.key.toLowerCase()); if (i < it.o.length) { e.preventDefault(); it.a = it.o[i]; save(); draw(); } }
      else if (e.key === 'ArrowRight' && ex.cur < ex.items.length - 1) { e.preventDefault(); ex.cur++; save(); draw(); }
      else if (e.key === 'ArrowLeft' && ex.cur > 0) { e.preventDefault(); ex.cur--; save(); draw(); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); it.f = !it.f; save(); draw(); }
    }
    document.addEventListener('keydown', onKey);
    draw(); tick();
    timer = setInterval(tick, 1000);
    view.cleanup = function () { clearInterval(timer); document.removeEventListener('keydown', onKey); };
  }

  function findExam(id) { var h = store.get('examHistory', []); for (var i = 0; i < h.length; i++) if (h[i].id === id) return h[i]; return null; }

  function renderExamResults(id) {
    var ex = findExam(id);
    if (!ex) { renderMissing(); return; }
    var items = ex.items.filter(function (x) { return CARDS[x.k]; });
    var byTopic = {}, byCh = {};
    items.forEach(function (x) {
      var r = CARDS[x.k], ok = x.a === r.c.answer;
      var t = 'Ch ' + r.ch.number + ', ' + (r.c.tag || 'General');
      (byTopic[t] = byTopic[t] || { n: 0, ok: 0 }).n++; if (ok) byTopic[t].ok++;
      var cKey = 'Chapter ' + r.ch.number + ': ' + (r.ch.short || r.ch.title);
      (byCh[cKey] = byCh[cKey] || { n: 0, ok: 0 }).n++; if (ok) byCh[cKey].ok++;
    });
    function rows(obj, sortWeak) {
      var ks = Object.keys(obj);
      if (sortWeak) ks.sort(function (a, b) { return obj[a].ok / obj[a].n - obj[b].ok / obj[b].n || obj[b].n - obj[a].n; });
      return ks.map(function (k) {
        var v = obj[k], p = pct(v.ok, v.n);
        return '<tr><th scope="row">' + esc(k) + '</th><td>' + v.ok + ' of ' + v.n + '</td><td class="bar-cell"><span class="score-bar"><span style="width:' + p + '%" class="' + (p >= 70 ? 'is-good' : p >= 50 ? 'is-mid' : 'is-low') + '"></span></span><span class="score-pct">' + p + '%</span></td></tr>';
      }).join('');
    }
    var missed = items.filter(function (x) { return x.a !== CARDS[x.k].c.answer; }).length;
    var p = pct(ex.score, ex.total);
    var html = '<div class="wrap page exam-results">' +
      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><h1>Exam results</h1><p>' + fmtDate(ex.at) + (ex.expired ? '. Time ran out and the exam was submitted automatically.' : '.') + '</p></header>' +
      '<div class="score"><p class="score__big">' + p + '<span>%</span></p><div><p class="score__line"><b>' + ex.score + ' of ' + ex.total + '</b> correct</p><p class="score__line">' + fmtClock(ex.used) + (ex.limit ? ' of ' + fmtClock(ex.limit) : '') + ' used, ' + fmtClock(ex.total ? ex.used / ex.total : 0) + ' per question</p></div></div>' +
      '<div class="empty__actions results-actions">' +
        (missed ? '<a class="btn btn--solid" href="#/exam/review/' + ex.id + '/missed">Review what I missed (' + missed + ')</a>' : '') +
        '<a class="btn' + (missed ? '' : ' btn--solid') + '" href="#/exam/review/' + ex.id + '/all">Review all questions</a>' +
        (missed ? '<a class="btn" href="#/mistakes">Practice mistakes</a>' : '') +
        '<a class="btn" href="#/exam">New exam</a></div>' +
      '<section class="results-sec"><h2>Score by topic</h2><p class="muted">Weakest first.</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Topic</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byTopic, true) + '</tbody></table></div></section>' +
      '<section class="results-sec"><h2>Score by chapter</h2><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Chapter</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byCh, false) + '</tbody></table></div></section>' +
      '</div>';
    setView('exam-results:' + id, html);
    document.title = 'Exam results — Stahl Study Companion';
  }

  function renderExamReview(id, which, n) {
    var ex = findExam(id);
    if (!ex) { renderMissing(); return; }
    var items = ex.items.filter(function (x) { return CARDS[x.k]; });
    var list = which === 'all' ? items : items.filter(function (x) { return x.a !== CARDS[x.k].c.answer; });
    if (!list.length) { location.hash = '#/exam/results/' + id; return; }
    n = Math.max(0, Math.min(n || 0, list.length - 1));
    var x = list[n], r = CARDS[x.k], c = r.c;
    var ok = x.a === c.answer;
    var choices = x.o.map(function (orig, i) {
      var cls = orig === c.answer ? ' is-correct' : (orig === x.a ? ' is-wrong' : '');
      var note = orig === c.answer ? '<span class="choice__note">Correct answer</span>' : (orig === x.a ? '<span class="choice__note">Your answer</span>' : '');
      return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + note + '</span></div></li>';
    }).join('');
    var base = '#/exam/review/' + id + '/' + which + '/';
    var html = '<div class="wrap page exam-review">' +
      '<header class="page__head"><p class="crumb"><a href="#/exam/results/' + id + '">Back to results</a></p><h1>' + (which === 'all' ? 'All questions' : 'Questions you missed') + '</h1></header>' +
      '<div class="exam-q review-q"><p class="exam-q__meta">Question ' + (n + 1) + ' of ' + list.length + ', Chapter ' + r.ch.number + ', ' + esc(c.tag || '') + '</p>' +
        '<p class="verdict ' + (ok ? 'is-right">Correct' : x.a == null ? 'is-wrong">Not answered' : 'is-wrong">Incorrect') + '</p>' +
        '<p class="exam-q__stem">' + fmt(c.q) + '</p><ul class="choices choices--static">' + choices + '</ul><p class="face__why">' + fmt(c.why) + '</p>' +
        '<div class="card-nav"><a class="btn' + (n ? '' : ' is-disabled') + '" ' + (n ? 'href="' + base + (n - 1) + '"' : 'aria-disabled="true"') + '>Previous</a>' +
        '<a class="btn btn--solid" href="' + (n < list.length - 1 ? base + (n + 1) : '#/exam/results/' + id) + '">' + (n < list.length - 1 ? 'Next' : 'Back to results') + '</a></div></div>' +
      '</div>';
    setView('exam-review:' + id + which + n, html);
    linkTerms(main.querySelector('.review-q'), { skip: '.choice, .verdict, .exam-q__meta' });
    document.title = 'Exam review — Stahl Study Companion';
  }

  /* ---------- glossary engine ----------
     Builds one regular expression from every glossary term so any rendered text can link terms
     to a tap-to-define popover. Very common words are left unlinked so pages stay readable. */
  var GL = null;
  var GL_STOP = ['neuron', 'synapse', 'receptor', 'neurotransmitter', 'gene', 'protein', 'enzyme', 'dopamine', 'serotonin',
    'norepinephrine', 'glutamate', 'gaba', 'acetylcholine', 'histamine', 'anxiety', 'depression', 'psychosis', 'mania',
    'schizophrenia', 'dementia', 'pain', 'sleep', 'insomnia', 'addiction', 'dna', 'rna', 'drug', 'agonist', 'antagonist', 'same', 'camp'];
  function buildGloss() {
    var list = (SP.glossary || []).map(function (g) { return { t: g[0], d: g[1], src: g[2] || null, slug: slug(g[0]) }; });
    list.sort(function (a, b) { return a.t.localeCompare(b.t, undefined, { sensitivity: 'base' }); });
    var map = {};
    list.forEach(function (e) { map[e.t.toLowerCase()] = e; });
    var aliases = SP.glossaryAliases || {};
    var stop = {};
    GL_STOP.forEach(function (w) { stop[w] = 1; });
    var forms = [];
    list.forEach(function (e) { if (!stop[e.t.toLowerCase()]) forms.push(e.t.toLowerCase()); });
    Object.keys(aliases).forEach(function (a) { if (map[aliases[a]]) forms.push(a.toLowerCase()); });
    forms.sort(function (a, b) { return b.length - a.length; });
    var alts = forms.map(function (f) { return escRe(f).replace(/\s+/g, '\\s+') + '(?:s|es)?'; }).join('|');
    GL = { list: list, map: map, aliases: aliases, re: alts ? new RegExp('(^|[^\\p{L}\\p{N}\\-])(' + alts + ')(?![\\p{L}\\p{N}\\-])', 'giu') : null };
  }
  function glossLookup(raw) {
    var s = raw.toLowerCase().replace(/\s+/g, ' ');
    var tries = [s, s.replace(/es$/, ''), s.replace(/s$/, ''), s.replace(/ies$/, 'y')];
    for (var i = 0; i < tries.length; i++) {
      var t = tries[i];
      if (GL.map[t]) return GL.map[t];
      if (GL.aliases[t] && GL.map[GL.aliases[t]]) return GL.map[GL.aliases[t]];
    }
    return null;
  }
  function glossOn() { return store.get('glLinks', true); }
  var GL_SKIP = 'a, button, mark, kbd, code, h1, h2, h3, h4, .gl, .choice__key, .kind, .face__tag, .g-n, .toc, caption';
  function linkTerms(root, opts) {
    if (!root || !glossOn()) return;
    if (!GL) buildGloss();
    if (!GL.re) return;
    var skip = GL_SKIP + (opts && opts.skip ? ', ' + opts.skip : '');
    var seen = {};
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest(skip)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var text = node.nodeValue, re = GL.re, m, last = 0, frag = null;
      re.lastIndex = 0;
      while ((m = re.exec(text))) {
        var start = m.index + m[1].length, word = m[2];
        var e = glossLookup(word);
        if (!e || seen[e.slug]) continue;
        seen[e.slug] = 1;
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(text.slice(last, start)));
        var sp = document.createElement('span');
        sp.className = 'gl'; sp.textContent = word;
        sp.setAttribute('role', 'button'); sp.setAttribute('tabindex', '0');
        sp.setAttribute('data-gl', e.slug);
        sp.setAttribute('aria-label', word + ', show definition');
        frag.appendChild(sp);
        last = start + word.length;
      }
      if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
  }
  function glossBySlug(s) { if (!GL) buildGloss(); for (var i = 0; i < GL.list.length; i++) if (GL.list[i].slug === s) return GL.list[i]; return null; }

  var glPop = null, glAnchor = null;
  function closeGloss() {
    if (glPop) glPop.hidden = true;
    if (glAnchor) { glAnchor.setAttribute('aria-expanded', 'false'); glAnchor = null; }
  }
  function openGloss(el) {
    var e = glossBySlug(el.getAttribute('data-gl'));
    if (!e) return;
    if (!glPop) {
      glPop = document.createElement('div');
      glPop.id = 'glpop'; glPop.className = 'glpop'; glPop.setAttribute('role', 'dialog'); glPop.hidden = true;
      document.body.appendChild(glPop);
      glPop.addEventListener('click', function (ev) {
        if (ev.target.closest('[data-close]')) { var a = glAnchor; closeGloss(); if (a) a.focus(); }
        else if (ev.target.closest('a')) closeGloss();
      });
    }
    if (glAnchor === el && !glPop.hidden) { closeGloss(); return; }
    closeGloss();
    glAnchor = el; el.setAttribute('aria-expanded', 'true');
    glPop.setAttribute('aria-label', 'Definition of ' + e.t);
    glPop.innerHTML = '<div class="glpop__head"><p class="glpop__t">' + esc(e.t) + '</p><button class="glpop__x" type="button" data-close aria-label="Close definition">\u00d7</button></div>' +
      '<p class="glpop__d">' + esc(e.d) + '</p><p class="glpop__foot"><span>' + (e.src ? 'Defined in ' + esc(e.src.replace('Ch ', 'Chapter ')) : 'Glossary') + '</span><a href="#/glossary/' + e.slug + '">Open in glossary</a></p>';
    glPop.hidden = false;
    var r = el.getBoundingClientRect();
    var w = Math.min(340, window.innerWidth - 24);
    glPop.style.width = w + 'px';
    var left = Math.max(12, Math.min(r.left + window.pageXOffset, window.pageXOffset + window.innerWidth - w - 12));
    var top = r.bottom + window.pageYOffset + 8;
    var ph = glPop.offsetHeight;
    if (r.bottom + ph + 16 > window.innerHeight && r.top - ph - 8 > headerH()) top = r.top + window.pageYOffset - ph - 8;
    glPop.style.left = left + 'px'; glPop.style.top = top + 'px';
  }
  document.addEventListener('click', function (ev) {
    var g = ev.target.closest && ev.target.closest('.gl');
    if (g) { ev.preventDefault(); ev.stopPropagation(); openGloss(g); return; }
    if (glPop && !glPop.hidden && !ev.target.closest('#glpop')) closeGloss();
  }, true);
  document.addEventListener('keydown', function (ev) {
    var g = ev.target.closest && ev.target.closest('.gl');
    if (g && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); ev.stopPropagation(); openGloss(g); return; }
    if (ev.key === 'Escape' && glPop && !glPop.hidden) { var a = glAnchor; closeGloss(); if (a) a.focus(); }
  }, true);
  window.addEventListener('resize', closeGloss);

  /* ---------- glossary page ---------- */
  function renderGlossary(target) {
    if (!GL) buildGloss();
    var letters = {};
    GL.list.forEach(function (e) { var L = e.t.charAt(0).toUpperCase(); (letters[L] = letters[L] || []).push(e); });
    var keys = Object.keys(letters).sort();
    var body = keys.map(function (L) {
      return '<section class="gloss__group" id="gl-' + L + '" data-letter="' + L + '"><h2>' + L + '</h2><dl>' + letters[L].map(function (e) {
        return '<div class="gloss__entry" id="g-' + e.slug + '" data-t="' + esc(e.t.toLowerCase()) + '"><dt>' + esc(e.t) + (e.src ? ' <span class="gloss__src">' + esc(e.src) + '</span>' : '') + '</dt><dd>' + esc(e.d) + '</dd></div>';
      }).join('') + '</dl></section>';
    }).join('');
    var bookN = GL.list.filter(function (e) { return !e.src; }).length;
    var html = '<div class="wrap page gloss">' +
      '<header class="page__head"><h1>Glossary</h1><p>' + GL.list.length + ' terms defined in the chapters, each tagged with its chapter. Definitions are written in this app’s own words from the book’s explanations. Dotted terms anywhere in the app open these definitions when tapped.</p></header>' +
      '<div class="gloss__tools"><label class="gloss__search"><span class="sr-only">Filter terms</span><input type="search" id="gl-q" placeholder="Filter terms, e.g. second messenger" autocomplete="off" spellcheck="false"></label>' +
        '<label class="switch"><input type="checkbox" id="gl-links"' + (glossOn() ? ' checked' : '') + '> Tap-to-define in text</label></div>' +
      '<nav class="az" aria-label="Jump to letter">' + keys.map(function (L) { return '<a href="#gl-' + L + '" data-az="' + L + '">' + L + '</a>'; }).join('') + '</nav>' +
      '<p class="gloss__count" id="gl-count" aria-live="polite"></p>' +
      '<div class="gloss__body">' + body + '</div></div>';
    var vkey = 'glossary';
    if (view.key !== vkey) {
      setView(vkey, html);
      document.title = 'Glossary — Stahl Study Companion';
      var q = main.querySelector('#gl-q'), count = main.querySelector('#gl-count');
      function filter() {
        var v = q.value.trim().toLowerCase(), shown = 0;
        main.querySelectorAll('.gloss__entry').forEach(function (el) {
          var hit = !v || el.getAttribute('data-t').indexOf(v) > -1 || (v.length > 3 && el.textContent.toLowerCase().indexOf(v) > -1);
          el.hidden = !hit; if (hit) shown++;
        });
        main.querySelectorAll('.gloss__group').forEach(function (g) { g.hidden = !g.querySelector('.gloss__entry:not([hidden])'); });
        count.textContent = v ? plural(shown, 'term') + ' match \u201c' + q.value.trim() + '\u201d' : plural(GL.list.length, 'term');
      }
      q.addEventListener('input', filter); filter();
      main.querySelector('#gl-links').addEventListener('change', function (e) { store.set('glLinks', e.target.checked); });
      main.querySelectorAll('[data-az]').forEach(function (a) {
        a.addEventListener('click', function (ev) { ev.preventDefault(); if (q.value) { q.value = ''; filter(); } var el = document.getElementById('gl-' + a.getAttribute('data-az')); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - headerH() - 12, behavior: reduceMotion() ? 'auto' : 'smooth' }); });
      });
    }
    if (target) {
      var el = document.getElementById('g-' + target);
      if (el) {
        var qi = main.querySelector('#gl-q'); if (qi.value) { qi.value = ''; qi.dispatchEvent(new Event('input')); }
        setTimeout(function () {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - headerH() - 24, behavior: 'auto' });
          el.classList.add('is-flash'); setTimeout(function () { el.classList.remove('is-flash'); }, 1800);
        }, 30);
      }
    }
  }

  /* ---------- diagnostic helpers ---------- */
  function helperBy(id) { var h = SP.helpers || []; for (var i = 0; i < h.length; i++) if (h[i].id === id) return h[i]; return null; }
  function renderHelpers() {
    var hs = (SP.helpers || []).slice().sort(function (x, y) {
      var a = chapter(x.chapter), b = chapter(y.chapter);
      return (a ? a.number : 99) - (b ? b.number : 99);
    });
    var html = '<div class="wrap page"><header class="page__head"><h1>Diagnostic helpers</h1><p>Step-by-step decision aids built from the chapters. Each one asks a few questions and shows the reasoning behind the likely diagnosis or workup.</p></header>' +
      '<ul class="helper-list">' + hs.map(function (h) {
        var ch = chapter(h.chapter);
        return '<li><a class="tool" href="#/helpers/' + h.id + '"><span class="tool__name">' + esc(h.title) + '</span><span class="tool__meta">' + esc(h.summary) + '</span>' + (ch ? '<span class="tool__ch">Chapter ' + ch.number + '</span>' : '') + '</a></li>';
      }).join('') + '</ul></div>';
    setView('helpers', html);
    document.title = 'Diagnostic helpers — Stahl Study Companion';
  }
  function renderHelper(id) {
    var h = helperBy(id);
    if (!h) return renderMissing();
    var path = [];   // [{node, opt}]
    var html = '<div class="wrap page helper"><header class="page__head"><p class="crumb"><a href="#/helpers">Diagnostic helpers</a></p><h1>' + esc(h.title) + '</h1><p>' + esc(h.summary) + '</p></header>' +
      '<div class="helper__grid"><div id="hp-main" aria-live="polite"></div><aside class="trail" aria-label="Your reasoning"><h2>Reasoning so far</h2><ol id="hp-trail"></ol><p class="trail__empty" id="hp-empty">Your answers and what they rule in or out will appear here.</p></aside></div>' +
      '<p class="helper__caution">' + esc(h.caution) + '</p></div>';
    setView('helper:' + id, html);
    document.title = h.title + ' — Stahl Study Companion';
    var area = main.querySelector('#hp-main'), trail = main.querySelector('#hp-trail'), empty = main.querySelector('#hp-empty');
    function current() { if (!path.length) return h.start; return path[path.length - 1].to; }
    function drawTrail() {
      trail.innerHTML = path.map(function (s, i) {
        return '<li><p class="trail__q">' + esc(h.nodes[s.node].q) + '</p><p class="trail__a">' + esc(s.label) + '</p><p class="trail__note">' + esc(s.note) + '</p>' +
          '<button class="link-btn" type="button" data-back="' + i + '">Change this answer</button></li>';
      }).join('');
      empty.hidden = !!path.length;
      trail.querySelectorAll('[data-back]').forEach(function (b) { b.addEventListener('click', function () { path = path.slice(0, parseInt(b.getAttribute('data-back'), 10)); draw(); }); });
    }
    function draw() {
      drawTrail();
      var cur = current();
      var nav = '<div class="helper__nav">' + (path.length ? '<button class="btn" type="button" id="hp-back">Back</button><button class="link-btn" type="button" id="hp-reset">Start over</button>' : '') + '</div>';
      if (cur.indexOf('r:') === 0) {
        var res = h.results[cur.slice(2)];
        var link = res.link ? '<a class="btn btn--solid" href="#/c/' + res.link.ch + '/guide/' + res.link.sec + '">Read: ' + esc(res.link.label) + '</a>' : '';
        area.innerHTML = '<div class="result-card"><p class="result-card__eyebrow">' + esc(res.label || 'Most likely') + '</p><h2>' + esc(res.dx) + '</h2><p class="result-card__line">' + esc(res.line) + '</p>' +
          '<h3>Why</h3><ul class="result-card__why">' + path.map(function (s) { return '<li>' + esc(s.note) + '</li>'; }).join('') + '</ul>' +
          '<h3>Next steps and points from the chapter</h3><ul>' + res.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
          '<div class="empty__actions">' + link + (res.also ? '<a class="btn" href="' + esc(res.also.href) + '">' + esc(res.also.label) + '</a>' : '') + '<a class="btn" href="#/c/' + h.chapter + '/cards/cases">Practice board questions</a></div></div>' + nav;
        linkTerms(area.querySelector('.result-card'), { skip: 'h2' });
      } else {
        var node = h.nodes[cur];
        area.innerHTML = '<div class="q-card"><p class="q-card__step">Question ' + (path.length + 1) + '</p><h2>' + esc(node.q) + '</h2>' + (node.help ? '<p class="q-card__help">' + esc(node.help) + '</p>' : '') +
          '<ul class="opts">' + node.options.map(function (o, i) { return '<li><button class="opt" type="button" data-opt="' + i + '">' + esc(o.label) + '</button></li>'; }).join('') + '</ul></div>' + nav;
        linkTerms(area.querySelector('.q-card__help'));
        area.querySelectorAll('[data-opt]').forEach(function (b) {
          b.addEventListener('click', function () {
            var o = node.options[parseInt(b.getAttribute('data-opt'), 10)];
            path.push({ node: cur, label: o.label, note: o.note, to: o.to });
            draw();
            var f = area.querySelector('.opt, .result-card h2'); if (f && f.focus) { if (f.tagName === 'H2') f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
            if (window.innerWidth < 900) window.scrollTo({ top: area.getBoundingClientRect().top + window.pageYOffset - headerH() - 12, behavior: reduceMotion() ? 'auto' : 'smooth' });
          });
        });
      }
      var bk = area.querySelector('#hp-back'); if (bk) bk.addEventListener('click', function () { path.pop(); draw(); });
      var rs = area.querySelector('#hp-reset'); if (rs) rs.addEventListener('click', function () { path = []; draw(); });
    }
    draw();
  }

  /* ---------- printable handout ----------
     One sheet per chapter built from the high-yield list. The font size is fitted automatically
     so the chosen topics fill exactly one page; "Fill-in worksheet" turns every bold fact into a blank. */
  var PAPER = { a4: { label: 'A4', w: '210mm', h: '296.5mm', page: 'A4' }, letter: { label: 'Letter', w: '8.5in', h: '10.97in', page: 'letter' } };
  var ATTRIBUTION = 'App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com';

  function renderHandout(ch) {
    if (!(ch.highYield || []).length) return renderMissing();
    var prefs = store.get('handoutPrefs', { paper: 'a4', mode: 'key', pages: 1 });
    if (!PAPER[prefs.paper]) prefs.paper = 'a4';
    var hyCount = 0; ch.highYield.forEach(function (t) { hyCount += t.items.length; });
    var MAX_PAGES = Math.min(ch.highYield.length, hyCount > 150 ? 4 : 2);
    if (!(prefs.pages >= 1 && prefs.pages <= MAX_PAGES)) prefs.pages = 1;
    prefs.pages = Math.round(prefs.pages);
    var MIN_PT = 6.5, autoTwo = false;
    var PAGE_WORDS = ['', 'one page', 'two pages', 'three pages', 'four pages'];
    var on = {};
    ch.highYield.forEach(function (t) { on[t.id] = true; });
    function seg(name, opts, cur) {
      return '<div class="seg" role="radiogroup">' + opts.map(function (o) {
        return '<label><input type="radio" name="' + name + '" value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
      }).join('') + '</div>';
    }
    var html = '<div class="wrap page handout-page">' +
      '<header class="page__head no-print"><p class="crumb"><a href="#/c/' + ch.id + '/high-yield">Chapter ' + ch.number + ' high yield</a></p><h1>Printable summary</h1>' +
        '<p>A print-ready sheet from the Chapter ' + ch.number + ' high-yield list. The type size adjusts automatically to fill the page; untick topics to make room or to focus a session.</p></header>' +
      '<div class="handout-tools no-print">' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Paper</span>' + seg('paper', [['a4', 'A4'], ['letter', 'Letter']], prefs.paper) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Version</span>' + seg('mode', [['key', 'Answer key'], ['blank', 'Fill-in worksheet']], prefs.mode) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Length</span>' + seg('pages', [[1, 'One page'], [2, MAX_PAGES > 2 ? 'Two pages' : 'Two pages (front and back)'], [3, 'Three pages'], [4, 'Four pages']].slice(0, MAX_PAGES), prefs.pages) + '</div>' +
        '<details class="handout-topics"><summary id="ho-sum"></summary><div class="handout-topics__list">' + ch.highYield.map(function (t) {
          return '<label class="check"><input type="checkbox" data-topic="' + t.id + '" checked> ' + esc(t.topic) + ' <span class="muted">(' + t.items.length + ')</span></label>';
        }).join('') + '</div></details>' +
        '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="ho-print">Print or save as PDF</button><p class="handout-fit" id="ho-fit" aria-live="polite"></p></div>' +
      '</div>' +
      '<div class="sheet-frame" id="ho-frame"><div class="sheets" id="ho-sheets"></div></div>' +
      '</div>';
    setView('handout:' + ch.id, html);
    document.title = 'Ch ' + ch.number + ' handout — Stahl Study Companion';
    document.body.classList.add('print-handout');
    var pageStyle = document.createElement('style');
    pageStyle.id = 'page-size';
    document.head.appendChild(pageStyle);
    var frame = main.querySelector('#ho-frame'), wrap = main.querySelector('#ho-sheets'), fitMsg = main.querySelector('#ho-fit'), printBtn = main.querySelector('#ho-print');

    function weight(t) { var n = 0; t.items.forEach(function (it) { n += plain(it).length + 40; }); return n + 60; }
    function split(topics, k) {
      // keep topic order; start a new sheet once the running total passes each equal share of the text
      k = Math.min(k, topics.length);
      if (k <= 1) return [topics];
      var total = 0; topics.forEach(function (t) { total += weight(t); });
      var groups = [[]], acc = 0;
      topics.forEach(function (t, i) {
        var w = weight(t), g = groups.length;
        var left = topics.length - i;           // topics still to place, including this one
        var need = k - g;                       // sheets still to open after the current one
        var cur = groups[g - 1];
        if (cur.length && g < k && (acc + w / 2 > total * g / k || left <= need)) { groups.push([t]); }
        else cur.push(t);
        acc += w;
      });
      return groups;
    }
    function sheetHTML(topics, idx, count) {
      var paper = PAPER[prefs.paper], blank = prefs.mode === 'blank';
      return '<div class="sheet' + (blank ? ' sheet--blank' : '') + '" style="width:' + paper.w + ';height:' + paper.h + '">' +
        '<header class="sheet__head"><div><p class="sheet__kicker">High-yield ' + (blank ? 'worksheet' : 'handout') + (count > 1 ? ', page ' + (idx + 1) + ' of ' + count : '') + '</p><h1>Chapter ' + ch.number + ': ' + esc(ch.title) + '</h1></div>' +
          '<p class="sheet__src">' + esc(BOOK) + (ch.pages ? ', pp. ' + esc(ch.pages) : '') + (blank && idx === 0 ? '<br>Name ____________________ Date __________' : '') + '</p></header>' +
        '<div class="sheet__body">' + (topics.length ? topics.map(function (t) {
          return '<section class="sheet__topic"><h2>' + esc(t.topic) + '</h2><ul>' + t.items.map(function (it) { return '<li>' + fmt(it) + '</li>'; }).join('') + '</ul></section>';
        }).join('') : '<p class="sheet__none">Choose at least one topic.</p>') + '</div>' +
        '<footer class="sheet__foot">' + esc(ATTRIBUTION) + '</footer></div>';
    }
    function build() {
      var paper = PAPER[prefs.paper];
      pageStyle.textContent = '@media print { @page { size: ' + paper.page + '; margin: 0; } }';
      var topics = ch.highYield.filter(function (t) { return on[t.id]; });
      var pages = Math.max(1, Math.min(prefs.pages, topics.length || 1));
      var groups = split(topics, pages);
      wrap.innerHTML = groups.map(function (g, i) { return sheetHTML(g, i, groups.length); }).join('');
      main.querySelector('#ho-sum').textContent = 'Topics: ' + topics.length + ' of ' + ch.highYield.length + ' included';
      fit(topics.length, pages);
      scale();
    }
    function overflows(body) { return body.scrollWidth > body.clientWidth + 1 || body.scrollHeight > body.clientHeight + 1; }
    function fitOne(body) {
      var lo = 4.5, hi = 11, best = lo;
      body.style.fontSize = hi + 'pt';
      if (!overflows(body)) return hi;
      for (var k = 0; k < 14; k++) {
        var mid = (lo + hi) / 2;
        body.style.fontSize = mid + 'pt';
        if (overflows(body)) hi = mid; else { best = mid; lo = mid; }
      }
      return best;
    }
    function fit(n, pages) {
      var bodies = wrap.querySelectorAll('.sheet__body');
      if (!n) { fitMsg.textContent = ''; printBtn.disabled = true; return; }
      var best = 11;
      bodies.forEach(function (b) { best = Math.min(best, fitOne(b)); });
      var size = Math.floor(best * 0.97 * 10) / 10;   // a little slack for printer rendering
      var bad = false;
      bodies.forEach(function (b) { b.style.fontSize = size + 'pt'; if (overflows(b)) bad = true; });
      var tooSmall = bad || size < MIN_PT;
      printBtn.disabled = tooSmall;
      fitMsg.className = 'handout-fit' + (tooSmall ? ' is-warn' : '');
      fitMsg.textContent = tooSmall
        ? 'Too long for ' + PAGE_WORDS[pages] + ' at a readable size. ' + (pages < MAX_PAGES ? 'Choose more pages, or untick a topic or two.' : 'Untick a topic or two.')
        : (autoTwo && pages > 1 ? 'This chapter is too long for one page at a readable size, so ' + PAGE_WORDS[pages] + ' are selected. ' : '') +
          'Fits on ' + PAGE_WORDS[pages] + ' at ' + size + ' pt.' + (autoTwo && pages > 1 ? ' Untick topics to use fewer pages.' : '');
    }
    function scale() {
      var sheets = wrap.querySelectorAll('.sheet');
      var avail = frame.clientWidth;
      if (!sheets.length) return;
      var w = sheets[0].offsetWidth, h = sheets[0].offsetHeight, gap = 24;
      var s = Math.min(1, avail / w);
      wrap.style.transform = s < 1 ? 'scale(' + s + ')' : '';
      frame.style.height = ((h + gap) * sheets.length - gap) * s + 'px';
    }
    main.querySelectorAll('input[name=paper], input[name=mode], input[name=pages]').forEach(function (i) {
      i.addEventListener('change', function () { if (i.name === 'pages') autoTwo = false; prefs[i.name] = i.name === 'pages' ? parseInt(i.value, 10) : i.value; store.set('handoutPrefs', prefs); build(); });
    });
    main.querySelectorAll('[data-topic]').forEach(function (i) {
      i.addEventListener('change', function () { on[i.getAttribute('data-topic')] = i.checked; build(); });
    });
    printBtn.addEventListener('click', function () { if (!printBtn.disabled) window.print(); });
    var onResize = function () { scale(); };
    window.addEventListener('resize', onResize);
    function initial() {
      build();
      while (printBtn.disabled && prefs.pages < MAX_PAGES) {
        prefs.pages += 1; autoTwo = true;
        var r = main.querySelector('input[name=pages][value="' + prefs.pages + '"]'); if (r) r.checked = true;
        build();
      }
    }
    initial();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (main.contains(wrap)) build(); });
    view.cleanup = function () {
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('print-handout');
      if (pageStyle.parentNode) pageStyle.parentNode.removeChild(pageStyle);
    };
  }

  /* ---------- teaching mode ----------
     A full-screen presentation of one case at a time for group discussion. Nothing here touches
     the review schedule or the mistakes pile. */
  function teachItems(scope, kind) {
    var out = [];
    allChapters().forEach(function (ch) {
      if (scope !== 'all' && ch.id !== scope) return;
      if (kind === 'mcq') {
        (ch.cases || []).forEach(function (c) { out.push({ id: ch.id + '/' + c.id, ch: ch, c: c }); });
      } else if (ch.guide) {
        ch.guide.parts.forEach(function (pt) {
          pt.sections.forEach(function (s) {
            s.blocks.forEach(function (b, i) {
              if (b.type === 'case') out.push({ id: ch.id + '/' + s.id + '--' + i, ch: ch, sec: s, title: String(b.title || 'Case').replace(/^(Chapter case|Clinical vignette):\s*/i, ''), text: b.text, point: b.point });
            });
          });
        });
      }
    });
    return out;
  }
  function teachPrefs() { return store.get('teachPrefs', { scope: 'all', kind: 'mcq', order: 'order' }); }

  function renderTeachSetup() {
    var prefs = teachPrefs();
    if (prefs.scope !== 'all' && !chapter(prefs.scope)) prefs.scope = 'all';
    var html = '<div class="wrap page teach-setup">' +
      '<header class="page__head"><h1>Teaching mode</h1><p>Present one case at a time, full screen, for ward rounds, journal club or a group session. Choices can be marked as the group votes; the answer stays hidden until you reveal it. Nothing here affects anyone’s review schedule or mistakes.</p></header>' +
      '<div class="exam-form">' +
        '<fieldset><legend>Chapter</legend><label class="select"><select id="t-scope"><option value="all"' + (prefs.scope === 'all' ? ' selected' : '') + '>All chapters</option>' +
          allChapters().map(function (ch) { return '<option value="' + ch.id + '"' + (prefs.scope === ch.id ? ' selected' : '') + '>Chapter ' + ch.number + ': ' + esc(ch.short || ch.title) + '</option>'; }).join('') + '</select></label></fieldset>' +
        '<fieldset><legend>Cases</legend><div class="seg">' +
          '<label><input type="radio" name="kind" value="mcq"' + (prefs.kind === 'mcq' ? ' checked' : '') + '><span>Board-style questions</span></label>' +
          '<label><input type="radio" name="kind" value="chapter"' + (prefs.kind === 'chapter' ? ' checked' : '') + '><span>Clinical vignettes</span></label></div>' +
          '<p class="muted teach-setup__hint" id="t-hint"></p></fieldset>' +
        '<fieldset><legend>Order</legend><div class="seg">' +
          '<label><input type="radio" name="order" value="order"' + (prefs.order === 'order' ? ' checked' : '') + '><span>In order</span></label>' +
          '<label><input type="radio" name="order" value="shuffle"' + (prefs.order === 'shuffle' ? ' checked' : '') + '><span>Shuffled</span></label></div></fieldset>' +
        '<button class="btn btn--solid" type="button" id="t-start">Start presenting</button>' +
      '</div>' +
      '<section class="teach-list"><h2 id="t-count"></h2><ol id="t-list"></ol></section></div>';
    setView('teach', html);
    document.title = 'Teaching mode — Stahl Study Companion';
    function read() {
      prefs.scope = main.querySelector('#t-scope').value;
      prefs.kind = main.querySelector('input[name=kind]:checked').value;
      prefs.order = main.querySelector('input[name=order]:checked').value;
      store.set('teachPrefs', prefs);
    }
    function list() {
      read();
      var items = teachItems(prefs.scope, prefs.kind);
      main.querySelector('#t-hint').textContent = prefs.kind === 'mcq'
        ? 'Board-style single-best-answer questions. Reveal shows the answer and its explanation.'
        : 'Short clinical vignettes from each study guide that apply the chapter\u2019s mechanisms. Reveal shows the teaching point.';
      main.querySelector('#t-count').textContent = plural(items.length, prefs.kind === 'mcq' ? 'question' : 'vignette');
      main.querySelector('#t-list').innerHTML = items.map(function (it, i) {
        var label = prefs.kind === 'mcq' ? plain(it.c.q) : it.title;
        var meta = 'Ch ' + it.ch.number + ', ' + (prefs.kind === 'mcq' ? (it.c.tag || 'Case') : it.sec.title);
        return '<li><button type="button" class="teach-item" data-start="' + i + '"><span class="teach-item__meta">' + esc(meta) + '</span><span class="teach-item__q">' + esc(label.length > 170 ? label.slice(0, 170) + '\u2026' : label) + '</span></button></li>';
      }).join('');
      main.querySelectorAll('[data-start]').forEach(function (b) { b.addEventListener('click', function () { start(parseInt(b.getAttribute('data-start'), 10)); }); });
    }
    function start(from) {
      read();
      var ids = teachItems(prefs.scope, prefs.kind).map(function (it) { return it.id; });
      if (!ids.length) return;
      var first = typeof from === 'number' ? ids[from] : null;
      if (prefs.order === 'shuffle') { shuffle(ids); if (first) { ids.splice(ids.indexOf(first), 1); ids.unshift(first); } }
      store.set('teach', { scope: prefs.scope, kind: prefs.kind, order: ids, pos: prefs.order === 'shuffle' || first === null ? 0 : from });
      enterFullscreen();
      location.hash = '#/teach/run';
    }
    main.querySelector('#t-scope').addEventListener('change', list);
    main.querySelectorAll('input[name=kind], input[name=order]').forEach(function (i) { i.addEventListener('change', list); });
    main.querySelector('#t-start').addEventListener('click', function () { start(null); });
    list();
  }

  function isFullscreen() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function enterFullscreen() {
    var el = document.documentElement;
    try { var r = (el.requestFullscreen || el.webkitRequestFullscreen).call(el); if (r && r.catch) r.catch(function () {}); } catch (e) { /* not supported */ }
  }
  function exitFullscreen() {
    try { if (isFullscreen()) { var r = (document.exitFullscreen || document.webkitExitFullscreen).call(document); if (r && r.catch) r.catch(function () {}); } } catch (e) {}
  }

  function renderTeachRun() {
    var S = store.get('teach', null);
    if (!S) { location.hash = '#/teach'; return; }
    var byId = {};
    teachItems(S.scope, S.kind).forEach(function (it) { byId[it.id] = it; });
    S.order = S.order.filter(function (id) { return byId[id]; });
    if (!S.order.length) { location.hash = '#/teach'; return; }
    S.pos = Math.max(0, Math.min(S.pos || 0, S.order.length - 1));
    var st = { revealed: false, picked: null };
    setView('teach-run', '<div class="teach" id="teach" role="region" aria-label="Teaching mode"></div>');
    document.title = 'Teaching mode — Stahl Study Companion';
    document.body.classList.add('is-teaching');
    var box = main.querySelector('#teach');

    function draw() {
      var it = byId[S.order[S.pos]];
      var mcq = S.kind === 'mcq';
      var meta = 'Chapter ' + it.ch.number + ', ' + (mcq ? (it.c.tag || 'Case') : it.sec.title);
      var body;
      if (mcq) {
        var c = it.c;
        body = '<p class="teach__stem">' + fmt(c.q) + '</p><ul class="teach__choices">' + c.choices.map(function (ch2, i) {
          var cls = st.revealed ? (i === c.answer ? ' is-correct' : (i === st.picked ? ' is-wrong' : ' is-dim')) : (i === st.picked ? ' is-picked' : '');
          return '<li><button type="button" class="tchoice' + cls + '" data-pick="' + i + '"' + (st.revealed ? ' disabled' : '') + ' aria-pressed="' + (i === st.picked) + '"><span class="tchoice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + '</span></button></li>';
        }).join('') + '</ul>' +
        (st.revealed ? '<div class="teach__answer"><p class="teach__label">Answer: ' + LETTERS[c.answer] + (st.picked == null ? '' : st.picked === c.answer ? ', the group got it' : ', the group chose ' + LETTERS[st.picked]) + '</p><p>' + fmt(c.why) + '</p></div>' : '');
      } else {
        body = '<h2 class="teach__title">' + esc(it.title) + '</h2><p class="teach__stem">' + fmt(it.text) + '</p>' +
          (st.revealed ? '<div class="teach__answer"><p class="teach__label">Teaching point</p><p>' + fmt(it.point || '') + '</p></div>' : '<p class="teach__prompt">What mechanism is at work, and what does this vignette teach?</p>');
      }
      box.innerHTML =
        '<div class="teach__bar"><span class="teach__meta">' + esc(meta) + '</span><span class="teach__pos">' + (mcq ? 'Question ' : 'Case ') + (S.pos + 1) + ' of ' + S.order.length + '</span>' +
          '<span class="teach__spacer"></span><button class="tbtn" type="button" id="t-fs">' + (isFullscreen() ? 'Exit full screen' : 'Full screen') + '</button><button class="tbtn" type="button" id="t-exit">Close</button></div>' +
        '<div class="teach__stage"><div class="teach__inner' + (st.revealed ? ' is-revealed' : '') + '">' + body + '</div></div>' +
        '<div class="teach__nav"><button class="tbtn" type="button" id="t-prev"' + (S.pos ? '' : ' disabled') + '>Previous</button>' +
          '<button class="tbtn tbtn--solid" type="button" id="t-reveal">' + (st.revealed ? 'Hide answer' : mcq ? 'Reveal answer' : 'Reveal teaching point') + '</button>' +
          '<button class="tbtn" type="button" id="t-next"' + (S.pos < S.order.length - 1 ? '' : ' disabled') + '>Next</button></div>' +
        '<p class="teach__keys" aria-hidden="true">Space reveal \u00b7 \u2190 \u2192 move \u00b7 ' + (mcq ? 'A\u2013E mark the group\u2019s answer \u00b7 ' : '') + 'F full screen \u00b7 Esc close</p>';
      linkTerms(box.querySelector('.teach__inner'), { skip: '.tchoice__key, .teach__label' });
      box.querySelectorAll('[data-pick]').forEach(function (b) {
        b.addEventListener('click', function () { var i = parseInt(b.getAttribute('data-pick'), 10); st.picked = st.picked === i ? null : i; draw(); });
      });
      box.querySelector('#t-reveal').addEventListener('click', toggle);
      box.querySelector('#t-prev').addEventListener('click', function () { go(-1); });
      box.querySelector('#t-next').addEventListener('click', function () { go(1); });
      box.querySelector('#t-exit').addEventListener('click', close);
      box.querySelector('#t-fs').addEventListener('click', function () { if (isFullscreen()) exitFullscreen(); else enterFullscreen(); });
      box.querySelector('.teach__stage').scrollTop = 0;
    }
    function toggle() { st.revealed = !st.revealed; draw(); var a = box.querySelector('.teach__answer'); if (a) a.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' }); }
    function go(d) {
      var np = S.pos + d; if (np < 0 || np >= S.order.length) return;
      S.pos = np; store.set('teach', S); st = { revealed: false, picked: null }; draw();
    }
    function close() { exitFullscreen(); location.hash = '#/teach'; }
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest && e.target.closest('.glpop')) return;
      var onBtn = e.target.closest && e.target.closest('button, a, .gl');
      if ((e.key === ' ' || e.key === 'Enter') && !onBtn) { e.preventDefault(); toggle(); }
      else if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); if (isFullscreen()) exitFullscreen(); else enterFullscreen(); }
      else if (e.key === 'Escape' && !isFullscreen() && !(glPop && !glPop.hidden)) { e.preventDefault(); close(); }
      else if (S.kind === 'mcq' && !st.revealed && /^[a-e]$/i.test(e.key)) {
        var i = 'abcde'.indexOf(e.key.toLowerCase()), c = byId[S.order[S.pos]].c;
        if (i < c.choices.length) { e.preventDefault(); st.picked = st.picked === i ? null : i; draw(); }
      }
    }
    function onFs() { var b = box.querySelector('#t-fs'); if (b) b.textContent = isFullscreen() ? 'Exit full screen' : 'Full screen'; }
    document.addEventListener('keydown', onKey);
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    draw();
    view.cleanup = function () {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('fullscreenchange', onFs);
      document.removeEventListener('webkitfullscreenchange', onFs);
      document.body.classList.remove('is-teaching');
    };
  }

  /* =====================================================================
     Reference library: drugs, neurotransmitters, targets, compare, circuits,
     nomenclature, post-publication updates, bookmarks and print-all.
     ===================================================================== */
  function byId(list, id) { list = list || []; for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function chRef(c) {
    var ch = typeof c === 'string' ? { ch: c } : c;
    var m = planned(ch.ch);
    if (!m) return '';
    var label = 'Ch ' + m.number + (ch.pages ? ', p' + (String(ch.pages).match(/[–-]/) ? 'p' : '') + '. ' + esc(ch.pages) : '');
    return m.ready ? '<a class="ref-chip" href="#/c/' + m.id + '/guide' + (ch.sec ? '/' + ch.sec : '') + '">' + label + '</a>' : '<span class="ref-chip">' + label + '</span>';
  }
  function factsHTML(facts) {
    if (!facts || !facts.length) return '';
    return '<ul class="facts">' + facts.map(function (f) { return '<li><span class="facts__txt">' + fmt(f.text) + '</span> ' + chRef(f) + '</li>'; }).join('') + '</ul>';
  }
  function updatesHTML(ups) {
    return (ups || []).map(function (u) { return blockHTML({ type: 'update', year: u.year, title: u.title, text: u.text, source: u.source }, ''); }).join('');
  }
  function libHead(crumbHref, crumbLabel, title, sub, extra) {
    return '<header class="page__head lib-head"><p class="crumb"><a href="#/library">Library</a>' + (crumbHref ? ' / <a href="' + crumbHref + '">' + esc(crumbLabel) + '</a>' : '') + '</p>' +
      '<div class="lib-head__row"><h1>' + title + '</h1>' + (extra || '') + '</div>' + (sub ? '<p>' + sub + '</p>' : '') + '</header>';
  }
  function emptyLib(what, when) {
    return '<div class="empty"><h2>No ' + esc(what) + ' yet</h2><p>' + esc(when) + '</p><div class="empty__actions"><a class="btn btn--solid" href="#/library">Back to the library</a></div></div>';
  }

  /* ---------- bookmarks ---------- */
  var BOOKMARKS = store.get('bookmarks', {});
  function bookmarkBtn(key, href, title, sub) {
    var on = !!BOOKMARKS[key];
    return '<button class="bm-btn' + (on ? ' is-on' : '') + '" type="button" data-bm="' + esc(key) + '" data-bm-href="' + esc(href) + '" data-bm-title="' + esc(title) + '" data-bm-sub="' + esc(sub || '') + '" aria-pressed="' + on + '" title="' + (on ? 'Remove bookmark' : 'Bookmark this') + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v16l-5-4-5 4z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg><span class="sr-only">Bookmark ' + esc(title) + '</span></button>';
  }
  function bindBookmarks(root) {
    root.querySelectorAll('[data-bm]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-bm');
        if (BOOKMARKS[k]) delete BOOKMARKS[k];
        else BOOKMARKS[k] = { href: b.getAttribute('data-bm-href'), title: b.getAttribute('data-bm-title'), sub: b.getAttribute('data-bm-sub'), t: Date.now() };
        store.set('bookmarks', BOOKMARKS);
        var on = !!BOOKMARKS[k];
        b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); b.title = on ? 'Remove bookmark' : 'Bookmark this';
      });
    });
  }
  function renderBookmarks() {
    var keys = Object.keys(BOOKMARKS).sort(function (a, b) { return BOOKMARKS[b].t - BOOKMARKS[a].t; });
    var html = '<div class="wrap page"><header class="page__head"><h1>Bookmarks</h1><p>Guide sections, drugs, neurotransmitters and targets you have bookmarked with the ribbon button. Saved on this device.</p></header>' +
      (keys.length ? '<ul class="bm-list">' + keys.map(function (k) {
        var b = BOOKMARKS[k];
        return '<li><a href="' + esc(b.href) + '"><span class="bm-list__sub">' + esc(b.sub) + '</span><span class="bm-list__t">' + esc(b.title) + '</span></a><button class="link-btn" type="button" data-unbm="' + esc(k) + '">Remove</button></li>';
      }).join('') + '</ul>' : '<div class="empty"><h2>No bookmarks yet</h2><p>Tap the ribbon beside any study-guide section or library entry to keep it here.</p></div>') + '</div>';
    setView('bookmarks', html);
    document.title = 'Bookmarks — ' + APP;
    main.querySelectorAll('[data-unbm]').forEach(function (b) {
      b.addEventListener('click', function () { delete BOOKMARKS[b.getAttribute('data-unbm')]; store.set('bookmarks', BOOKMARKS); renderBookmarks(); });
    });
  }

  /* ---------- action vocabulary (binding profiles) ---------- */
  var ACTIONS = {
    'inhibitor': { css: 'block', label: 'Inhibitor' }, 'antagonist': { css: 'block', label: 'Antagonist' }, 'blocker': { css: 'block', label: 'Blocker' },
    'inverse agonist': { css: 'block', label: 'Inverse agonist' },
    'agonist': { css: 'stim', label: 'Agonist' }, 'full agonist': { css: 'stim', label: 'Full agonist' }, 'releaser': { css: 'stim', label: 'Releaser' },
    'partial agonist': { css: 'partial', label: 'Partial agonist' },
    'modulator': { css: 'mod', label: 'Modulator' }, 'positive allosteric modulator': { css: 'mod', label: 'Positive allosteric modulator' },
    'negative allosteric modulator': { css: 'block', label: 'Negative allosteric modulator' }, 'substrate': { css: 'mod', label: 'Substrate' }, 'binds': { css: 'mod', label: 'Binds' }, 'inducer': { css: 'stim', label: 'Inducer' }
  };
  function actionOf(a) { return ACTIONS[(a || '').toLowerCase()] || { css: 'mod', label: a || 'Acts at' }; }
  function barHTML(x) {
    var a = actionOf(x.action), known = x.s != null;
    return '<span class="pbar pbar--' + a.css + (known ? '' : ' pbar--unk') + '" style="width:' + (known ? Math.max(1, Math.min(4, x.s)) * 25 : 100) + '%"' + (known ? '' : ' title="Relative strength not yet described"') + '></span>';
  }
  function targetName(id) { var t = byId(SP.targets, id); return t ? (t.short || t.name) : id; }
  function profileHTML(d) {
    if (!d.targets || !d.targets.length) return '';
    var rows = d.targets.slice().sort(function (a, b) { return (b.s || 0) - (a.s || 0); });
    return '<div class="profile" role="table" aria-label="Binding profile of ' + esc(d.name) + '">' + rows.map(function (t) {
      var a = actionOf(t.action);
      var tgt = byId(SP.targets, t.t);
      var name = tgt ? '<a href="#/targets/' + tgt.id + '">' + esc(tgt.short || tgt.name) + '</a>' : esc(t.t);
      return '<div class="profile__row" role="row"><span class="profile__t" role="rowheader">' + name + '</span>' +
        '<span class="profile__bar" role="cell">' + barHTML(t) + '</span>' +
        '<span class="profile__a" role="cell">' + esc(a.label) + (t.note ? '<small>' + fmt(t.note) + '</small>' : '') + '</span></div>';
    }).join('') + '<p class="profile__key"><span class="pkey pkey--block"></span>Blocks or inhibits <span class="pkey pkey--stim"></span>Stimulates <span class="pkey pkey--partial"></span>Partial agonist <span class="pkey pkey--mod"></span>Modulates. Bar length shows relative strength as the book describes it (longest = most potent action; for drugs for psychosis it follows the plus signs on the book’s binding strips, from + to ++++). Striped bars mean the strength has not been described yet.</p></div>';
  }

  /* ---------- drugs ---------- */
  function drugGroups() { var g = {}; (SP.drugs || []).forEach(function (d) { g[d.group || 'Other'] = 1; }); return Object.keys(g).sort(); }
  function renderDrugs() {
    var drugs = (SP.drugs || []).slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    var prefs = store.get('drugFilter', { g: 'all', t: 'all', q: '' });
    var groups = drugGroups();
    var tUsed = {}; drugs.forEach(function (d) { (d.targets || []).forEach(function (t) { tUsed[t.t] = 1; }); });
    var html = '<div class="wrap page">' + libHead(null, null, 'Drug database', plural(drugs.length, 'agent') + ' so far, each with mechanism, binding profile, uses, side effects and pearls, linked to the chapters that discuss it. Entries grow as chapters are added.') +
      (drugs.length ? '<div class="lib-tools"><label class="gloss__search"><span class="sr-only">Filter drugs</span><input type="search" id="dq" placeholder="Filter by name, brand or class" value="' + esc(prefs.q) + '" autocomplete="off"></label>' +
        '<label class="select"><span>Class</span><select id="dg"><option value="all">All classes</option>' + groups.map(function (g) { return '<option' + (prefs.g === g ? ' selected' : '') + '>' + esc(g) + '</option>'; }).join('') + '</select></label>' +
        '<label class="select"><span>Acts at</span><select id="dt"><option value="all">Any target</option>' + Object.keys(tUsed).sort(function (a, b) { return targetName(a).localeCompare(targetName(b)); }).map(function (t) { return '<option value="' + esc(t) + '"' + (prefs.t === t ? ' selected' : '') + '>' + esc(targetName(t)) + '</option>'; }).join('') + '</select></label>' +
        '<a class="btn btn--small" href="#/compare">Compare drugs</a></div>' +
        '<p class="gloss__count" id="dcount"></p><ul class="drug-grid" id="dlist"></ul>'
        : emptyLib('drugs', 'Drug entries begin with Chapter 2 (transporters, receptors and enzymes as drug targets) and fill in with every clinical chapter.')) + '</div>';
    setView('drugs', html);
    document.title = 'Drug database — ' + APP;
    if (!drugs.length) return;
    var list = main.querySelector('#dlist');
    function draw() {
      var q = main.querySelector('#dq').value.trim().toLowerCase(), g = main.querySelector('#dg').value, t = main.querySelector('#dt').value;
      store.set('drugFilter', { g: g, t: t, q: q });
      var shown = drugs.filter(function (d) {
        if (g !== 'all' && (d.group || 'Other') !== g) return false;
        if (t !== 'all' && !(d.targets || []).some(function (x) { return x.t === t; })) return false;
        if (q && [d.name, d.brand, d.cls, d.group, (d.aka || []).join(' ')].join(' ').toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      list.innerHTML = shown.map(function (d) {
        return '<li><a class="drug-card" href="#/drugs/' + d.id + '"><span class="drug-card__name">' + esc(d.name) + '</span>' + (d.brand ? '<span class="drug-card__brand">' + esc(d.brand) + '</span>' : '') +
          '<span class="drug-card__cls">' + esc(d.cls || d.group || '') + '</span><span class="drug-card__mech">' + esc(plain(d.short || d.mechanism || '').slice(0, 120)) + '</span></a></li>';
      }).join('');
      main.querySelector('#dcount').textContent = plural(shown.length, 'agent') + (shown.length < drugs.length ? ' of ' + drugs.length : '');
    }
    ['#dq', '#dg', '#dt'].forEach(function (sel) { main.querySelector(sel).addEventListener(sel === '#dq' ? 'input' : 'change', draw); });
    draw();
  }
  function renderDrug(id) {
    var d = byId(SP.drugs, id);
    if (!d) return renderMissing();
    var se = (d.sideEffects || []).map(function (x) { return '<tr><th scope="row">' + fmt(x.e) + '</th><td>' + fmt(x.via || '') + '</td></tr>'; }).join('');
    var html = '<div class="wrap page lib-page c-drug">' +
      libHead('#/drugs', 'Drugs', esc(d.name) + (d.brand ? ' <span class="lib-head__brand">' + esc(d.brand) + '</span>' : ''), null,
        bookmarkBtn('d:' + d.id, '#/drugs/' + d.id, d.name, 'Drug') + '<a class="btn btn--small" href="#/compare/' + d.id + '">Compare</a>') +
      '<div class="lib-grid"><div class="lib-main">' +
        '<dl class="kv">' + (d.cls ? '<dt>Class</dt><dd>' + fmt(d.cls) + '</dd>' : '') + (d.nbn ? '<dt>Mechanism-based name</dt><dd>' + fmt(d.nbn) + '</dd>' : '') + (d.aka && d.aka.length ? '<dt>Also known as</dt><dd>' + esc(d.aka.join(', ')) + '</dd>' : '') + '</dl>' +
        (d.mechanism ? '<section class="lib-sec"><h2>Mechanism of action</h2><p>' + fmt(d.mechanism) + '</p></section>' : '') +
        (d.targets && d.targets.length ? '<section class="lib-sec"><h2>Binding profile</h2>' + profileHTML(d) + '</section>' : '') +
        (d.uses && d.uses.length ? '<section class="lib-sec"><h2>Uses discussed in the book</h2><ul>' + d.uses.map(function (u) { return '<li>' + fmt(u) + '</li>'; }).join('') + '</ul></section>' : '') +
        (se ? '<section class="lib-sec"><h2>Side effects and why</h2><div class="table-wrap"><table><thead><tr><th scope="col">Effect</th><th scope="col">Mechanism</th></tr></thead><tbody>' + se + '</tbody></table></div></section>' : '') +
        (d.pearls && d.pearls.length ? '<section class="lib-sec"><h2>Pearls</h2><ul class="pearls">' + d.pearls.map(function (u) { return '<li>' + fmt(u) + '</li>'; }).join('') + '</ul></section>' : '') +
        (d.facts && d.facts.length ? '<section class="lib-sec"><h2>From the chapters</h2>' + factsHTML(d.facts) + '</section>' : '') +
        updatesHTML(d.updates) +
      '</div><aside class="lib-side"><h2>Discussed in</h2><div class="ref-chips">' + (d.chapters || []).map(chRef).join('') + '</div>' +
        relatedDrugsHTML(d) + '</aside></div></div>';
    setView('drug:' + id, html);
    bindBookmarks(main);
    linkTerms(main.querySelector('.lib-main'));
    document.title = d.name + ' — ' + APP;
  }
  function relatedDrugsHTML(d) {
    var same = (SP.drugs || []).filter(function (x) { return x.id !== d.id && x.group && x.group === d.group; }).slice(0, 10);
    if (!same.length) return '';
    return '<h2>Same class</h2><ul class="side-links">' + same.map(function (x) { return '<li><a href="#/drugs/' + x.id + '">' + esc(x.name) + '</a></li>'; }).join('') + '</ul>';
  }

  /* ---------- neurotransmitters ---------- */
  function renderNTs() {
    var nts = SP.nts || [];
    var fams = {}; nts.forEach(function (n) { (fams[n.family || 'Other'] = fams[n.family || 'Other'] || []).push(n); });
    var order = ['Monoamine', 'Amino acid', 'Acetylcholine', 'Neuropeptide', 'Lipid (endocannabinoid)', 'Gas', 'Neurotrophin', 'Hormone', 'Other'];
    var keys = Object.keys(fams).sort(function (a, b) { return (order.indexOf(a) + 99) % 99 - (order.indexOf(b) + 99) % 99; });
    var html = '<div class="wrap page">' + libHead(null, null, 'Neurotransmitters', 'The brain’s chemical messengers. The six that most psychotropic drugs target are marked <span class="key6">Key six</span>. Each entry gathers what every chapter says about it, with page references.') +
      (nts.length ? keys.map(function (k) {
        return '<section class="nt-fam"><h2>' + esc(k) + '</h2><ul class="nt-grid">' + fams[k].map(function (n) {
          return '<li><a class="nt-card" href="#/nt/' + n.id + '"><span class="nt-card__abbr">' + esc(n.abbr || n.name.slice(0, 3)) + '</span><span class="nt-card__name">' + esc(n.name) + (n.key6 ? ' <span class="key6">Key six</span>' : '') + '</span><span class="nt-card__sum">' + esc(plain(n.summary || '').slice(0, 130)) + '</span></a></li>';
        }).join('') + '</ul></section>';
      }).join('') : emptyLib('neurotransmitters', 'Entries arrive with the chapters.')) + '</div>';
    setView('nts', html);
    document.title = 'Neurotransmitters — ' + APP;
  }
  function renderNT(id) {
    var n = byId(SP.nts, id);
    if (!n) return renderMissing();
    var recs = (SP.targets || []).filter(function (t) { return t.nt === n.id; });
    var drugs = (SP.drugs || []).filter(function (d) { return (d.targets || []).some(function (x) { var t = byId(SP.targets, x.t); return t && t.nt === n.id; }) || (d.nts || []).indexOf(n.id) > -1; });
    function list(title, arr) { return arr && arr.length ? '<section class="lib-sec"><h2>' + title + '</h2><ul>' + arr.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></section>' : ''; }
    var html = '<div class="wrap page lib-page c-mech">' +
      libHead('#/nt', 'Neurotransmitters', esc(n.name) + (n.abbr ? ' <span class="lib-head__brand">' + esc(n.abbr) + '</span>' : ''), null, bookmarkBtn('n:' + n.id, '#/nt/' + n.id, n.name, 'Neurotransmitter')) +
      '<div class="lib-grid"><div class="lib-main">' +
        '<dl class="kv"><dt>Family</dt><dd>' + esc(n.family || '') + (n.key6 ? ' <span class="key6">Key six</span>' : '') + '</dd></dl>' +
        (n.summary ? '<p class="lib-lede">' + fmt(n.summary) + '</p>' : '') +
        (n.synthesis && n.synthesis.length ? '<section class="lib-sec"><h2>Synthesis</h2>' + blockHTML({ type: 'flow', steps: n.synthesis.map(function (s) { return typeof s === 'string' ? [s] : s; }) }, '') + '</section>' : '') +
        list('Termination of action', n.termination) +
        (n.pathways && n.pathways.length ? '<section class="lib-sec"><h2>Pathways</h2><div class="table-wrap"><table><thead><tr><th scope="col">Pathway</th><th scope="col">From → to</th><th scope="col">Role</th></tr></thead><tbody>' +
          n.pathways.map(function (p) { return '<tr><th scope="row">' + fmt(p.name) + '</th><td>' + fmt(p.route || '') + '</td><td>' + fmt(p.role || '') + '</td></tr>'; }).join('') + '</tbody></table></div></section>' : '') +
        list('Functions', n.roles) + list('Clinical relevance', n.clinical) +
        (n.facts && n.facts.length ? '<section class="lib-sec"><h2>From the chapters</h2>' + factsHTML(n.facts) + '</section>' : '') +
        updatesHTML(n.updates) +
      '</div><aside class="lib-side">' +
        '<h2>Receptors and targets</h2>' + (recs.length ? '<ul class="side-links">' + recs.map(function (t) { return '<li><a href="#/targets/' + t.id + '">' + esc(t.short || t.name) + '</a> <span class="muted">' + esc(t.family) + '</span></li>'; }).join('') + '</ul>' : '<p class="muted">Added with Chapters 2 and 3 onward.</p>') +
        (drugs.length ? '<h2>Drugs acting here</h2><ul class="side-links">' + drugs.map(function (d) { return '<li><a href="#/drugs/' + d.id + '">' + esc(d.name) + '</a></li>'; }).join('') + '</ul>' : '') +
        '<h2>Discussed in</h2><div class="ref-chips">' + uniqChapters(n.facts).map(chRef).join('') + '</div></aside></div></div>';
    setView('nt:' + id, html);
    bindBookmarks(main);
    linkTerms(main.querySelector('.lib-main'));
    document.title = n.name + ' — ' + APP;
  }
  function uniqChapters(facts) { var seen = {}, out = []; (facts || []).forEach(function (f) { if (!seen[f.ch]) { seen[f.ch] = 1; out.push({ ch: f.ch }); } }); return out; }

  /* ---------- receptors and other targets ---------- */
  var TARGET_FAMS = ['G-protein-linked receptor', 'Ligand-gated ion channel', 'Voltage-sensitive ion channel', 'Transporter', 'Enzyme', 'Intracellular receptor', 'Neurotrophin receptor', 'Other'];
  function drugsAt(tid) {
    var out = [];
    (SP.drugs || []).forEach(function (d) { (d.targets || []).forEach(function (x) { if (x.t === tid) out.push({ d: d, x: x }); }); });
    return out.sort(function (a, b) { return (b.x.s || 0) - (a.x.s || 0); });
  }
  function renderTargets() {
    var ts = SP.targets || [];
    var fams = {}; ts.forEach(function (t) { (fams[t.family || 'Other'] = fams[t.family || 'Other'] || []).push(t); });
    var html = '<div class="wrap page">' + libHead(null, null, 'Receptors and drug targets', 'Receptors, transporters, enzymes and ion channels. Open any target to see what stimulating or blocking it does clinically (the side-effect mapper) and which drugs act there most strongly.') +
      (ts.length ? TARGET_FAMS.filter(function (f) { return fams[f]; }).map(function (f) {
        return '<section class="nt-fam"><h2>' + esc(f) + 's</h2><ul class="target-grid">' + fams[f].map(function (t) {
          var nt = byId(SP.nts, t.nt), n = drugsAt(t.id).length;
          return '<li><a class="target-card" href="#/targets/' + t.id + '"><span class="target-card__name">' + esc(t.short || t.name) + '</span><span class="target-card__meta">' + esc(nt ? nt.name : (t.ntLabel || '')) + (n ? ' · ' + plural(n, 'drug') : '') + '</span></a></li>';
        }).join('') + '</ul></section>';
      }).join('') : emptyLib('targets', 'Targets arrive with the chapters.')) + '</div>';
    setView('targets', html);
    document.title = 'Receptors and targets — ' + APP;
  }
  function renderTarget(id) {
    var t = byId(SP.targets, id);
    if (!t) return renderMissing();
    var nt = byId(SP.nts, t.nt);
    var ds = drugsAt(t.id);
    function effects(title, arr, css) { return arr && arr.length ? '<div class="fx fx--' + css + '"><h3>' + title + '</h3><ul>' + arr.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></div>' : ''; }
    var html = '<div class="wrap page lib-page c-guide">' +
      libHead('#/targets', 'Receptors & targets', esc(t.name), null, bookmarkBtn('t:' + t.id, '#/targets/' + t.id, t.name, 'Target')) +
      '<div class="lib-grid"><div class="lib-main">' +
        '<dl class="kv"><dt>Type</dt><dd>' + esc(t.family) + '</dd>' + (nt ? '<dt>Neurotransmitter</dt><dd><a href="#/nt/' + nt.id + '">' + esc(nt.name) + '</a></dd>' : '') + (t.coupling ? '<dt>Coupling</dt><dd>' + fmt(t.coupling) + '</dd>' : '') + (t.location ? '<dt>Location</dt><dd>' + fmt(t.location) + '</dd>' : '') + '</dl>' +
        (t.summary ? '<p class="lib-lede">' + fmt(t.summary) + '</p>' : '') +
        ((t.stim && t.stim.length) || (t.block && t.block.length) ? '<section class="lib-sec"><h2>Side-effect mapper</h2><div class="fx-grid">' + effects('Stimulating it', t.stim, 'stim') + effects('Blocking or inhibiting it', t.block, 'block') + '</div></section>' : '') +
        (t.facts && t.facts.length ? '<section class="lib-sec"><h2>From the chapters</h2>' + factsHTML(t.facts) + '</section>' : '') +
        updatesHTML(t.updates) +
      '</div><aside class="lib-side"><h2>Drugs acting here</h2>' +
        (ds.length ? '<ul class="side-links side-links--bars">' + ds.map(function (r) { var a = actionOf(r.x.action); return '<li><a href="#/drugs/' + r.d.id + '">' + esc(r.d.name) + '</a><span class="mini">' + barHTML(r.x) + '</span><span class="muted">' + esc(a.label) + '</span></li>'; }).join('') + '</ul>' : '<p class="muted">Drug entries for this target arrive with later chapters.</p>') +
        '<h2>Discussed in</h2><div class="ref-chips">' + uniqChapters(t.facts).map(chRef).join('') + '</div></aside></div></div>';
    setView('target:' + id, html);
    bindBookmarks(main);
    linkTerms(main.querySelector('.lib-main'));
    document.title = t.name + ' — ' + APP;
  }

  /* ---------- compare ---------- */
  function renderCompare(arg) {
    var drugs = (SP.drugs || []).slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    var ids = (arg || '').split(',').filter(function (x) { return byId(SP.drugs, x); }).slice(0, 3);
    if (!drugs.length) {
      setView('compare', '<div class="wrap page">' + libHead(null, null, 'Compare drugs', 'Put two or three agents side by side.') + emptyLib('drugs to compare', 'Drug entries begin with Chapter 2.') + '</div>');
      document.title = 'Compare drugs — ' + APP; return;
    }
    function sel(i) {
      return '<label class="select"><span>Drug ' + (i + 1) + '</span><select data-slot="' + i + '"><option value="">— choose —</option>' + drugs.map(function (d) { return '<option value="' + d.id + '"' + (ids[i] === d.id ? ' selected' : '') + '>' + esc(d.name) + '</option>'; }).join('') + '</select></label>';
    }
    var chosen = ids.map(function (x) { return byId(SP.drugs, x); });
    var table = '';
    if (chosen.length) {
      var tset = {}; chosen.forEach(function (d) { (d.targets || []).forEach(function (x) { tset[x.t] = Math.max(tset[x.t] || 0, x.s || 0); }); });
      var tids = Object.keys(tset).sort(function (a, b) { return tset[b] - tset[a]; });
      function row(label, fn) { return '<tr><th scope="row">' + label + '</th>' + chosen.map(function (d) { return '<td>' + fn(d) + '</td>'; }).join('') + '</tr>'; }
      function ul(arr) { return arr && arr.length ? '<ul>' + arr.map(function (x) { return '<li>' + fmt(typeof x === 'string' ? x : x.e + (x.via ? ' — ' + x.via : '')) + '</li>'; }).join('') + '</ul>' : '<span class="muted">—</span>'; }
      table = '<div class="table-wrap cmp-table"><table><thead><tr><th scope="col"><span class="sr-only">Attribute</span></th>' + chosen.map(function (d) { return '<th scope="col"><a href="#/drugs/' + d.id + '">' + esc(d.name) + '</a>' + (d.brand ? '<br><span class="muted">' + esc(d.brand) + '</span>' : '') + '</th>'; }).join('') + '</tr></thead><tbody>' +
        row('Class', function (d) { return fmt(d.cls || d.group || '—'); }) +
        row('Mechanism-based name', function (d) { return fmt(d.nbn || '—'); }) +
        row('Mechanism', function (d) { return fmt(d.short || d.mechanism || '—'); }) +
        (tids.length ? '<tr class="table-group"><td colspan="' + (chosen.length + 1) + '">Binding profile</td></tr>' + tids.map(function (tid) {
          return row(esc(targetName(tid)), function (d) {
            var x = null; (d.targets || []).forEach(function (y) { if (y.t === tid) x = y; });
            if (!x) return '<span class="muted">—</span>';
            var a = actionOf(x.action);
            return '<span class="mini">' + barHTML(x) + '</span><small>' + esc(a.label) + '</small>';
          });
        }).join('') : '') +
        row('Uses', function (d) { return ul(d.uses); }) +
        row('Side effects', function (d) { return ul(d.sideEffects); }) +
        row('Pearls', function (d) { return ul(d.pearls); }) +
        row('Chapters', function (d) { return (d.chapters || []).map(chRef).join(' '); }) +
        '</tbody></table></div>';
    }
    var html = '<div class="wrap page">' + libHead(null, null, 'Compare drugs', 'Choose up to three agents. Rows line up so differences in mechanism, binding and side effects stand out.') +
      '<div class="lib-tools cmp-pick">' + sel(0) + sel(1) + sel(2) + '</div>' +
      (table || '<div class="empty"><h2>Pick a drug to start</h2><p>Comparisons work best within a class, for example two SSRIs or two partial agonists.</p></div>') + '</div>';
    setView('compare:' + ids.join(','), html);
    document.title = 'Compare drugs — ' + APP;
    main.querySelectorAll('[data-slot]').forEach(function (s) {
      s.addEventListener('change', function () {
        var v = [0, 1, 2].map(function (i) { return main.querySelector('[data-slot="' + i + '"]').value; }).filter(Boolean);
        location.hash = '#/compare/' + v.join(',');
      });
    });
  }

  /* ---------- symptoms and circuits ---------- */
  function renderCircuits(target) {
    var cs = SP.circuits || [];
    var groups = {}; cs.forEach(function (c) { (groups[c.disorder] = groups[c.disorder] || []).push(c); });
    var html = '<div class="wrap page">' + libHead(null, null, 'Symptoms and circuits', 'Stahl’s symptom-based approach: deconstruct a disorder into symptoms, match each symptom to a hypothetically malfunctioning brain circuit and its neurotransmitters, then choose mechanisms that target that circuit.') +
      blockHTML({ type: 'flow', steps: [['Diagnosis', 'deconstructed into symptoms', 'guide'], ['Symptom', 'e.g. insomnia, apathy', 'hy'], ['Circuit', 'hypothetically malfunctioning region', 'mech'], ['Neurotransmitters', 'that regulate the circuit', 'drug'], ['Mechanism', 'chosen to target it', 'clin']] }, '') +
      (cs.length ? Object.keys(groups).map(function (g) {
        return '<section class="nt-fam"><h2>' + esc(g) + '</h2><div class="table-wrap"><table><thead><tr><th scope="col">Symptom</th><th scope="col">Circuit</th><th scope="col">Neurotransmitters</th><th scope="col">Targeted mechanisms</th><th scope="col">Source</th></tr></thead><tbody>' +
          groups[g].map(function (c) { return '<tr id="cx-' + c.id + '"><th scope="row">' + fmt(c.symptom) + '</th><td>' + fmt(c.circuit || '') + '</td><td>' + fmt((c.nts || []).join(', ')) + '</td><td>' + fmt((c.treat || []).join('; ')) + '</td><td>' + chRef(c) + '</td></tr>'; }).join('') +
          '</tbody></table></div></section>';
      }).join('') : emptyLib('circuit maps', 'Symptom-to-circuit maps arrive with the clinical chapters, starting with Chapter 4 (psychosis) and Chapter 6 (mood disorders).')) + '</div>';
    setView('circuits', html);
    document.title = 'Symptoms and circuits — ' + APP;
    if (target) { var el = document.getElementById('cx-' + target); if (el) { setTimeout(function () { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - headerH() - 24 }); el.classList.add('is-flash'); }, 30); } }
  }

  /* ---------- nomenclature ---------- */
  function renderNbN() {
    var ds = (SP.drugs || []).filter(function (d) { return d.nbn; }).sort(function (a, b) { return (a.group || '').localeCompare(b.group || '') || a.name.localeCompare(b.name); });
    var html = '<div class="wrap page">' + libHead(null, null, 'Nomenclature: traditional class vs mechanism', 'The 5th edition moves toward naming drugs by their pharmacology rather than the disorder they were first approved for, which is why the book says “so-called antipsychotics” and “so-called antidepressants.” A drug named for one use is often used for several others. This table pairs each agent’s traditional class with its mechanism-based name as entries are added.') +
      (ds.length ? '<div class="table-wrap"><table><thead><tr><th scope="col">Drug</th><th scope="col">Traditional class</th><th scope="col">Mechanism-based name</th></tr></thead><tbody>' +
        ds.map(function (d) { return '<tr><th scope="row"><a href="#/drugs/' + d.id + '">' + esc(d.name) + '</a></th><td>' + fmt(d.cls || d.group || '') + '</td><td>' + fmt(d.nbn) + '</td></tr>'; }).join('') + '</tbody></table></div>'
        : emptyLib('mapped agents', 'Mechanism-based names are added with each drug entry, mainly from Chapter 2 onward.')) + '</div>';
    setView('nbn', html);
    document.title = 'Nomenclature — ' + APP;
  }

  /* ---------- post-publication updates ---------- */
  function collectUpdates() {
    var out = [];
    allChapters().forEach(function (ch) {
      if (!ch.guide) return;
      ch.guide.parts.forEach(function (pt) { pt.sections.forEach(function (s) { s.blocks.forEach(function (b, i) {
        if (b.type === 'update') out.push({ b: b, where: 'Chapter ' + ch.number + ': ' + s.title, href: '#/c/' + ch.id + '/guide/' + s.id + '--' + i });
      }); }); });
    });
    [['drugs', SP.drugs, 'Drug'], ['nt', SP.nts, 'Neurotransmitter'], ['targets', SP.targets, 'Target']].forEach(function (g) {
      (g[1] || []).forEach(function (e) { (e.updates || []).forEach(function (u) { out.push({ b: u, where: g[2] + ': ' + e.name, href: '#/' + g[0] + '/' + e.id }); }); });
    });
    return out;
  }
  function renderUpdates() {
    var ups = collectUpdates();
    var html = '<div class="wrap page">' + libHead(null, null, 'Post-publication updates', 'The book went to press in 2021. Anything from after that (new approvals, label changes, new evidence) is kept out of the book-based content and shown only in clearly labeled boxes. All of them are collected here.') +
      (ups.length ? '<ul class="upd-list">' + ups.map(function (u) {
        return '<li><a class="upd-list__where" href="' + u.href + '">' + esc(u.where) + '</a>' + blockHTML({ type: 'update', year: u.b.year, title: u.b.title, text: u.b.text, source: u.b.source }, '') + '</li>';
      }).join('') + '</ul>' : '<div class="empty"><h2>No updates yet</h2><p>Chapter 1 covers foundational neuroscience that has not changed since publication. Update boxes begin where drugs are discussed.</p></div>') + '</div>';
    setView('updates', html);
    document.title = 'Post-publication updates — ' + APP;
  }

  /* ---------- print all high-yield ---------- */
  function renderPrintAll() {
    var chs = allChapters();
    var html = '<div class="wrap page print-all">' +
      '<header class="page__head no-print"><h1>Print all high-yield summaries</h1><p>Every chapter’s high-yield list in one continuous printout, each chapter starting on a new page. For a one-page sheet per chapter, use the printable summary on each chapter’s high-yield page.</p>' +
      '<div class="empty__actions" style="justify-content:flex-start;margin-top:14px"><button class="btn btn--solid" type="button" id="pa-print">Print or save as PDF</button>' + chs.map(function (c) { return '<a class="btn btn--small" href="#/c/' + c.id + '/handout">Ch ' + c.number + ' one-pager</a>'; }).join('') + '</div></header>' +
      chs.map(function (ch) {
        return '<section class="pa-ch"><header class="pa-ch__head"><p>' + esc(BOOK) + ', pp. ' + esc(ch.pages) + '</p><h2>Chapter ' + ch.number + ': ' + esc(ch.title) + '</h2></header><div class="pa-ch__body">' +
          (ch.highYield || []).map(function (t) { return '<section class="sheet__topic"><h3>' + esc(t.topic) + '</h3><ul>' + t.items.map(function (it) { return '<li>' + fmt(it) + '</li>'; }).join('') + '</ul></section>'; }).join('') +
          '</div><p class="pa-ch__foot">App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com</p></section>';
      }).join('') + '</div>';
    setView('print-all', html);
    document.body.classList.add('print-all-on');
    view.cleanup = function () { document.body.classList.remove('print-all-on'); };
    main.querySelector('#pa-print').addEventListener('click', function () { window.print(); });
    document.title = 'Print all high-yield — ' + APP;
  }

  /* ---------- what's new ---------- */
  var NEWS_TYPES = { chapter: 'New chapter', feature: 'New feature', correction: 'Correction', update: 'Update' };
  function newsList() { return (SP.changelog || []).slice().sort(function (a, b) { return b.id - a.id; }); }
  function latestNewsId() { var l = newsList(); return l.length ? l[0].id : 0; }
  function seenNewsId() {
    var s = store.get('seenNews', null);
    if (s != null) return s;
    // First visit with this feature: returning residents (who already have progress) see everything
    // after the original release as new; brand-new visitors start fully up to date.
    var returning = store.get('last', null) || Object.keys(SRS).length;
    s = returning ? 1 : latestNewsId();
    store.set('seenNews', s);
    return s;
  }
  function unseenNews() { var seen = seenNewsId(); return newsList().filter(function (e) { return e.id > seen; }); }
  function updatedChapters() {
    var out = {};
    unseenNews().forEach(function (e) { e.items.forEach(function (it) { if (it.ch) out[it.ch] = true; }); });
    return out;
  }
  function fmtNewsDate(d) {
    try { var p = d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }); } catch (e) { return d; }
  }
  function renderNews() {
    var seen = seenNewsId();
    var list = newsList();
    var html = '<div class="wrap page news">' +
      '<header class="page__head"><h1>What’s new</h1><p>New chapters, features and corrections, newest first. Entries marked <span class="news__new">New</span> were added since your last visit; corrections link straight to the changed content so you know what to revisit.</p></header>' +
      list.map(function (e) {
        return '<article class="news__entry' + (e.id > seen ? ' is-new' : '') + '"><div class="news__date"><time datetime="' + esc(e.date) + '">' + fmtNewsDate(e.date) + '</time>' + (e.id > seen ? '<span class="news__new">New</span>' : '') + '</div>' +
          '<div class="news__body"><h2>' + esc(e.title) + '</h2>' + (e.summary ? '<p>' + fmt(e.summary) + '</p>' : '') +
          '<ul>' + e.items.map(function (it) {
            var ch = it.ch && chapter(it.ch);
            return '<li><span class="news__type news__type--' + esc(it.type) + '">' + esc(NEWS_TYPES[it.type] || 'Update') + '</span>' +
              '<span class="news__text">' + fmt(it.text) + (ch && plain(it.text).indexOf('Chapter ' + ch.number) < 0 ? ' <span class="muted">(Chapter ' + ch.number + ')</span>' : '') + (it.href ? ' <a href="' + esc(it.href) + '">' + esc(it.link || 'Open') + '</a>' : '') + '</span></li>';
          }).join('') + '</ul></div></article>';
      }).join('') +
      (list.some(function (e) { return e.items.some(function (it) { return it.type === 'correction'; }); }) ? '' : '<p class="news__note">No corrections have been needed so far. If one is made, it will be listed here with a link to the corrected content.</p>') +
      '</div>';
    setView('news', html);
    document.title = 'What’s new — Stahl Study Companion';
    store.set('seenNews', latestNewsId());
    updateNavBadges();
  }

  /* ---------- search ---------- */
  var INDEX = null;
  var KIND = {
    guide: { label: 'Study guide', css: 'guide' },
    hy: { label: 'High yield', css: 'hy' },
    mech: { label: 'Mechanism card', css: 'mech' },
    drugs: { label: 'Drug card', css: 'drug' },
    clinical: { label: 'Clinical card', css: 'clin' },
    cases: { label: 'Board question', css: 'case' },
    glossary: { label: 'Glossary', css: 'gloss' },
    drug: { label: 'Drug', css: 'drug' },
    nt: { label: 'Neurotransmitter', css: 'mech' },
    target: { label: 'Target', css: 'guide' },
    circuit: { label: 'Symptom & circuit', css: 'clin' }
  };
  function buildIndex() {
    INDEX = [];
    allChapters().forEach(function (ch) {
      if (ch.guide) ch.guide.parts.forEach(function (pt) {
        pt.sections.forEach(function (s) {
          s.blocks.forEach(function (b, i) {
            var t = blockText(b);
            if (t.trim()) INDEX.push({ ch: ch, kind: 'guide', title: s.title, text: t, href: '#/c/' + ch.id + '/guide/' + s.id + '--' + i });
          });
        });
      });
      (ch.highYield || []).forEach(function (tp) {
        tp.items.forEach(function (it, i) {
          INDEX.push({ ch: ch, kind: 'hy', title: tp.topic, text: plain(it), href: '#/c/' + ch.id + '/high-yield/' + tp.id + '--' + i });
        });
      });
      DECKS.forEach(function (d) {
        (ch[d.key] || []).forEach(function (c) {
          var text = plain(c.q) + ' ' + (c.choices ? c.choices.map(plain).join(' ') + ' ' : '') + plain(c.a || '') + ' ' + plain(c.why || '');
          INDEX.push({ ch: ch, kind: d.key, title: c.tag || d.short, text: text, front: plain(c.q), href: '#/c/' + ch.id + '/cards/' + d.key + '/' + c.id });
        });
      });
    });
    if (!GL) buildGloss();
    GL.list.forEach(function (g) { INDEX.push({ ch: null, kind: 'glossary', title: g.t, text: g.d, src: g.src, href: '#/glossary/' + g.slug }); });
    (SP.drugs || []).forEach(function (d) { INDEX.push({ ch: null, kind: 'drug', title: d.name + (d.brand ? ' (' + d.brand + ')' : ''), text: plain([d.cls, d.nbn, d.mechanism, (d.uses || []).join(' '), (d.pearls || []).join(' '), (d.aka || []).join(' ')].join(' ')), href: '#/drugs/' + d.id }); });
    (SP.nts || []).forEach(function (n) { INDEX.push({ ch: null, kind: 'nt', title: n.name + (n.abbr ? ' (' + n.abbr + ')' : ''), text: plain([n.summary, n.family, (n.facts || []).map(function (f) { return f.text; }).join(' ')].join(' ')), href: '#/nt/' + n.id }); });
    (SP.targets || []).forEach(function (t) { INDEX.push({ ch: null, kind: 'target', title: t.name, text: plain([t.family, t.summary, (t.facts || []).map(function (f) { return f.text; }).join(' ')].join(' ')), href: '#/targets/' + t.id }); });
    (SP.circuits || []).forEach(function (c) { INDEX.push({ ch: null, kind: 'circuit', title: c.symptom + ' (' + c.disorder + ')', text: plain([c.circuit, (c.nts || []).join(' '), (c.treat || []).join(' ')].join(' ')), href: '#/circuits/' + c.id }); });
    INDEX.forEach(function (e) { e.lc = e.text.toLowerCase(); e.lt = e.title.toLowerCase(); });
  }
  function terms(q) { return q.toLowerCase().replace(/[^\p{L}\p{N}\-\s.]/gu, ' ').split(/\s+/).filter(function (t) { return t.length > 0; }); }
  function runSearch(q) {
    if (!INDEX) buildIndex();
    var ts = terms(q);
    if (!ts.length) return [];
    var phrase = q.toLowerCase().trim();
    var out = [];
    INDEX.forEach(function (e) {
      var score = 0;
      for (var i = 0; i < ts.length; i++) {
        var t = ts[i], inT = e.lt.indexOf(t) > -1, at = e.lc.indexOf(t);
        if (!inT && at < 0) return;
        if (inT) score += 4;
        if (at > -1) score += 1 + (at < 120 ? 1 : 0);
      }
      if (ts.length > 1 && e.lc.indexOf(phrase) > -1) score += 6;
      if (e.kind === 'hy') score += 0.5;
      if (e.kind === 'glossary' && e.lt === phrase) score += 10;
      if ((e.kind === 'drug' || e.kind === 'nt' || e.kind === 'target') && e.lt.indexOf(phrase) === 0) score += 12;
      out.push({ e: e, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.map(function (r) { return r.e; });
  }
  function snippet(text, ts, len) {
    len = len || 200;
    var lc = text.toLowerCase(), i = -1;
    ts.forEach(function (t) { var j = lc.indexOf(t); if (j > -1 && (i < 0 || j < i)) i = j; });
    var start = Math.max(0, (i < 0 ? 0 : i) - 70);
    if (start > 0) { var sp = text.indexOf(' ', start); if (sp > -1 && sp - start < 20) start = sp + 1; }
    var s = text.slice(start, start + len);
    return (start > 0 ? '\u2026' : '') + highlight(s, ts) + (start + len < text.length ? '\u2026' : '');
  }
  function highlight(s, ts) {
    var good = ts.filter(function (t) { return t.length > 1; });
    if (!good.length) return esc(s);
    var re = new RegExp('(' + good.map(escRe).join('|') + ')', 'gi');
    var outp = '', last = 0, m;
    while ((m = re.exec(s))) { outp += esc(s.slice(last, m.index)) + '<mark>' + esc(m[0]) + '</mark>'; last = m.index + m[0].length; if (m[0].length === 0) re.lastIndex++; }
    return outp + esc(s.slice(last));
  }
  function kindGroup(k) { return k === 'guide' ? 'guide' : k === 'hy' ? 'hy' : k === 'glossary' ? 'glossary' : (k === 'drug' || k === 'nt' || k === 'target' || k === 'circuit') ? 'library' : 'cards'; }
  function whereLabel(e, short) { return e.ch ? (short ? 'Ch ' : 'Chapter ') + e.ch.number : (e.src ? 'From ' + e.src : (e.kind === 'glossary' ? 'Glossary' : 'Library')); }

  function renderSearch(q) {
    var res = runSearch(q);
    var ts = terms(q);
    var filter = 'all';
    var counts = { all: res.length, guide: 0, hy: 0, cards: 0, glossary: 0, library: 0 };
    res.forEach(function (e) { counts[kindGroup(e.kind)]++; });
    var html = '<div class="wrap search-page"><h1>' + (q ? 'Results for \u201c' + esc(q) + '\u201d' : 'Search') + '</h1>' +
      '<p class="search-page__sub">' + (q ? res.length + ' matches across every chapter in the app' : 'Type in the search box above to search every study guide, high-yield list, card, question, library entry and glossary term.') + '</p>' +
      (q && res.length ? '<div class="filters" role="group" aria-label="Filter results">' +
        [['all', 'All'], ['guide', 'Study guide'], ['hy', 'High yield'], ['cards', 'Cards and questions'], ['library', 'Library'], ['glossary', 'Glossary']].filter(function (f) { return f[0] === 'all' || counts[f[0]]; }).map(function (f) {
          return '<button class="filter" type="button" data-f="' + f[0] + '" aria-pressed="' + (f[0] === 'all') + '">' + f[1] + ' (' + counts[f[0]] + ')</button>';
        }).join('') + '</div>' : '') +
      '<ol class="results" id="results"></ol>' +
      (q && !res.length ? '<div class="empty"><h2>No matches</h2><p>Try a shorter word or a drug name, for example \u201cCREB\u201d, \u201cvolume neurotransmission\u201d or \u201cepigenetics\u201d.</p></div>' : '') +
      '</div>';
    setView('search:' + q, html);
    document.title = (q ? q + ' — ' : '') + 'Search — Stahl Study Companion';
    var list = main.querySelector('#results');
    function draw() {
      var shown = res.filter(function (e) { return filter === 'all' || kindGroup(e.kind) === filter; }).slice(0, 250);
      list.innerHTML = shown.map(function (e) {
        var k = KIND[e.kind];
        var title = e.kind === 'guide' || e.kind === 'hy' ? e.title : e.title;
        var text = e.front && !ts.some(function (t) { return e.front.toLowerCase().indexOf(t) > -1; }) ? e.text : (e.front || e.text);
        return '<li class="result"><a href="' + e.href + '"><div class="result__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>' + whereLabel(e) + '</span></div>' +
          '<p class="result__title">' + esc(title) + '</p><p class="result__text">' + snippet(text, ts, 240) + '</p></a></li>';
      }).join('');
    }
    draw();
    main.querySelectorAll('.filter').forEach(function (b) {
      b.addEventListener('click', function () {
        filter = b.getAttribute('data-f');
        main.querySelectorAll('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        draw();
      });
    });
  }

  /* ---------- header search suggestions ---------- */
  var sugIndex = -1, sugTimer = null;
  function closeSuggest() { suggestBox.hidden = true; qInput.setAttribute('aria-expanded', 'false'); sugIndex = -1; }
  function openSuggest(q) {
    if (!q.trim()) { closeSuggest(); return; }
    var res = runSearch(q), ts = terms(q);
    var top = res.slice(0, 7);
    var html = top.map(function (e, i) {
      var k = KIND[e.kind];
      return '<a class="suggest__item" role="option" id="sug-' + i + '" href="' + e.href + '" aria-selected="false">' +
        '<span class="suggest__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>' + whereLabel(e, true) + '</span><span>' + esc(e.title) + '</span></span>' +
        '<span class="suggest__text">' + snippet(e.front || e.text, ts, 140) + '</span></a>';
    }).join('');
    if (res.length) html += '<a class="suggest__item suggest__all" role="option" id="sug-' + top.length + '" href="#/search/' + encodeURIComponent(q) + '" aria-selected="false">See all ' + res.length + ' results</a>';
    else html = '<div class="suggest__empty">No matches for \u201c' + esc(q) + '\u201d</div>';
    suggestBox.innerHTML = html;
    suggestBox.hidden = false;
    qInput.setAttribute('aria-expanded', 'true');
    sugIndex = -1;
  }
  function moveSug(d) {
    var items = suggestBox.querySelectorAll('.suggest__item');
    if (!items.length) return;
    sugIndex = (sugIndex + d + items.length) % items.length;
    items.forEach(function (it, i) { it.setAttribute('aria-selected', String(i === sugIndex)); });
    qInput.setAttribute('aria-activedescendant', items[sugIndex].id);
    items[sugIndex].scrollIntoView({ block: 'nearest' });
  }
  qInput.addEventListener('input', function () {
    clearTimeout(sugTimer);
    sugTimer = setTimeout(function () { openSuggest(qInput.value); }, 110);
  });
  qInput.addEventListener('focus', function () { if (qInput.value.trim()) openSuggest(qInput.value); });
  qInput.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (suggestBox.hidden) openSuggest(qInput.value); moveSug(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSug(-1); }
    else if (e.key === 'Escape') { closeSuggest(); qInput.blur(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      var items = suggestBox.querySelectorAll('.suggest__item');
      var target = sugIndex > -1 && items[sugIndex] ? items[sugIndex].getAttribute('href') : (qInput.value.trim() ? '#/search/' + encodeURIComponent(qInput.value.trim()) : null);
      closeSuggest();
      if (target) { if (location.hash === target) route(); else location.hash = target; qInput.blur(); }
    }
  });
  suggestBox.addEventListener('mousedown', function (e) { e.preventDefault(); });
  suggestBox.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return;
    e.preventDefault(); closeSuggest(); qInput.blur();
    var h = a.getAttribute('href'); if (location.hash === h) route(); else location.hash = h;
  });
  qInput.addEventListener('blur', function () { setTimeout(closeSuggest, 120); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !(e.target.matches && e.target.matches('input, textarea, select'))) { e.preventDefault(); qInput.focus(); qInput.select(); }
  });

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('theme');
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function labelTheme() { themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
    labelTheme();
  });
  labelTheme();


  /* ---------- boot ---------- */
  function setTopVar() { document.documentElement.style.setProperty('--top', headerH() + 'px'); }
  window.addEventListener('resize', setTopVar);
  setTopVar();
  /* ---------- back and forward buttons ----------
     Each history entry the app visits is stamped with its position (history.state.spIdx), so the
     buttons know whether there is an in-app page behind or ahead of the current one. */
  var HIST_KEY = 'sp:v1:hist';
  var hist = (function () { try { return JSON.parse(sessionStorage.getItem(HIST_KEY)) || { cur: 0, max: 0 }; } catch (e) { return { cur: 0, max: 0 }; } })();
  function saveHist() { try { sessionStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {} }
  function stamp(i) { try { history.replaceState({ spIdx: i }, ''); } catch (e) {} }
  function syncHist() {
    var st = history.state;
    if (st && typeof st.spIdx === 'number') {
      hist.cur = st.spIdx;
      if (hist.cur > hist.max) hist.max = hist.cur;
    } else {
      hist.cur = hist.cur + 1;     // a new page: anything that was ahead is discarded
      hist.max = hist.cur;
      stamp(hist.cur);
    }
    saveHist(); paintHist();
  }
  function paintHist() {
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.disabled = hist.cur <= 0;
    if (f) f.disabled = hist.cur >= hist.max;
  }
  (function initHist() {
    var st = history.state;
    if (st && typeof st.spIdx === 'number') { hist.cur = st.spIdx; if (hist.max < hist.cur) hist.max = hist.cur; }
    else { hist = { cur: 0, max: 0 }; stamp(0); }
    saveHist(); paintHist();
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.addEventListener('click', function () { if (!b.disabled) history.back(); });
    if (f) f.addEventListener('click', function () { if (!f.disabled) history.forward(); });
  })();

  window.addEventListener('hashchange', function () { syncHist(); route(); });
  loadAll().then(function () {
    indexCards();
    updateNavBadges();
    route();
    setTopVar();
  }).catch(function (err) {
    main.innerHTML = '<div class="wrap empty" style="margin-top:48px"><h2>Chapter data did not load</h2><p>' + esc(err.message) + '. Check that every file listed in data/chapters.js exists in the repository.</p></div>';
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
