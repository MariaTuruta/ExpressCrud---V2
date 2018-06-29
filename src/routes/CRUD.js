let locUndeSePastreazaTodourile = [];

const express = require('express');
const router = express.Router();

module.exports = (todoRepository) => {
    router.route('/')
        .post(create)
        .get(list);

    router.route('/:id')
        .delete(remove);

    return router;

    async function remove(req, res) {
        await todoRepository.remove(req.params.id);
        res.send('Delete');
    }

    async function list(req, res) {
        let result = await todoRepository.list();
        res.json(result);
    }

    async function create(req, res) {//
        await todoRepository.create(req.body.task);
        res.send('Create');
    }
}
