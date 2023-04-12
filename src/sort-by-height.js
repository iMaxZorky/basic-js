const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const withoutMinuses = Array.from(arr).filter(x => x !== -1);
  const sort = withoutMinuses.sort((a, b) => a - b);
  const result = []
  arr.forEach(element => {
    (element !== -1) ? result.push(sort.shift()) : result.push(element)
  })
  return result;
}

module.exports = {
  sortByHeight
};
