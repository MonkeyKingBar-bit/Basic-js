const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw ("Error")
  let newArr = [];
  let p, c, n;
  
  for (let i = 0; i < arr.length; i++) {
    p = c;
    c = arr[i];
    n = arr[i+1];
    let isString = false;
    if (typeof c === 'string') isString = true
    //if (isString && ) isString = true
  }
};
