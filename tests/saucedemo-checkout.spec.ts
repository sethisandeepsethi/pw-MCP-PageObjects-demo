import { test, expect } from '@playwright/test';
import { LoginPage } from '../context/pageObjects/LoginPage';
import { ProductsPage } from '../context/pageObjects/ProductsPage';
import { CheckoutPage } from '../context/pageObjects/CheckoutPage';

test('SauceDemo: login, add 2 items to cart, and checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Navigate to site
  await loginPage.goto();

  // Step 2: Login
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Step 3: Add 2 items to cart
  await productsPage.addFirstNItemsToCart(2);
  await productsPage.goToCart();

  // Step 4: Checkout
  await checkoutPage.startCheckout();
  await checkoutPage.fillInformation('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();

  // Assert checkout complete
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
