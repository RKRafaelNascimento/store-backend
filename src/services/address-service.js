const { addressRepository } = require('../repositories/index')

async function create (query, trx) {
  return addressRepository.create(query, trx)
}

module.exports = {
  create
}
