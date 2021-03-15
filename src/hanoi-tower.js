const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let parametr = {
    turns: 0,
    seconds: 0
  };
  parametr.turns = Math.pow(2, disksNumber) - 1;
  parametr.seconds = Math.floor(parametr.turns * 3600 / turnsSpeed);
  return parametr;
};