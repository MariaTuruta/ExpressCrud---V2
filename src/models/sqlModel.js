const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Task = sequelize.define('Tasks', {
        task: {
            type: Sequelize.STRING,
        },
    },
        {
            freezeTableName: true,
        });
    Task.sync();
}
