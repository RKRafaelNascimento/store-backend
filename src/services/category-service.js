const { categoryRepository } = require('../repositories/index')

async function find (filter, column, trx) {
  return categoryRepository.find(filter, column, trx)
}

module.exports = {
  find
}
