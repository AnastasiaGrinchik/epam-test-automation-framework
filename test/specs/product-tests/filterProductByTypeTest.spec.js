const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const components = 'Components';
const homePage = new HomePage();

describe('Verify filter products by type', () => {
  it('should displayed two components', async () => {
    await homePage.open();
    await homePage.selectItemCategory('Desktops', 'Show All Desktops');
    await itemsCategoryPage.chooseCategory(components);
    await expect(itemsCategoryPage.productClass()).toBeDisplayed();
  });
});
