const { Then, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const Home = require('../page-objects/awesome-shop-pages/home.page');
const reviewFactory = require('../business-objects/reviewFactory');
const ItemPage = require('../page-objects/awesome-shop-pages/item.page');

const home = new Home();
const itemPage = new ItemPage();
const goodReview = reviewFactory.getGoodReview();
const badReview = reviewFactory.getBadReview();

When(/^Click (iPhone|macBook)$/, async (product) => {
  if (product === await 'iPhone') {
    await home.goToItem(home.iPhoneButton);
  } else if (product === await 'macBook') {
    await home.goToItem(home.macBookButton);
  }
});

When(/^Click Reviews$/, async () => {
  await itemPage.goToSection(itemPage.reviews);
});

When(
  /^Fill and submit the review the (fully completed form|form with a small number of characters)$/,
  async (reviewForm) => {
    if (reviewForm === await 'fully completed form') {
      await itemPage.fillReviewForm(goodReview);
    } else if (reviewForm === await 'form with a small number of characters') {
      await itemPage.fillReviewForm(badReview);
    }
  },
);
When(
  /^Get the (success|failed) message after submitting a form$/,
  async (messageStatus) => {
    if (messageStatus === await 'success') {
      await itemPage.getMessageAfterSubmittingForm(
        itemPage,
        'successReviewMessage',
        itemPage.successMessageAfterReview,
      );
    } else if (messageStatus === await 'failed') {
      await itemPage.getMessageAfterSubmittingForm(itemPage, 'failedReviewMessage', itemPage.failedMessageAfterReview);
    }
  },
);
Then(
  // eslint-disable-next-line max-len
  /^The message should include the text ('It has been submitted'|'Warning: Review Text must be between 25 and 1000 characters')$/,
  (textMessage) => {
    if (textMessage === 'It has been submitted') {
      expect(itemPage.successReviewMessage).to.include('It has been submitted');
    } else if (textMessage === 'Warning: Review Text must be between 25 and 1000 characters') {
      expect(itemPage.failedReviewMessage).to.include(
        'Warning: Review Text must be between 25 and 1000 characters',
      );
    }
  },
);
