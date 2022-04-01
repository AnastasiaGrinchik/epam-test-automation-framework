const { elementToBeClickable } = require('wdio-wait-for');
const { logger } = require('../../../log/logger');

const HomePage = require('./home.page');

class AddingAddress extends HomePage {
  get newAddressButton() {
    return $('//a[contains(text(), "New Address")]');
  }

  get firstNameInput() {
    return $('#input-firstname');
  }

  get lastNameInput() {
    return $('#input-lastname');
  }

  get firstAddressInput() {
    return $('#input-address-1');
  }

  get cityInput() {
    return $('#input-city');
  }

  get postcodeInput() {
    return $('#input-postcode');
  }

  get countrySelect() {
    return $('#input-country');
  }

  get regionSelect() {
    return $('#input-zone');
  }

  get continueButton() {
    return $('//input[@value="Continue"]');
  }

  get messageAfterSendingAddressForm() {
    return $('//div[@class="alert alert-success alert-dismissible"]');
  }

  async goToNewAddress() {
    const NewAddressButton = await this.newAddressButton;
    await browser.waitUntil(elementToBeClickable(NewAddressButton));
    logger.debug('Creating new address');
    await NewAddressButton.click();
  }

  async fillAddressForm(object) {
    logger.debug('Start filling address form...');
    await this.fillInput(this.firstNameInput, object.firstName);
    await this.fillInput(this.lastNameInput, object.lastName);
    await this.fillInput(this.firstAddressInput, object.address);
    await this.fillInput(this.cityInput, object.city);
    await this.fillInput(this.postcodeInput, object.postcode);
    await this.fillSelect(this.countrySelect, object.country);
    await this.fillSelect(this.regionSelect, object.region);
    const buttonSubmitForm = await this.continueButton;
    await browser.waitUntil(elementToBeClickable(buttonSubmitForm));
    logger.debug('Submitting address form...');
    await buttonSubmitForm.click();
  }
}

module.exports = new AddingAddress();
