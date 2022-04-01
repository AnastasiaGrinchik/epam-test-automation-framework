const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class CheckoutOptions extends Accordion {
  constructor() {
    super('Checkout Options');
  }

  get loginButton() {
    return $('//input[@id="button-login"]');
  }

  async login(login, password) {
    logger.debug('Start filling e-mail in Checkout Options...');
    await this.setTextInField('E-Mail', login);
    logger.debug('Start filling password');
    await this.setTextInField('Password', password);
    await this.loginButton.waitForClickable();
    logger.debug('Login');
    await this.loginButton.click();
  }

  async continueAsAGuest() {
    await this.selectRadioButton('Guest Checkout');
    logger.debug('Continue as a guest in Checkout Options...');
    await this.continueButton.click();
  }
}
module.exports = CheckoutOptions;
