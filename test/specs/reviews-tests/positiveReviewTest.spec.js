const { expect } = require('chai');

const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const reviewFactory = require('../../../framework/business-objects/reviewFactory');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');

const page = new Page();
const home = new Home();
const itemPage = new ItemPage();

describe('Writing a review for iPhone with product code 11', () => {
  const reviewData = reviewFactory.getGoodReview();
  before(async () => {
    await page.open();
    await home.goToItem(home.iPhoneButton);
    await itemPage.goToSection(itemPage.reviews);
    await itemPage.fillReviewForm(reviewData);
    await itemPage.getMessageAfterSubmittingForm(itemPage, 'successReviewMessage', itemPage.successMessageAfterReview);
  });
  after(async () => {
    await page.close();
  });

  it('The success message appears after submitting review', () => {
    expect(itemPage.successReviewMessage).to.include('It has been submitted');
  });
});
