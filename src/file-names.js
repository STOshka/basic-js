const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let _uniqueNames = [];
  let _namesObject = {};
  for (let i=0; i<names.length; i++) {
      let name = names[i].toString();
      while (_namesObject[name] != undefined) {
          let count = _namesObject[name];
          _namesObject[name]++;
          name = `${name}(${count})`;           
      }
      _uniqueNames.push(name);
      _namesObject[name] = 1;
  }
  return _uniqueNames;
}

module.exports = {
  renameFiles
};
