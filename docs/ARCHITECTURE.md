# Architecture

## Patron de conception

(à déterminer)

## Choix de sobriété

Afin de limiter les éléments chargés dans la liste principale, une pagination sera mise en place avec un nombre maximum d'élément affiché par page (entre 12 et 20 maximum).
Une mise en cache sera effectué lors du premier chargement des éléments, afin d'alléger les futures rechargement des pages.

## Stack

Le frontend sera développé sur ReactJS, principalement pour ses composants réutilisables. Chaque élément de la liste des créatures sont similaires (en dehors du contenu). Il est très facile et rapide de mettre en place ce principe avec React.

Le backend sera développé en JavaScript, en utilisant ExpressJS. C'est un framework qui permet de mettre en place une architecture backend de manière rapide et structurée. Il dispose d'une gestion des routes simples, permettant de créer une API REST facilement.

La base de données sera créée sur PostgreSQL. Cela permet de faire des requêtes plus avancée, voir même des sous-requêtes.