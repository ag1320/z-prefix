exports.up = function (knex) {
  return knex.schema.createTable("posts", async (table) => {
    table.increments("post_id");
    table.string("title");
    table.string("body", 10000);
    table.integer('user_id');
    table.foreign('user_id').references('users.user_id')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};
