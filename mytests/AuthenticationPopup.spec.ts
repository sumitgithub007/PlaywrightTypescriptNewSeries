import {test,expect,Browser,Page, Locator, BrowserContext} from '@playwright/test'
import { createPublicKey } from 'crypto';
import { channel } from 'diagnostics_channel';
import {webkit,chromium,firefox}  from 'playwright'
import { Context } from 'vm';
 
test("Authentication Popup Handle",async()=>{

      const browser:Browser =  await chromium.launch({headless:false,channel:"chrome"});
      const context:BrowserContext = await browser.newContext();
      const page:Page  = await context.newPage();
      
      const username = "admin";
      const passwrod = "admin";

      const authentication = 'Basic ' + btoa(username+':'+passwrod);
      await page.setExtraHTTPHeaders({ Authorization:authentication });
      
      await page.goto("https://the-internet.herokuapp.com/basic_auth");

      // await page.locator("//div[@class='example']/h3").allInnerTexts().then((da)=>{
      //   console.log(da);
      // });
      
       
    await  page.locator("//div[@class='example']/h3").textContent().then((data)=>{
       
       console.log("value is ="+data);
    
      });
      

     await browser.close();
      
     
      

})
