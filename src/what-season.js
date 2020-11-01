const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined || date === "" || date === null) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Error");
  }
  
  const month = date.getMonth();
  switch (true) {
    case month === 11 || month <= 1:
      return "winter";
    case month <= 4 && month >= 2:
      return "spring";
    case month <= 7 && month >= 5:
      return "summer";
    case month <= 10 && month >= 8:
      return "autumn";

    default:
      break;
  }
};
