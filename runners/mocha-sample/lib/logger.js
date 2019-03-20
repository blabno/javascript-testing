const dateWrapper = require('./dateWrapper');

const log = message => console.log(dateWrapper.getDate().toISOString(), message);

module.exports = {
  log
};
