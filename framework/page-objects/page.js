const { elementToBeClickable, visibilityOf } = require('wdio-wait-for');
const { paypalTimeout, waitPaypalInterval, baseUrl } = require('../../config/config');
const { logger } = require('../../log/logger');

class Page {
  async open(url) {
    logger.debug(`Opening ${url ?? baseUrl}...`);
    await browser.url(url ?? baseUrl);
  }

  async close() {
    logger.debug('Deleting session...');
    await browser.deleteSession();
  }

  async fillInput(inputElement, data) {
    await inputElement.setValue(data);
  }

  async switchTo(url) {
    logger.debug(`Switching to ${url}...`);
    await browser.waitUntil(async () => browser.switchWindow(url), {
      timeout: paypalTimeout, interval: waitPaypalInterval,
    });
  }

  async switchToWindowByTabNumber(number) {
    logger.debug('Switching window...');
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[number]);
  }

  async fillSelect(selectElement, value) {
    const select = await selectElement;
    await browser.waitUntil(elementToBeClickable(select));
    await select.click();
    const optionElement = await select.$(`//option[contains(text(), "${value}")]`);
    await browser.waitUntil(visibilityOf(optionElement));
    await optionElement.click();
  }

  async getMessageAfterSubmittingForm(object, key, messageGetter) {
    logger.debug('Getting message...');
    let field = await messageGetter;
    field = await field.getText();
    object[key] = await field;
  }
}
module.exports = Page;
