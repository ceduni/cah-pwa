---
title: Semaine 5
description: Structure d'une application web progressive
banner:
  content: |
    Remise du projet 1: Mardi 8 avril!
---

### Architecture

L'architecture d'une PWA repose sur une combinaison de technologies Frontend (HTML, CSS, JavaScript, frameworks), de services en arrière-plan (Service Workers, API), et d'optimisations côté client. Ensemble, ces éléments offrent une expérience utilisateur fluide, rapide et résiliente, tout en assurant une accessibilité optimale.

#### Concepts clés

- **Service Workers**: Scripts JavaScript exécutés en arrière-plan pour gérer la mise en cache, les notifications push et l'interception des requêtes réseau. Ils permettent ainsi aux PWAs de fonctionner hors ligne ou avec une connexion faible et de réagir rapidement.
- **Manifeste Web App (`manifest.json`)**: Fichier JSON contenant les métadonnées de l’application (nom, icônes, thème), permettant à la PWA d’être ajoutée à l'écran d'accueil et de se comporter comme une application native au lancement.
- **Cache et Mise en Cache (Cache API)**: Stocke localement les ressources de l’application (HTML, CSS, images, scripts) pour permettre leur utilisation hors ligne et garantir une expérience fluide même sans connexion.

#### Concepts secondaires

- **HTTPS**: Les PWAs doivent être servies via HTTPS pour garantir la sécurité des données échangées, en particulier pour le bon fonctionnement des Service Workers.
- **Notification Push (Push API)**: Permet d'envoyer des notifications même lorsque l’application est fermée, améliorant l’engagement utilisateur.
- **API de Stockage Local (LocalStorage / IndexedDB)**:  Stocke des données (ex: préférences) localement sur l'appareil pour maintenir l’état de l’application, même hors ligne. Elles complètent les Service Workers et la Cache API en assurant la persistance des données même sans connexion.

## Manifest.json

Le fichier manifest.json est un élément clé d'une Progressive Web App (PWA). Il permet de définir les métadonnées de l'application (comme le nom, les icônes, la couleur du thème, etc.), ce qui permet au navigateur de l'installer sur un appareil et de l'exécuter de manière autonome, comme une application native.

Voici un exemple de ce à quoi pourrait ressembler un fichier manifest.json pour une PWA, ainsi que l'explication des différentes propriétés :

```json
{
  "name": "Mon Application PWA",
  "short_name": "MonApp",
  "description": "Une application PWA pour l'apprentissage des PWA",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4CAF50",
  "icons": [
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "scope": "/",
  "orientation": "portrait",
  "lang": "fr"
}
```

### Champs principaux

- `name` : Nom complet de l'application.
- `short_name` : Nom abrégé de l'application.
- `start_url` : URL de démarrage de l'application.
- `display` : Mode d'affichage de l'application.
- `background_color` : Couleur de fond pendant le chargement.
- `theme_color` : Couleur du thème de l'application.
- `icons` : Liste des icônes de l'application.
- `scope` : Domaine de l'application (URL de base).
- `orientation` : Orientation préférée de l'application.
- `lang` : Langue de l'application.

<!-- ### Role

1. Ajouter l'application à l'écran d'accueil
Même sans service worker, le fichier manifest.json permet à l'application d'être ajoutée à l'écran d'accueil d'un appareil mobile ou à l'écran principal d'un ordinateur de bureau, à condition que les autres critères de la PWA soient respectés. Cela signifie que tu peux avoir une expérience proche d'une application native, avec une icône et une ouverture en plein écran (selon la configuration).

2. Personnalisation de l'interface utilisateur
Le fichier manifest.json permet de personnaliser l'apparence de l'application lorsqu'elle est lancée depuis l'écran d'accueil, en définissant des éléments comme :

Le nom de l'application (name, short_name)

L'icône de l'application (icons)

Le couleur de fond pendant le chargement (background_color)

La couleur du thème pour la barre de statut (theme_color)

Le mode d'affichage (par exemple, standalone ou fullscreen).

Ces éléments contribuent à améliorer l'apparence et l'intégration de l'application dans l'écosystème de l'appareil. -->

### Limitations sans Service Worker :

Même avec un fichier manifest.json bien configuré, sans service worker, plusieurs fonctionnalités essentielles des PWAs seront absentes :

- Fonctionnement hors ligne : Le service worker gère le cache et permet à l'application de fonctionner sans connexion.
- Mises à jour en arrière-plan : Le service worker permet de mettre à jour le contenu de l'application en arrière-plan sans que l'utilisateur ait besoin de rafraîchir.
- Notifications push : Le service worker est nécessaire pour gérer les notifications push, permettant d'envoyer des notifications aux utilisateurs même quand l'application est fermée.