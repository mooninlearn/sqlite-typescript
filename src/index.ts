import fs from 'fs';
import sqlite3 from 'sqlite3'

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Open a SQLite database, stored in the file db.sqlite
const db = new sqlite3.Database('db.sqlite');

// Read and execute the SQL query in ./sql/articles.sql
db.exec(fs.readFileSync(__dirname + '/sql/articles.sql').toString());
