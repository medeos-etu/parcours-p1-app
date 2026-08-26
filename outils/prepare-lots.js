#!/usr/bin/env node
/* PRÉPARE UNE VAGUE DE PRODUCTION DE QCM.
   Lit la banque réellement présente dans index.html, repère les fiches qui n'ont pas
   encore le nombre de questions visé, et les répartit en lots de travail.
   Chaque lot dit à l'agent, fiche par fiche : combien de questions écrire, et surtout
   QUELS ÉNONCÉS EXISTENT DÉJÀ — c'est le seul garde-fou contre les doublons entre vagues.

   usage : node outils/prepare-lots.js <cible> <dossier> [fiches-par-lot]
   ex.   : node outils/prepare-lots.js 10 /tmp/qcm2 8                                */
const fs = require('fs'), path = require('path');

const CIBLE = parseInt(process.argv[2] || '10', 10);
const DEST = process.argv[3] || '/tmp/qcm2';
const PAR_LOT = parseInt(process.argv[4] || '8', 10);
const RACINE = path.join(__dirname, '..');

/* ── la banque, telle qu'elle est vraiment dans l'app ── */
const h = fs.readFileSync(path.join(RACINE, 'index.html'), 'utf8');
const i = h.indexOf('const ABANK=[');
if (i < 0) { console.error('ABANK introuvable dans index.html'); process.exit(1); }
const j = h.indexOf('\n];', i);
const BANK = eval(h.slice(i + 12, j + 2));

/* ── les fiches que le Parcours ouvre vraiment ── */
const si = h.indexOf('const SEANCES=[');
const sj = h.indexOf('\n];', si);
const SEANCES = eval(h.slice(si + 14, sj + 2));
const auParcours = new Set();
SEANCES.forEach(s => (s.fiches || []).forEach(f => auParcours.add(f)));

const par = {};
BANK.forEach(q => { (par[q.f] = par[q.f] || []).push(q); });

const aFaire = [...auParcours].filter(f => (par[f] || []).length < CIBLE).sort();
const manque = aFaire.reduce((n, f) => n + (CIBLE - (par[f] || []).length), 0);

console.log('banque : ' + BANK.length + ' questions · ' + Object.keys(par).length + ' fiches');
console.log('parcours : ' + auParcours.size + ' fiches');
console.log('cible ' + CIBLE + '/fiche → ' + aFaire.length + ' fiches à compléter, ' + manque + ' questions à écrire');
if (!aFaire.length) { console.log('rien à faire.'); process.exit(0); }

fs.mkdirSync(DEST + '/lots', { recursive: true });
fs.mkdirSync(DEST + '/sortie', { recursive: true });

/* on alterne les matières dans chaque lot : un agent qui voit 8 fiches de la même
   matière finit par se répéter d'une fiche à l'autre. */
const parMat = {};
aFaire.forEach(f => { const m = (par[f] && par[f][0] && par[f][0].mat) || matDuSlug(f); (parMat[m] = parMat[m] || []).push(f); });
function matDuSlug(f) {
  if (/^anatomie|^appareil|^os-|^muscle/.test(f)) return 'Anatomie';
  if (/^bio|^cellule|^tissu|^histo/.test(f)) return 'Biologie';
  if (/^chimie|^atome|^liaison/.test(f)) return 'Chimie';
  if (/^physique|^optique|^meca/.test(f)) return 'Physique';
  return 'Autre';
}
const mats = Object.keys(parMat).sort();
const melange = [];
for (let k = 0; melange.length < aFaire.length; k++)
  mats.forEach(m => { if (parMat[m][k]) melange.push(parMat[m][k]); });

let n = 0;
for (let k = 0; k < melange.length; k += PAR_LOT) {
  n++;
  const num = String(n).padStart(2, '0');
  const lot = melange.slice(k, k + PAR_LOT).map(f => ({
    fiche: f,
    matiere: (par[f] && par[f][0] && par[f][0].mat) || matDuSlug(f),
    aEcrire: CIBLE - (par[f] || []).length,
    dejaPosees: (par[f] || []).map(q => q.q),
    enoncesDejaUtilises: [].concat.apply([], (par[f] || []).map(q => (q.items || []).map(t => t.texte)))
  }));
  fs.writeFileSync(DEST + '/lots/lot-' + num + '.json', JSON.stringify(lot, null, 1));
}
console.log(n + ' lots écrits dans ' + DEST + '/lots/');
