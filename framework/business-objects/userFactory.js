const User = require('./user');
const { userShop } = require('../../config/config');

class UserFactory {
  static getUserFormForCreatingAccount() {
    const userParameters = {
      firstName: 'Test',
      lastName: 'Testtest',
      email: 'example@gmail.com',
      telephone: '80222482124',
      password: '123321',
    };
    return new User(userParameters);
  }

  static getUserFormForCreatingAffiliateAccount() {
    const userParameters = {
      firstName: 'Test',
      lastName: 'Testtest',
      email: 'example@gmail.com',
      telephone: '80222482124',
      password: '123321',
      company: 'MyCompany',
    };
    return new User(userParameters);
  }

  static getUserFormForChangingPassword() {
    const userParameters = {
      email: 'example@gmail.com',
      password: '123321',
      confirmPassword: '1233211',
    };
    return new User(userParameters);
  }

  static getUserFormForChangingAddress() {
    const userParameters = {
      email: 'example@gmail.com',
      password: '123321',
      firstName: 'Test',
      lastName: 'Testtest',
      address: '221b, Baker street',
      city: 'London',
      postcode: 'W1U',
      country: 'United Kingdom',
      region: 'Berkshire',
    };
    return new User(userParameters);
  }

  static get unregisteredUser() {
    return new User({
      firstName: 'q',
      lastName: 'q',
      email: 'q@qq.q',
      telephone: 'qqq',
      password: '',
    });
  }

  static get registeredUser() {
    return userShop;
  }
}

module.exports = UserFactory;
