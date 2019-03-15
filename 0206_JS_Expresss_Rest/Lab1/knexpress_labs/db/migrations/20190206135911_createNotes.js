// The `up` function is what is run when we `migrate:latest` ("npm run db:migrate")
exports.up = function(knex, Promise) {
	// When creating migrations, youmust ALWAYS return
	// the result of your migration code. ALWAYS!
	return knex.schema.createTable('notes', table => {
		table.increments('id'); // create an autoincrementing column named `id`
		table.text('content'); 
		table.timestamp('createdAt').defaultTo(knex.fn.now());
	});
};

// The `down` function is what is run when we rollback our migration
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('notes');
};

