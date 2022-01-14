const express = require('express');

const router = express.Router();

const Projects = require('./projects-model');


router.get('/', (req,res) => {
    res.json({
        message: "Good boy"
    })
})

module.exports = router; // Write your "projects" router here!
