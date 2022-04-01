const checkRequiredField = require('../utils/checkRequiredField');

class ProductCard {
  constructor({
    size, color, checkbox, textField, textArea, deliveryDate, quantity,
  }) {
    checkRequiredField({ quantity });
    this.size = size;
    this.color = color;
    this.checkbox = checkbox;
    this.textField = textField;
    this.textArea = textArea;
    this.deliveryDate = deliveryDate;
    this.quantity = quantity;
  }
}

module.exports = ProductCard;
