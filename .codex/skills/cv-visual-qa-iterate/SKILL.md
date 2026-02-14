---
name: cv-visual-qa-iterate
description: Validate and iterate CV visuals across desktop web, iPhone web, and PDF output until layout goals are satisfied. Use when changing styles/components that affect hero image sizing, responsive layout, or print pagination.
---

# CV Visual QA (Iterative)

Use this skill to run the same verification loop after each UI/style change.

## Goals

- Desktop web: hero photo frame is square (`width == height`) and visually balanced.
- iPhone web: layout remains readable and correctly stacked.
- PDF: generated preview stays within target page count (default `1`).

## Run One QA Cycle

From repo root:

```bash
bash .codex/skills/cv-visual-qa-iterate/scripts/qa_cycle.sh
```

## Outputs

Artifacts are written to `/tmp/cv-qa` by default:

- `desktop.png`
- `iphone.png`
- `pdf-page0.png`
- `metrics.json` (includes measured hero/photo dimensions)
- `summary.txt`

## Pass Criteria

The cycle fails when either is true:

- Desktop photo frame is not square within tolerance (`abs(width - height) > 1`).
- PDF page count exceeds `CV_QA_PDF_MAX_PAGES` (default `1`).

## Iteration Loop

1. Run one QA cycle.
2. Inspect screenshots and `summary.txt`.
3. Patch styles/components.
4. Re-run until all checks pass.

## Useful Overrides

```bash
CV_QA_OUT=/tmp/cv-qa-run2 \
CV_QA_PORT=4173 \
CV_QA_DESKTOP_WIDTH=1512 \
CV_QA_DESKTOP_HEIGHT=982 \
CV_QA_PDF_MAX_PAGES=1 \
bash .codex/skills/cv-visual-qa-iterate/scripts/qa_cycle.sh
```
