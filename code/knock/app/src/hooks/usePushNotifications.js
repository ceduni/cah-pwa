import { useEffect } from 'react';
import { subscribe } from '../services/pushService';
import { VAPID_PUBLIC_KEY } from './../utils/global.js';
import { canSubscribe, askPermission } from './../utils/service-worker.js';


export default function usePushNotifications() {
  useEffect(() => {
    if (!canSubscribe()) {
      console.error('Push notifications are not supported in this browser.');
      return;
    }

    if (Notification.permission === 'granted') { // Permision déjà accordée
      subscribe(VAPID_PUBLIC_KEY);
    } else if (Notification.permission === 'default') { // Permission non encore demandée
      askPermission(
        () => subscribe(VAPID_PUBLIC_KEY),
        () => console.info("Permission de notification non accordée."));
    } else { // Permission refusée
      console.info("L'utilisateur a refusé les notifications.");
    }
  }, []);
}
