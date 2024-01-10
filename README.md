# Github API

Aujourd'hui, on se fait plaisir et on met en pratique tout ce qu'on a vu
pour se créer une application qui fonctionne avec une véritable API, celle de github !

![resultat](docs/resultat.png)

## Objectif

Faire un annuaire qui permette de chercher des repos sur github

Github fourni une API qui permet de chercher dans tous les repos, à cette adresse :

***

<https://api.github.com/search/repositories?q=REPOACHERCHER>

***

En remplaçant `REPOACHERCHER` par ce qui a été saisi par l'utilisateur,
vous obtiendrez une liste de résultats.

### Astuces

Pour gagner du temps sur la mise en forme, nous allons utiliser une bibliothèque : Semantic-UI

<https://react.semantic-ui.com/>

Pour l'installation vous trouverez les instructions ici :

<https://react.semantic-ui.com/usage>

**Si Semantic-UI te fait peur, tu n'es pas obligé de l'utiliser, ce n'est pas le plus important sur ce challenge.
Sache toutefois que ca peut te faire gagner pas mal de temps pour la partie CSS
et tu auras moins de composants a créer !
Dans tous les cas, essaye de réaliser une jolie intégration 👍🏻**

## Composants REACT à créer

* `<SearchBar />` pour le formulaire de recherche

* `<ReposResults />` pour afficher les repos correspondant à la recherche

* `<Message />` pour afficher les erreurs et les informations

## Comportement

Lorsque je soumets le formulaire de recherche en appuyant sur `Entrée`,
une requête est faite pour récupérer les résultats.
En cas de résultats, ils s'affichent sous la barre de recherche,
sous forme de cartes, comme sur la maquette.

> ## ATTENTION
>
> Si vous arrivez à afficher sous forme de cartes les résultats
> fournis par github, c'est vraiment énorme !!
> La partie bonus, c'est uniquement si vous êtes très très très gourmands...

## Conseils méthodologiques

* Je fais déjà l'affichage avec des composants statiques (sans _props_)
  * la barre de recherche
  * le message
  * la liste des dépôts

* Je suis libre d'utiliser Semantic UI quand bon mon semble,
je peux d'abord me concentrer sur les fonctionnalités
puis la mise en forme ou l'inverse

* Je donne des _props_ (et je les type) avec des données que je crée moi même,pour tester

* Je commence à introduire des _hooks_ d'état dans mon composant racine

* Je mets mes fausses données dans les états, et je les passe aux composants

* Je gère le changement dans le champ de recherche (champ contrôlé)

* Je gère la soumission (`onSubmit`)

* J'essaie d'utiliser Axios pour obtenir des résultats

* J'utilise Axios pour obtenir des résultats liés à la recherche
de l'utilisateur (valeur de l'input)

* J'utilise les résultats pour donner à mon _state_ les données,
formatées au besoin pour coller aux _props_ attendues

Ah et une dernière chose, le logo est fourni dans le dossier `assets`,
tu trouveras aussi des données dans le dossier `data`
qui peuvent servir dans un premier temps aussi pour faire des tests

## Bonus : plus de résultats

Par défaut l'API GitHub retourne les 30 premiers résultats,
changeons ça :

***

<https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9>

***

* On modifie l'URL appelée avec des paramètres `get` supplémentaires,
ainsi on demande **9 repos par page**, on commence à la **page 1**
et on trie les résultats par nombre d'étoiles décroissantes

* On ajoute un bouton à la suite des résultats _Plus de résultats_

* Au clic sur ce bouton on charge les 9 repos suivants,
qu'on affiche à la place ou à la suite (un peu plus difficile) des 9 premiers,
et ainsi de suite

> **Attention** : lors d'une nouvelle soumission, on doit repartir de la page 1
