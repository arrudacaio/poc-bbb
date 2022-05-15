const { getConfig } = require('.')

const defaultSettings = {
  endpoint: 'sqs_endpoint',
  region: 'sqs_region',
  queue: {
    endpoint: 'endpoint_queue',
    concurrency: 'sqs_concurrency'
  }
}

module.exports = getConfig({
  test: defaultSettings
})