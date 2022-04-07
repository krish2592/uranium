//Problem2

const monthNames=["January","Febuary","March","April","May","June",
"July","August","September","October","November","December"]

let d= new Date();
let printDate= function(){
   console.log(d);
   return d;
}

let printMonth=function(){  
    console.log(monthNames[d.getMonth()])
    return d.getMonth();
}

let getBatchInfo=function(){
    console.log('Thorium, W3D1, the topic for today is Nodejs module system');
    return 'Thorium, W3D1, the topic for today is Nodejs module system';
}


module.exports.currDate=printDate;
module.exports.currMonth=printMonth;
module.exports.batchInfo=getBatchInfo;
module.exports.month_Names=monthNames;