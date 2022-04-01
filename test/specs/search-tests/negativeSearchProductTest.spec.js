const { expect } = require('chai');
const { baseUrl, defaultWait } = require('../../../config/config');

const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const SearchResultsPage = require('../../../framework/page-objects/awesome-shop-pages/searchResults.page');

describe('Search product', () => {
  const searchText = 'Samsung C27RG50FQl';
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();

  before(async () => {
    await homePage.open(baseUrl);
    await homePage.search(searchText, defaultWait);
  });

  it('should return negativeText', async () => {
    const negativeText = 'There is no product that matches the search criteria.';
    const noResult = await searchResultsPage.noResultsText.getText();
    expect(noResult).to.be.include(negativeText);
  });
});
