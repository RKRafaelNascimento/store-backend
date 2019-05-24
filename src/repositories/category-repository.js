const dbClient = require('../infrastructure/mysql/client')

async function find (filter = {}, column = '*', trx = dbClient) {
  try {
    let response = await trx('category')
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
