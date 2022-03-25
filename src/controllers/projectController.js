const Project = require('../models/Project')

const getAllProjects = (req, res, next) => {
  Project.find({}, (err, result) => {
    const projects = []

    result.forEach(project => projects.push(project))
    
    res.status(200).json({
      status: res.statusCode,
      message: 'success get all projects',
      data: projects
    })
  })
}

const addNewProject = (req, res, next) => {
  const body = req.body;

  const newProject = new Project({
    name: body.name,
    url: body.url,
    techStack: body.techStack,
    thumbnail: body.thumbnail,
    screenShot: body.screenShot,
    description: body.description
  })

  newProject.save()
    .then(result => {
      res.status(201).json({
        status: res.statusCode,
        message: 'success add new project',
        data: result
      })
    })
    .catch(err => {
      res.status(400).json({
        status: res.statusCode,
        message: 'failed add new project'
      })
    })
}

module.exports = {
  getAllProjects,
  addNewProject
}