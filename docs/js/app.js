// App shell, routing and screens (shared by Zabanyar and Lernpfad; site differences live in site.js).
import { h, $, T, PR, pic, play, stop, sayBtn, toast, setTarget, ask, setAudioPrefs } from "./ui.js";
import { t, tf, setLang, getLang, num, frac } from "./i18n.js";
import * as store from "./store.js";
import { lessonsFor, buildLesson, buildReview, runLesson, LESSON_ICONS, unitKey, lessonLabel } from "./lesson.js";
import { SITE } from "./site.js";

const app = $("#app");
const PFX = SITE.id;
let INDEX = null;
let pendingReload = false;   // a new version arrived during a lesson: reload when the lesson ends
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
const PASS = 0.6;   // a lesson counts as learned from 60 % right answers; below that it is offered again
const passed = (p, cid, key, l) => (p.lessons[lkey(cid, key, l)]?.best ?? -1) >= PASS;
const starsOf = best => best >= .9 ? 3 : best >= .7 ? 2 : best >= PASS ? 1 : 0;
const unitDone = (p, cid, r) => lessonIds(r.un).every(l => passed(p, cid, r.key, l));
const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
const lsSet = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} };

// home-screen language: each person's own (synced with their progress); before login, the device's last one
function uiLang() { const d = lsGet(PFX + ":ui") || SITE.defaultUi; return store.currentUser() ? store.pref("homeUi", null) || store.pref("ui", d) : d; }
function useCourse(c) {
  const lang = c ? c.support : uiLang();
  if (c) { lsSet(PFX + ":ui", c.support); store.setPref("ui", c.support); }
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.style.setProperty("--accent", c ? c.color : "var(--brand)");
  document.documentElement.style.setProperty("--accent-ink", c ? "#fff" : "var(--brand-ink)");
  if (c) setTarget(c.target, c.tdir || "ltr");
}
// the person's display and sound settings
function applyPrefs() {
  const d = document.documentElement;
  const theme = store.currentUser() ? store.pref("theme", "auto") : "auto";
  if (theme === "auto") delete d.dataset.theme; else d.dataset.theme = theme;
  d.classList.toggle("big", !!store.pref("bigText", false));
  d.classList.toggle("nopr", store.pref("showPr", true) === false);
  setAudioPrefs({ autoplay: store.pref("autoplay", true) !== false, slow: !!store.pref("slowSpeech", false) });
}

function topbar(title, back, extra) {
  return h("div", { class: "topbar" },
    back ? h("a", { class: "iconbtn", href: back, "aria-label": t("back") }, getLang() === "fa" ? "→" : "←") : h("a", { class: "brand", href: "#/", "aria-label": t("home") }, h("img", { src: "icons/icon.svg", alt: "" })),
    h("h1", {}, title), extra || null);
}
// three languages at once (Zabanyar's family login), or the current UI language (Lernpfad)
const L3 = (fa, en, tr) => SITE.multiLogin ? [fa, h("div", { class: "muted small", lang: "en", dir: "ltr" }, `${en} · ${tr}`)] : [{ fa, en, tr }[getLang()] || en];

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
    if (!r.ok) { msg.textContent = r.unknown ? (SITE.multiLogin ? `${SITE.strings.fa.unknownName} · ${SITE.strings.en.unknownName} · ${SITE.strings.tr.unknownName}` : t("unknownName")) : ""; return; }
    if (r.offline) toast(t("offlineLogin"));
    else await Promise.race([store.sync(), new Promise(res => setTimeout(res, 3000))]);   // bring their progress from other devices
    location.hash = "#/";
  };
  const btn = h("button", { class: "btn block", onclick: go }, SITE.multiLogin ? "ورود · Enter · Giriş" : t("enter"));
  inp.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  // people who already used this device: one tap to continue as them
  const recent = store.recentUsers();
  const who = recent.length ? h("div", { class: "card stack" },
    h("div", { style: { fontWeight: 800 } }, ...L3("کی هستید؟", "Who is learning?", "Kim öğreniyor?")),
    h("div", { class: "whogrid" }, recent.map(r => h("button", { class: "btn secondary", onclick: () => { inp.value = r.id; go(); } }, "👤 ", h("bdi", {}, r.name))))) : null;
  app.replaceChildren(h("div", { class: "login" },
    h("img", { class: "logo", src: "icons/icon.svg", alt: "" }),
    h("h1", {}, SITE.name),
    h("div", { class: "muted" }, t("tagline")),
    who,
    h("div", { class: "card stack" }, h("label", { style: { fontWeight: 800 } }, ...(recent.length ? L3("یا اسمتان را بنویسید", "Or type your name", "Ya da adınızı yazın") : L3("اسمتان را بنویسید", "Type your name", "Adınızı yazın"))), inp, btn, msg)));
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
    const done = refs.filter(r => unitDone(p, c.id, r)).length;
    const started = Object.keys(p.lessons).some(k => k.startsWith(c.id + "/"));
    const pct = refs.length ? Math.round(100 * done / refs.length) : 0;
    const lvls = c.levels.filter(l => l.units.length).map(l => l.id).join(" · ");
    return h("a", { class: "course", href: `#/c/${c.id}`, style: { "--c": c.color } },
      h("div", { class: "badge", lang: c.target }, c.badge || c.target.toUpperCase()),
      h("div", {},
        h("h3", {}, h("span", { lang: c.target }, c.name.t), " · ", c.name.s),
        h("p", {}, h("bdi", { lang: c.support }, c.about || EXPLAINED[c.support]), "  ", h("bdi", { dir: "ltr", class: "lvls" }, lvls)),
        h("div", { class: "progressbar" }, h("i", { style: { width: pct + "%", background: c.color } }))),
      h("div", { class: "chip" }, started ? "▶ " + (nextUp(c, p)?.level || "✓") : t("start") + " ▶"));
  });
  const last = idx.courses.find(c => c.id === store.pref("lastCourse", null));
  const resume = last && store.pref("pos:" + last.id, null) ? continueCard(last, p, true) : null;
  const L = getLang();
  app.replaceChildren(
    topbar(SITE.name, null, h("a", { class: "iconbtn", href: "#/settings", "aria-label": t("settings") }, "⚙️")),
    h("div", { class: "hello" }, h("div", { class: "big" }, `${t("hello")} `, h("bdi", {}, u.name), "! 👋"),
      h("button", { class: "linkbtn small", onclick: () => { store.logout(); go("#/login"); } }, t("notYou"))),
    h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, "🔥 " + num(store.streak(p))), h("span", {}, t("streak"))),
      h("div", { class: "stat" }, h("b", {}, "⭐ " + num(store.totalXp(p))), h("span", {}, t("xp"))),
      h("div", { class: "stat" }, h("b", {}, "📚 " + num(Object.keys(p.srs).length)), h("span", {}, t("words")))),
    ...(resume ? [resume] : []),
    h("h2", {}, CHOOSE[L], ...(SITE.multiLogin ? Object.entries(CHOOSE).filter(([k]) => k !== L).map(([k, v]) => h("div", { class: "muted small", lang: k, dir: k === "fa" ? "rtl" : "ltr", style: { textAlign: "start" } }, v)) : [])),
    h("div", { class: "stack" }, cards));
}

// ---------- where am I? (synced with the person, so it works on every device) ----------
function unitNo(lv, un) { return lv.units.findIndex(x => x.id === un.id) + (lv.units[0]?.id === "u00" ? 0 : 1); }
function nextUp(c, p) {
  const refs = allUnitRefs(c);
  const open = from => {
    for (let i = Math.max(0, from); i < refs.length; i++) {
      const r = refs[i]; const l = lessonIds(r.un).find(l => !passed(p, c.id, r.key, l));
      if (l) return { ...r, lid: l };
    }
    return null;
  };
  const pos = store.pref("pos:" + c.id, null);
  if (pos) {
    const i = refs.findIndex(r => r.key === pos.key);
    if (i >= 0) {
      if (lessonIds(refs[i].un).includes(pos.lid) && !passed(p, c.id, pos.key, pos.lid)) return { ...refs[i], lid: pos.lid };
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
    h("div", { class: "ico" }, LESSON_ICONS[n.lid] || (/^g\d+$/.test(n.lid) ? "🧩" : "▶")),
    h("div", {},
      h("div", { class: "sub" }, (withCourse ? c.name.t + " · " : "") + `${n.level} · ${t("unit")} ${num(unitNo(lv, n.un))} · ${lessonLabel(n.un, n.lid, t)[0]}`),
      h("b", {}, T(n.un.title.t)), h("div", { class: "muted small" }, n.un.title.s)),
    h("div", { class: "go" }, "▶ " + t("continue")));
}
function levelStats(c, lv, p) {
  const done = lv.units.filter(un => unitDone(p, c.id, { un, key: keyOf(lv.id, un.id) })).length;
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
  // level buttons: every level at a glance with its progress; one level is shown at a time
  const tabs = h("div", { class: "tabs levels", style: { gridTemplateColumns: `repeat(${c.levels.length}, 1fr)` } }, c.levels.map(l => {
    const st = l.units.length ? levelStats(c, l, p) : null;
    return h("button", { class: (l.id === cur.id ? "on" : "") + (st ? "" : " soon"), type: "button", "aria-current": l.id === cur.id ? "true" : null,
      onclick: () => go(`#/c/${cid}/lv/${l.id}`) },
      h("b", {}, l.id), h("span", { class: "small" }, st ? frac(st.done, st.total) : t("soon")));
  }));
  let body;
  if (!cur.units.length) body = h("div", { class: "level soon" }, h("div", { class: "level-head" }, h("h2", {}, cur.id + " · " + cur.name), h("span", { class: "pill" }, t("soon"))), h("div", { class: "muted" }, cur.outline));
  else {
    const st = levelStats(c, cur, p);
    body = h("div", { class: "level", id: "lv-" + cur.id },
      h("div", { class: "level-head" }, h("h2", {}, cur.id + " · " + cur.name), h("span", { class: "muted" }, `${frac(st.done, st.total)} ${t("unitsDone")}`)),
      h("div", { class: "progressbar" }, h("i", { style: { width: Math.round(100 * st.done / st.total) + "%", background: c.color } })),
      h("div", { class: "unitpath" }, cur.units.map(un => {
        const key = keyOf(cur.id, un.id);
        const ls = lessonIds(un);
        const doneN = ls.filter(l => passed(p, cid, key, l)).length;
        const best = p.lessons[lkey(cid, key, "test")]?.best || 0;
        const complete = doneN === ls.length;
        const cls = "unit" + (complete ? " done" : "") + (next && next.key === key ? " next" : "");
        const stars = starsOf(best);
        return h("a", { class: cls, href: `#/c/${cid}/u/${key}` },
          h("div", { class: "pic" }, un.img || un.emoji ? pic(un.img, un.emoji, "", 46) : h("b", {}, cur.id)),
          h("div", {}, h("div", { class: "sub" }, `${cur.id} · ${t("unit")} ${num(unitNo(cur, un))}`), h("h3", {}, T(un.title.t)), h("div", { class: "sub" }, un.title.s)),
          h("div", { class: "stars" }, complete ? (stars ? "★".repeat(stars) : "✓") : frac(doneN, ls.length)));
      })));
  }
  // review: quiet when nothing is due, the main card when many words are waiting
  const reviewCard = h("a", { class: "lesson" + (due === 0 ? " quiet" : due >= 10 ? " primary" : ""), href: `#/c/${cid}/review` },
    h("div", { class: "ico" }, "🔁"), h("div", {}, h("b", {}, t("review")), h("span", { class: "muted small" }, due ? t("reviewDesc") : t("nothingDue"))),
    h("div", { class: "chip" }, due ? num(due) : "✓"));
  app.replaceChildren(
    topbar(`${c.name.t} · ${c.name.s}`, "#/", h("a", { class: "iconbtn", href: `#/c/${cid}/words`, "aria-label": t("wordbank") }, "📒")),
    ...(due >= 10 ? [reviewCard, continueCard(c, p)] : [continueCard(c, p), reviewCard]),
    tabs, body,
    offlineCard(c));
  app.querySelector(".tabs .on")?.scrollIntoView({ block: "nearest", inline: "center" });
}
function lessonIds(un) {
  // same logic as lessonsFor() but from the index summary
  if (un.kind === "grammar") return [...Array.from({ length: un.gn || 0 }, (_, i) => "g" + (i + 1)), "test"];
  const L = [];
  if (un.has.letters) L.push("letters");
  if (un.has.sounds) L.push("sounds");
  if (un.has.words) L.push("words");
  if (un.has.phrases || un.has.dialogue) L.push("phrases");
  if (un.has.grammar) L.push(...((un.gn || 0) > 2 ? ["grammar", "grammar2"] : ["grammar"]));
  if (un.has.reading) L.push("reading");
  if (un.id !== "u00" || un.has.reading) L.push("test");
  return L;
}

function offlineCard(c) {
  const st = h("span", { class: "muted small", role: "status" });
  const bar = h("div", { class: "progressbar", style: { display: "none" } }, h("i", { style: { width: "0%" } }));
  const key = PFX + ":off:" + c.id;
  const saved = !!lsGet(key);
  const btn = h("button", { class: "btn secondary", onclick: async () => {
    if (!("caches" in window)) return;
    btn.disabled = true; bar.style.display = ""; st.textContent = t("downloading");
    try {
      const files = await getJSON(`data/${c.id}/files.json`);
      const all = ["data/courses.json", ...files];
      const cache = await caches.open(PFX + "-content-v1");
      try { await navigator.storage?.persist?.(); } catch {}
      let n = 0, failed = 0;
      for (let i = 0; i < all.length; i += 16) {
        await Promise.all(all.slice(i, i + 16).map(async f => { try { if (!(await cache.match(f))) await cache.add(f); } catch { failed++; } n++; }));
        bar.firstChild.style.width = Math.round(100 * n / all.length) + "%";
        st.textContent = `${t("downloading")} ${num(Math.round(100 * n / all.length))}%`;
      }
      if (failed) { st.textContent = "⚠️ " + t("offlineFailed").replace("{n}", num(failed)); btn.disabled = false; btn.textContent = "↻ " + t("tryAgain"); return; }
      lsSet(key, String(Date.now()));
      st.textContent = t("downloaded"); btn.textContent = t("downloaded");
    } catch { st.textContent = "⚠️"; btn.disabled = false; }
  } }, saved ? t("downloaded") : "⬇️ " + t("download"));
  return h("details", { class: "card", style: { marginTop: "12px" } },
    h("summary", { style: { fontWeight: 800 } }, "📶 " + t("offline")),
    h("p", { class: "muted small" }, t("offlineDesc"), c.mb ? ` (≈ ${num(c.mb)} MB)` : ""), h("div", { class: "stack" }, btn, bar, st));
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
  const firstOpen = L.find(l => !passed(p, cid, key, l));
  const refs = allUnitRefs(c); const i = refs.findIndex(r => r.key === key);
  const nav = (r, label, cls) => r ? h("a", { class: "btn secondary " + cls, href: `#/c/${cid}/u/${r.key}` },
    h("span", { class: "small" }, label), h("b", {}, `${r.level} · ${num(unitNo(c.levels.find(l => l.id === r.level), r.un))}`)) : h("span");
  app.replaceChildren(
    topbar(`${c.name.t} · ${level} · ${t("unit")} ${num(k)}`, `#/c/${cid}/lv/${level}`),
    h("div", { class: "card unithero" }, un.img || un.emoji ? pic(un.img, un.emoji, "", 96) : h("div", { class: "badge", style: { fontSize: "2rem", fontWeight: 900, color: "var(--accent)" } }, level),
      h("div", {}, h("h1", {}, T(un.title.t)), PR(un.title.pr), h("div", { class: "muted", style: { fontSize: "1.1rem" } }, un.title.s), sayBtn(un.title.a, { small: true }))),
    h("h2", {}, t("goals")),
    h("ul", { class: "goals card" }, un.goals.map(g => h("li", {}, g))),
    h("h2", {}, t("lessons")),
    h("div", { class: "lessons" }, L.map(l => {
      const st = p.lessons[lkey(cid, key, l)];
      const stars = st ? starsOf(st.best) : 0;
      const ok = passed(p, cid, key, l);
      return h("a", { class: "lesson" + (ok ? " done" : st ? " again" : "") + (l === firstOpen ? " next" : ""), href: `#/c/${cid}/u/${key}/l/${l}` },
        h("div", { class: "ico" }, LESSON_ICONS[l] || "🧩"),
        h("div", {}, h("b", {}, T(lessonLabel(un, l, t)[0])), h("span", { class: "muted small" }, lessonLabel(un, l, t)[1])),
        h("div", { class: "stars" }, ok ? "★".repeat(stars) + "☆".repeat(3 - stars) : st ? "↻ " + t("again") : "▶"));
    })),
    h("div", { class: "unitnav" }, nav(refs[i - 1], t("prevUnit"), "prev"), nav(refs[i + 1], t("nextUnit"), "nextu")));
}

// a lesson that was left in the middle is kept on this device for three days
const runKey = (cid, key, lid) => `${PFX}:run:${store.currentUser()?.id}:${lkey(cid, key, lid)}`;
function savedRun(k) { try { const s = JSON.parse(lsGet(k) || "null"); return s && Date.now() - s.at < 3 * 864e5 && s.i > 0 ? s : null; } catch { return null; } }
let lessonHash = null;

async function viewLesson(cid, key, lid, fresh = false) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const un = await unit(cid, key);
  const L = lessonsFor(un);
  if (!L.includes(lid)) return go(`#/c/${cid}/u/${key}`);
  store.setPref("pos:" + cid, { key, lid }); store.setPref("lastCourse", cid);
  const save = runKey(cid, key, lid);
  let resume = fresh ? null : savedRun(save);
  if (resume && !(await ask(t("resumeQ"), t("continue"), t("startOver")))) resume = null;
  if (!resume) lsSet(save, null);
  const steps = resume ? [] : buildLesson(cid, un, lid, c.target);
  lessonHash = location.hash;
  runLesson(app, steps, {
    ctx: { course: cid, unit: key, lesson: lid },
    target: c.target, grammars: un.grammar || [], save, resume,
    onDone: score => { const xp = 10 + Math.round(score * 10); store.finishLesson(lkey(cid, key, lid), score); store.addXp(xp); store.scheduleSync(300); return xp; },
    onExit: (what, missed) => {
      document.querySelectorAll(".feedback").forEach(e => e.remove());
      lessonHash = null;
      if (what === "again") return viewLesson(cid, key, lid, true);
      if (what === "mistakes") return practise(c, missed, () => go(`#/c/${cid}/u/${key}`));
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
// practise the questions that went wrong (fresh copies, so nothing of the first round is carried over)
function practise(c, steps, back, grammars = []) {
  const fresh = JSON.parse(JSON.stringify(steps.filter(s => s.type !== "match")));
  if (!fresh.length) return back();
  runLesson(app, fresh, { ctx: { course: c.id, lesson: "practice" }, target: c.target, mode: "practice", grammars,
    onDone: s => { const xp = 2 + Math.round(s * 5); store.addXp(xp); store.scheduleSync(300); return xp; },
    onExit: () => { document.querySelectorAll(".feedback").forEach(e => e.remove()); back(); } });
}

async function allUnits(c) { return Promise.all(allUnitRefs(c).map(r => unit(c.id, r.key))); }

async function viewReview(cid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  let ids = store.srsDue(cid + "|");
  if (!ids.length) {
    app.replaceChildren(topbar(t("review"), `#/c/${cid}`), h("div", { class: "card center", style: { marginTop: "30px", fontSize: "1.2rem" } }, t("nothingToReview")),
      h("a", { class: "btn secondary block", href: `#/c/${cid}/words`, style: { marginTop: "14px" } }, "📒 " + t("wordbank")));
    return;
  }
  // load only the units that have due words
  const keys = [...new Set(ids.map(i => i.split("|")[1]))];
  const units = await Promise.all(keys.map(k => unit(cid, k)));
  ids = ids.sort(() => Math.random() - .5);
  const steps = buildReview(cid, units, ids);
  runLesson(app, steps, { ctx: { course: cid, lesson: "review" }, target: c.target, mode: "review",
    onDone: s => { const xp = 5 + Math.round(s * 10); store.addXp(xp); store.scheduleSync(300); return xp; },
    onExit: what => { document.querySelectorAll(".feedback").forEach(e => e.remove()); if (what === "again") return viewReview(cid); go(`#/c/${cid}`); } });
}

async function viewWords(cid, want) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const refs = allUnitRefs(c);
  const srs = store.progress().srs;
  const idOf = (un, w) => `${cid}|${unitKey(un)}|${w.id}`;
  const all = Object.keys(srs).filter(k => k.startsWith(cid + "|"));
  const strong = all.filter(k => (srs[k].b || 1) >= 4).length;
  const levels = c.levels.filter(l => l.units.length);
  const firstSeen = refs.find(r => all.some(s => s.split("|")[1] === r.key));
  let curLevel = (refs.find(r => r.key === want) || firstSeen || refs[0]).level;
  let curKey = (refs.find(r => r.key === want) || firstSeen || refs[0]).key;
  const levelChips = h("div", { class: "chips" });
  const unitChips = h("div", { class: "chips" });
  const list = h("div", { class: "list" });
  const search = h("input", { class: "wb-search", type: "search", placeholder: t("search"), "aria-label": t("search") });
  const dots = b => b >= 4 ? "●●●" : b >= 2 ? "●●○" : "●○○";
  const row = (un, w) => {
    const s = srs[idOf(un, w)];
    return h("div", { class: "wordrow" },
      w.img || w.emoji ? pic(w.img, w.emoji, "", 40) : h("span", {}),
      h("div", {}, h("b", {}, T(w.t)), PR(w.pr), h("div", { class: "muted small" }, w.s)),
      s ? h("span", { class: "dots", title: s.b >= 4 ? t("strong") : t("seen") }, dots(s.b || 1)) : h("span", { class: "new" }, t("newWord")),
      sayBtn(w.a, { small: true }));
  };
  const showUnit = async key => {
    curKey = key;
    const r = refs.find(x => x.key === key);
    unitChips.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.u === key));
    const un = await unit(cid, key);
    const words = (un.words || []).filter(w => w.t);
    list.replaceChildren(
      ...words.map(w => row(un, w)),
      words.length ? h("button", { class: "btn block", style: { marginTop: "10px" }, onclick: () => {
        const steps = buildReview(cid, [un], words.map(w => idOf(un, w)));
        practise(c, steps, () => viewWords(cid, key));
      } }, "🎯 " + t("practiseThese")) : null);
  };
  const showLevel = lid => {
    curLevel = lid;
    levelChips.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.l === lid));
    const rs = refs.filter(r => r.level === lid);
    unitChips.replaceChildren(...rs.map(r => h("button", { type: "button", "data-u": r.key, onclick: () => showUnit(r.key) }, `${num(unitNo(c.levels.find(l => l.id === r.level), r.un))} · `, T(r.un.title.t))));
    showUnit(rs.some(r => r.key === curKey) ? curKey : rs[0].key);
  };
  levelChips.append(...levels.map(l => h("button", { type: "button", "data-l": l.id, onclick: () => { search.value = ""; showLevel(l.id); } }, l.id)));
  let timer = null;
  search.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const q = search.value.trim().toLowerCase();
      if (!q) return showLevel(curLevel);
      const units = await allUnits(c);
      const hits = [];
      for (const un of units) for (const w of un.words || []) if (w.t && (w.t.toLowerCase().includes(q) || (w.s || "").toLowerCase().includes(q))) hits.push(row(un, w));
      list.replaceChildren(...hits.slice(0, 60));
    }, 250);
  });
  app.replaceChildren(topbar(t("wordbank"), `#/c/${cid}`),
    h("p", { class: "muted" }, `📚 ${num(all.length)} ${t("seen")} · ⭐ ${num(strong)} ${t("strong")}`),
    h("div", { class: "wb-bar" }, search, levelChips, unitChips), list);
  showLevel(curLevel);
}

function viewSettings() {
  useCourse(null);
  const u = store.currentUser();
  const cur = getLang();
  const langBtn = (code, label) => h("button", { class: "btn " + (cur === code ? "" : "secondary"), lang: code, dir: code === "fa" ? "rtl" : "ltr",
    onclick: () => { store.setPref("homeUi", code); lsSet(PFX + ":ui", code); viewSettings(); } }, label);
  const toggle = (label, name, def) => {
    const on = store.pref(name, def) !== false && store.pref(name, def) !== 0;
    return h("div", { class: "setrow" }, h("span", {}, label),
      h("button", { class: "switch" + (on ? " on" : ""), type: "button", "aria-pressed": String(on), onclick: () => { store.setPref(name, !on); applyPrefs(); viewSettings(); } }, on ? t("on") : t("off")));
  };
  const theme = store.pref("theme", "auto");
  const themeBtn = (v, label) => h("button", { class: "btn " + (theme === v ? "" : "secondary"), type: "button", onclick: () => { store.setPref("theme", v); applyPrefs(); viewSettings(); } }, label);
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent);
  app.replaceChildren(topbar(t("settings"), "#/"),
    h("div", { class: "card stack" },
      h("div", {}, "👤 ", h("b", {}, h("bdi", {}, u.name))),
      h("button", { class: "btn secondary block", onclick: () => { store.logout(); go("#/login"); } }, t("switchUser"))),
    h("h2", {}, "🌐 " + t("homeLang")),
    h("div", { class: "card row", style: { gap: "8px", flexWrap: "wrap" } }, langBtn("fa", "فارسی"), langBtn("en", "English"), langBtn("tr", "Türkçe")),
    h("h2", {}, "🔊 " + t("audioSet")),
    h("div", { class: "card stack" }, toggle(t("autoplay"), "autoplay", true), toggle(t("slowerSpeech"), "slowSpeech", false)),
    h("h2", {}, "🖥️ " + t("display")),
    h("div", { class: "card stack" }, toggle(t("bigText"), "bigText", false), toggle(t("showPr"), "showPr", true),
      h("div", { class: "setrow col" }, h("span", {}, t("theme")), h("div", { class: "row", style: { gap: "6px", flexWrap: "wrap" } }, themeBtn("auto", t("themeAuto")), themeBtn("light", "☀️ " + t("themeLight")), themeBtn("dark", "🌙 " + t("themeDark"))))),
    h("h2", {}, "📱 " + t("install")),
    h("div", { class: "card stack" },
      installPrompt ? h("button", { class: "btn block", onclick: async () => { installPrompt.prompt(); installPrompt = null; viewSettings(); } }, "⬇️ " + t("installNow")) : null,
      h("div", { class: "muted" }, ios ? t("installIOS") : t("installAndroid"))),
    h("h2", {}, "ℹ️ " + t("credits")),
    h("div", { class: "card small stack", dir: "ltr", lang: "en" }, SITE.credits.map(x => h("div", {}, x)), h("div", { class: "muted" }, SITE.version)));
}
let installPrompt = null;
addEventListener("beforeinstallprompt", e => { e.preventDefault(); installPrompt = e; });

// ---------- router ----------
function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
async function route() {
  stop();
  document.querySelectorAll(".feedback, .modal").forEach(e => e.remove());
  if (pendingReload && !/\/l\//.test(location.hash)) { location.reload(); return; }
  applyPrefs();
  const hsh = location.hash.replace(/^#/, "") || "/";
  const user = store.currentUser();
  if (!user && hsh !== "/login") return go("#/login");
  const parts = hsh.split("/").filter(Boolean);
  if (!(parts[2] === "u" && parts[4] === "l")) { window.__lessonGuard = null; lessonHash = null; }
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
    app.replaceChildren(topbar("⚠️", "#/"), h("div", { class: "card stack" },
      ...(SITE.multiLogin ? ["مشکلی پیش آمد. اینترنت را بررسی کنید و دوباره امتحان کنید.", "Something went wrong — check the connection and try again.", "Bir sorun oluştu — bağlantıyı kontrol edip tekrar deneyin."]
        : ["Something went wrong — check the connection and try again."]).map(x => h("div", {}, x)),
      h("div", { class: "row", style: { gap: "10px" } }, h("button", { class: "btn", onclick: () => route() }, "↻"), h("a", { class: "btn secondary", href: "#/" }, "🏠"))));
  }
}
// leaving a lesson with the browser's Back button or a swipe: ask first (the ✕ button asks too)
addEventListener("hashchange", async () => {
  if (window.__lessonGuard?.() && lessonHash && location.hash !== lessonHash) {
    const target = location.hash;
    history.replaceState(null, "", lessonHash);
    if (!(await ask(t("quit"), t("leave"), t("stay")))) return;
    window.__lessonGuard = null; lessonHash = null;
    history.replaceState(null, "", target);
  }
  route();
});
store.onSync(s => {
  // progress arrived from another device: refresh overview screens (never interrupt a running lesson)
  if (s === "changed" && !/\/(l\/|review)/.test(location.hash) && !document.querySelector(".player")) route();
});
store.onSync(s => { if (s === "unknown") { toast(SITE.multiLogin ? `${SITE.strings.fa.unknownName} · Unknown name · Bilinmeyen ad` : t("unknownName")); store.logout(); go("#/login"); } });
route();
if (store.currentUser()) store.sync();

// ---------- updates ----------
// A phone can keep an open tab (or the home-screen app) for weeks. The page asks for a new version whenever it comes back
// to the front and every 30 minutes; a new version takes over at once and the page reloads — never in the middle of a lesson.
if ("serviceWorker" in navigator) addEventListener("load", async () => {
  const hadController = !!navigator.serviceWorker.controller;
  const reg = await navigator.serviceWorker.register("sw.js").catch(() => null);
  if (!reg) return;
  const check = () => reg.update().catch(() => {});
  setInterval(check, 30 * 60e3);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") check(); });
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController || pendingReload) return;   // the very first visit: nothing old to replace
    pendingReload = true;
    if (!document.querySelector(".player") || !window.__lessonGuard?.()) location.reload();
    else toast("✨ " + t("updated"), 4000);
  });
});
