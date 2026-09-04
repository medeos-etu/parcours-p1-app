/* Les camps de stage s'adaptent-ils au jour où l'on arrive ET à l'avancée de l'élève ?
   On simule plusieurs « aujourd'hui » (dont des jours PENDANT le stage de la Toussaint),
   pour un élève neuf et pour des élèves qui ont déjà avancé. */
const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});

const JOURS=['2026-09-04','2026-10-01','2026-10-19','2026-10-25','2026-10-31','2026-11-01','2027-01-20','2027-07-01'];
const AVANCEES=[0,20,60];

(async()=>{
 await new Promise(r=>srv.listen(0,r));
 const url='http://localhost:'+srv.address().port+'/index.html';
 const b=await chromium.launch(); const erreurs=[]; const lignes=[];
 for(const jour of JOURS){
   for(const faites of AVANCEES){
     const ctx=await b.newContext({viewport:{width:390,height:844}});
     await ctx.addInitScript(`(()=>{const T=new Date('${jour}T10:00:00').getTime();const D=Date;
       class F extends D{constructor(...a){if(!a.length)super(T);else super(...a);} static now(){return T;}}
       window.Date=F;})();`);
     const pg=await ctx.newPage();
     pg.on('pageerror',e=>erreurs.push(jour+' : '+e));
     await pg.goto(url,{waitUntil:'load'}); await pg.waitForTimeout(500);
     const r=await pg.evaluate(n=>{
       localStorage.setItem('m4_prenom','T'); localStorage.setItem('m4_onboarded','1');
       S.sdone={}; S.vues={}; S.oublis={};
       SEANCES.slice(0,n).forEach(s=>{ S.sdone[s.id]=Date.now(); s.fiches.forEach(f=>{S.vues[f]=1;S.oublis[f]={oublie:''};}); });
       S.profil={rentreeDite:false}; poserRentree(2027);
       const doc=document.getElementById('carte-corps');
       /* sens de la montée = DOM à l'envers ; le camp est écrit juste AVANT le carré de son monde */
       const stages=[...doc.querySelectorAll('.cr-stage')].reverse();
       const pos=stages.map(a=>{
         const titre=((a.querySelector('.cr-nom.stage')||{}).textContent||'').replace(/^Stage (de la |de |d')?/,'');
         const quand=((a.querySelector('.cr-band.stage span')||{}).textContent||'').split('·').pop().trim();
         let e=a, monde='après la route';
         while((e=e.nextElementSibling)){ if(e.classList.contains('cr-monde')){ monde='monde '+e.id.replace('monde-',''); break; } }
         return titre+' → '+monde+' ('+quand+')';
       });
       const ici=mondeCourant(); 
       return {faites:seancesFaites().length, ici:ici?ici.num:null, pos};
     }, faites);
     lignes.push({jour, faites, r});
     await ctx.close();
   }
 }
 console.log('Élève de Terminale, rentrée septembre 2027. Stage de la Toussaint : du 19 au 31 octobre 2026.\n');
 lignes.forEach(l=>{
   console.log('  '+l.jour+'  ·  '+String(l.r.faites).padStart(2)+' séances faites, il est au monde '+l.r.ici);
   l.r.pos.forEach(p=>console.log('      '+p));
 });
 console.log('\nerreurs : '+erreurs.length); erreurs.forEach(e=>console.log('  ✗ '+e));
 await b.close(); srv.close();
})();
