const router = require('express').Router()
const authenticationController = require('../controllers/authenticationController')

router.post('', authenticationController.loginHandler)

module.exports = router