const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* array */) {
    throw new CustomError('Not implemented');
  // remove line with error and write your code here
    /* let current = this;
    let depth = current.depth;
    let maxDepth = 1;

    if (current.depth === undefined) {
      current.depth = 0;
    }
    array.forEach((element) => {
      if (Array.isArray(element)) {
        current.depth = current.depth + 1;
        current.calculateDepth(element);
      } else {
        depth = current.depth;
        if (depth > maxDepth) {
          maxDepth = depth;
        } else {
          depth = maxDepth;
        }
      }
    });
    //depth = current.depth;
    return maxDepth; */
  }
};
