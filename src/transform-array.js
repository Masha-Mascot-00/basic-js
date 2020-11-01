const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }

  let transformedArray;
  transformedArray = arr.slice(0, arr.length);

  for (let index = 0; index < transformedArray.length; index++) {
    let element = transformedArray[index];
    switch (element) {
      case "--discard-next":
        if (index + 1 < transformedArray.length) {
          transformedArray[index + 1] = null;
        }

        transformedArray[index] = null;
        break;
      case "--discard-prev":
        if (index - 1 >= 0) {
          transformedArray[index - 1] = null;
        }

        transformedArray[index] = null;
        break;
      case "--double-next":
        if (index + 1 < transformedArray.length) {
          transformedArray[index] = transformedArray[index + 1];
          index++;
        } else {
          transformedArray[index] = null;
        }
        break;
      case "--double-prev":
        if (index - 1 >= 0) {
          transformedArray[index] = transformedArray[index - 1];
          index++;
        } else {
          transformedArray[index] = null;
        }
        break;
      default:
        break;
    }
  }
  let resultArray = [];
  transformedArray.forEach((element) => {
    if (element !== null) {
      resultArray.push(element);
    }
  });
  return resultArray;
};
