const {
  Given, When, After, Then,
} = require('@wdio/cucumber-framework');
const itemsCategory = require('../page-objects/awesome-shop-pages/itemsCategory.page');
const checkout = require('../page-objects/awesome-shop-pages/checkout.page');
const loginPage = require('../page-objects/paypal-pages/login.page');
const addingCardFormPage = require('../page-objects/paypal-pages/addingCardForm.page');
const profilePage = require('../page-objects/paypal-pages/profile.page');
const orderConfirmationPage = require('../page-objects/awesome-shop-pages/orderConfirmation.page');
const UserFactory = require('../business-objects/userFactory');
const AddressFactory = require('../business-objects/addressFactory');
const PaymentCardsFactory = require('../business-objects/paymentsCardFactory');
const { userPayPal, paypalTimeout } = require('../../config/config');

After({ tags: '@reloadSession' }, async () => {
  await browser.reloadSession();
});
When('User opens checkout', async () => {
  await itemsCategory.openCheckout();
});
Given('{string} fills required fields in checkout with {string}', async (userData, addressData) => {
  if (userData === 'registeredUser' && addressData === 'existingAddress') {
    const user = UserFactory[userData];
    await checkout.checkoutOptionsAccordion.login(user.login, user.password);
    await checkout.billingDetailsAccordion.continueWithExistingAddress();
    await checkout.deliveryDetailsAccordion.continueWithExistingAddress();
  } else {
    const user = UserFactory[userData];
    const address = AddressFactory[addressData];
    await checkout.checkoutOptionsAccordion.continueAsAGuest();
    await checkout.billingDetailsAccordion.fillGuestInfo(address, user);
  }
  await checkout.deliveryMethodAccordion.continue();
  await checkout.paymentMethodAccordion.continueWithPaymentMethod('PayPal Express Checkout');
  await checkout.confirmOrderAccordion.confirmOrderWithPayPal();
});
When('User pays by {string}', async (cardName) => {
  if (cardName === 'credit') {
    await loginPage.login(userPayPal.login, userPayPal.password);
    await profilePage.payOnCredit();
  } else {
    const card = PaymentCardsFactory[cardName];
    await loginPage.login(userPayPal.login, userPayPal.password);
    await addingCardFormPage.addNewCard(card);
    await profilePage.selectCardByNumber(card);
  }
  await profilePage.submitPayment();
  await orderConfirmationPage.switchTo('awesome-shop');
});
Then('Order confirmation notification should appear', async () => {
  const notificationText = 'Your order has been placed!';
  await expect(orderConfirmationPage.successNotification).toHaveTextContaining(notificationText);
});
Then('Order creation error should appear', async () => {
  const notificationText = 'There was an error';
  await orderConfirmationPage.unsuccessNotification.waitForDisplayed({ timeout: paypalTimeout });
  await expect(orderConfirmationPage.unsuccessNotification).toHaveTextContaining(notificationText);
});
