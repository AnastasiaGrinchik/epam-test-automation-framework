const checkRequiredField = require('../utils/checkRequiredField');

class Review {
  constructor(reviewParameters) {
    checkRequiredField(reviewParameters);
    this.name = reviewParameters.name;
    this.review = reviewParameters.review;
    this.rating = reviewParameters.rating;
  }
}

module.exports = Review;
