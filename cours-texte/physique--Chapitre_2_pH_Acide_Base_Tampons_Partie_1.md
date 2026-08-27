Chapitre 2 : pH, acide-base et solutions tampons - MEDEOS — Partie 1

Chapitre 2 — Partie 1

# pH, acide-base et solutions tampons

Pourquoi ton sang ne tolère pas plus de ±0,04 unité de pH — Henderson-Hasselbalch, le tampon bicarbonate et les 4 troubles acido-basiques.

## 🎯 Pourquoi ce chapitre est un des plus rentables de l'année

Le pH de ton sang artériel est de **7,40 ± 0,04**. Pas 7,2. Pas 7,6. Précisément 7,40. Si ton pH sortait de la plage 7,35-7,45 pendant plus de quelques minutes, des centaines d'enzymes cesseraient de fonctionner, ton métabolisme s'effondrerait, et ta vie serait en danger en quelques heures. Le maintien de ce pH est l'**une des homéostasies les plus rigoureuses du corps humain** — et tu vas voir ici exactement comment ton corps y arrive.

Tout médecin manipule le pH au quotidien : urgences, réanimation, néphrologie, diabétologie, anesthésie. C'est un des chapitres **les plus rentables de l'année** pour trois raisons : il tombe quasiment chaque année au concours, il est transversal (physique + physiologie + clinique), et la formule d'Henderson-Hasselbalch est celle que tu manipuleras le plus longtemps dans ta carrière de médecin.

🎯 **À la fin de ce chapitre, tu sauras :**

- Définir le **pH**, manipuler l'échelle logarithmique et lire les valeurs physiologiques

- Distinguer **acide fort** (dissociation totale) et **acide faible** (équilibre, Ka, pKa)

- Appliquer l'équation de **Henderson-Hasselbalch** et identifier la zone tampon pKa ± 1

- Décrypter le **tampon bicarbonate** du sang, régulé par poumons et reins

- Identifier les **4 troubles acido-basiques** à partir d'une gazométrie en moins d'une minute

- Reconnaître le rôle des **autres tampons** (phosphate, protéines, hémoglobine)

**📚 Ce que tu sais déjà (Terminale)** — Tu as vu en spé Physique-Chimie : la définition pH = −log[H₃O⁺], l'échelle 0-14, la distinction acide fort / acide faible, et un peu de Ka/pKa. Tu as peut-être survolé Henderson-Hasselbalch en exercice. Ici, on reprend tout proprement et on va plus loin : on relie chaque formule à la **gazométrie artérielle** que tu prescriras un jour à un patient en acidose, et on découvre pourquoi ton sang ne peut tolérer que ±0,04 unité de variation. Tu connaissais la théorie ; tu vas découvrir la clinique. Tu vas aussi mobiliser tout ce qu'on a posé au ch.1 : les concentrations (échelle des H⁺ à 10⁻⁷ mol/L), les logarithmes du préambule, et la loi de Henry pour le CO₂ dissous.

## I. Le pH et l'échelle logarithmique

Avant de plonger dans les tampons, il faut maîtriser la base : qu'est-ce que cette grandeur "pH" qu'on mesure partout, et pourquoi est-elle écrite avec un log ? Cette section pose les fondations.

### 1. 🤔 Le problème — Pourquoi inventer une échelle « bizarre » au lieu d'écrire [H⁺] directement ?

Tu as probablement vu le pH au lycée, mais souvent de manière superficielle — « 7 c'est neutre, en-dessous c'est acide, au-dessus c'est basique ». OK. Mais pourquoi on a inventé cette échelle, et pourquoi avec un log ? Reprenons depuis le début, proprement.

La concentration en ions H⁺ dans le sang artériel est de **10⁻⁷·⁴ mol/L** — soit environ 40 nanomoles par litre. Dans l'estomac, [H⁺] grimpe à 10⁻² mol/L (100 000 fois plus). Dans la bile, elle descend à 10⁻⁸ mol/L. Écrire et manipuler ces nombres en notation décimale serait impossible : tu jonglerais en permanence avec des nombres minuscules à 7-10 décimales.

Le chimiste danois **Søren Sørensen** a eu une idée géniale en 1909, dans les laboratoires de la brasserie Carlsberg à Copenhague (où il étudiait l'effet de l'acidité sur la fermentation de la bière) : prendre l' opposé du logarithme de [H⁺]. Résultat ? Une échelle simple de 0 à 14 où chaque unité représente un facteur 10 sur la concentration en H⁺. C'est l'invention la plus pratique de toute la chimie des solutions — et le « p » qu'il a forgé (du latin potentia , puissance) est devenu universel : p Ka, p OH, p Ke…

**🧮 Rappel express — c'est quoi un log ?**

Le **log** (= log décimal = log₁₀, par convention en physique-chimie le « 10 » est sous-entendu) d'un nombre, c'est **la puissance de 10 qu'il faut pour l'atteindre** :

- log(10) = 1 (car 10¹ = 10)

- log(100) = 2 (car 10² = 100)

- log(1 000) = 3

- log(1) = 0 (car 10⁰ = 1)

- log(0,1) = −1 (car 10⁻¹ = 0,1)

- log(10⁻⁷) = −7

Autrement dit, le log « compte les zéros » d'une puissance de 10. Et il interpole pour les autres nombres : log(2) ≈ 0,3, log(5) ≈ 0,7.

**Pourquoi le « − » devant ?** Parce que [H⁺] dans le sang est de l'ordre de 10⁻⁷ mol/L → log(10⁻⁷) = −7 → c'est négatif et peu lisible. On ajoute le signe « − » pour retomber sur des nombres positifs simples (7,4 plutôt que −7,4). C'est purement cosmétique. À ne pas confondre avec le **ln** (logarithme népérien, base e ≈ 2,72) qu'on rencontre surtout en thermodynamique : ln(x) ≈ 2,3 × log(x).

→ Si tu veux un rappel plus complet, voir **chapitre 1, section I.6 « Logarithmes »**.

### 2. La définition du pH (Sørensen)

**🔑 Définition du pH**

Le **pH** (Potentiel hydrogène) est défini comme l'opposé du logarithme décimal de la concentration en ions H⁺ (ou H₃O⁺, ce qui revient au même en solution aqueuse) :

Définition du pH
pH = −log 10 ([H⁺])
avec [H⁺] = concentration en ions H⁺ en mol/L

📝 Notation : en physique-chimie, « log » et « log 10 » désignent exactement la même chose (le logarithme décimal, base 10). Le « 10 » est juste explicite ici pour bien distinguer du logarithme népérien **ln** (base e). Tu verras souvent la formule écrite simplement **pH = −log([H⁺])** — c'est strictement équivalent.

Inversement, pour retrouver la concentration en H⁺ à partir du pH :

Relation inverse
[H⁺] = 10 −pH
Exemple : pour pH = 7, [H⁺] = 10⁻⁷ mol/L = 100 nmol/L

### 3. L'échelle des pH et les milieux biologiques

L'échelle des pH s'étend conventionnellement **de 0 à 14**, avec trois zones à connaître par cœur :

- **pH = 0 à 7** : solution **acide** ([H⁺] > 10⁻⁷ mol/L > [OH⁻])

- **pH = 7** : solution **neutre** (eau pure à 25 °C, [H⁺] = [OH⁻] = 10⁻⁷ mol/L)

- **pH = 7 à 14** : solution **basique** ou alcaline ([H⁺]

🔑 **L'échelle du pH — pense à un thermomètre, mais pour l'acidité**

- **pH = 0** → [H⁺] = 1 mol/L → solution **très acide** (ex : acide gastrique pH ≈ 1-2)

- **pH = 7** → [H⁺] = 10⁻⁷ mol/L → solution **neutre** (eau pure à 25 °C)

- **pH = 14** → [H⁺] = 10⁻¹⁴ mol/L → solution **très basique** (ex : soude concentrée)

🧠 **La mécanique en 2 phrases** :

- **Plus le pH est proche de 0** → plus la concentration en H⁺ est **grande** (jusqu'à 1 mol/L = énormément de protons) → **plus c'est acide**.

- **Plus le pH s'éloigne vers 14** → plus la concentration en H⁺ devient **petite** (10⁻¹⁴ mol/L = quasi rien) → **plus c'est basique**.

Autrement dit : **pH bas = beaucoup de H⁺ = acide** ; **pH élevé = très peu de H⁺ = basique**. L'échelle peut sembler « inversée » au premier coup d'œil, mais c'est juste la mécanique du −log : on prend l'exposant de la puissance de 10 et on change son signe pour le rendre lisible.

Et **chaque unité de pH = un facteur 10** sur [H⁺]. Une solution à pH 3 a 10 fois plus de H⁺ qu'une solution à pH 4, et 100 fois plus qu'une à pH 5.

[FIGURE physique_ch2_fig01_echelle_ph.png]

**Figure 1** — Échelle pH et milieux biologiques : le sang artériel est verrouillé sur la plage 7,35-7,45.

|

| Milieu / Fluide biologique
| pH typique

| **Suc gastrique** | 1-2 (très acide)

| Eau pure (neutre) | 7,0

| **Sang artériel** | **7,35-7,45 (verrouillé)**

| Bile / suc pancréatique | 8-9 (basique)

**🧠 Mnémo Medeos — « 1 unité de pH = facteur 10 sur [H⁺] »**

L'échelle est LOGARITHMIQUE, donc une variation qui semble petite est en réalité énorme :

- pH 7 → [H⁺] = 100 nmol/L

- pH 6 → [H⁺] = 1 000 nmol/L (10× plus !)

- pH 5 → [H⁺] = 10 000 nmol/L (100× plus !)

- pH 2 (estomac) → [H⁺] = 10 mmol/L (100 000× plus que le sang à pH 7)

Quand un patient passe de pH 7,40 à 7,10 (acidose sévère), [H⁺] est multiplié par 2. Petit changement de chiffre, gros bouleversement physiologique.

### 4. Produit ionique de l'eau et relation pH + pOH = 14

Dans l'eau pure, une infime fraction des molécules d'H₂O s'auto-ionise selon la réaction d'**auto-protolyse** :

Auto-protolyse de l'eau
2 H₂O ⇌ H₃O⁺ + OH⁻

À l'équilibre (à 25 °C), le produit des concentrations [H⁺] × [OH⁻] est constant. On l'appelle le **produit ionique de l'eau**, noté Ke :

Produit ionique de l'eau (à 25 °C)
K e = [H⁺] × [OH⁻] = 10 −14

Par définition, pKe = −log(Ke) = 14. En prenant le log de la relation précédente, on obtient une formule très utile :

Relation pH / pOH (à 25 °C)
pH + pOH = pK e = 14
avec pOH = −log[OH⁻]

Cette relation est utile pour calculer le pH d'une solution basique : si on connaît [OH⁻], on calcule pOH puis pH = 14 − pOH.

**⚠️ Piège ULTRA fréquent — Ne confonds pas pH et pOH**

Quand on dit « **12, c'est basique** », on parle d'un **pH = 12** (calculé à partir de la concentration en H⁺). pH 12 → peu de H⁺ → solution basique. ✓

MAIS si quelqu'un te parle d'un **pOH = 12**, c'est calculé à partir de la concentration en OH⁻ → peu de OH⁻ → solution **acide** (et pas basique du tout) !

Le chiffre 12 est le même, mais le sens est **inverse** selon qu'on parle de pH (de H⁺) ou de pOH (de OH⁻). Ne jamais confondre les deux. **En clinique et au concours, on utilise quasi exclusivement le pH** (celui de H⁺) — le pOH n'est qu'un outil intermédiaire de calcul, pratique quand on connaît [OH⁻] avant [H⁺].

**🔑 Le pOH suit la MÊME règle inversée que le pH**

Le pOH suit exactement la même mécanique du −log que le pH (mais appliquée à [OH⁻]) :

- **pOH petit** (proche de 0) → [OH⁻] grande → solution **très basique**

- **pOH = 7** → [OH⁻] = 10⁻⁷ mol/L → neutre

- **pOH grand** (proche de 14) → [OH⁻] quasi nulle → solution **très acide**

|

| pH (de H⁺)
| [H⁺]
| pOH (de OH⁻) = 14 − pH
| [OH⁻]
| État de la solution

| **2** | 10⁻² mol/L (beaucoup) | **12** | 10⁻¹² mol/L (quasi rien) | très **acide**

| **7** | 10⁻⁷ mol/L | **7** | 10⁻⁷ mol/L | neutre

| **12** | 10⁻¹² mol/L (quasi rien) | **2** | 10⁻² mol/L (beaucoup) | très **basique**

💡 **L'image à retenir**

Le pH et le pOH sont deux « curseurs » qui bougent **dans des sens opposés**, et leur somme reste toujours 14. Quand l'un monte (vers le « peu » de l'ion correspondant), l'autre descend (vers le « beaucoup »).

Exemple à pH = 2 (très acide, beaucoup de H⁺) → pOH = 12 (très peu de OH⁻) → les deux confirment que la solution est acide. C'est cohérent : peu de OH⁻ signifie qu'il n'y a personne pour neutraliser les H⁺ → l'acidité reste.

👉 Ne te laisse pas piéger par le chiffre. Reviens toujours à la **concentration** qui se cache derrière, ET regarde de QUEL ion on parle : c'est ça qui décide si la solution est acide ou basique, pas la taille du nombre.

**⚠️ Piège classique — Ke dépend de la température**

Le produit ionique Ke = 10⁻¹⁴ n'est valable qu'**à 25 °C**. Si la température augmente, l'auto-protolyse de l'eau augmente, Ke augmente, donc pKe diminue. **À 37 °C (température corporelle), pKe vaut environ 13,6** — le pH neutre n'est plus 7 mais ~6,8. Voilà pourquoi le pH intracellulaire « neutre » est noté 6,8 et pas 7. Ce piège tombe parfois en QCM.

**🧪 Mini-exercice — pH d'une solution de soudeÉnoncé :** On dispose d'une solution de NaOH (base forte) à C = 0,01 mol/L. Quel est son pH à 25 °C ?

👁️ Voir la correction

**Correction :**

⚡ **Version express (le réflexe en 5 secondes)**

Le pH se calcule toujours à partir de [H⁺]. Mais ici on a [OH⁻] d'une base forte. Astuce : **pH = 14 − (− exposant de [OH⁻])**.

Ici [OH⁻] = 10⁻² mol/L → exposant = −2 → pOH = 2 → **pH = 14 − 2 = 12**. C'est fini.

Et si tu veux savoir pourquoi cette astuce marche, lis la suite — c'est une simple conséquence du produit ionique de l'eau Ke = 10⁻¹⁴.

**Étape 1 — On connaît [OH⁻], pas [H⁺].** NaOH est une base forte, totalement dissociée dans l'eau : NaOH → Na⁺ + OH⁻. Donc [OH⁻] = C = 0,01 mol/L = 10⁻² mol/L. Mais le pH se calcule à partir de [H⁺], pas de [OH⁻]. Il nous faut donc un pont entre les deux.

**Étape 2 — Le pont, c'est le produit ionique de l'eau.** Dans toute solution aqueuse à 25 °C, le produit [H⁺] × [OH⁻] est constant et vaut **Ke = 10⁻¹⁴** (revu en section I.4). Si tu connais l'un des deux, tu déduis l'autre.

**Étape 3 — On passe au log des deux côtés** pour transformer cette relation multiplicative en relation additive (plus simple à manipuler). Le log d'un produit = somme des logs :

log([H⁺] × [OH⁻]) = log(10⁻¹⁴)
log([H⁺]) + log([OH⁻]) = −14

On multiplie tout par −1 pour faire apparaître les « p » :

−log([H⁺]) + (−log([OH⁻])) = 14
**pH + pOH = 14**

C'est **la** relation qui te permet de passer d'un côté à l'autre. Elle découle directement du produit ionique de l'eau. Toujours valable à 25 °C en solution aqueuse.

**Étape 4 — Application numérique.**

pOH = −log([OH⁻]) = −log(10⁻²) = **2**

pH = 14 − pOH = 14 − 2 = **12**

La solution est très basique. Logique : on a versé une base forte, le pH s'envole vers les valeurs hautes.

📌 **À retenir** : dès que tu connais [OH⁻] (base forte), tu passes par **pOH puis pH = 14 − pOH**. Ce n'est PAS une formule magique sortie du chapeau — c'est juste la conséquence directe de Ke = [H⁺] × [OH⁻] = 10⁻¹⁴, écrite en logarithmes.

## II. Acides et bases : Brønsted-Lowry, Ka et pKa

Maintenant qu'on sait lire l'échelle pH, il faut comprendre **qui produit ces variations de pH** : les acides et les bases. Dans cette section on pose la définition moderne (Brønsted-Lowry), on distingue les acides forts des acides faibles (LA dichotomie qui rend possibles les tampons), puis on introduit les outils quantitatifs **Ka et pKa** qui décrivent à quel point une molécule lâche ou retient son proton.

### 1. La théorie de Brønsted-Lowry — Définition d'un acide et d'une base

Au lycée, on t'a souvent dit « un acide, c'est ce qui rend la solution acide ». C'est vrai mais ça ne dit pas pourquoi . La vraie définition utilisée en P1 (et au-delà) est celle de **Brønsted-Lowry**, et elle se résume à une seule action : **donner ou prendre un proton (H⁺)**.

**🔑 Théorie de Brønsted-Lowry (1923)**

- **Acide** : espèce chimique capable de céder un proton (H⁺)

- **Base** : espèce chimique capable de capter un proton (H⁺)

Toute molécule acide AH se décompose selon : **AH ⇌ A⁻ + H⁺**. À chaque acide AH correspond une **base conjuguée** A⁻. On parle de **couple acide/base** noté AH/A⁻.

🧠 **Image mentale** : un acide, c'est un donneur de H⁺ (il largue son proton). Une base, c'est un receveur de H⁺ (elle l'attrape au vol). C'est une réaction de transfert — comme une passe au rugby, mais avec un proton.

Quelques couples acide/base à connaître pour la physiologie :

- **HCl / Cl⁻** : acide chlorhydrique / chlorure (acide FORT, suc gastrique)

- **H₂CO₃ / HCO₃⁻** : acide carbonique / bicarbonate (LE couple phare du sang, pKa = 6,1)

- **H₂PO₄⁻ / HPO₄²⁻** : dihydrogénophosphate / monohydrogénophosphate (tampon intracellulaire, pKa = 7,2)

- **NH₄⁺ / NH₃** : ammonium / ammoniac (tampon urinaire, pKa = 9,3)

- **CH₃COOH / CH₃COO⁻** : acide acétique / acétate (faible, pKa = 4,8)

Certaines espèces peuvent jouer **les deux rôles** selon l'environnement : on les appelle **ampholytes** (ou amphotères). L'eau elle-même est un ampholyte : elle peut accepter un H⁺ (pour donner H₃O⁺) ou en céder un (pour donner OH⁻). C'est ce qu'on a vu dans l'autoprotolyse de l'eau.

### 2. Acides forts vs acides faibles — La grande dichotomie

#### 🤔 « Fort » et « faible » par rapport à quoi ?

Par rapport à leur capacité à **lâcher leur proton dans l'eau**. C'est la seule chose qui compte. Un acide « fort » lâche son H⁺ à 100 % dès qu'il rencontre une molécule d'eau, libérant un maximum de H⁺ dans la solution. Un acide « faible » hésite : il ne lâche qu'une fraction (parfois 1 %, parfois 0,01 %), donc il libère peu de H⁺. Cette différence change tout — et c'est elle qui rend possibles les solutions tampons (voir section III).

🧠 **Image mentale — la pièce de monnaie**

Pense à un acide comme à une personne qui tient une pièce de monnaie (le H⁺) dans sa main.

- Un acide **fort** ouvre tout grand la main dès qu'il rencontre quelqu'un (l'eau) → la pièce tombe systématiquement.

- Un acide **faible** hésite, serre les doigts → la pièce ne tombe que de temps en temps.

Ce sont précisément les **acides faibles** (qui gardent une partie de leur H⁺) qui peuvent jouer le rôle d' amortisseur — donc fabriquer des solutions tampons et réguler le pH physiologique.

**🔑 Acide fort**

Un **acide fort** se dissocie totalement dans l'eau :

**HA → A⁻ + H⁺** (dissociation complète, sens unique)

Conséquence : à concentration initiale C₀, on a [H⁺] = C₀. Le pH se calcule directement :

pH d'un acide fort (C 0 > 10⁻⁶ mol/L)
pH = −log(C 0 )

Exemples d'acides forts à connaître : HCl, HNO₃, H₂SO₄, HBr, HI, HClO₄.

[FIGURE physique_ch2_fig06_fort_vs_faible.png]

**Figure 6** — Acide fort vs acide faible dans l'eau : à concentration identique, l'acide fort libère 100 % de ses H⁺, l'acide faible n'en libère qu'une petite fraction (≈ 1 %).

**🔑 Acide faible**

Un **acide faible** ne se dissocie que partiellement dans l'eau, atteignant un équilibre dynamique :

**AH + H₂O ⇌ A⁻ + H₃O⁺** (équilibre)

Cet équilibre est caractérisé par la **constante d'acidité Ka** :

Constante d'acidité Ka
K a = [A⁻] × [H⁺] / [AH]
à l'équilibre, en solution aqueuse

**🔑 Comment lire cette formule, logiquement**

Regarde-la dans le bon sens : c'est une **fraction qui compare les produits de la dissociation aux molécules encore intactes**.

- Au **numérateur** : [A⁻] × [H⁺] = les produits de la dissociation (la base conjuguée ET les protons libérés). C'est la « quantité de molécules qui se sont cassées ».

- Au **dénominateur** : [AH] = les molécules d'acide encore intactes , qui n'ont pas (encore) lâché leur H⁺.

Donc Ka mesure le **rapport de force entre la forme dissociée et la forme intacte** de l'acide, à l'équilibre :

- Si la fraction est **grande** (Ka grand) → beaucoup de molécules dissociées par rapport aux intactes → l'acide se dissocie facilement → **acide fort**

- Si la fraction est **petite** (Ka petit) → peu de dissociation, la plupart des molécules restent intactes → **acide faible**

💡 **Mais pourquoi pas juste [A⁻]/[AH] (le simple ratio de dissociation) ?**

Bonne question — c'est ce qui semble naturel au premier coup d'œil. Le souci, c'est que le ratio [A⁻]/[AH] **change avec le pH** de la solution. Si tu rajoutes de l'acide, le ratio change. Si tu dilues, il change aussi. Donc ce ratio n'est PAS une constante.

En revanche, en multipliant par [H⁺] au numérateur, on obtient une expression qui reste **strictement constante** quelles que soient les conditions de la solution (à température fixe). Le surplus de [H⁺] compense automatiquement les variations de pH. C'est ça la magie de la constante d'équilibre : **Ka est une propriété intrinsèque de la molécule**, pas de la solution. Comme la masse molaire ou la température de fusion.

🧠 **Image mentale — le ressort de dissociation**

Pense à Ka comme à la **« tension d'un ressort »** caché dans la molécule, qui pousse plus ou moins fort vers la dissociation :

- **Ressort très tendu** (Ka grand, ex : 10⁻¹ ou plus) → la molécule veut se casser en A⁻ + H⁺ dès qu'elle touche l'eau → **acide fort**

- **Ressort détendu** (Ka petit, ex : 10⁻⁹) → la molécule reste sagement en AH → **acide faible**

Cette « tension » est une propriété fixe de la molécule. HCl a un ressort énorme (Ka > 1), CH₃COOH a un ressort modéré (Ka = 10⁻⁴·⁸), NH₄⁺ a un ressort très faible (Ka = 10⁻⁹·²). Quel que soit le contexte, ces tensions ne changent pas.

Pour faciliter la manipulation (les Ka sont souvent très petits, de l'ordre de 10⁻⁵), on définit le **pKa** :

Définition du pKa
pK a = −log(K a ) ⟺ K a = 10 −pKa

💡 **Exemple concret pour comprendre la transition Ka → pKaCas 1 — un nombre rond :** imagine une molécule dont on mesure Ka = 10⁻⁵ mol/L en laboratoire. Manipuler « 10⁻⁵ » dans des calculs, c'est lourd. On prend −log :

pKa = −log(10⁻⁵) = −(−5) = **5**

Donc cette molécule a un pKa = 5. Beaucoup plus pratique à dire et à comparer qu'« un Ka de dix puissance moins cinq ». Le pKa, c'est juste « l'exposant de Ka, avec le signe changé ».

**Cas 2 — un cas réel (acide acétique CH₃COOH) :** en labo, on mesure Ka = 1,8 × 10⁻⁵ mol/L. On prend −log :

pKa = −log(1,8 × 10⁻⁵) = −[log(1,8) + log(10⁻⁵)]
pKa = −[0,26 + (−5)] = −[−4,74] = **4,74 ≈ 4,8**

👉 C'est la valeur que tu retrouveras partout pour l'acide acétique : **pKa = 4,8**. À chaque fois que tu lis « pKa = 4,8 » dans un tableau, ça veut dire en réalité « Ka ≈ 1,8 × 10⁻⁵ » — mais c'est tellement plus simple de manipuler 4,8 qu'on garde uniquement le pKa.

Tu remarques que le passage Ka → pKa **retourne l'échelle** : Ka petit (acide qui se dissocie peu) → pKa grand. Et inversement Ka grand → pKa petit. C'est exactement la même astuce que pH = −log[H⁺].

Interprétation rapide — les 3 grandes zones du pKa :

- **pKa < 0** → acide **FORT** (totalement ionisé dans l'eau, dissociation à 100 %). Exemples : HCl (pKa ≈ −7), H₂SO₄ (pKa ≈ −3). La base conjuguée n'a aucun rôle basique : on dit qu'elle est « indifférente » ou « spectatrice ».

- **0 < pKa < 14** → acide **FAIBLE** (dissociation partielle, équilibre dynamique). Exemples : acide acétique pKa 4,8, NH₄⁺ pKa 9,2. La base conjuguée est faible aussi, mais active.

- **pKa > 14** → acide **très faible / négligeable** (ne se dissocie quasiment pas dans l'eau). La base conjuguée devient alors une base forte (totalement protonée dans l'eau).

🔑 **Lire un pKa — la règle en une phrase**

Au sein de chaque catégorie (et surtout entre acides faibles, où la plage est large), **plus le pKa est petit, plus l'acide se dissocie** :

- **pKa = 4,8** (acide acétique) → Ka modérément grand → se dissocie « plutôt bien » (mais reste un acide faible)

- **pKa = 9,2** (NH₄⁺) → Ka petit → se dissocie peu

- **pKa = 15** → Ka minuscule → ne se dissocie quasiment pas → acide négligeable

⚠️ **Attention au piège** : un acide à pKa = 2 (ex : acide chloreux) reste un acide faible sur le plan strict (puisque 0 < pKa < 14, dissociation pas à 100 %), mais c'est un acide « relativement fort dans la catégorie des faibles ». La frontière « acide fort » au sens strict, c'est pKa < 0.

🧠 **Analogie à graver** : le pKa, c'est comme la **force de grip** d'une main qui tient une balle (le H⁺). Grip faible (petit pKa) → la balle s'échappe facilement → l'acide se dissocie bien. Grip fort (grand pKa) → la balle est bien tenue → l'acide garde son H⁺.

Et pour les **bases** ? On ne définit pas un « pKb » en première année. À la place, on utilise **le pKa de l'acide conjugué**. Par exemple, pour l'ammoniac NH₃ (base), on donne le pKa de NH₄⁺ (son acide conjugué) = 9,2. Plus ce pKa est **grand**, plus la base est **forte** — car ça veut dire que l'acide conjugué est faible (il ne reprend pas facilement le H⁺), donc la base garde bien son proton capté.

💡 **Piège classique — Ne confonds pas pH et pKa !**

Le **pH** décrit l'état d'une **solution** — il change si tu dilues, si tu ajoutes un acide, etc.

Le **pKa** est une propriété fixe d'une **molécule** — il ne change pas (sauf si tu changes la température, ce qui est rare au concours).

Au QCM : si on te demande « quel est le pH d'une solution de NH₄⁺ ? » → c'est un calcul. Si on te demande « quel est le pKa de NH₄⁺ ? » → c'est une valeur fixe (9,2), généralement **donnée dans l'énoncé** ou dans un tableau fourni en début d'épreuve.

📝 **Est-ce qu'on doit calculer un pKa au QCM ?**

Dans **95 % des cas en P1, NON** — le pKa est une donnée fournie dans l'énoncé. Tu n'as qu'à l'utiliser pour faire d'autres calculs (forme prédominante, pH d'un tampon, etc.).

Mais 2 cas (rares) où on peut te demander de le calculer :

- **À partir d'un Ka donné** : tu appliques juste pKa = −log(Ka). Calcul direct (cf. exemple acide acétique ci-dessus).

- **À partir de concentrations à l'équilibre** : si on te donne [AH], [A⁻], [H⁺] → tu calcules d'abord Ka avec la formule, puis pKa.

Mais 9 fois sur 10, le pKa t'est donné. Tu ne risques pas d'avoir à le sortir de nulle part.

⚖️ **LA règle d'or à graver à vie : acide fort ↔ base conjuguée faible (et inversement)**

C'est comme une **vieille balance à deux plateaux** (le genre qu'on trouvait chez le pharmacien) : d'un côté l'acide AH, de l'autre la base conjuguée A⁻. **Quand un plateau monte, l'autre descend obligatoirement.** Chaque fois qu'un acide est fort, sa base conjuguée est obligatoirement faible. Et chaque fois qu'une base est forte, son acide conjugué est obligatoirement faible. Pourquoi ? Parce qu'être un acide « fort », c'est n'avoir aucune envie de garder son H⁺ → donc une fois qu'il l'a cédé, sa forme déprotonée (A⁻) n'a aucune envie de le reprendre non plus → la base conjuguée est inerte, « spectatrice ».

**Exemples concrets :**

- **HCl** (acide fort) → **Cl⁻** (base ultra-faible, totalement inerte dans l'eau)

- **NaOH** (base forte) → **Na⁺** (acide ultra-faible, totalement inerte)

- **CH₃COOH** (acide faible, pKa 4,8) → **CH₃COO⁻** (base faible mais réelle, qui peut reprendre un H⁺ — c'est ce qui rend le tampon acétate possible)

- **NH₄⁺** (acide faible, pKa 9,2) → **NH₃** (base faible mais réelle)

🧠 **Image mentale — une seule affinité pour le H⁺, partagée par les deux formes**

L'affinité d'un couple pour le proton, c'est **une seule et même propriété** qui se voit sous deux angles :

- Côté **AH** : à quel point AH veut garder son H⁺ ? (= acide faible si oui, fort si non)

- Côté **A⁻** : à quel point A⁻ veut reprendre un H⁺ ? (= base forte si oui, faible si non)

Ces deux questions mesurent **la même chose**. Si le couple a une affinité faible pour le H⁺ → AH le lâche d'office (acide fort) ET A⁻ ne va pas le rechercher (base faible). Si le couple a une affinité forte pour le H⁺ → AH le retient (acide faible) ET A⁻ peut le reprendre (base faible mais active).

👉 Donc **tu ne peux JAMAIS avoir un acide fort ET une base conjuguée forte dans le même couple** : ça reviendrait à dire que la même affinité est à la fois nulle et énorme. Chimiquement impossible.

👉 Conséquence directe : ce sont précisément les **couples « tous les deux faibles »** (acide faible + base conjuguée faible mais active) qui peuvent jouer le rôle de tampon. Les couples « acide fort + base inerte » (comme HCl/Cl⁻) ne tamponnent rien : la base conjuguée est trop molle pour neutraliser quoi que ce soit. **C'est pour ça que les solutions tampons physiologiques (bicarbonate, phosphate, hémoglobine) sont toutes des acides faibles.**

Quantitativement, cette balance s'écrit : **pKa + pKb = 14** (à 25 °C, pour un couple acide/base conjugués).

[FIGURE physique_ch2_fig11_balance_acide_base.png]

**Figure 11** — La règle d'or illustrée : la balance penche du côté de l'acide fort (lâche son H⁺) et l'autre plateau (la base conjuguée) reste léger et inerte. Une seule affinité pour H⁺, vue des deux côtés du couple.

### 3. La loi d'Ostwald — Comment α dépend de la concentration

#### 🤔 D'où sort ce coefficient α en pratique, et de quoi dépend-il ?

On a introduit au **ch.1 (section V)** le **coefficient de dissociation α** = fraction des molécules dissociées à l'équilibre (entre 0 et 1). Pour un acide fort comme HCl, α = 1 (tout est dissocié). Pour un acide faible comme l'acide acétique, α est petit (typiquement 1 à 5 %). Mais d'où vient cette valeur précise ? **α ne tombe pas du ciel** : il est imposé par deux choses — le pKa de la molécule (sa « tendance intrinsèque » à se dissocier) ET la concentration initiale C₀ (combien on en a mis dans le bécher).

La **loi d'Ostwald** (chimiste allemand, prix Nobel 1909) est la formule qui relie ces 3 grandeurs : **Ka, C₀ et α**. C'est l'un des outils les plus rentables de toute la chimie en solution — et un grand classique des QCM de P1.

#### 🧱 Construction pas-à-pas de la loi

🔑 **Dérivation en 4 étapesÉtape 1** — On part de la réaction de dissociation d'un acide faible AH dans l'eau :

AH ⇌ A⁻ + H⁺

**Étape 2** — On dresse le **tableau d'avancement** (la même méthode qu'au ch.1, en utilisant α comme fraction dissociée) :

|

| État
| [AH]
| [A⁻]
| [H⁺]

| **① t = 0** (avant) | C₀ | 0 | 0

| **② Équilibre** | **C₀(1−α)** | **C₀α** | **C₀αÉtape 3** — On écrit la constante Ka (vue plus haut) en remplaçant les concentrations par leurs expressions en α :

Ka = [A⁻] × [H⁺] / [AH] = (C₀α) × (C₀α) / C₀(1−α)

**Étape 4** — On simplifie (un C₀ s'élimine au numérateur et au dénominateur) :

**Ka = C₀ × α² / (1 − α)**

👉 C'est la **loi d'Ostwald**. Elle relie 3 quantités : la constante d'acidité Ka (fixe pour une molécule donnée), la concentration initiale C₀ et le coefficient de dissociation α.

Loi d'Ostwald
K a = C 0 × α² / (1 − α)
Et si l'acide est très faiblement dissocié (α << 1, ce qui est typique), alors (1 − α) ≈ 1 et la formule se simplifie en : **Ka ≈ C₀ × α²**

#### 🔑 La conséquence-clé : la loi d'Ostwald (énoncée)

⚖️ **Loi d'Ostwald (l'énoncé qu'il faut graver)**

Pour un acide faible donné (Ka fixé par la molécule, ne dépend que de la température) :

- **Si on dilue la solution** (C₀ diminue) → **α augmente** (l'acide se dissocie davantage)

- **Si on concentre la solution** (C₀ augmente) → **α diminue** (l'acide se dissocie moins)

Autrement dit : **plus on dilue un acide faible, plus il est « fort » en proportion**. Contre-intuitif mais c'est une conséquence directe de Ka = C₀·α²/(1−α) avec Ka constant : si C₀ diminue, α doit augmenter pour compenser et garder le produit constant.

🧠 **Analogie — La foule dans un stade**

Pense à des spectateurs dans un stade. Quand le stade est **bondé** (forte concentration C₀), les gens sont coincés, immobiles — peu se déplacent (α petit). Quand le stade est **presque vide** (faible C₀), chacun se balade librement — la proportion de gens en mouvement est plus grande (α grand). La quantité totale de gens « en mouvement » (= C₀·α) est régie par la même règle physique (Ka), mais la proportion change selon la densité.

👉 De la même manière, les molécules d'acide faible se dissocient plus facilement quand elles ont plus d'espace (= solution diluée), parce qu'elles ne sont plus gênées par leurs voisines.

**🧪 Mini-exercice — Acide acétique à 2 concentrations différentesÉnoncé :** L'acide acétique (CH₃COOH) a une constante Ka = 1,8 × 10⁻⁵ mol/L (pKa = 4,8). On prépare deux solutions :

- Solution A : C₀ = 1 mol/L (concentrée)

- Solution B : C₀ = 10⁻⁴ mol/L (très diluée, 10 000 fois moins)

Dans chaque cas, calcule le coefficient de dissociation α. Que constates-tu ?

👁️ Voir la correction

**Correction :**

On utilise la loi d'Ostwald simplifiée (Ka ≈ C₀·α² puisque α est petit pour un acide faible), ce qui donne : **α ≈ √(Ka / C₀)**.

**Solution A (C₀ = 1 mol/L) :**

α = √(1,8 × 10⁻⁵ / 1) = √(1,8 × 10⁻⁵) ≈ 4,2 × 10⁻³ ≈ **0,42 %**

Quasiment tout l'acide reste sous forme AH non dissociée. Sur 1 mol, seulement 4,2 millimoles se sont dissociées en A⁻ + H⁺.

**Solution B (C₀ = 10⁻⁴ mol/L, donc 10 000 fois plus diluée) :**

α = √(1,8 × 10⁻⁵ / 10⁻⁴) = √(0,18) ≈ 0,42 ≈ **42 %**

Maintenant **42 %** de l'acide est dissocié — c'est 100 fois plus qu'avant !

**Observation :** en diluant 10 000 fois, α a été multiplié par 100 (√10 000 = 100). C'est exactement ce que prédit la loi d'Ostwald : **la dilution favorise massivement la dissociation**.

📌 **Conclusion clinique** : si tu prépares un sirop d'acide faible et que tu le dilues avec de l'eau, son pH ne va pas simplement « se rapprocher de 7 » par dilution mécanique — il y a un effet supplémentaire car α augmente. Cette subtilité tombe régulièrement aux QCM.

#### 🔗 Bouclage avec le ch.1 : retour à l'osmolarité

Rappel du ch.1 : pour un électrolyte binaire AB, l'osmolarité s'écrit **ω = (1 + α)·C₀**, ou avec le coefficient d'ionisation **i = 1 + α**, soit **ω = i × C₀**. À l'époque on n'avait pas encore les outils pour calculer α — maintenant si.

💡 **Conséquence pratique sur l'osmolarité**

Quand on dilue une solution d'acide faible :

- C₀ diminue → ω = (1+α)·C₀ devrait diminuer aussi

- MAIS α augmente (Ostwald) → ω diminue un peu moins que C₀

Pour les acides faibles courants, l'effet sur ω reste néanmoins faible (α reste petit devant 1, sauf en dilution extrême). Pour les calculs de QCM, l'approximation ω ≈ C₀ est presque toujours valable pour les acides faibles concentrés — sauf si l'énoncé te demande explicitement de tenir compte d'Ostwald.

### 4. Diagramme de prédominance — Quelle forme prédomine selon le pH ?

#### 🤔 J'ai le pH et le pKa… comment savoir quelle forme est présente ?

C'est LA question clé de l'acido-basicité. Pour un couple AH/A⁻ donné, la forme qui domine dans la solution dépend du pH par rapport au pKa. C'est ce qu'on appelle le **diagramme de prédominance**, l'un des graphes les plus utiles à maîtriser. La réponse tient en une règle simple :

🔑 **Le pKa est la frontière**

Le pKa sépare le « territoire » de la forme acide (à gauche, pH bas) de celui de la forme basique (à droite, pH élevé). C'est un **interrupteur** : en traversant le pKa, la molécule change de forme majoritaire.

🧠 **Astuce moyen mnémo** : « **pH petit → H⁺ en excès → AH garde son H⁺** ». C'est logique : dans un milieu très acide (plein de H⁺), la molécule n'a aucune raison de larguer le sien.

[FIGURE physique_ch2_fig02_diagramme_predominance.png]

**Figure 2** — Diagramme de prédominance : l'acide AH domine si pH < pKa, la base A⁻ domine si pH > pKa. À pH = pKa, les deux formes sont en quantité égale (le tampon est optimal).

**🔑 Les 3 cas à automatiser**

- **pH < pKa − 1** → la forme **acide AH** domine (à plus de 90 %)

- **pH = pKa** → [AH] = [A⁻] (équilibre exact, zone tampon maximale)

- **pH > pKa + 1** → la forme **basique A⁻** domine (à plus de 90 %)

Le diagramme de prédominance est fondamental en pharmacologie. Un médicament avec un pKa de 7,4 sera à 50 % sous forme acide et 50 % sous forme basique dans le sang à pH 7,4. Cette répartition **affecte directement son absorption** : seules les formes neutres traversent facilement les membranes (transport passif). Si tu modifies le pH (en alcalinisant les urines, par exemple), tu modifies la proportion d'acide/base et donc l'élimination du médicament. C'est exactement comme ça que l'on traite les intoxications à l'aspirine : on alcalinise les urines pour favoriser la forme basique (chargée, non absorbée par les tubules rénaux) et accélérer l'élimination.

### 5. Acides et bases faibles importants en physiologie

Voici quelques couples physiologiques que tu rencontreras régulièrement. **Pas besoin de les apprendre par cœur** : les pKa te seront toujours donnés dans l'énoncé. Ce tableau est à titre informatif , pour que tu reconnaisses les acteurs principaux quand tu les croiseras :

|

| Couple acide/base
| pKa
| Rôle physiologique

| **H₂CO₃ / HCO₃⁻** | **6,1 (apparent)** | Tampon principal du plasma sanguin

| H₂PO₄⁻ / HPO₄²⁻ | 7,2 | Tampon intracellulaire et urinaire

| NH₄⁺ / NH₃ | 9,3 | Tampon urinaire (élimination des H⁺)

| Acide lactique / lactate | 3,9 | Métabolisme musculaire (effort intense)

👉 **Si tu devais retenir UN seul pKa**, ce serait celui du **bicarbonate (6,1)** — c'est lui qui revient partout en physiologie acido-basique (gazométries, troubles compensés, équation de Henderson-Hasselbalch sanguine vue à la section IV). Les autres, tu les reconnaîtras au fil du temps sans effort de mémorisation.

**🧪 Mini-exercice — Forme prédominante de l'acide lactique dans le sangÉnoncé :** L'acide lactique a un pKa de 3,9. À pH sanguin (7,4), sous quelle forme se trouve-t-il majoritairement ?

👁️ Voir la correction

**Correction :**

On compare pH (= 7,4) au pKa (= 3,9). Comme pH > pKa + 1, la **forme basique (lactate, CH₃CHOH-COO⁻)** domine très largement.

Quantitativement : pH − pKa = 7,4 − 3,9 = 3,5. Le ratio [base]/[acide] = 10^3,5 ≈ 3000. Pour 3000 molécules de lactate, il y a 1 molécule d'acide lactique non dissocié.

C'est pour cette raison qu'on parle d'**« acide lactique »** dans le langage courant mais que les biologistes mesurent toujours « le lactate » au laboratoire — c'est la forme largement majoritaire à pH physiologique.

×

medeos-sante.fr