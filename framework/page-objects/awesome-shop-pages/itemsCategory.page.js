const { logger } = require('../../../log/logger');
const Item = require('./components/item');
const HomePage = require('./home.page');

class ItemsCategoryPage extends HomePage {
  get compareButton() {
    return $('//a[@id="compare-total"]');
  }

  async getItemByName(itemName) {
    return new Item(itemName);
  }

  async getCategoryByName(categoryName) {
    return $(`//*[@class='list-group']/a[text()[contains(., '${categoryName}')]]`);
  }

  async addItemToCart(itemName) {
    const category = await this.getItemByName(itemName);
    logger.debug(`Adding ${itemName} to cart...`);
    await category.addToCart();
  }

  async addItemToCompare(itemName) {
    const category = await this.getItemByName(itemName);
    logger.debug(`Adding ${itemName} to compare...`);
    await category.addToCompare();
  }

  async chooseCategory(categoryName) {
    const category = await this.getCategoryByName(categoryName);
    logger.debug(`Opening ${categoryName}...`);
    await category.click();
  }

  async productClass() {
    return $('.product-thumb.transition');
  }
}

module.exports = new ItemsCategoryPage();
