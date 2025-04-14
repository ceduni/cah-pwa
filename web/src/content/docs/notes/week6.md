---
title: Semaine 6
description: Utilisation des Services workers et communication avec une API
---

Dans le développement de Progressive Web Apps (PWA), les Service Workers jouent un rôle central. Ils agissent comme un intermédiaire entre l'application web et le réseau, permettant une gestion fine des ressources, même lorsque l'utilisateur est hors ligne.

## Qu'est-ce qu'un Service Worker ?
Un Service Worker est un script JavaScript qui s'exécute en arrière-plan, séparément de la page web. Contrairement aux scripts classiques, il ne manipule pas directement le DOM, mais il intercepte les requêtes réseau, gère le cache, et peut recevoir des push notifications ou synchroniser des données en arrière-plan.

###  Utilités principales des Service Workers :

1. Fonctionnement hors-ligne (Offline-first): Permet de mettre en cache les ressources essentielles (HTML, CSS, JS, images, etc.) afin que l’application reste utilisable sans connexion Internet.
2. Amélioration des performances:En servant les ressources directement depuis le cache, l'application devient plus rapide et plus réactive, surtout sur les connexions lentes.
3. Push Notifications:Les Service Workers peuvent recevoir des notifications "push" du serveur, même lorsque l’application n’est pas ouverte.
4. Synchronisation en arrière-plan (Background Sync): Permet de retenter automatiquement l’envoi de données au serveur lorsque la connexion revient (utile pour les formulaires, messages, etc.).
5. Contrôle total sur les requêtes réseau: Le Service Worker peut intercepter, modifier ou rediriger les requêtes selon des règles personnalisées.

### Exemple de Service Worker

```js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mon-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```


## Types d'évènements

Les Service Workers utilisent plusieurs types d’événements pour interagir avec le navigateur et contrôler le comportement du cache, des requêtes réseau ou d'autres fonctionnalités en arrière-plan.

```sh
    ┌────────────┐         ┌─────────────┐         ┌────────────┐
    │  install   │ ──────▶ │  activate   │ ──────▶ │  fetch /   │
    │            │         │             │         │  push /    │
    │ (pré-caching)        │ (cleaning)  │         │  sync ...  │
    └────────────┘         └─────────────┘         └────────────┘
         ▲
         │
         └──── (triggered when a new SW is registered)

              🗨️ message (optionnel, entre SW et client)
```

###  `1. install`

📌 Quand :
Le Service Worker est installé pour la première fois (ou mis à jour).

🎯 Utilité :
- Pré-cacher des ressources essentielles (HTML, CSS, JS, images…).
- Préparer l’environnement avant activation.

```js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js'
      ]);
    })
  );
});
```

### `2. activate`

📌 Quand :
Le Service Worker prend le contrôle après l'installation.

🎯 Utilité :
- Nettoyer les anciens caches.
- Prendre le contrôle des pages ouvertes.

```js
self.addEventListener('activate', event => {
  const allowedCaches = ['static-v1'];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (!allowedCaches.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
```

### `3. fetch`

📌 Quand :
Une ressource (fichier, API, etc.) est demandée par la page.

🎯 Utilité :
- Intercepter les requêtes réseau.
- Servir une réponse depuis le cache ou en ligne.
- Implémenter une stratégie de cache (cache-first, network-first, etc.)

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

### `4. Push`

📌 Quand :
Une notification push est reçue (même si la PWA n’est pas ouverte).

🎯 Utilité :
- Afficher une notification à l’utilisateur.
- Gérer des événements déclenchés depuis le serveur

```js
self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icon.png'
  });
});
```

### `5. Sync`

📌 Quand : Le navigateur retrouve la connexion Internet après une perte de réseau.

🎯 Utilité :
- Rejouer des actions en attente (ex : envoyer un message).
- Synchronisation en arrière-plan.

#### Exemple

```js
self.addEventListener('sync', event => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Exécute une fonction pour envoyer les messages stockés
      envoyerMessagesHorsLigne()
    );
  }
});
```

## Mise en cache d’une réponse d’API

Imaginons que ton application web interroge une API située à https://api.example.com/data. Tu veux :

1. En ligne : récupérer les données de l’API et les mettre à jour dans le cache.
2. Hors ligne : servir les données mises en cache la dernière fois.


#### Service worker - Exemple de code

```js
const CACHE_NAME = 'api-cache-v1';
const API_URL = 'https://api.example.com/data';

self.addEventListener('install', event => {
  self.skipWaiting(); // active le SW immédiatement après l'installation
});

self.addEventListener('fetch', event => {
  if (event.request.url === API_URL) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone la réponse pour la mettre en cache
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // En cas d'échec réseau, retourner la version en cache
          return caches.match(event.request);
        })
    );
  }
});
```

## Stratégie pour la gestion du cache

Il existe plusieurs stratégies de gestion du cache avec les Service Workers.

### Cache First (Cache d'abord)

- Cherche la réponse dans le cache en priorité.
- Si ce n’est pas en cache, fait une requête réseau.
- Idéal pour les fichiers statiques (HTML, CSS, JS, images…).

#### Exemple

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
```

### Network First (Réseau d’abord)

- Tente d’abord une requête réseau.
- En cas d’échec (hors-ligne), utilise la version en cache.
- Bon choix pour des données dynamiques (API, contenus récents...).

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        caches.open('dynamic-cache').then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
```

### Cache Only

- Utilise uniquement le cache.
- Ne tente jamais d’accéder au réseau.
- Idéal dans des cas très spécifiques (comme une version offline stricte).

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
  );
});
```

### Network Only

- Ignore complètement le cache.
- Utilise toujours le réseau.
- Utile pour des données sensible ou en temps réel (paiement, auth…).

```js
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
```

### Stale-While-Revalidate

- D'abord, on sert la version en cache (rapide).
- Ensuite, on lance en arrière-plan une requête réseau pour obtenir la version à jour.
- Une fois cette nouvelle version reçue, on met à jour le cache.

L'utilisateur voit du contenu immédiatement, et le cache se met à jour pour la prochaine fois.


#### Exemple

```js
const CACHE_NAME = 'api-cache-v2';
const API_URL = 'https://api.example.com/data';

self.addEventListener('fetch', event => {
  if (event.request.url === API_URL) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => {
              // En cas d'échec réseau, on ne fait rien, on garde ce qu’on a
            });

          // Retourne la réponse en cache immédiatement si dispo, sinon attend le réseau
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});
```