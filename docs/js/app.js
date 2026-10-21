// Zabanyar — app shell, routing and screens.
import { h, $, T, pic, play, stop, sayBtn, toast, setTarget } from "./ui.js";
import { t, setLang, getLang, num } from "./i18n.js";
import * as store from "./store.js";
import { lessonsFor, buildLesson, buildReview, runLesson, LESSON_ICONS } from "./lesson.js";

const app = $("#app");
let INDEX = null;
const unitCache = {};

async function getJSON(url) {
  const r = await fetch(url, { cache: "no-cache" }).catch(() => null) || await caches.match(url);
  if (!r || !r.ok) throw new Error("load " + url);
  return r.json();
}
async function index() { if (!INDEX) INDEX = await getJSON("data/courses.json"); return INDEX; }
async function unit(course, uid) {
  const k = course + "/" + uid;
  if (!unitCache[k]) unitCache[k] = await getJSON(`data/${course}/A1/${uid}.json`);
  return unitCache[k];
}
function courseMeta(id) { return INDEX.courses.find(c => c.id === id); }

function useCourse(c) {
  const lang = c ? c.support : "fa";
  setLang(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.style.setProperty("--accent", c ? c.color : "var(--brand)");
  if (c) setTarget(c.target);
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
    if (!r.ok) { msg.textContent = r.unknown ? `${t("unknownName")} · This name is not on the family list.` : ""; return; }
    if (r.offline) toast(t("offlineLogin"));
    store.sync();
    location.hash = "#/";
  };
  const btn = h("button", { class: "btn block", onclick: go }, t("enter") + " · Enter");
  inp.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  app.replaceChildren(h("div", { class: "login" },
    h("img", { class: "logo", src: "icons/icon.svg", alt: "" }),
    h("h1", {}, "زبان‌یار · Zabanyar"),
    h("div", { class: "muted" }, t("tagline")),
    h("div", { class: "card stack" }, h("label", { style: { fontWeight: 800 } }, t("enterName"), h("div", { class: "muted small", lang: "en" }, "Type your name")), inp, btn, msg)));
  setTimeout(() => inp.focus(), 100);
}

async function viewHome() {
  useCourse(null);
  const idx = await index();
  const u = store.currentUser();
  const p = store.progress();
  const cards = idx.courses.map(c => {
    const units = c.levels[0].units;
    const done = units.filter(un => (p.lessons[`${c.id}/A1/${un.id}/test`]?.best || 0) >= .7 || (un.id === "u00" && p.lessons[`${c.id}/A1/${un.id}/words`])).length;
    const started = Object.keys(p.lessons).some(k => k.startsWith(c.id + "/"));
    const pct = Math.round(100 * done / units.length);
    return h("a", { class: "course", href: `#/c/${c.id}`, style: { "--c": c.color } },
      h("div", { class: "badge", lang: c.target }, c.target.toUpperCase()),
      h("div", {},
        h("h3", {}, h("span", { lang: c.target }, c.name.t), " · ", c.name.s),
        h("p", {}, c.support === "fa" ? "توضیحات به فارسی" : "Explained in English"),
        h("div", { class: "progressbar" }, h("i", { style: { width: pct + "%", background: c.color } }))),
      h("div", { class: "chip" }, started ? "▶" : "✨"));
  });
  app.replaceChildren(
    topbar("زبان‌یار", null, h("a", { class: "iconbtn", href: "#/settings", "aria-label": "settings" }, "⚙️")),
    h("div", { class: "hello" }, h("div", { class: "big" }, `${t("hello")} ${u.name}! 👋`)),
    h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, "🔥 " + num(store.streak(p))), h("span", {}, t("streak"))),
      h("div", { class: "stat" }, h("b", {}, "⭐ " + num(store.totalXp(p))), h("span", {}, t("xp"))),
      h("div", { class: "stat" }, h("b", {}, "📚 " + num(Object.keys(p.srs).length)), h("span", {}, t("words")))),
    h("h2", {}, t("chooseCourse"), h("div", { class: "muted small", dir: "ltr", lang: "en", style: { textAlign: "end" } }, "Which language are you learning?")),
    h("div", { class: "stack" }, cards));
}

async function viewCourse(cid) {
  const idx = await index(); const c = courseMeta(cid); if (!c) return go("#/");
  useCourse(c);
  const p = store.progress();
  const due = store.srsDue(cid + "|").length;
  let nextMarked = false;
  const levels = c.levels.map(lv => {
    if (!lv.units.length) return h("div", { class: "level soon" }, h("div", { class: "level-head" }, h("h2", {}, lv.id + " · " + lv.name), h("span", { class: "pill" }, t("soon"))), h("div", { class: "muted" }, lv.outline));
    return h("div", { class: "level" },
      h("div", { class: "level-head" }, h("h2", {}, lv.id + " · " + lv.name)),
      h("div", { class: "unitpath" }, lv.units.map((un, k) => {
        const ls = lessonIds(un);
        const doneN = ls.filter(l => p.lessons[`${cid}/A1/${un.id}/${l}`]).length;
        const best = p.lessons[`${cid}/A1/${un.id}/test`]?.best || 0;
        const complete = doneN === ls.length;
        let cls = "unit" + (complete ? " done" : "");
        if (!complete && !nextMarked) { cls += " next"; nextMarked = true; }
        const stars = best >= .9 ? 3 : best >= .7 ? 2 : best > 0 ? 1 : 0;
        return h("a", { class: cls, href: `#/c/${cid}/u/${un.id}` },
          h("div", { class: "pic" }, pic(un.img, un.emoji, "", 46)),
          h("div", {}, h("div", { class: "sub" }, `${t("unit")} ${num(k)}`), h("h3", {}, T(un.title.t)), h("div", { class: "sub" }, un.title.s)),
          h("div", { class: "stars" }, complete ? (stars ? "★".repeat(stars) : "✓") : `${num(doneN)}/${num(ls.length)}`));
      })));
  });
  app.replaceChildren(
    topbar(`${c.name.t} · ${c.name.s}`, "#/", h("a", { class: "iconbtn", href: `#/c/${cid}/words`, "aria-label": t("wordbank") }, "📒")),
    h("a", { class: "lesson", href: `#/c/${cid}/review` },
      h("div", { class: "ico" }, "🔁"), h("div", {}, h("b", {}, t("review")), h("span", { class: "muted small" }, t("reviewDesc"))),
      h("div", { class: "chip" }, num(due))),
    offlineCard(c),
    ...levels);
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

async function viewUnit(cid, uid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const un = await unit(cid, uid);
  const p = store.progress();
  const L = lessonsFor(un);
  const k = c.levels[0].units.findIndex(x => x.id === uid);
  app.replaceChildren(
    topbar(`${t("unit")} ${num(k)}`, `#/c/${cid}`),
    h("div", { class: "card unithero" }, pic(un.img, un.emoji, "", 96),
      h("div", {}, h("h1", {}, T(un.title.t)), h("div", { class: "muted", style: { fontSize: "1.1rem" } }, un.title.s), sayBtn(un.title.a, { small: true }))),
    h("h2", {}, t("goals")),
    h("ul", { class: "goals card" }, un.goals.map(g => h("li", {}, g))),
    h("h2", {}, t("lessons")),
    h("div", { class: "lessons" }, L.map(l => {
      const st = p.lessons[`${cid}/A1/${uid}/${l}`];
      const stars = st ? (st.best >= .9 ? 3 : st.best >= .7 ? 2 : 1) : 0;
      return h("a", { class: "lesson" + (st ? " done" : ""), href: `#/c/${cid}/u/${uid}/l/${l}` },
        h("div", { class: "ico" }, LESSON_ICONS[l]),
        h("div", {}, h("b", {}, t("L_" + l)), h("span", { class: "muted small" }, t("D_" + l))),
        h("div", { class: "stars" }, st ? "★".repeat(stars) + "☆".repeat(3 - stars) : "▶"));
    })));
}

async function viewLesson(cid, uid, lid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const un = await unit(cid, uid);
  const steps = buildLesson(cid, un, lid, c.target);
  const L = lessonsFor(un);
  runLesson(app, steps, {
    target: c.target,
    onDone: score => { store.finishLesson(`${cid}/A1/${uid}/${lid}`, score); store.addXp(10 + Math.round(score * 10)); store.scheduleSync(300); },
    onExit: what => {
      document.querySelectorAll(".feedback").forEach(e => e.remove());
      if (what === "again") return viewLesson(cid, uid, lid);
      if (what === "next") {
        const n = L.indexOf(lid) + 1;
        if (n < L.length) return go(`#/c/${cid}/u/${uid}/l/${L[n]}`);
        const units = c.levels[0].units; const ui = units.findIndex(x => x.id === uid);
        if (ui + 1 < units.length) return go(`#/c/${cid}/u/${units[ui + 1].id}`);
        return go(`#/c/${cid}`);
      }
      go(`#/c/${cid}/u/${uid}`);
    },
  });
}

async function allUnits(c) { return Promise.all(c.levels[0].units.map(u => unit(c.id, u.id))); }

async function viewReview(cid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const units = await allUnits(c);
  let ids = store.srsDue(cid + "|");
  if (!ids.length) {
    app.replaceChildren(topbar(t("review"), `#/c/${cid}`), h("div", { class: "card center", style: { marginTop: "30px", fontSize: "1.2rem" } }, t("nothingToReview")));
    return;
  }
  ids = ids.sort(() => Math.random() - .5);
  const steps = buildReview(cid, units, ids);
  runLesson(app, steps, { target: c.target, onDone: s => { store.addXp(5 + Math.round(s * 10)); store.scheduleSync(300); }, onExit: () => { document.querySelectorAll(".feedback").forEach(e => e.remove()); go(`#/c/${cid}`); } });
}

async function viewWords(cid) {
  const idx = await index(); const c = courseMeta(cid); useCourse(c);
  const units = await allUnits(c);
  const seen = new Set(store.srsAll(cid + "|"));
  const tabs = h("div", { class: "tabs" });
  const list = h("div", { class: "list" });
  const show = un => {
    tabs.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.u === un.id));
    list.replaceChildren(...(un.words || []).map(w => h("div", { class: "wordrow", style: { opacity: seen.has(`${cid}|${un.id}|${w.id}`) ? 1 : .6 } },
      pic(w.img, w.emoji, "", 40), h("div", {}, h("b", {}, T(w.t)), h("div", { class: "muted small" }, w.s)), sayBtn(w.a, { small: true }))));
  };
  units.forEach((un, k) => { const b = h("button", { "data-u": un.id, onclick: () => show(un) }, `${num(k)} · `, T(un.title.t)); tabs.append(b); });
  app.replaceChildren(topbar(t("wordbank"), `#/c/${cid}`), h("p", { class: "muted" }, `${num(seen.size)} ${t("learned")}`), tabs, list);
  show(units.find(un => (un.words || []).some(w => seen.has(`${cid}|${un.id}|${w.id}`))) || units[0]);
}

function viewSettings() {
  useCourse(null);
  const u = store.currentUser();
  app.replaceChildren(topbar(t("settings") + " · Settings", "#/"),
    h("div", { class: "card stack" },
      h("div", {}, "👤 ", h("b", {}, u.name)),
      h("button", { class: "btn secondary block", onclick: () => { store.sync(); store.logout(); go("#/login"); } }, t("switchUser") + " · Switch user")),
    h("h2", {}, "📱 " + t("install")),
    h("div", { class: "card muted" }, t("installHint"), h("br"), "In your browser menu choose “Add to Home Screen”."),
    h("h2", {}, "ℹ️ " + t("credits")),
    h("div", { class: "card small stack" },
      h("div", {}, "زبان‌یار · Zabanyar — a family project."),
      h("div", {}, "Pictures: Microsoft Fluent Emoji (MIT) and Twemoji (CC-BY 4.0, © Twitter/X and contributors)."),
      h("div", {}, "Voices: Piper neural text-to-speech voices (lessac, ryan, thorsten, kerstin, dfki, fahrettin) via sherpa-onnx."),
      h("div", {}, "Persian font: Vazirmatn by Saber Rastikerdar (SIL Open Font License)."),
      h("div", { class: "muted" }, "v" + (window.ZY_VERSION || "1"))));
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
      return await viewCourse(parts[1]);
    }
    return await viewHome();
  } catch (e) {
    console.error(e);
    app.replaceChildren(topbar("⚠️", "#/"), h("div", { class: "card" }, "مشکلی پیش آمد. اینترنت را بررسی کنید و دوباره امتحان کنید.", h("br"), "Something went wrong — check the connection and try again.", h("br"), h("button", { class: "btn", style: { marginTop: "12px" }, onclick: () => route() }, "↻")));
  }
}
addEventListener("hashchange", route);
store.onSync(s => { if (s === "unknown") { toast("این اسم در فهرست خانواده نیست · Unknown name"); store.logout(); go("#/login"); } });
route();
if (store.currentUser()) store.sync();

if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
