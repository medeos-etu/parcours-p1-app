/* Captures : la visite de la carte (4 étapes), les mondes 2-3-4, la flamme à 0. */
const http=require('http'),fs=require('fs'),path=require('path');const{chromium}=require('playwright');
const R='/Users/lucascrepin/dev/parcours-p1-app';
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',json:'application/json'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
 rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});
(async()=>{await new Promise(r=>srv.listen(0,r));
 const b=await chromium.launch();const pg=await(await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2})).newPage();
 await pg.goto('http://localhost:'+srv.address().port+'/index.html',{waitUntil:'load'});await pg.waitForTimeout(600);
 await pg.evaluate(()=>{try{tutoEnd();}catch(e){} localStorage.setItem('m4_prenom','T');localStorage.setItem('m4_onboarded','1');
   S.sdone={};S.vues={};S.collection={};S.profil={rentreeDite:false};S.tuto={biblio:1,home:1,arene:1};saveS();
   go('carte');poserRentree(2027);});
 for(let i=1;i<=4;i++){ await pg.waitForTimeout(i===1?1300:700); await pg.screenshot({path:'/tmp/app-captures/8'+i+'-visite-'+i+'.png'});
   if(i<4) await pg.evaluate(()=>tutoNext()); }
 await pg.evaluate(()=>{try{tutoEnd();}catch(e){}});
 await pg.evaluate(()=>{const e=document.getElementById('monde-3');if(e)e.scrollIntoView({block:'center'});});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/85-monde-3.png'});
 await pg.evaluate(()=>{const e=document.getElementById('monde-4');if(e)e.scrollIntoView({block:'center'});});
 await pg.waitForTimeout(400);await pg.screenshot({path:'/tmp/app-captures/86-monde-4.png'});
 await pg.evaluate(()=>{go('home');});await pg.waitForTimeout(700);
 await pg.screenshot({path:'/tmp/app-captures/87-home-flamme.png',clip:{x:0,y:0,width:390,height:160}});
 await b.close();srv.close();console.log('captures ok');})();
