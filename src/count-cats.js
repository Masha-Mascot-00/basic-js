const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  for (let indexArray = 0; indexArray < matrix.length; indexArray++) {
    const arrayElement = matrix[indexArray];
    for (let index = 0; index < arrayElement.length; index++) {
      const element = arrayElement[index];
      if (element === "^^") {
        cats++;
      }
    }
  }
  return cats;
};
