import { Page ,expect} from "@playwright/test";
export default class LoginPage{

    constructor(public page:Page) {
        

    }

    async login(email:string,password:string)
    {
      await this.enterEmail(email);
      await this.enterLoginPassword("Sumit@123");
      await this.clickLoginButton();
      await expect(this.page.locator("//a[@title='Poco Electro']")).toBeVisible();
      expect(await this.page.title()).toBe("My Account");  

    }

    async enterEmail(emailAddress:string)
    {
        await this.page.locator("input[name='email']").fill(emailAddress);
    }
    
    async enterLoginPassword(password:string)
    {
        await this.page.locator("input[name='password']").fill(password);
    }

    async clickLoginButton()
    {
        await this.page.click("input[value='Login']");
    }

}