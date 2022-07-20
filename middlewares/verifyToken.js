require('dotenv').config();
const jwt = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const verify = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, accessTokenSecret);
      req.user = decoded;
      next();
    } catch (err) {
        res.status(403).json({
            message: 'Invalid token'
        });
    };
};

module.exports = { verify };