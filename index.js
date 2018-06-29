const config = require('config');
const connFactory = require('./src/connectors/connFactory');

connFactory()
    .connect()
    .then((connection) => {
        const app = require('./src/app')(connection);

        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log('Server started on: ' + port);
        });
    })
    .catch(console.error);
