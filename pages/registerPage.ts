import {Page,expect} from "@playwright/test"
export default class RegisterPage
{
    constructor(public page:Page)
    {

    }
   async enterFirstName(firstName:string)
    {
        await this.page.locator("#input-firstname").fill(firstName);
    }
    async enterLastName(lastName:string)
    {
       await this.page.locator("input[name='lastname']").fill(lastName);
    }
    async enterEmail(email:string)
    {
       await  this.page.locator("input[name='email']").fill(email);
    }
    async enterTelephone(phone:string)
    {
        await this.page.locator("input[name='telephone']").fill(phone);
    }

    async enterPassword(password:string)
    {
     await   this.page.locator("input[name='password']").fill(password);
    }
    async enterConformPassword(password:string)
    {
       await this.page.locator("input[name='confirm']").fill(password);
    }

     isSubscribeChecked()
    {
      return   this.page.locator("#input-newsletter-no");
    }

    async clickTermsAndConditions()
    {
        await this.page.locator("input[name='agree']").dispatchEvent("click");
    }

    async clickContinueToRegister()
    {
        
            await this.page.click("input[value='Continue']")
              
    }


}