var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
var sqlite  = require("sqlite3").verbose();
var passport = require('passport');
var flash   = require('connect-flash');
var chokidar = require('chokidar')

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var watcher = chokidar.watch('./app')
var configDB = require('./config/database.js');

// configuration ===============================================================
const db = new sqlite.Database("./TODO.sqlite");

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'tinytoons' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// load our routes and pass in our app and fully configured passport
require('./app/routes.js')(app, passport);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

// nodemon alternative
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /dist/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})
app.use(function (req, res, next) {
  require('./app/index')(req, res, next)
})
app.listen(port)
