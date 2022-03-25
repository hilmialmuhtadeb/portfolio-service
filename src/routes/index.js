const messageRoutes = require('./messageRoutes')
const projectRoutes = require('./projectRoutes')
const storyRoutes = require('./storyRoutes')
const achievmentRoutes = require('./achievmentRoutes')

const enableRoutes = (app) => {
  app.use('/api/messages', messageRoutes)
  app.use('/api/projects', projectRoutes)
  app.use('/api/stories', storyRoutes)
  app.use('/api/achievments', achievmentRoutes)
}

module.exports = enableRoutes