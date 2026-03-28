const CACHE_NAME = 'thalappanth-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './game/loading.html',
  './game/assets/tap.png.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
