const CustomError = require("../extensions/custom-error");

/* class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
  decrypt() {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
} */

class VigenereCipheringMachine {
  constructor(typeofMachine) {
    if(typeofMachine === false){
      this.typeofMachine = typeofMachine;
    }else{
      this.typeofMachine = true;
    }
  }
  encrypt(text, keyword) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptWord = "";
    let test = 0;
    for (let j = 0; j < text.length; j++) {
      if (alphabet.indexOf(text.charAt(j)) === -1) {
        encryptWord += text[j];
        test++;
      } else {
        encryptWord += alphabet.charAt(
          (alphabet.indexOf(text.charAt(j)) +
            alphabet.indexOf(keyword.charAt((j - test) % keyword.length))) %
            alphabet.length
        );
      }
    }

    if(!this.typeofMachine){
      encryptWord = encryptWord.split("").reverse().join("");
    }
    return encryptWord.toUpperCase();
  }

  decrypt(text, keyword) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptWord = "";
    let test = 0;

    for (let j = 0; j < text.length; j++) {
      if (alphabet.indexOf(text.charAt(j)) === -1) {
        decryptWord += text[j];
        test++;
      } else {
        decryptWord += alphabet.charAt(
          (alphabet.indexOf(text.charAt(j)) +
            alphabet.length -
            alphabet.indexOf(keyword.charAt((j - test) % keyword.length))) %
            alphabet.length
        );
      }
    }
    if(!this.typeofMachine){
      decryptWord = decryptWord.split("").reverse().join("");
    }
    return decryptWord.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
