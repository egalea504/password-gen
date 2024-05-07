const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = 3001;
// changed encryption method to bcrypt for security measures for sign up but kept for passwords for now
// will need to find a safer hash method as encryption has some safety concerns
const {encrypt, decrypt } = require("./encryptionHandler");
const { hashPassword } = require("./hashPassword");
const bcrypt = require ('bcrypt');


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

// this is the hashpassword
const hashedPass = await hashPassword(password);

await pool.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)", [first_name, last_name, email, hashedPass]),
res.status(200).send("User registered successfuly.");
  
  } catch (error) {
    // this will catch any error message and show it in the front end as a server error
    // letting the user know to try again later
    res.status(500).send("Server error. Please try again later.")
  }
});

// add user to database when they sign up
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if email exists
    const userQueryResult = await pool.query ( "SELECT * FROM users WHERE email = $1", [email]);
  // if user exists return error in front-end

  //check if results have info - if not the user doesn't exist so it should send error
  const userExists = userQueryResult.rows.length > 0;
  console.log("User exists:", userExists); // Log whether the user exists

  if (!userExists) {
    return res.status(400).send("No account associated with this email." );
  }

  const hash = userQueryResult.rows[0].password;
  bcrypt.compare(password, hash, function(err, result) {  // compare
    // if passwords match
    if (result) {
          res.status(200).send("User signed in successfully.")
    }
    // if passwords do not match
    else {
          res.status(400).send("Invalid password!");
    }
  })

  } catch (error) {
    // this will catch any error message and show it in the front end as a server error
    // letting the user know to try again
    res.status(500).send("Server error. Please try again later.")
  }
});

// add password to database for sake keeping
// encrypts password for security
app.post("/addpassword", (req, res) => {
  const { password, title } = req.body;

  try {
  const encryptedPassword = encrypt(password);
  pool.query("INSERT INTO passwords (password, title, iv) VALUES ($1, $2, $3)", [encryptedPassword.password, title, encryptedPassword.iv]);
  res.status(200).send("Password added successfully!");

} catch (error) {
  // this will catch any error message and show it in the front end as a server error
  // letting the user know to try again
  res.status(500).send("Server error. Please try again later.")
}
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
