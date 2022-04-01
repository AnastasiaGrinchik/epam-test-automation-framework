const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { baseUrl } = require('../../config/config');

const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../page-objects/awesome-shop-pages/item.page');

const homePage = new HomePage();
const itemPage = new ItemPage();
const itemUrl = baseUrl + itemPage.appleTvUrl;

Given('I open Apple TV page', async () => {
  await homePage.open(itemUrl);
});

When('I click on Currency Rus Rub button', async () => {
  await homePage.clickOnAccountCurrencyRUB();
});

Then('I should see 7,830.95 ₽ in current price', async () => {
  const currentValue = '7,830.95 ₽';
  const currentPriceText = await itemPage.prices.currentPrice.getText();
  expect(currentPriceText).to.be.include(currentValue);
});

Then('I should see 8,701.06 ₽ in before Discount price', async () => {
  const beforeDiscountValue = '8,701.06 ₽';
  const beforeDiscountPriceText = await itemPage.prices.priceBeforeDiscount.getText();
  expect(beforeDiscountPriceText).to.be.include(beforeDiscountValue);
});

Then('I should see 6,525.79 ₽ in exTax price', async () => {
  const exTaxValue = '6,525.79 ₽';
  const exTaxText = await itemPage.prices.exTax.getText();
  expect(exTaxText).to.be.include(exTaxValue);
});

Then('I should see 7,656.93 ₽ in 10 or more price', async () => {
  const tenPriceValue = '7,656.93 ₽';
  const tenPriceText = await itemPage.prices.priceTenOrMore.getText();
  expect(tenPriceText).to.be.include(tenPriceValue);
});

Then('I should see 6,699.81 ₽ in 20 or more price', async () => {
  const twentyPriceValue = '6,699.81 ₽';
  const twentyPriceText = await itemPage.prices.priceTwentyOrMore.getText();
  expect(twentyPriceText).to.be.include(twentyPriceValue);
});

Then('I should see 5,742.70 ₽ in 30 or more price', async () => {
  const thirtyPriceValue = '5,742.70 ₽';
  const thirtyText = await itemPage.prices.priceThirtyOrMore.getText();
  expect(thirtyText).to.be.include(thirtyPriceValue);
});
