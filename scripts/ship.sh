#!/usr/bin/env bash
# docs.prevail.sh is retired: every path 301s to glyph.fru.dev/docs, /install stays a 302 to the installer.
# Vercel project prevail-docs, team fru-dev3. Deploy only committed, pushed code. Never Netlify.
set -euo pipefail
cd "$(dirname "$0")/.."
[ -f .vercel/project.json ] || vercel link --yes --project prevail-docs --scope fru-dev3
vercel build --prod --yes
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
mkdir "$STAGE/.vercel"
cp -R .vercel/project.json .vercel/output "$STAGE/.vercel/"
(cd "$STAGE" && vercel deploy --prebuilt --prod --scope fru-dev3 >/dev/null)
echo "checking the live site"
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' https://docs.prevail.sh/getting-started)
[ "$r" = "301 https://glyph.fru.dev/docs" ] || { echo "docs.prevail.sh answered $r"; exit 1; }
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' https://docs.prevail.sh/install)
[ "$r" = "302 https://prevail.sh/install" ] || { echo "/install answered $r"; exit 1; }
echo "live: docs.prevail.sh redirects to https://glyph.fru.dev/docs"
