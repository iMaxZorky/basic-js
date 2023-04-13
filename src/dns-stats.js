const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reverseArray = domains.map(el => el.split('.').reverse())
  const result = {};
  for (let i = 0; i < reverseArray.length; i++) {
    for (let j = 0; j < reverseArray[i].length; j++) {
      const frame = '.' + reverseArray[i].slice(0, j + 1).join('.');
      if (result[frame]) {
        result[frame] += 1;
      } else {
        result[frame] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
