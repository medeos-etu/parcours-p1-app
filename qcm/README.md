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
3. **Équilibre** : viser ~50/50 sur l'ensemble d'un lot. Jamais plus de 60 % de vrais.
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

## Le périmètre du moment
Les **45 premiers jours de Parcours**, soit les 112 fiches des chapitres :
anatomie 1-3 · biologie 1-2 · chimie 1 · physique 1.
Le reste viendra au fur et à mesure — la fin du Parcours ne sera vue que par très peu
d'élèves, elle n'est pas prioritaire.

## Où on en est
`node outils/etat-qcm.js` répond à cette question, fiche par fiche.
