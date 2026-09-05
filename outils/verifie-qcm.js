#!/usr/bin/env node
/* LE CONTRÔLE QUI REND LA RÈGLE VÉRIFIABLE — gratuit, mécanique, sans agent.
   Le gabarit de Lucas impose une `sourceQuote` sur chaque item : la citation littérale
   du passage qui prouve sa valeur. Ici la source est la FICHE. Donc si la citation ne se
   retrouve pas dans la fiche, l'élève n'a pas de quoi trancher l'item — la question est
   rejetée. C'est tout. Pas de jugement de sens, pas de second agent.
   usage : node outils/verifie-qcm.js [fichier.json | --tout] */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
/* LES ENTITÉS HTML SE DÉCODENT AVANT TOUT LE RESTE.
   Une fiche qui écrit « Longueur &gt;&gt; largeur » donnait, une fois les balises
   retirées, le texte « longueur gt gt largeur » : la citation honnête de l'élève —
   « Longueur >> largeur » — était rejetée à tort, et les agents devaient contourner en
   citant les phrases voisines. On décode d'abord ; le « > » devient alors une espace
   comme n'importe quelle ponctuation, et la citation se retrouve. Même chose pour
   l'espace insécable, qui traversait le contrôle sous la forme « nbsp ». */
const ENTITES = { amp:'&', lt:'<', gt:'>', quot:'"', apos:'\'', nbsp:' ', laquo:'«', raquo:'»',
  eacute:'é', egrave:'è', agrave:'à', ccedil:'ç', ocirc:'ô', ecirc:'ê', icirc:'î', ucirc:'û',
  deg:'°', times:'×', divide:'÷', minus:'−', hellip:'…', ndash:'–', mdash:'—', rsquo:'\'', oelig:'œ' };
const decode = s => String(s)
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&([a-z]+);/gi, (m, n) => ENTITES[n.toLowerCase()] !== undefined ? ENTITES[n.toLowerCase()] : m);
const norm = s => decode(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
/* DEUX LECTURES DE LA MÊME FICHE, ET C'EST NÉCESSAIRE.
   Les encadrés mnémo de Lucas mettent la première lettre en gras : « <b>M</b>édial ».
   Si l'on remplace chaque balise par une espace, le mot devient « m edial » et une
   citation honnête — « Médial = vers le Milieu » — est rejetée à tort ; les agents
   étaient contraints de citer des fragments tronqués. On garde donc les deux versions :
   balises → espace (pour ne pas coller deux mots voisins) ET balises → rien (pour
   recoller un mot coupé en son milieu). Une citation qui se retrouve dans l'une des
   deux est ancrée. Le texte des <style> et <script> reste exclu : un item ne peut pas
   s'appuyer sur du CSS, ni sur un libellé fabriqué par ::before. */
const cache = {};
const texteFiche = f => {
  if (f in cache) return cache[f];
  const p = path.join(APP, 'fiches', f);
  if (!fs.existsSync(p)) { cache[f] = null; return null; }
  const brut = fs.readFileSync(p, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
  cache[f] = [norm(brut.replace(/<[^>]+>/g, ' ')), norm(brut.replace(/<[^>]+>/g, ''))];
  return cache[f];
};
const contient = (t, c) => t[0].includes(c) || t[1].includes(c);

const cible = process.argv[2];
const fichiers = (!cible || cible === '--tout')
  ? fs.readdirSync(path.join(APP, 'qcm')).filter(f => /\.json$/.test(f))
  : [path.basename(cible)];

let nQ = 0, nI = 0, ok = 0, ancreKO = 0, sansAncre = 0, ficheKO = 0, pas5 = 0, vraies = 0;
const repartition = {}; let zeroVrai = 0;   /* de 1 à 5 vrais est légitime ; 0 vrai ne l'est pas */
const rejets = [];
/* un lot = un QCM de cinq items. Sept lots par fiche : 1-2 gratuit, 3-5 pack, 6-7 arène.
   On vérifie ici que chaque fiche servie a bien ses sept lots, une fois chacun. */
const lots = {}, enonces = {};
fichiers.forEach(nom => {
  let j; try { j = JSON.parse(fs.readFileSync(path.join(APP, 'qcm', nom), 'utf8')); } catch (e) { return; }
  (j.questions || []).forEach((q, k) => {
    nQ++;
    (lots[q.fiche] = lots[q.fiche] || []).push(q.lot);
    const cle = norm(q.q || '');
    if (enonces[cle]) rejets.push({ nom, k, cause: 'énoncé déjà posé dans ' + enonces[cle] });
    else enonces[cle] = nom + ' #' + k;
    const t = texteFiche(q.fiche);
    if (!t || !t[0]) { ficheKO++; rejets.push({ nom, k, cause: 'fiche introuvable : ' + q.fiche }); return; }
    if (!q.items || q.items.length !== 5) { pas5++; rejets.push({ nom, k, cause: (q.items || []).length + ' items au lieu de 5' }); return; }
    { const nv = q.items.filter(i => i.v || i.isCorrect).length;
      vraies += nv; repartition[nv] = (repartition[nv] || 0) + 1;
      if (nv === 0) zeroVrai++; }
    let bon = true;
    q.items.forEach((it, n) => {
      nI++;
      const cit = it.sourceQuote || it.citation || '';
      if (!cit) { sansAncre++; bon = false; return; }
      /* la citation doit se retrouver dans la fiche — on compare une fois normalisé,
         pour que la ponctuation et les accents ne fassent pas échouer un vrai extrait */
      const c = norm(cit);
      if (c.length < 12 || !contient(t, c)) {
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
if (nQ) { const moy = vraies / nQ;
  /* L'ÉVENTAIL EST LA VRAIE MESURE, pas la moyenne : 3 vrais partout donne aussi 3,00 de
     moyenne, et se devine sans rien savoir. On veut ~20 % de QCM pour chacune des cinq
     valeurs. On mesure l'écart à cette répartition idéale. */
  const parts = [1,2,3,4,5].map(k => (repartition[k] || 0) / nQ);
  const ecart = parts.reduce((s, p) => s + Math.abs(p - 0.2), 0) / 2;   /* 0 = parfait, 1 = tout sur une valeur */
  const eventail = [1,2,3,4,5].map(k => k + ':' + (repartition[k] || 0) +
    ' (' + Math.round(100 * (repartition[k] || 0) / nQ) + '%)').join(' · ');
  console.log('    moyenne des propositions vraies                      : ' + moy.toFixed(2) + '  (elle découle de l\'éventail, ce n\'est pas la cible)');
  console.log('    éventail des vrais par QCM                           : ' + eventail);
  console.log('    écart à un éventail équilibré                        : ' + Math.round(100 * ecart) + ' %' +
    (ecart > 0.35 ? '  ⚠ trop concentré — varie de 1 à 5' : ecart > 0.2 ? '  ⚠ à ouvrir un peu' : '  ✓'));
  if (zeroVrai) console.log('    QCM sans aucun item vrai                             : ' + zeroVrai + '  ⚠ à corriger');
}

/* les sept lots, fiche par fiche */
const fichesVues = Object.keys(lots), incompletes = [];
fichesVues.forEach(f => {
  const l = lots[f].slice().sort((a, b) => a - b);
  const attendu = [1, 2, 3, 4, 5, 6, 7];
  const manque = attendu.filter(n => !l.includes(n));
  const double = attendu.filter(n => l.filter(x => x === n).length > 1);
  const hors = l.filter(n => !attendu.includes(n));
  if (manque.length || double.length || hors.length) {
    incompletes.push(f + ' — ' + [
      manque.length ? 'lot(s) manquant(s) : ' + manque.join(', ') : '',
      double.length ? 'lot(s) en double : ' + double.join(', ') : '',
      hors.length ? 'lot(s) hors 1-7 : ' + hors.join(', ') : '',
    ].filter(Boolean).join(' · '));
  }
});
console.log('    fiches servies                                       : ' + fichesVues.length
  + ' · complètes (7 lots, une fois chacun) : ' + (fichesVues.length - incompletes.length));
if (incompletes.length) {
  console.log('\n  LOTS INCOMPLETS (' + incompletes.length + ') :');
  incompletes.slice(0, 12).forEach(x => console.log('    ' + x));
  if (incompletes.length > 12) console.log('    … et ' + (incompletes.length - 12) + ' autres');
  rejets.push({ nom: '(lots)', k: '', cause: incompletes.length + ' fiche(s) sans ses sept lots' });
}
if (rejets.length) {
  console.log('\n  À CORRIGER (' + rejets.length + ') :');
  rejets.slice(0, 12).forEach(r => console.log('    ' + r.nom + ' #' + r.k + ' — ' + r.cause));
  if (rejets.length > 12) console.log('    … et ' + (rejets.length - 12) + ' autres');
}
process.exit(rejets.length ? 1 : 0);
