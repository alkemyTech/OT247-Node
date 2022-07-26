const fs = require('fs')
const { v4: uuid } = require('uuid')
const AWS = require('aws-sdk')
const multer = require('multer')
const path = require('path')

const { ErrorObject } = require('../helpers/error')

const bucketName = process.env.S3_AWS_BUCKET_NAME

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_KEY_SECRET,
    region: process.env.AWS_BUCKET_REGION,
  },
});

exports.s3 = s3;
