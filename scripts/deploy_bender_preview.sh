#!/usr/bin/env bash
set -euo pipefail

HOST="${BENDER_HOST:-139.100.205.209}"
DEPLOY_USER="${BENDER_DEPLOY_USER:-deploy}"
ROOT_USER="${BENDER_ROOT_USER:-root}"
PORT="${BENDER_PORT:-22}"
SSH_KEY="${BENDER_SSH_KEY:-/root/.openclaw/credentials/id_bender_trik_help}"
RELEASES_DIR="${BENDER_RELEASES_DIR:-/var/www/help.trikset.com.releases}"
CURRENT_LINK="${BENDER_CURRENT_LINK:-/var/www/help.trikset.com}"
RELEASE_ID="${1:-$(date -u +%Y%m%dT%H%M%SZ)}"
REMOTE_RELEASE="${RELEASES_DIR}/${RELEASE_ID}"

SSH_OPTS=(-i "$SSH_KEY" -p "$PORT" -o BatchMode=yes -o StrictHostKeyChecking=accept-new)
DEPLOY_TARGET="${DEPLOY_USER}@${HOST}"
ROOT_TARGET="${ROOT_USER}@${HOST}"

if [[ ! -f "$SSH_KEY" ]]; then
  echo "ERROR: SSH key not found: $SSH_KEY" >&2
  exit 2
fi

if [[ ! -d build ]]; then
  echo "ERROR: build/ not found. Run npm run build first." >&2
  exit 2
fi

case "$RELEASES_DIR" in
  "$CURRENT_LINK"|"$CURRENT_LINK"/*)
    echo "ERROR: RELEASES_DIR must not be inside CURRENT_LINK symlink path." >&2
    echo "Use /var/www/help.trikset.com.releases, not /var/www/help.trikset.com/releases." >&2
    exit 2
    ;;
esac

echo "=== TRIK Help preview deploy ==="
echo "Target: ${DEPLOY_TARGET}"
echo "Release: ${REMOTE_RELEASE}"
echo "Current link: ${CURRENT_LINK}"

ssh "${SSH_OPTS[@]}" "$ROOT_TARGET" "set -euo pipefail; mkdir -p '$RELEASES_DIR'; rm -rf '$REMOTE_RELEASE.tmp' '$REMOTE_RELEASE'; mkdir -p '$REMOTE_RELEASE.tmp'; chown -R ${DEPLOY_USER}:${DEPLOY_USER} '$RELEASES_DIR'"
rsync -az --delete -e "ssh -i '$SSH_KEY' -p '$PORT' -o BatchMode=yes -o StrictHostKeyChecking=accept-new" build/ "${DEPLOY_TARGET}:${REMOTE_RELEASE}.tmp/"
ssh "${SSH_OPTS[@]}" "$ROOT_TARGET" "set -euo pipefail; mv '$REMOTE_RELEASE.tmp' '$REMOTE_RELEASE'; chown -R ${DEPLOY_USER}:${DEPLOY_USER} '$REMOTE_RELEASE'; ln -sfn '$REMOTE_RELEASE' '$CURRENT_LINK'; readlink -f '$CURRENT_LINK'"

BASE_URL="${SMOKE_BASE_URL:-https://help-new.trikset.com}"
for path in / /studio/interface/ /admin/preview.js; do
  code=$(curl -ksS -o /dev/null -w '%{http_code}' "${BASE_URL}${path}")
  echo "smoke ${path} -> ${code}"
  case "$path:$code" in
    /admin/preview.js:200|/:200|/studio/interface/:200) ;;
    *) echo "ERROR: smoke failed for ${path}: ${code}" >&2; exit 1 ;;
  esac
done

if ! curl -ksS "${BASE_URL}/admin/preview.js" | grep -q "trik-html-image"; then
  echo "ERROR: live preview.js does not contain trik-html-image marker" >&2
  exit 1
fi

echo "=== DEPLOY COMPLETE: ${RELEASE_ID} ==="
