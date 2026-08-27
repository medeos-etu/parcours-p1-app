Chapitre 4 : Aspects physiques des membranes & ondes acoustiques - MEDEOS — Partie 4

Chapitre 4 — Partie 4

# Aspects physiques des membranes & ondes acoustiques

Diffusion, osmose, dialyse et échographie — comment la matière et l'information traversent (ou pas) un milieu biologique.

## 🔄 Où on en est

Dans la partie précédente, tu as d'abord rangé les **quatre modes de transport** à travers une membrane, du passage gratuit (diffusion simple et facilitée) jusqu'au transport qui fait dépenser de l'énergie à la cellule. Puis tu as découvert ce qu'est vraiment un **son** : une onde mécanique, une perturbation qui se propage de proche en proche sans qu'aucune molécule ne fasse le voyage. Tu as posé le vocabulaire des ondes (**fréquence, période, longueur d'onde**), tu as vu que la **célérité** est la signature du milieu traversé (c = √(k/ρ) : un son va plus vite dans l'eau ou l'os que dans l'air), et tu as appris à parler d'**impédance** et d'**intensité** sonore.

Tu as maintenant toutes les briques pour comprendre les deux outils qui font vivre ces ondes en médecine. Dans cette partie, on assemble tout ça pour expliquer l'**effet Doppler** (pourquoi la fréquence d'un son change quand la source bouge) et l'**échographie** (comment des ultrasons et leurs échos permettent de voir à l'intérieur du corps).

## V. Effet Doppler et échographie

L'échographie et le Doppler sont les deux applications majeures des ondes acoustiques en médecine. Tous les principes sont déjà là — il suffit d'assembler. Réflexion + transmission aux interfaces → image écho. Effet Doppler → mesure de vitesse. Absorption → compromis profondeur/résolution. C'est toute la physique d'une sonde médicale.

### 1. 🤔 Le problème — Pourquoi le son d'une ambulance change quand elle passe ?

Tu connais l'effet : une ambulance arrive vers toi en hurlant, sa sirène a un son aigu ; puis dès qu'elle te dépasse et s'éloigne, le son devient plus grave. Pourtant, la sirène n'a pas changé. Ce qui a changé, c'est la **fréquence perçue** par toi (le récepteur). Quand la source se rapproche, les ondes successives arrivent plus vite que prévu, comprimées dans le temps → fréquence perçue plus élevée. Quand la source s'éloigne, les ondes s'étirent → fréquence perçue plus basse. C'est l'**effet Doppler**, décrit en 1842 par le physicien autrichien Christian Doppler.

### 2. La formule Doppler — Cas simple (récepteur mobile, source fixe)

Pour bien comprendre, on inverse momentanément la scène de l'ambulance. **Cette fois la sirène est fixe** (posée sur un poteau au bord de la route, elle bipe à la fréquence f), et **c'est toi qui bouges** au volant de ta voiture. Les bips partent en cercles concentriques réguliers autour de la sirène, toutes à la même distance les uns des autres (= longueur d'onde λ constante). Ton oreille = le récepteur, qui se déplace à la vitesse v.

**Question** : à quel rythme ton oreille va-t-elle croiser les bips successifs ? C'est ça, ta **fréquence perçue f'**.

**⚠️ Attention au changement de scène.** Dans la vraie vie (l'ambulance qui passe devant toi), c'est la source qui bouge . Ici, dans cette section pédagogique, on fait l'inverse : la source est fixe et c'est le récepteur qui bouge . C'est la même physique (effet Doppler), mais plus simple à construire mathématiquement. On verra plus loin le cas « source mobile » dans le Doppler médical.

[FIGURE physique_ch4_fig_doppler_simple.png]

Le récepteur qui **s'éloigne** (gauche) croise les fronts d'onde moins vite → f' baisse → son grave. Celui qui **s'approche** (droite) les croise plus vite → f' monte → son aigu. La source, elle, n'a pas changé sa fréquence d'émission.

**Construction logique de la formule** — reprenons les 3 cas avec ta voiture :

- **Cas 1 — Voiture à l'arrêt** (v = 0). Tu es garé. Les bips arrivent à ton oreille au rythme normal → **f' = f**. Aucun changement.

- **Cas 2 — Tu pars en t'éloignant de la sirène** (v > 0). Tu roules dans le même sens que les ondes qui te courent après. Comme tu les « fuis », elles te rattrapent moins vite → tu encaisses moins de bips par seconde → **f' < f** (son plus grave). L'écart par rapport à f est proportionnel à **v/c** (la fraction de la vitesse du son que tu « rattrapes »).

- **Cas 3 — Tu fonces vers la sirène** (v < 0). Tu roules à contresens des ondes : elles viennent vers toi, et toi tu vas vers elles. Vous vous croisez plus vite → tu encaisses plus de bips par seconde → **f' > f** (son plus aigu).

💡 **Mémo signe de v** : la convention du cours est « v positif quand tu t'éloignes ». Pourquoi ? Parce qu'on a écrit la formule avec un moins (1 − v/c), et qu'on veut que f' diminue quand tu t'éloignes. Si tu confonds le signe en exam, retiens juste : **s'éloigner → f' baisse → son grave**. La cohérence du signe se vérifie toujours à partir de cette intuition.

D'où la formule :

Effet Doppler (récepteur mobile, source fixe)
f' = f × (1 − v/c)
f = fréquence émise par la source (Hz) · f' = fréquence perçue par le récepteur (Hz) · v = vitesse du récepteur (POSITIVE si s'éloigne, NÉGATIVE si s'approche) · c = célérité du son dans le milieu (m/s).

👉 **Vérifions les 3 cas limites** :

- **v = 0** (immobile) → (1 − 0/c) = 1 → f' = f ✓

- **v > 0** (s'éloigne) → (1 − v/c) < 1 → f' < f → plus grave ✓

- **v < 0** (s'approche) → (1 − v/c) > 1 → f' > f → plus aigu ✓

**💡 Exemple chiffré — Tu passes devant une ambulance garée**

Une ambulance est **stationnée devant les urgences**, sirène allumée pour un test, à f = 1 000 Hz. Toi, tu roules en voiture sur la route qui longe l'hôpital à v = 30 m/s (= 108 km/h). Ta voiture = le récepteur mobile, la sirène = la source fixe. Célérité du son c = 340 m/s.

**🔁 Stratégie de conversion m/s ↔ km/h** (à mémoriser pour la P1, ça revient tout le temps)

- **m/s → km/h** : on multiplie par 3,6 . Exemple : 30 m/s × 3,6 = **108 km/h**. ✓

- **km/h → m/s** : on divise par 3,6 . Exemple : 108 km/h ÷ 3,6 = **30 m/s**. ✓

D'où vient le 3,6 ? De 1 km/h = 1 000 m / 3 600 s = 1/3,6 m/s. Autrement dit, en une heure (3 600 s) tu parcours 1 000 m si tu vas à 1 km/h. Donc en 1 s tu parcours 1/3,6 m.

**Mémo Medeos** : 36 km/h = 10 m/s. Trois ordres de grandeur à retenir : **marche** ≈ 1 m/s (3,6 km/h), **vélo / sprint** ≈ 10 m/s (36 km/h), **voiture en ville** ≈ 14 m/s (50 km/h), **voiture sur route** ≈ 25 m/s (90 km/h).

v/c = 30/340 ≈ 0,09 (tu roules à 9 % de la vitesse du son).

- Quand tu **fonces vers l'ambulance** (v < 0, tu vas à la rencontre des ondes) : f' = f × (1 − v/c) = 1 000 × (1 − (−0,09)) = 1 000 × 1,09 = **1 090 Hz** → son plus aigu de ~90 Hz.

- Quand tu l'as dépassée et tu **t'en éloignes** (v > 0, tu fuis avec les ondes) : f' = f × (1 − v/c) = 1 000 × 0,91 = **910 Hz** → son plus grave de ~90 Hz.

👉 L'écart entre l'aigu et le grave représente **~180 Hz sur 1 000** = 18 % d'écart. C'est très perceptible à l'oreille — d'où le « bzzziooouuuuw » caractéristique quand tu passes en voiture devant une sirène fixe (ou, c'est exactement symétrique, quand une sirène mobile passe devant toi : la physique de l'effet Doppler ne fait pas de différence entre les deux scénarios).

### 3. Le Doppler médical — Aller-retour sur les globules rouges

En médecine, on utilise une **variante astucieuse** de l'effet Doppler pour mesurer la vitesse du sang. Au lieu d'avoir une source mobile et un récepteur fixe (ou inversement), **la sonde fait les deux rôles** : elle émet l'ultrason, qui se réfléchit sur les globules rouges en mouvement, et la sonde elle-même reçoit l'écho qui revient.

**Pourquoi cette configuration introduit un facteur 2 dans la formule ?** Parce que l'ultrason fait un **aller-retour** sur le globule rouge, et le décalage Doppler se produit une fois à l'aller, une fois au retour. Les deux s'ajoutent.

**🎯 La clé** — Tu connais déjà les deux scènes qu'on vient de voir. Le Doppler médical, c'est **ces deux scènes enchaînées sur le même ultrason**. Rien de plus.

- **Aller (sonde → sang) = Scène A « récepteur mobile »** — La sonde émet à la fréquence f. Le globule rouge bouge à la vitesse v dans le sang : il joue exactement le **rôle de ta voiture qui passe devant la sirène garée**. Il « perçoit » donc l'ultrason à une fréquence décalée f₁.
→ **1ᵉʳ décalage Doppler :** Δf₁ ≈ f × (v·cos α) / c

- **Retour (sang → sonde) = Scène B « source mobile »** — Le globule rouge renvoie aussitôt l'ultrason vers la sonde. Les rôles s'inversent : le globule devient la source en mouvement, la sonde devient le récepteur fixe . Il joue maintenant le **rôle de l'ambulance qui passe devant toi sur le trottoir**. La sonde reçoit l'écho à une fréquence f' encore décalée par rapport à f₁.
→ **2ᵉ décalage Doppler :** Δf₂ ≈ f × (v·cos α) / c

**Bilan** : un même globule rouge subit le décalage **deux fois de suite, dans le même sens** (les deux compriment, ou les deux étirent). Les deux s'additionnent → d'où le **facteur 2** dans la formule médicale.

Le décalage total mesuré par la sonde est donc la somme des deux :

Décalage total = aller + retour
Δf total = Δf₁ + Δf₂ ≈ **2** × f × (v · cos α) / c

👉 D'où le **facteur 2** dans la formule médicale. Sans aller-retour (Doppler « simple » d'une sirène d'ambulance), il n'y aurait qu'un seul décalage et donc pas de 2. **Règle générale en physique** : à chaque fois qu'une onde « part puis revient » (écho, radar, Doppler vasculaire, échographie en B-mode), méfie-toi — un facteur 2 va probablement apparaître quelque part dans la formule, parce que le phénomène se joue deux fois sur le même trajet.

**Pourquoi un cos α dans la formule ?** Parce que dans la vraie vie, la sonde n'est jamais parfaitement alignée avec le vaisseau sanguin (ce serait géométriquement impossible — il faudrait que la sonde soit à l'intérieur de l'artère). On la pose obliquement sur la peau, avec un **angle α** entre la direction de la sonde et le flux. Seule la composante du mouvement parallèle à la sonde contribue à l'effet Doppler — et cette composante vaut **v · cos α** (rappel de trigonométrie).

**🔑 Les 3 cas limites de l'angle α (très importants pour la pratique)**

- **α = 0°** (sonde parfaitement parallèle au flux) → cos α = 1 → **effet Doppler maximal**. Mais impossible géométriquement en clinique.

- **α = 90°** (sonde perpendiculaire au flux) → cos α = **0** → **AUCUN signal Doppler**, quelle que soit la vitesse du sang ! Piège classique : la sonde « voit » le vaisseau mais ne mesure rien.

- **α entre 30° et 60°** → compromis optimal en clinique (cos 60° = 0,5 ; cos 30° ≈ 0,87 — toujours utilisable).

#### 🩺 À quoi sert cette formule en clinique ? Mesurer la vitesse du sang.

Avant d'écrire la formule, posons clairement **ce qu'on cherche** et **ce qu'on connaît déjà**. C'est la seule chose qui compte pour ne pas être perdu.

**🎯 La question clinique** : « À quelle vitesse coule le sang dans cette artère ? »

C'est ça qui intéresse le médecin : la vitesse du sang **v**. Une vitesse trop élevée dans la carotide → suspicion de sténose (rétrécissement). Une vitesse anormalement basse dans une artère rénale → suspicion d'obstruction. C'est l'inconnue de l'équation.

**Ce que la sonde sait déjà** (= les variables connues) :

- **f** = la fréquence qu'elle a émise (elle le sait, c'est elle qui choisit, typiquement 5 MHz).

- **f'** = la fréquence qu'elle reçoit après réflexion sur les globules (elle la mesure).

- **c** ≈ 1 540 m/s = la célérité des ultrasons dans les tissus mous (constante connue d'avance).

- **α** = l'angle entre la sonde et le vaisseau (le médecin le règle et le lit sur l'écran de l'écho).

Conclusion : **v est la seule inconnue**. La formule Doppler permet de remonter de tout ce qu'on connaît à v . C'est tout l'intérêt.

En combinant le facteur 2 (aller-retour) et le facteur cos α (angle de la sonde), on obtient la **formule Doppler médicale** :

Formule Doppler médicale (aller-retour, sonde inclinée à α)
(f' − f) / f = −2 × v × cos α / c
Le signe « − » indique que f' < f quand le sang s'éloigne de la sonde (et inversement, f' > f quand le sang vient vers la sonde).

👉 **Comment la lire concrètement** :

- **Membre de gauche (f' − f) / f** = le décalage relatif de fréquence . C'est la **quantité directement mesurée par l'appareil**. Si la sonde émet à 5 MHz et reçoit 4,997 MHz, ce membre vaut −0,0006 (= −0,06 %).

- **Membre de droite −2 × v × cos α / c** = la traduction physique de ce décalage. Tout est connu sauf v.

- L'appareil fait alors une simple inversion : **v = c × (f − f') / (2 × f × cos α)**. Il affiche cette vitesse en cm/s sur l'écran. C'est ce que le médecin lit.

**💡 Résumé en une phrase** — La sonde compare la fréquence qu'elle envoie avec celle qu'elle reçoit en retour. Plus le sang va vite, plus le décalage est grand. La formule fait l'aller-retour mathématique : décalage de fréquence mesuré → vitesse du sang affichée .

[FIGURE physique_ch4_fig05_doppler_vasculaire.png]

Doppler vasculaire : la sonde émet à la fréquence f, l'écho revient à f', le décalage Δf donne directement la vitesse du sang via l'angle α.

**🧮 Exemple chiffré — On applique la formule au schéma ci-dessusCe qu'on voit sur le schéma :** la sonde est posée sur la peau, inclinée. Son axe d'émission pointe dans le même sens que le flux sanguin (vers la droite) → le sang **s'éloigne** de la sonde. Conséquence prévisible : f' < f, donc **Δf est négatif** (décalage vers le grave, par analogie avec l'ambulance qui s'éloigne).

**Données du jour** (calibré pour calcul de tête, sans calculatrice) :

- **f = 5 MHz** = 5 × 10⁶ Hz (fréquence émise par la sonde)

- **f' = 4 998 000 Hz** (fréquence reçue après réflexion sur les globules rouges)

- Donc **Δf = f' − f = −2 000 Hz = −2 kHz**. Bien négatif, conforme au schéma (sang qui s'éloigne). ✓

- **α = 60°** (l'opérateur a réglé la sonde sur l'angle « optimal » du Doppler clinique) → cos 60° = **1/2** (voir mini-rappel ci-dessous)

- **c ≈ 1 500 m/s** (célérité des ultrasons dans les tissus mous — la vraie valeur est 1 540 m/s, on arrondit à 1 500 pour le calcul mental ; en QCM avec calculatrice on garderait 1 540)

**📐 Rappel trigonométrie — On reprend tout depuis le début**

Si tu ne te souviens plus de rien, lis tranquillement les 5 étapes ci-dessous. Chaque étape s'appuie uniquement sur la précédente — aucun pré-requis caché.

Étape 1 — Le vocabulaire du triangle rectangle

Un **triangle rectangle**, c'est un triangle qui possède un angle de 90° (l'angle droit, marqué par un petit carré). On regarde l'un des deux autres angles : on l'appelle α.

À partir de α, les trois côtés du triangle prennent un nom précis :

- **Hypoténuse** — le côté en face de l'angle droit. C'est toujours le plus long du triangle.

- **Adjacent** (à α) — le côté qui touche α (et qui n'est pas l'hypoténuse). « Adjacent » veut dire « collé contre ».

- **Opposé** (à α) — le côté qui est en face de α (le seul qui ne touche pas α).

Vocabulaire des côtés vus depuis l'angle α.

Étape 2 — Trois fractions qui dépendent uniquement de α

Avec ces trois côtés on construit trois fractions. La **chose magique** à comprendre : ces fractions ne dépendent que de l'angle α , pas de la taille du triangle. Un grand triangle ou un petit triangle, peu importe — si l'angle α est le même, les fractions valent la même chose. C'est pour ça qu'on leur a donné un nom :

cos α = Adjacent / Hypoténuse

sin α = Opposé / Hypoténuse

tan α = Opposé / Adjacent (= sin α / cos α)

🧠 **Mnémo universel : SOH-CAH-TOA**. Trois syllabes qui reprennent exactement les trois définitions ci-dessus.

- **S**in = **O**pposé / **H**ypoténuse → **SOH**

- **C**os = **A**djacent / **H**ypoténuse → **CAH**

- **T**an = **O**pposé / **A**djacent → **TOA**

Étape 3 — Les 5 valeurs à connaître par cœur

Tu n'as **pas** à mémoriser cos α pour tous les angles possibles. Le programme demande uniquement **5 angles dits « remarquables »**. Pour tous les autres (32°, 47°…), la valeur sera donnée dans l'énoncé du QCM.

|

| α
| 0°
| 30°
| 45°
| 60°
| 90°

| **cos α**
| 1
| √3/2 ≈ 0,87
| √2/2 ≈ 0,71
| **1/2 = 0,5**
| 0

| **sin α**
| 0
| 1/2 = 0,5
| √2/2 ≈ 0,71
| √3/2 ≈ 0,87
| 1

**Comment lire la logique** — Quand α augmente de 0° à 90° :

- **cos α décroît** régulièrement de 1 (à 0°) jusqu'à 0 (à 90°)

- **sin α croît** régulièrement de 0 (à 0°) jusqu'à 1 (à 90°)

- À **45°**, exactement au milieu, cos α = sin α = √2/2 ≈ 0,71. C'est l'angle d'équilibre.

- Les deux lignes du tableau sont le **miroir** l'une de l'autre. Si tu connais les cos, tu connais les sin (et inversement) en lisant le tableau de droite à gauche.

**⚠️ Question piège — Ces nombres ont-ils une unité ?Non.** cos α et sin α sont des **nombres sans unité** (= sans dimension , comme on dit en physique). Ce sont des **proportions**, des « pourcentages » de l'hypoténuse. Pourquoi ? Parce qu'on divise une longueur par une autre longueur → les unités s'annulent (cm ÷ cm = nombre pur).

**Concrètement**, cos 60° = 0,5 signifie : « le côté adjacent fait exactement la moitié (50 %) de l'hypoténuse » . Que l'hypoténuse mesure 1 cm, 5 m ou 12 km, peu importe : l'adjacent vaudra toujours la moitié.

- Hypoténuse = 1 cm → adjacent = 1 × 0,5 = **0,5 cm**

- Hypoténuse = 10 m → adjacent = 10 × 0,5 = **5 m**

- Hypoténuse = 200 (sans unité) → adjacent = 200 × 0,5 = **100**

→ Pour récupérer une **longueur réelle**, on fait toujours : **longueur projetée = longueur totale × cos α** (ou × sin α). L'unité finale est celle de la longueur totale.

🩺 **Dans la formule Doppler** — On multiplie cos α (nombre pur) par v (vitesse en m/s) → on obtient v·cos α en m/s. La sonde ne sort jamais des « centimètres trigonométriques » : cos α joue son rôle d' opérateur de projection , rien de plus.

Étape 4 — Une autre façon de voir : le cercle trigonométrique

Voici la même chose, vue autrement. Trace un **cercle de rayon 1** centré sur l'origine d'un repère (axes x et y). Place un point P sur ce cercle, au bout d'un rayon incliné d'un angle α au-dessus de l'horizontale.

- L'**abscisse** de P (sa coordonnée horizontale, sur l'axe x) vaut exactement **cos α**.

- L'**ordonnée** de P (sa coordonnée verticale, sur l'axe y) vaut exactement **sin α**.

Cercle de rayon 1 : cos α = abscisse de P · sin α = ordonnée de P.

C'est la même chose que le triangle de l'étape 1 : le rayon = hypoténuse (de longueur 1), la projection horizontale = côté adjacent (= cos α), la projection verticale = côté opposé (= sin α). Cette représentation montre aussi pourquoi à α = 0° on a cos = 1 (le point est tout à droite) et à α = 90° on a cos = 0 (le point est tout en haut, à la verticale).

Étape 5 — Pourquoi cos α apparaît dans la formule Doppler

Le sang coule dans son artère à la vitesse **v**, dans la direction de l'artère. Mais la sonde n'est pas alignée avec l'artère : elle est inclinée d'un angle α. **La sonde ne « voit » pas toute la vitesse v.** Elle ne voit que la composante de v qui pointe vers elle , c'est-à-dire la **projection de v sur l'axe de la sonde**. Cette projection vaut, par définition de cos α :

vitesse vue par la sonde = v × cos α

Et c'est ce qui se retrouve dans la formule Doppler médicale, où le décalage Δf est proportionnel à **v × cos α**, pas à v tout seul.

**Conséquence pour le Doppler** :

- Sonde **alignée** avec le flux (α = 0°) → cos α = 1 → la sonde capte 100 % de v → décalage maximal. Mais impossible en clinique (il faudrait poser la sonde dans l'artère).

- Sonde **perpendiculaire** au flux (α = 90°) → cos α = 0 → la sonde capte 0 % de v → **aucun signal**, quelle que soit la vitesse réelle ! Piège classique en P1.

- Sonde **oblique** (α entre 30° et 60°) → cos α entre 0,87 et 0,5 → compromis optimal en clinique.

**On isole v dans la formule :**

v = c × |Δf| / (2 × f × cos α)

**✨ L'astuce de tête** — Comme cos 60° = 1/2, on a **2 × cos 60° = 1**. Toute la fraction au dénominateur s'effondre. La formule se simplifie en :

**v = c × |Δf| / fOn remplace les valeurs** (que des chiffres ronds) :

v = 1 500 × 2 000 / 5 000 000

v = 3 000 000 / 5 000 000 = **3/5v = 0,6 m/s = 60 cm/s**

→ Tout le calcul tient sur un Post-it : **1 500 × 2 000 = 3 millions**, **3 millions / 5 millions = 0,6**. Pas besoin de calculatrice.

**🩺 Interprétation clinique** — 60 cm/s est dans la fourchette normale d'une carotide commune en milieu de cycle (le pic systolique monte à 80-100 cm/s, la diastole tombe à 20-30 cm/s). Si on avait trouvé 250 cm/s avec les mêmes réglages → suspicion de **sténose carotidienne** (rétrécissement qui accélère le flux) → indication d'imagerie complémentaire pour évaluer le risque d'AVC.

💡 Si on avait mesuré Δf positif (par exemple +2 000 Hz) avec la même géométrie, on saurait tout de suite qu'il y a un **flux à contre-courant** — par exemple une régurgitation ou un faux trajet — parce que ça contredirait la direction visible sur l'image.

### 4. Réflexion et transmission aux interfaces — D'où vient l'image échographique

Cette section répond à une question simple : comment, concrètement, naît une image échographique ? Le mécanisme tient en une phrase — chaque fois que l'ultrason rencontre une frontière entre deux tissus différents, une partie rebondit vers la sonde, et cette partie devient un pixel sur l'écran. Tout le reste, ce sont des détails techniques. On y va étape par étape.

Étape 1 — C'est quoi une « interface » ?

En physique, une **interface** est simplement une **frontière entre deux milieux différents**. Ce n'est pas une couche, pas une machine — juste l'endroit précis où ça change. Dans le corps humain, il y a des interfaces partout :

- Peau ↔ graisse sous-cutanée

- Graisse ↔ muscle

- Muscle ↔ os

- Foie (tissu dense) ↔ vésicule biliaire (remplie de liquide)

- Paroi thoracique ↔ poumon (rempli d'air)

À chaque transition, l'ultrason rencontre une « marche » : il passe d'un milieu où il voyageait à une certaine vitesse à un autre où la vitesse change. C'est cette marche qui va déclencher le phénomène qu'on étudie maintenant.

Étape 2 — Que fait l'ultrason quand il rencontre une interface ? Il se sépare en deux

Visualise un ballon qui frappe une vitre. Selon la dureté de la vitre, deux choses se passent **simultanément** : un peu rebondit, et un peu passe à travers. C'est exactement pareil pour l'ultrason à une interface biologique :

- **Une partie est réfléchie** = renvoyée vers la sonde. La sonde la capte. **Ce signal de retour, c'est ce qui forme l'image échographique.**

- **Une partie est transmise** = continue dans le 2ᵉ milieu, plus loin. Elle pourra rebondir sur l'interface suivante, et ainsi de suite.

**🩺 La mécanique de l'image écho en une image**

Tu envoies une seule impulsion d'ultrason avec la sonde. Elle traverse le corps en ligne droite. À chaque interface rencontrée (peau, graisse, muscle, foie, vaisseau…), **un petit pourcentage rebondit** et revient vers la sonde. La sonde reçoit donc une **série d'échos**, chacun avec un délai différent (les échos profonds reviennent plus tard).

Un ordinateur mesure le temps de retour de chaque écho et, connaissant la vitesse du son dans les tissus (c ≈ 1 540 m/s), calcule la **profondeur** de chaque interface. Il dessine alors un **point lumineux** à la bonne profondeur. La collection de tous ces points = l'image échographique que tu vois à l'écran.

Conclusion : **sans réflexion à une interface, pas d'image possible.** Et plus la réflexion est forte, plus le point est lumineux (= blanc) sur l'écran.

Étape 3 — Le « budget énergie » : R + T = 1

Pour quantifier ce partage, on définit deux nombres :

- **R** = coefficient de **R**éflexion = fraction de l'énergie qui rebondit (entre 0 et 1, ou de 0 % à 100 %).

- **T** = coefficient de **T**ransmission = fraction qui passe (entre 0 et 1, ou de 0 % à 100 %).

Et comme l'énergie totale est conservée (rien ne disparaît à une interface) :

**R + T = 1**

Concrètement : si l'interface fait rebondir 20 % de l'énergie (R = 0,2), alors 80 % passe (T = 0,8). C'est un **budget à 100 %** que l'interface distribue entre « rebond » et « passage ».

Étape 4 — De quoi dépend R ? Du contraste d'impédance entre les deux milieux

L'impédance acoustique Z d'un milieu (définie en section IV) mesure à quel point il « résiste » aux vibrations sonores. Z grande = milieu « dur » (os, métal) ; Z petite = milieu « mou » (air, gras).

**⚠️ Piège à éviter — « Si Z est grand, ça rebondit plus, non ? »Non. La valeur absolue de Z ne décide ni de R ni de T.** Ce qui décide, c'est **le contraste entre Z₁ et Z₂** (= leur écart). Même un Z énorme ne fera rien rebondir s'il n'y a pas de contraste avec l'autre côté.

|

| Configuration
| Z₁
| Z₂
| Contraste
| R (rebond)

| Tissu mou → tissu mou
| 1,6·10⁶
| 1,6·10⁶
| 0
| **≈ 0 %**

| Tissu mou → **os**
| 1,6·10⁶
| 7·10⁶
| gros
| **≈ 38 %**

| **Os → os** (deux Z énormes)
| 7·10⁶
| 7·10⁶
| 0
| **≈ 0 %**

| Tissu mou → **air**
| 1,6·10⁶
| 440
| énorme
| **≈ 99,9 %**

Regarde les lignes 1 et 3 : même avec un Z énorme (7·10⁶) des deux côtés, R = 0 ! Aucun contraste → aucun rebond → interface invisible pour l'ultrason.

🧠 **Mémo Medeos** : pour qu'il y ait écho, il faut un changement . Un milieu uniforme, même très dur, est transparent aux ultrasons. C'est le saut entre deux Z qui crée l'image, pas la dureté en soi.

**La règle qu'il faut retenir** : ce qui compte pour le rebond, ce n'est pas la valeur de Z₁ ni celle de Z₂ séparément , c'est **l'écart entre les deux**. Reprends l'analogie du ballon :

- **Ballon qui passe d'un coussin à un autre coussin** (Z₁ ≈ Z₂) → il s'enfonce et continue. Aucun rebond. **L'interface est invisible pour l'ultrason.**

- **Ballon qui frappe un mur en béton après l'air** (Z₁ ≪ Z₂) → il rebondit presque entièrement. **Rien ne passe derrière.**

- **Ballon qui passe d'une éponge à du bois** (Z₁ et Z₂ moyennement différents) → un peu rebondit, beaucoup passe. **Compromis idéal pour faire une image fine et continuer à explorer plus profond.**

Étape 5 — La formule (et pourquoi elle a cette forme)

Comment traduit-on mathématiquement le « contraste entre Z₁ et Z₂ » ? En deux temps :

- On prend la **différence** Z₂ − Z₁ (la « marche » entre les deux milieux).

- On la divise par la **somme** Z₂ + Z₁ (pour la normaliser : on obtient un nombre entre 0 et 1, sans dimension).

Ce qu'on appelle la **différence relative d'impédance** vaut donc (Z₂ − Z₁) / (Z₂ + Z₁) . Cette fraction s'approche de 0 si Z₁ ≈ Z₂ (peu de contraste), et de 1 si Z₂ ≫ Z₁ (énorme contraste).

Dernier étage : on élève cette différence relative **au carré**. Pourquoi ? Parce que R mesure une proportion d'**énergie**, et qu'en physique des ondes, l'énergie est toujours proportionnelle au carré de l'amplitude (règle générale, valable aussi pour les ondes lumineuses, sismiques, électriques…). On a donc la formule :

Coefficients de réflexion R et transmission T (incidence normale)
R = ((Z₂ − Z₁) / (Z₂ + Z₁))² · T = 1 − R = 4·Z₁·Z₂ / (Z₂ + Z₁)²
R et T sont sans unité, entre 0 et 1 (parfois exprimés en pourcentage). « Incidence normale » = l'onde arrive perpendiculaire à l'interface (la formule générale avec angle existe mais est plus complexe — on l'admet).

📝 **Si tu retiens une seule chose** : **R = (écart relatif des impédances)²**. Toute la suite découle de là.

Étape 6 — On vérifie aux extrêmes pour se rassurer

|

| Cas
| (Z₂ − Z₁) / (Z₂ + Z₁)
| R
| T
| Lecture clinique

| **Z₁ = Z₂** (milieux identiques)
| 0
| **0**
| **1**
| Tout passe, rien ne rebondit → aucune image . C'est ce qu'on cherche entre la sonde et la peau (rôle du gel, voir plus bas).

| **Z₁ ≈ Z₂** (tissus mous similaires)
| petit
| faible
| élevé
| Image fine + l'ultrason continue d'explorer en profondeur. Cas idéal en clinique.

| **Z₁ ≪ Z₂** (tissu vs os, ou tissu vs air)
| → 1
| **→ 1**
| **→ 0**
| Quasi-totalité réfléchie → image très blanche à l'interface, mais zone d'ombre noire derrière (l'onde ne pénètre pas).

Application numérique — Interface air/peau sans gel

C'est le cas pratique qui explique pourquoi le gel échographique existe. On a deux impédances très différentes :

- **Z_air ≈ 440** kg·m⁻²·s⁻¹ (l'air est très « mou » acoustiquement)

- **Z_tissu ≈ 1,6 × 10⁶** kg·m⁻²·s⁻¹ (les tissus mous sont ~3 500 fois plus « durs »)

L'écart est tellement énorme que Z₂ − Z₁ ≈ Z₂ et Z₂ + Z₁ ≈ Z₂ (Z_air est négligeable devant Z_tissu). La fraction se simplifie en Z₂/Z₂ = 1 , et donc :

R ≈ 1² = **0,999** (= 99,9 %)

T ≈ 1 − 0,999 = **0,001** (= 0,1 %)

Autrement dit : **99,9 % de l'ultrason rebondit** sur la fine couche d'air entre la sonde et la peau. Seulement 0,1 % pénètre dans le corps. C'est beaucoup trop peu pour fabriquer une image utile. D'où l'invention du gel échographique :

Le **gel échographique** a la même impédance que la peau (Z ≈ 1,5 × 10⁶). Posé entre la sonde et la peau, il **élimine la couche d'air** : R passe de 0,999 (sans gel) à ≈ 0 (avec gel). Quasiment tout l'ultrason pénètre.

**Conséquences cliniques** :

- **Air = invisible.** Pas d'écho du poumon (parenchyme = tissu pulmonaire fonctionnel) ni des intestins distendus → on bascule sur radio ou scanner.

- **Os = bloque tout.** Pas d'écho du cerveau adulte (crâne) — sauf chez le nouveau-né tant que la fontanelle (zone molle non ossifiée) reste ouverte.

- **Tissus mous = parfait.** Foie, rein, vessie, vaisseaux : Z proches → R faible → image nette et exploration profonde.

### 5. L'absorption — Pourquoi l'onde s'affaiblit en profondeur

Même si l'onde ne rencontre aucune interface , elle ne se propage pas indéfiniment sans perdre d'énergie. À chaque mètre parcouru dans un milieu, une **petite fraction de l'énergie acoustique se transforme en chaleur** (à cause des frottements internes entre molécules — la viscosité du milieu). C'est l'**absorption**.

**Comment cette perte se modélise mathématiquement ?** L'idée est simple : à chaque petit pas de distance, l'onde perd un pourcentage fixe de ce qu'il lui reste (par exemple, elle perd 10 % par cm). Ce type de décroissance « par pourcentage constant » donne mathématiquement une **exponentielle décroissante** — la même qui décrit la radioactivité ou le refroidissement d'un objet chaud.

Absorption d'une onde acoustique
Amplitude : x(y) = x₀ × e^(−α·y)

Intensité : W(y) = W₀ × e^(−2α·y)
x(y) = amplitude à la distance y (m) · x₀ = amplitude initiale · α = coefficient d'absorption du milieu (m⁻¹, mesure « la vitesse » à laquelle l'onde s'affaiblit) · e = constante mathématique fixe ≈ 2,72 (comme π ≈ 3,14).

**📐 Pas de panique avec le « e » de la formule**

e ≈ 2,72 est juste une **constante mathématique fixe**, comme π ≈ 3,14. En P1 (pas de calculatrice), **la valeur de e^(−α·y) te sera donnée dans l'énoncé**. Tu n'as ni à calculer cette expression, ni à mémoriser les valeurs de l'exponentielle.

**Ce qu'il faut savoir lire**, c'est la formule de façon qualitative :

- À **y = 0** (sortie de la sonde) → e⁰ = 1 → x(0) = x₀ → rien d'absorbé. ✓

- Quand **y augmente** → l'exposant devient de plus en plus négatif → e^(...) tend vers 0 → l'onde s'éteint progressivement.

- Plus **α est grand** (milieu très absorbant, comme l'os) → l'onde s'éteint vite. Plus α est petit (eau, sang) → l'onde voyage loin.

👉 **Pourquoi un facteur 2 dans l'exponentielle pour W mais pas pour x ?** Rappel de la section IV : l'intensité W est **proportionnelle au carré de l'amplitude** (W ∝ x₀²). Donc si l'amplitude décroît en e^(−αy), l'intensité décroît en (e^(−αy))² = e^(−2αy). C'est une simple conséquence de la mise au carré.

👉 **Vérification des cas limites** :

- À **y = 0** (au départ) : e⁰ = 1 → x(0) = x₀ et W(0) = W₀ ✓ (l'onde n'a rien perdu)

- À **y grand** (très loin) : e^(−grand nombre) → 0 → x et W tendent vers 0 (l'onde s'est complètement dissipée)

**Le point crucial** : le coefficient α dépend de **2 choses** :

- La **viscosité du milieu** traversé (les liquides visqueux absorbent plus)

- Et surtout la **fréquence f de l'onde** : **α augmente avec f**. Plus on monte en fréquence, plus l'onde est rapidement absorbée par les tissus.

Cette deuxième dépendance (α ↗ avec f ↗) a une **conséquence majeure** sur le choix des sondes en échographie :

**🔑 Le compromis fréquence / profondeur en échographie**

- **Haute fréquence** (10-15 MHz, sondes superficielles) → λ petite → **bonne résolution spatiale** (on voit des détails fins), MAIS α grand → faible pénétration → on n'explore que les premiers cm.

- **Basse fréquence** (2-3,5 MHz, sondes profondes) → λ grande → résolution moins fine, MAIS α petit → **grande profondeur d'exploration** (jusqu'à 20-25 cm).

Choisir la fréquence d'une sonde, c'est arbitrer entre voir loin et voir précis. C'est pour cela que l'opérateur a plusieurs sondes : une linéaire haute fréquence pour les vaisseaux superficiels et la thyroïde, une convexe basse fréquence pour l'abdomen et l'obstétrique, une endo-cavitaire ultra-fréquence pour le pelvis pelvien par voie vaginale.

### 6. L'effet piézoélectrique — Comment la sonde fait tout

La sonde contient des cristaux qui ont une propriété double, dite **effet piézoélectrique** :

- **Émission** — on leur applique une tension électrique → ils vibrent → ils émettent l'ultrason.

- **Réception** — l'écho de retour les fait vibrer → ils génèrent une tension électrique → l'appareil lit le signal.

La sonde alterne ces deux modes à très haute cadence. Le **délai Δt** entre une émission et le retour de son écho donne la **profondeur** de l'interface qui a réfléchi l'onde.

**⚠️ Piège ⭐⭐⭐ — Facteur 2 aller-retour**

L'ultrason parcourt **deux fois** la distance sonde ↔ interface (aller + retour). D'où le facteur 2 dans la formule :

Profondeur d'une interface en échographie
y = c · Δt / **2**
y = profondeur (m) · Δt = délai aller-retour (s) · c ≈ 1 540 m/s.

🧠 **Mémo** : chaque fois qu'une onde « rebondit pour revenir » (écho, Doppler) → facteur 2 automatique. Oublier le 2 = profondeur deux fois trop grande.

👉 **En résumé clinique** — L'**échographie** est l'imagerie n°1 (non invasive, sans irradiation, en temps réel), utilisée pour fœtus, cœur, foie, reins, thyroïde, vaisseaux. Le **Doppler**, lui, mesure la vitesse du sang (sténoses, phlébites, suivi fœtal).

**🧪 Mini-exercice 1 — Calcul d'une vitesse en DopplerÉnoncé** — Un médecin pose une sonde Doppler à 5 MHz sur l'artère carotide, avec un angle α = 60° par rapport au flux. La sonde mesure un décalage Δf = f' − f = **−3 000 Hz**. Quelle est la vitesse du sang ?

Données : c = 1 540 m/s · cos 60° = 1/2 = 0,5

👁️ Voir la correction

**Étape 1 — Ce qu'on cherche, ce qu'on a**

- Inconnue : **v** (la vitesse du sang)

- Connues : f = 5·10⁶ Hz, Δf = −3 000 Hz, α = 60° (cos α = 0,5), c = 1 540 m/s

**Étape 2 — Partir de la formule Doppler médicale**

(f' − f) / f = −2 · v · cos α / c

**Étape 3 — Isoler v** (= ce qu'on cherche)

v = − (f' − f) · c / (2 · f · cos α)

**Étape 4 — L'astuce de simplification** (à α = 60°)

Comme cos 60° = 1/2, on a **2 · cos α = 1**. La formule se réduit à :

v = − (f' − f) · c / f = |Δf| · c / f

**Étape 5 — On remplace les valeurs**

v = 3 000 × 1 540 / (5·10⁶)

v = 4,62·10⁶ / 5·10⁶

**v ≈ 0,92 m/s = 92 cm/s🩺 Lecture clinique**

92 cm/s est dans la **fourchette normale** d'une carotide commune en pic systolique (50-100 cm/s). Si on mesurait 200-300 cm/s avec les mêmes réglages → suspicion de **sténose** (rétrécissement athéromateux qui accélère le flux) → imagerie complémentaire pour évaluer le risque d'AVC.

**🧪 Mini-exercice 2 ⭐⭐⭐ — Inversion : on connaît R, on cherche le rapport Z₂/Z₁Énoncé** — En QCM, on inverse souvent le calcul classique : on te donne **R = 0,25** (= 25 % de l'onde réfléchie à l'interface), et on te demande le rapport **Z₂/Z₁**.

👁️ Voir la correction

**Étape 1 — Écrire la formule**

R = ((Z₂ − Z₁) / (Z₂ + Z₁))² = 0,25

**Étape 2 — Prendre la racine carrée des deux côtés**

(Z₂ − Z₁) / (Z₂ + Z₁) = ± √0,25 = **± 0,5**

⚠️ **Piège n°1 du QCM** — Quand on prend la racine carrée, il y a TOUJOURS deux solutions (positive et négative). Oublier le « − » = perdre la moitié des réponses.

**Étape 3 — Résoudre les 2 cas séparémentCas A — solution + 0,5** (Z₂ plus « dur » que Z₁)

Z₂ − Z₁ = 0,5 · (Z₂ + Z₁)

Z₂ − Z₁ = 0,5·Z₂ + 0,5·Z₁

Z₂ − 0,5·Z₂ = Z₁ + 0,5·Z₁

0,5·Z₂ = 1,5·Z₁ → **Z₂ = 3·Z₁Cas B — solution − 0,5** (Z₂ plus « mou » que Z₁)

Z₂ − Z₁ = − 0,5 · (Z₂ + Z₁)

Z₂ − Z₁ = − 0,5·Z₂ − 0,5·Z₁

Z₂ + 0,5·Z₂ = Z₁ − 0,5·Z₁

1,5·Z₂ = 0,5·Z₁ → **Z₂ = Z₁ / 3Deux solutions valides** : Z₂ = 3·Z₁ **ou** Z₂ = Z₁/3.

**Pourquoi physiquement ?**

R est un carré , donc il ne distingue pas le sens de la marche : tu peux aller du milieu 1 vers le milieu 2 (Z₂ = 3·Z₁) ou du milieu 2 vers le milieu 1 (Z₂ = Z₁/3), tu obtiens le même pourcentage de rebond. Le rebond ne dépend que de l' écart entre les deux Z, pas de qui est le plus dur.

**🧪 Mini-exercice 3 — Pourquoi le gel d'échographie est indispensableÉnoncé** — Calcule le coefficient de réflexion R à l'interface **air ↔ peau**, sans gel. Que se passe-t-il pour l'image ?

Données : Z_air = 440 kg·m⁻²·s⁻¹ · Z_tissu = 1,6 × 10⁶ kg·m⁻²·s⁻¹

👁️ Voir la correction

**Étape 1 — Comparer les ordres de grandeur**

Z_tissu / Z_air = 1,6·10⁶ / 440 ≈ **3 600**. Z_tissu est ~3 600 fois plus grand que Z_air. Z_air est négligeable devant Z_tissu .

**Étape 2 — Simplifier la formule**

On part de R = ((Z₂ − Z₁) / (Z₂ + Z₁))² avec Z₁ = Z_air ≈ 0 (négligeable) et Z₂ = Z_tissu.

- Numérateur : Z₂ − Z₁ ≈ Z₂ − 0 = **Z₂**

- Dénominateur : Z₂ + Z₁ ≈ Z₂ + 0 = **Z₂**

R ≈ (Z₂ / Z₂)² = 1² = 1

**Étape 3 — ConclureR ≈ 1, soit ≈ 99,9 % de l'ultrason rebondit** sur la couche d'air. Seulement 0,1 % entre dans le corps.

**🩺 Conséquence clinique — pourquoi le gel**

Sans gel, l'image est impossible : presque rien ne pénètre. Le **gel échographique** a une impédance Z ≈ 1,5·10⁶ (= celle de la peau). Il **élimine la couche d'air** entre la sonde et la peau, ce qui fait passer R de 99,9 % à quasi 0 %. L'ultrason peut alors entrer librement et créer une image nette.

## 🎓 Ce que tu emportes de ce chapitre

Tu viens de boucler un gros morceau du programme physique : avec les ch.1 à ch.4, tu as la mole, les concentrations, l'osmolarité (ch.1) ; le pH et les tampons (ch.2) ; l'électroneutralité, Donnan et les œdèmes (ch.3) ; et maintenant Fick, l'osmose, le transport membranaire, les ondes acoustiques et l'échographie (ch.4). Concrètement, tu as déjà couvert la **moitié des QCM** qui tombent en première année santé sur le module solutions/membranes/imagerie.

Le ch.4 est probablement le plus polyvalent du programme : tu y as croisé **la respiration** (diffusion alvéolaire), **la perfusion intraveineuse** (sérum physiologique, osmolarité, tonicité), **la dialyse rénale** (filtration glomérulaire, clairance), **la pharmacologie** (Michaëlis-Menten pour les transporteurs), et **l'imagerie médicale par ultrasons** (échographie, Doppler). C'est rare qu'un seul chapitre serve à autant de spécialités cliniques différentes — d'où sa rentabilité.

Tu pars aussi avec un réflexe-clé pour toute la suite du programme d'imagerie médicale : quelle que soit la technique (échographie, radio, scintigraphie, IRM), c'est toujours une onde qui traverse un milieu, qui se réfléchit, qui est absorbée, et dont on reconstruit un signal . La même grammaire, des fréquences différentes. Cette base est posée.

×

medeos-sante.fr