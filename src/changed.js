var check = require('check-types');
var install = require('npm-install');
var path = require('path');
var fs = require('fs');

function changed(packageName) {
  check.verifyString(packageName, 'missing package name string');

  console.log('what has changed in', packageName);
  // todo: check / strip version

  var installFolder = path.join(process.cwd(), 'temp');
  var promise = install({
    name: packageName,
    prefix: 'temp'
  });
  promise.done(function () {
    console.log('installed', packageName);
    var packageFolder = path.join(installFolder, 'node_modules',
      packageName);
    console.log('should have been installed in', packageFolder);
    findChanges(packageName, packageFolder);
  });
}

function findChanges(packageName, packageFolder) {
  check.verifyString(packageName, 'expected package name');
  check.verifyString(packageFolder, 'expected package folder');

  console.assert(fs.existsSync(packageFolder), packageFolder + ' not found');
  console.assert(fs.statSync(packageFolder).isDirectory(),
    packageFolder + ' is not a folder');

  var candidateFiles = ['History.md',
  'History',
  'Changes.md',
  'Changes',
  'README.md'];
  var found = candidateFiles.some(function (name) {
    var filename = path.join(packageFolder, name);
    if (fs.existsSync(filename) &&
      fs.statSync(filename).isFile()) {
      printChanges(filename);
      return true;
    }
  });
  if (!found) {
    console.error('Could not find changes list');
  }
}

function printChanges(filename) {
  console.log(fs.readFileSync(filename, 'utf-8'));
}

module.exports = changed;