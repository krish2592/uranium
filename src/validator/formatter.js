//Problem3

let str="          FunctionUp "

let trimString=function(){
    console.log(str.trim());
    return str.trim();
}

let lowerCase=function(){
    console.log(str.trim().toLowerCase())
    return str.trim().toLowerCase();
}

let upperCase=function(){
    console.log(str.trim().toUpperCase())
    return str.trim().toUpperCase();
}

module.exports.trim=trimString;
module.exports.toLowerCase=lowerCase;
module.exports.toUpperCase=upperCase;