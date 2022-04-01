class UserCategories {
  get loginButton() {
    return $('//div/a[contains(@href,"route=account/login")]');
  }

  get registerButton() {
    return $('//div/a[contains(@href,"route=account/register")]');
  }

  get forgottenPasswordButton() {
    return $('//div/a[contains(@href,"route=account/forgotten")]');
  }

  get myAccountButton() {
    return $('//div/a[contains(@href,"route=account/account")]');
  }

  get addressBookButton() {
    return $('//div/a[contains(@href,"route=account/address")]');
  }

  get wishListButton() {
    return $('//div/a[contains(@href,"route=account/wishlist")]');
  }

  get orderHistoryButton() {
    return $('//div/a[contains(@href,"route=account/order")]');
  }

  get downloadsButton() {
    return $('//div/a[contains(@href,"route=account/download")]');
  }

  get recurringPaymentsButton() {
    return $('//div/a[contains(@href,"route=account/recurring")]');
  }

  get rewardPointsButton() {
    return $('//div/a[contains(@href,"route=account/reward")]');
  }

  get returnsButton() {
    return $('//div/a[contains(@href,"route=account/return")]');
  }

  get transactionsButton() {
    return $('//div/a[contains(@href,"route=account/transaction")]');
  }

  get newsletterButton() {
    return $('//div/a[contains(@href,"route=account/newsletter")]');
  }
}

module.exports = UserCategories;
