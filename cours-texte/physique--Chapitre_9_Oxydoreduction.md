Chapitre 9 : Oxydo-réduction - MEDEOS

Chapitre 9

# Oxydo-réduction

Du transfert d'électrons à la chaîne respiratoire mitochondriale — comment ton corps brûle le glucose pour fabriquer l'énergie qui te fait vivre.

## 🎯 Pourquoi ce chapitre relie la combustion d'une bougie au métabolisme de tes cellules

Un morceau de fer rouille dehors. Une bougie brûle dans ton salon. Une banane mûrit puis pourrit dans ton panier. Ton corps utilise le glucose de ton repas pour produire de l'ATP. Ces quatre événements semblent n'avoir aucun rapport — et pourtant, ils relèvent **tous** du même mécanisme physico-chimique : un transfert d'électrons entre molécules. C'est l'objet de l'**oxydo-réduction**.

L'histoire tient en quatre mots : quand une molécule perd un ou plusieurs électrons, elle est oxydée . Quand elle en gagne, elle est réduite . Comme les électrons ne peuvent pas voyager seuls dans le vide, à chaque oxydation correspond **obligatoirement** une réduction quelque part — d'où le nom de la discipline. Et le but de toute la machinerie biologique de ton corps, c'est exactement de gérer ces transferts d'électrons de façon contrôlée pour en extraire l'énergie nécessaire à la vie. Si tu comprends bien ce chapitre, tu comprends pourquoi tu respires, pourquoi tu manges, et pourquoi le cyanure est un poison foudroyant.

🎯 **À la fin de ce chapitre, tu sauras :**

- Identifier l'**oxydant** et le **réducteur** dans une réaction et écrire les **demi-équations électroniques**

- Calculer un **nombre d'oxydation** et équilibrer une réaction redox en milieu acide

- Comparer les **potentiels standards E°** et prédire le sens spontané d'une réaction (règle « du plus fort oxydant qui réagit avec le plus fort réducteur »)

- Appliquer l'**équation de Nernst** aux couples redox (extension du ch.5 où on l'a vue pour les membranes)

- Décrire en mots la **chaîne respiratoire mitochondriale** et comprendre pourquoi le cyanure tue en quelques minutes

**📚 Ce que tu sais déjà** — Au ch.5, tu as rencontré l'**équation de Nernst** dans le contexte des membranes cellulaires (potentiel d'équilibre d'un ion). Tu sais que le facteur "60 mV par décade" vient de RT/F·ln(10) à 37 °C. En chimie de Terminale, tu as croisé la notion d'oxydation (la rouille, la combustion) et le tableau périodique. En SVT, tu as entendu parler de "respiration cellulaire" et de la mitochondrie comme "centrale énergétique" — sans entrer dans le mécanisme. **Ce chapitre relie tout** : la chimie des transferts d'électrons, l'équation que tu connais déjà, et la machine moléculaire qui fait fonctionner toutes tes cellules.

## I. Couples redox et demi-équations

Première étape : poser le vocabulaire de l'oxydo-réduction (oxydant, réducteur, couple, demi-équation). C'est un langage très formalisé, mais une fois qu'on le maîtrise, il devient un outil de calcul redoutable.

### 1. 🤔 Le problème — Combustion, respiration, corrosion : quel point commun ?

Une bougie qui brûle, du fer qui rouille, du glucose qui est métabolisé dans une cellule. Trois processus, trois échelles de temps complètement différentes (millisecondes, mois, secondes), trois ambiances très différentes. Pourtant, dans chaque cas, **une molécule perd des électrons et une autre en gagne**. La cire perd des électrons au profit de l'oxygène de l'air → CO₂ + H₂O. Le fer perd des électrons au profit de l'oxygène → Fe₂O₃ (rouille). Le glucose perd des électrons au profit de l'oxygène inhalé → CO₂ + H₂O. C'est exactement la même chimie , juste catalysée différemment.

### 2. Définition de l'oxydation et de la réduction

**🔑 Les deux définitions cardinales**

- **Oxydation** = perte d'un ou plusieurs électrons par une espèce chimique. La molécule oxydée s'appauvrit en électrons.

- **Réduction** = gain d'un ou plusieurs électrons. La molécule réduite s'enrichit en électrons.

- Comme les électrons ne peuvent pas exister seuls en solution, **oxydation et réduction sont toujours simultanées** — d'où le nom « réaction d'oxydo-réduction ».

- L'espèce qui **capte** les électrons s'appelle l'**oxydant** (elle provoque l'oxydation de l'autre).

- L'espèce qui **cède** les électrons s'appelle le **réducteur** (elle provoque la réduction de l'autre).

**🧠 Mnémo Medeos — « OxydAtion = Abandon d'électrons »**

Pour ne plus jamais confondre les deux verbes :

- **OxydAtion** = **A**bandon d'électrons (le A te rappelle « abandonne »)

- **Réduction** = gain d'électrons (le réducteur est « riche » en électrons et en donne)

Et un mnémo de plus, anglo-saxon : « **OIL RIG** » — Oxidation Is Loss, Reduction Is Gain (l'oxydation, c'est perdre ; la réduction, c'est gagner). Une fois ces deux mnémos installés, tu ne te tromperas plus jamais — même sous le stress d'un QCM.

### 3. Le couple Ox/Red et la demi-équation électronique

Un atome ou une molécule peut souvent exister sous deux formes : une forme oxydée (Ox, ayant peu d'électrons) et une forme réduite (Red, ayant plus d'électrons). Ces deux formes constituent un **couple redox**, qu'on note **Ox/Red**, et qu'on relie par une **demi-équation électronique** :

Demi-équation générique d'un couple Ox/Red
Ox + n·e⁻ ⇌ Red
n = nombre d'électrons échangés · La double flèche ⇌ rappelle que le couple peut « tourner » dans les deux sens selon les conditions.

Trois exemples physiologiques importants à mémoriser :

|

| Couple redox
| Demi-équation
| Contexte physiologique

| Fe³⁺/Fe²⁺
| Fe³⁺ + e⁻ ⇌ Fe²⁺
| Hémoglobine (Fe²⁺) ↔ méthémoglobine (Fe³⁺)

| O₂/H₂O
| O₂ + 4H⁺ + 4e⁻ ⇌ 2 H₂O
| Respiration cellulaire (accepteur final)

| NAD⁺/NADH
| NAD⁺ + H⁺ + 2e⁻ ⇌ NADH
| Coenzyme central du métabolisme

| H⁺/H₂
| 2 H⁺ + 2e⁻ ⇌ H₂
| Électrode de référence (E° = 0 par convention)

[FIGURE physique_ch9_fig01_transfert_electrons.png]

**Figure 1** — Le transfert d'électrons au cœur de l'oxydo-réduction. Le réducteur cède ses électrons et devient oxydé ; l'oxydant les capture et devient réduit.

### 4. Nombre d'oxydation — Compter les électrons formellement

Pour analyser une réaction complexe, on attribue à chaque atome un **nombre d'oxydation** (n.o.), aussi appelé état d'oxydation . C'est un nombre signé qui représente la charge fictive de l'atome s'il était isolé. Les règles principales :

- Un **atome libre** (Na, Fe, O₂, H₂) a un nombre d'oxydation égal à **0**.

- Un **ion simple** a un n.o. égal à sa charge (Na⁺ → +1, Cl⁻ → −1, Fe²⁺ → +2, Fe³⁺ → +3).

- Dans un composé, l'**oxygène** est généralement à n.o. = **−2** (sauf dans les peroxydes où il est −1).

- Dans un composé, l'**hydrogène** est généralement à n.o. = **+1** (sauf dans les hydrures où il est −1).

- La **somme des nombres d'oxydation** d'une molécule neutre vaut 0. Pour un ion polyatomique, elle vaut la charge de l'ion.

Avec ces règles, on peut calculer rapidement le n.o. de n'importe quel atome dans un composé. Exemple : dans CO₂ → n.o.(O) = −2, et 2·(−2) + n.o.(C) = 0 → n.o.(C) = +4. Dans H₂O → n.o.(H) = +1, et 2·(+1) + n.o.(O) = 0 → n.o.(O) = −2 ✓.

**🔑 Le critère simple « qui est oxydé / qui est réduit »**

Dans une réaction, regarde le nombre d'oxydation de chaque atome avant et après . Si un n.o. **augmente** → l'atome est **oxydé** (il a perdu des électrons). Si un n.o. **diminue** → l'atome est **réduit** (il a gagné des électrons). C'est aussi simple que ça.

### 5. Application — La combustion globale du glucose

La respiration cellulaire, à grand traits, est la combustion contrôlée du glucose par l'oxygène inspiré. Bilan global :

Combustion globale du glucose
C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (+ énergie ≈ 2870 kJ/mol)

Analyse en nombres d'oxydation :

- Carbone dans C₆H₁₂O₆ : n.o.(C) = 0 (en moyenne). Dans CO₂ : n.o.(C) = +4 → **oxydation** du carbone (perte de 4 e⁻ par C).

- Oxygène dans O₂ : n.o. = 0. Dans H₂O : n.o.(O) = −2 → **réduction** de l'oxygène (gain de 2 e⁻ par O).

- Hydrogène : n.o. = +1 des deux côtés → pas de changement.

Donc le glucose est **oxydé** en CO₂ (il perd 24 électrons par molécule, à savoir 4 par C et 6 C), et l'oxygène est **réduit** en H₂O (il capte ces 24 électrons via 12 O à 2 e⁻ chacun). Toute l'énergie de la réaction (2870 kJ/mol) vient de ce transfert d'électrons — exactement ce que la mitochondrie va exploiter, étape par étape, en section V.

**🧪 Mini-exercice — Nombre d'oxydation du chloreÉnoncé :** Calcule le nombre d'oxydation du chlore dans : (a) Cl₂ · (b) NaCl · (c) HClO · (d) HClO₃.

👁️ Voir la correction

**Correction :(a)** Cl₂ = atome libre → n.o.(Cl) = **0**.

**(b)** NaCl est ionique : Na⁺ Cl⁻ → n.o.(Cl) = **−1**.

**(c)** HClO : (+1) + n.o.(Cl) + (−2) = 0 → n.o.(Cl) = **+1**. C'est l'acide hypochloreux, principe actif de l'eau de Javel.

**(d)** HClO₃ : (+1) + n.o.(Cl) + 3·(−2) = 0 → n.o.(Cl) = **+5**. C'est l'acide chlorique.

Tu vois que le chlore peut avoir des nombres d'oxydation très variés (de −1 à +7 selon les composés). C'est typique des éléments du milieu du tableau périodique. C'est aussi pour ça que la chimie de l'eau de Javel est puissante : le chlore y est fortement oxydant (n.o. = +1 prêt à descendre vers −1 en captant 2 e⁻).

**🧪 Mini-exercice — Identifier oxydé et réduitÉnoncé :** Dans la réaction Zn + 2 H⁺ → Zn²⁺ + H₂ (attaque du zinc par un acide), quelle espèce est oxydée et quelle espèce est réduite ?

👁️ Voir la correction

**Correction :**

Comparaison des nombres d'oxydation avant/après :

- Zn passe de 0 (atome libre) à +2 (ion Zn²⁺) → n.o. augmente → **Zn est oxydé** (réducteur)

- H passe de +1 (dans H⁺) à 0 (dans H₂ atome libre) → n.o. diminue → **H⁺ est réduit** (oxydant)

Donc le zinc joue le rôle de réducteur (il donne ses électrons à H⁺), et H⁺ joue le rôle d'oxydant. C'est le principe historique des « piles à zinc-acide ». L'ion H⁺ étant l'oxydant ici, on retrouve le couple H⁺/H₂ qui sert d'électrode standard en électrochimie.

## II. Équilibrer une réaction d'oxydo-réduction

Une réaction redox doit respecter deux contraintes simultanées : la **conservation des atomes** (autant à droite qu'à gauche pour chaque élément) et la **conservation des électrons** (autant d'électrons perdus par le réducteur que gagnés par l'oxydant). La méthode des demi-équations est l'outil systématique pour y arriver.

### 1. 🤔 Le problème — Pourquoi équilibrer une réaction redox est plus subtil qu'une réaction acide-base

Une réaction acide-base (ch.2) est facile à équilibrer : on compte les H⁺ et les OH⁻, on équilibre, c'est fini. Une réaction redox est plus subtile parce qu'il faut en plus équilibrer les électrons échangés, qui ne sont pas visibles dans la réaction globale finale. La méthode des demi-équations résout ce problème en deux étapes : on traite séparément l'oxydation et la réduction, puis on combine.

### 2. La méthode des demi-équations en milieu acide

Voici la recette systématique en 5 étapes, à appliquer à toute réaction redox en milieu acide :

- **Identifier les deux couples** Ox/Red en présence et écrire la demi-équation de chacun.

- **Équilibrer chaque demi-équation** en quatre passes :

- Équilibrer les atomes autres que H et O

- Équilibrer les atomes d'**O** avec H₂O

- Équilibrer les atomes d'**H** avec H⁺

- Équilibrer les charges avec des **e⁻**

- **Multiplier chaque demi-équation** par un coefficient pour que les nombres d'électrons soient les mêmes des deux côtés.

- **Ajouter les deux demi-équations** : les électrons s'annulent.

- **Vérifier** l'équilibre des atomes et des charges.

### 3. Exemple guidé — Oxydation du fer par les ions permanganate

L'ion permanganate MnO₄⁻ (violet intense) oxyde le Fe²⁺ en Fe³⁺ en milieu acide. Quelle est l'équation bilan ?

**Étape 1 — Les deux couples :**

- Couple MnO₄⁻ / Mn²⁺ (oxydant) → Mn passe de +7 à +2

- Couple Fe³⁺ / Fe²⁺ (réducteur) → Fe passe de +2 à +3

**Étape 2 — Équilibrer chaque demi-équation :**

Demi-équation de la réduction de MnO₄⁻ en Mn²⁺ :

- Mn : 1 = 1 ✓

- O : 4 à gauche, 0 à droite → ajouter 4 H₂O à droite

- H : 0 à gauche, 8 (dans 4 H₂O) à droite → ajouter 8 H⁺ à gauche

- Charges : −1 + 8 = +7 à gauche, +2 à droite → ajouter 5 e⁻ à gauche

Demi-équation de réduction (milieu acide)
MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O

Demi-équation de l'oxydation de Fe²⁺ en Fe³⁺ : très simple, juste l'échange d'un électron.

Demi-équation d'oxydation
Fe²⁺ → Fe³⁺ + 1 e⁻

**Étape 3 — Égaliser les électrons :** 5 e⁻ pour Mn, 1 e⁻ pour Fe → multiplier la demi-équation du fer par 5.

**Étape 4 — Sommer :**

Équation bilan
MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺
Vérification : Mn 1=1 ✓ · O 4=4 ✓ · H 8=8 ✓ · Fe 5=5 ✓ · Charges : −1+8+10 = +17 à gauche, +2+15 = +17 à droite ✓.

### 4. Cas du milieu basique — Substituer OH⁻

En milieu basique, on remplace les H⁺ par leur équivalent en milieu OH⁻. La méthode pratique : équilibrer d'abord comme en milieu acide, puis ajouter de chaque côté autant de OH⁻ qu'il y a de H⁺, et simplifier en H₂O. C'est une variante secondaire qu'on n'utilise quasiment pas en physiologie (le milieu intracellulaire est tamponné autour de pH 7, donc on travaille en pratique avec une convention « pH = 7 » et des demi-équations modifiées — détail biochimique qu'on laisse de côté ici).

### 5. Application physiologique — Hémoglobine et méthémoglobinémie

L'**hémoglobine** contient un atome de fer au cœur de l'hème, sous forme **Fe²⁺**. C'est cette forme ferreuse qui peut transporter l'O₂ (en se liant de façon réversible, sans le réduire chimiquement). Si ce fer s'oxyde accidentellement en **Fe³⁺**, l'hémoglobine devient incapable de fixer l'O₂ — on parle de **méthémoglobinémie**.

[FIGURE physique_ch9_fig02_hb_methb.png]

**Figure 2** — Hémoglobine fonctionnelle (Fe²⁺) versus méthémoglobine non fonctionnelle (Fe³⁺). Une simple oxydation du fer suffit à bloquer le transport de l'oxygène.

**La méthémoglobinémie — Une intoxication redox aux conséquences immédiates.** Plusieurs substances peuvent oxyder accidentellement le Fe²⁺ de l'hémoglobine en Fe³⁺ :

- **Nitrites** (NO₂⁻) présents dans l'eau de puits contaminée, certaines charcuteries en excès, certains médicaments cardiologiques (nitroglycérine en surdose)

- **Anesthésiques locaux dérivés benzocaïne**, chez le nourrisson surtout

- **Antipaludéens** (primaquine) chez les patients déficients en G6PD

- **Toxiques industriels** (aniline, nitrobenzène)

Le sang du patient méthémoglobinique devient brun-chocolat (au lieu de rouge vif), la SpO₂ mesurée peut être normalement élevée mais l'oxygénation tissulaire effective est gravement altérée. À 20-30 % de méthémoglobinémie : cyanose, dyspnée. À 50-60 % : coma, arythmies. Au-delà de 70 % : décès.

Le traitement est élégant : on injecte du **bleu de méthylène** qui catalyse la réduction inverse Fe³⁺ → Fe²⁺ en présence du NADH cellulaire. En quelques heures, l'hémoglobine fonctionnelle est restaurée. La chimie redox, encore une fois, à la fois cause et solution d'une situation clinique.

**🧪 Mini-exercice — Équilibrer la réaction Cu/Ag⁺Énoncé :** Une lame de cuivre Cu plongée dans une solution de nitrate d'argent (Ag⁺) se recouvre de cristaux d'argent métallique. Écris la réaction bilan en équilibrant en milieu aqueux. (Couples : Cu²⁺/Cu et Ag⁺/Ag.)

👁️ Voir la correction

**Correction :**

Demi-équation oxydation (Cu donne ses e⁻) : Cu → Cu²⁺ + 2 e⁻

Demi-équation réduction (Ag⁺ capte des e⁻) : Ag⁺ + 1 e⁻ → Ag

Pour égaliser les e⁻, multiplier la 2ᵉ par 2 : 2 Ag⁺ + 2 e⁻ → 2 Ag

Bilan : **Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag**

Vérification : Cu 1=1 ✓ · Ag 2=2 ✓ · Charges : 0 + 2 = +2 à gauche, +2 + 0 = +2 à droite ✓. C'est la réaction qui a fait la fortune de Marie Curie quand elle a découvert le radium par cristallisation fractionnée — elle reposait sur la même chimie de précipitation redox.

## III. Potentiel standard E° et électrochimie

Comment savoir si une réaction redox va se produire spontanément ? Réponse : grâce au **potentiel standard E°** de chaque couple, qui mesure son « pouvoir oxydant ». L'oxydant le plus fort réagit toujours avec le réducteur le plus fort — c'est la règle qui gouverne toute l'électrochimie.

### 1. 🤔 Le problème — Pourquoi le cuivre dans l'argent oui, mais pas l'inverse ?

Quand on plonge une lame de cuivre dans du nitrate d'argent, le cuivre est oxydé et l'argent se dépose : la réaction démarre spontanément (cf. mini-exo précédent). Mais si on plonge une lame d'argent dans du sulfate de cuivre, il ne se passe rien : la réaction inverse n'est pas spontanée. Pourquoi cette asymétrie ?

La réponse vient de la notion de **potentiel standard E°**, qui classe les couples redox sur une échelle universelle de « pouvoir oxydant ». Le couple Ag⁺/Ag a un E° plus élevé que Cu²⁺/Cu → Ag⁺ est un oxydant plus fort que Cu²⁺. Conséquence : Ag⁺ peut oxyder le Cu métallique (la réaction proposée), mais Cu²⁺ ne peut pas oxyder Ag (réaction inverse impossible).

### 2. L'électrode standard à hydrogène — Le zéro de référence

Comme tout potentiel est défini à une constante près, il faut une **référence**. Par convention internationale, on choisit le couple H⁺/H₂ :

Électrode standard à hydrogène (ESH) — référence par convention
E°(H⁺/H₂) = 0,00 V
Conditions standards : [H⁺] = 1 mol/L, pression P(H₂) = 1 atm, T = 25 °C.

Tous les autres potentiels standards sont mesurés par rapport à cette référence. Une électrode standard à hydrogène est un dispositif de laboratoire (platine dans une solution acide saturée en H₂ gazeux) — pas pratique pour la routine, mais c'est l'étalon universel.

### 3. L'échelle des potentiels — Ordres de grandeur à connaître

Quelques couples redox classés par E° croissant (donc par pouvoir oxydant croissant) :

|

| Couple Ox/Red
| E° (V) à 25 °C
| Pouvoir oxydant

| Na⁺ / Na | −2,71 | Na⁺ très mauvais oxydant — Na est un réducteur extrême

| Zn²⁺ / Zn | −0,76 | Zn réducteur (utilisé dans les piles)

| Fe²⁺ / Fe | −0,44 | Fer plutôt réducteur (rouille à l'air)

| H⁺ / H₂ | 0,00 | Référence par convention

| Cu²⁺ / Cu | +0,34 | Cu²⁺ oxydant modéré

| Fe³⁺ / Fe²⁺ | +0,77 | Fe³⁺ oxydant modéré

| Ag⁺ / Ag | +0,80 | Ag⁺ oxydant un peu plus fort que Cu²⁺

| O₂ / H₂O | +1,23 | O₂ oxydant fort — base de la respiration

| MnO₄⁻ / Mn²⁺ | +1,51 | Permanganate, oxydant très puissant

| F₂ / F⁻ | +2,87 | Fluor, oxydant le plus puissant connu

### 4. Règle de spontanéité — ΔE° > 0

**🔑 La règle universelle de l'électrochimie**

Une réaction redox dans laquelle un oxydant Ox₁ rencontre un réducteur Red₂ est **thermodynamiquement spontanée** si et seulement si :

Critère de spontanéité d'une réaction redox
ΔE° = E°(Ox₁/Red₁) − E°(Ox₂/Red₂) > 0
Autrement dit, l'oxydant doit avoir un E° plus élevé que le couple du réducteur. Plus simple : **l'oxydant le plus fort (E° élevé) prend les électrons au réducteur le plus fort (E° du couple le plus bas)**.

Pour mémoriser visuellement : sur l'échelle des E°, l'oxydant du couple haut oxyde le réducteur du couple bas . La réaction inverse (réducteur haut + oxydant bas) ne se produit pas spontanément.

**🧠 Mnémo Medeos — « Les électrons vont du bas vers le haut »**

Sur l'échelle des E° (avec les couples classés par E° croissant), **les électrons remontent** : du couple à E° le plus bas (réducteur fort) vers le couple à E° le plus haut (oxydant fort). Quand on regarde une demi-équation, l'oxydant est en haut, le réducteur est en bas. Donc : « du bas du couple bas, vers le haut du couple haut ». C'est l'analogue d'une chute d'eau qui choisit toujours de descendre (gravité), sauf qu'ici la flèche est inversée et c'est l' énergie libre qui dicte le sens.

### 5. Application historique — La pile Daniell

La **pile Daniell** (1836) est l'archétype historique des piles électrochimiques. Deux compartiments :

- Une **électrode de zinc** plongée dans une solution de Zn²⁺ (sulfate de zinc) — couple Zn²⁺/Zn, E° = −0,76 V

- Une **électrode de cuivre** plongée dans une solution de Cu²⁺ (sulfate de cuivre) — couple Cu²⁺/Cu, E° = +0,34 V

- Les deux compartiments sont reliés par un **pont salin** (qui permet aux ions de circuler sans mélanger les solutions)

- Les deux électrodes sont reliées par un **fil conducteur** dans le circuit extérieur

Comme E°(Cu²⁺/Cu) > E°(Zn²⁺/Zn), la réaction spontanée est : **Zn + Cu²⁺ → Zn²⁺ + Cu**. Les électrons partent du zinc (oxydé) et arrivent au cuivre via le fil extérieur — ce courant électrique peut alimenter une ampoule ou un moteur. La tension délivrée par cette pile est :

Force électromotrice de la pile Daniell
E = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = 0,34 − (−0,76) = 1,10 V

[FIGURE physique_ch9_fig03_pile_daniell.png]

**Figure 3** — La pile Daniell : deux demi-piles reliées par un pont salin et un fil conducteur. La différence des potentiels standards (1,10 V) entraîne le courant électrique extérieur.

Cette élégante machine, qui a fait le succès des premières applications industrielles de l'électricité au XIXᵉ siècle, est aujourd'hui remplacée par des accumulateurs (lithium-ion, plomb, NiMH...) qui reposent tous sur la même physique des couples redox — juste avec des couples optimisés pour la densité énergétique, la durée de vie ou la sécurité.

**🧪 Mini-exercice — Prédire le sens d'une réactionÉnoncé :** On dispose des couples Fe²⁺/Fe (E° = −0,44 V) et Ag⁺/Ag (E° = +0,80 V). (a) Quelle est la réaction spontanée entre ces deux couples ? (b) Quelle est la tension de la pile correspondante ?

👁️ Voir la correction

**Correction :(a)** Ag⁺ a un E° plus élevé que Fe²⁺ → Ag⁺ est un oxydant plus fort que Fe²⁺. Donc la réaction spontanée est l'oxydation du fer par Ag⁺ : **Fe + 2 Ag⁺ → Fe²⁺ + 2 Ag**.

**(b)** E_pile = E°(Ag⁺/Ag) − E°(Fe²⁺/Fe) = 0,80 − (−0,44) = **1,24 V**. C'est même un peu plus que la pile Daniell ! L'idée est exactement la même : exploiter la différence de potentiel entre deux couples pour produire de l'électricité.

### 6. L'électrolyse — Forcer une réaction redox dans le sens « interdit »

#### 🤔 Et si on voulait forcer une réaction non-spontanée ?

Dans la pile Daniell, la réaction Zn + Cu²⁺ → Zn²⁺ + Cu se produit **spontanément** parce que E°(Cu²⁺/Cu) > E°(Zn²⁺/Zn). Mais que se passerait-il si on voulait faire la réaction **inverse** (Cu + Zn²⁺ → Cu²⁺ + Zn), qui est non-spontanée ? Réponse : il faut **fournir de l'énergie** au système, sous forme de courant électrique imposé de l'extérieur. C'est ce qu'on appelle l'**électrolyse**.

L'électrolyse est exactement le **phénomène inverse** de la pile :

- **Pile** : une réaction redox spontanée → produit du courant électrique. La chimie crée l'électricité.

- **Électrolyse** : on impose un courant électrique extérieur → force une réaction redox non-spontanée. L'électricité crée la chimie.

🧠 **Analogie — Le moulin à eau vs la pompe à eau**

Imagine une rivière qui descend une pente. Tu peux placer un **moulin à eau** en bas : le mouvement spontané de l'eau (gravité) fait tourner la roue et produit de l'énergie mécanique. C'est **la pile**.

Inversement, si tu veux faire remonter de l'eau en haut de la colline, il faut une **pompe** — qui consomme de l'énergie pour aller contre la gravité. C'est **l'électrolyse**.

👉 La pile « descend » la pente énergétique (ΔG < 0). L'électrolyse « remonte » la pente (ΔG > 0, compensé par l'apport d'énergie électrique externe).

#### 🔑 Le dispositif d'électrolyse en pratique

🔑 **Les 4 éléments d'une cellule d'électrolyse**

- Une **solution électrolytique** (= contenant des ions en solution, capables de conduire le courant)

- Deux **électrodes** plongées dans cette solution

- Un **générateur externe** (pile, batterie, alimentation) qui impose une **différence de potentiel (ddp)** entre les électrodes

- Un **fil conducteur** qui relie le tout

👉 Le générateur force les électrons à circuler de l'**anode** (+) vers la **cathode** (−) à travers le fil extérieur. Conséquence dans la solution :

- **Cathode (−)** : pôle négatif qui attire les **cations** → ils y captent des électrons → **réduction** (Cu²⁺ + 2 e⁻ → Cu, Al³⁺ + 3 e⁻ → Al, etc.)

- **Anode (+)** : pôle positif qui attire les **anions** → ils y libèrent des électrons → **oxydation** (Cl⁻ → ½ Cl₂ + e⁻, etc.)

🧠 **Mnémo** : « **CathOde attire les cations ** » (rime + même initiale C). Et l'anode fait l'inverse : elle attire les anions.

#### 🔑 Loi quantitative : la charge transportée q = i × t

🔑 **Charge totale et constante de Faraday**

Quand un courant d'intensité **i** (en ampères A, sachant que 1 A = 1 coulomb par seconde) traverse la cellule pendant un temps **t** (en secondes), la **charge totale** transportée est :

Charge totale d'électrolyse
q = i × t
avec i en ampères (A), t en secondes (s), q en coulombs (C)

Cette charge correspond à un certain nombre d'**électrons** ayant traversé le fil. Pour faire le lien avec les quantités de matière déposées à la cathode (ou consommées à l'anode), on utilise la **constante de Faraday** :

Constante de Faraday
F = 96 500 C/mol
F = charge d'**une mole d'électrons** (≈ 6,02 × 10²³ électrons × charge élémentaire 1,6 × 10⁻¹⁹ C ≈ 96 500 C). C'est la même constante qu'au ch.5 (Nernst) et au ch.3 (Donnan).

Si une espèce ionique de valence **Z** (ex : Z = 2 pour Cu²⁺, Z = 3 pour Al³⁺) est réduite à la cathode, chaque ion réduit consomme Z électrons. Donc :

Relation charge ↔ quantité d'ion déposé
q = n ion × Z × F
avec n ion = nombre de moles d'ion réduit (ou oxydé), Z = valence, F = constante de Faraday. Autrement dit : **1 mole d'ion réduit consomme Z × F coulombs**.

📐 **Ordres de grandeur à retenir**

- **1 mole d'électrons = 96 500 C ≈ 10⁵ C** (ordre de grandeur à mémoriser)

- **1 millimole d'électrons ≈ 100 C**

- Pour 1 Eq (= 1 mole de charges) → 1 Eq = 96 500 C ≈ 10⁵ C

- Pour 1 mEq → 1 mEq ≈ 100 C

👉 Tu peux toujours retrouver ces ordres de grandeur en partant de F = 96 500 ≈ 10⁵ C/mol.

#### 🔑 Exemple concret — L'électrolyse industrielle du zinc

L'**électrolyse** n'est pas qu'une curiosité de labo — c'est le procédé industriel de purification de la plupart des métaux (aluminium, cuivre, zinc, nickel). Exemple : on plonge une électrode dans une solution de **sulfate de zinc ZnSO₄** et on impose un courant. Les réactions aux électrodes sont :

- **À la cathode (−)** : Zn²⁺ + 2 e⁻ → Zn (le zinc métallique se dépose sur l'électrode → on récupère un dépôt pur)

- **À l'anode (+)** : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ (oxydation de l'eau, qui libère du dioxygène)

👉 Au bout d'un temps t, la masse de zinc déposée à la cathode est calculable par **m = (i × t × M) / (Z × F)**, où M = masse molaire du zinc (65,4 g/mol). C'est cette formule qui permet aux industriels de prédire au gramme près combien de métal ils vont produire pour une consommation électrique donnée. La production mondiale d'aluminium repose entièrement sur ce principe (procédé Hall-Héroult).

**🧪 Mini-exercice — Masse de zinc déposée par électrolyseÉnoncé :** On électrolyse une solution de ZnSO₄ avec un courant de **i = 0,5 A** pendant **t = 30 min**. Quelle masse de zinc se dépose à la cathode ? (Données : Z = 2, M(Zn) = 65,4 g/mol, F = 96 500 C/mol)

👁️ Voir la correction

**Correction en 4 étapes :Étape 1 — Charge totale q = i × t**

Attention aux unités : t doit être en secondes ! 30 min = 30 × 60 = 1 800 s.

q = 0,5 × 1 800 = **900 CÉtape 2 — Moles d'électrons transportés**

n e⁻ = q / F = 900 / 96 500 ≈ **9,3 × 10⁻³ mol** ≈ 9,3 mmol d'électrons

**Étape 3 — Moles de Zn déposées (chaque Zn²⁺ consomme 2 électrons)**

n Zn = n e⁻ / Z = 9,3 / 2 ≈ **4,7 mmol de ZnÉtape 4 — Masse de Zn déposée**

m Zn = n Zn × M(Zn) = 4,7 × 10⁻³ × 65,4 ≈ **0,31 g** (≈ 310 mg)

📌 **Formule globale** (à mémoriser pour aller plus vite au concours) :

m = (i × t × M) / (Z × F) = (0,5 × 1 800 × 65,4) / (2 × 96 500) ≈ **0,31 g** ✓

Cette formule est le « pH = pKa + log » de l'électrolyse — à manipuler dans tous les sens (calculer m, t, i, Z selon la question).

💡 **À retenir — Le triplet pile / électrolyse / Nernst**

- **Pile** (III.5) : réaction spontanée → produit du courant (E_pile = ΔE° > 0)

- **Électrolyse** (III.6) : courant imposé → force la réaction non-spontanée

- **Nernst** (IV) : équation quantitative qui relie potentiel et concentrations dans tous les cas

Les trois reposent sur la **même physique des couples redox**. La constante de Faraday F = 96 500 C/mol est le pont entre la quantité de matière (mol d'électrons) et la quantité d'électricité (coulombs).

## IV. L'équation de Nernst appliquée aux couples redox

Le potentiel standard E° suppose des conditions « standards » (concentrations à 1 mol/L). Dans la réalité, les concentrations sont variables. L'équation de Nernst — la même qu'au ch.5 pour les membranes — étend la notion de potentiel à toutes les concentrations. C'est la formule mère de toute l'électrochimie quantitative.

### 1. 🤔 Le problème — Que se passe-t-il quand les concentrations ne sont pas à 1 mol/L ?

Le tableau des E° qu'on a vu en section III est valable à 25 °C, [Ox] = [Red] = 1 mol/L. Mais en pratique, ces conditions ne sont presque jamais réalisées : dans le sang, [Fe²⁺] est de l'ordre du µmol/L ; dans une pile usagée, les concentrations ont évolué pendant l'usage ; dans la cellule, le rapport NADH/NAD⁺ varie avec l'état métabolique. Comment calculer le potentiel réel dans ces cas-là ?

### 2. L'équation de Nernst appliquée aux couples redox

L'équation de Nernst étend le E° en tenant compte des concentrations effectives :

Équation de Nernst — couple Ox/Red
E = E° + (R·T / z·F) × ln([Ox] / [Red])
R = 8,314 J·K⁻¹·mol⁻¹ · T en kelvins · z = nombre d'électrons échangés dans la demi-équation · F = 96 485 C·mol⁻¹.

Tu reconnais la même équation qu'au ch.5 — sauf qu'ici, on l'applique à un couple redox en solution , pas à un ion qui traverse une membrane. La logique est exactement la même : le potentiel d'un couple dépend du rapport [Ox]/[Red], avec un terme de référence (E°) à concentrations standards.

### 3. Forme simplifiée à 25 °C — Le facteur 0,06

À 25 °C (T = 298 K), on convertit en logarithme décimal et on regroupe les constantes :

Équation de Nernst à 25 °C (forme pratique)
E = E° + (0,06 / z) × log([Ox] / [Red]) en volts
Le facteur "0,06 V par décade" est l'équivalent du "60 mV par décade" déjà vu au ch.3 (Donnan) et au ch.5 (Nernst membrane). Le même nombre revient partout dès qu'on parle d'électrochimie à température ambiante.

À 37 °C (température corporelle), le coefficient passe à environ 0,061. Pour les calculs en physiologie, on garde « 0,06 par décade » avec une bonne approximation.

### 4. Cas particulier — Couple H⁺/H₂ et lien avec le pH

Le couple H⁺/H₂ a pour demi-équation : 2 H⁺ + 2 e⁻ ⇌ H₂. En appliquant Nernst à 25 °C, avec P(H₂) = 1 atm :

E = 0 + (0,06 / 2) × log([H⁺]²) = 0,06 × log([H⁺]) = −0,06 × pH

Autrement dit, **le potentiel de l'électrode H⁺/H₂ baisse de 60 mV chaque fois que le pH augmente d'une unité**. À pH = 7 (eau pure tamponnée), E(H⁺/H₂) = −0,42 V. C'est cette dépendance qui sert de base aux électrodes de pH (les pH-mètres exploitent une variante moderne de cette électrode).

**🔑 Le « 60 mV par décade » — Un fil rouge de la biophysique**

Tu l'as déjà rencontré 3 fois dans ce programme :

- **Ch.3 — Donnan** : U_d = (60/z)·log(C₁/C₂) — équilibre d'un ion en présence d'une membrane qui bloque les protéines

- **Ch.5 — Nernst membrane** : E_X = (60/z)·log([X]_ext/[X]_int) — potentiel d'équilibre d'un ion à 37 °C

- **Ch.9 — Nernst redox** : E = E° + (60/z)·log([Ox]/[Red]) — potentiel d'un couple en solution à 25 °C

C'est exactement la même formule, écrite à 3 endroits différents pour des situations physiques différentes. Le facteur « 60 mV par décade pour un ion monovalent » est le mantra de toute la biophysique des solutions à température ambiante. Une fois gravé, il fait gagner du temps partout.

**🧪 Mini-exercice — Potentiel du couple Fe³⁺/Fe²⁺ dans le sangÉnoncé :** Dans le sang d'un patient présentant un déséquilibre redox, [Fe³⁺] = 10 µmol/L et [Fe²⁺] = 1000 µmol/L. Quel est le potentiel du couple Fe³⁺/Fe²⁺ dans ce sang ? On donne E°(Fe³⁺/Fe²⁺) = +0,77 V. (Travailler à 25 °C avec le facteur 0,06.)

👁️ Voir la correction

**Correction :**

Demi-équation : Fe³⁺ + e⁻ → Fe²⁺, donc z = 1.

E = E° + (0,06/1) × log([Fe³⁺]/[Fe²⁺]) = 0,77 + 0,06 × log(10/1000) = 0,77 + 0,06 × log(10⁻²) = 0,77 + 0,06 × (−2) = 0,77 − 0,12 = **+0,65 V**.

Le potentiel chute de 120 mV par rapport au standard (0,77 V) parce que [Fe³⁺] est 100 fois inférieur à [Fe²⁺] (2 décades = 2 × 60 mV = 120 mV — exactement la règle du « 60 mV par décade »). C'est ce type de calcul qu'on retrouvera en explorant le potentiel redox cellulaire ou les couples de la chaîne respiratoire.

**🧪 Mini-exercice — Potentiel d'une électrode H⁺/H₂ à pH physiologiqueÉnoncé :** Calcule le potentiel de l'électrode standard à hydrogène dans une solution à pH = 7,4 (pH sanguin), à 25 °C, P(H₂) = 1 atm.

👁️ Voir la correction

**Correction :**

E = −0,06 × pH = −0,06 × 7,4 = **−0,44 V** (à 25 °C).

Le potentiel d'une électrode H⁺/H₂ dans le sang vaut donc environ −0,44 V — c'est 440 mV en dessous du « zéro de référence » défini à pH=0. Tous les couples physiologiques (NAD⁺/NADH, etc.) sont en général exprimés à pH = 7 (notation E°') pour tenir compte de ce décalage. Tu retrouveras ces potentiels biologiques dans la section suivante sur la chaîne respiratoire.

## V. La chaîne respiratoire mitochondriale

Tout ce qu'on a construit dans ce chapitre converge ici. Ton corps métabolise le glucose en CO₂ + H₂O et récupère l'énergie sous forme d'ATP. Mais cette « combustion » ne se fait pas d'un coup — elle est étalée en une cascade de transferts d'électrons orchestrée par la **chaîne respiratoire mitochondriale**, l'une des plus belles machines moléculaires du vivant.

### 1. 🤔 Le problème — Pourquoi la cellule ne brûle pas le glucose d'un seul coup ?

L'oxydation complète d'une molécule de glucose en CO₂ + H₂O libère 2870 kJ/mol — une énergie énorme. Si la cellule la libérait d'un seul coup, comme une bougie, elle se ferait littéralement brûler de l'intérieur. Au lieu de ça, la nature a inventé un mécanisme génial : **étaler la cascade redox en une vingtaine de petites étapes**, et capturer l'énergie au passage sous forme d'ATP — la « monnaie énergétique » de la cellule.

Le mécanisme se fait dans la **mitochondrie**, la « centrale énergétique » de la cellule eucaryote. Et c'est de la physico-chimie redox du début à la fin.

### 2. Vue d'ensemble — La cascade NADH → O₂

Schématiquement, l'oxydation du glucose dans la cellule se déroule en trois grandes étapes :

- **Glycolyse** (cytoplasme) : le glucose est progressivement oxydé en pyruvate, avec production d'un peu d'ATP et de NADH.

- **Cycle de Krebs** (matrice mitochondriale) : le pyruvate est oxydé complètement en CO₂, en réduisant beaucoup de NAD⁺ en NADH (et FAD en FADH₂).

- **Chaîne respiratoire** (membrane interne mitochondriale) : les électrons portés par NADH et FADH₂ sont transférés en cascade vers l'oxygène, et l'énergie libérée à chaque étape sert à pomper des H⁺ qui font tourner l'**ATP synthase** — la « turbine moléculaire » qui fabrique l'ATP.

Toute la magie est dans la 3ᵉ étape — c'est elle qui produit 90 % de l'ATP cellulaire, et c'est de la pure chimie redox.

### 3. La cascade en détail — Du NADH à l'O₂

Les électrons portés par NADH ne sont pas transférés directement à l'O₂ (ce serait trop énergétique d'un coup). Ils passent par 4 « complexes » successifs ancrés dans la membrane interne mitochondriale, chacun à un E° de plus en plus élevé :

- **Complexe I** : NADH cède 2 électrons. E°' = −0,32 V.

- **Coenzyme Q** (ubiquinone) : transporte les électrons jusqu'au complexe III.

- **Complexe III** : transfert vers les cytochromes c.

- **Cytochromes c** : transport vers le complexe IV.

- **Complexe IV** (cytochrome c oxydase) : transfert final à l'O₂, qui devient H₂O. E°' = +0,82 V.

Différence de potentiel entre le début (NADH) et la fin (O₂) :

ΔE° de la chaîne respiratoire
ΔE° = E°(O₂/H₂O) − E°(NAD⁺/NADH) ≈ 0,82 − (−0,32) ≈ 1,14 V

Cette différence de potentiel se traduit en énergie libre via la relation ΔG = −n·F·ΔE° (qu'on n'a pas besoin de démontrer ici), ce qui correspond à environ 220 kJ par mole de NADH oxydé. Cette énergie est utilisée pour pomper des H⁺ à travers la membrane interne, créant un **gradient électrochimique** qui fait tourner l'ATP synthase et produit de l'ATP. Bilan : chaque NADH oxydé donne environ 2,5 ATP, et chaque FADH₂ environ 1,5 ATP.

[FIGURE physique_ch9_fig04_chaine_respiratoire.png]

**Figure 4** — La chaîne respiratoire mitochondriale. Les électrons cascadent de NADH (E° bas) vers O₂ (E° haut), libérant de l'énergie qui pompe des H⁺ et fait tourner l'ATP synthase. Le cyanure bloque le complexe IV — une intoxication redox foudroyante.

### 4. Application clinique — L'intoxication au cyanure

**Le cyanure (CN⁻) — Un poison foudroyant par blocage redox.** Le cyanure se fixe avec une affinité extrême sur le **cuivre du complexe IV** de la chaîne respiratoire (le cytochrome c oxydase). Quand le complexe IV est bloqué, toute la chaîne respiratoire s'arrête en cascade : les électrons s'accumulent en amont, NADH ne peut plus être réoxydé en NAD⁺, le cycle de Krebs s'arrête à son tour, et la cellule ne produit plus d'ATP.

L'effet est **immédiat et global** : tous les organes en souffrent simultanément, particulièrement le cerveau et le cœur qui sont les plus avides d'ATP. Une dose létale de cyanure (50-200 mg KCN par voie orale, soit moins d'1/4 de cuillère à café) tue en quelques minutes. Le sang reste rouge vif (l'O₂ est toujours fixé sur l'hémoglobine, mais les cellules ne peuvent plus l'utiliser).

Signes cliniques : céphalées, confusion, dyspnée, perte de conscience, convulsions, arrêt cardiorespiratoire. Diagnostic difficile sans contexte (incendie d'un matelas en mousse, intoxication suicidaire, exposition industrielle). Traitement : hydroxocobalamine (vitamine B12a) qui se lie au cyanure pour former la cyanocobalamine (vitamine B12) éliminée dans les urines.

Plus subtile mais sur le même mécanisme : l'**intoxication au monoxyde de carbone (CO)** ne bloque pas le complexe IV directement, mais se fixe sur l'hémoglobine (carboxyhémoglobine, affinité 200× supérieure à l'O₂), affamant les cellules en O₂. Mécanisme différent, conséquence biologique similaire (hypoxie cellulaire), traitement à l'O₂ pur haute pression.

### 5. Mention rapide — Les biocapteurs glucose

Un patient diabétique mesure sa glycémie plusieurs fois par jour avec un **glucomètre** portable. Le principe ? De l'électrochimie redox . Une enzyme (la glucose oxydase) déposée sur l'électrode oxyde le glucose en gluconolactone, en réduisant un médiateur (par exemple la quinone). Le médiateur réduit est ensuite réoxydé sur l'électrode, ce qui produit un courant électrique **directement proportionnel à la concentration de glucose** dans la goutte de sang.

La même logique redox sous-tend de nombreuses autres applications biomédicales émergentes : pacemakers implantés (alimentés par des piles aux ions lithium), capteurs implantables pour la surveillance continue du glucose (Freestyle Libre, Dexcom), électrostimulation musculaire (TENS), et bien d'autres. La frontière entre la physico-chimie redox et le matériel médical du XXIᵉ siècle est devenue très ténue — et toute repose sur les principes que tu viens de voir.

**🧪 Mini-exercice — Énergie d'une étape de la chaîne respiratoireÉnoncé :** Le complexe IV oxyde le cytochrome c (E°' = +0,25 V) et réduit l'O₂ (E°' = +0,82 V). Quelle est la différence de potentiel ΔE° associée à ce transfert ? L'O₂ est-il un oxydant plus fort que le cytochrome c ?

👁️ Voir la correction

**Correction :**

ΔE° = E°(O₂/H₂O) − E°(cyt c) = 0,82 − 0,25 = **+0,57 V**.

ΔE° > 0 → la réaction est **spontanée**. L'O₂ est bien un oxydant plus fort que le cytochrome c (pouvoir oxydant proportionnel au E°). C'est cette différence de potentiel qui libère assez d'énergie pour pomper des H⁺ à travers la membrane interne — et donc faire tourner l'ATP synthase. C'est l'étape finale de toute la respiration cellulaire, et c'est la cible précise du cyanure.

**🧪 Mini-exercice — Pourquoi le cyanure tue si vite ?Énoncé :** Explique pourquoi le cyanure tue en quelques minutes alors que d'autres poisons mettent des heures. Quelle est la cible précise ?

👁️ Voir la correction

**Correction :**

Le cyanure se fixe sur le **complexe IV de la chaîne respiratoire** (cytochrome c oxydase), bloquant la dernière étape de la cascade redox. Sans cette étape finale, tous les électrons s'accumulent en amont (le NADH ne peut plus se faire réoxyder), et la production d'ATP s'arrête partout en même temps .

Comme l'ATP est l'**énergie immédiate** de la cellule (pas de stocks importants — les muscles n'ont que quelques secondes de réserve), l'arrêt brutal de sa production prive les cellules les plus voraces (cerveau, cœur) en quelques secondes à quelques minutes. Le cyanure ne « tue » pas en empoisonnant chimiquement les molécules vitales — il coupe la machine qui les fabrique. C'est ce qui le rend foudroyant : on ne traite pas une cause biochimique, on traite un arrêt énergétique généralisé.

## 🎓 Ce que tu emportes

Ce chapitre était transverse : il a relié la chimie des transferts d'électrons à la biophysique cellulaire et à la pharmacologie clinique. Tu connais maintenant **les définitions cardinales** (oxydation = perte d'e⁻ « par Abandon », réduction = gain d'e⁻ ; oxydant = capte les électrons, réducteur = les cède). Tu sais identifier oxydé et réduit dans n'importe quelle réaction en suivant l'évolution des nombres d'oxydation. Tu maîtrises la **méthode des demi-équations** pour équilibrer toute réaction redox en milieu acide (atomes autres que H/O, puis O avec H₂O, puis H avec H⁺, puis charges avec e⁻, puis combinaison).

Sur l'échelle des potentiels standards E°, tu sais lire qui est l'oxydant le plus fort et prédire le sens spontané d'une réaction (règle ΔE° > 0). Tu connais le E° de quelques couples emblématiques — H⁺/H₂ comme zéro de référence, Na⁺/Na et Zn²⁺/Zn très bas (bons réducteurs), Cu²⁺/Cu et Fe³⁺/Fe²⁺ intermédiaires, O₂/H₂O et MnO₄⁻/Mn²⁺ très hauts (oxydants forts). Tu sais aussi construire mentalement une **pile Daniell** et calculer sa force électromotrice.

L'**équation de Nernst** appliquée aux couples redox étend tout cela aux conditions non standards — c'est exactement la même formule qu'au ch.5 pour les membranes, déclinée ici en solution. Le facteur « 0,06 V par décade à 25 °C » (ou « 60 mV par décade ») est devenu un fil rouge du programme, vu désormais 3 fois : ch.3 (Donnan), ch.5 (Nernst membrane), ch.9 (Nernst redox). Une formule, trois applications. Et tu sais que le potentiel de l'électrode H⁺/H₂ chute de 60 mV par unité de pH — la base des pH-mètres.

Enfin, l'application phare était la **chaîne respiratoire mitochondriale** : une cascade de transferts d'électrons de NADH (E°' = −0,32 V) vers O₂ (E°' = +0,82 V), avec une différence de potentiel totale de 1,14 V qui se traduit en pompage de H⁺, gradient électrochimique, et production d'ATP par l'ATP synthase. Tu comprends maintenant pourquoi le cyanure tue en quelques minutes (blocage du complexe IV → arrêt de toute la chaîne → effondrement de la production d'ATP partout en même temps). Et tu vois que les biocapteurs glucose des diabétiques reposent sur la même chimie redox — la science clinique du XXIᵉ siècle est imbibée d'électrochimie.

MEDEOS — Chapitre 9 : Oxydo-réduction · medeos-sante.fr

×

medeos-sante.fr