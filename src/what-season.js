const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date)[0]) {
    throw new Error("Invalid date!");
  } else {
    const monthNumber = date.getMonth();
    if ((monthNumber >= 0 && monthNumber < 2) || monthNumber == 11) {
      return "winter";
    } else if (monthNumber >= 2 && monthNumber < 5) {
      return "spring";
    } else if (monthNumber >= 5 && monthNumber < 8) {
      return "summer";
    } else if (monthNumber >= 8 && monthNumber < 11) {
      return "fall";
    } else {
      throw new Error("Invalid date!");
    }
  }
}

module.exports = {
  getSeason,
};
