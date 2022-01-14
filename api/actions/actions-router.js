const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');
const {validateActionsId, validateProjectId} = require('./actions-middlware');
const {descriptionValidator,
    notesValidator,} 
    = require('../global-middleware')
router.get('/', async (req, res, next) => {
    try {
        const actions = await Actions.get()
        res.json(actions)
    }
    catch (err) {
        next(err)
        }
})

router.get('/:id', validateActionsId, (req,res) => {
    res.json(req.action)
})

router.post('/', validateProjectId, descriptionValidator, notesValidator, async (req, res, next) => {
    try {
        const created = await Actions.insert(req.body)
        res.status(201).json(created)
    }
    catch (err) {
        next(err)
    }
})

router.put('/:id', validateActionsId, validateProjectId, descriptionValidator, notesValidator, async(req, res, next) => {
    try {
        const updated = await Actions.update(req.params.id, req.body)
        res.json(updated)
    }
    catch (err) {
        next(err)
    }
})

router.delete('/:id', validateActionsId, async (req, res, next) => {
    try {
        const deleted = await Actions.remove(req.params.id)
        res.json({
            message: `action ${req.params.id} has been removed`
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
module.exports = router;// Write your "actions" router here!
