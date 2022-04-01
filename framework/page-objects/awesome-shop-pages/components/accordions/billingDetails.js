const Accordion = require('../accordion');
const { logger } = require('../../../../../log/logger');

class BillingDetails extends Accordion {
  constructor() {
    super('Billing Details');
  }

  async fillGuestInfo(address, user) {
    logger.debug('Start filling guest information form in Billing Details...');
    await this.setTextInField('First Name', user.firstName);
    await this.setTextInField('Last Name', user.lastName);
    await this.setTextInField('E-Mail', user.email);
    await this.setTextInField('Telephone', user.telephone);
    const billingAddress = address.street + address.building + address.apartment;
    await this.setTextInField('Address 1', billingAddress);
    await this.setTextInField('City', address.city);
    await this.setTextInField('Post Code', address.postCode);
    await this.selectOptionInDropdown('Country', address.country);
    await this.selectOptionInDropdown('State', address.state);
    logger.debug('Accepting guest information form in Billing Details...');
    await this.continueButton.click();
  }

  async continueWithExistingAddress() {
    await this.elementToWait.waitForDisplayed();
    await this.continueButton.waitForClickable();
    logger.debug('Continue with existing address...');
    await this.continueButton.click();
  }
}
module.exports = BillingDetails;
