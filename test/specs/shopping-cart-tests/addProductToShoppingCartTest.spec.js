const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const CartTable = require('../../../framework/page-objects/awesome-shop-pages/components/cartTable');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const categoryName = 'Mac';
const product = 'iMac';
const quantity = '1';
const successNotification = `Success: You have added ${product} to your shopping cart!`;
const homePage = new HomePage();
const cartTable = new CartTable(product);
const itemPage = new ItemPage();

describe('Verify add product to the shopping cart', () => {
  before(async () => {
    await homePage.open();
    await homePage.selectItemCategory('Desktops', 'Show All Desktops');
    await itemsCategoryPage.chooseCategory(categoryName);
    await itemPage.addItemWithQuantityToCart(product, quantity);
  });
  it(`should displayed: '${successNotification}'`, async () => {
    expect(await itemPage.notificationText()).toHaveText(successNotification);
  });
  it('should displayed item table', async () => {
    const iMacPrice = await itemPage.itemPrice();
    await itemPage.shoppingCartNotificationLink();
    expect(await cartTable.quantityValue()).toBe(quantity);
    expect(await cartTable.nameOfProduct()).toBe(product);
    expect(await cartTable.productUnitPrice()).toBe(iMacPrice);
    expect(await cartTable.productTotalPrice()).toBe(iMacPrice);
  });
});
