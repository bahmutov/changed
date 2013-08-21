var check = require('check-types');

function changed(packageName) {
  check.verifyString(packageName, 'missing package name string');

  console.log('what has changed in', packageName);
}

module.exports = changed;