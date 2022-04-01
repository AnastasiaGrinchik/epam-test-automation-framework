const { expect } = require('chai');
const { baseUrl } = require('../../../config/config');

const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');

describe('Twitter', () => {
  const itemPage = new ItemPage();
  const itemUrl = baseUrl + itemPage.appleTvUrl;

  before(async () => {
    await itemPage.open(itemUrl);
    await itemPage.openTwitterPage();
  });

  it('should url starts with urlStartText and contains urlText', async () => {
    const urlStartText = 'twitter.com';
    const urlEndText = `text=Apple%20Cinema%2030%3A&url=https%3A%2F%2Fawesome-shop.ru%2Find
    ex.php%3Froute%3Dproduct%2Fproduct%26product_id%3D42`;
    await itemPage.switchToWindowByTabNumber(1);
    const twitterUrl = await browser.getUrl();
    expect(twitterUrl).to.be.include(urlStartText, urlEndText);
  });
});
