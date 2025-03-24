---
title: Aide-mémoire npm
description: Rappel des principales commandes utilisées avec l'outil **npm**  
lastUpdated: 2025-03-23
---

<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="Logo npm" width="120" />

:::note[Avant de commencer]
Assurez-vous d'installer Node.js sur vote machine: [https://nodejs.org/en](https://nodejs.org/en)
:::

Ce document présente un rappel des principales commandes utilisées avec l'outil **npm** pour la gestion des paquets **Node.js**.

Ces commandes peuvent être exécutées dans un **shell** (terminal) disponible sur tout système.


:::tip[Tu cherches un paquet?]
Tous les paquets peuvent être trouvé à partir du site de npm: [https://www.npmjs.com/](https://www.npmjs.com/)
:::

## Commandes de base

### Initialisation d'un projet

```sh
  npm init        # Configuration par formulaire (prompt) interactif 
  npm init -y     # Initialisation avec les valeurs par défaut (sauter les prompts)
```

- `npm init` crée un fichier `package.json` dans lequel sont définies les informations de ton projet (nom, version, description, auteur, etc.), ainsi que la liste des dépendances nécessaires.
- `npm init -y` permet d'initialiser le projet automatiquement et crée un fichier `package.json` avec des valeurs par défaut, sans avoir à répondre à chaque question.

#### Exemple de `package.json`

Ce fichier est généré lorsqu'on exécute la commande `npm init -y` à partir du dossier `/Hello`
```json
{
  "name": "Hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

### Installer des dépendances (paquets)

:::note
Tous les paquets installés sont ajoutés au dossier `node_modules` et listés dans le fichier `package.json`
:::

```sh
npm install <package_name>      # Installe un paquet (version par défaut: dernière version)
npm install <package_name> --save      # Équivalent à la commande précédente
npm install <package_name> <package_name>...      # Installe plusieurs paquets à la fois
npm install <package_name>@<version>  # Installe une version spécifique
```

#### Exemple pour installer plusieurs paquets à la fois

```sh
npm install lodash axios moment
```

#### Installer toutes les dépendances d'un projet

:::caution
Assurez-vous de vous positionner dans le dossier où se trouve le fichier `package.json` avant d'exécuter la commande.
:::

```sh
npm install
```

Cette commande lit le fichier `package.json` et installe toutes les dépendances listées (`dependencies` et `devDependencies`).

#### Installer une paquet de développement

:::note
Ces dépendances ne seront pas déployées avec le code source de l'application. Utilisez-les pour installer des outils facilitant les opérations de développement (ex: build, tests, linting).
:::

```sh
npm install <package_name> --save-dev   
```

Ces paquets seront seront ajoutés dans la section `devDependencies` du fichier `package.json`.

#### Installer une paquet globalement

:::caution
Les paquets installés globalement ne seront pas listés dans le fichier `package.json`.
:::

```sh
npm install -g <package_name>
```

Ces paquets seront disponibles sur tout votre machine et pourront être utilisés depuis n'importe quel dossier, comme `npm`.

### Mettre à jour un paquet

```sh
npm update <package_name>       # Mise à jour d'un paquet spécifique
npm update                      # Mise à jour de tous les paquets
```

Met à jour les paquets vers la dernière version compatible selon la configuration de ton fichier `package.json` (si tu as spécifié une version exacte ou une plage de versions).

### Désinstaller un paquet

```sh
npm uninstall <package_name>    # Désinstalle un paquet du dossier node_modules
npm uninstall <package_name> --save-dev  # Désinstalle un paquet des devDependencies
```

## Scripts

Plusieurs scripts Node peuvent être ajoutés au fichier `package.json`.  Ces scripts sont utilisés pour automatiser des tâches répétitives (tests, lancement de serveurs, build, etc.).

### Exécuter un script

```sh
npm run <script_name> 
```

Cette commande permet d'exécuter un script que tu as défini dans la section `"scripts"` de ton fichier `package.json`.

### Créer une script

Si le champ `"scripts"` n'existe pas dans le fichier `package.json`, ajoute-le comme suit:

```json
"scripts": {
  "start": "node app.js",
  "test": "jest"
}
```

### Exécuter un scirpt avec des arguments

```sh
npm run <script_name> -- <arg1> <arg2> 
```

## Gestion de version

### Vérifier la version de npm

```sh
npm -v       
```

### Vérifier la liste des paquets installés

```sh
npm list      # Affiche la liste des paquets installés localement
npm list -g   # Affiche la liste des paquets installés globalement
```
