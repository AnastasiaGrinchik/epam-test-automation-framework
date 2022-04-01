const checkRequiredField = require('../utils/checkRequiredField');

class PaymentCard {
  constructor({
    firstName, lastName, cardNumber, expirationDate, cvv,
  }) {
    checkRequiredField({
      firstName, lastName, cardNumber, expirationDate, cvv,
    });
    this.firstName = firstName;
    this.lastName = lastName;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}

module.exports = PaymentCard;
