const { elementToBeClickable } = require('wdio-wait-for');
const { logger } = require('../../../log/logger');
const UserCategories = require('./components/userCategories.page');
const HomePage = require('./home.page');

class RegisterPage extends HomePage {
  constructor() {
    super();

    this.registerUserCategories = new UserCategories();
  }

  get firstName() {
    return $('//input[@id="input-firstname"]');
  }

  get lastName() {
    return $('//input[@id="input-lastname"]');
  }

  get emailFolder() {
    return $('//input[@id="input-email"]');
  }

  get telephone() {
    return $('//input[@id="input-telephone"]');
  }

  get password() {
    return $('//input[@id="input-password"]');
  }

  get confirmPassword() {
    return $('//input[@id="input-confirm"]');
  }

  get subscribeYes() {
    return $('//input[@name="newsletter"][@value="1"]');
  }

  get subscribeNo() {
    return $('//input[@name="newsletter"][@value="0"]');
  }

  get privacyPolicy() {
    return $('//input[@name="agree"]');
  }

  get continueButton() {
    return $('//input[@value="Continue"]');
  }

  get loginPageButton() {
    return $('//a[contains(text(),"login page")]');
  }

  get messageAfterRegistration() {
    return $('//div[@id="common-success"]//div[@id="content"]/h1');
  }

  async generateRandomEmail(object) {
    logger.debug('Generate new e-mail...');
    const partOfEmail = await Math.random();
    const newEmail = await object.email.replace(/@/, `${partOfEmail}@`);
    this.modifyEmailAddress = await newEmail;
  }

  async fillRegistrationForm(object) {
    logger.debug('Start filling registration form...');
    await this.fillInput(this.firstName, object.firstName);
    await this.fillInput(this.lastName, object.lastName);
    await this.generateRandomEmail(object);
    await this.fillInput(this.emailFolder, this.modifyEmailAddress);
    await this.fillInput(this.telephone, object.telephone);
    await this.fillInput(this.password, object.password);
    await this.fillInput(this.confirmPassword, object.password);
    const checkboxPrivacyPolice = await this.privacyPolicy;
    await browser.waitUntil(elementToBeClickable(checkboxPrivacyPolice));
    logger.debug('Selecting Privacy Police agreement...');
    await checkboxPrivacyPolice.click();
    const buttonSubmitForm = await this.continueButton;
    await browser.waitUntil(elementToBeClickable(buttonSubmitForm));
    logger.debug('Submitting registration form...');
    await buttonSubmitForm.click();
  }
}

module.exports = new RegisterPage();
