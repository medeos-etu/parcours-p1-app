Chapitre 8 : Entropie, enthalpie libre de Gibbs et équilibres - MEDEOS — Partie 1

Chapitre 8 — Partie 1

# Entropie, enthalpie libre de Gibbs et équilibres

Désordre, spontanéité et constante d'équilibre : savoir prédire le sens d'une réaction

## 🎯 Objectifs d'apprentissage

Au chapitre 7, tu as appris le **premier principe** (ΔU = W + Q) et comment calculer l'enthalpie de réaction grâce à la loi de Hess. Mais le premier principe ne répond pas à une question fondamentale : **une réaction va-t-elle se produire spontanément ?** Le fait qu'une réaction soit exothermique ne suffit pas toujours pour qu'elle démarre seule.

Ce chapitre introduit deux nouvelles fonctions — l'**entropie S** (mesure du désordre) et l'**enthalpie libre G** (critère de spontanéité) — et montre comment prédire le sens d'une réaction et son point d'équilibre. Attention : prédire qu'une réaction est possible ne dit rien sur sa **vitesse**, qui relève de la cinétique chimique.

Après ce chapitre, tu sauras :

- **Définir** l'entropie et prédire si elle augmente ou diminue

- **Énoncer** les 2e et 3e principes de la thermodynamique

- **Calculer** ΔG = ΔH − TΔS et en déduire la spontanéité

- **Utiliser** la relation ΔG° = −RT ln(Keq)

- **Appliquer** le principe de Le Chatelier pour prédire le déplacement d'un équilibre

## I. L'entropie S : mesurer le désordre

### 1. Définition intuitive

Imagine un jeu de cartes neuf : toutes les cartes sont classées par couleur et par ordre (pique, cœur, carreau, trèfle). Si tu lances les cartes en l'air, elles retombent dans un désordre complet. Revenir à l'état ordonné de départ est statistiquement quasi impossible. C'est exactement ça, l'entropie : une **mesure du désordre** (ou plus précisément, du nombre de façons d'arranger les particules).

Entropie statistique (Boltzmann)
S = k_B × ln(Ω)

- **k_B** = constante de Boltzmann = 1,381 × 10⁻²³ J·K⁻¹

- **Ω** = nombre de micro-états = le nombre de façons différentes dont les particules peuvent se répartir tout en donnant le même résultat visible à notre échelle

- Plus Ω est grand → plus S est grand → plus le système est désordonné

🔑 **Notion clé — Propriétés de l'entropie**

- L'entropie S est une **fonction d'état** (sa variation ne dépend que de l'état initial et final, pas du chemin — comme H et U vues au chapitre 7)

- Unité : **J·K⁻¹·mol⁻¹**

- Contrairement à U et H, on peut connaître la **valeur absolue** de S (grâce au 3e principe, Section II)

- S est **toujours positive** pour tout composé à T > 0 K

### 2. Quand l'entropie augmente-t-elle ?

Retiens cette règle simple : **tout ce qui augmente le désordre augmente l'entropie** (ΔS > 0). À l'inverse, tout ce qui ordonne ou confine diminue l'entropie (ΔS < 0).

🔑 **Les 6 cas concrets pour prédire ΔS — Ce qui tombe au concours**

- **Changement d'état solide → liquide → gaz** : l'entropie augmente (ΔS > 0). Dans l'autre sens (gaz → liquide → solide), elle diminue (ΔS < 0). Exemple : H₂O(s) → H₂O(l) → ΔS > 0.

- **Température qui augmente** (à même état physique) : ΔS > 0. Pourquoi ? La température, c'est exactement la mesure de l'**agitation des particules** : plus il fait chaud, plus les molécules vibrent, se déplacent et s'entrechoquent vite — plus elles sont désordonnées. C'est d'ailleurs pour ça que **la chaleur va naturellement du chaud vers le froid** et jamais l'inverse : les particules très agitées (chaud) transmettent leur mouvement aux particules peu agitées (froid), qui se mettent à bouger à leur tour. Ce n'est pas une règle arbitraire — c'est simplement que le désordre (l'agitation) se propage spontanément, jamais l'inverse. À l'inverse, si T diminue : ΔS < 0 (les particules se calment, plus ordonnées). Exemple : Zn(398 K) → Zn(298 K) → ΔS < 0.

- **Volume qui augmente / Pression qui diminue** (gaz) : ΔS > 0. Inversement, **compression** (P augmente) : ΔS < 0. Exemple : N₂(g, 1 bar) → N₂(g, 3 bar) → compression → ΔS < 0.

- **Nombre de moles de gaz qui augmente** : ΔS > 0. Qui diminue : ΔS < 0. Exemple : H₂O₂(g) → H₂(g) + O₂(g) → 1 mole → 2 moles de gaz → ΔS > 0.

- **Dissolution d'un solide ionique** : ΔS > 0 (un cristal ordonné se disperse en ions libres dans le solvant). Exemple : NaCl(s) → Na⁺(aq) + Cl⁻(aq) → ΔS > 0.

- **Mélange de gaz ou de solutions** : ΔS > 0 (augmentation du désordre par dispersion).

⚠️ **Erreur classique au QCM** : confondre « le nombre total de moles augmente » avec « le nombre de moles **de gaz** augmente ». C'est le nombre de moles **de gaz** qui compte le plus pour l'entropie, car les gaz ont une entropie bien supérieure aux liquides et solides.

### 3. Classement des entropies standard

Ordre des entropies standard
S°(solide) < S°(liquide) < S°(gaz)

C'est logique : dans un solide, les atomes sont rangés dans un réseau cristallin (très ordonné), dans un liquide ils bougent plus librement, et dans un gaz ils sont complètement dispersés.

### 4. Calcul de la variation d'entropie de réaction

Comme pour l'enthalpie (loi de Hess), on peut calculer la variation d'entropie standard d'une réaction :

Loi de Hess pour l'entropie
ΔᵣS° = Σ νᵢ · S°(produits) − Σ νᵢ · S°(réactifs)

💡 **Astuce — Pourquoi on écrit S° et pas ΔfS° ?**

Au Ch7, pour calculer ΔᵣH°, tu utilisais des **enthalpies de formation ΔfH°** — c'est-à-dire des variations par rapport à un état de référence, car on ne peut pas mesurer la valeur absolue de H.

Pour l'entropie, c'est différent : grâce au **3e principe de Nernst** (Section II), on sait que S = 0 à −273 °C. On connaît donc le **zéro absolu de l'entropie**, ce qui permet de mesurer la valeur de S de n'importe quelle substance depuis zéro. C'est pourquoi on utilise directement les **S° absolus** dans la formule, et non des "ΔfS°".

⚠️ Conséquence piège : S°(O₂) = 205 J·K⁻¹·mol⁻¹ ≠ 0. Pour l'entropie, les corps simples **ne valent pas zéro** — contrairement à ΔfH°(O₂) = 0 en enthalpie.

💡 **Astuce — Prédire le signe de ΔᵣS° sans calcul**

Compte le **nombre de moles de gaz** de chaque côté. Si le nombre de moles de gaz **augmente** → ΔᵣS° > 0 (désordre augmente). Si le nombre de moles de gaz **diminue** → ΔᵣS° < 0.

Exemple : CaCO₃(s) → CaO(s) + CO₂(g) → on passe de 0 mole de gaz à 1 mole de gaz → ΔᵣS° > 0 ✅

✏️ **QCM type concours — Variation d'entropie ΔS° négative**

❓ Parmi les réactions suivantes, laquelle (lesquelles) correspond(ent) à une variation d'entropie ΔᵣS° **négative** ?

A. H₂O₂(g) ⇌ H₂(g) + O₂(g)

B. Zn(398 K) ⇌ Zn(298 K)

C. H₂O(s) ⇌ H₂O(l)

D. N₂(g, 1 bar) ⇌ N₂(g, 3 bar)

E. NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq)

💡 Voir la correction détaillée

**A. FAUX** — 1 mole de gaz → 2 moles de gaz. Le nombre de moles de gaz augmente → **ΔS > 0**.

**B. VRAI ✅** — Même substance, mais la température diminue (398 K → 298 K). Moins d'agitation thermique = moins de désordre → **ΔS < 0**.

**C. FAUX** — Passage solide → liquide = fusion. Le liquide est plus désordonné que le solide → **ΔS > 0**.

**D. VRAI ✅** — Même gaz, mais la pression augmente (1 bar → 3 bar) = compression. Le gaz est plus confiné → **ΔS < 0**.

**E. FAUX** — Dissolution d'un cristal ionique : le solide ordonné se disperse en ions libres dans le solvant → **ΔS > 0**.

→ Réponses : **B, D**.

## II. Les 2e et 3e principes de la thermodynamique

Tu sais maintenant ce qu'est l'entropie et comment prédire si elle augmente ou diminue. Mais une question reste ouverte : **est-ce que l'entropie d'un système peut diminuer ?** La réponse est oui — mais à une condition. C'est le **deuxième principe** qui fixe la règle du jeu.

### 1. Le deuxième principe

Le premier principe dit que l'énergie se conserve (ΔU = W + Q). Mais il ne dit **pas dans quel sens** vont les choses. Si tu mets un glaçon dans un café chaud, le glaçon fond et le café refroidit — jamais l'inverse. C'est le **deuxième principe** qui explique pourquoi.

🔑 **Deuxième principe — Énoncé**

Imagine un glaçon posé sur une table dans une pièce chaude. Le **système**, c'est le glaçon. L'**extérieur**, c'est l'air de la pièce autour. Le glaçon fond : il devient plus désordonné (solide → liquide), donc son entropie augmente . Pour fondre, il absorbe de la chaleur de l'air ambiant — l'air refroidit légèrement, devient un peu moins agité, son entropie diminue un tout petit peu. Mais le gain d'entropie du glaçon est plus grand que la perte d'entropie de l'air. Le bilan total est positif.

C'est ça le 2e principe : dans la nature, quand quelque chose se passe spontanément, **le désordre total (système + tout ce qui l'entoure) augmente toujours**. On appelle ce "tout" l'**univers thermodynamique**.

Deuxième principe
ΔS_univers = ΔS_système + ΔS_extérieur ≥ 0

- **ΔS_univers > 0** → transformation **spontanée** — elle se fait toute seule (comme le glaçon qui fond)

- **ΔS_univers = 0** → transformation **réversible** — le système est à l'équilibre, rien ne bouge spontanément

- **ΔS_univers < 0** → **impossible** — cela voudrait dire que l'univers devient spontanément plus ordonné. C'est comme si une chambre en désordre se rangeait toute seule pendant la nuit : ça n'arrive jamais. Le désordre se crée spontanément, il ne disparaît jamais sans qu'on fournisse un effort de l'extérieur.

⚠️ **Piège** : l'entropie du système seul peut très bien diminuer — l'eau qui gèle devient plus ordonnée (ΔS_système < 0). Ce n'est pas interdit, à condition que l'extérieur (l'air de la pièce qui reçoit la chaleur dégagée par la congélation) gagne encore plus d'entropie pour compenser, de sorte que ΔS_univers reste ≥ 0 au total.

### 2. Lien entre entropie et chaleur

Avant tout, clarifions deux mots qu'on confond souvent :

- La **température T**, c'est une **mesure** — elle indique à quel point les molécules d'un objet sont agitées en ce moment . C'est comme la vitesse d'une voiture sur le compteur. 100 °C = les molécules vibrent vite. 0 °C = elles vibrent lentement.

- La **chaleur Q**, c'est un **transfert** — c'est de l'énergie qui se déplace d'un objet vers un autre parce qu'ils sont à des températures différentes. C'est comme le carburant qui passe d'un réservoir à un autre. Quand tu poses une casserole froide sur un feu, la chaleur Q circule du feu vers la casserole — et la température de la casserole monte.

Analogie : la température, c'est le niveau d'eau dans un réservoir . La chaleur, c'est l'eau qui coule d'un réservoir à un autre. On peut avoir beaucoup d'eau qui coule (grande Q) sans que le niveau monte beaucoup si le réservoir est déjà grand (grande T).

Donc : quand un système reçoit de la chaleur (Q > 0), ses molécules s'agitent davantage → plus de désordre. Quand il en cède (Q < 0), elles se calment → moins de désordre. On peut quantifier ça :

Entropie et chaleur
ΔS = Q / T

- **Q > 0** (le système reçoit de la chaleur) → ΔS > 0 → le désordre augmente ✅

- **Q < 0** (le système cède de la chaleur) → ΔS < 0 → le désordre diminue

- **T grand** → ΔS petit : si le système est déjà très chaud (déjà très agité), recevoir 100 J de plus ne change presque rien — c'est comme verser un verre d'eau dans la mer. Si T est petit (peu agité), les mêmes 100 J font un effet énorme.

💡 **Astuce — Cette formule explique pourquoi la chaleur va du chaud vers le froid**

Rappel des unités : Q est en **Joules (J)**, T est la **température en Kelvin (K)**, donc ΔS = Q/T est bien en **J/K** — l'unité de l'entropie.

Imagine un objet chaud à 400 K et un objet froid à 200 K. On transfère 100 J de l'objet chaud vers l'objet froid :

- L'objet chaud **perd** : ΔS = −100 J / 400 K = **−0,25 J/K**

- L'objet froid **gagne** : ΔS = +100 J / 200 K = **+0,50 J/K**

- Bilan total : −0,25 + 0,50 = **+0,25 J/K > 0** ✅ → spontané (2e principe respecté)

Maintenant, si on essayait de transférer 100 J dans l'autre sens (du froid vers le chaud) :

- L'objet froid perdrait : ΔS = −100 J / 200 K = −0,50 J/K

- L'objet chaud gagnerait : ΔS = +100 J / 400 K = +0,25 J/K

- Bilan total : −0,50 + 0,25 = **−0,25 J/K < 0** ❌ → impossible (2e principe violé)

Ce n'est donc pas une règle arbitraire que "le chaud va vers le froid" — c'est une **conséquence mathématique directe** du 2e principe : le seul sens qui fait augmenter l'entropie totale, c'est chaud → froid.

### 3. Le troisième principe (Nernst)

🔑 **Troisième principe (Nernst)**

Tu te souviens qu'au Ch7, pour calculer des enthalpies, on avait besoin d'un **point de référence** : on avait décidé arbitrairement que ΔfH°(corps simple) = 0. C'était une convention humaine, un choix pratique, pas quelque chose d'ancré dans la nature.

Pour l'entropie, on n'a pas besoin de convention : il existe un **zéro naturel et universel**. À −273,15 °C (0 K, le froid absolu), toute agitation thermique cesse. Un cristal parfait à cette température a ses atomes **totalement immobiles et parfaitement rangés** — désordre zéro, donc S = 0. C'est un fait physique, pas un choix.

Troisième principe
S°(cristal parfait, 0 K) = 0

Conséquence : on peut mesurer des **valeurs absolues** de S° en partant de ce zéro, comme on mesure une distance depuis un point fixe. C'est pour ça qu'on écrit S°(O₂) = 205 J·K⁻¹·mol⁻¹ et pas ΔfS°(O₂) — la valeur absolue est connue. Et c'est pour ça que S°(corps simple) ≠ 0, contrairement à ΔfH°(corps simple) = 0 en enthalpie.

💡 **Astuce — Les 3 principes, à quoi sert chacun ?**

- **1er principe** (ΔU = W + Q) : répond à « combien d'énergie est échangée ? » — c'est la comptabilité de l'énergie

- **2e principe** (ΔS_univers ≥ 0) : répond à « dans quel sens va la réaction ? » — c'est la boussole de la spontanéité

- **3e principe** (S = 0 à 0 K) : répond à « depuis où on compte l'entropie ? » — c'est le point de départ absolu qui permet de donner une valeur à S°

### 4. Le saut d'entropie lors d'un changement d'état

Lors d'un changement d'état (fusion, vaporisation…), l'entropie subit un **saut brutal**, comme l'enthalpie. Ce saut se calcule avec :

Entropie de changement d'état
ΔS_changement = ΔH_changement / T_changement

Deux exemples concrets avec l'eau :

- **Vaporisation** (liquide → vapeur à 100 °C = 373 K) : pour transformer l'eau en vapeur, il faut lui fournir de l'énergie — ΔH_vap ≈ +40 000 J/mol (positif, on chauffe). La vapeur d'eau est beaucoup plus désordonnée que l'eau liquide (les molécules volent librement dans tous les sens). Donc : ΔS_vap ≈ +40 000 / 400 = **+100 J·K⁻¹·mol⁻¹** → désordre augmente ✅

(On arrondit 373 K à 400 K pour le calcul mental — la vraie valeur est +109, même ordre de grandeur.)

- **Congélation** (liquide → glace à 0 °C = 273 K) : la glace est plus ordonnée que l'eau liquide (cristal bien rangé). Le système perd du désordre. Et effectivement, ΔH_fusion ≈ +6 000 J/mol (c'est la fusion qui absorbe), donc la congélation dégage : ΔH_congélation = −6 000 J/mol. Donc : ΔS_congélation ≈ −6 000 / 300 = **−20 J·K⁻¹·mol⁻¹** → désordre diminue ✅

(Arrondi 273 K → 300 K — la vraie valeur est −22, même ordre de grandeur.)

**💡 « Mais le 2e principe dit que le désordre augmente toujours ? »**
Attention au piège classique ! Le 2e principe dit que ΔS univers ≥ 0, pas ΔS système ≥ 0. Ce sont deux choses différentes :

- **Le système** (l'eau qui gèle) perd du désordre → ΔS système = −22 J·K⁻¹·mol⁻¹

- **L'extérieur** (l'air autour) reçoit la chaleur dégagée par la congélation → il gagne du désordre → ΔS extérieur > 0

- **L'univers** (système + extérieur) : ΔS univers = (−22) + (quelque chose de > +22) = **positif** ✅

Le système peut très bien s'ordonner, à condition que l'extérieur se désordonne encore plus. C'est comme ranger ta chambre : ta chambre devient ordonnée, mais toi tu transpires, tu dépenses de l'énergie → au total, le désordre de l'univers augmente quand même.

Dans les deux cas, le signe de ΔS est cohérent avec ce qu'on attend : la formule ΔS = ΔH / T donne automatiquement le bon signe à partir du signe de ΔH.

[FIGURE chimie_ch08_fig02.png]

**Figure 1** — Évolution de S en fonction de T : augmentation continue avec des sauts aux changements d'état (fusion, vaporisation)

## III. Enthalpie libre G = H − TS et critère de spontanéité

### 1. Le problème : comment savoir si une réaction va se faire ?

Tu mélanges deux réactifs dans un tube à essai. **Est-ce que la réaction va se produire toute seule, ou pas ?** C'est LA grande question de la chimie.

En théorie, on connaît déjà la réponse grâce au 2e principe : si ΔS univers ≥ 0, la réaction se fait. Mais en pratique, c'est inutilisable :

- ΔS univers = ΔS système + ΔS extérieur

- Pour calculer ΔS extérieur , il faudrait mesurer ce qui se passe dans TOUT l'environnement autour du tube → impossible au concours !

**L'astuce de Gibbs** : le scientifique Gibbs a trouvé un raccourci génial. Il a créé une nouvelle grandeur, **G**, qui combine H et S en une seule formule — et qui ne nécessite que des données du **système** (pas de l'extérieur). C'est comme un « détecteur de spontanéité » intégré.

### 2. Définition de l'enthalpie libre (énergie de Gibbs)

Enthalpie libre de Gibbs
G = H − TS

- **G** : enthalpie libre (J ou J·mol⁻¹) — c'est l'énergie « disponible » pour faire un travail utile

- **H** : enthalpie (l'énergie totale du système, vue au Ch7)

- **T** : température (en **Kelvin** — toujours !)

- **S** : entropie (le désordre, vu en Section I)

💡 **Comment lire cette formule intuitivement ?**

G = H − TS signifie : l'énergie libre = l'énergie totale − l'énergie « gaspillée en désordre » .

Le terme **TS** représente l'énergie que le système « perd » sous forme de désordre — cette énergie-là n'est plus disponible pour faire quelque chose d'utile. Ce qui reste (G) est l'énergie réellement utilisable.

**Analogie** : imagine ton salaire (H). Tu paies des charges fixes (TS). Ce qui te reste pour vivre (G) = salaire − charges. Plus les charges sont élevées (beaucoup de désordre × haute température), moins il te reste d'énergie libre.

Comme H et S, G est une **fonction d'état** : sa variation ne dépend que de l'état initial et final (pas du chemin suivi). Au concours, on travaille toujours avec la **variation** de G lors d'une réaction :

Variation d'enthalpie libre
ΔG = ΔH − TΔS

C'est cette formule qui est la plus importante du chapitre. Elle te dit : la variation d'énergie libre = variation d'enthalpie − température × variation d'entropie . C'est un bras de fer entre deux forces :

- **ΔH** (le terme enthalpique) : est-ce que la réaction libère ou absorbe de la chaleur ?

- **TΔS** (le terme entropique) : est-ce que la réaction augmente ou diminue le désordre ?

Si les deux « poussent » dans le même sens → le résultat est clair. Si les deux s'opposent → c'est la température T qui tranche (on verra ça juste après).

💡 **Exemple numérique — Calculer ΔG**

On considère la dissolution du chlorure d'ammonium NH₄Cl dans l'eau à 25 °C (≈ 300 K pour simplifier) :

- ΔH = **+15 000 J/mol** → **endothermique** : la réaction absorbe de la chaleur

- ΔS = **+50 J·K⁻¹·mol⁻¹** → le désordre augmente (sel cristallisé → ions dispersés dans l'eau)

Application : **ΔG = ΔH − TΔS = 15 000 − 300 × 50 = 15 000 − 15 000 = 0 J/mol **

Ici ΔG ≈ 0 → on est à la limite ! En réalité avec les vraies valeurs (T = 298 K, ΔS = +65), ΔG est légèrement négatif → la dissolution est **spontanée** à 25 °C, mais juste.

👉 Le terme entropique (TΔS) compense le terme enthalpique (+15 000). Le désordre « gagne » le bras de fer de justesse.

### 3. Le critère de spontanéité — Le signe de ΔG décide tout

💡 **Rappel vocabulaire de base — Réactifs, produits, sens direct, spontané**

Avant d'aller plus loin, voici les termes qu'on va utiliser partout :

- **Réactifs** : les substances qu'on met au départ (à gauche de la flèche). Exemple : H₂ + O₂

- **Produits** : les substances formées à la fin (à droite de la flèche). Exemple : H₂O

- **Sens direct (→)** : la réaction va de gauche à droite, les réactifs se transforment en produits

- **Sens inverse (←)** : la réaction va de droite à gauche, les produits se retransforment en réactifs

- **Réaction spontanée** : une réaction qui se produit toute seule , sans qu'on ait besoin de lui fournir d'énergie en permanence pour la maintenir. Exemple : une pomme qui tombe (spontané), une pomme qui remonte (non spontané). Ou encore : le sucre qui se dissout dans l'eau (spontané), le sel qui se re-cristallise tout seul dans un verre d'eau pure (non spontané dans ces conditions).

- **⚠️ Spontané ≠ instantané** : une réaction peut être spontanée (thermodynamiquement favorable) mais très lente. Le diamant se transforme spontanément en graphite… mais ça prend des millions d'années. La spontanéité dit dans quel sens la réaction va, pas à quelle vitesse .

À **T et P constants** (= conditions du labo et du corps humain), le signe de ΔG te donne la réponse directement :

|

| Signe de ΔG
| Nom
| Interprétation

| **ΔG < 0**
| Réaction **exergonique**
| Spontanée dans le sens direct (les réactifs → les produits, ça se fait tout seul)

| **ΔG > 0**
| Réaction **endergonique**
| Non spontanée dans le sens direct (il faut fournir de l'énergie pour forcer la réaction) — mais spontanée en sens inverse
Ex : synthèse du glucose par photosynthèse (ΔG° ≈ +2 870 kJ/mol) — impossible sans apport d'énergie lumineuse.

| **ΔG = 0**
| **Équilibre**
| Ni dans un sens ni dans l'autre : le système est à l'équilibre, réactifs et produits coexistent en proportions stables

🔑 **Notion clé — Exergonique ≠ Exothermique**

Ne confonds **jamais** ces termes :

- **Exothermique** (ΔH < 0) → libère de la **chaleur**

- **Exergonique** (ΔG < 0) → libère de l'**énergie libre** → **spontanée**

Une réaction peut être endothermique (ΔH > 0) ET exergonique (ΔG < 0) si le terme TΔS est suffisamment grand et positif. Exemple : la dissolution de certains sels dans l'eau (on sent le froid, mais ça se fait tout seul).

Le signe de ΔG renseigne sur la **spontanéité**, mais **pas sur la vitesse**. Une réaction peut être spontanée (ΔG < 0) et infiniment lente (ex : diamant → graphite).

💡 **Astuce — Unités à ne pas confondre**

- **G, H** : en **J/mol** (ou kJ/mol)

- **S** : en **J·K⁻¹·mol⁻¹** — attention, l'entropie a un K⁻¹ en plus !

C'est un piège classique en première année : si on te donne ΔH en **kJ** et ΔS en **J·K⁻¹**, il faut **convertir** avant d'appliquer ΔG = ΔH − TΔS (sinon facteur 1000 d'erreur).

### 4. Influence de ΔH et ΔS sur la spontanéité

Puisque **ΔG = ΔH − TΔS**, le signe de ΔG résulte d'une **compétition** entre deux contributions :

- **ΔH** : contribution énergétique — la réaction libère-t-elle ou consomme-t-elle de l'énergie ?

- **−TΔS** : contribution entropique, amplifiée par la température T — la réaction augmente-t-elle ou diminue-t-elle le désordre ?

Selon les signes de ΔH et ΔS, il existe **4 cas**. Les 2 premiers sont simples (les deux contributions « poussent » dans le même sens). Les 2 derniers sont les plus piégeux en première année : c'est la **température** qui décide.

|

| ΔH
| ΔS
| ΔG = ΔH − TΔS
| Spontanéité
| Logique & exemple

| **< 0** (exo)
| **> 0**
| **Toujours < 0**
| ✅ Spontanée à **toute T**
|
**Double avantage :** la réaction libère de l'énergie et augmente le désordre. Les deux termes rendent ΔG négatif quelle que soit T.

Raisonnement : ΔG = (négatif) − T×(positif) → toujours négatif.

Exemple : combustion CH₄ + 2 O₂ → CO₂ + 2 H₂O. Exothermique (ΔH < 0), désordre accru par formation de gaz (ΔS > 0). Spontanée à toute température.

| **> 0** (endo)
| **< 0**
| **Toujours > 0**
| ❌ **Jamais spontanée**
|
**Double désavantage :** la réaction consomme de l'énergie et diminue le désordre. Les deux termes rendent ΔG positif quelle que soit T.

Raisonnement : ΔG = (positif) − T×(négatif) = positif + positif → toujours positif.

Exemple : synthèse d'un cristal complexe depuis des ions en solution — endothermique et très ordonné. Impossible spontanément, nécessite un apport d'énergie.

| **< 0** (exo)
| **< 0**
| Dépend de T
| ⚖️ Spontanée à **basse T**
|
**Conflit :** ΔH favorise la spontanéité (négatif), mais ΔS la pénalise (négatif → −TΔS devient positif et croît avec T).

Raisonnement : à basse T, TΔS est petit → ΔH l'emporte → ΔG < 0. À haute T, −TΔS (positif) devient trop grand → ΔG > 0.

Exemple : solidification de l'eau H₂O(l) → H₂O(s). ΔH < 0 (libère chaleur de cristallisation), ΔS < 0 (le cristal est plus ordonné). Spontanée en dessous de 0 °C, non spontanée au-dessus.

| **> 0** (endo)
| **> 0**
| Dépend de T
| ⚖️ Spontanée à **haute T**
|
**Conflit :** ΔH pénalise la spontanéité (positif), mais ΔS la favorise (positif → −TΔS devient négatif et de plus en plus grand en valeur absolue quand T augmente).

Raisonnement : à haute T, −TΔS (négatif) l'emporte sur ΔH (positif) → ΔG < 0. À basse T, ΔH domine → ΔG > 0.

Exemple : fusion de la glace H₂O(s) → H₂O(l). ΔH > 0 (absorbe chaleur), ΔS > 0 (le liquide est plus désordonné). Spontanée au-dessus de 0 °C, non spontanée en dessous.

🏆 **Les 4 cas ΔH / ΔS — Tombe TRÈS souvent au concours ★★★**

Voici la **clé de lecture** du tableau :

- **Signes opposés** (ΔH et ΔS de signes contraires) → pas de compétition → résultat fixé quelle que soit T :

- ΔH < 0 et ΔS > 0 → **toujours spontanée ✅** (les deux moteurs poussent vers la spontanéité)

- ΔH > 0 et ΔS < 0 → **jamais spontanée ❌** (les deux moteurs s'opposent à la spontanéité)

- **Même signe** (ΔH et ΔS du même signe) → compétition → c'est la **température T** qui tranche :

- ΔH < 0 et ΔS < 0 → **basse T** : à froid, ΔH (énergie) domine → spontanée. À chaud, −TΔS positif l'emporte → plus spontanée.

- ΔH > 0 et ΔS > 0 → **haute T** : à chaud, −TΔS (négatif, amplifié) domine → spontanée. À froid, ΔH positif l'emporte → non spontanée.

📐 **Température d'inversion T* :** pour les 2 cas « dépend de T », il existe une température exacte où ΔG = 0 — ni spontanée, ni non spontanée : c'est l'équilibre. En deçà ou au-delà, la spontanéité bascule.

**T* = ΔH / ΔS** (ΔH en J, ΔS en J·K⁻¹ → résultat en K)

Exemple concret : H₂O(s) ⇌ H₂O(l) — ΔH ≈ +6 000 J/mol, ΔS ≈ +20 J·K⁻¹·mol⁻¹ → T* = 6 000 / 20 = 300 K ≈ 27 °C. (La vraie valeur est 273 K = 0 °C — on a arrondi ΔS, mais l'ordre de grandeur est bon.) En dessous de T* : congélation spontanée. Au-dessus : fonte spontanée.

✏️ **Mini-exercice — Spontanéité et température**

❓ Une réaction a ΔᵣH° = +60 kJ/mol et ΔᵣS° = +200 J·K⁻¹·mol⁻¹.

1) La réaction est-elle spontanée à 25 °C (≈ 300 K) ?

2) Calcule la température d'inversion.

3) À quelle température sera-t-elle spontanée ?

💡 Voir la correction

1) ΔG = ΔH − TΔS = 60 000 − 300 × 200 = 60 000 − 60 000 = **0 J** → ΔG = 0 → on est pile à la **température d'inversion** !

2) T* = ΔH / ΔS = 60 000 / 200 = **300 K ≈ 27 °C**.

C'est la température à laquelle ΔG = 0 : en dessous, ΔH l'emporte (ΔG > 0) ; au-dessus, TΔS l'emporte (ΔG < 0).

3) ΔH > 0 et ΔS > 0 → même signe → **cas « dépend de T »** → spontanée à **haute T** (T > T* = 300 K, soit au-dessus de 27 °C).

Logique : à haute T, le terme −TΔS (négatif et grand) l'emporte sur ΔH (positif) → ΔG < 0.

⚠️ **Piège classique :** ΔH est donné en **kJ** → convertir en **J** avant de calculer ΔG ou T* (sinon erreur ×1 000 !).

✏️ **QCM type concours — Prédire le signe de ΔᵣG° sans calcul**

❓ On considère les réactions suivantes dans les conditions standard. Pour chacune, on donne le signe de ΔᵣH° et ΔᵣS°. Quelle(s) proposition(s) est (sont) exacte(s) ?

Réaction (a) : ΔᵣH° = −200 kJ/mol, ΔᵣS° = +100 J·K⁻¹·mol⁻¹

Réaction (b) : ΔᵣH° = +300 kJ/mol, ΔᵣS° = +100 J·K⁻¹·mol⁻¹

Réaction (c) : ΔᵣH° = −150 kJ/mol, ΔᵣS° = −200 J·K⁻¹·mol⁻¹

A. La réaction (a) est spontanée à toute température.

B. La réaction (b) est spontanée à 25 °C (298 K).

C. La température d'inversion de la réaction (b) est 3 000 K.

D. La réaction (c) est spontanée à basse température.

E. La réaction (c) a une température d'inversion de 750 K.

💡 Voir la correction détaillée

**Méthode** : regarde les signes de ΔH et ΔS.

- Si ΔH et ΔS sont de **signes opposés** → le signe de ΔG est fixé (pas de dépendance en T)

- Si ΔH et ΔS sont de **même signe** → ΔG dépend de T → calcule T_inv = |ΔH°/ΔS°|

**A. VRAI ✅** — ΔH < 0 et ΔS > 0 → ΔG = (négatif) − T×(positif) = toujours négatif → **spontanée à toute T**.

**B. FAUX** — ΔH > 0 et ΔS > 0 → même signe → dépend de T. ΔG = 300 000 − 298 × 100 = 300 000 − 29 800 = +270 200 J → **ΔG > 0 → non spontanée** à 298 K.

**C. VRAI ✅** — ΔH > 0 et ΔS > 0 → même signe → T* = ΔH / ΔS = 300 000 / 100 = **3 000 K**. En dessous de 3 000 K : non spontanée. Au-dessus de 3 000 K : spontanée.

**D. VRAI ✅** — ΔH < 0 et ΔS < 0 → même signe → ΔG prend le signe de ΔH à basse T (le terme TΔS est petit) → **spontanée à basse T**.

**E. VRAI ✅** — T_inv = |ΔH°/ΔS°| = 150 000 / 200 = **750 K**. En dessous de 750 K, ΔG < 0 (spontanée). Au-dessus, ΔG > 0.

→ Réponses : **A, C, D, E**.

### 5. Calcul de ΔᵣG° avec la loi de Hess

Comme G est une fonction d'état, la loi de Hess s'applique aussi. Il existe **trois méthodes** pour calculer ΔᵣG° — toutes tombent au concours.

📎 **Notation :** le **ᵣ** (indice « r » de réactionnel ) précise que ΔᵣG° est la variation d'énergie libre pour une réaction donnée , exprimée par mol de réaction. Le **°** indique les conditions standard (25 °C, 1 bar). Dans ΔG = ΔH − TΔS, le r est souvent omis par simplification — en concours, les deux notations sont acceptées.

#### Méthode 1 : Avec les enthalpies libres de formation ΔfG°

On définit l'**enthalpie libre standard de formation** ΔfG° (analogue à ΔfH°). Par définition, **ΔfG°(corps simple dans son état standard) = 0**.

Loi de Hess pour G
ΔᵣG° = Σ νᵢ · ΔfG°(produits) − Σ νᵢ · ΔfG°(réactifs)

💡 **Astuce — Étapes pour appliquer Hess avec ΔfG°**

- **Équilibrer la réaction** (les coefficients stœchiométriques sont indispensables !)

- Repérer les **corps simples** : leur ΔfG° = 0 (ex : O₂(g), N₂(g), C(graphite))

- Appliquer la formule : **Σ produits − Σ réactifs**, en multipliant chaque ΔfG° par son coefficient

- Interpréter le signe : ΔᵣG° < 0 → exergonique (spontanée) ; ΔᵣG° > 0 → endergonique

✏️ **Exemple — Méthode 1 (ΔfG°)**

Calculer ΔᵣG° de la combustion du méthane : **CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)**

Données : ΔfG°(CH₄) = −50 kJ/mol | ΔfG°(CO₂) = −394 kJ/mol | ΔfG°(H₂O(l)) = −237 kJ/mol | ΔfG°(O₂) = 0 (corps simple)

💡 Voir la correction

**Étape 1 — Réaction équilibrée :** CH₄ + 2 O₂ → CO₂ + 2 H₂O ✅

**Étape 2 — Repérer les corps simples :** O₂(g) → ΔfG° = 0

**Étape 3 — Appliquer la formule :**

ΔᵣG° = [ΔfG°(CO₂) + 2 × ΔfG°(H₂O)] − [ΔfG°(CH₄) + 2 × ΔfG°(O₂)]

ΔᵣG° = [−394 + 2 × (−237)] − [−50 + 2 × 0]

ΔᵣG° = [−394 − 474] − [−50]

ΔᵣG° = −868 + 50 = **−818 kJ/molÉtape 4 — Interprétation :** ΔᵣG° = −818 kJ/mol < 0 → réaction **exergonique**, spontanée dans les conditions standard. ✅

#### Méthode 2 : Par combinaison linéaire de réactions

Souvent au concours, on te donne **2 ou 3 réactions avec leurs ΔᵣG°** et on te demande de trouver le ΔᵣG° d'une autre réaction. La méthode :

🔑 **Méthode de combinaison linéaire — Tombée très souvent au concours**

- **Écrire la réaction cible (R3)** — celle dont on cherche ΔᵣG°

- **Exprimer R3 comme combinaison de R1 et R2** : trouver les coefficients a et b tels que R3 = a × R1 + b × R2

- **En déduire** : ΔᵣG°(R3) = a × ΔᵣG°(R1) + b × ΔᵣG°(R2)

Les règles à connaître :

- Si on **inverse** une réaction → on **change le signe** de ΔᵣG°

- Si on **multiplie** une réaction par un facteur n → on **multiplie** ΔᵣG° par n

- Si on **additionne** deux réactions → on **additionne** leurs ΔᵣG°

✏️ **QCM type concours — Combinaison linéaire de réactions (ΔᵣG°)**

Applique directement la méthode 2 : identifie comment construire R3 à partir de R1 et R2, puis déduis ΔᵣG°(3).

❓ On donne les trois réactions ci-dessous à pression constante :

(1) Fe₂O₃(s) + MnO(s) → MnO₂(s) + 2 FeO(s) ΔᵣG°(1) = −407 kJ/mol

(2) 2 HMnO₄(s) + 6 FeO(s) → 3 Fe₂O₃(s) + 2 MnO₂(s) + H₂O(l) ΔᵣG°(2) = −223 kJ/mol

(3) 5 Fe₂O₃(s) + 2 MnO(s) + H₂O(l) → 2 HMnO₄(s) + 10 FeO(s) ΔᵣG°(3) = ?

Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?

A. La réaction (1) est endergonique.

B. La réaction (2) est à l'équilibre.

C. ΔᵣG°(3) = −184 kJ/mol

D. ΔᵣG°(3) = −591 kJ/mol

E. ΔᵣG°(3) = 0 kJ/mol

💡 Voir la correction détaillée

**Étape 1 : Exprimer R3 comme combinaison de R1 et R2**

On cherche R3 = a × R1 + b × R2. En comparant R3 avec R1 et R2, on trouve : **R3 = 2 × R1 + (−1) × R2**, c'est-à-dire R1 multipliée par 2, puis R2 inversée.

**R1 × 2 :** 2 Fe₂O₃ + 2 MnO → 2 MnO₂ + 4 FeO

**R2 inversée :** 3 Fe₂O₃ + 2 MnO₂ + H₂O → 2 HMnO₄ + 6 FeO

**Addition membre à membre :** les 2 MnO₂ apparaissent en **produit** dans R1×2 et en **réactif** dans R2⁻¹ → ils sont des deux côtés de la flèche en quantités égales, donc ils se **simplifient** (comme on simplifierait un terme dans une équation algébrique).

Réactifs : (2+3) Fe₂O₃ + 2 MnO + H₂O = **5 Fe₂O₃ + 2 MnO + H₂O**

Produits : 2 HMnO₄ + (4+6) FeO = **2 HMnO₄ + 10 FeO**

→ On retrouve exactement R3. ✅

**Étape 2 : Calculer ΔᵣG°(3)**

ΔᵣG°(3) = 2 × ΔᵣG°(1) + (−1) × ΔᵣG°(2) = 2 × (−407) + (+223) = −814 + 223 = **−591 kJ/molA. FAUX** — ΔᵣG°(1) = −407 < 0 → réaction (1) est **exergonique** (spontanée), pas endergonique.

**B. FAUX** — ΔᵣG°(2) = −223 ≠ 0 → la réaction (2) n'est pas à l'équilibre.

**C. FAUX** — Erreur de calcul.

**D. VRAI ✅** — ΔᵣG°(3) = −591 kJ/mol.

**E. FAUX** — ΔᵣG°(3) ≠ 0.

→ Réponse : **D**.

#### Méthode 3 : Via ΔH et ΔS

Si on connaît ΔᵣH° et ΔᵣS° :

Calcul de ΔᵣG° via H et S
ΔᵣG° = ΔᵣH° − T × ΔᵣS°

⚠️ **Attention aux unités** : ΔH° souvent en kJ/mol et ΔS° en J·K⁻¹·mol⁻¹ → convertir avant de calculer !

✏️ **Exemple — Méthode 3 (ΔH et ΔS)**

Une réaction a ΔᵣH° = **−90 kJ/mol** et ΔᵣS° = **−200 J·K⁻¹·mol⁻¹**. Calculer ΔᵣG° à 25 °C (≈ 300 K) et conclure.

💡 Voir la correction

**Étape 1 — Convertir les unités :** ΔᵣH° = −90 kJ/mol = **−90 000 J/mol** | ΔᵣS° = −200 J·K⁻¹·mol⁻¹ (déjà en J)

**Étape 2 — Appliquer la formule :**

ΔᵣG° = ΔᵣH° − T × ΔᵣS° = −90 000 − 300 × (−200) = −90 000 + 60 000 = **−30 000 J/mol = −30 kJ/mol**

Astuce mentale : 300 × 200 = 60 000, puis −90 000 + 60 000 = −30 000.

**Étape 3 — Conclusion :** ΔᵣG° < 0 → réaction **exergonique**, spontanée à 25 °C. ✅

Note : ΔH < 0 et ΔS < 0 → cas « basse T » → spontanée ici car 300 K < T* = 90 000 / 200 = **450 K**. Au-dessus de 450 K, la réaction ne serait plus spontanée.

×

medeos-sante.fr