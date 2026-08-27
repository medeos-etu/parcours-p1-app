Chapitre 9 : Cinétique chimique — Vitesse, ordre et catalyse - MEDEOS — Partie 2

Chapitre 9 — Partie 2

# Cinétique chimique — Vitesse, ordre et catalyse

Comprendre à quelle vitesse se déroulent les réactions et comment les accélérer

## 🎯 Partie 2 — Loi d'Arrhenius, état de transition et catalyse

Dans la **Partie 1**, tu as appris à **mesurer la vitesse d'une réaction** et à l'exprimer par une loi de vitesse (v = k·[A] p ). Tu as vu ce qu'est l'**ordre** d'une réaction et comment la concentration des réactifs évolue dans le temps pour les ordres 0, 1 et 2, avec leur temps de demi-vie t 1/2 .

Dans cette **Partie 2**, on passe du comment au pourquoi : on cherche à comprendre ce qui se passe vraiment quand des molécules réagissent. Tu découvriras la **théorie des collisions** et la **loi d'Arrhenius** (qui explique pourquoi chauffer accélère une réaction), la notion d'**énergie d'activation** et d'**état de transition** sur le profil énergétique, et enfin la **catalyse** — comment un catalyseur, y compris les enzymes du vivant, accélère une réaction sans être consommé.

## III. Loi d'Arrhenius et théorie des collisions

Tu sais maintenant décrire la vitesse (loi de vitesse) et calculer comment la concentration évolue (ordres 0, 1, 2). Mais une question fondamentale reste ouverte : **pourquoi la constante k dépend-elle de la température ?** Et d'où vient cette « énergie d'activation » Ea dont on a parlé dans le tableau des facteurs ? C'est la **théorie des collisions** et la **loi d'Arrhenius** qui répondent.

### 1. Théorie des collisions

Pour qu'une réaction ait lieu, il faut que les molécules se **rencontrent** (collision). Mais toutes les collisions ne mènent pas à une réaction — loin de là. Deux conditions doivent être réunies **simultanément** :

|

| Condition
| Facteur
| Explication

| **Orientation correcte**
| Facteur stérique (A)
| Les molécules doivent se percuter dans la bonne configuration spatiale

| **Énergie suffisante**
| Facteur énergétique (Ea)
| L'énergie cinétique du choc doit être ≥ énergie d'activation Ea

En phase gazeuse, les molécules subissent des milliards de collisions par seconde. Si elles étaient toutes efficaces, les réactions seraient instantanées. En réalité, seule **1 collision sur 10¹⁰ à 10¹²** est efficace — les autres sont des chocs élastiques (les molécules rebondissent sans réagir).

🔑 **Collision efficace = 2 conditions simultanées ★★★**

- **Ec ≥ Ea** — l'énergie cinétique de collision doit dépasser l'énergie d'activation. Si les molécules se touchent trop doucement, rien ne se passe.

- **Bonne orientation (géométrie stérique)** — les molécules doivent s'approcher dans le bon sens. Ex : si un groupement réactif est "caché" derrière la molécule, la collision ne donne rien même avec assez d'énergie.

→ Le facteur A dans k = A × e −Ea/RT tient compte de cette orientation : c'est la fréquence des collisions bien orientées .

💡 **Astuce** — Plus une molécule est **petite et simple**, plus la probabilité d'une bonne orientation est élevée. C'est le facteur stérique : les molécules encombrées (ramifiées) réagissent plus lentement.

🔑 **Énergie d'activation Ea ★★★**

- Ea est l'énergie **minimale** que doivent posséder les réactifs pour que la réaction démarre

- Ea est **toujours positive** (Ea > 0)

- Ea est **indépendante de T** et **indépendante des concentrations** — ⚠️ attention au piège : quand on chauffe, T ne baisse pas Ea ! T fait agiter les molécules plus vite → leur énergie cinétique Ec augmente → plus de molécules franchissent la barrière. Ea reste la même, c'est Ec qui monte.

- Ea ne dépend que de la **nature de la réaction** (et du catalyseur éventuel)

- Plus Ea est grande → plus la réaction est **lente** (la barrière est haute)

### 2. Loi d'Arrhenius

Tu as vu que la vitesse dépend de deux facteurs : l'orientation (facteur stérique) et l'énergie (Ea). La loi d'Arrhenius rassemble **ces deux ingrédients en une seule formule**. Le **A** dans la formule, c'est exactement le facteur stérique dont on vient de parler — la fréquence des collisions bien orientées . Et le terme exponentiel e −Ea/RT , c'est la **fraction des molécules** qui ont assez d'énergie pour réagir :

Loi d'Arrhenius
k = A × e −Ea/RT

- **A** = facteur pré-exponentiel (facteur de fréquence) → contient le facteur stérique

- **Ea** = énergie d'activation (J·mol⁻¹) → énergie minimale pour une collision efficace

- **R** = 8,314 J·K⁻¹·mol⁻¹

- **T** = température en **Kelvin**

🔑 **Loi d'Arrhenius — À retenir par cœur ★★★**

k = A × e −Ea/RT

L'exponentielle e −Ea/RT est toujours entre 0 et 1 → c'est la **fraction des molécules** qui ont assez d'énergie pour réagir.

| | Si on… | Dans la formule… | Résultat

| **↑ Température**
| Ea/RT ↓ → e −Ea/RT ↑ → k ↑
| Réaction **plus rapide**
(les molécules ont plus d'énergie)

| **Ajoute un catalyseur**
| Ea ↓ → Ea/RT ↓ → e −Ea/RT ↑ → k ↑
| Réaction **plus rapide**
(la barrière est plus basse)

⚠️ Ea et A ne changent **pas** quand on change T — seul le catalyseur modifie Ea.

Règle empirique : une augmentation de T de **10 K** multiplie la vitesse par un facteur **~2** (entre 1,5 et 5). Attention : ce n'est pas parce que Ea change (elle reste fixe !) — c'est parce que le rapport Ea/RT diminue quand T augmente → l'exponentielle e −Ea/RT grandit → k augmente.

✏️ **Mini-exercice — Loi d'Arrhenius**

❓ On donne k = A × e −Ea/RT avec R ≈ 8 J·K⁻¹·mol⁻¹ et T = 300 K.

a) Quelle est l'unité de k pour une réaction d'ordre 1 ?

b) Si Ea = 48 000 J·mol⁻¹, calcule le rapport Ea/RT. Que représente ce nombre ?

c) Si on double A (meilleure orientation des chocs), comment k est-il modifié ?

💡 Voir la correction

**a)** En ordre 1, k est en **s⁻¹** (et A a la même unité que k).

**b)** Ea/RT = 48 000 / (8 × 300) = 48 000 / 2 400 = **20**

→ Ce nombre sans unité représente la « hauteur de la barrière » exprimée en multiples de l'énergie thermique RT. Plus il est grand, plus peu de molécules franchissent la barrière → réaction lente.

**c)** k = A × e −Ea/RT → si A double, k **double** aussi (relation linéaire avec A). Le facteur stérique est amélioré, mais Ea n'a pas changé.

## IV. État de transition et profil énergétique

On a vu avec Arrhenius que les molécules doivent posséder une énergie ≥ Ea pour réagir. Mais concrètement, **que se passe-t-il au moment de la collision ?**

### 1. Le complexe activé

Au moment de la collision efficace, il y a un instant très bref (≈ 10⁻¹³ s) où les **anciennes liaisons cassent** et les **nouvelles se forment** en même temps. C'est le **complexe activé**.

🔑 **État de transition — 4 points à retenir**

- **Énergie maximale** sur le chemin réactionnel (le sommet du col)

- **Durée de vie ≈ 10⁻¹³ s** → impossible à isoler

- Peut évoluer vers les **produits** ou revenir vers les **réactifs**

- Le synchronisme rupture/formation de liaisons **abaisse le coût énergétique** : Ea est bien inférieure à l'énergie qu'il faudrait pour tout casser puis tout refaire

### 2. Profil énergétique et relation Ea − ΔH

Imagine une courbe en forme de **montagne**. À gauche en bas : les réactifs. À droite en bas : les produits. Au sommet : l'état de transition. La hauteur à grimper depuis les réactifs = **Ea₁** (sens direct). La hauteur à grimper depuis les produits = **Ea₂** (sens inverse).

[FIGURE chimie_ch09_profil_energetique.png]

**Profil énergétique** — Réaction exothermique (ΔH < 0) : les produits sont plus bas que les réactifs. Ea₁ = hauteur à grimper depuis les réactifs (sens direct). Ea₂ = hauteur à grimper depuis les produits (sens inverse). ΔH = Ea₁ − Ea₂ = différence de hauteur entre les deux pieds.

**Et ΔH dans tout ça ?** Tu te souviens (Ch8) que ΔH = différence d'énergie entre produits et réactifs. Eh bien sur le profil, c'est simplement **la différence de hauteur entre le pied gauche (réactifs) et le pied droit (produits)**. Si les produits sont plus bas → ΔH < 0 (exothermique, énergie libérée). Si les produits sont plus haut → ΔH > 0 (endothermique). Et mathématiquement :

Relation Ea et ΔH
ΔH = Ea₁ − Ea₂

C'est logique : la différence entre « monter depuis la gauche » et « monter depuis la droite », c'est exactement le décalage de hauteur entre les deux pieds = ΔH.

**À quoi ça sert concrètement au concours ?**

- On te donne Ea₁ et ΔH → tu calcules **Ea₂ = Ea₁ − ΔH**

- On te demande si un catalyseur change ΔH → **non**, il abaisse Ea₁ et Ea₂ du même montant, ΔH reste identique

- On te demande dans quel sens la réaction est la plus rapide → c'est le sens avec le **plus petit Ea** (barrière la plus basse)

✏️ **Mini-exercice — Profil énergétique et Ea**

❓ Réaction exothermique : ΔH = −80 kJ·mol⁻¹, Ea₁ = 120 kJ·mol⁻¹.

a) Calcule Ea₂.

b) Un catalyseur abaisse Ea₁ à 50 kJ·mol⁻¹. Nouveau Ea₂ ? ΔH change-t-il ?

💡 Voir la correction

**a)** On part de la formule : ΔH = Ea₁ − Ea₂

On isole Ea₂ : **Ea₂ = Ea₁ − ΔH**

Application : Ea₂ = 120 − (−80) = 120 + 80 = **200 kJ·mol⁻¹**

Vérification logique : la réaction est exothermique → les produits sont plus bas que les réactifs. Le sommet (état de transition) est fixe. Les produits étant plus bas, ils sont donc plus loin du sommet → il faut grimper plus haut pour y accéder depuis les produits → Ea₂ > Ea₁ ✅ (200 > 120 ✅)

**b)** ΔH ne change **pas** (le catalyseur ne modifie pas la thermodynamique).

Ea₂ = 50 − (−80) = **130 kJ·mol⁻¹**.

→ Le catalyseur a abaissé Ea₁ de 70 kJ et Ea₂ de 70 kJ aussi. Il accélère les **deux sens**.

## V. La catalyse : homogène, hétérogène et enzymatique

Tu sais maintenant que la vitesse dépend de la température (Arrhenius) et que les molécules doivent franchir une barrière d'énergie Ea pour réagir. Mais il existe un moyen de **contourner** cette barrière sans chauffer : c'est le **catalyseur**. Il ne fournit pas d'énergie — il propose un **chemin alternatif** où la montagne à franchir est plus basse. C'est un concept capital pour le vivant : sans les enzymes (catalyseurs biologiques), la quasi-totalité des réactions du corps humain seraient trop lentes pour maintenir la vie.

### 1. Définition et propriétés d'un catalyseur

🔑 **Définition — Le catalyseur**

Un catalyseur est une substance qui **augmente la vitesse** d'une réaction chimique en **abaissant l'énergie d'activation** (Ea), en proposant un **chemin réactionnel alternatif**.

**Analogie** : imagine que tu veux passer d'une vallée à une autre, mais il y a une montagne de 3 000 m entre les deux. Sans catalyseur, tu dois escalader le sommet (Ea élevée → réaction lente). Avec un catalyseur, c'est comme si quelqu'un avait creusé un **tunnel** à 1 500 m d'altitude : le trajet est le même (mêmes vallées de départ et d'arrivée → même ΔH), mais la montée est bien moins rude → la réaction est **beaucoup plus rapide**.

Propriétés fondamentales :

- Il **n'est pas consommé** : il est utilisé puis régénéré (n'apparaît pas dans le bilan)

- Il **ne modifie pas la thermodynamique** : ΔH, ΔG et Keq restent identiques

- Il accélère la réaction dans les **deux sens** (direct et inverse) de façon égale

- Il **ne déplace pas l'équilibre** (il y mène plus vite, c'est tout)

- Il est **spécifique** d'un type de réaction

- Il peut être solide, liquide, gazeux, ion, molécule ou métal

💡 **Astuce — Ce qu'un catalyseur NE fait PAS**

Piège classique en première année : un catalyseur :

- ❌ Ne modifie **pas** ΔG (ne rend pas spontanée une réaction qui ne l'est pas)

- ❌ Ne déplace **pas** l'équilibre (pas de modification de Keq)

- ❌ Ne change **pas** ΔH de la réaction

- ✅ **Abaisse Ea** uniquement → modifie le profil énergétique, pas le bilan

### 2. Catalyse homogène

Le catalyseur est dans la **même phase** que les réactifs. Ex : ions H⁺ en solution qui catalysent une estérification. H⁺ est dans le même milieu liquide → catalyse **homogène**.

### 3. Catalyse hétérogène

Le catalyseur est dans une **phase différente** (typiquement : catalyseur **solide**, réactifs en solution ou en gaz). 3 étapes : **adsorption** (les réactifs se collent à la surface) → **réaction** → **désorption** (les produits se détachent).

⚠️ Piège : a**d**sorption (se coller à la surface, comme un post-it) ≠ a**b**sorption (pénétrer à l'intérieur, comme une éponge).

### 4. Catalyse enzymatique

Les **enzymes** = catalyseurs biologiques (protéines). Même principe : substrat se fixe au **site actif** → réaction → produits libérés, enzyme régénérée. Différence : les enzymes sont **ultra-spécifiques** (un substrat, parfois un seul énantiomère) et **exceptionnellement efficaces** (facteur 10⁶ à 10¹²).

✏️ **QCM type concours ★★★ — Enzyme comme catalyseur (type Q7)**

❓ À propos des enzymes et des catalyseurs, quelle(s) proposition(s) est (sont) exacte(s) ?

A. Un catalyseur diminue l'énergie d'activation Ea et augmente donc le rendement de la réaction.

B. La constante de vitesse k d'une réaction catalysée dépend de la température.

C. Un catalyseur modifie la thermodynamique de la réaction (ΔH, Keq).

D. L'enzyme est un catalyseur hétérogène car elle est en phase solide.

E. Les enzymes sont des catalyseurs biologiques spécifiques, régénérés à la fin de la réaction.

💡 Voir la correction détaillée

**A. FAUX ⚠️ PIÈGE** — Le catalyseur ↓ Ea et ↑ vitesse, mais il **ne change pas le rendement**. L'équilibre final (Keq) est identique avec ou sans catalyseur — on y arrive juste plus vite.

**B. VRAI ✅** — Via Arrhenius : k = A × e −Ea/RT . k dépend de T (et de Ea). Même pour une réaction enzymatique, k augmente avec T (jusqu'à la dénaturation de l'enzyme).

**C. FAUX** — Le catalyseur **ne modifie pas** la thermodynamique : Keq, ΔH, ΔG et ΔS restent inchangés. Il modifie uniquement la cinétique (vitesse).

**D. FAUX** — L'enzyme est un catalyseur **enzymatique**, pas hétérogène au sens chimique. Elle est en solution aqueuse (même phase que le substrat), ce qui la rapproche plutôt de la catalyse homogène — mais le terme exact est "catalyse enzymatique".

**E. VRAI ✅** — L'enzyme est : spécifique d'un substrat (parfois d'un seul énantiomère), régénérée après la réaction, et biologique (protéine). C'est le résumé parfait.

→ Réponses : **B, E**.

✏️ **QCM type concours ★★★ — Facteurs de vitesse et Ea**

❓ Parmi les facteurs suivants, lequel (lesquels) modifie(nt) l'énergie d'activation Ea d'une réaction ?

A. Augmenter la concentration des réactifs

B. Augmenter la température

C. Ajouter un catalyseur

D. Exposer le mélange à la lumière

E. Aucune des propositions ci-dessus

💡 Voir la correction détaillée

**A. FAUX** — La concentration modifie la **vitesse v** (car v = k[A] α ) mais pas k ni Ea.

**B. FAUX** — La température modifie k (via Arrhenius : k = A × e −Ea/RT ), ce qui change v. Mais **Ea elle-même ne change pas**.

**C. VRAI ✅** — Le catalyseur est le **seul facteur** qui modifie Ea (il l'abaisse).

**D. FAUX** — La lumière apporte de l'énergie aux molécules, ce qui peut déclencher des réactions (photochimie). Elle augmente donc v en "donnant de l'élan" aux molécules — mais elle ne **modifie pas la barrière Ea elle-même**. La barrière reste la même ; c'est juste que plus de molécules ont maintenant l'énergie pour la franchir. Seul le catalyseur modifie Ea (en proposant un chemin alternatif plus bas).

→ Réponse : **C**.

## VI. Récapitulatif — L'essentiel du chapitre et QCM de synthèse

### 1. LE message central de ce chapitre

🔑 **Pourquoi la vitesse augmente-t-elle ?**

Dans la loi d'Arrhenius k = A × e −Ea/RT , le terme e −Ea/RT est la fraction de molécules qui a assez d'énergie pour franchir la barrière Ea.

- Si **Ea diminue** (catalyseur) → le rapport Ea/RT diminue → e −Ea/RT augmente → **k augmente** → **v augmente**

- Si **T augmente** → le rapport Ea/RT diminue aussi → même effet → **k augmente** → **v augmente**

→ Le catalyseur abaisse la **montagne**. La température donne plus d'**élan**. Les deux résultats sont les mêmes : plus de molécules franchissent la barrière → la réaction va plus vite.

### 2. Ea est INDÉPENDANTE de tout sauf du catalyseur

💡 **Piège n°1 du concours — Ce qui NE modifie PAS Ea**

L'énergie d'activation Ea est une propriété **intrinsèque** de la réaction. Elle ne dépend que du chemin réactionnel.

- ❌ **La concentration** modifie v (car v = k[A] α ) mais pas k, donc pas Ea

- ❌ **La température** modifie k (via Arrhenius) et donc v, mais Ea reste la même — c'est la fraction de molécules au-dessus de Ea qui change, pas Ea elle-même

- ❌ **La surface de contact** augmente v (plus de chocs) mais ne change pas la barrière

- ❌ **La lumière** donne de l'énergie aux molécules (photochimie) mais ne modifie pas la barrière

- ✅ **Seul le catalyseur** modifie Ea : il propose un chemin alternatif où la montagne est plus basse

### 3. QCM de synthèse — Décroissance et cinétique d'ordre 1

✏️ **QCM type concours ★★★ — Décroissance d'un traceur**

❓ On suit l'activité d'un traceur radioactif utilisé en imagerie médicale. Les mesures donnent :

|
| t (jours) | 0 | 3 | 6 | 9 | 12 | 15 | 18

| Activité (dpm) | 4800 | 3394 | 2400 | 1697 | 1200 | 849 | 600

Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?

A. La décroissance est d'ordre 0

B. Le temps de demi-vie vaut 6 jours

C. La constante de vitesse k vaut environ 0,17 j⁻¹

D. Au bout de 36 jours, l'activité sera nulle

E. La constante k vaut environ 0,12 j⁻¹

💡 Voir la correction détaillée

**Étape 1 — Identifier l'ordre.**

Cherchons le t₁/₂ : quand l'activité est-elle divisée par 2 ?

- t = 0 → 4800 ; t = 6 → 2400 = 4800/2 ✅

- t = 6 → 2400 ; t = 12 → 1200 = 2400/2 ✅

- t = 12 → 1200 ; t = 18 → 600 = 1200/2 ✅

Le t₁/₂ est **constant** (6 jours) → c'est la signature d'un **ordre 1**. (En ordre 0, les différences seraient constantes, pas les rapports.)

**A. FAUX** — Ce n'est pas un ordre 0.

**B. VRAI ✅** — t₁/₂ = 6 jours, confirmé 3 fois dans le tableau.

**Étape 2 — Calculer k.**

En ordre 1 : k = ln(2) / t₁/₂ = 0,693 / 6 ≈ **0,116 j⁻¹C. FAUX** — k ≈ 0,116 j⁻¹, pas 0,17 j⁻¹. Le piège : on pourrait confondre avec 1/t₁/₂ = 1/6 ≈ 0,17 (en oubliant le ln(2) au numérateur).

**D. FAUX ⚠️ PIÈGE** — En ordre 1, la décroissance est **exponentielle** : elle tend vers 0 mais ne l'atteint jamais. À t = 36 j = 6 × t₁/₂ : activité = 4800 / 2⁶ = 4800 / 64 = **75 dpm**, pas 0.

**E. VRAI ✅** — k ≈ 0,116 ≈ 0,12 j⁻¹.

→ Réponses : **B, E**.

**🧠 Méthode à retenir :** quand on te donne un tableau de données, cherche d'abord le t₁/₂ (quand la valeur est divisée par 2). Si t₁/₂ est constant → ordre 1. Ensuite k = ln(2)/t₁/₂ et c'est tout.

### 4. QCM de synthèse — Équilibre chimique et effet de la température

✏️ **QCM type concours ★★★ — Réaction d'équilibre athermique**

❓ On fait réagir 0,80 mol de A avec 0,80 mol de B dans V = 1 L de solvant inerte, selon :

A + B ⇌ C + D

La réaction est **athermique**. Le rendement est de 75 %, c'est-à-dire qu'à l'équilibre il s'est formé 0,60 mol de C.

A. La quantité de A restante à l'équilibre est de 0,20 mol

B. La constante d'équilibre Kc vaut 9

C. La réaction est endergonique

D. Ajouter du produit D au milieu réactionnel déplace l'équilibre vers la formation de C

E. Une augmentation de la température ne modifie pas la valeur de Kc

💡 Voir la correction détaillée

**Étape 1 — Tableau d'avancement à l'équilibre.**

On part de 0,80 mol de A et 0,80 mol de B. Rendement 75 % → avancement ξ = 0,60 mol.

| | | A | B | C | D

| Initial | 0,80 | 0,80 | 0 | 0

| Équilibre | 0,80 − 0,60 = **0,20** | 0,80 − 0,60 = **0,20** | **0,60** | **0,60A. VRAI ✅** — A restant = 0,80 − 0,60 = **0,20 mol**.

**Étape 2 — Calcul de Kc.**

V = 1 L donc les concentrations = les quantités de matière.

Kc = [C][D] / ([A][B]) = (0,60 × 0,60) / (0,20 × 0,20)

Simplifions : 0,60 / 0,20 = 3, donc Kc = 3 × 3 = **9**.

**B. VRAI ✅** — Kc = 9.

**Étape 3 — Athermique, endergonique, effet de T ?**

Athermique signifie ΔH = 0 (pas de chaleur échangée).

**C. FAUX** — Kc = 9 > 1 → ΔG = −RT ln(Kc) < 0 → la réaction est **exergonique** (spontanée dans le sens direct), pas endergonique.

**D. FAUX ⚠️ PIÈGE** — Ajouter D = ajouter un **produit**. Par Le Chatelier, l'équilibre se déplace vers la **gauche** (vers les réactifs), ce qui **diminue** la formation de C. C'est l'inverse !

**E. VRAI ✅** — La réaction est athermique (ΔH = 0). D'après Van't Hoff, l'effet de T sur Kc dépend de ΔH. Si ΔH = 0, alors **Kc ne change pas** avec la température. (Attention : T augmente quand même la vitesse via Arrhenius, mais l'équilibre final reste le même.)

→ Réponses : **A, B, E**.

**🧠 Méthode à retenir :** tableau d'avancement → quantités à l'équilibre → Kc. Puis pour les questions thermo : athermique = ΔH = 0 = pas d'effet de T sur l'équilibre (Van't Hoff).

### 5. Formules essentielles — Aide-mémoire

|

| Grandeur
| Formule
| À retenir

| **Loi de vitesse**
| v = k [A] m [B] n
| m et n expérimentaux, p = m + n

| **Arrhenius**
| k = A × e −Ea/RT
| Ea ↓ ou T ↑ → k ↑ → v ↑

| **Ordre 0**
| [A] = [A]₀ − kt
| t₁/₂ = [A]₀ / 2k

| **Ordre 1**
| [A] = [A]₀ × e −kt
| t₁/₂ = ln(2)/k ≈ 0,693/k

| **Ordre 2**
| 1/[A] = 1/[A]₀ + kt
| t₁/₂ = 1/(k[A]₀)

| **ΔH et Ea**
| ΔH = Ea(directe) − Ea(inverse)
| Profil énergétique ↔ thermodynamique

×

medeos-sante.fr