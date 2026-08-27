Chapitre 1 : Eau, solutions et concentrations - MEDEOS — Partie 3

Chapitre 1 — Partie 3

# Eau, solutions et concentrations

La mole, les concentrations et l'osmolarité — la fondation invisible de toute la physique du concours.

## 🔄 Où on en est

Dans la Partie 2, tu as vu les trois états de la matière, puis tout ce qui rend l'eau spéciale : sa forme coudée fait d'elle un dipôle (un côté légèrement négatif, un côté légèrement positif), et c'est ce qui lui donne son pouvoir de tout dissoudre. Tu as compris pourquoi le sel se dissout dans l'eau mais pas dans l'huile, comment les ponts hydrogène expliquent que la transpiration te refroidisse, et comment l'eau se répartit dans les trois compartiments du corps. Tu as ensuite revu la mole, le « paquet » de 6 × 10²³ molécules, avec la conversion clé n = m/M et ce repère à garder à vie : 1 litre d'eau contient environ 55,5 moles.

Tu sais maintenant compter les molécules dans un volume donné. C'est exactement ce qu'il faut pour mesurer une solution : on entre dans les concentrations (pondérale, molaire, équivalente), puis dans l'osmolarité, qui te fera enfin comprendre ce que veut dire « sérum physiologique 0,9 % ».

## IV. Les concentrations qui comptent

Toute la pratique médicale tourne autour de concentrations : la glycémie en g/L, la natrémie en mmol/L, la posologie d'un médicament en mg/kg… Trois manières d'exprimer la même réalité, qui répondent à des questions différentes. On en présente les trois principales (massique, molaire, dilution), puis on évoque les autres en encadré bonus.

### 1. Vocabulaire — Solution, solvant, soluté

**🔑 Les définitions à connaître**

- **Solution** : mélange homogène à l'échelle moléculaire de plusieurs corps, en une phase unique condensée (liquide ou solide).

- **Solvant** : le composé le plus représenté (en quantité).

- **Soluté** : le ou les composés en quantité moindre, dissous dans le solvant.

- **Solution aqueuse** : solution dont le solvant est l'eau (cas omniprésent en biologie).

Une solution n'est pas la même chose qu'une **dispersion** (où une phase est dispersée dans une autre, sans dissolution moléculaire) ni qu'un **colloïde** (particules entre 1 et 100 nm, qui ne se voient pas à l'œil nu mais dispersent la lumière).

[FIGURE physique_ch1_fig07_solution_solvant_solute.png]

Une solution est constituée d'un **solvant** (majoritaire, ici l'eau) dans lequel sont dispersés un ou plusieurs **solutés** (en faible quantité). Quand le solvant est l'eau, on parle de solution aqueuse — c'est le cas omniprésent en biologie.

Quand un soluté est très dilué dans son solvant, on dit qu'il forme une **solution idéale** : les molécules de soluté sont trop éloignées pour interagir entre elles, et toutes les formules « simples » qu'on va voir s'appliquent directement. À l'inverse, dans une solution très concentrée, ces interactions soluté-soluté deviennent visibles et les calculs se compliquent (on parle alors de solution **non idéale**). Heureusement, la quasi-totalité des solutions biologiques sont très diluées et restent proches de l'idéalité.

### 2. Concentration pondérale (massique) C p

La **concentration pondérale** exprime la masse de soluté par volume de solution :

Concentration pondérale
C p = m / V
avec m = masse de soluté (g), V = volume de solution (L). Unités : g/L (équivalent à kg/m³).

C'est la concentration la plus intuitive : « combien de grammes dans 1 litre ? ». On la rencontre partout en biologie clinique :

- **Glycémie** : ~ 1 g/L (à jeun, valeur normale)

- **Cholestérolémie** : ~ 2 g/L

- **Protidémie** : ~ 70 g/L (protéines plasmatiques totales)

- **Hémoglobine** : ~ 140 g/L (chez l'homme adulte)

On peut aussi l'exprimer en **pourcentage massique** (g pour 100 g de solvant) ou en **g/100 mL**, ce qui est exactement la même chose si la densité de la solution est proche de 1 (cas des solutions aqueuses diluées).

**⚠️ Piège dépendance à la température**

C p dépend du volume V, qui lui-même **varie avec la température** (dilatation thermique). Donc une concentration pondérale mesurée à 20 °C n'est pas exactement la même à 37 °C. En pratique, cette variation est négligeable pour les solutions aqueuses biologiques (~ 0,5 % sur la plage 20-37 °C), mais le piège tombe parfois en QCM théorique.

### 3. Concentration molaire C — Celle qui compte vraiment

#### 🤔 Pourquoi compter en moles plutôt qu'en grammes ?

La concentration pondérale (g/L) est facile à mesurer en pratique : tu pèses, tu dissous, tu lis. Mais en chimie, **les réactions ne se font pas entre des grammes — elles se font entre des molécules**. Deux exemples pour s'en convaincre :

- **1 g de glucose** (M = 180 g/mol) contient 1/180 ≈ 5,5 × 10⁻³ mol, soit ~3,3 × 10²¹ molécules.

- **1 g de NaCl** (M = 58,5 g/mol) contient 1/58,5 ≈ 1,7 × 10⁻² mol, soit ~10²² molécules — **3 fois plus que pour le glucose**, à masse égale.

Pour prévoir comment ces solutés vont réagir, osmoser, ou modifier le pH, ce qui compte n'est pas combien de grammes ils pèsent, mais **combien de molécules ils apportent**. D'où l'intérêt de la **concentration molaire** : elle compte des moles, donc des molécules.

Concentration molaire
C = n / V
avec n = quantité de soluté (mol), V = volume de solution (L). Unité : mol/L (aussi noté M pour « molaire »).

Lecture en français : « si je prends 1 litre de cette solution, j'y trouverai C moles de soluté ». C'est la grandeur la plus utilisée en chimie, en biophysique et en clinique.

#### 🔑 Le pont entre les deux concentrations : C = C p / M

Tu as souvent les deux concentrations à manipuler en clinique (la glycémie est tantôt donnée en g/L, tantôt en mmol/L…). Heureusement, le passage de l'une à l'autre est immédiat :

Pont massique ↔ molaire
C = C p / M
C en mol/L · C p en g/L · M en g/mol

**D'où vient cette formule ?** Reprenons l'idée pas à pas, en raisonnant sur 1 L de solution :

- Dans 1 L, on a par définition **C p grammes** de soluté.

- Or, on sait que 1 mole de soluté pèse **M grammes**.

- Donc le nombre de moles présent dans ces C p grammes vaut **C p / M moles** (c'est exactement la formule n = m / M, vue au début du chapitre).

- Et comme ce nombre est par litre , c'est par définition la concentration molaire C.

Donc : **C (mol/L) = C p (g/L) / M (g/mol)**. C'est juste n = m/M, appliqué au litre.

**🔑 Exemple concret pour fixer les idées**

Tu prépares une solution à **18 g/L de glucose** (M = 180 g/mol). Quelle est sa concentration molaire ?

- Dans 1 L de solution, il y a 18 g de glucose. **(C p = 18 g/L)**

- 1 mole de glucose pèse 180 g. **(M = 180 g/mol)**

- Donc dans 18 g, il y a 18 / 180 = 1/10 = **0,1 mole** de glucose.

- Cette quantité est par litre → **C = 0,1 mol/L = 100 mmol/L**.

On retrouve directement avec la formule : C = C p / M = 18 / 180 = 0,1 mol/L ✓

#### Vocabulaire des ordres de grandeur

Les solutions biologiques sont rarement à 1 mol/L — elles sont souvent 1000 à 1 000 000 fois plus diluées. On utilise donc des préfixes pour ne pas écrire des zéros à n'en plus finir :

|

| Nom
| Concentration
| Notation

| Solution molaire | 1 mol/L | « 1 M »

| Solution décimolaire | 10⁻¹ mol/L = 0,1 mol/L | « 0,1 M »

| Solution centimolaire | 10⁻² mol/L = 0,01 mol/L | —

| Solution millimolaire | 10⁻³ mol/L = 1 mmol/L | « 1 mM »

| Solution micromolaire | 10⁻⁶ mol/L = 1 µmol/L | « 1 µM »

Ordres de grandeur à mémoriser : la natrémie (~140 **mmol**/L), la glycémie (~5 **mmol**/L), une hormone circulante (quelques **µmol**/L à **nmol**/L).

**🧪 Mini-exercice — Conversion glycémie g/L ↔ mmol/LÉnoncé :** En France, la glycémie est exprimée en g/L (valeur normale ~1 g/L). Dans d'autres pays (Royaume-Uni, États-Unis), elle est exprimée en mmol/L. Donne la conversion en mmol/L sachant que M(glucose) = 180 g/mol.

👁️ Voir la correction

**Correction :Étape 1 — appliquer la formule.** C = C p / M = 1 / 180 mol/L.

**Étape 2 — passer en mmol/L** (l'unité utile en clinique). On multiplie par 1000 pour convertir mol → mmol :

**C = 1000 / 180 mmol/L = 100 / 18 mmol/LÉtape 3 — calcul mental de 100 / 18.** On cherche un nombre x tel que 18 × x ≈ 100. On teste mentalement :

- 18 × 5 = 90 (il manque 10)

- 18 × 6 = 108 (on dépasse de 8)

- Donc x est entre 5 et 6 — quasiment au milieu, soit **≈ 5,5**.

Vérification : 18 × 5,5 = 18 × 5 + 18 × 0,5 = 90 + 9 = 99 ≈ 100 ✓

**Conclusion à retenir comme un réflexe :**

Glycémie : 1 g/L ↔ 5,5 mmol/L

Inversement, 2 g/L (diabète déséquilibré) ↔ ≈ 11 mmol/L (le double). C'est la conversion la plus utilisée en médecine clinique — à intégrer comme un automatisme.

### 4. Dilutions et facteur de dilution

Diluer une solution, c'est **ajouter du solvant sans changer la quantité de soluté**. La concentration diminue donc proportionnellement à l'augmentation de volume :

Loi de conservation de la matière
C₁ × V₁ = C₂ × V₂
C₁, V₁ : avant dilution · C₂, V₂ : après dilution. La quantité de soluté n = C × V reste constante.

**🔑 Exemple concret pour fixer les idées**

Tu pars d'une **solution-mère à 1 mol/L**. Tu veux préparer **1 L d'une solution-fille à 0,1 mol/L** (10 fois plus diluée). Quel volume de solution-mère prélèves-tu ?

- On connaît C₁ = 1 mol/L, C₂ = 0,1 mol/L, V₂ = 1 L. On cherche V₁.

- On isole V₁ dans la formule : V₁ = C₂ × V₂ / C₁ = 0,1 × 1 / 1 = **0,1 L = 100 mL**.

- **Méthode pratique** : prélève 100 mL de la solution-mère et complète avec de l'eau jusqu'à 1 L au total.

Vérification intuitive : on a divisé la concentration par 10 (1 → 0,1 mol/L), donc le volume final doit être 10× plus grand que le volume prélevé (100 mL → 1 L). C'est ça, la conservation de n = C × V.

On parle souvent du **facteur de dilution F** pour résumer une dilution en un seul nombre. C'est tout simplement **de combien le volume a été multiplié** entre l'avant et l'après :

Facteur de dilution
F = V₂ / V₁ = C₁ / C₂
Si tu multiplies le volume par F, tu divises la concentration par F (n constant).

Reprends l'exemple ci-dessus : on est passé de 100 mL (V₁) à 1 L (V₂), donc F = 1000 / 100 = **10**. Et la concentration est passée de 1 mol/L à 0,1 mol/L → bien divisée par 10. Quand un protocole te dit « dilue au 1/10 », ça veut juste dire F = 10.

**🔑 Série de dilutions en cascade**

Au laboratoire ou en pharmacie, on enchaîne souvent **plusieurs dilutions successives** pour atteindre une concentration très faible :

- Dilution 1/10 : 1 mL dans 10 mL → C est divisée par 10

- Dilution suivante 1/10 : 1 mL du précédent dans 10 mL → C totale divisée par 100

- Encore une 1/10 : C totale divisée par 1000

Cette technique est utilisée en bactériologie (compter des colonies après dilution), en pharmacologie (préparer des concentrations très basses) et en homéopathie (dilutions extrêmes).

**🧪 Mini-exercice — Préparation d'une solution diluéeÉnoncé :** Tu disposes d'une solution mère de NaCl à 1 mol/L. Tu veux préparer 250 mL d'une solution fille à 0,15 mol/L (concentration plasmatique de Na⁺). Quel volume de solution mère faut-il prélever ?

👁️ Voir la correction

**Correction :Étape 1 — identifier les données.**

- Solution-mère : C₁ = 1 mol/L · V₁ = inconnu (c'est ce qu'on cherche)

- Solution-fille : C₂ = 0,15 mol/L · V₂ = 250 mL

**Étape 2 — isoler V₁ dans la formule.** On part de C₁ × V₁ = C₂ × V₂ et on divise les deux côtés par C₁ :

**V₁ = (C₂ × V₂) / C₁**

Note sur les unités : V₁ et V₂ doivent être dans la même unité. Ici on garde tout en mL, ça fonctionne (les mL se retrouvent en mL des deux côtés).

**Étape 3 — calcul mental.** V₁ = (0,15 × 250) / 1 = 0,15 × 250.

- Astuce : 0,15 = 0,1 + 0,05, donc 0,15 × 250 = (0,1 × 250) + (0,05 × 250) = 25 + 12,5 = **37,5 mLÉtape 4 — méthode pratique au labo.**

- Prélève **37,5 mL** de la solution-mère à 1 mol/L à la pipette.

- Verse dans une fiole jaugée de 250 mL.

- Complète avec de l'eau distillée jusqu'au trait de jauge (250 mL au total).

- La solution finale contient bien 0,15 mol/L de NaCl ✓

**Vérification** : avec 37,5 mL prélevés à 1 mol/L, tu as transféré n = 0,0375 mol = 37,5 mmol de NaCl. Dans 250 mL final, ça fait 37,5 / 250 = 0,15 mmol/mL = **0,15 mol/L** ✓

### 5. La fraction molaire F — Le rapport sans dimension

La **fraction molaire** d'un soluté, c'est tout simplement la **proportion qu'il représente parmi toutes les molécules** de la solution. C'est un nombre entre 0 et 1 (ou entre 0 % et 100 % si tu préfères raisonner en pourcentage).

Fraction molaire F i
F i = n i / n total
n i = moles de l'espèce i · n total = moles totales en solution (soluté + solvant). **Sans dimension.**

Propriété fondamentale : la somme des fractions molaires d'une solution vaut toujours **1**.

**Σ F i = 1🔑 Exemple pour fixer les idées**

Tu mélanges **1 mole de glucose** avec **4 moles d'eau** (cas fictif très concentré, juste pour le calcul). Quelle est la fraction molaire de chaque espèce ?

- n total = 1 + 4 = **5 moles**

- F glucose = 1 / 5 = **0,2** (soit 20 %)

- F eau = 4 / 5 = **0,8** (soit 80 %)

- Vérification : 0,2 + 0,8 = 1 ✓

Lecture intuitive : sur 5 molécules prises au hasard dans cette solution, 1 est du glucose et 4 sont de l'eau. La fraction molaire est juste une **proportion** exprimée en décimal.

**🔑 Pourquoi c'est utile : visualiser à quel point une solution biologique est diluée**

Tu as vu plus haut que **1 L d'eau = 55,5 mol**. Une solution biologique typique a ~0,3 mol/L de solutés (osmolarité plasmatique = 300 mOsm/L). Quelle est la fraction molaire des solutés dans le plasma ?

**F solutés ≈ 0,3 / 55,5 ≈ 5 × 10⁻³ (soit 0,5 %)**

Autrement dit : sur 1000 molécules dans le plasma, **995 sont de l'eau** et seulement 5 sont des solutés. Ton « milieu intérieur » est en réalité… presque entièrement de l'eau. Cette intuition est précieuse — elle justifie aussi pourquoi on traite le plasma comme une solution « diluée » dans tous les calculs.

**🧪 Mini-exercice — Fraction molaire dans un mélange aqueuxÉnoncé :** On dissout 1 mol de glucose dans 1 L d'eau pure. Calcule les fractions molaires du glucose et de l'eau.

👁️ Voir la correction

**Correction :Étape 1 — combien de moles de chaque espèce ?**

- **Glucose** : l'énoncé dit 1 mol, donc n glucose = **1 mol**.

- **Eau** : 1 L d'eau contient 55,5 mol (résultat démontré dans le calcul guidé §III.4 : 1000 g / 18 g/mol). Donc n eau = **55,5 mol**.

**Étape 2 — calculer le total.n total = 1 + 55,5 = 56,5 molÉtape 3 — appliquer F i = n i / n total .**

Pour le glucose : F glucose = 1 / 56,5. Calcul mental rapide — on encadre :

- 1/100 = 0,01 (trop petit, 100 trop grand comme diviseur)

- 1/50 = 0,02 (trop grand, 50 trop petit)

- 56,5 est entre 50 et 100, proche de 50 → 1/56,5 ≈ **0,018** (≈ 1,8 %)

Pour l'eau, pas besoin de refaire une division — on utilise la propriété **Σ F = 1** :

**F eau = 1 − F glucose = 1 − 0,018 = 0,982** (≈ 98,2 %)

**Étape 4 — lecture du résultat.**

Sur 1000 molécules prises au hasard dans cette solution, **982 sont de l'eau et 18 sont du glucose**. Même avec 1 mol/L de glucose (qui est une concentration molaire très élevée pour la biologie), l'eau reste à 98 % en proportion.

C'est typique des solutions aqueuses : **F solvant ≈ 1, F solutés << 1**. Voilà pourquoi on traite toujours l'eau comme étant en excès dans les calculs biochimiques.

### 6. La concentration équivalente C éq — Celle qui compte les charges

#### 🤔 Pourquoi inventer encore une autre concentration ?

Les concentrations qu'on a vues comptent des masses (C p ) ou des molécules (C, F). Mais en physiologie, beaucoup de raisonnements tournent autour de l'**équilibre électrique** — par exemple, dans le sang, la somme des charges positives doit égaler la somme des charges négatives (sinon le sang ne serait pas électroneutre, ce qui est physiquement impossible).

Or, un ion comme **Ca²⁺** apporte 2 charges par particule, alors qu'un ion **Na⁺** n'en apporte qu'une. Pour comparer les contributions électriques entre ions, on a donc besoin d'une grandeur qui prenne en compte la **valence** (nombre de charges) de chaque ion. C'est ça, la concentration équivalente.

Concentration équivalente
C éq = |Z| × C
C en mol/L · Z = valence (nombre de charges) de l'ion (sans unité). Unité de C éq : **Eq/L** (équivalent par litre), souvent en mEq/L pour les valeurs cliniques.

**🔑 Exemple concret pour fixer les idées**

Tu as une solution contenant **5 mmol/L de Ca²⁺** (la calcémie normale). Quelle est sa concentration équivalente ?

- Valence : Ca²⁺ porte **2 charges** (Z = 2).

- Formule : C éq = |Z| × C = 2 × 5 = **10 mEq/L**.

Lecture intuitive : on a 5 ions Ca²⁺ par mmol… mais chaque ion apporte 2 charges → **10 charges au total par mmol**, donc 10 mEq/L. Le mEq « gonfle » le chiffre du mmol par la valence.

Lecture en français : « combien de charges l'ion apporte-t-il, par litre ? ». Pour les ions classiques :

|

| Ion
| Valence \|Z\|
| Si C = 1 mmol/L, alors C éq vaut…

| Na⁺ | 1 (monovalent) | **1 mEq/L** (1 × 1)

| K⁺ | 1 (monovalent) | 1 mEq/L

| Cl⁻ | 1 (monovalent) | 1 mEq/L

| Ca²⁺ | 2 (divalent) | **2 mEq/L** (2 × 1)

| Mg²⁺ | 2 (divalent) | 2 mEq/L

| Fe³⁺ | 3 (trivalent) | **3 mEq/L** (3 × 1)

| PO₄³⁻ | 3 (trivalent) | 3 mEq/L

À retenir : pour un ion **monovalent**, mmol/L = mEq/L (les deux nombres sont identiques). Pour un divalent, mEq/L = 2 × mmol/L. Pour un trivalent, mEq/L = 3 × mmol/L.

#### 🔑 La règle d'or : l'électroneutralité

Toute solution ionique réelle est **électriquement neutre** — il y a toujours autant de charges positives que de charges négatives. Traduit en concentrations équivalentes :

Règle d'électroneutralité
Σ C éq (cations) = Σ C éq (anions)

C'est cette règle qui permet de lire un **ionogramme plasmatique** en clinique. Quand un médecin reçoit un ionogramme, son premier réflexe est de vérifier que cette règle est respectée — sinon, c'est qu'il manque un ion non mesuré (ce qui peut révéler une acidose, une intoxication, etc.).

**🧪 Mini-exercice — Concentration équivalente d'une solution de CaCl₂Énoncé :** On prépare une solution de CaCl₂ à C = 0,1 mol/L. Calcule les concentrations équivalentes du Ca²⁺ et du Cl⁻, puis vérifie l'électroneutralité.

👁️ Voir la correction

**Correction :Étape 1 — écrire l'équation de dissolution.**

Le CaCl₂ se dissocie totalement dans l'eau :

**CaCl₂ → Ca²⁺ + 2 Cl⁻**

Lecture : 1 molécule de CaCl₂ donne 1 ion Ca²⁺ et 2 ions Cl⁻.

**Étape 2 — déduire les concentrations des ions à partir de C = 0,1 mol/L de CaCl₂.**

- Chaque mole de CaCl₂ → 1 mole de Ca²⁺ → [Ca²⁺] = **1 × 0,1 = 0,1 mol/L**

- Chaque mole de CaCl₂ → 2 moles de Cl⁻ → [Cl⁻] = **2 × 0,1 = 0,2 mol/LÉtape 3 — appliquer la formule C éq = |Z| × C pour chaque ion.**

- Ca²⁺ porte 2 charges (Z = 2) → C éq (Ca²⁺) = 2 × 0,1 = **0,2 Eq/L = 200 mEq/L**

- Cl⁻ porte 1 charge (Z = 1) → C éq (Cl⁻) = 1 × 0,2 = **0,2 Eq/L = 200 mEq/L**

Rappel pour la conversion Eq/L → mEq/L : on multiplie par 1000, comme pour mol/L → mmol/L.

**Étape 4 — vérifier l'électroneutralité (Σ cations = Σ anions).**

- Σ cations = C éq (Ca²⁺) = **0,2 Eq/L**

- Σ anions = C éq (Cl⁻) = **0,2 Eq/L**

- Égalité **respectée ✓Logique intuitive à retenir :** il y a 2 fois plus de Cl⁻ que de Ca²⁺ en nombre… mais chaque Ca²⁺ porte 2 fois plus de charges. Les deux effets se compensent exactement → l'électroneutralité est automatiquement satisfaite pour tout sel dissous.

**⚠️ Piège classique du concours : confondre mmol, mEq et mOsm**

On vient de voir deux unités proches : la **mmol/L** (nombre de molécules par litre) et la **mEq/L** (nombre de charges par litre). Il existe une troisième unité que tu rencontreras dès la section suivante : la **mOsm/L** (« milli-osmolarité »), qui compte le nombre de particules dissoutes par litre — peu importe leur charge. On la verra en détail en §V, mais elle apparaît ici parce que le piège classique du concours, c'est de confondre ces trois unités.

Récapitulatif des trois mesures, sur un même soluté :

- **mmol/L** → nombre de molécules (ou ions individuels) par litre

- **mEq/L** → nombre de charges par litre (= |Z| × mmol/L)

- **mOsm/L** → nombre de particules dissoutes par litre (= somme de toutes les espèces issues de la dissociation)

Application sur CaCl₂ à 0,1 mol/L (donc 100 mmol/L de CaCl₂ initial) :

- **0,1 mmol/L** en CaCl₂ initial

- **200 mEq/L** en charges (les Ca²⁺ apportent 0,2 Eq/L de charges, les Cl⁻ aussi)

- **300 mOsm/L** en particules (Ca²⁺ + 2 Cl⁻ = 3 espèces dissoutes pour chaque CaCl₂ initial → 3 × 100 mmol/L = 300 mOsm/L)

**Toujours vérifier l'unité avant de calculer.** Ce piège est tellement classique en concours blanc qu'il vaut un point quasi-systématiquement. Et on reverra la mOsm/L plus calmement à la section suivante.

### 7. Encadré bonus — Une autre concentration à reconnaître

**🔑 Concentration molale C' (mol/kg)**

C' = n / m solvant (en mol par kg de solvant, et non par L de solution).

**Avantage** : C' est **indépendante de la température** (la masse ne dépend pas de T, contrairement au volume). Pour une solution aqueuse très diluée, C' (mol/kg) ≈ C (mol/L) parce que 1 kg d'eau ≈ 1 L d'eau. Tu peux la rencontrer en QCM dans les questions sur la dépendance T des concentrations — sache la reconnaître.

## V. Osmolarité et sérum physiologique

Voici le concept qui fait toute la différence entre « concentration » de chimiste et « concentration » de physiologiste. Le corps ne se soucie pas tellement du nombre de moles de soluté — il se soucie du nombre de particules en solution . C'est l'**osmolarité**. Cette section te donne la clé pour comprendre toute la physiologie des compartiments, et finit par le décodage complet du sérum physiologique à 0,9 %.

### 1. L'osmolarité — Compter les entités cinétiques

#### 🤔 Le problème — Pourquoi 1 mole de NaCl « compte double » par rapport à 1 mole de glucose ?

Quand tu dissous 1 mole de glucose dans 1 L d'eau, tu obtiens **1 mole de molécules** de glucose en solution. Quand tu dissous 1 mole de NaCl, le sel se dissocie complètement en ions : tu obtiens 1 mole de Na⁺ + 1 mole de Cl⁻, soit **2 moles d'entités séparées** dans la solution. Pour les phénomènes qui dépendent du nombre de particules (osmose, pression osmotique, abaissement cryoscopique…), NaCl « pèse » donc 2 fois plus lourd que le glucose à concentration molaire identique.

**🔑 Définition de l'osmolarité ω**

L'**osmolarité** ω est le nombre de **moles d'entités cinétiques** (particules en solution) par litre de solution. Unité : **Osm/L** (souvent en mOsm/L pour les ordres de grandeur physiologiques).

Formule de l'osmolarité
ω = n × C
où C est la concentration molaire et n le nombre d'entités cinétiques par molécule de soluté (= nombre d'ions résultant de la dissociation totale, ou 1 pour un soluté non dissociant).

**🔑 Exemple concret pour fixer la formule**

Tu prépares une solution de **NaCl à C = 100 mmol/L**. Quelle est son osmolarité ?

- **Dissociation** : NaCl → Na⁺ + Cl⁻. Donc 1 molécule de NaCl donne 2 particules en solution → **n = 2**.

- **Application de la formule** : ω = n × C = 2 × 100 = **200 mOsm/L**.

Lecture intuitive : pour la même concentration molaire (100 mmol/L), le NaCl produit deux fois plus de particules en solution que le glucose, qui ne se dissocie pas (ω_glucose = 1 × 100 = 100 mOsm/L). C'est tout ce que mesure le facteur n.

Donc selon le soluté :

|

| Soluté
| Dissociation
| n (entités cinétiques)

| **Glucose**, urée, créatinine | Pas de dissociation (non électrolyte) | 1

| **NaCl** | Na⁺ + Cl⁻ | 2

| **CaCl₂** | Ca²⁺ + 2 Cl⁻ | 3

| **Na₂SO₄** | 2 Na⁺ + SO₄²⁻ | 3

| **AlCl₃** | Al³⁺ + 3 Cl⁻ | 4

#### 🧰 Méthodologie : le tableau d'avancement de dissolution

Quand l'énoncé te donne un soluté qui se dissocie, la méthode standard pour **ne jamais te tromper** sur ω consiste à dresser un **tableau d'avancement** : tu écris l'équation de dissolution, puis tu remplis ligne par ligne ce qu'il reste à l'état initial (t = 0) et à l'état final (t = fin, dissolution totale).

**🔑 Exemple guidé : CaCl₂ à la concentration initiale C₀**

On va remplir **un seul tableau** qui rassemble deux choses : la dissolution (haut du tableau) et le calcul des charges équivalentes (bas du tableau). Tu en sors d'un coup d'œil **ω** et **C éq **.

Équation de dissolution à connaître : **CaCl₂ → Ca²⁺ + 2 Cl⁻**

|

| État / Calcul
| [CaCl₂]
| [Ca²⁺]
| [Cl⁻]
| Total / Résultat

| **① t = 0** (avant dissolution)
| C₀
| 0
| 0
| —

| **② t = fin** (après dissolution totale)
| 0
| **C₀**
| **2 C₀**
| **ω = ΣC = 3 C₀**

| **③ Valence \|Z\|** de chaque ion
| —
| **2**
| **1**
| —

| **④ C éq = ligne ③ × ligne ②**
| —
| **2 × C₀ = 2 C₀**
| **1 × 2 C₀ = 2 C₀**
| **C éq solution = 2 C₀Comment ce tableau a été construit, ligne par ligne** :

- **Ligne ① (t = 0)** — l'état initial, avant que la dissolution ait lieu. Tout le CaCl₂ est encore intact dans son état solide : [CaCl₂] = C₀, et il n'y a encore aucun ion en solution (zéros à droite).

- **Ligne ② (t = fin)** — l'état final, une fois la dissolution complète. Le CaCl₂ a entièrement disparu (0). À sa place, chaque molécule a libéré **1 Ca²⁺ et 2 Cl⁻**, donc on lit [Ca²⁺] = C₀ et [Cl⁻] = 2 C₀. **L'osmolarité se lit directement en sommant cette ligne** : ω = ΣC = 0 + C₀ + 2 C₀ = **3 C₀**.

- **Ligne ③ (valence)** — une simple donnée à connaître pour chaque ion. Ça ne dépend pas de la concentration : Ca²⁺ porte 2 charges, Cl⁻ en porte 1.

- **Ligne ④ (C éq )** — on multiplie colonne par colonne la valeur de la ligne ② (concentration de l'ion en t = fin) par la valeur de la ligne ③ (valence). Pour Ca²⁺ : **2 × C₀ = 2 C₀**. Pour Cl⁻ : **1 × 2 C₀ = 2 C₀**.

**Vérification de l'électroneutralité** : Σ cations = C éq (Ca²⁺) = 2 C₀, et Σ anions = C éq (Cl⁻) = 2 C₀. Les deux sont égaux ✓ — c'est ce qu'on note **C éq solution = 2 C₀** (la valeur commune côté + et côté −).

**Les deux chiffres à retenir sur CaCl₂ à C₀** :

- **ω = 3 C₀** → l'osmolarité, qui compte les particules en solution.

- **C éq = 2 C₀** → la concentration équivalente de la solution, qui compte les charges apportées (côté cations = côté anions par électroneutralité).

Note : si tu vois passer en QCM « ΣC éq = 4 C₀ » (cations + anions), c'est exactement la somme totale des charges en valeur absolue. Mais en convention clinique, quand on dit simplement « C éq d'une solution », on désigne la valeur commune côté + ou côté − (ici 2 C₀).

#### ⚠️ Et si le soluté ne se dissocie qu'à moitié ? Le coefficient de dissociation α

Le tableau d'avancement qu'on vient de faire suppose une dissociation **totale** du soluté (CaCl₂ donne intégralement Ca²⁺ + 2 Cl⁻ → n = 3 particules en solution). Mais certains solutés ne se dissocient que **partiellement** dans l'eau : les **acides faibles** et les **bases faibles**. Dans ce cas, n n'est plus un nombre entier rond mais une valeur intermédiaire entre 1 (pas dissocié du tout) et 2 (totalement dissocié pour un électrolyte binaire). Comment quantifie-t-on ça ?

🔑 **Le coefficient de dissociation α**

Pour un électrolyte binaire AB qui se dissocie partiellement dans l'eau selon **AB ⇌ A⁺ + B⁻**, on définit le **coefficient de dissociation α** = fraction des molécules AB qui se sont dissociées à l'équilibre , par rapport à la quantité initiale C₀.

- **α = 0** → aucune molécule dissociée (cas du **glucose**, de l'urée : ils restent intacts dans l'eau)

- **α = 1** (= 100 %) → dissociation totale (cas du **NaCl**, HCl : toutes les molécules sont cassées en ions)

- **0 < α < 1** → dissociation partielle (cas typique des **acides faibles** comme l'acide acétique CH₃COOH : par exemple α ≈ 0,013 = 1,3 % à 0,1 mol/L)

Concrètement : si tu pars de C₀ mol/L de AB, à l'équilibre il te reste **C₀·(1−α)** sous forme intacte AB, et tu as **C₀·α** de A⁺ + **C₀·α** de B⁻ en solution.

L'osmolarité de la solution se calcule alors en additionnant toutes les particules présentes (intactes + dissociées) :

Osmolarité avec dissociation partielle (électrolyte binaire)
ω = C₀(1−α) + C₀α + C₀α = **(1 + α) × C₀**
avec α = coefficient de dissociation (entre 0 et 1) et C₀ = concentration initiale du soluté avant dissociation

🔑 **Le coefficient d'ionisation i — la version « tout-en-un »**

On définit aussi un **coefficient d'ionisation** noté **i**, qui te dit en pratique **combien de particules tu as réellement en solution par molécule de soluté de départ**. Pour un électrolyte binaire AB :

**i = 1 + α** ⟹ **ω = i × C₀Pourquoi 1 + α ?** Imagine 1 molécule de AB au départ. Si elle ne se dissocie pas, elle reste à 1 particule. Si elle se dissocie totalement, elle devient 2 particules (A⁺ + B⁻). Avec une dissociation partielle α :

- une fraction (1−α) reste sous forme AB intacte → ça compte pour 1 particule chacune

- une fraction α s'est dissociée → ça compte pour 2 particules (A⁺ + B⁻) chacune

- moyenne pondérée : i = (1−α)·1 + α·2 = 1 − α + 2α = **1 + αi remplace le « n » qu'on utilisait au début**. Le « n » était simpliste : il valait toujours un entier (1, 2, 3…) et supposait implicitement une dissociation totale. Le « i » est plus subtil : il peut prendre n'importe quelle valeur entre 1 et 2, selon le pourcentage de dissociation.

|

| Soluté
| α
| i = 1 + α
| n (cas total)

| Glucose (non électrolyte) | 0 | **1** | 1 ✓ (i = n)

| Acide acétique à 0,1 mol/L | 0,013 | **1,013** | (non défini, dissociation partielle)

| Acide faible « moitié dissocié » | 0,5 | **1,5** | (non défini)

| NaCl (acide fort) | 1 | **2** | 2 ✓ (i = n)

👉 Aux **extrêmes** (α = 0 ou α = 1), i et n donnent le même résultat — donc la formule ω = n·C₀ qu'on a utilisée plus haut reste valable. Mais **entre les deux**, seul i te donne la vraie osmolarité. **La formule ω = i·C₀ est la version générale qui marche dans 100 % des cas.**

🧠 **3 exemples concrets pour fixer α**

- **Glucose à 100 mmol/L** : non électrolyte, α = 0. → ω = (1+0) × 100 = **100 mOsm/L**. La solution contient 100 mmol/L de molécules de glucose intactes.

- **NaCl à 100 mmol/L** : acide fort, dissociation totale, α = 1. → ω = (1+1) × 100 = **200 mOsm/L**. La solution contient 100 mmol/L de Na⁺ + 100 mmol/L de Cl⁻ = 200 mmol/L de particules.

- **Acide acétique à 100 mmol/L** : acide faible, α ≈ 0,013 (1,3 %). → ω = (1 + 0,013) × 100 = **≈ 101,3 mOsm/L**. Quasiment toutes les molécules restent sous forme AH non dissociée. L'osmolarité est très proche de C₀ (= comme un non électrolyte).

💡 **À retenir sur α**

Retiens que α est la fraction dissociée , et que la formule ω = (1+α)·C₀ marche pour TOUT électrolyte binaire — fort ou faible.

Cette méthode marche pour **n'importe quel soluté ionique**. Quelques exemples standards :

|

| Soluté
| Équation
| ω (en fonction de C₀)

| **NaCl** | NaCl → Na⁺ + Cl⁻ | ω = C₀ + C₀ = **2 C₀**

| **CaCl₂** | CaCl₂ → Ca²⁺ + 2 Cl⁻ | ω = C₀ + 2 C₀ = **3 C₀**

| **Na₂CO₃** | Na₂CO₃ → 2 Na⁺ + CO₃²⁻ | ω = 2 C₀ + C₀ = **3 C₀**

| **Na₃PO₄** | Na₃PO₄ → 3 Na⁺ + PO₄³⁻ | ω = 3 C₀ + C₀ = **4 C₀**

| **AlCl₃** | AlCl₃ → Al³⁺ + 3 Cl⁻ | ω = C₀ + 3 C₀ = **4 C₀⚠️ Piège classique à éviter : confondre osmolarité et concentration équivalente**

L'**osmolarité ω = ΣC** compte le nombre de particules (sans regarder leur charge). La **concentration équivalente C éq = Σ |Z| × C** compte le nombre de charges . Sur CaCl₂ par exemple :

- ω = C₀ + 2 C₀ = **3 C₀** (1 Ca²⁺ + 2 Cl⁻ = 3 particules)

- C éq = 2 × C₀ + 1 × 2 C₀ = **4 C₀** (1 Ca²⁺ apporte 2 charges, 2 Cl⁻ apportent 2 charges)

C'est ce piège qui tombe en concours blanc : si l'énoncé te dit « C éq = 50 mEq/L pour une solution de CaCl₂ », alors C₀ = C éq / 4 = 12,5 mmol/L (et non C éq / 3, qui serait le calcul si tu confondais avec ω). **Lis bien l'unité : mEq/L = équivalent, mOsm/L = osmolarité, mmol/L = molaire — ce sont trois grandeurs différentes.🧪 Mini-exercice — Osmolarité d'un mélangeÉnoncé :** On prépare une solution contenant 0,1 mol/L de NaCl, 0,05 mol/L de CaCl₂ et 0,2 mol/L de glucose. Quelle est l'osmolarité totale ?

👁️ Voir la correction

**Correction :**

L'osmolarité totale est la somme des contributions :

- NaCl (n=2) : ω₁ = 2 × 0,1 = 0,2 Osm/L

- CaCl₂ (n=3) : ω₂ = 3 × 0,05 = 0,15 Osm/L

- Glucose (n=1) : ω₃ = 1 × 0,2 = 0,2 Osm/L

- **Total : ω = 0,2 + 0,15 + 0,2 = 0,55 Osm/L = 550 mOsm/L**

Cette solution est **hyperosmolaire** par rapport au plasma (qui est à ~300 mOsm/L) : elle « tirerait » de l'eau hors des cellules par osmose si on la perfusait directement.

### 2. Osmolarité vs osmolalité — La nuance à connaître

Deux termes presque identiques : l'**osmolarité** compte les osmoles par litre de solution (Osm/L), l'**osmolalité** les compte par kg de solvant (Osm/kg). Pour les solutions aqueuses diluées (ce qui couvre la quasi-totalité des liquides biologiques), 1 kg d'eau ≈ 1 L d'eau → **les deux valeurs sont quasi identiques**. En clinique, on les utilise indifféremment.

### 3. L'osmolarité plasmatique normale ≈ 300 mOsm/L

L'osmolarité du plasma sanguin est strictement régulée par les reins, dans une fourchette très étroite :

Osmolarité plasmatique physiologique
ω plasma ≈ 285 à 310 mOsm/L (≈ **300 mOsm/L** à retenir)

La quasi-totalité de cette valeur vient du **sodium et de ses anions associés** (Na⁺, Cl⁻, HCO₃⁻ ≈ 280 mOsm/L). Le glucose et l'urée n'ajoutent que quelques mOsm/L chacun.

Cette valeur est mesurée systématiquement en réa. Une **hyperosmolarité** sévère (coma du diabète, déshydratation) ou une **hyposmolarité** (intoxication à l'eau) peut être létale — les cellules cérébrales se rétractent au-delà de 350 mOsm/L, ou gonflent (œdème cérébral) sous 250 mOsm/L. D'où l'ajustement millimétrique des perfusions à l'hôpital.

### 4. Décodage du sérum physiologique 0,9 % — Le calcul guidé qui boucle le chapitre

#### 🤔 Le problème — Pourquoi pile 0,9 % et pas 1 % ?

Si tu ouvres une poche de perfusion en service, tu liras presque toujours « **NaCl 0,9 %** » ou « sérum physiologique ». Pourquoi ce chiffre étrange et pas un nombre rond ? La réponse tient en un calcul d'osmolarité qui synthétise tout ce qu'on a vu dans ce chapitre.

**🔑 Calcul pas à pas du sérum physiologique**

- **Donnée :** NaCl 0,9 % = 0,9 g de NaCl pour 100 mL = 9 g pour 1 L → C p = 9 g/L

- **Conversion en molaire :** M(NaCl) = 58,5 g/mol → C = C p /M = 9 / 58,5 ≈ **0,154 mol/L** (≈ 154 mmol/L)

- **Osmolarité :** NaCl se dissocie en 2 ions, donc n = 2 → ω = n × C = 2 × 0,154 ≈ **0,308 Osm/L = 308 mOsm/L**

- **Comparaison avec le plasma :** ω plasma ≈ 300 mOsm/L → le sérum physiologique est **isotonique au plasma** (≈ même osmolarité)

**Conclusion :** on choisit 0,9 % précisément pour que la solution soit **isotonique**. Avec 1 %, on serait à ~340 mOsm/L (légèrement hyperosmolaire). Avec 0,5 %, on serait à ~170 mOsm/L (hypotonique → risque d'hémolyse). Le choix de 0,9 % n'est pas arbitraire — c'est le résultat d'un calcul d'équilibre osmotique.

[FIGURE physique_ch1_fig06_serum_physio_decode.png]

Décodage du sérum physiologique 0,9 % : 4 étapes de calcul pour comprendre pourquoi 0,9 = isotonique au plasma.

**🧠 Mnémo Medeos — « 9 g/L = 154 mmol/L = 308 mOsm/L »**

Trois chiffres pour le sérum physiologique, à graver pour la vie :

- **9 g/L** : la concentration pondérale (l'étiquette de la poche)

- **154 mmol/L** : la concentration molaire (très proche de la natrémie normale 140 mmol/L)

- **308 mOsm/L** : l'osmolarité (isotonique au plasma)

Ces 3 valeurs te suivront toute ta carrière médicale. Internalise-les maintenant — tu ne perdras plus jamais de temps à les recalculer.

## 🎯 Conclusion — Ce que tu emportes pour toute la suite

Tu viens de poser les **fondations invisibles** sur lesquelles tout le programme physique va s'appuyer. Cinq blocs à graver en mémoire long terme :

**1. Le réflexe calcul-sans-calculette (section I).** Décomposer plutôt que poser, sortir les puissances de 10, vérifier les unités AVANT tout calcul, connaître log 2, log 3, log 5 par cœur. Ce réflexe va te servir littéralement à chaque QCM de physique, chimie, biophysique, biostat — soit plusieurs centaines de QCM dans ton année. C'est l'investissement le plus rentable de tout ce chapitre.

**2. L'eau, molécule pas comme les autres (section II).** Sa structure dipolaire (µ = 1,84 D) explique tout : sa constante diélectrique élevée (ε r = 80) qui dissout les ions, ses ponts hydrogène qui en font un excellent régulateur thermique, son pouvoir hydratant qui maintient les ions en solution. Cette molécule est ce qui rend la vie possible — et la base physique de toute la biologie cellulaire que tu verras en P1.

**3. La mole (section III) et les 3 conversions qui en découlent : n = m/M, N = n×𝒩, et plus tard n = V/V m pour les gaz.** Et surtout, retiens à vie : **1 L d'eau = 55,56 mol**. Cette valeur va t'aider à comprendre l'osmolarité, le pH, les équilibres biochimiques, et te suivra tout au long de tes études.

**4. Les concentrations (section IV) sous quatre formes principales.** La **pondérale C p ** (g/L) que tu lis sur les ordonnances, la **molaire C** (mol/L) qui compte les molécules — la grandeur reine en chimie — la **fraction molaire F** (proportion) qui te fait visualiser combien le plasma est « surtout de l'eau », et l'**équivalente C éq = \|Z\| × C** (Eq/L) qui compte les charges — incontournable pour la règle d'électroneutralité et la lecture d'un ionogramme. Tu manipuleras ces grandeurs tous les jours en clinique : glycémie, natrémie, posologies, ionogramme. Et tu sais maintenant ne plus confondre **mmol ≠ mEq ≠ mOsm** — un piège qui vaut un point quasi-systématique en concours.

**5. L'osmolarité (section V), la grandeur reine de la physiologie des compartiments.** Compter les entités cinétiques , pas les molécules. Plasma à 300 mOsm/L, sérum physiologique à 308 mOsm/L (isotonique) — tu sais maintenant pourquoi 0,9 % et pas un nombre rond.

×

medeos-sante.fr