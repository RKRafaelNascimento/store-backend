const dbClient = require('../infrastructure/mysql/client')

async function create (query, trx = dbClient) {
  try {
    let response = await trx('address').insert(query)
    return response[0]
  } catch (error) {
    throw error
  }
}

module.exports = {
  create
}
