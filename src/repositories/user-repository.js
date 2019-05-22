const dbClient = require('../infrastructure/mysql/client')

async function find (filter = {}, column = '*', trx = dbClient) {
  try {
    let response = await trx('users')
      .select(column)
      .where(filter)
    return response
  } catch (error) {
    throw error
  }
}

async function create (query, trx = dbClient) {
  try {
    let response = await trx('users').insert(query)
    return response[0]
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  find
}
