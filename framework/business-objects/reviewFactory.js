const Review = require('./review');

class ReviewFactory {
  static getGoodReview() {
    const reviewParameters = {
      name: 'Test Testov',
      review: 'Best of all keeps charging in the cold',
      rating: '2',
    };
    return new Review(reviewParameters);
  }

  static getBadReview() {
    const reviewParameters = {
      name: 'Test Testov',
      review: 'Too much cost',
      rating: '1',
    };
    return new Review(reviewParameters);
  }
}

module.exports = ReviewFactory;
