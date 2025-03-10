// This code will generate a secret key for your user sessions. You can use this key to sign and verify the 
// session ID cookie. This key should be kept secret and should not be shared with anyone. 
// You can use the following code to generate a secret key:
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);
