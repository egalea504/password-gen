const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = 3001;
const {encrypt, decrypt } = require("./encryptionHandler");

const { Pool } = require('pg');

const pool = new Pool({
  user: 'development',
  host: 'localhost',
  database: 'password_manager',
  password: '',
  port: 5432, // Default PostgreSQL port
});

app.use(cors()); // Use cors middleware for parsing
app.use(bodyParser.json());

// add user to database when they sign up
app.post("/signup", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    // check if email already exists
    const userExists = await pool.query ( "SELECT * FROM users WHERE email = $1", [email]
  )
  // if user exists return error in front-end
  if (userExists.rows.length > 0) {
    return res.status(400).send("This email is already associated with an account." )
  }

  // else encrypt password to register user
  const encryptedPassword = encrypt(password);

  await pool.query("INSERT INTO users (first_name, last_name, email, password, iv) VALUES ($1, $2, $3, $4, $5)", [first_name, last_name, email, encryptedPassword.password, encryptedPassword.iv]
)

res.status(200).send("User registered successfuly.")
  } catch (error) {
    // this will catch any error message and show it in the front end as a server error
    // letting the user know to try again
    console.log(error);
    res.status(400).send("Server error. Please try again.")
  }
});

// add password to database for sake keeping
// encrypts password for security
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

// show all passwords
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

// decryption function used before showing password in front end
app.post("/decryptpassword", (req,res) => {
  res.send(decrypt(req.body));
})

app.listen(PORT, () => {
  console.log("Server is running!");
});
