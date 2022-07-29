const fs = require('fs');
const { v4: uuid } = require('uuid');
const aws = require('aws-sdk');
const multer = require('multer');
const path = require('path');

const { ErrorObject } = require('../helpers/error');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, next) => {
    next(null, uuid() + path.extname(file.originalname));
  },
});

const localUpload = multer({
  storage,
  dest: path.join(__dirname, '../public/uploads'),
  limits: { fileSize: 20000000 },
}).single('alkemy');

const s3 = new aws.S3({
  credentials: {
    accessKeyId: 'AKIAQID7HILNMXMDTT7E',
    secretAccessKey: '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',
  },
});

exports.uploadImage = async (file, deleteLocal = true) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: process.env.S3_AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };

  const upload = await s3
    .upload(uploadParams, (err) => {
      if (err) {
        throw new ErrorObject(err);
      }
    })
    .promise()
    .then(
      deleteLocal
        && fs.unlink(file.path, (err) => {
          if (err) throw ErrorObject(err);
        }),
    );

  return upload.Location;
};

module.exports = {
  s3, localUpload,
};
