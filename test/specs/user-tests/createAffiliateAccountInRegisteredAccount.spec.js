const { expect } = require('chai');

const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const login = require('../../../framework/page-objects/awesome-shop-pages/login.page');
const register = require('../../../framework/page-objects/awesome-shop-pages/register.page');
const userProfile = require('../../../framework/page-objects/awesome-shop-pages/userProfile.page');
const userFactory = require('../../../framework/business-objects/userFactory');
const affiliateAccount = require('../../../framework/page-objects/awesome-shop-pages/affiliateAccount.page');

const page = new Page();
const home = new Home();

describe('Creating affiliate account in registered account', () => {
  const userData = userFactory.getUserFormForCreatingAffiliateAccount();
  before(async () => {
    await page.open();
    await home.goToAccountRegister();
    await register.fillRegistrationForm(userData);
    await userProfile.logOutFromAccount();
    await page.open();
    await home.goToAccountLogin();
    await login.login(register.modifyEmailAddress, userData.password);
    await userProfile.goToAffiliateAccountRegistration();
    await affiliateAccount.fillAffiliateAccountForm(userData, register.modifyEmailAddress);
    await affiliateAccount.getMessageAfterSubmittingForm(
      affiliateAccount,
      'messageAboutAffliateForm',
      affiliateAccount.messageAfterSendingAffiliateForm,
    );
  });
  after(async () => {
    await page.close();
  });

  it('The message appears after successful registration of the affiliate account', () => {
    expect(affiliateAccount.messageAboutAffiliateForm).to.contain('Success');
  });
});
