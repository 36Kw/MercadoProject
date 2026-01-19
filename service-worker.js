const CACHE_NAME = "mercado-offline-v1";
const URLS = [
  "/MercadoProject/",
  "/MercadoProject/index.html",
  "/MercadoProject/manifest.json",
  "/MercadoProject/icon-192.png",
  "/MercadoProject/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
