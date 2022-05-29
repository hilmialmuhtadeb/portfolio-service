const messageRoutes = require('./messageRoutes')
const projectRoutes = require('./projectRoutes')
const storyRoutes = require('./storyRoutes')
const achievmentRoutes = require('./achievmentRoutes')
const authenticationRoutes = require('./authenticationRoutes')

const enableRoutes = (app) => {
  app.use('/api/messages', messageRoutes)
  app.use('/api/projects', projectRoutes)
  app.use('/api/stories', storyRoutes)
  app.use('/api/achievments', achievmentRoutes)
  app.use('/api/auth', authenticationRoutes)
}

module.exports = enableRoutes