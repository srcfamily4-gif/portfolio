self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('portfolio-store').then((cache) => {
      return cache.addAll([
        '/portfolio/',
        '/portfolio/index.html',
        '/portfolio/manifest.json'
      ]);
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
