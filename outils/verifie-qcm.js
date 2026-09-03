#!/usr/bin/env node
/* LE CONTRÔLE QUI REND LA RÈGLE VÉRIFIABLE — gratuit, mécanique, sans agent.
   Le gabarit de Lucas impose une `sourceQuote` sur chaque item : la citation littérale
   du passage qui prouve sa valeur. Ici la source est la FICHE. Donc si la citation ne se
   retrouve pas dans la fiche, l'élève n'a pas de quoi trancher l'item — la question est
   rejetée. C'est tout. Pas de jugement de sens, pas de second agent.
   usage : node outils/verifie-qcm.js [fichier.json | --tout] */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
const cache = {};
const texteFiche = f => {
  if (f in cache) return cache[f];
  const p = path.join(APP, 'fiches', f);
  cache[f] = fs.existsSync(p) ? norm(fs.readFileSync(p, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')) : null;
  return cache[f];
};

const cible = process.argv[2];
const fichiers = (!cible || cible === '--tout')
  ? fs.readdirSync(path.join(APP, 'qcm')).filter(f => /\.json$/.test(f))
  : [path.basename(cible)];

let nQ = 0, nI = 0, ok = 0, ancreKO = 0, sansAncre = 0, ficheKO = 0, pas5 = 0, vraies = 0;
const rejets = [];
fichiers.forEach(nom => {
  let j; try { j = JSON.parse(fs.readFileSync(path.join(APP, 'qcm', nom), 'utf8')); } catch (e) { return; }
  (j.questions || []).forEach((q, k) => {
    nQ++;
    const t = texteFiche(q.fiche);
    if (!t) { ficheKO++; rejets.push({ nom, k, cause: 'fiche introuvable : ' + q.fiche }); return; }
    if (!q.items || q.items.length !== 5) { pas5++; rejets.push({ nom, k, cause: (q.items || []).length + ' items au lieu de 5' }); return; }
    vraies += q.items.filter(i => i.v || i.isCorrect).length;
    let bon = true;
    q.items.forEach((it, n) => {
      nI++;
      const cit = it.sourceQuote || it.citation || '';
      if (!cit) { sansAncre++; bon = false; return; }
      /* la citation doit se retrouver dans la fiche — on compare une fois normalisé,
         pour que la ponctuation et les accents ne fassent pas échouer un vrai extrait */
      const c = norm(cit);
      if (c.length < 12 || !t.includes(c)) {
        ancreKO++; bon = false;
        rejets.push({ nom, k, cause: 'item ' + 'ABCDE'[n] + ' : citation absente de la fiche — « ' + String(cit).slice(0, 70) + ' »' });
      }
    });
    if (bon) ok++;
  });
});
console.log('  ' + fichiers.length + ' fichier(s) · ' + nQ + ' questions · ' + nI + ' items');
console.log('    questions dont les 5 items sont ancrés dans la fiche : ' + ok + (nQ ? '  (' + Math.round(100 * ok / nQ) + ' %)' : ''));
console.log('    items sans citation                                  : ' + sansAncre);
console.log('    citations introuvables dans la fiche                 : ' + ancreKO);
if (pas5) console.log('    questions hors format 5 items                        : ' + pas5);
if (ficheKO) console.log('    fiches introuvables                                  : ' + ficheKO);
if (nQ) console.log('    moyenne des propositions vraies                      : ' + (vraies / nQ).toFixed(2) + '  (cible 2,5 · le gabarit dit « jamais plus de 60 % »)');
if (rejets.length) {
  console.log('\n  À CORRIGER (' + rejets.length + ') :');
  rejets.slice(0, 12).forEach(r => console.log('    ' + r.nom + ' #' + r.k + ' — ' + r.cause));
  if (rejets.length > 12) console.log('    … et ' + (rejets.length - 12) + ' autres');
}
process.exit(rejets.length ? 1 : 0);
