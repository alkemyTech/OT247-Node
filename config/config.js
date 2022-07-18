require('dotenv').config()

const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
    module.exports = {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "sendgridKey": process.env.SENDGRID_API_KEY,
        "senderEmail": process.env.SENDGRID_SENDER_EMAIL
    }
}

if (env === 'development') {
    module.exports = {
        "username": process.env.DB_USER_DEV,
        "password": process.env.DB_PASSWORD_DEV,
        "database":  process.env.DB_NAME_DEV,
        "host": process.env.DB_HOST_DEV,
        "port": process.env.DB_PORT_DEV,
        "dialect": "mysql",
        "sendgridKey": process.env.SENDGRID_API_KEY_DEV,
        "senderEmail": process.env.SENDGRID_SENDER_EMAIL_DEV
    }
}