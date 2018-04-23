// A simple server that responds to CRUD operations
const express = require("express");
const app = express();

// The first thing we want to do is create a server that browsers can connect to
app.listen(3000, () => {
    console.log('Simple Server is running on 3000');
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
