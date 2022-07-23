const dotenv = require('dotenv')

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})

module.exports = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "sendgridKey": process.env.SENDGRID_API_KEY,
    "senderEmail": process.env.SENDGRID_SENDER_EMAIL
}
