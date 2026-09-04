# PROMPT MAÎTRE nº 2 — les récompenses · à coller intégralement dans ChatGPT en mode Agent

Tu as déjà produit les 43 dioramas et décors du « parcours des mondes » de l'application **Medeos**. Ils sont en place et le rendu est exactement celui attendu. **Reprends très exactement la même direction artistique** (rappelée ci-dessous) et produis maintenant les **récompenses** que les élèves débloquent en avançant.

Tu travailles en mode Agent, de façon autonome : tu génères une par une, tu vérifies chaque fichier par du code, tu ne poses aucune question, et tu enregistres le résultat dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`.

## 1. La direction artistique — « Atlas Medeos » (inchangée)

3D isométrique, style jeu mobile premium (référence Clash Royale). Formes rondes et pleines, matières lisses légèrement mates, aucun réalisme photographique. Lumière chaude venant du haut à gauche, ombres portées courtes, léger contre-jour doré sur les arêtes. Couleurs saturées mais douces.

Palette : crème `#FAF6F0` · or `#FCD34D` et miel `#B8895A` · violet `#6B46C1` et violet profond `#4C2A85` · terracotta `#E29C5C`.

**Règles absolues, sur chaque image :** aucun texte, aucune lettre, aucun chiffre · aucun personnage · fond parfaitement transparent (PNG avec canal alpha, vérifié au damier) · un seul sujet centré, occupant environ 80 % de l'image · nom de fichier exactement conforme.

## 2. Ce qu'il faut produire

### A. Les insignes Medeos — les plus importants

Ce sont des **écussons ronds**, pensés pour être lisibles à 44 pixels : bordure épaisse, sujet central très simple, fort contraste. Ils servent de photo de profil.

| # | Fichier | Format | Sujet |
|---|---|---|---|
| 1 | `badge-etudiant.png` | 512×512, transparent | Écusson rond bombé, bordure dorée épaisse et brillante, fond violet profond dégradé (`#4C2A85` vers `#6B46C1`), au centre un caducée stylisé doré très simple, une petite étoile en haut. Prestigieux. C'est le badge des élèves des stages Medeos. |
| 2 | `badge-certifie.png` | 512×512, transparent | Le même écusson, version supérieure : bordure en laurier doré, fond violet profond, au centre un caducée doré posé sur un bouclier, une couronne discrète au sommet, un ruban doré en bas. C'est le badge « élève certifié Medeos », le plus rare de tous. |

### B. Les onze photos de profil du Parcours — « la série du Marcheur »

Une par deux mondes franchis. Même format d'écusson rond que ci-dessus, **fond de l'écusson crème `#FAF6F0` avec bordure dorée**, l'objet au centre en 3D isométrique. Ils racontent un voyage qui s'accomplit.

| # | Fichier | Format | L'objet au centre |
|---|---|---|---|
| 3 | `av-marche-01.png` | 512×512, transparent | Une boussole dorée ouverte, aiguille rouge. |
| 4 | `av-marche-02.png` | 512×512, transparent | Une lanterne allumée, verre chaud, anse dorée. |
| 5 | `av-marche-03.png` | 512×512, transparent | Une carte roulée avec un ruban violet, un coin déplié. |
| 6 | `av-marche-04.png` | 512×512, transparent | Une paire de bottes de marche en cuir miel, un peu usées. |
| 7 | `av-marche-05.png` | 512×512, transparent | Un bâton de marche en bois avec une pierre violette sertie au sommet. |
| 8 | `av-marche-06.png` | 512×512, transparent | Une gourde en cuir et une pomme, posées ensemble. |
| 9 | `av-marche-07.png` | 512×512, transparent | Un pont de corde miniature. |
| 10 | `av-marche-08.png` | 512×512, transparent | Un piolet doré planté dans un bloc de glace bleu pâle. |
| 11 | `av-marche-09.png` | 512×512, transparent | Une longue-vue en laiton sur son trépied. |
| 12 | `av-marche-10.png` | 512×512, transparent | Un drapeau violet Medeos planté sur un petit sommet enneigé. |
| 13 | `av-marche-11.png` | 512×512, transparent | Une couronne de laurier dorée, posée. |

### C. Les onze bannières du Parcours

Format **paysage 3:1, opaque** (fond peint, pas de transparence). Ce sont les fonds décoratifs qui passent derrière le pseudo de l'élève : **peu contrastées, sans sujet au centre**, un texte blanc s'écrit par-dessus. Une par deux mondes franchis, en alternance avec les écussons.

| # | Fichier | Format | Scène |
|---|---|---|---|
| 14 | `ban-marche-01.png` | 1200×400, opaque | Aube sur des collines crème, un sentier doré qui s'éloigne, ciel rose pâle. |
| 15 | `ban-marche-02.png` | 1200×400, opaque | Forêt claire au petit matin, brume dorée entre les troncs. |
| 16 | `ban-marche-03.png` | 1200×400, opaque | Traversée d'un gué, pierres plates, eau turquoise calme. |
| 17 | `ban-marche-04.png` | 1200×400, opaque | Plaine de blé doré sous un ciel violet clair. |
| 18 | `ban-marche-05.png` | 1200×400, opaque | Falaise au bord de la mer, lumière chaude rasante. |
| 19 | `ban-marche-06.png` | 1200×400, opaque | Vallée verte avec un pont de pierre au loin. |
| 20 | `ban-marche-07.png` | 1200×400, opaque | Désert de sable clair, dunes douces, deux palmiers. |
| 21 | `ban-marche-08.png` | 1200×400, opaque | Champ de glace bleu pâle, montagnes au fond. |
| 22 | `ban-marche-09.png` | 1200×400, opaque | Nuit étoilée violette au-dessus de collines sombres, quelques lucioles dorées. |
| 23 | `ban-marche-10.png` | 1200×400, opaque | Sommet au-dessus des nuages, lumière dorée. |
| 24 | `ban-marche-11.png` | 1200×400, opaque | Un amphithéâtre lumineux au loin, au bout d'une longue route dorée. |

### D. Les deux bannières Medeos

| # | Fichier | Format | Scène |
|---|---|---|---|
| 25 | `ban-medeos.png` | 1200×400, opaque | Bannière « Étudiant Medeos » : dégradé violet profond vers miel, un motif de losanges très discret, quelques éclats dorés. Sobre et noble, aucun sujet, aucun texte. |
| 26 | `ban-certifie.png` | 1200×400, opaque | Bannière « Élève certifié Medeos » : la même, en plus riche — fines volutes de laurier dorées dans les angles, léger halo doré au centre-gauche. Toujours sans sujet ni texte. |

## 3. Comment travailler

- Génère les images **une par une, dans l'ordre**, et contrôle chacune **par du code** avant de passer à la suivante : dimensions exactes, canal alpha présent et au moins 25 % de pixels totalement transparents pour les fichiers marqués « transparent », aucun texte visible, nom exact.
- Les écussons (A et B) doivent former une famille : **même diamètre, même épaisseur de bordure, même angle de lumière**. Compare chaque nouvel écusson au précédent avant de valider.
- Les bannières (C et D) ne doivent avoir **aucun élément fort au centre** : un pseudo blanc s'écrit par-dessus, il doit rester lisible.
- Si une génération échoue trois fois, passe à la suivante et signale-la dans le rapport final.

**Livraison** : enregistre les 26 fichiers dans `/Users/lucascrepin/dev/parcours-p1-app/img/parcours/territoires/`, avec leurs noms exacts. **Ne fais aucun commit git, ne déploie rien, ne modifie aucun autre fichier.** Termine en me donnant la liste des fichiers écrits avec leurs dimensions, et la liste des manqués s'il y en a.

Commence par `badge-etudiant.png`.
