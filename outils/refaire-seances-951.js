/* LE PARCOURS ENTIER, SUR LES 951 FICHES NEUVES.
   L'ancien parcours (108 séances) était bâti sur les 219 anciennes fiches, dont les
   noms n'avaient ni numéro ni ordre. Les fiches neuves sont numérotées dans l'ordre de
   lecture des chapitres de Lucas : le parcours se déduit donc du manifeste, sans
   fichier d'ordre à maintenir à la main.

   LES RÈGLES, INCHANGÉES :
   — deux fiches par séance, sans exception ; seule la dernière séance d'une matière au
     nombre impair de fiches n'en porte qu'une ;
   — on avance par paires dans l'ordre des chapitres d'une matière ;
   — quand une paire referme un chapitre et ouvre le suivant, le titre le dit (« → ») ;
   — les matières alternent une par une, et l'on enjambe celle qui est épuisée.

   Le parcours a une fin : à deux fiches par jour, les 951 fiches font ~477 séances,
   soit environ dix-huit mois — la durée maximale d'anticipation d'un élève.

   Écrit /tmp/seances-951.json et /tmp/titres-951.json. N'ÉCRIT PAS DANS L'APP :
   c'est implante-parcours.js qui pose le résultat, après contrôles. */
const fs = require('fs');
const path = require('path');
const RACINE = path.join(__dirname, '..');
const M = require('./manifeste-fiches.json');

const MATIERES = ['Anatomie', 'Biologie', 'Chimie', 'Physique'];
const CLE = { Anatomie: 'anatomie', Biologie: 'biologie', Chimie: 'chimie', Physique: 'physique' };
const IMAGE = { Anatomie: 'seance-coeur.png', Biologie: 'seance-mito.png', Chimie: 'seance-ph.png', Physique: 'seance-espace.png' };
const propre = t => String(t).replace(/\s*—\s*Fiche Medeos\s*$/, '').trim();
const slugDe = f => f.replace(/\.html$/, '');

/* LES TITRES DE CHAPITRES TELS QUE L'ÉLÈVE LES LIT. Le manifeste tient ses titres des
   noms de dossiers de cours — « Atome Structure Bohr », « Les methodes d etude », un
   « L\ » cassé par une apostrophe. Sur la route, dans une séance, dans « chapitre
   refermé », il faut du français. On les fixe ici, par matière et numéro. */
const TITRES_CHAP = {
  Anatomie: { 14: 'L\'œil', 15: 'L\'oreille' },
  Biologie: {
    1: 'Introduction à la biologie cellulaire', 2: 'La membrane plasmique', 3: 'Les organites cellulaires',
    4: 'Les méthodes d\'étude de la cellule', 5: 'Le cycle cellulaire', 6: 'La méiose',
    7: 'Spermatogenèse et ovogenèse', 8: 'Communication et signalisation cellulaire', 9: 'Histologie : les méthodes',
    10: 'Les tissus épithéliaux', 11: 'Les tissus conjonctifs', 12: 'Le tissu cartilagineux',
    13: 'Le tissu osseux', 14: 'Les tissus musculaires', 15: 'Le tissu nerveux',
  },
  Chimie: {
    1: 'L\'atome et le modèle de Bohr', 2: 'Le modèle quantique et la configuration électronique',
    3: 'La classification périodique', 4: 'Lewis, liaisons et polarité', 5: 'VSEPR, orbitales moléculaires et hybridation',
    6: 'Liaisons faibles et interactions', 7: 'Thermodynamique : le premier principe', 8: 'Entropie, enthalpie libre et équilibres',
    9: 'Cinétique : vitesse et catalyse', 10: 'Alcanes et cyclanes : nomenclature et conformations',
    11: 'Alcènes et systèmes conjugués', 12: 'Aromatiques et substitution électrophile',
    13: 'Stéréochimie : chiralité, R/S et E/Z', 14: 'Alcools et carbonyles : réactivité',
    15: 'Amines, acides carboxyliques et dérivés', 16: 'Glucides : structure et cyclisation',
    17: 'Lipides : acides gras et cholestérol', 18: 'Acides aminés et protéines',
  },
  Physique: {
    1: 'Eau, solutions et concentrations', 2: 'pH, acides, bases et tampons',
    3: 'Équilibres ioniques et effet Donnan', 4: 'Ondes acoustiques',
  },
};
const titreChap = (mat, e) => (TITRES_CHAP[mat] && TITRES_CHAP[mat][e.chapitre]) || e.chapitreTitre;

/* ── 1. chaque matière devient une file de fiches, chapitres dans l'ordre ── */
const files = {};
MATIERES.forEach(mat => {
  files[mat] = M[CLE[mat]].map(e => ({
    slug: slugDe(e.fiche),
    chap: titreChap(mat, e),
    titre: propre(e.titre),
  }));
});

/* ── 2. on découpe en paires ── */
const paquets = {};
MATIERES.forEach(mat => {
  const p = [], f = files[mat];
  for (let i = 0; i < f.length; i += 2) p.push(f.slice(i, i + 2));
  paquets[mat] = p;
});

/* ── 3. alternance une matière après l'autre, on enjambe celles qui sont finies ── */
const seances = [];
const curseur = { Anatomie: 0, Biologie: 0, Chimie: 0, Physique: 0 };
let reste = MATIERES.reduce((n, m) => n + paquets[m].length, 0);
while (reste > 0) {
  MATIERES.forEach(mat => {
    if (curseur[mat] >= paquets[mat].length) return;
    const paire = paquets[mat][curseur[mat]++]; reste--;
    const chaps = [...new Set(paire.map(x => x.chap))];
    seances.push({
      id: 'p' + (seances.length + 1),
      img: IMAGE[mat],
      mat: mat,
      chap: chaps.join(' → '),
      titre: paire.map(x => x.titre).join(' · '),
      fiches: paire.map(x => x.slug),
    });
  });
}

/* ── 4. les titres, pour le lecteur ── */
const titres = {};
MATIERES.forEach(mat => files[mat].forEach(x => { titres[x.slug] = x.titre; }));

/* ── 5. contrôles avant d'écrire quoi que ce soit ── */
const pb = [];
const vues = {};
seances.forEach(s => {
  if (s.fiches.length > 2) pb.push(s.id + ' : ' + s.fiches.length + ' fiches');
  if (!s.titre || s.titre.length < 4) pb.push(s.id + ' : titre vide');
  if (!s.chap) pb.push(s.id + ' : chapitre vide');
  s.fiches.forEach(f => {
    if (vues[f]) pb.push('fiche en double : ' + f);
    vues[f] = 1;
    if (!fs.existsSync(path.join(RACINE, 'fiches', f + '.html'))) pb.push('fiche absente : ' + f);
    if (!titres[f]) pb.push('titre manquant : ' + f);
  });
});
const attendu = MATIERES.reduce((n, m) => n + files[m].length, 0);
if (Object.keys(vues).length !== attendu) pb.push('perdu ' + (attendu - Object.keys(vues).length) + ' fiches');

/* une séance à une seule fiche n'est tolérée qu'en toute fin de matière */
seances.forEach((s, i) => {
  if (s.fiches.length !== 1) return;
  const suivante = seances.slice(i + 1).find(x => x.mat === s.mat);
  if (suivante) pb.push(s.id + ' : séance à une fiche alors que ' + s.mat + ' continue');
});

/* ── 6. ce qu'on a fabriqué ── */
const d = {}; seances.forEach(s => d[s.fiches.length] = (d[s.fiches.length] || 0) + 1);
console.log('séances : ' + seances.length + '  ·  ' + Object.keys(d).sort().map(k => k + ' fiche' + (k > 1 ? 's' : '') + ' ×' + d[k]).join(' · '));
console.log('fiches placées : ' + Object.keys(vues).length + ' / ' + attendu);
console.log('séances qui enjambent deux chapitres : ' + seances.filter(s => s.chap.includes('→')).length);
console.log('alternance des 16 premières : ' + seances.slice(0, 16).map(s => s.mat[0]).join(' '));
MATIERES.forEach(m => {
  const n = seances.filter(s => s.mat === m).length;
  console.log('  ' + m.padEnd(10) + String(n).padStart(3) + ' séances · dernière au jour ' + (seances.map(s => s.mat).lastIndexOf(m) + 1));
});
console.log('durée du parcours : ' + seances.length + ' jours ≈ ' + (seances.length / 30.4).toFixed(1) + ' mois à une séance par jour');
console.log('problèmes : ' + pb.length); pb.slice(0, 10).forEach(x => console.log('   ' + x));
if (pb.length) { console.log('\nRIEN ÉCRIT.'); process.exit(1); }

fs.writeFileSync('/tmp/seances-951.json', JSON.stringify(seances, null, 1));
fs.writeFileSync('/tmp/titres-951.json', JSON.stringify(titres, null, 1));
console.log('→ /tmp/seances-951.json  ·  /tmp/titres-951.json');
