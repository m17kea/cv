---
name: cv-pdf-render
description: Regenerate the CV PDF preview in this repo using the Vite build, a local static server, and Playwright. Use when the user asks to rebuild or refresh print/cv-preview.pdf or validate PDF output.
---

# Regenerate CV PDF

## Run the script

From the repo root:

```bash
bash skills/cv-pdf-render/scripts/render_pdf.sh
```

## Environment variables

- `CV_PDF_PORT`: Override the local server port (default `4173`).
- `CV_PDF_URL`: Override the URL Playwright opens (default `http://localhost:$CV_PDF_PORT`).
- `CV_PDF_OUTPUT`: Override the output path (default `print/cv-preview.pdf`).
- `CV_PDF_LOG`: Override the http server log path (default `/tmp/cv-http.log`).

## Notes

- The script runs `npm run build` before rendering.
- The local server is started and stopped automatically.
