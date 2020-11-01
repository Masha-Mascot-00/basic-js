const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, currentDeapth, maxDeapth) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(currentDeapth === undefined){
      currentDeapth = 0;
    }
    if(maxDeapth === undefined){
      this.maxDeapth = 1;
    }
    currentDeapth++;
    if (currentDeapth > this.maxDeapth) {
      this.maxDeapth = currentDeapth;
    }
    array.forEach((element) => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, currentDeapth, this.maxDeapth);
      }
    });

    return this.maxDeapth;
  }
};
