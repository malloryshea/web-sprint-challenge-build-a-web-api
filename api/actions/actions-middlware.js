const Actions = require('./actions-model');
const Projects = require('../projects/projects-model');

async function validateActionsId(req, res, next) {
    try {
        const action = await Actions.get(req.params.id)
        if (action) {
            req.action = action
            next();
        }
        else {
            res.status(404).json({message: 'this action does not exist'})
        }
    }
    catch (err) {
        next(err);
    }
}

async function validateProjectId(req, res, next) {
    try {
        if (req.body.project_id) {
            const projectId = await Projects.get(req.body.project_id)
            if (projectId) {
                next()
            }
            else{
                res.status(404).json({
                    message: `${req.body.project_id} is not a valid id`
                })
            }
        }
        else {
            res.status(400).json({
                message: "project ID is required"
            })
        }
    }
    catch (err) {
        next(err);
    }
}


module.exports = {
    validateActionsId,
    validateProjectId,
}// add middlewares here related to actions
