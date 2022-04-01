const HomePage = require('./home.page');
const CheckoutOptions = require('./components/accordions/checkoutOptions');
const BillingDetails = require('./components/accordions/billingDetails');
const DeliveryDetails = require('./components/accordions/deliveryDetails');
const DeliveryMethod = require('./components/accordions/deliveryMethod');
const PaymentMethod = require('./components/accordions/paymentMethod');
const ConfirmOrder = require('./components/accordions/confirmOrder');

class CheckoutPage extends HomePage {
  constructor() {
    super();

    this.checkoutOptionsAccordion = new CheckoutOptions();
    this.billingDetailsAccordion = new BillingDetails();
    this.deliveryDetailsAccordion = new DeliveryDetails();
    this.deliveryMethodAccordion = new DeliveryMethod();
    this.paymentMethodAccordion = new PaymentMethod();
    this.confirmOrderAccordion = new ConfirmOrder();
  }
}

module.exports = new CheckoutPage();
