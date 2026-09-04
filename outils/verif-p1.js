/* Contrôle des cinq choix de rentrée : la route, les stages, le sommet, les récompenses.
   Récompenses attendues : rien au monde 1 ; photo de profil sur les pairs ; bannière sur
   les impairs ; un gel en plus tous les quatre mondes. Une seule chose par monde. */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const R = '/Users/lucascrepin/dev/parcours-p1-app';
const MIME = { html:'text/html', js:'text/javascript', css:'text/css', png:'image/png',
  jpg:'image/jpeg', jpeg:'image/jpeg', webp:'image/webp', json:'application/json', svg:'image/svg+xml' };
const srv = http.createServer((rq, rs) => {
  let p = decodeURIComponent(rq.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(R, p);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { rs.writeHead(404); return rs.end(); }
  rs.writeHead(200, { 'content-type': MIME[path.extname(f).slice(1)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(rs);
});

(async () => {
  await new Promise(r => srv.listen(0, r));
  const url = 'http://localhost:' + srv.address().port + '/index.html';
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const pg = await ctx.newPage();
  const erreurs = [];
  pg.on('pageerror', e => erreurs.push(String(e)));
  pg.on('console', m => { if (m.type() === 'error') erreurs.push(m.text()); });

  await pg.goto(url, { waitUntil: 'load' });
  await pg.waitForTimeout(600);

  const cas = [
    ['déjà en P1',  'deja'],
    ['Terminale',   2027],
    ['Première',    2028],
    ['Seconde',     2029],
    ['ne sait pas', null]
  ];

  for (const [nom, choix] of cas) {
    const r = await pg.evaluate(c => {
      localStorage.setItem('m4_prenom', 'T'); localStorage.setItem('m4_onboarded', '1');
      S.sdone = {}; S.vues = {}; S.collection = {}; S.tuto = { biblio:1, home:1, arene:1, carte:1 };
      S.profil = { rentreeDite: false };
      poserRentree(c);
      const doc = document.getElementById('carte-corps');
      const stages = [...doc.querySelectorAll('.cr-stage')];
      /* dans le sens de la MONTÉE : le DOM descend, donc on lit à l'envers */
      const ordre = stages.map(a => (a.querySelector('.cr-nom.stage') || {}).textContent || '').reverse();
      const apres = [...doc.querySelectorAll('.cr-apres')].map(e => e.textContent.trim().slice(0, 60));
      const mondes_ = [...doc.querySelectorAll('.cr-monde')];
      const rec = {};
      mondes_.forEach(el => {
        const n = +el.id.replace('monde-', '');
        rec[n] = [...el.querySelectorAll('.cr-chip')].map(c => (c.querySelector('b') || {}).textContent);
      });
      const bouton = (doc.querySelector('.cr-sommet .cr-chg') || {}).textContent || '';
      const tuiles = doc.querySelectorAll('.cr-tile-rec').length;
      const flamme = document.getElementById('pt-flame');
      return {
        sommetTitre: (doc.querySelector('.cr-sommet .cr-nom') || {}).textContent || '',
        sommetBand: (doc.querySelector('.cr-sommet .cr-band span') || {}).textContent || '',
        bouton, tuiles,
        flamme: flamme ? (flamme.hidden ? 'cachée' : flamme.textContent.trim()) : 'absente',
        nbStages: stages.length, ordre, apres,
        nbMondes: mondes_.length, total: (typeof mondes === 'function' ? mondes().length : 0),
        rec
      };
    }, choix);
    await pg.waitForTimeout(200);

    console.log('\n══ ' + nom + ' ══');
    console.log('  sommet   : « ' + r.sommetTitre + ' »  |  bandeau : « ' + r.sommetBand + ' »  |  bouton : « ' + r.bouton + ' »');
    console.log('  route    : ' + r.nbMondes + '/' + r.total + ' mondes · ' + r.nbStages + ' stage(s) · flamme : ' + r.flamme + ' · bonus de tuile : ' + r.tuiles);
    console.log('  montée   : ' + (r.ordre.length ? r.ordre.join(' → ') : '—'));
    if (r.apres.length) console.log('  après    : ' + r.apres.join(' / '));
    console.log('  mondes 1→5 : ' + [1,2,3,4,5].map(n => n + '=' + ((r.rec[n]||[]).join('+') || 'rien')).join('  '));

    const dit = (ok, m) => { if (!ok) erreurs.push(nom + ' : ' + m); };
    /* « je ne sais pas encore » garde son invitation à préciser ; tous les autres disent « changer la date » */
    const boutonAttendu = choix === null ? 'tu ne l\'as pas encore dite — la préciser' : 'changer la date';
    dit(r.bouton === boutonAttendu, 'le bouton du sommet doit dire « ' + boutonAttendu + ' », il dit « ' + r.bouton + ' »');
    dit(r.tuiles === 0, 'les bonus de tuile doivent avoir disparu');
    dit(/0 j$/.test(r.flamme), 'la flamme doit se voir à 0 (' + r.flamme + ')');
    Object.keys(r.rec).map(Number).sort((a, b) => a - b).forEach(n => {
      const c = r.rec[n], gel = n >= 2;   /* un gel à chaque monde, à partir du 2 */
      const attendu = n === 1 ? [] : [n % 2 === 0 ? 'Photo de profil' : 'Bannière'].concat(gel ? ['1 gel de série'] : []);
      dit(JSON.stringify(c) === JSON.stringify(attendu), 'monde ' + n + ' : attendu ' + attendu.join('+') + ', vu ' + c.join('+'));
    });
    if (choix === 'deja') {
      dit(/bout de la route/i.test(r.sommetTitre), 'le sommet ne doit pas annoncer une rentrée');
      dit(r.nbStages >= 1, 'un élève déjà en P1 doit voir ses stages');
      dit(!/pré-rentrée/i.test(r.ordre.join(' ')), 'pas de pré-rentrée pour qui est déjà en P1');
      dit(r.nbMondes === r.total, 'la route doit être entière');
    } else {
      dit(/rentrée en première année/i.test(r.sommetTitre), 'le sommet doit annoncer la rentrée');
      dit(r.nbStages === 5, 'cinq stages attendus, vu ' + r.nbStages);
      const s = r.ordre.join(' ');
      const bon = ['Toussaint', 'Noël', 'Février', 'Pâques', 'pré-rentrée']
        .map(k => s.toLowerCase().indexOf(k.toLowerCase()));
      dit(bon.every((v, i) => v >= 0 && (i === 0 || v > bon[i - 1])), 'ordre de montée incorrect : ' + s);
    }
  }

  /* la visite de la carte : elle démarre à la première route, avec la date de l'élève */
  {
    const v = await pg.evaluate(() => {
      /* la visite de la Bibliothèque s'est ouverte au chargement de la page de test : on la ferme d'abord */
      try { tutoEnd(); } catch (e) {}
      S.tuto = { biblio:1, home:1, arene:1 }; S.profil = { rentreeDite:false }; saveS();
      go('carte'); poserRentree(2027);
      return new Promise(res => setTimeout(() => {
        const t = document.getElementById('tuto'), b = document.getElementById('tuto-bulle');
        const ouverte = t && !t.hidden;
        const texte = b ? b.textContent : '';
        const n = document.querySelectorAll('#tuto-pips i').length;
        try { tutoEnd(); } catch (e) {}
        res({ ouverte, texte: texte.slice(0, 110), n, faite: !!(S.tuto && S.tuto.carte) });
      }, 1200));
    });
    console.log('\n══ visite de la carte ══\n  ' + (v.ouverte ? 'ouverte' : 'FERMÉE') + ' · ' + v.n + ' étapes · « ' + v.texte + '… »');
    if (!v.ouverte) erreurs.push('la visite de la carte ne démarre pas');
    if (v.n < 3 || v.n > 4) erreurs.push('la visite de la carte doit compter 3 ou 4 étapes, vu ' + v.n);
    if (!/2027/.test(v.texte)) erreurs.push('la visite doit dire la date de rentrée');
    if (!v.faite) erreurs.push('la visite doit se marquer faite une fois fermée');
  }

  console.log('\nerreurs : ' + erreurs.length);
  erreurs.forEach(e => console.log('  ✗ ' + e));
  await b.close(); srv.close();
  process.exit(erreurs.length ? 1 : 0);
})();
