const Story = require('../models/Story')

const addNewStory = (req, res, next) => {
  const body = req.body

  const newStory = new Story({
    title: body.title,
    description: body.description,
    pictures: body.pictures || [],
    date: body.date
  })

  newStory.save()
    .then(result => {
      res.status(201).json({
        status: res.statusCode,
        message: 'success add new story',
        data: result
      })
    })
    .catch(err => {
      res.status(400).json({
        status: res.statusCode,
        message: 'failed to add new story'
      })
    })
}

const getAllStories = (req, res, next) => {
  Story.find({}, (err, stories) => {
    res.status(200).json({
      status: res.statusCode,
      message: 'success to get all stories.',
      data: stories
    })
  })
}

module.exports = {
  addNewStory,
  getAllStories
}