const { elementToBeClickable } = require('wdio-wait-for');
const Page = require('../page');
const { logger } = require('../../../log/logger');

class HomePage extends Page {
  constructor() {
    super();
    this.accountButtonXpath = '//*[@class = "acc-section"]//button';
  }

  get accountButton() {
    return $('//*[@class = "acc-section"]//button');
  }

  get accountRegister() {
    return $('//ul[@class="list-unstyled"]//a[text()[contains(., "Register")]]');
  }

  get accountLogin() {
    return $('//ul[@class="list-unstyled"]//a[text()[contains(., "Login")]]');
  }

  get accountCurrencyBYN() {
    return $('//div[@class="acc-section open"]//a[@name = "BYN"]');
  }

  get accountCurrencyRUB() {
    return $('//div[@class="acc-section open"]//a[@name = "RUB"]');
  }

  get accountCurrencyUSD() {
    return $('//div[@class="acc-section open"]//a[@name = "USD"]');
  }

  get shoppingCartQuantityItems() {
    return $('//*[@id="cart-total"]');
  }

  get shoppingCartButton() {
    return $('//*[@id="cart"]/button');
  }

  get shoppingCartViewCart() {
    return this.shoppingCartButton.$('./ancestor::div/descendant::p/a[text()[contains(., "View Cart")]]');
  }

  get shoppingCartCheckout() {
    return this.shoppingCartButton.$('//div[@class="btn-group open"]//a[text()[contains(., "Checkout")]]');
  }

  get searchButton() {
    return $('//*[@id="myHeader"]//button');
  }

  get searchField() {
    return $('//*[@id="search"]/input');
  }

  get searchFieldButton() {
    return $('//*[@id="search"]//button');
  }

  get awesomeShopLogo() {
    return $('//*[@id="logo"]//img');
  }

  get myAccountButton() {
    return $('//a[text()[contains(., "My Account")]]');
  }

  get orderHistoryButton() {
    return $('//a[text()[contains(., "Order History")]]');
  }

  get removeButton() {
    return $('//*[@class = "remove-btn"]');
  }

  get iPhoneButton() {
    return $('//a[contains(text(), "iPhone")]');
  }

  get macBookButton() {
    return $('//a[contains(text(), "MacBook")]');
  }

  async selectItemCategory(category, subCategory) {
    const categoryButton = await $(`//li/a[text()[contains(., '${category}')]]`);
    logger.debug(`Selecting ${category}...`);
    await categoryButton.click();
    if (subCategory) {
      const openCategory = await $(`//li[@class="dropdown open"]/a[text()[contains(., '${category}')]]`);
      await openCategory.waitForDisplayed();
      const subCategoryButton = await categoryButton.$(
        `./ancestor::li/descendant::*/a[text()[contains(., '${subCategory}')]]`,
      );
      await subCategoryButton.waitForClickable();
      logger.debug(`Selecting ${subCategory}...`);
      await subCategoryButton.click();
    }
  }

  async openCart() {
    logger.debug('Opening cart...');
    await this.shoppingCartButton.waitForClickable();
    await this.shoppingCartButton.click();
    await this.shoppingCartViewCart.waitForClickable();
    await this.shoppingCartViewCart.click();
  }

  async clearCart() {
    logger.debug('Clearing cart...');
    await this.shoppingCartButton.waitForClickable();
    await this.shoppingCartButton.click();
    await this.removeButton.waitForClickable();
    await this.removeButton.click();
  }

  async openCheckout() {
    logger.debug('Opening checkout...');
    await this.shoppingCartButton.waitForClickable();
    await this.shoppingCartButton.click();
    await this.shoppingCartCheckout.waitForClickable();
    await this.shoppingCartCheckout.click();
  }

  async search(text, time) {
    await this.searchButton.click();
    await this.searchField.waitForClickable(time);
    await this.searchField.click();
    await this.searchField.keys(text);
    logger.debug('Start searching...');
    await this.searchFieldButton.click();
  }

  async clickOnAccountCurrencyRUB(time) {
    logger.debug('Choosing account currency RUB...');
    await this.accountButton.waitForClickable(time);
    await this.accountButton.click();
    await this.accountCurrencyRUB.waitForClickable(time);
    await this.accountCurrencyRUB.click();
  }

  async clickOnAccountCurrencyBYN() {
    logger.debug('Choosing account currency BYN...');
    await this.accountButton.waitForClickable();
    await this.accountButton.click();
    await this.accountCurrencyBYN.waitForClickable();
    await this.accountCurrencyBYN.click();
  }

  async quantityItemsInShoppingCart() {
    return this.shoppingCartQuantityItems.getText();
  }

  async goToAccountRegister() {
    logger.debug('Opening account registration form...');
    const buttonDropdown = await this.accountButton;
    await browser.waitUntil(elementToBeClickable(buttonDropdown));
    await buttonDropdown.click();

    const buttonRegister = await this.accountRegister;
    await browser.waitUntil(elementToBeClickable(buttonRegister));
    await buttonRegister.click();
  }

  async goToAccountLogin() {
    logger.debug('Opening account login form...');
    const buttonDropdown = await this.accountButton;
    await browser.waitUntil(elementToBeClickable(buttonDropdown));
    await buttonDropdown.click();

    const buttonLogin = await this.accountLogin;
    await browser.waitUntil(elementToBeClickable(buttonLogin));
    await buttonLogin.click();
  }

  async goToItem(locatorElement) {
    logger.debug('Opening item card...');
    const item = await locatorElement;
    await browser.waitUntil(elementToBeClickable(item));
    await item.click();
  }
}

module.exports = HomePage;
