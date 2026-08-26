/* Extrait le texte lisible d'une fiche Medeos : node outils/texte-fiche.js <slug> */
const fs=require('fs'), path=require('path');
const slug=process.argv[2].replace(/\.html$/,'');
const p=path.join(__dirname,'..','fiches',slug+'.html');
let h=fs.readFileSync(p,'utf8');
h=h.replace(/<style[\s\S]*?<\/style>/g,'').replace(/<script[\s\S]*?<\/script>/g,'');
h=h.replace(/<br\s*\/?>/g,'\n').replace(/<\/(p|div|li|h1|h2|h3|h4|tr)>/g,'\n');
h=h.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<')
   .replace(/&gt;/g,'>').replace(/&#39;|&rsquo;/g,"'").replace(/&quot;/g,'"')
   .replace(/&times;|&minus;/g,'');
console.log(h.split('\n').map(l=>l.replace(/\s+/g,' ').trim()).filter(l=>l).join('\n'));
