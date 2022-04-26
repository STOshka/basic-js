const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let _n = n.toString().split('');
  let max = 0;
  for (let i=0; i<_n.length; i++) {
    let _n1 = n.toString().split('');
    _n1.splice(i,1);
    _n1 = _n1.join('');
    if (parseInt(_n1) > max) max=parseInt(_n1);
  }
  return max;
}

module.exports = {
  deleteDigit
};
