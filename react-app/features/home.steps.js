import { expect } from 'chai';
import { Then, When } from 'cucumber';
import config from './config';
import HomePage from './fragments/HomePage';

When('I navigate to home page', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  await homePage.navigate();
  // await this.driver.sleep(1000);
});
When('I click "Say hello" button', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  await homePage.clickSayHelloButton();
});
Then('I should see "Say hello" button', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  expect(await homePage.isSayHelloButtonDisplayed()).to.equal(true);
});
Then('I should not see "Say hello" button', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  expect(await homePage.isSayHelloButtonDisplayed()).to.equal(false);
});
Then('I should see "Hello World" greeting', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  expect(await homePage.getGreeting()).to.equal("Hello World");
  // await this.driver.sleep(1000);
});
Then('I not should see "Hello World" greeting', async function () {
  const homePage = new HomePage(this.driver, config.frontendUrl);
  expect(await homePage.isGreetingDisplayed()).to.equal(false);
});
