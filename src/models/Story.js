const mongoose = require('mongoose')
const { Schema } = mongoose

const Story = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pictures: {
    type: Array,
    required: false
  },
  date: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Story', Story)