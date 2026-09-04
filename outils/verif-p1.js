/* Contrôle des cinq choix de rentrée : la route, les stages, le sommet, les récompenses. */
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
      S.sdone = {}; S.vues = {}; S.collection = {}; S.recomp = {};
      S.profil = { rentreeDite: false };
      poserRentree(c);
      const doc = document.getElementById('carte-corps');
      const stages = [...doc.querySelectorAll('.cr-stage')];
      /* dans le sens de la MONTÉE : le DOM descend, donc on lit à l'envers */
      const ordre = stages.map(a => (a.querySelector('.cr-nom.stage') || {}).textContent || '').reverse();
      const apres = [...doc.querySelectorAll('.cr-apres')].map(e => e.textContent.trim().slice(0, 60));
      const mondes_ = [...doc.querySelectorAll('.cr-monde')];
      /* récompenses par monde */
      const rec = {};
      mondes_.forEach(el => {
        const n = +el.id.replace('monde-', '');
        rec[n] = [...el.querySelectorAll('.cr-chip')].map(c =>
          (c.querySelector('b') || {}).textContent + (c.classList.contains('futur') ? '·futur' : ''));
      });
      return {
        sommetTitre: (doc.querySelector('.cr-sommet .cr-nom') || {}).textContent || '',
        sommetBand: (doc.querySelector('.cr-sommet .cr-band span') || {}).textContent || '',
        audela: (doc.querySelector('.cr-sommet .cr-audela') || {}).textContent || '',
        nbStages: stages.length, ordre, apres,
        nbMondes: mondes_.length, total: (typeof mondes === 'function' ? mondes().length : 0),
        jours: (typeof joursAvantRentree === 'function' ? joursAvantRentree() : null),
        rec
      };
    }, choix);
    await pg.waitForTimeout(200);

    console.log('\n══ ' + nom + ' ══');
    console.log('  sommet   : « ' + r.sommetTitre + ' »  |  bandeau : « ' + r.sommetBand + ' »');
    console.log('  route    : ' + r.nbMondes + '/' + r.total + ' mondes · ' + r.nbStages + ' stage(s)');
    console.log('  montée   : ' + (r.ordre.length ? r.ordre.join(' → ') : '—'));
    if (r.apres.length) console.log('  après    : ' + r.apres.join(' / '));
    const p1 = r.rec[1] || [], p2 = r.rec[2] || [], p3 = r.rec[3] || [], p4 = r.rec[4] || [];
    console.log('  monde 1  : ' + (p1.length ? p1.join(', ') : '— rien'));
    console.log('  monde 2  : ' + p2.join(', '));
    console.log('  monde 3  : ' + p3.join(', '));
    console.log('  monde 4  : ' + p4.join(', '));

    /* contrôles */
    const dit = (ok, m) => { if (!ok) erreurs.push(nom + ' : ' + m); };
    dit(p1.length === 0, 'le monde 1 ne doit rien donner');
    Object.keys(r.rec).map(Number).sort((a, b) => a - b).forEach(n => {
      const c = r.rec[n];
      if (n === 1) return;
      if (n % 2 === 0) dit(c.length === 3 && c[0] === 'Photo de profil' && c[1] === 'Bannière',
        'monde pair ' + n + ' devrait donner écusson + bannière + gel, il donne : ' + c.join('|'));
      else dit(c.length === 2 && c[0] === '1 gel de série' && /futur/.test(c[1] || ''),
        'monde impair ' + n + ' devrait donner le gel + l\'annonce, il donne : ' + c.join('|'));
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
      dit(bon.every((v, i) => v >= 0 && (i === 0 || v > bon[i - 1])),
        'ordre de montée incorrect : ' + s);
    }
  }

  console.log('\nerreurs : ' + erreurs.length);
  erreurs.forEach(e => console.log('  ✗ ' + e));
  await b.close(); srv.close();
  process.exit(erreurs.length ? 1 : 0);
})();
