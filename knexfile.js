const knex = require('knex')
require('dotenv').config()

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TEST,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL_DEV,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/production'
    }
  }
};
