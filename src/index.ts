import fs from 'fs';
import sqlite3 from 'sqlite3'

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');

const statement = db.prepare(
  `UPDATE articles SET title=Third article' WHERE id=?`
)
statement.run([3]);
