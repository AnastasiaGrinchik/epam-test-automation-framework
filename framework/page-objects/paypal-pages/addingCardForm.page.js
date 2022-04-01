const Page = require('../page');
const { logger } = require('../../../log/logger');

class AddingCardFormPage extends Page {
  get cardNumberInput() {
    return $('#cardNumber');
  }

  get addCardButton() {
    return $('//span[contains(text(), "Add debit or credit card")]');
  }

  get expirationDateInput() {
    return $('#cardExpiry');
  }

  get securityCode() {
    return $('#cardCvv');
  }

  get saveButton() {
    return $('//button[@data-testid="add-card-save-btn"]');
  }

  async addNewCard(card) {
    logger.debug('Adding new card to Paypal account...');
    await this.addCardButton.click();
    await this.cardNumberInput.setValue(card.cardNumber);
    await this.expirationDateInput.setValue(card.expirationDate);
    await this.securityCode.setValue(card.cvv);
    await this.saveButton.waitForClickable();
    await this.saveButton.click();
  }
}
module.exports = new AddingCardFormPage();
