# PROMPT MAÎTRE nº 2 — les récompenses et les stages · à coller dans ChatGPT en mode Agent

Tu as déjà produit les 43 dioramas et décors du « parcours des mondes » de l'application **Medeos**. Ils sont en place et le rendu est exactement celui attendu. **Reprends très exactement la même direction artistique** et produis maintenant les récompenses, la mascotte et les cinq stages.

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

Elle apparaît dans une partie des images ci-dessous. **Elle doit être strictement la même d'une image à l'autre** : mêmes couleurs, mêmes branchies, même visage. Avant chaque nouvelle image avec la mascotte, compare-la à la précédente.

**Commence par produire une planche de référence** que tu garderas sous les yeux : `axo-reference.png`, 1024×1024, fond transparent, la mascotte debout de trois quarts, bras le long du corps, expression neutre et souriante, sans décor. C'est ton modèle pour tout le reste.

## 3. Ce qu'il faut produire

### A. Les cinq stages — un décor par stage

Aujourd'hui les cinq stages partagent la même image de campement. Il en faut **un par stage**, avec la saison de chacun. Même format que les dioramas de mondes : **1024×1024, fond transparent, la scène posée sur une dalle ronde**.

| # | Fichier | Stage | La scène |
|---|---|---|---|
| 1 | `stage-toussaint.png` | Toussaint, fin octobre | Un campement d'automne : deux tentes crème et or sous un grand arbre aux feuilles rousses et dorées, feuilles au sol, un feu de camp, une lanterne, un petit drapeau violet. Lumière chaude de fin d'après-midi. |
| 2 | `stage-noel.png` | Noël, fin décembre | Un campement d'hiver : tentes crème saupoudrées de neige, un sapin décoré de petites lumières dorées, un feu de camp vif, une lanterne, un drapeau violet, sol enneigé. |
| 3 | `stage-fevrier.png` | Février | Un refuge de montagne : un chalet de bois miel au toit enneigé, deux petits sapins, une luge appuyée contre le mur, un feu dehors, un drapeau violet. |
| 4 | `stage-paques.png` | Printemps, avril | Un campement de printemps : tentes crème et or dans une prairie fleurie, un cerisier en fleurs roses, quelques fleurs dorées, un ruisseau, un drapeau violet. |
| 5 | `stage-prerentree.png` | Pré-rentrée, août | Un camp d'été studieux, plus grand et plus solennel que les autres : un pavillon-bibliothèque de pierre claire à colonnes, une longue table de travail dessous, des livres empilés, deux lanternes, un drapeau violet, un olivier. C'est le dernier avant la rentrée : il doit paraître le plus abouti. |

### B. Les insignes Medeos — les plus importants

Ce sont des **écussons ronds**, lisibles à 44 pixels : bordure épaisse, sujet central simple, fort contraste. Ils servent de photo de profil.

| # | Fichier | Format | Sujet |
|---|---|---|---|
| 6 | `badge-etudiant.png` | 512×512, transparent | Écusson rond bombé, bordure dorée épaisse et brillante, fond violet profond dégradé (`#4C2A85` vers `#6B46C1`). **Au centre, la mascotte Axo en buste**, souriante, portant sa petite blouse blanche de médecin. Une petite étoile dorée en haut de l'écusson. C'est le badge des élèves des stages Medeos : il doit donner envie. |
| 7 | `badge-certifie.png` | 512×512, transparent | Le même écusson, version supérieure : bordure en **couronne de laurier dorée**, fond violet profond plus riche, **Axo en buste au centre portant sa blouse et tenant un petit diplôme roulé**, une couronne dorée discrète au sommet, un ruban doré en bas. C'est le badge « élève certifié Medeos », le plus rare de tous. |
| 8 | `ban-medeos.png` | 1200×400, **opaque** | Bannière « Étudiant Medeos » : dégradé violet profond vers miel, motif de losanges très discret, quelques éclats dorés, et **Axo en pied, petit, sur le tiers droit**, en blouse, saluant. Le reste de la bannière reste calme et peu contrasté : un pseudo blanc s'écrit par-dessus, à gauche. |
| 9 | `ban-certifie.png` | 1200×400, **opaque** | La même, en plus riche : volutes de laurier dorées dans les angles, léger halo doré, **Axo en pied sur le tiers droit tenant son diplôme**. Centre-gauche calme. |

### C. Les onze photos de profil du Parcours — Axo dans le thème de chaque monde

Une par deux mondes franchis. **Écusson rond**, même format que les insignes : bordure dorée épaisse, fond crème `#FAF6F0`. **Au centre, la mascotte Axo en buste, déguisée ou équipée selon le thème du monde correspondant.** Elle reste reconnaissable : mêmes branchies violettes, même visage.

| # | Fichier | Thème du monde | Axo est… |
|---|---|---|---|
| 10 | `av-monde-02.png` | Les Briques du Vivant | en tenue de bâtisseur : casque de chantier doré, une petite brique dorée dans les mains. |
| 11 | `av-monde-04.png` | La Cité Cellulaire | en explorateur de la cellule : une loupe dorée à la main, une petite sphère verte translucide qui flotte à côté. |
| 12 | `av-monde-06.png` | Les Acides et les Bases | en chimiste : lunettes de protection sur le front, une fiole rose et une fiole bleue dans les mains. |
| 13 | `av-monde-08.png` | La Transmission | en généticien : une petite double hélice dorée enroulée autour de son bras. |
| 14 | `av-monde-10.png` | Les Grands Flux | en plongeur : masque relevé sur le front, une goutte d'eau dorée dans les mains. |
| 15 | `av-monde-12.png` | Le Feu Intérieur | en forgeron : tablier de cuir miel, un petit marteau doré sur l'épaule. |
| 16 | `av-monde-14.png` | La Charpente | en architecte : un plan roulé sous le bras, un compas doré à la main. |
| 17 | `av-monde-16.png` | Le Mouvement | en sportif : bandeau doré, il court, écharpe violette au vent. |
| 18 | `av-monde-18.png` | Le Cerveau | en savante : petites lunettes rondes dorées, un éclair doré au-dessus de la tête. |
| 19 | `av-monde-20.png` | L'Ouïe | en musicienne : un casque doré sur les oreilles, une note de musique dorée qui flotte. |
| 20 | `av-monde-22.png` | Le Vivant en Molécules | en blouse de laboratoire, tenant une molécule dorée à anneaux hexagonaux. |

### D. Les onze bannières du Parcours — le paysage du monde

Format **paysage 3:1, opaque** (fond peint). Ce sont les fonds décoratifs qui passent derrière le pseudo : **peu contrastés, sujet léger sur le tiers droit, centre-gauche calme** pour que le texte blanc reste lisible. Chacune reprend le paysage du monde correspondant.

| # | Fichier | Le paysage |
|---|---|---|
| 21 | `ban-monde-02.png` | Un chantier au petit matin, briques dorées empilées, échafaudage, ciel rose pâle. |
| 22 | `ban-monde-04.png` | Une plaine verte avec un dôme de verre au loin, lumière douce. |
| 23 | `ban-monde-06.png` | Deux bassins, l'un rose l'autre bleu, un pont de pierre, ciel clair. |
| 24 | `ban-monde-08.png` | Deux tours reliées par une hélice dorée, au crépuscule violet. |
| 25 | `ban-monde-10.png` | Des aqueducs et des canaux, eau turquoise, lumière chaude rasante. |
| 26 | `ban-monde-12.png` | Une forge à la tombée du jour, cheminée fumante, lueur orangée. |
| 27 | `ban-monde-14.png` | Une forteresse claire sur une colline, ciel doré. |
| 28 | `ban-monde-16.png` | Un pont suspendu au-dessus d'un ravin, brume légère au fond. |
| 29 | `ban-monde-18.png` | Un observatoire au dôme plissé, nuit étoilée violette, lumière chaude aux fenêtres. |
| 30 | `ban-monde-20.png` | Une côte calme avec une grande coquille en spirale, lumière du soir. |
| 31 | `ban-monde-22.png` | Un jardin de molécules géantes au sommet d'une butte, ciel doré. |

## 4. Comment travailler

- Produis d'abord `axo-reference.png`, puis les cinq stages (section A), puis les insignes (B), puis les écussons (C), puis les bannières (D).
- Après chaque image, contrôle **par du code** : dimensions exactes, canal alpha présent avec au moins 25 % de pixels totalement transparents pour les fichiers marqués « transparent », aucun texte visible, nom exact.
- **La mascotte doit rester identique** d'une image à l'autre : compare chaque nouvelle à `axo-reference.png` avant de valider. Si les branchies changent de couleur ou de forme, refais.
- Les écussons (B et C) forment une famille : même diamètre, même épaisseur de bordure, même angle de lumière.
- Les bannières (B et D) n'ont **aucun élément fort au centre-gauche** : un pseudo blanc s'y écrit.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les 31 fichiers dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`, avec leurs noms exacts. **Ne fais aucun commit git, ne déploie rien, ne modifie aucun autre fichier.** Termine en me donnant la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `axo-reference.png`.
