const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:3308/admin');

const Tasks = mongoose.model('Task', { name: String });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected MongoDB');
});

module.exports = function todoRepositoryMongo(req) {
    return {
        create,
        list
    }
}

function create(task) {
    task = new Tasks({
        name: 'name'
    });

    task.save((err, res) => {
        if (err) return err;
        return res;
    });
}

function list() {

    return Tasks.find({});
}