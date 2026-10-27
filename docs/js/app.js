// Zabanyar — app shell, routing and screens.
import { h, $, T, pic, play, stop, sayBtn, toast, setTarget } from "./ui.js";
import { t, setLang, getLang, num } from "./i18n.js";
import * as store from "./store.js";
import { lessonsFor, buildLesson, buildReview, runLesson, LESSON_ICONS, unitKey } from "./lesson.js";

const app = $("#app");
let INDEX = null;
const unitCache = {};

async function getJSON(url) {
  const r = await fetch(url, { cache: "no-cache" }).catch(() => null) || await caches.match(url);
  if (!r || !r.ok) throw new Error("load " + url);
  return r.json();
}
async function index() { if (!INDEX) INDEX = await getJSON("data/courses.json"); return INDEX; }
// unit keys: "u03" (A1) or "B2.u03"
function parseKey(k) { const m = /^([A-C][12])\.(u\d\d)$/.exec(k); return m ? { level: m[1], uid: m[2] } : { level: "A1", uid: k }; }
function keyOf(level, uid) { return level === "A1" ? uid : `${level}.${uid}`; }
async function unit(course, key) {
  const { level, uid } = parseKey(key);
  const k = course + "/" + key;
  if (!unitCache[k]) { const u = await getJSON(`data/${course}/${level}/${uid}.json`); u.level = u.level || level; unitCache[k] = u; }
  return unitCache[k];
}
function courseMeta(id) { return INDEX.courses.find(c => c.id === id); }
function allUnitRefs(c) { return c.levels.flatMap(lv => lv.units.map(un => ({ level: lv.id, un, key: keyOf(lv.id, un.id) }))); }
const lkey = (cid, key, lid) => { const { level, uid } = parseKey(key); return `${cid}/${level}/${uid}/${lid}`; };

// home-screen language: each person's own (synced with their progress); before login, the device's last one
function uiLang() { let d = "fa"; try { d = localStorage.getItem("zy:ui") || "fa"; } catch {} return store.currentUser() ? store.pref("ui", "fa") : d; }
function useCourse(c) {
  const lang = c ? c.support : uiLang();
  if (c) { try { localStorage.setItem("zy:ui", c.support); } catch {} store.setPref("ui", c.support); }
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.style.setProperty("--accent", c ? c.color : "var(--brand)");
  if (c) setTarget(c.target, c.tdir || "ltr");
}

function topbar(title, back, extra) {
  return h("div", { class: "topbar" },
    back ? h("a", { class: "iconbtn", href: back, "aria-label": "back" }, getLang() === "fa" ? "→" : "←") : h("a", { class: "brand", href: "#/" }, h("img", { src: "icons/icon.svg", alt: "" })),
    h("h1", {}, title), extra || null);
}

// ---------- screens ----------
function viewLogin() {
  useCourse(null);
  const inp = h("input", { type: "text", placeholder: t("namePh"), autocomplete: "username", autocapitalize: "off", "aria-label": t("enterName"), enterkeyhint: "go" });
  const msg = h("div", { class: "muted", role: "status" });
  const go = async () => {
    const name = inp.value.trim(); if (!name) { inp.focus(); return; }
    btn.disabled = true; msg.textContent = "…";
    const r = await store.login(name);
    btn.disabled = false;
    if (!r.ok) { msg.textContent = r.unknown ? `${t("unknownName")} · This name is not on the family list. · Bu ad aile listesinde yok.` : ""; return; }
    if (r.offline) toast(t("offlineLogin"));
    else await Promise.race([store.sync(), new Promise(res => setTimeout(res, 3000))]);   // bring their progress from other devices
    location.hash = "#/";
  };
  const btn = h("button", { class: "btn block", onclick: go }, "ورود · Enter · Giriş");
  inp.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  // people who already used this device: one tap to continue as them
  const recent = store.recentUsers();
  const who = recent.length ? h("div", { class: "card stack" },
    h("div", { style: { fontWeight: 800 } }, "کی هستید؟", h("div", { class: "muted small", lang: "en" }, "Who is learning? · Kim öğreniyor?")),
    h("div", { class: "whogrid" }, recent.map(r => h("button", { class: "btn secondary", onclick: () => { inp.value = r.id; go(); } }, "👤 ", h("bdi", {}, r.name))))) : null;
  app.replaceChildren(h("div", { class: "login" },
    h("img", { class: "logo", src: "icons/icon.svg", alt: "" }),
    h("h1", {}, "زبان‌یار · Zabanyar"),
    h("div", { class: "muted" }, t("tagline")),
    who,
    h("div", { class: "card stack" }, h("label", { style: { fontWeight: 800 } }, recent.length ? "یا اسمتان را بنویسید" : "اسمتان را بنویسید",
      h("div", { class: "muted small", lang: "en" }, recent.length ? "Or type your name · Ya da adınızı yazın" : "Type your name · Adınızı yazın")), inp, btn, msg)));
  if (!recent.length) setTimeout(() => inp.focus(), 100);
}

const EXPLAINED = { fa: "توضیحات به فارسی", en: "Explained in English", tr: "Türkçe açıklamalı" };
const CHOOSE = { fa: "کدام زبان را یاد می‌گیرید؟", en: "Which language are you learning?", tr: "Hangi dili öğreniyorsunuz?" };

async function viewHome() {
  useCourse(null);
  const idx = await index();
  const u = store.currentUser();
  const p = store.progress();
  const cards = idx.courses.map(c => {
    const refs = allUnitRefs(c);
    const done = refs.filter(r => (p.lessons[lkey(c.id, r.key, "test")]?.best || 0) >= .7 || (r.un.id === "u00" && p.lessons[lkey(c.id, r.key, "words")])).length;
    const started = Object.keys(p.lessons).some(k => k.startsWith(c.id + "/"));
    const pct = refs.length ? Math.round(100 * done / refs.length) : 0;
    const lvls = c.levels.filter(l => l.units.length).map(l => l.id).join(" · ");
    return h("a", { class: "course", href: `#/c/${c.id}`, style: { "--c": c.color } },
      h("div", { class: "badge", lang: c.target }, c.target.toUpperCase()),
      h("div", {},
        h("h3", {}, h("span", { lang: c.target }, c.name.t), " · ", c.name.s),
        h("p", {}, h("bdi", { lang: c.support }, EXPLAINED[c.support]), "  ", h("bdi", { dir: "ltr", class: "lvls" }, lvls)),
        h("div", { class: "progressbar" }, h("i", { style: { width: pct + "%", background: c.color } }))),
      h("div", { class: "chip" }, started ? "▶ " + (nextUp(c, p)?.level || "✓") : "✨"));
  });
  const last = idx.courses.find(c => c.id === store.pref("lastCourse", null));
  const resume = last && store.pref("pos:" + last.id, null) ? continueCard(last, p, true) : null;
  const L = getLang();
  app.replaceChildren(
    topbar("زبان‌یار · Zabanyar", null, h("a", { class: "iconbtn", href: "#/settings", "aria-label": "settings" }, "⚙️")),
    h("div", { class: "hello" }, h("div", { class: "big" }, `${t("hello")} ${u.name}! 👋`),
      h("button", { class: "linkbtn small", onclick: () => { store.logout(); go("#/login"); } }, t("notYou"))),
    h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, "🔥 " + num(store.streak(p))), h("span", {}, t("streak"))),
      h("div", { class: "stat" }, h("b", {}, "⭐ " + num(store.totalXp(p))), h("span", {}, t("xp"))),
      h("div", { class: "stat" }, h("b", {}, "📚 " + num(Object.keys(p.srs).length)), h("span", {}, t("words")))),
    resume,
    h("h2", {}, CHOOSE[L], ...Object.entries(CHOOSE).filter(([k]) => k !== L).map(([k, v]) => h("div", { class: "muted small", lang: k, dir: k === "fa" ? "rtl" : "ltr", style: { textAlign: "start" } }, v))),
    h("div", { class: "stack" }, cards));
}

// ---------- where am I? (synced with the person, so it works on every device) ----------
function unitNo(lv, un) { return lv.units.findIndex(x => x.id === un.id) + (lv.units[0]?.id === "u00" ? 0 : 1); }
function nextUp(c, p) {
  const refs = allUnitRefs(c);
  const open = from => {
    for (let i = Math.max(0, from); i < refs.length; i++) {
      const r = refs[i]; const l = lessonIds(r.un).find(l => !p.lessons[lkey(c.id, r.key, l)]);
      if (l) return { ...r, lid: l };
    }
    return null;
  };
  const pos = store.pref("pos:" + c.id, null);
  if (pos) {
    const i = refs.findIndex(r => r.key === pos.key);
    if (i >= 0) {
      if (lessonIds(refs[i].un).includes(pos.lid) && !p.lessons[lkey(c.id, pos.key, pos.lid)]) return { ...refs[i], lid: pos.lid };
      const n = open(i); if (n) return n;
    }
  }
  return open(0);
}
function continueCard(c, p, withCourse) {
  const n = nextUp(c, p);
  if (!n) return h("div", { class: "card center" }, "🎉 " + t("allDone"));
  const lv = c.levels.find(l => l.id === n.level);
  return h("a", { class: "continue", href: `#/c/${c.id}/u/${n.key}/l/${n.lid}`, style: { "--c": c.color } },
    h("div", { class: "ico" }, LESSON_ICONS[n.lid] || "▶"),
    h("div", {},
      h("div", { class: "sub" }, (withCourse ? c.name.t + " · " : "") + `${n.level} · ${t("unit")} ${num(unitNo(lv, n.un))} · ${t("L_" + n.lid)}`),
      h("b", {}, T(n.un.title.t)), h("div", { class: "muted small" }, n.un.title.s)),
    h("div", { class: "go" }, "▶ " + t("continue")));
}
function levelStats(c, lv, p) {
  const done = lv.units.filter(un => lessonIds(un).every(l => p.lessons[lkey(c.id, keyOf(lv.id, un.id), l)])).length;
  return { done, total: lv.units.length };
}

async function viewCourse(cid, want) {
  const idx = await index(); const c = courseMeta(cid); if (!c) return go("#/");
  useCourse(c);
  store.setPref("lastCourse", cid);
  const p = store.progress();
  const due = store.srsDue(cid + "|").length;
  const next = nextUp(c, p);
  const avail = c.levels.filter(l => l.units.length);
  const cur = c.levels.find(l => l.id === want) || c.levels.find(l => l.id === store.pref("lv:" + cid, null) && l.units.length)
    || c.levels.find(l => l.id === next?.level) || avail[0];
  if (want && cur.units.length) store.setPref("lv:" + cid, cur.id);
  // level tabs: every level at a glance with its progress; one level is shown at a time
  const tabs = h("div", { class: "tabs levels", role: "tablist" }, c.levels.map(l => {
    const st = l.units.length ? levelStats(c, l, p) : null;
    return h("button", { class: (l.id === cur.id ? "on" : "") + (st ? "" : " soon"), role: "tab", "aria-selected": String(l.id === cur.id),
      onclick: () => go(`#/c/${cid}/lv/${l.id}`) },
      h("b", {}, l.id), h("span", { class: "small" }, st ? `${num(st.done)}/${num(st.total)}` : t("soon")));
  }));
  let body;
  if (!cur.units.length) body = h("div", { class: "level soon" }, h("div", { class: "level-head" }, h("h2", {}, cur.id + " · " + cur.name), h("span", { class: "pill" }, t("soon"))), h("div", { class: "muted" }, cur.outline));
  else {
    const st = levelStats(c, cur, p);
    body = h("div", { class: "level", id: "lv-" + cur.id },
      h("div", { class: "level-head" }, h("h2", {}, cur.id + " · " + cur.name), h("span", { class: "muted" }, `${num(st.done)}/${num(st.total)} ${t("unitsDone")}`)),
      h("div", { class: "progressbar" }, h("i", { style: { width: Math.round(100 * st.done / st.total) + "%", background: c.color } })),
      h("div", { class: "unitpath" }, cur.units.map(un => {
        const key = keyOf(cur.id, un.id);
        const ls = lessonIds(un);
        const doneN = ls.filter(l => p.lessons[lkey(cid, key, l)]).length;
        const best = p.lessons[lkey(cid, key, "test")]?.best || 0;
        const complete = doneN === ls.length;
        const cls = "unit" + (complete ? " done" : "") + (next && next.key === key ? " next" : "");
        const stars = best >= .9 ? 3 : best >= .7 ? 2 : best > 0 ? 1 : 0;
        return h("a", { class: cls, href: `#/c/${cid}/u/${key}` },
          h("div", { class: "pic" }, un.img || un.emoji ? pic(un.img, un.emoji, "", 46) : h("b", {}, cur.id)),
          h("div", {}, h("div", { class: "sub" }, `${cur.id} · ${t("unit")} ${num(unitNo(cur, un))}`), h("h3", {}, T(un.title.t)), h("div", { class: "sub" }, un.title.s)),
          h("div", { class: "stars" }, complete ? (stars ? "★".repeat(stars) : "✓") : `${num(doneN)}/${num(ls.length)}`));
      })));
  }
  app.replaceChildren(
    topbar(`${c.name.t} · ${c.name.s}`, "#/", h("a", { class: "iconbtn", href: `#/c/${cid}/words`, "aria-label": t("wordbank") }, "📒")),
    continueCard(c, p),
    h("a", { class: "lesson", href: `#/c/${cid}/review` },
      h("div", { class: "ico" }, "🔁"), h("div", {}, h("b", {}, t("review")), h("span", { class: "muted small" }, t("reviewDesc"))),
      h("div", { class: "chip" }, num(due))),
    tabs, body,
    offlineCard(c));
  app.querySelector(".tabs .on")?.scrollIntoView({ block: "nearest", inline: "center" });
}
function lessonIds(un) {
  // same logic as lessonsFor() but from the index summary
  const L = [];
  if (un.has.letters) L.push("letters");
  if (un.has.sounds) L.push("sounds");
  if (un.has.words) L.push("words");
  if (un.has.phrases || un.has.dialogue) L.push("phrases");
  if (un.has.grammar) L.push("grammar");
  if (un.has.reading) L.push("reading");
  if (un.id !== "u00" || un.has.reading) L.push("test");
  return L;
}

function offlineCard(c) {
  const st = h("span", { class: "muted small" });
  const bar = h("div", { class: "progressbar", style: { display: "none" } }, h("i", { style: { width: "0%" } }));
  const key = "zy:off:" + c.id;
  let saved = false; try { saved = !!localStorage.getItem(key); } catch {}
  const btn = h("button", { class: "btn secondary", onclick: async () => {
    if (!("caches" in window)) return;
    btn.disabled = true; bar.style.display = ""; st.textContent = t("downloading");
    try {
      const files = await getJSON(`data/${c.id}/files.json`);
      const all = ["data/courses.json", ...files];
      const cache = await caches.open("zy-content-v1");
      let n = 0;
      for (let i = 0; i < all.length; i += 8) {
        await Promise.all(all.slice(i, i + 8).map(async f => { try { if (!(await cache.match(f))) await cache.add(f); } catch {} n++; }));
        bar.firstChild.style.width = Math.round(100 * n / all.length) + "%";
      }
      try { localStorage.setItem(key, String(Date.now())); } catch {}
      st.textContent = t("downloaded"); btn.textContent = t("downloaded");
    } catch { st.textContent = "⚠️"; btn.disabled = false; }
  } }, saved ? t("downloaded") : "⬇️ " + t("download"));
  return h("details", { class: "card", style: { marginTop: "12px" } },
    h("summary", { style: { fontWeight: 800 } }, "📶 " + t("offline")),
    h("p", { class: "muted small" }, t("offlineDesc")), h("div", { class: "stack" }, btn, bar, st));
}

async function viewUnit(cid, key) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const un = await unit(cid, key);
  const { level } = parseKey(key);
  store.setPref("lv:" + cid, level);
  const p = store.progress();
  const L = lessonsFor(un);
  const lv = c.levels.find(l => l.id === level);
  const k = unitNo(lv, un);
  const firstOpen = L.find(l => !p.lessons[lkey(cid, key, l)]);
  const refs = allUnitRefs(c); const i = refs.findIndex(r => r.key === key);
  const nav = (r, label, cls) => r ? h("a", { class: "btn secondary " + cls, href: `#/c/${cid}/u/${r.key}` },
    h("span", { class: "small" }, label), h("b", {}, `${r.level} · ${num(unitNo(c.levels.find(l => l.id === r.level), r.un))}`)) : h("span");
  app.replaceChildren(
    topbar(`${c.name.t} · ${level} · ${t("unit")} ${num(k)}`, `#/c/${cid}/lv/${level}`),
    h("div", { class: "card unithero" }, un.img || un.emoji ? pic(un.img, un.emoji, "", 96) : h("div", { class: "badge", style: { fontSize: "2rem", fontWeight: 900, color: "var(--accent)" } }, level),
      h("div", {}, h("h1", {}, T(un.title.t)), un.title.pr ? h("div", { class: "pr", dir: "ltr" }, un.title.pr) : null, h("div", { class: "muted", style: { fontSize: "1.1rem" } }, un.title.s), sayBtn(un.title.a, { small: true }))),
    h("h2", {}, t("goals")),
    h("ul", { class: "goals card" }, un.goals.map(g => h("li", {}, g))),
    h("h2", {}, t("lessons")),
    h("div", { class: "lessons" }, L.map(l => {
      const st = p.lessons[lkey(cid, key, l)];
      const stars = st ? (st.best >= .9 ? 3 : st.best >= .7 ? 2 : 1) : 0;
      return h("a", { class: "lesson" + (st ? " done" : "") + (l === firstOpen ? " next" : ""), href: `#/c/${cid}/u/${key}/l/${l}` },
        h("div", { class: "ico" }, LESSON_ICONS[l]),
        h("div", {}, h("b", {}, t("L_" + l)), h("span", { class: "muted small" }, t("D_" + l))),
        h("div", { class: "stars" }, st ? "★".repeat(stars) + "☆".repeat(3 - stars) : "▶"));
    })),
    h("div", { class: "unitnav" }, nav(refs[i - 1], t("prevUnit"), "prev"), nav(refs[i + 1], t("nextUnit"), "nextu")));
}

async function viewLesson(cid, key, lid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const un = await unit(cid, key);
  const steps = buildLesson(cid, un, lid, c.target);
  const L = lessonsFor(un);
  store.setPref("pos:" + cid, { key, lid }); store.setPref("lastCourse", cid);
  runLesson(app, steps, {
    target: c.target,
    onDone: score => { store.finishLesson(lkey(cid, key, lid), score); store.addXp(10 + Math.round(score * 10)); store.scheduleSync(300); },
    onExit: what => {
      document.querySelectorAll(".feedback").forEach(e => e.remove());
      if (what === "again") return viewLesson(cid, key, lid);
      if (what === "next") {
        const n = L.indexOf(lid) + 1;
        if (n < L.length) return go(`#/c/${cid}/u/${key}/l/${L[n]}`);
        const refs = allUnitRefs(c); const ui = refs.findIndex(r => r.key === key);
        if (ui + 1 < refs.length) return go(`#/c/${cid}/u/${refs[ui + 1].key}`);
        return go(`#/c/${cid}`);
      }
      go(`#/c/${cid}/u/${key}`);
    },
  });
}

async function allUnits(c) { return Promise.all(allUnitRefs(c).map(r => unit(c.id, r.key))); }

async function viewReview(cid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  let ids = store.srsDue(cid + "|");
  if (!ids.length) {
    app.replaceChildren(topbar(t("review"), `#/c/${cid}`), h("div", { class: "card center", style: { marginTop: "30px", fontSize: "1.2rem" } }, t("nothingToReview")));
    return;
  }
  // load only the units that have due words
  const keys = [...new Set(ids.map(i => i.split("|")[1]))];
  const units = await Promise.all(keys.map(k => unit(cid, k)));
  ids = ids.sort(() => Math.random() - .5);
  const steps = buildReview(cid, units, ids);
  runLesson(app, steps, { target: c.target, onDone: s => { store.addXp(5 + Math.round(s * 10)); store.scheduleSync(300); }, onExit: () => { document.querySelectorAll(".feedback").forEach(e => e.remove()); go(`#/c/${cid}`); } });
}

async function viewWords(cid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const refs = allUnitRefs(c);
  const seen = new Set(store.srsAll(cid + "|"));
  const tabs = h("div", { class: "tabs" });
  const list = h("div", { class: "list" });
  const show = async r => {
    const un = await unit(cid, r.key);
    tabs.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.u === r.key));
    list.replaceChildren(...(un.words || []).map(w => h("div", { class: "wordrow", style: { opacity: seen.has(`${cid}|${unitKey(un)}|${w.id}`) ? 1 : .6 } },
      w.img || w.emoji ? pic(w.img, w.emoji, "", 40) : h("span", {}),
      h("div", {}, h("b", {}, T(w.t)), w.pr ? h("div", { class: "pr small", dir: "ltr" }, w.pr) : null, h("div", { class: "muted small" }, w.s)), sayBtn(w.a, { small: true }))));
  };
  refs.forEach(r => { const b = h("button", { "data-u": r.key, onclick: () => show(r) }, `${r.level} ${num(Number(r.un.id.slice(1)))} · `, T(r.un.title.t)); tabs.append(b); });
  app.replaceChildren(topbar(t("wordbank"), `#/c/${cid}`), h("p", { class: "muted" }, `${num(seen.size)} ${t("learned")}`), tabs, list);
  const firstSeen = refs.find(r => [...seen].some(s => s.split("|")[1] === r.key));
  show(firstSeen || refs[0]);
}

function viewSettings() {
  useCourse(null);
  const u = store.currentUser();
  app.replaceChildren(topbar(t("settings"), "#/"),
    h("div", { class: "card stack" },
      h("div", {}, "👤 ", h("b", {}, u.name)),
      h("button", { class: "btn secondary block", onclick: () => { store.logout(); go("#/login"); } }, t("switchUser"))),
    h("h2", {}, "📱 " + t("install")),
    h("div", { class: "card muted" }, t("installHint")),
    h("h2", {}, "ℹ️ " + t("credits")),
    h("div", { class: "card small stack", dir: "ltr", lang: "en" },
      h("div", {}, "زبان‌یار · Zabanyar — a family project."),
      h("div", {}, "Pictures: Microsoft Fluent Emoji (MIT) and Twemoji (CC-BY 4.0, © Twitter/X and contributors)."),
      h("div", {}, "Voices: Piper neural text-to-speech voices (lessac, ryan, thorsten, kerstin, dfki, fahrettin, amir, gyro) via sherpa-onnx."),
      h("div", {}, "Persian font: Vazirmatn by Saber Rastikerdar (SIL Open Font License)."),
      h("div", { class: "muted" }, "v2")));
}

// ---------- router ----------
function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
async function route() {
  stop();
  document.querySelectorAll(".feedback").forEach(e => e.remove());
  const hsh = location.hash.replace(/^#/, "") || "/";
  const user = store.currentUser();
  if (!user && hsh !== "/login") return go("#/login");
  const parts = hsh.split("/").filter(Boolean);
  try {
    if (parts[0] === "login") return viewLogin();
    if (parts[0] === "settings") return viewSettings();
    if (parts[0] === "c" && parts[1]) {
      if (parts[2] === "review") return await viewReview(parts[1]);
      if (parts[2] === "words") return await viewWords(parts[1]);
      if (parts[2] === "u" && parts[4] === "l") return await viewLesson(parts[1], parts[3], parts[5]);
      if (parts[2] === "u") return await viewUnit(parts[1], parts[3]);
      if (parts[2] === "lv") return await viewCourse(parts[1], parts[3]);
      return await viewCourse(parts[1]);
    }
    return await viewHome();
  } catch (e) {
    console.error(e);
    app.replaceChildren(topbar("⚠️", "#/"), h("div", { class: "card" }, "مشکلی پیش آمد. اینترنت را بررسی کنید و دوباره امتحان کنید.", h("br"), "Something went wrong — check the connection and try again.", h("br"), "Bir sorun oluştu — bağlantıyı kontrol edip tekrar deneyin.", h("br"), h("button", { class: "btn", style: { marginTop: "12px" }, onclick: () => route() }, "↻")));
  }
}
addEventListener("hashchange", route);
store.onSync(s => {
  // progress arrived from another device: refresh overview screens (never interrupt a running lesson)
  if (s === "changed" && !/\/(l\/|review)/.test(location.hash) && !document.querySelector(".player")) route();
});
store.onSync(s => { if (s === "unknown") { toast("این اسم در فهرست خانواده نیست · Unknown name · Bilinmeyen ad"); store.logout(); go("#/login"); } });
route();
if (store.currentUser()) store.sync();

if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
