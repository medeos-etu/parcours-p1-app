#!/usr/bin/env node
/* LE MANIFESTE : chaque fiche, son chapitre, son titre.
   Reconstruit depuis le renommage de la remise à plat, que git a conservé : l'ancien
   numéro disait le chapitre (chaque chapitre avait son bloc réservé), le nouveau dit
   l'ordre. On croise les deux. */
const fs = require('fs'), path = require('path');
const { execSync } = require('child_process');
const APP = path.join(__dirname, '..');
const SCR = '/Users/lucascrepin/.claude/projects/-Users-lucascrepin-Desktop-medeos-site/d0b5e632-e219-412c-b65d-feff9a5d0885/workflows/scripts';

/* 1. le renommage ancien → nouveau */
const brut = execSync('git show 7eb30da --name-status --find-renames --format=', { cwd: APP, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const ancien = {};
brut.split('\n').forEach(l => {
  const m = l.match(/^R\d*\t+fiches\/(\S+)\t+fiches\/(\S+)$/);
  if (m) ancien[m[2]] = m[1];
});
/* les chemins longs sont tronqués par git : on complète par le slug, qui ne change pas */
const parSlug = {};
Object.entries(ancien).forEach(([n, a]) => { parSlug[n.replace(/^[a-z]+-\d+-/, '')] = a; });

/* 2. les blocs de chapitres */
function blocs(mat) {
  const f = path.join(SCR, mat + '-complete.js');
  if (!fs.existsSync(f)) return [];
  return [...fs.readFileSync(f, 'utf8').matchAll(/\{ n: (\d+), depart: (\d+), titre: '([^']*)'/g)]
    .map(m => ({ ch: +m[1], de: +m[2], titre: m[3].replace(/^Chapitre \d+ — /, '') }))
    .sort((a, b) => a.de - b.de);
}

const out = {};
let sansChapitre = 0;
['anatomie', 'biologie', 'chimie', 'physique'].forEach(mat => {
  const b = blocs(mat);
  const L = fs.readdirSync(path.join(APP, 'fiches')).filter(f => new RegExp('^' + mat + '-\\d+-').test(f)).sort();
  out[mat] = L.map(f => {
    const slug = f.replace(/^[a-z]+-\d+-/, '');
    const a = ancien[f] || parSlug[slug] || null;
    let ch = null, titre = null;
    if (a) {
      const na = +a.match(/-(\d+)-/)[1];
      if (na < 900) b.forEach(x => { if (na >= x.de) { ch = x.ch; titre = x.titre; } });
      /* Les premiers chapitres d'anatomie ont été écrits AVANT que j'introduise les blocs
         réservés : leurs numéros se suivaient simplement. On rétablit leurs bornes à la
         main — elles sont connues, chapitre par chapitre. */
      if (ch === null && mat === 'anatomie' && na <= 80) {
        const BORNES = [[1, 10, 'Anatomie générale'], [11, 18, 'Tissus fondamentaux'],
                        [19, 33, 'Le rachis'], [34, 48, 'Crâne et face'],
                        [49, 80, 'Thorax, bassin et myologie du tronc']];
        BORNES.forEach(([d, f2, t], i) => { if (na >= d && na <= f2) { ch = i + 1; titre = t; } });
      }
      /* les six fiches garées en 900 : on sait d'où elles viennent */
      if (na >= 900 && mat === 'physique') {
        ch = (na === 900) ? 1 : 3;
        titre = (na === 900) ? 'Eau, solutions, concentrations' : 'Équilibres ioniques, Donnan';
      }
    }
    if (ch === null) sansChapitre++;
    return { fiche: f, slug: slug.replace('.html', ''), chapitre: ch, chapitreTitre: titre,
             titre: (fs.readFileSync(path.join(APP, 'fiches', f), 'utf8').match(/<title>(.*?)<\/title>/) || [])[1] || '' };
  });
});
fs.writeFileSync(path.join(APP, 'outils', 'manifeste-fiches.json'), JSON.stringify(out, null, 1));

console.log('  matière     fiches   chapitres identifiés');
Object.keys(out).forEach(m => {
  const chs = [...new Set(out[m].map(x => x.chapitre).filter(x => x !== null))].sort((a, b) => a - b);
  const nul = out[m].filter(x => x.chapitre === null).length;
  console.log('  ' + m.padEnd(11) + String(out[m].length).padStart(5) + '   ' + (chs.length ? chs.join(', ') : '—') + (nul ? '   (' + nul + ' sans chapitre)' : ''));
});
console.log('\n  fiches sans chapitre : ' + sansChapitre + ' / ' + Object.values(out).reduce((s, a) => s + a.length, 0));
console.log('  → outils/manifeste-fiches.json');
