const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
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

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}
)); // Use cors middleware for parsing
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
    }
  })
 );

 // checks if the user is allowed to proceed to dashboard or not
 // used in app.get(/dashboard)
 function isAuthenticated(req, res, next) {
  if (req.session.user) {
    console.log('this is req session user', req.session.user);
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
 }

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

pool.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)", [first_name, last_name, email, hashedPass], (err, result) => {
  if (result) {
    const userInfo = pool.query ( "SELECT * FROM users WHERE email = $1", [email])
    .then
      req.session.user = {
        id: userInfo.rows[0].id,
        name: userInfo.rows[0].first_name,
        email: userInfo.rows[0].email
      };
    
    return res.json({Login: true, name: req.session.user});
};
});
  
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
  // console.log("User exists:", userExists); // Log whether the user exists

  if (!userExists) {
    return res.status(400).send("No account associated with this email." );
  }

  const hash = userQueryResult.rows[0].password;
  bcrypt.compare(password, hash, function(err, result) {  // compare
    // if passwords match
    if (result) {
          req.session.user = {
            id: userQueryResult.rows[0].id,
            name: userQueryResult.rows[0].first_name,
            email: userQueryResult.rows[0].email
          };
          // console.log(req.session.user);
          return res.json({Login: true, user: req.session.user});
    }
    // if passwords do not match
    else {
          res.status(400).send("Invalid password!");
    }
  });

  } catch (error) {
    // this will catch any error message and show it in the front end as a server error
    // letting the user know to try again
    res.status(500).send("Server error. Please try again later.")
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ error: 'Logout failed' });
    }
    
    // Clear the session cookie from the client
    res.clearCookie('connect.sid'); // 'connect.sid' is the default session cookie name, adjust if needed
    
    res.status(200).send('Successfully logged out');
  });
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  if (err) {
    console.log(err);
  } else {
    res.status(200).send("Welcome to your dashboard!", req.session.user);
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
  pool.query("SELECT * FROM passwords WHERE user_id = $1", [req.session.user.id], 
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
