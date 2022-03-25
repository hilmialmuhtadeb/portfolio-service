const mongoose = require('mongoose')
const { Schema } = mongoose

const Message = new Schema({
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('message', Message)