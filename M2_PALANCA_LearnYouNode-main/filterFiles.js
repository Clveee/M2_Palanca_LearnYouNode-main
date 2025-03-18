const fs = require('fs');
const path = require('path');

module.exports = function(directoryPath, extension, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = files.filter(file => path.extname(file) === '.' + extension);
    callback(null, filteredFiles);
  });
};