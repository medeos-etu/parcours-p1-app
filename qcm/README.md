# Les QCM des fiches du Parcours

## La règle d'or : on ne touche JAMAIS à la source
Les lots de QCM des chapitres de cours vivent dans `~/dev/medeos-site/data/qcm/`.
Ils servent les stages et Medi Plus. **On les lit, on ne les modifie jamais, on ne les
déplace jamais.** Tout ce qui est produit ici est écrit dans ce dossier-ci.

## Ce qu'on construit
Un fichier par chapitre : `<matière>-chNN.json`.
Chaque question y est rattachée à **une fiche** du Parcours, et porte sa provenance.

    {
      "matiere": "anatomie", "chapitre": 1,
      "questions": [
        { "fiche": "anatomie-001-position-reference.html",
          "origine": "reprise",              // ou "composee"
          "source": "anatomie/chapitre_1.json",
          "q": "…l'énoncé…",
          "items": [ {"t": "…", "v": true, "e": "…"}, … ]  // 5 items
        }
      ]
    }

## La trame : celle du gabarit Medeos
On suit `~/dev/medeos-site/data/qcm/_GABARIT-QCM-ANATOMIE.md`, sans rien y changer —
la seule adaptation est que **la source n'est plus le chapitre de cours, mais la fiche**.

1. **5 items A-E**, toujours.
2. **Type concours** : chaque item se juge vrai ou faux indépendamment. Un QCM peut porter
   de 1 à 5 items vrais.
3. **Équilibre : un ÉVENTAIL, pas une valeur** (Lucas, 05/09/2026).
   Le nombre d'items vrais doit se répartir **à peu près également entre 1, 2, 3, 4 et 5** —
   environ un cinquième des QCM pour chaque valeur. Ce n'est pas une moyenne à atteindre :
   c'est du hasard, comme au concours. La moyenne de 3,0 en découle toute seule.
   ❌ Ce qu'il ne faut pas faire : mettre 3 vrais partout, ou n'utiliser que 2 et 3. Un lot
   prévisible se devine sans rien savoir.
   ✅ Ce qu'il faut faire : varier d'un QCM à l'autre, **au hasard**. Cinq vrais est
   parfaitement légitime, un seul vrai aussi. **Le seul cas interdit est 0 vrai** : une
   question dont aucun item n'est exact n'apprend rien.
   ❌ Et pas de cycle non plus : écrire 1, 2, 3, 4, 5, 1, 2, 3, 4, 5… donne bien 20 % partout,
   mais un élève le devine au bout de deux questions. Le contrôleur détecte ces suites
   régulières et les signale. Le nombre de vrais doit être **imprévisible d'un QCM au suivant**.
   Et puisque les vrais sont nombreux, les items faux doivent être **franchement faux**,
   bâtis sur un vrai piège de la fiche — sinon répondre « vrai » partout suffirait.
4. **`explanation`** : le corrigé rédigé pour l'élève. Commence par « VRAI. » ou « FAUX : »
   puis la justification. Aucun renvoi au support, aucun numéro de ligne.
5. 🔑 **`sourceQuote`** : la citation LITTÉRALE du passage de la fiche qui prouve la valeur
   de l'item — obligatoire sur CHAQUE item, vrai comme faux. Back-office uniquement, jamais
   montrée à l'élève. C'est elle qui rend la règle vérifiable : `outils/verifie-qcm.js`
   contrôle que chaque citation se retrouve mot pour mot dans la fiche. Un item dont la
   citation ne s'y trouve pas n'est pas répondable — il est rejeté.
6. **Distracteurs** : bâtis sur les pièges réels de la fiche — inversions, confusions de
   structures, chiffres modifiés, attributions croisées. Jamais un item faux hors sujet,
   impossible à trancher.
7. **Pas de spoiler** dans la formulation.
8. **Français correct**, pas d'anglicismes. On dit « en P1 », pas « au concours ».
9. **Couverture** : les questions d'une fiche balaient toute la fiche, pas un seul passage.

## Deux façons de servir une fiche
1. **Reprise** — la question existe déjà et ses CINQ items se tranchent avec la fiche.
   On la reprend telle quelle. C'est le cas le moins cher et le plus sûr : la question
   est cohérente, elle a été écrite et relue depuis le cours.
2. **Composée** — aucune question entière ne convient, mais des items isolés, pris dans
   plusieurs questions du chapitre, se tranchent tous avec la fiche. On en réunit cinq et
   **on écrit un énoncé qui les couvre vraiment**. Sans cet énoncé, on obtient un QCM
   incohérent : c'est le piège de la recomposition.

## La règle qui décide de tout
🔴 **Un élève qui a lu cette fiche, et elle seule, doit pouvoir trancher les cinq items.**
Pas quatre sur cinq. Une question mal rangée est pire qu'une question manquante :
l'élève se croit fautif alors qu'on ne lui a jamais donné la réponse.

## L'objectif, par fiche : 7 QCM
**Un lot = un QCM de 5 items A-E.**

| lots | QCM | pour qui |
|---|---|---|
| 1-2 | 2 | **accès gratuit** — l'essentiel de la fiche |
| 3-5 | 3 | **pack année complète** — cas limites, pièges fins, applications |
| 6-7 | 2 | **arène** — jamais jouables à l'entraînement, elles classent |

Soit **7 questions et 35 items par fiche**. Chaque question porte son numéro de `lot`
(1 à 7). Sept questions pour toute une fiche : chacune doit compter, aucune ne répète
une autre, et ensemble elles balaient la fiche entière.

## Les renforts d'arène — lots 8 et au-delà (Lucas, 07/09/2026)
> « On n'a pas assez de QCM arène sur les fiches vues en premier dans le parcours.
> Moins on a de fiches, moins l'Arène peut être remplie de QCM. »

Le Grand Amphi ne tire QUE dans les fiches déjà travaillées, et il tire d'abord les
questions d'arène de chaque fiche. Il ouvre au 4ᵉ jour (`AMPHI_SEUIL_JOURS`), quand
l'élève a huit fiches : à deux lots d'arène par fiche, cela faisait **seize questions
pour deux ascensions de dix** — le stock se recyclait dès le premier soir.

D'où une exception, réservée aux **toutes premières fiches du Parcours** : une fiche
peut porter des **lots supplémentaires numérotés 8, 9, 10…**, tous en arène (`ar:1`,
puisque `lot >= 6`). Rien d'autre ne change :
- le **socle des lots 1-7 reste obligatoire** sur toute fiche servie ;
- l'entraînement reste plafonné aux lots 1-5, gratuit aux lots 1-2 ;
- un lot ne peut être posé qu'une fois par fiche.

`verifie-qcm.js` compte ces renforts sur une ligne à part, `implante-parcours.js` les
pose comme les autres.

**Fait au 07/09/2026 — les 28 fiches des QUATORZE premières séances ont 10 QCM d'arène
chacune** (lots 6 à 15), soit **280 questions** dans le vivier de l'Amphi une fois la
14ᵉ séance travaillée :
- séances 1-3 → `qcm/arene-premieres-fiches-<matière>.json` (48 QCM)
- séances 4-8 → `qcm/arene-seances-4-8-<matière>.json` (80 QCM)
- séances 9-14 → `qcm/arene-seances-9-14-<matière>.json` (96 QCM)

Sans ces renforts, un élève recroisait 61 % de questions déjà vues entre le jour 4 et le
jour 18 ; avec eux, 12 %. **Suite** : les séances 15 et au-delà, dans l'ordre de `SEANCES`
— c'est l'ordre dans lequel les fiches entrent dans le vivier.

⚠️ **Physique** : les fiches de calcul (raccourcis, puissances de 10, préfixes, log,
unités, analyse dimensionnelle) ne doivent jamais demander un calcul NOUVEAU à l'élève.
Chaque item porte sur une règle énoncée ou sur un exemple **déjà résolu dans la fiche** —
sinon la `sourceQuote` ne prouve plus rien.

⚠️ **Le contrôle qui compte le plus, à refaire à chaque lot** : relire tous les items
`v:false` dont le texte reprend presque mot pour mot sa propre `sourceQuote`, et tous les
items `v:true` ancrés sur une phrase négative. C'est là que se glissent les propositions
marquées fausses alors que la fiche les affirme — une erreur invisible pour
`verifie-qcm.js`, qui ne contrôle que l'ancrage, jamais la valeur de vérité.

## Le périmètre du moment
Les **45 premiers jours de Parcours**, soit les 112 fiches des chapitres :
anatomie 1-3 · biologie 1-2 · chimie 1 · physique 1.
Le reste viendra au fur et à mesure — la fin du Parcours ne sera vue que par très peu
d'élèves, elle n'est pas prioritaire.

## Où on en est
`node outils/etat-qcm.js` répond à cette question, fiche par fiche.

## Poser de nouveaux QCM dans l'app — la marche à suivre
Lucas fournit les QCM au fur et à mesure. Trois commandes, dans cet ordre, et rien d'autre :

```
node outils/verifie-qcm.js --tout        # 100 % ancrés, 7 lots par fiche, sinon on corrige
node outils/implante-parcours.js         # pose SEANCES, TITRES et les QCM par lot dans index.html
vercel deploy --prod                     # met en ligne (projet parcours-p1-preview)
```

Un fichier JSON déposé dans `qcm/` est pris en compte à la prochaine implantation. Les
emplacements existent déjà pour les 951 fiches : poser un QCM, c'est remplir une case.
Les questions d'avant le Parcours (anciennes fiches) sont dans `_archive-anciennes-fiches.json`,
plus dans l'app : aucune séance ne servait plus leurs fiches.
