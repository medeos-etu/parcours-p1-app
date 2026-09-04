# Les cinq stages — cinq images de saison · consignes pour ChatGPT en mode Agent

## Où tu es, et où tu écris

Ce fichier est rangé dans le dossier **cible** lui-même :

```
/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```

Les cinq images que tu vas produire vont **dans ce même dossier**, à côté de ce fichier, et nulle part ailleurs. Pas de sous-dossier.

Avant de générer, vérifie que tu es au bon endroit :
```
ls /Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/
```
Tu dois voir ce fichier (`PROMPT-CHATGPT-STAGES.md`), les vingt-deux `monde-NN.webp`, et `camp-stage.webp` — l'image de campement qui sert aujourd'hui aux cinq stages et que tes cinq images vont remplacer. Si la commande échoue, cherche le dossier :
```
find /Users/lucascrepin -type d -name territoires -path "*parcours-p1-app*" 2>/dev/null
```
Si tu n'as aucun accès au disque du Mac, ne bloque pas : produis les cinq fichiers dans un dossier `medeos-stages` là où tu peux écrire, et dis-le clairement à la fin en donnant son emplacement (ou une archive `.zip`). Lucas les déposera lui-même.

Ne renomme, ne remplace et ne supprime aucun fichier existant. Ne fais aucun commit git, ne déploie rien.

## Les cinq fichiers attendus

```
stage-toussaint.png
stage-noel.png
stage-fevrier.png
stage-paques.png
stage-prerentree.png
```

Format identique pour les cinq : **PNG 1024×1024, fond parfaitement transparent** (canal alpha, au moins 25 % de pixels totalement transparents), la scène posée sur **une dalle ronde de pierre claire**, exactement comme `camp-stage.webp` et les `monde-NN.webp` du dossier. **Regarde `camp-stage.webp` et deux ou trois `monde-NN.webp` avant de commencer** : même dalle, même échelle, même angle de vue, même lumière. Aucun texte, aucune lettre, aucun chiffre. Pas de personnage.

## La direction artistique — « Atlas Medeos »

3D isométrique, style jeu mobile premium (référence Clash Royale). Formes rondes et pleines, matières lisses légèrement mates, aucun réalisme photographique. Lumière chaude venant du haut à gauche, ombres portées courtes, léger contre-jour doré sur les arêtes.

Palette : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`. Chaque stage a en plus **sa couleur de saison**, indiquée dans son prompt, mais le violet Medeos reste présent (drapeau, tapis, coussins).

Ce que ces images racontent : **un camp de travail pendant les vacances** — on s'y installe douze jours pour travailler au calme, bien accompagné. Chaleureux, soigné, désirable. Jamais froid, jamais vide.

## Les cinq prompts

**`stage-toussaint.png` — fin octobre**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte, aucun personnage.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.webp. Un campement d'automne sous un grand arbre aux feuilles rousses, orange et dorées, quelques feuilles tombées sur la dalle. Deux tentes crème aux liserés or, une table de bois miel avec des livres empilés et une tasse fumante, un feu de camp aux flammes dorées, une lanterne allumée, une petite citrouille, un tapis violet #6B46C1 à motifs, un drapeau violet planté au bord. Couleurs de saison : roux, ambre, or. Lumière chaude de fin d'après-midi.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-noel.png` — fin décembre**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte, aucun personnage.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.webp, la dalle légèrement enneigée. Un campement d'hiver : deux tentes crème saupoudrées de neige, un sapin décoré de petites lumières dorées et de boules violettes #6B46C1, une guirlande lumineuse tendue entre les tentes, un feu de camp vif, une lanterne, une pile de livres sous un plaid violet, une tasse fumante, un drapeau violet. Couleurs de saison : blanc neige, bleu nuit doux, or chaud. Lumière douce de soirée, lueur dorée du feu.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-fevrier.png` — vacances d'hiver**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte, aucun personnage.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.webp, avec de la neige sur les bords. Un refuge de montagne : un petit chalet de bois miel #B8895A au toit enneigé, fenêtres éclairées d'une lumière chaude, cheminée qui fume, deux sapins enneigés, une luge appuyée contre le mur, un banc avec des livres et une tasse, un feu dehors dans un cercle de pierres, un drapeau violet #6B46C1. Couleurs de saison : blanc, bois chaud, ciel bleu clair. Lumière de matin en montagne.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-paques.png` — vacances de printemps**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte, aucun personnage.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.webp, couverte d'herbe tendre. Un campement de printemps : deux tentes crème et or dans une prairie fleurie, un cerisier en fleurs roses qui laisse tomber quelques pétales, des fleurs dorées et violettes #6B46C1, un petit ruisseau clair qui traverse la dalle avec un pont de bois, une table de pique-nique avec des livres ouverts, une lanterne, un drapeau violet. Couleurs de saison : vert tendre, rose, or. Lumière claire de fin de matinée.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

**`stage-prerentree.png` — la deuxième quinzaine d'août, juste avant la première année**
```
Style Atlas Medeos : rendu 3D isométrique de jeu mobile premium, formes rondes et pleines, matières lisses légèrement mates, lumière chaude venant du haut à gauche, contre-jour doré discret. Aucun texte, aucun personnage.
Sujet : un diorama posé sur une dalle ronde de pierre claire, comme camp-stage.webp, plus grand et plus solennel que les quatre autres stages. Un camp d'été studieux : un pavillon-bibliothèque de pierre claire à colonnes, ouvert sur les côtés, coiffé d'un petit dôme violet profond #4C2A85 aux arêtes dorées ; dessous, une longue table de travail avec des livres empilés et une lampe ; devant, deux lanternes sur pied, un olivier, un tapis violet, un drapeau violet plus grand que les autres. Couleurs de saison : pierre blonde, vert olive, or, violet. Lumière d'été en fin de journée, dorée. C'est le dernier stage avant la rentrée : il doit paraître le plus abouti et le plus prestigieux.
Fond parfaitement transparent, sujet centré, 1024×1024.
```

## Comment travailler

- Dans l'ordre : Toussaint, Noël, Février, Pâques, pré-rentrée.
- Après chaque image, contrôle **par du code** : 1024×1024 exactement ; canal alpha présent, au moins 25 % de pixels totalement transparents ; aucun texte visible ; nom exact.
- Les cinq forment une famille entre elles et avec les `monde-NN.webp` : même dalle ronde, même échelle, même angle. Si l'une sort du cadre, refais-la.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les cinq fichiers dans le dossier indiqué en haut de ce fichier. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `stage-toussaint.png`.
