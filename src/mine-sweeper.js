const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const columnes = matrix[0].length;
  const rows = matrix.length;
  
  const result = [];
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < columnes; j++) {
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let m = j - 1; m <= j + 1; m++) {
          if (matrix[k]?.[m] === true) {
            count++;
          }
        }
      }
      if (matrix[i][j] === true) {
        count--;
      }
      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
