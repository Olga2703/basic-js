const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error('not an array');
  } else if (arr.length < 1) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        newArr.push(undefined);
        i++;
        break;
      case "--discard-prev":
        newArr[newArr.length - 1] = undefined;
        break;
      case "--double-next":
        newArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        newArr.push(newArr[newArr.length - 1]);
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  return newArr.filter(index => index !== undefined);
};