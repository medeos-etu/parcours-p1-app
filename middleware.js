/* ═══ LE VERROU DES FICHES — Edge Middleware Vercel, avant le fichier statique.
   Lucas, 05/09 : « le principal, c'est que personne n'ait accès à toutes les fiches sans
   le Pack Année complète ». Les comptes de l'app vivent sur l'appareil : le serveur ne
   peut pas vérifier le quota du jour. Ce qu'il PEUT faire : n'ouvrir une fiche que dans
   le cadre de l'app — l'iframe de la même origine — et fermer tout le reste : l'adresse
   tapée à la main, le lien partagé, l'intégration sur un autre site, l'aspirateur.
   Un lecteur outillé (console, curl avec les bons en-têtes) passe encore : la vraie
   protection viendra avec les comptes côté serveur. Ce verrou coupe les fuites réelles.
   Les navigateurs modernes posent Sec-Fetch-* eux-mêmes ; on n'ouvre que le cas exact. ═══ */
export const config = { matcher: ['/fiches/:path*'] };

export default function middleware(req) {
  const h = req.headers;
  /* La seule chose qui compte : la demande vient-elle de l'app elle-même (même origine) ?
     Adresse tapée → « none » ; lien depuis ailleurs → « cross-site » ; curl → rien. Tous fermés.
     (La première version exigeait aussi dest=iframe et bloquait l'app en vrai : testé le 05/09.) */
  const site = h.get('sec-fetch-site') || '';
  const ok = site === 'same-origin';
  if (ok) return;   /* rien à faire : Vercel sert le fichier */
  return new Response(
    '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex">' +
    '<title>Univers Medeos</title>' +
    '<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#FAF6F0;color:#1A1A2E;font-family:-apple-system,Segoe UI,Roboto,sans-serif;text-align:center;padding:24px">' +
    '<div><p style="font-size:18px;font-weight:800;margin:0 0 8px">Cette fiche s’ouvre dans l’app.</p>' +
    '<p style="margin:0 0 18px;color:#6B6455">Elle fait partie de ton Parcours, deux fiches par jour.</p>' +
    '<a href="/" style="display:inline-block;background:#6B46C1;color:#fff;text-decoration:none;font-weight:800;padding:12px 20px;border-radius:999px">Ouvrir l’app</a></div></body>',
    { status: 403, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } }
  );
}
