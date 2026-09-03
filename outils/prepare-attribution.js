#!/usr/bin/env node
/* PRÉPARE L'ATTRIBUTION DES QCM AUX FICHES, chapitre par chapitre.
   Pour chaque chapitre de cours, on rassemble dans un seul fichier :
   — la liste de ses fiches, avec leur titre ;
   — toutes les questions qui en sont tirées (sourceHtml dit de quel chapitre elles viennent).
   L'agent n'aura plus qu'à dire, pour chaque question, quelle fiche permet d'y répondre.
   On ne recopie pas les questions dans sa réponse : il rend une table d'attribution,
   ce qui garde son travail court et vérifiable. */
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const SITE = '/Users/lucascrepin/dev/medeos-site/data/qcm';
const DEST = '/tmp/attrib';
const man = require(path.join(APP, 'outils', 'manifeste-fiches.json'));

/* les questions, rangées par matière et chapitre */
const parCh = {};
(function walk(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = path.join(d, e.name);
    if (e.isDirectory()) return walk(f);
    if (!/\.json$/.test(e.name)) return;
    let j; try { j = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (x) { return; }
    const L = (Array.isArray(j.quizzes) ? j.quizzes : (Array.isArray(j.questions) ? j.questions : []))
      .filter(q => q && q.question && Array.isArray(q.items) && q.items.length);
    if (!L.length) return;
    const mat = String(j.subject || '').toLowerCase();
    const m = String(j.sourceHtml || '').match(/^Chapitre_(\d+)/);
    if (!m) return;
    const k = mat + '|' + (+m[1]);
    (parCh[k] = parCh[k] || []).push(...L.map(q => ({
      src: path.relative(SITE, f), lot: j.lotType || '', q: q.question,
      items: q.items.map(i => ({ t: i.text, v: !!i.isCorrect, e: i.explanation || '' })),
    })));
  });
})(SITE);

fs.rmSync(DEST, { recursive: true, force: true });
fs.mkdirSync(DEST, { recursive: true });

let lots = 0, qTot = 0;
console.log('  matière     ch   fiches   questions');
['anatomie', 'biologie', 'chimie', 'physique'].forEach(mat => {
  const chs = [...new Set(man[mat].map(x => x.chapitre))].sort((a, b) => a - b);
  chs.forEach(ch => {
    const fiches = man[mat].filter(x => x.chapitre === ch)
      .map(x => ({ fiche: x.fiche, titre: (x.titre || '').replace(' — Fiche Medeos', '') }));
    const qs = parCh[mat + '|' + ch] || [];
    if (!qs.length) { console.log('  ' + mat.padEnd(11) + String(ch).padStart(3) + String(fiches.length).padStart(8) + '          0   (rien à attribuer)'); return; }
    /* on retire les questions rigoureusement identiques : les lots se recopient entre eux */
    const vu = new Set(), uniq = [];
    qs.forEach(q => { const c = q.q.trim().toLowerCase(); if (vu.has(c)) return; vu.add(c); uniq.push(q); });
    const nom = mat + '-ch' + String(ch).padStart(2, '0') + '.json';
    fs.writeFileSync(path.join(DEST, nom), JSON.stringify({ matiere: mat, chapitre: ch, fiches, questions: uniq }, null, 1));
    lots++; qTot += uniq.length;
    console.log('  ' + mat.padEnd(11) + String(ch).padStart(3) + String(fiches.length).padStart(8) + String(uniq.length).padStart(11) + (uniq.length < qs.length ? '   (' + (qs.length - uniq.length) + ' doublons retirés)' : ''));
  });
});
console.log('\n  ' + lots + ' chapitres préparés · ' + qTot + ' questions distinctes → ' + DEST);
