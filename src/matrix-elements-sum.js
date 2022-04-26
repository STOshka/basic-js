const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const MATRIX = matrix.flat(), LEN = matrix[0].length;
  let count = 0;
  for (let i=0; i<MATRIX.length; i++) if (i<LEN || MATRIX[i - LEN] != 0) count+=MATRIX[i];
  return count;
}

module.exports = {
  getMatrixElementsSum
};
