# PROMPT MAÎTRE nº 2 — la mascotte et les cinq stages · à coller dans ChatGPT en mode Agent

> Les photos de profil, les bannières du parcours et les insignes des étudiants Medeos ont leur propre fichier : `PROMPT-CHATGPT-3-PROFILS-BANNIERES.md`. Celui-ci ne couvre que la mascotte de référence et les cinq décors de stage.

Tu as déjà produit les 43 dioramas et décors du « parcours des mondes » de l'application **Medeos**. Ils sont en place et le rendu est exactement celui attendu. **Reprends très exactement la même direction artistique** et produis maintenant la mascotte de référence et les cinq stages.

Tu travailles en mode Agent, de façon autonome : tu génères une par une, tu vérifies chaque fichier par du code, tu ne poses aucune question, et tu enregistres tout dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`.

## 1. La direction artistique — « Atlas Medeos » (inchangée)

3D isométrique, style jeu mobile premium (référence Clash Royale). Formes rondes et pleines, matières lisses légèrement mates, aucun réalisme photographique. Lumière chaude venant du haut à gauche, ombres portées courtes, léger contre-jour doré sur les arêtes.

Palette : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`.

**Règles absolues :** aucun texte, aucune lettre, aucun chiffre · fond parfaitement transparent (PNG avec canal alpha, vérifié au damier) · sujet centré · nom de fichier exactement conforme.

## 2. LA MASCOTTE — à lire avant tout le reste

La mascotte de Medeos s'appelle **Axo**. C'est un **axolotl debout, bipède, de style peluche 3D** :

- corps blanc crème très clair, doux, presque en porcelaine mate ;
- **branchies externes violettes** (`#6B46C1`) de chaque côté de la tête, en trois panaches plumeux — c'est son signe distinctif, il doit être net et bien visible ;
- grands yeux ronds noirs brillants avec un reflet blanc, expression douce et bienveillante, petit sourire ;
- petits bras et petites mains à quatre doigts, pattes courtes, queue plate d'axolotl ;
- proportions de peluche : grosse tête, petit corps, environ deux têtes de haut ;
- il porte parfois une **petite blouse blanche de médecin** ouverte.

**Commence par produire la planche de référence** `axo-reference.png`, 1024×1024, fond transparent, la mascotte debout de trois quarts, bras le long du corps, expression neutre et souriante, sans décor. Si ce fichier existe déjà dans le dossier, reprends-le tel quel et ne le refais pas. C'est le modèle de toutes les images où elle apparaît.

## 3. Les cinq stages — un décor par stage

Aujourd'hui les cinq stages partagent la même image de campement. Il en faut **un par stage**, avec la saison de chacun. Même format que les dioramas de mondes : **1024×1024, fond transparent, la scène posée sur une dalle ronde**. La mascotte n'y figure pas.

| # | Fichier | Stage | La scène |
|---|---|---|---|
| 1 | `stage-toussaint.png` | Toussaint, fin octobre | Un campement d'automne : deux tentes crème et or sous un grand arbre aux feuilles rousses et dorées, feuilles au sol, un feu de camp, une lanterne, un petit drapeau violet. Lumière chaude de fin d'après-midi. |
| 2 | `stage-noel.png` | Noël, fin décembre | Un campement d'hiver : tentes crème saupoudrées de neige, un sapin décoré de petites lumières dorées, un feu de camp vif, une lanterne, un drapeau violet, sol enneigé. |
| 3 | `stage-fevrier.png` | Février | Un refuge de montagne : un chalet de bois miel au toit enneigé, deux petits sapins, une luge appuyée contre le mur, un feu dehors, un drapeau violet. |
| 4 | `stage-paques.png` | Printemps, avril | Un campement de printemps : tentes crème et or dans une prairie fleurie, un cerisier en fleurs roses, quelques fleurs dorées, un ruisseau, un drapeau violet. |
| 5 | `stage-prerentree.png` | Pré-rentrée, août | Un camp d'été studieux, plus grand et plus solennel que les autres : un pavillon-bibliothèque de pierre claire à colonnes, une longue table de travail dessous, des livres empilés, deux lanternes, un drapeau violet, un olivier. C'est le dernier avant la rentrée : il doit paraître le plus abouti. |

## 4. Comment travailler

- Produis d'abord `axo-reference.png` (ou reprends-le s'il existe), puis les cinq stages dans l'ordre.
- Après chaque image, contrôle **par du code** : dimensions exactes, canal alpha présent avec au moins 25 % de pixels totalement transparents, aucun texte visible, nom exact.
- Les cinq stages forment une famille avec les dioramas de mondes déjà en place : même dalle ronde, même échelle, même angle de lumière. Regarde `camp-stage.png` et deux ou trois `monde-NN.png` du dossier avant de commencer.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les 6 fichiers dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`, avec leurs noms exacts. **Ne fais aucun commit git, ne déploie rien, ne modifie aucun autre fichier.** Termine en me donnant la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `axo-reference.png`.
