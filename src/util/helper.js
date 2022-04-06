//Problem2

const monthNames=["January","Febuary","March","April","May","June",
"July","August","September","October","November","December"]

let d= new Date();
let currDate= function(){
   console.log(d);
   return d;
}

let currMonth=function(){  
    console.log(monthNames[d.getMonth()])
    return d.getMonth();
}

let batch=function(){
    console.log('Thorium, W3D1, the topic for today is Nodejs module system');
    return 'Thorium, W3D1, the topic for today is Nodejs module system';
}


module.exports.printDate=currDate;
module.exports.printMonth=currMonth;
module.exports.getBatchInfo=batch;
module.exports.month_Names=monthNames;