
module.exports ={

  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      username: "jdenjo",
      password: "2383Bellevue"
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
      
    }
  },
};