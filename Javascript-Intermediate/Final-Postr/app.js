const app = require("express");
const fs = require("fs");
const sqlite = require("sqlite3").verbose();
const Sequelize = require("sequelize");
const passport = require("passport-local");

const db = new sqlite.Database("./Postr.sqlite");

// Establish connection to the database for user authentication
const sequelize = new Sequelize("db", "user", "password"{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Postr.sqlite",
    freezeTableName: true,
    operatorsAliases: false
});

// Create the user model
const User = sequelize.define("User",
  {
    ID: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

      firstName: sequelize.STRING,
      lastName: sequelize.STRING,
      username: sequelize.STRING,
      password: sequelize.STRING
  }
);

// Create post model
const Post = sequelize.define ("Post",
  {
    ID: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
      messageID: sequelize.INTEGER,
      message: sequelize.STRING,
      timeStamp: sequelize.DATETIME
  }
);

const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set("port", process.env.PORT || 8080);


// The first thing we want to do is create a server that browsers can connect to
app.listen(app.get("port"), () => {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});

// C
app.post("/", function(req, res) {
  res.send("You successfully created a POST route!");
});
// R
app.get("/", function(req, res) {
  res.send("You successfully created a GET route!");
});
// U
app.put("/", function(req, res) {
  res.send("You successfully created a PUT route!");
});
// D
app.delete("/", function(req, res) {
  res.send("You successfully created a DELETE route!");
});

// Initiating functionality

app.use(require("body-parser")());

/*  Generic way to do this
app.post('/post', (req, res) => {
  res.send("This is " + req.body.name);
});
*/
// Ajax way
app.post('/post', (req, res) => {

    if(req.xhr || req.accepts('json,html')==='json'){
        // handle errors if any
        res.send({ success: true });
    } else {
        // handle errors if any
        res.redirect(303, '/success');
    }
});

app.get("/user", function(req, res) {
  res.sendfile('user');
});

app.get("/success", function(req, res) {
  res.sendfile('success');
});
