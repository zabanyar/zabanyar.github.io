// Zabanyar service worker: app shell precache + cache-first content (lessons, audio, pictures).
const VERSION = "zy-shell-2026-10-21a";
const CONTENT = "zy-content-v1";
const SHELL = [
  "./", "index.html", "app.css", "manifest.webmanifest",
  "js/app.js", "js/ui.js", "js/i18n.js", "js/store.js", "js/lesson.js",
  "fonts/vazirmatn-arabic-wght-normal.woff2", "fonts/vazirmatn-latin-wght-normal.woff2", "fonts/vazirmatn-latin-ext-wght-normal.woff2",
  "icons/icon.svg", "icons/icon-192.png", "data/courses.json",
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("zy-shell-") && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.includes("/api/")) return;
  const isContent = /\/(audio|img|data)\//.test(url.pathname) && !url.pathname.endsWith("courses.json");
  if (isContent) {
    // cache-first: lesson files, audio and pictures never change for a given name
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CONTENT).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  // app shell & course index: network first (fresh when online), cache when offline
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
