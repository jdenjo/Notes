// The `up` function is what is run when we `migrate:latest` ("npm run db:migrate")
exports.up = function(knex, Promise) {
	// When creating migrations, youmust ALWAYS return
	// the result of your migration code. ALWAYS!
	return knex.schema.createTable('posts', table => {
		// CREATE TABLE "posts"
		table.increments('id'); // create an autoincrementing column named `id` - "id" SERIAL
		table.string('title'); // "title" VARCHAR(255)
		table.text('content'); // "content" TEXT
		table.integer('viewCount'); // "viewCount" INTEGER
		table.timestamp('createdAt').defaultTo(knex.fn.now());
		// "createdAt" timestamp default to NOW()
		table.string('tags');
	});
};

// The `down` function is what is run when we rollback our migration
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('posts');
};
