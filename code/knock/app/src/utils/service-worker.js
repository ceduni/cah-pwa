export function registerServiceWorker() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('Service Worker registered:', reg);
        });
    }
}

export function canSubscribe() {
    return 'serviceWorker' in navigator && 'PushManager' in window;
}

export function askPermission(grantedCb, refusedCb) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            grantedCb();
        } else {
            refusedCb();
        }
    }).catch(err => {
        console.error("Erreur lors de la demande de permission de notification:", err);
    });
}