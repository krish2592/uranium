const jwt=require('jsonwebtoken')


let checkUserTokenAuth=async function(req,res,next){
    try{
    let token =req.headers["x-auth-token"]

    if(!token) token =req.headers["X-Auth-Token"]

    if(!token) return res.send({msg:"x-auth-token is required!"})

    let decodeToken= jwt.verify(token,"Student of uranium batch" )

    if(!decodeToken) return res.send({msg:"Not a valid Token!"})

    let userId=req.params.userId

    if(userId != decodeToken.userId) return res.send({msg: "User is not authorise to perform this action!"})
    
    next()

    } catch(error){
        
        res.send({msg:error.message})
    }

}

module.exports.checkUserTokenAuth=checkUserTokenAuth;