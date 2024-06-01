import { Page, expect } from "@playwright/test";
import { strict } from "assert";
export default class MobilesPage{

    constructor(public page:Page)
    {

    }

  async  addFirstProductToCart()
    {
        
       await expect(this.page.locator("//div[@class='image']/a").first()).toBeVisible();
       await this.page.locator("//div[@class='image']/a").first().hover();
       await expect(this.page.locator("//button[@title='Add to Cart']").first()).toBeVisible();
       await this.page.locator("//button[@title='Add to Cart']").first().click();

    }

    async WaitForToastVisible_and_click()
    {

        const toast = this.page.locator("//a[.='View Cart ']");
       await expect(toast).toBeVisible();
       await toast.click();
       await expect(this.page.locator("//*[text()='Product Name']")).toBeVisible();
        //return toast;

    }


}