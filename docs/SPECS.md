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