module.exports = (mongoose) => {
    require('../models/mongoModel')(mongoose);
    const { Task } = mongoose.models;

    function create(task) {
        if (task === undefined) {
            return {
                err: 'No task recieved',
            };
        }
    
        task = new Task({
            task
        });
    
        const result = task.save();
    
        return {
            id: result._id,
        };
    }
    
    function list() {
    
        return Task.find({});
    }
    
    async function remove(taskID) {
        if (taskID === undefined) {
            return {
                err: 'TaskID not found',
            };
        }
        const result = await Task.remove({
            _id: taskID,
        });
    
        return result;
    }

    return {
        create,
        list,
        remove,
    }
};


