const express = require("express");
const sqlite = require("sqlite").verbose();

const db = new sqlite3.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");

db.each(query, (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
