const { elementToBeClickable } = require('wdio-wait-for');
const { logger } = require('../../../log/logger');

const HomePage = require('./home.page');

class ChangingPassword extends HomePage {
  get passwordInput() {
    return $('#input-password');
  }

  get passwordConfirmInput() {
    return $('#input-confirm');
  }

  get continueButton() {
    return $('//input[@value="Continue"]');
  }

  get messageAfterFailedChangingPassword() {
    return $('//div[@class="text-danger"]');
  }

  async fillChangingForm(password, passwordConfirm) {
    logger.debug('Start changing password...');
    await this.fillInput(this.passwordInput, password);
    await this.fillInput(this.passwordConfirmInput, passwordConfirm);

    const buttonSubmitForm = await this.continueButton;
    await browser.waitUntil(elementToBeClickable(buttonSubmitForm));
    logger.debug('Submitting changing password form...');
    await buttonSubmitForm.click();
  }
}

module.exports = new ChangingPassword();
