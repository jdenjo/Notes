
// The `up` function is what is run when we `migrate:latest` ("npm run db:migrate")
exports.up = function(knex, Promise) {
	// When creating migrations, youmust ALWAYS return
	// the result of your migration code. ALWAYS!
	return knex.schema.createTable('populations', table => {
		table.increments('id');
        table.integer('year');
        table.integer('quantity');
        table.integer('country_id');
        table.foreign('country_id').references('id').inTable('countries');
	});
};

// The `down` function is what is run when we rollback our migration
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('populations');
};