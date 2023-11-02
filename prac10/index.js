const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secretts", resave: true, saveUninitialized: true }));

const User = mongoose.model("User", {
    username: String, 
    password: String 
});

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = User.findOne({ username, password })
    .then((user) => {
      if (!user) {
        return res.redirect("/");
      }
    })
    .catch((err) => {
      console.log("error at finding", err);
    });
  req.session.user = user;
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  const user = req.body;
  if (!user) {
    return res.redirect("/");
  }
  res.send("Welcome to the dashboard");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
