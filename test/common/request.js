const request = require('supertest')

const defaultRequest = app => request(app)

module.exports = {
  defaultRequest
}