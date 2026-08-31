# Architecture

## Patron de conception

J'ai fais le choix de partir sur une architecture multicouche classique :

Routes -> Controller -> Service -> Repository -> Models -> Base de données

Cette structure est suffisante car l'application est assez simple dans son fonctionnement.

## Rôle de chaque couche 

Routes : elles font le lien entre une requête et le controller correspondant. Elles définissent les URL qui sont disponibles, les méthodes HTTP utilisées et les controllers qui sont appelés.
Controllers : prend en compte les paramètres de la requête, transmettant les informations au service, puis récupère le résultat afin de construire une réponse HTTP.
Services : logique métier de l'application.
Repositories : fait le lien entre les services et la base de données. Il permet de faire des opérations permettant différentes actions
Models : représente la structure des données utilisées, comprenant les différents éléments qui le défini.
Base de données : stockage des données de manière organisée

## Choix de sobriété

Afin de limiter les éléments chargés dans la liste principale, une pagination sera mise en place avec un nombre maximum d'élément affiché par page (entre 12 et 20 maximum).
Une mise en cache sera effectué lors du premier chargement des éléments, afin d'alléger les futures rechargement des pages.

## Stack

Le frontend sera développé sur ReactJS, principalement pour ses composants réutilisables. Chaque élément de la liste des créatures sont similaires (en dehors du contenu). Il est très facile et rapide de mettre en place ce principe avec React.

Le backend sera développé en JavaScript, en utilisant ExpressJS. C'est un framework qui permet de mettre en place une architecture backend de manière rapide et structurée. Il dispose d'une gestion des routes simples, permettant de créer une API REST facilement.

La base de données sera créée sur PostgreSQL. Cela permet de faire des requêtes plus avancée, voir même des sous-requêtes.