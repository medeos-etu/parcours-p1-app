# Les 12 bannières · consignes pour ChatGPT en mode Agent

> Les photos de profil des mondes, les insignes et les décors de stage sont livrés et en place. **Il reste douze bannières** : les dix des mondes impairs, et les deux bannières Étudiant Medeos à refaire au bon format. Ne régénère rien d'autre.

---

## 0. LE FORMAT — avant toute autre chose

Dans l'application, une bannière n'est **jamais** vue autrement qu'en **bande très fine**, derrière un pseudo : les barres font **presque six fois plus de large que de haut**. Une image haute y est coupée en haut et en bas et n'en montre qu'une tranche. **Les précédentes étaient beaucoup trop hautes : elles ne convenaient pas.**

Chaque bannière livrée doit donc faire **exactement 1536 pixels de large sur 256 pixels de haut** — un format **6:1, six fois plus large que haut**, une frise. Rien d'autre. **Jamais** de 16:9, **jamais** de trois-pour-un, **jamais** de carré, **jamais** d'étirement.

Ton outil d'image ne propose pas le 6:1. Alors : **génère au format paysage le plus large disponible** (1792×1024 ou 1536×1024), **composé comme une frise horizontale** — la ligne d'horizon et tout ce qui compte **au milieu de la hauteur** (entre 40 % et 60 %), du ciel uni au-dessus, du sol uni en dessous — puis **recadre par code, au centre, en 6:1** : on ne garde que la bande centrale. Voici le code, à exécuter tel quel sur chaque image :

```python
from PIL import Image

def livrer_banniere(src, dst):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    th = round(w / 6)                       # la hauteur d'un 6:1 pour cette largeur
    if h > th:                              # trop haut : on coupe en haut et en bas
        top = (h - th) // 2
        im = im.crop((0, top, w, top + th))
    else:                                   # trop large : on coupe à gauche et à droite
        tw = h * 6
        left = (w - tw) // 2
        im = im.crop((left, 0, left + tw, h))
    im = im.resize((1536, 256), Image.LANCZOS)
    im.save(dst, "PNG")
    assert Image.open(dst).size == (1536, 256), "mauvaise dimension"
```

**Avant d'enregistrer chaque fichier, vérifie par code que sa taille est (1536, 256).** Sinon, recadre. Une bannière d'une autre taille ne sera pas utilisée.

Une frise de 256 pixels de haut : **ce qui compte tient dans la bande, petit, posé sur la ligne d'horizon**. Un personnage y est minuscule et entier, jamais coupé.

---

## 1. Le dossier de livraison

Les douze fichiers vont dans **le dossier qui contient ce fichier de consignes**, sur le Mac de Lucas :

```
/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```

Vérifie que tu y es (`ls` : tu dois voir `monde-01.webp` … `monde-22.webp` et ce fichier). Si tu n'as pas accès au disque, écris dans un dossier `medeos-bannieres` et dis-le à la fin, ou fournis une archive `.zip`. Aucun sous-dossier ; ne renomme, ne remplace, ne supprime aucun fichier existant (tu peux écrire `ban-medeos.png` et `ban-certifie.png` : les versions en place sont des `.webp`, elles seront remplacées par Lucas) ; ne fais aucun commit, ne déploie rien.

**Les douze fichiers attendus :**
```
ban-medeos.png  ban-certifie.png
ban-monde-03.png  ban-monde-05.png  ban-monde-07.png  ban-monde-09.png  ban-monde-11.png
ban-monde-13.png  ban-monde-15.png  ban-monde-17.png  ban-monde-19.png  ban-monde-21.png
```

---

## 2. Le gabarit d'une bannière

Regarde d'abord la référence de style : `/Users/lucascrepin/dev/parcours-p1-app/img/profil/ban-or.jpg` — peint, doux, lumineux, un paysage.

Sur chacune :
- **format 6:1**, une frise : la scène entière dans la bande, l'horizon au milieu ;
- les éléments importants **sur le tiers droit** ; **la moitié gauche calme et peu contrastée** — un pseudo blanc s'y écrit ;
- style **peint, doux, lumineux**, couleurs chaudes, palette Medeos : crème `#FAF6F0` · or `#FCD34D` · miel `#B8895A` · violet `#6B46C1` · violet profond `#4C2A85` · terracotta `#E29C5C` ;
- **aucun texte, aucune lettre, aucun chiffre** ;
- pour les mondes, l'esprit du diorama du monde (`monde-NN.webp`, dans le dossier) : ouvre-le avant de générer.

La mascotte, quand elle apparaît : Axo, axolotl peluche 3D, corps blanc crème mat, trois panaches de branchies violettes `#6B46C1` de chaque côté de la tête, grands yeux violet foncé, joues orangées, petit sourire, petite blouse blanche. **Minuscule et entier**, posé sur la ligne d'horizon, jamais coupé.

---

## 3. Les douze prompts

Chaque bloc est un prompt complet : colle-le, génère, recadre par code, vérifie (1536, 256), enregistre sous le nom indiqué.

### Les deux bannières Étudiant Medeos — les plus belles du jeu

**`ban-medeos.png`**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint riche et lumineux : la bannière des élèves des stages Medeos, la plus stylée de toutes. Un ciel en dégradé du violet profond #4C2A85 (à gauche) vers un or chaud #FCD34D et miel #B8895A (à droite), de fines volutes dorées, une pluie d'éclats et de particules d'or en suspension, un très léger motif de losanges, un halo doré qui monte de la droite. Sur le tiers droit, MINUSCULE et ENTIER, posé sur la ligne d'horizon, Axo (axolotl peluche blanc crème, branchies violettes, blouse blanche) debout sur une dalle de pierre claire cerclée d'or, qui lève le poing en signe de victoire. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. La moitié gauche reste calme, sombre et peu contrastée : un pseudo blanc s'y écrira. Aucun texte.
```

**`ban-certifie.png`**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint riche et lumineux. Le même dégradé violet profond #4C2A85 vers miel #B8895A que ban-medeos.png, plus riche : volutes de laurier dorées aux deux extrémités, léger halo doré. Sur le tiers droit, MINUSCULE et ENTIER, posé sur la ligne d'horizon, Axo en blouse blanche tenant un diplôme roulé noué d'or, une petite couronne de laurier dorée sur la tête. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

### Les dix bannières des mondes impairs

**`ban-monde-03.png` — monde 3, La Colonne Vertébrale**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Une falaise claire à l'aube ; sur le tiers droit, dans la bande centrale, une tour de pierre faite de vertèbres empilées, dressée comme un phare, dans l'esprit de monde-03.webp. Ciel rose pâle. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-05.png` — monde 5, Le Nuage d'Électrons**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Un ciel de nuages dorés ; sur le tiers droit, dans la bande centrale, un petit soleil-noyau entouré de minuscules sphères en orbite sur des anneaux fins, dans l'esprit de monde-05.webp. Violet pâle et or. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-07.png` — monde 7, Le Cycle de la Vie**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Un jardin fleuri au printemps ; sur le tiers droit, dans la bande centrale, une roue de moulin en bois miel qui tourne sur un ruisseau, dans l'esprit de monde-07.webp. Verts tendres et or. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-09.png` — monde 9, Le Cœur**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Un soir chaud, ciel orangé vers violet ; sur le tiers droit, dans la bande centrale, une citadelle de pierre rouge sombre à quatre salles, deux canaux qui y entrent et en sortent, dans l'esprit de monde-09.webp. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-11.png` — monde 11, Le Souffle**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Un plateau venteux au matin ; sur le tiers droit, dans la bande centrale, deux moulins à voiles crème, nuages effilés, dans l'esprit de monde-11.webp. Bleu très pâle et crème. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-13.png` — monde 13, Les Filtres**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Une colline douce ; sur le tiers droit, dans la bande centrale, des bassins en terrasses qui descendent la pente, l'eau plus claire à chaque niveau, dans l'esprit de monde-13.webp. Turquoise et pierre claire. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-15.png` — monde 15, La Forge**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. La tombée du jour, ciel violet profond #4C2A85 ; sur le tiers droit, dans la bande centrale, une forge de pierre, cheminée fumante, lueur orangée à la porte, étincelles dorées, dans l'esprit de monde-15.webp. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme, sombre, peu contrastée. Aucun texte.
```

**`ban-monde-17.png` — monde 17, Le Réseau Nerveux**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Une vallée de nuit, ciel violet profond étoilé ; sur le tiers droit, dans la bande centrale, un réseau de fils dorés lumineux tendus entre des tours fines, dans l'esprit de monde-17.webp. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme, sombre, peu contrastée. Aucun texte.
```

**`ban-monde-19.png` — monde 19, La Vision**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. Un crépuscule sur une mer calme, violet et or ; sur le tiers droit, dans la bande centrale, un phare à grande lentille sur un promontoire, un faisceau doré sur la mer, dans l'esprit de monde-19.webp. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

**`ban-monde-21.png` — monde 21, La Thyroïde**
```
Image PAYSAGE très large en frise, format final 6:1 (1536 pixels de large sur 256 de haut), opaque, style peint doux et lumineux comme ban-or.jpg. L'heure dorée ; sur le tiers droit, dans la bande centrale, un jardin en forme de papillon — deux ailes de parterres fleuris dorés — au pied d'une tour claire, dans l'esprit de monde-21.webp. Composée en frise : horizon au milieu, ciel uni au-dessus, sol uni en dessous, tout ce qui compte entre 40 % et 60 % de la hauteur générée. Moitié gauche calme et peu contrastée. Aucun texte.
```

---

## 4. Comment travailler

- Dans l'ordre : `ban-medeos`, `ban-certifie`, puis 03, 05, 07, 09, 11, 13, 15, 17, 19, 21.
- Pour chaque image : génère en paysage large, composé en frise → applique `livrer_banniere` → vérifie par code `(1536, 256)`, opaque, aucun texte → enregistre.
- Contrôle aussi que la moitié gauche est moins contrastée que la droite (écart-type de luminance plus faible).
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les douze fichiers dans le dossier de la section 1. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits **avec leurs dimensions**, et celle des manqués s'il y en a.

Commence par `ban-medeos.png`.
