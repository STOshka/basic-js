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
  addLink(arg = '') {
    this.chain.push(`( ${arg} )`);
    return this;
  },
  removeLink(pos) {
    if (parseInt(pos) != pos || pos < 1 || pos > this.chain.length) {
        this.chain = [];
        throw new Error(`You can\'t remove incorrect link!`);
    }
    else {
      this.chain.splice(pos - 1, 1);
    }
    return this;
  },
  reverseChain() {
      this.chain = this.chain.reverse();
      return this;
  },
  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
