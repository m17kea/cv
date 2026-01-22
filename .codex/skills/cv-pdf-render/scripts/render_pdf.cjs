const { chromium } = require('playwright')

const port = process.env.CV_PDF_PORT || '4173'
const url = process.env.CV_PDF_URL || `http://localhost:${port}`
const output = process.env.CV_PDF_OUTPUT || 'print/cv-preview.pdf'

async function render() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.pdf({ path: output, format: 'A4', printBackground: true })
  await browser.close()
}

render().catch((error) => {
  console.error(error)
  process.exit(1)
})
