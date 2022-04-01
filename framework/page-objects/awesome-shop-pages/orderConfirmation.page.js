const HomePage = require('./home.page');

class OrderConfirmationPage extends HomePage {
  get successNotification() {
    return $('//h1[text()[contains(., "Your order has been placed!")]]');
  }

  get unsuccessNotification() {
    return $('//h1[text()[contains(., "There was an error")]]');
  }
}
module.exports = new OrderConfirmationPage();
