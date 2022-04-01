const { logger } = require('../../../../log/logger');

class Accordion {
  constructor(accordionName) {
    this.accordionName = accordionName;
  }

  get accordion() {
    return $(`//a[text()[contains(., '${this.accordionName}')]]`);
  }

  get content() {
    return this.accordion.$('./ancestor::div[@class="panel panel-default"]');
  }

  get elementToWait() {
    return this.content.$('./*[@class="panel-collapse collapse in"]');
  }

  get continueButton() {
    return this.content.$('./descendant::*[@value="Continue"]');
  }

  get agreeCheckbox() {
    return this.content.$('./descendant::input[@type="checkbox"]');
  }

  async expand() {
    await this.accordion.click();
    await this.elementToWait.waitForDisplayed();
  }

  async setTextInField(textFieldName, text) {
    const textFieldElement = await this.content.$(`./descendant::input[@placeholder='${textFieldName}']`);
    return textFieldElement.setValue(text);
  }

  async selectRadioButton(radioButtonName) {
    await this.elementToWait.waitForClickable();
    const radioButtonElement = await this.content.$(`./descendant::label[text()[contains(., '${radioButtonName}')]]`);
    return radioButtonElement.click();
  }

  async selectOptionInDropdown(dropdownName, option) {
    logger.debug(`Select ${option} in ${dropdownName}...`);
    const dropdownNameElement = await this.content.$(
      `./descendant::label[text()[contains(., '${dropdownName}')]]`,
    );
    const dropdownElement = await dropdownNameElement.$('./ancestor::div[@class="form-group required"]/select');
    await dropdownElement.waitForClickable();
    await dropdownElement.click();
    const optionElement = await dropdownElement.$(`./option[text()[contains(., '${option}')]]`);
    await optionElement.waitForDisplayed();
    await optionElement.click();
  }
}

module.exports = Accordion;
