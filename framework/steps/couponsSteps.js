const {
  Given, When, Then, After,
} = require('@wdio/cucumber-framework');
const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const itemsCategory = require('../page-objects/awesome-shop-pages/itemsCategory.page');
const shoppingCart = require('../page-objects/awesome-shop-pages/shoppingCart.page');

const homePage = new HomePage();

After({ tags: '@clearCart' }, async () => {
  await itemsCategory.clearCart();
});
Given('User opens shop', async () => {
  await homePage.open();
});
When('User opens {string} in {string}', async (subcategory, category) => {
  await itemsCategory.selectItemCategory(category, subcategory);
});
When('User adds {string} item to cart', async (itemName) => {
  const item = await itemsCategory.getItemByName(itemName);
  await item.addToCart();
});
When('User opens cart', async () => {
  await itemsCategory.openCart();
});
When('User applies {string} coupon', async (coupon) => {
  await shoppingCart.applyCoupon(coupon);
});
Then('Message with text {string} appeared', async (notificationText) => {
  await expect(await shoppingCart.notification).toHaveTextContaining(notificationText);
});
Then('Item price {string} should be equal to {float}', async (kindOfPrice, price) => {
  await expect(await shoppingCart.getFinalPrice(kindOfPrice)).toBeCloseTo(price);
});
