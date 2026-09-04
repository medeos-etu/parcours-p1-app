/* La série 🔥 : plus de jour pardonné, et le gel ne joue que posé la veille.
   On rejoue majStreak sur des états fabriqués et on lit ce qu'il en fait. */
const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});

(async()=>{
 await new Promise(r=>srv.listen(0,r));
 const b=await chromium.launch(); const pg=await b.newPage(); const erreurs=[];
 pg.on('pageerror',e=>erreurs.push(String(e)));
 await pg.goto('http://localhost:'+srv.address().port+'/index.html',{waitUntil:'load'}); await pg.waitForTimeout(500);

 const cas=[
  {nom:'jour consécutif',                        etat:{stDay:1, streak:5, gels:1, gelPose:null},   attendu:{streak:6, gels:1, gelPose:null}},
  {nom:'un jour sauté, sans gel',                etat:{stDay:2, streak:5, gels:1, gelPose:null},   attendu:{streak:1, gels:1, gelPose:null}},
  {nom:'un jour sauté, gel posé la veille',      etat:{stDay:2, streak:5, gels:0, gelPose:1},      attendu:{streak:6, gels:0, gelPose:null}},
  {nom:'deux jours sautés, gel posé la veille',  etat:{stDay:3, streak:5, gels:0, gelPose:2},      attendu:{streak:1, gels:0, gelPose:null}},
  {nom:'gel posé sur aujourd\'hui, venu quand même', etat:{stDay:1, streak:5, gels:0, gelPose:0}, attendu:{streak:6, gels:1, gelPose:null}},
  {nom:'un jour sauté, gel encore en réserve (pas posé)', etat:{stDay:2, streak:5, gels:2, gelPose:null}, attendu:{streak:1, gels:2, gelPose:null}}
 ];
 for(const c of cas){
   const r=await pg.evaluate(c=>{
     const j=n=>_jourMoins(n);
     S.stDay=j(c.etat.stDay); S.streak=c.etat.streak; S.streakMax=c.etat.streak; S.gels=c.etat.gels; S.gel14=1;
     S.gelPose=(c.etat.gelPose===null)? null : j(c.etat.gelPose);
     S.joursActifs=[];
     majStreak();
     return {streak:S.streak, gels:S.gels, gelPose:S.gelPose||null};
   }, c);
   const ok=JSON.stringify(r)===JSON.stringify(c.attendu);
   console.log((ok?'  ✓ ':'  ✗ ')+c.nom+'  →  série '+r.streak+', gels '+r.gels+', posé '+(r.gelPose||'—'));
   if(!ok) erreurs.push(c.nom+' : attendu '+JSON.stringify(c.attendu)+', vu '+JSON.stringify(r));
 }

 /* poser, puis retirer */
 const p=await pg.evaluate(()=>{
   S.gels=1; S.gelPose=null; saveS();
   poserGel(); const a={gels:S.gels, pose:S.gelPose===_jourMoins(-1)};
   poserGel(); const b={gels:S.gels};                     /* une deuxième fois : rien ne bouge */
   retirerGel(); const c={gels:S.gels, pose:!!S.gelPose};
   S.gels=0; poserGel(); const d={gels:S.gels, pose:!!S.gelPose};   /* sans gel : rien */
   return {a,b,c,d};
 });
 const okP = p.a.gels===0 && p.a.pose && p.b.gels===0 && p.c.gels===1 && !p.c.pose && p.d.gels===0 && !p.d.pose;
 console.log((okP?'  ✓ ':'  ✗ ')+'poser un gel sur demain, le reposer, le retirer, sans gel  →  '+JSON.stringify(p));
 if(!okP) erreurs.push('poser/retirer : '+JSON.stringify(p));

 /* la fenêtre de la série montre le bouton, et plus aucun « pardonné » */
 const f=await pg.evaluate(()=>{
   S.gels=1; S.gelPose=null; S.streak=3; saveS();
   toggleFlamme(); const html=document.getElementById('fp-regle').innerHTML; const pop=document.getElementById('flamme-pop');
   const bouton=!!document.querySelector('.fp-gel'); const ouverte=pop && !pop.hidden;
   document.querySelector('.fp-gel').click();
   const apres=document.querySelector('.fp-gel').textContent;
   return {ouverte, bouton, pardon:/pardonn/i.test(html), apres};
 });
 console.log((f.ouverte&&f.bouton&&!f.pardon&&/posé sur demain/i.test(f.apres)?'  ✓ ':'  ✗ ')+'fenêtre : ouverte '+f.ouverte+', bouton '+f.bouton+', « pardonné » '+f.pardon+', après clic « '+f.apres.trim()+' »');
 if(!(f.ouverte&&f.bouton&&!f.pardon&&/posé sur demain/i.test(f.apres))) erreurs.push('fenêtre de la série : '+JSON.stringify(f));

 console.log('\nerreurs : '+erreurs.length); erreurs.forEach(e=>console.log('  ✗ '+e));
 await b.close(); srv.close(); process.exit(erreurs.length?1:0);
})();
