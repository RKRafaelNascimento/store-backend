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

module.exports = {
  find
}
