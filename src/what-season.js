const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(springDate){
  if (springDate == null) {
    return 'Unable to determine the time of year!';
  }    
  if (springDate.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }
  let month  = -1
    let name = ['winter','spring','summer','autumn','winter']  
 
    month = springDate.getMonth()+1

    return name[parseInt(month /3)]
    
}