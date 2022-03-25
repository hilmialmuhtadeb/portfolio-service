const router = require('express').Router()
const achievmentContoller = require('../controllers/achievmentController')

router.get('', achievmentContoller.getAllAchievments)
router.post('', achievmentContoller.addNewAchievment)

module.exports = router