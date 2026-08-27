Chapitre 8 : Entropie, enthalpie libre de Gibbs et équilibres - MEDEOS — Partie 2

Chapitre 8 — Partie 2

# Entropie, enthalpie libre de Gibbs et équilibres

Désordre, spontanéité et constante d'équilibre : savoir prédire le sens d'une réaction

## 🎯 Partie 2 — Équilibre chimique et constante Keq

Dans la **Partie 1**, tu as découvert l'**entropie S**, la grandeur qui mesure le désordre d'un système : plus les particules sont libres de bouger, plus S est grande. Tu as aussi vu les deux grands principes qui en découlent — l'idée que le désordre de l'univers ne fait qu'augmenter, et celle qu'un cristal parfait au zéro absolu a une entropie nulle.

Surtout, tu as appris à combiner l'énergie et le désordre dans une seule grandeur : l'**enthalpie libre G = H − TS**. C'est elle qui décide si une réaction peut se faire toute seule : si **ΔG < 0**, la réaction est spontanée ; si **ΔG > 0**, elle ne se fait pas dans ce sens.

Dans cette **Partie 2**, on passe à la suite logique : en réalité, la plupart des réactions ne vont pas « jusqu'au bout ». Elles s'arrêtent à un **équilibre** où réactifs et produits coexistent. Tu vas apprendre à décrire cet état avec la **constante d'équilibre Keq**, à l'écrire correctement, à lire ce que sa valeur t'apprend sur la réaction, et à la relier à ΔG° vue en Partie 1.

## IV. Équilibre chimique et constante d'équilibre Keq

Avec ΔG, tu sais prédire si une réaction est spontanée. Mais en pratique, la plupart des réactions ne vont pas « jusqu'au bout » : elles s'arrêtent à un point d'**équilibre** où réactifs et produits coexistent. La constante d'équilibre Keq quantifie cet équilibre — et elle est directement reliée à ΔG° par la formule de Gibbs.

### 1. Équilibre thermodynamique vs équilibre chimique

Il ne faut pas confondre :

- **Équilibre thermodynamique** : le système n'échange plus rien avec l'extérieur. La température et la pression sont uniformes partout, plus rien ne bouge.

- **Équilibre chimique** : c'est un état **dynamique** où les deux réactions opposées (sens 1 et sens 2) se font **à la même vitesse**. Les concentrations ne changent plus à l'œil nu, mais les réactions continuent à l'échelle des molécules.

💡 **Astuce** — Un équilibre chimique est un état **stationnaire**, pas un état d'équilibre thermodynamique. Les réactions ne s'arrêtent jamais, elles se compensent simplement.

### 2. L'activité d'un constituant

Imagine que tu veux écrire la constante d'équilibre de cette réaction :

**CH₃COOH(aq) + H₂O(l) ⇌ CH₃COO⁻(aq) + H₃O⁺(aq)**

Tu dois "mesurer" chaque espèce — mais comment ? Avec une concentration ? Une pression ? Rien du tout ? C'est ça, **l'activité** : la bonne grandeur à utiliser selon le type d'espèce. Voici la règle en 4 cas :

|

| Type d'espèce
| Activité utilisée
| Exemple concret

| **Soluté en solution**
| = sa concentration [X] en mol/L
| Pour H⁺ dans l'eau : activité = [H⁺] = 0,01 mol/L

| **Gaz**
| = sa pression partielle P X en bar
| Pour N₂ à 2 bar : activité = 2

| **Solide pur** (CaCO₃, Fe, C...)
| = **1** → n'apparaît PAS dans K eq
| CaCO₃(s) dans une décomposition → on l'ignore dans la formule

| **Eau (solvant)**
| = **1** → n'apparaît PAS dans K eq
| CH₃COOH ⇌ CH₃COO⁻ + H⁺ → l'eau n'est pas dans K eq

💡 Les cases vertes sont les deux cas les plus piégeux : **solide et eau = activité 1, donc absents de la formule.La règle pour construire K eq :Numérateur** = activités des **produits** (ce qui est à droite de la flèche), élevées à leur coefficient stœchiométrique.

**Dénominateur** = activités des **réactifs** (ce qui est à gauche), élevées à leur coefficient stœchiométrique.

On remplace chaque activité selon les règles du tableau ci-dessus (concentration, pression, ou 1).

→ **Application à l'exemple :** dans CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺, les espèces marquées **(aq)** sont des **solutés** (= dissous dans l'eau) → on utilise leur concentration. H₂O est le **solvant** (= ce dans quoi tout est dissous) → activité 1 → **elle disparaît de la formule**.

Résultat : **K eq = [CH₃COO⁻] × [H₃O⁺] / [CH₃COOH]**

📎 **H₃O⁺ = H⁺** : les deux notations sont équivalentes. On peut aussi écrire la réaction sous forme simplifiée CH₃COOH ⇌ CH₃COO⁻ + H⁺ (H₂O sous-entendue) → K eq = [CH₃COO⁻][H⁺] / [CH₃COOH], même résultat.

📎 Pour les réactions acide-base, on écrit souvent **K a ** au lieu de K eq ( a = acide). C'est la même formule, juste un nom spécifique qu'on verra plus tard.

### 3. Expression de la constante d'équilibre K eq

**Règle générale :** K eq = (activités des **produits** élevées à leurs coefficients) divisées par (activités des **réactifs** élevés à leurs coefficients).

Produits **au numérateur**, réactifs **au dénominateur**, exposants = coefficients stœchiométriques.

✏️ **Exemple 1 — Réaction en phase gazeuseN₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)**

Tous des gaz → on utilise les pressions partielles :

💡 Voir l'expression de K P

**K P = P(NH₃)² / [ P(N₂) × P(H₂)³ ]**

- NH₃ est le **produit** → numérateur, exposant = **2** — c'est-à-dire P(NH₃)**²** (au carré, pas × 2 !). Le coefficient **2** dans la réaction devient un **exposant** dans K.

- N₂ est un **réactif** → dénominateur, exposant = **1**

- H₂ est un **réactif** → dénominateur, exposant = **3**

✏️ **Exemple 2 — Dissolution d'un solide en solution (piège mixte ★★)CaCO₃(s) + 2 H⁺(aq) ⇌ Ca²⁺(aq) + H₂O(l) + CO₂(g)**

On a 3 types d'espèces différentes dans la même réaction : un solide, des solutés, de l'eau et un gaz. C'est exactement le genre de réaction qui tombe au concours pour tester si tu sais appliquer les règles d'activité.

💡 Voir l'expression de K eq

**K eq = [Ca²⁺] × P(CO₂) / [H⁺]²**

- **CaCO₃(s)** → solide pur → activité = **1 → disparaît**

- **H⁺(aq)** → soluté → activité = **[H⁺]**, coefficient = 2 → exposant ² au dénominateur

- **Ca²⁺(aq)** → soluté → activité = **[Ca²⁺]** au numérateur

- **H₂O(l)** → solvant → activité = **1 → disparaît**

- **CO₂(g)** → gaz → activité = **P(CO₂)** au numérateur

→ Il reste uniquement les 3 espèces dont l'activité ≠ 1.

✏️ **Exemple 3 — Réaction avec un solide (piège fréquent)CaCO₃(s) ⇌ CaO(s) + CO₂(g)**

💡 Voir l'expression de K

**K = P(CO₂)**

- CaCO₃ et CaO sont des **solides purs** → activité = 1 → **ils disparaissent**

- CO₂ est un **gaz** → activité = P(CO₂)

- Il ne reste que CO₂ dans l'expression !

🔑 **Notion clé — La relation fondamentale ΔG° = −RT ln(Keq) ★★★**

Rappel rapide : **ΔG°** (énergie libre standard) mesure si une réaction est spontanée ou non — ΔG° < 0 = spontanée, ΔG° > 0 = non spontanée. Mais ΔG° ne dit pas jusqu'où la réaction va. C'est là qu'intervient **K eq ** : il mesure la position de l'équilibre, c'est-à-dire le rapport produits/réactifs quand tout s'est stabilisé.

La relation de Gibbs fait le pont entre les deux : **plus une réaction est spontanée (ΔG° négatif), plus elle avance loin avant de s'arrêter (K eq grand)**. Logique !

Relation de Gibbs
ΔG° = −RT × ln(K eq )

Avec : **R = 8,314 J·mol⁻¹·K⁻¹** (constante des gaz parfaits) | **T** en Kelvin | **ln** = logarithme naturel

On peut aussi l'écrire dans l'autre sens pour calculer K eq à partir de ΔG° :

**K eq = e −ΔG°/RT Ce que ça signifie intuitivement :**

- Plus ΔG° est **très négatif** → K eq est **très grand** (≫ 1) → la réaction va presque jusqu'au bout dans le sens direct

- Plus ΔG° est **très positif** → K eq est **très petit** (≪ 1) → la réaction va presque jusqu'au bout dans le sens inverse

- ΔG° = 0 → K eq = 1 → réactifs et produits coexistent à parts égales

**Exemple numérique simple — à la main :**

Une réaction a ΔG° = **−6 000 J/mol** à 300 K. Quel est son K eq ?

**Astuce de tête :** R ≈ 8, T = 300 → **RT ≈ 2 400** J/mol.

**Étape 1 :** calcule l'exposant → −ΔG° / RT = 6 000 / 2 400 = **2,5Étape 2 :** K eq = e 2,5 ≈ **12** (car e² ≈ 7,4 et e 0,5 ≈ 1,65 → 7,4 × 1,65 ≈ 12)

**Conclusion :** K eq ≈ 12 > 1 → réaction favorisée dans le sens direct ✅

(Avec R = 8,314 et T = 298 K, on trouverait −ΔG°/RT = 2,42 → K eq ≈ 11,2 — très proche.)

📎 **Valeurs utiles à mémoriser :** ln(10) ≈ 2,30 | ln(100) ≈ 4,60 | ln(1000) ≈ 6,90. Donc si −ΔG°/RT = 4,60 → K eq ≈ 100, etc. Et **RT ≈ 2 400 J/mol à 300 K** (ou ≈ 2 500 à T ambiante) pour calcul rapide.

✏️ **Mini-exercice — Keq et ΔG°**

❓ L'hydrolyse de l'ATP a ΔG° = −30 kJ/mol à 300 K.

1) Calcule la constante d'équilibre Keq de cette réaction (utilise R ≈ 8).

2) La réaction est-elle quasi totale ? Que signifie ce résultat biologiquement ?

💡 Voir la correction

1) RT ≈ 8 × 300 = **2 400** J/mol.

ln(Keq) = −ΔG° / RT = 30 000 / 2 400 = 30 / 2,4 = **12,5**.

Keq = e 12,5 . On sait que ln(10) ≈ 2,3, donc 12,5 / 2,3 ≈ 5,4 → Keq ≈ **10 5,4 ≈ 2,5 × 10⁵**.

(Avec R = 8,314 et T = 298 K → Keq ≈ 2,2 × 10⁵ — très proche.)

2) Keq ≈ 2,5 × 10⁵ > 10⁴ → réaction **quasi totale** dans le sens de l'hydrolyse. Biologiquement, cela signifie que l'ATP libère très efficacement son énergie en se décomposant en ADP + Pi, ce qui en fait une excellente « monnaie énergétique ».

### 4. Interprétation de la valeur de Keq

|

| Valeur de Keq
| Interprétation

| **Keq > 10⁴**
| Réaction **quasi totale** dans le sens direct (sens 1)

| **Keq < 10⁻⁴**
| Réaction **quasi totale** dans le sens inverse (sens 2)

| **10⁻⁴ < Keq < 10⁴**
| Équilibre véritable — les deux sens coexistent significativement

### 5. Propriétés de Keq

🔑 **Règles de combinaison des constantes d'équilibre ★★★**

Ces règles permettent de calculer K d'une réaction inconnue à partir de réactions connues — exactement comme la loi de Hess pour ΔG°.

**Règle 1 — Inverser une réaction :** K_inverse = **1 / K_direct**

Pourquoi ? Si A ⇌ B a K = 100 (très favorisée vers B), alors B ⇌ A a K = 1/100 = 0,01 (très peu favorisée). Logique : l'équilibre "du sens inverse" est le symétrique.

Exemple : A ⇌ 2B avec K = 4 → inversée : 2B ⇌ A a K = **1/4 = 0,25Règle 2 — Additionner deux réactions :** K_total = **K₁ × K₂**

Pourquoi ? Quand on enchaîne deux équilibres (R1 puis R2), les probabilités se multiplient — comme deux verrous à ouvrir en série.

Exemple : R1 : A ⇌ B avec K₁ = 3 | R2 : B ⇌ C avec K₂ = 2 → R1+R2 : A ⇌ C avec K = 3 × 2 = **6Règle 3 — Multiplier une réaction par un facteur α :** K_nouvelle = **K α **

Pourquoi ? Rappelle-toi : dans K, les coefficients stœchiométriques deviennent des **exposants**. Si on multiplie tous les coefficients par 2, tous les exposants de K doublent — ce qui revient à élever K au carré.

Exemple détaillé :

Réaction de départ : A ⇌ 2B → K = [B]² / [A] = **4**

On multiplie par 2 : 2A ⇌ 4B → K_nouvelle = [B]**⁴** / [A]**²**

Or [B]⁴ / [A]² = ([B]² / [A])² = K² = 4² = **16**

→ On voit bien que doubler les coefficients = mettre K au carré. Si on avait multiplié par 3, K serait élevé au cube (K³).

⚠️ **Les pièges classiques :** on **multiplie** les K (jamais additionner !) | on **élève K à la puissance α** (jamais K × α).

✏️ **QCM type concours — Combinaison de constantes d'équilibre**

❓ On donne les deux réactions suivantes à 25 °C :

(R1) A ⇌ 2B K₁ = 4

(R2) B ⇌ C K₂ = 2

On cherche la constante d'équilibre de la réaction : (R3) 2C ⇌ A

A. K₃ = K₁ × K₂² = 16

B. K₃ = 1 / (K₁ × K₂²) = 1/16 = 0,0625

C. K₃ = K₁ / K₂ = 2

D. K₃ = 1 / 16 = 0,0625

E. K₃ = K₁ + K₂ = 6

💡 Voir la correction détaillée

**Étape 1 : Exprimer R3 à partir de R1 et R2**

R3 : 2C → A

On part de R2 inversée : C → B → K = 1/K₂ = 1/2

On multiplie par 2 : 2C → 2B → K = (1/K₂)² = (1/2)² = 1/4

On ajoute R1 inversée : 2B → A → K = 1/K₁ = 1/4

Bilan : 2C → 2B → A → K₃ = (1/K₂)² × (1/K₁) = (1/4) × (1/4) = **1/16 = 0,0625Vérification** : R3 = (−2) × R2 + (−1) × R1 → K₃ = K₂^(−2) × K₁^(−1) = (1/4) × (1/4) = 1/16 ✅

**A. FAUX** — C'est K₁ × K₂² = 4 × 4 = 16. Ça correspondrait à A → 2C (sens direct, pas inversé).

**B. VRAI ✅** — K₃ = 1/(K₁ × K₂²) = 1/16.

**C. FAUX** — K₁/K₂ n'a pas de sens ici.

**D. VRAI ✅** — Même résultat, écrit différemment.

**E. FAUX** — On ne peut JAMAIS additionner des constantes d'équilibre.

→ Réponses : **B, D**.

### 6. Exemples de constantes d'équilibre en première année

#### a) Constante d'acidité K a

🔑 **Idée centrale avant de voir la formule**

Commençons par le début : **pourquoi un H⁺ rend-il une solution acide ?**

Un proton H⁺ est un **noyau d'hydrogène sans électron** — une toute petite charge positive très réactive. Dans l'eau, il s'accroche immédiatement à une molécule H₂O pour former **H₃O⁺** (l'ion oxonium). C'est cet ion H₃O⁺ qui est responsable du caractère acide d'une solution : plus il y en a, plus le pH est bas, plus c'est acide.

Un **acide**, c'est donc simplement une molécule capable de **libérer un H⁺** (= "donner" un proton à l'eau). Mais toutes ne le font pas avec la même facilité :

- **Acide fort** (ex : HCl) : se dissocie totalement dans l'eau → dans un verre d'eau, il n'y a plus de HCl, seulement des ions Cl⁻ et H₃O⁺. Pas d'équilibre, c'est une réaction à sens unique.

- **Acide faible** (ex : CH₃COOH, l'acide acétique du vinaigre) : se dissocie partiellement . Dans le verre, il reste du CH₃COOH non dissocié, en équilibre avec les ions CH₃COO⁻ et H₃O⁺.

→ Le K a mesure précisément **à quel point un acide faible se dissocie**.

🔑 **Mais pourquoi un acide est-il fort ou faible ? — La stabilité de A⁻**

⚠️ **Faux-ami fréquent :** ce n'est **pas** le nombre d'hydrogènes dans la molécule qui détermine l'acidité. Une molécule avec 10 hydrogènes peut être un acide très faible, et une avec un seul H peut être un acide très fort. Ce qui compte, c'est **la facilité avec laquelle UN H⁺ part**.

Et cette facilité dépend d'une seule question : **la base conjuguée A⁻ qui reste après le départ de H⁺ est-elle stable ?**

- Si **A⁻ est stable** (la charge négative est bien « absorbée »), alors H⁺ part facilement → **acide fort** (petit pK a ).

- Si **A⁻ est instable** (la charge négative est concentrée, mal répartie), alors H⁺ a du mal à partir → **acide faible** (grand pK a ).

**Qu'est-ce qui rend A⁻ stable ?** Quatre facteurs, du plus intuitif au plus subtil :

- **Électronégativité** de l'atome qui porte la charge : plus il est électronégatif, mieux il « supporte » d'avoir un électron en plus. Exemple : O⁻ est plus stable que N⁻ → un O−H est plus acide qu'un N−H (l'oxygène est plus électronégatif que l'azote).

- **Taille de l'atome** : plus il est gros, plus la charge négative se répartit sur un grand volume → plus A⁻ est stable. Exemple : S⁻ est plus stable que O⁻ (le soufre est plus gros) → un S−H est plus acide qu'un O−H, malgré le fait que l'oxygène est plus électronégatif ! C'est pour ça que HI (pK a ≈ −10) est bien plus fort que HF (pK a ≈ 3) : I⁻ est énorme, la charge se dilue.

- **Effet inductif attracteur (−I)** : des atomes électronégatifs proches « tirent » sur les électrons et aident à stabiliser A⁻. Exemple : CH₂Cl−COOH (pK a ≈ 2,9) est plus acide que CH₃−COOH (pK a ≈ 4,8) → le Cl attire les électrons et stabilise COO⁻.

- **Résonance (délocalisation)** : si les électrons de A⁻ peuvent se délocaliser sur plusieurs atomes, la charge est diluée → A⁻ très stable. Exemple : CH₃COO⁻ a ses électrons délocalisés sur les 2 oxygènes du carboxylate → c'est un acide faible mais bien plus fort qu'un alcool (dont l'alcoolate RO⁻ concentre la charge sur un seul O).

**Résumé en une phrase :** un acide est d'autant plus fort que sa base conjuguée A⁻ est **stable** — et A⁻ est stable quand la charge négative est **répartie** plutôt que concentrée.

Pour un acide faible AH en solution aqueuse, la réaction d'équilibre est :

**AH + H₂O ⇌ A⁻ + H₃O⁺**

On applique la règle de construction de K eq vue en §2 (produits au numérateur, réactifs au dénominateur, eau et solides exclus) :

Constante d'acidité
K a = [A⁻][H₃O⁺] / [AH] pK a = −log(K a )

Note : [H₂O] n'apparaît pas (solvant pur, activité = 1 — cf. §2). [H₃O⁺] est la même chose que [H⁺], on l'écrit indifféremment.

**Comment lire K a ?** Oui, Ka **est un Keq** — exactement comme ceux de la section précédente. La même règle s'applique :

- **K a > 1** → les produits (A⁻ et H₃O⁺) sont favorisés → l'acide se dissocie majoritairement → acide fort. Exemple : HCl, Ka ≫ 1.

- **K a ≈ 1** → réactifs et produits en quantités comparables → dissociation à moitié.

- **K a ≪ 1** → les réactifs (AH) sont favorisés → l'acide reste presque entier, très peu dissocié → acide faible. C'est le cas de la grande majorité des acides biologiques.

En pratique, les acides faibles ont des Ka entre 10⁻² et 10⁻¹⁴ — des nombres minuscules difficiles à comparer à la lecture. Pour donner un sens concret :

- K a = **10⁻²** (pKa = 2) : pour chaque molécule d'acide non dissociée, il y a ~10 fois plus d'ions → dissociation importante → acide **relativement fort**.

- K a = **10⁻¹⁰** (pKa = 10) : pour 10 milliards de molécules d'acide, à peine 1 ion → quasi pas de dissociation → acide **très faible**.

🔑 **pK a = pH revisité** — même formule (−log), même sens : petit → fort, grand → faible.

Différence clé : le pH décrit une solution (ça change selon le contexte) ; le pK a est une propriété fixe de la molécule , comme sa masse molaire.

**L'échelle des pK a — où se situe chaque acide ?**

Voici comment lire le pK a d'un acide inconnu et savoir immédiatement à quel type il appartient :

|

| Zone pK a
| K a correspondant
| Exemples
| Caractère
| Au concours…

| **pK a < 0**
(ex : −7, −1)
| K a > 1
(ex : 10⁷, 10)
| HCl (pKa ≈ −7)
HNO₃ (pKa ≈ −1)
H₂SO₄ (pKa₁ ≈ −3)
| Acide **fort** — dissociation totale , pas d'équilibre → pas de Ka utilisable en pratique
| On ne te donnera jamais un pKa négatif dans un exercice. Ces acides se traitent différemment (dissociation = 100 %).

| **pK a entre 0 et ~2**
(ex : 0, 1, 2)
| K a entre 1 et 10⁻²
(ex : 1 ; 0,1 ; 0,01)
| H₃PO₄ (pKa₁ = 2,1)
Acide oxalique (pKa₁ = 1,3)
| Acide **fort à semi-fort** — dissociation partielle mais importante (>50 %)
| Rare au concours. Si tu vois pKa = 2, traite-le comme un acide faible mais sache qu'il est assez fort.

| **pK a entre 2 et 14**
(ex : 4,8 ; 6,4 ; 9,2)
| K a entre 10⁻² et 10⁻¹⁴
(ex : 10⁻⁴·⁸ ; 10⁻⁶·⁴ ; 10⁻⁹·²)
| CH₃COOH (pKa = 4,8)
H₂CO₃ (pKa = 6,4)
NH₄⁺ (pKa = 9,2)
| Acide **faible** — dissociation partielle, équilibre réel → c'est ici qu'on utilise K a
| **C'est toujours dans cette zone que se situent les exercices de première année.** Si on te donne un pKa, il sera entre 2 et 14.

Comment passer de pK a à K a rapidement ? K a = 10 −pKa . Exemples :

- pK a = **5** → K a = 10 −5 = 0,00001

- pK a = **7** → K a = 10 −7 = 0,0000001

- pK a = **10** → K a = 10 −10 = 0,0000000001

→ Plus le pK a monte, plus K a est minuscule, plus l'acide est faible. Simple.

**Exemples concrets à retenir :**

|

| Acide
| Réaction
| K a
| pK a
| Caractère

| **HCl** (acide chlorhydrique)
| HCl → Cl⁻ + H⁺
| ≫ 1 (→ ∞)
| ≪ 0 (−7 environ)
| Acide **fort** — dissociation totale, pas de K a défini

| **CH₃COOH** (vinaigre)
| CH₃COOH ⇌ CH₃COO⁻ + H⁺
| 1,8 × 10⁻⁵
| **4,8**
| Acide faible — seulement ~1 % dissocié à 0,1 mol/L

| **H₂CO₃** (acide carbonique — CO₂ dissous)
| H₂CO₃ ⇌ HCO₃⁻ + H⁺
| 4,3 × 10⁻⁷
| **6,4**
| Acide très faible — important en physiologie (sang)

| **NH₄⁺** (ion ammonium)
| NH₄⁺ ⇌ NH₃ + H⁺
| 5,6 × 10⁻¹⁰
| **9,2**
| Acide très faible — base conjuguée : NH₃ (ammoniaque)

✏️ **QCM type concours — K a et pK a **

❓ L'acide acétique CH₃COOH a un pK a = 4,8. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?

A. K a = 10⁻⁴·⁸ ≈ 1,6 × 10⁻⁵

B. Dans une solution de CH₃COOH pur dissous dans l'eau (sans rien d'autre), il y a autant d'ions CH₃COO⁻ que d'ions H₃O⁺ dans le verre

C. Plus le pK a d'un acide est élevé, plus cet acide est fort

D. L'acide acétique se dissocie totalement dans l'eau

E. Si on mélange CH₃COOH (pK a = 4,8) et HCN (pK a = 9,2), l'acide acétique est le plus fort des deux

💡 Voir la correction détaillée

**A. VRAI ✅** — pK a = −log(K a ) → K a = 10 −pKa = 10 −4,8 ≈ 1,6 × 10⁻⁵. C'est la définition directe.

**B. VRAI ✅** — D'abord, que veut dire "autant d'ions CH₃COO⁻ que de H₃O⁺" ? Ça veut dire que si tu pouvais compter les ions dans le verre, tu en trouverais exactement le même nombre des deux. En notation chimique, ça s'écrit [CH₃COO⁻] = [H₃O⁺] (les crochets = "nombre de molécules par litre").

Pourquoi c'est vrai ? Regarde la réaction :

CH₃COOH ⇌ **1** CH₃COO⁻ + **1** H₃O⁺

Chaque molécule de CH₃COOH qui se dissocie produit **1 CH₃COO⁻ ET 1 H₃O⁺ en même temps** — jamais l'un sans l'autre, jamais 2 d'un côté et 1 de l'autre. Donc forcément, si on part d'une solution pure (eau + CH₃COOH, rien d'autre), les deux ions s'accumulent au même rythme → même quantité à l'équilibre.

⚠️ La condition "pur dans l'eau" est cruciale : si on ajoutait du HCl en plus, le HCl apporterait des H₃O⁺ supplémentaires sans apporter de CH₃COO⁻ → il y aurait plus de H₃O⁺ que de CH₃COO⁻ → l'égalité serait rompue.

**C. FAUX ❌** — C'est l'inverse ! pK a élevé → K a petit → acide **faible**. pK a petit → K a grand → acide **fort**.

**D. FAUX ❌** — pK a = 4,8 > 0 → c'est un acide **faible**, dissociation partielle seulement (~1 % à 0,1 mol/L). Dissociation totale = acide fort (HCl, HNO₃…).

**E. VRAI ✅** — pK a (CH₃COOH) = 4,8 < pK a (HCN) = 9,2 → K a (CH₃COOH) > K a (HCN) → l'acide acétique est plus fort (plus dissocié) que HCN.

→ Réponses : **A, B, E**.

#### b) Produit ionique de l'eau K e

On vient de voir que K a est le Keq d'un acide faible. Eh bien **l'eau elle-même** se dissocie très légèrement, et cette dissociation a sa propre constante d'équilibre :

**H₂O + H₂O ⇌ OH⁻ + H₃O⁺**

Une molécule d'eau donne son H⁺ à une autre molécule d'eau. Le résultat : un ion hydroxyde OH⁻ et un ion oxonium H₃O⁺. C'est une réaction extrêmement peu favorisée — à peine 1 molécule sur 10 millions se dissocie à 25 °C.

Produit ionique de l'eau
K e = [OH⁻] × [H₃O⁺] = **10⁻¹⁴** (à 25 °C)

Comme les deux ions sont produits ensemble (stœchiométrie 1:1, comme pour Ka tout à l'heure), dans l'eau pure : [OH⁻] = [H₃O⁺] = √(10⁻¹⁴) = **10⁻⁷ mol/L** → pH = 7. C'est l'origine du pH neutre de l'eau !

🔑 **D'où vient pH + pOH = 14 ?**

On part de K e = [OH⁻] × [H₃O⁺] = 10⁻¹⁴. On applique −log des deux côtés :

−log([OH⁻] × [H₃O⁺]) = −log(10⁻¹⁴)

−log[OH⁻] − log[H₃O⁺] = 14

**pOH + pH = 14**

C'est une conséquence directe de K e = 10⁻¹⁴. Retenir : si tu connais le pH, le pOH = 14 − pH, et vice versa.

Exemples : pH = 3 (acide) → pOH = 11 | pH = 11 (basique) → pOH = 3 | pH = 7 (neutre) → pOH = 7.

### 7. Loi de Van 't Hoff : influence de T sur Keq

⚠️ **Priorité :** la formule de Van 't Hoff est **rarement calculée** au concours. Ce qui tombe vraiment, c'est la conséquence qualitative (encadrée ci-dessous). Lis la formule pour la reconnaître, mais ne perds pas de temps à l'apprendre par cœur.

La température est la **seule variable qui modifie la valeur de K** (la pression et les concentrations déplacent l'équilibre mais ne changent pas K). La loi de Van 't Hoff quantifie ça :

Rappel : K (= K eq ) c'est le nombre vu en §3 qui dit si les produits ou les réactifs dominent à l'équilibre. K > 1 → produits majoritaires ; K < 1 → réactifs majoritaires. Van 't Hoff dit juste que ce nombre change quand on chauffe ou refroidit.

Loi de Van 't Hoff (à connaître de loin)
ln(K(T₂) / K(T₁)) = −(ΔᵣH° / R) × (1/T₂ − 1/T₁)

- R = 8,314 J·K⁻¹·mol⁻¹ | T en **Kelvin** | ΔᵣH° en **J·mol⁻¹** (pas kJ !)

🔑 **Ce qu'il faut vraiment retenir ★★★**

La formule dit juste une chose : le signe de ΔᵣH° détermine dans quel sens T modifie K.

Rappel de vocabulaire : "équilibre vers les produits" = K augmente = à l'équilibre il y a **plus de produits** que de réactifs dans le verre. "Équilibre vers les réactifs" = K diminue = la réaction "recule", il reste **plus de réactifs** que de produits.

| | Type de réaction | T augmente (on chauffe) | T diminue (on refroidit)

| **Endothermique** (ΔᵣH° > 0)
ex : fusion de la glace (H₂O solide → liquide absorbe de la chaleur)
| K ↗ → **plus de produits**
En chauffant de la glace, elle fond davantage → plus d'eau liquide (produit)
| K ↘ → **plus de réactifs**
En refroidissant, l'eau regèle → retour au réactif (glace)

| **Exothermique** (ΔᵣH° < 0)
ex : synthèse de NH₃ (N₂ + 3H₂ → 2NH₃ dégage de la chaleur)
| K ↘ → **plus de réactifs**
En chauffant, le système "résiste" en décomposant NH₃ → retour vers N₂ + H₂
| K ↗ → **plus de produits**
En refroidissant, la synthèse est favorisée → plus de NH₃ formé

| **Athermique** (ΔᵣH° = 0)
ex : estérification — ni chaleur absorbée ni dégagée
| K **ne change pas** — la température n'a aucun effet sur les quantités à l'équilibre
(aucune chaleur à "compenser" → rien à déplacer)

→ Logique générale : le système cherche toujours à **compenser** ce qu'on lui impose. On chauffe → il absorbe la chaleur en excès → il favorise le sens qui consomme de l'énergie (endothermique). On refroidit → il produit de la chaleur pour compenser → il favorise le sens exothermique.

Ce tableau est détaillé avec exemples en Section V §2 — inutile de tout mémoriser ici, retiens juste le principe.

Tu sais maintenant caractériser un équilibre par sa constante Keq et relier Keq à ΔG°. Avant de passer aux déplacements d'équilibre (Section V), voyons un outil pratique indispensable en première année : le **tableau d'avancement**.

### 8. Tableau d'avancement et rendement à l'équilibre

Au concours, on te demande souvent de **calculer les concentrations à l'équilibre** à partir des quantités initiales et de Keq. L'outil pour ça : le **tableau d'avancement**.

**C'est quoi ξ (xi) ?** C'est simplement une lettre grecque qu'on utilise pour représenter **"la quantité de matière qui a réagi"**. Si ξ = 0,5 mol, ça veut dire que 0,5 mol de réactif a été consommée depuis le début. On ne connaît pas sa valeur au départ — c'est l'inconnue qu'on va calculer grâce à K.

**Comment construire le tableau ?** Regardons un exemple simple avant le QCM :

🔑 **Exemple guidé — Lire un tableau d'avancement**

Réaction : **A + B ⇌ C + D** avec K = 4. On part de 1 mol de A et 1 mol de B, 0 mol de C et D.

|
| | A | B | C | D | Explication

| **Initial (mol)** | 1 | 1 | 0 | 0
| Ce qu'on met dans le verre au départ

| **Variation** | −ξ | −ξ | +ξ | +ξ
| A et B sont consommés (−), C et D sont produits (+). Comme les coefficients sont tous 1, c'est ξ partout.

| **Équilibre** | 1−ξ | 1−ξ | ξ | ξ
| Initial + variation. C'est ce qu'il y a dans le verre une fois l'équilibre atteint.

On écrit K avec ces expressions : K = (C × D) / (A × B) = (ξ × ξ) / ((1−ξ)(1−ξ)) = ξ² / (1−ξ)² = 4

On résout ξ² / (1−ξ)² = 4 étape par étape :

- **Étape 1 — Racine carrée des deux côtés**

√(ξ² / (1−ξ)²) = √4

→ ξ / (1−ξ) = 2 (on peut faire ça car ξ et (1−ξ) sont positifs)

- **Étape 2 — Éliminer le dénominateur**

On multiplie les deux côtés par (1−ξ) :

ξ = 2 × (1−ξ) = 2 − 2ξ

- **Étape 3 — Regrouper les ξ**

ξ + 2ξ = 2

3ξ = 2

→ **ξ = 2/3 ≈ 0,67 mol**

→ À l'équilibre : [A] = [B] = 1 − 2/3 = **1/3 mol** | [C] = [D] = **2/3 mol**

→ Rendement = quantité formée / quantité initiale du réactif = ξ / 1 = 2/3 = **67 %**

Le rendement dit simplement : "sur les 1 mol de A qu'on avait au départ, combien a réellement réagi ?" → 67 %. Les 33 % restants sont encore sous forme de A non réagi à l'équilibre.

✏️ **QCM type concours — Estérification et tableau d'avancement**

❓ L'estérification est une réaction **athermique** (ΔᵣH° = 0 — ni chaleur absorbée ni dégagée). On fait réagir 1 mol d'acide avec 1 mol d'alcool :

**Acide + Alcool ⇌ Ester + H₂O** K = 4 à 25 °C

Le tableau d'avancement est déjà construit (même structure que l'exemple ci-dessus) :

|
| | Acide | Alcool | Ester | H₂O

| **Initial (mol)** | 1 | 1 | 0 | 0

| **Variation** | −ξ | −ξ | +ξ | +ξ

| **Équilibre** | 1−ξ | 1−ξ | ξ | ξ

Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?

A. Le rendement de cette réaction est 66 %.

B. K > 1 donc la réaction est exergonique.

C. Si on augmente la température, l'équilibre se déplace vers les produits.

D. Si on ajoute de l'eau au mélange à l'équilibre, l'équilibre se déplace vers les réactifs.

E. Si on ajoute de l'eau au mélange à l'équilibre, l'équilibre se déplace vers les produits.

💡 Voir la correction détaillée

**Calcul de ξ** (même méthode que l'exemple guidé ci-dessus) :

K = ξ² / (1−ξ)² = 4 → ξ / (1−ξ) = √4 = 2 → 3ξ = 2 → **ξ = 2/3 ≈ 0,667**

Rendement = ξ / 1 = 2/3 = **66,7 %A. VRAI ✅** — Le rendement est bien ~66 %.

**B. VRAI ✅** — K = 4 > 1 → ΔG° = −RT ln(4) < 0 → réaction **exergonique** (spontanée dans le sens direct).

**C. FAUX ⚠️ PIÈGE** — La réaction est **athermique** (ΔᵣH° = 0). D'après Van 't Hoff, si ΔH° = 0 → K ne change pas avec T. La température n'a **aucun effet** sur cet équilibre.

**D. VRAI ✅ ⚠️ PIÈGE** — L'eau est un **produit** de la réaction. En ajouter, c'est comme "pousser" le système vers les produits → selon Le Chatelier, il résiste en allant dans le sens inverse → vers les **réactifs**. L'ester se décompose partiellement pour redonner acide + alcool.

**E. FAUX** — C'est l'inverse de D.

→ Réponses : **A, B, D**.

×

medeos-sante.fr