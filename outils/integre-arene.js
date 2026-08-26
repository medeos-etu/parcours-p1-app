#!/usr/bin/env node
/* Intègre les QCM D'ARÈNE dans la banque de l'app.
   Ces questions portent q.ar = 1 : elles ne se jouent JAMAIS dans les Salles, seulement
   en ascension au Grand Amphi. C'est ce qui empêche de réviser l'épreuve à l'avance.
   node outils/integre-arene.js [--essai]   (--essai : contrôle seulement, n'écrit rien) */
const fs = require('fs'), path = require('path');
const ESSAI = process.argv.includes('--essai');
const DIR = '/tmp/arene/sortie';
const P = path.join(__dirname, '..', 'index.html');
const js = s => JSON.stringify(s);

/* ── 1. lecture des lots ── */
const fichiers = fs.readdirSync(DIR).filter(f => /^lot-\d+\.json$/.test(f)).sort();
let Q = [];
fichiers.forEach(f => {
  const l = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
  l.forEach(q => { q._lot = f; });
  Q = Q.concat(l);
});
console.log('lots lus : ' + fichiers.length + ' · questions : ' + Q.length);

/* ── 2. la banque telle qu'elle est ── */
const h = fs.readFileSync(P, 'utf8');
const i = h.indexOf('const ABANK=['), j = h.indexOf('\n];', i);
const BANK = eval(h.slice(i + 'const ABANK='.length, j + 2));
const dejaQ = new Set(BANK.map(q => q.q.trim().toLowerCase()));
const dejaId = new Set(BANK.map(q => q.id));
/* toutes les propositions déjà posées, fiche par fiche : une question d'arène qui
   recopie une proposition d'entraînement ne sert à rien */
const propParFiche = {};
BANK.forEach(q => {
  (propParFiche[q.f] = propParFiche[q.f] || new Set());
  (q.it || []).forEach(t => propParFiche[q.f].add(String(t[1]).trim().toLowerCase()));
});
const matDeFiche = {};
BANK.forEach(q => { matDeFiche[q.f] = q.mat; });

/* ── 3. contrôles ── */
const pb = [], vus = new Set(), parFiche = {};
Q.forEach((q, n) => {
  const où = q._lot + '#' + n;
  if (!q.f || !q.n || !q.q || !Array.isArray(q.items)) return pb.push(où + ' : champs manquants');
  parFiche[q.f] = (parFiche[q.f] || 0) + 1;
  if (q.items.length !== 5) pb.push(où + ' : ' + q.items.length + ' propositions');
  const v = q.items.filter(t => t.vrai).length;
  if (v < 1 || v > 5) pb.push(où + ' : ' + v + ' vraies');
  q.items.forEach((t, k) => {
    if (!t.texte || t.texte.length < 10) pb.push(où + '.' + k + ' : proposition vide');
    if (!t.expl || t.expl.length < 25) pb.push(où + '.' + k + ' : explication trop courte');
    const cle = String(t.texte).trim().toLowerCase();
    if (propParFiche[q.f] && propParFiche[q.f].has(cle)) pb.push(où + '.' + k + ' : proposition déjà posée sur cette fiche');
  });
  const brut = JSON.stringify(q);
  if (/la fiche|le cours|le document|le paragraphe|proposition [A-E]\b/i.test(brut)) pb.push(où + ' : renvoi interdit');
  if (/toutes les propositions|aucune des réponses/i.test(brut)) pb.push(où + ' : formule interdite');
  const cle = q.q.trim().toLowerCase();
  if (vus.has(cle)) pb.push(où + ' : énoncé dupliqué dans les lots');
  if (dejaQ.has(cle)) pb.push(où + ' : énoncé déjà dans la banque');
  vus.add(cle);
  if (!matDeFiche[q.f]) pb.push(où + ' : fiche inconnue de la banque — ' + q.f);
  if (!fs.existsSync(path.join(__dirname, '..', 'fiches', q.f + '.html'))) pb.push(où + ' : fiche absente ' + q.f);
});
/* chaque fiche servie doit l'être trois fois */
Object.keys(parFiche).forEach(f => { if (parFiche[f] !== 3) pb.push(f + ' : ' + parFiche[f] + ' questions d\'arène au lieu de 3'); });

console.log('fiches servies : ' + Object.keys(parFiche).length);
console.log('problèmes : ' + pb.length);
pb.slice(0, 15).forEach(x => console.log('   ' + x));
if (pb.length && !ESSAI) { console.log('\nRIEN N’A ÉTÉ ÉCRIT — corrige d’abord.'); process.exit(1); }

/* ── 4. l'équilibre, mesuré sur le vivier réel de l'Amphi ── */
const dist = Q.reduce((a, q) => { const v = q.items.filter(t => t.vrai).length; a[v] = (a[v] || 0) + 1; return a; }, {});
const moy = Q.reduce((a, q) => a + q.items.filter(t => t.vrai).length, 0) / Q.length;
console.log('\nrépartition des vraies : ' + [1, 2, 3, 4, 5].map(k => k + 'v ' + Math.round(100 * (dist[k] || 0) / Q.length) + '%').join(' · '));
console.log('moyenne : ' + moy.toFixed(2) + ' (cible 2,50)');
const g = 2 * moy - 2 * (5 - moy);
console.log('cocher les 5 cases rapporterait, en ascension : ' + (g > 0 ? '+' : '') + g.toFixed(1) + ' 🏆 par question');

/* ── 5. mélange, identifiants, écriture ── */
function melange(arr, graine) {
  let s = graine; const a = arr.slice();
  const r = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  for (let k = a.length - 1; k > 0; k--) { const m = Math.floor(r() * (k + 1)); [a[k], a[m]] = [a[m], a[k]]; }
  return a;
}
const L = 'ABCDE', compte = {};
const lignes = Q.map((q, idx) => {
  const slug = q.f;
  compte[slug] = (compte[slug] || 0) + 1;
  let id = 'arn-' + slug + '-' + compte[slug];
  while (dejaId.has(id)) { compte[slug]++; id = 'arn-' + slug + '-' + compte[slug]; }
  dejaId.add(id);
  const items = melange(q.items, 104729 * (idx + 1) + 7);
  const its = items.map((t, k) => '[' + js(L[k]) + ', ' + js(t.texte) + ', ' + (t.vrai ? 1 : 0) + ', ' + js(t.expl) + ']').join(',');
  return '{id:' + js(id) + ', mat:' + js(matDeFiche[q.f]) + ', n:' + js(q.n) + ', f:' + js(q.f) + ', D:1000, M:12, ar:1, q:' + js(q.q) + ',\n  it:[' + its + ']}';
});
if (ESSAI) { console.log('\n(essai : rien écrit)'); process.exit(0); }
const bloc = ',\n/* ── QUESTIONS D\'ARÈNE — ' + Q.length + ' questions, ' + Object.keys(parFiche).length + ' fiches, 26/08/2026.\n'
  + '   ar:1 — réservées au Grand Amphi, invisibles dans les Salles : on ne révise pas\n'
  + '   l\'épreuve à l\'avance. Écrites depuis les fiches, relues, propositions mélangées. ── */\n'
  + lignes.join(',\n') + '\n';
fs.writeFileSync(P, h.slice(0, j) + bloc + h.slice(j));
console.log('\nINTÉGRÉ : ' + Q.length + ' questions d\'arène.');
