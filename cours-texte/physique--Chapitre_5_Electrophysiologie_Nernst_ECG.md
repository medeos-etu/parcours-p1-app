Chapitre 5 : Électrophysiologie, transport épithélial & ECG - MEDEOS

Chapitre 5

# Électrophysiologie, transport épithélial & ECG

Du potentiel transmembranaire à la lecture d'un ECG normal en une minute — la physique qui fait battre le cœur.

## 🎯 Pourquoi ce chapitre est un des plus rentables de l'année

Pose ta main sur ton cœur. Tu sens un battement régulier, ~70 fois par minute, 100 000 fois par jour, 3 milliards de fois sur une vie. À chaque battement, des **millions de cellules cardiaques se dépolarisent en cascade**, créent un champ électrique qui traverse tout ton corps, et déclenchent la contraction synchronisée du muscle. Ce signal électrique, on peut le capter à la surface de ta peau avec quelques électrodes — c'est l'**électrocardiogramme**. Et tout part d'une seule grandeur physique : **la différence de potentiel entre l'intérieur et l'extérieur d'une cellule**, autrement dit le **potentiel transmembranaire**.

Ce chapitre raconte une seule histoire, étalée sur quatre échelles : la **cellule isolée** (qui maintient un potentiel de −70 mV grâce à des gradients d'ions), le **potentiel d'action** (qui voyage le long d'un nerf à 100 m/s), le **tissu épithélial** (où des pompes consomment de l'ATP pour transporter Na⁺, glucose et eau du tube digestif vers le sang), et enfin l'**organe entier** (le cœur, dont l'activité électrique se lit sur un ECG). Une seule logique, quatre échelles. Et un outil mathématique nouveau pour le passage à l'ECG : les **vecteurs en 2D**, qu'on installera d'abord proprement avant d'en avoir besoin.

🎯 **À la fin de ce chapitre, tu sauras :**

- Manipuler un **vecteur en 2D** : norme, direction, somme graphique, projection sur un axe

- Appliquer l'**équation de Nernst** pour calculer le potentiel d'équilibre d'un ion (K⁺ → −90 mV, Na⁺ → +60 mV à 37 °C)

- Décrire les 4 phases du **potentiel d'action** (repos, dépolarisation, repolarisation, période réfractaire)

- Expliquer le rôle de la **pompe Na⁺/K⁺-ATPase** et pourquoi elle consomme près de 30 % de l'énergie d'une cellule au repos

- Décoder le principe du **SRO** (soluté de réhydratation orale) — pourquoi un peu de sucre fait passer le sel et l'eau

- Lire un **ECG normal** en 1 minute : rythme, fréquence, axe, ondes P, complexe QRS, onde T

**📚 Ce que tu sais déjà** — Au ch.3, tu as vu l'**effet Donnan** et son potentiel U_d = (60/Z)·log(C₁/C₂) : c'est exactement le grand frère de l'équation de Nernst qu'on va voir ici. Au ch.4, tu as croisé l'**osmose**, la **diffusion** et l'intro du **transport actif** — on les ramène ici en application directe. En SVT de Terminale, tu as déjà rencontré la **cellule excitable** (neurone, fibre musculaire) et la notion de potentiel d'action. En physique, tu as vu les **vecteurs** (force, vitesse) — on les redéploie ici pour comprendre l'ECG. **Aucun prérequis qui ne soit pas déjà couvert.**

## I. Mini-outil maths — Les vecteurs 2D

Avant d'attaquer l'ECG en fin de chapitre, on installe l'outil qui en est la clé : le **vecteur 2D**. Promesse : c'est plus simple qu'il n'y paraît. Une flèche, une longueur, une direction — et tu vas voir, c'est tout ce dont on a besoin pour comprendre pourquoi un même cœur donne 12 tracés différents sur un ECG selon l'angle d'observation.

### 1. 🤔 Le problème — Pourquoi une « flèche » ?

Quand on dit qu'un avion vole à 900 km/h , on donne une **vitesse**. C'est un nombre, une grandeur. Mais cette information est incomplète : il manque la **direction**. 900 km/h vers le Nord et 900 km/h vers le Sud, ce n'est pas la même chose — surtout pour le pilote. Pareil pour une **force** : pousser un meuble vers la droite avec 100 N ou le pousser vers le haut avec 100 N donne deux résultats différents. Pareil pour un **champ électrique**, un **champ magnétique**, et — c'est le sujet du jour — pour le **vecteur électrique cardiaque**.

Les physiciens ont donc inventé un objet mathématique qui contient à la fois une grandeur et une direction : c'est le **vecteur**. On le représente par une flèche.

### 2. Représentation : norme, direction, sens

**🔑 Un vecteur = 3 informations**

- **Norme** (ou « longueur ») : combien ? — c'est un nombre positif, noté ||v⃗|| ou simplement v. Pour une vitesse, c'est en m/s ; pour une force, en newtons ; pour un vecteur cardiaque, en millivolts.

- **Direction** : selon quelle droite ? — horizontale, verticale, oblique, etc. On la donne souvent par un angle par rapport à un axe de référence (l'axe horizontal Ox par défaut).

- **Sens** : dans quel côté de la droite on va ? — vers la droite ou vers la gauche, vers le haut ou vers le bas. La flèche pointe dans le sens.

On note un vecteur avec une flèche au-dessus du nom : **v⃗**, **F⃗**, **E⃗**. Quand on parle uniquement de sa norme, on enlève la flèche : v , F , E .

[FIGURE physique_ch5_fig01_vecteur_definition.png]

**Figure 1** — Un vecteur 2D se définit par une norme, une direction (angle θ) et un sens (où pointe la flèche).

### 3. Somme de deux vecteurs — La méthode graphique

Si deux forces s'exercent en même temps sur un même objet, l'effet total est la **somme vectorielle** des deux forces. Pareil si deux courants électriques s'additionnent dans la même région d'un tissu. Comment additionner deux flèches ? La méthode graphique la plus simple est dite **du parallélogramme** :

- On dessine les deux vecteurs v⃗₁ et v⃗₂ avec la **même origine**.

- On complète le parallélogramme : à partir de l'extrémité de v⃗₁, on trace une parallèle à v⃗₂ ; à partir de l'extrémité de v⃗₂, une parallèle à v⃗₁.

- La **diagonale** issue de l'origine, jusqu'au sommet opposé du parallélogramme, est le vecteur somme v⃗ = v⃗₁ + v⃗₂.

Une variante équivalente, parfois plus pratique : la méthode **« bout-à-bout »**. On dessine v⃗₁, puis on place v⃗₂ à partir de l'extrémité de v⃗₁ (en gardant sa direction et son sens). Le vecteur somme part de l'origine de v⃗₁ et arrive à l'extrémité de v⃗₂. C'est la méthode utilisée par tous les pilotes pour calculer l'effet du vent sur leur trajectoire.

[FIGURE physique_ch5_fig02_somme_vecteurs.png]

**Figure 2** — Deux méthodes graphiques pour additionner deux vecteurs. La diagonale du parallélogramme et le « bout-à-bout » donnent exactement le même résultat.

### 4. Projection d'un vecteur sur un axe

L'opération la plus importante pour l'ECG, c'est la **projection** d'un vecteur sur un axe donné. Imagine que tu veuilles savoir « quelle est la composante horizontale » d'un vecteur v⃗ qui pointe en oblique. Géométriquement, tu fais tomber sa pointe perpendiculairement sur l'axe horizontal : la longueur du segment obtenu est la **projection**.

Si le vecteur a une norme v et forme un angle θ avec l'axe sur lequel on projette, la projection vaut :

Projection d'un vecteur sur un axe
v_axe = v × cos(θ)
v = norme du vecteur · θ = angle entre le vecteur et l'axe de projection · cos(θ) = facteur géométrique qui vaut 1 si parallèle, 0 si perpendiculaire.

Quelques valeurs utiles à mémoriser pour aller vite :

- **θ = 0°** (vecteur parallèle à l'axe, même sens) : cos = 1 → projection = v (maximum)

- **θ = 60°** : cos = 0,5 → projection = v/2

- **θ = 90°** (vecteur perpendiculaire à l'axe) : cos = 0 → projection = 0 (rien sur cet axe)

- **θ = 180°** (vecteur parallèle, sens opposé) : cos = −1 → projection = −v (maximum dans l'autre sens)

**🧠 Mnémo Medeos — « Si je suis perpendiculaire, je ne vois rien »**

La règle qui résume tout : **plus un vecteur est aligné avec un axe, plus la projection est grande**. Plus il est perpendiculaire, plus la projection est petite (et nulle à 90°). C'est exactement cette règle qu'on retrouvera plus loin pour l'ECG : une dérivation qui est parallèle au vecteur cardiaque enregistre un grand signal ; une dérivation perpendiculaire n'enregistre rien — on l'appelle un complexe isoélectrique . C'est aussi cette règle qui explique pourquoi en Doppler (ch.4), une sonde perpendiculaire au flux sanguin donne un signal nul.

### 5. Application en physique — Force sur un plan incliné

Pour ancrer ces notions avant l'ECG, prenons un exemple physique simple. Une boule posée sur un toboggan incliné à 30° par rapport à l'horizontale subit son **poids** P⃗ = m·g⃗, dirigé vers le bas (vers le centre de la Terre). La question : quelle est la composante du poids qui fait glisser la boule le long du toboggan ?

On projette le poids sur la direction du toboggan. L'angle entre le poids (vertical) et la direction du toboggan (inclinée à 30° du plan horizontal, donc 60° de la verticale) vaut 60°. La projection le long du plan vaut donc :

P_glissement = m·g × cos(60°) = m·g × 0,5 = m·g/2

Autrement dit, sur un plan à 30°, c'est la moitié du poids qui force la boule à glisser. C'est exactement la même opération que ce qu'on fera tout à l'heure pour l'ECG, où on projettera le vecteur cardiaque sur 6 dérivations frontales différentes pour obtenir 6 tracés.

**🧪 Mini-exercice — Projection d'un vecteurÉnoncé :** Un vecteur v⃗ a une norme v = 10 mV et fait un angle de 60° avec l'axe horizontal Ox. (a) Quelle est sa projection sur l'axe Ox ? (b) Quelle serait la projection si l'angle était de 90° ? (c) Quelle serait la projection si l'angle était de 180° ?

👁️ Voir la correction

**Correction :(a)** θ = 60° → v_x = v × cos(60°) = 10 × 0,5 = **5 mV**.

**(b)** θ = 90° → v_x = v × cos(90°) = 10 × 0 = **0 mV**. Le vecteur est perpendiculaire à l'axe, sa projection est nulle.

**(c)** θ = 180° → v_x = v × cos(180°) = 10 × (−1) = **−10 mV**. Le vecteur est parallèle à l'axe mais de sens opposé, sa projection est négative et maximale en valeur absolue. C'est ce qui se passe en ECG quand le vecteur cardiaque pointe à l'opposé d'une dérivation : l'onde est inversée (négative).

**🧪 Mini-exercice — Somme de deux vecteursÉnoncé :** Deux forces s'exercent sur un même objet : F⃗₁ de norme 3 N dirigée horizontalement vers la droite (θ₁ = 0°) ; F⃗₂ de norme 4 N dirigée verticalement vers le haut (θ₂ = 90°). Quelle est la norme de la force résultante F⃗ = F⃗₁ + F⃗₂ ? (Indice : c'est un triangle rectangle.)

👁️ Voir la correction

**Correction :**

Les deux forces étant perpendiculaires (θ₁ et θ₂ diffèrent de 90°), le parallélogramme est un **rectangle**, et la diagonale (vecteur somme) est l'**hypoténuse** d'un triangle rectangle de côtés 3 et 4.

Par le théorème de Pythagore : ||F⃗|| = √(3² + 4²) = √(9 + 16) = √25 = **5 N**.

C'est le triangle 3-4-5 le plus connu en physique. La direction de la résultante fait un angle θ = arctan(4/3) ≈ 53° avec l'horizontale.

## II. Potentiel de membrane et équation de Nernst

Toutes les cellules vivantes ont un potentiel électrique négatif à l'intérieur par rapport à l'extérieur : −70 mV pour un neurone, −90 mV pour une cellule cardiaque. Ce n'est pas un accident — c'est une conséquence directe des gradients d'ions de part et d'autre de la membrane. L'équation de Nernst nous dit exactement quelle valeur cela donne.

### 1. 🤔 Le problème — Pourquoi une cellule est-elle « pile électrique » au repos ?

Plante deux électrodes très fines dans une cellule (une à l'intérieur, une à l'extérieur), connecte-les à un voltmètre. Tu mesures systématiquement une **différence de potentiel négative** : l'intérieur est plus négatif que l'extérieur, typiquement de 70 à 90 mV. Cette différence existe au repos, sans aucune stimulation, juste parce que la cellule est vivante et entourée d'une membrane. D'où vient-elle ? Et comment la cellule la maintient-elle en permanence sans s'effondrer ?

La réponse tient en deux étapes : (1) il existe des **gradients de concentration ioniques** très marqués entre l'intérieur et l'extérieur de la cellule ; (2) la membrane est **sélectivement perméable**, surtout à un ion en particulier — le potassium K⁺. Le voltage qui en résulte est exactement ce que prédit l'**équation de Nernst**.

### 2. Les gradients ioniques physiologiques

Voici les concentrations à mémoriser pour le K⁺, le Na⁺ et le Cl⁻, à l'intérieur et à l'extérieur d'une cellule typique de mammifère (les ordres de grandeur sont les mêmes pour neurones, fibres musculaires et cardiomyocytes) :

|

| Ion
| Concentration intracellulaire
| Concentration extracellulaire
| Gradient (extra/intra)

| **K⁺** (potassium)
| 140 mmol/L
| 4 mmol/L
| ×0,03 (35× plus dedans)

| **Na⁺** (sodium)
| 10 mmol/L
| 140 mmol/L
| ×14 (14× plus dehors)

| **Cl⁻** (chlorure)
| 5 mmol/L
| 110 mmol/L
| ×22 (22× plus dehors)

| **Ca²⁺** (calcium)
| 0,0001 mmol/L (10⁻⁴)
| 2 mmol/L
| ×20 000

Ces gradients sont énormes — et ils sont activement maintenus par des **pompes** qui consomment de l'ATP (on en parlera en section IV). Un cardiomyocyte au repos consacre près du tiers de son budget énergétique uniquement à entretenir ces gradients.

[FIGURE physique_ch5_fig03_gradients_ioniques.png]

**Figure 3** — Gradients ioniques entre l'intérieur et l'extérieur d'une cellule. Le K⁺ est concentré à l'intérieur, le Na⁺ à l'extérieur. Le potentiel de repos négatif (−70 mV) est la conséquence directe de ces déséquilibres.

### 3. L'équation de Nernst

Imagine une membrane **uniquement perméable au K⁺**. Comme le K⁺ est 35× plus concentré à l'intérieur, il diffuse spontanément vers l'extérieur (gradient de concentration). Mais en sortant, chaque K⁺ emporte une charge positive : l'intérieur devient de plus en plus négatif . Ce déficit de charges crée un **champ électrique** qui freine progressivement la sortie de K⁺. À l'équilibre, le gradient de concentration (qui pousse K⁺ vers l'extérieur) est exactement compensé par le gradient électrique (qui rappelle K⁺ vers l'intérieur, car l'intérieur est négatif). La différence de potentiel à laquelle cet équilibre est atteint s'appelle le **potentiel d'équilibre de Nernst** de l'ion considéré.

Équation de Nernst (cas général)
E_X = (R·T / z·F) × ln([X]_ext / [X]_int)
R = 8,314 J·K⁻¹·mol⁻¹ · T = température en kelvins · z = valence de l'ion (±1 pour Na⁺, K⁺, Cl⁻ ; +2 pour Ca²⁺) · F = constante de Faraday = 96 485 C·mol⁻¹ · ln = logarithme népérien.

À **37 °C** (310 K) et avec ln(x) = 2,3 × log(x), on obtient la forme simplifiée à connaître par cœur :

Équation de Nernst à 37 °C (forme simplifiée)
E_X = (60 / z) × log([X]_ext / [X]_int) en mV
Le « 60 » résulte du calcul (RT/F)·ln(10) ≈ 61 mV à 37 °C, arrondi à 60 pour les calculs mentaux.

**🧠 Mnémo Medeos — « 60 mV par décade »**

Tu as déjà rencontré ce nombre au ch.3 (potentiel de Donnan) — c'est la **même formule**. À 37 °C, pour un ion monovalent (z = ±1), **chaque facteur 10 de différence de concentration crée 60 mV**. Pour un ion divalent (Ca²⁺), c'est 30 mV par décade (deux fois moins, car z = 2 au dénominateur). Grave ce « 60 mV par décade » à vie : c'est le chiffre le plus rentable de toute l'électrophysiologie.

### 4. Calculs : E_K et E_Na à connaître par cœur

Appliquons l'équation de Nernst aux deux ions phares avec les concentrations physiologiques :

**Pour le K⁺ (z = +1)** : [K⁺]_ext = 4 mmol/L, [K⁺]_int = 140 mmol/L. Le rapport [K⁺]_ext / [K⁺]_int = 4/140 ≈ 1/35.

E_K = (60 / +1) × log(4/140) = 60 × log(0,0286) ≈ 60 × (−1,54) ≈ **−92 mV**

On arrondit en général à **E_K ≈ −90 mV**. C'est très proche du potentiel de repos d'un cardiomyocyte, et pour cause : au repos, la membrane est principalement perméable au K⁺. Le potentiel cellulaire « suit » donc E_K.

**Pour le Na⁺ (z = +1)** : [Na⁺]_ext = 140 mmol/L, [Na⁺]_int = 10 mmol/L. Le rapport = 14.

E_Na = (60 / +1) × log(140/10) = 60 × log(14) ≈ 60 × 1,15 ≈ **+69 mV**

On arrondit à **E_Na ≈ +60 mV**. C'est très loin du potentiel de repos — autrement dit, le Na⁺ a un énorme gradient électrochimique qui l'aspire vers l'intérieur. Si jamais la membrane devient soudain perméable au Na⁺ (comme lors d'une dépolarisation, on le verra en section III), le Na⁺ entre massivement et le potentiel de la cellule se rapproche brutalement de +60 mV.

**🔑 Les 3 chiffres à retenir à vie**

- **E_K ≈ −90 mV** (potassium veut sortir, jusqu'à atteindre cet équilibre)

- **E_Na ≈ +60 mV** (sodium veut entrer, jusqu'à atteindre cet équilibre)

- **Potentiel de repos cellulaire ≈ −70 mV** (neurone) à **−90 mV** (cardiomyocyte)

Le potentiel de repos est très proche de E_K parce que la membrane au repos est surtout perméable au K⁺. Quand un canal Na⁺ s'ouvre, le potentiel bascule rapidement vers E_Na.

#### ⭐⭐⭐ Le cas particulier du Cl⁻ — Attention au signe de la valence

Le Cl⁻ est un anion (z = **−1**). Quand tu appliques l'équation de Nernst au chlorure, la valence négative change le signe du résultat — c'est exactement ici que les pièges du concours se nichent. Reprenons la formule :

Équation de Nernst appliquée au Cl⁻ (z = −1)
E_Cl = (60 / −1) × log([Cl⁻]_ext / [Cl⁻]_int) = **−60 × log([Cl⁻]_ext / [Cl⁻]_int)Application numérique** : [Cl⁻]_ext = 110 mmol/L, [Cl⁻]_int = 5 mmol/L → rapport = 22.

E_Cl = −60 × log(22) ≈ −60 × 1,34 ≈ **−80 mV**

Tu remarques que E_Cl (≈ −80 mV) est très proche du potentiel de repos cellulaire (≈ −70 à −90 mV). Conclusion physiologique : le Cl⁻ est à peu près à son équilibre au repos. Il ne « pousse » pas le potentiel dans une direction ou dans une autre — il **stabilise** le potentiel de repos là où il est. C'est l'une des raisons pour lesquelles certains anesthésiques ouvrent des canaux Cl⁻ (le GABA dans le cerveau) : ils accentuent cette stabilisation et empêchent les neurones de se dépolariser → effet calmant.

**⚠️ Piège ⭐⭐⭐ — Inverser [Cl⁻]_ext et [Cl⁻]_int ne change PAS la même chose que pour Na⁺ ou K⁺**

Pour Na⁺ ou K⁺ (z = +1), inverser ext/int dans le log = changer le signe du résultat.

Pour Cl⁻ (z = −1), inverser ext/int dans le log = changer le signe… mais il y a déjà un signe « − » dans le (60/−1), donc le résultat final reste cohérent. La règle infaillible : **écris d'abord (60/z) en respectant le signe de z, puis log(ext/int) — toujours dans cet ordre, toujours ext en haut**. Si tu suis cette convention à la lettre, le Cl⁻ ne te piégera jamais.

Variante équivalente, parfois utilisée pour éviter la confusion : E_Cl = +60 × log([Cl⁻]_int / [Cl⁻]_ext). Inverse le log et retire le « − » → même résultat. Choisis une convention, garde-la, ne mélange jamais les deux dans une même copie.

**🧪 Mini-exercice ⭐⭐⭐ — Calcul direct de E_ClÉnoncé :** Dans une fibre musculaire au repos, on mesure [Cl⁻]_ext = 100 mmol/L et [Cl⁻]_int = 10 mmol/L. Calcule le potentiel d'équilibre du chlorure E_Cl à 37 °C.

👁️ Voir la correction

**Correction :**

E_Cl = (60 / z) × log([Cl⁻]_ext / [Cl⁻]_int) avec z = −1.

E_Cl = (60 / −1) × log(100 / 10) = −60 × log(10) = −60 × 1 = **−60 mV**.

Ce potentiel d'équilibre est négatif, comme attendu pour un anion concentré à l'extérieur (et donc qui « cherche » à entrer dans la cellule, ce qui rendrait l'intérieur encore plus négatif). C'est aussi très proche du potentiel de repos de la fibre musculaire (≈ −80 mV) — d'où la fonction stabilisatrice du Cl⁻ qu'on a évoquée.

### 5. Intuition Goldman — Le potentiel de repos est une « moyenne pondérée »

Dans la réalité, la membrane n'est jamais perméable à un seul ion. Elle laisse passer du K⁺ beaucoup , du Na⁺ un peu , du Cl⁻ moyennement . Chaque ion « tire » le potentiel de membrane vers son propre potentiel de Nernst, et le résultat final est une **moyenne pondérée par les perméabilités** : plus la membrane est perméable à un ion, plus le potentiel de repos s'approche du Nernst de cet ion.

Cette idée est formalisée par l'équation de Goldman-Hodgkin-Katz, qu'on ne mettra pas ici (elle se voit plus tard, dans le détail) — mais l'intuition suffit largement pour comprendre la physiologie :

- Au **repos**, P_K ≫ P_Na → le potentiel reste proche de E_K (≈ −90 mV) → cellule polarisée.

- Pendant la **dépolarisation**, P_Na devient ≫ P_K (canaux Na⁺ s'ouvrent brutalement) → le potentiel saute vers E_Na (≈ +60 mV) → cellule excitée.

- Pendant la **repolarisation**, P_K redevient dominant (canaux Na⁺ se ferment, canaux K⁺ s'ouvrent) → le potentiel revient vers E_K → cellule repolarisée.

**L'hyperkaliémie — le piège des urgences cardiologiques.** Quand la kaliémie (concentration de K⁺ dans le plasma) monte de 4 à 7 ou 8 mmol/L (par exemple chez un patient en insuffisance rénale aiguë), le gradient [K⁺]_ext / [K⁺]_int augmente. Le potentiel d'équilibre E_K se rapproche de zéro — par exemple, à 8 mmol/L, E_K passe de −90 à −78 mV. La cellule cardiaque est donc moins négative au repos, plus proche du seuil de déclenchement d'un potentiel d'action. Conséquence : excitabilité chaotique, troubles du rythme graves, voire arrêt cardiaque par fibrillation ventriculaire ou asystolie. L'hyperkaliémie sévère est une urgence vitale absolue — l'ECG en porte la trace immédiate (ondes T amples et pointues). C'est l'une des rares situations en médecine où une simple équation de Nernst donne directement le diagnostic et l'urgence du traitement.

**🧪 Mini-exercice — Recalculer E_K en hyperkaliémieÉnoncé :** Chez un patient hyperkaliémique, [K⁺]_ext passe de 4 à 10 mmol/L (intoxication par épargne potassique). La concentration intracellulaire reste à 140 mmol/L. Calcule le nouveau E_K à 37 °C. On donne log(10/140) ≈ −1,15.

👁️ Voir la correction

**Correction :**

E_K = (60/+1) × log(10/140) = 60 × (−1,15) = **−69 mV**.

Comparaison : à kaliémie normale (4 mmol/L), E_K ≈ −92 mV. À 10 mmol/L, E_K ≈ −69 mV. La cellule cardiaque est dépolarisée au repos d'environ 23 mV — elle est beaucoup plus proche du seuil de déclenchement d'un potentiel d'action, d'où l'excitabilité anormale et le risque d'arythmie grave.

**🧪 Mini-exercice — Calcul du potentiel d'équilibre du calciumÉnoncé :** Calcule le potentiel d'équilibre du calcium E_Ca à 37 °C, sachant que [Ca²⁺]_ext = 2 mmol/L et [Ca²⁺]_int = 10⁻⁴ mmol/L. (Attention : Ca²⁺ a une valence z = +2). On donne log(2 / 10⁻⁴) = log(2 × 10⁴) ≈ 4,3.

👁️ Voir la correction

**Correction :**

E_Ca = (60 / z) × log([Ca²⁺]_ext / [Ca²⁺]_int) = (60 / 2) × log(2 × 10⁴) = 30 × 4,3 ≈ **+129 mV**.

C'est un potentiel d'équilibre très positif — encore plus que celui du Na⁺. Le Ca²⁺ a un énorme gradient électrochimique qui le pousse vers l'intérieur. Quand des canaux Ca²⁺ s'ouvrent (cas du potentiel d'action des cellules cardiaques pacemaker), le Ca²⁺ entre massivement et fait monter le potentiel cellulaire — c'est le moteur du plateau du potentiel d'action cardiaque, qui dure 200 à 300 ms et explique la contraction prolongée du muscle cardiaque.

## III. Le potentiel d'action et sa propagation

Une cellule au repos est une pile silencieuse à −70 mV. Mais quand elle reçoit un stimulus suffisant, elle entre en mode actif : son potentiel saute à +30 mV en moins d'une milliseconde, puis revient à −70 mV. Ce signal stéréotypé, c'est le **potentiel d'action**. Il porte tous les messages du système nerveux et déclenche toutes les contractions musculaires de ton corps.

### 1. 🤔 Le problème — Comment une cellule envoie-t-elle un message ?

Quand tu touches un objet brûlant, l'information « danger » doit voyager de ton doigt jusqu'à ton cerveau en quelques millisecondes. Ce voyage ne se fait pas par diffusion (trop lente, à l'échelle du mètre) ni par flux sanguin (encore plus lent). Il se fait par **signal électrique propagé le long d'une fibre nerveuse**. La question : comment une cellule peut-elle créer un signal électrique reproductible, le faire voyager, et redevenir disponible pour le suivant ?

La réponse, découverte par Hodgkin et Huxley dans les années 1950 sur l'axone géant du calamar (prix Nobel 1963), tient en quatre phases bien chronométrées.

### 2. L'état de repos — La cellule prête à tirer

Avant tout stimulus, la cellule maintient son potentiel transmembranaire à environ **−70 mV** (neurone) ou **−90 mV** (cardiomyocyte). Les canaux Na⁺ voltage-dépendants sont fermés , et seuls les canaux K⁺ « de fuite » sont ouverts. La membrane est donc essentiellement perméable au K⁺ — d'où un potentiel proche de E_K, comme on l'a vu en section II.

Cet état stable n'est pas gratuit : la **pompe Na⁺/K⁺-ATPase** (qu'on détaillera en section IV) consomme en permanence de l'ATP pour expulser le Na⁺ qui s'infiltre et réimporter le K⁺ qui s'échappe. Sans cette pompe, les gradients s'effondreraient en quelques minutes et la cellule deviendrait inexcitable.

### 3. Les 4 phases du potentiel d'action

Quand un stimulus dépolarise la membrane au-delà d'un **seuil critique** (typiquement −55 mV pour un neurone), une cascade automatique se déclenche. Quatre phases s'enchaînent en moins de 5 ms :

- **Phase 0 — Dépolarisation rapide.** Les canaux Na⁺ voltage-dépendants s'ouvrent brutalement. Le Na⁺, qui était très concentré à l'extérieur, se précipite à l'intérieur. Le potentiel grimpe de −70 mV à environ +30 mV en moins de 1 ms — la cellule s'approche fortement de E_Na ≈ +60 mV.

- **Phase 1 — Inactivation des canaux Na⁺.** Au bout de quelques millisecondes seulement, les canaux Na⁺ s' inactivent spontanément (un mécanisme moléculaire automatique). L'entrée de Na⁺ s'arrête.

- **Phase 2 — Repolarisation par sortie de K⁺.** Pendant ce temps, des canaux K⁺ voltage-dépendants se sont ouverts (plus lentement que les Na⁺). Le K⁺ sort massivement, ramène le potentiel vers les valeurs négatives, et la membrane se rapproche à nouveau de E_K.

- **Phase 3 — Hyperpolarisation transitoire.** Les canaux K⁺ se ferment lentement, et il arrive que le potentiel passe brièvement en dessous de −70 mV (vers −80 ou −90 mV) avant de remonter au repos. C'est la phase d' hyperpolarisation .

[FIGURE physique_ch5_fig04_potentiel_action.png]

**Figure 4** — Les 4 phases du potentiel d'action neuronal : dépolarisation rapide (Na⁺ in), repolarisation (K⁺ out), hyperpolarisation transitoire, retour au repos. Durée totale ≈ 3-5 ms.

**🔑 La loi du tout-ou-rien**

Le potentiel d'action est une réponse **stéréotypée** : si le stimulus dépasse le seuil, le potentiel d'action se déclenche en entier , toujours avec la même forme et la même amplitude. Si le stimulus est en dessous du seuil, il ne se passe rien. C'est la **loi du tout-ou-rien**. L'information n'est donc pas codée dans l' amplitude du signal mais dans sa fréquence : plus un nerf est stimulé fort, plus il envoie de potentiels d'action par seconde (et non pas des potentiels plus grands).

### 4. Période réfractaire et propagation

Juste après un potentiel d'action, la cellule passe par deux états successifs pendant lesquels elle ne peut pas redéclencher un nouveau PA normalement :

**🔑 ⭐⭐⭐ Période réfractaire absolue vs relative — la distinction qui tombe au QCM**

- **Période réfractaire ABSOLUE** (~1 ms pour un neurone, ~200 ms pour un cardiomyocyte) : aucun stimulus, aussi puissant soit-il, ne peut redéclencher un PA. Les canaux Na⁺ sont en état d'inactivation moléculaire — ils sont physiquement bloqués, pas une question de seuil. **Pendant cette période, l'excitabilité est nulle.**

- **Période réfractaire RELATIVE** (~10 ms pour un neurone, ~50-100 ms pour un cardiomyocyte) : un nouveau PA est possible, mais uniquement avec un stimulus supraliminaire renforcé. Les canaux Na⁺ commencent à se réactiver mais pas tous ; il faut « pousser plus fort » pour atteindre le seuil. **L'excitabilité est diminuée mais non nulle.**

👉 Mnémo : **« absolue = impossible, relative = possible mais plus fort »**. C'est typiquement le piège des QCM (Vrai/Faux) — « pendant la période réfractaire, aucun PA n'est possible » est FAUX si on parle de la période relative .

Pourquoi la période réfractaire dure 1 à 2 ms pour un neurone, mais 200 à 300 ms pour un cardiomyocyte ? Parce que le cœur ne doit pas pouvoir se re-contracter trop vite, sous peine de tétanos cardiaque incompatible avec une circulation efficace. La nature a réglé la durée de la période réfractaire en fonction de la mission de chaque tissu.

Pour qu'un message voyage le long d'une fibre, le potentiel d'action déclenché à un endroit dépolarise la zone voisine, qui à son tour déclenche son propre potentiel d'action, et ainsi de suite. C'est la **propagation** — comme une vague qui parcourt la fibre. Vitesse typique : **1 m/s** sur une fibre fine non myélinisée, jusqu'à **100 m/s** sur une grosse fibre myélinisée (la myéline est une gaine isolante qui force le signal à « sauter » de nœud en nœud — propagation saltatoire).

**L'anesthésie locale — bloquer les canaux Na⁺.** Les anesthésiques locaux (lidocaïne, bupivacaïne) sont des molécules qui se fixent à l'intérieur du canal Na⁺ voltage-dépendant et **l'empêchent de s'ouvrir**. Conséquence directe : sans ouverture des canaux Na⁺, pas de dépolarisation, donc pas de potentiel d'action. Les fibres nerveuses sensitives ne peuvent plus transmettre le message « douleur » vers le cerveau — la zone est anesthésiée . Cette même classe de molécules est utilisée en cardiologie comme anti-arythmiques de classe I : en ralentissant l'entrée de Na⁺ dans les cellules cardiaques, on stabilise les arythmies par hyperexcitabilité. Une seule cible moléculaire, deux applications cliniques majeures — c'est typique de la pharmacologie qui découle directement de la physique de la membrane.

**⚠️ Piège ⭐⭐⭐ — La membrane est une DIODE, pas un générateur**

L'un des pièges classiques du concours est de confondre le comportement électrique de la membrane avec celui d'un générateur (qui imposerait activement une tension fixe). En réalité, la membrane se comporte comme une **diode** : elle laisse passer le courant ionique préférentiellement dans un sens (par exemple, le K⁺ qui descend son gradient), mais ne « crée » pas d'énergie électrique. C'est ce qu'on appelle l'**effet redresseur** de la membrane.

Conséquences pratiques :

- La membrane n'est pas une pile au sens d'un générateur autonome.

- L'énergie qui maintient le potentiel vient des pompes (Na⁺/K⁺-ATPase, section IV) qui hydrolysent de l'ATP en permanence.

- Le potentiel transmembranaire est donc plutôt analogue à un condensateur chargé (qui stocke de l'énergie sous forme de séparation de charges) dont les pompes ATPases rechargent la fuite.

### 5. La fréquence comme code de l'information

Puisque l'amplitude du potentiel d'action est fixe (loi du tout-ou-rien), la seule façon pour un nerf de coder une intensité de stimulus est de varier la **fréquence** à laquelle il envoie ses potentiels d'action. Un nerf au repos peut décharger à 1 ou 2 Hz ; un nerf très stimulé peut atteindre 200 à 300 Hz. C'est cette fréquence que le cerveau interprète comme « petite douleur », « grosse douleur », « son fort », « son faible », etc.

Cette logique « fréquence = intensité » est analogue à un code Morse : ce n'est pas le volume du « bip » qui change, c'est leur cadence. La nature a inventé ce code des centaines de millions d'années avant les ingénieurs.

**🧪 Mini-exercice — Vitesse de propagation et myélineÉnoncé :** Un signal douloureux part de ton pied (à 1,5 m de la moelle épinière) et doit y parvenir. Combien de temps faut-il : (a) sur une fibre amyélinisée à 1 m/s ? (b) sur une fibre myélinisée à 100 m/s ?

👁️ Voir la correction

**Correction :(a)** t = d / v = 1,5 / 1 = **1,5 s**. C'est extrêmement long pour un signal d'alerte — c'est pour cela que les fibres de la douleur lente (type C, amyélinisées) donnent une douleur sourde et différée.

**(b)** t = 1,5 / 100 = **0,015 s = 15 ms**. Instantané à l'échelle de la perception. C'est ce que font les grosses fibres myélinisées Aδ pour la douleur rapide, le toucher fin, et la motricité — le réflexe de retrait avant même que le cerveau ait conscience de la brûlure.

**🧪 Mini-exercice — Période réfractaire et fréquence maximaleÉnoncé :** Un cardiomyocyte a une période réfractaire d'environ 250 ms. Quelle est, en théorie, la fréquence cardiaque maximale qu'il pourrait soutenir (en battements par minute) ?

👁️ Voir la correction

**Correction :**

Une période réfractaire de 250 ms implique qu'il ne peut pas y avoir plus d'un potentiel d'action toutes les 250 ms, soit 4 potentiels d'action par seconde.

Fréquence maximale = 4 × 60 = **240 battements par minute**.

Au-delà, le cœur ne pourrait plus se relaxer entre deux contractions, ce qui empêcherait son remplissage et effondrerait le débit cardiaque. C'est exactement la raison pour laquelle la période réfractaire est longue dans le cœur : c'est un mécanisme de protection. Dans certaines arythmies pathologiques (tachycardies à 250 bpm et plus), la pompe cardiaque devient inefficace et le patient peut perdre connaissance.

## IV. Transport épithélial et pompe Na⁺/K⁺-ATPase

Les gradients ioniques qu'on a utilisés sans broncher dans les sections II et III ne sont pas magiques : ils sont maintenus par des **pompes moléculaires** qui consomment de l'ATP. Et ces mêmes pompes, organisées en réseau dans les épithéliums (intestin, rein, glandes), permettent de transporter activement le sel, le sucre et l'eau du tube digestif vers le sang — c'est le principe du sérum de réhydratation orale, qui sauve des millions de vies chaque année.

### 1. 🤔 Le problème — D'où vient l'énergie des gradients ?

On a vu que la cellule au repos a 35× plus de K⁺ à l'intérieur et 14× plus de Na⁺ à l'extérieur. Mais la membrane n'est pas parfaitement étanche : il y a une fuite permanente de K⁺ vers l'extérieur et de Na⁺ vers l'intérieur. Sans correction, ces gradients s'effondreraient en quelques minutes. Comment la cellule les maintient-elle ?

La réponse a été élucidée par le Danois Jens Skou en 1957 (prix Nobel 1997) : une protéine membranaire spécialisée, la **pompe Na⁺/K⁺-ATPase**, consomme de l'ATP pour pomper activement les ions à contre-courant de leur gradient.

### 2. La pompe Na⁺/K⁺-ATPase — Le moteur central

**🔑 La règle « 3 sortent, 2 entrent, 1 ATP »**

À chaque cycle, la pompe Na⁺/K⁺-ATPase :

- **Expulse 3 Na⁺** de la cellule (du milieu intérieur, peu concentré en Na⁺, vers l'extérieur très concentré — donc à contre-courant ).

- **Importe 2 K⁺** dans la cellule (de l'extérieur peu concentré vers l'intérieur très concentré — encore à contre-courant ).

- **Hydrolyse 1 molécule d'ATP** en ADP + P_i pour fournir l'énergie de ces transports antiphysiques.

Le bilan net : 1 charge positive sort à chaque cycle (3 entrent, 2 sortent côté charges) — la pompe est donc électrogène , elle contribue directement à maintenir le potentiel négatif intracellulaire.

[FIGURE physique_ch5_fig05_pompe_nakatp.png]

**Figure 5** — La pompe Na⁺/K⁺-ATPase : 3 Na⁺ expulsés et 2 K⁺ importés à chaque hydrolyse d'ATP. C'est le moteur central qui entretient les gradients ioniques de toute cellule animale.

La pompe Na⁺/K⁺-ATPase est tellement essentielle qu'une cellule au repos lui consacre environ **30 % de son budget énergétique**. Dans le cerveau, qui consomme à lui seul 20 % de l'ATP du corps, près des deux tiers sert à faire tourner ces pompes pour maintenir le potentiel des neurones. La pensée a un coût énergétique réel — et il est essentiellement biophysique.

### 3. Co-transports et antiports — Utiliser le gradient comme énergie

Le gradient de Na⁺ créé par la pompe ne sert pas seulement à maintenir le potentiel cellulaire — il est aussi recyclé par d'autres protéines comme source d'énergie. C'est le principe des **co-transports** :

- **Symport** : deux molécules sont transportées dans le même sens . Exemple typique : le co-transporteur **Na⁺/glucose (SGLT)** dans l'intestin grêle. Le Na⁺ rentre dans la cellule (en suivant son gradient), entraînant avec lui une molécule de glucose contre son gradient. C'est ainsi qu'on absorbe le sucre alimentaire.

- **Antiport** : deux molécules sont transportées dans des sens opposés . Exemple : l'**échangeur Na⁺/Ca²⁺** dans le cardiomyocyte. Le Na⁺ rentre (suivant son gradient) en échange de Ca²⁺ qui sort. C'est l'un des mécanismes qui permettent au cœur de se relaxer entre deux contractions.

Dans tous les cas, l'énergie est « empruntée » au gradient de Na⁺ — qui sera lui-même restauré par la pompe Na⁺/K⁺-ATPase. La pompe finance donc indirectement tous les transports actifs secondaires de la cellule.

[FIGURE physique_ch5_fig06_cotransport_sglt.png]

**Figure 6** — Co-transport Na⁺/glucose dans l'épithélium intestinal. Le Na⁺ entre en suivant son gradient, entraînant le glucose. L'eau suit par osmose. La pompe basolatérale renvoie le Na⁺ vers le sang — le cycle se boucle.

### 4. Jonctions serrées et polarité épithéliale

Les cellules épithéliales ne fonctionnent pas isolément : elles sont rangées en monocouche étanche, soudées les unes aux autres par des **jonctions serrées** (tight junctions). Ces jonctions ont deux fonctions :

- **Étanchéité** : elles empêchent le contenu du tube digestif (ou de la lumière rénale) de fuir entre les cellules vers le sang. Tout doit passer à travers les cellules, ce qui permet à l'organisme de contrôler ce qui rentre.

- **Polarité** : elles séparent la membrane apicale (côté lumière du tube) de la membrane basolatérale (côté sang). Les transporteurs peuvent être différents sur les deux faces — d'où la possibilité de faire passer activement du sel du tube vers le sang, comme dans l'intestin.

Cette architecture est universelle : intestin grêle (absorption des nutriments), tube rénal proximal (réabsorption du sodium et du glucose), canal pancréatique (sécrétion de bicarbonates), épithélium respiratoire (sécrétion de mucus)... Toujours la même grammaire : apical + basolatéral + jonctions serrées + pompe Na⁺/K⁺-ATPase .

### 5. Application clinique — Le sérum de réhydratation orale (SRO)

**Le SRO — la « médecine la plus simple et la plus efficace du monde » selon l'OMS.** Quand un enfant meurt de diarrhée aiguë (encore plus de 500 000 décès par an dans le monde, principalement des enfants de moins de 5 ans), ce n'est pas l'infection qui le tue mais la déshydratation : la perte massive d'eau et d'électrolytes par les selles liquides.

Le traitement de référence n'est pas une perfusion intraveineuse (souvent indisponible dans les pays à ressources limitées) mais une simple solution à boire, le **SRO (Soluté de Réhydratation Orale)**. Sa composition de base, recommandée par l'OMS :

- **NaCl** : ≈ 2,6 g/L (sodium)

- **KCl** : ≈ 1,5 g/L (potassium)

- **Citrate** : ≈ 2,9 g/L (tampon)

- **Glucose** : ≈ 13,5 g/L (sucre)

- **Eau** : 1 litre

Le secret ? Le **glucose**. Sans glucose, le Na⁺ n'est presque pas absorbé par l'intestin malade. Avec glucose, le co-transporteur SGLT (vu en sous-section 3) fonctionne, le Na⁺ passe, le glucose passe avec, et l'eau suit par osmose . Un enfant déshydraté peut être sauvé en quelques heures avec quelques sachets de SRO dilués dans de l'eau propre. Cette intervention a été décrite par The Lancet comme « la plus grande avancée médicale du XXᵉ siècle » — et elle repose entièrement sur la physique du transport épithélial qu'on vient de voir.

**🧪 Mini-exercice — Pourquoi le sucre dans le SRO ?Énoncé :** Pourquoi ne pas simplement faire boire à un enfant déshydraté une solution d'eau + sel (NaCl 0,9 %, sérum physiologique) sans glucose ? Qu'est-ce qui se passerait au niveau du tube digestif malade ?

👁️ Voir la correction

**Correction :**

Dans une diarrhée aiguë (souvent à Vibrio cholerae ou rotavirus), la muqueuse intestinale est endommagée et certains transporteurs membranaires sont défaillants. **Sans glucose, le co-transporteur SGLT reste inactif** (il a besoin du couple Na⁺ + glucose pour fonctionner) — et le Na⁺ ne peut donc pas être absorbé efficacement.

Le sel resterait dans la lumière intestinale, attirerait l'eau vers le tube digestif par osmose, et **aggraverait la diarrhée**. L'enfant se déshydraterait encore plus vite.

En ajoutant du glucose, on réactive le SGLT : le Na⁺ entre dans la cellule entérocytaire (couplé au glucose), puis traverse vers le sang, et **l'eau suit par osmose**. C'est une boucle physiologique parfaitement décrite par la physique du transport.

**🧪 Mini-exercice — Combien d'ATP pour maintenir le potentiel ?Énoncé :** Une cellule nerveuse au repos a une « fuite » nette de 10 millions d'ions Na⁺ par seconde, qu'il faut réexpulser par la pompe Na⁺/K⁺-ATPase. Sachant qu'à chaque cycle, la pompe expulse 3 Na⁺ et consomme 1 ATP, combien de molécules d'ATP cette cellule consomme-t-elle par seconde juste pour maintenir son potentiel de repos ?

👁️ Voir la correction

**Correction :**

Pour 10 millions de Na⁺ à expulser et 3 Na⁺ par cycle :

Nombre de cycles par seconde = 10·10⁶ / 3 ≈ **3,3 millions de cycles/s**.

Chaque cycle consomme 1 ATP, donc la cellule brûle **~3,3 millions de molécules d'ATP par seconde**, juste pour rester au repos. À l'échelle du cerveau entier (~86 milliards de neurones), cela explique pourquoi le cerveau consomme à lui seul 20 % de l'énergie du corps, alors qu'il ne pèse que 2 % de la masse. Penser, c'est cher.

## V. ECG — Du vecteur cardiaque à la lecture en 1 minute

Tout ce qu'on a construit dans ce chapitre converge ici. Le cœur, à chaque battement, génère un **champ électrique** qui se propage dans tout le corps. En collant des électrodes à la surface de la peau, on enregistre la **projection** de ce champ sur différents axes — exactement l'opération vectorielle de la section I. Le résultat : un tracé universel, le même chez tous les humains en bonne santé, qu'un médecin sait lire en une minute.

### 1. 🤔 Le problème — Comment voir le cœur battre depuis la peau ?

Le cœur est un organe profond, caché derrière la cage thoracique. Pour voir s'il bat normalement, on ne peut pas l'observer directement. Mais il a une particularité unique : à chaque battement, des millions de cellules cardiaques se dépolarisent successivement (auriculaires d'abord, puis ventriculaires), créant un **courant électrique massif**. Ce courant, conduit par les tissus du corps (qui sont de bons conducteurs grâce à leurs ions), atteint la surface de la peau et y crée des petites différences de potentiel (de l'ordre du millivolt).

Il « suffit » donc de coller des électrodes sur la peau, de mesurer les différences de potentiel entre paires d'électrodes, et de les afficher en fonction du temps. C'est l'**électrocardiogramme**, inventé par le Néerlandais Willem Einthoven en 1903 (prix Nobel 1924). Aujourd'hui, c'est l'examen complémentaire le plus pratiqué au monde — un cabinet de médecine générale en fait plusieurs par jour, et tous les services d'urgence en font à la chaîne.

### 2. Le vecteur électrique cardiaque

À chaque instant t pendant un battement, l'ensemble des cellules cardiaques en cours de dépolarisation produit un **champ électrique global**. Ce champ peut être représenté par un **vecteur** (la fameuse flèche de la section I), avec :

- une **norme** = intensité du courant à cet instant (proportionnelle à la masse de tissu en train de se dépolariser)

- une **direction** = direction moyenne du flux d'ions à travers les cellules

- un **sens** = des zones négatives (déjà dépolarisées) vers les zones positives (encore au repos)

Pendant la phase principale de dépolarisation ventriculaire (le complexe QRS, qu'on verra plus loin), ce vecteur cardiaque a une orientation **moyenne d'environ +60°** par rapport à l'horizontale, dans le plan frontal du corps (un peu en bas et à gauche, dans la direction où la masse ventriculaire gauche est la plus importante). C'est ce qu'on appelle l'**axe électrique du cœur**.

**🔑 Pourquoi 12 dérivations différentes ?**

Un seul vecteur cardiaque, projeté sur 12 axes différents, donne 12 tracés différents — c'est exactement la projection vectorielle de la section I. Chaque dérivation regarde le cœur sous un angle particulier, et capte la composante du vecteur cardiaque selon cet angle. Un ECG complet enregistre **12 dérivations simultanément** : 6 dans le plan frontal (face du corps) et 6 dans le plan horizontal (vue de dessus, autour de la cage thoracique).

### ⭐⭐⭐ 2-bis. La théorie des feuillets — D'où vient le vecteur cardiaque mesuré à distance

On vient de dire « le cœur produit un vecteur électrique à chaque instant ». Mais d'où sort exactement ce vecteur, du point de vue physique ? La **théorie des feuillets** (parfois appelée théorie bipolaire) en donne le mécanisme précis. C'est une notion qui tombe ⭐⭐⭐ aux ACC.

**🔑 L'idée centrale de la théorie des feuillets**

Chaque élément de surface de membrane cellulaire pendant une dépolarisation peut être modélisé comme un **dipôle élémentaire** (= une petite flèche pointant de la zone négative vers la zone positive). Quand des millions de cellules cardiaques se dépolarisent en même temps, l'ensemble de ces petits dipôles s'additionne vectoriellement :

Potentiel mesuré à distance
V_mesuré = Σ (contributions de tous les dipôles élémentaires)

Le résultat est le **vecteur cardiaque global** que la sonde ECG capte à la surface de la peau.

Cette théorie a une conséquence essentielle pour la lecture d'un ECG : **le signal ne dépend pas seulement de l'amplitude** de la dépolarisation, mais surtout de la direction du front de dépolarisation par rapport au détecteur .

|

| État du cœur
| Vecteur global
| Signal sur l'électrode

| **Repos (toutes les cellules polarisées à −90 mV)**
| V = 0 (somme nulle, état uniforme)
| **Tracé plat (ligne isoélectrique)**

| Cellules totalement dépolarisées (toutes à +30 mV au même instant)
| V = 0 (à nouveau état uniforme)
| **Tracé plat** (segment ST du PA cardiaque)

| Front de dépolarisation qui se RAPPROCHE du détecteur
| V dirigé vers le détecteur
| **Déflexion POSITIVE** (vers le haut)

| Front de dépolarisation qui s'ÉLOIGNE du détecteur
| V dirigé à l'opposé du détecteur
| **Déflexion NÉGATIVE** (vers le bas)

| Front de REPOLARISATION qui s'approche
| V dirigé à l'opposé du détecteur (la repolarisation a un sens électrique inverse)
| **Déflexion NÉGATIVE** ⚠

| Front de REPOLARISATION qui s'éloigne
| V dirigé vers le détecteur
| **Déflexion POSITIVE⚠️ Piège ⭐⭐⭐ — Cœur : la repolarisation se propage dans le sens INVERSE de la dépolarisation**

Dans la plupart des organes, le front de repolarisation suit la même direction que le front de dépolarisation. Mais **dans le cœur, la repolarisation se fait dans le sens OPPOSÉ** de la dépolarisation (de l'épicarde vers l'endocarde, alors que la dépolarisation va de l'endocarde vers l'épicarde). Conséquence : l'**onde T** sur l'ECG est **positive** dans la plupart des dérivations, comme le QRS — alors que la physique simple prédirait une onde T négative. C'est un piège fréquent dans les QCM théoriques.

**🧠 Mnémo Medeos — « Feuillets = local, vecteur = distance »**

Ne pas confondre les deux échelles :

- **Théorie des feuillets** = description LOCALE : chaque élément de surface de la cellule est un dipôle. C'est le point de départ microscopique.

- **Mesure à distance (vecteur cardiaque)** = description GLOBALE : la somme de tous ces dipôles donne un seul vecteur que l'on mesure à la peau par les électrodes ECG.

👉 Question type ACC : « la théorie des feuillets s'applique-t-elle à la mesure à distance ? » → Réponse VRAI, c'est la même physique, juste à deux échelles différentes (microscopique → macroscopique).

### 3. Les 6 dérivations frontales et le triangle d'Einthoven

Pour les 6 dérivations du plan frontal, on place 3 électrodes (bras droit, bras gauche, jambe gauche) qui forment géométriquement un triangle équilatéral autour du cœur — c'est le **triangle d'Einthoven**. À partir de ces 3 électrodes, on construit 6 dérivations :

- **3 dérivations bipolaires** (entre 2 électrodes) :

- **D1** = bras gauche − bras droit (axe horizontal, à 0°)

- **D2** = jambe gauche − bras droit (axe oblique à +60°)

- **D3** = jambe gauche − bras gauche (axe oblique à +120°)

- **3 dérivations unipolaires augmentées** (chaque électrode contre la moyenne des deux autres) :

- **aVR** (« a » pour augmented , R pour right ) — bras droit, axe à −150°

- **aVL** — bras gauche, axe à −30°

- **aVF** (F pour foot ) — jambe gauche, axe à +90° (vers le bas)

Ces 6 axes couvrent le plan frontal à 30° d'intervalle (0°, 30°, 60°, 90°, 120°, 150°), comme les rayons d'une roue. Chacune enregistre la projection du vecteur cardiaque sur son axe propre — d'où des tracés différents à chaque battement, mais tous synchrones et tous porteurs de la même information vue sous des angles différents.

[FIGURE physique_ch5_fig07_einthoven_axe.png]

**Figure 7** — Triangle d'Einthoven : les 3 électrodes des membres définissent géométriquement 6 dérivations frontales. Le vecteur cardiaque (axe ≈ +60°) se projette sur chacune et donne 6 tracés différents.

**🧠 Mnémo Medeos — La loi d'Einthoven : D2 = D1 + D3**

Comme les 3 dérivations bipolaires sont les 3 côtés du même triangle, leurs valeurs à chaque instant sont liées par une relation géométrique simple : **D2 = D1 + D3**. C'est la loi d'Einthoven. Concrètement, sur un ECG de qualité, si tu mesures l'amplitude des ondes R en D1 et D3, leur somme doit donner l'amplitude en D2. Si ce n'est pas le cas, il y a probablement une inversion d'électrodes — c'est le premier contrôle qualité qu'on apprend à faire.

### 4. Les 6 dérivations précordiales V1-V6

Pour les 6 autres dérivations, on place 6 électrodes **directement sur le thorax**, en arc autour du cœur. Elles s'appellent V1, V2, V3, V4, V5, V6, et chacune regarde le cœur sous un angle horizontal différent :

- **V1, V2** : à droite du sternum → vue du **ventricule droit** et du septum interventriculaire

- **V3, V4** : entre les deux → vue de la **paroi antérieure du ventricule gauche**

- **V5, V6** : sous l'aisselle gauche → vue de la **paroi latérale du ventricule gauche**

À elles toutes, ces 12 dérivations donnent une « vue 3D » de l'activité électrique du cœur : 6 dérivations frontales (haut/bas/gauche/droite) et 6 dérivations précordiales (avant/arrière, droite/gauche). Pour chaque battement, c'est comme si on avait 12 caméras différentes filmant la même scène — chacune apportant une information complémentaire.

### 5. Les ondes P, QRS, T et la lecture en 1 minute

Sur chaque dérivation, un battement cardiaque normal produit une séquence **stéréotypée** d'ondes, dans cet ordre :

- **Onde P** : petite onde positive, ronde. Elle correspond à la dépolarisation des oreillettes (origine au nœud sinusal en haut de l'oreillette droite). Durée ~80-100 ms.

- **Segment PR** : ligne plate de quelques dizaines de millisecondes. C'est le délai pendant lequel l'influx électrique transite par le nœud auriculo-ventriculaire avant de redescendre dans les ventricules. Cette pause permet aux oreillettes de finir leur contraction avant que les ventricules ne commencent.

- **Complexe QRS** : trois ondes serrées (onde Q négative, R positive ample, S négative) qui correspondent à la dépolarisation des ventricules . C'est le pic le plus visible de l'ECG. Durée normale ≤ 100-120 ms.

- **Segment ST** : ligne plate au niveau de la ligne de base. C'est le plateau du potentiel d'action ventriculaire (entrée de Ca²⁺, plateau à 0 mV).

- **Onde T** : onde positive arrondie qui correspond à la repolarisation des ventricules . Sa forme est asymétrique (montée lente, descente rapide).

[FIGURE physique_ch5_fig08_ecg_normal.png]

**Figure 8** — ECG normal annoté : un battement = onde P (oreillettes) + complexe QRS (ventricules) + onde T (repolarisation ventriculaire). La séquence est universelle et stéréotypée.

**🔑 Lecture d'un ECG normal en 1 minute — Les 5 questions à se poser dans l'ordre**

- **Rythme régulier ?** Les R-R (espacement entre deux complexes QRS) sont-ils constants ?

- **Fréquence cardiaque entre 60 et 100/min ?** Astuce de calcul rapide : compter 300 / (nombre de grands carreaux entre deux R) sur du papier standard à 25 mm/s.

- **Y a-t-il une onde P avant chaque QRS ?** (Signe d'origine sinusale.)

- **Le complexe QRS est-il fin (≤ 120 ms) ?** (Si large, suggère un bloc de branche.)

- **L'onde T est-elle positive et ronde dans les dérivations attendues ?**

Si les 5 réponses sont « oui », tu as devant toi un **rythme sinusal régulier normal**. C'est la base — un médecin de garde fait ce check en moins d'une minute, avant tout examen plus poussé.

**🧪 Mini-exercice — Calcul de la fréquence cardiaqueÉnoncé :** Sur un ECG enregistré à la vitesse standard de 25 mm/s, on mesure 4 grands carreaux (de 5 mm chacun) entre deux complexes QRS successifs. Calcule la fréquence cardiaque en battements par minute.

👁️ Voir la correction

**Correction :**

À 25 mm/s, 1 grand carreau de 5 mm correspond à 5/25 = 0,2 s. Quatre grands carreaux représentent 0,8 s entre deux QRS.

Fréquence cardiaque = 60 / 0,8 = **75 battements/min**.

Astuce rapide à mémoriser : **Fc = 300 / (nombre de grands carreaux)**. Ici : 300 / 4 = 75 bpm. Cette astuce est universelle et permet de donner une fréquence en moins de 2 secondes face à un tracé. La fourchette normale au repos est 60-100/min ; en dessous on parle de bradycardie , au-dessus de tachycardie .

**L'ECG dans la pratique clinique quotidienne.** L'ECG est l'examen complémentaire le plus prescrit dans les services d'urgence et en consultation cardiologique. Il sert à dépister :

- les **troubles du rythme** (fibrillation auriculaire, extrasystoles, tachycardies),

- les **troubles de conduction** (blocs auriculo-ventriculaires, blocs de branche),

- les **signes d'ischémie ou de nécrose myocardique** (sus-décalage ST de l'infarctus, ondes Q de séquelle),

- les **anomalies électrolytiques** (hyperkaliémie avec ondes T pointues, hypokaliémie avec onde U),

- la **surveillance de traitements** (allongement du QT par certains médicaments, risque de torsade de pointes).

Tu le retrouveras absolument partout — c'est probablement, avec la prise de tension et le stéthoscope, l'examen le plus emblématique de la médecine moderne. Et tu comprends maintenant pourquoi : il rend visible, en quelques millivolts à la surface de la peau, toute la cascade électrique qui fait battre un cœur .

## 🎓 Ce que tu emportes

**🚨 ⭐⭐⭐ Les 3 confusions à ABSOLUMENT graver avant l'épreuve**

Les annales et corrections ACC convergent : sur l'aspect physique des membranes, **trois sources de confusion** reviennent en boucle. Si tu les connais par cœur, tu sécurises ~10 % du QCM de physique.

- **Lien œdème ↔ protidémie** (rappel ch.3 + ch.4) — une hypoprotidémie (= manque de protéines plasmatiques) fait chuter la pression oncotique π_o, ce qui déséquilibre Starling et provoque des œdèmes. Ne jamais inverser le sens : **moins de protéines = plus d'œdème**, pas l'inverse.

- **Potentiel de membrane vs Nernst d'un ion isolé** — U_m (mesuré, ~−70 mV) n'est pas égal à E_K (Nernst du K⁺, ~−90 mV) ni à E_Na (~+60 mV) ni à E_Cl (~−80 mV). Le potentiel de membrane est une moyenne pondérée par les perméabilités (intuition Goldman, section II.5). Ne jamais écrire « U_m = E_K » comme si c'était une égalité.

- **Théorie des feuillets (échelle locale) vs mesure à distance (échelle macroscopique)** — la théorie des feuillets décrit chaque élément de surface comme un dipôle ; la mesure à distance est la somme vectorielle de tous ces dipôles. C'est la même physique, à deux échelles différentes. Ne pas opposer les deux comme s'il s'agissait de mécanismes différents.

👉 Ces 3 confusions sont les questions ⭐⭐⭐ de l'ACC 4 . Si tu les écris à l'envers en QCM Vrai/Faux, tu perds 3 questions à la chaîne. Si tu les écris dans le bon sens, tu fais 3/3 en réflexe.

Ce chapitre était transversal — il a fait converger tout ce que tu as construit dans les ch.1 à ch.4 vers une seule et même histoire : celle du **signal électrique cellulaire**. Tu as installé l'outil **vecteurs 2D** (norme, somme, projection), puis tu as posé l'**équation de Nernst** qui donne le potentiel d'équilibre d'un ion (60 mV par décade à 37 °C — la même formule que le potentiel de Donnan du ch.3, sa généralisation directe). Tu as découvert que le potentiel de repos cellulaire (≈ −70 mV) est tellement proche de E_K parce que la membrane au repos est surtout perméable au potassium.

Ensuite tu as suivi le **potentiel d'action** sur ses 4 phases (dépolarisation rapide par entrée massive de Na⁺, repolarisation par sortie de K⁺, hyperpolarisation, retour au repos) et compris la **loi du tout-ou-rien**. Tu as vu que le maintien des gradients ioniques repose sur la **pompe Na⁺/K⁺-ATPase** (3 Na⁺ sortent, 2 K⁺ entrent, 1 ATP brûlé) — l'une des protéines les plus importantes du règne animal, qui consomme à elle seule 30 % du budget énergétique d'une cellule au repos. Tu as compris que le **SRO** (qui sauve des centaines de milliers de vies chaque année) repose entièrement sur le co-transport Na⁺/glucose et l'osmose.

Enfin, tu as bouclé la boucle avec l'**ECG** : un seul vecteur cardiaque, projeté sur 12 axes différents (6 dérivations frontales selon le triangle d'Einthoven + 6 dérivations précordiales), donne le tracé universel que les médecins lisent en une minute partout dans le monde. Les ondes P, QRS et T racontent exactement la séquence : dépolarisation auriculaire, dépolarisation ventriculaire, repolarisation. Tu sais maintenant compter une fréquence cardiaque avec l'astuce des 300 / grands carreaux, et vérifier la cohérence d'un tracé avec D2 = D1 + D3.

Avec les ch.1 à ch.5, tu boucles le Pack 30j : tu as déjà couvert toute la physique des solutions, des membranes, de l'électrophysiologie et de l'imagerie échographique — soit la majeure partie de ce que tu rencontreras au premier semestre de l'année santé. Tu n'arrives plus dans l'inconnu.

MEDEOS — Chapitre 5 : Électrophysiologie, transport épithélial & ECG · medeos-sante.fr

×

medeos-sante.fr