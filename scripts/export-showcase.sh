#!/usr/bin/env bash
set -euo pipefail
# Export only audited, explicitly approved dist/ to the private display repo.
REPO="${1:-XiakaiPan/research-portfolio}"
if [[ ! "$REPO" =~ ^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$ ]]; then echo "Expected owner/repo" >&2; exit 2; fi
for bin in gh git node npm; do command -v "$bin" >/dev/null || { echo "Install $bin" >&2; exit 1; }; done
gh auth status >/dev/null
if [[ "$(gh repo view "$REPO" --json isPrivate --jq '.isPrivate')" != true ]]; then echo "Refusing non-private target" >&2; exit 1; fi
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
npm ci
npm audit --audit-level=moderate
npm run check
npm run release:check
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
gh repo clone "$REPO" "$TMP/site"
git -C "$TMP/site" switch main
rm -rf "$TMP/site/public"
mkdir -p "$TMP/site/public"
cp -R "$ROOT/dist/." "$TMP/site/public/"
cat > "$TMP/site/README.md" <<'MD'
# Research Portfolio — reviewed deployment snapshot

Only public-facing audited static files are in public/.
Private research source, unpublished draft archives, authoring scripts, and Git history remain in XiakaiPan/XiakaiPan.github.io.
The linked web host makes public/ available to visitors despite this repository being Private.
MD
git -C "$TMP/site" add -A
if git -C "$TMP/site" diff --cached --quiet; then
  echo "Reviewed output unchanged."
else
  git -C "$TMP/site" commit -m "Export reviewed portfolio build"
  git -C "$TMP/site" push origin main
fi
echo "Reviewed dist/ exported without source files or source history."
