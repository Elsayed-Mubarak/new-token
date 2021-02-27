const express = require("express"),
  path = require("path"),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  routes = require("./router/router"),
  app = express();

http = require('http');

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);


app.listen(3000, function () {
  console.log('listening on ......................... 3000')
})

module.exports = app;