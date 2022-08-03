const jwt = require('jsonwebtoken');

const generateJWT = (id, firstName, lastName, roleId) => {
  const newToken = jwt.sign({
    id, firstName, lastName, roleId,
  }, 'secretkey', { expiresIn: '600s' });
  return newToken;
};

module.exports = { generateJWT };
