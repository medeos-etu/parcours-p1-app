/* IMPLANTE LE PARCOURS ENTIER DANS L'APP — et prépare TOUS les emplacements de QCM.
   node outils/implante-parcours.js [--essai]

   Ce que ça pose :
     1. SEANCES        → les 477 séances des 951 fiches neuves
     2. TITRES_FICHES  → les 951 titres
     3. ABANK          → les QCM produits, chacun portant son numéro de lot

   LE MODÈLE DES LOTS, décidé par Lucas : chaque fiche a SEPT emplacements, toujours
   les mêmes, qu'ils soient remplis ou non —
     lots 1-2  entraînement, accès gratuit
     lots 3-5  entraînement, pack année complète
     lots 6-7  arène (ar:1), jamais jouables à l'entraînement
   L'app raisonne sur cette structure, pas sur ce qui est présent : une fiche dont les
   QCM ne sont pas encore écrits a quand même ses sept cases, simplement vides. On les
   remplit ensuite sans retoucher une ligne de code.

   Relançable : le bloc de QCM du Parcours est délimité par des marqueurs et remplacé
   d'un coup, donc rejouer le script ne duplique rien. */
const fs = require('fs');
const path = require('path');
const APP = path.join(__dirname, '..');
const P = path.join(APP, 'index.html');
const ESSAI = process.argv.includes('--essai');
const js = s => JSON.stringify(s);

const DEB = '/* ==PARCOURS-QCM-DEBUT== */';
const FIN = '/* ==PARCOURS-QCM-FIN== */';

/* ── 0. la matière ── */
const seances = JSON.parse(fs.readFileSync('/tmp/seances-951.json', 'utf8'));
const titres = JSON.parse(fs.readFileSync('/tmp/titres-951.json', 'utf8'));
const dossierQcm = path.join(APP, 'qcm');
const lots = [];
if (fs.existsSync(dossierQcm)) {
  fs.readdirSync(dossierQcm).filter(f => /\.json$/.test(f) && !/^_/.test(f)).sort().forEach(nom => {
    let j; try { j = JSON.parse(fs.readFileSync(path.join(dossierQcm, nom), 'utf8')); } catch (e) { return; }
    (j.questions || []).forEach(q => lots.push({ ...q, _f: nom }));
  });
}

let h = fs.readFileSync(P, 'utf8');
const avant = h.length;

/* ── 1. contrôles sur les séances ── */
const pb = [];
const dispo = new Set(fs.readdirSync(path.join(APP, 'fiches')).filter(f => f.endsWith('.html')).map(f => f.replace(/\.html$/, '')));
const vues = {};
seances.forEach(s => {
  if (!s.id || !s.mat || !s.titre || !Array.isArray(s.fiches)) pb.push(s.id + ' : séance incomplète');
  if (s.fiches.length < 1 || s.fiches.length > 2) pb.push(s.id + ' : ' + s.fiches.length + ' fiches');
  s.fiches.forEach(f => {
    if (vues[f]) pb.push('fiche en double : ' + f);
    vues[f] = 1;
    if (!dispo.has(f)) pb.push('fiche absente du dossier : ' + f);
    if (!titres[f]) pb.push('titre manquant : ' + f);
  });
});
if (new Set(seances.map(s => s.id)).size !== seances.length) pb.push('identifiants de séance en double');

/* ── 2. contrôles sur les QCM, et le rangement par lot ── */
const parFiche = {};
lots.forEach((q, i) => {
  const où = q._f + '#' + i;
  if (!q.fiche || !dispo.has(q.fiche.replace(/\.html$/, ''))) return pb.push(où + ' : fiche inconnue ' + q.fiche);
  if (!q.lot || q.lot < 1 || q.lot > 7) return pb.push(où + ' : lot ' + q.lot + ' hors 1-7');
  if (!Array.isArray(q.items) || q.items.length !== 5) return pb.push(où + ' : ' + (q.items || []).length + ' items');
  const slug = q.fiche.replace(/\.html$/, '');
  (parFiche[slug] = parFiche[slug] || {})[q.lot] = q;
});
Object.keys(parFiche).forEach(f => {
  const n = Object.keys(parFiche[f]).length;
  if (n !== 7) pb.push(f + ' : ' + n + ' lots sur 7');
});

console.log('séances      : ' + seances.length + ' · fiches : ' + Object.keys(vues).length);
console.log('titres       : ' + Object.keys(titres).length);
console.log('QCM produits : ' + lots.length + ' · fiches servies : ' + Object.keys(parFiche).length
  + ' / ' + Object.keys(vues).length + '  (' + Math.round(100 * Object.keys(parFiche).length / Object.keys(vues).length) + ' %)');
console.log('emplacements : ' + (Object.keys(vues).length * 7) + ' au total, ' + lots.length + ' remplis, '
  + (Object.keys(vues).length * 7 - lots.length) + ' à remplir plus tard');
console.log('problèmes    : ' + pb.length);
pb.slice(0, 10).forEach(x => console.log('   ' + x));
if (pb.length) { console.log('\nRIEN ÉCRIT.'); process.exit(1); }

/* ── 3. le bloc SEANCES ── */
function remplaceBloc(txt, entete, finBloc) {
  const i = txt.indexOf(entete);
  if (i < 0) throw new Error('introuvable : ' + entete);
  const j = txt.indexOf(finBloc, i);
  if (j < 0) throw new Error('fin introuvable pour ' + entete);
  return [i, j + finBloc.length];
}

const enteteSeances = 'const SEANCES=[';
const [s0, s1] = remplaceBloc(h, enteteSeances, '\n];');
const blocSeances = 'const SEANCES=[  /* ── LE PARCOURS COMPLET — ' + seances.length + ' séances sur les 951 fiches ──\n'
  + '   Deux fiches par séance, sans exception : seules les trois dernières séances\n'
  + '   d\'Anatomie, de Biologie et de Physique en portent une, ces matières comptant un\n'
  + '   nombre impair de fiches. On avance par paires dans l\'ordre des chapitres ; quand\n'
  + '   une paire referme un chapitre et ouvre le suivant, le titre le dit (« → »). Les\n'
  + '   matières alternent une par une et l\'on enjambe celle qui est épuisée.\n'
  + '   ' + seances.length + ' séances à une par jour ≈ ' + (seances.length / 30.4).toFixed(1) + ' mois : le Parcours a une fin, et elle\n'
  + '   tombe au bout de la durée maximale d\'anticipation d\'un élève.\n'
  + '   Fabriqué par outils/refaire-seances-951.js, posé par outils/implante-parcours.js. ── */\n'
  + seances.map(s => ' ' + JSON.stringify(s)).join(',\n') + '\n];';
h = h.slice(0, s0) + blocSeances + h.slice(s1);

/* ── 4. le bloc TITRES_FICHES ── */
const [t0, t1] = remplaceBloc(h, 'const TITRES_FICHES={', '\n};');
const clesTri = Object.keys(titres).sort();
const blocTitres = 'const TITRES_FICHES={  /* les ' + clesTri.length + ' fiches du Parcours, titre affiché dans le lecteur */\n'
  + clesTri.map(k => ' ' + js(k) + ':' + js(titres[k])).join(',\n') + '\n};';
h = h.slice(0, t0) + blocTitres + h.slice(t1);

/* ── 5. les QCM du Parcours, dans l'ABANK ── */
const L = 'ABCDE';
function melange(arr, graine) {
  let s = graine; const a = arr.slice();
  const r = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  for (let k = a.length - 1; k > 0; k--) { const m = Math.floor(r() * (k + 1)); [a[k], a[m]] = [a[m], a[k]]; }
  return a;
}
const matDe = {}; seances.forEach(s => s.fiches.forEach(f => { matDe[f] = s.mat; }));
const lignes = [];
Object.keys(parFiche).sort().forEach(slug => {
  [1, 2, 3, 4, 5, 6, 7].forEach(lot => {
    const q = parFiche[slug][lot]; if (!q) return;
    const items = melange(q.items, 7919 * (lignes.length + 1) + 13);
    const its = items.map((t, k) => '[' + js(L[k]) + ', ' + js(t.t) + ', ' + (t.v ? 1 : 0) + ', ' + js(t.e) + ']').join(',');
    lignes.push('{id:' + js('pq-' + slug + '-' + lot) + ', mat:' + js(matDe[slug] || '') + ', n:' + js(titres[slug] || slug)
      + ', f:' + js(slug) + ', D:1000, M:12, lo:' + lot + (lot >= 6 ? ', ar:1' : '') + ', q:' + js(q.q) + ',\n  it:[' + its + ']}');
  });
});

/* LES QUESTIONS D'AVANT LE PARCOURS. Elles avaient été écrites pour les 219 anciennes
   fiches, dont plus aucune n'est dans une séance : les Salles et l'Amphi ne piochent que
   dans les fiches servies par le Parcours, donc ces questions ne peuvent plus être jouées
   par personne — 1 137 questions, 1,6 Mo, chargées à chaque ouverture pour rien.
   On les archive dans qcm/_archive-anciennes-fiches.json (et elles restent dans git),
   puis la banque ne contient plus que les QCM du Parcours. --garder-anciennes pour
   les conserver malgré tout. */
const iBank = h.indexOf('const ABANK=[');
const jBank = h.indexOf('\n];', iBank);
const GARDER = process.argv.includes('--garder-anciennes');
let ancienBloc = '';
{
  const corpsBank = h.slice(iBank + 'const ABANK=['.length, jBank);
  const iD = corpsBank.indexOf(DEB);
  const sansParcours = iD >= 0 ? corpsBank.slice(0, iD).replace(/,\s*$/, '') : corpsBank;
  let anciennes = [];
  try { anciennes = eval('[' + sansParcours + '\n]'); } catch (e) { pb.push('banque illisible : ' + e.message); }
  const orphelines = anciennes.filter(q => !q.lo);
  if (orphelines.length && !GARDER) {
    const arch = path.join(dossierQcm, '_archive-anciennes-fiches.json');
    if (!fs.existsSync(arch)) fs.writeFileSync(arch, JSON.stringify(orphelines, null, 1));
    console.log('anciennes    : ' + orphelines.length + ' questions sur d\'anciennes fiches → archivées dans qcm/_archive-anciennes-fiches.json, retirées de la banque');
  } else if (orphelines.length) {
    ancienBloc = sansParcours + ',\n';
    console.log('anciennes    : ' + orphelines.length + ' questions conservées (--garder-anciennes)');
  }
}
if (pb.length) { console.log('\nRIEN ÉCRIT.'); process.exit(1); }
const blocQcm = '\n' + DEB + '\n'
  + '/* ── LES QCM DU PARCOURS — ' + lignes.length + ' questions sur ' + Object.keys(parFiche).length + ' fiches.\n'
  + '   Chaque question porte son lot (lo) : 1-2 entraînement gratuit, 3-5 entraînement\n'
  + '   pack année complète, 6-7 arène (ar:1). Écrites depuis la fiche, chaque item ancré\n'
  + '   par une citation littérale vérifiée par outils/verifie-qcm.js.\n'
  + '   Bloc remplacé en entier à chaque implantation : ne rien écrire à la main ici. ── */\n'
  + lignes.join(',\n') + '\n' + FIN;
h = h.slice(0, iBank + 'const ABANK=['.length) + ancienBloc + blocQcm + h.slice(jBank);

/* ── 5 bis. les vignettes de la carte réellement présentes ── */
{
  const dossierV = path.join(APP, 'img', 'parcours', 'territoires');
  const vign = {};
  if (fs.existsSync(dossierV)) fs.readdirSync(dossierV).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort()
    .forEach(f => { vign[f.replace(/\.(png|jpe?g|webp)$/i, '')] = f; });
  const iV = h.indexOf('/* ==VIGNETTES== */'), jV = h.indexOf('/* ==/VIGNETTES== */');
  if (iV < 0 || jV < 0) { console.log('marqueurs VIGNETTES introuvables — carte sans vignettes'); }
  else h = h.slice(0, iV) + '/* ==VIGNETTES== */\nconst VIGNETTES=' + JSON.stringify(vign) + ';\n' + h.slice(jV);
  console.log('vignettes    : ' + Object.keys(vign).length + ' présentes dans img/parcours/territoires/');
}

/* ── 6. écriture ── */
if (ESSAI) { console.log('\n(essai : rien écrit · ' + lignes.length + ' questions prêtes)'); process.exit(0); }
fs.writeFileSync(P + '.avant-parcours', fs.readFileSync(P));
fs.writeFileSync(P, h);
console.log('\nIMPLANTÉ.');
console.log('  séances   : ' + seances.length);
console.log('  titres    : ' + clesTri.length);
console.log('  questions : ' + lignes.length);
console.log('  index.html : ' + (avant / 1024).toFixed(0) + ' Ko → ' + (h.length / 1024).toFixed(0) + ' Ko');
console.log('  sauvegarde : index.html.avant-parcours');
