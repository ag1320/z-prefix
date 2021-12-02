exports.seed = function(knex) {
  return knex('users').insert([
    {user_id: 9000, username: 'Light', password: 'takeapotatoechipandeatit'},
    {user_id: 9001, username: 'Ryuk', password: 'iloveapples'}
  ]);
};
