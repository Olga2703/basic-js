const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = [];
  if ((members == null) || (!members.length)) {
    return false;
  } else {
    members.forEach(item => {
      if (typeof (item) == 'string') {
        item = item.match(/\w/);
        name.push(item);
      }
    });
    name = name.join(' ').toUpperCase().split(' ').sort().join('');
    return name;
  }
};
