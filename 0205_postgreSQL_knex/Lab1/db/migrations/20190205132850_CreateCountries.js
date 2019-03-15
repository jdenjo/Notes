
// The `up` function is what is run when we `migrate:latest` ("npm run db:migrate")
exports.up = function(knex, Promise) {
	// When creating migrations, youmust ALWAYS return
	// the result of your migration code. ALWAYS!
	return knex.schema.createTable('countries', table => {
		table.increments('id');
        table.string('name');
        table.string('code');
	});
};

// The `down` function is what is run when we rollback our migration
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('countries');
};