import fs from 'fs';
import sqlite3 from 'sqlite3'

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');

const delete_statement = db.prepare(
  `DELETE FROM articles WHERE id=?`
)
delete_statement.run([3]);
