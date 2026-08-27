Chapitre 13 : Stéréochimie — Chiralité et configurations R/S, E/Z - MEDEOS — Partie 1

Chapitre 13 — Partie 1

# Stéréochimie : chiralité et configurations

Carbone asymétrique, R/S, E/Z, énantiomères, diastéréoisomères, composé méso

## 🎯 Ce que tu vas apprendre (et pourquoi c'est crucial)

Aux chapitres 10 à 12, tu as appris à dessiner des molécules, à comprendre leurs liaisons et à prédire leur réactivité. Mais jusqu'ici, on a surtout raisonné « à plat » — en 2D, sur du papier. Maintenant, on passe à la **3ème dimension**. Et ça change **absolument tout**.

Pourquoi ? Parce que ton corps est un environnement **chiral** : tes enzymes, tes récepteurs, ton ADN — tout est construit avec une orientation 3D précise. Une molécule qui arrive avec la « bonne » forme dans l'espace sera reconnue. La même molécule, avec les mêmes atomes et les mêmes liaisons, mais orientée différemment ? Elle sera ignorée — ou pire, toxique. C'est le domaine de la **stéréochimie**.

Ce chapitre est l'un des **plus tombés au concours**. La bonne nouvelle : c'est extrêmement logique. Il n'y a presque rien à apprendre par cœur — tout repose sur une poignée de règles simples (CIP) et un raisonnement visuel. Voici ce que tu sauras faire à la fin :

- 🔄 **Distinguer** stéréoisomérie de configuration et de conformation — et ne plus jamais les confondre

- 🖐️ **Identifier** un carbone asymétrique (C*) et reconnaître une molécule chirale

- 📋 **Appliquer** les règles CIP (Cahn-Ingold-Prelog) pour attribuer R ou S à un C*

- 🪞 **Différencier** énantiomères, diastéréoisomères et composé méso

- ⚗️ **Déterminer** la configuration E/Z d'un alcène grâce aux priorités CIP

- 🔢 **Calculer** le nombre de stéréoisomères (2ⁿ et ses exceptions)

Chaque notion s'enchaîne naturellement : on commence par le cadre général (types de stéréoisomères), puis on plonge dans la chiralité, les règles CIP, et enfin les relations entre stéréoisomères. Prends le temps de bien comprendre chaque étape — tout le reste en découle. 💪

## I. 🔄 Stéréoisomérie : configuration vs conformation

### 1. Ce qu'on sait déjà — et ce qu'on va approfondir

Si tu as bien suivi les chapitres précédents, la stéréochimie n'est **pas nouvelle** pour toi. Tu en as déjà fait sans le savoir :

- **Au Ch. 10 (alcanes)** → tu as dessiné les conformations **décalée et éclipsée** sur des projections de Newman, et tu as vu les conformations **chaise et bateau** du cyclohexane. Tu sais que la rotation autour d'une liaison σ est **libre**, et que les conformères s'interconvertissent sans casser de liaison.

- **Au Ch. 11 (alcènes)** → tu as découvert la stéréoisomérie **Z/E**. La double liaison C=C est **rigide** (la liaison π empêche la rotation), ce qui fige les substituants d'un côté ou de l'autre. Tu as appris les **règles CIP** pour déterminer Z ou E.

Tout ça, c'était de la stéréochimie. Mais on ne faisait qu'effleurer le sujet. Maintenant, on va **poser le cadre complet** et surtout découvrir un nouveau type de stéréoisomérie — beaucoup plus subtil — qui naît autour d'un simple **carbone portant 4 substituants différents**. C'est la **chiralité**, et elle change tout en médecine. 🤔

💡 **Pourquoi c'est si important ?**

Deux molécules avec les **mêmes atomes**, les **mêmes liaisons**, le **même squelette** — et pourtant l'une est un **médicament efficace**, l'autre un **poison**. La seule différence ? L'arrangement 3D de quelques atomes. C'est exactement ce que tu vas apprendre à identifier et nommer dans ce chapitre.

### 2. Les niveaux d'isomérie — le cadre général

Posons le vocabulaire proprement. Deux molécules de **même formule brute** sont des **isomères**. Mais ce mot recouvre des situations très différentes :

|

| Type d'isomérie
| Définition
| Exemple (déjà vu !)
| Ce qu'il faut retenir

| **Isomérie de constitution**
| Même formule brute, mais **enchaînements différents**
| Cyclohexane vs hex-1-ène (tous deux C₆H₁₂)
| Les atomes sont « branchés » autrement — ce ne sont pas les mêmes liaisons

| **Stéréoisomérie**
| Même connectivité, mais **arrangement spatial différent**
| (Z)-but-2-ène vs (E)-but-2-ène (Ch. 11)
| Mêmes liaisons, mais orientées différemment dans l'espace 3D

La stéréoisomérie — celle qui nous intéresse dans ce chapitre — se subdivise elle-même en deux catégories. **C'est LA distinction fondamentale** — elle tombe presque à chaque partiel : ⚡

🔑 **Configuration vs Conformation — La distinction clé**

- **🔄 Stéréoisomères de conformation** : même molécule, différentes orientations obtenues par **rotation autour d'une liaison σ**. On ne casse aucune liaison → interconversion libre à température ambiante.

Tu connais déjà : éthane décalé ↔ éclipsé, cyclohexane chaise ↔ bateau (Ch. 10).

- **🔒 Stéréoisomères de configuration** : molécules différentes dont l'interconversion nécessite la **rupture d'au moins une liaison**. Ce sont de vraies molécules distinctes, séparables.

Tu connais déjà : (Z)-but-2-ène et (E)-but-2-ène — pour passer de l'un à l'autre, il faut rompre la liaison π (Ch. 11).

**Mnémotechnique :** « confo**R**mation = **R**otation libre | C**onfi G**uration = il faut C**asser pour C**han G**er » 🧠

### 3. Les deux types de stéréoisomères de configuration

Au Ch. 11, tu as vu un premier type de stéréoisomères de configuration : les isomères **Z et E** autour d'une double liaison. Mais il en existe un autre type, encore plus important en médecine, qui apparaît autour d'un **carbone portant 4 substituants différents**. Voyons les deux familles :

🔑 **Énantiomères — images miroir non superposables**

Deux énantiomères sont comme ta **main gauche et ta main droite** 🤚✋ : identiques en apparence, mais impossible de les superposer parfaitement. Si tu places ta main droite devant un miroir, tu vois… ta main gauche !

**Exemple concret :** l'alanine, un acide aminé naturel. La **(S)-alanine** (= L-alanine) est utilisée par ton corps pour fabriquer des protéines. La **(R)-alanine** (= D-alanine) ? Ton corps ne la reconnaît pas — les enzymes sont chirales, elles ne « matchent » qu'avec la bonne forme.

[FIGURE chimie_ch13_fig_enantiomeres_alanine.png]

**Figure 1a** — (S)-alanine et (R)-alanine : même formule, mêmes liaisons, mais images miroir non superposables. Le miroir central illustre la relation d'énantiomérie.

🔑 **Énantiomères — propriétésPropriétés :** mêmes Tf, Teb, solubilité, spectre IR… **SAUF** le **pouvoir rotatoire** (opposé : l'un dévie la lumière à droite, l'autre à gauche) et la **réactivité avec d'autres molécules chirales** (enzymes, récepteurs).

🔑 **Diastéréoisomères — PAS images miroir**

Tous les stéréoisomères de configuration qui ne sont **pas** énantiomères sont des **diastéréoisomères**. Ils ne sont pas images l'un de l'autre dans un miroir.

**Exemple concret :** le **thréose** et l'**érythrose** sont deux sucres de formule brute C₄H₈O₄. Ils possèdent chacun **2 carbones asymétriques (C*)**, les mêmes atomes, les mêmes liaisons — mais un arrangement 3D différent autour de leurs C*. Si tu les places devant un miroir, l'un n'est **PAS** l'image miroir de l'autre → ce sont des **diastéréoisomères**.

[FIGURE chimie_ch13_fig_diastereoisomeres_threo_erythro.png]

**Figure 1b** — Thréose et érythrose : même formule brute, même connectivité, mais PAS images miroir l'un de l'autre → diastéréoisomères. Ils ont des propriétés physiques différentes.

🔑 **Diastéréoisomères — propriétésPropriétés :** Tf, Teb, solubilité, spectre IR, pouvoir rotatoire… sont **TOUS DIFFÉRENTS** → on peut les séparer facilement (chromatographie, distillation, cristallisation). C'est la grande différence avec les énantiomères !

💡 **Résumé visuel — comment les distinguer🪞 Énantiomères :** images miroir → mêmes propriétés physiques (sauf pouvoir rotatoire)

**↔️ Diastéréoisomères :** PAS images miroir → propriétés physiques différentes

⚡ **Piège QCM :** « Deux énantiomères ont des températures de fusion différentes. » → **FAUX ❌** (mêmes propriétés physiques, c'est justement ça qui les rend difficiles à séparer !)

✏️ **Mini-exercice — Configuration ou conformation ?**

Pour chaque paire, indique s'il s'agit de stéréoisomères de **configuration** ou de **conformation** :

- Éthane décalé et éthane éclipsé

- (R)-alanine et (S)-alanine

- Cyclohexane chaise et cyclohexane bateau

- (E)-but-2-ène et (Z)-but-2-ène

🔓 Voir la correction

**a) Éthane décalé et éthane éclipsé → Conformation**

Les deux sont la **même molécule** dans deux positions différentes. On passe de l'une à l'autre en **tournant simplement** un CH₃ par rapport à l'autre autour de la liaison C−C σ (angle dièdre 0° → 60°). Aucune liaison n'est cassée. C'est exactement ce qu'on a vu au Ch. 10 avec les projections de Newman → **conformation**.

**b) (R)-alanine et (S)-alanine → Configuration**

Pour passer de R à S, il faut **échanger deux substituants** sur le carbone asymétrique → cela nécessite de **casser et reformer des liaisons**. Ce sont des **énantiomères** (images miroir), un sous-type de stéréoisomères de **configuration**.

**c) Cyclohexane chaise et cyclohexane bateau → Conformation**

⚠️ **C'est le piège classique !** On passe de chaise à bateau par rotation des liaisons C−C σ du cycle, **sans casser aucune liaison**. Ce ne sont PAS des configurations différentes, juste des conformations.

**d) (E)-but-2-ène et (Z)-but-2-ène → Configuration**

Pour passer de E à Z, il faudrait tourner un C par rapport à l'autre autour de la double liaison → cela **romprait la liaison π** (~270 kJ/mol). Ces deux molécules sont des **diastéréoisomères** (pas images miroir), un sous-type de stéréoisomères de **configuration**.

🧠 **Rappel mnémotechnique :** « confo**R**mation = **R**otation libre | C**onfi G**uration = il faut C**asser pour C**han G**er »

## II. 🖐️ Chiralité et carbone asymétrique (C*)

### 1. D'où vient la chiralité ? Le carbone asymétrique

En Section I, tu as vu que les énantiomères sont des **images miroir non superposables** — comme ta main gauche et ta main droite. Tu as vu l'exemple de l'alanine. Mais **d'où vient** cette propriété ? Pourquoi certaines molécules sont-elles chirales et d'autres non ? La réponse se trouve dans un seul atome : le **carbone asymétrique** (noté C*).

#### 🔎 L'idée clé — un carbone avec 4 substituants différents

Prends un carbone sp³ (tétraédrique, 4 liaisons σ). Si ses **4 substituants sont tous identiques** (ex : CH₄, le méthane), la molécule possède plein de plans de symétrie → elle est **superposable à son image miroir** → elle est **achirale**.

Mais dès que les **4 substituants sont TOUS différents**, il n'y a plus aucun plan de symétrie. La molécule n'est **plus superposable à son image miroir** → elle est **chirale**. Ce carbone sp³ portant 4 substituants différents, c'est le **carbone asymétrique C***.

[FIGURE chimie_ch13_fig_achiral_vs_chiral.png]

**Figure 2a** — À gauche : CH₄ avec 4 substituants identiques → superposable à son image miroir → achiral. À droite : C* avec 4 substituants différents (a, b, c, d) → non superposable → chiral.

🔑 **Carbone asymétrique (C*) — Définition**

Un carbone est **asymétrique** s'il remplit ces **2 conditions** :

- 1️⃣ Il est **sp³** (hybridation tétraédrique → 4 liaisons simples σ)

- 2️⃣ Ses **4 substituants sont TOUS différents** (a ≠ b ≠ c ≠ d)

➡️ Ces 2 conditions réunies → **aucun plan de symétrie possible** → la molécule est **chirale** (non superposable à son image miroir). **C* = source de chiralité.**

⚠️ Un C **sp²** (3 voisins, ex : C=O, C=C) ou un C **sp** (2 voisins, ex : C≡N) ne peut **jamais** être asymétrique : il n'a que 3 ou 2 substituants, donc la condition "4 substituants TOUS différents" n'est même pas posable — et sans 4 substituants différents, pas de C*, pas de chiralité.

💡 **Le lien chiralité ↔ C***

En pratique en première année :

- Molécule avec **au moins 1 C*** (et pas de plan de symétrie interne) → **chirale** ✅

- Molécule **sans C*** → **achirale** dans l'immense majorité des cas

- ⚠️ Exception : une molécule peut avoir des C* et être **achirale** si elle possède un **plan de symétrie interne** → c'est le **composé méso** (Section IV)

### 2. Comment repérer un C* — Méthode en 3 étapes

OK, tu sais maintenant ce qu'est un C*. Mais face à une molécule de 15 carbones dans un QCM, comment les **repérer vite et sans erreur** ? Voici la méthode systématique — applique-la toujours dans cet ordre : 📋

- **Étape 1 — Repérer les C sp³** : élimine d'emblée tous les C engagés dans une double ou triple liaison (sp² ou sp)

- **Étape 2 — Comparer les 4 substituants** : pour chaque C sp³, regarde les 4 groupes attachés. Attention, il faut considérer **toute la chaîne**, pas juste l'atome voisin immédiat !

- **Étape 3 — Verdict** : si les 4 substituants sont tous différents → c'est un **C*** ✅

💡 **Piège classique — Substituants « déguisés »**

⚠️ Deux substituants qui **commencent** par le même atome ne sont pas forcément identiques :

- Dans le **2-bromobutane** (CH₃−CHBr−CH₂−CH₃), le C2 porte : H, Br, −CH₃, −CH₂CH₃ → 4 substituants différents → **C* ✅**

- −CH₂OH et −CH₂NH₂ commencent tous les deux par −CH₂, mais si tu regardes **l'atome suivant** dans la chaîne : l'un finit sur un O, l'autre sur un N → ce sont bien **deux substituants différents**

À l'inverse, si un C sp³ porte deux fois −CH₃ (ex : le C central de l'isobutane) → **pas un C*** ❌

✏️ **Mini-exercice — Combien de C* ?**

Pour chaque molécule, indique le **nombre de C*** et leur position :

- CH₃−CHCl−CH₃ (2-chloropropane)

- CH₃−CHBr−CH₂−CH₃ (2-bromobutane)

- HOOC−CHOH−CHOH−COOH (acide tartrique)

- CH₃−C(CH₃)₂−CH₃ (néopentane)

🔓 Voir la correction

- **0 C*** — Le C2 porte H, Cl, −CH₃, −CH₃ → deux substituants identiques (−CH₃) → pas un C*

- **1 C*** — Le C2 porte H, Br, −CH₃, −CH₂CH₃ → 4 substituants tous différents → **C* en C2**

- **2 C*** — Le C2 porte H, OH, −COOH, −CHOH−COOH (4 différents) → C*. Le C3 idem → **C* en C2 et C3**

- **0 C*** — Le C central porte 4 × −CH₃ → 4 substituants identiques → pas un C*

### 3. Combien de stéréoisomères possibles ? La formule 2ⁿ

Rappel rapide : des **stéréoisomères** sont des molécules de **même formule brute et même enchaînement d'atomes**, mais dont la disposition dans l'espace est différente — ce sont donc des molécules distinctes . Tu as repéré **n** C* dans une molécule. Chaque C* peut être R ou S (2 possibilités), et ces choix sont **indépendants**. Le nombre total de combinaisons est donc :

Nombre maximal de stéréoisomères
N max = **2 n ** où n = nombre de C* (centres stéréogènes)

|

| Nombre de C*
| N max
| Paires d'énantiomères
| Exemple

| 1
| 2¹ = **2**
| 1 paire
| Alanine (R et S)

| 2
| 2² = **4**
| 2 paires
| Thréonine (2R,3R / 2S,3S / 2R,3S / 2S,3R)

| 3
| 2³ = **8**
| 4 paires
| Aldopentoses

| 4
| 2⁴ = **16**
| 8 paires
| Aldohexoses (glucose et ses isomères)

💡 **Attention — 2ⁿ est un MAXIMUM, pas toujours la réalité**

La formule 2ⁿ suppose que chaque combinaison R/S donne une molécule réellement différente . Ce n'est pas toujours vrai. Exemple : l'acide tartrique a **2 C*** → on attend 2² = **4** stéréoisomères, mais il n'en existe que **3** en réalité.

Pourquoi ? Deux des combinaisons R/S correspondent en fait à **la même molécule** — on perd donc un stéréoisomère. Ce cas particulier s'appelle un **composé méso**. Pas besoin de comprendre pourquoi maintenant : on l'explique en détail en **Section IV**. Retiens juste que **2ⁿ = maximum théorique**, et que le nombre réel peut être inférieur.

### 4. Activité optique — La preuve expérimentale

Savoir qu'une molécule est chirale sur le papier, c'est bien. Mais en labo, comment le **prouver** ? Avec un **polarimètre** : on envoie de la lumière polarisée à travers la solution, et on mesure si le plan de polarisation tourne. 🔬

🔑 **Activité optique**

- Un énantiomère dévie le plan à **droite (+)** → **dextrogyre** (d ou +)

- L'autre dévie à **gauche (−)** → **lévogyre** (l ou −)

- L'angle est mesuré par le **pouvoir rotatoire spécifique [α]**

- Les deux énantiomères ont la **même valeur absolue** de [α] mais de **signe opposé**

- **Mélange racémique** (50/50 des deux énantiomères) → les rotations se compensent → **α = 0** (optiquement inactif)

💡 **Piège classique — (+)/(−) ≠ R/S ≠ D/L**

Au fil de l'histoire, les chimistes ont inventé **3 façons différentes** de "étiqueter" les molécules chirales — chacune répond à une question différente :

- **(+)/(−)** — "Dans quel sens la molécule fait-elle tourner la lumière ?" → réponse **expérimentale**, mesurée au polarimètre. On ne peut pas la prédire sur le papier.

- **R/S** — "Comment sont arrangés les 4 substituants autour du C* dans l'espace ?" → réponse **théorique**, calculée par les règles CIP (Section III). Pas besoin de polarimètre.

- **D/L** — "La molécule ressemble-t-elle au D- ou au L-glycéraldéhyde ?" → convention **historique** encore utilisée pour les sucres et les acides aminés.

Ces 3 questions sont **indépendantes** → leurs réponses ne se déduisent pas les unes des autres. C'est comme demander : la couleur d'une voiture, sa marque, et son prix — trois informations qui n'ont aucune corrélation obligatoire.

⚠️ **Conséquence concrète :** un composé R peut être (+) ou (−). Un composé D peut être (+) ou (−). Exemple classique : le **D-glucose** est (+), mais le **D-fructose** est (−) — même préfixe D, sens opposés !

[FIGURE chimie_ch13_fig01_polarimetre.png]

**Figure 2b** — Polarimètre : la lumière polarisée traverse la solution chirale et son plan est dévié de l'angle α

## III. 🏷️ Règles CIP et configurations R/S

### 1. Pourquoi a-t-on besoin d'un système de classement ?

En Section II, tu as appris à **repérer** un C* (4 substituants différents → chiralité). Mais repérer ne suffit pas : face à un C*, il faut pouvoir dire **dans quel sens** les substituants sont arrangés dans l'espace, et **donner un nom** à cette configuration → **R** ou **S**.

Pour ça, il faut d'abord savoir **classer les 4 substituants par ordre de priorité**. C'est exactement le rôle des **règles CIP** (Cahn-Ingold-Prelog, 1966). Tu les connais déjà en partie : ce sont les mêmes règles que tu as utilisées au Ch. 11 pour déterminer Z/E ! Ici, on les applique autour d'un C* au lieu d'une double liaison C=C.

### 2. Les règles CIP — le système de priorité

#### Règle 1 — Comparer les numéros atomiques (Z)

On regarde les 4 atomes **directement liés** au C*. L'atome de **numéro atomique Z le plus élevé** gagne la priorité la plus haute. C'est la règle la plus simple et celle qui suffit dans la majorité des cas.

Ordre de priorité des atomes courants (à connaître)
I (53) > Br (35) > Cl (17) > S (16) > F (9) > O (8) > N (7) > C (6) > H (1)

Exemple : un C* porte −OH, −NH₂, −CH₃, −H → on compare les atomes directement liés : O (8) > N (7) > C (6) > H (1). Priorités : 1 = OH, 2 = NH₂, 3 = CH₃, 4 = H. ✅ C'est terminé en une étape.

#### Règle 2 — En cas d'égalité : s'éloigner du C* pas à pas

Parfois deux substituants commencent par le **même atome**. Exemple : −CH₃ et −CH₂CH₃ commencent tous les deux par un C. Comment les départager ?

On regarde **l'atome suivant** dans la chaîne (la « deuxième couche » d'atomes, en s'éloignant du C*) :

- −CH₃ → après le C, on trouve : **H, H, H**

- −CH₂CH₃ → après le C, on trouve : **C, H, H**

On compare les atomes de cette deuxième couche **par ordre décroissant**. Pour −CH₂CH₃ : le meilleur atome est C (6). Pour −CH₃ : le meilleur est H (1). Donc C > H → **−CH₂CH₃ > −CH₃**. Si c'est encore égal, on passe à la couche suivante, et ainsi de suite jusqu'à trouver une différence.

💡 **Astuce — Penser en « couches d'oignon »**

Imagine que tu épluches les substituants couche par couche en t'éloignant du C*. À chaque couche, tu compares les atomes. Dès qu'il y a une différence → tu as ta réponse. C'est comme comparer deux mots dans un dictionnaire : lettre par lettre, jusqu'à trouver une différence.

#### Règle 3 — Liaisons multiples : le « dédoublement fictif »

💡 **Cette règle s'applique rarement au premier niveau.** Un C* est sp³ : il ne porte lui-même aucune liaison double ou triple. La règle 3 n'intervient que quand deux substituants ont le même premier atome (règles 1 et 2 insuffisantes), et que c'est l'un des atomes **plus loin dans la chaîne** qui porte une liaison multiple — comme le carbone de −CHO vs −CH₂OH dans le glycéraldéhyde.

Que faire si un substituant contient une double ou triple liaison ? On utilise une astuce : on **dédouble fictivement** les atomes impliqués.

🔑 **Dédoublement des liaisons multiples**

Chaque liaison multiple est « ouverte » et remplacée par des **atomes fictifs** (entre parenthèses) — comme si on dupliquait chaque atome impliqué autant de fois qu'il y a de liaisons supplémentaires. Le schéma ci-dessous illustre les cas C=O, C≡N et la conséquence concrète sur −CHO vs −CH₂OH.

Rappel : **O a Z = 8**, **H a Z = 1**.

Après dédoublement fictif, on obtient les scores :

− −CHO voit → **(O=8, O fictif=8, H=1)** → score : **(8, 8, 1)**

− −CH₂OH voit → **(O=8, H=1, H=1)** → score : **(8, 1, 1)**

On compare terme à terme :

1ᵉʳ terme : 8 vs 8 → ex æquo, on passe au suivant

2ᵉ terme : **8 (−CHO) vs 1 (−CH₂OH)** → **−CHO gagne ✅**

Conclusion : **−CHO > −CH₂OH**

[FIGURE chimie_ch13_fig_dedoublement_CIP.png]

**Figure 3a** — Règle CIP 3 : dédoublement fictif des liaisons multiples. −CHO « voit » deux O → prioritaire sur −CH₂OH qui n'en voit qu'un.

### 3. Les deux représentations 3D que tu dois maîtriser

Avant de déterminer R ou S, il faut savoir **lire une molécule en 3D sur une feuille**. Au concours, on utilise deux conventions de projection. Chacune indique quels substituants sont « devant » (vers toi) et lesquels sont « derrière » (loin de toi) — c'est essentiel pour la méthode R/S.

#### a) Représentation de Cram — la plus intuitive

C'est celle que tu utilises depuis le début de ce chapitre. Trois types de traits autour du C* :

- **Trait plein** ── : substituant **dans le plan** de la feuille

- **Trait gras / coin** ◄ : substituant qui **sort vers toi** (en avant)

- **Trait pointillé** ┈┈ : substituant qui **s'enfonce derrière** (en arrière)

👉 Retiens bien : **trait pointillé = en arrière**. C'est la clé de la méthode R/S qu'on verra juste après.

#### b) Projection de Fischer — la croix aplatie

Utilisée surtout pour les **sucres** et les **acides aminés**. L'idée de base : on prend la molécule, on l'aplatit sur la feuille en formant une **croix**, et le C* se retrouve au croisement.

La convention à retenir :

- Les traits **verticaux** (haut et bas) → ce sont des liaisons simples dans le plan** de la feuille. La chaîne carbonée principale s'étend le long de cet axe.

- Les traits **horizontaux** (gauche et droite) → ce sont des **liaisons avant/arrière** qui sortent du plan. Par convention, les substituants horizontaux **viennent vers toi** (comme un trait gras en Cram).

- La **chaîne carbonée principale** est toujours verticale, avec le carbone portant le **groupe fonctionnel le plus "chargé" (aldéhyde, acide, cétone…) en haut**. En pratique : CHO ou COOH en haut, CH₃ ou CH₂OH en bas. Pour le glycéraldéhyde : CHO en haut, CH₂OH en bas.

[FIGURE chimie_ch13_fig_cram_vs_fischer.png]

**Figure 3b** — Cram (à gauche) vs Fischer (à droite) : les deux conventions pour représenter le C* en 3D sur une feuille.

🔑 **Résumé Cram vs FischerCram** : trait pointillé ┈┈ = en arrière, trait gras ◄ = devant, trait plein ── = dans le plan.

**Fischer** : vertical = **liaisons qui s'éloignent de toi** (chaîne principale), horizontal = **liaisons vers toi** → substituants **devant l'observateur**.

#### 🔄 Passer de Cram à Fischer — méthode pas à pas

Au concours, on te donne très souvent un Cram et on te demande la Fischer (ou l'inverse). Voici la **méthode rigoureuse** qui marche à tous les coups, même avec 6 carbones. On va l'appliquer directement sur l'exemple de la Figure 3b.

🔑 **Cram → Fischer — méthode en 4 étapes**

- **Repérer les bouts de chaîne** : identifier le carbone le plus **oxydé** (COOH, CHO, C=O) et le plus **réduit** (CH₂OH, CH₃). Le plus oxydé ira **tout en haut** de la Fischer, le plus réduit **tout en bas**. Ce sont les deux extrémités de l'axe vertical.

- **Compter les carbones de la chaîne** et en déduire le nombre de traits horizontaux. Si tu as **n carbones** dans la chaîne, tu auras **n − 2 traits horizontaux** (les 2 carbones des bouts sont déjà placés en haut et en bas de l'axe vertical). Exemples : 3 C → 1 trait horizontal, 4 C → 2 traits, 6 C → 4 traits.

- **Pour chaque C* de la chaîne**, regarde en Cram de quel côté ses liaisons avant/arrière pointent (vers le haut ou vers le bas). C'est ça qui détermine comment placer les substituants en Fischer :

**🔵 Les liaisons avant/arrière pointent vers le HAUT** (vers le bout le plus oxydé, celui qu'on a mis en haut de Fischer) :

Imagine que la molécule en Cram est un **bonhomme couché** : sa **tête = le carbone le plus oxydé** (CHO, COOH…) et ses **pieds = le carbone le plus réduit** (CH₃, CH₂OH…). Toi, tu te places **au-dessus de lui** et tu regardes vers le bas — tu vois sa tête en haut, ses pieds en bas, exactement comme la Fischer que tu vas dessiner. Dans cette vue "du dessus" :

→ le substituant en **avant** (trait gras ◄ en Cram) se retrouve à ta **gauche** → il va à **gauche** en Fischer

→ le substituant en **arrière** (trait pointillé ┈┈ en Cram) se retrouve à ta **droite** → il va à **droite** en Fischer

[FIGURE chimie_ch13_fig_bonhomme_couch_vue_dessus.png]

**Figure 3b (détail)** — Vue du dessus : le substituant en avant (trait gras) tombe à gauche en Fischer, le substituant en arrière (pointillé) tombe à droite.

⚠️ Attention — ce gauche/droite dépend de l'orientation du Cram ! Ici (Fig 3b), CHO (la tête) est à **gauche** du Cram, donc quand tu te mets au-dessus avec la tête en haut, l'avant tombe bien à gauche. Si dans un autre exercice le plus oxydé était à **droite** du Cram, ce serait l'inverse : avant → droite Fischer, arrière → gauche Fischer. L'important c'est de toujours **orienter le bonhomme avec la tête en haut** avant de regarder.

**🔴 Les liaisons avant/arrière pointent vers le BAS** (vers le bout le plus réduit, celui qu'on a mis en bas de Fischer) :

Cette fois, tu as **deux façons** de raisonner (choisis celle qui te parle le plus, les deux donnent le même résultat) :

**Façon 1 — « j'inverse devant/derrière dans ma tête »** : tu fais comme si le devant était le derrière, et le derrière était le devant. Ensuite tu appliques la même règle que 🔵. Concrètement :

→ ce qui était en avant (gras) → après inversion c'est "derrière" → il va du **même côté** que l'arrière en 🔵

→ ce qui était en arrière (pointillé) → après inversion c'est "devant" → il va du **même côté** que l'avant en 🔵

**Façon 2 — « je regarde du dessous »** : au lieu de te mettre au-dessus, tu te mets **en dessous** de la molécule et tu regardes vers le haut. L'avant et l'arrière s'inversent naturellement dans ta vue → tu lis directement gauche/droite sans rien inverser dans ta tête.

📌 Les deux façons donnent exactement le même placement. Choisis ta préférée et utilise-la systématiquement.

- **Dessiner la Fischer** : trace l'axe vertical (le plus oxydé en haut, le plus réduit en bas), puis les traits horizontaux pour chaque C* avec les substituants placés à gauche et à droite selon l'étape 3.

#### Exemple concret — appliquons sur la Figure 3b

Notre molécule en Cram a la chaîne : **CHO — C*₂(H, Cl) — C*₃(HO, Br) — CH₃**.

[FIGURE chimie_ch13_fig_cram_vs_fischer.png]

**Figure 3b** — Cram (à gauche) vs Fischer (à droite) : les deux conventions pour représenter le C* en 3D sur une feuille.

💡 **Étape 1 — Bouts de chaîne**

Le plus oxydé = **CHO** (aldéhyde) → en **haut** de la Fischer.

Le plus réduit = **CH₃** → en **bas**.

💡 **Étape 2 — Compter les carbones**

4 carbones dans la chaîne → **4 − 2 = 2 traits horizontaux** (un pour C2, un pour C3).

💡 **Étape 3 — Placer les substituantsC2 (H et Cl)** : en Cram, les liaisons avant/arrière de C2 pointent **vers le haut** (vers CHO). On regarde du dessus — rien à inverser.

→ H est en **avant** (trait gras) → il va à **gauche** de la Fischer ✅

→ Cl est en **arrière** (trait pointillé) → il va à **droite** de la Fischer ✅

**C3 (HO et Br)** : en Cram, les liaisons avant/arrière de C3 pointent **vers le bas** (vers CH₃). On inverse : **le derrière devient le devant, le devant devient le derrière**.

→ HO était en **avant** (trait gras) → après inversion il est "derrière" → il va à **gauche** de la Fischer ✅

→ Br était en **arrière** (trait pointillé) → après inversion il est "devant" → il va à **droite** de la Fischer ✅

💡 **Étape 4 — Dessiner**

On obtient la Fischer : CHO en haut, CH₃ en bas, et sur les deux traits horizontaux :

C2 : H à gauche — Cl à droite

C3 : HO à gauche — Br à droite

C'est exactement ce qu'on voit sur la Figure 3b ! ✅

### 4. Attribuer R ou S — la méthode en 4 étapes

Maintenant que tu sais lire les représentations 3D, tu peux passer à la méthode R/S. Tu as classé les 4 substituants d'un C* par priorité CIP (§2). Il reste à transformer cette information en un nom : **R** ( Rectus = droit, en latin) ou **S** ( Sinister = gauche). L'idée est simple : on regarde dans quel sens « tournent » les 3 substituants les plus prioritaires, en cachant le moins prioritaire **derrière** — en Cram, ça veut dire en **trait pointillé** ; en Fischer, sur un trait **vertical**. C'est comme regarder un volant de voiture : si les mains tournent dans le sens des aiguilles → R, dans le sens inverse → S.

🔑 **Méthode R/S — 4 étapes systématiques**

- **Identifier** le C* et ses 4 substituants

- **Classer** par CIP : A (plus prioritaire) > B > C > D (moins prioritaire)

- **Placer le D vers l'arrière** — en représentation de Cram, le D doit être en **trait pointillé** (dirigé vers l'arrière, loin de toi). C'est comme si tu regardais la molécule « de face » en cachant le D derrière.

- **Lire le sens A → B → C** sur les 3 substituants restants :

- Sens **horaire** (comme les aiguilles d'une montre) → **R** ↻

- Sens **antihoraire** (sens inverse) → **S** ↺

[FIGURE chimie_ch13_fig_methode_RS_cercle.png]

**Figure 3c** — Méthode R/S : on lit le sens A→B→C avec le D caché derrière. Horaire → R, antihoraire → S.

💡 **Piège classique — Et si le D est DEVANT (en trait gras) ?**

Dans les QCM, la molécule n'est pas toujours dessinée avec le D en arrière. Si le D est en **trait gras** (vers toi) en Cram, ou sur un trait **horizontal** en Fischer, tu as 2 solutions :

- **Solution 1** — Tourner mentalement la molécule pour mettre le D en arrière, puis lire normalement

- **Solution 2 (plus rapide)** — Lire le sens A→B→C tel quel, puis **inverser le résultat** : horaire → **S**, antihoraire → **R**. Pourquoi ? Parce que tu regardes « depuis le mauvais côté » — c'est comme lire une horloge par derrière, les aiguilles semblent tourner à l'envers.

🧠 Mnémotechnique Fischer : **« Fischer Horizontal = vers toi = D devant = INVerser »**

### 5. Exemple détaillé pas à pas : le 2-bromobutane

Appliquons la méthode complète sur une molécule concrète : le **2-bromobutane** (CH₃−C*HBr−CH₂CH₃). Tu l'as déjà croisé en Section II — on avait identifié un C* en C2.

**① Identifier les 4 substituants du C*** : H, Br, −CH₃, −CH₂CH₃ → 4 différents ✅

**② Classer par CIP** :

- **Br** → Z = 35 → le plus gros numéro atomique → **A (priorité 1)**

- **−CH₂CH₃** vs **−CH₃** → les deux commencent par C (Z = 6) → égalité en première couche ! On passe à la couche suivante :

- −CH₂CH₃ : après le C, on trouve **C**, H, H

- −CH₃ : après le C, on trouve **H**, H, H

Le meilleur atome : C (6) > H (1) → **−CH₂CH₃ gagne** → **B (priorité 2)** ; −CH₃ → **C (priorité 3)**

- **H** → Z = 1 → le plus petit → **D (priorité 4)**

Résultat : **Br (A) > −CH₂CH₃ (B) > −CH₃ (C) > H (D)③ Mettre H (D) vers l'arrière** (en trait pointillé dans la représentation de Cram)

**④ Lire le sens A→B→C** : on suit Br → −CH₂CH₃ → −CH₃. Si la flèche tourne dans le sens horaire → **R**. Si antihoraire → **S**. (Le sens dépend de la configuration spatiale de la molécule dessinée.)

[FIGURE chimie_ch13_fig_2bromobutane_RS.png]

**Figure 3d** — Le 2-bromobutane vu en représentation de Cram : configuration R (sens horaire) à gauche, configuration S (sens antihoraire) à droite.

×

medeos-sante.fr