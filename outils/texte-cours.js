#!/usr/bin/env node
/* EXTRAIT LE TEXTE PROPRE D'UN CHAPITRE DE COURS.
   Les fichiers de cours pèsent 200 à 400 Ko, dont l'essentiel n'est pas du contenu :
   feuilles de style, script de pagination, visionneuse d'images, filigranes, et les
   blocs `generation-prompt` masqués qui servent à fabriquer les illustrations. Un agent
   qui lit ça consomme cinq fois ce qu'il faut pour la même matière.
   Ce script ne garde que ce qui compte : les titres, le texte, les tableaux, et le nom
   des figures avec leur légende.
   usage : node outils/texte-cours.js <fichier.html> [sortie.md] */
const fs = require('fs');

function texte(html) {
  let h = html;
  /* tout ce qui n'est pas du cours */
  h = h.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  h = h.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  h = h.replace(/<div class="generation-prompt"[\s\S]*?<\/div>/gi, ' ');
  h = h.replace(/<!--[\s\S]*?-->/g, ' ');
  h = h.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  h = h.replace(/<svg[\s\S]*?<\/svg>/gi, ' ');
  /* les figures deviennent une ligne lisible */
  h = h.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, (m, src) => '\n[FIGURE ' + src.split('/').pop() + ']\n');
  /* la structure */
  h = h.replace(/<h([1-6])[^>]*>/gi, (m, n) => '\n\n' + '#'.repeat(+n) + ' ');
  h = h.replace(/<\/h[1-6]>/gi, '\n');
  h = h.replace(/<li[^>]*>/gi, '\n- ');
  h = h.replace(/<\/(p|div|section|article|figcaption|tr)>/gi, '\n');
  h = h.replace(/<t[dh][^>]*>/gi, ' | ');
  h = h.replace(/<br\s*\/?>/gi, '\n');
  h = h.replace(/<\/?(b|strong)>/gi, '**');
  h = h.replace(/<[^>]+>/g, ' ');
  /* les entités */
  const ent = { '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&rsquo;': '’', '&eacute;': 'é', '&egrave;': 'è', '&agrave;': 'à', '&ccedil;': 'ç', '&ocirc;': 'ô', '&icirc;': 'î', '&ecirc;': 'ê', '&hellip;': '…', '&times;': '×', '&minus;': '−', '&deg;': '°' };
  h = h.replace(/&[a-z#0-9]+;/gi, m => ent[m] !== undefined ? ent[m] : m);
  /* le blanc */
  h = h.split('\n').map(l => l.replace(/[ \t]+/g, ' ').trim()).join('\n');
  h = h.replace(/\n{3,}/g, '\n\n');
  h = h.replace(/(\*\*\s*\*\*)/g, '');
  return h.trim();
}

const src = process.argv[2];
if (!src) { console.error('usage : node outils/texte-cours.js <fichier.html> [sortie]'); process.exit(1); }
const t = texte(fs.readFileSync(src, 'utf8'));
const out = process.argv[3];
if (out) { fs.writeFileSync(out, t); console.log(out + ' — ' + Math.round(t.length / 1024) + ' Ko (source ' + Math.round(fs.statSync(src).size / 1024) + ' Ko)'); }
else console.log(t);
