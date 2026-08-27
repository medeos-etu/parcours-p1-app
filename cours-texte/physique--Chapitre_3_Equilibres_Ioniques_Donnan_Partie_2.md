Chapitre 3 : Équilibres ioniques et effet Donnan - MEDEOS — Partie 2

Chapitre 3 — Partie 2

# Équilibres ioniques et effet Donnan

Pourquoi un patient hypoprotéinémique fait des œdèmes — électroneutralité, ionogramme, membrane sélective et phénomène de Donnan.

## 🔄 Où on en est

Dans la Partie 1, tu as posé la règle qui gouverne tout le chapitre : une solution est toujours électriquement neutre, autant de charges positives que de charges négatives. Tu sais maintenant lire un ionogramme du sang et t'en servir pour calculer le trou anionique, cette astuce qui révèle les anions qu'on ne dose pas au laboratoire. Tu as aussi vu comment les ions se comportent quand ils sont libres dans l'eau : ils s'associent ou se dissocient selon une constante d'équilibre, ils précipitent en cristaux dès qu'on dépasse le produit de solubilité Ks (calculs rénaux), et ils ne diffusent pas tous à la même vitesse.

Jusqu'ici, tout se passait dans une solution unique et homogène. On va maintenant ajouter l'élément qui change tout : une membrane placée entre deux compartiments. Tu vas voir ce qu'est une membrane sélective, puis comment elle déclenche l'effet Donnan — le cœur de ce chapitre.

## III. Le concept de membrane sélective

Une membrane qui sépare deux solutions, ce n'est pas juste une barrière inerte : c'est un **filtre sélectif** qui laisse passer certaines molécules et bloque les autres. Selon le type de membrane, les conséquences sur l'équilibre des solutions sont radicalement différentes.

### 1. Définition d'une membrane biologique

**🔑 Qu'est-ce qu'une membrane ?**

Une **membrane** est une interface entre 2 **compartiments** liquidiens (= deux zones de liquide séparées par une barrière). Elle permet certains échanges (eau, solutés) tout en évitant l'homogénéisation totale. Concrètement, elle est percée de **pores** microscopiques : les particules suffisamment petites passent à travers, les plus grosses sont retenues.

Une membrane est caractérisée par sa **porosité k** = rapport de l'aire totale des pores S' sur l'aire totale de la membrane S. Plus k est élevé, plus la membrane laisse passer de matière (à taille de pores équivalente).

🧠 **Analogie — Le videur de boîte de nuit**

Pense à une membrane comme à un **videur de boîte de nuit**. Le videur ne laisse pas tout le monde rentrer : il sélectionne selon des critères précis (taille, charge, type de molécule). Certaines particules passent facilement (les « VIP » : eau, petits ions), d'autres sont systématiquement refusées (les « non-conformes » : grosses molécules, protéines).

👉 Le « critère de tri » du videur, c'est la **taille du pore** de la membrane. Une membrane à gros pores = un videur cool qui laisse passer tout le monde. Une membrane à petits pores = un videur strict qui ne laisse passer que les petites molécules. Une membrane sans pore = un videur qui ne laisse rien passer (porte fermée).

### 2. Les 4 types de membranes à connaître

Selon la taille des pores et les particules qu'elles laissent passer, on distingue 4 types fondamentaux de membranes :

|

| Type de membrane
| Laisse passer
| Bloque
| Exemple biologique / technique

| **Perméable**
| Tout (eau + tous les solutés)
| Rien
| Membrane « théorique », pas vraiment utile

| **Dialysante**
| Eau + petits ions + petites molécules
| Grosses molécules (protéines, polymères)
| Hémodialyse, membrane des capillaires

| **Semi-perméable (hémiperméable)**
| Eau uniquement (solvant)
| TOUS les solutés (même les petits ions)
| Membrane cellulaire (pour l'eau)

| **Imperméable**
| Rien
| Tout
| Cas théorique, ou paroi solide

[FIGURE physique_ch3_fig02_types_membranes.png]

**Figure** — Les 4 types de membranes : de la totalement perméable à la totalement imperméable. La sélectivité dépend de la taille des pores par rapport aux particules en solution.

### 3. Conséquence — Quand une membrane « trie » les ions, l'équilibre se réarrange

Voilà l'idée fondamentale qui va mener à Donnan : **si une membrane laisse passer certains ions et en bloque d'autres, les concentrations ne peuvent PAS être homogènes de part et d'autre**. Et plus important : **cette asymétrie crée une force osmotique et un potentiel électrique**, qui ont des conséquences cliniques majeures.

**🧠 Mnémo Medeos — « Une membrane sélective = un déséquilibre prévisible »**

Dès qu'une membrane **discrimine** entre les particules (par exemple, bloque les protéines mais laisse passer Na⁺ et Cl⁻), on sait par avance que :

- Les ions diffusibles vont se redistribuer pour respecter **l'électroneutralité** de chaque compartiment

- Cette redistribution sera **asymétrique** (les concentrations seront différentes des deux côtés)

- Cela créera un **déséquilibre osmotique** et un **potentiel électrique** entre les deux compartiments

Tu viens d'énoncer informellement la **loi de Donnan**. C'est ce qu'on va formaliser dans la section IV.

**🧪 Mini-exercice — Identifier le type de membraneÉnoncé :** Dans une machine d'hémodialyse, le sang du patient circule d'un côté de la membrane et un liquide de dialyse de l'autre. On veut que **l'urée et la créatinine** (toxiques, petites molécules) passent du sang vers le dialysat, mais que les **protéines** et les **cellules sanguines** restent dans le sang. Quel type de membrane est utilisé ?

👁️ Voir la correction

**Correction :**

Pour laisser passer les petites molécules (urée, créatinine, ions) tout en bloquant les protéines et cellules, il faut une membrane **dialysante**. Le seuil de coupure (cut-off) est typiquement autour de 5 000 à 20 000 daltons selon la qualité de la membrane.

C'est exactement le principe de l'**hémodialyse** : on remplace la fonction filtrante du rein défaillant en exposant le sang à une membrane dialysante d'une grande surface (~ 1-2 m²) pendant 3-4 heures, 3 fois par semaine. Le gradient de concentration entre sang et dialysat fait diffuser les toxines vers le dialysat, qui est ensuite jeté.

## IV. L'effet Donnan — Démonstration et formules

Voici le cœur du chapitre. L'effet Donnan a été décrit en 1911 par Frederick Donnan, et c'est l'un des résultats les plus contre-intuitifs et puissants de la physico-chimie. Tu vas voir : avec juste l'électroneutralité et la loi d'action de masse, on prédit toute la répartition asymétrique des ions et l'apparition d'un potentiel transmembranaire — sans aucune machinerie biologique active.

### 0. Avant Donnan : deux notions à poser

Avant d'attaquer Donnan, on a besoin de deux notions qui vont revenir tout le temps : qu'est-ce qu'un **protéinate** ? Et qu'est-ce qu'un **potentiel électrique** ?

#### 🤔 (a) C'est quoi un « protéinate » (P⁻ ou R⁻) ?

Au pH physiologique (7,4), la plupart des protéines plasmatiques (albumine notamment) portent globalement **plusieurs charges négatives** sur leur surface. Pourquoi ? Parce qu'elles contiennent des acides aminés acides (acide aspartique, glutamique) dont les groupements −COOH se dissocient en −COO⁻ à pH neutre. Le bilan net : à pH 7,4, une molécule d'albumine porte typiquement **~ 17 charges négatives nettes**.

On appelle ces protéines chargées négativement des **protéinates**, notés conventionnellement **P⁻** (ou R⁻ dans certains manuels). Tout au long de ce chapitre, quand tu lis « P⁻ » ou « protéinate », ça veut juste dire : « une protéine qui se balade en solution avec sa charge négative globale » . C'est important de le retenir, parce que ce sont précisément ces protéinates qui sont trop grosses pour traverser les membranes dialysantes — et c'est cette particularité qui déclenche tout l'effet Donnan.

#### 🤔 (b) C'est quoi un « potentiel électrique » ?

Le **potentiel électrique**, noté **U**, c'est un nombre attribué à un endroit de l'espace qui dit « à quel point cet endroit est chargé positivement » . Pense-le comme une **altitude électrique** qui varie d'un point à l'autre :

- Un point à **U élevé** = une zone où les charges **+ sont abondantes** (et où les − ont déserté).

- Un point à **U faible (voire négatif)** = une zone où les charges **− sont abondantes**.

**Conséquence directe sur le déplacement des charges** :

- Une **charge +** placée dans le décor cherche la compagnie des − → elle **fuit les zones à U élevé** (saturées de + qui la repoussent) et va vers les zones à U faible.

- Une **charge −** fait exactement l'inverse → elle **va des zones à U faible vers les zones à U élevé**.

Pourquoi cette différence de comportement entre + et − ? Simplement à cause de la **loi de Coulomb** : les charges de même signe se repoussent, celles de signe opposé s'attirent . Une charge + est repoussée par les + (zone à U élevé) et attirée par les − (zone à U faible). Pour une charge −, c'est le contraire.

La **différence de potentiel** entre deux points, notée **ΔU = U_A − U_B**, mesure la « force de la pente » entre eux. Plus ΔU est grand, plus les charges sont poussées violemment. ΔU se mesure en **volts (V)**, et en biologie on utilise surtout les **millivolts (mV)** parce que les écarts biologiques sont petits (typiquement 10 à 100 mV).

👉 **Pourquoi on en parle ici ?** Quand deux compartiments séparés par une membrane se retrouvent avec une **asymétrie de charges** (plus de + d'un côté que de l'autre), il s'installe automatiquement un ΔU entre eux — c'est le **potentiel de Donnan U_d**.

[FIGURE physique_ch3_fig09_potentiel_electrique.png]

**Figure** — Deux zones d'« altitude électrique » différente : la **zone à U élevé** regorge de charges positives, la **zone à U faible** regorge de négatives. Une charge + cherche les − (va vers le U faible), une charge − cherche les + (va vers le U élevé). C'est la loi de Coulomb en action.

### 1. 🤔 Le problème — Que se passe-t-il quand une membrane bloque un seul type d'ion ?

Pour comprendre Donnan, il faut d'abord visualiser le dispositif de départ. Regarde le schéma ci-dessous :

[FIGURE physique_ch3_fig10_setup_donnan_initial.png]

**Figure** — Dispositif de Donnan à l'état initial. **Compartiment A** : protéinates R⁻ (trop gros pour traverser la membrane) accompagnés de leurs contre-ions Na⁺. **Compartiment B** : du NaCl dissous, c'est tout. La **membrane dialysante** laisse passer Na⁺ et Cl⁻ librement, mais bloque les R⁻.

La question est simple : dans quelques minutes, quand le système aura atteint son équilibre, comment Na⁺ et Cl⁻ se répartiront-ils entre A et B ? L'intuition naïve dirait : « puisqu'ils peuvent traverser librement, ils vont se répartir 50/50 » . **Et c'est faux.** Les Na⁺ resteront en excès côté A (avec les R⁻), et les Cl⁻ seront en déficit dans A par rapport à B. **C'est le phénomène de Donnan** — qu'on va maintenant démontrer pas à pas.

### 2. Démonstration pas à pas

Repartons du dispositif que tu viens de voir et regardons ce qui se passe dynamiquement. Au départ, le compartiment B contient des **Cl⁻** que le compartiment A n'a pas (en A il n'y a que des protéinates R⁻ et leurs contre-ions Na⁺). Sous l'effet du gradient de concentration, les Cl⁻ vont donc **diffuser spontanément de B vers A**. Mais il y a un piège : à mesure que les Cl⁻ entrent en A, ils s'ajoutent aux charges négatives déjà présentes (les R⁻). Pour que A reste électriquement neutre, il faut que des **Na⁺ accompagnent les Cl⁻** dans leur passage. Le système finit par s'équilibrer dans une configuration surprenante : **les concentrations des ions diffusibles ne sont PAS égales des deux côtés**.

[FIGURE physique_ch3_fig03_donnan_demonstration.png]

**Figure** — Démonstration de l'effet Donnan : à l'équilibre, les petits ions sont en excès du côté des protéines (compartiment A) pour respecter l'électroneutralité.

### 3. La loi de Donnan — La formule centrale

À l'équilibre, on aboutit à une **relation très simple** entre les concentrations des ions diffusibles dans les deux compartiments. Voici la formule, puis la justification logique en 4 étapes.

Loi de Donnan (ions monovalents)
[Na⁺] A × [Cl⁻] A = [Na⁺] B × [Cl⁻] B
Pour des ions de valence Z, la formule générale s'écrit : ([Cation] A / [Cation] B ) 1/Z = ([Anion] B / [Anion] A ) 1/Z

#### 🤔 D'où sort cette formule ?

Elle découle d'une notion physique nouvelle qu'on doit poser proprement : le **potentiel électrochimique**. Mais avant ça, il faut introduire **trois constantes universelles** qui vont apparaître dans toutes les formules de ce chapitre (et des suivants).

🔑 **Trois constantes universelles à connaître à vie**

En biophysique, trois constantes reviennent en permanence dès qu'on parle de transport, d'osmose, ou de potentiel transmembranaire. Tu n'as pas besoin de les retrouver toi-même (elles sont données dans l'énoncé), mais il faut savoir ce qu'elles veulent dire :

- **R = 8,314 J/(mol·K)** = constante universelle des gaz parfaits. C'est une constante de thermodynamique qui apparaît dès qu'on relie chaleur, énergie et nombre de particules. Retiens juste qu'elle existe et qu'elle vaudra toujours 8,314.

- **T** = **température absolue en kelvin (K)**. Rappel : K = °C + 273. Au corps humain, T = 37 °C + 273 = **310 K**. C'est la température utilisée dans toutes les formules de biophysique.

- **F = 96 485 C/mol** = **constante de Faraday** = charge électrique portée par une mole d'électrons (ou d'ions monovalents). C'est elle qui fait le pont entre la chimie (moles) et l'électricité (coulombs).

👉 Apprends à reconnaître ces trois constantes dès maintenant — c'est l'investissement le plus rentable de toute la biophysique.

🔑 **Le potentiel électrochimique d'un ion — qu'est-ce que c'est ?**

Quand un ion est en solution, il « ressent » **deux choses** qui le poussent à bouger :

- Un **potentiel chimique** (lié à sa concentration locale) — la diffusion qu'on a vue en II.3. L'ion veut spontanément aller des zones concentrées vers les zones diluées.

- Un **potentiel électrique** (lié à sa charge et au champ électrique local) — défini en IV.0. L'ion + va spontanément vers les zones à U faible, l'ion − vers les zones à U élevé (loi de Coulomb).

Le **potentiel électrochimique μ̃**, c'est la somme des deux contributions . C'est ce qui détermine vraiment où l'ion veut aller :

μ̃ = μ_chimique + μ_électrique = (terme en log de la concentration) + (Z × F × U)

👉 À l'équilibre, un ion ne bouge plus : ça veut dire que son potentiel électrochimique est **égal des deux côtés de la membrane**. C'est cette égalité qui va nous donner la loi de Donnan.

👉 Pas besoin de connaître la démonstration mathématique pour utiliser la loi de Donnan au concours. Mais si tu es curieux et que tu veux voir d'où elle sort proprement, déplie le bloc ci-dessous.

🔬 **Pour les curieux — La démonstration en 4 étapes** (facultatif)

L'idée centrale : à l'équilibre, un ion ne bouge plus. Son **potentiel électrochimique** μ̃ (vu plus haut) est donc le même des deux côtés de la membrane . On écrit cette égalité pour Na⁺, puis pour Cl⁻, on combine les deux, et la loi de Donnan tombe toute seule.

**Étape 1 — Égalité des potentiels électrochimiques pour Na⁺.** Le Na⁺ ne bouge plus → μ̃(Na⁺) A = μ̃(Na⁺) B . En explicitant (Z = +1) :

RT·ln[Na⁺] A + F·U A = RT·ln[Na⁺] B + F·U B

**Étape 2 — Même chose pour Cl⁻** (Z = −1, d'où le signe « − » devant F·U) :

RT·ln[Cl⁻] A − F·U A = RT·ln[Cl⁻] B − F·U B

**Étape 3 — On additionne les deux équations**. Les termes électriques (+ F·U pour Na⁺, − F·U pour Cl⁻) se compensent exactement et disparaissent :

RT·ln[Na⁺] A + RT·ln[Cl⁻] A = RT·ln[Na⁺] B + RT·ln[Cl⁻] B
ln([Na⁺] A · [Cl⁻] A ) = ln([Na⁺] B · [Cl⁻] B )

**Étape 4 — On enlève le ln** (si ln(X) = ln(Y), alors X = Y) :

**[Na⁺] A × [Cl⁻] A = [Na⁺] B × [Cl⁻] B ** ✓

👉 La loi de Donnan n'est pas magique : c'est juste la conséquence de l'égalité des potentiels électrochimiques pour Na⁺ et Cl⁻ à l'équilibre, combinée par addition.

À retenir — Loi de Donnan
[Na⁺] A × [Cl⁻] A = [Na⁺] B × [Cl⁻] B
À l'équilibre, le produit cation × anion diffusibles est le même des deux côtés de la membrane.

Combinée avec la règle d'**électroneutralité** appliquée dans chaque compartiment, cette loi permet de calculer les concentrations finales de tous les ions.

**🔑 Les 2 règles à manipuler simultanément pour résoudre un exercice**

- **Électroneutralité dans chaque compartiment** : Σ |Z|·[Cations] i = Σ |Z|·[Anions] i . Cette règle s'applique séparément dans A et dans B.

- **Loi de Donnan** : pour chaque couple cation/anion diffusible, le produit (ou le rapport en valences) est le même des deux côtés.

Ces deux conditions suffisent pour résoudre n'importe quel exercice de Donnan, à condition d'écrire toutes les équations et de résoudre le système.

### 4. Le potentiel de Donnan — Une différence de potentiel électrique apparaît

L'asymétrie des concentrations ioniques produite par Donnan ne reste pas inerte : elle crée une **différence de potentiel électrique** entre les deux compartiments. Du côté des protéinates (compartiment A), il y a un excès de Na⁺ et un déficit de Cl⁻ par rapport au compartiment B. Cette asymétrie de charges mobiles génère un potentiel transmembranaire mesurable, appelé **potentiel de Donnan U_d**.

[FIGURE physique_ch3_fig03_donnan_demonstration.png]

**Rappel** — État d'équilibre de Donnan (vu en IV.2).

Regarde le **panneau bas** du schéma ci-dessus. Côté A, on a **8 Na⁺ vs seulement 2 Cl⁻** — il y a clairement plus de charges + que de charges − mobiles . Côté B, en revanche, on a **4 Na⁺ vs 4 Cl⁻**, parfaitement équilibré. C'est précisément ce **déséquilibre de charges mobiles côté A** qui va générer la différence de potentiel U_d entre les deux compartiments.

#### 🤔 D'où vient ce potentiel, intuitivement ?

Reprends une équation de la dérivation précédente — celle pour le Na⁺ par exemple. Le Na⁺ est à l'équilibre, donc il ne bouge plus. Mais physiquement, il y a un déséquilibre de concentration ([Na⁺] A ≠ [Na⁺] B ) qui devrait le pousser à diffuser. **Qu'est-ce qui retient le Na⁺ d'aller niveler les concentrations ?** Réponse : c'est précisément la **différence de potentiel électrique** qui s'installe entre les deux compartiments. La force chimique (qui pousse à diffuser) est exactement compensée par la force électrique (qui pousse en sens inverse).

Comment passer de cette intuition à une formule chiffrée ? On repart de l'équation d'égalité des potentiels électrochimiques pour Na⁺ (l'étape 1 de la démonstration précédente, qu'on retrouve dans le bloc « Pour les curieux ») : RT·ln[Na⁺] A + F·U A = RT·ln[Na⁺] B + F·U B . Cette équation contient **déjà tout ce qu'il faut** — il suffit d'isoler la différence U A − U B (l'inconnue qui nous intéresse) pour faire apparaître la formule de U_d. C'est de l'algèbre pure, montrée pas à pas dans le bloc dépliable ci-dessous.

🔬 **Pour les curieux — Comment on obtient la formule de U_d** (facultatif)

**Étape 1 — Point de départ** (égalité des potentiels électrochimiques pour Na⁺, démontrée plus haut) :

RT·ln[Na⁺] A + F·U A = RT·ln[Na⁺] B + F·U B

**Étape 2 — On regroupe les termes électriques d'un côté, chimiques de l'autre :**

F·U A − F·U B = RT·ln[Na⁺] B − RT·ln[Na⁺] A
F·(U A − U B ) = RT·(ln[Na⁺] B − ln[Na⁺] A )

**Étape 3 — On utilise la propriété du log** (ln a − ln b = ln(a/b)) :

F·(U A − U B ) = RT · ln([Na⁺] B / [Na⁺] A )

**Étape 4 — On divise par F** pour isoler U A − U B = U d . Pour la version générale avec un ion de valence Z quelconque, on garde Z au dénominateur :

**U d = (RT / ZF) · ln(C 1 / C 2 )**

C'est la **formule générale thermodynamique** du potentiel de Donnan. Tout vient mécaniquement de l'égalité des potentiels électrochimiques.

**Étape 5 — Passage au log décimal pour la version pratique.** Le concours te donne la formule en log 10 (et pas en ln). On utilise l'identité ln(x) = 2,3 × log(x), donc :

U d = (RT / ZF) × 2,3 × log(C 1 / C 2 )

**Étape 6 — Calcul numérique à 37 °C** (T = 310 K, R = 8,314, F = 96 485) :

(RT / F) × 2,3 = (8,314 × 310 / 96 485) × 2,3 ≈ 0,0267 × 2,3 ≈ **0,0615 V ≈ 60 mV**

👉 D'où la formule pratique qu'on utilise au concours :

**U d (mV) ≈ (60 / Z) × log(C 1 / C 2 )**

Potentiel de Donnan (à 37 °C, soit T ≈ 310 K)
U d (mV) ≈ (60 / Z) × log(C 1 / C 2 )
avec Z = valence de l'ion considéré, C₁ et C₂ = concentrations dans les deux compartiments. Formule générale (thermodynamique) : U d = (RT/ZF)·ln(C₁/C₂).

📝 **ln vs log** : la dérivation théorique utilise **ln** (logarithme népérien, base e). Au concours, on travaille en **log décimal** (base 10, comme pour le pH au ch.2) via ln(x) = 2,3 × log(x), ce qui fait apparaître les **60 mV à 37 °C**. Les deux écritures sont strictement équivalentes — on utilise le log décimal parce que c'est ce que l'énoncé te donne.

[FIGURE physique_ch3_fig06_potentiel_donnan_log.png]

**Figure** — Le potentiel de Donnan croît logarithmiquement avec le rapport de concentration : chaque facteur × 10 sur le ratio ajoute 60 mV (pour des ions monovalents à 37 °C).

Quelques propriétés importantes :

- Le potentiel de Donnan ne dépend QUE des concentrations ioniques — pas de la nature spécifique des protéines

- L'**égalité des potentiels électrochimiques** (qu'on vient de définir et de dériver) est l'origine théorique de la formule : la différence de potentiel chimique est compensée par la différence de potentiel électrique

⚠️ **Petit paradoxe à noter**

Tu vas voir dans le mini-exercice ci-dessous que le potentiel de Donnan en physiologie réelle est **très petit** : seulement 2-3 mV environ. Pourquoi en faire tout un plat alors ?

👉 Parce que ce qui compte, ce n'est pas la valeur en mV elle-même (faible), mais le **mécanisme** : une asymétrie de concentration ionique → une différence de potentiel . Ce mécanisme général est central en biophysique des membranes, et Donnan en est l'illustration la plus pure : à partir d'une simple membrane qui bloque les protéinates, on génère mécaniquement un voltage. Une fois que tu as compris Donnan, tu as compris l'essentiel.

**🧠 Mnémo Medeos — « 60 mV par décade à 37 °C »**

Pour des ions monovalents (Z = 1) à température corporelle, le potentiel de Donnan augmente de **60 mV par décade** de différence de concentration (un facteur 10 sur le ratio C₁/C₂ produit 60 mV de plus).

- Ratio 10:1 → U_d = 60 mV

- Ratio 100:1 → U_d = 120 mV

- Pour un ion divalent (Z = 2), c'est la moitié → 30 mV par décade

C'est l'un des chiffres les plus rentables à graver pour la biophysique du concours.

**🧪 Mini-exercice — Application de la loi de DonnanÉnoncé :** Deux compartiments A (avec protéinates) et B sont séparés par une membrane dialysante. À l'équilibre, on mesure [Na⁺]_A = 110 mmol/L et [Cl⁻]_A = 100 mmol/L. Dans le compartiment B, [Na⁺]_B = 100 mmol/L. Quelle est la concentration en [Cl⁻]_B et la valeur du potentiel de Donnan U_d pour le Na⁺ ?

👁️ Voir la correction pas à pas

**━━━ Question 1 — Trouver [Cl⁻]_B ━━━① Choisir le bon outil.** On nous donne 3 concentrations sur 4 ([Na⁺]_A, [Cl⁻]_A, [Na⁺]_B), et on cherche la 4ᵉ ([Cl⁻]_B). L'outil qui relie les 4 concentrations entre elles, c'est la **loi de Donnan** :

[Na⁺]_A × [Cl⁻]_A = [Na⁺]_B × [Cl⁻]_B

**② Isoler l'inconnue.** On divise les deux côtés par [Na⁺]_B :

[Cl⁻]_B = ([Na⁺]_A × [Cl⁻]_A) / [Na⁺]_B

**③ Substituer les valeurs numériques :**

[Cl⁻]_B = (110 × 100) / 100 = 11 000 / 100 = **110 mmol/L④ Vérifier la cohérence physique.** On trouve [Cl⁻]_B = 110 et on a [Cl⁻]_A = 100 → **il y a plus de Cl⁻ dans B que dans A**. Est-ce que c'est cohérent avec notre intuition ? OUI : les protéinates R⁻ en A repoussent les Cl⁻ (charges de même signe), donc les Cl⁻ « préfèrent » s'accumuler en B. ✓

Double-vérification de Donnan : 110 × 100 = 11 000 et 100 × 110 = 11 000 ✓

**━━━ Question 2 — Calculer U_d pour Na⁺ ━━━① Rappeler la formule** du potentiel de Donnan, en faisant attention à Z :

U_d (mV) ≈ (60 / Z) × log(C_1 / C_2)

Pour Na⁺, la valence est Z = +1 → le facteur 60/Z se simplifie en **60**. On prend C_1 et C_2 = les concentrations de Na⁺ dans A et B respectivement.

**② Substituer les valeurs :**

U_d = 60 × log(110 / 100) = 60 × log(1,1)

**③ Calculer log(1,1).** Cette valeur n'est pas évidente à retrouver de tête. Deux approches au choix :

- **À connaître par cœur** (très utile au concours) : log(1,1) ≈ **0,041**

- **À reconstruire** avec l'astuce ln(1 + x) ≈ x pour x petit : ln(1,1) ≈ 0,1, puis log = ln / 2,3, donc log(1,1) ≈ 0,1 / 2,3 ≈ 0,043 (~ ordre de grandeur correct)

**④ Calcul final :**

U_d ≈ 60 × 0,041 ≈ **2,5 mV━━━ Lecture du résultat ━━━**

👉 **Sens du voltage** : le compartiment B (sans protéinates) est **~2,5 mV plus positif** que le compartiment A. C'est cohérent avec la physique : les R⁻ en A retiennent les Na⁺ par attraction électrique, donc A se retrouve « excédentaire » en Na⁺ — mais cette accumulation de + en A est exactement compensée par les R⁻ négatifs fixes qui sont là. Le déséquilibre net qui « apparaît » en termes de voltage est dû aux ions mobiles : il manque des Cl⁻ en A, donc A est légèrement plus négatif que B.

👉 **Ordre de grandeur** : 2,5 mV, c'est très petit . Pourquoi ? Parce que l'écart de concentration entre A et B est lui-même petit (110 vs 100 = un facteur 1,1 seulement). Dès que le ratio devient grand (un facteur 10 par exemple), on passe à 60 mV (cf. fig. plus haut : 60 mV par décade).

👉 **À retenir comme reflex** : Donnan = produit constant **+** log du ratio pour U_d. Avec ces deux formules, tu peux résoudre n'importe quel exercice classique en moins de 2 minutes.

×

medeos-sante.fr