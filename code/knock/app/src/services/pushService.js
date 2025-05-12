import { POST } from './../utils/api.js';

/**
 * S'abonner aux notifications push
 * @param {string} publicKey 
 */
export async function subscribe(publicKey) {
    const subscription = await getSubscription(publicKey);
    await sendRequest(subscription);
}

/**
 * Envoie la souscription au serveur via une requête POST
 * @param {PushSubscription} subscription 
 */
async function sendRequest(subscription) {
    try {
        const response = await POST('/subscribe', subscription);

        if (!response.ok) {
            console.error(`Échec de l'envoi de la souscription`, response.status);
        }
    } catch (error) {
        console.error(`Erreur lors de l'envoi de la souscription`, error);
    }
}


/**
 * Récupère la souscription push existante ou en crée une nouvelle si elle n'existe pas
 * @param {string} publicKey 
 * @returns 
 */
async function getSubscription(publicKey) {
    const registration = await navigator.serviceWorker.ready;
    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
        subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicKey),
        });
    }

    return subscription;
}

/**
 * // Convertit une clé publique VAPID en format Uint8Array attendu par pushManager.subscribe
 * @param {string} base64String 
 * @returns 
 */
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
}
