const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str !== undefined) {
    str = String(str);
    let resultString,
      separator = options.separator,
      addition = String(options.addition),
      additionSeparator = options.additionSeparator;
    const additionRepeatTimes = options.additionRepeatTimes,
      repeatTimes = options.repeatTimes;
    separator = separator === undefined ? "+" : separator;
    additionSeparator =
      additionSeparator === undefined ? "|" : additionSeparator;
    if (additionRepeatTimes !== undefined && repeatTimes !== undefined) {
      addition = addition + additionSeparator;
      addition = addition.repeat(additionRepeatTimes);
      addition = addition.slice(0, addition.length - additionSeparator.length);
      str = str + addition + separator;
      resultString = str.repeat(repeatTimes);
      return resultString.slice(0, resultString.length - separator.length);
    } else {
      if (repeatTimes !== undefined) {
        //значит нет  additionRepeatTimes
        if (addition !== "undefined") {
          // может сделать пустой строкой
          str = str + addition + separator;
          resultString = str.repeat(repeatTimes);
          return resultString.slice(0, resultString.length - separator.length);
        } else {
          str = str + separator;
          resultString = str.repeat(repeatTimes);
          return resultString.slice(0, resultString.length - separator.length);
        }
      } else {
        if (additionRepeatTimes !== undefined) {
          // предположим, что ексли есть additionRepeatTimes, то есть и addition
          addition = addition + additionSeparator;
          addition = addition.repeat(additionRepeatTimes);
          addition = addition.slice(
            0,
            addition.length - additionSeparator.length
          );
          str = str + addition;
          resultString = str;
          return resultString;
        }
      }
      if (addition !== undefined) {
        str = str + addition;
        resultString = str;
        return resultString;
      }
      return str;
    }
  } else {
    return str;
  }
};
