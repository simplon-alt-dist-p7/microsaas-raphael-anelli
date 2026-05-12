# User Stories format Gherkin

## 1 - Recherche d'une créature

Scenario : Recherche par nom exact
Given : l'utilisateur est sur la page avec la liste complète
And : une créature nommée "chef goblin" existe dedans
When : il saisit "chef goblin" dans la barre de recherche
And : lance la recherche
Then : la créature nommée "chef goblin" apparait dans les résultats

## 2 - Détail d'une créature

Scenario : Consulter la page d'une créature
Given : l'utilisateur est sur la page avec la liste des créature
And : chacune d'elle a sa page dédié
When : il clique sur une créature
Then : l'utilisateur arrive sur la page qui la détaille

## 3 - Recherche de plusieurs créatures

Scenario : Recherche de créatures ayant un élément commun dans leur nom
Given : l'utilisateur est sur la page avec la liste complète
And : plusieurs créatures ayant dans leur nom "goblin" existe
When : il saisit "goblin" dans la barre de recherche
And : lance la recherche
Then : les créatures ayant "goblin" dans leur nom apparaissent

## 4 - Filtrer par espèce

Scenario : Lister les créatures apparenant à la même espèce
Given : l'utilisateur est sur la page avec la liste complète
And : la catégorie "draconique" existe avec au moins une créature qui en fait partie
When : il sélectionne la catégorie "draconique" dans les filtres
Then : les créatures de la catégorie "draconique" apparaissent dans les résultats

## 5 - Filtrer par genre d'univers

Scenario : Lister les créatures apppartenant à un genre spécifique
Given : l'utilisateur est sur la page avec la liste complète
And : le genre "science-fiction" existe avec au moins une créature qui en fait partie
When : il sélectionne le genre "science-fiction dans les filtres
Then : les créatures du genre "science-fiction" apparaissent dans les résultats