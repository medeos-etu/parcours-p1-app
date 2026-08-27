Chapitre 2 : Le modèle quantique et la configuration électronique - MEDEOS

Chapitre 2

# Le modèle quantique et la configuration électronique

De Broglie, Schrödinger, nombres quantiques et règles de remplissage

## 🎯 Objectifs d'apprentissage

Au chapitre 1, le modèle de Bohr nous a permis de comprendre que l'énergie de l'électron est **quantifiée** (comme les marches d'un escalier). Mais ce modèle ne fonctionne que pour l'hydrogène et les hydrogénoïdes (1 seul électron). Dès qu'il y a 2 électrons ou plus, il s'effondre.

Le **modèle quantique**, développé dans les années 1920, est le modèle qui remplace Bohr. Son idée centrale : l'électron n'est plus sur une orbite précise, mais dans un **nuage de probabilité** appelé **orbitale**.

**💡 Bonne nouvelle :** Même si la théorie est abstraite, les **applications pratiques** (nombres quantiques, configuration électronique, exceptions) sont très concrètes et représentent la majorité des QCM sur ce chapitre !

À la fin de ce chapitre, tu seras capable de :

- Expliquer pourquoi le modèle de Bohr ne suffit plus

- Énoncer les principes de De Broglie et Heisenberg

- Décrire le rôle de la fonction d'onde ψ et de |ψ|²

- Maîtriser les 4 nombres quantiques (n, l, mₗ, mₛ)

- Écrire la configuration électronique de n'importe quel atome

- Identifier les exceptions (Cr, Cu, Ag…) et le magnétisme

**📚 Lien avec le chapitre précédent** : En chapitre 1, tu as vu que l'énergie des électrons est quantifiée (modèle de Bohr, Eₙ = −13,6/n²). Ici, on va comprendre **pourquoi** elle est quantifiée grâce à la mécanique quantique, et surtout comment **remplir les électrons** dans les atomes à plusieurs électrons — c'est ça qui tombe massivement en première année !

## I. Pourquoi un nouveau modèle ? Les limites de Bohr

**🤔 Question clé :** Le modèle de Bohr fonctionne parfaitement pour l'hydrogène. Alors pourquoi l'abandonner ?

Parce qu'en réalité, la quasi-totalité des atomes ont **plusieurs électrons** (le carbone en a 6, le fer en a 26, l'oxygène en a 8…). Et dès qu'on ajoute un deuxième électron, le modèle de Bohr s'effondre :

### Les 3 problèmes du modèle de Bohr

**1️⃣ Problème des atomes polyélectroniques**

Dans le modèle de Bohr, on ne considère que l'attraction noyau-électron. Mais quand il y a plusieurs électrons, ils se **repoussent entre eux** (charge − / charge −). Cette **répulsion e⁻/e⁻** rend le calcul impossible avec des orbites circulaires simples.

**2️⃣ Problème des spectres**

Les spectres des atomes à plusieurs électrons sont beaucoup plus complexes que celui de l'hydrogène. Bohr ne peut pas les prédire.

**3️⃣ Problème théorique**

Bohr postule que l'électron tourne sur des orbites circulaires, mais il ne dit jamais **pourquoi**. Pourquoi circulaires ? Pourquoi l'énergie serait quantifiée ? Il manque une justification profonde.

La **mécanique quantique** (ou mécanique ondulatoire) apporte les réponses à ces 3 problèmes. Elle abandonne complètement l'approche de Bohr (qui utilisait encore des trajectoires circulaires et des concepts classiques) et repose sur deux principes fondamentaux.

#### 🧬 Mécanique classique vs quantique — Le changement de vision

|

|
| Mécanique classique (Bohr)
| Mécanique quantique (actuel)

| **L'électron est…**
| une particule (comme une bille)
| à la fois particule **et** onde

| **On peut connaître…**
| sa position et sa vitesse exactes
| seulement sa **probabilité de présence**

| **Il se trouve sur…**
| une **orbite** (trajectoire précise)
| une **orbitale** (nuage de probabilité)

| **Fonctionne pour…**
| H et hydrogénoïdes uniquement
| **Tous les atomes**

#### ⚠️ Piège classique — Orbite ≠ Orbitale

Ces deux mots se ressemblent mais désignent des choses très différentes :

- **Orbite** (Bohr) = trajectoire circulaire précise, comme la Terre autour du Soleil

- **Orbitale** (quantique) = zone de l'espace où la probabilité de trouver l'électron est élevée (nuage)

En QCM, si une proposition dit « l'électron tourne sur une orbite » → c'est le modèle de Bohr, pas le modèle quantique !

## II. De Broglie et Heisenberg : les deux principes fondateurs

La mécanique quantique repose sur **deux principes** qui changent radicalement notre vision de la matière à l'échelle atomique.

### Dualité onde-corpuscule (De Broglie, 1924)

**🤔 Le problème de Bohr :** Dans le modèle de Bohr, l'électron était une **particule** qui tournait sur des orbites circulaires. Bohr imposait des règles de quantification (seules certaines orbites sont permises) sans vraiment comprendre **pourquoi**.

🚫 **Problème :** Pourquoi l'électron peut être sur n=1, n=2, n=3... mais JAMAIS entre deux (n=1,5 par exemple) ? Bohr dit « c'est la règle », mais il ne sait pas pourquoi.

**💡 L'idée révolutionnaire de De Broglie (1924) :**

Au chapitre 1, on a vu que la lumière transporte l'énergie sous forme de **photons** (petits paquets discrets). De Broglie se demande :

💭 « Et si l'électron n'était pas juste une bille qui tourne...

...mais qu'il se **comportait aussi comme une onde** ? »

**⇒ De Broglie propose :** Toute particule en mouvement (électron, atome, etc.) possède une **longueur d'onde λ** associée à sa vitesse.

#### 💡 Analogie simple : les marches d'un escalier

**Imagine un escalier :**

- Tu peux être sur la **marche 1** (rez-de-chaussée)

- Tu peux être sur la **marche 2** (première marche)

- Tu peux être sur la **marche 3** (deuxième marche)

- **Mais tu ne peux PAS être entre deux marches** (entre la marche 2 et 3 par exemple)

✓ Marche 1, 2, 3, 4...

✗ Marche 1.5, 2.7, 3.2...

💡 **Résultat :** Les positions possibles sont **discrètes** (quantifiées). Tu es sur UNE marche précise, jamais entre deux.

⇒ **L'électron autour du noyau, c'est pareil !**

Bohr disait « l'électron peut être sur l'orbite n=1, 2, 3... mais JAMAIS entre deux » sans expliquer pourquoi.

**De Broglie trouve la réponse :** Si l'électron est une onde, cette onde ne peut faire le tour de l'orbite que si elle "tombe juste" (comme une marche qui a une hauteur fixe). Certaines tailles d'orbites marchent (n=1, 2, 3...), d'autres non (n=1,5...) → c'est quantifié naturellement !

#### 🔑 Mais POURQUOI une onde crée la quantification ? (le mécanisme physique)

OK, De Broglie dit "l'électron est une onde". Mais pourquoi ça implique n=1, 2, 3 et pas n=1,5 ?

💡 Contrainte physique : L'onde doit "se refermer sur elle-même"

L'électron-onde fait le tour du noyau (comme une boucle). Pour que l'onde soit **stable**, il faut qu'après un tour complet, elle retombe exactement sur elle-même (sinon elle s'annule par interférence destructive).

Exemple visuel (imagine une vague sur un cercle) :

- **Si la circonférence = 1 longueur d'onde (1λ)** → l'onde fait 1 tour et retombe pile sur elle-même → ✅ **STABLE** (n=1)

- **Si la circonférence = 2 longueurs d'onde (2λ)** → l'onde fait 2 bosses, retombe pile sur elle-même → ✅ **STABLE** (n=2)

- **Si la circonférence = 3 longueurs d'onde (3λ)** → 3 bosses, retombe pile → ✅ **STABLE** (n=3)

- **Si la circonférence = 1,5 longueurs d'onde (1,5λ)** → après 1 tour, l'onde ne retombe PAS sur elle-même → elle se détruit par interférence → ❌ **IMPOSSIBLE⇒ Résultat :** Seules les orbites dont la circonférence vaut **un nombre entier de longueurs d'onde** (1λ, 2λ, 3λ...) peuvent exister. C'est pour ça qu'on a n=1, 2, 3... et JAMAIS n=1,5 !

💡 **Analogie :** C'est comme une corde de guitare : seules certaines longueurs d'onde "rentrent" dans la longueur de la corde. Tu peux avoir 1 bosse, 2 bosses, 3 bosses... mais jamais 1,5 bosse ! Ici, c'est pareil mais sur un cercle au lieu d'une ligne droite.

#### 🎯 Pourquoi c'est révolutionnaire ?

**Le problème avant De Broglie :**

- Bohr observe que l'atome ne marche que si les orbites sont quantifiées (n=1, 2, 3...)

- Mais il ne sait PAS POURQUOI → il pose juste une règle sans explication physique

- C'est comme dire « la nature a décidé que seules ces orbites existent » sans comprendre le mécanisme

**La révolution de De Broglie (1924) :**

- Il donne une **explication physique** : si l'électron se comporte comme une onde, la quantification devient logique !

- Les orbites quantifiées ne sont plus une règle mystérieuse, mais une **conséquence naturelle** du caractère ondulatoire

- C'est comme si Bohr avait dit « les notes de musique sont Do, Ré, Mi... » et De Broglie explique « c'est parce que la corde vibre d'une certaine façon ! »

#### 🔬 Comment on sait que De Broglie a raison ?

**Preuve expérimentale (1927) :** Trois ans après la proposition de De Broglie, des physiciens (Davisson & Germer) envoient un faisceau d'électrons sur un cristal.

**Résultat observé :**

- Les électrons ne se comportent PAS comme des balles de ping-pong (qui rebondiraient dans tous les sens)

- Ils forment des **figures de diffraction**, exactement comme des ondes lumineuses !

- On peut même **mesurer leur longueur d'onde λ** → elle correspond exactement à la formule de De Broglie

💡 **C'est quoi la diffraction ?** (à ne pas confondre avec la réfraction !)

La **diffraction** = quand une onde rencontre un obstacle, elle ne rebondit pas comme une balle, elle se "disperse" et forme des motifs réguliers (alternance de zones claires et sombres).

Seule une **onde** peut faire ça. Si les électrons étaient juste des petites billes, ils rebondiraient n'importe comment, sans motif régulier.

⇒ On observe ces motifs avec des électrons → **preuve directe que l'électron se comporte comme une onde**. La diffraction ne crée pas les couches/orbites, elle PROUVE que De Broglie avait raison quand il disait « l'électron est une onde ».

#### 📐 Le lien avec la longueur d'onde λ

**Formule de De Broglie :** λ = h / (m×v)

- **h** = constante de Planck (très petite)

- **m** = masse de la particule

- **v** = vitesse de la particule

**Que dit cette formule concrètement ?**

🧮 Logique mathématique :

La formule λ = h / (m×v) est une **division**. Donc :

- **Si m diminue** (particule plus légère) → le dénominateur (m×v) diminue → **λ augmente** ✅

- **Si v augmente** (particule plus rapide) → le dénominateur (m×v) augmente → **λ diminue** ✅

💡 Rappel maths : dans une fraction a/b, si b augmente, alors a/b diminue (exemple : 10/2 = 5, mais 10/5 = 2).

- **Plus la particule est légère** → plus λ est grande → **effets d'onde observables en labo**

- **Plus la particule va vite** → plus λ est petite → effets d'onde trop petits pour être observés

❓ C'est quoi concrètement un "effet d'onde" ?

**Expérience simple :**

Tu envoies des électrons un par un vers un écran. Si c'étaient des balles, ils arriveraient n'importe où de façon aléatoire.

**Mais non !** Ils arrivent en formant des **zones préférées** (bandes régulières), exactement comme des vagues qui créent des zones où l'eau monte beaucoup et d'autres où elle reste calme.

**Pourquoi parfois on ne voit pas cet effet ?**

Imagine que tu regardes des vagues :

- **Vague de 1 mètre de haut** → tu la vois facilement, elle crée des motifs clairs sur la plage

- **Vague de 0,000000000001 mm de haut** → elle existe techniquement, mais elle est tellement petite que tu ne peux rien observer → l'eau te semble plate

⇒ **C'est pareil pour les particules :**

• **Électron** : λ = 10⁻¹⁰ m → "vague assez grande" → on observe les bandes régulières

• **Balle** : λ = 10⁻³⁴ m → "vague ridiculement petite" → on ne voit aucun motif, la balle se comporte comme... une balle

**Exemples concrets :**

- **Électron (très léger, vitesse normale)** : λ ≈ 10⁻¹⁰ m → comportement d'onde **très mesurable** en laboratoire

- **Balle de tennis (lourde, vitesse normale)** : λ ≈ 10⁻³⁴ m → longueur d'onde ridiculement petite, impossible à détecter → on ne voit QUE le comportement de particule

####
💡
Idée clé à retenir absolument !

Une balle de tennis qui se déplace "ondule" aussi !**

Oui, tu as bien lu : quand tu lances une balle, elle crée une **"vague de matière"** associée à son mouvement. Ce n'est pas une vague dans l'air ou dans l'eau, c'est une **onde de probabilité** qui accompagne la balle.

**Pourquoi on ne le voit jamais ?**

- La balle a une **masse énorme** comparée à un électron

- Donc sa longueur d'onde λ = h/(m×v) est **ridiculement petite** : λ ≈ 10⁻³⁴ m

- C'est **un milliard de milliards de fois plus petit qu'un atome** !

- Résultat : impossible à observer en pratique → on ne voit qu'un **trajet linéaire** (comme en physique classique)

⇒ **Conclusion :** TOUTE particule en mouvement (électron, balle, toi-même !) possède une longueur d'onde λ et "ondule". Mais seules les particules **très légères** (électrons, atomes) ont un λ assez grand pour qu'on puisse observer des effets d'onde en laboratoire.

⚠️ **Important :** La balle de tennis a AUSSI une longueur d'onde λ (car la formule s'applique à TOUTE particule), mais elle est tellement petite qu'on ne peut jamais l'observer. C'est pour ça qu'on dit que **l'aspect ondulatoire est négligeable pour les objets massifs**.

**🔑 Conclusion :** De Broglie n'a pas juste dit « l'électron est aussi une onde », il a donné une **formule précise** qui permet de calculer λ, et cette formule a été **vérifiée expérimentalement** ! C'est pour ça qu'on sait qu'il a raison. Et cette découverte explique ENFIN pourquoi les orbites de Bohr sont quantifiées : c'est une propriété naturelle des ondes qui doivent « rentrer » dans l'espace disponible autour du noyau.

#### 📐 Relation de De Broglie

**λ = h / (m × v)🔍 Décryptage :**

- **λ** (lambda) = longueur d'onde associée à la particule (en mètres)

- **h** = 6,63 × 10⁻³⁴ J·s (constante de Planck — la même que pour les photons !)

- **m** = masse de la particule (en kg)

- **v** = vitesse de la particule (en m/s)

**💡 Ce que dit la formule :**

- Plus la particule est **légère** (m petit) → plus λ est grand → comportement ondulatoire marqué

- Plus la particule est **lourde** (m grand) → plus λ est minuscule → comportement « classique »

C'est pour ça que l'électron (très léger) a un comportement ondulatoire visible, mais toi qui pèses 60 kg, ta λ est si minuscule qu'elle est indétectable !

#### ⚠️ Piège classique — Ne pas confondre les deux λ

Deux formules utilisent λ, mais pour des choses différentes :

- **λ = h/(m×v)** → longueur d'onde de **De Broglie** = associée à une **particule matérielle** en mouvement

- **E = hc/λ** → énergie d'un **photon** = associée à de la **lumière** (chapitre 1)

Ce sont deux formules différentes ! La première concerne un électron, la seconde un photon.

✏️ **Vérifie tout de suite** — Un électron (m ≈ 10⁻³⁰ kg) se déplace à v = 2 × 10⁶ m/s.

❓ Calcule sa longueur d'onde de De Broglie λ. (On arrondit la masse de l'électron pour simplifier le calcul mental : 9,1×10⁻³¹ ≈ 10⁻³⁰)

💡 Voir la correction

**Application de la formule :**

λ = h / (m × v)

m × v = 10⁻³⁰ × 2×10⁶ = **2 × 10⁻²⁴**

λ = 6,63×10⁻³⁴ / (2×10⁻²⁴)

Astuce mentale : 6,63 / 2 ≈ 3,3 et 10⁻³⁴ / 10⁻²⁴ = 10⁻¹⁰

λ ≈ **3,3 × 10⁻¹⁰ m** ≈ 0,33 nm

**💡 Conclusion :** λ ≈ 0,3 nm, c'est du même ordre que la taille d'un atome (≈ 0,1 nm) ! Le comportement ondulatoire de l'électron est donc bien réel à l'échelle atomique.

### Principe d'incertitude (Heisenberg, 1927)

**🤔 Le problème :** Si l'électron est à la fois une particule et une onde, peut-on connaître sa position et sa vitesse en même temps ?

**💡 Analogie :** Imagine que tu essaies de photographier une voiture de F1 en pleine course :

- Si tu utilises un temps d'exposition **très court** (photo nette) → tu sais exactement **où** elle est, mais tu ne vois pas à quelle **vitesse** elle roule

- Si tu utilises un temps d'exposition **long** (photo floue) → tu vois la **vitesse** (tracé du mouvement), mais tu ne sais plus **où** exactement

Heisenberg démontre que c'est pareil pour l'électron, mais ce n'est pas une limitation technique : c'est une **loi fondamentale de la nature**.

#### 📐 Principe d'incertitude de Heisenberg

##### 🤔 Le problème qu'on essaie de résoudre

Pour décrire un objet en mouvement (une voiture, un électron...), on veut connaître deux choses :

- **Où il est** (position x)

- **À quelle vitesse il va** (vitesse v)

Avec ces deux infos, tu peux prédire où l'objet sera dans 1 seconde, 1 minute, etc.

⚠️ Problème : Heisenberg découvre qu'à l'échelle quantique (électrons, atomes), c'est **physiquement impossible** de connaître les deux en même temps avec précision !

##### 📷 Analogie : photographier une voiture en mouvement

**Situation 1 : Photo ultra-rapide (temps d'exposition = 1/10000 s)**

- ✅ L'image est **nette** → tu vois exactement **où est la voiture** (position précise)

- ❌ Mais l'image est figée → tu ne peux PAS mesurer sa **vitesse** (elle semble immobile)

⇒ Position précise (Δx petit) → Vitesse floue (Δv grand)

**Situation 2 : Pose longue (temps d'exposition = 2 secondes)**

- ✅ Tu vois une **traînée lumineuse** → tu peux mesurer la **vitesse** (longueur de la traînée divisée par le temps)

- ❌ Mais l'image est floue → tu ne sais PAS exactement **où est la voiture** sur la photo

⇒ Vitesse précise (Δv petit) → Position floue (Δx grand)

💡 **Pour la voiture** : c'est juste un problème de technique de mesure. En théorie, tu peux connaître les deux parfaitement.

💡 **Pour l'électron** : Heisenberg démontre que c'est **physiquement impossible**, même avec la technologie parfaite ! C'est une limite de la nature elle-même.

##### 🔢 La formule mathématique

**Δx × Δv ≥ h / (2&pi; × m)**

(Note : &pi; = pi ≈ 3,14 ; h = constante de Planck ; m = masse de la particule)

🔍 Ce que ça veut dire concrètement :

- **Δx** = taille de la "zone floue" où l'électron peut être (en mètres)

- **Δv** = imprécision sur la vitesse de l'électron (en m/s)

- **m** = masse de la particule (électron, atome, etc.) en kg

- **Le signe ≥** signifie "plus grand ou égal"

⇒ Le produit Δx × Δv ne peut JAMAIS être plus petit que h/(2πm)

Traduction : Si tu réduis Δx (zone plus petite → position plus précise), alors Δv DOIT augmenter automatiquement (vitesse moins précise). C'est une **loi de compensation obligatoire**.

##### 💡 Conséquences pratiques

Exemple concret avec un électron :

- **Si tu localises l'électron dans une zone de 10⁻¹⁰ m** (taille d'un atome) → son Δv devient énorme → impossible de connaître sa vitesse précisément

- **Résultat** : Tu ne peux JAMAIS dessiner une "trajectoire" (ligne précise) pour l'électron !

- ⇒ On abandonne l'idée d'**orbite** (trajectoire définie) et on passe aux **orbitales** (zones de probabilité)

**💡 Ce que dit la formule en résumé :**

- Si Δx est **petit** (on sait bien où il est) → Δv doit être **grand** (on ne sait pas sa vitesse)

- Si Δv est **petit** (on sait bien sa vitesse) → Δx doit être **grand** (on ne sait pas où il est)

- On ne peut **jamais** connaître les deux en même temps avec précision !

#### 💡 Variante de la formule (avec la quantité de mouvement)

Tu verras parfois la formule écrite différemment dans les livres ou en TD :

Δx × Δp ≥ h / (2&pi;)

🤔 C'est quoi "p" ?

**p** = quantité de mouvement = **m × v**

- C'est une grandeur physique qui combine masse et vitesse

- Exemple : un camion lent (masse énorme) peut avoir la même quantité de mouvement qu'une balle rapide (masse petite)

🔄 Comment passer d'une formule à l'autre ?

**Formule 1 :** Δx × Δv ≥ h / (2&pi; × m)

**Formule 2 :** Δx × Δp ≥ h / (2&pi;)

Si tu multiplies les deux côtés de la **Formule 1** par **m** :

Δx × (m × Δv) ≥ h / (2&pi;)

Δx × Δp ≥ h / (2&pi;) ✅

(car Δp = m × Δv → l'incertitude sur p, c'est m fois l'incertitude sur v)

⚠️ **En première année :** Les deux formules sont équivalentes et tu peux voir l'une ou l'autre selon les profs. Retiens juste que **Δp = m × Δv** et tu pourras passer de l'une à l'autre !

#### 🧬 Conséquence fondamentale des deux principes

De Broglie + Heisenberg = deux conclusions qui changent tout :

- L'électron a un comportement **ondulatoire** (De Broglie) → on ne peut plus le voir comme une bille sur un rail

- On **ne peut plus connaître sa trajectoire** (Heisenberg) → la notion d'orbite n'a plus de sens

**⇒ On remplace l'orbite (trajectoire) par l'orbitale (zone de probabilité).**

C'est ce que Schrödinger va formaliser dans la section suivante.

## III. L'équation de Schrödinger et les orbitales atomiques

**🤔 Le défi :** On sait maintenant que l'électron se comporte comme une onde et qu'on ne peut pas connaître sa trajectoire. Comment, alors, le décrire mathématiquement ?

### L'équation de Schrödinger (1926)

##### 🎯 Le but de Schrödinger

On a vu avec De Broglie que l'électron est une onde. Mais comment décrire mathématiquement cette onde ? Comment calculer où l'électron peut être ?

⇒ Schrödinger écrit une équation (comme F = ma en physique classique) qui permet de calculer le comportement ondulatoire de l'électron.

#### 📐 Équation de Schrödinger (forme simplifiée)

**Ĥψ = Eψ**

🔍 C'est quoi tous ces symboles ?

**ψ (psi) = la fonction d'onde**

C'est une fonction mathématique ψ(x,y,z) qui dépend des coordonnées dans l'espace. Elle décrit "l'onde-électron" autour du noyau.

💡 Pense à ψ comme une "carte 3D" qui dit "l'onde a telle amplitude à tel endroit".

**E = l'énergie de l'électron**

C'est un nombre (en Joules). Chaque solution de l'équation donne une valeur de E possible.

**Ĥ = l'opérateur hamiltonien**

C'est un "calculateur d'énergie" : tu lui donnes ψ, il te donne E.

💡 En première année : retiens juste que **Ĥ = l'énergie totale du système**. Tu n'as pas besoin de savoir calculer Ĥψ !

📝 Comment on utilise cette équation ?

- On écrit l'équation Ĥψ = Eψ pour un atome donné (H, He, Li...)

- On la résout (avec des maths très compliquées !)

- **On obtient les solutions :**

- **Les valeurs de E possibles** : E₁, E₂, E₃... (niveaux d'énergie quantifiés)

- **Les fonctions ψ correspondantes** : ψ₁(x,y,z), ψ₂(x,y,z), ψ₃(x,y,z)... = **les orbitales atomiques**

🔗 Lien avec le Chapitre 1 (Bohr)

Tu te souviens au Ch1 ? Bohr avait trouvé des niveaux d'énergie quantifiés E₁, E₂, E₃... pour l'atome d'hydrogène, mais sans vraie justification (juste des postulats/règles).

✅ Avec l'équation de Schrödinger, on **retrouve exactement les mêmes niveaux E₁, E₂, E₃...** mais cette fois de façon rigoureuse et justifiée mathématiquement !

**Bonus :** Schrödinger donne aussi les fonctions ψ (les orbitales atomiques qu'on verra juste après) que Bohr ne pouvait pas décrire. C'est une théorie beaucoup plus complète !

⚠️ **En première année :** Tu n'as PAS à résoudre cette équation ! Les maths sont trop complexes. Mais tu dois comprendre :

- ✅ Que ψ est la "carte d'identité quantique" de l'électron (sa fonction d'onde)

- ✅ Que résoudre l'équation donne les niveaux d'énergie E (comme chez Bohr) ET les orbitales atomiques

- ✅ Que ψ² (au carré) donne la probabilité de trouver l'électron à un endroit donné

### La fonction d'onde ψ et la probabilité de présence

**🤔 Question clé :** Si on ne peut pas connaître la trajectoire de l'électron, que nous dit ψ exactement ?

**💡 Analogie :** Imagine un radar météo. Il ne dit pas « la goutte de pluie sera exactement là », mais il donne une **carte de probabilité** : zones rouges = forte probabilité de pluie, zones bleues = faible probabilité. La fonction ψ fait pareil pour l'électron.

#### 📐 Densité de probabilité

**dP = |ψ(x,y,z)|² × dV🔍 Décryptage :**

- **dP** = probabilité de trouver l'électron dans un petit volume dV

- **|ψ|²** = densité de probabilité de présence

- **dV** = petit élément de volume autour du point (x,y,z)

**⚠️ Attention :**

- ψ elle-même **n'a pas de signification physique directe**

- C'est **|ψ|²** qui a un sens : la densité de probabilité

- On intègre sur tout l'espace : ∫|ψ|²dV = 1 (l'électron est **quelque part** !)

#### ⚠️ Piège classique — ψ vs |ψ|²

Une question classique : « ψ représente la probabilité de présence de l'électron. » → **FAUX !**

C'est **|ψ|²** qui représente la **densité** de probabilité de présence. Et la probabilité elle-même, c'est **dP = |ψ|²dV** (il faut multiplier par le volume).

### Les Orbitales Atomiques (OA)

**🤔 Définition :** Une orbitale atomique (OA) est la **région de l'espace** où la probabilité de trouver l'électron est **≥ 95%**. Chaque OA est décrite par une fonction ψ.

#### Comment nomme-t-on une orbitale ?

On écrit toujours une OA sous la forme : chiffre + lettre**

Exemples : **1s**, **2s**, **2p**, **3d**, **4f**...

|

| Partie
| Ce que c'est
| Exemple : **3d**

| **Le chiffre = n**
| Le numéro de la **couche** (1, 2, 3, 4...)
Plus n est grand → OA plus grande, électron plus loin du noyau
| **3** → couche n°3

| **La lettre = type d'OA**
| Détermine la **forme** de l'orbitale
Chaque lettre correspond à un nombre **l** : s=0, p=1, d=2, f=3
| **d** → forme 4 lobes (l=2)

#### Les différentes formes d'OA (déterminées par la lettre / par l) :

|

| Type d'OA
| Valeur de l
| Forme
| Nombre par couche
| Schéma

| **s**
| l = 0
| Sphérique (boule)
| 1 seule
| ⬤

| **p**
| l = 1
| Deux lobes (haltère)
| 3 (p x , p y , p z )
| ∞ (double lobe)

| **d**
| l = 2
| Quatre lobes (trèfle)
| 5
| ✦ (4 lobes)

| **f**
| l = 3
| Forme complexe (8 lobes)
| 7
| ✱ (complexe)

[FIGURE ch2-formes-orbitales.png]

**Schéma** — Les 4 types d'orbitales atomiques : s (sphérique), p (2 lobes), d (4 lobes), f (complexe)

#### 💡 Moyen mnémotechnique — s, p, d, f

Les lettres viennent de la spectroscopie historique :

- **s** = sharp (l=0)

- **p** = principal (l=1)

- **d** = diffuse (l=2)

- **f** = fundamental (l=3)

Retiens simplement : **l=0 → sphère, l=1 → 2 lobes, l=2 → 4 lobes, l=3 → 8 lobes**.

#### Les surfaces nodales

**🤔 C'est quoi ?** Une surface nodale est une **surface où la probabilité de trouver l'électron est nulle** (ψ = 0). C'est comme une « frontière invisible » que l'électron ne traverse jamais.

#### 📐 Nombre de surfaces nodales

- Nombre **total** de surfaces nodales = **n − 1**

- Surfaces nodales **planes** (plans) = **l**

- Surfaces nodales **sphériques** (couches) = **n − l − 1📋 Exemples :**

- **OA 1s** (n=1, l=0) :

- Total = n − 1 = 1 − 1 = **0 surface nodale** (pas de zéro)

- **OA 2s** (n=2, l=0) :

- Total = n − 1 = 2 − 1 = **1 surface nodale**

- Planes = l = 0 → **0 plan nodal**

- Sphériques = n − l − 1 = 2 − 0 − 1 = **1 surface nodale sphérique**

- **OA 2p** (n=2, l=1) :

- Total = n − 1 = 2 − 1 = **1 surface nodale**

- Planes = l = 1 → **1 plan nodal**

- Sphériques = n − l − 1 = 2 − 1 − 1 = **0 surface nodale sphérique**

- **OA 3d** (n=3, l=2) :

- Total = n − 1 = 3 − 1 = **2 surfaces nodales**

- Planes = l = 2 → **2 plans nodaux**

- Sphériques = n − l − 1 = 3 − 2 − 1 = **0 surface nodale sphérique**

✏️ **Vérifie tout de suite** — Pour les OA suivantes, donne le nombre de surfaces nodales (total, angulaires, sphériques) :

- OA 4s

- OA 3p

- OA 4d

- OA 4f

💡 Voir la correction

|

| OA
| n
| l
| Total (n−1)
| Angulaires (l)
| Sphériques (n−l−1)

| 4s
| 4
| 0
| **3**
| 0
| **3**

| 3p
| 3
| 1
| **2**
| 1
| **1**

| 4d
| 4
| 2
| **3**
| 2
| **1**

| 4f
| 4
| 3
| **3**
| 3
| **0💡 Astuce :** Remarque que le total est **toujours n−1**, quelle que soit la sous-couche. Et 4s et 4f ont le même nombre total de surfaces nodales (3), mais réparties différemment !

## IV. Les quatre nombres quantiques

On a déjà vu **n** (le numéro de couche) et **l** (la forme de l'OA). Mais pour décrire complètement un électron, il faut **4 nombres quantiques** au total — comme une adresse postale complète : pays → ville → rue → numéro de porte.

#### 📐 Les 4 nombres quantiques — Vue d'ensemble

|

| Nombre
| Symbole
| Signification
| Valeurs possibles
| Analogie

| **Principal**
| **n**
| Couche / taille de l'OA
| n = 1, 2, 3, 4... (entier > 0)
| 🏢 L'étage de l'immeuble

| **Azimutal (secondaire)**
| **l**
| Sous-couche / forme de l'OA
| l = 0, 1, 2... (n−1)
| 🚪 L'appartement à cet étage

| **Magnétique**
| **m l **
| Orientation de l'OA
| m l = −l, ..., 0, ..., +l
| 🛋️ La pièce dans l'appartement

| **Spin**
| **s (ou m s )**
| Rotation propre de l'électron
| s = +1/2 (↑) ou −1/2 (↓)
| 👤 La personne (max 2 par pièce)

### Détail de chaque nombre quantique

#### 1. Nombre quantique principal n

- **Valeurs :** n = 1, 2, 3, 4, 5, 6, 7 (entier strictement positif)

- **Détermine :** la couche électronique et l'énergie (principalement)

- Plus n est grand → OA plus **grande** et électron plus **loin** du noyau

- Chaque couche n contient **n²** orbitales atomiques

- Chaque couche n peut accueillir **2n²** électrons maximum

**📌 Notation historique — K, L, M, N...**

Historiquement, les couches sont aussi désignées par des lettres (provenant de la spectroscopie des rayons X) :

- **n = 1** → couche **K**

- **n = 2** → couche **L**

- **n = 3** → couche **M**

- **n = 4** → couche **N**

- Puis O, P, Q... (rarement utilisées)

**💡 À retenir :** Les deux notations sont équivalentes. On dit « couche n=2 » ou « couche L », c'est pareil !

#### 2. Nombre quantique azimutal l (ou secondaire)

**🎯 Rôle :** Détermine la **forme** de l'orbitale (s, p, d, f) — c'est ce qu'on a vu dans le tableau des formes d'OA !

**Valeurs possibles :** l = 0, 1, 2, ... jusqu'à (n−1)

⚠️ **Règle importante :** l dépend de n ! On ne peut pas avoir n'importe quelle valeur de l pour un n donné.

📌 Correspondance l ↔ lettre (déjà vue) :

- l = 0 → orbitale de type **s** (sphère)

- l = 1 → orbitale de type **p** (2 lobes)

- l = 2 → orbitale de type **d** (4 lobes)

- l = 3 → orbitale de type **f** (complexe)

📋 Quelles valeurs de l sont possibles pour chaque n ?

|

| Couche (n)
| Valeurs de l possibles
| Sous-couches (orbitales) disponibles

| **n = 1**
| l = 0 seulement
| **1s** uniquement

| **n = 2**
| l = 0 ou 1
| **2s** et **2p**

| **n = 3**
| l = 0, 1 ou 2
| **3s**, **3p** et **3d**

| **n = 4**
| l = 0, 1, 2 ou 3
| **4s**, **4p**, **4d** et **4f💡 Astuce :** Pour la couche n, il y a **n types d'orbitales** possibles (n valeurs de l différentes).

#### 3. Nombre quantique magnétique m l

**🎯 Rôle :** Détermine l'**orientation** de l'orbitale dans l'espace (axe x, y ou z pour les p par exemple).

**Valeurs possibles :** m l va de **−l** jusqu'à **+l** (en passant par 0)

🔢 Formule du nombre de valeurs :

Il y a **(2l+1)** valeurs possibles de m l → donc **(2l+1) orbitales** par sous-couche

📋 Exemples concrets :

**Orbitale de type s (l=0) :**

- m l va de −0 à +0 → **m l = 0** seulement

- Nombre de valeurs = 2l+1 = 2(0)+1 = **1**

- Conclusion : **1 seule orbitale s** (la sphère ne peut pas s'orienter différemment)

**Orbitale de type p (l=1) :**

- m l va de −1 à +1 → **m l = −1, 0, +1**

- Nombre de valeurs = 2l+1 = 2(1)+1 = **3**

- Conclusion : **3 orbitales p** (p x , p y , p z selon les 3 axes)

**Orbitale de type d (l=2) :**

- m l va de −2 à +2 → **m l = −2, −1, 0, +1, +2**

- Nombre de valeurs = 2l+1 = 2(2)+1 = **5**

- Conclusion : **5 orbitales dOrbitale de type f (l=3) :**

- m l va de −3 à +3 → **m l = −3, −2, −1, 0, +1, +2, +3**

- Nombre de valeurs = 2l+1 = 2(3)+1 = **7**

- Conclusion : **7 orbitales f💡 Exemple concret avec une sous-couche complète :**

La sous-couche **4f** (n=4, l=3) contient donc **7 orbitales 4f** différentes, toutes de forme f mais orientées différemment dans l'espace. Chacune peut accueillir 2 électrons → maximum **14 électrons dans 4f**.

📊 Tableau récapitulatif :

|

| Sous-couche
| l
| Valeurs de m l
| Nombre d'OA
(2l+1)

| **s** | 0 | 0 | 1

| **p** | 1 | −1, 0, +1 | 3

| **d** | 2 | −2, −1, 0, +1, +2 | 5

| **f** | 3 | −3, −2, −1, 0, +1, +2, +3 | 7

[FIGURE ch2-sous-couche-p-orbitales.png]

**Schéma** — Exemple de la sous-couche 2p : 3 orbitales p orientées différemment (m l = -1, 0, +1)

#### 4. Nombre quantique de spin s (ou m s )

**🎯 Rôle :** Caractérise la **rotation propre** de l'électron sur lui-même (comme une toupie qui tourne).

🔢 Deux valeurs possibles :

- **s = +1/2** → spin « **up** » → noté **↑**

- **s = −1/2** → spin « **down** » → noté **↓**

🏠 Règle du logement — Maximum 2 électrons par orbitale

Une orbitale atomique est comme une **chambre** qui peut accueillir **au maximum 2 électrons**, mais ils doivent avoir des spins **opposés** (↑↓).

**Exemples :**

- OA 1s peut contenir : **0, 1 ou 2 électrons**

- Si 2 électrons dans 1s : obligatoirement **↑↓** (un +1/2, un −1/2)

- ❌ On ne peut PAS avoir deux électrons ↑↑ dans la même OA (interdit par le principe d'exclusion de Pauli)

💡 Propriété intrinsèque

Le spin est une propriété **intrinsèque** de l'électron (il "l'a en lui").

→ Il ne dépend **ni de n** (couche), **ni de l** (forme), **ni de m l ** (orientation)

→ C'est une propriété qui appartient à l'**électron lui-même**, pas à l'orbitale

✏️ **Vérifie tout de suite** — Pour la couche n=3 :

- Quelles sont les sous-couches possibles ?

- Combien d'OA au total dans cette couche ?

- Combien d'électrons maximum ?

- Donne tous les triplets (n, l, m l ) possibles.

💡 Voir la correction

**1. Sous-couches :** l = 0, 1, 2 → **3s, 3p, 3d2. Nombre d'OA :**

- 3s : 1 OA

- 3p : 3 OA

- 3d : 5 OA

- Total = 1 + 3 + 5 = **9 OA** (= n² = 3² = 9 ✓)

**3. Électrons max :** 2 × 9 = **18 électrons** (= 2n² = 2×9 = 18 ✓)

**4. Tous les triplets (n, l, m l ) :**

|
| Sous-couche | n | l | m l

| 3s | 3 | 0 | 0

| 3p | 3 | 1 | −1

| 3p | 3 | 1 | 0

| 3p | 3 | 1 | +1

| 3d | 3 | 2 | −2

| 3d | 3 | 2 | −1

| 3d | 3 | 2 | 0

| 3d | 3 | 2 | +1

| 3d | 3 | 2 | +2

**💡** 9 triplets = 9 OA. Chaque triplet (n, l, m l ) identifie une OA unique. Avec le spin (±1/2), on obtient 18 quadruplets = 18 électrons maximum.

## V. Configuration électronique : les 3 règles de remplissage

Maintenant qu'on connaît les OA et les nombres quantiques, comment les électrons se répartissent-ils ? Il existe **3 règles fondamentales** qui dictent le remplissage.

### Règle 1 : Klechkowski (ordre de remplissage)

**🤔 Le problème :** On pourrait penser que les électrons remplissent 1s, puis 2s, 2p, 3s, 3p, 3d... dans l'ordre de n. Mais ce n'est **pas le cas** ! Le 4s se remplit **avant** le 3d.

#### 📐 Règle de Klechkowski

Les sous-couches se remplissent par ordre de **(n+l) croissant**.

Si deux sous-couches ont le même (n+l), on remplit d'abord celle de **n le plus petit**.

**📋 Ordre de remplissage :1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p**

|

| Sous-couche
| n
| l
| n+l
| Ordre

| 1s | 1 | 0 | 1 | 1er

| 2s | 2 | 0 | 2 | 2e

| 2p | 2 | 1 | 3 | 3e

| 3s | 3 | 0 | 3 | 4e (n plus petit)

| 3p | 3 | 1 | 4 | 5e

| **4s** | 4 | 0 | **4** | 6e (n plus petit)

| **3d** | 3 | 2 | **5** | 7e

| 4p | 4 | 1 | 5 | 8e (n plus petit)

| 5s | 5 | 0 | 5 | 9e

#### 💡 Astuce — Retenir l'ordre facilement

Utilise le **diagramme en diagonales** (méthode de Klechkowski) :

[FIGURE ch2-diagramme-klechkowski.png]

**Schéma** — Diagramme de Klechkowski : lis en suivant les flèches diagonales ↘

### Règle 2 : Principe d'exclusion de Pauli

**🤔 L'idée :** Deux personnes peuvent habiter le même appartement, mais elles doivent être différentes sur au moins un critère. Pour les électrons, c'est pareil.

#### 📐 Principe de Pauli

**Deux électrons d'un même atome ne peuvent pas avoir les 4 mêmes nombres quantiques (n, l, m l , s).💡 Conséquences directes :**

- Une OA (définie par n, l, m l ) contient **au maximum 2 électrons**

- Ces 2 électrons doivent avoir des spins **opposés** : ↑↓ (antiparallèles)

- Une sous-couche l contient max **2(2l+1)** électrons

|
| Sous-couche | OA | e⁻ max

| s (l=0) | 1 | **2**

| p (l=1) | 3 | **6**

| d (l=2) | 5 | **10**

| f (l=3) | 7 | **14**

### Règle 3 : Règle de Hund (multiplicité de spin maximale)

**🤔 Le problème :** Quand une sous-couche a plusieurs OA (comme les 3 OA de la sous-couche p), dans quel ordre met-on les électrons ?

**Analogie :** Imagine un bus avec des rangées de 2 places. Les passagers préfèrent d'abord s'asseoir seuls (un par rangée) avant de s'asseoir à côté de quelqu'un. Les électrons font pareil !

#### Règle de Hund

**Dans une sous-couche, les électrons occupent d'abord chaque OA avec des spins parallèles (tous dans le même sens) avant de s'apparier.**

#### 📝 Exemple détaillé : l'azote (N, Z=7)

**Étape 1 :** L'azote a **Z = 7** → il a **7 protons** → donc **7 électrons** à placer

**Étape 2 :** On remplit dans l'ordre de Klechkowski (1s → 2s → 2p...)

- 1s peut contenir 2e⁻ → on met **2 électrons** → il reste 5 électrons

- 2s peut contenir 2e⁻ → on met **2 électrons** → il reste 3 électrons

- 2p peut contenir 6e⁻ (3 OA × 2e⁻) → on met les **3 électrons restantsÉtape 3 :** On écrit la configuration électronique :

**1s² 2s² 2p³**

Notation : Le **chiffre en exposant** indique le **nombre d'électrons** dans cette sous-couche.

Exemple : 2p³ = 3 électrons dans la sous-couche 2p

**Étape 4 :** Comment placer les 3 électrons dans les 3 OA de 2p ?

La sous-couche 2p a **3 orbitales** (car l=1 → 2l+1 = 3) :

✅ Remplissage CORRECT (règle de Hund) :

[↑]
[↑]
[↑]

→ Chaque OA contient 1 électron, **tous avec le même spin** (↑↑↑)

❌ Remplissage INCORRECT :

[↑↓]
[↑]
[ ]

→ On a apparié trop tôt ! Il fallait d'abord occuper les 3 OA séparément

### Résumé des 3 règles

#### Les 3 règles en un coup d'œil

|

| Règle
| Ce qu'elle dit
| Mot-clé

| **Klechkowski**
| Remplir par (n+l) croissant
| ORDRE

| **Pauli**
| Max 2 e⁻ par OA, spins opposés
| CAPACITÉ

| **Hund**
| Spins parallèles d'abord dans une sous-couche
| RÉPARTITION

### Comment reconnaître un état fondamental, excité ou interdit ?

**🤔 Question clé :** Quand on te donne une configuration électronique en QCM, comment savoir si elle est valide ou pas ?

#### ⚠️ D'abord : configurations INTERDITES

Une configuration est **physiquement impossible** si elle **viole le principe de Pauli** :

- ❌ Deux électrons avec les **mêmes 4 nombres quantiques** (n, l, m l , s)

- ❌ Deux électrons dans la même OA avec le **même spin** (↑↑ ou ↓↓)

- ❌ Plus de 2 électrons dans une OA

**Exemple (Carbone, Z=6) :**

1s² 2s² 2p² avec 2p : [↑↑][ ][ ]

→ INTERDIT ! Deux électrons avec même spin dans la même OA

#### Si Pauli est respecté : 2 états possibles

|

| État
| Définition
| Règles respectées
| Exemple (C, Z=6)

| **Fondamental**
| Énergie minimale, configuration la plus stable
| **Toutes :** Pauli + Klechkowski + Hund
| 1s² 2s² 2p² avec [↑][↑][ ]

| **Excité**
| Un électron a été promu vers un niveau supérieur
| Pauli ✓, mais Klechkowski ou Hund violé
| 1s² 2s¹ 2p³ (e⁻ saute de 2s → 2p)

#### 🔑 Méthode : l'arbre de décision

- **Étape 1 :** Vérifie Pauli

- Pauli violé ? → INTERDIT** (stop, pas la peine d'aller plus loin)

- Pauli respecté ? → Continue ⬇

- **Étape 2 :** Vérifie Klechkowski + Hund

- Les 3 règles respectées ? → FONDAMENTAL**

- Klechkowski ou Hund violé ? → EXCITÉ💡 À retenir :** Pauli est le **juge suprême**. S'il dit non, c'est interdit, point final. Les deux autres règles (Klechkowski et Hund) déterminent juste si c'est fondamental ou excité.

### Exercices de configuration électronique

**Vérifie tout de suite** — Écris la configuration électronique fondamentale de :

- Azote N (Z=7)

- Soufre S (Z=16)

- Fer Fe (Z=26)

Voir la correction

**1. Azote N (Z=7) :**

1s 2 2s 2 2p 3

2+2+3 = 7 électrons (OK)

**2. Soufre S (Z=16) :**

1s 2 2s 2 2p 6 3s 2 3p 4

2+2+6+2+4 = 16 électrons (OK)

**3. Fer Fe (Z=26) :**

1s 2 2s 2 2p 6 3s 2 3p 6 4s 2 3d 6

2+2+6+2+6+2+6 = 26 électrons (OK)

**Attention :** Klechkowski dit 4s AVANT 3d !

**Astuce :** Vérifie toujours que la somme des exposants = Z (nombre d'électrons).

**Exercice avancé** - Pour le Krypton Kr (Z=36) :

- Écris la configuration électronique complète.

- Combien d'électrons ont m l = -1 ?

Voir la correction

**1. Configuration de Kr (Z=36) :**

1s 2 2s 2 2p 6 3s 2 3p 6 4s 2 3d 10 4p 6

**2. Électrons avec m l = -1 :**

m l = -1 est possible quand l ≥ 1 (sous-couches p, d, f).

Pour chaque sous-couche ayant l ≥ 1, l'OA avec m l = -1 contient 2 électrons (remplie).

- 2p : 2 électrons avec m l =-1

- 3p : 2 électrons avec m l =-1

- 3d : 2 électrons avec m l =-1

- 4p : 2 électrons avec m l =-1

Total = 2+2+2+2 = **8 électrons** avec m l = -1.

#### Électrons de cœur vs électrons de valence

- **Électrons de cœur** = tous les électrons des couches internes (= même config que le gaz noble précédent)

- **Électrons de valence** = électrons de la couche la plus externe (dernière couche n)

**Notation abrégée :**

Fe (Z=26) = **[Ar]** 4s 2 3d 6

↳ [Ar] = raccourci pour "1s² 2s² 2p⁶ 3s² 3p⁶" (les 18 premiers électrons = cœur)

↳ 4s² 3d⁶ = les 8 électrons de valence

**💡 Astuce :** [Ar], [Kr], [Xe]... sont des **raccourcis d'écriture**, pas les éléments eux-mêmes ! On utilise le gaz noble qui vient juste avant dans le tableau périodique.

**Attention :** les électrons de valence déterminent les propriétés chimiques !

## VI. Exceptions, ionisation et magnetisme

### Les exceptions à la règle de Klechkowski

**Le problème :** Certains éléments ne suivent pas l'ordre de remplissage prévu par Klechkowski. Pourquoi ? Parce que les sous-couches **d à moitié remplies (d5)** ou **totalement remplies (d10)** sont particulièrement stables.

#### Les 2 familles d'exceptions

**Famille 1 : stabilité de d 5 (demi-remplie)**

Moyen mnémotechnique : **Cr-Mo** (CRoMo = comme le métal chromé-molybdène)

|
| Élément | Z | Config attendue (Klechkowski) | Config réelle

| **Chrome Cr**
| 24
| [Ar] 4s 2 3d 4
| **[Ar] 4s 1 3d 5 **

| **Molybdène Mo**
| 42
| [Kr] 5s 2 4d 4
| **[Kr] 5s 1 4d 5 **

Un électron quitte ns pour compléter la sous-couche d à 5 (demi-remplie = très stable).

**Famille 2 : stabilité de d 10 (totalement remplie)**

Moyen mnémotechnique : **Cu-Ag-Au** (les 3 métaux précieux/monétaires)

|
| Element | Z | Config attendue | Config reelle

| **Cuivre Cu**
| 29
| [Ar] 4s 2 3d 9
| **[Ar] 4s 1 3d 10 **

| **Argent Ag**
| 47
| [Kr] 5s 2 4d 9
| **[Kr] 5s 1 4d 10 **

| **Or Au**
| 79
| [Xe] 6s 2 4f 14 5d 9
| **[Xe] 6s 1 4f 14 5d 10 **

#### Moyen mnémotechnique pour les exceptions

- **d 5 ** (demi-remplie) : **Cr-Mo** (Chrome, Molybdène) → ns 1 (n-1)d 5

- **d 10 ** (pleine) : **Cu-Ag-Au** (Cuivre, Argent, Or = métaux précieux) → ns 1 (n-1)d 10

Dans les deux cas : un électron quitte ns pour aller dans (n-1)d. On passe de ns 2 à ns 1 .

### Ordre d'ionisation (perte d'électrons)

**Question clé :** Quand un atome perd des électrons (ionisation), lequel part en premier ?

#### ⚠️ Le paradoxe du remplissage/ionisation

|

|
| Ordre de remplissage
| Ordre de départ (ionisation)

| **4s et 3d**
| 4s se remplit **AVANT** 3d
| 4s se vide **AVANT** 3d

**Pourquoi ?** Une fois remplis, les électrons 3d sont **plus proches du noyau** que les 4s → ils sont **mieux retenus**. Quand on arrache des électrons, on prend d'abord les **moins bien attachés** = les 4s partent en premier !

#### Règle d'ionisation

**Les électrons ns (couche externe) partent AVANT les (n-1)d (couche interne), même si ns s'est rempli en premier.Exemple détaillé avec le Fer (Fe, Z=26) :Fe neutre :** [Ar] 4s² 3d⁶

→ Remplissage : 4s s'est rempli AVANT 3d (Klechkowski)

**Fe²⁺ (perd 2 e⁻) :** [Ar] 3d⁶

→ Les 2 électrons de **4s partent en premier** (pas de 3d !)

**Fe³⁺ (perd 3 e⁻) :** [Ar] 3d⁵

→ Les 2 électrons 4s + 1 électron 3d sont partis

#### Piège classique : remplissage vs ionisation

C'est un piège **très fréquent** :

- **Remplissage** (Klechkowski) : 4s se remplit AVANT 3d

- **Ionisation** : 4s se vide AVANT 3d (les derniers arrivés sont les premiers à partir !)

Fe 2+ n'est PAS [Ar] 4s 2 3d 4 mais bien [Ar] 3d 6 !

📘 Chapitre 2 — Modèle quantique et configuration électronique

MEDEOS — Cours d'anticipation Chimie — première année de santé

© MEDEOS. Tous droits réservés.

×

medeos-sante.fr