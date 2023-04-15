const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(arg) {
    this.chain.push(`( ${arg} )`);
    return this;
  },
  removeLink(arg) {
    if (arg < 1 || arg > this.chain.length || typeof arg !== 'number') {
      this.chain.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(arg-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
