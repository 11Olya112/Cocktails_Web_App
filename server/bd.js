import mysql from 'mysql';

// MySQL database configuration
const dbConfig = {
  host: 'blwcqepuvlzhfk85pygw-mysql.services.clever-cloud.com',
  user: 'u4erbo7fvrfvexxl',
  password: 'TeUTQyjWDKoftDKtSg9E',
  database: 'blwcqepuvlzhfk85pygw',
  port: '3306',
};

// Create a connection to the MySQL database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database:', err);

    return;
  }

  // eslint-disable-next-line no-console
  console.log('Connected to the database!');
});

// Define the CREATE TABLE query
const createTableQuery = `
    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50),
      email VARCHAR(100)
    )
  `;

// Execute the CREATE TABLE query
// eslint-disable-next-line @typescript-eslint/no-unused-vars
connection.query(createTableQuery, (err, result) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log('Table "users" created successfully');
});

// Close the connection
connection.end((err) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log('Connection closed');
});
