Chapitre 7 : Thermodynamique — Systèmes, premier principe et enthalpie - MEDEOS — Partie 2

Chapitre 7 — Partie 2

# Thermodynamique — Systèmes, premier principe et enthalpie

Énergie, chaleur, travail : les lois fondamentales qui gouvernent les réactions chimiques

## 🎯 Partie 2 — Enthalpie, loi de Hess et chaleur des réactions

Dans la **Partie 1**, tu as posé les bases de la thermodynamique : ce qu'est un **système** et son milieu extérieur, les types de transformations, et le modèle du gaz parfait (PV = nRT). Surtout, tu as découvert le **premier principe** : l'énergie ne se perd jamais, elle se transforme. La variation d'énergie interne d'un système (ΔU) est égale à la somme de ce qu'il échange sous forme de **chaleur Q** et de **travail W**, soit ΔU = W + Q.

Dans cette **Partie 2**, on introduit une nouvelle grandeur faite sur mesure pour la chimie : l'**enthalpie H**. Elle permet de mesurer directement la chaleur d'une réaction quand on travaille à pression constante (le cas habituel sur une paillasse), sans avoir à séparer Q et W. Tu apprendras à dire si une réaction libère ou absorbe de la chaleur (réaction **exothermique** ou **endothermique**) et à calculer son énergie grâce à la **loi de Hess**.

## V. Enthalpie H, loi de Hess et réactions exo/endothermiques

Tu sais maintenant ce que sont Q et W. Mais en chimie, la plupart des réactions ont lieu **à pression constante** (sur la paillasse, à pression atmosphérique). Et tu as vu le problème : à pression constante, quand tu fournis Q, le gaz se dilate et une partie de l'énergie "repart" en travail W. Pour connaître ΔU, il faudrait donc calculer Q et W séparément à chaque fois — c'est pénible.

L'enthalpie H est une grandeur inventée **exprès pour éviter ce problème**. Elle regroupe tout (énergie interne + le travail de pression) en un seul nombre. Résultat : à pression constante, **ΔH = Q_p** directement, sans avoir à calculer W. C'est la grandeur que tu utiliseras le plus souvent au concours.

### 1. Définition de l'enthalpie

L'enthalpie H est définie par :

Définition de l'enthalpie
H = U + PV

Tu reconnais U (l'énergie interne) et PV (le produit pression × volume — c'est l'énergie "réservée" au travail de dilatation). En ajoutant les deux, H tient compte de tout en une seule grandeur.

Et c'est là que H devient utile : à **pression constante** :

Enthalpie à pression constante
ΔH = Q_p

Autrement dit : à pression constante, la variation d'enthalpie **est directement la chaleur échangée**. Tu n'as plus besoin de calculer W à part — H s'en charge. Et si en plus la température change (sans changement d'état), tu retrouves : Q_p = n × C_p × ΔT, donc ΔH = n × C_p × ΔT.

### 2. Réactions exothermiques vs endothermiques

|

| Type de réaction
| Signe de ΔᵣH°
| Énergie
| Exemple

| **Exothermique**
| ΔᵣH° **< 0**
| Libère de la chaleur vers l'extérieur
| Combustion de l'éthanol, respiration cellulaire

| **Endothermique**
| ΔᵣH° **> 0**
| Absorbe de la chaleur du milieu
| Poche de froid instantanée, photosynthèse

Concrètement : si tu touches un tube à essai après une réaction et qu'il est **chaud** → la réaction a libéré de la chaleur → exothermique (ΔH < 0). S'il est **froid** → la réaction a absorbé la chaleur du milieu → endothermique (ΔH > 0).

💡 **Moyen mnémotechnique** — **Exo**thermique = le système **ex**tériorise de l'énergie (il la donne au milieu) → il perd de l'énergie → ΔH **négatif**. **Endo**thermique = le système en**glo**be de l'énergie (il la prend au milieu) → ΔH **positif**.

💡 **Astuce** — Si on **inverse** le sens d'une réaction, le signe de ΔᵣH° s'inverse aussi. Une combustion exothermique (ΔH < 0) dans un sens est endothermique (ΔH > 0) dans l'autre. C'est logique : si brûler libère de l'énergie, reconstituer le combustible en demande.

### 3. État standard et enthalpie standard de formation ΔfH°

#### a) État standard

Pour pouvoir comparer les ΔH de différentes réactions, il faut que tout le monde mesure **dans les mêmes conditions**. L'état standard est cette référence commune : c'est l'état physique le plus stable d'un corps à T donnée et P = 1 bar (≈ 1 atm). Exemples à 25 °C :

- H₂O : **liquide** (l'eau est liquide à 25 °C, pas gazeuse)

- CO₂ : **gazeux**

- C (carbone) : **solide (graphite)** — pas diamant ! Le graphite est la forme la plus stable

- Na : **solide**

- Br₂ : **liquide**

#### b) Enthalpie standard de formation ΔfH°

C'est la chaleur échangée quand on **fabrique 1 mole d'un composé** à partir des éléments les plus simples (corps simples dans leur état standard).

Exemple concret : ΔfH°(H₂O, l) = −285,6 kJ/mol signifie que quand on combine H₂ et ½ O₂ pour former 1 mole d'eau liquide, la réaction libère 285,6 kJ.

🔑 **Règle fondamentale**

ΔfH° = 0 ne veut **pas** dire qu'il faut zéro énergie pour créer ces molécules. C'est juste une convention de référence — comme les panneaux routiers qui indiquent les distances depuis Paris : on choisit Paris comme point de départ (= 0), et on mesure tout le reste à partir de là. Ici, on choisit les corps simples comme point de départ, et on mesure l'enthalpie de toutes les autres molécules par rapport à eux.

ΔfH°(O₂, g) = 0 ΔfH°(C, graphite) = 0 ΔfH°(N₂, g) = 0

Au concours, dès que tu vois un corps simple (O₂, N₂, C, H₂…) dans la formule de Hess, tu mets **0** — ça simplifie le calcul.

### 4. Loi de Hess — La formule magique

La loi de Hess répond à une question simple : **combien d'énergie échange cette réaction ?** La réponse : tu prends les ΔfH° de ce que tu produis , tu soustrais les ΔfH° de ce que tu consommes , en multipliant chaque terme par son coefficient dans l'équation.

En une phrase : **produits moins réactifs**, chacun multiplié par son coefficient.

Loi de Hess
ΔᵣH° = Σ (coeff × ΔfH°) des produits − Σ (coeff × ΔfH°) des réactifs

Le Σ (sigma) veut juste dire "additionne tout". Si tu as 2 CO₂ dans les produits, tu fais 2 × ΔfH°(CO₂). C'est tout.

📌 Notation officielle que tu peux voir dans un énoncé : **ΔᵣH° = Σ νᵢ·ΔfH°(produits) − Σ νᵢ·ΔfH°(réactifs)** — le νᵢ c'est juste le "coefficient" exprimé en notation mathématique.

#### Exemple : Combustion de l'éthanol

Réaction : C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l)

Les valeurs de ΔfH° sont des **données tabulées** — tu ne les calcules pas, tu les lis dans une table (et au concours, elles sont toujours données dans l'énoncé) :

- ΔfH°(CO₂, g) = −393,13 kJ/mol

- ΔfH°(H₂O, l) = −285,58 kJ/mol

- ΔfH°(C₂H₅OH, l) = −277,4 kJ/mol

- ΔfH°(O₂, g) = **0** (corps simple)

Application de Hess (produits − réactifs, chacun × son coefficient) :

- ΔᵣH° = [2 × (−393,13) + 3 × (−285,58)] − [(−277,4) + 3 × 0]

- ΔᵣH° = [−786,26 + (−856,74)] − [−277,4]

- ΔᵣH° = −1643,00 + 277,4 = **−1365,6 kJ/mol**

Résultat **fortement négatif** → réaction très exothermique (l'éthanol brûle en libérant beaucoup de chaleur).

💡 **Astuce — Méthode infaillible pour Hess**

- Écrire l'équation **équilibrée**

- Repérer les **nombres devant chaque molécule** (ex : "3 O₂" → le nombre c'est 3 ; "CO₂" sans nombre → c'est 1)

- Appliquer : **(produits − réactifs), chacun × son nombre**

- Ne pas oublier que ΔfH°(corps simple) = **0**

- Vérifier le signe : exothermique si négatif

✏️ **Mini-exercice — Loi de Hess**

❓ Calcule l'enthalpie standard de la réaction de combustion du méthane :

CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

Données : ΔfH°(CH₄, g) = −75 kJ/mol ; ΔfH°(CO₂, g) = −400 kJ/mol ; ΔfH°(H₂O, l) = −285 kJ/mol.

La réaction est-elle exo ou endothermique ?

💡 Voir la correction

ΔᵣH° = [1 × ΔfH°(CO₂) + 2 × ΔfH°(H₂O)] − [1 × ΔfH°(CH₄) + 2 × ΔfH°(O₂)]

**Produits :** (−400) + 2 × (−285) = −400 − 570 = **−970Réactifs :** (−75) + 2 × 0 = **−75**

ΔᵣH° = −970 − (−75) = −970 + 75 = **−895 kJ/mol**

(Astuce mentale : 2 × 285 = 2 × 300 − 2 × 15 = 600 − 30 = 570)

ΔᵣH° < 0 → réaction **exothermique** (libère ~895 kJ par mole de méthane brûlé). C'est la réaction du gaz de ville !

[FIGURE chimie_ch07_fig03.png]

**Figure 5** — Diagramme enthalpique : réaction exothermique (ΔH < 0, produits plus stables) vs endothermique (ΔH > 0, produits moins stables)

## VI. Ce qui tombe au concours — Formules et méthodo QCM

En concours, les questions de thermodynamique se résument à **3 grandes catégories**. Voici les formules essentielles et la méthode pour chaque type.

### 1. Toutes les formules en un tableau

|

| Formule
| Conditions
| Grandeurs

| **PV = nRT**
| Gaz parfait
| P(Pa), V(m³), n(mol), T(K), R = 8,314

| **ΔU = W + Q**
| 1er principe (toujours vrai)
| U : énergie interne

| **W = −P_ext × ΔV**
| P constante
| Compression : W > 0 ; Détente : W < 0

| **Q_p = n·C_p·ΔT**
| P constante, pas de changement d'état
| C_p : capacité calorifique à P cste

| **Q_v = n·C_v·ΔT = ΔU**
| V constant
| C_v : capacité calorifique à V cste

| **C_p − C_v = R**
| Gaz parfait
| R = 8,314 J·K⁻¹·mol⁻¹

| **H = U + PV**
| Définition de l'enthalpie
| Fonction d'état extensive

| **ΔH = Q_p**
| P constante
| Lien direct enthalpie ↔ chaleur

| **ΔᵣH° = Σ(coeff × ΔfH°) prod − Σ(coeff × ΔfH°) réact**
| Loi de Hess
| ΔfH°(corps simple) = 0

| **P_i = x_i × P_total**
| Dalton (mélanges gazeux)
| x_i = n_i/n_total, Σx_i = 1

### 2. Méthode en 5 étapes face à un problème

🔑 **Méthode en 5 étapes**

- **Identifier le système** : ouvert, fermé ou isolé ?

- **Identifier la transformation** : isotherme, isobare, isochore, adiabatique ?

- **Écrire le 1er principe** : ΔU = W + Q, puis simplifier selon les conditions

- **Y a-t-il un changement d'état ?** Si oui, décomposer en 3 sous-étapes (chauffage + changement + chauffage)

- **Appliquer la formule adaptée** : Hess pour ΔᵣH°, Q = nCΔT pour chaleur, W = −PΔV pour travail

### 3. Les 8 pièges classiques du concours

💡 **Mémo — Les 8 pièges de thermo**

- **U et H ne dépendent que de l'état du système** (état initial et final) — Q et W, eux, dépendent du chemin suivi. Piège classique !

- **ΔU = Q_v** (à V constant) mais **ΔH = Q_p** (à P constant) — ne pas confondre !

- C_p > C_v toujours, et **C_p − C_v = R** pour un gaz parfait

- Changement d'état = **T constante** → ne pas oublier la chaleur latente

- ΔfH° d'un corps simple (O₂, N₂, C graphite) = **0**

- Convention de signe : **reçu = positif** du point de vue du système

- Compression → W > 0 ; Détente → W < 0

- Pente de fusion de l'eau **négative** (exception due aux liaisons H)

### 4. QCM type concours — Entraîne-toi

✏️ **QCM type 1 — Identifier les fonctions d'état**

❓ Parmi les propositions suivantes, lesquelles sont **VRAIES** ?

A. L'énergie interne U est une fonction d'état.

B. La chaleur Q est une fonction d'état.

C. L'enthalpie H est une fonction d'état extensive.

D. Le travail W ne dépend pas du chemin suivi.

E. À volume constant, ΔU = Q_v.

💡 Voir la correction

**A. VRAI ✅** — U est une fonction d'état : elle ne dépend que de l'état initial et final.

**B. FAUX ❌** — Q dépend du chemin suivi. Piège classique !

**C. VRAI ✅** — H = U + PV est bien une fonction d'état, et elle est extensive (proportionnelle à la quantité de matière).

**D. FAUX ❌** — W dépend du chemin, tout comme Q.

**E. VRAI ✅** — À V constant, W = 0 (pas de variation de volume), donc ΔU = W + Q = 0 + Q_v = Q_v.

→ Réponses : **A, C, E**.

✏️ **QCM type 2 — Calcul enthalpie (Hess)**

❓ Soit la réaction de combustion du propane :

C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(l)

Données : ΔfH°(C₃H₈, g) = −100 kJ/mol ; ΔfH°(CO₂, g) = −400 kJ/mol ; ΔfH°(H₂O, l) = −300 kJ/mol.

A. ΔᵣH° = −2 200 kJ/mol

B. ΔᵣH° = −2 400 kJ/mol

C. La réaction est endothermique.

D. ΔfH°(O₂) = 0 car c'est un corps simple dans son état standard.

E. Si on inverse la réaction, ΔᵣH° devient positif.

💡 Voir la correction

**Calcul :**

ΔᵣH° = [3 × ΔfH°(CO₂) + 4 × ΔfH°(H₂O)] − [ΔfH°(C₃H₈) + 5 × ΔfH°(O₂)]

**Produits :** 3 × (−400) + 4 × (−300) = −1 200 − 1 200 = **−2 400Réactifs :** (−100) + 5 × 0 = **−100**

ΔᵣH° = −2 400 − (−100) = −2 400 + 100 = **−2 300 kJ/mol**

Astuce mentale : 3×400 = 1 200, 4×300 = 1 200, total = 2 400. Puis 2 400 − 100 = 2 300.

**A. FAUX ❌** — Le calcul donne −2 300, pas −2 200.

**B. FAUX ❌** — −2 400 c'est le résultat si on oublie de soustraire ΔfH° du propane.

**C. FAUX ❌** — ΔᵣH° < 0 → la réaction est **exothermique** (elle libère de la chaleur).

**D. VRAI ✅** — Par définition, l'enthalpie de formation d'un corps simple dans son état standard est nulle.

**E. VRAI ✅** — Inverser une réaction inverse le signe de ΔᵣH°.

→ Réponses : **D, E**.

✏️ **QCM type 3 — Systèmes et transformations**

❓ Un gaz parfait monoatomique est comprimé de manière adiabatique. Parmi les propositions suivantes, lesquelles sont **VRAIES** ?

A. Q = 0.

B. ΔU = W.

C. La température du gaz diminue.

D. W > 0 car le gaz est comprimé.

E. ΔU > 0.

💡 Voir la correction

**A. VRAI ✅** — Adiabatique signifie par définition Q = 0 (pas d'échange de chaleur).

**B. VRAI ✅** — Si Q = 0, alors ΔU = W + 0 = W.

**C. FAUX ❌** — Lors d'une compression adiabatique, le travail fourni au gaz augmente son énergie interne → la **température augmente** (pense au gonfleur de vélo qui chauffe quand tu pompes).

**D. VRAI ✅** — Compression → ΔV < 0 → W = −P_ext × ΔV > 0. Le système reçoit de l'énergie mécanique.

**E. VRAI ✅** — ΔU = W > 0 (car W > 0). L'énergie interne augmente, ce qui est cohérent avec l'augmentation de T.

→ Réponses : **A, B, D, E**.

[FIGURE chimie_ch07_fig04.png]

**Figure 6** — Carte mentale : systèmes, transformations, 1er principe et enthalpie — toutes les formules clés en un coup d'œil

En médecine, on utilise la loi de Hess pour calculer l'énergie produite par les réactions métaboliques. Par exemple, la combustion du glucose (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O) libère ≈ 2 800 kJ/mol — c'est l'énergie que tes cellules récupèrent sous forme d'ATP. En réanimation, mesurer les ΔᵣH° de combustion permet d'adapter la nutrition artificielle d'un patient à ses besoins énergétiques réels.

×

medeos-sante.fr