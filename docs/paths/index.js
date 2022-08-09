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
    const pathKeys = Object.keys(pathSwagger.paths);
    const pathValues = Object.values(pathSwagger.paths);
    let i;
    for (i = 0; i < pathKeys.length; i += 1) {
      paths[pathKeys[i].toString()] = pathValues[i];
    }
  });
module.exports = paths;
