#!/usr/bin/env bash
set -euo pipefail
# Create only a private display-artifact repo. The source and PDFs are not copied.
REPO="${1:-XiakaiPan/research-portfolio}"
if [[ ! "$REPO" =~ ^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$ ]]; then echo "Expected owner/repo" >&2; exit 2; fi
for bin in gh git; do command -v "$bin" >/dev/null || { echo "Install $bin" >&2; exit 1; }; done
gh auth status >/dev/null
if gh repo view "$REPO" >/dev/null 2>&1; then
  if [[ "$(gh repo view "$REPO" --json isPrivate --jq '.isPrivate')" != true ]]; then echo "Not private: $REPO" >&2; exit 1; fi
  echo "Existing private showcase: https://github.com/$REPO"
  exit 0
fi
gh repo create "$REPO" --private --description "Reviewed public portfolio artifact only; no private research source"
if [[ "$(gh repo view "$REPO" --json isPrivate --jq '.isPrivate')" != true ]]; then echo "Privacy validation failed" >&2; exit 1; fi
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
gh repo clone "$REPO" "$TMP/site"
git -C "$TMP/site" switch -c main
mkdir -p "$TMP/site/public"
cat > "$TMP/site/public/index.html" <<'HTML'
<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex,nofollow">
<title>Xiakai Pan — Research Portfolio</title>
<h1>Research portfolio under review</h1>
<p>Research materials are being reviewed for public release.</p>
HTML
cat > "$TMP/site/README.md" <<'MD'
# Research Portfolio — deployment artifact only

Private GitHub repository containing only reviewed public-facing static assets in public/.
The full editable website, private documents, research drafts, and tools remain exclusively in XiakaiPan/XiakaiPan.github.io.
Any content uploaded to a web host is public regardless of this GitHub repository's privacy.
MD
git -C "$TMP/site" add README.md public
git -C "$TMP/site" commit -m "Initialize private showcase with safe placeholder"
git -C "$TMP/site" push -u origin main
echo "Private showcase created: https://github.com/$REPO"
echo "Only harmless noindex placeholder uploaded."
