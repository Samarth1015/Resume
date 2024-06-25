const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { rmSync } = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 8080;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

app.get("/", (req, res, next) => {
  res.render("index.ejs");
});
