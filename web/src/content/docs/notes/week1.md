---
title: Introduction au PWA et au cadriciel
description: Cette semaine nous faisons une introduction aux applications web progressives (PWA). Nous faisons également la prise en main des outils qui seront utilisés dans le cours pour construire les PWA, principalement Node.js, React et Vite. Finalement, nous faisons un rappel des notions de développement web (coté client).
lastUpdated: 2025-03-21
---


## Introduction au PWA 

Les applications web progressives (PWA) sont des applications web qui offrent une expérience utilisateur proche de celle des applications natives. Elles sont conçues pour fonctionner sur tous les navigateurs et appareils, en utilisant les technologies web standards.

### Avantages

Les PWAs offrent plusieurs avantages par rapport aux applications mobiles natives, notamment:

- **Installation sur l'écran d'accueil**: Les utilisateurs peuvent ajouter une PWA à leur écran d'accueil sans passer par un magasin d'applications, ce qui simplifie l'accès et permet une adoption plus rapide.
- **Fonctionnement hors ligne** : Grâce à l’utilisation de Service Workers, les PWAs peuvent continuer à fonctionner même sans connexion Internet, garantissant une expérience fluide en mode hors ligne.
- **Notifications push** : Les PWAs peuvent envoyer des notifications push, permettant aux développeurs de maintenir l'engagement des utilisateurs, même lorsque l'application n’est pas active.
- **Compatibilité multiplateforme** : Une PWA fonctionne sur n'importe quel appareil disposant d'un navigateur compatible, qu'il s'agisse d'un smartphone, d'une tablette ou d'un ordinateur de bureau. Cela permet de réduire les coûts de développement, car une seule version de l'application peut être déployée sur toutes les plateformes.
- **Mises à jour automatiques** : Contrairement aux applications natives, qui nécessitent une intervention de l'utilisateur pour se mettre à jour via un magasin d'applications, les PWAs se mettent à jour automatiquement en arrière-plan, garantissant que les utilisateurs bénéficient toujours de la version la plus récente.

### Limitations 

Bien que les PWAs offrent de nombreux avantages, elles présentent certaines limitations qui dépendent des objectifs et du public cible :

- **Accès limité aux fonctionnalités natives** : Les PWAs n'ont pas un accès complet aux fonctionnalités natives des appareils, comme le Bluetooth, les capteurs de proximité, ou l'intégration profonde avec le système d'exploitation, ce qui peut restreindre certaines fonctionnalités.
- **Limitations sur iOS** : Les PWAs sont moins bien supportées sur iOS par rapport à Android. Par exemple, certaines fonctionnalités comme les notifications push ou l’accès complet à la caméra sont limitées ou non disponibles sur iOS. De plus, l'ajout d'une PWA à l'écran d'accueil sur iOS peut être moins intuitif pour l'utilisateur.
- **Pas accessibles via les magasins d'applications** : En raison de leur nature web, les PWAs ne sont pas disponibles dans les magasins d’applications traditionnels comme le Google Play Store ou l’App Store d’Apple. Cela peut réduire leur visibilité et leur découvrabilité auprès des utilisateurs, qui s’attendent à trouver des applications directement dans ces magasins.

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

#### Concepts externes

- **Back-end et API**: Comme toute application web traditionnelle, une PWA peut interagir avec un serveur back-end via des API REST ou GraphQL pour récupérer ou envoyer des données dynamiques. Cela permet d'enrichir l’expérience utilisateur avec des contenus actualisés en temps réel.
- **Frontend**: La couche Frontend est l'interface visible de l'application. Elle gère les interactions avec l'utilisateur et reçoit les données traitées par le back-end. L'utilisation de frameworks Frontend modernes comme **React**, **Vue**, ou **Angular** facilite grandement la gestion des composants UI, des routes, et des appels API.

## Introduction au cadriciel

Un cadriciel (**framework**) est un ensemble d'outils, de bibliothèques et de conventions qui facilitent le développement d'applications web. Il fournit une structure de base pour organiser le code, des fonctionnalités prêtes à l'emploi et des outils pour automatiser les tâches courantes.
Les cadriciels les plus populaires pour le développement de PWA sont :

- **React (utilisé dans ce cours)** : Librairie JavaScript open-source développée par Facebook pour créer des interfaces utilisateur réactives
- **Angular** : Framework JavaScript open-source développé par Google pour créer des applications web dynamiques.
- **Vue** : Framework JavaScript open-source pour la création d'interfaces utilisateur interactives.

<details>
    <summary>Quelle est la différence entre un cadriciel (framework) et une librairie ?</summary>
    Un cadriciel (framework) est un ensemble d'outils et de composants qui fournit une structure et un cadre pour le développement d'une application. Il impose une organisation spécifique du code et de l'architecture. C'est le framework qui contrôle le flux d'exécution de l'application. Il prend le contrôle du programme, et l'utilisateur doit s'intégrer dans l'architecture préétablie <br>
    Une librairie, quant à elle, est un ensemble de fonctions ou d'outils réutilisables que l'utilisateur appelle pour accomplir des tâches spécifiques. Contrairement au framework, la librairie ne dicte aucune organisation ou architecture du programme. L'utilisateur garde plein contrôle sur l'exécution et l'organisation de l'application, et utilise la librairie uniquement pour ajouter des fonctionnalités précises selon ses besoins. L'utilisateur décide quand et comment appeler les différentes fonctions de la librairie.
</details>


## React.js

React est une librairie JavaScript qui dispose de méthodes et de fonctions préconstruites pour construire des interfaces modulaires, réactives et performantes.

:::tip[Bon à savoir]
React est actuellement la technologie web la plus populaire pour construire des applications web modernes (Reférence: [Survey StackOverflow 2024](https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe-prof))
:::


### Ecosystème

Bien que souvent comparé à des frameworks comme Angular ou Vue.js, React est avant tout une bibliothèque permettant de créer efficacement des interfaces utilisateur modulaires. Son écosystème riche lui permet cependant de combler tous les besoins généralement couverts par les frameworks, et bien plus encore.

#### Extensions et outils complémentaires

Ces outils augmentent les capacités de React en matière de gestion d'état, de routage, de tests et de gestion des données asynchrones.

##### Gestion de l'état

Par défaut, React offre des mécanismes intégrés pour gérer l’état d’un composant. Cependant, certaines applications nécessitent une gestion plus avancée et centralisée:
- **React Context API :** Une solution intégrée et légère pour partager l’état entre composants sans passer de props manuellement.
- **Redux :** Une solution plus robuste et centralisée, adaptée aux grandes applications nécessitant un flux de données prévisible et un debugging avancé (via Redux DevTools).

##### Routage et navigation

Une application web complète est souvent organisé en page.

- **React Router :** Permet de gérer la navigation et les transitions entre vues ou pages. Il prend en charge le routage dynamique, la gestion des paramètres d’URL, et le contrôle de l’historique de navigation.

##### Tests et qualité du code

Les tests sont essentiels pour garantir la fiabilité d’une application React :

- **Jest :** Un framework de test performant et polyvalent, optimisé pour les tests unitaires et d’intégration.
- **React Testing Library :** Encourage une approche centrée sur l’utilisateur, où les tests simulent des interactions réelles (clics, saisies, affichage dynamique), rendant ainsi les tests plus pertinents et robuste

##### Gestion des données asynchrones

Dans une application React, les données proviennent souvent d’API externes ou d’autres sources asynchrones :

- **React Query :** Facilite la récupération, la mise en cache et la synchronisation des données. Il optimise les performances et gère automatiquement les états de requête (loading, success, error), réduisant ainsi la complexité du code côté client.

#### Intégration Backend

Les applications React peuvent être couplées à des backends pour une gestion dynamique des données.
- **Next.js :** Un framework basé sur React qui facilite le rendu côté serveur (SSR) et la génération de pages statiques (SSG), améliorant ainsi les performances et le SEO des applications.

#### Intégration Mobile

React permet aussi de développer des applications mobiles avec :

- **React Native :** Une technologie qui permet de créer des applications mobiles natives pour iOS et Android en réutilisant une grande partie du code React, assurant ainsi un développement plus rapide et cohérent.

### Syntaxe JSX

> Pour plus de détails: https://fr.react.dev/learn/writing-markup-with-jsx

JSX (JavaScript XML) est une extension de syntaxe pour JavaScript qui permet d’écrire du balisage similaire au HTML au sein d’un fichier JavaScript. Le JSX permet de combiner la logique JavaScript et la structure visuelle (UI) dans un même fichier, facilitant ainsi la création de composants React.


#### Exemple

Le code JSX ci-dessous crée un élément `H1` avec du texte dedans, tout comme en HTML.

```jsx
const element = <h1>Bonjour, monde !</h1>;
```

Cependant, ce n'est pas du HTML, mais une structure JavaScript qui sera convertie (internement par React) en un appel `React.createElement`.
Grâce à JSX, il est facile d'intégrer des expressions JavaScript dans des balises HTML avec des accolades `{}`, comme dans l'exemple ci-dessous

```jsx
const name = "Alice";
const element = <h1>Bonjour, {name} !</h1>;
```



## Outils de développement

De nombreux outils interviennent dans le développement côté client, en complément des frameworks et bibliothèques. Dans le développement moderne, les outils de compilation (ou build tools) jouent un rôle clé en offrant une expérience de développement rapide et fluide. 

En tirant parti de la modularité offerte par **ES6** avec les mécanismes d’**import/export**, ces outils gèrent efficacement les dépendances du projet, qu'il s’agisse de scripts ou de ressources comme les images et les fichiers CSS. De plus, ils permettent d'optimiser les builds en éliminant les dépendances inutiles et le code superflu, réduisant ainsi la taille des bundles et améliorant les performances de l’application.

Des outils comme **Vite**, **Webpack** ou encore **Parcel** sont largement utilisés pour gérer les dépendances et automatiser le processus de construction des applications.

### Vite

> Pour plus d'informations sur Vite: https://vite.dev/

Vite est un build tool moderne pour les applications web, conçu pour offrir un développement plus rapide et une expérience fluide. Son principal atout est la réduction des temps de compilation et de rechargement. En utilisant les ESModules nativement, Vite permet de démarrer un projet sans avoir à attendre un processus de bundling ou de compilation lourd, ce qui accélère considérablement le démarrage. Vite est compatible avec plusieurs frameworks populaires, tels que Vue.js, React, Preact, Svelte, et bien d'autres, et propose des templates et configurations optimisés pour chacun de ces environnements.

### Installation

Pour initialiser un projet React avec Vite, utilisez la commande suivante et suivez les instructions:

**Avec JavaScript (utilisé dans le cours)**
```sh
npm create vite@latest APP_NAME -- --template react
```

**Avec TypeScript**
```sh
npm create vite@latest APP_NAME -- --template react-ts
```

:::note
- **Pour Windows:** Remplacez `--` par `---` 
  - Ex: `npm create vite@latest APP_NAME --- --template react`
- Remplacez `APP_NAME` par le nom que vous souhaitez donner à votre application.
- Pour plus d'information sur l'initalisation de projet avec Vite: [Guide pour Vite](https://vite.dev/guide/)
:::

## Récapitulatif

1. PWAs : Offrent une expérience proche des applications natives en utilisant des technologies web standard. 
2. Principaux avantages : installation facile, fonctionnement hors ligne, notifications push, et compatibilité multiplateforme.
3. Limitations des PWAs : Accès limité aux fonctionnalités natives et support restreint sur iOS.
4. Cadriciel vs Librairie : Un cadriciel impose une structure et contrôle le flux d’exécution, tandis qu’une librairie offre des outils réutilisables sans imposer d’organisation spécifique, laissant le contrôle à l’utilisateur.
5. Cadriciels : Des outils comme React, Angular et Vue.js facilitent le développement d'applications web structurées et réactives.
6. React : Librairie populaire avec un écosystème riche pour la gestion d’état, la navigation et les tests.
7. JSX : Syntaxe pour décrire la structure HTML de l'interface utilisateur dans les composants.
8. Vite : Outil de build moderne pour accélérer le développement et optimiser les performances des applications React.
9. npm : Gestionnaire de paquets essentiel pour installer, mettre à jour, et gérer les dépendances dans les projets JavaScript, facilitant la configuration et l’automatisation des tâches.

## Ressources

- [Introduction aux applications progressives - mdn (en anglais)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
- [Introduction aux applications progressives - web.dev (en anglais)](https://web.dev/articles/what-are-pwas)
- [Guide d'utilisation de Vite](https://vite.dev/guide/)
- [JSX cheatsheet](https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet)