import { By, until } from 'selenium-webdriver';

const sayHelloButtonSelector = By.css('button.app-btn');
const greetingSelector = By.css('h1.greeting');

export default class HomePage {

  constructor(driver, baseUrl) {
    this.driver = driver;
    this.baseUrl = baseUrl;
  }

  async navigate() {
    await this.driver.get(this.baseUrl);
    await this.driver.wait(until.elementIsVisible(this.getSayHelloButtonElement()));
  }

  getSayHelloButtonElement() {
    return this.driver.findElement(sayHelloButtonSelector);
  }

  async isSayHelloButtonDisplayed() {
    const elements = await this.driver.findElements(sayHelloButtonSelector);
    return !!elements.length;
  }

  async isGreetingDisplayed() {
    const elements = await this.driver.findElements(greetingSelector);
    return !!elements.length;
  }

  clickSayHelloButton() {
    return this.getSayHelloButtonElement().click();
  }

  getGreeting() {
    return this.driver.findElement(greetingSelector).getText();
  }
}
