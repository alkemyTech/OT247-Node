const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const paths = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (
    file.split('.')[1] === 'js')
    && (file !== basename))
  .forEach((file) => {
    const pathSwagger = require(path.join(__dirname, file));
    paths[pathSwagger.path] = pathSwagger;
  });

module.exports = paths;
