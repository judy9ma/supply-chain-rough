/* The Humanoid Stack — page logic.
   You normally don't need to edit this file: content lives in data.js. */
(function () {
  "use strict";

  var DATA = window.ROBOT_DATA || { labels: [], components: [] };
  var LABELS = DATA.labels || [];
  var COMPS = DATA.components || [];

  /* ---------- Render/camera constants (must match how the frames were rendered) ---------- */
  var N = 72;                         // frames in a full turn (5° each)
  var FRAME_W = 720, FRAME_H = 960;   // rendered image size
  var DEPTH_W = 240, DEPTH_H = 320, DEPTH_COLS = 12, NEAR = 16, FAR = 24;
  var C0 = [0, -20, 4.6], TARGET = [0, 0, 3.9], PIVOT = [0, 0.05, 0];
  var TAN_V = 18 / 85, TAN_H = TAN_V * FRAME_W / FRAME_H;

  var LAYERS = [
    ["sensing", "Sensing"], ["actuation", "Actuation"], ["power", "Power"], ["manufacturing", "Manufacturing"],
    ["intelligence", "Intelligence Stack"], ["ecosystem", "Ecosystem"]
  ];
  var STANCE = { "china-leads": "China Leads", "contested": "Contested", "foreign-led": "Foreign-Led" };

  /* ---------- Small helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function mul(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function norm(a) { var l = Math.sqrt(dot(a, a)); return mul(a, 1 / l); }
  function rotZ(v, t) { var c = Math.cos(t), s = Math.sin(t); return [c * v[0] - s * v[1], s * v[0] + c * v[1], v[2]]; }
  function labelById(id) { for (var i = 0; i < LABELS.length; i++) if (LABELS[i].id === id) return LABELS[i]; return null; }
  function compById(id) { for (var i = 0; i < COMPS.length; i++) if (COMPS[i].id === id) return COMPS[i]; return null; }
  function compsAt(labelId) { return COMPS.filter(function (c) { return (c.labels || []).indexOf(labelId) >= 0; }); }

  /* ---------- Camera for frame i: the camera orbits the robot by -angle ---------- */
  var F0 = norm(sub(TARGET, C0)), R0 = norm(cross(F0, [0, 0, 1])), U0 = cross(R0, F0);
  function camera(i) {
    var t = -i * 2 * Math.PI / N;
    return { c: add(PIVOT, rotZ(sub(C0, PIVOT), t)), f: rotZ(F0, t), r: rotZ(R0, t), u: rotZ(U0, t) };
  }
  function project(p, i) {
    var cam = camera(i), v = sub(p, cam.c), z = dot(v, cam.f);
    var x = dot(v, cam.r) / z / TAN_H, y = dot(v, cam.u) / z / TAN_V;
    return { u: 0.5 + x / 2, v: 0.5 - y / 2, dist: Math.sqrt(dot(v, v)) };
  }

  /* ---------- Depth maps (for hiding labels behind the body, and for click-to-place) ---------- */
  var depth = null;
  (function loadDepth() {
    if (!window.ROBOT_DEPTH) return;
    var img = new Image();
    img.onload = function () {
      try {
        var cv = document.createElement("canvas"); cv.width = img.width; cv.height = img.height;
        var cx = cv.getContext("2d"); cx.drawImage(img, 0, 0);
        depth = cx.getImageData(0, 0, img.width, img.height);
        layoutPins();
      } catch (e) { depth = null; }
    };
    img.src = window.ROBOT_DEPTH;
  })();
  function depthAt(i, u, v) {           // distance from camera to the robot surface, or null
    if (!depth) return undefined;
    var px = Math.floor(u * DEPTH_W), py = Math.floor(v * DEPTH_H);
    if (px < 0 || py < 0 || px >= DEPTH_W || py >= DEPTH_H) return null;
    var gx = (i % DEPTH_COLS) * DEPTH_W + px, gy = Math.floor(i / DEPTH_COLS) * DEPTH_H + py;
    var val = depth.data[(gy * depth.width + gx) * 4];
    if (!val) return null;
    return NEAR + (val - 1) / 254 * (FAR - NEAR);
  }
  function isVisible(p, i) {
    var pr = project(p, i);
    if (!depth) {                        // fallback: hide points on the far side of the body
      var cam = camera(i); return dot(sub(p, add(PIVOT, [0, 0, p[2]])), cam.f) < 0.25;
    }
    var best = null;                     // most generous surface depth in a 3x3 neighbourhood
    for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) {
      var d = depthAt(i, pr.u + dx / DEPTH_W, pr.v + dy / DEPTH_H);
      if (d === null) return true;
      if (best === null || d > best) best = d;
    }
    return pr.dist <= best + 0.3;
  }

  /* ---------- State ---------- */
  var state = { frame: 0, view: "anatomy", comp: null, label: null, temp: null, segment: null, tlSeg: "", tlOrigin: "" };
  var EDIT = /(^|#)edit$/.test(location.hash);

  /* ---------- Frames ---------- */
  var robot = $("robot"), viewport = $("viewport");
  var frames = [];
  function frameSrc(i) { return "frames/f" + ("00" + i).slice(-3) + ".webp"; }
  for (var k = 0; k < N; k++) { var im = new Image(); im.decoding = "async"; im.src = frameSrc(k); frames.push(im); }
  function setFrame(i) {
    state.frame = ((i % N) + N) % N;
    robot.src = frames[state.frame].src;
    $("angle").textContent = (state.frame * 360 / N) + "°";
    layoutPins();
  }
  var anim = null;
  function spinTo(target) {
    if (anim) cancelAnimationFrame(anim);
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var diff = ((target - state.frame) % N + N) % N; if (diff > N / 2) diff -= N;
    if (reduce || !diff) { setFrame(target); return; }
    var step = diff > 0 ? 1 : -1, last = 0;
    (function tick(t) {
      if (t - last > 22) { last = t; setFrame(state.frame + step); diff -= step; }
      if (diff) anim = requestAnimationFrame(tick); else anim = null;
    })(0);
  }

  /* ---------- Pins ---------- */
  var pinsEl = $("pins"), leadersEl = $("leaders");
  function activeLabelIds() {
    var sl = activeSegLabels(); if (sl) return sl;
    if (state.comp) { var c = compById(state.comp); return c ? (c.labels || []) : []; }
    if (state.label) return [state.label];
    return null;
  }
  function layoutPins() {
    var W = viewport.clientWidth, H = viewport.clientHeight;
    if (!W || !H) return;
    var on = activeLabelIds();
    var items = [];
    LABELS.concat(state.temp ? [state.temp] : []).forEach(function (L) {
      if (!L || !L.at || L.at.length !== 3) return;
      var pr = project(L.at, state.frame);
      var vis = isVisible(L.at, state.frame);
      // Text goes on whichever side of the body the point is on; "side" in data.js decides for points near the middle.
      var side = Math.abs(pr.u - 0.5) <= 0.025 ? (L.side || "right") : (pr.u < 0.5 ? "left" : "right");
      items.push({ L: L, x: pr.u * W, y: pr.v * H, vis: vis, side: side, isOn: on ? on.indexOf(L.id) >= 0 : false });
    });
    // Label text sits in a column beside the body; push overlapping labels apart vertically.
    var GAP = 24, OFF = Math.max(34, W * 0.1);
    ["left", "right"].forEach(function (s) {
      var col = items.filter(function (it) { return it.vis && it.side === s; }).sort(function (a, b) { return a.y - b.y; });
      col.forEach(function (it, idx) { it.ty = it.y; if (idx && it.ty < col[idx - 1].ty + GAP) it.ty = col[idx - 1].ty + GAP; });
      for (var j = col.length - 2; j >= 0; j--) if (col[j + 1].ty > H - 12 && col[j].ty > col[j + 1].ty - GAP) col[j].ty = col[j + 1].ty - GAP;
    });
    var dotsHtml = "", lines = "";
    items.forEach(function (it) {
      var L = it.L, cls = it.isOn ? " on" : (on ? " dim" : "");
      var n = L.temp ? "" : compsAt(L.id).length;
      dotsHtml += '<button class="pin-dot' + cls + (it.vis ? "" : " hidden-behind") + (L.temp ? " pin-temp" : "") +
        '" style="left:' + it.x.toFixed(1) + "px;top:" + it.y.toFixed(1) + 'px" data-label="' + esc(L.id) +
        '" aria-label="' + esc(L.text) + '" tabindex="' + (it.vis ? 0 : -1) + '"></button>';
      if (!it.vis) return;
      var tx = it.side === "left" ? it.x - OFF : it.x + OFF;
      if (it.side === "right") tx = Math.max(tx, W * 0.5 + OFF * 0.4); else tx = Math.min(tx, W * 0.5 - OFF * 0.4);
      lines += '<line class="' + cls.trim() + '" x1="' + (it.x / W * 100) + '" y1="' + (it.y / H * 100) + '" x2="' + (tx / W * 100) + '" y2="' + (it.ty / H * 100) + '"/>';
      dotsHtml += '<button class="pin-label ' + it.side + cls + '" style="left:' + tx.toFixed(1) + "px;top:" + it.ty.toFixed(1) +
        'px" data-label="' + esc(L.id) + '" tabindex="-1">' + esc(L.text) + (n !== "" ? '<span class="n">' + n + "</span>" : "") + "</button>";
    });
    pinsEl.innerHTML = dotsHtml;
    leadersEl.innerHTML = lines;
  }
  pinsEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-label]"); if (!b || moved) return;
    var id = b.getAttribute("data-label"); if (state.temp && id === state.temp.id) return;
    var list = compsAt(id);
    state.view = "anatomy"; syncTabs();
    if (list.length === 1) { state.label = id; state.comp = list[0].id; }
    else { state.label = id; state.comp = null; }
    render();
  });
  window.addEventListener("resize", layoutPins);

  /* ---------- Drag to rotate ---------- */
  var drag = null, moved = false;
  viewport.addEventListener("pointerdown", function (e) {
    if (e.button !== 0) return;
    drag = { x: e.clientX, f: state.frame, id: e.pointerId }; moved = false;
  });
  window.addEventListener("pointermove", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x;
    if (!moved && Math.abs(dx) > 4) { moved = true; viewport.classList.add("dragging"); try { viewport.setPointerCapture(e.pointerId); } catch (_) {} $("drag-hint").style.opacity = 0; }
    if (moved) setFrame(drag.f + Math.round(dx / 7));
  });
  window.addEventListener("pointerup", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var wasMoved = moved; drag = null; viewport.classList.remove("dragging");
    if (!wasMoved && EDIT && !e.target.closest(".pins button")) placeAt(e);
    setTimeout(function () { moved = false; }, 0);
  });
  $("rot-left").onclick = function () { spinTo(state.frame - 6); };
  $("rot-right").onclick = function () { spinTo(state.frame + 6); };
  document.querySelectorAll(".presets button").forEach(function (b) { b.onclick = function () { spinTo(+b.getAttribute("data-frame")); }; });
  viewport.tabIndex = 0;
  viewport.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { setFrame(state.frame - 1); e.preventDefault(); }
    if (e.key === "ArrowRight") { setFrame(state.frame + 1); e.preventDefault(); }
  });

  /* ---------- Sourced research data (sources-data.js) ---------- */
  var SD = window.SOURCE_DATA || { meta: {}, segments: [], sources: {}, players: [] };
  var SEGS = SD.segments || [];
  function segByKey(k) { for (var i = 0; i < SEGS.length; i++) if (SEGS[i].key === k) return SEGS[i]; return null; }
  function segName(k) { var s = segByKey(k); return s ? s.name : k; }
  function compSegs(cid) { return SEGS.filter(function (s) { return s.components.indexOf(cid) >= 0; }).map(function (s) { return s.key; }); }
  function src(id) { return SD.sources[id] || null; }
  function shortPub(p) { p = String(p || "").split(";")[0]; return p.length > 30 ? p.slice(0, 28) + "…" : p; }
  function srcChip(id) {
    var s = src(id); if (!s) return '<span class="src">' + esc(id) + "</span>";
    return '<a class="src" href="' + esc(s.url) + '" target="_blank" rel="noopener" title="' + esc(s.title + " — " + s.publisher + (s.date ? ", " + s.date : "")) + '">' +
      esc(id) + ' <span>' + esc(shortPub(s.publisher)) + (s.date ? ", " + esc(String(s.date).slice(0, 4)) : "") + "</span></a>";
  }
  function nkey(s) { return String(s || "").toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]/g, ""); }
  function playerMatches(pl, name) {
    var n = nkey(name); if (!n) return false;
    var cands = [pl.name].concat(pl.aliases || []);
    for (var i = 0; i < cands.length; i++) {
      var c = nkey(cands[i]); if (!c) continue;
      if (c === n) return true;
      if (n.length >= 5 && c.length >= 5 && (n.indexOf(c) === 0 || c.indexOf(n) === 0)) return true;
    }
    return false;
  }
  function findPlayer(name) { for (var i = 0; i < SD.players.length; i++) if (playerMatches(SD.players[i], name)) return SD.players[i]; return null; }
  function inComp(x, cid) { return (x.components || []).indexOf(cid) >= 0; }
  function inSeg(x, key) { return x.seg === key; }
  function collect(field, test) {
    var out = [];
    SD.players.forEach(function (p) { (p[field] || []).forEach(function (x) { if (test(x)) out.push({ player: p, item: x }); }); });
    return out;
  }
  function isChinese(p) { return p.origin && p.origin.classification === "Chinese"; }
  function pctVal(v) { var m = String(v || "").match(/^\s*(\d+(?:\.\d+)?)\s*%/); return m ? parseFloat(m[1]) : null; }
  var KIND_LABEL = { "company-reported": "Company-reported", forecast: "Forecast", target: "Target", sample: "Sample", capacity: "Capacity", estimate: "Estimate", orders: "Orders", shipments: "Shipments" };
  function kindTags(ks) { return (ks || []).map(function (k) { return '<span class="ktag">' + esc(KIND_LABEL[k] || k) + "</span>"; }).join(""); }
  var UNV = '<span class="flag" title="Not supported by the 34 sources in sources-data.js">Unverified</span>';
  function verifyBadge(v) {
    if (!v) return UNV;
    if (v.status === "supported") return '<span class="flag ok" title="' + esc(v.note || "") + '">Supported</span> ' + (v.source ? srcChip(v.source) : "");
    if (v.status === "conflict") return '<span class="flag warn" title="' + esc(v.note || "") + '">Conflict</span>';
    return '<span class="flag" title="' + esc(v.note || "Not supported by the 34 sources") + '">Unverified</span>';
  }

  /* ---------- Panel ---------- */
  var panel = $("panel");
  function stanceChip(c) {
    if (!c.stance) return "";
    return '<span class="chip s-' + esc(c.stance) + '"><span class="dot"></span>' + esc(STANCE[c.stance] || c.stance) + "</span> " + verifyBadge(c.stanceVerify);
  }
  function labelNames(c) { return (c.labels || []).map(function (id) { var L = labelById(id); return L ? L.text : id; }); }
  function row(c) {
    var n = collect("entries", function (e) { return inComp(e, c.id); }).length;
    return '<li><button class="row-btn" data-comp="' + esc(c.id) + '"><span class="dot s-' + esc(c.stance || "none") + '"></span>' +
      '<span><span class="name">' + esc(c.name) + '</span><span class="where">' + esc(labelNames(c).join(" · ") || "Off-body") +
      (n ? " · " + n + " sourced player" + (n > 1 ? "s" : "") : "") + "</span></span>" +
      '<span class="chev" aria-hidden="true">&#8250;</span></button></li>';
  }
  function renderOverview() {
    var html = '<p class="intro">Drag the robot to turn it. Click a label on the body, or pick a component below, to see who supplies it. Sourced entries link to the 34 research sources; anything else is marked unverified.</p>';
    var onBody = COMPS.filter(function (c) { return !c.offBody; }), off = COMPS.filter(function (c) { return c.offBody; });
    LAYERS.forEach(function (l) {
      var list = onBody.filter(function (c) { return c.layer === l[0]; });
      if (!list.length) return;
      html += '<div class="group"><h3>' + esc(l[1]) + '</h3><ul class="rows">' + list.map(row).join("") + "</ul></div>";
    });
    var other = onBody.filter(function (c) { return !LAYERS.some(function (l) { return l[0] === c.layer; }); });
    if (other.length) html += '<div class="group"><h3>Other</h3><ul class="rows">' + other.map(row).join("") + "</ul></div>";
    if (off.length) html += '<div class="group"><h3>Off-Body Layers</h3><p class="muted" style="margin:0 0 8px">Software, data, tooling, manufacturing and materials have no single body location.</p><ul class="rows">' + off.map(row).join("") + "</ul></div>";
    return html;
  }
  function renderLabel() {
    var L = labelById(state.label), list = compsAt(state.label);
    var html = '<button class="back" data-go="home">&#8249; All Components</button><p class="eyebrow">On the Body</p><h2>' + esc(L ? L.text : state.label) + "</h2>";
    html += list.length ? '<div class="section"><ul class="rows">' + list.map(row).join("") + "</ul></div>"
      : '<p class="muted section">No components point to this label yet. Add its id to a component’s <code>labels</code> in data.js.</p>';
    return html;
  }

  /* --- merged player lists --- */
  function entryLines(p, entries) {
    return entries.map(function (e) {
      var pos = e.position && !/^No comparable/i.test(e.position) ? " — " + e.position : "";
      return '<span class="pnote">' + esc(e.role) + esc(pos) + ' <span class="conf">' + esc(e.confidence) + " confidence</span> " + srcChip(e.source) + "</span>";
    }).join("");
  }
  function mergedPlayers(c, wantChinese) {
    var existing = (wantChinese ? c.china : c.incumbents) || [];
    var sourced = collect("entries", function (e) { return inComp(e, c.id); });
    var used = {}, html = "";
    existing.forEach(function (x) {
      var pl = findPlayer(x.name), lines = "";
      if (pl) {
        used[pl.id] = true;
        var ents = sourced.filter(function (s) { return s.player === pl; }).map(function (s) { return s.item; });
        if (ents.length) lines = entryLines(pl, ents);
        else lines = '<span class="pnote">In sources under ' + pl.entries.map(function (e) { return '<button class="tag" data-seg="' + esc(e.seg) + '">' + esc(segName(e.seg)) + "</button>"; }).join(" ") + "</span>";
      }
      html += "<li><span class=\"pn\">" + esc(x.name) + "</span>" +
        (pl && pl.origin.country ? '<span class="pc">' + esc(pl.origin.country) + "</span>" : (x.country ? '<span class="pc">' + esc(x.country) + "</span>" : "")) +
        (x.note ? '<span class="pnote">' + esc(x.note) + (pl ? "" : " " + UNV) + "</span>" : (pl ? "" : '<span class="pnote">' + UNV + "</span>")) +
        (x.verify ? '<span class="pnote"><span class="flag warn">Conflict</span> ' + esc(x.verify) + "</span>" : "") + lines + "</li>";
    });
    var byPlayer = {};
    sourced.forEach(function (s) {
      if (isChinese(s.player) !== wantChinese || used[s.player.id]) return;
      (byPlayer[s.player.id] = byPlayer[s.player.id] || { p: s.player, ents: [] }).ents.push(s.item);
    });
    Object.keys(byPlayer).forEach(function (k) {
      var b = byPlayer[k];
      html += "<li><span class=\"pn\">" + esc(b.p.name) + "</span>" + (b.p.origin.country ? '<span class="pc">' + esc(b.p.origin.country) + "</span>" : "") + entryLines(b.p, b.ents) + "</li>";
    });
    return html ? '<ul class="plist">' + html + "</ul>" : '<ul class="plist"><li class="empty">None listed in notes or sources.</li></ul>';
  }
  function relList(rels) {
    if (!rels.length) return "";
    return '<div class="section"><h3>Supplier & Customer Relationships</h3><ul class="rels">' + rels.map(function (r) {
      return '<li><b>' + esc(r.player.name) + ":</b> " + esc(r.item.text) + " " + srcChip(r.item.source) + "</li>";
    }).join("") + "</ul></div>";
  }

  /* --- market share & scale --- */
  function groupKey(m) { return [m.metric, m.market_definition, m.geography, m.year].join("|"); }
  function shareCharts(shares) {
    var groups = {};
    shares.forEach(function (s) { var k = groupKey(s.item); (groups[k] = groups[k] || []).push(s); });
    var html = "";
    Object.keys(groups).forEach(function (k) {
      var g = groups[k], m = g[0].item;
      if (!/share/i.test(m.metric || "")) return;
      var vals = g.map(function (s) { return pctVal(s.item.value); });
      if (vals.some(function (v) { return v === null; })) return;
      var order = g.map(function (s, i) { return { s: s, v: vals[i] }; }).sort(function (a, b) { return b.v - a.v; });
      var total = order.reduce(function (a, x) { return a + x.v; }, 0), rest = Math.max(0, 100 - total);
      var segs = order.map(function (x, i) {
        return '<div class="seg c' + (i % 4) + '" style="width:' + x.v + '%" title="' + esc(x.s.player.name + " " + x.v + "%") + '">' + (x.v >= 12 ? '<span>' + esc(x.s.player.name) + " " + x.v + "%</span>" : "") + "</div>";
      }).join("");
      if (rest > 0) segs += '<div class="seg rest" style="width:' + rest + '%" title="Unattributed remainder ' + rest.toFixed(0) + '%">' + (rest >= 12 ? "<span>Others " + rest.toFixed(0) + "%</span>" : "") + "</div>";
      html += '<figure class="share"><figcaption><b>' + esc(m.market_definition) + "</b><span>" + esc(m.geography) + " · " + esc(m.year) + " · " + esc(m.metric) + " " + kindTags(m.kinds) + " " + srcChip(m.source) + "</span></figcaption>" +
        '<div class="bar" role="img" aria-label="' + esc(order.map(function (x) { return x.s.player.name + " " + x.v + "%"; }).join(", ")) + '">' + segs + "</div>" +
        '<ul class="lg">' + order.map(function (x, i) { return '<li><i class="sw c' + (i % 4) + '"></i>' + esc(x.s.player.name) + " <b>" + x.v + "%</b></li>"; }).join("") +
        (rest > 0 ? '<li><i class="sw rest"></i>Unattributed remainder <b>' + rest.toFixed(0) + "%</b> (by subtraction)</li>" : "") + "</ul></figure>";
    });
    return html;
  }
  function scaleTable(shares) {
    if (!shares.length) return "";
    return '<div class="tbl-wrap"><table class="scale"><thead><tr><th>Player</th><th>Figure</th><th>Metric</th><th>What it measures</th><th>Geography</th><th>Year</th><th>Source</th></tr></thead><tbody>' +
      shares.map(function (s) {
        var m = s.item;
        return "<tr><td>" + esc(s.player.name) + "</td><td><b>" + esc(m.value) + "</b><br>" + kindTags(m.kinds) + "</td><td>" + esc(m.metric) + "</td><td>" + esc(m.market_definition) +
          (m.source_wording ? '<br><span class="quote">“' + esc(m.source_wording) + "”</span>" : "") + "</td><td>" + esc(m.geography) + "</td><td>" + esc(m.year) + "</td><td>" + srcChip(m.source) + "</td></tr>";
      }).join("") + "</tbody></table></div>";
  }
  function shareSection(shares) {
    var charts = shareCharts(shares);
    var html = '<div class="section"><h3>Market Share & Scale</h3>';
    html += charts || '<p class="muted">No defensible share data in sources.' + (shares.length ? " The figures below are scale indicators, not market shares, and are not combined." : "") + "</p>";
    if (shares.length) html += '<h4 class="sub-h">Scale Indicators</h4>' + scaleTable(shares);
    return html + "</div>";
  }

  /* --- timelines --- */
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmtDate(d) {
    var m = String(d || "").match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/); if (!m) return d || "";
    if (!m[2]) return m[1];
    return (m[3] ? +m[3] + " " : "") + MONTHS[+m[2] - 1] + " " + m[1];
  }
  function eventRow(x) {
    var head = x.player ? "<b>" + esc(x.player) + "</b> · " : "";
    return "<li><time>" + (x.date ? esc(fmtDate(x.date)) : "—") + "</time><div><p>" + head + esc(x.event) + "</p>" +
      (x.significance ? '<p class="sig">' + esc(x.significance) + "</p>" : "") +
      '<div class="tagrow">' + (x.seg ? '<button class="tag" data-seg="' + esc(x.seg) + '">' + esc(segName(x.seg)) + "</button>" : "") +
      (x.comp && (!x.seg || nkey(x.comp.name) !== nkey(segName(x.seg))) ? '<button class="tag" data-comp="' + esc(x.comp.id) + '">' + esc(x.comp.name) + "</button>" : "") +
      (x.source ? srcChip(x.source) : verifyBadge(x.verify)) + "</div></div></li>";
  }
  function eventList(evs) {
    var dated = evs.filter(function (e) { return e.date; }).sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); });
    var undated = evs.filter(function (e) { return !e.date; });
    var html = "", year = null;
    dated.forEach(function (x) {
      var y = String(x.date).slice(0, 4);
      if (y !== year) { if (year) html += "</ol>"; html += '<p class="year">' + esc(y) + '</p><ol class="tl">'; year = y; }
      html += eventRow(x);
    });
    if (year) html += "</ol>";
    if (undated.length) html += '<p class="year">Undated</p><ol class="tl">' + undated.map(eventRow).join("") + "</ol>";
    return html;
  }
  function manualEvents(c) {
    return (c.timeline || []).map(function (e) { return { date: e.date, event: e.text, verify: e.verify, comp: c, seg: compSegs(c.id)[0] || null, origin: null }; });
  }
  function sourcedEvents(test) {
    return collect("events", test).map(function (x) {
      return { date: x.item.date, event: x.item.event, significance: x.item.significance, player: x.player.name, seg: x.item.seg, source: x.item.source, origin: x.player.origin.classification, comp: compById((x.item.components || [])[0]) };
    });
  }

  /* --- component detail --- */
  function renderComp() {
    var c = compById(state.comp); if (!c) { state.comp = null; return renderOverview(); }
    var layer = (LAYERS.filter(function (l) { return l[0] === c.layer; })[0] || [0, c.layer])[1];
    var html = '<button class="back" data-go="' + (state.label ? "label" : "home") + '">&#8249; ' +
      (state.label && labelById(state.label) ? esc(labelById(state.label).text) : "All Components") + "</button>";
    html += '<p class="eyebrow">' + esc(layer) + (c.offBody ? " · Off-Body" : "") + "</p><h2>" + esc(c.name) + "</h2>";
    if (c.oneLiner) html += '<p class="lede">' + esc(c.oneLiner) + "</p>";
    var segs = compSegs(c.id);
    html += '<div class="meta-line">' + stanceChip(c) + (c.labels || []).map(function (id) {
      var L = labelById(id); return '<button class="tag" data-jump="' + esc(id) + '">' + esc(L ? L.text : id) + "</button>";
    }).join("") + segs.map(function (k) { return '<button class="tag seg" data-seg="' + esc(k) + '">Segment: ' + esc(segName(k)) + "</button>"; }).join("") + "</div>";
    if (c.stats && c.stats.length) html += '<h3 class="mt">Figures From Original Notes ' + UNV + '</h3><div class="stats">' + c.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
    }).join("") + "</div>";
    if (c.summary) html += '<p class="summary">' + esc(c.summary) + "</p>";
    html += '<div class="players"><div><h3>Global Incumbents</h3>' + mergedPlayers(c, false) + '</div><div><h3 class="flag-cn">Chinese Players</h3>' + mergedPlayers(c, true) + "</div></div>";
    html += relList(collect("rels", function (r) { return inComp(r, c.id); }));
    html += shareSection(collect("shares", function (s) { return inComp(s, c.id); }));
    var evs = manualEvents(c).concat(sourcedEvents(function (e) { return inComp(e, c.id); }));
    html += '<div class="section"><h3>Timeline</h3>' + (evs.length ? eventList(evs) : '<p class="muted">No dated milestones in notes or sources. Add them to this component’s <code>timeline</code> in data.js.</p>') + "</div>";
    return html;
  }

  /* --- segments --- */
  function segPlayers(key) {
    var seen = {}, out = [];
    SD.players.forEach(function (p) { if (p.segments.indexOf(key) >= 0 && !seen[p.id]) { seen[p.id] = true; out.push(p); } });
    return out;
  }
  function splitBar(players) {
    var cn = players.filter(isChinese).length, fx = players.length - cn, max = Math.max(cn, fx, 1);
    return '<div class="split" role="img" aria-label="' + cn + " Chinese, " + fx + ' Non-Chinese players">' +
      '<div class="srow"><span>Chinese</span><div class="track"><div class="fill cn" style="width:' + (cn / max * 100) + '%"></div></div><b>' + cn + "</b></div>" +
      '<div class="srow"><span>Non-Chinese</span><div class="track"><div class="fill fx" style="width:' + (fx / max * 100) + '%"></div></div><b>' + fx + "</b></div></div>";
  }
  function renderSegments() {
    var html = '<p class="eyebrow">Segment Breakdown</p><h2>Players by Supply-Chain Segment</h2><p class="intro">Counts are unique companies and institutions named in the 34 sources for each segment. Chinese means mainland-China headquarters.</p>';
    function rows(list) {
      return '<ul class="rows">' + list.map(function (s) {
        var ps = segPlayers(s.key), cn = ps.filter(isChinese).length;
        return '<li><button class="row-btn segrow" data-seg="' + esc(s.key) + '"><span class="mini"><i class="cn" style="flex:' + cn + '"></i><i class="fx" style="flex:' + (ps.length - cn) + '"></i></span>' +
          '<span><span class="name">' + esc(s.name) + '</span><span class="where">' + ps.length + " player" + (ps.length === 1 ? "" : "s") + " · " + cn + " Chinese · " + (ps.length - cn) + " Non-Chinese</span></span>" +
          '<span class="chev" aria-hidden="true">&#8250;</span></button></li>';
      }).join("") + "</ul>";
    }
    html += '<div class="group"><h3>On the Body</h3>' + rows(SEGS.filter(function (s) { return !s.offBody; })) + "</div>";
    html += '<div class="group"><h3>Off-Body Layers</h3>' + rows(SEGS.filter(function (s) { return s.offBody; })) + "</div>";
    return html;
  }
  function renderSegment() {
    var s = segByKey(state.segment); if (!s) { state.segment = null; return renderSegments(); }
    var ps = segPlayers(s.key);
    var html = '<button class="back" data-go="segments">&#8249; All Segments</button><p class="eyebrow">' + (s.offBody ? "Off-Body Layer" : "Segment") + "</p><h2>" + esc(s.name) + "</h2>";
    html += '<div class="meta-line">' + s.components.map(function (id) { var c = compById(id); return c ? '<button class="tag" data-comp="' + esc(id) + '">' + esc(c.name) + "</button>" : ""; }).join("") + "</div>";
    html += '<div class="section"><h3>Chinese vs Non-Chinese Players</h3>' + splitBar(ps) + "</div>";
    html += '<div class="section"><h3>Key Players</h3>' + (ps.length ? '<ul class="plist">' + ps.map(function (p) {
      var ents = p.entries.filter(function (e) { return e.seg === s.key; });
      return "<li><span class=\"pn\">" + esc(p.name) + '</span><span class="pc">' + esc(p.origin.classification) + (p.origin.country ? " · " + esc(p.origin.country) : "") + "</span>" +
        ents.map(function (e) { return '<span class="pnote"><b>Role:</b> ' + esc(e.role) + '</span><span class="pnote"><b>Position:</b> ' + esc(e.position) + ' <span class="conf">' + esc(e.confidence) + " confidence</span> " + srcChip(e.source) + "</span>"; }).join("") + "</li>";
    }).join("") + "</ul>" : '<p class="muted">No supported entries in the sources for this segment.</p>') + "</div>";
    html += relList(collect("rels", function (r) { return inSeg(r, s.key); }));
    html += shareSection(collect("shares", function (x) { return inSeg(x, s.key); }));
    var evs = sourcedEvents(function (e) { return inSeg(e, s.key); });
    html += '<div class="section"><h3>Timeline</h3>' + (evs.length ? eventList(evs) : '<p class="muted">No dated events in the sources for this segment.</p>') + "</div>";
    return html;
  }

  /* --- timeline tab --- */
  function renderTimeline() {
    var evs = sourcedEvents(function () { return true; });
    COMPS.forEach(function (c) { evs = evs.concat(manualEvents(c)); });
    var html = '<p class="eyebrow">Development Timeline</p><h2>Milestones Across the Stack</h2>';
    html += '<div class="filters"><label>Segment <select id="f-seg"><option value="">All segments</option>' + SEGS.map(function (s) {
      return '<option value="' + esc(s.key) + '"' + (state.tlSeg === s.key ? " selected" : "") + ">" + esc(s.name) + "</option>";
    }).join("") + "</select></label>" +
      '<div class="toggle" role="group" aria-label="Origin">' + [["", "All"], ["Chinese", "Chinese"], ["Non-Chinese", "Non-Chinese"]].map(function (o) {
        return '<button data-origin="' + o[0] + '" aria-pressed="' + (state.tlOrigin === o[0]) + '">' + o[1] + "</button>";
      }).join("") + "</div></div>";
    var shown = evs.filter(function (e) {
      if (state.tlSeg && e.seg !== state.tlSeg) return false;
      if (state.tlOrigin && e.origin !== state.tlOrigin) return false;
      return true;
    });
    var nSrc = shown.filter(function (e) { return e.source; }).length, nUnv = shown.length - nSrc;
    html += '<p class="muted">' + shown.length + " events: " + nSrc + " sourced" + (nUnv ? ", " + nUnv + " from original notes (unverified)" : "") + ".</p>";
    html += shown.length ? '<div class="section">' + eventList(shown) + "</div>" : '<p class="muted section">No events match these filters.</p>';
    return html;
  }

  /* --- sources tab --- */
  function renderSources() {
    var m = SD.meta || {}, ids = Object.keys(SD.sources).sort();
    var html = '<p class="eyebrow">Sources & Method</p><h2>' + ids.length + " Sources</h2>";
    html += '<div class="section method"><h3>Methodology</h3><ul>' +
      (m.classification_rule ? "<li><b>Classification:</b> " + esc(m.classification_rule) + "</li>" : "") +
      (m.interpretation_rules ? "<li><b>Reading the figures:</b> " + esc(m.interpretation_rules) + "</li>" : "") +
      (m.limitations ? "<li><b>Limitations:</b> " + esc(m.limitations) + "</li>" : "") +
      (m.coverage_status ? "<li><b>Coverage:</b> " + esc(m.coverage_status) + (m.search_method ? " " + esc(m.search_method) : "") + "</li>" : "") +
      (m.verification_method ? "<li><b>Verification:</b> " + esc(m.verification_method) + "</li>" : "") +
      (m.quality_scale ? "<li><b>Quality scores:</b> " + esc(m.quality_scale) + "</li>" : "") +
      (m.research_cutoff ? "<li><b>Research cutoff:</b> " + esc(m.research_cutoff) + (m.language_counts ? " · " + esc(m.language_counts.English) + " English, " + esc(m.language_counts.Chinese) + " Chinese sources" : "") + "</li>" : "") +
      "<li><b>On this page:</b> anything not backed by these sources is marked <span class=\"flag\">Unverified</span>. Share charts are built only from figures that share one metric, definition, geography and year; everything else is listed as a scale indicator and never combined.</li></ul></div>";
    html += '<div class="section"><h3>Source List</h3><ol class="srcs">' + ids.map(function (id) {
      var s = SD.sources[id];
      return '<li id="src-' + esc(id) + '"><span class="sid">' + esc(id) + '</span><div><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title) + "</a>" +
        (s.titleOriginal && s.titleOriginal !== s.title ? '<span class="orig">' + esc(s.titleOriginal) + "</span>" : "") +
        '<span class="smeta">' + esc(s.publisher) + (s.date ? " · " + esc(s.date) : " · undated") + " · " + esc(s.language) + (s.type ? " · " + esc(s.type) : "") + "</span>" +
        '<span class="scores"><span>Depth <b>' + s.scores.depth + "</b></span><span>Data <b>" + s.scores.data + "</b></span><span>Primary <b>" + s.scores.primary + "</b></span></span>" +
        (s.reason ? '<span class="why">' + esc(s.reason) + "</span>" : "") + "</div></li>";
    }).join("") + "</ol></div>";
    return html;
  }

  function render() {
    panel.innerHTML = state.view === "timeline" ? renderTimeline()
      : state.view === "sources" ? renderSources()
      : state.view === "segments" ? (state.segment ? renderSegment() : renderSegments())
      : state.comp ? renderComp() : state.label ? renderLabel() : renderOverview();
    layoutPins();
  }
  panel.addEventListener("change", function (e) {
    if (e.target.id === "f-seg") { state.tlSeg = e.target.value; render(); }
  });
  panel.addEventListener("click", function (e) {
    var t = e.target.closest("[data-comp],[data-go],[data-jump],[data-seg],[data-origin]"); if (!t) return;
    if (t.hasAttribute("data-origin")) { state.tlOrigin = t.getAttribute("data-origin"); render(); return; }
    if (t.hasAttribute("data-comp")) {
      state.comp = t.getAttribute("data-comp"); state.view = "anatomy"; state.label = null; syncTabs();
      bringIntoView(compById(state.comp));
    } else if (t.hasAttribute("data-seg")) {
      state.segment = t.getAttribute("data-seg"); state.view = "segments"; syncTabs();
      var sg = segByKey(state.segment); if (sg) bringIntoView({ labels: sg.components.map(compById).filter(Boolean).reduce(function (a, c) { return a.concat(c.labels || []); }, []) });
    } else if (t.hasAttribute("data-jump")) {
      state.label = t.getAttribute("data-jump"); state.comp = null; bringIntoView({ labels: [state.label] });
    } else {
      var g = t.getAttribute("data-go");
      if (g === "home") { state.comp = null; state.label = null; } else if (g === "segments") { state.segment = null; } else { state.comp = null; }
    }
    render();
    if (window.innerWidth <= 900) panel.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  // If none of a component's pins are visible from the current angle, turn to the nearest angle where one is.
  function bringIntoView(c) {
    if (!c || !c.labels || !c.labels.length) return;
    var pts = c.labels.map(labelById).filter(Boolean).map(function (L) { return L.at; });
    if (!pts.length || pts.some(function (p) { return isVisible(p, state.frame); })) return;
    for (var d = 1; d <= N / 2; d++) {
      for (var s = -1; s <= 1; s += 2) {
        var f = state.frame + s * d;
        if (pts.some(function (p) { return isVisible(p, ((f % N) + N) % N); })) { spinTo(f); return; }
      }
    }
  }
  function activeSegLabels() {
    if (state.view !== "segments" || !state.segment) return null;
    var sg = segByKey(state.segment); if (!sg) return null;
    return sg.components.map(compById).filter(Boolean).reduce(function (a, c) { return a.concat(c.labels || []); }, []);
  }
  function syncTabs() {
    document.querySelectorAll(".tabs button").forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-view") === state.view)); });
  }
  document.querySelectorAll(".tabs button").forEach(function (b) {
    b.onclick = function () { state.view = b.getAttribute("data-view"); state.comp = null; state.label = null; state.segment = null; syncTabs(); render(); };
  });

  /* ---------- Placement mode (#edit) ---------- */
  function placeAt(e) {
    var rect = viewport.getBoundingClientRect();
    var u = (e.clientX - rect.left) / rect.width, v = (e.clientY - rect.top) / rect.height;
    var card = $("place-card"); card.hidden = false;
    var d = depthAt(state.frame, u, v);
    if (d === undefined) { card.innerHTML = '<p class="warn">Depth data didn’t load, so clicks can’t be turned into points. Check that depth.js is next to index.html.</p>'; return; }
    if (d === null) {
      card.innerHTML = '<p class="warn">That spot is empty space. Click on the robot itself. For a point off the body (like the cloud above the head), type its numbers by hand in data.js.</p>';
      return;
    }
    var cam = camera(state.frame);
    var x = (u - 0.5) * 2 * TAN_H, y = (0.5 - v) * 2 * TAN_V;
    var dir = norm(add(cam.f, add(mul(cam.r, x), mul(cam.u, y))));
    var p = add(cam.c, mul(dir, d));
    var at = p.map(function (n) { return (Math.round(n * 100) / 100).toFixed(2); });
    state.temp = { id: "__new", text: "New label", at: at.map(Number), temp: true };
    var line = '{ id: "new-label", text: "New label", at: [' + at.join(", ") + "] },";
    card.innerHTML = '<div class="row"><strong>Point picked at ' + (state.frame * 360 / N) + '°</strong></div>' +
      "<pre id=\"place-line\">" + esc(line) + "</pre>" +
      '<div class="row"><button class="btn" id="copy-line">Copy line</button><button class="btn ghost" id="clear-line">Clear</button>' +
      '<span class="muted">Paste it into the <code>labels</code> list in data.js, then change the id and text.</span></div>';
    $("copy-line").onclick = function () {
      var btn = this;
      navigator.clipboard && navigator.clipboard.writeText(line).then(function () { btn.textContent = "Copied"; }, selectLine);
      if (!navigator.clipboard) selectLine();
    };
    $("clear-line").onclick = function () { state.temp = null; card.hidden = true; layoutPins(); };
    layoutPins();
  }
  function selectLine() { var r = document.createRange(); r.selectNodeContents($("place-line")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }

  function checkData() {
    var problems = [], seen = {};
    LABELS.forEach(function (L, i) {
      if (!L.id) problems.push("Label #" + (i + 1) + " has no id.");
      else if (seen[L.id]) problems.push('Two labels share the id "' + L.id + '".');
      seen[L.id] = true;
      if (!L.at || L.at.length !== 3) problems.push('Label "' + (L.id || i + 1) + '" needs at: [x, y, z].');
    });
    COMPS.forEach(function (c) {
      (c.labels || []).forEach(function (id) { if (!seen[id]) problems.push('"' + c.name + '" points to label "' + id + '", which doesn’t exist.'); });
      if (c.stance && !STANCE[c.stance]) problems.push('"' + c.name + '" has stance "' + c.stance + '" (use china-leads, contested or foreign-led).');
    });
    return problems;
  }

  /* ---------- Boot ---------- */
  if (DATA.title) { $("title").textContent = DATA.title; document.title = DATA.title; }
  $("subtitle").textContent = DATA.subtitle || "";
  if (DATA.updated) $("updated").textContent = "Last updated " + fmtDate(DATA.updated);
  if (!window.ROBOT_DATA) panel.innerHTML = '<p class="warn">data.js didn’t load. If you just edited it, a missing comma or quote is the usual cause.</p>';
  if (EDIT) {
    $("edit-banner").hidden = false; viewport.classList.add("placing");
    var probs = checkData();
    if (probs.length) $("edit-banner").innerHTML += '<p class="warn">' + probs.map(esc).join("<br>") + "</p>";
  }
  if (window.ROBOT_DATA) render();
  robot.addEventListener("load", layoutPins, { once: true });
})();
