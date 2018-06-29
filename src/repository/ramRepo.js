module.exports = function todoRepositoryRam(storage) {
    return {
        create,
        list,
        remove,
    };

    function create(task) {
        if (task === undefined) return { err: 'Task not found' };

        return storage.push({ id: storage.length, task });
    }

    function list() {
        return storage;
    }

    function remove(taskID) {
        if (taskID === undefined) return { err: 'Task id not found' };
        const index = storage.findIndex((elem) => { return (elem.id == taskID) });
        if (index === -1) throw new Error(`Task with id: ${taskID} doesn't exist`);

        return storage.splice(index, 1);
    }

};
