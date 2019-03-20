const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

chai.use(require('sinon-chai'));

const dateWrapper = require('../lib/dateWrapper');
const logger = require('../lib/logger');

describe('logger', () => {
  describe('log', () => {
    let now;
    before(() => {
      now = new Date(1234567890123);
      dateWrapper.setDate(now);
    });
    after(() => dateWrapper.setDate());
    before(() => sinon.spy(console, 'log'));
    after(() => console.log.restore());

    it('should print current date and the message to console', () => {
      logger.log('Hello World!');
      expect(console.log).to.have.been.calledWith('2009-02-13T23:31:30.123Z', 'Hello World!')
    });
  });
});
