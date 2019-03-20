import { AfterAll, BeforeAll, setDefaultTimeout, setWorldConstructor } from 'cucumber';
import webdriver from 'selenium-webdriver';
import config from '../config';

let driver;

class CustomWorld {
  constructor() {
    this.driver = driver;
  }
}

setDefaultTimeout(config.cucumber.defaultTimeout);
setWorldConstructor(CustomWorld);

AfterAll(() => driver && driver.close());

BeforeAll(async () => {
  const builder = new webdriver.Builder().withCapabilities({ browserName: 'chrome' });
  if (config.seleniumServerUrl) {
    builder.usingServer(config.seleniumServerUrl);
  }
  driver = builder.build();
});
