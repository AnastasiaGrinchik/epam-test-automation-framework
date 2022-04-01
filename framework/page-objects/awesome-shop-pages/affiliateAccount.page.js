const { elementToBeClickable } = require('wdio-wait-for');
const { logger } = require('../../../log/logger');

const HomePage = require('./home.page');

class AffiliateAccount extends HomePage {
  get companyInput() {
    return $('#input-company');
  }

  get paypalRadioButton() {
    return $('//div[@class="radio"]//input[@value="paypal"]');
  }

  get paypalEmailInput() {
    return $('#input-paypal');
  }

  get agreementCheckbox() {
    return $('//input[@name="agree"]');
  }

  get continueButton() {
    return $('//input[@value="Continue"]');
  }

  get messageAfterSendingAffiliateForm() {
    return $('//div[@class="alert alert-success alert-dismissible"]');
  }

  async fillAffiliateAccountForm(object, newEmail) {
    logger.debug('Start filling affiliate account form...');
    await this.fillInput(this.companyInput, object.company);
    await browser.waitUntil(elementToBeClickable(this.paypalRadioButton));
    logger.debug('Choosing paypal...');
    await this.paypalRadioButton.click();
    await this.fillInput(this.paypalEmailInput, newEmail);

    const agreementCheckbox = await this.agreementCheckbox;
    await browser.waitUntil(elementToBeClickable(agreementCheckbox));
    logger.debug('Choosing agreement...');
    await agreementCheckbox.click();

    const continueButton = await this.continueButton;
    await browser.waitUntil(elementToBeClickable(continueButton));
    logger.debug('Submitting affiliate account form');
    await continueButton.click();
  }
}

module.exports = new AffiliateAccount();
