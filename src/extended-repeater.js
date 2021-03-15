const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  defaultValue = {
    separator: "+",
    repeatTimes: 1,
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }
  const repeatTimes = options.repeatTimes === undefined ? defaultValue.repeatTimes : options.repeatTimes;
  const separator = options.separator === undefined ? defaultValue.separator : options.separator;
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? defaultValue.additionRepeatTimes : options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator === undefined ? defaultValue.additionSeparator : options.additionSeparator;
  const addition = options.addition === undefined ? "" : options.addition;


  let fullAdditional = addition;
  for (let k = 1; k < additionRepeatTimes; k++) {
    fullAdditional += additionSeparator + addition;
  }

  let result = str + fullAdditional;
  for (let i = 1; i < repeatTimes; i++) {
    /* result += separator; */
    result += separator + str + fullAdditional;
  }

  return result;
};
