import {test,expect,Browser,Page, Locator, BrowserContext} from '@playwright/test'
import { createPublicKey } from 'crypto';
import { channel } from 'diagnostics_channel';
import {webkit,chromium,firefox}  from 'playwright'
import { Context } from 'vm';

test.skip('login test',async()=>{ //passing a callback function
 
    
  const browser:Browser = await chromium.launch({headless:false,channel:"chrome"})
  const page:Page = await browser.newPage();
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const email:Locator = page.locator("//input[@name='email']");
   const pass:Locator = page.locator("//input[@name='password']");
    const loginBtn:Locator = page.locator("[value='Login']");
   await email.fill("pwtest@opencart.com");
    await pass.fill("playwright@123");
    await loginBtn.click();
    const title = await page.title();
    console.log(title);

    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const screenshotPath = `homepage_${timestamp}.png`;
    await page.screenshot({ path: screenshotPath });

    
     expect(title).toEqual("My Account");
   await browser.close();

})

test.skip('Fill Register Form test',async()=>{ //passing a callback function
 
    
    const browser:Browser = await chromium.launch( {headless:false,channel:"chrome",args: ['--incognito=false']})
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();


     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
     await page.locator("//input[@name='firstname']").click();
     await page.evaluate((text) => navigator.clipboard.writeText(text), "Sumit");

     await page.focus('body'); // Ensure the page has focus
      await page.keyboard.down('Control');
    await page.keyboard.press('V');
      await page.keyboard.up('Control');
      await page.keyboard.down('Tab');
      await page.keyboard.up('Tab');

      await page.evaluate((text) => navigator.clipboard.writeText(text), "Goyal");
      await page.keyboard.down('Control');
    await page.keyboard.press('V');
      await page.keyboard.up('Control');
      await page.keyboard.down('Tab');
      await page.keyboard.up('Tab');

      await page.evaluate((text) => navigator.clipboard.writeText(text), "goyalsuomit319@gmail.com");
      await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');


    await page.evaluate((text) => navigator.clipboard.writeText(text), "8319690284");
    await page.keyboard.down('Control');
  await page.keyboard.press('V');
  await page.keyboard.up('Control');
  await page.keyboard.down('Tab');
  await page.keyboard.up('Tab');

  await page.evaluate((text) => navigator.clipboard.writeText(text), "goyalsumit319@gmail.com");
  await page.keyboard.down('Control');
await page.keyboard.press('V');
await page.keyboard.up('Control');
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');


await page.evaluate((text) => navigator.clipboard.writeText(text), "goyalsumit319@gmail.com");
await page.keyboard.down('Control');
await page.keyboard.press('V');

await page.keyboard.down('Tab');
await page.keyboard.up('Tab');
await page.locator("//input[@type='checkbox']").click();
await page.locator("input[value='Continue']").click();

await new Promise(()=>{});


  })



test("Authentication Popup Handle",async()=>{

      const browser:Browser =  await chromium.launch({headless:false,channel:"chrome"});
      const context:BrowserContext = await browser.newContext();
      const page:Page  = await context.newPage();
      
      const username = "admin";
      const passwrod = "admin";

      const authentication = 'Basic ' + btoa(username+':'+passwrod);
      await page.setExtraHTTPHeaders({ Authorization:authentication });
      
      await page.goto("https://the-internet.herokuapp.com/basic_auth");

      await new Promise(()=>{});

})
