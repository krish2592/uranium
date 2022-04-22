const jwt=require('jsonwebtoken')


let checkUserTokenAuth=async function(req,res,next){
    try{
    let token =req.headers["x-auth-token"]

    if(!token) token =req.headers["X-Auth-Token"]

    if(!token) return res.status(400).send({msg:"x-auth-token is required!"})

    let decodeToken

    try{
        decodeToken= jwt.verify(token,"Student of uranium batch" )
    } 
    catch(error){
        res.status(400).send({msg:"Error",error:error.message})
    }

   // if(!decodeToken) return res.send({msg:"Not a valid Token!"})

    let userId=req.params.userId

    if(userId != decodeToken.userID) return res.status(400).send({msg: "User is not authorise to perform this action!"})
    
    next()

    } catch(error){
        
        res.status(400).send({msg:"Error",error:error.message})
    }

}

module.exports.checkUserTokenAuth=checkUserTokenAuth;