const fs = require('fs');
const path = require('path');

// This function needs the directory where you want to work and the index file of that.
const importAllJS = (index, directory) => {
  const imports = {};

  fs
    .readdirSync(directory)
    .filter((file) => (
      file.split('.')[1] === 'js')
    && (file !== index))
    .forEach((file) => {
      const fileName = file.split('.')[0];
      const impFile = require(path.join(directory, file));
      imports[fileName] = impFile;
    });

  return imports;
};

module.exports = { importAllJS };
