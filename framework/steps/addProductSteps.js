const { Given, When, Then } = require('@wdio/cucumber-framework');

const CartTable = require('../page-objects/awesome-shop-pages/components/cartTable');
const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../page-objects/awesome-shop-pages/itemsCategory.page');

const homePage = new HomePage();
const cartTable = new CartTable();
const itemPage = new ItemPage();

Given('Variety of products in the best online store', async () => {
  await homePage.open();
  await homePage.selectItemCategory('Desktops', 'Show All Desktops');
  await itemsCategoryPage.chooseCategory('Mac');
});

When('I add {int} dream product {string} to the shopping cart', async (quantity, product) => {
  await itemPage.addItemWithQuantityToCart(product, quantity);
});

Then('I see success notification {string}', async (successNotification) => {
  expect(await itemPage.notificationText()).toHaveText(successNotification);
});

Then('I see shopping cart with chosen {int} {string}', async (quantity, product) => {
  const iMacPrice = await itemPage.itemPrice();
  await itemPage.shoppingCartNotificationLink();
  expect(await cartTable.quantityValue()).toBe(quantity);
  expect(await cartTable.nameOfProduct()).toBe(product);
  expect(await cartTable.productUnitPrice()).toBe(iMacPrice);
  expect(await cartTable.productTotalPrice()).toBe(iMacPrice);
});
