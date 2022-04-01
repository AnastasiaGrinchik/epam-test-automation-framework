const userPayPal = {
  password: 'i%J0As7!',
  login: 'sb-t7dxa3301166@personal.example.com',
};

const userShop = {
  password: '1234',
  login: 'x.x.x.x.x.x@internet.ru',
};

const baseUrl = 'https://awesome-shop.ru/';

const defaultWait = 4000;
const paypalTimeout = 60000;
const waitPaypalInterval = 1000;

module.exports = {
  baseUrl, defaultWait, userPayPal, userShop, paypalTimeout, waitPaypalInterval,
};
