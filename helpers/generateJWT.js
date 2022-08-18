require('dotenv').config();
const jwt = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const generateJWT = (id, firstName, lastName, roleId) => {
  const newToken = jwt.sign({
    id, firstName, lastName, roleId,
  }, accessTokenSecret, { expiresIn: '600s' });
  return newToken;
};

module.exports = { generateJWT };
