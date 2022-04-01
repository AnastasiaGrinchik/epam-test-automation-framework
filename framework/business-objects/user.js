const checkRequiredField = require('../utils/checkRequiredField');

class User {
  constructor(userParameters) {
    checkRequiredField(userParameters);
    this.firstName = userParameters.firstName;
    this.lastName = userParameters.lastName;
    this.email = userParameters.email;
    this.telephone = userParameters.telephone;
    this.password = userParameters.password;
    this.confirmPassword = userParameters.confirmPassword;
    this.company = userParameters.company;
    this.address = userParameters.address;
    this.postcode = userParameters.postcode;
    this.city = userParameters.city;
    this.country = userParameters.country;
    this.region = userParameters.region;
  }
}

module.exports = User;
