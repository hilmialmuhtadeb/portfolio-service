const mongoose = require('mongoose')
const { Schema } = mongoose

const Achievment = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  isAcademichal: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Achievment', Achievment)