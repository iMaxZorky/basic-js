const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let result = 0;
  if (number.toString().length == 1) {
    return number;}
  number.toString().split('').forEach(element => {
    result += parseInt(element);
  });
  while (result.toString().length > 1) {
    asd = result.toString().split('')
    result = 0
    asd.forEach(element => {
      result += parseInt(element);
    });
  }
  return result
}

module.exports = {
  getSumOfDigits
};
