/* Univers Medeos — service worker minimal : réseau d'abord, cache en secours.
   L'index n'est JAMAIS servi depuis le cache si le réseau répond (les mises à jour passent toujours). */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||!e.request.url.startsWith('http')) return;
  e.respondWith(
    fetch(e.request).then(r=>{
      const c=r.clone();
      caches.open('mu-v1').then(k=>k.put(e.request,c)).catch(()=>{});
      return r;
    }).catch(()=>caches.match(e.request))
  );
});
