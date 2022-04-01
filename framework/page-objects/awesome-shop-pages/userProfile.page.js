const { elementToBeClickable } = require('wdio-wait-for');
const { logger } = require('../../../log/logger');
const HomePage = require('./home.page');

class UserProfilePage extends HomePage {
  get loginButton() {
    return $('//div[@class="list-group"]//a[contains(text(), "Login")]');
  }

  get registerButton() {
    return $('//div[@class="list-group"]//a[contains(text(), "Register")]');
  }

  get changePasswordButton() {
    return $('//a[contains(text(), "Change your password")]');
  }

  get modifyAddressButton() {
    return $('//a[contains(text(), "Modify your address book entries")]');
  }

  get affiliateAccountButton() {
    return $('//a[contains(text(), "Register for an affiliate account")]');
  }

  get logOutButton() {
    return $('//div[@class="list-group"]//a[contains(text(), "Logout")]');
  }

  async getMessageAfterAffiliateForm() {
    this.messageAboutAffiliateForm = await this.messageAfterSendingAffiliateForm.getText();
    return this.messageAboutAffiliateForm;
  }

  async goToLogin() {
    logger.debug('Login...');
    const loginButton = await this.loginButton;
    await browser.waitUntil(elementToBeClickable(loginButton));
    await loginButton.click();
  }

  async goToRegister() {
    logger.debug('Opening account registration form...');
    const registerButton = await this.registerButton;
    await browser.waitUntil(elementToBeClickable(registerButton));
    await registerButton.click();
  }

  async goToChangePassword() {
    logger.debug('Opening change password form...');
    const changePassword = await this.changePasswordButton;
    await browser.waitUntil(elementToBeClickable(changePassword));
    await changePassword.click();
  }

  async goToModifyAddress() {
    logger.debug('Opening modify address form...');
    const modifyAddress = await this.modifyAddressButton;
    await browser.waitUntil(elementToBeClickable(modifyAddress));
    await modifyAddress.click();
  }

  async goToAffiliateAccountRegistration() {
    logger.debug('Opening affiliate account registration form...');
    const affiliateAccountButton = await this.affiliateAccountButton;
    await browser.waitUntil(elementToBeClickable(affiliateAccountButton));
    await affiliateAccountButton.click();
  }

  async logOutFromAccount() {
    logger.debug('Log out from account...');
    const logOutbutton = await this.logOutButton;
    await browser.waitUntil(elementToBeClickable(logOutbutton));
    await logOutbutton.click();
  }
}

module.exports = new UserProfilePage();
