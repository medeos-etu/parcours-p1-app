Chapitre 4 : Aspects physiques des membranes & ondes acoustiques - MEDEOS — Partie 2

Chapitre 4 — Partie 2

# Aspects physiques des membranes & ondes acoustiques

Diffusion, osmose, dialyse et échographie — comment la matière et l'information traversent (ou pas) un milieu biologique.

## 🔄 Où on en est

Dans la partie précédente, tu as découvert la **diffusion** : les particules se déplacent toutes seules du côté le plus concentré vers le côté le moins concentré, sans que la cellule dépense la moindre énergie. C'est ce qui fait passer l'oxygène de l'air de tes poumons vers ton sang. Et tu as appris à mettre un chiffre sur ce flux avec la **loi de Fick** : ça diffuse d'autant plus vite que la surface d'échange est grande, que la membrane est fine, et que l'écart de concentration entre les deux côtés est marqué.

Jusqu'ici, ce sont les solutés qui bougeaient. Dans cette partie, on retourne le problème : on garde les solutés prisonniers d'un côté d'une membrane, et c'est **l'eau** qui se met à traverser toute seule. Ce phénomène, c'est l'**osmose** — celui qui fait gonfler puis éclater un globule rouge plongé dans l'eau pure. On va le quantifier, comprendre la tonicité, et voir pourquoi une perfusion doit respecter une concentration bien précise.

## II. Osmose, tonicité et propriétés colligatives

Au ch.1, on a posé l'osmolarité (la concentration en particules cinétiquement actives). Ici, on va voir l'effet macroscopique de cette osmolarité : la **pression osmotique**. C'est elle qui fait qu'un globule rouge éclate dans l'eau pure, c'est elle qui force une perfusion à respecter 0,9 % de NaCl, c'est elle qui retient l'eau du plasma dans les vaisseaux.

### 1. 🤔 Le problème — Pourquoi un globule rouge éclate-t-il dans l'eau pure ?

Prends un tube à essai, mets-y de l'eau distillée, et ajoute une goutte de sang. En quelques secondes, les globules rouges gonflent, deviennent sphériques, et finissent par éclater — c'est l'**hémolyse**. La solution prend une couleur rouge translucide (l'hémoglobine libérée diffuse dans l'eau). Pourquoi ? Pas d'attaque chimique, pas de toxine, juste de l'eau pure et un globule rouge. La réponse tient en un mot : **osmose**.

### 2. Définition de l'osmose

**🔑 L'osmose, expliquée simplement**

L'**osmose**, c'est un seul phénomène : l'**eau se déplace toute seule** à travers une membrane qui ne laisse passer qu'elle (pas le sel, pas le sucre, pas les protéines — on appelle cette membrane **« semi-perméable »**).

**Dans quel sens ?** Vers le côté où il y a le **plus** de soluté (sel, sucre…). C'est comme si l'eau cherchait à diluer le côté trop concentré.

⚠️ **Le point à retenir absolument** : c'est l'**eau** qui bouge, **jamais** les solutés. Les solutés restent là où ils sont, prisonniers de la membrane.

**Concrètement, reviens au globule rouge plongé dans l'eau pure** (notre question d'ouverture). Voici ce qui se passe, étape par étape :

- L'**intérieur** du globule rouge est très concentré en solutés : sels, protéines, hémoglobine.

- L'**extérieur** (l'eau pure) ne contient aucun soluté.

- La membrane du globule rouge est **semi-perméable** : elle laisse passer l'eau, mais retient tout le reste.

- → L'eau du dehors va spontanément **entrer** dans le globule (= vers le côté concentré), comme si elle voulait diluer le contenu intracellulaire.

- Le globule **gonfle**, devient sphérique au lieu de biconcave, puis sa membrane (peu élastique) **cède sous la pression** → c'est l'**hémolyse**. L'hémoglobine libérée diffuse dans l'eau et la colore en rouge.

La « force » qui pousse l'eau à entrer dans le globule porte un nom : c'est la **pression osmotique π**. Plus l'écart de concentration entre les deux côtés de la membrane est grand, plus π est grande, et plus la membrane est sollicitée. On va apprendre à la calculer dans la section suivante.

[FIGURE physique_ch4_fig_osmose_globule_rouge.png]

Osmose en action sur un globule rouge plongé dans l'eau pure : ① il est normal (forme biconcave) ; ② l'eau pure environnante l'attire vers son intérieur très concentré → il gonfle et devient sphérique ; ③ la pression interne dépasse la résistance de la membrane, qui éclate — c'est l'**hémolyse**. L'hémoglobine libérée colore l'eau en rouge.

### 3. L'équation de van't Hoff — La pression osmotique

On veut maintenant quantifier cette pression π. Question simple : **combien de pression l'eau exerce-t-elle sur la membrane d'un globule rouge plongé dans l'eau pure ?** Comme pour la loi de Fick, on va construire la formule brique par brique , en se demandant à chaque fois : « qu'est-ce qui doit logiquement faire monter ou descendre cette pression ? ». Le chimiste néerlandais Jacobus van't Hoff a publié le résultat en 1886 (premier prix Nobel de chimie en 1901).

**1ʳᵉ brique — l'osmolarité ω (le nombre de particules de soluté).** Plus il y a de particules coincées du côté concentré, plus l'eau « veut » les rejoindre pour les diluer → plus elle pousse fort sur la membrane. La pression est donc proportionnelle à ω , l'**osmolarité** (rappel ch.1 : c'est le nombre de particules cinétiquement actives par litre, en Osm/L).

**2ᵉ brique — la température T.** Plus il fait chaud, plus les molécules s'agitent (c'est le mouvement brownien qu'on a vu en section I). Une molécule qui s'agite vite cogne plus fort sur la membrane. La pression est donc proportionnelle à T , la température en **kelvins** (rappel : T(K) = T(°C) + 273 ; au corps humain, 37 °C → 310 K).

**3ᵉ brique — la constante R.** Pour que les unités soient cohérentes (π en pascals, ω en mol/m³, T en kelvins), on a besoin d'une constante de proportionnalité. C'est **R = 8,314 J·K⁻¹·mol⁻¹**, une constante universelle de la physique. Retiens juste sa valeur : **R ≈ 8,3**.

On assemble : π proportionnelle à ω, à T, et avec la constante d'ajustement R. C'est l'**équation de van't Hoff** :

Équation de van't Hoff (pression osmotique)
π = ω × R × T
π = pression osmotique (Pa) · ω = osmolarité (Osm/L, ou Osm/m³ dans le SI) · R = 8,314 J·K⁻¹·mol⁻¹ · T = température absolue en kelvins (310 K à 37 °C).

L'osmolarité ω (vue au ch.1) compte le nombre de **particules cinétiquement actives** par litre. Rappel des dissociations utiles : NaCl → 2 Osm/L, glucose → 1 Osm/L, CaCl₂ → 3 Osm/L. Pour le plasma à 300 mOsm/L et 310 K, on calcule :

π_plasma = 0,300 × 8,314 × 310 ≈ **773 000 Pa ≈ 7,6 atm ≈ 5 800 mmHg💡 Rappel express — Les 3 unités de pression du concours**

En physique médicale, on jongle entre 3 unités de pression. À retenir une bonne fois :

- **Pascal (Pa)** = unité officielle du Système International. 1 Pa = 1 N/m².

- **Atmosphère (atm)** = pression de l'air au niveau de la mer. **1 atm ≈ 101 325 Pa ≈ 10⁵ Pa**.

- **Millimètre de mercure (mmHg)** = unité historique utilisée en médecine (tension artérielle, gaz du sang). **1 atm = 760 mmHg**, donc **1 mmHg ≈ 133 Pa**.

Astuce pour les conversions express : **1 atm ≈ 760 mmHg ≈ 10⁵ Pa**. Quasiment tous les exercices de physique médicale s'enchaînent avec cette seule équivalence.

C'est une pression énorme — mais en pratique, comme l'osmolarité est identique de part et d'autre de la membrane cellulaire (interstitiel et intracellulaire à ~300 mOsm/L), il n'y a pas de différence de pression osmotique, donc pas de mouvement d'eau net. C'est seulement quand on rompt cet équilibre (par exemple, en mettant un globule rouge dans de l'eau pure) qu'il se passe quelque chose.

**💡 L'intuition profonde derrière la formule**

Imagine les particules de soluté **dispersées partout dans le volume d'eau** (pas à la surface — réparties dans tout le liquide, en haut, en bas, au milieu) comme des **molécules de gaz enfermées dans une bouteille**. Elles s'agitent dans tous les sens, cognent contre les parois (= la membrane), et exercent ainsi une pression. Plus elles sont nombreuses (ω ↑) ou plus elles s'agitent (T ↑), plus la pression est grande. C'est tout. La formule π = ω·R·T n'est rien d'autre que la traduction mathématique de cette image.

### 4. Solutions iso, hypo et hypertoniques — Le globule rouge à 3 destins

**🔑 Le point de repère à garder en tête**

L'osmolarité **à l'intérieur du globule rouge** est toujours d'environ **300 mOsm/L** (protéines, sels, hémoglobine — ces solutés sont prisonniers de la membrane, ils ne bougent pas).

Ce qui change selon les situations cliniques, c'est l'osmolarité du **liquide extérieur** qui baigne le globule (= le plasma sanguin, ou une solution dans laquelle on le plonge). C'est cette osmolarité externe qu'on compare aux 300 mOsm/L de l'intérieur.

🧭 **Règle directrice** : l'eau va toujours vers le côté où l'osmolarité est la **plus forte** (pour le diluer). Donc :

- Si l'extérieur est **plus dilué** que l'intérieur (osmolarité externe < 300) → l'intérieur du globule est le côté concentré → **l'eau entre dans le globule** → il gonfle.

- Si l'extérieur est **plus concentré** que l'intérieur (osmolarité externe > 300) → l'extérieur est maintenant le côté concentré → **l'eau sort du globule** → il rétrécit.

Trois cas se présentent en pratique clinique, avec des conséquences radicalement différentes pour les cellules :

|

| Type de solution extérieure
| Osmolarité du liquide extérieur (vs 300 mOsm/L à l'intérieur du globule)
| Mouvement de l'eau (vers le côté le plus concentré)
| Effet sur le globule rouge

| **Isotonique**
| = 300 mOsm/L
(autant de soluté dehors que dedans)
| Aucun mouvement net (équilibre)
| Globule **inchangé** ✓
(ex. sérum physiologique 0,9 % NaCl utilisé en perfusion)

| **Hypotonique**
| < 300 mOsm/L
(moins de soluté dehors → l'intérieur du globule est le côté le plus concentré)
| L'eau **ENTRE** dans le globule
(pour diluer le côté concentré = l'intérieur)
| Turgescence puis **hémolyse** 💥
(ex. eau distillée pure = osmolarité extérieure ≈ 0)

| **Hypertonique**
| > 300 mOsm/L
(plus de soluté dehors → l'extérieur devient le côté le plus concentré)
| L'eau **SORT** du globule
(pour diluer le côté concentré = l'extérieur)
| **Plasmolyse** 🥒 (cellule rétrécie, déshydratée)
(ex. solution de NaCl à 3 %)

[FIGURE physique_ch4_fig02_hemolyse_plasmolyse.png]

Trois destins pour un globule rouge selon la tonicité de la solution dans laquelle on le place. L'eau suit toujours le gradient osmotique.

### 5. Osmolarité vs tonicité — Une nuance subtile mais cruciale

Jusqu'ici on a confondu deux mots qui ne sont en réalité **pas tout à fait synonymes**. Ils mesurent deux choses différentes — et la différence peut être vitale en clinique. On prend 30 secondes pour les séparer proprement.

**🔑 Première définition simple — Osmolarité ω**

Une grandeur physique : c'est le **nombre total de particules dissoutes par litre** de solution. On les compte **toutes**, peu importe leur nature (sel, sucre, urée, médicament…). C'est ce qu'on a manipulé depuis le ch.1.

**🔑 Deuxième définition — Tonicité**

Une grandeur biologique : c'est **ce que la cellule « ressent » vraiment** quand on la plonge dans la solution. Est-ce qu'elle va gonfler ? rétrécir ? rester pareille ? La tonicité prédit l'effet final sur le volume de la cellule.

**Pourquoi a-t-on besoin de deux mesures différentes ?** Parce que toutes les particules dissoutes ne se comportent pas pareil face à la membrane d'une cellule. Il y a deux cas, et un seul des deux fait gonfler ou rétrécir la cellule :

|

| Type de particule dissoute
| Compte pour l'osmolarité ?
| Compte pour la tonicité ?
| Effet sur le volume de la cellule

| **Particule retenue par la membrane** (ex. sel NaCl, protéines, hémoglobine pour le globule rouge)
| ✅ Oui
| ✅ **Oui**
| Elle reste prisonnière d'un côté → elle « tire » l'eau et fait gonfler ou rétrécir la cellule.

| **Particule qui traverse librement la membrane** (ex. urée pour le globule rouge)
| ✅ Oui (on la mesure, elle est bien là)
| ❌ **NON**
| Elle s'équilibre toute seule des 2 côtés en quelques minutes → elle ne « tire » plus l'eau, aucun effet net sur le volume.

**🧭 En résumé — un slogan à graver**

- **Osmolarité = je compte TOUTES les particules.**

- **Tonicité = je ne compte QUE celles qui restent prisonnières de la membrane** (= celles qui ont vraiment un effet sur le volume de la cellule).

**🧠 Analogie — La discothèque avec un videur**

Imagine la membrane comme la porte d'une discothèque avec un videur. Les solutés sont les clients qui veulent entrer.

- L'**osmolarité**, c'est le nombre total de clients dans la rue (devant + dedans confondus). Une mesure brute.

- La **tonicité**, c'est le nombre de clients que le videur a refusé et qui restent coincés dehors. Eux seuls « tirent » sur la porte (= exercent une vraie pression).

Un client que le videur laisse passer librement (= un soluté perméant comme l'urée) entre et sort sans gêne, et n'exerce aucune pression nette sur la porte. Il compte dans le total (osmolarité) mais pas dans la force osmotique réelle (tonicité).

#### 📖 L'expérience qui prouve la différence : urée à 300 mOsm/L

Pour bien voir la différence entre osmolarité et tonicité, faisons une expérience de pensée. Tu prépares une solution toute simple : **de l'eau + de l'urée, dosée pour avoir exactement 300 mOsm/L** (= même osmolarité que le plasma). Tu y plonges un globule rouge. Que va-t-il se passer ? Suivons l'histoire en 3 actes.

**🎬 Acte 1 — t = 0 (juste après avoir plongé le globule)**

À l'**extérieur** du globule : 300 mOsm/L d'urée. À l'**intérieur** du globule : 300 mOsm/L de sels + protéines + hémoglobine.

👉 **Osmolarité identique des 2 côtés** → la solution est iso-osmotique au globule. Rien ne bouge. Tout semble en équilibre.

**🎬 Acte 2 — t = quelques secondes plus tard**

Mais l'urée a une particularité : **elle traverse librement la membrane du globule rouge** (contrairement aux sels et protéines qui restent prisonniers). Donc l'urée du dehors se met à entrer dans le globule, jusqu'à arriver à la même concentration des 2 côtés.

👉 Résultat : l'urée s'est **équilibrée** de part et d'autre de la membrane. Elle ne « tire » plus l'eau ni d'un côté ni de l'autre — elle a disparu du jeu osmotique.

**🎬 Acte 3 — t = quelques minutes plus tard**

Faisons un point précis sur ce qu'il y a maintenant des deux côtés de la membrane. Si on suppose des volumes égaux dehors/dedans (pour simplifier), l'urée s'est répartie en deux parts égales :

- À l'**extérieur** : **150 mOsm/L d'urée**.

- À l'**intérieur** : **150 mOsm/L d'urée** + **300 mOsm/L de sels + protéines** (qui sont toujours prisonniers).

Maintenant, demande-toi : **qu'est-ce qui tire encore l'eau** ?

- L'urée est **égale des 2 côtés** (150 = 150) → elle ne tire l'eau ni d'un côté ni de l'autre → elle est **hors-jeu osmotique**.

- Les sels prisonniers sont **uniquement à l'intérieur** (300 dedans, 0 dehors) → ils restent les seuls à créer une différence → ils tirent l'eau vers eux.

👉 Bilan : pour le globule rouge, c'est **exactement comme s'il était plongé dans de l'eau pure** (l'urée ayant disparu du jeu, seuls les 300 mOsm de sels comptent encore, et ils sont tous d'un seul côté). L'eau se précipite donc vers l'intérieur, le globule gonfle… puis sa membrane cède → **hémolyse 💥**.

⚙️ **Note technique** : en réalité, comme le volume extracellulaire est énormément plus grand que celui du globule, l'urée intracellulaire grimpe presque à 300 mOsm/L et celle de l'extérieur baisse à peine. Mais peu importe les valeurs exactes : tant que l'urée s'égalise des 2 côtés, elle « disparaît » du jeu osmotique. Seule la différence des non-perméants compte.

[FIGURE physique_ch4_fig_osmolarite_vs_tonicite.png]

Le piège de l'urée en image. **①** Au départ, autant de particules dehors (urée) que dedans (sels prisonniers) → iso-osmotique. **②** Mais l'urée traverse librement la membrane → elle s'équilibre des 2 côtés et disparaît du jeu osmotique. **③** Du point de vue du globule, c'est devenu de l'eau pure : l'eau entre, il gonfle, il éclate (hémolyse). La solution était **iso-osmotique mais hypotonique**.

**🎯 La leçon clinique à retenir**

Pour **prédire si une cellule va gonfler, rétrécir ou rester pareille**, ne te fie **jamais** à l'osmolarité affichée sur l'étiquette du flacon. Regarde la **tonicité** (= osmolarité des seuls solutés non-perméants).

C'est pour ça qu'en réanimation, on ne perfuse **jamais d'urée pure** ni de glucosé 5 % seul sur une voie périphérique sans précaution : iso-osmotique sur le papier, mais hypotonique pour les cellules → risque d'hémolyse et d'œdème cérébral. À l'inverse, le **sérum physiologique 0,9 % NaCl** est iso-osmotique et isotonique (le NaCl ne traverse pas la membrane) → c'est la perfusion de référence.

### 6. Les équilibres hydrosodés — Quand l'osmose dicte l'état de tes cellules

#### 🤔 Le problème — Comment un patient peut-il être déshydraté de ses cellules et avoir les chevilles gonflées en même temps ?

En clinique, on rencontre tous les jours des patients dont la balance entre **eau** et **sodium** est dérangée. Ces déséquilibres portent un nom global : les **troubles hydrosodés**. Ce qui surprend au début, c'est qu'un patient peut avoir trop d'eau dans un compartiment et pas assez dans un autre, en même temps. Pour comprendre ça, il faut mobiliser tout ce qu'on vient de voir : osmose, tonicité, et architecture des compartiments.

Ce sont des items qui tombent **systématiquement aux QCM de P1** — c'est l'une des applications les plus rentables de toute la biophysique du programme.

#### 🔑 La natrémie — le paramètre central

🔑 **Définition de la natrémie**

La **natrémie** est la concentration en sodium Na⁺ dans le **plasma** (= partie liquide du sang, secteur extra-cellulaire) :

Natrémie
Natrémie = m Na⁺ / V extracellulaire
Valeur physiologique normale : **135-145 mmol/L**. Anomalies : **hyponatrémie** si < 135 ; **hypernatrémie** si > 145.

👉 **Pourquoi le Na⁺ et pas un autre ion ?** Parce que Na⁺ est de loin l'ion extra-cellulaire le plus abondant (≈ 140 mmol/L vs 4,5 pour K⁺, 102 pour Cl⁻ qui suit Na⁺ pour respecter l'électroneutralité). À lui seul, le Na⁺ et ses contre-ions représentent **~ 90 % de la tonicité plasmatique**. Donc connaître la natrémie ≈ connaître la tonicité du plasma. C'est pour ça qu'on s'y intéresse autant.

**Petit rappel de l'architecture compartimentale** (vue au ch.3 §V) :

- **Compartiment extracellulaire** = plasma + liquide interstitiel (le liquide qui baigne les cellules en dehors des vaisseaux). C'est là qu'on dose le Na⁺.

- **Compartiment intracellulaire** = l'eau à l'intérieur des cellules.

- Les deux sont séparés par la **membrane cellulaire**, qui est semi-perméable : l'eau passe librement, mais Na⁺ et K⁺ sont retenus (transport actif par les pompes Na/K-ATPase, qu'on détaillera plus loin dans ce chapitre, section III).

#### 🔑 Mesure n°1 — La natrémie te dit l'état des cellules

Tu doses la natrémie d'un patient avec une prise de sang. En lisant **un seul chiffre**, tu apprends en même temps si ses **cellules** sont gonflées, rétrécies ou normales. Voici la règle :

- **Natrémie HAUTE** (Na⁺ > 145) → le plasma est trop salé → l'eau **SORT** des cellules pour le diluer → cellules **RÉTRÉCIES** (= déshydratation intracellulaire). Le patient a soif intense, peut être confus, somnolent, dans le coma si c'est sévère.

- **Natrémie BASSE** (Na⁺ < 135) → le plasma est trop dilué → l'eau **ENTRE** dans les cellules → cellules **GONFLÉES** (= hyperhydratation intracellulaire). Symptômes : maux de tête, nausées, convulsions, œdème cérébral qui peut tuer.

**Pourquoi ça marche ?** Parce que l'eau traverse librement la membrane des cellules (alors que le sel reste bloqué). Donc dès que la concentration en sel change dans le plasma, l'eau bouge automatiquement pour rééquilibrer. La natrémie agit comme un « curseur » qui pilote le volume des cellules — particulièrement les neurones, qui sont les plus sensibles (d'où les symptômes neurologiques dans les deux cas).

#### 🔑 Mesure n°2 — L'examen clinique te dit l'état du compartiment extracellulaire

Mais attention : **la natrémie seule ne suffit pas**. Voici pourquoi.

**🤔 Le piège qu'il faut absolument comprendre**

La natrémie est une concentration (= sel / eau). Elle te dit le **rapport** entre les deux, mais pas la **quantité totale**. Exemple :

- Un patient qui perd 1 L d'eau + 140 mmol de sel (proportions du plasma normal) → sa natrémie reste à 140 → **parfaitement normale**. Et pourtant, il a perdu 1 L de plasma ! Il est déshydraté globalement , mais ses cellules vont bien.

👉 Donc la natrémie te dit l'état des cellules (intracellulaire), mais elle ne te dit RIEN sur le volume total d'eau dans le corps (= état extracellulaire).

Pour évaluer l'état du **compartiment extracellulaire** (= combien d'eau circule dans les vaisseaux et baigne les cellules), on regarde le patient avec ses propres yeux :

- Si les **plis cutanés** sont positifs (la peau pincée reste plissée), **tension artérielle basse**, pouls rapide → **déshydratation extracellulaire** (manque d'eau dans les vaisseaux et l'interstitium)

- Si des **œdèmes** apparaissent aux chevilles, autour des yeux ou dans le ventre (ascite) → **hyperhydratation extracellulaire** (trop d'eau dans l'interstitium)

#### 📊 2 mesures → 4 cases : la matrice des troubles hydrosodés

Donc en clinique, devant un patient avec un déséquilibre hydrosodé, tu as **2 mesures indépendantes** :

- la **natrémie** (prise de sang) → état des **cellules** (intracellulaire)

- l'**examen clinique** (plis cutanés / œdèmes) → état du compartiment **extracellulaire**

Chacune des 2 mesures peut être anormale dans 2 sens (en plus ou en moins). En croisant les possibilités, on obtient **2 × 2 = 4 situations cliniques typiques**. Voici la matrice :

|

| ↓ Natrémie / → Volume extracellulaire
| Volume extracellulaire **↓**
(déshydratation extra : plis cutanés, hypotension)
| Volume extracellulaire **↑**
(hyperhydratation extra : œdèmes visibles)

| **Hypernatrémie** (Na⁺ > 145)
→ cellules déshydratées
| **Déshydratation globale**
ex : canicule chez la personne âgée
| **Apport mixte sel + eau**
ex : perfusion mal dosée

| **Hyponatrémie** (Na⁺ < 135)
→ cellules gonflées
| **Perte sodée prédominante**
ex : diarrhées sévères
| **Intoxication à l'eau pure**
ex : potomanie

👉 **Lecture du tableau, mode d'emploi :**

- D'abord, tu doses la **natrémie** → tu sais sur quelle ligne du tableau tu es (en haut = Na⁺ haut, en bas = Na⁺ bas).

- Ensuite, tu fais l'**examen clinique** (plis cutanés, œdèmes, tension) → tu sais dans quelle colonne tu es (gauche = déshydratation extra, droite = œdèmes).

- La case à l'intersection te donne la **cause** et le **traitement**.

Cette logique « 2 axes → 4 cases » est exactement celle qu'utilisent les urgentistes et les néphrologues au quotidien — et celle qui tombe régulièrement en QCM.

#### 📖 Histoire n°1 — Yvette, 82 ans, hypernatrémie de canicule

Yvette vit seule. Pendant la canicule d'août, elle ne boit presque pas — ses repères de soif se sont émoussés avec l'âge (un classique chez la personne âgée). Au bout de 4 jours sans boire suffisamment, sa fille la trouve confuse, somnolente, avec la peau qui « fait des plis » quand on la pince (perte d'élasticité). Aux urgences, on dose :

📊 **Bilan biologique :**

- Natrémie = **158 mmol/L** (normale 135-145) → **hypernatrémie sévère**

- Plis cutanés positifs (quand on pince la peau, elle reste plissée — signe que la peau a perdu son eau), hypotension (tension artérielle basse), tachycardie (cœur qui bat trop vite, > 100 bpm) → **déshydratation extracellulaire également**

🧩 **Reconstruction du puzzle :**

Yvette a perdu de l'**eau pure** (sueur, respiration, urine concentrée) sans la remplacer. Elle n'a perdu que très peu de sodium. Conséquence : son secteur extracellulaire se vide en eau (déshydratation extracellulaire visible aux plis cutanés), et comme l'eau est partie en plus grande proportion que le Na⁺, la **concentration en Na⁺ dans le plasma monte** (= hypernatrémie). Le plasma devient hypertonique. Par osmose, l'eau commence à **sortir des cellules** vers le secteur extracellulaire pour compenser. Les cellules — dont les **neurones** — se rétractent. C'est ce qui provoque la confusion d'Yvette.

💉 **Traitement :** réhydratation prudente (perfusion IV de sérum hypotonique, type glucosé 5 %, qui apporte de l'eau libre sans sodium). **Attention au piège** : si on corrige trop vite, les neurones gonflent brutalement (l'eau revient massivement dans des cellules qui s'étaient adaptées) → œdème cérébral iatrogène (= causé par le traitement médical lui-même), potentiellement mortel. La règle : ne pas baisser la natrémie de plus de 0,5 mmol/L par heure.

#### 📖 Histoire n°2 — Thomas, 28 ans, marathonien, hyponatrémie d'effort

Thomas court son premier marathon. Il a entendu qu'il faut « bien s'hydrater » alors il boit énormément d'**eau pure** à chaque ravitaillement (environ 1 L par heure pendant 4 heures). Vers le 35ᵉ kilomètre, il commence à avoir mal à la tête, des nausées, puis convulse et perd connaissance sur le bord de la route. À l'hôpital :

📊 **Bilan biologique :**

- Natrémie = **122 mmol/L** (normale 135-145) → **hyponatrémie sévère**

- Volume extracellulaire plutôt augmenté (œdèmes possibles, prise de poids pendant la course) → **hyperhydratation extracellulaire**

🧩 **Reconstruction du puzzle :**

Thomas a fait l'inverse exact d'Yvette : il a apporté **énormément d'eau pure** (sans sodium) tout en perdant du sodium dans sa sueur. Le secteur extracellulaire se remplit d'eau (hyperhydratation extracellulaire), mais comme cette eau est sans sel , elle dilue le Na⁺ → natrémie qui chute. Le plasma devient hypotonique par rapport aux cellules. Par osmose, l'eau **entre dans les cellules** pour compenser. Les neurones gonflent. Or le cerveau est dans une boîte crânienne rigide → cette augmentation de volume crée une **hypertension intra-crânienne** → maux de tête, nausées, convulsions, coma. C'est l'**œdème cérébral hyponatrémique**, qui peut tuer en quelques heures.

💉 **Traitement :** perfusion très prudente de sérum salé hypertonique (NaCl 3 %) pour relever progressivement la natrémie. Là encore, jamais brutalement : risque de **myélinolyse centro-pontine** (lésion irréversible du tronc cérébral si remontée trop rapide). Règle d'or : ne pas remonter la natrémie de plus de 8-10 mmol/L par jour. La myélinolyse centro-pontine est une destruction irréversible de la gaine de myéline (l'isolant des neurones) au niveau du tronc cérébral, qui survient quand le cerveau se déshydrate trop vite après s'être adapté à une hyponatrémie prolongée.

👉 **Leçon clinique majeure :** pendant un effort prolongé, boire UNIQUEMENT de l'eau pure est dangereux. Il faut des boissons isotoniques (eau + sels). Les organisateurs de marathons l'ont compris depuis les années 2000 — les ravitaillements proposent désormais systématiquement des boissons salées.

💡 **À retenir pour le QCM — le réflexe en 3 étapes**

- **Doser la natrémie** → te dit l'état de l'INTRA-cellulaire (hyper-Na = cellules déshydratées ; hypo-Na = cellules gonflées)

- **Examiner le secteur EXTRA-cellulaire** (plis cutanés vs œdèmes) → te dit l'état de l'EXTRA-cellulaire

- **Croiser les deux** dans la matrice 2×2 → cause + traitement

Ce raisonnement structuré est exactement celui qu'attend le concours. Et c'est aussi celui que pratiquent les médecins urgentistes, néphrologues, gériatres au quotidien.

### 7. Application clinique — La méthode de Hamburger et les résistances globulaires

La **méthode de Hamburger** est un test biologique pour mesurer la **fragilité osmotique** des globules rouges. Le principe : on place quelques gouttes de sang dans une série de tubes contenant du NaCl à des concentrations décroissantes (de l'isotonique 9 g/L jusqu'à très hypotonique < 1 g/L). On observe :

- Pour des hématies normales : pas d'hémolyse au-dessus de 5 g/L de NaCl, hémolyse complète vers 3 g/L

- Dans la **maladie de Minkowski-Chauffard** (sphérocytose héréditaire) : les hématies sont anormalement sphériques (microsphérocytose), plus fragiles. L'hémolyse apparaît à des concentrations plus élevées (5-7 g/L) → **diminution de la résistance globulaire**.

- Cette anomalie cause une anémie hémolytique chronique (manque de globules rouges parce qu'ils sont détruits trop vite), parfois sévère, traitée par splénectomie (ablation chirurgicale de la rate — l'organe où sont détruits les globules rouges abîmés).

L'examen est devenu rare en pratique (remplacé par des techniques génétiques), mais il reste un test conceptuel emblématique de la physique en clinique : quantifier la sensibilité d'une cellule à l'osmose .

### 8. Trois autres effets liés à l'osmolarité

La pression osmotique π qu'on vient de voir n'est pas le seul effet de l'osmolarité — il en existe **3 autres**, qui modifient le comportement physique du solvant dès qu'on y dissout des particules. Ces 4 effets (osmose + les 3 qu'on va voir) partagent une caractéristique commune : ils dépendent uniquement du **nombre** de particules dissoutes par litre, et pas de leur nature (sel, sucre, urée, peu importe).

**💡 Vocabulaire — On les appelle « propriétés colligatives »**

Le mot colligatif vient du latin colligatus = « lié ensemble ». On l'utilise en physique pour désigner toute propriété d'une solution qui **dépend uniquement du nombre total de particules dissoutes par litre**, indépendamment de la nature des particules. Tu rencontreras ce mot dans tes manuels et probablement aux ACC.

Voici les **3 cousines** de la pression osmotique. Elles racontent toutes la même histoire : dès qu'on dissout des particules dans un solvant (= de l'eau, en ce qui nous concerne), certaines propriétés physiques de ce solvant changent. Ce qui change diffère d'une cousine à l'autre, mais l'amplitude du changement dépend toujours du même paramètre — l'osmolarité ω.

#### 🧊 ① Cryoscopie — Le point de congélation BAISSE

**Pourquoi ?** Les particules dissoutes « gênent » les molécules d'eau qui voudraient se ranger en cristaux de glace. Du coup, l'eau doit descendre plus bas que 0 °C avant de geler. **Exemple du quotidien** : en hiver, on sale les routes — c'est pour ça que la glace fond (le sel abaisse le point de congélation de l'eau). C'est aussi la raison pour laquelle l'eau de mer ne gèle pas au même rythme que l'eau douce.

Loi cryoscopique
Δθ_c = K_c × ω
Δθ_c = abaissement du point de congélation (°C) · K_c = constante cryoscopique propre au solvant · ω = osmolarité (Osm/L). Pour l'eau, **K_c = 1,86 °C·L·Osm⁻¹**.

#### ♨️ ② Ébullioscopie — Le point d'ébullition MONTE

**Pourquoi ?** Les particules dissoutes « retiennent » les molécules d'eau dans le liquide. Il faut donc chauffer plus fort que 100 °C pour que l'eau s'évapore. **Exemple du quotidien** : quand tu sales l'eau des pâtes, elle bout légèrement au-dessus de 100 °C — donc tes pâtes cuisent un peu plus vite.

Loi ébullioscopique
Δθ_eb = K_eb × ω
Δθ_eb = élévation du point d'ébullition (°C) · K_eb = constante ébullioscopique propre au solvant · ω = osmolarité.

#### 💨 ③ Tonométrie — La pression de vapeur DIMINUE (loi de Raoult)

**Pourquoi ?** Les particules dissoutes retiennent l'eau dans la phase liquide, donc moins de molécules d'eau s'évaporent au-dessus de la solution. La pression de vapeur saturante (= la pression qu'exerce la vapeur d'eau au-dessus du liquide) diminue. **Exemple du quotidien** : une solution sucrée (sirop) s'évapore beaucoup plus lentement qu'un verre d'eau pure.

Loi de Raoult
ΔP / P° = x_soluté
P° = pression de vapeur de l'eau pure · ΔP = baisse causée par le soluté · x_soluté = fraction molaire du soluté.

#### 📋 Tableau récap des 4 effets de l'osmolarité

|

| Propriété
| Loi
| Direction de l'effet

| **Pression osmotique π** | π = ω·R·T | π **augmente** avec ω (van't Hoff)

| **Cryoscopie** (point de congélation) | Δθ_c = K_c × ω | Le point de congélation **baisse** (eau salée à 1 mol/L gèle à −1,9 °C)

| **Ébullioscopie** (point d'ébullition) | Δθ_eb = K_eb × ω | Le point d'ébullition **monte** (eau salée bout > 100 °C)

| **Tonométrie** (pression de vapeur) | ΔP / P° = x_soluté | La pression de vapeur **diminue**

#### 🏥 Application clinique — L'osmomètre cryoscopique

La cryoscopie n'est pas qu'une curiosité physique : c'est la **méthode standard de laboratoire** pour mesurer l'osmolarité d'une solution biologique (plasma, urine, perfusion). Le principe : on met l'échantillon dans un appareil appelé **osmomètre cryoscopique**, qui mesure très précisément la température à laquelle la solution commence à geler. Ensuite, en appliquant la loi **Δθ_c = K_c × ω** à l'envers, on remonte à l'osmolarité ω.

👉 C'est parce que la cryoscopie dépend uniquement du nombre de particules dissoutes (et pas de leur nature) que cette technique fonctionne pour n'importe quelle solution biologique, sans qu'on ait besoin de savoir d'avance ce qu'il y a dedans.

**🧪 Mini-exercice — Cryoscopie du plasmaÉnoncé :** Le plasma sanguin a une osmolarité de 300 mOsm/L. À quelle température commencerait-il à geler ? (K_c eau = 1,86 °C·L·Osm⁻¹, mais tu peux arrondir à 2 pour faire de tête).

👁️ Voir la correction

**Correction — calcul de tête en 4 étapes :**

- **Convertir les mOsm/L en Osm/L** (rappel ch.1 : « m » devant une unité signifie « milli » = × 10⁻³).

300 mOsm/L = 300 × 10⁻³ Osm/L = **0,3 Osm/L**.

- **Arrondir K_c** de 1,86 à **≈ 2** pour faire le calcul de tête (l'erreur est minime, on s'en occupera à la fin).

- **Appliquer la formule** :

Δθ_c = K_c × ω ≈ 2 × 0,3 = **0,6 °C**.

⚠️ Attention : ce 0,6 °C n'est pas la température finale ! C'est un **Δ** = un écart de température par rapport au point de congélation de l'eau pure.

- **Calculer la température finale**. L'eau pure gèle à 0 °C. La loi cryoscopique nous dit que la solution gèle plus bas que l'eau pure, avec un abaissement de Δθ. Donc :

T_gel = 0 °C − Δθ = 0 − 0,6 = **−0,6 °C**.

Pour bien visualiser : si on avait calculé Δθ = 38, la solution gèlerait à −38 °C. Et si on avait Δθ = 0,1, à −0,1 °C. Le Δ donne juste l'écart à 0, dans le sens négatif (puisque la solution gèle toujours plus bas que l'eau pure).

👉 Le plasma commence donc à geler à **−0,6 °C** (au lieu de 0 °C pour l'eau pure).

⚙️ **Valeur exacte avec K_c = 1,86** : Δθ = 1,86 × 0,3 = 0,558 °C, soit −0,56 °C. Notre arrondi à 2 nous a donné −0,6 °C, c'est-à-dire un écart de 0,04 °C — totalement négligeable pour un QCM où les réponses sont espacées de quelques dixièmes.

Cette valeur (≈ −0,56 °C) est exactement ce que mesurent les **osmomètres cryoscopiques** en laboratoire. À l'inverse, si on mesure Δθ ≈ 0,56 °C sur un échantillon, on remonte à une osmolarité d'environ 300 mOsm/L → cohérent avec un plasma normal.

×

medeos-sante.fr