import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(itemName: string) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('button:has-text("Add to cart")');
  }

  async addFirstNItemsToCart(n: number) {
    const addButtons = await this.page.$$('button:has-text("Add to cart")');
    for (let i = 0; i < n && i < addButtons.length; i++) {
      await addButtons[i].click();
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
