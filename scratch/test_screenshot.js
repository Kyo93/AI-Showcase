const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });

  // Slide 1 (Cover)
  console.log('Navigating to Cover Slide...');
  await page.goto('http://localhost:8000/#/0', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/after_slide_1_header_test.png' });

  // Slide 3 (Team Needs)
  console.log('Navigating to Slide 3...');
  await page.goto('http://localhost:8000/#/2', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  // press keys to show fragments
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/after_slide_3_header_test.png' });

  // Slide 4 (AI Update)
  console.log('Navigating to Slide 4...');
  await page.goto('http://localhost:8000/#/3', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/after_slide_4.png' });

  await browser.close();
  console.log('Done!');
})();
