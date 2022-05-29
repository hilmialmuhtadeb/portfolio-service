const loginHandler = (req, res, next) => {
  const body = req.body.user
  const username = process.env.USERNAME
  const password = process.env.PASSWORD

  if (body.username === username) {
    if (body.password === password) {
      res.cookie('auth', process.env.AUTH_TOKEN, {
        maxAge: 900000, // 2.5 hour
        httpOnly: true
      }).status(200).json({
        status: res.statusCode,
        token: process.env.AUTH_TOKEN,
        message: 'login success'
      })

      return
    }

    res.status(400).json({
      status: res.statusCode,
      message: 'password is not correct'
    })

    return
  }

  res.status(400).json({
    status: res.statusCode,
    message: 'username is not correct'
  })
}

module.exports = {
  loginHandler
}