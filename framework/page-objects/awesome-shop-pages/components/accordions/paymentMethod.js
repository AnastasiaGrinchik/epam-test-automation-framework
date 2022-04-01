const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class PaymentMethod extends Accordion {
  constructor() {
    super('Payment Method');
  }

  async continueWithPaymentMethod(text) {
    logger.debug(`Select ${text}...`);
    await this.selectRadioButton(text);
    logger.debug('Selecting agreement...');
    await this.agreeCheckbox.click();
    await this.continueButton.waitForClickable();
    logger.debug('Continue in Payment Method...');
    await this.continueButton.click();
  }
}
module.exports = PaymentMethod;
