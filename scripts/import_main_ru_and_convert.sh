#!/usr/bin/env bash
set -euo pipefail

SOURCE_BRANCH="${SOURCE_BRANCH:-main-ru}"
TARGET_BRANCH="${TARGET_BRANCH:-trik-help-doc}"
REMOTE="${REMOTE:-origin}"
WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

echo "=== Import TRIK Help from ${REMOTE}/${SOURCE_BRANCH} and convert to Docusaurus ==="

git fetch "$REMOTE" "$SOURCE_BRANCH" "$TARGET_BRANCH"

git worktree add --detach "$WORKDIR/source" "${REMOTE}/${SOURCE_BRANCH}"

TRIK_HELP_SOURCE="$WORKDIR/source" TRIK_HELP_SITE="$(pwd)" node migration/convert-full.mjs

npm ci
npm run generate-sidebars
npm run validate-sidebars
npm run build

echo "=== Conversion complete ==="
echo "Review changes, then commit/push to ${TARGET_BRANCH}."
