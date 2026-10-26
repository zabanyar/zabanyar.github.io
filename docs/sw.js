// Zabanyar service worker: app shell precache + cache-first content (lessons, audio, pictures).
const VERSION = "zy-shell-2026-10-26a";
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
  const isContent = /\/(audio|img)\//.test(url.pathname);   // file names are content hashes / fixed pictures
  if (isContent) {
    // cache-first: audio and pictures never change for a given name
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CONTENT).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  // app shell + lesson data: network first (fresh when online), cache when offline
  const isData = url.pathname.includes("/data/");
  const net = fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(isData ? CONTENT : VERSION).then(c => c.put(req, copy)); }
    return res;
  });
  // on slow connections, answer from cache after 4 s (the network copy still refreshes the cache)
  const slow = new Promise(r => setTimeout(r, 4000)).then(() => caches.match(req, { ignoreSearch: true })).then(hit => hit || net);
  e.respondWith(Promise.race([net, slow]).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
