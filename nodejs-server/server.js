const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ejasise_8056',
  database: 'bisola_alaso_db',
});

// Create Express app
const app = express();
const port = process.env.PORT || 8080;

// Enable CORS for all routes
app.use(cors());

// Endpoint to get all clothes sold
app.get('/getAllClothesSold', (req, res) => {
  const query = 'SELECT * FROM store_fabric';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving clothes:', error);
      res.status(500).json({ error: 'Failed to retrieve clothes' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
