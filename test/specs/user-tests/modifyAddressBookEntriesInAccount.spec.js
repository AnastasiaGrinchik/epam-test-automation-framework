const { expect } = require('chai');

const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const login = require('../../../framework/page-objects/awesome-shop-pages/login.page');
const userProfile = require('../../../framework/page-objects/awesome-shop-pages/userProfile.page');
const userFactory = require('../../../framework/business-objects/userFactory');
const addingAddress = require('../../../framework/page-objects/awesome-shop-pages/addingAddress.page');

const page = new Page();
const home = new Home();

describe('Modifying address book entries in account', () => {
  const userData = userFactory.getUserFormForChangingAddress();
  before(async () => {
    await page.open();
    await home.goToAccountLogin();
    await login.login(userData.email, userData.password);
    await userProfile.goToModifyAddress();
    await addingAddress.goToNewAddress();
    await addingAddress.fillAddressForm(userData);
    await addingAddress.getMessageAfterSubmittingForm(
      addingAddress,
      'messageAddress',
      addingAddress.messageAfterSendingAddressForm,
    );
  });
  after(async () => {
    await page.close();
  });

  it('Address changed successfully', () => {
    expect(addingAddress.messageAddress).to.be.equal('Your address has been successfully added');
  });
});
