const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date instanceof Date) throw Error();
  if (date == undefined || (date - new Date()) == 0) return 'Unable to determine the time of year!';
  if (11 == date.getMonth() || date.getMonth() <= 1) return 'winter';
  if (2 >= date.getMonth() || date.getMonth() <= 4) return 'spring';
  if (5 >= date.getMonth() || date.getMonth() <= 7) return 'summer';
  if (8 >= date.getMonth() || date.getMonth() <= 10) return 'autumn';
};





