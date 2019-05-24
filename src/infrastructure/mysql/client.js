const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: 'db',
    user: 'root',
    password: '12345',
    database: 'store',
    port: 3306
  }
})

module.exports = knex
