/* Les stages se rapprochent-ils du départ à mesure que le temps passe ?
   On simule plusieurs « aujourd'hui » et on lit où tombe chaque camp. */
const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});

const JOURS=['2026-09-04','2026-10-01','2026-11-15','2027-01-20','2027-04-20','2027-07-01'];

(async()=>{
 await new Promise(r=>srv.listen(0,r));
 const url='http://localhost:'+srv.address().port+'/index.html';
 const b=await chromium.launch(); const erreurs=[];
 const lignes=[];
 for(const jour of JOURS){
   for(const faites of [0,40]){
     const ctx=await b.newContext({viewport:{width:390,height:844}});
     await ctx.addInitScript(`(()=>{const T=new Date('${jour}T10:00:00').getTime();const D=Date;
       class F extends D{constructor(...a){if(!a.length)super(T);else super(...a);} static now(){return T;}}
       window.Date=F;})();`);
     const pg=await ctx.newPage();
     pg.on('pageerror',e=>erreurs.push(jour+' : '+e));
     await pg.goto(url,{waitUntil:'load'}); await pg.waitForTimeout(500);
     const r=await pg.evaluate(n=>{
       localStorage.setItem('m4_prenom','T'); localStorage.setItem('m4_onboarded','1');
       /* on marque n séances comme faites, dans l'ordre */
       S.sdone={}; S.vues={}; S.oublis={};
       SEANCES.slice(0,n).forEach(s=>{ S.sdone[s.id]=Date.now(); s.fiches.forEach(f=>{S.vues[f]=1;S.oublis[f]={oublie:''};}); });
       S.profil={rentreeDite:false}; poserRentree(2027);
       const doc=document.getElementById('carte-corps');
       const stages=[...doc.querySelectorAll('.cr-stage')].reverse();  /* sens de la montée */
       const pos=stages.map(a=>{
         const t=(a.querySelector('.cr-nom.stage')||{}).textContent||'';
         /* le repère de fiches du monde juste en dessous du camp dans le DOM */
         let e=a, rail=null;
         while((e=e.nextElementSibling)){ const q=e.querySelector? e.querySelector('.cr-rail b'):null; if(q){rail=q.textContent;break;} }
         return t.replace(/^Stage (de la |de |d')?/,'')+'@'+(rail||'après');
       });
       const apres=[...doc.querySelectorAll('.cr-apres')].length;
       return {faites:seancesFaites().length, pos, apres, jours:joursAvantRentree()};
     }, faites);
     lignes.push({jour, faites, r});
     await ctx.close();
   }
 }
 console.log('Élève de Terminale, rentrée septembre 2027. « X@N » = stage X posé au repère N fiches.\n');
 console.log('  aujourd\'hui   séances faites   j. avant rentrée   les camps, du bas vers le haut');
 lignes.forEach(l=>console.log('  '+l.jour+'    '+String(l.r.faites).padStart(6)+'           '+
   String(l.r.jours).padStart(6)+'         '+(l.r.pos.length?l.r.pos.join('  ·  '):'—')));
 console.log('\nerreurs : '+erreurs.length); erreurs.forEach(e=>console.log('  ✗ '+e));
 await b.close(); srv.close();
})();
