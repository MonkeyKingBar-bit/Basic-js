const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members == null) return ''
    let res = ''
    for(let i =0; i < members.length; i++){
        if(typeof (members[i]) === 'string'){
            let k = 0
            while(members[i][k] == ' ') k++
            res += members[i][k].toUpperCase()
        }
    }
    return res.split('').map(x => x[0]).sort().join('');
    
  }
