#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"

CV_DEPLOY_PROFILE="${CV_DEPLOY_PROFILE:-cc}"
CV_DEPLOY_STACK="${CV_DEPLOY_STACK:-CvSiteStack}"
CV_DEPLOY_INFRA_DIR="${CV_DEPLOY_INFRA_DIR:-infra}"
CV_DEPLOY_SITE_URL="${CV_DEPLOY_SITE_URL:-https://armitage.cloud}"
CV_DEPLOY_REQUIRE_APPROVAL="${CV_DEPLOY_REQUIRE_APPROVAL:-never}"
CV_DEPLOY_SKIP_INFRA_INSTALL="${CV_DEPLOY_SKIP_INFRA_INSTALL:-0}"
CV_DEPLOY_SKIP_VERIFY="${CV_DEPLOY_SKIP_VERIFY:-0}"

log() {
  printf '%s\n' "$*"
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    log "Missing required command: $1"
    exit 1
  fi
}

require_cmd aws
require_cmd npm
require_cmd npx
require_cmd curl

INFRA_PATH="$REPO_ROOT/$CV_DEPLOY_INFRA_DIR"
if [[ ! -d "$INFRA_PATH" ]]; then
  log "Infra directory not found: $INFRA_PATH"
  exit 1
fi

log "Checking AWS identity with profile '$CV_DEPLOY_PROFILE'..."
aws --profile "$CV_DEPLOY_PROFILE" sts get-caller-identity >/dev/null

cd "$REPO_ROOT"
log "Building frontend..."
npm run build

cd "$INFRA_PATH"
if [[ "$CV_DEPLOY_SKIP_INFRA_INSTALL" != "1" ]]; then
  log "Installing infra dependencies..."
  npm install --no-audit --no-fund
fi

log "Deploying stack '$CV_DEPLOY_STACK'..."
npx cdk deploy \
  --profile "$CV_DEPLOY_PROFILE" \
  "$CV_DEPLOY_STACK" \
  --require-approval "$CV_DEPLOY_REQUIRE_APPROVAL"

if [[ "$CV_DEPLOY_SKIP_VERIFY" != "1" ]]; then
  log "Verifying live site: $CV_DEPLOY_SITE_URL"
  status="$(curl -s -o /dev/null -w "%{http_code}" "$CV_DEPLOY_SITE_URL")"
  if [[ "$status" -lt 200 || "$status" -ge 400 ]]; then
    log "Verification failed: HTTP $status from $CV_DEPLOY_SITE_URL"
    exit 1
  fi
  log "Verification passed: HTTP $status"
fi

log "Deploy complete."
