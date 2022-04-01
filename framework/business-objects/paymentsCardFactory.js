const PaymentCard = require('./paymentCard');

class PaymentCardsFactory {
  static get visaPaymentCard() {
    return new PaymentCard({
      firstName: 'John',
      lastName: 'Doe',
      cardNumber: '4032037867747574',
      expirationDate: '12/24',
      cvv: '065',
    });
  }

  static get mastercardPaymentCard() {
    return new PaymentCard({
      firstName: 'John',
      lastName: 'Doe',
      cardNumber: '5110920531913767',
      expirationDate: '05/26',
      cvv: '404',
    });
  }
}
module.exports = PaymentCardsFactory;
