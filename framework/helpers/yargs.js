const opts = require('yargs')
  .scriptName('npm run wdio')
  .help()
  .usage('Usage: $0 --browser [list of browsers] --suite [list of suites] --headless')
  .example('$0 npm run wdio -- --browser chrome', 'run tests in browser chrome')
  .option('s', {
    alias: 'suite',
    describe: 'choose suite',
    choices: ['coupons',
      'priceofproductbyn',
      'priceofproductrusrub',
      'payments',
      'add3ditemtocomparisontest',
      'comparetwoproductstest',
      'deleteitemfromcomparisontest',
      'filterproductbytypetest',
      'negativereviewtest',
      'positivereviewtest',
      'negativesearchproducttest',
      'searchproducttest',
      'addproducttoshoppingcarttest',
      'addquantityininvalidformattest',
      'changeproductquantitytest',
      'deleteproductfromshoppingcarttest',
      'telegramurl',
      'twitterurl',
      'createaccountinshop',
      'createaffiliateaccountinregisteredaccount',
      'modifyaddressbookentriesInaccount',
      'passwordchangefailedinaccount',
      'regressiontests'],
  })
  .option('b', {
    alias: 'browser',
    describe: 'choose browser',
    default: 'chrome',
    choices: ['chrome', 'firefox'],
  })
  .option('headless', {
    describe: 'Set headless for browser',
    type: 'boolean',
    default: false,
  })
  .option('threads', {
    alias: 'threads',
    describe: 'choose number of threads',
    default: 1,
  })
  .argv;

module.exports = opts;
