const CACHE_NAME = "vitre-cache-v1";
const urlsToCache = [
  "index.html",
  "resume.html",
  "manifest.json",
  "logo.png",
  "icon-192.png",
  "icon-512.png",
  "favicon.ico"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
