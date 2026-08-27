Chapitre 7 : Thermodynamique — Systèmes, premier principe et enthalpie - MEDEOS — Partie 1

Chapitre 7 — Partie 1

# Thermodynamique — Systèmes, premier principe et enthalpie

Énergie, chaleur, travail : les lois fondamentales qui gouvernent les réactions chimiques

## 🎯 Objectifs d'apprentissage

Jusqu'ici, tu as étudié la **structure** des molécules (atome, liaisons, géométrie, interactions faibles). Maintenant, on change complètement de perspective : on ne regarde plus comment les molécules sont faites, mais **pourquoi** les réactions chimiques se produisent et **combien d'énergie** elles échangent.

Pourquoi le feu brûle ? Pourquoi une poche de froid devient froide quand on la casse ? Pourquoi ton corps dégage de la chaleur ? La réponse tient en un mot : **thermodynamique**.

Ce chapitre pose les bases. Après l'avoir lu, tu sauras :

- **Définir** un système (ouvert, fermé, isolé) et ses variables d'état

- **Appliquer** la loi des gaz parfaits (PV = nRT) et comprendre ses limites

- **Énoncer** le premier principe : ΔU = W + Q (conservation de l'énergie)

- **Distinguer** chaleur (Q) et travail (W) et connaître les conventions de signe

- **Calculer** l'enthalpie de réaction ΔᵣH° grâce à la loi de Hess

- **Reconnaître** une réaction exothermique (ΔᵣH° < 0) vs endothermique (ΔᵣH° > 0)

## I. Systèmes, variables d'état et transformations

Avant de parler d'énergie, il faut d'abord savoir **de quoi on parle**. En thermodynamique, on commence toujours par définir le « personnage principal » : le **système**.

### 1. Le système et le milieu extérieur

Imagine que tu traces un cercle imaginaire autour de ce que tu veux étudier. Ce qui est **à l'intérieur** du cercle, c'est le système. Ce qui est **à l'extérieur**, c'est le milieu extérieur. Selon ce que le système échange avec l'extérieur, on distingue trois types :

|

| Type de système
| Échange d'énergie ?
| Échange de matière ?
| Exemple concret

| **Ouvert**
| ✅ Oui
| ✅ Oui
| Une casserole sans couvercle (la vapeur s'échappe)

| **Fermé**
| ✅ Oui
| ❌ Non
| Une casserole avec couvercle (chaleur sort, mais pas la matière)

| **Isolé**
| ❌ Non
| ❌ Non
| Un thermos parfait (rien ne rentre, rien ne sort)

💡 **Astuce** — Retiens la hiérarchie : Ouvert (tout passe) → Fermé (énergie seule) → Isolé (rien). Le calorimètre utilisé en TD est un système **isolé** (adiabatique = pas d'échange de chaleur avec l'extérieur).

[FIGURE chimie_ch07_fig01.png]

**Figure 1** — Les trois types de systèmes thermodynamiques : ouvert, fermé et isolé

### 2. Variables d'état : intensives vs extensives

Pour décrire un système, on utilise des **variables d'état** : T, P, V, n… Ce sont simplement les grandeurs qui définissent l'état du système à un instant donné. Elles se répartissent en deux catégories :

|

| Type
| Définition
| Test simple
| Exemples

| **Intensive**
| Ne dépend **pas** de la quantité de matière
| Si on coupe le système en deux, la valeur **reste la même**
| T (température), P (pression), ρ (masse volumique)

| **Extensive**
| **Dépend** de la quantité de matière
| Si on coupe le système en deux, la valeur est **divisée par deux**
| m (masse), V (volume), n (nombre de moles), U (énergie interne)

🔑 **Notion clé — Fonction d'état vs fonction de chemin**

C'est **LE piège n°1** du concours en thermo. Certaines grandeurs (comme la température T, la pression P, ou l'énergie interne U que tu verras en Section III) ne dépendent que de l'**état actuel** du système — pas de la façon dont on y est arrivé. On les appelle des **fonctions d'état**.

Imagine que tu montes au 5ᵉ étage : que tu prennes l'escalier ou l'ascenseur, la différence d'altitude est la **même**. L'altitude est une « fonction d'état ».

En revanche, **Q** (chaleur) et **W** (travail) **ne sont PAS des fonctions d'état** : leur valeur dépend du chemin. Pour reprendre l'analogie : le nombre de calories brûlées n'est pas le même entre l'escalier et l'ascenseur — mais la hauteur gagnée, si.

⚠️ **Erreur classique au QCM** : on te propose « Q est une fonction d'état ». La réponse est **FAUX**. Retiens juste que Q et W dépendent du chemin suivi — tu comprendras pourquoi en Section III quand on verra ΔU = W + Q.

### 3. Types de transformations

|

| Transformation
| Condition
| Conséquence

| **Isotherme**
| T = constante
| Température ne change pas

| **Isobare**
| P = constante
| Pression ne change pas (conditions labo)

| **Isochore**
| V = constante
| Volume ne change pas → W = 0

| **Adiabatique**
| Q = 0
| Pas d'échange de chaleur → ΔU = W

Une transformation peut être **réversible** ou **irréversible**. Une transformation réversible est une transformation idéale, infiniment lente, où le système reste en équilibre à chaque instant — on pourrait l'inverser sans rien changer autour. En pratique, ça n'existe pas : toutes les transformations réelles sont **irréversibles** (elles se produisent spontanément et on ne peut pas revenir en arrière sans fournir de l'énergie).

✏️ **Mini-exercice — Identifier la transformation**

En t'aidant du tableau ci-dessus (isotherme, isobare, isochore, adiabatique), identifie le type de transformation dans chaque situation. Demande-toi : quelle grandeur est maintenue constante ?

A. Un gaz est chauffé dans un récipient en acier fermé (parois rigides).

B. Une réaction chimique a lieu dans un bécher ouvert sur la paillasse.

C. Un gaz est comprimé dans un piston entouré d'un isolant thermique.

💡 Voir la correction

**A.** Les parois sont rigides → le volume **ne peut pas changer** → V = constante → **isochore**. Conséquence directe : W = 0 (pas de variation de volume, donc pas de travail mécanique).

**B.** Bécher ouvert à l'air → la pression est celle de l'atmosphère, qui reste constante → P = constante → **isobare**. C'est la situation la plus courante en chimie de labo !

**C.** Isolant thermique → aucun échange de chaleur avec l'extérieur → Q = 0 → **adiabatique**. (Ce n'est pas une condition sur T, P ou V — c'est une condition sur les échanges de chaleur.)

### 4. Conventions de signe

On a défini le système, les variables, les transformations. Il reste une dernière chose essentielle avant d'écrire la moindre formule : savoir si l'énergie **entre** ou **sort** du système. C'est la **convention de signe**.

En thermodynamique de première année, le **système est au centre** de tout. La convention est simple :

Convention de signe
Énergie reçue par le système → **positive** (ΔE > 0)

Énergie cédée par le système → **négative** (ΔE < 0)

💡 **Astuce — Convention de signe** : tout se raisonne **du point de vue du système**. Si le système **reçoit** de l'énergie (qu'elle vienne de la chaleur ou d'une compression), c'est **positif**. S'il en **cède**, c'est **négatif**. C'est la même logique qu'un compte en banque : un dépôt = +, un retrait = −.

## II. Les états de la matière et le gaz parfait

Maintenant que tu sais définir un système et ses transformations, on va s'intéresser à la **matière elle-même** : sous quelle forme existe-t-elle, et comment la décrire mathématiquement ? C'est ici qu'intervient le modèle du **gaz parfait**, qui est la base de tous les calculs en thermo de première année.

### 1. Les trois états de la matière

|

| État
| Organisation
| Compressible ?
| Volume propre ?
| Forme propre ?

| **Solide**
| Atomes fortement liés
| ❌ Incompressible
| ✅ Oui
| ✅ Oui

| **Liquide**
| Atomes liés
| ≈ Très peu
| ✅ Oui
| ❌ Non (prend la forme du récipient)

| **Gaz**
| Atomes faiblement liés
| ✅ Oui
| ❌ Non
| ❌ Non

### 2. Changements d'état

|

| Transition
| Nom
| Transition inverse
| Nom inverse

| Solide → Liquide
| **Fusion**
| Liquide → Solide
| **Solidification**

| Liquide → Gaz
| **Vaporisation**
| Gaz → Liquide
| **Condensation** (liquéfaction)

| Solide → Gaz
| **Sublimation**
| Gaz → Solide
| **Déposition**

💡 **Moyen mnémotechnique — Les noms des changements d'état**

Pour les retenir, pense à ce qui se passe **physiquement** :

- **Fusion** : le solide "fond" — le mot vient directement du latin fundere , couler. Tu fonds du beurre, de la glace.

- **Vaporisation** : ça devient de la vapeur. Logique.

- **Sublimation** : le mot vient du latin sublimis = "vers le haut". Le solide monte directement en gaz, sans passer par le liquide. La neige carbonique (CO₂ solide) se sublime à température ambiante — elle disparaît sans jamais former de flaque.

- **Condensation** : ça se "condense", ça se tasse — les molécules de gaz se rapprochent pour former un liquide. C'est ce qui se passe sur un miroir de salle de bain après une douche.

- **Solidification** : ça devient solide. Simple.

- **Déposition** : le gaz se "dépose" directement en solide. Le givre sur une vitre froide, c'est de la déposition (la vapeur d'eau de l'air se solidifie directement).

Règle générale : **solide → liquide → gaz** = on monte en énergie (on apporte de la chaleur). Dans l'autre sens = on descend en énergie (on retire de la chaleur).

💡 **Astuce** — Un changement d'état se fait toujours à **température constante**. Si on chauffe de la glace à 0 °C, la température reste à 0 °C tant que toute la glace n'a pas fondu. L'énergie fournie sert à casser les liaisons intermoléculaires, pas à augmenter la température.

### 3. Diagramme de Clapeyron (P = f(T))

Le diagramme P–T résume les domaines de stabilité des 3 états. Il comporte deux points remarquables :

- **Point triple** : les 3 états coexistent (T et P uniques pour chaque substance).

- **Point critique** : au-delà de cette température et de cette pression, la distinction entre liquide et gaz disparaît — la matière est dans un état intermédiaire.

[FIGURE chimie_ch07_fig02.png]

**Figure 2** — Diagramme de Clapeyron (P–T) : domaines solide/liquide/gaz, point triple, point critique, et exception de la pente de fusion de l'eau

🔑 **Notion clé — L'exception de l'eau**

Pour la plupart des substances, la courbe de fusion a une pente **positive** (dP/dT > 0). Mais pour l'eau, la pente est **négative** : quand P augmente, T_fusion diminue. C'est parce que la glace est **moins dense** que l'eau liquide (ΔV_fus < 0, à cause des liaisons H — voir Ch6). C'est pourquoi on peut patiner sur la glace : la pression de la lame fait fondre la glace.

### 4. Le gaz parfait : PV = nRT

En réalité, les molécules d'un gaz ont une **taille physique**, s'attirent et se repoussent, et leurs collisions sont complexes. Tout ça rend les calculs impossibles. Pour s'en sortir, on utilise un modèle simplifié : le **gaz parfait**. L'idée : on néglige la taille des molécules et leurs interactions, comme si elles étaient des points sans dimension tellement espacés qu'ils ne se voient pas. Dans ces conditions, on peut tout décrire avec une seule équation : **PV = nRT**.

Ce modèle est une excellente approximation pour les gaz réels à basse pression et haute température (molécules très espacées). C'est le cas dans la plupart des situations du concours.

Les deux hypothèses de ce modèle sont :

- Les molécules sont des **points sans volume** — on néglige leur taille et leurs interactions mutuelles.

- Les collisions sont **élastiques** — quand deux molécules se heurtent, aucune énergie n'est perdue (comme des billes de billard parfaites).

Loi des gaz parfaits
PV = nRT

💡 **Astuce — Les pièges d'unités dans PV = nRT**

La formule ne marche que si **toutes les grandeurs sont dans les bonnes unités** (Pascal, m³, Kelvin). Au concours, les données sont souvent en litres ou en °C — c'est fait exprès pour piéger. Deux réflexes à avoir :

- **Volume** : convertir les L en m³ → **1 L = 10⁻³ m³** (diviser par 1000)

Ex : 50 L → 50 ÷ 1000 = 0,050 m³ | 250 mL → 250 ÷ 1 000 000 = 2,5 × 10⁻⁴ m³

- **Température** : convertir les °C en K → **T(K) = T(°C) + 273**

Ex : 25 °C → 25 + 273 = 298 K | 0 °C → 273 K | 100 °C → 373 K

Pourquoi ? Parce que les °C peuvent être négatifs (−10 °C existe), et une pression ou un volume négatif n'a aucun sens physique. Le Kelvin démarre à 0 absolu (−273 °C) — en dessous, rien n'existe. Avec T en Kelvin, PV = nRT donne toujours un résultat positif.

La constante R = 8,314 J·K⁻¹·mol⁻¹ est **toujours donnée** dans l'énoncé, pas besoin de la retenir. Mais retiens l'ordre de grandeur (≈ 8,3) pour vérifier tes résultats.

#### Volume molaire

À retenir : 1 mole de gaz parfait occupe **22,4 L à 0 °C** et **24,8 L à 25 °C**. Ces valeurs permettent d'estimer rapidement un volume sans sortir PV = nRT.

#### Mélanges de gaz — Loi de Dalton

Dans un mélange de gaz, chaque gaz se comporte **comme s'il était seul**. On définit la **pression partielle** de chaque gaz : c'est la pression qu'il exercerait s'il occupait seul le récipient.

Loi de Dalton
P_i = (n_i / n_total) × P_totale

La somme de toutes les pressions partielles redonne la pression totale : P_totale = P₁ + P₂ + P₃ + …

✏️ **Mini-exercice — Loi de Dalton**

Un mélange contient 2 mol de N₂ et 3 mol de O₂ dans un récipient à 300 K. La pression totale est P = 5 atm = 5 × 10⁵ Pa.

- Quelle est la fraction molaire de O₂ ?

- En déduis la pression partielle de O₂.

- Que vaut la pression partielle de N₂ ?

💡 Voir la correction

**1.** n_total = 2 + 3 = 5 mol → x(O₂) = 3/5 = **0,62.** P(O₂) = x(O₂) × P_total = 0,6 × 5 = **3 atm = 3 × 10⁵ Pa3.** P(N₂) = P_total − P(O₂) = 5 − 3 = **2 atm**

Vérification : x(N₂) = 2/5 = 0,4 → P(N₂) = 0,4 × 5 = 2 atm ✅

## III. Le premier principe : ΔU = W + Q

Tu connais maintenant les systèmes, les états de la matière et le gaz parfait. On arrive au **cœur de la thermodynamique** : le premier principe. C'est LA formule autour de laquelle tout le chapitre tourne.

### 1. Énoncé

Le premier principe de la thermodynamique est le **principe de conservation de l'énergie** : « Rien ne se perd, rien ne se crée, tout se transforme » (Lavoisier). En langage thermodynamique :

Premier principe
ΔU = W + Q

- **ΔU** = variation d'énergie interne (fonction d'état extensive, en J/mol)

- **W** = travail échangé (J/mol) — lié aux variations de volume

- **Q** = chaleur échangée (J/mol) — liée aux variations de température

🔑 **Notion clé — L'énergie interne U**

L'énergie interne U, c'est **toute l'énergie stockée à l'intérieur du système** : l'agitation thermique des molécules (énergie cinétique), les vibrations des liaisons, les interactions entre molécules (énergie potentielle). Pense à U comme au « solde du compte en banque énergétique » du système.

On ne peut pas mesurer U directement (on ne connaît pas le solde absolu), mais on peut mesurer la **variation** ΔU = U_final − U_initial (combien on a gagné ou perdu).

Pour un système **isolé** : ΔU = 0. Logique : si rien ne rentre et rien ne sort, le solde ne change pas.

[FIGURE chimie_ch07_fig05.png]

**Figure 3** — Le premier principe : le système échange de l'énergie via la chaleur Q et le travail W

### 2. Conséquences selon les transformations

|

| Transformation
| Rappel : ce qui est constant
| Condition
| Simplification du 1er principe

| **Système isolé**
| Rien ne rentre, rien ne sort
| W = 0 et Q = 0
| ΔU = 0

| **Adiabatique**
| Pas d'échange de chaleur (Q = 0)
| Q = 0
| ΔU = W

| **Isochore**
| Volume constant (V = cst)
| W = 0 (pas de variation de volume)
| ΔU = Q_v (Q à volume constant)

| **Isobare**
| Pression constante (P = cst) — cas du labo ouvert
| W = −PΔV
| ΔU = Q_p − PΔV (Q à pression constante)

💡 **Pourquoi W = −PΔV en isobare ?**

Pense à une seringue **ouverte à l'atmosphère** (pas isolée !). Tu chauffes le gaz à l'intérieur : il **reçoit** de la chaleur Q (Q > 0). En réponse, il se dilate et pousse le piston vers l'extérieur. Ce faisant, il dépense de l'énergie mécanique contre l'atmosphère → W < 0.

Résultat : ΔU = W + Q = (négatif) + (positif) . L'énergie interne n'augmente pas autant que si le volume était bloqué — une partie de la chaleur reçue "s'échappe" en travail de dilatation. C'est pour ça que C_p > C_v.

⚠️ **Attention au piège** : "isobare" = la **pression P reste constante**, pas le volume. La pression de l'atmosphère ne bouge pas, mais le piston lui se déplace : c'est le volume qui change (ΔV ≠ 0). P est fixe, V varie — les deux ne sont pas contradictoires.

Le signe − dans W = −PΔV reflète la convention **cédé = −** :

- Gaz qui **se dilate** (ΔV > 0) → il pousse, il **perd** de l'énergie → W < 0 ✅

- Gaz qui **est comprimé** (ΔV < 0) → on lui fournit de l'énergie → W > 0 ✅

⚠️ **Cas particulier isochore** : si V ne change pas (récipient rigide), ΔV = 0, donc W = −P × 0 = **0**. Aucun travail échangé — toute l'énergie passe uniquement par la chaleur → ΔU = Q_v.

## IV. Chaleur (Q) et travail (W) — Les deux façons d'échanger de l'énergie

Le premier principe te dit que ΔU = W + Q. Mais concrètement, **c'est quoi Q et c'est quoi W ?**

Pense à ton compte en banque (l'énergie interne U). Il n'y a que **deux façons** de faire varier ton solde : un virement (= la chaleur Q) ou un autre virement (= le travail W). Chacun peut être **entrant** (tu reçois → +) ou **sortant** (tu paies → −). Le nouveau solde = ancien solde + Q + W. C'est exactement **ΔU = W + Q**.

### 1. La chaleur Q — transfert d'énergie par la température

Mets ta main au-dessus d'une casserole d'eau chaude : tu sens la chaleur. Cette sensation, c'est de l'**énergie qui passe** de l'eau chaude vers ta main. C'est ça la chaleur Q : un **transfert d'énergie** qui se fait spontanément du chaud vers le froid.

Et exactement comme tu l'as compris : la casserole (système 1) **perd** ce Q → **Q < 0** pour elle. Ta main (système 2) **reçoit** ce même Q → **Q > 0** pour elle. C'est le même transfert, vu des deux côtés.

Q n'est donc pas "quelque chose" que l'eau possède — c'est un **flux en transit**. Une fois reçu par ta main, il se transforme en énergie interne (ta main chauffe).

On distingue deux situations :

#### a) La température change → chaleur sensible

Question concrète : **combien d'énergie faut-il fournir pour faire passer quelque chose de 20 °C à 80 °C ?** C'est exactement ce que calcule la chaleur sensible. La réponse dépend de trois choses : combien de matière tu chauffes (n), de combien de degrés tu veux monter (ΔT = T_finale − T_initiale), et à quel point cette substance "résiste" au chauffage (C — certaines substances chauffent vite, d'autres lentement).

Chaleur à pression constante
Q_p = n × C_p × ΔT

Chaleur à volume constant
Q_v = n × C_v × ΔT = ΔU

où **C_p** et **C_v** sont les **capacités calorifiques molaires** (en J·K⁻¹·mol⁻¹). Concrètement, c'est « combien de joules il faut pour augmenter de 1 °C la température d'1 mole ». Plus C est grand, plus la substance est difficile à chauffer (l'eau a un C_p très élevé : 75,3 — c'est pour ça que l'eau met longtemps à bouillir).

La différence entre C_p et C_v ? C'est simplement **les conditions** dans lesquelles on chauffe :

- **C_v** : on chauffe dans un récipient **rigide** (volume fixe, comme une cocotte fermée)

- **C_p** : on chauffe dans un récipient **ouvert** (pression fixe = atmosphère, comme un bécher)

🔑 **Notion clé — Pourquoi C_p > C_v ?**

Pense à une casserole d'eau : elle chauffe **plus vite avec le couvercle** que sans couvercle. Avec le couvercle (volume constant = C_v), toute l'énergie va directement faire monter la température. Sans le couvercle (pression constante = C_p), une partie de l'énergie se "gaspille" à faire dilater la vapeur — et il en reste moins pour faire monter T. Il faut donc fournir plus de chaleur pour obtenir la même augmentation de température → C_p > C_v.

Pour un gaz parfait : **C_p − C_v = R** (= 8,314 J·K⁻¹·mol⁻¹).

Pour les **solides et liquides** : C_p ≈ C_v (leur volume varie si peu qu'il n'y a presque pas de "gaspillage" de dilatation).

✏️ **Mini-exercice — Chaleur et premier principe**

❓ On chauffe 2 mol d'un gaz parfait monoatomique (C_v = 3R/2) de 300 K à 500 K dans un récipient fermé à **volume constant**. On donne R ≈ 8 J·mol⁻¹·K⁻¹.

1) Quel est le travail W échangé ?

2) Calcule la chaleur Q_v échangée.

3) En déduis ΔU.

💡 Voir la correction

1) Volume constant (isochore) → **W = 0** (pas de variation de volume).

2) Q_v = n × C_v × ΔT

C_v = 3R/2 = 3 × 8 / 2 = **12 J·mol⁻¹·K⁻¹**

ΔT = 500 − 300 = **200 K**

Q_v = 2 × 12 × 200 = **4 800 J ≈ 4,8 kJ**

(Avec R = 8,314, on trouverait 4 988 J — très proche.)

3) Premier principe : ΔU = W + Q = 0 + 4 800 = **4 800 J ≈ 4,8 kJ**. En isochore, ΔU = Q_v directement.

#### b) La température ne change PAS → chaleur latente

La glace, c'est de l'eau dont les molécules sont **accrochées les unes aux autres** par des liaisons — elles forment un réseau solide et rigide. Quand tu chauffes ce glaçon, l'énergie que tu fournis sert à **décrocher ces molécules** les unes des autres, une par une. Tant que toutes les molécules ne sont pas décrochées (= tant que tout le glaçon n'est pas fondu), il n'y a aucune énergie "de reste" pour faire bouger le thermomètre. Résultat : le thermomètre **reste bloqué à 0 °C** pendant toute la fonte — ce qui paraît impossible, et pourtant tu peux le vérifier toi-même avec un verre de glaçons. Ce n'est qu'une fois le dernier glaçon fondu que la température recommence à monter. C'est la **chaleur latente** : de l'énergie entièrement consacrée à changer la structure, pas la température.

- **L_fus** : chaleur latente de fusion (solide → liquide) — énergie pour casser le réseau cristallin

- **L_vap** : chaleur latente de vaporisation (liquide → gaz) — énergie pour séparer les molécules

- Formule : **Q = n × L** (en J, si L en J/mol)

#### c) Calorimétrie — mesurer Q

Comment mesure-t-on la chaleur d'une réaction ? Imagine que tu fais une réaction chimique dans un thermos fermé contenant de l'eau. La réaction libère (ou absorbe) de la chaleur — mais comme le thermos est isolé, cette chaleur **ne peut aller nulle part** : elle est forcément absorbée par l'eau à l'intérieur. Tu mesures juste de combien l'eau a chauffé ou refroidi, et tu en déduis la chaleur de la réaction. C'est ça un **calorimètre**. La règle est simple : ce que la réaction perd, l'eau le gagne — et vice versa.

Calorimétrie
Q_réaction = − Q_calorimètre

En mesurant de combien l'eau chauffe (ou refroidit), on en déduit Q de la réaction.

### 2. Le travail W — transfert d'énergie par le mouvement

La chaleur Q transfère de l'énergie via la température. Le travail W, lui, transfère de l'énergie quand le **volume du gaz change** (comme la seringue de la Section III). La formule et le signe sont déjà expliqués plus haut, on les rappelle juste ici :

Travail à pression constante
W = −P_ext × ΔV

- **Compression** (ΔV < 0) → W > 0 : le système **reçoit** de l'énergie

- **Expansion/Détente** (ΔV > 0) → W < 0 : le système **cède** de l'énergie

💡 **Moyen mnémotechnique** — Tu gonfles un ballon : tu **comprimes** l'air → W > 0. Le ballon éclate : le gaz se **détend** → W < 0.

🔑 **Q et W sont liés** — Quand tu fournis de la chaleur Q à un gaz à pression constante, le gaz chauffe et se dilate. Cette dilatation génère du W < 0 : une partie de Q "repart" immédiatement sous forme de travail. Il en reste donc moins pour augmenter U. C'est exactement pour ça que C_p > C_v : chauffer à pression constante coûte plus cher, parce que tu paies à la fois pour ΔU et pour le travail de dilatation.

Dans ce cas précis Q et W sont de signes opposés (l'un compense l'autre). Mais ce n'est pas toujours le cas : si tu comprimes et tu chauffes en même temps, W > 0 et Q > 0 — ils s'additionnent et ΔU monte beaucoup. Le premier principe ΔU = W + Q dit juste que **les deux contributions comptent**, quelle que soit leur combinaison.

Tu veux chauffer de l'eau de 25 °C à 150 °C. L'erreur classique : appliquer Q = n·C_p·ΔT d'un seul coup avec ΔT = 150 − 25 = 125 °C. **Faux.**

Pourquoi ? Parce qu'à 100 °C, l'eau ne continue pas à chauffer normalement — elle se vaporise. Et comme on vient de le voir, pendant toute la vaporisation la température **reste bloquée à 100 °C** : toute l'énergie sert à décrocher les molécules, pas à faire monter T. Si tu fais ΔT = 125 °C d'un coup, tu sautes complètement cette étape — et tu rates ~85% de l'énergie réelle à fournir.

Il faut donc découper en **3 étapes séparées**, chacune avec sa propre formule :

- **Étape 1 — Chauffer le liquide** de 25 °C → 100 °C : T monte normalement → Q = n · C_p(liq) · (100 − 25)

- **Étape 2 — Vaporiser** à 100 °C fixe : T ne bouge pas, toute l'énergie casse les liaisons → Q = n · L_vap

- **Étape 3 — Chauffer le gaz** de 100 °C → 150 °C : T remonte → Q = n · C_p(gaz) · (150 − 100)

La chaleur totale à fournir : **Q_total = Q_étape1 + Q_étape2 + Q_étape3**. On additionne simplement les trois contributions.

💡 **Astuce** — L'étape 2 (la vaporisation) représente à elle seule **~85% de l'énergie totale**. C'est énorme ! Et c'est exactement celle qu'on oublie au concours. Si l'énoncé dit « on chauffe de 25 °C à 150 °C » et que ça traverse un changement d'état, tu **dois** décomposer.

[FIGURE chimie_ch07_fig06.png]

**Figure 4** — Courbe de chauffage avec changement d'état : les 3 étapes à ne pas oublier

✏️ **Mini-exercice — Chauffage avec changement d'état**

❓ On chauffe 1 mol d'eau liquide de 25 °C à 150 °C à P = 1 atm.

Données : C_p(liq) ≈ 75 J·K⁻¹·mol⁻¹ ; C_p(gaz) ≈ 34 J·K⁻¹·mol⁻¹ ; L_vap = 40 000 J/mol ; T_éb = 100 °C.

Calcule la chaleur totale Q à fournir en décomposant les 3 étapes.

💡 Voir la correction

**Étape 1 :** Chauffer le liquide de 25 °C à 100 °C :

Q₁ = 1 × 75 × 75 = **5 625 J**

Astuce mentale : 75 × 75 = 75² = (80−5)² = 6400 − 800 + 25 = 5 625. Ou plus simple : 75 × 75 = 3/4 × 100 × 75 = 5 625.

**Étape 2 :** Vaporiser à 100 °C :

Q₂ = 1 × 40 000 = **40 000 JÉtape 3 :** Chauffer le gaz de 100 °C à 150 °C :

Q₃ = 1 × 34 × 50 = **1 700 J**

Astuce mentale : 34 × 50 = 34 × 100 / 2 = 3 400 / 2 = 1 700

**Total :** Q_total ≈ 5 625 + 40 000 + 1 700 = **47 325 J ≈ 47 kJ**.

💡 Remarque : la chaleur latente (étape 2) représente ~85 % de l'énergie totale !

×

medeos-sante.fr