const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
        const project = await Projects.get(req.params.id)
        if (project) {
            req.project = project
            next();
        }
        else {
            res.status(404).json({message: 'this project does not exist'})
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    validateProjectId,
}
// add middlewares here related to projects
