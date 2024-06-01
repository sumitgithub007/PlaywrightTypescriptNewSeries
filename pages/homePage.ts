import { Page } from "@playwright/test";
export default class HomePage{

constructor(public page:Page)
{
    

}

async hoverMegaMenu()
{
    await this.page.locator("//*[contains(text(),'Mega Menu')]").hover();
}

 async clickAppleProduct()
{
    await this.page.locator("//a[@title='Apple']").click();
}

}

