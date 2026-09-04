# PROMPT MAÎTRE — les 24 photos de profil et bannières du parcours Medeos · à coller dans ChatGPT en mode Agent

> Ce fichier contient les photos de profil et les bannières des 22 mondes, et les insignes des étudiants Medeos. Les cinq décors de stage ont leur propre fichier, `PROMPT-CHATGPT-STAGES.md`, déjà livré.

Tu travailles en mode Agent, de façon autonome : tu génères une image à la fois, tu vérifies chaque fichier par du code, tu ne poses aucune question. **Ne fais aucun commit git, ne déploie rien, ne modifie et ne supprime aucun fichier existant.**

---

## 0. Le dossier de livraison — à vérifier AVANT de générer quoi que ce soit

Les 24 images vont dans **un seul dossier, déjà existant, sur le Mac de Lucas** :

```
/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```

C'est le dossier qui contient **ce fichier de consignes** (`PROMPT-CHATGPT-IMAGES.md`). Il contient déjà `monde-01.webp` … `monde-22.webp`, `camp-stage.webp`, `stage-toussaint.webp` et les autres décors de stage.

**Étape 1 — vérifie qu'il existe et que c'est lui :**
```
ls /Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/ | head -40
```
**Étape 2 — si la commande échoue, cherche-le :**
```
find /Users/lucascrepin -type d -name territoires -path "*parcours-p1-app*" 2>/dev/null
```
**Étape 3 — si tu n'as pas accès au disque du Mac** : ne bloque pas. Crée un dossier `medeos-images-parcours` là où tu peux écrire, mets-y les 24 fichiers avec leurs noms exacts, et dis-le clairement à la fin (ou fournis une archive `.zip`). Lucas les déposera lui-même.

**Les 24 noms attendus, pour cocher à la fin :**
```
badge-certifie.png  ban-medeos.png  ban-certifie.png
av-monde-02.png  av-monde-04.png  av-monde-06.png  av-monde-08.png  av-monde-10.png  av-monde-12.png
av-monde-14.png  av-monde-16.png  av-monde-18.png  av-monde-20.png  av-monde-22.png
ban-monde-03.png  ban-monde-05.png  ban-monde-07.png  ban-monde-09.png  ban-monde-11.png
ban-monde-13.png  ban-monde-15.png  ban-monde-17.png  ban-monde-19.png  ban-monde-21.png
```

---

## 1. LE GABARIT — la règle qui passe avant tout le reste

L'application affiche déjà des photos de profil et des bannières, à beaucoup d'endroits (en-tête, profil, classement, vestiaire, carte). **Les tiennes doivent être indiscernables de celles qui existent** : même format, même cadrage, même taille du personnage. Une image cadrée autrement ressortira faux partout.

### Regarde d'abord les références, avant de générer quoi que ce soit

```
/Users/lucascrepin/dev/parcours-p1-app/img/profil/av-primant.png     ← photo de profil de référence
/Users/lucascrepin/dev/parcours-p1-app/img/profil/av-flamme.png      ← même gabarit, autre expression
/Users/lucascrepin/dev/parcours-p1-app/img/profil/av-curieux.png     ← même gabarit, avec un accessoire
/Users/lucascrepin/dev/parcours-p1-app/img/profil/ban-or.jpg         ← bannière de référence
/Users/lucascrepin/dev/parcours-p1-app/img/arene-anatomie.jpg        ← bannière de référence, avec la mascotte
```

Ouvre-les. Garde `av-primant.png` sous les yeux pour chaque photo, `ban-or.jpg` pour chaque bannière.

### Le gabarit d'une PHOTO DE PROFIL

- **512×512, carré, opaque.** Pas de transparence.
- **Fond uni**, une seule couleur douce, avec au plus un léger dégradé radial (comme `av-primant.png`). **Aucun décor derrière**, aucun objet, aucune ombre portée sur le fond.
- **Aucun écusson, aucune bordure, aucun cadre rond.** L'app découpe elle-même l'image en rond ou en carré arrondi. Une bordure dessinée ferait un double cadre.
- **Axo en buste, de face légèrement de trois quarts, qui remplit le cadre** exactement comme dans la référence : le sommet du crâne vers **15 %** de la hauteur, les yeux **à mi-hauteur**, le menton vers **65 %**, les branchies violettes qui **touchent presque les bords** gauche et droit, la tenue (blouse ou costume du thème) visible dans le bas du cadre jusqu'au bord inférieur.
- **Lumière** douce venant du haut à gauche, comme dans la référence. Rendu 3D de peluche mate.
- **Ce qui change d'une photo à l'autre : la tenue, l'accessoire, l'expression, la couleur du fond.** Rien d'autre.

### Le gabarit d'une BANNIÈRE

- **1536×864, format 16:9, opaque.** C'est le format des bannières déjà en place.
- Style **peint, doux, lumineux**, dans l'esprit de `ban-or.jpg` : un paysage, une scène, des couleurs chaudes.
- L'app affiche la bannière derrière un pseudo, et souvent **en bande très étroite** (l'en-tête ne montre qu'une tranche horizontale au milieu). Donc : **les éléments importants dans la bande centrale, entre 35 % et 65 % de la hauteur**, et **la moitié gauche calme et peu contrastée** — un pseudo blanc s'y écrit.
- **Aucun texte.** Axo peut y figurer, petit, sur le tiers droit (comme dans `arene-anatomie.jpg`), ou pas du tout.

### La mascotte — Axo

Axolotl debout, bipède, de style peluche 3D : corps blanc crème très clair, mat, presque porcelaine ; **trois panaches de branchies violettes** (`#6B46C1`) de chaque côté de la tête, nets et bien visibles — c'est son signe distinctif ; grands yeux ronds violet foncé brillants avec un reflet blanc, petits sourcils, joues orangées, petit sourire ; petites mains à quatre doigts ; parfois une **petite blouse blanche de médecin** ouverte. Exactement le personnage de `av-primant.png`. **Il doit être strictement le même d'une image à l'autre** : mêmes branchies, même visage, mêmes proportions. Seuls changent la tenue, l'accessoire et l'expression.

Palette Medeos : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`.

### La règle du parcours — pour comprendre ce que tu dessines

Le parcours compte **22 mondes**. Chaque monde terminé fait gagner **une seule image**, en alternance : les mondes **pairs** (2, 4 … 22) une **photo de profil** — Axo costumé dans le thème du monde ; les mondes **impairs** (3, 5 … 21) une **bannière** — le paysage du monde. Les **insignes des étudiants Medeos** sont à part : réservés aux élèves des stages.

---

## 2. Les prompts, image par image

Chaque bloc est un prompt complet. Tu le colles tel quel, tu génères, tu contrôles, tu enregistres sous le nom indiqué.

### A. Les insignes des étudiants Medeos (année complète)

> La photo de profil « Étudiant Medeos » existe déjà (`img/profil/av-curieux.png`, Axo à lunettes avec son livre) et l'app dessine elle-même un cadre doré autour : **ne la génère pas**. Il reste la photo « certifié », et les deux bannières.

**`badge-certifie.png` — photo de profil, 512×512, opaque**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni en dégradé radial du violet profond #4C2A85 (bords) vers l'or chaud #FCD34D (centre, discret). Axo (identique à av-primant.png : blanc crème, branchies violettes, grands yeux, joues orangées) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, blouse blanche visible en bas. Il tient un petit diplôme roulé noué d'un ruban doré, et porte une toute petite couronne de laurier dorée posée sur le haut de la tête, entre les branchies. Expression radieuse. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`ban-medeos.png` — bannière, 1536×864, opaque — LA plus belle du jeu**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint riche et lumineux, plus travaillé que ban-or.jpg : c'est la bannière des élèves des stages Medeos, elle doit être la plus stylée de toutes, celle qu'on veut afficher. Un ciel de nuit en dégradé profond du violet #4C2A85 (à gauche) vers un or chaud #FCD34D et miel #B8895A (à droite), traversé de fines volutes dorées et d'une pluie d'éclats et de particules d'or en suspension, un très léger motif de losanges dans le fond, un halo doré qui monte de la droite. Sur le tiers droit, dans la bande centrale de la hauteur, Axo en pied, petit (axolotl peluche blanc crème, branchies violettes, blouse blanche de médecin), debout sur une dalle de pierre claire cerclée d'or, qui lève le poing en signe de victoire, quelques éclats dorés autour de lui. La moitié gauche reste calme, sombre et peu contrastée : un pseudo blanc s'y écrira. Les éléments importants entre 35 % et 65 % de la hauteur. Rendu premium, matières satinées, lumière chaude.
Aucun texte.
```

**`ban-certifie.png` — bannière, 1536×864, opaque**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Le même dégradé violet profond #4C2A85 vers miel #B8895A que ban-medeos.png, plus riche : volutes de laurier dorées dans les angles, léger halo doré. Sur le tiers droit, dans la bande centrale, Axo en pied, petit, en blouse blanche, tenant son diplôme roulé. La moitié gauche reste calme et peu contrastée : un pseudo blanc s'y écrira. Les éléments importants entre 35 % et 65 % de la hauteur.
Aucun texte.
```

### B. Les onze photos de profil des mondes pairs — Axo costumé dans le thème

Toutes suivent **exactement** le gabarit de `av-primant.png`. Le fond change de couleur selon le thème ; Axo reste le même, seuls la tenue, l'accessoire et l'expression racontent le monde.

**`av-monde-02.png` — monde 2, Les Briques du Vivant**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni ocre doux #E8C9A0 avec léger dégradé radial. Axo (identique à av-primant.png : blanc crème, branchies violettes, grands yeux, joues orangées) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En tenue de bâtisseur : un casque de chantier doré posé sur la tête entre les branchies, une salopette de travail, une petite brique dorée tenue à deux mains. Expression appliquée et souriante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-04.png` — monde 4, La Cité Cellulaire**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni vert d'eau doux #CBE8D4 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En explorateur de la cellule : blouse blanche, une loupe dorée tenue devant lui, une petite sphère verte translucide qui flotte près de sa main. Expression curieuse, un œil agrandi par la loupe. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-06.png` — monde 6, Les Acides et les Bases**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni rose pâle #F3CFE0 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En chimiste : blouse blanche, lunettes de protection relevées sur le front, une fiole rose dans une main et une fiole bleue dans l'autre. Expression concentrée et amusée. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-08.png` — monde 8, La Transmission**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni lavande #D9D0F2 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En généticien : blouse blanche, une petite double hélice dorée enroulée autour de son avant-bras, qu'il regarde avec émerveillement. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-10.png` — monde 10, Les Grands Flux**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni bleu clair #CFE3F5 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En plongeur : masque de plongée relevé sur le front, combinaison bleu nuit à liserés dorés, une grosse goutte d'eau dorée tenue entre les mains. Expression joyeuse. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-12.png` — monde 12, Le Feu Intérieur**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni orange chaud #F5C48F avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En forgeron : tablier de cuir miel #B8895A, un petit marteau doré posé sur l'épaule, une lueur orangée douce sur le visage. Expression déterminée et souriante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-14.png` — monde 14, La Charpente**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni beige pierre #E9DCC3 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En architecte : chemise claire, un plan roulé sous le bras, un compas doré à la main. Expression sérieuse et bienveillante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-16.png` — monde 16, Le Mouvement**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni vert tendre #D3E9B8 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En sportif : bandeau doré sur le front, maillot violet #6B46C1, une écharpe violette qui flotte. Expression dynamique, grand sourire. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-18.png` — monde 18, Le Cerveau**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni jaune pâle #F6E7A8 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En savant : blouse blanche, petites lunettes rondes dorées, un petit éclair doré qui brille juste au-dessus de la tête. Expression d'illumination, sourire ouvert. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-20.png` — monde 20, L'Ouïe**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni turquoise doux #C6E6E4 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En musicien : un casque audio doré posé sur la tête, les branchies bien visibles autour, une note de musique dorée qui flotte près de la joue. Expression rêveuse, yeux mi-clos, sourire. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`av-monde-22.png` — monde 22, Le Vivant en Molécules**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni en dégradé radial du crème #FAF6F0 vers un or discret #FCD34D au centre — c'est le dernier monde. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords, tenue visible en bas. En blouse blanche de laboratoire, tenant à deux mains une molécule dorée faite d'anneaux hexagonaux reliés. Expression fière et apaisée. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

### C. Les dix bannières des mondes impairs — le paysage du monde

Toutes suivent **exactement** le gabarit de `ban-or.jpg` : 1536×864, opaque, style peint doux et lumineux. Avant chacune, regarde le diorama du monde dans le dossier (`monde-03.webp`, `monde-05.webp`…) : la bannière en reprend l'esprit, en paysage. **Éléments importants dans la bande centrale (35 % à 65 % de la hauteur), moitié gauche calme.**

**`ban-monde-03.png` — monde 3, La Colonne Vertébrale**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un paysage de falaise claire à l'aube ; sur le tiers droit, dans la bande centrale de la hauteur, une haute tour de pierre faite de vertèbres empilées, dressée comme un phare, dans l'esprit de monde-03.webp. Ciel rose pâle dégradé. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-05.png` — monde 5, Le Nuage d'Électrons**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un ciel de nuages dorés et doux ; sur le tiers droit, dans la bande centrale, un petit soleil-noyau entouré de minuscules sphères en orbite sur des anneaux fins, dans l'esprit de monde-05.webp. Tons violet pâle et or. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-07.png` — monde 7, Le Cycle de la Vie**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un jardin rond et fleuri au printemps ; sur le tiers droit, dans la bande centrale, une roue de moulin en bois miel qui tourne sur un ruisseau, dans l'esprit de monde-07.webp. Verts tendres et or. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-09.png` — monde 9, Le Cœur**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un soir chaud, ciel orangé vers violet ; sur le tiers droit, dans la bande centrale, une citadelle de pierre rouge sombre à quatre salles, deux grands canaux qui y entrent et en sortent, dans l'esprit de monde-09.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-11.png` — monde 11, Le Souffle**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un plateau venteux au matin, nuages effilés ; sur le tiers droit, dans la bande centrale, deux grands moulins à voiles crème, dans l'esprit de monde-11.webp. Bleu très pâle et crème. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-13.png` — monde 13, Les Filtres**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Une colline douce ; sur le tiers droit, dans la bande centrale, des bassins en terrasses qui descendent la pente, l'eau plus claire à chaque niveau, dans l'esprit de monde-13.webp. Turquoise et pierre claire. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-15.png` — monde 15, La Forge**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. La tombée du jour, ciel violet profond #4C2A85 ; sur le tiers droit, dans la bande centrale, une forge de pierre, cheminée fumante, lueur orangée à la porte, quelques étincelles dorées, dans l'esprit de monde-15.webp. La moitié gauche reste calme, sombre et peu contrastée. Aucun texte.
```

**`ban-monde-17.png` — monde 17, Le Réseau Nerveux**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Une vallée de nuit, ciel violet profond étoilé ; sur le tiers droit, dans la bande centrale, un réseau de fils dorés lumineux tendus entre des tours fines, dans l'esprit de monde-17.webp. La moitié gauche reste calme, sombre et peu contrastée. Aucun texte.
```

**`ban-monde-19.png` — monde 19, La Vision**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. Un crépuscule sur une mer calme, violet et or ; sur le tiers droit, dans la bande centrale, un phare à grande lentille sur un promontoire, un faisceau doré qui balaie la mer, dans l'esprit de monde-19.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-21.png` — monde 21, La Thyroïde**
```
Bannière Medeos 1536×864, format 16:9, opaque, style peint doux et lumineux comme ban-or.jpg. L'heure dorée, ciel chaud ; sur le tiers droit, dans la bande centrale, un jardin en forme de papillon — deux ailes de parterres fleuris dorés — au pied d'une tour claire, dans l'esprit de monde-21.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

---

## 3. Comment travailler

- Ordre : A (insignes) → B (photos) → C (bannières).
- **Avant la première photo**, ouvre `av-primant.png`, `av-flamme.png`, `av-curieux.png` et note ce qu'elles ont en commun : c'est ça qu'on veut, onze fois de plus.
- Après chaque image, contrôle **par du code** :
  - photo : exactement 512×512, opaque (pas de canal alpha, ou un canal entièrement opaque), aucun texte ; **les pixels violets des branchies (#6B46C1 et proches) s'étendent horizontalement jusqu'à moins de 6 % de chaque bord**, et **leur centre vertical se situe entre 35 % et 50 % de la hauteur** — si ce n'est pas le cas, le cadrage a dérivé : refais ;
  - bannière : exactement 1536×864, opaque, aucun texte ; la moitié gauche moins contrastée que la droite (écart-type de luminance plus faible).
- **Axo doit rester identique** d'une image à l'autre : compare chaque nouvelle photo à `av-primant.png`. Si les branchies changent de forme, si le visage change, refais.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les 24 fichiers dans le dossier de la section 0, avec leurs noms exacts. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `badge-certifie.png`.
