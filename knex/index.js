const config = require('../config')

const knexDev = require('knex')(config.knex.development)

const knexProd = require('knex')(config.knex.production)

exports.knex = process.env.NODE_ENV = 'development' ? knexDev : knexProd