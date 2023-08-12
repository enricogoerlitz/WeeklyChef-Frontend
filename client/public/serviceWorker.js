// const CACHE_NAME = "weeklychef-cache-v1";
// const DB_NAME = "weeklychef";

// const INDEX_HTML = "/index.html";
// const FAVICON_ICO = "/favicon.ico"
// const MANIFEST = "/manifest.json";
// const MANIFEST_ASSET = "/asset-manifest.json";

// const CACHE_NETWORK_FIRST = [
//     INDEX_HTML,
// ]
// const CACHE_CACHE_FIRST = [
//     FAVICON_ICO,
//     MANIFEST,
//     MANIFEST_ASSET,
// ]
// const URLS_TO_CACHE = [
//     ...CACHE_NETWORK_FIRST,
//     ...CACHE_CACHE_FIRST,
// ]

// // install serviceworker
// self.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => cache.addAll(URLS_TO_CACHE))
//     );
// })

// // serviceworker listen for requests
// self.addEventListener("fetch", (event) => {
//     const requestURL = new URL(event.request.url);

//     // network first for highly changing ressources.
//     if (CACHE_NETWORK_FIRST.includes(requestURL.pathname)) {
//         event.respondWith(
//             fetch(event.request)
//                 .then((response) => {
//                     const responseClone = response.clone();
//                     caches.open(CACHE_NAME).then((cache) => {
//                         cache.put(event.request, responseClone);
//                     });
//                     return response;
//                 })
//                 .catch(() => {
//                     return caches.match(event.request);
//                 })
//         );
//     } else {
//         // cache first for just media ressources.
//         event.respondWith(
//             caches.match(event.request)
//                 .then((cachedResponse) => cachedResponse || fetch(event.request)
//                     .then((response) => {
//                         const responseClone = response.clone();
//                         caches.open(CACHE_NAME).then((cache) => {
//                             cache.put(event.request, responseClone);
//                         });
//                         return response;
//                     })
//                     .catch(() => {
//                         // here return favicon or the index.html SPA
//                         if (requestURL.pathname === "/favicon.ico") {
//                             return caches.match("/favicon.ico");
//                         }
//                         return caches.match(INDEX_HTML);
//                     })
//                 )
//         );
//     }
// });


// // activation serviceworker
// self.addEventListener("activate", (event) => {
//     // cache
//     const cacheWhitheList = [CACHE_NAME]
//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhitheList.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
//     )
// });

// self.addEventListener("stop", () => {});
