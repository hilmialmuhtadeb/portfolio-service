const router = require('express').Router()
const storyController = require('../controllers/storyController')

router.get('', storyController.getAllStories)
router.post('', storyController.addNewStory)

module.exports = router