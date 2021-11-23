const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const {
  insertUser,
  getUserInfo,
  getPosts,
  createPost,
  getUserPosts,
} = require("./controllers/controllers");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const saltRounds = 12;
const { hash, compare } = bcrypt;

app.get("/posts", (req, res) => {
  getPosts()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json(err));
});

app.post("/signup", (req, res) => {
  let body = req.body;
  let { username, password } = body;

  hash(password, saltRounds).then((hash) => {
    insertUser(username, hash)
      .then((data) => res.status(201).json("success"))
      .catch((err) => res.status(500).json(err));
  });
});

app.post("/login", (req, res) => {
  let body = req.body;
  let { username, password } = body;

  getUserInfo(username)
    .then((userInfo) => {
      let hash = userInfo.password;
      let { user_id } = userInfo;
      compare(password, hash)
        .then((isMatch) => {
          if (isMatch) res.status(202).json({ match: true, user_id });
          else res.status(401).json(false);
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/create", (req, res) => {
  let content = req.body;
  let { title, body, userId } = content;
  createPost(title, body, userId)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json(err));
});

app.post("/getUsersPosts", (req, res) => {
  let content = req.body;
  let { userId } = content;
  getUserPosts(userId)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json(err));
});

const port = 3001;
app.listen(port, () =>
  console.log(`Backend listening at http://localhost:${port}`)
);
