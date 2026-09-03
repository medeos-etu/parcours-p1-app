#!/usr/bin/env node
/* CONTRÔLE MÉCANIQUE DES ATTRIBUTIONS — gratuit, et il attrape les erreurs grossières.
   Une question ne peut être rangée dans une fiche que si l'élève peut trancher ses CINQ
   items avec cette fiche seule. On ne sait pas juger le sens sans lire, mais on sait
   repérer ce qui ne peut pas coller : quand les mots porteurs d'un item — les termes
   techniques, les nombres — sont absents de la fiche, l'élève n'a matériellement pas de
   quoi trancher. Ces questions-là ressortent, et elles seules valent une relecture.
   usage : node outils/verifie-attribution.js [seuil]  (défaut 0,45) */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const SEUIL = +(process.argv[2] || 0.45);
const ENTREE = '/tmp/attrib', SORTIE = '/tmp/attrib/sortie';

const VIDE = new Set(('le la les un une des de du au aux et ou ni mais donc or car que qui quoi dont est sont ont pour par dans sur sous avec sans vers chez entre plus moins tres tout tous toute toutes ce cet cette ces son sa ses leur leurs elle ils elles se ne pas quel quelle lequel laquelle exacte exactes exact proposition propositions concernant suivantes suivante affirmation affirmations vrai faux juste parmi etre avoir fait faire peut peuvent doit doivent ainsi aussi meme selon apres avant lors cas type types partie parties niveau permet correspond appelle appele designe consiste trouve situe presente possede contient').split(' '));
const mots = s => new Set(String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').split(' ').filter(w => w.length > 3 && !VIDE.has(w)));
const texteFiche = f => {
  const p = path.join(APP, 'fiches', f);
  if (!fs.existsSync(p)) return null;
  return mots(fs.readFileSync(p, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' '));
};

const cacheF = {};
let nCh = 0, nQ = 0, nOk = 0, nDouteux = 0, nEcart = 0, nFicheKO = 0;
const douteux = [];
fs.readdirSync(SORTIE).filter(f => /\.json$/.test(f)).sort().forEach(nom => {
  const att = JSON.parse(fs.readFileSync(path.join(SORTIE, nom), 'utf8'));
  const src = JSON.parse(fs.readFileSync(path.join(ENTREE, nom), 'utf8'));
  nCh++;
  att.forEach(a => {
    const q = src.questions[a.i];
    if (!q) return;
    nQ++;
    if (!a.fiche) { nEcart++; return; }
    if (!(a.fiche in cacheF)) cacheF[a.fiche] = texteFiche(a.fiche);
    const mf = cacheF[a.fiche];
    if (!mf) { nFicheKO++; return; }
    /* chaque item est jugé séparément : c'est la règle — les CINQ doivent se trancher */
    const parItem = q.items.map(it => {
      const mi = mots(it.t);
      if (!mi.size) return 1;
      let k = 0; mi.forEach(w => { if (mf.has(w)) k++; });
      return k / mi.size;
    });
    const pire = Math.min(...parItem);
    if (pire >= SEUIL) nOk++;
    else { nDouteux++; if (douteux.length < 2000) douteux.push({ ch: nom.replace('.json', ''), i: a.i, fiche: a.fiche, pire: +pire.toFixed(2), item: q.items[parItem.indexOf(pire)].t.slice(0, 90) }); }
  });
});
fs.writeFileSync('/tmp/attrib/a-revoir.json', JSON.stringify(douteux, null, 1));
console.log('  ' + nCh + ' chapitres contrôlés · ' + nQ + ' attributions');
console.log('    tranchables avec la fiche      : ' + nOk + (nQ ? '  (' + Math.round(100 * nOk / nQ) + ' %)' : ''));
console.log('    au moins un item douteux       : ' + nDouteux);
console.log('    écartées par l\'agent           : ' + nEcart);
if (nFicheKO) console.log('    fiche introuvable              : ' + nFicheKO);
console.log('\n  seuil : ' + SEUIL + ' des mots porteurs de l\'item présents dans la fiche');
console.log('  → /tmp/attrib/a-revoir.json  (les douteuses, à faire relire)');
