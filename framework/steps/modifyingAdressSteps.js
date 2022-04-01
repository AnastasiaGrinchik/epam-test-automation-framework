const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const Home = require('../page-objects/awesome-shop-pages/home.page');
const login = require('../page-objects/awesome-shop-pages/login.page');
const userProfile = require('../page-objects/awesome-shop-pages/userProfile.page');
const userFactory = require('../business-objects/userFactory');
const addingAddress = require('../page-objects/awesome-shop-pages/addingAddress.page');

const home = new Home();
const userData = userFactory.getUserFormForChangingAddress();

When(/^Go to login page$/, async () => {
  await home.goToAccountLogin();
});
When(/^Log In$/, async () => {
  await login.login(userData.email, userData.password);
});
When(/^Go to modify address page$/, async () => {
  await userProfile.goToModifyAddress();
});
When(/^Click New Address$/, async () => {
  await addingAddress.goToNewAddress();
});
When(/^Fill the form with the address and send it$/, async () => {
  await addingAddress.fillAddressForm(userData);
});
When(/^Get the message after submitting address modifying form$/, async () => {
  await addingAddress.getMessageAfterSubmittingForm(
    addingAddress,
    'messageAddress',
    addingAddress.messageAfterSendingAddressForm,
  );
});
Then(/^The message should be 'Your address has been successfully added'$/, () => {
  expect(addingAddress.messageAddress).to.be.equal('Your address has been successfully added');
});
