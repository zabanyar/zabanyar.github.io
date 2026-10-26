// Builds lessons from unit data and runs the interactive lesson player.
import { h, T, PR, tdir, pic, play, stop, sayBtn, shuffle, sample, md, normalize } from "./ui.js";
import { t, num, getLang } from "./i18n.js";
import { srsSeen, srsAnswer } from "./store.js";

export const LESSON_ICONS = { letters: "🔤", sounds: "👄", words: "🖼️", phrases: "💬", grammar: "🧩", reading: "📖", test: "👑", review: "🔁" };

export function lessonsFor(unit) {
  const L = [];
  if (unit.letters?.length) L.push("letters");
  if (unit.sounds?.length) L.push("sounds");
  if (unit.words?.length) L.push("words");
  if (unit.phrases?.length || unit.dialogue) L.push("phrases");
  if (unit.grammar?.length) L.push("grammar");
  if (unit.reading) L.push("reading");
  if (unit.id !== "u00" || unit.reading) L.push("test");
  return L;
}

const SPECIAL = { de: ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"], tr: ["ç", "ğ", "ı", "İ", "ö", "ş", "ü"], en: [] };
const FA_KEYS = ["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","پ","و","ژ","آ"];
export function unitKey(unit) { return unit.level && unit.level !== "A1" ? `${unit.level}.${unit.id}` : unit.id; }

// ---------- step builders ----------
function wordLabel(w) { return w.t; }
function others(list, item, n, keyFn = x => x.t) {
  const k = keyFn(item);
  const uniq = []; const seen = new Set([k]);
  for (const x of shuffle(list)) { const kk = keyFn(x); if (!seen.has(kk)) { seen.add(kk); uniq.push(x); } if (uniq.length >= n) break; }
  return uniq;
}
function mcFrom(item, pool, kind, srsId) {
  // kind: pic (see word, choose picture) | word (see picture, choose word) | meaning (target → support) | reverse (support → target) | listen (hear → choose word)
  const dis = others(pool, item, kind === "pic" ? 3 : 3, kind === "meaning" ? (x => x.s) : (x => x.t));
  const opts = shuffle([item, ...dis]);
  const answer = opts.indexOf(item);
  const step = { type: "mc", answer, srs: srsId, a: item.a, reveal: item.t, revealPr: item.pr };
  if (kind === "pic") { step.label = t("q_pic"); step.prompt = { t: item.t, pr: item.pr, a: item.a, autoplay: true }; step.options = opts.map(o => ({ img: o.img, emoji: o.emoji })); step.pics = true; }
  if (kind === "word") { step.label = t("q_word"); step.prompt = { img: item.img, emoji: item.emoji }; step.options = opts.map(o => ({ t: o.t, pr: o.pr })); }
  if (kind === "meaning") { step.label = t("q_meaning"); step.prompt = { t: item.t, pr: item.pr, a: item.a, autoplay: true }; step.options = opts.map(o => ({ s: o.s })); step.reveal = item.s; step.revealPr = null; }
  if (kind === "reverse") { step.label = t("q_word"); step.prompt = { s: item.s, img: item.img, emoji: item.emoji }; step.options = opts.map(o => ({ t: o.t, pr: o.pr })); }
  if (kind === "listen") { step.label = t("q_listen"); step.prompt = { a: item.a, autoplay: true, big: true }; step.options = opts.map(o => (o.img && kind === "listen" && item.img ? { img: o.img, emoji: o.emoji } : { t: o.t, pr: o.pr })); step.pics = !!item.img && opts.every(o => o.img); }
  if (kind === "listenMeaning") { step.label = t("q_listenMeaning"); step.prompt = { a: item.a, autoplay: true, big: true }; step.options = opts.map(o => ({ s: o.s })); step.reveal = item.t; step.revealS = item.s; }
  return step;
}
function orderStep(item) { return { type: "order", t: item.t, alts: item.alts, s: item.s, a: item.a, revealPr: item.pr, label: t("q_order") }; }
function typeWordStep(w, srsId) {
  const base = w.t.replace(/\s*\([^)]*\)/g, "").replace(/\s*\+\s*[ADG]\b\.?/g, "").trim();
  const answers = [w.t, base];
  const m = base.match(/^(der|die|das)\s+(.+)$/i); if (m) answers.push(m[2]);
  return { type: "type", label: t("q_type"), prompt: { s: w.s, img: w.img, emoji: w.emoji, a: null }, answers, reveal: w.t, revealPr: w.pr, a: w.a, srs: srsId };
}
function dictationStep(item) { return { type: "type", label: t("q_typeHeard"), prompt: { a: item.a, autoplay: true, big: true }, answers: [item.t], reveal: item.t, revealPr: item.pr, a: item.a }; }
function grammarEx(x) {
  if (x.type === "choice") return { type: "mc", label: t("q_fill"), prompt: { gap: x.t, s: x.s }, options: x.options.map(o => ({ t: o })), answer: x.answer, a: x.a, reveal: x.full, revealPr: x.pr };
  if (x.type === "type") return { type: "type", label: t("q_fill"), prompt: { gap: x.t, s: x.s }, answers: x.answer.map(ans => x.t.replace("___", ans)).concat(x.answer), reveal: x.full, revealPr: x.pr, a: x.a, gapMode: true };
  return { type: "order", t: x.t, alts: x.alts, s: x.s, a: x.a, revealPr: x.pr, label: t("q_order") };
}
const short = s => s.t.split(/\s+/).length <= 8;
const typeable = w => w.t.length <= 16 && !/[()+\/…]/.test(w.t);

export function buildLesson(course, unit, lid, target) {
  const sid = w => `${course}|${unitKey(unit)}|${w.id}`;
  const words = (unit.words || []).filter(w => w.t);
  const S = [];
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
        S.push({ type: "mc", label: t("q_pic"), prompt: { t: l.ex.t, a: l.ex.a, autoplay: true }, options: opts.map(o => ({ img: o.ex.img, emoji: o.ex.emoji })), answer: opts.indexOf(l), pics: true, a: l.ex.a, reveal: l.ex.t });
      }
    }
  } else if (lid === "sounds") {
    const exs = [];
    for (const s of unit.sounds) { S.push({ type: "sound", sound: s }); exs.push(...(s.ex || [])); }
    for (const e of sample(exs, Math.min(6, exs.length))) S.push(mcFrom(e, exs, "listen"));
  } else if (lid === "words") {
    for (let i = 0; i < words.length; i += 4) {
      const grp = words.slice(i, i + 4);
      grp.forEach(w => S.push({ type: "card", word: w, srs: sid(w) }));
      for (const w of grp) {
        const kinds = w.img ? ["pic", "word", "meaning", "listen"] : ["meaning", "reverse", "listen"];
        S.push(mcFrom(w, words, kinds[Math.floor(Math.random() * kinds.length)], sid(w)));
      }
    }
    S.push({ type: "match", label: t("q_match"), pairs: sample(words, Math.min(5, words.length)) });
    for (const w of sample(words.filter(w => w.img), 3)) S.push(mcFrom(w, words, "listen", sid(w)));
    for (const w of sample(words.filter(typeable), 3)) S.push(typeWordStep(w, sid(w)));
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
  } else if (lid === "grammar") {
    for (const g of unit.grammar || []) {
      S.push({ type: "grammar", g });
      for (const x of g.exercises || []) S.push(grammarEx(x));
    }
  } else if (lid === "reading") {
    const r = unit.reading;
    S.push({ type: "reading", r });
    for (const q of r.questions || []) S.push({ type: "mc", label: t("q_read"), prompt: { t: q.q.t, s: q.q.s, a: q.q.a, autoplay: true, readingRef: r }, options: q.options.map(o => ({ t: o })), answer: q.answer, reveal: q.options[q.answer] });
    const sents = [...(unit.sentences || []), ...r.text];
    for (const s of sample(unit.sentences || [], Math.min(3, (unit.sentences || []).length))) S.push(mcFrom(s, sents, "listenMeaning"));
    for (const s of sample((unit.sentences || []).filter(short), 2)) S.push(orderStep(s));
    for (const s of sample((unit.sentences || []).filter(x => x.t.split(/\s+/).length <= 4), 1)) S.push(dictationStep(s));
  } else if (lid === "test") {
    const pool = [];
    for (const w of sample(words, 4)) pool.push(mcFrom(w, words, w.img ? sample(["pic", "word", "listen"], 1)[0] : "meaning", sid(w)));
    for (const w of sample(words.filter(typeable), 2)) pool.push(typeWordStep(w, sid(w)));
    const G = (unit.grammar || []).flatMap(g => g.exercises || []);
    for (const x of sample(G, 3)) pool.push(grammarEx(x));
    const sents = unit.sentences || [];
    for (const s of sample(sents, 2)) pool.push(mcFrom(s, sents, "listenMeaning"));
    for (const s of sample(sents.filter(short), 1)) pool.push(orderStep(s));
    if (unit.reading?.questions?.length) { const q = sample(unit.reading.questions, 1)[0]; pool.push({ type: "mc", label: t("q_read"), prompt: { t: q.q.t, s: q.q.s, a: q.q.a, autoplay: true, readingRef: unit.reading }, options: q.options.map(o => ({ t: o })), answer: q.answer, reveal: q.options[q.answer] }); }
    S.push(...shuffle(pool));
  }
  return S;
}

export function buildReview(course, units, ids) {
  // ids: "course|uid|wid"
  const byId = {};
  for (const u of units) for (const w of u.words || []) byId[`${course}|${unitKey(u)}|${w.id}`] = { w, u };
  const items = ids.map(i => byId[i] ? { ...byId[i], id: i } : null).filter(Boolean).slice(0, 12);
  const allWords = units.flatMap(u => u.words || []);
  const S = [];
  for (const it of items) {
    const r = Math.random();
    if (r < .25 && typeable(it.w)) S.push(typeWordStep(it.w, it.id));
    else S.push(mcFrom(it.w, allWords, it.w.img ? sample(["pic", "word", "listen", "meaning"], 1)[0] : sample(["meaning", "reverse"], 1)[0], it.id));
  }
  return S;
}

// ---------- player ----------
const GRADED = new Set(["mc", "match", "order", "type"]);

export function runLesson(root, steps, { target, onExit, onDone, title }) {
  let i = 0; let correct = 0; let gradedTotal = steps.filter(s => GRADED.has(s.type)).length;
  const queue = steps.slice(); const retried = new Set();
  let feedbackEl = null;
  const bar = h("div", { class: "progressbar" }, h("i", { style: { width: "0%" } }));
  const top = h("div", { class: "player-top" },
    h("button", { class: "iconbtn", "aria-label": "close", onclick: () => { if (i === 0 || confirm(t("quit"))) { stop(); onExit(); } } }, "✕"),
    bar);
  const stage = h("div", { class: "stepwrap" });
  root.replaceChildren(h("div", { class: "player" }, top, stage));

  function setProgress() { bar.firstChild.style.width = Math.round(100 * Math.min(i, queue.length) / queue.length) + "%"; }

  function next() {
    if (feedbackEl) { feedbackEl.remove(); feedbackEl = null; }
    stop();
    i++; setProgress();
    if (i >= queue.length) return finish();
    render();
  }
  function finish() {
    const score = gradedTotal ? correct / gradedTotal : 1;
    onDone && onDone(score);
    const stars = score >= .9 ? 3 : score >= .7 ? 2 : score > 0 ? 1 : 0;
    stage.replaceChildren(h("div", { class: "result" },
      h("div", { class: "trophy" }, score >= .7 ? "🏆" : "💪"),
      h("h2", {}, t("lessonDone")),
      h("div", { class: "stars", style: { fontSize: "2rem" } }, "★".repeat(stars) + "☆".repeat(3 - stars)),
      gradedTotal ? h("div", { class: "score" }, num(Math.round(score * 100)) + (getLang() === "fa" ? "٪" : "%")) : null,
      h("div", { class: "stack" },
        h("button", { class: "btn block", onclick: () => onExit("next") }, t("nextLesson")),
        h("button", { class: "btn secondary block", onclick: () => onExit("again") }, t("again")),
        h("button", { class: "btn ghost block", onclick: () => onExit() }, t("backToUnit")))));
  }

  function feedback(ok, step, extra) {
    const reveal = step.reveal;
    if (GRADED.has(step.type) && !retried.has(step)) { if (ok) correct++; }
    if (!ok && GRADED.has(step.type) && !retried.has(step)) { retried.add(step); queue.push(step); }
    if (step.srs) srsAnswer(step.srs, ok);
    if (step.a) play(step.a);
    feedbackEl = h("div", { class: "feedback " + (ok ? "ok" : "bad"), role: "alert" },
      h("div", { class: "inner" },
        h("div", { class: "row" }, h("div", { class: "title" }, ok ? t("correct") : t("wrongAns")), h("div", { class: "spacer" }), step.a ? sayBtn(step.a, { small: true }) : null),
        !ok && reveal ? h("div", { style: { fontSize: "1.15rem", fontWeight: 700 } }, step.revealSupport ? reveal : T(reveal)) : null,
        !ok && reveal && step.revealPr && !step.revealSupport ? PR(step.revealPr) : null,
        step.revealS ? h("div", { class: "muted" }, step.revealS) : null,
        extra || null,
        h("button", { class: "btn block", onclick: next, autofocus: true }, t("continue"))));
    document.body.append(feedbackEl);
    feedbackEl.querySelector(".btn").focus();
  }

  function continueBar(label = t("continue"), onClick = next) {
    const b = h("div", { class: "feedback" }, h("div", { class: "inner" }, h("button", { class: "btn block", onclick: onClick }, label)));
    feedbackEl = b; document.body.append(b);
    return b;
  }
  function checkBar(getAnswer) {
    const btn = h("button", { class: "btn block", disabled: true }, t("check"));
    const b = h("div", { class: "feedback" }, h("div", { class: "inner" }, btn));
    feedbackEl = b; document.body.append(b);
    return { enable: (on = true) => { btn.disabled = !on; }, onCheck: fn => btn.addEventListener("click", () => { b.remove(); feedbackEl = null; fn(); }) };
  }

  function promptView(p) {
    const parts = [];
    if (p.img || p.emoji) parts.push(h("div", { class: "center" }, pic(p.img, p.emoji, "pic", 120)));
    if (p.big && p.a) {
      parts.push(h("div", { class: "row", style: { justifyContent: "center", gap: "16px" } }, sayBtn(p.a), sayBtn(p.a, { slow: true })));
    } else if (p.t) {
      parts.push(h("div", { class: "row", style: { justifyContent: "center" } }, p.a ? sayBtn(p.a, { small: true }) : null, h("div", { class: "q-big" }, T(p.t))));
      if (p.pr) parts.push(h("div", { class: "center" }, PR(p.pr)));
    }
    if (p.gap) {
      const [a, b] = p.gap.split("___");
      parts.push(h("div", { class: "q-big", style: { fontSize: "1.45rem" } }, T(h("span", {}, a, h("span", { style: { borderBottom: "3px solid var(--accent)", padding: "0 18px" } }, " "), b))));
    }
    if (p.s) parts.push(h("div", { class: "center muted", style: { fontSize: "1.1rem" } }, p.s));
    if (p.readingRef) {
      const det = h("details", { class: "card" }, h("summary", {}, "📖 " + (p.readingRef.title.s || "")), h("div", { class: "reading" }, p.readingRef.text.map(s => h("p", {}, T(s.t)))));
      parts.push(det);
    }
    if (p.autoplay && p.a) setTimeout(() => play(p.a), 250);
    return parts;
  }

  function render() {
    const step = queue[i];
    const el = h("div", { class: "step" });
    stage.replaceChildren(el);
    window.scrollTo(0, 0);
    const R = RENDER[step.type];
    R(el, step);
  }

  function letterDetail(l) {
    return h("div", { class: "card stack" },
      l.forms ? h("div", { class: "forms", dir: "rtl" }, l.forms.map((f, k) => h("div", {}, h("b", { lang: "fa" }, f), h("small", {}, [t("f_iso"), t("f_ini"), t("f_med"), t("f_fin")][k])))) : null,
      l.pr ? h("div", { class: "pr", dir: "ltr" }, l.pr) : null,
      l.ex ? h("div", { class: "row" }, pic(l.ex.img, l.ex.emoji, "pic", 64), h("div", { style: { flex: 1 } }, h("div", { style: { fontSize: "1.5rem", fontWeight: 800 } }, T(l.ex.t)), l.ex.pr ? h("div", { class: "muted", dir: "ltr" }, l.ex.pr) : null, h("div", {}, l.ex.s)), sayBtn(l.ex.a)) : null);
  }
  const RENDER = {
    card(el, { word: w, srs }) {
      if (srs) srsSeen(srs);
      el.append(h("div", { class: "card wordcard" },
        pic(w.img, w.emoji, "pic", 128),
        h("div", { class: "row", style: { justifyContent: "center" } }, sayBtn(w.a), sayBtn(w.a, { slow: true })),
        h("div", { class: "t" }, T(w.t)),
        w.pr ? h("div", { class: "pr" }, "[ " + w.pr + " ]") : null,
        h("div", { class: "s" }, w.s),
        w.pl ? h("div", { class: "pl row", style: { justifyContent: "center" } }, t("plural") + ": ", T(w.pl), sayBtn(w.pla, { small: true })) : null,
        w.ex ? h("div", { class: "example" }, sayBtn(w.ex.a, { small: true }), h("div", { class: "tx" }, h("div", {}, T(w.ex.t)), PR(w.ex.pr), h("div", { class: "tr" }, w.ex.s))) : null));
      setTimeout(() => play(w.a), 200);
      continueBar(t("next"));
    },
    phrase(el, { p }) {
      el.append(h("div", { class: "card wordcard" },
        h("div", { style: { fontSize: "3rem" } }, "💬"),
        h("div", { class: "row", style: { justifyContent: "center" } }, sayBtn(p.a), sayBtn(p.a, { slow: true })),
        h("div", { class: "t", style: { fontSize: "1.7rem" } }, T(p.t)),
        p.pr ? h("div", { class: "pr" }, "[ " + p.pr + " ]") : null,
        h("div", { class: "s" }, p.s)));
      setTimeout(() => play(p.a), 200);
      continueBar(t("next"));
    },
    letters(el, { letters }) {
      el.append(h("div", { class: "prompt" }, t("tapLetter")));
      const grid = h("div", { class: "letters", dir: tdir() });
      for (const l of letters) {
        const b = h("button", { class: "letter", type: "button" }, h("div", {}, T(l.t), l.pr ? h("small", {}, l.pr) : null));
        b.addEventListener("click", async () => { await play(l.a); if (l.ex?.a) play(l.ex.a); shown.replaceChildren(exView(l)); });
        grid.append(b);
      }
      const shown = h("div", {});
      const exView = l => letterDetail(l);
      const _old = l => l.ex ? h("div", { class: "card row" }, pic(l.ex.img, l.ex.emoji, "pic", 64), h("div", { style: { flex: 1 } }, h("div", { style: { fontSize: "1.5rem", fontWeight: 800 } }, T(l.ex.t)), l.ex.pr ? h("div", { class: "muted" }, l.ex.pr) : null, h("div", {}, l.ex.s)), sayBtn(l.ex.a)) : "";
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
        h("div", { class: "list" }, (s.ex || []).map(e => h("div", { class: "example" }, sayBtn(e.a, { small: true }), h("div", { class: "tx" }, h("b", {}, T(e.t)), e.pr ? h("span", { class: "muted" }, "  [" + e.pr + "]") : null, h("div", { class: "tr" }, e.s)))))));
      continueBar(t("next"));
    },
    grammar(el, { g }) {
      el.append(h("div", { class: "card grammar stack" },
        h("h2", { style: { margin: 0 } }, "🧩 ", T(g.title.t)),
        h("div", { class: "muted" }, g.title.s),
        h("div", { class: "explain", html: md(g.explain) }),
        g.table ? h("table", { class: "gtable", dir: tdir() }, g.table.map(r => h("tr", {}, r.map(c => h("td", {}, T(c)))))) : null,
        h("div", { class: "list" }, (g.examples || []).map(e => h("div", { class: "example" }, sayBtn(e.a, { small: true }), h("div", { class: "tx" }, h("div", {}, T(e.t)), PR(e.pr), h("div", { class: "tr" }, e.s)))))));
      continueBar(t("gotIt"));
    },
    dialogue(el, { d }) {
      const colors = { A: "#2f6fdb", B: "#c2334d" };
      const lines = d.lines.map(l => {
        const sp = d.speakers[l.sp];
        const row = h("div", { class: "bubble " + l.sp },
          h("div", { class: "who", style: { background: colors[l.sp] } }, (sp?.name || l.sp).slice(0, 2)),
          h("div", { class: "b" }, h("div", { class: "muted small" }, sp?.name || ""), h("div", {}, T(l.t)), PR(l.pr), h("div", { class: "tr" }, l.s)));
        row.addEventListener("click", () => play(l.a));
        return { row, l };
      });
      const box = h("div", { class: "dialogue" }, lines.map(x => x.row));
      let playing = false;
      const playAll = async () => {
        if (playing) { playing = false; stop(); return; }
        playing = true;
        for (const x of lines) { if (!playing) break; x.row.classList.add("active"); x.row.scrollIntoView({ block: "nearest", behavior: "smooth" }); await play(x.l.a); x.row.classList.remove("active"); await new Promise(r => setTimeout(r, 250)); }
        playing = false;
      };
      const trBtn = h("button", { class: "btn secondary", onclick: () => { box.classList.toggle("hide-tr"); trBtn.textContent = box.classList.contains("hide-tr") ? t("showTr") : t("hideTr"); } }, t("hideTr"));
      el.append(h("div", { class: "prompt" }, "💬 ", T(d.title.t), h("span", { class: "muted" }, " — " + d.title.s)),
        h("div", { class: "row" }, h("button", { class: "btn", onclick: playAll }, "▶ " + t("playAll")), trBtn),
        h("div", { class: "muted small" }, t("tapToHear")), box);
      setTimeout(playAll, 400);
      continueBar(t("next"));
    },
    reading(el, { r }) {
      const box = h("div", { class: "card reading" }, r.text.map(s => {
        const row = h("div", { class: "sent" }, sayBtn(s.a, { small: true }), h("div", { style: { flex: 1 } }, h("div", {}, T(s.t)), s.pr ? h("div", { class: "tr" }, PR(s.pr)) : null, h("div", { class: "tr" }, s.s)));
        return row;
      }));
      box.classList.add("hide-tr");
      const playAll = async () => { for (const s of r.text) await play(s.a); };
      const trBtn = h("button", { class: "btn secondary", onclick: () => { box.classList.toggle("hide-tr"); trBtn.textContent = box.classList.contains("hide-tr") ? t("showTr") : t("hideTr"); } }, t("showTr"));
      el.append(h("div", { class: "prompt" }, "📖 ", T(r.title.t), h("span", { class: "muted" }, " — " + r.title.s)),
        h("div", { class: "row" }, h("button", { class: "btn", onclick: playAll }, "▶ " + t("playAll")), trBtn), box);
      continueBar(t("next"));
    },
    mc(el, step) {
      el.append(h("div", { class: "prompt" }, step.label), ...promptView(step.prompt));
      const opts = h("div", { class: "options" + (step.pics ? " grid2 pics" : "") });
      let sel = -1;
      const cb = checkBar();
      const btns = step.options.map((o, k) => {
        const b = h("button", { class: "opt" + (o.img || o.emoji && !o.t && !o.s ? " pic" : ""), type: "button" },
          o.img || (o.emoji && !o.t && !o.s) ? pic(o.img, o.emoji, "", 72) : h("span", { class: "k" }, num(k + 1)),
          o.t ? h("span", {}, T(o.t), o.pr ? h("span", { class: "muted small", dir: "ltr" }, "  " + o.pr) : null) : null, o.s ? h("span", {}, o.s) : null);
        b.addEventListener("click", () => { sel = k; btns.forEach(x => x.classList.remove("sel")); b.classList.add("sel"); cb.enable(); });
        return b;
      });
      opts.append(...btns); el.append(opts);
      cb.onCheck(() => {
        const ok = sel === step.answer;
        btns.forEach((b, k) => { b.disabled = true; if (k === step.answer) b.classList.add("right"); else if (k === sel) b.classList.add("wrong"); });
        step.revealSupport = step.options[step.answer]?.s != null && step.options[step.answer]?.t == null;
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
          setTimeout(() => { a.b.classList.add("gone"); b.b.classList.add("gone"); }, 350);
          if (++done === left.length) setTimeout(() => { step.reveal = null; feedback(mistakes <= 1, step); }, 450);
        } else {
          mistakes++; a.b.classList.add("wrong"); b.b.classList.add("wrong");
          setTimeout(() => { a.b.classList.remove("wrong", "sel"); b.b.classList.remove("wrong", "sel"); }, 500);
        }
      }
    },
    order(el, step) {
      el.append(h("div", { class: "prompt" }, step.label),
        h("div", { class: "row" }, sayBtn(step.a, { small: true }), h("div", { style: { fontSize: "1.2rem", fontWeight: 700, flex: 1 } }, step.s)));
      const words = step.t.split(/\s+/);
      const ans = h("div", { class: "tiles answer", dir: tdir() });
      const bank = h("div", { class: "tiles", dir: tdir() });
      const picked = [];
      const cb = checkBar();
      shuffle(words.map((w, k) => ({ w, k }))).forEach(o => {
        const tile = h("button", { class: "tile", type: "button", lang: target }, o.w);
        tile.onclick = () => {
          tile.classList.add("used");
          const at = h("button", { class: "tile", type: "button", lang: target }, o.w);
          at.onclick = () => { at.remove(); tile.classList.remove("used"); picked.splice(picked.indexOf(o), 1); cb.enable(picked.length > 0); };
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
      const inp = h("input", { class: "typein", type: "text", lang: target, dir: tdir(), autocomplete: "off", autocapitalize: "off", spellcheck: "false", enterkeyhint: "done", inputmode: fa ? "none" : null });
      const put = ch => { const st = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? inp.value.length; inp.setRangeText(ch, st, en, "end"); cb.enable(inp.value.trim().length > 0); };
      const sp = (SPECIAL[target] || []).map(ch => h("button", { type: "button", onclick: () => { put(ch); inp.focus(); } }, ch));
      el.append(inp); if (sp.length) el.append(h("div", { class: "special", dir: "ltr" }, sp));
      if (fa) {
        const kb = h("div", { class: "fakb", dir: "rtl" },
          FA_KEYS.map(ch => h("button", { type: "button", onclick: () => put(ch) }, ch)),
          h("button", { type: "button", class: "wide", onclick: () => put("\u200c") }, "نیم‌فاصله"),
          h("button", { type: "button", class: "wide", onclick: () => put(" ") }, "␣"),
          h("button", { type: "button", class: "wide", onclick: () => { const st = inp.selectionStart ?? inp.value.length; if (st > 0) { inp.setRangeText("", st - 1, st, "end"); } cb.enable(inp.value.trim().length > 0); } }, "⌫"),
          h("button", { type: "button", class: "wide", onclick: () => { inp.removeAttribute("inputmode"); inp.focus(); } }, "⌨️"));
        el.append(kb);
      }
      const cb = checkBar();
      inp.addEventListener("input", () => cb.enable(inp.value.trim().length > 0));
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && inp.value.trim()) { feedbackEl?.querySelector(".btn")?.click(); } });
      if (!fa) setTimeout(() => inp.focus({ preventScroll: true }), 300);
      cb.onCheck(() => {
        const v = normalize(inp.value, target);
        const ok = step.answers.some(a => normalize(a, target) === v);
        inp.disabled = true;
        feedback(ok, step);
      });
    },
  };

  setProgress();
  render();
}
