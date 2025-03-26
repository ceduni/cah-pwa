---
title: Semaine 4
description: Introduction au routage avec React Router
banner:
  content: |
    Remise du projet 1: Dimanche 6 avril!
---

## Le concept de route dans une application web

Une route dans le contexte d'une application web fait référence à un chemin spécifique qui mène à une ressource, souvent sous forme de page ou de composant. Chaque route correspond à une URL unique qui est associée à un ou plusieurs comportements dans l'application.

Dans une application traditionnelle, chaque fois qu'un utilisateur clique sur un lien, le navigateur charge une nouvelle page en effectuant une requête HTTP vers un serveur. Le serveur renvoie alors la page demandée. 

Une Single Page Application (SPA) est une application web qui charge une seule page HTML et qui met à jour dynamiquement son contenu au fur et à mesure que l'utilisateur interagit avec l'application, sans avoir à recharger toute la page.

Dans une SPA, la navigation est gérée côté client à l'aide de JavaScript. Lorsqu'un utilisateur clique sur un lien, seul le contenu spécifique de la page (le composant ou la vue) est mis à jour, et non toute la page. Cela permet d'offrir une expérience utilisateur plus fluide et réactive.

## Le concept de route avec React

Dans une application React, les routes permettent de gérer la navigation entre les différents composants et vues sans recharger la page. React gère les routes côté client en utilisant le **React Router**, un ensemble d'outils permettant de lier des URL à des composants spécifiques.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/accueil" component={Accueil} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
```

###  Le concept de route dans d'autres frameworks

#### Vue.js

Vue.js, comme React, gère la navigation côté client à l’aide du Vue Router. Il permet de déclarer des routes qui vont afficher différents composants en fonction 

```js
const routes = [
  { path: '/', component: Home },
  { path: '/a-propos', component: About }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
```

#### Angular

Angular dispose également de son propre système de gestion des routes avec le Angular Router. Comme dans React et Vue, il est possible de définir des chemins pour l'application qui redirigent vers des composants spécifiques.

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## React Router

React Router est une bibliothèque de routage pour React, permettant de déclarer des routes, de naviguer entre elles et d’afficher les composants associés sans recharger la page.


## Installations et configuration de base :
Pour utiliser React Router, il faut d'abord l'installer dans votre projet React :

```sh
npm install react-router-dom
```

Ensuite, dans le fichier `App.js`, vous devez envelopper vos routes dans un `BrowserRouter` (ou `HashRouter` selon vos besoins).

### Les composants principaux :

- `Route` : permet de rendre un composant basé sur une correspondance d'URL.
- `Switch` : rend uniquement le premier Route ou Redirect qui correspond à l'URL.
- `Link` : permet de créer des liens de navigation.
- `useHistory`, `useLocation` : hooks permettant d'interagir avec l'historique de navigation et la localisation.

### Exemple

```jsx
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/a-propos" component={About} />
      </Switch>
    </Router>
  );
}
```

##  Premier coup d'œil sur le Context API

Le Context API de React permet de partager des données entre plusieurs composants sans avoir à passer explicitement les props de parent à enfant, ce qui simplifie la gestion de l’état dans des applications complexes.

:::note
Le Context API est utile lorsque vous avez des données qui doivent être accessibles par plusieurs composants à différents niveaux de l'arbre de composants. Cela peut être des informations comme le thème de l’application, la langue, ou l’état de l'utilisateur.
:::

React Router utilise le Context API pour partager des informations sur la navigation (comme l'URL actuelle et l'historique) à travers l'arbre de composants, ce qui permet à tous les composants d'accéder facilement aux informations liées à la navigation sans avoir à passer ces informations explicitement via des props.

## Organisation d'une application en page

:::note
Dans une application React avec React Router, les pages sont en réalité des composants React. Ce qui distingue une "page" d'un autre composant est principalement son rôle dans l'application : une page représente une vue complète ou une section de l'interface utilisateur liée à une route spécifique.
:::

```sh
/src
  /components
    Header.js
    Sidebar.js
  /pages
    Home.js
    About.js
    Contact.js
    Product.js
  App.js
  index.js
```
- /components : Contient des composants réutilisables comme le header, la barre latérale, etc.
- /pages : Contient les pages principales de l'application, chacune correspondant à une route.
- App.js : Le fichier principal où le Router et les Routes sont définis.