#!/usr/bin/env node
/* PREMIER TRI : quelles questions existantes peuvent aller à quelle fiche ?
   On ne décide rien ici — on estime. Pour chaque fiche, on cherche parmi les questions
   de SA MATIÈRE celles dont le vocabulaire recouvre celui de la fiche. C'est un
   dégrossissage lexical : un agent devra ensuite vérifier que la fiche permet vraiment
   d'y répondre. Mais ça dit déjà où sont les trous. */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const SITE = '/Users/lucascrepin/dev/medeos-site/data/qcm';
const SEUIL = +(process.argv[2] || 0.30);

const VIDE = new Set(('le la les un une des de du au aux et ou ni mais donc or car que qui quoi dont ou est sont a ont pour par dans sur sous avec sans vers chez entre plus moins tres tout tous toute toutes ce cet cette ces son sa ses leur leurs il elle ils elles on se ne pas plus quel quelle quelles lequel laquelle exacte exactes exact proposition propositions concernant suivantes suivante affirmation affirmations reponse reponses vrai faux juste cocher parmi lesquelles laquelle etre avoir fait faire peut peuvent doit doivent sera seront ainsi aussi meme selon apres avant lors cas type types partie parties niveau').split(' '));
const mots = s => new Set(String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').split(' ').filter(w => w.length > 3 && !VIDE.has(w)));

/* les questions, matière par matière */
const parMat = {};
(function walk(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = path.join(d, e.name);
    if (e.isDirectory()) return walk(f);
    if (!/\.json$/.test(e.name)) return;
    let j; try { j = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (x) { return; }
    const mat = String(j.subject || path.basename(path.dirname(f))).toLowerCase();
    const L = Array.isArray(j.quizzes) ? j.quizzes : (Array.isArray(j.questions) ? j.questions : []);
    L.forEach(q => {
      if (!q || !q.question || !Array.isArray(q.items)) return;
      const txt = q.question + ' ' + q.items.map(i => (i.text || '') + ' ' + (i.explanation || '')).join(' ');
      (parMat[mat] = parMat[mat] || []).push({ src: path.relative(SITE, f), q: q.question, items: q.items, m: mots(txt) });
    });
  });
})(SITE);
/* et celles de l'app */
{
  const h = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
  const i = h.indexOf('const ABANK=['), j = h.indexOf('\n];', i);
  eval(h.slice(i + 12, j + 2)).forEach(q => {
    const mat = String(q.mat).toLowerCase();
    const txt = q.q + ' ' + (q.it || []).map(t => t[1] + ' ' + t[3]).join(' ');
    (parMat[mat] = parMat[mat] || []).push({ src: 'app', q: q.q, items: q.it, m: mots(txt) });
  });
}

const texte = f => {
  const h = fs.readFileSync(path.join(APP, 'fiches', f), 'utf8');
  return h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
};
const jaccard = (a, b) => { let k = 0; a.forEach(x => { if (b.has(x)) k++; }); return k / Math.max(1, a.size); };

console.log('  seuil de recouvrement : ' + SEUIL);
console.log('\n  matière     fiches   0 candidat   1-9   10-24   25 et +   médiane');
const global = { z: 0, p: 0, d: 0, c: 0 };
['anatomie', 'biologie', 'chimie', 'physique'].forEach(mat => {
  const bank = parMat[mat] || [];
  const fiches = fs.readdirSync(path.join(APP, 'fiches')).filter(f => new RegExp('^' + mat + '-\\d+-').test(f)).sort();
  const compte = fiches.map(f => {
    const mf = mots(texte(f));
    let k = 0;
    bank.forEach(q => { if (jaccard(q.m, mf) >= SEUIL) k++; });
    return k;
  });
  const z = compte.filter(x => x === 0).length, p = compte.filter(x => x >= 1 && x < 10).length;
  const d = compte.filter(x => x >= 10 && x < 25).length, c = compte.filter(x => x >= 25).length;
  global.z += z; global.p += p; global.d += d; global.c += c;
  const med = compte.slice().sort((a, b) => a - b)[Math.floor(compte.length / 2)];
  console.log('  ' + mat.padEnd(11) + String(fiches.length).padStart(5) + String(z).padStart(12)
    + String(p).padStart(7) + String(d).padStart(8) + String(c).padStart(10) + String(med).padStart(10));
});
const T = global.z + global.p + global.d + global.c;
console.log('  ' + 'TOTAL'.padEnd(11) + String(T).padStart(5) + String(global.z).padStart(12)
  + String(global.p).padStart(7) + String(global.d).padStart(8) + String(global.c).padStart(10));
console.log('\n  fiches qui atteindraient 2 lots (10 questions) : ' + (global.d + global.c) + ' / ' + T);
console.log('  fiches qui atteindraient 5 lots (25 questions) : ' + global.c + ' / ' + T);
