Chapitre 4 : Aspects physiques des membranes & ondes acoustiques - MEDEOS — Partie 1

Chapitre 4 — Partie 1

# Aspects physiques des membranes & ondes acoustiques

Diffusion, osmose, dialyse et échographie — comment la matière et l'information traversent (ou pas) un milieu biologique.

## 🎯 Pourquoi ce chapitre tient en deux mots : « passer » ou « ne pas passer »

À chaque inspiration que tu prends, l'oxygène que tu respires doit **traverser la membrane alvéolaire** pour rejoindre tes globules rouges. C'est de la diffusion, et ça obéit à une seule loi : la loi de Fick. À chaque heure d'hémodialyse d'un patient en insuffisance rénale, des litres d'urée doivent **traverser une membrane semi-perméable** sans que les protéines ne suivent. C'est de la dialyse, et c'est la même loi. Quand un médecin pose une **sonde d'échographie** sur le ventre d'une femme enceinte, des ultrasons traversent les tissus, se réfléchissent sur le fœtus, et reviennent porteurs d'une image. C'est de la physique des ondes mécaniques, et c'est encore la même histoire : qu'est-ce qui passe, qu'est-ce qui est arrêté, et avec quelle vitesse ?

Ce chapitre relie deux grandes histoires de la physique médicale qui semblent éloignées : **le passage de la matière à travers une membrane** (diffusion, osmose, dialyse, filtration rénale) et **le passage d'une onde acoustique à travers un tissu** (échographie, Doppler vasculaire). En réalité, ce sont les mêmes principes : un gradient, une résistance, une interface, et un signal qui en émerge. Tu vas voir, ce n'est pas plus difficile que ça — et à la fin, tu comprendras pourquoi une sonde écho a besoin de gel, pourquoi un globule rouge éclate dans l'eau pure, et comment un rein « nettoie » 120 mL de plasma par minute.

🎯 **À la fin de ce chapitre, tu sauras :**

- Appliquer la **loi de Fick** à la diffusion d'un gaz à travers la membrane alvéolaire

- Calculer une **pression osmotique** avec van't Hoff (π = ω·R·T) et prédire le sort d'un globule rouge dans une solution

- Expliquer comment les reins filtrent 120 mL de plasma par minute grâce à un équilibre entre pression hydrostatique et pression oncotique

- Manipuler les grandeurs d'une onde acoustique (célérité, fréquence, longueur d'onde, intensité en dB)

- Décoder la **formule Doppler aller-retour** (f'−f)/f = −2·v·cosα/c et l'appliquer à la mesure d'une vitesse sanguine

- Comprendre pourquoi l'**échographie** a besoin de gel, marche mal sur les poumons, et impose un compromis fréquence/profondeur

**📚 Ce que tu vas apprendre ici** — Ce chapitre couvre 4 grands thèmes connectés à la clinique : **diffusion** → respiration et dialyse rénale ; **osmose** → perfusions et œdèmes ; **ondes acoustiques** → stéthoscope et échographie ; **effet Doppler** → mesure de la vitesse du sang dans les artères. Quel que soit ton bagage de Terminale, tout est repris à la base : on définit chaque notion avant de l'utiliser.

## I. Diffusion et loi de Fick

La diffusion, c'est le mouvement spontané de la matière du « beaucoup » vers le « moins ». C'est ce qui fait passer l'oxygène de l'air alvéolaire au sang, c'est ce qui nettoie le plasma d'un patient en dialyse, c'est ce qui dilue une goutte d'encre dans un verre d'eau. Tout est gouverné par une seule formule, qu'on doit au physiologiste allemand Adolf Fick (1855).

### 1. 🤔 Le problème — L'oxygène que tu inspires, comment passe-t-il dans le sang ?

À chaque inspiration, tu fais entrer ~500 mL d'air dans tes poumons. Cet air, riche en oxygène (**PO₂** alvéolaire ≈ 100 mmHg — la PO₂ est la pression partielle en O₂ , c'est-à-dire la fraction de la pression totale du gaz qui est due à l'O₂ seul ; elle se mesure en mmHg en médecine), arrive au contact de tes capillaires pulmonaires (les petits vaisseaux sanguins qui tapissent les alvéoles), qui sont pauvres en O₂ (le sang veineux ramène du sang à PO₂ ≈ 40 mmHg). Entre les deux : une membrane alvéolaire d'épaisseur 0,5 µm (un peu plus de 1/2000 mm). Question : **qu'est-ce qui pousse l'O₂ à traverser cette membrane ?** Aucun moteur biologique, aucune pompe consommant de l'énergie (= aucun « moteur cellulaire » qui brûle de l'ATP, la molécule-carburant des cellules — on y reviendra section III) : juste un gradient de concentration. Et c'est largement suffisant.

[FIGURE physique_ch4_fig00_inspiration_alveole_capillaire.png]

Une inspiration injecte ~500 mL d'air à PO₂ = 100 mmHg dans l'alvéole. Le sang veineux qui passe au contact n'a que 40 mmHg de PO₂. Le gradient de 60 mmHg suffit à faire diffuser l'O₂ à travers la membrane de 0,5 µm — sans aucun apport d'énergie cellulaire.

**⚠️ Confusion à éviter — Fick (ici) ≠ Donnan (ch.3)**

Tu pourrais te dire « la membrane alvéolaire, c'est comme la membrane capillaire du ch.3 → c'est l'effet Donnan ». **Non**, ce sont deux mécanismes différents :

- **Donnan** (ch.3) : ions chargés + un soluté non diffusible (les protéinates) → redistribution inégale à l' équilibre + potentiel électrique.

- **Fick** (ici) : n'importe quelle molécule (même neutre, comme l'O₂) → flux net tant qu'il y a un gradient, pas d'équilibre, pas de potentiel électrique.

L'O₂ est neutre → Donnan ne peut pas s'y appliquer. C'est juste Fick.

### 2. Le mouvement brownien et le gradient de concentration

À l'échelle moléculaire, chaque molécule s'agite en permanence dans toutes les directions — c'est le **mouvement brownien**, conséquence de la température (les molécules ont une énergie cinétique d'autant plus grande que T est élevée). Si tu ouvres un flacon de parfum dans un coin d'une pièce, les molécules de parfum vont se cogner aux molécules d'air, rebondir dans des directions aléatoires, mais statistiquement elles iront du coin riche (le flacon) vers le coin pauvre (le reste de la pièce). Ce déplacement net, c'est la **diffusion**.

**🔑 La diffusion en une phrase**

La **diffusion** est le déplacement net spontané des molécules d'une zone de forte concentration vers une zone de faible concentration , sous l'effet du mouvement brownien (agitation thermique). Aucune énergie n'est consommée par la cellule : c'est un transport **passif**, gouverné uniquement par le gradient.

### 3. La loi de Fick

Maintenant qu'on a l'intuition (« ça diffuse spontanément du plein vers le vide »), on veut quantifier . Question simple : **combien de molécules d'O₂ traversent réellement la membrane alvéolaire par seconde ?** Pour répondre, on va construire la formule morceau par morceau , en se demandant : « qu'est-ce qui doit logiquement augmenter ou diminuer ce flux ? ». Tu vas voir, elle tombe toute seule.

**1ʳᵉ brique — la surface S de la membrane.** Si la membrane est 2× plus grande, 2× plus de molécules peuvent passer en même temps. Le flux est donc proportionnel à S .

**2ᵉ brique — l'épaisseur e de la membrane.** Si la membrane est 2× plus épaisse, les molécules mettent 2× plus de temps à la traverser. Le flux est donc inversement proportionnel à e .

**3ᵉ brique — la différence de concentration |C₁ − C₂|.** S'il y a 100 fois plus de molécules d'un côté que de l'autre, ça « pousse » 100 fois plus fort. Le flux est donc proportionnel à l'écart de concentration entre les deux côtés , qu'on note **|C₁ − C₂|** (les barres droites « | … | » signifient valeur absolue : on prend toujours le résultat **positif**, peu importe lequel des deux côtés est le plus concentré).

**🔑 Rappel express — la valeur absolue, c'est quoi ?**

La **valeur absolue** d'un nombre, c'est simplement sa version positive — on enlève le signe « − » s'il y en a un. On la note avec deux barres droites **| x |**. Exemples :

- |3| = 3

- |−7| = 7

- |0| = 0

Concrètement, |C₁ − C₂| veut juste dire : l'écart entre les deux concentrations, compté en positif . Si C₁ = 100 et C₂ = 40, alors |C₁ − C₂| = |100 − 40| = 60. Et si tu inverses l'ordre, |C₂ − C₁| = |40 − 100| = |−60| = 60. **Même résultat dans les deux sens** — c'est tout l'intérêt de la valeur absolue.

👉 On l'utilise ici parce qu'un flux est une grandeur qu'on exprime toujours en positif (« il passe X molécules par seconde »). Le sens du flux, lui, est imposé séparément par la physique (du concentré vers le dilué — voir la phrase juste après la formule).

**4ᵉ brique — le coefficient D propre à la molécule.** Toutes les molécules ne diffusent pas à la même vitesse dans le même milieu : l'O₂ diffuse plus vite que le glucose, et tout diffuse plus vite dans l'eau que dans le miel. On rassemble cette propriété intrinsèque dans un seul nombre, le **coefficient de diffusion D**, propre au couple molécule/milieu.

On assemble : un flux Φ proportionnel à D, à S, à |C₁ − C₂|, et inversement proportionnel à e. C'est exactement la **loi de Fick appliquée à une membrane** :

Loi de Fick — version biologique (membrane d'épaisseur e)
Φ = (D × S / e) × |C₁ − C₂|
Φ = quantité de matière qui traverse par seconde (mol/s) · D = coefficient de diffusion (m²/s) · S = surface d'échange (m²) · e = épaisseur de la membrane (m) · |C₁ − C₂| = écart de concentration en valeur absolue (mol/m³).

👉 **Cette version est celle qu'on utilise en physiologie** (poumons, dialyse, intestin). Elle te donne trois leviers naturels pour augmenter un flux diffusif : **une plus grande surface S**, **une membrane plus fine e**, ou **un gradient plus marqué |C₁ − C₂|**. La physiologie a optimisé ces trois leviers à l'extrême — c'est tout l'objet de l'application clinique qui suit.

**💡 Pour info — la version « originale » de Fick (1855), avec une notation mathématique différente**

La formule de Fick s'écrit aussi, dans les manuels de physique, sous cette forme un peu impressionnante :

Loi de Fick — forme générale
J = −D × (dC/dx)

Pas de panique, c'est la **même physique** que ce qu'on vient de construire. Juste avec une notation que tu ne connais pas encore — décortiquons-la :

- **J** = le flux par mètre carré de membrane (en mol/m²/s), au lieu du flux total Φ.

- **dC/dx** = ça veut juste dire « la pente de la concentration » . Imagine une route qui descend d'une colline : la pente te dit de combien tu descends quand tu avances d'un mètre. Ici c'est pareil : dC/dx te dit « de combien la concentration change quand on avance d'un tout petit pas dans l'espace » . Plus la pente est raide, plus la diffusion est rapide — exactement comme dans notre version biologique où on disait « si |C₁ − C₂| est grand sur une faible épaisseur e, ça diffuse vite ». dC/dx est juste une façon plus précise d'écrire (C₁ − C₂)/e.

- **Le signe « − »** dit juste : « le flux va dans le sens où la concentration diminue » — autrement dit, la matière descend le gradient. Pas plus compliqué que ça.

👉 **En P1, tu n'auras pas à manipuler dC/dx**. On travaillera toujours avec la version biologique Φ = D·S/e·|C₁−C₂| . Mais c'est rassurant de savoir que la « formule officielle » de tes manuels de physique veut juste dire la même chose, écrite autrement.

### 4. Le coefficient de diffusion D — Ce qui le détermine

Le coefficient D dépend de la nature de la molécule qui diffuse et du milieu dans lequel elle diffuse. Les règles utiles à retenir :

- **D augmente quand la température augmente** (plus d'agitation thermique → plus de chocs → diffusion plus rapide)

- **D diminue quand la taille de la molécule augmente** (une grosse molécule traîne plus difficilement dans le solvant)

- **D diminue quand la viscosité du solvant augmente** (un sirop, c'est très visqueux ; il « freine » les molécules qui essayent d'y diffuser)

- L'équation théorique **D = k_B·T / (6π·η·r)** (relation de Stokes-Einstein) résume ces 3 dépendances, mais elle n'est pas à retenir par cœur. Connaître les variations qualitatives suffit.

### 5. Application clinique — La diffusion alvéolo-capillaire de l'O₂

[FIGURE physique_ch4_fig01_trois_leviers_fick.png]

Les 3 leviers de la loi de Fick que le poumon a poussés au maximum : surface géante (~ terrain de tennis), membrane ultra-fine (0,5 µm), gradient marqué (60 mmHg).

La capacité du poumon à faire diffuser l'O₂ vers le sang est si critique qu'on la mesure en routine en pneumologie (la médecine des poumons) : c'est la **DLCO** (capacité de diffusion pulmonaire du monoxyde de carbone — on souffle un peu de CO et on regarde combien passe dans le sang ; le CO est utilisé comme « traceur » de la diffusion). Une DLCO diminuée signe une altération de la diffusion alvéolo-capillaire et oriente vers :

- **Emphysème** (destruction progressive des alvéoles, typique du gros fumeur) : la surface d'échange S diminue → flux Φ diminue

- **Fibrose pulmonaire** (les parois alvéolaires se rigidifient et s'épaississent) : épaisseur e augmente → Φ diminue

- **Œdème pulmonaire** (du liquide s'accumule dans les alvéoles, vu au ch.3) : ce liquide s'interpose entre l'air et le sang → e augmente fortement → Φ s'effondre → **hypoxie** sévère (= manque d'O₂ dans les tissus)

- **Embolie pulmonaire** (un caillot bouche une artère pulmonaire) : certaines zones du poumon ne reçoivent plus de sang → la surface S réellement utilisée pour l'échange diminue

À l'inverse, l'organisme adapte ces 3 paramètres à la demande : à l'effort, le débit cardiaque (volume de sang pompé par minute, ≈ 5 L/min au repos) augmente, plus de capillaires sont recrutés → S augmente, le gradient O₂ augmente aussi → Φ peut être multiplié par 10. C'est Fick qui orchestre toute la respiration.

**🧪 Mini-exercice — Comparer deux situations cliniquesÉnoncé :** Un patient sain a une membrane alvéolo-capillaire de e₁ = 0,5 µm et un gradient de PO₂ de 60 mmHg. Un patient atteint de fibrose pulmonaire a une membrane épaissie à e₂ = 2 µm avec un gradient identique. Toutes choses égales par ailleurs (même surface S, même coefficient D), de quel facteur le flux d'O₂ vers le sang est-il divisé chez le patient fibrosé ?

👁️ Voir la correction

**Correction :**

D'après la loi de Fick intégrée : Φ = (D·S/e)·ΔC. Comme D, S et ΔC sont identiques entre les deux patients, le rapport des flux ne dépend que de e :

Φ₁ / Φ₂ = e₂ / e₁ = 2 / 0,5 = **4**

Le flux d'O₂ vers le sang est **divisé par 4** chez le patient fibrosé. Cela explique pourquoi ces patients sont essoufflés à l'effort : la diffusion alvéolaire devient le facteur limitant et l'organisme ne peut plus suivre la demande métabolique en O₂.

**🧪 Mini-exercice — Le flux d'O₂ vers le sang dans 3 situations différentesÉnoncé :** Dans chacune des 3 situations ci-dessous, dis si le flux d'O₂ qui passe des alvéoles vers le sang **augmente, diminue ou reste constant**, et explique pourquoi (quel paramètre est affecté).

- **(a) Tu es au sommet du Mont Blanc (altitude 4 800 m)** — l'air y est plus « pauvre » : la pression atmosphérique chute, donc la quantité d'O₂ dans l'air que tu respires diminue (la PO₂ alvéolaire passe de ~100 mmHg à ~55 mmHg). La PO₂ du sang veineux qui arrive aux poumons, elle, reste à 40 mmHg.

- **(b) Aux urgences, on te met un masque qui délivre de l'oxygène pur à 100 %** — au lieu de respirer l'air ambiant (qui ne contient que 21 % d'O₂), tu respires de l'O₂ pur. La PO₂ alvéolaire grimpe alors à ~700 mmHg.

- **(c) Un patient arrive en hypothermie sévère après être tombé dans une rivière glacée** — sa température corporelle est descendue à 28 °C au lieu des 37 °C habituels.

👁️ Voir la correction

**Correction :(a) Haute altitude** : la pression atmosphérique chute, donc la PO₂ alvéolaire chute (55 mmHg au Mont Blanc au lieu de 100 au niveau de la mer). Le gradient ΔP = PO₂ alvéolaire − PO₂ sang veineux passe alors de (100 − 40) = **60 mmHg** à (55 − 40) = **15 mmHg**, soit divisé par 4. Le flux Φ est donc lui aussi divisé par 4 → **Φ diminue fortement**. C'est l'origine du mal des montagnes : moins d'O₂ qui passe dans le sang à chaque inspiration, fatigue, essoufflement, maux de tête.

**(b) Oxygène pur** : la PO₂ alvéolaire monte à ~700 mmHg au lieu de 100 → gradient énorme → **Φ augmente fortement**. C'est le principe de l'oxygénothérapie chez les patients hypoxémiques.

**(c) Hypothermie** (baisse anormale de la température corporelle) : D diminue avec T (relation de Stokes-Einstein) → **Φ diminue**. Mais l'effet principal est ailleurs : la consommation d'O₂ tissulaire diminue aussi, et l'organisme compense.

×

medeos-sante.fr