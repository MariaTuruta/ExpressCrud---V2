const config = require('config');
const { ADAPTERS } = require('../connectors/connFactory');

module.exports = (connection) => {
  switch (config.adapter) {
    case ADAPTERS.MONGO:
      return require('./mongoRepo')(connection);

    case ADAPTERS.MYSQL:
      return require('./sqlRepo')(connection);

    default:
      return require('./ramRepo')(connection);
  }
}
