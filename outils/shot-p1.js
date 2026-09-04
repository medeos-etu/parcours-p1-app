const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});
(async()=>{await new Promise(r=>srv.listen(0,r));
 const b=await chromium.launch();const pg=await(await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2})).newPage();
 await pg.goto('http://localhost:'+srv.address().port+'/index.html',{waitUntil:'load'});await pg.waitForTimeout(600);
 await pg.evaluate(()=>{localStorage.setItem('m4_prenom','T');localStorage.setItem('m4_onboarded','1');
   S.sdone={};S.vues={};S.collection={};S.recomp={};S.profil={rentreeDite:false};S.tuto={biblio:1,home:1,arene:1};saveS();
   go('carte');poserRentree('deja');try{tutoEnd();}catch(e){}});
 await pg.waitForTimeout(900);await pg.evaluate(()=>{try{tutoEnd();}catch(e){} const t=document.getElementById('tuto'); if(t) t.hidden=true;});
 // sommet
 await pg.evaluate(()=>{const e=document.getElementById('cr-sommet');if(e)e.scrollIntoView({block:'start'});window.scrollBy(0,-70);});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/70-p1-sommet.png'});
 // premier camp de stage
 await pg.evaluate(()=>{const e=document.querySelector('.cr-stage');if(e)e.scrollIntoView({block:'center'});});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/71-p1-stage.png'});
 // mondes 2 et 3 : la cadence des récompenses
 await pg.evaluate(()=>{const e=document.getElementById('monde-3');if(e)e.scrollIntoView({block:'center'});});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/72-monde-3.png'});
 await pg.evaluate(()=>{const e=document.getElementById('monde-2');if(e)e.scrollIntoView({block:'center'});});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/73-monde-2.png'});
 await b.close();srv.close();console.log('ok');})();
