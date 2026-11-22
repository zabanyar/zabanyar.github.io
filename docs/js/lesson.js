// Builds lessons from unit data and runs the interactive lesson player.
import { h, T, PR, tdir, pic, play, stop, sayBtn, shuffle, sample, md, normalize, ask, editDistance, autoplayOn } from "./ui.js";
import { t, tf, num, getLang, langName } from "./i18n.js";
import { srsSeen, srsAnswer, report } from "./store.js";

export function lessonLabel(un, l, t) {
  // name and short description of a lesson; grammar-unit lessons are named after their topic
  const m = /^g(\d+)$/.exec(l);
  if (m) { const i = +m[1] - 1; const g = un.grammar?.[i]; return [g?.title.t || un.gt?.[i] || t("L_grammar"), g?.title.s || t("D_grammar")]; }
  if (l === "grammar2") { const g = un.grammar?.[2]; return [t("grammar2"), g?.title.s || un.gs?.[2] || t("D_grammar")]; }
  return [t("L_" + l), t("D_" + l)];
}
export const LESSON_ICONS = { letters: "🔤", sounds: "👄", words: "🖼️", phrases: "💬", grammar: "🧩", grammar2: "🧩", reading: "📖", test: "👑", review: "🔁" };

// theme units: up to two grammar points form the "grammar" lesson; a third (or more) becomes "grammar2", so no lesson gets too long
export function grammarParts(n) { return n > 2 ? [[0, 1], Array.from({ length: n - 2 }, (_, i) => i + 2)] : [Array.from({ length: n }, (_, i) => i)]; }
export function lessonsFor(unit) {
  // grammar units: one lesson per grammar topic (g1, g2 …) and a unit test
  if (unit.kind === "grammar") return [...(unit.grammar || []).map((g, i) => "g" + (i + 1)), "test"];
  const L = [];
  if (unit.letters?.length) L.push("letters");
  if (unit.sounds?.length) L.push("sounds");
  if (unit.words?.length) L.push("words");
  if (unit.phrases?.length || unit.dialogue) L.push("phrases");
  if (unit.grammar?.length) L.push(...(unit.grammar.length > 2 ? ["grammar", "grammar2"] : ["grammar"]));
  if (unit.reading) L.push("reading");
  if (unit.id !== "u00" || unit.reading) L.push("test");
  return L;
}

const SPECIAL = { de: ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"], tr: ["ç", "ğ", "ı", "İ", "ö", "ş", "ü", "â", "î", "û"], en: [] };
// Persian keys in alphabetical order, each with a Latin hint for learners who read Turkish
const FA_KEYS = [["آ", "â"], ["ا", "a"], ["ب", "b"], ["پ", "p"], ["ت", "t"], ["ث", "s"], ["ج", "c"], ["چ", "ç"], ["ح", "h"], ["خ", "x"], ["د", "d"],
  ["ذ", "z"], ["ر", "r"], ["ز", "z"], ["ژ", "j"], ["س", "s"], ["ش", "ş"], ["ص", "s"], ["ض", "z"], ["ط", "t"], ["ظ", "z"], ["ع", "'"],
  ["غ", "ğ"], ["ف", "f"], ["ق", "q"], ["ک", "k"], ["گ", "g"], ["ل", "l"], ["م", "m"], ["ن", "n"], ["و", "v·u"], ["ه", "h"], ["ی", "y·i"]];
const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function unitKey(unit) { return unit.level && unit.level !== "A1" ? `${unit.level}.${unit.id}` : unit.id; }

// ---------- step builders ----------
function others(list, item, n, keyFn = x => x.t) {
  const k = keyFn(item);
  const uniq = []; const seen = new Set([k]);
  for (const x of shuffle(list)) { const kk = keyFn(x); if (!seen.has(kk)) { seen.add(kk); uniq.push(x); } if (uniq.length >= n) break; }
  return uniq;
}
// a picture that can stand for the word in picture questions (symbolic pictures, marked "sym", are only decoration)
const picKey = x => x.sym ? "" : (x.img || x.emoji || "");
function picPool(pool, item) {
  // items that can stand as a picture option next to `item`: they have a picture, and not the same picture as `item`
  const k = picKey(item);
  return pool.filter(x => x !== item && x.t !== item.t && picKey(x) && picKey(x) !== k);
}
function mcFrom(item, pool, kind, srsId) {
  // kind: pic (hear/see word, choose picture) | word (see picture, choose word) | meaning (target → support) |
  //       reverse (support → target) | listen (hear → choose word or picture) | listenMeaning (hear a sentence → choose what was said)
  // A picture question needs three other pictures; otherwise it becomes a text question (never blank or mixed options).
  if (kind === "pic" && (!picKey(item) || new Set(picPool(pool, item).map(picKey)).size < 3)) kind = "meaning";
  if (kind === "word" && !picKey(item)) kind = "meaning";
  // a word spelled the same in both languages (warm, das Baby) would give its own answer away: ask by ear instead
  const bare = x => String(x || "").replace(/^(der|die|das|the|a|an|to)\s+/i, "").replace(/\s*\(.*\)$/, "").trim().toLowerCase();
  if ((kind === "meaning" || kind === "reverse") && item.a && bare(item.t) === bare(item.s)) kind = "listen";
  const pics = kind === "pic" || (kind === "listen" && !!picKey(item) && new Set(picPool(pool, item).map(picKey)).size >= 3);
  const dis = pics ? others(picPool(pool, item), item, 3, picKey)
    : kind === "word" ? others(pool.filter(x => x.t !== item.t && picKey(x) !== picKey(item)), item, 3, x => x.t)
    : others(pool.filter(x => x.t !== item.t && x.s !== item.s), item, 3, kind === "meaning" ? (x => x.s) : (x => x.t));
  const opts = shuffle([item, ...dis]);
  const answer = opts.indexOf(item);
  const step = { type: "mc", answer, srs: srsId, a: item.a, reveal: item.t, revealPr: item.pr };
  const picOpt = o => ({ img: o.sym ? null : o.img, emoji: o.emoji, label: o.t });
  if (kind === "pic") { step.label = t("q_pic"); step.prompt = { t: item.t, pr: item.pr, a: item.a, autoplay: true }; step.options = opts.map(picOpt); step.pics = true; }
  if (kind === "word") { step.label = t("q_word"); step.prompt = { img: item.img, emoji: item.emoji }; step.options = opts.map(o => ({ t: o.t, pr: o.pr })); }
  if (kind === "meaning") { step.label = t("q_meaning"); step.prompt = { t: item.t, pr: item.pr, a: item.a, autoplay: true }; step.options = opts.map(o => ({ s: o.s })); step.reveal = item.s; step.revealPr = null; step.revealSupport = true; }
  if (kind === "reverse") { step.label = t("q_reverse"); step.prompt = { s: item.s, img: item.img, emoji: item.emoji }; step.options = opts.map(o => ({ t: o.t, pr: o.pr })); }
  if (kind === "listen") { step.label = t("q_listen"); step.prompt = { a: item.a, autoplay: true, big: true }; step.options = opts.map(o => (pics ? picOpt(o) : { t: o.t })); step.pics = pics; }
  // hear a sentence in the target language and pick it among sentences in the same language (the translation is shown only afterwards)
  if (kind === "listenMeaning") { step.label = t("q_listenMeaning"); step.prompt = { a: item.a, autoplay: true, big: true }; step.options = opts.map(o => ({ t: o.t })); step.reveal = item.t; step.revealS = item.s; }
  return step;
}
function orderStep(item) { return { type: "order", t: item.t, alts: item.alts, s: item.s, a: item.a, revealPr: item.pr, label: t("q_order") }; }
function typeForms(w) {
  const base = w.t.replace(/\s*\([^)]*\)/g, "").replace(/\s*\+\s*[ADG]\b\.?/g, "").trim();
  const out = [w.t, base];
  const m = base.match(/^(der|die|das)\s+(.+)$/i); if (m) out.push(m[2]);
  return out;
}
function typeWordStep(w, srsId, pool = []) {
  // other words with exactly the same meaning are right too
  const answers = [w, ...pool.filter(x => x !== w && x.s === w.s)].flatMap(typeForms);
  return { type: "type", label: t("q_type") + " · " + langName(currentTarget), prompt: { s: w.s, img: w.sym ? null : w.img, emoji: w.sym ? null : w.emoji, a: null }, answers, reveal: w.t, revealPr: w.pr, a: w.a, srs: srsId, canSkip: true };
}
function dictationStep(item) { return { type: "type", label: t("q_typeHeard"), prompt: { a: item.a, autoplay: true, big: true }, answers: [item.t], reveal: item.t, revealPr: item.pr, a: item.a, canSkip: true }; }
// multiple-choice options are shown in random order (in the content the right answer is often listed first)
function mixed(options, answer) {
  const order = shuffle(options.map((o, k) => k));
  return { options: order.map(k => ({ t: options[k] })), answer: order.indexOf(answer) };
}
function grammarEx(x, gi) {
  // cue: a sentence to rewrite or what someone says; task: the instruction; why: the rule, shown after a wrong answer
  const prompt = { gap: x.t.trim() === "___" ? null : x.t, s: x.s, hint: x.hint, cue: x.cue, cpr: x.cpr, ca: x.ca };
  const base = { label: x.task || t("q_fill"), prompt, why: x.why, gi, reveal: x.full, revealPr: x.pr, a: x.a };
  if (x.type === "choice") return { type: "mc", ...base, ...mixed(x.options, x.answer) };
  if (x.type === "type") return { type: "type", ...base, answers: x.answer.map(ans => x.t.replace("___", ans)).concat(x.answer), main: x.answer[0], gapMode: true };
  return { type: "order", t: x.t, alts: x.alts, s: x.s, a: x.a, revealPr: x.pr, label: x.task || t("q_order"), why: x.why, gi };
}
const short = s => s.t.split(/\s+/).length <= 8 && !/[…()\/=]|\.\.\./.test(s.t);
const typeable = w => w.t.length <= 16 && !/[()+\/…]/.test(w.t);

let currentTarget = "en";   // language being learned, for labels like "Write it in German"
export function buildLesson(course, unit, lid, target) {
  currentTarget = target || course.split("-")[0];
  const sid = w => `${course}|${unitKey(unit)}|${w.id}`;
  const words = (unit.words || []).filter(w => w.t);
  const G = unit.grammar || [];
  const S = [];
  const grammarBlock = idx => { for (const i of idx) { const g = G[i]; if (!g) continue; S.push({ type: "grammar", g, gi: i }); for (const x of g.exercises || []) S.push(grammarEx(x, i)); } };
  if (lid === "letters") {
    const L = unit.letters;
    S.push({ type: "alphabet", letters: L });
    for (let i = 0; i < L.length; i += 8) {
      const grp = L.slice(i, i + 8);
      S.push({ type: "letters", letters: grp });
      for (const l of sample(grp, Math.min(3, grp.length))) {
        const opts = shuffle([l, ...others(L, l, 3)]);
        S.push({ type: "mc", label: t("q_listen"), prompt: { a: l.a, autoplay: true, big: true }, options: opts.map(o => ({ t: o.t })), answer: opts.indexOf(l), a: l.a, reveal: l.t, graded: true });
      }
      const withEx = grp.filter(l => l.ex?.img);
      for (const l of sample(withEx, Math.min(2, withEx.length))) {
        const pool = L.filter(x => x.ex?.img);
        const opts = shuffle([l, ...others(pool, l, 3)]);
        S.push({ type: "mc", label: t("q_pic"), prompt: { t: l.ex.t, a: l.ex.a, autoplay: true }, options: opts.map(o => ({ img: o.ex.img, emoji: o.ex.emoji, label: o.ex.t })), answer: opts.indexOf(l), pics: true, a: l.ex.a, reveal: l.ex.t });
      }
    }
  } else if (lid === "sounds") {
    const exs = [];
    for (const s of unit.sounds) { S.push({ type: "sound", sound: s }); exs.push(...(s.ex || [])); }
    for (const e of sample(exs, Math.min(6, exs.length))) S.push(mcFrom(e, exs, "listen"));
  } else if (lid === "words") {
    // groups of four new words: cards, one question each, and (from the second group on) one typing question, so typing is spread out
    const typed = new Set();
    for (let i = 0; i < words.length; i += 4) {
      const grp = words.slice(i, i + 4);
      grp.forEach(w => S.push({ type: "card", word: w, srs: sid(w) }));
      for (const w of grp) {
        const kinds = picKey(w) ? ["pic", "word", "meaning", "listen"] : ["meaning", "reverse", "listen"];
        S.push(mcFrom(w, words, kinds[Math.floor(Math.random() * kinds.length)], sid(w)));
      }
      if (i > 0) { const w = sample(words.slice(0, i).filter(x => typeable(x) && !typed.has(x)), 1)[0]; if (w) { typed.add(w); S.push(typeWordStep(w, sid(w), words)); } }
    }
    const gloss = w => (w.s || "").split(/\s[·;(]|;|\(/)[0].trim();
    const bareT = w => w.t.replace(/^(der|die|das|the|a|an|to)\s+/i, "").toLowerCase();
    S.push({ type: "match", label: t("q_match"), pairs: others(words.filter(w => gloss(w) && !gloss(w).toLowerCase().includes(bareT(w))).map(w => ({ ...w, s: gloss(w) })), {}, 5, w => w.s).filter((w, k, a) => a.findIndex(x => x.t === w.t) === k) });
    for (const w of sample(words.filter(w => picKey(w)), words.length > 12 ? 2 : 3)) S.push(mcFrom(w, words, "listen", sid(w)));
    for (const w of sample(words.filter(w => typeable(w) && !typed.has(w)), Math.max(0, 3 - typed.size))) S.push(typeWordStep(w, sid(w), words));
  } else if (lid === "phrases") {
    const P = unit.phrases || [];
    P.forEach(p => S.push({ type: "phrase", p }));
    for (const p of sample(P, Math.min(4, P.length))) S.push(mcFrom(p, P, Math.random() < .5 ? "meaning" : "reverse"));
    if (unit.dialogue) {
      S.push({ type: "dialogue", d: unit.dialogue });
      const lines = unit.dialogue.lines;
      for (const l of sample(lines, Math.min(3, lines.length))) S.push(mcFrom(l, lines, "listenMeaning"));
      for (const l of sample(lines.filter(short), 2)) S.push(orderStep(l));
    }
    for (const p of sample(P.filter(short), 1)) S.push(orderStep(p));
  } else if (/^g\d+$/.test(lid)) {
    grammarBlock([+lid.slice(1) - 1]);
  } else if (lid === "test" && unit.kind === "grammar") {
    // two exercises from every topic, mixed
    S.push(...shuffle(G.flatMap((g, i) => sample(g.exercises || [], 2).map(x => grammarEx(x, i)))));
  } else if (lid === "grammar" || lid === "grammar2") {
    const parts = grammarParts(G.length);
    grammarBlock(lid === "grammar" ? parts[0] : parts[1] || []);
  } else if (lid === "reading") {
    const r = unit.reading;
    S.push({ type: "reading", r });
    for (const q of r.questions || []) S.push({ type: "mc", label: t("q_read"), prompt: { t: q.q.t, s: q.q.s, a: q.q.a, autoplay: true, readingRef: r }, ...mixed(q.options, q.answer), reveal: q.options[q.answer] });
    const sents = [...(unit.sentences || []), ...r.text];
    for (const s of sample(unit.sentences || [], Math.min(3, (unit.sentences || []).length))) S.push(mcFrom(s, sents, "listenMeaning"));
    for (const s of sample((unit.sentences || []).filter(short), 2)) S.push(orderStep(s));
    for (const s of sample((unit.sentences || []).filter(x => x.t.split(/\s+/).length <= 4), 1)) S.push(dictationStep(s));
  } else if (lid === "test") {
    const pool = [];
    for (const w of sample(words, 4)) pool.push(mcFrom(w, words, picKey(w) ? sample(["pic", "word", "listen"], 1)[0] : "meaning", sid(w)));
    for (const w of sample(words.filter(typeable), 2)) pool.push(typeWordStep(w, sid(w), words));
    const GX = G.flatMap((g, i) => (g.exercises || []).map(x => [x, i]));
    for (const [x, i] of sample(GX, 3)) pool.push(grammarEx(x, i));
    const sents = unit.sentences || [];
    for (const s of sample(sents, 2)) pool.push(mcFrom(s, sents, "listenMeaning"));
    for (const s of sample(sents.filter(short), 1)) pool.push(orderStep(s));
    if (unit.reading?.questions?.length) { const q = sample(unit.reading.questions, 1)[0]; pool.push({ type: "mc", label: t("q_read"), prompt: { t: q.q.t, s: q.q.s, a: q.q.a, autoplay: true, readingRef: unit.reading }, ...mixed(q.options, q.answer), reveal: q.options[q.answer] }); }
    S.push(...shuffle(pool));
  }
  return S;
}

export function buildReview(course, units, ids) {
  currentTarget = course === "de-fsp" ? "de" : course.split("-")[0];
  // ids: "course|uid|wid"
  const byId = {};
  for (const u of units) for (const w of u.words || []) byId[`${course}|${unitKey(u)}|${w.id}`] = { w, u };
  const items = ids.map(i => byId[i] ? { ...byId[i], id: i } : null).filter(Boolean).slice(0, 12);
  const allWords = units.flatMap(u => u.words || []);
  const S = [];
  for (const it of items) {
    const r = Math.random();
    if (r < .25 && typeable(it.w)) S.push(typeWordStep(it.w, it.id, allWords));
    else S.push(mcFrom(it.w, allWords, picKey(it.w) ? sample(["pic", "word", "listen", "meaning"], 1)[0] : sample(["meaning", "reverse"], 1)[0], it.id));
  }
  return S;
}

// ---------- player ----------
const GRADED = new Set(["mc", "match", "order", "type"]);

// what a report is about: the visible content of a step, as plain data
function stepSummary(st) {
  if (!st) return {};
  const out = { type: st.type, label: st.label };
  const p = st.prompt || {};
  for (const k of ["t", "s", "gap", "hint", "a", "cue"]) if (p[k]) out["prompt_" + k] = p[k];
  if (st.options) { out.options = st.options.map(o => o.t ?? o.s ?? o.label ?? o.img ?? o.emoji ?? ""); out.answer = out.options[st.answer]; }
  if (st.answers) out.answers = st.answers.slice(0, 8);
  for (const k of ["t", "s", "reveal", "revealS", "a", "why"]) if (st[k] && typeof st[k] === "string") out[k] = st[k];
  if (st.word) out.word = { t: st.word.t, s: st.word.s, ex: st.word.ex?.t, exS: st.word.ex?.s, a: st.word.a };
  if (st.p) out.phrase = { t: st.p.t, s: st.p.s, a: st.p.a };
  if (st.g) out.grammar = { id: st.g.id, title: st.g.title?.t };
  if (st.d) out.dialogue = st.d.title?.t;
  if (st.r) out.reading = st.r.title?.t;
  if (st.sound) out.sound = st.sound.t;
  if (st.pairs) out.pairs = st.pairs.map(w => `${w.t} = ${w.s}`);
  return out;
}
function summaryText(o) { return [o.prompt_t, o.prompt_gap, o.prompt_cue, o.prompt_s, o.word?.t, o.phrase?.t, o.grammar?.title, o.dialogue, o.reading, o.t, o.sound].filter(Boolean)[0] || o.label || ""; }

function modal(children, onClose) {
  const prev = document.activeElement;
  const close = () => { ov.remove(); document.removeEventListener("keydown", esc); prev?.focus?.(); onClose && onClose(); };
  const esc = e => { if (e.key === "Escape") close(); };
  const ov = h("div", { class: "modal", role: "dialog", "aria-modal": "true", onclick: e => { if (e.target === ov) close(); } }, h("div", { class: "card stack" }, children(close)));
  document.body.append(ov); document.addEventListener("keydown", esc);
  return close;
}
function openReport(ctx, st) {
  const sum = stepSummary(st);
  const ta = h("textarea", { class: "reporttext", rows: 4, placeholder: t("reportPh"), maxlength: 2000, "aria-labelledby": "rptitle" });
  const msg = h("div", { class: "muted small", role: "status" });
  modal(close => {
    const sendBtn = h("button", { class: "btn", type: "button" }, t("send"));
    sendBtn.onclick = async () => {
      sendBtn.disabled = true;
      const ok = await report({ ...ctx, step: sum, text: ta.value.trim(), page: location.hash, ui: getLang() });
      msg.textContent = ok ? t("reportThanks") : t("reportQueued");
      setTimeout(close, 1400);
    };
    return [h("h3", { id: "rptitle", style: { margin: 0 } }, "⚑ ", t("reportTitle")),
      summaryText(sum) ? h("div", { class: "muted small" }, t("reportAbout"), " ", T(String(summaryText(sum)).slice(0, 140))) : null,
      ta, msg,
      h("div", { class: "row askrow" }, h("button", { class: "btn ghost", type: "button", onclick: close }, t("cancel")), sendBtn)];
  });
  setTimeout(() => ta.focus(), 50);
}
function grammarCard(g) {
  return h("div", { class: "card grammar stack" },
    h("h2", { style: { margin: 0 } }, "🧩 ", T(g.title.t)),
    h("div", { class: "muted" }, g.title.s),
    g.table ? h("div", { class: "tablewrap" }, h("table", { class: "gtable", dir: tdir() }, g.table.map((r, i) => h("tr", {}, r.map(c => h(i === 0 && g.thead ? "th" : "td", {}, T(c))))))) : null,
    h("div", { class: "explain", html: md(g.explain) }),
    h("div", { class: "list" }, (g.examples || []).map(e => h("div", { class: "example" }, sayBtn(e.a, { small: true }), h("div", { class: "tx" }, h("div", {}, T(e.t)), PR(e.pr), h("div", { class: "tr" }, e.s))))));
}
function openRule(g) { modal(close => [grammarCard(g), h("button", { class: "btn block", type: "button", onclick: close }, t("gotIt"))]); }

// runLesson(root, steps, opts) — opts: target, onExit(what, extra), onDone(score), ctx (for reports), grammars (unit.grammar, for the 📘 rule button),
// mode ("lesson" | "review" | "practice"), save (key under which an unfinished lesson is kept on this device), resume (a saved state)
export function runLesson(root, steps, { target, onExit, onDone, ctx = {}, grammars = [], mode = "lesson", save = null, resume = null }) {
  let i = 0; let correct = 0; let later = 0; let gradedTotal = steps.filter(s => GRADED.has(s.type)).length;
  let queue = steps.slice(); let retried = new Set(); const missed = [];
  if (resume) {
    // a lesson kept on this device: same steps, same place
    const U = resume.steps;
    queue = resume.order.map(k => U[k]); retried = new Set(resume.retried.map(k => U[k]));
    i = resume.i; correct = resume.correct; later = resume.later || 0; gradedTotal = resume.gradedTotal;
    (resume.missed || []).forEach(k => missed.push(U[k]));
  }
  let feedbackEl = null; let finished = false; let lastGrammar = null;
  const persist = () => {
    if (!save) return;
    try {
      if (finished || i === 0) { localStorage.removeItem(save); return; }
      const U = [...new Set(queue)];
      localStorage.setItem(save, JSON.stringify({ at: Date.now(), steps: U, order: queue.map(s => U.indexOf(s)), retried: [...retried].map(s => U.indexOf(s)),
        missed: missed.map(s => U.indexOf(s)), i, correct, later, gradedTotal }));
    } catch {}
  };
  // leaving in the middle (✕, browser Back, a swipe): ask first; the place is kept on this device anyway
  window.__lessonGuard = () => !finished && i > 0 && document.body.contains(root.querySelector(".player"));
  const quit = async () => { if (i === 0 || finished || await ask(t("quit"), t("leave"), t("stay"))) { window.__lessonGuard = null; stop(); onExit(); } };
  const bar = h("div", { class: "progressbar", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100 }, h("i", { style: { width: "0%" } }));
  const ruleBtn = grammars.length ? h("button", { class: "iconbtn rulebtn", type: "button", title: t("rule"), "aria-label": t("rule"), hidden: true,
    onclick: () => { const g = currentRule(); if (g) openRule(g); } }, "📘") : null;
  const top = h("div", { class: "player-top" },
    h("button", { class: "iconbtn", type: "button", "aria-label": t("close"), onclick: quit }, "✕"),
    bar, ruleBtn,
    h("button", { class: "iconbtn reportbtn", type: "button", title: t("report"), "aria-label": t("report"), onclick: () => openReport(ctx, queue[i]) }, "⚑"));
  const stage = h("div", { class: "stepwrap" });
  root.replaceChildren(h("div", { class: "player" }, top, stage));
  const nudge = () => stage.querySelector(".say")?.classList.add("nudge");
  document.addEventListener("audioblocked", nudge);
  function currentRule() { const st = queue[i]; const gi = st?.gi ?? lastGrammar; return gi != null ? grammars[gi] : null; }

  function setProgress() { const v = Math.round(100 * Math.min(i, queue.length) / queue.length); bar.firstChild.style.width = v + "%"; bar.setAttribute("aria-valuenow", v); }

  function next() {
    if (feedbackEl) { feedbackEl.remove(); feedbackEl = null; }
    stop();
    i++; setProgress();
    if (i >= queue.length) return finish();
    persist();
    render();
  }
  function finish() {
    finished = true; window.__lessonGuard = null; persist();
    document.removeEventListener("audioblocked", nudge);
    // full credit for right the first time, half credit for an answer corrected at the end
    const score = gradedTotal ? Math.min(1, (correct + 0.5 * later) / gradedTotal) : 1;
    const xp = onDone ? onDone(score) : 0;
    const stars = score >= .9 ? 3 : score >= .7 ? 2 : score >= .6 ? 1 : 0;
    const miss = missed.filter(s => s.reveal);
    const buttons = mode === "review"
      ? [h("button", { class: "btn block", onclick: () => onExit("again") }, t("reviewMore")), h("button", { class: "btn ghost block", onclick: () => onExit() }, t("backToCourse"))]
      : mode === "practice"
      ? [h("button", { class: "btn block", onclick: () => onExit() }, t("backToUnit"))]
      : [h("button", { class: "btn block", onclick: () => onExit("next") }, t("nextLesson")),
        miss.length ? h("button", { class: "btn secondary block", onclick: () => onExit("mistakes", missed) }, "🎯 " + t("practiseMistakes")) : null,
        h("button", { class: "btn secondary block", onclick: () => onExit("again") }, t("again")),
        h("button", { class: "btn ghost block", onclick: () => onExit() }, t("backToUnit"))];
    stage.replaceChildren(h("div", { class: "result" },
      h("div", { class: "trophy" }, score >= .7 ? "🏆" : "💪"),
      h("h2", { tabindex: "-1" }, t("lessonDone")),
      h("div", { class: "stars", style: { fontSize: "2rem" }, "aria-label": stars + "/3" }, "★".repeat(stars) + "☆".repeat(3 - stars)),
      gradedTotal ? h("div", { class: "score" }, "✔ " + tf("firstTry", { a: num(correct), b: num(gradedTotal) })) : null,
      xp ? h("div", { class: "muted" }, "⭐ " + tf("xpEarned", { n: num(xp) })) : null,
      miss.length ? h("div", { class: "card stack missed" }, h("b", {}, t("missed")),
        miss.slice(0, 12).map(s => h("div", { class: "row" }, s.a ? sayBtn(s.a, { small: true }) : null, h("div", { style: { flex: 1 } }, s.revealSupport ? s.reveal : T(s.reveal))))) : null,
      h("div", { class: "stack" }, buttons)));
    stage.querySelector("h2")?.focus({ preventScroll: true });
  }

  function feedback(ok, step, extra) {
    const reveal = step.reveal;
    const first = GRADED.has(step.type) && !retried.has(step);
    if (first) { if (ok && !step.noCredit) correct++; }
    else if (ok && GRADED.has(step.type)) later++;
    let again = false;
    if (!ok && first) { retried.add(step); queue.push(step); missed.push(step); again = true; }
    if (step.srs) srsAnswer(step.srs, ok);
    if (step.a) play(step.a);
    const g = step.gi != null ? grammars[step.gi] : null;
    feedbackEl = h("div", { class: "feedback " + (ok ? "ok" : "bad"), role: "alert" },
      h("div", { class: "inner" },
        h("div", { class: "row" }, h("div", { class: "title" }, ok ? t("correct") : t("notQuite")), h("div", { class: "spacer" }), step.a ? sayBtn(step.a, { small: true }) : null),
        !ok && reveal ? h("div", { class: "muted small" }, t("wrongAns")) : null,
        !ok && reveal ? h("div", { style: { fontSize: "1.15rem", fontWeight: 700 } }, step.revealSupport ? reveal : T(reveal)) : null,
        !ok && reveal && step.revealPr && !step.revealSupport ? PR(step.revealPr) : null,
        step.revealS ? h("div", { class: "muted" }, step.revealS) : null,
        extra || null,
        !ok && step.why ? h("div", { class: "why" }, "💡 ", step.why) : null,
        !ok && g ? h("button", { class: "linkbtn small", type: "button", onclick: () => openRule(g) }, t("showRule")) : null,
        again ? h("div", { class: "muted small" }, t("comesAgain")) : null,
        h("button", { class: "btn block", onclick: next, autofocus: true }, t("continue"))));
    document.body.append(feedbackEl);
    feedbackEl.querySelector(".btn.block").focus();
  }

  function continueBar(label = t("continue"), onClick = next) {
    const b = h("div", { class: "feedback" }, h("div", { class: "inner" }, h("button", { class: "btn block", onclick: onClick }, label)));
    feedbackEl = b; document.body.append(b);
    return b;
  }
  function checkBar(extraBtn) {
    const btn = h("button", { class: "btn block", disabled: true }, t("check"));
    const b = h("div", { class: "feedback" }, h("div", { class: "inner" }, btn, extraBtn || null));
    feedbackEl = b; document.body.append(b);
    return { enable: (on = true) => { btn.disabled = !on; }, click: () => { if (!btn.disabled) btn.click(); }, onCheck: fn => btn.addEventListener("click", () => { b.remove(); feedbackEl = null; fn(); }) };
  }
  // "can't type now": the step is skipped and not counted
  function skipBtn(step) {
    return h("button", { class: "linkbtn small", type: "button", onclick: () => { if (GRADED.has(step.type) && !retried.has(step)) gradedTotal--; next(); } }, t("cantType"));
  }

  function promptView(p) {
    const parts = [];
    if (p.img || p.emoji) parts.push(h("div", { class: "center" }, pic(p.img, p.emoji, "pic", 120)));
    if (p.cue) parts.push(h("div", { class: "cue" }, p.ca ? sayBtn(p.ca, { small: true }) : null, h("div", {}, h("div", { class: "q-big cue-t" }, T(p.cue)), PR(p.cpr))));
    if (p.big && p.a) {
      parts.push(h("div", { class: "row", style: { justifyContent: "center", gap: "16px" } }, sayBtn(p.a), sayBtn(p.a, { slow: true })));
    } else if (p.t) {
      parts.push(h("div", { class: "row", style: { justifyContent: "center" } }, p.a ? sayBtn(p.a, { small: true }) : null, h("div", { class: "q-big" }, T(p.t))));
      if (p.pr) parts.push(h("div", { class: "center" }, PR(p.pr)));
    }
    if (p.gap) {
      const [a, b] = p.gap.split("___");
      parts.push(h("div", { class: "q-big", style: { fontSize: "1.45rem" } }, T(h("span", {}, a, h("span", { class: "gapline" }, " "),
        p.hint ? h("span", { class: "gaphint" }, " (" + p.hint + ")") : null, b))));
    }
    if (p.s) parts.push(h("div", { class: "center muted", style: { fontSize: "1.1rem" } }, p.s));
    if (p.readingRef) {
      const det = h("details", { class: "card" }, h("summary", {}, "📖 " + (p.readingRef.title.s || "")), h("div", { class: "reading" }, p.readingRef.text.map(s => h("p", {}, T(s.t)))));
      parts.push(det);
    }
    if (p.autoplay && p.a && autoplayOn()) setTimeout(() => play(p.a), 250);
    else if (p.cue && p.ca && autoplayOn()) setTimeout(() => play(p.ca), 250);
    return parts;
  }

  function render() {
    const step = queue[i];
    if (step.gi != null) lastGrammar = step.gi;
    if (ruleBtn) ruleBtn.hidden = currentRule() == null || step.type === "grammar";
    const el = h("div", { class: "step" });
    stage.replaceChildren(el);
    window.scrollTo(0, 0);
    RENDER[step.type](el, step);
    // screen readers and keyboards start at the question, not at the top of the page
    const pr = el.querySelector(".prompt");
    if (pr && !el.querySelector("input")) { pr.setAttribute("tabindex", "-1"); pr.focus({ preventScroll: true }); }
  }
  // number keys choose an option, Enter checks / continues
  const keys = e => {
    if (!document.body.contains(stage) || document.querySelector(".modal") || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (/^[1-9]$/.test(e.key)) { const b = stage.querySelectorAll(".options .opt")[+e.key - 1]; if (b && !b.disabled) { b.click(); e.preventDefault(); } }
    else if (e.key === "Enter" && feedbackEl && document.activeElement?.tagName !== "BUTTON") { feedbackEl.querySelector(".btn.block:not([disabled])")?.click(); e.preventDefault(); }
  };
  document.addEventListener("keydown", keys);
  const obs = new MutationObserver(() => { if (!document.body.contains(stage)) { document.removeEventListener("keydown", keys); document.removeEventListener("audioblocked", nudge); obs.disconnect(); } });
  obs.observe(root, { childList: true });

  function letterDetail(l) {
    return h("div", { class: "card stack" },
      l.forms ? h("div", { class: "forms", dir: "rtl" }, l.forms.map((f, k) => h("div", {}, h("b", { lang: "fa" }, f), h("small", {}, [t("f_iso"), t("f_ini"), t("f_med"), t("f_fin")][k])))) : null,
      l.pr ? h("div", { class: "pr", dir: "ltr" }, l.pr) : null,
      l.ex ? h("div", { class: "row" }, pic(l.ex.img, l.ex.emoji, "pic", 64), h("div", { style: { flex: 1 } }, h("div", { style: { fontSize: "1.5rem", fontWeight: 800 } }, T(l.ex.t)), l.ex.pr ? h("div", { class: "muted pr", dir: "ltr" }, l.ex.pr) : null, h("div", {}, l.ex.s)), sayBtn(l.ex.a)) : null);
  }
  const RENDER = {
    card(el, { word: w, srs }) {
      if (srs) srsSeen(srs);
      el.append(h("div", { class: "card wordcard" },
        pic(w.img, w.emoji, "pic", 128),
        h("div", { class: "row", style: { justifyContent: "center" } }, sayBtn(w.a), sayBtn(w.a, { slow: true })),
        h("div", { class: "t" }, T(w.t)),
        w.pr ? h("div", { class: "pr" + (/[؀-ۿ]/.test(w.pr) ? " rtl" : ""), dir: /[؀-ۿ]/.test(w.pr) ? "rtl" : "ltr" }, "[ " + w.pr + " ]") : null,
        h("div", { class: "s" }, w.s),
        w.pl ? h("div", { class: "pl row", style: { justifyContent: "center" } }, t("plural") + ": ", T(w.pl), sayBtn(w.pla, { small: true })) : null,
        w.ex ? h("div", { class: "example" }, sayBtn(w.ex.a, { small: true }), h("div", { class: "tx" }, h("div", {}, T(w.ex.t)), PR(w.ex.pr), h("div", { class: "tr" }, w.ex.s))) : null));
      if (autoplayOn()) setTimeout(() => play(w.a), 200);
      continueBar(t("next"));
    },
    phrase(el, { p }) {
      el.append(h("div", { class: "card wordcard" },
        h("div", { style: { fontSize: "3rem" } }, "💬"),
        h("div", { class: "row", style: { justifyContent: "center" } }, sayBtn(p.a), sayBtn(p.a, { slow: true })),
        h("div", { class: "t", style: { fontSize: "1.7rem" } }, T(p.t)),
        p.pr ? h("div", { class: "pr" + (/[؀-ۿ]/.test(p.pr) ? " rtl" : ""), dir: /[؀-ۿ]/.test(p.pr) ? "rtl" : "ltr" }, "[ " + p.pr + " ]") : null,
        h("div", { class: "s" }, p.s)));
      if (autoplayOn()) setTimeout(() => play(p.a), 200);
      continueBar(t("next"));
    },
    letters(el, { letters }) {
      el.append(h("div", { class: "prompt" }, t("tapLetter")));
      const grid = h("div", { class: "letters", dir: tdir() });
      const shown = h("div", {});
      for (const l of letters) {
        const b = h("button", { class: "letter", type: "button" }, h("div", {}, T(l.t), l.pr ? h("small", {}, l.pr) : null));
        b.addEventListener("click", async () => { shown.replaceChildren(letterDetail(l)); await play(l.a); if (l.ex?.a) play(l.ex.a); });
        grid.append(b);
      }
      el.append(grid, shown);
      continueBar(t("next"));
    },
    alphabet(el, { letters }) {
      el.append(h("div", { class: "prompt" }, "🔤 " + t("L_letters") + " — " + num(letters.length)), h("div", { class: "muted small" }, t("tapLetter")));
      const detail = h("div", {});
      const grid = h("div", { class: "letters all", dir: tdir() }, letters.map(l => {
        const b = h("button", { class: "letter", type: "button" }, h("div", {}, T(l.t), l.pr ? h("small", { dir: "ltr" }, l.pr.split(/[—-]/)[0].trim()) : null));
        b.addEventListener("click", async () => { detail.replaceChildren(letterDetail(l)); detail.scrollIntoView({ block: "nearest", behavior: "smooth" }); await play(l.a); if (l.ex?.a) play(l.ex.a); });
        return b;
      }));
      el.append(grid, detail);
      continueBar(t("next"));
    },
    sound(el, { sound: s }) {
      el.append(h("div", { class: "card stack" },
        h("div", { class: "q-big" }, T(s.t)),
        h("div", { class: "grammar" }, h("div", { class: "explain", html: md(s.s) })),
        h("div", { class: "list" }, (s.ex || []).map(e => h("div", { class: "example" }, sayBtn(e.a, { small: true }), h("div", { class: "tx" }, h("b", {}, T(e.t)), PR(e.pr), h("div", { class: "tr" }, e.s)))))));
      continueBar(t("next"));
    },
    grammar(el, { g }) {
      el.append(grammarCard(g));
      continueBar(t("gotIt"));
    },
    dialogue(el, { d }) {
      const colors = { A: "#2f6fdb", B: "#c2334d" };
      const lines = d.lines.map(l => {
        const sp = d.speakers[l.sp];
        const row = h("div", { class: "bubble " + l.sp },
          h("div", { class: "who", style: { background: colors[l.sp] } }, (sp?.name || l.sp).slice(0, 2)),
          h("div", { class: "b" }, h("div", { class: "muted small" }, sp?.name || ""), h("div", {}, T(l.t)), PR(l.pr), h("div", { class: "tr" }, l.s)));
        row.addEventListener("click", () => { mode = null; play(l.a); });
        return { row, l };
      });
      const box = h("div", { class: "dialogue" }, lines.map(x => x.row));
      let mode = null;   // "all" | "role" | null
      const wait = ms => new Promise(r => setTimeout(r, ms));
      const run = async (m) => {
        if (mode) { mode = null; stop(); lines.forEach(x => x.row.classList.remove("active", "yourturn")); setBtns(); return; }
        mode = m; setBtns();
        for (const x of lines) {
          if (mode !== m) break;
          x.row.classList.add("active"); x.row.scrollIntoView({ block: "nearest", behavior: "smooth" });
          if (m === "role" && x.l.sp === "B") {
            // role play: the learner says B's line first, then hears the model
            x.row.classList.add("yourturn"); turn.textContent = "🎙 " + t("yourTurn"); turn.hidden = false;
            await wait(1500 + 550 * x.l.t.split(/\s+/).length);
            turn.hidden = true; x.row.classList.remove("yourturn");
            if (mode !== m) break;
          }
          const finished = await play(x.l.a); x.row.classList.remove("active");
          if (finished === false) break;   // another sound was started (the learner tapped a line): stop the sequence
          await wait(250);
        }
        lines.forEach(x => x.row.classList.remove("active", "yourturn")); turn.hidden = true;
        mode = null; setBtns();
      };
      const turn = h("div", { class: "yourturnmsg", role: "status", hidden: true });
      const bName = d.speakers?.B?.name || "B";
      const allBtn = h("button", { class: "btn", type: "button", onclick: () => run("all") });
      const roleBtn = h("button", { class: "btn secondary", type: "button", onclick: () => run("role") });
      const setBtns = () => { allBtn.textContent = mode === "all" ? t("stopBtn") : "▶ " + t("playAll"); roleBtn.textContent = mode === "role" ? t("stopBtn") : tf("rolePlay", { b: bName }); };
      setBtns();
      const trBtn = h("button", { class: "btn secondary", type: "button", onclick: () => { box.classList.toggle("hide-tr"); trBtn.textContent = box.classList.contains("hide-tr") ? t("showTr") : t("hideTr"); } }, t("hideTr"));
      el.append(h("div", { class: "prompt" }, "💬 ", T(d.title.t), h("span", { class: "muted" }, " — " + d.title.s)),
        h("div", { class: "row wrap" }, allBtn, roleBtn, trBtn), turn,
        h("div", { class: "muted small" }, t("tapToHear")), box);
      if (autoplayOn()) setTimeout(() => run("all"), 400);
      continueBar(t("next"));
    },
    reading(el, { r }) {
      const box = h("div", { class: "card reading" }, r.text.map(s => {
        const row = h("div", { class: "sent" }, sayBtn(s.a, { small: true }), h("div", { style: { flex: 1 } }, h("div", {}, T(s.t)), s.pr ? h("div", { class: "tr" }, PR(s.pr)) : null, h("div", { class: "tr" }, s.s)));
        return row;
      }));
      box.classList.add("hide-tr");
      let readingOn = false;
      const playBtn = h("button", { class: "btn", type: "button" }, "▶ " + t("playAll"));
      playBtn.onclick = async () => {
        if (readingOn) { readingOn = false; stop(); playBtn.textContent = "▶ " + t("playAll"); return; }
        readingOn = true; playBtn.textContent = t("stopBtn");
        for (const s of r.text) { if (!readingOn || (await play(s.a)) === false) break; }
        readingOn = false; playBtn.textContent = "▶ " + t("playAll");
      };
      const trBtn = h("button", { class: "btn secondary", type: "button", onclick: () => { box.classList.toggle("hide-tr"); trBtn.textContent = box.classList.contains("hide-tr") ? t("showTr") : t("hideTr"); } }, t("showTr"));
      el.append(h("div", { class: "prompt" }, "📖 ", T(r.title.t), h("span", { class: "muted" }, " — " + r.title.s)),
        h("div", { class: "row" }, playBtn, trBtn), box);
      continueBar(t("next"));
    },
    mc(el, step) {
      el.append(h("div", { class: "prompt" }, step.label), ...promptView(step.prompt));
      const opts = h("div", { class: "options" + (step.pics ? " grid2 pics" : "") + (step.prompt?.cue && !step.prompt?.gap ? " sentences" : ""), role: "radiogroup", "aria-label": step.label });
      let sel = -1;
      const cb = checkBar();
      const btns = step.options.map((o, k) => {
        const isPic = !!(o.img || (o.emoji && !o.t && !o.s));
        const b = h("button", { class: "opt" + (isPic ? " pic" : ""), type: "button", role: "radio", "aria-checked": "false", "aria-label": isPic ? `${t("option")} ${k + 1}` : null },
          isPic ? pic(o.img, o.emoji, "", 72) : h("span", { class: "k", "aria-hidden": "true" }, num(k + 1)),
          o.t ? h("span", {}, T(o.t), o.pr ? h("span", { class: "muted small", dir: "ltr" }, "  " + o.pr) : null) : null, o.s ? h("span", {}, o.s) : null);
        b.addEventListener("click", () => { sel = k; btns.forEach(x => { x.classList.remove("sel"); x.setAttribute("aria-checked", "false"); }); b.classList.add("sel"); b.setAttribute("aria-checked", "true"); cb.enable(); });
        b.addEventListener("dblclick", () => cb.click());
        return b;
      });
      opts.append(...btns); el.append(opts);
      cb.onCheck(() => {
        const ok = sel === step.answer;
        btns.forEach((b, k) => { b.disabled = true; if (k === step.answer) b.classList.add("right"); else if (k === sel) b.classList.add("wrong"); });
        step.revealSupport = step.revealSupport || (step.options[step.answer]?.s != null && step.options[step.answer]?.t == null);
        feedback(ok, step);
      });
    },
    match(el, step) {
      el.append(h("div", { class: "prompt" }, step.label));
      const left = shuffle(step.pairs), right = shuffle(step.pairs);
      const grid = h("div", { class: "match" });
      let pickL = null, pickR = null, done = 0, mistakes = 0;
      const L = left.map(w => { const b = h("button", { class: "opt", type: "button" }, T(w.t)); b.onclick = () => { play(w.a); pickL = { w, b }; L.forEach(x => x.classList.remove("sel")); b.classList.add("sel"); test(); }; return b; });
      const Rr = right.map(w => { const b = h("button", { class: "opt", type: "button" }, w.s); b.onclick = () => { pickR = { w, b }; Rr.forEach(x => x.classList.remove("sel")); b.classList.add("sel"); test(); }; return b; });
      for (let k = 0; k < left.length; k++) grid.append(L[k], Rr[k]);
      el.append(grid);
      function test() {
        if (!pickL || !pickR) return;
        const a = pickL, b = pickR; pickL = pickR = null;
        if (a.w === b.w) {
          a.b.classList.add("right"); b.b.classList.add("right");
          setTimeout(() => { a.b.classList.add("gone"); b.b.classList.add("gone"); a.b.disabled = b.b.disabled = true; }, 350);
          if (++done === left.length) setTimeout(() => { step.reveal = null; step.noCredit = mistakes > 1; feedback(true, step); }, 450);
        } else {
          mistakes++; a.b.classList.add("wrong"); b.b.classList.add("wrong");
          setTimeout(() => { a.b.classList.remove("wrong", "sel"); b.b.classList.remove("wrong", "sel"); }, 500);
        }
      }
    },
    order(el, step) {
      el.append(h("div", { class: "prompt" }, step.label),
        h("div", { class: "row" }, h("div", { style: { fontSize: "1.2rem", fontWeight: 700, flex: 1 } }, step.s)));
      const words = step.t.split(/\s+/);
      const ans = h("div", { class: "tiles answer", dir: tdir() });
      const bank = h("div", { class: "tiles", dir: tdir() });
      const picked = [];
      const cb = checkBar();
      shuffle(words.map((w, k) => ({ w, k }))).forEach(o => {
        const lab = o.w.replace(/[.,!?;:؟،؛]+$/, "") || o.w;
        const tile = h("button", { class: "tile", type: "button", lang: target }, lab);
        tile.onclick = () => {
          tile.classList.add("used"); tile.disabled = true;
          const at = h("button", { class: "tile", type: "button", lang: target }, lab);
          at.onclick = () => { at.remove(); tile.classList.remove("used"); tile.disabled = false; picked.splice(picked.indexOf(o), 1); cb.enable(picked.length > 0); };
          ans.append(at); picked.push(o); cb.enable(true);
        };
        bank.append(tile);
      });
      el.append(ans, bank);
      cb.onCheck(() => {
        const got = picked.map(o => o.w).join(" ");
        // free word order (Turkish, Persian …): some sentences have other correct orders, listed in "alts"
        const ok = [step.t, ...(step.alts || [])].some(x => normalize(got, target) === normalize(x, target));
        step.reveal = step.t; feedback(ok, step);
      });
    },
    type(el, step) {
      el.append(h("div", { class: "prompt" }, step.label), ...promptView(step.prompt));
      const fa = target === "fa";
      const inp = h("input", { class: "typein", type: "text", lang: target, dir: tdir(), autocomplete: "off", autocapitalize: "off", spellcheck: "false", enterkeyhint: "done", inputmode: fa ? "none" : null, "aria-label": step.label });
      const put = ch => { const st = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? inp.value.length; inp.setRangeText(ch, st, en, "end"); inp.focus({ preventScroll: true }); cb.enable(inp.value.trim().length > 0); };
      const sp = (SPECIAL[target] || []).map(ch => h("button", { type: "button", onclick: () => { put(ch); } }, ch));
      el.append(inp); if (sp.length) el.append(h("div", { class: "special", dir: "ltr" }, sp));
      if (fa) {
        const kb = h("div", { class: "fakb", dir: "rtl" },
          FA_KEYS.map(([ch, hint]) => h("button", { type: "button", "aria-label": ch, onclick: () => put(ch) }, ch, h("small", { dir: "ltr" }, hint))),
          h("div", { class: "fakb-row" },
            h("button", { type: "button", class: "wide", onclick: () => put("‌") }, t("halfSpace")),
            h("button", { type: "button", class: "wide", "aria-label": t("space"), onclick: () => put(" ") }, "␣"),
            h("button", { type: "button", class: "wide", "aria-label": "⌫", onclick: () => { const st = inp.selectionStart ?? inp.value.length; if (st > 0) { inp.setRangeText("", st - 1, st, "end"); } cb.enable(inp.value.trim().length > 0); } }, "⌫"),
            h("button", { type: "button", class: "wide", "aria-label": t("keyboard"), onclick: () => { inp.removeAttribute("inputmode"); inp.blur(); inp.focus(); } }, "⌨️")),
          h("div", { class: "fakb-digits", dir: "ltr" }, FA_DIGITS.map(d => h("button", { type: "button", onclick: () => put(d) }, d))));
        el.append(kb);
      }
      const cb = checkBar(step.canSkip ? skipBtn(step) : null);
      inp.addEventListener("input", () => cb.enable(inp.value.trim().length > 0));
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && inp.value.trim()) { e.preventDefault(); cb.click(); } });
      setTimeout(() => inp.focus({ preventScroll: true }), 300);
      cb.onCheck(() => {
        const raw = inp.value.trim();
        const v = normalize(raw, target);
        let ok = step.answers.some(a => normalize(a, target) === v);
        let note = null;
        const main = step.main ?? step.answers[0];
        if (ok) {
          // right, but written differently from the main answer (ae for ä, another accepted form): show how it is usually written
          const exact = step.answers.some(a => a.trim().toLowerCase() === raw.toLowerCase());
          if (!exact && normalize(main, target) === v) note = h("div", {}, t("spelling"), " ", T(main));
          else if (normalize(main, target) !== v && normalize(step.reveal || "", target) !== v) note = h("div", {}, t("mainAnswer"), " ", T(step.gapMode ? main : step.reveal));
        } else if (!fa && !step.gapMode) {
          // one wrong letter in a longer word counts as right, with the correct spelling shown (not in grammar gaps, where one letter is the point)
          const near = step.answers.find(a => { const n = normalize(a, target); return n.length >= 5 && editDistance(n, v) === 1; });
          if (near) { ok = true; note = h("div", { class: "typo" }, t("typoOk"), " ", T(step.gapMode ? (step.reveal || near) : near)); }
        }
        if (!ok && raw) note = h("div", { class: "muted" }, t("youWrote"), " ", T(raw));
        inp.disabled = true;
        feedback(ok, step, note);
      });
    },
  };

  setProgress();
  render();
}
