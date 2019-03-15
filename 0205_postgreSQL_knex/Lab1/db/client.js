// This loads exported configuration object from knexfile.js
const knexfile = require('../knexfile');

// This get the knex client constructor
// We use this to create an instance of knex client which allows us to make queries to our DB
const knexConnector = require('knex');

// Call client constructor with development section from knexfile based on knexfile's development object
const knex = knexConnector(knexfile.development);

// Finally, we export the client so we can just require this file when we need to make SQL queries
module.exports = knex;