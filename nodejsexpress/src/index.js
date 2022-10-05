const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const staticPath = path.join(__dirname, "../tilting-nav");
const templatePath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", templatePath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/", (req, res) => {
  res.send("hello for the  express server");
});

app.listen(8000, () => {
  console.log("the port at 8000");
});
