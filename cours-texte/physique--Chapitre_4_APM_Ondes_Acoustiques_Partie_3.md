Chapitre 4 : Aspects physiques des membranes & ondes acoustiques - MEDEOS — Partie 3

Chapitre 4 — Partie 3

# Aspects physiques des membranes & ondes acoustiques

Diffusion, osmose, dialyse et échographie — comment la matière et l'information traversent (ou pas) un milieu biologique.

## 🔄 Où on en est

Dans la partie précédente, tu as vu l'**osmose** : quand une membrane ne laisse passer que l'eau, celle-ci se déplace toute seule vers le côté le plus concentré pour le diluer. C'est cette force, la **pression osmotique**, qui fait gonfler puis éclater un globule rouge dans l'eau pure. Tu as appris à la calculer (π = ω·R·T), à distinguer une solution **iso, hypo ou hypertonique**, et à séparer l'osmolarité (le nombre de particules) de la tonicité (ce que la cellule ressent vraiment). Tu as aussi croisé les **propriétés colligatives**, ces effets qui ne dépendent que du nombre de particules dissoutes.

Tu sais maintenant pourquoi et dans quel sens les choses traversent une membrane. Dans cette partie, on met de l'ordre dans tout ça : on classe les **quatre grands modes de transport** (du passage gratuit jusqu'au transport qui coûte de l'énergie à la cellule). Puis on change complètement de décor pour aborder les **ondes acoustiques** — ce qu'est un son physiquement, à quelle vitesse il se propage, et comment on mesure son intensité.

## III. Perméabilité membranaire et transport

Tu as vu (ch.3) qu'une membrane biologique est sélective. Tu as vu (sections I-II ici) que la matière la traverse selon deux mécanismes physiques : diffusion (gradient de concentration) et osmose (gradient d'eau). Cette section formalise les **4 grands modes de transport** à travers une membrane.

### 1. La bicouche lipidique — Le modèle de Singer-Nicolson

**🔑 La membrane cellulaire en une phrase**

La membrane plasmique est une **bicouche de phospholipides** d'environ **7,5 nm d'épaisseur**, dans laquelle s'insèrent des protéines (modèle de la mosaïque fluide de Singer et Nicolson, 1972). La bicouche est hydrophobe au cœur (queues lipidiques) et hydrophile aux extrémités (têtes polaires) — ce qui en fait une barrière naturelle pour les molécules polaires et chargées.

Conséquence : **seules les petites molécules apolaires diffusent librement** à travers la bicouche — par exemple O₂, CO₂, N₂, ou certains anesthésiques liposolubles. Les ions, le glucose, les acides aminés (qui sont polaires ou chargés) ne traversent pas spontanément la bicouche — ils ont besoin de protéines de transport .

**🤔 Mais alors, l'eau, comment passe-t-elle ? Elle est polaire pourtant !**

Excellente question. L'eau (H₂O, moment dipolaire 1,84 D — rappel ch.1) est bien polaire, donc en théorie le cœur hydrophobe de la bicouche devrait la bloquer. En pratique, l'eau traverse quand même les membranes très rapidement, par **deux mécanismes complémentaires** :

- **Une diffusion lente à travers la bicouche** — la molécule d'eau est très petite (3 atomes seulement), donc elle arrive à se faufiler entre les lipides malgré sa polarité. Mais ce mécanisme est lent.

- **Une diffusion rapide via des canaux protéiques spécifiques appelés aquaporines ** — ce sont des « tuyaux » insérés dans la membrane qui laissent passer l'eau (et seulement l'eau, pas les ions) à très grande vitesse. Découvertes en 1992 par Peter Agre (prix Nobel 2003). C'est ce mécanisme qui domine en pratique dans la plupart des cellules.

👉 **Bilan** : quand on dit que « l'eau traverse librement la membrane », c'est vrai au sens où ce passage est rapide et passif — mais ce n'est pas par simple diffusion à travers les lipides, c'est essentiellement grâce aux aquaporines.

### 2. Les 4 modes de transport à travers une membrane

|

| Mode de transport
| Énergie consommée ?
| Sens du transport
| Exemple

| **Diffusion simple (passive)**
| Non
| Sens du gradient (concentration ou potentiel)
| O₂, CO₂, eau, anesthésiques liposolubles

| **Diffusion facilitée**
| Non
| Sens du gradient, mais via une protéine spécifique
| Glucose (transporteurs GLUT), certains acides aminés

| **Transport actif primaire**
| Oui (ATP direct)
| **Contre le gradient**
| Pompe Na⁺/K⁺-ATPase, pompe à calcium SERCA

| **Transport actif secondaire**
| Oui (gradient d'un autre ion, créé par ATP)
| Co-transport ou anti-port
| Symport Na⁺/glucose (intestin grêle, tube proximal)

[FIGURE physique_ch4_fig03_transport_membranaire.png]

Les 4 modes de transport à travers la membrane cellulaire — du plus simple (diffusion) au plus coûteux énergétiquement (transport actif).

### 3. La diffusion facilitée — Quand un transporteur sature

Pour les molécules trop polaires ou trop grosses pour traverser la bicouche (comme le **glucose** par exemple), une **protéine transporteuse** spécifique (de la famille des GLUT pour le glucose) accélère le passage. La grosse différence avec la diffusion simple : le nombre de protéines transporteuses est **limité**, donc le flux ne peut pas augmenter à l'infini — il finit par **saturer** aux fortes concentrations.

**🧠 Analogie — Les portes à tourniquet d'un métro**

Imagine une station de métro avec 10 portes à tourniquet. Chaque porte ne peut faire passer qu'une personne à la fois . Que se passe-t-il selon l'affluence ?

- **Quand il y a peu de monde** (heure creuse) → presque toutes les portes sont libres → **tous les voyageurs passent immédiatement**. Si tu doubles le nombre de voyageurs, le débit double aussi (proportionnel). C'est comme une diffusion normale, juste accélérée par les portes.

- **Quand il y a énormément de monde** (heure de pointe) → toutes les portes sont occupées en permanence, chacune tourne à plein régime. **Le débit plafonne** : ajouter encore plus de voyageurs ne fait plus rien — ils attendent en file. C'est la **saturation**.

👉 Les protéines GLUT, c'est exactement ça : des portes à tourniquet pour le glucose. À faible glycémie, elles laissent passer le glucose proportionnellement à la concentration. À forte glycémie, elles tournent toutes à plein régime → le flux d'entrée du glucose plafonne.

#### 📐 La formule qui décrit ce comportement

Pour décrire cette transition « proportionnel à faible dose / saturé à forte dose », les biologistes utilisent une équation unique, qui couvre les **deux régimes** en même temps. Elle a été établie par Michaëlis et Menten en 1913 pour les enzymes, et elle s'applique mot pour mot aux transporteurs membranaires :

Équation de Michaëlis-Menten (diffusion facilitée)
J_v = J_v,max × ΔC / (K_m + ΔC)
J_v = flux de molécules qui traversent (mol/s) · J_v,max = flux maximal possible (toutes les portes tournent à fond) · K_m = constante de Michaëlis · ΔC = différence de concentration de la molécule (force motrice).

Décortiquons chaque morceau :

- **J_v** : ce qu'on veut calculer = la quantité de glucose qui entre dans la cellule par seconde.

- **J_v,max** : le débit maximum possible, atteint quand toutes les portes (= tous les transporteurs) tournent à plein régime. C'est un plafond que la cellule ne peut pas dépasser.

- **ΔC** : la différence de concentration entre l'extérieur et l'intérieur — la « force motrice » qui pousse le glucose à entrer.

- **K_m (constante de Michaëlis)** : c'est la concentration ΔC pour laquelle le flux atteint la **moitié** du maximum (J_v = J_v,max / 2). En clair : plus K_m est petit, plus le transporteur est efficace dès les faibles concentrations (on dit qu'il a une « affinité » élevée pour la molécule). Plus K_m est grand, plus il faut concentrer la molécule pour activer le transport.

#### 🔍 Les 2 régimes limites — Comprendre le comportement de la formule

La formule de Michaëlis-Menten peut sembler abstraite, mais elle se comprend très bien en regardant ses deux **cas limites** :

**🔑 Cas 1 — Faible concentration (ΔC ≪ K_m)**

Quand ΔC est petit devant K_m, on peut négliger ΔC au dénominateur (K_m + ΔC ≈ K_m). La formule devient :

**J_v ≈ (J_v,max / K_m) × ΔC**

👉 Le flux est **proportionnel à ΔC** — comme une diffusion simple, mais plus rapide (grâce aux transporteurs). C'est l'heure creuse du métro.

**🔑 Cas 2 — Forte concentration (ΔC ≫ K_m)**

Quand ΔC est grand devant K_m, on peut négliger K_m au dénominateur (K_m + ΔC ≈ ΔC). La formule devient :

**J_v ≈ J_v,max × ΔC / ΔC = J_v,max**

👉 Le flux **plafonne** à J_v,max, quoi qu'on fasse avec ΔC. C'est l'heure de pointe : toutes les portes tournent à plein régime.

**💡 Astuce mathématique — Pourquoi J_v ne peut jamais dépasser J_v,max**

Regarde la fraction **ΔC / (K_m + ΔC)** au cœur de la formule. Comme on ajoute K_m (qui est positif) au dénominateur, ce dernier est toujours plus grand que le numérateur. Donc **cette fraction est toujours strictement inférieure à 1**.

Conséquence directe : **J_v = J_v,max × (truc < 1)**, donc J_v est **toujours strictement plus petit que J_v,max**. Quand ΔC devient gigantesque, la fraction s'approche de 1 (sans jamais l'atteindre) → J_v s'approche de J_v,max sans jamais le toucher exactement.

👉 Mathématiquement, J_v,max est un **plafond asymptotique** : la courbe se rapproche de plus en plus mais ne le franchit jamais. C'est exactement ce qu'on attend d'une saturation.

**Application physiologique — Pourquoi le diabète provoque une hyperglycémie persistante**

Le glucose est absorbé dans les cellules par les transporteurs GLUT. Quand la glycémie sanguine monte (par exemple après un repas), l'entrée de glucose dans les cellules s'accélère… mais seulement jusqu'à un certain plafond. Si on dépasse la capacité maximale des GLUT (J_v,max), le glucose s'accumule dans le sang sans pouvoir entrer plus vite dans les cellules — c'est l'**hyperglycémie**, signe biologique central du diabète. Cette saturation des transporteurs est l'une des raisons pour lesquelles un diabétique non traité reste hyperglycémique même au repos.

### 4. Le transport actif — Quand la cellule paye en ATP

Pour transporter une molécule **contre son gradient** (la concentrer là où elle est déjà plus concentrée), il faut de l'énergie. La cellule la fournit sous forme d'ATP, hydrolysé directement par la protéine de transport (transport actif primaire) ou indirectement via un gradient ionique préalablement établi (transport actif secondaire).

L'exemple emblématique est la **pompe Na⁺/K⁺-ATPase** : pour chaque molécule d'ATP hydrolysée, 3 Na⁺ sortent et 2 K⁺ entrent dans la cellule. Cette pompe consomme à elle seule plus de 30 % de l'énergie totale du corps au repos — et plus de la moitié de l'énergie des cellules excitables (neurones, cardiomyocytes).

**🧠 Astuce — Reconnaître un transport actif en clinique**

Quand un examen clinique mentionne une **dépendance énergétique**, une **concentration contre le gradient** ou une **inhibition par poison métabolique** (cyanure, ouabaïne…), c'est un transport actif.

**Application typique — La filtration glomérulaire au rein**

L'organe filtre par excellence du corps, c'est le **rein**. Il combine tous les mécanismes qu'on vient de voir : il filtre le sang sous pression (~120 mL/min pour les 2 reins), laisse passer l'eau, le sel, le glucose et l'urée, mais retient les protéines et les cellules. Pour évaluer sa bonne santé, on mesure la **clairance de la créatinine** (une molécule qui passe librement le filtre rénal) :

K = (c_u × V) / c_p

(c_u = créatininurie, V = débit urinaire sur 24 h, c_p = créatininémie). Une clairance normale = 90-120 mL/min. En dessous : insuffisance rénale.

## IV. Ondes acoustiques — célérité, fréquence, intensité

Changement de sujet apparent : on passe de la diffusion de la matière à la propagation des ondes. Mais le principe est le même — quelque chose traverse un milieu en perdant ou en gagnant en chemin. Les ondes acoustiques sont la **brique de base** de l'échographie, du Doppler, du stéthoscope, et même de l'audition. Tout part de quelques formules simples.

### 1. 🤔 Le problème — C'est quoi un son, physiquement ?

Pour vraiment comprendre ce qu'est un son, on va suivre son trajet **étape par étape**, depuis la bouche de quelqu'un qui te parle jusqu'à ton oreille :

- **Au départ — les cordes vocales vibrent.** Quand quelqu'un parle, ses cordes vocales s'ouvrent et se ferment très rapidement (~ 100 à 200 fois par seconde pour une voix masculine, plus pour une voix féminine).

- **Cette vibration pousse l'air juste devant la bouche.** À chaque ouverture/fermeture, les molécules d'air situées juste à la sortie sont brièvement compressées (densité plus élevée), puis se relâchent.

- **Effet domino — l'air voisin est bousculé à son tour.** En se relâchant, ces molécules cognent leurs voisines un peu plus loin, qui se compressent à leur tour, puis se relâchent en cognant les suivantes… C'est exactement comme une rangée de dominos qui tombent l'un après l'autre : la perturbation se propage, mais aucun domino ne change vraiment de place.

- **La perturbation atteint ton oreille.** De proche en proche, cette zone de compression/relâchement se propage dans l'air jusqu'à arriver sur ton **tympan** (une fine membrane à l'entrée de l'oreille).

- **Ton tympan vibre, ton cerveau interprète.** La perturbation fait vibrer le tympan exactement au même rythme que les cordes vocales du départ. Cette vibration est transmise aux nerfs auditifs → ton cerveau reconnaît « voix de quelqu'un ».

👉 Le point absolument fondamental à comprendre : **aucune molécule d'air n'a fait le voyage** de la bouche à ton oreille. Chaque molécule a juste bougé sur quelques nanomètres avant de retourner à sa place. Ce qui s'est propagé, c'est la perturbation elle-même — la vague de compression/relâchement. On appelle ça une **onde mécanique**.

👉 **Conséquence directe** : sans matière (= sans molécules à bousculer), pas d'effet domino possible → **pas de son**. C'est pour ça que dans le vide spatial, personne ne t'entend crier — pas parce que ta voix est faible, mais parce qu'il n'y a aucune molécule pour propager la compression.

### 2. Onde mécanique : longitudinale ou transversale

**🔑 Onde acoustique = onde élastique mécanique**

Une **onde acoustique** est un déplacement périodique des plans moléculaires par rapport à leur position d'équilibre. C'est une vibration mécanique . Elle a besoin d'un **support matériel** pour se propager (gaz, liquide, ou solide) — elle ne se propage pas dans le vide.

- Dans les **fluides** (gaz, liquides) : onde **longitudinale** uniquement (les molécules oscillent dans la même direction que la propagation, en compression/dilatation)

- Dans les **solides** : ondes longitudinales **et** transversales (oscillation perpendiculaire à la propagation, comme une corde de guitare)

[FIGURE physique_ch4_fig_ondes_long_transv.png]

Les deux types d'ondes mécaniques. **① Longitudinale** : les molécules s'agitent dans le sens de la propagation, en compressions/dilatations (= les sons que tu entends, dans l'air ou l'eau). **② Transversale** : les molécules s'agitent perpendiculairement à la propagation, comme une corde de guitare (uniquement possible dans les solides).

### 3. Période, fréquence, longueur d'onde — Le vocabulaire des ondes

Avant d'aller plus loin, il faut poser **3 grandeurs** qui caractérisent toute onde — peu importe qu'il s'agisse d'un son, d'une vague, ou d'une onde radio. Tu vas les retrouver partout dans le reste du chapitre, donc autant bien les avoir en tête maintenant.

**🤔 « Mais ces courbes sinusoïdales, c'est pour les ondes transversales, non ? »**

Bonne remarque — on vient de voir que les sons sont des ondes longitudinales (compression/dilatation de proche en proche), alors que les courbes ondulées style « corde de guitare » ressemblent plutôt à des ondes transversales . Pourquoi est-ce qu'on va quand même dessiner des sinusoïdes pour parler de période et de longueur d'onde dans les sons ?

Réponse : **les notions de période T, fréquence f et longueur d'onde λ s'appliquent aux deux types d'ondes** (longitudinales ET transversales), parce qu'elles décrivent toutes les deux des oscillations périodiques . Ce qui change, c'est juste la **direction d'oscillation** des molécules (parallèle pour le son, perpendiculaire pour la corde) — pas le rythme de l'oscillation.

La courbe sinusoïdale qu'on va dessiner est un **outil de représentation** : on met sur l'axe vertical le déplacement de la molécule par rapport à sa position d'équilibre (peu importe sa direction réelle). Cette convention permet d'utiliser la même mathématique pour les deux types d'ondes. Ne te laisse donc pas piéger par l'aspect visuel « ondulé » des graphes — pour un son, la molécule ne monte pas/ne descend pas vraiment, elle se déplace à gauche/droite dans le sens de propagation.

#### ① Période T — La durée d'un « cycle » complet

Reprends l'image des dominos qui tombent. À un endroit précis dans l'air, une molécule fait une **oscillation complète** : elle est compressée, puis se relâche, puis revient à sa position de départ. Cette « aller-retour » complet s'appelle un **cycle**. La **période T**, c'est tout simplement la durée d'un cycle (en secondes).

👉 Une période courte = oscillation rapide. Une période longue = oscillation lente.

[FIGURE physique_ch4_fig_periode_T.png]

La **période T** est la durée d' un cycle complet de l'oscillation (de pic à pic, ou de creux à creux). Elle se mesure en secondes.

#### ② Fréquence f — Combien de cycles par seconde

La période T (durée d'un cycle) est utile, mais en pratique on préfère raisonner avec une grandeur plus parlante : **combien d'oscillations se déroulent en 1 seconde ?** On appelle ça la **fréquence f**.

Le raisonnement pour passer de T à f est immédiat :

- 1 cycle dure **T** secondes ;

- donc en **1 seconde**, il rentre **1 / T** cycles.

D'où la formule :

Définition de la fréquence
f = 1 / T
f = fréquence (= nombre de cycles complets en 1 seconde) · T = période (= durée d'un cycle, en secondes).

L'**unité de la fréquence** s'appelle le **hertz** (Hz), du nom du physicien allemand Heinrich Hertz. Par définition : **1 Hz = 1 cycle par seconde**.

**Exemple chiffré** — si une corde de guitare vibre 100 fois par seconde :

- sa fréquence est **f = 100 Hz** (= 100 cycles/s) ;

- et sa période est alors T = 1 / f = 1 / 100 = **0,01 s = 10 ms** (chaque oscillation dure 10 millisecondes).

👉 **Lien intuitif avec le son** :

- Fréquence élevée = beaucoup de cycles par seconde = oscillation rapide = son **aigu** (un sifflet, une cymbale)

- Fréquence basse = peu de cycles par seconde = oscillation lente = son **grave** (une grosse caisse, une voix masculine basse)

[FIGURE physique_ch4_fig_frequence_3hz.png]

Exemple d'une onde sinusoïdale à **f = 3 Hz** : on voit **3 cycles complets** tenir dans 1 seconde (= 3 bosses au-dessus de l'axe + 3 creux en dessous). La courbe démarre et finit exactement à zéro, et toutes les oscillations ont la même hauteur. Pour un son aigu (plus de Hz), on aurait simplement plus de cycles dans la même durée ; pour un son grave (moins de Hz), moins de cycles.

#### ③ Longueur d'onde λ — La « distance » entre deux compressions

Si tu pouvais figer le temps et regarder l'onde sonore qui se propage dans l'air, tu verrais des zones de compression alternées avec des zones de dilatation (revoir la box schéma de la section 2). La **longueur d'onde λ** (lettre grecque lambda ), c'est la **distance** (en mètres) entre deux compressions successives .

**D'où sort la formule ?** Tu peux la retrouver toi-même avec un raisonnement géométrique tout simple :

- Pendant qu'**1 cycle complet** se déroule (durée = la période **T**) ;

- l'onde se propage à la **célérité c** (sa vitesse, en m/s) ;

- donc en 1 cycle, l'onde parcourt une **distance = vitesse × temps = c × T**.

Or cette distance parcourue en 1 cycle, c'est exactement **l'écart entre 2 compressions successives** — donc, par définition, c'est **la longueur d'onde λ**. D'où la formule :

Relation entre λ, fréquence et célérité
λ = c × T = c / f
c = célérité de l'onde dans le milieu (m/s, voir section suivante) · T = période (s) · f = fréquence (Hz). La deuxième égalité vient juste de remplacer T par 1/f.

👉 Cette formule donne directement deux intuitions :

- Pour **une même fréquence**, plus le milieu est rapide (c grand), plus la longueur d'onde est grande. Concrètement : un son de 1 kHz a λ ≈ 34 cm dans l'air (c ≈ 340 m/s), mais λ ≈ 1,4 m dans l'eau (c ≈ 1 400 m/s) — quatre fois plus grand, parce que le son va quatre fois plus vite dans l'eau.

- Pour **un même milieu**, plus la fréquence est élevée, plus la longueur d'onde est courte (T petit → distance parcourue en 1 cycle plus petite).

[FIGURE physique_ch4_fig_longueur_onde_lambda.png]

La **longueur d'onde λ** est la distance (en mètres) entre deux compressions consécutives d'une onde sonore figée à un instant t. À ne pas confondre avec la période T, qui est une durée (en secondes) — λ vit dans l'espace, T vit dans le temps.

### 4. Classification : infrasons, sons audibles, ultrasons

Maintenant que tu sais ce qu'est un hertz, on peut classer les ondes acoustiques par **fréquence**. Comme on va jongler avec des nombres très grands (jusqu'à plusieurs millions de Hz), on utilise les préfixes vus au ch.1 :

**💡 Rappel express — Les préfixes utilisés pour les fréquences**

- **1 Hz** = 1 cycle par seconde (l'unité de base)

- **1 kHz** (kilo-hertz) = **1 000 Hz** = 10³ Hz

- **1 MHz** (méga-hertz) = **1 000 000 Hz** = 10⁶ Hz

- **1 GHz** (giga-hertz) = 10⁹ Hz (pas utilisé en acoustique médicale, mais on le croise dans les ondes radio et le Wi-Fi)

👉 Conversion express : **20 kHz = 20 000 Hz** · **1 MHz = 1 000 kHz = 10⁶ Hz**.

L'oreille humaine ne perçoit qu'une fenêtre étroite : **20 Hz à 20 000 Hz (= 20 kHz)**. En dessous, ce sont les **infrasons** (perçus par les éléphants, certains poissons). Au-dessus, les **ultrasons** (perçus par les chauves-souris, certains dauphins). En médecine, on utilise les **ultrasons entre 1 et 20 MHz** — donc à des fréquences cent à mille fois au-delà de l'audible humain.

|

| Catégorie
| Fréquence
| Exemples / usages

| Infrasons | < 20 Hz | Vibrations sismiques, communication des éléphants

| Audible (graves) | 20-1 000 Hz | Voix masculine, basses musicales

| Audible (aigus) | 1 000-20 000 Hz | Voix féminine, sifflet, cymbales

| Ultrasons usuels | 20 kHz - 1 MHz | Détartrage dentaire, nettoyage ultrasonore, sonar marin

| **Ultrasons médicaux** | **1-20 MHz** | **Échographie, Doppler, lithotripsie**

### 5. La célérité c — Une signature du milieu

La **célérité c**, c'est la **vitesse à laquelle l'onde se propage** dans un milieu (en m/s). Question concrète : **pourquoi le son va-t-il quatre fois plus vite dans l'eau que dans l'air ?** Et plus de dix fois plus vite dans l'os ?

Pour répondre, on va construire la formule **brique par brique**, comme d'habitude. La vitesse de l'onde dépend de **2 propriétés du milieu** :

**1ʳᵉ brique — La rigidité du milieu (notée k, le « module d'élasticité »).** Reprends l'analogie des dominos qui tombent. Si les dominos sont rigides (en bois dur), ils se transmettent la chute très rapidement. S'ils sont mous (en mousse), la chute s'amortit. Pareil pour l'onde sonore : plus les molécules sont liées rigidement à leurs voisines (= module d'élasticité k grand), plus l'onde se propage vite. Donc **c augmente avec k**.

**2ᵉ brique — La masse volumique ρ.** Si chaque molécule est lourde (ρ grand), elle est plus difficile à mettre en mouvement — comme essayer de pousser une boule de bowling vs une balle de ping-pong. Plus les molécules sont lourdes, plus elles « résistent » à la mise en mouvement, et donc plus l'onde se propage lentement. **c diminue quand ρ augmente**.

On assemble : c augmente avec k, c diminue avec ρ → c est lié au rapport **k/ρ**. Mathématiquement, la dépendance exacte est en racine carrée (résultat qu'on admet, la démonstration sort du cadre du programme) :

Célérité d'une onde acoustique
c = √(k / ρ)
c = vitesse de l'onde dans le milieu (m/s) · k = module d'élasticité du milieu (Pa, mesure la rigidité ) · ρ = masse volumique du milieu (kg/m³).

👉 **Lecture intuitive** : un milieu est rapide pour le son s'il est à la fois **rigide** (k grand) ET **léger** (ρ petit). C'est pour ça que :

- L'**air** (peu rigide, mais très léger) → c ≈ 340 m/s

- L'**eau** (beaucoup plus rigide, et seulement ~800 fois plus dense) → c ≈ 1 430 m/s, soit 4 × plus rapide que dans l'air

- L'**os** (très rigide, encore plus dense) → c ≈ 4 000 m/s. La rigidité gagne sur la densité — d'où la vitesse encore plus élevée.

👉 **Conséquence majeure** : la célérité ne dépend pas de la fréquence . Que tu joues une note grave ou une note aiguë, elles voyagent **à la même vitesse** dans l'air (sinon les concerts seraient incohérents — tu entendrais les graves arriver avant les aigus). La célérité est une signature du milieu traversé , pas de la source sonore.

Quelques ordres de grandeur pour fixer les idées :

|

| Milieu
| Célérité c (m/s)
| Remarque

| Air (20 °C) | **~ 340 m/s** | 1 km en 3 s — règle des orages

| Eau (20 °C) | **~ 1 430 m/s** | ≈ 1 500 m/s dans les tissus mous

| Os | ~ 4 000 m/s | Beaucoup plus rigide

| Acier | ~ 5 000 m/s | Milieu très rigide

| Vide (son) | — | Pas de propagation possible (pas de matière)

| **Lumière (dans le vide)** ⭐ | **c = 3 × 10⁸ m/s**
(= 300 000 km/s) | **À CONNAÎTRE PAR CŒUR.** Onde électromagnétique, pas acoustique — mais c'est LA vitesse de référence.

**🧠 Mnémo Medeos — « 1 km en 3 s »**

Pour estimer la distance d'un orage : on compte le temps Δt entre l'éclair et le coup de tonnerre. L'éclair (lumière, 3 × 10⁸ m/s) te parvient quasi-instantanément , alors que le tonnerre (son, 340 m/s) met du temps. Distance ≈ Δt × 340 m. Approximation rapide : **1 km en 3 s**. Si tu comptes 6 secondes, l'orage est à 2 km. Cette même logique est utilisée en échographie : la sonde émet un ultrason, mesure le délai jusqu'au retour de l'écho, et déduit la profondeur de la structure réfléchissante (en supposant c ≈ 1 500 m/s dans les tissus).

### 6. Impédance acoustique et intensité

#### L'impédance acoustique Z — Comment un milieu « réagit » à une onde sonore

Le mot **impédance** vient du latin impedire = « empêcher, faire obstacle ». L'impédance acoustique Z, c'est un seul nombre qui caractérise **comment un milieu réagit au passage d'une onde sonore** — un peu comme la « résistance électrique » d'un circuit.

Construisons cette grandeur logiquement à partir de 2 propriétés du milieu qu'on connaît déjà :

- **La masse volumique ρ** : plus le milieu est dense, plus chaque molécule qui oscille « pèse lourd » — donc plus elle « charge » l'onde en énergie au passage.

- **La célérité c** : plus l'onde se propage vite, plus elle transporte cette énergie loin par seconde.

L'impédance acoustique combine ces deux contributions en un seul produit :

Impédance acoustique
Z = ρ × c
Z s'exprime en kg·m⁻²·s⁻¹ (= « rayl », mais ce nom n'est pas utilisé en P1).
Ordres de grandeur utiles : **Z_air ≈ 440** · **Z_eau ≈ Z_tissus mous ≈ 1,5 × 10⁶**. Rapport ≈ **3 500** entre les deux !

👉 **Pourquoi cette grandeur est-elle cruciale ?** Parce que c'est le contraste d'impédance entre deux milieux qui décide si une onde passe ou rebondit à leur interface. On le verra en section V (réflexion R = ((Z₂−Z₁)/(Z₂+Z₁))²) — et c'est entre autres ce qui explique pourquoi on a besoin de **gel d'échographie** entre la sonde et la peau.

#### L'intensité acoustique W — L'énergie transportée par l'onde

L'**intensité acoustique W** (ou « puissance surfacique »), c'est **l'énergie que l'onde transporte chaque seconde, par mètre carré**. Elle se mesure en **watts par mètre carré (W/m²)**. C'est ce qui détermine si un son est « fort » ou « faible ».

Comment cette intensité dépend-elle des caractéristiques de l'onde ? Décortiquons les 3 facteurs qui interviennent :

**① L'amplitude x₀ (déplacement maximal d'une molécule).** Plus la molécule bouge fort, plus elle a d'énergie. En physique des oscillations (comme un ressort), l'énergie va comme le carré de l'amplitude . Donc **W ∝ x₀²**.

**② La fréquence f (nombre de cycles par seconde).** Plus l'oscillation est rapide, plus la molécule a une vitesse de pointe élevée — et donc plus d'énergie cinétique. Mathématiquement, la vitesse maximale d'une molécule en oscillation est proportionnelle à f, et l'énergie cinétique va comme la vitesse au carré. Donc **W ∝ f²**.

**③ L'impédance Z du milieu.** On vient de le voir : Z mesure la capacité du milieu à transporter l'onde. Plus Z est grand, plus l'onde transporte d'énergie par seconde. Donc **W ∝ Z**.

On assemble ces 3 facteurs en multipliant. Un facteur numérique **2π²** (= 2 × π², avec **π = pi ≈ 3,14** — le même nombre que pour le périmètre d'un cercle) apparaît à la sortie de la démonstration mathématique (qui sort du cadre du programme — on l'admet) :

Intensité acoustique (puissance surfacique)
W = 2 × π² × f² × x₀² × Z
W en W/m² · f en Hz · x₀ = amplitude maximale du déplacement moléculaire (m) · Z = impédance du milieu (kg·m⁻²·s⁻¹). Pour les calculs mentaux, on approxime souvent **π² ≈ 10**, donc **2π² ≈ 20**.

👉 **Trois conséquences à graver** (toutes vérifiables sur la formule) :

- **Doubler l'amplitude x₀** → intensité **multipliée par 4** (parce que W ∝ x₀²).

- **Doubler la fréquence f** → intensité **multipliée par 4** (parce que W ∝ f²). C'est notamment ce qui rend les ultrasons à haute fréquence biologiquement actifs et exploitables en lithotripsie.

- **Passer de l'air (Z = 440) à l'eau (Z = 1,5 × 10⁶)** → à amplitude et fréquence identiques, l'intensité de l'onde est 3 500 fois plus grande dans l'eau que dans l'air, parce que Z est 3 500 fois plus grand.

### 7. Le décibel — Une échelle logarithmique pour l'oreille

#### 🤔 Le problème — Pourquoi inventer une nouvelle unité ?

L'oreille humaine perçoit des intensités acoustiques sur une plage **énorme** : du chuchotement à 10⁻¹² W/m² (= seuil d'audibilité à 1 kHz, à peine perceptible) jusqu'au seuil de douleur vers 1 W/m². Soit un rapport de **10¹² (un million de millions)** entre les deux extrêmes.

Travailler avec des nombres comme 0,000 000 000 001 W/m² au quotidien est impraticable. On a besoin d'une **échelle compressée**, qui transforme ces ordres de grandeur démesurés en nombres lisibles entre 0 et 120. La solution mathématique : le **logarithme** (revoir ch.1 préambule).

#### 📐 Construction de la formule pas à pas

**1ʳᵉ brique — Comparer à une référence.** Un logarithme ne marche pas sur des grandeurs « avec unité » (on ne peut pas faire log(W/m²)). Il faut comparer l'intensité W à une valeur de référence W_ref pour obtenir un nombre sans unité . Par convention internationale, on prend :

**W_ref = 10⁻¹² W/m²** (le seuil d'audibilité de l'oreille humaine à 1 kHz)

Le rapport **W / W_ref** nous dit alors « combien de fois mon son est plus fort que le seuil ».

**2ᵉ brique — Prendre le log₁₀ de ce rapport.** Rappel ch.1 : le log₁₀ « compte les zéros » d'un nombre. log(10) = 1, log(100) = 2, log(10⁶) = 6, log(10¹²) = 12. Le log compresse les ordres de grandeur :

- Un rapport de 10 → log = 1

- Un rapport de 1 000 000 → log = 6

- Un rapport de 10¹² → log = 12

👉 Les 12 ordres de grandeur de l'oreille deviennent ainsi **12 unités** sur l'échelle log. Beaucoup plus lisible.

**3ᵉ brique — Multiplier par 10 (= passer aux décibels).** Historiquement, l'unité originale s'appelait le bel (B), du nom d'Alexander Graham Bell (inventeur du téléphone). Mais 0 à 12 bels donne une échelle trop tassée — on a divisé chaque bel en 10 unités, le **décibel** (dB). C'est juste un facteur 10 pour avoir des nombres plus parlants (60 dB au lieu de 6 B).

On assemble les 3 briques :

Niveau d'intensité acoustique en décibels
W_dB = 10 × log(W / W_ref)
W = intensité du son (W/m²) · W_ref = 10⁻¹² W/m² (seuil d'audibilité, valeur conventionnelle) · log = logarithme en base 10.

#### 🔍 Vérification — Les 3 valeurs-repères de l'échelle dB

Pour vérifier que la formule fait ce qu'on veut, appliquons-la aux 3 valeurs extrêmes de l'oreille :

- **Au seuil d'audibilité** : W = W_ref → W/W_ref = 1 → log(1) = 0 → **0 dB** ✓ (par convention, le « 0 dB » est exactement le seuil)

- **Conversation normale** : W ≈ 10⁻⁶ W/m² → W/W_ref = 10⁶ → log = 6 → **60 dB** ✓

- **Au seuil de douleur** : W ≈ 1 W/m² → W/W_ref = 10¹² → log = 12 → **120 dB** ✓

👉 La formule transforme les 12 ordres de grandeur (de 10⁻¹² à 1 W/m²) en une **échelle simple de 0 à 120 dB**. C'est exactement le but recherché.

**🔑 Exemple de calcul guidé — Atelier bruyant**

Dans un atelier industriel, on mesure une intensité acoustique **W = 10⁻⁵ W/m²**. À combien de décibels cela correspond-il ?

- **Calculer le rapport W / W_ref** en utilisant les règles des puissances de 10 (ch.1) :

W / W_ref = 10⁻⁵ / 10⁻¹² = 10⁻⁵⁻⁽⁻¹²⁾ = **10⁷**

- **Prendre le log du rapport** :

log(10⁷) = **7** (c'est la définition même du log₁₀ d'une puissance de 10)

- **Multiplier par 10** :

W_dB = 10 × 7 = **70 dB**

👉 **Réponse : 70 dB**. C'est le niveau d'un atelier bruyant ou d'une circulation urbaine intense — encore acceptable, mais on commence à fatiguer auditivement après plusieurs heures d'exposition.

**💡 Variante — Quand l'intensité n'est pas une puissance de 10 « propre »**

Et si on mesurait plutôt **W = 2 × 10⁻⁵ W/m²** (= 2 fois plus que l'atelier précédent) ? Pas de panique, on utilise la **règle de recombinaison du log** vue au ch.1 : log(a × b) = log(a) + log(b).

- W / W_ref = (2 × 10⁻⁵) / 10⁻¹² = 2 × 10⁷

- log(2 × 10⁷) = log(2) + log(10⁷) = 0,3 + 7 = **7,3**

- W_dB = 10 × 7,3 = **73 dB**

👉 On retrouve la **règle d'or qu'on va voir juste après** : doubler l'intensité, c'est **+3 dB** (parce que 10 × log(2) = 10 × 0,3 = 3).

**🔑 La règle d'or à retenirDoubler la puissance acoustique en W/m² correspond à ajouter 3 dB.** (parce que 10·log(2) ≈ 3). Et multiplier par 10 la puissance correspond à ajouter 10 dB.

Cette règle est fondamentale : un atelier à 90 dB vs un atelier à 93 dB, ce n'est pas « un peu plus fort », c'est 2 fois plus puissant . À 100 dB, c'est 10 fois plus puissant qu'à 90 dB.

|

| Source sonore
| Niveau (dB)
| Effet sur l'oreille

| Seuil d'audibilité (1 kHz) | 0 dB | —

| Murmure | 20-30 dB | —

| Conversation normale | 60 dB | —

| Trafic urbain | 70-80 dB | Acceptable

| Concert, atelier bruyant | 100-110 dB | **Fatigue auditive (perte transitoire 24 h)**

| Seuil de douleur | 120 dB | Douleur, lésion possible

| Coup de feu, décollage avion | 140 dB | **Risque de surdité instantanée (effet de blast = onde de choc d'explosion qui peut déchirer le tympan)**

Les **effets biologiques d'une exposition sonore** dépendent de l'intensité ET de la durée :

- **Exposition aiguë** : 120 dB = seuil de douleur ; > 140 dB (blast) = déchirure du tympan, surdité brutale.

- **Exposition chronique** > 80 dB sur 8 h → surdité professionnelle (perte auditive définitive). Protection auditive obligatoire au travail.

- **Effet thermique des ultrasons médicaux** : à forte intensité, ils échauffent les tissus traversés — c'est le principe de la lithotripsie (fragmenter les calculs rénaux par ultrasons focalisés).

**🧪 Mini-exercice ⭐⭐⭐ — Calcul de puissance acoustique puis conversion en dB (type Q11)Énoncé :** Une sonde ultrasonore émet à **f = 80 Hz** avec une amplitude moléculaire **x₀ = 1 mm = 1·10⁻³ m** dans l'eau (Z_eau = 1,5·10⁶ kg·m⁻²·s⁻¹). Calcule la puissance surfacique W en W/m², puis convertis ce résultat en dB.

👁️ Voir la correction

**Méthode — On enchaîne deux formules :** d'abord W = 2π²·f²·x₀²·Z (intensité), puis W_dB = 10·log(W / W_ref) (conversion en dB). On y va étape par étape.

**🧱 ÉTAPE 1 — Identifier les données et vérifier les unités**

- f = 80 Hz ✓ (déjà en Hz)

- x₀ = 1 mm = **10⁻³ m** ✓ (converti en mètres)

- Z = 1,5 × 10⁶ kg·m⁻²·s⁻¹ ✓

Toutes les unités sont cohérentes. On peut substituer.

**🧱 ÉTAPE 2 — Substituer dans la formule W = 2π²·f²·x₀²·Z**

W = 2 × π² × (80)² × (10⁻³)² × (1,5 × 10⁶)

Astuce du concours : on approxime **π² ≈ 10**, donc **2π² ≈ 20** (rappel : π ≈ 3,14, donc π² ≈ 9,87, on arrondit à 10 pour faire le calcul de tête).

**🧱 ÉTAPE 3 — Calculer chaque morceau**

- 2π² ≈ 20

- f² = 80² = 6 400

- x₀² = (10⁻³)² = 10⁻⁶

- Z = 1,5 × 10⁶

**🧱 ÉTAPE 4 — Regrouper et multiplier**

W ≈ 20 × 6 400 × 10⁻⁶ × 1,5 × 10⁶

Les puissances de 10 se simplifient : **10⁻⁶ × 10⁶ = 10⁰ = 1**. Reste à multiplier les chiffres :

W ≈ 20 × 6 400 × 1,5 = 20 × 9 600 = **192 000 W/m² ≈ 2 × 10⁵ W/m²🧱 ÉTAPE 5 — Convertir en dB avec W_dB = 10·log(W / W_ref)**

W_ref = 10⁻¹² W/m² (par convention).

Calcul du rapport : W / W_ref = (2 × 10⁵) / 10⁻¹² = **2 × 10¹⁷🧱 ÉTAPE 6 — Prendre le log et appliquer la règle de recombinaison**

log(2 × 10¹⁷) = log(2) + log(10¹⁷) = **0,3 + 17 = 17,3** (rappel ch.1 : log(a × b) = log(a) + log(b), avec log(2) ≈ 0,3).

**🧱 ÉTAPE 7 — Multiplier par 10**

W_dB = 10 × 17,3 = **173 dB** 🤯

👉 **Interprétation** : 173 dB est un niveau colossal, bien au-dessus du seuil de douleur (120 dB). Physiquement légitime sur le papier, mais une vraie sonde médicale travaille à des fréquences beaucoup plus élevées (1-15 MHz) avec des amplitudes sub-micrométriques — l'énoncé teste juste ta maîtrise des deux formules enchaînées.

**💡 Méthode-réflexe à graver ⭐⭐⭐** (pour calculer ce type d'exercice de tête sans même passer par tous les détails) :

- Si W = 10ⁿ × W_ref → W_dB = 10·n (chaque facteur 10 ajoute 10 dB)

- Si W est multipliée par 2 → +3 dB ; multipliée par 10 → +10 dB ; divisée par 2 → −3 dB

- Combine les deux : W = 2 × 10¹⁷ × W_ref → 10·log(2) + 10·17 = **3 + 170 = 173 dB** ✓ (résultat trouvé sans même calculer W explicitement !)

**🧪 Mini-exercice — Calcul rapide en décibelsÉnoncé :** Un atelier industriel mesure 95 dB. On installe une isolation acoustique qui divise l'intensité acoustique par 8. Quel sera le nouveau niveau sonore en dB ?

👁️ Voir la correction

**Méthode rapide — Calcul de tête grâce à la règle « × 2 = +3 dB »🧱 ÉTAPE 1 — Réécrire « divisé par 8 » en puissances de 2**

8 = 2 × 2 × 2 = 2³. Donc **diviser par 8 = diviser par 2 trois fois de suite**.

**🧱 ÉTAPE 2 — Appliquer la règle d'or à chaque division par 2**

Rappel : **diviser par 2 l'intensité W → retirer 3 dB** (parce que 10·log(1/2) = −10·log(2) = −10·0,3 = −3 dB).

Donc diviser par 2³ retire **3 × 3 = 9 dB**.

**🧱 ÉTAPE 3 — Calculer le nouveau niveau**

Nouveau niveau = 95 − 9 = **86 dB**.

**✅ Vérification par la formule directe**

ΔW_dB = 10·log(W_nouveau / W_ancien) = 10·log(1/8) = −10·log(8)

= −10·log(2³) = −10·(3·log 2) = −10·(3 × 0,3) = **−9 dB** ✓

**💡 Astuce générale à mémoriser** : les rapports d'intensité classiques correspondent à des écarts en dB ronds :

- × 2 → +3 dB · ÷ 2 → −3 dB

- × 4 → +6 dB · ÷ 4 → −6 dB

- × 8 → +9 dB · **÷ 8 → −9 dB** (notre cas)

- × 10 → +10 dB · ÷ 10 → −10 dB

- × 100 → +20 dB · ÷ 100 → −20 dB

Avec ces 5 cas, tu peux quasiment tout calculer mentalement en 2 secondes.

**🧪 Mini-exercice — Longueur d'onde d'un ultrason médicalÉnoncé :** Une sonde d'échographie abdominale émet à 3,5 MHz. Quelle est la longueur d'onde dans les tissus mous (c ≈ 1 500 m/s) ? Cette longueur d'onde fixe la limite de résolution spatiale (on ne distingue pas deux structures plus rapprochées que λ).

👁️ Voir la correction

**Méthode — On applique la formule λ = c / f vue plus haut, en faisant très attention aux unités.🧱 ÉTAPE 1 — Identifier les données et leurs unités**

- f = 3,5 MHz = 3,5 × 10⁶ Hz (rappel : **1 MHz = 10⁶ Hz**)

- c = 1 500 m/s (dans les tissus mous)

**🧱 ÉTAPE 2 — Substituer dans la formule λ = c / f**

λ = 1 500 / (3,5 × 10⁶) m

**🧱 ÉTAPE 3 — Séparer chiffres et puissances de 10 pour faire le calcul de tête**

λ = (1 500 / 3,5) × 10⁻⁶ m

Calcul mental : 1 500 / 3,5 ≈ 1 500 / 3,5. Pour aller vite : 3,5 × 400 = 1 400 (un peu moins) ; 3,5 × 430 = 1 505 (très proche de 1 500). Donc 1 500 / 3,5 ≈ **430**.

λ ≈ 430 × 10⁻⁶ m = **4,3 × 10⁻⁴ m🧱 ÉTAPE 4 — Convertir en millimètres pour avoir une unité parlante**

Rappel : 1 mm = 10⁻³ m, donc :

λ ≈ 4,3 × 10⁻⁴ m = 0,43 × 10⁻³ m = **0,43 mm ≈ 0,4 mm👉 Interprétation clinique**

Avec une sonde à 3,5 MHz, on ne peut pas distinguer deux structures du corps si elles sont distantes de moins de ~0,4 mm. Pour améliorer la résolution, on monte en fréquence (par exemple sondes superficielles à 10 MHz → λ ≈ 0,15 mm, donc on voit des détails plus fins).

👉 **MAIS** à fréquence élevée, l'onde est plus vite absorbée par les tissus (on le verra en section V), donc on n'explore pas en profondeur. **C'est le compromis fondamental de l'échographie : résolution fine vs grande profondeur.** L'opérateur choisit sa sonde selon l'organe à explorer.

×

medeos-sante.fr