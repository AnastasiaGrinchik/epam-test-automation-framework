const itemsCategory = require('../../../framework/page-objects/awesome-shop-pages/itemsCategory.page');
const checkout = require('../../../framework/page-objects/awesome-shop-pages/checkout.page');
const Address = require('../../../framework/business-objects/address');
const User = require('../../../framework/business-objects/user');
const loginPage = require('../../../framework/page-objects/paypal-pages/login.page');
const profilePage = require('../../../framework/page-objects/paypal-pages/profile.page');
const addingCardFormPage = require('../../../framework/page-objects/paypal-pages/addingCardForm.page');
const PaymentCard = require('../../../framework/business-objects/paymentCard');
const orderConfirmationPage = require('../../../framework/page-objects/awesome-shop-pages/orderConfirmation.page');
const { userPayPal, userShop } = require('../../../config/config');

describe('payments', () => {
  const address = new Address({
    postCode: 'q',
    country: 'Andorra',
    state: 'Canillo',
    city: 'qq',
    street: 'qqq',
    building: 'q',
    apartment: 'q',
  });
  const user = new User({
    firstName: 'q',
    lastName: 'q',
    email: 'q@qq.q',
    telephone: 'qqq',
    password: '',
  });
  beforeEach(async () => {
    await itemsCategory.open();
    await itemsCategory.selectItemCategory('Laptops & Notebooks', 'Show All Laptops & Notebooks');
    const macBook = await itemsCategory.getItemByName('Air');
    await macBook.addToCart();
    await itemsCategory.openCheckout();
  });
  afterEach(async () => {
    await browser.reloadSession();
  });
  it('Possibility of payment by credit card (Visa) to the guest with current PayPal account', async () => {
    const paymentCard = new PaymentCard({
      firstName: 'John',
      lastName: 'Doe',
      cardNumber: '4032037867747574',
      expirationDate: '12/24',
      cvv: '065',
    });
    await checkout.checkoutOptionsAccordion.continueAsAGuest();
    await checkout.billingDetailsAccordion.fillGuestInfo(address, user);
    await checkout.deliveryMethodAccordion.continue();
    await checkout.paymentMethodAccordion.continueWithPaymentMethod('PayPal Express Checkout');
    await checkout.confirmOrderAccordion.confirmOrderWithPayPal();
    await loginPage.login(userPayPal.login, userPayPal.password);
    await addingCardFormPage.addNewCard(paymentCard);
    await profilePage.selectCardByNumber(paymentCard);
    await profilePage.submitPayment();
    await orderConfirmationPage.switchTo('awesome-shop');
    const notificationText = 'Your order has been placed!';
    await expect(await orderConfirmationPage.successNotification).toHaveTextContaining(notificationText);
  });
  it('Impossibility of payment by credit card (Mastercard) to the guest with current PayPal account', async () => {
    const paymentCard = new PaymentCard({
      firstName: 'John',
      lastName: 'Doe',
      cardNumber: '5110920531913767',
      expirationDate: '05/26',
      cvv: '404',
    });
    await checkout.checkoutOptionsAccordion.continueAsAGuest();
    await checkout.billingDetailsAccordion.fillGuestInfo(address, user);
    await checkout.deliveryMethodAccordion.continue();
    await checkout.paymentMethodAccordion.continueWithPaymentMethod('PayPal Express Checkout');
    await checkout.confirmOrderAccordion.confirmOrderWithPayPal();
    await loginPage.login(userPayPal.login, userPayPal.password);
    await addingCardFormPage.addNewCard(paymentCard);
    await profilePage.selectCardByNumber(paymentCard);
    await profilePage.submitPayment();
    await orderConfirmationPage.switchTo('awesome-shop');
    const notificationText = 'There was an error';
    await expect(await orderConfirmationPage.unsuccessNotification).toHaveTextContaining(notificationText);
  });
  it('Possibility of payment by PayPal Credit to the registered with current PayPal account', async () => {
    await checkout.checkoutOptionsAccordion.login(userShop.login, userShop.password);
    await checkout.billingDetailsAccordion.continueWithExistingAddress();
    await checkout.deliveryDetailsAccordion.continueWithExistingAddress();
    await checkout.deliveryMethodAccordion.continue();
    await checkout.paymentMethodAccordion.continueWithPaymentMethod('PayPal Express Checkout');
    await checkout.confirmOrderAccordion.confirmOrderWithPayPal();
    await loginPage.login(userPayPal.login, userPayPal.password);
    await profilePage.payOnCredit();
    await profilePage.submitPayment();
    await orderConfirmationPage.switchTo('awesome-shop');
    const notificationText = 'Your order has been placed!';
    await expect(await orderConfirmationPage.successNotification).toHaveTextContaining(notificationText);
  });
});
