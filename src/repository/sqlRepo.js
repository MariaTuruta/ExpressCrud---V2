module.exports = (sequelize) => {
    const result = require('../models/sqlModel')(sequelize);
    const { Tasks } = sequelize.models;

    function create(task) {
        if (task === undefined) {
            return {
                err: 'No task recieved',
            };
        }

        return Tasks.create({
            task,
        });
    }

    function list() {

        return Tasks.findAll({});
    }

    function remove(taskID) {
        if (taskID === undefined) {
            return {
                err: 'Task id not found',
            };
        }

        return Tasks.destroy({ where: { id: taskID } });
    }

    return {
        create,
        list,
        remove,
    }
};


