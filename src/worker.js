// Zabanyar API worker: name-only family login + progress sync. Everything else is served from ./docs (static assets).
// The family name list is NOT in the repository: it lives in the Worker secret USERS (Cloudflare dashboard →
// Workers & Pages → learn → Settings → Variables and secrets), as JSON: [{"id":"maman","name":"Maman","aliases":["مامان"]}, …]
let cache = { raw: null, list: [] };
function usersFrom(env) {
  const raw = env.USERS || "[]";
  if (raw !== cache.raw) { try { cache = { raw, list: JSON.parse(raw) }; } catch { cache = { raw, list: [] }; } }
  return cache.list;
}

const ALLOWED_ORIGINS = ["https://zabanyar.github.io", "https://zabanyar.dpdns.org", "https://learn.zabanyar.workers.dev", "http://localhost:8788"];

function norm(s) { return String(s || "").trim().toLowerCase().normalize("NFC").replace(/\s+/g, " "); }
function findUser(env, name) {
  const n = norm(name);
  return usersFrom(env).find(u => norm(u.id) === n || norm(u.name) === n || (u.aliases || []).some(a => norm(a) === n)) || null;
}
function cors(req) {
  const o = req.headers.get("origin");
  return ALLOWED_ORIGINS.includes(o) ? { "access-control-allow-origin": o, "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type", "access-control-max-age": "86400", vary: "origin" } : {};
}
function json(req, obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...cors(req) } });
}

function emptyProgress() { return { v: 1, days: {}, lessons: {}, srs: {}, updatedAt: 0 }; }
function merge(a, b) {
  a = a || emptyProgress(); b = b || emptyProgress();
  const out = emptyProgress();
  for (const d of new Set([...Object.keys(a.days || {}), ...Object.keys(b.days || {})])) out.days[d] = Math.max(+a.days?.[d] || 0, +b.days?.[d] || 0);
  for (const k of new Set([...Object.keys(a.lessons || {}), ...Object.keys(b.lessons || {})])) {
    const x = a.lessons?.[k] || {}, y = b.lessons?.[k] || {};
    out.lessons[k] = { best: Math.max(+x.best || 0, +y.best || 0), n: Math.max(+x.n || 0, +y.n || 0), at: Math.max(+x.at || 0, +y.at || 0) };
  }
  for (const k of new Set([...Object.keys(a.srs || {}), ...Object.keys(b.srs || {})])) {
    const x = a.srs?.[k], y = b.srs?.[k];
    out.srs[k] = !x ? y : !y ? x : ((+x.at || 0) >= (+y.at || 0) ? x : y);
  }
  out.updatedAt = Math.max(+a.updatedAt || 0, +b.updatedAt || 0);
  return out;
}

async function api(req, env, path) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });
  if (req.method !== "POST") return json(req, { ok: false, error: "method" }, 405);
  let body = {};
  try { body = await req.json(); } catch {}
  if (path === "ping") return json(req, { ok: true, t: Date.now() });
  if (path === "login") {
    const u = findUser(env, body.name);
    if (!u) return json(req, { ok: false, error: "unknown" }, 403);
    return json(req, { ok: true, user: { id: u.id, name: u.name } });
  }
  if (path === "sync") {
    const u = findUser(env, body.user);
    if (!u) return json(req, { ok: false, error: "unknown" }, 403);
    if (!env.PROGRESS) return json(req, { ok: false, error: "no storage" }, 503);
    const raw = JSON.stringify(body.data || {});
    if (raw.length > 900000) return json(req, { ok: false, error: "too big" }, 413);
    const keyName = "p:" + u.id;
    const stored = await env.PROGRESS.get(keyName, "json");
    const merged = merge(stored, body.data);
    if (JSON.stringify(merged) !== JSON.stringify(stored)) await env.PROGRESS.put(keyName, JSON.stringify(merged));
    return json(req, { ok: true, data: merged, user: { id: u.id, name: u.name } });
  }
  return json(req, { ok: false, error: "not found" }, 404);
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) return api(req, env, url.pathname.slice(5));
    return env.ASSETS.fetch(req);
  },
};
