const { expect } = require('chai');
const { baseUrl } = require('../../../config/config');

const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');

describe('Telegram', () => {
  const itemPage = new ItemPage();
  const messengerSearch = 'telegram';
  const itemUrl = baseUrl + itemPage.appleTvUrl;

  before(async () => {
    await itemPage.open(itemUrl);
    await itemPage.shareButton.moveTo();
    await itemPage.shareMoreInShareButton.click();
    await itemPage.shareSearchText(messengerSearch);
    await itemPage.shareTelegramButton.click();
  });

  it('should url starts with urlStartText and contains urlText', async () => {
    const urlStartText = 'telegram.me';
    const urlEndText = 'text=Apple+Cinema+30"';
    await itemPage.switchToWindowByTabNumber(1);
    const twitterUrl = await browser.getUrl();
    expect(twitterUrl).to.be.include(urlStartText, urlEndText);
  });
});
