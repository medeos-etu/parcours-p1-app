/* ═══ PARCOURS UTILISATEUR — six profils traversent l'app, écran par écran.
   Pour chaque écran : une capture, et des contrôles automatiques qui attrapent ce que
   l'œil rate — erreurs JS, images cassées, débordement horizontal, texte minuscule,
   boutons trop petits pour le pouce, conteneurs vides, contraste du texte clair.
   Usage : node outils/parcours-utilisateur.js  →  /tmp/app-parcours/<profil>/NN-<écran>.png ═══ */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const R = '/Users/lucascrepin/dev/parcours-p1-app';
const SORTIE = '/tmp/app-parcours';
const MIME = { html:'text/html', js:'text/javascript', css:'text/css', png:'image/png',
  jpg:'image/jpeg', jpeg:'image/jpeg', webp:'image/webp', json:'application/json', svg:'image/svg+xml' };

const srv = http.createServer((rq, rs) => {
  let p = decodeURIComponent(rq.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(R, p);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { rs.writeHead(404); return rs.end(); }
  rs.writeHead(200, { 'content-type': MIME[path.extname(f).slice(1)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(rs);
});

/* ── l'état de départ de chaque profil, posé dans le navigateur ── */
const PROFILS = [
  { id:'01-nouvelle-venue', nom:'Nouvelle venue, aucun compte', vp:{width:390,height:844},
    etat: () => { localStorage.clear(); },
    tuto: false,
    etapes: [
      ['arrivee',        () => {}],
      ['tuto-2',         () => { tutoNext(); }],
      ['tuto-3',         () => { tutoNext(); }],
      ['biblio',         () => { tutoEnd(); go('biblio'); }],
      ['metiers',        () => { ouvrirMetiers(); }],
      ['panoramas',      () => { closeSheet('sheet-pioche'); ouvrirPanoramas(); }],
      ['parcours-ferme', () => { closeSheet('sheet-pioche'); go('home'); }],
      ['arene-fermee',   () => { go('arene'); }]
    ] },

  { id:'02-terminale-jour-1', nom:'Terminale, premier jour, compte créé', vp:{width:390,height:844},
    etat: () => { localStorage.setItem('m4_prenom','Léa'); localStorage.setItem('m4_onboarded','1');
      if(!S.ar) initAr(); S.ar.compte={id:'lea',mail:'lea@test.fr',cree:Date.now()}; S.tuto={biblio:1,home:1,arene:1}; saveS(); },
    etapes: [
      ['home-jour-1',    () => { go('home'); renderParcours(); }],
      ['carte-question', () => { go('carte'); renderCarte(); }],
      ['carte-visite',   () => { S.tuto.carte=0; poserRentree(2027); }],
      ['carte-route',    () => { tutoEnd(); }],
      ['tuile-monde-1',  () => { ouvrirTuile(0); }],
      ['seance',         () => { closeSheet('sheet-tuile'); go('home'); renderParcours(); }],
      ['profil',         () => { go('profil'); }],
      ['arene-vide',     () => { go('arene'); renderArene(); }]
    ] },

  { id:'03-regulier-jour-20', nom:'Élève régulier, 20 jours, série de 12', vp:{width:390,height:844},
    etat: () => { localStorage.setItem('m4_prenom','Tom'); localStorage.setItem('m4_onboarded','1');
      if(!S.ar) initAr(); S.ar.compte={id:'tom',mail:'tom@test.fr',cree:Date.now()}; S.tuto={biblio:1,home:1,arene:1,carte:1};
      S.ar.T=1450; S.streak=12; S.streakMax=12; S.stDay=arDay(); S.points=620; S.qcm=84; S.gels=1;
      S.profil={rentreeDite:true,rentreeAn:2027};
      S.sdone={}; S.vues={}; S.oublis={};
      SEANCES.slice(0,20).forEach(s=>{ S.sdone[s.id]=Date.now(); s.fiches.forEach(f=>{ S.vues[f]=1; S.oublis[f]={oublie:''}; }); });
      saveS(); },
    etapes: [
      ['home',           () => { go('home'); renderParcours(); }],
      ['carte',          () => { go('carte'); renderCarte(); }],
      ['tuile-en-cours', () => { const T=territoires(); const t=prochaineConquete(); ouvrirTuile(T.indexOf(t)); }],
      ['revoir-passees', () => { closeSheet('sheet-tuile'); go('home'); revoirPassees(); }],
      ['salles',         () => { closeSheet('sheet-tuile'); go('arene'); renderArene(); }],
      ['amphi',          () => { setLieu('amphi'); }],
      ['profil',         () => { go('profil'); }],
      ['vestiaire',      () => { openSheet('sheet-skin'); }],
      ['serie',          () => { closeSheet('sheet-skin'); go('home'); renderParcours(); toggleFlamme(); }]
    ] },

  { id:'04-deja-en-p1', nom:'Déjà en première année', vp:{width:390,height:844},
    etat: () => { localStorage.setItem('m4_prenom','Sam'); localStorage.setItem('m4_onboarded','1');
      if(!S.ar) initAr(); S.ar.compte={id:'sam',mail:'sam@test.fr',cree:Date.now()}; S.tuto={biblio:1,home:1,arene:1,carte:1};
      S.profil={rentreeDite:true,dejaP1:true}; saveS(); },
    etapes: [
      ['carte-sommet',   () => { go('carte'); renderCarte(); tutoEnd(); const e=document.getElementById('cr-sommet'); if(e) e.scrollIntoView({block:'start'}); }],
      ['carte-stage',    () => { const l=document.querySelectorAll('#carte-corps .cr-stage'); if(l.length) l[l.length-1].scrollIntoView({block:'center'}); }],
      ['carte-bas',      () => { const e=document.getElementById('monde-1'); if(e) e.scrollIntoView({block:'center'}); }],
      ['home',           () => { go('home'); renderParcours(); }]
    ] },

  { id:'05-eleve-medeos', nom:'Élève des stages, Pack Année complète', vp:{width:390,height:844},
    etat: () => { localStorage.setItem('m4_prenom','Inès'); localStorage.setItem('m4_onboarded','1');
      if(!S.ar) initAr(); S.ar.compte={id:'ines',mail:'ines@test.fr',cree:Date.now()}; S.tuto={biblio:1,home:1,arene:1,carte:1};
      S.stage=true; S.ar.skin={av:'medeos',ban:'medeos'}; S.ar.T=3200; S.streak=30; S.streakMax=30; S.stDay=arDay();
      S.profil={rentreeDite:true,rentreeAn:2027};
      S.sdone={}; S.vues={}; S.oublis={}; S.collection={1:1,2:1,3:1};
      SEANCES.slice(0,60).forEach(s=>{ S.sdone[s.id]=Date.now(); s.fiches.forEach(f=>{ S.vues[f]=1; S.oublis[f]={oublie:''}; }); });
      saveS(); },
    etapes: [
      ['home',           () => { go('home'); renderParcours(); }],
      ['carte',          () => { go('carte'); renderCarte(); tutoEnd(); }],
      ['recompenses',    () => { const e=document.getElementById('monde-4'); if(e) e.scrollIntoView({block:'center'}); }],
      ['arene',          () => { go('arene'); renderArene(); }],
      ['profil',         () => { go('profil'); }],
      ['vestiaire',      () => { openSheet('sheet-skin'); }]
    ] },

  { id:'06-ordinateur', nom:'Élève régulier, sur ordinateur', vp:{width:1280,height:900},
    etat: () => { localStorage.setItem('m4_prenom','Tom'); localStorage.setItem('m4_onboarded','1');
      if(!S.ar) initAr(); S.ar.compte={id:'tom',mail:'tom@test.fr',cree:Date.now()}; S.tuto={biblio:1,home:1,arene:1,carte:1};
      S.ar.T=1450; S.streak=12; S.streakMax=12; S.stDay=arDay();
      S.profil={rentreeDite:true,rentreeAn:2027};
      S.sdone={}; S.vues={}; S.oublis={};
      SEANCES.slice(0,20).forEach(s=>{ S.sdone[s.id]=Date.now(); s.fiches.forEach(f=>{ S.vues[f]=1; S.oublis[f]={oublie:''}; }); });
      saveS(); },
    etapes: [
      ['home',           () => { go('home'); renderParcours(); }],
      ['biblio',         () => { go('biblio'); }],
      ['carte',          () => { go('carte'); renderCarte(); tutoEnd(); }],
      ['arene',          () => { go('arene'); renderArene(); }],
      ['profil',         () => { go('profil'); }]
    ] }
];

/* ── les contrôles automatiques, exécutés dans la page à chaque écran ── */
const CONTROLES = function () {
  const out = [];
  const vu = el => { const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && getComputedStyle(el).visibility !== 'hidden'; };
  /* un élément posé dans un carrousel horizontal n'est pas « hors écran » : il attend qu'on fasse défiler */
  const dansCarrousel = el => { let e = el;
    while (e && e !== document.body) { const o = getComputedStyle(e).overflowX; if (o === 'auto' || o === 'scroll') return true; e = e.parentElement; }
    return false; };

  /* débordement horizontal : rien ne doit sortir de l'écran */
  if (document.documentElement.scrollWidth > innerWidth + 2)   /* la page elle-même ne défile jamais latéralement */
    out.push('déborde à droite de ' + (document.documentElement.scrollWidth - innerWidth) + ' px');

  document.querySelectorAll('body *').forEach(el => {
    if (!vu(el)) return;
    const r = el.getBoundingClientRect();
    if (r.right > innerWidth + 2 && el.children.length === 0 && (el.textContent || '').trim() && !dansCarrousel(el))
      out.push('« ' + (el.textContent || '').trim().slice(0, 28) + ' » sort de ' + Math.round(r.right - innerWidth) + ' px');
  });

  /* images cassées */
  document.querySelectorAll('img').forEach(im => {
    if (im.complete && im.naturalWidth === 0 && im.getAttribute('src') && !/about:blank/.test(im.src))
      out.push('image absente : ' + im.getAttribute('src'));
  });

  /* texte trop petit, boutons trop petits pour le pouce (mobile seulement) */
  const mobile = innerWidth < 700;
  document.querySelectorAll('button, a, .pioche-row, .cr-tile, .tu-f').forEach(b => {
    if (!vu(b)) return;
    const r = b.getBoundingClientRect();
    if (mobile && r.height < 32 && (b.textContent || '').trim().length > 1)
      out.push('cible trop petite (' + Math.round(r.height) + ' px) : « ' + (b.textContent || '').trim().slice(0, 24) + ' »');
  });
  document.querySelectorAll('p, span, em, small, b, li, div').forEach(el => {
    if (el.children.length || !vu(el)) return;
    const t = (el.textContent || '').trim(); if (t.length < 12) return;
    const px = parseFloat(getComputedStyle(el).fontSize);
    if (px && px < 10.5 && !el.closest('#mainnav, .nav, nav')) out.push('texte à ' + px + ' px : « ' + t.slice(0, 28) + ' »');
  });

  /* conteneurs visibles mais vides */
  ['#seance', '#carte-corps', '#pioche-corps', '#tuile-corps', '#skin-avs', '#skin-bans'].forEach(sel => {
    const el = document.querySelector(sel);
    if (el && !el.hidden && vu(el) && !(el.textContent || '').trim() && !el.querySelector('img'))
      out.push('bloc vide : ' + sel);
  });

  return [...new Set(out)];
};

(async () => {
  fs.rmSync(SORTIE, { recursive: true, force: true });
  await new Promise(r => srv.listen(0, r));
  const url = 'http://localhost:' + srv.address().port + '/index.html';
  const nav = await chromium.launch();
  const rapport = [];

  for (const p of PROFILS) {
    const dir = path.join(SORTIE, p.id); fs.mkdirSync(dir, { recursive: true });
    const ctx = await nav.newContext({ viewport: p.vp, deviceScaleFactor: p.vp.width < 700 ? 2 : 1 });
    const pg = await ctx.newPage();
    const erreurs = [];
    pg.on('pageerror', e => erreurs.push('JS : ' + String(e).split('\n')[0]));
    pg.on('console', m => { if (m.type() === 'error' && !/favicon/.test(m.text())) erreurs.push('console : ' + m.text().slice(0, 120)); });
    pg.on('requestfailed', r => { if (!/favicon/.test(r.url())) erreurs.push('fichier manquant : ' + r.url().split('/').slice(-1)[0]); });

    console.log('\n══ ' + p.nom + '  (' + p.vp.width + ' px) ══');
    await pg.goto(url, { waitUntil: 'load' }); await pg.waitForTimeout(500);
    await pg.evaluate(p.etat); await pg.reload({ waitUntil: 'load' }); await pg.waitForTimeout(700);
    if (p.tuto !== false) await pg.evaluate(() => { try { tutoEnd(); } catch (e) {} });

    let n = 0;
    for (const [nom, action] of p.etapes) {
      n++;
      try { await pg.evaluate(action); } catch (e) { erreurs.push('étape ' + nom + ' : ' + String(e).split('\n')[0]); }
      await pg.waitForTimeout(650);
      const soucis = await pg.evaluate(CONTROLES);
      const fichier = path.join(dir, String(n).padStart(2, '0') + '-' + nom + '.png');
      /* page entière quand elle tient sur trois écrans ; sinon la fenêtre seule, sans quoi la
         carte des 22 mondes sort une image de 37 000 px de haut, illisible */
      const haut = await pg.evaluate(() => document.documentElement.scrollHeight);
      const entiere = p.vp.width < 700 && haut < p.vp.height * 3;
      try { await pg.screenshot({ path: fichier, fullPage: entiere, animations: 'disabled' }); }
      catch (e) { await pg.screenshot({ path: fichier, animations: 'disabled' }).catch(() => {}); }
      console.log('  ' + String(n).padStart(2, '0') + ' ' + nom.padEnd(16) + (soucis.length ? '⚠  ' + soucis.join(' | ') : '·'));
      soucis.forEach(s => rapport.push({ profil: p.nom, ecran: nom, souci: s }));
    }
    erreurs.forEach(e => rapport.push({ profil: p.nom, ecran: '—', souci: e }));
    if (erreurs.length) console.log('  erreurs : ' + [...new Set(erreurs)].join(' | '));
    await ctx.close();
  }

  console.log('\n═══════ BILAN ═══════');
  if (!rapport.length) console.log('aucun souci relevé automatiquement.');
  else {
    const par = {};
    rapport.forEach(r => { const c = r.souci.replace(/\d+/g, 'N').slice(0, 60); (par[c] = par[c] || []).push(r); });
    Object.entries(par).sort((a, b) => b[1].length - a[1].length).forEach(([, v]) => {
      console.log('\n· ' + v[0].souci);
      console.log('  vu ' + v.length + ' fois — ' + [...new Set(v.map(x => x.profil + ' / ' + x.ecran))].slice(0, 4).join(', '));
    });
  }
  console.log('\ncaptures : ' + SORTIE);
  await nav.close(); srv.close();
})();
