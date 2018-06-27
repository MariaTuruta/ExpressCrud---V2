let locUndeSePastreazaTodourile = [];

const express = require('express');
const router = express.Router();

const todoRepository = require('../repository/todo.repository')(locUndeSePastreazaTodourile);
router.route('/')
    .post(create)
    .get(list);

router.route('/:id')
    .delete(deleteTask);

async function create(req, res) {
    const result =  await todoRepository.create(req.body);
    res.json(result);
}

async function list(req, res) {
    const list = await todoRepository.list();
    console.log(list);
    res.json(list);
}
async function deleteTask(req, res){
    console.log(req.params);
    await todoRepository.remove(req.params.id);
    res.sendStatus(204).end();
}

module.exports = router;

