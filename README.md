## Exercice1 : Filtrage des Nombres Pairs
# Description : 
cet exrcice consiste à écrire un programme fonctionnel qui prend en entrée une liste de nombres et renvoie une nouvelle liste contenant uniquement les nombres pairs.
Entrée: [1, 7, 10, 9, 8, 2]
sortie: [2, 8, 10]
# Explication : 
- filter : Cette méthode filtre les éléments du tableau pour ne conserver que les nombres pairs.
- sort : Utilise une fonction de comparaison (a, b) => a - b pour trier les nombres par ordre croissant.
- L'utilisation du spread operator permet de créer une copie triée sans modifier le tableau original.

## Exercice2: Calcul des Factorielles
# Descrition :
cet exrcice consiste à écrire un programme fonctionnel qui calcule la factorielle de chaque élément d'un tableau de nombres. 
Entrée: [1, 3, 4]
sortie: [1, 6, 24]
# Explication : 
- factoriel : Cette fonction calcule la factorielle d'un nombre en utilisant la récursion.
- map() : Cette méthode applique la fonction factoriel() à chaque élément du tableau numbers.

## Exercice3 : Transformation et de Filtrage de Texte
# Description : 
cet exrcice consiste à écrire un programme fonctionnel qui transforme un texte en majuscules, filtre les lignes contenant la lettre "I" et affiche les résultats.
# Explication : 
- split(',') : Divise le texte en plusieurs lignes en se basant sur les virgules.
- map() : Applique la fonction Modif() pour convertir chaque ligne en majuscules.
- filter() : Utilise .match(/I/) pour conserver uniquement les lignes contenant la lettre "I".

## Exercice4 : Recherche du Maximum dans un Tableau
# Description :
cet exrcice consiste à écrire un programme fonctionnel qui cherche le maximum d'elements dans un tableau . 
Entrée: [1, 7, 10, 9, 8]
sortie: 10
# Explication : 
-Initialisation : .reduce() commence avec la première valeur du tableau comme point de départ (acc = 1).
- Comparaison : À chaque itération, l'élément courant (x) est comparé à l'accumulateur (acc).
- Mise à jour : Si x est plus grand que acc, acc devient x. Sinon, acc reste inchangé.
- Résultat final : Une fois toutes les valeurs parcourues, l'accumulateur contient la plus grande valeur.

## Exercice5 : calcul du TTC Total à partir d'une Liste de Produits
# Description : 
cet exrcice consiste à écrire un programme fonctionnel qui clacule  le Total TTC (Toutes Taxes Comprises) pour une liste de produits.
# Explication : 
- La méthode .map() calcule le TTC pour chaque produit en multipliant son prix HT par 1.25 (pour appliquer la TVA de 25%).
- La méthode .reduce() additionne les montants TTC obtenus.

## Exercice6 : Traitement des données
# Description : 
L'objectif est d'effectuer diverses opérations sur l'ensemble de données, telles que le filtrage des produits par catégorie, le calcul des prix totaux et la recherche des produits en faible stock.
# Explication : 


