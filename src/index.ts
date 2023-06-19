import fs from 'fs';
import sqlite3 from 'sqlite3'

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');

db.exec(`UPDATE articles SET title='third article' WHERE id=3`);

db.get(
  'SELECT title FROM articles WHERE id=3',
  (_, res) => console.log(res)
);

