const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    //throw new CustomError("Not implemented");
    // remove line with error and write your code here
    return this.array.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position > this.array.length || position < 1) {
      this.array = [];
      throw new Error("Error");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new CustomError("Not implemented");
    // remove line with error and write your code here
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError("Not implemented");
    // remove line with error and write your code here
    let stringArray = [];
    this.array.forEach((element) => {
      stringArray.push(`( ${element} )`);
    });

    this.array = [];
    return stringArray.join("~~");
  },
};

module.exports = chainMaker;
