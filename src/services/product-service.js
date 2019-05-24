const { productRepository } = require('../repositories/index')

async function find (filter, column, trx) {
  return productRepository.find(filter, column, trx)
}

module.exports = {
  find
}
