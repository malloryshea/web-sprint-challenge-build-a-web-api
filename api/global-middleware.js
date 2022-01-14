function nameValidator(req, res, next) {
    if (req.body.name) {
        next()
    }
    else {
        res.status(400).json({
            message: "Name is required"
        })
    }
}

function descriptionValidator(req, res, next) {
    if (req.body.description) {
        next()
    }
    else {
        res.status(400).json({
            message: "Description is required"
        })
    }
}

function completedValidator(req, res, next) {
    if (req.body.completed === true || req.body.completed === false) {
        next()
    }
    else {
        res.status(400).json({
            message: "Completion is required"
        })
    }
}

function notesValidator(req, res, next) {
    if (req.body.notes) {
        next()
    }
    else {
        res.status(400).json({
            message: "Notes are required"
        })
    }
}

  module.exports = {
    nameValidator,
    descriptionValidator,
    completedValidator,
    notesValidator,

  }
