const express = require('express')

//Controllers

const httpLogger = require('../middlewares/http-logger')
// const errorHandler = 

const app = express()

app.use(express.json())

app.get('/_health_check', (_, res) => res.sendStatus(200))


// use httpLogger in middleware of route

// app.post(
//   '/something',
//   httpLogger,
//   somethingController.create
// )

// app.use(errorHandler)
module.exports = app