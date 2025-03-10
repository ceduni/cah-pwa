// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                console.log('Service worker ready! Scope: ', registration.scope);
                registration.update();
            })
            .catch((error) => {
                console.log('Service Worker registration failed: ', error);
            });
    });

    // Check user internet status (online/offline)
    function updateOnlineStatus(event) {
        if (!navigator.onLine) {
            alert('No internet access! Please check your connection.');
        }
    }

    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}
