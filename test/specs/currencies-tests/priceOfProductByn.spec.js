const { expect } = require('chai');
const { baseUrl, waitPaypalInterval } = require('../../../config/config');

const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');

describe('Product cost', () => {
  const homePage = new HomePage();
  const itemPage = new ItemPage();
  const itemUrl = baseUrl + itemPage.appleTvUrl;

  before(async () => {
    await homePage.open(itemUrl);
    await homePage.clickOnAccountCurrencyBYN();
    await browser.refresh();
  });

  it('should return current value of the product: currentValue', async () => {
    const currentValue = '271.21 Br';
    await browser.waitUntil(() => itemPage.prices.currentPrice.getText(), { interval: waitPaypalInterval });
    const currentPriceText = await itemPage.prices.currentPrice.getText();
    expect(currentPriceText).to.be.include(currentValue);
  });

  it('should return product price before discount: beforeDiscountValue', async () => {
    const beforeDiscountValue = '301.34 Br';
    const beforeDiscountPriceText = await itemPage.prices.priceBeforeDiscount.getText();
    expect(beforeDiscountPriceText).to.be.include(beforeDiscountValue);
  });

  it('should return ex tax: exTaxValue', async () => {
    const exTaxValue = '226.01 Br';
    const exTaxText = await itemPage.prices.exTax.getText();
    expect(exTaxText).to.be.include(exTaxValue);
  });

  it('should return price 10 or more: tenPriceValue', async () => {
    const tenPriceValue = '265.18 Br';
    const tenPriceText = await itemPage.prices.priceTenOrMore.getText();
    expect(tenPriceText).to.be.include(tenPriceValue);
  });

  it('should return price 20 or more: twentyPriceValue', async () => {
    const twentyPriceValue = '232.03 Br';
    const twentyPriceText = await itemPage.prices.priceTwentyOrMore.getText();
    expect(twentyPriceText).to.be.include(twentyPriceValue);
  });

  it('should return price 30 or more: thirtyPriceValue', async () => {
    const thirtyPriceValue = '198.89 Br';
    const thirtyPriceText = await itemPage.prices.priceThirtyOrMore.getText();
    expect(thirtyPriceText).to.be.include(thirtyPriceValue);
  });
});
