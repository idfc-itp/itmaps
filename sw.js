const nombreCache = 'itm-v1';
const archivos = [
    './index.html',
    './css/styles.css',
    './css/normalize.css',
    './js/app.js',
    './js/itm.js',
    './js/mixitup.min.js',
    './js/scrollreveal.min.js',
    './img/header.PNG',
    './img/mapa.jpg',
    './manifest.json'
];
self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                cache.addAll(archivos);
            })
    );
})

self.addEventListener('activate', e =>{
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                );
            })
    )
});

// Genera el instalador de la aplicación 
self.addEventListener('fetch', e =>{
    e.respondWith(
        caches
          .match(e.request)
          .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('./index.html')))    
    )
});