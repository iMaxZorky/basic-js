const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    let result = [];
    let temp = arr.slice();

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "--discard-next") {
        delete temp[i + 1];
        i++;
      } else if (temp[i] === "--discard-prev") {
        if (temp[i - 1]) {
          result.pop();
        }
      } else if (temp[i] === "--double-next") {
        if (temp[i + 1]) {
          result.push(temp[i + 1]);
        }
      } else if (temp[i] === "--double-prev") {
        if (temp[i - 1]) {
          result.push(temp[i - 1]);
        }
      } else {
        result.push(temp[i]);
      }
    }
    return result;
  }
}

module.exports = {
  transform,
};
