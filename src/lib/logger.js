const log4js = require('log4js')
const escriba = require('escriba')


const jsonLayout = () => logEvent => logEvent.data.join('\n')

log4js.addLayout('json', jsonLayout)

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: { type: 'json' }
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'info'
    }
  }
})

const loggerEngine = log4js.getLogger('BUDGET') // Changes here -> name of service


const { logger } = escriba({
  loggerEngine,
  service: 'budget'
})

const makeLogger = () => {
  const from = process.env.APP_TYPE

  function makeLogByLevel (level) {
    return (data = {}, config = {}) => {
      const finalDate = {
        from,
        ...data,
      }

      logger[level](finalDate, config)
    }
  }

  return {
    info: makeLogByLevel('info'),
    warn: makeLogByLevel('warn'),
    error: makeLogByLevel('error'),
    debug: makeLogByLevel('debug'),
    fatal: makeLogByLevel('fatal'),
    trace: makeLogByLevel('trace'),
  }
}

module.exports = makeLogger()