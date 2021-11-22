
exports.up = function(knex) {
  return knex.schema.createTable("users", async (table)=>{
      table.increments('user_id');
      table.string('username').unique();
      table.string('password');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
