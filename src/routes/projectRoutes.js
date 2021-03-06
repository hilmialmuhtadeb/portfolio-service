const router = require('express').Router()
const projectController = require('../controllers/projectController')

router.get('', projectController.getAllProjects)
router.post('', projectController.addNewProject)

module.exports = router