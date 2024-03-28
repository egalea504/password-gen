const crypto = require('crypto');

// salt for all users
const secret = "f456r457p446a439g456d456f476f3q6"

const encrypt = (password) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-ctr', Buffer.from(secret), iv);

  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final()
  ])

  console.log(encryptedPassword);
  return {iv: iv.toString("hex"), 
    password : encryptedPassword.toString("hex")
  };
};

const decrypt = (encryption) => {
  const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(secret), Buffer.from(encryption.iv, "hex"));

  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryption.password, "hex")),
    decipher.final()
  ])

    return decryptedPassword.toString();
}

module.exports = {
  encrypt, decrypt
}