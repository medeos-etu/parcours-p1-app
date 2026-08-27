Chapitre 6 : OEM, optique géométrique — dioptres, miroirs, lentilles - MEDEOS

Chapitre 6

# OEM, optique géométrique — dioptres, miroirs, lentilles

De la nature de la lumière à la formation d'images — les outils pour comprendre l'œil et corriger la vue.

## 🎯 Pourquoi ce chapitre ouvre tout le bloc « optique médicale »

Plonge un stylo dans un verre d'eau : il a l'air cassé à la surface. Approche-toi d'une vitre par derrière : tu ne vois pas l'extérieur, tu vois ton propre reflet. Pose une loupe sur un journal : les lettres grossissent. Mets des lunettes : le monde devient net. Toutes ces expériences, qui te semblent normales, sont décrites par **deux lois** formulées au XVIIᵉ siècle par Snell et Descartes — et ces deux lois suffisent à tout expliquer en optique géométrique, du miroir de dentiste à la chirurgie réfractive au LASIK.

Ce chapitre ouvre un **nouveau pilier** dans le programme : on quitte les solutions, les membranes et l'électrophysiologie (ch.1 à ch.5) pour entrer dans le monde des **ondes électromagnétiques**. La lumière en est l'exemple le plus familier — mais c'est aussi un photon avec une énergie quantifiée, un signal qui voyage à 300 000 km/s, et un outil qui se laisse manipuler par des morceaux de verre courbé qu'on appelle des lentilles .

🎯 **À la fin de ce chapitre, tu sauras :**

- Situer la **lumière visible** (400-700 nm) dans le spectre électromagnétique et estimer l'énergie d'un photon

- Appliquer les **lois de Snell-Descartes** (réflexion, réfraction) et calculer un angle limite de réflexion totale

- Comprendre pourquoi un objet immergé paraît plus proche qu'il ne l'est (dioptre plan)

- Distinguer un **dioptre convergent / divergent**, un **miroir concave / convexe**, une **lentille convergente / divergente**

- Construire l'image d'un objet par une lentille mince avec les **3 rayons fondamentaux**

- Appliquer la **relation de conjugaison** 1/p' − 1/p = 1/f' et calculer la position d'une image

- Connaître la **vergence** (en dioptries δ) et la lire sur une ordonnance de lunettes

**📚 Ce que tu sais déjà** — En physique de Terminale tu as vu les **ondes** (longueur d'onde, fréquence, célérité) et le **dualisme onde-corpuscule** (E = h·ν pour le photon). En Première tu as croisé la **loi de Snell-Descartes** et la **réflexion totale** dans la fibre optique. En SVT tu as déjà entendu parler de l'**œil** (cornée, cristallin, rétine) sans entrer dans la physique. Ce chapitre **relie tout ça à la médecine** : pourquoi un opticien parle de dioptries, pourquoi un endoscope est une fibre optique, pourquoi le cristallin a une vergence qui se modifie quand tu lis de près. Aucun prérequis qui ne soit pas déjà couvert.

## I. La lumière — onde électromagnétique et photon

Avant de manipuler la lumière avec des miroirs et des lentilles, il faut savoir ce qu'elle est. Réponse courte : c'est à la fois une onde et un petit paquet d'énergie appelé photon. Et selon la longueur d'onde, cette même nature physique fournit aussi bien les rayons radio qui transportent la 4G que les rayons γ qui sortent d'un noyau radioactif.

### 1. 🤔 Le problème — Qu'est-ce que la lumière ?

Pendant deux siècles, les physiciens se sont déchirés. Newton disait : la lumière est composée de petites particules (corpuscules) qui voyagent en ligne droite. Huygens disait : la lumière est une onde qui se propage comme une vague à la surface d'un étang. Les expériences d'interférences (les fameuses « fentes de Young ») ont tranché en faveur de l'onde au XIXᵉ siècle. Puis Einstein, en 1905, a montré que la lumière interagit avec la matière sous forme de **petits paquets d'énergie quantifiés**, les photons — ressuscitant Newton pour partie. La synthèse moderne, c'est le **dualisme onde-corpuscule** : la lumière est les deux à la fois , et selon l'expérience, l'une ou l'autre face se manifeste.

**🔑 La lumière en une phrase**

La **lumière** est une **onde électromagnétique** (un champ électrique qui oscille perpendiculairement à un champ magnétique, lui-même perpendiculaire à la direction de propagation) qui transporte de l'énergie sous forme de **photons**, chaque photon portant l'énergie E = h·ν.

### 2. Le spectre électromagnétique — Tout est de la « lumière », à des fréquences différentes

La lumière visible (celle que ton œil détecte, de 400 à 700 nm) n'est qu'une **minuscule tranche** du spectre électromagnétique. Toutes les autres ondes EM ont la même nature physique, mais une longueur d'onde (et donc une énergie de photon) différente. Voici le panorama complet, classé par énergie croissante :

|

| Type d'onde EM
| Longueur d'onde λ
| Énergie photon
| Usage typique

| **Ondes radio**
| > 1 m
| très faible
| Radio, télé, 4G, IRM (radiofréquences)

| **Micro-ondes**
| 1 mm - 1 m
| faible
| Four micro-ondes, radar, WiFi

| **Infrarouge (IR)**
| 700 nm - 1 mm
| 1 meV
| Chaleur, télécommande TV, vision nocturne

| **Visible**
| 400 - 700 nm
| ~2 eV
| Tout ce que tu vois

| **Ultraviolet (UV)**
| 10 - 400 nm
| 3-100 eV
| Bronzage, stérilisation, photochimie

| **Rayons X**
| 0,01 - 10 nm
| 0,1 - 100 keV
| Radiographie, scanner

| **Rayons γ**
| < 0,01 nm
| > 100 keV
| Scintigraphie, radiothérapie

[FIGURE physique_ch6_fig01_spectre_em.png]

**Figure 1** — Spectre électromagnétique complet. La lumière visible (400-700 nm) n'est qu'une étroite tranche. Au-delà des UV commencent les rayonnements ionisants.

### 3. Célérité, longueur d'onde, fréquence

Comme toute onde, la lumière relie longueur d'onde λ, fréquence ν (ou f) et célérité c par la relation universelle :

Relation onde de base
c = λ × ν
c = célérité (m/s) · λ = longueur d'onde (m) · ν = fréquence (Hz).

Dans le **vide**, la lumière (et toutes les ondes EM) voyagent à la vitesse :

Vitesse de la lumière dans le vide (constante universelle)
c = 3 × 10⁸ m/s = 300 000 km/s

Cette vitesse est la même pour toutes les longueurs d'onde : les ondes radio, la lumière rouge, les rayons X et les rayons γ vont tous à 300 000 km/s dans le vide. Ce qui change, c'est leur fréquence.

Dans un **milieu matériel** (eau, verre, air, tissu biologique), la lumière ralentit. On définit l'**indice de réfraction n** du milieu par :

Indice de réfraction
n = c / v
v = vitesse de la lumière dans le milieu. n ≥ 1 toujours. Air : n ≈ 1,00 (essentiellement le vide). Eau : n ≈ 1,33. Cornée : n ≈ 1,37. Verre : n ≈ 1,5. Diamant : n ≈ 2,4.

C'est ce ralentissement qui est à l'origine de la **réfraction** de la lumière à la traversée d'une interface — qu'on verra dans la section suivante. Plus n est élevé, plus la lumière ralentit, et plus elle « plie » en entrant dans le milieu.

### 4. L'énergie du photon — E = h·ν

Le grand bond conceptuel d'Einstein en 1905 : la lumière n'échange pas son énergie avec la matière de façon continue, mais par **petits paquets quantifiés**, les photons . Chaque photon porte une énergie qui ne dépend que de la fréquence de l'onde :

Énergie d'un photon (relation de Planck-Einstein)
E = h × ν = h × c / λ
h = constante de Planck = 6,63 × 10⁻³⁴ J·s · ν = fréquence (Hz) · λ = longueur d'onde (m). On exprime souvent E en électron-volts (eV) : 1 eV = 1,6 × 10⁻¹⁹ J.

Conséquence : **plus la longueur d'onde est courte, plus le photon est énergétique**. Un photon UV a beaucoup plus d'énergie qu'un photon de lumière visible, qui en a beaucoup plus qu'un photon infrarouge.

**🧠 Mnémo Medeos — « Petite λ = gros photon »**

Retiens cette inversion : **longueur d'onde et énergie varient en sens inverse**. Photon γ (λ infime) → très énergétique → ionise l'ADN, casse les liaisons covalentes, tue les cellules. Photon visible (λ moyenne) → énergie modérée → fait fonctionner la vision et la photosynthèse. Photon IR (λ grande) → faible énergie → fait juste chauffer (c'est ce que tu sens quand tu mets la main près d'une casserole chaude). Tout le panorama clinique de la lumière est dans ce mnémo : si on veut tuer une bactérie ou une tumeur, on prend du court (UV stérilisateur, X, γ) ; si on veut regarder sans abîmer, on prend du visible ou de l'IR.

### 5. Application clinique — Pourquoi le rouge passe la peau

Pose ta main sur une lampe puissante : ta paume s'éclaire en **rouge sombre**. La lumière bleue est absorbée dès les premiers µm de peau (hémoglobine, mélanine), mais la lumière rouge (~650 nm) et surtout le proche-infrarouge (~700-900 nm) **traversent plusieurs centimètres de tissu**. C'est exactement cette propriété qui fonde plusieurs technologies médicales :

- **Oxymètre de pouls** (saturomètre) : on éclaire le bout du doigt avec deux longueurs d'onde (rouge ~660 nm + IR ~940 nm) et on mesure l'absorption transmise. L'hémoglobine oxygénée et l'hémoglobine désoxygénée n'absorbent pas pareil → on en déduit la **saturation en O₂ (SpO₂)**. C'est l'examen le plus utilisé du monde en réanimation et au lit du malade.

- **Laser d'épilation** : on utilise un laser dans le rouge ou le proche-IR (700-1100 nm), qui traverse l'épiderme transparent et est absorbé spécifiquement par la mélanine du bulbe pileux en profondeur, détruisant le follicule sans abîmer la peau de surface.

- **Photothérapie LED** (cicatrisation, douleurs musculaires) : longueurs d'onde rouge/IR qui pénètrent les tissus pour stimuler la régénération cellulaire.

- **NIRS** (spectroscopie proche-IR) : technique non invasive qui mesure l'oxygénation cérébrale chez le nouveau-né prématuré, en utilisant l'IR qui traverse le crâne (encore fin).

À l'autre bout du spectre, les **UV** sont arrêtés par le verre de tes lunettes de soleil — c'est exactement pour ça qu'on les porte : protéger ton cristallin du vieillissement précoce (cataracte) induit par les UV solaires sur des décennies.

**🧪 Mini-exercice — Énergie d'un photon visibleÉnoncé :** Calcule l'énergie en eV d'un photon de lumière jaune-vert (λ = 550 nm), proche du maximum de sensibilité de l'œil humain en vision diurne. On donne h × c ≈ 2 × 10⁻²⁵ J·m et 1 eV = 1,6 × 10⁻¹⁹ J.

👁️ Voir la correction

**Correction :**

E = h·c/λ = (2 × 10⁻²⁵) / (550 × 10⁻⁹) = (2 / 550) × 10⁻¹⁶ ≈ 3,6 × 10⁻¹⁹ J.

Conversion en eV : E = 3,6 × 10⁻¹⁹ / 1,6 × 10⁻¹⁹ ≈ **2,3 eV**.

Pour mémo : les photons visibles font tous environ 2 eV (1,8 eV pour le rouge, 3 eV pour le violet). C'est très loin de l'énergie d'ionisation de l'atome (13,6 eV pour l'hydrogène), donc la lumière visible n'ionise pas — elle excite seulement les électrons des molécules photosensibles (rhodopsine de la rétine, chlorophylle des plantes, etc.).

## II. Les lois de Snell-Descartes — réflexion et réfraction

Quand un rayon de lumière rencontre une interface entre deux milieux (air/eau, air/verre, eau/cornée), deux choses se passent simultanément : une partie est réfléchie (rebondit), une partie est réfractée (continue en se courbant). Deux lois, formulées par Snell vers 1620 puis Descartes vers 1637, décrivent exactement comment.

### 1. 🤔 Le problème — Pourquoi un stylo plongé dans l'eau a l'air cassé ?

Plonge un stylo droit dans un verre d'eau, en oblique. Tu vois clairement deux morceaux qui forment un angle, comme si le stylo s'était brisé à la surface. Et pourtant, en le ressortant, il est toujours droit. D'où vient cet effet d'optique ? La réponse est dans la **réfraction** : les rayons lumineux qui partent de la partie immergée du stylo et arrivent à ton œil sont déviés à la sortie de l'eau, comme s'ils provenaient d'un point différent. Ton cerveau, qui interprète les rayons « comme s'ils étaient toujours droits », reconstruit une image décalée.

### 2. La loi de la réflexion

Quand un rayon lumineux frappe une surface, une partie rebondit (réflexion) — comme une balle de tennis sur un mur. La loi est simple, et elle ne dépend ni du milieu, ni de la longueur d'onde :

**🔑 Loi de la réflexion**

L'angle de réflexion est **égal** à l'angle d'incidence, mesurés tous deux par rapport à la **normale** à la surface (la droite perpendiculaire à l'interface au point d'incidence). Le rayon réfléchi est dans le même plan que le rayon incident et la normale.

Loi de la réflexion
θ_réfléchi = θ_incident

C'est cette loi qui explique pourquoi un miroir te renvoie une image fidèle (rayons réfléchis suivent une géométrie symétrique), pourquoi tu peux te voir dans une vitre par temps sombre (réflexion sur le verre), et pourquoi un médecin ORL utilise un miroir frontal pour éclairer la gorge d'un patient.

### 3. La loi de la réfraction — n₁ sin θ₁ = n₂ sin θ₂

L'autre partie du rayon, qui pénètre dans le second milieu, est **déviée** par rapport à sa direction initiale. C'est la réfraction . Plus le second milieu est « optiquement dense » (indice n élevé), plus le rayon se rapproche de la normale en pénétrant.

Loi de Snell-Descartes pour la réfraction
n₁ × sin(θ₁) = n₂ × sin(θ₂)
n₁, n₂ = indices des deux milieux · θ₁, θ₂ = angles entre le rayon et la normale, dans chacun des milieux.

[FIGURE physique_ch6_fig02_snell_descartes.png]

**Figure 2** — Réflexion et réfraction d'un rayon lumineux à l'interface air/eau. Le rayon réfracté se rapproche de la normale parce qu'il entre dans un milieu plus dense (n_eau > n_air).

**🧠 Analogie à retenir — La voiture qui change de terrain**

Imagine une voiture qui roule en oblique sur de la route bitumée (milieu rapide) et qui passe sur du sable (milieu lent). La roue qui touche le sable la première ralentit avant l'autre — la voiture se courbe vers la normale à l'interface. C'est exactement ce que fait un rayon lumineux quand il entre dans un milieu plus dense (n₂ > n₁) : il **plie vers la normale**. À l'inverse, quand le rayon sort vers un milieu moins dense (eau → air), il **s'éloigne** de la normale.

### 4. La réflexion totale interne

Cas particulier crucial : quand la lumière passe d'un milieu dense vers un milieu moins dense (eau → air, fibre optique → air), elle s'éloigne de la normale. Si l'angle d'incidence est suffisamment grand, il existe un angle au-delà duquel le rayon ne sort plus du tout — il est entièrement réfléchi à l'intérieur du milieu dense. C'est la **réflexion totale interne**.

L'angle limite à partir duquel ce phénomène se produit se calcule en posant θ₂ = 90° dans la loi de Snell-Descartes :

Angle limite de réflexion totale (passage milieu dense → milieu moins dense)
θ_limite = arcsin(n₂ / n₁)
Valable uniquement si n₁ > n₂ (passage dense → moins dense). Pour l'interface eau/air : θ_lim = arcsin(1/1,33) ≈ 49°.

Concrètement : si tu plonges sous l'eau d'une piscine et que tu regardes vers le haut, tu vois le monde extérieur compressé dans un cône d'environ 98° (= 2 × 49°). À l'extérieur de ce cône, tu ne vois plus que le reflet du fond du bassin — la surface est devenue un miroir.

### 5. Application clinique — La fibroscopie et l'endoscopie

La **fibre optique** est l'application industrielle la plus spectaculaire de la réflexion totale interne. Une fibre optique est un long fil de verre très fin (≈ 10-100 µm de diamètre) entouré d'une gaine d'indice plus faible. Quand on injecte un rayon de lumière à une extrémité avec un angle adapté, ce rayon subit à chaque rebond une **réflexion totale interne** sur les parois — il ne sort jamais latéralement, et progresse en zigzag jusqu'à l'autre bout, où il ressort intact. Une fibre peut transmettre une image sur des dizaines de mètres sans perte.

Applications médicales directes :

- **Fibroscopie digestive** (gastroscopie, coloscopie) : un faisceau de milliers de fibres optiques transmet l'image de l'intérieur de l'estomac, du colon ou des bronches jusqu'à l'œil du gastroentérologue. Un canal opérateur intégré permet de prélever des biopsies à distance.

- **Endoscopie urologique, gynécologique, articulaire** (arthroscopie) : même principe pour explorer la vessie, l'utérus ou l'intérieur d'un genou.

- **Bronchoscopie** en pneumologie pour visualiser les bronches.

- **Laparoscopie** en chirurgie viscérale : minicaméra et instruments fins introduits par de petites incisions abdominales, image transmise via fibres optiques.

La fibroscopie a révolutionné la médecine moderne : explorations diagnostiques peu invasives, biopsies ciblées, chirurgies par voie endoscopique. Tout ça grâce à un angle d'incidence supérieur à 49°.

**🧪 Mini-exercice — Réfraction air/cornéeÉnoncé :** Un rayon lumineux arrive sur la cornée (n_cornée = 1,37) avec un angle d'incidence de 30° dans l'air (n_air = 1,00). Quel est l'angle de réfraction θ₂ dans la cornée ? (On donne sin(30°) = 0,5.)

👁️ Voir la correction

**Correction :**

Loi de Snell : n₁·sin(θ₁) = n₂·sin(θ₂), donc sin(θ₂) = (n₁/n₂)·sin(θ₁) = (1/1,37) × 0,5 ≈ 0,365.

θ₂ = arcsin(0,365) ≈ **21°**.

Le rayon s'est rapproché de la normale (de 30° à 21°), comme attendu en entrant dans un milieu plus dense. C'est exactement ce qui se passe quand la lumière entre dans ton œil : la cornée la dévie pour la concentrer vers la rétine. La cornée à elle seule fournit environ deux tiers de la convergence totale de l'œil (~43 dioptries sur 60).

**🧪 Mini-exercice — Angle limite eau/airÉnoncé :** Quel est l'angle limite de réflexion totale à l'interface eau (n=1,33) → air (n=1) ? Que se passe-t-il pour un nageur qui regarde la surface en oblique sous l'eau avec un angle supérieur à cet angle limite ?

👁️ Voir la correction

**Correction :**

θ_lim = arcsin(n₂/n₁) = arcsin(1/1,33) = arcsin(0,75) ≈ **49°**.

Pour un angle d'incidence (sous l'eau) supérieur à 49°, la lumière ne sort plus dans l'air : elle est **totalement réfléchie** sur la surface, qui se comporte comme un miroir parfait. Le nageur voit alors le reflet du fond du bassin au lieu du monde extérieur. C'est aussi pour cette raison qu'un poisson, vu de l'extérieur, ne voit le monde « aérien » que dans un cône d'environ 98° au-dessus de lui — au-delà, il ne voit que le reflet du fond du bassin. C'est encore cette même physique qui permet à une fibre optique de canaliser la lumière sur des dizaines de mètres.

## III. Les dioptres plan et sphérique

Un dioptre, c'est juste le nom savant pour une **interface entre deux milieux transparents d'indices différents**. Quand il est plan, il déforme un peu les distances apparentes. Quand il est sphérique, il fait converger ou diverger les rayons — et c'est exactement la fonction de la cornée de ton œil.

### 1. 🤔 Le problème — Pourquoi un poisson dans un aquarium paraît plus gros et plus proche ?

Regarde un poisson dans un aquarium par le côté en verre : il semble plus proche du verre qu'il ne l'est réellement. Et si tu déplaces la tête, il a l'air de bouger d'une drôle de façon. Ce n'est pas le poisson qui te trompe — c'est la **vitre + l'eau** qui font office de dioptre plan, et tordent la position apparente.

### 2. Le dioptre plan

**🔑 Dioptre plan en une phrase**

Un **dioptre plan** est une interface plane qui sépare deux milieux transparents d'indices n₁ et n₂. La lumière y obéit à Snell-Descartes — et c'est tout. Conséquence directe : un objet vu depuis le milieu opposé apparaît à une **profondeur apparente** différente de sa profondeur réelle.

Sans entrer dans la démonstration, la **profondeur apparente** d'un objet immergé, vu depuis l'air en incidence quasi-normale (regarder presque vertical), vaut :

Profondeur apparente d'un objet immergé
p_apparente = p_réelle × (n_observateur / n_objet)
Exemple : poisson à 1 m sous l'eau (n=1,33) vu depuis l'air (n=1) → p_apparente = 1 × (1/1,33) ≈ 0,75 m. Il a l'air 25 % plus proche qu'il n'est.

Inversement, un objet hors de l'eau vu par un poisson sous l'eau apparaît plus loin (p_apparente = p_réelle × (1,33/1) ≈ 1,33 × p_réelle). C'est la même physique, vue dans l'autre sens.

### 3. Le dioptre sphérique — Convergent vs divergent

Un **dioptre sphérique** est une interface courbée en forme de portion de sphère. C'est le cas de la cornée de ton œil (interface air-cornée approximativement sphérique), d'une goutte d'eau, ou d'une lentille (qu'on verra en section V, et qui est faite de deux dioptres sphériques accolés).

Selon le sens de la courbure et le rapport des indices, un dioptre sphérique est :

- **Convergent** : il rapproche les rayons parallèles vers un point (le foyer image F' ). Exemple physiologique : la cornée de l'œil, qui fait converger la lumière vers la rétine.

- **Divergent** : il écarte les rayons parallèles, qui semblent provenir d'un point virtuel en arrière. Exemple : la face arrière concave d'un dioptre sphérique en verre.

### 4. Foyers, distance focale, vergence

Pour un dioptre (ou une lentille) convergent, tout faisceau de rayons parallèles arrivant parallèlement à l'axe optique converge en un point appelé **foyer image F'**. La distance entre le dioptre et son foyer image est la **distance focale image f'**.

Au lieu de parler de distance focale, les opticiens et les médecins préfèrent parler de **vergence**, qui est l'inverse de la distance focale :

Vergence d'un dioptre ou d'une lentille
V = 1 / f' (avec f' en mètres)
Unité : **dioptrie (δ)**, qui équivaut à 1 m⁻¹. Plus V est grand, plus le dioptre/lentille est convergent. V > 0 → convergent · V < 0 → divergent · V = 0 → pas d'effet (vitre plane).

Quelques ordres de grandeur médicaux à mémoriser :

- **Cornée** : V ≈ +43 δ (très fortement convergente — c'est le « gros moteur » de l'œil)

- **Cristallin au repos** : V ≈ +18 δ (convergent, ajustable)

- **Œil total au repos** : V_total ≈ +60 δ (cornée + cristallin)

- **Lunettes de myope** : V négative (−1 δ à −10 δ selon la sévérité de la myopie)

- **Lunettes d'hypermétrope** : V positive (+1 δ à +5 δ)

- **Loupe simple** : V ≈ +10 à +20 δ

**🧠 Astuce — La vergence est additive **

Si tu accoles deux dioptres minces (ou deux lentilles minces) bout à bout, leurs vergences **s'additionnent** : V_total = V₁ + V₂. C'est pour ça que l'œil au repos vaut 43 + 18 ≈ 60 δ (cornée + cristallin). C'est aussi pour ça qu'un opticien peut « doser » la correction d'un myope en ajoutant ou retirant des fractions de dioptrie. La dioptrie est l'unité additive de l'optique, ce qui en fait l'unité de choix en clinique.

### 5. Application clinique — La cornée comme dioptre convergent

La **cornée** est anatomiquement une calotte sphérique transparente, d'environ 11 mm de diamètre et 0,5 mm d'épaisseur, qui forme la face avant de l'œil. Optiquement, c'est un **dioptre sphérique convergent** entre l'air (n=1) et la cornée (n≈1,37). Sa courbure (rayon ≈ 7,8 mm) lui confère une vergence de +43 dioptries — c'est de loin la plus puissante du corps humain.

Ce que ça change cliniquement :

- **Cornée = 65 % de la convergence totale de l'œil.** Une petite modification de la courbure cornéenne a un effet majeur sur la vision. C'est tout l'enjeu de la **chirurgie réfractive au laser** (LASIK, PKR) : on remodèle au laser la surface de la cornée pour modifier sa vergence et corriger myopie ou hypermétropie.

- **Cornée + larmes = dioptre composite.** Le film lacrymal recouvre la cornée et lisse les micro-irrégularités. Une sécheresse oculaire altère ce film et trouble la vision — d'où les larmes artificielles prescrites en cas de sécheresse.

- **Astigmatisme cornéen.** Si la cornée n'est pas parfaitement sphérique (plus courbée dans un méridien que dans l'autre), elle ne focalise pas la lumière en un point net.

- **Kératocône**, ulcère cornéen, opacités cornéennes (post-infectieuses, post-traumatiques) → indications de greffe de cornée (kératoplastie), une des greffes les plus pratiquées au monde.

**🧪 Mini-exercice — Vergence et distance focaleÉnoncé :** Une cornée a une vergence de +43 dioptries. (a) Quelle est sa distance focale image ? (b) Une autre cornée (myopie congénitale) a +47 δ. Quelle est sa nouvelle distance focale ?

👁️ Voir la correction

**Correction :(a)** f' = 1/V = 1/43 ≈ **0,023 m = 2,3 cm**. C'est cohérent : la rétine est située environ à 2,4 cm en arrière de la cornée, donc les rayons parallèles (objet à l'infini) convergent quasiment sur la rétine — d'où la vision nette de loin sans accommodation.

**(b)** f' = 1/47 ≈ **0,021 m = 2,1 cm**. Le foyer s'est rapproché de 2 mm — il est désormais avant la rétine. Les rayons convergent trop tôt et divergent à nouveau avant d'arriver sur la rétine → image floue. C'est exactement le mécanisme d'une myopie d'origine cornéenne (cornée trop bombée). Pour corriger, on diminue cette vergence excessive avec une lentille divergente devant l'œil.

## IV. Les miroirs plans et sphériques

Les miroirs obéissent à la même logique que les dioptres et les lentilles : on classe par forme (plan, sphérique) et par effet (convergent, divergent). En médecine, les miroirs servent à éclairer ou inspecter une cavité (gorge, oreille, fond d'œil, dent) — pas autant que les lentilles, mais leur compréhension fait partie du paysage.

### 1. 🤔 Le problème — Pourquoi ton reflet est-il inversé gauche-droite mais pas haut-bas ?

Tiens-toi devant ton miroir, lève la main droite : ton reflet lève « sa main gauche » (en fait c'est la même main, mais à gauche dans le miroir). Mais lève la tête, ton reflet lève la tête aussi. Pourquoi le miroir inverse-t-il la gauche-droite mais pas le haut-bas ? En fait, il n'inverse **aucun des deux** — il inverse seulement **l'avant-arrière** (la profondeur). C'est ton cerveau qui interprète cette inversion comme une inversion gauche-droite parce qu'il imagine tourner derrière le miroir pour comparer. La physique du miroir plan est juste : image symétrique par rapport au plan du miroir .

### 2. Le miroir plan

**🔑 Miroir plan en une phrase**

Un **miroir plan** renvoie tous les rayons selon la loi de la réflexion (θ_réfléchi = θ_incident par rapport à la normale). L'image d'un objet est **symétrique** de l'objet par rapport au plan du miroir, **virtuelle** (les rayons ne convergent pas réellement derrière le miroir, ils semblent en venir), **droite** et de **même taille** que l'objet.

« Image virtuelle » : si tu places une feuille de papier à l'endroit où ton image semble se trouver (derrière le miroir), il n'y a aucune lumière qui y converge — l'image n'existe que dans la perception de l'observateur. C'est l'opposé d'une « image réelle » (qu'on verra avec les lentilles), où la lumière converge effectivement en un point et où tu peux capter l'image sur un écran.

### 3. Les miroirs sphériques — Concave vs convexe

Un miroir sphérique est une portion de sphère réfléchissante :

- **Miroir concave** (creux côté objet) : convergent . Les rayons parallèles à l'axe optique convergent vers un foyer F situé devant le miroir. C'est le miroir « grossissant » du cabinet de toilette quand tu es près. C'est aussi le miroir frontal des médecins ORL.

- **Miroir convexe** (bombé côté objet) : divergent . Les rayons parallèles divergent après réflexion, comme s'ils provenaient d'un foyer virtuel derrière le miroir. C'est le miroir « grand angle » des rétroviseurs de voiture (« objects in mirror are closer than they appear »).

Pour un miroir sphérique de rayon de courbure R, la distance focale est :

Distance focale d'un miroir sphérique
f = R / 2
R = rayon de courbure de la sphère · f > 0 pour un miroir concave (convergent) · f < 0 pour un miroir convexe (divergent).

### 4. Formule de conjugaison des miroirs sphériques

Comme pour les lentilles, la position de l'image (notée p') en fonction de la position de l'objet (notée p) obéit à une relation de conjugaison . Avec la convention d'origine au sommet du miroir et l'axe optique orienté vers l'objet, on a :

Relation de conjugaison (miroir sphérique)
1/p' + 1/p = 2/R = 1/f
p = position de l'objet · p' = position de l'image · f = distance focale du miroir. Pas besoin de retenir cette formule en l'état — l'analogue pour les lentilles (section V) est beaucoup plus utilisé en médecine.

### 5. Applications cliniques — Du miroir frontal à l'ophtalmoscope

Les miroirs servent surtout en médecine pour éclairer ou inspecter une cavité difficile d'accès :

- **Miroir frontal ORL** : disque métallique concave porté en bandeau sur le front du médecin, troué en son centre. Il réfléchit la lumière d'une source située derrière le patient et la concentre vers le fond de la gorge ou l'oreille, permettant au médecin de voir clairement à travers le trou central. C'est l'instrument iconique du médecin ORL — encore utilisé en routine.

- **Ophtalmoscope direct** : utilise un petit miroir incliné qui renvoie la lumière d'une ampoule vers la pupille du patient pour éclairer la rétine, puis laisse passer la lumière qui revient pour que le médecin voie le fond d'œil. Permet le dépistage de rétinopathie diabétique, d'œdème papillaire (hypertension intracrânienne), de décollement de rétine.

- **Miroir de dentiste** : petit miroir plan circulaire au bout d'un manche, qui permet au dentiste de voir l'arrière des dents et la face linguale des molaires sans contorsion. Souvent miroir grossissant pour mieux voir les caries.

- **Otoscope** : combine un petit speculum et un éclairage axial pour visualiser le conduit auditif externe et le tympan.

À l'ère de la vidéo-endoscopie haute définition, ces instruments « simples » restent omniprésents dans toutes les consultations, en routine.

**🧪 Mini-exercice — Miroir convergentÉnoncé :** Un miroir frontal ORL a un rayon de courbure de 30 cm (face réfléchissante concave). (a) Quelle est sa distance focale ? (b) À quelle distance du miroir doit se trouver le patient pour que l'image de la lampe se forme exactement au niveau de sa gorge ?

👁️ Voir la correction

**Correction :(a)** f = R/2 = 30/2 = **15 cm**.

**(b)** Si on veut que l'image se forme à une distance p' précise (la gorge du patient), il faut placer la lampe à une distance p donnée par la relation de conjugaison : 1/p' + 1/p = 1/f. En pratique, le médecin règle empiriquement la distance en penchant la tête, mais l'idée physique est là : le miroir concave concentre la lumière en un point — exactement la propriété recherchée pour bien éclairer une cavité.

## V. Les lentilles minces — le cœur du chapitre

Voici la section qui justifie tout le reste. Une lentille mince est un morceau de verre courbé qui combine deux dioptres sphériques accolés . C'est le cœur de toutes les corrections visuelles (lunettes, lentilles de contact), de tous les microscopes, de tous les appareils photo, de tous les télescopes — et au final, c'est le modèle physique du cristallin de ton œil. Ici on prend le temps : c'est une section à bien maîtriser.

### 1. 🤔 Le problème — Comment une lentille transforme un objet en une image ?

Place une bougie allumée à 20 cm d'une loupe (lentille convergente) et un écran de l'autre côté. En déplaçant l'écran, tu vas trouver une position où apparaît une **image nette** de la flamme — mais cette image est renversée (la flamme pointe vers le bas) et de taille différente de la bougie originale. Comment prédire où se forme cette image, et de quelle taille ?

C'est exactement ce que les lentilles minces permettent de calculer, avec deux outils complémentaires : la **construction graphique** (3 rayons fondamentaux) et la **relation de conjugaison** (formule).

### 2. Lentille convergente vs lentille divergente

Deux grandes familles de lentilles minces :

- **Lentille convergente** (biconvexe, plus épaisse au centre qu'aux bords) : ramène les rayons parallèles vers un foyer image F' réel. Vergence V > 0. Symbole : un trait avec deux flèches pointées vers l'extérieur. Exemple : loupe, cristallin de l'œil, objectif d'appareil photo.

- **Lentille divergente** (biconcave, plus mince au centre qu'aux bords) : écarte les rayons parallèles, qui semblent provenir d'un foyer image F' virtuel en amont de la lentille. Vergence V < 0. Symbole : un trait avec deux flèches pointées vers l'intérieur. Exemple : verres de myope.

Une lentille convergente est définie par sa **distance focale image f'** et sa **vergence V = 1/f'** (en dioptries δ). Pour une lentille divergente, f' < 0 et V < 0.

### 3. Les 3 rayons fondamentaux pour construire une image

C'est l'**outil central** de l'optique géométrique. Pour construire graphiquement l'image A'B' d'un objet AB par une lentille mince, on choisit un point caractéristique (le sommet B de la flèche-objet, par exemple) et on trace **3 rayons particuliers** qui ont tous des trajectoires prévisibles :

- **Rayon 1 — parallèle à l'axe optique** : il arrive parallèle à l'axe et ressort en passant par le foyer image F'.

- **Rayon 2 — passant par le centre optique O** : il passe par le centre de la lentille sans être dévié (rayon « droit »).

- **Rayon 3 — passant par le foyer objet F** : il arrive en passant par le foyer objet F et ressort parallèle à l'axe optique.

Le point B' où ces trois rayons se croisent (ou semblent se croiser, pour une image virtuelle) est l'image du point B. On répète l'opération pour A (en général sur l'axe, donc A' aussi sur l'axe), et on obtient l'image complète A'B'.

[FIGURE physique_ch6_fig03_3rayons_convergente.png]

**Figure 3** — Construction d'une image par une lentille convergente avec les 3 rayons fondamentaux. Pour un objet placé au-delà du foyer F, l'image est réelle, renversée et peut être projetée sur un écran.

**🔑 Méthode universelle — Tracer les 3 rayons**

À chaque exercice de construction d'image, applique mécaniquement ces 3 règles. Tu n'as **besoin que de deux** d'entre elles pour trouver l'image (deux droites suffisent à définir leur intersection) — le troisième est juste là pour vérifier. C'est exactement la méthode que les concepteurs d'examens attendent : démarche systématique, jamais d'improvisation.

### 4. La relation de conjugaison — Calculer la position de l'image

La construction graphique est qualitative. Pour un calcul numérique précis, on utilise la **relation de conjugaison de Descartes**. Avec la convention d'origine au centre optique O et l'axe orienté dans le sens de propagation de la lumière (positif vers la droite), elle s'écrit :

Relation de conjugaison — Lentille mince
1/p' − 1/p = 1/f'
p = position algébrique de l'objet par rapport à O (négatif si à gauche) · p' = position algébrique de l'image (positif si à droite) · f' = distance focale image (positif si convergente, négatif si divergente).

À partir de cette relation, on calcule la **position** de l'image. Pour connaître la **taille**, on utilise le **grandissement transversal** :

Grandissement transversal
γ = A'B' / AB = p' / p
γ > 0 → image droite (même sens que l'objet) · γ < 0 → image renversée · |γ| > 1 → agrandie · |γ| < 1 → rétrécie.

### 5. Les 4 cas typiques d'image par une lentille convergente

Selon la position de l'objet par rapport à la lentille convergente, l'image change de nature :

|

| Position de l'objet
| Position de l'image
| Nature de l'image
| Application typique

| Objet à l'infini (très loin)
| Au foyer image F'
| Réelle, ponctuelle
| Vision de loin (œil au repos)

| Au-delà de 2f' (loin)
| Entre f' et 2f'
| Réelle, renversée, **réduite**
| Appareil photo, œil

| À 2f' exactement
| À 2f' de l'autre côté
| Réelle, renversée, **même taille**
| Photocopie 1:1

| Entre f' et 2f'
| Au-delà de 2f'
| Réelle, renversée, **agrandie**
| Vidéoprojecteur

| Entre la lentille et f' (très près)
| De l'autre côté de l'objet
| **Virtuelle**, droite, agrandie
| Loupe

**🧠 Mnémo Medeos — « Plus l'objet s'approche, plus l'image s'éloigne »**

Avec une lentille convergente, quand l'objet est très loin , l'image se forme au foyer . Quand l'objet se rapproche, l'image s'éloigne — d'abord lentement, puis de plus en plus vite. Quand l'objet atteint exactement le foyer objet F , l'image part à l'infini. Et quand l'objet est plus proche que F , l'image bascule de l'autre côté : elle devient **virtuelle**, du même côté que l'objet, droite et agrandie — c'est le mode « loupe ». Cette dynamique est exactement celle de ton œil quand tu accommodes pour voir de plus en plus près.

### 6. Lentille divergente — Image toujours virtuelle

Pour une lentille divergente (V < 0, f' < 0), la situation est plus simple :

- L'image d'un objet réel est **toujours virtuelle** (du même côté que l'objet)

- L'image est **toujours droite** (γ > 0)

- L'image est **toujours plus petite** que l'objet (|γ| < 1)

[FIGURE physique_ch6_fig04_lentille_divergente.png]

**Figure 4** — Lentille divergente : l'image d'un objet réel est toujours virtuelle, droite et réduite. C'est exactement le rôle des verres de myope (vergence négative).

### 7. Application clinique — Lire une ordonnance de lunettes

Une ordonnance de lunettes contient, pour chaque œil (Œil Droit = OD, Œil Gauche = OG), une série de chiffres comme « −2,50 (+0,75) 90° ». Voici le décodage :

- **Premier nombre (−2,50)** = vergence sphérique en dioptries. Négatif = lentille divergente = correction de **myopie** (−2,50 δ = myopie modérée). Positif = lentille convergente = correction d'**hypermétropie** ou **presbytie**.

- **Deuxième nombre entre parenthèses (+0,75)** = vergence cylindrique additionnelle. Présent uniquement en cas d'**astigmatisme** (cornée non sphérique) — la lentille apporte une vergence supplémentaire dans un seul axe.

- **Troisième nombre (90°)** = orientation de l'axe cylindrique, en degrés. Indique dans quelle direction la lentille cylindrique est orientée.

- **« Add. +2,00 »** (parfois ajouté) = addition de la vergence en vision de près (verres progressifs ou doubles foyers, en cas de presbytie). Le verre devient plus convergent dans sa partie basse, là où on lit.

Tu comprends maintenant qu'**une ordonnance de lunettes est de la physique pure** : on prescrit littéralement la vergence (en dioptries) du dioptre artificiel qu'il faut ajouter devant l'œil pour compenser le défaut. Tu as déjà tous les outils physiques pour comprendre la correction des amétropies (myopie, hypermétropie, astigmatisme, presbytie).

### 8. Le grandissement angulaire — Pour la loupe

Une **loupe** est une lentille convergente courte (f' typiquement 5 à 25 cm, donc V = 4 à 20 δ) utilisée pour voir plus gros un petit objet placé entre la lentille et son foyer. Comme on l'a vu dans le tableau ci-dessus, l'image est alors virtuelle, droite et agrandie.

Le **grossissement** apporté par la loupe est typiquement :

Grossissement standard d'une loupe
G = 25 cm / f' (avec f' en cm)
25 cm = punctum proximum standard de l'œil emmétrope adulte (distance minimale de vision nette confortable).

Une loupe de 5 cm de focale (V = +20 δ) grossit donc d'un facteur G = 25/5 = 5 fois — c'est le standard d'un bijoutier ou d'un dermatologue qui examine une lésion cutanée à la dermoscopie.

**🧪 Mini-exercice — Position de l'image avec la formule de conjugaisonÉnoncé :** Un objet est placé à 30 cm en avant d'une lentille convergente de vergence V = +5 dioptries. Calcule (a) la distance focale f', (b) la position p' de l'image, (c) le grandissement γ, (d) la taille de l'image si l'objet mesure 4 cm. (On adoptera la convention p < 0 si l'objet est en amont, p' > 0 si l'image est en aval.)

👁️ Voir la correction

**Correction :(a)** f' = 1/V = 1/5 = **0,2 m = 20 cm**.

**(b)** p = −30 cm = −0,3 m (objet à gauche). Relation de conjugaison : 1/p' = 1/f' + 1/p = 1/0,2 + 1/(−0,3) = 5 − 3,33 = 1,67. Donc p' = 1/1,67 ≈ **0,60 m = 60 cm** (image à droite, réelle).

**(c)** γ = p'/p = 0,60 / (−0,30) = **−2** (image renversée, deux fois plus grande).

**(d)** Taille de l'image = |γ| × taille objet = 2 × 4 = **8 cm** (renversée).

C'est typiquement la configuration d'un vidéoprojecteur : objet à 30 cm de la lentille, image agrandie à 60 cm, renversée — c'est pourquoi le vidéoprojecteur est conçu pour retourner mécaniquement l'image avant de la projeter sur l'écran.

**🧪 Mini-exercice — Lentille divergente pour la myopieÉnoncé :** Un opticien prescrit à un myope des verres de −3 dioptries. (a) Quelle est la distance focale de chaque verre ? (b) Est-elle positive ou négative ? (c) Quel est l'effet sur les rayons parallèles qui arrivent du lointain ?

👁️ Voir la correction

**Correction :(a)** f' = 1/V = 1/(−3) ≈ **−0,33 m = −33 cm**.

**(b)** Distance focale **négative** — caractéristique d'une lentille divergente.

**(c)** Les rayons parallèles arrivant du lointain divergent après la traversée du verre, comme s'ils provenaient d'un foyer virtuel situé à 33 cm en avant du verre (du même côté que l'objet). Cette divergence supplémentaire compense la vergence excessive de l'œil myope, et la convergence totale du système (verre + œil) ramène l'image nette sur la rétine.

## 🎓 Ce que tu emportes

Ce chapitre a ouvert un **nouveau pilier** du programme : on a quitté les solutions, les membranes et l'électrophysiologie pour entrer dans le monde des ondes électromagnétiques. Tu as situé la **lumière visible** dans le spectre EM complet (du radio au gamma), tu as mémorisé la relation E = h·ν et compris pourquoi un photon UV abîme l'ADN alors qu'un photon visible se contente d'exciter la rétine sans nuire — toute la frontière des rayonnements ionisants est posée.

Avec les **lois de Snell-Descartes**, tu peux maintenant calculer la trajectoire de tout rayon lumineux à n'importe quelle interface — air/cornée, air/eau, fibre/gaine optique. Tu as compris pourquoi un endoscope médical fonctionne grâce à la **réflexion totale interne** au-delà de l'angle limite. Tu sais distinguer un **dioptre convergent** (cornée, +43 δ) d'un dioptre divergent, et tu connais la définition cardinale de la **vergence en dioptries** qui est l'unité de tous les opticiens du monde.

Le cœur du chapitre, c'était la **section V sur les lentilles minces**. Tu sais maintenant construire l'image d'un objet avec les **3 rayons fondamentaux** (parallèle → F', par O sans dévier, par F → parallèle), tu connais la **relation de conjugaison 1/p' − 1/p = 1/f'**, et tu sais calculer un grandissement. Tu sais lire une ordonnance de lunettes et tu comprends ce que veulent dire « −2,50 δ » ou « +1,75 (+0,5) 180° » — c'est de la physique pure traduite en prescription médicale.

MEDEOS — Chapitre 6 : OEM, optique géométrique — dioptres, miroirs, lentilles · medeos-sante.fr

×

medeos-sante.fr