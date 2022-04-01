const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const CartTable = require('../../../framework/page-objects/awesome-shop-pages/components/cartTable');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const shoppingCartPage = require('../../../framework/page-objects/awesome-shop-pages/shoppingCart.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const product = 'iMac';
const shoppingCartEmpty = '0';
const shoppingCartEmptyMessage = 'Your shopping cart is empty!';
const cartTable = new CartTable(product);
const homePage = new HomePage();
const itemPage = new ItemPage();

describe('Verify able to delete product from the shopping cart', () => {
  before(async () => {
    await homePage.open();
    await homePage.selectItemCategory('Desktops', 'Mac');
    await itemsCategoryPage.addItemToCart(product);
    await itemPage.shoppingCartNotificationLink();
    await cartTable.remove();
  });

  it(`should displayed: '${shoppingCartEmptyMessage}'`, async () => {
    expect(await shoppingCartPage.emptyNotification()).toBe(shoppingCartEmptyMessage);
  });

  it('should be empty shopping cart ', async () => {
    expect(await homePage.quantityItemsInShoppingCart()).toBe(shoppingCartEmpty);
  });
});
