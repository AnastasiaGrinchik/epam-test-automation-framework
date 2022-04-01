const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { baseUrl } = require('../../config/config');

const HomePage = require('../page-objects/awesome-shop-pages/home.page');
const SearchResultsPage = require('../page-objects/awesome-shop-pages/searchResults.page');

const searchText = 'Apple Cinema 30"';
const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();

Given('I open awesome shop page', async () => {
  await homePage.open(baseUrl);
});

When('I search product Apple Cinema 30"', async () => {
  await homePage.search(searchText);
});

Then('I should see the text Apple Cinema 30" in the product that appears on the results page', async () => {
  const itemText = await searchResultsPage.itemSearchName.getText();
  expect(itemText).to.be.include(searchText);
});
