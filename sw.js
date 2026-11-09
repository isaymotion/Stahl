/* Offline support: network first, cached copy when offline. Bump VERSION on every publish (it matches APP_META.version).
   Cache names MUST start with this app's PREFIX: all isaymotion apps share one origin and one cache storage,
   so activate deletes only this app's own old caches. */
const PREFIX = 'stahl-companion-';
const VERSION = PREFIX + '26.0.0';
const CORE = [
  './', './index.html', './css/app.css', './js/app.js', './js/pdf.js', './js/pdf-fonts.js',
  './data/app-meta.js', './data/changelog.js', './data/hospital.js', './data/strings.js', './data/chapters.js',
  './manifest.webmanifest', './icons/favicon-64.png', './icons/home-brain.png', './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      // Only delete this app's own old caches: other study apps on isaymotion.github.io share this cache storage.
      .then((keys) => Promise.all(keys.filter((k) => k.indexOf(PREFIX) === 0 && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
  );
});
