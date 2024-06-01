import {expect, test} from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import MobilesPage from "../pages/mobilesPage";
import { log } from "console";

const email = `goyalsumit${Date.now()}@gmail.com`;

test("Register test_01",async ({page,baseURL})=>
{
  const register=new RegisterPage(page);
  await page.goto(`${baseURL}route=account/register`);
  await register.enterFirstName("Sumit");
  await register.enterLastName("Goyal");
  await register.enterEmail(email);
  await register.enterTelephone("9899876543");
  await register.enterPassword("Sumit@123");
  await register.enterConformPassword("Sumit@123");
 await expect(register.isSubscribeChecked()).toBeChecked();
  await register.clickTermsAndConditions();
  await register.clickContinueToRegister();
  const msg = page.locator("//h1[@class='page-title my-3']");
  await expect(msg).toBeVisible(); //will definitely wait 10 seconds

    
})


test("Login test_02",async ({page,baseURL})=>
    {
      const login=new LoginPage(page);
      await page.goto(`${baseURL}route=account/login`);
      await login .enterEmail(email);
      await login.enterLoginPassword("Sumit@123");
      await login.clickLoginButton();
      await expect(page.locator("//a[@title='Poco Electro']")).toBeVisible();
      expect(await page.title()).toBe("My Account");  
    })
    
    test("Add to cart  test_03",async ({page,baseURL})=>
        {
          const login_=new LoginPage(page);
          const homepage = new HomePage(page);
          const mobilespage = new MobilesPage(page);
          await page.goto(`${baseURL}route=account/login`);
          await login_.login(email,"Sumit@123");
          await homepage.hoverMegaMenu();
          await homepage.clickAppleProduct();
          await mobilespage.addFirstProductToCart();
          await mobilespage.WaitForToastVisible_and_click();
        })
    






