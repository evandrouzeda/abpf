// This is the "Offline page" service worker

const cacheName = "pwabuilder-page";
const precacheResources = [
    '/',
    'index.html',
    'manifest.json',
    'offline.html',
    'favicon.ico',
    '_css/colors.css',
    '_css/style.css',
    '_js/bundle.js'
];

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
    console.log("[PWA Builder] Install Event processing");
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);
            })
    );
});

/** 
 * Se o fetch for para imagem tenta primeiro pegar do cache, se nao
 * conseguir pega do fetch. Se não for imgagem, faz o fetch normalmente.
 */
self.addEventListener('fetch', function (event) {
    event.respondWith((async () => {
        let response, dofetch = true
        if (event.request.destination === "image")
            response = await new Promise(res => caches.open(cacheName).then(function (cache) {
                cache.match(event.request).then(async function (cacheResponse) {
                    dofetch = typeof cacheResponse === "undefined"
                    res(cacheResponse);
                })
            }))
        if (dofetch)
            response = fetch(event.request).then(async (networkResponse) => {
                return networkResponse
            }).catch(async () => {
                if (event.request.destination === "document")
                    return caches.match('index.html');
                else
                    return caches.match(event.request);
            })
        return response
    })());
});