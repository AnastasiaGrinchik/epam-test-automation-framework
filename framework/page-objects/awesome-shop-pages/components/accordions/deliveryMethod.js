const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class DeliveryMethod extends Accordion {
  constructor() {
    super('Delivery Method');
  }

  async continue() {
    await this.elementToWait.waitForDisplayed();
    await this.continueButton.waitForClickable();
    logger.debug('Continue in Delivery Method...');
    await this.continueButton.click();
  }
}
module.exports = DeliveryMethod;
