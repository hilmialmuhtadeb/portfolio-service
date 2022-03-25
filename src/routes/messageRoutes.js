const router = require('express').Router()
const messageController = require('../controllers/messageController')

router.get('', messageController.getAllMessages)
router.post('', messageController.addNewMessage)

module.exports = router