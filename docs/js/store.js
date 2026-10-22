// Session, progress, spaced repetition and sync with the family server.
const LS_USER = "zy:user";
const API_BASES = (() => {
  const h = location.hostname;
  const own = (h.endsWith("zabanyar.dpdns.org") || h.endsWith("workers.dev") || h === "localhost" || h === "127.0.0.1") ? [""] : [];
  return [...own, "https://zabanyar.dpdns.org", "https://learn.zabanyar.workers.dev"].filter((v, i, a) => a.indexOf(v) === i);
})();
let apiBase = null;

function lsGet(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

export function today() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }

async function api(path, body) {
  // Try the last working server first; if it doesn't answer quickly, ask all servers at once and take the first answer.
  const one = async (b, ms) => {
    const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), ms);
    try {
      const r = await fetch(b + "/api/" + path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal: ctl.signal });
      const j = await r.json().catch(() => null);
      // only a real Zabanyar answer counts (filter pages, proxies and static hosts don't send {ok: …})
      if (!j || typeof j.ok !== "boolean") throw new Error("not the zabanyar api");
      apiBase = b;
      return { status: r.status, ...j };
    } finally { clearTimeout(tm); }
  };
  if (apiBase !== null) { try { return await one(apiBase, 4000); } catch {} }
  try { return await Promise.any(API_BASES.map(b => one(b, 6000))); }
  catch { throw new Error("offline"); }
}

// ---------- session ----------
export function currentUser() { return lsGet(LS_USER, null); }
export async function login(name) {
  const clean = name.trim();
  if (!clean) return { ok: false };
  try {
    const r = await api("login", { name: clean });
    if (r.ok) { lsSet(LS_USER, r.user); return { ok: true, user: r.user }; }
    return { ok: false, unknown: true };
  } catch {
    const user = { id: clean.toLowerCase(), name: clean, unverified: true };
    lsSet(LS_USER, user);
    return { ok: true, user, offline: true };
  }
}
export function logout() { try { localStorage.removeItem(LS_USER); } catch {} }

// ---------- progress ----------
function key(u) { return "zy:p:" + (u || currentUser()?.id || "guest"); }
export function emptyProgress() { return { v: 1, days: {}, lessons: {}, srs: {}, updatedAt: 0 }; }
export function progress() { return lsGet(key(), emptyProgress()); }
function save(p) { p.updatedAt = Date.now(); lsSet(key(), p); scheduleSync(); }

export function mergeProgress(a, b) {
  a = a || emptyProgress(); b = b || emptyProgress();
  const out = emptyProgress();
  for (const d of new Set([...Object.keys(a.days || {}), ...Object.keys(b.days || {})])) out.days[d] = Math.max(a.days?.[d] || 0, b.days?.[d] || 0);
  for (const k of new Set([...Object.keys(a.lessons || {}), ...Object.keys(b.lessons || {})])) {
    const x = a.lessons?.[k] || {}, y = b.lessons?.[k] || {};
    out.lessons[k] = { best: Math.max(x.best || 0, y.best || 0), n: Math.max(x.n || 0, y.n || 0), at: Math.max(x.at || 0, y.at || 0) };
  }
  for (const k of new Set([...Object.keys(a.srs || {}), ...Object.keys(b.srs || {})])) {
    const x = a.srs?.[k], y = b.srs?.[k];
    out.srs[k] = !x ? y : !y ? x : ((x.at || 0) >= (y.at || 0) ? x : y);
  }
  out.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
  return out;
}

export function addXp(n) { const p = progress(); const d = today(); p.days[d] = (p.days[d] || 0) + n; save(p); }
export function totalXp(p = progress()) { return Object.values(p.days).reduce((s, v) => s + v, 0); }
export function streak(p = progress()) {
  let n = 0; const d = new Date();
  if (!p.days[today()]) d.setDate(d.getDate() - 1);   // today not yet practised: streak still alive from yesterday
  for (;;) {
    const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (p.days[k]) { n++; d.setDate(d.getDate() - 1); } else break;
  }
  return n;
}
export function lessonState(id) { return progress().lessons[id] || null; }
export function finishLesson(id, score) {
  const p = progress(); const x = p.lessons[id] || { best: 0, n: 0 };
  p.lessons[id] = { best: Math.max(x.best, score), n: (x.n || 0) + 1, at: Date.now() };
  save(p);
}

// ---------- spaced repetition (Leitner boxes) ----------
const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
export function srsSeen(id) {
  const p = progress();
  if (!p.srs[id]) { p.srs[id] = { b: 1, due: Date.now() + 864e5, at: Date.now() }; save(p); }
}
export function srsAnswer(id, ok) {
  const p = progress(); const x = p.srs[id] || { b: 1 };
  const b = ok ? Math.min((x.b || 1) + 1, BOX_DAYS.length - 1) : 1;
  p.srs[id] = { b, due: Date.now() + BOX_DAYS[b] * 864e5, at: Date.now() };
  save(p);
}
export function srsDue(prefix) {
  const now = Date.now(); const p = progress();
  return Object.entries(p.srs).filter(([k, v]) => k.startsWith(prefix) && v.due <= now).map(([k]) => k);
}
export function srsAll(prefix) { return Object.keys(progress().srs).filter(k => k.startsWith(prefix)); }

// ---------- sync ----------
let syncTimer = null; let syncListeners = [];
export function onSync(fn) { syncListeners.push(fn); }
function emit(s) { syncListeners.forEach(f => { try { f(s); } catch {} }); }
export function scheduleSync(ms = 2500) { clearTimeout(syncTimer); syncTimer = setTimeout(sync, ms); }
export async function sync() {
  const u = currentUser(); if (!u) return;
  try {
    const r = await api("sync", { user: u.id, data: progress() });
    if (r.status === 403) { emit("unknown"); return; }
    if (r.ok && r.data) {
      const before = progress();
      const merged = mergeProgress(before, r.data);
      lsSet(key(), merged);
      if (u.unverified && r.user) lsSet(LS_USER, r.user);
      const changed = JSON.stringify({ ...merged, updatedAt: 0 }) !== JSON.stringify({ ...mergeProgress(before, null), updatedAt: 0 });
      emit(changed ? "changed" : "ok");
    }
  } catch { emit("offline"); }
}
addEventListener("online", () => scheduleSync(500));
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") sync(); });
