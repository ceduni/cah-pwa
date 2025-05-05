---
title: Semaine 9
description: Notifications push et introduction à Firebase
---

Les push notifications permettent à une PWA d'envoyer des notifications à l'utilisateur même lorsque l'application n'est pas active. Cela repose sur :

- Les Service Workers (scripts qui s'exécutent en arrière-plan)
- L’API Push (réception de messages depuis un serveur)
- L’API Notification (affichage de la notification à l’utilisateur)

Pour mettre en œuvre cette fonctionnalité, l’un des outils les plus pratiques et complets est Firebase, une plateforme développée par Google. Firebase propose un ensemble de services backend prêts à l’emploi, dont Firebase Cloud Messaging (FCM), un service permettant d’envoyer facilement des notifications push aux utilisateurs d’une application.

<!-- ## Implémenter les push notifications dans une PWA

Pour démontrer l'usage simple de push notification, nous utiliserons la librairie *web-push*

### Étape 1: Enregistrement du service worker

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('SW registered:', reg))
    .catch(err => console.error('SW registration failed:', err));
}
```

### Étape 2 : Demander la permission de notifications

```js
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  } else {
    console.log('Notification permission denied.');
  }
});
```

### Étape 3 : S’abonner au service push (via PushManager)

Vous avez besoin d’une clé VAPID publique (à générer avec web-push côté serveur).

```js
navigator.serviceWorker.ready.then(registration => {
  const vapidPublicKey = '<VOTRE_CLÉ_VAPID_PUBLIC>';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
  }).then(subscription => {
    // Envoie cette subscription à votre serveur
    console.log('Push Subscription:', JSON.stringify(subscription));
  });
});
```

Fonction utilitaire pour convertir la clé :

```js
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}
```

### Étape 4 : Implémenter la logique dans service-worker.js

```js
self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icons/icon-192.png'
  });
});
```

### Étape 5: Envoyer une notification depuis le serveur (Node.js avec web-push)

```sh
npm install web-push
```

```js
const webPush = require('web-push');

webPush.setVapidDetails(
  'mailto:you@example.com',
  '<VOTRE_CLÉ_VAPID_PUBLIC>',
  '<VOTRE_CLÉ_VAPID_PRIVÉE>'
);

const subscription = {/* l'objet subscription récupéré côté client */};

webPush.sendNotification(subscription, JSON.stringify({
  title: 'Hello!',
  body: 'Ceci est une notification push.'
}));
``` -->