const { logger } = require('../../../../log/logger');

class Item {
  constructor(itemName) {
    this.itemName = itemName;
  }

  get name() {
    return $(`//a[text()[contains(., '${this.itemName}')]]`);
  }

  get addToCartButton() {
    return this.name.$('./ancestor::div[@class="caption"]//button[@class="btn cartbtn"]');
  }

  get addToWishListButton() {
    return this.name.$('./ancestor::div[@class="caption"]//button[@class="btn wishbtn"]');
  }

  get addToCompareButton() {
    return this.name.$('./ancestor::div[@class="caption"]//button[@class="btn combtn"]');
  }

  async addToCart() {
    await this.name.moveTo();
    await this.addToCartButton.moveTo();
    await this.addToCartButton.waitForClickable();
    logger.debug('Adding to shopping cart...');
    await this.addToCartButton.click();
  }

  async addToWishList() {
    await this.name.moveTo();
    await this.addToWishListButton.waitForClickable();
    logger.debug('Adding to wish list...');
    await this.addToWishListButton.click();
  }

  async addToCompare() {
    await this.name.moveTo();
    await this.addToCompareButton.waitForClickable();
    logger.debug('Adding to compare...');
    await this.addToCompareButton.click();
  }
}
module.exports = Item;
