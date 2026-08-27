Chapitre 3 : Équilibres ioniques et effet Donnan - MEDEOS — Partie 3

Chapitre 3 — Partie 3

# Équilibres ioniques et effet Donnan

Pourquoi un patient hypoprotéinémique fait des œdèmes — électroneutralité, ionogramme, membrane sélective et phénomène de Donnan.

## 🔄 Où on en est

Dans la Partie 2, tu as découvert qu'une membrane n'est pas une simple barrière : c'est un filtre qui trie les particules selon la taille de ses pores. Tu sais distinguer les grands types de membranes, de celle qui laisse tout passer à celle qui ne laisse passer que l'eau. Surtout, tu as vu l'effet Donnan : quand une membrane bloque les protéines chargées négativement mais laisse passer les petits ions, ceux-ci se redistribuent de façon asymétrique pour respecter l'électroneutralité de chaque côté. Cette asymétrie fait apparaître une différence de potentiel entre les deux compartiments, le potentiel de Donnan U_d.

Tu as donc la théorie en main. Il te manque deux choses : une méthode fiable pour résoudre un exercice de Donnan sans te perdre dans les chiffres, et le lien concret avec la clinique. C'est tout l'objet de cette partie, avec la méthode « Sudoku » en tableau, puis la pression colloïdo-osmotique qui explique pourquoi un manque de protéines provoque des œdèmes.

## IV bis. Méthode Sudoku — Résoudre n'importe quel exercice de Donnan en tableau

La section IV t'a donné la théorie (égalité des potentiels électrochimiques, loi de Donnan, formule de U_d). En pratique, dès qu'un énoncé empile 3 ions sur 2 compartiments avec un volume différent à chaque fois, écrire le système d'équations devient vite illisible. Cette section te donne la **méthode visuelle** que les annales appellent « Sudoku » : on dessine un tableau, on barre les cases impossibles, on remplit pas-à-pas avec 3 règles. Tu en sortiras avec un **réflexe d'examen**.

### 1. 🤔 Pourquoi un tableau plutôt qu'un système d'équations ?

Reprends le problème typique : deux compartiments A et B séparés par une membrane qui laisse passer les petits ions mais bloque les protéinates. On veut connaître à l'équilibre la concentration de chaque ion dans chaque compartiment . Le schéma ci-dessous compare les deux façons de s'y prendre — système d'équations « pur » à gauche, méthode tableau à droite.

[FIGURE physique_ch3_fig13_equations_vs_tableau.png]

**Figure** — Système d'équations brutes vs méthode tableau Sudoku.

👉 Côté **équations brutes** (panneau gauche), tu te retrouves avec 5 à 8 inconnues et autant d'équations à manipuler en parallèle (loi de Donnan + électroneutralité dans chaque compartiment + conservation de matière). C'est faisable mais très lent, et la moindre erreur de signe te fait perdre tout l'exercice.

👉 Côté **tableau Sudoku** (panneau droite), tu organises la même information dans une **grille à double entrée** (ions en lignes × compartiments en colonnes). Les valeurs connues se posent immédiatement, les cases impossibles se barrent, et tu déduis ce qui manque **case par case** en appliquant tour à tour 3 règles simples. Comme un Sudoku : à chaque case, tu sais quelle règle utiliser pour la remplir.

### 2. Anatomie du tableau Sudoku Donnan

Le tableau a toujours la même structure :

- **Les lignes** = les espèces présentes : chaque ion (R z− , Na⁺, Cl⁻, Mg²⁺…), et tout en bas la ligne **V** = volume du compartiment. On peut aussi ajouter des lignes pour les **sels** (NaCl, RNa…) quand l'énoncé donne les quantités sous forme de sel apporté.

- **Les colonnes** = les compartiments (A, B, parfois C), et tout à droite une colonne **Total** (somme des quantités sur les compartiments — utile pour la conservation de matière).

- **Les cases barrées (X)** = ce qui n'existe pas. Exemple : R z− est bloqué dans A par la membrane → la case « R z− / compartiment B » est barrée d'office.

Voilà à quoi ressemble la grille vide juste après avoir lu l'énoncé, pour un cas typique « A contient un protéinate R z− + NaCl, B contient seulement NaCl, membrane dialysante ». C'est un canevas que tu peux **redessiner à chaque exercice en moins de 30 secondes** :

[FIGURE physique_ch3_fig11_anatomie_tableau_sudoku.png]

**Figure** — Le squelette générique d'un tableau Sudoku Donnan.

💡 **Conseil pratique d'écriture**

Au concours, on travaille indifféremment en **moles (mmol)** ou en **concentrations (mmol/L)**. La méthode marche dans les deux cas, à condition de **ne jamais mélanger**. Avantage des moles : la « conservation de matière » devient une simple somme (Total = colonne A + colonne B). Avantage des concentrations : la loi de Donnan et l'électroneutralité s'écrivent directement. Le plus sûr : **noter explicitement V_A et V_B en bas du tableau** et convertir si besoin avec n = C × V.

### 3. Les 3 règles du Sudoku

Une fois le tableau dessiné, tu remplis les cases grâce à trois règles, à appliquer dans l'ordre où elles débloquent l'info :

🔑 **Règle n°1 — Conservation de la matière (ions diffusibles)**

Pour chaque ion qui traverse la membrane (Na⁺, Cl⁻, etc.), la quantité totale est **conservée** : ce qui se trouve dans A + ce qui se trouve dans B = ce qu'on a mis au départ.

n A (Na⁺) + n B (Na⁺) = n total (Na⁺) ; n A (Cl⁻) + n B (Cl⁻) = n total (Cl⁻)

👉 Le protéinate R z− , lui, n'est pas diffusible : sa quantité dans A est fixée par l'énoncé et la case B est barrée. Pas de conservation à écrire pour lui.

[FIGURE physique_ch3_fig14_regle1_conservation.png]

**Figure** — Règle 1 : conservation des ions diffusibles entre A et B.

👉 Concrètement, cette règle te permet de **remplir la colonne « Total » du tableau dès la lecture de l'énoncé**, avant tout calcul.

🔑 **Règle n°2 — Électroneutralité (dans chaque compartiment)**

Dans chaque colonne du tableau, la somme des charges positives doit égaler la somme des charges négatives (ch.3 §I). C'est-à-dire :

Σ |z| · [cations] = Σ |z| · [anions]

Dans le compartiment A : [Na⁺] = [Cl⁻] + |z| · [R z− ] (les protéinates contribuent avec leur valence)
Dans le compartiment B : [Na⁺] = [Cl⁻] (pas de protéinate, c'est plus simple)

[FIGURE physique_ch3_fig15_regle2_electroneutralite.png]

**Figure** — Règle 2 : électroneutralité dans chaque compartiment.

👉 Concrètement, dans le tableau, cette règle te donne **une équation par colonne** (compartiment) : c'est elle qui débloque les concentrations lorsqu'on n'a qu'un seul inconnu par compartiment.

🔑 **Règle n°3 — Rapport de Donnan D r (le cœur de la méthode)**

C'est la **réécriture de la loi de Donnan** sous une forme bien plus pratique pour remplir le tableau. À l'équilibre, pour les ions monovalents qui traversent la membrane :

**D r = [cation] A / [cation] B = [anion] B / [anion] A **

Autrement dit : si tu connais une concentration dans un compartiment, tu obtiens l'autre **en multipliant ou divisant par D r ** — comme un facteur d'échelle. Plus simple à manipuler que le produit [Na]·[Cl] = constante.

Pour un ion de valence Z quelconque, la formule générale devient :

[ion de valence Z] A / [ion de valence Z] B = D r ±Z

(« + » si cation, « − » si anion, dans le compartiment qui contient les R z− )

[FIGURE physique_ch3_fig16_regle3_rapport_donnan.png]

**Figure** — Règle 3 : D r comme facteur d'échelle entre A et B.

👉 Point clé à retenir : **D r est le MÊME pour tous les ions diffusibles d'un même exercice**. Une fois calculé pour Na⁺, tu peux le réutiliser tel quel pour Cl⁻, pour K⁺, etc.

### 4. Le mémo central — Dans quel sens pousse D r ?

C'est le piège classique : il faut savoir **de quel côté penchent les cations** et **de quel côté les anions**. La règle physique se résume en une phrase :

🧠 Mémo Medeos — Le signe du déséquilibre
Là où sont les protéinates R z− , il y a **plus de cations** diffusibles et **moins d'anions** diffusibles.
Logique physique : les charges négatives fixes attirent les charges positives mobiles et repoussent les charges négatives mobiles.

Concrètement, si R z− est dans le compartiment A :

- [Na⁺] A > [Na⁺] B → D r = [Na⁺] A / [Na⁺] B est **supérieur à 1**

- [Cl⁻] A B → on retrouve le même D r = [Cl⁻] B / [Cl⁻] A

👉 Donc **D r est toujours > 1 si on le construit dans le bon sens** (cation du côté des R z− au numérateur). Si tu trouves D r Une fois D r calculé, le **potentiel de Donnan** se lit sans repasser par les concentrations détaillées :

Potentiel de Donnan exprimé via D r (ions monovalents, 37 °C)
U d (mV) ≈ 60 × log(D r )
Découle directement de U d = 60 × log(C₁/C₂) puisque D r = C₁/C₂.

Le calcul se fait en **3 gestes mécaniques** :

- ① **Récupère D r ** (déjà calculé à la fin du tableau Sudoku).

- ② **Prends son logarithme décimal** : log(D r ). C'est l'étape qui « compresse » l'asymétrie (un facteur 10 → 1, un facteur 100 → 2…).

- ③ **Multiplie par 60** → tu obtiens directement U d en millivolts.

🧠 **Mémo des log usuels à connaître par cœur** (calculs sans calculatrice au concours)

- log(1) = 0

- log(2) ≈ **0,30** ← le plus important

- log(3) ≈ 0,48

- log(4) = log(2²) = 2 × log(2) ≈ **0,60**

- log(5) = log(10/2) = 1 − log(2) ≈ **0,70**

- log(10) = **1**

Avec ces 5 valeurs en tête, tu peux calculer U d mentalement pour quasi tous les D r entiers d'un exercice.

Quelques valeurs typiques (pour ions monovalents) :

|
| D r | log(D r ) | U d = 60 × log(D r )

| 1 | 0 | 0 mV (pas de Donnan)

| 2 | 0,30 | 60 × 0,30 = **18 mV**

| 4 | 0,60 | 60 × 0,60 = **36 mV**

| 10 | 1 | 60 × 1 = **60 mV**

👉 Pour un ion de valence Z ≠ 1 (par exemple Ca²⁺ avec Z = 2), divise simplement par Z : **U d ≈ (60/Z) × log(D r )**. Pour un divalent, chaque décade de D r ne vaut donc plus que 30 mV (au lieu de 60).

### 6. Mini-exercice résolu — La méthode en action

**🧪 Énoncé**

Deux compartiments A et B (volumes égaux V_A = V_B = 1 L) sont séparés par une membrane dialysante (laisse passer Na⁺ et Cl⁻, bloque les protéinates). On dissout dans A : **6 mmol de NaR** (sel de protéinate, R⁻ monovalent). On dissout dans B : **6 mmol de NaCl**. À l'équilibre, déterminer toutes les concentrations, le rapport de Donnan D r et le potentiel U d .

👁️ Voir la correction pas à pas

**Étape 1 — Tableau initial** (juste après dissolution, avant équilibre). On note **en mmol** :

|
| | A | B | Total (ions diffusibles)

| **R⁻** | 6 | ✗ | —

| **Na⁺** | 6 | 6 | **12**

| **Cl⁻** | 0 | 6 | **6**

| **V** | 1 L | 1 L | —

Vérification éclair de l'électroneutralité initiale : A = 6 Na⁺ vs 6 R⁻ ✓ ; B = 6 Na⁺ vs 6 Cl⁻ ✓.

**Étape 2 — Tableau à l'équilibre** (inconnues a, b, c, d).

|
| | A | B | Total

| **R⁻** | 6 (inchangé) | ✗ | 6

| **Na⁺** | a | b | a + b = 12

| **Cl⁻** | c | d | c + d = 6

| **V** | 1 L | 1 L | —

**Étape 3 — Appliquer les 3 règles**

① **Conservation** (déjà écrite dans la colonne Total) : a + b = 12, c + d = 6.

② **Électroneutralité** dans chaque compartiment :

- Compartiment A : a (Na⁺) = c (Cl⁻) + 6 (R⁻) → **a = c + 6**

- Compartiment B : b (Na⁺) = d (Cl⁻) → **b = d**

③ **Loi de Donnan** : a × c = b × d.

**Étape 4 — Résoudre**

De b = d et a + b = 12 → b = d = 12 − a, donc **d = 12 − a**.

De a = c + 6 → **c = a − 6**.

On injecte dans Donnan : a × (a − 6) = (12 − a)²

a² − 6a = 144 − 24a + a² → 18a = 144 → **a = 8 mmol/L**.

**Étape 5 — Tableau final**

|
| | A (mmol/L) | B (mmol/L)

| **R⁻** | 6 | ✗

| **Na⁺** | **8** | **4**

| **Cl⁻** | **2** | **4**

Vérifications :

- Donnan : 8 × 2 = 16 et 4 × 4 = 16 ✓

- Électroneutralité A : 8 (Na⁺) = 2 (Cl⁻) + 6 (R⁻) ✓

- Électroneutralité B : 4 (Na⁺) = 4 (Cl⁻) ✓

- Mémo : Na⁺ plus concentré en A (8 > 4) et Cl⁻ plus concentré en B (4 > 2) ✓ — R⁻ a bien attiré les cations et repoussé les anions.

**Étape 6 — Rapport de Donnan et potentiel**

D r = [Na⁺] A / [Na⁺] B = 8 / 4 = **2**. (Vérif côté Cl⁻ : 4/2 = 2 ✓)

U d ≈ 60 × log(2) ≈ 60 × 0,30 ≈ **18 mV**.

👉 Le compartiment B (sans protéine) est plus positif que A d'environ 18 mV.

#### Variante : et si on me demande une quantité de matière précise ?

Le mini-exercice ci-dessus partait de quantités initiales et demandait de tout déterminer. **Mais un autre type de question, très fréquent au concours, est l'inverse :** on te donne seulement **quelques concentrations / quantités partielles**, et on te demande de remplir **une case précise du tableau** — typiquement une quantité de matière comme « combien de moles de Cl⁻ y a-t-il dans B à l'équilibre ? ».

👉 **D r n'est presque jamais donné dans l'énoncé.** C'est à toi de le déduire à partir des données disponibles (souvent deux concentrations d'un même ion diffusible des deux côtés, ou via électroneutralité + Donnan combinés).

La méthode reste la même, mais on l'utilise **en mode "remontée ciblée"** :

- ① **Deviner D r ** à partir des concentrations données (cation des 2 côtés → ratio direct, ou via électroneutralité d'un compartiment pour reconstituer une concentration manquante).

- ② Utiliser **électroneutralité** dans un compartiment pour combler une autre case manquante si besoin.

- ③ Utiliser **D r ** comme facteur d'échelle pour passer d'un compartiment à l'autre.

- ④ Convertir concentration → quantité de matière via **n = C × V** (attention au volume du bon compartiment).

Voici un cas-école avec des **volumes différents** pour bien faire travailler la conversion mol/conc :

**🧪 Énoncé n°2 — Volumes différents + quantité de matière**

Deux compartiments A (V A = **1 L**) et B (V B = **2 L**) sont séparés par une membrane dialysante. À l'équilibre, on a mesuré :

- [R⁻] A = 6 mmol/L (protéinates monovalents bloqués en A)

- [Na⁺] A = 8 mmol/L

- [Na⁺] B = 4 mmol/L

Questions :

- Calcule le rapport de Donnan D r .

- Quelle est la **quantité de matière de Cl⁻** (en mmol) présente dans le compartiment B à l'équilibre ?

- Calcule le potentiel de Donnan U d .

👁️ Voir la correction pas à pas

**━━━ Question 1 — Le rapport D r ━━━**

D r se lit directement à partir des deux concentrations de Na⁺ qu'on nous donne. Comme Na⁺ est un cation et que les R⁻ sont en A, on met [Na⁺] A au numérateur :

D r = [Na⁺] A / [Na⁺] B = 8 / 4 = **2**

👉 Vérif de cohérence : D r > 1, conforme au mémo (cation plus concentré du côté des R⁻). ✓

**━━━ Question 2 — La quantité de Cl⁻ dans B ━━━**

On veut **n B (Cl⁻)** en mmol. Comme n = C × V, on aura besoin de :

- **[Cl⁻] B ** (concentration en mmol/L) — inconnue, à calculer

- **V B ** = 2 L (donné)

Comment obtenir [Cl⁻] B ? On va l'attaquer en **2 étapes** :

**① Trouver [Cl⁻] A via l'électroneutralité du compartiment A.** Dans A, on a 3 espèces chargées (Na⁺, Cl⁻, R⁻) et l'équation d'électroneutralité s'écrit :

[Na⁺] A = [Cl⁻] A + [R⁻] A

On isole [Cl⁻] A :

[Cl⁻] A = [Na⁺] A − [R⁻] A = 8 − 6 = **2 mmol/L② Passer de [Cl⁻] A à [Cl⁻] B via D r .** Pour un anion (côté A des R⁻), on multiplie par D r en passant de A à B :

D r = [Cl⁻] B / [Cl⁻] A ⇒ [Cl⁻] B = D r × [Cl⁻] A = 2 × 2 = **4 mmol/L**

👉 Vérif Donnan en concentrations : [Na⁺] A × [Cl⁻] A = 8 × 2 = 16 ; [Na⁺] B × [Cl⁻] B = 4 × 4 = 16 ✓

**③ Convertir en quantité de matière.** C'est ici que V B = 2 L entre en jeu :

n B (Cl⁻) = [Cl⁻] B × V B = 4 mmol/L × 2 L = **8 mmol**

⚠️ **Piège classique** : si tu avais oublié que V B = 2 L (et utilisé V = 1 L par réflexe), tu aurais répondu 4 mmol — un facteur 2 d'erreur. Toujours noter les volumes en bas du tableau.

**━━━ Question 3 — Le potentiel U d ━━━**

Le calcul se fait en 3 gestes mécaniques (cf. section 5) :

- ① D r = 2 (Q1)

- ② log(D r ) = log(2) ≈ 0,30 (mémo des log)

- ③ U d = 60 × 0,30 = **18 mV**

👉 Le compartiment B (sans protéines) est ~18 mV plus positif que A.

**━━━ Récap visuel — Tableau final complété ━━━**

|
| Espèce | A (V = 1 L) | B (V = 2 L)

| R⁻ | 6 mmol/L | 6 mmol | ✗

| Na⁺ | 8 mmol/L | 8 mmol | 4 mmol/L | 8 mmol

| Cl⁻ | 2 mmol/L | 2 mmol | **4 mmol/L | 8 mmol**

Vérifications finales :

- Donnan (en conc) : 8 × 2 = 16 ; 4 × 4 = 16 ✓

- Électroneutralité A (en conc) : 8 = 2 + 6 ✓

- Électroneutralité B (en conc) : 4 = 4 ✓

- D r côté Cl⁻ : 4/2 = 2 = D r côté Na⁺ ✓

🎯 **Le réflexe à automatiser au concours**

- **Dessine le tableau vide** dès la lecture de l'énoncé — toujours dans le même ordre (ions en lignes, compartiments en colonnes, V en bas, Total à droite).

- **Barre les cases impossibles** (R z− bloqué côté membrane).

- **Pose les valeurs initiales**, vérifie l'électroneutralité de départ — si elle est fausse, c'est que tu as mal lu l'énoncé.

- **Cherche D r en priorité** : c'est lui qui débloque tout. Une fois D r connu, tu obtiens U d sans toucher au reste.

- **Vérifie le sens** avec le mémo : cation plus concentré du côté des R z− , anion plus concentré de l'autre côté. Si tu trouves l'inverse, recompte.

⏱️ **Cible chrono** : 2 minutes pour un cas à 2 compartiments / 2 ions diffusibles. Au-delà, tu refais le tableau plutôt que de chercher l'erreur dans tes lignes de calcul.

👉 La méthode tableau se généralise sans difficulté aux cas plus retors : **3 compartiments** (on ajoute une colonne C), **ions divalents** comme Mg²⁺ ou SO₄²⁻ (on multiplie par |z| pour l'électroneutralité, et D r est élevé à la puissance ±Z pour passer d'un compartiment à l'autre), **volumes différents** (on raisonne en moles dans le tableau et on divise par V en fin de calcul). Garde la même grille, change les coefficients : c'est la force du Sudoku.

## V. Pression colloïdo-osmotique et œdèmes

Voici l'application clinique majeure du chapitre. L'asymétrie ionique produite par Donnan, combinée à la pression osmotique des protéines elles-mêmes, génère une force qui retient l'eau dans le compartiment vasculaire. Si cette force diminue (par exemple parce que les protéines plasmatiques chutent), l'eau s'échappe vers les tissus et forme des œdèmes.

### 1. Définition de la pression colloïdo-osmotique (oncotique)

#### 🤔 D'abord, c'est quoi une « pression osmotique » ?

Avant de parler de pression colloïdo-osmotique , il faut comprendre la **pression osmotique** tout court. On la pose ici proprement.

**🔑 La pression osmotique en une idée**

Imagine deux compartiments séparés par une membrane qui ne laisse passer que **l'eau** (pas les solutés). D'un côté, de l'eau pure. De l'autre, de l'eau + des solutés dissous (sucre, sel, protéines...). Que se passe-t-il ?

👉 L'eau va spontanément **migrer vers le compartiment où il y a des solutés**, pour les diluer. Ce déplacement spontané d'eau s'appelle l'**osmose**. La **pression osmotique** (notée π), c'est la force avec laquelle ce compartiment riche en solutés « tire » l'eau vers lui . Plus il y a de solutés, plus la pression osmotique est élevée, plus l'eau est aspirée.

📐 **Quantitativement** — c'est ici qu'on rencontre pour la première fois la **loi de van't Hoff** (découverte en 1886, prix Nobel). Elle dit que la pression osmotique ne dépend QUE du nombre de particules dissoutes (pas de leur nature) :

π = osmolarité × R × T

avec :

- **osmolarité** = nombre total de particules dissoutes par litre (en osmol/L), notion vue au **ch.1**. Petit rappel : 1 mol de NaCl dissous donne 2 osmol (Na⁺ + Cl⁻), 1 mol de glucose donne 1 osmol (le glucose ne se dissocie pas). C'est le total qui compte.

- **R = 8,314 J/(mol·K)** = constante des gaz (introduite à la section IV.3)

- **T** = température absolue en kelvin (à 37 °C, T = 310 K)

Ce qu'il faut retenir : cette formule est **structurellement analogue à la loi des gaz parfaits** (PV = nRT, vue en Terminale), mais appliquée aux particules dissoutes dans un liquide plutôt qu'à un gaz.

🧠 **Unité courante en médecine** : le **mmHg** (millimètre de mercure, comme pour la tension artérielle). À titre de repère pratique : **1 mmol/L de particules ≈ 19 mmHg** de pression osmotique à 37 °C.

🧠 **Image mentale — Les solutés comme des aimants à eau**

Pense à chaque particule dissoute (ion, sucre, protéine) comme à un **petit aimant qui attire l'eau autour de lui**. Plus tu as de particules dans un compartiment, plus la force d'attraction totale (= pression osmotique) est grande. Si la membrane laisse passer l'eau mais pas les solutés, l'eau finit par migrer vers le compartiment le plus « aimanté » (= le plus concentré en solutés).

👉 C'est cette force qui régit toute la circulation de l'eau dans ton corps : entre le sang et les tissus, entre l'intérieur et l'extérieur des cellules, entre les tubules rénaux et l'urine, etc.

Maintenant qu'on a posé ça proprement, on peut définir la **pression colloïdo-osmotique**.

**🔑 Pression colloïdo-osmotique π_o (ou pression oncotique)**

La **pression colloïdo-osmotique** (synonyme : **pression oncotique**) est la pression osmotique supplémentaire qu'exerce un compartiment riche en protéines (comme le plasma) par rapport à un compartiment qui en est dépourvu (comme le liquide interstitiel entre les cellules). C'est la pression qui « retient » l'eau dans le secteur vasculaire — donc qui empêche tout ton sang de fuir vers les tissus en permanence.

Valeur normale au niveau plasmatique : **π_o ≈ 25 mmHg**.

Le mot « colloïdo » vient des protéines elles-mêmes (qui forment ce qu'on appelle un « colloïde » en chimie — une solution de grosses particules). Le mot « oncotique » vient du grec onkos = « gonflement » (les protéines empêchent le gonflement des tissus en retenant l'eau dans les vaisseaux).

[FIGURE physique_ch3_fig17_pression_oncotique_principe.png]

**Figure** — Principe de la pression colloïdo-osmotique au niveau d'un capillaire.

Cette pression a en réalité 3 contributions distinctes — et l'une d'elles, surprenamment, est la plus importante :

Décomposition de la pression oncotique
π_o = π_p + π_h + π_d
π_p = pression osmotique propre des protéinates · π_h = contribution liée à l'hydratation des protéines · π_d = pression osmotique due à l'excès d'ions diffusibles (effet Donnan)

Détaillons chaque contribution :

- **π_p (pression propre des protéines)** = C_p × R × T : c'est la pression osmotique calculée par van't Hoff (formule vue juste au-dessus), en considérant les protéines elles-mêmes comme des entités osmotiquement actives. **Numériquement faible** (~ 1-2 mmHg) car C_p est faible : il y a peu de protéines en moles par litre (les protéines sont énormes en masse, mais peu nombreuses en moles).

- **π_h (hydratation)** : les protéines sont entourées de molécules d'eau qui les « accompagnent », ce qui augmente leur volume apparent et donc leur concentration osmotique apparente. Contribution généralement négligeable en clinique.

- **π_d (effet Donnan)** = Σ ΔC ions × R × T : c'est la **contribution dominante**, et c'est elle qui justifie tout le chapitre. L'asymétrie des petits ions de part et d'autre du capillaire (résultat direct de Donnan, qu'on a calculée en section IV) crée une pression osmotique supplémentaire qui retient l'eau du côté des protéines. Cette contribution est d'environ **22-23 mmHg**, alors que π_p seule ne donnerait qu'~ 2 mmHg. **Sans l'effet Donnan, ton sang ne pourrait pas retenir son eau.**

👉 **Au total :** π_o = π_p + π_h + π_d ≈ 2 + ~0 + 23 ≈ **25 mmHg**. Voilà d'où viennent les fameux 25 mmHg de pression oncotique du plasma : 20 % des protéines elles-mêmes, 80 % de l'effet Donnan qu'elles déclenchent .

### 2. L'équilibre de Starling au capillaire — Comment l'eau circule dans les tissus

#### 🤔 D'abord, c'est quoi un capillaire, un interstitium, et le système lymphatique ?

Avant de parler de l'équilibre de Starling, il faut visualiser **l'anatomie des compartiments liquidiens** de ton corps. L'eau dans ton organisme n'est pas répartie au hasard — elle occupe **3 zones (= 3 compartiments)** bien distinctes :

🔑 **Les 3 compartiments liquidiens (architecture de base)**

- **① Le plasma** = l'eau qui circule à l'intérieur des vaisseaux sanguins (artères, veines, capillaires). C'est le secteur « voyageur ».

- **② L'interstitium (= liquide interstitiel)** = l'eau qui baigne les cellules , à l'extérieur des vaisseaux mais à l'extérieur des cellules. Pense à un coussin d'eau qui entoure chaque cellule. C'est le secteur « tampon ».

- **③ L'intracellulaire** = l'eau à l'intérieur des cellules.

👉 Entre ① et ② (entre le sang et l'interstitium), il y a **la paroi du capillaire** = une membrane dialysante (qui laisse passer eau + petits ions, mais retient les protéines).

👉 Un **capillaire** est le plus petit vaisseau sanguin (quelques µm de diamètre seulement) : c'est là que se font tous les échanges entre le sang et les tissus. Tu en as des millions, partout dans le corps.

🔑 **Le système lymphatique — le 3ᵉ acteur indispensable de Starling**

Il existe dans ton corps un **second réseau de vaisseaux**, parallèle au réseau sanguin (que personne ne voit, mais qui est partout) : le **système lymphatique**. Ce sont des fins vaisseaux qui partent des tissus et remontent vers le cœur, en collectant en permanence l'**excès de liquide interstitiel** (et les protéines qui ont fui des capillaires). La lymphe ainsi collectée est ensuite réinjectée dans la circulation sanguine au niveau du cou.

🧠 **Analogie — Les égouts d'une ville** : si tu construis une ville, tu poses des canalisations d'eau (= vaisseaux sanguins) qui amènent l'eau partout. Mais il y a toujours de l'eau qui fuit (toilettes, douches, pluie...) → tu dois aussi prévoir un **réseau d'égouts** qui ramasse cet excédent et le ramène à la station d'épuration. Le système lymphatique, c'est exactement ces « égouts » du corps : il ne sert pas à distribuer , il sert à récupérer le surplus .

👉 Sans ce drainage lymphatique, l'interstitium gonflerait progressivement, car la balance Starling laisse toujours un petit excédent d'eau qui sort des capillaires. Si les « égouts » sont bouchés (chirurgie qui sectionne les vaisseaux lymphatiques, parasite type filariose), on a un **lymphœdème** — le bras ou la jambe enfle progressivement (4ᵉ mécanisme d'œdème, qu'on verra avec Marie plus bas).

Maintenant qu'on a posé l'architecture, on peut comprendre l'équilibre de Starling. **Au niveau d'un capillaire sanguin, l'eau passe en permanence entre le plasma (compartiment 1) et l'interstitium (compartiment 2)**. Cette circulation est gouvernée par **l'équilibre de Starling** : 4 forces principales s'opposent ou s'additionnent, et la résultante détermine si l'eau sort ou entre dans le vaisseau.

|

| Force
| Direction
| Effet

| **Pression hydrostatique capillaire (PHC)** | Pousse l'eau VERS l'interstitium | Sortie d'eau du vaisseau (filtration)

| Pression hydrostatique interstitielle (PHI) | Pousse l'eau VERS le capillaire | Petite, en général négligeable

| **Pression oncotique plasmatique (π_o plasma)** | Attire l'eau DANS le capillaire | Retient l'eau dans le sang (la grande règle)

| Pression oncotique interstitielle (π_o interstitium) | Attire l'eau VERS l'interstitium | Très faible (peu de protéines dans l'interstitium)

### 3. Les œdèmes — Quand la balance bascule

Un **œdème** est l'accumulation anormale d'eau dans le compartiment interstitiel (entre les cellules). Visuellement, ça donne des chevilles gonflées, un visage bouffi le matin, parfois un ventre distendu (= ascite, quand le liquide s'accumule dans la cavité abdominale).

Un œdème survient chaque fois que la **balance de Starling bascule vers la sortie d'eau du vaisseau** (filtration > réabsorption durablement). Il existe **4 mécanismes principaux** qui peuvent faire basculer la balance, et on va découvrir chacun à travers une petite histoire de patient.

#### 📖 Histoire n°1 — Robert, 62 ans, insuffisance cardiaque (↑ PHC)

Robert a fait un infarctus du myocarde il y a 5 ans. Depuis, son cœur est affaibli — il ne pompe plus aussi bien le sang. Il vient consulter parce que **ses chevilles enflent** tous les soirs, et qu'il est essoufflé même au repos. Il dort presque assis (deux gros oreillers) parce qu'allongé il a l'impression de manquer d'air.

🧩 **Que se passe-t-il, physiquement ?** Petit rappel anatomique d'abord : le sang circule en boucle. Il **part du cœur** par les **artères** (vaisseaux qui éjectent le sang vers les organes), traverse les **capillaires** (tout petits vaisseaux où les échanges avec les tissus se font), puis **revient au cœur** par les **veines**.

Chez Robert, le cœur est affaibli — il pompe mal. Imagine une pompe d'autoroute qui ralentit : les voitures qui veulent passer s'accumulent juste avant elle, ça crée un embouteillage. Ici, c'est pareil : le sang qui revient des organes par les **veines** arrive plus vite que le cœur ne peut le ré-éjecter. Du coup, ce sang « s'entasse » dans les veines et dans les capillaires qui les alimentent juste avant. La **pression hydrostatique (PHC)** dans ces vaisseaux grimpe — c'est la pression de cet embouteillage de sang qui pousse sur les parois.

À l'équilibre de Starling, cette PHC anormalement élevée pousse plus d'eau vers les tissus, et la pression oncotique normale ne suffit plus à la rappeler. **L'eau s'accumule** — en bas (chevilles, à cause de la gravité) et dans les poumons (d'où l'essoufflement).

💉 **Traitement** : diurétiques (pour éliminer l'eau via les urines), bétabloquants et IEC (pour aider le cœur à pomper mieux), restriction sodée. Position semi-assise au lit pour réduire le retour veineux.

#### 📖 Histoire n°2 — Aminata, 4 ans, kwashiorkor (↓ π_o)

Aminata vit dans une région tropicale frappée par la famine. Pendant plusieurs mois, son alimentation se réduit à du manioc — beaucoup de calories, presque pas de protéines. Quand l'ONG arrive dans son village, ils trouvent Aminata avec une silhouette caractéristique : très maigre des bras et des jambes, mais avec un **ventre énormément gonflé** (= **ascite** = accumulation de liquide dans la cavité abdominale entre les organes). Son visage est bouffi. C'est le tableau classique du **kwashiorkor** — terme issu d'une langue d'Afrique de l'Ouest (le ga) signifiant « maladie de l'enfant qu'on sèvre quand un nouveau bébé arrive ». C'est une **malnutrition protéique sévère chez le jeune enfant** en zone tropicale : l'enfant a assez de calories (féculents) mais pas assez de protéines pour synthétiser ses propres albumines. À ne pas confondre avec le marasme , qui est une carence calorique globale (enfant émacié de partout, sans œdème).

🧩 **Que se passe-t-il, physiquement ?** Sans apport protéique, le foie d'Aminata n'a plus de matière première pour fabriquer de l'albumine (la principale protéine plasmatique). Sa protéinémie chute de 70 g/L (normale) à **30 g/L**. Conséquence directe sur Starling : sa pression oncotique plasmatique tombe de 25 mmHg à environ **10 mmHg**. Cette pression résiduelle n'est plus suffisante pour rappeler l'eau dans les capillaires. **L'eau s'accumule partout** : sous la peau (visage bouffi), dans l'abdomen (ascite, d'où le ventre ballonné).

💉 **Traitement** : réalimentation progressive et prudente en protéines. Attention au « syndrome de renutrition » qui peut tuer si on relance trop vite le métabolisme. Récupération possible en quelques semaines si la cause est traitée à temps.

#### 📖 Histoire n°3 — Camille, 8 ans, choc anaphylactique (↑ perméabilité)

Camille mange un biscuit chez sa copine sans savoir qu'il contient des cacahuètes. Quelques minutes plus tard, son visage gonfle violemment, sa langue devient énorme, elle a du mal à respirer, sa tension chute. Les pompiers la rushent aux urgences : c'est un **choc anaphylactique** — réaction allergique généralisée extrêmement grave qui peut tuer en quelques minutes (l'**anaphylaxie** = réponse immunitaire systémique violente déclenchée par un allergène chez un sujet préalablement sensibilisé).

🧩 **Que se passe-t-il, physiquement ?** Le système immunitaire de Camille a reconnu l'arachide comme un envahisseur et déclenche une libération massive d'**histamine** par les mastocytes (cellules immunitaires stockant des médiateurs inflammatoires). L'histamine est une petite molécule **vasodilatatrice et perméabilisante** : elle **abîme la paroi des capillaires** partout dans le corps en élargissant brutalement leurs pores. Les protéines plasmatiques s'échappent alors des vaisseaux vers les tissus. Conséquence : la pression oncotique intra-vasculaire chute (les protéines sont parties), pendant que la pression oncotique interstitielle monte (protéines à l'extérieur du vaisseau). L'eau suit les protéines → elle quitte massivement les vaisseaux → **œdème généralisé brutal** (visage, larynx, voies respiratoires). C'est ce gonflement qui peut tuer en quelques minutes par étouffement.

💉 **Traitement** : adrénaline en urgence (resserre les vaisseaux, restaure la tension), corticoïdes (anti-inflammatoires), antihistaminiques. Camille s'en sort grâce à la rapidité de la prise en charge.

#### 📖 Histoire n°4 — Henri, 65 ans, cirrhose hépatique (le cas COMBINÉ)

⚠️ Cette histoire ne couvre pas un 5ᵉ mécanisme — on n'en a que 4. Henri est un **cas réel** qui combine plusieurs des mécanismes déjà vus chez les patients précédents (↓ π_o comme Aminata + ↑ PHC comme Robert + autres). C'est pour te montrer que dans la vraie médecine, un patient additionne souvent plusieurs causes — ce n'est pas toujours un mécanisme « pur » comme chez Robert ou Aminata.

Henri a 65 ans et a consommé de l'alcool de manière chronique pendant 40 ans. Il vient consulter pour des **œdèmes des chevilles** qui prennent le godet (le doigt enfoncé laisse une marque) et surtout un **volumineux abdomen distendu** (ascite). Sa protéinémie est mesurée à 50 g/L (au lieu de 70 g/L), avec une **albumine effondrée à 22 g/L** (au lieu de 35-50).

🧩 **Que se passe-t-il chez Henri ?** Plusieurs mécanismes — déjà vus chez les patients précédents — **s'additionnent** simultanément :

- **↓ Pression oncotique** (mécanisme principal) : le foie cirrhotique ne fabrique plus assez d'albumine → π_o plasmatique chute → l'eau fuit vers les tissus.

- **↑ Pression hydrostatique portale** — on appelle ça l'**hypertension portale**, c'est-à-dire une pression anormalement élevée dans la veine porte , qui draine le sang des intestins vers le foie. Chez Henri, le sang n'arrive plus à traverser le foie cirrhotique (foie dur, fibrosé) → il « bouchonne » en amont → la pression dans la veine porte et ses branches digestives monte → favorise particulièrement l'ascite (eau qui sort dans la cavité péritonéale, autour des intestins et du foie).

- **↑ Rétention de sodium** par activation du **système rénine-angiotensine-aldostérone (SRAA)** = cascade hormonale réflexe qui détecte une baisse de perfusion rénale et déclenche la rétention de sodium et d'eau pour restaurer le volume sanguin. Conséquence ici : ↑ volume sanguin → ↑ pression hydrostatique → aggrave les œdèmes.

💉 **Traitement** : régime sans sel, diurétiques (surtout spironolactone, qui agit sur l'aldostérone), parfois perfusion d'**albumine humaine** pour restaurer la pression oncotique, ponction d'ascite si nécessaire. Sur le long terme : sevrage alcoolique impératif, et envisager une transplantation hépatique si l'évolution est défavorable.

Maintenant qu'on a vu les 4 patients, voici une vue synthétique des 4 mécanismes côte à côte :

[FIGURE physique_ch3_fig08_4_mecanismes_oedemes.png]

**Figure** — Synthèse des 4 mécanismes d'œdèmes.

🔬 **Récap des 4 mécanismes :**

|

| Mécanisme
| Cause physiologique
| Exemples cliniques (patient-type)

| **↑ Pression hydrostatique (PHC)**
| Cœur défaillant → refoulement, ou obstacle veineux
| **Robert** (insuffisance cardiaque), thrombose veineuse, station debout prolongée

| **↓ Pression oncotique (π_o)**
| Protéinémie effondrée (synthèse insuffisante ou perte)
| **Aminata** (kwashiorkor), **Henri** (cirrhose), syndrome néphrotique

| **↑ Perméabilité capillaire**
| Membrane lésée → fuite des protéines vers l'interstitium
| **Camille** (choc anaphylactique), inflammation, brûlure, sepsis

| **↓ Drainage lymphatique**
| Obstruction des vaisseaux lymphatiques
| Curage ganglionnaire (cancer du sein, lymphœdème du bras), filariose

## 🎯 Conclusion — Ce que tu emportes pour la suite

Ce chapitre pose les bases physiques de toute la physiologie membranaire. Cinq idées à graver :

- **Électroneutralité** : dans tout compartiment, Σ charges + = Σ charges −. Outil clinique direct : le **trou anionique** (TA = Na⁺ − Cl⁻ − HCO₃⁻ ≈ 12 mEq/L). Élargi → présence d'anions indosés.

- **Précipitation** : quand [A⁺]·[B⁻] dépasse le produit de solubilité **Ks**, un sel cristallise (calculs rénaux). Prévention universelle : **diluer en buvant beaucoup**.

- **4 types de membranes** : perméable (tout passe), **dialysante** (eau + petits ions, pas les protéines), **semi-perméable** (eau seule), imperméable (rien). Tout Donnan repose sur la dialysante.

- **Effet Donnan** : quand une membrane bloque les protéinates R⁻, les ions diffusibles ne se répartissent JAMAIS 50/50. **Loi de Donnan** : [Na⁺] A × [Cl⁻] A = [Na⁺] B × [Cl⁻] B . **Potentiel de Donnan** : U d ≈ (60/Z)·log(C₁/C₂) à 37 °C. **Méthode Sudoku** (tableau + 3 règles : conservation, électroneutralité, rapport D r ) pour tout résoudre en moins de 2 min.

- **Pression oncotique** π o ≈ 25 mmHg = ce qui retient l'eau dans tes vaisseaux. Dominée par l'effet Donnan (π d ≈ 23 mmHg) bien plus que par les protéines elles-mêmes (π p ≈ 2 mmHg). **4 mécanismes d'œdèmes** = 4 façons de faire basculer la balance de Starling : ↑ PHC, ↓ π o , ↑ perméabilité, ↓ drainage lymphatique.

👉 La leçon centrale : une simple asymétrie ionique de part et d'autre d'une membrane est suffisante pour générer un voltage, une pression osmotique, et toute la mécanique de l'eau dans le corps. C'est l'idée matricielle de toute la biophysique médicale.

×

medeos-sante.fr