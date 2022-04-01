const { expect } = require('chai');

const Page = require('../../../framework/page-objects/page');
const Home = require('../../../framework/page-objects/awesome-shop-pages/home.page');
const reviewFactory = require('../../../framework/business-objects/reviewFactory');
const ItemPage = require('../../../framework/page-objects/awesome-shop-pages/item.page');

const page = new Page();
const home = new Home();
const itemPage = new ItemPage();

describe('Review can not be written due to the small number of symbols', () => {
  const reviewData = reviewFactory.getBadReview();
  before(async () => {
    await page.open();
    await home.goToItem(home.macBookButton);
    await itemPage.goToSection(itemPage.reviews);
    await itemPage.fillReviewForm(reviewData);
    await itemPage.getMessageAfterSubmittingForm(itemPage, 'failedReviewMessage', itemPage.failedMessageAfterReview);
  });
  after(async () => {
    await page.close();
  });

  it('The failed message appears after submitting short review', () => {
    expect(itemPage.failedReviewMessage).to.include('Warning: Review Text must be between 25 and 1000 characters!');
  });
});
