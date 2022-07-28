const { checkSchema } = require('express-validator');
const { handleValidator } = require('../helpers/handleValidator');

exports.schemaValidator = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];
