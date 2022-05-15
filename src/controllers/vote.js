
const logger = require('../lib/logger')

const create = async (req, res, next) => {

  logger.info({
    message: 'Votando!',
    operation: 'bbb-vote'
  })

  const { voto } = req.body





}

module.exports = {
  create
}