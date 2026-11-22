// Small DOM helpers, audio player, pictures, dialogs.
import { t } from "./i18n.js";
export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k === "style" && typeof v === "object") { for (const [sk, sv] of Object.entries(v)) { if (sk.startsWith("--")) el.style.setProperty(sk, sv); else el.style[sk] = sv; } }
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}
export const $ = (s, r = document) => r.querySelector(s);

let ctx = { target: "en", tdir: "ltr" };
export function setTarget(lang, tdir = "ltr") { ctx.target = lang; ctx.tdir = tdir; }
export function tdir() { return ctx.tdir; }
// Text in the language being learned: isolated, in its own direction, correct lang for fonts & screen readers.
export function T(text, cls = "") { return h("span", { class: "tgt " + cls, lang: ctx.target, dir: ctx.tdir }, text); }
// Transliteration / pronunciation hint
// Persian-script hints (en-fa, tr-fa) run right-to-left and are not slanted; Latin hints (fa-tr) stay left-to-right.
export const isArabicScript = s => /[\u0600-\u06FF]/.test(s || "");
export function PR(text) { return text ? h("div", { class: "pr" + (isArabicScript(text) ? " rtl" : ""), dir: isArabicScript(text) ? "rtl" : "ltr" }, text) : null; }

export function pic(src, emoji, cls = "pic", size) {
  if (src) return h("img", { class: cls, src, alt: "", loading: "lazy", width: size, height: size, draggable: "false" });
  if (emoji) return h("span", { class: cls, style: { fontSize: (size || 64) * 0.8 + "px", lineHeight: 1 } }, emoji);
  return null;
}

// ---------- audio ----------
const player = new Audio();
player.preload = "auto";
// per-person audio settings: slower speech and automatic playback (set from the settings screen)
const audioPrefs = { slow: false, autoplay: true };
export function setAudioPrefs(p) { Object.assign(audioPrefs, p); }
export function autoplayOn() { return audioPrefs.autoplay; }
let currentBtn = null;
let pending = null;   // resolver of the sound that is playing now: an interrupted sound must still finish its promise
export function play(src, { rate = 1, btn = null } = {}) {
  if (pending) { const p = pending; pending = null; p(false); }
  return new Promise(resolve => {
    if (!src) return resolve(true);
    pending = resolve;
    try {
      if (currentBtn) currentBtn.classList.remove("playing");
      player.pause();
      player.src = src;
      player.playbackRate = rate * (audioPrefs.slow ? 0.85 : 1);
      player.preservesPitch = true;
      currentBtn = btn; if (btn) btn.classList.add("playing");
      const done = () => { if (btn) btn.classList.remove("playing"); player.onended = player.onerror = null; if (pending === resolve) pending = null; resolve(true); };
      player.onended = done; player.onerror = done;
      // a browser that blocks sound until the first tap (iOS after a cold start): tell the page, so it can point at the 🔊 button
      const p = player.play(); if (p && p.catch) p.catch(e => { if (e && e.name === "NotAllowedError") document.dispatchEvent(new CustomEvent("audioblocked")); done(); });
    } catch { pending = null; resolve(true); }
  });
}
export function stop() { try { player.pause(); } catch {} if (currentBtn) currentBtn.classList.remove("playing"); if (pending) { const p = pending; pending = null; p(false); } }
export function sayBtn(src, { small = false, slow = false, label = "▶" } = {}) {
  if (!src) return null;
  const b = h("button", { class: "say" + (small ? " sm" : "") + (slow ? " slow" : ""), "aria-label": label === "▶" ? (slow ? t("slow") : t("listen")) : label, type: "button" }, slow ? "🐢" : "🔊");
  b.addEventListener("click", e => { e.stopPropagation(); play(src, { rate: slow ? 0.7 : 1, btn: b }); });
  return b;
}

export function toast(msg, ms = 2600) {
  const t = h("div", { class: "toast", role: "status" }, msg);
  document.body.append(t);
  setTimeout(() => t.remove(), ms);
}

// a small in-app dialog with big buttons (instead of the browser's confirm(), which looks like a warning)
export function ask(text, yes, no) {
  return new Promise(res => {
    const prev = document.activeElement;
    const close = v => { ov.remove(); document.removeEventListener("keydown", key); prev?.focus?.(); res(v); };
    const key = e => { if (e.key === "Escape") close(false); };
    const yb = h("button", { class: "btn", type: "button", onclick: () => close(true) }, yes);
    const nb = h("button", { class: "btn secondary", type: "button", onclick: () => close(false) }, no);
    const ov = h("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "askq", onclick: e => { if (e.target === ov) close(false); } },
      h("div", { class: "card stack" }, h("h3", { id: "askq", style: { margin: 0 } }, text), h("div", { class: "row askrow" }, nb, yb)));
    document.body.append(ov); document.addEventListener("keydown", key); setTimeout(() => nb.focus(), 30);
  });
}
// edit distance (for "almost right: mind the spelling")
export function editDistance(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length];
}

export function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
export function sample(a, n) { return shuffle(a).slice(0, n); }

// tiny markdown: **bold**, \n paragraphs
export function md(text) {
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // In a Persian paragraph every run of Latin-script text (with its **bold** marks and punctuation) is isolated,
  // so "She is **a** teacher." stays in reading order inside right-to-left text.
  const LAT = /[A-Za-zÀ-ɏ*][A-Za-zÀ-ɏ0-9'’\- *]*(?:[.,!?;:]+(?=\s|$)|[A-Za-zÀ-ɏ0-9'’*])?/g;
  const iso = p => /[\u0600-\u06FF]/.test(p) ? p.replace(LAT, m => /[A-Za-zÀ-ɏ]/.test(m) ? "\u0001" + m.trimEnd() + "\u0002" + m.slice(m.trimEnd().length) : m) : p;
  return esc(text).split(/\n+/).map(p => "<p>" + iso(p).replace(/\*\*(.+?)\*\*/g, "<b><bdi>$1</bdi></b>").replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, "$1<i>$2</i>")
    .replace(/\u0001/g, '<bdi dir="ltr">').replace(/\u0002/g, "</bdi>") + "</p>").join("");
}

export function normalize(s, lang) {
  let x = (s || "").trim().replace(/[.,!?¿¡;:"“”„«»'’؟،؛]/g, "").replace(/\s+/g, " ");
  if (lang === "fa") {
    // Arabic → Persian letters, drop short-vowel marks and tatweel, ignore half-spaces/spaces between word parts
    x = x.replace(/ي/g, "ی").replace(/ى/g, "ی").replace(/ك/g, "ک").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[\u200c\s]/g, "");
    return x;
  }
  x = lang === "tr" ? x.toLocaleLowerCase("tr") : lang === "de" ? x.toLocaleLowerCase("de") : x.toLowerCase();
  // German typed on a keyboard without umlauts: ä = ae, ö = oe, ü = ue, ß = ss
  if (lang === "de") x = x.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  return x;
}
