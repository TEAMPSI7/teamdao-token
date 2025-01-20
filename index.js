import { launch } from 'puppeteer';

(async () => {
     const browser = await launch();
     const page = await browser.newPage();

     // Set the viewport size
     await page.setViewport({
          width: 1458,
          height: 820,
     });

     //  Change the path like this "file:///Users/elwyn/Documents/PROJECTS/SnipeCard/index.html"
     await page.goto('#/');
     await page.screenshot({ path: 'screenshot.png' }); // Save as image

     await browser.close();
})();
