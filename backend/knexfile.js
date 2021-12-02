// Update with your config settings.
require('dotenv').config()

const connection = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://postgres:docker@localhost/zpre'
  },

  staging: {
    client: 'pg',
    connection
  },

  production: {
    client: 'pg',
    connection
  }

};
