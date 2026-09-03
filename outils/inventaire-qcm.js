#!/usr/bin/env node
/* INVENTAIRE DE TOUT CE QU'ON A COMME QCM.
   Trois gisements : la banque de l'app (index.html), les QCM du site (data/qcm), et
   rien d'autre — les cours eux-mêmes n'en contiennent pas.
   On les met tous au même format et on regarde ce que ça donne par matière et par
   chapitre, en face du nombre de fiches à servir. */
const fs = require('fs'), path = require('path');
const SITE = '/Users/lucascrepin/dev/medeos-site/data/qcm';
const APP = path.join(__dirname, '..');

function lisSite() {
  const out = [];
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = path.join(d, e.name);
    if (e.isDirectory()) return walk(f);
    if (!/\.json$/.test(e.name)) return;
    let j; try { j = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e2) { return; }
    const mat = (j.subject || path.basename(path.dirname(f)) || '').toLowerCase();
    const chap = j.chapterNumber != null ? +j.chapterNumber : null;
    const titre = j.chapterTitle || '';
    /* les questions vivent soit à plat, soit dans des « quizzes » */
    /* « quizzes » EST la liste des questions — chacune a déjà son tableau d'items.
       Certains fichiers rangent les questions ailleurs : on ratisse large. */
    const listes = [];
    if (Array.isArray(j.quizzes)) listes.push(j.quizzes);
    if (Array.isArray(j.questions)) listes.push(j.questions);
    if (Array.isArray(j)) listes.push(j);
    Object.values(j).forEach(v => { if (Array.isArray(v) && v.length && v[0] && v[0].question && Array.isArray(v[0].items)) listes.push(v); });
    const vus = new Set();
    listes.forEach(L => L.forEach(q => {
      if (!q || !q.question || !Array.isArray(q.items)) return;
      const cle = q.question.trim();
      if (vus.has(cle)) return; vus.add(cle);
      out.push({ source: path.relative(SITE, f), mat, chap, titre, q: q.question, items: q.items });
    }));
  });
  walk(SITE);
  return out;
}

function lisApp() {
  const h = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
  const i = h.indexOf('const ABANK=['), j = h.indexOf('\n];', i);
  return eval(h.slice(i + 12, j + 2)).map(q => ({
    source: 'app', mat: (q.mat || '').toLowerCase(), chap: null, titre: q.n,
    fiche: q.f, arene: !!q.ar, q: q.q,
    items: (q.it || []).map(t => ({ letter: t[0], text: t[1], isCorrect: !!t[2], explanation: t[3] })),
  }));
}

const site = lisSite(), app = lisApp();
const tout = site.concat(app);
console.log('GISEMENTS');
console.log('  QCM du site (data/qcm) : ' + site.length);
console.log('  banque de l\'app        : ' + app.length);
console.log('  TOTAL                  : ' + tout.length);

/* les fiches à servir */
const fiches = fs.readdirSync(path.join(APP, 'fiches')).filter(f => /^(anatomie|biologie|chimie|physique)-\d+-/.test(f));
const parMat = {};
fiches.forEach(f => { const m = f.split('-')[0]; parMat[m] = (parMat[m] || 0) + 1; });

console.log('\nCE QU\'IL FAUT, MATIÈRE PAR MATIÈRE');
console.log('  matière     fiches   questions dispo   2 lots (10/fiche)   5 lots (25/fiche)');
let manque2 = 0, manque5 = 0;
Object.keys(parMat).sort().forEach(m => {
  const n = parMat[m];
  const dispo = tout.filter(q => q.mat === m || (m === 'anatomie' && q.mat === 'anatomie')).length;
  const b2 = n * 10, b5 = n * 25;
  manque2 += Math.max(0, b2 - dispo); manque5 += Math.max(0, b5 - dispo);
  console.log('  ' + m.padEnd(11) + String(n).padStart(5) + String(dispo).padStart(15)
    + String(b2).padStart(20) + (dispo >= b2 ? ' ✓' : ' manque ' + (b2 - dispo))
    + String(b5).padStart(14) + (dispo >= b5 ? ' ✓' : ' manque ' + (b5 - dispo)));
});
console.log('\n  à produire pour la version gratuite (2 lots) : ' + manque2);
console.log('  à produire pour le pack année complète (5 lots) : ' + manque5);
