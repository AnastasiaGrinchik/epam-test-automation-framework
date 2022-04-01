const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { baseUrl } = require('../../config/config');

const ItemPage = require('../page-objects/awesome-shop-pages/item.page');

const itemPage = new ItemPage();

Given('I open Apple TV page', async () => {
  const itemUrl = baseUrl + itemPage.appleTvUrl;
  await itemPage.open(itemUrl);
});

When('I click on twitter button', async () => {
  await itemPage.openTwitterPage();
});

Then('I should be on twitter page', async () => {
  const urlStartText = 'twitter.com';
  const urlEndText = `text=Apple%20Cinema%2030%3A&url=https%3A%2F%2Fawesome-shop.ru%2Find
    ex.php%3Froute%3Dproduct%2Fproduct%26product_id%3D42`;
  await itemPage.switchToWindowByTabNumber(1);
  const twitterUrl = await browser.getUrl();
  expect(twitterUrl).to.be.include(urlStartText, urlEndText);
});
