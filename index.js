const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d6eex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(cors())
app.use(cookieParser())
app.use(express.json())

const enableRoutes = require('./src/routes/index')
enableRoutes(app)

mongoose.connect(url)
.then(() => {
  app.listen(port, () => {
    console.log(`your app is running at http://localhost:${port}`)
  })
})
.catch(err => console.log(err))