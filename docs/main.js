// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/cah-pwa/docs/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope: ', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed: ', error);
            });
    });
}
