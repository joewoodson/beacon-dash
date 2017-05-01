// eslint-disable-next-line no-unused-vars
const knex = require('knex')
const path = require('path')
require('dotenv').config()

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, '/src/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/src/server/db/seeds/test'),
    },
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL_DEV,
    migrations: {
      directory: path.join(__dirname, '/src/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/src/server/db/seeds/development'),
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, '/src/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/src/server/db/seeds/production'),
    },
  },
}
