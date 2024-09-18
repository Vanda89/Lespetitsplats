# Projet Bootcamp Lespetitsplats : Site algorythmique de recettes


## Introduction
Vous êtes freelance et vous venez d’être missionné par l’entreprise **“Les Petits Plats”** en tant que développeur Front-End pour une mission de 3 mois.

## Objectif 

Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine, à l’instar de **Marmiton** ou **750g**.

## Mission
Votre première mission consiste à **implémenter la fonctionnalité de recherche**. L'équipe back-end n'étant pas encore constituée, vous disposerez uniquement d'un **fichier JavaScript** contenant un tableau JSON de 50 recettes. Vous aurez également accès à 50 images de recettes (temporairement). Le but est de permettre une recherche fluide et rapide pour les utilisateurs.

## Objectifs :
- **Implémenter la recherche** : La fonctionnalité de recherche doit être performante et presque instantanée.
- **Respecter la maquette sur Figma** : Assurez-vous de bien suivre le design fourni par le designer.
- **Rédiger un document explicatif** : Vous devrez transmettre un document décrivant votre travail, pour que l'équipe back-end puisse l'intégrer plus tard.

## Détails Techniques
Voici les recommandations et directives fournies par **Jean-Baptiste (Lead Developer)** :

1. **Implémentation de l'interface** :
   - Utilisez un framework front-end comme **Bootstrap** ou **Tailwind CSS** pour le style (uniquement les fonctionnalités CSS, aucun JS de librairie autorisé).
   - Le code doit être valide avec le validateur W3C.

2. **Algorithmes de recherche** :
   - Implémentez **deux versions différentes** de l'algorithme de recherche : 
     - Une utilisant des **boucles natives** (while, for, etc.).
     - Une utilisant la **programmation fonctionnelle** avec les méthodes `forEach()`, `filter()`, `map()`, `reduce()`.
   - Planifiez et décrivez les deux versions dans un document appelé **"fiche d’investigation de fonctionnalité"**.

3. **Schéma d'algorithme** :
   - Fournissez un schéma (ou algorigramme) illustrant l’enchaînement des étapes de chaque implémentation.
   - Outils recommandés : **draw.io** (ou un outil de votre choix).

4. **Implémentation des versions** :
   - Utilisez deux branches différentes sur **Git** pour séparer les deux implémentations.
   - Utilisez la même version de l'algorithme pour les recherches par tags dans les deux branches.

5. **Comparaison des performances** :
   - Utilisez un outil tel que **Jsben.ch** pour comparer la performance des deux algorithmes en mesurant le nombre d’opérations par seconde.
   - Ajoutez les résultats à la fiche d’investigation et recommandez l'algorithme le plus performant.


### Conseils :
Commencez par implémenter l'interface.
Utilisez Bootstrap ou Tailwind pour l'interface.
Ecrivez du code JavaScript propre et validable W3C.
Collaborez avec Jean-Baptiste, le Lead Developer.

## Langages et Technologies utilisé 

- **HTML5** : Structurer les pages du site.
- **CSS3** (**Tailwind CSS**) : Styliser les pages en respectant la maquette et en assurant une mise en page responsive.
- **JavaScript (ES6+)** : Implémenter la logique de recherche et l'interactivité du site.
- **Git** : Gérer les versions du projet et séparer les implémentations de recherche sur différentes branches.
- **JSON** : Contient les données des recettes (sous forme de tableau).
- **Jsben.ch** : Comparer les performances des algorithmes de recherche.

## Tests de Performance
Pour comparer les deux implémentations d'algorithmes de recherche :

Implémentez les deux versions en créant deux branches Git distinctes :

```bash
git checkout -b algo-boucles
git checkout -b algo-fonctionnel
```

Utilisez Jsben.ch pour tester les performances :

Créez deux scripts JavaScript pour chaque version.
Utilisez Jsben.ch pour mesurer le nombre d’opérations par seconde de chaque implémentation.
Ajoutez les résultats dans la fiche d’investigation de fonctionnalité.

## Vérification de la Validité du Code
Assurez-vous que votre code HTML respecte les standards du W3C :

Utilisez le validateur W3C en ligne : <a href="https://www.w3.org/">W3C Markup Validation Service</a>.

## Installation et Configuration du Projet

### Prérequis

- **Node.js** (v14.x ou supérieur) et **npm** (ou **yarn**) installés sur votre machine.
- **Git** pour le contrôle de version.

### Étapes d'Installation

1. **Clonez le dépôt Git** :
   ```bash
   git clone https://github.com/Vanda89/les-petits-plats.git

2. **Intaller** :
   ```bash
   npm install

3. ** Lancez le serveur :
   ```bash
   npm run dev
   
