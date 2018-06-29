const config = require('config');

const ADAPTERS = {
    MONGO: 'mongo',
    MYSQL: 'mysql',
    RAM: 'ram'
}

function connFactory() {
    switch (config.adapter) {
        case ADAPTERS.MONGO:
            return require('./mongoConn')(config[ADAPTERS.MONGO]);

        case ADAPTERS.MYSQL:
            return require('./sqlConn')(config[ADAPTERS.MYSQL]);

        default:
            return {
                connect: () => {
                    return new Promise(resolve => {
                        resolve([]);
                    });
                }
            };
    }
}

module.exports = connFactory;
module.exports.ADAPTERS = ADAPTERS;
