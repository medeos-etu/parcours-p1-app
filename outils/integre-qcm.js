/* Intègre les lots de QCM produits dans la banque de l'app.
   node outils/integre-qcm.js [--essai]   (--essai : contrôle seulement, n'écrit rien) */
const fs=require('fs'), path=require('path');
const ESSAI = process.argv.includes('--essai');
const DIR='/tmp/qcm/sortie';
const P=path.join(__dirname,'..','index.html');
const js=s=>JSON.stringify(s);

/* ── 1. lecture des lots ── */
const fichiers=fs.readdirSync(DIR).filter(f=>/^lot-\d+\.json$/.test(f)).sort();
let Q=[];
fichiers.forEach(f=>{ const l=JSON.parse(fs.readFileSync(path.join(DIR,f),'utf8'));
  l.forEach(q=>{ q._lot=f; }); Q=Q.concat(l); });
console.log('lots lus : '+fichiers.length+' · questions : '+Q.length);

/* ── 2. contrôles ── */
const h=fs.readFileSync(P,'utf8');
let i=h.indexOf('const ABANK=['), j=h.indexOf('\n];',i);
const BANK=eval(h.slice(i+'const ABANK='.length, j+2));
const dejaQ=new Set(BANK.map(q=>q.q.trim().toLowerCase()));
const dejaId=new Set(BANK.map(q=>q.id));
const titres={}; BANK.forEach(q=>{ titres[q.f]=q.n; });

const pb=[]; const vus=new Set();
Q.forEach((q,n)=>{
  const où=q._lot+'#'+n;
  if(!q.f||!q.n||!q.q||!Array.isArray(q.items)) return pb.push(où+' : champs manquants');
  if(q.items.length!==5) pb.push(où+' : '+q.items.length+' propositions');
  const v=q.items.filter(t=>t.vrai).length;
  if(v<1||v>5) pb.push(où+' : '+v+' vraies');
  q.items.forEach((t,k)=>{
    if(!t.texte||t.texte.length<10) pb.push(où+'.'+k+' : proposition vide');
    if(!t.expl||t.expl.length<25) pb.push(où+'.'+k+' : explication trop courte');
  });
  const brut=JSON.stringify(q);
  if(/la fiche|le cours|le document|le paragraphe|proposition [A-E]\b/i.test(brut)) pb.push(où+' : renvoi interdit');
  if(/toutes les propositions|aucune des réponses/i.test(brut)) pb.push(où+' : formule interdite');
  const cle=q.q.trim().toLowerCase();
  if(vus.has(cle)) pb.push(où+' : énoncé dupliqué dans les lots');
  if(dejaQ.has(cle)) pb.push(où+' : énoncé déjà dans la banque');
  vus.add(cle);
  if(!fs.existsSync(path.join(__dirname,'..','fiches',q.f+'.html'))) pb.push(où+' : fiche inconnue '+q.f);
});
console.log('problèmes : '+pb.length);
pb.slice(0,15).forEach(x=>console.log('   '+x));
if(pb.length && !ESSAI){ console.log('\nRIEN N’A ÉTÉ ÉCRIT — corrige d’abord.'); process.exit(1); }

/* ── 3. distributions AVANT mélange ── */
const dist=Q.reduce((a,q)=>{ const v=q.items.filter(t=>t.vrai).length; a[v]=(a[v]||0)+1; return a; },{});
const moy=Q.reduce((a,q)=>a+q.items.filter(t=>t.vrai).length,0)/Q.length;
console.log('\nrépartition des vraies : '+[1,2,3,4,5].map(k=>k+'v '+Math.round(100*(dist[k]||0)/Q.length)+'%').join(' · '));
console.log('moyenne : '+moy.toFixed(2)+' (cible 2,50 — au-delà, « cocher tout » devient payant)');
const gainTricheur = 2*moy - 2*(5-moy);
console.log('cocher les 5 cases rapporterait : '+(gainTricheur>0?'+':'')+gainTricheur.toFixed(1)+' 🏆 par question');

/* ── 4. mélange des propositions, identifiants, écriture ── */
function melange(arr, graine){
  let s=graine; const a=arr.slice();
  const r=()=>{ s=(s*1103515245+12345)%2147483648; return s/2147483648; };
  for(let k=a.length-1;k>0;k--){ const m=Math.floor(r()*(k+1)); [a[k],a[m]]=[a[m],a[k]]; }
  return a;
}
const L='ABCDE', compte={};
BANK.forEach(q=>{ const m=/^(bio|chi)3-(.+)-(\d+)$/.exec(q.id); if(m) compte[m[2]]=Math.max(compte[m[2]]||0, +m[3]); });
BANK.forEach(q=>{ const slug=q.f.replace(/^(biologie|chimie)-/,''); if(!compte[slug]) compte[slug]=0; });
const lignes=Q.map((q,idx)=>{
  const mat = q.f.startsWith('biologie-') ? 'Biologie' : 'Chimie';
  const pre = mat==='Biologie' ? 'bio3-' : 'chi3-';
  const slug=q.f.replace(/^(biologie|chimie)-/,'');
  compte[slug]=(compte[slug]||0)+1;
  let id=pre+slug+'-'+compte[slug];
  while(dejaId.has(id)){ compte[slug]++; id=pre+slug+'-'+compte[slug]; }
  dejaId.add(id);
  const items=melange(q.items, 7919*(idx+1)+13);
  const its=items.map((t,k)=>'['+js(L[k])+', '+js(t.texte)+', '+(t.vrai?1:0)+', '+js(t.expl)+']').join(',');
  return '{id:'+js(id)+', mat:'+js(mat)+', n:'+js(q.n)+', f:'+js(q.f)+', D:'+(q.D||1000)+', M:12, q:'+js(q.q)+',\n  it:['+its+']}';
});
if(ESSAI){ console.log('\n(essai : rien écrit)'); process.exit(0); }
const bloc=',\n/* ── Biologie et chimie, lot complet du 26/08/2026 : '+Q.length+' questions écrites depuis\n'
  +'   les fiches, relues une à une, puis rééquilibrées. Propositions mélangées à l\'intégration. ── */\n'
  + lignes.join(',\n') + '\n';
fs.writeFileSync(P, h.slice(0,j) + bloc + h.slice(j));
console.log('\nINTÉGRÉ : '+Q.length+' questions.');
