const CACHE_VERSION = 'v1';
const CACHE_NAME = `knock-cache-${CACHE_VERSION}`;
const STATIC_CACHE = `knock-static-${CACHE_VERSION}`;

// Assets to cache - Vite-specific paths
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/vite.svg',
    // Add any other static assets your app needs
];

// Install event - cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then(cache => {
                return cache.addAll(urlsToCache);
            }),
            self.skipWaiting()
        ])
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name.startsWith('knock-'))
                    .filter(name => name !== STATIC_CACHE && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('push', event => {
    const data = event.data.json();
    console.log('Push event received:', data);
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/icons/icon-192x192.svg',
    });
});
