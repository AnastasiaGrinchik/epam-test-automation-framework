const { logger } = require('../../../log/logger');
const Page = require('../page');

class LogInPage extends Page {
  get emailOrPhoneNumber() {
    return $('//input[@name="login_email"]');
  }

  get password() {
    return $('//input[@name="login_password"]');
  }

  get logInButton() {
    return $('//button[@id="btnLogin"]');
  }

  get nextButton() {
    return $('//button[@id="btnNext"]');
  }

  async login(email, password) {
    logger.debug('Login in Paypal account...');
    await this.switchTo('paypal.com');
    await this.emailOrPhoneNumber.waitForClickable();
    await this.emailOrPhoneNumber.setValue(email);
    await this.nextButton.click();
    await this.password.waitForClickable();
    await this.password.setValue(password);
    await this.logInButton.waitForClickable();
    await this.logInButton.click();
  }
}

module.exports = new LogInPage();
