const fs = require('fs')
const { v4: uuid } = require('uuid')
const AWS = require('aws-sdk')
const multer = require('multer')
const path = require('path')

const { ErrorObject } = require('../helpers/error')

const bucketName = process.env.S3_AWS_BUCKET_NAME

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, next) => {
    next(null, uuid() + path.extname(file.originalname))
  },
});

// Es: upload.single('myFile') -> router.post('/', upload.single('myFile'), (req, res) => {.....
const localUpload = multer({
  storage,
  dest: path.join(__dirname, '../public/uploads'),
  limits: { fileSize: 20000000 },
}).single('alkemy')


const s3 = new AWS.S3({
  credentials: {
    accessKeyId: "AKIAQID7HILNMXMDTT7E",
    secretAccessKey: "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",
    region: 'sa-east-1'
  },
});

exports.uploadImage = async (file, deleteLocal = true) => {
  const fileStream = fs.createReadStream(file.path)
  
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream, 
    Key: uuid() + path.extname(file.originalname),, 
  }

  const upload = await s3
    .upload(uploadParams, (err) => {
      if (err) {
        throw new ErrorObject(err)
      }
    })

  if (deleteLocal) {
    fs.unlinkSync(file.path)
  }
  
    /* .promise()
    .then(
      deleteLocal
        && fs.unlink(file.path, (err) => {
          if (err) throw ErrorObject(err)
        }),
    ) */
    return upload.Location
  
};

exports.s3 = s3;
exports.localUpload = localUpload;