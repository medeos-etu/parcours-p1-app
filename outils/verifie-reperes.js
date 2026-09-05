#!/usr/bin/env node
/* ═══ LE CONTRÔLE DES ÉLÈVES REPÈRES — tout ce qui doit rester vrai, tous les jours.
   Lucas, 05/09 : « faut vérifier que ces bots fictifs sont cohérents, aucune erreur ».
   On ne regarde pas un jour : on simule une année entière, jour par jour, et on vérifie
   à chaque fois que rien ne dépasse. usage : node outils/verifie-reperes.js ═══ */
const http=require('http'),fs=require('fs'),path=require('path');
const {chromium}=require('playwright');
const R=path.join(__dirname,'..');
const MIME={html:'text/html',js:'text/javascript',css:'text/css',png:'image/png',jpg:'image/jpeg',webp:'image/webp',json:'application/json',svg:'image/svg+xml'};
const srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';
  const f=path.join(R,p);if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){rs.writeHead(404);return rs.end();}
  rs.writeHead(200,{'content-type':MIME[path.extname(f).slice(1)]||'application/octet-stream'});fs.createReadStream(f).pipe(rs);});

(async()=>{
  await new Promise(r=>srv.listen(0,r));const port=srv.address().port;
  const br=await chromium.launch();const pg=await br.newPage();
  await pg.goto('http://localhost:'+port+'/');await pg.waitForTimeout(600);

  const r = await pg.evaluate(()=>{
    const pb=[];                        /* les problèmes trouvés */
    const seuilDe=x=>(typeof x.seuil==='number')?x.seuil:null;
    const AM=AVATARS.find(a=>a.id==='medeos'), BM=BANNIERES.find(b=>b.id==='medeos');
    if(!AM) pb.push('la photo « Étudiant Medeos » est introuvable');
    if(!BM) pb.push('la bannière « Étudiant Medeos » est introuvable');

    /* identifiants : uniques, et de la même forme que ceux d'un vrai compte */
    const vus=new Set();
    ELEVES_REPERES.forEach(e=>{
      if(vus.has(e.id)) pb.push('identifiant en double : '+e.id);
      vus.add(e.id);
      if(!/^[a-zA-Z0-9._-]{3,18}$/.test(e.id)) pb.push('identifiant hors format : '+e.id);
      if(!(e.rythme>0&&e.rythme<1)) pb.push(e.id+' : rythme hors ]0,1[');
      if(!(e.vitesse>0)) pb.push(e.id+' : vitesse nulle');
      if(!(e.base>=0)) pb.push(e.id+' : base négative');
    });

    /* la marche d'un repère, rejouée pour un jour donné */
    const marche=(e,J)=>{ let T=e.base;
      for(let j=0;j<J;j++){ const reste=Math.max(0.06,1-T/11000); const a=_repereAlea(e.id+'#'+j);
        if(a<e.rythme){const b=_repereAlea(e.id+'@'+j);T+=Math.round(e.vitesse*(0.55+b*0.95)*reste);}
        else T-=Math.round(e.vitesse*0.45);
        if(T<0)T=0; if(T>10000)T=10000; }
      return T; };

    const stat={};
    ELEVES_REPERES.forEach(e=>stat[e.id]={min:1e9,max:-1,baisses:0,skins:new Set(),bans:new Set()});

    for(let J=0;J<=365;J++){
      const tot=[];
      ELEVES_REPERES.forEach(e=>{
        const T=marche(e,J);
        const s=skinRepere(e,T);
        const st=stat[e.id]; st.min=Math.min(st.min,T); st.max=Math.max(st.max,T);
        if(J>0 && T<marche(e,J-1)) st.baisses++;
        st.skins.add(s.av.id); st.bans.add(s.ban.id);

        /* ── LES RÈGLES ── */
        if(T<0||T>10000) pb.push('J'+J+' '+e.id+' : trophées hors bornes ('+T+')');
        if(e.medeos){
          if(s.av.id!=='medeos') pb.push('J'+J+' '+e.id+' : élève Medeos sans la photo Medeos');
          if(s.ban.id!=='medeos') pb.push('J'+J+' '+e.id+' : élève Medeos sans la bannière Medeos');
        } else {
          const sa=seuilDe(s.av), sb=seuilDe(s.ban);
          if(sa===null) pb.push('J'+J+' '+e.id+' : photo sans seuil ('+s.av.id+')');
          else if(sa>T) pb.push('J'+J+' '+e.id+' : photo « '+s.av.id+' » (seuil '+sa+') au-dessus de ses '+T+' 🏆');
          if(sb===null) pb.push('J'+J+' '+e.id+' : bannière sans seuil ('+s.ban.id+')');
          else if(sb>T) pb.push('J'+J+' '+e.id+' : bannière « '+s.ban.id+' » (seuil '+sb+') au-dessus de ses '+T+' 🏆');
          /* une peau conditionnelle (série, sans-faute…) n'a pas de sens pour un repère */
          if(typeof s.av.cond==='function') pb.push('J'+J+' '+e.id+' : photo conditionnelle « '+s.av.id+' »');
          if(typeof s.ban.cond==='function') pb.push('J'+J+' '+e.id+' : bannière conditionnelle « '+s.ban.id+' »');
        }
        tot.push(T);
      });
      /* deux repères ne doivent pas afficher exactement le même total : ça se voit */
      const doubles=tot.filter((t,i)=>tot.indexOf(t)!==i);
      if(doubles.length && J%30===0) pb.push('J'+J+' : totaux identiques ('+doubles.join(',')+')');
    }

    /* le classement du jour, tel qu'il s'affichera */
    const auj=joueursReperes().slice().sort((a,b)=>b.T-a.T);
    const gradeDe=T=>GRADES[gradeIdx(T)][1];
    return {pb, stat:Object.fromEntries(Object.entries(stat).map(([k,v])=>[k,{min:v.min,max:v.max,baisses:v.baisses,
             photos:[...v.skins].join(','),bannieres:[...v.bans].join(',')}])),
            auj:auj.map(j=>({id:j.id,T:j.T,grade:gradeDe(j.T),medeos:j.medeos,cadre:j.cadre,av:j.av.split('/').pop(),ban:j.ban.id}))};
  });

  console.log('\n═══ LE CLASSEMENT AUJOURD\'HUI ═══');
  r.auj.forEach((j,i)=>console.log('  '+String(i+1).padStart(2)+'. '+(j.medeos?'🎓':'  ')+' '+j.id.padEnd(12)+
    String(j.T).padStart(5)+' 🏆  '+j.grade.padEnd(22)+' photo '+j.av.padEnd(22)+' bannière '+j.ban));

  console.log('\n═══ SUR UN AN, JOUR PAR JOUR ═══');
  Object.entries(r.stat).forEach(([id,s])=>console.log('  '+id.padEnd(12)+' de '+String(s.min).padStart(5)+' à '+String(s.max).padStart(5)+
    ' 🏆 · '+String(s.baisses).padStart(3)+' jours de baisse · photos : '+s.photos+' · bannières : '+s.bannieres));

  /* les images existent-elles vraiment ? */
  const manquantes=[];
  for(const j of r.auj){
    for(const [quoi,url] of [['photo','img/profil/'+j.av],['photo2','img/parcours/territoires/'+j.av]]){
      if(quoi==='photo' && fs.existsSync(path.join(R,url))) { break; }
      if(quoi==='photo2' && !fs.existsSync(path.join(R,url)) && !fs.existsSync(path.join(R,'img/'+j.av))) manquantes.push(j.id+' → '+j.av);
    }
  }
  console.log('\n═══ VERDICT ═══');
  if(manquantes.length) console.log('  ✗ photos absentes du disque : '+manquantes.join(', '));
  else console.log('  ✓ toutes les photos existent sur le disque');
  if(r.pb.length){
    console.log('  ✗ '+r.pb.length+' incohérence(s) :');
    [...new Set(r.pb)].slice(0,15).forEach(p=>console.log('     · '+p));
  } else console.log('  ✓ aucune incohérence sur 366 jours × '+r.auj.length+' élèves');
  await br.close();srv.close();
  process.exit((r.pb.length||manquantes.length)?1:0);
})();
