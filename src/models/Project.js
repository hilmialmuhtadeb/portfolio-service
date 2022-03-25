const mongoose = require('mongoose')
const { Schema } = mongoose

const Project = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  techStack: {
    type: Array,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  screenShot: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('project', Project)