Chapitre 8 : Radioactivité — types et cinétique - MEDEOS

Chapitre 8

# Radioactivité — types et cinétique

Du noyau instable aux radiotraceurs de la médecine nucléaire — comprendre la désintégration et lire un papier semi-log.

## 🎯 Pourquoi ce chapitre est un des plus rentables de la deuxième moitié du programme

Tu marches dans la rue, tu respires un peu d'air ambiant, et tu viens d'inhaler quelques atomes radioactifs (du radon issu de la décomposition de l'uranium des sols). Tu manges une banane, tu avales du potassium-40 radioactif. Tu fais une scintigraphie thyroïdienne ou un PET-scan, on t'injecte un radiotraceur qui va se fixer sur la zone à étudier et émettre des rayons γ détectables. La radioactivité est partout — dans l'environnement, dans ton corps, et au cœur de la médecine nucléaire moderne. Ce chapitre te donne les outils pour la comprendre.

L'histoire tient en deux mots : un noyau atomique instable finit, tôt ou tard, par se transformer en un noyau plus stable, en émettant une particule ou un photon γ. Quand cela arrive à beaucoup de noyaux à la fois, ils ne se désintègrent pas tous en même temps — il y en a toujours un certain pourcentage qui se transforme par unité de temps. Le résultat est une **décroissance exponentielle**, dont la signature est une notion centrale : la **demi-vie**. À chaque demi-vie qui passe, il reste la moitié des noyaux. Après 10 demi-vies, il n'en reste plus que 1/1000. Ce sont ces propriétés mathématiques qui dictent toute la médecine nucléaire — et tu vas les maîtriser dans ce chapitre.

🎯 **À la fin de ce chapitre, tu sauras :**

- Manipuler les fonctions **exponentielle** et **logarithme** et linéariser une décroissance sur un **papier semi-log**

- Décrire la structure du noyau (Z, N, A), identifier les **isotopes**, situer un noyau sur la vallée de stabilité

- Identifier les **5 types de désintégrations radioactives** (α, β⁻, β⁺, capture électronique, γ) et écrire l'équation correspondante

- Appliquer la **loi de décroissance** N(t) = N₀·e^(−λt), calculer une demi-vie T½ = ln(2)/λ, une activité A = λ·N

- Calculer l'**activité résiduelle** après n demi-vies et utiliser la règle « 10 demi-vies = 1/1000 »

- Comprendre pourquoi le **⁹⁹ᵐTc** (T½ = 6 h) et le **¹⁸F-FDG** (T½ = 110 min) sont les radiotraceurs les plus utilisés au monde

**📚 Ce que tu sais déjà** — Au ch.7, tu as franchi la frontière des rayonnements ionisants (E ≳ 13,6 eV). En physique de Terminale, tu connais la structure d'un noyau (Z protons + N neutrons) et la fonction exponentielle (croissance et décroissance). En SVT, tu as croisé la datation au ¹⁴C. Ce chapitre va relier **tout ça** à la médecine : produire un radiotraceur, l'injecter, le détecter, et l'utiliser pour visualiser une tumeur ou évaluer une thyroïde. Le tout en quantifiant rigoureusement combien de radioactivité reste à un instant donné.

## I. Mini-outil maths — Exponentielle, logarithme, papier semi-log

Avant d'attaquer la radioactivité proprement dite, on installe l'outil qui en est la clé : la fonction **exponentielle** et son inverse, le **logarithme**. Promesse : pas de gymnastique abstraite. Juste deux fonctions et une astuce graphique (le papier semi-log) qui transforme une décroissance courbée en une simple droite. Avec ça, tu liras un graphique de désintégration en 10 secondes.

### 1. 🤔 Le problème — Quand une grandeur décroît proportionnellement à elle-même

Imagine une banque qui te promet 5 % d'intérêts par an. La première année, ton capital de 1000 € rapporte 50 €. La deuxième année, le nouveau capital (1050 €) rapporte 52,50 €. La troisième, encore plus. Le taux est constant, mais le gain croît parce que le capital croît. C'est exactement le mécanisme d'une **croissance exponentielle** — la dérivée de la grandeur est proportionnelle à la grandeur elle-même. Inversement, pour une **décroissance exponentielle**, le rythme de perte est proportionnel à ce qu'il reste : c'est exactement ce qui se passe dans une population de noyaux radioactifs.

### 2. La fonction exponentielle — Décroissance e^(−λt)

La fonction exponentielle de base est notée **e^x** avec e ≈ 2,718. Ses deux comportements à mémoriser :

- **e^x croissante** (pour x > 0) : démarre à 1 en x=0, vaut e ≈ 2,7 en x=1, vaut e² ≈ 7,4 en x=2, et explose vers l'infini quand x augmente.

- **e^(−x) décroissante** (la fonction qu'on va utiliser) : démarre à 1 en x=0, vaut 1/e ≈ 0,37 en x=1, vaut 1/e² ≈ 0,14 en x=2, et tend vers 0 quand x augmente — mais sans jamais l'atteindre.

En physique, la décroissance radioactive s'écrit avec une constante de désintégration λ (lambda) qui mesure la « rapidité » de la décroissance :

Décroissance exponentielle générique
N(t) = N₀ × e^(−λ·t)
N(t) = quantité restante à l'instant t · N₀ = quantité initiale (à t=0) · λ = constante de désintégration (en s⁻¹, min⁻¹, h⁻¹...) · t = temps écoulé. Plus λ est grand, plus la décroissance est rapide.

### 3. Le logarithme — Inverse de l'exponentielle

Le **logarithme népérien** (noté ln) est l'opération inverse de l'exponentielle :

Logarithme et exponentielle — Définition
si y = e^x alors x = ln(y) · ln(e^x) = x · e^(ln y) = y

Quatre propriétés à mémoriser, qu'on utilise sans arrêt :

- **ln(a × b) = ln(a) + ln(b)** (transforme un produit en somme)

- **ln(a / b) = ln(a) − ln(b)** (transforme un quotient en différence)

- **ln(a^n) = n × ln(a)** (transforme une puissance en multiplication)

- **ln(1) = 0** · **ln(e) = 1** · **ln(2) ≈ 0,693** · **ln(10) ≈ 2,3**

Pour les calculs en base 10, on utilise aussi le **logarithme décimal** log = log_10, avec la conversion **ln(x) = 2,3 × log(x)**. Tu as déjà vu cette conversion à plusieurs reprises (ch.2 pour le pH, ch.5 pour Nernst).

### 4. Le passage à la droite — Le papier semi-log

L'astuce graphique qui change tout : si tu prends le logarithme de la décroissance exponentielle, tu obtiens une **droite décroissante**. Partons de N(t) = N₀·e^(−λt). Appliquons ln aux deux côtés :

Linéarisation d'une décroissance exponentielle
ln N(t) = ln N₀ − λ × t

C'est l'équation d'une droite « y = b − a·x » avec b = ln N₀ (ordonnée à l'origine) et a = λ (pente). Sur un **papier semi-log** (axe horizontal linéaire pour t, axe vertical logarithmique pour N), la décroissance exponentielle apparaît comme une droite . Et la pente de cette droite donne directement λ.

[FIGURE physique_ch8_fig01_exponentielle_semilog.png]

**Figure 1** — La même décroissance exponentielle vue en linéaire (courbe) et en semi-log (droite). Le papier semi-log linéarise la décroissance — un outil graphique fondamental en cinétique radioactive.

**🧠 Mnémo Medeos — « ln transforme une décroissance courbée en droite »**

Devant n'importe quel graphique d'évolution dans le temps : si tu vois une **courbe en linéaire** qui ressemble à une décroissance, passe en **semi-log** (axe y logarithmique). Si ça devient une droite , c'est une exponentielle. Si ça reste courbé, ce n'en est pas une. Ce simple geste te permet d'identifier en 2 secondes la nature d'une décroissance — radioactivité, pharmacocinétique d'un médicament dans le sang, croissance bactérienne logarithmique, etc.

### 5. Application pratique — Lire un graphique radioactif

Imagine qu'on te donne un graphique en semi-log d'une décroissance et qu'on te demande de retrouver λ et T½. Deux approches :

- **Approche pente** : choisis deux points (t₁, N₁) et (t₂, N₂) bien séparés sur la droite. Calcule : λ = (ln N₁ − ln N₂) / (t₂ − t₁). Tu obtiens λ en unités cohérentes avec l'axe x.

- **Approche demi-vie** : repère sur le graphique l'abscisse pour laquelle N a été divisé par 2. C'est directement T½. Tu en déduis λ par la formule magique du chapitre : T½ = ln(2)/λ ≈ 0,693/λ (qu'on démontrera en section IV).

**🧪 Mini-exercice — Lire une pente sur semi-logÉnoncé :** Sur un papier semi-log, on observe la droite de décroissance d'un isotope. À t = 0, N₀ = 1000 noyaux. À t = 6 heures, il reste N = 500 noyaux. (a) Quelle est la demi-vie de cet isotope ? (b) Quelle est sa constante de désintégration λ en h⁻¹ ?

👁️ Voir la correction

**Correction :(a)** N a été divisé par 2 en 6 h, donc **T½ = 6 h**.

**(b)** λ = ln(2) / T½ = 0,693 / 6 ≈ **0,116 h⁻¹**.

Avec ces valeurs, on retrouve N(12h) = 1000·e^(−0,116·12) ≈ 1000·e^(−1,39) ≈ 1000 × 0,25 = 250 noyaux. Cohérent : deux demi-vies écoulées, il reste 1/4 du nombre initial. Cet isotope est exactement le **⁹⁹ᵐTc** dont on parlera en section V.

**🧪 Mini-exercice — Reconnaissance d'une décroissanceÉnoncé :** On donne ces valeurs expérimentales d'une grandeur N(t) au cours du temps : t=0 → N=400 · t=1 → N=200 · t=2 → N=100 · t=3 → N=50 · t=4 → N=25. (a) Est-ce une décroissance exponentielle ? (b) Si oui, quelle est la demi-vie ? (c) Combien restera-t-il à t=10 ?

👁️ Voir la correction

**Correction :(a)** À chaque pas d'1 unité de temps, N est divisé par 2 (400→200→100→50→25). Le rapport constant montre que c'est bien une **décroissance exponentielle**.

**(b)** Puisque N est divisé par 2 à chaque unité de temps, **T½ = 1** (unité de temps de l'énoncé).

**(c)** 10 unités = 10 demi-vies. Il reste N₀ / 2¹⁰ = 400 / 1024 ≈ **0,4 noyau**. À l'échelle physique on dit qu' il n'en reste plus rien d'utilisable — c'est exactement le sens du mnémo « 10 demi-vies = 1/1000 » qu'on va retrouver toute la suite du chapitre.

## II. Structure du noyau atomique

Avant de comprendre comment un noyau se désintègre, il faut savoir de quoi il est fait. La réponse a été établie au début du XXᵉ siècle : un petit objet hyper-dense de protons et de neutrons, retenu ensemble par une force qui surpasse la répulsion électrostatique entre les protons. Quand cet équilibre se rompt, le noyau se transforme — c'est la radioactivité.

### 1. 🤔 Le problème — Pourquoi certains noyaux sont-ils stables et d'autres non ?

L'hydrogène (¹H) est stable depuis le Big Bang. Le carbone-12 (¹²C) aussi. Mais le carbone-14 (¹⁴C) se désintègre, avec une demi-vie de 5 700 ans — ce qui permet la datation des sites archéologiques. L'uranium-238 se désintègre, mais sur une échelle de milliards d'années. Le francium-223 se désintègre, lui, en quelques minutes. Pourquoi cette variabilité énorme entre des noyaux qui semblent voisins ? La réponse tient en deux nombres : Z (le nombre de protons) et N (le nombre de neutrons). C'est leur rapport qui détermine la stabilité.

### 2. Z, N, A — Les trois nombres qui caractérisent un noyau

**🔑 Les nucléons en une phrase**

- **Z** = numéro atomique = nombre de **protons**. Il définit l'élément chimique (H = 1, C = 6, O = 8, Fe = 26, U = 92...).

- **N** = nombre de **neutrons**. Peut varier pour un même élément, donnant les isotopes .

- **A** = nombre de **masse** = Z + N = nombre total de nucléons (protons + neutrons).

Un noyau s'écrit symboliquement **ᴬ_Z X**, où X est le symbole de l'élément. Exemples : ⁴_₂He (l'atome d'hélium-4, A=4, Z=2, N=2), ¹⁴_₆C (le carbone-14, A=14, Z=6, N=8), ²³⁸_₉₂U (l'uranium-238).

### 3. Isotopes, isobares, isotones

Trois familles utiles pour s'y retrouver dans la jungle des nucléides :

- **Isotopes** = même Z, N différent. Ce sont les variantes d'un même élément chimique. Exemple : ¹H, ²H (deutérium), ³H (tritium) ont tous Z = 1 (hydrogène) mais N = 0, 1, 2.

- **Isobares** = même A, Z différent. Ce sont des nucléides de masse identique mais d'éléments différents. Exemple : ¹⁴C (Z=6) et ¹⁴N (Z=7) — c'est exactement la transformation qui suit la désintégration β⁻ du carbone-14.

- **Isotones** = même N, Z différent. Plus rare en pratique clinique.

### 4. La vallée de stabilité — Pourquoi certains noyaux se désintègrent

Si tu places tous les noyaux connus sur un graphique avec Z en abscisse et N en ordonnée, tu obtiens un nuage de points qui suit une **vallée étroite** de stabilité. Pour les noyaux légers (Z < 20), N ≈ Z (la diagonale). Pour les noyaux plus lourds, N croît plus vite que Z (excès de neutrons nécessaire pour « diluer » la répulsion entre protons). Les noyaux en dehors de cette vallée sont radioactifs et tendent à s'en rapprocher par désintégration.

[FIGURE physique_ch8_fig02_vallee_stabilite.png]

**Figure 2** — Vallée de stabilité nucléaire. Les noyaux radioactifs en dehors de la vallée se désintègrent dans la direction qui les ramène vers les noyaux stables — β⁻ pour l'excès de neutrons, β⁺ pour l'excès de protons, α pour les noyaux trop lourds.

### 5. L'énergie de liaison — D'où vient l'énergie de la radioactivité

Quand on mesure la masse d'un noyau, elle est systématiquement inférieure à la somme des masses des nucléons isolés. Ce déficit de masse, appelé **défaut de masse Δm**, correspond à l'**énergie de liaison** du noyau via la célèbre relation d'Einstein :

Équivalence masse-énergie (Einstein)
E = Δm × c²
c = vitesse de la lumière = 3 × 10⁸ m/s. Le facteur c² ≈ 9 × 10¹⁶ J·kg⁻¹ est gigantesque : un défaut de masse minuscule libère une énergie énorme. C'est l'équation la plus célèbre de la physique.

L'énergie libérée par une désintégration radioactive (énergie cinétique des particules émises + photon γ éventuel) provient exactement de ce défaut de masse. Quand un noyau se désintègre, le noyau fils + les particules émises ont une masse totale légèrement inférieure au noyau père. La différence est convertie en énergie. C'est aussi le principe du fonctionnement des réacteurs nucléaires et des bombes A et H — la même physique sur des échelles d'énergie démesurées.

**Le carbone 14 et la datation.** Le ¹⁴C est continuellement produit dans la haute atmosphère par interaction des rayons cosmiques avec l'azote-14. Il se désintègre en ¹⁴N par β⁻ avec une demi-vie de **5 700 ans**. Tant que les organismes sont vivants, ils échangent du carbone avec leur environnement → leur ratio ¹⁴C/¹²C est constant et égal à celui de l'atmosphère. Quand l'organisme meurt, les échanges s'arrêtent → le ¹⁴C présent se désintègre sans être renouvelé, et le ratio diminue exponentiellement.

En mesurant ce ratio résiduel dans un fragment biologique ancien (os, charbon, tissu, parchemin), on remonte à l'âge du décès :

- Reste 50 % du ¹⁴C initial → 1 demi-vie = **5 700 ans**

- Reste 25 % → 2 demi-vies = **11 400 ans**

- Reste 12,5 % → 3 demi-vies = **17 100 ans**

- Limite pratique : ~50 000 ans (au-delà, il reste trop peu de ¹⁴C pour mesurer fiablement)

Cette technique, mise au point par Willard Libby (prix Nobel de chimie 1960), a révolutionné l'archéologie, la paléoanthropologie et l'histoire ancienne. Elle a permis de dater le Suaire de Turin (XIVᵉ siècle, donc médiéval et non du temps du Christ), les peintures rupestres de Lascaux (~17 000 ans), ou le « Homme de glace » Ötzi (~5 300 ans).

**🧪 Mini-exercice — Identification d'un nucléideÉnoncé :** On considère le nucléide ¹³¹_₅₃I (iode-131, utilisé en médecine nucléaire pour traiter certaines pathologies thyroïdiennes). (a) Combien de protons, neutrons et nucléons contient-il ? (b) Quel est son nom et sa relation avec le ¹²⁷I (iode stable) ?

👁️ Voir la correction

**Correction :(a)** Z = 53 protons · A = 131 nucléons · N = A − Z = 131 − 53 = **78 neutrons**.

**(b)** ¹³¹I est l'**iode-131**. ¹²⁷I a Z=53, N=74 ; ¹³¹I a Z=53, N=78. Ce sont donc des **isotopes** de l'iode (même Z, N différent). L'iode-131 a un excès de 4 neutrons par rapport à l'iode stable — il se trouve au-dessus de la vallée de stabilité et se désintègre par β⁻ vers le ¹³¹_₅₄Xe (xénon-131) stable. Cette désintégration est utilisée à la fois en imagerie scintigraphique de la thyroïde et en radiothérapie interne (cancer thyroïdien différencié).

## III. Les 5 types de désintégrations radioactives

Quand un noyau est instable, il a cinq façons principales de retrouver la stabilité. Chacune a une signature claire : qui est émis, comment changent Z et A, où va le noyau sur la vallée de stabilité. Cette section est très visuelle — toujours partir du noyau père, voir qui s'échappe, et écrire le noyau fils en équilibrant.

### 1. 🤔 Le problème — Combien de façons un noyau peut-il se désintégrer ?

Si un noyau a trop de neutrons par rapport aux protons (au-dessus de la vallée de stabilité), il peut transformer un neutron en proton : c'est la désintégration β⁻ . Si au contraire il a trop de protons, il peut transformer un proton en neutron : c'est la désintégration β⁺ , ou alors capturer un électron des couches internes ( capture électronique ). Si le noyau est trop lourd, il peut éjecter un fragment compact appelé particule α . Et enfin, un noyau qui vient juste d'être créé dans un état excité peut se désexciter en émettant un photon : c'est la désintégration γ . Total : **5 types principaux**.

### 2. La désintégration α — Pour les noyaux lourds

Une particule α est un noyau d'hélium-4 (2 protons + 2 neutrons), très stable. Quand un noyau lourd est trop massif pour rester stable, il l'éjecte d'un coup, perdant 4 nucléons et 2 protons :

Désintégration α (noyaux lourds, Z ≥ 82 typiquement)
ᴬ_Z X → ᴬ⁻⁴_(Z−2) Y + ⁴_2 He
Exemple emblématique : ²³⁸_₉₂U → ²³⁴_₉₀Th + ⁴_2 He (désintégration de l'uranium-238 en thorium-234).

Les particules α sont massives et chargées (+2) → elles sont fortement freinées dans la matière. Une simple feuille de papier ou la couche cornée de la peau les arrête. Conséquence importante en médecine : **les émetteurs α ne sont dangereux que s'ils sont inhalés ou ingérés** (les radon, par exemple). Une fois à l'intérieur des poumons, ils irradient massivement les cellules voisines.

### 3. La désintégration β⁻ — Excès de neutrons

À l'intérieur du noyau, un neutron se transforme en proton, en émettant un électron (la « particule β⁻ ») et un anti-neutrino (particule très légère, neutre, qui s'échappe sans interagir) :

Désintégration β⁻ (excès de neutrons)
n → p + e⁻ + ν̄ · ᴬ_Z X → ᴬ_(Z+1) Y + e⁻ + ν̄
A reste constant, Z augmente de 1 (un neutron devenu proton). Exemple : ¹⁴_₆C → ¹⁴_₇N + e⁻ + ν̄ (utilisé pour la datation au ¹⁴C).

Les particules β⁻ (des électrons rapides) sont moins massives que les α → elles pénètrent plus profondément (quelques millimètres dans les tissus, arrêtées par une plaque de plexiglas ou d'aluminium).

### 4. La désintégration β⁺ — Excès de protons

Mécanisme symétrique : un proton se transforme en neutron, en émettant un positron (anti-électron, noté e⁺) et un neutrino :

Désintégration β⁺ (excès de protons)
p → n + e⁺ + ν · ᴬ_Z X → ᴬ_(Z−1) Y + e⁺ + ν
A reste constant, Z diminue de 1. Exemple : ¹⁸_₉F → ¹⁸_₈O + e⁺ + ν (utilisé en TEP).

Le positron émis est l'anti-particule de l'électron. Il s'**annihile** presque instantanément en rencontrant un électron de la matière, produisant deux photons γ de 511 keV partant en sens opposés. C'est exactement le signal qu'exploite la **Tomographie par Émission de Positrons (TEP)** en médecine nucléaire — on détecte simultanément les deux photons et on triangule l'origine.

### 5. La capture électronique — Alternative à β⁺

Quand un noyau a un excès de protons, il peut aussi capturer un électron de l'une de ses propres couches internes (typiquement la couche K, la plus proche du noyau). L'électron capté se combine avec un proton pour donner un neutron + un neutrino :

Capture électronique
p + e⁻ → n + ν · ᴬ_Z X + e⁻ → ᴬ_(Z−1) Y + ν
A reste constant, Z diminue de 1 (comme β⁺). Différence avec β⁺ : aucune particule chargée n'est éjectée — juste un neutrino indétectable.

Cette désintégration laisse un « trou » sur la couche électronique interne. Un électron des couches externes vient le combler en émettant un photon X caractéristique de l'élément — c'est la signature détectable de la capture électronique.

### 6. La désintégration γ — Désexcitation pure

Quand un noyau vient juste de se désintégrer (par exemple en β⁻), le noyau fils est souvent dans un état excité (énergie supérieure à son état fondamental). Il revient à son état fondamental en émettant un photon γ — un photon de très haute énergie, généralement quelques centaines de keV à quelques MeV :

Désintégration γ (désexcitation nucléaire)
ᴬ_Z X* → ᴬ_Z X + γ
Ni A ni Z ne changent — c'est juste un photon qui sort. L'étoile désigne l'état excité métastable.

Les photons γ sont **très pénétrants** (plusieurs cm de plomb pour les arrêter de moitié). C'est cette pénétration qui permet de les détecter depuis l'extérieur du corps — base de la scintigraphie et de la TEP. À l'inverse, c'est aussi pour cela qu'on doit se protéger derrière des écrans de plomb épais quand on manipule des sources γ.

[FIGURE physique_ch8_fig03_5_desintegrations.png]

**Figure 3** — Les 5 types de désintégrations radioactives. À chaque transformation, A et Z évoluent de façon prévisible, et la conservation des charges et du nombre de nucléons est toujours vérifiée.

### 7. Les lois de conservation — Toujours équilibrer

**🔑 À chaque désintégration, 3 conservations**

- **Conservation du nombre de masse A** : la somme des A avant = la somme des A après.

- **Conservation de la charge Z** : la somme des Z avant = la somme des Z après (en comptant l'électron −1, le positron +1, le neutrino 0).

- **Conservation de l'énergie** : l'énergie libérée par le défaut de masse se répartit entre l'énergie cinétique des particules émises et l'énergie du photon γ éventuel.

**🧠 Mnémo Medeos — Tableau récap des bilans A et Z**

| | Désintégration | ΔA | ΔZ | Émis

| α | −4 | −2 | noyau ⁴He

| β⁻ | 0 | +1 | e⁻ + ν̄

| β⁺ | 0 | −1 | e⁺ + ν

| Capture e⁻ | 0 | −1 | ν (+ photon X)

| γ | 0 | 0 | photon γ

Garde ce tableau sous les yeux : il résout 80 % des QCM sur les désintégrations. Le piège classique est de confondre β⁺ et capture électronique — les deux ont ΔA=0 et ΔZ=−1, mais β⁺ éjecte un positron alors que la capture absorbe un électron de la couche K.

**🧪 Mini-exercice — Équilibrer une équation de désintégrationÉnoncé :** Le ⁴⁰_₁₉K se désintègre en partie par β⁻. Quel est le noyau fils ? Écris l'équation complète.

👁️ Voir la correction

**Correction :**

β⁻ → A inchangé (40), Z augmente de 1 (19 → 20). Z=20 correspond au calcium (Ca).

Équation : **⁴⁰_₁₉K → ⁴⁰_₂₀Ca + e⁻ + ν̄**

Le ⁴⁰K est l'isotope radioactif naturel le plus abondant dans le corps humain (~140 g chez l'adulte, ≈ 4000 désintégrations par seconde — tu es un peu radioactif). Sa demi-vie est de 1,25 milliard d'années, beaucoup plus longue que ton espérance de vie, donc tu ne risques rien — mais c'est une contribution mesurable à la radioactivité naturelle.

**🧪 Mini-exercice — Identifier la désintégration du ²²⁶RaÉnoncé :** Le ²²⁶_₈₈Ra se transforme en ²²²_₈₆Rn. (a) Quel type de désintégration ? (b) Écris l'équation. (c) Que se passe-t-il si l'on respire ce gaz issu de la désintégration ?

👁️ Voir la correction

**Correction :(a)** ΔA = −4, ΔZ = −2 → désintégration **α**.

**(b)** Équation : **²²⁶_₈₈Ra → ²²²_₈₆Rn + ⁴_₂He**.

**(c)** Le ²²²Rn (radon) est un **gaz noble radioactif** qui s'accumule dans les sous-sols et les caves mal aérés. Inhalé, il se désintègre lui-même par α dans les bronches et les alvéoles. Les particules α, normalement bloquées par la peau, irradient directement les cellules pulmonaires de l'intérieur. Le radon est aujourd'hui considéré comme la **2ᵉ cause de cancer du poumon** après le tabac, dans les régions à sol granitique (Bretagne, Massif central). Mesure préventive : aérer son habitat.

## IV. Loi de décroissance, demi-vie et activité

On a vu les types de désintégrations. Mais à quelle vitesse se font-elles ? Réponse : selon une loi statistique très précise. On ne sait pas quand un noyau donné va se désintégrer, mais on sait combien par seconde, en moyenne, dans une population de N noyaux identiques. Cette loi de décroissance, redoublée de la notion de demi-vie, est l'outil mathématique central de toute la médecine nucléaire.

### 1. 🤔 Le problème — Pourquoi la décroissance radioactive est-elle exponentielle ?

Prenons N₀ = 1 million de noyaux radioactifs identiques. À tout instant, chacun d'eux a une certaine probabilité par unité de temps de se désintégrer — appelons-la λ (en s⁻¹). Pendant un petit intervalle dt, le nombre de désintégrations est donc **proportionnel à N (le nombre de noyaux présents) et à λ (la probabilité par seconde)**. Or, à mesure que les désintégrations se produisent, N diminue, donc le rythme diminue aussi. Cette « auto-diminution » est la marque d'une décroissance exponentielle.

### 2. La loi de décroissance — N(t) = N₀·e^(−λt)

**🔑 La loi statistique de la radioactivité**

Le nombre N(t) de noyaux radioactifs encore présents à l'instant t suit une décroissance exponentielle :

Loi de décroissance radioactive
N(t) = N₀ × e^(−λ·t)
N₀ = nombre initial (à t=0) · λ = constante de désintégration (s⁻¹, h⁻¹, an⁻¹ selon l'échelle de temps).

La constante λ est propre à chaque isotope radioactif . Elle est très grande pour les isotopes à courte durée de vie (¹⁸F : λ ≈ 0,63 h⁻¹) et très petite pour les isotopes très stables (⁴⁰K : λ ≈ 5,5 × 10⁻¹⁰ an⁻¹).

### 3. La demi-vie T½ — Quand il reste la moitié

La **demi-vie** (notée T½ ou T₁/₂) est le temps nécessaire pour que la moitié des noyaux initiaux se soient désintégrés. C'est plus intuitif que λ, et c'est la grandeur communément utilisée en médecine. Posons N(T½) = N₀/2 dans la loi de décroissance :

N₀/2 = N₀·e^(−λ·T½) → 1/2 = e^(−λ·T½) → −λ·T½ = ln(1/2) = −ln(2)

Relation entre demi-vie et constante de désintégration
T½ = ln(2) / λ ≈ 0,693 / λ
Mnémo simplifié pour le calcul mental : **T½ ≈ 0,7 / λ** (et donc λ ≈ 0,7 / T½).

Conséquence majeure : **après n demi-vies, il reste N₀/2ⁿ noyaux**. Voici la suite à graver :

|

| Nombre de demi-vies écoulées
| Fraction de noyaux restants
| Pourcentage

| 1 T½ | 1/2 | 50 %

| 2 T½ | 1/4 | 25 %

| 3 T½ | 1/8 | 12,5 %

| 4 T½ | 1/16 | 6,25 %

| 5 T½ | 1/32 | ~3,1 %

| 10 T½ | 1/1024 | **~0,1 %🧠 Mnémo Medeos signature — « 10 demi-vies = 1/1000 »**

C'est **LE** chiffre à graver à vie de tout ce chapitre. Après 10 demi-vies , il reste **0,1 % du nombre initial** — autant dire qu' il ne reste plus rien d'utilisable . Cette règle gouverne tout en pratique :

- Une dose de ⁹⁹ᵐTc (T½ = 6h) administrée à un patient le matin est presque entièrement éliminée 60h plus tard (10 × 6h). Plus aucune radioactivité résiduelle gênante au-delà.

- Pour la décontamination d'un site, on dit qu'il est « propre » après 10 demi-vies de l'isotope concerné.

- Une dose ¹⁸F-FDG (T½ = 110 min) a disparu en ~18 h → un patient ayant fait une TEP le matin n'est plus radioactif le lendemain.

Cette règle revient dans tous les problèmes pratiques de radioactivité — calcul mental immédiat sans formule, juste savoir combien de demi-vies se sont écoulées.

### 4. L'activité A — Combien de désintégrations par seconde

L'**activité** d'une source radioactive est le nombre de désintégrations qu'elle produit par unité de temps. Elle est proportionnelle au nombre de noyaux présents et à la constante λ :

Activité d'une source radioactive
A(t) = λ × N(t) = λ × N₀ × e^(−λt) = A₀ × e^(−λt)
L'activité suit la même décroissance exponentielle que N (avec A₀ = λ·N₀).

L'unité légale est le **becquerel (Bq)** = 1 désintégration par seconde. C'est une unité très petite . On utilise souvent ses multiples : kBq (10³), MBq (10⁶), GBq (10⁹).

L'ancienne unité, le **curie (Ci)**, vaut 3,7 × 10¹⁰ Bq (= 37 GBq). C'est l'activité d'1 gramme de radium-226 (la première source radioactive isolée par Marie Curie en 1898). 1 Ci est une activité énorme à l'échelle humaine — les sources médicales font typiquement quelques MBq à quelques GBq.

[FIGURE physique_ch8_fig04_demi_vies.png]

**Figure 4** — La décroissance par demi-vies successives. La règle "10 demi-vies = 1/1000" est l'outil de calcul mental le plus utile de toute la médecine nucléaire.

### 5. Lien avec l'activité massique

L'activité d'une masse m d'un isotope est proportionnelle à m. La quantité importante en pratique est l'**activité massique** a = A / m, qui dépend uniquement de l'isotope (et donc de λ et de la masse molaire) :

Pour le ⁹⁹ᵐTc (T½ = 6 h, M ≈ 99 g/mol), 1 µg pur d'isotope possède une activité d'environ 200 GBq — c'est gigantesque. On comprend pourquoi en médecine, on travaille avec des microgrammes voire moins d'isotopes radioactifs.

**🧪 Mini-exercice — Application directe de la règle 1/1000Énoncé :** Un patient reçoit une injection de ¹⁸F-FDG (T½ = 110 min ≈ 1,83 h) pour un examen TEP. L'activité initiale est de 400 MBq. (a) Quelle est l'activité résiduelle 3,7 heures plus tard (≈ 2 demi-vies) ? (b) Combien d'heures faut-il attendre pour qu'il reste moins de 0,1 % de l'activité initiale ?

👁️ Voir la correction

**Correction :(a)** Après 2 demi-vies : A(t) = A₀ × (1/2)² = A₀ / 4 = 400 / 4 = **100 MBq**.

**(b)** Mnémo signature : 10 demi-vies = 1/1000 (= 0,1 %). Donc t = 10 × T½ = 10 × 1,83 ≈ **18,3 heures**. À une « marge sécuritaire », le patient n'est plus considéré comme une source radioactive 18-20 h après l'injection. C'est pour cela qu'on lui demande de boire beaucoup d'eau le lendemain de la TEP et de limiter les contacts rapprochés avec des enfants/femmes enceintes pendant 24 h — par précaution maximale.

**🧪 Mini-exercice — Calcul d'activité initialeÉnoncé :** Une source de ⁹⁹ᵐTc (T½ = 6 h) a une activité de 50 MBq à t = 18 h. (a) Combien de demi-vies se sont écoulées ? (b) Quelle était l'activité initiale (à t = 0) ?

👁️ Voir la correction

**Correction :(a)** 18 h / 6 h = **3 demi-vies**.

**(b)** Après 3 demi-vies, il reste 1/8 de l'activité initiale. Donc A₀ = 50 × 8 = **400 MBq**.

C'est un calcul typique de salle de médecine nucléaire : connaître l'activité au moment où la dose est préparée à partir de l'activité résiduelle d'un stock, ou inversement.

## V. Application en médecine nucléaire — ⁹⁹ᵐTc et ¹⁸F-FDG

Toute la cinétique qu'on vient de poser converge ici. La **médecine nucléaire** consiste à injecter au patient un atome radioactif fixé sur une molécule vectrice (un radiotraceur ), à attendre qu'il se fixe sélectivement sur l'organe cible, et à le détecter de l'extérieur grâce à ses émissions γ. Deux isotopes dominent le paysage mondial : le ⁹⁹ᵐTc et le ¹⁸F. Comprendre pourquoi, c'est comprendre tout le chapitre.

### 1. 🤔 Le problème — Comment voir une thyroïde ou un cancer de l'intérieur sans rayons X ?

Tu veux voir si une thyroïde fonctionne normalement, repérer une métastase invisible au scanner, ou évaluer l'irrigation d'un cœur après infarctus. Les rayons X et le scanner te montrent l' anatomie (la forme) mais pas la fonction (l'activité métabolique). La médecine nucléaire fait exactement l'inverse : elle exploite des molécules biologiquement actives, marquées par un atome radioactif, qui se concentrent là où l'organe travaille. La distribution du radiotraceur reflète la fonction — pas l'anatomie.

### 2. Principe d'un radiotraceur — Atome radioactif + molécule vectrice

Un radiotraceur a deux composants :

- **Atome radioactif émetteur γ** (ou β⁺ pour la TEP) : le « phare » qu'on détecte de l'extérieur. Il faut une demi-vie suffisamment longue pour l'examen (~heures) mais pas trop pour limiter la dose au patient (~heures aussi).

- **Molécule vectrice biologiquement active** : sert à amener le radioisotope sélectivement sur l'organe cible. Exemples : du glucose (pour les cellules à fort métabolisme glucidique = cancers, cerveau), une hormone, un anticorps monoclonal, un ion qui mime un nutriment essentiel.

Au moment de la détection, on enregistre les photons γ qui sortent du patient via une **caméra γ** (gamma-caméra pour les scintigraphies) ou un **détecteur TEP** (coïncidence des deux photons d'annihilation pour les radiotraceurs β⁺). Le résultat est une image 2D ou 3D de la distribution du traceur dans le corps.

### 3. Le ⁹⁹ᵐTc — Le cheval de bataille de la scintigraphie

**🔑 Pourquoi le ⁹⁹ᵐTc est utilisé dans 80 % des examens scintigraphiques**

- **Demi-vie de 6 heures** : suffisamment longue pour préparer la dose et faire l'examen, suffisamment courte pour que le patient s'élimine vite la radioactivité (10 T½ ≈ 60 h ≈ 2,5 jours = retour à zéro).

- **Émetteur γ pur** (140 keV) : pas de β⁻ ni de β⁺ associés → faible dose au patient pour beaucoup d'image. Énergie γ optimale pour la détection par les caméras à scintillateur.

- **Chimie polyvalente** : se lie facilement à de nombreuses molécules vectrices (HMDP pour les os, MIBI pour le cœur, MAA pour les poumons, DTPA pour les reins, sulphur colloïde pour le foie...). Une seule chimie, dix examens différents.

- **Production locale facile** : par un « générateur » de molybdène-99 → technétium-99m (le ⁹⁹Mo a une T½ de 66 h et alimente le générateur pendant ~1 semaine). Chaque service de médecine nucléaire en a un.

Cette combinaison unique de propriétés — physiques, chimiques et logistiques — fait du ⁹⁹ᵐTc le radiotraceur le plus utilisé au monde. Quelques applications phares :

- **Scintigraphie osseuse** (⁹⁹ᵐTc-HMDP) : dépistage des métastases osseuses, des fractures de fatigue, de l'algodystrophie. C'est l'examen le plus sensible pour détecter une activité osseuse anormale.

- **Scintigraphie myocardique** (⁹⁹ᵐTc-MIBI) : évaluation de la viabilité du myocarde après infarctus, recherche d'ischémie myocardique à l'effort.

- **Scintigraphie pulmonaire** (⁹⁹ᵐTc-MAA) : diagnostic de l'embolie pulmonaire (zones non perfusées).

- **Scintigraphie rénale** (⁹⁹ᵐTc-DTPA, ⁹⁹ᵐTc-DMSA) : étude de la fonction rénale différentielle (gauche vs droite), recherche de cicatrices rénales chez l'enfant.

- **Scintigraphie thyroïdienne** (⁹⁹ᵐTc-pertechnétate) : diagnostic de nodule chaud/froid thyroïdien.

### 4. Le ¹⁸F-FDG — La star de la TEP

Le fluor-18 est un émetteur β⁺ de demi-vie 110 minutes (1,83 h). Lié au désoxy-glucose pour former le **¹⁸F-FDG** (fluorodésoxyglucose), il mime le glucose biologique : les cellules à fort métabolisme glucidique (cancers, cerveau, cœur) le captent activement... mais ne peuvent pas le métaboliser au-delà de la première étape (le « désoxy » bloque la glycolyse). Il s'accumule donc spécifiquement dans ces cellules.

Le positron émis s'annihile en deux photons γ de 511 keV en sens opposés, qui sont détectés en coïncidence — la résolution spatiale de l'image est meilleure que celle des scintigraphies classiques. Applications principales :

- **Oncologie** : staging initial des cancers (où sont les métastases ?), évaluation de la réponse au traitement, recherche de récidive. L'examen le plus utilisé en cancérologie moderne.

- **Neurologie** : bilan d'épilepsie, diagnostic différentiel des démences (maladie d'Alzheimer vs démence frontotemporale).

- **Cardiologie** : étude de la viabilité myocardique chez l'insuffisant cardiaque.

- **Pédiatrie** : bilan de certaines tumeurs cérébrales infantiles, lymphomes.

[FIGURE physique_ch8_fig05_radiotraceurs.png]

**Figure 5** — Les deux radiotraceurs phares de la médecine nucléaire. Le ⁹⁹ᵐTc domine la scintigraphie classique (γ pur, T½ = 6 h), le ¹⁸F-FDG la TEP (β⁺ + glucose, T½ = 110 min).

### 5. Choisir un radiotraceur — Les critères physiques

Quand un médecin nucléaire choisit son traceur, il combine 4 critères :

- **Spécificité biologique** : la molécule vectrice doit se fixer sélectivement sur la cible (tumeur, organe, fonction).

- **Demi-vie adaptée** : ni trop courte (sinon l'examen est impossible), ni trop longue (sinon dose excessive au patient). Idéalement entre 1 heure et 1 jour.

- **Énergie γ optimale** : entre 100 et 500 keV, où les détecteurs sont les plus efficaces et où la pénétration tissulaire est suffisante.

- **Pas (ou peu) d'autres émissions** : on évite les β⁻ qui irradient inutilement la cellule cible sans contribuer à l'image (sauf en radiothérapie interne, qui est l'inverse — on veut tuer la cellule).

Le ⁹⁹ᵐTc gagne quasiment toutes les comparaisons sur ces 4 critères → d'où son omniprésence. Le ¹⁸F-FDG est moins idéal physiquement mais imbattable sur la spécificité biologique (mime le glucose) → d'où sa domination en oncologie.

**La logistique du temps en médecine nucléaire — Une bataille contre la décroissance.** La demi-vie courte des radiotraceurs impose une organisation horlogère :

- **Pour le ⁹⁹ᵐTc** : la dose est préparée le matin (à partir du générateur sur place), administrée au patient dans l'heure, et l'examen se fait dans la foulée. Toute fenêtre temporelle plus large mange dans le « capital » de demi-vie disponible.

- **Pour le ¹⁸F-FDG** : encore plus tendu. Le ¹⁸F est produit en cyclotron dans une centrale régionale, transformé en FDG (chimie complexe), puis transporté vers les hôpitaux dans un colis blindé. Entre la sortie du cyclotron et l'injection au patient, il s'écoule typiquement 2-3 heures → l'activité a déjà diminué d'un facteur 2-3 (1-2 demi-vies). Au-delà de 4 heures, le colis n'est plus utilisable. Les centres TEP doivent donc être situés à moins de 200 km d'un cyclotron — c'est pourquoi tous les pays développent un maillage géographique de cyclotrons.

- **Pour le ¹¹C-méthionine** (recherche, T½ = 20 minutes) : production et injection doivent être faites sur le même site, dans les minutes qui suivent la synthèse.

Toute la médecine nucléaire est une course contre la décroissance exponentielle — c'est exactement la physique du chapitre que tu viens de terminer.

**🧪 Mini-exercice — Choix d'un traceurÉnoncé :** On hésite entre deux isotopes hypothétiques pour une scintigraphie : isotope A (T½ = 30 minutes, émetteur γ 200 keV) et isotope B (T½ = 60 jours, émetteur γ 100 keV). Lequel est le meilleur choix pour une scintigraphie classique en service hospitalier ? Justifie en deux lignes.

👁️ Voir la correction

**Correction :Aucun des deux n'est idéal, mais l'isotope A est inutilisable en pratique** : sa demi-vie de 30 min est trop courte — le temps de préparer la dose, l'amener au patient, attendre la fixation tissulaire et faire l'image, l'activité aurait déjà décru d'un facteur 4 à 8.

**L'isotope B est encore pire** : sa demi-vie de 60 jours signifie qu'après l'examen, le patient reste radioactif pendant des mois (10 T½ = 600 jours), ce qui est inacceptable en termes de dose et de gestion. Le ⁹⁹ᵐTc à 6 h est le compromis idéal entre les deux extrêmes — assez de temps pour l'examen, mais quasi-élimination en 2 jours.

## 🎓 Ce que tu emportes

Ce chapitre était dense — il a fait converger les mathématiques (exponentielle, logarithme, papier semi-log) et la physique nucléaire (structure du noyau, désintégrations) vers une seule application concrète : la médecine nucléaire. Tu disposes maintenant des outils mathématiques pour **lire un graphique de décroissance** en quelques secondes (passage en semi-log → droite → pente = λ → T½ = ln(2)/λ ≈ 0,7/λ). Tu sais aussi appliquer la règle d'or signature de Medeos : **10 demi-vies = 1/1000** — la base de tous les calculs mentaux en cinétique radioactive.

Tu sais classer un noyau atomique par ses trois nombres (Z, N, A), repérer les isotopes/isobares/isotones, et placer un noyau sur la **vallée de stabilité**. Et surtout, tu maîtrises maintenant les **5 types de désintégrations** avec leur signature en (ΔA, ΔZ) — un tableau à 5 lignes qui résout l'essentiel des QCM sur le sujet. La désintégration α pour les noyaux trop lourds, β⁻ pour l'excès de neutrons, β⁺ et capture électronique pour l'excès de protons, γ pour la désexcitation pure.

Au plan clinique, tu comprends pourquoi le **⁹⁹ᵐTc** (T½ = 6 h, γ pur à 140 keV) est l'arme principale de la scintigraphie classique (80 % des examens dans le monde), et pourquoi le **¹⁸F-FDG** (T½ = 110 min, β⁺ + glucose) domine la TEP en oncologie moderne. Toute la médecine nucléaire repose sur un équilibre savant entre demi-vie courte (faible dose pour le patient) et demi-vie suffisante pour faire l'examen — tu sais maintenant analyser ce compromis.

MEDEOS — Chapitre 8 : Radioactivité — types et cinétique · medeos-sante.fr

×

medeos-sante.fr