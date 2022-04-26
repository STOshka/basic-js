const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let _str = '';
  if (str.length < 2) return str;
  let count = 1;
  for (let i=1; i<str.length; i++) {
    if (str[i-1] != str[i]) {
      _str += `${count > 1?count:''}${str[i-1]}`;
      count = 0;
    }
    count++;
  }
  _str += `${count > 1?count:''}${str[str.length-1]}`;
  return _str;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
