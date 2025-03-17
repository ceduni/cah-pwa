---
title: Introduction au PWA et au cadriciel
description: Cette semaine nous faisons une introduction aux applications web progressives (PWA). Nous faisons également la prise en main des outils qui seront utilisés dans le cours pour construire les PWA, principalement Node.js, React et Vite. Finalement, nous faisons un rappel des notions de développement web (coté client).
lastUpdated: 2025-03-15
---


## Introduction au PWA 

Les applications web progressives (PWA) sont des applications web qui offrent une expérience utilisateur similaire à celle des applications natives. Elles sont conçues pour fonctionner sur n'importe quel navigateur web et sur n'importe quel appareil, en utilisant les technologies web standard.

### Avantages

Les principaux avantages des PWAs par rapport aux applications mobiles natives sont:

- Installation sur l'écran d'accueil sans passer par un magasin d'applications
- Fonctionnement hors ligne
- Notifications push
- Compatibilité multiplateforme
- Mise à jour automatique

### Limitations 

Quoique attrayant comme solution pour le développement mobile, les PWAs présentent des limitations qui peuvent s'avérer critique dépendemment de nos objectifs et l'audience visé.

- Accès limité aux fonctionnalités natives
- Compatibilité navigateur
- Moins performantes que les applications natives
- Limitations sur iOS
- Pas accessible via les magasin d'application

### Architecture

L'architecture d'une PWA combine des technologies *Frontend* (HTML, CSS, JavaScript, Framework), des technologies de service en arrière-plan (Service Workers, API) et des optimisations côté client pour offrir une expérience fluide, rapide et résiliente.

#### Concepts clés

- **Service Workers**: Script JavaScript qui s'exécute en arrière-plan, séparément de la page web, et qui permet de gérer des fonctionnalités comme la mise en cache des ressources et la gestion des notifications push.
  - Gère la mise en cache et permet le travail hors-ligne 
  - Peut intercepter les requêtes réseau pour renvoyer des réponses stockées localement en cas de perte de connexion.
- **Manifeste Web App (`manifest.json`)**: Fichier JSON qui contient les métadonnées de l’application comme le nom de l’application, les icônes, le thème et d'autres paramètres qui permettent à l'application d'être ajoutée à l'écran d'accueil de l'utilisateur et d’avoir un comportement similaire à une application native.
  - Permet de configurer l’apparence de la PWA lorsqu’elle est lancée depuis l’écran d’accueil (comme une application native), 
  - Permet de spécifier son mode d’exécution (écran plein, mode portrait, etc.), et d’améliorer l’expérience utilisateur.
- **Cache et Mise en Cache (Cache API)**: La Cache API permet de stocker des ressources de l'application (HTML, CSS, images, scripts, etc.) localement sur le dispositif de l'utilisateur.
  - Permet de servir des ressources depuis le cache, même lorsque l'utilisateur est hors ligne, en
  - Assure que l'application fonctionne sans connexion ou avec une connexion faible.

#### Concepts secondaires

- **HTTPS (Hypertext Transfer Protocol Secure)**: Les PWA doivent **obligatoirement** être servies via HTTPS pour garantir la sécurité des données échangées, en particulier lors de l'utilisation de Service Workers, qui interagissent avec des caches et peuvent modifier les réponses aux requêtes.
- **Notification Push (Push API)**: La Push API permet à une PWA d'envoyer des notifications push aux utilisateurs, même lorsque l'application n'est pas ouverte.
  - La gestion des notifications push, en combinaison avec les Service Workers, permet de maintenir un lien constant avec les utilisateurs et d’envoyer des messages en temps réel.
- **API de Stockage Local (LocalStorage / IndexedDB)**: Ces API permettent de stocker des données sur le dispositif de l'utilisateur, afin de préserver l'état de l'application (par exemple, les préférences de l'utilisateur ou les données temporaires).
  - Peuvent être utilisées en complément des Service Workers et la cache pour gérer des données persistantes.
- **Back-end et API**: Comme pour une application web classique, la PWA peut interagir avec des serveurs back-end via des API REST ou GraphQL pour récupérer ou envoyer des données.
- **Frontend**: Couche de présentation de l'application, qui est directement visible et utilisée par l'utilisateur. C’est cette partie qui gère les interactions avec l'utilisateur et qui reçoit les données traitées par le back-end (via des API, par exemple).
  - L'utilisation d'un framework front-end (ex: React, Vue) peut simplifier énormément le développement d'une PWA.
  - Ces frameworks sont conçus pour optimiser la gestion des composants UI, des routes, de l’état de l’application, des appels API, et bien plus

## Introduction au cadriciel

> **Dans ce cours, nous utiliserons React**

Un cadriciel (**framework**) est un ensemble d'outils, de bibliothèques et de conventions qui facilitent le développement d'applications web. Il fournit une structure de base pour organiser le code, des fonctionnalités prêtes à l'emploi et des outils pour automatiser les tâches courantes.
Les cadriciels les plus populaires pour le développement de PWA sont :

- React : Librairie JavaScript open-source développée par Facebook pour créer des interfaces utilisateur réactives
- Angular : Framework JavaScript open-source développé par Google pour créer des applications web dynamiques.
- Vue : Framework JavaScript open-source pour la création d'interfaces utilisateur interactives.

<details>
    <summary>Quelle est la différence entre un cadriciel (framework) et une librairie ?</summary>
    Un cadriciel (framework) est un ensemble d'outils et de composants qui fournit une structure et un cadre pour le développement d'une application. Il impose une organisation spécifique du code et de l'architecture. C'est le framework qui contrôle le flux d'exécution de l'application. Il prend le contrôle du programme, et l'utilisateur doit s'intégrer dans l'architecture préétablie <br>
    Une librairie, quant à elle, est un ensemble de fonctions ou d'outils réutilisables que l'utilisateur appelle pour accomplir des tâches spécifiques. Contrairement au framework, la librairie ne dicte aucune organisation ou architecture du programme. L'utilisateur garde plein contrôle sur l'exécution et l'organisation de l'application, et utilise la librairie uniquement pour ajouter des fonctionnalités précises selon ses besoins. L'utilisateur décide quand et comment appeler les différentes fonctions de la librairie.
</details>