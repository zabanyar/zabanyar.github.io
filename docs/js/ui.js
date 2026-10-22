// Small DOM helpers, audio player, pictures.
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

let ctx = { target: "en" };
export function setTarget(lang) { ctx.target = lang; }
// Text in the language being learned: isolated, left-to-right, correct lang for fonts & screen readers.
export function T(text, cls = "") { return h("span", { class: "tgt " + cls, lang: ctx.target, dir: "ltr" }, text); }

export function pic(src, emoji, cls = "pic", size) {
  if (src) return h("img", { class: cls, src, alt: "", loading: "lazy", width: size, height: size, draggable: "false" });
  if (emoji) return h("span", { class: cls, style: { fontSize: (size || 64) * 0.8 + "px", lineHeight: 1 } }, emoji);
  return null;
}

// ---------- audio ----------
const player = new Audio();
player.preload = "auto";
let currentBtn = null;
export function play(src, { rate = 1, btn = null } = {}) {
  return new Promise(resolve => {
    if (!src) return resolve();
    try {
      if (currentBtn) currentBtn.classList.remove("playing");
      player.pause();
      player.src = src;
      player.playbackRate = rate;
      player.preservesPitch = true;
      currentBtn = btn; if (btn) btn.classList.add("playing");
      const done = () => { if (btn) btn.classList.remove("playing"); player.onended = player.onerror = null; resolve(); };
      player.onended = done; player.onerror = done;
      const p = player.play(); if (p && p.catch) p.catch(done);
    } catch { resolve(); }
  });
}
export function stop() { try { player.pause(); } catch {} if (currentBtn) currentBtn.classList.remove("playing"); }
export function sayBtn(src, { small = false, slow = false, label = "▶" } = {}) {
  if (!src) return null;
  const b = h("button", { class: "say" + (small ? " sm" : "") + (slow ? " slow" : ""), "aria-label": slow ? "slow" : "play", type: "button" }, slow ? "🐢" : "🔊");
  b.addEventListener("click", e => { e.stopPropagation(); play(src, { rate: slow ? 0.7 : 1, btn: b }); });
  return b;
}

export function toast(msg, ms = 2600) {
  const t = h("div", { class: "toast", role: "status" }, msg);
  document.body.append(t);
  setTimeout(() => t.remove(), ms);
}

export function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
export function sample(a, n) { return shuffle(a).slice(0, n); }

// tiny markdown: **bold**, \n paragraphs
export function md(text) {
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc(text).split(/\n+/).map(p => "<p>" + p.replace(/\*\*(.+?)\*\*/g, "<b><bdi>$1</bdi></b>") + "</p>").join("");
}

export function normalize(s, lang) {
  let x = (s || "").trim().replace(/[.,!?¿¡;:"“”„«»'’]/g, "").replace(/\s+/g, " ");
  x = lang === "tr" ? x.toLocaleLowerCase("tr") : lang === "de" ? x.toLocaleLowerCase("de") : x.toLowerCase();
  return x;
}
