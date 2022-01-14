const express = require('express');

const router = express.Router();

const {validateProjectId} = require('./projects-middleware');
const {nameValidator,
    descriptionValidator,
    completedValidator,} 
    = require('../global-middleware')

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

router.get('/:id/actions', validateProjectId, async (req, res, next) => {
    try {
        const projects = await Projects.getProjectActions(req.params.id)
        res.json(projects)
    }
    catch (err) {
        next(err)
    }
})

router.post('/', nameValidator, descriptionValidator, async (req, res, next) => {
    try {
        const project = await Projects.insert(req.body)
        res.status(201).json(project)
    }
    catch (err) {
        next(err)
    }
})

router.put('/:id', validateProjectId, nameValidator, descriptionValidator, completedValidator,  async (req,res, next) => {
    try {
        const project = await Projects.update(req.params.id, req.body)
        res.json(project)
    }
    catch (err) {
        next(err)
    }
})

router.delete('/:id', validateProjectId, async (req,res, next) => {
    try {
        const deleted = await Projects.remove(req.params.id)
        res.json({
            message: `project ${req.params.id} has been deleted`
        })
    }
    catch (err) {
        next(err)
    }
})


router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
      errorMessage: ' Something went wrong!',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;