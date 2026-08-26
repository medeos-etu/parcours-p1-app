#!/usr/bin/env node
/* PRÉPARE LA PRODUCTION DES QCM D'ARÈNE.
   Les questions d'arène sont des questions EN PLUS : elles ne se jouent jamais dans les
   Salles, seulement en ascension. C'est ce qui fait que le Grand Amphi mesure la fiche
   et non la mémoire des trois questions rabâchées la veille.
   On sert les fiches dans l'ORDRE DU PARCOURS : les premières fiches d'abord, puisque
   ce sont celles que tout le monde traverse.

   usage : node outils/prepare-lots-arene.js <nb de fiches> <dossier> [fiches par lot] [depuis]
   « depuis » saute les N premières fiches du fil — pour produire la suite pendant que le
   premier lot n'est pas encore intégré (sans quoi on redemanderait les mêmes fiches). */
const fs = require('fs'), path = require('path');
const COMBIEN = parseInt(process.argv[2] || '60', 10);
const DEST = process.argv[3] || '/tmp/arene';
const PAR_LOT = parseInt(process.argv[4] || '10', 10);
const DEPUIS = parseInt(process.argv[5] || '0', 10);
const RACINE = path.join(__dirname, '..');

const h = fs.readFileSync(path.join(RACINE, 'index.html'), 'utf8');
const i = h.indexOf('const ABANK=['), j = h.indexOf('\n];', i);
const BANK = eval(h.slice(i + 12, j + 2));
const si = h.indexOf('const SEANCES=['), sj = h.indexOf('\n];', si);
const SEANCES = eval(h.slice(si + 14, sj + 2));

/* l'ordre du Parcours, fiche après fiche */
const ordre = [];
SEANCES.forEach(s => (s.fiches || []).forEach(f => { if (!ordre.includes(f)) ordre.push(f); }));

const par = {};
BANK.forEach(q => { (par[q.f] = par[q.f] || []).push(q); });
const dejaArene = f => (par[f] || []).filter(q => q.ar).length;

const cibles = ordre.filter(f => dejaArene(f) < 3).slice(DEPUIS, DEPUIS + COMBIEN);
console.log('fiches du Parcours : ' + ordre.length);
console.log('à doter de 3 questions d\'arène : ' + cibles.length +
  (DEPUIS ? ' (fiches ' + (DEPUIS + 1) + ' à ' + (DEPUIS + cibles.length) + ' du fil)' : ' (les premières du fil)'));
if (!cibles.length) { console.log('rien à faire.'); process.exit(0); }

fs.mkdirSync(DEST + '/lots', { recursive: true });
fs.mkdirSync(DEST + '/sortie', { recursive: true });

let n = 0;
for (let k = 0; k < cibles.length; k += PAR_LOT) {
  n++;
  const num = String(n).padStart(2, '0');
  const lot = cibles.slice(k, k + PAR_LOT).map(f => {
    const qs = par[f] || [];
    return {
      fiche: f,
      matiere: qs[0] ? qs[0].mat : '',
      titreFiche: qs[0] ? qs[0].n : f,
      aEcrire: 3 - dejaArene(f),
      /* tout ce qui existe déjà sur cette fiche : à ne JAMAIS redire */
      enoncesExistants: qs.map(q => q.q),
      propositionsExistantes: [].concat.apply([], qs.map(q => (q.it || []).map(t => t[1])))
    };
  });
  fs.writeFileSync(DEST + '/lots/lot-' + num + '.json', JSON.stringify(lot, null, 1));
}
console.log(n + ' lots écrits dans ' + DEST + '/lots/  (' + cibles.length * 3 + ' questions à produire)');
