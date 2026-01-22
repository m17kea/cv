#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/../../.." && pwd)"
PORT="${CV_PDF_PORT:-4173}"
LOG_FILE="${CV_PDF_LOG:-/tmp/cv-http.log}"

cd "$ROOT_DIR"

npm run build

python3 -m http.server "$PORT" --directory dist >"$LOG_FILE" 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT

CV_PDF_PORT="$PORT" node "skills/cv-pdf-render/scripts/render_pdf.cjs"
