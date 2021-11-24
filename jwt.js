
const jwt = require('jsonwebtoken');

const secret = 'secret';
const payload = {
  sub: '12',
  role: 'customer',
}

// firmando token
function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);

// verificando token
function verifyToken(token) {
  return jwt.verify(token, secret);
}

const verifyTokenResult = verifyToken(token);
console.log(verifyTokenResult);

module.exports = {
  signToken,
  verifyToken,
}

