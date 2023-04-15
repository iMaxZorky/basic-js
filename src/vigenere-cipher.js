const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(s = true) {
    this.s = s;
  }

  encrypt(message, key, decrypt = false) {
    if (!message) {
      throw new Error("Incorrect arguments!");
    }
    if (!key) {
      throw new Error("Incorrect arguments!");
    }

    const charShift = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };

    let result = "";
    let count = 0;
    let internalKey = key.toUpperCase();
    let chDiff;
    const strLen = message.length;
    while (internalKey.length < strLen) {
      internalKey += internalKey;
    }
    console.log(strLen);
    internalKey = internalKey.slice(0, strLen);
    console.log(internalKey);


    const array = [...message.toUpperCase()];
    console.log(array);
    array.forEach((el) => {
      if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
        if (!decrypt) {
          chDiff = el.charCodeAt() + charShift[internalKey[count++]];
          if (chDiff > 90) {
            chDiff = chDiff - 90 + 64;
          }
        } else {
          chDiff = el.charCodeAt() - charShift[internalKey[count++]];
          if (chDiff < 65) {
            chDiff = 90 - 64 + chDiff;
          }
        }

        result += String.fromCharCode(chDiff);
      } else {
        result += el;
      }
    });
    return this.s ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
