/* TEST DU CORRECTIF DU 16/09 — « la fiche d'entrée ouvre sa séance ».
   Mesuré ce jour-là : 85 des 92 passages par la porte portent « anatomie-001-position-reference »,
   qui est la PREMIÈRE FICHE de la séance p1. Avant ce correctif, l'élève venu d'Instagram lisait
   cette fiche HORS séance — sans « J'ai lu → », sans rien derrière — et 22 comptes sur 39 n'ont
   jamais terminé une séance.

   Ce banc vérifie les quatre cas, dont les trois de NON-RÉGRESSION :
     1. fiche d'entrée + aucune séance en cours          → la séance p1 démarre
     2. séance déjà en cours sur la fiche attendue        → on la REPREND à son étape (13/09)
     3. fiche qui n'ouvre aucune séance (2e fiche, métier)→ lecture simple, comme avant
     4. séance du jour déjà faite                         → lecture simple, la règle « une par jour » tient

   node outils/verifie-fiche-entree.js
*/
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const RACINE = path.join(__dirname, '..');
const MIME = { html: 'text/html', js: 'text/javascript', css: 'text/css', png: 'image/png', jpg: 'image/jpeg', svg: 'image/svg+xml', json: 'application/json', webmanifest: 'application/manifest+json' };

const srv = http.createServer((rq, rs) => {
  let p = decodeURIComponent(rq.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(RACINE, p);
  if (!f.startsWith(RACINE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rs.writeHead(404); return rs.end(); }
  rs.writeHead(200, { 'content-type': MIME[path.extname(f).slice(1)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(rs);
});

const ECHECS = [];
function verifier(nom, condition, vu) {
  if (condition) console.log('  ✓ ' + nom);
  else { console.log('  ✗ ' + nom + '  — vu : ' + JSON.stringify(vu)); ECHECS.push(nom); }
}

(async () => {
  await new Promise(r => srv.listen(0, r));
  const port = srv.address().port;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  // ⛔ AVANT toute navigation : le banc ne doit JAMAIS écrire en production.
  // ARRIVEE_API pointe sur medeos-sante.fr même en local ; le CORS bloque la réponse mais
  // la requête atteint le serveur, et chaque passage faussait les arrivées et l'entonnoir.
  await ctx.addInitScript(() => { window.__BANC = 1; });
  const page = await ctx.newPage();
  const erreursJs = [];
  page.on('pageerror', e => erreursJs.push(e.message));
  const sorties = [];
  page.on('request', r => { if (/medeos-sante\.fr/.test(r.url())) sorties.push(r.url()); });
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof reprendreOuLire === 'function' && typeof SEANCES !== 'undefined', { timeout: 20000 });

  // le nom de la fiche d'entrée n'est pas écrit en dur : on le lit dans le Parcours lui-même
  const p1 = await page.evaluate(() => ({ id: SEANCES[0].id, f0: SEANCES[0].fiches[0], f1: SEANCES[0].fiches[1] || null }));
  console.log(`\nLa séance d'entrée est « ${p1.id} », sa première fiche « ${p1.f0} ».\n`);

  console.log('CAS 1 — fiche d\'entrée, aucune séance en cours (l\'arrivant d\'Instagram)');
  const cas1 = await page.evaluate((f0) => {
    delete S.sr; S.sdone = {}; S.skip = {}; delete S.engage; saveS();
    reprendreOuLire({ slug: f0, titre: '' });
    return { srExiste: !!S.sr, sid: S.sr && S.sr.sid, etape: S.sr && S.sr.etape, srVivant: !!(typeof SR !== 'undefined' && SR) };
  }, p1.f0);
  verifier('la séance démarre (S.sr posé)', cas1.srExiste === true, cas1);
  verifier('c\'est bien la séance d\'entrée', cas1.sid === p1.id, cas1);
  verifier('elle démarre à l\'étape 0 (la lecture de la fiche)', cas1.etape === 0, cas1);

  console.log('\nCAS 2 — NON-RÉGRESSION : une séance est déjà en cours (le correctif du 13/09)');
  const cas2 = await page.evaluate((p) => {
    S.sdone = {}; S.skip = {}; delete S.engage;
    S.sr = { sid: p.id, etape: 1, note: 'ma note', rev: null }; saveS();   // étape 1 = la restitution
    reprendreOuLire({ slug: p.f0, titre: '' });
    return { sid: S.sr && S.sr.sid, etape: S.sr && S.sr.etape };
  }, p1);
  verifier('on reprend la séance en cours, pas une neuve', cas2.sid === p1.id, cas2);
  verifier('on reprend à SON étape (1), sans la perdre', cas2.etape === 1, cas2);

  console.log('\nCAS 3 — NON-RÉGRESSION : une fiche qui n\'ouvre aucune séance');
  const cas3 = await page.evaluate(() => {
    delete S.sr; S.sdone = {}; S.skip = {}; delete S.engage; saveS();
    reprendreOuLire({ slug: 'metier-pharmacien', titre: 'Pharmacien' });
    return { srExiste: !!S.sr, lecture: document.body.classList.contains('lecture') };
  });
  verifier('aucune séance n\'est démarrée de force', cas3.srExiste === false, cas3);

  console.log('\nCAS 4 — NON-RÉGRESSION : la séance du jour est déjà faite (« une séance par jour »)');
  const cas4 = await page.evaluate((p) => {
    delete S.sr; S.skip = {}; delete S.engage;
    S.sdone = {}; S.sdone[p.id] = Date.now();        // p1 déjà terminée
    S.sjour = arDay(); saveS();
    const avant = seanceCourante();
    reprendreOuLire({ slug: p.f0, titre: '' });
    return { srExiste: !!S.sr, sid: S.sr && S.sr.sid, courante: avant ? avant.id : null };
  }, p1);
  verifier('on ne redémarre pas une séance déjà faite', cas4.sid !== p1.id, cas4);

  console.log('\nCAS 5 — la marche manquante de l\'entonnoir : la balise « gate_compte »');
  const cas5 = await page.evaluate(() => {
    window.__BALISES = [];              // les balises sont retenues, pas envoyées (window.__BANC)
    gateVers = 'fiche'; go('gate');
    const e = window.__BALISES || [];
    return { types: e.map(x => x.type), vers: e.map(x => x.vers) };
  });
  verifier('« gate_compte » part quand la porte s\'affiche', cas5.types.indexOf('gate_compte') >= 0, cas5);
  verifier('elle dit vers quoi la porte menait', cas5.vers.indexOf('fiche') >= 0, cas5);

  // garde-fou : AUCUNE requête ne doit être partie vers la production pendant ce banc
  verifier('aucune écriture en production', sorties.length === 0, sorties);

  await browser.close(); srv.close();
  if (erreursJs.length) { console.log('\n⛔ erreurs JS pendant le test :'); erreursJs.forEach(e => console.log('   ' + e)); }
  console.log('\n' + (ECHECS.length === 0 && erreursJs.length === 0
    ? '✅ TOUT PASSE — le correctif tient, et les trois cas de non-régression aussi.'
    : '⛔ ÉCHECS : ' + (ECHECS.join(' · ') || '(aucun)') + (erreursJs.length ? ' + ' + erreursJs.length + ' erreur(s) JS' : '')));
  process.exit(ECHECS.length === 0 && erreursJs.length === 0 ? 0 : 1);
})().catch(e => { console.error('ERREUR DU BANC :', e); process.exit(1); });
