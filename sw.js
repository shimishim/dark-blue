const CACHE_NAME = 'site-cache-v1';
const PRECACHE = [
  '.',
  'index.html',
  'manifest.json',
  'images/icon-192.svg',
  'images/icon-512.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request, { cache: "no-store" })
  );
});