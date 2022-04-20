

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    //counter
    next()
}

let checkFreeAppUser=function(req,res,next){
   //let isFreeAppUser=req.headers.isfreeappuser;
   req.body["isFreeAppUser"]=req.headers.isfreeappuser;
   let isFreeAppUser=req.body.isFreeAppUser;
   if(isFreeAppUser){
    console.log(req.body)
       next();
   }
   else {
       res.send("Request is missing a mendatory header!")
   }
    
}

//module.exports.mid1= mid1
//module.exports.mid2= mid2
//module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.checkFreeAppUser=checkFreeAppUser;
