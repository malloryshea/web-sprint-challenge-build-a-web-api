const express = require('express');

const router = express.Router();

const Projects = require('./projects-model');


router.get('/', (req,res) => {
    res.json({
        message: "get all -projects"
    })
})

router.get('/:id', (req,res) => {
    res.json({
        message: "get by id -projects"
    })
})

router.get('/:id/actions', (req,res) => {
    res.json({
        message: "get actions by id -projects"
    })
})

router.post('/', (req,res) => {
    res.json({
        message: "create new -projects"
    })
})

router.put('/:id', (req,res) => {
    res.json({
        message: "update -projects"
    })
})

router.delete('/:id', (req,res) => {
    res.json({
        message: "delete -projects"
    })
})

module.exports = router; // Write your "projects" router here!
