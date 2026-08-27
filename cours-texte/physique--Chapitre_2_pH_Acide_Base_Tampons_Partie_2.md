Chapitre 2 : pH, acide-base et solutions tampons - MEDEOS — Partie 2

Chapitre 2 — Partie 2

# pH, acide-base et solutions tampons

Pourquoi ton sang ne tolère pas plus de ±0,04 unité de pH — Henderson-Hasselbalch, le tampon bicarbonate et les 4 troubles acido-basiques.

## 🔄 Où on en est

Dans la Partie 1, tu as compris que le pH n'est qu'une façon plus lisible d'écrire la concentration en ions H⁺ : on prend l'opposé de son logarithme, et chaque unité de pH correspond à un facteur 10 sur cette concentration. Tu as aussi posé la définition moderne des acides et des bases (un acide cède un proton, une base le capte) et, surtout, tu as distingué les acides forts, qui lâchent tout leur H⁺ d'un coup, des acides faibles, qui n'en libèrent qu'une petite fraction. Le Ka et le pKa te servent maintenant à mesurer précisément cette tendance à se dissocier.

Ce sont justement les acides faibles, capables de garder une partie de leur proton, qui rendent possibles les solutions tampons. Dans cette partie, on découvre comment un tampon stabilise le pH, on manipule l'équation d'Henderson-Hasselbalch qui le décrit, puis on l'applique au tampon le plus important de ton sang : le bicarbonate.

## III. Henderson-Hasselbalch et les solutions tampons

On arrive au concept central du chapitre : la **solution tampon**. C'est elle qui permet à ton corps de maintenir son pH à 7,40 malgré l'apport quotidien d'acides et de bases. Et l'équation qui la régit — **Henderson-Hasselbalch** — est probablement la formule la plus utile en physiologie clinique.

### 1. 🤔 Le problème — Comment « bloquer » le pH contre les ajouts d'acide ?

Verse 1 mmol de HCl dans 1 litre d'eau pure : le pH chute brutalement de 7 à 3 (variation de **4 unités**, soit [H⁺] multipliée par 10 000). Verse la même quantité de HCl dans 1 litre de sang : le pH baisse à peine, de 7,40 à 7,39. Comment le sang fait-il ce miracle ?

Il contient des **solutions tampons** — des couples acide faible / base faible qui « absorbent » les apports d'acide ou de base sans laisser le pH s'affoler. Ce mécanisme est la base de toute physiologie acido-basique.

### 2. Définition et fonctionnement d'une solution tampon

**🔑 Solution tampon**

Une **solution tampon** est une solution qui résiste aux variations de pH quand on lui ajoute un acide ou une base, ou quand on la dilue (raisonnablement). Elle est constituée d'un **acide faible AH** et de sa **base conjuguée A⁻** en quantités comparables.

**Mécanisme :** quand on ajoute des H⁺, ils sont neutralisés par A⁻ (qui se transforme en AH). Quand on ajoute des OH⁻, ils sont neutralisés par AH (qui se transforme en A⁻ + H₂O). Le système « absorbe » les apports sans laisser le pH s'affoler — d'où le nom de « tampon ».

🧠 **Analogie** : pense au tampon comme à une **éponge à protons**. Quand tu verses des H⁺ → la base A⁻ les éponge en devenant AH. Quand tu verses des OH⁻ → l'acide AH lâche un H⁺ pour neutraliser et devient A⁻. Le pH bouge à peine tant que l'éponge n'est pas saturée. C'est la même idée qu'un **amortisseur de voiture** : tu absorbes les chocs au lieu de les subir.

[FIGURE physique_ch2_fig07_tampon_mecanisme.png]

**Figure 7** — Mécanisme du tampon en action : ajout de H⁺ → consommés par A⁻ ; ajout de OH⁻ → neutralisés par AH. Le pH reste quasi-constant tant que les deux formes restent en quantité comparable.

En pratique, pour fabriquer un tampon il suffit de mélanger les **2 formes du même couple** (AH et A⁻) dans la même solution, en quantités comparables. Exemple typique : un peu d'acide acétique CH₃COOH + un peu d'acétate de sodium CH₃COONa → tu obtiens une solution tampon centrée sur pH ≈ pKa = 4,8. C'est cette double présence (acide + base conjuguée) qui donne au tampon sa capacité d'amortissement.

### 3. L'équation de Henderson-Hasselbalch — LA formule à connaître par cœur

**🔑 LA formule à connaître à vie**

Pour une solution tampon (acide faible AH + base conjuguée A⁻), le pH est donné par l'équation d'Henderson-Hasselbalch :

Équation de Henderson-Hasselbalch
pH = pK a + log ([A⁻] / [AH])
avec [A⁻] = concentration de la base conjuguée, [AH] = concentration de l'acide faible

**🔑 D'où sort cette formule ? (la logique en 4 lignes)**

Elle n'est pas magique : c'est juste le Ka **réécrit en log** et résolu pour le pH. Voici la dérivation :

- On part de la définition du Ka : **Ka = [A⁻] × [H⁺] / [AH]**

- On isole [H⁺] : **[H⁺] = Ka × [AH] / [A⁻]**

- On prend le −log des deux côtés : **−log[H⁺] = −log(Ka) − log([AH]/[A⁻])**

- On reconnaît pH et pKa, et on retourne le ratio (le « − » devant log inverse le rapport) :

**pH = pKa + log([A⁻] / [AH])** ✓

👉 Tu n'as pas besoin de mémoriser la dérivation à vie, mais savoir d'où ça vient rend l'équation beaucoup moins mystérieuse.

**🔑 Lire la formule comme une phrase**

Décompose l'équation en 3 morceaux qui ont chacun un sens clair :

- **pH** = ce qu'on cherche → l' état acido-basique de la solution

- **pKa** = le point de référence du couple (pH où [AH] = [A⁻], les 2 formes équimolaires)

- **log([A⁻]/[AH])** = l' écart par rapport à ce point de référence , dicté par les proportions des 2 formes

Donc la phrase complète c'est : « pH de la solution = point de référence du couple (pKa) + écart dû au déséquilibre entre les 2 formes ». L'équation te dit littéralement **combien le pH s'éloigne du pKa** selon que tu as plus de base ou plus d'acide.

💡 **Mnémo — Le sens du ratio [A⁻] / [AH]**

La **base est TOUJOURS au numérateur**, l'acide au dénominateur. Pour ne jamais te tromper :

« **Base au-dessus → pH au-dessus du pKa** » (les deux montent ensemble : plus de base = plus basique = pH plus haut).

Si tu inverses par erreur ([AH]/[A⁻] au lieu de [A⁻]/[AH]), tu obtiens des signes opposés et tes calculs sont faux. **Toujours base/acide, jamais l'inverse.**

Trois cas à automatiser pour la lire instantanément :

- Quand [A⁻] = [AH] → log(1) = 0 → **pH = pKa** (pouvoir tampon MAXIMAL)

- Quand [A⁻] = 10 × [AH] → log(10) = 1 → **pH = pKa + 1**

- Quand [AH] = 10 × [A⁻] → log(1/10) = −1 → **pH = pKa − 1**

### 4. Plage d'efficacité et pouvoir tampon — Quand un tampon est-il « bon » ?

Un tampon est réellement efficace uniquement sur une **plage limitée de pH** autour du pKa. Au-delà, l'une des deux formes (acide ou base) devient trop minoritaire pour neutraliser efficacement les variations de pH.

**🔑 Plage d'efficacité d'un tampon**

Un tampon est efficace dans la zone :

**pH = pKa ± 1**

En-dessous de pKa − 1, il y a trop peu de base A⁻ pour neutraliser des ajouts d'acide. Au-dessus de pKa + 1, il y a trop peu d'acide AH pour neutraliser des ajouts de base.

Quantitativement, on définit le **pouvoir tampon τ** comme la quantité de H⁺ (ou OH⁻) nécessaire pour faire varier le pH d'une unité. Il s'exprime en Eq·L⁻¹·unité de pH⁻¹.

Pouvoir tampon maximal (à pH = pKa)
τ max ≈ 1,15 × C
avec C = concentration totale en (acide faible + base conjuguée), à pH = pKa où [AH] = [A⁻]

[FIGURE physique_ch2_fig08_cloche_pouvoir_tampon.png]

**Figure 8** — Courbe en cloche du pouvoir tampon : maximal à pH = pKa, quasi-nul hors de la plage pKa ± 1. C'est pourquoi on choisit un tampon dont le pKa est proche du pH visé.

Conséquence très pratique : pour préparer un tampon efficace à un pH cible, il faut choisir un acide faible dont le **pKa est aussi proche que possible du pH visé**. C'est pourquoi en biologie on utilise par exemple :

- **Tampon phosphate** (pKa = 7,2) pour préparer des solutions à pH ~7-7,4

- **Tampon TRIS** (pKa = 8,1) pour des solutions à pH ~8

- **Tampon acétate** (pKa = 4,8) pour des solutions à pH ~5

- **Tampon HEPES** (pKa = 7,5) pour la culture cellulaire

**🧪 Mini-exercice — Calcul de pH par Henderson-HasselbalchÉnoncé :** On prépare une solution tampon acétate en mélangeant 0,1 mol d'acide acétique (pKa = 4,8) et 0,2 mol d'acétate de sodium dans 1 L d'eau. Quel est le pH de cette solution ?

On donne : log 2 ≈ 0,30 ; log 3 ≈ 0,48.

👁️ Voir la correction

**🎯 Méthode — On applique Henderson-Hasselbalch pas à pas.Étape 1 — Écrire la formule.**

pH = pKa + log ([A⁻] / [AH])

où AH = acide (forme protonée) et A⁻ = base conjuguée (forme déprotonée).

**Étape 2 — Identifier AH et A⁻ dans l'énoncé.**

- **AH** = acide acétique CH₃COOH → **[AH] = 0,1 mol/L** (0,1 mol dans 1 L)

- **A⁻** = ion acétate CH₃COO⁻ (apporté par l'acétate de sodium, qui est totalement dissocié en solution) → **[A⁻] = 0,2 mol/L**

💡 Astuce : l'acétate de sodium CH₃COONa libère directement CH₃COO⁻ (Na⁺ est spectateur). Donc tout l'acétate apporté = forme A⁻.

**Étape 3 — Calculer le ratio [A⁻] / [AH].**

[A⁻] / [AH] = 0,2 / 0,1 = **2Étape 4 — Calculer log(2).**

log(2) ≈ **0,3** (valeur à connaître par cœur)

**Étape 5 — Sommer.**

pH = 4,8 + 0,3 = 5,1✅ Réponse :** le pH de la solution est de **5,1**.

**🧠 Interprétation.** Le pH (5,1) est légèrement supérieur au pKa (4,8) — c'est logique : il y a deux fois plus de base conjuguée (A⁻) que d'acide (AH), donc la solution est un peu plus basique que le pKa. Ce pH tombe dans la plage d'efficacité du tampon acétate (pKa ± 1 = 3,8 à 5,8) : la solution résistera efficacement aux ajouts modérés d'acide ou de base.

**🧪 Mini-exercice — Choisir le bon tampon pour pH 7,4Énoncé :** Pour préparer une solution tampon à pH 7,4 (pH physiologique), tu disposes de trois acides faibles : acide acétique (pKa = 4,8), tampon phosphate (pKa = 7,2), tampon TRIS (pKa = 8,1). Lequel choisir et pourquoi ?

👁️ Voir la correction

**🎯 Méthode — On applique la règle d'or des tampons.Étape 1 — La règle à connaître.**

Un tampon est efficace dans la plage **[pKa − 1 ; pKa + 1]**.

💡 Au centre (pH = pKa), la capacité tampon est maximale. Aux bords, elle s'effondre.

**Étape 2 — Calculer la plage d'efficacité de chaque tampon.**

|

| Tampon
| pKa
| Plage efficace
| pH 7,4 dedans ?

| Acétate
| 4,8
| 3,8 → 5,8
| ❌ Non (trop loin)

| **Phosphate**
| **7,2**
| **6,2 → 8,2**
| ✅ Oui (proche du centre)

| TRIS
| 8,1
| 7,1 → 9,1
| ⚠️ Oui mais près du bord

**Étape 3 — Départager les candidats restants (phosphate vs TRIS).**

Les deux sont dans leur plage, mais le **meilleur tampon est celui dont le pKa est le plus proche du pH visé** (parce qu'au centre, les deux formes AH et A⁻ sont en quantités comparables → capacité tampon maximale).

- |pH − pKa| pour phosphate = |7,4 − 7,2| = **0,2** → très proche du centre ✅

- |pH − pKa| pour TRIS = |7,4 − 8,1| = **0,7** → près du bord inférieur ⚠️

**✅ Réponse :** on choisit le **tampon phosphate (pKa = 7,2)**. Son pKa est à seulement 0,2 unité du pH cible 7,4 → ratio [A⁻]/[AH] ≈ 1,6 (les deux formes restent en quantités comparables → grande capacité tampon).

**🧠 Et c'est pour ça que la nature l'a choisi.** Le tampon phosphate est précisément le tampon intracellulaire et urinaire de l'organisme humain — son pKa de 7,2 est parfaitement aligné sur le pH physiologique (7,4). Ce n'est pas un hasard, c'est de la chimie optimale.

### 5. Démonstration spectaculaire — Pouvoir tampon en action

Pour visualiser concrètement la puissance d'un tampon, comparons l'effet d'un même ajout d'acide dans deux milieux :

[FIGURE physique_ch2_fig03_demo_pouvoir_tampon.png]

**Figure 3** — Même ajout de HCl dans l'eau pure et dans un tampon : le pH chute de 4 unités dans l'eau mais reste quasi-constant dans le tampon. Facteur d'amortissement : ~50.

C'est ce mécanisme qui protège ton sang contre les apports quotidiens d'acides : acide lactique du muscle après l'effort, CO₂ du métabolisme cellulaire, acides cétogéniques en jeûne… Sans les tampons sanguins, ton pH oscillerait toute la journée entre des valeurs incompatibles avec la vie.

## IV. Le tampon bicarbonate et les autres tampons sanguins

Voici l'application clinique reine du chapitre : le **tampon bicarbonate**. C'est le principal tampon du plasma, à l'origine du maintien du pH à 7,40. Sa particularité : il est "ouvert" sur les poumons et sur les reins, ce qui lui donne une puissance régulatrice extraordinaire. On finit en survolant les autres tampons sanguins : phosphate, protéines plasmatiques et hémoglobine.

### 1. Le couple CO₂ / HCO₃⁻ — Un tampon ouvert sur deux organes

Ton métabolisme produit chaque jour **200 à 300 mmol d'acides** (lactique, CO₂, cétogéniques…). Dans 5 L d'eau pure → pH 1-2. Dans ton sang → pH reste verrouillé à 7,40. La clé : **le tampon bicarbonate**.

**🔑 Qui est le tampon ? (le réflexe AH / A⁻)**

Comme tout tampon (revoir section III), c'est un couple **acide / base conjuguée** :

- **Forme acide** = **(CO₂ + H₂O)** — ce duo peut libérer un H⁺

- **Forme base** = **HCO₃⁻** (ion bicarbonate)

**CO₂ + H₂O ⇌ HCO₃⁻ + H⁺** (pKa = **6,1**)

💡 **« Mais le CO₂ tout seul n'a pas de H⁺ à donner — comment peut-il être un acide ? »** Bonne question : tout seul, il ne l'est pas. Mais dès qu'il rencontre de l'eau, il forme furtivement de l'acide carbonique H₂CO₃, qui se dissocie immédiatement en H⁺ + HCO₃⁻. C'est donc l'ensemble (CO₂ + H₂O) qui joue le rôle d'acide. Comme l'eau est partout dans le sang, on dit simplement « le CO₂ est la forme acide » par raccourci — et le pKa **apparent** de 6,1 intègre cette étape d'hydratation invisible.

👉 **Et voilà le rôle clé de l'ion bicarbonate HCO₃⁻** : c'est lui qui va **éponger les H⁺ libérés** par la réaction (CO₂ + H₂O → HCO₃⁻ + H⁺). Comme l'équation est un équilibre, elle se lit dans les deux sens : quand un excès de H⁺ arrive dans le sang (acide produit par le métabolisme, effort musculaire, etc.), les ions HCO₃⁻ (présents en réserve à 24 mmol/L) les captent → la réaction est tirée **vers la gauche** → ça reforme du CO₂ + H₂O → le CO₂ est ensuite éliminé par les poumons à l'expiration. Le H⁺ a disparu, le pH est sauvé. **C'est ÇA le mécanisme du tampon bicarbonate** : HCO₃⁻ neutralise les protons, et l'organisme évacue le CO₂ par la respiration.

Sur le papier, ce pKa de 6,1 est loin du pH sanguin 7,4 → tampon médiocre. Dans la réalité → imbattable, grâce à 3 super-pouvoirs que voici.

**🔑 Les 3 super-pouvoirs du tampon bicarbonate1. Concentration élevée — [HCO₃⁻] ≈ 24 mmol/L.** 20× plus que le CO₂ dissous (1,2 mmol/L) → réserve énorme. Chaque H⁺ qui arrive est consommé par HCO₃⁻ + H⁺ → CO₂ + H₂O .

**2. CO₂ contrôlé par les poumons (levier rapide).** Hyperventiler = expirer plus de CO₂ → l'équilibre CO₂ ⇌ HCO₃⁻ + H⁺ se déplace vers la **gauche** → des H⁺ sont consommés pour reformer du CO₂ → **pH remonte** (principe de Le Chatelier). Hypoventiler fait l'inverse → pH baisse. Réponse en secondes-minutes.

**3. HCO₃⁻ contrôlé par les reins (levier lent mais profond).** En acidose, le rein **réabsorbe le HCO₃⁻** filtré et **sécrète des H⁺** dans les urines → [HCO₃⁻] sanguin remonte. En alcalose, il fait l'inverse : il **laisse fuir le HCO₃⁻** dans les urines. Réponse en heures-jours — c'est la seule façon de régler durablement le pH.

[FIGURE physique_ch2_fig12_3_superpouvoirs_bicarbonate.png]

**Figure 12** — Le tampon bicarbonate : un couple acide (CO₂ + H₂O) / base (HCO₃⁻) avec un déséquilibre 20:1, ouvert sur 2 organes régulateurs (poumons rapides, reins lents).

### 2. Loi de Henry appliquée au CO₂ — Du gaz alvéolaire au gaz dissous

#### 🤔 Pourquoi on a besoin de cette étape ?

Pour appliquer Henderson-Hasselbalch au sang, il nous faut deux concentrations : celle de la **base** ([HCO₃⁻], facile à doser dans une prise de sang) et celle de l'**acide** ([CO₂ dissous]). Mais en clinique, on ne mesure JAMAIS [CO₂ dissous] directement. Ce qu'on mesure en gazométrie, c'est la **PCO₂** — la pression partielle du CO₂ dans l'air alvéolaire (en mmHg). Il faut donc un pont qui transforme cette PCO₂ en [CO₂ dissous] dans le plasma.

🤔 **D'abord, c'est quoi une « pression partielle » ? (loi de Dalton)**

Quand plusieurs gaz sont mélangés dans une enceinte (comme dans tes poumons : O₂ + N₂ + CO₂ + vapeur d'eau), chacun se comporte comme s'il était seul . Chaque gaz exerce sa propre **pression partielle** sur les parois, et la pression totale du mélange est juste la somme de ces pressions partielles. C'est la **loi de Dalton** (1801).

Loi de Dalton (pression partielle d'un gaz dans un mélange)
P i = x i × P totale
avec x i = **fraction molaire** du gaz i (= nombre de moles de gaz i ÷ nombre total de moles de tous les gaz). Et P totale = P 1 + P 2 + P 3 + …

🧠 **Image mentale** : imagine 100 personnes dans une pièce, dont 21 portent des t-shirts O₂, 78 des t-shirts N₂ et 1 un t-shirt CO₂. Chacun donne des coups sur les murs au hasard. La pression totale (= tous les coups confondus) se répartit proportionnellement : 21 % des coups viennent du « groupe O₂ », 78 % du « groupe N₂ », 1 % du « groupe CO₂ ». Chaque pression partielle est **la part de la pression totale due à ce gaz**.

📐 **Application à la respiration** : l'air atmosphérique au niveau de la mer a une P_atm = 760 mmHg. Sa composition molaire est ~21 % O₂, ~78 % N₂, ~0,04 % CO₂. Donc :

- P O₂ atmosphérique = 0,21 × 760 ≈ **160 mmHg**

- P N₂ atmosphérique = 0,78 × 760 ≈ 593 mmHg

- P CO₂ atmosphérique = 0,0004 × 760 ≈ 0,3 mmHg (très peu)

Dans tes alvéoles, après échange gazeux avec le sang, la PCO₂ remonte à ~40 mmHg (le sang veineux apporte du CO₂ à éliminer). C'est cette PCO₂ alvéolaire qu'on va relier au CO₂ dissous dans le sang par la loi de Henry, juste après.

🤔 **Ensuite, c'est quoi le « CO₂ dissous » ?**

C'est **simplement la molécule de CO₂ qui se balade dans le plasma** entre les molécules d'eau, sans être attachée à quoi que ce soit. Du gaz CO₂ « noyé » dans du liquide, comme du gaz dans une boisson gazeuse. Pas de réaction chimique : juste de la présence physique .

Dans le sang, le CO₂ produit par les cellules existe en réalité sous **3 formes différentes** qui coexistent :

- **1. CO₂ dissous** (≈ 5 %) — molécule CO₂ « noyée » physiquement dans le plasma, n'a pas (encore) réagi

- **2. HCO₃⁻ (bicarbonate)** (≈ 90 %) — la forme issue de la réaction CO₂ + H₂O → HCO₃⁻ + H⁺, déjà transformée chimiquement

- **3. CO₂ lié à l'hémoglobine** (≈ 5 %) — fixé sur les protéines des globules rouges

👉 Pour Henderson-Hasselbalch, on s'intéresse **uniquement au CO₂ dissous**, car c'est lui la « forme acide » du couple (c'est lui qui peut éventuellement réagir avec l'eau pour libérer un H⁺). Le HCO₃⁻, lui, est déjà le produit final de cette dissociation → il est la **base** du couple, pas l'acide.

🧠 **Image mentale — la bouteille de soda**

Imagine une bouteille de soda fermée. Il y a du CO₂ sous pression dans l'espace au-dessus du liquide, et du CO₂ dissous dans la boisson elle-même. Les deux sont liés : **en mesurant le CO₂ AU-DESSUS du liquide (sa pression), on peut déduire combien de CO₂ est dissous DANS le liquide**. C'est ça, la loi de Henry : un simple coefficient de proportionnalité qui fait le pont entre les deux.

👉 C'est exactement ce qui se passe entre le sang et l'air des poumons :

|

| Bouteille de soda 🥤
| Sang ↔ poumons 🫁

| Pression du CO₂ dans l'espace au-dessus du liquide
| **PCO₂ alvéolaire** (ce qu'on mesure à la gazométrie)

| CO₂ dissous dans la boisson
| **[CO₂ dissous]** dans le plasma (ce qu'on cherche)

| Loi de Henry → relie les deux
| Même loi de Henry → relie les deux

Bon, maintenant qu'on sait ce qu'on cherche ([CO₂ dissous] dans le plasma), comment le calcule-t-on à partir de ce qu'on mesure (PCO₂ alvéolaire) ? Le pont, c'est la **loi de Henry** (qu'on a évoquée au ch.1 sur les gaz dissous) : la quantité d'un gaz qui se dissout dans un liquide est proportionnelle à la pression de ce gaz au-dessus du liquide.

Loi de Henry pour le CO₂ (à 37 °C, dans le sang)
[CO₂ dissous] = α × P CO₂
avec α = 0,03 mmol·L⁻¹·mmHg⁻¹ (coefficient de solubilité du CO₂ dans le sang à 37 °C) et P CO₂ = pression partielle de CO₂ alvéolaire en mmHg

🔑 **Comment lire la formule**

- **PCO₂** = ce qu'on mesure à la gazométrie (la « force » avec laquelle le CO₂ pousse au-dessus du sang dans les alvéoles)

- **α (alpha)** = le « coefficient de solubilité » = à quel point le CO₂ aime se dissoudre dans le sang à 37 °C. C'est une constante physique : 0,03 mmol·L⁻¹·mmHg⁻¹. Tu n'as pas à la retrouver, elle est donnée dans l'énoncé.

- **[CO₂ dissous]** = ce qu'on cherche pour utiliser Henderson-Hasselbalch (la concentration réelle de CO₂ « acide » dans le plasma)

Application numérique avec les valeurs physiologiques normales (PCO₂ alvéolaire = 40 mmHg) :

[CO₂ dissous] = 0,03 × 40 = **1,2 mmol/L**

Compare maintenant ce chiffre à la concentration en bicarbonate : **[HCO₃⁻] = 24 mmol/L**. La base est **20 fois plus concentrée** que l'acide. 👉 **Et c'est exactement ce qui montre que le HCO₃⁻ est notre solution tampon** : il est massivement présent dans le sang (20 fois plus que le CO₂ acide), prêt à éponger n'importe quel H⁺ qui débarque dans la circulation. Pour chaque molécule de CO₂ qui se transforme en H⁺ + HCO₃⁻, il y a 20 ions HCO₃⁻ déjà en réserve pour faire l'inverse et neutraliser ce H⁺. Le tampon est chargé d'avance .

C'est précisément ce déséquilibre 20:1 qui décale le pH sanguin du pKa (6,1) vers le pH physiologique (7,4) — on le démontre par le calcul dans la section suivante.

### 3. Henderson-Hasselbalch appliquée au sang — Le calcul qui valide pH = 7,4

Voici l'équation centrale de la physiologie acido-basique. La formule que tout médecin manipule devant une gazométrie :

Henderson-Hasselbalch pour le sang
pH = 6,1 + log ([HCO₃⁻] / (0,03 × P CO₂ ))
avec [HCO₃⁻] en mmol/L et PCO₂ en mmHg

#### 🤔 D'où sort cette formule du sang ?

On a tous les ingrédients depuis la section III (Henderson-Hasselbalch générale) et la section précédente (loi de Henry). Reste juste à les assembler. Voici le raisonnement en 3 étapes simples :

**🔑 Construction pas-à-pasÉtape 1** — On part de la formule générale d'Henderson-Hasselbalch (vue à la section III) :

pH = pKa + log( [base conjuguée] / [acide] )

**Étape 2** — On identifie qui est qui dans le couple **CO₂/HCO₃⁻** :

- **pKa** = 6,1 (le pKa apparent du couple, vu plus haut)

- **Base conjuguée** = HCO₃⁻ → va au numérateur

- **Acide** = CO₂ dissous → va au dénominateur

Ça donne :

pH = 6,1 + log( [HCO₃⁻] / [CO₂ dissous] )

**Étape 3** — Problème : on ne mesure pas [CO₂ dissous] directement en clinique. On mesure la **PCO₂** (gazométrie). Heureusement, la loi de Henry nous donne le pont :

[CO₂ dissous] = 0,03 × PCO₂

On remplace [CO₂ dissous] par 0,03 × PCO₂ dans la formule de l'étape 2 → on retombe exactement sur la formule du sang ci-dessus.

👉 La formule n'est pas magique : c'est juste Henderson-Hasselbalch dans laquelle on a remplacé [CO₂ dissous] par son équivalent mesurable (0,03 × PCO₂). Tu n'as pas à la mémoriser comme une formule mystérieuse — tu peux la **reconstruire à tout moment** à partir de Henderson-Hasselbalch générale + loi de Henry.

Validation avec les valeurs physiologiques normales :

- [HCO₃⁻] ≈ 24 mmol/L (valeur normale : 22-28 mEq/L)

- PCO₂ ≈ 40 mmHg

- 0,03 × PCO₂ = 1,2 mmol/L → [CO₂ dissous]

- Ratio [HCO₃⁻] / [CO₂] = 24 / 1,2 = **20**

- log(20) = log(2 × 10) = log(2) + 1 = 0,3 + 1 = 1,3

- pH = 6,1 + 1,3 = **7,4 ✓**

[FIGURE physique_ch2_fig04_tampon_bicarbonate.png]

**Figure 4** — Le tampon bicarbonate, ouvert sur 2 organes régulateurs : les poumons (rapide, secondes) règlent PCO₂, les reins (lent, heures) règlent [HCO₃⁻].

**🧠 Mnémo Medeos — « Ratio 20:1 = pH 7,4 »**

À retenir à vie : le ratio physiologique **[HCO₃⁻] / [CO₂ dissous] = 20** donne **log(20) = 1,3**, donc pH = 6,1 + 1,3 = 7,4. C'est l'équilibre normal. Tu peux ensuite raisonner en t'écartant de ce ratio :

- Ratio 10:1 → log(10) = 1 → pH = 7,1 (acidose)

- Ratio 40:1 → log(40) ≈ 1,6 → pH = 7,7 (alcalose)

Les variations du numérateur (HCO₃⁻) sont d'origine métabolique . Les variations du dénominateur (PCO₂) sont d'origine respiratoire . C'est exactement ce qu'on va utiliser à la section V pour décoder les 4 troubles acido-basiques.

**🧪 Mini-exercice — Acidose respiratoire chez un patient BPCOÉnoncé :** Un patient atteint de BPCO (broncho-pneumopathie chronique obstructive, donc hypoventilation chronique) a une gazométrie avec [HCO₃⁻] = 30 mmol/L et PCO₂ = 60 mmHg. Calcule son pH. Est-il acidotique ?

On donne : log 2 ≈ 0,30 ; log 3 ≈ 0,48.

👁️ Voir la correction

**🎯 Méthode — Henderson-Hasselbalch sanguine, pas à pas.**

On suit le même réflexe qu'on appliquerait devant n'importe quelle gazométrie : on a [HCO₃⁻] et PCO₂, on cherche pH. Outil unique : la formule du sang qu'on vient de voir. Voici la mécanique en 5 étapes.

**Étape 1 — Écrire la formule (point de départ).**

Comme on cherche le pH à partir de [HCO₃⁻] et PCO₂, on utilise l'équation centrale :

pH = 6,1 + log ([HCO₃⁻] / (0,03 × P CO₂ ))

**Étape 2 — Transformer PCO₂ en [CO₂ dissous] (loi de Henry).**

La formule a besoin de la concentration de l'acide ([CO₂ dissous]), pas de PCO₂. La loi de Henry fait le pont : [CO₂ dissous] = 0,03 × PCO₂.

[CO₂ dissous] = 0,03 × 60 = **1,8 mmol/L**

💡 Ce CO₂ dissous est plus élevé que la normale (1,2 mmol/L), parce que le patient hypoventile → il accumule du CO₂.

**Étape 3 — Faire le ratio base/acide.**

Henderson-Hasselbalch demande [HCO₃⁻] divisé par [CO₂ dissous] :

[HCO₃⁻] / [CO₂ dissous] = 30 / 1,8 = **16,67**

💡 Le ratio normal physiologique est **20** (24/1,2 = 20). Ici on est à **16,67** → le ratio a baissé → l'acide a augmenté plus que la base → on s'attend à un pH plus bas que 7,4. Bonne intuition avant même de finir le calcul.

**Étape 4 — Calculer log(16,67) avec les données du concours.**

L'énoncé te donne log 2 et log 3, mais pas log(16,67). Il faut donc recombiner avec les règles du log (vues au ch.1, section I.6). L'astuce : reconnaître que 16,67 = 100 / 6.

Pourquoi ? Parce que 100 / 6 = 16,666… ≈ 16,67. Et 100 = 10² (log facile = 2), 6 = 2 × 3 (log connu = log 2 + log 3). Donc tout devient calculable.

log(16,67) = log(100 / 6) = log(100) − log(6)

= 2 − log(2 × 3)

= 2 − (log 2 + log 3)

= 2 − (0,30 + 0,48)

= 2 − 0,78 = **1,22**

💡 C'est l'usage typique des règles de recombinaison du log : transformer un nombre qui ne te serait pas donné en combinaison de nombres que tu as déjà.

**Étape 5 — Sommer pour obtenir le pH.**

pH = 6,1 + 1,22 = 7,32✅ Réponse :** pH = **7,32** → **acidose** (puisque pH < 7,35), mais modérée et non critique.

**🧠 Interprétation clinique — acidose respiratoire chronique partiellement compensée.**

- **Anomalie primaire = respiratoire**. PCO₂ très élevée (60 mmHg au lieu de 40) → le poumon n'élimine plus assez de CO₂ → CO₂ s'accumule → l'équilibre CO₂ + H₂O ⇌ HCO₃⁻ + H⁺ est tiré vers la droite → des H⁺ s'accumulent → le pH baisse. Logique : BPCO = hypoventilation chronique = rétention de CO₂ .

- **Compensation = rénale**. [HCO₃⁻] est aussi monté (30 mmol/L au lieu de 24) → le rein a augmenté la réabsorption de bicarbonate pour compenser l'acidose. Plus de base = plus de capacité à éponger les H⁺.

- **Sans cette compensation rénale**, le pH serait à ~7,1 (avec [HCO₃⁻] = 24 et PCO₂ = 60) → incompatible avec une vie ambulatoire. Grâce à la compensation, on remonte à 7,32 → vivable. C'est le mécanisme adaptatif qui permet à tous les BPCO chroniques de vivre malgré leur PCO₂ pathologique.

### 4. Les autres tampons sanguins — Phosphate, protéines, hémoglobine

Le bicarbonate fait l'essentiel du travail dans le plasma, mais trois autres systèmes contribuent au pouvoir tampon global :

- **Phosphate** (pKa 7,2) — intracellulaire et urinaire. Très efficace au pH physiologique car pKa proche de 7,4.

- **Protéines plasmatiques** — tampon faible mais permanent, sur large gamme de pH.

- **Hémoglobine** (pKa ~ 6,9) — tampon majeur dans les globules rouges, couplé au transport d'O₂ et CO₂ (voir Fig 9 plus haut).

👉 À retenir : **le pouvoir tampon total du sang est ~4× supérieur à celui du plasma seul**, grâce à la contribution massive de l'hémoglobine dans les globules rouges.

[FIGURE physique_ch2_fig09_cycle_hemoglobine.png]

**Figure 9** — Cycle de l'hémoglobine : aller, elle livre O₂ aux tissus (HbO₂ → HbH) ; retour, elle ramène H⁺ et CO₂ aux poumons. Le même camion fait les deux trajets — d'où l'efficacité du tampon globulaire.

Face à une agression acide, le sang neutralise ~15-20 % (bicarbonate + Hb + protéines), le liquide extracellulaire ~20-25 %, et les **tampons cellulaires et osseux ~60 %** (phosphate, protéines, échanges Ca²⁺/H⁺). C'est pourquoi une acidose chronique finit toujours par retentir sur l'os : quand les autres tampons sont saturés, l'os « offre » ses carbonates au prix d'une déminéralisation — c'est l'**ostéopathie de l'insuffisance rénale chronique**.

×

medeos-sante.fr