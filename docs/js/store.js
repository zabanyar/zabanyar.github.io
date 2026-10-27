// Session, progress, spaced repetition and sync with the family server.
// Everything is kept PER PERSON (by their family id), never per device: several people can share one phone,
// and one person can use several devices. Each person's progress lives under its own key and is synced under their id.
const LS_USER = "zy:user";        // who is using the app right now
const LS_KNOWN = "zy:known";      // names that worked on this device: normalised typed name -> {id, name}
const LS_RECENT = "zy:recent";    // people who used this device: [{id, name, at}]
const LS_DIRTY = "zy:dirty";      // ids whose progress has changes not yet on the server
const API_BASES = (() => {
  const h = location.hostname;
  const own = (h.endsWith("zabanyar.dpdns.org") || h.endsWith("workers.dev") || h === "localhost" || h === "127.0.0.1") ? [""] : [];
  return [...own, "https://zabanyar.dpdns.org", "https://learn.zabanyar.workers.dev"].filter((v, i, a) => a.indexOf(v) === i);
})();
let apiBase = null;

function lsGet(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
function lsDel(k) { try { localStorage.removeItem(k); } catch {} }
const norm = s => String(s || "").trim().toLowerCase().normalize("NFC").replace(/\s+/g, " ");

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

// ---------- people on this device ----------
const pkey = uid => "zy:p:" + uid;
function dirty() { return lsGet(LS_DIRTY, []); }
function setDirty(uid, on) {
  const d = new Set(dirty()); on ? d.add(uid) : d.delete(uid); lsSet(LS_DIRTY, [...d]);
}
function remember(typed, user) {
  const known = lsGet(LS_KNOWN, {});
  known[norm(typed)] = { id: user.id, name: user.name };
  known[norm(user.id)] = { id: user.id, name: user.name };
  lsSet(LS_KNOWN, known);
  const rec = lsGet(LS_RECENT, []).filter(r => r.id !== user.id);
  rec.unshift({ id: user.id, name: user.name, at: Date.now() });
  lsSet(LS_RECENT, rec.slice(0, 12));
}
function forget(uid) {
  lsSet(LS_RECENT, lsGet(LS_RECENT, []).filter(r => r.id !== uid));
  const known = lsGet(LS_KNOWN, {});
  for (const k of Object.keys(known)) if (known[k].id === uid) delete known[k];
  lsSet(LS_KNOWN, known);
}
/** people who have used the app on this device, most recent first */
export function recentUsers() { return lsGet(LS_RECENT, []); }

// The server answered with a person's real id (e.g. "maman" for "مامان" typed while offline): move any progress
// that was kept under the provisional id over to the real one.
function adopt(localId, user) {
  if (localId && localId !== user.id) {
    const mine = lsGet(pkey(localId), null);
    if (mine) { lsSet(pkey(user.id), mergeProgress(lsGet(pkey(user.id), null), mine)); lsDel(pkey(localId)); }
    if (dirty().includes(localId)) { setDirty(localId, false); setDirty(user.id, true); }
    lsSet(LS_RECENT, lsGet(LS_RECENT, []).filter(r => r.id !== localId));
  }
  const cur = currentUser();
  if (cur && (cur.id === localId || cur.id === user.id) && (cur.unverified || cur.id !== user.id || cur.name !== user.name)) lsSet(LS_USER, { id: user.id, name: user.name });
}

// ---------- session ----------
export function currentUser() { return lsGet(LS_USER, null); }
export async function login(name) {
  const clean = name.trim();
  if (!clean) return { ok: false };
  try {
    const r = await api("login", { name: clean });
    if (r.ok) {
      const user = { id: r.user.id, name: r.user.name };
      remember(clean, user); lsSet(LS_USER, user);
      return { ok: true, user };
    }
    return { ok: false, unknown: true };
  } catch {
    // no internet: a name already used on this device is recognised; a new one is accepted and checked at the next sync
    const k = lsGet(LS_KNOWN, {})[norm(clean)];
    const user = k ? { id: k.id, name: k.name } : { id: norm(clean), name: clean, unverified: true };
    lsSet(LS_USER, user);
    if (k) remember(clean, user);
    return { ok: true, user, offline: true };
  }
}
/** leave the app for the next person; their unsent progress stays queued and is uploaded in the background */
export function logout() {
  const u = currentUser();
  clearTimeout(syncTimer);
  lsDel(LS_USER);
  if (u && dirty().includes(u.id)) syncAll();
}

// ---------- progress ----------
export function emptyProgress() { return { v: 1, days: {}, lessons: {}, srs: {}, prefs: {}, updatedAt: 0 }; }
function load(uid) { const p = lsGet(pkey(uid), null) || emptyProgress(); p.prefs = p.prefs || {}; return p; }
export function progress() { const u = currentUser(); return u ? load(u.id) : emptyProgress(); }
function save(p) {
  const u = currentUser(); if (!u) return;
  p.updatedAt = Date.now(); lsSet(pkey(u.id), p); setDirty(u.id, true); scheduleSync();
}

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
  for (const k of new Set([...Object.keys(a.prefs || {}), ...Object.keys(b.prefs || {})])) {
    const x = a.prefs?.[k], y = b.prefs?.[k];
    out.prefs[k] = !x ? y : !y ? x : ((x.at || 0) >= (y.at || 0) ? x : y);
  }
  out.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
  return out;
}

// personal settings (e.g. the language of the home screen) travel with the person, too
export function pref(name, d) { return progress().prefs?.[name]?.v ?? d; }
export function setPref(name, v) {
  if (!currentUser() || JSON.stringify(pref(name)) === JSON.stringify(v)) return;
  const p = progress(); p.prefs[name] = { v, at: Date.now() }; save(p);
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
const running = new Map();   // uid -> promise (one sync per person at a time)
export function onSync(fn) { syncListeners.push(fn); }
function emit(s) { syncListeners.forEach(f => { try { f(s); } catch {} }); }
export function scheduleSync(ms = 2500) { clearTimeout(syncTimer); syncTimer = setTimeout(() => syncAll(), ms); }

// Sync ONE person, identified by id. The id is fixed for the whole round trip, so switching to another person
// while the answer is on its way can never mix their progress.
function syncUser(uid) {
  if (running.has(uid)) return running.get(uid);
  const job = (async () => {
    const sent = load(uid);
    let r;
    try { r = await api("sync", { user: uid, data: sent }); } catch { return "offline"; }
    if (r.status === 403) {
      setDirty(uid, false); forget(uid);
      return currentUser()?.id === uid ? "unknown" : "ok";
    }
    if (!r.ok || !r.data) return "offline";
    const realId = r.user?.id || uid;
    const now = load(uid);                                    // may have grown while we waited
    const merged = mergeProgress(now, r.data);
    lsSet(pkey(uid), merged);
    if ((now.updatedAt || 0) <= (sent.updatedAt || 0)) setDirty(uid, false);
    if (r.user) {
      const cur = currentUser();
      if (cur && cur.id === uid && (cur.unverified || realId !== uid)) remember(cur.name, r.user);   // offline login confirmed
      adopt(uid, r.user);
    }
    const strip = p => JSON.stringify({ ...p, updatedAt: 0 });
    const changed = strip(merged) !== strip(mergeProgress(now, null));
    const isCurrent = [uid, realId].includes(currentUser()?.id);
    return isCurrent && changed ? "changed" : "ok";
  })().finally(() => running.delete(uid));
  running.set(uid, job);
  return job;
}

/** fetch the current person's latest progress and upload anyone's pending changes made on this device */
export async function syncAll() {
  const cur = currentUser();
  const ids = [...new Set([...(cur ? [cur.id] : []), ...dirty()])];
  if (!ids.length) return "ok";
  const res = await Promise.all(ids.map(syncUser));
  const mine = cur ? res[0] : "ok";
  const s = res.includes("unknown") ? "unknown" : res.every(x => x === "offline") ? "offline" : mine;
  emit(s);
  return s;
}
export const sync = syncAll;

let lastPull = 0;
addEventListener("online", () => scheduleSync(500));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") { clearTimeout(syncTimer); syncAll(); }
  // back to the app (perhaps after practising on another device): fetch the latest, at most twice a minute
  else if (Date.now() - lastPull > 30000) { lastPull = Date.now(); syncAll(); }
});
