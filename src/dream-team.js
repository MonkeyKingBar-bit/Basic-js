const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members == '' || !Array.isArray(members)) return false;
    members.sort();
    let str = members.join(' ');
        str = str.replace(/\s+/g, ' ').trim();
    
    let abbr = str.split(' ').map(x => x[0]).sort().join('');
    
    return abbr.toUpperCase();
  }
