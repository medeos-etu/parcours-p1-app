#!/usr/bin/env node
/* REMET LES NUMÉROS À PLAT.
   La production en parallèle a réservé un bloc de numéros par chapitre : il reste donc
   des trous, et quelques fiches ont été garées en 900 pour éviter une collision. Ce
   script remet tout d'affilée, 01, 02, 03…, DANS L'ORDRE DES CHAPITRES DE LUCAS.
   Il ne renomme rien tant que tous les contrôles ne sont pas passés.
   usage : node outils/renumerote.js [--pour-de-vrai] */
const fs = require('fs'), path = require('path');
const VRAI = process.argv.includes('--pour-de-vrai');
const APP = path.join(__dirname, '..');
const SCR = '/Users/lucascrepin/.claude/projects/-Users-lucascrepin-Desktop-medeos-site/d0b5e632-e219-412c-b65d-feff9a5d0885/workflows/scripts';

/* les blocs réservés, tels que les orchestrateurs les ont posés */
function blocs(mat) {
  const f = path.join(SCR, mat + '-complete.js');
  if (!fs.existsSync(f)) return null;
  const s = fs.readFileSync(f, 'utf8');
  const b = [...s.matchAll(/\{ n: (\d+), depart: (\d+), titre: '([^']*)'/g)]
    .map(m => ({ ch: +m[1], de: +m[2], titre: m[3] })).sort((a, b2) => a.de - b2.de);
  return b;
}
/* l'anatomie et la biologie ont commencé sans blocs : leurs premiers chapitres suivent
   simplement l'ordre des numéros, ce qui revient au même une fois remis à plat. */
function chapitreDe(mat, n, b) {
  if (n >= 900) return 999;                       /* les garées : replacées à la main */
  if (!b) return 0;
  let ch = 0;
  b.forEach(x => { if (n >= x.de) ch = x.ch; });
  return ch;
}
/* les six fiches garées, remises là où elles appartiennent */
const GAREES = {
  'physique-900-decodage-serum-physiologique': 1,
  'physique-901-bicouche-lipidique-aquaporines': 3,
  'physique-902-quatre-modes-transport': 3,
  'physique-903-diffusion-facilitee-saturation': 3,
  'physique-904-michaelis-menten-deux-regimes': 3,
  'physique-905-transport-actif-rein': 3,
};

let total = 0, plans = {};
['anatomie', 'biologie', 'chimie', 'physique'].forEach(mat => {
  const b = blocs(mat);
  const L = fs.readdirSync(path.join(APP, 'fiches'))
    .filter(f => new RegExp('^' + mat + '-\\d+-').test(f))
    .map(f => {
      const n = +f.match(new RegExp('^' + mat + '-(\\d+)-'))[1];
      const slug = f.replace(new RegExp('^' + mat + '-\\d+-'), '').replace('.html', '');
      const g = GAREES[f.replace('.html', '')];
      return { f, n, slug, ch: g != null ? g : chapitreDe(mat, n, b) };
    })
    /* dans l'ordre : chapitre, puis numéro d'origine ; une fiche garée passe en fin de
       son chapitre, ce qui est sa vraie place (elle en traite la fin). */
    .sort((a, c) => a.ch - c.ch || (a.n >= 900 ? 1 : 0) - (c.n >= 900 ? 1 : 0) || a.n - c.n);

  const plan = L.map((x, i) => {
    const nn = String(i + 1).padStart(3, '0');
    return { de: x.f, vers: mat + '-' + nn + '-' + x.slug + '.html', ch: x.ch };
  });
  plans[mat] = plan;
  total += plan.length;
  const chaps = [...new Set(plan.map(p => p.ch))].sort((a, c) => a - c);
  console.log('  ' + mat.padEnd(10) + String(plan.length).padStart(4) + ' fiches · chapitres ' + chaps.join(', '));
});

/* CONTRÔLES avant de toucher au disque */
const pb = [];
Object.keys(plans).forEach(mat => {
  const vus = new Set();
  plans[mat].forEach(p => {
    if (vus.has(p.vers)) pb.push('doublon d\'arrivée : ' + p.vers);
    vus.add(p.vers);
    if (!fs.existsSync(path.join(APP, 'fiches', p.de))) pb.push('source absente : ' + p.de);
  });
});
console.log('\n  ' + total + ' fiches · problèmes : ' + pb.length);
pb.slice(0, 5).forEach(x => console.log('   ' + x));
if (pb.length) process.exit(1);
if (!VRAI) { console.log('\n  (essai — rien renommé. Relance avec --pour-de-vrai)'); process.exit(0); }

/* on passe par un nom temporaire : sinon un renommage écrase la fiche suivante */
Object.keys(plans).forEach(mat => {
  plans[mat].forEach((p, i) => fs.renameSync(path.join(APP, 'fiches', p.de), path.join(APP, 'fiches', '_tmp' + i + '_' + mat)));
  plans[mat].forEach((p, i) => fs.renameSync(path.join(APP, 'fiches', '_tmp' + i + '_' + mat), path.join(APP, 'fiches', p.vers)));
});
console.log('\n  ' + total + ' fiches renumérotées.');
