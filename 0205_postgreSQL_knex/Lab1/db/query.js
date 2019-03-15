const knex = require('./client');

const query1 = knex.raw(`select countries.name from countries where name ILIKE 'b%';`);

console.log(query1.toString());

query1.then(result => {
    console.log(result.rows);
    knex.destroy();
});

const query2 = knex.raw(`select count(name) from countries where name ILIKE '%central%'`);

query2.then(result => {
        console.log(result.rows);
        knex.destroy();
    });