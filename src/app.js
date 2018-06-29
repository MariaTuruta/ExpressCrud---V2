const express = require('express');
const bodyParser = require('body-parser');

module.exports = (connection) => {
    const app = express();

    const taskRepository = require('./repository/repoFactory')(connection);
    const taskRoutes = require('./routes/CRUD')(taskRepository);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api/v1/tasks', taskRoutes);

    return app;
}
