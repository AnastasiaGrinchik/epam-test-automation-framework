const checkRequiredField = require('../utils/checkRequiredField');

class Address {
  constructor({
    postCode, country, state, city, street, building, apartment,
  }) {
    checkRequiredField({
      postCode, country, state, city, street, building, apartment,
    });
    this.postCode = postCode;
    this.country = country;
    this.state = state;
    this.city = city;
    this.street = street;
    this.building = building;
    this.apartment = apartment;
  }
}

module.exports = Address;
