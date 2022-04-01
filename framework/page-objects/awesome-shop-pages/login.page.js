const { logger } = require('../../../log/logger');
const UserCategories = require('./components/userCategories.page');
const HomePage = require('./home.page');

class LoginPage extends HomePage {
  constructor() {
    super();

    this.loginUserCategories = new UserCategories();
  }

  get newCustomerContinueButton() {
    return $('//a[contains(text(), "Continue")]');
  }

  get emailFolder() {
    return $('//input[@id="input-email"]');
  }

  get passwordFolder() {
    return $('//input[@id="input-password"]');
  }

  get loginConfirmButton() {
    return $('//input[@value="Login"]');
  }

  get forgotPasswordButton() {
    return $('//div[@class="form-group"]/a[contains(text(),"Forgotten Password")]');
  }

  async login(mail, password) {
    logger.debug(`Login with ${mail}...`);
    await this.emailFolder.setValue(mail);
    logger.debug(`Login with ${password}...`);
    await this.passwordFolder.setValue(password);
    logger.debug('Submitting login form...');
    await this.loginConfirmButton.click();
  }
}

module.exports = new LoginPage();
