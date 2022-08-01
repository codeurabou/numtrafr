# Librairie pour transformer les chiffres en lettres
J'ai eu l'idee de cette librairie lors du developpement
de mon application , un utiliateur 
si je pouvais traduire le montant de la facture en toute lettre
comme tout le monde j'ai fais une recherche sur google je n'ais pas trouver
de libraire javascript adapter à mon besoin de ce fait j'ai developper le notre 
puis le rendre open source pour que d'autres personnes puis l'utiliser

# Comment ça fonctionne ?
- Etape 1
    Tout part du fichier convertion qui est compose de trois fonctions (unite,dizaine,centaine)
    celui-ci suffit pour une convertion
- Etape 2
    le fichier convertion a ses besoins de quelque utilitaires
    comme numStr (int a strin) absolute (qui prend la partie entiere du nombre)
    et unites un tableaux qui contient les unites valides exemple bilions ...
- Etape 3
    le fichier index qui n'appele que trois fonctions (capitalize, convertNumToWord, splitNum)
    enfin le fichier formatWord convertit et traite

# Schema du fonctionnement
absolute-->numStr-->unite-->dizaine-->centaine-->convertNumToWord-->splitNum-->formatWord-->capitalize