Chapitre 9 : Cinétique chimique — Vitesse, ordre et catalyse - MEDEOS — Partie 1

Chapitre 9 — Partie 1

# Cinétique chimique — Vitesse, ordre et catalyse

Comprendre à quelle vitesse se déroulent les réactions et comment les accélérer

## 🎯 Objectifs d'apprentissage

Au chapitre 8, tu as appris à prédire **si** une réaction est spontanée (ΔG < 0) et **où** elle s'arrête (Keq). Mais savoir qu'une réaction est spontanée ne dit **rien sur sa vitesse**. Le diamant se transforme spontanément en graphite (ΔG < 0)… mais ça prend des milliards d'années !

La **cinétique chimique** répond à la question : « **À quelle vitesse** une réaction se produit-elle ? » et « **Comment** l'accélérer ? ». C'est fondamental en médecine : la pharmacocinétique (élimination des médicaments), les réactions enzymatiques et la radioactivité obéissent toutes à ces lois.

Après ce chapitre, tu sauras :

- **Définir** la vitesse de réaction et écrire une loi de vitesse

- **Distinguer** les réactions d'ordre 0, 1 et 2 et calculer le temps de demi-vie

- **Appliquer** la loi d'Arrhenius : k = A × e −Ea/RT

- **Interpréter** un profil énergétique (Ea, état de transition, ΔH)

- **Expliquer** le rôle d'un catalyseur et distinguer catalyse homogène, hétérogène et enzymatique

## I. Vitesse de réaction : définition et loi de vitesse

### 1. Définition de la vitesse

La vitesse d'une réaction mesure **à quel rythme les réactifs disparaissent** (ou les produits apparaissent) au cours du temps.

**Analogie** : imagine une baignoire pleine qui se vide. La vitesse, c'est combien de litres s'écoulent par minute . Si tu ouvres grand la bonde, l'eau file vite (v élevée). Si tu la laisses à peine ouverte, l'eau sort lentement (v faible). En chimie, c'est pareil : on mesure combien de **moles de réactif disparaissent par litre et par seconde**. Plus cette valeur est grande, plus la réaction « file vite ».

Exemple concret : un comprimé d'aspirine se dissout en 30 secondes dans de l'eau chaude, mais en 5 minutes dans de l'eau froide → la vitesse dépend de la température.

Pour une réaction : a A + b B → x X + y Y

En maths, tu connais la dérivée : elle mesure à quelle vitesse une fonction varie . Ici c'est pareil : **d[A]/dt** signifie « de combien la concentration [A] change par unité de temps ». Si [A] passe de 0,10 à 0,08 mol/L en 10 s, alors d[A]/dt ≈ (0,08 − 0,10) / 10 = −0,002 mol·L⁻¹·s⁻¹. Le signe est négatif parce que le réactif **disparaît**.

La **vitesse de réaction** mesure cette variation, mais on la veut **positive**. On la divise par les coefficients stœchiométriques pour obtenir une valeur **unique**, quel que soit le réactif ou le produit choisi :

Pourquoi diviser par a, b, x, y ? — Prenons 2 H₂ + O₂ → 2 H₂O. Si 2 moles de H₂ disparaissent, seulement 1 mole de O₂ disparaît. Sans les coefficients, la « vitesse » serait différente selon qu'on regarde H₂ ou O₂. En divisant par le coefficient (2 pour H₂, 1 pour O₂), on obtient **la même valeur** pour tous.

Vitesse de réaction
v = −(1/a) × d[A]/dt = −(1/b) × d[B]/dt = (1/x) × d[X]/dt = (1/y) × d[Y]/dt

- Unité : **mol·L⁻¹·s⁻¹** (ou mol·L⁻¹·min⁻¹)

- La vitesse est **toujours positive**

- Le signe **−** devant les réactifs compense le fait que leur concentration **diminue** (d[A]/dt < 0)

💡 **Astuce** — Sur un graphique [concentration] = f(t), la vitesse à un instant donné correspond à la **pente de la tangente** à la courbe en ce point. Au début de la réaction, la pente est forte (vitesse élevée), puis elle diminue au fur et à mesure que les réactifs sont consommés.

✏️ **Exemple d'application — Calculer v à partir de la formule**

Considère la réaction : **N₂ + 3 H₂ → 2 NH₃**

À un instant donné, on mesure que la concentration en H₂ diminue de **0,06 mol·L⁻¹** en **10 s**.

**Étape 1 — Calculer d[H₂]/dt :**

La concentration de H₂ diminue , donc la variation est négative :

d[H₂]/dt = −0,06 / 10 = **−0,006 mol·L⁻¹·s⁻¹Étape 2 — Appliquer la formule avec le coefficient de H₂ (= 3) :**

v = −(1/3) × d[H₂]/dt = −(1/3) × (−0,006) = **+0,002 mol·L⁻¹·s⁻¹**

Les deux signes « − » s'annulent → on obtient bien une vitesse positive ✅

**Étape 3 — Vérifions que la formule donne le même v avec NH₃ :**

La formule dit : v = +(1/2) × d[NH₃]/dt. On connaît v = 0,002, on cherche d[NH₃]/dt :

0,002 = (1/2) × d[NH₃]/dt

→ on multiplie les deux côtés par 2 :

d[NH₃]/dt = 0,002 × 2 = **+0,004 mol·L⁻¹·s⁻¹**

Est-ce logique ? Oui ! L'équation dit « 3 H₂ → 2 NH₃ ». Autrement dit, **pour chaque lot de 3 molécules de H₂ qui disparaissent, seulement 2 molécules de NH₃ apparaissent**. Donc NH₃ apparaît moins vite (0,004) que H₂ ne disparaît (0,006). Le rapport 0,004 / 0,006 = 2/3, exactement le rapport des coefficients (2 et 3) ✅

→ **Conclusion :** peu importe l'espèce qu'on regarde (N₂, H₂ ou NH₃), la formule avec les coefficients donne toujours **v = 0,002 mol·L⁻¹·s⁻¹**. C'est tout l'intérêt de diviser par les coefficients stœchiométriques !

**Interprétation :** à cet instant, la réaction avance à une vitesse de **0,002 mol·L⁻¹·s⁻¹**. Concrètement, chaque seconde et dans chaque litre de solution : **0,006 mol de H₂ disparaissent** (= 3 × 0,002) et **0,004 mol de NH₃ apparaissent** (= 2 × 0,002).

### 2. Loi de vitesse et notion d'ordre

On a vu que la vitesse dépend des concentrations. Mais **de quelle manière exactement ?** Est-ce que doubler la concentration d'un réactif double la vitesse ? La quadruple ? N'a aucun effet ? C'est l'**ordre** qui répond à cette question.

**Analogie simple :** imagine un feu de cheminée. Le bois, c'est le réactif A. L'air (oxygène), c'est le réactif B.

- Si tu **doubles le nombre de bûches** (A × 2), le feu brûle-t-il 2 fois plus vite ? 4 fois ? Ça dépend du type de feu → c'est l'**ordre par rapport à A** qui le dit.

- Si tu **souffles 2 fois plus d'air** (B × 2), même question → c'est l'**ordre par rapport à B**.

L'« ordre » est simplement **l'exposant** qui traduit la sensibilité de la vitesse à la concentration de chaque réactif :

Loi de vitesse
v = k × [A]ᵐ × [B]ⁿ

|
| Symbole | C'est quoi ? | En clair

| **k** | Constante de vitesse | Un nombre fixe (à T donnée) qui « calibre » la vitesse. Il dépend de la température, mais **pas** des concentrations.

| **m** | Ordre par rapport à A | L'exposant de [A]. Il dit : « si je multiplie [A] par 2, la vitesse est multipliée par **2ᵐ** ».

| **n** | Ordre par rapport à B | L'exposant de [B]. Même logique : [B] × 2 → v × **2ⁿ**.

| **m + n** | Ordre global | La somme des deux exposants. C'est l'ordre « total » de la réaction.

**Exemple pas à pas :** On étudie la réaction A + B → produits. Au labo, on fait 3 expériences :

| | Expérience | [A] (mol/L) | [B] (mol/L) | v mesurée (mol·L⁻¹·s⁻¹)

| ① (référence) | 0,10 | 0,20 | 0,001

| ② (on double [A]) | **0,20** | 0,20 | **0,004**

| ③ (on double [B]) | 0,10 | **0,40** | **0,002Trouver m (ordre par rapport à A) :** on compare ① et ② (seul [A] change) :

[A] a été multiplié par 2 → v a été multipliée par 0,004/0,001 = **4**.

Or 4 = 2² → donc m = **2**. (Doubler [A] quadruple v → la vitesse est très sensible à [A].)

**Trouver n (ordre par rapport à B) :** on compare ① et ③ (seul [B] change) :

[B] a été multiplié par 2 → v a été multipliée par 0,002/0,001 = **2**.

Or 2 = 2¹ → donc n = **1**. (Doubler [B] double v → la vitesse est proportionnelle à [B].)

**Conclusion :** la loi de vitesse est **v = k × [A]² × [B]¹**. L'ordre global est m + n = 2 + 1 = **3**.

💡 **Astuce — Recette rapide pour trouver l'ordre**

On multiplie la concentration par 2 (en gardant l'autre fixe) et on regarde par combien la vitesse est multipliée :

• v × **1** (pas de changement) → ordre **0**

• v × **2** → ordre **1**

• v × **4** → ordre **2**

• v × **8** → ordre **3**

Logique : 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8.

🔑 **Notion clé — L'ordre n'est PAS le coefficient stœchiométrique**

Attention au piège classique : m et n ne sont **pas forcément** égaux aux coefficients stœchiométriques a et b. L'ordre est une grandeur **expérimentale** : on le détermine en mesurant la vitesse à différentes concentrations (comme dans le tableau ci-dessus). Ce n'est que pour une **réaction élémentaire** (en une seule étape) que m = a et n = b.

Exemple : la réaction 2 N₂O₅ → 4 NO₂ + O₂ a un coefficient stœchiométrique de 2 pour N₂O₅, mais expérimentalement on trouve v = k × [N₂O₅] 1 (ordre 1, pas 2 !). C'est parce que la réaction se fait en **plusieurs étapes** — l'ordre reflète le mécanisme réel, pas le simple bilan global.

### 3. Facteurs qui influencent la vitesse

|

| Facteur
| Effet sur v
| Explication

| **Température** (T ↗)
| v ↗ (fortement)
| Plus de collisions efficaces (Arrhenius)

| **Concentration** (↗)
| v ↗
| Plus de molécules → plus de rencontres

| **Surface de contact** (↗)
| v ↗
| Plus d'interface réactive (catalyse hétérogène)

| **Catalyseur**
| v ↗↗
| Abaisse l'énergie d'activation Ea (on verra ça en détail section III)

| **Lumière**
| v ↗ (parfois)
| Photoréactions (ex : radicaux)

💡 **Astuce — Le piège v vs Ea ★★★Ea** (énergie d'activation) = l'énergie minimale que les molécules doivent posséder pour que la réaction démarre. Pense à une **barrière à sauter** : si la barrière est haute (Ea grande), peu de molécules réussissent à passer → la réaction est lente. Si la barrière est basse (Ea petite), beaucoup passent → la réaction est rapide. (On détaillera Ea en section III avec la loi d'Arrhenius.)

Au concours, on te propose souvent : « La concentration modifie Ea » ou « La température modifie Ea ». C'est **FAUX**. Seul le **catalyseur** modifie Ea (il abaisse la barrière). Les autres facteurs augmentent la vitesse **autrement**, sans toucher à la barrière :

- **Concentration ↑** → plus de molécules dans le même volume → plus de collisions → v ↑ (mais Ea reste la même)

- **Température ↑** → les molécules bougent plus vite → plus de collisions dépassent la barrière Ea → v ↑ (mais la hauteur de la barrière Ea, elle, ne bouge pas)

- **Catalyseur** → c'est le **seul** qui abaisse la barrière Ea elle-même → v ↑↑

En résumé : augmenter la vitesse ≠ diminuer Ea. On peut aller plus vite sans abaisser la barrière — il suffit d'envoyer plus de molécules (concentration) ou de leur donner plus d'élan (température).

### 4. Dégénérescence de l'ordre (= « simplifier la loi de vitesse quand un réactif est en excès »)

**Le problème :** on a vu que la loi de vitesse peut être v = k × [A]ᵐ × [B]ⁿ. Mais quand il y a **deux réactifs** dans la formule, c'est compliqué à étudier expérimentalement : si les deux concentrations changent en même temps, on ne sait pas qui est responsable de quoi. Comment faire ?

**L'astuce :** on met un des deux réactifs en **énorme excès**, pour que sa concentration **ne bouge quasiment pas** au cours de la réaction. Comme ça, on élimine son influence et on peut étudier l'autre tranquillement.

**Analogie :** tu dissous un sucre (A) dans une piscine d'eau (B). Au départ, il y a des milliards de milliards de molécules d'eau, et seulement quelques grammes de sucre. Quand le sucre réagit avec l'eau, la quantité d'eau utilisée est tellement infime par rapport au total que **[eau] reste pratiquement la même** du début à la fin. Tout se passe comme si l'eau n'intervenait pas dans la loi de vitesse — seule la concentration de sucre compte.

**En maths, ça donne :**

- Loi de vitesse complète : v = k × [A]ᵐ × [B]ⁿ

- Mais [B] ne bouge pas → on peut la considérer comme un **nombre fixe** (une constante)

- On regroupe k et [B]ⁿ en un seul nombre qu'on appelle **k'** :

Pseudo-ordre
k' = k × [B]₀ⁿ (un seul nombre constant)

→ v = k' × [A]ᵐ

Au lieu d'une loi à **2 réactifs** (ordre global m+n), on se retrouve avec une loi à **1 seul réactif** (ordre apparent = m). On appelle ça le **pseudo-ordre m**.

Exemple concret : l'hydrolyse de l'aspirine dans l'eau.

- Loi de vitesse théorique : v = k × [aspirine]¹ × [H₂O]¹ → ordre global = 1 + 1 = **2**

- Mais l'eau est le **solvant** ! Sa concentration est énorme :

[H₂O] = 1000 g ÷ 18 g/mol = **55,5 mol/L**

⚠️ Ce chiffre n'est PAS à apprendre par cœur — il se **retrouve** en 5 secondes : 1 litre d'eau = 1000 g, et la masse molaire de H₂O se calcule depuis le tableau périodique : H pèse 1 g/mol, O pèse 16 g/mol, donc H₂O = 2×1 + 16 = **18 g/mol** (ça, c'est à connaître ou à retrouver). Ensuite 1000 ÷ 18 ≈ 55,5. Ce qui compte, c'est de retenir que c'est un nombre **énorme** comparé aux concentrations habituelles d'un réactif en solution.

contre [aspirine] ≈ **0,01 mol/L** (5 500 fois moins !)

- Quand un peu d'aspirine réagit, elle consomme un peu d'eau, mais 55,5 mol/L ne change quasiment pas → [H₂O] ≈ constante

- On repart de la loi complète : v = k × [aspirine]¹ × [H₂O]¹

Puisque [H₂O] ≈ 55,5 mol/L (constante), on remplace :

v = k × [aspirine] × **55,5**

On regroupe k × 55,5 en un seul nombre qu'on appelle **k'** :

k' = k × 55,5 → c'est juste un nombre fixe (puisque k et 55,5 sont tous les deux constants)

→ **v = k' × [aspirine]**

Ce qu'on vient de trouver : une loi de vitesse qui ne dépend plus que d'**une seule concentration** — celle de l'aspirine. On a simplifié l'ordre 2 en pseudo-ordre 1. Au labo, si on mesure k', il suffit de diviser par 55,5 pour retrouver le vrai k.

- → On observe un **pseudo-ordre 1** (au lieu de l'ordre 2 théorique) ✅

💡 **Astuce** — Au concours, dès que tu vois un réactif qui est aussi le **solvant** (eau, acide concentré…) ou qui est en « large excès », pense immédiatement **dégénérescence de l'ordre** : sa concentration est constante, elle disparaît de la loi de vitesse, et l'ordre apparent diminue.

## II. Ordres de réaction : ordre 0, 1 et 2

Tu sais maintenant ce qu'est la vitesse et quels facteurs l'influencent. Mais une question reste ouverte : **comment la concentration du réactif évolue-t-elle au cours du temps ?** Est-ce une droite ? Une courbe ? La réponse dépend de l'**ordre** de la réaction — et c'est ce que cette section va détailler.

Pour une réaction simple A → Produits, les trois ordres les plus courants en première année sont résumés ci-dessous. Pour chaque ordre, on part de la loi de vitesse (v = …) et on l'**intègre** mathématiquement (comme quand tu calcules une primitive en maths) pour obtenir la **loi intégrée** — c'est-à-dire la formule qui donne directement [A] en fonction du temps t. Pas besoin de refaire l'intégration en première année : il faut **connaître le résultat**.

### 1. Réaction d'ordre 0

**Analogie** : c'est comme une perfusion à débit constant — le médicament entre dans le sang à un rythme fixe, peu importe combien il y en a déjà. La vitesse ne dépend pas de la concentration du réactif : c'est une constante.

Ordre 0
v = k (constante, indépendante de [A])

- **Loi intégrée : [A] = [A]₀ − kt**

C'est une droite descendante. Exemple : si [A]₀ = 1,0 mol/L et k = 0,1 mol·L⁻¹·s⁻¹, alors :

à t = 0 s → [A] = 1,0 − 0,1×0 = **1,0 mol/L**

à t = 3 s → [A] = 1,0 − 0,1×3 = **0,7 mol/L**

à t = 6 s → [A] = 1,0 − 0,1×6 = **0,4 mol/L**

→ La concentration baisse de **0,1 mol/L à chaque seconde**, toujours pareil. C'est ça, « linéaire ».

- **Graphe linéaire : [A] = f(t)** → si tu traces [A] en fonction du temps, tu obtiens une droite de pente **−k** (la pente est négative car [A] diminue).

Astuce : si le graphe [A] vs t est une droite → c'est de l'ordre 0. Si c'est une courbe, ce n'est pas de l'ordre 0.

- **Temps de demi-vie : t₁/₂ = [A]₀ / (2k)**

C'est quoi une demi-vie ? C'est simplement le temps qu'il faut pour que la **quantité de réactif soit divisée par 2** — qu'il en reste la moitié. Par exemple, si tu démarres avec 10 mol de réactif, la demi-vie est atteinte quand il n'en reste plus que **5 mol**. Peu importe les unités : c'est juste « la moitié ».

La formule a l'air complexe, mais l'intuition est simple : si tu pars de 1,0 mol/L et que tu perds 0,1 mol/L chaque seconde, combien de temps pour atteindre la moitié (0,5 mol/L) ? Il faut perdre 0,5 mol/L, à raison de 0,1 par seconde → **5 secondes**. Pas besoin de formule pour le sentir !

La formule ne fait qu'écrire ça en général : t₁/₂ = ([A]₀/2) ÷ k = [A]₀ / (2k)

Exemple avec les mêmes chiffres : t₁/₂ = 1,0 / (2 × 0,1) = 1,0 / 0,2 = **5 s**

Vérification : à t = 5 s, [A] = 1,0 − 0,1×5 = 0,5 mol/L = [A]₀/2 ✅

- **Unité de k : mol·L⁻¹·s⁻¹**

Logique : v = k est une vitesse, et une vitesse s'exprime en mol·L⁻¹·s⁻¹ → donc k aussi.

- **t₁/₂ dépend de [A]₀** — contrairement à l'ordre 1 (où t₁/₂ est fixe), ici si tu doubles [A]₀, tu doubles aussi t₁/₂.

Ce raisonnement fonctionne **uniquement parce qu'en ordre 0, la vitesse est constante** (v = k, toujours la même, peu importe [A]). C'est exactement la définition de l'ordre 0. Donc si tu as plus de réactif au départ mais que tu le consommes toujours au même rythme fixe, il faut mécaniquement plus de temps pour en perdre la moitié.

Logique avec l'analogie perfusion : si tu as 2 poches de perfusion au lieu d'une (double [A]₀), et que le débit est identique (vitesse constante = ordre 0), il faut 2 fois plus de temps pour en vider la moitié.

[FIGURE chimie_ch09_ordre0_graphe.png]

**Graphe ordre 0** — [A] diminue linéairement avec le temps : droite descendante de pente −k.

**Comment lire les points ?** Chaque point est noté (t ; [A]), c'est-à-dire (temps en secondes ; concentration en mol/L) :

• **(0 ; 1,0)** → à t = 0 s (départ), [A] = 1,0 mol/L — c'est [A]₀, la concentration initiale

• **(3 ; 0,7)** → à t = 3 s, [A] = 0,7 mol/L — le 3 c'est le temps écoulé , pas k

• **(5 ; 0,5)** → à t = 5 s, [A] = 0,5 mol/L = [A]₀/2 → c'est la demi-vie t₁/₂ = 5 s

• **(6 ; 0,4)** → à t = 6 s, [A] = 0,4 mol/L

La **pente = −k = −0,1 mol·L⁻¹·s⁻¹** : la droite descend de 0,1 mol/L à chaque seconde (k est la vitesse de disparition du réactif).

💡 **Astuce — Ordre 0 : quand le retrouve-t-on ?**

L'ordre 0 est rare en chimie « pure », mais fréquent en **pharmacologie** : quand une enzyme est **saturée** (tous ses sites actifs sont occupés), la vitesse de transformation du médicament devient constante, indépendante de sa concentration. C'est le « plateau » de la cinétique de Michaelis-Menten. Autre exemple : la dégradation de l'alcool éthylique par l'alcool-déshydrogénase hépatique — à forte dose, la vitesse d'élimination est constante (~0,15 g/L/h).

### 2. Réaction d'ordre 1

**Pourquoi une exponentielle ?** — En ordre 1, la vitesse est **proportionnelle à ce qui reste** : v = k × [A]. Imagine une foule qui sort d'un stade : au début, beaucoup de monde pousse vers la sortie → débit élevé. Au fur et à mesure que le stade se vide, il y a moins de gens qui poussent → le débit ralentit. La vitesse de sortie est proportionnelle au nombre de personnes encore à l'intérieur. Résultat : ça ne se vide jamais d'un coup, ça diminue de plus en plus lentement → **décroissance exponentielle**.

Ordre 1
v = k × [A]

- **Loi intégrée : [A] = [A]₀ × e −kt ** → décroissance exponentielle

Exemple : si [A]₀ = 1,0 mol/L et k = 0,2 s⁻¹, alors :

à t = 0 s → [A] = 1,0 × e⁻⁰ = 1,0 × 1 = **1,0 mol/L**

à t = 2 s → [A] = 1,0 × e⁻⁰·⁴ ≈ 1,0 × 0,67 = **0,67 mol/L** (on a perdu 0,33)

à t = 5 s → [A] = 1,0 × e⁻¹·⁰ ≈ 1,0 × 0,37 = **0,37 mol/L** (on a perdu 0,63)

à t = 10 s → [A] = 1,0 × e⁻²·⁰ ≈ 1,0 × 0,14 = **0,14 mol/L**

→ Contrairement à l'ordre 0, la concentration ne baisse **pas** du même montant chaque seconde : elle baisse vite au début (quand il reste beaucoup de réactif), puis de plus en plus lentement . C'est ça une exponentielle décroissante.

- **Forme linéarisée : ln[A] = ln[A]₀ − kt**

D'où vient cette formule ? On repart de la loi intégrée : [A] = [A]₀ × e −kt

On prend le logarithme naturel (ln) des deux côtés :

ln([A]) = ln([A]₀ × e −kt )

ln d'un produit = somme des ln, et ln(e −kt ) = −kt :

→ **ln[A] = ln[A]₀ − kt**

Pourquoi c'est utile ? On reconnaît la forme y = a + bx (équation d'une droite). Ici :

y = ln[A], x = t, a = ln[A]₀ (ordonnée à l'origine), b = −k (pente)

→ Si on trace **ln[A] en fonction de t**, on obtient une **droite** de pente −k. On peut alors lire k directement sur le graphe.

[FIGURE chimie_ch09_ordre1_graphe.png]

**Graphe ordre 1** — À gauche : la courbe [A] = f(t) est une exponentielle décroissante (pas une droite !). À droite : ln[A] = f(t) est une droite de pente −k → c'est exactement ce que la linéarisation ci-dessus vient de montrer.

**Comment lire les points ? (t ; [A])** :

• **(0 ; 1,0)** → départ, [A]₀

• **(3,47 ; 0,5)** → 1ʳᵉ demi-vie (t₁/₂), il reste exactement la moitié

• **(6,93 ; 0,25)** → 2ᵉ demi-vie (2×t₁/₂), il reste le quart

Remarque clé : l'écart de temps entre chaque division par 2 est **toujours identique** (3,47 s) — c'est la propriété fondamentale de l'ordre 1.

- **Graphe linéaire : ln[A] = f(t)** → droite de pente **−k**

Astuce identification : si le graphe ln[A] vs t est une droite → ordre 1 confirmé. Si c'est une courbe → ce n'est pas de l'ordre 1 (essaye [A] vs t pour l'ordre 0, ou 1/[A] vs t pour l'ordre 2).

[FIGURE chimie_ch09_ordre1_identification.png]

**Identification graphique de l'ordre 1** — À gauche : [A] = f(t) est une courbe exponentielle (pas une droite → ce n'est pas l'ordre 0). À droite : ln[A] = f(t) est une droite de pente −k → **c'est la signature de l'ordre 1**.

Méthode concours : trace les 3 graphes ([A] vs t, ln[A] vs t, 1/[A] vs t). Celui qui donne une droite révèle l'ordre.

- **Temps de demi-vie : t₁/₂ = ln(2) / k ≈ 0,693 / k**

Rappel : ln(2) ≈ 0,693 est une valeur à connaître (souvent donnée à l'examen).

Exemple avec k = 0,2 s⁻¹ : t₁/₂ = 0,693 / 0,2 = **3,47 s**

Vérification : à t = 3,47 s, [A] = 1,0 × e⁻⁰·²×³·⁴⁷ = 1,0 × e⁻⁰·⁶⁹³ ≈ 1,0 × 0,50 = **0,50 mol/L = [A]₀/2** ✅

**Grande différence avec l'ordre 0 :** ici t₁/₂ ne dépend **PAS** de [A]₀. Que tu partes de 1 mol/L ou de 100 mol/L, la demi-vie est toujours 3,47 s. C'est la **signature** de l'ordre 1.

Pourquoi ? Parce que la vitesse s'adapte : si tu as 2× plus de réactif, la réaction va 2× plus vite (v = k×[A]) → le temps pour en perdre la moitié reste le même.

- **Unité de k : s⁻¹** (ou min⁻¹, h⁻¹)

Logique : v = k × [A], donc k = v / [A] = (mol·L⁻¹·s⁻¹) / (mol·L⁻¹) = **s⁻¹**. Les mol·L⁻¹ se simplifient.

💡 **Ordre 1 = suite géométrique ★★★Rappel :** en ordre 1, la loi intégrée est [A] = [A]₀ × e⁻ᵏᵗ. On va utiliser ça pour comprendre ce qui se passe seconde par seconde.

**On garde le même exemple que plus haut :** k = 0,2 s⁻¹, [A]₀ = 1,0 mol/L.

Regardons la concentration à chaque seconde (formule : [A] = 1,0 × e⁻⁰·²ˣᵗ) :

• t = 0 s → [A] = 1,0 × e⁻⁰·²ˣ⁰ = 1,0 × e⁰ = 1,0 × **1** = **1,000 mol/L**

• t = 1 s → [A] = 1,0 × e⁻⁰·²ˣ¹ = 1,0 × e⁻⁰·² = 1,0 × **0,819** = **0,819 mol/L**

• t = 2 s → [A] = 1,0 × e⁻⁰·²ˣ² = 1,0 × e⁻⁰·⁴ = 1,0 × **0,670** = **0,670 mol/L**

• t = 3 s → [A] = 1,0 × e⁻⁰·²ˣ³ = 1,0 × e⁻⁰·⁶ = 1,0 × **0,549** = **0,549 mol/L**

Maintenant regarde le rapport entre deux lignes consécutives :

0,819 / 1,000 = **0,819** | 0,670 / 0,819 = **0,819** | 0,549 / 0,670 = **0,819**

→ À chaque seconde, on **multiplie par le même facteur 0,819 = e⁻⁰·²**. C'est ça, une suite géométrique.

**Et la demi-vie dans tout ça ?**

On avait calculé t₁/₂ = 0,693 / 0,2 = **3,47 s**.

Vérifions : à t = 3,47 s → [A] = 1,0 × e⁻⁰·²×³·⁴⁷ = 1,0 × e⁻⁰·⁶⁹³ ≈ **0,50 mol/L** → c'est bien la moitié de 1,0 ✅

**Pourquoi la demi-vie est toujours la même, quel que soit le point de départ ?**

Imagine qu'à t = 3,47 s tu as 0,50 mol/L. Tu repars de là.

À t = 6,94 s (3,47 s plus tard) → [A] = 0,50 × e⁻⁰·⁶⁹³ ≈ **0,25 mol/L** → encore divisé par 2 ✅

À t = 10,41 s (encore 3,47 s) → [A] = 0,25 × e⁻⁰·⁶⁹³ ≈ **0,125 mol/L** → encore divisé par 2 ✅

C'est automatique : comme on multiplie toujours par le même facteur, le temps pour perdre la moitié ne change jamais.

🔑 **Temps de demi-vie t₁/₂ ★★★**

Le temps de demi-vie est le temps nécessaire pour que la concentration du réactif soit **divisée par 2**.

**D'où vient la formule ?** On cherche le temps t₁/₂ tel que [A] = [A]₀ / 2. Démonstration :

① On part de la loi intégrée : [A] = [A]₀ × e⁻ᵏᵗ

② À la demi-vie, [A] = [A]₀ / 2, donc : [A]₀ / 2 = [A]₀ × e⁻ᵏᵗ¹/²

③ On divise les deux côtés par [A]₀ → **1/2 = e⁻ᵏᵗ¹/²** (le [A]₀ disparaît !)

④ On prend ln des deux côtés → ln(1/2) = −k × t₁/₂

⑤ Or ln(1/2) = −ln(2) (règle maths : ln(1/a) = −ln(a))

⑥ Donc −ln(2) = −k × t₁/₂ → on simplifie les « − » → **ln(2) = k × t₁/₂**

⑦ On isole t₁/₂ → **t₁/₂ = ln(2) / k**

Temps de demi-vie (ordre 1)
t₁/₂ = ln(2) / k ≈ 0,693 / k

**Pourquoi c'est indépendant de [A]₀ ?**

Regarde l'étape ③ : le [A]₀ s'est simplifié ! Il n'apparaît plus nulle part dans la formule finale.

En français : que tu partes de 1 mol/L ou de 1000 mol/L, le temps pour diviser par 2 est le même.

C'est la **signature** de l'ordre 1 (en ordre 0 et en ordre 2, t₁/₂ dépend de [A]₀).

**Vérification avec notre exemple :** k = 0,2 s⁻¹ → t₁/₂ = 0,693 / 0,2 = **3,47 s**.

On l'avait déjà vérifié numériquement plus haut : 1,0 → 0,50 → 0,25 → 0,125 mol/L, toujours en 3,47 s ✅

Après n demi-vies : **[A] = [A]₀ / 2 n **

Exemple : après 3 demi-vies → [A] = [A]₀ / 2³ = [A]₀ / 8 → il reste 12,5 % du réactif.

💡 **Astuce — Formule à retourner dans tous les sens**

Au concours, on te demande souvent de retrouver [A]₀ à partir de [A] :

• Si on te donne [A] et t → **[A]₀ = [A] × e +kt **

• Si on te demande le temps pour atteindre [A] → **t = (1/k) × ln([A]₀/[A])**

• Après n demi-vies : **[A] = [A]₀ / 2 n **

✏️ **QCM type concours ★★★ — Ordre et calcul (type RC3)**

❓ Une réaction d'ordre 1 a une constante de vitesse k = 3,6 × 10⁻² s⁻¹.

À t = 10 s, on mesure [A] = 7,0 × 10⁻² mol/L. On sait que ln(1,41) = 0,36.

A. La concentration initiale [A]₀ vaut environ 9,8 × 10⁻² mol/L.

B. Le temps de demi-vie est d'environ 60 s.

C. Après 2 demi-vies, [A] est divisée par 4.

D. Si on double [A]₀, le temps de demi-vie double aussi.

E. Après 3 demi-vies depuis [A]₀, [A] vaut environ 1,2 × 10⁻² mol/L.

💡 Voir la correction détaillée

**Démarche — Retrouver [A]₀ à partir de [A] mesurée en cours de réaction :**

On repart de [A] = [A]₀ × e −kt → donc **[A]₀ = [A] × e +kt **

kt = 3,6 × 10⁻² × 10 = 0,36

Rappel maths : si ln(x) = 0,36 alors x = e⁰·³⁶. L'énoncé donne ln(1,41) = 0,36, donc e⁰·³⁶ = **1,41**

[A]₀ = 7,0 × 10⁻² × 1,41 = **9,87 × 10⁻² ≈ 9,8 × 10⁻² mol/LA. VRAI ✅** — [A]₀ ≈ 9,8 × 10⁻² mol/L (calcul ci-dessus).

**B. FAUX ⚠️** — t₁/₂ = ln(2)/k = 0,693 / (3,6 × 10⁻²)

Rappel : 3,6 × 10⁻² = 0,036 (on déplace la virgule de 2 rangs vers la gauche)

= 0,693 / 0,036 ≈ **19,3 s**, pas 60 s.

Piège classique : confondre k = 0,036 s⁻¹ avec k = 0,01 s⁻¹. Toujours recalculer.

**C. VRAI ✅** — Après 1 demi-vie : ÷2. Après 2 demi-vies : ÷2 encore = ÷4 au total. Propriété de la suite géométrique.

**D. FAUX ⚠️ PIÈGE** — t₁/₂ = ln(2)/k ne dépend **pas** de [A]₀. Doubler la concentration initiale ne change rien au temps de demi-vie.

**E. VRAI ✅** — [A]₀ ≈ 9,8 × 10⁻² mol/L. On divise par 2 à chaque demi-vie :

Après 1 × t₁/₂ (~20 s) : 9,8 × 10⁻² ÷ 2 = **4,9 × 10⁻²**

Après 2 × t₁/₂ (~40 s) : 4,9 × 10⁻² ÷ 2 = **2,45 × 10⁻²**

Après 3 × t₁/₂ (~60 s) : 2,45 × 10⁻² ÷ 2 ≈ **1,2 × 10⁻² mol/L** ✅

→ Réponses : **A, C, E**.

### 3. Réaction d'ordre 2

**💡 L'image à retenir :** imagine une piste de danse. Pour qu'il y ait un « couple » (= une réaction), il faut que **deux personnes se trouvent**. S'il y a 20 personnes sur la piste, il y a plein de rencontres possibles → beaucoup de couples se forment vite. Mais s'il ne reste que 4 personnes, les rencontres deviennent **beaucoup plus rares** — pas juste 2 fois moins, mais bien plus. C'est ça l'ordre 2 : la vitesse dépend du nombre de molécules **au carré**, parce qu'il en faut deux pour réagir.

Ordre 2 (cas v = k[A]²)
v = k × [A]²

Compare avec les ordres précédents : en ordre 0, la vitesse ne dépend pas de [A] (perfusion constante). En ordre 1, elle est proportionnelle à [A] (stade qui se vide). En ordre 2, elle est proportionnelle à [A]² — ça tombe **encore plus vite** au début, mais ça ralentit **beaucoup plus** à la fin.

- **Loi intégrée : 1/[A] = 1/[A]₀ + kt**

Traduction en français : cette fois, ce n'est ni [A] ni ln[A] qui donne une droite, mais **1/[A]** (l'inverse de la concentration). Pas de panique — 1/[A] c'est juste « 1 divisé par la concentration ». Si [A] = 0,5, alors 1/[A] = 1/0,5 = 2. C'est tout.

**Exemple pas à pas** (mêmes réflexes que pour les ordres 0 et 1) :

On prend [A]₀ = 0,40 mol/L et k = 0,50 L·mol⁻¹·s⁻¹.

**Comment utiliser la formule ?** On calcule d'abord 1/[A], puis on retourne le résultat pour retrouver [A].

à t = 0 s → 1/[A] = 1/[A]₀ + k × 0 = 1/0,40 = **2,5** ✅ (valeur de départ : 1/0,40)

à t = 5 s → 1/[A] = 2,5 + 0,50 × 5 = 2,5 + 2,5 = **5,0** → donc [A] = 1/5 = **0,20 mol/L** (la moitié !)

à t = 10 s → 1/[A] = 2,5 + 0,50 × 10 = 2,5 + 5 = **7,5** → donc [A] = 1/7,5 ≈ **0,13 mol/L**

à t = 15 s → 1/[A] = 2,5 + 0,50 × 15 = 2,5 + 7,5 = **10,0** → donc [A] = 1/10 = **0,10 mol/LCe qu'il faut remarquer :**

→ 1/[A] augmente **régulièrement** (+2,5 toutes les 5 s) = c'est linéaire en 1/[A] ✅

→ Mais [A] lui-même diminue de moins en moins vite : 0,40 → 0,20 (−0,20), puis 0,20 → 0,133 (−0,07), puis 0,133 → 0,10 (−0,03).

→ Retour à notre piste de danse : au début plein de rencontres → ça va vite. À la fin, il ne reste presque personne → les rencontres sont très rares → la réaction traîne.

- **Graphe linéaire : 1/[A] = f(t)** → droite de pente **+k**

En ordre 0, on traçait [A] vs t → droite. En ordre 1, ln[A] vs t → droite. En ordre 2, **1/[A] vs t** → droite.

La pente est **positive** cette fois (la droite **monte**) — logique : quand [A] diminue, 1/[A] augmente.

**🔑 Astuce concours pour trouver l'ordre :** on te donne des données expérimentales. Trace les 3 graphes ([A] vs t, ln[A] vs t, 1/[A] vs t). **Celui qui donne une droite te donne l'ordre.** C'est mécanique, pas besoin de réfléchir.

[FIGURE chimie_ch09_ordre2_graphe.png]

**Graphe ordre 2** — À gauche : la courbe [A] = f(t) n'est pas une droite (ce n'est donc pas l'ordre 0), et elle diminue plus lentement qu'une exponentielle. À droite : 1/[A] = f(t) est une droite de pente +k → **c'est la signature de l'ordre 2**.

**Comment lire les points ? (t ; [A])** :

• **(0 ; 0,40)** → départ, [A]₀

• **(5 ; 0,20)** → 1ʳᵉ demi-vie (t₁/₂ = 5 s), il reste exactement la moitié

• **(15 ; 0,10)** → 2ᵉ demi-vie (t₁/₂' = 10 s !), il reste le quart

Remarque clé : la 2ᵉ demi-vie (10 s) est **plus longue** que la 1ʳᵉ (5 s) — c'est la propriété fondamentale de l'ordre 2. Chaque demi-vie suivante est **deux fois plus longue**.

- **Temps de demi-vie : t₁/₂ = 1 / (k × [A]₀)**

Rappel : la demi-vie c'est le temps pour que la concentration soit **divisée par 2**.

**Exemple :** k = 0,50, [A]₀ = 0,40 → t₁/₂ = 1 / (0,50 × 0,40) = 1 / 0,20 = **5,0 s**

Vérification : à t = 5 s, on avait trouvé [A] = 0,20 = 0,40 / 2 ✅ Ça marche !

**⚠️ Grande différence avec l'ordre 1 :** ici t₁/₂ **dépend de [A]₀**. En ordre 1, t₁/₂ = ln2/k → pas de [A]₀ dedans → la demi-vie est toujours la même. En ordre 2, la formule contient [A]₀ → la demi-vie **change** au cours de la réaction.

- **Unité de k : L·mol⁻¹·s⁻¹**

Pas besoin de retenir « pourquoi » — retiens juste le résumé :

Ordre 0 → k en **mol·L⁻¹·s⁻¹** (une concentration par seconde)

Ordre 1 → k en **s⁻¹** (juste un « par seconde »)

Ordre 2 → k en **L·mol⁻¹·s⁻¹** (l'inverse d'une concentration, par seconde)

Piège classique en première année : on te donne l'unité de k et on te demande l'ordre. Regarde l'unité → tu sais l'ordre !

- **t₁/₂ dépend de [A]₀ — et en sens inverse !**

Retour à la piste de danse : si tu **doubles** le nombre de danseurs (tu doubles [A]₀), il y a **4 fois plus** de rencontres possibles (au carré !). Mais il n'y a que 2 fois plus de personnes à « caser ». Résultat : la moitié est atteinte **2 fois plus vite** → t₁/₂ est divisé par 2.

Compare avec les autres ordres — c'est un **grand classique QCM** :

| | Ordre | Si [A]₀ double… | t₁/₂… | Image mentale

| **0** | t₁/₂ × 2 | ↗ plus long | Perfusion à débit fixe : 2× plus de liquide → 2× plus de temps

| **1** | inchangé | = pareil | Stade qui se vide : la vitesse s'adapte pile

| **2** | t₁/₂ ÷ 2 | ↘ plus court | Piste de danse : 2× plus de monde → 4× plus de rencontres

💡 **Mémo concours — demi-vies successives en ordre 2 ★★★**

Les demi-vies : **5 s → 10 s → 20 s** (elles doublent). Mais attention aux **temps cumulés** :

| | | Ordre 1 | Ordre 2

| 1ʳᵉ demi-vie atteinte à… | t₁/₂ | **5 s**

| 2ᵉ demi-vie atteinte à… | 2 × t₁/₂ | **15 s** (= 5 + 10), pas 10 !

| 3ᵉ demi-vie atteinte à… | 3 × t₁/₂ | **35 s** (= 5 + 10 + 20), pas 15 !

⚠️ **Piège classique :** on te donne t = 15 s et on te demande combien de demi-vies se sont écoulées. En ordre 2, c'est **2 demi-vies** (pas 3 !) — et il reste [A]₀/4, pas [A]₀/8.

✏️ **Mini-exercice — Ordre 2 : calcul de t₁/₂ et de [A]**

❓ Des molécules A fusionnent deux par deux sur une piste de danse : 2A → A₂ (dimérisation, ordre 2).

On donne : k = 0,50 L·mol⁻¹·s⁻¹ et [A]₀ = 0,40 mol·L⁻¹.

a) Calcule t₁/₂ (temps pour perdre la moitié).

b) Combien reste-t-il de A après 10 s ?

c) Si on double la concentration initiale ([A]₀ = 0,80), le nouveau t₁/₂ est-il plus grand ou plus petit ? Calcule-le.

💡 Voir la correction

**a) Formule :** t₁/₂ = 1 / (k × [A]₀)

→ t₁/₂ = 1 / (0,50 × 0,40) = 1 / 0,20 = **5,0 s** ✅

**b) Étape par étape :**

1. On utilise la loi intégrée : 1/[A] = 1/[A]₀ + k × t

2. On remplace : 1/[A] = 1/0,40 + 0,50 × 10 = 2,5 + 5,0 = 7,5

3. On inverse : [A] = 1/7,5 ≈ **0,13 mol·L⁻¹**

→ Il reste environ 1/3 du réactif (on est bien au-delà de la demi-vie de 5 s, donc c'est logique qu'il reste moins de la moitié).

**c)** t₁/₂ = 1 / (0,50 × 0,80) = 1 / 0,40 = **2,5 s** → c'est **plus petit** !

Pourquoi ? Avec 2× plus de monde sur la piste de danse, les rencontres sont beaucoup plus fréquentes → la réaction démarre plus vite → on perd la moitié en moins de temps.

⚠️ **Piège concours :** en ordre 0, c'est l'inverse (t₁/₂ = [A]₀/2k → plus de réactif = t₁/₂ plus long). En ordre 1, t₁/₂ ne dépend pas du tout de [A]₀.

### 4. Tableau comparatif des 3 ordres

|

|
| Ordre 0
| Ordre 1
| Ordre 2

| **v =**
| k
| k[A]
| k[A]²

| **Loi intégrée**
| [A] = [A]₀ − kt
| [A] = [A]₀·e⁻ᵏᵗ
| 1/[A] = 1/[A]₀ + kt

| **Graphe linéaire**
| [A] = f(t)
| ln[A] = f(t)
| 1/[A] = f(t)

| **t₁/₂**
| [A]₀ / 2k
| ln2 / k
| 1 / (k[A]₀)

| **Unité de k**
| mol·L⁻¹·s⁻¹
| s⁻¹
| L·mol⁻¹·s⁻¹

| **t₁/₂ dépend de [A]₀ ?**
| Oui
| **Non**
| Oui

💡 **Astuce — Comment déterminer l'ordre ?**

Au concours, on te donne souvent des données expérimentales. Trace les 3 graphes :

- **[A] = f(t)** → si c'est une droite → **ordre 0**

- **ln[A] = f(t)** → si c'est une droite → **ordre 1**

- **1/[A] = f(t)** → si c'est une droite → **ordre 2**

Celui qui donne une droite révèle l'ordre. Autre méthode : si t₁/₂ est constant quand on change [A]₀ → **ordre 1**.

✏️ **Mini-exercice — Identifier l'ordre et calculer t₁/₂**

❓ On étudie la dégradation d'un médicament en solution. On mesure :

- [A]₀ = 0,10 mol·L⁻¹, et après 100 s : [A] = 0,050 mol·L⁻¹

- On recommence avec [A]₀ = 0,20 mol·L⁻¹, et on mesure t₁/₂ = 100 s également

a) Quel est l'ordre de la réaction ? Justifie.

b) Calcule la constante de vitesse k.

c) Après combien de temps reste-t-il 12,5 % de la concentration initiale ?

💡 Voir la correction

**a)** t₁/₂ est **indépendant de [A]₀** (100 s dans les deux cas) → c'est la signature de l'**ordre 1**.

**b)** t₁/₂ = ln(2)/k → k = ln(2)/100 = **6,93 × 10⁻³ s⁻¹c)** 12,5 % signifie qu'il reste 12,5/100 = 1/8 de la concentration initiale.

Or 1/8 = 1/2 × 1/2 × 1/2 = (1/2)³ → on a divisé par 2 exactement **3 fois** → il faut **3 demi-vies** = 3 × 100 = **300 s**.

×

medeos-sante.fr