const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const schemas = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (
    file.split('.')[1] === 'js')
    && (file !== basename))
  .forEach((file) => {
    const schema = require(path.join(__dirname, file));
    schemas[schema.schemaName] = schema;
  });

module.exports = schemas;
