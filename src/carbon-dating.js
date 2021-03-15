const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let year = 0;
  if (parseFloat(sampleActivity) <= 0) {
    return false;
  } else if (typeof sampleActivity === "string" && parseFloat(sampleActivity) <= MODERN_ACTIVITY) {
    return year = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
  } else {
    return false;
  }
};
