#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"

CV_QA_OUT="${CV_QA_OUT:-/tmp/cv-qa}"
CV_QA_PORT="${CV_QA_PORT:-4173}"
CV_QA_URL="${CV_QA_URL:-http://localhost:${CV_QA_PORT}}"
CV_QA_DESKTOP_WIDTH="${CV_QA_DESKTOP_WIDTH:-1512}"
CV_QA_DESKTOP_HEIGHT="${CV_QA_DESKTOP_HEIGHT:-982}"
CV_QA_PDF_MAX_PAGES="${CV_QA_PDF_MAX_PAGES:-1}"
CV_QA_PDF_OUTPUT="${CV_QA_PDF_OUTPUT:-print/cv-preview.pdf}"
CV_QA_SERVER_LOG="${CV_QA_SERVER_LOG:-/tmp/cv-qa-http.log}"
CV_QA_SUMMARY="${CV_QA_SUMMARY:-$CV_QA_OUT/summary.txt}"
CV_QA_SQUARE_TOLERANCE="${CV_QA_SQUARE_TOLERANCE:-1}"

mkdir -p "$CV_QA_OUT"

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]] && kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

cd "$REPO_ROOT"

echo "Building app..."
npm run build >/dev/null

echo "Starting local server on ${CV_QA_PORT}..."
python3 -m http.server "$CV_QA_PORT" --directory dist >"$CV_QA_SERVER_LOG" 2>&1 &
SERVER_PID=$!

for _ in {1..30}; do
  if curl -fsS "$CV_QA_URL" >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

if ! curl -fsS "$CV_QA_URL" >/dev/null 2>&1; then
  echo "Failed to start local server. See $CV_QA_SERVER_LOG" >&2
  exit 1
fi

echo "Capturing desktop and iPhone views..."
CV_QA_OUT="$CV_QA_OUT" \
CV_QA_PORT="$CV_QA_PORT" \
CV_QA_URL="$CV_QA_URL" \
CV_QA_DESKTOP_WIDTH="$CV_QA_DESKTOP_WIDTH" \
CV_QA_DESKTOP_HEIGHT="$CV_QA_DESKTOP_HEIGHT" \
node "$SCRIPT_DIR/capture_views.cjs"

echo "Rendering PDF..."
CV_PDF_PORT="$CV_QA_PORT" \
CV_PDF_URL="$CV_QA_URL" \
CV_PDF_OUTPUT="$CV_QA_PDF_OUTPUT" \
node "$REPO_ROOT/.codex/skills/cv-pdf-render/scripts/render_pdf.cjs"

cp "$CV_QA_PDF_OUTPUT" "$CV_QA_OUT/cv-preview.pdf"

PDF_PAGES="unknown"
if command -v mdls >/dev/null 2>&1; then
  PDF_PAGES="$(mdls -raw -name kMDItemNumberOfPages "$CV_QA_PDF_OUTPUT" 2>/dev/null | tr -d '[:space:]')"
fi

if [[ "$PDF_PAGES" == "(null)" || -z "$PDF_PAGES" ]]; then
  PDF_PAGES="unknown"
fi

if command -v qlmanage >/dev/null 2>&1; then
  qlmanage -t -s 1500 -o "$CV_QA_OUT" "$CV_QA_PDF_OUTPUT" >/dev/null 2>&1 || true
  PDF_PREVIEW_BASENAME="$(basename "$CV_QA_PDF_OUTPUT").png"
  if [[ -f "$CV_QA_OUT/$PDF_PREVIEW_BASENAME" ]]; then
    mv -f "$CV_QA_OUT/$PDF_PREVIEW_BASENAME" "$CV_QA_OUT/pdf-page0.png"
  fi
fi

read -r FRAME_WIDTH FRAME_HEIGHT DELTA < <(
  node - "$CV_QA_OUT/metrics.json" <<'NODE'
const fs = require('fs')
const metricsPath = process.argv[2]
const raw = fs.readFileSync(metricsPath, 'utf8')
const json = JSON.parse(raw)
const frame = json?.measurements?.frame || {}
const width = Number(frame.width || 0)
const height = Number(frame.height || 0)
const delta = Math.abs(width - height)
process.stdout.write(`${width} ${height} ${delta}\n`)
NODE
)

PASS=true
FAILURES=()

if (( DELTA > CV_QA_SQUARE_TOLERANCE )); then
  PASS=false
  FAILURES+=("Desktop hero frame not square enough: width=${FRAME_WIDTH}, height=${FRAME_HEIGHT}, delta=${DELTA}")
fi

if [[ "$PDF_PAGES" != "unknown" ]] && (( PDF_PAGES > CV_QA_PDF_MAX_PAGES )); then
  PASS=false
  FAILURES+=("PDF page count too high: pages=${PDF_PAGES}, max=${CV_QA_PDF_MAX_PAGES}")
fi

{
  echo "CV visual QA summary"
  echo "URL: $CV_QA_URL"
  echo "Desktop viewport: ${CV_QA_DESKTOP_WIDTH}x${CV_QA_DESKTOP_HEIGHT}"
  echo "Hero frame: ${FRAME_WIDTH}x${FRAME_HEIGHT} (delta=${DELTA})"
  echo "PDF pages: ${PDF_PAGES}"
  echo "Desktop screenshot: $CV_QA_OUT/desktop.png"
  echo "iPhone screenshot: $CV_QA_OUT/iphone.png"
  if [[ -f "$CV_QA_OUT/pdf-page0.png" ]]; then
    echo "PDF page image: $CV_QA_OUT/pdf-page0.png"
  else
    echo "PDF page image: not generated"
  fi
  echo "PDF file: $CV_QA_OUT/cv-preview.pdf"
  if [[ "$PASS" == true ]]; then
    echo "Result: PASS"
  else
    echo "Result: FAIL"
    for item in "${FAILURES[@]}"; do
      echo "- $item"
    done
  fi
} >"$CV_QA_SUMMARY"

cat "$CV_QA_SUMMARY"

if [[ "$PASS" != true ]]; then
  exit 1
fi
