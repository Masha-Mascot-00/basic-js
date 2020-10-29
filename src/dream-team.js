const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let firstLetters = [];
  if (Array.isArray(members)) {
    for (let indexMember = 0; indexMember < members.length; indexMember++) {
      const member = members[indexMember];
      if (typeof member === "string") {
        let memberTrim = member.trim();
        firstLetters.push(memberTrim.toUpperCase().slice(0, 1));
      }
    }
    return firstLetters.sort().join("");
  }
  return "";
};
