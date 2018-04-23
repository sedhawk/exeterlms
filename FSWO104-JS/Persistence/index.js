const express = require("express");
const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");

db.each(`SELECT * from Artist LIMIT 100`, (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
