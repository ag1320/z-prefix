
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 9000, username: 'Light', password: 'takeapotatoechipandeatit'},
        {user_id: 9001, username: 'Ryuk', password: 'iloveapples'}
      ]);
    });
};
