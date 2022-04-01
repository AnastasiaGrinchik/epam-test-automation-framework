const HomePage = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const CartTable = require('../../../framework/page-objects/awesome-shop-pages/components/cartTable');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');
const itemsCategoryPage = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

const categoryName = 'Phones & PDAs';
const product = 'Palm Treo Pro';
const quantity = '4';
const newQuantity = '3';
const successNotification = 'Success: You have modified your shopping cart!';
const homePage = new HomePage();
const cartTable = new CartTable(product);
const itemPage = new ItemPage();

describe('Verify able to change product quantity to valid number', () => {
  before(async () => {
    await homePage.open();
    await homePage.selectItemCategory('Desktops', 'Show All Desktops');
    await itemsCategoryPage.chooseCategory(categoryName);
    await itemPage.addItemWithQuantityToCart(product, quantity);
    await homePage.openCart();
    await cartTable.updateQuantity(newQuantity);
  });

  it(`should displayed: '${successNotification}'`, async () => {
    expect(await itemPage.notificationText()).toHaveText(successNotification);
  });

  it('should changed quantity of product', async () => {
    expect(await cartTable.quantityValue()).toBe(newQuantity);
    expect(await cartTable.quantityPrice(newQuantity)).toBe(await cartTable.getTotal());
  });
});
