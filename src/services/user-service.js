const { userRepository } = require('../repositories/index')

async function find (filter, column, trx) {
  return userRepository.find(filter, column, trx)
}

module.exports = {
  find
}
