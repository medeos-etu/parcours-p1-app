/* TEST DE FUMÉE — l'app s'ouvre-t-elle, et les écrans neufs se rendent-ils sans erreur ?
   On sert le dossier en local, on ouvre Chromium en format téléphone, on traverse :
   accueil → Parcours → route (choix de l'année) → chemin → profil (radar), en capturant
   chaque écran et TOUTE erreur de console. Une erreur JS = échec.
   node outils/verifie-app.js   → captures dans /tmp/app-captures/ */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const RACINE = path.join(__dirname, '..');
const OUT = '/tmp/app-captures'; fs.mkdirSync(OUT, { recursive: true });
const MIME = { html: 'text/html', js: 'text/javascript', css: 'text/css', png: 'image/png', jpg: 'image/jpeg', svg: 'image/svg+xml', json: 'application/json', webmanifest: 'application/manifest+json' };

const srv = http.createServer((rq, rs) => {
  let p = decodeURIComponent(rq.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(RACINE, p);
  if (!f.startsWith(RACINE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rs.writeHead(404); return rs.end(); }
  rs.writeHead(200, { 'content-type': MIME[path.extname(f).slice(1)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(rs);
});

(async () => {
  await new Promise(r => srv.listen(0, r));
  const port = srv.address().port;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  const erreurs = [];
  page.on('pageerror', e => erreurs.push('pageerror : ' + e.message));
  page.on('console', m => { if (m.type() === 'error') erreurs.push('console : ' + m.text()); });
  page.on('requestfailed', r => { if (!/sw\.js|manifest/.test(r.url())) erreurs.push('requête : ' + r.url().replace(/^.*\/\/[^/]+/, '')); });
  page.on('response', r => { if (r.status() === 404 && !/sw\.js|manifest|favicon/.test(r.url())) erreurs.push('404 : ' + r.url().replace(/^.*\/\/[^/]+/, '')); });

  const cap = async (nom) => { await page.waitForTimeout(450); await page.screenshot({ path: path.join(OUT, nom + '.png') }); console.log('  📸 ' + nom); };
  const ev = (js) => page.evaluate(js);

  await page.goto('http://localhost:' + port + '/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await cap('01-arrivee');

  /* on force un profil minimal, comme un élève qui a créé son compte, sans passer par l'UI */
  await ev(`(()=>{ try{ localStorage.setItem('m4_prenom','Test'); localStorage.setItem('m4_onboarded','1'); }catch(e){} })()`);
  await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(800);

  const faits = await ev(`(()=>({
    seances: typeof SEANCES!=='undefined' ? SEANCES.length : -1,
    titres: typeof TITRES_FICHES!=='undefined' ? Object.keys(TITRES_FICHES).length : -1,
    banque: typeof ABANK!=='undefined' ? ABANK.length : -1,
    jalons: typeof JALONS!=='undefined' ? JALONS.map(j=>j.n).join(' ') : 'absent',
    illu: typeof illuRoute==='function' ? illuRoute().length : -1,
    premiere: typeof seanceCourante==='function' && seanceCourante() ? seanceCourante().titre : null,
    qcmPremiere: (typeof seanceCourante==='function' && seanceCourante()) ? seanceCourante().fiches.map(f=>qsDeFicheToutes(f).length).join('+') : null,
    tuto: typeof TUTOS!=='undefined' ? TUTOS.home.length : -1
  }))()`);
  console.log('  faits : ' + JSON.stringify(faits));

  /* un compte local, comme après « Créer mon compte » : sans lui, le Parcours est derrière un mur */
  await ev(`(()=>{ try{ if(!S.ar) initAr(); S.ar.compte={id:'test',mail:'test@medeos.fr',cree:Date.now()}; S.tuto={biblio:1}; saveS(); }catch(e){ console.error('compte : '+e.message); } })()`);
  await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(800);
  await ev(`go('home')`); await page.waitForTimeout(600);
  /* le tutoriel du Parcours, à la page de l'illustration de la route */
  await ev(`(()=>{ try{ if(typeof TU!=='undefined' && TU){ TU=null; } document.getElementById('tuto').hidden=true; S.tuto=S.tuto||{}; delete S.tuto.home; startTuto('home'); TU.i=1; tutoShow(); }catch(e){ console.error('tuto : '+e.message); } })()`);
  await cap('02-home-tuto');
  await ev(`(()=>{ try{ if(typeof TU!=='undefined' && TU){ S.tuto=S.tuto||{}; S.tuto[TU.k]=1; saveS(); TU=null; document.getElementById('tuto').hidden=true; } }catch(e){} })()`);
  await ev(`try{ renderParcours(); }catch(e){}`);
  await cap('03-home-seance');

  await ev(`try{ ouvrirCarte(); }catch(e){}`); await cap('04-carte-question');
  const an = new Date().getFullYear() + 1;
  await ev(`try{ poserRentree(${an}); }catch(e){}`); await cap('05-carte-route');
  /* la route d'un élève de Première : deux ans devant lui */
  await ev(`try{ poserRentree(${an + 1}); }catch(e){}`); await cap('06-carte-route-2ans');
  await ev(`try{ poserRentree(${an}); }catch(e){}`);

  await ev(`try{ renderChemin(); go('chemin'); }catch(e){}`); await cap('07-chemin');
  await ev(`try{ go('profil'); if(typeof renderProgression==='function') renderProgression(); }catch(e){}`); await cap('08-profil-radar');

  /* simuler 7 séances faites : jalon « Une semaine », ligne de jalon, radar, route */
  await ev(`(()=>{ try{ S.sdone=S.sdone||{}; SEANCES.slice(0,7).forEach(s=>{ S.sdone[s.id]=Date.now(); }); saveS(); renderParcours(); }catch(e){} })()`);
  await ev(`go('home')`); await cap('09-home-apres-7');
  await ev(`try{ ouvrirCarte(); }catch(e){}`); await cap('10-carte-apres-7');
  await ev(`try{ go('arene'); if(typeof setLieu==='function') setLieu('salles'); }catch(e){}`); await cap('11-salles');

  /* le bilan de fin de séance, avec un jalon franchi (la 7e) */
  await ev(`(()=>{ try{ S.sdone=S.sdone||{}; delete S.sdone[SEANCES[6].id]; saveS(); SR={s:SEANCES[6],etape:99,credited:false}; seanceFin(); }catch(e){ console.error('seanceFin : '+e.message); } })()`);
  await cap('12-bilan-jalon');

  await browser.close(); srv.close();
  console.log('\n  erreurs : ' + erreurs.length);
  erreurs.slice(0, 15).forEach(e => console.log('    ✗ ' + e));
  process.exit(erreurs.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
