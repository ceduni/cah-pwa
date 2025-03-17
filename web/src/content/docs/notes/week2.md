---
title: Cours 2
description: Introduction aux composants et hooks dans React
lastUpdated: 2025-03-17
---

## Rappel de React.js (installation)

React est une librairie JavaScript qui dispose de méthodes et de fonctions préconstruites pour construire des interfaces modulaires, réactives et performantes.
L'un des concepts clés sur lequel repose React est le concept de composants.

:::note
Pour initialiser un projet React, utilisez la commande suivante:

```sh
npm create vite@latest APP_NAME -- --template react
```
- Remplacez `APP_NAME` par le nom que vous souhaitez donner à votre application.
- Pour plus d'information sur l'initalisation de projet avec Vite: [Guide pour Vite](https://vite.dev/guide/)
:::


## Composants React


### Exemple de composant

#### Définition du composant

```jsx title="HelloWorld.jsx"
import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

#### Utilisation du composant

```jsx title="App.jsx" "<HelloWorld />"
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

### Structure

### Gestion de l'état

### Exemple

#### Définition du composant

```jsx jsx title="Message.jsx" {5}
import React, { useState } from 'react';

function Message() {
  // Définir un état local pour le message
  const [message, setMessage] = useState('Bonjour, bienvenue dans React !');

  // Fonction pour changer le message
  const changeMessage = () => {
    setMessage('Vous avez changé le message !');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Changer le message</button>
    </div>
  );
}

export default Message;
```

- **useState** : C'est un hook qui permet de gérer l'état dans un composant fonctionnel. Ici, il est utilisé pour définir le message initial et la fonction setMessage pour le modifier.
- **changeMessage** : Cette fonction change la valeur de l'état lorsque l'utilisateur clique sur le bouton.
- **onClick** : Lorsqu'on clique sur le bouton, la fonction changeMessage est appelée, modifiant l'état et redéclenchant le rendu du composant avec le nouveau message.

#### Utilisation du composant

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';  // Assurez-vous que le chemin est correct

ReactDOM.render(
  <Message />,
  document.getElementById('root')
);

```

## Introduction aux hooks

Les hooks dans React permettent de gérer l'état et d'autres fonctionnalités du cycle de vie des composants. Les hooks sont des fonctions qui permettent aux composants d'avoir des fonctionnalités comme la gestion de l'état, l'accès aux méthodes du cycle de vie, ou encore la gestion des effets secondaires (side effects).
En utilisant les hooks, nous pouvons mieux structurer l'application et rendre le code plus lisible, réutilisable et plus facile à maintenir.

### Cycle de vie des composants

Le cycle de vie d'un composant React décrit les différentes étapes par lesquelles passe un composant depuis sa création jusqu'à sa destruction. Il peut être divisé en trois grandes phases :

1. Montée en charge (Mounting): Cela se produit lorsqu'un composant est créé et inséré dans le DOM pour la première fois.
2. Mise à jour (Updating): Lorsqu'un composant reçoit de nouvelles props ou lorsque son état change, il entre dans la phase de mise à jour.
3. Démontage (Unmounting): Cette phase se produit lorsque le composant est retiré du DOM.

Les hooks permettent de gérer le cycle de vie dans les composants fonctionnels, en utilisant par exemple le hook useEffect pour simuler les comportements de montage, mise à jour et démontage.


### useState

Le hook useState permet de gérer l'état dans un composant fonctionnel.

#### Exemple

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}
```

### useEffect 

Le hook **useEffect** permet de gérer les effets de bord (side effects), comme les appels API, les abonnements, ou la modification du DOM. Il permet d'attacher un comportement suivant le cycle de vie des composants.

- Lors de la première exécution du composant (montée en charge), useEffect se comporte comme componentDidMount.
- Lors d'une mise à jour, il se déclenche après chaque rendu.
- Lors du démontage, un retour dans useEffect permet de nettoyer les ressources, comme avec componentWillUnmount.
