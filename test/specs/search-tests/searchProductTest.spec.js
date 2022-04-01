const { expect } = require('chai');
const { baseUrl } = require('../../../config/config');

const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const SearchResultsPage = require('../../../framework/page-objects/awesome-shop-pages/searchResults.page');

describe('Search product', () => {
  const searchText = 'Apple Cinema 30"';
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();

  before(async () => {
    await homePage.open(baseUrl);
    await homePage.search(searchText);
  });

  it('should return product searchText', async () => {
    const itemText = await searchResultsPage.itemSearchName.getText();
    expect(itemText).to.be.include(searchText);
  });
});
