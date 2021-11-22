const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const {
  insertUser,
  getPassword,
  getPosts,
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

  getPassword(username).then((hash) => {
    console.log(hash);
    compare(password, hash)
      .then((isMatch) => {
        if (isMatch) res.status(202).json(true);
        else res.status(401).json(false);
      })
      .catch((err) => res.status(500).json(err));
  });
});

const port = 3001;
app.listen(port, () =>
  console.log(`Backend listening at http://localhost:${port}`)
);
