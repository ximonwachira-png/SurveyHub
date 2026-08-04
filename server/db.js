const path = require('path');
const Database = require('better-sqlite3');
const dbFile = process.env.DB_FILE || path.join(__dirname, 'surveyhub.db');

const db = new Database(dbFile);

function init(){
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

init();
module.exports = db;
