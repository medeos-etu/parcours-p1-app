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

## L'objectif, par fiche
- **2 lots (10 questions)** en accès gratuit — le minimum pour mettre en ligne.
- **5 lots (25 questions)** avec le pack année complète.
- **3 questions d'arène** en plus, jamais jouables dans les Salles.

## Le périmètre du moment
Les **45 premiers jours de Parcours**, soit les 112 fiches des chapitres :
anatomie 1-3 · biologie 1-2 · chimie 1 · physique 1.
Le reste viendra au fur et à mesure — la fin du Parcours ne sera vue que par très peu
d'élèves, elle n'est pas prioritaire.

## Où on en est
`node outils/etat-qcm.js` répond à cette question, fiche par fiche.
