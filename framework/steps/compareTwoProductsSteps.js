const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../page-objects/awesome-shop-pages/itemsCategory.page');

const homePage = new HomePage();
const itemPage = new ItemPage();

Given('Variety of products in the best online store', async () => {
  await homePage.open();
});

When('I have had great difficulty choosing {string} and {string} to compare', async (firstProduct, secondProduct) => {
  await homePage.selectItemCategory('Phones & PDAs');
  await itemsCategoryPage.addItemToCompare(firstProduct);
  await itemsCategoryPage.chooseCategory('Components');
  await itemsCategoryPage.chooseCategory('Monitors');
  await itemsCategoryPage.addItemToCompare(secondProduct);
});

Then('I am facing a difficult choice between two excellent products', async () => {
  await itemPage.productComparisonNotificationLink();
  expect(await itemPage.comparisonProducts()).toBe('Product HTC Touch HD Samsung SyncMaster 941BW');
});
