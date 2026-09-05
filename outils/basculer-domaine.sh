#!/usr/bin/env bash
# ═══ LA BASCULE VERS parcours.medeos-sante.fr — une commande, des garde-fous.
#
# À lancer UNIQUEMENT quand l'enregistrement DNS est créé chez OVH :
#     parcours   A   76.76.21.21
#
# Ce que fait le script, dans l'ordre, et il s'arrête au premier doute :
#   1. vérifie que le sous-domaine résout bien vers Vercel et sert l'app en HTTPS ;
#   2. pose la redirection permanente de l'ancienne adresse vers la nouvelle (vercel.json),
#      relance le test de fumée, commite, déploie, puis VÉRIFIE la redirection en ligne ;
#   3. côté site : les deux liens vers l'app, la variable APP_UNIVERS_URL (l'adresse dans
#      l'email de rappel), linter, commit, push — puis vérifie les liens servis.
#
# Usage :  bash outils/basculer-domaine.sh            (tout)
#          bash outils/basculer-domaine.sh verifier   (seulement l'étape 1, sans rien changer)
set -euo pipefail

APP=/Users/lucascrepin/dev/parcours-p1-app
SITE=/Users/lucascrepin/dev/medeos-site
NEUF=parcours.medeos-sante.fr
VIEUX=parcours-p1-preview.vercel.app
IP=76.76.21.21

ok(){ printf '  ✓ %s\n' "$1"; }
non(){ printf '  ✗ %s\n' "$1"; exit 1; }

echo "═══ 1. Le sous-domaine répond-il ? ═══"
a=$(dig +short "$NEUF" A | head -1 || true)
c=$(dig +short "$NEUF" CNAME | head -1 || true)
if [ "$a" = "$IP" ]; then ok "DNS : $NEUF → $IP (entrée A)"
elif echo "$c" | grep -qi "vercel-dns.com"; then ok "DNS : $NEUF → $c (CNAME Vercel)"
elif [ -n "$a" ] || [ -n "$c" ]; then non "DNS : $NEUF pointe vers « ${a:-$c} » — attendu $IP (entrée A) ou un CNAME vers vercel-dns.com. Corrige l'entrée chez OVH."
else non "DNS : $NEUF ne répond pas encore — l'entrée OVH n'est pas active. Patiente quelques minutes et relance."; fi
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://$NEUF/index.html" 2>/dev/null); code=${code:-000}
[ "$code" = "200" ] || non "HTTPS : https://$NEUF/index.html répond $code — le certificat Vercel n'est peut-être pas encore émis. Réessaie dans 2-3 minutes."
ok "HTTPS : l'app est servie (200)"
# ON TÉLÉCHARGE D'ABORD, ON FILTRE ENSUITE. Avec « set -o pipefail », un « curl | grep -q »
# échoue quand il RÉUSSIT : grep s'arrête au premier motif trouvé, curl reçoit une rupture de
# tuyau, et pipefail propage son erreur. Piège vécu le 05/09 — le domaine était bon depuis le
# début. La page fait 3,3 Mo : le délai doit être large.
page=$(mktemp)
curl -s --max-time 60 "https://$NEUF/index.html" -o "$page" || non "la page n'a pas pu être téléchargée depuis $NEUF"
grep -q 'Univers Medeos' "$page" || grep -q 'parcours-des-mondes' "$page" || non "la page servie ne ressemble pas à l'app"
rm -f "$page"
ok "c'est bien l'app"
[ "${1:-}" = "verifier" ] && { echo; echo "Vérification seule : tout est prêt pour la bascule."; exit 0; }

echo "═══ 2. La redirection de l'ancienne adresse ═══"
cd "$APP"
cat > vercel.json <<JSON
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "$VIEUX" }],
      "destination": "https://$NEUF/\$1",
      "permanent": true
    }
  ]
}
JSON
ok "vercel.json écrit"
node outils/verifie-app.js 2>&1 | tail -2 | grep -q "erreurs : 0" || non "le test de fumée échoue — on ne déploie pas"
ok "test de fumée : 0 erreur"
git add vercel.json
git diff --cached --quiet || git commit -q -m "L'ancienne adresse redirige vers parcours.medeos-sante.fr

Redirection permanente de $VIEUX vers le sous-domaine, posée une fois
le DNS OVH actif et l'app servie en HTTPS sur la nouvelle adresse.

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
vercel deploy --prod --yes 2>&1 | grep -E "Aliased|Error" | head -2
sleep 8
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' --max-time 20 "https://$VIEUX/?src=test#biblio" || echo "000")
echo "$r" | grep -qE "^30[1278] https://$NEUF/" || non "la redirection ne répond pas comme attendu : $r"
ok "redirection en ligne : $r"

echo "═══ 3. Le site : liens et adresse de l'email ═══"
cd "$SITE"
sed -i '' "s#https://$VIEUX#https://$NEUF#g" components/ressources/FreeContentCards.tsx components/dashboard/CodeAnneeCard.tsx
grep -q "$NEUF" components/ressources/FreeContentCards.tsx && grep -q "$NEUF" components/dashboard/CodeAnneeCard.tsx || non "les liens n'ont pas été remplacés"
ok "deux liens basculés"
if ! vercel env ls production 2>/dev/null | grep -q "APP_UNIVERS_URL"; then
  printf 'https://%s' "$NEUF" | vercel env add APP_UNIVERS_URL production >/dev/null 2>&1 && ok "APP_UNIVERS_URL posée (email de rappel)" || non "impossible de poser APP_UNIVERS_URL"
else ok "APP_UNIVERS_URL déjà posée"; fi
npx eslint components/ressources/FreeContentCards.tsx components/dashboard/CodeAnneeCard.tsx 2>&1 | grep -q " error " && non "eslint signale une erreur" || ok "eslint : pas d'erreur"
git add components/ressources/FreeContentCards.tsx components/dashboard/CodeAnneeCard.tsx
git diff --cached --quiet || git commit -q -m "Le site envoie vers parcours.medeos-sante.fr

La carte Bibliothèque des ressources gratuites et la carte du code Année
complète pointent vers le sous-domaine ; APP_UNIVERS_URL donne la même
adresse à l'email de rappel.

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main 2>&1 | tail -1 || ok "rien de nouveau à pousser"
echo "  … le site se reconstruit (3 minutes environ)."
for i in $(seq 1 20); do
  sleep 15
  if curl -s --max-time 20 "https://medeos-sante.fr/ressources" | grep -q "$NEUF"; then ok "les liens du site servent la nouvelle adresse"; break; fi
  [ "$i" = "20" ] && echo "  ⚠ pas encore visible après 5 min — vérifie dans quelques minutes : curl -s https://medeos-sante.fr/ressources | grep $NEUF"
done
echo
echo "Bascule terminée. Ancienne adresse → redirigée ; site → nouvelle adresse ; email de rappel → nouvelle adresse."
