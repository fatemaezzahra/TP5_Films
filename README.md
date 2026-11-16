"# TP5_Films" 

## 1. Présentation du projet
 ce tp concerne une application web développée dans le cadre du TP5 portant sur le travail collaboratif avec Git et GitHub.

L'objectif de ce projet est de créer une interface web permettant aux utilisateurs de consulter une collection de films, de rechercher un film précis et de filtrer les résultats selon leur genre.

Le projet a été réalisé en équipe en utilisant les technologies HTML, CSS et JavaScript, avec Git et GitHub pour assurer la gestion des versions et la collaboration entre les membres.



## 2. Fonctionnalités principales

L'application propose les fonctionnalités suivantes :

## Affichage des films
- Afficher la liste des films disponibles.
- Présenter les informations de chaque film : titre, genre et année de sortie.

###  Recherche de films
- Rechercher un film à partir de son titre.
- Actualiser les résultats automatiquement pendant la saisie.

###  Filtrage par genre
- Filtrer les films selon leur genre.
- Afficher uniquement les films correspondant au genre sélectionné.

###  Compteur de films
- Afficher le nombre de films correspondant aux critères de recherche et de filtrage.
- Actualiser automatiquement le compteur après chaque modification.

## 3. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages web |
| CSS3 | Mise en forme et design |
| JavaScript | Gestion des fonctionnalités et interactions |
| Git | Gestion des versions du code |
| GitHub | Hébergement du dépôt et collaboration |

## 4. Structure du projet

Le projet est organisé de la manière suivante :

```text
TP5_Films/
│
├── index.html       # Page principale
│
├── style.css        # Feuille de style
│
├── app.js           # Fonctionnalités JavaScript
│
└── README.md        # Documentation du projet
```

## 5. Installation et lancement du projet

Pour récupérer et exécuter le projet :

**Étape 1 : Cloner le dépôt GitHub**

```bash
git clone URL_DU_DEPOT
```

**Étape 2 : Accéder au dossier**

```bash
cd TP5_Films
```

**Étape 3 : Ouvrir le projet**

Ouvrir le dossier dans Visual Studio Code.

**Étape 4 : Lancer l'application**

Ouvrir le fichier `index.html` avec l'extension Live Server ou directement dans un navigateur web.

## 6. Organisation du travail avec Git et GitHub

Le travail a été réalisé en utilisant une organisation basée sur plusieurs branches.

### Branches utilisées

- **main :** branche principale contenant la version finale et stable du projet.
- **dev :** branche d'intégration des différentes fonctionnalités.
- **feature :** branches dédiées au développement individuel des fonctionnalités.

### Méthode de collaboration

Les membres du groupe ont suivi les étapes suivantes :

1. Récupération du dépôt GitHub.
2. Création de branches pour travailler séparément sur les fonctionnalités.
3. Développement des différentes parties du projet.
4. Enregistrement des modifications avec des commits.
5. Envoi des modifications sur GitHub avec `git push`.
6. Récupération des modifications avec `git pull`.
7. Création de Pull Requests pour intégrer les fonctionnalités dans `dev`.
8. Fusion des différentes branches après vérification.

### Gestion des conflits

Dans le cadre du TP, un conflit Git a été provoqué dans le fichier `index.html`.

Deux branches ont modifié la même ligne (titre) du fichier avec des contenus différents.

Le conflit a ensuite été identifié et résolu manuellement en choisissant le contenu final à conserver.

Cette manipulation nous a permis de comprendre :
- Les causes des conflits Git.
- Les marqueurs de conflit.
- La résolution manuelle des conflits.
- La validation de la résolution avec un commit.

Enfin, la branche `dev` a été intégrée dans `main` à travers une Pull Request.

## 7. Membres du groupe

Le projet a été réalisé en collaboration par les membres suivants :

- **Membre 1 :Elmoukha fatima-ezzahra
- **Membre 2 :Elmattane salma
- **Membre 3 :Elouafy hiba

Chaque membre a participé au développement des fonctionnalités et à la gestion collaborative du projet.

## 8. Conclusion

Ce TP nous a permis de mettre en pratique les notions de développement web et de gestion de versions avec Git et GitHub.

Nous avons appris à travailler avec des branches, à partager notre code, à effectuer des commits, à créer des Pull Requests et à résoudre des conflits.


