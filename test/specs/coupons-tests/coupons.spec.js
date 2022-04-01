const shoppingCart = require('../../../framework/page-objects/awesome-shop-pages/shoppingCart.page');
const itemsCategory = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');

describe('coupons', () => {
  beforeEach(async () => {
    await itemsCategory.open('https://awesome-shop.ru/');
    await itemsCategory.selectItemCategory('Laptops & Notebooks', 'Show All Laptops & Notebooks');
    const macBook = await itemsCategory.getItemByName('Air');
    await macBook.addToCart();
    await itemsCategory.openCart();
  });
  afterEach(async () => {
    await itemsCategory.clearCart();
  });
  it('Possibility to apply a coupon for 15% for registered users by unregistered users', async () => {
    await shoppingCart.applyCoupon('LuckyUser');
    const notificationText = 'Warning: Coupon is either invalid, expired or reached its usage limit!';
    await expect(await shoppingCart.notification).toHaveTextContaining(notificationText);
    await expect(await shoppingCart.getFinalPrice('Total')).toBeCloseTo(1200.00);
  });
  it('Possibility to apply a coupon for $15 discount for order more than $444', async () => {
    await shoppingCart.applyCoupon('2128506');
    const notificationText = 'Success: Your coupon discount has been applied!';
    await expect(await shoppingCart.notification).toHaveTextContaining(notificationText);
    await expect(await shoppingCart.getFinalPrice('Coupon (2128506)')).toBeCloseTo(-15.00);
  });
});
