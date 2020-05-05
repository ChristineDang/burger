var exphbs = require("express-handlebars");

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({defaultLayout:"main"}));