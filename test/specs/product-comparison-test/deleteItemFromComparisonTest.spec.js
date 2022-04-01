const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const firstProduct = 'HTC Touch HD';
const secondProduct = 'iPhone';
const thirdProduct = 'Samsung SyncMaster 941BW';
const components = 'Components';
const monitors = 'Monitors';
const successNotification = 'Success: You have modified your product comparison!';
const homePage = new HomePage();
const itemPage = new ItemPage();

describe('Verify able to delete an item from comparison', () => {
  before(async () => {
    await homePage.open();
    await homePage.selectItemCategory('Phones & PDAs');
    await itemsCategoryPage.addItemToCompare(firstProduct);
    await itemsCategoryPage.addItemToCompare(secondProduct);
    await itemsCategoryPage.chooseCategory(components);
    await itemsCategoryPage.chooseCategory(monitors);
    await itemPage.addItemToCompare(thirdProduct);
    await itemPage.productComparisonNotificationLink();
    await itemPage.removeFromComparisonThirdProduct();
  });

  it(`should displayed: '${successNotification}'`, async () => {
    expect(await itemPage.notificationText()).toHaveText(successNotification);
  });

  it(`should have only ${firstProduct} and ${secondProduct} in Product Comparison`, async () => {
    expect(await itemPage.comparisonProducts()).toBe(`Product ${firstProduct} ${secondProduct}`);
  });
});
