//Problem3

let str="          FunctionUp "

let trim=function(){
    console.log(str.trim());
    return str.trim();
}

let toLowerCase=function(){
    console.log(str.trim().toLowerCase())
    return str.trim().toLowerCase();
}

let toUpperCase=function(){
    console.log(str.trim().toUpperCase())
    return str.trim().toUpperCase();
}

module.exports.trimString=trim;
module.exports.lowerCase=toLowerCase;
module.exports.upperCase=toUpperCase;