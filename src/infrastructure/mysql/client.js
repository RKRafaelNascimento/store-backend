const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'store',
    port: 3307
  }
})

module.exports = knex
