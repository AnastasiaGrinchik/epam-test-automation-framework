const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const firstProduct = 'HTC Touch HD';
const secondProduct = 'Samsung SyncMaster 941BW';
const components = 'Components';
const monitors = 'Monitors';
const firstNotification = `Success: You have added ${firstProduct} to your product comparison!`;
const secondNotification = `Success: You have added ${secondProduct} to your product comparison!`;
const homePage = new HomePage();
const itemPage = new ItemPage();

describe('Verify able to compare two products', () => {
  before(async () => {
    await homePage.open();
    await homePage.selectItemCategory('Phones & PDAs');
    await itemsCategoryPage.addItemToCompare(firstProduct);
  });
  it(`should displayed: '${firstNotification}'`, async () => {
    expect(await itemPage.notificationText()).toHaveText(firstNotification);
  });

  it(`should displayed: '${secondNotification}'`, async () => {
    await itemsCategoryPage.chooseCategory(components);
    await itemsCategoryPage.chooseCategory(monitors);
    await itemsCategoryPage.addItemToCompare(secondProduct);
    expect(await itemPage.notificationText()).toHaveText(secondNotification);
  });

  it(`should both ${firstProduct} and ${secondProduct} in Product Comparison`, async () => {
    await itemPage.productComparisonNotificationLink();
    expect(await itemPage.comparisonProducts()).toBe(`Product ${firstProduct} ${secondProduct}`);
  });
});
