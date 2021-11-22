const knex = require('knex');

const knexConfigs = require('../knexfile.js')

const config = knexConfigs[process.env.NODE_ENV || "development"];

const dbConnection = knex(config);

module.exports = dbConnection;