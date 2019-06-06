const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();
const path = require("path");
const orm = require("./config/orm");

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join (__dirname + "/public")));
app.use(express.static(path.join (__dirname + "/models")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/tacos_controllers");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });