require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "sendgridKey": process.env.SENDGRID_API_KEY,
        "senderEmail": process.env.SENDGRID_SENDER_EMAIL
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "sendgridKey": process.env.SENDGRID_API_KEY,
        "senderEmail": process.env.SENDGRID_SENDER_EMAIL
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "sendgridKey": process.env.SENDGRID_API_KEY,
        "senderEmail": process.env.SENDGRID_SENDER_EMAIL
    }
}