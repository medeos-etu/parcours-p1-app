# Les 6 vignettes des métiers de la santé · consignes pour ChatGPT en mode Agent

Dans la Bibliothèque de l'application Medeos, quand on touche « Les métiers de la santé », une liste s'ouvre : « Quel métier veux-tu découvrir ? », six lignes, une par métier. Chaque ligne a besoin d'**une petite image carrée à gauche, lisible à 56 pixels**, qui dit le métier d'un coup d'œil. Aujourd'hui c'est une infographie entière écrasée en 40 pixels : on ne voit rien.

Tu travailles en mode Agent, de façon autonome : tu génères une image à la fois, tu vérifies chaque fichier par du code, tu ne poses aucune question. **Ne fais aucun commit git, ne déploie rien, ne modifie et ne supprime aucun fichier existant.**

---

## 0. Le dossier de livraison

Les six fichiers vont dans **le dossier qui contient ce fichier de consignes**, sur le Mac de Lucas :

```
/Users/lucascrepin/dev/parcours-p1-app/img/metiers/
```

Vérifie que tu y es (`ls` : tu dois voir ce fichier, `PROMPT-CHATGPT-METIERS.md`). Si la commande échoue : `find /Users/lucascrepin -type d -path "*parcours-p1-app/img/metiers"`. Si tu n'as pas accès au disque, écris dans un dossier `medeos-metiers` et dis-le à la fin, ou fournis une archive `.zip`. Aucun sous-dossier ; ne fais aucun commit, ne déploie rien.

**Les six fichiers attendus :**
```
metier-medecin.png
metier-chirurgien.png
metier-chirurgien-dentiste.png
metier-pharmacien.png
metier-kinesitherapeute.png
metier-sage-femme.png
```

---

## 1. Le gabarit — le même que les photos de profil de l'application

Regarde d'abord la référence : `/Users/lucascrepin/dev/parcours-p1-app/img/profil/av-primant.png`. Les six vignettes doivent avoir exactement ce cadrage.

- **512×512, carré, opaque.** Pas de transparence.
- **Fond uni**, une seule couleur douce, léger dégradé radial au plus. **Aucun décor derrière.**
- **Aucun écusson, aucune bordure, aucun cadre rond** : l'app arrondit elle-même les coins.
- **Axo en buste, de face légèrement de trois quarts, qui remplit le cadre** : sommet du crâne vers 15 % de la hauteur, yeux à mi-hauteur, menton vers 65 %, branchies violettes qui touchent presque les bords, tenue visible en bas.
- **Ce qui change d'une vignette à l'autre : la tenue, l'accessoire du métier, l'expression, la couleur du fond.** L'accessoire doit être **gros et lisible à 56 pixels** — c'est lui qui dit le métier.

La mascotte, Axo : axolotl peluche 3D, corps blanc crème mat, **trois panaches de branchies violettes** `#6B46C1` de chaque côté de la tête, grands yeux violet foncé brillants, petits sourcils, joues orangées, petit sourire. Exactement le personnage de `av-primant.png`, **identique d'une image à l'autre**.

Palette Medeos : crème `#FAF6F0` · or `#FCD34D` · miel `#B8895A` · violet `#6B46C1` · violet profond `#4C2A85` · terracotta `#E29C5C`.

---

## 2. Les six prompts

**`metier-medecin.png` — Médecin**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni bleu clair #CFE3F5 avec léger dégradé radial. Axo (axolotl peluche 3D : corps blanc crème mat, trois panaches de branchies violettes #6B46C1 de chaque côté de la tête, grands yeux violet foncé brillants, joues orangées, petit sourire) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En médecin : blouse blanche, un gros stéthoscope autour du cou, bien visible, le pavillon tenu dans une main. Expression bienveillante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`metier-chirurgien.png` — Chirurgien**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni vert d'eau #CBE8D4 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En chirurgien : calot de bloc violet #6B46C1 posé entre les branchies, masque chirurgical baissé sous le menton, tenue de bloc verte, gants. Expression concentrée et rassurante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`metier-chirurgien-dentiste.png` — Chirurgien-dentiste**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni turquoise doux #C6E6E4 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En dentiste : blouse blanche à col montant, un gros miroir dentaire tenu dans une main, une grande dent blanche brillante dans l'autre, un grand sourire aux dents éclatantes. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`metier-pharmacien.png` — Pharmacien**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni vert tendre #D3E9B8 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En pharmacien : blouse blanche, une croix verte brodée sur la poche, un gros mortier avec son pilon tenu à deux mains, un flacon de médicament posé dedans. Expression sérieuse et souriante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`metier-kinesitherapeute.png` — Kinésithérapeute**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni orange doux #F5C48F avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En kinésithérapeute : polo sportif violet #6B46C1, une serviette sur l'épaule, un gros ballon d'exercice doré tenu sous le bras, une bande élastique dans l'autre main. Expression dynamique et souriante. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

**`metier-sage-femme.png` — Sage-femme**
```
Photo de profil Medeos, même gabarit exactement que av-primant.png : image carrée 512×512, opaque, fond uni rose pâle #F3CFE0 avec léger dégradé radial. Axo (identique à av-primant.png) en buste de face légèrement de trois quarts, qui remplit le cadre : sommet du crâne vers 15 %, yeux à mi-hauteur, menton vers 65 %, branchies qui touchent presque les bords. En sage-femme : tunique blanche à liseré violet, un petit bébé axolotl emmailloté dans un lange crème tenu tendrement dans les bras, tout petit avec ses branchies violettes. Expression douce et attentive. Lumière douce du haut à gauche.
Aucun texte, aucun écusson, aucune bordure, aucun décor derrière.
```

---

## 3. Comment travailler

- Dans l'ordre : médecin, chirurgien, chirurgien-dentiste, pharmacien, kinésithérapeute, sage-femme.
- Après chaque image, contrôle **par du code** : 512×512 exactement (génère en 1024×1024 puis réduis par code s'il le faut), opaque, aucun texte ; les pixels violets des branchies s'étendent jusqu'à moins de 6 % de chaque bord, et leur centre vertical se situe entre 35 % et 50 % de la hauteur — sinon le cadrage a dérivé : refais.
- **Axo doit rester identique** d'une image à l'autre : compare à `av-primant.png`.
- Si une génération échoue trois fois, passe à la suivante et signale-la à la fin.

**Livraison** : les six fichiers dans le dossier de la section 0. Termine en me donnant le chemin du dossier où tu as écrit, la liste des fichiers écrits avec leurs dimensions, et celle des manqués s'il y en a.

Commence par `metier-medecin.png`.
