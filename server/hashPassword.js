const bcrypt = require ('bcrypt');

const saltRounds = 10;
// test
// var password = "test1234"

const hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
};

// test
// hashPassword(password)
//   .then((hashedPassword) => {
//     console.log("Hashed password:", hashedPassword);
//   })
//   .catch((err) => {
//     console.error("Error hashing password:", err);
//   });

module.exports = {
  hashPassword
}