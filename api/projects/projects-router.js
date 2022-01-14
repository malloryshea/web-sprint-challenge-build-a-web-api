const express = require('express');

const router = express.Router();

const {errHandler} = require('../global-middleware');
const {validateProjectId} = require('./projects-middleware');

const Projects = require('./projects-model');


router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get()
        res.json(projects)
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id', validateProjectId,  (req, res) => {
    res.json(req.project)
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
router.get('/test/test', (req,res, next) => {
    next({})
})

router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
      errorMessage: ' Something went wrong!',
      message: err.message,
      stack: err.stack,
    })
  })


module.exports = router; // Write your "projects" router here!
