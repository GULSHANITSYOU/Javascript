const crypto = require('crypto');

// Encryption
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256 bits key
const iv = crypto.randomBytes(16);  // Initialization vector

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, Node.js!', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted);

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted);
