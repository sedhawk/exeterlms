const express = require("express");
const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");

/*
db.each(`SELECT * from Artist LIMIT 100`, (err, row) => {
  if (err) throw err;
  console.log(row);
});
*/
app.post('/form', (req, res) => {
  db.run(`INSERT into Artist(ArtistId, Name) VALUES(231, Lil Wayne)`, (err, row) => {
    if (err) throw err;
    res.redirect(303, '/success');
  });
});

db.close();
