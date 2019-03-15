
module.exports ={

  development: {
    client: 'pg',
    connection: {
      database: 'knex_labs',
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