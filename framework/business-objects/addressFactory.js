const Address = require('./address');

class AddressFactory {
  static get defaultAddress() {
    return new Address({
      postCode: 'q',
      country: 'Andorra',
      state: 'Canillo',
      city: 'qq',
      street: 'qqq',
      building: 'q',
      apartment: 'q',
    });
  }
}
module.exports = AddressFactory;
