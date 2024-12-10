const sqlite3 = require('sqlite3').verbose();

// Open the database (or create it if it doesn't exist)
const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create the "user" table if it doesn't exist
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`;

// Create the "tasks" table if it doesn't exist
const createTasksTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid INTEGER,
    taskname TEXT NOT NULL,
    taskstatus TEXT NOT NULL,
    FOREIGN KEY (userid) REFERENCES user(id)
  )
`;

db.run(createUserTableQuery, (err) => {
  if (err) {
    console.error('Error creating user table:', err.message);
  } else {
    console.log('User table created successfully.');
  }
});

db.run(createTasksTableQuery, (err) => {
  if (err) {
    console.error('Error creating tasks table:', err.message);
  } else {
    console.log('Tasks table created successfully.');
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing the database:', err.message);
  } else {
    console.log('Closed the database connection.');
  }
});
