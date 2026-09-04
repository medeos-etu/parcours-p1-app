# Les 10 bannières des mondes · consignes pour ChatGPT en mode Agent

> Tout le reste est livré et en place : les 11 photos de profil des mondes, les insignes Étudiant Medeos, les cinq décors de stage. **Il ne reste que ces dix bannières.** Ne régénère rien d'autre.

---

## 0. LES DIMENSIONS — avant toute autre chose

Chaque bannière livrée doit faire **exactement 1536 pixels de large sur 864 pixels de haut**. C'est un format **paysage 16:9** : presque deux fois plus large que haut (1536 ÷ 864 = 1,78). C'est le format de toutes les bannières déjà en place dans l'application (`ban-or.jpg` : 1400×788, `ban-medeos.webp` : 1536×864 — même proportion).

**Jamais** de 3:1, **jamais** de carré, **jamais** de portrait, **jamais** d'étirement.

Ton outil d'image ne propose peut-être pas le 16:9. Dans ce cas, **génère au format paysage le plus proche** (1536×1024, 1792×1024, ou ce qui existe), puis **recadre par code, au centre, en 16:9, et redimensionne à 1536×864** avant d'enregistrer. Voici le code, à exécuter tel quel sur chaque image :

```python
from PIL import Image

def livrer_banniere(src, dst):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    th = round(w * 9 / 16)
    if h > th:                              # trop haut : on coupe en haut et en bas
        top = (h - th) // 2
        im = im.crop((0, top, w, top + th))
    else:                                   # trop large : on coupe à gauche et à droite
        tw = round(h * 16 / 9)
        left = (w - tw) // 2
        im = im.crop((left, 0, left + tw, h))
    im = im.resize((1536, 864), Image.LANCZOS)
    im.save(dst, "PNG")
    assert Image.open(dst).size == (1536, 864), "mauvaise dimension"
```

**Avant d'enregistrer chaque fichier, vérifie par code que sa taille est (1536, 864).** Si ce n'est pas le cas, recadre. Une bannière d'une autre taille ne sera pas utilisée.

Comme le recadrage retire les bords hauts et bas, **compose la scène dans la bande centrale** : ce qui compte doit être entre 35 % et 65 % de la hauteur de l'image générée.

---

## 1. Le dossier de livraison

Les dix fichiers vont dans **le dossier qui contient ce fichier de consignes**, sur le Mac de Lucas :

```
/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```

Vérifie que tu y es (`ls` : tu dois voir `monde-01.webp` … `monde-22.webp`, `ban-medeos.webp`, et ce fichier). Si tu n'as pas accès au disque, écris dans un dossier `medeos-bannieres` et dis-le à la fin, ou fournis une archive `.zip`. Aucun sous-dossier ; ne renomme, ne remplace, ne supprime aucun fichier existant ; ne fais aucun commit, ne déploie rien.

**Les dix fichiers attendus :**
```
ban-monde-03.png  ban-monde-05.png  ban-monde-07.png  ban-monde-09.png  ban-monde-11.png
ban-monde-13.png  ban-monde-15.png  ban-monde-17.png  ban-monde-19.png  ban-monde-21.png
```

---

## 2. Le gabarit d'une bannière

Regarde d'abord les deux références, dans le dossier :
- `/Users/lucascrepin/dev/parcours-p1-app/img/profil/ban-or.jpg` — le style : peint, doux, lumineux, un paysage.
- `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/ban-medeos.webp` — la bannière Étudiant Medeos, livrée hier : c'est la qualité et la composition attendues (sujet à droite, gauche calme).

Une bannière passe **derrière un pseudo écrit en blanc, à gauche**, et souvent **en bande étroite** (l'en-tête n'en montre qu'une tranche horizontale au milieu). Donc, sur chacune :
- les éléments importants **sur le tiers droit** et **dans la bande centrale de la hauteur (35 % à 65 %)** ;
- **la moitié gauche calme et peu contrastée** — pas d'élément fort, pas de texte ;
- style **peint, doux, lumineux**, couleurs chaudes, palette Medeos : crème `#FAF6F0` · or `#FCD34D` · miel `#B8895A` · violet `#6B46C1` · violet profond `#4C2A85` · terracotta `#E29C5C` ;
- **aucun texte, aucune lettre, aucun chiffre** ;
- chaque bannière reprend **l'esprit du diorama de son monde** (`monde-NN.webp`, dans le dossier) : ouvre-le avant de générer.

Ces bannières se gagnent en terminant les mondes **impairs** du parcours (3, 5, 7 … 21) : le paysage du monde, offert à l'élève qui l'a traversé.

---

## 3. Les dix prompts

Chaque bloc est un prompt complet : colle-le, génère, recadre par code si nécessaire, vérifie (1536, 864), enregistre sous le nom indiqué.

**`ban-monde-03.png` — monde 3, La Colonne Vertébrale**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un paysage de falaise claire à l'aube ; sur le tiers droit, dans la bande centrale de la hauteur, une haute tour de pierre faite de vertèbres empilées, dressée comme un phare, dans l'esprit de monde-03.webp. Ciel rose pâle dégradé. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-05.png` — monde 5, Le Nuage d'Électrons**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un ciel de nuages dorés et doux ; sur le tiers droit, dans la bande centrale, un petit soleil-noyau entouré de minuscules sphères en orbite sur des anneaux fins, dans l'esprit de monde-05.webp. Tons violet pâle et or. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-07.png` — monde 7, Le Cycle de la Vie**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un jardin rond et fleuri au printemps ; sur le tiers droit, dans la bande centrale, une roue de moulin en bois miel qui tourne sur un ruisseau, dans l'esprit de monde-07.webp. Verts tendres et or. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-09.png` — monde 9, Le Cœur**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un soir chaud, ciel orangé vers violet ; sur le tiers droit, dans la bande centrale, une citadelle de pierre rouge sombre à quatre salles, deux grands canaux qui y entrent et en sortent, dans l'esprit de monde-09.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-11.png` — monde 11, Le Souffle**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un plateau venteux au matin, nuages effilés ; sur le tiers droit, dans la bande centrale, deux grands moulins à voiles crème, dans l'esprit de monde-11.webp. Bleu très pâle et crème. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-13.png` — monde 13, Les Filtres**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Une colline douce ; sur le tiers droit, dans la bande centrale, des bassins en terrasses qui descendent la pente, l'eau plus claire à chaque niveau, dans l'esprit de monde-13.webp. Turquoise et pierre claire. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-15.png` — monde 15, La Forge**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. La tombée du jour, ciel violet profond #4C2A85 ; sur le tiers droit, dans la bande centrale, une forge de pierre, cheminée fumante, lueur orangée à la porte, quelques étincelles dorées, dans l'esprit de monde-15.webp. La moitié gauche reste calme, sombre et peu contrastée. Aucun texte.
```

**`ban-monde-17.png` — monde 17, Le Réseau Nerveux**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Une vallée de nuit, ciel violet profond étoilé ; sur le tiers droit, dans la bande centrale, un réseau de fils dorés lumineux tendus entre des tours fines, dans l'esprit de monde-17.webp. La moitié gauche reste calme, sombre et peu contrastée. Aucun texte.
```

**`ban-monde-19.png` — monde 19, La Vision**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. Un crépuscule sur une mer calme, violet et or ; sur le tiers droit, dans la bande centrale, un phare à grande lentille sur un promontoire, un faisceau doré qui balaie la mer, dans l'esprit de monde-19.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

**`ban-monde-21.png` — monde 21, La Thyroïde**
```
Image PAYSAGE 16:9, 1536 pixels de large sur 864 pixels de haut, opaque, style peint doux et lumineux comme ban-or.jpg. L'heure dorée, ciel chaud ; sur le tiers droit, dans la bande centrale, un jardin en forme de papillon — deux ailes de parterres fleuris dorés — au pied d'une tour claire, dans l'esprit de monde-21.webp. La moitié gauche reste calme et peu contrastée. Aucun texte.
```

---

## 4. Comment travailler

- Dans l'ordre : 03, 05, 07, 09, 11, 13, 15, 17, 19, 21.
- Pour chaque image : génère → si la taille n'est pas 1536×864, applique `livrer_banniere` → vérifie par code `(1536, 864)`, opaque, aucun texte → enregistre.
- Contrôle aussi que la moitié gauche est moins contrastée que la droite (écart-type de luminance plus faible) : sinon, le pseudo ne se lira pas.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les dix fichiers dans le dossier de la section 1. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits **avec leurs dimensions**, et celle des manqués s'il y en a.

Commence par `ban-monde-03.png`.
