# Test automation framework for EPAM AT Lab (CW52 JS KB Team)

### Description

Awesome Shop is a e-shop with a wide range of appliances. In the course of work, our team is writing automated tests to check the functionality of the site [awesome-shop.ru](https://awesome-shop.ru)

### Based on

1. **[Node.js](https://nodejs.org/en/)** as a Javascript code execution environment
2. **[WebdriverIO](https://webdriver.io/)** to make it easier to interact with application and provides a set of plug-ins to help you build a scalable, robust, and stable test suite.
3. **[Mocha](https://mochajs.org/)** to provide functions that are executed in a specific order and that logs their results in a terminal window.
4. **[Chai](https://www.chaijs.com)** to compare the output of a certain test with its expected value.
5. **[Yargs](http://yargs.js.org)** for building interactive command line tools by parsing arguments and generating an elegant user interface.
6. **[Cucumber](https://cucumber.io/)** this tool will boost engineering team's performance by employing Behavior-Driven Development (BDD).

### Getting started

For a successful start on our project, you need to carry out a number of actions:

1. Install:

   > - **[Git](https://git-scm.com/downloads)** version 2.34 or higher.
   > - **[Node.js](https://nodejs.org/en/)** version 16.00 or higher.
   > - **[VSCode](https://code.visualstudio.com/)** at least version 1.64 or **[WebStorm](https://www.jetbrains.com/webstorm/)** at least version 2021.2.

2. Clone this [repository](git@git.epam.com:Aliaksandr_Yeutushkou/at-lab-2021cw52-js-kb-team.git).

3. Install dependencies (mentioned in section **Based on**) via running `npm install`.

4. And join our project =)

### CLI parameters

- `npm run lint` starts eslint.
- `npm run wdio:cucumber` runs all cucumber tests.
- `npm run wdio` runs all tests.
- `npm test -- --browser nameBrowser` runs tests in the selected browser.
- `npm test -- --suite nameSuite` runs selected suites.

### Contributors

- **Aliaksandr Yeutushkou** as a Testing Team Lead, Product Owner, Mentor and Test Automation Engineer.
- **Kseniya Shukanava** as a Test Automation Engineer.
- **Artsem Kanaval** as a Test Automation Engineer.
- **Tsimur Zibzibadze** as a Test Automation Engineer.
- **Nastassia Hrynchyk** as a Test Automation Engineer.

### Extra

- Our team works with GitLab CI.
