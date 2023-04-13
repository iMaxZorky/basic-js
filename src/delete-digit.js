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
  let maximum = 0;
  const array = n.toString().split('');
  for (let i = 0; i < array.length; i++) {
    const temp = array.slice(); //создаём копию исходного массива, чтобы он не изменялся
    temp.splice(i, 1);
    var number = temp.join('');
    if (number > maximum) maximum = number;
  }
  let result = parseInt(maximum)
  return result;
}

module.exports = {
  deleteDigit
};
