Chapitre 2 — Partie 2 : Le modèle quantique et la configuration électronique - MEDEOS

Chapitre 2 — Partie 2

# Le modèle quantique et la configuration électronique

De Broglie, Schrödinger, nombres quantiques et règles de remplissage

## 🎯 Partie 2 — Nombres quantiques, configuration et exceptions

Dans la **Partie 1**, tu as découvert pourquoi le modèle de Bohr ne suffit pas (limites), les deux principes fondateurs de la mécanique quantique (De Broglie, Heisenberg), et tu as rencontré l'équation de Schrödinger ainsi que les orbitales atomiques s, p, d, f.

Dans cette **Partie 2**, on passe à la **pratique** : comment décrire précisément un électron (les 4 nombres quantiques), comment remplir les orbitales (Klechkowski, Pauli, Hund), et quelles sont les exceptions à connaître.

À la fin de cette partie, tu seras capable de :

- Utiliser les 4 nombres quantiques (n, l, m_l, m_s) pour décrire un électron

- Écrire la configuration électronique de n'importe quel atome (Klechkowski + Pauli + Hund)

- Reconnaître les exceptions classiques (Cr, Cu) et l'ordre d'ionisation

- Distinguer atomes paramagnétiques et diamagnétiques

## IV. Les quatre nombres quantiques

On a déjà vu **n** (le numéro de couche) et **l** (la forme de l'OA). Mais pour décrire complètement un électron, il faut **4 nombres quantiques** au total — comme une adresse postale complète : pays → ville → rue → numéro de porte.

#### 📐 Les 4 nombres quantiques — Vue d'ensemble

|

| Nombre
| Symbole
| Signification
| Valeurs possibles
| Analogie

| **Principal**
| **n**
| Couche / taille de l'OA
| n = 1, 2, 3, 4... (entier > 0)
| 🏢 L'étage de l'immeuble

| **Azimutal (secondaire)**
| **l**
| Sous-couche / forme de l'OA
| l = 0, 1, 2... (n−1)
| 🚪 L'appartement à cet étage

| **Magnétique**
| **m l **
| Orientation de l'OA
| m l = −l, ..., 0, ..., +l
| 🛋️ La pièce dans l'appartement

| **Spin**
| **s (ou m s )**
| Rotation propre de l'électron
| s = +1/2 (↑) ou −1/2 (↓)
| 👤 La personne (max 2 par pièce)

### Détail de chaque nombre quantique

#### 1. Nombre quantique principal n

- **Valeurs :** n = 1, 2, 3, 4, 5, 6, 7 (entier strictement positif)

- **Détermine :** la couche électronique et l'énergie (principalement)

- Plus n est grand → OA plus **grande** et électron plus **loin** du noyau

- Chaque couche n contient **n²** orbitales atomiques

- Chaque couche n peut accueillir **2n²** électrons maximum

**📌 Notation historique — K, L, M, N...**

Historiquement, les couches sont aussi désignées par des lettres (provenant de la spectroscopie des rayons X) :

- **n = 1** → couche **K**

- **n = 2** → couche **L**

- **n = 3** → couche **M**

- **n = 4** → couche **N**

- Puis O, P, Q... (rarement utilisées)

**💡 À retenir :** Les deux notations sont équivalentes. On dit « couche n=2 » ou « couche L », c'est pareil !

#### 2. Nombre quantique azimutal l (ou secondaire)

**🎯 Rôle :** Détermine la **forme** de l'orbitale (s, p, d, f) — c'est ce qu'on a vu dans le tableau des formes d'OA !

**Valeurs possibles :** l = 0, 1, 2, ... jusqu'à (n−1)

⚠️ **Règle importante :** l dépend de n ! On ne peut pas avoir n'importe quelle valeur de l pour un n donné.

📌 Correspondance l ↔ lettre (déjà vue) :

- l = 0 → orbitale de type **s** (sphère)

- l = 1 → orbitale de type **p** (2 lobes)

- l = 2 → orbitale de type **d** (4 lobes)

- l = 3 → orbitale de type **f** (complexe)

📋 Quelles valeurs de l sont possibles pour chaque n ?

|

| Couche (n)
| Valeurs de l possibles
| Sous-couches (orbitales) disponibles

| **n = 1**
| l = 0 seulement
| **1s** uniquement

| **n = 2**
| l = 0 ou 1
| **2s** et **2p**

| **n = 3**
| l = 0, 1 ou 2
| **3s**, **3p** et **3d**

| **n = 4**
| l = 0, 1, 2 ou 3
| **4s**, **4p**, **4d** et **4f💡 Astuce :** Pour la couche n, il y a **n types d'orbitales** possibles (n valeurs de l différentes).

#### 3. Nombre quantique magnétique m l

**🎯 Rôle :** Détermine l'**orientation** de l'orbitale dans l'espace (axe x, y ou z pour les p par exemple).

**Valeurs possibles :** m l va de **−l** jusqu'à **+l** (en passant par 0)

🔢 Formule du nombre de valeurs :

Il y a **(2l+1)** valeurs possibles de m l → donc **(2l+1) orbitales** par sous-couche

📋 Exemples concrets :

**Orbitale de type s (l=0) :**

- m l va de −0 à +0 → **m l = 0** seulement

- Nombre de valeurs = 2l+1 = 2(0)+1 = **1**

- Conclusion : **1 seule orbitale s** (la sphère ne peut pas s'orienter différemment)

**Orbitale de type p (l=1) :**

- m l va de −1 à +1 → **m l = −1, 0, +1**

- Nombre de valeurs = 2l+1 = 2(1)+1 = **3**

- Conclusion : **3 orbitales p** (p x , p y , p z selon les 3 axes)

**Orbitale de type d (l=2) :**

- m l va de −2 à +2 → **m l = −2, −1, 0, +1, +2**

- Nombre de valeurs = 2l+1 = 2(2)+1 = **5**

- Conclusion : **5 orbitales dOrbitale de type f (l=3) :**

- m l va de −3 à +3 → **m l = −3, −2, −1, 0, +1, +2, +3**

- Nombre de valeurs = 2l+1 = 2(3)+1 = **7**

- Conclusion : **7 orbitales f💡 Exemple concret avec une sous-couche complète :**

La sous-couche **4f** (n=4, l=3) contient donc **7 orbitales 4f** différentes, toutes de forme f mais orientées différemment dans l'espace. Chacune peut accueillir 2 électrons → maximum **14 électrons dans 4f**.

📊 Tableau récapitulatif :

|

| Sous-couche
| l
| Valeurs de m l
| Nombre d'OA
(2l+1)

| **s** | 0 | 0 | 1

| **p** | 1 | −1, 0, +1 | 3

| **d** | 2 | −2, −1, 0, +1, +2 | 5

| **f** | 3 | −3, −2, −1, 0, +1, +2, +3 | 7

[FIGURE ch2-sous-couche-p-orbitales.png]

**Schéma** — Exemple de la sous-couche 2p : 3 orbitales p orientées différemment (m l = -1, 0, +1)

#### 4. Nombre quantique de spin s (ou m s )

**🎯 Rôle :** Caractérise la **rotation propre** de l'électron sur lui-même (comme une toupie qui tourne).

🔢 Deux valeurs possibles :

- **s = +1/2** → spin « **up** » → noté **↑**

- **s = −1/2** → spin « **down** » → noté **↓**

🏠 Règle du logement — Maximum 2 électrons par orbitale

Une orbitale atomique est comme une **chambre** qui peut accueillir **au maximum 2 électrons**, mais ils doivent avoir des spins **opposés** (↑↓).

**Exemples :**

- OA 1s peut contenir : **0, 1 ou 2 électrons**

- Si 2 électrons dans 1s : obligatoirement **↑↓** (un +1/2, un −1/2)

- ❌ On ne peut PAS avoir deux électrons ↑↑ dans la même OA (interdit par le principe d'exclusion de Pauli)

💡 Propriété intrinsèque

Le spin est une propriété **intrinsèque** de l'électron (il "l'a en lui").

→ Il ne dépend **ni de n** (couche), **ni de l** (forme), **ni de m l ** (orientation)

→ C'est une propriété qui appartient à l'**électron lui-même**, pas à l'orbitale

✏️ **Vérifie tout de suite** — Pour la couche n=3 :

- Quelles sont les sous-couches possibles ?

- Combien d'OA au total dans cette couche ?

- Combien d'électrons maximum ?

- Donne tous les triplets (n, l, m l ) possibles.

💡 Voir la correction

**1. Sous-couches :** l = 0, 1, 2 → **3s, 3p, 3d2. Nombre d'OA :**

- 3s : 1 OA

- 3p : 3 OA

- 3d : 5 OA

- Total = 1 + 3 + 5 = **9 OA** (= n² = 3² = 9 ✓)

**3. Électrons max :** 2 × 9 = **18 électrons** (= 2n² = 2×9 = 18 ✓)

**4. Tous les triplets (n, l, m l ) :**

|
| Sous-couche | n | l | m l

| 3s | 3 | 0 | 0

| 3p | 3 | 1 | −1

| 3p | 3 | 1 | 0

| 3p | 3 | 1 | +1

| 3d | 3 | 2 | −2

| 3d | 3 | 2 | −1

| 3d | 3 | 2 | 0

| 3d | 3 | 2 | +1

| 3d | 3 | 2 | +2

**💡** 9 triplets = 9 OA. Chaque triplet (n, l, m l ) identifie une OA unique. Avec le spin (±1/2), on obtient 18 quadruplets = 18 électrons maximum.

## V. Configuration électronique : les 3 règles de remplissage

Maintenant qu'on connaît les OA et les nombres quantiques, comment les électrons se répartissent-ils ? Il existe **3 règles fondamentales** qui dictent le remplissage.

### Règle 1 : Klechkowski (ordre de remplissage)

**🤔 Le problème :** On pourrait penser que les électrons remplissent 1s, puis 2s, 2p, 3s, 3p, 3d... dans l'ordre de n. Mais ce n'est **pas le cas** ! Le 4s se remplit **avant** le 3d.

#### 📐 Règle de Klechkowski

Les sous-couches se remplissent par ordre de **(n+l) croissant**.

Si deux sous-couches ont le même (n+l), on remplit d'abord celle de **n le plus petit**.

**📋 Ordre de remplissage :1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p**

|

| Sous-couche
| n
| l
| n+l
| Ordre

| 1s | 1 | 0 | 1 | 1er

| 2s | 2 | 0 | 2 | 2e

| 2p | 2 | 1 | 3 | 3e

| 3s | 3 | 0 | 3 | 4e (n plus petit)

| 3p | 3 | 1 | 4 | 5e

| **4s** | 4 | 0 | **4** | 6e (n plus petit)

| **3d** | 3 | 2 | **5** | 7e

| 4p | 4 | 1 | 5 | 8e (n plus petit)

| 5s | 5 | 0 | 5 | 9e

#### 💡 Astuce — Retenir l'ordre facilement

Utilise le **diagramme en diagonales** (méthode de Klechkowski) :

[FIGURE ch2-diagramme-klechkowski.png]

**Schéma** — Diagramme de Klechkowski : lis en suivant les flèches diagonales ↘

### Règle 2 : Principe d'exclusion de Pauli

**🤔 L'idée :** Deux personnes peuvent habiter le même appartement, mais elles doivent être différentes sur au moins un critère. Pour les électrons, c'est pareil.

#### 📐 Principe de Pauli

**Deux électrons d'un même atome ne peuvent pas avoir les 4 mêmes nombres quantiques (n, l, m l , s).💡 Conséquences directes :**

- Une OA (définie par n, l, m l ) contient **au maximum 2 électrons**

- Ces 2 électrons doivent avoir des spins **opposés** : ↑↓ (antiparallèles)

- Une sous-couche l contient max **2(2l+1)** électrons

|
| Sous-couche | OA | e⁻ max

| s (l=0) | 1 | **2**

| p (l=1) | 3 | **6**

| d (l=2) | 5 | **10**

| f (l=3) | 7 | **14**

### Règle 3 : Règle de Hund (multiplicité de spin maximale)

**🤔 Le problème :** Quand une sous-couche a plusieurs OA (comme les 3 OA de la sous-couche p), dans quel ordre met-on les électrons ?

**Analogie :** Imagine un bus avec des rangées de 2 places. Les passagers préfèrent d'abord s'asseoir seuls (un par rangée) avant de s'asseoir à côté de quelqu'un. Les électrons font pareil !

#### Règle de Hund

**Dans une sous-couche, les électrons occupent d'abord chaque OA avec des spins parallèles (tous dans le même sens) avant de s'apparier.**

#### 📝 Exemple détaillé : l'azote (N, Z=7)

**Étape 1 :** L'azote a **Z = 7** → il a **7 protons** → donc **7 électrons** à placer

**Étape 2 :** On remplit dans l'ordre de Klechkowski (1s → 2s → 2p...)

- 1s peut contenir 2e⁻ → on met **2 électrons** → il reste 5 électrons

- 2s peut contenir 2e⁻ → on met **2 électrons** → il reste 3 électrons

- 2p peut contenir 6e⁻ (3 OA × 2e⁻) → on met les **3 électrons restantsÉtape 3 :** On écrit la configuration électronique :

**1s² 2s² 2p³**

Notation : Le **chiffre en exposant** indique le **nombre d'électrons** dans cette sous-couche.

Exemple : 2p³ = 3 électrons dans la sous-couche 2p

**Étape 4 :** Comment placer les 3 électrons dans les 3 OA de 2p ?

La sous-couche 2p a **3 orbitales** (car l=1 → 2l+1 = 3) :

✅ Remplissage CORRECT (règle de Hund) :

[↑]
[↑]
[↑]

→ Chaque OA contient 1 électron, **tous avec le même spin** (↑↑↑)

❌ Remplissage INCORRECT :

[↑↓]
[↑]
[ ]

→ On a apparié trop tôt ! Il fallait d'abord occuper les 3 OA séparément

### Résumé des 3 règles

#### Les 3 règles en un coup d'œil

|

| Règle
| Ce qu'elle dit
| Mot-clé

| **Klechkowski**
| Remplir par (n+l) croissant
| ORDRE

| **Pauli**
| Max 2 e⁻ par OA, spins opposés
| CAPACITÉ

| **Hund**
| Spins parallèles d'abord dans une sous-couche
| RÉPARTITION

### Comment reconnaître un état fondamental, excité ou interdit ?

**🤔 Question clé :** Quand on te donne une configuration électronique en QCM, comment savoir si elle est valide ou pas ?

#### ⚠️ D'abord : configurations INTERDITES

Une configuration est **physiquement impossible** si elle **viole le principe de Pauli** :

- ❌ Deux électrons avec les **mêmes 4 nombres quantiques** (n, l, m l , s)

- ❌ Deux électrons dans la même OA avec le **même spin** (↑↑ ou ↓↓)

- ❌ Plus de 2 électrons dans une OA

**Exemple (Carbone, Z=6) :**

1s² 2s² 2p² avec 2p : [↑↑][ ][ ]

→ INTERDIT ! Deux électrons avec même spin dans la même OA

#### Si Pauli est respecté : 2 états possibles

|

| État
| Définition
| Règles respectées
| Exemple (C, Z=6)

| **Fondamental**
| Énergie minimale, configuration la plus stable
| **Toutes :** Pauli + Klechkowski + Hund
| 1s² 2s² 2p² avec [↑][↑][ ]

| **Excité**
| Un électron a été promu vers un niveau supérieur
| Pauli ✓, mais Klechkowski ou Hund violé
| 1s² 2s¹ 2p³ (e⁻ saute de 2s → 2p)

#### 🔑 Méthode : l'arbre de décision

- **Étape 1 :** Vérifie Pauli

- Pauli violé ? → INTERDIT** (stop, pas la peine d'aller plus loin)

- Pauli respecté ? → Continue ⬇

- **Étape 2 :** Vérifie Klechkowski + Hund

- Les 3 règles respectées ? → FONDAMENTAL**

- Klechkowski ou Hund violé ? → EXCITÉ💡 À retenir :** Pauli est le **juge suprême**. S'il dit non, c'est interdit, point final. Les deux autres règles (Klechkowski et Hund) déterminent juste si c'est fondamental ou excité.

### Exercices de configuration électronique

**Vérifie tout de suite** — Écris la configuration électronique fondamentale de :

- Azote N (Z=7)

- Soufre S (Z=16)

- Fer Fe (Z=26)

Voir la correction

**1. Azote N (Z=7) :**

1s 2 2s 2 2p 3

2+2+3 = 7 électrons (OK)

**2. Soufre S (Z=16) :**

1s 2 2s 2 2p 6 3s 2 3p 4

2+2+6+2+4 = 16 électrons (OK)

**3. Fer Fe (Z=26) :**

1s 2 2s 2 2p 6 3s 2 3p 6 4s 2 3d 6

2+2+6+2+6+2+6 = 26 électrons (OK)

**Attention :** Klechkowski dit 4s AVANT 3d !

**Astuce :** Vérifie toujours que la somme des exposants = Z (nombre d'électrons).

**Exercice avancé** - Pour le Krypton Kr (Z=36) :

- Écris la configuration électronique complète.

- Combien d'électrons ont m l = -1 ?

Voir la correction

**1. Configuration de Kr (Z=36) :**

1s 2 2s 2 2p 6 3s 2 3p 6 4s 2 3d 10 4p 6

**2. Électrons avec m l = -1 :**

m l = -1 est possible quand l ≥ 1 (sous-couches p, d, f).

Pour chaque sous-couche ayant l ≥ 1, l'OA avec m l = -1 contient 2 électrons (remplie).

- 2p : 2 électrons avec m l =-1

- 3p : 2 électrons avec m l =-1

- 3d : 2 électrons avec m l =-1

- 4p : 2 électrons avec m l =-1

Total = 2+2+2+2 = **8 électrons** avec m l = -1.

#### Électrons de cœur vs électrons de valence

- **Électrons de cœur** = tous les électrons des couches internes (= même config que le gaz noble précédent)

- **Électrons de valence** = électrons de la couche la plus externe (dernière couche n)

**Notation abrégée :**

Fe (Z=26) = **[Ar]** 4s 2 3d 6

↳ [Ar] = raccourci pour "1s² 2s² 2p⁶ 3s² 3p⁶" (les 18 premiers électrons = cœur)

↳ 4s² 3d⁶ = les 8 électrons de valence

**💡 Astuce :** [Ar], [Kr], [Xe]... sont des **raccourcis d'écriture**, pas les éléments eux-mêmes ! On utilise le gaz noble qui vient juste avant dans le tableau périodique.

**Attention :** les électrons de valence déterminent les propriétés chimiques !

## VI. Exceptions, ionisation et magnetisme

### Les exceptions à la règle de Klechkowski

**Le problème :** Certains éléments ne suivent pas l'ordre de remplissage prévu par Klechkowski. Pourquoi ? Parce que les sous-couches **d à moitié remplies (d5)** ou **totalement remplies (d10)** sont particulièrement stables.

#### Les 2 familles d'exceptions

**Famille 1 : stabilité de d 5 (demi-remplie)**

Moyen mnémotechnique : **Cr-Mo** (CRoMo = comme le métal chromé-molybdène)

|
| Élément | Z | Config attendue (Klechkowski) | Config réelle

| **Chrome Cr**
| 24
| [Ar] 4s 2 3d 4
| **[Ar] 4s 1 3d 5 **

| **Molybdène Mo**
| 42
| [Kr] 5s 2 4d 4
| **[Kr] 5s 1 4d 5 **

Un électron quitte ns pour compléter la sous-couche d à 5 (demi-remplie = très stable).

**Famille 2 : stabilité de d 10 (totalement remplie)**

Moyen mnémotechnique : **Cu-Ag-Au** (les 3 métaux précieux/monétaires)

|
| Element | Z | Config attendue | Config reelle

| **Cuivre Cu**
| 29
| [Ar] 4s 2 3d 9
| **[Ar] 4s 1 3d 10 **

| **Argent Ag**
| 47
| [Kr] 5s 2 4d 9
| **[Kr] 5s 1 4d 10 **

| **Or Au**
| 79
| [Xe] 6s 2 4f 14 5d 9
| **[Xe] 6s 1 4f 14 5d 10 **

#### Moyen mnémotechnique pour les exceptions

- **d 5 ** (demi-remplie) : **Cr-Mo** (Chrome, Molybdène) → ns 1 (n-1)d 5

- **d 10 ** (pleine) : **Cu-Ag-Au** (Cuivre, Argent, Or = métaux précieux) → ns 1 (n-1)d 10

Dans les deux cas : un électron quitte ns pour aller dans (n-1)d. On passe de ns 2 à ns 1 .

### Ordre d'ionisation (perte d'électrons)

**Question clé :** Quand un atome perd des électrons (ionisation), lequel part en premier ?

#### ⚠️ Le paradoxe du remplissage/ionisation

|

|
| Ordre de remplissage
| Ordre de départ (ionisation)

| **4s et 3d**
| 4s se remplit **AVANT** 3d
| 4s se vide **AVANT** 3d

**Pourquoi ?** Une fois remplis, les électrons 3d sont **plus proches du noyau** que les 4s → ils sont **mieux retenus**. Quand on arrache des électrons, on prend d'abord les **moins bien attachés** = les 4s partent en premier !

#### Règle d'ionisation

**Les électrons ns (couche externe) partent AVANT les (n-1)d (couche interne), même si ns s'est rempli en premier.Exemple détaillé avec le Fer (Fe, Z=26) :Fe neutre :** [Ar] 4s² 3d⁶

→ Remplissage : 4s s'est rempli AVANT 3d (Klechkowski)

**Fe²⁺ (perd 2 e⁻) :** [Ar] 3d⁶

→ Les 2 électrons de **4s partent en premier** (pas de 3d !)

**Fe³⁺ (perd 3 e⁻) :** [Ar] 3d⁵

→ Les 2 électrons 4s + 1 électron 3d sont partis

#### Piège classique : remplissage vs ionisation

C'est un piège **très fréquent** :

- **Remplissage** (Klechkowski) : 4s se remplit AVANT 3d

- **Ionisation** : 4s se vide AVANT 3d (les derniers arrivés sont les premiers à partir !)

Fe 2+ n'est PAS [Ar] 4s 2 3d 4 mais bien [Ar] 3d 6 !

×

medeos-sante.fr