const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var arr = [].concat(...backyard);
  let number=0;
  for (let i=0; i<arr.length; i++) {
      if (arr[i] == '^^') number += 1
    }
    
  return number;
};
