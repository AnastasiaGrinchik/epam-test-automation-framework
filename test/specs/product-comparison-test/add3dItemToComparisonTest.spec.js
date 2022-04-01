const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const firstProduct = 'HTC Touch HD';
const secondProduct = 'iPhone';
const thirdProduct = 'Samsung SyncMaster 941BW';
const components = 'Components';
const monitors = 'Monitors';
const homePage = new HomePage();
const itemPage = new ItemPage();

describe('Verify able to add the 3d item to the comparison', () => {
  it('should have 3 items in the comparison', async () => {
    await homePage.open();
    await homePage.selectItemCategory('Phones & PDAs');
    await itemsCategoryPage.addItemToCompare(firstProduct);
    await itemsCategoryPage.addItemToCompare(secondProduct);
    await itemsCategoryPage.chooseCategory(components);
    await itemsCategoryPage.chooseCategory(monitors);
    await itemsCategoryPage.addItemToCompare(thirdProduct);
    await itemPage.productComparisonNotificationLink();
    expect(await itemPage.comparisonProducts()).toBe(`Product ${firstProduct} ${secondProduct} ${thirdProduct}`);
  });
});
