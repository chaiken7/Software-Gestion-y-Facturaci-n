import puppeteer from 'puppeteer';

describe('Capturas de Pantalla', () => {
  let browser: any
  let page: any
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    })

    const context = await browser.createIncognitoBrowserContext()
    page = await context.newPage()
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle0' })
  }, 10000)
  afterEach(async ()=>{
    await browser.close()
  })

  test('Captura de Pantalla', async () => {
    await page.pdf({
      path:'./capturar.pdf',
      format: 'A4',
      printBackground: true,
      margin:{
        top: '100px',
        bottom: '100px',
        right: '30px',
        left: '30px'
      }
    })
  }, 350000)
})