const CACHE_NAME = 'portfolio-v1';
const ASSETS = [
  '/portfolio/',
  '/portfolio/index.html',
  '/portfolio/manifest.json',
  '/portfolio/icon.png',
  '/portfolio/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

