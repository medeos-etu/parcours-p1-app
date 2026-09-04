/* Captures des cartes de stage : la Toussaint (Terminale), la pré-rentrée, et un stage vu par un élève déjà en P1. */
const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});
(async()=>{await new Promise(r=>srv.listen(0,r));
 const b=await chromium.launch();const pg=await(await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2})).newPage();
 await pg.goto('http://localhost:'+srv.address().port+'/index.html',{waitUntil:'load'});await pg.waitForTimeout(600);
 const prep=async(choix)=>{ await pg.evaluate(c=>{try{tutoEnd();}catch(e){} localStorage.setItem('m4_prenom','T');localStorage.setItem('m4_onboarded','1');
   S.sdone={};S.vues={};S.collection={};S.profil={rentreeDite:false};S.tuto={biblio:1,home:1,arene:1,carte:1};saveS(); go('carte');poserRentree(c);},choix); await pg.waitForTimeout(700); };
 const shot=async(idx,nom)=>{ const l=pg.locator('.cr-stage'); const n=await l.count(); const el=l.nth(idx<0? n+idx : idx);
   await el.scrollIntoViewIfNeeded(); await pg.waitForTimeout(300); await el.screenshot({path:'/tmp/app-captures/'+nom}); };
 await prep(2027); await shot(-1,'92-stage-toussaint.png'); await shot(0,'93-stage-prerentree.png');
 await prep('deja'); await shot(-1,'94-stage-p1.png');
 await b.close();srv.close();console.log('captures ok');})();
