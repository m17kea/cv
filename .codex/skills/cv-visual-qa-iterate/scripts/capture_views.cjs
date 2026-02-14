const fs = require('fs/promises')
const path = require('path')
const { chromium, devices } = require('playwright')

const outDir = process.env.CV_QA_OUT || '/tmp/cv-qa'
const port = process.env.CV_QA_PORT || '4173'
const url = process.env.CV_QA_URL || `http://localhost:${port}`
const desktopWidth = Number.parseInt(process.env.CV_QA_DESKTOP_WIDTH || '1512', 10)
const desktopHeight = Number.parseInt(process.env.CV_QA_DESKTOP_HEIGHT || '982', 10)

async function captureDesktop(browser) {
  const page = await browser.newPage({
    viewport: { width: desktopWidth, height: desktopHeight },
  })

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.waitForSelector('.hero-photo-frame', { timeout: 10_000 })
  await page.screenshot({
    path: path.join(outDir, 'desktop.png'),
    fullPage: true,
  })

  const metrics = await page.evaluate(() => {
    const hero = document.querySelector('.hero')
    const frame = document.querySelector('.hero-photo-frame')
    const image = document.querySelector('.hero-photo')

    const toBox = (el) => {
      if (!el) {
        return null
      }
      const rect = el.getBoundingClientRect()
      return {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      }
    }

    return {
      hero: toBox(hero),
      frame: toBox(frame),
      image: toBox(image),
    }
  })

  await page.close()
  return metrics
}

async function captureIphone(browser) {
  const page = await browser.newPage({
    ...devices['iPhone 13'],
  })

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({
    path: path.join(outDir, 'iphone.png'),
    fullPage: true,
  })
  await page.close()
}

async function main() {
  await fs.mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  try {
    const desktop = await captureDesktop(browser)
    await captureIphone(browser)

    await fs.writeFile(
      path.join(outDir, 'metrics.json'),
      JSON.stringify(
        {
          url,
          desktopViewport: {
            width: desktopWidth,
            height: desktopHeight,
          },
          measurements: desktop,
        },
        null,
        2
      ) + '\n'
    )
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
