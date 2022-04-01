const HomePage = require('./home.page');
const CartTable = require('./components/cartTable');
const Accordion = require('./components/accordion');
const { logger } = require('../../../log/logger');

class ShoppingCartPage extends HomePage {
  constructor() {
    super();

    this.couponAccordion = new Accordion('Use Coupon Code');
  }

  get notificationEmpty() {
    return $('p*=empty');
  }

  get applyCouponButton() {
    return $('//*[@id="button-coupon"]');
  }

  get checkoutButton() {
    return $('//*[@class="buttons clearfix"]//*[text()[contains(., "Checkout")]]');
  }

  get notification() {
    return $('//*[contains(@class, "alert")]');
  }

  async getRowByItemName(itemName) {
    return new CartTable(itemName);
  }

  async getFinalPrice(kindOfPrice) {
    logger.debug('Getting Final price...');
    const priceString = await $(`//*[text()= '${kindOfPrice}']/ancestor::*/*[text()[contains(., '$')]]`).getText();
    const price = await priceString.replace('$', '').replace(',', '');
    return parseFloat(price);
  }

  async applyCoupon(coupon) {
    logger.debug(`Applying ${coupon}...`);
    await this.couponAccordion.expand();
    await this.couponAccordion.setTextInField('Enter your coupon here', coupon);
    await this.applyCouponButton.click();
  }

  async emptyNotification() {
    return this.notificationEmpty.getText();
  }
}

module.exports = new ShoppingCartPage();
