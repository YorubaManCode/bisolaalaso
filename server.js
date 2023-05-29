const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create MySQL connection - local
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Ejasise_8056',
//   database: 'bisola_alaso_db',
// });

//whole world.
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b64ecb0167010e',
  password: '544cb520',
  database: 'heroku_8efa25fe109dcbc',
});

// Create Express app
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

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
  console.log(`Server listening @ http://localhost:${port}`);
});
