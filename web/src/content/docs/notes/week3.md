---
title: Gestion des évènements et des formulaires
description: Introduction aux composants et hooks dans React
lastUpdated: 2025-03-24
---

## Introduction aux hooks

Un Hook est une fonction spéciale qui permet d'utiliser les fonctionnalités de React (comme l’état et le cycle de vie) dans les composants fonctionnels.

Les hooks dans React permettent de gérer l'état et d'autres fonctionnalités du cycle de vie des composants. Les hooks sont des fonctions qui permettent aux composants d'avoir des fonctionnalités comme la gestion de l'état, l'accès aux méthodes du cycle de vie, ou encore la gestion des effets secondaires (side effects).
En utilisant les hooks, nous pouvons mieux structurer l'application et rendre le code plus lisible, réutilisable et plus facile à maintenir.

### Cycle de vie des composants

Le cycle de vie d'un composant React décrit les différentes étapes par lesquelles passe un composant depuis sa création jusqu'à sa destruction. Il peut être divisé en trois grandes phases :

1. Montée en charge (Mounting): Cela se produit lorsqu'un composant est créé et inséré dans le DOM pour la première fois.
2. Mise à jour (Updating): Lorsqu'un composant reçoit de nouveaux props ou lorsque son état change, il entre dans la phase de mise à jour.
3. Démontage (Unmounting): Cette phase se produit lorsque le composant est retiré du DOM.

Les hooks permettent de gérer le cycle de vie dans les composants fonctionnels, en utilisant par exemple le hook useEffect pour simuler les comportements de montage, mise à jour et démontage.

## Hooks intégrés

React fourni de base quelques hooks integrées à la libraire.

:::note
Pour la liste complète des hooks fournis par React, consultez le [site de référence](https://fr.react.dev/reference/react/hooks)
:::

### useState (rappel)

`useState` permet de gérer l'état local dans un composant fonctionnel.

### useEffect - Gérer les effets de bord

`useEffect` permet d'exécuter du code après le rendu d'un composant. Il remplace les méthodes de cycle de vie des classes comme *componentDidMount*, *componentDidUpdate* et *componentWillUnmount*.  Il est souvent utilisé pour :

- Requêtes API après le premier rendu.
- Abonnements à des événements (ex: écouteurs de clic).
- Mise à jour du DOM (ex: titre de la page).
- Nettoyage des effets lors du démontage du composant.

```jsx
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("Nettoyage du composant");
    };
  }, []); // Le tableau vide signifie que ça s'exécute une seule fois (au montage)

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default DataFetcher;
```

### useRef - Accéder aux Références

`useRef` permet de stocker une référence mutable qui persiste entre les rendus sans provoquer de re-render. Il est souvent utilisé pour :

- Référencer un élément du DOM (ex: champ input pour focus automatique).
- Stocker une valeur qui ne déclenche pas de re-render.
- Garder une valeur entre les rendus sans modifier l'état (useState).

```jsx
import { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Met le focus sur l'input dès le chargement
  }, []);

  return <input ref={inputRef} placeholder="Tape ici..." />;
}

export default AutoFocusInput;
```

### useContext – Gérer un Contexte Global

:::note
Nous revisiterons ce hook dans la semaine abordant la gestion du contexte d'une application
:::

`useContext` permet d'utiliser une valeur globale (comme un thème, une langue, ou une session utilisateur) sans avoir à passer des props à tous les composants enfants (évite le prop drilling).  Il est souvent utilisé pour :

- Gérer le thème de l'application (mode clair/sombre).
- Préserver l'utilisateur connecté.
- Gérer la langue et les fichiers de traduction.
- Partager un état global entre composants.

## Gestion des évènements

En React, la gestion des événements est similaire à JavaScript, mais avec quelques différences importantes. Au lieu d'utiliser addEventListener, les événements sont directement attachés aux éléments JSX via des attributs nommés en camelCase.

```jsx "onClick={handleClick}" "handleClick()"
function Bouton() {
  function handleClick() {
    alert("Bouton cliqué !");
  }

  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```

### Passage d'arguments à un gestionnaire d'événements

```jsx "showMessage(message)"
function MessageButton({ message }) {
  function showMessage(msg) {
    alert(msg);
  }

  return <button onClick={() => showMessage(message)}>Afficher le message</button>;
}
```

### Passer un gestionnaire d’événements à un composant enfant

Dans React, il est courant qu’un composant parent gère l’état et passe des gestionnaires d’événements (event handlers) aux composants enfants. Cela permet une communication contrôlée entre composants.

```jsx
import { useState } from "react";

function Bouton({ onClick }) {
  return <button onClick={onClick}>Clique-moi</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  function incrementer() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <Bouton onClick={incrementer} />
    </div>
  );
}
```

<!-- ### Optimisation avec `useCallback`

Si un gestionnaire d’événement est recréé à chaque rendu, cela peut affecter la performance.
`useCallback` permet de mémoriser la fonction et éviter les recréations inutiles. Dans l'exemple suivant, on évite de recréer la fonction `incrementer` à chaque rendu.

```jsx
import { useState, useCallback } from "react";

function Bouton({ onClick }) {
  return <button onClick={onClick}>Clique-moi</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const incrementer = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <Bouton onClick={incrementer} />
    </div>
  );
}
```

### Gestion d’événements globaux avec `useEffect`

Si un événement doit être écouté globalement (ex. touche clavier, redimensionnement fenêtre), on l’ajoute avec useEffect et on le nettoie correctement.

```jsx
import { useState, useEffect } from "react";

export default function KeyLogger() {
  const [key, setKey] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      setKey(event.key);
    }

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <p>Dernière touche pressée : {key}</p>;
}
``` -->

#### Création d’un Hook personnalisé pour gérer les clics en dehors d’un élément (useClickOutside)

```jsx
import { useEffect, useRef } from "react";

function useClickOutside(ref, onOutsideClick) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onOutsideClick]);

  return ref;
}

export default function Modal({ onClose }) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  return (
    <div ref={modalRef} style={{ padding: 20, background: "white", border: "1px solid black" }}>
      <p>Contenu du modal</p>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}
```

## Gestion des formulaires

Les formulaires en React nécessitent une gestion spécifique de l’état des champs, car React ne manipule pas directement le DOM comme en HTML classique.

### États contrôlés

L’approche recommandée est d’utiliser le state pour stocker et gérer les valeurs des champs du formulaire.
La valeur des champs est stockée dans des variables d’état (via `useState`).

:::note
`event.preventDefault()` est utilisé pour éviter que le formulaire ne soumette la page.
:::

```jsx
import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nom soumis : ${nom}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

### Gestion de plusieurs champs

On peut gérer plusieurs champs en utilisant un objet dans le `useState` :

```jsx
function Formulaire() {
  const [formData, setFormData] = useState({ nom: "", email: "" });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Données soumises :", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
      </label>
      <label>
        Email :
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

### État non contrôlé

Dans ce cas de figure, la valeur du champ est gérée directement par le DOM. On utilise une référence (`useRef`) pour récupérer la valeur seulement au moment de la soumission.

```jsx
import { useRef } from "react";

function FormulaireNonControle() {
  const nomRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Nom :", nomRef.current.value);
    console.log("Email :", emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nom" ref={nomRef} />
      <input type="email" name="email" ref={emailRef} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

#### Exemple: Récupérer les valeurs du formulaire avec useRef et name

Au lieu d’attacher un `ref` à chaque champ, on **met un `ref` sur le formulaire** et on utilise `FormData` pour récupérer les valeurs.

```jsx
import { useRef } from "react";

function FormulaireNonControle() {
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Utilisation de FormData pour récupérer les valeurs
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    console.log(values); // { nom: "John Doe", email: "john@example.com" }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="nom" placeholder="Nom" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

<!-- ## Structurer son application -->