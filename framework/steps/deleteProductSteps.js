const { Given, When, Then } = require('@wdio/cucumber-framework');

const CartTable = require('../page-objects/awesome-shop-pages/components/cartTable');
const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../page-objects/awesome-shop-pages/itemsCategory.page');
const shoppingCartPage = require('../page-objects/awesome-shop-pages/shoppingCart.page');

const cartTable = new CartTable();
const homePage = new HomePage();
const itemPage = new ItemPage();

Given('Variety of products in the best online store', async () => {
  await homePage.open();
});

Given('I add {string} to my shopping cart', async (product) => {
  await homePage.selectItemCategory('Desktops', 'Mac');
  await itemsCategoryPage.addItemToCart(product);
});

When('I changed my mind and delete unnecessary product from the shopping cart', async () => {
  await itemPage.shoppingCartNotificationLink();
  await cartTable.remove();
});

Then('I see sad message {string}', async (shoppingCartEmptyMessage) => {
  expect(await shoppingCartPage.emptyNotification()).toBe(shoppingCartEmptyMessage);
});

Then('I see that my shopping cart is empty - {int}', async (shoppingCartEmpty) => {
  expect(await homePage.quantityItemsInShoppingCart()).toBe(shoppingCartEmpty);
});
