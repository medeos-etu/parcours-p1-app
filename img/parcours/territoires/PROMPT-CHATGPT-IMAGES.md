# PROMPT MAÎTRE — les 31 images du parcours Medeos · à coller dans ChatGPT en mode Agent

> Ce fichier remplace `PROMPT-CHATGPT-2.md` et `PROMPT-CHATGPT-3-PROFILS-BANNIERES.md`. Il contient **tout** : la mascotte de référence, les insignes des étudiants Medeos, les récompenses des 22 mondes, et les cinq stages. Chaque image a son prompt complet, prêt à l'emploi.

Tu as déjà produit les 43 dioramas et décors du « parcours des mondes » de l'application **Medeos**. Ils sont en place et le rendu est exactement celui attendu. **Reprends très exactement la même direction artistique.**

Tu travailles en mode Agent, de façon autonome : tu génères une image à la fois, tu vérifies chaque fichier par du code, tu ne poses aucune question, et tu enregistres tout dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`. **Ne fais aucun commit git, ne déploie rien, ne modifie aucun autre fichier.**

---

## 0. Le dossier de livraison — à vérifier AVANT de générer quoi que ce soit

Les 31 images vont dans **un seul dossier, déjà existant, sur le Mac de Lucas** :

```
/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```

C'est le dossier qui contient **ce fichier de consignes** (`PROMPT-CHATGPT-IMAGES.md`). Pour être sûr que c'est le bon, il contient déjà, entre autres : `monde-01.webp` … `monde-22.webp`, `camp-stage.webp`, `rentree.webp`, `parcours-des-mondes.webp`, `PROMPT-CHATGPT.md`.

**Étape 1 — vérifie qu'il existe et que c'est lui :**
```
ls /Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/ | head -40
```
Tu dois voir les `monde-NN.webp`. Si oui, c'est là que tu écris, et nulle part ailleurs.

**Étape 2 — si la commande échoue, cherche-le :**
```
find /Users/lucascrepin -type d -name territoires -path "*parcours-p1-app*" 2>/dev/null
```
Le bon chemin se termine par `parcours-p1-app/img/parcours/territoires`. Utilise celui-là.

**Étape 3 — si tu n'as pas accès au disque du Mac** (la recherche ne rend rien, ou tu travailles dans un espace isolé) : ne bloque pas. Crée un dossier `medeos-images-parcours` là où tu peux écrire, mets-y les 31 fichiers avec leurs noms exacts, et **dis-le clairement à la fin** en donnant son emplacement (ou fournis une archive `.zip` à télécharger). Lucas les déposera lui-même.

**Règles du dossier :** aucun sous-dossier ; ne renomme, ne remplace et ne supprime aucun fichier existant ; un fichier par image, au format PNG, avec exactement le nom indiqué.

**Les 31 noms attendus, pour cocher à la fin :**
```
axo-reference.png
badge-etudiant.png  badge-certifie.png  ban-medeos.png  ban-certifie.png
av-monde-02.png  av-monde-04.png  av-monde-06.png  av-monde-08.png  av-monde-10.png  av-monde-12.png
av-monde-14.png  av-monde-16.png  av-monde-18.png  av-monde-20.png  av-monde-22.png
ban-monde-03.png  ban-monde-05.png  ban-monde-07.png  ban-monde-09.png  ban-monde-11.png
ban-monde-13.png  ban-monde-15.png  ban-monde-17.png  ban-monde-19.png  ban-monde-21.png
stage-toussaint.png  stage-noel.png  stage-fevrier.png  stage-paques.png  stage-prerentree.png
```

---

## 1. Ce que tu dois savoir avant de commencer

### La direction artistique — « Atlas Medeos »

3D isométrique, style jeu mobile premium (référence Clash Royale). Formes rondes et pleines, matières lisses légèrement mates, aucun réalisme photographique. Lumière chaude venant du haut à gauche, ombres portées courtes, léger contre-jour doré sur les arêtes.

Palette : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`.

**Règles absolues, pour toutes les images :** aucun texte, aucune lettre, aucun chiffre · fond parfaitement transparent quand c'est indiqué (PNG avec canal alpha, vérifié au damier) · sujet centré · nom de fichier exactement conforme.

### La mascotte — Axo

Axo est un **axolotl debout, bipède, de style peluche 3D** : corps blanc crème très clair, mat, presque porcelaine ; **trois panaches de branchies violettes** (`#6B46C1`) de chaque côté de la tête, nets et bien visibles — c'est son signe distinctif ; grands yeux ronds noirs brillants avec un reflet blanc, petit sourire doux ; petits bras à quatre doigts, pattes courtes, queue plate ; proportions de peluche, environ deux têtes de haut ; parfois une **petite blouse blanche de médecin** ouverte.

**Elle doit être strictement la même d'une image à l'autre.** Tu produis d'abord `axo-reference.png` (ou tu le reprends s'il existe déjà dans le dossier), et tu compares chaque nouvelle image avec lui avant de valider. Si les branchies changent de couleur ou de forme, tu refais.

### La règle du parcours — pour comprendre ce que tu dessines

Le parcours compte **22 mondes**, gravis de bas en haut. Chaque monde terminé fait gagner **une seule image**, en alternance :

| Monde | Ce qu'il fait gagner | Fichier |
|---|---|---|
| 1 | rien — c'est le point de départ | — |
| 2, 4, 6 … 22 (les onze pairs) | **une photo de profil** : l'écusson d'Axo dans le thème du monde | `av-monde-NN.png` |
| 3, 5, 7 … 21 (les dix impairs) | **une bannière** : le paysage du monde | `ban-monde-NN.png` |

Les **insignes des étudiants Medeos** ne se gagnent pas sur la route : ils sont réservés aux élèves qui ont rejoint les stages (l'année complète). Les **stages** sont des mondes à part, posés sur le chemin aux dates des vacances.

### Les trois formats

- **Écusson** (photos de profil et badges) : **512×512, fond transparent** autour d'un écusson rond bombé, bordure dorée épaisse et brillante, lisible à 44 pixels de large. Sujet central simple, fort contraste.
- **Bannière** : **1200×400, opaque** (fond peint). Elle passe derrière un pseudo écrit en blanc, à gauche : **sujet léger sur le tiers droit, centre-gauche calme et peu contrasté**.
- **Diorama** (stages) : **1024×1024, fond transparent**, la scène posée sur une dalle ronde de pierre claire, comme les `monde-NN.png` déjà dans le dossier.

---

## 2. Les prompts, image par image

Chaque bloc est un prompt complet. Tu le colles tel quel, tu génères, tu contrôles, tu enregistres sous le nom indiqué.

### E. La référence

**`axo-reference.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte.
Sujet : Axo, la mascotte de Medeos, seule, debout de trois quarts, bras le long du corps, expression neutre et souriante. Axolotl peluche 3D bipède : corps blanc crème mat presque porcelaine, trois panaches de branchies violettes #6B46C1 nets de chaque côté de la tête, grands yeux ronds noirs brillants avec reflet blanc, petit sourire, petits bras à quatre doigts, pattes courtes, queue plate, environ deux têtes de haut. Pas de blouse, pas d'accessoire, pas de décor.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

### A. Les insignes des étudiants Medeos (année complète)

**`badge-etudiant.png` — 512×512, transparent**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte, aucune lettre.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse et brillante, fond en dégradé violet profond #4C2A85 vers violet #6B46C1. Au centre, Axo en buste (identique à axo-reference.png : blanc crème, branchies violettes en trois panaches, grands yeux noirs, petit sourire), souriant, portant sa petite blouse blanche de médecin ouverte. Une petite étoile dorée en haut de l'écusson. Fort contraste, lisible en tout petit.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`badge-certifie.png` — 512×512, transparent**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte, aucune lettre.
Sujet : le même écusson rond bombé que badge-etudiant.png, en version supérieure : bordure en couronne de laurier dorée #FCD34D, fond violet profond #4C2A85 plus riche, une petite couronne dorée discrète au sommet, un ruban doré en bas. Au centre, Axo en buste (identique à axo-reference.png), souriant, en blouse blanche, tenant un petit diplôme roulé noué d'un ruban doré. C'est le badge le plus rare de tous.
Fond transparent autour de l'écusson, sujet centré, 512×512. Même diamètre, même épaisseur de bordure et même angle de lumière que badge-etudiant.png.
```

**`ban-medeos.png` — 1200×400, opaque**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, matières mates, lumière chaude haut-gauche. Aucun texte, aucune lettre.
Sujet : une bannière large 3:1, fond en dégradé violet profond #4C2A85 (à gauche) vers miel #B8895A (à droite), motif de losanges très discret dans le fond, quelques éclats dorés épars. Sur le tiers droit, Axo en pied, petit (identique à axo-reference.png), en blouse blanche, qui salue de la main. Le centre-gauche reste calme, sombre et peu contrasté : un pseudo blanc s'écrira par-dessus.
Image opaque, 1200×400.
```

**`ban-certifie.png` — 1200×400, opaque**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, matières mates, lumière chaude haut-gauche. Aucun texte, aucune lettre.
Sujet : la même bannière large 3:1 que ban-medeos.png, en plus riche : dégradé violet profond #4C2A85 vers miel #B8895A, volutes de laurier dorées dans les angles, léger halo doré. Sur le tiers droit, Axo en pied (identique à axo-reference.png), en blouse blanche, tenant son diplôme roulé. Le centre-gauche reste calme et peu contrasté : un pseudo blanc s'écrira par-dessus.
Image opaque, 1200×400.
```

### B. Les onze photos de profil — Axo dans le thème de chaque monde pair

Tous ces écussons forment une famille avec les badges : **même diamètre, même bordure dorée épaisse, même angle de lumière**, mais le fond de l'écusson est **crème `#FAF6F0`**. Axo est en buste, reconnaissable, déguisé selon le thème.

**`av-monde-02.png` — monde 2, Les Briques du Vivant**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png : blanc crème, branchies violettes, grands yeux noirs, petit sourire) en tenue de bâtisseur : casque de chantier doré, une petite brique dorée dans les mains.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-04.png` — monde 4, La Cité Cellulaire**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en explorateur de la cellule : une loupe dorée à la main, une petite sphère verte translucide qui flotte à côté de lui.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-06.png` — monde 6, Les Acides et les Bases**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en chimiste : lunettes de protection relevées sur le front, une fiole rose dans une main et une fiole bleue dans l'autre.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-08.png` — monde 8, La Transmission**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en généticien : une petite double hélice dorée enroulée autour de son bras, qu'il regarde avec curiosité.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-10.png` — monde 10, Les Grands Flux**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en plongeur : masque de plongée relevé sur le front, une grosse goutte d'eau dorée tenue entre les mains.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-12.png` — monde 12, Le Feu Intérieur**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en forgeron : tablier de cuir miel #B8895A, un petit marteau doré posé sur l'épaule, une lueur orangée douce venant d'en bas.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-14.png` — monde 14, La Charpente**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en architecte : un plan roulé sous le bras, un compas doré à la main.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-16.png` — monde 16, Le Mouvement**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en sportif : bandeau doré sur le front, en pleine course, une écharpe violette #6B46C1 qui flotte derrière lui.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-18.png` — monde 18, Le Cerveau**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en savant : petites lunettes rondes dorées, un petit éclair doré qui brille au-dessus de sa tête, air d'avoir compris quelque chose.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-20.png` — monde 20, L'Ouïe**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en musicien : un casque audio doré sur les oreilles, par-dessus les branchies bien visibles, une note de musique dorée qui flotte à côté.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

**`av-monde-22.png` — monde 22, Le Vivant en Molécules**
```
Style Atlas Medeos : rendu 3D de jeu mobile premium, formes rondes, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un écusson rond bombé, bordure dorée #FCD34D épaisse, fond crème #FAF6F0. Au centre, Axo en buste (identique à axo-reference.png) en blouse blanche de laboratoire, tenant à deux mains une molécule dorée faite d'anneaux hexagonaux reliés, air fier. C'est le dernier monde : l'écusson peut avoir un très léger halo doré.
Fond transparent autour de l'écusson, sujet centré, 512×512.
```

### C. Les dix bannières — le paysage de chaque monde impair

Avant chacune, regarde le diorama du monde dans le dossier (`monde-03.png`, `monde-05.png`…) : la bannière en reprend l'esprit, en paysage large. **Sujet sur le tiers droit, centre-gauche calme** : un pseudo blanc s'y écrit.

**`ban-monde-03.png` — monde 3, La Colonne Vertébrale**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, une haute tour de pierre claire faite de vertèbres empilées, dressée sur une falaise comme un phare, dans l'esprit de monde-03.png. Ciel rose pâle de l'aube, dégradé doux. Le centre-gauche reste calme, peu contrasté, sans élément fort.
Image opaque, 1200×400.
```

**`ban-monde-05.png` — monde 5, Le Nuage d'Électrons**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Un ciel de nuages dorés et doux ; sur le tiers droit, au loin, un petit soleil-noyau entouré de minuscules sphères en orbite sur des anneaux fins, dans l'esprit de monde-05.png. Tons violet pâle et or. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-07.png` — monde 7, Le Cycle de la Vie**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, une roue de moulin en bois miel #B8895A qui tourne sur un ruisseau, dans un jardin rond et fleuri, dans l'esprit de monde-07.png. Lumière de printemps, verts tendres et or. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-09.png` — monde 9, Le Cœur**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, une citadelle de pierre rouge sombre à quatre salles, avec deux grands canaux qui y entrent et en sortent, dans l'esprit de monde-09.png. Soir chaud, ciel orangé vers violet. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-11.png` — monde 11, Le Souffle**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, un plateau venteux avec deux grands moulins à voiles crème, des nuages effilés, dans l'esprit de monde-11.png. Lumière fraîche du matin, bleu très pâle et crème. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-13.png` — monde 13, Les Filtres**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, des bassins en terrasses qui descendent une colline, l'eau plus claire à chaque niveau, dans l'esprit de monde-13.png. Lumière douce, turquoise et pierre claire. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-15.png` — monde 15, La Forge**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, une forge de pierre à la tombée du jour, cheminée fumante, lueur orangée à la porte, quelques étincelles dorées, dans l'esprit de monde-15.png. Ciel violet profond #4C2A85. Le centre-gauche reste calme, sombre et peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-17.png` — monde 17, Le Réseau Nerveux**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage de nuit. Sur le tiers droit, un réseau de fils dorés lumineux tendus entre des tours fines, dans une vallée sombre, dans l'esprit de monde-17.png. Ciel violet profond étoilé. Le centre-gauche reste calme, sombre et peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-19.png` — monde 19, La Vision**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, un phare à grande lentille sur un promontoire, un faisceau doré qui balaie la mer, dans l'esprit de monde-19.png. Crépuscule, mer calme violet et or. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

**`ban-monde-21.png` — monde 21, La Thyroïde**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes, matières mates, lumière chaude. Aucun texte.
Sujet : une bannière large 3:1, paysage. Sur le tiers droit, un jardin en forme de papillon — deux ailes de parterres fleuris dorés — au pied d'une tour claire, dans l'esprit de monde-21.png. Heure dorée, ciel chaud. Le centre-gauche reste calme, peu contrasté.
Image opaque, 1200×400.
```

### D. Les cinq stages — un diorama par stage

Aujourd'hui les cinq stages partagent la même image de campement (`camp-stage.png`). Il en faut un par stage, avec sa saison. Même format que les dioramas de mondes : regarde `camp-stage.png` et deux ou trois `monde-NN.png` avant de commencer, pour garder **la même dalle ronde, la même échelle et le même angle**. La mascotte n'y figure pas.

**`stage-toussaint.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.png. Un campement d'automne : deux tentes crème et or sous un grand arbre aux feuilles rousses et dorées, des feuilles au sol, un feu de camp, une lanterne, un petit drapeau violet #6B46C1. Lumière chaude de fin d'après-midi.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-noel.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.png. Un campement d'hiver : tentes crème saupoudrées de neige, un sapin décoré de petites lumières dorées, un feu de camp vif, une lanterne, un drapeau violet #6B46C1, sol enneigé.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-fevrier.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.png. Un refuge de montagne : un chalet de bois miel #B8895A au toit enneigé, deux petits sapins, une luge appuyée contre le mur, un feu dehors, un drapeau violet #6B46C1.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-paques.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.png. Un campement de printemps : tentes crème et or dans une prairie fleurie, un cerisier en fleurs roses, quelques fleurs dorées, un petit ruisseau, un drapeau violet #6B46C1.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-prerentree.png` — 1024×1024, transparent**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières mates, lumière chaude haut-gauche. Aucun texte.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.png, plus grand et plus solennel que les autres stages. Un camp d'été studieux : un pavillon-bibliothèque de pierre claire à colonnes, une longue table de travail dessous avec des livres empilés, deux lanternes, un drapeau violet #6B46C1, un olivier. C'est le dernier avant la rentrée : il doit paraître le plus abouti.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

---

## 3. Comment travailler

- Ordre : `axo-reference.png` → A (insignes) → B (photos) → C (bannières) → D (stages).
- Après chaque image, contrôle **par du code** : dimensions exactes ; pour les fichiers marqués « transparent », canal alpha présent avec au moins 25 % de pixels totalement transparents ; aucun texte visible ; nom exact.
- **La mascotte reste identique** d'une image à l'autre : compare chaque nouvelle à `axo-reference.png`. Branchies violettes en trois panaches, visage, proportions. Si ça dérive, refais.
- Les écussons (A et B) forment une famille : même diamètre, même épaisseur de bordure, même angle de lumière.
- Les bannières (A et C) n'ont **aucun élément fort au centre-gauche**.
- Les stages (D) forment une famille avec les `monde-NN.png` : même dalle, même échelle.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les 31 fichiers dans le dossier de la section 0, avec leurs noms exacts. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `axo-reference.png`.

---

## 4. Ce qui se passe à la livraison (pour Lucas, pas pour ChatGPT)

Quand les fichiers sont dans le dossier, Claude : convertit en WebP, relance `outils/implante-parcours.js` (la table `VIGNETTES`), vérifie que chaque image s'affiche au bon endroit, et déploie. Ce qui se câble tout seul : `av-monde-NN` (photos des mondes pairs), `ban-monde-NN` (bannières des mondes impairs), `stage-*` (les cinq décors), `badge-etudiant` (photo « Étudiant Medeos »). Ce qui demande un branchement : `ban-medeos` (à mettre derrière la bannière « Étudiant Medeos », aujourd'hui un dégradé), et `badge-certifie` / `ban-certifie`, qui n'ont pas encore de condition d'obtention dans l'app — à décider (par exemple : stage terminé).
