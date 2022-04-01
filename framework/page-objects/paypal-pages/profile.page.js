const { logger } = require('../../../log/logger');
const Page = require('../page');

class ProfilePage extends Page {
  get masterCardRadioButton() {
    return $('//div[@data-testid="first-fis"]//span[contains(text(),"Mastercard")]/ancestor::label/span');
  }

  get paypalCreditRadioButton() {
    return $('//img[@alt="PayPal Credit"]/ancestor::label/span');
  }

  get payNowButton() {
    return $('//button[@id="payment-submit-btn"]');
  }

  get seeAllCards() {
    return $('//span[text()[contains(., "See More")]]');
  }

  async selectCardByNumber(card) {
    const cardLastDigits = card.cardNumber.slice(-4);
    const cardRadio = await $(
      `//*[text()[contains(., '${cardLastDigits}')]]/ancestor::label/child::span`,
    );
    await this.seeAllCards.waitForClickable();
    await this.seeAllCards.click();
    logger.debug(`Choosing ${card}...`);
    await cardRadio.click();
  }

  async submitPayment() {
    await this.payNowButton.waitForClickable();
    logger.debug('Submitting payment...');
    await this.payNowButton.click();
  }

  async payOnCredit() {
    await this.paypalCreditRadioButton.waitForClickable();
    logger.debug('Paying on credit...');
    await this.paypalCreditRadioButton.click();
  }
}

module.exports = new ProfilePage();
