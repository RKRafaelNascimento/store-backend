const { userRepository, addressRepository } = require('../repositories/index')
const { Address, User } = require('../models/index')
const dbClient = require('../infrastructure/mysql/client')

async function find (filter, column, trx) {
  return userRepository.find(filter, column, trx)
}

async function create (query) {
  return dbClient.transaction(async trx => {
    try {
      let address = new Address()
      address['street'] = query.address.street
      address['number'] = query.address.number
      address['complement'] = query.address.complement
      address['state'] = query.address.state
      address['city'] = query.address.city

      let addressId = await addressRepository.create(address, trx)

      let user = new User()
      user['firstName'] = query.firstName
      user['lastName'] = query.firstName
      user['password'] = query.firstName
      user['email'] = query.firstName
      user['addressId'] = addressId

      let response = await userRepository.create(user, trx)

      return response
    } catch (error) {
      throw error
    }
  })
}

module.exports = {
  find,
  create
}
