const queueOne = console.log('queue one')
const queueTwo = console.log('queue two')
const queueThree = console.log('queue one')

// Provider for queues
const queues = {
  'queue-one': queueOne,
  'queue-two': queueTwo,
  'queue-three':queueThree
}

const getQueue = name => queues[name]

module.exports = {
  getQueue,
  queues
}