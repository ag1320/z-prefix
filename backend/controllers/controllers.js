const knex = require("./dbConnection");

function insertUser(username, passHash) {
  return knex("users")
    .insert({ username, password: passHash })
    .then((data) => data);
}

function getPassword(username) {
  return knex("users")
    .select("password")
    .where({ username })
    .then((data) => {
      return data[0].password;
    })
    .catch((err) => err);
}

function getPosts() {
  return knex("posts")
    .select("*")
    .then((data) => data)
    .catch((err) => err);
}

module.exports = { insertUser, getPassword, getPosts };
