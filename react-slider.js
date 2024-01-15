const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://mui.com/material-ui/react-slider/');

  const sliderValue = await page.$eval('.css-10sddac > span:nth-child(2) > span:nth-child(2)', (slider) => {
    return parseInt(slider.style.width);
  });

  console.log('Slider Value:', sliderValue);

  await browser.close();
})();
