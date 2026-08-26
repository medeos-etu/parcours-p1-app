/* LE PARCOURS, DEUX FICHES PAR JOUR — SANS EXCEPTION.
   L'ancienne règle autorisait une séance à trois fiches quand un chapitre tombait
   sur un nombre impair : 23 séances sur 95 étaient dans ce cas, soit un jour sur
   quatre à 50 % de charge en plus. Nouvelle règle : on avance par PAIRES dans
   l'ordre des chapitres d'une matière. Quand une paire enjambe la fin d'un chapitre
   et le début du suivant, on le dit — c'est le jour où l'on referme un chapitre et
   où l'on ouvre le suivant. Seule exception possible : la toute dernière séance
   d'une matière au nombre impair de fiches, qui n'en porte qu'une. */
const fs = require('fs');
const RACINE = '/Users/lucascrepin/dev/parcours-p1-app';
const ordre = require('/tmp/ordre.json');

const h = fs.readFileSync(RACINE + '/index.html', 'utf8');
const ti = h.indexOf('const TITRES_FICHES=');
const TITRES = eval('(' + h.slice(h.indexOf('{', ti), h.indexOf('};', ti) + 1) + ')');

const PREFIXE = { Anatomie: 'anatomie-', Biologie: 'biologie-', Chimie: 'chimie-', Physique: 'physique-' };
const IMAGE = { Anatomie: 'seance-coeur.png', Biologie: 'seance-mito.png', Chimie: 'seance-ph.png', Physique: 'seance-espace.png' };
const MATIERES = ['Anatomie', 'Biologie', 'Chimie', 'Physique'];

/* ── 1. chaque matière devient une file de fiches, chapitres dans l'ordre ── */
const files = {};
MATIERES.forEach(mat => {
  const f = [];
  ordre[mat].forEach(chap => {
    const nom = chap[0];
    chap.slice(1).forEach(s => f.push({ slug: PREFIXE[mat] + s, chap: nom }));
  });
  files[mat] = f;
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
      titre: paire.map(x => TITRES[x.slug] || x.slug).join(' · '),
      fiches: paire.map(x => x.slug)
    });
  });
}

/* ── 4. contrôles avant écriture ── */
const pb = [];
const vues = {};
seances.forEach(s => {
  if (s.fiches.length > 2) pb.push(s.id + ' : ' + s.fiches.length + ' fiches');
  s.fiches.forEach(f => {
    if (vues[f]) pb.push('fiche en double : ' + f);
    vues[f] = 1;
    if (!fs.existsSync(RACINE + '/fiches/' + f + '.html')) pb.push('fiche absente : ' + f);
  });
});
const attendu = MATIERES.reduce((n, m) => n + files[m].length, 0);
if (Object.keys(vues).length !== attendu) pb.push('perdu ' + (attendu - Object.keys(vues).length) + ' fiches');

const d = {}; seances.forEach(s => d[s.fiches.length] = (d[s.fiches.length] || 0) + 1);
console.log('séances : ' + seances.length + '  ·  ' + Object.keys(d).sort().map(k => k + ' fiches ×' + d[k]).join(' · '));
console.log('fiches placées : ' + Object.keys(vues).length + ' / ' + attendu);
console.log('séances qui enjambent deux chapitres : ' + seances.filter(s => s.chap.includes('→')).length);
console.log('alternance des 16 premières : ' + seances.slice(0, 16).map(s => s.mat[0]).join(' '));
console.log('problèmes : ' + pb.length); pb.slice(0, 8).forEach(x => console.log('   ' + x));
if (pb.length) process.exit(1);

fs.writeFileSync('/tmp/seances-2fiches.json', JSON.stringify(seances, null, 1));
console.log('→ /tmp/seances-2fiches.json');
