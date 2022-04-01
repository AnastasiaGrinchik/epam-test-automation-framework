const { expect } = require('chai');
const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const login = require('../../../framework/page-objects/awesome-shop-pages/login.page');
const userProfile = require('../../../framework/page-objects/awesome-shop-pages/userProfile.page');
const userFactory = require('../../../framework/business-objects/userFactory');
const changingPassword = require('../../../framework/page-objects/awesome-shop-pages/changingPassword.page');

const page = new Page();
const home = new Home();

describe('Password change failed in account', () => {
  const userData = userFactory.getUserFormForChangingPassword();
  before(async () => {
    await page.open();
    await home.goToAccountLogin();
    await login.login(userData.email, userData.password);
    await userProfile.goToChangePassword();
    await changingPassword.fillChangingForm(userData.password, userData.confirmPassword);
    await changingPassword.getMessageAfterSubmittingForm(
      changingPassword,
      'messageAboutChangingPassword',
      changingPassword.messageAfterFailedChangingPassword,
    );
  });
  after(async () => {
    await page.close();
  });

  it('Unsuccessful password change when the password and password confirmation fields do not match', () => {
    expect(changingPassword.messageAboutChangingPassword).to.be.equal('Password confirmation does not match password!');
  });
});
