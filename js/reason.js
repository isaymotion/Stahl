/* Stahl Study Companion — mechanism-reasoning questions (33.0.0).
   Builds five kinds of single-best-answer question from the reference library alone (no new book text):
     se    explain a drug's side effect by the action behind it        (drugs[].sideEffects[].via + SP.mechGrid)
     pred  predict the effect of a mechanism                           (SP.mechGrid)
     cmp   explain why one drug has a side effect its classmate lacks  (binding profiles + SP.mechGrid)
     spot  pick the drug with a given action at a given target         (drugs[].targets)
     circ  match a symptom to its circuit                              (SP.circuits + SP.circuitQ)
   Wrong answers are chosen so that none is also true: a mechanism is never offered against an effect it can
   explain (SP.mechGrid effects + also + kin), a drug is never offered against a target it acts on, and a circuit
   is never offered against one that shares a region tag. Every question is built from a seed taken from its
   key, so the same key always gives the same question (teaching sessions and saved results rely on that).
   Pure data in, data out: also runs under Node for tools/check_reason.js. */
(function (root) {
  'use strict';
  var SP = root.SP;

  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = hash(seed); return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffled(a, r) { a = a.slice(); for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function plain(s) { return String(s == null ? '' : s).replace(/\[\[[a-z]+:[^|\]]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[[a-z]+:([^\]]+)\]\]/g, '$1').replace(/\*\*/g, '').replace(/\*/g, ''); }
  function lc(s) { s = String(s).replace(/^μ-O/, 'μ-o'); return /^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s; }
  function stop(s) { s = String(s).trim(); return /[.!?]$/.test(s) ? s : s + '.'; }
  function overlap(a, b) { for (var i = 0; i < a.length; i++) if (b.indexOf(a[i]) > -1) return true; return false; }
  var NEG_E = /^(no |not |less|little|low|lowers|fewer|perhaps|virtually|relatively|very low|possible|some adverse)|sialorrhea/i;   // statements of absence; and one the book contradicts itself on
  var NEG_VIA = /^(low|minimal|lacks|no |weak|possibly|noted|different|smoother|d2 dose)/i;

  function build() {
    var drugs = SP.drugs || [], targets = SP.targets || [], grid = SP.mechGrid || [], effs = SP.mechEffects || [];
    var EFF = {}, MECH = {}, TARGET = {}, DRUG = {};
    effs.forEach(function (e) { EFF[e.id] = e; });
    grid.forEach(function (m) { MECH[m.id] = m; m.blocks = (m.effects || []).concat(m.also || []); });
    targets.forEach(function (t) { TARGET[t.id] = t; });
    drugs.forEach(function (d) { DRUG[d.id] = d; });
    var fams = SP.drugFamilies || [];
    function famOf(d) { for (var i = 0; i < fams.length; i++) if ((fams[i].groups || []).indexOf(d.group) > -1) return fams[i]; return null; }
    function chsOf(d) { return (d.chapters || []).map(function (c) { return typeof c === 'string' ? c : c.ch; }); }
    function span(pg) { var n = 0; String(pg || '').split(/[,;]/).forEach(function (x) { var r = x.trim().split(/[–-]/).map(Number); if (r[0]) n += (r[1] > r[0] ? r[1] - r[0] : 0) + 1; }); return n; }
    function pagesOf(d) {            // the chapter that covers the drug most fully
      var best = null;
      (d.chapters || []).forEach(function (c) { if (typeof c !== 'string' && c.pages && (!best || span(c.pages) > span(best.pages))) best = c; });
      return best ? String(best.pages).split(/[,;]/)[0].trim() : '';
    }
    function effectsIn(text) { return effs.filter(function (e) { return e.re.test(text); }).map(function (e) { return e.id; }); }
    function mechsIn(via) { return grid.filter(function (m) { return m.re.test(via) && (!m.need || m.need.test(via)); }); }
    function hasAction(d, m) { return (d.targets || []).some(function (x) { return m.t.indexOf(x.t) > -1 && m.act.test(x.action || ''); }); }
    function hasTarget(d, m) { return (d.targets || []).some(function (x) { return m.t.indexOf(x.t) > -1; }); }
    function effLabels(ids) { var l = ids.map(function (id) { return lc(EFF[id].label); }); return 'other effects (' + l.join('; ') + ')'; }
    /* the reasoning chain that fits these effects: the mechanism's own, or one written for an `also` effect */
    function howFor(m, ef) {
      if (overlap(ef, m.effects)) return { how: m.how, pages: m.pages };
      for (var i = 0; i < ef.length; i++) if (m.howBy && m.howBy[ef[i]]) return m.howBy[ef[i]];
      return null;
    }

    var items = [], seen = {};
    function push(it) {
      var n = 2, k = it.key; while (seen[it.key]) it.key = k + '~' + n++;
      seen[it.key] = 1; items.push(it);
    }
    /* Order the choices from the seed and record where the answer landed. */
    function finish(it, right, wrong, r) {
      var all = shuffled([right].concat(wrong), r);
      it.choices = all.map(function (x) { return x.text; });
      it.answer = all.indexOf(right);
      it.whyNot = all.map(function (x) { return x === right ? '' : x.why; });
      return it;
    }
    /* Mechanisms that are fair wrong answers against a set of effects. */
    function mechDistractors(m, effIds, d, r) {
      var pool = grid.filter(function (x) {
        return x.id !== m.id && !overlap(x.blocks, effIds) && (m.kin || []).indexOf(x.id) < 0 && (x.kin || []).indexOf(m.id) < 0 && x.label !== m.label;
      });
      pool = shuffled(pool, r);
      if (d) pool.sort(function (a, b) { return (hasAction(d, b) ? 1 : 0) - (hasAction(d, a) ? 1 : 0); });   // the drug's own actions first: more tempting
      var out = [], kinSeen = {};
      pool.forEach(function (x) {
        if (out.length >= 4) return;
        if ((x.kin || []).some(function (k) { return kinSeen[k]; }) || kinSeen[x.id]) return;   // not two near-identical options
        out.push(x); kinSeen[x.id] = 1; (x.kin || []).forEach(function (k) { kinSeen[k] = 1; });
      });
      return out;
    }

    /* ---- se: explain the side effect ---- */
    var seByDrug = {};
    drugs.forEach(function (d) {
      (d.sideEffects || []).forEach(function (se) {
        if (!se || typeof se === 'string' || !se.via) return;
        var e = plain(se.e), via = plain(se.via);
        if (NEG_E.test(e) || NEG_VIA.test(via)) return;
        var ms = mechsIn(via); if (ms.length !== 1) return;
        var m = ms[0], ef = effectsIn(e);
        if (!ef.length || !ef.every(function (id) { return m.blocks.indexOf(id) > -1; })) return;
        var hw = howFor(m, ef); if (!hw) return;
        (seByDrug[d.id] = seByDrug[d.id] || []).push({ m: m, ef: ef, e: e, via: via, hw: hw });
        var key = 'se/' + d.id + '/' + m.id + '/' + ef.join('+'), r = rng(key);
        var wrong = mechDistractors(m, ef, d, r); if (wrong.length < 4) return;
        push(finish({
          key: key, kind: 'se', mech: m.id, drug: d.id, chs: chsOf(d), tag: 'Explain the side effect',
          q: '**' + d.name + '** — side effect: ' + lc(e) + '. Which of its actions best explains this?',
          why: stop(e + ' with ' + lc(d.name) + ' is put down to ' + lc(via)) + ' ' + hw.how,
          pages: hw.pages, chain: [d.name, m.label, e]
        }, { text: m.label }, wrong.map(function (x) {
          return { text: x.label, why: (hasAction(d, x) ? d.name + ' does act this way, but that action is linked with ' : 'Linked with ') + effLabels(x.effects) + '.' };
        }), r));
      });
    });

    /* ---- pred: predict the effect of a mechanism ---- */
    grid.forEach(function (m) {
      if (m.noPredict) return;
      m.effects.forEach(function (eid) {
        var key = 'pred/' + m.id + '/' + eid, r = rng(key);
        var pool = shuffled(effs.filter(function (e) { return m.blocks.indexOf(e.id) < 0; }), r).slice(0, 4);
        push(finish({
          key: key, kind: 'pred', mech: m.id, chs: [m.ch], tag: 'Predict from the action',
          q: 'Which side effect is linked with **' + lc(m.label) + '**?',
          why: m.how, pages: m.pages, chain: [m.label, EFF[eid].label]
        }, { text: EFF[eid].label }, pool.map(function (e) {
          var from = grid.filter(function (x) { return x.effects.indexOf(e.id) > -1 && !x.noPredict; }).slice(0, 2).map(function (x) { return lc(x.label); });
          return { text: e.label, why: from.length ? 'Expected instead from ' + from.join(' or ') + '.' : 'Not an effect of this action.' };
        }), r));
      });
    });

    /* ---- cmp: why does A have the effect and its classmate B not? ----
       B must have a full binding profile in the library (strengths recorded), no action at the mechanism's
       target, and no side effect of that kind listed. */
    var full = drugs.filter(function (d) { return (d.targets || []).some(function (x) { return x.s; }) && (d.sideEffects || []).length; });
    var cmpSeen = {}, cands;
    Object.keys(seByDrug).forEach(function (aid) {
      var A = DRUG[aid], fa = famOf(A); if (!fa) return;
      var done = {};
      seByDrug[aid].forEach(function (x) {
        if (done[x.m.id] || !hasAction(A, x.m)) return;
        cands = null;
        cands = full.filter(function (B) {
          if (B.id === aid || famOf(B) !== fa || hasTarget(B, x.m)) return false;
          return !(B.sideEffects || []).some(function (se) {
            var e = plain(typeof se === 'string' ? se : se.e);
            return !NEG_E.test(e) && overlap(effectsIn(e), x.ef);
          });
        });
        if (!cands.length) return;
        var key0 = 'cmp/' + aid + '/' + x.m.id, B = shuffled(cands, rng(key0))[0];
        var pairN = x.m.id + '|' + B.id; if ((cmpSeen[pairN] || 0) >= 3) return;      // not the same comparison over and over
        cmpSeen[pairN] = (cmpSeen[pairN] || 0) + 1; done[x.m.id] = 1;
        var key = key0 + '/' + B.id, r = rng(key);
        var wrong = mechDistractors(x.m, x.ef, A, r); if (wrong.length < 4) return;
        push(finish({
          key: key, kind: 'cmp', mech: x.m.id, drug: aid, drug2: B.id, chs: chsOf(A), tag: 'Compare two drugs',
          q: '**' + A.name + '** and **' + B.name + '** are the same type of drug (' + lc(fa.label.replace(/\s*\([^)]*\)/g, '')) + '). In the drug library, ' + A.name + ' lists ' + lc(x.e) + ' as a side effect and ' + B.name + ' does not. Which action, in ' + A.name + '’s profile but missing from ' + B.name + '’s, explains the difference?',
          why: stop(A.name + ': ' + lc(x.e) + ' is put down to ' + lc(x.via)) + ' ' + B.name + '’s binding profile has no action at that target. ' + x.hw.how,
          pages: x.hw.pages, chain: [A.name + ' vs ' + B.name, x.m.label, x.e]
        }, { text: x.m.label }, wrong.map(function (w) {
          var a = hasAction(A, w), b = hasAction(B, w);
          return { text: w.label, why: (a && b ? 'Both drugs act this way, so it cannot explain a difference between them; it is linked with ' : a ? A.name + ' does act this way, but that action is linked with ' : 'Linked with ') + effLabels(w.effects) + '.' };
        }), r));
      });
    });

    /* ---- spot: which drug has this action at this target? ---- */
    var SPOT_T = ['d2', 'd3', '5ht1a', '5ht2a', '5ht2c', '5ht3', '5ht7', 'h1', 'm1', 'alpha1', 'alpha2', 'sert', 'net', 'dat', 'mao', 'vmat2', 'ox', 'mt1mt2', 'nmda', 'mor', 'gabaa', 'ache', 'cb1'];
    var SPOT_A = { 'agonist': 'acts as an agonist at', 'full agonist': 'acts as a full agonist at', 'partial agonist': 'acts as a partial agonist at', 'antagonist': 'acts as an antagonist at',
      'inhibitor': 'inhibits', 'positive allosteric modulator': 'is a positive allosteric modulator of', 'negative allosteric modulator': 'is a negative allosteric modulator of', 'inverse agonist': 'acts as an inverse agonist at' };
    var withTargets = drugs.filter(function (d) { return (d.targets || []).length >= 1; });
    function mentions(d, t) {       // a guard beyond the target list: the drug's own summary text names the target
      var txt = plain([d.short, d.mechanism, d.cls, d.nbn, d.group].join(' ')), names = [t.short, t.name].filter(Boolean);
      return names.some(function (n) { return n.length > 1 && new RegExp('(^|[^A-Za-z0-9])' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![A-Za-z0-9])', 'i').test(txt); });
    }
    var tText = {};
    function namedBy(d, t) {        // ... or the target's own entry names the drug (an indirect action, for instance)
      if (!tText[t.id]) tText[t.id] = plain([t.summary].concat(t.block || [], t.stim || [], (t.facts || []).map(function (f) { return f.text; })).join(' ')).toLowerCase();
      var n = plain(d.name).replace(/\s*\([^)]*\)/g, '').toLowerCase();
      return n.length > 2 && tText[t.id].indexOf(n) > -1;
    }
    var pairs = {};
    drugs.forEach(function (d) {
      (d.targets || []).forEach(function (x) {
        if (SPOT_T.indexOf(x.t) < 0 || !SPOT_A[x.action] || !TARGET[x.t]) return;
        if (x.s && x.s < 3) return;                       // a weak binding is not what the drug is known for
        if (x.note && /weak|mild|possibl|disputed|debated|indirect|\bvia\b|lesser|high dose/i.test(x.note)) return;   // nor a weak, indirect or uncertain action
        (pairs[x.t + '|' + x.action] = pairs[x.t + '|' + x.action] || []).push(d);
      });
    });
    Object.keys(pairs).forEach(function (pk) {
      var tId = pk.split('|')[0], action = pk.split('|')[1], T = TARGET[tId], list = pairs[pk];
      /* A fair wrong answer has no action at the target AND either a full binding profile in the library
         (strengths recorded, so an absent target really is absent) or belongs to a drug group none of whose
         members acts there (so an incomplete entry cannot hide a true answer). */
      var groupsAt = {};
      drugs.forEach(function (d) { if ((d.targets || []).some(function (x) { return x.t === tId; }) || mentions(d, T) || namedBy(d, T)) groupsAt[d.group] = 1; });
      var outsiders = withTargets.filter(function (d) {
        if ((d.targets || []).some(function (x) { return x.t === tId; }) || mentions(d, T) || namedBy(d, T)) return false;
        return (d.targets || []).some(function (x) { return x.s; }) || !groupsAt[d.group];
      });
      if (outsiders.length < 4) return;
      shuffled(list, rng('spot/' + pk)).slice(0, 5).forEach(function (d) {
        var key = 'spot/' + tId + '/' + action.replace(/ /g, '-') + '/' + d.id, r = rng(key);
        var fa = famOf(d), chs = chsOf(d);
        var pool = shuffled(outsiders, r).sort(function (a, b) {
          function near(z) { return (famOf(z) === fa ? 2 : 0) + (overlap(chsOf(z), chs) ? 1 : 0); }
          return near(b) - near(a);
        }).slice(0, 4);
        push(finish({
          key: key, kind: 'spot', target: tId, drug: d.id, chs: chs, tag: 'Spot the mechanism',
          q: 'Which of these drugs ' + SPOT_A[action] + ' ' + (/oxidase|esterase/i.test(T.name) ? '' : 'the ') + '**' + lc(plain(T.name)) + '**?',
          why: 'In the drug library, ' + lc(d.name) + ' is listed with this action (' + action + ' · ' + plain(T.short || T.name) + '). ' + stop(plain(d.short || d.nbn || d.cls || '')), pages: pagesOf(d), chain: [d.name, action + ' · ' + (T.short || T.name), plain((T.summary || '').split(/(?<=\.)\s/)[0])]
        }, { text: d.name }, pool.map(function (z) {
          return { text: z.name, why: z.name + ': ' + stop(lc(plain(z.nbn || z.cls || z.group || ''))) + ' No action at this target is listed for it.' };
        }), r));
      });
    });

    /* ---- circ: symptom to circuit ---- */
    var CQ = SP.circuitQ || {}, circs = (SP.circuits || []).filter(function (c) { return CQ[c.id]; });
    circs.forEach(function (c) {
      var me = CQ[c.id], key = 'circ/' + c.id, r = rng(key), used = {};
      used[me.a] = 1;
      var pool = [];
      shuffled(circs, r).forEach(function (o) {
        var q = CQ[o.id];
        if (pool.length >= 4 || used[q.a] || overlap(q.tags, me.tags)) return;
        if (pool.some(function (p) { return overlap(CQ[p.id].tags, q.tags); })) return;   // wrong answers distinct from each other too
        used[q.a] = 1; pool.push(o);
      });
      if (pool.length < 4) return;
      push(finish({
        key: key, kind: 'circ', circuit: c.id, chs: [c.ch], tag: 'Symptom to circuit',
        q: (me.stem || '**' + plain(c.disorder) + '** — ' + lc(plain(c.symptom)) + '.') + ' Which circuit does the symptom-based approach link this to?',
        why: stop(plain(c.circuit)) + ' Neurotransmitters: ' + stop(plain((c.nts || []).join(', '))) + ((c.treat || []).length ? ' Targeted by: ' + stop(plain(c.treat.join('; '))) : ''),
        pages: String(c.pages || '').split(/[,;]/)[0].trim(), chain: [plain(c.symptom), me.a, plain((c.nts || []).join(', '))]
      }, { text: me.a }, pool.map(function (o) {
        return { text: CQ[o.id].a, why: 'Linked instead with ' + lc(plain(o.symptom)) + ' (' + lc(plain(o.disorder)) + ').' };
      }), r));
    });

    var byKey = {};
    items.forEach(function (it) { it.id = it.key; byKey[it.key] = it; });
    return { items: items, byKey: byKey, mechs: grid, kinds: KINDS };
  }

  var KINDS = [
    { id: 'se', label: 'Explain the side effect', blurb: 'A drug and one of its side effects: pick the action behind it.' },
    { id: 'pred', label: 'Predict from the action', blurb: 'Given a mechanism, say what it will do.' },
    { id: 'cmp', label: 'Compare two drugs', blurb: 'Two drugs of one type: find the action that explains the difference.' },
    { id: 'spot', label: 'Spot the mechanism', blurb: 'Pick the drug with a given action at a given target.' },
    { id: 'circ', label: 'Symptom to circuit', blurb: 'Match a symptom to its hypothetically malfunctioning circuit.' }
  ];
  var cache = null;
  SP.reason = { build: build, kinds: KINDS, all: function () { return cache || (cache = build()); } };
})(typeof window !== 'undefined' ? window : globalThis);
