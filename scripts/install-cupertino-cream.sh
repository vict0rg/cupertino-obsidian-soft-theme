#!/usr/bin/env bash
# Cupertino Cream for Obsidian — installer for a local Linux vault.
# Downloads the theme's official files from its public GitHub source.
set -euo pipefail
VAULT="${1:-$HOME/Dropbox/500-OBSIDIAN}"
BASE="https://raw.githubusercontent.com/vict0rg/obsidian-cupertino-cream/main"
TARGET="$VAULT/.obsidian/themes/Cupertino Cream"
if [[ ! -d "$VAULT/.obsidian" ]]; then
  echo "Error: Obsidian vault not found: $VAULT" >&2
  echo "Usage: bash install-cupertino-cream.sh /path/to/vault" >&2
  exit 2
fi
command -v curl >/dev/null || { echo "Error: curl is required" >&2; exit 2; }
mkdir -p "$TARGET"
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
for item in manifest.json theme.css; do
  curl --fail --location --silent --show-error --retry 3 "$BASE/$item" -o "$tmpdir/$item"
  test -s "$tmpdir/$item"
done
grep -q '"name": "Cupertino Cream"' "$tmpdir/manifest.json"
cp "$tmpdir/manifest.json" "$TARGET/manifest.json"
cp "$tmpdir/theme.css" "$TARGET/theme.css"
printf 'Installed Cupertino Cream into: %s\n' "$TARGET"
echo 'Open Obsidian > Settings > Appearance > Themes and select Cupertino Cream.'
echo 'Disable any old Pixel-Blue or Cupertino Cream preview snippets to avoid conflicts.'
