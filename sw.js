/* Optional GitHub Pages offline shell. No API requests, no analytics. */
var CACHE_NAME = 'algolab-companion-shell-v5';
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(['./', './index.html', './sw.js']);
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (names) {
    return Promise.all(names.map(function (name) {
      if (name.indexOf('algolab-companion-shell-') === 0 && name !== CACHE_NAME) return caches.delete(name);
    }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(function (response) {
    if (response && response.ok) {
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
    }
    return response;
  }).catch(function () { return caches.match(event.request).then(function (found) {
    return found || caches.match('./index.html');
  }); }));
});
