const { elementToBeClickable } = require('wdio-wait-for');
const Prices = require('./components/prices');
const Item = require('./components/item');
const HomePage = require('./home.page');
const { logger } = require('../../../log/logger');

class ItemPage extends HomePage {
  constructor() {
    super();
    this.prices = new Prices();
    this.ratingXPathPattern = '//input[@name="rating"][@value="RATING_PLACEHOLDER"]';
    this.appleTvUrl = 'index.php?route=product/product&product_id=42';
  }

  get price() {
    return $('//*[@class="list-inline price"]//h2');
  }

  get productsInComparison() {
    return $('//tbody/tr');
  }

  get notification() {
    return $('//*[contains(@class, "alert")]');
  }

  get notificationShoppingCartLink() {
    return $('=shopping cart');
  }

  get notificationProductComparisonLink() {
    return $('=product comparison');
  }

  get removeThirdProductFromComparison() {
    return $('//tbody[2]//td[4]/a');
  }

  get continueIfEmptyButton() {
    return $('//a[contains(text(),"Continue")]');
  }

  get quantity() {
    return $('//input[@id="input-quantity"]');
  }

  get addToCart() {
    return $('//button[@id="button-cart"]');
  }

  get addToWishList() {
    return $('//button[@title="Add to Wish List"]');
  }

  get compareThisProduct() {
    return $('//button[@title="Compare this Product"]');
  }

  get description() {
    return $('//a[contains(text(),"Description")]');
  }

  get reviews() {
    return $('//a[contains(text(),"Reviews")]');
  }

  get yourNameReview() {
    return $('//input[@id="input-name"]');
  }

  get textAreaReview() {
    return $('//textarea[@id="input-review"]');
  }

  get continueReviewButton() {
    return $('//button[@id="button-review"]');
  }

  get facebookButton() {
    return $('//html[@id="facebook"]');
  }

  get twitterButton() {
    return $('//span[contains(text(),"Tweet")]');
  }

  get shareButton() {
    return $('//a[@class="atc_s addthis_button_compact"]');
  }

  get shareMoreButton() {
    return $('//a[@class="addthis_button_expanded"]');
  }

  get shareMoreInShareButton() {
    return $('//span[contains(text(),"More...")]');
  }

  get twitterFrame() {
    return ('//iframe[@id="twitter-widget-0"]');
  }

  get shareSearchPlaceholder() {
    return $('//label[@class="at-expanded-menu-search-label"]');
  }

  get shareTelegramButton() {
    return $('//button[@aria-label="Telegram"]');
  }

  get messageAfterSendingReview() {
    return $('//div[@class="alert alert-success alert-dismissible"]');
  }

  get successMessageAfterReview() {
    return $('//div[@class="alert alert-success alert-dismissible"]');
  }

  get failedMessageAfterReview() {
    return $('//div[@class="alert alert-danger alert-dismissible"]');
  }

  async rateItem(rating) {
    logger.debug('Rating item...');
    const changedRateLocator = this.ratingXPathPattern.replace('RATING_PLACEHOLDER', rating);
    const changedRateElement = $(changedRateLocator);
    await changedRateElement.click();
  }

  async openTwitterPage() {
    logger.debug('Opening Twitter...');
    const twitterLocator = $(this.twitterFrame);
    await twitterLocator.waitForDisplayed();
    await browser.switchToFrame(await browser.$(this.twitterFrame));
    await this.twitterButton.click();
  }

  async shareSearchText(text) {
    await this.shareSearchPlaceholder.click();
    await this.shareSearchPlaceholder.keys(text);
  }

  async shoppingCartNotificationLink() {
    logger.debug('Opening shopping cart notification...');
    await this.notificationShoppingCartLink.click();
  }

  async productComparisonNotificationLink() {
    logger.debug('Opening product comparison notification...');
    await this.notificationProductComparisonLink.click();
  }

  async addItemWithQuantityToCart(itemName, quantity) {
    logger.debug(`Opening ${itemName}...`);
    const item = new Item(itemName);
    await item.name.click();
    await this.quantity.setValue(quantity);
    logger.debug(`Adding to cart ${quantity} ${itemName}...`);
    await this.addToCart.click();
  }

  async addQuantityToItem(itemName, quantity) {
    const item = new Item(itemName);
    logger.debug(`Opening ${itemName}...`);
    await item.name.click();
    await this.quantity.setValue(quantity);
  }

  async addItemToCompare(itemName) {
    const item = new Item(itemName);
    logger.debug(`Opening ${itemName}...`);
    await item.name.click();
    logger.debug('Adding to compare...');
    await this.compareThisProduct.click();
  }

  async removeFromComparisonThirdProduct() {
    logger.debug('Removing from comparison...');
    await this.removeThirdProductFromComparison.click();
  }

  async notificationText() {
    return this.notification.getText();
  }

  async quantityValue() {
    return this.quantity.getText();
  }

  async itemPrice() {
    return this.price.getText();
  }

  async comparisonProducts() {
    return this.productsInComparison.getText();
  }

  async goToSection(section) {
    const sectionButton = await section;
    await browser.waitUntil(elementToBeClickable(sectionButton));
    logger.debug(`Opening ${section}...`);
    await sectionButton.click();
  }

  async fillReviewForm(object) {
    logger.debug('Filling review form...');
    await this.fillInput(this.yourNameReview, object.name);
    await this.fillInput(this.textAreaReview, object.review);
    await this.rateItem(object.rating);
    const continueButton = await this.continueReviewButton;
    await browser.waitUntil(elementToBeClickable(continueButton));
    logger.debug('Submitting review form...');
    await continueButton.click();
  }
}
module.exports = ItemPage;
