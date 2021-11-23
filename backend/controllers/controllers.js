const knex = require("./dbConnection");

function insertUser(username, passHash) {
  return knex("users")
    .insert({ username, password: passHash })
    .then((data) => data);
}

function getUserInfo(username) {
  return knex("users")
    .select("password", "user_id")
    .where({ username })
    .then((data) => {
      return data[0];
    })
    .catch((err) => err);
}

function getPosts() {
  return knex("posts")
    .select("*")
    .then((data) => data)
    .catch((err) => err);
}

function createPost(title, body, userId) {
  let user_id = userId.userId
  return knex("posts")
    .insert({ title, body, user_id })
    .then((data) => data)
    .catch((err) => err);
}

function getUserPosts(userId) {
 let user_id = userId
  return knex("posts")
    .select('*')
    .where({ user_id })
    .then((data) => data)
    .catch((err) => err);
}

function deletePost(postId) {
  let post_id = postId
   return knex("posts")
     .del()
     .where({ post_id })
     .then((data) => data)
     .catch((err) => err);
 }

 function patchPost(title, body, postId) {
  let post_id = postId
   return knex("posts")
     .update({title, body})
     .where({ post_id })
     .then((data) => data)
     .catch((err) => err);
 }


module.exports = { insertUser, getUserInfo, getPosts, createPost, getUserPosts, deletePost, patchPost };
