const { expect } = require('chai');

const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const register = require('../../../framework/page-objects/awesome-shop-pages/register.page');
const UserFactory = require('../../../framework/business-objects/userFactory');

const page = new Page();
const home = new Home();

describe('Creating account in shop', () => {
  const userData = UserFactory.getUserFormForCreatingAccount();
  before(async () => {
    await page.open();
    await home.goToAccountRegister();
    await register.fillRegistrationForm(userData);
    await register.getMessageAfterSubmittingForm(
      register,
      'messageAboutRegistration',
      register.messageAfterRegistration,
    );
  });
  after(async () => {
    await page.close();
  });

  it('The message appears after successful registration', () => {
    expect(register.messageAboutRegistration).to.be.equal('Your Account Has Been Created!');
  });
});
