/* MaaCare service worker: caches the app so it works offline after the first visit. */
var CACHE = 'maacare-v1';
var ASSETS = ['./', './index.html', './i18n.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') { return; }
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request).catch(function () { return caches.match('./index.html'); });
    })
  );
});
