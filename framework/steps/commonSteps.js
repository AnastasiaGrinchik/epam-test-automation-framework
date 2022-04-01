const { Given } = require('@wdio/cucumber-framework');
const Page = require('../page-objects/page');

const page = new Page();

Given(/^Open home page$/, async () => {
  await page.open();
});
