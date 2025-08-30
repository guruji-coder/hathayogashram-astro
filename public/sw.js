// const CACHE_NAME = 'hatha-yogashram-v1';
// const urlsToCache = [
//   '/',
//   '/src/styles/global.css',
//   '/hya.jpg',
//   '/yogaschoolpic.jpg',
//   'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Space+Grotesk:wght@400;500;600&family=Quicksand:wght@400;500;600&display=swap'
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         // Return cached version or fetch from network
//         return response || fetch(event.request);
//       }
//     )
//   );
// });
