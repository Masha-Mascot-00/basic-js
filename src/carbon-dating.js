const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (sampleActivity !== undefined && typeof(sampleActivity) == "string" && !isNaN(sampleActivity)) {
    sampleActivity = Number(sampleActivity);
    if(sampleActivity >= MODERN_ACTIVITY){
      return false;
    }
    const k = 0.693 / HALF_LIFE_PERIOD;
    const ratio = Math.log(sampleActivity / MODERN_ACTIVITY);
    const result = Math.ceil(ratio / k);
    if(Number.isFinite(result)){
      return result;
    }
    return false;
  } else {
    return false;
  }
};
