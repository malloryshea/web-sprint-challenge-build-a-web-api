const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');

router.get('/', (req,res) => {
    res.json({
        message: "get all -actions"
    })
})

router.get('/:id', (req,res) => {
    res.json({
        message: "get by id -actions"
    })
})

router.post('/', (req,res) => {
    res.json({
        message: "create new -actions"
    })
})

router.put('/:id', (req,res) => {
    res.json({
        message: "update -actions"
    })
})

router.delete('/:id', (req,res) => {
    res.json({
        message: "delete -actions"
    })
})

module.exports = router;// Write your "actions" router here!
