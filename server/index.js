const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = 3001;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'eliza',
  host: 'localhost',
  database: 'password_manager',
  password: '',
  port: 5432, // Default PostgreSQL port
});

app.use(cors()); // Use cors middleware for parsing
app.use(bodyParser.json());

app.post("/addpassword", (req, res) => {
  const { password, title } = req.body;
  console.log(req.body);
  pool.query("INSERT INTO passwords (password, title) VALUES ($1, $2)", [password, title], 
  (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error!");
    } else {
      console.log("Password added successfully!");
      res.send("Success!");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
