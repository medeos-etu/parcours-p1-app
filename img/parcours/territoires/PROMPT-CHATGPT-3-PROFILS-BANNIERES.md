# PROMPT MAÎTRE nº 3 — les photos de profil et les bannières · à coller dans ChatGPT en mode Agent

Tu as déjà produit les 43 dioramas et décors du « parcours des mondes » de l'application **Medeos**. Ils sont en place et le rendu est exactement celui attendu. **Reprends très exactement la même direction artistique** et produis maintenant les récompenses du parcours et les insignes des étudiants Medeos.

Tu travailles en mode Agent, de façon autonome : tu génères une par une, tu vérifies chaque fichier par du code, tu ne poses aucune question, et tu enregistres tout dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`.

## 1. La direction artistique — « Atlas Medeos » (inchangée)

3D isométrique, style jeu mobile premium (référence Clash Royale). Formes rondes et pleines, matières lisses légèrement mates, aucun réalisme photographique. Lumière chaude venant du haut à gauche, ombres portées courtes, léger contre-jour doré sur les arêtes.

Palette : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`.

**Règles absolues :** aucun texte, aucune lettre, aucun chiffre · fond parfaitement transparent quand c'est indiqué (PNG avec canal alpha, vérifié au damier) · sujet centré · nom de fichier exactement conforme.

## 2. LA MASCOTTE — à lire avant tout le reste

La mascotte de Medeos s'appelle **Axo**. C'est un **axolotl debout, bipède, de style peluche 3D** :

- corps blanc crème très clair, doux, presque en porcelaine mate ;
- **branchies externes violettes** (`#6B46C1`) de chaque côté de la tête, en trois panaches plumeux — c'est son signe distinctif, il doit être net et bien visible ;
- grands yeux ronds noirs brillants avec un reflet blanc, expression douce et bienveillante, petit sourire ;
- petits bras et petites mains à quatre doigts, pattes courtes, queue plate d'axolotl ;
- proportions de peluche : grosse tête, petit corps, environ deux têtes de haut ;
- il porte parfois une **petite blouse blanche de médecin** ouverte.

Elle apparaît dans la plupart des images ci-dessous. **Elle doit être strictement la même d'une image à l'autre** : mêmes couleurs, mêmes branchies, même visage. Avant chaque nouvelle image avec la mascotte, compare-la à la précédente.

**Commence par la planche de référence** `axo-reference.png`, 1024×1024, fond transparent, la mascotte debout de trois quarts, bras le long du corps, expression neutre et souriante, sans décor. Si ce fichier existe déjà dans le dossier, reprends-le tel quel et ne le refais pas. C'est ton modèle pour tout le reste.

## 3. La règle du parcours — pour comprendre ce que tu dessines

Le parcours compte **22 mondes**, que l'élève gravit de bas en haut. Chaque monde terminé fait gagner **une seule chose**, en alternance :

| Monde | Ce qu'il fait gagner | Fichier |
|---|---|---|
| 1 | rien — c'est le point de départ | — |
| 2, 4, 6 … 22 (les pairs) | **une photo de profil** : l'écusson d'Axo dans le thème du monde | `av-monde-NN.png` |
| 3, 5, 7 … 21 (les impairs) | **une bannière** : le paysage du monde | `ban-monde-NN.png` |

Donc **onze photos de profil** (mondes pairs) et **dix bannières** (mondes impairs). Les insignes des étudiants Medeos, eux, ne se gagnent pas sur la route : ils sont réservés aux élèves qui ont rejoint les stages.

## 4. Ce qu'il faut produire

### A. Les insignes des étudiants Medeos — les plus importants

Ce sont des **écussons ronds**, lisibles à 44 pixels : bordure épaisse, sujet central simple, fort contraste. Ils servent de photo de profil, et leurs bannières passent derrière le pseudo.

| # | Fichier | Format | Sujet |
|---|---|---|---|
| 1 | `badge-etudiant.png` | 512×512, transparent | Écusson rond bombé, bordure dorée épaisse et brillante, fond violet profond dégradé (`#4C2A85` vers `#6B46C1`). **Au centre, la mascotte Axo en buste**, souriante, portant sa petite blouse blanche de médecin. Une petite étoile dorée en haut de l'écusson. C'est le badge des élèves des stages Medeos : il doit donner envie. |
| 2 | `badge-certifie.png` | 512×512, transparent | Le même écusson, version supérieure : bordure en **couronne de laurier dorée**, fond violet profond plus riche, **Axo en buste au centre portant sa blouse et tenant un petit diplôme roulé**, une couronne dorée discrète au sommet, un ruban doré en bas. C'est le badge « élève certifié Medeos », le plus rare de tous. |
| 3 | `ban-medeos.png` | 1200×400, **opaque** | Bannière « Étudiant Medeos » : dégradé violet profond vers miel, motif de losanges très discret, quelques éclats dorés, et **Axo en pied, petit, sur le tiers droit**, en blouse, saluant. Le reste de la bannière reste calme et peu contrasté : un pseudo blanc s'écrit par-dessus, à gauche. |
| 4 | `ban-certifie.png` | 1200×400, **opaque** | La même, en plus riche : volutes de laurier dorées dans les angles, léger halo doré, **Axo en pied sur le tiers droit tenant son diplôme**. Centre-gauche calme. |

### B. Les onze photos de profil du parcours — Axo dans le thème de chaque monde pair

**Écusson rond**, même famille que les insignes : bordure dorée épaisse, fond crème `#FAF6F0`, 512×512, fond transparent autour de l'écusson. **Au centre, la mascotte Axo en buste, déguisée ou équipée selon le thème du monde.** Elle reste reconnaissable : mêmes branchies violettes, même visage.

| # | Fichier | Monde | Axo est… |
|---|---|---|---|
| 5 | `av-monde-02.png` | 2 · Les Briques du Vivant | en tenue de bâtisseur : casque de chantier doré, une petite brique dorée dans les mains. |
| 6 | `av-monde-04.png` | 4 · La Cité Cellulaire | en explorateur de la cellule : une loupe dorée à la main, une petite sphère verte translucide qui flotte à côté. |
| 7 | `av-monde-06.png` | 6 · Les Acides et les Bases | en chimiste : lunettes de protection sur le front, une fiole rose et une fiole bleue dans les mains. |
| 8 | `av-monde-08.png` | 8 · La Transmission | en généticien : une petite double hélice dorée enroulée autour de son bras. |
| 9 | `av-monde-10.png` | 10 · Les Grands Flux | en plongeur : masque relevé sur le front, une goutte d'eau dorée dans les mains. |
| 10 | `av-monde-12.png` | 12 · Le Feu Intérieur | en forgeron : tablier de cuir miel, un petit marteau doré sur l'épaule. |
| 11 | `av-monde-14.png` | 14 · La Charpente | en architecte : un plan roulé sous le bras, un compas doré à la main. |
| 12 | `av-monde-16.png` | 16 · Le Mouvement | en sportif : bandeau doré, il court, écharpe violette au vent. |
| 13 | `av-monde-18.png` | 18 · Le Cerveau | en savante : petites lunettes rondes dorées, un éclair doré au-dessus de la tête. |
| 14 | `av-monde-20.png` | 20 · L'Ouïe | en musicienne : un casque doré sur les oreilles, une note de musique dorée qui flotte. |
| 15 | `av-monde-22.png` | 22 · Le Vivant en Molécules | en blouse de laboratoire, tenant une molécule dorée à anneaux hexagonaux. |

### C. Les dix bannières du parcours — le paysage de chaque monde impair

Format **1200×400, opaque** (fond peint). Ce sont les fonds décoratifs qui passent derrière le pseudo : **peu contrastés, sujet léger sur le tiers droit, centre-gauche calme** pour que le texte blanc reste lisible. Chacune reprend le paysage du monde correspondant, dans l'esprit de son diorama (`monde-NN.png`, déjà dans le dossier : regarde-le avant de dessiner).

| # | Fichier | Monde | Le paysage |
|---|---|---|---|
| 16 | `ban-monde-03.png` | 3 · La Colonne Vertébrale | Une tour de pierre claire faite de vertèbres empilées, dressée sur une falaise comme un phare, ciel rose de l'aube. |
| 17 | `ban-monde-05.png` | 5 · Le Nuage d'Électrons | Un ciel de nuages dorés et doux, avec au loin un petit soleil-noyau entouré de minuscules sphères en orbite, violet pâle. |
| 18 | `ban-monde-07.png` | 7 · Le Cycle de la Vie | Une roue de moulin en bois miel qui tourne sur un ruisseau, dans un jardin rond et fleuri, lumière de printemps. |
| 19 | `ban-monde-09.png` | 9 · Le Cœur | Une citadelle de pierre rouge sombre à quatre salles, deux grands canaux qui y entrent et en sortent, soir chaud. |
| 20 | `ban-monde-11.png` | 11 · Le Souffle | Un plateau venteux avec deux grands moulins à voiles crème, nuages effilés, lumière fraîche du matin. |
| 21 | `ban-monde-13.png` | 13 · Les Filtres | Des bassins en terrasses qui descendent une colline, l'eau plus claire à chaque niveau, lumière douce. |
| 22 | `ban-monde-15.png` | 15 · La Forge | Une forge à la tombée du jour, cheminée fumante, lueur orangée à la porte, quelques étincelles dorées. |
| 23 | `ban-monde-17.png` | 17 · Le Réseau Nerveux | Une vallée de nuit avec un réseau de fils dorés lumineux tendus entre des tours, ciel violet profond. |
| 24 | `ban-monde-19.png` | 19 · La Vision | Un phare à grande lentille sur un promontoire, un faisceau doré sur la mer, crépuscule. |
| 25 | `ban-monde-21.png` | 21 · La Thyroïde | Un jardin en forme de papillon, deux ailes de fleurs dorées au pied d'une tour claire, heure dorée. |

## 5. Comment travailler

- Produis d'abord `axo-reference.png` (ou reprends-le s'il existe), puis les insignes (A), puis les photos de profil (B), puis les bannières (C).
- Après chaque image, contrôle **par du code** : dimensions exactes, canal alpha présent avec au moins 25 % de pixels totalement transparents pour les fichiers marqués « transparent », aucun texte visible, nom exact.
- **La mascotte doit rester identique** d'une image à l'autre : compare chaque nouvelle à `axo-reference.png` avant de valider. Si les branchies changent de couleur ou de forme, refais.
- Les écussons (A et B) forment une famille : même diamètre, même épaisseur de bordure, même angle de lumière.
- Les bannières (A et C) n'ont **aucun élément fort au centre-gauche** : un pseudo blanc s'y écrit.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les 25 fichiers (plus `axo-reference.png`) dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`, avec leurs noms exacts. **Ne fais aucun commit git, ne déploie rien, ne modifie aucun autre fichier.** Termine en me donnant la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `axo-reference.png`.
