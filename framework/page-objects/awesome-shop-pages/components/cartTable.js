const { logger } = require('../../../../log/logger');

class CartTable {
  constructor(itemName) {
    this.itemName = itemName;
  }

  get row() {
    return $(`//*[@class='table-responsive']//a[text()[contains(., '${this.itemName}')]]`);
  }

  get productName() {
    return this.row.$('./ancestor::td');
  }

  get model() {
    return this.row.$('./ancestor::td/following-sibling::td[1]');
  }

  get quantity() {
    return this.row.$('./ancestor::td/following-sibling::td[2]//*[contains(@name, "quantity")]');
  }

  get updateButton() {
    return this.row.$('./ancestor::td/following-sibling::td[2]//*[@type="submit"]');
  }

  get removeButton() {
    return this.row.$('./ancestor::td/following-sibling::td[2]//*[@type="button"]');
  }

  get unitPrice() {
    return this.row.$('./ancestor::td/following-sibling::td[3]');
  }

  get total() {
    return this.row.$('./ancestor::td/following-sibling::td[4]');
  }

  async getUnitPrice() {
    logger.debug('Getting Unit price...');
    const unitPriceString = await this.unitPrice.getText();
    const unitPrice = await unitPriceString.replace('$', '').replace(',', '');
    return parseFloat(unitPrice);
  }

  async getTotal() {
    logger.debug('Getting Total price...');
    const totalString = await this.total.getText();
    const total = await totalString.replace('$', '').replace(',', '');
    return parseFloat(total);
  }

  async remove() {
    logger.debug('Removing item...');
    await this.removeButton.click();
  }

  async updateQuantity(quantity) {
    logger.debug('Updating quantity...');
    await this.quantity.setValue(quantity);
    await this.updateButton.click();
  }

  async quantityValue() {
    logger.debug('Getting item quantity...');
    return this.quantity.getValue();
  }

  async quantityPrice(quantity) {
    logger.debug('Getting item total price in cart table...');
    const priceUnit = await this.getUnitPrice();
    return `${quantity}` * priceUnit - 0.01;
  }

  async nameOfProduct() {
    return this.productName.getText();
  }

  async productTotalPrice() {
    return this.total.getText();
  }

  async productUnitPrice() {
    return this.unitPrice.getText();
  }
}

module.exports = CartTable;
