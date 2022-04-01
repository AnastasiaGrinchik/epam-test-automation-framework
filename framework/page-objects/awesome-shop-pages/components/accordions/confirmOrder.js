const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class ConfirmOrder extends Accordion {
  constructor() {
    super('Confirm Order');
  }

  get confirmOrderButton() {
    return $('//*[@value="Confirm Order"]');
  }

  get paypalButton() {
    return $('//*[@alt="PayPal"]');
  }

  async confirmOrderWithPayPal() {
    await this.elementToWait.waitForDisplayed();
    await this.paypalButton.waitForClickable();
    logger.debug('Continue with PayPal in Confirm Order...');
    await this.paypalButton.click();
  }

  async confirmOrder() {
    await this.elementToWait.waitForDisplayed();
    await this.confirmOrderButton.waitForClickable();
    logger.debug('Continue with Confirm button in Confirm Order...');
    await this.confirmOrderButton.click();
  }
}
module.exports = ConfirmOrder;
