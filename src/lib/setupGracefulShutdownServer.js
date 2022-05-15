const logger = require('./logger')


const shutdownServerForSignal = (process, server) => (signal) => {
  logger.info({
    message: 'Server is gracefully shutting down',
    operation: 'server_shutdown',
    signal
  })

  server.close(() => {
    logger.info({
      message: 'Server has shutdown with sucess. Exiting process...',
      operation: 'server_shutdown'
    })

    process.exit(0)
  })
}


const setupGracefulShutdownServer = (process, server) => {
  process.on('SIGTERM', shutdownServerForSignal(process, server))
  process.on('SIGINT', shutdownServerForSignal(process, server))
}

// shutdown worker for signal

module.exports = {
  setupGracefulShutdownServer,
  shutdownServerForSignal
}