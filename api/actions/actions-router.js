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

router.get('/test/test', (req,res,next) => {
    next({})

})

router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
      errorMessage: ' Something went wrong!',
      message: err.message,
      stack: err.stack,
    })
  })
module.exports = router;// Write your "actions" router here!
