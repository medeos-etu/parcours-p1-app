#!/usr/bin/env node
/* OÙ EN EST-ON ? — l'état des QCM, fiche par fiche.
   La seule source de vérité : le dossier qcm/. On ne compte que ce qui est rangé,
   jamais ce qui est « disponible quelque part ».
   usage : node outils/etat-qcm.js [--detail] */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const DETAIL = process.argv.includes('--detail');
const man = require(path.join(APP, 'outils', 'manifeste-fiches.json'));

/* le périmètre du moment : les 45 premiers jours */
const PERIMETRE = { anatomie: [1, 2, 3], biologie: [1, 2], chimie: [1], physique: [1] };

const parFiche = {};
const dossier = path.join(APP, 'qcm');
fs.readdirSync(dossier).filter(f => /\.json$/.test(f)).forEach(f => {
  let j; try { j = JSON.parse(fs.readFileSync(path.join(dossier, f), 'utf8')); } catch (e) { return; }
  (j.questions || []).forEach(q => {
    if (!q.fiche) return;
    (parFiche[q.fiche] = parFiche[q.fiche] || { reprise: 0, composee: 0, arene: 0 });
    if (q.arene) parFiche[q.fiche].arene++;
    else parFiche[q.fiche][q.origine === 'composee' ? 'composee' : 'reprise']++;
  });
});

console.log('  ÉTAT DES QCM — périmètre : les 45 premiers jours\n');
console.log('  matière     fiches   0 QCM   < 2 lots   2 lots+   5 lots+   arène ok   total rangé');
let g = { n: 0, z: 0, p: 0, d: 0, c: 0, a: 0, t: 0 };
Object.keys(PERIMETRE).forEach(mat => {
  const L = man[mat].filter(x => PERIMETRE[mat].includes(x.chapitre));
  let z = 0, p = 0, d = 0, c = 0, a = 0, t = 0;
  L.forEach(x => {
    const e = parFiche[x.fiche] || { reprise: 0, composee: 0, arene: 0 };
    const n = e.reprise + e.composee; t += n + e.arene;
    if (n === 0) z++; else if (n < 10) p++; else if (n < 25) d++; else c++;
    if (e.arene >= 3) a++;
  });
  g.n += L.length; g.z += z; g.p += p; g.d += d; g.c += c; g.a += a; g.t += t;
  console.log('  ' + mat.padEnd(11) + String(L.length).padStart(5) + String(z).padStart(8)
    + String(p).padStart(11) + String(d).padStart(10) + String(c).padStart(9)
    + String(a).padStart(11) + String(t).padStart(14));
});
console.log('  ' + 'TOTAL'.padEnd(11) + String(g.n).padStart(5) + String(g.z).padStart(8)
  + String(g.p).padStart(11) + String(g.d).padStart(10) + String(g.c).padStart(9)
  + String(g.a).padStart(11) + String(g.t).padStart(14));

const pret = g.d + g.c;
console.log('\n  PRÊT À METTRE EN LIGNE : ' + pret + ' / ' + g.n + ' fiches ont leurs 2 lots'
  + (pret === g.n ? '  ✓' : '   (' + (g.n - pret) + ' à servir)'));
console.log('  arène : ' + g.a + ' / ' + g.n + ' fiches ont leurs 3 questions');

if (DETAIL) {
  console.log('\n  LE DÉTAIL, fiche par fiche');
  Object.keys(PERIMETRE).forEach(mat => {
    man[mat].filter(x => PERIMETRE[mat].includes(x.chapitre)).forEach(x => {
      const e = parFiche[x.fiche] || { reprise: 0, composee: 0, arene: 0 };
      const n = e.reprise + e.composee;
      console.log('   ' + (n >= 10 ? '✓' : (n ? '·' : '✗')) + ' ' + x.fiche.replace('.html', '').padEnd(48)
        + String(n).padStart(3) + ' questions (' + e.reprise + ' reprises, ' + e.composee + ' composées) · '
        + e.arene + ' arène');
    });
  });
}
