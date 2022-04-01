const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const categoryName = 'Mac';
const product = 'iMac';
const quantity = 'one';
const homePage = new HomePage();
const itemPage = new ItemPage();

describe('Verify unable to add a quantity in an invalid format', () => {
  it('should be empty quantity field ', async () => {
    await homePage.open();
    await homePage.selectItemCategory('Desktops', 'Show All Desktops');
    await itemsCategoryPage.chooseCategory(categoryName);
    await itemPage.addQuantityToItem(product, quantity);
    expect(await itemPage.quantityValue()).toBeFalsy();
  });
});
