const Message = require('../models/Message')

const dateBuilder = (timestamp) => {
  const timeSplitted = timestamp.toString().split(' ')
  const date = timeSplitted[2]
  const month = timeSplitted[1]
  const year = timeSplitted[3]

  return `${date} ${month} ${year}`
}

const getAllMessages = (req, res, next) => {
  Message.find({}, (err, messages) => {
    const allMessages = messages.map(msg => {
      const dateCreated = dateBuilder(msg.createdAt)
      return {
        ...msg._doc,
        dateCreated
      }
    }).reverse()

    res.status(200).json({
      status: res.statusCode,
      message: 'success get all messages',
      data: allMessages
    })
  })
}

const addNewMessage = (req, res, next) => {
  const body = req.body

  const newMessage = new Message({
    message: body.message
  })

  newMessage.save()
    .then(result => {
      res.status(201).json({
        status: res.statusCode,
        message: 'success add new message.',
        data: {
          ...result._doc,
          dateCreated: dateBuilder(result.createdAt)
        }
      })
    })
    .catch(err => {
      res.status(400).json({
        status: res.statusCode,
        message: 'failed add new message.'
      })
    })
}

module.exports = {
  getAllMessages,
  addNewMessage
}