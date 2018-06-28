let locUndeSePastreazaTodourile = [];

const express = require('express');
const router = express.Router();

const todoRepository = require('../repository/todo.repository')(locUndeSePastreazaTodourile);
// const todoRepository = require('../repository/todo.repository.ram')(locUndeSePastreazaTodourile);
// const todoRepository = require('../repository/todo.repository.mongo')(locUndeSePastreazaTodourile);
router.route('/delete/:id')
    .get(deleteTask);

router.route('/createtable')
    .get(createTable);

router.route('/create')
    .get(create);

router.route('/list')
    .get(list);

async function deleteTask(req, res) {
    await todoRepository.remove(req.params.id);
    res.send('Delete');
}

async function list(req, res) {

    let result = await todoRepository.list();
    res.json(result);
}

async function create(req, res) {
    await todoRepository.create(req.body);
    res.send('Create');
}

async function createTable(req, res) {
    await todoRepository.createTable();
    res.send('Create table');
}

module.exports = router;

