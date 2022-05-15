const { defaultRequest } = require('../common/request')

const app = require('../../src/server/app')


describe('Health check', () => {

  test('Should return status 200', async () => {
    const res = await defaultRequest(app).get('/_health_check')

    expect(res.status).toBe(200)
  })
})

