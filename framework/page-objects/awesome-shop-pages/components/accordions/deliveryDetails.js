const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class DeliveryDetails extends Accordion {
  constructor() {
    super('Delivery Details');
  }

  async continueWithExistingAddress() {
    await this.elementToWait.waitForDisplayed();
    await this.continueButton.waitForClickable();
    logger.debug('Continue with existing address in Delivery Details...');
    await this.continueButton.click();
  }
}
module.exports = DeliveryDetails;
