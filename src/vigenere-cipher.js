const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(message, key) {
    let result = new String();
    let eng = new Array();
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 65; i < 91; i++) {
      eng.push(String.fromCharCode(i));
    }
    for (let i = 0, k = 0; i < message.length; i++, k++) {
      if (eng.includes(message[i])) {
        let index = (eng.indexOf(message[i]) + eng.indexOf(key.charAt(k % key.length))) % eng.length;
        result += eng[index];
      } else {
        k = k - 1;
        result += message[i];
      }
    }
    return (this.reverse === false) ? result.split('').reverse().join('') : result;
  }

  decrypt(message, key) {
    let result = new String();
    let eng = new Array();
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 65; i < 91; i++) {
      eng.push(String.fromCharCode(i));
    }

    for (let i = 0, k = 0; i < message.length; i++, k++) {
      if (eng.includes(message[i])) {
        let index = ((eng.indexOf(message[i]) + eng.length) - eng.indexOf(key.charAt(k % key.length))) % eng.length;
        result += eng[index];
      } else {
        k = k - 1;
        result += message[i];
      }
    }
    return (this.reverse === false) ? result.split('').reverse().join('') : result;
  }
}


module.exports = VigenereCipheringMachine;
