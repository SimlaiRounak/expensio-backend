const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateToken = (tokenPayload) => {
  try {
    return jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '7d' });
  } catch (ex) {
    throw new Error(ex.message);
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (ex) {
    throw new Error(ex.message);
  }
};

const generateRandomPassword = (length = 8) => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialSymbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialSymbols;

  let password = '';
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
};

const hashPassword = (password) => new Promise((resolve, reject) => {
  const salt = crypto.randomBytes(16).toString('hex');
  crypto.scrypt(password, salt, 64, (err, derivedKey) => {
    if (err) reject(err);
    resolve(`${salt}:${derivedKey.toString('hex')}`);
  });
});

const verifyPassword = (password, existingPassword) => new Promise((resolve, reject) => {
  const [salt, key] = existingPassword.split(':');
  crypto.scrypt(password, salt, 64, (err, derivedKey) => {
    if (err) reject(err);
    resolve(key === derivedKey.toString('hex'));
  });
});

module.exports = {
  generateToken,
  verifyToken,
  generateRandomPassword,
  hashPassword,
  verifyPassword
};
