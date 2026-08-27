Chapitre 4 : Méthodes d'étude en biologie cellulaire - MEDEOS — Partie 2

Chapitre 4 — Partie 2

# Méthodes d'étude en biologie cellulaire

Microscopie, culture cellulaire, anticorps, CRISPR et outils moléculaires

## 🎯 Reprise — Méthodes d'étude

Dans la Partie 1, tu as découvert comment les chercheurs choisissent un organisme modèle adapté à leur question, de la simple bactérie à la souris, et comment on cultive des cellules hors de l'organisme, avec leur limite de divisions sauf si elles sont immortalisées.

Tu as aussi vu que les anticorps servent à détecter, localiser ou quantifier une protéine, en recherche comme pour le diagnostic ou le traitement, et que la cytométrie en flux puis le tri par FACS permettent d'analyser et de séparer les cellules une par une.

Tu sais maintenant aussi faire entrer de l'ADN dans une cellule, par transfection ou avec un virus modifié : il est temps de voir comment on coupe et modifie un gène avec précision.

## VI. CRISPR/Cas9 : les ciseaux moléculaires

**CRISPR/Cas9** = des ciseaux ultra-précis pour couper et modifier l'ADN là où on veut. C'est la technique la plus révolutionnaire de ces 20 dernières années (Prix Nobel 2020 pour Emmanuelle Charpentier et Jennifer Doudna).

### A. D'où ça vient ?

Les **bactéries** utilisent naturellement CRISPR comme système de défense :

- Quand un virus attaque une bactérie, **la bactérie elle-même** enregistre un petit morceau de l'ADN du virus dans son propre génome (mémoire immunitaire)

- Si le virus revient, la bactérie reconnaît son ADN et utilise Cas9 (une protéine "ciseaux") pour le couper et le détruire

- C'est comme une mémoire : la bactérie se souvient des virus qu'elle a déjà combattus

### B. Comment ça marche pour modifier un gène ?

**Imagine que tu veux corriger une faute de frappe dans un livre géant (l'ADN) :**

- **Étape 1 : Créer le GPS**

On fabrique un "ARN guide" qui connaît exactement la page et la ligne où se trouve l'erreur (= le gène défectueux)

- **Étape 2 : Guider les ciseaux**

Ce GPS amène Cas9 (une protéine qui agit comme des ciseaux moléculaires) pile au bon endroit sur l'ADN

- **Étape 3 : Couper**

Cas9 coupe les deux brins de l'ADN → c'est comme découper la page du livre à l'endroit précis de l'erreur

- **Étape 4 : Réparer (2 options possibles)**

La cellule répare automatiquement la coupure. Selon comment elle répare, on peut soit **supprimer** le gène défectueux, soit **insérer** un gène correct

[FIGURE ch4_crispr_cas9.png]

Mécanisme de l'édition génomique CRISPR/Cas9

### C. Les 2 façons dont la cellule peut réparer :

**Option 1 : Réparation rapide et sale (NHEJ)**

- **NHEJ** = Non-Homologous End Joining (jonction des bouts sans modèle)

- **Ce qui se passe :** la cellule recolle les deux bouts de l'ADN coupé, mais sans suivre de modèle → elle fait des erreurs (ajoute ou enlève quelques lettres)

- **Résultat :** le gène devient illisible et ne fonctionne plus → **KNOCK-OUT** (inactivation du gène)

- **Utile pour :** étudier ce qui se passe quand un gène ne marche plus

**Option 2 : Réparation précise avec modèle (HDR)**

- **HDR** = Homology-Directed Repair (réparation guidée par homologie)

- **Ce qui se passe :** on fournit à la cellule un "modèle de correction" (ADN matrice). La cellule copie ce modèle pour réparer la coupure

- **Résultat :** on peut corriger un gène défectueux ou insérer un nouveau gène → **KNOCK-IN** (insertion précise)

- **Utile pour :** thérapie génique (corriger une maladie génétique)

#### 🔬 Avantages de CRISPR/Cas9

- **Simple :** il suffit de changer la séquence de l'ARN guide pour cibler n'importe quel gène

- **Rapide :** quelques semaines vs mois/années avec les anciennes techniques (ZFN, TALEN)

- **Peu coûteux :** accessible à tous les laboratoires (ARN guide = quelques dizaines d'euros)

- **Multiplexage :** possibilité de cibler plusieurs gènes simultanément

### C. Applications

- **Recherche fondamentale :** création de modèles knock-out/knock-in pour étudier la fonction des gènes

- **Agriculture :** amélioration des plantes (résistance aux maladies, rendement)

- **Médecine :** essais cliniques en cours pour :

- Drépanocytose et β-thalassémie (Casgevy®, premier traitement CRISPR approuvé en 2023)

- Certains cancers (CAR-T cells modifiées)

- VIH (excision du provirus)

#### ⚠️ Questions éthiques

L'édition de la lignée germinale (spermatozoïdes, ovocytes, embryons) pose des questions éthiques majeures car les modifications sont **transmissibles aux générations futures**. En 2018, la naissance de bébés génétiquement modifiés en Chine (He Jiankui) a provoqué un scandale international et une condamnation du chercheur.

#### 💡 Moyen mnémotechnique

**"NHEJ = N'importe comment"** → réparation rapide mais sale, fait des erreurs

**"HDR = HD (comme High Definition)"** → réparation haute qualité, précise, on fournit le modèle exact

Imagine : NHEJ = photo floue, HDR = photo nette en 4K ! 📸

#### 💡 À retenir pour le QCM

**NHEJ = erreurs = knock-out** (casser le gène).

**HDR = précis = knock-in** (corriger/insérer avec un modèle).

Le NHEJ est le mécanisme par défaut (plus fréquent), le HDR nécessite de fournir une matrice ADN.

## VII. GFP et extinction de gènes

### A. La GFP : voir les protéines en direct

La **GFP** (Green Fluorescent Protein = Protéine Fluorescente Verte) a été découverte chez une méduse qui brille en vert dans l'océan ( Aequorea victoria ).

**Prix Nobel de Chimie 2008** pour Shimomura, Chalfie et Tsien → l'une des découvertes les plus importantes de la biologie moderne.

#### 🔬 Comment ça marche ?

**Principe simple :**

- **On colle le gène de la GFP** au gène de la protéine qu'on veut étudier

- **La cellule produit** une protéine fusionnée : ta protéine + GFP attachée

- **On éclaire avec une lumière bleue** → la GFP brille en vert

- **On regarde au microscope** → partout où c'est vert, c'est là que se trouve ta protéine !

#### 🌟 Pourquoi c'est génial ?

- **Cellules vivantes :** on observe la protéine dans des cellules qui bougent, respirent et vivent → pas besoin de les tuer

- **Temps réel :** on peut filmer comment la protéine se déplace (vidéomicroscopie / time-lapse)

- **Localisation précise :** où va ta protéine ? Dans le noyau ? Les mitochondries ? La membrane ?

- **Plusieurs couleurs :** variantes colorées (RFP rouge, YFP jaune, CFP cyan) → observer plusieurs protéines en même temps

### B. ARN interférence (siRNA) : éteindre temporairement un gène

Parfois, on veut **bloquer** un gène pour voir ce qui se passe quand il ne marche plus. Les **siRNA** (petits ARN) permettent d'éteindre temporairement un gène.

**Comment ça marche :**

- On introduit des siRNA dans la cellule

- Ces siRNA trouvent et détruisent l'ARN messager du gène ciblé

- Sans ARN messager → la protéine n'est plus fabriquée → le gène est "éteint"

- C'est temporaire : quand les siRNA disparaissent, le gène recommence à fonctionner

#### 💡 siRNA vs CRISPR

**siRNA = extinction temporaire** (l'ARN messager est détruit mais le gène ADN reste intact).

**CRISPR = modification permanente** (l'ADN lui-même est coupé et modifié).

## VIII. Microscopie à fluorescence

**📌 À noter** : Cette section présente les **applications concrètes** de la fluorescence en recherche (GFP, immunofluorescence, marqueurs). Le **principe physique** de la fluorescence (décalage de Stokes) et le **fonctionnement optique** du microscope (épifluorescence, confocal) relèvent quant à eux d'un cours d'optique et de microscopie approfondi.

La **microscopie à fluorescence** est une technique pour observer des structures spécifiques dans les cellules en les faisant briller sous un microscope spécial.

#### 🔍 Différence clé : GFP vs Microscopie à fluorescence

**GFP (Section 7)** = la protéine QUE tu veux observer (elle brille toute seule, naturellement)

**Microscopie à fluorescence (Section 8)** = l'OUTIL (le microscope) qui permet de voir tout ce qui brille

Analogie : GFP = ampoule allumée | Microscope à fluorescence = lunettes spéciales pour voir les ampoules 💡

### A. Comment ça marche ? (Principe simple)

**1. On fait briller quelque chose dans la cellule**

- **Soit naturellement :** la cellule produit elle-même une protéine fluorescente (comme la GFP)

- **Soit en ajoutant des marqueurs :** on ajoute des molécules fluorescentes qui se collent sur des structures précises

**2. On éclaire avec une lumière spéciale (UV ou bleue)**

→ Les molécules fluorescentes absorbent cette lumière et brillent en retour (en vert, rouge, bleu...)

**3. Le microscope capte uniquement la lumière émise par les molécules fluorescentes**

→ On voit SEULEMENT ce qui brille (les structures qu'on a marquées) sur fond noir

### B. Deux façons de faire briller les cellules

#### 🧬 Méthode 1 : GFP fusion (cellules VIVANTES)

**Principe :** On modifie génétiquement la cellule pour qu'elle produise la protéine d'intérêt "collée" à la GFP

**Résultat :** La protéine brille toute seule, de l'intérieur

**Avantage :** On peut observer des cellules vivantes qui bougent en temps réel ✅

**Inconvénient :** Il faut modifier génétiquement les cellules (transfection)

#### 🔬 Méthode 2 : Immunofluorescence (cellules MORTES/FIXÉES)

**Principe :** On tue et fixe les cellules, puis on ajoute des anticorps couplés à des fluorophores

**Résultat :** Les anticorps se collent sur la protéine cible et la font briller

**Avantage :** Plus facile (pas besoin de modifier les cellules), on peut marquer plusieurs protéines en même temps avec des couleurs différentes ✅

**Inconvénient :** Cellules mortes = pas de mouvement, juste une photo fixe 📸

### C. Marqueurs fluorescents courants

Ce sont des molécules qui se fixent sur des structures spécifiques et brillent d'une couleur précise :

- **DAPI / Hoechst (bleu) :** se colle sur l'ADN → fait briller le **noyau en bleu**

- **MitoTracker (rouge/orange) :** se concentre dans les **mitochondries**

- **Phalloïdine (vert) :** se lie aux filaments d'**actine** (squelette de la cellule)

[FIGURE ch4_microscopie_fluorescence.png]

Multi-marquage en microscopie à fluorescence

## IX. Fractionnement cellulaire

Le **fractionnement cellulaire** permet d'**isoler les différents organites** par centrifugations successives à vitesses croissantes.

### A. Principe : centrifugation différentielle

**Objectif :** séparer les différents organites d'une cellule pour pouvoir les étudier séparément.

**Principe simple :** Imagine que tu mettes des billes de différentes tailles dans l'eau et que tu fasses tourner le tube très vite. Les grosses billes lourdes tombent au fond en premier, les moyennes après, et les petites restent en suspension. C'est pareil avec les organites !

#### 📌 Règle de base

Plus un organite est **gros et lourd** → plus il tombe vite au fond du tube (= sédimente)

Plus il est **petit et léger** → plus il reste en suspension dans le liquide

#### 🔢 C'est quoi "g" ? (1 000 g, 10 000 g...)

**g = force de gravité terrestre**

Sur Terre, la gravité attire tout vers le bas avec une force = **1 g**.

Quand on fait tourner très vite une centrifugeuse :

- **1 000 g** = une force 1 000 fois plus forte que la gravité terrestre

- **10 000 g** = une force 10 000 fois plus forte

- **100 000 g** = une force 100 000 fois plus forte !

**Analogie :** Si tu pèses 70 kg sur Terre (1 g), tu "pèserais" 70 000 kg à 1 000 g ! Cette force énorme fait tomber les organites au fond du tube.

#### Les 5 étapes (du plus lourd au plus léger) :

-
**Étape 0 : Casser les cellules (lyse cellulaire)**

On broie les cellules dans un liquide spécial (isotonique = même concentration que l'intérieur de la cellule).

Résultat : un "smoothie cellulaire" avec tous les organites mélangés, mais intacts (pas éclatés).

-
**1ère centrifugation : vitesse LENTE (1 000 g)**

On fait tourner doucement → les organites les PLUS LOURDS tombent au fond.

**Culot (au fond) :** NOYAUX (les plus gros et lourds) 🟣

**Surnageant (liquide du dessus) :** tout le reste → on le récupère pour continuer

-
**2ème centrifugation : vitesse MOYENNE (10 000 g)**

On prend le surnageant d'avant et on fait tourner plus vite.

**Culot :** MITOCHONDRIES + LYSOSOMES (taille moyenne) 🟠

**Surnageant :** tout ce qui reste → on continue

-
**3ème centrifugation : vitesse TRÈS RAPIDE (100 000 g = ultracentrifugation)**

On prend le surnageant et on fait tourner ULTRA vite.

**Culot :** MICROSOMES (= morceaux du réticulum endoplasmique fragmenté) 🔵

**Surnageant :** le liquide final

-
**Surnageant final = CYTOSOL**

C'est le liquide qui reste après toutes les centrifugations.

Il contient toutes les protéines solubles (= dissoutes dans l'eau) qui n'appartiennent à aucun organite 💧

[FIGURE ch4_fractionnement_cellulaire.png]

Fractionnement cellulaire par centrifugation différentielle

#### 🧠 Moyen mnémotechnique

N-M-L

**Inverse de l'ordre alphabétique !N**oyaux → **M**itochondries → mi**L** (Lysosomes/Microsomes = RE)

L-M-N dans l'alphabet, mais N-M-L pour la centrifugation 🔄

**Logique :** Les organites à double membrane (N et M) sont plus lourds → tombent au fond en premier.

## 🎯 Conclusion et points clés à retenir

Bravo ! Vous venez de découvrir la **"boîte à outils"** du biologiste cellulaire. De la culture de cellules aux ciseaux moléculaires CRISPR, chaque technique est comme une clé qui ouvre une nouvelle porte vers la compréhension du vivant.

Retenez bien cette logique : **chaque question scientifique a sa méthode**. Vous voulez voir une protéine bouger en temps réel ? → GFP. Modifier un gène de manière permanente ? → CRISPR. Séparer des cellules selon leurs propriétés ? → FACS. Isoler des organites ? → Centrifugation.

### 🔬 Les 9 techniques essentielles en un coup d'œil

**1️⃣ Organismes modèles** — Du simple au complexe : E. coli (gènes) → Levure (métabolisme) → C. elegans/Drosophile (développement) → Souris → Homme

**2️⃣ Culture cellulaire** — Primaire (~50 divisions, Hayflick) vs Lignées immortalisées (télomérase active, comme HeLa)

**3️⃣ Anticorps** — Polyclonaux (signal fort, plusieurs épitopes) vs Monoclonaux (précis, médicaments -mab). Applications : Western, ELISA, immunofluorescence, thérapies

**4️⃣ Cytométrie & FACS** — Analyser les cellules (FSC + SSC + fluorescence) et les trier physiquement avec charges électriques

**5️⃣ Transfection & Transduction** — Faire entrer de l'ADN : lipofection/électroporation (transfection) ou vecteurs viraux (Adénovirus temporaire | Lentivirus permanent | AAV sûr)

**6️⃣ CRISPR/Cas9 🏆 Nobel 2020** — Les ciseaux génétiques ultra-précis. **NHEJ** = réparation rapide avec erreurs → Knock-OUT | **HDR** = réparation précise → Knock-IN

Mnémo : NHEJ = N'importe comment | HDR = HD (Haute Définition)

**7️⃣ GFP 🏆 Nobel 2008** — Protéine fluorescente verte pour voir les cellules vivantes en temps réel | **siRNA** = extinction temporaire d'un gène

**8️⃣ Microscopie à fluorescence** — GFP fusion (cellules VIVANTES) vs Immunofluorescence (cellules FIXÉES). Marqueurs : DAPI (noyau bleu), MitoTracker (mitochondries rouge), Phalloïdine (actine vert)

**9️⃣ Fractionnement cellulaire** — Centrifugation croissante : 1 000 g → Noyaux | 10 000 g → Mitochondries | 100 000 g → RE | Cytosol liquide

Mnémo : **N-M-L** (inverse alphabétique) — Logique : double membrane = plus lourd

### 📚 Une boîte à outils transversale

Ces méthodes ne sont pas un sujet isolé : elles sont l'instrument de toute la biologie cellulaire. Chaque fois qu'une affirmation est faite sur le fonctionnement des cellules, elle repose sur l'une de ces techniques. Bien les maîtriser, c'est se donner les moyens de comprendre comment on prouve ce que l'on étudie sur le vivant.

×

medeos-sante.fr