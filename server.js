var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var methodOvr = require("method-override");
var bodPars = require("body-parser");

app.use(express.static(process.cwd() + '/public'));
app.use(methodOvr("_method"));
app.use(bodPars.urlencoded({extended: false}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });