const Achievment = require('../models/Achievment')

const addNewAchievment = (req, res, next) => {
  const body = req.body

  const newAchievment = new Achievment({
    title: body.title,
    description: body.description,
    date: body.date
  })

  newAchievment.save()
    .then(result => {
      res.status(201).json({
        status: res.statusCode,
        message: 'success to add new achievment.',
        data: result
      })
    })
    .catch(err => {
      res.status(400).json({
        status: res.statusCode,
        message: 'failed to add new achievment.'
      })
    })
}

const getAllAchievments = (req, res, next) => {
  Achievment.find({}, (err, achievments) => {
    res.status(200).json({
      status: res.statusCode,
      message: 'success to get all achievments',
      data: achievments
    })
  })
}

module.exports = {
  addNewAchievment,
  getAllAchievments
}