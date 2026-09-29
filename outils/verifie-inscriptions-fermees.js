/* TEST DU 29/09 (Lucas, C79) — « on ne peut plus s'inscrire, on peut uniquement se connecter ;
   le lien parcours redirige vers le panorama ».

     1. visiteur neuf sur /                     → part au Panorama P1
     2. visiteur neuf sur /?src=ig&ref=parcours → part au Panorama, src et ref gardés
     3. visiteur neuf sur /#biblio              → reste (la Bibliothèque est libre), la porte ne propose plus de compte
     4. lien des e-mails /#connexion            → reste, formulaire de connexion, pas d'onglet « Créer »
     5. appareil qui a déjà eu un compte        → reste (il se reconnecte)
     6. acheteur Medi Pro /?code=MEDEOS-…       → reste, et peut créer son compte

   node outils/verifie-inscriptions-fermees.js
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

  async function visite(chemin, avant) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    // ⛔ le banc n'écrit jamais en production : balises retenues, et tout medeos-sante.fr intercepté
    await ctx.addInitScript(() => { window.__BANC = 1; });
    if (avant) await ctx.addInitScript(avant);
    await ctx.route(/medeos-sante\.fr/, route => {
      const u = route.request().url();
      if (route.request().isNavigationRequest() && /panorama-p1/.test(u)) return route.fulfill({ status: 200, contentType: 'text/html', body: '<title>PANORAMA</title>' });
      return route.abort();
    });
    const page = await ctx.newPage();
    const erreursJs = [];
    page.on('pageerror', e => erreursJs.push(e.message));
    await page.goto(`http://localhost:${port}${chemin}`, { waitUntil: 'load' }).catch(() => {});
    await page.waitForTimeout(4000);
    const url = page.url();
    let dom = null;
    if (/localhost/.test(url)) dom = await page.evaluate(() => ({
      titrePorte: (document.getElementById('gate-titre') || {}).textContent,
      boutonCreerPorte: !!document.querySelector('#gate .gatebox > .btn:not(.ghost)') && /Créer/.test(document.querySelector('#gate .gatebox > .btn:not(.ghost)').textContent),
      permise: inscriptionPermise(),
      navVisible: (() => { const n = document.getElementById('mainnav'); return !!n && getComputedStyle(n).display !== 'none'; })(),
      sansCompte: document.body.classList.contains('sans-compte'),
      visite: !document.getElementById('tuto').hidden || !!document.querySelector('.axotoast')
        || (() => { const g = document.querySelector('#biblio > .guide'); return !!g && getComputedStyle(g).display !== 'none'; })(),
    }));
    await ctx.close();
    return { url, dom, erreursJs };
  }

  console.log('\nCAS 1 — visiteur neuf sur /');
  let v = await visite('/');
  verifier('part au Panorama', /panorama-p1/.test(v.url), v.url);
  verifier('aucune erreur JS', v.erreursJs.length === 0, v.erreursJs);

  console.log('CAS 2 — visiteur neuf venu d\'un automatisme PARCOURS');
  v = await visite('/?src=ig&ref=parcours');
  verifier('part au Panorama avec src=ig&ref=parcours', /panorama-p1\?src=ig&ref=parcours/.test(v.url), v.url);

  console.log('CAS 3 — visiteur neuf sur la Bibliothèque');
  v = await visite('/#biblio');
  verifier('reste dans l\'app', /localhost/.test(v.url), v.url);
  verifier('la porte ne propose plus de créer un compte', v.dom && !v.dom.boutonCreerPorte && /réservé/.test(v.dom.titrePorte), v.dom);
  verifier('Parcours, Arène, Social masqués (navigation cachée)', v.dom && v.dom.sansCompte && !v.dom.navVisible, v.dom);
  verifier('aucune visite guidée ni Axo qui parle', v.dom && !v.dom.visite, v.dom);

  console.log('CAS 3 bis — lien du Panorama vers la Bibliothèque (accueil-panorama-p1)');
  v = await visite('/?src=accueil-panorama-p1#biblio');
  verifier('reste dans l\'app, sans visite guidée', /localhost/.test(v.url) && v.dom && !v.dom.visite, v.dom);
  verifier('aucune erreur JS', v.erreursJs.length === 0, v.erreursJs);

  console.log('CAS 4 — le bouton « Me connecter » des e-mails');
  v = await visite('/#connexion');
  verifier('reste dans l\'app', /localhost/.test(v.url), v.url);
  verifier('inscription non permise', v.dom && v.dom.permise === false, v.dom);

  console.log('CAS 5 — appareil qui a déjà eu un compte');
  v = await visite('/', () => { try { localStorage.setItem('m4_comptes', JSON.stringify({ eleve: { id: 'eleve', mail: 'e@x.fr', cree: 1 } })); } catch (e) {} });
  verifier('reste dans l\'app (il se reconnecte)', /localhost/.test(v.url), v.url);

  console.log('CAS 6 — acheteur Medi Pro avec son code');
  v = await visite('/?code=MEDEOS-AB12-CD34');
  verifier('reste dans l\'app', /localhost/.test(v.url), v.url);
  verifier('peut créer son compte', v.dom && v.dom.permise === true, v.dom);

  console.log('CAS 7 — élève déjà connecté');
  v = await visite('/', () => { try { const s = JSON.parse(localStorage.getItem('m4_state') || '{}'); s.ar = Object.assign(s.ar || {}, { compte: { id: 'eleve', mail: 'e@x.fr', cree: 1 } }); localStorage.setItem('m4_state', JSON.stringify(s)); localStorage.setItem('m4_comptes', JSON.stringify({ eleve: { id: 'eleve', mail: 'e@x.fr', cree: 1 } })); } catch (e) {} });
  verifier('reste dans l\'app', /localhost/.test(v.url), v.url);
  verifier('garde Parcours, Arène, Social', v.dom && !v.dom.sansCompte, v.dom);

  await browser.close(); srv.close();
  console.log(ECHECS.length ? `\n✗ ${ECHECS.length} échec(s)` : '\n✓ tout passe');
  process.exit(ECHECS.length ? 1 : 0);
})();
