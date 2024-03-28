const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = 3001;
const {encrypt, decrypt } = require("./encryptionHandler");

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
  const encryptedPassword = encrypt(password);
  pool.query("INSERT INTO passwords (password, title, iv) VALUES ($1, $2, $3)", [encryptedPassword.password, title, encryptedPassword.iv], 
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

app.get("/showpasswords", (req, res) => {
  pool.query("SELECT * FROM passwords", 
  (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error!");
    } else {
      res.send(result);
    }
  });
});

app.post("/decryptpassword", (req,res) => {
  res.send(decrypt(req.body));
})

app.listen(PORT, () => {
  console.log("Server is running!");
});
